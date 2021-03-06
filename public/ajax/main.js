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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ajax/main-ajax.js":
/*!*******************************!*\
  !*** ./src/ajax/main-ajax.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
$.ajax({
  url: 'dischi.php',
  type: 'GET',
  success: function success(data) {
    var dataParse = jQuery.parseJSON(data);

    for (var i = 0; i < dataParse.length; i++) {
      var author = dataParse[i].author;
      var genre = dataParse[i].genre;
      var poster = dataParse[i].poster;
      var title = dataParse[i].title;
      var year = dataParse[i].year;
      console.log(author);
      var context = {
        "poster": poster,
        "title": title,
        "author": author,
        "genre": genre,
        "year": year
      };
      var html = template(context);
      $("main").append(html);
    }
  },
  error: function error() {
    alert("Si è verificato un errore");
  }
});
$("#dropdown").click(mostraGeneri);
$("#artist").click(mostraArtisti);
$(".dropdown ul li, #artist, main, .logo, .user").click(nascondiGeneri);
$(".dropdown-artist ul li, #dropdown, main, .logo, .user").click(nascondiArtisti);
$(".dropdown ul li, .dropdown-artist ul li").click(leggiValore);

function mostraGeneri() {
  $(".dropdown").slideDown();
}

;

function nascondiGeneri() {
  $(".dropdown").slideUp();
}

;

function mostraArtisti() {
  $(".dropdown-artist").slideDown();
}

;

function nascondiArtisti() {
  $(".dropdown-artist").slideUp();
}

;

function leggiValore() {
  console.log($(this).data("genre"));
}

;

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./src/ajax/main-ajax.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MAMP\htdocs\php-ajax-dischi\src\ajax\main-ajax.js */"./src/ajax/main-ajax.js");


/***/ })

/******/ });