class Common {
    constructor() {
        this.registEmp = null;
        this.registUser = -1;
        this.registDate = null;
        this.modifyEmp = null;
        this.modifyUser = -1;
        this.modifyDate = null;
        this.errorCode = null;
    }

    getRegistEmp() {
        return this.registEmp;
    }
    getRegistUser() {
        return this.registUser;
    }
    getRegistDate() {
        return this.registDate;
    }
    getModifyEmp() {
        return this.modifyEmp;
    }
    getModifyUser() {
        return this.modifyUser;
    }
    getModifyDate() {
        return this.modifyDate;
    }
    getErrorCode() {
        return this.errorCode;
    }

    setRegistEmp(registEmp) {
        this.registEmp = registEmp;
    }
    setRegistUser(registUser) {
        this.registUser = registUser;
    }
    setRegistDate(registDatetime) {
        this.registDate = registDatetime;
    }
    setModifyEmp(modifyEmp) {
        this.modifyEmp = modifyEmp;
    }
    setModifyUser(modifyUser) {
        this.modifyUser = modifyUser;
    }
    setModifyDate(modifyDatetime) {
        this.modifyDate = modifyDatetime;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
}

module.exports = Common;
