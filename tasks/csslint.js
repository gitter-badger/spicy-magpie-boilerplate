/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "css": {
            "src": "<%= files.css_development %>",
            "options": {
                "adjoining-classes": false,
                "box-sizing": false,
                "font-faces": false
            }
        }
    };
};
