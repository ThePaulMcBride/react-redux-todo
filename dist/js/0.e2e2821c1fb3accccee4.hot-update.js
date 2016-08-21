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
	
	var _index = __webpack_require__(/*! ./reducers/index */ 284);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _TodoApp = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/TodoApp\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createStoreDevTools = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	})(_redux.createStore);
	
	var store = (0, _redux.createStore)(_index2.default);
	
	store.dispatch({
	    type: 'SET_STATE',
	    state: {
	        todos: [{ id: 1, text: 'React', status: 'active', editing: false }, { id: 2, text: 'Redux', status: 'active', editing: false }, { id: 3, text: 'Immutable', status: 'active', editing: false }],
	        filter: 'all',
	        input: ''
	    }
	});
	
	var filter = 'all';
	
	__webpack_require__(/*! ../~/todomvc-app-css/index.css */ 253);
	
	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_TodoApp.TodoAppContainer, null)
	), document.getElementById('app'));

/***/ }

})
//# sourceMappingURL=0.e2e2821c1fb3accccee4.hot-update.js.map