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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datasourceWidgets_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasourceWidgets/api */ \"./components/create_report_steps/datasourceWidgets/api.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SourceTypes = [\n    \"API\",\n    \"SQL\",\n    \"EXCEL\",\n    \"CSV\"\n];\nconst DataSourceWidget = ()=>{\n    _s();\n    const [formRows, setFormRows] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 0,\n            type: \"API\"\n        }\n    ]);\n    const getSourceWidget = (type)=>{\n        switch(type){\n            case \"API\":\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_datasourceWidgets_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 24\n                    }, undefined);\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full p-2 flex flex-col gap-3 card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-title w-full\",\n                children: \"Data Sources\"\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: formRows.map((row)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-control\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"label\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label-text\",\n                                    children: \"Data Type\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-group w-full flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        onChange: (e)=>row[\"type\"] = e.target.value,\n                                        className: \"select select-bordered\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                disabled: true,\n                                                selected: true,\n                                                children: \"Pick a type\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            SourceTypes.map((source)=>{\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: source,\n                                                    children: source\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 41\n                                                }, undefined);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: getSourceWidget(row.type)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, row.id, true, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DataSourceWidget, \"RiEMDczwzCoTaj3CtKjDmVP0oWM=\");\n_c = DataSourceWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSourceWidget);\nvar _c;\n$RefreshReg$(_c, \"DataSourceWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUN6QjtBQUVoQyxNQUFNRSxjQUFjO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFFRCxNQUFNQyxtQkFBbUIsSUFBTTs7SUFFM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUM7WUFBQ0ssSUFBSTtZQUFHQyxNQUFLO1FBQUs7S0FBRTtJQUU5RCxNQUFNQyxrQkFBa0IsQ0FBQ0QsT0FBZ0I7UUFDckMsT0FBT0E7WUFDSCxLQUFLO2dCQUFPO29CQUNSLHFCQUFPLDhEQUFDUCw4REFBbUJBOzs7OztnQkFDL0I7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBb0I7Ozs7OzswQkFHbkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWTixTQUFTTyxHQUFHLENBQUMsQ0FBQ0MsTUFBWTtvQkFDdkIscUJBQ0ksOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDbkIsOERBQUNHO2dDQUFNSCxXQUFVOzBDQUNiLDRFQUFDSTtvQ0FBS0osV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7MENBRWpDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNLO3dDQUFPQyxVQUFVLENBQUNDLElBQU1MLEdBQUcsQ0FBQyxPQUFPLEdBQUdLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FBRVQsV0FBVTs7MERBQzdELDhEQUFDVTtnREFBT0MsUUFBUTtnREFBQ0MsUUFBUTswREFBQzs7Ozs7OzRDQUN6QnBCLFlBQVlTLEdBQUcsQ0FBQyxDQUFDWSxTQUFXO2dEQUN6QixxQkFBUSw4REFBQ0g7b0RBQU9ELE9BQU9JOzhEQUFTQTs7Ozs7OzRDQUNwQzs7Ozs7OztrREFHSiw4REFBQ2Q7d0NBQUlDLFdBQVU7a0RBQ1ZGLGdCQUFnQkksSUFBSUwsSUFBSTs7Ozs7Ozs7Ozs7Ozt1QkFiTUssSUFBSU4sRUFBRTs7Ozs7Z0JBa0JqRDs7Ozs7Ozs7Ozs7O0FBSWhCO0dBMUNNSDtLQUFBQTtBQTZDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3JlYXRlX3JlcG9ydF9zdGVwcy9kYXRhX3NvdXJjZXMudHN4PzBlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSURhdGFTb3VyY2VXaWRnZXQgZnJvbSBcIi4vZGF0YXNvdXJjZVdpZGdldHMvYXBpXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgU291cmNlVHlwZXMgPSBbXG4gICAgJ0FQSScsXG4gICAgJ1NRTCcsXG4gICAgJ0VYQ0VMJyxcbiAgICAnQ1NWJyxcbl1cblxuY29uc3QgRGF0YVNvdXJjZVdpZGdldCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtmb3JtUm93cywgc2V0Rm9ybVJvd3NdID0gdXNlU3RhdGUoW3tpZDogMCwgdHlwZTonQVBJJ31dKVxuXG4gICAgY29uc3QgZ2V0U291cmNlV2lkZ2V0ID0gKHR5cGU6c3RyaW5nKSA9PiB7XG4gICAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgICAgIGNhc2UoJ0FQSScpOntcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFQSURhdGFTb3VyY2VXaWRnZXQgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBwLTIgZmxleCBmbGV4LWNvbCBnYXAtMyBjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgRGF0YSBTb3VyY2VzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAge2Zvcm1Sb3dzLm1hcCgocm93OmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkRhdGEgVHlwZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3LWZ1bGwgZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHJvd1sndHlwZSddID0gZS50YXJnZXQudmFsdWV9IGNsYXNzTmFtZT1cInNlbGVjdCBzZWxlY3QtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPlBpY2sgYSB0eXBlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1NvdXJjZVR5cGVzLm1hcCgoc291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPG9wdGlvbiB2YWx1ZT17c291cmNlfT57c291cmNlfTwvb3B0aW9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRTb3VyY2VXaWRnZXQocm93LnR5cGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VXaWRnZXQ7Il0sIm5hbWVzIjpbIkFQSURhdGFTb3VyY2VXaWRnZXQiLCJ1c2VTdGF0ZSIsIlNvdXJjZVR5cGVzIiwiRGF0YVNvdXJjZVdpZGdldCIsImZvcm1Sb3dzIiwic2V0Rm9ybVJvd3MiLCJpZCIsInR5cGUiLCJnZXRTb3VyY2VXaWRnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJyb3ciLCJsYWJlbCIsInNwYW4iLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/create_report_steps/data_sources.tsx\n"));

/***/ })

});