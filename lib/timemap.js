var split = require('split');
var parseLineRegEx = /^(\w+)="(.*)"/;

function parseLine(line) {
  var attrs = {}
  var parts = line.split('; ')
  var url = parts.shift();
  url = url.slice(1, -1); // will remove <> brakcers
  attrs.url = url;
  // parse attributes
  parts.
  map(function(part) {
    var matches = part.match(parseLineRegEx);
    return [matches[1],matches[2]];
  }).
  forEach(function(parts) {
    var key = parts[0]
    var val = parts[1];
    switch (key) {
      case 'rel':
        val.split(' ').forEach(function(entry) {attrs[entry] = true;});
        break;
      case 'datetime':
        attrs.datetime = new Date(val);
        break;
    }
  });
  return attrs;
}

function parseTimemap(input, callback) {
  var resp = {
    original: null,
    timegate: null,
    first: null,
    last: null,
    mementos: []
  };

  input.
  on('error', function(err) {
    callback(err, null);
  }).
  pipe(split(',\n')).
  on('data', function(line) {
    var attrs = parseLine(line);
    var url = attrs.url;
    var urlWithTimestamp = {url: url,time: attrs.datetime};

    if (attrs.original) resp.original = url;
    if (attrs.timegate) resp.timegate = url;
    if (attrs.first) resp.first = urlWithTimestamp;
    if (attrs.last) resp.last = urlWithTimestamp;
    if (attrs.memento) resp.mementos.push(urlWithTimestamp);
  }).
  on('end', function() {
    callback(null, resp);
  });
}

module.exports = {
  parseLine: parseLine,
  parseTimemap: parseTimemap
};
