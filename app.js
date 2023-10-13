const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./src/config/config");

const app = express();

config.root = path.resolve(__dirname);

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/public", express.static("public"));

app.listen(config.web.port, function () {
    logger.info(`Express server has started on port (${config.web.port})`);
});