const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const SatelliteUsage = require("../models/satellite_usage");
const SatelliteUsageByPeriod = require("../models/satellite_usage_by_period");
const Company = require("../models/company");
const logger = require("../logger/logger");

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

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setTotalUsage(record.total_usage);
                item.setMonthlyUsage(record.monthly_usage);
                item.setTotalUsers(record.total_users);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                item.setTime(record.time);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.satelliteUsage : ${err}`);
            return null;
        }
    },
    monthlySatelliteUsage: async function () {
        try {
            let pool = await poolPromise;
            let param = {};
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "monthly_satellite_usage", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsageByPeriod();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setPlanId(record.plan_id);
                item.setPlanEname(record.plan_ename);
                item.setTime(record.time);
                item.setPeriod(record.period);
                item.setUsage(record.usage);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.satelliteUsageByMonthly : ${err}`);
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
    satelliteUsageByUser: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "satellite_usage_by_user", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsage();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setTotalUsage(record.total_usage);
                item.setAnnualUsage(record.annual_usage);
                item.setMonthlyUsage(record.monthly_usage);
                item.setDaliyUsage(record.daliy_usage);
                item.setTotalUsers(record.total_users);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                item.setTime(record.time);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.satelliteUsageByUser : ${err}`);
            return null;
        }
    },
    annualSatelliteUsageByUser: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "annual_satellite_usage_by_user", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsageByPeriod();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setPeriod(record.period);
                item.setUsage(record.usage);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.annual_satellite_usage_by_user : ${err}`);
            return null;
        }
    },
    monthlySatelliteUsageByUser: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("dashboard", "monthly_satellite_usage_by_user", param, format);

            let result = await pool.request().query(query);
            let list = [];
            
            result.recordset.forEach((record) => {
                let item = new SatelliteUsageByPeriod();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setPeriod(record.period);
                item.setUsage(record.usage);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`dashboard_manager.monthlySatelliteUsageByUser : ${err}`);
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
