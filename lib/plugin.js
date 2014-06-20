var path = require("path");
var Promise = require("bluebird");
var templatehelper = require("./templatehelper");

module.exports = function(dstPath, pluginName, dependentPluginName) {
    var filename = "";
    if ( pluginName.indexOf(".js") == -1 ) {
        filename = pluginName + ".js";
    }

    var content = {
        filename: pluginName,
        dependency: dependentPluginName
    };

    dstPath = path.join(dstPath, pluginName);

    var srcPath = path.join(__dirname, (dependentPluginName ? "../templates/plugin_dependency_template.js" : "../templates/plugin_template.js"));

    if ( dependentPluginName ) {
        return require("../lib/foldercheck")(path.join(pkgPath, "plugins"), dependentPluginName).then(function (isExist) {
            if (isExist) {
                return templatehelper(srcPath, dstPath, filename, content);
            }
            else {
                throw new Error("Dependency: " + dependentPluginName + "not found in plugin list");
            }
        });
    }
    else {
        return templatehelper(srcPath, dstPath, filename, content);
    }

};
