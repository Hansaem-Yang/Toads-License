class Common {
    constructor() {
        this.regCompany = 0;
        this.regMember = 0;
        this.regDate = null;
        this.uptCompany = 0;
        this.uptMember = 0;
        this.uptDate = null;
        this.errorCode = null;
    }

    getRegCompany() {
        return this.regCompany;
    }
    getRegMember() {
        return this.regMember;
    }
    getRegDate() {
        return this.regDate;
    }
    getUptCompany() {
        return this.uptCompany;
    }
    getUptMember() {
        return this.uptMember;
    }
    getUptDate() {
        return this.uptDate;
    }
    getErrorCode() {
        return this.errorCode;
    }

    setRegCompany(regCompany) {
        this.regCompany = regCompany;
    }
    setRegMember(regMember) {
        this.regMember = regMember;
    }
    setRegDate(regDate) {
        this.regDate = regDate;
    }
    setUptCompany(uptCompany) {
        this.uptCompany = uptCompany;
    }
    setUptMember(uptMember) {
        this.uptMember = uptMember;
    }
    setUptDate(uptDate) {
        this.uptDate = uptDate;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
}

module.exports = Common;
