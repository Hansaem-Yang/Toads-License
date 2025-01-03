const Common = require("./common");

class Contract extends Common {
    constructor() {
        super();
        this.companyNo = null;
        this.companyName = null;
        this.contractNo = null;
        this.contractName = null;
        this.contractDate = null;
        this.contractor = null;
        this.contractService = null;
        this.contractDiv = null;
        this.contractPeriod = null;
        this.contractStatus = null;
        this.startDate = null;
        this.endDate = null;
        this.monetaryUnit = null;
        this.exchangeRate = -1;
        this.contractManager = null
        this.remark = null;
        this.licenses = [];
        this.odmContracts = [];
        this.shipsContracts = [];
        this.companyContracts = [];
    }

    getCompanyNo(){
        return this.companyNo;
    }
    getCompanyName(){
        return this.companyName;
    }
    getContractNo(){
        return this.contractNo;
    }
    getContractName(){
        return this.contractName;
    }
    getContractDate(){
        return this.contractDate;
    }
    getContractor(){
        return this.contractor;
    }
    getContractService(){
        return this.contractService;
    }
    getContractDiv(){
        return this.contractDiv;
    }
    getContractPeriod(){
        return this.contractPeriod;
    }
    getContractStatus(){
        return this.contractStatus;
    }
    getStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getMonetaryUnit(){
        return this.monetaryUnit;
    }
    getExchangeRate(){
        return this.exchangeRate;
    }
    getContractManager(){
        return this.contractManager;
    }
    getRemark(){
        return this.remark;
    }
    getLicenses(){
        return this.licenses;
    }
    getOdmContracts(){
        return this.odmContracts;
    }
    getShipsContracts(){
        return this.shipsContracts;
    }
    getCompanyContracts(){
        return this.companyContracts;
    }
    
    setCompanyNo(companyNo){
        this.companyNo = companyNo;
    }
    setCompanyName(companyName){
        this.companyName = companyName;
    }
    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setContractName(contractName){
        this.contractName = contractName;
    }
    setContractDate(contractDate){
        this.contractDate = contractDate;
    }
    setContractor(contractor){
        this.contractor = contractor;
    }
    setContractService(contractService){
        this.contractService = contractService;
    }
    setContractDiv(contractDiv){
        this.contractDiv = contractDiv;
    }
    setContractPeriod(contractPeriod){
        this.contractPeriod = contractPeriod;
    }
    setContractStatus(contractStatus){
        this.contractStatus = contractStatus;
    }
    setStartDate(startDate){
        this.startDate = startDate;
    }
    setEndDate(endDate){
        this.endDate = endDate;
    }
    setMonetaryUnit(monetaryUnit){
        this.monetaryUnit = monetaryUnit;
    }
    setExchangeRate(exchangeRate){
        this.exchangeRate = exchangeRate;
    }
    setContractManager(contractManager){
        this.contractManager = contractManager;
    }
    setRemark(remark){
        this.remark = remark;
    }
    setLicenses(licenses){
        this.licenses = licenses;
    }
    setOdmContracts(odmContracts){
        this.odmContracts = odmContracts;
    }
    setShipsContracts(shipsContracts){
        this.shipsContracts = shipsContracts;
    }
    setCompanyContracts(companyContracts){
        this.companyContracts = companyContracts;
    }
}

module.exports = Contract;
