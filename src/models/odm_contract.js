const Common = require("./common");

class OdmContract extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.odmSeq = null;
        this.odmContDiv = null;
        this.payCurrency = null;
        this.payUnit = null;
        this.payTermMo = null;
        this.unitPrice = -1;
        this.applyDate = null;
    }

    getContractNo(){
        return this.contractNo;
    }
    getOdmSeq(){
        return this.odmSeq;
    }
    getOdmContDiv(){
        return this.odmContDiv;
    }
    getPayCurrency(){
        return this.payCurrency;
    }
    getPayUnit(){
        return this.payUnit;
    }
    getPayTermMo(){
        return this.payTermMo;
    }
    getUnitPrice(){
        return this.unitPrice;
    }
    getApplyDate(){
        return this.applyDate;
    }

    setContractNo(contractNo){
        this.contractNo = contractNo;
    }
    setOdmSeq(odmSeq){
        this.odmSeq = odmSeq;
    }
    setOdmContDiv(odmContDiv){
        this.odmContDiv = odmContDiv;
    }
    setPayCurrency(payCurrency){
        this.payCurrency = payCurrency;
    }
    setPayUnit(payUnit){
        this.payUnit = payUnit;
    }
    setPayTermMo(payTermMo){
        this.payTermMo = payTermMo;
    }
    setUnitPrice(unitPrice){
        this.unitPrice = unitPrice;
    }
    setApplyDate(applyDate){
        this.applyDate = applyDate;
    }
}

module.exports = OdmContract;
