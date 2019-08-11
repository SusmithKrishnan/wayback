var assert = require('assert');
var wayback = require('../index.js');
var chai = require('chai');
var expect  = require('chai').expect;
let should = chai.should();


var url = "https://www.chaijs.com";

describe('get timemap of given URL', function () {
 it('should return array of snapshot', function (done) {
  wayback.getTimeMap(url,function(err,data){
    expect(data.mementos).to.be.an('array');
    done()
  })
  });

});
