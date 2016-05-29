//gulpfile.js
var gulp = require('gulp');
var mockApi = require('./mockApi');
var webserver = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
var route_config = null;
function getConfig(){
    //为了当更新config.js时候无需重启服务，使用文件读取。require()会缓存
    var file_buffer = fs.readFileSync("./config.js");
        file_text = file_buffer.toString();

    file_text = file_text.replace(/'/mg, "\""); //发现 JSON.parse 含有单引号会有问题
    try{
        route_config = JSON.parse(file_text);
        console.log(route_config)
        return true;
    }catch(e){
        console.log("config.js formate error");
        return false;
    }
}
getConfig();

if(route_config){
    gulp.task('default', function() {
        gulp.src('./app')
            .pipe(webserver({
                middleware: function(req, res, next) {
                    var urlObj = url.parse(req.url, true),
                        method = req.method,
                        paramObj = urlObj.query;
                    // mock数据
                    mockApi(res, urlObj.pathname, paramObj, route_config, next);
                }
            }));
    });

    gulp.task('changeConfig', function(){
       getConfig();
    })

    var watcher = gulp.watch('./*.js', ['changeConfig']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
}else{
    gulp.task('default', function() {
        console.log("can not start");
    })
}

