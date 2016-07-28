'use strict';

var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.Base.extend({
    prompting: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to ' + chalk.red('Angular semantic app') + ' generator!'
      ));

      var prompts = [{
        name: 'name',
        message: 'What are you calling your app?',
        store: true,
        default : this.appname // Default to current folder name
      }];

      this.prompt(prompts, function (props) {
        this.appName = props.name;
      }.bind(this));
    },
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);

        this.option('skip-install', {
            desc: 'Skips the installation of dependencies',
            type: Boolean
        });
    },

    initializing: function() {
        this.pkg = require('../package.json');
    },

    writing: {
        gulpfile: function() {
            mkdirp(this.appName);
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath(this.appName+'/gulpfile.js')
            );
        },

        packageJSON: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath(this.appName+ '/package.json')
            );
        },

        git: function() {
            this.copy('gitignore', this.appName'+/.gitignore');
        },

        bower: function() {
            var bower = {
                name: _s.slugify(this.appname),
                private: true,
                dependencies: {
                    "angular": "1.5.8",
                    "jquery": "3.1.0",
                    "semantic": "2.2.2",
                    "angular-ui-router": "0.3.1",
                    "semantic-ui-angular-jquery": "0.1.1"
                }
            };

            this.fs.writeJSON('bower.json', this.appName +'/'+ bower);
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath(this.appName+'/.bowerrc')
            );
        },

        jshint: function() {
            this.copy('eslintrc', this.appName + '.eslintrc');
        },

        assets: function() {
            this.copy('assets/', this.appName + 'assets/');
        },

        writeIndex: function() {
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath(this.appName + 'index.html')
            );
        }
    },

    install: function() {
        var howToInstall = '\nNow you need to run: ' + chalk.yellow.bold('bower install && npm install');
        this.log(howToInstall);
    }
});