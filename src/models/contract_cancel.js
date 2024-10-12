const Common = require("./common");

class ContractCancel extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.contractName = null;
        this.seq = -1;
        this.reason = null;
        this.contents = null;
        this.requestDate = null;
        this.approvalDate = null;
        this.cancelDate = null;
        this.cancelReason = null;
        this.status = null;
    }

    getContractNo(){
        return this.contractNo;
    }
    getContractName(){
        return this.contractName;
    }
    getSeq(){
        return this.seq;
    }
    getReason(){
        return this.reason;
    }
    getContents(){
        return this.contents;
    }
    getRequestDate(){
        return this.requestDate;
    }
    getApprovalDate(){
        return this.approvalDate;
    }
    getCancelDate(){
        return this.cancelDate;
    }
    getCancelReason(){
        return this.cancelReason;
    }
    getStatus(){
        return this.status;
    }

    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setContractName(contractName){
        this.contractName = contractName;
    }
    setSeq(seq){
        this.seq = seq;
    }
    setReason(reason){
        this.reason = reason;
    }
    setContents(contents){
        this.contents = contents;
    }
    setRequestDate(requestDate){
        this.requestDate = requestDate;
    }
    setApprovalDate(approvalDate){
        this.approvalDate = approvalDate;
    }
    setCancelDate(cancelDate){
        this.cancelDate = cancelDate;
    }
    setCancelReason(cancelReason){
        this.cancelReason = cancelReason;
    }
    setStatus(status){
        this.status = status;
    }
}

module.exports = ContractCancel;
