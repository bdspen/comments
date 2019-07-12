const router = require('express').Router();
const userService = require('../services/users.service');

router.post('/create', create);

function create(req, res) {
  res.sendStatus(200);
}

module.exports = router;
