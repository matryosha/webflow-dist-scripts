"use strict";
var Favia;
(self["webpackChunkfavia_client"] = self["webpackChunkfavia_client"] || []).push([[434],{

/***/ 381:
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
}`, "",{"version":3,"sources":["webpack://./src/common/pages/addressSuggestionInput/addressSuggestionInput.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;;IAEV,aAAa;;IAEb,SAAS;;IAET,wBAAwB;IACxB,8CAA8C;IAC9C,sBAAsB;;IAEtB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;;IAEhB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["#suggest-container {\n    position: absolute;\n    padding-block: 1rem;\n    padding-inline: 0.5rem;\n    overflow-y: auto;\n    z-index: 2;\n\n    display: none;\n\n    top: 115%;\n\n    border-radius: 0.9375rem;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\n    background-color: #fff;\n\n    width: 100%;\n    max-height: 10rem;\n}\n\n#suggest-container li {\n    cursor: pointer;\n\n    padding-block: 0.5rem;\n    padding-inline: 0.5rem;\n    list-style: none;\n\n    border-radius: 5px;\n}\n\n#suggest-container li:hover {\n    background-color: #f9f9f9;\n}"],"sourceRoot":""}]);
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

/***/ 609:
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

/***/ 216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ initAddressSuggestionInput)
});

// EXTERNAL MODULE: ./src/serverEndpoints.js
var serverEndpoints = __webpack_require__(264);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(555);
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
var insertStyleElement = __webpack_require__(609);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/common/pages/addressSuggestionInput/addressSuggestionInput.css
var addressSuggestionInput = __webpack_require__(381);
;// CONCATENATED MODULE: ./src/common/pages/addressSuggestionInput/addressSuggestionInput.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(addressSuggestionInput/* default */.Z, options);




       /* harmony default export */ const addressSuggestionInput_addressSuggestionInput = (addressSuggestionInput/* default */.Z && addressSuggestionInput/* default */.Z.locals ? addressSuggestionInput/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/common/pages/addressSuggestionInput/addressSuggestionInput.js





function initAddressSuggestionInput(opts) {
    const ac = new AddressAutoComplete()
    ac.init(document.getElementById('address-input'), opts || {})
    return ac
}

class AddressAutoComplete {
    inputEl = null;
    suggestContainerEl = null;
    suggestItemNode = null;
    #debounceKey = ''
    #suggestionSelectedCallback = undefined

    // Used for all listing to increase chances of getting cities and not building etc
    // https://nominatim.org/release-docs/latest/api/Search/#result-restriction &featureType=settlement
    #tryGetSettlements = false


    init(inputEl, {tryGetSettlements = false}) {
        this.inputEl = inputEl


        const suggestContainerEl = document.createElement('div')
        suggestContainerEl.id = 'suggest-container'
        this.inputEl.insertAdjacentElement("afterend", suggestContainerEl)
        this.suggestContainerEl = suggestContainerEl

        const suggestItemNode = document.createElement('li')
        suggestItemNode.className = 'item-wrapper'
        this.suggestItemNode = suggestItemNode


        // todo fix when fetching but new debounce call
        const debouncedHandler = (0,utils/* debounce */.D)(async (...args) => {
            this.#debounceKey = Date.now()
            await this.handleDebouncedInput(...args)
        }, 500)
        this.inputEl.addEventListener('input', (ev) => debouncedHandler(ev))

        if (tryGetSettlements === true) {
            this.#tryGetSettlements = true
        }
    }

    async handleDebouncedInput(ev) {
        if (this.inputEl.value.trim() === '') {
            this.hideSuggestContainer()
            return
        }

        const capturedKey = this.#debounceKey

        console.log(ev)
        console.log(this)

        let fetchUrl = serverEndpoints/* GEODECODE_URL */.J7 + '?search=' + this.inputEl.value
        if (this.#tryGetSettlements) {
            fetchUrl += '&searchForAllListings'
        }

        const result = await (await fetch(fetchUrl)).json()

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

/***/ }),

/***/ 576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var common_pages_addressSuggestionInput_addressSuggestionInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _allListings_listingFetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(743);





const addressSuggestionInput = (0,common_pages_addressSuggestionInput_addressSuggestionInput__WEBPACK_IMPORTED_MODULE_1__/* .initAddressSuggestionInput */ .q)({tryGetSettlements: true})
const listingFetcher = new _allListings_listingFetcher__WEBPACK_IMPORTED_MODULE_2__/* .ListingFetcher */ .h()

const recentListings = await listingFetcher.getRecentListings()

preparePageForAplineJs()

function preparePageForAplineJs() {
    const bodyEl = document.body
    const listingItemsContainerEl = document.querySelector('.listings-items')
    const existingItemEl = listingItemsContainerEl.querySelector('.item-block')
    addAlpineDataToExistingItemEl(existingItemEl)
    listingItemsContainerEl.innerHTML = ''

    const listingItemTemplateEl = document.createElement('template')
    listingItemTemplateEl.id = 'listing-item-template'
    listingItemTemplateEl.innerHTML = existingItemEl.outerHTML
    listingItemTemplateEl.setAttribute('x-for', '(listing, index) in displayedListings')

    listingItemsContainerEl.appendChild(listingItemTemplateEl)

    alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.data('listingsRoot', () => ({
        displayedListings: [],

        listingItem: {
            name() {
                return listing.details.parameters.flatType
            },
        },

        getItemName(index) {
            const item = this.displayedListings[index]

            return `${item.details.parameters.flatType}|${item.city}|${item.neighbourhood}`
        },

        testText: 'aoaoa'
    }))

    bodyEl.setAttribute('x-data', 'listingsRoot')
}

function addAlpineDataToExistingItemEl(el) {
    const nameHeadingEl = el.querySelector('h2')
    const priceTextEl = el.querySelector('.item-price')
    const itemDescriptionTextEl = el.querySelector('.item-description')

    nameHeadingEl.setAttribute('x-text', 'getItemName(index)')
    priceTextEl.setAttribute('x-text', 'listing.details.propertyValuation.pricePerMonth')
    itemDescriptionTextEl.setAttribute('x-text', 'listing.details.description')
}

alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.start()

const rootData = alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.$data(document.body)

recentListings.result.forEach(l => rootData.displayedListings.push(l))
console.log(rootData)
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ ListingFetcher)
/* harmony export */ });
/* harmony import */ var serverEndpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);


class ListingFetcher {
    async getRecentListings() {
        const response = await fetch(serverEndpoints__WEBPACK_IMPORTED_MODULE_0__/* .GET_RECENT_LISTING_URL */ ._F)

        return response.json()
    }

}

/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J7: () => (/* binding */ GEODECODE_URL),
/* harmony export */   LB: () => (/* binding */ SERVER_URL),
/* harmony export */   _F: () => (/* binding */ GET_RECENT_LISTING_URL),
/* harmony export */   _r: () => (/* binding */ CREATE_LISTING_URL),
/* harmony export */   il: () => (/* binding */ REVERSE_GEO_URL),
/* harmony export */   nq: () => (/* binding */ UPLOAD_MEDIA_URL)
/* harmony export */ });
const SERVER_URL = 'http://localhost:5000'
const GEODECODE_URL = SERVER_URL + '/map/geodecode'
const REVERSE_GEO_URL = SERVER_URL + '/map/reverseGeo'

const UPLOAD_MEDIA_URL = SERVER_URL + '/upload/newListingMedia'

const CREATE_LISTING_URL = SERVER_URL + '/create-listing'

const GET_RECENT_LISTING_URL = SERVER_URL + '/listings/recent'

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ debounce),
/* harmony export */   b: () => (/* binding */ throwIfUndefinedOrNullWithKeys)
/* harmony export */ });
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [183], () => (__webpack_exec__(576)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ (Favia = typeof Favia === "undefined" ? {} : Favia).pageModule = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyxHQUFHLFVBQVUsR0FBRyxtQkFBbUI7QUFDMUYsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBTTs7QUFFTixpQkFBaUIseURBQU07O0FBRXZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5RHVEOztBQUVoRDtBQUNQO0FBQ0EscUNBQXFDLDZFQUFzQjs7QUFFM0Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQ1JBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vcGFnZXMvYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dC9hZGRyZXNzU3VnZ2VzdGlvbklucHV0LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wYWdlcy9hZGRyZXNzU3VnZ2VzdGlvbklucHV0L2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuY3NzP2Y4OTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wYWdlcy9hZGRyZXNzU3VnZ2VzdGlvbklucHV0L2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FsbExpc3RpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hbGxMaXN0aW5ncy9saXN0aW5nRmV0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyRW5kcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3N1Z2dlc3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMjtcblxuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICB0b3A6IDExNSU7XG5cbiAgICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTByZW07XG59XG5cbiNzdWdnZXN0LWNvbnRhaW5lciBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgcGFkZGluZy1ibG9jazogMC41cmVtO1xuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3N1Z2dlc3QtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1vbi9wYWdlcy9hZGRyZXNzU3VnZ2VzdGlvbklucHV0L2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7O0lBRVYsYUFBYTs7SUFFYixTQUFTOztJQUVULHdCQUF3QjtJQUN4Qiw4Q0FBOEM7SUFDOUMsc0JBQXNCOztJQUV0QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNzdWdnZXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgdG9wOiAxMTUlO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAwLjkzNzVyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuI3N1Z2dlc3QtY29udGFpbmVyIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3N1Z2dlc3QtY29udGFpbmVyIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRyZXNzU3VnZ2VzdGlvbklucHV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBHRU9ERUNPREVfVVJMIH0gZnJvbSBcInNlcnZlckVuZHBvaW50c1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwidXRpbHNcIjtcbmltcG9ydCAnLi9hZGRyZXNzU3VnZ2VzdGlvbklucHV0LmNzcydcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFkZHJlc3NTdWdnZXN0aW9uSW5wdXQob3B0cykge1xuICAgIGNvbnN0IGFjID0gbmV3IEFkZHJlc3NBdXRvQ29tcGxldGUoKVxuICAgIGFjLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MtaW5wdXQnKSwgb3B0cyB8fCB7fSlcbiAgICByZXR1cm4gYWNcbn1cblxuY2xhc3MgQWRkcmVzc0F1dG9Db21wbGV0ZSB7XG4gICAgaW5wdXRFbCA9IG51bGw7XG4gICAgc3VnZ2VzdENvbnRhaW5lckVsID0gbnVsbDtcbiAgICBzdWdnZXN0SXRlbU5vZGUgPSBudWxsO1xuICAgICNkZWJvdW5jZUtleSA9ICcnXG4gICAgI3N1Z2dlc3Rpb25TZWxlY3RlZENhbGxiYWNrID0gdW5kZWZpbmVkXG5cbiAgICAvLyBVc2VkIGZvciBhbGwgbGlzdGluZyB0byBpbmNyZWFzZSBjaGFuY2VzIG9mIGdldHRpbmcgY2l0aWVzIGFuZCBub3QgYnVpbGRpbmcgZXRjXG4gICAgLy8gaHR0cHM6Ly9ub21pbmF0aW0ub3JnL3JlbGVhc2UtZG9jcy9sYXRlc3QvYXBpL1NlYXJjaC8jcmVzdWx0LXJlc3RyaWN0aW9uICZmZWF0dXJlVHlwZT1zZXR0bGVtZW50XG4gICAgI3RyeUdldFNldHRsZW1lbnRzID0gZmFsc2VcblxuXG4gICAgaW5pdChpbnB1dEVsLCB7dHJ5R2V0U2V0dGxlbWVudHMgPSBmYWxzZX0pIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsID0gaW5wdXRFbFxuXG5cbiAgICAgICAgY29uc3Qgc3VnZ2VzdENvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3VnZ2VzdENvbnRhaW5lckVsLmlkID0gJ3N1Z2dlc3QtY29udGFpbmVyJ1xuICAgICAgICB0aGlzLmlucHV0RWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgc3VnZ2VzdENvbnRhaW5lckVsKVxuICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbCA9IHN1Z2dlc3RDb250YWluZXJFbFxuXG4gICAgICAgIGNvbnN0IHN1Z2dlc3RJdGVtTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgc3VnZ2VzdEl0ZW1Ob2RlLmNsYXNzTmFtZSA9ICdpdGVtLXdyYXBwZXInXG4gICAgICAgIHRoaXMuc3VnZ2VzdEl0ZW1Ob2RlID0gc3VnZ2VzdEl0ZW1Ob2RlXG5cblxuICAgICAgICAvLyB0b2RvIGZpeCB3aGVuIGZldGNoaW5nIGJ1dCBuZXcgZGVib3VuY2UgY2FsbFxuICAgICAgICBjb25zdCBkZWJvdW5jZWRIYW5kbGVyID0gZGVib3VuY2UoYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2RlYm91bmNlS2V5ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVEZWJvdW5jZWRJbnB1dCguLi5hcmdzKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHRoaXMuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldikgPT4gZGVib3VuY2VkSGFuZGxlcihldikpXG5cbiAgICAgICAgaWYgKHRyeUdldFNldHRsZW1lbnRzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLiN0cnlHZXRTZXR0bGVtZW50cyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZURlYm91bmNlZElucHV0KGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0RWwudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdENvbnRhaW5lcigpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkS2V5ID0gdGhpcy4jZGVib3VuY2VLZXlcblxuICAgICAgICBjb25zb2xlLmxvZyhldilcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcblxuICAgICAgICBsZXQgZmV0Y2hVcmwgPSBHRU9ERUNPREVfVVJMICsgJz9zZWFyY2g9JyArIHRoaXMuaW5wdXRFbC52YWx1ZVxuICAgICAgICBpZiAodGhpcy4jdHJ5R2V0U2V0dGxlbWVudHMpIHtcbiAgICAgICAgICAgIGZldGNoVXJsICs9ICcmc2VhcmNoRm9yQWxsTGlzdGluZ3MnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoYXdhaXQgZmV0Y2goZmV0Y2hVcmwpKS5qc29uKClcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdENvbnRhaW5lcigpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNkZWJvdW5jZUtleSAhPT0gY2FwdHVyZWRLZXkpIHJldHVybjtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0ZWRDb250YWluZXIocmVzdWx0KVxuICAgICAgICB0aGlzLnNob3dTdWdnZXN0Q29udGFpbmVyKClcblxuICAgIH1cblxuICAgIHVwZGF0ZVN1Z2dlc3RlZENvbnRhaW5lcihpdGVtcykge1xuICAgICAgICB0aGlzLnN1Z2dlc3RDb250YWluZXJFbC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtRWwgPSB0aGlzLnN1Z2dlc3RJdGVtTm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgIGxpc3RJdGVtRWwudGV4dENvbnRlbnQgPSBpdGVtWydkaXNwbGF5X25hbWUnXVxuICAgICAgICAgICAgbGlzdEl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKGl0ZW0pKVxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQobGlzdEl0ZW1FbClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUlucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB9XG5cbiAgICBlbmFibGVJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBvblN1Z2dlc3Rpb25TZWxlY3RlZChjYikge1xuICAgICAgICB0aGlzLiNzdWdnZXN0aW9uU2VsZWN0ZWRDYWxsYmFjayA9IGNiXG4gICAgfVxuXG4gICAgc2V0SW5wdXRWYWx1ZShzdHIpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gc3RyIFxuICAgIH1cblxuICAgIGhhbmRsZVN1Z2dlc3Rpb25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3RDb250YWluZXIoKVxuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoZGF0YVsnZGlzcGxheV9uYW1lJ10pXG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgb24gJywgZGF0YSlcbiAgICAgICAgdGhpcy4jc3VnZ2VzdGlvblNlbGVjdGVkQ2FsbGJhY2soZGF0YSlcbiAgICB9XG5cbiAgICBzaG93U3VnZ2VzdENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zdWdnZXN0Q29udGFpbmVyRWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG5cbiAgICBoaWRlU3VnZ2VzdENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zdWdnZXN0Q29udGFpbmVyRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn0iLCJpbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuXG5pbXBvcnQge2luaXRBZGRyZXNzU3VnZ2VzdGlvbklucHV0fSBmcm9tIFwiY29tbW9uL3BhZ2VzL2FkZHJlc3NTdWdnZXN0aW9uSW5wdXQvYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dFwiO1xuaW1wb3J0IHtMaXN0aW5nRmV0Y2hlcn0gZnJvbSBcIi4vYWxsTGlzdGluZ3MvbGlzdGluZ0ZldGNoZXJcIjtcblxuY29uc3QgYWRkcmVzc1N1Z2dlc3Rpb25JbnB1dCA9IGluaXRBZGRyZXNzU3VnZ2VzdGlvbklucHV0KHt0cnlHZXRTZXR0bGVtZW50czogdHJ1ZX0pXG5jb25zdCBsaXN0aW5nRmV0Y2hlciA9IG5ldyBMaXN0aW5nRmV0Y2hlcigpXG5cbmNvbnN0IHJlY2VudExpc3RpbmdzID0gYXdhaXQgbGlzdGluZ0ZldGNoZXIuZ2V0UmVjZW50TGlzdGluZ3MoKVxuXG5wcmVwYXJlUGFnZUZvckFwbGluZUpzKClcblxuZnVuY3Rpb24gcHJlcGFyZVBhZ2VGb3JBcGxpbmVKcygpIHtcbiAgICBjb25zdCBib2R5RWwgPSBkb2N1bWVudC5ib2R5XG4gICAgY29uc3QgbGlzdGluZ0l0ZW1zQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdGluZ3MtaXRlbXMnKVxuICAgIGNvbnN0IGV4aXN0aW5nSXRlbUVsID0gbGlzdGluZ0l0ZW1zQ29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignLml0ZW0tYmxvY2snKVxuICAgIGFkZEFscGluZURhdGFUb0V4aXN0aW5nSXRlbUVsKGV4aXN0aW5nSXRlbUVsKVxuICAgIGxpc3RpbmdJdGVtc0NvbnRhaW5lckVsLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBsaXN0aW5nSXRlbVRlbXBsYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpXG4gICAgbGlzdGluZ0l0ZW1UZW1wbGF0ZUVsLmlkID0gJ2xpc3RpbmctaXRlbS10ZW1wbGF0ZSdcbiAgICBsaXN0aW5nSXRlbVRlbXBsYXRlRWwuaW5uZXJIVE1MID0gZXhpc3RpbmdJdGVtRWwub3V0ZXJIVE1MXG4gICAgbGlzdGluZ0l0ZW1UZW1wbGF0ZUVsLnNldEF0dHJpYnV0ZSgneC1mb3InLCAnKGxpc3RpbmcsIGluZGV4KSBpbiBkaXNwbGF5ZWRMaXN0aW5ncycpXG5cbiAgICBsaXN0aW5nSXRlbXNDb250YWluZXJFbC5hcHBlbmRDaGlsZChsaXN0aW5nSXRlbVRlbXBsYXRlRWwpXG5cbiAgICBBbHBpbmUuZGF0YSgnbGlzdGluZ3NSb290JywgKCkgPT4gKHtcbiAgICAgICAgZGlzcGxheWVkTGlzdGluZ3M6IFtdLFxuXG4gICAgICAgIGxpc3RpbmdJdGVtOiB7XG4gICAgICAgICAgICBuYW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0aW5nLmRldGFpbHMucGFyYW1ldGVycy5mbGF0VHlwZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRJdGVtTmFtZShpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGlzcGxheWVkTGlzdGluZ3NbaW5kZXhdXG5cbiAgICAgICAgICAgIHJldHVybiBgJHtpdGVtLmRldGFpbHMucGFyYW1ldGVycy5mbGF0VHlwZX18JHtpdGVtLmNpdHl9fCR7aXRlbS5uZWlnaGJvdXJob29kfWBcbiAgICAgICAgfSxcblxuICAgICAgICB0ZXN0VGV4dDogJ2FvYW9hJ1xuICAgIH0pKVxuXG4gICAgYm9keUVsLnNldEF0dHJpYnV0ZSgneC1kYXRhJywgJ2xpc3RpbmdzUm9vdCcpXG59XG5cbmZ1bmN0aW9uIGFkZEFscGluZURhdGFUb0V4aXN0aW5nSXRlbUVsKGVsKSB7XG4gICAgY29uc3QgbmFtZUhlYWRpbmdFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2gyJylcbiAgICBjb25zdCBwcmljZVRleHRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXByaWNlJylcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb25UZXh0RWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kZXNjcmlwdGlvbicpXG5cbiAgICBuYW1lSGVhZGluZ0VsLnNldEF0dHJpYnV0ZSgneC10ZXh0JywgJ2dldEl0ZW1OYW1lKGluZGV4KScpXG4gICAgcHJpY2VUZXh0RWwuc2V0QXR0cmlidXRlKCd4LXRleHQnLCAnbGlzdGluZy5kZXRhaWxzLnByb3BlcnR5VmFsdWF0aW9uLnByaWNlUGVyTW9udGgnKVxuICAgIGl0ZW1EZXNjcmlwdGlvblRleHRFbC5zZXRBdHRyaWJ1dGUoJ3gtdGV4dCcsICdsaXN0aW5nLmRldGFpbHMuZGVzY3JpcHRpb24nKVxufVxuXG5BbHBpbmUuc3RhcnQoKVxuXG5jb25zdCByb290RGF0YSA9IEFscGluZS4kZGF0YShkb2N1bWVudC5ib2R5KVxuXG5yZWNlbnRMaXN0aW5ncy5yZXN1bHQuZm9yRWFjaChsID0+IHJvb3REYXRhLmRpc3BsYXllZExpc3RpbmdzLnB1c2gobCkpXG5jb25zb2xlLmxvZyhyb290RGF0YSkiLCJpbXBvcnQge0dFVF9SRUNFTlRfTElTVElOR19VUkx9IGZyb20gXCJzZXJ2ZXJFbmRwb2ludHNcIjtcblxuZXhwb3J0IGNsYXNzIExpc3RpbmdGZXRjaGVyIHtcbiAgICBhc3luYyBnZXRSZWNlbnRMaXN0aW5ncygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChHRVRfUkVDRU5UX0xJU1RJTkdfVVJMKVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5leHBvcnQgY29uc3QgR0VPREVDT0RFX1VSTCA9IFNFUlZFUl9VUkwgKyAnL21hcC9nZW9kZWNvZGUnXG5leHBvcnQgY29uc3QgUkVWRVJTRV9HRU9fVVJMID0gU0VSVkVSX1VSTCArICcvbWFwL3JldmVyc2VHZW8nXG5cbmV4cG9ydCBjb25zdCBVUExPQURfTUVESUFfVVJMID0gU0VSVkVSX1VSTCArICcvdXBsb2FkL25ld0xpc3RpbmdNZWRpYSdcblxuZXhwb3J0IGNvbnN0IENSRUFURV9MSVNUSU5HX1VSTCA9IFNFUlZFUl9VUkwgKyAnL2NyZWF0ZS1saXN0aW5nJ1xuXG5leHBvcnQgY29uc3QgR0VUX1JFQ0VOVF9MSVNUSU5HX1VSTCA9IFNFUlZFUl9VUkwgKyAnL2xpc3RpbmdzL3JlY2VudCciLCJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHdhaXQpIHtcbiAgICBsZXQgdGltZW91dElkID0gbnVsbDtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB0aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSwgd2FpdCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93SWZVbmRlZmluZWRPck51bGxXaXRoS2V5cyhvYmopIHtcbiAgICBjb25zdCBlcnJvcnNLZXlzID0gW11cblxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgICAgY29uc3QgdiA9IG9ialtrXVxuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpXG4gICAgICAgICAgICBlcnJvcnNLZXlzLnB1c2goaylcbiAgICB9KVxuXG4gICAgaWYgKGVycm9yc0tleXMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignU29tZSB2YWx1ZXMgd2VyZSBudWxsIG9yIHVuZGVmaW5lZCcpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGtleXM6ICcsIGVycm9yc0tleXMpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==