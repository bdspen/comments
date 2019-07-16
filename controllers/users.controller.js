const router = require('express').Router();
const userService = require('../services/users.service');
const errorMiddleware = require('../utils/asyncErrorMiddleware');

router.post('/create', errorMiddleware(create));

async function create(req, res, next) {
  const user = await userService.getByEmail(req.body.user.email);
  if (user) {
    return res.status(200).send(user);
  }
  const [newUser] = await userService.create(req.body.user);
  res.status(200).send(newUser);
}

module.exports = router;
