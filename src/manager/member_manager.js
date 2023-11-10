const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Member = require("../models/member");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/member.xml"]);

module.exports = {
    list: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "list", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Member();

                item.setCompanyNo(record.company_no);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
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
            let query = mybatisMapper.getStatement("member", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Member();
                item.setCompanyNo(record.company_no);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
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
    insert: async function (companyNo, userName, email, password, userType, nationCode, phoneNumber, useStatus, regMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                userName: userName,
                email: email,
                password: password,
                userType: userType,
                nationCode: nationCode,
                phoneNumber: phoneNumber,
                useStatus: useStatus,
                regMember: regMember
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    update: async function (companyNo, accountNo, userName, email, password, userType, nationCode, phoneNumber, useStatus, uptMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                accountNo: accountNo,
                userName: userName,
                email: email,
                password: password,
                userType: userType,
                nationCode: nationCode,
                phoneNumber: phoneNumber,
                useStatus: useStatus,
                uptMember: uptMember
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(err);
            return -1;
        }
    },
    delete: async function (companyNo, accountNo) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < accountNo.length; i++) {
                    let param = {
                        companyNo: companyNo,
                        accountNo: accountNo[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("member", "delete", param, format);

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
