class SatelliteUsage {
    constructor() {
        this.totalCompanys = -1;
        this.totalUsers = -1;
        this.daliyUsage = -1;
        this.monthlyUsage = -1;
    }

    getTotalCompanys(){
        return this.totalCompanys;
    }
    getTotalUsers(){
        return this.totalUsers;
    }
    getDaliyUsage(){
        return this.daliyUsage;
    }
    getMonthlyUsage(){
        return this.monthlyUsage;
    }

    setTotalCompanys(totalCompanys){
        this.totalCompanys = totalCompanys;
    }
    setTotalUsers(totalUsers){
        this.totalUsers = totalUsers;
    }
    setDaliyUsage(daliyUsage){
        this.daliyUsage = daliyUsage;
    }
    setMonthlyUsage(monthlyUsage){
        this.monthlyUsage = monthlyUsage;
    }
}

module.exports = SatelliteUsage;
