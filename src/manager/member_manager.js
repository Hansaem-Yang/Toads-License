const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Member = require("../models/member");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/member.xml"]);

module.exports = {
    list: async function (companyId) {
        try {
            let pool = await poolPromise;
            let param = { companyId: companyId };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "list", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Member();

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

                list.push(member);
            });

            return list;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    detail: async function (companyId, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyId: companyId, 
                contractNo: contractNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Member();
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
            }

            return item;
        } catch (err) {
            logger.error(err);
            return null;
        }
    },
    insert: async function (companyId, memberName, email, password, memberType, roleCode, phone, useStatus, regCompany, regMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
                memberName: memberName,
                email: email,
                password: password,
                memberType: memberType,
                roleCode: roleCode,
                phone: phone,
                useStatus: useStatus,
                regCompany: regCompany,
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
    update: async function (companyId, memberId, memberName, email, password, memberType, roleCode, phone, useStatus, uptCompany, uptMember) {
        try {
            let pool = await poolPromise;
            let param = {
                companyId: companyId,
                memberId: memberId,
                memberName: memberName,
                email: email,
                password: password,
                memberType: memberType,
                roleCode: roleCode,
                phone: phone,
                useStatus: useStatus,
                uptCompany: uptCompany,
                uptMember: uptMember,
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
    delete: async function (companyId, memberId) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < memberId.length; i++) {
                    let param = {
                        companyId: companyId,
                        memberId: memberId[i],
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
