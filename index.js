/**
 * Created by fuwenfang on 2016/8/11.
 */
var route = require('./route')
var server = require('./server')
server.start(route.route)