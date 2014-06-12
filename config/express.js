/**
 * Created by Josh Pagley on 6/11/14.
 */

var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')

module.exports = function(app){
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }

    app.use(methodOverride());
    app.use(bodyParser());
}