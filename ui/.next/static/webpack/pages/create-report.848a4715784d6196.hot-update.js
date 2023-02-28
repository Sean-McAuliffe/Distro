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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datasourceWidgets_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasourceWidgets/api */ \"./components/create_report_steps/datasourceWidgets/api.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SourceTypes = [\n    \"API\",\n    \"SQL\",\n    \"EXCEL\",\n    \"CSV\"\n];\nconst DataSourceWidget = ()=>{\n    _s();\n    const [formRows, setFormRows] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 0\n        }\n    ]);\n    const getSourceWidget = (type)=>{\n        switch(type){\n            case \"API\":\n                {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_datasourceWidgets_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 24\n                    }, undefined);\n                }\n        }\n    };\n    const handleSetType = (e, id)=>{\n        const currentRowIndex = formRows.findIndex((row)=>row.id == id);\n        const updatedRow = {\n            ...formRows[currentRowIndex],\n            type: e.target.value\n        };\n        const newRows = [\n            ...formRows\n        ];\n        newRows[currentRowIndex] = updatedRow;\n        setFormRows(newRows);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full p-2 flex flex-col gap-3 card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-title w-full\",\n                children: \"Data Sources\"\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: formRows.map((row)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-control\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"label\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label-text\",\n                                    children: \"Data Type\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-group w-full flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        onChange: (e)=>handleSetType(e, row.id),\n                                        defaultValue: \"Pick a type\",\n                                        className: \"select select-bordered\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                disabled: true,\n                                                children: \"Pick a type\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            SourceTypes.map((source)=>{\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: source,\n                                                    children: source\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 41\n                                                }, undefined);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: getSourceWidget(row.type)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, row.id, true, {\n                        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/ui/components/create_report_steps/data_sources.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DataSourceWidget, \"pcU57jmt17FktpfJaLZZxFdHoD8=\");\n_c = DataSourceWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSourceWidget);\nvar _c;\n$RefreshReg$(_c, \"DataSourceWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUN6QjtBQUVoQyxNQUFNRSxjQUFjO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFFRCxNQUFNQyxtQkFBbUIsSUFBTTs7SUFFM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUM7WUFBQ0ssSUFBSTtRQUFDO0tBQUU7SUFFbEQsTUFBTUMsa0JBQWtCLENBQUNDLE9BQWdCO1FBQ3JDLE9BQU9BO1lBQ0gsS0FBSztnQkFBTztvQkFDUixxQkFBTyw4REFBQ1IsOERBQW1CQTs7Ozs7Z0JBQy9CO1FBQ0o7SUFDSjtJQUVBLE1BQU1TLGdCQUFnQixDQUFDQyxHQUFHSixLQUFjO1FBQ3BDLE1BQU1LLGtCQUFrQlAsU0FBU1EsU0FBUyxDQUFDLENBQUNDLE1BQVFBLElBQUlQLEVBQUUsSUFBSUE7UUFDOUQsTUFBTVEsYUFBYTtZQUFDLEdBQUdWLFFBQVEsQ0FBQ08sZ0JBQWdCO1lBQUVILE1BQU1FLEVBQUVLLE1BQU0sQ0FBQ0MsS0FBSztRQUFBO1FBQ3RFLE1BQU1DLFVBQVU7ZUFBSWI7U0FBUztRQUM3QmEsT0FBTyxDQUFDTixnQkFBZ0IsR0FBR0c7UUFFM0JULFlBQVlZO0lBRWhCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBb0I7Ozs7OzswQkFHbkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWZixTQUFTZ0IsR0FBRyxDQUFDLENBQUNQLE1BQVk7b0JBQ3ZCLHFCQUNJLDhEQUFDSzt3QkFBSUMsV0FBVTs7MENBQ25CLDhEQUFDRTtnQ0FBTUYsV0FBVTswQ0FDYiw0RUFBQ0c7b0NBQUtILFdBQVU7OENBQWE7Ozs7Ozs7Ozs7OzBDQUVqQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSTt3Q0FBT0MsVUFBVSxDQUFDZCxJQUFNRCxjQUFjQyxHQUFHRyxJQUFJUCxFQUFFO3dDQUFJbUIsY0FBYzt3Q0FBZU4sV0FBVTs7MERBQ3ZGLDhEQUFDTztnREFBT0MsUUFBUTswREFBQzs7Ozs7OzRDQUNoQnpCLFlBQVlrQixHQUFHLENBQUMsQ0FBQ1EsU0FBVztnREFDekIscUJBQVEsOERBQUNGO29EQUFPVixPQUFPWTs4REFBU0E7Ozs7Ozs0Q0FDcEM7Ozs7Ozs7a0RBR0osOERBQUNWO3dDQUFJQyxXQUFVO2tEQUNWWixnQkFBZ0JNLElBQUlMLElBQUk7Ozs7Ozs7Ozs7Ozs7dUJBYk1LLElBQUlQLEVBQUU7Ozs7O2dCQWtCakQ7Ozs7Ozs7Ozs7OztBQUloQjtHQXBETUg7S0FBQUE7QUF1RE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NyZWF0ZV9yZXBvcnRfc3RlcHMvZGF0YV9zb3VyY2VzLnRzeD8wZTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBUElEYXRhU291cmNlV2lkZ2V0IGZyb20gXCIuL2RhdGFzb3VyY2VXaWRnZXRzL2FwaVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFNvdXJjZVR5cGVzID0gW1xuICAgICdBUEknLFxuICAgICdTUUwnLFxuICAgICdFWENFTCcsXG4gICAgJ0NTVicsXG5dXG5cbmNvbnN0IERhdGFTb3VyY2VXaWRnZXQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbZm9ybVJvd3MsIHNldEZvcm1Sb3dzXSA9IHVzZVN0YXRlKFt7aWQ6IDB9XSlcblxuICAgIGNvbnN0IGdldFNvdXJjZVdpZGdldCA9ICh0eXBlOnN0cmluZykgPT4ge1xuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlKCdBUEknKTp7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBUElEYXRhU291cmNlV2lkZ2V0IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZXRUeXBlID0gKGUsIGlkOm51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50Um93SW5kZXggPSBmb3JtUm93cy5maW5kSW5kZXgoKHJvdykgPT4gcm93LmlkID09IGlkKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFJvdyA9IHsuLi5mb3JtUm93c1tjdXJyZW50Um93SW5kZXhdLCB0eXBlOiBlLnRhcmdldC52YWx1ZX07XG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbLi4uZm9ybVJvd3NdO1xuICAgICAgICBuZXdSb3dzW2N1cnJlbnRSb3dJbmRleF0gPSB1cGRhdGVkUm93O1xuXG4gICAgICAgIHNldEZvcm1Sb3dzKG5ld1Jvd3MpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC0yIGZsZXggZmxleC1jb2wgZ2FwLTMgY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIERhdGEgU291cmNlc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIHtmb3JtUm93cy5tYXAoKHJvdzphbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIga2V5PXtyb3cuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5EYXRhIFR5cGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgdy1mdWxsIGZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZXRUeXBlKGUsIHJvdy5pZCkgfSBkZWZhdWx0VmFsdWU9e1wiUGljayBhIHR5cGVcIn0gY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+UGljayBhIHR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7U291cmNlVHlwZXMubWFwKChzb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8b3B0aW9uIHZhbHVlPXtzb3VyY2V9Pntzb3VyY2V9PC9vcHRpb24+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFNvdXJjZVdpZGdldChyb3cudHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZVdpZGdldDsiXSwibmFtZXMiOlsiQVBJRGF0YVNvdXJjZVdpZGdldCIsInVzZVN0YXRlIiwiU291cmNlVHlwZXMiLCJEYXRhU291cmNlV2lkZ2V0IiwiZm9ybVJvd3MiLCJzZXRGb3JtUm93cyIsImlkIiwiZ2V0U291cmNlV2lkZ2V0IiwidHlwZSIsImhhbmRsZVNldFR5cGUiLCJlIiwiY3VycmVudFJvd0luZGV4IiwiZmluZEluZGV4Iiwicm93IiwidXBkYXRlZFJvdyIsInRhcmdldCIsInZhbHVlIiwibmV3Um93cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImxhYmVsIiwic3BhbiIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/create_report_steps/data_sources.tsx\n"));

/***/ })

});