# wayback
[![NPM version](https://badge.fury.io/js/wayback-downloader.svg)](http://badge.fury.io/js/wayback-downloader)
[![Build Status](https://travis-ci.org/SusmithKrishnan/wayback.svg?branch=master)](https://travis-ci.org/SusmithKrishnan/wayback)

wayback machine API implementation, archive.org downloader
## API

### ` Get archive list`

```js
var wayback = require('index.js')
var url = "https://en.wikipedia.org/wiki/Richard_Stallman"

wayback.getTimeMap(url, function(err,data){
  if (err)
    console.log(err)
  console.log(data)
})
```
output:
```js
{ original: 'http://en.wikipedia.org:80/wiki/Richard_Stallman',
  timegate: 'http://web.archive.org',
  first:
   { url:
      'http://web.archive.org/web/20040215143843/http://en.wikipedia.org:80/wiki/Richard_Stallman',
     time: 2004-02-15T14:38:43.000Z },
  last: null,
  mementos:
   [ { url:
        'http://web.archive.org/web/20040215143843/http://en.wikipedia.org:80/wiki/Richard_Stallman',
       time: 2004-02-15T14:38:43.000Z },
     { url:
        'http://web.archive.org/web/20040603010315/http://en.wikipedia.org:80/wiki/Richard_Stallman',
       time: 2004-06-03T01:03:15.000Z },
     { url:
        'http://web.archive.org/web/20040711074424/http://en.wikipedia.org:80/wiki/Richard_Stallman',
       time: 2004-07-11T07:44:24.000Z },
     { url:
        'http://web.archive.org/web/20040803060206/http://en.wikipedia.org:80/wiki/Richard_Stallman',
       time: 2004-08-03T06:02:06.000Z },
     { url:
        'http://web.archive.org/web/20080801012423/http://en.wikipedia.org/wiki/Richard_Stallman',
       time: 2008-08-01T01:24:23.000Z },
... 1231 more items ] }
```

### ` Check availability`

```js
//check if url is archived, return closest timestamp
wayback.isAvailable("example.org",function(err,data){
  if(err)
    console.log(err)
	console.log(data)
})


// check for specific timestamp, return if found else retun closest timestamp
wayback.isAvailable("example.org","20190629143838",function(err,data){
  if(err)
    console.log(err)
	console.log(data)
})

```
