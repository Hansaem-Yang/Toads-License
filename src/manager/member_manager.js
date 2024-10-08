const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Member = require("../models/member");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/member.xml"]);

module.exports = {
    status: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Member();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`member.status error : ${err}`);
            return null;
        }
    },
    detail: async function (companyNo, accountNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo, 
                accountNo: accountNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Member();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setAccountNo(record.account_no);
                item.setUserName(record.user_name);
                item.setEmail(record.email);
                item.setPassword(record.password);
                item.setUserType(record.user_type);
                item.setNationCode(record.nation_code);
                item.setPhoneNumber(record.phone_number);
                item.setUseStatus(record.use_status);
            }

            return item;
        } catch (err) {
            logger.error(`member.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, userName, email, password, userType, nationCode, phoneNumber, useStatus, registCompany, registUser) {
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
                registCompany: registCompany,
                registUser: registUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`member.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (companyNo, accountNo, userName, email, userType, nationCode, phoneNumber, useStatus, modifyCompany, modifyUser) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                accountNo: accountNo,
                userName: userName,
                email: email,
                userType: userType,
                nationCode: nationCode,
                phoneNumber: phoneNumber,
                useStatus: useStatus,
                modifyCompany: modifyCompany,
                modifyUser: modifyUser,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`member.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (accountNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < accountNos.length; i++) {
                    let param = {
                        companyNo: accountNos[i].companyNo,
                        accountNo: accountNos[i].accountNo,
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
                logger.error(`member.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`member.delete error : ${err}`);
            return -1;
        }

        return count;
    },
    changePassword: async function (companyNo, accountNo, password, modifyCompany, modifyUser) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
                accountNo: accountNo,
                password: password,
                modifyCompany: modifyCompany,
                modifyUser: modifyUser,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("member", "changePassword", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`member.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
