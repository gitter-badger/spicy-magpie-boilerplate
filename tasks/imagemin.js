/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "img": {
            "files": [{
                "expand": true,
                "cwd": ".",
                "src": "images/**/*.{jpg,jpeg,gif,png}",
                "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
            }]
        }
    };
};
