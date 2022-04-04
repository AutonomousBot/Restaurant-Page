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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rice.jpeg */ "./src/images/rice.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/GoldenFrame.png */ "./src/images/GoldenFrame.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Temp css file to make things look like a proper website before webpack step. */\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  font-family: -Hero, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add effects to menu buttons. */\n#navigation button:hover {\n  cursor: pointer;\n}\n\n#navigation button {\n  font-size: 20px;\n  background-color: aliceblue;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n#navigation {\n  padding: 15px;\n  padding-bottom: 0px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  width: 100%;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n#navigation, #content, #footer {\n  background-color: rgba(199, 70, 19, 0.911);\n}\n\n.tabSelector {\n  position: absolute;\n  bottom: -16px;\n  left: -15px;\n}\n\n/* Main page */\n#content {\n  font-family: 'Helvetica Neue, sans-serif';\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 90%;\n  width: 60%;\n  margin: 10px;\n  padding: 20px;\n  border-radius: 10px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 125% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* Title of the current tab */\n#title {\n  border: 8px solid black;\n  font-size: 25px;\n  font-weight: 1000;\n  font-family: cursive;\n  min-height: 60px;\n  height: 80px;\n  text-align: center;\n  line-height: 0px;\n  margin-bottom: 70px;\n  min-width: 576px;\n}\n\n /* Review from Home Tab */\n#review {\n  /* text-align: center; */\n  width: 300px;\n  line-height: 1.3;\n}\n\n.subtitle {\n  font-weight: 700;\n}\n\n.subcontent {\n  background-color: orange;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 10px;\n  border: 2px solid black;\n  max-width: 400px;\n}\n\n/* Types of food from Menu Tab */\n.menuType {\n  font-weight: bold;\n  font-size: 25px;\n  border: 5px solid black;\n}\n\n/* Prices of food from Menu Tab */\n.price {\n  line-height: 0px;\n  height: 40px;\n  width: fit-content;\n}\n\n/* Containers for menu items */\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Contact containers. */\n.contactContainer {\n  min-width: 400px;\n  position: relative;\n  line-height: 2;\n}\n\n.contactContainer p {\n  line-height: 0.3;\n}\n\n/* Contact photos. */\n.contactPhoto {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n\n#footer {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iFAAiF;;AAEjF;EACE,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,gGAAgG;EAChG,aAAa;EACb,sBAAsB;EACtB,yDAA2C;EAC3C,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,iCAAiC;AACjC;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;;AAEA,cAAc;AACd;EACE,yCAAyC;EACzC,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAiD;EACjD,0BAA0B;EAC1B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA,6BAA6B;AAC7B;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;CAEC,yBAAyB;AAC1B;EACE,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,gCAAgC;AAChC;EACE,iBAAiB;EACjB,eAAe;EACf,uBAAuB;AACzB;;AAEA,iCAAiC;AACjC;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA,wBAAwB;AACxB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB","sourcesContent":["/* Temp css file to make things look like a proper website before webpack step. */\n\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  font-family: -Hero, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  display: flex;\n  flex-direction: column;\n  background-image: url(\"./images/rice.jpeg\");\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Add effects to menu buttons. */\n#navigation button:hover {\n  cursor: pointer;\n}\n\n#navigation button {\n  font-size: 20px;\n  background-color: aliceblue;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n#navigation {\n  padding: 15px;\n  padding-bottom: 0px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  width: 100%;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n#navigation, #content, #footer {\n  background-color: rgba(199, 70, 19, 0.911);\n}\n\n.tabSelector {\n  position: absolute;\n  bottom: -16px;\n  left: -15px;\n}\n\n/* Main page */\n#content {\n  font-family: 'Helvetica Neue, sans-serif';\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 90%;\n  width: 60%;\n  margin: 10px;\n  padding: 20px;\n  border-radius: 10px;\n  background-image: url(\"./images/GoldenFrame.png\");\n  background-size: 125% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* Title of the current tab */\n#title {\n  border: 8px solid black;\n  font-size: 25px;\n  font-weight: 1000;\n  font-family: cursive;\n  min-height: 60px;\n  height: 80px;\n  text-align: center;\n  line-height: 0px;\n  margin-bottom: 70px;\n  min-width: 576px;\n}\n\n /* Review from Home Tab */\n#review {\n  /* text-align: center; */\n  width: 300px;\n  line-height: 1.3;\n}\n\n.subtitle {\n  font-weight: 700;\n}\n\n.subcontent {\n  background-color: orange;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 10px;\n  border: 2px solid black;\n  max-width: 400px;\n}\n\n/* Types of food from Menu Tab */\n.menuType {\n  font-weight: bold;\n  font-size: 25px;\n  border: 5px solid black;\n}\n\n/* Prices of food from Menu Tab */\n.price {\n  line-height: 0px;\n  height: 40px;\n  width: fit-content;\n}\n\n/* Containers for menu items */\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Contact containers. */\n.contactContainer {\n  min-width: 400px;\n  position: relative;\n  line-height: 2;\n}\n\n.contactContainer p {\n  line-height: 0.3;\n}\n\n/* Contact photos. */\n.contactPhoto {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n\n#footer {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactTab)
/* harmony export */ });
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");
/* harmony import */ var _images_melina_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/melina.jpeg */ "./src/images/melina.jpeg");
/* harmony import */ var _images_fia_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/fia.jpeg */ "./src/images/fia.jpeg");
/* harmony import */ var _images_ranni_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ranni.png */ "./src/images/ranni.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "./src/index.js");






function contactTab() {
  // Contact us
  const titleDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "title");
  _index_js__WEBPACK_IMPORTED_MODULE_4__.contentSpace.appendChild(titleDiv);
  const title = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", undefined, undefined, "Contact Us");
  titleDiv.appendChild(title);

  // Meliana contact info.
  const melinaDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  melinaDiv.classList.add("contactContainer")
  _index_js__WEBPACK_IMPORTED_MODULE_4__.contentSpace.appendChild(melinaDiv)
  melinaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Melina"))
  melinaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Maiden (Fake)"))
  melinaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "TOU-CHG-RASS"))
  melinaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "melina@fromsoft.com"))
  melinaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "contactPhoto", undefined, _images_melina_jpeg__WEBPACK_IMPORTED_MODULE_1__))

  // Fia contact info.
  const fiaDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  fiaDiv.classList.add("contactContainer")
  _index_js__WEBPACK_IMPORTED_MODULE_4__.contentSpace.appendChild(fiaDiv)
  fiaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Fia"))
  fiaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Mom"))
  fiaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "WAR-MHU-GNOW"))
  fiaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "fia@fromsoft.com"))
  fiaDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "contactPhoto", undefined, _images_fia_jpeg__WEBPACK_IMPORTED_MODULE_2__))

  // Ranni contact info.
  const ranniDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  ranniDiv.classList.add("contactContainer")
  _index_js__WEBPACK_IMPORTED_MODULE_4__.contentSpace.appendChild(ranniDiv)
  ranniDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Ranni"))
  ranniDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Wife (?)"))
  ranniDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "CON-VOL-UTED"))
  ranniDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "ranni@fromsoft.com"))
  ranniDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "contactPhoto", undefined, _images_ranni_png__WEBPACK_IMPORTED_MODULE_3__))
}

/***/ }),

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newElement)
/* harmony export */ });
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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");
/* harmony import */ var _images_mapMarker_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/mapMarker.png */ "./src/images/mapMarker.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




function home() {

  const titleDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "title");
  _index_js__WEBPACK_IMPORTED_MODULE_2__.contentSpace.appendChild(titleDiv);
  const title = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", undefined, undefined, "Radahn's Repas Restaurant");
  titleDiv.appendChild(title);

  const reviewDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "review", "Even been stuck in a raid with your boys for months in the middle of the desert? Fear not for this place is located in a cave right by General Radahn! It has excellent rice in different shapes and forms.")
  _index_js__WEBPACK_IMPORTED_MODULE_2__.contentSpace.appendChild(reviewDiv);
  reviewDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "subtitle", "reviewer", "Tarnished (Real)"));

  const scheduleDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "schedule")
  _index_js__WEBPACK_IMPORTED_MODULE_2__.contentSpace.appendChild(scheduleDiv)
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Hours"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Sunday: 8am - 8pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Monday: 6am - 8pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Tuesday: 6am - 8pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Wednesday: 6am - 8pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Thursday: 6am - 8pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Friday: 6am - 10pm"))
  scheduleDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Saturday: 8am - 10pm"))

  const locationDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "location")
  _index_js__WEBPACK_IMPORTED_MODULE_2__.contentSpace.appendChild(locationDiv)
  const location = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Location  ")
  locationDiv.appendChild(location)
  location.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_mapMarker_png__WEBPACK_IMPORTED_MODULE_1__))
  locationDiv.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Lands Between, Cave South of Caelid. (-184 : 162)"))
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentSpace": () => (/* binding */ contentSpace)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");
/* harmony import */ var _images_hpBar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hpBar.png */ "./src/images/hpBar.png");


// Tab switcher buttons
const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

// Main page element.
const contentSpace = document.getElementById("content");


let currentTab = homeButton;







function clickTabSwitcher() {
  // Clears current tab
  contentSpace.textContent = ""
  // Check if current tab is the same as the one user clicked to prevent the function from triggering every click.
  if (currentTab != this) {
    // Removes health bar from current tab.
    currentTab.removeChild(currentTab.children[0])
    // Reenable current tab's click event.
    currentTab.disabled = false
    // Change current tab to new one.
    currentTab = this
  }
  // Disable current tab's click event.
  currentTab.disabled = true;
  if (homeButton.children.length == 0) {
    currentTab.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__["default"])("img", "tabSelector", undefined, _images_hpBar_png__WEBPACK_IMPORTED_MODULE_5__));
  }
  if (currentTab == homeButton) { (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); }
  else if (currentTab == menuButton) { (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); }
  else { (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])(); }
}

// Adds clickTabSwitcher to each button click event.
homeButton.addEventListener("click", clickTabSwitcher, false)
menuButton.addEventListener("click", clickTabSwitcher, false)
contactButton.addEventListener("click", clickTabSwitcher, false)

// Default page on load.
homeButton.click()

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");
/* harmony import */ var _images_runes_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/runes.png */ "./src/images/runes.png");
/* harmony import */ var _images_goldenSeed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/goldenSeed.png */ "./src/images/goldenSeed.png");
/* harmony import */ var _images_sacredTear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sacredTear.png */ "./src/images/sacredTear.png");
/* harmony import */ var _images_rowaFruit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rowaFruit.png */ "./src/images/rowaFruit.png");
/* harmony import */ var _images_crabEggs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/crabEggs.png */ "./src/images/crabEggs.png");
/* harmony import */ var _images_riceBowl_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/riceBowl.jpg */ "./src/images/riceBowl.jpg");
/* harmony import */ var _images_exaltedFlesh_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/exaltedFlesh.png */ "./src/images/exaltedFlesh.png");
/* harmony import */ var _images_pickledTurtleNeck_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pickledTurtleNeck.png */ "./src/images/pickledTurtleNeck.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.js */ "./src/index.js");











function menu() {
  // Menu
  const titleDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", "title");
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(titleDiv);
  const title = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", undefined, undefined, "Menu");
  titleDiv.appendChild(title);

  // Beverages section
  const beveragesDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", undefined, "Beverages")
  beveragesDiv.classList.add("menuType")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(beveragesDiv);

  // Yummy golden seed
  const beveragesContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(beveragesContainer)
  beveragesContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Yummy Golden Seed"))
  beveragesContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "For the first timers, we give out succulent Golden Seeds for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
  const beveragesSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  beveragesContainer.appendChild(beveragesSubcontainer)
  const seedPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "50000")
  beveragesSubcontainer.appendChild(seedPrice)
  seedPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  beveragesSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_goldenSeed_png__WEBPACK_IMPORTED_MODULE_2__))

  // Sacred Tear
  const beveragesContainer2 = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(beveragesContainer2)
  beveragesContainer2.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Sacred Tear"))
  beveragesContainer2.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "For the first timers, we give out restorative Sacred Tears for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
  const beveragesSubcontainer2 = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  beveragesContainer2.appendChild(beveragesSubcontainer2)
  const tearPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "50000")
  beveragesSubcontainer2.appendChild(tearPrice)
  tearPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  beveragesSubcontainer2.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_sacredTear_png__WEBPACK_IMPORTED_MODULE_3__))

  // Sides section
  const sidesDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", undefined, "Sides")
  sidesDiv.classList.add("menuType")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(sidesDiv);

  // Rowa Fruit
  const fruitContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(fruitContainer)
  fruitContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Rowa Fruit"))
  fruitContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Rowa Fruit is used in many recipes you'll find in the Lands Between, Tarnished. Very good for preserved foods. We refill our stocks after every visit!"))
  const fruitSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  fruitContainer.appendChild(fruitSubcontainer)
  const fruitPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "10")
  fruitSubcontainer.appendChild(fruitPrice)
  fruitPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  fruitSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_rowaFruit_png__WEBPACK_IMPORTED_MODULE_4__))

  // Crab Eggs
  const crabContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(crabContainer)
  crabContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Crab Egss"))
  crabContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Crab Eggs are used in many meat dishes resulting in a very healthy, robuste meal. We refill our stocks after every visit!"))
  const crabSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  crabContainer.appendChild(crabSubcontainer)
  const crabPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "10")
  crabSubcontainer.appendChild(crabPrice)
  crabPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  crabSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_crabEggs_png__WEBPACK_IMPORTED_MODULE_5__))

    // Main Dish Section
  const mainDishDiv = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent", undefined, "Main Dishes")
  mainDishDiv.classList.add("menuType")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(mainDishDiv);

  // Radahn's Famous Rice
  const riceBowlContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(riceBowlContainer)
  riceBowlContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Radahn's Famous Rice"))
  riceBowlContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "Just a bowl of rice. Tasty."))
  const riceBowlSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  riceBowlContainer.appendChild(riceBowlSubcontainer)
  const riceBowlPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "10")
  riceBowlSubcontainer.appendChild(riceBowlPrice)
  riceBowlPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  riceBowlSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_riceBowl_jpg__WEBPACK_IMPORTED_MODULE_6__))

  // Exalted Flesh
  const exaltedContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(exaltedContainer)
  exaltedContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Exalted Flesh"))
  exaltedContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "A fine piece of meat that makes you stronger. Many have felled numerous foes after eating this heroic delicacy."))
  const exaltedSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  exaltedContainer.appendChild(exaltedSubcontainer)
  const exaltedPrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "50")
  exaltedSubcontainer.appendChild(exaltedPrice)
  exaltedPrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  exaltedSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_exaltedFlesh_png__WEBPACK_IMPORTED_MODULE_7__))

  // Pickled Turtle Neck
  const turtleContainer = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subcontent")
  _index_js__WEBPACK_IMPORTED_MODULE_9__.contentSpace.appendChild(turtleContainer)
  turtleContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "subtitle", undefined, "Pickled Turtle Neck"))
  turtleContainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, "A bitter medicinal piece of meat. Regardless of the Tarnished's tastes, it is a well of endless power when the nutrients course through your body."))
  const turtleSubcontainer = ((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container"))
  turtleContainer.appendChild(turtleSubcontainer)
  const turtlePrice = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "price", undefined, "50")
  turtleSubcontainer.appendChild(turtlePrice)
  turtlePrice.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_runes_png__WEBPACK_IMPORTED_MODULE_1__))
  turtleSubcontainer.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])("img", undefined, undefined, _images_pickledTurtleNeck_png__WEBPACK_IMPORTED_MODULE_8__))
}

/***/ }),

/***/ "./src/images/GoldenFrame.png":
/*!************************************!*\
  !*** ./src/images/GoldenFrame.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c77f0a16de36f85bc822.png";

/***/ }),

/***/ "./src/images/crabEggs.png":
/*!*********************************!*\
  !*** ./src/images/crabEggs.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37b3b2c9eedc3a02099e.png";

/***/ }),

/***/ "./src/images/exaltedFlesh.png":
/*!*************************************!*\
  !*** ./src/images/exaltedFlesh.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47dd8ad1b938c95b289e.png";

/***/ }),

/***/ "./src/images/fia.jpeg":
/*!*****************************!*\
  !*** ./src/images/fia.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3a7d7ca4d1add1dbb0b.jpeg";

/***/ }),

/***/ "./src/images/goldenSeed.png":
/*!***********************************!*\
  !*** ./src/images/goldenSeed.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d007c38105a19a7df90.png";

/***/ }),

/***/ "./src/images/hpBar.png":
/*!******************************!*\
  !*** ./src/images/hpBar.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eea95ea6f4cd76474de1.png";

/***/ }),

/***/ "./src/images/mapMarker.png":
/*!**********************************!*\
  !*** ./src/images/mapMarker.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fefcda5b863d5b2e5c15.png";

/***/ }),

/***/ "./src/images/melina.jpeg":
/*!********************************!*\
  !*** ./src/images/melina.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "185230a980eca991ff88.jpeg";

/***/ }),

/***/ "./src/images/pickledTurtleNeck.png":
/*!******************************************!*\
  !*** ./src/images/pickledTurtleNeck.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c912a56d94f7d9b11236.png";

/***/ }),

/***/ "./src/images/ranni.png":
/*!******************************!*\
  !*** ./src/images/ranni.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b75747583c9a846ab0.png";

/***/ }),

/***/ "./src/images/rice.jpeg":
/*!******************************!*\
  !*** ./src/images/rice.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6795025aa3532f3e5af3.jpeg";

/***/ }),

/***/ "./src/images/riceBowl.jpg":
/*!*********************************!*\
  !*** ./src/images/riceBowl.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ade2791f25c9e4c0f18a.jpg";

/***/ }),

/***/ "./src/images/rowaFruit.png":
/*!**********************************!*\
  !*** ./src/images/rowaFruit.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37a128aa605659110009.png";

/***/ }),

/***/ "./src/images/runes.png":
/*!******************************!*\
  !*** ./src/images/runes.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d37790b261814cec642a.png";

/***/ }),

/***/ "./src/images/sacredTear.png":
/*!***********************************!*\
  !*** ./src/images/sacredTear.png ***!
  \***********************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmljZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvR29sZGVuRnJhbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRlbXAgY3NzIGZpbGUgdG8gbWFrZSB0aGluZ3MgbG9vayBsaWtlIGEgcHJvcGVyIHdlYnNpdGUgYmVmb3JlIHdlYnBhY2sgc3RlcC4gKi9cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogLUhlcm8sIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBBZGQgZWZmZWN0cyB0byBtZW51IGJ1dHRvbnMuICovXFxuI25hdmlnYXRpb24gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25hdmlnYXRpb24gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNuYXZpZ2F0aW9uLCAjY29udGVudCwgI2Zvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgNzAsIDE5LCAwLjkxMSk7XFxufVxcblxcbi50YWJTZWxlY3RvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xNnB4O1xcbiAgbGVmdDogLTE1cHg7XFxufVxcblxcbi8qIE1haW4gcGFnZSAqL1xcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWYnO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTI1JSAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogVGl0bGUgb2YgdGhlIGN1cnJlbnQgdGFiICovXFxuI3RpdGxlIHtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gIG1pbi13aWR0aDogNTc2cHg7XFxufVxcblxcbiAvKiBSZXZpZXcgZnJvbSBIb21lIFRhYiAqL1xcbiNyZXZpZXcge1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zdWJjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBUeXBlcyBvZiBmb29kIGZyb20gTWVudSBUYWIgKi9cXG4ubWVudVR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogUHJpY2VzIG9mIGZvb2QgZnJvbSBNZW51IFRhYiAqL1xcbi5wcmljZSB7XFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBDb250YWluZXJzIGZvciBtZW51IGl0ZW1zICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBDb250YWN0IGNvbnRhaW5lcnMuICovXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG5cXG4uY29udGFjdENvbnRhaW5lciBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjM7XFxufVxcblxcbi8qIENvbnRhY3QgcGhvdG9zLiAqL1xcbi5jb250YWN0UGhvdG8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRkFBaUY7O0FBRWpGO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdHQUFnRztFQUNoRyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlEQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBLGNBQWM7QUFDZDtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5REFBaUQ7RUFDakQsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztDQUVDLHlCQUF5QjtBQUMxQjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGVtcCBjc3MgZmlsZSB0byBtYWtlIHRoaW5ncyBsb29rIGxpa2UgYSBwcm9wZXIgd2Vic2l0ZSBiZWZvcmUgd2VicGFjayBzdGVwLiAqL1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAtSGVybywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yaWNlLmpwZWdcXFwiKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEFkZCBlZmZlY3RzIHRvIG1lbnUgYnV0dG9ucy4gKi9cXG4jbmF2aWdhdGlvbiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNuYXZpZ2F0aW9uIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI25hdmlnYXRpb24sICNjb250ZW50LCAjZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCA3MCwgMTksIDAuOTExKTtcXG59XFxuXFxuLnRhYlNlbGVjdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTE2cHg7XFxuICBsZWZ0OiAtMTVweDtcXG59XFxuXFxuLyogTWFpbiBwYWdlICovXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZic7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL0dvbGRlbkZyYW1lLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjUlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4vKiBUaXRsZSBvZiB0aGUgY3VycmVudCB0YWIgKi9cXG4jdGl0bGUge1xcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbiAgbWluLXdpZHRoOiA1NzZweDtcXG59XFxuXFxuIC8qIFJldmlldyBmcm9tIEhvbWUgVGFiICovXFxuI3JldmlldyB7XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICB3aWR0aDogMzAwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnN1YmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi8qIFR5cGVzIG9mIGZvb2QgZnJvbSBNZW51IFRhYiAqL1xcbi5tZW51VHlwZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBQcmljZXMgb2YgZm9vZCBmcm9tIE1lbnUgVGFiICovXFxuLnByaWNlIHtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi8qIENvbnRhaW5lcnMgZm9yIG1lbnUgaXRlbXMgKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIENvbnRhY3QgY29udGFpbmVycy4gKi9cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHAge1xcbiAgbGluZS1oZWlnaHQ6IDAuMztcXG59XFxuXFxuLyogQ29udGFjdCBwaG90b3MuICovXFxuLmNvbnRhY3RQaG90byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG5ld0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENyZWF0b3IuanNcIlxuaW1wb3J0IG1lbGluYSBmcm9tIFwiLi9pbWFnZXMvbWVsaW5hLmpwZWdcIlxuaW1wb3J0IGZpYSBmcm9tIFwiLi9pbWFnZXMvZmlhLmpwZWdcIlxuaW1wb3J0IHJhbm5pIGZyb20gXCIuL2ltYWdlcy9yYW5uaS5wbmdcIlxuaW1wb3J0IHtjb250ZW50U3BhY2V9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFRhYigpIHtcbiAgLy8gQ29udGFjdCB1c1xuICBjb25zdCB0aXRsZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwidGl0bGVcIik7XG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIGNvbnN0IHRpdGxlID0gbmV3RWxlbWVudChcImgxXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkNvbnRhY3QgVXNcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBNZWxpYW5hIGNvbnRhY3QgaW5mby5cbiAgY29uc3QgbWVsaW5hRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgbWVsaW5hRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChtZWxpbmFEaXYpXG4gIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIk1lbGluYVwiKSlcbiAgbWVsaW5hRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1haWRlbiAoRmFrZSlcIikpXG4gIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJUT1UtQ0hHLVJBU1NcIikpXG4gIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJtZWxpbmFAZnJvbXNvZnQuY29tXCIpKVxuICBtZWxpbmFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCBcImNvbnRhY3RQaG90b1wiLCB1bmRlZmluZWQsIG1lbGluYSkpXG5cbiAgLy8gRmlhIGNvbnRhY3QgaW5mby5cbiAgY29uc3QgZmlhRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgZmlhRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChmaWFEaXYpXG4gIGZpYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkZpYVwiKSlcbiAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1vbVwiKSlcbiAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIldBUi1NSFUtR05PV1wiKSlcbiAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcImZpYUBmcm9tc29mdC5jb21cIikpXG4gIGZpYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwiY29udGFjdFBob3RvXCIsIHVuZGVmaW5lZCwgZmlhKSlcblxuICAvLyBSYW5uaSBjb250YWN0IGluZm8uXG4gIGNvbnN0IHJhbm5pRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgcmFubmlEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHJhbm5pRGl2KVxuICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlJhbm5pXCIpKVxuICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJXaWZlICg/KVwiKSlcbiAgcmFubmlEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQ09OLVZPTC1VVEVEXCIpKVxuICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJyYW5uaUBmcm9tc29mdC5jb21cIikpXG4gIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJjb250YWN0UGhvdG9cIiwgdW5kZWZpbmVkLCByYW5uaSkpXG59IiwiLy8gQ3JlYXRlcyBlbGVtZW50IHdpdGggY2xhc3MsIGlkLCB0ZXh0IHNwZWNpZmljYXRpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3RWxlbWVudChlbGVtZW50VHlwZSwgY2xhc3NOYW1lID0gXCJcIiwgaWROYW1lID0gXCJcIiwgdGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50VHlwZX1gKTtcbiAgaWYgKGNsYXNzTmFtZSAhPSBcIlwiKSB7ICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApIH1cbiAgaWYgKGlkTmFtZSAhPSBcIlwiKSB7ICBlbGVtZW50LmlkID0gaWROYW1lOyB9XG4gIGlmIChlbGVtZW50VHlwZSA9PSBcImltZ1wiKSB7XG4gICAgZWxlbWVudC5zcmMgPSB0ZXh0XG4gIH0gZWxzZSB7ICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDsgfVxuICByZXR1cm4gZWxlbWVudFxufSIsImltcG9ydCBuZXdFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yLmpzXCJcbmltcG9ydCBtYXJrZXIgZnJvbSBcIi4vaW1hZ2VzL21hcE1hcmtlci5wbmdcIjtcbmltcG9ydCB7Y29udGVudFNwYWNlfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJ0aXRsZVwiKTtcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgY29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDFcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiUmFkYWhuJ3MgUmVwYXMgUmVzdGF1cmFudFwiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHJldmlld0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwicmV2aWV3XCIsIFwiRXZlbiBiZWVuIHN0dWNrIGluIGEgcmFpZCB3aXRoIHlvdXIgYm95cyBmb3IgbW9udGhzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGRlc2VydD8gRmVhciBub3QgZm9yIHRoaXMgcGxhY2UgaXMgbG9jYXRlZCBpbiBhIGNhdmUgcmlnaHQgYnkgR2VuZXJhbCBSYWRhaG4hIEl0IGhhcyBleGNlbGxlbnQgcmljZSBpbiBkaWZmZXJlbnQgc2hhcGVzIGFuZCBmb3Jtcy5cIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHJldmlld0Rpdik7XG4gIHJldmlld0Rpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCBcInN1YnRpdGxlXCIsIFwicmV2aWV3ZXJcIiwgXCJUYXJuaXNoZWQgKFJlYWwpXCIpKTtcblxuICBjb25zdCBzY2hlZHVsZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwic2NoZWR1bGVcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHNjaGVkdWxlRGl2KVxuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkhvdXJzXCIpKVxuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJTdW5kYXk6IDhhbSAtIDhwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTW9uZGF5OiA2YW0gLSA4cG1cIikpXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlR1ZXNkYXk6IDZhbSAtIDhwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiV2VkbmVzZGF5OiA2YW0gLSA4cG1cIikpXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlRodXJzZGF5OiA2YW0gLSA4cG1cIikpXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkZyaWRheTogNmFtIC0gMTBwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIikpXG5cbiAgY29uc3QgbG9jYXRpb25EaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCBcImxvY2F0aW9uXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdilcbiAgY29uc3QgbG9jYXRpb24gPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkxvY2F0aW9uICBcIilcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb24pXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1hcmtlcikpXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkxhbmRzIEJldHdlZW4sIENhdmUgU291dGggb2YgQ2FlbGlkLiAoLTE4NCA6IDE2MilcIikpXG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG4vLyBUYWIgc3dpdGNoZXIgYnV0dG9uc1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvblwiKS5jaGlsZHJlblswXVxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvblwiKS5jaGlsZHJlblsxXVxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvblwiKS5jaGlsZHJlblsyXVxuXG4vLyBNYWluIHBhZ2UgZWxlbWVudC5cbmNvbnN0IGNvbnRlbnRTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmV4cG9ydCB7Y29udGVudFNwYWNlfTtcblxubGV0IGN1cnJlbnRUYWIgPSBob21lQnV0dG9uO1xuXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIlxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiXG5pbXBvcnQgbmV3RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvci5qc1wiXG5pbXBvcnQgdGFiU2VsZWN0b3IgZnJvbSBcIi4vaW1hZ2VzL2hwQmFyLnBuZ1wiXG5cbmZ1bmN0aW9uIGNsaWNrVGFiU3dpdGNoZXIoKSB7XG4gIC8vIENsZWFycyBjdXJyZW50IHRhYlxuICBjb250ZW50U3BhY2UudGV4dENvbnRlbnQgPSBcIlwiXG4gIC8vIENoZWNrIGlmIGN1cnJlbnQgdGFiIGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgdXNlciBjbGlja2VkIHRvIHByZXZlbnQgdGhlIGZ1bmN0aW9uIGZyb20gdHJpZ2dlcmluZyBldmVyeSBjbGljay5cbiAgaWYgKGN1cnJlbnRUYWIgIT0gdGhpcykge1xuICAgIC8vIFJlbW92ZXMgaGVhbHRoIGJhciBmcm9tIGN1cnJlbnQgdGFiLlxuICAgIGN1cnJlbnRUYWIucmVtb3ZlQ2hpbGQoY3VycmVudFRhYi5jaGlsZHJlblswXSlcbiAgICAvLyBSZWVuYWJsZSBjdXJyZW50IHRhYidzIGNsaWNrIGV2ZW50LlxuICAgIGN1cnJlbnRUYWIuZGlzYWJsZWQgPSBmYWxzZVxuICAgIC8vIENoYW5nZSBjdXJyZW50IHRhYiB0byBuZXcgb25lLlxuICAgIGN1cnJlbnRUYWIgPSB0aGlzXG4gIH1cbiAgLy8gRGlzYWJsZSBjdXJyZW50IHRhYidzIGNsaWNrIGV2ZW50LlxuICBjdXJyZW50VGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgaWYgKGhvbWVCdXR0b24uY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICBjdXJyZW50VGFiLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJ0YWJTZWxlY3RvclwiLCB1bmRlZmluZWQsIHRhYlNlbGVjdG9yKSk7XG4gIH1cbiAgaWYgKGN1cnJlbnRUYWIgPT0gaG9tZUJ1dHRvbikgeyBob21lKCk7IH1cbiAgZWxzZSBpZiAoY3VycmVudFRhYiA9PSBtZW51QnV0dG9uKSB7IG1lbnUoKTsgfVxuICBlbHNlIHsgY29udGFjdCgpOyB9XG59XG5cbi8vIEFkZHMgY2xpY2tUYWJTd2l0Y2hlciB0byBlYWNoIGJ1dHRvbiBjbGljayBldmVudC5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrVGFiU3dpdGNoZXIsIGZhbHNlKVxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tUYWJTd2l0Y2hlciwgZmFsc2UpXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja1RhYlN3aXRjaGVyLCBmYWxzZSlcblxuLy8gRGVmYXVsdCBwYWdlIG9uIGxvYWQuXG5ob21lQnV0dG9uLmNsaWNrKCkiLCJpbXBvcnQgbmV3RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvci5qc1wiXG5pbXBvcnQgcnVuZXMgZnJvbSBcIi4vaW1hZ2VzL3J1bmVzLnBuZ1wiXG5pbXBvcnQgc2VlZCBmcm9tIFwiLi9pbWFnZXMvZ29sZGVuU2VlZC5wbmdcIlxuaW1wb3J0IHRlYXIgZnJvbSBcIi4vaW1hZ2VzL3NhY3JlZFRlYXIucG5nXCJcbmltcG9ydCBmcnVpdCBmcm9tIFwiLi9pbWFnZXMvcm93YUZydWl0LnBuZ1wiXG5pbXBvcnQgY3JhYiBmcm9tIFwiLi9pbWFnZXMvY3JhYkVnZ3MucG5nXCJcbmltcG9ydCByaWNlQm93bCBmcm9tIFwiLi9pbWFnZXMvcmljZUJvd2wuanBnXCJcbmltcG9ydCBleGFsdGVkIGZyb20gXCIuL2ltYWdlcy9leGFsdGVkRmxlc2gucG5nXCJcbmltcG9ydCB0dXJ0bGUgZnJvbSBcIi4vaW1hZ2VzL3BpY2tsZWRUdXJ0bGVOZWNrLnBuZ1wiXG5pbXBvcnQge2NvbnRlbnRTcGFjZX0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgLy8gTWVudVxuICBjb25zdCB0aXRsZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwidGl0bGVcIik7XG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gIGNvbnN0IHRpdGxlID0gbmV3RWxlbWVudChcImgxXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1lbnVcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBCZXZlcmFnZXMgc2VjdGlvblxuICBjb25zdCBiZXZlcmFnZXNEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCB1bmRlZmluZWQsIFwiQmV2ZXJhZ2VzXCIpXG4gIGJldmVyYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudVR5cGVcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0Rpdik7XG5cbiAgLy8gWXVtbXkgZ29sZGVuIHNlZWRcbiAgY29uc3QgYmV2ZXJhZ2VzQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0NvbnRhaW5lcilcbiAgYmV2ZXJhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiWXVtbXkgR29sZGVuIFNlZWRcIikpXG4gIGJldmVyYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJGb3IgdGhlIGZpcnN0IHRpbWVycywgd2UgZ2l2ZSBvdXQgc3VjY3VsZW50IEdvbGRlbiBTZWVkcyBmb3IgZW5oYW5jaW5nIEVzdHVzIEZsYXNrcyB1c2VzIGZvciBhIGZhaXIgcHJpY2UhIChPbmUgcGVyIFRhcm5pc2hlZCBvbmx5KVwiKSlcbiAgY29uc3QgYmV2ZXJhZ2VzU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIGJldmVyYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZXZlcmFnZXNTdWJjb250YWluZXIpXG4gIGNvbnN0IHNlZWRQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiNTAwMDBcIilcbiAgYmV2ZXJhZ2VzU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHNlZWRQcmljZSlcbiAgc2VlZFByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgYmV2ZXJhZ2VzU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHNlZWQpKVxuXG4gIC8vIFNhY3JlZCBUZWFyXG4gIGNvbnN0IGJldmVyYWdlc0NvbnRhaW5lcjIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzQ29udGFpbmVyMilcbiAgYmV2ZXJhZ2VzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlNhY3JlZCBUZWFyXCIpKVxuICBiZXZlcmFnZXNDb250YWluZXIyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkZvciB0aGUgZmlyc3QgdGltZXJzLCB3ZSBnaXZlIG91dCByZXN0b3JhdGl2ZSBTYWNyZWQgVGVhcnMgZm9yIGVuaGFuY2luZyBFc3R1cyBGbGFza3MgdXNlcyBmb3IgYSBmYWlyIHByaWNlISAoT25lIHBlciBUYXJuaXNoZWQgb25seSlcIikpXG4gIGNvbnN0IGJldmVyYWdlc1N1YmNvbnRhaW5lcjIgPSAobmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKSlcbiAgYmV2ZXJhZ2VzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChiZXZlcmFnZXNTdWJjb250YWluZXIyKVxuICBjb25zdCB0ZWFyUHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjUwMDAwXCIpXG4gIGJldmVyYWdlc1N1YmNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQodGVhclByaWNlKVxuICB0ZWFyUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICBiZXZlcmFnZXNTdWJjb250YWluZXIyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRlYXIpKVxuXG4gIC8vIFNpZGVzIHNlY3Rpb25cbiAgY29uc3Qgc2lkZXNEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCB1bmRlZmluZWQsIFwiU2lkZXNcIilcbiAgc2lkZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVUeXBlXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChzaWRlc0Rpdik7XG5cbiAgLy8gUm93YSBGcnVpdFxuICBjb25zdCBmcnVpdENvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChmcnVpdENvbnRhaW5lcilcbiAgZnJ1aXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJSb3dhIEZydWl0XCIpKVxuICBmcnVpdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJSb3dhIEZydWl0IGlzIHVzZWQgaW4gbWFueSByZWNpcGVzIHlvdSdsbCBmaW5kIGluIHRoZSBMYW5kcyBCZXR3ZWVuLCBUYXJuaXNoZWQuIFZlcnkgZ29vZCBmb3IgcHJlc2VydmVkIGZvb2RzLiBXZSByZWZpbGwgb3VyIHN0b2NrcyBhZnRlciBldmVyeSB2aXNpdCFcIikpXG4gIGNvbnN0IGZydWl0U3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIGZydWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZydWl0U3ViY29udGFpbmVyKVxuICBjb25zdCBmcnVpdFByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCIxMFwiKVxuICBmcnVpdFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChmcnVpdFByaWNlKVxuICBmcnVpdFByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgZnJ1aXRTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnJ1aXQpKVxuXG4gIC8vIENyYWIgRWdnc1xuICBjb25zdCBjcmFiQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGNyYWJDb250YWluZXIpXG4gIGNyYWJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJDcmFiIEVnc3NcIikpXG4gIGNyYWJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQ3JhYiBFZ2dzIGFyZSB1c2VkIGluIG1hbnkgbWVhdCBkaXNoZXMgcmVzdWx0aW5nIGluIGEgdmVyeSBoZWFsdGh5LCByb2J1c3RlIG1lYWwuIFdlIHJlZmlsbCBvdXIgc3RvY2tzIGFmdGVyIGV2ZXJ5IHZpc2l0IVwiKSlcbiAgY29uc3QgY3JhYlN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICBjcmFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyYWJTdWJjb250YWluZXIpXG4gIGNvbnN0IGNyYWJQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiMTBcIilcbiAgY3JhYlN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmFiUHJpY2UpXG4gIGNyYWJQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIGNyYWJTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY3JhYikpXG5cbiAgICAvLyBNYWluIERpc2ggU2VjdGlvblxuICBjb25zdCBtYWluRGlzaERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIHVuZGVmaW5lZCwgXCJNYWluIERpc2hlc1wiKVxuICBtYWluRGlzaERpdi5jbGFzc0xpc3QuYWRkKFwibWVudVR5cGVcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKG1haW5EaXNoRGl2KTtcblxuICAvLyBSYWRhaG4ncyBGYW1vdXMgUmljZVxuICBjb25zdCByaWNlQm93bENvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChyaWNlQm93bENvbnRhaW5lcilcbiAgcmljZUJvd2xDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJSYWRhaG4ncyBGYW1vdXMgUmljZVwiKSlcbiAgcmljZUJvd2xDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiSnVzdCBhIGJvd2wgb2YgcmljZS4gVGFzdHkuXCIpKVxuICBjb25zdCByaWNlQm93bFN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICByaWNlQm93bENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWNlQm93bFN1YmNvbnRhaW5lcilcbiAgY29uc3QgcmljZUJvd2xQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiMTBcIilcbiAgcmljZUJvd2xTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQocmljZUJvd2xQcmljZSlcbiAgcmljZUJvd2xQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIHJpY2VCb3dsU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJpY2VCb3dsKSlcblxuICAvLyBFeGFsdGVkIEZsZXNoXG4gIGNvbnN0IGV4YWx0ZWRDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoZXhhbHRlZENvbnRhaW5lcilcbiAgZXhhbHRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIkV4YWx0ZWQgRmxlc2hcIikpXG4gIGV4YWx0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQSBmaW5lIHBpZWNlIG9mIG1lYXQgdGhhdCBtYWtlcyB5b3Ugc3Ryb25nZXIuIE1hbnkgaGF2ZSBmZWxsZWQgbnVtZXJvdXMgZm9lcyBhZnRlciBlYXRpbmcgdGhpcyBoZXJvaWMgZGVsaWNhY3kuXCIpKVxuICBjb25zdCBleGFsdGVkU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIGV4YWx0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhhbHRlZFN1YmNvbnRhaW5lcilcbiAgY29uc3QgZXhhbHRlZFByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCI1MFwiKVxuICBleGFsdGVkU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKGV4YWx0ZWRQcmljZSlcbiAgZXhhbHRlZFByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgZXhhbHRlZFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBleGFsdGVkKSlcblxuICAvLyBQaWNrbGVkIFR1cnRsZSBOZWNrXG4gIGNvbnN0IHR1cnRsZUNvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZCh0dXJ0bGVDb250YWluZXIpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlBpY2tsZWQgVHVydGxlIE5lY2tcIikpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJBIGJpdHRlciBtZWRpY2luYWwgcGllY2Ugb2YgbWVhdC4gUmVnYXJkbGVzcyBvZiB0aGUgVGFybmlzaGVkJ3MgdGFzdGVzLCBpdCBpcyBhIHdlbGwgb2YgZW5kbGVzcyBwb3dlciB3aGVuIHRoZSBudXRyaWVudHMgY291cnNlIHRocm91Z2ggeW91ciBib2R5LlwiKSlcbiAgY29uc3QgdHVydGxlU3ViY29udGFpbmVyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIHR1cnRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJ0bGVTdWJjb250YWluZXIpXG4gIGNvbnN0IHR1cnRsZVByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCI1MFwiKVxuICB0dXJ0bGVTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQodHVydGxlUHJpY2UpXG4gIHR1cnRsZVByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgdHVydGxlU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHR1cnRsZSkpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==