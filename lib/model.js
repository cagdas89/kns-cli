var path = require("path");
var templatehelper = require("./templatehelper");

module.exports = function(dstPath, modelName) {

    if ( modelName[0] !== modelName[0].toLocaleLowerCase() ) {
        modelName = modelName[0].toLocaleLowerCase() + modelName.slice(1);
    }

    var srcPath = path.join(__dirname, "../templates/floppy/model_template.js");
    var content = {
        model: modelName,
        Model: modelName[0].toLocaleUpperCase() + modelName.slice(1)
    };

    return templatehelper(srcPath, dstPath, modelName + ".js", content);
};
