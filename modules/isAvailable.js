var	getRequest = require('../lib/getRequest');

module.exports = function (url, timestamp, callback) {
  callback = typeof callback === 'undefined' ? timestamp : callback;
	var apiUrl = 'http://archive.org/wayback/available';
  var params = {
    url:url,
    timestamp: typeof timestamp === 'function' ? null : timestamp
  }

	getRequest(apiUrl,params,function(err, res) {
		if (err) {
			return callback(err, null);
		}
    let chunks = [];
		res.on('data',function(data){
      chunks.push(data)
    })
    res.on('end',function(){
      return callback(null,JSON.parse(chunks.toString()))
    })
	});
}
