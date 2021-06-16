var App1 = /** @class */ (function () {
    function App1() {
        //pobierami div z html
        this.main = document.getElementById('newInputs');
        this.variable = document.getElementById('inputs');
        this.calculations = document.getElementById('data');
        this.add_Button = document.getElementById('add');
        this.removeButton = document.getElementById('delete');
        this.random_Button = document.getElementById('random');
        this.loader = document.getElementById('loader');
        //Tablica inputow do obliczen - tablica
        this.numbersArray = [];
        this.inputsArray = [];
        this.getInputs();
        //Tablica inputow do obliczen
        this.createInput();
        this.showSum();
        this.showAvg();
        this.showMin();
        this.showMax();
        this.hiddenLoader();
        var x = this.main.getElementsByTagName('input');
        console.log(x);
    }
    App1.prototype.getInputs = function () {
        this.sumOutput = document.querySelector('#sum');
        this.averageOutput = document.querySelector('#avg');
        this.minOutput = document.querySelector('#min');
        this.maxOutput = document.querySelector('#max');
    };
    App1.prototype.hiddenLoader = function () {
        this.loader.style.visibility = 'hidden';
    };
    App1.prototype.showLoader = function () {
        this.loader.style.visibility = 'visible';
    };
    App1.prototype.createInput = function () {
        var _this = this;
        //obsługa triggerowania inputow
        this.variable.addEventListener("input", function () {
            _this.showLoader();
            var inputValue = +_this.variable.value;
            _this.main.innerHTML = '';
            for (var i = 0; i < inputValue; i++) {
                _this.newForm = document.createElement('input');
                _this.newForm.id = "form" + i;
                _this.newForm.placeholder = 'Podaj liczbę';
                _this.main.appendChild(_this.newForm);
                console.log(_this.newForm.id);
            }
        });
    };
    App1.prototype.getValues = function () {
        var inputValue = this.main.getElementsByTagName('input').length;
        for (var i = 0; i < inputValue; i++) {
            this.numbersArray[i] = +document.getElementById('form' + i).value;
        }
    };
    App1.prototype.showSum = function () {
        var _this = this;
        this.main.addEventListener("input", function () {
            _this.showLoader();
            _this.getValues();
            var sum = 0;
            for (var i = 0; i < _this.numbersArray.length; i++) {
                sum += +_this.numbersArray[i];
            }
            _this.sumOutput.value = sum.toString();
            _this.hiddenLoader();
        });
    };
    App1.prototype.showAvg = function () {
        var _this = this;
        this.main.addEventListener("input", function () {
            _this.getValues();
            var sum = 0;
            for (var i = 0; i < _this.numbersArray.length; i++) {
                sum += +_this.numbersArray[i];
            }
            var avg = sum / _this.numbersArray.length;
            _this.averageOutput.value = avg.toString();
        });
    };
    App1.prototype.showMin = function () {
        var _this = this;
        this.main.addEventListener("input", function () {
            _this.getValues();
            var min = Math.min.apply(Math, _this.numbersArray);
            _this.minOutput.value = min.toString();
        });
    };
    App1.prototype.showMax = function () {
        var _this = this;
        this.main.addEventListener("input", function () {
            _this.getValues();
            var max = Math.max.apply(Math, _this.numbersArray);
            _this.maxOutput.value = max.toString();
        });
    };
    App1.prototype.addButton = function () {
        var numberOfInputs = this.main.getElementsByTagName('input');
        this.newForm = document.createElement('input');
        this.newForm.id = "form" + (numberOfInputs.length);
        this.newForm.placeholder = 'Podaj liczbę';
        this.main.appendChild(this.newForm);
    };
    App1.prototype.deleteButton = function () {
        var numberOfInputs = this.main.getElementsByTagName('input');
        var removeElement = document.getElementById("form" + (numberOfInputs.length - 1));
        this.main.removeChild(removeElement);
    };
    App1.prototype.randomButton = function () {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var numberOfInputs = this.main.getElementsByTagName('input');
        for (var i = 0; i < numberOfInputs.length; i++) {
            var fill = (document.getElementById("form" + i));
            fill.value = getRandomIntInclusive(0, 100);
        }
    };
    return App1;
}());
var calculateApp1 = new App1();
