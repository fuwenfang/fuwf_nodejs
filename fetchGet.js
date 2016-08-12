/**
 * Created by fuwenfang on 2016/8/12.
 */
var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(url,true)))
}).listen(7777)
