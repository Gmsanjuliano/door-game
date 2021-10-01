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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Door */ \"./src/components/Door.tsx\");\n/* harmony import */ var _functions_doors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/doors */ \"./src/functions/doors.ts\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/Game.module.css */ \"./src/styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/gabriel/developer/repositories/gmsanjuliano/door-game/src/pages/game/[doors]/[gifted].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction game() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      doors = _useState[0],\n      setDoors = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var doors = +router.query.doors;\n    setDoors((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.createDoors)());\n  }, [router === null || router === void 0 ? void 0 : router.query]); // +router.query.doors\n  // +router.query.gifted\n\n  function renderDoors() {\n    var _this = this;\n\n    return doors.map(function (door) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Door__WEBPACK_IMPORTED_MODULE_1__.default, {\n        value: door,\n        onChange: function onChange(newDoor) {\n          return setDoors((0,_functions_doors__WEBPACK_IMPORTED_MODULE_2__.updateDoors)(doors, newDoor));\n        }\n      }, door.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 14\n      }, _this);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().game),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().doors),\n      children: renderDoors()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn),\n          children: \"Restart Game\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(game, \"sed4CEnPdcAUdC6uOdRxouk7soA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FtZS9bZG9vcnNdL1tnaWZ0ZWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTUSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7O0FBRUEsa0JBQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQVgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVUsS0FBSyxHQUFHLENBQUNELE1BQU0sQ0FBQ0csS0FBUCxDQUFhRixLQUE1QjtBQUNBQyxJQUFBQSxRQUFRLENBQUNSLDZEQUFXLEVBQVosQ0FBUjtBQUNELEdBSFEsRUFHTixDQUFDTSxNQUFELGFBQUNBLE1BQUQsdUJBQUNBLE1BQU0sQ0FBRUcsS0FBVCxDQUhNLENBQVQsQ0FMNkIsQ0FVN0I7QUFDQTs7QUFFQSxXQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQ3JCLFdBQU9ILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUN2QiwwQkFBTyw4REFBQyxxREFBRDtBQUF3QixhQUFLLEVBQUVBLElBQS9CO0FBQ1AsZ0JBQVEsRUFBRyxrQkFBQUMsT0FBTztBQUFBLGlCQUFJTCxRQUFRLENBQUNQLDZEQUFXLENBQUNNLEtBQUQsRUFBUU0sT0FBUixDQUFaLENBQVo7QUFBQTtBQURYLFNBQVdELElBQUksQ0FBQ0UsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBRUQsS0FITSxDQUFQO0FBSUQ7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVaLHFFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSxnQkFDR1EsV0FBVztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRVIsb0VBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQS9CdUJHO1VBQ1BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYW1lL1tkb29yc10vW2dpZnRlZF0udHN4PzdlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERvb3IgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRG9vclwiO1xuaW1wb3J0IEdpZnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvR2lmdFwiO1xuaW1wb3J0IHsgY3JlYXRlRG9vcnMsIHVwZGF0ZURvb3JzIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9ucy9kb29yc1wiO1xuaW1wb3J0IERvb3JNb2RlbCBmcm9tIFwiLi4vLi4vLi4vbW9kZWwvZG9vclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0dhbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgW2Rvb3JzLCBzZXREb29yc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRvb3JzID0gK3JvdXRlci5xdWVyeS5kb29yc1xuICAgIHNldERvb3JzKGNyZWF0ZURvb3JzKCkpXG4gIH0sIFtyb3V0ZXI/LnF1ZXJ5XSlcblxuICAvLyArcm91dGVyLnF1ZXJ5LmRvb3JzXG4gIC8vICtyb3V0ZXIucXVlcnkuZ2lmdGVkXG5cbiAgZnVuY3Rpb24gcmVuZGVyRG9vcnMoKSB7XG4gICAgcmV0dXJuIGRvb3JzLm1hcChkb29yID0+IHtcbiAgICAgIHJldHVybiA8RG9vciBrZXk9e2Rvb3IubnVtYmVyfSB2YWx1ZT17ZG9vcn0gXG4gICAgICBvbkNoYW5nZT17IG5ld0Rvb3IgPT4gc2V0RG9vcnModXBkYXRlRG9vcnMoZG9vcnMsIG5ld0Rvb3IpKSB9IC8+XG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvb3JzfT5cbiAgICAgICAge3JlbmRlckRvb3JzKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59PlJlc3RhcnQgR2FtZTwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRvb3IiLCJjcmVhdGVEb29ycyIsInVwZGF0ZURvb3JzIiwic3R5bGVzIiwiTGluayIsInVzZVJvdXRlciIsImdhbWUiLCJyb3V0ZXIiLCJkb29ycyIsInNldERvb3JzIiwicXVlcnkiLCJyZW5kZXJEb29ycyIsIm1hcCIsImRvb3IiLCJuZXdEb29yIiwibnVtYmVyIiwiYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/game/[doors]/[gifted].tsx\n");

/***/ })

});