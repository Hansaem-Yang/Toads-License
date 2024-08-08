const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const User = require("../models/user.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/user.xml"]);

module.exports = {
    login: async function (userId) {
        try {
            let pool = await poolPromise;
            let param = { userId: userId };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("user", "dashboard_user", param, format);

            let result = await pool.request().query(query);
            let item = new User();

            result.recordset.forEach((record) => {
                item.setContractNo(record.contract_no);
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setCompanyDiv(record.company_div);
                item.setUserNo(record.user_no);
                item.setUserId(record.user_id);
                item.setUserName(record.user_name);
                item.setPassword(record.password);
                item.setUserAuth(record.user_auth);
                item.setUseYn(record.use_yn);
            });

            return item;
        } catch (err) {
            logger.error(`user_manager.login error : ${err}`);
            return null; 
        }
    },
    logout: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { email: email };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("user", "dashboard_user", param, format);

            let result = await pool.request().query(query);
            let item = new User();

            result.recordset.forEach((record) => {
                item.setContractNo(record.contract_no);
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setCompanyDiv(record.company_div);
                item.setUserNo(record.user_no);
                item.setUserId(record.user_id);
                item.setUserName(record.user_name);
                item.setPassword(record.password);
                item.setUserAuth(record.user_auth);
                item.setUseYn(record.use_yn);
            });

            return item;
        } catch (err) {
            logger.error(`user_manager.logout error : ${err}`);
            return null; 
        }
    },
};
