/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "files": {
            "expand": true,
            "cwd": ".",
            "src": ["*.html", "*.php"]
        },
        "options": {
            changefreq: "weekly",
            dest: "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/",
            fileName: "sitemap",
            siteRoot: "<%= data.pkg.url %>",
            priority: 0.5
        }
    };
};
