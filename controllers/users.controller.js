const router = require('express').Router();
const userService = require('../services/users.service');

router.post('/create', create);

async function create(req, res, next) {
  try {
    const [newUser] = await userService.create(req.body);
    res.status(200).send(newUser);
  } catch (e) {
    e.httpStatusCode = 400;
    return next(e);
  }
}

module.exports = router;
