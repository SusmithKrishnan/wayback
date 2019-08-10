var wayback = require('../index.js')
var url = "https://en.wikipedia.org/wiki/Richard_Stallman"

wayback.getTimeMap(url, function(err,data){
  if (err)
    console.log(err)
	console.log(data)
})
