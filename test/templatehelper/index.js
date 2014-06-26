/**
 *
 * @File: foldercheck.js
 * @Description: TODO<Why we generate this file>
 * @Reference: http://chaijs.com/api/bdd/
 *
 */

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

var path = require("path");
var moment = require("moment");
var Promise = require("bluebird");
var foldercheck = require("../../lib/foldercheck");
var templatehelper = require("../../lib/templatehelper");

var fs = Promise.promisifyAll(require("fs-extra"));

describe("Template Helper", function () {

    it("tries to create a file from non-existing template", function () {
        var srcPath = path.join(process.cwd(), "templates", "non_existing_template.js");
        var dstPath = path.join(process.cwd(), "test/templatehelper");
        var fileName = "test_file_from_non_existing_template";
        var content = {
            filename: "test"
        };

        return templatehelper(srcPath, dstPath, fileName, content).then(function () {
            // check for file existence
            return expect(foldercheck(dstPath, fileName)).to.eventually.be.false;
        });
    });

    describe("Plugin Template", function () {
        var srcPath = path.join(process.cwd(), "templates", "plugin", "plugin_template.js");
        var dstPath = path.join(process.cwd(), "test", "templatehelper", "plugins");
        var fileName = "test_plugin";

        before(function () {
            // remove generated files for test purposes
            return fs.removeAsync(path.join(dstPath, fileName));
        });

        it("creates/overwrites file from template", function () {
            var content = {
                filename: "test"
            };

            return templatehelper(srcPath, dstPath, fileName, content).then(function () {
                // check for file existence
                return expect(foldercheck(dstPath, fileName)).to.eventually.be.true;
            });
        });
    });

    describe("Migration Template", function () {
        var srcPath = path.join(process.cwd(), "templates", "floppy", "migration_template.js");
        var dstPath = path.join(process.cwd(), "test", "templatehelper", "migrations");
        var fileName = "test_migration";

        before(function () {
            // remove generated files for test purposes
            return fs.removeAsync(path.join(dstPath, fileName));
        });

        it("creates/overwrites file from template", function () {
            var content = {
                filename: "test",
                date: moment().format("YYYYMMDDHHmmss")
            };

            return templatehelper(srcPath, dstPath, fileName, content).then(function () {
                // check for file existence
                return expect(foldercheck(dstPath, fileName)).to.eventually.be.true;
            });
        });
    });

});