"use strict";
var Favia;
(self["webpackChunkfavia_client"] = self["webpackChunkfavia_client"] || []).push([[257],{

/***/ 67:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#suggest-container {
    position: absolute;
    padding-block: 1rem;
    padding-inline: 0.5rem;
    overflow-y: auto;
    z-index: 2;

    display: none;

    top: 115%;

    border-radius: 0.9375rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    width: 100%;
    max-height: 10rem;
}

#suggest-container li {
    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 0.5rem;
    list-style: none;

    border-radius: 5px;
}

#suggest-container li:hover {
    background-color: #f9f9f9;
}`, "",{"version":3,"sources":["webpack://./src/pages/createListing/addressSuggestionInput.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;;IAEV,aAAa;;IAEb,SAAS;;IAET,wBAAwB;IACxB,8CAA8C;IAC9C,sBAAsB;;IAEtB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;;IAEhB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["#suggest-container {\n    position: absolute;\n    padding-block: 1rem;\n    padding-inline: 0.5rem;\n    overflow-y: auto;\n    z-index: 2;\n\n    display: none;\n\n    top: 115%;\n\n    border-radius: 0.9375rem;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\n    background-color: #fff;\n\n    width: 100%;\n    max-height: 10rem;\n}\n\n#suggest-container li {\n    cursor: pointer;\n\n    padding-block: 0.5rem;\n    padding-inline: 0.5rem;\n    list-style: none;\n\n    border-radius: 5px;\n}\n\n#suggest-container li:hover {\n    background-color: #f9f9f9;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.media-upload-overlay {
    opacity: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    pointer-events: none;
    transition: opacity .5s;
}

.media-upload-overlay.enabled {
    opacity: 1;
}

.media-dnd-active {
    position: relative;
    scale: 1.05;
    z-index: 101;
}

/*
LIGHTBOX
*/
#media-upload-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;

    height: 100dvh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: #3f3f3f;
    opacity: 0;
    pointer-events: none;

    transition: opacity .3s;

    .media-upload-lightbox__navigation-controls-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);

        display: flex;
        justify-content: space-between;

        padding-inline: 1rem;

        button {
            all: unset;

            cursor: pointer;
            font-size: 2rem;
        }
    }

    .media-upload-lightbox__close-control-container {
        position: absolute;
        right: 1rem;
        top: 1rem;
        /*z-index: 103;*/

        color: #fff;
        font-size: 3rem;

        button {
            all: unset;
            cursor: pointer;
        }
    }

    .media-upload-lightbox__manage-control-container {
        position: absolute;

        top: 1rem;
        left: 1rem;

        display: flex;
        gap: 1rem;

        font-size: 1.6rem;

        button {
            all: unset;
            cursor: pointer;
        }
    }

    .media-upload-lightbox__main-image-container {
        height: 100%;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    &.active {
        pointer-events: all;
        opacity: 1;
    }
}`, "",{"version":3,"sources":["webpack://./src/pages/createListing/mediaUpload/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,MAAM;IACN,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;;CAEC;AACD;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;;IAEZ,cAAc;IACd,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,gBAAgB;IAChB,yBAAyB;IACzB,UAAU;IACV,oBAAoB;;IAEpB,uBAAuB;;IAEvB;QACI,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,2BAA2B;;QAE3B,aAAa;QACb,8BAA8B;;QAE9B,oBAAoB;;QAEpB;YACI,UAAU;;YAEV,eAAe;YACf,eAAe;QACnB;IACJ;;IAEA;QACI,kBAAkB;QAClB,WAAW;QACX,SAAS;QACT,gBAAgB;;QAEhB,WAAW;QACX,eAAe;;QAEf;YACI,UAAU;YACV,eAAe;QACnB;IACJ;;IAEA;QACI,kBAAkB;;QAElB,SAAS;QACT,UAAU;;QAEV,aAAa;QACb,SAAS;;QAET,iBAAiB;;QAEjB;YACI,UAAU;YACV,eAAe;QACnB;IACJ;;IAEA;QACI,YAAY;;QAEZ;YACI,mBAAmB;YACnB,WAAW;YACX,YAAY;QAChB;IACJ;;IAEA;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ","sourcesContent":[".media-upload-overlay {\n    opacity: 0;\n    top: 0;\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    pointer-events: none;\n    transition: opacity .5s;\n}\n\n.media-upload-overlay.enabled {\n    opacity: 1;\n}\n\n.media-dnd-active {\n    position: relative;\n    scale: 1.05;\n    z-index: 101;\n}\n\n/*\nLIGHTBOX\n*/\n#media-upload-lightbox {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 102;\n\n    height: 100dvh;\n    width: 100vw;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    overflow: hidden;\n    background-color: #3f3f3f;\n    opacity: 0;\n    pointer-events: none;\n\n    transition: opacity .3s;\n\n    .media-upload-lightbox__navigation-controls-container {\n        position: absolute;\n        width: 100%;\n        top: 50%;\n        transform: translateY(-50%);\n\n        display: flex;\n        justify-content: space-between;\n\n        padding-inline: 1rem;\n\n        button {\n            all: unset;\n\n            cursor: pointer;\n            font-size: 2rem;\n        }\n    }\n\n    .media-upload-lightbox__close-control-container {\n        position: absolute;\n        right: 1rem;\n        top: 1rem;\n        /*z-index: 103;*/\n\n        color: #fff;\n        font-size: 3rem;\n\n        button {\n            all: unset;\n            cursor: pointer;\n        }\n    }\n\n    .media-upload-lightbox__manage-control-container {\n        position: absolute;\n\n        top: 1rem;\n        left: 1rem;\n\n        display: flex;\n        gap: 1rem;\n\n        font-size: 1.6rem;\n\n        button {\n            all: unset;\n            cursor: pointer;\n        }\n    }\n\n    .media-upload-lightbox__main-image-container {\n        height: 100%;\n\n        img {\n            object-fit: contain;\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    &.active {\n        pointer-events: all;\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 537:
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 379:
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

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 589:
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

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getMap: () => (/* binding */ getMap),
  handleAddressContinueBtnClicked: () => (/* binding */ handleAddressContinueBtnClicked),
  sectionDisplayManager: () => (/* binding */ sectionDisplayManager)
});

// EXTERNAL MODULE: ./src/serverEndpoints.js
var serverEndpoints = __webpack_require__(264);
;// CONCATENATED MODULE: ./src/utils.js
function debounce(callback, wait) {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

function throwIfUndefinedOrNullWithKeys(obj) {
    const errorsKeys = []

    Object.keys(obj).forEach(k => {
        const v = obj[k]
        if (v === undefined || v === null)
            errorsKeys.push(k)
    })

    if (errorsKeys.length > 0 ) {
        console.error('Some values were null or undefined')
        console.error('Error keys: ', errorsKeys)
        throw new Error()
    }
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/createListing/addressSuggestionInput.css
var addressSuggestionInput = __webpack_require__(67);
;// CONCATENATED MODULE: ./src/pages/createListing/addressSuggestionInput.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(addressSuggestionInput/* default */.Z, options);




       /* harmony default export */ const createListing_addressSuggestionInput = (addressSuggestionInput/* default */.Z && addressSuggestionInput/* default */.Z.locals ? addressSuggestionInput/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/createListing/addressSuggestionInput.js





function initAddressSuggestionInput() {
    const ac = new AddressAutoComplete()
    ac.init(document.getElementById('address-input'))
    return ac
}

class AddressAutoComplete {
    inputEl = null;
    suggestContainerEl = null;
    suggestItemNode = null;
    #debounceKey = ''
    #suggestionSelectedCallback = undefined


    init(inputEl) {
        this.inputEl = inputEl


        const suggestContainerEl = document.createElement('div')
        suggestContainerEl.id = 'suggest-container'
        this.inputEl.insertAdjacentElement("afterend", suggestContainerEl)
        this.suggestContainerEl = suggestContainerEl

        const suggestItemNode = document.createElement('li')
        suggestItemNode.className = 'item-wrapper'
        this.suggestItemNode = suggestItemNode


        // todo fix when fetching but new debounce call
        const debouncedHandler = debounce(async (...args) => {
            this.#debounceKey = Date.now()
            await this.handleDebouncedInput(...args)
        }, 500)
        this.inputEl.addEventListener('input', (ev) => debouncedHandler(ev))
    }

    async handleDebouncedInput(ev) {
        if (this.inputEl.value.trim() === '') {
            this.hideSuggestContainer()
            return
        }

        const capturedKey = this.#debounceKey

        console.log(ev)
        console.log(this)

        const result = await (await fetch(serverEndpoints/* GEODECODE_URL */.J7 + '?search=' + this.inputEl.value)).json()

        if (result.length === 0) {
            this.hideSuggestContainer()
            return
        }

        if (this.#debounceKey !== capturedKey) return;
        this.updateSuggestedContainer(result)
        this.showSuggestContainer()

    }

    updateSuggestedContainer(items) {
        this.suggestContainerEl.textContent = ''

        items.forEach(item => {
            const listItemEl = this.suggestItemNode.cloneNode(true)
            listItemEl.textContent = item['display_name']
            listItemEl.addEventListener('click', () => this.handleSuggestionClick(item))
            this.suggestContainerEl.appendChild(listItemEl)
        });
    }

    disableInput() {
        this.inputEl.setAttribute('disabled', '');
    }

    enableInput() {
        this.inputEl.removeAttribute('disabled');
    }

    onSuggestionSelected(cb) {
        this.#suggestionSelectedCallback = cb
    }

    setInputValue(str) {
        this.inputEl.value = str 
    }

    handleSuggestionClick(data) {
        this.hideSuggestContainer()
        this.setInputValue(data['display_name'])

        console.log('clicked on ', data)
        this.#suggestionSelectedCallback(data)
    }

    showSuggestContainer() {
        this.suggestContainerEl.style.display = 'block'
    }

    hideSuggestContainer() {
        this.suggestContainerEl.style.display = 'none'
    }
}
;// CONCATENATED MODULE: ./src/pages/createListing/map.js
function initMap(mapClickCallback) {
    const map = L.map('map').setView([50.0734, 14.4150], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let lastMarker = null

    map.on('click', async (e) => {
        console.log(e)
        await mapClickCallback(e, () => {
            const {lat, lng} = e.latlng;

            if (lastMarker) {
                map.removeLayer(lastMarker)
            }

            lastMarker = L.marker([lat, lng])
            map.addLayer(lastMarker)
        })
    })


    function setMapView(lat, lon, zoom) {
        if (lastMarker) {
            map.removeLayer(lastMarker)
        }

        map.setView([lat, lon], zoom)
        lastMarker = L.marker([lat, lon])
        map.addLayer(lastMarker)
    }

    console.log(map)

    return { setMapView, invalidateMapSize: () => map.invalidateSize() }
}
;// CONCATENATED MODULE: ./src/pages/createListing/formStateManager.js


class SectionDisplayManager {
    sectionEls = null
    sectionOpenedCallbacks = {}

    constructor() {
        this.sectionEls = {
            goal: document.getElementById('goal-section'),
            address: document.getElementById('address-section'),
            parameters: document.getElementById('parameters-section'),
            media: document.getElementById('media-section'),
            video: document.getElementById('video-section'),
            valuation: document.getElementById('valuation-section'),
            description: document.getElementById('description-section'),
            contacts: document.getElementById('contacts-section')
        }

        throwIfUndefinedOrNullWithKeys({
            goalSection: this.sectionEls.goal,
            addressSection: this.sectionEls.address,
            parametersSection: this.sectionEls.parameters,
            mediaSection: this.sectionEls.media,
            videoSection: this.sectionEls.video,
            valuationSection: this.sectionEls.valuation,
            descriptionSection: this.sectionEls.description,
            contactsSection: this.sectionEls.contacts
        })
    }

    onSectionOpened(sectionName, cb) {
        if(! this.sectionEls[sectionName]) {
            throw Error('Unknown section name')
        }

        let currentCbs = this.sectionOpenedCallbacks[sectionName]
        if (currentCbs === undefined) {
            currentCbs = []
            this.sectionOpenedCallbacks[sectionName] = currentCbs
        }
        currentCbs.push(cb)
    }

    showSection(sectionName) {
        this.#showEl(this.sectionEls[sectionName])
        const sectionOpenedCbs = this.sectionOpenedCallbacks[sectionName];

        if (sectionOpenedCbs?.forEach) {
            sectionOpenedCbs.forEach(cb => {
                requestIdleCallback(cb)
            })
        }
    }

    hideSection(sectionName) {
        this.#hideEl(this.sectionEls[sectionName])
    }

    #showEl(el) {
        // d-none is added in Webflow designer page as embedded html element at the bottom of the page
        el.classList.remove('d-none')
    }

    #hideEl(el) {
        el.classList.add('d-none')
    }
}

class GoalSectionStateManager {
    state = {
        type: '', // offering or lookingFor,
        goal: '', // rent or sell or buy,
        ownerType: '', // owner or agent or tenant,
        propertyType: '', // flat, room, house or office,
    }

    #youAreEls = null
    #goalEls = null
    #ownerTypeEls = null
    #propertyTypeEls = null

    #youAreSectionEl = null
    #yourGoalIsSectionEl = null
    #areYouOwnerSectionEl = null
    #propertyTypeSectionEl = null

    #onPropertyCardClickedCb = () => {}

    #cardBlockActiveClassName = 'card-block-active'
    #cardBlockInactiveClassName = 'card-block-inactive'

    #sectionElToSectionCardsEl = {}


    constructor() {
        function id(id) {
            return document.getElementById(id)
        }

        const offeringCardEl = id('offering-card')
        const lookingForCardEl = id('looking-for-card')

        const toRentCardEl = id('to-rent-card')
        const toSellCardEl = id('to-sell-card')
        const toBuyCardEl = id('to-buy-card')

        const iAmOwnerCardEl = id('i-am-owner-card')
        const iAmAgentCardEl = id('i-am-agent-card')
        const iAmTenantCardEl = id('i-am-tenant-card')

        const propertyFlatCardEL = id('property-flat-card')
        const propertyRoomCardEL = id('property-room-card')
        const propertyHouseCardEL = id('property-house-card')
        const propertyOfficeCardEL = id('property-office-card')
        const propertyGarageCardEL = id('property-garage-card')

        this.#youAreSectionEl = id('you-are-card-section')
        this.#yourGoalIsSectionEl = id('your-goal-is-card-section')
        this.#areYouOwnerSectionEl = id('are-you-owner-card-section')
        this.#propertyTypeSectionEl = id('property-type-card-section')

        const sectionEls = {
            youAre: this.#youAreSectionEl,
            goal: this.#yourGoalIsSectionEl,
            areYouOwner: this.#areYouOwnerSectionEl,
            propertyType: this.#propertyTypeSectionEl
        }

        throwIfUndefinedOrNullWithKeys({
            offeringCardEl,
            lookingForCardEl,

            toRentCardEl,
            toSellCardEl,
            toBuyCardEl,

            iAmAgentCardEl,
            iAmAgentCardEl,
            iAmTenantCardEl,

            propertyFlatCardEL,
            propertyRoomCardEL,
            propertyHouseCardEL,
            propertyOfficeCardEL,
            propertyGarageCardEL,

            youAreCardSectionEl: this.#youAreSectionEl,
            yourGoalIsCardSectionEl: this.#yourGoalIsSectionEl,
            areYouOwnerCardSectionEl: this.#areYouOwnerSectionEl,
            propertyTypeCardSectionEl: this.#propertyTypeSectionEl
        })

        this.#hideSections([sectionEls.goal, sectionEls.areYouOwner, sectionEls.propertyType])

        this.#youAreEls = [offeringCardEl, lookingForCardEl]
        this.#goalEls = [toRentCardEl, toSellCardEl, toBuyCardEl]
        this.#ownerTypeEls = [iAmOwnerCardEl, iAmAgentCardEl, iAmTenantCardEl]
        this.#propertyTypeEls = [propertyFlatCardEL, propertyRoomCardEL, propertyHouseCardEL, propertyOfficeCardEL, propertyGarageCardEL]

        this.#sectionElToSectionCardsEl = {
            [this.#youAreSectionEl.id]: this.#youAreEls,
            [this.#yourGoalIsSectionEl.id]: this.#goalEls,
            [this.#areYouOwnerSectionEl.id]: this.#ownerTypeEls,
            [this.#propertyTypeSectionEl.id]: this.#propertyTypeEls,
        }

        this.#youAreEls.forEach(el => {
            el.addEventListener('click', () => {
                const value = el.dataset['listingType']
                this.updateStateAndPrint({ ...this.state, type: value })

                this.#hideSections([
                    this.#yourGoalIsSectionEl,
                    this.#areYouOwnerSectionEl,
                    this.#propertyTypeSectionEl
                ])
                this.#showAllCardsInSection(this.#goalEls)

                if (this.state.type === 'offering') {
                    this.#hideEl(toBuyCardEl)
                } else {
                    this.#hideEl(toSellCardEl)
                }

                this.#showSection(this.#yourGoalIsSectionEl)

                this.#setCardsActiveState(el, this.#youAreEls)
            })
        })
        this.#goalEls.forEach(el => {
            el.addEventListener('click', () => {
                const value = el.dataset['listingGoal']
                this.updateStateAndPrint({ ...this.state, goal: value })

                this.#hideSections([
                    this.#propertyTypeSectionEl
                ])

                this.#showAllCardsInSection(this.#propertyTypeEls)

                if (value !== 'rent') {
                    this.#hideEl(propertyRoomCardEL)
                }

                if (this.state.type === 'lookingFor') {
                    this.#showSection(this.#propertyTypeSectionEl)
                } else {
                    this.#showSection(this.#areYouOwnerSectionEl)
                }

                this.#setCardsActiveState(el, this.#goalEls)
            })
        })
        this.#ownerTypeEls.forEach(el => {
            el.addEventListener('click', () => {
                const value = el.dataset['listingIsOwner']
                this.updateStateAndPrint({ ...this.state, ownerType: value })

                this.#showSection(this.#propertyTypeSectionEl)

                this.#setCardsActiveState(el, this.#ownerTypeEls)
            })
        })
        this.#propertyTypeEls.forEach(el => {
            el.addEventListener('click', () => {
                const value = el.dataset['listingPropertyType']
                this.updateStateAndPrint({ ...this.state, propertyType: value })

                this.#onPropertyCardClickedCb()

                this.#setCardsActiveState(el, this.#propertyTypeEls)
            })
        })
        offeringCardEl.addEventListener('click', () => {

        })}

    onPropertyTypeCardClick(cb) {
        this.#onPropertyCardClickedCb = cb
    }

    #setCardsActiveState(clickedOnCardEl, cardsSectionEl) {
        cardsSectionEl.forEach(elToUpdate => {
            if (elToUpdate !== clickedOnCardEl) {
                elToUpdate.classList.add(this.#cardBlockInactiveClassName)
            }
        })
        clickedOnCardEl.classList.remove(this.#cardBlockInactiveClassName)
        clickedOnCardEl.classList.add(this.#cardBlockActiveClassName)
    }

    #hideSections(sectionsEls) {
        sectionsEls.forEach(el => {
            this.#hideEl(el)
        })
    }

    #showAllCardsInSection(sectionEls) {
        sectionEls.forEach(cardEl => this.#showEl(cardEl))
    }

    #showSection(sectionEl) {
        const sectionCardsEl = this.#sectionElToSectionCardsEl[sectionEl.id]
        sectionCardsEl.forEach(cardEl => {
            cardEl.classList.remove(this.#cardBlockActiveClassName)
            cardEl.classList.remove(this.#cardBlockInactiveClassName)
        })
        this.#showEl(sectionEl)
    }

    // todo: d-none used twice in code. Move from designer or create constant
    #hideEl(el) {
        el.classList.add('d-none')
    }

    #showEl(el) {
        el.classList.remove('d-none')
    }

    updateStateAndPrint(newListingState) {
        this.state = newListingState
        console.log('new listing state: ', this.state)
    }

}

class ParametersSectionManager {
    state = {
        totalArea: 0,
        isPetsAllowed: false,
        isObstacleFree: false,
        isSmokingAllowed: false,
        hasParking: false,
        rentTermType: null, // short or long
        floorNumber: null,
        floorTotalNumber: null,
        flatType: '',
        energyClass: '',
        furniture: ''
    }

    #afterStateChangedCb = undefined
    #requiredFilledCb = () => {}

    constructor() {
        function id(id) {
            return document.getElementById(id)
        }

        const totalAreaInputEl = id('total-area-input')
        const petsTglEl = id('pets-toggle')
        const obstacleFreeTglEl = id('obstacle-free-toggle')
        const smokingTglEl = id('smoking-toggle')
        const parkingTglEl = id('parking-toggle')
        const flatTypeInputEl = id('Flat-type-field')
        const energyClassInputEl = id('Energy-class-field')
        const furnitureInputEl = id('Furniture-field')
        const longTermRadioEl = id('long-term-radio-input')
        const shortTermRadioEl = id('short-term-radio-input')
        const floorNumberInputEl = id('fs-inputcounter-1-input')
        const floorTotalNumberInputEl = id('fs-inputcounter-2-input')

        throwIfUndefinedOrNullWithKeys({
            totalAreaInputEl,
            petsTglEl,
            obstacleFreeTglEl,
            smokingTglEl,
            parkingTglEl,
            flatTypeInputEl,
            energyClassInputEl,
            furnitureInputEl,
            longTermRadioEl,
            shortTermRadioEl,
            floorNumberInputEl,
            floorTotalNumberInputEl
        })

        this.state = {
            ...this.state,
            flatType: flatTypeInputEl.value,
            energyClass: energyClassInputEl.value,
            furniture: furnitureInputEl.value
        }

        totalAreaInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, totalArea: totalAreaInputEl.value})
        })
        petsTglEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, isPetsAllowed: !this.state.isPetsAllowed})
        })
        obstacleFreeTglEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, isObstacleFree: !this.state.isObstacleFree})
        })
        smokingTglEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, isSmokingAllowed: !this.state.isSmokingAllowed})
        })
        parkingTglEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, hasParking: !this.state.hasParking})
        })
        flatTypeInputEl.addEventListener('change', () => {
            this.#setStateAndLog({...this.state, flatType: flatTypeInputEl.value})
        })
        energyClassInputEl.addEventListener('change', () => {
            this.#setStateAndLog({...this.state, energyClass: energyClassInputEl.value})
        })
        furnitureInputEl.addEventListener('change', () => {
            this.#setStateAndLog({...this.state, furniture: furnitureInputEl.value})
        })
        longTermRadioEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, rentTermType: 'long'})
        })
        shortTermRadioEl.addEventListener('click', () => {
            this.#setStateAndLog({...this.state, rentTermType: 'short'})
        })
        floorNumberInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, floorNumber: floorNumberInputEl.value})
        })
        floorTotalNumberInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, floorTotalNumber: floorTotalNumberInputEl.value})
        })

        this.#afterStateChangedCb = () => this.#checkAndNotifyIfRequiredIsFilled();
    }

    onRequiredIsFilled(cb) {
        this.#requiredFilledCb = () => cb()
    }

    #setStateAndLog(state) {
        this.state = state;
        this.#afterStateChangedCb();
        console.log('New parameters section state: ', state);
    }

    #checkAndNotifyIfRequiredIsFilled() {
        function isNullOrEmpty(...args) {
            try {
                for (const arg of args) {
                    if (arg === null || arg.trim() === '') return true
                }
            } catch {
                return true
            }

            return false
        }
        const { rentTermType, floorNumber, floorTotalNumber, flatType, totalArea } = this.state;

        if (totalArea === 0) return

        if (isNullOrEmpty(rentTermType, floorNumber, floorTotalNumber, flatType)) return
        this.#afterStateChangedCb = () => {}
        this.#requiredFilledCb()
    }
}

class PropertyValuationSectionManager {
    state = {
        pricePerMonth: 0,
        servicesPerMonth: 0,
        deposit: 0,
        additionalFees: 0,
    }

    #afterStateChangedCb = undefined
    #requiredFilledCb = () => {}

    constructor() {
        function id(id) {
            return document.getElementById(id)
        }

        const pricePerMonthInputEl = id('Price-per-month')
        const servicesPerMonthInputEl = id('Services-per-month')
        const depositInputEl = id('Deposit')
        const additionalFeesInputEl = id('Additional-fees')

        throwIfUndefinedOrNullWithKeys({pricePerMonthInputEl, servicesPerMonthInputEl, depositInputEl, additionalFeesInputEl})

        pricePerMonthInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, pricePerMonth: pricePerMonthInputEl.value})
        })
        servicesPerMonthInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, servicesPerMonth: servicesPerMonthInputEl.value})
        })
        depositInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, deposit: depositInputEl.value})
        })
        additionalFeesInputEl.addEventListener('input', () => {
            this.#setStateAndLog({...this.state, additionalFees: additionalFeesInputEl.value})
        })

        this.#afterStateChangedCb = () => this.#checkAndNotifyIfRequiredIsFilled()
    }

    onRequiredIsFilled(cb) {
        this.#requiredFilledCb = cb
    }

    #checkAndNotifyIfRequiredIsFilled() {
        function isZeroOrUndefined(...args) {
            try {
                for (const arg of args) {
                    if (arg === undefined || arg === 0 || arg.trim() === '') return true
                }
            }
            catch {
                return true
            }

            return false

        }
        const {pricePerMonth, servicesPerMonth, deposit, additionalFees} = this.state

        try {
            parseInt(additionalFees, 10)
        } catch {
            return
        }

        if (isZeroOrUndefined(pricePerMonth, servicesPerMonth, deposit)) return

        this.#afterStateChangedCb = () => {}
        this.#requiredFilledCb()
    }


    #setStateAndLog(state) {
        this.state = state;
        this.#afterStateChangedCb();
        console.log('New property valuation section state: ', state);
    }
}

class DescriptionSectionManager {
    description = ''
    #minCharactersFilledCb = () => {}

    constructor() {
        const descriptionInputEl = document.getElementById('property-description-input')

        throwIfUndefinedOrNullWithKeys({descriptionInputEl})

        descriptionInputEl.addEventListener('input', () => {
            this.description = descriptionInputEl.value
            if (this.description.trim().length > 20) {
                this.#minCharactersFilledCb()
                this.#minCharactersFilledCb = () => {}
            }
        })
    }


    onMinimumCharactersFilled(cb) {
        this.#minCharactersFilledCb = cb

    }





}
// EXTERNAL MODULE: ./node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(306);
;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/hiddenInput.html
// Module
var code = "<input type=\"file\" id=\"media-upload-input\" multiple=\"multiple\" accept=\"image/*\" style=\"display:none\"/>";
// Exports
/* harmony default export */ const hiddenInput = (code);
;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/media-upload-overlay.html
// Module
var media_upload_overlay_code = "<template x-teleport=\"body\"> <div class=\"media-upload-overlay\" :class=\"isMediaDragActive === true  ? 'enabled': ''\"> </div> </template> ";
// Exports
/* harmony default export */ const media_upload_overlay = (media_upload_overlay_code);
;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/lightbox.html
// Module
var lightbox_code = "<template x-teleport=\"body\"> <div x-data=\"mediaLightbox\" @click.self=\"isLightboxOpened = false\" id=\"media-upload-lightbox\" :class=\"isLightboxOpened ? 'active' : ''\"> <div class=\"media-upload-lightbox__main-image-container\"> <img :src=\"getImageUrl(currentActiveLightboxImageIndex)\" alt=\"image-in-lightbox\"> </div> <div class=\"media-upload-lightbox__navigation-controls-container\"> <button @click=\"handlePrevBtnClick()\"> ⬅️ </button> <button @click=\"handleNextBtnClick()\"> ➡️ </button> </div> <div class=\"media-upload-lightbox__close-control-container\"> <button @click=\"isLightboxOpened = false\">✖</button> </div> <div class=\"media-upload-lightbox__manage-control-container\"> <button> ⭐ </button> <button> 🗑️ </button> </div> </div> </template>";
// Exports
/* harmony default export */ const lightbox = (lightbox_code);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/createListing/mediaUpload/style.css
var style = __webpack_require__(433);
;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(style/* default */.Z, style_options);




       /* harmony default export */ const mediaUpload_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/uploader.js


class MediaUploader {
    isUploadingNow = false
    uploadId = null
    filesToUpload = []

    queueFile(file, resultCb) {
        return new Promise((res, rej) => {
            this.filesToUpload.push({file, resultCb, res, rej})
            this.dequeue()
        })
    }

    async dequeue() {
        if (this.isUploadingNow) return
        if (this.filesToUpload.length === 0) return

        const {file, resultCb, res, rej} = this.filesToUpload.shift()

        if(!file) return

        try {
            this.isUploadingNow = true

            const uploadResponse = await this.#uploadFile(file)
            if (!uploadResponse.ok) {
                throw new Error('Error uploading media')
            }

            if (! this.uploadId) {
                const uploadResult = await uploadResponse.json()
                const uploadId = uploadResult.uploadId

                if (!uploadId) {
                    throw new Error('Was expecting upload id from server response but got none')
                }

                this.uploadId = uploadId
            }

            this.isUploadingNow = false

            resultCb()
            res()
        }
        catch {
            this.isUploadingNow = false
            resultCb({error: true})
            rej()
        }
        finally {
            this.dequeue()
        }

        return
    }

    async #uploadFile(file) {
        const formData = new FormData()

        if (this.uploadId) {
            formData.append('uploadId', this.uploadId)
        }
        formData.append('media', file)

        return fetch(serverEndpoints/* UPLOAD_MEDIA_URL */.nq, {
            method: "POST",
            body: formData,
        });

    }
}
;// CONCATENATED MODULE: ./src/pages/createListing/mediaUpload/index.js








const uploader = new MediaUploader()

const mediaSection = document.getElementById('media-section')
const mediaUploadImageEl = document.getElementById('image-drop-area')
mediaUploadImageEl.classList.add('media-dnd-active')
// const mediaHintEl = mediaSection.getElementsByClassName('drag-area-icon')[0]
const mediaMainImgEl = mediaSection.getElementsByTagName('img')[0]
const imagePreviewEls = document.querySelectorAll('.slider-items-container .slider-item')

mediaSection.insertAdjacentHTML('beforeend', hiddenInput)
mediaSection.insertAdjacentHTML('beforeend', media_upload_overlay)
mediaSection.insertAdjacentHTML('beforeend', lightbox)
const mediaUploadInputEl = document.getElementById('media-upload-input')


const mediaSectionXData = () => ({
    mediaFiles: [],
    mediaFilesUrls: [],
    imageLoadStatus: {},
    mediaElRelativeClassRemoveTimeout: null,
    isMediaDragActive: false,

    currentActiveLightboxImageIndex: null,
    // separate prop to fix flickery
    isLightboxOpened: false,

    get hasSomeFiles() {
        return this.mediaFiles.length !== 0
    },

    getImageUrl(index) {
        const urlImg = this.mediaFilesUrls[index]
        return urlImg ?? ''
    },

    isImageLoaded(index) {
        const isLoaded = this.imageLoadStatus[index]

        return isLoaded ?? false
    },

    openFilePicker() {
        mediaUploadInputEl.click()
    },

    selectedFileUpdated() {
        const selectedFiles = mediaUploadInputEl.files;

        this.mediaFiles.push(...selectedFiles)

        for (let index = 0; index < selectedFiles.length; index++) {
            const file = selectedFiles[index];
            const url = URL.createObjectURL(file)
            this.mediaFilesUrls.push(url)

            let fileIndex = this.mediaFilesUrls.length - 1
            if (fileIndex < 0) fileIndex = 0
            uploader.queueFile(file, () => this.imageLoadStatus[fileIndex] = true)
        }
    },

    onDropHandler(e) {
        const items = e.dataTransfer.items;
        this.onMediaDragEnd()

        if (! items) return

        [...items].forEach(i => {
            if (i.kind !== 'file') return
            if (i.type !== 'image/jpeg') return

            // todo: smells. duplicate from selectedFileUpdated
            const file = i.getAsFile()
            this.mediaFiles.push(file)
            const url = URL.createObjectURL(file)
            this.mediaFilesUrls.push(url)

            let fileIndex = this.mediaFilesUrls.length - 1
            if (fileIndex < 0) fileIndex = 0
            uploader.queueFile(file, () => this.imageLoadStatus[fileIndex] = true)
        })
    },

    onMediaDragOver() {
        if (this.isMediaDragActive === true) return
        this.isMediaDragActive = true;

        mediaUploadImageEl.classList.add('media-dnd-active')
    },

    onMediaDragEnd() {
        clearTimeout(this.mediaElRelativeClassRemoveTimeout)
        // without timeout media el becomes jittery
        this.mediaElRelativeClassRemoveTimeout = setTimeout(() => {
            if (this.isMediaDragActive) return;
            mediaUploadImageEl.classList.remove('media-dnd-active')
        }, 700)

        this.isMediaDragActive = false
    },

    handleOnImagePreviewClick(index) {
        if (! this.getImageUrl(index)) return;
        this.currentActiveLightboxImageIndex = index
        this.isLightboxOpened = true
    }
})
const lightBoxXData = () => ({
    handlePrevBtnClick() {
        if (this.currentActiveLightboxImageIndex === 0) {
            this.currentActiveLightboxImageIndex = this.mediaFiles.length - 1
            return
        }

        this.currentActiveLightboxImageIndex--
    },

    handleNextBtnClick() {
        if (this.currentActiveLightboxImageIndex === this.mediaFiles.length - 1) {
            this.currentActiveLightboxImageIndex = 0
            return
        }

        this.currentActiveLightboxImageIndex++
    }

})



mediaUploadInputEl.setAttribute('x-on:change', 'selectedFileUpdated')

// mediaHintEl.setAttribute('x-show', '! hasSomeFiles')

mediaUploadImageEl.setAttribute('x-on:click', 'openFilePicker')
mediaUploadImageEl.setAttribute('x-on:drop.prevent', 'onDropHandler')
mediaUploadImageEl.setAttribute('x-on:dragover.prevent', 'onMediaDragOver')
mediaUploadImageEl.setAttribute('x-on:dragleave.prevent', 'onMediaDragEnd')

// mediaMainImgEl.setAttribute('x-bind:src', 'getImageUrl(0)')

module_esm/* default */.Z.data('media', mediaSectionXData)
module_esm/* default */.Z.data('mediaLightbox', lightBoxXData)
mediaSection.setAttribute('x-data', 'media')

const overlayAlpineData = (imageIndex = 0) => ({
    imageIndex: imageIndex,

    overlayBind: {
        [':class']() {
             if (this.getImageUrl(this.imageIndex) !== '' && ! this.isImageLoaded(this.imageIndex)) {
                return 'slider-item-loading-overlay-visible'
             }

             return ''
        }
    }
})

module_esm/* default */.Z.data('imagePreviewOverlay', overlayAlpineData)
module_esm/* default */.Z.data('imagePreviewShadow', (imageIndex = 0) => ({
    imageIndex: imageIndex,

    shadowBind: {
        [':class']() {
             if (this.getImageUrl(this.imageIndex) !== '') {
                return 'slider-item-shadow-visible'
             }

             return ''
        }
    }
}))

for (let index = 0; index < imagePreviewEls.length; index++) {
    const previewEl = imagePreviewEls[index];
    previewEl.setAttribute('x-on:click', `handleOnImagePreviewClick(${index})`)

    const imageEl = previewEl.querySelector('img')
    imageEl.setAttribute('x-bind:src', `getImageUrl(${index})`)
    imageEl.setAttribute('x-show', `getImageUrl(${index}) !== ''`)

    // как я ебал такую хуйню. hack
    const shadowEl = previewEl.querySelector('.slider-item-shadow')
    // shadowEl.style['boxShadow'] = imagePreviewElStyles.getPropertyValue('box-shadow')
    // shadowEl.style['borderRadius'] = imagePreviewElStyles.getPropertyValue('border-radius')
    // shadowEl.style['width'] = '100%'
    // shadowEl.style['height'] = '100%imagePreviewOverlay'
    // shadowEl.style['position'] = 'absolute'

    shadowEl.setAttribute('x-data', `imagePreviewShadow(${index})`)
    shadowEl.setAttribute('x-bind', 'shadowBind')

    const loadingOverlayEl = previewEl.querySelector('.slider-item-loading-overlay');

    // loadingOverlayEl.setAttribute('x-show', `isImageLoaded(${index})`)
    loadingOverlayEl.setAttribute('x-data', `imagePreviewOverlay(${index})`)
    loadingOverlayEl.setAttribute('x-bind', 'overlayBind')

    const controlsOverlayEl = previewEl.querySelector('.slider-item-controls-overlay-container')
    controlsOverlayEl.setAttribute('x-show', `getImageUrl(${index}) !== ''`)
}

module_esm/* default */.Z.start()
;// CONCATENATED MODULE: ./src/pages/createListing.js







const sectionDisplayManager = new SectionDisplayManager()

const goalSectionManger = new GoalSectionStateManager()
const parametersSectionManager = new ParametersSectionManager()
const propertyValuationSectionManager = new PropertyValuationSectionManager()
const descriptionSectionManager = new DescriptionSectionManager()

goalSectionManger.onPropertyTypeCardClick(() => {
    sectionDisplayManager.showSection("address")
})

parametersSectionManager.onRequiredIsFilled(() => {
    sectionDisplayManager.showSection('media')
    sectionDisplayManager.showSection('video')
})

propertyValuationSectionManager.onRequiredIsFilled(() => {
    sectionDisplayManager.showSection('description')
})

descriptionSectionManager.onMinimumCharactersFilled(() => {
    sectionDisplayManager.showSection('contacts')
})

const autoSuggestion = initAddressSuggestionInput();

let isInReverseGeoProcess = false


const map = initMap(async (e, setMapMarker) => {
    const { lat, lng } = e.latlng;

    if (isInReverseGeoProcess) {
        return
    }

    isInReverseGeoProcess = true
    autoSuggestion.disableInput()
    const reverseGeoResponse = await fetch(serverEndpoints/* REVERSE_GEO_URL */.il + `?lat=${lat}&lon=${lng}`)
    const reverseGeoResult = await reverseGeoResponse.json()

    if (reverseGeoResult.error) {
        return
    }

    setMapMarker()
    autoSuggestion.setInputValue(reverseGeoResult['display_name'])
    autoSuggestion.enableInput()
    isInReverseGeoProcess = false
})


autoSuggestion.onSuggestionSelected(async (suggestion) => {
    let zoom = 13;

    const placeRank = suggestion['place_rank']
    if (placeRank > 25) {
        zoom = 19
    }


    map.setMapView(suggestion.lat, suggestion.lon, zoom)
})

function getMap() {
    return map
}

function handleAddressContinueBtnClicked() {
    sectionDisplayManager.showSection('parameters')
}



document.getElementById('page-content').style.display = 'block';

// timeout because webpack could not set pageModule in time
setTimeout(() => {
    dispatchEvent(new Event('pageModuleLoaded'))
}, 50)

/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J7: () => (/* binding */ GEODECODE_URL),
/* harmony export */   LB: () => (/* binding */ SERVER_URL),
/* harmony export */   il: () => (/* binding */ REVERSE_GEO_URL),
/* harmony export */   nq: () => (/* binding */ UPLOAD_MEDIA_URL)
/* harmony export */ });
const SERVER_URL = 'http://localhost:5000'
const GEODECODE_URL = SERVER_URL + '/map/geodecode'
const REVERSE_GEO_URL = SERVER_URL + '/map/reverseGeo'

const UPLOAD_MEDIA_URL = SERVER_URL + '/upload/newListingMedia'

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [183], () => (__webpack_exec__(107)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ (Favia = typeof Favia === "undefined" ? {} : Favia).pageModule = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY3JlYXRlTGlzdGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUhBQXFILFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksOENBQThDLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHVCQUF1QixpQkFBaUIsc0JBQXNCLGtCQUFrQixpQ0FBaUMscURBQXFELDZCQUE2QixvQkFBb0Isd0JBQXdCLEdBQUcsMkJBQTJCLHNCQUFzQiw4QkFBOEIsNkJBQTZCLHVCQUF1QiwyQkFBMkIsR0FBRyxpQ0FBaUMsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQzM5QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q3ZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdIQUFnSCxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxhQUFhLFdBQVcsYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLGdEQUFnRCxpQkFBaUIsYUFBYSxzQkFBc0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsd0NBQXdDLDJCQUEyQiw4QkFBOEIsR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcsdUJBQXVCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcsOENBQThDLHNCQUFzQixhQUFhLGNBQWMsbUJBQW1CLHVCQUF1QixtQkFBbUIsc0JBQXNCLDhCQUE4QiwwQkFBMEIseUJBQXlCLGdDQUFnQyxpQkFBaUIsMkJBQTJCLGdDQUFnQywrREFBK0QsNkJBQTZCLHNCQUFzQixtQkFBbUIsc0NBQXNDLDBCQUEwQix5Q0FBeUMsaUNBQWlDLG9CQUFvQix5QkFBeUIsZ0NBQWdDLDhCQUE4QixXQUFXLE9BQU8seURBQXlELDZCQUE2QixzQkFBc0Isb0JBQW9CLHlCQUF5QiwwQkFBMEIsMEJBQTBCLG9CQUFvQix5QkFBeUIsOEJBQThCLFdBQVcsT0FBTywwREFBMEQsNkJBQTZCLHNCQUFzQixxQkFBcUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLHlCQUF5Qiw4QkFBOEIsV0FBVyxPQUFPLHNEQUFzRCx1QkFBdUIsaUJBQWlCLGtDQUFrQywwQkFBMEIsMkJBQTJCLFdBQVcsT0FBTyxrQkFBa0IsOEJBQThCLHFCQUFxQixPQUFPLEdBQUcsbUJBQW1CO0FBQ3o2RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7OztBQ3JIMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTBIO0FBQzFIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLDZCQUFtQjtBQUMvQyx3QkFBd0IsMENBQWE7O0FBRXJDLHVCQUF1QiwrQkFBYTtBQUNwQztBQUNBLGlCQUFpQix1QkFBTTtBQUN2Qiw2QkFBNkIsOEJBQWtCOztBQUUvQyxhQUFhLGtDQUFHLENBQUMscUNBQU87Ozs7QUFJb0U7QUFDNUYsT0FBTywyRUFBZSxxQ0FBTyxJQUFJLHFDQUFPLFVBQVUscUNBQU8sbUJBQW1CLEVBQUM7OztBQzFCdkI7QUFDZjtBQUNGOzs7QUFHOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxxQ0FBYTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FDM0dPO0FBQ1A7QUFDQSxpREFBaUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzNEO0FBQ0EsNkJBQTZCO0FBQzdCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYjs7QUNyQzREOztBQUVyRDtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhCQUE4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsOEJBQThCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRCQUE0Qjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRCQUE0Qjs7QUFFdkU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpQ0FBaUM7O0FBRTVFOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsb0NBQW9DOztBQUUvRTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw4QkFBOEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsaURBQWlEO0FBQ25GLFNBQVM7QUFDVDtBQUNBLGtDQUFrQyx3REFBd0Q7QUFDMUYsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLDBEQUEwRDtBQUM1RixTQUFTO0FBQ1Q7QUFDQSxrQ0FBa0MsOERBQThEO0FBQ2hHLFNBQVM7QUFDVDtBQUNBLGtDQUFrQyxrREFBa0Q7QUFDcEYsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLCtDQUErQztBQUNqRixTQUFTO0FBQ1Q7QUFDQSxrQ0FBa0MscURBQXFEO0FBQ3ZGLFNBQVM7QUFDVDtBQUNBLGtDQUFrQyxpREFBaUQ7QUFDbkYsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RSxTQUFTO0FBQ1Q7QUFDQSxrQ0FBa0MscUNBQXFDO0FBQ3ZFLFNBQVM7QUFDVDtBQUNBLGtDQUFrQyxxREFBcUQ7QUFDdkYsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLCtEQUErRDtBQUNqRyxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtRUFBbUU7O0FBRW5GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhCQUE4QixFQUFFLHFGQUFxRjs7QUFFN0g7QUFDQSxrQ0FBa0MseURBQXlEO0FBQzNGLFNBQVM7QUFDVDtBQUNBLGtDQUFrQywrREFBK0Q7QUFDakcsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLDZDQUE2QztBQUMvRSxTQUFTO0FBQ1Q7QUFDQSxrQ0FBa0MsMkRBQTJEO0FBQzdGLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLDBEQUEwRDs7QUFFekU7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsOEJBQThCLEVBQUUsbUJBQW1COztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BOzs7O0FDM2dCQTtBQUNBO0FBQ0E7QUFDQSxrREFBZSxJQUFJOztBQ0huQjtBQUNBLElBQUkseUJBQUk7QUFDUjtBQUNBLDJEQUFlLHlCQUFJOztBQ0huQjtBQUNBLElBQUksYUFBSTtBQUNSO0FBQ0EsK0NBQWUsYUFBSTs7Ozs7QUNGbkIsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBNEc7QUFDNUc7QUFDQTs7QUFFQSxJQUFJLGFBQU87O0FBRVgsYUFBTyxxQkFBcUIsNkJBQW1CO0FBQy9DLGFBQU8saUJBQWlCLDBDQUFhOztBQUVyQyxNQUFNLGFBQU8sVUFBVSwrQkFBYTtBQUNwQztBQUNBLGFBQU8sVUFBVSx1QkFBTTtBQUN2QixhQUFPLHNCQUFzQiw4QkFBa0I7O0FBRS9DLElBQUksWUFBTSxHQUFHLGtDQUFHLENBQUMsb0JBQU8sRUFBRSxhQUFPOzs7O0FBSTZDO0FBQzlFLE9BQU8sd0RBQWUsb0JBQU8sSUFBSSxvQkFBTyxVQUFVLG9CQUFPLG1CQUFtQixFQUFDOzs7QUMxQmpCOztBQUVyRDtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwwQkFBMEI7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0NBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FDeEU2Qjs7QUFFZTtBQUNnQjtBQUNqQjtBQUN2QjtBQUN1Qjs7QUFFM0MscUJBQXFCLGFBQWE7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsV0FBVztBQUN4RCw2Q0FBNkMsb0JBQWtCO0FBQy9ELDZDQUE2QyxRQUFhO0FBQzFEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7Ozs7QUFJRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5QkFBTTtBQUNOLHlCQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQseUJBQU07QUFDTix5QkFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0Esc0VBQXNFLE1BQU07O0FBRTVFO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsa0RBQWtELE1BQU07O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxNQUFNO0FBQ2hFOztBQUVBOztBQUVBLGdFQUFnRSxNQUFNO0FBQ3RFLG1FQUFtRSxNQUFNO0FBQ3pFOztBQUVBO0FBQ0EsNERBQTRELE1BQU07QUFDbEU7O0FBRUEseUJBQU07O0FDbk42RTtBQUN0QztBQUNPO0FBQ21JO0FBQ2xKOzs7QUFHckMsa0NBQWtDLHFCQUFxQjs7QUFFdkQsOEJBQThCLHVCQUF1QjtBQUNyRCxxQ0FBcUMsd0JBQXdCO0FBQzdELDRDQUE0QywrQkFBK0I7QUFDM0Usc0NBQXNDLHlCQUF5Qjs7QUFFL0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1QkFBdUIsMEJBQTBCOztBQUVqRDs7O0FBR0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksV0FBVzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsdUNBQWUsV0FBVyxJQUFJLE9BQU8sSUFBSTtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0Rk07QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NyZWF0ZUxpc3RpbmcvYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NyZWF0ZUxpc3RpbmcvbWVkaWFVcGxvYWQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NyZWF0ZUxpc3RpbmcvYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dC5jc3M/NTdmYiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY3JlYXRlTGlzdGluZy9hZGRyZXNzU3VnZ2VzdGlvbklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY3JlYXRlTGlzdGluZy9mb3JtU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL21lZGlhVXBsb2FkL2hpZGRlbklucHV0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NyZWF0ZUxpc3RpbmcvbWVkaWFVcGxvYWQvbWVkaWEtdXBsb2FkLW92ZXJsYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY3JlYXRlTGlzdGluZy9tZWRpYVVwbG9hZC9saWdodGJveC5odG1sIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL21lZGlhVXBsb2FkL3N0eWxlLmNzcz83NTU5Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL21lZGlhVXBsb2FkL3VwbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL21lZGlhVXBsb2FkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXJFbmRwb2ludHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNzdWdnZXN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgdG9wOiAxMTUlO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMC45Mzc1cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xufVxuXG4jc3VnZ2VzdC1jb250YWluZXIgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNzdWdnZXN0LWNvbnRhaW5lciBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jcmVhdGVMaXN0aW5nL2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7O0lBRVYsYUFBYTs7SUFFYixTQUFTOztJQUVULHdCQUF3QjtJQUN4Qiw4Q0FBOEM7SUFDOUMsc0JBQXNCOztJQUV0QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNzdWdnZXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgdG9wOiAxMTUlO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuI3N1Z2dlc3QtY29udGFpbmVyIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3N1Z2dlc3QtY29udGFpbmVyIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVkaWEtdXBsb2FkLW92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbn1cblxuLm1lZGlhLXVwbG9hZC1vdmVybGF5LmVuYWJsZWQge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5tZWRpYS1kbmQtYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgc2NhbGU6IDEuMDU7XG4gICAgei1pbmRleDogMTAxO1xufVxuXG4vKlxuTElHSFRCT1hcbiovXG4jbWVkaWEtdXBsb2FkLWxpZ2h0Ym94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAyO1xuXG4gICAgaGVpZ2h0OiAxMDBkdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcblxuICAgIC5tZWRpYS11cGxvYWQtbGlnaHRib3hfX25hdmlnYXRpb24tY29udHJvbHMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XG5cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tZWRpYS11cGxvYWQtbGlnaHRib3hfX2Nsb3NlLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICAvKnotaW5kZXg6IDEwMzsqL1xuXG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19tYW5hZ2UtY29udHJvbC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICBsZWZ0OiAxcmVtO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMXJlbTtcblxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYWxsOiB1bnNldDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tZWRpYS11cGxvYWQtbGlnaHRib3hfX21haW4taW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2NyZWF0ZUxpc3RpbmcvbWVkaWFVcGxvYWQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLE1BQU07SUFDTixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0NBRUM7QUFDRDtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7O0lBRVosY0FBYztJQUNkLFlBQVk7O0lBRVosYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG9CQUFvQjs7SUFFcEIsdUJBQXVCOztJQUV2QjtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsUUFBUTtRQUNSLDJCQUEyQjs7UUFFM0IsYUFBYTtRQUNiLDhCQUE4Qjs7UUFFOUIsb0JBQW9COztRQUVwQjtZQUNJLFVBQVU7O1lBRVYsZUFBZTtZQUNmLGVBQWU7UUFDbkI7SUFDSjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGdCQUFnQjs7UUFFaEIsV0FBVztRQUNYLGVBQWU7O1FBRWY7WUFDSSxVQUFVO1lBQ1YsZUFBZTtRQUNuQjtJQUNKOztJQUVBO1FBQ0ksa0JBQWtCOztRQUVsQixTQUFTO1FBQ1QsVUFBVTs7UUFFVixhQUFhO1FBQ2IsU0FBUzs7UUFFVCxpQkFBaUI7O1FBRWpCO1lBQ0ksVUFBVTtZQUNWLGVBQWU7UUFDbkI7SUFDSjs7SUFFQTtRQUNJLFlBQVk7O1FBRVo7WUFDSSxtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVkaWEtdXBsb2FkLW92ZXJsYXkge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcXG59XFxuXFxuLm1lZGlhLXVwbG9hZC1vdmVybGF5LmVuYWJsZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWVkaWEtZG5kLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgc2NhbGU6IDEuMDU7XFxuICAgIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuLypcXG5MSUdIVEJPWFxcbiovXFxuI21lZGlhLXVwbG9hZC1saWdodGJveCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDI7XFxuXFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFxuICAgIC5tZWRpYS11cGxvYWQtbGlnaHRib3hfX25hdmlnYXRpb24tY29udHJvbHMtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19jbG9zZS1jb250cm9sLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgIC8qei1pbmRleDogMTAzOyovXFxuXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1lZGlhLXVwbG9hZC1saWdodGJveF9fbWFuYWdlLWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgIGxlZnQ6IDFyZW07XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tZWRpYS11cGxvYWQtbGlnaHRib3hfX21haW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5hY3RpdmUge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgd2FpdCkge1xuICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9LCB3YWl0KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dJZlVuZGVmaW5lZE9yTnVsbFdpdGhLZXlzKG9iaikge1xuICAgIGNvbnN0IGVycm9yc0tleXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBjb25zdCB2ID0gb2JqW2tdXG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbClcbiAgICAgICAgICAgIGVycm9yc0tleXMucHVzaChrKVxuICAgIH0pXG5cbiAgICBpZiAoZXJyb3JzS2V5cy5sZW5ndGggPiAwICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdTb21lIHZhbHVlcyB3ZXJlIG51bGwgb3IgdW5kZWZpbmVkJylcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Iga2V5czogJywgZXJyb3JzS2V5cylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRyZXNzU3VnZ2VzdGlvbklucHV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IEdFT0RFQ09ERV9VUkwgfSBmcm9tIFwiLi4vLi4vc2VydmVyRW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0ICcuL2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuY3NzJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QWRkcmVzc1N1Z2dlc3Rpb25JbnB1dCgpIHtcbiAgICBjb25zdCBhYyA9IG5ldyBBZGRyZXNzQXV0b0NvbXBsZXRlKClcbiAgICBhYy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzLWlucHV0JykpXG4gICAgcmV0dXJuIGFjXG59XG5cbmNsYXNzIEFkZHJlc3NBdXRvQ29tcGxldGUge1xuICAgIGlucHV0RWwgPSBudWxsO1xuICAgIHN1Z2dlc3RDb250YWluZXJFbCA9IG51bGw7XG4gICAgc3VnZ2VzdEl0ZW1Ob2RlID0gbnVsbDtcbiAgICAjZGVib3VuY2VLZXkgPSAnJ1xuICAgICNzdWdnZXN0aW9uU2VsZWN0ZWRDYWxsYmFjayA9IHVuZGVmaW5lZFxuXG5cbiAgICBpbml0KGlucHV0RWwpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsID0gaW5wdXRFbFxuXG5cbiAgICAgICAgY29uc3Qgc3VnZ2VzdENvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VnZ2VzdENvbnRhaW5lckVsLmlkID0gJ3N1Z2dlc3QtY29udGFpbmVyJ1xuICAgICAgICB0aGlzLmlucHV0RWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgc3VnZ2VzdENvbnRhaW5lckVsKVxuICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbCA9IHN1Z2dlc3RDb250YWluZXJFbFxuXG4gICAgICAgIGNvbnN0IHN1Z2dlc3RJdGVtTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgc3VnZ2VzdEl0ZW1Ob2RlLmNsYXNzTmFtZSA9ICdpdGVtLXdyYXBwZXInXG4gICAgICAgIHRoaXMuc3VnZ2VzdEl0ZW1Ob2RlID0gc3VnZ2VzdEl0ZW1Ob2RlXG5cblxuICAgICAgICAvLyB0b2RvIGZpeCB3aGVuIGZldGNoaW5nIGJ1dCBuZXcgZGVib3VuY2UgY2FsbFxuICAgICAgICBjb25zdCBkZWJvdW5jZWRIYW5kbGVyID0gZGVib3VuY2UoYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2RlYm91bmNlS2V5ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVEZWJvdW5jZWRJbnB1dCguLi5hcmdzKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHRoaXMuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldikgPT4gZGVib3VuY2VkSGFuZGxlcihldikpXG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlRGVib3VuY2VkSW5wdXQoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRFbC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTdWdnZXN0Q29udGFpbmVyKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZWRLZXkgPSB0aGlzLiNkZWJvdW5jZUtleVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGV2KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IChhd2FpdCBmZXRjaChHRU9ERUNPREVfVVJMICsgJz9zZWFyY2g9JyArIHRoaXMuaW5wdXRFbC52YWx1ZSkpLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTdWdnZXN0Q29udGFpbmVyKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI2RlYm91bmNlS2V5ICE9PSBjYXB0dXJlZEtleSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3RlZENvbnRhaW5lcihyZXN1bHQpXG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3RDb250YWluZXIoKVxuXG4gICAgfVxuXG4gICAgdXBkYXRlU3VnZ2VzdGVkQ29udGFpbmVyKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdENvbnRhaW5lckVsLnRleHRDb250ZW50ID0gJydcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1FbCA9IHRoaXMuc3VnZ2VzdEl0ZW1Ob2RlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgbGlzdEl0ZW1FbC50ZXh0Q29udGVudCA9IGl0ZW1bJ2Rpc3BsYXlfbmFtZSddXG4gICAgICAgICAgICBsaXN0SXRlbUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVTdWdnZXN0aW9uQ2xpY2soaXRlbSkpXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNhYmxlSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIH1cblxuICAgIGVuYWJsZUlucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIG9uU3VnZ2VzdGlvblNlbGVjdGVkKGNiKSB7XG4gICAgICAgIHRoaXMuI3N1Z2dlc3Rpb25TZWxlY3RlZENhbGxiYWNrID0gY2JcbiAgICB9XG5cbiAgICBzZXRJbnB1dFZhbHVlKHN0cikge1xuICAgICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSBzdHIgXG4gICAgfVxuXG4gICAgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdENvbnRhaW5lcigpXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShkYXRhWydkaXNwbGF5X25hbWUnXSlcblxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBvbiAnLCBkYXRhKVxuICAgICAgICB0aGlzLiNzdWdnZXN0aW9uU2VsZWN0ZWRDYWxsYmFjayhkYXRhKVxuICAgIH1cblxuICAgIHNob3dTdWdnZXN0Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGhpZGVTdWdnZXN0Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0TWFwKG1hcENsaWNrQ2FsbGJhY2spIHtcbiAgICBjb25zdCBtYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNTAuMDczNCwgMTQuNDE1MF0sIDEzKTtcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgbWF4Wm9vbTogMTksXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+J1xuICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICBsZXQgbGFzdE1hcmtlciA9IG51bGxcblxuICAgIG1hcC5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBhd2FpdCBtYXBDbGlja0NhbGxiYWNrKGUsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtsYXQsIGxuZ30gPSBlLmxhdGxuZztcblxuICAgICAgICAgICAgaWYgKGxhc3RNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIobGFzdE1hcmtlcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdE1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10pXG4gICAgICAgICAgICBtYXAuYWRkTGF5ZXIobGFzdE1hcmtlcilcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBzZXRNYXBWaWV3KGxhdCwgbG9uLCB6b29tKSB7XG4gICAgICAgIGlmIChsYXN0TWFya2VyKSB7XG4gICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIobGFzdE1hcmtlcilcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5zZXRWaWV3KFtsYXQsIGxvbl0sIHpvb20pXG4gICAgICAgIGxhc3RNYXJrZXIgPSBMLm1hcmtlcihbbGF0LCBsb25dKVxuICAgICAgICBtYXAuYWRkTGF5ZXIobGFzdE1hcmtlcilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhtYXApXG5cbiAgICByZXR1cm4geyBzZXRNYXBWaWV3LCBpbnZhbGlkYXRlTWFwU2l6ZTogKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCkgfVxufSIsImltcG9ydCB7IHRocm93SWZVbmRlZmluZWRPck51bGxXaXRoS2V5cyB9IGZyb20gXCIuLi8uLi91dGlsc1wiXG5cbmV4cG9ydCBjbGFzcyBTZWN0aW9uRGlzcGxheU1hbmFnZXIge1xuICAgIHNlY3Rpb25FbHMgPSBudWxsXG4gICAgc2VjdGlvbk9wZW5lZENhbGxiYWNrcyA9IHt9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9uRWxzID0ge1xuICAgICAgICAgICAgZ29hbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvYWwtc2VjdGlvbicpLFxuICAgICAgICAgICAgYWRkcmVzczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3Mtc2VjdGlvbicpLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFtZXRlcnMtc2VjdGlvbicpLFxuICAgICAgICAgICAgbWVkaWE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpYS1zZWN0aW9uJyksXG4gICAgICAgICAgICB2aWRlbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXNlY3Rpb24nKSxcbiAgICAgICAgICAgIHZhbHVhdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVhdGlvbi1zZWN0aW9uJyksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nKSxcbiAgICAgICAgICAgIGNvbnRhY3RzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMtc2VjdGlvbicpXG4gICAgICAgIH1cblxuICAgICAgICB0aHJvd0lmVW5kZWZpbmVkT3JOdWxsV2l0aEtleXMoe1xuICAgICAgICAgICAgZ29hbFNlY3Rpb246IHRoaXMuc2VjdGlvbkVscy5nb2FsLFxuICAgICAgICAgICAgYWRkcmVzc1NlY3Rpb246IHRoaXMuc2VjdGlvbkVscy5hZGRyZXNzLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1NlY3Rpb246IHRoaXMuc2VjdGlvbkVscy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgbWVkaWFTZWN0aW9uOiB0aGlzLnNlY3Rpb25FbHMubWVkaWEsXG4gICAgICAgICAgICB2aWRlb1NlY3Rpb246IHRoaXMuc2VjdGlvbkVscy52aWRlbyxcbiAgICAgICAgICAgIHZhbHVhdGlvblNlY3Rpb246IHRoaXMuc2VjdGlvbkVscy52YWx1YXRpb24sXG4gICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb246IHRoaXMuc2VjdGlvbkVscy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvbnRhY3RzU2VjdGlvbjogdGhpcy5zZWN0aW9uRWxzLmNvbnRhY3RzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TZWN0aW9uT3BlbmVkKHNlY3Rpb25OYW1lLCBjYikge1xuICAgICAgICBpZighIHRoaXMuc2VjdGlvbkVsc1tzZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIHNlY3Rpb24gbmFtZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudENicyA9IHRoaXMuc2VjdGlvbk9wZW5lZENhbGxiYWNrc1tzZWN0aW9uTmFtZV1cbiAgICAgICAgaWYgKGN1cnJlbnRDYnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudENicyA9IFtdXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25PcGVuZWRDYWxsYmFja3Nbc2VjdGlvbk5hbWVdID0gY3VycmVudENic1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRDYnMucHVzaChjYilcbiAgICB9XG5cbiAgICBzaG93U2VjdGlvbihzZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLiNzaG93RWwodGhpcy5zZWN0aW9uRWxzW3NlY3Rpb25OYW1lXSlcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9wZW5lZENicyA9IHRoaXMuc2VjdGlvbk9wZW5lZENhbGxiYWNrc1tzZWN0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKHNlY3Rpb25PcGVuZWRDYnM/LmZvckVhY2gpIHtcbiAgICAgICAgICAgIHNlY3Rpb25PcGVuZWRDYnMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhjYilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlU2VjdGlvbihzZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLiNoaWRlRWwodGhpcy5zZWN0aW9uRWxzW3NlY3Rpb25OYW1lXSlcbiAgICB9XG5cbiAgICAjc2hvd0VsKGVsKSB7XG4gICAgICAgIC8vIGQtbm9uZSBpcyBhZGRlZCBpbiBXZWJmbG93IGRlc2lnbmVyIHBhZ2UgYXMgZW1iZWRkZWQgaHRtbCBlbGVtZW50IGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICB9XG5cbiAgICAjaGlkZUVsKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR29hbFNlY3Rpb25TdGF0ZU1hbmFnZXIge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB0eXBlOiAnJywgLy8gb2ZmZXJpbmcgb3IgbG9va2luZ0ZvcixcbiAgICAgICAgZ29hbDogJycsIC8vIHJlbnQgb3Igc2VsbCBvciBidXksXG4gICAgICAgIG93bmVyVHlwZTogJycsIC8vIG93bmVyIG9yIGFnZW50IG9yIHRlbmFudCxcbiAgICAgICAgcHJvcGVydHlUeXBlOiAnJywgLy8gZmxhdCwgcm9vbSwgaG91c2Ugb3Igb2ZmaWNlLFxuICAgIH1cblxuICAgICN5b3VBcmVFbHMgPSBudWxsXG4gICAgI2dvYWxFbHMgPSBudWxsXG4gICAgI293bmVyVHlwZUVscyA9IG51bGxcbiAgICAjcHJvcGVydHlUeXBlRWxzID0gbnVsbFxuXG4gICAgI3lvdUFyZVNlY3Rpb25FbCA9IG51bGxcbiAgICAjeW91ckdvYWxJc1NlY3Rpb25FbCA9IG51bGxcbiAgICAjYXJlWW91T3duZXJTZWN0aW9uRWwgPSBudWxsXG4gICAgI3Byb3BlcnR5VHlwZVNlY3Rpb25FbCA9IG51bGxcblxuICAgICNvblByb3BlcnR5Q2FyZENsaWNrZWRDYiA9ICgpID0+IHt9XG5cbiAgICAjY2FyZEJsb2NrQWN0aXZlQ2xhc3NOYW1lID0gJ2NhcmQtYmxvY2stYWN0aXZlJ1xuICAgICNjYXJkQmxvY2tJbmFjdGl2ZUNsYXNzTmFtZSA9ICdjYXJkLWJsb2NrLWluYWN0aXZlJ1xuXG4gICAgI3NlY3Rpb25FbFRvU2VjdGlvbkNhcmRzRWwgPSB7fVxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZnVuY3Rpb24gaWQoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZmVyaW5nQ2FyZEVsID0gaWQoJ29mZmVyaW5nLWNhcmQnKVxuICAgICAgICBjb25zdCBsb29raW5nRm9yQ2FyZEVsID0gaWQoJ2xvb2tpbmctZm9yLWNhcmQnKVxuXG4gICAgICAgIGNvbnN0IHRvUmVudENhcmRFbCA9IGlkKCd0by1yZW50LWNhcmQnKVxuICAgICAgICBjb25zdCB0b1NlbGxDYXJkRWwgPSBpZCgndG8tc2VsbC1jYXJkJylcbiAgICAgICAgY29uc3QgdG9CdXlDYXJkRWwgPSBpZCgndG8tYnV5LWNhcmQnKVxuXG4gICAgICAgIGNvbnN0IGlBbU93bmVyQ2FyZEVsID0gaWQoJ2ktYW0tb3duZXItY2FyZCcpXG4gICAgICAgIGNvbnN0IGlBbUFnZW50Q2FyZEVsID0gaWQoJ2ktYW0tYWdlbnQtY2FyZCcpXG4gICAgICAgIGNvbnN0IGlBbVRlbmFudENhcmRFbCA9IGlkKCdpLWFtLXRlbmFudC1jYXJkJylcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eUZsYXRDYXJkRUwgPSBpZCgncHJvcGVydHktZmxhdC1jYXJkJylcbiAgICAgICAgY29uc3QgcHJvcGVydHlSb29tQ2FyZEVMID0gaWQoJ3Byb3BlcnR5LXJvb20tY2FyZCcpXG4gICAgICAgIGNvbnN0IHByb3BlcnR5SG91c2VDYXJkRUwgPSBpZCgncHJvcGVydHktaG91c2UtY2FyZCcpXG4gICAgICAgIGNvbnN0IHByb3BlcnR5T2ZmaWNlQ2FyZEVMID0gaWQoJ3Byb3BlcnR5LW9mZmljZS1jYXJkJylcbiAgICAgICAgY29uc3QgcHJvcGVydHlHYXJhZ2VDYXJkRUwgPSBpZCgncHJvcGVydHktZ2FyYWdlLWNhcmQnKVxuXG4gICAgICAgIHRoaXMuI3lvdUFyZVNlY3Rpb25FbCA9IGlkKCd5b3UtYXJlLWNhcmQtc2VjdGlvbicpXG4gICAgICAgIHRoaXMuI3lvdXJHb2FsSXNTZWN0aW9uRWwgPSBpZCgneW91ci1nb2FsLWlzLWNhcmQtc2VjdGlvbicpXG4gICAgICAgIHRoaXMuI2FyZVlvdU93bmVyU2VjdGlvbkVsID0gaWQoJ2FyZS15b3Utb3duZXItY2FyZC1zZWN0aW9uJylcbiAgICAgICAgdGhpcy4jcHJvcGVydHlUeXBlU2VjdGlvbkVsID0gaWQoJ3Byb3BlcnR5LXR5cGUtY2FyZC1zZWN0aW9uJylcblxuICAgICAgICBjb25zdCBzZWN0aW9uRWxzID0ge1xuICAgICAgICAgICAgeW91QXJlOiB0aGlzLiN5b3VBcmVTZWN0aW9uRWwsXG4gICAgICAgICAgICBnb2FsOiB0aGlzLiN5b3VyR29hbElzU2VjdGlvbkVsLFxuICAgICAgICAgICAgYXJlWW91T3duZXI6IHRoaXMuI2FyZVlvdU93bmVyU2VjdGlvbkVsLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiB0aGlzLiNwcm9wZXJ0eVR5cGVTZWN0aW9uRWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93SWZVbmRlZmluZWRPck51bGxXaXRoS2V5cyh7XG4gICAgICAgICAgICBvZmZlcmluZ0NhcmRFbCxcbiAgICAgICAgICAgIGxvb2tpbmdGb3JDYXJkRWwsXG5cbiAgICAgICAgICAgIHRvUmVudENhcmRFbCxcbiAgICAgICAgICAgIHRvU2VsbENhcmRFbCxcbiAgICAgICAgICAgIHRvQnV5Q2FyZEVsLFxuXG4gICAgICAgICAgICBpQW1BZ2VudENhcmRFbCxcbiAgICAgICAgICAgIGlBbUFnZW50Q2FyZEVsLFxuICAgICAgICAgICAgaUFtVGVuYW50Q2FyZEVsLFxuXG4gICAgICAgICAgICBwcm9wZXJ0eUZsYXRDYXJkRUwsXG4gICAgICAgICAgICBwcm9wZXJ0eVJvb21DYXJkRUwsXG4gICAgICAgICAgICBwcm9wZXJ0eUhvdXNlQ2FyZEVMLFxuICAgICAgICAgICAgcHJvcGVydHlPZmZpY2VDYXJkRUwsXG4gICAgICAgICAgICBwcm9wZXJ0eUdhcmFnZUNhcmRFTCxcblxuICAgICAgICAgICAgeW91QXJlQ2FyZFNlY3Rpb25FbDogdGhpcy4jeW91QXJlU2VjdGlvbkVsLFxuICAgICAgICAgICAgeW91ckdvYWxJc0NhcmRTZWN0aW9uRWw6IHRoaXMuI3lvdXJHb2FsSXNTZWN0aW9uRWwsXG4gICAgICAgICAgICBhcmVZb3VPd25lckNhcmRTZWN0aW9uRWw6IHRoaXMuI2FyZVlvdU93bmVyU2VjdGlvbkVsLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlQ2FyZFNlY3Rpb25FbDogdGhpcy4jcHJvcGVydHlUeXBlU2VjdGlvbkVsXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4jaGlkZVNlY3Rpb25zKFtzZWN0aW9uRWxzLmdvYWwsIHNlY3Rpb25FbHMuYXJlWW91T3duZXIsIHNlY3Rpb25FbHMucHJvcGVydHlUeXBlXSlcblxuICAgICAgICB0aGlzLiN5b3VBcmVFbHMgPSBbb2ZmZXJpbmdDYXJkRWwsIGxvb2tpbmdGb3JDYXJkRWxdXG4gICAgICAgIHRoaXMuI2dvYWxFbHMgPSBbdG9SZW50Q2FyZEVsLCB0b1NlbGxDYXJkRWwsIHRvQnV5Q2FyZEVsXVxuICAgICAgICB0aGlzLiNvd25lclR5cGVFbHMgPSBbaUFtT3duZXJDYXJkRWwsIGlBbUFnZW50Q2FyZEVsLCBpQW1UZW5hbnRDYXJkRWxdXG4gICAgICAgIHRoaXMuI3Byb3BlcnR5VHlwZUVscyA9IFtwcm9wZXJ0eUZsYXRDYXJkRUwsIHByb3BlcnR5Um9vbUNhcmRFTCwgcHJvcGVydHlIb3VzZUNhcmRFTCwgcHJvcGVydHlPZmZpY2VDYXJkRUwsIHByb3BlcnR5R2FyYWdlQ2FyZEVMXVxuXG4gICAgICAgIHRoaXMuI3NlY3Rpb25FbFRvU2VjdGlvbkNhcmRzRWwgPSB7XG4gICAgICAgICAgICBbdGhpcy4jeW91QXJlU2VjdGlvbkVsLmlkXTogdGhpcy4jeW91QXJlRWxzLFxuICAgICAgICAgICAgW3RoaXMuI3lvdXJHb2FsSXNTZWN0aW9uRWwuaWRdOiB0aGlzLiNnb2FsRWxzLFxuICAgICAgICAgICAgW3RoaXMuI2FyZVlvdU93bmVyU2VjdGlvbkVsLmlkXTogdGhpcy4jb3duZXJUeXBlRWxzLFxuICAgICAgICAgICAgW3RoaXMuI3Byb3BlcnR5VHlwZVNlY3Rpb25FbC5pZF06IHRoaXMuI3Byb3BlcnR5VHlwZUVscyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3lvdUFyZUVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWwuZGF0YXNldFsnbGlzdGluZ1R5cGUnXVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGVBbmRQcmludCh7IC4uLnRoaXMuc3RhdGUsIHR5cGU6IHZhbHVlIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNoaWRlU2VjdGlvbnMoW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN5b3VyR29hbElzU2VjdGlvbkVsLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNhcmVZb3VPd25lclNlY3Rpb25FbCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcHJvcGVydHlUeXBlU2VjdGlvbkVsXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB0aGlzLiNzaG93QWxsQ2FyZHNJblNlY3Rpb24odGhpcy4jZ29hbEVscylcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT09ICdvZmZlcmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jaGlkZUVsKHRvQnV5Q2FyZEVsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2hpZGVFbCh0b1NlbGxDYXJkRWwpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hvd1NlY3Rpb24odGhpcy4jeW91ckdvYWxJc1NlY3Rpb25FbClcblxuICAgICAgICAgICAgICAgIHRoaXMuI3NldENhcmRzQWN0aXZlU3RhdGUoZWwsIHRoaXMuI3lvdUFyZUVscylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuI2dvYWxFbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsLmRhdGFzZXRbJ2xpc3RpbmdHb2FsJ11cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlQW5kUHJpbnQoeyAuLi50aGlzLnN0YXRlLCBnb2FsOiB2YWx1ZSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jaGlkZVNlY3Rpb25zKFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcHJvcGVydHlUeXBlU2VjdGlvbkVsXG4gICAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dBbGxDYXJkc0luU2VjdGlvbih0aGlzLiNwcm9wZXJ0eVR5cGVFbHMpXG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICdyZW50Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNoaWRlRWwocHJvcGVydHlSb29tQ2FyZEVMKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT09ICdsb29raW5nRm9yJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzaG93U2VjdGlvbih0aGlzLiNwcm9wZXJ0eVR5cGVTZWN0aW9uRWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd1NlY3Rpb24odGhpcy4jYXJlWW91T3duZXJTZWN0aW9uRWwpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2V0Q2FyZHNBY3RpdmVTdGF0ZShlbCwgdGhpcy4jZ29hbEVscylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuI293bmVyVHlwZUVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWwuZGF0YXNldFsnbGlzdGluZ0lzT3duZXInXVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGVBbmRQcmludCh7IC4uLnRoaXMuc3RhdGUsIG93bmVyVHlwZTogdmFsdWUgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dTZWN0aW9uKHRoaXMuI3Byb3BlcnR5VHlwZVNlY3Rpb25FbClcblxuICAgICAgICAgICAgICAgIHRoaXMuI3NldENhcmRzQWN0aXZlU3RhdGUoZWwsIHRoaXMuI293bmVyVHlwZUVscylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuI3Byb3BlcnR5VHlwZUVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWwuZGF0YXNldFsnbGlzdGluZ1Byb3BlcnR5VHlwZSddXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZUFuZFByaW50KHsgLi4udGhpcy5zdGF0ZSwgcHJvcGVydHlUeXBlOiB2YWx1ZSB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jb25Qcm9wZXJ0eUNhcmRDbGlja2VkQ2IoKVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jc2V0Q2FyZHNBY3RpdmVTdGF0ZShlbCwgdGhpcy4jcHJvcGVydHlUeXBlRWxzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgb2ZmZXJpbmdDYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgfSl9XG5cbiAgICBvblByb3BlcnR5VHlwZUNhcmRDbGljayhjYikge1xuICAgICAgICB0aGlzLiNvblByb3BlcnR5Q2FyZENsaWNrZWRDYiA9IGNiXG4gICAgfVxuXG4gICAgI3NldENhcmRzQWN0aXZlU3RhdGUoY2xpY2tlZE9uQ2FyZEVsLCBjYXJkc1NlY3Rpb25FbCkge1xuICAgICAgICBjYXJkc1NlY3Rpb25FbC5mb3JFYWNoKGVsVG9VcGRhdGUgPT4ge1xuICAgICAgICAgICAgaWYgKGVsVG9VcGRhdGUgIT09IGNsaWNrZWRPbkNhcmRFbCkge1xuICAgICAgICAgICAgICAgIGVsVG9VcGRhdGUuY2xhc3NMaXN0LmFkZCh0aGlzLiNjYXJkQmxvY2tJbmFjdGl2ZUNsYXNzTmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2xpY2tlZE9uQ2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy4jY2FyZEJsb2NrSW5hY3RpdmVDbGFzc05hbWUpXG4gICAgICAgIGNsaWNrZWRPbkNhcmRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuI2NhcmRCbG9ja0FjdGl2ZUNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICAjaGlkZVNlY3Rpb25zKHNlY3Rpb25zRWxzKSB7XG4gICAgICAgIHNlY3Rpb25zRWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaGlkZUVsKGVsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICNzaG93QWxsQ2FyZHNJblNlY3Rpb24oc2VjdGlvbkVscykge1xuICAgICAgICBzZWN0aW9uRWxzLmZvckVhY2goY2FyZEVsID0+IHRoaXMuI3Nob3dFbChjYXJkRWwpKVxuICAgIH1cblxuICAgICNzaG93U2VjdGlvbihzZWN0aW9uRWwpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkNhcmRzRWwgPSB0aGlzLiNzZWN0aW9uRWxUb1NlY3Rpb25DYXJkc0VsW3NlY3Rpb25FbC5pZF1cbiAgICAgICAgc2VjdGlvbkNhcmRzRWwuZm9yRWFjaChjYXJkRWwgPT4ge1xuICAgICAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy4jY2FyZEJsb2NrQWN0aXZlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy4jY2FyZEJsb2NrSW5hY3RpdmVDbGFzc05hbWUpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuI3Nob3dFbChzZWN0aW9uRWwpXG4gICAgfVxuXG4gICAgLy8gdG9kbzogZC1ub25lIHVzZWQgdHdpY2UgaW4gY29kZS4gTW92ZSBmcm9tIGRlc2lnbmVyIG9yIGNyZWF0ZSBjb25zdGFudFxuICAgICNoaWRlRWwoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICB9XG5cbiAgICAjc2hvd0VsKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpXG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGVBbmRQcmludChuZXdMaXN0aW5nU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld0xpc3RpbmdTdGF0ZVxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGxpc3Rpbmcgc3RhdGU6ICcsIHRoaXMuc3RhdGUpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJzU2VjdGlvbk1hbmFnZXIge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB0b3RhbEFyZWE6IDAsXG4gICAgICAgIGlzUGV0c0FsbG93ZWQ6IGZhbHNlLFxuICAgICAgICBpc09ic3RhY2xlRnJlZTogZmFsc2UsXG4gICAgICAgIGlzU21va2luZ0FsbG93ZWQ6IGZhbHNlLFxuICAgICAgICBoYXNQYXJraW5nOiBmYWxzZSxcbiAgICAgICAgcmVudFRlcm1UeXBlOiBudWxsLCAvLyBzaG9ydCBvciBsb25nXG4gICAgICAgIGZsb29yTnVtYmVyOiBudWxsLFxuICAgICAgICBmbG9vclRvdGFsTnVtYmVyOiBudWxsLFxuICAgICAgICBmbGF0VHlwZTogJycsXG4gICAgICAgIGVuZXJneUNsYXNzOiAnJyxcbiAgICAgICAgZnVybml0dXJlOiAnJ1xuICAgIH1cblxuICAgICNhZnRlclN0YXRlQ2hhbmdlZENiID0gdW5kZWZpbmVkXG4gICAgI3JlcXVpcmVkRmlsbGVkQ2IgPSAoKSA9PiB7fVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGlkKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3RhbEFyZWFJbnB1dEVsID0gaWQoJ3RvdGFsLWFyZWEtaW5wdXQnKVxuICAgICAgICBjb25zdCBwZXRzVGdsRWwgPSBpZCgncGV0cy10b2dnbGUnKVxuICAgICAgICBjb25zdCBvYnN0YWNsZUZyZWVUZ2xFbCA9IGlkKCdvYnN0YWNsZS1mcmVlLXRvZ2dsZScpXG4gICAgICAgIGNvbnN0IHNtb2tpbmdUZ2xFbCA9IGlkKCdzbW9raW5nLXRvZ2dsZScpXG4gICAgICAgIGNvbnN0IHBhcmtpbmdUZ2xFbCA9IGlkKCdwYXJraW5nLXRvZ2dsZScpXG4gICAgICAgIGNvbnN0IGZsYXRUeXBlSW5wdXRFbCA9IGlkKCdGbGF0LXR5cGUtZmllbGQnKVxuICAgICAgICBjb25zdCBlbmVyZ3lDbGFzc0lucHV0RWwgPSBpZCgnRW5lcmd5LWNsYXNzLWZpZWxkJylcbiAgICAgICAgY29uc3QgZnVybml0dXJlSW5wdXRFbCA9IGlkKCdGdXJuaXR1cmUtZmllbGQnKVxuICAgICAgICBjb25zdCBsb25nVGVybVJhZGlvRWwgPSBpZCgnbG9uZy10ZXJtLXJhZGlvLWlucHV0JylcbiAgICAgICAgY29uc3Qgc2hvcnRUZXJtUmFkaW9FbCA9IGlkKCdzaG9ydC10ZXJtLXJhZGlvLWlucHV0JylcbiAgICAgICAgY29uc3QgZmxvb3JOdW1iZXJJbnB1dEVsID0gaWQoJ2ZzLWlucHV0Y291bnRlci0xLWlucHV0JylcbiAgICAgICAgY29uc3QgZmxvb3JUb3RhbE51bWJlcklucHV0RWwgPSBpZCgnZnMtaW5wdXRjb3VudGVyLTItaW5wdXQnKVxuXG4gICAgICAgIHRocm93SWZVbmRlZmluZWRPck51bGxXaXRoS2V5cyh7XG4gICAgICAgICAgICB0b3RhbEFyZWFJbnB1dEVsLFxuICAgICAgICAgICAgcGV0c1RnbEVsLFxuICAgICAgICAgICAgb2JzdGFjbGVGcmVlVGdsRWwsXG4gICAgICAgICAgICBzbW9raW5nVGdsRWwsXG4gICAgICAgICAgICBwYXJraW5nVGdsRWwsXG4gICAgICAgICAgICBmbGF0VHlwZUlucHV0RWwsXG4gICAgICAgICAgICBlbmVyZ3lDbGFzc0lucHV0RWwsXG4gICAgICAgICAgICBmdXJuaXR1cmVJbnB1dEVsLFxuICAgICAgICAgICAgbG9uZ1Rlcm1SYWRpb0VsLFxuICAgICAgICAgICAgc2hvcnRUZXJtUmFkaW9FbCxcbiAgICAgICAgICAgIGZsb29yTnVtYmVySW5wdXRFbCxcbiAgICAgICAgICAgIGZsb29yVG90YWxOdW1iZXJJbnB1dEVsXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmbGF0VHlwZTogZmxhdFR5cGVJbnB1dEVsLnZhbHVlLFxuICAgICAgICAgICAgZW5lcmd5Q2xhc3M6IGVuZXJneUNsYXNzSW5wdXRFbC52YWx1ZSxcbiAgICAgICAgICAgIGZ1cm5pdHVyZTogZnVybml0dXJlSW5wdXRFbC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxBcmVhSW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3NldFN0YXRlQW5kTG9nKHsuLi50aGlzLnN0YXRlLCB0b3RhbEFyZWE6IHRvdGFsQXJlYUlucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBwZXRzVGdsRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNzZXRTdGF0ZUFuZExvZyh7Li4udGhpcy5zdGF0ZSwgaXNQZXRzQWxsb3dlZDogIXRoaXMuc3RhdGUuaXNQZXRzQWxsb3dlZH0pXG4gICAgICAgIH0pXG4gICAgICAgIG9ic3RhY2xlRnJlZVRnbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGlzT2JzdGFjbGVGcmVlOiAhdGhpcy5zdGF0ZS5pc09ic3RhY2xlRnJlZX0pXG4gICAgICAgIH0pXG4gICAgICAgIHNtb2tpbmdUZ2xFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3NldFN0YXRlQW5kTG9nKHsuLi50aGlzLnN0YXRlLCBpc1Ntb2tpbmdBbGxvd2VkOiAhdGhpcy5zdGF0ZS5pc1Ntb2tpbmdBbGxvd2VkfSlcbiAgICAgICAgfSlcbiAgICAgICAgcGFya2luZ1RnbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGhhc1Bhcmtpbmc6ICF0aGlzLnN0YXRlLmhhc1Bhcmtpbmd9KVxuICAgICAgICB9KVxuICAgICAgICBmbGF0VHlwZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGZsYXRUeXBlOiBmbGF0VHlwZUlucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBlbmVyZ3lDbGFzc0lucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGVuZXJneUNsYXNzOiBlbmVyZ3lDbGFzc0lucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBmdXJuaXR1cmVJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3NldFN0YXRlQW5kTG9nKHsuLi50aGlzLnN0YXRlLCBmdXJuaXR1cmU6IGZ1cm5pdHVyZUlucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBsb25nVGVybVJhZGlvRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNzZXRTdGF0ZUFuZExvZyh7Li4udGhpcy5zdGF0ZSwgcmVudFRlcm1UeXBlOiAnbG9uZyd9KVxuICAgICAgICB9KVxuICAgICAgICBzaG9ydFRlcm1SYWRpb0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIHJlbnRUZXJtVHlwZTogJ3Nob3J0J30pXG4gICAgICAgIH0pXG4gICAgICAgIGZsb29yTnVtYmVySW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3NldFN0YXRlQW5kTG9nKHsuLi50aGlzLnN0YXRlLCBmbG9vck51bWJlcjogZmxvb3JOdW1iZXJJbnB1dEVsLnZhbHVlfSlcbiAgICAgICAgfSlcbiAgICAgICAgZmxvb3JUb3RhbE51bWJlcklucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNzZXRTdGF0ZUFuZExvZyh7Li4udGhpcy5zdGF0ZSwgZmxvb3JUb3RhbE51bWJlcjogZmxvb3JUb3RhbE51bWJlcklucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2FmdGVyU3RhdGVDaGFuZ2VkQ2IgPSAoKSA9PiB0aGlzLiNjaGVja0FuZE5vdGlmeUlmUmVxdWlyZWRJc0ZpbGxlZCgpO1xuICAgIH1cblxuICAgIG9uUmVxdWlyZWRJc0ZpbGxlZChjYikge1xuICAgICAgICB0aGlzLiNyZXF1aXJlZEZpbGxlZENiID0gKCkgPT4gY2IoKVxuICAgIH1cblxuICAgICNzZXRTdGF0ZUFuZExvZyhzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuI2FmdGVyU3RhdGVDaGFuZ2VkQ2IoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBwYXJhbWV0ZXJzIHNlY3Rpb24gc3RhdGU6ICcsIHN0YXRlKTtcbiAgICB9XG5cbiAgICAjY2hlY2tBbmROb3RpZnlJZlJlcXVpcmVkSXNGaWxsZWQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkoLi4uYXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwgfHwgYXJnLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByZW50VGVybVR5cGUsIGZsb29yTnVtYmVyLCBmbG9vclRvdGFsTnVtYmVyLCBmbGF0VHlwZSwgdG90YWxBcmVhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICh0b3RhbEFyZWEgPT09IDApIHJldHVyblxuXG4gICAgICAgIGlmIChpc051bGxPckVtcHR5KHJlbnRUZXJtVHlwZSwgZmxvb3JOdW1iZXIsIGZsb29yVG90YWxOdW1iZXIsIGZsYXRUeXBlKSkgcmV0dXJuXG4gICAgICAgIHRoaXMuI2FmdGVyU3RhdGVDaGFuZ2VkQ2IgPSAoKSA9PiB7fVxuICAgICAgICB0aGlzLiNyZXF1aXJlZEZpbGxlZENiKClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVZhbHVhdGlvblNlY3Rpb25NYW5hZ2VyIHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcHJpY2VQZXJNb250aDogMCxcbiAgICAgICAgc2VydmljZXNQZXJNb250aDogMCxcbiAgICAgICAgZGVwb3NpdDogMCxcbiAgICAgICAgYWRkaXRpb25hbEZlZXM6IDAsXG4gICAgfVxuXG4gICAgI2FmdGVyU3RhdGVDaGFuZ2VkQ2IgPSB1bmRlZmluZWRcbiAgICAjcmVxdWlyZWRGaWxsZWRDYiA9ICgpID0+IHt9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZnVuY3Rpb24gaWQoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaWNlUGVyTW9udGhJbnB1dEVsID0gaWQoJ1ByaWNlLXBlci1tb250aCcpXG4gICAgICAgIGNvbnN0IHNlcnZpY2VzUGVyTW9udGhJbnB1dEVsID0gaWQoJ1NlcnZpY2VzLXBlci1tb250aCcpXG4gICAgICAgIGNvbnN0IGRlcG9zaXRJbnB1dEVsID0gaWQoJ0RlcG9zaXQnKVxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsRmVlc0lucHV0RWwgPSBpZCgnQWRkaXRpb25hbC1mZWVzJylcblxuICAgICAgICB0aHJvd0lmVW5kZWZpbmVkT3JOdWxsV2l0aEtleXMoe3ByaWNlUGVyTW9udGhJbnB1dEVsLCBzZXJ2aWNlc1Blck1vbnRoSW5wdXRFbCwgZGVwb3NpdElucHV0RWwsIGFkZGl0aW9uYWxGZWVzSW5wdXRFbH0pXG5cbiAgICAgICAgcHJpY2VQZXJNb250aElucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNzZXRTdGF0ZUFuZExvZyh7Li4udGhpcy5zdGF0ZSwgcHJpY2VQZXJNb250aDogcHJpY2VQZXJNb250aElucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBzZXJ2aWNlc1Blck1vbnRoSW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3NldFN0YXRlQW5kTG9nKHsuLi50aGlzLnN0YXRlLCBzZXJ2aWNlc1Blck1vbnRoOiBzZXJ2aWNlc1Blck1vbnRoSW5wdXRFbC52YWx1ZX0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlcG9zaXRJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGRlcG9zaXQ6IGRlcG9zaXRJbnB1dEVsLnZhbHVlfSlcbiAgICAgICAgfSlcbiAgICAgICAgYWRkaXRpb25hbEZlZXNJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jc2V0U3RhdGVBbmRMb2coey4uLnRoaXMuc3RhdGUsIGFkZGl0aW9uYWxGZWVzOiBhZGRpdGlvbmFsRmVlc0lucHV0RWwudmFsdWV9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2FmdGVyU3RhdGVDaGFuZ2VkQ2IgPSAoKSA9PiB0aGlzLiNjaGVja0FuZE5vdGlmeUlmUmVxdWlyZWRJc0ZpbGxlZCgpXG4gICAgfVxuXG4gICAgb25SZXF1aXJlZElzRmlsbGVkKGNiKSB7XG4gICAgICAgIHRoaXMuI3JlcXVpcmVkRmlsbGVkQ2IgPSBjYlxuICAgIH1cblxuICAgICNjaGVja0FuZE5vdGlmeUlmUmVxdWlyZWRJc0ZpbGxlZCgpIHtcbiAgICAgICAgZnVuY3Rpb24gaXNaZXJvT3JVbmRlZmluZWQoLi4uYXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IHVuZGVmaW5lZCB8fCBhcmcgPT09IDAgfHwgYXJnLnRyaW0oKSA9PT0gJycpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge3ByaWNlUGVyTW9udGgsIHNlcnZpY2VzUGVyTW9udGgsIGRlcG9zaXQsIGFkZGl0aW9uYWxGZWVzfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFyc2VJbnQoYWRkaXRpb25hbEZlZXMsIDEwKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzWmVyb09yVW5kZWZpbmVkKHByaWNlUGVyTW9udGgsIHNlcnZpY2VzUGVyTW9udGgsIGRlcG9zaXQpKSByZXR1cm5cblxuICAgICAgICB0aGlzLiNhZnRlclN0YXRlQ2hhbmdlZENiID0gKCkgPT4ge31cbiAgICAgICAgdGhpcy4jcmVxdWlyZWRGaWxsZWRDYigpXG4gICAgfVxuXG5cbiAgICAjc2V0U3RhdGVBbmRMb2coc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLiNhZnRlclN0YXRlQ2hhbmdlZENiKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXcgcHJvcGVydHkgdmFsdWF0aW9uIHNlY3Rpb24gc3RhdGU6ICcsIHN0YXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvblNlY3Rpb25NYW5hZ2VyIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnXG4gICAgI21pbkNoYXJhY3RlcnNGaWxsZWRDYiA9ICgpID0+IHt9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5LWRlc2NyaXB0aW9uLWlucHV0JylcblxuICAgICAgICB0aHJvd0lmVW5kZWZpbmVkT3JOdWxsV2l0aEtleXMoe2Rlc2NyaXB0aW9uSW5wdXRFbH0pXG5cbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRFbC52YWx1ZVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbWluQ2hhcmFjdGVyc0ZpbGxlZENiKClcbiAgICAgICAgICAgICAgICB0aGlzLiNtaW5DaGFyYWN0ZXJzRmlsbGVkQ2IgPSAoKSA9PiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgb25NaW5pbXVtQ2hhcmFjdGVyc0ZpbGxlZChjYikge1xuICAgICAgICB0aGlzLiNtaW5DaGFyYWN0ZXJzRmlsbGVkQ2IgPSBjYlxuXG4gICAgfVxuXG5cblxuXG5cbn0iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgaWQ9XFxcIm1lZGlhLXVwbG9hZC1pbnB1dFxcXCIgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiLz5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHRlbXBsYXRlIHgtdGVsZXBvcnQ9XFxcImJvZHlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJtZWRpYS11cGxvYWQtb3ZlcmxheVxcXCIgOmNsYXNzPVxcXCJpc01lZGlhRHJhZ0FjdGl2ZSA9PT0gdHJ1ZSAgPyAnZW5hYmxlZCc6ICcnXFxcIj4gPC9kaXY+IDwvdGVtcGxhdGU+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGUgeC10ZWxlcG9ydD1cXFwiYm9keVxcXCI+IDxkaXYgeC1kYXRhPVxcXCJtZWRpYUxpZ2h0Ym94XFxcIiBAY2xpY2suc2VsZj1cXFwiaXNMaWdodGJveE9wZW5lZCA9IGZhbHNlXFxcIiBpZD1cXFwibWVkaWEtdXBsb2FkLWxpZ2h0Ym94XFxcIiA6Y2xhc3M9XFxcImlzTGlnaHRib3hPcGVuZWQgPyAnYWN0aXZlJyA6ICcnXFxcIj4gPGRpdiBjbGFzcz1cXFwibWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19tYWluLWltYWdlLWNvbnRhaW5lclxcXCI+IDxpbWcgOnNyYz1cXFwiZ2V0SW1hZ2VVcmwoY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleClcXFwiIGFsdD1cXFwiaW1hZ2UtaW4tbGlnaHRib3hcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19uYXZpZ2F0aW9uLWNvbnRyb2xzLWNvbnRhaW5lclxcXCI+IDxidXR0b24gQGNsaWNrPVxcXCJoYW5kbGVQcmV2QnRuQ2xpY2soKVxcXCI+IOKshe+4jyA8L2J1dHRvbj4gPGJ1dHRvbiBAY2xpY2s9XFxcImhhbmRsZU5leHRCdG5DbGljaygpXFxcIj4g4p6h77iPIDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19jbG9zZS1jb250cm9sLWNvbnRhaW5lclxcXCI+IDxidXR0b24gQGNsaWNrPVxcXCJpc0xpZ2h0Ym94T3BlbmVkID0gZmFsc2VcXFwiPuKcljwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibWVkaWEtdXBsb2FkLWxpZ2h0Ym94X19tYW5hZ2UtY29udHJvbC1jb250YWluZXJcXFwiPiA8YnV0dG9uPiDirZAgPC9idXR0b24+IDxidXR0b24+IPCfl5HvuI8gPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC90ZW1wbGF0ZT5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgVVBMT0FEX01FRElBX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXJFbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIE1lZGlhVXBsb2FkZXIge1xuICAgIGlzVXBsb2FkaW5nTm93ID0gZmFsc2VcbiAgICB1cGxvYWRJZCA9IG51bGxcbiAgICBmaWxlc1RvVXBsb2FkID0gW11cblxuICAgIHF1ZXVlRmlsZShmaWxlLCByZXN1bHRDYikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQucHVzaCh7ZmlsZSwgcmVzdWx0Q2IsIHJlcywgcmVqfSlcbiAgICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZGVxdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVcGxvYWRpbmdOb3cpIHJldHVyblxuICAgICAgICBpZiAodGhpcy5maWxlc1RvVXBsb2FkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qge2ZpbGUsIHJlc3VsdENiLCByZXMsIHJlan0gPSB0aGlzLmZpbGVzVG9VcGxvYWQuc2hpZnQoKVxuXG4gICAgICAgIGlmKCFmaWxlKSByZXR1cm5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5pc1VwbG9hZGluZ05vdyA9IHRydWVcblxuICAgICAgICAgICAgY29uc3QgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCB0aGlzLiN1cGxvYWRGaWxlKGZpbGUpXG4gICAgICAgICAgICBpZiAoIXVwbG9hZFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB1cGxvYWRpbmcgbWVkaWEnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISB0aGlzLnVwbG9hZElkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgdXBsb2FkUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkSWQgPSB1cGxvYWRSZXN1bHQudXBsb2FkSWRcblxuICAgICAgICAgICAgICAgIGlmICghdXBsb2FkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXYXMgZXhwZWN0aW5nIHVwbG9hZCBpZCBmcm9tIHNlcnZlciByZXNwb25zZSBidXQgZ290IG5vbmUnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkSWQgPSB1cGxvYWRJZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nTm93ID0gZmFsc2VcblxuICAgICAgICAgICAgcmVzdWx0Q2IoKVxuICAgICAgICAgICAgcmVzKClcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nTm93ID0gZmFsc2VcbiAgICAgICAgICAgIHJlc3VsdENiKHtlcnJvcjogdHJ1ZX0pXG4gICAgICAgICAgICByZWooKVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5kZXF1ZXVlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFzeW5jICN1cGxvYWRGaWxlKGZpbGUpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgICAgIGlmICh0aGlzLnVwbG9hZElkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZElkJywgdGhpcy51cGxvYWRJZClcbiAgICAgICAgfVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhJywgZmlsZSlcblxuICAgICAgICByZXR1cm4gZmV0Y2goVVBMT0FEX01FRElBX1VSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICB9KTtcblxuICAgIH1cbn0iLCJpbXBvcnQgQWxwaW5lIGZyb20gJ2FscGluZWpzJ1xuXG5pbXBvcnQgaGlkZGVuSW5wdXQgZnJvbSAnLi9oaWRkZW5JbnB1dC5odG1sJ1xuaW1wb3J0IG1lZGlhVXBsb2FkT3ZlcmxheSBmcm9tICcuL21lZGlhLXVwbG9hZC1vdmVybGF5Lmh0bWwnXG5pbXBvcnQgbWVkaWFMaWdodGJveCBmcm9tICcuL2xpZ2h0Ym94Lmh0bWwnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgTWVkaWFVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xuXG5jb25zdCB1cGxvYWRlciA9IG5ldyBNZWRpYVVwbG9hZGVyKClcblxuY29uc3QgbWVkaWFTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lZGlhLXNlY3Rpb24nKVxuY29uc3QgbWVkaWFVcGxvYWRJbWFnZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWRyb3AtYXJlYScpXG5tZWRpYVVwbG9hZEltYWdlRWwuY2xhc3NMaXN0LmFkZCgnbWVkaWEtZG5kLWFjdGl2ZScpXG4vLyBjb25zdCBtZWRpYUhpbnRFbCA9IG1lZGlhU2VjdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnLWFyZWEtaWNvbicpWzBdXG5jb25zdCBtZWRpYU1haW5JbWdFbCA9IG1lZGlhU2VjdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF1cbmNvbnN0IGltYWdlUHJldmlld0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItaXRlbXMtY29udGFpbmVyIC5zbGlkZXItaXRlbScpXG5cbm1lZGlhU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGhpZGRlbklucHV0KVxubWVkaWFTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWVkaWFVcGxvYWRPdmVybGF5KVxubWVkaWFTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWVkaWFMaWdodGJveClcbmNvbnN0IG1lZGlhVXBsb2FkSW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpYS11cGxvYWQtaW5wdXQnKVxuXG5cbmNvbnN0IG1lZGlhU2VjdGlvblhEYXRhID0gKCkgPT4gKHtcbiAgICBtZWRpYUZpbGVzOiBbXSxcbiAgICBtZWRpYUZpbGVzVXJsczogW10sXG4gICAgaW1hZ2VMb2FkU3RhdHVzOiB7fSxcbiAgICBtZWRpYUVsUmVsYXRpdmVDbGFzc1JlbW92ZVRpbWVvdXQ6IG51bGwsXG4gICAgaXNNZWRpYURyYWdBY3RpdmU6IGZhbHNlLFxuXG4gICAgY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleDogbnVsbCxcbiAgICAvLyBzZXBhcmF0ZSBwcm9wIHRvIGZpeCBmbGlja2VyeVxuICAgIGlzTGlnaHRib3hPcGVuZWQ6IGZhbHNlLFxuXG4gICAgZ2V0IGhhc1NvbWVGaWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFGaWxlcy5sZW5ndGggIT09IDBcbiAgICB9LFxuXG4gICAgZ2V0SW1hZ2VVcmwoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdXJsSW1nID0gdGhpcy5tZWRpYUZpbGVzVXJsc1tpbmRleF1cbiAgICAgICAgcmV0dXJuIHVybEltZyA/PyAnJ1xuICAgIH0sXG5cbiAgICBpc0ltYWdlTG9hZGVkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGlzTG9hZGVkID0gdGhpcy5pbWFnZUxvYWRTdGF0dXNbaW5kZXhdXG5cbiAgICAgICAgcmV0dXJuIGlzTG9hZGVkID8/IGZhbHNlXG4gICAgfSxcblxuICAgIG9wZW5GaWxlUGlja2VyKCkge1xuICAgICAgICBtZWRpYVVwbG9hZElucHV0RWwuY2xpY2soKVxuICAgIH0sXG5cbiAgICBzZWxlY3RlZEZpbGVVcGRhdGVkKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gbWVkaWFVcGxvYWRJbnB1dEVsLmZpbGVzO1xuXG4gICAgICAgIHRoaXMubWVkaWFGaWxlcy5wdXNoKC4uLnNlbGVjdGVkRmlsZXMpXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlbGVjdGVkRmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gc2VsZWN0ZWRGaWxlc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgICAgICB0aGlzLm1lZGlhRmlsZXNVcmxzLnB1c2godXJsKVxuXG4gICAgICAgICAgICBsZXQgZmlsZUluZGV4ID0gdGhpcy5tZWRpYUZpbGVzVXJscy5sZW5ndGggLSAxXG4gICAgICAgICAgICBpZiAoZmlsZUluZGV4IDwgMCkgZmlsZUluZGV4ID0gMFxuICAgICAgICAgICAgdXBsb2FkZXIucXVldWVGaWxlKGZpbGUsICgpID0+IHRoaXMuaW1hZ2VMb2FkU3RhdHVzW2ZpbGVJbmRleF0gPSB0cnVlKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRHJvcEhhbmRsZXIoZSkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zO1xuICAgICAgICB0aGlzLm9uTWVkaWFEcmFnRW5kKClcblxuICAgICAgICBpZiAoISBpdGVtcykgcmV0dXJuXG5cbiAgICAgICAgWy4uLml0ZW1zXS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaWYgKGkua2luZCAhPT0gJ2ZpbGUnKSByZXR1cm5cbiAgICAgICAgICAgIGlmIChpLnR5cGUgIT09ICdpbWFnZS9qcGVnJykgcmV0dXJuXG5cbiAgICAgICAgICAgIC8vIHRvZG86IHNtZWxscy4gZHVwbGljYXRlIGZyb20gc2VsZWN0ZWRGaWxlVXBkYXRlZFxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGkuZ2V0QXNGaWxlKClcbiAgICAgICAgICAgIHRoaXMubWVkaWFGaWxlcy5wdXNoKGZpbGUpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgICAgICB0aGlzLm1lZGlhRmlsZXNVcmxzLnB1c2godXJsKVxuXG4gICAgICAgICAgICBsZXQgZmlsZUluZGV4ID0gdGhpcy5tZWRpYUZpbGVzVXJscy5sZW5ndGggLSAxXG4gICAgICAgICAgICBpZiAoZmlsZUluZGV4IDwgMCkgZmlsZUluZGV4ID0gMFxuICAgICAgICAgICAgdXBsb2FkZXIucXVldWVGaWxlKGZpbGUsICgpID0+IHRoaXMuaW1hZ2VMb2FkU3RhdHVzW2ZpbGVJbmRleF0gPSB0cnVlKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBvbk1lZGlhRHJhZ092ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTWVkaWFEcmFnQWN0aXZlID09PSB0cnVlKSByZXR1cm5cbiAgICAgICAgdGhpcy5pc01lZGlhRHJhZ0FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgbWVkaWFVcGxvYWRJbWFnZUVsLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWRuZC1hY3RpdmUnKVxuICAgIH0sXG5cbiAgICBvbk1lZGlhRHJhZ0VuZCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWVkaWFFbFJlbGF0aXZlQ2xhc3NSZW1vdmVUaW1lb3V0KVxuICAgICAgICAvLyB3aXRob3V0IHRpbWVvdXQgbWVkaWEgZWwgYmVjb21lcyBqaXR0ZXJ5XG4gICAgICAgIHRoaXMubWVkaWFFbFJlbGF0aXZlQ2xhc3NSZW1vdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01lZGlhRHJhZ0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgbWVkaWFVcGxvYWRJbWFnZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGlhLWRuZC1hY3RpdmUnKVxuICAgICAgICB9LCA3MDApXG5cbiAgICAgICAgdGhpcy5pc01lZGlhRHJhZ0FjdGl2ZSA9IGZhbHNlXG4gICAgfSxcblxuICAgIGhhbmRsZU9uSW1hZ2VQcmV2aWV3Q2xpY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKCEgdGhpcy5nZXRJbWFnZVVybChpbmRleCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlTGlnaHRib3hJbWFnZUluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy5pc0xpZ2h0Ym94T3BlbmVkID0gdHJ1ZVxuICAgIH1cbn0pXG5jb25zdCBsaWdodEJveFhEYXRhID0gKCkgPT4gKHtcbiAgICBoYW5kbGVQcmV2QnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3RpdmVMaWdodGJveEltYWdlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleCA9IHRoaXMubWVkaWFGaWxlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleC0tXG4gICAgfSxcblxuICAgIGhhbmRsZU5leHRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleCA9PT0gdGhpcy5tZWRpYUZpbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUxpZ2h0Ym94SW1hZ2VJbmRleCA9IDBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlTGlnaHRib3hJbWFnZUluZGV4KytcbiAgICB9XG5cbn0pXG5cblxuXG5tZWRpYVVwbG9hZElucHV0RWwuc2V0QXR0cmlidXRlKCd4LW9uOmNoYW5nZScsICdzZWxlY3RlZEZpbGVVcGRhdGVkJylcblxuLy8gbWVkaWFIaW50RWwuc2V0QXR0cmlidXRlKCd4LXNob3cnLCAnISBoYXNTb21lRmlsZXMnKVxuXG5tZWRpYVVwbG9hZEltYWdlRWwuc2V0QXR0cmlidXRlKCd4LW9uOmNsaWNrJywgJ29wZW5GaWxlUGlja2VyJylcbm1lZGlhVXBsb2FkSW1hZ2VFbC5zZXRBdHRyaWJ1dGUoJ3gtb246ZHJvcC5wcmV2ZW50JywgJ29uRHJvcEhhbmRsZXInKVxubWVkaWFVcGxvYWRJbWFnZUVsLnNldEF0dHJpYnV0ZSgneC1vbjpkcmFnb3Zlci5wcmV2ZW50JywgJ29uTWVkaWFEcmFnT3ZlcicpXG5tZWRpYVVwbG9hZEltYWdlRWwuc2V0QXR0cmlidXRlKCd4LW9uOmRyYWdsZWF2ZS5wcmV2ZW50JywgJ29uTWVkaWFEcmFnRW5kJylcblxuLy8gbWVkaWFNYWluSW1nRWwuc2V0QXR0cmlidXRlKCd4LWJpbmQ6c3JjJywgJ2dldEltYWdlVXJsKDApJylcblxuQWxwaW5lLmRhdGEoJ21lZGlhJywgbWVkaWFTZWN0aW9uWERhdGEpXG5BbHBpbmUuZGF0YSgnbWVkaWFMaWdodGJveCcsIGxpZ2h0Qm94WERhdGEpXG5tZWRpYVNlY3Rpb24uc2V0QXR0cmlidXRlKCd4LWRhdGEnLCAnbWVkaWEnKVxuXG5jb25zdCBvdmVybGF5QWxwaW5lRGF0YSA9IChpbWFnZUluZGV4ID0gMCkgPT4gKHtcbiAgICBpbWFnZUluZGV4OiBpbWFnZUluZGV4LFxuXG4gICAgb3ZlcmxheUJpbmQ6IHtcbiAgICAgICAgWyc6Y2xhc3MnXSgpIHtcbiAgICAgICAgICAgICBpZiAodGhpcy5nZXRJbWFnZVVybCh0aGlzLmltYWdlSW5kZXgpICE9PSAnJyAmJiAhIHRoaXMuaXNJbWFnZUxvYWRlZCh0aGlzLmltYWdlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzbGlkZXItaXRlbS1sb2FkaW5nLW92ZXJsYXktdmlzaWJsZSdcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbkFscGluZS5kYXRhKCdpbWFnZVByZXZpZXdPdmVybGF5Jywgb3ZlcmxheUFscGluZURhdGEpXG5BbHBpbmUuZGF0YSgnaW1hZ2VQcmV2aWV3U2hhZG93JywgKGltYWdlSW5kZXggPSAwKSA9PiAoe1xuICAgIGltYWdlSW5kZXg6IGltYWdlSW5kZXgsXG5cbiAgICBzaGFkb3dCaW5kOiB7XG4gICAgICAgIFsnOmNsYXNzJ10oKSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SW1hZ2VVcmwodGhpcy5pbWFnZUluZGV4KSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NsaWRlci1pdGVtLXNoYWRvdy12aXNpYmxlJ1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG4gICAgfVxufSkpXG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZVByZXZpZXdFbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgcHJldmlld0VsID0gaW1hZ2VQcmV2aWV3RWxzW2luZGV4XTtcbiAgICBwcmV2aWV3RWwuc2V0QXR0cmlidXRlKCd4LW9uOmNsaWNrJywgYGhhbmRsZU9uSW1hZ2VQcmV2aWV3Q2xpY2soJHtpbmRleH0pYClcblxuICAgIGNvbnN0IGltYWdlRWwgPSBwcmV2aWV3RWwucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICBpbWFnZUVsLnNldEF0dHJpYnV0ZSgneC1iaW5kOnNyYycsIGBnZXRJbWFnZVVybCgke2luZGV4fSlgKVxuICAgIGltYWdlRWwuc2V0QXR0cmlidXRlKCd4LXNob3cnLCBgZ2V0SW1hZ2VVcmwoJHtpbmRleH0pICE9PSAnJ2ApXG5cbiAgICAvLyDQutCw0Log0Y8g0LXQsdCw0Lsg0YLQsNC60YPRjiDRhdGD0LnQvdGOLiBoYWNrXG4gICAgY29uc3Qgc2hhZG93RWwgPSBwcmV2aWV3RWwucXVlcnlTZWxlY3RvcignLnNsaWRlci1pdGVtLXNoYWRvdycpXG4gICAgLy8gc2hhZG93RWwuc3R5bGVbJ2JveFNoYWRvdyddID0gaW1hZ2VQcmV2aWV3RWxTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNoYWRvdycpXG4gICAgLy8gc2hhZG93RWwuc3R5bGVbJ2JvcmRlclJhZGl1cyddID0gaW1hZ2VQcmV2aWV3RWxTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXJhZGl1cycpXG4gICAgLy8gc2hhZG93RWwuc3R5bGVbJ3dpZHRoJ10gPSAnMTAwJSdcbiAgICAvLyBzaGFkb3dFbC5zdHlsZVsnaGVpZ2h0J10gPSAnMTAwJWltYWdlUHJldmlld092ZXJsYXknXG4gICAgLy8gc2hhZG93RWwuc3R5bGVbJ3Bvc2l0aW9uJ10gPSAnYWJzb2x1dGUnXG5cbiAgICBzaGFkb3dFbC5zZXRBdHRyaWJ1dGUoJ3gtZGF0YScsIGBpbWFnZVByZXZpZXdTaGFkb3coJHtpbmRleH0pYClcbiAgICBzaGFkb3dFbC5zZXRBdHRyaWJ1dGUoJ3gtYmluZCcsICdzaGFkb3dCaW5kJylcblxuICAgIGNvbnN0IGxvYWRpbmdPdmVybGF5RWwgPSBwcmV2aWV3RWwucXVlcnlTZWxlY3RvcignLnNsaWRlci1pdGVtLWxvYWRpbmctb3ZlcmxheScpO1xuXG4gICAgLy8gbG9hZGluZ092ZXJsYXlFbC5zZXRBdHRyaWJ1dGUoJ3gtc2hvdycsIGBpc0ltYWdlTG9hZGVkKCR7aW5kZXh9KWApXG4gICAgbG9hZGluZ092ZXJsYXlFbC5zZXRBdHRyaWJ1dGUoJ3gtZGF0YScsIGBpbWFnZVByZXZpZXdPdmVybGF5KCR7aW5kZXh9KWApXG4gICAgbG9hZGluZ092ZXJsYXlFbC5zZXRBdHRyaWJ1dGUoJ3gtYmluZCcsICdvdmVybGF5QmluZCcpXG5cbiAgICBjb25zdCBjb250cm9sc092ZXJsYXlFbCA9IHByZXZpZXdFbC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWl0ZW0tY29udHJvbHMtb3ZlcmxheS1jb250YWluZXInKVxuICAgIGNvbnRyb2xzT3ZlcmxheUVsLnNldEF0dHJpYnV0ZSgneC1zaG93JywgYGdldEltYWdlVXJsKCR7aW5kZXh9KSAhPT0gJydgKVxufVxuXG5BbHBpbmUuc3RhcnQoKSIsImltcG9ydCB7IGluaXRBZGRyZXNzU3VnZ2VzdGlvbklucHV0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdGluZy9hZGRyZXNzU3VnZ2VzdGlvbklucHV0XCJcbmltcG9ydCB7IGluaXRNYXAgfSBmcm9tIFwiLi9jcmVhdGVMaXN0aW5nL21hcFwiXG5pbXBvcnQgeyBSRVZFUlNFX0dFT19VUkwgfSBmcm9tIFwiLi4vc2VydmVyRW5kcG9pbnRzXCJcbmltcG9ydCB7IERlc2NyaXB0aW9uU2VjdGlvbk1hbmFnZXIsIEdvYWxTZWN0aW9uU3RhdGVNYW5hZ2VyLCBQYXJhbWV0ZXJzU2VjdGlvbk1hbmFnZXIsIFByb3BlcnR5VmFsdWF0aW9uU2VjdGlvbk1hbmFnZXIsIFNlY3Rpb25EaXNwbGF5TWFuYWdlciB9IGZyb20gXCIuL2NyZWF0ZUxpc3RpbmcvZm9ybVN0YXRlTWFuYWdlclwiXG5pbXBvcnQgJy4vY3JlYXRlTGlzdGluZy9tZWRpYVVwbG9hZC8nXG5cblxuY29uc3Qgc2VjdGlvbkRpc3BsYXlNYW5hZ2VyID0gbmV3IFNlY3Rpb25EaXNwbGF5TWFuYWdlcigpXG5cbmNvbnN0IGdvYWxTZWN0aW9uTWFuZ2VyID0gbmV3IEdvYWxTZWN0aW9uU3RhdGVNYW5hZ2VyKClcbmNvbnN0IHBhcmFtZXRlcnNTZWN0aW9uTWFuYWdlciA9IG5ldyBQYXJhbWV0ZXJzU2VjdGlvbk1hbmFnZXIoKVxuY29uc3QgcHJvcGVydHlWYWx1YXRpb25TZWN0aW9uTWFuYWdlciA9IG5ldyBQcm9wZXJ0eVZhbHVhdGlvblNlY3Rpb25NYW5hZ2VyKClcbmNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbk1hbmFnZXIgPSBuZXcgRGVzY3JpcHRpb25TZWN0aW9uTWFuYWdlcigpXG5cbmdvYWxTZWN0aW9uTWFuZ2VyLm9uUHJvcGVydHlUeXBlQ2FyZENsaWNrKCgpID0+IHtcbiAgICBzZWN0aW9uRGlzcGxheU1hbmFnZXIuc2hvd1NlY3Rpb24oXCJhZGRyZXNzXCIpXG59KVxuXG5wYXJhbWV0ZXJzU2VjdGlvbk1hbmFnZXIub25SZXF1aXJlZElzRmlsbGVkKCgpID0+IHtcbiAgICBzZWN0aW9uRGlzcGxheU1hbmFnZXIuc2hvd1NlY3Rpb24oJ21lZGlhJylcbiAgICBzZWN0aW9uRGlzcGxheU1hbmFnZXIuc2hvd1NlY3Rpb24oJ3ZpZGVvJylcbn0pXG5cbnByb3BlcnR5VmFsdWF0aW9uU2VjdGlvbk1hbmFnZXIub25SZXF1aXJlZElzRmlsbGVkKCgpID0+IHtcbiAgICBzZWN0aW9uRGlzcGxheU1hbmFnZXIuc2hvd1NlY3Rpb24oJ2Rlc2NyaXB0aW9uJylcbn0pXG5cbmRlc2NyaXB0aW9uU2VjdGlvbk1hbmFnZXIub25NaW5pbXVtQ2hhcmFjdGVyc0ZpbGxlZCgoKSA9PiB7XG4gICAgc2VjdGlvbkRpc3BsYXlNYW5hZ2VyLnNob3dTZWN0aW9uKCdjb250YWN0cycpXG59KVxuXG5jb25zdCBhdXRvU3VnZ2VzdGlvbiA9IGluaXRBZGRyZXNzU3VnZ2VzdGlvbklucHV0KCk7XG5cbmxldCBpc0luUmV2ZXJzZUdlb1Byb2Nlc3MgPSBmYWxzZVxuXG5cbmNvbnN0IG1hcCA9IGluaXRNYXAoYXN5bmMgKGUsIHNldE1hcE1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGUubGF0bG5nO1xuXG4gICAgaWYgKGlzSW5SZXZlcnNlR2VvUHJvY2Vzcykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpc0luUmV2ZXJzZUdlb1Byb2Nlc3MgPSB0cnVlXG4gICAgYXV0b1N1Z2dlc3Rpb24uZGlzYWJsZUlucHV0KClcbiAgICBjb25zdCByZXZlcnNlR2VvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChSRVZFUlNFX0dFT19VUkwgKyBgP2xhdD0ke2xhdH0mbG9uPSR7bG5nfWApXG4gICAgY29uc3QgcmV2ZXJzZUdlb1Jlc3VsdCA9IGF3YWl0IHJldmVyc2VHZW9SZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXZlcnNlR2VvUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldE1hcE1hcmtlcigpXG4gICAgYXV0b1N1Z2dlc3Rpb24uc2V0SW5wdXRWYWx1ZShyZXZlcnNlR2VvUmVzdWx0WydkaXNwbGF5X25hbWUnXSlcbiAgICBhdXRvU3VnZ2VzdGlvbi5lbmFibGVJbnB1dCgpXG4gICAgaXNJblJldmVyc2VHZW9Qcm9jZXNzID0gZmFsc2Vcbn0pXG5cblxuYXV0b1N1Z2dlc3Rpb24ub25TdWdnZXN0aW9uU2VsZWN0ZWQoYXN5bmMgKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBsZXQgem9vbSA9IDEzO1xuXG4gICAgY29uc3QgcGxhY2VSYW5rID0gc3VnZ2VzdGlvblsncGxhY2VfcmFuayddXG4gICAgaWYgKHBsYWNlUmFuayA+IDI1KSB7XG4gICAgICAgIHpvb20gPSAxOVxuICAgIH1cblxuXG4gICAgbWFwLnNldE1hcFZpZXcoc3VnZ2VzdGlvbi5sYXQsIHN1Z2dlc3Rpb24ubG9uLCB6b29tKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcCgpIHtcbiAgICByZXR1cm4gbWFwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBZGRyZXNzQ29udGludWVCdG5DbGlja2VkKCkge1xuICAgIHNlY3Rpb25EaXNwbGF5TWFuYWdlci5zaG93U2VjdGlvbigncGFyYW1ldGVycycpXG59XG5cbmV4cG9ydCB7IHNlY3Rpb25EaXNwbGF5TWFuYWdlciB9XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuLy8gdGltZW91dCBiZWNhdXNlIHdlYnBhY2sgY291bGQgbm90IHNldCBwYWdlTW9kdWxlIGluIHRpbWVcbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdwYWdlTW9kdWxlTG9hZGVkJykpXG59LCA1MCkiLCJleHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5leHBvcnQgY29uc3QgR0VPREVDT0RFX1VSTCA9IFNFUlZFUl9VUkwgKyAnL21hcC9nZW9kZWNvZGUnXG5leHBvcnQgY29uc3QgUkVWRVJTRV9HRU9fVVJMID0gU0VSVkVSX1VSTCArICcvbWFwL3JldmVyc2VHZW8nXG5cbmV4cG9ydCBjb25zdCBVUExPQURfTUVESUFfVVJMID0gU0VSVkVSX1VSTCArICcvdXBsb2FkL25ld0xpc3RpbmdNZWRpYSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=