/**
 * @module appfinder
 * @param {string} processPath
 * @returns {string} pkgPath If package.json found, return its path.
 * @desc Starting from path traverses to up levels until
 * it finds a package.json file. Max Depth: 8
 */


var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs-extra"));
var path = require("path");
var _ = require("lodash");

module.exports = function (processPath) {

    return isPkgExistInPath(processPath).then(function (pkgPath) {
        console.log(pkgPath);
    });
};

function isPkgExistInPath(directoryPath) {
    var pkgPath = path.join(directoryPath, "package.json");
    return fs.existsAsync(pkgPath).then(function (exists) {
        if ( exists ) {
            return fs.statAsync(pkgPath).then(function(stat) {
                if ( stat.isFile() ) {
                    return pkgPath;
                }
                else {
                    return isPkgExistInPath(path.join(pkgPath, ".."));
                }
            });
        }
        else {
            return isPkgExistInPath(path.join(pkgPath, ".."));
        }

    });
}