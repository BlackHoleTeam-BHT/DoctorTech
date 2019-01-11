var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


describe('Test the SingIn', () => {
	it('it should return status code equal 200 ', (done) => {
		// Test data.
    let UserInfo = {
        email:"test@yahoo.com",
        password:"123"
    }
    chai.request('http://127.0.0.1:5000')
    .post('/GetCaseInfo')
    .send({ id: 3 })
    .end((err, res) => {
    	res.should.have.status(200);
        res.body.should.be.a('object');
      // res.body.should.have.property('errors');
      done();
    });
  });
});


// Test to check SingUp request.
describe('/sign-up', () => {
	it('it should POST SingUp responce return status code equal 200 and the success object', (done) => {
		// Test data.
    let user = {
        firstName: "Mahmoud",
        lastName: "Zaid",
        specialist: "Software",
        phoneNumber: "0796176996",
        email: "momozd13@gmail.com ",
        password: "12345678",
        clinicName: "JustMe",
        clinicNumber: "333",
        bio: "everything",
        location: "Amman"
    }

    chai.request('http://127.0.0.1:5000')
    .post('/sign-up')
    .send(user)
    .end((err, res) => {
    	//res.body.should.have.status(200);
      res.body.should.be.a('object');
      // res.body.should.have.property('errors');
    //   res.body.success.should.have.property('firstName');
    //   res.body.success.should.have.property('lastName');
    //   res.body.success.should.have.property('specialist');
    //   res.body.success.should.have.property('phoneNumber');
    //   res.body.success.should.have.property('email');
    //   res.body.success.should.have.property('clinicName');
    //   res.body.success.should.have.property('clinicNumber');
    //   res.body.success.should.have.property('bio');
    //   res.body.success.should.have.property('location');
      done();
    });
  });
});


describe('Test the /patients', () => {
	it('it should return status code equal 200 and array of object', (done) => {
		// Test data.
    chai.request('http://127.0.0.1:5000')
    .post('/patients')
    .send({ id: 61})
    .end((err, res) => {
    	res.should.have.status(200);
        res.body.should.be.a('object');
      // res.body.should.have.property('errors');
      done();
    });
  });
});


describe('Test the  get doctors', () => {
	it('it should return status code equal 200 and array of object', (done) => {
		// Test data.
    chai.request('http://127.0.0.1:5000')
    .get('/doctores')
    .end((err, res) => {
    	res.should.have.status(200);
        res.body.should.be.a('object');
      // res.body.should.have.property('errors');
      done();
    });
  });
});

