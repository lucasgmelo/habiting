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

/***/ "./src/components/Sidebar/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Sidebar/styles.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; },\n/* harmony export */   \"List\": function() { return /* binding */ List; },\n/* harmony export */   \"Item\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var _Users_lucasmelo_Documents_dev_habiting_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav(_templateObject || (_templateObject = (0,_Users_lucasmelo_Documents_dev_habiting_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 300px;\\n  padding: 32px 0;\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  & > svg {\\n    margin: 0 auto;\\n  }\\n\\n  height: 100vh;\\n  background: \", \";\\n  box-shadow: \", \";\\n\\n  margin-right: 24px;\\n\"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.white;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.shadows.sidebar;\n});\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul(_templateObject2 || (_templateObject2 = (0,_Users_lucasmelo_Documents_dev_habiting_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  list-style: none;\\n\\n  margin-top: 64px;\\n\"])));\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.li(_templateObject3 || (_templateObject3 = (0,_Users_lucasmelo_Documents_dev_habiting_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  height: 48px;\\n\\n  & + li {\\n    margin-top: 48px;\\n  }\\n\\n  font-size: \", \";\\n\\n  display: flex;\\n  align-items: center;\\n  gap: 16px;\\n  padding: 0 16px;\\n\\n  svg {\\n    width: 24px;\\n    margin: 0;\\n    color: \", \";\\n  }\\n\\n  p {\\n    margin: 0;\\n  }\\n\\n  \", \"\\n\"])), function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.font.sizes.xlarge;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.colors.darkPrimary;\n}, function (_ref5) {\n  var active = _ref5.active,\n      theme = _ref5.theme;\n  return active && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4 || (_templateObject4 = (0,_Users_lucasmelo_Documents_dev_habiting_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n      font-weight: 600;\\n\\n      color: \", \";\\n\\n      position: relative;\\n\\n      &::after {\\n        position: absolute;\\n        content: \\\"\\\";\\n\\n        left: 0;\\n\\n        width: 4px;\\n        height: 100%;\\n\\n        background: \", \";\\n        border-radius: 0 5px 5px 0;\\n      }\\n    \"])), theme.colors.darkPrimary, function (_ref6) {\n    var theme = _ref6.theme;\n    return theme.colors.darkPrimary;\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNRSxPQUFPLEdBQUdGLDBEQUFILHFhQVlKO0FBQUEsTUFBR0ksS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FaSSxFQWFKO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQTdCO0FBQUEsQ0FiSSxDQUFiO0FBa0JBLElBQU1DLElBQUksR0FBR1QseURBQUgsOFBBQVY7QUFNQSxJQUFNVyxJQUFJLEdBQUdYLHlEQUFILDhkQU9GO0FBQUEsTUFBR0ksS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWhDO0FBQUEsQ0FQRSxFQWlCSjtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxXQUE1QjtBQUFBLENBakJJLEVBd0JiO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV2IsS0FBWCxTQUFXQSxLQUFYO0FBQUEsU0FDQWEsTUFBTSxJQUNOaEIsc0RBRE0seWZBSUtHLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxXQUpsQixFQWlCWTtBQUFBLFFBQUdaLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxXQUE1QjtBQUFBLEdBakJaLENBRE47QUFBQSxDQXhCYSxDQUFWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvc3R5bGVzLnRzPzU1Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDMycHggMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICYgPiBzdmcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd3Muc2lkZWJhcn07XG5cbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgbWFyZ2luLXRvcDogNjRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmxpPHsgYWN0aXZlPzogYm9vbGVhbiB9PmBcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gICYgKyBsaSB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgfVxuXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNpemVzLnhsYXJnZX07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtQcmltYXJ5fTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICR7KHsgYWN0aXZlLCB0aGVtZSB9KSA9PlxuICAgIGFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrUHJpbWFyeX07XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1ByaW1hcnl9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgIH1cbiAgICBgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjc3MiLCJXcmFwcGVyIiwibmF2IiwidGhlbWUiLCJjb2xvcnMiLCJ3aGl0ZSIsInNoYWRvd3MiLCJzaWRlYmFyIiwiTGlzdCIsInVsIiwiSXRlbSIsImxpIiwiZm9udCIsInNpemVzIiwieGxhcmdlIiwiZGFya1ByaW1hcnkiLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sidebar/styles.ts\n");

/***/ })

});