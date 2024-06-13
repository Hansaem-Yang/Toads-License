const manager = require("../../manager/admin/license_manager");
const constants = require("../../common/constants");

module.exports = function (app) {
    app.post("/admin/license/status", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;

        manager.status(companyId, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/license/detail", (req, res) => {
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
    app.post("/admin/license/insert", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let appName = req.body.appName;
        let licenseCount = req.body.licenseCount;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insert(companyId, contractNo, appName, licenseCount, startDate, endDate, registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/license/modify", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;
        let appName = req.body.appName;
        let licenseCount = req.body.licenseCount;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let useStatus = req.body.useStatus;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(companyId, contractNo, licenseNo, appName, licenseCount, startDate, endDate, useStatus, modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/license/delete", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;

        manager.delete(companyId, contractNo, licenseNo).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
