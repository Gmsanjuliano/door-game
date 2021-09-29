"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Door.tsx":
/*!*********************************!*\
  !*** ./src/components/Door.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Door; }\n/* harmony export */ });\n/* harmony import */ var _styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Door.module.css */ \"./src/styles/Door.module.css\");\n/* harmony import */ var _styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/gabriel/developer/repositories/gmsanjuliano/door-game/src/components/Door.tsx\";\n\n\nfunction Door(props) {\n  var door = props.value;\n  var selected = door.selected && !door.opened ? (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().selected) : \"\";\n\n  var alterSelection = function alterSelection(e) {\n    return props.onChange(door.alterSelection());\n  };\n\n  var open = function open(e) {\n    e.stopPropagation();\n    props.onChange(door.open());\n  };\n\n  function renderDoor() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().door),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().numero),\n        children: door.number\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().knob),\n        onClick: open\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().area),\n    onClick: alterSelection,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"\".concat((_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().frame), \" \").concat(selected),\n      children: door.opened ? false : renderDoor(alert(\"OLHA O MACACO\"))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Door_module_css__WEBPACK_IMPORTED_MODULE_1___default().ground)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c = Door;\n\nvar _c;\n\n$RefreshReg$(_c, \"Door\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb29yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBUWUsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQWdDO0FBQzdDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRSxRQUFMLElBQWlCLENBQUNGLElBQUksQ0FBQ0csTUFBdkIsR0FBZ0NOLHlFQUFoQyxHQUFrRCxFQUFuRTs7QUFFQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUM7QUFBQSxXQUFJTixLQUFLLENBQUNPLFFBQU4sQ0FBZU4sSUFBSSxDQUFDSSxjQUFMLEVBQWYsQ0FBSjtBQUFBLEdBQXhCOztBQUNBLE1BQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFGLENBQUMsRUFBSTtBQUNoQkEsSUFBQUEsQ0FBQyxDQUFDRyxlQUFGO0FBQ0FULElBQUFBLEtBQUssQ0FBQ08sUUFBTixDQUFlTixJQUFJLENBQUNPLElBQUwsRUFBZjtBQUNELEdBSEQ7O0FBS0EsV0FBU0UsVUFBVCxHQUFzQjtBQUNwQix3QkFDRTtBQUFLLGVBQVMsRUFBRVoscUVBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSx1RUFBaEI7QUFBQSxrQkFBZ0NHLElBQUksQ0FBQ1c7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFZCxxRUFBaEI7QUFBNkIsZUFBTyxFQUFFVTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVYscUVBQWhCO0FBQTZCLFdBQU8sRUFBRU8sY0FBdEM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsWUFBS1Asc0VBQUwsY0FBcUJLLFFBQXJCLENBQWQ7QUFBQSxnQkFDR0YsSUFBSSxDQUFDRyxNQUFMLEdBQWMsS0FBZCxHQUFzQk0sVUFBVSxDQUFDTSxLQUFLLENBQUMsZUFBRCxDQUFOO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFbEIsdUVBQWFtQjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDtLQTNCdUJsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb29yLnRzeD81YzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Eb29yLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBEb29yTW9kZWwgZnJvbSBcIi4uL21vZGVsL2Rvb3JcIjtcblxuaW50ZXJmYWNlIERvb3JQcm9wcyB7XG4gIHZhbHVlOiBEb29yTW9kZWxcbiAgb25DaGFuZ2U6IChuZXdEb29yOiBEb29yTW9kZWwpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9vcihwcm9wczogRG9vclByb3BzKSB7XG4gIGNvbnN0IGRvb3IgPSBwcm9wcy52YWx1ZVxuICBjb25zdCBzZWxlY3RlZCA9IGRvb3Iuc2VsZWN0ZWQgJiYgIWRvb3Iub3BlbmVkID8gc3R5bGVzLnNlbGVjdGVkIDogXCJcIjtcblxuICBjb25zdCBhbHRlclNlbGVjdGlvbiA9IGUgPT4gcHJvcHMub25DaGFuZ2UoZG9vci5hbHRlclNlbGVjdGlvbigpKVxuICBjb25zdCBvcGVuID0gZSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHByb3BzLm9uQ2hhbmdlKGRvb3Iub3BlbigpKVxuICB9XG4gIFxuICBmdW5jdGlvbiByZW5kZXJEb29yKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvb3J9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb30+e2Rvb3IubnVtYmVyfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmtub2J9IG9uQ2xpY2s9e29wZW59PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJlYX0gb25DbGljaz17YWx0ZXJTZWxlY3Rpb259PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mcmFtZX0gJHtzZWxlY3RlZH1gfT5cbiAgICAgICAge2Rvb3Iub3BlbmVkID8gZmFsc2UgOiByZW5kZXJEb29yKGFsZXJ0KFwiT0xIQSBPIE1BQ0FDT1wiKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdW5kfT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJEb29yIiwicHJvcHMiLCJkb29yIiwidmFsdWUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImFsdGVyU2VsZWN0aW9uIiwiZSIsIm9uQ2hhbmdlIiwib3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInJlbmRlckRvb3IiLCJudW1lcm8iLCJudW1iZXIiLCJrbm9iIiwiYXJlYSIsImZyYW1lIiwiYWxlcnQiLCJncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Door.tsx\n");

/***/ })

});