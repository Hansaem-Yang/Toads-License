const config = require("../config/config");
const logger = require("../logger/logger.js");
const path = require("path");

module.exports = function (app) {
    // 화면 페이지 관리

    // Root 페이지
    app.get("/", (req, res) => {
        logger.info(`Index view`);

        res.sendFile(path.join(config.root, "/src/content/index.html"));
    });

    // 메인 페이지
    app.get("/main", (req, res) => {
        logger.info(`Main view`);

        res.sendFile(path.join(config.root, "/src/content/main.html"));
    });

    // 메뉴 페이지
    app.get("/menu", (req, res) => {
        logger.info(`Menu view`);

        res.sendFile(path.join(config.root, "/src/content/menu/menu.html"));
    });

    // 로그인 페이지
    app.get("/login", (req, res) => {
        logger.info(`Login view`);

        res.sendFile(path.join(config.root, "/src/content/user/login.html"));
    });
};
