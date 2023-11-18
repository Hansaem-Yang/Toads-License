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
                    res.send(constants.SUCCESS);
                }
                else
                {
                    res.send(constants.WRONG_PASSWORD);
                }
            }
        });
    });
};
