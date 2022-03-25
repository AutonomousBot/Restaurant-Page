/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! rice.jpeg */ "./src/rice.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! GoldenFrame.png */ "./src/GoldenFrame.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Temp css file to make things look like a proper website before webpack step. */\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  font-family: -Hero, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add effects to menu buttons. */\n#navigation button:hover {\n  cursor: pointer;\n}\n\n#navigation button {\n  font-size: 20px;\n  background-color: aliceblue;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n#navigation {\n  padding: 15px;\n  padding-bottom: 0px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  width: 100%;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n#navigation, #content, #footer {\n  background-color: rgba(199, 70, 19, 0.911);\n}\n\n.tabSelector {\n  position: absolute;\n  bottom: -16px;\n  left: -15px;\n}\n\n/* Main page */\n#content {\n  font-family: 'Helvetica Neue, sans-serif';\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 90%;\n  width: 60%;\n  margin: 10px;\n  padding: 20px;\n  border-radius: 10px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 125% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* Title of the current tab */\n#title {\n  border: 8px solid black;\n  font-size: 25px;\n  font-weight: 1000;\n  font-family: cursive;\n  min-height: 60px;\n  height: 80px;\n  text-align: center;\n  line-height: 0px;\n  margin-bottom: 70px;\n  min-width: 576px;\n}\n\n /* Review from Home Tab */\n#review {\n  /* text-align: center; */\n  width: 300px;\n  line-height: 1.3;\n}\n\n.subtitle {\n  font-weight: 700;\n}\n\n.subcontent {\n  background-color: orange;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 10px;\n  border: 2px solid black;\n  max-width: 400px;\n}\n\n/* Types of food from Menu Tab */\n.menuType {\n  font-weight: bold;\n  font-size: 25px;\n  border: 5px solid black;\n}\n\n/* Prices of food from Menu Tab */\n.price {\n  line-height: 0px;\n  height: 40px;\n  width: fit-content;\n}\n\n/* Containers for menu items */\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Contact containers. */\n.contactContainer {\n  min-width: 400px;\n  position: relative;\n  line-height: 2;\n}\n\n.contactContainer p {\n  line-height: 0.3;\n}\n\n/* Contact photos. */\n.contactPhoto {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n\n#footer {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iFAAiF;;AAEjF;EACE,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,gGAAgG;EAChG,aAAa;EACb,sBAAsB;EACtB,yDAAkC;EAClC,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,iCAAiC;AACjC;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;;AAEA,cAAc;AACd;EACE,yCAAyC;EACzC,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAsC;EACtC,0BAA0B;EAC1B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA,6BAA6B;AAC7B;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;CAEC,yBAAyB;AAC1B;EACE,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,gCAAgC;AAChC;EACE,iBAAiB;EACjB,eAAe;EACf,uBAAuB;AACzB;;AAEA,iCAAiC;AACjC;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA,wBAAwB;AACxB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB","sourcesContent":["/* Temp css file to make things look like a proper website before webpack step. */\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  font-family: -Hero, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-image: url(\"rice.jpeg\");\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add effects to menu buttons. */\n#navigation button:hover {\n  cursor: pointer;\n}\n\n#navigation button {\n  font-size: 20px;\n  background-color: aliceblue;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n#navigation {\n  padding: 15px;\n  padding-bottom: 0px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  width: 100%;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n#navigation, #content, #footer {\n  background-color: rgba(199, 70, 19, 0.911);\n}\n\n.tabSelector {\n  position: absolute;\n  bottom: -16px;\n  left: -15px;\n}\n\n/* Main page */\n#content {\n  font-family: 'Helvetica Neue, sans-serif';\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 90%;\n  width: 60%;\n  margin: 10px;\n  padding: 20px;\n  border-radius: 10px;\n  background-image: url(GoldenFrame.png);\n  background-size: 125% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* Title of the current tab */\n#title {\n  border: 8px solid black;\n  font-size: 25px;\n  font-weight: 1000;\n  font-family: cursive;\n  min-height: 60px;\n  height: 80px;\n  text-align: center;\n  line-height: 0px;\n  margin-bottom: 70px;\n  min-width: 576px;\n}\n\n /* Review from Home Tab */\n#review {\n  /* text-align: center; */\n  width: 300px;\n  line-height: 1.3;\n}\n\n.subtitle {\n  font-weight: 700;\n}\n\n.subcontent {\n  background-color: orange;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 10px;\n  border: 2px solid black;\n  max-width: 400px;\n}\n\n/* Types of food from Menu Tab */\n.menuType {\n  font-weight: bold;\n  font-size: 25px;\n  border: 5px solid black;\n}\n\n/* Prices of food from Menu Tab */\n.price {\n  line-height: 0px;\n  height: 40px;\n  width: fit-content;\n}\n\n/* Containers for menu items */\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Contact containers. */\n.contactContainer {\n  min-width: 400px;\n  position: relative;\n  line-height: 2;\n}\n\n.contactContainer p {\n  line-height: 0.3;\n}\n\n/* Contact photos. */\n.contactPhoto {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n\n#footer {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GoldenFrame.png":
/*!*****************************!*\
  !*** ./src/GoldenFrame.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c77f0a16de36f85bc822.png";

/***/ }),

/***/ "./src/crabEggs.png":
/*!**************************!*\
  !*** ./src/crabEggs.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37b3b2c9eedc3a02099e.png";

/***/ }),

/***/ "./src/exaltedFlesh.png":
/*!******************************!*\
  !*** ./src/exaltedFlesh.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47dd8ad1b938c95b289e.png";

/***/ }),

/***/ "./src/fia.jpeg":
/*!**********************!*\
  !*** ./src/fia.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3a7d7ca4d1add1dbb0b.jpeg";

/***/ }),

/***/ "./src/goldenSeed.png":
/*!****************************!*\
  !*** ./src/goldenSeed.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d007c38105a19a7df90.png";

/***/ }),

/***/ "./src/hpBar.png":
/*!***********************!*\
  !*** ./src/hpBar.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eea95ea6f4cd76474de1.png";

/***/ }),

/***/ "./src/mapMarker.png":
/*!***************************!*\
  !*** ./src/mapMarker.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fefcda5b863d5b2e5c15.png";

/***/ }),

/***/ "./src/melina.jpeg":
/*!*************************!*\
  !*** ./src/melina.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "185230a980eca991ff88.jpeg";

/***/ }),

/***/ "./src/pickledTurtleNeck.png":
/*!***********************************!*\
  !*** ./src/pickledTurtleNeck.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c912a56d94f7d9b11236.png";

/***/ }),

/***/ "./src/ranni.png":
/*!***********************!*\
  !*** ./src/ranni.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b75747583c9a846ab0.png";

/***/ }),

/***/ "./src/rice.jpeg":
/*!***********************!*\
  !*** ./src/rice.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6795025aa3532f3e5af3.jpeg";

/***/ }),

/***/ "./src/riceBowl.jpg":
/*!**************************!*\
  !*** ./src/riceBowl.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ade2791f25c9e4c0f18a.jpg";

/***/ }),

/***/ "./src/rowaFruit.png":
/*!***************************!*\
  !*** ./src/rowaFruit.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37a128aa605659110009.png";

/***/ }),

/***/ "./src/runes.png":
/*!***********************!*\
  !*** ./src/runes.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d37790b261814cec642a.png";

/***/ }),

/***/ "./src/sacredTear.png":
/*!****************************!*\
  !*** ./src/sacredTear.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c51d0ee68379ab93c71.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mapMarker_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapMarker.png */ "./src/mapMarker.png");
/* harmony import */ var _hpBar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hpBar.png */ "./src/hpBar.png");
/* harmony import */ var _runes_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runes.png */ "./src/runes.png");
/* harmony import */ var _goldenSeed_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goldenSeed.png */ "./src/goldenSeed.png");
/* harmony import */ var _sacredTear_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sacredTear.png */ "./src/sacredTear.png");
/* harmony import */ var _rowaFruit_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rowaFruit.png */ "./src/rowaFruit.png");
/* harmony import */ var _crabEggs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crabEggs.png */ "./src/crabEggs.png");
/* harmony import */ var _riceBowl_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./riceBowl.jpg */ "./src/riceBowl.jpg");
/* harmony import */ var _exaltedFlesh_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exaltedFlesh.png */ "./src/exaltedFlesh.png");
/* harmony import */ var _pickledTurtleNeck_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pickledTurtleNeck.png */ "./src/pickledTurtleNeck.png");
/* harmony import */ var _melina_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./melina.jpeg */ "./src/melina.jpeg");
/* harmony import */ var _fia_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fia.jpeg */ "./src/fia.jpeg");
/* harmony import */ var _ranni_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ranni.png */ "./src/ranni.png");















// Tab switcher buttons
const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

let currentTab = homeButton;
// Main page element.
const contentSpace = document.getElementById("content");

// Creates element with class, id, text specifications.
function newElement(elementType, className = "", idName = "", text) {
  const element = document.createElement(`${elementType}`);
  if (className != "") {  element.classList.add(`${className}`) }
  if (idName != "") {  element.id = idName; }
  if (elementType == "img") {
    element.src = text
  } else {  element.textContent = text; }
  return element
}

const homeTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != homeButton) {
      currentTab.removeChild(currentTab.children[0])
      // Clears previous tab.
      contentSpace.textContent = ""
      if (currentTab == menu) {
        menuButton.addEventListener("click", menuTab.changeTabs, false)
      }
      else {
        contactButton.addEventListener("click", contactTab.changeTabs, false)
      }
      currentTab = homeButton
    }
    // Disable current tab's click event.
    homeButton.removeEventListener("click", homeTab.changeTabs, false)
    if (homeButton.children.length == 0) {
      currentTab.appendChild(newElement("img", "tabSelector", undefined, _hpBar_png__WEBPACK_IMPORTED_MODULE_2__));
    }

    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Radahn's Repas Restaurant");
    titleDiv.appendChild(title);

    const reviewDiv = newElement("div", "subcontent", "review", "Even been stuck in a raid with your boys for months in the middle of the desert? Fear not for this place is located in a cave right by General Radahn! It has excellent rice in different shapes and forms.")
    contentSpace.appendChild(reviewDiv);
    reviewDiv.appendChild(newElement("p", "subtitle", "reviewer", "Tarnished (Real)"));

    const scheduleDiv = newElement("div", "subcontent", "schedule")
    contentSpace.appendChild(scheduleDiv)
    scheduleDiv.appendChild(newElement("div", "subtitle", undefined, "Hours"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Sunday: 8am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Monday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Tuesday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Wednesday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Thursday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Friday: 6am - 10pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Saturday: 8am - 10pm"))

    const locationDiv = newElement("div", "subcontent", "location")
    contentSpace.appendChild(locationDiv)
    const location = newElement("div", "subtitle", undefined, "Location  ")
    locationDiv.appendChild(location)
    location.appendChild(newElement("img", undefined, undefined, _mapMarker_png__WEBPACK_IMPORTED_MODULE_1__))
    locationDiv.appendChild(newElement("p", undefined, undefined, "Lands Between, Cave South of Caelid. (-184 : 162)"))
  }
  return {
    changeTabs
  }
})()

homeTab.changeTabs();

const menuTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != menuButton) {
      currentTab.removeChild(currentTab.children[0])
      // Gives back click event for previous tab.
      if (currentTab == homeButton) {
        homeButton.addEventListener("click", homeTab.changeTabs, false)
      }
      else {
        contactButton.addEventListener("click", contactTab.changeTabs, false)
      }
      // Clears previous tab.
      contentSpace.textContent = ""
      currentTab = menuButton
    }
    // Disable current tab's click event.
    menuButton.removeEventListener("click", menuTab.changeTabs, false)
    currentTab.appendChild(newElement("img", "tabSelector", undefined, _hpBar_png__WEBPACK_IMPORTED_MODULE_2__));

    // Menu
    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Menu");
    titleDiv.appendChild(title);

    // Beverages section
    const beveragesDiv = newElement("div", "subcontent", undefined, "Beverages")
    beveragesDiv.classList.add("menuType")
    contentSpace.appendChild(beveragesDiv);

    // Yummy golden seed
    const beveragesContainer = newElement("div", "subcontent")
    contentSpace.appendChild(beveragesContainer)
    beveragesContainer.appendChild(newElement("div", "subtitle", undefined, "Yummy Golden Seed"))
    beveragesContainer.appendChild(newElement("p", undefined, undefined, "For the first timers, we give out succulent Golden Seeds for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
    const beveragesSubcontainer = (newElement("div", "container"))
    beveragesContainer.appendChild(beveragesSubcontainer)
    const seedPrice = newElement("div", "price", undefined, "50000")
    beveragesSubcontainer.appendChild(seedPrice)
    seedPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
    beveragesSubcontainer.appendChild(newElement("img", undefined, undefined, _goldenSeed_png__WEBPACK_IMPORTED_MODULE_4__))

    // Sacred Tear
    const beveragesContainer2 = newElement("div", "subcontent")
    contentSpace.appendChild(beveragesContainer2)
    beveragesContainer2.appendChild(newElement("div", "subtitle", undefined, "Sacred Tear"))
    beveragesContainer2.appendChild(newElement("p", undefined, undefined, "For the first timers, we give out restorative Sacred Tears for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
    const beveragesSubcontainer2 = (newElement("div", "container"))
    beveragesContainer2.appendChild(beveragesSubcontainer2)
    const tearPrice = newElement("div", "price", undefined, "50000")
    beveragesSubcontainer2.appendChild(tearPrice)
    tearPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
    beveragesSubcontainer2.appendChild(newElement("img", undefined, undefined, _sacredTear_png__WEBPACK_IMPORTED_MODULE_5__))

    // Sides section
    const sidesDiv = newElement("div", "subcontent", undefined, "Sides")
    sidesDiv.classList.add("menuType")
    contentSpace.appendChild(sidesDiv);

    // Rowa Fruit
    const fruitContainer = newElement("div", "subcontent")
    contentSpace.appendChild(fruitContainer)
    fruitContainer.appendChild(newElement("div", "subtitle", undefined, "Rowa Fruit"))
    fruitContainer.appendChild(newElement("p", undefined, undefined, "Rowa Fruit is used in many recipes you'll find in the Lands Between, Tarnished. Very good for preserved foods. We refill our stocks after every visit!"))
    const fruitSubcontainer = (newElement("div", "container"))
    fruitContainer.appendChild(fruitSubcontainer)
    const fruitPrice = newElement("div", "price", undefined, "10")
    fruitSubcontainer.appendChild(fruitPrice)
    fruitPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
    fruitSubcontainer.appendChild(newElement("img", undefined, undefined, _rowaFruit_png__WEBPACK_IMPORTED_MODULE_6__))

    // Crab Eggs
    const crabContainer = newElement("div", "subcontent")
    contentSpace.appendChild(crabContainer)
    crabContainer.appendChild(newElement("div", "subtitle", undefined, "Crab Egss"))
    crabContainer.appendChild(newElement("p", undefined, undefined, "Crab Eggs are used in many meat dishes resulting in a very healthy, robuste meal. We refill our stocks after every visit!"))
    const crabSubcontainer = (newElement("div", "container"))
    crabContainer.appendChild(crabSubcontainer)
    const crabPrice = newElement("div", "price", undefined, "10")
    crabSubcontainer.appendChild(crabPrice)
    crabPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
    crabSubcontainer.appendChild(newElement("img", undefined, undefined, _crabEggs_png__WEBPACK_IMPORTED_MODULE_7__))

    // Main Dish Section
  const mainDishDiv = newElement("div", "subcontent", undefined, "Main Dishes")
  mainDishDiv.classList.add("menuType")
  contentSpace.appendChild(mainDishDiv);

  // Radahn's Famous Rice
  const riceBowlContainer = newElement("div", "subcontent")
  contentSpace.appendChild(riceBowlContainer)
  riceBowlContainer.appendChild(newElement("div", "subtitle", undefined, "Radahn's Famous Rice"))
  riceBowlContainer.appendChild(newElement("p", undefined, undefined, "Just a bowl of rice. Tasty."))
  const riceBowlSubcontainer = (newElement("div", "container"))
  riceBowlContainer.appendChild(riceBowlSubcontainer)
  const riceBowlPrice = newElement("div", "price", undefined, "10")
  riceBowlSubcontainer.appendChild(riceBowlPrice)
  riceBowlPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
  riceBowlSubcontainer.appendChild(newElement("img", undefined, undefined, _riceBowl_jpg__WEBPACK_IMPORTED_MODULE_8__))

  // Exalted Flesh
  const exaltedContainer = newElement("div", "subcontent")
  contentSpace.appendChild(exaltedContainer)
  exaltedContainer.appendChild(newElement("div", "subtitle", undefined, "Exalted Flesh"))
  exaltedContainer.appendChild(newElement("p", undefined, undefined, "A fine piece of meat that makes you stronger. Many have felled numerous foes after eating this heroic delicacy."))
  const exaltedSubcontainer = (newElement("div", "container"))
  exaltedContainer.appendChild(exaltedSubcontainer)
  const exaltedPrice = newElement("div", "price", undefined, "50")
  exaltedSubcontainer.appendChild(exaltedPrice)
  exaltedPrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
  exaltedSubcontainer.appendChild(newElement("img", undefined, undefined, _exaltedFlesh_png__WEBPACK_IMPORTED_MODULE_9__))

  // Pickled Turtle Neck
  const turtleContainer = newElement("div", "subcontent")
  contentSpace.appendChild(turtleContainer)
  turtleContainer.appendChild(newElement("div", "subtitle", undefined, "Pickled Turtle Neck"))
  turtleContainer.appendChild(newElement("p", undefined, undefined, "A bitter medicinal piece of meat. Regardless of the Tarnished's tastes, it is a well of endless power when the nutrients course through your body."))
  const turtleSubcontainer = (newElement("div", "container"))
  turtleContainer.appendChild(turtleSubcontainer)
  const turtlePrice = newElement("div", "price", undefined, "50")
  turtleSubcontainer.appendChild(turtlePrice)
  turtlePrice.appendChild(newElement("img", undefined, undefined, _runes_png__WEBPACK_IMPORTED_MODULE_3__))
  turtleSubcontainer.appendChild(newElement("img", undefined, undefined, _pickledTurtleNeck_png__WEBPACK_IMPORTED_MODULE_10__))
  }
  return {
    changeTabs
  }
})()

const contactTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != contactButton) {
      currentTab.removeChild(currentTab.children[0])
      // Clears previous tab.
      contentSpace.textContent = ""
      if (currentTab == homeButton) {
        homeButton.addEventListener("click", homeTab.changeTabs, false)
      }
      else {
        menuButton.addEventListener("click", menuTab.changeTabs, false)
      }
      currentTab = contactButton
    }
    // Disable current tab's click event.
    contactButton.removeEventListener("click", contactTab.changeTabs, false)
    currentTab.appendChild(newElement("img", "tabSelector", undefined, _hpBar_png__WEBPACK_IMPORTED_MODULE_2__));

    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Contact Us");
    titleDiv.appendChild(title);


    const melinaDiv = newElement("div", "subcontent")
    melinaDiv.classList.add("contactContainer")
    contentSpace.appendChild(melinaDiv)
    melinaDiv.appendChild(newElement("div", "subtitle", undefined, "Melina"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "Maiden (Fake)"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "TOU-CHG-RASS"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "melina@fromsoft.com"))
    melinaDiv.appendChild(newElement("img", "contactPhoto", undefined, _melina_jpeg__WEBPACK_IMPORTED_MODULE_11__))

    const fiaDiv = newElement("div", "subcontent")
    fiaDiv.classList.add("contactContainer")
    contentSpace.appendChild(fiaDiv)
    fiaDiv.appendChild(newElement("div", "subtitle", undefined, "Fia"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "Mom"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "WAR-MHU-GNOW"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "fia@fromsoft.com"))
    fiaDiv.appendChild(newElement("img", "contactPhoto", undefined, _fia_jpeg__WEBPACK_IMPORTED_MODULE_12__))

    const ranniDiv = newElement("div", "subcontent")
    ranniDiv.classList.add("contactContainer")
    contentSpace.appendChild(ranniDiv)
    ranniDiv.appendChild(newElement("div", "subtitle", undefined, "Ranni"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "Wife (?)"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "CON-VOL-UTED"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "ranni@fromsoft.com"))
    ranniDiv.appendChild(newElement("img", "contactPhoto", undefined, _ranni_png__WEBPACK_IMPORTED_MODULE_13__))

  }
  return {
    changeTabs
  }
})()

homeButton.addEventListener("click", homeTab.changeTabs, false)
menuButton.addEventListener("click", menuTab.changeTabs, false)
contactButton.addEventListener("click", contactTab.changeTabs, false)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwicmljZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiR29sZGVuRnJhbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRlbXAgY3NzIGZpbGUgdG8gbWFrZSB0aGluZ3MgbG9vayBsaWtlIGEgcHJvcGVyIHdlYnNpdGUgYmVmb3JlIHdlYnBhY2sgc3RlcC4gKi9cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogLUhlcm8sIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBBZGQgZWZmZWN0cyB0byBtZW51IGJ1dHRvbnMuICovXFxuI25hdmlnYXRpb24gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25hdmlnYXRpb24gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNuYXZpZ2F0aW9uLCAjY29udGVudCwgI2Zvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgNzAsIDE5LCAwLjkxMSk7XFxufVxcblxcbi50YWJTZWxlY3RvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xNnB4O1xcbiAgbGVmdDogLTE1cHg7XFxufVxcblxcbi8qIE1haW4gcGFnZSAqL1xcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWYnO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTI1JSAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogVGl0bGUgb2YgdGhlIGN1cnJlbnQgdGFiICovXFxuI3RpdGxlIHtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gIG1pbi13aWR0aDogNTc2cHg7XFxufVxcblxcbiAvKiBSZXZpZXcgZnJvbSBIb21lIFRhYiAqL1xcbiNyZXZpZXcge1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zdWJjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBUeXBlcyBvZiBmb29kIGZyb20gTWVudSBUYWIgKi9cXG4ubWVudVR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogUHJpY2VzIG9mIGZvb2QgZnJvbSBNZW51IFRhYiAqL1xcbi5wcmljZSB7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBDb250YWluZXJzIGZvciBtZW51IGl0ZW1zICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBDb250YWN0IGNvbnRhaW5lcnMuICovXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjM7XFxufVxcblxcbi8qIENvbnRhY3QgcGhvdG9zLiAqL1xcbi5jb250YWN0UGhvdG8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRkFBaUY7O0FBRWpGO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdHQUFnRztFQUNoRyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlEQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBLGNBQWM7QUFDZDtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5REFBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztDQUVDLHlCQUF5QjtBQUMxQjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGVtcCBjc3MgZmlsZSB0byBtYWtlIHRoaW5ncyBsb29rIGxpa2UgYSBwcm9wZXIgd2Vic2l0ZSBiZWZvcmUgd2VicGFjayBzdGVwLiAqL1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAtSGVybywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJyaWNlLmpwZWdcXFwiKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEFkZCBlZmZlY3RzIHRvIG1lbnUgYnV0dG9ucy4gKi9cXG4jbmF2aWdhdGlvbiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNuYXZpZ2F0aW9uIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI25hdmlnYXRpb24sICNjb250ZW50LCAjZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCA3MCwgMTksIDAuOTExKTtcXG59XFxuXFxuLnRhYlNlbGVjdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTE2cHg7XFxuICBsZWZ0OiAtMTVweDtcXG59XFxuXFxuLyogTWFpbiBwYWdlICovXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZic7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoR29sZGVuRnJhbWUucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTI1JSAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogVGl0bGUgb2YgdGhlIGN1cnJlbnQgdGFiICovXFxuI3RpdGxlIHtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gIG1pbi13aWR0aDogNTc2cHg7XFxufVxcblxcbiAvKiBSZXZpZXcgZnJvbSBIb21lIFRhYiAqL1xcbiNyZXZpZXcge1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zdWJjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBUeXBlcyBvZiBmb29kIGZyb20gTWVudSBUYWIgKi9cXG4ubWVudVR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogUHJpY2VzIG9mIGZvb2QgZnJvbSBNZW51IFRhYiAqL1xcbi5wcmljZSB7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBDb250YWluZXJzIGZvciBtZW51IGl0ZW1zICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBDb250YWN0IGNvbnRhaW5lcnMuICovXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjM7XFxufVxcblxcbi8qIENvbnRhY3QgcGhvdG9zLiAqL1xcbi5jb250YWN0UGhvdG8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWFya2VyIGZyb20gXCIuL21hcE1hcmtlci5wbmdcIjtcbmltcG9ydCB0YWJTZWxlY3RvciBmcm9tIFwiLi9ocEJhci5wbmdcIlxuaW1wb3J0IHJ1bmVzIGZyb20gXCIuL3J1bmVzLnBuZ1wiXG5pbXBvcnQgc2VlZCBmcm9tIFwiLi9nb2xkZW5TZWVkLnBuZ1wiXG5pbXBvcnQgdGVhciBmcm9tIFwiLi9zYWNyZWRUZWFyLnBuZ1wiXG5pbXBvcnQgZnJ1aXQgZnJvbSBcIi4vcm93YUZydWl0LnBuZ1wiXG5pbXBvcnQgY3JhYiBmcm9tIFwiLi9jcmFiRWdncy5wbmdcIlxuaW1wb3J0IHJpY2VCb3dsIGZyb20gXCIuL3JpY2VCb3dsLmpwZ1wiXG5pbXBvcnQgZXhhbHRlZCBmcm9tIFwiLi9leGFsdGVkRmxlc2gucG5nXCJcbmltcG9ydCB0dXJ0bGUgZnJvbSBcIi4vcGlja2xlZFR1cnRsZU5lY2sucG5nXCJcbmltcG9ydCBtZWxpbmEgZnJvbSBcIi4vbWVsaW5hLmpwZWdcIlxuaW1wb3J0IGZpYSBmcm9tIFwiLi9maWEuanBlZ1wiXG5pbXBvcnQgcmFubmkgZnJvbSBcIi4vcmFubmkucG5nXCJcblxuLy8gVGFiIHN3aXRjaGVyIGJ1dHRvbnNcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIikuY2hpbGRyZW5bMF1cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIikuY2hpbGRyZW5bMV1cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIikuY2hpbGRyZW5bMl1cblxubGV0IGN1cnJlbnRUYWIgPSBob21lQnV0dG9uO1xuLy8gTWFpbiBwYWdlIGVsZW1lbnQuXG5jb25zdCBjb250ZW50U3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIENyZWF0ZXMgZWxlbWVudCB3aXRoIGNsYXNzLCBpZCwgdGV4dCBzcGVjaWZpY2F0aW9ucy5cbmZ1bmN0aW9uIG5ld0VsZW1lbnQoZWxlbWVudFR5cGUsIGNsYXNzTmFtZSA9IFwiXCIsIGlkTmFtZSA9IFwiXCIsIHRleHQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudFR5cGV9YCk7XG4gIGlmIChjbGFzc05hbWUgIT0gXCJcIikgeyAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKSB9XG4gIGlmIChpZE5hbWUgIT0gXCJcIikgeyAgZWxlbWVudC5pZCA9IGlkTmFtZTsgfVxuICBpZiAoZWxlbWVudFR5cGUgPT0gXCJpbWdcIikge1xuICAgIGVsZW1lbnQuc3JjID0gdGV4dFxuICB9IGVsc2UgeyAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7IH1cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuY29uc3QgaG9tZVRhYiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNoYW5nZVRhYnMgPSAoKSA9PiB7XG4gICAgLy8gQ2hhbmdlIGN1cnJlbnRUYWIgdmFyaWFibGUgYW5kIHRoZSBzZWxlY3RlZCB0YWIgZGlzcGxheS5cbiAgICBpZiAoY3VycmVudFRhYiAhPSBob21lQnV0dG9uKSB7XG4gICAgICBjdXJyZW50VGFiLnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIuY2hpbGRyZW5bMF0pXG4gICAgICAvLyBDbGVhcnMgcHJldmlvdXMgdGFiLlxuICAgICAgY29udGVudFNwYWNlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT0gbWVudSkge1xuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFiLmNoYW5nZVRhYnMsIGZhbHNlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RUYWIuY2hhbmdlVGFicywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjdXJyZW50VGFiID0gaG9tZUJ1dHRvblxuICAgIH1cbiAgICAvLyBEaXNhYmxlIGN1cnJlbnQgdGFiJ3MgY2xpY2sgZXZlbnQuXG4gICAgaG9tZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVRhYi5jaGFuZ2VUYWJzLCBmYWxzZSlcbiAgICBpZiAoaG9tZUJ1dHRvbi5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xuICAgICAgY3VycmVudFRhYi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwidGFiU2VsZWN0b3JcIiwgdW5kZWZpbmVkLCB0YWJTZWxlY3RvcikpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJ0aXRsZVwiKTtcbiAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIGNvbnN0IHRpdGxlID0gbmV3RWxlbWVudChcImgxXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlJhZGFobidzIFJlcGFzIFJlc3RhdXJhbnRcIik7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgcmV2aWV3RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJyZXZpZXdcIiwgXCJFdmVuIGJlZW4gc3R1Y2sgaW4gYSByYWlkIHdpdGggeW91ciBib3lzIGZvciBtb250aHMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgZGVzZXJ0PyBGZWFyIG5vdCBmb3IgdGhpcyBwbGFjZSBpcyBsb2NhdGVkIGluIGEgY2F2ZSByaWdodCBieSBHZW5lcmFsIFJhZGFobiEgSXQgaGFzIGV4Y2VsbGVudCByaWNlIGluIGRpZmZlcmVudCBzaGFwZXMgYW5kIGZvcm1zLlwiKVxuICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChyZXZpZXdEaXYpO1xuICAgIHJldmlld0Rpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCBcInN1YnRpdGxlXCIsIFwicmV2aWV3ZXJcIiwgXCJUYXJuaXNoZWQgKFJlYWwpXCIpKTtcblxuICAgIGNvbnN0IHNjaGVkdWxlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJzY2hlZHVsZVwiKVxuICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChzY2hlZHVsZURpdilcbiAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkhvdXJzXCIpKVxuICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlN1bmRheTogOGFtIC0gOHBtXCIpKVxuICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1vbmRheTogNmFtIC0gOHBtXCIpKVxuICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlR1ZXNkYXk6IDZhbSAtIDhwbVwiKSlcbiAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJXZWRuZXNkYXk6IDZhbSAtIDhwbVwiKSlcbiAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJUaHVyc2RheTogNmFtIC0gOHBtXCIpKVxuICAgIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkZyaWRheTogNmFtIC0gMTBwbVwiKSlcbiAgICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiKSlcblxuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJsb2NhdGlvblwiKVxuICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdilcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiTG9jYXRpb24gIFwiKVxuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1hcmtlcikpXG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTGFuZHMgQmV0d2VlbiwgQ2F2ZSBTb3V0aCBvZiBDYWVsaWQuICgtMTg0IDogMTYyKVwiKSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNoYW5nZVRhYnNcbiAgfVxufSkoKVxuXG5ob21lVGFiLmNoYW5nZVRhYnMoKTtcblxuY29uc3QgbWVudVRhYiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNoYW5nZVRhYnMgPSAoKSA9PiB7XG4gICAgLy8gQ2hhbmdlIGN1cnJlbnRUYWIgdmFyaWFibGUgYW5kIHRoZSBzZWxlY3RlZCB0YWIgZGlzcGxheS5cbiAgICBpZiAoY3VycmVudFRhYiAhPSBtZW51QnV0dG9uKSB7XG4gICAgICBjdXJyZW50VGFiLnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIuY2hpbGRyZW5bMF0pXG4gICAgICAvLyBHaXZlcyBiYWNrIGNsaWNrIGV2ZW50IGZvciBwcmV2aW91cyB0YWIuXG4gICAgICBpZiAoY3VycmVudFRhYiA9PSBob21lQnV0dG9uKSB7XG4gICAgICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVUYWIuY2hhbmdlVGFicywgZmFsc2UpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdFRhYi5jaGFuZ2VUYWJzLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIC8vIENsZWFycyBwcmV2aW91cyB0YWIuXG4gICAgICBjb250ZW50U3BhY2UudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICBjdXJyZW50VGFiID0gbWVudUJ1dHRvblxuICAgIH1cbiAgICAvLyBEaXNhYmxlIGN1cnJlbnQgdGFiJ3MgY2xpY2sgZXZlbnQuXG4gICAgbWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRhYi5jaGFuZ2VUYWJzLCBmYWxzZSlcbiAgICBjdXJyZW50VGFiLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJ0YWJTZWxlY3RvclwiLCB1bmRlZmluZWQsIHRhYlNlbGVjdG9yKSk7XG5cbiAgICAvLyBNZW51XG4gICAgY29uc3QgdGl0bGVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCBcInRpdGxlXCIpO1xuICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgY29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDFcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWVudVwiKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBCZXZlcmFnZXMgc2VjdGlvblxuICAgIGNvbnN0IGJldmVyYWdlc0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIHVuZGVmaW5lZCwgXCJCZXZlcmFnZXNcIilcbiAgICBiZXZlcmFnZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVUeXBlXCIpXG4gICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0Rpdik7XG5cbiAgICAvLyBZdW1teSBnb2xkZW4gc2VlZFxuICAgIGNvbnN0IGJldmVyYWdlc0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0NvbnRhaW5lcilcbiAgICBiZXZlcmFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJZdW1teSBHb2xkZW4gU2VlZFwiKSlcbiAgICBiZXZlcmFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiRm9yIHRoZSBmaXJzdCB0aW1lcnMsIHdlIGdpdmUgb3V0IHN1Y2N1bGVudCBHb2xkZW4gU2VlZHMgZm9yIGVuaGFuY2luZyBFc3R1cyBGbGFza3MgdXNlcyBmb3IgYSBmYWlyIHByaWNlISAoT25lIHBlciBUYXJuaXNoZWQgb25seSlcIikpXG4gICAgY29uc3QgYmV2ZXJhZ2VzU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gICAgYmV2ZXJhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlc1N1YmNvbnRhaW5lcilcbiAgICBjb25zdCBzZWVkUHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjUwMDAwXCIpXG4gICAgYmV2ZXJhZ2VzU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHNlZWRQcmljZSlcbiAgICBzZWVkUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICAgIGJldmVyYWdlc1N1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzZWVkKSlcblxuICAgIC8vIFNhY3JlZCBUZWFyXG4gICAgY29uc3QgYmV2ZXJhZ2VzQ29udGFpbmVyMiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0NvbnRhaW5lcjIpXG4gICAgYmV2ZXJhZ2VzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlNhY3JlZCBUZWFyXCIpKVxuICAgIGJldmVyYWdlc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiRm9yIHRoZSBmaXJzdCB0aW1lcnMsIHdlIGdpdmUgb3V0IHJlc3RvcmF0aXZlIFNhY3JlZCBUZWFycyBmb3IgZW5oYW5jaW5nIEVzdHVzIEZsYXNrcyB1c2VzIGZvciBhIGZhaXIgcHJpY2UhIChPbmUgcGVyIFRhcm5pc2hlZCBvbmx5KVwiKSlcbiAgICBjb25zdCBiZXZlcmFnZXNTdWJjb250YWluZXIyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gICAgYmV2ZXJhZ2VzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChiZXZlcmFnZXNTdWJjb250YWluZXIyKVxuICAgIGNvbnN0IHRlYXJQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiNTAwMDBcIilcbiAgICBiZXZlcmFnZXNTdWJjb250YWluZXIyLmFwcGVuZENoaWxkKHRlYXJQcmljZSlcbiAgICB0ZWFyUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICAgIGJldmVyYWdlc1N1YmNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGVhcikpXG5cbiAgICAvLyBTaWRlcyBzZWN0aW9uXG4gICAgY29uc3Qgc2lkZXNEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCB1bmRlZmluZWQsIFwiU2lkZXNcIilcbiAgICBzaWRlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudVR5cGVcIilcbiAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoc2lkZXNEaXYpO1xuXG4gICAgLy8gUm93YSBGcnVpdFxuICAgIGNvbnN0IGZydWl0Q29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoZnJ1aXRDb250YWluZXIpXG4gICAgZnJ1aXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJSb3dhIEZydWl0XCIpKVxuICAgIGZydWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlJvd2EgRnJ1aXQgaXMgdXNlZCBpbiBtYW55IHJlY2lwZXMgeW91J2xsIGZpbmQgaW4gdGhlIExhbmRzIEJldHdlZW4sIFRhcm5pc2hlZC4gVmVyeSBnb29kIGZvciBwcmVzZXJ2ZWQgZm9vZHMuIFdlIHJlZmlsbCBvdXIgc3RvY2tzIGFmdGVyIGV2ZXJ5IHZpc2l0IVwiKSlcbiAgICBjb25zdCBmcnVpdFN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICAgIGZydWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZydWl0U3ViY29udGFpbmVyKVxuICAgIGNvbnN0IGZydWl0UHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjEwXCIpXG4gICAgZnJ1aXRTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJ1aXRQcmljZSlcbiAgICBmcnVpdFByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgICBmcnVpdFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmcnVpdCkpXG5cbiAgICAvLyBDcmFiIEVnZ3NcbiAgICBjb25zdCBjcmFiQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoY3JhYkNvbnRhaW5lcilcbiAgICBjcmFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiQ3JhYiBFZ3NzXCIpKVxuICAgIGNyYWJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQ3JhYiBFZ2dzIGFyZSB1c2VkIGluIG1hbnkgbWVhdCBkaXNoZXMgcmVzdWx0aW5nIGluIGEgdmVyeSBoZWFsdGh5LCByb2J1c3RlIG1lYWwuIFdlIHJlZmlsbCBvdXIgc3RvY2tzIGFmdGVyIGV2ZXJ5IHZpc2l0IVwiKSlcbiAgICBjb25zdCBjcmFiU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gICAgY3JhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmFiU3ViY29udGFpbmVyKVxuICAgIGNvbnN0IGNyYWJQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiMTBcIilcbiAgICBjcmFiU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKGNyYWJQcmljZSlcbiAgICBjcmFiUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICAgIGNyYWJTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY3JhYikpXG5cbiAgICAvLyBNYWluIERpc2ggU2VjdGlvblxuICBjb25zdCBtYWluRGlzaERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIHVuZGVmaW5lZCwgXCJNYWluIERpc2hlc1wiKVxuICBtYWluRGlzaERpdi5jbGFzc0xpc3QuYWRkKFwibWVudVR5cGVcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKG1haW5EaXNoRGl2KTtcblxuICAvLyBSYWRhaG4ncyBGYW1vdXMgUmljZVxuICBjb25zdCByaWNlQm93bENvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChyaWNlQm93bENvbnRhaW5lcilcbiAgcmljZUJvd2xDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJSYWRhaG4ncyBGYW1vdXMgUmljZVwiKSlcbiAgcmljZUJvd2xDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiSnVzdCBhIGJvd2wgb2YgcmljZS4gVGFzdHkuXCIpKVxuICBjb25zdCByaWNlQm93bFN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICByaWNlQm93bENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWNlQm93bFN1YmNvbnRhaW5lcilcbiAgY29uc3QgcmljZUJvd2xQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiMTBcIilcbiAgcmljZUJvd2xTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQocmljZUJvd2xQcmljZSlcbiAgcmljZUJvd2xQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIHJpY2VCb3dsU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJpY2VCb3dsKSlcblxuICAvLyBFeGFsdGVkIEZsZXNoXG4gIGNvbnN0IGV4YWx0ZWRDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoZXhhbHRlZENvbnRhaW5lcilcbiAgZXhhbHRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkV4YWx0ZWQgRmxlc2hcIikpXG4gIGV4YWx0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQSBmaW5lIHBpZWNlIG9mIG1lYXQgdGhhdCBtYWtlcyB5b3Ugc3Ryb25nZXIuIE1hbnkgaGF2ZSBmZWxsZWQgbnVtZXJvdXMgZm9lcyBhZnRlciBlYXRpbmcgdGhpcyBoZXJvaWMgZGVsaWNhY3kuXCIpKVxuICBjb25zdCBleGFsdGVkU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIGV4YWx0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhhbHRlZFN1YmNvbnRhaW5lcilcbiAgY29uc3QgZXhhbHRlZFByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCI1MFwiKVxuICBleGFsdGVkU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKGV4YWx0ZWRQcmljZSlcbiAgZXhhbHRlZFByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgZXhhbHRlZFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBleGFsdGVkKSlcblxuICAvLyBQaWNrbGVkIFR1cnRsZSBOZWNrXG4gIGNvbnN0IHR1cnRsZUNvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZCh0dXJ0bGVDb250YWluZXIpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlBpY2tsZWQgVHVydGxlIE5lY2tcIikpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJBIGJpdHRlciBtZWRpY2luYWwgcGllY2Ugb2YgbWVhdC4gUmVnYXJkbGVzcyBvZiB0aGUgVGFybmlzaGVkJ3MgdGFzdGVzLCBpdCBpcyBhIHdlbGwgb2YgZW5kbGVzcyBwb3dlciB3aGVuIHRoZSBudXRyaWVudHMgY291cnNlIHRocm91Z2ggeW91ciBib2R5LlwiKSlcbiAgY29uc3QgdHVydGxlU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJ0bGVTdWJjb250YWluZXIpXG4gIGNvbnN0IHR1cnRsZVByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCI1MFwiKVxuICB0dXJ0bGVTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQodHVydGxlUHJpY2UpXG4gIHR1cnRsZVByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgdHVydGxlU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHR1cnRsZSkpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VUYWJzXG4gIH1cbn0pKClcblxuY29uc3QgY29udGFjdFRhYiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNoYW5nZVRhYnMgPSAoKSA9PiB7XG4gICAgLy8gQ2hhbmdlIGN1cnJlbnRUYWIgdmFyaWFibGUgYW5kIHRoZSBzZWxlY3RlZCB0YWIgZGlzcGxheS5cbiAgICBpZiAoY3VycmVudFRhYiAhPSBjb250YWN0QnV0dG9uKSB7XG4gICAgICBjdXJyZW50VGFiLnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIuY2hpbGRyZW5bMF0pXG4gICAgICAvLyBDbGVhcnMgcHJldmlvdXMgdGFiLlxuICAgICAgY29udGVudFNwYWNlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT0gaG9tZUJ1dHRvbikge1xuICAgICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lVGFiLmNoYW5nZVRhYnMsIGZhbHNlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUYWIuY2hhbmdlVGFicywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjdXJyZW50VGFiID0gY29udGFjdEJ1dHRvblxuICAgIH1cbiAgICAvLyBEaXNhYmxlIGN1cnJlbnQgdGFiJ3MgY2xpY2sgZXZlbnQuXG4gICAgY29udGFjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdFRhYi5jaGFuZ2VUYWJzLCBmYWxzZSlcbiAgICBjdXJyZW50VGFiLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJ0YWJTZWxlY3RvclwiLCB1bmRlZmluZWQsIHRhYlNlbGVjdG9yKSk7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwidGl0bGVcIik7XG4gICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBjb25zdCB0aXRsZSA9IG5ld0VsZW1lbnQoXCJoMVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJDb250YWN0IFVzXCIpO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXG4gICAgY29uc3QgbWVsaW5hRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgICBtZWxpbmFEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIilcbiAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQobWVsaW5hRGl2KVxuICAgIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIk1lbGluYVwiKSlcbiAgICBtZWxpbmFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWFpZGVuIChGYWtlKVwiKSlcbiAgICBtZWxpbmFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiVE9VLUNIRy1SQVNTXCIpKVxuICAgIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJtZWxpbmFAZnJvbXNvZnQuY29tXCIpKVxuICAgIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwiY29udGFjdFBob3RvXCIsIHVuZGVmaW5lZCwgbWVsaW5hKSlcblxuICAgIGNvbnN0IGZpYURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gICAgZmlhRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpXG4gICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGZpYURpdilcbiAgICBmaWFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJGaWFcIikpXG4gICAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1vbVwiKSlcbiAgICBmaWFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiV0FSLU1IVS1HTk9XXCIpKVxuICAgIGZpYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJmaWFAZnJvbXNvZnQuY29tXCIpKVxuICAgIGZpYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwiY29udGFjdFBob3RvXCIsIHVuZGVmaW5lZCwgZmlhKSlcblxuICAgIGNvbnN0IHJhbm5pRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgICByYW5uaURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKVxuICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChyYW5uaURpdilcbiAgICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlJhbm5pXCIpKVxuICAgIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIldpZmUgKD8pXCIpKVxuICAgIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkNPTi1WT0wtVVRFRFwiKSlcbiAgICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJyYW5uaUBmcm9tc29mdC5jb21cIikpXG4gICAgcmFubmlEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCBcImNvbnRhY3RQaG90b1wiLCB1bmRlZmluZWQsIHJhbm5pKSlcblxuICB9XG4gIHJldHVybiB7XG4gICAgY2hhbmdlVGFic1xuICB9XG59KSgpXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVUYWIuY2hhbmdlVGFicywgZmFsc2UpXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51VGFiLmNoYW5nZVRhYnMsIGZhbHNlKVxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdFRhYi5jaGFuZ2VUYWJzLCBmYWxzZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=