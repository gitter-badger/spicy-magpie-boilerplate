/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "js": {
            "src": "<%= files.js %>",
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/<%= data.pkg.assets_dir %>/app.js",
            "options": {
                "compress": true
            }
        }
    };
};
