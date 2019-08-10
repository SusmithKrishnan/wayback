var	fetch = require('fetch').FetchStream;
var	timemap = require('./timemap');

module.exports = function (url, options, callback) {
	callback = typeof callback === 'undefined' ? options : callback;
	var stream = new fetch(url, typeof options === 'object' ? options : undefined);
	stream.on('error', function(err) {callback(err, null);});
	stream.on('meta', function(meta) {callback(null, stream);});
}
