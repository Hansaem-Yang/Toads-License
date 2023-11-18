const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Member = require("../models/member.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/user.xml"]);

module.exports = {
    member: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { email: email };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("user", "member", param, format);

            let result = await pool.request().query(query);
            let item = new Member();

            result.recordset.forEach((record) => {
                item.setCompanyId(record.company_id);
                item.setMemberId(record.member_id);
                item.setMemberName(record.member_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setMemberType(record.member_type);
                item.setRoleCode(record.role_code);
                item.setPhone(record.phone);
                item.setUseStatus(record.use_status);
                item.setRegDate(record.reg_date);
                item.setRegCompany(record.reg_company);
                item.setRegMember(record.reg_user);
                item.setUptDate(record.upt_date);
                item.setUptCompany(record.upt_company);
                item.setUptMember(record.upt_member);
            });

            return item;
        } catch (err) {
            logger.error(err);
            return null; 
        }
    },
};
