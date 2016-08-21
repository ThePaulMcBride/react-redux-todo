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
	
	var _TodoHeader = __webpack_require__(/*! ./TodoHeader */ 257);
	
	var _TodoHeader2 = _interopRequireDefault(_TodoHeader);
	
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
	                    _react2.default.createElement(_TodoHeader2.default, null),
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

/***/ 257:
/*!***************************************!*\
  !*** ./app/components/TodoHeader.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	    displayName: 'TodoHeader',
	
	    _handleKeyPress: function _handleKeyPress(e) {
	        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
	            return this.props.addItem(this.refs.addTodoInput.value);
	        }
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'header',
	            { className: 'header' },
	            _react2.default.createElement(
	                'h1',
	                null,
	                'todos'
	            ),
	            _react2.default.createElement('input', { className: 'new-todo',
	                ref: 'addTodoInput',
	                autofocus: 'true',
	                autoComplete: 'off',
	                placeholder: 'What needs to be done?',
	                onKeyPress: this._handleKeyPress
	            })
	        );
	    }
	});

/***/ }

})
//# sourceMappingURL=0.6f76220b4e434d1fce9f.hot-update.js.map