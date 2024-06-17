const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Contract = require("../models/contract.js");
const License = require("../models/license.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/contract.xml"]);

module.exports = {
    status: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Contract();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setContractor(record.contractor);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setMonetaryUnit(record.monetary_unit);
                item.setExchangeRate(record.exchange_rate);
                item.setAmount(record.amount);
                item.setDiscountedAmount(record.discounted_amount);
                item.setActualAmount(record.actual_amount);
                item.setRemark(record.remark);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_manager.status error : ${err}`);
            return null;
        }
    },
    detail: async function (companyNo, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo, 
                contractNo: contractNo 
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "detail", param, format);

            let result = await pool.request().query(query);
            let item = null;
            if (result.recordset.length > 0) {
                let record = result.recordset[0];
                
                item = new Contract();
                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setContractor(record.contractor);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setMonetaryUnit(record.monetary_unit);
                item.setExchangeRate(record.exchange_rate);
                item.setAmount(record.amount);
                item.setDiscountedAmount(record.discounted_amount);
                item.setActualAmount(record.actual_amount);
                item.setRemark(record.remark);
                
                query = mybatisMapper.getStatement("contract", "license_status", param, format);
                let childResult = await pool.request().query(query);
                let list = [];

                childResult.recordset.forEach((childRecord) => {
                    let childItem = new License();
    
                    childItem.setCompanyNo(childRecord.company_no);
                    childItem.setContractNo(childRecord.contract_no);
                    childItem.setLicenseNo(childRecord.license_no);
                    childItem.setLicenseType(childRecord.license_type);
                    childItem.setAppName(childRecord.app_name);
                    childItem.setStartDate(childRecord.start_date);
                    childItem.setEndDate(childRecord.end_date);
                    childItem.setLicenseCount(childRecord.license_count);
                    childItem.setUnitPrice(childRecord.unit_price);
                    childItem.setAmount(childRecord.amount);
                    childItem.setDiscountedAmount(childRecord.discounted_amount);
                    childItem.setActualAmount(childRecord.actual_amount);
    
                    list.push(childItem);
                });

                item.setLicenses(list);
            }

            return item;
        } catch (err) {
            logger.error(`contract_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
        monetaryUnit, exchangeRate, amount, discountedAmount, actualAmount, remark, licenses, registCompany, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                let param = {
                    companyNo: companyNo, 
                    contractName: contractName, 
                    contractDate: contractDate, 
                    contractor: contractor, 
                    contractPeriod: contractPeriod, 
                    startDate: startDate, 
                    endDate: endDate, 
                    monetaryUnit: monetaryUnit,
                    exchangeRate: exchangeRate,
                    amount: amount, 
                    discountedAmount: discountedAmount, 
                    actualAmount: actualAmount,
                    remark: remark, 
                    registCompany: registCompany,
                    registUser: registUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "insert", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];
                
                param = {
                    companyNo: companyNo, 
                    contractDate: contractDate
                };
                format = { language: "sql", indent: " " };
                query = mybatisMapper.getStatement("contract", "max_contract_no", param, format);

                request = new sql.Request(transaction);
                result = await request.query(query);

                if (result.recordset.length > 0) {
                    let record = result.recordset[0];
                    let max_company_no = record.max_contract_no;

                    for (let i = 0; i < licenses.length; i++) {
                        param = {
                            companyNo: companyNo,
                            contractNo: max_company_no,
                            licenseType: licenses[i].licenseType,
                            appName: licenses[i].appName,
                            licenseCount: licenses[i].licenseCount,
                            startDate: licenses[i].startDate,
                            endDate: licenses[i].endDate,
                            unitPrice: licenses[i].unitPrice,
                            amount: licenses[i].amount,
                            discountedAmount: licenses[i].discountedAmount,
                            actualAmount: licenses[i].actualAmount,
                            registCompany: registCompany,
                            registUser: registUser
                        };
                        format = { language: "sql", indent: " " };
                        query = mybatisMapper.getStatement("contract", "license_insert", param, format);
                        
                        request = new sql.Request(transaction);
                        result = await request.query(query);

                        count += result.rowsAffected[0];
                    }
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.insert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager.insert error : ${err}`);
            return -1;
        }
    },
    update: async function (companyNo, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
        monetaryUnit, exchangeRate, amount, discountedAmount, actualAmount, remark, licenses, modifyCompany, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {

                let param = {
                    companyNo: companyNo, 
                    contractNo: contractNo,
                    contractName: contractName, 
                    contractDate: contractDate, 
                    contractor: contractor, 
                    contractPeriod: contractPeriod, 
                    startDate: startDate, 
                    endDate: endDate, 
                    monetaryUnit: monetaryUnit,
                    exchangeRate: exchangeRate,
                    amount: amount, 
                    discountedAmount: discountedAmount, 
                    actualAmount: actualAmount,
                    remark: remark, 
                    modifyCompany: modifyCompany,
                    modifyUser: modifyUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                for (let i = 0; i < licenses.length; i++) {
                    format = { language: "sql", indent: " " };

                    param = {
                        companyNo: companyNo,
                        contractNo: contractNo,
                        licenseNo: licenses[i].licenseNo,
                        licenseType: licenses[i].licenseType,
                        appName: licenses[i].appName,
                        licenseCount: licenses[i].licenseCount,
                        startDate: licenses[i].startDate,
                        endDate: licenses[i].endDate,
                        unitPrice: licenses[i].unitPrice,
                        amount: licenses[i].amount,
                        discountedAmount: licenses[i].discountedAmount,
                        actualAmount: licenses[i].actualAmount,
                        registCompany: modifyCompany,
                        registUser: modifyUser,
                        modifyCompany: modifyCompany,
                        modifyUser: modifyUser
                    };

                    if (licenses[i].mode === 'I') {
                        query = mybatisMapper.getStatement("contract", "license_insert", param, format);
                    } else if (licenses[i].mode === 'U') {
                        query = mybatisMapper.getStatement("contract", "license_update", param, format);
                    } else if (licenses[i].mode === 'D') {
                        query = mybatisMapper.getStatement("contract", "license_delete", param, format);
                    }

                    request = new sql.Request(transaction);
                    result = await request.query(query);

                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.update error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager.update error : ${err}`);
            return -1;
        }
    },
    delete: async function (companyNo, contractNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < contractNos.length; i++) {
                    let param = {
                        companyNo: companyNo,
                        contractNo: contractNos[i],
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract", "delete", param, format);

                    let request = new sql.Request(transaction);
                    let result = await request.query(query);
                    count += result.rowsAffected[0];
                }

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.delete error : ${err}`);
                return -1;
            }
        } catch (err) {
            logger.error(`contract_manager.delete error : ${err}`);
            return -1;
        }

        return count;
    },
};
