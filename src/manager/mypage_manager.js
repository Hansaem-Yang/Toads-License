const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Myinfo = require("../models/myinfo.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/mypage.xml"]);

module.exports = {
    info: async function (companyNo, accountNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo, 
                accountNo: accountNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("mypage", "info", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Myinfo();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setCompanyDiv(record.company_div);
                item.setBusinessNo(record.business_no);
                item.setResidentNo(record.resident_no);
                item.setPostCode(record.post_code);
                item.setBusinessPlace(record.business_place);
                item.setNation(record.nation);
                item.setNationCode(record.nation_code);
                item.setTelephone(record.telephone);
                
                item.setCompanyName(record.company_name);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setUserNation(record.user_nation);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
            }

            return item;
        } catch (err) {
            logger.error(`mypage.info error : ${err}`);
            return null;
        }
    },
};
