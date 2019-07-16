const router = require('express').Router();
const commentsService = require('../services/comments.service');
const errorMiddleware = require('../utils/asyncErrorMiddleware');

router.get('/', errorMiddleware(getAll));
router.post('/create', errorMiddleware(create));
router.delete('/:id', errorMiddleware(remove));

async function getAll(req, res, next) {
  const comments = await commentsService.getAll();
  res.status(200).send(comments);
}

async function create(req, res, next) {
  const [newComment] = await commentsService.create(req.body.comment);
  const [comment] = await commentsService.getById(newComment.id);
  res.status(200).send(comment);
}

async function remove(req, res, next) {
  const removedComment = await commentsService.remove(req.params.id);
  res.status(200).send(removedComment);
}

module.exports = router;
