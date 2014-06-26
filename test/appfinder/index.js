/**
 *
 * @File: appfinder.js
 * @Description: TODO<Why we generate this file>
 * @Reference: http://chaijs.com/api/bdd/
 *
 */

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

var path = require("path");

var appfinder = require("../../lib/appfinder");

describe("Appfinder", function () {

    it("checks for package.json existence in project folders", function () {
        var result = path.resolve(process.cwd());
        return expect(appfinder(__dirname)).to.eventually.equal(result);
    });

    it("checks for package.json existence in ", function () {
        var promise = appfinder(path.resolve(__dirname, "level1/level2/level3/level4/level5/level6"));
        return expect(promise).to.eventually.to.be.rejected;
//        Package.json not found
//        return expect(promise).to.eventually.to.be.rejectedWith(Error);
    });

});