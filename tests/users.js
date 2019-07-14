process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server');
const testUser = { email: 'bdspen+testcomment@gmail.com', name: 'Ben Spenard' };
chai.use(chaiHttp);

describe('Users API Routes', () => {
  describe('POST /users/create', function() {
    it('should create a user', function(done) {
      chai
        .request(server)
        .post('/users/create')
        .send(testUser)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.email.should.equal(testUser.email);
          res.body.name.should.equal(testUser.name);
          res.body.should.have.property('created_at');
          res.body.should.have.property('updated_at');
          done();
        });
    });
  });
});
