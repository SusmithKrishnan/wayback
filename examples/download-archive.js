var wayback = require('../index.js')
var url = "http://web.archive.org/web/20080216004559/http://en.wikipedia.org/wiki/Richard_Stallman"

wayback.downloadArchive(url,function(err,htmlData){
  if(err)
    console.log(err)
	console.log(htmlData)
})
