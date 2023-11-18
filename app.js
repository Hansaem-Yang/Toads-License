const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./src/config/config");
const logger = require("./src/logger/logger");

const app = express();

// 웹 서비스 Root 경로 지정
config.root = path.resolve(__dirname);

// Express 사용 메모리 설정
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/public", express.static("public"));

// Route 파일 설정
require("./src/routes/view_route")(app);
require("./src/routes/user_route")(app);
require("./src/routes/member_route")(app);
require("./src/routes/company_route")(app);
require("./src/routes/contract_route")(app);
require("./src/routes/license_route")(app);

app.listen(config.web.port, function () {
    logger.info(`Express server has started on port (${config.web.port})`);
});