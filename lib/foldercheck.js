/**
 * @module folderCheck
 * @param {string} path
 * @param {string} promisedName
 * @returns {boolean} isExist If found
 * @desc Starting from path traverses to up levels until
 * it finds a package.json file. Max Depth: 6
 */


var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs-extra"));
var _ = require("lodash");

module.exports = function (path, promisedName) {
    return folderCheck(path, promisedName);
};

function folderCheck(directoryPath, promisedName) {
    return fs.readdirAsync(directoryPath).then(function (filenames) {
        return _.contains(filenames, promisedName);
    });
}