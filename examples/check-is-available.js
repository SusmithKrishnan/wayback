var wayback = require('../index.js')
var url = "example.org";

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
