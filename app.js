const express = require("express");
const session = require("express-session");
const i18next = require('i18next');
const middleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./src/config/config");
const logger = require("./src/logger/logger");
const constants = require("./src/common/constants");

const app = express();

// 웹 서비스 Root 경로 지정
config.root = path.resolve(__dirname);

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'ko', // 기본 언어
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/translation.json') // 번역 파일 경로
    },
    detection: {
      order: ['querystring', 'cookie', 'header'], // 언어 감지 방법
      caches: ['cookie'] // 언어를 쿠키에 저장
    }
  });

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use(middleware.handle(i18next));

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
    res.render("login", {t: req.t});
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

// Route 파일 설정
require("./src/routes/view_route")(app);
require("./src/routes/login_route")(app);
require("./src/routes/mypage_route")(app);
require("./src/routes/dashboard_route")(app);
require("./src/routes/employee_route")(app);
require("./src/routes/nations_route")(app);
require("./src/routes/company_route")(app);
require("./src/routes/contract_route")(app);
require("./src/routes/contract_manager_route")(app);
require("./src/routes/contract_user_route")(app);
require("./src/routes/contract_cancel_route")(app);
require("./src/routes/plan_route")(app);
require("./src/routes/ship_cctv_route")(app);

app.listen(config.web.port, function () {
    logger.info(`Express server has started on port (${config.web.port})`);
});