weatherApp.factory('observationService', function($http) {
	return {	
		getObservations: function() {
			return $http.get('/observations').then(function(res) {
				return res.data;
			}, function(err) {
				console.err(err.data);
			});
		}
	};
});
