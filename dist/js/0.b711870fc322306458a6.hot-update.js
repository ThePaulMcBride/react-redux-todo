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

/***/ }

})
//# sourceMappingURL=0.b711870fc322306458a6.hot-update.js.map