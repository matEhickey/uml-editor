/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _initialisation = __webpack_require__(/*! ./initialisation.js */ "./src/initialisation.js");

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var focused = null;
var selected = null;
var mooving = null;

var diffClickWidgetAndPosition = {
  x: 0,
  y: 0

  // Event Listeners
};addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  if (mooving) {
    // console.log("try to move a widget")
    mooving.x = mouse.x + diffClickWidgetAndPosition.x;
    mooving.y = mouse.y + diffClickWidgetAndPosition.y;
    (0, _initialisation.updateObjects)();
  } else {
    // nothing mooving
    var widget = (0, _initialisation.isIn)(mouse.x, mouse.y);
    if (widget && focused == null || widget == null && focused) {

      if (focused) {
        // remove focus attr
        focused.focus = false;
      }
      focused = widget;
      if (focused) {
        // add focus to the new one
        focused.focus = true;
      }
      (0, _initialisation.updateObjects)();
    }
  }
});
addEventListener('mousedown', function (event) {
  var x = event.clientX;
  var y = event.clientY;

  mooving = (0, _initialisation.isIn)(x, y);
  if (mooving) {
    diffClickWidgetAndPosition.x = mooving.x - x;
    diffClickWidgetAndPosition.y = mooving.y - y;
  }
  (0, _initialisation.updateObjects)();
});
addEventListener('mouseup', function (event) {
  var x = event.clientX;
  var y = event.clientY;
  selected = mooving;
  mooving = null;
  (0, _initialisation.updateObjects)();
});

addEventListener('resize', function () {
  _initialisation.canvas.width = innerWidth;
  _initialisation.canvas.height = innerHeight;

  (0, _initialisation.updateObjects)();
});

addEventListener('contextmenu', function (event) {
  event.preventDefault();
  var x = event.clientX;
  var y = event.clientY;

  var widget = (0, _initialisation.isIn)(x, y);
  if (widget) {
    console.log("right click on '" + widget.name + "'");
  } else {
    console.log("right click on blank");
  }
  (0, _initialisation.updateObjects)();
});

(0, _initialisation.init)();
(0, _initialisation.updateObjects)();

/***/ }),

/***/ "./src/components/class.js":
/*!*********************************!*\
  !*** ./src/components/class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity = __webpack_require__(/*! ./../entity */ "./src/entity.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassD = function (_Entity) {
  _inherits(ClassD, _Entity);

  function ClassD(name) {
    _classCallCheck(this, ClassD);

    var _this = _possibleConstructorReturn(this, (ClassD.__proto__ || Object.getPrototypeOf(ClassD)).call(this, ClassD.N * 100 + 400, ClassD.N * 100 + 100));

    _this.name = name;

    _this.props = [];
    _this.methods = [];

    _this.width = 100;
    _this.length = _this.props.length + 1 * 25 + _this.methods.length + 1 * 25;

    ClassD.N += 1;
    return _this;
  }

  _createClass(ClassD, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();

      // show title
      var x = this.x;
      var y = this.y;
      var len = 25;

      c.rect(x, y, this.width, len);
      // c.fillStyle = "#040"
      // c.fill()

      // c.fillStyle = "#000"
      c.fillText("Class: '" + this.name + "'", this.x + 5, this.y + 15);

      // draw vars
      y += len;
      var numberOfProps = this.props.length + 1; // 1 more for debug
      len = 25 * numberOfProps;

      c.rect(x, y, this.width, len);
      // c.fillStyle = "#040"
      // c.fill()

      // c.fillStyle = "#000"
      c.fillText("-  " + this.props.length + " props", x + 5, y + 15);

      // draw methods
      y += len;
      var numberOfMethods = this.methods.length + 1; // 1 more for debug
      len = 25 * numberOfMethods;
      c.rect(x, y, this.width, len);
      c.fillText("# " + this.methods.length + " methods", x + 5, y + 15);

      this.length = 25 + numberOfProps * 25 + numberOfMethods * 25;

      if (this.focus) {
        c.strokeStyle = "#0000FF";
      }

      c.stroke();
      c.strokeStyle = "#000000";
      c.closePath();
    }
  }]);

  return ClassD;
}(_entity.Entity);

ClassD.N = 0;

module.exports = { ClassD: ClassD };

/***/ }),

/***/ "./src/components/package.js":
/*!***********************************!*\
  !*** ./src/components/package.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity = __webpack_require__(/*! ./../entity */ "./src/entity.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PackageD = function (_Entity) {
  _inherits(PackageD, _Entity);

  function PackageD(name) {
    _classCallCheck(this, PackageD);

    var _this = _possibleConstructorReturn(this, (PackageD.__proto__ || Object.getPrototypeOf(PackageD)).call(this, PackageD.N * 100 + 300, 100 + PackageD.N * 100 + 200));

    _this.name = name;
    PackageD.N += 1;
    _this.width = 300;
    _this.length = 25 + 50;
    return _this;
  }

  _createClass(PackageD, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.fillStyle = "#000";
      c.fill();

      // show title
      var x = this.x;
      var y = this.y;
      var len = 25;
      c.rect(x, y, this.width, len);

      c.fillText("Package: '" + this.name + "'", this.x + 5, this.y + 15);

      // draw content
      y += len;
      len = 50;
      c.rect(x, y, this.width, len);

      if (this.focus) {
        c.strokeStyle = "#0000FF";
      }

      c.stroke();
      c.strokeStyle = "#000000";
      c.closePath();
    }
  }]);

  return PackageD;
}(_entity.Entity);

PackageD.N = 0;

module.exports = { PackageD: PackageD };

/***/ }),

/***/ "./src/components/particles.js":
/*!*************************************!*\
  !*** ./src/components/particles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./../utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _entity = __webpack_require__(/*! ./../entity */ "./src/entity.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Objects
var Particles = function (_Entity) {
  _inherits(Particles, _Entity);

  function Particles(x, y, radius, color) {
    _classCallCheck(this, Particles);

    var _this = _possibleConstructorReturn(this, (Particles.__proto__ || Object.getPrototypeOf(Particles)).call(this, x, y));
    // super(x, y)


    _this.radius = radius;
    _this.color = color;
    return _this;
  }

  _createClass(Particles, [{
    key: 'draw',
    value: function draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: 'update',
    value: function update(context) {
      this.x += _utils2.default.randomIntFromRange(-5, 5);
      this.y += _utils2.default.randomIntFromRange(-5, 5);

      this.draw(context);
    }
  }]);

  return Particles;
}(_entity.Entity);

module.exports = { Particles: Particles };

/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Objects
var Entity = function () {
  function Entity(x, y) {
    _classCallCheck(this, Entity);

    this.x = x;
    this.y = y;
    this.width = 0;
    this.length = 0;

    this.name = "entity";

    this.focused = false;
  }

  _createClass(Entity, [{
    key: 'draw',
    value: function draw(c) {
      c.beginPath();
      c.fillText('Entity', this.x, this.y);
      c.closePath();
    }
  }, {
    key: 'update',
    value: function update(context) {
      this.draw(context);
    }
  }, {
    key: 'isIn',
    value: function isIn(x, y) {
      // console.log("entity("+this.name+").isOn "+"["+x+":"+y+"]")
      // console.log("x:"+this.x+" y:"+this.y)
      // console.log("width:"+this.width+" length:"+this.length)

      if (x > this.x && x < this.x + this.width) {
        if (y > this.y && y < this.y + this.length) {
          // console.log("true")
          return true;
        }
      }
      // console.log("false")
      // console.log("\n")

      return false;
    }
  }]);

  return Entity;
}();

module.exports = { Entity: Entity };

/***/ }),

/***/ "./src/initialisation.js":
/*!*******************************!*\
  !*** ./src/initialisation.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _entity = __webpack_require__(/*! ./entity */ "./src/entity.js");

var _class = __webpack_require__(/*! ./components/class */ "./src/components/class.js");

var _particles = __webpack_require__(/*! ./components/particles */ "./src/components/particles.js");

var _package = __webpack_require__(/*! ./components/package */ "./src/components/package.js");

var entities = void 0;
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

function init() {
  entities = [];
  // for (let i = 0; i < 20; i++) {
  //   entities.push(new Particles(canvas.width/2, canvas.height/2 , utils.randomIntFromRange(1,50), utils.randomColor()));
  // }

  for (var i = 0; i < 2; i++) {
    entities.push(new _class.ClassD("class_" + i));
  }
  for (var _i = 0; _i < 2; _i++) {
    entities.push(new _package.PackageD("package_" + _i));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  updateObjects();
}

var numberOfUpdating = 0;
function updateObjects() {
  if (false) {}

  context.clearRect(0, 0, canvas.width, canvas.height);
  entities.forEach(function (entity) {
    entity.update(context);
  });
}

function isIn(x, y) {
  var res = null;
  entities.forEach(function (entity) {
    if (entity.isIn(x, y)) {
      res = entity;
    }
  });
  return res;
}

function clickOn(x, y) {
  // console.log("clickOn ")
  entities.forEach(function (entity) {
    if (entity.isOn(x, y)) {
      // console.log(entity)
      return entity;
    }
  });
}

module.exports = { init: init, animate: animate, updateObjects: updateObjects, clickOn: clickOn, isIn: isIn, canvas: canvas, context: context };

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance };

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map