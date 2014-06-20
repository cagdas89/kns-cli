var path = require("path");
var Promise = require("bluebird");
var templatehelper = require("./templatehelper");
var foldercheck = require("../lib/foldercheck");

module.exports = function (dstPath, pluginName, dependentPluginName) {
    var filename = "";
    if ( pluginName.indexOf(".js") == -1 ) {
        filename = pluginName + ".js";
    }

    var content = {
        filename: pluginName,
        dependency: dependentPluginName
    };

    var srcPath = path.join(__dirname, (dependentPluginName ? "../templates/plugin/plugin_dependency_template.js" : "../templates/plugin/plugin_template.js"));

    if ( dependentPluginName ) {
        return foldercheck(dstPath, dependentPluginName).then(function (isExist) {
            if ( isExist ) {
                dstPath = path.join(dstPath, pluginName);
                return templatehelper(srcPath, dstPath, filename, content);
            }
            else {
                throw new Error("Dependency: " + dependentPluginName + " not found in plugin list");
            }
        });
    }
    else {
        dstPath = path.join(dstPath, pluginName);
        return templatehelper(srcPath, dstPath, filename, content);
    }

};
