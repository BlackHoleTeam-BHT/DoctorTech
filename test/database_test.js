const connection = require('../database/config.js');
const db = require('../database/index.js');
var assert = require('chai').assert;
var expect = require('chai').expect;

let user = {
    email: 'mhd@gmail.comr',
    password: "1234",
    id_Roles: "1",
    firstName: "Mohammad",
    lastName: "Raawashda",
    specialist: "Doctor",
    phoneNumber: "0796092043",
    bio:"dsjdsdsd",
    location:"amman",
    clinicNumber : "hhh",
    clinicName: "ddd"

}

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

it('should insert user info to db', function (done) {

    db.insertUserInfo(user, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.equal(0);
        done()
      }
    })
  });

  it('select doctor info from Doctor table', function (done) {
    db.selectDoctorInfo(61 , function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).length.greaterThan(0);
        done()
      }
    })
  });

  it('should select all doctors from doctor table and login table', function (done) {

    db.selectAllDoctors(advertiser, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).length.greaterThan(0);
        done()
      }
    })
  });


  it('should select all patient info for specific doctor by doctor id', function (done) {
    db.selectAllPatientInfo(61, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).length.greaterThan(0);
        done();
      }
    })
  });


  it('should elect Patient information based on the ID', function (done) {
    db.selectPatientInfo(61, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).length.greaterThan(0);
        done()
      }
    })
  });
