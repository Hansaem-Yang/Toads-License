const Common = require("./common");

class User extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.companyNo = -1;
        this.companyName = null;
        this.companyDiv = null;
        this.userNo = null;
        this.userId = null;
        this.userName = null;
        this.password = null;
        this.userAuth = null;
        this.useYn = null;
    }

    getContractNo(){
        return contractNo;
    }
    getCompanyNo(){
        return companyNo;
    }
    getCompanyName(){
        return companyName;
    }
    getCompanyDiv(){
        return companyDiv;
    }
    getUserNo(){
        return userNo;
    }
    getUserId(){
        return userId;
    }
    getUserName(){
        return userName;
    }
    getPassword(){
        return password;
    }
    getUserAuth(){
        return userAuth;
    }
    getUseYn(){
        return useYn;
    }

    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setCompanyNo(companyNo){
        this.companyNo = companyNo;
    }
    setCompanyName(companyName){
        this.companyName = companyName;
    }
    setCompanyDiv(companyDiv){
        this.companyDiv = companyDiv;
    }
    setUserNo(userNo){
        this.userNo = userNo;
    }
    setUserId(userId){
        this.userId = userId;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setPassword(password){
        this.password = password;
    }
    setUserAuth(userAuth){
        this.userAuth = userAuth;
    }
    setUseYn(useYn){
        this.useYn = useYn;
    }
}

module.exports = User;
