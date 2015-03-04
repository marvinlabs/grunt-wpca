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

    grunt.registerMultiTask('sync-cuar-commons', 'Synchronize all shared files', function () {

        // Merge options with defaults
        var defaultOptions = {
            base_path: '',
            addons_pattern: ['customer-area-*'],
            shared_files: ['libs/cuar/**/*']
        };
        var options = this.options(defaultOptions);
        for (var i in defaultOptions) {
            if (defaultOptions.hasOwnProperty(i)) {
                if (typeof options[i] === 'undefined') {
                    options[i] = defaultOptions[i];
                }
            }
        }

        var wpca_path = options.base_path + '/customer-area';

        // List all add-ons folders
        var addons = grunt.file.expand({cwd: options.base_path}, options.addons_pattern);
        addons.forEach(function (addon) {
            grunt.verbose.writeln(chalk.bgYellow.black("Processing add-on: " + addon));

            // For each shared file pattern
            options.shared_files.forEach(function (shared_file) {
                var allFiles = grunt.file.expand({cwd: wpca_path}, shared_file);

                // For each file matching the current pattern
                allFiles.forEach(function (file) {
                    grunt.file.copy(wpca_path + '/' + file, options.base_path + '/' + addon + '/' + file);
                });
            });
        });


        // Locally useful functions
        var unixifyPath = function (filepath) {
            if (process.platform === 'win32') {
                return filepath.replace(/\\/g, '/');
            } else {
                return filepath;
            }
        };
    });
};
