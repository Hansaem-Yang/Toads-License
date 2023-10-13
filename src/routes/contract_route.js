const manager = require("../manager/contract_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/contract/list", (req, res) => {
        let companyId = req.body.companyId;

        manager.list(companyId).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/detail", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;

        manager.detail(companyId, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/insert", (req, res) => {
        let companyId = req.body.companyId;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let remark = req.body.remark;
        let registUser = req.body.registUser;

        manager.insert(companyId, contractName, contractDate, contractor, contractPeriod, startDate, endDate, remark, registUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/update", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let remark = req.body.remark;
        let modifyUser = req.body.modifyUser;

        manager.update(companyId, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, remark, modifyUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/delete", (req, res) => {
        let companyId = req.body.companyId;
        let contractNo = req.body.contractNo;

        manager.delete(companyId, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
