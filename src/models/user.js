const Common = require("./common");

class User extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.companyNo = -1;
        this.companyName = null;
        this.companyDiv = null;
        this.domainAddr = null;
        this.userNo = null;
        this.userId = null;
        this.email = null;
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
    getDomainAddr(){
        return domainAddr;
    }
    getUserNo(){
        return userNo;
    }
    getUserId(){
        return userId;
    }
    getEmail(){
        return email;
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
    setDomainAddr(domainAddr){
        this.domainAddr = domainAddr;
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
