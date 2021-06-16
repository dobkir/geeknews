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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/assets/js/header.js\");\n\r\n\r\nObject(_header__WEBPACK_IMPORTED_MODULE_0__[\"header\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n\r\n\r\n//================ Search field on the header ================//\r\nconst searchIcon = document.querySelector('.search__icon');\r\nconst searchField = document.querySelector('.search__field');\r\nconst searchInput = document.querySelector('.search__field input[type=text]');\r\n//================ End of search field on the header ================//\r\n\r\n//================ Mobile navigation ================//\r\nconst mobileMenuButton = document.querySelector('.menu__mobile--button');\r\nconst barsIcon = document.querySelector('.bars');\r\nconst crossIcon = document.querySelector('.cross');\r\nconst mainMenu = document.querySelector('.menu__main');\r\n//================ End of Mobile navigation ================//\r\n\r\nconst toggleButtons = [searchIcon, mobileMenuButton];\r\nconst elements = [searchField, mainMenu];\r\n\r\n//================ Functions for work with events ================//\r\n\r\nconst showElement = (element) => {\r\n\r\n  /**\r\n   * set the visibility to the element\r\n   */\r\n  element.classList.remove('hidden');\r\n\r\n  /**\r\n   * if an element has an input field, focus on it\r\n   */\r\n  if (element == searchField) {\r\n    return searchInput.focus();\r\n  }\r\n  return element;\r\n}\r\n\r\nconst hiddenElement = (element) => {\r\n\r\n  /**\r\n   * remove the visibility of the element\r\n   */\r\n  element.classList.add('hidden');\r\n\r\n  /**\r\n   *  if an element has an input field, remove focus from it\r\n   * and clear its value\r\n   */\r\n  if (element == searchField) {\r\n    searchInput.blur();\r\n    searchInput.value = '';\r\n  }\r\n  return element;\r\n}\r\n\r\n/**\r\n * If the clicked button is mobileMenuButton, show barsIcon,\r\n * and hidden crossIcon. \r\n */\r\nconst showBarsIcon = (toggleButton) => {\r\n  if (toggleButton === mobileMenuButton) {\r\n    barsIcon.classList.remove('hidden');\r\n    crossIcon.classList.add('hidden');\r\n  }\r\n  return barsIcon;\r\n}\r\n\r\n/**\r\n * If the clicked button is mobileMenuButton, show crossIcon,\r\n * and hidden barsIcon.\r\n */\r\nconst showCrosssIcon = (toggleButton) => {\r\n  if (toggleButton === mobileMenuButton) {\r\n    barsIcon.classList.add('hidden');\r\n    crossIcon.classList.remove('hidden');\r\n  }\r\n  return crossIcon;\r\n}\r\n\r\n/**\r\n * Toggle visibility of the element by clicking to toggle button\r\n */\r\nconst toggleVisibilityByButton = (toggleButton, element) => {\r\n  toggleButton.addEventListener('click', () => {\r\n    if (element.classList.contains('hidden')) {\r\n      showCrosssIcon(toggleButton);\r\n      showElement(element);\r\n    } else {\r\n      showBarsIcon(toggleButton);\r\n      hiddenElement(element);\r\n    }\r\n    return element;\r\n  })\r\n}\r\n\r\n/**\r\n * Remove the visibility of the element by pressing 'Escape' on the keyboard\r\n */\r\nconst hiddenByEscapeKey = (element) => {\r\n  document.addEventListener('keydown', (event) => {\r\n    if (event.keyCode === 27) {\r\n      showBarsIcon(mobileMenuButton);\r\n      hiddenElement(element);\r\n    }\r\n    return element;\r\n  })\r\n}\r\n\r\n/**\r\n * Remove the visibility of the element by clicking\r\n * anywhere but only not on element or toggle button\r\n */\r\nconst hiddenByClickAnywhere = (toggleButton, element) => {\r\n  document.addEventListener('click', (event) => {\r\n    if (!element.contains(event.target) && !toggleButton.contains(event.target)) {\r\n      showBarsIcon(toggleButton);\r\n      hiddenElement(element);\r\n    }\r\n    return element;\r\n  })\r\n}\r\n\r\n//================ End of Functions for work with events ================//\r\n\r\n/**\r\n * Heandel function for toggle elements \r\n * on Header page\r\n */\r\nfunction header() {\r\n\r\n  toggleButtons.forEach(button => {\r\n\r\n    elements.forEach(element => {\r\n\r\n      if (button.id === element.id) {\r\n        toggleVisibilityByButton(button, element);\r\n        hiddenByClickAnywhere(button, element);\r\n        hiddenByEscapeKey(element);\r\n        return true;\r\n      }\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/header.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/header.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\www\\news_site_on_jequill\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\www\\news_site_on_jequill\\src\\assets\\js\\header.js */\"./src/assets/js/header.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/header.js?");

/***/ })

/******/ });