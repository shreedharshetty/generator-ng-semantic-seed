'use strict';

var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
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
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
        },

        packageJSON: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
        },

        git: function() {
            this.copy('gitignore', '.gitignore');
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

            this.fs.writeJSON('bower.json', bower);
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
        },

        jshint: function() {
            this.copy('eslintrc.json', '.eslintrc.json');
        },


        writeIndex: function() {
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath('index.html')
            );
        },

        app: function() {
            this.directory('assets', 'assets');
        }
    },

    install: function() {
        var howToInstall = '\nNow you need to run: ' + chalk.yellow.bold('bower install && npm install');
        this.log(howToInstall);
    }
});
