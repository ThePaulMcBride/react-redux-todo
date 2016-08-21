webpackHotUpdate(0,{

/***/ 76:
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 109);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	var _TodoApp = __webpack_require__(/*! ./components/TodoApp */ 248);
	
	var _TodoApp2 = _interopRequireDefault(_TodoApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, text: 'React', status: 'active', editing: false }), (0, _immutable.Map)({ id: 2, text: 'Redux', status: 'active', editing: false }), (0, _immutable.Map)({ id: 3, text: 'Immutable', status: 'completed', editing: false }));
	
	_reactDom2.default.render(_react2.default.createElement(_TodoApp2.default, { todos: todos }), document.getElementById('app'));

/***/ },

/***/ 248:
/*!************************************!*\
  !*** ./app/components/TodoApp.jsx ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";

/***/ }

})
//# sourceMappingURL=0.eab2493a93de29cc890e.hot-update.js.map