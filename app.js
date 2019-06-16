var express_use = require('express');
var app = express_use();

app.get('/', function (req, res) {
  res.send('Привет');
});

app.listen(8888/*, '127.0.0.1'*/);
