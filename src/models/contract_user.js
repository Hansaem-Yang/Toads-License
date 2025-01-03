const Common = require("./common");

class ContractUser extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.contractDiv = null;
        this.userNo = null;
        this.userId = null;
        this.email = null;
        this.userPwd = null;
        this.userName = null;
        this.applyStartDate = null;
        this.applyFinishDate = null;
        this.licenseNo = null;
        this.shipSeq = -1;
        this.useYn = null;
    }

    getContractNo(){
        return this.contractNo;
    }
    getContractDiv(){
        return this.contractDiv;
    }
    getUserNo(){
        return this.userNo;
    }
    getUserId(){
        return this.userId;
    }
    getEmail(){
        return this.email;
    }
    getUserPwd(){
        return this.userPwd;
    }
    getUserName(){
        return this.userName;
    }
    getApplyStartDate(){
        return this.applyStartDate;
    }
    getApplyFinishDate(){
        return this.applyFinishDate;
    }
    getLicenseNo(){
        return this.licenseNo;
    }
    getShipSeq(){
        return this.shipSeq;
    }
    getUseYn(){
        return this.useYn;
    }

    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setContractDiv(contractDiv){
        this.contractDiv = contractDiv;
    }
    setUserNo(userNo){
        this.userNo = userNo;
    }
    setUserId(userId){
        this.userId = userId;
    }
    setEmail(email){
        this.email = email;
    }
    setUserPwd(userPwd){
        this.userPwd = userPwd;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setApplyStartDate(applyStartDate){
        this.applyStartDate = applyStartDate;
    }
    setApplyFinishDate(applyFinishDate){
        this.applyFinishDate = applyFinishDate;
    }
    setLicenseNo(licenseNo){
        this.licenseNo = licenseNo;
    }
    setShipSeq(shipSeq){
        this.shipSeq = shipSeq;
    }
    setUseYn(useYn){
        this.useYn = useYn;
    }
}

module.exports = ContractUser;
