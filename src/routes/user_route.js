const manager = require("../manager/user_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/user/login", (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        manager.login(email, password).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
