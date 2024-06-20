const Common = require("./common");

class Termination extends Common {
    constructor() {
        super();
        this.companyNo = null;
        this.companyName = null;
        this.contractNo = null;
        this.contractName = null;
        this.contractDate = null;
        this.terminationNo = null;
        this.terminationDate = null;
        this.terminationType = null;
        this.terminationReasons = null;
        this.cancellationCharge = -1;
        this.cancellationRefund = -1;
    }

    getCompanyNo(){
        return this.companyNo;
    }
    getCompanyName(){
        return this.companyName;
    }
    getContractNo(){
        return this.contractNo;
    }
    getContractName(){
        return this.contractName;
    }
    getContractDate() { 
        return contractDate; 
    }
    getTerminationNo() { 
        return terminationNo; 
    }
    getTerminationDate() { 
        return terminationDate; 
    }
    getTerminationType() { 
        return terminationType; 
    }
    getTerminationReasons() { 
        return terminationReasons; 
    }
    getCancellationCharge() { 
        return cancellationCharge; 
    }
    getCancellationRefund() { 
        return cancellationRefund; 
    }
    
    setCompanyNo(companyNo){
        this.companyNo = companyNo;
    }
    setCompanyName(companyName){
        this.companyName = companyName;
    }
    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setContractName(contractName){
        this.contractName = contractName;
    }
    setContractDate(contractDate) {
        this.contractDate = contractDate; 
    }
    setTerminationNo(terminationNo) {
        this.terminationNo = terminationNo; 
    }
    setTerminationDate(terminationDate) {
        this.terminationDate = terminationDate; 
    }
    setTerminationType(terminationType) {
        this.terminationType = terminationType; 
    }
    setTerminationReasons(terminationReasons) {
        this.terminationReasons = terminationReasons; 
    }
    setCancellationCharge(cancellationCharge) {
        this.cancellationCharge = cancellationCharge; 
    }
    setCancellationRefund(cancellationRefund) {
        this.cancellationRefund = cancellationRefund; 
    }
}

module.exports = Termination;
