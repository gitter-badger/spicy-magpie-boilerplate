/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": {
            "files": "stylesheets/**/*.css",
            "tasks": ["csslint", "concat:css", "autoprefixer"]
        },
        "less": {
            "files": "stylesheets/**/*.less",
            "tasks": ["less", "csslint", "concat:css", "autoprefixer"]
        },
        "sass": {
            "files": "stylesheets/**/*.sass",
            "tasks": ["sass", "csslint", "concat:css", "autoprefixer"]
        },
        "scss": {
            "files": "stylesheets/**/*.scss",
            "tasks": ["sass", "csslint", "concat:css", "autoprefixer"]
        },
        "stylus": {
            "files": "stylesheets/**/*.styl",
            "tasks": ["stylus", "csslint", "concat:css", "autoprefixer"]
        },
        "js": {
            "files": "javascripts/**/*.js",
            "tasks": ["jshint", "concat:js"]
        },
        "coffee": {
            "files": "javascripts/**/*.coffee",
            "tasks": ["coffee", "jshint", "concat:js"]
        }
    };
};
