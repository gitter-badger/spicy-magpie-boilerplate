/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "js": {
            "src": "<%= files.js_hint %>"
        },
        "options": {
            "jshintrc": ".jshintrc",
            "reporter": require("jshint-stylish")
        }
    };
};
