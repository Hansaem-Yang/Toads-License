const config = require("../config/config");
const logger = require("../logger/logger.js");
const path = require("path");

module.exports = function (app) {
    // 화면 페이지 관리

    // Root 페이지
    app.get("/", (req, res) => {
        logger.info(`Index view`);

        res.sendFile(path.join(config.root, "/src/views/index.html"));
    });

    // 로그인 페이지
    app.get("/view/login", (req, res) => {
        logger.info(`Login view`);

        res.sendFile(path.join(config.root, "/src/views/user/login.html"));
    });

    // 메인 페이지
    app.get("/view/menu", (req, res) => {
        logger.info(`Menu view`);

        res.render("menu/menu");
    });

    // 메인 페이지
    app.get("/view/main", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        logger.info(`Main view`);

        res.render("main");
    });

    // 업체 관리 페이지
    app.get("/view/company", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        logger.info(`Main view`);

        res.render("company/status");
    });
    
    // 계약 관리 페이지
    app.get("/view/contract", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        logger.info(`Login view`);

        res.sendFile(path.join(config.root, "/src/views/contract/login.html"));
    });
    
    // 사용자 관리 페이지
    app.get("/view/user", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        logger.info(`Login view`);

        res.sendFile(path.join(config.root, "/src/views/user/login.html"));
    });
    
    // 선박 관리 페이지
    app.get("/view/ship", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        logger.info(`Login view`);

        res.sendFile(path.join(config.root, "/src/views/ship/login.html"));
    });
};
