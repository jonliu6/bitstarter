var express = require('express');
var fs = require('fs');
var fname = "index.html";
// var fname = "hello.htm";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(fname).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
