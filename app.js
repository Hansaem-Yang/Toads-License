const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./src/config/config");
const logger = require("./src/logger/logger");
const constants = require("./src/common/constants");

const app = express();

// 웹 서비스 Root 경로 지정
config.root = path.resolve(__dirname);

// Express 사용 메모리 설정
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/public", express.static("public"));

// 세션 설정
app.use(session({ secret: '0x546F6164734D6172696E654C6963656E7365', resave: false, saveUninitialized: true, }));
// 미들웨어를 사용하여 세션에 로그인 상태 저장
app.use((req, res, next) => {
    if (req.session) {
        res.locals.session = req.session;
    }

    next();
});

app.use('/view', (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.sendFile(path.join(config.root, "/src/views/login.html"));
  }
});

app.use('/admin', (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.send(constants.NO_SESSION);
  }
});

app.use('/user', (req, res, next) => {
  if (req.session.user) {
    next();
  }
  else {
    res.send(constants.NO_SESSION);
  }
});

 // EJS 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// Route 파일 설정
require("./src/routes/view_route")(app);
require("./src/routes/login_route")(app);
require("./src/routes/mypage_route")(app);
require("./src/routes/dashboard_route")(app);
require("./src/routes/employee_route")(app);
require("./src/routes/member_route")(app);
require("./src/routes/nations_route")(app);
require("./src/routes/company_route")(app);
require("./src/routes/contract_route")(app);
require("./src/routes/license_route")(app);

app.listen(config.web.port, function () {
    logger.info(`Express server has started on port (${config.web.port})`);
});