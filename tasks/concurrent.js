/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "compile": [
            "less",
            "sass",
            "stylus",
            "coffee"
        ],
        "prepare": [
            "htmlmin:html",
            "cssmin:css",
            "uglify:js",
            "imagemin:img",
            "svgmin:svg",
            "xml_sitemap",
            "manifest"
        ]
    };
};
