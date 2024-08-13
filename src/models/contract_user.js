const Common = require("./common");

class ContractUser extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.userNo = null;
        this.userId = null;
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
    getUserNo(){
        return this.userNo;
    }
    getUserId(){
        return this.userId;
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
    setUserNo(userNo){
        this.userNo = userNo;
    }
    setUserId(userId){
        this.userId = userId;
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
