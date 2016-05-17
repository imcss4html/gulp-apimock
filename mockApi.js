//mockApi.js

var fs = require('fs');
var path = require('path');

var mockbase = path.join(__dirname, 'mock');
var route_config = require('./config');
var mockApi = function(res, pathname, paramObj, next) {
    var mock_file_name = route_config[pathname];
    console.log("request:"+(pathname||"unknow")+" mock_file_name:"+(mock_file_name||"unknow")+" jsonp:"+(paramObj.callback?'yes':'no'));
    var result = null;
    if(mock_file_name){
        result = fs.readFileSync(path.join(mockbase, mock_file_name), 'utf-8');
    }else{
        result = "{'data':'mock_error'}"
    }
    if(paramObj.callback){
        //JSONP
        res.setHeader('Content-type', 'application/javascript');
        res.end(paramObj.callback + '(' + result + ')');
    }else{
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Content-Type', 'application/json');
        res.end(result);
    }

    next();
};

module.exports = mockApi;