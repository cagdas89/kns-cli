var path = require("path");
var templatehelper = require("../templatehelper");

module.exports = function(dstPath, testName) {
    var fileName = testName;
    if (testName.indexOf(".js") == -1) {
        fileName = testName + ".js"
    }

    var content = {
        filename: testName
    };

    dstPath = path.join(dstPath, testName);
    var srcPath = path.join(__dirname, "../templates/test_template.js");

    return templatehelper(srcPath, dstPath, fileName, content);

};