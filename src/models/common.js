class Common {
    constructor() {
        this.registUser = 0;
        this.modifyUser = 0;
        this.registDatetime = null;
        this.modifyDatetime = null;
        this.errorCode = null;
    }

    getRegistUser() {
        return this.registUser;
    }
    getModifyUser() {
        return this.modifyUser;
    }
    getRegistDatetime() {
        return this.registDatetime;
    }
    getModifyDatetime() {
        return this.uptDate;
    }
    getErrorCode() {
        return this.errorCode;
    }

    setRegistUser(registUser) {
        this.registUser = registUser;
    }
    setModifyUser(modifyUser) {
        this.modifyUser = modifyUser;
    }
    setRegistDatetime(registDatetime) {
        this.registDatetime = registDatetime;
    }
    setModifyDatetime(modifyDatetime) {
        this.modifyDatetime = modifyDatetime;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
}

module.exports = Common;
