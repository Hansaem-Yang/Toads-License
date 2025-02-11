const manager = require("../manager/ship_cctv_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/admin/cctv/status", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.status(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/cctv/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;
        let cctvNo = req.body.cctvNo;

        manager.detail(contractNo, shipSeq, cctvNo).then((data) => {
            if (data == null) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/cctv/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;
        let location = req.body.location;
        let cctvUrl = req.body.cctvUrl;

        manager.insert(contractNo, shipSeq, location, cctvUrl).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/cctv/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;
        let cctvNo = req.body.cctvNo;
        let location = req.body.location;
        let cctvUrl = req.body.cctvUrl;

        manager.update(contractNo, shipSeq, cctvNo, location, cctvUrl).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/cctv/delete", (req, res) => {
        let cctvIds = req.body.cctvIds;

        manager.delete(cctvIds).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    
    app.post("/user/cctv/status", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.status(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/cctv/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;

        manager.detail(contractNo, shipSeq).then((data) => {
            if (data == null) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/cctv/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;
        let location = req.body.location;
        let cctvUrl = req.body.cctvUrl;

        manager.insert(contractNo, shipSeq, location, cctvUrl).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/user/cctv/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let shipSeq = req.body.shipSeq;
        let cctvNo = req.body.cctvNo;
        let location = req.body.location;
        let cctvUrl = req.body.cctvUrl;

        manager.update(contractNo, shipSeq, cctvNo, location, cctvUrl).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/user/cctv/delete", (req, res) => {
        let cctvIds = req.body.cctvIds;

        manager.delete(cctvIds).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}