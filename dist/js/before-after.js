/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("BeforeAfter", [], factory);
	else if(typeof exports === 'object')
		exports["BeforeAfter"] = factory();
	else
		root["BeforeAfter"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/buildOut.js":
/*!****************************!*\
  !*** ./src/js/buildOut.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElement */ \"./src/js/getElement.js\");\n/* harmony import */ var _css_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-names */ \"./src/js/css-names.js\");\n\n\n\nfunction getContainerClassName() {\n  switch (this.options.direction) {\n    case 'horizontal':\n      return _css_names__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_HORIZONTAL_CLASS_NAME;\n      break;\n\n    case 'diagonal':\n      return _css_names__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_DIAGONAL_CLASS_NAME;\n      break;\n\n    case 'square':\n      return _css_names__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_SQUARE_CLASS_NAME;\n      break;\n\n    case 'vertical':\n    default:\n      return _css_names__WEBPACK_IMPORTED_MODULE_1__.CONTAINER_CLASS_NAME;\n  }\n}\n\nfunction build(resolve, reject) {\n  var _this = this;\n\n  this.container = (0,_getElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.options.container) || false;\n\n  if (this.container) {\n    this.container.className = getContainerClassName.call(this);\n    if (this.options.className) this.container.className += \" \".concat(this.options.className);\n    this.beforeWrapper = document.createElement('DIV');\n    this.beforeWrapper.className = _css_names__WEBPACK_IMPORTED_MODULE_1__.BEFORE_WRAPPER_CLASS_NAME;\n    this.beforeElement = document.createElement('IMG');\n    this.beforeElement.src = this.container.getAttribute('data-before');\n    this.beforeWrapper.append(this.beforeElement);\n    this.afterWrapper = document.createElement('DIV');\n    this.afterWrapper.className = _css_names__WEBPACK_IMPORTED_MODULE_1__.AFTER_WRAPPER_CLASS_NAME;\n    this.afterElement = document.createElement('IMG');\n    this.afterElement.src = this.container.getAttribute('data-after');\n    this.afterWrapper.append(this.afterElement);\n    this.separator = document.createElement('DIV');\n    this.separator.className = _css_names__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_ELEMENT_CLASS_NAME;\n    if (this.options.separator && this.options.separator[\"class\"]) this.separator.className += \" \".concat(this.options.separator[\"class\"]);\n    if (this.options.separator && this.options.separator.innerHTML) this.separator.innerHTML += \" \".concat(this.options.separator.innerHTML);\n    this.container.append(this.beforeWrapper, this.afterWrapper, this.separator);\n    if (this.options.separator.innerHTML) this.separatorChildren = Array.prototype.slice.call(this.separator.children);\n    var imgs = [this.beforeElement, this.afterElement];\n    imgs.forEach(function (img) {\n      function onResolve(response) {\n        if (response) {\n          img.removeEventListener('load', onLoadBind);\n          this.emit('buildOut');\n          resolve();\n        } else {\n          img.removeEventListener('error', onErrorBind);\n          this.emit('buildOut');\n          reject(img.src);\n        }\n      }\n\n      function onLoad() {\n        if (checkComplete(imgs)) onResolve.call(this, true);\n      }\n\n      function onError() {\n        onResolve.call(this, false);\n      }\n\n      var onLoadBind = onLoad.bind(_this);\n      img.addEventListener('load', onLoadBind);\n      var onErrorBind = onError.bind(_this);\n      img.addEventListener('error', onErrorBind);\n    });\n  }\n}\n\nfunction checkComplete(imgs) {\n  return imgs.length === imgs.reduce(function (prev, cur) {\n    return cur.complete ? prev + 1 : prev;\n  }, 0);\n}\n\nfunction buildOut() {\n  return new Promise(build.bind(this));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildOut);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/buildOut.js?");

/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buildOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildOut */ \"./src/js/buildOut.js\");\n/* harmony import */ var _css_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-names */ \"./src/js/css-names.js\");\n/* harmony import */ var _helpers_sendError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/sendError */ \"./src/js/helpers/sendError.js\");\n/* harmony import */ var _helpers_setSizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/setSizes */ \"./src/js/helpers/setSizes.js\");\n/* harmony import */ var _event_handlers_mouseMoveHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handlers/mouseMoveHandler */ \"./src/js/event-handlers/mouseMoveHandler.js\");\n/* harmony import */ var _helpers_extendDefaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/extendDefaults */ \"./src/js/helpers/extendDefaults.js\");\n/* harmony import */ var _document_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document-emitter */ \"./src/js/document-emitter.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\nfunction BeforeAfter() {\n  this.container = null;\n  this.beforeWrapper = null;\n  this.afterWrapper = null;\n  this.separatorElement = null;\n  this.separatorChildren = null;\n  this.mouseScreenX = null;\n  this.eventsListeners = {};\n  var defaults = {\n    direction: 'vertical',\n    test: true,\n    freePosition: false,\n    init: true,\n    separator: {\n      activeClass: _css_names__WEBPACK_IMPORTED_MODULE_1__.SEPARATOR_ACTIVE_CLASS_NAME\n    }\n  };\n\n  if (arguments[0] && _typeof(arguments[0]) === \"object\") {\n    this.options = (0,_helpers_extendDefaults__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(defaults, arguments[0]);\n  }\n\n  var mouseMoveHandlerBind = _event_handlers_mouseMoveHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].bind(this);\n  var $ = this;\n\n  function mouseDownHandler(event) {\n    console.log('down');\n    var isSeparatorChildren = $.separatorChildren && $.separatorChildren.includes(event.target);\n\n    if ($.options.freePosition) {\n      if (event.target === $.container || isSeparatorChildren || event.target === $.separator) {\n        mouseMoveHandlerBind(event);\n        _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on('mousemove', mouseMoveHandlerBind);\n      }\n    } else if (event.target === $.separator || isSeparatorChildren) {\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on('mousemove', mouseMoveHandlerBind);\n    }\n  }\n\n  function mouseUpHandler(event) {\n    console.log('up');\n    _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].removeOn('mousemove', mouseMoveHandlerBind);\n    $.separator.classList.remove($.options.separator.activeClass);\n  }\n\n  this.init = function () {\n    var _this = this;\n\n    _buildOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call($).then(function () {\n      if (!$.container) return (0,_helpers_sendError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('container not found');\n      _helpers_setSizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].call($);\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on('mousedown', mouseDownHandler);\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on('mouseup', mouseUpHandler);\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on('resize', _helpers_setSizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind($));\n    })[\"catch\"](function (src) {\n      _this.destroy();\n\n      return (0,_helpers_sendError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(src + ' image unable to download');\n    });\n  };\n\n  this.destroy = function () {\n    if ($.container) {\n      $.container.innerHTML = '';\n      $.container.removeAttribute('class');\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].removeOn('mousedown', mouseDownHandler);\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].removeOn('mouseup', mouseUpHandler);\n      _document_emitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].removeOn('resize', _helpers_setSizes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind($));\n    }\n\n    $.emit('destroy');\n  };\n\n  if (this.options.init) this.init();\n} // emmitter\n\n\nBeforeAfter.prototype.on = function (name, listener) {\n  if (!this.eventsListeners[name]) {\n    this.eventsListeners[name] = [];\n  }\n\n  this.eventsListeners[name].push(listener);\n};\n\nBeforeAfter.prototype.removeOn = function (name, listenerToRemove) {\n  if (!this.eventsListeners[name]) {\n    return (0,_helpers_sendError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Can't remove a listener. Event \\\"\" + name + \"\\\" doesn't exits.\");\n  }\n\n  function filterListeners(listener) {\n    return listener !== listenerToRemove;\n  }\n\n  this.eventsListeners[name] = this.eventsListeners[name].filter(filterListeners);\n};\n\nBeforeAfter.prototype.emit = function (name, data) {\n  if (!this.eventsListeners[name]) return;\n\n  function fireCallbacks(callback) {\n    callback(data);\n  }\n\n  this.eventsListeners[name].forEach(fireCallbacks);\n};\n\nBeforeAfter.prototype.test = function (name, listener) {\n  console.log(this.options);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeforeAfter);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/core.js?");

/***/ }),

/***/ "./src/js/css-names.js":
/*!*****************************!*\
  !*** ./src/js/css-names.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SCROLL_DISABLE_CLASS_NAME\": () => (/* binding */ SCROLL_DISABLE_CLASS_NAME),\n/* harmony export */   \"PLUGIN_CSS_NAME\": () => (/* binding */ PLUGIN_CSS_NAME),\n/* harmony export */   \"CONTAINER_CLASS_NAME\": () => (/* binding */ CONTAINER_CLASS_NAME),\n/* harmony export */   \"CONTAINER_HORIZONTAL_CLASS_NAME\": () => (/* binding */ CONTAINER_HORIZONTAL_CLASS_NAME),\n/* harmony export */   \"CONTAINER_DIAGONAL_CLASS_NAME\": () => (/* binding */ CONTAINER_DIAGONAL_CLASS_NAME),\n/* harmony export */   \"CONTAINER_SQUARE_CLASS_NAME\": () => (/* binding */ CONTAINER_SQUARE_CLASS_NAME),\n/* harmony export */   \"BEFORE_WRAPPER_CLASS_NAME\": () => (/* binding */ BEFORE_WRAPPER_CLASS_NAME),\n/* harmony export */   \"AFTER_WRAPPER_CLASS_NAME\": () => (/* binding */ AFTER_WRAPPER_CLASS_NAME),\n/* harmony export */   \"AFTER_ELEMENT_CLASS_NAME\": () => (/* binding */ AFTER_ELEMENT_CLASS_NAME),\n/* harmony export */   \"SEPARATOR_ELEMENT_CLASS_NAME\": () => (/* binding */ SEPARATOR_ELEMENT_CLASS_NAME),\n/* harmony export */   \"SEPARATOR_ACTIVE_CLASS_NAME\": () => (/* binding */ SEPARATOR_ACTIVE_CLASS_NAME)\n/* harmony export */ });\nvar SCROLL_DISABLE_CLASS_NAME = 'stop-scroll';\nvar PLUGIN_CSS_NAME = 'before-after';\nvar CONTAINER_CLASS_NAME = PLUGIN_CSS_NAME; // + '-container';\n\nvar CONTAINER_HORIZONTAL_CLASS_NAME = PLUGIN_CSS_NAME + ' horizontal'; //'-container-horizontal';\n\nvar CONTAINER_DIAGONAL_CLASS_NAME = PLUGIN_CSS_NAME + ' diagonal';\nvar CONTAINER_SQUARE_CLASS_NAME = PLUGIN_CSS_NAME + ' square';\nvar BEFORE_WRAPPER_CLASS_NAME = PLUGIN_CSS_NAME + '-wrapper-before';\nvar AFTER_WRAPPER_CLASS_NAME = PLUGIN_CSS_NAME + '-wrapper-after';\nvar AFTER_ELEMENT_CLASS_NAME = PLUGIN_CSS_NAME + '-element-after';\nvar SEPARATOR_ELEMENT_CLASS_NAME = PLUGIN_CSS_NAME + '-separator';\nvar SEPARATOR_ACTIVE_CLASS_NAME = PLUGIN_CSS_NAME + '-active-separator';\n\n//# sourceURL=webpack://BeforeAfter/./src/js/css-names.js?");

/***/ }),

/***/ "./src/js/document-emitter.js":
/*!************************************!*\
  !*** ./src/js/document-emitter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction DocumentEmitter() {\n  var $ = this;\n  $.isContainerMove = false;\n\n  $.setContainerMove = function (val) {\n    $.isContainerMove = val;\n  }; // emmitter\n\n\n  $.eventsListeners = {};\n\n  $.on = function (name, listener) {\n    if (!$.eventsListeners[name]) {\n      $.eventsListeners[name] = [];\n    }\n\n    $.eventsListeners[name].push(listener);\n  };\n\n  $.removeOn = function (name, listenerToRemove) {\n    if (!$.eventsListeners[name]) return;\n\n    function filterListeners(listener) {\n      return listener !== listenerToRemove;\n    }\n\n    $.eventsListeners[name] = $.eventsListeners[name].filter(filterListeners);\n  };\n\n  $.emit = function (name, data) {\n    if (!$.eventsListeners[name]) return;\n\n    function fireCallbacks(callback) {\n      callback(data);\n    }\n\n    $.eventsListeners[name].forEach(fireCallbacks);\n  }; // emmitter\n\n\n  function resize() {\n    $.emit('resize');\n  }\n\n  function mouseup(event) {\n    $.isContainerMove = false;\n    $.emit('mouseup', event);\n  }\n\n  function mousedown(event) {\n    $.emit('mousedown', event);\n  }\n\n  function mousemove(event) {\n    // onscroll();\n    $.emit('mousemove', event);\n  }\n\n  document.addEventListener('mousedown', mousedown);\n  document.addEventListener('mouseup', mouseup);\n  document.addEventListener('mousemove', mousemove);\n  document.addEventListener('touchstart', mousedown);\n  document.addEventListener('touchend', mouseup);\n  document.addEventListener('touchcancel', mouseup);\n  document.addEventListener('touchmove', mousemove);\n\n  function onscroll(event) {\n    return $.isContainerMove ? event.preventDefault() : false;\n  }\n\n  window.addEventListener('touchmove', onscroll, {\n    passive: false\n  });\n  window.addEventListener('resize', resize);\n} // export default DocumentEmitter;\n\n\nvar $doc = new DocumentEmitter();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($doc);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/document-emitter.js?");

/***/ }),

/***/ "./src/js/event-handlers/mouseMoveHandler.js":
/*!***************************************************!*\
  !*** ./src/js/event-handlers/mouseMoveHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_disableScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/disableScroll */ \"./src/js/helpers/disableScroll.js\");\n/* harmony import */ var _document_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document-emitter */ \"./src/js/document-emitter.js\");\n\n\n\nfunction mouseMoveHandler(event) {\n  if (event.touches) {\n    _document_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setContainerMove(true);\n  }\n\n  var top = this.container.offsetTop;\n  var bottom = top + this.container.offsetHeight;\n  var posY;\n  var posX;\n\n  if (event.pageY) {\n    posY = event.pageY;\n    posX = event.pageX;\n  }\n\n  if (event.touches) {\n    posY = event.touches[0].pageY;\n    posX = event.touches[0].pageX;\n  }\n\n  posY = posY - top;\n\n  if (this.options.direction === 'vertical') {\n    this.separator.classList.add(this.options.separator.activeClass);\n\n    if (posX > 0) {\n      if (posX < this.container.offsetWidth) {\n        this.separator.style.cssText = \"left: \".concat(posX, \"px;\");\n        this.beforeWrapper.style.cssText = \"width: \".concat(posX, \"px;\");\n      } else {\n        this.separator.style.cssText = \"left: \".concat(this.container.offsetWidth, \"px;\");\n        this.beforeWrapper.style.cssText = \"width: \".concat(this.container.offsetWidth, \"px;\");\n      }\n    } else {\n      this.beforeWrapper.style.cssText = 'width: 0px;';\n      this.separator.style.cssText = 'left: 0px;';\n    }\n  }\n\n  if (this.options.direction === 'horizontal') {\n    console.log(posY);\n    this.separator.classList.add(this.options.separator.activeClass);\n\n    if (posY > 0) {\n      console.log('posY > 0');\n\n      if (posY < this.container.offsetHeight) {\n        console.log('posY < this.container.offsetHeight');\n        this.beforeWrapper.style.cssText = \"height: \".concat(posY, \"px;\");\n        this.separator.style.cssText = \"top: \".concat(posY, \"px;\");\n      } else {\n        this.beforeWrapper.style.cssText = \"height: \".concat(this.container.offsetHeight, \"px;\");\n        this.separator.style.cssText = \"top: \".concat(this.container.offsetHeight, \"px;\");\n      }\n    } else {\n      console.log('posY < 0');\n      this.beforeWrapper.style.cssText = 'height: 0px;';\n      this.separator.style.cssText = 'top: 0px;';\n    }\n  }\n\n  if (this.options.direction === 'diagonal') {\n    var h = this.container.offsetHeight;\n    var w = this.container.offsetWidth;\n    var posYm = h * posX / w;\n    var posXm = posY * w / h; // console.log(posY)\n\n    posX = (posX + posXm) / 2;\n    posY = (posY + posYm) / 2;\n    this.separator.classList.add(this.options.separator.activeClass);\n\n    if (posX > 0) {\n      if (posX < this.container.offsetWidth) {\n        this.separator.style.left = \"\".concat(posX, \"px\");\n        this.beforeWrapper.style.width = \"\".concat(2 * posX, \"px\");\n      } else {\n        this.separator.style.left = \"\".concat(this.container.offsetWidth, \"px\");\n        this.beforeWrapper.style.width = \"\".concat(2 * this.container.offsetWidth, \"px\");\n      }\n    } else {\n      this.beforeWrapper.style.width = '0px';\n      this.separator.style.left = '0px';\n    }\n\n    if (posY > 0) {\n      if (posY < this.container.offsetHeight) {\n        // this.beforeWrapper.style.height = `${posY}px`;\n        this.separator.style.top = \"\".concat(posY, \"px\");\n      } else {\n        // this.beforeWrapper.style.height = `${this.container.offsetHeight}px`;\n        this.separator.style.top = \"\".concat(this.container.offsetHeight, \"px\");\n      }\n    } else {\n      // this.beforeWrapper.style.height = '0px;';\n      this.separator.style.top = '0px';\n    }\n  }\n\n  if (this.options.direction === 'square') {\n    var _top = this.container.offsetTop;\n\n    var _bottom = _top + this.container.offsetHeight;\n\n    var _posY;\n\n    var _posX;\n\n    if (event.pageY) {\n      _posY = event.pageY;\n      _posX = event.pageX;\n    }\n\n    if (event.touches) {\n      _posY = event.touches[0].pageY;\n      _posX = event.touches[0].pageX;\n    }\n\n    _posY = _posY - _top;\n    this.separator.classList.add(this.options.separator.activeClass);\n\n    if (_posX > 0) {\n      if (_posX < this.container.offsetWidth) {\n        this.separator.style.left = \"\".concat(_posX, \"px\");\n        this.beforeWrapper.style.width = \"\".concat(_posX, \"px\");\n      } else {\n        this.separator.style.left = \"\".concat(this.container.offsetWidth, \"px\");\n        this.beforeWrapper.style.width = \"\".concat(this.container.offsetWidth, \"px\");\n      }\n    } else {\n      this.beforeWrapper.style.width = '0px';\n      this.separator.style.left = '0px';\n    }\n\n    if (_posY > 0) {\n      if (_posY < this.container.offsetHeight) {\n        this.beforeWrapper.style.height = \"\".concat(_posY, \"px\");\n        this.separator.style.top = \"\".concat(_posY, \"px\");\n      } else {\n        this.beforeWrapper.style.height = \"\".concat(this.container.offsetHeight, \"px\");\n        this.separator.style.top = \"\".concat(this.container.offsetHeight, \"px\");\n      }\n    } else {\n      this.beforeWrapper.style.height = '0px;';\n      this.separator.style.top = '0px';\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseMoveHandler);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/event-handlers/mouseMoveHandler.js?");

/***/ }),

/***/ "./src/js/getElement.js":
/*!******************************!*\
  !*** ./src/js/getElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getElement(option) {\n  if (option) {\n    if (option.nodeType) {\n      return option;\n    } else if (typeof option === 'string') {\n      return document.querySelector(arguments[0]);\n    }\n  }\n\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElement);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/getElement.js?");

/***/ }),

/***/ "./src/js/helpers/disableScroll.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/disableScroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-names */ \"./src/js/css-names.js\");\n\n\nfunction disableScroll() {\n  document.documentElement.classList.add(_css_names__WEBPACK_IMPORTED_MODULE_0__.SCROLL_DISABLE_CLASS_NAME);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disableScroll);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/helpers/disableScroll.js?");

/***/ }),

/***/ "./src/js/helpers/extendDefaults.js":
/*!******************************************!*\
  !*** ./src/js/helpers/extendDefaults.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isObject(item) {\n  return item && _typeof(item) === 'object' && !Array.isArray(item) && !item.nodeType;\n}\n\nfunction extendDefaults(source, props) {\n  if (!isObject(source) || !isObject(props)) {\n    return props;\n  }\n\n  Object.keys(props).forEach(function (key) {\n    var sourceValue = source[key];\n    var propsValue = props[key];\n\n    if (Array.isArray(sourceValue) && Array.isArray(propsValue)) {\n      source[key] = sourceValue.concat(propsValue);\n    } else if (isObject(sourceValue) && isObject(propsValue)) {\n      source[key] = extendDefaults(Object.assign({}, sourceValue), propsValue);\n    } else {\n      source[key] = propsValue;\n    }\n  });\n  return source;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendDefaults);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/helpers/extendDefaults.js?");

/***/ }),

/***/ "./src/js/helpers/sendError.js":
/*!*************************************!*\
  !*** ./src/js/helpers/sendError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sendError(message) {\n  console.error('BeforeAfter Error: ' + message);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendError);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/helpers/sendError.js?");

/***/ }),

/***/ "./src/js/helpers/setSizes.js":
/*!************************************!*\
  !*** ./src/js/helpers/setSizes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setSizes() {\n  if (this.options.width) this.container.style.width = this.options.width + 'px';\n  if (this.options.height) this.container.style.height = this.options.height + 'px';\n\n  switch (this.options.direction) {\n    case 'horizontal':\n      console.log(this.container.offsetHeight / 2);\n      this.beforeWrapper.style.cssText = \"height: \".concat(this.container.offsetHeight / 2, \"px;\");\n      this.beforeElement.style.height = this.container.offsetHeight + 'px';\n      this.separator.style.cssText = \"top: \".concat(this.container.offsetHeight / 2, \"px;\");\n      break;\n\n    case 'diagonal':\n      // const deg = -45;\n      var w = this.container.offsetWidth;\n      var h = this.container.offsetHeight;\n      var dw = Math.sqrt(w * w + h * h);\n      var a = 2 * Math.atan(w / h) * 180 / Math.PI;\n      var b = Math.atan(h / w) * 180 / Math.PI;\n      var deg = -(90 - Math.atan(h / w) * 180 / Math.PI);\n      var deg2 = deg * -1;\n      var sepDeg = a + b;\n      var center = {\n        x: w / 2,\n        y: h / 2\n      };\n      this.beforeWrapper.style.cssText = \"\\n                width: \".concat(w, \"px;\\n                height: \").concat(h, \"px;\\n                overflow: hidden;\\n                position: absolute;\\n                top: 0;\\n                left: 0;\\n                transform-origin: 100% 0;\\n                transform: skewX(\").concat(deg, \"deg);\\n            \");\n      this.beforeElement.style.cssText = \"\\n                width: \".concat(w, \"px;\\n                transform-origin: inherit;\\n                transform: skewX(\").concat(deg2, \"deg);\\n            \"); // this.beforeWrapper.style.cssText = `\n      //     height: ${this.container.offsetHeight}px;\n      //     width: ${this.container.offsetWidth}px;\n      //     -webkit-clip-path: polygon(0 0, 0 ${this.container.offsetHeight}px, ${this.container.offsetWidth/4}px ${this.container.offsetHeight}px, ${3*this.container.offsetWidth/4}px 0);\n      //     clip-path: polygon(0 0, 0 ${this.container.offsetHeight}px, ${this.container.offsetWidth/4}px ${this.container.offsetHeight}px, ${3*this.container.offsetWidth/4}px 0);\n      // `;\n      // this.beforeElement.style.height = this.container.offsetHeight + 'px';\n\n      this.separator.style.cssText = \"\\n                width: \".concat(dw, \"px;\\n                top: \").concat(this.container.offsetHeight / 2, \"px;\\n                left: \").concat(this.container.offsetWidth / 2, \"px;\\n                transform: translate(-50%,-50%) rotate(\").concat(sepDeg, \"deg)\\n            \");\n      break;\n\n    case 'vertical':\n    default:\n      this.beforeWrapper.style.cssText = \"width: \".concat(this.container.offsetWidth / 2, \"px;\");\n      this.separator.style.cssText = \"left: \".concat(this.container.offsetWidth / 2, \"px;\");\n      break;\n  } // this.beforeElement.style.width = this.container.offsetWidth + 'px';\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSizes);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/helpers/setSizes.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../less/index.less */ \"./src/less/index.less\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ \"./src/js/core.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://BeforeAfter/./src/js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".stop-scroll {\\n  height: 100%;\\n  overflow: hidden;\\n}\\nimg {\\n  vertical-align: middle;\\n}\\n.before-after {\\n  position: relative;\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n  user-select: none;\\n}\\n.before-after-wrapper-before,\\n.before-after-wrapper-after,\\n.before-after-element-after {\\n  pointer-events: none;\\n}\\n.before-after-wrapper-before {\\n  width: 50%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  overflow: hidden;\\n  left: 0;\\n  z-index: 2;\\n}\\n.before-after-wrapper-before img {\\n  height: 100%;\\n}\\n.before-after-element-after {\\n  width: 100%;\\n  height: 100%;\\n}\\n.before-after-wrapper-after img {\\n  width: 100%;\\n}\\n.before-after-separator {\\n  width: 10px;\\n  height: 100%;\\n  transform: translateX(-50%);\\n  background-color: #333333;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 3;\\n  transition: opacity 0.4s linear;\\n}\\n.before-after-separator.before-after-active-separator {\\n  opacity: 0;\\n  transition: opacity 0.4s linear;\\n}\\n.before-after.horizontal .before-after-wrapper-before {\\n  width: 100%;\\n  height: 50%;\\n}\\n.before-after.horizontal .before-after-wrapper-before img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.before-after.horizontal .before-after-separator {\\n  width: 100%;\\n  height: 10px;\\n  transform: translateY(-50%);\\n  background-color: #333333;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 3;\\n  transition: opacity 0.4s linear;\\n}\\n.before-after.horizontal .before-after-separator.before-after-active-separator {\\n  opacity: 0;\\n  transition: opacity 0.4s linear;\\n}\\n.before-after.diagonal .before-after-separator {\\n  width: 100%;\\n  height: 10px;\\n  transform: translate(-50%, -50%);\\n  background-color: #333333;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 3;\\n  transition: opacity 0.4s linear;\\n}\\n.before-after.diagonal .before-after-separator.before-after-active-separator {\\n  opacity: 0;\\n  transition: opacity 0.4s linear;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://BeforeAfter/./src/less/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/less/index.less":
/*!*****************************!*\
  !*** ./src/less/index.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://BeforeAfter/./src/less/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://BeforeAfter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});