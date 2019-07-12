const router = require('express').Router();
const commentsService = require('../services/comments.service');

router.post('/create', create);

function create(req, res) {
  res.sendStatus(200);
}

module.exports = router;
