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

/***/ "./pages/create-report.tsx":
/*!*********************************!*\
  !*** ./pages/create-report.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/create_report_steps/basic_info */ \"./components/create_report_steps/basic_info.tsx\");\n/* harmony import */ var _components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/create_report_steps/data_sources */ \"./components/create_report_steps/data_sources.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateReport(props) {\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [completed, setcompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const setStep = (index)=>{\n        setActiveStep(index);\n    };\n    const setStepCSS = (step)=>{\n        if (activeStep >= step) {\n            return \"cursor-pointer step step-accent\";\n        } else {\n            return \"cursor-pointer step\";\n        }\n    };\n    const displayWidget = ()=>{\n        switch(activeStep){\n            case 0:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 1:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sources: props.datasources\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 2:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 3:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 4:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 16\n                    }, this);\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex gap-1 p-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/5 h-full bg-base-100 rounded-lg p-3 items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"steps steps-vertical\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(0),\n                                className: setStepCSS(0),\n                                children: \"Basic Info\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(1),\n                                className: setStepCSS(1),\n                                children: \"Data Sources\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(2),\n                                className: setStepCSS(2),\n                                children: \"Prep\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(3),\n                                className: setStepCSS(3),\n                                children: \"Analysis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(4),\n                                className: setStepCSS(4),\n                                children: \"Export\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/5 h-full bg-base-100 rounded-lg p-2 flex\",\n                children: displayWidget()\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateReport, \"ALsREmK5OVSGicszLrz5tl7UbQg=\");\n_c = CreateReport;\nCreateReport.getLayout = (page)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateReport);\nvar _c;\n$RefreshReg$(_c, \"CreateReport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcmVwb3J0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDeUM7QUFDRztBQUc3RSxTQUFTSSxhQUFhQyxLQUFLLEVBQUU7O0lBRTNCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNUyxVQUFRLENBQUNDLFFBQWU7UUFDNUJKLGNBQWNJO0lBQ2hCO0lBRUEsTUFBTUMsYUFBWSxDQUFDQyxPQUFnQjtRQUNqQyxJQUFJUCxjQUFjTyxNQUFLO1lBQ3JCLE9BQU87UUFDVCxPQUNLO1lBQ0gsT0FBTztRQUNULENBQUM7SUFDSDtJQUlBLE1BQU1DLGdCQUFjLElBQUk7UUFDdEIsT0FBT1I7WUFDTCxLQUFLO2dCQUFHO29CQUNOLHFCQUFPLDhEQUFDSixrRkFBZUE7Ozs7O2dCQUN6QjtZQUNBLEtBQUs7Z0JBQUc7b0JBQ04scUJBQU8sOERBQUNDLG9GQUFnQkE7d0JBQUNZLFNBQVNWLE1BQU1XLFdBQVc7Ozs7OztnQkFDckQ7WUFDQSxLQUFLO2dCQUFHO29CQUNOLHFCQUFPLDhEQUFDQztrQ0FBSTs7Ozs7O2dCQUNkO1lBQ0EsS0FBSztnQkFBRztvQkFDTixxQkFBTyw4REFBQ0E7a0NBQUk7Ozs7OztnQkFDZDtZQUNBLEtBQUs7Z0JBQUc7b0JBQ04scUJBQU8sOERBQUNBO2tDQUFJOzs7Ozs7Z0JBQ2Q7UUFDRjtJQUNGO0lBR0EscUJBRUUsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFHRCxXQUFVOzswQ0FDWiw4REFBQ0U7Z0NBQUdDLFNBQVMsSUFBSVgsUUFBUTtnQ0FBSVEsV0FBV04sV0FBVzswQ0FBSTs7Ozs7OzBDQUN2RCw4REFBQ1E7Z0NBQUdDLFNBQVMsSUFBSVgsUUFBUTtnQ0FBSVEsV0FBV04sV0FBVzswQ0FBSTs7Ozs7OzBDQUN2RCw4REFBQ1E7Z0NBQUdDLFNBQVMsSUFBSVgsUUFBUTtnQ0FBSVEsV0FBV04sV0FBVzswQ0FBSTs7Ozs7OzBDQUN2RCw4REFBQ1E7Z0NBQUdDLFNBQVMsSUFBSVgsUUFBUTtnQ0FBSVEsV0FBV04sV0FBVzswQ0FBSTs7Ozs7OzBDQUN2RCw4REFBQ1E7Z0NBQUdDLFNBQVMsSUFBSVgsUUFBUTtnQ0FBSVEsV0FBV04sV0FBVzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJN0QsOERBQUNLO2dCQUFJQyxXQUFVOzBCQUNaSjs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRVNWO0tBQUFBO0FBa0VUQSxhQUFha0IsU0FBUyxHQUFHLENBQUNDLE9BQWM7SUFDdEMscUJBQ0UsOERBQUN2QiwwREFBTUE7a0JBQ0p1Qjs7Ozs7O0FBR1A7O0FBRUEsK0RBQWVuQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1yZXBvcnQudHN4PzgzZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYXNpY0luZm9XaWRnZXQgZnJvbSBcIkAvY29tcG9uZW50cy9jcmVhdGVfcmVwb3J0X3N0ZXBzL2Jhc2ljX2luZm9cIjtcbmltcG9ydCBEYXRhU291cmNlV2lkZ2V0IGZyb20gXCJAL2NvbXBvbmVudHMvY3JlYXRlX3JlcG9ydF9zdGVwcy9kYXRhX3NvdXJjZXNcIjtcblxuXG5mdW5jdGlvbiBDcmVhdGVSZXBvcnQocHJvcHMpIHtcblxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgxKVxuXG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldGNvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBzZXRTdGVwPShpbmRleDpudW1iZXIpPT57XG4gICAgc2V0QWN0aXZlU3RlcChpbmRleClcbiAgfVxuXG4gIGNvbnN0IHNldFN0ZXBDU1MgPShzdGVwOm51bWJlcikgPT4ge1xuICAgIGlmIChhY3RpdmVTdGVwID49IHN0ZXApe1xuICAgICAgcmV0dXJuIFwiY3Vyc29yLXBvaW50ZXIgc3RlcCBzdGVwLWFjY2VudFwiXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFwiY3Vyc29yLXBvaW50ZXIgc3RlcFwiXG4gICAgfVxuICB9XG5cblxuXG4gIGNvbnN0IGRpc3BsYXlXaWRnZXQ9KCk9PntcbiAgICBzd2l0Y2goYWN0aXZlU3RlcCl7XG4gICAgICBjYXNlKDApOntcbiAgICAgICAgcmV0dXJuIDxCYXNpY0luZm9XaWRnZXQgLz5cbiAgICAgIH1cbiAgICAgIGNhc2UoMSk6e1xuICAgICAgICByZXR1cm4gPERhdGFTb3VyY2VXaWRnZXQgc291cmNlcz17cHJvcHMuZGF0YXNvdXJjZXN9Lz5cbiAgICAgIH1cbiAgICAgIGNhc2UoMik6e1xuICAgICAgICByZXR1cm4gPGRpdj4yPC9kaXY+XG4gICAgICB9XG4gICAgICBjYXNlKDMpOntcbiAgICAgICAgcmV0dXJuIDxkaXY+MzwvZGl2PlxuICAgICAgfVxuICAgICAgY2FzZSg0KTp7XG4gICAgICAgIHJldHVybiA8ZGl2PjQ8L2Rpdj5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4ICBnYXAtMSBwLTIgXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgaC1mdWxsIGJnLWJhc2UtMTAwIHJvdW5kZWQtbGcgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0ZXBzIHN0ZXBzLXZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnNldFN0ZXAoMCl9IGNsYXNzTmFtZT17c2V0U3RlcENTUygwKX0+QmFzaWMgSW5mbzwvbGk+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnNldFN0ZXAoMSl9IGNsYXNzTmFtZT17c2V0U3RlcENTUygxKX0+RGF0YSBTb3VyY2VzPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+c2V0U3RlcCgyKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDIpfT5QcmVwPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+c2V0U3RlcCgzKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDMpfT5BbmFseXNpczwvbGk+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PnNldFN0ZXAoNCl9IGNsYXNzTmFtZT17c2V0U3RlcENTUyg0KX0+RXhwb3J0PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBoLWZ1bGwgYmctYmFzZS0xMDAgcm91bmRlZC1sZyBwLTIgZmxleFwiPlxuICAgICAgICB7ZGlzcGxheVdpZGdldCgpfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbkNyZWF0ZVJlcG9ydC5nZXRMYXlvdXQgPSAocGFnZTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtwYWdlfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVJlcG9ydDtcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDphbnkpe1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBcImRhdGFzb3VyY2VzXCI6IFsnRXhhbXBsZSBFeGNlbCcsICdFeGFtcGxlIFNRTCcsICdFeGFtcGxlIEFQSScsICdFeGFtcGxlIENTViddXG4gIH1cbn1cbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJCYXNpY0luZm9XaWRnZXQiLCJEYXRhU291cmNlV2lkZ2V0IiwiQ3JlYXRlUmVwb3J0IiwicHJvcHMiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsImNvbXBsZXRlZCIsInNldGNvbXBsZXRlZCIsInNldFN0ZXAiLCJpbmRleCIsInNldFN0ZXBDU1MiLCJzdGVwIiwiZGlzcGxheVdpZGdldCIsInNvdXJjZXMiLCJkYXRhc291cmNlcyIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJvbkNsaWNrIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-report.tsx\n"));

/***/ })

});