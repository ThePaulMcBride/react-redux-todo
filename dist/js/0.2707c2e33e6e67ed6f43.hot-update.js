webpackHotUpdate(0,{

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
	
	            this.refs.addTodoInput.reset();
	        }
	    },
	    render: function render() {
	        console.log(this.props.input);
	
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
	                autoComplete: 'off',
	                value: this.props.input,
	                onChange: this.props.updateInput,
	                placeholder: 'What needs to be done?',
	                onKeyPress: this._handleKeyPress
	            })
	        );
	    }
	});

/***/ }

})
//# sourceMappingURL=0.2707c2e33e6e67ed6f43.hot-update.js.map