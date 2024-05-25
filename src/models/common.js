class Common {
    constructor() {
        this.registCompany = 0;
        this.registUser = 0;
        this.registDatetime = null;
        this.modifyCompany = 0;
        this.modifyUser = 0;
        this.modifyDatetime = null;
        this.errorCode = null;
    }

    getRegistCompany() {
        return this.registCompany;
    }
    getRegistUser() {
        return this.registUser;
    }
    getRegistDatetime() {
        return this.registDatetime;
    }
    getModifyCompany() {
        return this.modifyCompany;
    }
    getModifyUser() {
        return this.modifyUser;
    }
    getModifyDatetime() {
        return this.modifyDatetime;
    }
    getErrorCode() {
        return this.errorCode;
    }

    setRegistCompany(registCompany) {
        this.registCompany = registCompany;
    }
    setRegistUser(registUser) {
        this.registUser = registUser;
    }
    setRegistDatetime(registDatetime) {
        this.registDatetime = registDatetime;
    }
    setModifyCompany(modifyCompany) {
        this.modifyCompany = modifyCompany;
    }
    setModifyUser(modifyUser) {
        this.modifyUser = modifyUser;
    }
    setModifyDatetime(modifyDatetime) {
        this.modifyDatetime = modifyDatetime;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
}

module.exports = Common;
