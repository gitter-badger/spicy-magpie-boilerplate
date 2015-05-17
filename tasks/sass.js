/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "compile": {
            "files": "<%= files.sass_object %>",
            "options": {
                "style": "expanded",
                "sourcemap": "none"
            }
        }
    };
};
