class SatelliteUsageByPeriod {
    constructor() {
        this.companyNo = -1;
        this.companyName = null;
        this.period = -1;
        this.usage = -1;
    }

    getCompanyNo() {
        return companyNo;
    }
    getCompanyName() {
        return companyName;
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
    setPeriod(period) {
        this.period = period;
    }
    setUsage(usage) {
        this.usage = usage;
    }
}

module.exports = SatelliteUsageByPeriod;
