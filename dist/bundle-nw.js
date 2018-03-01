(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var _flashcardController = require("./nw/flashcardController.js");

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require("./nw/flashcardModel.js");

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

var _flashcardView = require("./nw/flashcardView.js");

var _flashcardView2 = _interopRequireDefault(_flashcardView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("NW Version 2.0");

_flashcardController2.default.render(_flashcardModel2.default);

},{"./nw/flashcardController.js":3,"./nw/flashcardModel.js":4,"./nw/flashcardView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flashcardContent = exports.flashcardContent = [{
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "none",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "green",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "green",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "advance approach",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "advance approach",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "green",
  "Number plate": false
}, {
  "name": "diverging clear",
  "top": "lunar",
  "middle": "green",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "diverging approach diverging",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "diverging approach diverging",
  "top": "lunar",
  "middle": "yellow flashing",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "none",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "diverging approach",
  "top": "lunar",
  "middle": "yellow",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "slow clear",
  "top": "red",
  "middle": "red",
  "bottom": "green",
  "Number plate": false
}, {
  "name": "slow approach",
  "top": "none",
  "middle": "none",
  "bottom": "yellow flashing",
  "Number plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "Number plate": true
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "Number plate": true
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "yellow",
  "Number plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "yellow",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "red",
  "Number plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "Number plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "Number plate": false
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
            description = "Proceed at authorized speed.";
            break;

          case "approach diverging":
            description = "Proceed preparing to take diverging route beyond next signal at authorized speed.";
            break;

          case "advance approach":
            description = "proceed preparing to stop at second signal.";
            break;

          case "diverging clear":
            description = "Proceed through diverging route, observing authorize speed through turnout(s) or crossover(s).";
            break;

          case "diverging approach diverging":
            description = "Proceed through turnout(s) or crossover(s) at authorized speed preparing to take diverging route beyond next signal at authorized speed.";
            break;

          case "approach":
            description = "Proceed preparing to stop at next signal. Train or engine exceeding Medium Speed must at once reduce to that speed.";
            break;

          case "diverging approach":
            description = "Proceed through diverging route, observing authorize speed through turnout(s) or crossover(s), preparing to stop at next signal. Train or engine exceeding Medium Speed must at once reduce to that speed.";
            break;

          case "slow clear":
            description = "Proceed; Slow Speed within controlled point/interlocking limits or through turnout(s) or crossover(s).";
            break;

          case "slow approach":
            description = "Proceed preparing to stop at next signal; Slow Speed within controlled point/interlocking limits or through turnout(s) or crossover(s).";
            break;

          case "restricting":
            description = "Proceed at Restricted Speed. Restricted Speed must be observed until the leading end of the movement reaches the next signal. ";
            break;

          case "stop":
            description = "Stop.";
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
