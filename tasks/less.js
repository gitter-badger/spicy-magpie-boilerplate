/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "compile": {
            "files": "<%= files.less_object %>",
            "options": {
                "syncImport": true,
                "sourcemap": false
            }
        }
    };
};
