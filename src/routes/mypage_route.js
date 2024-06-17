const manager = require("../manager/mypage_manager");
const constants = require("../common/constants");

module.exports = function (app) {
    app.post("/mypage/info", (req, res) => {
        let companyNo = req.body.companyNo;
        let accountNo = req.body.accountNo;

        manager.info(companyNo, accountNo).then((data) => {
            if (data == null || data.length <= 0) {
                res.send(constants.NO_DATA);
            } else {
                res.send(data);
            }
        });
    });
};
