'use strict';

var grunt = require('grunt');
var fs = require('fs');

exports.sync_addon_libs = {

    setUp: function (done) {
        // setup here if necessary
        done();
    },

    default_options: function (test) {
        'use strict';

        test.expect(1);

        var actual = grunt.file.expand({ cwd: 'tmp/fixtures/default_options'}, '**/*').sort();
        var expected = grunt.file.expand({ cwd: 'test/expected/default_options'}, '**/*').sort();
        test.deepEqual(actual, expected, 'should copy libs to all add-on folders');

        test.done();
    }
};
