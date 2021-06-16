"use strict";

var App1 =
/** @class */
function () {
  function App1() {
    //pobierami div z html
    this.codo = document.getElementById('container');
    this.obliczenia = document.getElementById('statsData');
    this.zmienna = document.getElementById('member');
    this.addButton = document.getElementById('add');
    this.removeButton = document.getElementById('remove');
    this.loader = document.getElementById('loaderContainer'); //Tablica inputow do obliczen - tablica

    this.numbersArray = [];
    this.getInputs();
    this.createInput();
    this.showSum();
    this.showAvg();
    this.showMin();
    this.showMax();
    this.hiddenLoader();
  }

  App1.prototype.getInputs = function () {
    this.sumOutput = document.querySelector('#sum');
    this.averageOutput = document.querySelector('#avg');
    this.minimumOutput = document.querySelector('#min');
    this.maximumOutput = document.querySelector('#max');
  };

  App1.prototype.hiddenLoader = function () {
    this.loader.style.visibility = 'hidden';
  };

  App1.prototype.showLoader = function () {
    this.loader.style.visibility = 'visible';
  };

  App1.prototype.createInput = function () {
    var _this = this; //obsługa triggerowania inputow


    this.zmienna.addEventListener("input", function () {
      _this.showLoader(); //input ile bedzie inputow do obliczen


      var inputValue = +_this.zmienna.value;
      _this.codo.innerHTML = '';

      for (var i = 0; i < inputValue; i++) {
        var newForm = document.createElement('input');
        newForm.type = 'number';
        newForm.id = "form" + i;
        newForm.value = '0';

        _this.codo.appendChild(newForm);
      }
    });
  };

  App1.prototype.getValues = function () {
    var inputValue = this.codo.getElementsByTagName('input').length;

    for (var i = 0; i < inputValue; i++) {
      this.numbersArray[i] = +document.getElementById('form' + i).value;
    }
  };

  App1.prototype.showSum = function () {
    var _this = this;

    this.codo.addEventListener("input", function () {
      //  
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

    this.codo.addEventListener("input", function () {
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

    this.codo.addEventListener("input", function () {
      _this.getValues();

      var min = Math.min.apply(Math, _this.numbersArray);
      _this.minimumOutput.value = min.toString();
    });
  };

  App1.prototype.showMax = function () {
    var _this = this;

    this.codo.addEventListener("input", function () {
      _this.getValues();

      var max = Math.min.apply(Math, _this.numbersArray);
      _this.maximumOutput.value = max.toString();
    });
  };

  App1.prototype.addClickButton = function () {
    var currencyInputNumbers = this.codo.getElementsByTagName('input');
    var newForm = document.createElement('input');
    newForm.type = 'number';
    newForm.id = "form" + currencyInputNumbers.length;
    newForm.value = '0';
    this.codo.appendChild(newForm);
  };

  App1.prototype.deleteClickButton = function () {
    var currencyInputNumbers = this.codo.getElementsByTagName('input');
    var removeElement = document.getElementById("form" + (currencyInputNumbers.length - 1));
    this.codo.removeChild(removeElement);
  };

  return App1;
}();

var calculateApp1 = new App1();