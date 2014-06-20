/**
 * @module appfinder
 * @param {string} processPath
 * @returns {string} pkgPath If package.json found, return its path.
 * @desc Starting from path traverses to up levels until
 * it finds a package.json file. Max Depth: 6
 */


var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs-extra"));
var path = require("path");
var _ = require("lodash");
var maxDepth = 6;
var depth = 0;

module.exports = function (processPath) {
    return isPkgExistInPath(processPath);
};

function isPkgExistInPath(directoryPath) {
    var pkgPath = path.join(directoryPath, "package.json");
    depth++;
    return fs.readdirAsync(directoryPath).then(function (filenames) {
        if ( depth >= maxDepth ) {
            throw new Error("Package.json not found in " + maxDepth + "-level up recursion.");
        }
        if ( _.contains(filenames, "package.json")) {
            return fs.statAsync(pkgPath).then(function(stat) {
                if ( stat.isFile() ) {
                    return directoryPath;
                }
                else {
                    return isPkgExistInPath(path.join(directoryPath, ".."));
                }
            });
        }
        else {
            return isPkgExistInPath(path.join(directoryPath, ".."));
        }
    });
}