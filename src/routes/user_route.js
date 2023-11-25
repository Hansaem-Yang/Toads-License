const manager = require("../manager/user_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/user/login", (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        manager.member(email).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                if (data.password == password)
                {
                    req.session.user = {
                        companyId: data.companyId,
                        memberId: data.memberId,
                        memberName: data.memberName,
                        email: data.email,
                        memberType: data.memberType,
                        roleCode: data.roleCode,
                    }

                    res.send(constants.SUCCESS);
                }
                else
                {
                    res.send(constants.WRONG_PASSWORD);
                }
            }
        });
    });
    app.post("/user/logout", (req, res) => {
        console.log("Logout");
        let email = req.body.email;

        req.session.destroy((err) =>{
            if (err) {
                console.error(err);
            }
            res.send(constants.SUCCESS);
        });

        // manager.logout(email).then((data) => {
        //     if (data == null || data.length <= 0) {
        //         res.send(constants.NO_DATA);
        //     } else {
        //         req.session.destroy((err) =>{
        //             if (err) {
        //                 console.error(err);
        //             }
        //         });
        //         res.send(constants.SUCCESS);
        //     }
        // });
    });
};
