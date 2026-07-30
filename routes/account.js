var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/account', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'account.html'));
});

module.exports = router;
