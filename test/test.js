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


describe('Test the SingIn2', () => {

    it('it should return status code equal 200 ', (done) => {
        chai.request('http://127.0.0.1:5000')
        .get('/CheckSession')
        .end(function(err, res) {
            res.should.have.status(200)
          done();                          
        });
    })

})