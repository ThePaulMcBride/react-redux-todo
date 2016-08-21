webpackHotUpdate(0,{

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
	
	            console.log(this.props);
	            if (this.props.todos) {
	                return this.props.todos.get('todos').filter(function (item) {
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
	                        return _react2.default.createElement(_TodoItem2.default, { key: item.get('id'),
	                            text: item.get('text'),
	                            id: item.get('id'),
	                            isCompleted: _this3.isCompleted(item),
	                            isEditing: item.get('editing'),
	                            doneEditing: _this3.props.doneEditing,
	                            cancelEditing: _this3.props.cancelEditing,
	                            toggleComplete: _this3.props.toggleComplete,
	                            deleteItem: _this3.props.deleteItem,
	                            editItem: _this3.props.editItem
	                        });
	                    })
	                )
	            );
	        }
	    }]);
	
	    return TodoList;
	}(_react2.default.Component);
	
	exports.default = TodoList;
	;

/***/ }

})
//# sourceMappingURL=0.6fedf2f269983408ec59.hot-update.js.map