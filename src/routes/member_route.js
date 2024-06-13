const manager = require("../manager/member_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/member/status", (req, res) => {
        let companyId = req.body.companyId;

        manager.status(companyId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/member/detail", (req, res) => {
        let memberId = req.body.memberId;

        manager.detail(companyId, memberId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/member/checkEmail", (req, res) => {
        let memberId = req.body.memberId;
        let email = req.body.email;

        manager.checkEmail(memberId, email).then((data) => {
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
        let companyId = req.body.companyId;
        let memberName = req.body.memberName;
        let email = req.body.email;
        let password = req.body.password;
        let memberType = req.body.memberType;
        let roleCode = req.body.roleCode;
        let phone = req.body.phone;
        let useStatus = req.body.useStatus;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insert(companyId, memberName, email, password, memberType, roleCode, phone, useStatus, registCompany, registUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/member/update", (req, res) => {
        let memberId = req.body.memberId;
        let memberName = req.body.memberName;
        let email = req.body.email;
        let memberType = req.body.memberType;
        let roleCode = req.body.roleCode;
        let phone = req.body.phone;
        let useStatus = req.body.useStatus;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(memberId, memberName, email, memberType, roleCode, phone, useStatus, modifyCompany, modifyUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/member/delete", (req, res) => {
        let memberId = req.body.memberId;

        manager.delete(memberId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
