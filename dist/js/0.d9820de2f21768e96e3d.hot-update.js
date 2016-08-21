webpackHotUpdate(0,{

/***/ 293:
/*!**************************************!*\
  !*** ./app/reducers/InputReducer.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    if (state == undefined) {
	        return [];
	    }
	    switch (action.type) {
	        case 'ADD_ITEM':
	            return clearInput(state);
	        case 'UPDATE_INPUT':
	            return updateInput(state, action.input);
	        default:
	            return state;
	    }
	};
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	function updateInput(state, input) {
	    return state.set('input', input);
	}
	
	function clearInput(state) {
	    return state.set('input', '');
	}

/***/ }

})
//# sourceMappingURL=0.d9820de2f21768e96e3d.hot-update.js.map