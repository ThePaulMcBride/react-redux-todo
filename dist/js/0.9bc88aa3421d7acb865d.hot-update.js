webpackHotUpdate(0,{

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

/***/ }

})
//# sourceMappingURL=0.9bc88aa3421d7acb865d.hot-update.js.map