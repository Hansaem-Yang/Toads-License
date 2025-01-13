class SatelliteUsageByPeriod {
    constructor() {
        this.companyNo = -1;
        this.companyName = null;
        this.planId = null;
        this.planEname = null;
        this.time = -1
        this.period = -1;
        this.usage = -1;
    }

    getCompanyNo() {
        return companyNo;
    }
    getCompanyName() {
        return companyName;
    }
    getPlanId() {
        return planId;
    }
    getPlanEname() {
        return planEname;
    }
    getTime() {
        return time;
    }
    getPeriod() {
        return period;
    }
    getUsage() {
        return usage;
    }
    
    setCompanyNo(companyNo) {
        this.companyNo = companyNo;
    }
    setCompanyName(companyName) {
        this.companyName = companyName;
    }
    setPlanId(planId) {
        this.planId = planId;
    }
    setPlanEname(planEname) {
        this.planEname = planEname;
    }
    setTime(time) {
        this.time = time;
    }
    setPeriod(period) {
        this.period = period;
    }
    setUsage(usage) {
        this.usage = usage;
    }
}

module.exports = SatelliteUsageByPeriod;
