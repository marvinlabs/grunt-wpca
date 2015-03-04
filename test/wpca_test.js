'use strict';

var grunt = require('grunt');
var fs = require('fs');
var wpca = require('../lib/wpca');

exports.wpca = {

    setUp: function (done) {
        // setup here if necessary
        done();
    },

    listAddons: function (test) {
        'use strict';

        test.expect(1);

        var actual = wpca.listAddons('tmp/fixtures/list_addons', ['customer-area-*']);
        var expected = [
            {
                slug: "customer-area-addon-1",
                version: "1.0.0",
                textDomain: "wpcaa1",
                path: "tmp/fixtures/list_addons/customer-area-addon-1",
                mainFile: "customer-area-addon-1.php",
                langFolder: "tmp/fixtures/list_addons/customer-area-addon-1/languages"
            },
            {
                slug: "customer-area-addon-2",
                version: "2.0.0",
                textDomain: "wpcaa2",
                path: "tmp/fixtures/list_addons/customer-area-addon-2",
                mainFile: "customer-area-addon-2.php",
                langFolder: "tmp/fixtures/list_addons/customer-area-addon-2/languages"
            }
        ];
        test.deepEqual(actual, expected, 'should properly find and describe addons');

        test.done();
    }
};
