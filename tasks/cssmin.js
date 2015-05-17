/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": {
            "files": {
                "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/<%= data.pkg.assets_dir %>/app.css": "<%= files.css %>"
            }
        },
        "options": {
            "shorthandCompacting": false,
            "rebase": false
        }
    };
};
