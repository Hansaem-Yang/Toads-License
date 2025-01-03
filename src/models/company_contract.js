const Common = require("./common");

class CompanyContract extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.seq = null;
        this.subscribeDiv = null;
        this.payCurrency = null;
        this.applyStartDate = null;
        this.applyFinishDate = null;
        this.cancelYn = null;
        this.cancelDate = null;
        this.planSeq = null;
        this.planId = null;
    }

    getContractNo(){
        return this.contractNo;
    }
    getSeq(){
        return this.seq;
    }
    getSubscribeDiv(){
        return this.subscribeDiv;
    }
    getPayCurrency(){
        return this.payCurrency;
    }
    getApplyStartDate(){
        return this.applyStartDate;
    }
    getApplyFinishDate(){
        return this.applyFinishDate;
    }
    getCancelYn(){
        return this.cancelYn;
    }
    getCancelDate(){
        return this.cancelDate;
    }
    getPlanSeq(){
        return this.planSeq;
    }
    getPlanId(){
        return this.planId;
    }

    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setSeq(seq) {
        this.seq = seq;
    }
    setSubscribeDiv(subscribeDiv){
        this.subscribeDiv = subscribeDiv;
    }
    setPayCurrency(payCurrency){
        this.payCurrency = payCurrency;
    }
    setApplyStartDate(applyStartDate) {
        this.applyStartDate = applyStartDate;
    }
    setApplyFinishDate(applyFinishDate) {
        this.applyFinishDate = applyFinishDate;
    }
    setCancelYn(cancelYn) {
        this.cancelYn = cancelYn;
    }
    setCancelDate(cancelDate) {
        this.cancelDate = cancelDate;
    }
    setPlanSeq(planSeq){
        this.planSeq = planSeq;
    }
    setPlanId(planId){
        this.planId = planId;
    }
}

module.exports = CompanyContract;
