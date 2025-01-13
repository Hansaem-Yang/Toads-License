const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Plan = require("../models/plan");
const PlanAmount = require("../models/plan_amount");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/plan.xml"]);

module.exports = {
    codes: async function () {
        try {
            let pool = await poolPromise;
            let param = { };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("plan", "codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Contract();

                item.setPlanId(record.plan_id);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`plan.codes error : ${err}`);
            return null;
        }
    },
    status: async function () {
        try {
            let pool = await poolPromise;
            let param = { };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("plan", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Plan();

                item.setPlanId(record.plan_id);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                item.setFlatDiv(record.flat_div);
                item.setOdmDiv(record.odm_div);
                item.setApplyDate(record.apply_date);
                item.setFinishDate(record.finish_date);
                item.setActiveYn(record.active_yn);
                item.setRemark(record.remark);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`plan_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (planId) {
        try {
            let pool = await poolPromise;
            let param = { 
                planId: planId, 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("plan", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new Plan();

                item.setPlanId(record.plan_id);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                item.setFlatDiv(record.flat_div);
                item.setOdmDiv(record.odm_div);
                item.setApplyDate(record.apply_date);
                item.setFinishDate(record.finish_date);
                item.setActiveYn(record.active_yn);
                item.setRemark(record.remark);

                query = mybatisMapper.getStatement("plan", "plan_amounts", param, format);
                let planAmountResult = await pool.request().query(query);
                let planAmounts = [];

                planAmountResult.recordset.forEach((childRecord) => {
                    let childItem = new PlanAmount();

                    childItem.setPlanId(childRecord.plan_id);
                    childItem.setPlanSeq(childRecord.plan_seq);
                    childItem.setAmount(childRecord.amount);
                    childItem.setTime(childRecord.time);
                    childItem.setBillBase1(childRecord.bill_base_1);
                    childItem.setSurcharge(childRecord.surcharge);
                    childItem.setBillBase2(childRecord.bill_base_2);
                    childItem.setApplyDate(childRecord.apply_date);
                    childItem.setFinishDate(childRecord.finish_date);
                    childItem.setActiveYn(childRecord.active_yn);
    
                    planAmounts.push(childItem);
                });

                item.setPlanAmounts(planAmounts);
            }

            return item;
        } catch (err) {
            logger.error(`plan_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (planKname, planEname, flatDiv, odmDiv, applyDate, finishDate, activeYn, remark, planAmounts, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    planKname: planKname,
                    planEname: planEname,
                    flatDiv: flatDiv,
                    odmDiv: odmDiv,
                    applyDate: applyDate,
                    finishDate: finishDate,
                    activeYn: activeYn,
                    remark: remark,
                    registUser: registUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("plan", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];
                
                param = { };
                format = { language: "sql", indent: " " };
                query = mybatisMapper.getStatement("plan", "max_plan_id", param, format);

                request = new sql.Request(transaction);
                result = await request.query(query);

                if (result.recordset.length > 0) {
                    let record = result.recordset[0];
                    let maxPlanId = record.max_plan_id;

                    // 라이센스 정보
                    for (let i = 0; i < planAmounts.length; i++) {
                        param = {
                            planId: maxPlanId,
                            planSeq: planAmounts[i].planSeq,
                            amount: planAmounts[i].amount,
                            time: planAmounts[i].time,
                            billBase1: planAmounts[i].billBase1,
                            surcharge: planAmounts[i].surcharge,
                            billBase2: planAmounts[i].billBase2,
                            applyDate: planAmounts[i].applyDate,
                            finishDate: planAmounts[i].finishDate,
                            activeYn: planAmounts[i].activeYn,
                            registUser: registUser
                        };
                        format = { language: "sql", indent: " " };
                        query = mybatisMapper.getStatement("plan", "plan_amount_insert", param, format);
                        
                        request = new sql.Request(transaction);
                        result = await request.query(query);

                        count += result.rowsAffected[0];
                    }
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`plan_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`plan_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (planId, planKname, planEname, flatDiv, odmDiv, applyDate, finishDate, activeYn, remark, planAmounts, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    planId: planId,
                    planKname: planKname,
                    planEname: planEname,
                    flatDiv: flatDiv,
                    odmDiv: odmDiv,
                    applyDate: applyDate,
                    finishDate: finishDate,
                    activeYn: activeYn,
                    remark: remark,
                    modifyUser: modifyUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("plan", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];
                
                // 요금제 가격 정보
                var sqlName = '';
                for (let i = 0; i < planAmounts.length; i++) {
                    switch(planAmounts[i].mode)
                    {
                        case 'I':
                            sqlName = 'plan_amount_insert';
                            break;
                        case 'U':
                            sqlName = 'plan_amount_update';
                            break;
                        case 'D':
                            sqlName = 'plan_amount_delete';
                            break;
                    }

                    param = {
                        planId: planId,
                        planSeq: planAmounts[i].planSeq,
                        amount: planAmounts[i].amount,
                        time: planAmounts[i].time,
                        billBase1: planAmounts[i].billBase1,
                        surcharge: planAmounts[i].surcharge,
                        billBase2: planAmounts[i].billBase2,
                        applyDate: planAmounts[i].applyDate,
                        finishDate: planAmounts[i].finishDate,
                        activeYn: planAmounts[i].activeYn,
                        registUser: modifyUser,
                        modifyUser: modifyUser
                    };
                    format = { language: "sql", indent: " " };
                    query = mybatisMapper.getStatement("plan", sqlName, param, format);
                    
                    request = new sql.Request(transaction);
                    result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`plan_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`plan_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (planIds) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < planIds.length; i++) {
                    let param = {
                        planId: planIds[i].planId,
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("plan", "plan_amount_delete_all", param, format);
                    let request = new sql.Request(transaction);
                    let result = await request.query(query);
                                        
                    query = mybatisMapper.getStatement("plan", "delete", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`plan_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`plan_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
