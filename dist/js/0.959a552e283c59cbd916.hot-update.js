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

/***/ }

})
//# sourceMappingURL=0.959a552e283c59cbd916.hot-update.js.map