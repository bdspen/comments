const router = require('express').Router();
const userService = require('../services/users.service');
const errorMiddleware = require('../utils/asyncErrorMiddleware');

router.post('/create', errorMiddleware(create));

async function create(req, res, next) {
  const [newUser] = await userService.create(req.body);
  res.status(200).send(newUser);
}

module.exports = router;
