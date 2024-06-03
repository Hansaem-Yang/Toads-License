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
        if (!req.session.user) {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }
        
        if (req.session.user.userType === 'T') {
            res.render("admin/main");
        }
        else {
            res.render("member/main");
        }
    });

    app.get("/view/topmenu", (req, res) => {
        logger.info(`Top menu view`);

        if (req.session.user.userType === 'T') {
            res.render("admin/menu/topmenu");
        }
        else {
            res.render("member/menu/topmenu");
        }
    });
    
    app.get("/view/sidebar", (req, res) => {
        logger.info(`Sidebar view`);

        if (req.session.user.userType === 'T') {
            res.render("admin/menu/sidebar");
        }
        else {
            res.render("member/menu/sidebar");
        }
    });
    
    app.get("/view/dashboard", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'dashboard';
        if (req.session.user.userType === 'T') {
            res.render("admin/dashboard");
        }
        else {
            res.render("member/dashboard");
        }
    });

    // 업체 관리 페이지
    app.get("/view/company", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'company';
        if (req.session.user.userType === 'T') {
            res.render("admin/company/status");
        }
        else {
            res.render("member/company/status");
        }
    });
    
    // 계약 관리 페이지
    app.get("/view/contract", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'contract';
        if (req.session.user.userType === 'T') {
            res.render("admin/contract/status");
        }
        else {
            res.render("member/contract/status");
        }
    });
    
    // 라이센스 관리 페이지
    app.get("/view/license", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'license';
        if (req.session.user.userType === 'T') {
            res.render("admin/license/status");
        }
        else {
            res.render("member/license/status");
        }
    });
    
    // 사용자 관리 페이지
    app.get("/view/user", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'user';
        if (req.session.user.userType === 'T') {
            res.render("admin/user/status");
        }
        else {
            res.render("member/user/status");
        }
    });
    
    // 선박 관리 페이지
    app.get("/view/ship", (req, res) => {
        if (!req.session.user)
        {
            res.sendFile(path.join(config.root, "/src/views/user/login.html"));
            return;
        }

        req.session.menuId = 'ship';
        if (req.session.user.userType === 'T') {
            res.render("admin/ship/status");
        }
        else {
            res.render("member/ship/status");
        }
    });
};
