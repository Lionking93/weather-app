var express = require('express');
var morgan = require('morgan');
var controllers = require('./back_end/controllers');

var app = express();

app.use("/dist", express.static(__dirname + "/dist"));
app.use(morgan('dev'));

app.set('port', (process.env.PORT || 3000));

app.use(controllers);

app.listen(app.get('port'), function() {
	console.log("Node app is running in port " + app.get('port'));
});
