const manager = require("../manager/plan_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/admin/plan/codes", (req, res) => {        
        manager.codes().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/plan/status", (req, res) => {
        manager.status().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/plan/detail", (req, res) => {
        let planId = req.body.planId;

        manager.detail(planId).then((data) => {
            if (data == null) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/plan/insert", (req, res) => {
        let planKname = req.body.planKname;
        let planEname = req.body.planEname;
        let flatDiv = req.body.flatDiv;
        let odmDiv = req.body.odmDiv;
        let applyDate = req.body.applyDate;
        let finishDate = req.body.finishDate;
        let activeYn = req.body.activeYn;
        let remark = req.body.remark;
        let planAmounts = req.body.planAmounts;
        let registUser = req.session.user.userNo;

        manager.insert(planKname, planEname, flatDiv, odmDiv, applyDate, finishDate, activeYn, remark, planAmounts, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/plan/update", (req, res) => {
        let planId = req.body.planId;
        let planKname = req.body.planKname;
        let planEname = req.body.planEname;
        let flatDiv = req.body.flatDiv;
        let odmDiv = req.body.odmDiv;
        let applyDate = req.body.applyDate;
        let finishDate = req.body.finishDate;
        let activeYn = req.body.activeYn;
        let remark = req.body.remark;
        let planAmounts = req.body.planAmounts;
        let modifyUser = req.session.user.userNo;

        manager.update(planId, planKname, planEname, flatDiv, odmDiv, applyDate, finishDate, activeYn, remark, planAmounts, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/plan/delete", (req, res) => {
        let planIds = req.body.planIds;

        manager.delete(planIds).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}