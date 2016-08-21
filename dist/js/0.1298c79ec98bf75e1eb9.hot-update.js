webpackHotUpdate(0,{

/***/ 281:
/*!************************!*\
  !*** ./app/reducer.js ***!
  \************************/
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

/***/ }

})
//# sourceMappingURL=0.1298c79ec98bf75e1eb9.hot-update.js.map