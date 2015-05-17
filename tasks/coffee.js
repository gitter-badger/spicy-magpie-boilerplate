/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "compile": {
            "files": "<%= files.coffee_object %>",
            "options": {
                "sourceMap": false
            }
        }
    };
};
