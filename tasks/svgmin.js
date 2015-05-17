/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "svg": {
            "files": [{
                "expand": true,
                "cwd": ".",
                "src": "{images,media}/**/*.{svg,svgz}",
                "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
            }],
            "options": {
                "plugins": [
                    {
                        removeUselessStrokeAndFill: false
                    }
                ]
            }
        }
    };
};
