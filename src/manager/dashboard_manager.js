const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const SatelliteUsage = require("../models/satellite_usage.js");
const Company = require("../models/company.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/dashboard.xml"]);

module.exports = {
    satelliteUsage: async function () {
        try {
            let pool = await poolPromise;
            let param = {};
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "satellite_usage", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsage();

                item.setTotalCompanys(record.total_companys);
                item.setTotalUsers(record.total_users);
                item.setDaliyUsage(record.daliy_usage);
                item.setMonthlyUsage(record.monthly_usage);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.satelliteUsage : ${err}`);
            return null;
        }
    },
    companyAll: async function () {
        try {
            let pool = await poolPromise;
            let param = {};
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "company_all", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Company();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setCompanyDiv(record.company_div);
                item.setNation(record.nation);
                item.setNationCode(record.nation_code);
                item.setTelephone(record.telephone);
                item.setTotalLicenses(record.total_licenses);
                item.setTotalUsers(record.total_users);
                item.setTotalSatelliteUsage(record.total_satellite_usage);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.companyAll : ${err}`);
            return null;
        }
    },
    userSatelliteUsage: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "user_satellite_usage", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsage();

                item.setTotalContracts(record.total_contracts);
                item.setTotalUsers(record.total_users);
                item.setDaliyUsage(record.daliy_usage);
                item.setMonthlyUsage(record.monthly_usage);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.satelliteUsage : ${err}`);
            return null;
        }
    },
    company: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "company", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Company();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setOwnerName(record.owner_name);
                item.setCompanyDiv(record.company_div);
                item.setNation(record.nation);
                item.setNationCode(record.nation_code);
                item.setTelephone(record.telephone);
                item.setTotalLicenses(record.total_licenses);
                item.setTotalUsers(record.total_users);
                item.setTotalSatelliteUsage(record.total_satellite_usage);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.companyAll : ${err}`);
            return null;
        }
    },
};
