"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-report",{

/***/ "./components/create_report_steps/data_sources.tsx":
/*!*********************************************************!*\
  !*** ./components/create_report_steps/data_sources.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ \"../node_modules/react-select/dist/react-select.esm.js\");\n\n\nconst DataSourceWidget = (param)=>{\n    let { datasources  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full p-2 flex flex-col gap-3 card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-title w-full\",\n                children: \"Data Sources\"\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        defaultValue: \"Select data sources for this report\",\n                        isMulti: true,\n                        name: \"Sources\",\n                        options: datasources\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_c = DataSourceWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSourceWidget);\nvar _c;\n$RefreshReg$(_c, \"DataSourceWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQVlsQyxNQUFNQyxtQkFBbUIsU0FBc0M7UUFBckMsRUFBQ0MsWUFBVyxFQUFvQjtJQUl0RCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFvQjs7Ozs7OzBCQUduQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDSixvREFBTUE7d0JBQ0hLLGNBQWM7d0JBQ2RDLE9BQU87d0JBQ1BDLE1BQUs7d0JBQ0xDLFNBQVNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0tBckJNRDtBQXdCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3JlYXRlX3JlcG9ydF9zdGVwcy9kYXRhX3NvdXJjZXMudHN4PzBlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG50eXBlIGRhdGFzb3VyY2UgPSB7XG4gICAgdmFsdWU6c3RyaW5nLFxuICAgIGxhYmVsOnN0cmluZ1xuICB9XG4gIFxuaW50ZXJmYWNlIENyZWF0ZVJlcG9ydFByb3BzICB7XG4gICAgZGF0YXNvdXJjZXM6IEFycmF5PGRhdGFzb3VyY2U+XG4gIH1cblxuXG5jb25zdCBEYXRhU291cmNlV2lkZ2V0ID0gKHtkYXRhc291cmNlc306IENyZWF0ZVJlcG9ydFByb3BzKSA9PiB7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHAtMiBmbGV4IGZsZXgtY29sIGdhcC0zIGNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBEYXRhIFNvdXJjZXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlNlbGVjdCBkYXRhIHNvdXJjZXMgZm9yIHRoaXMgcmVwb3J0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU291cmNlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXRhc291cmNlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZVdpZGdldDtcblxuIl0sIm5hbWVzIjpbIlNlbGVjdCIsIkRhdGFTb3VyY2VXaWRnZXQiLCJkYXRhc291cmNlcyIsImRpdiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImlzTXVsdGkiLCJuYW1lIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create_report_steps/data_sources.tsx\n"));

/***/ })

});