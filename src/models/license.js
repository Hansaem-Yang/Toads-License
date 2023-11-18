const Common = require("./common");

class License extends Common {
    constructor() {
        super();
        this.companyId = -1;
        this.contractNo = null;
        this.licenseNo = null;
        this.licenseType = null;
        this.appName = null;
        this.licenseCount = -1;
        this.startDate = null;
        this.endDate = null;
        this.unitPrice = -1;
        this.amount = -1;
        this.discountedAmount = -1;
        this.actualAmount = -1;
    }

    getCompanyId(){
        return this.companyId;
    }
    getContractNo(){
        return this.contractNo;
    }
    getLicenseNo(){
        return this.licenseNo;
    }
    getLicenseType(){
        return this.licenseType;
    }
    getAppName(){
        return this.appName;
    }
    getLicenseCount(){
        return this.licenseCount;
    }
    getStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getUnitPrice(){
        return unitPrice;
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
    
    setCompanyId(companyId){
        this.companyId = companyId;
    }
    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setLicenseNo(licenseNo){
        this.licenseNo = licenseNo;
    }
    setLicenseType(licenseType){
        this.licenseType = licenseType;
    }
    setAppName(appName){
        this.appName = appName;
    }
    setLicenseCount(licenseCount){
        this.licenseCount = licenseCount;
    }
    setStartDate(startDate){
        this.startDate = startDate;
    }
    setEndDate(endDate){
        this.endDate = endDate;
    }
    setUnitPrice(unitPrice){
        this.unitPrice = unitPrice;
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
}

module.exports = License;
