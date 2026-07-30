var express = require('express');
var app = express();
var http = require('http').Server(app);

// Must come before the routes, or req.body will be undefined.
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/www'));

app.use(require('./routes/index'));
app.use(require('./routes/account'));
app.use(require('./routes/login'));

let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening on: " + host + " port: " + port);
});
