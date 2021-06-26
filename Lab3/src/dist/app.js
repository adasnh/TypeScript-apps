"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var weather_1 = require("./weather");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.citiesArray = [];
        this.opwApiKey = '33cec0e52d02f569adffe9c0b46056ee';
        this.cityInput = document.querySelector('#cityInput');
        document.querySelector('#addButton').addEventListener('click', function () { return _this.mainAction(); });
        document.querySelector('#deleteButton').addEventListener('click', function () { return _this.clearStorage(); });
        document.querySelector('#cityInput').addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                document.getElementById("addButton").click();
                var v = (document.getElementById("cityInput"));
                v.value = "";
            }
        });
        this.loadData();
    }
    App.prototype.mainAction = function () {
        this.getCity();
        this.getCityInfo(this.nameOfTheCity);
    };
    App.prototype.clearStorage = function () {
        localStorage.clear();
        location.reload();
    };
    App.prototype.getCity = function () {
        this.nameOfTheCity = this.cityInput.value;
        this.citiesArray.push(this.nameOfTheCity);
        this.saveData(this.citiesArray);
    };
    App.prototype.getCityInfo = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var weather, name, temp, wind, pressure, weatherDesc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWeather(city)];
                    case 1:
                        weather = _a.sent();
                        console.log(weather);
                        name = weather.name;
                        temp = weather.main.temp;
                        wind = weather.wind.speed;
                        pressure = weather.main.pressure;
                        weatherDesc = weather.weather[0].description;
                        this.weatherInCity = new weather_1.Weather(name, temp, wind, pressure, weatherDesc);
                        this.createBox(this.weatherInCity);
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.getWeather = function (city) {
        return __awaiter(this, void 0, Promise, function () {
            var weatherResponse, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.opwApiKey + "&lang=pl&units=metric")];
                    case 1:
                        weatherResponse = _a.sent();
                        return [4 /*yield*/, weatherResponse.json()];
                    case 2:
                        weatherData = _a.sent();
                        return [2 /*return*/, weatherData];
                }
            });
        });
    };
    App.prototype.saveData = function (data) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    };
    App.prototype.loadData = function () {
        var data = localStorage.getItem('weatherData');
        var savedData = [];
        savedData = JSON.parse(data);
        for (var i = 0; i < savedData.length; i++) {
            this.citiesArray.push(savedData[i]);
            this.saveData(this.citiesArray);
            this.getCityInfo(savedData[i]);
        }
    };
    App.prototype.createBox = function (obj) {
        var div = document.querySelector('.checkedCities');
        var element = document.createElement('div');
        element.className = 'weatherBox';
        element.innerHTML +=
            "<span class=\"nameOfTheCity\">" + this.weatherInCity.nameOfTheCity + "</span><br>\n        <span class=\"desc\"> " + this.weatherInCity.weatherDescription + "</span><br>\n        <span class=\"temperature\">Temperatura : " + this.weatherInCity.temperature + "\u00B0C</span><br>\n        <span class=\"pressure\"> Ci\u015Bnienie : " + this.weatherInCity.pressure + " Hpa</span><br>\n        <span class=\"wind\"> Wiatr : " + this.weatherInCity.windSpeed + " Km/h</span><br>\n        ";
        div.appendChild(element);
    };
    return App;
}());
exports.App = App;
