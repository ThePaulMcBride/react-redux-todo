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
	exports.TodoAppContainer = exports.TodoApp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 272);
	
	var _action_creators = __webpack_require__(/*! ../action_creators */ 282);
	
	var actionCreators = _interopRequireWildcard(_action_creators);
	
	var _TodoList = __webpack_require__(/*! ./TodoList */ 249);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	var _TodoHeader = __webpack_require__(/*! ./TodoHeader */ 257);
	
	var _TodoHeader2 = _interopRequireDefault(_TodoHeader);
	
	var _TodoTools = __webpack_require__(/*! ./TodoTools */ 283);
	
	var _TodoTools2 = _interopRequireDefault(_TodoTools);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoApp = exports.TodoApp = function (_React$Component) {
	    _inherits(TodoApp, _React$Component);
	
	    function TodoApp() {
	        _classCallCheck(this, TodoApp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).apply(this, arguments));
	    }
	
	    _createClass(TodoApp, [{
	        key: 'countActiveItems',
	        value: function countActiveItems() {
	            if (this.props.todos) {
	                var activeItems = this.props.todos.filter(function (item) {
	                    return item.get('status') === 'active';
	                });
	                return activeItems.size;
	            }
	            return 0;
	        }
	    }, {
	        key: 'updateInput',
	        value: function updateInput(e) {
	            this.props.updateInput(e.target.value);
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
	                    _react2.default.createElement(_TodoHeader2.default, { addItem: this.props.addItem,
	                        input: this.props.input,
	                        updateInput: this.updateInput
	                    }),
	                    _react2.default.createElement(_TodoList2.default, this.props),
	                    _react2.default.createElement(_TodoTools2.default, { changeFilter: this.props.changeFilter,
	                        filter: this.props.filter,
	                        countActiveItems: this.countActiveItems(),
	                        clearCompleted: this.props.clearCompleted })
	                )
	            );
	        }
	    }]);
	
	    return TodoApp;
	}(_react2.default.Component);
	
	;
	
	function mapStateToProps(state) {
	    return {
	        todos: state.get('todos'),
	        filter: state.get('filter'),
	        input: state.get('input')
	    };
	}
	
	var TodoAppContainer = exports.TodoAppContainer = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(TodoApp);

/***/ },

/***/ 283:
/*!**************************************!*\
  !*** ./app/components/TodoTools.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 252);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoTools = function (_React$Component) {
	    _inherits(TodoTools, _React$Component);
	
	    function TodoTools() {
	        _classCallCheck(this, TodoTools);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoTools).apply(this, arguments));
	    }
	
	    _createClass(TodoTools, [{
	        key: 'getNbItemsLeft',
	        value: function getNbItemsLeft() {
	            return this.props.countActiveItems || 0;
	        }
	    }, {
	        key: 'isSelected',
	        value: function isSelected(filter) {
	            return this.props.selectedFilter === filter || false;
	        }
	    }, {
	        key: 'setSelectedClass',
	        value: function setSelectedClass(filter) {
	            return (0, _classnames2.default)({ 'selected': this.props.filter === filter });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'footer',
	                { className: 'footer' },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'todo-count' },
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        this.getNbItemsLeft()
	                    ),
	                    ' items left'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'filters' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#',
	                                onClick: function onClick() {
	                                    return _this2.props.changeFilter('all');
	                                },
	                                className: this.setSelectedClass('all') },
	                            'All'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#',
	                                onClick: function onClick() {
	                                    return _this2.props.changeFilter('active');
	                                },
	                                className: this.setSelectedClass('active') },
	                            'Active'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#',
	                                onClick: function onClick() {
	                                    return _this2.props.changeFilter('completed');
	                                },
	                                className: this.setSelectedClass('completed') },
	                            'Completed'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'clear-completed',
	                        onClick: this.props.clearCompleted },
	                    'Clear completed'
	                )
	            );
	        }
	    }]);
	
	    return TodoTools;
	}(_react2.default.Component);
	
	exports.default = TodoTools;
	;

/***/ }

})
//# sourceMappingURL=0.44d98ddd63059139e23a.hot-update.js.map