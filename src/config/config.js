const config = {};
config.root = "";
config.web = {
    port: 8080,
};
config.sql = {
    server: "10.10.9.54",
    port: 1433,
    requestTimeout: 6000,
    options: { encrypt: false, database: "ToadsMarineCS" },
    authentication: {
        type: "default",
        options: {
            userName: "toadsuser",
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