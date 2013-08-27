/*
 * grunt-init-codekitkillah
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Synergema SuperFriends, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a grunt-based preprocessor for your web project. And do it now!';

// Template-specific notes to be displayed before question prompts.
//exports.notes = '_Project name_ should not contain "jquery" or "js" and ' +

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'preprocessor'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'Enter description here.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {
    // A few additional properties.
    props.gruntfile = 'Gruntfile.js';
    props.jsintrc   = '.jsintrc';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'grunt-codekitkillah',
      version: "1.0.0",
      dependencies: {},
      devDependencies: {
        'grunt': "~0.4.1",
        'grunt-contrib-watch': '~0.4.4',
        'grunt-contrib-sass': '~0.4.1',
        'grunt-contrib-jshint': '~0.6.0',
        'grunt-contrib-uglify': '~0.2.2',
        'grunt-contrib-imagemin': '~0.1.4',
        'matchdep': '~0.1.2'
      },
    });

    // Generate jquery.json file.
    init.writePackageJSON(props.jqueryjson, props, function(pkg, props) {
      // The jQuery site needs the "bugs" value as a string.
      if ('bugs' in props) { pkg.bugs = props.bugs; }
      return pkg;
    });

    // All done!
    done();
  });

};