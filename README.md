
## gulp plugin to run api mock, support jsonp.


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
http://yourhost:8000/api/vote?callback=mock_test
```

* response 
```javascript
{'code':1, 'msg':'test the mock'}
mock_test({'code':1, 'msg':'test the mock'})
```

