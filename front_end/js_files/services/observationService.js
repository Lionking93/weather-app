weatherApp.factory('observationService', function($http) {
	return {	
		getObservations: function() {
			return $http.get('/observations').then(function(res) {
				return res.data;
			}, function(err) {
				return err.data;
			});
		},
		addNewObservation: function(observation) {
			var testObservation = {
				cityName: "",
				temperature: "apina"
			};
			return $http.post('/newObservation', testObservation).then(function(res) {
				return res.data;
			}, function(err) {
				return err.data;
			});
		}
	};
});
