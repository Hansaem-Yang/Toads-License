const manager = require("../manager/nations_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/nations/status", (req, res) => {
        let language = req.session.language;
        manager.status(language).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
