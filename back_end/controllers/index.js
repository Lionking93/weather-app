var express = require('express');
var router = express.Router();
var observations = require('./observations.js');
var path = require('path');

router.use(observations);

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

module.exports = router;
