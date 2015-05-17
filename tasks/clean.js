/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": [
            "<%= data.pkg.assets_dir %>/*.css"
        ],

        "js": [
            "<%= data.pkg.assets_dir %>/*.js"
        ],

        "build": [
            "<%= data.pkg.assets_dir %>/"
        ],

        "dist": [
            "<%= data.pkg.dist_dir %>/",
            "<%= data.pkg.temp_dir %>/",
            ".sass-cache/"
        ],

        "temp": [
            "<%= data.pkg.temp_dir %>/",
            ".sass-cache/"
        ]
    };
};
