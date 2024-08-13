const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const License = require("../models/license");
const LicenseUsers = require("../models/license_users");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/license.xml"]);

module.exports = {
    status: async function (companyNo, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo,
                contractNo: contractNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new License();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
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
            logger.error(`license_manager.status error : ${err}`);
            return null;
        }
    },
    users: async function (companyNo, contractNo, licenseNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo,
                contractNo: contractNo,
                licenseNo: licenseNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("license", "users", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new LicenseUsers();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setLicenseNo(record.license_no);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`license_manager.users error : ${err}`);
            return null;
        }
    },
    insertUsers: async function (companyNo, contractNo, licenseNo, accountNo, registCompany, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {

                let param = {
                    companyNo: companyNo, 
                    contractNo: contractNo,
                    licenseNo: licenseNo, 
                    accountNo: accountNo, 
                    registCompany: registCompany,  
                    registUser: registUser, 
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("license", "insert_users", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count = result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`license_manager.insertUsers error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`license_manager.insertUsers error : ${err}`);
            return -1;
        }
    },
    deleteUsers: async function (companyNo, contractNo, licenseNo, accountNo) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                let param = {
                    companyNo: companyNo, 
                    contractNo: contractNo,
                    licenseNo: licenseNo, 
                    accountNo: accountNo, 
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("license", "delete_users", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);
                count = result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`license_manager.deleteUsers error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`license_manager.deleteUsers error : ${err}`);
            return -1;
        }

        return count;
    },
};
