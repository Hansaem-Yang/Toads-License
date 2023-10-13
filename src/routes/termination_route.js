const manager = require("../manager/termination_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/termination/list", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;

        manager.list(companyId, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/detail", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;

        manager.detail(companyId, contractNo, terminationNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/regist", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let terminationDate = req.body.terminationDate;
        let terminationType = req.body.terminationType;
        let terminationReasons = req.body.terminationReasons;

        manager.regist(companyId, contractNo, terminationDate, terminationType, terminationReasons).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/modify", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;
        let terminationDate = req.body.terminationDate;
        let terminationType = req.body.terminationType;
        let terminationReasons = req.body.terminationReasons;

        manager.modify(companyId, contractNo, terminationNo, terminationDate, terminationType, terminationReasons).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/delete", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;

        manager.delete(companyId, contractNo, terminationNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
