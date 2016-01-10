module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var temp = './.tmp/';
    
    var config = {
        build: './build/',
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',       
            '!' +  clientApp + '**/*.spec.js',       
        ],
        css: temp + '*.css',
        less: client + 'styles/styles.less',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + 'images/**/*.*',
        server: server,
        temp: temp,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        getWiredepDefaultOptions: getWiredepOptions,
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    };      

    function getWiredepOptions () {
        var options = {
          bowerJson: config.bower.json,
          directory: config.bower.directory,
          ignorePath: config.bower.ignorePath  
        };
        
        return options;
    }
    
    return config;
};
