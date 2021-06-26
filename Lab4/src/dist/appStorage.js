"use strict";
exports.__esModule = true;
exports.appLocalStorage = void 0;
var appLocalStorage = /** @class */ (function () {
    function appLocalStorage() {
    }
    appLocalStorage.prototype.saveData = function (data) {
        localStorage.setItem('notesData', JSON.stringify(data));
    };
    appLocalStorage.prototype.getData = function () {
        var data = localStorage.getItem('notesData');
        if (data) {
            return data;
        }
        else {
        }
    };
    return appLocalStorage;
}());
exports.appLocalStorage = appLocalStorage;
