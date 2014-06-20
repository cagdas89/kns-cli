var path = require("path");
var templatehelper = require("./templatehelper");

module.exports = function(pluginName, dependentPluginName) {
    var filename = "";
    if ( pluginName.indexOf(".js") == -1 ) {
        filename = pluginName + ".js";
    }

    var srcPath = path.resolve(dependentPluginName ? "../templates/plugin_dependency_template.js" : "../templates/plugin_template.js");
    var dstPath = path.join(path.resolve(process.cwd()), "plugin") ;
    var content = {
        filename: pluginName,
        dependency: dependentPluginName
    };

    return templatehelper(srcPath, dstPath, filename, content);
};
