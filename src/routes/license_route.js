const manager = require("../manager/license_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/license/list", (req, res) => {
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
    app.post("/license/detail", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;

        manager.detail(companyId, contractNo, licenseNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/license/regist", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let appName = req.body.appName;
        let licenseCount = req.body.licenseCount;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;

        manager.regist(companyId, contractNo, appName, licenseCount, startDate, endDate).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/license/modify", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;
        let appName = req.body.appName;
        let licenseCount = req.body.licenseCount;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let useStatus = req.body.useStatus;

        manager.modify(companyId, contractNo, licenseNo, appName, licenseCount, startDate, endDate, useStatus).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/license/delete", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;

        manager.delete(companyId, contractNo, licenseNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
