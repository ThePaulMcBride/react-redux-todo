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
	            var _this2 = this;
	
	            var itemClass = (0, _classnames2.default)({
	                'todo': true,
	                'completed': this.props.isCompleted,
	                'editing': this.props.isEditing
	            });
	
	            return _react2.default.createElement(
	                'li',
	                { className: itemClass },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'view' },
	                    _react2.default.createElement('input', { type: 'checkbox', className: 'toggle', defaultChecked: this.props.isCompleted, onClick: function onClick() {
	                            return _this2.props.toggleComplete(_this2.props.id);
	                        } }),
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'todo', ref: 'text', onDoubleClick: function onDoubleClick() {
	                                return _this2.props.editItem(_this2.props.id);
	                            } },
	                        this.props.text
	                    ),
	                    _react2.default.createElement('button', { className: 'destroy', onClick: function onClick() {
	                            return _this2.props.deleteItem(_this2.props.id);
	                        } })
	                ),
	                _react2.default.createElement(_TextInput2.default, { text: this.props.text,
	                    itemId: this.props.id,
	                    cancelEditing: this.props.cancelEditing,
	                    doneEditing: this.props.doneEditing
	                })
	            );
	        }
	    }]);
	
	    return TodoItem;
	}(_react2.default.Component);
	
	exports.default = TodoItem;
	;

/***/ }

})
//# sourceMappingURL=0.4acd21878e8e492660dc.hot-update.js.map