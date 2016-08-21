webpackHotUpdate(0,{

/***/ 76:
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 77);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 109);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	var _redux = __webpack_require__(/*! redux */ 258);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 272);
	
	var _reducer = __webpack_require__(/*! ./reducer */ 281);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _TodoApp = __webpack_require__(/*! ./components/TodoApp */ 248);
	
	var _TodoApp2 = _interopRequireDefault(_TodoApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todos = _immutable.List.of((0, _immutable.Map)({ id: 1, text: 'React', status: 'active', editing: false }), (0, _immutable.Map)({ id: 2, text: 'Redux', status: 'active', editing: false }), (0, _immutable.Map)({ id: 3, text: 'Immutable', status: 'completed', editing: false }));
	
	var filter = 'all';
	
	__webpack_require__(/*! ../~/todomvc-app-css/index.css */ 253);
	
	_reactDom2.default.render(_react2.default.createElement(_TodoApp2.default, { todos: todos, filter: filter }), document.getElementById('app'));

/***/ },

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
	    }
	
	    return state;
	};
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	function setState(state, newState) {
	    return state.merge(newState);
	}

/***/ }

})
//# sourceMappingURL=0.b98c01247b1703f94dd7.hot-update.js.map