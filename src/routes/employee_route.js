const manager = require("../manager/employee_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/employee/status", (req, res) => {
        manager.status().then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });

    app.post("/employee/detail", (req, res) => {
        let empNo = req.body.empNo;

        manager.detail(empNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });

    app.post("/employee/checkEmail", (req, res) => {
        let empNo = req.body.empNo;
        let email = req.body.email;

        manager.checkEmail(empNo, email).then((data) => {
            if (data == 0) {
                res.send(constants.SUCCESS);
            } else if (data > 0) {
                res.send(constants.EMAIL_DUPLICATE);
            } else {
                res.send(constants.FAIL);
            }
        });
    });

    app.post("/employee/insert", (req, res) => {
        let companyNo = req.body.companyNo;
        let empNo = req.body.empNo;
        let empName = req.body.empName;
        let empEname = req.body.empEname;
        let email = req.body.email;
        let enterDate = req.body.enterDate;
        let nation = req.body.nation;
        let idNo = req.body.idNo;

        manager.insert(companyNo, empNo, empName, empEname, email, enterDate, nation, idNo).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    app.post("/employee/update", (req, res) => {
        let companyNo = req.body.companyNo;
        let empNo = req.body.empNo;
        let empName = req.body.empName;
        let empEname = req.body.empEname;
        let email = req.body.email;
        let enterDate = req.body.enterDate;
        let nation = req.body.nation;
        let idNo = req.body.idNo;

        manager.update(companyNo, empNo, empName, empEname, email, enterDate, nation, idNo).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });

    app.post("/employee/delete", (req, res) => {
        let empNos = req.body.empNos;

        manager.delete(empNos).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
    
    app.post("/employee/changePassword", (req, res) => {
        let empNo = req.body.empNo;
        let password = req.body.password;

        manager.changePassword(empNo, password).then((data) => {
            if (data == null || data <= 0) {
                res.send(constants.FAIL);
            } else {
                res.send(constants.SUCCESS);
            }
        });
    });
};
