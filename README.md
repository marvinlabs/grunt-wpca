# WP Customer Area

> Grunt plugin to ease WP Customer Area development

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the 
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a 
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with 
that process, you may install this plugin with this command:

```shell
npm install grunt-wpca --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wpca');
```

## The "sync-cuar-commons" task

### Overview
In your project's Gruntfile, add a section named `sync-cuar-commons` and `update-cuar-versions` to 
the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'sync-cuar-commons': {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
  'update-cuar-versions': {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.base_path
Type: `String`
Default value: `''`

The base directory where WP Customer Area and its addons are installed

#### options.addons_pattern
Type: `Array`
Default value: `['customer-area-*']`

A list of patterns to match an add-on's folder name

#### options.shared_files
Type: `Array`
Default value: `['libs/cuar/**/*']`

A list of patterns matching the files to be synchronized

### Usage Examples

```js
grunt.initConfig({
  'sync-cuar-commons': {
    options: {
        base_path: 'wp-plugins'
    },
  },
  'update-cuar-versions': {
    options: {
        base_path: 'wp-plugins'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed 
functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Vincent Mimoun-Prat @ MarvinLabs. Licensed under the Apache v2 license.
