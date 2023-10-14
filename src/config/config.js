const config = {};
config.root = "";
config.web = {
    port: 8080,
};
config.sql = {
    server: "192.168.50.254",
    port: 1433,
    requestTimeout: 6000,
    options: { encrypt: false, database: "ToadsLicense" },
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "toads0228",
        },
    },
    pool: {
        max: 10,
        min: 1,
        idleTimeoutMillis: 6000,
    },
};

module.exports = config;