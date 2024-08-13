const manager = require("../manager/contract_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/admin/contract/codes", (req, res) => {
        let companyNo = req.body.companyNo;
        
        manager.codes(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/planStatus", (req, res) => {        
        manager.planStatus().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/status", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.status(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/detail", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;

        manager.detail(companyNo, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractService = req.body.contractService;
        let contractDiv = req.body.contractDiv;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let monetaryUnit = req.body.monetaryUnit;
        let exchangeRate = req.body.exchangeRate;
        let remark = req.body.remark;
        let contractManager = req.body.contractManager;
        let licenses = req.body.licenses;
        let odmContracts = req.body.odmContracts;
        let shipsContracts = req.body.shipsContracts;
        let registUser = req.session.user.userNo;

        manager.insert(companyNo, contractName, contractDate, contractor, contractService, contractDiv, contractPeriod, startDate, endDate, 
            monetaryUnit, exchangeRate, remark, contractManager, licenses, odmContracts, shipsContracts, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractService = req.body.contractService;
        let contractDiv = req.body.contractDiv;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let monetaryUnit = req.body.monetaryUnit;
        let exchangeRate = req.body.exchangeRate;
        let remark = req.body.remark;
        let contractManager = req.body.contractManager;
        let licenses = req.body.licenses;
        let odmContracts = req.body.odmContracts;
        let shipsContracts = req.body.shipsContracts;
        let modifyUser = req.session.user.userNo;

        manager.update(companyNo, contractNo, contractName, contractDate, contractor, contractService, contractDiv, contractPeriod, startDate, endDate, 
            monetaryUnit, exchangeRate, remark, contractManager, licenses, odmContracts, shipsContracts, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/admin/contract/delete", (req, res) => {
        let contractNos = req.body.contractNos;

        manager.delete(contractNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}