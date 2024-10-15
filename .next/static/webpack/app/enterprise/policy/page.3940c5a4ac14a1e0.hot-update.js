"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/enterprise/policy/page",{

/***/ "(app-pages-browser)/./app/enterprise/policy/page.js":
/*!***************************************!*\
  !*** ./app/enterprise/policy/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmployeePoliciesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.store/next@13.5.7/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.store/next@13.5.7/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/box/box.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/button/button.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.store/@chakra-ui+react@2.10.2/node_modules/@chakra-ui/react/dist/esm/grid/simple-grid.mjs\");\n/* harmony import */ var _components_InsuranceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/InsuranceCard */ \"(app-pages-browser)/./app/components/InsuranceCard.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ \"(app-pages-browser)/./node_modules/.store/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// 模拟的员工保单数据\nconst initialPolicies = [\n    {\n        contractAddress: \"0x1234567890123456789012345678901234567890\",\n        isContractActive: true,\n        initialTime: Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60,\n        depositedToken: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n        monthlyContribution: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](1000).shiftedBy(6).toString(),\n        monthlyWithdrawal: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](500).shiftedBy(6).toString(),\n        policyHolder: \"0x1111111111111111111111111111111111111111\",\n        beneficiary: \"0x1111111111111111111111111111111111111111\",\n        emergencyAddress: \"0x2222222222222222222222222222222222222222\"\n    },\n    {\n        contractAddress: \"0x0987654321098765432109876543210987654321\",\n        isContractActive: true,\n        initialTime: Math.floor(Date.now() / 1000) - 60 * 24 * 60 * 60,\n        depositedToken: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n        monthlyContribution: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](1500).shiftedBy(6).toString(),\n        monthlyWithdrawal: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](750).shiftedBy(6).toString(),\n        policyHolder: \"0x3333333333333333333333333333333333333333\",\n        beneficiary: \"0x4444444444444444444444444444444444444444\",\n        emergencyAddress: \"0x5555555555555555555555555555555555555555\"\n    },\n    {\n        contractAddress: \"0x5678901234567890123456789012345678901234\",\n        isContractActive: false,\n        initialTime: Math.floor(Date.now() / 1000) - 90 * 24 * 60 * 60,\n        depositedToken: \"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\n        monthlyContribution: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](2000).shiftedBy(6).toString(),\n        monthlyWithdrawal: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](1000).shiftedBy(6).toString(),\n        policyHolder: \"0x6666666666666666666666666666666666666666\",\n        beneficiary: \"0x7777777777777777777777777777777777777777\",\n        emergencyAddress: \"0x8888888888888888888888888888888888888888\"\n    }\n];\nfunction EmployeePoliciesPage() {\n    _s();\n    const [policies, setPolicies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPolicies);\n    const textColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray.800\", \"white\");\n    const handleAddPolicy = ()=>{\n        // 这里应该打开一个模态框来添加新的保单\n        console.log(\"添加新保单\");\n    };\n    // 模拟函数\n    const mockFunction = ()=>console.log(\"Function called\");\n    const mockFormatAmount = (amount)=>amount.toFixed(2);\n    const mock_t = (cn, en)=>cn; // 使用中文\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        className: \"container\",\n        py: 8,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n            spacing: 6,\n            align: \"stretch\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    as: \"h1\",\n                    size: \"2xl\",\n                    color: textColor,\n                    textAlign: \"center\",\n                    children: \"员工保单列表\"\n                }, void 0, false, {\n                    fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    colorScheme: \"blue\",\n                    onClick: handleAddPolicy,\n                    alignSelf: \"flex-end\",\n                    children: \"添加员工保单\"\n                }, void 0, false, {\n                    fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.SimpleGrid, {\n                    columns: {\n                        base: 1,\n                        lg: 2\n                    },\n                    spacing: 6,\n                    children: policies.map((policy, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InsuranceCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            insurance: policy,\n                            index: index,\n                            symbol: \"USDC\",\n                            decimals: 6,\n                            paidBalance: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](policy.monthlyContribution).multipliedBy(3),\n                            toBePaidBalance: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0),\n                            withdrawableBalance: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](policy.monthlyContribution).multipliedBy(3),\n                            startWithdrawTime: policy.initialTime + 365 * 24 * 60 * 60,\n                            curAvailableFunds: new bignumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](policy.monthlyWithdrawal),\n                            walletAddress: \"0x1111111111111111111111111111111111111111\" // 模拟当前钱包地址\n                            ,\n                            handleClaimFunds: mockFunction,\n                            handleDeposit: mockFunction,\n                            handleWithdrawBalance: mockFunction,\n                            handleConvertToYieldAsset: mockFunction,\n                            handleTerminatePolicy: mockFunction,\n                            handleCloseAccount: mockFunction,\n                            claimingFunds: false,\n                            withdrawing: false,\n                            terminatingPolicy: false,\n                            emergencyWithdrawing: false,\n                            formatAmount: mockFormatAmount,\n                            _t: mock_t\n                        }, policy.contractAddress, false, {\n                            fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yusen/blockchain/socialSecurity/BeThink/frontend/app/enterprise/policy/page.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(EmployeePoliciesPage, \"iefskPABN2zs0wYmv0DWfDdQ+js=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = EmployeePoliciesPage;\nvar _c;\n$RefreshReg$(_c, \"EmployeePoliciesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lbnRlcnByaXNlL3BvbGljeS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBUVA7QUFDaUM7QUFDdEI7QUFFckMsWUFBWTtBQUNaLE1BQU1TLGtCQUFrQjtJQUN0QjtRQUNFQyxpQkFBaUI7UUFDakJDLGtCQUFrQjtRQUNsQkMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUssUUFBUSxLQUFLLEtBQUssS0FBSztRQUM1REMsZ0JBQWdCO1FBQ2hCQyxxQkFBcUIsSUFBSVYsb0RBQVNBLENBQUMsTUFBTVcsU0FBUyxDQUFDLEdBQUdDLFFBQVE7UUFDOURDLG1CQUFtQixJQUFJYixvREFBU0EsQ0FBQyxLQUFLVyxTQUFTLENBQUMsR0FBR0MsUUFBUTtRQUMzREUsY0FBYztRQUNkQyxhQUFhO1FBQ2JDLGtCQUFrQjtJQUNwQjtJQUNBO1FBQ0VkLGlCQUFpQjtRQUNqQkMsa0JBQWtCO1FBQ2xCQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQzVEQyxnQkFBZ0I7UUFDaEJDLHFCQUFxQixJQUFJVixvREFBU0EsQ0FBQyxNQUFNVyxTQUFTLENBQUMsR0FBR0MsUUFBUTtRQUM5REMsbUJBQW1CLElBQUliLG9EQUFTQSxDQUFDLEtBQUtXLFNBQVMsQ0FBQyxHQUFHQyxRQUFRO1FBQzNERSxjQUFjO1FBQ2RDLGFBQWE7UUFDYkMsa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDRWQsaUJBQWlCO1FBQ2pCQyxrQkFBa0I7UUFDbEJDLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDNURDLGdCQUFnQjtRQUNoQkMscUJBQXFCLElBQUlWLG9EQUFTQSxDQUFDLE1BQU1XLFNBQVMsQ0FBQyxHQUFHQyxRQUFRO1FBQzlEQyxtQkFBbUIsSUFBSWIsb0RBQVNBLENBQUMsTUFBTVcsU0FBUyxDQUFDLEdBQUdDLFFBQVE7UUFDNURFLGNBQWM7UUFDZEMsYUFBYTtRQUNiQyxrQkFBa0I7SUFDcEI7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFDUztJQUN6QyxNQUFNbUIsWUFBWXZCLG1FQUFpQkEsQ0FBQyxZQUFZO0lBRWhELE1BQU13QixrQkFBa0I7UUFDdEIscUJBQXFCO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLE9BQU87SUFDUCxNQUFNQyxlQUFlLElBQU1GLFFBQVFDLEdBQUcsQ0FBQztJQUN2QyxNQUFNRSxtQkFBbUIsQ0FBQ0MsU0FBV0EsT0FBT0MsT0FBTyxDQUFDO0lBQ3BELE1BQU1DLFNBQVMsQ0FBQ0MsSUFBSUMsS0FBT0QsSUFBSSxPQUFPO0lBRXRDLHFCQUNFLDhEQUFDcEMsaURBQUdBO1FBQUNzQyxXQUFVO1FBQVlDLElBQUk7a0JBQzdCLDRFQUFDckMsb0RBQU1BO1lBQUNzQyxTQUFTO1lBQUdDLE9BQU07OzhCQUN4Qiw4REFBQ3hDLHFEQUFPQTtvQkFBQ3lDLElBQUc7b0JBQUtDLE1BQUs7b0JBQU1DLE9BQU9qQjtvQkFBV2tCLFdBQVU7OEJBQVM7Ozs7Ozs4QkFDakUsOERBQUMxQyxvREFBTUE7b0JBQUMyQyxhQUFZO29CQUFPQyxTQUFTbkI7b0JBQWlCb0IsV0FBVTs4QkFBVzs7Ozs7OzhCQUcxRSw4REFBQzNDLHdEQUFVQTtvQkFBQzRDLFNBQVM7d0JBQUVDLE1BQU07d0JBQUdDLElBQUk7b0JBQUU7b0JBQUdYLFNBQVM7OEJBQy9DZixTQUFTMkIsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNyQiw4REFBQ2hELGlFQUFhQTs0QkFFWmlELFdBQVdGOzRCQUNYQyxPQUFPQTs0QkFDUEUsUUFBTzs0QkFDUEMsVUFBVTs0QkFDVkMsYUFBYSxJQUFJbkQsb0RBQVNBLENBQUM4QyxPQUFPcEMsbUJBQW1CLEVBQUUwQyxZQUFZLENBQUM7NEJBQ3BFQyxpQkFBaUIsSUFBSXJELG9EQUFTQSxDQUFDOzRCQUMvQnNELHFCQUFxQixJQUFJdEQsb0RBQVNBLENBQUM4QyxPQUFPcEMsbUJBQW1CLEVBQUUwQyxZQUFZLENBQUM7NEJBQzVFRyxtQkFBbUJULE9BQU8xQyxXQUFXLEdBQUcsTUFBTSxLQUFLLEtBQUs7NEJBQ3hEb0QsbUJBQW1CLElBQUl4RCxvREFBU0EsQ0FBQzhDLE9BQU9qQyxpQkFBaUI7NEJBQ3pENEMsZUFBYyw2Q0FBNkMsV0FBVzs7NEJBQ3RFQyxrQkFBa0JsQzs0QkFDbEJtQyxlQUFlbkM7NEJBQ2ZvQyx1QkFBdUJwQzs0QkFDdkJxQywyQkFBMkJyQzs0QkFDM0JzQyx1QkFBdUJ0Qzs0QkFDdkJ1QyxvQkFBb0J2Qzs0QkFDcEJ3QyxlQUFlOzRCQUNmQyxhQUFhOzRCQUNiQyxtQkFBbUI7NEJBQ25CQyxzQkFBc0I7NEJBQ3RCQyxjQUFjM0M7NEJBQ2Q0QyxJQUFJekM7MkJBdEJDa0IsT0FBTzVDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCekM7R0FyRHdCZTs7UUFFSnBCLCtEQUFpQkE7OztLQUZib0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VudGVycHJpc2UvcG9saWN5L3BhZ2UuanM/YmE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJveCxcbiAgSGVhZGluZyxcbiAgVlN0YWNrLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBTaW1wbGVHcmlkXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEluc3VyYW5jZUNhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnN1cmFuY2VDYXJkJztcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcblxuLy8g5qih5ouf55qE5ZGY5bel5L+d5Y2V5pWw5o2uXG5jb25zdCBpbml0aWFsUG9saWNpZXMgPSBbXG4gIHtcbiAgICBjb250cmFjdEFkZHJlc3M6ICcweDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAnLFxuICAgIGlzQ29udHJhY3RBY3RpdmU6IHRydWUsXG4gICAgaW5pdGlhbFRpbWU6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApIC0gMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXMgYWdvXG4gICAgZGVwb3NpdGVkVG9rZW46ICcweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDgnLCAvLyBVU0RDIGFkZHJlc3NcbiAgICBtb250aGx5Q29udHJpYnV0aW9uOiBuZXcgQmlnTnVtYmVyKDEwMDApLnNoaWZ0ZWRCeSg2KS50b1N0cmluZygpLCAvLyAxMDAwIFVTRENcbiAgICBtb250aGx5V2l0aGRyYXdhbDogbmV3IEJpZ051bWJlcig1MDApLnNoaWZ0ZWRCeSg2KS50b1N0cmluZygpLCAvLyA1MDAgVVNEQ1xuICAgIHBvbGljeUhvbGRlcjogJzB4MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMScsXG4gICAgYmVuZWZpY2lhcnk6ICcweDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEnLFxuICAgIGVtZXJnZW5jeUFkZHJlc3M6ICcweDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjInXG4gIH0sXG4gIHtcbiAgICBjb250cmFjdEFkZHJlc3M6ICcweDA5ODc2NTQzMjEwOTg3NjU0MzIxMDk4NzY1NDMyMTA5ODc2NTQzMjEnLFxuICAgIGlzQ29udHJhY3RBY3RpdmU6IHRydWUsXG4gICAgaW5pdGlhbFRpbWU6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApIC0gNjAgKiAyNCAqIDYwICogNjAsIC8vIDYwIGRheXMgYWdvXG4gICAgZGVwb3NpdGVkVG9rZW46ICcweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDgnLCAvLyBVU0RDIGFkZHJlc3NcbiAgICBtb250aGx5Q29udHJpYnV0aW9uOiBuZXcgQmlnTnVtYmVyKDE1MDApLnNoaWZ0ZWRCeSg2KS50b1N0cmluZygpLCAvLyAxNTAwIFVTRENcbiAgICBtb250aGx5V2l0aGRyYXdhbDogbmV3IEJpZ051bWJlcig3NTApLnNoaWZ0ZWRCeSg2KS50b1N0cmluZygpLCAvLyA3NTAgVVNEQ1xuICAgIHBvbGljeUhvbGRlcjogJzB4MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMycsXG4gICAgYmVuZWZpY2lhcnk6ICcweDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQnLFxuICAgIGVtZXJnZW5jeUFkZHJlc3M6ICcweDU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTUnXG4gIH0sXG4gIHtcbiAgICBjb250cmFjdEFkZHJlc3M6ICcweDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQnLFxuICAgIGlzQ29udHJhY3RBY3RpdmU6IGZhbHNlLFxuICAgIGluaXRpYWxUaW1lOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSAtIDkwICogMjQgKiA2MCAqIDYwLCAvLyA5MCBkYXlzIGFnb1xuICAgIGRlcG9zaXRlZFRva2VuOiAnMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4JywgLy8gVVNEQyBhZGRyZXNzXG4gICAgbW9udGhseUNvbnRyaWJ1dGlvbjogbmV3IEJpZ051bWJlcigyMDAwKS5zaGlmdGVkQnkoNikudG9TdHJpbmcoKSwgLy8gMjAwMCBVU0RDXG4gICAgbW9udGhseVdpdGhkcmF3YWw6IG5ldyBCaWdOdW1iZXIoMTAwMCkuc2hpZnRlZEJ5KDYpLnRvU3RyaW5nKCksIC8vIDEwMDAgVVNEQ1xuICAgIHBvbGljeUhvbGRlcjogJzB4NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NicsXG4gICAgYmVuZWZpY2lhcnk6ICcweDc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzcnLFxuICAgIGVtZXJnZW5jeUFkZHJlc3M6ICcweDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgnXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtcGxveWVlUG9saWNpZXNQYWdlKCkge1xuICBjb25zdCBbcG9saWNpZXMsIHNldFBvbGljaWVzXSA9IHVzZVN0YXRlKGluaXRpYWxQb2xpY2llcyk7XG4gIGNvbnN0IHRleHRDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICd3aGl0ZScpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFBvbGljeSA9ICgpID0+IHtcbiAgICAvLyDov5nph4zlupTor6XmiZPlvIDkuIDkuKrmqKHmgIHmoYbmnaXmt7vliqDmlrDnmoTkv53ljZVcbiAgICBjb25zb2xlLmxvZyhcIua3u+WKoOaWsOS/neWNlVwiKTtcbiAgfTtcblxuICAvLyDmqKHmi5/lh73mlbBcbiAgY29uc3QgbW9ja0Z1bmN0aW9uID0gKCkgPT4gY29uc29sZS5sb2coXCJGdW5jdGlvbiBjYWxsZWRcIik7XG4gIGNvbnN0IG1vY2tGb3JtYXRBbW91bnQgPSAoYW1vdW50KSA9PiBhbW91bnQudG9GaXhlZCgyKTtcbiAgY29uc3QgbW9ja190ID0gKGNuLCBlbikgPT4gY247IC8vIOS9v+eUqOS4reaWh1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9XCJjb250YWluZXJcIiBweT17OH0+XG4gICAgICA8VlN0YWNrIHNwYWNpbmc9ezZ9IGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiIGNvbG9yPXt0ZXh0Q29sb3J9IHRleHRBbGlnbj1cImNlbnRlclwiPuWRmOW3peS/neWNleWIl+ihqDwvSGVhZGluZz5cbiAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXtoYW5kbGVBZGRQb2xpY3l9IGFsaWduU2VsZj1cImZsZXgtZW5kXCI+XG4gICAgICAgICAg5re75Yqg5ZGY5bel5L+d5Y2VXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXt7IGJhc2U6IDEsIGxnOiAyIH19IHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIHtwb2xpY2llcy5tYXAoKHBvbGljeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxJbnN1cmFuY2VDYXJkXG4gICAgICAgICAgICAgIGtleT17cG9saWN5LmNvbnRyYWN0QWRkcmVzc31cbiAgICAgICAgICAgICAgaW5zdXJhbmNlPXtwb2xpY3l9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgc3ltYm9sPVwiVVNEQ1wiXG4gICAgICAgICAgICAgIGRlY2ltYWxzPXs2fVxuICAgICAgICAgICAgICBwYWlkQmFsYW5jZT17bmV3IEJpZ051bWJlcihwb2xpY3kubW9udGhseUNvbnRyaWJ1dGlvbikubXVsdGlwbGllZEJ5KDMpfSAvLyDmqKHmi5/lt7LnvLTnurMz5Liq5pyIXG4gICAgICAgICAgICAgIHRvQmVQYWlkQmFsYW5jZT17bmV3IEJpZ051bWJlcigwKX0gLy8g5qih5ouf5peg5b6F57y057qz6YeR6aKdXG4gICAgICAgICAgICAgIHdpdGhkcmF3YWJsZUJhbGFuY2U9e25ldyBCaWdOdW1iZXIocG9saWN5Lm1vbnRobHlDb250cmlidXRpb24pLm11bHRpcGxpZWRCeSgzKX0gLy8g5qih5ouf5Y+v5o+Q5Y+W6YeR6aKd562J5LqO5bey57y057qz6YeR6aKdXG4gICAgICAgICAgICAgIHN0YXJ0V2l0aGRyYXdUaW1lPXtwb2xpY3kuaW5pdGlhbFRpbWUgKyAzNjUgKiAyNCAqIDYwICogNjB9IC8vIOaooeaLn+S4gOW5tOWQjuW8gOWni+aPkOWPllxuICAgICAgICAgICAgICBjdXJBdmFpbGFibGVGdW5kcz17bmV3IEJpZ051bWJlcihwb2xpY3kubW9udGhseVdpdGhkcmF3YWwpfSAvLyDmqKHmi5/lvZPliY3lj6/nlKjotYTph5HkuLrkuIDkuKrmnIjnmoTmj5Dlj5bph5Hpop1cbiAgICAgICAgICAgICAgd2FsbGV0QWRkcmVzcz1cIjB4MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVwiIC8vIOaooeaLn+W9k+WJjemSseWMheWcsOWdgFxuICAgICAgICAgICAgICBoYW5kbGVDbGFpbUZ1bmRzPXttb2NrRnVuY3Rpb259XG4gICAgICAgICAgICAgIGhhbmRsZURlcG9zaXQ9e21vY2tGdW5jdGlvbn1cbiAgICAgICAgICAgICAgaGFuZGxlV2l0aGRyYXdCYWxhbmNlPXttb2NrRnVuY3Rpb259XG4gICAgICAgICAgICAgIGhhbmRsZUNvbnZlcnRUb1lpZWxkQXNzZXQ9e21vY2tGdW5jdGlvbn1cbiAgICAgICAgICAgICAgaGFuZGxlVGVybWluYXRlUG9saWN5PXttb2NrRnVuY3Rpb259XG4gICAgICAgICAgICAgIGhhbmRsZUNsb3NlQWNjb3VudD17bW9ja0Z1bmN0aW9ufVxuICAgICAgICAgICAgICBjbGFpbWluZ0Z1bmRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgd2l0aGRyYXdpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICB0ZXJtaW5hdGluZ1BvbGljeT17ZmFsc2V9XG4gICAgICAgICAgICAgIGVtZXJnZW5jeVdpdGhkcmF3aW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgZm9ybWF0QW1vdW50PXttb2NrRm9ybWF0QW1vdW50fVxuICAgICAgICAgICAgICBfdD17bW9ja190fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJIZWFkaW5nIiwiVlN0YWNrIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTaW1wbGVHcmlkIiwiSW5zdXJhbmNlQ2FyZCIsIkJpZ051bWJlciIsImluaXRpYWxQb2xpY2llcyIsImNvbnRyYWN0QWRkcmVzcyIsImlzQ29udHJhY3RBY3RpdmUiLCJpbml0aWFsVGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJkZXBvc2l0ZWRUb2tlbiIsIm1vbnRobHlDb250cmlidXRpb24iLCJzaGlmdGVkQnkiLCJ0b1N0cmluZyIsIm1vbnRobHlXaXRoZHJhd2FsIiwicG9saWN5SG9sZGVyIiwiYmVuZWZpY2lhcnkiLCJlbWVyZ2VuY3lBZGRyZXNzIiwiRW1wbG95ZWVQb2xpY2llc1BhZ2UiLCJwb2xpY2llcyIsInNldFBvbGljaWVzIiwidGV4dENvbG9yIiwiaGFuZGxlQWRkUG9saWN5IiwiY29uc29sZSIsImxvZyIsIm1vY2tGdW5jdGlvbiIsIm1vY2tGb3JtYXRBbW91bnQiLCJhbW91bnQiLCJ0b0ZpeGVkIiwibW9ja190IiwiY24iLCJlbiIsImNsYXNzTmFtZSIsInB5Iiwic3BhY2luZyIsImFsaWduIiwiYXMiLCJzaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJjb2xvclNjaGVtZSIsIm9uQ2xpY2siLCJhbGlnblNlbGYiLCJjb2x1bW5zIiwiYmFzZSIsImxnIiwibWFwIiwicG9saWN5IiwiaW5kZXgiLCJpbnN1cmFuY2UiLCJzeW1ib2wiLCJkZWNpbWFscyIsInBhaWRCYWxhbmNlIiwibXVsdGlwbGllZEJ5IiwidG9CZVBhaWRCYWxhbmNlIiwid2l0aGRyYXdhYmxlQmFsYW5jZSIsInN0YXJ0V2l0aGRyYXdUaW1lIiwiY3VyQXZhaWxhYmxlRnVuZHMiLCJ3YWxsZXRBZGRyZXNzIiwiaGFuZGxlQ2xhaW1GdW5kcyIsImhhbmRsZURlcG9zaXQiLCJoYW5kbGVXaXRoZHJhd0JhbGFuY2UiLCJoYW5kbGVDb252ZXJ0VG9ZaWVsZEFzc2V0IiwiaGFuZGxlVGVybWluYXRlUG9saWN5IiwiaGFuZGxlQ2xvc2VBY2NvdW50IiwiY2xhaW1pbmdGdW5kcyIsIndpdGhkcmF3aW5nIiwidGVybWluYXRpbmdQb2xpY3kiLCJlbWVyZ2VuY3lXaXRoZHJhd2luZyIsImZvcm1hdEFtb3VudCIsIl90Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/enterprise/policy/page.js\n"));

/***/ })

});