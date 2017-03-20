module.exports = function karmConfig( config ) {
    config.set({
        // Karma will INJECT the mocha and chai JS files
        // into its test runner HTML for us
        frameworks: [ 'mocha', 'chai' ],
        browsers: [ 'Chrome' ],
        singleRun: true,
        files: [
            'src/*.js',
            'test/*.js'
        ]
    });
};
