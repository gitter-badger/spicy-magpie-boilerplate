/**
 * Spicy Magpie's Boilerplate
 *
 * Grunt task configuration.
 */

module.exports = function (grunt) {
    'use strict';

    var underscore = require("underscore/underscore"),
        files = grunt.file.readJSON("filelist.json"),
        filetypes = ["css", "less", "sass", "stylus", "js", "coffee"],
        environments = ["vendor", "development"],
        options = {},
        configs = null;

    require('time-grunt')(grunt);

    options.data = { pkg: grunt.file.readJSON("package.json") };
    options.config = { src: "tasks/*.js" };

    options.files = {

        // Get all stylesheets
        css: (function () {
            var data = files.css;
            return underscore.map(data, function (val) {
                var n = val.name;
                if (val.type !== "css") {
                    n = n.replace("stylesheets/", ".tmp/" + val.type + "/");
                    n = n + ".css";
                }
                return n;
            });
        }()),

        // Get development stylesheets
        css_development: (function () {
            var data = underscore.where(files.css, { "group": "development" });
            return underscore.map(data, function (val) {
                var n = val.name;
                if (val.type !== "css") {
                    n = n.replace("stylesheets/", ".tmp/" + val.type + "/");
                    n = n + ".css";
                }
                return n;
            });
        }()),

        // Get an object for converting LESS files to CSS stylesheets
        less_object: (function () {
            var data = underscore.where(files.css, { "type": "less" }), less = [], css = [];
            less = underscore.pluck(data, "name");
            css = underscore.map(less, function (n) {
                return n.replace("stylesheets/", ".tmp/less/") + ".css";
            });
            return underscore.object(css, less);
        }()),

        // Get an object for converting SASS files to CSS stylesheets
        sass_object: (function () {
            var data = underscore.where(files.css, { "type": "sass" }), sass = [], css = [];
            sass = underscore.pluck(data, "name");
            css = underscore.map(sass, function (n) {
                return n.replace("stylesheets/", ".tmp/sass/") + ".css";
            });
            return underscore.object(css, sass);
        }()),

        // Get an object for converting Stylus files to CSS stylesheets
        stylus_object: (function () {
            var data = underscore.where(files.css, { "type": "stylus" }), stylus = [], css = [];
            stylus = underscore.pluck(data, "name");
            css = underscore.map(stylus, function (n) {
                return n.replace("stylesheets/", ".tmp/stylus/") + ".css";
            });
            return underscore.object(css, stylus);
        }()),

        // Get JavaScript files
        js: (function () {
            var data = files.js;
            return underscore.map(data, function (val) {
                var n = val.name;
                if (val.type !== "js") {
                    n = n.replace("javascripts/", ".tmp/" + val.type + "/");
                    n = n + ".js";
                }
                return n;
            });
        }()),

        // Get development JavaScript files
        js_development: (function () {
            var data = underscore.where(files.js, { "group": "development" });
            return underscore.map(data, function (val) {
                var n = val.name;
                if (val.type !== "js") {
                    n = n.replace("javascripts/", ".tmp/" + val.type + "/");
                    n = n + ".js";
                }
                return n;
            });
        }()),

        // Get development JavaScript files
        js_hint: (function () {
            var data = underscore.where(files.js, { "group": "development", "type" : "js" });
            return underscore.pluck(data, "name");
        }()),

        // Get an object for transpiling ES6 JavaScript to ES5
        es6_object: (function () {
            var data = underscore.where(files.js, { "type": "es6"}), es6 = [], js = [];
            es6 = underscore.pluck(data, "name");
            js = underscore.map(es6, function (n) {
                return n.replace("javascripts/", ".tmp/es6/") + ".js";
            });
            return underscore.object(js, es6);
        }()),

        // Get an object for converting CoffeeScript files to JavaScript
        coffee_object: (function () {
            var data = underscore.where(files.js, { "type": "coffee" }), coffee = [], js = [];
            coffee = underscore.pluck(data, "name");
            js = underscore.map(coffee, function (n) {
                return n.replace("javascripts/", ".tmp/coffee/") + ".js";
            });
            return underscore.object(js, coffee);
        }())
    };

    configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask("build", ["clean", "less", "sass", "stylus", "coffee", "traceur", "csslint", "jshint", "concat", "autoprefixer"]);
    grunt.registerTask("serve", ["build", "browserSync", "watch"]);
    grunt.registerTask("dist", ["build", "copy", "concurrent:prepare", "htmlmin"]);
};
