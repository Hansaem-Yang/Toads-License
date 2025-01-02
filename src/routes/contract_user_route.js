const manager = require("../manager/contract_user_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    /// 사용자
    app.post("/admin/contract/user/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/user/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;

        manager.detail(contractNo, userNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/user/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let userId = req.body.userId;
        let email = req.body.email;
        let userPwd = req.body.userPwd;
        let userName = req.body.userName;
        let applyStartDate = req.body.applyStartDate;
        let applyFinishDate = req.body.applyFinishDate;
        let licenseNo = req.body.licenseNo;
        let shipSeq = req.body.shipSeq;
        let useYn = req.body.useYn;
        let registUser = req.session.user.userNo;

        manager.checkEmail(userId).then((data) =>{
            if (data) {
                res.send(constants.EMAIL_DUPLICATE);
            } else {
                manager.insert(contractNo, userId, email, userPwd, userName, applyStartDate, applyFinishDate, 
                    licenseNo, shipSeq, useYn, registUser).then((data) => {
                    if (data == null || data <= 0) {
                        res.send(constants.FAIL);
                    } else {
                        res.send(constants.SUCCESS);
                    }
                });
            }
        });
    });
    app.post("/admin/contract/user/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;
        let userId = req.body.userId;
        let email = req.body.email;
        let userPwd = req.body.userPwd;
        let userName = req.body.userName;
        let applyStartDate = req.body.applyStartDate;
        let applyFinishDate = req.body.applyFinishDate;
        let licenseNo = req.body.licenseNo;
        let shipSeq = req.body.shipSeq;
        let useYn = req.body.useYn;
        let modifyUser = req.session.user.userNo;

        manager.update(contractNo, userNo, userId, email, userPwd, userName, applyStartDate, applyFinishDate, 
            licenseNo, shipSeq, useYn, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/user/delete", (req, res) => {
        let userNos = req.body.userNos;

        manager.delete(userNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/user/changePassword", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;
        let userPwd = req.body.userPwd;

        manager.changePassword(contractNo, userNo, userPwd).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    /// 사용자
    app.post("/user/contract/user/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/user/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;

        manager.detail(contractNo, userNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/user/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let userId = req.body.userId;
        let email = req.body.email;
        let userPwd = req.body.userPwd;
        let userName = req.body.userName;
        let applyStartDate = req.body.applyStartDate;
        let applyFinishDate = req.body.applyFinishDate;
        let licenseNo = req.body.licenseNo;
        let shipSeq = req.body.shipSeq;
        let useYn = req.body.useYn;
        let registUser = req.session.user.userNo;

        manager.checkEmail(userId).then((data) =>{
            if (data) {
                res.send(constants.EMAIL_DUPLICATE);
            } else {
                manager.insert(contractNo, userId, email, userPwd, userName, applyStartDate, applyFinishDate, 
                    licenseNo, shipSeq, useYn, registUser).then((data) => {
                    if (data == null || data <= 0) {
                        res.send(constants.FAIL);
                    } else {
                        res.send(constants.SUCCESS);
                    }
                });
            }
        });
    });
    app.post("/user/contract/user/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;
        let userId = req.body.userId;
        let email = req.body.email;
        let userPwd = req.body.userPwd;
        let userName = req.body.userName;
        let applyStartDate = req.body.applyStartDate;
        let applyFinishDate = req.body.applyFinishDate;
        let licenseNo = req.body.licenseNo;
        let shipSeq = req.body.shipSeq;
        let useYn = req.body.useYn;
        let modifyUser = req.session.user.userNo;

        manager.update(contractNo, userNo, userId, email, userPwd, userName, applyStartDate, applyFinishDate, 
            licenseNo, shipSeq, useYn, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/user/contract/user/delete", (req, res) => {
        let userNos = req.body.userNos;

        manager.delete(userNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/user/contract/user/changePassword", (req, res) => {
        let contractNo = req.body.contractNo;
        let userNo = req.body.userNo;
        let userPwd = req.body.userPwd;

        manager.changePassword(contractNo, userNo, userPwd).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}