const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Contract = require("../models/contract");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/contract.xml"]);

module.exports = {
    list: async function (companyId) {
        try {
            let pool = await poolPromise;
            let param = { companyId: companyId };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "list", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Contract();

                item.setCompanyId(record.company_id);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setContractor(record.contractor);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setRemark(record.remark);

                list.push(member);
            });

            return list;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    detail: async function (companyId, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyId: companyId, 
                contractNo: contractNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                item = new Contract();

                item.setCompanyId(record.company_id);
                item.setCompanyName(record.company_name);
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
            logger.error(err);
            return null;
        }
    },
    insert: async function (companyId, contractName, contractDate, contractor, contractPeriod, startDate, endDate, remark, registUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId, 
                contractName: contractName, 
                contractDate: contractDate, 
                contractor: contractor, 
                contractPeriod: contractPeriod, 
                startDate: startDate, 
                endDate: endDate, 
                remark: remark, 
                registUser: registUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    update: async function (companyId, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, remark, modifyUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId, 
                contractNo: contractNo,
                contractName: contractName, 
                contractDate: contractDate, 
                contractor: contractor, 
                contractPeriod: contractPeriod, 
                startDate: startDate, 
                endDate: endDate, 
                remark: remark, 
                modifyUser: modifyUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    delete: async function (companyId, contractNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < contractNos.length; i++) {
                    let param = {
                        companyId: companyId,
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
                logger.error(err);
                return -1;
            }
        } catch (err) {
            logger.error(err);
            return -1;
        }

        return count;
    },
};
