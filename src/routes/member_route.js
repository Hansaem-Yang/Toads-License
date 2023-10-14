const manager = require("../manager/member_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/member/list", (req, res) => {
        let companyId = req.body.companyId;

        manager.list(companyId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/member/detail", (req, res) => {
        let accountNo = req.body.accountNo;

        manager.detail(companyId, accountNo).then((data) => {
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
    app.post("/member/regist", (req, res) => {
        let companyId = req.body.companyId;
        let userName = req.body.userName;
        let email = req.body.email;
        let password = req.body.password;
        let memberType = req.body.memberType;
        let nationCode = req.body.nationCode;
        let phoneNumber = req.body.phoneNumber;

        manager.regist(companyId, userName, email, password, memberType, nationCode, phoneNumber).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/member/modify", (req, res) => {
        let accountNo = req.body.accountNo;
        let userName = req.body.userName;
        let email = req.body.email;
        let memberType = req.body.memberType;
        let nationCode = req.body.nationCode;
        let phoneNumber = req.body.phoneNumber;

        manager.modify(accountNo, userName, email, memberType, nationCode, phoneNumber).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/member/delete", (req, res) => {
        let accountNo = req.body.accountNo;

        manager.delete(accountNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
