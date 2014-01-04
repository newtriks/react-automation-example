'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // Let *load-grunt-tasks* require everything
    require('load-grunt-tasks')(grunt);
    // Read configuration from package.json
    var pkgConfig = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkgConfig,
        react: {
            test: {
                files: [{
                    expand: true,
                    src: [
                        '<%= pkg.src %>/scripts/components/**/*.js',
                        '<%= pkg.test %>/scripts/components/**/*.js'
                    ],
                    dest: '<%= pkg.test %>/.tmp',
                    ext: '.js'
                }]
            }
        },
        webpack: {
            build: {
                entry: './<%= pkg.src %>/scripts/components/<%= pkg.mainInput %>.js',
                output: {
                    path: '<%= pkg.src %>/scripts/',
                    filename: '<%= pkg.mainOutput %>.js'
                },
                debug: true,
                cache: true,
                stats: {
                    colors: true,
                    reasons: true
                },
                module: {
                    loaders: [{
                        test: /\.css$/,
                        loader: 'style!css'
                    }, {
                        test: /\.gif/,
                        loader: 'url-loader?limit=10000&minetype=image/gif'
                    }, {
                        test: /\.jpg/,
                        loader: 'url-loader?limit=10000&minetype=image/jpg'
                    }, {
                        test: /\.png/,
                        loader: 'url-loader?limit=10000&minetype=image/png'
                    }, {
                        test: /\.js$/,
                        loader: 'jsx-loader'
                    }]
                }
            }
        },
        watch: {
            webpack: {
                files: ['<%= pkg.src %>/scripts/{,*/}*.js',
                    '<%= pkg.src %>/styles/{,*/}*.css',
                    '!<%= pkg.src %>/scripts/<%= pkg.mainOutput %>.js'
                ],
                tasks: ['webpack']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= pkg.src %>/{,*/}*.html',
                    '<%= pkg.src %>/scripts/<%= pkg.mainOutput %>.js'
                ]
            }
        },
        connect: {
            options: {
                port: 8000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, pkgConfig.src)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, pkgConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            test: 'test/.tmp'
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'connect:livereload',
            'webpack',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:test',
        'react:test',
        'karma'
    ]);

    grunt.registerTask('build', []);

    grunt.registerTask('default', []);
};
