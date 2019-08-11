var wayback = require('../index.js')
var assert = require('assert');
var wayback = require('../index.js');
var chai = require('chai');
var expect = require('chai').expect;
let should = chai.should();


var url = "http://web.archive.org/web/20080216004559/http://en.wikipedia.org/wiki/Richard_Stallman"

describe('Download given archive URL', function() {
  it('should return raw html string of archive', function(done) {
    wayback.downloadArchive(url, function(err, htmlData) {
      expect(htmlData).to.be.a('string');
      expect(htmlData.length).to.above(10);
      done()
    })
  });
});
