(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var _flashcardController = require("./up/flashcardController.js");

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require("./up/flashcardModel.js");

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

var _flashcardView = require("./up/flashcardView.js");

var _flashcardView2 = _interopRequireDefault(_flashcardView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("UP Version 2.0");

_flashcardController2.default.render(_flashcardModel2.default);

},{"./up/flashcardController.js":3,"./up/flashcardModel.js":4,"./up/flashcardView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flashcardContent = exports.flashcardContent = [{
  "name": "clear",
  "top": "green",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "dark",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "dark",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach clear sixty",
  "top": "yellow",
  "middle": "green flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach clear sixty",
  "top": "yellow",
  "middle": "green flashing",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach clear fifty",
  "top": "yellow",
  "middle": "green",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach clear fifty",
  "top": "yellow",
  "middle": "green",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "advance approach passenger",
  "top": "yellow flashing",
  "middle": "none",
  "bottom": "none",
  "c_plate": true,
  "plate": false
}, {
  "name": "advance approach passenger",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "none",
  "c_plate": true,
  "plate": false
}, {
  "name": "advance approach passenger",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "red",
  "c_plate": true,
  "plate": false
}, {
  "name": "advance approach passenger",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "none",
  "c_plate": true,
  "plate": false
}, {
  "name": "advance approach passenger",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "dark",
  "c_plate": true,
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "red",
  "bottom": "yellow",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "dark",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "dark",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach",
  "top": "dark",
  "middle": "yellow",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "lunar",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "lunar",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "red flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear limited",
  "top": "red",
  "middle": "green flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear limited",
  "top": "red",
  "middle": "green flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "red",
  "bottom": "green",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "red",
  "bottom": "yellow flashing",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging advance approach passenger",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "none",
  "c_plate": true,
  "plate": false
}, {
  "name": "diverging advance approach passenger",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "red",
  "c_plate": true,
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "red",
  "bottom": "yellow",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging approach diverging",
  "top": "red",
  "middle": "yellow",
  "bottom": "yellow",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "lunar",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "lunar",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "lunar",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "lunar",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "lunar",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "dark",
  "middle": "lunar",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "dark",
  "middle": "red flashing",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "lunar",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "lunar",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "red flashing",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "dark",
  "middle": "red flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "dark",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "dark",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "dark",
  "middle": "red flashing",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red flashing",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red flashing",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "dark",
  "middle": "dark",
  "bottom": "red flashing",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "dark",
  "bottom": "red flashing",
  "c_plate": false,
  "plate": false
}, {
  "name": "restricting proceed",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": true
}, {
  "name": "restricting proceed",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": true
}, {
  "name": "restricting proceed",
  "top": "red",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": true
}, {
  "name": "restricting proceed",
  "top": "red",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": true
}, {
  "name": "stop",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "red",
  "c_plate": false,
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "dark",
  "bottom": "none",
  "c_plate": false,
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "dark",
  "c_plate": false,
  "plate": false
}, {
  "name": "diverging approach clear fifty",
  "top": "red",
  "middle": "yellow",
  "bottom": "green",
  "c_plate": false,
  "plate": false
}];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flashcardContent = require('./flashcardContent.js');

var _flashcardModel = require('./flashcardModel.js');

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashcardController = function () {
  function FlashcardController(model) {
    _classCallCheck(this, FlashcardController);
  }

  _createClass(FlashcardController, [{
    key: 'render',
    value: function render(model, action) {

      model.generateRandomNum().then(function (number) {
        return model.addIndexToOrderArray(number, action);
      }).then(function (data) {
        return model.attachContentToDOM(action);
      });

      console.log(model);
    }
  }]);

  return FlashcardController;
}();

var controller = new FlashcardController(_flashcardModel2.default);
exports.default = controller;

},{"./flashcardContent.js":2,"./flashcardModel.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flashcardContent = require("./flashcardContent.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashcardModel = function () {
  function FlashcardModel() {
    _classCallCheck(this, FlashcardModel);

    this.randomIndex = 0;
    this.orderArray = [];
  }

  _createClass(FlashcardModel, [{
    key: "generateRandomNum",
    value: function generateRandomNum() {
      var number = Math.floor(Math.random() * _flashcardContent.flashcardContent.length);
      this.randomIndex = number;
      return Promise.resolve(number);
    }
  }, {
    key: "addIndexToOrderArray",
    value: function addIndexToOrderArray(number, action) {
      this.orderArray.push(number);
      return Promise.resolve(true);
    }
  }, {
    key: "attachContentToDOM",
    value: function attachContentToDOM(action) {
      var setQandA = function setQandA(index) {
        var description = void 0;
        var card = _flashcardContent.flashcardContent[index];

        switch (card.name) {
          case "clear":
            description = "Proceed.";
            break;

          case "approach clear sixty":
            description = "Proceed. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 60 mph. When the signal governs the approach to a control point with a 60 mph turnout speed be prepared to advance on diverging route.";
            break;

          case "approach clear fifty":
            description = "Proceed. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 50MPH. When the signal governs the approach to a control point with a 50MPH turnout speed be prepared to advance on diverging route.";
            break;

          case "advance approach":
            description = "Proceed prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 40 MPH. When the signal governs the approach to a control point with a 40 MPH turnout speed be prepared to advance on diverging route.";
            break;

          case "advance approach passenger":
            description = "Proceed prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass next signal not exceeding 60 mph.";
            break;

          case "approach diverging":
            description = "Proceed prepared to advance on diverging route at next signal at prescribed speed through turnout.";
            break;

          case "approach":
            description = "Proceed prepared to stop before any part of the train or engine passes the next signal. Passenger trains exceeding 40 MPH must immediately reduce to 40 MPH.";
            break;

          case "approach restricting":
            description = "Proceed prepared to pass next signal at restricted speed, but not exceeding 15 MPH.";
            break;

          case "diverging clear limited":
            description = "Proceed on diverging route. Speed through turnout must not exceed 40 MPH.";
            break;

          case "diverging clear":
            description = "Proceed on diverging route not exceeding prescribed speed through turnout.";
            break;

          case "diverging advance approach":
            description = "Proceed on diverging route not exceeding prescribed speed through turnout and be prepared to stop at second signal. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 40 MPH. When the signal governs the approach to a control point with a 40 MPH turnout, be prepared to advance on normal or diverging route.";
            break;

          case "diverging advance approach passenger":
            description = "Proceed on diverging route at prescribed speed through turnout prepared to stop at second signal. Passenger trains exceeding 60 MPH must immediately reduce to 60 MPH.";
            break;

          case "diverging approach":
            description = "Proceed on diverging route at prescribed speed through turnout prepared to stop before any part of train or engine passes the next signal. Passenger trains exceeding 40 MPH must immediately reduce to 40 MPH.";
            break;

          case "diverging approach diverging":
            description = "Proceed on diverging route not exceeding prescribed speed through turnout prepared to advance on the diverging route at the next signal at prescribed speed through turnout.";
            break;

          case "restricting":
            description = "Proceed at restricted speed, not exceeding prescribed speed through turnout when applicable.";
            break;

          case "restricted proceed":
            description = "Proceed at restricted speed.";
            break;

          case "stop":
            description = "Stop before any part of train or engine passes signal.";
            break;

          case "diverging approach clear fifty":
            description = "Proceed on diverging route at prescribed speed through turnout. Passenger trains may proceed, but must be prepared to pass the next signal not exceeding 50MPH. When the signal governs the approach to a control point with a 50MPH turnout, be prepared to advance on diverging route.";
            break;

          default:
            description = "";
            break;
        }

        var top = card.top;
        var middle = card.middle;
        var bottom = card.bottom;
        var plate = card.plate;
        var c_plate = card.c_plate;
        var name = card.name.toUpperCase();

        $('.circle').removeClass('green red yellow none dark lunar flashing');
        $('.plate').removeClass('yes-plate');
        $('.c-plate').removeClass('yes-c-plate');
        $('.top').addClass(top);
        $('.middle').addClass(middle);
        $('.bottom').addClass(bottom);

        if (plate) {
          $('.plate').addClass('yes-plate');
        }
        if (c_plate) {
          $('.c-plate').addClass('yes-c-plate');
        }

        $('.answer').html("<h1 class=\"name\">" + name + "</h1>\n        <p>" + description + "</p>").hide();
      };

      setQandA(this.randomIndex);

      return Promise.resolve(true);
    }
  }]);

  return FlashcardModel;
}();

var model = new FlashcardModel();

exports.default = model;

},{"./flashcardContent.js":2}],5:[function(require,module,exports){
'use strict';

var _flashcardController = require('./flashcardController.js');

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require('./flashcardModel.js');

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.show-answer').on('click', function () {
  $('.answer').show();
});

$('.next').on('click', function () {
  var action = "next";
  _flashcardController2.default.render(_flashcardModel2.default, action);
});

$(document).keypress(function (e) {
  console.log(e.which);
  if (e.which == 115) {
    $('.answer').show();
  }
  if (e.which == 100) {
    var action = "next";
    _flashcardController2.default.render(_flashcardModel2.default, action);
  }
});

},{"./flashcardController.js":3,"./flashcardModel.js":4}]},{},[1]);
