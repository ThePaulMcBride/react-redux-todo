webpackHotUpdate(0,{

/***/ 284:
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reduxImmutable = __webpack_require__(/*! redux-immutable */ 286);
	
	var _TodoReducer = __webpack_require__(/*! ./TodoReducer */ 285);
	
	var _TodoReducer2 = _interopRequireDefault(_TodoReducer);
	
	var _FilterReducer = __webpack_require__(/*! ./FilterReducer */ 292);
	
	var _FilterReducer2 = _interopRequireDefault(_FilterReducer);
	
	var _InputReducer = __webpack_require__(/*! ./InputReducer */ 293);
	
	var _InputReducer2 = _interopRequireDefault(_InputReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxImmutable.combineReducers)({
	    todos: _TodoReducer2.default,
	    filter: _FilterReducer2.default
	
	});

/***/ },

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
	    var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
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
//# sourceMappingURL=0.25842473a190eed98c9f.hot-update.js.map