const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const ContractUser = require("../models/contract_user");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/contract_user.xml"]);

module.exports = {
    checkEmail: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { 
                email: email,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_user", "checkEmail", param, format);

            let result = await pool.request().query(query);

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                if (record.cnt > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }

            return false;
        } catch (err) {
            logger.error(`contract_user_manager.detail error : ${err}`);
            return false;
        }
    },
    status: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_user", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new ContractUser();
                
                item.setContractNo(record.contract_no);
                item.setContractDiv(record.contract_div);
                item.setUserNo(record.user_no);
                item.setUserId(record.user_id);
                item.setEmail(record.email);
                item.setUserPwd(record.user_pwd);
                item.setUserName(record.user_name);
                item.setApplyStartDate(record.apply_start_date);
                item.setApplyFinishDate(record.apply_finish_date);
                item.setLicenseNo(record.license_no);
                item.setShipSeq(record.ship_seq);
                item.setUseYn(record.use_yn);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_user_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (contractNo, userNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                contractNo: contractNo,
                userNo: userNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_user", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new ContractUser();

                item.setContractNo(record.contract_no);
                item.setContractDiv(record.contract_div);
                item.setUserNo(record.user_no);
                item.setUserId(record.user_id);
                item.setEmail(record.email);
                item.setUserPwd(record.user_pwd);
                item.setUserName(record.user_name);
                item.setApplyStartDate(record.apply_start_date);
                item.setApplyFinishDate(record.apply_finish_date);
                item.setLicenseNo(record.license_no);
                item.setShipSeq(record.ship_seq);
                item.setUseYn(record.use_yn);
            }

            return item;
        } catch (err) {
            logger.error(`contract_user_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (contractNo, userId, email, userPwd, userName, applyStartDate, applyFinishDate, 
        licenseNo, shipSeq, useYn, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    userId: userId,
                    email: email,
                    userPwd: userPwd,
                    userName: userName,
                    applyStartDate: applyStartDate,
                    applyFinishDate: applyFinishDate,
                    licenseNo: licenseNo,
                    shipSeq: shipSeq,
                    useYn: useYn,
                    registUser: registUser,
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_user", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_user_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_user_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (contractNo, userNo, userId, email,  userPwd, userName, applyStartDate, applyFinishDate, 
        licenseNo, shipSeq, useYn, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    userNo: userNo,
                    userId: userId,
                    email: email,
                    userName: userName,
                    applyStartDate: applyStartDate,
                    applyFinishDate: applyFinishDate,
                    licenseNo: licenseNo,
                    shipSeq: shipSeq,
                    useYn: useYn,
                    modifyUser: modifyUser
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_user", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_user_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_user_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (userNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < userNos.length; i++) {
                    let param = {
                        contractNo: userNos[i].contractNo,
                        userNo: userNos[i].userNo,
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract_user", "delete", param, format);
                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_user_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_user_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
    changePassword: async function (contractNo, userNo, userPwd) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                let param = {
                    contractNo: contractNo,
                    userNo: userNo,
                    userPwd: userPwd,
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_user", "changePassword", param, format);
                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_user_manager.changePassword error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_user_manager.changePassword error : ${err}`);
            return -1;
        }

        return count;
    },
};
