const Common = require("./common");

class Member extends Common {
    constructor() {
        super();
        this.companyNo = -1;
        this.accountNo = -1;
        this.userName = null;
        this.email = null;
        this.password = null;
        this.userType = null;
        this.nationCode = null;
        this.phoneNumber = null;
        this.useStatus = null;
    }

    getCompanyNo(){
        return companyNo;
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
    getPassword(){
        return password;
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
    setAccountNo(accountNo){
        this.accountNo = accountNo;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setEmail(email){
        this.email = email;
    }
    setPassword(password){
        this.password = password;
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

module.exports = Member;
