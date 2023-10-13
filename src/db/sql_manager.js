const sql = require("mssql");
const config = require("../config/config");
const logger = require("../logger/logger.js");

const poolPromise = new sql.ConnectionPool(config.sql)
    .connect()
    .then((pool) => {
        logger.info("Connected to MSSQL");
        return pool;
    })
    .catch((err) => logger.error(`MSSQL Connect error : ${err}`));

module.exports = {
    sql,
    poolPromise,
};
