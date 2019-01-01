const connection = require('../database/config.js');
const db = require('../database/index.js');
var assert = require('chai').assert;
var expect = require('chai').expect;



it('db.connection.connect should ...', function(done) {
    db.connection.connect(function(err, result) {
        if(err){
            done(err);
            return;
        }
        expect(result).to.equal("SQL CONNECT SUCCESSFUL.");
        done();
    });
});