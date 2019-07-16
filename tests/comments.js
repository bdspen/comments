process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server');
const testUser = { email: 'bdspen+testcomment@gmail.com', name: 'Ben Spenard' };

chai.use(chaiHttp);

describe('API Routes', () => {
  let returnedTestUser;
  describe('POST /users/create', function() {
    it('should create a user', function(done) {
      chai
        .request(server)
        .post('/users/create')
        .send({ user: testUser })
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.email.should.equal(testUser.email);
          res.body.name.should.equal(testUser.name);
          res.body.should.have.property('createdAt');
          res.body.should.have.property('updatedAt');
          returnedTestUser = res.body;
          done();
        });
    });
  });
  let returnedComment;
  describe('POST /comments/create', function() {
    it('should create a comment', function(done) {
      const comment = {
        comment: 'TEST COMMENT!!!',
        userId: returnedTestUser.id
      };
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
          res.body.comment.should.equal(comment.comment);
          res.body.should.have.property('userId');
          res.body.should.have.property('createdAt');
          res.body.should.have.property('updatedAt');
          returnedComment = res.body;
          done();
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
            done();
          });
      });
    });
  });
});
