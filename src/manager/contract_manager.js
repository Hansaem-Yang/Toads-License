const { poolPromise, sql } = require("../db/sql_manager");
const mybatisMapper = require("mybatis-mapper");
const Contract = require("../models/contract");
const License = require("../models/license");
const OdmContract = require("../models/odm_contract");
const ShipsContract = require("../models/ships_contract");
const CompanyContract = require("../models/company_contract");
const TsPlan = require("../models/ts_plan");
const logger = require("../logger/logger");

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
                item.setContractDiv(record.contract_div);
                item.setStartDate(record.start_date);
                item.setEndDate(record.end_date);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.codes error : ${err}`);
            return null;
        }
    },
    planStatus: async function () {
        try {
            let pool = await poolPromise;
            let param = { };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "plan_status", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new TsPlan();

                item.setPlanId(record.plan_id);
                item.setPlanKname(record.plan_kname);
                item.setPlanEname(record.plan_ename);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.planStatus error : ${err}`);
            return null;
        }
    },
    licenseCodes: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "license_codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new License();

                item.setContractNo(record.contract_no);
                item.setLicenseNo(record.license_no);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.licenseCodes error : ${err}`);
            return null;
        }
    },
    odmCodes: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "odm_codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new OdmContract();

                item.setContractNo(record.contract_no);
                item.setOdmSeq(record.odm_seq);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.odmCodes error : ${err}`);
            return null;
        }
    },
    shipsCodes: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "ships_codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new ShipsContract();

                item.setContractNo(record.contract_no);
                item.setShipSeq(record.ship_seq);
                item.setShipName(record.ship_name);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.shipsCodes error : ${err}`);
            return null;
        }
    },
    companyCodes: async function (contractNo) {
        try {
            let pool = await poolPromise;
            let param = { contractNo: contractNo };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "company_codes", param, format);

            let result = await pool.request().query(query);
            let list = [];

            result.recordset.forEach((record) => {
                let item = new CompanyContract();

                item.setContractNo(record.contract_no);
                item.setSeq(record.seq);
                
                list.push(item);
            });

            return list;
        } catch (err) {
            logger.error(`contract.companyCodes error : ${err}`);
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
                        let licenses = [];
        
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
            
                            licenses.push(childItem);
                        });
        
                        item.setLicenses(licenses);
                        break;
                    case 'D':
                        query = mybatisMapper.getStatement("contract", "odm_contract_status", param, format);
                        let odmContractResult = await pool.request().query(query);
                        let odmContracts = [];
        
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
            
                            odmContracts.push(childItem);
                        });
        
                        item.setOdmContracts(odmContracts);
                        break;
                    case 'A':
                        break;
                    case 'S':
                        query = mybatisMapper.getStatement("contract", "ships_contract_status", param, format);
                        let shipsContractResult = await pool.request().query(query);
                        let shipsContracts = [];
        
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
                            childItem.setPlanSeq(childRecord.plan_seq);
                            childItem.setPlanId(childRecord.plan_id);

                            shipsContracts.push(childItem);
                        });
        
                        item.setShipsContracts(shipsContracts);
                        break;
                    case 'C':
                        query = mybatisMapper.getStatement("contract", "company_contract_status", param, format);
                        let companyContractResult = await pool.request().query(query);
                        let companyContracts = [];
        
                        companyContractResult.recordset.forEach((childRecord) => {
                            let childItem = new CompanyContract();
                            
                            childItem.setContractNo(childRecord.contract_no);
                            childItem.setSeq(childRecord.seq);
                            childItem.setSubscribeDiv(childRecord.subscribe_div);
                            childItem.setPayCurrency(childRecord.pay_currency);
                            childItem.setApplyStartDate(childRecord.apply_start_date);
                            childItem.setApplyFinishDate(childRecord.apply_finish_date);
                            childItem.setCancelYn(childRecord.cancel_yn);
                            childItem.setCancelDate(childRecord.cancel_date);
                            childItem.setPlanSeq(childRecord.plan_seq);
                            childItem.setPlanId(childRecord.plan_id);

                            companyContracts.push(childItem);
                        });
        
                        item.setCompanyContracts(companyContracts);
                        break;
                }
            }

            return item;
        } catch (err) {
            logger.error(`contract_manager.detail error : ${err}`);
            return null;
        }
    },
    insert: async function (companyNo, contractName, contractDate, contractor, contractService, contractDiv, contractPeriod, startDate, endDate, 
        monetaryUnit, exchangeRate, remark, contractManager, licenses, odmContracts, shipsContracts, companyContracts, registUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
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
                    let maxContractNo = record.max_contract_no;

                    switch (contractDiv){
                        case 'L':
                            // 라이센스 정보
                            for (let i = 0; i < licenses.length; i++) {
                                param = {
                                    contractNo: maxContractNo,
                                    contractService: contractService,
                                    contractDate: contractDate,
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
                            // ODM 정보
                            for (let i = 0; i < odmContracts.length; i++) {
                                param = {
                                    contractNo: maxContractNo,
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
                            // 선박 구독 정보
                            for (let i = 0; i < shipsContracts.length; i++) {
                                param = {
                                    contractNo: maxContractNo,
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
                                
                                param = {
                                    contractNo: maxContractNo
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "max_ships_contract_seq", param, format);

                                request = new sql.Request(transaction);
                                result = await request.query(query);

                                if (result.recordset.length > 0) {
                                    // 선박 요금제 정보
                                    let maxRecord = result.recordset[0];
                                    let maxShipSeq = maxRecord.max_ship_seq;

                                    param = {
                                        contractNo: maxContractNo,
                                        shipSeq: maxShipSeq,
                                        planId: shipsContracts[i].planId,
                                        applyStartDate: shipsContracts[i].applyStartDate,
                                        applyFinishDate: shipsContracts[i].applyFinishDate,
                                        registUser: registUser
                                    };
                                    format = { language: "sql", indent: " " };
                                    query = mybatisMapper.getStatement("contract", "ships_apply_plan_insert", param, format);
                                    
                                    request = new sql.Request(transaction);
                                    result = await request.query(query);
            
                                    count += result.rowsAffected[0];
                                }
                            }
                            break;
                        case 'C':
                            // 기업 구독 정보
                            for (let i = 0; i < companyContracts.length; i++) {
                                param = {
                                    contractNo: maxContractNo,
                                    subscribeDiv: companyContracts[i].subscribeDiv,
                                    payCurrency: companyContracts[i].payCurrency,
                                    applyStartDate: companyContracts[i].applyStartDate,
                                    applyFinishDate: companyContracts[i].applyFinishDate,
                                    registUser: registUser
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "company_contract_insert", param, format);
                                
                                request = new sql.Request(transaction);
                                result = await request.query(query);
        
                                count += result.rowsAffected[0];
                                
                                param = {
                                    contractNo: maxContractNo
                                };
                                format = { language: "sql", indent: " " };
                                query = mybatisMapper.getStatement("contract", "max_company_contract_seq", param, format);

                                request = new sql.Request(transaction);
                                result = await request.query(query);

                                if (result.recordset.length > 0) {
                                    // 기업 요금제 정보
                                    let maxRecord = result.recordset[0];
                                    let maxSeq = maxRecord.max_seq;

                                    param = {
                                        contractNo: maxContractNo,
                                        seq: maxSeq,
                                        planId: companyContracts[i].planId,
                                        applyStartDate: companyContracts[i].applyStartDate,
                                        applyFinishDate: companyContracts[i].applyFinishDate,
                                        registUser: registUser
                                    };
                                    format = { language: "sql", indent: " " };
                                    query = mybatisMapper.getStatement("contract", "company_apply_plan_insert", param, format);
                                    
                                    request = new sql.Request(transaction);
                                    result = await request.query(query);
            
                                    count += result.rowsAffected[0];
                                }
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
    updateShipsContract: async function (sql, transaction, sqlName, contractNo, shipsContract, modifyUser)
    {
        let param = {
            contractNo: contractNo,
            shipSeq: shipsContract.shipSeq,
            shipName: shipsContract.shipName,
            imoNo: shipsContract.imoNo,
            equipLent: shipsContract.equipLent,
            applyStartDate: shipsContract.applyStartDate,
            applyFinishDate: shipsContract.applyFinishDate,
            registUser: modifyUser,
            modifyUser: modifyUser
        };
        
        let format = { language: "sql", indent: " " };
        let query = mybatisMapper.getStatement("contract", sqlName, param, format);
        
        let request = new sql.Request(transaction);
        let result = await request.query(query);

        return result.rowsAffected[0];
    },
    updateShipsApplyPlan: async function (sql, transaction, sqlName, contractNo, shipsContract, modifyUser)
    {
        if (shipsContract.mode == 'I') {
            let param = {
                contractNo: contractNo
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "max_ships_contract_seq", param, format);

            let request = new sql.Request(transaction);
            let result = await request.query(query);

            if (result.recordset.length > 0) {
                // 선박 요금제 정보
                let maxRecord = result.recordset[0];
                let maxShipSeq = maxRecord.max_ship_seq;

                param = {
                    contractNo: contractNo,
                    shipSeq: maxShipSeq,
                    planId: shipsContract.planId,
                    applyStartDate: shipsContract.applyStartDate,
                    applyFinishDate: shipsContract.applyFinishDate,
                    registUser: modifyUser
                };
                format = { language: "sql", indent: " " };
                query = mybatisMapper.getStatement("contract", sqlName, param, format);
                
                request = new sql.Request(transaction);
                result = await request.query(query);

                return result.rowsAffected[0];
            }
        } else {
            let param = {
                contractNo: contractNo,
                shipSeq: shipsContract.shipSeq,
                planSeq: shipsContract.planSeq,
                planId: shipsContract.planId,
                applyStartDate: shipsContract.applyStartDate,
                applyFinishDate: shipsContract.applyFinishDate,
                registUser: modifyUser,
                modifyUser: modifyUser
            };
            
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", sqlName, param, format);
            
            let request = new sql.Request(transaction);
            let result = await request.query(query);

            return result.rowsAffected[0];
        }
    },
    updateCompanyContract: async function (sql, transaction, sqlName, contractNo, companyContract, modifyUser)
    {
        let param = {
            contractNo: contractNo,
            seq: companyContract.seq,
            subscribeDiv: companyContract.subscribeDiv,
            payCurrency: companyContract.payCurrency,
            applyStartDate: companyContract.applyStartDate,
            applyFinishDate: companyContract.applyFinishDate,
            registUser: modifyUser,
            modifyUser: modifyUser
        };
        
        let format = { language: "sql", indent: " " };
        let query = mybatisMapper.getStatement("contract", sqlName, param, format);
        
        let request = new sql.Request(transaction);
        let result = await request.query(query);

        return result.rowsAffected[0];
    },
    updateCompanyApplyPlan: async function (sql, transaction, sqlName, contractNo, companyContract, modifyUser)
    {
        if (companyContract.mode == 'I')
        {
            let param = {
                contractNo: contractNo
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", "max_company_contract_seq", param, format);

            let request = new sql.Request(transaction);
            let result = await request.query(query);

            if (result.recordset.length > 0) {
                // 기업 요금제 정보
                let maxRecord = result.recordset[0];
                let maxSeq = maxRecord.max_seq;

                param = {
                    contractNo: contractNo,
                    seq: maxSeq,
                    planId: companyContract.planId,
                    applyStartDate: companyContract.applyStartDate,
                    applyFinishDate: companyContract.applyFinishDate,
                    registUser: modifyUser
                };
                format = { language: "sql", indent: " " };
                query = mybatisMapper.getStatement("contract", sqlName, param, format);
                
                request = new sql.Request(transaction);
                result = await request.query(query);

                return result.rowsAffected[0];
            }
        }
        else
        {
            // 기업 요금제 정보
            let param = {
                contractNo: contractNo,
                seq: companyContract.seq,
                planSeq: companyContract.planSeq,
                planId: companyContract.planId,
                applyStartDate: companyContract.applyStartDate,
                applyFinishDate: companyContract.applyFinishDate,
                registUser: modifyUser,
                modifyUser: modifyUser
            };
            let format = { language: "sql", indent: " " };
            let query = mybatisMapper.getStatement("contract", sqlName, param, format);
            
            let request = new sql.Request(transaction);
            let result = await request.query(query);

            return result.rowsAffected[0];
        }
    },
    update: async function (companyNo, contractNo, contractName, contractDate, contractor, contractService, contractDiv, contractPeriod, startDate, endDate, 
        monetaryUnit, exchangeRate, remark, contractManager, licenses, odmContracts, shipsContracts, companyContracts, modifyUser) {
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);
            let count = 0;

            await transaction.begin();
            try {
                // 계약 정보
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
                var sqlName = '';
                switch (contractDiv){
                    case 'L':
                        // 라이센스 정보
                        for (let i = 0; i < licenses.length; i++) {
                            switch(licenses[i].mode)
                            {
                                case 'I':
                                    sqlName = 'license_insert';
                                    break;
                                case 'U':
                                    sqlName = 'license_update';
                                    break;
                                case 'D':
                                    sqlName = 'license_delete';
                                    break;
                            }
                            
                            param = {
                                contractNo: contractNo,
                                licenseNo: licenses[i].licenseNo,
                                licenseType: licenses[i].licenseType,
                                licenseDiv: licenses[i].licenseDiv,
                                licenseCount: licenses[i].licenseCount,
                                startDate: licenses[i].startDate,
                                endDate: licenses[i].endDate,
                                unitPrice: licenses[i].unitPrice,
                                amount: licenses[i].amount,
                                discountedAmount: licenses[i].discountedAmount,
                                actualAmount: licenses[i].actualAmount,
                                registUser: modifyUser,
                                modifyUser: modifyUser
                            };

                            format = { language: "sql", indent: " " };
                            query = mybatisMapper.getStatement("contract", sqlName, param, format);
                            
                            request = new sql.Request(transaction);
                            result = await request.query(query);
    
                            count += result.rowsAffected[0];
                        }
                        break;
                    case 'D':
                        // ODM 정보
                        for (let i = 0; i < odmContracts.length; i++) {
                            switch(odmContracts[i].mode)
                            {
                                case 'I':
                                    sqlName = 'odm_contract_insert';
                                    break;
                                case 'U':
                                    sqlName = 'odm_contract_update';
                                    break;
                                case 'D':
                                    sqlName = 'odm_contract_delete';
                                    break;
                            }

                            param = {
                                contractNo: contractNo,
                                odmSeq: odmContracts[i].odmSeq,
                                odmContDiv: odmContracts[i].odmContDiv,
                                payCurrency: odmContracts[i].payCurrency,
                                payUnit: odmContracts[i].payUnit,
                                payTermMo: odmContracts[i].payTermMo,
                                unitPrice: odmContracts[i].unitPrice,
                                applyDate: odmContracts[i].applyDate,
                                registUser: modifyUser,
                                modifyUser: modifyUser
                            };
                            
                            format = { language: "sql", indent: " " };
                            query = mybatisMapper.getStatement("contract", sqlName, param, format);

                            request = new sql.Request(transaction);
                            result = await request.query(query);
    
                            count += result.rowsAffected[0];
                        }
                        break;
                    case 'A':
                        break;
                    case 'S':
                        // 선박 구독 정보
                        for (let i = 0; i < shipsContracts.length; i++) {
                            switch(shipsContracts[i].mode)
                            {
                                case 'I':
                                    count += await this.updateShipsContract(sql, transaction, 'ships_contract_insert', contractNo, shipsContracts[i], modifyUser);
                                    count += await this.updateShipsApplyPlan(sql, transaction, 'ships_apply_plan_insert', contractNo, shipsContracts[i], modifyUser);
                                    break;
                                case 'U':
                                    count += await this.updateShipsContract(sql, transaction, 'ships_contract_update', contractNo, shipsContracts[i], modifyUser);
                                    count += await this.updateShipsApplyPlan(sql, transaction, 'ships_apply_plan_update', contractNo, shipsContracts[i], modifyUser);
                                    break;
                                case 'D':
                                    count += await this.updateShipsApplyPlan(sql, transaction, 'ships_apply_plan_delete', contractNo, shipsContracts[i], modifyUser);
                                    count += await this.updateShipsContract(sql, transaction, 'ships_contract_delete', contractNo, shipsContracts[i], modifyUser);
                                    break;
                            }
                        }
                        break;
                    case 'C':
                        // 기업 구독 정보
                        for (let i = 0; i < companyContracts.length; i++) {
                            switch(companyContracts[i].mode)
                            {
                                case 'I':
                                    count += await this.updateCompanyContract(sql, transaction, 'company_contract_insert', contractNo, companyContracts[i], modifyUser);
                                    count += await this.updateCompanyApplyPlan(sql, transaction, 'company_apply_plan_insert', contractNo, companyContracts[i], modifyUser);
                                    break;
                                case 'U':
                                    count += await this.updateCompanyContract(sql, transaction, 'company_contract_update', contractNo, companyContracts[i], modifyUser);
                                    count += await this.updateCompanyApplyPlan(sql, transaction, 'company_apply_plan_update', contractNo, companyContracts[i], modifyUser);
                                    break;
                                case 'D':
                                    count += await this.updateCompanyApplyPlan(sql, transaction, 'company_apply_plan_delete', contractNo, companyContracts[i], modifyUser);
                                    count += await this.updateCompanyContract(sql, transaction, 'company_contract_delete', contractNo, companyContracts[i], modifyUser);
                                    break;
                            }
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
    delete: async function (contractNos) {
        let count = 0;
        try {
            let pool = await poolPromise;
            let transaction = new sql.Transaction(pool);

            await transaction.begin();
            try {
                for (let i = 0; i < contractNos.length; i++) {
                    let param = {
                        companyNo: contractNos[i].companyNo,
                        contractNo: contractNos[i].contractNo,
                    };
                    let format = { language: "sql", indent: " " };
                    let query = mybatisMapper.getStatement("contract", "license_delete_all", param, format);
                    let request = new sql.Request(transaction);
                    let result = await request.query(query);

                    query = mybatisMapper.getStatement("contract", "odm_contract_delete_all", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);
                                        
                    query = mybatisMapper.getStatement("contract", "ships_apply_plan_delete_all", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);
                    
                    query = mybatisMapper.getStatement("contract", "ships_contract_delete_all", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);
                                        
                    query = mybatisMapper.getStatement("contract", "company_apply_plan_delete_all", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);
                    
                    query = mybatisMapper.getStatement("contract", "company_contract_delete_all", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);
                                        
                    query = mybatisMapper.getStatement("contract", "delete", param, format);
                    request = new sql.Request(transaction);
                    result = await request.query(query);

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
