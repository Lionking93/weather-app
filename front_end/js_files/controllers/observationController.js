weatherApp.controller("observationController", function($scope, observationService) {
	$scope.newObservation = {
		cityName: "",
		temperature: 0
	};
	$scope.observations = [];
	
	observationService.getObservations().then(function(data) {
		$scope.observations = data;
	});
	
	$scope.addNewObservation = function() {
		console.log("Uusi havainto lisätty");
		console.log($scope.newObservationCity);
		observationService.addNewObservation($scope.newObservation).then(function(data) {
			console.log(data);
		});
	};
});
