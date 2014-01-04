# React Automation Example

## Getting Started

### What is React?

A JavaScript library for building user interfaces: [React](http://facebook.github.io/).

### What is Grunt?

A JavaScript task runner: [Grunt](http://gruntjs.com/).

### How to setup the project

1. `git clone https://github.com/newtriks/react-automation-example.git`
2. `npm install`
3. `grunt server`

## HACKS

To get tests working with karma there is a single hack which is to add the div element the main React component is rendered to and its associated id to `/node_modules/karma/static/context.html` e.g.

```
<!-- The scripts need to be at the end of body, so that some test running frameworks
     (Angular Scenario, for example) need the body to be loaded so that it can insert its magic
     into it. If it is before body, then it fails to find the body and crashes and burns in an epic
     manner. -->
<div id="content"></div>
```

The [karma-webpack](https://github.com/newtriks/karma-webpack) plugin is used to handle the *require* logic for the tests. This is work in progress and I think this particular approach to testing could be improved. Please check other test related branches for alternative approaches.

## TODO

1. ~~Add tests - jasmine/karma~~ >Working on better approaches e.g. replace karma with [webpack-dev-server](https://github.com/webpack/webpack-dev-server) or replace webpack with [browserify](http://browserify.org/).
2. Add jshint
2. Add stylus?
