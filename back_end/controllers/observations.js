var express = require('express');
var router = express.Router();

router.get('/observations', function(req, res) {
	var observations = [
			{
				cityName:"Tokio",
				latitude:35.6584421,
				longtitude:139.7328635,
				temperatures:[24.78,30.5]
			},
			{
				cityName:"Helsinki",
				latitude:60.1697530,
				longtitude:24.9490830,
				temperatures:[20.01,29.5]
			},
			{
				cityName:"Amsterdam",
				latitude:52.3650691,
				longitude:4.9040238,
				temperatures:[19,-12,15,20]
			},
			{
				cityName:"Dubai",
				latitude:25.092535,
				longtitude:55.1562243,
				temperatures:[]
			},
			{
				cityName:"New York",
				latitude:40.7406905,
				longtitude:-73.9938438,
				temperatures:[-2, 12, 33, 0]
			}
	]
	res.json(observations);
});

router.post('/newObservation', function(req, res) {
	var newObservation = req.body;
	console.log("Uusi havainto");
	console.log(newObservation);
	res.status(200).send("Havainto lisätty");
});

router.use(function(err, req, res, next) {
	console.log(err);
	res.status(400).json(err);
});

module.exports = router;
