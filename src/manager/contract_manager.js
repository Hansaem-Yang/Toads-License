const { poolPromise, sql } = require("../db/sql_manager.js");
const mybatisMapper = require("mybatis-mapper");
const Contract = require("../models/contract.js");
const License = require("../models/license.js");
const OdmContract = require("../models/odm_contract.js");
const ShipsContract = require("../models/ships_contract.js");
const logger = require("../logger/logger.js");

mybatisMapper.createMapper(["./src/sql/contract.xml"]);

module.exports = {
    codes: async function (companyNo) {
        try {
            let pool = await poolPromise;
            let param = { companyNo: companyNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Contract();

                item.setCompanyNo(record.company_no);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.codes error : ${err}`);
            return null;
        }
    },
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
                item.setContractService(record.contract_service);
                item.setContractDiv(record.contract_div);
                item.setContractPeriod(record.contract_period);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setMonetaryUnit(record.monetary_unit);
                item.setExchangeRate(record.exchange_rate);
                item.setContractManager(record.contract_manager);
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
                item.setContractService(record.contract_service);
                item.setContractDiv(record.contract_div);
                item.setContractPeriod(record.contract_period);
                item.setContractStatus(record.contract_status);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                item.setMonetaryUnit(record.monetary_unit);
                item.setExchangeRate(record.exchange_rate);
                item.setContractManager(record.contract_manager);
                item.setRemark(record.remark);

                switch (item.contractDiv) {
                    case 'L':
                        query = mybatisMapper.getStatement("contract", "license_status", param, format);
                        let licenseResult = await pool.request().query(query);
                        let licenseList = [];
        
                        licenseResult.recordset.forEach((childRecord) => {
                            let childItem = new License();
            
                            childItem.setContractNo(childRecord.contract_no);
                            childItem.setLicenseNo(childRecord.license_no);
                            childItem.setLicenseType(childRecord.license_type);
                            childItem.setLicenseDiv(childRecord.license_div);
                            childItem.setStartDate(childRecord.start_date);
                            childItem.setEndDate(childRecord.end_date);
                            childItem.setLicenseCount(childRecord.license_count);
                            childItem.setUnitPrice(childRecord.unit_price);
                            childItem.setAmount(childRecord.amount);
                            childItem.setDiscountedAmount(childRecord.discounted_amount);
                            childItem.setActualAmount(childRecord.actual_amount);
            
                            licenseList.push(childItem);
                        });
        
                        item.setLicenses(licenseList);
                        break;
                    case 'D':
                        query = mybatisMapper.getStatement("contract", "odm_contract_status", param, format);
                        let odmContractResult = await pool.request().query(query);
                        let odmContractList = [];
        
                        odmContractResult.recordset.forEach((childRecord) => {
                            let childItem = new OdmContract();
                            
                            childItem.setContractNo(childRecord.contract_no);
                            childItem.setOdmSeq(childRecord.odm_seq);
                            childItem.setOdmContDiv(childRecord.odm_cont_div);
                            childItem.setPayCurrency(childRecord.pay_currency);
                            childItem.setPayUnit(childRecord.pay_unit);
                            childItem.setPayTermMo(childRecord.pay_term_mo);
                            childItem.setUnitPrice(childRecord.unit_price);
                            childItem.setApplyDate(childRecord.apply_date);
            
                            odmContractList.push(childItem);
                        });
        
                        item.setOdmContracts(odmContractList);
                        break;
                    case 'A':
                        break;
                    case 'S':
                        query = mybatisMapper.getStatement("contract", "odm_contract_status", param, format);
                        let shipsContractResult = await pool.request().query(query);
                        let shipsContractList = [];
        
                        shipsContractResult.recordset.forEach((childRecord) => {
                            let childItem = new ShipsContract();
                            
                            childItem.setContractNo(childRecord.contract_no);
                            childItem.setShipSeq(childRecord.ship_seq);
                            childItem.setShipName(childRecord.ship_name);
                            childItem.setImoNo(childRecord.imo_no);
                            childItem.setEquipLent(childRecord.equip_lent);
                            childItem.setApplyStartDate(childRecord.apply_start_date);
                            childItem.setApplyFinishDate(childRecord.apply_finish_date);
                            childItem.setCancelYn(childRecord.cancel_yn);
                            childItem.setCancelDate(childRecord.cancel_date);

                            shipsContractList.push(childItem);
                        });
        
                        item.setShipsContracts(shipsContractList);
                        break;
                }
            }

            return item;
        } catch (err) {
            logger.error(`contract_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, contractName, contractDate, contractor, contractService, contractDiv, 
        contractPeriod, startDate, endDate, monetaryUnit, exchangeRate, contractManager, remark, 
        licenses, odmContracts, shipsContracts, registUser) {
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
                    contractService: contractService,
                    contractDiv: contractDiv,
                    contractPeriod: contractPeriod, 
                    startDate: startDate, 
                    endDate: endDate, 
                    monetaryUnit: monetaryUnit,
                    exchangeRate: exchangeRate,
                    contractManager: contractManager,
                    remark: remark, 
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
                    let max_contract_no = record.max_contract_no;

                    switch (contractDiv){
                        case 'L':
                            for (let i = 0; i < licenses.length; i++) {
                                param = {
                                    contractNo: max_contract_no,
                                    licenseType: licenses[i].licenseType,
                                    licenseDiv: licenses[i].licenseDiv,
                                    licenseCount: licenses[i].licenseCount,
                                    startDate: licenses[i].startDate,
                                    endDate: licenses[i].endDate,
                                    unitPrice: licenses[i].unitPrice,
                                    amount: licenses[i].amount,
                                    discountedAmount: licenses[i].discountedAmount,
                                    actualAmount: licenses[i].actualAmount,
                                    registUser: registUser
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "license_insert", param, format);
                                
                                request = new sql.Request(transaction);
                                result = await request.query(query);
        
                                count += result.rowsAffected[0];
                            }
                            break;
                        case 'D':
                            for (let i = 0; i < odmContracts.length; i++) {
                                param = {
                                    contractNo: max_contract_no,
                                    odmContDiv: odmContracts[i].odmContDiv,
                                    payCurrency: odmContracts[i].payCurrency,
                                    payUnit: odmContracts[i].payUnit,
                                    payTermMo: odmContracts[i].payTermMo,
                                    unitPrice: odmContracts[i].unitPrice,
                                    applyDate: odmContracts[i].applyDate,
                                    registUser: registUser
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "odm_contract_insert", param, format);
                                
                                request = new sql.Request(transaction);
                                result = await request.query(query);
        
                                count += result.rowsAffected[0];
                            }
                            break;
                        case 'A':
                            break;
                        case 'S':
                            for (let i = 0; i < shipsContracts.length; i++) {
                                param = {
                                    contractNo: max_contract_no,
                                    shipName: shipsContracts[i].shipName,
                                    imoNo: shipsContracts[i].imoNo,
                                    equipLent: shipsContracts[i].equipLent,
                                    applyStartDate: shipsContracts[i].applyStartDate,
                                    applyFinishDate: shipsContracts[i].applyFinishDate,
                                    registUser: registUser
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "ships_contract_insert", param, format);
                                
                                request = new sql.Request(transaction);
                                result = await request.query(query);
        
                                count += result.rowsAffected[0];
                            }
                            break;
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
    update: async function (companyNo, contractNo, contractName, contractDate, contractor, contractService, contractDiv, 
        contractPeriod, startDate, endDate, monetaryUnit, exchangeRate, contractManager, remark, 
        licenses, odmContracts, shipsContracts, registUser) {
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
                    contractService: contractService,
                    contractDiv: contractDiv,
                    contractPeriod: contractPeriod, 
                    startDate: startDate, 
                    endDate: endDate, 
                    monetaryUnit: monetaryUnit,
                    exchangeRate: exchangeRate,
                    contractManager: contractManager,
                    remark: remark, 
                    modifyUser: modifyUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "update", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count += result.rowsAffected[0];

                var sql = "";
                switch (contractDiv){
                    case 'L':
                        for (let i = 0; i < licenses.length; i++) {
                            param = {
                                contractNo: contractNo,
                                licenseType: licenses[i].licenseType,
                                licenseDiv: licenses[i].licenseDiv,
                                licenseCount: licenses[i].licenseCount,
                                startDate: licenses[i].startDate,
                                endDate: licenses[i].endDate,
                                unitPrice: licenses[i].unitPrice,
                                amount: licenses[i].amount,
                                discountedAmount: licenses[i].discountedAmount,
                                actualAmount: licenses[i].actualAmount,
                                registUser: registUser
                            };

                            switch(licenses[i].mode)
                            {
                                case 'I':
                                    sql = 'license_insert';
                                    break;
                                case 'U':
                                    sql = 'license_update';
                                    break;
                                case 'D':
                                    sql = 'license_delete';
                                    break;
                            }
                            
                            format = { language: "sql", indent: " " };
                            query = mybatisMapper.getStatement("contract", sql, param, format);
                            
                            request = new sql.Request(transaction);
                            result = await request.query(query);
    
                            count += result.rowsAffected[0];
                        }
                        break;
                    case 'D':
                        for (let i = 0; i < odmContracts.length; i++) {
                            param = {
                                contractNo: contractNo,
                                odmContDiv: odmContracts[i].odmContDiv,
                                payCurrency: odmContracts[i].payCurrency,
                                payUnit: odmContracts[i].payUnit,
                                payTermMo: odmContracts[i].payTermMo,
                                unitPrice: odmContracts[i].unitPrice,
                                applyDate: odmContracts[i].applyDate,
                                registUser: registUser
                            };

                            switch(odmContracts[i].mode)
                            {
                                case 'I':
                                    sql = 'odm_contract_insert';
                                    break;
                                case 'U':
                                    sql = 'odm_contract_update';
                                    break;
                                case 'D':
                                    sql = 'odm_contract_delete';
                                    break;
                            }
                            
                            format = { language: "sql", indent: " " };
                            query = mybatisMapper.getStatement("contract", sql, param, format);

                            request = new sql.Request(transaction);
                            result = await request.query(query);
    
                            count += result.rowsAffected[0];
                        }
                        break;
                    case 'A':
                        break;
                    case 'S':
                        for (let i = 0; i < shipsContracts.length; i++) {
                            param = {
                                contractNo: contractNo,
                                shipName: shipsContracts[i].shipName,
                                imoNo: shipsContracts[i].imoNo,
                                equipLent: shipsContracts[i].equipLent,
                                applyStartDate: shipsContracts[i].applyStartDate,
                                applyFinishDate: shipsContracts[i].applyFinishDate,
                                registUser: registUser
                            };
                            
                            switch(shipsContracts[i].mode)
                            {
                                case 'I':
                                    sql = 'ships_contract_insert';
                                    break;
                                case 'U':
                                    sql = 'ships_contract_update';
                                    break;
                                case 'D':
                                    sql = 'ships_contract_delete';
                                    break;
                            }
                            
                            format = { language: "sql", indent: " " };
                            query = mybatisMapper.getStatement("contract", sql, param, format);
                            
                            request = new sql.Request(transaction);
                            result = await request.query(query);
    
                            count += result.rowsAffected[0];
                        }
                        break;
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
    terminationStatus: async function (companyNo, contractNo) {
        try {
            let pool = await poolPromise;
            let param = { 
                companyNo: companyNo,
                contractNo: contractNo,
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "termination_status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new Termination();

                item.setCompanyNo(record.company_no);
                item.setCompanyName(record.company_name);
                item.setContractNo(record.contract_no);
                item.setContractName(record.contract_name);
                item.setContractDate(record.contract_date);
                item.setTerminationNo(record.termination_no);
                item.setTerminationDate(record.termination_date);
                item.setTerminationType(record.termination_type);
                item.setTerminationReasons(record.termination_reasons);
                item.setCancellationCharge(record.cancellation_charge);
                item.setCancellationRefund(record.cancellation_refund);

                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract_manager.terminationStatus error : ${err}`);
            return null;
        }
    },
    insertTermination: async function (companyNo, contractNo, terminationDate, terminationType, terminationReasons, 
        registCompany, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                let param = {
                    companyNo: companyNo, 
                    contractNo: contractNo, 
                    terminationDate: terminationDate, 
                    terminationType: terminationType, 
                    terminationReasons: terminationReasons, 
                    registCompany: registCompany,
                    registUser: registUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "insert_termination", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count = result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.terminationInsert error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager.terminationInsert error : ${err}`);
            return -1;
        }
    },
    updateTermination: async function (companyNo, contractNo, terminationNo, terminationStatus, cancellationCharge, cancellationRefund, 
        modifyCompany, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {

                let param = {
                    companyNo: companyNo, 
                    contractNo: contractNo,
                    terminationNo: terminationNo, 
                    terminationStatus: terminationStatus, 
                    cancellationCharge: cancellationCharge, 
                    cancellationRefund: cancellationRefund, 
                    modifyCompany: modifyCompany,
                    modifyUser: modifyUser
                };
                let format = { language: "sql", indent: " " };
                let query = mybatisMapper.getStatement("contract", "update_termination", param, format);

                let request = new sql.Request(transaction);
                let result = await request.query(query);

                count = result.rowsAffected[0];

                await transaction.commit();
            } catch (err) {
                await transaction.rollback();
                logger.error(`contract_manager.terminationUpdate error : ${err}`);
                return -1;
            }

            return count;
        } catch (err) {
            logger.error(`contract_manager.terminationUpdate error : ${err}`);
            return -1;
        }
    },
};
