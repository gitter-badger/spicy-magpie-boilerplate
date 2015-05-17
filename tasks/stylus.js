/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "compile": {
            "files": "<%= files.stylus_object %>",
            "options": {
                "compress": false,
                "linenos": true
            }
        }
    };
};
