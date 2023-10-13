const Common = require("./common");

class Contract extends Common {
    constructor() {
        super();
        this.companyId = -1;
        this.companyName = null;
        this.contractNo = null;
        this.contractName = null;
        this.contractDate = null;
        this.contractor = null;
        this.contractPeriod = null;
        this.startDate = null;
        this.endDate = null;
        this.remark = null;
    }

    getCompanyId(){
        return this.companyId;
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
    getContractPeriod(){
        return this.contractPeriod;
    }
    getStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getRemark(){
        return this.remark;
    }
    
    setCompanyId(companyId){
        this.companyId = companyId;
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
    setContractPeriod(contractPeriod){
        this.contractPeriod = contractPeriod;
    }
    setStartDate(startDate){
        this.startDate = startDate;
    }
    setEndDate(endDate){
        this.endDate = endDate;
    }
    setRemark(remark){
        this.remark = remark;
    }
}

module.exports = Contract;
