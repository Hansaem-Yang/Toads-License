function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
    });
}

define("SUCCESS", "SUCCESS");
define("FAIL", "FAIL");
define("NO_DATA", "NO DATA");
define("WRONG_PASSWORD", "WRONG PASSWORD");
define("ALREADY_CONNECTED", "ALREADY CONNECTED");
define("EMAIL_DUPLICATE", "EMAIL DUPLICATE");
define("NO_LICENSE", "NO LICENSE");
define("LICENSE_EXCEEDED", "LICENSE EXCEEDED");
define("LICENSE_EXPIRATION", "LICENSE EXPIRATION");
