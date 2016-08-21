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

/***/ 284:
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 258);
	
	var _TodoReducer = __webpack_require__(/*! ./TodoReducer */ 285);
	
	var _TodoReducer2 = _interopRequireDefault(_TodoReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({
	   todos: _TodoReducer2.default
	});

/***/ },

/***/ 285:
/*!*************************************!*\
  !*** ./app/reducers/TodoReducer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'SET_STATE':
	            return setState(state, action.state);
	        case 'TOGGLE_COMPLETE':
	            return toggleCompleted(state, action.itemId);
	        case 'CHANGE_FILTER':
	            return changeFilter(state, action.filter);
	        case 'EDIT_ITEM':
	            return editItem(state, action.itemId);
	        case 'CANCEL_EDITING':
	            return cancelEditing(state, action.itemId);
	        case 'DONE_EDITING':
	            return doneEditing(state, action.itemId, action.newText);
	        case 'CLEAR_COMPLETED':
	            return clearCompleted(state);
	        case 'ADD_ITEM':
	            return addItem(state, action.text);
	        case 'DELETE_ITEM':
	            return deleteItem(state, action.itemId);
	        case 'UPDATE_INPUT':
	            return updateInput(state, action.input);
	    }
	
	    return state;
	};
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	function setState(state, newState) {
	    return state.merge(newState);
	}
	
	function findItemIndex(state, itemId) {
	    return state.get('todos').findIndex(function (item) {
	        return item.get('id') === itemId;
	    });
	}
	
	function toggleCompleted(state, itemId) {
	    var itemIndex = findItemIndex(state, itemId);
	    var updatedItem = state.get('todos').get(itemIndex).update('status', function (status) {
	        return status === 'active' ? 'completed' : 'active';
	    });
	    return state.update('todos', function (todos) {
	        return todos.set(itemIndex, updatedItem);
	    });
	}
	
	function changeFilter(state, filter) {
	    return state.set('filter', filter);
	}
	
	function editItem(state, itemId) {
	    var itemIndex = findItemIndex(state, itemId);
	    var updatedItem = state.get('todos').get(itemIndex).set('editing', true);
	
	    return state.update('todos', function (todos) {
	        return todos.set(itemIndex, updatedItem);
	    });
	}
	
	function cancelEditing(state, itemId) {
	    var itemIndex = findItemIndex(state, itemId);
	    var updatedItem = state.get('todos').get(itemIndex).set('editing', false);
	
	    return state.update('todos', function (todos) {
	        return todos.set(itemIndex, updatedItem);
	    });
	}
	
	function doneEditing(state, itemId, newText) {
	    var itemIndex = findItemIndex(state, itemId);
	    var updatedItem = state.get('todos').get(itemIndex).set('editing', false).set('text', newText);
	
	    return state.update('todos', function (todos) {
	        return todos.set(itemIndex, updatedItem);
	    });
	}
	
	function clearCompleted(state) {
	    return state.update('todos', function (todos) {
	        return todos.filterNot(function (item) {
	            return item.get('status') === 'completed';
	        });
	    });
	}
	
	function addItem(state, text) {
	    var itemId = state.get('todos').reduce(function (maxId, item) {
	        return Math.max(maxId, item.get('id'));
	    }, 0) + 1;
	    var newItem = (0, _immutable.Map)({ id: itemId, text: text, status: 'active' });
	    return state.update('todos', function (todos) {
	        return todos.push(newItem);
	    });
	}
	
	function deleteItem(state, itemId) {
	    return state.update('todos', function (todos) {
	        return todos.filterNot(function (item) {
	            return item.get('id') === itemId;
	        });
	    });
	}
	
	function updateInput(state, input) {
	    return state.set('input', input);
	}

/***/ }

})
//# sourceMappingURL=0.278a8a94fd45fa78adfb.hot-update.js.map