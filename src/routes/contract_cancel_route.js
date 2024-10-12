const manager = require("../manager/contract_cancel_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    /// 관리자
    app.post("/admin/contract/cancel/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/cancel/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;

        manager.detail(contractNo, seq).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/cancel/received", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let status = req.body.status;

        manager.received(contractNo, seq, status).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/cancel/approval", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let status = req.body.status;

        manager.approval(contractNo, seq, status).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    app.post("/admin/contract/cancel/cancel", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let cancelReason = req.body.cancelReason;
        let status = req.body.status;

        manager.cancel(contractNo, seq, cancelReason, status).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    /// 사용자
    app.post("/user/contract/cancel/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/cancel/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;

        manager.detail(contractNo, userNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/cancel/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let reason = req.body.reason;
        let contents = req.body.contents;
        let status = req.body.status;

        console.log("???");

        manager.insert(contractNo, reason, contents, status).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/cancel/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let reason = req.body.reason;
        let contents = req.body.contents;

        manager.update(contractNo, seq, reason, contents).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}