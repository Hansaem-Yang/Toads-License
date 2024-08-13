const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const ContractManager = require("../models/contract_manager");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/contract_manager.xml"]);

module.exports = {
    checkEmail: async function (email) {
        try {
            let pool = await poolPromise;
            let param = { 
                email: email,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_manager", "checkEmail", param, format);

            let result = await pool.request().query(query);

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                if (record.cnt > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }

            return false;
        } catch (err) {
            logger.error(`contract_manager_manager.detail error : ${err}`);
            return false;
        }
    },
    status: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_manager", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new ContractManager();

                item.setContractNo(record.contract_no);
                item.setSeq(record.seq);
                item.setEmail(record.email);
                item.setPwd(record.pwd);
                item.setName(record.name);
                item.setUserAuth(record.user_auth);
                item.setUseYn(record.use_yn);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_manager_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (contractNo, seq) {
        try {
            let pool = await poolPromise;
            let param = { 
                contractNo: contractNo,
                seq: seq,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_manager", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new ContractManager();

                item.setContractNo(record.contract_no);
                item.setSeq(record.seq);
                item.setEmail(record.email);
                item.setPwd(record.pwd);
                item.setName(record.name);
                item.setUserAuth(record.user_auth);
                item.setUseYn(record.use_yn);
            }

            return item;
        } catch (err) {
            logger.error(`contract_manager_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (contractNo, email, pwd, name, userAuth, useYn, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    email: email,
                    pwd: pwd,
                    name: name,
                    userAuth: userAuth,
                    useYn: useYn,
                    registUser: registUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_manager", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (contractNo, seq, email, pwd, name, userAuth, useYn, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    seq: seq,
                    email: email,
                    pwd: pwd,
                    name: name,
                    userAuth: userAuth,
                    useYn: useYn,
                    modifyUser: modifyUser
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_manager", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (seqs) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < seqs.length; i++) {
                    let param = {
                        contractNo: seqs[i].contractNo,
                        seq: seqs[i].seq,
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract_manager", "delete", param, format);
                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_manager_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
    changePassword: async function (contractNo, seq, pwd) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                let param = {
                    contractNo: contractNo,
                    seq: seq,
                    pwd: pwd,
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_manager", "changePassword", param, format);
                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager_manager.changePassword error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_manager_manager.changePassword error : ${err}`);
            return -1;
        }

        return count;
    },
};
