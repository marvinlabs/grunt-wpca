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

## The "sync_addon_libs" task

### Overview
In your project's Gruntfile, add a section named `sync_addon_libs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sync_addon_libs: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.cwd
Type: `String`
Default value: `''`

The base directory where WP Customer Area and its addons are installed

#### options.addons_pattern
Type: `String`
Default value: `['customer-area-*']`

A list of patterns to match an add-on's folder name

### Usage Examples

#### Default Options

In this example, the default options are used to do something with whatever. So if the `testing` file has the content 
`Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  sync_addon_libs: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the 
content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be 
`Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  sync_addon_libs: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
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
