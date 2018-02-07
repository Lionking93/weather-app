function ValidatorService() {
    this.errors = {
        errorMessages: []
    };
}

ValidatorService.prototype.checkIfCityNameIsValid = function(cityName) {
    var self = this;
    if (cityName === undefined) {
        console.log("City name is undefined!");
        self.errors.errorMessages.push("Kaupunkia ei ole valittu!");
        return;
    }

    var cityNameRegex = /^[a-öA-Ö]+$/;

    if (!cityName.toString().match(cityNameRegex)) {
        console.log("City name is invalid or empty!");
        self.errors.errorMessages.push("Antamasi kaupunki sisältää virheellisiä merkkejä tai se on tyhjä merkkijono!");
    }
}

ValidatorService.prototype.checkIfTemperatureIsValid = function(temperature) {
    var self = this;
    var specificMessage = "Et ole antanut kelvollista lämpötilaa. Antamasi lämpötilan tulee olla desimaali- tai kokonaisluku.";

    if (temperature === undefined) {
        console.log("Temperature is not defined!");
        self.errors.errorMessages.push(specificMessage);
        return;
    }

    var floatNumberRegex = /(^-{0,1}\d+$)|(^-{0,1}\d+\.\d+$)/;

    if (!temperature.toString().match(floatNumberRegex)) {
        console.log("Temperature is not a number!");
        self.errors.errorMessages.push(specificMessage);
    }
}

ValidatorService.prototype.validate = function(input) {
    var self = this;
    self.errors.errorMessages = [];
    console.log(input);
    self.checkIfCityNameIsValid(input.cityName);
    self.checkIfTemperatureIsValid(input.temperature);
    return self.errors;
};

module.exports = {
    service: function() {
        return new ValidatorService();
    }
}