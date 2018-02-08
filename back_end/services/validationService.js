function ValidatorService() {
    this.errors = {
        invalidCity:false,
        invalidTemperature:false
    };
}

ValidatorService.prototype.checkIfCityNameIsValid = function(cityName) {
    var self = this;

    if (cityName === undefined) {
        console.log("City name is undefined!");
        self.errors.invalidCity = true;
        return;
    }

    var cityNameRegex = /^[a-öA-Ö]+$/;

    if (!cityName.toString().match(cityNameRegex)) {
        console.log("City name is invalid or empty!");
        self.errors.invalidCity = true;
    }
}

ValidatorService.prototype.checkIfTemperatureIsValid = function(temperature) {
    var self = this;

    if (temperature === undefined) {
        console.log("Temperature is not defined!");
        self.errors.invalidTemperature = true;
        return;
    }

    var floatNumberRegex = /(^-{0,1}\d+$)|(^-{0,1}\d+\.\d+$)/;

    if (!temperature.toString().match(floatNumberRegex)) {
        console.log("Temperature is not a number!");
        self.errors.invalidTemperature = true;
    }
}

ValidatorService.prototype.validate = function(input) {
    var self = this;
    self.errors.invalidCity = false;
    self.errors.invalidTemperature = false;
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