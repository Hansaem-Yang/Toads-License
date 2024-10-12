const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const ContractCancel = require("../models/contract_cancel");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/contract_cancel.xml"]);

module.exports = {
    status: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract_cancel", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new ContractCancel();
                
                item.setContractNo(record.contract_no);
                item.setSeq(record.seq);
                item.setReason(record.reason);
                item.setContents(record.contents);
                item.setRequestDate(record.request_date);
                item.setApprovalDate(record.approval_date);
                item.setCancelDate(record.cancel_date);
                item.setStatus(record.status);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_cancel_manager.status error : ${err}`);
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
            let query = mybatisMapper.getStatement("contract_cancel", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new ContractCancel();
                
                item.setContractNo(record.contract_no);
                item.setSeq(record.seq);
                item.setReason(record.reason);
                item.setContents(record.contents);
                item.setRequestDate(record.request_date);
                item.setApprovalDate(record.approval_date);
                item.setCancelDate(record.cancel_date);
                item.setStatus(record.status);
            }

            return item;
        } catch (err) {
            logger.error(`contract_cancel_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (contractNo, reason, contents, status) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    reason: reason,
                    contents: contents,
                    status: status
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_cancel", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_cancel_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_cancel_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (contractNo, seq, reason, contents) {
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
                    reason: reason,
                    contents: contents,
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_cancel", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_cancel_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_cancel_manager.update error : ${err}`);
            return -1;
        }
    },
    received: async function (contractNo, seq, status) {
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
                    status: status
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_cancel", "received", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_cancel_manager.approval error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_cancel_manager.approval error : ${err}`);
            return -1;
        }
    },
    approval: async function (contractNo, seq, status) {
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
                    status: status
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_cancel", "approval", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_cancel_manager.approval error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_cancel_manager.approval error : ${err}`);
            return -1;
        }
    },
    cancel: async function (contractNo, seq, cancelReason, status) {
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
                    cancelReason: cancelReason,
                    status: status
                };

                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract_cancel", "cancel", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_cancel_manager.cancel error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_cancel_manager.cancel error : ${err}`);
            return -1;
        }
    },
};
