const Common = require("./common");

class LicenseUsers extends Common {
    constructor() {
        super();
        this.companyNo = null;
        this.companyName = null;
        this.contractNo = null;
        this.contractName = null;
        this.licenseNo = null;
        this.accountNo = null;
        this.userName = null;
        this.email = null;
        this.userType = null;
        this.nationCode = null;
        this.phoneNumber = null;
        this.useStatus = null;
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
    getLicenseNo(){
        return this.licenseNo;
    }
    getAccountNo(){
        return accountNo;
    }
    getUserName(){
        return userName;
    }
    getEmail(){
        return email;
    }
    getUserType(){
        return userType;
    }
    getNationCode(){
        return nationCode;
    }
    getPhoneNumber(){
        return phoneNumber;
    }
    getUseStatus(){
        return useStatus;
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
    setLicenseNo(licenseNo){
        this.licenseNo = licenseNo;
    }
    setAccountNo(accountNo){
        this.accountNo = accountNo;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setEmail(email){
        this.email = email;
    }
    setUserType(userType){
        this.userType = userType;
    }
    setNationCode(nationCode){
        this.nationCode = nationCode;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    setUseStatus(useStatus){
        this.useStatus = useStatus;
    }
}

module.exports = LicenseUsers;
