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
	            return changeFilter(state, filter);
	    }
	
	    return state;
	};
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	function setState(state, newState) {
	    return state.merge(newState);
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
//# sourceMappingURL=0.32fd9c28aaa1653d8d1a.hot-update.js.map