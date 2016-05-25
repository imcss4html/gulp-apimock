
## gulp plugin to run api mock, support jsonp.


## USAGE:
```javascript
 npm install
```

```javascript
gulp
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
normal: http://yourhost:8000/api/vote

jsonp:  http://yourhost:8000/api/vote?callback=mock_test
```

* response 
```javascript
normal: {'code':1, 'msg':'test the mock'}

jsonp:  mock_test({'code':1, 'msg':'test the mock'})
```

