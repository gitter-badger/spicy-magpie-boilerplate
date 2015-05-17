/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/manifest.appcache": [
            "*.{html,php}",
            "<%= data.pkg.assets_dir %>/*.css",
            "<%= data.pkg.assets_dir %>/*.js",
            "fonts/**/*.{eot,svg,ttf,woff,woff2}",
            "images/**/*.{jpg,jpeg,gif,png,svg,svgz}",
            "media/**/*.*",
            "apple-touch-icon*.png",
            "touch-icon-192x192.png",
            "crossdomain.xml",
            "humans.txt",
            "robots.txt",
            "favicon.ico"
        ],
        "options": {
            "network": [
                "http://*",
                "https://*"
            ],
            fallback: ["/ /offline.html"],
            preferOnline: true,
            timestamp: true
        }
    };
};
