webpackHotUpdate(0,{

/***/ 251:
/*!**************************************!*\
  !*** ./app/components/TextInput.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 109);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(/*! classnames */ 252);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	    displayName: 'TextInput',
	
	    getInitialState: function getInitialState() {
	        return { value: this.props.text };
	    },
	
	    _handleKeyDown: function _handleKeyDown(e) {
	        switch (e.key) {
	            case 'Enter':
	                return this.props.doneEditing(this.props.itemId, this.state.value);
	            case 'Escape':
	                return this.cancelEditing(this.props.itemId);
	        }
	    },
	
	    _handleOnBlur: function _handleOnBlur(e) {
	        return this.cancelEditing(this.props.itemId);
	    },
	
	    _handleOnChange: function _handleOnChange(e) {
	        this.setState({ value: e.target.value });
	    },
	
	    cancelEditing: function cancelEditing() {
	        this.setState({ 'value': this.props.text });
	        return this.props.cancelEditing(this.props.itemId);
	    },
	
	    render: function render() {
	        return _react2.default.createElement('input', { className: 'edit',
	            autoFocus: true,
	            value: this.state.value,
	            onChange: this._handleOnChange,
	            type: 'text',
	            ref: 'itemInput',
	            onKeyDown: this._handleKeyDown,
	            onBlur: this._handleOnBlur
	        });
	    }
	});

/***/ }

})
//# sourceMappingURL=0.051d2165e51f937d488c.hot-update.js.map