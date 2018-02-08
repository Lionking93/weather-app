weatherApp.directive('newObservation', function(observationService) {
    function link(scope, element, attrs) {
        scope.newObservation = {
            cityName: "",
            temperature: 0
        };
        
        scope.cityError = "Et ole antanut kelvollista kaupunkia. Antamasi kaupunki ei saa olla tyhjä merkkijono ja sen tulee sisältää pelkästään kirjaimia.";
        scope.temperatureError = "Et ole antanut kelvollista lämpötilaa. Antamasi lämpötilan tulee olla desimaali- tai kokonaisluku.";

        scope.addNewObservation = function() {
            console.log("Uusi havainto lisätty");
            console.log(scope.newObservation.cityName);
            console.log(scope.newObservation.temperature);
            observationService.addNewObservation(scope.newObservation).then(function(data) {
                if (data.hasOwnProperty("errors")) {
                    if (data.errors.invalidCity) {
                        console.log("Invalid city!");
                        scope.newObservation.cityName = "";
                        scope.newObservationForm.newObservationCity.$setTouched();
                    }
                    if (data.errors.invalidTemperature) {
                        console.log("Invalid temperature!");
                        scope.newObservationForm.newObservationTemperature.$setValidity("number", false);
                        scope.newObservationForm.newObservationTemperature.$setTouched();
                    }
                }
                console.log(data);
            });
        };
    }
    
    return {
        restrict: 'E',
        scope: {
            cityNames:'='
        },
        templateUrl: '/front_end/html_files/newObservationTemplate.html',
        link: link
    };
});