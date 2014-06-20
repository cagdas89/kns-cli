/**
 *
 * @File: <%= filename %>
 * @Description: TODO < Why we generate this file >
 * @Reference: http://hapijs.com/api#plugin-interface
 *
 */

var Hoek = require("hoek");

var internals = {};
internals.defaults = {};

exports.register = function (plugin, options, next) {

    plugin.dependency("<%=dependency%>", after);
    next();
};

var after = function (plugin, next) {

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

    next();
};

exports.register.attributes = {
    name: "<%= filename %>",
    version: "0.0.1",
    multiple: false
};