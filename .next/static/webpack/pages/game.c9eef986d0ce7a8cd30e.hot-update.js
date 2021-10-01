"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./src/pages/game.tsx":
/*!****************************!*\
  !*** ./src/pages/game.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Door */ \"./src/components/Door.tsx\");\n/* harmony import */ var _functions_doors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/doors */ \"./src/functions/doors.ts\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Game.module.css */ \"./src/styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/gabriel/developer/repositories/gmsanjuliano/door-game/src/pages/game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction game() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.createDoors)(4, 5)),\n      doors = _useState[0],\n      setDoors = _useState[1];\n\n  function renderDoors() {\n    var _this = this;\n\n    return doors.map(function (door) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Door__WEBPACK_IMPORTED_MODULE_1__.default, {\n        value: door,\n        onChange: function onChange(newDoor) {\n          return setDoors((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.updateDoors)(doors, newDoor));\n        }\n      }, door.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 14\n      }, _this);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5___default().game),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5___default().doors),\n      children: renderDoors()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          children: \"Restart Game\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(game, \"cuo2r+BvA44JGMlKsPH7NqKQB7o=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLGtCQUEwQk4sK0NBQVEsQ0FBQ0UsNkRBQVcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFaLENBQWxDO0FBQUEsTUFBT0ssS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsV0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixXQUFPRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDdkIsMEJBQU8sOERBQUMscURBQUQ7QUFBd0IsYUFBSyxFQUFFQSxJQUEvQjtBQUNQLGdCQUFRLEVBQUcsa0JBQUFDLE9BQU87QUFBQSxpQkFBSUosUUFBUSxDQUFDTCw2REFBVyxDQUFDSSxLQUFELEVBQVFLLE9BQVIsQ0FBWixDQUFaO0FBQUE7QUFEWCxTQUFXRCxJQUFJLENBQUNFLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVELEtBSE0sQ0FBUDtBQUlEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFVCxxRUFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsZ0JBQ0dLLFdBQVc7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUwsb0VBQWhCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQXJCdUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYW1lLnRzeD9mMTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9vciBmcm9tIFwiLi4vY29tcG9uZW50cy9Eb29yXCI7XG5pbXBvcnQgR2lmdCBmcm9tIFwiLi4vY29tcG9uZW50cy9HaWZ0XCI7XG5pbXBvcnQgeyBjcmVhdGVEb29ycywgdXBkYXRlRG9vcnMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2Rvb3JzXCI7XG5pbXBvcnQgRG9vck1vZGVsIGZyb20gXCIuLi9tb2RlbC9kb29yXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvR2FtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lKCkge1xuICBjb25zdCBbZG9vcnMsIHNldERvb3JzXSA9IHVzZVN0YXRlKGNyZWF0ZURvb3JzKDQsNSkpXG5cbiAgZnVuY3Rpb24gcmVuZGVyRG9vcnMoKSB7XG4gICAgcmV0dXJuIGRvb3JzLm1hcChkb29yID0+IHtcbiAgICAgIHJldHVybiA8RG9vciBrZXk9e2Rvb3IubnVtYmVyfSB2YWx1ZT17ZG9vcn0gXG4gICAgICBvbkNoYW5nZT17IG5ld0Rvb3IgPT4gc2V0RG9vcnModXBkYXRlRG9vcnMoZG9vcnMsIG5ld0Rvb3IpKSB9IC8+XG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvb3JzfT5cbiAgICAgICAge3JlbmRlckRvb3JzKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YnV0dG9uPlJlc3RhcnQgR2FtZTwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRvb3IiLCJjcmVhdGVEb29ycyIsInVwZGF0ZURvb3JzIiwic3R5bGVzIiwiTGluayIsImdhbWUiLCJkb29ycyIsInNldERvb3JzIiwicmVuZGVyRG9vcnMiLCJtYXAiLCJkb29yIiwibmV3RG9vciIsIm51bWJlciIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game.tsx\n");

/***/ })

});