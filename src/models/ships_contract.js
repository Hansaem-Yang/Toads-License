const Common = require("./common");

class ShipsContract extends Common {
    constructor() {
        super();
        this.contractNo = null;
        this.shipSeq = null;
        this.shipName = null;
        this.imoNo = null;
        this.equipLent = null;
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
    getShipSeq(){
        return this.shipSeq;
    }
    getShipName(){
        return this.shipName;
    }
    getImoNo(){
        return this.imoNo;
    }
    getEquipLent(){
        return this.equipLent;
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
    setShipSeq(shipSeq) {
        this.shipSeq = shipSeq;
    }
    setShipName(shipName) {
        this.shipName = shipName;
    }
    setImoNo(imoNo) {
        this.imoNo = imoNo;
    }
    setEquipLent(equipLent) {
        this.equipLent = equipLent;
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

module.exports = ShipsContract;
