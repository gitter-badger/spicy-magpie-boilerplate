/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "development": {
            "bsFiles": {
                src: [
                    "*.{html,php}",
                    "build/**/*",
                    "fonts/**/*.{eot,svg,ttf,woff,woff2}",
                    "images/**/*.{jpg,jpeg,gif,png,svg,svgz}",
                    "media/**/*.*",
                    "javascripts/**/*.{js,coffee}",
                    "stylesheets/**/*.{css,less,sass,scss,styl}"
                ]
            },
            "options": {
                "watchTask": true,
                "port": "<%= data.pkg.server_port %>",
                "notify": false,
                "tunnel": true,
                "server": {
                    "baseDir": ".",
                    "directory": false
                }
            }
        }
    };
};
