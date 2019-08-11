var assert = require('assert');
var wayback = require('../index.js');
var chai = require('chai');
var expect  = require('chai').expect;
let should = chai.should();


var url = "example.org";
var timestamp = "20190629143838";

describe('check availability of archive', function () {
 it('should return closest timestamp of URL', function (done) {
  wayback.isAvailable(url,function(err,data){
    expect(data).to.have.property('url');
    expect(data).to.have.property('archived_snapshots');
    done()
  })
  });
  it('should return snapshot of URL for given timestamp', function (done) {
   wayback.isAvailable(url,timestamp,function(err,data){
     expect(data).to.have.property('url');
     expect(data).to.have.property('archived_snapshots');
     assert.equal(data.timestamp, timestamp);
     done()
   })
   });
   it('should return empty snapshot', function (done) {
    wayback.isAvailable('thissitedoesntexits.nonexist',function(err,data){
      expect(data).to.have.property('archived_snapshots');
      expect(data.archived_snapshots).to.be.deep.equal({})
      done()
    })
    });
});
