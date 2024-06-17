const Common = require("./common");

class Myinfo extends Common {
    constructor() {
        super();
        this.companyNo = -1;
        this.companyName = null;
        this.ownerName = null;
        this.businessNo = null;
        this.residentNo = null;
        this.postCode = null;
        this.businessPlace = null;
        this.companyDiv = null;
        this.nation = null;
        this.nationCode = null;
        this.telephone = null;
        
        this.accountNo = -1;
        this.userName = null;
        this.email = null;
        this.password = null;
        this.userType = null;
        this.userNation = null;
        this.phoneNumber = null;
        this.useStatus = null;
    }

    getCompanyNo(){
        return this.companyNo;
    }
    getCompanyName(){
        return this.companyName;
    }
    getOwnerName(){
        return this.ownerName;
    }
    getBusinessNo(){
        return this.businessNo;
    }
    getResidentNo(){
        return this.residentNo;
    }
    getPostCode(){
        return this.postCode;
    }
    getBusinessPlace(){
        return this.businessPlace;
    }
    getCompanyDiv(){
        return this.companyDiv;
    }
    getNation(){
        return this.nation;
    }
    getNationCode(){
        return nationCode;
    }
    getTelephone(){
        return this.telephone;
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
    getUserNation(){
        return userNation;
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
    setOwnerName(ownerName){
        this.ownerName = ownerName;
    }
    setBusinessNo(businessNo){
        this.businessNo = businessNo;
    }
    setResidentNo(residentNo){
        this.residentNo = residentNo;
    }
    setPostCode(postCode){
        this.postCode = postCode;
    }
    setBusinessPlace(businessPlace){
        this.businessPlace = businessPlace;
    }
    setCompanyDiv(companyDiv){
        this.companyDiv = companyDiv;
    }
    setNation(nation){
        this.nation = nation;
    }
    setNationCode(nationCode){
        this.nationCode = nationCode;
    }
    setTelephone(telephone){
        this.telephone = telephone;
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
    setUserNation(userNation){
        this.userNation = userNation;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    setUseStatus(useStatus){
        this.useStatus = useStatus;
    }
}

module.exports = Myinfo;
