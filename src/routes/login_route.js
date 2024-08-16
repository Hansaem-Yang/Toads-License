const manager = require("../manager/user_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/login", (req, res) => {
        let userId = req.body.userId;
        let password = req.body.password;

        manager.login(userId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                if (data.password == password)
                {
                    req.session.language = 'KR';
                    req.session.user = {
                        companyNo: data.companyNo,
                        companyName: data.companyName,
                        companyDiv: data.companyDiv,
                        userNo: data.userNo,
                        userName: data.userName,
                        userId: data.userId,
                        userAuth: data.userAuth
                    };
                    
                    req.session.menuId = 'dashboard';

                    res.send(constants.SUCCESS);
                }
                else
                {
                    res.send(constants.WRONG_PASSWORD);
                }
            }
        });
    });
    app.post("/logout", (req, res) => {
        console.log("Logout");
        let userId = req.body.userId;

        manager.logout(userId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                req.session.destroy((err) =>{
                    if (err) {
                        console.error(err);
                    }
                });
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/session", (req, res) => {
        if (req.session.user) {
            res.send(constants.SESSION);
        } else {
            res.send(constants.NO_SESSION);
        }
    });
};
