const { poolPromise, sql } = require("../../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const License = require("../../models/license");
const logger = require("../../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/license.xml"]);

module.exports = {
    status: async function (companyId) {
        try {
            let pool = await poolPromise;
            let param = { companyId: companyId };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new License();

                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setLicenseNo(record.license_no);
                item.setLicenseType(record.license_type);
                item.setAppName(record.app_name);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setLicenseCount(record.license_count);
                item.setUnitPrice(record.unit_price);
                item.setAmount(record.amount);
                item.setDiscountedAmount(record.discounted_amount);
                item.setActualAmount(record.actual_amount);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`license_manager.status : ${err}`);
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
            let query = mybatisMapper.getStatement("license", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new License();
                
                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setLicenseNo(record.license_no);
                item.setLicenseType(record.license_type);
                item.setAppName(record.app_name);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setLicenseCount(record.license_count);
                item.setUnitPrice(record.unit_price);
                item.setAmount(record.amount);
                item.setDiscountedAmount(record.discounted_amount);
                item.setActualAmount(record.actual_amount);
            }

            return item;
        } catch (err) {
            logger.error(`license_manager.detail : ${err}`);
            return null;
        }
    },
    insert: async function (companyId, contractNo, licenseType, appName, licenseCount, startDate, endDate, registCompany, registUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
                contractNo: contractNo,
                licenseType: licenseType,
                appName: appName,
                licenseCount: licenseCount,
                startDate: startDate,
                endDate: endDate,
                registCompany: registCompany,
                registUser: registUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`license_manager.insert : ${err}`);
            return -1;
        }
    },
    update: async function (companyId, contractNo, licenseNo, licenseType, appName, licenseCount, startDate, endDate, modifyCompany, modifyUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
                contractNo: contractNo,
                licenseNo: licenseNo,
                licenseType: licenseType,
                appName: appName,
                licenseCount: licenseCount,
                startDate: startDate,
                endDate: endDate,
                modifyCompany: modifyCompany,
                modifyUser: modifyUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`license_manager.update : ${err}`);
            return -1;
        }
    },
    delete: async function (companyId, contractNo, licenseNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < licenseNos.length; i++) {
                    let param = {
                        companyId: companyId,
                        contractNo: contractNo,
                        licenseNo: licenseNos[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("license", "delete", param, format);

                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`license_manager.delete : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`license_manager.delete : ${err}`);
            return -1;
        }

        return count;
    },
};
