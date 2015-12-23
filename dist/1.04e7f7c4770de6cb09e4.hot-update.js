webpackHotUpdate(1,{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(7), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(2), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _get = __webpack_require__(13)['default'];
	
	var _inherits = __webpack_require__(14)['default'];
	
	var _createClass = __webpack_require__(12)['default'];
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(24);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _constantsFonts = __webpack_require__(25);
	
	var _constantsSprite = __webpack_require__(19);
	
	var _constantsSprite2 = _interopRequireDefault(_constantsSprite);
	
	var _widgetsBannerBannerC = __webpack_require__(167);
	
	var _widgetsBannerBannerC2 = _interopRequireDefault(_widgetsBannerBannerC);
	
	var _intro = __webpack_require__(165);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _item = __webpack_require__(163);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _libServicesProcedures = __webpack_require__(173);
	
	var _libServicesProcedures2 = _interopRequireDefault(_libServicesProcedures);
	
	var _aboutusOurServices = __webpack_require__(162);
	
	var _aboutusOurServices2 = _interopRequireDefault(_aboutusOurServices);
	
	// todo: change tmp for a real component including btn on left
	
	var Procedures = (function (_Component) {
	  _inherits(Procedures, _Component);
	
	  function Procedures() {
	    _classCallCheck(this, Procedures);
	
	    _get(Object.getPrototypeOf(Procedures.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Procedures, [{
	    key: 'render',
	    value: function render() {
	      var cards = this.getCards();
	      var style = this.getStyle();
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(_widgetsBannerBannerC2['default'], { data: cards.banner, sprite: style.banner.sprite }),
	          _react2['default'].createElement(_intro2['default'], { style: style.intro }),
	          _react2['default'].createElement(_item2['default'], { data: _libServicesProcedures2['default'].elements[0].elements })
	        ),
	        _react2['default'].createElement(_aboutusOurServices2['default'], null)
	      );
	    }
	  }, {
	    key: 'getCards',
	    value: function getCards() {
	      return {
	        banner: {
	          wrapper: {
	            style: {
	              marginLeft: '35px',
	              marginTop: '140px',
	              height: '210'
	            }
	          },
	          elements: [{
	            type: 'title',
	            text: ['Evita largas filas, te <br />ayudamos a gestionar <br />todos tus trámites.'],
	            style: _lodash2['default'].merge({}, _constantsFonts.FontABold.getVariation('servicesD'), {})
	          }, {
	            type: 'description',
	            text: ['Con más de 15 años de experiencia, somos <br />expertos en el sector transportista binacional.'],
	            style: _lodash2['default'].merge({}, _constantsFonts.FontA.getVariation('homeA'), {
	              marginTop: '30px'
	            })
	          }]
	        }
	      };
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      return {
	        banner: {
	          sprite: _constantsSprite2['default'].Procedures.BannerUsa
	        }
	      };
	    }
	  }]);
	
	  return Procedures;
	})(_react.Component);
	
	exports['default'] = Procedures;
	
	Procedures.propTypes = {
	  data: _react2['default'].PropTypes.array
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=1.04e7f7c4770de6cb09e4.hot-update.js.map