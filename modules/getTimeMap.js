var	request = require('../lib/request');
var	timemap = require('../lib/timemap');

module.exports = function (url, callback) {
	var timelineUrl = 'http://web.archive.org/web/timemap/link/' + url;
	request(timelineUrl, function(err, res) {
		if (err) {
			callback(err, null);
			return;
		}
		timemap.parseTimemap(res, callback);
	});
}
