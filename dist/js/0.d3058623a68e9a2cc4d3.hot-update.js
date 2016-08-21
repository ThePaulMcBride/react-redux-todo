webpackHotUpdate(0,{

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
	
	var _classnames = __webpack_require__(/*! classnames */ 256);
	
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
	                'completed': this.props.isCompleted
	            });
	
	            return _react2.default.createElement(
	                'li',
	                { className: 'todo' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'view' },
	                    _react2.default.createElement('input', { type: 'checkbox', className: 'toggle' }),
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

/***/ 256:
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
//# sourceMappingURL=0.d3058623a68e9a2cc4d3.hot-update.js.map