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
	
	var _reactAddonsPureRenderMixin = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-addons-pure-render-mixin\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	    displayName: 'TodoHeader',
	
	    mixins: [_reactAddonsPureRenderMixin2.default],
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
	                autofocus: true,
	                autoComplete: 'off',
	                placeholder: 'What needs to be done?',
	                onKeyPress: this._handleKeyPress })
	        );
	    }
	});

/***/ }

})
//# sourceMappingURL=0.9f512e1756c1651d8631.hot-update.js.map