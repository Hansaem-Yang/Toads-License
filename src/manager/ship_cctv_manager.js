const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const ShipCCTV = require("../models/ship_cctv");
const logger = require("../logger/logger");

mybatisMapper.createMapper(["./src/sql/ship_cctv.xml"]);

module.exports = {
    status: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo
             };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("cctv", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new ShipCCTV();

                item.setContractNo(record.contract_no);
                item.setShipSeq(record.ship_seq);
                item.setShipName(record.ship_name);
                item.setCctvNo(record.cctv_no);
                item.setLocation(record.location);
                item.setCctvUrl(record.cctv_url);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`ship_cctv_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (contractNo, shipSeq, cctvNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                contractNo: contractNo, 
                shipSeq: shipSeq,
                cctvNo: cctvNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("cctv", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;

            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new ShipCCTV();

                item.setContractNo(record.contract_no);
                item.setShipSeq(record.ship_seq);
                item.setShipName(record.ship_name);
                item.setCctvNo(record.cctv_no);
                item.setLocation(record.location);
                item.setCctvUrl(record.cctv_url);
            }

            return item;
        } catch (err) {
            logger.error(`ship_cctv_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (contractNo, shipSeq, location, cctvUrl) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    shipSeq: shipSeq,
                    location: location,
                    cctvUrl: cctvUrl,
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("cctv", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`ship_cctv_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`ship_cctv_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (contractNo, shipSeq, cctvNo, location, cctvUrl) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
                let param = {
                    contractNo: contractNo,
                    shipSeq: shipSeq,
                    cctvNo: cctvNo,
                    location: location,
                    cctvUrl: cctvUrl,
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("cctv", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`ship_cctv_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`ship_cctv_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (cctvIds) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < cctvIds.length; i++) {
                    let param = {
                        contractNo: cctvIds[i].contractNo,
                        shipSeq: cctvIds[i].shipSeq,
                        cctvNo: cctvIds[i].cctvNo,
                    };
                    let format = { language: "sql", indent: " " };                                        
                    let query = mybatisMapper.getStatement("cctvNo", "delete", param, format);
                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`ship_cctv_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`ship_cctv_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
