const Common = require("./common");

class ContractManager extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.seq = null;
        this.email = null;
        this.pwd = null;
        this.name = null;
        this.userAuth = null;
        this.useYn = null;
    }

    getContractNo(){
        return this.contractNo;
    }
    getSeq(){
        return this.seq;
    }
    getEmail(){
        return this.email;
    }
    getPwd(){
        return this.pwd;
    }
    getName(){
        return this.name;
    }
    getUserAuth(){
        return this.userAuth;
    }
    getUseYn(){
        return this.useYn;
    }
    
    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setSeq(seq){
        this.seq = seq;
    }
    setEmail(email){
        this.email = email;
    }
    setPwd(pwd){
        this.pwd = pwd;
    }
    setName(name){
        this.name = name;
    }
    setUserAuth(userAuth){
        this.userAuth = userAuth;
    }
    setUseYn(useYn){
        this.useYn = useYn;
    }
}

module.exports = ContractManager;
