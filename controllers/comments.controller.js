const router = require('express').Router();
const commentsService = require('../services/comments.service');

router.post('/create', create);

async function create(req, res, next) {
  try {
    const [newComment] = await commentsService.create(req.body);
    res.status(200).send(newComment);
  } catch (e) {
    e.httpStatusCode = 400;
    return next(e);
  }
}

module.exports = router;
