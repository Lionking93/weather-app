var express = require('express');
var morgan = require('morgan');

var app = express();

var port = 3000;

app.use("/dist", express.static(__dirname + "/dist"));
app.use(morgan('dev'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/front_end/html_files/index.html');
});

app.listen(3000);
