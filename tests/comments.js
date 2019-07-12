process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server');

chai.use(chaiHttp);

describe('API Routes', () => {
  describe('POST /comments/create', function() {
    it('should create a comment', function(done) {
      const comment = 'TEST COMMENT!!!';
      chai
        .request(server)
        .post('/comments/create')
        .send({
          comment
        })
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.comment.should.equal(comment);
          res.body.should.have.property('user_id');
          res.body.should.have.property('created_at');
          res.body.should.have.property('updated_at');
          done();
        });
    });
  });
});
