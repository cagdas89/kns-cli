/**
 *
 * @File: <%= filename %>
 * @Description: TODO<Why we generate this file>
 * @Reference: http://hapijs.com/api#plugin-interface
 *
 */

var Hoek = require("hoek");

var internals = {};
internals.defaults = {};

exports.register = function (plugin, options, next) {
    /**
     * If options will be used.
     */

    //    options = Hoek.applyToDefaults(internals.defaults, options);

    /**
     * If plugin will serve views inside view folder.
     * /plugin/name/view
     */

    //    plugin.views({
    //        engines: {
    //            ejs: require("ejs")
    //        },
    //        path: "./plugins/<%= filename %>/view"
    //    });

    /**
     * If plugin will serve objects for
     * another plugins.
     */

     //    plugin.expose("key","value");

    next();
};

exports.register.attributes = {
    name: "<%= filename %>",
    version: "0.0.1",
    multiple: false
};