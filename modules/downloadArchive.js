var	fetch = require('fetch').FetchStream;
module.exports = function (url, callback){
	let htmlData = ''
	readStream = new fetch(url);
	readStream.on('data', function(data){
		htmlData += data;
	})
	readStream.on('end', function(){
		return callback(null,htmlData);
	})
}
