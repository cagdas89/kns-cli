/**
 *
 * @File: <%= filename %>
 * @Description: TODO<Why we generate this file>
 * @Reference: http://chaijs.com/api/bdd/
 *
 */

/**
 * If test is Hapi related, do not forget to require hapi
 */
// var Hapi = require("hapi");

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe("<%= filename %>", function () {

    /**
     * Hapi url test sample
     */
    /* it('calls /someUrl', function (done) {
         server.inject({ method: 'GET', url: '/someUrl' }, function (res) {

         // HTTP status code
         expect(res.statusCode).to.equal(200);
         // headers
         expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
         expect(res.headers['content-length']).to.above(0);
         // cache test
         expect(res.headers['cache-control']).to.equal('max-age=3600, must-revalidate');

         done();
     });
     });
     */

    /**
     * All expect options
     */

    // typeof
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');

    // language chain
    expect(foo).to.be.an.instanceof(Foo);

    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // value type check
    // typeof
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    // language chain
    expect(foo).to.be.an.instanceof(Foo);

    // property
    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // target is truthy
    expect('everthing').to.be.ok;
    expect(1).to.be.ok;
    expect(false).to.not.be.ok;
    expect(undefined).to.not.be.ok;
    expect(null).to.not.be.ok;

    // target is true/false
    expect(true).to.be.true;
    expect(1).to.not.be.true;
    expect(false).to.be.false;
    expect(0).to.not.be.false;

    // target is null
    expect(null).to.be.null;
    expect(undefined).not.to.be.null;

    // target is undefined
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;

    // target is neither nor undefined
    var foo = 'hi'
        , bar = null
        , baz;
    expect(foo).to.exist;
    expect(bar).to.not.exist;
    expect(baz).to.not.exist;

    // empty test, length (or property length) is 0
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;

    // === test
    expect('hello').to.equal('hello');
    expect(42).to.equal(42);
    expect(1).to.not.equal(true);
    // deep
    expect(foo).to.deep.equal({ bar: 'baz' });
    expect({ foo: { bar: { baz: 'quux' } } })
        .to.have.deep.property('foo.bar.baz', 'quux');

    // greater than
    expect(10).to.be.above(5);
    expect('foo').to.have.length.above(2);
    expect([ 1, 2, 3 ]).to.have.length.above(2);

    // greater than or equal to
    expect(10).to.be.at.least(10);
    expect('foo').to.have.length.of.at.least(2);
    expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);

    // less than
    expect(5).to.be.below(10);
    expect('foo').to.have.length.below(4);
    expect([ 1, 2, 3 ]).to.have.length.below(4);

    // less than or equal to
    expect(5).to.be.at.most(5);
    expect('foo').to.have.length.of.at.most(4);
    expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);

    // range <= && =>
    expect(7).to.be.within(5,10);
    expect('foo').to.have.length.within(2,4);
    expect([ 1, 2, 3 ]).to.have.length.within(2,4);

    var Tea = function (name) { this.name = name; }
        , Chai = new Tea('chai');
    expect(Chai).to.be.an.instanceof(Tea);
    expect([ 1, 2, 3 ]).to.be.instanceof(Array);

    // property check, property value check
    // simple referencing
    var obj = { foo: 'bar' };
    expect(obj).to.have.property('foo');
    expect(obj).to.have.property('foo', 'bar');
    // deep referencing
    var deepObj = {
        green: { tea: 'matcha' }
        , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
    };
    expect(deepObj).to.have.deep.property('green.tea', 'matcha');
    expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
    expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
    var arr = [
        [ 'chai', 'matcha', 'konacha' ]
        , [ { tea: 'chai' }
            , { tea: 'matcha' }
            , { tea: 'konacha' } ]
    ];
    expect(arr).to.have.deep.property('[0][1]', 'matcha');
    expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
    expect(obj).to.have.property('foo')
        .that.is.a('string');
    expect(deepObj).to.have.property('green')
        .that.is.an('object')
        .that.deep.equals({ tea: 'matcha' });
    expect(deepObj).to.have.property('teas')
        .that.is.an('array')
        .with.deep.property('[2]')
        .that.deep.equals({ tea: 'konacha' });

    // own property check
    expect('test').to.have.ownProperty('length');

    // length
    expect([ 1, 2, 3]).to.have.length(3);
    expect('foobar').to.have.length(6);

    // regex
    expect('foobar').to.match(/^foo/);
    expect(program.version).to.match(/[0-9]+\.[0-9]+\.[0-9]+/);

    // string contain
    expect('foobar').to.have.string('bar');

    // key check
    expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');

    // error
    var err = new ReferenceError('This is a bad function.');
    var fn = function () { throw err; };
    expect(fn).to.throw(ReferenceError);
    expect(fn).to.throw(Error);
    expect(fn).to.throw(/bad function/);
    expect(fn).to.not.throw('good function');
    expect(fn).to.throw(ReferenceError, /bad function/);
    expect(fn).to.throw(err);
    expect(fn).to.not.throw(new RangeError('Out of range.'));
    expect(fn).to.throw(ReferenceError)
        .and.not.throw(/good function/);

    // has method
    Klass.prototype.bar = function(){};
    expect(Klass).to.respondTo('bar');
    expect(obj).to.respondTo('bar');
    // static function
    Klass.baz = function(){};
    expect(Klass).itself.to.respondTo('baz');

    // target passes truth test
    expect(1).to.satisfy(function(num) { return num > 0; });

    // target is equal to number +/-
    expect(1.5).to.be.closeTo(1, 0.5); // 1 +/- 0.5

    // super set
    expect([1, 2, 3]).to.include.members([3, 2]);
    expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
    expect([4, 2]).to.have.members([2, 4]);
    expect([5, 2]).to.not.have.members([5, 2, 1]);
    expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);

    /**
     * Promise Test Example
     */
    /* it('calls /someUrl', function () {
        // promise based tests
         doSomethingAsync().to.eventually.equal("foo").notify(done);
         return doSomethingAsync().to.eventually.equal("foo");
         return expect(promiseFor({ foo: "bar" })).to.eventually.have.property("foo");
         return promise.to.be.fulfilled;
         return promise.to.eventually.deep.equal("foo");
         return promise.to.become("foo"); // same as `.eventually.deep.equal`
         return promise.to.be.rejected;
         return promise.to.be.rejectedWith(Error); // other variants of Chai's `throw` assertion work too.
     });
     });
     */
});