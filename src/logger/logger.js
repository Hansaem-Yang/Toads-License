const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const constants = require("../common/constants");
const iconv = require("iconv-lite");

const { combine, timestamp, printf } = winston.format;

const logFormat = printf((info) => {
    return `${info.timestamp} ${info.level} ${info.message}`;
});

const encoder = {
    encode: (str) => {
        return iconv.encode(str, "utf-8");
    },
};

// 로그 생성
const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        logFormat
    ),
    // info / error 로그 파일 생성
    transports: [
        new winstonDaily({
            level: "info",
            datePattern: "YYYY-MM-DD",
            dirname: constants.LOG_PATH,
            filename: `%DATE%.log`,
            maxFiles: 30,
            zippedArchive: true,
            encoding: "utf8",
            encoding: encoder,
        }),
        new winstonDaily({
            level: "error",
            datePattern: "YYYY-MM-DD",
            dirname: constants.LOG_PATH,
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
            encoding: "utf8",
            encoding: encoder,
        }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        })
    );
}

module.exports = logger;
