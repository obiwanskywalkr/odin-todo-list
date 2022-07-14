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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-dark: #1f2937;\n    --primary-light: #f9fafb;\n    --accent-secondary: #e5e7eb;\n    --accent-main: #0ea5e9;\n    font-family: \"Roboto\", sans-serif;\n    font-size: clamp(1rem, calc(0.5rem + 0.5vw), 1.75rem);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: none;\n    color: var(--primary-dark);\n}\n\nbody {\n    background-color: var(--primary-light);\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nh4 {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\nheader {\n    cursor: default;\n    height: 2rem;\n    border-bottom: 2px solid var(--accent-secondary);\n    padding: 2rem 3rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter {\n    height: 2rem;\n    border-top: 2px solid var(--accent-secondary);\n    padding-top: 0.75rem;\n    text-align: center;\n}\n\n/* Body styling */\n#main {\n    display: grid;\n    grid-template-columns: .25fr 2fr;\n}\n\n#sidebar {\n    height: auto;\n    max-height: 820px;\n    width: 13rem;\n    padding: 2rem;\n    border-right: 2px solid var(--accent-secondary);\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2.5rem;\n}\n\n#navLists,\n#userLists,\n#listContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.25rem;\n}\n\n.listBox {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n#content {\n    padding: 2rem 7rem;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.borderButton {\n    cursor: pointer;\n    height: 3rem;\n    width: max-content;\n    border: none;\n    border-radius: 1rem;\n    padding: 0 1.5rem;\n    background-color: var(--accent-main);\n    font-size: 1rem;\n    transition: .25s;\n}\n\n.textButton {\n    cursor: pointer;\n    height: 2rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.imageButton {\n    height: 1.5rem;\n    width: 1.5rem;\n    transition: .25s;\n}\n\n.borderButton:hover,\n.textButton:hover {\n    transform: scale(1.05);\n}\n\n.imageButton:hover {\n    transform: scale(1.25);\n}\n\n.delete {\n    color: #dc2626;\n    font-size: 1rem;\n}\n\n.submit {\n    font-size: 1rem;\n}\n\n\n/* TaskCard styling */\n\n#todoCardContainer,\n#listCardContainer {\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.listInfo {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n#listDescription {\n    font-size: 1.5rem;\n}\n\n.buttonContainer {\n    margin-top: auto;\n    width: 25rem;\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n}\n\n#taskContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.taskBox {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.checkbox {\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    height: 1.2rem;\n    width: 1.2rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 5px;\n    background-color: var(--primary-light);\n    transform: translateY(-0.075rem);\n    display: grid;\n    place-content: center;\n}\n\n.checkbox::after {\n    content: \"\";\n    height: 0.65rem;\n    width: 0.65rem;\n    transform: scale(0);\n    transform-origin: bottom left;\n    transition: 120ms ease-in-out;\n    box-shadow: inset 1rem 1rem var(--primary-dark);\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.checkbox:checked::after {\n    transform: scale(1);\n}\n\n.smaller {\n    width: 1rem;\n    height: 1rem;\n}\n\n.taskText {\n    width: 20rem;\n    overflow: hidden;\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.taskText:hover {\n    transform: scale(1.015);\n}\n\n#quickAddBar {\n    margin-top: auto;\n    display: flex;\n}\n\n#quickAddTask {\n    height: 3.15rem;\n    width: 18rem;\n    border: 0.5px solid var(--accent-secondary);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    padding: 0 1rem;\n}\n\n#submitQuickAdd {\n    cursor: pointer;\n    height: 3.2rem;\n    width: 5rem;\n    border: none;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    background-color: var(--accent-main);\n    transition: .25s;\n}\n\n#submitQuickAdd:hover {\n    transform: scale(1.05);\n}\n\n\n/* EditorCard styling */\n#editorCardContainer {\n    cursor: default;\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#editorForm {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#currentTask {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#priorityContainer {\n    display: flex;\n    gap: 2.5rem;\n}\n\n.priority {\n    cursor: pointer;\n    height: 2.5rem;\n    width: 5rem;\n    border: none;\n    border-radius: 5rem;\n    font-size: 0.8rem;\n    transition: .25s;\n}\n\n.priority:hover {\n    transform: scale(1.2);\n}\n\n.clicked {\n    transform: scale(1.2);\n}\n\n.critical {\n    background-color: #fda4af;\n}\n\n.important {\n    background-color: #fcd34d;\n}\n\n.low {\n    background-color: #6ee7b7 ;\n}\n\n.editOption {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n#dueDate,\n#listDropdown {\n    cursor: pointer;\n    height: 2rem;\n    width: 12.5rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding-inline: .5rem;\n    background-color: var(--primary-light);\n    font-size: 0.85rem;\n    transition: .25s;\n}\n\n#dueDate:hover,\n#listDropdown:hover {\n    transform: scale(1.015);\n}\n\n#subtaskContainer {\n    margin-top: .25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .25rem;\n}\n\n#createSubtaskButton {\n    margin: 0 0 0 1rem;\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.subtaskBox {\n    cursor: pointer;\n    margin-left: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.subtaskText {\n    width: 15rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1rem;\n}\n\n#notes {\n    height: 5rem;\n    width: 20rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    background-color: var(--primary-light);\n    resize: none;\n    transition: .25s;\n}\n\n#notes:hover {\n    transform: scale(1.01) ;\n}\n\n#deleteTask:hover,\n#submitTask:hover {\n    transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n:root {\n    --primary-dark: #1f2937;\n    --primary-light: #f9fafb;\n    --accent-secondary: #e5e7eb;\n    --accent-main: #0ea5e9;\n    font-family: \"Roboto\", sans-serif;\n    font-size: clamp(1rem, calc(0.5rem + 0.5vw), 1.75rem);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: none;\n    color: var(--primary-dark);\n}\n\nbody {\n    background-color: var(--primary-light);\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nh4 {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\nheader {\n    cursor: default;\n    height: 2rem;\n    border-bottom: 2px solid var(--accent-secondary);\n    padding: 2rem 3rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nfooter {\n    height: 2rem;\n    border-top: 2px solid var(--accent-secondary);\n    padding-top: 0.75rem;\n    text-align: center;\n}\n\n/* Body styling */\n#main {\n    display: grid;\n    grid-template-columns: .25fr 2fr;\n}\n\n#sidebar {\n    height: auto;\n    max-height: 820px;\n    width: 13rem;\n    padding: 2rem;\n    border-right: 2px solid var(--accent-secondary);\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2.5rem;\n}\n\n#navLists,\n#userLists,\n#listContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.25rem;\n}\n\n.listBox {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n#content {\n    padding: 2rem 7rem;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n}\n\n.borderButton {\n    cursor: pointer;\n    height: 3rem;\n    width: max-content;\n    border: none;\n    border-radius: 1rem;\n    padding: 0 1.5rem;\n    background-color: var(--accent-main);\n    font-size: 1rem;\n    transition: .25s;\n}\n\n.textButton {\n    cursor: pointer;\n    height: 2rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.imageButton {\n    height: 1.5rem;\n    width: 1.5rem;\n    transition: .25s;\n}\n\n.borderButton:hover,\n.textButton:hover {\n    transform: scale(1.05);\n}\n\n.imageButton:hover {\n    transform: scale(1.25);\n}\n\n.delete {\n    color: #dc2626;\n    font-size: 1rem;\n}\n\n.submit {\n    font-size: 1rem;\n}\n\n\n/* TaskCard styling */\n\n#todoCardContainer,\n#listCardContainer {\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.listInfo {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n#listDescription {\n    font-size: 1.5rem;\n}\n\n.buttonContainer {\n    margin-top: auto;\n    width: 25rem;\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n}\n\n#taskContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.taskBox {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.checkbox {\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    height: 1.2rem;\n    width: 1.2rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 5px;\n    background-color: var(--primary-light);\n    transform: translateY(-0.075rem);\n    display: grid;\n    place-content: center;\n}\n\n.checkbox::after {\n    content: \"\";\n    height: 0.65rem;\n    width: 0.65rem;\n    transform: scale(0);\n    transform-origin: bottom left;\n    transition: 120ms ease-in-out;\n    box-shadow: inset 1rem 1rem var(--primary-dark);\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.checkbox:checked::after {\n    transform: scale(1);\n}\n\n.smaller {\n    width: 1rem;\n    height: 1rem;\n}\n\n.taskText {\n    width: 20rem;\n    overflow: hidden;\n    font-size: 1.25rem;\n    transition: .25s;\n}\n\n.taskText:hover {\n    transform: scale(1.015);\n}\n\n#quickAddBar {\n    margin-top: auto;\n    display: flex;\n}\n\n#quickAddTask {\n    height: 3.15rem;\n    width: 18rem;\n    border: 0.5px solid var(--accent-secondary);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    padding: 0 1rem;\n}\n\n#submitQuickAdd {\n    cursor: pointer;\n    height: 3.2rem;\n    width: 5rem;\n    border: none;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    background-color: var(--accent-main);\n    transition: .25s;\n}\n\n#submitQuickAdd:hover {\n    transform: scale(1.05);\n}\n\n\n/* EditorCard styling */\n#editorCardContainer {\n    cursor: default;\n    max-width: 25rem;\n    min-height: 675px;\n    border: 2px solid var(--accent-secondary);\n    border-radius: 1rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#editorForm {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#currentTask {\n    max-width: 20rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n#priorityContainer {\n    display: flex;\n    gap: 2.5rem;\n}\n\n.priority {\n    cursor: pointer;\n    height: 2.5rem;\n    width: 5rem;\n    border: none;\n    border-radius: 5rem;\n    font-size: 0.8rem;\n    transition: .25s;\n}\n\n.priority:hover {\n    transform: scale(1.2);\n}\n\n.clicked {\n    transform: scale(1.2);\n}\n\n.critical {\n    background-color: #fda4af;\n}\n\n.important {\n    background-color: #fcd34d;\n}\n\n.low {\n    background-color: #6ee7b7 ;\n}\n\n.editOption {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n#dueDate,\n#listDropdown {\n    cursor: pointer;\n    height: 2rem;\n    width: 12.5rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding-inline: .5rem;\n    background-color: var(--primary-light);\n    font-size: 0.85rem;\n    transition: .25s;\n}\n\n#dueDate:hover,\n#listDropdown:hover {\n    transform: scale(1.015);\n}\n\n#subtaskContainer {\n    margin-top: .25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .25rem;\n}\n\n#createSubtaskButton {\n    margin: 0 0 0 1rem;\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.subtaskBox {\n    cursor: pointer;\n    margin-left: 1rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.subtaskText {\n    width: 15rem;\n    border: none;\n    background-color: var(--primary-light);\n    font-size: 1rem;\n}\n\n#notes {\n    height: 5rem;\n    width: 20rem;\n    border: 1px solid var(--primary-dark);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    background-color: var(--primary-light);\n    resize: none;\n    transition: .25s;\n}\n\n#notes:hover {\n    transform: scale(1.01) ;\n}\n\n#deleteTask:hover,\n#submitTask:hover {\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");



window.onload = () => {
    (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.ui)().initPage();
}

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllTasks": () => (/* binding */ getAllTasks),
/* harmony export */   "navLists": () => (/* binding */ navLists),
/* harmony export */   "userLists": () => (/* binding */ userLists)
/* harmony export */ });
const getAllTasks = () => {
    const allTasks = [];
    userLists.forEach(list => {
        const tasks = list.tasks;
        allTasks.push(tasks);
    })
    
    return allTasks;
}

getAllTasks();

const getTodayTasks = () => {

}

const getWeekTasks = () => {
    
}

const navLists = [
    {title: 'All tasks',
    description: '',
    tasks: [],
    listID: ''},
    
    {title: 'Today',
    description: '',
    tasks: [],
    listID: ''},

    {title: 'This week',
    description: '',
    tasks: [],
    listID: ''}
]

const userLists = [
    {title: 'List 1', 
    description: 'foobar', 
    tasks: [{title: 'Critical task', priority: 'critical', dueDate: '2022-10-22T16:20', list: 'Test list 1', subtasks: [{title: 'foo', subtask: 1}], notes: 'bar', completed: 'false', taskID: 1}], 
    listID: 1},

    {title: 'List 2', 
    description: 'foobar!', 
    tasks: [{title: 'Important task', priority: 'important', dueDate: '2022-10-22T16:20', list: 'Test list 2', subtasks: [{title: 'foo!', subtask: 1}], notes: 'bar!', completed: 'false', taskID: 2}], 
    listID: 2},
    
    {title: 'List 3', 
    description: 'foobar?', 
    tasks: [{title: 'Regular task', priority: 'low', dueDate: '2022-10-22T16:20', list: 'Test list 3', subtasks: [{title: 'foo?', subtask: 1}], notes: 'bar?', completed: 'false', taskID: 3}], 
    listID: 3},
]

const unassignedTasks = [];



// [{title: 'Critical task', priority: 'critical', dueDate: '2022-10-22T16:20', list: 'Test list 1', subtasks: [{title: 'foo', subtask: 1}, {title: 'bar', subtask: 2}], notes: 'foobar', completed: 'false', taskID: 1},
// {title: 'Important task', priority: 'important', dueDate: '2022-10-22T16:20', list: 'Test list 2', subtasks: [{title: 'foo!', subtask: 1}], notes: 'bar!', completed: 'false', taskID: 2},
// {title: 'Regular task', priority: 'low', dueDate: '2022-10-22T16:20', list: 'Test list 3', subtasks: [{title: 'foo?', subtask: 1}], notes: 'bar?', completed: 'false', taskID: 3}],


/***/ }),

/***/ "./src/modules/editor.js":
/*!*******************************!*\
  !*** ./src/modules/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subtask": () => (/* binding */ Subtask),
/* harmony export */   "editor": () => (/* binding */ editor)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/modules/ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");




const Subtask = (title, taskID) => {
    return { title, taskID }
}

const editor = () => {
    const displayTask = (task) => {
        ;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.ui)().initEditorClone();

        if (editorCardContainer.contains(document.getElementById('submitTask'))) {
            displayUpdate(task);
            displayDelete();
        }
        
        setTitle(task);
        setPriority(task);
        setDueDate(task);
        setTargetList(task);
        displaySubtask(task);
        setNotes(task);

        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.ui)().setPlaceholder(currentTask);
        currentTask.blur();
    }

    const displayUpdate = (task) => {
        const buttonContainer = editorCardContainer.querySelector('.buttonContainer');
        buttonContainer.removeChild(submitTask);

        const updateTask = document.createElement('button');
        updateTask.id = 'updateTask';
        updateTask.classList.add('textButton', 'submit');
        updateTask.textContent = 'Update Task';
        buttonContainer.append(updateTask);
        
        updateTask.addEventListener('click', () => {
            handleUpdate(task);
        });
    }

    const displayDelete = () => {
        const buttonContainer = editorCardContainer.querySelector('.buttonContainer');
        buttonContainer.removeChild(cancelEditor);

        const deleteTask = document.createElement('button');
        deleteTask.id = 'deleteTask';
        deleteTask.classList.add('textButton', 'delete');
        deleteTask.textContent = 'Delete Task';
        buttonContainer.prepend(deleteTask);

        deleteTask.addEventListener('click', (e) => {
            const activeTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.tasks)().getActiveTask(_data__WEBPACK_IMPORTED_MODULE_2__.navLists[0].tasks, e)
            ;(0,_task__WEBPACK_IMPORTED_MODULE_1__.tasks)().remove(_data__WEBPACK_IMPORTED_MODULE_2__.navLists[0].tasks, activeTask);
            (0,_task__WEBPACK_IMPORTED_MODULE_1__.tasks)().display(_data__WEBPACK_IMPORTED_MODULE_2__.navLists[0].tasks);
            content.removeChild(editorCardContainer);
        });
    }

    const handleForm = () => {
        const targetList = getTargetList();
        let taskDestination;
        (targetList === 'All tasks') ?
            taskDestination = _data__WEBPACK_IMPORTED_MODULE_2__.navLists.find( ({title}) => title = targetList) :
            taskDestination = _data__WEBPACK_IMPORTED_MODULE_2__.userLists.find( ({title}) => title === targetList)
        
        const taskID = _data__WEBPACK_IMPORTED_MODULE_2__.navLists[0].tasks.length + 1;
        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(getTitle(), getPriority(), getDueDate(), getTargetList(), '', getNotes(), '', taskID)
        
        taskDestination.tasks.push(newTask);
    }

    const handleUpdate = (task) => {
        const title = getTitle();
        task.title = title;

        const priority = getPriority();
        task.priority = priority;

        const dueDate = getDueDate();
        task.dueDate = dueDate;

        const list = getTargetList();
        task.list = list;

        const notes = getNotes();
        task.notes = notes;

        (0,_task__WEBPACK_IMPORTED_MODULE_1__.tasks)().display(_data__WEBPACK_IMPORTED_MODULE_2__.navLists[0].tasks);
    }

    const getTitle = () => {
        const currentTask = document.getElementById('currentTask');
        if (currentTask.value === '') {
            return currentTask.placeholder;
        } else {
            return currentTask.value;
        }
    }

    const setTitle = (task) => {
        if (task.title === '') return

        const currentTask = document.getElementById('currentTask');
        currentTask.value = task.title;
    }

    const getPriority = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const activePriority = priorities.find( ({ classList }) => classList.contains('clicked'))

        if (activePriority === undefined) return

        return activePriority.dataset.priority
    }

    const setPriority = (task) => {
        if (task.priority === '') return
        
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        priorities.forEach(priority => {
            priority.classList.remove('clicked');
        })

        const priority = task.priority;
        if (priority === '') {
            return
        } else if (priority === 'critical') {
            document.querySelector('[data-priority="critical"]').classList.add('clicked');
        } else if (priority === 'important') {
            document.querySelector('[data-priority="important"]').classList.add('clicked');
        } else if (priority === 'low') {
            document.querySelector('[data-priority="low"]').classList.add('clicked');
        }
    }

    const getDueDate = () => {
        const dueDate = document.getElementById('dueDate');
        return dueDate.value;
    }

    const setDueDate = (task) => {
        if (task.dueDate === '') return

        const dueDate = document.getElementById('dueDate');
        dueDate.value = task.dueDate;
    }

    const getTargetList = () => {
        const listDropdown = document.getElementById('listDropdown');
        return listDropdown.value
    }

    const setTargetList = (task) => {
        if (task.list === '') return

        const listDropdown = document.getElementById('listDropdown');
        listDropdown.value = task.list;
    }

    const handleSubtask = (task) => {
        const subtaskContainer = document.getElementById('subtaskContainer');
        const subtaskTemplate = document.getElementById('subtask-template');
        const subtaskClone = document.importNode(subtaskTemplate.content, true);
        subtaskContainer.appendChild(subtaskClone);

        const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
        const index = task.subtasks.length;

        subtasks[index].focus();

        subtasks[index].addEventListener('focusout', () => {
            if (subtasks[index].value === '') return

            const newSubtask = Subtask(subtasks[index].value, task.subtasks.length + 1);
            task.subtasks.push(newSubtask);
        });
    }

    const displaySubtask = (task) => {
        if (task.subtasks === '') return

        const subtaskContainer = document.getElementById('subtaskContainer');
        const currentSubtasks = task.subtasks;

        subtaskContainer.innerHTML = '';
        currentSubtasks.forEach(subtask => {
            const subtaskTemplate = document.getElementById('subtask-template');
            const subtaskClone = document.importNode(subtaskTemplate.content, true);
            subtaskContainer.appendChild(subtaskClone);

            const subtasks = Array.from(document.querySelectorAll('[data-subtask]'));
            const index = currentSubtasks.indexOf(subtask);

            subtasks[index].value = subtask.title;
        })
    }

    const getNotes = () => {
        const notes = document.getElementById('notes');
        return notes.value
    }

    const setNotes = (task) => {
        if (task.notes === '') return

        const notes = document.getElementById('notes');
        notes.value = task.notes;
    }

    const initListDropdown = (listArray) => {
        listDropdown.innerHTML = '';

        const option = document.createElement('option');
        option.value = 'All tasks';
        option.textContent = 'All tasks';
        listDropdown.appendChild(option);

        listArray.forEach(list => {
            const option = document.createElement('option');
            option.value = list.title;
            option.textContent = list.title;
            listDropdown.appendChild(option);
        })
    }

    return { displayTask, handleForm, getTargetList, handleSubtask, initListDropdown }
}



/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "lists": () => (/* binding */ lists)
/* harmony export */ });
/* harmony import */ var _src_img_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/img/delete.png */ "./src/img/delete.png");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



const List = (title, description, tasks, listID) => {

    return { title, description, tasks, listID }
}

const lists = () => {
    const display = (listArray) => {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        listArray.forEach(list => {
            const listTemplate = document.getElementById('list-template');
            const listClone = document.importNode(listTemplate.content, true);
            listContainer.appendChild(listClone);

            const lists = Array.from(document.querySelectorAll('[data-list]'));
            const deleteIcons = Array.from(document.querySelectorAll('[data-delete]'));
            const index = listArray.indexOf(list);

            lists[index].textContent = list.title;
            lists[index].dataset.list = list.listID;
            lists[index].addEventListener('click', (e) => {
                const activeList = getActiveList(listArray, e);
                (0,_ui__WEBPACK_IMPORTED_MODULE_1__.ui)().renderUserList(activeList);
            });

            deleteIcons[index].src = _src_img_delete_png__WEBPACK_IMPORTED_MODULE_0__;
            deleteIcons[index].addEventListener('click', (e) => {
                const activeList = getActiveList(listArray, e);
                remove(listArray, activeList);
            });
        });
    }

    const handleForm = (listArray) => {    
        const listID = listArray.length + 1;
        const newList = List(getTitleFromInput(), getDescriptionFromInput(), [], listID);
        
        listArray.push(newList);
        display(listArray);

        return newList
    }

    const remove = (listArray, list) => {
        const index = listArray.indexOf(list);
        listArray.splice(index, 1);
        resetIDs(listArray);
        display(listArray);
    }

    const getTitleFromInput = () => {
        const listTitle = document.getElementById('listTitle');
        return listTitle.value;
    }

    const getDescriptionFromInput = () => {
        const listDescription = document.getElementById('listDescription');
        return listDescription.value;
    }
    
    const updateTitle = (list) => {
        const title = getTitleFromInput();

        if (title === '') return
        
        list.title = title;
    }

    const updateDescription = (list) => {
        const description = getDescriptionFromInput();

        if (description === '') return
        
        list.description = description;
    }

    const getActiveList = (listArray, e) => {
        if (e.target.dataset.list === undefined) {
            const target = e.currentTarget;
            const sibling = target.previousElementSibling;

            const elementID = parseInt(sibling.dataset.list);
            const activeList = listArray.find( ({ listID }) => listID === elementID);

            return activeList
        } else {
            const elementID = parseInt(e.target.dataset.list);
            const activeList = listArray.find( ({ listID }) => listID === elementID);
            
            return activeList
        } 
    }

    const resetIDs = (listArray) => {
        let i = 1;
        listArray.forEach(list => {
            list.listID = i;
            i++;
        });
    }

    return { display, handleForm, updateTitle, updateDescription, getActiveList }
}



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/modules/editor.js");


const Task = (title, priority, dueDate, list, subtasks, notes, completed, taskID) => {

    return { title, priority, dueDate, list, subtasks, notes, completed, taskID, }
}

const tasks = () => {
// Add mark as complete functionality

    const display = (taskArray) => {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';
    
        taskArray.forEach(task => {
            const taskTemplate = document.getElementById('task-template');
            const taskClone = document.importNode(taskTemplate.content, true);
            taskContainer.appendChild(taskClone);

            const tasks = Array.from(document.querySelectorAll('[data-task]'));
            const index = taskArray.indexOf(task);

            tasks[index].textContent = task.title;
            tasks[index].dataset.task = task.taskID;

            tasks[index].addEventListener('click', (e) => {
                const activeTask = getActiveTask(taskArray, e);
                (0,_editor__WEBPACK_IMPORTED_MODULE_0__.editor)().displayTask(activeTask);
            });
        });
    }

    const handleQuickAdd = (listArray, e) => {
        e.preventDefault();
    
        const title = getTitle()
        let taskID;

        if (listArray.length === undefined) {
            taskID = listArray.tasks.length + 1;
        } else {
            taskID = listArray.length + 1;
        }

        const newTask = Task(title, '', '', '', [], '', '', taskID);
        
        if (listArray.tasks === undefined) {
            listArray.push(newTask);
            quickAddTask.value = '';
    
            display(listArray);
        } else {
            listArray.tasks.push(newTask);
            
            quickAddTask.value = '';
    
            display(listArray.tasks);
        }
    }

    const remove = (taskArray, task) => {
        const index = taskArray.indexOf(task);
        taskArray.splice(index, 1);
        resetIDs(taskArray);
        display(taskArray);
    }

    const getTitle = () => {
        const quickAddTask = document.getElementById('quickAddTask');
        return quickAddTask.value;
    }

    const getActiveTask = (taskArray, e) => {
        if (e.target.id === 'createSubtaskButton') {
            const currentTaskText = e.target.parentNode.parentNode.firstChild.nextElementSibling.placeholder;
            const activeTask = taskArray.find( ({title}) => title === currentTaskText);

            return activeTask
        } else if (e.target.id === 'deleteTask') {
            const currentTaskText = e.target.parentNode.previousElementSibling.firstChild.nextElementSibling.placeholder;
            const activeTask = taskArray.find( ({title}) => title === currentTaskText);
           
            return activeTask
        } else {
            const elementID = parseInt(e.target.dataset.task);
            const activeTask = taskArray.find( ({ taskID }) => taskID === elementID);
    
            return activeTask
        }
    }

    const resetIDs = (taskArray) => {
        let i = 1;
        taskArray.forEach(task => {
            task.taskID = i;
            i++
        })
    }

    return { display, handleQuickAdd, remove, getActiveTask, }
}



/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _src_img_icon_cat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/img/icon-cat.png */ "./src/img/icon-cat.png");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.js */ "./src/modules/editor.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./src/modules/data.js");







const ui = () => {
    const allTasks = _data_js__WEBPACK_IMPORTED_MODULE_5__.navLists[0].tasks;

    const initListClone = () => {
        if (content.contains(document.getElementById('listCardContainer'))) {
            document.getElementById('listCardContainer').remove();
        }

        if (content.contains(document.getElementById('todoCardContainer'))) {
            document.getElementById('todoCardContainer').remove();
        }

        const listCardTemplate = document.getElementById('listCard-template');
        const listCardClone = document.importNode(listCardTemplate.content, true);
        content.appendChild(listCardClone);

        const listTitle = document.getElementById('listTitle');
        const listDescription = document.getElementById('listDescription');

        listTitle.focus();
        addListListeners();

        return { listTitle, listDescription }
    }

    const addListListeners = () => {
        const cancelLlist = document.getElementById('cancelList');
        const submitList = document.getElementById('submitList');

        cancelLlist.addEventListener('click', () => {
            initTodoClone();
            renderNavOption('All tasks')
        });
        
        submitList.addEventListener('click', () => {
            const newList = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().handleForm(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists);
            renderUserList(newList);
        });
    }

    const initTodoClone = () => {
        if (content.contains(document.getElementById('todoCardContainer'))) {
            document.getElementById('todoCardContainer').remove();
        }

        if (content.contains(document.getElementById('listCardContainer'))) {
            document.getElementById('listCardContainer').remove();
        }

        const todoCardTemplate = document.getElementById('todoCard-template');
        const todoCardClone = document.importNode(todoCardTemplate.content, true);
        content.appendChild(todoCardClone);

        const todoCardContainer = document.getElementById('todoCardContainer');
        const listTitle = document.getElementById('listTitle');
        const listDescription = document.getElementById('listDescription');
        const submitQuickAdd = document.getElementById('submitQuickAdd');

        return { todoCardContainer, listTitle, listDescription, submitQuickAdd }
    }

    const addTitleListeners = () => {
        listTitle.addEventListener('focus', () => {
            setPlaceholder(listTitle);
        }, { once: true });

        listTitle.addEventListener('focusout', (e) => {
            const activeList = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().getActiveList(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists, e);
            (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().updateTitle(activeList);
            (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().display(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists);
        });
    }

    const addDescriptionListeners = () => {
        listDescription.addEventListener('focus', () => {
            setPlaceholder(listDescription);
        }, { once: true });

        listDescription.addEventListener('focusout', (e) => {
            const activeList = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().getActiveList(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists, e);
            (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().updateDescription(activeList);
        });
    }

    const initEditorClone = () => {
        if (content.contains(document.getElementById('editorCardContainer'))) {
            document.getElementById('editorCardContainer').remove();
        }

        const editorCardTemplate = document.getElementById('editorCard-template');
        const editorClone = document.importNode(editorCardTemplate.content, true);
        content.prepend(editorClone);

        const editorForm = document.getElementById('editorForm');
        const currentTask = document.getElementById('currentTask');
        const dueDate = document.getElementById('dueDate');
        const listDropdown = document.getElementById('listDropdown');
        const subtaskContainer = document.getElementById('subtaskContainer');
        const notes = document.getElementById('notes');

        currentTask.focus();
        (0,_editor_js__WEBPACK_IMPORTED_MODULE_4__.editor)().initListDropdown(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists);
        addEditorListeners();

        return { editorForm, currentTask, dueDate, listDropdown, subtaskContainer, notes }
    }

    const addEditorListeners = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));
        const createSubtaskButton = document.getElementById('createSubtaskButton');
        const submitTask = document.getElementById('submitTask');
        const cancelEditor = document.getElementById('cancelEditor');

        priorities.forEach(priority => {
            priority.addEventListener('click', (e) => {
                removeClickedClass();
                e.target.classList.add('clicked');
            });
        });

        createSubtaskButton.addEventListener('click', (e) => {
            const activeTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().getActiveTask(allTasks, e);
            (0,_editor_js__WEBPACK_IMPORTED_MODULE_4__.editor)().handleSubtask(activeTask);
        });

        submitTask.addEventListener('click', () => {
            (0,_editor_js__WEBPACK_IMPORTED_MODULE_4__.editor)().handleForm();
            (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().display(allTasks);
            content.removeChild(editorCardContainer);
        });

        cancelEditor.addEventListener('click', (e) => {
            content.removeChild(editorCardContainer);
        })
    }

    const renderNavOption = (nav) => {
        initTodoClone();

        listTitle.value = nav.title;
        listTitle.setAttribute('readonly', 'readonly'); 
    
        todoCardContainer.removeChild(listDescription);

        (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().display(allTasks); 
        submitQuickAdd.addEventListener('click', (e) => {
            (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().handleQuickAdd(allTasks, e)
        });
    }

    const renderUserList = (list) => {
        initTodoClone();

        listTitle.value = list.title;
        listTitle.dataset.list = list.listID;
        addTitleListeners();
        
        if (list.description === '') {
            todoCardContainer.removeChild(listDescription);
        } else {
            listDescription.value = list.description;
            listDescription.dataset.list = list.listID;
            addDescriptionListeners();
        }

        if (list.tasks === '') { 
            submitQuickAdd.addEventListener('click', (e) => {
                (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().handleQuickAdd(list, e);
            });
        } else {
            (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().display(list.tasks); 

            submitQuickAdd.addEventListener('click', (e) => {
                (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.tasks)().handleQuickAdd(list, e);
            });
        }
    }

    const initPage = () => {
        const iconContainer = document.getElementById('iconContainer');
        const taskCatIcon = new Image(60, 60);
        taskCatIcon.src = _src_img_icon_cat_png__WEBPACK_IMPORTED_MODULE_1__;
        iconContainer.appendChild(taskCatIcon);
        _data_js__WEBPACK_IMPORTED_MODULE_5__.navLists[0].tasks = data().getAllTasks();
        renderNavOption(_data_js__WEBPACK_IMPORTED_MODULE_5__.navLists[0]);
        (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.lists)().display(_data_js__WEBPACK_IMPORTED_MODULE_5__.userLists);
        addPageListeners();
    }

    const addPageListeners = () => {
        const createTaskButton = document.getElementById('createTaskButton');
        const addListButton = document.getElementById('addListButton');
        const navOptions = document.querySelectorAll('[data-navOption]');
        
        createTaskButton.addEventListener('click', initEditorClone);
        addListButton.addEventListener('click', initListClone);
        navOptions.forEach(option => {
            option.addEventListener('click', () => {
                const activeOption = (_data_js__WEBPACK_IMPORTED_MODULE_5__.navLists.find( ({title}) => title === option.dataset.navoption));
                renderNavOption(activeOption);
            });
        }); 
    }

    const setPlaceholder = (element) => {
        element.placeholder = element.value;
        element.value = '';
    }

    const removeClickedClass = () => {
        const priorities = Array.from(document.querySelectorAll('[data-priority]'));

        priorities.forEach(priority => {
            if (priority.classList.contains('clicked')) {
                priority.classList.remove('clicked');
            }
        });
    }

    return { initPage, initEditorClone, renderUserList, setPlaceholder, }
}



/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f099a57596aa547ba1cc.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLGFBQWEsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGdHQUFnRyxtQkFBbUIsV0FBVyw4QkFBOEIsK0JBQStCLGtDQUFrQyw2QkFBNkIsMENBQTBDLDREQUE0RCxHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQixvQkFBb0IsaUNBQWlDLEdBQUcsVUFBVSw2Q0FBNkMsR0FBRyxRQUFRLHNCQUFzQix1QkFBdUIsR0FBRyxRQUFRLHdCQUF3Qix1QkFBdUIsR0FBRyxRQUFRLHdCQUF3Qix1QkFBdUIsR0FBRyxZQUFZLHNCQUFzQixtQkFBbUIsdURBQXVELHlCQUF5QixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksbUJBQW1CLG9EQUFvRCwyQkFBMkIseUJBQXlCLEdBQUcsK0JBQStCLG9CQUFvQix1Q0FBdUMsR0FBRyxjQUFjLG1CQUFtQix3QkFBd0IsbUJBQW1CLG9CQUFvQixzREFBc0QseUJBQXlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixHQUFHLDZDQUE2QyxvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIsR0FBRyxjQUFjLHNCQUFzQixvQkFBb0IscUNBQXFDLHFDQUFxQywwQkFBMEIsa0JBQWtCLEdBQUcsY0FBYyx5QkFBeUIseUJBQXlCLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLEdBQUcsbUJBQW1CLHNCQUFzQixtQkFBbUIseUJBQXlCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLDJDQUEyQyxzQkFBc0IsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQixtQkFBbUIsbUJBQW1CLDZDQUE2Qyx5QkFBeUIsdUJBQXVCLEdBQUcsa0JBQWtCLHFCQUFxQixvQkFBb0IsdUJBQXVCLEdBQUcsNkNBQTZDLDZCQUE2QixHQUFHLHdCQUF3Qiw2QkFBNkIsR0FBRyxhQUFhLHFCQUFxQixzQkFBc0IsR0FBRyxhQUFhLHNCQUFzQixHQUFHLHlFQUF5RSx1QkFBdUIsd0JBQXdCLGdEQUFnRCwwQkFBMEIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsZUFBZSx1QkFBdUIsbUJBQW1CLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsR0FBRyxlQUFlLCtCQUErQix1QkFBdUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsNENBQTRDLHlCQUF5Qiw2Q0FBNkMsdUNBQXVDLG9CQUFvQiw0QkFBNEIsR0FBRyxzQkFBc0Isb0JBQW9CLHNCQUFzQixxQkFBcUIsMEJBQTBCLG9DQUFvQyxvQ0FBb0Msc0RBQXNELDhFQUE4RSxHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLGtCQUFrQixtQkFBbUIsR0FBRyxlQUFlLG1CQUFtQix1QkFBdUIseUJBQXlCLHVCQUF1QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLG1CQUFtQixzQkFBc0IsbUJBQW1CLGtEQUFrRCxtQ0FBbUMsc0NBQXNDLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IscUJBQXFCLGtCQUFrQixtQkFBbUIsb0NBQW9DLHVDQUF1QywyQ0FBMkMsdUJBQXVCLEdBQUcsMkJBQTJCLDZCQUE2QixHQUFHLHNEQUFzRCxzQkFBc0IsdUJBQXVCLHdCQUF3QixnREFBZ0QsMEJBQTBCLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsbUJBQW1CLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLEdBQUcsd0JBQXdCLG9CQUFvQixrQkFBa0IsR0FBRyxlQUFlLHNCQUFzQixxQkFBcUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyxjQUFjLDRCQUE0QixHQUFHLGVBQWUsZ0NBQWdDLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLFVBQVUsaUNBQWlDLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsOEJBQThCLHNCQUFzQixtQkFBbUIscUJBQXFCLDRDQUE0Qyw2QkFBNkIsNEJBQTRCLDZDQUE2Qyx5QkFBeUIsdUJBQXVCLEdBQUcsMENBQTBDLDhCQUE4QixHQUFHLHVCQUF1Qix5QkFBeUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsR0FBRywwQkFBMEIseUJBQXlCLHNCQUFzQiw2QkFBNkIsR0FBRyxpQkFBaUIsc0JBQXNCLHdCQUF3QixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLGtCQUFrQixtQkFBbUIsbUJBQW1CLDZDQUE2QyxzQkFBc0IsR0FBRyxZQUFZLG1CQUFtQixtQkFBbUIsNENBQTRDLDZCQUE2QixzQkFBc0IsNkNBQTZDLG1CQUFtQix1QkFBdUIsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsMkNBQTJDLDRCQUE0QixHQUFHLG1CQUFtQjtBQUM3cmlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0I7O0FBRXJDO0FBQ0EsSUFBSSxrREFBRTtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWU7O0FBRWYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSw0R0FBNEcseUJBQXlCLCtDQUErQztBQUNqTSxjQUFjOztBQUVkLEtBQUs7QUFDTDtBQUNBLGFBQWEsOEdBQThHLDBCQUEwQixnREFBZ0Q7QUFDck0sY0FBYztBQUNkO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxzR0FBc0csMEJBQTBCLGdEQUFnRDtBQUM3TCxjQUFjO0FBQ2Q7O0FBRUE7O0FBRTJDOztBQUUzQyxLQUFLLDRHQUE0Ryx5QkFBeUIsR0FBRyx5QkFBeUIsa0RBQWtEO0FBQ3hOLElBQUksOEdBQThHLDBCQUEwQixnREFBZ0Q7QUFDNUwsSUFBSSxzR0FBc0csMEJBQTBCLGdEQUFnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEeEo7QUFDUTtBQUNROztBQUU1QztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBRTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsMENBQUU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRDQUFLLGlCQUFpQixvREFBaUI7QUFDdEUsWUFBWSw2Q0FBSyxVQUFVLG9EQUFpQjtBQUM1QyxZQUFZLDRDQUFLLFdBQVcsb0RBQWlCO0FBQzdDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhLElBQUksTUFBTTtBQUNyRCw4QkFBOEIsaURBQWMsSUFBSSxNQUFNO0FBQ3REO0FBQ0EsdUJBQXVCLDJEQUF3QjtBQUMvQyx3QkFBd0IsMkNBQUk7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsNENBQUssV0FBVyxvREFBaUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVzs7QUFFOUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTytDO0FBQ3JCOztBQUUxQjs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFFO0FBQ2xCLGFBQWE7O0FBRWIscUNBQXFDLGdEQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsUUFBUTs7QUFFMUQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdpQzs7QUFFakM7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QixhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBTTs7QUFFdkQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxpREFBaUQsTUFBTTtBQUN2RDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR3dCO0FBQ2lCO0FBQ1A7QUFDQTtBQUNFO0FBQ3lCOztBQUU3RDtBQUNBLHFCQUFxQix1REFBaUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQUssY0FBYywrQ0FBUztBQUN4RDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTs7QUFFekI7QUFDQSwrQkFBK0IsK0NBQUssaUJBQWlCLCtDQUFTO0FBQzlELFlBQVksK0NBQUs7QUFDakIsWUFBWSwrQ0FBSyxXQUFXLCtDQUFTO0FBQ3JDLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTs7QUFFekI7QUFDQSwrQkFBK0IsK0NBQUssaUJBQWlCLCtDQUFTO0FBQzlELFlBQVksK0NBQUs7QUFDakIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFNLG9CQUFvQiwrQ0FBUztBQUMzQzs7QUFFQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0EsK0JBQStCLCtDQUFLO0FBQ3BDLFlBQVksa0RBQU07QUFDbEIsU0FBUzs7QUFFVDtBQUNBLFlBQVksa0RBQU07QUFDbEIsWUFBWSwrQ0FBSztBQUNqQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsK0NBQUs7QUFDYjtBQUNBLFlBQVksK0NBQUs7QUFDakIsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUs7QUFDckIsYUFBYTtBQUNiLFVBQVU7QUFDVixZQUFZLCtDQUFLOztBQUVqQjtBQUNBLGdCQUFnQiwrQ0FBSztBQUNyQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQUk7QUFDOUI7QUFDQSxRQUFRLHVEQUFpQjtBQUN6Qix3QkFBd0IsaURBQVc7QUFDbkMsUUFBUSwrQ0FBSyxXQUFXLCtDQUFTO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1EQUFhLElBQUksTUFBTTtBQUM3RDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMWYyOTM3O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmOWZhZmI7XFxuICAgIC0tYWNjZW50LXNlY29uZGFyeTogI2U1ZTdlYjtcXG4gICAgLS1hY2NlbnQtbWFpbjogIzBlYTVlOTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoMC41cmVtICsgMC41dncpLCAxLjc1cmVtKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogQm9keSBzdHlsaW5nICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDJmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgyMHB4O1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4jbmF2TGlzdHMsXFxuI3VzZXJMaXN0cyxcXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS4yNXJlbTtcXG59XFxuXFxuLmxpc3RCb3gge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAycmVtIDdyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5ib3JkZXJCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbWFpbik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLnRleHRCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4uaW1hZ2VCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLmJvcmRlckJ1dHRvbjpob3ZlcixcXG4udGV4dEJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5pbWFnZUJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICBjb2xvcjogI2RjMjYyNjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBUYXNrQ2FyZCBzdHlsaW5nICovXFxuXFxuI3RvZG9DYXJkQ29udGFpbmVyLFxcbiNsaXN0Q2FyZENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDY3NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubGlzdEluZm8ge1xcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2xpc3REZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4jdGFza0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnRhc2tCb3gge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1cmVtKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3g6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMC42NXJlbTtcXG4gICAgd2lkdGg6IDAuNjVyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc21hbGxlciB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrVGV4dCB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4udGFza1RleHQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuXFxuI3F1aWNrQWRkQmFyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3F1aWNrQWRkVGFzayB7XFxuICAgIGhlaWdodDogMy4xNXJlbTtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbiNzdWJtaXRRdWlja0FkZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjJyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4jc3VibWl0UXVpY2tBZGQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5cXG4vKiBFZGl0b3JDYXJkIHN0eWxpbmcgKi9cXG4jZWRpdG9yQ2FyZENvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLWhlaWdodDogNjc1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNlZGl0b3JGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jY3VycmVudFRhc2sge1xcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3ByaW9yaXR5Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4ucHJpb3JpdHk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY3JpdGljYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbn1cXG5cXG4uaW1wb3J0YW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDM0ZDtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWU3YjcgO1xcbn1cXG5cXG4uZWRpdE9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuI2R1ZURhdGUsXFxuI2xpc3REcm9wZG93biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTIuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4jZHVlRGF0ZTpob3ZlcixcXG4jbGlzdERyb3Bkb3duOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XFxufVxcblxcbiNzdWJ0YXNrQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuI2NyZWF0ZVN1YnRhc2tCdXR0b24ge1xcbiAgICBtYXJnaW46IDAgMCAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnN1YnRhc2tCb3gge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnN1YnRhc2tUZXh0IHtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNub3RlcyB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbiNub3Rlczpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSkgO1xcbn1cXG5cXG4jZGVsZXRlVGFzazpob3ZlcixcXG4jc3VibWl0VGFzazpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQSxxQkFBcUI7O0FBRXJCOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMxZjI5Mzc7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2Y5ZmFmYjtcXG4gICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjZTVlN2ViO1xcbiAgICAtLWFjY2VudC1tYWluOiAjMGVhNWU5O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgY2FsYygwLjVyZW0gKyAwLjV2dyksIDEuNzVyZW0pO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBCb2R5IHN0eWxpbmcgKi9cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMmZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODIwcHg7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbiNuYXZMaXN0cyxcXG4jdXNlckxpc3RzLFxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjI1cmVtO1xcbn1cXG5cXG4ubGlzdEJveCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDJyZW0gN3JlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvcmRlckJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1tYWluKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4udGV4dEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi5pbWFnZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4uYm9yZGVyQnV0dG9uOmhvdmVyLFxcbi50ZXh0QnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmltYWdlQnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIGNvbG9yOiAjZGMyNjI2O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcblxcbi8qIFRhc2tDYXJkIHN0eWxpbmcgKi9cXG5cXG4jdG9kb0NhcmRDb250YWluZXIsXFxuI2xpc3RDYXJkQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLWhlaWdodDogNjc1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5saXN0SW5mbyB7XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jbGlzdERlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbiN0YXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udGFza0JveCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVyZW0pO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAwLjY1cmVtO1xcbiAgICB3aWR0aDogMC42NXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zbWFsbGVyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2tUZXh0IHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50YXNrVGV4dDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xcbn1cXG5cXG4jcXVpY2tBZGRCYXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcXVpY2tBZGRUYXNrIHtcXG4gICAgaGVpZ2h0OiAzLjE1cmVtO1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuI3N1Ym1pdFF1aWNrQWRkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDMuMnJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbWFpbik7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbiNzdWJtaXRRdWlja0FkZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcblxcbi8qIEVkaXRvckNhcmQgc3R5bGluZyAqL1xcbiNlZGl0b3JDYXJkQ29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA2NzVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2VkaXRvckZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNjdXJyZW50VGFzayB7XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jcHJpb3JpdHlDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi5wcmlvcml0eTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jcml0aWNhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxufVxcblxcbi5pbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkMzRkO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlZTdiNyA7XFxufVxcblxcbi5lZGl0T3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jZHVlRGF0ZSxcXG4jbGlzdERyb3Bkb3duIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbiNkdWVEYXRlOmhvdmVyLFxcbiNsaXN0RHJvcGRvd246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuXFxuI3N1YnRhc2tDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4jY3JlYXRlU3VidGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3VidGFza0JveCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uc3VidGFza1RleHQge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI25vdGVzIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuI25vdGVzOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKSA7XFxufVxcblxcbiNkZWxldGVUYXNrOmhvdmVyLFxcbiNzdWJtaXRUYXNrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdWkgfSBmcm9tICcuL21vZHVsZXMvdWkuanMnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHVpKCkuaW5pdFBhZ2UoKTtcbn0iLCJjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xuICAgIHVzZXJMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGxpc3QudGFza3M7XG4gICAgICAgIGFsbFRhc2tzLnB1c2godGFza3MpO1xuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGFsbFRhc2tzO1xufVxuXG5nZXRBbGxUYXNrcygpO1xuXG5jb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuXG59XG5cbmNvbnN0IGdldFdlZWtUYXNrcyA9ICgpID0+IHtcbiAgICBcbn1cblxuY29uc3QgbmF2TGlzdHMgPSBbXG4gICAge3RpdGxlOiAnQWxsIHRhc2tzJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGFza3M6IFtdLFxuICAgIGxpc3RJRDogJyd9LFxuICAgIFxuICAgIHt0aXRsZTogJ1RvZGF5JyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGFza3M6IFtdLFxuICAgIGxpc3RJRDogJyd9LFxuXG4gICAge3RpdGxlOiAnVGhpcyB3ZWVrJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGFza3M6IFtdLFxuICAgIGxpc3RJRDogJyd9XG5dXG5cbmNvbnN0IHVzZXJMaXN0cyA9IFtcbiAgICB7dGl0bGU6ICdMaXN0IDEnLCBcbiAgICBkZXNjcmlwdGlvbjogJ2Zvb2JhcicsIFxuICAgIHRhc2tzOiBbe3RpdGxlOiAnQ3JpdGljYWwgdGFzaycsIHByaW9yaXR5OiAnY3JpdGljYWwnLCBkdWVEYXRlOiAnMjAyMi0xMC0yMlQxNjoyMCcsIGxpc3Q6ICdUZXN0IGxpc3QgMScsIHN1YnRhc2tzOiBbe3RpdGxlOiAnZm9vJywgc3VidGFzazogMX1dLCBub3RlczogJ2JhcicsIGNvbXBsZXRlZDogJ2ZhbHNlJywgdGFza0lEOiAxfV0sIFxuICAgIGxpc3RJRDogMX0sXG5cbiAgICB7dGl0bGU6ICdMaXN0IDInLCBcbiAgICBkZXNjcmlwdGlvbjogJ2Zvb2JhciEnLCBcbiAgICB0YXNrczogW3t0aXRsZTogJ0ltcG9ydGFudCB0YXNrJywgcHJpb3JpdHk6ICdpbXBvcnRhbnQnLCBkdWVEYXRlOiAnMjAyMi0xMC0yMlQxNjoyMCcsIGxpc3Q6ICdUZXN0IGxpc3QgMicsIHN1YnRhc2tzOiBbe3RpdGxlOiAnZm9vIScsIHN1YnRhc2s6IDF9XSwgbm90ZXM6ICdiYXIhJywgY29tcGxldGVkOiAnZmFsc2UnLCB0YXNrSUQ6IDJ9XSwgXG4gICAgbGlzdElEOiAyfSxcbiAgICBcbiAgICB7dGl0bGU6ICdMaXN0IDMnLCBcbiAgICBkZXNjcmlwdGlvbjogJ2Zvb2Jhcj8nLCBcbiAgICB0YXNrczogW3t0aXRsZTogJ1JlZ3VsYXIgdGFzaycsIHByaW9yaXR5OiAnbG93JywgZHVlRGF0ZTogJzIwMjItMTAtMjJUMTY6MjAnLCBsaXN0OiAnVGVzdCBsaXN0IDMnLCBzdWJ0YXNrczogW3t0aXRsZTogJ2Zvbz8nLCBzdWJ0YXNrOiAxfV0sIG5vdGVzOiAnYmFyPycsIGNvbXBsZXRlZDogJ2ZhbHNlJywgdGFza0lEOiAzfV0sIFxuICAgIGxpc3RJRDogM30sXG5dXG5cbmNvbnN0IHVuYXNzaWduZWRUYXNrcyA9IFtdO1xuXG5leHBvcnQgeyB1c2VyTGlzdHMsIG5hdkxpc3RzLCBnZXRBbGxUYXNrcyB9XG5cbi8vIFt7dGl0bGU6ICdDcml0aWNhbCB0YXNrJywgcHJpb3JpdHk6ICdjcml0aWNhbCcsIGR1ZURhdGU6ICcyMDIyLTEwLTIyVDE2OjIwJywgbGlzdDogJ1Rlc3QgbGlzdCAxJywgc3VidGFza3M6IFt7dGl0bGU6ICdmb28nLCBzdWJ0YXNrOiAxfSwge3RpdGxlOiAnYmFyJywgc3VidGFzazogMn1dLCBub3RlczogJ2Zvb2JhcicsIGNvbXBsZXRlZDogJ2ZhbHNlJywgdGFza0lEOiAxfSxcbi8vIHt0aXRsZTogJ0ltcG9ydGFudCB0YXNrJywgcHJpb3JpdHk6ICdpbXBvcnRhbnQnLCBkdWVEYXRlOiAnMjAyMi0xMC0yMlQxNjoyMCcsIGxpc3Q6ICdUZXN0IGxpc3QgMicsIHN1YnRhc2tzOiBbe3RpdGxlOiAnZm9vIScsIHN1YnRhc2s6IDF9XSwgbm90ZXM6ICdiYXIhJywgY29tcGxldGVkOiAnZmFsc2UnLCB0YXNrSUQ6IDJ9LFxuLy8ge3RpdGxlOiAnUmVndWxhciB0YXNrJywgcHJpb3JpdHk6ICdsb3cnLCBkdWVEYXRlOiAnMjAyMi0xMC0yMlQxNjoyMCcsIGxpc3Q6ICdUZXN0IGxpc3QgMycsIHN1YnRhc2tzOiBbe3RpdGxlOiAnZm9vPycsIHN1YnRhc2s6IDF9XSwgbm90ZXM6ICdiYXI/JywgY29tcGxldGVkOiAnZmFsc2UnLCB0YXNrSUQ6IDN9XSxcbiIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkuanNcIlxuaW1wb3J0IHsgVGFzaywgdGFza3MgfSBmcm9tIFwiLi90YXNrXCJcbmltcG9ydCB7IG5hdkxpc3RzLCB1c2VyTGlzdHMgfSBmcm9tIFwiLi9kYXRhXCJcblxuY29uc3QgU3VidGFzayA9ICh0aXRsZSwgdGFza0lEKSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIHRhc2tJRCB9XG59XG5cbmNvbnN0IGVkaXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5VGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHVpKCkuaW5pdEVkaXRvckNsb25lKCk7XG5cbiAgICAgICAgaWYgKGVkaXRvckNhcmRDb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFRhc2snKSkpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVcGRhdGUodGFzayk7XG4gICAgICAgICAgICBkaXNwbGF5RGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFRpdGxlKHRhc2spO1xuICAgICAgICBzZXRQcmlvcml0eSh0YXNrKTtcbiAgICAgICAgc2V0RHVlRGF0ZSh0YXNrKTtcbiAgICAgICAgc2V0VGFyZ2V0TGlzdCh0YXNrKTtcbiAgICAgICAgZGlzcGxheVN1YnRhc2sodGFzayk7XG4gICAgICAgIHNldE5vdGVzKHRhc2spO1xuXG4gICAgICAgIHVpKCkuc2V0UGxhY2Vob2xkZXIoY3VycmVudFRhc2spO1xuICAgICAgICBjdXJyZW50VGFzay5ibHVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVVwZGF0ZSA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGVkaXRvckNhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbkNvbnRhaW5lcicpO1xuICAgICAgICBidXR0b25Db250YWluZXIucmVtb3ZlQ2hpbGQoc3VibWl0VGFzayk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB1cGRhdGVUYXNrLmlkID0gJ3VwZGF0ZVRhc2snO1xuICAgICAgICB1cGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoJ3RleHRCdXR0b24nLCAnc3VibWl0Jyk7XG4gICAgICAgIHVwZGF0ZVRhc2sudGV4dENvbnRlbnQgPSAnVXBkYXRlIFRhc2snO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHVwZGF0ZVRhc2spO1xuICAgICAgICBcbiAgICAgICAgdXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVVwZGF0ZSh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheURlbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZWRpdG9yQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uQ29udGFpbmVyJyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChjYW5jZWxFZGl0b3IpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlVGFzay5pZCA9ICdkZWxldGVUYXNrJztcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0ZXh0QnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgICAgICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUYXNrJztcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnByZXBlbmQoZGVsZXRlVGFzayk7XG5cbiAgICAgICAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVUYXNrID0gdGFza3MoKS5nZXRBY3RpdmVUYXNrKG5hdkxpc3RzWzBdLnRhc2tzLCBlKVxuICAgICAgICAgICAgdGFza3MoKS5yZW1vdmUobmF2TGlzdHNbMF0udGFza3MsIGFjdGl2ZVRhc2spO1xuICAgICAgICAgICAgdGFza3MoKS5kaXNwbGF5KG5hdkxpc3RzWzBdLnRhc2tzKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdG9yQ2FyZENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldExpc3QgPSBnZXRUYXJnZXRMaXN0KCk7XG4gICAgICAgIGxldCB0YXNrRGVzdGluYXRpb247XG4gICAgICAgICh0YXJnZXRMaXN0ID09PSAnQWxsIHRhc2tzJykgP1xuICAgICAgICAgICAgdGFza0Rlc3RpbmF0aW9uID0gbmF2TGlzdHMuZmluZCggKHt0aXRsZX0pID0+IHRpdGxlID0gdGFyZ2V0TGlzdCkgOlxuICAgICAgICAgICAgdGFza0Rlc3RpbmF0aW9uID0gdXNlckxpc3RzLmZpbmQoICh7dGl0bGV9KSA9PiB0aXRsZSA9PT0gdGFyZ2V0TGlzdClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IG5hdkxpc3RzWzBdLnRhc2tzLmxlbmd0aCArIDE7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKGdldFRpdGxlKCksIGdldFByaW9yaXR5KCksIGdldER1ZURhdGUoKSwgZ2V0VGFyZ2V0TGlzdCgpLCAnJywgZ2V0Tm90ZXMoKSwgJycsIHRhc2tJRClcbiAgICAgICAgXG4gICAgICAgIHRhc2tEZXN0aW5hdGlvbi50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBnZXREdWVEYXRlKCk7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IGdldFRhcmdldExpc3QoKTtcbiAgICAgICAgdGFzay5saXN0ID0gbGlzdDtcblxuICAgICAgICBjb25zdCBub3RlcyA9IGdldE5vdGVzKCk7XG4gICAgICAgIHRhc2subm90ZXMgPSBub3RlcztcblxuICAgICAgICB0YXNrcygpLmRpc3BsYXkobmF2TGlzdHNbMF0udGFza3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFzaycpO1xuICAgICAgICBpZiAoY3VycmVudFRhc2sudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRhc2sucGxhY2Vob2xkZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRhc2sudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnRpdGxlID09PSAnJykgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhc2snKTtcbiAgICAgICAgY3VycmVudFRhc2sudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcmlvcml0eV0nKSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByaW9yaXR5ID0gcHJpb3JpdGllcy5maW5kKCAoeyBjbGFzc0xpc3QgfSkgPT4gY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpXG5cbiAgICAgICAgaWYgKGFjdGl2ZVByaW9yaXR5ID09PSB1bmRlZmluZWQpIHJldHVyblxuXG4gICAgICAgIHJldHVybiBhY3RpdmVQcmlvcml0eS5kYXRhc2V0LnByaW9yaXR5XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJycpIHJldHVyblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJpb3JpdHldJykpO1xuICAgICAgICBwcmlvcml0aWVzLmZvckVhY2gocHJpb3JpdHkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdjcml0aWNhbCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByaW9yaXR5PVwiY3JpdGljYWxcIl0nKS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcmlvcml0eT1cImltcG9ydGFudFwiXScpLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByaW9yaXR5PVwibG93XCJdJykuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgICAgIHJldHVybiBkdWVEYXRlLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSAnJykgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REcm9wZG93bicpO1xuICAgICAgICByZXR1cm4gbGlzdERyb3Bkb3duLnZhbHVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGFyZ2V0TGlzdCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmxpc3QgPT09ICcnKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsaXN0RHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdERyb3Bkb3duJyk7XG4gICAgICAgIGxpc3REcm9wZG93bi52YWx1ZSA9IHRhc2subGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJ0YXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3Qgc3VidGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJ0YXNrQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHN1YnRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJ0YXNrLXRlbXBsYXRlJyk7XG4gICAgICAgIGNvbnN0IHN1YnRhc2tDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUoc3VidGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBzdWJ0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRhc2tDbG9uZSk7XG5cbiAgICAgICAgY29uc3Qgc3VidGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN1YnRhc2tdJykpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhc2suc3VidGFza3MubGVuZ3RoO1xuXG4gICAgICAgIHN1YnRhc2tzW2luZGV4XS5mb2N1cygpO1xuXG4gICAgICAgIHN1YnRhc2tzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdWJ0YXNrc1tpbmRleF0udmFsdWUgPT09ICcnKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgbmV3U3VidGFzayA9IFN1YnRhc2soc3VidGFza3NbaW5kZXhdLnZhbHVlLCB0YXNrLnN1YnRhc2tzLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgdGFzay5zdWJ0YXNrcy5wdXNoKG5ld1N1YnRhc2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5U3VidGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnN1YnRhc2tzID09PSAnJykgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgc3VidGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJ0YXNrQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdWJ0YXNrcyA9IHRhc2suc3VidGFza3M7XG5cbiAgICAgICAgc3VidGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY3VycmVudFN1YnRhc2tzLmZvckVhY2goc3VidGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJ0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VidGFzay10ZW1wbGF0ZScpO1xuICAgICAgICAgICAgY29uc3Qgc3VidGFza0Nsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShzdWJ0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgICAgICBzdWJ0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRhc2tDbG9uZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YnRhc2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdWJ0YXNrXScpKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFN1YnRhc2tzLmluZGV4T2Yoc3VidGFzayk7XG5cbiAgICAgICAgICAgIHN1YnRhc2tzW2luZGV4XS52YWx1ZSA9IHN1YnRhc2sudGl0bGU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG4gICAgICAgIHJldHVybiBub3Rlcy52YWx1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNldE5vdGVzID0gKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2subm90ZXMgPT09ICcnKSByZXR1cm5cblxuICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpO1xuICAgICAgICBub3Rlcy52YWx1ZSA9IHRhc2subm90ZXM7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdExpc3REcm9wZG93biA9IChsaXN0QXJyYXkpID0+IHtcbiAgICAgICAgbGlzdERyb3Bkb3duLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSAnQWxsIHRhc2tzJztcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0FsbCB0YXNrcyc7XG4gICAgICAgIGxpc3REcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBsaXN0LnRpdGxlO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTtcbiAgICAgICAgICAgIGxpc3REcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlUYXNrLCBoYW5kbGVGb3JtLCBnZXRUYXJnZXRMaXN0LCBoYW5kbGVTdWJ0YXNrLCBpbml0TGlzdERyb3Bkb3duIH1cbn1cblxuZXhwb3J0IHsgU3VidGFzaywgZWRpdG9yIH0iLCJpbXBvcnQgZGVsZXRlQnV0dG9uIGZyb20gJy9zcmMvaW1nL2RlbGV0ZS5wbmcnO1xuaW1wb3J0IHsgdWkgfSBmcm9tICcuL3VpJztcblxuY29uc3QgTGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tzLCBsaXN0SUQpID0+IHtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3MsIGxpc3RJRCB9XG59XG5cbmNvbnN0IGxpc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSAobGlzdEFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGxpc3RBcnJheS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdGVtcGxhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUobGlzdFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q2xvbmUpO1xuXG4gICAgICAgICAgICBjb25zdCBsaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGlzdF0nKSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVsZXRlXScpKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbGlzdEFycmF5LmluZGV4T2YobGlzdCk7XG5cbiAgICAgICAgICAgIGxpc3RzW2luZGV4XS50ZXh0Q29udGVudCA9IGxpc3QudGl0bGU7XG4gICAgICAgICAgICBsaXN0c1tpbmRleF0uZGF0YXNldC5saXN0ID0gbGlzdC5saXN0SUQ7XG4gICAgICAgICAgICBsaXN0c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KGxpc3RBcnJheSwgZSk7XG4gICAgICAgICAgICAgICAgdWkoKS5yZW5kZXJVc2VyTGlzdChhY3RpdmVMaXN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGVJY29uc1tpbmRleF0uc3JjID0gZGVsZXRlQnV0dG9uO1xuICAgICAgICAgICAgZGVsZXRlSWNvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdChsaXN0QXJyYXksIGUpO1xuICAgICAgICAgICAgICAgIHJlbW92ZShsaXN0QXJyYXksIGFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm0gPSAobGlzdEFycmF5KSA9PiB7ICAgIFxuICAgICAgICBjb25zdCBsaXN0SUQgPSBsaXN0QXJyYXkubGVuZ3RoICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IExpc3QoZ2V0VGl0bGVGcm9tSW5wdXQoKSwgZ2V0RGVzY3JpcHRpb25Gcm9tSW5wdXQoKSwgW10sIGxpc3RJRCk7XG4gICAgICAgIFxuICAgICAgICBsaXN0QXJyYXkucHVzaChuZXdMaXN0KTtcbiAgICAgICAgZGlzcGxheShsaXN0QXJyYXkpO1xuXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKGxpc3RBcnJheSwgbGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RBcnJheS5pbmRleE9mKGxpc3QpO1xuICAgICAgICBsaXN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmVzZXRJRHMobGlzdEFycmF5KTtcbiAgICAgICAgZGlzcGxheShsaXN0QXJyYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlRnJvbUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRpdGxlJyk7XG4gICAgICAgIHJldHVybiBsaXN0VGl0bGUudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb25Gcm9tSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGVzY3JpcHRpb24nKTtcbiAgICAgICAgcmV0dXJuIGxpc3REZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXBkYXRlVGl0bGUgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRpdGxlRnJvbUlucHV0KCk7XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnJykgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBsaXN0LnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlRGVzY3JpcHRpb24gPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldERlc2NyaXB0aW9uRnJvbUlucHV0KCk7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBsaXN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlTGlzdCA9IChsaXN0QXJyYXksIGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQubGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJRCA9IHBhcnNlSW50KHNpYmxpbmcuZGF0YXNldC5saXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSBsaXN0QXJyYXkuZmluZCggKHsgbGlzdElEIH0pID0+IGxpc3RJRCA9PT0gZWxlbWVudElEKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZUxpc3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJRCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQubGlzdCk7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gbGlzdEFycmF5LmZpbmQoICh7IGxpc3RJRCB9KSA9PiBsaXN0SUQgPT09IGVsZW1lbnRJRCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVMaXN0XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRJRHMgPSAobGlzdEFycmF5KSA9PiB7XG4gICAgICAgIGxldCBpID0gMTtcbiAgICAgICAgbGlzdEFycmF5LmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBsaXN0Lmxpc3RJRCA9IGk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXksIGhhbmRsZUZvcm0sIHVwZGF0ZVRpdGxlLCB1cGRhdGVEZXNjcmlwdGlvbiwgZ2V0QWN0aXZlTGlzdCB9XG59XG5cbmV4cG9ydCB7IExpc3QsIGxpc3RzIH0iLCJpbXBvcnQgeyBlZGl0b3IgfSBmcm9tIFwiLi9lZGl0b3JcIlxuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgbGlzdCwgc3VidGFza3MsIG5vdGVzLCBjb21wbGV0ZWQsIHRhc2tJRCkgPT4ge1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBsaXN0LCBzdWJ0YXNrcywgbm90ZXMsIGNvbXBsZXRlZCwgdGFza0lELCB9XG59XG5cbmNvbnN0IHRhc2tzID0gKCkgPT4ge1xuLy8gQWRkIG1hcmsgYXMgY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuXG4gICAgY29uc3QgZGlzcGxheSA9ICh0YXNrQXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGVtcGxhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2xvbmUpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFza10nKSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tBcnJheS5pbmRleE9mKHRhc2spO1xuXG4gICAgICAgICAgICB0YXNrc1tpbmRleF0udGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGFza3NbaW5kZXhdLmRhdGFzZXQudGFzayA9IHRhc2sudGFza0lEO1xuXG4gICAgICAgICAgICB0YXNrc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBnZXRBY3RpdmVUYXNrKHRhc2tBcnJheSwgZSk7XG4gICAgICAgICAgICAgICAgZWRpdG9yKCkuZGlzcGxheVRhc2soYWN0aXZlVGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUXVpY2tBZGQgPSAobGlzdEFycmF5LCBlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSgpXG4gICAgICAgIGxldCB0YXNrSUQ7XG5cbiAgICAgICAgaWYgKGxpc3RBcnJheS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFza0lEID0gbGlzdEFycmF5LnRhc2tzLmxlbmd0aCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrSUQgPSBsaXN0QXJyYXkubGVuZ3RoICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCAnJywgJycsICcnLCBbXSwgJycsICcnLCB0YXNrSUQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxpc3RBcnJheS50YXNrcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsaXN0QXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIHF1aWNrQWRkVGFzay52YWx1ZSA9ICcnO1xuICAgIFxuICAgICAgICAgICAgZGlzcGxheShsaXN0QXJyYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdEFycmF5LnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHF1aWNrQWRkVGFzay52YWx1ZSA9ICcnO1xuICAgIFxuICAgICAgICAgICAgZGlzcGxheShsaXN0QXJyYXkudGFza3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKHRhc2tBcnJheSwgdGFzaykgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tBcnJheS5pbmRleE9mKHRhc2spO1xuICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmVzZXRJRHModGFza0FycmF5KTtcbiAgICAgICAgZGlzcGxheSh0YXNrQXJyYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWlja0FkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tBZGRUYXNrJyk7XG4gICAgICAgIHJldHVybiBxdWlja0FkZFRhc2sudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlVGFzayA9ICh0YXNrQXJyYXksIGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAnY3JlYXRlU3VidGFza0J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrVGV4dCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSB0YXNrQXJyYXkuZmluZCggKHt0aXRsZX0pID0+IHRpdGxlID09PSBjdXJyZW50VGFza1RleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlVGFza1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAnZGVsZXRlVGFzaycpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrVGV4dCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSB0YXNrQXJyYXkuZmluZCggKHt0aXRsZX0pID0+IHRpdGxlID09PSBjdXJyZW50VGFza1RleHQpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVUYXNrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SUQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnRhc2spO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVGFzayA9IHRhc2tBcnJheS5maW5kKCAoeyB0YXNrSUQgfSkgPT4gdGFza0lEID09PSBlbGVtZW50SUQpO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVRhc2tcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0SURzID0gKHRhc2tBcnJheSkgPT4ge1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay50YXNrSUQgPSBpO1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheSwgaGFuZGxlUXVpY2tBZGQsIHJlbW92ZSwgZ2V0QWN0aXZlVGFzaywgfVxufVxuXG5leHBvcnQgeyBUYXNrLCB0YXNrcyB9IiwiaW1wb3J0ICcvc3JjL3N0eWxlLmNzcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcvc3JjL2ltZy9pY29uLWNhdC5wbmcnO1xuaW1wb3J0IHsgbGlzdHMgfSBmcm9tIFwiLi9saXN0LmpzXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IGVkaXRvciB9IGZyb20gXCIuL2VkaXRvci5qc1wiXG5pbXBvcnQgeyB1c2VyTGlzdHMsIG5hdkxpc3RzLCBnZXRBbGxUYXNrcyB9IGZyb20gXCIuL2RhdGEuanNcIjtcblxuY29uc3QgdWkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBuYXZMaXN0c1swXS50YXNrcztcblxuICAgIGNvbnN0IGluaXRMaXN0Q2xvbmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Q2FyZENvbnRhaW5lcicpKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDYXJkQ29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NhcmRDb250YWluZXInKSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ2FyZENvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdENhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Q2FyZC10ZW1wbGF0ZScpO1xuICAgICAgICBjb25zdCBsaXN0Q2FyZENsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShsaXN0Q2FyZFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RDYXJkQ2xvbmUpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGl0bGUnKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGxpc3RUaXRsZS5mb2N1cygpO1xuICAgICAgICBhZGRMaXN0TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbGlzdFRpdGxlLCBsaXN0RGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZExpc3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbmNlbExsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbExpc3QnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRMaXN0Jyk7XG5cbiAgICAgICAgY2FuY2VsTGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbml0VG9kb0Nsb25lKCk7XG4gICAgICAgICAgICByZW5kZXJOYXZPcHRpb24oJ0FsbCB0YXNrcycpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgc3VibWl0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0cygpLmhhbmRsZUZvcm0odXNlckxpc3RzKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJMaXN0KG5ld0xpc3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0VG9kb0Nsb25lID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NhcmRDb250YWluZXInKSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ2FyZENvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDYXJkQ29udGFpbmVyJykpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdENhcmRDb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZG9DYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NhcmQtdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc3QgdG9kb0NhcmRDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9kb0NhcmRUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQ2FyZENsb25lKTtcblxuICAgICAgICBjb25zdCB0b2RvQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ2FyZENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3Qgc3VibWl0UXVpY2tBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UXVpY2tBZGQnKTtcblxuICAgICAgICByZXR1cm4geyB0b2RvQ2FyZENvbnRhaW5lciwgbGlzdFRpdGxlLCBsaXN0RGVzY3JpcHRpb24sIHN1Ym1pdFF1aWNrQWRkIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUaXRsZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgbGlzdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIobGlzdFRpdGxlKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgICAgIGxpc3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVMaXN0ID0gbGlzdHMoKS5nZXRBY3RpdmVMaXN0KHVzZXJMaXN0cywgZSk7XG4gICAgICAgICAgICBsaXN0cygpLnVwZGF0ZVRpdGxlKGFjdGl2ZUxpc3QpO1xuICAgICAgICAgICAgbGlzdHMoKS5kaXNwbGF5KHVzZXJMaXN0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZERlc2NyaXB0aW9uTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBsaXN0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlcihsaXN0RGVzY3JpcHRpb24pO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgICAgbGlzdERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSBsaXN0cygpLmdldEFjdGl2ZUxpc3QodXNlckxpc3RzLCBlKTtcbiAgICAgICAgICAgIGxpc3RzKCkudXBkYXRlRGVzY3JpcHRpb24oYWN0aXZlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRFZGl0b3JDbG9uZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvckNhcmRDb250YWluZXInKSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3JDYXJkQ29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0b3JDYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yQ2FyZC10ZW1wbGF0ZScpO1xuICAgICAgICBjb25zdCBlZGl0b3JDbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUoZWRpdG9yQ2FyZFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb250ZW50LnByZXBlbmQoZWRpdG9yQ2xvbmUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRvckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yRm9ybScpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFzaycpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgbGlzdERyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REcm9wZG93bicpO1xuICAgICAgICBjb25zdCBzdWJ0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnRhc2tDb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcblxuICAgICAgICBjdXJyZW50VGFzay5mb2N1cygpO1xuICAgICAgICBlZGl0b3IoKS5pbml0TGlzdERyb3Bkb3duKHVzZXJMaXN0cyk7XG4gICAgICAgIGFkZEVkaXRvckxpc3RlbmVycygpO1xuXG4gICAgICAgIHJldHVybiB7IGVkaXRvckZvcm0sIGN1cnJlbnRUYXNrLCBkdWVEYXRlLCBsaXN0RHJvcGRvd24sIHN1YnRhc2tDb250YWluZXIsIG5vdGVzIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRFZGl0b3JMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaW9yaXR5XScpKTtcbiAgICAgICAgY29uc3QgY3JlYXRlU3VidGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVTdWJ0YXNrQnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VGFzaycpO1xuICAgICAgICBjb25zdCBjYW5jZWxFZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsRWRpdG9yJyk7XG5cbiAgICAgICAgcHJpb3JpdGllcy5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgICAgICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGlja2VkQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlU3VidGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVUYXNrID0gdGFza3MoKS5nZXRBY3RpdmVUYXNrKGFsbFRhc2tzLCBlKTtcbiAgICAgICAgICAgIGVkaXRvcigpLmhhbmRsZVN1YnRhc2soYWN0aXZlVGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0b3IoKS5oYW5kbGVGb3JtKCk7XG4gICAgICAgICAgICB0YXNrcygpLmRpc3BsYXkoYWxsVGFza3MpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChlZGl0b3JDYXJkQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FuY2VsRWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdG9yQ2FyZENvbnRhaW5lcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTmF2T3B0aW9uID0gKG5hdikgPT4ge1xuICAgICAgICBpbml0VG9kb0Nsb25lKCk7XG5cbiAgICAgICAgbGlzdFRpdGxlLnZhbHVlID0gbmF2LnRpdGxlO1xuICAgICAgICBsaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpOyBcbiAgICBcbiAgICAgICAgdG9kb0NhcmRDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdERlc2NyaXB0aW9uKTtcblxuICAgICAgICB0YXNrcygpLmRpc3BsYXkoYWxsVGFza3MpOyBcbiAgICAgICAgc3VibWl0UXVpY2tBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza3MoKS5oYW5kbGVRdWlja0FkZChhbGxUYXNrcywgZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlckxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBpbml0VG9kb0Nsb25lKCk7XG5cbiAgICAgICAgbGlzdFRpdGxlLnZhbHVlID0gbGlzdC50aXRsZTtcbiAgICAgICAgbGlzdFRpdGxlLmRhdGFzZXQubGlzdCA9IGxpc3QubGlzdElEO1xuICAgICAgICBhZGRUaXRsZUxpc3RlbmVycygpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxpc3QuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICB0b2RvQ2FyZENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0RGVzY3JpcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdERlc2NyaXB0aW9uLnZhbHVlID0gbGlzdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxpc3REZXNjcmlwdGlvbi5kYXRhc2V0Lmxpc3QgPSBsaXN0Lmxpc3RJRDtcbiAgICAgICAgICAgIGFkZERlc2NyaXB0aW9uTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC50YXNrcyA9PT0gJycpIHsgXG4gICAgICAgICAgICBzdWJtaXRRdWlja0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza3MoKS5oYW5kbGVRdWlja0FkZChsaXN0LCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza3MoKS5kaXNwbGF5KGxpc3QudGFza3MpOyBcblxuICAgICAgICAgICAgc3VibWl0UXVpY2tBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tzKCkuaGFuZGxlUXVpY2tBZGQobGlzdCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0NhdEljb24gPSBuZXcgSW1hZ2UoNjAsIDYwKTtcbiAgICAgICAgdGFza0NhdEljb24uc3JjID0gaWNvbjtcbiAgICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2F0SWNvbik7XG4gICAgICAgIG5hdkxpc3RzWzBdLnRhc2tzID0gZGF0YSgpLmdldEFsbFRhc2tzKCk7XG4gICAgICAgIHJlbmRlck5hdk9wdGlvbihuYXZMaXN0c1swXSk7XG4gICAgICAgIGxpc3RzKCkuZGlzcGxheSh1c2VyTGlzdHMpO1xuICAgICAgICBhZGRQYWdlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUGFnZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVUYXNrQnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdEJ1dHRvbicpO1xuICAgICAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmF2T3B0aW9uXScpO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRFZGl0b3JDbG9uZSk7XG4gICAgICAgIGFkZExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0TGlzdENsb25lKTtcbiAgICAgICAgbmF2T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9uID0gKG5hdkxpc3RzLmZpbmQoICh7dGl0bGV9KSA9PiB0aXRsZSA9PT0gb3B0aW9uLmRhdGFzZXQubmF2b3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyTmF2T3B0aW9uKGFjdGl2ZU9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IFxuICAgIH1cblxuICAgIGNvbnN0IHNldFBsYWNlaG9sZGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDbGlja2VkQ2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaW9yaXR5XScpKTtcblxuICAgICAgICBwcmlvcml0aWVzLmZvckVhY2gocHJpb3JpdHkgPT4ge1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0UGFnZSwgaW5pdEVkaXRvckNsb25lLCByZW5kZXJVc2VyTGlzdCwgc2V0UGxhY2Vob2xkZXIsIH1cbn1cblxuZXhwb3J0IHsgdWkgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==