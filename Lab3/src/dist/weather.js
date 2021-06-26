"use strict";
exports.__esModule = true;
exports.Weather = void 0;
var Weather = /** @class */ (function () {
    function Weather(city, temp, wind, press, weatherdesc) {
        this.nameOfTheCity = city;
        this.temperature = Math.round(temp);
        this.windSpeed = wind;
        this.pressure = press;
        this.weatherDescription = weatherdesc;
    }
    return Weather;
}());
exports.Weather = Weather;
