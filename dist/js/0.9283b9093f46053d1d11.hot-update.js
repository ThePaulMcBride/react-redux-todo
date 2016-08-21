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
	
	var _TodoApp = __webpack_require__(/*! ./components/TodoApp */ 248);
	
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

/***/ },

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

/***/ },

/***/ 286:
/*!*****************************************!*\
  !*** ./~/redux-immutable/dist/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = undefined;
	
	var _combineReducers2 = __webpack_require__(/*! ./combineReducers */ 287);
	
	var _combineReducers3 = _interopRequireDefault(_combineReducers2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.combineReducers = _combineReducers3.default;

/***/ },

/***/ 287:
/*!***************************************************!*\
  !*** ./~/redux-immutable/dist/combineReducers.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _utilities = __webpack_require__(/*! ./utilities */ 288);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (reducers) {
	    var reducerKeys = Object.keys(reducers);
	
	    // eslint-disable-next-line space-infix-ops
	    return function () {
	        var inputState = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.Map() : arguments[0];
	        var action = arguments[1];
	
	        // eslint-disable-next-line no-process-env
	        if (process.env.NODE_ENV !== 'production') {
	            var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);
	
	            if (warningMessage) {
	                // eslint-disable-next-line no-console
	                console.error(warningMessage);
	            }
	        }
	
	        return inputState.withMutations(function (temporaryState) {
	            reducerKeys.forEach(function (reducerName) {
	                var reducer = reducers[reducerName];
	                var currentDomainState = temporaryState.get(reducerName);
	                var nextDomainState = reducer(currentDomainState, action);
	
	                (0, _utilities.validateNextState)(nextDomainState, reducerName, action);
	
	                temporaryState.set(reducerName, nextDomainState);
	            });
	        });
	    };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 11)))

/***/ },

/***/ 288:
/*!***************************************************!*\
  !*** ./~/redux-immutable/dist/utilities/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'create index';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;
	
	var _getStateName2 = __webpack_require__(/*! ./getStateName.js */ 289);
	
	var _getStateName3 = _interopRequireDefault(_getStateName2);
	
	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(/*! ./getUnexpectedInvocationParameterMessage.js */ 290);
	
	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);
	
	var _validateNextState2 = __webpack_require__(/*! ./validateNextState.js */ 291);
	
	var _validateNextState3 = _interopRequireDefault(_validateNextState2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;

/***/ },

/***/ 289:
/*!**********************************************************!*\
  !*** ./~/redux-immutable/dist/utilities/getStateName.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (action) {
	    return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 290:
/*!*************************************************************************************!*\
  !*** ./~/redux-immutable/dist/utilities/getUnexpectedInvocationParameterMessage.js ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _getStateName = __webpack_require__(/*! ./getStateName */ 289);
	
	var _getStateName2 = _interopRequireDefault(_getStateName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable lodash3/prefer-lodash-method */
	
	exports.default = function (state, reducers, action) {
	    var reducerNames = Object.keys(reducers);
	
	    if (!reducerNames.length) {
	        return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
	    }
	
	    var stateName = (0, _getStateName2.default)(action);
	
	    if (!_immutable2.default.Iterable.isIterable(state)) {
	        return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
	    }
	
	    var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
	        return !reducers.hasOwnProperty(name);
	    });
	
	    if (unexpectedStatePropertyNames.length > 0) {
	        return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
	    }
	
	    return null;
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 291:
/*!***************************************************************!*\
  !*** ./~/redux-immutable/dist/utilities/validateNextState.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (nextState, reducerName, action) {
	    // eslint-disable-next-line no-undefined
	    if (nextState === undefined) {
	        throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
	    }
	
	    return null;
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 292:
/*!***************************************!*\
  !*** ./app/reducers/FilterReducer.js ***!
  \***************************************/
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
	
	        case 'CHANGE_FILTER':
	            return changeFilter(state, action.filter);
	        default:
	            return state;
	    }
	};
	
	var _immutable = __webpack_require__(/*! immutable */ 247);
	
	function changeFilter(state, filter) {
	    return state.set('filter', filter);
	}

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
//# sourceMappingURL=0.9283b9093f46053d1d11.hot-update.js.map