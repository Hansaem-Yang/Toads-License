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

        res.sendFile(path.join(config.root, "/src/views/login.html"));
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
    
    // 마이 페이지
    app.get("/view/mypage", (req, res) => {
        req.session.menuId = 'myinfo';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/mypage");
        }
        else {
            res.render("user/mypage");
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
    
    app.get("/view/mypage-sidebar", (req, res) => {
        if (req.session.user.companyDiv === 'T') {
            res.render("admin/menu/mypage-sidebar");
        }
        else {
            res.render("user/menu/mypage-sidebar");
        }
    });
    
    app.get("/view/myinfo", (req, res) => {
        req.session.menuId = 'myinfo';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/mypage/myinfo");
        }
        else {
            res.render("user/mypage/myinfo");
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

        if (req.query.companyNo) {
            res.locals.companyNo = req.query.companyNo;
        }
        else{
            res.locals.companyNo = '';
        }

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
    
    // 계약 관리자 페이지
    app.get("/view/contract_manager", (req, res) => {
        req.session.menuId = 'contract_manager';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/contract_manager/status");
        }
        else {
            res.render("user/contract_manager/status");
        }
    });
    
    // 계약 관리자 페이지
    app.get("/view/contract_user", (req, res) => {
        req.session.menuId = 'contract_user';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/contract_user/status");
        }
        else {
            res.render("user/contract_user/status");
        }
    });
    
    // 요금제 관리 페이지
    app.get("/view/plan", (req, res) => {
        req.session.menuId = 'plan';
        res.locals.session = req.session;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/plan/status");
        }
        else {
            res.render("user/plan/status");
        }
    });
    
    // 요금제 관리 페이지
    app.get("/view/plan/detail", (req, res) => {        
        res.locals.planId = req.query.planId;

        if (req.session.user.companyDiv === 'T') {
            res.render("admin/plan/detail");
        }
        else {
            res.render("user/plan/detail");
        }
    });
};
