var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs-extra"));
var path = require("path");
var _ = require("lodash");

module.exports = function (srcPath, dstPath, filename, data) {
    return fs.mkdirsAsync(dstPath).then(function() {
            return fs.readFileAsync(srcPath);
        }).then(function (template) {
            return _.template(template, data);
        }).then(function (content) {
            fs.writeFileAsync(path.join(dstPath, filename), content)
        }).catch(function (e) {
            console.log("Error reading file", e);
        });
};
