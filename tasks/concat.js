/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": {
            "src": "<%= files.css %>",
            "dest": ".tmp/beforeprefix.css"
        },
        "js": {
            "src": "<%= files.js %>",
            "dest": "<%= data.pkg.assets_dir %>/app.js"
        }
    };
};
