/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "transpile": {
            "files": "<%= files.es6_object %>",
            "options": {
                "experimental": true,
                "moduleNaming": {
                    "stripPrefix": "src/es6",
                    "addPrefix": "com/github/spicymagpie/boilerplate"
                },
                "copyRuntime": ".tmp/"
            }
        }
    };
};
