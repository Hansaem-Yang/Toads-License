const manager = require("../../manager/admin/company_manager");
const constants = require("../../common/constants");

module.exports = function (app) {
    app.post("/admin/company/status", (req, res) => {
        let companyName = req.body.companyName;

        manager.status(companyName).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/company/detail", (req, res) => {
        let companyId = req.body.companyId;

        manager.detail(companyId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/company/insert", (req, res) => {
        let companyName = req.body.companyName;
        let ownerName = req.body.ownerName;
        let businessNo = req.body.businessNo;
        let residentNo = req.body.residentNo;
        let companyDiv = req.body.companyDiv;
        let postCode = req.body.postCode;
        let businessPlace = req.body.businessPlace;
        let nation = req.body.nation;
        let nationCode = req.body.nationCode;
        let telephone = req.body.telephone;
        let regCompany = req.session.user.companyNo;
        let regUser = req.session.user.accountNo;


        manager.insert(companyName, ownerName, businessNo, residentNo, companyDiv,
            postCode, businessPlace, nation, nationCode, telephone, regCompany, regUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/company/update", (req, res) => {
        let companyId = req.body.companyId;
        let companyName = req.body.companyName;
        let ownerName = req.body.ownerName;
        let businessNo = req.body.businessNo;
        let residentNo = req.body.residentNo;
        let companyDiv = req.body.companyDiv;
        let postCode = req.body.postCode;
        let businessPlace = req.body.businessPlace;
        let telephone = req.body.telephone;
        let nation = req.body.nation;
        let nationCode = req.body.nationCode;
        let uptCompany = req.session.user.companyNo;
        let uptUser = req.session.user.accountNo;

        manager.update(companyId, companyName, ownerName, businessNo, residentNo, companyDiv,
            postCode, businessPlace, nation, nationCode, telephone, uptCompany, uptUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/company/delete", (req, res) => {
        let companyIds = req.body.companyIds;

        manager.delete(companyIds).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
