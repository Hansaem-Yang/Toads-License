const manager = require("../manager/license_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/license/status", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;

        manager.status(companyNo, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/license/users", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;

        manager.users(companyNo, contractNo, licenseNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/license/users/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;
        let accountNo = req.body.accountNo;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insertUsers(companyNo, contractNo, licenseNo, accountNo, registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/license/users/delete", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let licenseNo = req.body.licenseNo;
        let accountNo = req.body.accountNo;

        manager.deleteUsers(companyNo, contractNo, licenseNo, accountNo).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
