const Common = require("./common");

class TsPlan extends Common {
    constructor() {
        super();
        this.planId = -1;
        this.planKname = null;
        this.planEname = null;
        this.flatDiv = null;
        this.odmDiv = null;
        this.applyDate = null;
        this.finishDate = null;
        this.activeYn = null;
        this.remark = null;
    }

    getPlanId(){
        return this.planId;
    }
    getPlanKname(){
        return this.planKname;
    }
    getPlanEname(){
        return this.planEname;
    }
    getFlatDiv(){
        return this.flatDiv;
    }
    getOdmDiv(){
        return this.odmDiv;
    }
    getApplyDate(){
        return this.applyDate;
    }
    getFinishDate(){
        return this.finishDate;
    }
    getActiveYn(){
        return this.activeYn;
    }
    getRemark(){
        return this.remark;
    }
    
    setPlanId(planId){
        this.planId = planId;
    }
    setPlanKname(planKname){
        this.planKname = planKname;
    }
    setPlanEname(planEname){
        this.planEname = planEname;
    }
    setFlatDiv(flatDiv){
        this.flatDiv = flatDiv;
    }
    setOdmDiv(odmDiv){
        this.odmDiv = odmDiv;
    }
    setApplyDate(applyDate){
        this.applyDate = applyDate;
    }
    setFinishDate(finishDate){
        this.finishDate = finishDate;
    }
    setActiveYn(activeYn){
        this.activeYn = activeYn;
    }
    setRemark(remark){
        this.remark = remark;
    }
}

module.exports = TsPlan;
