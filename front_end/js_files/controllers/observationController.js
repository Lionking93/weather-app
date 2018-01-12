weatherApp.controller("observationController", function($scope, observationService) {
	$scope.muuttuja = "hohoo";
	console.log("hohoo");
	
	$scope.observations = [];
	observationService.getObservations().then(function(data) {
		$scope.observations = data;
	});
});
