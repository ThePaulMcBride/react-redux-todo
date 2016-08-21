webpackHotUpdate(0,{

/***/ 248:
/*!************************************!*\
  !*** ./app/components/TodoApp.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoList = __webpack_require__(/*! ./TodoList */ 249);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoApp = function (_React$Component) {
	    _inherits(TodoApp, _React$Component);
	
	    function TodoApp() {
	        _classCallCheck(this, TodoApp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).apply(this, arguments));
	    }
	
	    _createClass(TodoApp, [{
	        key: 'getItems',
	        value: function getItems() {
	            return this.props.todos || [];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'section',
	                    { className: 'todoapp' },
	                    _react2.default.createElement(_TodoList2.default, { todos: this.getItems(), filter: this.props.filter })
	                )
	            );
	        }
	    }]);
	
	    return TodoApp;
	}(_react2.default.Component);
	
	exports.default = TodoApp;
	;

/***/ },

/***/ 249:
/*!*************************************!*\
  !*** ./app/components/TodoList.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItem = __webpack_require__(/*! ./TodoItem */ 250);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoList = function (_React$Component) {
	    _inherits(TodoList, _React$Component);
	
	    function TodoList() {
	        _classCallCheck(this, TodoList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
	    }
	
	    _createClass(TodoList, [{
	        key: 'getItems',
	        value: function getItems() {
	            var _this2 = this;
	
	            if (this.props.todos) {
	                return this.props.todos.filter(function (item) {
	                    return _this2.props.filter === 'all' || item.get('status') === _this2.props.filter;
	                });
	            }
	            return [];
	        }
	    }, {
	        key: 'isCompleted',
	        value: function isCompleted(item) {
	            return item.get('status') === 'completed';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            return _react2.default.createElement(
	                'section',
	                { className: 'main' },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'todo-list' },
	                    this.getItems().map(function (item) {
	                        return _react2.default.createElement(_TodoItem2.default, { key: item.get('text'), text: item.get('text'), isCompleted: _this3.isCompleted(item) });
	                    })
	                )
	            );
	        }
	    }]);
	
	    return TodoList;
	}(_react2.default.Component);
	
	exports.default = TodoList;
	;

/***/ },

/***/ 250:
/*!*************************************!*\
  !*** ./app/components/TodoItem.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextInput = __webpack_require__(/*! ./TextInput */ 251);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _classnames = __webpack_require__(/*! classnames */ 252);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoItem = function (_React$Component) {
	    _inherits(TodoItem, _React$Component);
	
	    function TodoItem() {
	        _classCallCheck(this, TodoItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).apply(this, arguments));
	    }
	
	    _createClass(TodoItem, [{
	        key: 'render',
	        value: function render() {
	            var itemClass = (0, _classnames2.default)({
	                'todo': true,
	                'completed': this.props.isCompleted,
	                'editing': this.props.isEditing
	            });
	
	            console.log(this.props);
	
	            return _react2.default.createElement(
	                'li',
	                { className: itemClass },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'view' },
	                    _react2.default.createElement('input', { type: 'checkbox', className: 'toggle', defaultChecked: this.props.isCompleted }),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'todo' },
	                        this.props.text
	                    ),
	                    _react2.default.createElement('button', { className: 'destroy' })
	                ),
	                _react2.default.createElement(_TextInput2.default, null)
	            );
	        }
	    }]);
	
	    return TodoItem;
	}(_react2.default.Component);
	
	exports.default = TodoItem;
	;

/***/ },

/***/ 251:
/*!**************************************!*\
  !*** ./app/components/TextInput.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextInput = function (_React$Component) {
	    _inherits(TextInput, _React$Component);
	
	    function TextInput() {
	        _classCallCheck(this, TextInput);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).apply(this, arguments));
	    }
	
	    _createClass(TextInput, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("input", { className: "edit", autoFocus: true, type: "text" });
	        }
	    }]);
	
	    return TextInput;
	}(_react2.default.Component);
	
	exports.default = TextInput;
	;

/***/ },

/***/ 252:
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }

})
//# sourceMappingURL=0.251af0e302a72d2cab6c.hot-update.js.map