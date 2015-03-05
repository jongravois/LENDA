module.exports = function() {
    var client = './';
    var clientApp = './angular/';
    var config = {
        temp: './.tmp/',
        /**
         * File Paths
         */
        alljs: [
            clientApp + '**/*.js',
            './*.js'
        ],
        client: client,
        index: '../app/views/portal_employee/index.blade.php',
        js: [
            clientApp + '**/*.module.js',
            clientApp + 'constants/*.js',
            clientApp + 'routes/*.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: [
            './css/styles.less'
        ],

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './vendor/',
            ignorePath: '../../'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
