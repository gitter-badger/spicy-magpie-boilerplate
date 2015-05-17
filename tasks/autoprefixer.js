/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": {
            "src": ".tmp/beforeprefix.css",
            "dest": "<%= data.pkg.assets_dir %>/app.css"
        },
        "options": {
            "browsers": ['> 5%', 'last 3 versions', 'Chrome > 10', 'Firefox > 3', 'Opera 12.1', 'Safari > 3']
        }
    };
};
