const manager = require("../manager/dashboard_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    /// 관리자
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
    app.post("/admin/dashboard/userSatelliteUsage", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.userSatelliteUsage(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/dashboard/company", (req, res) => {
        let companyNo = req.body.companyNo;
        
        manager.company(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });

    /// 사용자
    app.post("/user/dashboard/satelliteUsage", (req, res) => {
        manager.satelliteUsage().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/dashboard/companyAll", (req, res) => {
        manager.companyAll().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/dashboard/userSatelliteUsage", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.userSatelliteUsage(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/user/dashboard/company", (req, res) => {
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
