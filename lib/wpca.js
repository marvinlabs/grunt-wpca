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
 * List the add-ons in a given directory
 *
 * @param cwd The paht to the folder containing the add-ons (relative to your gruntfile)
 * @param namePatterns An array of globbing patterns to match the add-on folder names
 */
wpca.listAddons = function(cwd, namePatterns) {
    var addons = [];
    var folders = grunt.file.expand({cwd: cwd}, namePatterns);

    folders.forEach(function(slug) {
        var path = cwd + '/' + slug;
        var pkg = grunt.file.readJSON(cwd + '/' + slug + '/package.json' );

        // If product slug is not specified, use the slug and do some renaming to account for new product names
        if (undefined===pkg['productSlug']) {
            pkg.productSlug = slug
                .replace('customer-area', 'wpca')
                .replace('wpca-login-form', 'wpca-authentication-forms')
                .replace('wpca-extended-permissions', 'wpca-additional-owner-types')
                .replace('wpca-collaboration', 'wpca-front-office-publishing')
                .replace('wpca-owner-restriction', 'wpca-owner-restrictions');
        }

        var addon = {
            slug: slug,
            productSlug: pkg.productSlug,
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