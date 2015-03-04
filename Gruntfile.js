/*
 * WP Customer Area
 * http://wp-customerarea.com
 *
 * Copyright (c) 2015 Vincent Mimoun-Prat @ MarvinLabs
 * Licensed under the Apache v2 license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Before generating any new files, copy fixtures to tmp
        copy: {
            fixtures: {
                cwd: 'test',
                src: 'fixtures/**/*',
                dest: 'tmp',
                expand: true
            }
        },

        // Configuration to be run (and then tested).
        'sync-cuar-commons': {
            options: {
                base_path: 'tmp/fixtures/default_options'
            },
            default_options: {
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'copy', 'sync-cuar-commons:default_options', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
