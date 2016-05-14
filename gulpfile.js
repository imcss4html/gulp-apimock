//gulpfile.js
var gulp = require('gulp');
var mockApi = require('./mockApi');
var webserver = require('gulp-webserver');
var url = require('url');
gulp.task('webserver', function() {
    gulp.src('./app')
        .pipe(webserver({
            middleware: function(req, res, next) {
                var urlObj = url.parse(req.url, true),
                    method = req.method,
                    paramObj = urlObj.query;
                // mock数据
                mockApi(res, urlObj.pathname, paramObj, next);
            }
        }));
});