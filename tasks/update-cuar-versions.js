/*
 * WP Customer Area
 * http://wp-customerarea.com
 *
 * Copyright (c) 2015 Vincent Mimoun-Prat @ MarvinLabs
 * Licensed under the Apache v2 license.
 */

'use strict';

module.exports = function (grunt) {

    // Require some modules
    var path = require('path');
    var fs = require('fs');
    var chalk = require('chalk');

    grunt.registerMultiTask('update-cuar-versions', 'Update the version matrix', function () {
        var defaultOptions = {
            base_path: '',
            addons_pattern: ['customer-area-*'],
            themes_pattern: ['customer-area-*']
        };

        var options = this.options(defaultOptions);
        for (var i in defaultOptions) {
            if (defaultOptions.hasOwnProperty(i)) {
                if (typeof options[i] === 'undefined') {
                    options[i] = defaultOptions[i];
                }
            }
        }

        // Read the main plugin version and use that as the main key
        var wpca_path = options.base_path + '/customer-area';
        var versions = grunt.file.readJSON(wpca_path + '/versions.json' );
        var wpcaVersion = grunt.file.readJSON(wpca_path + '/composer.json' ).version;
        versions[wpcaVersion] = {};

        // Matrix for all addons
        var addons = grunt.file.expand({cwd: options.base_path}, options.addons_pattern);
        addons.forEach(function (addonSlug) {
            if (addonSlug=="customer-area") return;

            grunt.verbose.writeln(chalk.bgYellow.black("Processing add-on: " + addonSlug));

            var pkg = grunt.file.readJSON(options.base_path + '/' + addonSlug + '/composer.json' );
            versions[wpcaVersion][addonSlug] = pkg.version;
        });

        // Write changes to the versions file
        grunt.file.write(wpca_path + '/versions.json', JSON.stringify(versions, null, 2) );
    });
};
