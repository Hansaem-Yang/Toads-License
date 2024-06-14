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
        let memberName = req.body.memberName;
        let email = req.body.email;
        let password = req.body.password;
        let memberType = req.body.memberType;
        let roleCode = req.body.roleCode;
        let phone = req.body.phone;
        let useStatus = req.body.useStatus;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insert(companyNo, memberName, email, password, memberType, roleCode, phone, useStatus, registCompany, registUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/member/update", (req, res) => {
        let accountNo = req.body.accountNo;
        let memberName = req.body.memberName;
        let email = req.body.email;
        let memberType = req.body.memberType;
        let roleCode = req.body.roleCode;
        let phone = req.body.phone;
        let useStatus = req.body.useStatus;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(accountNo, memberName, email, memberType, roleCode, phone, useStatus, modifyCompany, modifyUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/member/delete", (req, res) => {
        let accountNo = req.body.accountNo;

        manager.delete(accountNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
