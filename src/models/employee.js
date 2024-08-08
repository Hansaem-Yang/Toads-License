const Common = require("./common");

class Employee extends Common {
    constructor() {
        super();
        this.companyNo = -1;
        this.companyName = -1;
        this.empNo = null;
        this.empName = null;
        this.empEname = -1;
        this.email = null;
        this.enterDate = null;
        this.nation = null;
        this.idNo = null;
        this.quitDate = null;
        this.password = null;
    }

    setCompanyNo(companyNo){
        this.companyNo = companyNo;
    }
    setCompanyName(companyName){
        this.companyName = companyName;
    }
    setEmpNo(empNo){
        this.empNo = empNo;
    }
    setEmpName(empName){
        this.empName = empName;
    }
    setEmpEname(empEname){
        this.empEname = empEname;
    }
    setEmail(email){
        this.email = email;
    }
    setEnterDate(enterDate){
        this.enterDate = enterDate;
    }
    setNation(nation){
        this.nation = nation;
    }
    setIdNo(idNo){
        this.idNo = idNo;
    }
    setQuitDate(quitDate){
        this.quitDate = quitDate;
    }
    setPassword(password){
        this.password = password;
    }

    getCompanyNo(){
        return companyNo;
    }
    getCompanyName(){
        return companyName;
    }
    getEmpNo(){
        return empNo;
    }
    getEmpName(){
        return empName;
    }
    getEmpEname(){
        return empEname;
    }
    getEmail(){
        return email;
    }
    getEnterDate(){
        return enterDate;
    }
    getNation(){
        return nation;
    }
    getIdNo(){
        return idNo;
    }
    getQuitDate(){
        return quitDate;
    }
    getPassword(){
        return password;
    }
}

module.exports = Employee;
