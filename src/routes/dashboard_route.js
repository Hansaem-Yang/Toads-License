const manager = require("../manager/dashboard_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/dashboard/satelliteUsage", (req, res) => {
        manager.satelliteUsage().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/dashboard/companyAll", (req, res) => {
        manager.companyAll().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/dashboard/userSatelliteUsage", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.userSatelliteUsage(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/dashboard/company", (req, res) => {
        let companyNo = req.body.companyNo;
        
        manager.company(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
