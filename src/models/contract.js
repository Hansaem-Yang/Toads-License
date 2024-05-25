const Common = require("./common");

class Contract extends Common {
    constructor() {
        super();
        this.companyNo = -1;
        this.contractNo = null;
        this.contractName = null;
        this.contractDate = null;
        this.contractor = null;
        this.contractPeriod = null;
        this.startDate = null;
        this.endDate = null;
        this.monetaryUnit = null;
        this.exchangeRate = -1;
        this.amount = -1;
        this.discountedAmount = -1;
        this.actualAmount = -1;
        this.remark = null;
    }

    getCompanyNo(){
        return this.companyNo;
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
    getContractPeriod(){
        return this.contractPeriod;
    }
    getStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getMonetaryUnit(){
        return monetaryUnit;
    }
    getExchangeRate(){
        return exchangeRate;
    }
    getAmount(){
        return amount;
    }
    getDiscountedAmount(){
        return discountedAmount;
    }
    getActualAmount(){
        return actualAmount;
    }
    getRemark(){
        return this.remark;
    }
    
    setCompanyNo(companyNo){
        this.companyNo = companyNo;
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
    setContractPeriod(contractPeriod){
        this.contractPeriod = contractPeriod;
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
    setAmount(amount){
        this.amount = amount;
    }
    setDiscountedAmount(discountedAmount){
        this.discountedAmount = discountedAmount;
    }
    setActualAmount(actualAmount){
        this.actualAmount = actualAmount;
    }
    setRemark(remark){
        this.remark = remark;
    }
}

module.exports = Contract;
