weatherApp.controller("observationController", function($scope, observationService) {
	$scope.newObservation = {
		cityName: "",
		temperature: 0
	};
	$scope.observations = [];
	$scope.cityNames = [];
	
	observationService.getObservations().then(function(data) {
		$scope.observations = data;
		$scope.cityNames = $scope.observations.map(function(observation) {
			return observation.cityName;
		});
	});
	
	$scope.addNewObservation = function() {
		console.log("Uusi havainto lisätty");
		console.log($scope.newObservation.cityName);
		console.log($scope.newObservation.temperature);
		observationService.addNewObservation($scope.newObservation).then(function(data) {
			console.log(data);
		});
	};
});
