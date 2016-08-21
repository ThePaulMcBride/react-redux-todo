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
	    filter: _FilterReducer2.default,
	    input: _InputReducer2.default
	
	});

/***/ }

})
//# sourceMappingURL=0.00e49db1b5141ca04284.hot-update.js.map