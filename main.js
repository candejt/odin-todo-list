/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! file.svg */ \"./src/file.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! project.svg */ \"./src/project.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! trash.svg */ \"./src/trash.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box; \n}\nbody{\n    background-color: #FAF7F2;\n    color: #4B3621;\n    display: flex;\n    height: 100vh;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n}\n#sidebar{\n    background-color:#F0EADE;\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    padding: 20px;\n    border-right: 1px solid rgba(75, 54, 33, 0.2);\n}\n.main-view{\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    padding:20px;\n}\nh1,h2,h3,h4{\n    margin-top: 0;\n    color:#7D5A44;\n}\n#content{\n    flex: 1;\n    overflow-y: auto;\n    padding: 20px;\n}\nbutton{\n    background-color: #B5997A;\n    color: #4B3621;\n    border: 1px solid rgba(75, 54, 33, 0.3);\n    padding: 8px 16px;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;\n    transition: background-color 0.2s, color 0.2s;\n}\nbutton:hover{\n    background-color: #A08569;\n    color: #FAF7F2;\n}\n#form-container{\n    border-top: 1px solid #ddd;\n    padding: 20px;\n    padding-bottom: 0;\n}\n#sidebar h2{\n    margin-top: 30px;\n}\n.project-header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n#project-list{\n    list-style: none;\n    padding: 0;\n    padding-top: 30px;\n    flex-grow: 1;\n    overflow-y: auto;\n    margin-top: 0;\n}\n.preview-tasks{\n    display: flex;\n    flex-direction: column; \n    gap: 8px;\n    margin-left: 25px;\n    list-style: none;\n    padding: 0;\n    margin-top: 10px;\n}\n.preview-tasks li {\n    display: flex;          \n    flex-direction: row;    \n    align-items: center;    ;              \n    font-size: 14px;\n    list-style: none;\n}\n.preview-tasks li::before {\n    content: \"\";\n    width: 14px;\n    height: 14px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    flex-shrink: 0;         \n    display: inline-block;\n    margin-right: 10px;\n    \n}\n#project-list li {\n    display: block;         \n    margin-bottom: 15px;            \n}\n#project-list li span {\n    cursor: pointer;               \n    flex-grow: 1;                  \n}\n#project-list li button {\n    margin-left: 10px;             \n    padding: 2px 8px;              \n}\n.project-name-text{\n    padding: 8px;\n    padding-left: 0;\n    border-radius: 4px;\n    transition: background 0.2s;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n    flex-grow: 1;\n}\n.project-name-text:hover{\n    background-color: #FAF7F2;\n}\n.project-name-text::before {\n    content: \"\"; \n    width: 15px;\n    height: 20px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    display: inline-block;\n}\n#new-project-name{\n    display: flex;\n    padding:8px;\n    border: 1px solid #ddd;\n    text-align: center;\n    margin-bottom: 15px;\n}\n#content h2{\n    background-color: #FAF7F2;\n    color: #7D5A44;\n    padding: 15px;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-shadow: 0 2px 4px rgba(75, 54, 33, 0.3);\n}\n.todo-item{\n    border:1px solid #eee;\n    padding: 20px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n}\n.todo-edit-view{\n    display: none;\n}\n.todo-item-form, .todo-edit-view {\n    background-color: white;\n    border-radius: 8px;\n    margin-bottom: 15px;\n    box-shadow: 0 4px 6px rgba(75, 54, 33, 0.15);\n    padding: 20px;\n    border: 1px solid rgba(75, 54, 33, 0.2);\n}\n.todo-item-form.editing .todo-item{\n    display: none;\n}\n.todo-item-form.editing .todo-edit-view input, select, textarea{\n    margin-bottom: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.todo-item-form.editing .todo-edit-view{\n    display: block;\n}\n.todo-item .todo-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid rgba(75, 54, 33, 0.2);\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n}\n.edit-btn, .delete-task-btn {\n    background-color: #FAF7F2;\n    color: #7D5A44;\n}\n.delete-project-btn{\n    width: 15px;         \n    height: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); \n    background-repeat: no-repeat;\n    background-position: center;    \n    opacity: 0.5;\n    margin-right: 5px;\n}\n.button-group {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.edit-btn:hover, .delete-task-btn:hover {\n    background-color:#B5997A;\n    color: #FAF7F2;\n}\n.delete-project-btn:hover{\n    background-color: transparent;\n    transform: scale(1.3);\n}\ninput, select, textarea {\n    background-color:#FAF7F2;\n    border: 1px solid rgba(75, 54, 33, 0.3);\n    color: #4B3621;\n    padding: 8px;\n    border-radius: 4px;\n    width: 100%;\n    box-sizing: border-box; \n}\ntextarea {\n    resize: vertical;\n}\n.form-footer{\n    display: flex;\n    justify-content: flex-end; \n    width: 100%;        \n    gap: 8px;       \n}\n.add-task-btn{\n    margin-top: 5px;\n    width: fit-content;\n    display: block;\n}\n#todo-form input, \n#todo-form select, \n#todo-form textarea {\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n    color: #4B3621;     \n    background-color: #FAF7F2;\n    border: 1px solid #B5997A;\n    padding: 8px;\n    border-radius: 4px;\n    width: 100%;\n    margin-bottom: 10px;\n}\n#todo-form input::placeholder,\n#todo-form textarea::placeholder,\n#todo-form input[type=\"date\"],\n#todo-form select  {\n    color: rgba(75, 54, 33, 0.5); \n}\n#todo-form{\n    display: flex;\n    flex-direction: column;\n}\n.form-row {\n    display: flex;\n    gap: 10px;         \n    align-items: center;\n    width: 100%;\n    margin-bottom: 10px;\n}\n.form-row #title {\n    flex: 3;      \n}\n.form-row input[type=\"date\"],\n.form-row select {\n    flex: 1;            \n}\nlabel{\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n.sub-task-list {\n    list-style: none;\n    padding: 0;      \n    margin-top: 20px; \n    margin-bottom: 20px;\n}\n.sub-task-list li {\n    display: flex;       \n    align-items: center; \n    gap: 12px;           \n    margin-bottom: 8px; \n}\n.sub-task-list li input[type=\"checkbox\"] {\n    width: 16px;\n    height: 16px;\n    margin: 0;    \n    cursor: pointer;\n}\n.sub-task-list li span {\n    font-size: 14px;\n    color: #4B3621;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProject: () => (/* binding */ renderProject),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar)\n/* harmony export */ });\n\nfunction renderProject(project){\n    const content=document.getElementById('content');\n    if(!content || !project) return;\n\n    content.innerHTML='';\n\n    const projectTitle=document.createElement('h2');\n    projectTitle.textContent=project.name;\n    content.appendChild(projectTitle);\n\n    const todoContainer=document.createElement('div');\n    todoContainer.classList.add('todo-list');\n    content.appendChild(todoContainer);\n\n    project.todos.forEach(todo=>{\n        const todoForm = document.createElement('form');\n        todoForm.classList.add('todo-item-form');\n        todoForm.dataset.todoId = todo.id;\n\n        const todoDiv=document.createElement('div');\n        todoDiv.classList.add('todo-item');\n        todoDiv.innerHTML=`\n            <div class=\"todo-header\">\n                <h3>${todo.title}</h3>\n                <p>Date: ${todo.dueDate || 'No date'} | Priority: ${todo.priority || 'Normal'}</p>\n                <div class=\"button-group\">\n                    <button type=\"button\" class=\"edit-btn\">Edit</button>\n                    <button type=\"button\" class=\"delete-task-btn\" data-title=\"${todo.title}\">Delete</button>\n                </div>\n            </div>\n            <p class=\"todo-description\">${todo.description || ''}</p>\n        `;\n        const editView = document.createElement('div');\n        editView.classList.add('todo-edit-view');\n\n        editView.innerHTML = `\n            <input type=\"text\" name=\"edit-title\" value=\"${todo.title}\" required>\n            <input type=\"date\" name=\"edit-date\" value=\"${todo.dueDate}\">\n            <select name=\"edit-priority\">\n                <option ${todo.priority === 'Not defined' ? 'selected' : ''}>Not defined</option>\n                <option ${todo.priority === 'Low' ? 'selected' : ''}>Low</option>\n                <option ${todo.priority === 'Medium' ? 'selected' : ''}>Medium</option>\n                <option ${todo.priority === 'High' ? 'selected' : ''}>High</option>\n            </select>\n            <textarea name=\"edit-description\">${todo.description || ''}</textarea>\n            <ul class=\"sub-task-list edit-mode\">\n                ${todo.checklist.map((item, index) => `\n                    <li>\n                        <input type=\"checkbox\" ${item.done ? 'checked' : ''} data-index=\"${index}\" class=\"edit-check\">\n                        <input type=\"text\" value=\"${item.text}\" class=\"edit-check-text\" data-index=\"${index}\">\n                    </li>\n                `).join('')}\n            </ul>\n            <div class=\"form-footer\">\n                <button type=\"submit\" class=\"save-edit-btn\">Save</button>\n                <button type=\"button\" class=\"cancel-edit-btn\">Cancel</button>\n             </div>\n        `;\n        todoForm.appendChild(todoDiv);\n        todoForm.appendChild(editView);\n\n        if (todo.checklist.length>0){\n            const ul = document.createElement('ul');\n            ul.classList.add('sub-task-list');\n\n            todo.checklist.forEach(item => {\n                const li=document.createElement('li');\n                li.innerHTML=`\n                    <input type=\"checkbox\" ${item.done ? 'checked': ''}>\n                    <span>${item.text}</span>\n                `;\n                ul.appendChild(li);\n            });\n            todoDiv.appendChild(ul);\n        }\n\n        todoContainer.appendChild(todoForm);\n    });\n};\nfunction renderSidebar(library){\n    const projectContainer = document.getElementById('project-list');\n    projectContainer.innerHTML='';\n\n    library.getProjects().forEach(project => {\n        const li = document.createElement('li');\n        li.dataset.project = project.name;\n        li.style.cursor= \"pointer\";\n        li.innerHTML = `\n            <div class=\"project-header-container\">\n                <span class=\"project-name-text\">${project.name}</span>\n                <button class=\"delete-project-btn\" data-name=\"${project.name}\"></button>\n            </div>\n         `;        \n    \n        if (project.todos.length > 0){\n            const previewList = document.createElement('ul'); \n            previewList.classList.add('preview-tasks');\n            previewList.style.pointerEvents = 'none';\n\n            project.todos.forEach(todo => {\n                const todoItem = document.createElement('li');\n                todoItem.textContent=todo.title;\n                previewList.appendChild(todoItem);\n            });\n            li.appendChild(previewList);\n        };\n        projectContainer.appendChild(li);\n    });\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library.js */ \"./src/library.js\");\n\n\n\n\n\n//\nlet myLibrary = new _library_js__WEBPACK_IMPORTED_MODULE_4__.Library();\nlet currentProject;\n//\nconst form=document.getElementById('todo-form');\n\nform.addEventListener('submit', (e)=>{\n    e.preventDefault();\n\n    const title=document.getElementById('title').value;\n    const date=document.getElementById('dueDate').value;\n    const priority=document.getElementById('priority').value;\n    const description = document.getElementById('description').value;\n    const checklistData=document.getElementById('checklist-input').value;\n\n    const newTask=new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, date, priority, description);\n\n    if (checklistData.trim() !== \"\"){\n        const items = checklistData.split(',').map(item=>item.trim());\n        items.forEach (itemText => {\n            if (itemText !== \"\"){\n                newTask.addChecklistItem(itemText);\n            }\n        });\n    }\n    currentProject.addTodo(newTask);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n\n    form.reset();\n});\n//\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n\nconst projectList = document.getElementById('project-list');\n\nprojectList.addEventListener('click', (e) => {\n    const projectLi = e.target.closest('li[data-project]');\n    if (!projectLi) return;\n\n    const name = projectLi.dataset.project;\n    console.log(name);\n\n    if (e.target.classList.contains('delete-project-btn')){\n        myLibrary.removeProject(name);\n\n        if (currentProject.name === name){\n            currentProject=myLibrary.projects[0] || null;\n        }\n        saveData();\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n        return;\n    }\n    const projectFound = myLibrary.findProject(name);\n    if (projectFound){\n        currentProject=projectFound;\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n    }\n});\n//\nconst addProjectBtn=document.getElementById('add-project-btn');\nconst newProjectInput=document.getElementById('new-project-name');\n\naddProjectBtn.addEventListener('click',()=>{\n    const name=newProjectInput.value.trim();\n\n    if(name !== ''){\n        const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(name);\n        myLibrary.addProject(newProject);\n\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n\n        newProjectInput.value=\"\";\n    }\n    saveData()\n});\n//\ndocument.addEventListener('click', (e) => {\n    if(e.target.classList.contains('delete-task-btn')){\n        const deleteTitle=e.target.dataset.title;\n\n        currentProject.removeTodo(deleteTitle);\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n    }\n    saveData();\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n});\n//\nconst content = document.querySelector('#content');\ncontent.addEventListener('click', (e) => {\n    if (e.target.classList.contains('edit-btn')) {\n        const form = e.target.closest('.todo-item-form');\n        if (form) {\n            form.classList.add('editing');\n        \n            const todoId = form.dataset.todoId; \n            \n            console.log(\"ID recuperado con éxito:\", todoId);\n        }\n    }\n    if (e.target.classList.contains('cancel-edit-btn')) {\n        const form = e.target.closest('.todo-item-form');\n        form.classList.remove('editing');\n    }\n});\n//\ncontent.addEventListener('submit', (e) => {\n    if (e.target.classList.contains('todo-item-form')) {\n        e.preventDefault();\n        const form = e.target;\n        const todoId = form.dataset.todoId;\n\n        const newTitle = form.querySelector('[name=\"edit-title\"]').value;\n        const newDate = form.querySelector('[name=\"edit-date\"]').value;\n        const newPriority = form.querySelector('[name=\"edit-priority\"]').value;\n        const newDescription = form.querySelector('[name=\"edit-description\"]').value;\n\n        currentProject.updateTask(todoId, newTitle, newDate, newPriority, newDescription);\n\n        saveData();\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n    }\n});\n//\nfunction saveData(){\n    localStorage.setItem('myTodoLibrary', JSON.stringify(myLibrary.projects));\n}\n//\nconst savedData= JSON.parse(localStorage.getItem('myTodoLibrary'));\n\nif (savedData){\n    myLibrary.projects = savedData.map(projItem => {\n        const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(projItem.name);\n\n        projItem.todos.forEach(todoItem => {\n            const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(\n                todoItem.title,\n                todoItem.dueDate,\n                todoItem.priority,\n                todoItem.description,\n                todoItem.checklist\n            );\n            todo.id = todoItem.id\n            project.addTodo(todo);\n        });\n        return project;\n    });\n    currentProject=myLibrary.projects[0];\n}else{\n    const defaultProject=new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(\"Default\");\n\n    const defaultTask = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(\n        \"Hello! I'm an example\",\n        \"2026-12-31\",\n        \"Medium\",\n        \"Write something awesome\",\n        [\n            { text: \"Journaling\", done: false},\n            { text: \"Napping\", done: false},\n            { text: \"Eat ice cream\", done: false}\n        ]    \n    )\n    defaultProject.addTodo(defaultTask);\n    myLibrary.addProject(defaultProject);\n    currentProject=defaultProject;\n\n    saveData();\n}\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)(myLibrary);\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.renderProject)(currentProject);\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/library.js"
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Library: () => (/* binding */ Library)\n/* harmony export */ });\n\nclass Library{\n    constructor(){\n        this.projects=[]\n    }\n    addProject(project){\n        this.projects.push(project);\n    }\n    removeProject(projectName){\n        this.projects=this.projects.filter(p => p.name !== projectName);\n    }\n    getProjects(){\n        return this.projects;\n    }\n    findProject(name){\n        return this.projects.find(p => p.name===name);\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/library.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project{\n    constructor (name){\n        this.name=name;\n        this.todos=[];\n    }\n    addTodo(todoObject){\n        this.todos.push(todoObject);\n    }\n    removeTodo(todoTitle){\n        this.todos=this.todos.filter(todo=>todo.title !== todoTitle);\n    }\n    getTodos(){\n        return this.todos;\n    }\n    updateTask(id, newTitle, newDate, newPriority, newDescription){\n        const taskIndex = this.todos.findIndex(todo => todo.id === id);\n        if (taskIndex !== -1) {\n            this.todos[taskIndex].title = newTitle;\n            this.todos[taskIndex].dueDate = newDate;\n            this.todos[taskIndex].priority = newPriority;\n            this.todos[taskIndex].description = newDescription;\n        }\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n\nclass Todo{\n    constructor(title, dueDate, priority, description, checklist=[]){\n        this.id = Date.now().toString();\n        this.title=title;\n        this.dueDate=dueDate;\n        this.priority=priority;\n        this.description=description;\n        this.checklist=checklist;\n        this.completed=false;\n    }\n    addChecklistItem(text){\n        this.checklist.push({text:text, done:false});\n    }\n    toggleComplete(){\n        if (this.completed===true){\n            this.completed=false;\n        }else{\n            this.completed=true;\n        }\n        console.log(`Task \"${this.title}\" is now: ${this.completed ? 'Done' : 'Pending'}`);\n    }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?\n}");

/***/ },

/***/ "./src/file.svg"
/*!**********************!*\
  !*** ./src/file.svg ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"df80f6f7b5fd52da7590.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/file.svg?\n}");

/***/ },

/***/ "./src/project.svg"
/*!*************************!*\
  !*** ./src/project.svg ***!
  \*************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f470ba6ae00bc0611daa.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/project.svg?\n}");

/***/ },

/***/ "./src/trash.svg"
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"805b27beb063ccdb5631.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/trash.svg?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;