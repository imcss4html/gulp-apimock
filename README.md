
## gulp plugin to run api mock


## USAGE:
```javascript
 npm install
 gulp webserver
```

* edit the file: config.js
```javascript
module.exports = {
    '/api/vote':'vote.json'
}
 ```
 
* edit the file: mock/vote.json
```javascript
{'code':1, 'msg':'test the mock'}
 ```
 
* request 
```javascript
http://yourhost:8000/api/vote
```

* response 
```javascript
{'code':1, 'msg':'test the mock'}
 ```

