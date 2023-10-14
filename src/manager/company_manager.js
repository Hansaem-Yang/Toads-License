const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Company = require("../models/company");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/company.xml"]);

module.exports = {
    list: async function () {
        try {
            let pool = await poolPromise;
            let param = {};
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "list", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Company();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setBusinessPlace(record.business_place);
                item.setTelephone(record.telephone);
                item.setRegistDatetime(record.regist_datetime);
                item.setRegistCompany(record.regist_company);
                item.setRegistUser(record.regist_user);
                item.setModifyDatetime(record.modify_datetime);
                item.setModifyCompany(record.modify_company);
                item.setModifyUser(record.modify_user);

                list.push(member);
            });

            return list;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    detail: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Company();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setBusinessPlace(record.business_place);
                item.setTelephone(record.telephone);
                item.setRegistDatetime(record.regist_datetime);
                item.setRegistCompany(record.regist_company);
                item.setRegistUser(record.regist_user);
                item.setModifyDatetime(record.modify_datetime);
                item.setModifyCompany(record.modify_company);
                item.setModifyUser(record.modify_user);
            }

            return item;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    insert: async function (companyName, ownerName, businessNo, residentNo, businessPlace, telephone, registUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyName: companyName, 
                ownerName: ownerName, 
                businessNo: businessNo, 
                residentNo: residentNo, 
                businessPlace: businessPlace, 
                telephone: telephone,
                registUser: registUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    update: async function (companyNo, companyName, ownerName, businessNo, residentNo, businessPlace, telephone, modifyUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                companyName: companyName, 
                ownerName: ownerName, 
                businessNo: businessNo, 
                residentNo: residentNo, 
                businessPlace: businessPlace, 
                telephone: telephone,
                modifyUser: modifyUser,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    delete: async function (companyNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < companyNos.length; i++) {
                    let param = {
                        companyNo: companyNos[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("company", "delete", param, format);

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
