/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "html": {
            "files": [{
                "expand": true,
                "cwd": "<%= data.pkg.temp_dir %>/html/<%= data.pkg.version %>/",
                "src": "*.html",
                "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
            }]
        },
        "options": {
            "collapseBooleanAttributes": true,
            "collapseWhitespace": true,
            "conservativeCollapse": true,
            "removeAttributeQuotes": false,
            "removeCommentsFromCDATA": true,
            "removeEmptyAttributes": true,
            "removeOptionalTags": false,
            "removeRedundantAttributes": true,
            "useShortDoctype": true
        }
    };
};
