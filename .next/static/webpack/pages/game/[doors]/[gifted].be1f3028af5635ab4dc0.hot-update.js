"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[doors]/[gifted]",{

/***/ "./src/pages/game/[doors]/[gifted].tsx":
/*!*********************************************!*\
  !*** ./src/pages/game/[doors]/[gifted].tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Door */ \"./src/components/Door.tsx\");\n/* harmony import */ var _functions_doors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/doors */ \"./src/functions/doors.ts\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/Game.module.css */ \"./src/styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/gabriel/developer/repositories/gmsanjuliano/door-game/src/pages/game/[doors]/[gifted].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction game() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      doors = _useState[0],\n      setDoors = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var doors = +router.query.doors;\n    var gifted = +router.query.doors;\n    setDoors((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.createDoors)());\n  }, [router === null || router === void 0 ? void 0 : router.query]); // +router.query.doors\n  // +router.query.gifted\n\n  function renderDoors() {\n    var _this = this;\n\n    return doors.map(function (door) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Door__WEBPACK_IMPORTED_MODULE_1__.default, {\n        value: door,\n        onChange: function onChange(newDoor) {\n          return setDoors((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.updateDoors)(doors, newDoor));\n        }\n      }, door.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 14\n      }, _this);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().game),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().doors),\n      children: renderDoors()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn),\n          children: \"Restart Game\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(game, \"sed4CEnPdcAUdC6uOdRxouk7soA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9bZG9vcnNdL1tnaWZ0ZWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTUSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7O0FBRUEsa0JBQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQVgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVUsS0FBSyxHQUFHLENBQUNELE1BQU0sQ0FBQ0csS0FBUCxDQUFhRixLQUE1QjtBQUNBLFFBQU1HLE1BQU0sR0FBRSxDQUFDSixNQUFNLENBQUNHLEtBQVAsQ0FBYUYsS0FBNUI7QUFDQUMsSUFBQUEsUUFBUSxDQUFDUiw2REFBVyxFQUFaLENBQVI7QUFDRCxHQUpRLEVBSU4sQ0FBQ00sTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVHLEtBQVQsQ0FKTSxDQUFULENBTDZCLENBVzdCO0FBQ0E7O0FBRUEsV0FBU0UsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixXQUFPSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDdkIsMEJBQU8sOERBQUMscURBQUQ7QUFBd0IsYUFBSyxFQUFFQSxJQUEvQjtBQUNQLGdCQUFRLEVBQUcsa0JBQUFDLE9BQU87QUFBQSxpQkFBSU4sUUFBUSxDQUFDUCw2REFBVyxDQUFDTSxLQUFELEVBQVFPLE9BQVIsQ0FBWixDQUFaO0FBQUE7QUFEWCxTQUFXRCxJQUFJLENBQUNFLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVELEtBSE0sQ0FBUDtBQUlEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFYixxRUFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsZ0JBQ0dTLFdBQVc7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFRLG1CQUFTLEVBQUVULG9FQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FoQ3VCRztVQUNQRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FtZS9bZG9vcnNdL1tnaWZ0ZWRdLnRzeD83ZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEb29yIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Rvb3JcIjtcbmltcG9ydCBHaWZ0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0dpZnRcIjtcbmltcG9ydCB7IGNyZWF0ZURvb3JzLCB1cGRhdGVEb29ycyB9IGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbnMvZG9vcnNcIjtcbmltcG9ydCBEb29yTW9kZWwgZnJvbSBcIi4uLy4uLy4uL21vZGVsL2Rvb3JcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9HYW1lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IFtkb29ycywgc2V0RG9vcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkb29ycyA9ICtyb3V0ZXIucXVlcnkuZG9vcnNcbiAgICBjb25zdCBnaWZ0ZWQ9ICtyb3V0ZXIucXVlcnkuZG9vcnNcbiAgICBzZXREb29ycyhjcmVhdGVEb29ycygpKVxuICB9LCBbcm91dGVyPy5xdWVyeV0pXG5cbiAgLy8gK3JvdXRlci5xdWVyeS5kb29yc1xuICAvLyArcm91dGVyLnF1ZXJ5LmdpZnRlZFxuXG4gIGZ1bmN0aW9uIHJlbmRlckRvb3JzKCkge1xuICAgIHJldHVybiBkb29ycy5tYXAoZG9vciA9PiB7XG4gICAgICByZXR1cm4gPERvb3Iga2V5PXtkb29yLm51bWJlcn0gdmFsdWU9e2Rvb3J9IFxuICAgICAgb25DaGFuZ2U9eyBuZXdEb29yID0+IHNldERvb3JzKHVwZGF0ZURvb3JzKGRvb3JzLCBuZXdEb29yKSkgfSAvPlxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb29yc30+XG4gICAgICAgIHtyZW5kZXJEb29ycygpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5SZXN0YXJ0IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb29yIiwiY3JlYXRlRG9vcnMiLCJ1cGRhdGVEb29ycyIsInN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJnYW1lIiwicm91dGVyIiwiZG9vcnMiLCJzZXREb29ycyIsInF1ZXJ5IiwiZ2lmdGVkIiwicmVuZGVyRG9vcnMiLCJtYXAiLCJkb29yIiwibmV3RG9vciIsIm51bWJlciIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/game/[doors]/[gifted].tsx\n");

/***/ })

});