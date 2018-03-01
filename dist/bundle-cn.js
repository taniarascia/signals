(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var _flashcardController = require("./cn/flashcardController.js");

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require("./cn/flashcardModel.js");

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

var _flashcardView = require("./cn/flashcardView.js");

var _flashcardView2 = _interopRequireDefault(_flashcardView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("CN Version 2.0");

_flashcardController2.default.render(_flashcardModel2.default);

},{"./cn/flashcardController.js":3,"./cn/flashcardModel.js":4,"./cn/flashcardView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var flashcardContent = exports.flashcardContent = [{
  "name": "clear",
  "top": "green",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "red",
  "bottom": "red",
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "none",
  "bottom": "red",
  "plate": false
}, {
  "name": "clear",
  "top": "green",
  "middle": "dark",
  "bottom": "none",
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "red",
  "bottom": "red",
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "none",
  "bottom": "red",
  "plate": false
}, {
  "name": "advance approach",
  "top": "yellow flashing",
  "middle": "dark",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "red",
  "bottom": "red",
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "none",
  "bottom": "red",
  "plate": false
}, {
  "name": "approach",
  "top": "yellow",
  "middle": "dark",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "lunar",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "red flashing",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach restricting",
  "top": "yellow",
  "middle": "red flashing",
  "bottom": "red",
  "plate": false
}, {
  "name": "advance approach diverging",
  "top": "yellow flashing",
  "middle": "green",
  "bottom": "none",
  "plate": false
}, {
  "name": "advance approach diverging",
  "top": "green flashing",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "advance approach diverging",
  "top": "green flashing",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "green",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "green",
  "bottom": "red",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow",
  "bottom": "red",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow flashing",
  "bottom": "none",
  "plate": false
}, {
  "name": "approach diverging",
  "top": "yellow",
  "middle": "yellow flashing",
  "bottom": "red",
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "none",
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "green",
  "bottom": "red",
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "red",
  "bottom": "green",
  "plate": false
}, {
  "name": "diverging clear",
  "top": "red",
  "middle": "red",
  "bottom": "green flashing",
  "plate": false
}, {
  "name": "diverging clear approach diverging",
  "top": "red",
  "middle": "green flashing",
  "bottom": "none",
  "plate": false
}, {
  "name": "diverging clear approach diverging",
  "top": "red",
  "middle": "green flashing",
  "bottom": "red",
  "plate": false
}, {
  "name": "diverging clear approach diverging",
  "top": "red",
  "middle": "green flashing",
  "bottom": "green flashing",
  "plate": false
}, {
  "name": "diverging clear approach diverging",
  "top": "red",
  "middle": "green flashing",
  "bottom": "green",
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "none",
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "red",
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "yellow flashing",
  "plate": false
}, {
  "name": "diverging advance approach",
  "top": "red",
  "middle": "yellow flashing",
  "bottom": "yellow",
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "none",
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "yellow",
  "bottom": "red",
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "red",
  "bottom": "yellow",
  "plate": false
}, {
  "name": "diverging approach",
  "top": "red",
  "middle": "red",
  "bottom": "yellow flashing",
  "plate": false
}, {
  "name": "diverging approach restricting",
  "top": "red flashing",
  "middle": "yellow",
  "bottom": "none",
  "plate": false
}, {
  "name": "diverging approach restricting",
  "top": "red flashing",
  "middle": "yellow",
  "bottom": "red",
  "plate": false
}, {
  "name": "restricting",
  "top": "lunar",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "lunar",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "none",
  "bottom": "lunar",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "lunar",
  "plate": false
}, {
  "name": "restricting",
  "top": "lunar",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "lunar",
  "bottom": "red",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red flashing",
  "bottom": "red",
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red flashing",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "dark",
  "bottom": "none",
  "plate": false
}, {
  "name": "restricting",
  "top": "red",
  "middle": "red",
  "bottom": "red flashing",
  "plate": false
}, {
  "name": "restricting",
  "top": "red flashing",
  "middle": "red",
  "bottom": "red",
  "plate": false
}, {
  "name": "restricted proceed",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "plate": true
}, {
  "name": "restricted proceed",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "plate": true
}, {
  "name": "restricted proceed",
  "top": "red",
  "middle": "dark",
  "bottom": "none",
  "plate": true
}, {
  "name": "restricted proceed",
  "top": "red",
  "middle": "red",
  "bottom": "red",
  "plate": true
}, {
  "name": "stop",
  "top": "red",
  "middle": "none",
  "bottom": "none",
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "none",
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "none",
  "bottom": "red",
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "dark",
  "bottom": "none",
  "plate": false
}, {
  "name": "stop",
  "top": "red",
  "middle": "red",
  "bottom": "red",
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

          case "advance approach":
            description = "Proceed prepared to stop at second signal.";
            break;

          case "approach":
            description = "Proceed prepared to stop at next signal.";
            break;

          case "approach restricting":
            description = "Proceed prepared to pass next signal at restricted speed.";
            break;

          case "advance approach diverging":
            description = "Proceed prepared to enter diverging route at second signal at proscribed speed.";
            break;

          case "approach diverging":
            description = "Proceed, prepare to enter diverging route at next signal at prescribed speed. Proceed prepared to stop at next signal.";
            break;

          case "diverging clear":
            description = "Proceed on diverging route at prescribed speed.";
            break;

          case "diverging clear approach diverging":
            description = "Proceed on diverging route at prescribed speed prepared to enter diverging route at next signal at prescribed speed. Proceed prepared to stop at second signal.";
            break;

          case "diverging advance approach":
            description = "Proceed on diverging route at prescribed speed prepared to stop at second signal.";
            break;

          case "diverging approach":
            description = "Proceed on diverging route at prescribed speed prepared to stop at next signal.";
            break;

          case "diverging approach restricting":
            description = "Proceed on diverging route at prescribed speed prepared to pass next signal at restricted speed.";
            break;

          case "restricting":
            description = "Proceed at restricted speed. ";
            break;

          case "restricting proceed":
            description = "Proceed at restricted speed.";
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
