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

                item.setCompanyId(record.company_id);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setBusinessPlace(record.business_place);
                item.setTelephone(record.telephone);

                list.push(member);
            });

            return list;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    detail: async function (companyId) {
        try {
            let pool = await poolPromise;
            let param = { companyId: companyId };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                item = new Company();

                item.setCompanyId(record.company_id);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setBusinessPlace(record.business_place);
                item.setTelephone(record.telephone);
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
    update: async function (companyId, companyName, ownerName, businessNo, residentNo, businessPlace, telephone, modifyUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
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
    delete: async function (companyIds) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < companyIds.length; i++) {
                    let param = {
                        companyId: companyIds[i],
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
