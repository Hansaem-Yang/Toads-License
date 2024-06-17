const manager = require("../manager/member_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/member/status", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.status(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });

    app.post("/member/detail", (req, res) => {
        let companyNo = req.body.companyNo;
        let accountNo = req.body.accountNo;

        manager.detail(companyNo, accountNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });

    app.post("/member/checkEmail", (req, res) => {
        let accountNo = req.body.accountNo;
        let email = req.body.email;

        manager.checkEmail(accountNo, email).then((data) => {
            if (data == 0) {
                res.send(constants.SUCCESS);
            } else if (data > 0) {
                res.send(constants.EMAIL_DUPLICATE);
            } else {
                res.send(constants.FAIL);
            }
        });
    });

    app.post("/member/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let userName = req.body.userName;
        let email = req.body.email;
        let password = req.body.password;
        let userType = req.body.userType;
        let nationCode = req.body.nationCode;
        let phoneNumber = req.body.phoneNumber;
        let useStatus = req.body.useStatus;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insert(companyNo, userName, email, password, userType, nationCode, phoneNumber, useStatus, registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    app.post("/member/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let accountNo = req.body.accountNo;
        let userName = req.body.userName;
        let email = req.body.email;
        let userType = req.body.userType;
        let nationCode = req.body.nationCode;
        let phoneNumber = req.body.phoneNumber;
        let useStatus = req.body.useStatus;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(companyNo, accountNo, userName, email, userType, nationCode, phoneNumber, useStatus, modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    app.post("/member/delete", (req, res) => {
        let accountNos = req.body.accountNos;

        manager.delete(accountNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    
    app.post("/member/changePassword", (req, res) => {
        let companyNo = req.body.companyNo;
        let accountNo = req.body.accountNo;
        let password = req.body.password;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.changePassword(companyNo, accountNo, password, modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
