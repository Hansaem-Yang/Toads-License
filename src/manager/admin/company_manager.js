const { poolPromise, sql } = require("../../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Company = require("../../models/company");
const logger = require("../../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/company.xml"]);

module.exports = {
    status: async function (companyName) {
        try {
            let pool = await poolPromise;
            let param = {
                companyName: companyName
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Company();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setCompanyDiv(record.company_div);
                item.setNation(record.nation);
                item.setNationCode(record.nation_code);
                item.setTelephone(record.telephone);
                item.setTotalLicenses(record.total_licenses);
                item.setTotalUsers(record.total_users);
                item.setTotalSatelliteUsage(record.total_satellite_usage);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`company_manager.status error : ${err}`);
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
                let record = result.recordset[0];

                item = new Company();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setPostCode(record.post_code);
                item.setBusinessPlace(record.business_place);
                item.setNation(record.nation);
                item.setNationCode(record.nation_code);
                item.setTelephone(record.telephone);
                item.setRegDate(record.reg_date);
                item.setRegCompany(record.reg_company);
                item.setRegMember(record.reg_user);
                item.setUptDate(record.upt_date);
                item.setUptCompany(record.upt_company);
                item.setUptMember(record.upt_member);
            }

            return item;
        } catch (err) {
            logger.error(`company_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyName, ownerName, businessNo, residentNo, companyDiv,
        postCode, businessPlace, nation, nationCode, telephone, regCompany, regUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyName: companyName, 
                ownerName: ownerName, 
                businessNo: businessNo, 
                residentNo: residentNo, 
                companyDiv: companyDiv,
                postCode: postCode,
                businessPlace: businessPlace, 
                nation: nation,
                nationCode: nationCode,
                telephone: telephone,
                regCompany: regCompany,
                regUser: regUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "insert", param, format);
            
            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`company_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (companyId, companyName, ownerName, businessNo, residentNo, companyDiv,
        postCode, businessPlace, nation, nationCode, telephone, uptCompany, uptUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
                companyName: companyName, 
                ownerName: ownerName, 
                businessNo: businessNo, 
                residentNo: residentNo, 
                companyDiv: companyDiv,
                postCode: postCode,
                businessPlace: businessPlace, 
                nation: nation,
                nationCode: nationCode,
                telephone: telephone,
                uptCompany: uptCompany,
                uptUser: uptUser,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("company", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`company_manager.update error : ${err}`);
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
                logger.error(`company_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`company_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
