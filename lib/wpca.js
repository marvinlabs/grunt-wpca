/*
 * WP Customer Area
 * http://wp-customerarea.com
 *
 * Copyright (c) 2015 Vincent Mimoun-Prat @ MarvinLabs
 * Licensed under the Apache v2 license.
 */

'use strict';

var grunt = require('grunt');

var wpca = module.exports = {};

/**
 *
 */
wpca.listAddons = function(cwd, namePatterns) {
    var addons = [];
    var folders = grunt.file.expand({cwd: cwd}, namePatterns);

    folders.forEach(function(slug) {
        var path = cwd + '/' + slug;
        var pkg = grunt.file.readJSON(cwd + '/' + slug + '/package.json' );
        var addon = {
            slug: slug,
            version: pkg.version,
            path: path,
            textDomain: pkg.textDomain,
            mainFile: slug + '.php',
            langFolder: 'languages'
        };

        addons.push(addon);
    });

    return addons;
};
