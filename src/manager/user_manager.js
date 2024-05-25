const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Member = require("../models/member.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/user.xml"]);

module.exports = {
    login: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { email: email };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("user", "member", param, format);

            let result = await pool.request().query(query);
            let item = new Member();

            result.recordset.forEach((record) => {
                item.setCompanyNo(record.company_no);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
                item.setRegistDatetime(record.regist_datetime);
                item.setRegistCompany(record.regist_company);
                item.setRegistUser(record.regist_user);
                item.setModifyDatetime(record.modify_datetime);
                item.setModifyCompany(record.modify_company);
                item.setModifyUser(record.modify_user);
            });

            return item;
        } catch (err) {
            logger.error(`user.login error : ${err}`);
            return null; 
        }
    },
    logout: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { email: email };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("user", "member", param, format);

            let result = await pool.request().query(query);
            let item = new Member();

            result.recordset.forEach((record) => {
                item.setCompanyNo(record.company_no);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
                item.setRegistDatetime(record.regist_datetime);
                item.setRegistCompany(record.regist_company);
                item.setRegistUser(record.regist_user);
                item.setModifyDatetime(record.modify_datetime);
                item.setModifyCompany(record.modify_company);
                item.setModifyUser(record.modify_user);
            });

            return item;
        } catch (err) {
            logger.error(err);
            return null; 
        }
    },
};
