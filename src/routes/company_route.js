const manager = require("../manager/company_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/company/list", (req, res) => {
        manager.list().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/detail", (req, res) => {
        let companyId = req.body.companyId;

        manager.detail(companyId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/insert", (req, res) => {
        let companyName = req.body.companyName;
        let ownerName = req.body.ownerName;
        let businessNo = req.body.businessNo;
        let residentNo = req.body.residentNo;
        let businessPlace = req.body.businessPlace;
        let telephone = req.body.telephone;
        let registUser = req.body.registUser;

        manager.insert(companyName, ownerName, businessNo, residentNo, businessPlace, telephone, registUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/update", (req, res) => {
        let companyId = req.body.companyId;
        let companyName = req.body.companyName;
        let ownerName = req.body.ownerName;
        let businessNo = req.body.businessNo;
        let residentNo = req.body.residentNo;
        let businessPlace = req.body.businessPlace;
        let telephone = req.body.telephone;
        let modifyUser = req.body.modifyUser;

        manager.update(companyId, companyName, ownerName, businessNo, residentNo, businessPlace, telephone, modifyUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/delete", (req, res) => {
        let companyIds = req.body.companyIds;

        manager.delete(companyIds).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
