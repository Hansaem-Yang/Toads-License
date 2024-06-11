const { poolPromise, sql } = require("../../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Contract = require("../../models/contract");
const logger = require("../../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/contract.xml"]);

module.exports = {
    status: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Contract();

                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setContractor(record.contractor);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setRemark(record.remark);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (companyNo, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo, 
                contractNo: contractNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new Contract();
                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setContractor(record.contractor);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setRemark(record.remark);
            }

            return item;
        } catch (err) {
            logger.error(`contract_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
        amount, discountedAmount, actualAmount, remark, licenses, regCompany, regUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                let param = {
                    companyNo: companyNo, 
                    contractName: contractName, 
                    contractDate: contractDate, 
                    contractor: contractor, 
                    contractPeriod: contractPeriod, 
                    startDate: startDate, 
                    endDate: endDate, 
                    amount: amount, 
                    discountedAmount: discountedAmount, 
                    actualAmount: actualAmount,
                    remark: remark, 
                    regCompany: regCompany,
                    regUser: regUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "insert", param, format);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                for (let i = 0; i < contractNos.length; i++) {
                    let param = {
                        companyNo: companyNo,
                        contractNo: contractNos[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract", "delete", param, format);

                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.delete error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (companyNo, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
        amount, discountedAmount, actualAmount, remark, licenses, uptCompany, uptUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo, 
                contractNo: contractNo,
                contractName: contractName, 
                contractDate: contractDate, 
                contractor: contractor, 
                contractPeriod: contractPeriod, 
                startDate: startDate, 
                endDate: endDate, 
                amount: amount, 
                discountedAmount: discountedAmount, 
                actualAmount: actualAmount,
                remark: remark, 
                modifyUser: modifyUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`contract_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (companyNo, contractNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < contractNos.length; i++) {
                    let param = {
                        companyNo: companyNo,
                        contractNo: contractNos[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract", "delete", param, format);

                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
