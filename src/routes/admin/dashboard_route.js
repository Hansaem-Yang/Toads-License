const manager = require("../../manager/admin/dashboard_manager");
const constants = require("../../common/constants");

module.exports = function (app) {
    app.post("/admin/dashboard/satelliteUsage", (req, res) => {
        manager.satelliteUsage().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/dashboard/companyAll", (req, res) => {
        manager.companyAll().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
