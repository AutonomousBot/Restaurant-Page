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








homeButton.addEventListener("click", () => {
  // Change currentTab variable and the selected tab display.
  if (currentTab != homeButton) {
    currentTab.removeChild(currentTab.children[0])
    if (currentTab == menuButton) {
      menuButton.disabled = false;
    }
    else {
      contactButton.disabled = false;
    }
    currentTab = homeButton
  }
  // Clears previous tab.
  contentSpace.textContent = ""
  // Disable current tab's click event.
  homeButton.disabled = true;
  if (homeButton.children.length == 0) {
    currentTab.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__["default"])("img", "tabSelector", undefined, _images_hpBar_png__WEBPACK_IMPORTED_MODULE_5__));
  }
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}, false)

menuButton.addEventListener("click", () => {
  // Change currentTab variable and the selected tab display.
  currentTab.removeChild(currentTab.children[0])
  if (currentTab == homeButton) {
    homeButton.disabled = false;
  }
  else {
    contactButton.disabled = false;
  }
  currentTab = menuButton
  // Clears previous tab.
  contentSpace.textContent = ""
  // Disable current tab's click event.
  menuButton.disabled = true;
  currentTab.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__["default"])("img", "tabSelector", undefined, _images_hpBar_png__WEBPACK_IMPORTED_MODULE_5__));
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}, false)

contactButton.addEventListener("click", () => {
    // Change currentTab variable and the selected tab display.
    currentTab.removeChild(currentTab.children[0])
    if (currentTab == homeButton) {
      homeButton.disabled = false;
    }
    else {
      menuButton.disabled = false;
    }
    currentTab = contactButton
    // Clears previous tab.
    contentSpace.textContent = ""
    // Disable current tab's click event.
    contactButton.disabled = true;
    currentTab.appendChild((0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__["default"])("img", "tabSelector", undefined, _images_hpBar_png__WEBPACK_IMPORTED_MODULE_5__));
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
}, false)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBVTtBQUN4QztBQUNBLHNCQUFzQiw4REFBVTtBQUNoQztBQUNBLDBCQUEwQiw4REFBVSw4QkFBOEIsOENBQUs7QUFDdkUsaUNBQWlDLDhEQUFVLDhCQUE4QiwwREFBTTtBQUMvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yaWNlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Hb2xkZW5GcmFtZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGVtcCBjc3MgZmlsZSB0byBtYWtlIHRoaW5ncyBsb29rIGxpa2UgYSBwcm9wZXIgd2Vic2l0ZSBiZWZvcmUgd2VicGFjayBzdGVwLiAqL1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAtSGVybywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIEFkZCBlZmZlY3RzIHRvIG1lbnUgYnV0dG9ucy4gKi9cXG4jbmF2aWdhdGlvbiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNuYXZpZ2F0aW9uIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI25hdmlnYXRpb24sICNjb250ZW50LCAjZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCA3MCwgMTksIDAuOTExKTtcXG59XFxuXFxuLnRhYlNlbGVjdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTE2cHg7XFxuICBsZWZ0OiAtMTVweDtcXG59XFxuXFxuLyogTWFpbiBwYWdlICovXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZic7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjUlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4vKiBUaXRsZSBvZiB0aGUgY3VycmVudCB0YWIgKi9cXG4jdGl0bGUge1xcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbiAgbWluLXdpZHRoOiA1NzZweDtcXG59XFxuXFxuIC8qIFJldmlldyBmcm9tIEhvbWUgVGFiICovXFxuI3JldmlldyB7XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICB3aWR0aDogMzAwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnN1YmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi8qIFR5cGVzIG9mIGZvb2QgZnJvbSBNZW51IFRhYiAqL1xcbi5tZW51VHlwZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBQcmljZXMgb2YgZm9vZCBmcm9tIE1lbnUgVGFiICovXFxuLnByaWNlIHtcXG4gIGxpbmUtaGVpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi8qIENvbnRhaW5lcnMgZm9yIG1lbnUgaXRlbXMgKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIENvbnRhY3QgY29udGFpbmVycy4gKi9cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcblxcbi5jb250YWN0Q29udGFpbmVyIHAge1xcbiAgbGluZS1oZWlnaHQ6IDAuMztcXG59XFxuXFxuLyogQ29udGFjdCBwaG90b3MuICovXFxuLmNvbnRhY3RQaG90byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlGQUFpRjs7QUFFakY7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0dBQWdHO0VBQ2hHLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseURBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUEsY0FBYztBQUNkO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlEQUFpRDtFQUNqRCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0NBRUMseUJBQXlCO0FBQzFCO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUZW1wIGNzcyBmaWxlIHRvIG1ha2UgdGhpbmdzIGxvb2sgbGlrZSBhIHByb3BlciB3ZWJzaXRlIGJlZm9yZSB3ZWJwYWNrIHN0ZXAuICovXFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6IC1IZXJvLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3JpY2UuanBlZ1xcXCIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogQWRkIGVmZmVjdHMgdG8gbWVudSBidXR0b25zLiAqL1xcbiNuYXZpZ2F0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuYXZpZ2F0aW9uIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI25hdmlnYXRpb24ge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbmF2aWdhdGlvbiwgI2NvbnRlbnQsICNmb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDcwLCAxOSwgMC45MTEpO1xcbn1cXG5cXG4udGFiU2VsZWN0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMTZweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbn1cXG5cXG4vKiBNYWluIHBhZ2UgKi9cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmJztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvR29sZGVuRnJhbWUucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNSUgMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIFRpdGxlIG9mIHRoZSBjdXJyZW50IHRhYiAqL1xcbiN0aXRsZSB7XFxuICBib3JkZXI6IDhweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICBtaW4td2lkdGg6IDU3NnB4O1xcbn1cXG5cXG4gLyogUmV2aWV3IGZyb20gSG9tZSBUYWIgKi9cXG4jcmV2aWV3IHtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAzMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc3ViY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLyogVHlwZXMgb2YgZm9vZCBmcm9tIE1lbnUgVGFiICovXFxuLm1lbnVUeXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIFByaWNlcyBvZiBmb29kIGZyb20gTWVudSBUYWIgKi9cXG4ucHJpY2Uge1xcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogQ29udGFpbmVycyBmb3IgbWVudSBpdGVtcyAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogQ29udGFjdCBjb250YWluZXJzLiAqL1xcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMjtcXG59XFxuXFxuLmNvbnRhY3RDb250YWluZXIgcCB7XFxuICBsaW5lLWhlaWdodDogMC4zO1xcbn1cXG5cXG4vKiBDb250YWN0IHBob3Rvcy4gKi9cXG4uY29udGFjdFBob3RvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbmV3RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvci5qc1wiXG5pbXBvcnQgbWVsaW5hIGZyb20gXCIuL2ltYWdlcy9tZWxpbmEuanBlZ1wiXG5pbXBvcnQgZmlhIGZyb20gXCIuL2ltYWdlcy9maWEuanBlZ1wiXG5pbXBvcnQgcmFubmkgZnJvbSBcIi4vaW1hZ2VzL3Jhbm5pLnBuZ1wiXG5pbXBvcnQge2NvbnRlbnRTcGFjZX0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0VGFiKCkge1xuICAvLyBDb250YWN0IHVzXG4gIGNvbnN0IHRpdGxlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJ0aXRsZVwiKTtcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgY29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDFcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQ29udGFjdCBVc1wiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIC8vIE1lbGlhbmEgY29udGFjdCBpbmZvLlxuICBjb25zdCBtZWxpbmFEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBtZWxpbmFEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKG1lbGluYURpdilcbiAgbWVsaW5hRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiTWVsaW5hXCIpKVxuICBtZWxpbmFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWFpZGVuIChGYWtlKVwiKSlcbiAgbWVsaW5hRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlRPVS1DSEctUkFTU1wiKSlcbiAgbWVsaW5hRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIm1lbGluYUBmcm9tc29mdC5jb21cIikpXG4gIG1lbGluYURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwiY29udGFjdFBob3RvXCIsIHVuZGVmaW5lZCwgbWVsaW5hKSlcblxuICAvLyBGaWEgY29udGFjdCBpbmZvLlxuICBjb25zdCBmaWFEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBmaWFEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250YWluZXJcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGZpYURpdilcbiAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiRmlhXCIpKVxuICBmaWFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTW9tXCIpKVxuICBmaWFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiV0FSLU1IVS1HTk9XXCIpKVxuICBmaWFEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiZmlhQGZyb21zb2Z0LmNvbVwiKSlcbiAgZmlhRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJjb250YWN0UGhvdG9cIiwgdW5kZWZpbmVkLCBmaWEpKVxuXG4gIC8vIFJhbm5pIGNvbnRhY3QgaW5mby5cbiAgY29uc3QgcmFubmlEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICByYW5uaURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQocmFubmlEaXYpXG4gIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiUmFubmlcIikpXG4gIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIldpZmUgKD8pXCIpKVxuICByYW5uaURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJDT04tVk9MLVVURURcIikpXG4gIHJhbm5pRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcInJhbm5pQGZyb21zb2Z0LmNvbVwiKSlcbiAgcmFubmlEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCBcImNvbnRhY3RQaG90b1wiLCB1bmRlZmluZWQsIHJhbm5pKSlcbn0iLCIvLyBDcmVhdGVzIGVsZW1lbnQgd2l0aCBjbGFzcywgaWQsIHRleHQgc3BlY2lmaWNhdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdFbGVtZW50KGVsZW1lbnRUeXBlLCBjbGFzc05hbWUgPSBcIlwiLCBpZE5hbWUgPSBcIlwiLCB0ZXh0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnRUeXBlfWApO1xuICBpZiAoY2xhc3NOYW1lICE9IFwiXCIpIHsgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCkgfVxuICBpZiAoaWROYW1lICE9IFwiXCIpIHsgIGVsZW1lbnQuaWQgPSBpZE5hbWU7IH1cbiAgaWYgKGVsZW1lbnRUeXBlID09IFwiaW1nXCIpIHtcbiAgICBlbGVtZW50LnNyYyA9IHRleHRcbiAgfSBlbHNlIHsgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0OyB9XG4gIHJldHVybiBlbGVtZW50XG59IiwiaW1wb3J0IG5ld0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENyZWF0b3IuanNcIlxuaW1wb3J0IG1hcmtlciBmcm9tIFwiLi9pbWFnZXMvbWFwTWFya2VyLnBuZ1wiO1xuaW1wb3J0IHtjb250ZW50U3BhY2V9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCBcInRpdGxlXCIpO1xuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICBjb25zdCB0aXRsZSA9IG5ld0VsZW1lbnQoXCJoMVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJSYWRhaG4ncyBSZXBhcyBSZXN0YXVyYW50XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcmV2aWV3RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJyZXZpZXdcIiwgXCJFdmVuIGJlZW4gc3R1Y2sgaW4gYSByYWlkIHdpdGggeW91ciBib3lzIGZvciBtb250aHMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgZGVzZXJ0PyBGZWFyIG5vdCBmb3IgdGhpcyBwbGFjZSBpcyBsb2NhdGVkIGluIGEgY2F2ZSByaWdodCBieSBHZW5lcmFsIFJhZGFobiEgSXQgaGFzIGV4Y2VsbGVudCByaWNlIGluIGRpZmZlcmVudCBzaGFwZXMgYW5kIGZvcm1zLlwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQocmV2aWV3RGl2KTtcbiAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIFwic3VidGl0bGVcIiwgXCJyZXZpZXdlclwiLCBcIlRhcm5pc2hlZCAoUmVhbClcIikpO1xuXG4gIGNvbnN0IHNjaGVkdWxlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgXCJzY2hlZHVsZVwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoc2NoZWR1bGVEaXYpXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiSG91cnNcIikpXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlN1bmRheTogOGFtIC0gOHBtXCIpKVxuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJNb25kYXk6IDZhbSAtIDhwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiVHVlc2RheTogNmFtIC0gOHBtXCIpKVxuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJXZWRuZXNkYXk6IDZhbSAtIDhwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiVGh1cnNkYXk6IDZhbSAtIDhwbVwiKSlcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiRnJpZGF5OiA2YW0gLSAxMHBtXCIpKVxuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiKSlcblxuICBjb25zdCBsb2NhdGlvbkRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIsIFwibG9jYXRpb25cIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KVxuICBjb25zdCBsb2NhdGlvbiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiTG9jYXRpb24gIFwiKVxuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbilcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWFya2VyKSlcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTGFuZHMgQmV0d2VlbiwgQ2F2ZSBTb3V0aCBvZiBDYWVsaWQuICgtMTg0IDogMTYyKVwiKSlcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbi8vIFRhYiBzd2l0Y2hlciBidXR0b25zXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uXCIpLmNoaWxkcmVuWzBdXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uXCIpLmNoaWxkcmVuWzFdXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uXCIpLmNoaWxkcmVuWzJdXG5cbi8vIE1haW4gcGFnZSBlbGVtZW50LlxuY29uc3QgY29udGVudFNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuZXhwb3J0IHtjb250ZW50U3BhY2V9O1xuXG5sZXQgY3VycmVudFRhYiA9IGhvbWVCdXR0b247XG5cbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIlxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCJcbmltcG9ydCBuZXdFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yLmpzXCJcbmltcG9ydCB0YWJTZWxlY3RvciBmcm9tIFwiLi9pbWFnZXMvaHBCYXIucG5nXCJcblxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIENoYW5nZSBjdXJyZW50VGFiIHZhcmlhYmxlIGFuZCB0aGUgc2VsZWN0ZWQgdGFiIGRpc3BsYXkuXG4gIGlmIChjdXJyZW50VGFiICE9IGhvbWVCdXR0b24pIHtcbiAgICBjdXJyZW50VGFiLnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIuY2hpbGRyZW5bMF0pXG4gICAgaWYgKGN1cnJlbnRUYWIgPT0gbWVudUJ1dHRvbikge1xuICAgICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnRhY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudFRhYiA9IGhvbWVCdXR0b25cbiAgfVxuICAvLyBDbGVhcnMgcHJldmlvdXMgdGFiLlxuICBjb250ZW50U3BhY2UudGV4dENvbnRlbnQgPSBcIlwiXG4gIC8vIERpc2FibGUgY3VycmVudCB0YWIncyBjbGljayBldmVudC5cbiAgaG9tZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGlmIChob21lQnV0dG9uLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgY3VycmVudFRhYi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwidGFiU2VsZWN0b3JcIiwgdW5kZWZpbmVkLCB0YWJTZWxlY3RvcikpO1xuICB9XG4gIGhvbWUoKTtcbn0sIGZhbHNlKVxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIENoYW5nZSBjdXJyZW50VGFiIHZhcmlhYmxlIGFuZCB0aGUgc2VsZWN0ZWQgdGFiIGRpc3BsYXkuXG4gIGN1cnJlbnRUYWIucmVtb3ZlQ2hpbGQoY3VycmVudFRhYi5jaGlsZHJlblswXSlcbiAgaWYgKGN1cnJlbnRUYWIgPT0gaG9tZUJ1dHRvbikge1xuICAgIGhvbWVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250YWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgY3VycmVudFRhYiA9IG1lbnVCdXR0b25cbiAgLy8gQ2xlYXJzIHByZXZpb3VzIHRhYi5cbiAgY29udGVudFNwYWNlLnRleHRDb250ZW50ID0gXCJcIlxuICAvLyBEaXNhYmxlIGN1cnJlbnQgdGFiJ3MgY2xpY2sgZXZlbnQuXG4gIG1lbnVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjdXJyZW50VGFiLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgXCJ0YWJTZWxlY3RvclwiLCB1bmRlZmluZWQsIHRhYlNlbGVjdG9yKSk7XG4gIG1lbnUoKTtcbn0sIGZhbHNlKVxuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gQ2hhbmdlIGN1cnJlbnRUYWIgdmFyaWFibGUgYW5kIHRoZSBzZWxlY3RlZCB0YWIgZGlzcGxheS5cbiAgICBjdXJyZW50VGFiLnJlbW92ZUNoaWxkKGN1cnJlbnRUYWIuY2hpbGRyZW5bMF0pXG4gICAgaWYgKGN1cnJlbnRUYWIgPT0gaG9tZUJ1dHRvbikge1xuICAgICAgaG9tZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lbnVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudFRhYiA9IGNvbnRhY3RCdXR0b25cbiAgICAvLyBDbGVhcnMgcHJldmlvdXMgdGFiLlxuICAgIGNvbnRlbnRTcGFjZS50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAvLyBEaXNhYmxlIGN1cnJlbnQgdGFiJ3MgY2xpY2sgZXZlbnQuXG4gICAgY29udGFjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY3VycmVudFRhYi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIFwidGFiU2VsZWN0b3JcIiwgdW5kZWZpbmVkLCB0YWJTZWxlY3RvcikpO1xuICBjb250YWN0KCk7XG59LCBmYWxzZSlcblxuaG9tZUJ1dHRvbi5jbGljaygpIiwiaW1wb3J0IG5ld0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudENyZWF0b3IuanNcIlxuaW1wb3J0IHJ1bmVzIGZyb20gXCIuL2ltYWdlcy9ydW5lcy5wbmdcIlxuaW1wb3J0IHNlZWQgZnJvbSBcIi4vaW1hZ2VzL2dvbGRlblNlZWQucG5nXCJcbmltcG9ydCB0ZWFyIGZyb20gXCIuL2ltYWdlcy9zYWNyZWRUZWFyLnBuZ1wiXG5pbXBvcnQgZnJ1aXQgZnJvbSBcIi4vaW1hZ2VzL3Jvd2FGcnVpdC5wbmdcIlxuaW1wb3J0IGNyYWIgZnJvbSBcIi4vaW1hZ2VzL2NyYWJFZ2dzLnBuZ1wiXG5pbXBvcnQgcmljZUJvd2wgZnJvbSBcIi4vaW1hZ2VzL3JpY2VCb3dsLmpwZ1wiXG5pbXBvcnQgZXhhbHRlZCBmcm9tIFwiLi9pbWFnZXMvZXhhbHRlZEZsZXNoLnBuZ1wiXG5pbXBvcnQgdHVydGxlIGZyb20gXCIuL2ltYWdlcy9waWNrbGVkVHVydGxlTmVjay5wbmdcIlxuaW1wb3J0IHtjb250ZW50U3BhY2V9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIC8vIE1lbnVcbiAgY29uc3QgdGl0bGVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCBcInRpdGxlXCIpO1xuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICBjb25zdCB0aXRsZSA9IG5ld0VsZW1lbnQoXCJoMVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJNZW51XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gQmV2ZXJhZ2VzIHNlY3Rpb25cbiAgY29uc3QgYmV2ZXJhZ2VzRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgdW5kZWZpbmVkLCBcIkJldmVyYWdlc1wiKVxuICBiZXZlcmFnZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVUeXBlXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChiZXZlcmFnZXNEaXYpO1xuXG4gIC8vIFl1bW15IGdvbGRlbiBzZWVkXG4gIGNvbnN0IGJldmVyYWdlc0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChiZXZlcmFnZXNDb250YWluZXIpXG4gIGJldmVyYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiZGl2XCIsIFwic3VidGl0bGVcIiwgdW5kZWZpbmVkLCBcIll1bW15IEdvbGRlbiBTZWVkXCIpKVxuICBiZXZlcmFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiRm9yIHRoZSBmaXJzdCB0aW1lcnMsIHdlIGdpdmUgb3V0IHN1Y2N1bGVudCBHb2xkZW4gU2VlZHMgZm9yIGVuaGFuY2luZyBFc3R1cyBGbGFza3MgdXNlcyBmb3IgYSBmYWlyIHByaWNlISAoT25lIHBlciBUYXJuaXNoZWQgb25seSlcIikpXG4gIGNvbnN0IGJldmVyYWdlc1N1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICBiZXZlcmFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzU3ViY29udGFpbmVyKVxuICBjb25zdCBzZWVkUHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjUwMDAwXCIpXG4gIGJldmVyYWdlc1N1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWVkUHJpY2UpXG4gIHNlZWRQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIGJldmVyYWdlc1N1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzZWVkKSlcblxuICAvLyBTYWNyZWQgVGVhclxuICBjb25zdCBiZXZlcmFnZXNDb250YWluZXIyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGJldmVyYWdlc0NvbnRhaW5lcjIpXG4gIGJldmVyYWdlc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJTYWNyZWQgVGVhclwiKSlcbiAgYmV2ZXJhZ2VzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwicFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJGb3IgdGhlIGZpcnN0IHRpbWVycywgd2UgZ2l2ZSBvdXQgcmVzdG9yYXRpdmUgU2FjcmVkIFRlYXJzIGZvciBlbmhhbmNpbmcgRXN0dXMgRmxhc2tzIHVzZXMgZm9yIGEgZmFpciBwcmljZSEgKE9uZSBwZXIgVGFybmlzaGVkIG9ubHkpXCIpKVxuICBjb25zdCBiZXZlcmFnZXNTdWJjb250YWluZXIyID0gKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIikpXG4gIGJldmVyYWdlc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzU3ViY29udGFpbmVyMilcbiAgY29uc3QgdGVhclByaWNlID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByaWNlXCIsIHVuZGVmaW5lZCwgXCI1MDAwMFwiKVxuICBiZXZlcmFnZXNTdWJjb250YWluZXIyLmFwcGVuZENoaWxkKHRlYXJQcmljZSlcbiAgdGVhclByaWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJ1bmVzKSlcbiAgYmV2ZXJhZ2VzU3ViY29udGFpbmVyMi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0ZWFyKSlcblxuICAvLyBTaWRlcyBzZWN0aW9uXG4gIGNvbnN0IHNpZGVzRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIiwgdW5kZWZpbmVkLCBcIlNpZGVzXCIpXG4gIHNpZGVzRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51VHlwZVwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoc2lkZXNEaXYpO1xuXG4gIC8vIFJvd2EgRnJ1aXRcbiAgY29uc3QgZnJ1aXRDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoZnJ1aXRDb250YWluZXIpXG4gIGZydWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiUm93YSBGcnVpdFwiKSlcbiAgZnJ1aXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiUm93YSBGcnVpdCBpcyB1c2VkIGluIG1hbnkgcmVjaXBlcyB5b3UnbGwgZmluZCBpbiB0aGUgTGFuZHMgQmV0d2VlbiwgVGFybmlzaGVkLiBWZXJ5IGdvb2QgZm9yIHByZXNlcnZlZCBmb29kcy4gV2UgcmVmaWxsIG91ciBzdG9ja3MgYWZ0ZXIgZXZlcnkgdmlzaXQhXCIpKVxuICBjb25zdCBmcnVpdFN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICBmcnVpdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcnVpdFN1YmNvbnRhaW5lcilcbiAgY29uc3QgZnJ1aXRQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiMTBcIilcbiAgZnJ1aXRTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJ1aXRQcmljZSlcbiAgZnJ1aXRQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIGZydWl0U3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZydWl0KSlcblxuICAvLyBDcmFiIEVnZ3NcbiAgY29uc3QgY3JhYkNvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJjb250ZW50XCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChjcmFiQ29udGFpbmVyKVxuICBjcmFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiQ3JhYiBFZ3NzXCIpKVxuICBjcmFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkNyYWIgRWdncyBhcmUgdXNlZCBpbiBtYW55IG1lYXQgZGlzaGVzIHJlc3VsdGluZyBpbiBhIHZlcnkgaGVhbHRoeSwgcm9idXN0ZSBtZWFsLiBXZSByZWZpbGwgb3VyIHN0b2NrcyBhZnRlciBldmVyeSB2aXNpdCFcIikpXG4gIGNvbnN0IGNyYWJTdWJjb250YWluZXIgPSAobmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKSlcbiAgY3JhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmFiU3ViY29udGFpbmVyKVxuICBjb25zdCBjcmFiUHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjEwXCIpXG4gIGNyYWJTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JhYlByaWNlKVxuICBjcmFiUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICBjcmFiU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJpbWdcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNyYWIpKVxuXG4gICAgLy8gTWFpbiBEaXNoIFNlY3Rpb25cbiAgY29uc3QgbWFpbkRpc2hEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiLCB1bmRlZmluZWQsIFwiTWFpbiBEaXNoZXNcIilcbiAgbWFpbkRpc2hEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVUeXBlXCIpXG4gIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChtYWluRGlzaERpdik7XG5cbiAgLy8gUmFkYWhuJ3MgRmFtb3VzIFJpY2VcbiAgY29uc3QgcmljZUJvd2xDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQocmljZUJvd2xDb250YWluZXIpXG4gIHJpY2VCb3dsQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzdWJ0aXRsZVwiLCB1bmRlZmluZWQsIFwiUmFkYWhuJ3MgRmFtb3VzIFJpY2VcIikpXG4gIHJpY2VCb3dsQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkp1c3QgYSBib3dsIG9mIHJpY2UuIFRhc3R5LlwiKSlcbiAgY29uc3QgcmljZUJvd2xTdWJjb250YWluZXIgPSAobmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKSlcbiAgcmljZUJvd2xDb250YWluZXIuYXBwZW5kQ2hpbGQocmljZUJvd2xTdWJjb250YWluZXIpXG4gIGNvbnN0IHJpY2VCb3dsUHJpY2UgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJpY2VcIiwgdW5kZWZpbmVkLCBcIjEwXCIpXG4gIHJpY2VCb3dsU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHJpY2VCb3dsUHJpY2UpXG4gIHJpY2VCb3dsUHJpY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcnVuZXMpKVxuICByaWNlQm93bFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCByaWNlQm93bCkpXG5cbiAgLy8gRXhhbHRlZCBGbGVzaFxuICBjb25zdCBleGFsdGVkQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInN1YmNvbnRlbnRcIilcbiAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGV4YWx0ZWRDb250YWluZXIpXG4gIGV4YWx0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJFeGFsdGVkIEZsZXNoXCIpKVxuICBleGFsdGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQoXCJwXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkEgZmluZSBwaWVjZSBvZiBtZWF0IHRoYXQgbWFrZXMgeW91IHN0cm9uZ2VyLiBNYW55IGhhdmUgZmVsbGVkIG51bWVyb3VzIGZvZXMgYWZ0ZXIgZWF0aW5nIHRoaXMgaGVyb2ljIGRlbGljYWN5LlwiKSlcbiAgY29uc3QgZXhhbHRlZFN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICBleGFsdGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4YWx0ZWRTdWJjb250YWluZXIpXG4gIGNvbnN0IGV4YWx0ZWRQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiNTBcIilcbiAgZXhhbHRlZFN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChleGFsdGVkUHJpY2UpXG4gIGV4YWx0ZWRQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIGV4YWx0ZWRTdWJjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZXhhbHRlZCkpXG5cbiAgLy8gUGlja2xlZCBUdXJ0bGUgTmVja1xuICBjb25zdCB0dXJ0bGVDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwic3ViY29udGVudFwiKVxuICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQodHVydGxlQ29udGFpbmVyKVxuICB0dXJ0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcImRpdlwiLCBcInN1YnRpdGxlXCIsIHVuZGVmaW5lZCwgXCJQaWNrbGVkIFR1cnRsZSBOZWNrXCIpKVxuICB0dXJ0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQSBiaXR0ZXIgbWVkaWNpbmFsIHBpZWNlIG9mIG1lYXQuIFJlZ2FyZGxlc3Mgb2YgdGhlIFRhcm5pc2hlZCdzIHRhc3RlcywgaXQgaXMgYSB3ZWxsIG9mIGVuZGxlc3MgcG93ZXIgd2hlbiB0aGUgbnV0cmllbnRzIGNvdXJzZSB0aHJvdWdoIHlvdXIgYm9keS5cIikpXG4gIGNvbnN0IHR1cnRsZVN1YmNvbnRhaW5lciA9IChuZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpKVxuICB0dXJ0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodHVydGxlU3ViY29udGFpbmVyKVxuICBjb25zdCB0dXJ0bGVQcmljZSA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcmljZVwiLCB1bmRlZmluZWQsIFwiNTBcIilcbiAgdHVydGxlU3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHR1cnRsZVByaWNlKVxuICB0dXJ0bGVQcmljZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBydW5lcykpXG4gIHR1cnRsZVN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0dXJ0bGUpKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=