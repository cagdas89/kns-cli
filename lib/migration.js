var path = require("path");
var moment = require("moment");
var templatehelper = require("./templatehelper");

module.exports = function(dstPath, migrationName) {
    if ( migrationName.indexOf(".js") == -1 ) {
        migrationName += ".js";
    }

    var time = moment().format("YYYYMMDDHHmmss");
    migrationName = time + "-" + migrationName;

    var srcPath = path.join(__dirname, "../templates/migration_template.js");
    var content = {
        filename: migrationName,
        date: time
    };

    return templatehelper(srcPath, dstPath, migrationName, content);
};
