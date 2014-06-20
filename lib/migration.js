var path = require("path");
var moment = require("moment");
var templatehelper = require("./templatehelper");

module.exports = function(migrationName) {
    if ( migrationName.indexOf(".js") == -1 ) {
        migrationName += ".js";
    }

    var time = moment().format("YYYYMMDDHHmmss");
    migrationName = time + "-" + migrationName;

    var srcPath = path.join(__dirname, "../templates/migration_template.js");
    var dstPath = path.join(path.resolve(process.cwd()), "migration") ;
    var content = {
        filename: migrationName,
        date: time
    };

    return templatehelper(srcPath, dstPath, migrationName, content);
};
