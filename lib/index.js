/**
 *
 * Created by uur on 25/06/14.
 */

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var Path = require("path");


/**
 * Read files in a directory recursively
 * Filter function used filter necessary components
 *
 * @param {string} directoryPath
 * @param {function} filterFunc
 * @returns {Object[]}
 */

function readDirectoryRecursively(directoryPath, filterFunc) {
    return fs.readdirAsync(directoryPath).map(function (item) {
        var path = Path.join(directoryPath, item);
        return Promise.props({
            path: path,
            name: item,
            stat: fs.statAsync(path)
        });
    }).map(function (fsItem) {
        if ( filterFunc(fsItem) ) {
            return fsItem;
        }
        else if ( fsItem.stat.isDirectory() ) {
            return readDirectoryRecursively(fsItem.path, filterFunc);
        }
        else {
            return null;
        }
    }).reduce(function (total, newFsItem) {
        return newFsItem ? total.concat(newFsItem) : total;
    }, []);
}

function filterControllerFile(fsItem) {
    return /(.*)\.js$/.test(fsItem.name) && !fsItem.stat.isDirectory();
}

function filterModelFile(fsItem) {
    return /(.*)\.js$/.test(fsItem.name) && !fsItem.stat.isDirectory();
}

function filterModelFolder(fsItem) {
    return fsItem.name == "model" && fsItem.stat.isDirectory();
}
function filterControllerFolder(fsItem) {
    return fsItem.name == "controller" && fsItem.stat.isDirectory();
}

function findModelFiles(app_root) {

    var plugin_main_folder = Path.join(app_root, "plugins");

    return readDirectoryRecursively(plugin_main_folder, filterModelFolder).map(function (fsItem) {
        return readDirectoryRecursively(fsItem.path, filterModelFile)
    }).reduce(function (total, newFsItems) {
        return newFsItems && newFsItems.length > 0 ? total.concat(newFsItems) : total;
    }, []);
}

function findControllerFiles(app_root) {

    var plugin_main_folder = Path.join(app_root, "plugins");

    return readDirectoryRecursively(plugin_main_folder, filterControllerFolder).map(function (fsItem) {
        return readDirectoryRecursively(fsItem.path, filterControllerFile)
    }).reduce(function (total, newFsItems) {
        return newFsItems && newFsItems.length > 0 ? total.concat(newFsItems) : total;
    }, []);
}

module.exports = {
    findModelFiles: findModelFiles,
    findControllerFiles: findControllerFiles
};