/**
 * Created by Josh Pagley on 6/11/14.
 */

module.exports = {
    development: {
        db: 'mongodb://localhost/zionconnect',
        port: process.env.PORT || 8080
    },
    production: {
        db: 'mongodb://joshpagley:joshpagley@ds027729.mongolab.com:27729/zionconnect',
        port: process.env.PORT || 80
    }
}