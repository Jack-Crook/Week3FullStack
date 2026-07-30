var express = require('express');
var users = require('../data/users');
var router = express.Router();

router.post('/login/attempt', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  if (users.checkCredentials(email, password)) {
    return res.json({ ok: true });
  }

  return res.json({ ok: false, errors: {} });
});

module.exports = router;
