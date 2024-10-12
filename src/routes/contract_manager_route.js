const manager = require("../manager/contract_manager_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    /// 관리자
    app.post("/admin/contract/manager/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/manager/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;

        manager.detail(contractNo, seq).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/manager/insert", (req, res) => {
        let contractNo = req.body.contractNo;
        let email = req.body.email;
        let pwd = req.body.pwd;
        let name = req.body.name;
        let userAuth = req.body.userAuth;
        let useYn = req.body.useYn;
        let registUser = req.session.user.userNo;

        manager.checkEmail(email).then((data) =>{
            if (data) {
                res.send(constants.EMAIL_DUPLICATE);
            } else {
                manager.insert(contractNo, email, pwd, name, userAuth, useYn, registUser).then((data) => {
                    if (data == null || data <= 0) {
                        res.send(constants.FAIL);
                    } else {
                        res.send(constants.SUCCESS);
                    }
                });
            }
        });
    });
    app.post("/admin/contract/manager/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let email = req.body.email;
        let pwd = req.body.pwd;
        let name = req.body.name;
        let userAuth = req.body.userAuth;
        let useYn = req.body.useYn;
        let modifyUser = req.session.user.userNo;

        manager.update(contractNo, seq, email, pwd, name, userAuth, useYn, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/manager/delete", (req, res) => {
        let seqs = req.body.seqs;

        manager.delete(seqs).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/manager/changePassword", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let pwd = req.body.pwd;

        manager.changePassword(contractNo, seq, pwd).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    /// 사용자
    app.post("/user/contract/manager/status", (req, res) => {
        let contractNo = req.body.contractNo;

        manager.status(contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/manager/detail", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;

        manager.detail(contractNo, seq).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/contract/manager/update", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let email = req.body.email;
        let pwd = req.body.pwd;
        let name = req.body.name;
        let userAuth = req.body.userAuth;
        let useYn = req.body.useYn;
        let modifyUser = req.session.user.userNo;

        manager.update(contractNo, seq, email, pwd, name, userAuth, useYn, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/user/contract/manager/changePassword", (req, res) => {
        let contractNo = req.body.contractNo;
        let seq = req.body.seq;
        let pwd = req.body.pwd;

        manager.changePassword(contractNo, seq, pwd).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}