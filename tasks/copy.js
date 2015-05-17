/**
 * Spicy Magpie's Boilerplate
 */

module.exports = function () {
    'use strict';

    return {
        "html": {
            "expand": true,
            "cwd": ".",
            "src": "*.html",
            "dest": ".tmp/html/<%= data.pkg.version %>/",
            "options": {
                "process": function (content, srcpath) {
                    var fs = require("fs"),
                        data = JSON.parse(fs.readFileSync("package.json", "utf8"));
                    return content
                        .replace(/\%\[CHANGE TITLE\]/g, data.title)
                        .replace(/\%\[CHANGE AUTHOR\]/g, data.author)
                        .replace(/\%\[CHANGE TWITTER FOR AUTHOR\]/g, data.twitter)
                        .replace(/\%\[CHANGE GOOGLE+ AUTHOR\]/g, data.googleplus)
                        .replace(/\%\[CHANGE DESCRIPTION\]/g, data.description)
                        .replace(/\%\[CHANGE KEYWORDS\]/g, data.keywords)
                        .replace(/\%\[CHANGE FACEBOOK APP ID\]/g, data.site_facebook_id)
                        .replace(/\%\[CHANGE FACEBOOK ADMIN ID\]/g, data.site_facebook_admins)
                        .replace(/\%\[CHANGE TWITTER FOR SITE\]/g, data.site_twitter)
                        .replace(/\%\[CHANGE GOOGLE+ PUBLISHER\]/g, data.site_googleplus)
                        .replace(/\%\[CHANGE GOOGLE ANALYTICS CODE\]/g, data.site_ga_code)
                        .replace(/http\:\/\/www\.example\.org\//g, data.url)
                        .replace(/\%\[CHANGE VERSION\]/g, data.version)
                        .replace(/<html([\s\S]*?)>/, '<html lang="%[CHANGE LOCALE]" manifest="manifest.appcache">')
                        .replace(/\%\[CHANGE LOCALE\]/g, data.locale)
                        .replace(/<\!\-\-\%\[DEVELOPMENT\]\-\-\>([\s\S]*?)<\!\-\-\%\[\/DEVELOPMENT\]\-\-\>/gm, "");
                }
            }
        },
        "php": {
            "expand": true,
            "cwd": ".",
            "src": "{.,config,src,lib}/*.php",
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/",
            "options": {
                "process": function (content, srcpath) {
                    var fs = require("fs"),
                        data = JSON.parse(fs.readFileSync("package.json", "utf8"));
                    return content
                        .replace(/\%\[CHANGE TITLE\]/g, data.title)
                        .replace(/\%\[CHANGE AUTHOR\]/g, data.author)
                        .replace(/\%\[CHANGE TWITTER FOR AUTHOR\]/g, data.twitter)
                        .replace(/\%\[CHANGE DESCRIPTION\]/g, data.description)
                        .replace(/\%\[CHANGE KEYWORDS\]/g, data.keywords)
                        .replace(/\%\[CHANGE TWITTER FOR SITE\]/g, data.site_twitter)
                        .replace(/\%\[CHANGE GOOGLE+ AUTHOR\]/g, data.googleplus_author)
                        .replace(/\%\[CHANGE GOOGLE+ PUBLISHER\]/g, data.googleplus_publisher)
                        .replace(/\%\[CHANGE GOOGLE ANALYTICS CODE\]/g, data.ga_code)
                        .replace(/http\:\/\/www\.example\.org\//g, data.url)
                        .replace(/\%\[CHANGE VERSION\]/g, data.version)
                        .replace(/<html([\s\S]*?)>/, '<html lang="%[CHANGE LOCALE]" manifest="manifest.appcache">')
                        .replace(/\%\[CHANGE LOCALE\]/g, data.locale)
                        .replace(/<\!\-\-\%\[DEVELOPMENT\]\-\-\>([\s\S]*?)<\!\-\-\%\[\/DEVELOPMENT\]\-\-\>/gm, "");
                }
            }
        },
        "robots": {
            "expand": true,
            "cwd": ".",
            "src": "robots.txt",
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/",
            "options": {
                "process": function (content, srcpath) {
                    var fs = require("fs"),
                        data = JSON.parse(fs.readFileSync("package.json", "utf8"));
                    return content
                        .replace(/http\:\/\/www\.example\.org\//g, data.url);
                }
            }
        },
        "fonts": {
            "expand": true,
            "cwd": ".",
            "src": "fonts/**/*.{eot,svg,ttf,woff,woff2,otf}",
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
        },
        "media": {
            "expand": true,
            "cwd": ".",
            "src": "media/**/*.*",
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
        },
        "other": {
            "expand": true,
            "cwd": ".",
            "src": [
                "apple-touch-icon*.png",
                "touch-icon-192x192.png",
                "crossdomain.xml",
                "favicon.ico",
                "humans.txt"
            ],
            "dest": "<%= data.pkg.dist_dir %>/<%= data.pkg.version %>/"
        }
    };
};
