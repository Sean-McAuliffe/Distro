/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/themeProvider.tsx":
/*!**************************************!*\
  !*** ./components/themeProvider.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"ThemeContextProvider\": () => (/* binding */ ThemeContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useCustomEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCustomEffect */ \"./hooks/useCustomEffect.tsx\");\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"default\",\n    setTheme: ()=>{}\n});\n/**\n * Theme Context Provider.\n *\n * @param value string\n * @param children ReactNode\n * @returns ReactNode\n */ const ThemeContextProvider = ({ value =\"default\" , children  })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);\n    (0,_hooks_useCustomEffect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>{\n        const storeTheme = localStorage.getItem(\"theme\");\n        applyTheme(storeTheme || \"default\");\n    }, []);\n    /**\n   * Apply theme to 'html' tag on DOM.\n   */ const applyTheme = (theme = \"default\")=>{\n        let newTheme = theme;\n        const html = document.getElementsByTagName(\"html\")[0];\n        localStorage.setItem(\"theme\", theme);\n        html.setAttribute(\"data-theme\", newTheme);\n    };\n    const handleThemeChange = (theme)=>{\n        setTheme(theme);\n        applyTheme(theme);\n    };\n    /**\n   * Current context value for theme.\n   */ const val = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            theme,\n            setTheme: handleThemeChange\n        }), [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: val,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/frontend/components/themeProvider.tsx\",\n        lineNumber: 62,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lUHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ1Q7QUFPaEQsTUFBTUssNkJBQWVKLG9EQUFhQSxDQUFvQjtJQUMzREssT0FBTztJQUNQQyxVQUFVLElBQU0sQ0FBQztBQUNuQixHQUFHO0FBRUg7Ozs7OztDQU1DLEdBQ00sTUFBTUMsdUJBQXVCLENBQUMsRUFDbkNDLE9BQVEsVUFBUyxFQUNqQkMsU0FBUSxFQUlULEdBQUs7SUFDSixNQUFNLENBQUNKLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNNO0lBRW5DTCxrRUFBZUEsQ0FBQyxJQUFNO1FBQ3BCLE1BQU1PLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztRQUN4Q0MsV0FBV0gsY0FBYztJQUMzQixHQUFHLEVBQUU7SUFFTDs7R0FFQyxHQUNELE1BQU1HLGFBQWEsQ0FBQ1IsUUFBZ0IsU0FBUyxHQUFLO1FBQ2hELElBQUlTLFdBQVdUO1FBQ2YsTUFBTVUsT0FBT0MsU0FBU0Msb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDckROLGFBQWFPLE9BQU8sQ0FBQyxTQUFTYjtRQUM3QlUsS0FBYUksWUFBWSxDQUFDLGNBQWNMO0lBQzNDO0lBR0EsTUFBTU0sb0JBQW9CLENBQUNmLFFBQWtCO1FBQzNDQyxTQUFTRDtRQUNUUSxXQUFXUjtJQUNiO0lBRUE7O0dBRUMsR0FDRCxNQUFNZ0IsTUFBTXBCLDhDQUFPQSxDQUNqQixJQUFPO1lBQ0xJO1lBQ0FDLFVBQVVjO1FBQ1osSUFDQTtRQUFDZjtLQUFNO0lBR1QscUJBQU8sOERBQUNELGFBQWFrQixRQUFRO1FBQUNkLE9BQU9hO2tCQUFNWjs7Ozs7O0FBQzdDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvdGhlbWVQcm92aWRlci50c3g/YjZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VDdXN0b21FZmZlY3QgZnJvbSBcIi4uL2hvb2tzL3VzZUN1c3RvbUVmZmVjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29udGV4dFByb3BzIHtcbiAgdGhlbWU6IHN0cmluZztcbiAgc2V0VGhlbWU6ICh0aGVtZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUaGVtZUNvbnRleHRQcm9wcz4oe1xuICB0aGVtZTogXCJkZWZhdWx0XCIsXG4gIHNldFRoZW1lOiAoKSA9PiB7fSxcbn0pO1xuXG4vKipcbiAqIFRoZW1lIENvbnRleHQgUHJvdmlkZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIHN0cmluZ1xuICogQHBhcmFtIGNoaWxkcmVuIFJlYWN0Tm9kZVxuICogQHJldHVybnMgUmVhY3ROb2RlXG4gKi9cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHRQcm92aWRlciA9ICh7XG4gIHZhbHVlID0gXCJkZWZhdWx0XCIsXG4gIGNoaWxkcmVuLFxufToge1xuICB2YWx1ZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG5cbiAgdXNlQ3VzdG9tRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZVRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICBhcHBseVRoZW1lKHN0b3JlVGhlbWUgfHwgXCJkZWZhdWx0XCIpO1xuICB9LCBbXSk7XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZW1lIHRvICdodG1sJyB0YWcgb24gRE9NLlxuICAgKi9cbiAgY29uc3QgYXBwbHlUaGVtZSA9ICh0aGVtZTogc3RyaW5nID0gXCJkZWZhdWx0XCIpID0+IHtcbiAgICBsZXQgbmV3VGhlbWUgPSB0aGVtZTtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xuICAgIChodG1sIGFzIGFueSkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBuZXdUaGVtZSk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVUaGVtZUNoYW5nZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGhlbWUodGhlbWUpO1xuICAgIGFwcGx5VGhlbWUodGhlbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IGNvbnRleHQgdmFsdWUgZm9yIHRoZW1lLlxuICAgKi9cbiAgY29uc3QgdmFsID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdGhlbWUsXG4gICAgICBzZXRUaGVtZTogaGFuZGxlVGhlbWVDaGFuZ2UsXG4gICAgfSksXG4gICAgW3RoZW1lXVxuICApO1xuXG4gIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx9PntjaGlsZHJlbn08L1RoZW1lQ29udGV4dC5Qcm92aWRlcj47XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VDdXN0b21FZmZlY3QiLCJUaGVtZUNvbnRleHQiLCJ0aGVtZSIsInNldFRoZW1lIiwiVGhlbWVDb250ZXh0UHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RvcmVUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhcHBseVRoZW1lIiwibmV3VGhlbWUiLCJodG1sIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVUaGVtZUNoYW5nZSIsInZhbCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/themeProvider.tsx\n");

/***/ }),

/***/ "./hooks/useCustomEffect.tsx":
/*!***********************************!*\
  !*** ./hooks/useCustomEffect.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useCustomEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDdXN0b21FZmZlY3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRSxrQkFDSixNQUE2QixHQUFHRCxDQUFlQSxHQUFHRCw0Q0FBUztBQUU3RCxpRUFBZUUsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vaG9va3MvdXNlQ3VzdG9tRWZmZWN0LnRzeD9iZDAwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlQ3VzdG9tRWZmZWN0ID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ3VzdG9tRWZmZWN0OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VDdXN0b21FZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useCustomEffect.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_themeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/themeProvider */ \"./components/themeProvider.tsx\");\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    //@ts-ignore\n    const getLayout = Component.getLayout || ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_themeProvider__WEBPACK_IMPORTED_MODULE_2__.ThemeContextProvider, {\n        children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/frontend/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, this))\n    }, void 0, false, {\n        fileName: \"/Users/seanmcauliffe/Desktop/framework/actual/frontend/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRW9DO0FBQ25ELFNBQVNDLElBQUksRUFDMUJDLFVBQVMsRUFDVEMsV0FBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0QsV0FBVyxHQUMzQixFQUFFO0lBRVgsWUFBWTtJQUNaLE1BQU1FLFlBQVlILFVBQVVHLFNBQVMsSUFBS0MsQ0FBQUEsQ0FBQUEsT0FBUUEsSUFBRztJQUdyRCxxQkFDRSw4REFBQ04sMkVBQW9CQTtrQkFFbEJLLHdCQUNDLDhEQUFDSDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBWWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUaGVtZUNvbnRleHRQcm92aWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy90aGVtZVByb3ZpZGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHMpIHtcblxuICAvL0B0cy1pZ25vcmVcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAocGFnZSA9PiBwYWdlKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXI+XG5cbiAgICAgIHtnZXRMYXlvdXQoXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30+PC9Db21wb25lbnQ+XG4gICAgICApfVxuXG5cbiAgICA8L1RoZW1lQ29udGV4dFByb3ZpZGVyPlxuXG5cbiAgKTtcblxuXG5cblxufSJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();