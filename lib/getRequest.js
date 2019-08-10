var	fetch = require('fetch').FetchStream;

module.exports = function (url, params, callback) {
	callback = typeof callback === 'undefined' ? params : callback;
  var getParams = ""
  Object.keys(params).map(function(key, index) {
    getParams += key+"="+params[key]+"&";
  });
  url += "?"+getParams;
	var stream = new fetch(url);
	stream.on('error', function(err) {callback(err, null);});
	stream.on('meta', function(meta) {callback(null, stream);});
}
