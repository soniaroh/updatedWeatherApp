/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/* no static exports found */
/* exports used: createElement, default */
/*!**************************!*\
  !*** ./~/react/index.js ***!
  \**************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sonia/Documents/SoniaRohaniApp/node_modules/react/index.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/* no static exports found */
/* exports used: loader, header, input, button, data, rightSpace, today, center, image, leftSpace */
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../~/css-loader/dist/cjs.js??ref--0-1!./styles.css */ 10);\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../~/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 24)(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nzcy9zdHlsZXMuY3NzPzBiMzgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTEhLi9zdHlsZXMuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY3NzL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/* exports provided: default */
/* exports used: default */
/*!****************************!*\
  !*** ./client/src/App.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ 38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_styles_css__ = __webpack_require__(/*! ../../css/styles.css */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_styles_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Forecast_jsx__ = __webpack_require__(/*! ./Forecast.jsx */ 8);\n\nconst fetch = __webpack_require__(/*! node-fetch */ 13);\n\n\n\n\n\n\nclass App extends __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      city: \"\",\n      cityToBeSearched: \"\",\n      forecast: {},\n      isLoading: false\n    };\n    this.handleChange = this.handleChange.bind(this);\n    this.fetchData = this.fetchData.bind(this);\n    this.handleFocus = this.handleFocus.bind(this);\n  }\n\n  componentDidMount() {\n    this.fetchData;\n  }\n\n  handleChange(e) {\n    this.setState({\n      cityToBeSearched: e.target.value\n    });\n  }\n\n  handleFocus() {\n    this.setState({\n      cityToBeSearched: \"\"\n    });\n  }\n\n  fetchData(e) {\n    e.preventDefault();\n    this.setState({\n      isLoading: true\n    });\n    let query = this.state.cityToBeSearched;\n    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',\n        targetUrl = `https://www.metaweather.com/api/location/search/?query=${query}`;\n\n    const that = this;\n    fetch(proxyUrl + targetUrl).then(response => response.json().then(data => ({\n      data: data,\n      status: response.status\n    })).then(res => {\n      let woeid = res.data[0].woeid;\n      fetch(proxyUrl + `https://www.metaweather.com/api/location/${woeid}`).then(response => {\n        response.json().then(data => ({\n          data: data,\n          status: response.status\n        })).then(res => {\n          that.setState({\n            forecast: res.data.consolidated_weather,\n            city: res.data.title,\n            isLoading: false\n          });\n        });\n      });\n    })).catch(function (error) {\n      console.log(error);\n      alert('city is not found, please reload the page and try another city');\n    });\n  }\n\n  render() {\n    const {\n      forecast,\n      cityToBeSearched,\n      city,\n      isLoading\n    } = this.state;\n\n    if (isLoading) {\n      return __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n        'div',\n        { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(\"spinner-border\", __WEBPACK_IMPORTED_MODULE_2__css_styles_css__[\"loader\"]), role: 'status' },\n        __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n          'span',\n          { className: 'sr-only' },\n          'Loading...'\n        )\n      );\n    }\n    return __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n      'div',\n      { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(\"container\") },\n      __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n        'h2',\n        { className: __WEBPACK_IMPORTED_MODULE_2__css_styles_css__[\"header\"] },\n        'Weather forecast'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n        'form',\n        { onSubmit: this.fetchData },\n        __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement('input', { className: __WEBPACK_IMPORTED_MODULE_2__css_styles_css__[\"input\"], type: 'text', placeholder: 'type city name', onChange: this.handleChange, onFocus: this.handleFocus, value: cityToBeSearched }),\n        __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(\n          'button',\n          { className: __WEBPACK_IMPORTED_MODULE_2__css_styles_css__[\"button\"], type: 'submit' },\n          'Get Forecast'\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement('br', null)\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react__[\"default\"].createElement(__WEBPACK_IMPORTED_MODULE_3__Forecast_jsx__[\"a\" /* Forecast */], { forecast: forecast, city: city })\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = App;\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL0FwcC5qc3g/YTJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmltcG9ydCAqIGFzIGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi4vLi4vY3NzL3N0eWxlcy5jc3MnXG5cbmltcG9ydCB7IEZvcmVjYXN0IH0gZnJvbSAnLi9Gb3JlY2FzdC5qc3gnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaXR5OiBcIlwiLFxuICAgICAgY2l0eVRvQmVTZWFyY2hlZDogXCJcIixcbiAgICAgIGZvcmVjYXN0OiB7fSxcbiAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hEYXRhID0gdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGE7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2l0eVRvQmVTZWFyY2hlZDogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaXR5VG9CZVNlYXJjaGVkOiBcIlwiXG4gICAgfSlcbiAgfVxuXG4gIGZldGNoRGF0YShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfSlcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnN0YXRlLmNpdHlUb0JlU2VhcmNoZWQ7XG4gICAgdmFyIHByb3h5VXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLycsXG4gICAgICB0YXJnZXRVcmwgPSBgaHR0cHM6Ly93d3cubWV0YXdlYXRoZXIuY29tL2FwaS9sb2NhdGlvbi9zZWFyY2gvP3F1ZXJ5PSR7cXVlcnl9YDtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGZldGNoKHByb3h5VXJsICsgdGFyZ2V0VXJsKS50aGVuKHJlc3BvbnNlID0+XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+ICh7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzXG4gICAgICB9KVxuICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGxldCB3b2VpZCA9IHJlcy5kYXRhWzBdLndvZWlkO1xuICAgICAgICBmZXRjaChwcm94eVVybCArIGBodHRwczovL3d3dy5tZXRhd2VhdGhlci5jb20vYXBpL2xvY2F0aW9uLyR7d29laWR9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiAoe1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgfSkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBmb3JlY2FzdDogcmVzLmRhdGEuY29uc29saWRhdGVkX3dlYXRoZXIsXG4gICAgICAgICAgICAgIGNpdHk6IHJlcy5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIGFsZXJ0KCdjaXR5IGlzIG5vdCBmb3VuZCwgcGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFub3RoZXIgY2l0eScpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9yZWNhc3QsXG4gICAgICBjaXR5VG9CZVNlYXJjaGVkLFxuICAgICAgY2l0eSxcbiAgICAgIGlzTG9hZGluZ1xuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwic3Bpbm5lci1ib3JkZXJcIiwgc3R5bGUubG9hZGVyKX0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+V2VhdGhlciBmb3JlY2FzdDwvaDI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZldGNoRGF0YX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGNpdHkgbmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c30gdmFsdWU9e2NpdHlUb0JlU2VhcmNoZWR9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPkdldCBGb3JlY2FzdDwvYnV0dG9uPjxiciAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxGb3JlY2FzdCBmb3JlY2FzdD17Zm9yZWNhc3R9IGNpdHk9e2NpdHl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQTNGQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/* no static exports found */
/* exports used: default */
/*!******************************!*\
  !*** ./~/react-dom/index.js ***!
  \******************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sonia/Documents/SoniaRohaniApp/node_modules/react-dom/index.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/* exports provided: Forecast */
/* exports used: Forecast */
/*!*********************************!*\
  !*** ./client/src/Forecast.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_styles_css__ = __webpack_require__(/*! ../../css/styles.css */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_styles_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Forecast_utils__ = __webpack_require__(/*! ./utils/Forecast-utils */ 39);\n\n\n\n\n\nconst Forecast = props => {\n  let data = Array.from(props.forecast);\n  return __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n    'div',\n    { className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"data\"] },\n    data.map((temp, index) => {\n      return __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n        'div',\n        null,\n        index === 0 ? __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n          'div',\n          { className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"rightSpace\"] },\n          __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n            'div',\n            null,\n            props.city\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n            'div',\n            { className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"today\"] },\n            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_Forecast_utils__[\"a\" /* getDayName */])(temp.applicable_date)\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n            'div',\n            { className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"center\"] },\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"]('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_Forecast_utils__[\"b\" /* weatherState */])(temp.weather_state_name), className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"image\"] })\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              temp.the_temp.toFixed(2),\n              ' \\u2103'\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              temp.weather_state_name\n            )\n          )\n        ) : __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n          'div',\n          { className: index !== 1 ? __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"leftSpace\"] : '' },\n          __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n            'div',\n            null,\n            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_Forecast_utils__[\"a\" /* getDayName */])(temp.applicable_date)\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n            'div',\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"]('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_Forecast_utils__[\"b\" /* weatherState */])(temp.weather_state_name), className: __WEBPACK_IMPORTED_MODULE_1__css_styles_css__[\"image\"] })\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              temp.the_temp.toFixed(2),\n              ' \\u2103'\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              temp.weather_state_name\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              'Max: ',\n              temp.max_temp.toFixed(2)\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n              'div',\n              null,\n              'Min: ',\n              temp.min_temp.toFixed(2)\n            )\n          )\n        )\n      );\n    })\n  );\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Forecast;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL0ZvcmVjYXN0LmpzeD9kYzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4uLy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuaW1wb3J0IHtcbiAgZ2V0RGF5TmFtZSxcbiAgd2VhdGhlclN0YXRlXG59IGZyb20gXCIuL3V0aWxzL0ZvcmVjYXN0LXV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JlY2FzdCA9IChwcm9wcykgPT4ge1xuICBsZXQgZGF0YSA9IEFycmF5LmZyb20ocHJvcHMuZm9yZWNhc3QpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRhdGF9PlxuICAgICAge2RhdGEubWFwKCh0ZW1wLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW5kZXggPT09IDAgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRTcGFjZX0+XG4gICAgICAgICAgICAgICAgPGRpdj57cHJvcHMuY2l0eX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudG9kYXl9PntnZXREYXlOYW1lKHRlbXAuYXBwbGljYWJsZV9kYXRlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9e3dlYXRoZXJTdGF0ZSh0ZW1wLndlYXRoZXJfc3RhdGVfbmFtZSl9IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0ZW1wLnRoZV90ZW1wLnRvRml4ZWQoMil9IOKEgzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57dGVtcC53ZWF0aGVyX3N0YXRlX25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoaW5kZXggIT09IDEgPyBzdHlsZS5sZWZ0U3BhY2UgOiAnJyl9PlxuICAgICAgICAgICAgICAgIDxkaXY+e2dldERheU5hbWUodGVtcC5hcHBsaWNhYmxlX2RhdGUpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXt3ZWF0aGVyU3RhdGUodGVtcC53ZWF0aGVyX3N0YXRlX25hbWUpfSBjbGFzc05hbWU9e3N0eWxlLmltYWdlfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57dGVtcC50aGVfdGVtcC50b0ZpeGVkKDIpfSDihIM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3RlbXAud2VhdGhlcl9zdGF0ZV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5NYXg6IHt0ZW1wLm1heF90ZW1wLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pk1pbjoge3RlbXAubWluX3RlbXAudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9Gb3JlY2FzdC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSEE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQVpBO0FBeUJBO0FBNUJBO0FBK0JBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_jsx__ = __webpack_require__(/*! ./App.jsx */ 6);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom__[\"default\"].render(__WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](__WEBPACK_IMPORTED_MODULE_2__App_jsx__[\"a\" /* default */], null), document.getElementById('app'));\n\nwindow.relatedItems = __WEBPACK_IMPORTED_MODULE_2__App_jsx__[\"a\" /* default */];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2luZGV4LmpzeD9mNTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzeCdcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxud2luZG93LnJlbGF0ZWRJdGVtcyA9IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvaW5kZXguanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/* no static exports found */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/css-loader/dist/cjs.js?{"modules":true}!./css/styles.css ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../~/css-loader/dist/runtime/api.js */ 11)(false);\n// Module\nexports.push([module.i, \"._3igkpTNJ8owESNhhazb5u0 {\\n  width: 50%;\\n  padding: 12px 20px;\\n  display: inline-block;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  box-sizing: border-box;\\n}\\n\\nh2 { \\n  color: #050000; \\n  font-family: 'Lato', sans-serif;\\n  font-size: 54px;\\n  font-weight: 300; \\n  line-height: 58px; \\n  margin: 24px 0 58px;\\n  text-shadow: 2px 2px 2px rgba(206,89,55,0)\\n}\\n\\n._1bfvlc9h6hrJvqQLgqRcha { \\n  color: #080808; \\n  font-family: 'Lato', sans-serif;\\n  font-size: 35px;\\n  font-weight: 300; \\n  line-height: 58px; \\n  margin: 18px 0 18px;\\n  text-align: center;\\n}\\n\\n._1pZDSmrS7L8WgvHm-GI7IG {\\n  background-color: rgb(127, 136, 127);\\n  border: none;\\n  color: white;\\n  padding: 15px 32px;\\n  text-align: center;\\n  text-decoration: none;\\n  font-size: 16px;\\n  margin-top: 24px;\\n  cursor: pointer;\\n  transition-duration: 0.4s;\\n  display: flex;\\n  justify-content: center;  \\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\\n}\\n\\n._3xRVxPY9bV5qSovutU6Mrt {\\n  margin-top: 24px;\\n  text-align: center;\\n  display: flex;\\n  align-items: stretch; \\n}\\n\\n._2TnyNShIHjSo6MiJTgY4_r {\\n  font-weight: 400;\\n  font-size: 54px;\\n  color: rgb(252, 252, 252);\\n}\\n\\n._3yjKLsoYkg4jTCbT1auk0B {\\n  width: 50px;\\n}\\n\\n._1P60i-1mvAyNu6kEbc4UsO {\\n  text-align: center;\\n  font-size: 20px;\\n  font-weight: 300;\\n}\\n\\n._2pEAeRw_VQFpyq61ESZ5EN {\\n  padding-right: 24px;\\n}\\n\\n._1t3vrOdGb9WSSTyYdOuX3Z {\\n  padding-left: 24px;\\n}\\n\\n._1q6fhi9cQPa5iX9-OfrGzl {\\n  width: 100px;\\n  height: 100px;\\n  left: 50%;\\n  right: 50%;\\n  top: 50%;\\n  position: absolute;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"input\": \"_3igkpTNJ8owESNhhazb5u0\",\n\t\"title\": \"_1bfvlc9h6hrJvqQLgqRcha\",\n\t\"button\": \"_1pZDSmrS7L8WgvHm-GI7IG\",\n\t\"data\": \"_3xRVxPY9bV5qSovutU6Mrt\",\n\t\"today\": \"_2TnyNShIHjSo6MiJTgY4_r\",\n\t\"image\": \"_3yjKLsoYkg4jTCbT1auk0B\",\n\t\"center\": \"_1P60i-1mvAyNu6kEbc4UsO\",\n\t\"rightSpace\": \"_2pEAeRw_VQFpyq61ESZ5EN\",\n\t\"leftSpace\": \"_1t3vrOdGb9WSSTyYdOuX3Z\",\n\t\"loader\": \"_1q6fhi9cQPa5iX9-OfrGzl\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGVzLmNzcz8yMjk1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zaWdrcFROSjhvd0VTTmhoYXpiNXUwIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaDIgeyBcXG4gIGNvbG9yOiAjMDUwMDAwOyBcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDU0cHg7XFxuICBmb250LXdlaWdodDogMzAwOyBcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4OyBcXG4gIG1hcmdpbjogMjRweCAwIDU4cHg7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgyMDYsODksNTUsMClcXG59XFxuXFxuLl8xYmZ2bGM5aDZockp2cVFMZ3FSY2hhIHsgXFxuICBjb2xvcjogIzA4MDgwODsgXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxuICBsaW5lLWhlaWdodDogNThweDsgXFxuICBtYXJnaW46IDE4cHggMCAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uXzFwWkRTbXJTN0w4V2d2SG0tR0k3SUcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTM2LCAxMjcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweCAzMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xcbn1cXG5cXG4uXzN4UlZ4UFk5YlY1cVNvdnV0VTZNcnQge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDsgXFxufVxcblxcbi5fMlRueU5TaElIalNvNk1pSlRnWTRfciB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbiAgY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcXG59XFxuXFxuLl8zeWpLTHNvWWtnNGpUQ2JUMWF1azBCIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uXzFQNjBpLTFtdkF5TnU2a0ViYzRVc08ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLl8ycEVBZVJ3X1ZRRnB5cTYxRVNaNUVOIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxufVxcblxcbi5fMXQzdnJPZEdiOVdTU1R5WWRPdVgzWiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcblxcbi5fMXE2ZmhpOWNRUGE1aVg5LU9mckd6bCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5wdXRcIjogXCJfM2lna3BUTko4b3dFU05oaGF6YjV1MFwiLFxuXHRcInRpdGxlXCI6IFwiXzFiZnZsYzloNmhySnZxUUxncVJjaGFcIixcblx0XCJidXR0b25cIjogXCJfMXBaRFNtclM3TDhXZ3ZIbS1HSTdJR1wiLFxuXHRcImRhdGFcIjogXCJfM3hSVnhQWTliVjVxU292dXRVNk1ydFwiLFxuXHRcInRvZGF5XCI6IFwiXzJUbnlOU2hJSGpTbzZNaUpUZ1k0X3JcIixcblx0XCJpbWFnZVwiOiBcIl8zeWpLTHNvWWtnNGpUQ2JUMWF1azBCXCIsXG5cdFwiY2VudGVyXCI6IFwiXzFQNjBpLTFtdkF5TnU2a0ViYzRVc09cIixcblx0XCJyaWdodFNwYWNlXCI6IFwiXzJwRUFlUndfVlFGcHlxNjFFU1o1RU5cIixcblx0XCJsZWZ0U3BhY2VcIjogXCJfMXQzdnJPZEdiOVdTU1R5WWRPdVgzWlwiLFxuXHRcImxvYWRlclwiOiBcIl8xcTZmaGk5Y1FQYTVpWDktT2ZyR3psXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvZGlzdC9janMuanM/e1wibW9kdWxlc1wiOnRydWV9IS4vY3NzL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./~/css-loader/dist/runtime/api.js ***!
  \******************************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sonia/Documents/SoniaRohaniApp/node_modules/css-loader/dist/runtime/api.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */,
/* 13 */
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./~/node-fetch/browser.js ***!
  \*********************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sonia/Documents/SoniaRohaniApp/node_modules/node-fetch/browser.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/* no static exports found */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./~/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : null;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzPzJiMTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./client/src/weatherIcons/Hail.png ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"90a9b899aac4842cf99c908a37adc9f3.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9IYWlsLnBuZz80ZTA5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkwYTliODk5YWFjNDg0MmNmOTljOTA4YTM3YWRjOWYzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NyYy93ZWF0aGVySWNvbnMvSGFpbC5wbmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./client/src/weatherIcons/clear.png ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9b5585b9a7a4e623574beeef1c76db75.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9jbGVhci5wbmc/Yzg0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YjU1ODViOWE3YTRlNjIzNTc0YmVlZWYxYzc2ZGI3NS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9zcmMvd2VhdGhlckljb25zL2NsZWFyLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./client/src/weatherIcons/drizzle.png ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ea9c66459de29da8373f4b97ff132764.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9kcml6emxlLnBuZz85YzgwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhOWM2NjQ1OWRlMjlkYTgzNzNmNGI5N2ZmMTMyNzY0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NyYy93ZWF0aGVySWNvbnMvZHJpenpsZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./client/src/weatherIcons/heavy_rain.png ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"97c042fa0c4f37f7755903f16962aedc.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9oZWF2eV9yYWluLnBuZz9iM2FjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk3YzA0MmZhMGM0ZjM3Zjc3NTU5MDNmMTY5NjJhZWRjLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NyYy93ZWF0aGVySWNvbnMvaGVhdnlfcmFpbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./client/src/weatherIcons/light-cloud.png ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"12ec89b6685815f2a14297620b6e030e.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9saWdodC1jbG91ZC5wbmc/NTAzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMmVjODliNjY4NTgxNWYyYTE0Mjk3NjIwYjZlMDMwZS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9zcmMvd2VhdGhlckljb25zL2xpZ2h0LWNsb3VkLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./client/src/weatherIcons/showers.png ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c915629c780fb424af30858735c2510d.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9zaG93ZXJzLnBuZz82MDJlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM5MTU2MjljNzgwZmI0MjRhZjMwODU4NzM1YzI1MTBkLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NyYy93ZWF0aGVySWNvbnMvc2hvd2Vycy5wbmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./client/src/weatherIcons/sleet.png ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0614c7da3339eff8fe8d1317b1362b33.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9zbGVldC5wbmc/ZGFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNjE0YzdkYTMzMzllZmY4ZmU4ZDEzMTdiMTM2MmIzMy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9zcmMvd2VhdGhlckljb25zL3NsZWV0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./client/src/weatherIcons/snow.png ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2888699c58f527f17347749ff00abab2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9zbm93LnBuZz9lNTAwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI4ODg2OTljNThmNTI3ZjE3MzQ3NzQ5ZmYwMGFiYWIyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3NyYy93ZWF0aGVySWNvbnMvc25vdy5wbmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./client/src/weatherIcons/thunderstorm.png ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6047209432616246ba232ecc0c95c2fd.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy90aHVuZGVyc3Rvcm0ucG5nP2Q0MzciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjA0NzIwOTQzMjYxNjI0NmJhMjMyZWNjMGM5NWMyZmQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy90aHVuZGVyc3Rvcm0ucG5nXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./client/src/weatherIcons/clouds.png ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c10765fb22899c3fe8fd6fa2d7a3c283.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9jbG91ZHMucG5nPzg5YzQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzEwNzY1ZmIyMjg5OWMzZmU4ZmQ2ZmEyZDdhM2MyODMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvc3JjL3dlYXRoZXJJY29ucy9jbG91ZHMucG5nXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sonia/Documents/SoniaRohaniApp/node_modules/classnames/index.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/* exports provided: getDayName, weatherState */
/* exports used: getDayName, weatherState */
/*!********************************************!*\
  !*** ./client/src/utils/Forecast-utils.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const getDayName = dateStr => {\n  dateStr = dateStr.replace('-', '/');\n  let date = new Date(dateStr);\n  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thrusday', 'Friday', 'Saturday'];\n  return days[date.getDay()];\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getDayName;\n\n\nconst weatherState = name => {\n  if (name === 'Heavy Cloud') return __webpack_require__(/*! ../weatherIcons/clouds.png */ 37);\n  if (name === 'Snow') return __webpack_require__(/*! ../weatherIcons/snow.png */ 35);\n  if (name === 'Sleet') return __webpack_require__(/*! ../weatherIcons/sleet.png */ 34);\n  if (name === 'Hail') return __webpack_require__(/*! ../weatherIcons/Hail.png */ 28);\n  if (name === 'Thunderstorm') return __webpack_require__(/*! ../weatherIcons/thunderstorm.png */ 36);\n  if (name === 'Heavy Rain') return __webpack_require__(/*! ../weatherIcons/heavy_rain.png */ 31);\n  if (name === 'Light Rain') return __webpack_require__(/*! ../weatherIcons/drizzle.png */ 30);\n  if (name === 'Showers') return __webpack_require__(/*! ../weatherIcons/showers.png */ 33);\n  if (name === 'Clear') return __webpack_require__(/*! ../weatherIcons/clear.png */ 29);\n  if (name === 'Light Cloud') return __webpack_require__(/*! ../weatherIcons/light-cloud.png */ 32);\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = weatherState;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy91dGlscy9Gb3JlY2FzdC11dGlscy5qcz81YzA3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXREYXlOYW1lID0gZGF0ZVN0ciA9PiB7XG4gIGRhdGVTdHIgPSBkYXRlU3RyLnJlcGxhY2UoJy0nLCAnLycpXG4gIGxldCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGxldCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbnNkYXknLCAnVGhydXNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldXG59XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyU3RhdGUgPSBuYW1lID0+IHtcbiAgaWYgKG5hbWUgPT09ICdIZWF2eSBDbG91ZCcpIHJldHVybiByZXF1aXJlKCcuLi93ZWF0aGVySWNvbnMvY2xvdWRzLnBuZycpXG4gIGlmIChuYW1lID09PSAnU25vdycpIHJldHVybiByZXF1aXJlKCcuLi93ZWF0aGVySWNvbnMvc25vdy5wbmcnKVxuICBpZiAobmFtZSA9PT0gJ1NsZWV0JykgcmV0dXJuIHJlcXVpcmUoJy4uL3dlYXRoZXJJY29ucy9zbGVldC5wbmcnKVxuICBpZiAobmFtZSA9PT0gJ0hhaWwnKSByZXR1cm4gcmVxdWlyZSgnLi4vd2VhdGhlckljb25zL0hhaWwucG5nJylcbiAgaWYgKG5hbWUgPT09ICdUaHVuZGVyc3Rvcm0nKSByZXR1cm4gcmVxdWlyZSgnLi4vd2VhdGhlckljb25zL3RodW5kZXJzdG9ybS5wbmcnKVxuICBpZiAobmFtZSA9PT0gJ0hlYXZ5IFJhaW4nKSByZXR1cm4gcmVxdWlyZSgnLi4vd2VhdGhlckljb25zL2hlYXZ5X3JhaW4ucG5nJylcbiAgaWYgKG5hbWUgPT09ICdMaWdodCBSYWluJykgcmV0dXJuIHJlcXVpcmUoJy4uL3dlYXRoZXJJY29ucy9kcml6emxlLnBuZycpXG4gIGlmIChuYW1lID09PSAnU2hvd2VycycpIHJldHVybiByZXF1aXJlKCcuLi93ZWF0aGVySWNvbnMvc2hvd2Vycy5wbmcnKVxuICBpZiAobmFtZSA9PT0gJ0NsZWFyJykgcmV0dXJuIHJlcXVpcmUoJy4uL3dlYXRoZXJJY29ucy9jbGVhci5wbmcnKVxuICBpZiAobmFtZSA9PT0gJ0xpZ2h0IENsb3VkJykgcmV0dXJuIHJlcXVpcmUoJy4uL3dlYXRoZXJJY29ucy9saWdodC1jbG91ZC5wbmcnKSAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvdXRpbHMvRm9yZWNhc3QtdXRpbHMuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ })
/******/ ]);