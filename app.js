var express = require('express');
var morgan = require('morgan');

var app = express();

app.use("/dist", express.static(__dirname + "/dist"));
app.use(morgan('dev'));

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/front_end/html_files/index.html');
});

app.listen(app.get('port'), function() {
	console.log("Node app is running in port " + app.get('port'));
});
