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
	    var itemIndex = state.get('todos').findIndex(function (item) {
	        return item.get('id') === itemId;
	    });
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

/***/ }

})
//# sourceMappingURL=0.80a0b9a5666b23334533.hot-update.js.map