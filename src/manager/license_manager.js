const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const License = require("../models/license");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/license.xml"]);

module.exports = {
    list: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "list", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new License();

                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setLicenseNo(record.license_no);
                item.setLicenseType(record.license_type);
                item.setAppName(record.app_name);
                item.setLicenseCount(record.license_count);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setRegDate(record.reg_date);
                item.setRegCompany(record.reg_company);
                item.setRegMember(record.reg_user);
                item.setUptDate(record.upt_date);
                item.setUptCompany(record.upt_company);
                item.setUptMember(record.upt_member);

                list.push(member);
            });

            return list;
        } catch (err) {
            logger.error(err);
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
                item.setLicenseCount(record.license_count);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setRegDate(record.reg_date);
                item.setRegCompany(record.reg_company);
                item.setRegMember(record.reg_user);
                item.setUptDate(record.upt_date);
                item.setUptCompany(record.upt_company);
                item.setUptMember(record.upt_member);
            }

            return item;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    insert: async function (companyNo, contractNo, licenseType, appName, licenseCount, startDate, endDate, regMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                contractNo: contractNo,
                licenseType: licenseType,
                appName: appName,
                licenseCount: licenseCount,
                startDate: startDate,
                endDate: endDate,
                regMember: regMember
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    update: async function (companyNo, contractNo, licenseNo, licenseType, appName, licenseCount, startDate, endDate, uptMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                contractNo: contractNo,
                licenseNo: licenseNo,
                licenseType: licenseType,
                appName: appName,
                licenseCount: licenseCount,
                startDate: startDate,
                endDate: endDate,
                uptMember: uptMember
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    delete: async function (companyNo, contractNo, licenseNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < licenseNos.length; i++) {
                    let param = {
                        companyNo: companyNo,
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
