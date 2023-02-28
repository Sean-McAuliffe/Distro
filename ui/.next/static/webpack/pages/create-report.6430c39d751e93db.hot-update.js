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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/create_report_steps/basic_info */ \"./components/create_report_steps/basic_info.tsx\");\n/* harmony import */ var _components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/create_report_steps/data_sources */ \"./components/create_report_steps/data_sources.tsx\");\n/* harmony import */ var _components_create_report_steps_prep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/create_report_steps/prep */ \"./components/create_report_steps/prep.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CreateReport(props) {\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [sources, setSources] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const setStep = (index)=>{\n        setActiveStep(index);\n    };\n    const setStepCSS = (step)=>{\n        if (activeStep >= step) {\n            return \"cursor-pointer step step-accent\";\n        } else {\n            return \"cursor-pointer step\";\n        }\n    };\n    const displayWidget = ()=>{\n        switch(activeStep){\n            case 0:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 1:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        selected: sources,\n                        func: setSources,\n                        data: props.datasources\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 2:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_prep__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 3:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 4:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 16\n                    }, this);\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex flex-col gap-1 p-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full bg-base-100 rounded-lg p-3 items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"steps steps-vertical\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(0),\n                                className: setStepCSS(0),\n                                children: \"Basic Info\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(1),\n                                className: setStepCSS(1),\n                                children: \"Data Sources\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(2),\n                                className: setStepCSS(2),\n                                children: \"Prep\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(3),\n                                className: setStepCSS(3),\n                                children: \"Analysis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(4),\n                                className: setStepCSS(4),\n                                children: \"Export\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full bg-base-100 rounded-lg p-2 flex\",\n                children: displayWidget()\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateReport, \"6WwuSni4lvYlQp7XKIGUJ2hobM8=\");\n_c = CreateReport;\nCreateReport.getLayout = (page)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateReport);\nvar _c;\n$RefreshReg$(_c, \"CreateReport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcmVwb3J0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNSO0FBQ3lDO0FBQ0c7QUFDZDtBQVkvRCxTQUFTSyxhQUFhQyxLQUF3QixFQUFFOztJQUU5QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFHekMsTUFBTVUsVUFBVSxDQUFDQyxRQUFrQjtRQUNqQ0osY0FBY0k7SUFDaEI7SUFFQSxNQUFNQyxhQUFhLENBQUNDLE9BQWlCO1FBQ25DLElBQUlQLGNBQWNPLE1BQU07WUFDdEIsT0FBTztRQUNULE9BQ0s7WUFDSCxPQUFPO1FBQ1QsQ0FBQztJQUNIO0lBSUEsTUFBTUMsZ0JBQWdCLElBQU07UUFDMUIsT0FBUVI7WUFDTixLQUFNO2dCQUFJO29CQUNSLHFCQUFPLDhEQUFDTCxrRkFBZUE7Ozs7O2dCQUN6QjtZQUNBLEtBQU07Z0JBQUk7b0JBQ1IscUJBQU8sOERBQUNDLG9GQUFnQkE7d0JBQUNhLFVBQVVQO3dCQUFTUSxNQUFNUDt3QkFBWVEsTUFBTVosTUFBTWEsV0FBVzs7Ozs7O2dCQUN2RjtZQUNBLEtBQU07Z0JBQUk7b0JBQ1IscUJBQU8sOERBQUNmLDRFQUFVQTs7Ozs7Z0JBQ3BCO1lBQ0EsS0FBTTtnQkFBSTtvQkFDUixxQkFBTyw4REFBQ2dCO2tDQUFJOzs7Ozs7Z0JBQ2Q7WUFDQSxLQUFNO2dCQUFJO29CQUNSLHFCQUFPLDhEQUFDQTtrQ0FBSTs7Ozs7O2dCQUNkO1FBQ0Y7SUFDRjtJQUdBLHFCQUVFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTs7MENBQ1osOERBQUNFO2dDQUFHQyxTQUFTLElBQU1iLFFBQVE7Z0NBQUlVLFdBQVdSLFdBQVc7MENBQUk7Ozs7OzswQ0FDekQsOERBQUNVO2dDQUFHQyxTQUFTLElBQU1iLFFBQVE7Z0NBQUlVLFdBQVdSLFdBQVc7MENBQUk7Ozs7OzswQ0FDekQsOERBQUNVO2dDQUFHQyxTQUFTLElBQU1iLFFBQVE7Z0NBQUlVLFdBQVdSLFdBQVc7MENBQUk7Ozs7OzswQ0FDekQsOERBQUNVO2dDQUFHQyxTQUFTLElBQU1iLFFBQVE7Z0NBQUlVLFdBQVdSLFdBQVc7MENBQUk7Ozs7OzswQ0FDekQsOERBQUNVO2dDQUFHQyxTQUFTLElBQU1iLFFBQVE7Z0NBQUlVLFdBQVdSLFdBQVc7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSS9ELDhEQUFDTztnQkFBSUMsV0FBVTswQkFDWk47Ozs7Ozs7Ozs7OztBQU1UO0dBaEVTVjtLQUFBQTtBQWtFVEEsYUFBYW9CLFNBQVMsR0FBRyxDQUFDQyxPQUFjO0lBQ3RDLHFCQUNFLDhEQUFDMUIsMERBQU1BO2tCQUNKMEI7Ozs7OztBQUdQOztBQUVBLCtEQUFlckIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtcmVwb3J0LnRzeD84M2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFzaWNJbmZvV2lkZ2V0IGZyb20gXCJAL2NvbXBvbmVudHMvY3JlYXRlX3JlcG9ydF9zdGVwcy9iYXNpY19pbmZvXCI7XG5pbXBvcnQgRGF0YVNvdXJjZVdpZGdldCBmcm9tIFwiQC9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzXCI7XG5pbXBvcnQgUHJlcFdpZGdldCBmcm9tIFwiQC9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvcHJlcFwiO1xuXG5cbnR5cGUgRGF0YVNvdXJjZSA9IHtcbiAgdmFsdWU6IHN0cmluZyxcbiAgbGFiZWw6IHN0cmluZ1xufVxuXG50eXBlIENyZWF0ZVJlcG9ydFByb3BzID0ge1xuICBkYXRhc291cmNlczogQXJyYXk8RGF0YVNvdXJjZT5cbn1cblxuZnVuY3Rpb24gQ3JlYXRlUmVwb3J0KHByb3BzOiBDcmVhdGVSZXBvcnRQcm9wcykge1xuXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDIpXG4gIGNvbnN0IFtzb3VyY2VzLCBzZXRTb3VyY2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIGNvbnN0IHNldFN0ZXAgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoaW5kZXgpXG4gIH1cblxuICBjb25zdCBzZXRTdGVwQ1NTID0gKHN0ZXA6IG51bWJlcikgPT4ge1xuICAgIGlmIChhY3RpdmVTdGVwID49IHN0ZXApIHtcbiAgICAgIHJldHVybiBcImN1cnNvci1wb2ludGVyIHN0ZXAgc3RlcC1hY2NlbnRcIlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBcImN1cnNvci1wb2ludGVyIHN0ZXBcIlxuICAgIH1cbiAgfVxuXG5cblxuICBjb25zdCBkaXNwbGF5V2lkZ2V0ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZlU3RlcCkge1xuICAgICAgY2FzZSAoMCk6IHtcbiAgICAgICAgcmV0dXJuIDxCYXNpY0luZm9XaWRnZXQgLz5cbiAgICAgIH1cbiAgICAgIGNhc2UgKDEpOiB7XG4gICAgICAgIHJldHVybiA8RGF0YVNvdXJjZVdpZGdldCBzZWxlY3RlZD17c291cmNlc30gZnVuYz17c2V0U291cmNlc30gZGF0YT17cHJvcHMuZGF0YXNvdXJjZXN9IC8+XG4gICAgICB9XG4gICAgICBjYXNlICgyKToge1xuICAgICAgICByZXR1cm4gPFByZXBXaWRnZXQgLz5cbiAgICAgIH1cbiAgICAgIGNhc2UgKDMpOiB7XG4gICAgICAgIHJldHVybiA8ZGl2PjM8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGNhc2UgKDQpOiB7XG4gICAgICAgIHJldHVybiA8ZGl2PjQ8L2Rpdj5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sICBnYXAtMSBwLTIgXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1iYXNlLTEwMCByb3VuZGVkLWxnIHAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdGVwcyBzdGVwcy12ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMCl9IGNsYXNzTmFtZT17c2V0U3RlcENTUygwKX0+QmFzaWMgSW5mbzwvbGk+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0U3RlcCgxKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDEpfT5EYXRhIFNvdXJjZXM8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMil9IGNsYXNzTmFtZT17c2V0U3RlcENTUygyKX0+UHJlcDwvbGk+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0U3RlcCgzKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDMpfT5BbmFseXNpczwvbGk+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0U3RlcCg0KX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDQpfT5FeHBvcnQ8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctYmFzZS0xMDAgcm91bmRlZC1sZyBwLTIgZmxleFwiPlxuICAgICAgICB7ZGlzcGxheVdpZGdldCgpfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbkNyZWF0ZVJlcG9ydC5nZXRMYXlvdXQgPSAocGFnZTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtwYWdlfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVJlcG9ydDtcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFwiZGF0YXNvdXJjZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICdFeGFtcGxlIEV4Y2VsJyxcbiAgICAgICAgICBsYWJlbDogJ0V4YW1wbGUgRXhjZWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICdFeGFtcGxlIFNRTCcsXG4gICAgICAgICAgbGFiZWw6ICdFeGFtcGxlIFNRTCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAnRXhhbXBsZSBBUEknLFxuICAgICAgICAgIGxhYmVsOiAnRXhhbXBsZSBBUEknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ0V4YW1wbGUgQ1NWJyxcbiAgICAgICAgICBsYWJlbDogJ0V4YW1wbGUgQ1NWJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVN0YXRlIiwiQmFzaWNJbmZvV2lkZ2V0IiwiRGF0YVNvdXJjZVdpZGdldCIsIlByZXBXaWRnZXQiLCJDcmVhdGVSZXBvcnQiLCJwcm9wcyIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwic291cmNlcyIsInNldFNvdXJjZXMiLCJzZXRTdGVwIiwiaW5kZXgiLCJzZXRTdGVwQ1NTIiwic3RlcCIsImRpc3BsYXlXaWRnZXQiLCJzZWxlY3RlZCIsImZ1bmMiLCJkYXRhIiwiZGF0YXNvdXJjZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwib25DbGljayIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-report.tsx\n"));

/***/ })

});