var express = require('express');
var router = express.Router();
var observations = require('./observations.js');
var path = require('path');

router.use(observations);

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

router.get('/front_end/html_files/newObservationTemplate.html', function(req, res) {
	res.sendFile(path.join(__dirname, '..', '..', 'front_end/html_files/newObservationTemplate.html'));
});

module.exports = router;
