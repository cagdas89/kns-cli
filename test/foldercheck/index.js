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

var foldercheck = require("../../lib/foldercheck");

describe("Folder Checker", function () {

    it("checks for existing folder", function () {
        var promise = foldercheck(path.resolve(process.cwd()), "node_modules");
        return expect(promise).to.eventually.be.true;
    });

    it("checks for non-existing folder", function () {
        var promise = foldercheck(path.resolve(process.cwd()), "hebele");
        return expect(promise).to.eventually.be.false;
    });

    it("checks for a folder inside an invalid path", function () {
        var promise = foldercheck(path.resolve(process.cwd(), "non/existing/path"), "hebele");
//        ENOENT
        return expect(promise).to.eventually.be.rejected;
    });

});