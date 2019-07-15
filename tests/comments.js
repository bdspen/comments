process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server');

chai.use(chaiHttp);

describe('Comments API Routes', () => {
  let returnedComment;
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
          returnedComment = res.body;
          done();
        });
    });
  });
  describe('GET /comments/', function() {
    it('should get all comments', function(done) {
      chai
        .request(server)
        .get('/comments')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an('array');
          done();
        });
    });
  });
  describe('DELETE /comments/:id', function() {
    it('should delete a comment', function(done) {
      chai
        .request(server)
        .delete(`/comments/${returnedComment.id}`)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an('object');
          res.body.should.be.deep.equal(returnedComment);
          done();
        });
    });
  });
});
