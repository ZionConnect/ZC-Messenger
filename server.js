/**
 * Created by Josh Pagley on 6/11/14.
 */

var express = require('express'),
    fs = require('fs'),
    app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')[env];

/**
    Configure Express
 */
require('./config/express')(app);

/**
 Configure Mongoose
 */
require('./config/mongoose')(config);

// Bootstrap Routes
var routes_path = __dirname + '/routes';
var walk = function(path){
    fs.readdirSync(path).forEach(function(file){
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if(stat.isFile()){
            if(/(.*)\.(js$|coffee$)/.test(file)){
                require(newPath)(app);
            }
        } else if (stat.isDirectory() && file !== 'middlewares'){
            walk(newPath);
        }
    });
}
walk(routes_path);

app.listen(config.port);
console.log('*** Environment is ' + process.env.NODE_ENV + ' ***');
console.log('Listening on port ' + config.port + '...');
