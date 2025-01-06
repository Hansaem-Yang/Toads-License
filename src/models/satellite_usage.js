class SatelliteUsage {
    constructor() {
        this.companyNo = -1;
        this.companyName = null;
        this.totalUsage = -1;
        this.annualUsage = -1;
        this.monthlyUsage = -1;
        this.daliyUsage = -1;
        this.totalUsers = -1;
    }

    getCompanyNo() {
        return companyNo;
    }
    getCompanyName() {
        return companyName;
    }
    getTotalUsage() {
        return totalUsage;
    }
    getAnnualUsage() {
        return annualUsage;
    }
    getMonthUsage() {
        return monthlyUsage;
    }
    getDaliyUsage() {
        return daliyUsage;
    }
    getTotalUsers() {
        return totalUsers;
    }
    
    setCompanyNo(companyNo) {
        this.companyNo = companyNo;
    }
    setCompanyName(companyName) {
        this.companyName = companyName;
    }
    setTotalUsage(totalUsage) {
        this.totalUsage = totalUsage;
    }
    setAnnualUsage(annualUsage) {
        this.annualUsage = annualUsage;
    }
    setMonthlyUsage(monthlyUsage) {
        this.monthlyUsage = monthlyUsage;
    }
    setDaliyUsage(daliyUsage) {
        this.daliyUsage = daliyUsage;
    }
    setTotalUsers(totalUsers) {
        this.totalUsers = totalUsers;
    }
}

module.exports = SatelliteUsage;
