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
	
	var _reduxImm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-imm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _TodoReducer = __webpack_require__(/*! ./TodoReducer */ 285);
	
	var _TodoReducer2 = _interopRequireDefault(_TodoReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxImm.combineReducers)({
	   todos: _TodoReducer2.default
	});

/***/ }

})
//# sourceMappingURL=0.933f4359224db229ac53.hot-update.js.map