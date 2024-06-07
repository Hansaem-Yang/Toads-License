const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Nations = require("../models/nations");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/nations.xml"]);

module.exports = {
    status: async function (language) {
        try {
            let pool = await poolPromise;
            let param = { language : language };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("nations", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Nations();

                item.setNationIso2(record.nation_iso2);
                item.setNationIso3(record.nation_iso3);
                item.setNationEname(record.nation_ename);
                item.setNationKname(record.nation_kname);
                item.setNationCode(record.nation_code);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`nations_manager.list error : ${err}`);
            return null;
        }
    },
};
