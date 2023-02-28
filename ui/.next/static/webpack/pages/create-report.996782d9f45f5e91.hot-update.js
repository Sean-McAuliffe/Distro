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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/create_report_steps/basic_info */ \"./components/create_report_steps/basic_info.tsx\");\n/* harmony import */ var _components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/create_report_steps/data_sources */ \"./components/create_report_steps/data_sources.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateReport(props) {\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [completed, setcompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const setStep = (index)=>{\n        setActiveStep(index);\n    };\n    const setStepCSS = (step)=>{\n        if (activeStep >= step) {\n            return \"cursor-pointer step step-accent\";\n        } else {\n            return \"cursor-pointer step\";\n        }\n    };\n    const displayWidget = ()=>{\n        switch(activeStep){\n            case 0:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_basic_info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 1:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_create_report_steps_data_sources__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: props.datasources\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 2:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 3:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 16\n                    }, this);\n                }\n            case 4:\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 16\n                    }, this);\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex gap-1 p-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/5 h-full bg-base-100 rounded-lg p-3 items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"steps steps-vertical\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(0),\n                                className: setStepCSS(0),\n                                children: \"Basic Info\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(1),\n                                className: setStepCSS(1),\n                                children: \"Data Sources\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(2),\n                                className: setStepCSS(2),\n                                children: \"Prep\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(3),\n                                className: setStepCSS(3),\n                                children: \"Analysis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>setStep(4),\n                                className: setStepCSS(4),\n                                children: \"Export\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-4/5 h-full bg-base-100 rounded-lg p-2 flex\",\n                children: displayWidget()\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateReport, \"ALsREmK5OVSGicszLrz5tl7UbQg=\");\n_c = CreateReport;\nCreateReport.getLayout = (page)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/pages/create-report.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateReport);\nvar _c;\n$RefreshReg$(_c, \"CreateReport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcmVwb3J0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDeUM7QUFDRztBQVc3RSxTQUFTSSxhQUFhQyxLQUF1QixFQUFFOztJQUU3QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0MsTUFBTVMsVUFBUSxDQUFDQyxRQUFlO1FBQzVCSixjQUFjSTtJQUNoQjtJQUVBLE1BQU1DLGFBQVksQ0FBQ0MsT0FBZ0I7UUFDakMsSUFBSVAsY0FBY08sTUFBSztZQUNyQixPQUFPO1FBQ1QsT0FDSztZQUNILE9BQU87UUFDVCxDQUFDO0lBQ0g7SUFJQSxNQUFNQyxnQkFBYyxJQUFJO1FBQ3RCLE9BQU9SO1lBQ0wsS0FBSztnQkFBRztvQkFDTixxQkFBTyw4REFBQ0osa0ZBQWVBOzs7OztnQkFDekI7WUFDQSxLQUFLO2dCQUFHO29CQUNOLHFCQUFPLDhEQUFDQyxvRkFBZ0JBO3dCQUFDWSxNQUFNVixNQUFNVyxXQUFXOzs7Ozs7Z0JBQ2xEO1lBQ0EsS0FBSztnQkFBRztvQkFDTixxQkFBTyw4REFBQ0M7a0NBQUk7Ozs7OztnQkFDZDtZQUNBLEtBQUs7Z0JBQUc7b0JBQ04scUJBQU8sOERBQUNBO2tDQUFJOzs7Ozs7Z0JBQ2Q7WUFDQSxLQUFLO2dCQUFHO29CQUNOLHFCQUFPLDhEQUFDQTtrQ0FBSTs7Ozs7O2dCQUNkO1FBQ0Y7SUFDRjtJQUdBLHFCQUVFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTs7MENBQ1osOERBQUNFO2dDQUFHQyxTQUFTLElBQUlYLFFBQVE7Z0NBQUlRLFdBQVdOLFdBQVc7MENBQUk7Ozs7OzswQ0FDdkQsOERBQUNRO2dDQUFHQyxTQUFTLElBQUlYLFFBQVE7Z0NBQUlRLFdBQVdOLFdBQVc7MENBQUk7Ozs7OzswQ0FDdkQsOERBQUNRO2dDQUFHQyxTQUFTLElBQUlYLFFBQVE7Z0NBQUlRLFdBQVdOLFdBQVc7MENBQUk7Ozs7OzswQ0FDdkQsOERBQUNRO2dDQUFHQyxTQUFTLElBQUlYLFFBQVE7Z0NBQUlRLFdBQVdOLFdBQVc7MENBQUk7Ozs7OzswQ0FDdkQsOERBQUNRO2dDQUFHQyxTQUFTLElBQUlYLFFBQVE7Z0NBQUlRLFdBQVdOLFdBQVc7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTdELDhEQUFDSztnQkFBSUMsV0FBVTswQkFDWko7Ozs7Ozs7Ozs7OztBQU1UO0dBaEVTVjtLQUFBQTtBQWtFVEEsYUFBYWtCLFNBQVMsR0FBRyxDQUFDQyxPQUFjO0lBQ3RDLHFCQUNFLDhEQUFDdkIsMERBQU1BO2tCQUNKdUI7Ozs7OztBQUdQOztBQUVBLCtEQUFlbkIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtcmVwb3J0LnRzeD84M2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFzaWNJbmZvV2lkZ2V0IGZyb20gXCJAL2NvbXBvbmVudHMvY3JlYXRlX3JlcG9ydF9zdGVwcy9iYXNpY19pbmZvXCI7XG5pbXBvcnQgRGF0YVNvdXJjZVdpZGdldCBmcm9tIFwiQC9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzXCI7XG5cbnR5cGUgZGF0YXNvdXJjZSA9IHtcbiAgdmFsdWU6c3RyaW5nLFxuICBsYWJlbDpzdHJpbmdcbn1cblxudHlwZSBDcmVhdGVSZXBvcnRQcm9wcyA9IHtcbiAgZGF0YXNvdXJjZXM6IEFycmF5PGRhdGFzb3VyY2U+XG59XG5cbmZ1bmN0aW9uIENyZWF0ZVJlcG9ydChwcm9wczpDcmVhdGVSZXBvcnRQcm9wcykge1xuXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Y29tcGxldGVkXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHNldFN0ZXA9KGluZGV4Om51bWJlcik9PntcbiAgICBzZXRBY3RpdmVTdGVwKGluZGV4KVxuICB9XG5cbiAgY29uc3Qgc2V0U3RlcENTUyA9KHN0ZXA6bnVtYmVyKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVN0ZXAgPj0gc3RlcCl7XG4gICAgICByZXR1cm4gXCJjdXJzb3ItcG9pbnRlciBzdGVwIHN0ZXAtYWNjZW50XCJcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXCJjdXJzb3ItcG9pbnRlciBzdGVwXCJcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgZGlzcGxheVdpZGdldD0oKT0+e1xuICAgIHN3aXRjaChhY3RpdmVTdGVwKXtcbiAgICAgIGNhc2UoMCk6e1xuICAgICAgICByZXR1cm4gPEJhc2ljSW5mb1dpZGdldCAvPlxuICAgICAgfVxuICAgICAgY2FzZSgxKTp7XG4gICAgICAgIHJldHVybiA8RGF0YVNvdXJjZVdpZGdldCBkYXRhPXtwcm9wcy5kYXRhc291cmNlc30vPlxuICAgICAgfVxuICAgICAgY2FzZSgyKTp7XG4gICAgICAgIHJldHVybiA8ZGl2PjI8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGNhc2UoMyk6e1xuICAgICAgICByZXR1cm4gPGRpdj4zPC9kaXY+XG4gICAgICB9XG4gICAgICBjYXNlKDQpOntcbiAgICAgICAgcmV0dXJuIDxkaXY+NDwvZGl2PlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggIGdhcC0xIHAtMiBcIj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBoLWZ1bGwgYmctYmFzZS0xMDAgcm91bmRlZC1sZyBwLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RlcHMgc3RlcHMtdmVydGljYWxcIj5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+c2V0U3RlcCgwKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDApfT5CYXNpYyBJbmZvPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+c2V0U3RlcCgxKX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDEpfT5EYXRhIFNvdXJjZXM8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT5zZXRTdGVwKDIpfSBjbGFzc05hbWU9e3NldFN0ZXBDU1MoMil9PlByZXA8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT5zZXRTdGVwKDMpfSBjbGFzc05hbWU9e3NldFN0ZXBDU1MoMyl9PkFuYWx5c2lzPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+c2V0U3RlcCg0KX0gY2xhc3NOYW1lPXtzZXRTdGVwQ1NTKDQpfT5FeHBvcnQ8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC81IGgtZnVsbCBiZy1iYXNlLTEwMCByb3VuZGVkLWxnIHAtMiBmbGV4XCI+XG4gICAgICAgIHtkaXNwbGF5V2lkZ2V0KCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuQ3JlYXRlUmVwb3J0LmdldExheW91dCA9IChwYWdlOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3BhZ2V9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUmVwb3J0O1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OmFueSl7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFwiZGF0YXNvdXJjZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICdFeGFtcGxlIEV4Y2VsJyxcbiAgICAgICAgICBsYWJlbDogICdFeGFtcGxlIEV4Y2VsJywgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTonRXhhbXBsZSBTUUwnLCBcbiAgICAgICAgICBsYWJlbDonRXhhbXBsZSBTUUwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJ0V4YW1wbGUgQVBJJyxcbiAgICAgICAgICBsYWJlbDogJ0V4YW1wbGUgQVBJJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICdFeGFtcGxlIENTVicsXG4gICAgICAgICAgbGFiZWw6ICdFeGFtcGxlIENTVidcbiAgICAgICAgfVxuICAgICAgXVxuICB9XG59XG59Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVN0YXRlIiwiQmFzaWNJbmZvV2lkZ2V0IiwiRGF0YVNvdXJjZVdpZGdldCIsIkNyZWF0ZVJlcG9ydCIsInByb3BzIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJjb21wbGV0ZWQiLCJzZXRjb21wbGV0ZWQiLCJzZXRTdGVwIiwiaW5kZXgiLCJzZXRTdGVwQ1NTIiwic3RlcCIsImRpc3BsYXlXaWRnZXQiLCJkYXRhIiwiZGF0YXNvdXJjZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwib25DbGljayIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-report.tsx\n"));

/***/ })

});