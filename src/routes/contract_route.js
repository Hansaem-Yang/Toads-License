const manager = require("../manager/contract_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/contract/codes", (req, res) => {
        let companyNo = req.body.companyNo;
        
        manager.codes(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/status", (req, res) => {
        let companyNo = req.body.companyNo;

        manager.status(companyNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/detail", (req, res) => {
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
    app.post("/contract/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let monetaryUnit = req.body.monetaryUnit;
        let exchangeRate = req.body.exchangeRate;
        let amount = req.body.amount;
        let discountedAmount = req.body.discountedAmount;
        let actualAmount = req.body.actualAmount;
        let remark = req.body.remark;
        let licenses = req.body.licenses;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insert(companyNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
            monetaryUnit, exchangeRate, amount, discountedAmount, actualAmount, remark, licenses, registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/contract/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let contractName = req.body.contractName;
        let contractDate = req.body.contractDate;
        let contractor = req.body.contractor;
        let contractPeriod = req.body.contractPeriod;
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let monetaryUnit = req.body.monetaryUnit;
        let exchangeRate = req.body.exchangeRate;
        let amount = req.body.amount;
        let discountedAmount = req.body.discountedAmount;
        let actualAmount = req.body.actualAmount;
        let remark = req.body.remark;
        let licenses = req.body.licenses;
        let modifyCompany = req.session.user.companyNo;
        let modifyUser = req.session.user.accountNo;

        manager.update(companyNo, contractNo, contractName, contractDate, contractor, contractPeriod, startDate, endDate, 
            monetaryUnit, exchangeRate, amount, discountedAmount, actualAmount, remark, licenses, modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/contract/delete", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;

        manager.delete(companyNo, contractNo).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/contract/termination/status", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;

        manager.terminationStatus(companyNo, contractNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
    app.post("/contract/termination/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationDate = req.body.terminationDate;
        let terminationType = req.body.terminationType;
        let terminationReasons = req.body.terminationReasons;
        let registCompany = req.session.user.companyNo;
        let registUser = req.session.user.accountNo;

        manager.insertTermination(companyNo, contractNo, terminationDate, terminationType, terminationReasons, 
            registCompany, registUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    app.post("/contract/termination/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let contractNo = req.body.contractNo;
        let terminationNo = req.body.terminationNo;
        let terminationStatus = req.body.terminationStatus;
        let cancellationCharge = req.body.cancellationCharge;
        let cancellationRefund = req.body.cancellationRefund;

        manager.updateTermination(companyNo, contractNo, terminationNo, terminationStatus, cancellationCharge, cancellationRefund, 
            modifyCompany, modifyUser).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
}