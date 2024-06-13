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
    app.get("/view/main", (req, res) => {        
        if (req.session.user.companyDiv === 'T') {
            res.render("admin/main");
        }
        else {
            res.render("user/main");
        }
    });

    app.get("/view/topmenu", (req, res) => {
        if (req.session.user.companyDiv === 'T') {
            res.render("admin/menu/topmenu");
        }
        else {
            res.render("user/menu/topmenu");
        }
    });
    
    app.get("/view/sidebar", (req, res) => {
        if (req.session.user.companyDiv === 'T') {
            res.render("admin/menu/sidebar");
        }
        else {
            res.render("user/menu/sidebar");
        }
    });
    
    app.get("/view/dashboard", (req, res) => {
        req.session.menuId = 'dashboard';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/dashboard");
        }
        else {
            res.render("user/dashboard");
        }
    });

    // 업체 관리 페이지
    app.get("/view/company", (req, res) => {
        req.session.menuId = 'company';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/company/status");
        }
        else {
            res.render("user/company/status");
        }
    });

    app.get("/view/company/detail", (req, res) => {
        res.locals.companyNo = req.query.companyNo;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/company/detail");
        }
        else {
            res.render("user/company/detail");
        }
    });
    
    // 계약 관리 페이지
    app.get("/view/contract", (req, res) => {
        req.session.menuId = 'contract';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/contract/status");
        }
        else {
            res.render("user/contract/status");
        }
    });

    app.get("/view/contract/detail", (req, res) => {
        res.locals.companyNo = req.query.companyNo;
        res.locals.contractNo = req.query.contractNo;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/contract/detail");
        }
        else {
            res.render("user/contract/detail");
        }
    });
    
    // 라이센스 관리 페이지
    app.get("/view/license", (req, res) => {
        req.session.menuId = 'license';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/license/status");
        }
        else {
            res.render("user/license/status");
        }
    });
    
    // 사용자 관리 페이지
    app.get("/view/user", (req, res) => {
        req.session.menuId = 'user';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/user/status");
        }
        else {
            res.render("user/user/status");
        }
    });
    
    // 선박 관리 페이지
    app.get("/view/ship", (req, res) => {
        req.session.menuId = 'ship';
        res.locals.session = req.session;
        if (req.session.user.companyDiv === 'T') {
            res.render("admin/ship/status");
        }
        else {
            res.render("user/ship/status");
        }
    });
};
