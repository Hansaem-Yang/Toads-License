const Common = require("../models/common");

class Company extends Common {
    constructor() {
        super();
        this.companyNo = -1;
        this.companyName = null;
        this.ownerName = null;
        this.businessNo = null;
        this.residentNo = null;
        this.businessPlace = null;
        this.telephone = null;
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
    getBusinessPlace(){
        return this.businessPlace;
    }
    getTelephone(){
        return this.telephone;
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
    setBusinessPlace(businessPlace){
        this.businessPlace = businessPlace;
    }
    setTelephone(telephone){
        this.telephone = telephone;
    }
}

module.exports = Company;
