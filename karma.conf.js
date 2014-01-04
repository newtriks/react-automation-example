'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'webpack'],
        files: [
            'test/helpers/**/*.js',
            'test/.tmp/**/*.js'
        ],
        preprocessors: {
            'test/.tmp/**/*.js': ['webpack'],
            'test/helpers/**/*.js': ['webpack']
        },
        webpackPreprocessor: {
            modulesRoot: 'test/helpers'
        },
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: false,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        captureTimeout: 60000,
        singleRun: true
    });
};
