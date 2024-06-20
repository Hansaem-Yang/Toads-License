const manager = require("../manager/termination_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/termination/status", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationStatus = req.body.terminationStatus;

        manager.status(companyNo, contractNo, terminationStatus).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/detail", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;

        manager.detail(companyNo, contractNo, terminationNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationDate = req.body.terminationDate;
        let terminationType = req.body.terminationType;
        let terminationReasons = req.body.terminationReasons;

        manager.insert(companyNo, contractNo, terminationDate, terminationType, terminationReasons).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/termination/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;
        let terminationDate = req.body.terminationDate;
        let terminationType = req.body.terminationType;
        let terminationReasons = req.body.terminationReasons;

        manager.update(companyNo, contractNo, terminationNo, terminationDate, terminationType, terminationReasons).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
