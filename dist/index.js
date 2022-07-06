"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #1f2937;\n    --primary-light: #f9fafb;\n    --accent-secondary: #e5e7eb;\n    --accent-main: #0ea5e9;\n    font-family: \"Roboto\", sans-serif;\n    font-size: clamp(1rem, calc(0.5rem + 0.5vw), 1.75rem);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: none;\n    color: var(--primary-dark);\n}\n\nbody {\n    background-color: var(--primary-light);\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nh4 {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\nheader {\n    cursor: default;\n    height: 2rem;\n    border-bottom: 2px solid var(--accent-secondary);\n    padding: 2rem 3rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter {\n    height: 2rem;\n    border-top: 2px solid var(--accent-secondary);\n    padding-top: 0.75rem;\n    text-align: center;\n}\n\n/* Body styling */\n#main {\n    display: grid;\n    grid-template-columns: .25fr 2fr;\n}\n\n#sidebar {\n    height: auto;\n    max-height: 820px;\n    width: 13rem;\n    padding: 2rem;\n    border-right: 2px solid var(--accent-secondary);\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2.5rem;\n}\n\n#navLists,\n#userLists,\n#listContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.25rem;\n}\n\n#content {\n    padding: 2rem 7rem;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.borderButton {\n    cursor: pointer;\n    height: 3rem;\n    width: max-content;\n    border: none;\n    border-radius: 1rem;\n    padding: 0 1.5rem;\n    background-color: var(--accent-main);\n    font-size: 1rem;\n    transition: .25s;\n}\n\n.textButton {\n    cursor: pointer;\n    height: 2rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.borderButton:hover,\n.textButton:hover {\n    transform: scale(1.05);\n}\n\n.delete {\n    color: #dc2626;\n    font-size: 1rem;\n}\n\n.submit {\n    font-size: 1rem;\n}\n\n\n/* TaskCard styling */\n\n#taskCardContainer {\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.listInfo {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n#listDescription {\n    font-size: 1.5rem;\n}\n\n.buttonContainer {\n    margin-top: auto;\n    width: 25rem;\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n}\n\n#taskContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.taskBox {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.checkbox {\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    height: 1.2rem;\n    width: 1.2rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 5px;\n    background-color: var(--primary-light);\n    transform: translateY(-0.075rem);\n    display: grid;\n    place-content: center;\n}\n\n.checkbox::after {\n    content: \"\";\n    height: 0.65rem;\n    width: 0.65rem;\n    transform: scale(0);\n    transform-origin: bottom left;\n    transition: 120ms ease-in-out;\n    box-shadow: inset 1rem 1rem var(--primary-dark);\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.checkbox:checked::after {\n    transform: scale(1);\n}\n\n.smaller {\n    width: 1rem;\n    height: 1rem;\n}\n\n.taskText {\n    width: 20rem;\n    overflow: hidden;\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.taskText:hover {\n    transform: scale(1.015);\n}\n\n#quickAddBar {\n    margin-top: auto;\n    display: flex;\n}\n\n#quickAddTask {\n    height: 3.15rem;\n    width: 18rem;\n    border: 0.5px solid var(--accent-secondary);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    padding: 0 1rem;\n}\n\n#submitQuickAdd {\n    cursor: pointer;\n    height: 3.2rem;\n    width: 5rem;\n    border: none;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    background-color: var(--accent-main);\n    transition: .25s;\n}\n\n#submitQuickAdd:hover {\n    transform: scale(1.05);\n}\n\n\n/* EditorCard styling */\n#editorCardContainer {\n    cursor: default;\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#editorForm {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#currentTask {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#priorityContainer {\n    display: flex;\n    gap: 2.5rem;\n}\n\n.priority {\n    cursor: pointer;\n    height: 2.5rem;\n    width: 5rem;\n    border: none;\n    border-radius: 5rem;\n    font-size: 0.8rem;\n    transition: .25s;\n}\n\n.priority:hover {\n    transform: scale(1.2);\n}\n\n.clicked {\n    transform: scale(1.2);\n}\n\n.critical {\n    background-color: #fda4af;\n}\n\n.important {\n    background-color: #fcd34d;\n}\n\n.low {\n    background-color: #6ee7b7 ;\n}\n\n.editOption {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n#dueDate,\n#listDropdown {\n    cursor: pointer;\n    height: 2rem;\n    width: 12.5rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding-inline: .5rem;\n    background-color: var(--primary-light);\n    font-size: 0.85rem;\n    transition: .25s;\n}\n\n#dueDate:hover,\n#listDropdown:hover {\n    transform: scale(1.015);\n}\n\n#subtaskContainer {\n    margin-top: .25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .25rem;\n}\n\n#createSubtaskButton {\n    margin: 0 0 0 1rem;\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.subtaskBox {\n    cursor: pointer;\n    margin-left: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.subtaskText {\n    width: 15rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1rem;\n}\n\n#notes {\n    height: 5rem;\n    width: 20rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    background-color: var(--primary-light);\n    resize: none;\n    transition: .25s;\n}\n\n#notes:hover {\n    transform: scale(1.01) ;\n}\n\n#deleteTask:hover,\n#submitTask:hover {\n    transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n:root {\n    --primary-dark: #1f2937;\n    --primary-light: #f9fafb;\n    --accent-secondary: #e5e7eb;\n    --accent-main: #0ea5e9;\n    font-family: \"Roboto\", sans-serif;\n    font-size: clamp(1rem, calc(0.5rem + 0.5vw), 1.75rem);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: none;\n    color: var(--primary-dark);\n}\n\nbody {\n    background-color: var(--primary-light);\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nh4 {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\nheader {\n    cursor: default;\n    height: 2rem;\n    border-bottom: 2px solid var(--accent-secondary);\n    padding: 2rem 3rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter {\n    height: 2rem;\n    border-top: 2px solid var(--accent-secondary);\n    padding-top: 0.75rem;\n    text-align: center;\n}\n\n/* Body styling */\n#main {\n    display: grid;\n    grid-template-columns: .25fr 2fr;\n}\n\n#sidebar {\n    height: auto;\n    max-height: 820px;\n    width: 13rem;\n    padding: 2rem;\n    border-right: 2px solid var(--accent-secondary);\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2.5rem;\n}\n\n#navLists,\n#userLists,\n#listContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.25rem;\n}\n\n#content {\n    padding: 2rem 7rem;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.borderButton {\n    cursor: pointer;\n    height: 3rem;\n    width: max-content;\n    border: none;\n    border-radius: 1rem;\n    padding: 0 1.5rem;\n    background-color: var(--accent-main);\n    font-size: 1rem;\n    transition: .25s;\n}\n\n.textButton {\n    cursor: pointer;\n    height: 2rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.borderButton:hover,\n.textButton:hover {\n    transform: scale(1.05);\n}\n\n.delete {\n    color: #dc2626;\n    font-size: 1rem;\n}\n\n.submit {\n    font-size: 1rem;\n}\n\n\n/* TaskCard styling */\n\n#taskCardContainer {\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.listInfo {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n#listDescription {\n    font-size: 1.5rem;\n}\n\n.buttonContainer {\n    margin-top: auto;\n    width: 25rem;\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n}\n\n#taskContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.taskBox {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.checkbox {\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    height: 1.2rem;\n    width: 1.2rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 5px;\n    background-color: var(--primary-light);\n    transform: translateY(-0.075rem);\n    display: grid;\n    place-content: center;\n}\n\n.checkbox::after {\n    content: \"\";\n    height: 0.65rem;\n    width: 0.65rem;\n    transform: scale(0);\n    transform-origin: bottom left;\n    transition: 120ms ease-in-out;\n    box-shadow: inset 1rem 1rem var(--primary-dark);\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.checkbox:checked::after {\n    transform: scale(1);\n}\n\n.smaller {\n    width: 1rem;\n    height: 1rem;\n}\n\n.taskText {\n    width: 20rem;\n    overflow: hidden;\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.taskText:hover {\n    transform: scale(1.015);\n}\n\n#quickAddBar {\n    margin-top: auto;\n    display: flex;\n}\n\n#quickAddTask {\n    height: 3.15rem;\n    width: 18rem;\n    border: 0.5px solid var(--accent-secondary);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    padding: 0 1rem;\n}\n\n#submitQuickAdd {\n    cursor: pointer;\n    height: 3.2rem;\n    width: 5rem;\n    border: none;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    background-color: var(--accent-main);\n    transition: .25s;\n}\n\n#submitQuickAdd:hover {\n    transform: scale(1.05);\n}\n\n\n/* EditorCard styling */\n#editorCardContainer {\n    cursor: default;\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#editorForm {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#currentTask {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#priorityContainer {\n    display: flex;\n    gap: 2.5rem;\n}\n\n.priority {\n    cursor: pointer;\n    height: 2.5rem;\n    width: 5rem;\n    border: none;\n    border-radius: 5rem;\n    font-size: 0.8rem;\n    transition: .25s;\n}\n\n.priority:hover {\n    transform: scale(1.2);\n}\n\n.clicked {\n    transform: scale(1.2);\n}\n\n.critical {\n    background-color: #fda4af;\n}\n\n.important {\n    background-color: #fcd34d;\n}\n\n.low {\n    background-color: #6ee7b7 ;\n}\n\n.editOption {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n#dueDate,\n#listDropdown {\n    cursor: pointer;\n    height: 2rem;\n    width: 12.5rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding-inline: .5rem;\n    background-color: var(--primary-light);\n    font-size: 0.85rem;\n    transition: .25s;\n}\n\n#dueDate:hover,\n#listDropdown:hover {\n    transform: scale(1.015);\n}\n\n#subtaskContainer {\n    margin-top: .25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .25rem;\n}\n\n#createSubtaskButton {\n    margin: 0 0 0 1rem;\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.subtaskBox {\n    cursor: pointer;\n    margin-left: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.subtaskText {\n    width: 15rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1rem;\n}\n\n#notes {\n    height: 5rem;\n    width: 20rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    background-color: var(--primary-light);\n    resize: none;\n    transition: .25s;\n}\n\n#notes:hover {\n    transform: scale(1.01) ;\n}\n\n#deleteTask:hover,\n#submitTask:hover {\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Subtask": () => (/* binding */ Subtask),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "navLists": () => (/* binding */ navLists),
/* harmony export */   "userLists": () => (/* binding */ userLists),
/* harmony export */   "userSubtask": () => (/* binding */ userSubtask),
/* harmony export */   "userTasks": () => (/* binding */ userTasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const List = (title, description, listID) => {
    return { title, description, listID }
}

const Task = (title, priority, dueDate, list, subtasks, note, completed, taskID) => {
    return { title, priority, dueDate, list, subtasks, note, completed, taskID }
}

const Subtask = (title, taskID) => {
    return { title, taskID }
}

const userLists = [
    {title: 'Test list 1', description: 'tester', listID: 1},
    {title: 'Test list 2', description: 'testee', listID: 2},
    {title: 'Test list 3', description: 'tested', listID: 3},
]

const navLists = [
    {title: 'All tasks'},
    {title: 'Today'},
    {title: 'This week'},
]

const userTasks = [
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 1},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 2},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 3},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 4},
    {title: 'Test task', priority: '', dueDate: '', list: '', subtasks: '', note: '', completed: 'false', taskID: 5},
]

const userSubtask = [
    {title: 'Test subtask', taskID: 1},
]



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_icon_cat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icon-cat.png */ "./src/img/icon-cat.png");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");






window.onload = function() {
    const iconContainer = document.getElementById('iconContainer');
    const taskCatIcon = new Image(60, 60);
    taskCatIcon.src = _img_icon_cat_png__WEBPACK_IMPORTED_MODULE_1__;
    iconContainer.appendChild(taskCatIcon);

    const navOptions = Array.from(document.querySelectorAll('[data-navOption'));
    const event = new CustomEvent('click', {detail: navOptions[0].dataset.nav});
    
    navOptions[0].addEventListener('click', (e) => {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.master)().renderList(_data__WEBPACK_IMPORTED_MODULE_2__.navLists, e);
    });
    
    navOptions[0].dispatchEvent(event);

    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.lists)().display(_data__WEBPACK_IMPORTED_MODULE_2__.userLists);
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editor": () => (/* binding */ editor),
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "master": () => (/* binding */ master),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");



const master = () => {
// x    initialize templates 
// x    render controls
// x    event listener controls
// x    reset event listeners
// refactor render list

    const initListClone = () => {
        if (content.contains(document.getElementById('taskCardContainer'))) {
            document.getElementById('taskCardContainer').remove();
        }

        const listCardTemplate = document.getElementById('listCard-template');
        const listCardClone = document.importNode(listCardTemplate.content, true);
        content.appendChild(listCardClone);

        const currentList = document.getElementById('currentList');
        const listDescription = document.getElementById('listDescription');
        const deleteList = document.getElementById('deleteList');
        const submitList = document.getElementById('submitList');

        currentList.focus();
        submitList.addEventListener('click', lists().handleForm);

        return { currentList, listDescription, deleteList, submitList }
    }

    const initCardClone = () => {
        if (content.contains(document.getElementById('taskCardContainer'))) {
            document.getElementById('taskCardContainer').remove();
        }

        const taskCardTemplate = document.getElementById('taskCard-template');
        const taskCardClone = document.importNode(taskCardTemplate.content, true);
        content.appendChild(taskCardClone);

        const taskCardContainer = document.getElementById('taskCardContainer');
        const currentList = document.getElementById('currentList');
        const listDescription = document.getElementById('listDescription');
        const submitQuickAdd = document.getElementById('submitQuickAdd');

        return { taskCardContainer, currentList, listDescription, submitQuickAdd, }
    }

    const initEditorClone = () => {
        if (content.contains(document.getElementById('editorCardContainer'))) return

        const editorCardTemplate = document.getElementById('editorCard-template');
        const editorClone = document.importNode(editorCardTemplate.content, true);
        content.prepend(editorClone);

        const editorForm = document.getElementById('editorForm');
        const currentTask = document.getElementById('currentTask');
        const priorities = document.querySelectorAll('[data-priority]');
        const dueDate = document.getElementById('dueDate');
        const listDropdown = document.getElementById('listDropdown');
        const createSubtaskButton = document.getElementById('createSubtaskButton');
        const notes = document.getElementById('notes');
        const submitTask = document.getElementById('submitTask');

        currentTask.focus();

        priorities.forEach(priority => {
            priority.addEventListener('click', (e) => {
                priorities.forEach(priority => {
                    if (priority.classList.contains('clicked')) {
                        priority.classList.remove('clicked');
                    }
                });

                priority.classList.add('clicked');
            });
        });

        createSubtaskButton.addEventListener('click', editor().handleSubtask);

        submitTask.addEventListener('click', () => {
            editor().handleForm();
            tasks().display(_data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks);
            content.removeChild(editorCardContainer);
        });

        return {editorForm, currentTask, priorities, dueDate, listDropdown, createSubtaskButton, notes, submitTask}
    }

    const renderList = (listArray, e) => {
        initCardClone();

        if (listArray.some( ({ title }) => 
        title === 'All tasks' || title === 'Today' || title === 'This week')) {
            currentList.value = e.target.dataset.navoption;
            currentList.setAttribute('readonly', 'readonly'); 
        
            taskCardContainer.removeChild(listDescription);

            tasks().display(_data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
 
        } else {
            const elementID = parseInt(e.target.dataset.listId);
            const activeList = _data_js__WEBPACK_IMPORTED_MODULE_1__.userLists.find( ({ listID }) => listID === elementID);

            currentList.value = activeList.title;
            currentList.dataset.listId = activeList.listID;
            currentList.addEventListener('focus', () => {
                setPlaceholder(currentList);
            }, { once: true });
            currentList.addEventListener('focusout', (e) => {
                lists().setTitle(e);
                lists().display(listArray);
            });
            
            if (activeList.description === '') {
                taskCardContainer.removeChild(listDescription);
            } else {
                listDescription.value = activeList.description;
                listDescription.dataset.listId = activeList.listID;
                listDescription.addEventListener('focus', () => {
                    setPlaceholder(listDescription);
                }, { once: true })
                listDescription.addEventListener('focusout', (e) => {
                    lists().setDescription(e);
                })
            }

            tasks().display(_data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks); 
            submitQuickAdd.addEventListener('click', tasks().handleQuickAdd);
        }
    }

    const setPlaceholder = (element) => {
        element.placeholder = element.value;
        element.value = '';
    }

    const createTaskButton = document.getElementById('createTaskButton');
    const addListButton = document.getElementById('addListButton');
    const navOptions = document.querySelectorAll('[data-navOption]');
    
    createTaskButton.addEventListener('click', initEditorClone);
    addListButton.addEventListener('click', initListClone);
    navOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            renderList(_data_js__WEBPACK_IMPORTED_MODULE_1__.navLists, e);
        });
    }); 

    return { initEditorClone, renderList, setPlaceholder, }
}

const lists = () => {
// x    getters and setters
// x    lists display controls
// x    list form controls
// remove lists
// check for existing list with same name?? - logic in old index
// handleForm displays the new list onclick-submit

    const display = (listArray) => {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        listArray.forEach(list => {
            const listItem = document.createElement('button');
            listContainer.appendChild(listItem);
            listItem.classList.add('textButton');
            listItem.textContent = list.title;
            listItem.dataset.listId = list.listID;
            listItem.addEventListener('click', (e) => {
                master().renderList(listArray, e);
            });
        });
    }

    const handleForm = () => {    
        const newTitle = getTitle();
        const newDescription = getDescription();
        const newListID = _data_js__WEBPACK_IMPORTED_MODULE_1__.userLists.length + 1;

        const newList = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.List)(newTitle, newDescription, newListID);
        _data_js__WEBPACK_IMPORTED_MODULE_1__.userLists.push(newList);
        display(_data_js__WEBPACK_IMPORTED_MODULE_1__.userLists);
    }

    const getTitle = () => {
        const currentList = document.getElementById('currentList');
        return currentList.value;
    }

    const setTitle = (e) => {
        const title = getTitle();

        if (title === '') return

        const elementID = parseInt(e.target.dataset.listId);
        const activeList = _data_js__WEBPACK_IMPORTED_MODULE_1__.userLists.find( ({ listID }) => listID === elementID);
       
        activeList.title = title;
    }

    const getDescription = () => {
        const listDescription = document.getElementById('listDescription');
        return listDescription.value;
    }

    const setDescription = (e) => {
        const description = getDescription();

        if (description === '') return

        const elementID = parseInt(e.target.dataset.listId);
        const activeList = _data_js__WEBPACK_IMPORTED_MODULE_1__.userLists.find( ({ listID }) => listID === elementID);
       
        activeList.description = description;
    }

    return { display, handleForm, setTitle, setDescription, }
}

const tasks = () => {
// getters and setters
// x    task display controls
// x    handle quick add controls
// delete tasks

    const display = (taskArray) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';
    
        taskArray.forEach(task => {
            const taskTemplate = document.getElementById('task-template');
            const taskClone = document.importNode(taskTemplate.content, true);
            taskContainer.appendChild(taskClone);

            const tasks = Array.from(document.querySelectorAll('[data-task]'));
            const index = task.taskID - 1;

            tasks[index].textContent = task.title;
            tasks[index].dataset.task = task.taskID;

            tasks[index].addEventListener('click', (e) => {     // Refactor into seperate function
                master().initEditorClone();
                const currentTask = document.getElementById('currentTask');
                currentTask.focus();
                currentTask.value = e.target.textContent;
                master().setPlaceholder(currentTask);
                console.log(e.target);
            });
        });
    }

    const handleQuickAdd = (e) => {
        e.preventDefault();
    
        const title = getTitle()
        const taskID = _data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks.length + 1;

        const newTask = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.Task)(title, '', '', '', '', '', '', taskID);
        _data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks.push(newTask);

        quickAddTask.value = '';
    
        display(_data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks);
    }

    const getTitle = () => {
        const quickAddTask = document.getElementById('quickAddTask');
        return quickAddTask.value;
    }

    const setTitle = () => {
        const title = getTitle();

        if (title === '') return


    }

    return { display, handleQuickAdd }
}

const editor = () => {
// getters and setters for title/subtask
// form/task creation methods
//      get/set priority
//      get/set dueDate from input
//      get/set target list from input
//      create new subtask
//      get/set notes from input
//      submit task/push to array                              
// delete task
//
// Set task id to date-time@creation ??

    const display = (task) => {

    }

    const getTitle = () => {
        const currentTask = document.getElementById('currentTask');
        return currentTask.value;
    }

    const setTitle = (e) => {
        const title = getTitle();

        if (title === '') return


    }

    const getPriority = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const activePriority = priorities.find( ({ classList }) => classList.contains('clicked'))

        return activePriority.dataset.priority
    }

    const getDueDate = () => {
        const dueDate = document.getElementById('dueDate');
        return dueDate.value;
    }

    const getTargetList = () => {
        const listDropdown = document.getElementById('listDropdown');

        return listDropdown.value
    }

    const handleSubtask = () => {
        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtaskTemplate = document.getElementById('subtask-template');
        const subtaskClone = document.importNode(subtaskTemplate.content, true);
        subtaskContainer.appendChild(subtaskClone);

        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        const index = _data_js__WEBPACK_IMPORTED_MODULE_1__.userSubtask.length - 1;

        subtasks[index].focus();

        subtasks[index].addEventListener('focusout', () => {
            const newSubtask = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.Subtask)(subtask[index].value, _data_js__WEBPACK_IMPORTED_MODULE_1__.userSubtask.length + 1)
            _data_js__WEBPACK_IMPORTED_MODULE_1__.userSubtask.push(newSubtask);

            console.log(_data_js__WEBPACK_IMPORTED_MODULE_1__.userSubtask);
        });
    }

    const getNotes = () => {
        const notes = document.getElementById('notes');
        return notes.value
    }

    const handleForm = () => {
        const taskID = _data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks.length + 1;

        const newTask = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.Task)(getTitle(), getPriority(), getDueDate(), getTargetList(), '', getNotes(), '', taskID)
        _data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks.push(newTask);
        console.log(_data_js__WEBPACK_IMPORTED_MODULE_1__.userTasks);
    }
    return { handleForm, getPriority, handleSubtask, }
}



/***/ }),

/***/ "./src/img/icon-cat.png":
/*!******************************!*\
  !*** ./src/img/icon-cat.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26269cc7039cf66cc330.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFB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b0IsK0NBQVM7QUFDN0I7QUFDQSxhQUFhO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMWYyOTM3O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOWZhZmI7XFxuICAgIC0tYWNjZW50LXNlY29uZGFyeTogI2U1ZTdlYjtcXG4gICAgLS1hY2NlbnQtbWFpbjogIzBlYTVlOTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoMC41cmVtICsgMC41dncpLCAxLjc1cmVtKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogQm9keSBzdHlsaW5nICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDJmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgyMHB4O1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4jbmF2TGlzdHMsXFxuI3VzZXJMaXN0cyxcXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS4yNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAycmVtIDdyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5ib3JkZXJCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbWFpbik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLnRleHRCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4uYm9yZGVyQnV0dG9uOmhvdmVyLFxcbi50ZXh0QnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIGNvbG9yOiAjZGMyNjI2O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcblxcbi8qIFRhc2tDYXJkIHN0eWxpbmcgKi9cXG5cXG4jdGFza0NhcmRDb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA2NzVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmxpc3RJbmZvIHtcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNsaXN0RGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuI3Rhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi50YXNrQm94IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NXJlbSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDAuNjVyZW07XFxuICAgIHdpZHRoOiAwLjY1cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogMTIwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnNtYWxsZXIge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFza1RleHQge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLnRhc2tUZXh0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XFxufVxcblxcbiNxdWlja0FkZEJhciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNxdWlja0FkZFRhc2sge1xcbiAgICBoZWlnaHQ6IDMuMTVyZW07XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4jc3VibWl0UXVpY2tBZGQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMy4ycmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuI3N1Ym1pdFF1aWNrQWRkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuXFxuLyogRWRpdG9yQ2FyZCBzdHlsaW5nICovXFxuI2VkaXRvckNhcmRDb250YWluZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDY3NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jZWRpdG9yRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2N1cnJlbnRUYXNrIHtcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNwcmlvcml0eUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLnByaW9yaXR5OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmNyaXRpY2FsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2QzNGQ7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmVlN2I3IDtcXG59XFxuXFxuLmVkaXRPcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcblxcbiNkdWVEYXRlLFxcbiNsaXN0RHJvcGRvd24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuI2R1ZURhdGU6aG92ZXIsXFxuI2xpc3REcm9wZG93bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xcbn1cXG5cXG4jc3VidGFza0NvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuMjVyZW07XFxufVxcblxcbiNjcmVhdGVTdWJ0YXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zdWJ0YXNrQm94IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5zdWJ0YXNrVGV4dCB7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbm90ZXMge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4jbm90ZXM6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpIDtcXG59XFxuXFxuI2RlbGV0ZVRhc2s6aG92ZXIsXFxuI3N1Ym1pdFRhc2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hE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QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZGFyazogIzFmMjkzNztcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZjlmYWZiO1xcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICNlNWU3ZWI7XFxuICAgIC0tYWNjZW50LW1haW46ICMwZWE1ZTk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCBjYWxjKDAuNXJlbSArIDAuNXZ3KSwgMS43NXJlbSk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEJvZHkgc3R5bGluZyAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAyZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA4MjBweDtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuI25hdkxpc3RzLFxcbiN1c2VyTGlzdHMsXFxuI2xpc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEuMjVyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMnJlbSA3cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYm9yZGVyQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LW1haW4pO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50ZXh0QnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLmJvcmRlckJ1dHRvbjpob3ZlcixcXG4udGV4dEJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICBjb2xvcjogI2RjMjYyNjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBUYXNrQ2FyZCBzdHlsaW5nICovXFxuXFxuI3Rhc2tDYXJkQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLWhlaWdodDogNjc1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5saXN0SW5mbyB7XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jbGlzdERlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbiN0YXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udGFza0JveCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVyZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAwLjY1cmVtO1xcbiAgICB3aWR0aDogMC42NXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zbWFsbGVyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50YXNrVGV4dDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xcbn1cXG5cXG4jcXVpY2tBZGRCYXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcXVpY2tBZGRUYXNrIHtcXG4gICAgaGVpZ2h0OiAzLjE1cmVtO1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuI3N1Ym1pdFF1aWNrQWRkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDMuMnJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbWFpbik7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbiNzdWJtaXRRdWlja0FkZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcblxcbi8qIEVkaXRvckNhcmQgc3R5bGluZyAqL1xcbiNlZGl0b3JDYXJkQ29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA2NzVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2VkaXRvckZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNjdXJyZW50VGFzayB7XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jcHJpb3JpdHlDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi5wcmlvcml0eTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jcml0aWNhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxufVxcblxcbi5pbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkMzRkO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlZTdiNyA7XFxufVxcblxcbi5lZGl0T3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jZHVlRGF0ZSxcXG4jbGlzdERyb3Bkb3duIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbiNkdWVEYXRlOmhvdmVyLFxcbiNsaXN0RHJvcGRvd246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuXFxuI3N1YnRhc2tDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4jY3JlYXRlU3VidGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3VidGFza0JveCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc3VidGFza1RleHQge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI25vdGVzIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuI25vdGVzOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKSA7XFxufVxcblxcbiNkZWxldGVUYXNrOmhvdmVyLFxcbiNzdWJtaXRUYXNrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBMaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdElEKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0SUQgfVxufVxuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgbGlzdCwgc3VidGFza3MsIG5vdGUsIGNvbXBsZXRlZCwgdGFza0lEKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBsaXN0LCBzdWJ0YXNrcywgbm90ZSwgY29tcGxldGVkLCB0YXNrSUQgfVxufVxuXG5jb25zdCBTdWJ0YXNrID0gKHRpdGxlLCB0YXNrSUQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgdGFza0lEIH1cbn1cblxuY29uc3QgdXNlckxpc3RzID0gW1xuICAgIHt0aXRsZTogJ1Rlc3QgbGlzdCAxJywgZGVzY3JpcHRpb246ICd0ZXN0ZXInLCBsaXN0SUQ6IDF9LFxuICAgIHt0aXRsZTogJ1Rlc3QgbGlzdCAyJywgZGVzY3JpcHRpb246ICd0ZXN0ZWUnLCBsaXN0SUQ6IDJ9LFxuICAgIHt0aXRsZTogJ1Rlc3QgbGlzdCAzJywgZGVzY3JpcHRpb246ICd0ZXN0ZWQnLCBsaXN0SUQ6IDN9LFxuXVxuXG5jb25zdCBuYXZMaXN0cyA9IFtcbiAgICB7dGl0bGU6ICdBbGwgdGFza3MnfSxcbiAgICB7dGl0bGU6ICdUb2RheSd9LFxuICAgIHt0aXRsZTogJ1RoaXMgd2Vlayd9LFxuXVxuXG5jb25zdCB1c2VyVGFza3MgPSBbXG4gICAge3RpdGxlOiAnVGVzdCB0YXNrJywgcHJpb3JpdHk6ICcnLCBkdWVEYXRlOiAnJywgbGlzdDogJycsIHN1YnRhc2tzOiAnJywgbm90ZTogJycsIGNvbXBsZXRlZDogJ2ZhbHNlJywgdGFza0lEOiAxfSxcbiAgICB7dGl0bGU6ICdUZXN0IHRhc2snLCBwcmlvcml0eTogJycsIGR1ZURhdGU6ICcnLCBsaXN0OiAnJywgc3VidGFza3M6ICcnLCBub3RlOiAnJywgY29tcGxldGVkOiAnZmFsc2UnLCB0YXNrSUQ6IDJ9LFxuICAgIHt0aXRsZTogJ1Rlc3QgdGFzaycsIHByaW9yaXR5OiAnJywgZHVlRGF0ZTogJycsIGxpc3Q6ICcnLCBzdWJ0YXNrczogJycsIG5vdGU6ICcnLCBjb21wbGV0ZWQ6ICdmYWxzZScsIHRhc2tJRDogM30sXG4gICAge3RpdGxlOiAnVGVzdCB0YXNrJywgcHJpb3JpdHk6ICcnLCBkdWVEYXRlOiAnJywgbGlzdDogJycsIHN1YnRhc2tzOiAnJywgbm90ZTogJycsIGNvbXBsZXRlZDogJ2ZhbHNlJywgdGFza0lEOiA0fSxcbiAgICB7dGl0bGU6ICdUZXN0IHRhc2snLCBwcmlvcml0eTogJycsIGR1ZURhdGU6ICcnLCBsaXN0OiAnJywgc3VidGFza3M6ICcnLCBub3RlOiAnJywgY29tcGxldGVkOiAnZmFsc2UnLCB0YXNrSUQ6IDV9LFxuXVxuXG5jb25zdCB1c2VyU3VidGFzayA9IFtcbiAgICB7dGl0bGU6ICdUZXN0IHN1YnRhc2snLCB0YXNrSUQ6IDF9LFxuXVxuXG5leHBvcnQgeyBMaXN0LCBUYXNrLCBTdWJ0YXNrLCB1c2VyTGlzdHMsIG5hdkxpc3RzLCB1c2VyVGFza3MsIHVzZXJTdWJ0YXNrLCB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ltZy9pY29uLWNhdC5wbmcnO1xuaW1wb3J0IHsgbmF2TGlzdHMsIHVzZXJMaXN0cyB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBtYXN0ZXIsIGxpc3RzLCB0YXNrcywgZWRpdG9yLCB9IGZyb20gJy4vdWkuanMnO1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25Db250YWluZXInKTtcbiAgICBjb25zdCB0YXNrQ2F0SWNvbiA9IG5ldyBJbWFnZSg2MCwgNjApO1xuICAgIHRhc2tDYXRJY29uLnNyYyA9IGljb247XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2F0SWNvbik7XG5cbiAgICBjb25zdCBuYXZPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXZPcHRpb24nKSk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJywge2RldGFpbDogbmF2T3B0aW9uc1swXS5kYXRhc2V0Lm5hdn0pO1xuICAgIFxuICAgIG5hdk9wdGlvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtYXN0ZXIoKS5yZW5kZXJMaXN0KG5hdkxpc3RzLCBlKTtcbiAgICB9KTtcbiAgICBcbiAgICBuYXZPcHRpb25zWzBdLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgbGlzdHMoKS5kaXNwbGF5KHVzZXJMaXN0cyk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0xpc3QsIFRhc2ssIFN1YnRhc2ssIHVzZXJMaXN0cywgbmF2TGlzdHMsIHVzZXJUYXNrcywgdXNlclN1YnRhc2t9IGZyb20gXCIuL2RhdGEuanNcIjtcblxuY29uc3QgbWFzdGVyID0gKCkgPT4ge1xuLy8geCAgICBpbml0aWFsaXplIHRlbXBsYXRlcyBcbi8vIHggICAgcmVuZGVyIGNvbnRyb2xzXG4vLyB4ICAgIGV2ZW50IGxpc3RlbmVyIGNvbnRyb2xzXG4vLyB4ICAgIHJlc2V0IGV2ZW50IGxpc3RlbmVyc1xuLy8gcmVmYWN0b3IgcmVuZGVyIGxpc3RcblxuICAgIGNvbnN0IGluaXRMaXN0Q2xvbmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ2FyZENvbnRhaW5lcicpKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tDYXJkQ29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaXN0Q2FyZFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDYXJkLXRlbXBsYXRlJyk7XG4gICAgICAgIGNvbnN0IGxpc3RDYXJkQ2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKGxpc3RDYXJkVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdENhcmRDbG9uZSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExpc3QnKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUxpc3QnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRMaXN0Jyk7XG5cbiAgICAgICAgY3VycmVudExpc3QuZm9jdXMoKTtcbiAgICAgICAgc3VibWl0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RzKCkuaGFuZGxlRm9ybSk7XG5cbiAgICAgICAgcmV0dXJuIHsgY3VycmVudExpc3QsIGxpc3REZXNjcmlwdGlvbiwgZGVsZXRlTGlzdCwgc3VibWl0TGlzdCB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdENhcmRDbG9uZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tDYXJkQ29udGFpbmVyJykpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NhcmRDb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NhcmQtdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3QgdGFza0NhcmRDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza0NhcmRUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ2FyZENsb25lKTtcblxuICAgICAgICBjb25zdCB0YXNrQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ2FyZENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50TGlzdCcpO1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdERlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFF1aWNrQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFF1aWNrQWRkJyk7XG5cbiAgICAgICAgcmV0dXJuIHsgdGFza0NhcmRDb250YWluZXIsIGN1cnJlbnRMaXN0LCBsaXN0RGVzY3JpcHRpb24sIHN1Ym1pdFF1aWNrQWRkLCB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdEVkaXRvckNsb25lID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yQ2FyZENvbnRhaW5lcicpKSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZWRpdG9yQ2FyZFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvckNhcmQtdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdG9yQ2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKGVkaXRvckNhcmRUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29udGVudC5wcmVwZW5kKGVkaXRvckNsb25lKTtcblxuICAgICAgICBjb25zdCBlZGl0b3JGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvckZvcm0nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhc2snKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaW9yaXR5XScpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgbGlzdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REcm9wZG93bicpO1xuICAgICAgICBjb25zdCBjcmVhdGVTdWJ0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVN1YnRhc2tCdXR0b24nKTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUYXNrJyk7XG5cbiAgICAgICAgY3VycmVudFRhc2suZm9jdXMoKTtcblxuICAgICAgICBwcmlvcml0aWVzLmZvckVhY2gocHJpb3JpdHkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByaW9yaXRpZXMuZm9yRWFjaChwcmlvcml0eSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlU3VidGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRvcigpLmhhbmRsZVN1YnRhc2spO1xuXG4gICAgICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0b3IoKS5oYW5kbGVGb3JtKCk7XG4gICAgICAgICAgICB0YXNrcygpLmRpc3BsYXkodXNlclRhc2tzKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdG9yQ2FyZENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7ZWRpdG9yRm9ybSwgY3VycmVudFRhc2ssIHByaW9yaXRpZXMsIGR1ZURhdGUsIGxpc3REcm9wZG93biwgY3JlYXRlU3VidGFza0J1dHRvbiwgbm90ZXMsIHN1Ym1pdFRhc2t9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTGlzdCA9IChsaXN0QXJyYXksIGUpID0+IHtcbiAgICAgICAgaW5pdENhcmRDbG9uZSgpO1xuXG4gICAgICAgIGlmIChsaXN0QXJyYXkuc29tZSggKHsgdGl0bGUgfSkgPT4gXG4gICAgICAgIHRpdGxlID09PSAnQWxsIHRhc2tzJyB8fCB0aXRsZSA9PT0gJ1RvZGF5JyB8fCB0aXRsZSA9PT0gJ1RoaXMgd2VlaycpKSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdC52YWx1ZSA9IGUudGFyZ2V0LmRhdGFzZXQubmF2b3B0aW9uO1xuICAgICAgICAgICAgY3VycmVudExpc3Quc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpOyBcbiAgICAgICAgXG4gICAgICAgICAgICB0YXNrQ2FyZENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICB0YXNrcygpLmRpc3BsYXkodXNlclRhc2tzKTsgXG4gICAgICAgICAgICBzdWJtaXRRdWlja0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tzKCkuaGFuZGxlUXVpY2tBZGQpO1xuIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudElEID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5saXN0SWQpO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlTGlzdCA9IHVzZXJMaXN0cy5maW5kKCAoeyBsaXN0SUQgfSkgPT4gbGlzdElEID09PSBlbGVtZW50SUQpO1xuXG4gICAgICAgICAgICBjdXJyZW50TGlzdC52YWx1ZSA9IGFjdGl2ZUxpc3QudGl0bGU7XG4gICAgICAgICAgICBjdXJyZW50TGlzdC5kYXRhc2V0Lmxpc3RJZCA9IGFjdGl2ZUxpc3QubGlzdElEO1xuICAgICAgICAgICAgY3VycmVudExpc3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIoY3VycmVudExpc3QpO1xuICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgY3VycmVudExpc3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RzKCkuc2V0VGl0bGUoZSk7XG4gICAgICAgICAgICAgICAgbGlzdHMoKS5kaXNwbGF5KGxpc3RBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGFjdGl2ZUxpc3QuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGFza0NhcmRDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdERlc2NyaXB0aW9uLnZhbHVlID0gYWN0aXZlTGlzdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBsaXN0RGVzY3JpcHRpb24uZGF0YXNldC5saXN0SWQgPSBhY3RpdmVMaXN0Lmxpc3RJRDtcbiAgICAgICAgICAgICAgICBsaXN0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyKGxpc3REZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgbGlzdERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdHMoKS5zZXREZXNjcmlwdGlvbihlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrcygpLmRpc3BsYXkodXNlclRhc2tzKTsgXG4gICAgICAgICAgICBzdWJtaXRRdWlja0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tzKCkuaGFuZGxlUXVpY2tBZGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGxhY2Vob2xkZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFza0J1dHRvbicpO1xuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdEJ1dHRvbicpO1xuICAgIGNvbnN0IG5hdk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXZPcHRpb25dJyk7XG4gICAgXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRFZGl0b3JDbG9uZSk7XG4gICAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRMaXN0Q2xvbmUpO1xuICAgIG5hdk9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyTGlzdChuYXZMaXN0cywgZSk7XG4gICAgICAgIH0pO1xuICAgIH0pOyBcblxuICAgIHJldHVybiB7IGluaXRFZGl0b3JDbG9uZSwgcmVuZGVyTGlzdCwgc2V0UGxhY2Vob2xkZXIsIH1cbn1cblxuY29uc3QgbGlzdHMgPSAoKSA9PiB7XG4vLyB4ICAgIGdldHRlcnMgYW5kIHNldHRlcnNcbi8vIHggICAgbGlzdHMgZGlzcGxheSBjb250cm9sc1xuLy8geCAgICBsaXN0IGZvcm0gY29udHJvbHNcbi8vIHJlbW92ZSBsaXN0c1xuLy8gY2hlY2sgZm9yIGV4aXN0aW5nIGxpc3Qgd2l0aCBzYW1lIG5hbWU/PyAtIGxvZ2ljIGluIG9sZCBpbmRleFxuLy8gaGFuZGxlRm9ybSBkaXNwbGF5cyB0aGUgbmV3IGxpc3Qgb25jbGljay1zdWJtaXRcblxuICAgIGNvbnN0IGRpc3BsYXkgPSAobGlzdEFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGV4dEJ1dHRvbicpO1xuICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBsaXN0LnRpdGxlO1xuICAgICAgICAgICAgbGlzdEl0ZW0uZGF0YXNldC5saXN0SWQgPSBsaXN0Lmxpc3RJRDtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBtYXN0ZXIoKS5yZW5kZXJMaXN0KGxpc3RBcnJheSwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybSA9ICgpID0+IHsgICAgXG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBnZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBjb25zdCBuZXdMaXN0SUQgPSB1c2VyTGlzdHMubGVuZ3RoICsgMTtcblxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gTGlzdChuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0xpc3RJRCk7XG4gICAgICAgIHVzZXJMaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBkaXNwbGF5KHVzZXJMaXN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMaXN0Jyk7XG4gICAgICAgIHJldHVybiBjdXJyZW50TGlzdC52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblxuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSByZXR1cm5cblxuICAgICAgICBjb25zdCBlbGVtZW50SUQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSB1c2VyTGlzdHMuZmluZCggKHsgbGlzdElEIH0pID0+IGxpc3RJRCA9PT0gZWxlbWVudElEKTtcbiAgICAgICBcbiAgICAgICAgYWN0aXZlTGlzdC50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdERlc2NyaXB0aW9uJyk7XG4gICAgICAgIHJldHVybiBsaXN0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5saXN0SWQpO1xuICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gdXNlckxpc3RzLmZpbmQoICh7IGxpc3RJRCB9KSA9PiBsaXN0SUQgPT09IGVsZW1lbnRJRCk7XG4gICAgICAgXG4gICAgICAgIGFjdGl2ZUxpc3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5LCBoYW5kbGVGb3JtLCBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIH1cbn1cblxuY29uc3QgdGFza3MgPSAoKSA9PiB7XG4vLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG4vLyB4ICAgIHRhc2sgZGlzcGxheSBjb250cm9sc1xuLy8geCAgICBoYW5kbGUgcXVpY2sgYWRkIGNvbnRyb2xzXG4vLyBkZWxldGUgdGFza3NcblxuICAgIGNvbnN0IGRpc3BsYXkgPSAodGFza0FycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NvbnRhaW5lcicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgICAgICB0YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRlbXBsYXRlJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Nsb25lKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhc2tdJykpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrLnRhc2tJRCAtIDE7XG5cbiAgICAgICAgICAgIHRhc2tzW2luZGV4XS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICB0YXNrc1tpbmRleF0uZGF0YXNldC50YXNrID0gdGFzay50YXNrSUQ7XG5cbiAgICAgICAgICAgIHRhc2tzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgICAvLyBSZWZhY3RvciBpbnRvIHNlcGVyYXRlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgbWFzdGVyKCkuaW5pdEVkaXRvckNsb25lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhc2snKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLnZhbHVlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbWFzdGVyKCkuc2V0UGxhY2Vob2xkZXIoY3VycmVudFRhc2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVRdWlja0FkZCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSgpXG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHVzZXJUYXNrcy5sZW5ndGggKyAxO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCAnJywgJycsICcnLCAnJywgJycsICcnLCB0YXNrSUQpO1xuICAgICAgICB1c2VyVGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgICAgICBxdWlja0FkZFRhc2sudmFsdWUgPSAnJztcbiAgICBcbiAgICAgICAgZGlzcGxheSh1c2VyVGFza3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWlja0FkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tBZGRUYXNrJyk7XG4gICAgICAgIHJldHVybiBxdWlja0FkZFRhc2sudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblxuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSByZXR1cm5cblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheSwgaGFuZGxlUXVpY2tBZGQgfVxufVxuXG5jb25zdCBlZGl0b3IgPSAoKSA9PiB7XG4vLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciB0aXRsZS9zdWJ0YXNrXG4vLyBmb3JtL3Rhc2sgY3JlYXRpb24gbWV0aG9kc1xuLy8gICAgICBnZXQvc2V0IHByaW9yaXR5XG4vLyAgICAgIGdldC9zZXQgZHVlRGF0ZSBmcm9tIGlucHV0XG4vLyAgICAgIGdldC9zZXQgdGFyZ2V0IGxpc3QgZnJvbSBpbnB1dFxuLy8gICAgICBjcmVhdGUgbmV3IHN1YnRhc2tcbi8vICAgICAgZ2V0L3NldCBub3RlcyBmcm9tIGlucHV0XG4vLyAgICAgIHN1Ym1pdCB0YXNrL3B1c2ggdG8gYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIGRlbGV0ZSB0YXNrXG4vL1xuLy8gU2V0IHRhc2sgaWQgdG8gZGF0ZS10aW1lQGNyZWF0aW9uID8/XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gKHRhc2spID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFzaycpO1xuICAgICAgICByZXR1cm4gY3VycmVudFRhc2sudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnJykgcmV0dXJuXG5cblxuICAgIH1cblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcmlvcml0eV0nKSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByaW9yaXR5ID0gcHJpb3JpdGllcy5maW5kKCAoeyBjbGFzc0xpc3QgfSkgPT4gY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByaW9yaXR5LmRhdGFzZXQucHJpb3JpdHlcbiAgICB9XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICAgICAgcmV0dXJuIGR1ZURhdGUudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REcm9wZG93bicpO1xuXG4gICAgICAgIHJldHVybiBsaXN0RHJvcGRvd24udmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJ0YXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJ0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnRhc2tDb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgc3VidGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnRhc2stdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3Qgc3VidGFza0Nsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShzdWJ0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHN1YnRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGFza0Nsb25lKTtcblxuICAgICAgICBjb25zdCBzdWJ0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3VidGFza10nKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdXNlclN1YnRhc2subGVuZ3RoIC0gMTtcblxuICAgICAgICBzdWJ0YXNrc1tpbmRleF0uZm9jdXMoKTtcblxuICAgICAgICBzdWJ0YXNrc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdWJ0YXNrID0gU3VidGFzayhzdWJ0YXNrW2luZGV4XS52YWx1ZSwgdXNlclN1YnRhc2subGVuZ3RoICsgMSlcbiAgICAgICAgICAgIHVzZXJTdWJ0YXNrLnB1c2gobmV3U3VidGFzayk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJTdWJ0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG4gICAgICAgIHJldHVybiBub3Rlcy52YWx1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IHVzZXJUYXNrcy5sZW5ndGggKyAxO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKGdldFRpdGxlKCksIGdldFByaW9yaXR5KCksIGdldER1ZURhdGUoKSwgZ2V0VGFyZ2V0TGlzdCgpLCAnJywgZ2V0Tm90ZXMoKSwgJycsIHRhc2tJRClcbiAgICAgICAgdXNlclRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJUYXNrcyk7XG4gICAgfVxuICAgIHJldHVybiB7IGhhbmRsZUZvcm0sIGdldFByaW9yaXR5LCBoYW5kbGVTdWJ0YXNrLCB9XG59XG5cbmV4cG9ydCB7IG1hc3RlciwgbGlzdHMsIHRhc2tzLCBlZGl0b3IsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=