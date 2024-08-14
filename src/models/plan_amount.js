const Common = require("./common");

class PlanAmount extends Common {
    constructor() {
        super();
        this.planId = null;
        this.planSeq = null;
        this.amount = null;
        this.billBase1 = null;
        this.surcharge = null;
        this.billBase2 = null;
        this.applyDate = null;
        this.finishDate = null;
        this.activeYn = null;
    }

    getPlanId() {
        return this.planId;
    }
    getPlanSeq() {
        return this.planSeq;
    }
    getAmount() {
        return this.amount;
    }
    getBillBase1() {
        return this.billBase1;
    }
    getSurcharge() {
        return this.surcharge;
    }
    getBillBase2() {
        return this.billBase2;
    }
    getApplyDate() {
        return this.applyDate;
    }
    getFinishDate() {
        return this.finishDate;
    }
    getActiveYn() {
        return this.activeYn;
    }

    setPlanId(planId) {
        this.planId = planId;
    }
    setPlanSeq(planSeq) {
        this.planSeq = planSeq;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    setBillBase1(billBase1) {
        this.billBase1 = billBase1;
    }
    setSurcharge(surcharge) {
        this.surcharge = surcharge;
    }
    setBillBase2(billBase2) {
        this.billBase2 = billBase2;
    }
    setApplyDate(applyDate) {
        this.applyDate = applyDate;
    }
    setFinishDate(finishDate) {
        this.finishDate = finishDate;
    }
    setActiveYn(activeYn) {
        this.activeYn = activeYn;
    }
}

module.exports = PlanAmount;
