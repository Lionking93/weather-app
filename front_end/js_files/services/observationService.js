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
			return $http.post('/newObservation', observation).then(function(res) {
				return res.data;
			}, function(err) {
				return err.data;
			});
		}
	};
});
