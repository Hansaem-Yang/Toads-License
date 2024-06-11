const manager = require("../../manager/admin/contract_manager");
const constants = require("../../common/constants");

module.exports = function (app) {
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
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let amount = req.body.amount;
        let discountedAmount = req.body.discountedAmount;
        let actualAmount = req.body.actualAmount;
        let remark = req.body.remark;
        let licenses = req.body.licenses;
        let regCompany = req.session.user.companyNo;
        let regUser = req.session.user.accountNo;

        manager.insert(companyNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
            amount, discountedAmount, actualAmount, remark, licenses, regCompany, regUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let amount = req.body.amount;
        let discountedAmount = req.body.discountedAmount;
        let actualAmount = req.body.actualAmount;
        let remark = req.body.remark;
        let licenses = req.body.licenses;
        let uptCompany = req.session.user.companyNo;
        let uptUser = req.session.user.accountNo;

        manager.update(companyNo, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
            amount, discountedAmount, actualAmount, remark, licenses, uptCompany, uptUser).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/admin/contract/delete", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;

        manager.delete(companyNo, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
