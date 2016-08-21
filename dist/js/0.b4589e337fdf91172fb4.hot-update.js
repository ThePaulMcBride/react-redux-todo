webpackHotUpdate(0,{

/***/ 76:
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 109);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	var _redux = __webpack_require__(/*! redux */ 258);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 272);
	
	var _index = __webpack_require__(/*! ./reducers/index */ 284);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _TodoApp = __webpack_require__(/*! ./components/TodoApp */ 248);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createStoreDevTools = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	})(_redux.createStore);
	
	var store = (0, _redux.createStore)(_index2.default);
	
	store.dispatch({
	    type: 'SET_STATE',
	    state: {
	        todos: [{ id: 1, text: 'React', status: 'active', editing: false }, { id: 2, text: 'Redux', status: 'active', editing: false }, { id: 3, text: 'Immutable', status: 'active', editing: false }],
	        filter: 'all',
	        input: ''
	    }
	});
	
	var filter = 'all';
	
	__webpack_require__(/*! ../~/todomvc-app-css/index.css */ 253);
	
	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_TodoApp.TodoAppContainer, null)
	), document.getElementById('app'));

/***/ },

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
	                console.log(this.props.todos.get('todos'));
	                var activeItems = this.props.todos.get('todos').filter(function (item) {
	                    return console.log(item);
	                });
	                return activeItems.size;
	            }
	            return 0;
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
	                        updateInput: this.props.updateInput
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

/***/ },

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
	
	            this.refs.addTodoInput.reset();
	        }
	    },
	
	    updateInput: function updateInput(e) {
	        this.props.updateInput(e.target.value);
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
	                autoComplete: 'off',
	                value: this.props.input,
	                onChange: this.updateInput,
	                placeholder: 'What needs to be done?',
	                onKeyPress: this._handleKeyPress
	            })
	        );
	    }
	});

/***/ },

/***/ 282:
/*!********************************!*\
  !*** ./app/action_creators.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toggleComplete = toggleComplete;
	exports.changeFilter = changeFilter;
	exports.editItem = editItem;
	exports.cancelEditing = cancelEditing;
	exports.doneEditing = doneEditing;
	exports.clearCompleted = clearCompleted;
	exports.addItem = addItem;
	exports.deleteItem = deleteItem;
	exports.updateInput = updateInput;
	function toggleComplete(itemId) {
	    return {
	        type: 'TOGGLE_COMPLETE',
	        itemId: itemId
	    };
	}
	
	function changeFilter(filter) {
	    return {
	        type: 'CHANGE_FILTER',
	        filter: filter
	    };
	}
	
	function editItem(itemId) {
	    return {
	        type: 'EDIT_ITEM',
	        itemId: itemId
	    };
	}
	
	function cancelEditing(itemId) {
	    return {
	        type: 'CANCEL_EDITING',
	        itemId: itemId
	    };
	}
	
	function doneEditing(itemId, newText) {
	    return {
	        type: 'DONE_EDITING',
	        itemId: itemId,
	        newText: newText
	    };
	}
	
	function clearCompleted() {
	    return {
	        type: 'CLEAR_COMPLETED'
	    };
	}
	
	function addItem(text) {
	    return {
	        type: 'ADD_ITEM',
	        text: text
	    };
	}
	
	function deleteItem(itemId) {
	    return {
	        type: 'DELETE_ITEM',
	        itemId: itemId
	    };
	}
	
	function updateInput(input) {
	    return {
	        type: 'UPDATE_INPUT',
	        input: input
	    };
	}

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
//# sourceMappingURL=0.b4589e337fdf91172fb4.hot-update.js.map