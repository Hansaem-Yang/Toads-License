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
        this.companyDiv = null;
        this.nation = null;
        this.telephone = null;
        this.totalLicenses = -1;
        this.totalUsers = -1;
        this.totalSatelliteUsage = -1;
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
    getCompanyDiv(){
        return this.companyDiv;
    }
    getNation(){
        return this.nation;
    }
    getTelephone(){
        return this.telephone;
    }
    getTotalLicenses(){
        return this.totalLicenses;
    }
    getTotalUsers(){
        return this.totalUsers;
    }
    getTotalSatelliteUsage(){
        return this.totalSatelliteUsage;
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
    setCompanyDiv(companyDiv){
        this.companyDiv = companyDiv;
    }
    setNation(nation){
        this.nation = nation;
    }
    setTelephone(telephone){
        this.telephone = telephone;
    }
    setTotalLicenses(totalLicenses){
        this.totalLicenses = totalLicenses;
    }
    setTotalUsers(totalUsers){
        this.totalUsers = totalUsers;
    }
    setTotalSatelliteUsage(totalSatelliteUsage){
        this.totalSatelliteUsage = totalSatelliteUsage;
    }
}

module.exports = Company;
