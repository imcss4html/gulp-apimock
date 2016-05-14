# gulp-apimock
## gulp plugin to run api mock


## USEAGE:
```javascript
 npm install
 gulp webserver
```javascript

* edit the file: config.js
```javascript
module.exports = {
    '/api/vote':'vote.json',
    '/api/getUserInfo':'getUserInfo.json',
    '/api/apply':'apply.json'
}
 ```
* edit the folder: mock/

* request http://yourhost:8000/api/vote

* response the content: content of file mock/vote.json

