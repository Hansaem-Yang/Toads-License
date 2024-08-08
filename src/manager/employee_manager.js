const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Employee = require("../models/employee.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/employee.xml"]);

module.exports = {
    status: async function () {
        try {
            let pool = await poolPromise;
            let param = {};
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("employee", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Employee();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setEmpNo(record.emp_no);
                item.setEmpName(record.emp_name);
                item.setEmpEname(record.emp_ename);
                item.setEmail(record.email);
                item.setEnterDate(record.enter_date);
                item.setNation(record.nation);
                item.setIdNo(record.id_no);
                item.setQuitDate(record.quit_date);
                item.setPassword(record.password);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`employee.status error : ${err}`);
            return null;
        }
    },
    detail: async function (empNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                empNo: empNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("employee", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];

                item = new Employee();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setEmpNo(record.emp_no);
                item.setEmpName(record.emp_name);
                item.setEmpEname(record.emp_ename);
                item.setEmail(record.email);
                item.setEnterDate(record.enter_date);
                item.setNation(record.nation);
                item.setIdNo(record.id_no);
                item.setQuitDate(record.quit_date);
                item.setPassword(record.password);
            }

            return item;
        } catch (err) {
            logger.error(`employee.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, empNo, empName, empEname, email, enterDate, nation, idNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo, 
                empNo: empNo, 
                empName: empName, 
                empEname: empEname, 
                email: email, 
                enterDate: enterDate, 
                nation: nation, 
                idNo: idNo
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("employee", "insert", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`employee.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (companyNo, empNo, empName, empEname, email, enterDate, nation, idNo) {
        try {
            let pool = await poolPromise;
            let param = {
                companyNo: companyNo, 
                empNo: empNo, 
                empName: empName, 
                empEname: empEname, 
                email: email, 
                enterDate: enterDate, 
                nation: nation, 
                idNo: idNo
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("employee", "update", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`employee.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (empNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < empNos.length; i++) {
                    let param = {
                        empNo: empNos[i].empNo
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("employee", "delete", param, format);

                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`employee.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`employee.delete error : ${err}`);
            return -1;
        }

        return count;
    },
    changePassword: async function (empNo, password) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let param = {
                empNo: empNo,
                password: password,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("employee", "changePassword", param, format);

            let result = await pool.request().query(query);

            return result.rowsAffected[0];
        } catch (err) {
            logger.error(`employee.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
