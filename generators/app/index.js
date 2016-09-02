'use strict';
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _s = require('underscore.string');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-videojj-koa2') + ' generator!'
    ));

    var prompts = [{
      name: 'moduleName',
      message: 'What do you want to name your app?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function(val) {
        return _s.slugify(val);
      }
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: function(val) {
        return val.length > 0 ? true : 'You have to provide a username';
      }
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate: function(val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
      },
      filter: function(val) {
        return normalizeUrl(val);
      }
    }]

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.moduleName = this.props.moduleName;
    this.camelModuleName = _s.camelize(this.props.moduleName);
    this.githubUsername = this.props.githubUsername;
    this.name = this.user.git.name();
    this.email = this.user.git.email();
    this.website = this.props.website;
    this.humanizedWebsite = humanizeUrl(this.website);

    this.template('babelrc', '.babelrc');
    this.template('editorconfig', '.editorconfig');
    this.template('eslintignore', '.eslintignore');
    this.template('eslintrc', '.eslintrc');
    this.template('gitattributes', '.gitattributes');
    this.template('gitignore', '.gitignore');
    this.template('CHANGELOG.md');
    this.template('LICENSE');
    this.template('Makefile');
    this.template('README.md');
    this.template('app.js');
    this.template('ecosystem.json');
    this.template('gulpfile.js');
    this.template('package.json');
    this.directory('lib');
    this.directory('public');
    this.directory('views');
  },

  install: function () {
    this.installDependencies();
  }
});
