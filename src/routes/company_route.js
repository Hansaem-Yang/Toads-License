const manager = require("../manager/company_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/company/codes", (req, res) => {
        manager.codes().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/status", (req, res) => {
        let companyName = req.body.companyName;

        manager.status(companyName).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/company/detail", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.detail(companyNo).then((data) => {
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
        let companyDiv = req.body.companyDiv;
        let postCode = req.body.postCode;
        let businessPlace = req.body.businessPlace;
        let nation = req.body.nation;
        let telephone = req.body.telephone;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;


        manager.insert(companyName, ownerName, businessNo, residentNo, companyDiv,
            postCode, businessPlace, nation, telephone, registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/company/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let companyName = req.body.companyName;
        let ownerName = req.body.ownerName;
        let businessNo = req.body.businessNo;
        let residentNo = req.body.residentNo;
        let companyDiv = req.body.companyDiv;
        let postCode = req.body.postCode;
        let businessPlace = req.body.businessPlace;
        let telephone = req.body.telephone;
        let nation = req.body.nation;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(companyNo, companyName, ownerName, businessNo, residentNo, companyDiv,
            postCode, businessPlace, nation, telephone, modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/company/delete", (req, res) => {
        let companyNos = req.body.companyNos;

        manager.delete(companyNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
