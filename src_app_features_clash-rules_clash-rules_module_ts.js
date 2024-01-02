"use strict";
(self["webpackChunkng_clash"] = self["webpackChunkng_clash"] || []).push([["src_app_features_clash-rules_clash-rules_module_ts"],{

/***/ 4196:
/*!********************************************************************!*\
  !*** ./src/app/features/clash-rules/clash-rules-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClashRulesRoutingModule: () => (/* binding */ ClashRulesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/rule-list/rule-list.component */ 6309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _components_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_0__.RuleListComponent
}];
class ClashRulesRoutingModule {
  static #_ = this.ɵfac = function ClashRulesRoutingModule_Factory(t) {
    return new (t || ClashRulesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ClashRulesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClashRulesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 777:
/*!************************************************************!*\
  !*** ./src/app/features/clash-rules/clash-rules.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClashRulesModule: () => (/* binding */ ClashRulesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _clash_rules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clash-rules-routing.module */ 4196);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material/material.module */ 4611);
/* harmony import */ var _components_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rule-list/rule-list.component */ 6309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ClashRulesModule {
  static #_ = this.ɵfac = function ClashRulesModule_Factory(t) {
    return new (t || ClashRulesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ClashRulesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _clash_rules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClashRulesRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClashRulesModule, {
    declarations: [_components_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_2__.RuleListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _clash_rules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClashRulesRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule]
  });
})();

/***/ }),

/***/ 6309:
/*!**********************************************************************************!*\
  !*** ./src/app/features/clash-rules/components/rule-list/rule-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListComponent: () => (/* binding */ RuleListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service */ 5583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function RuleListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rule_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r1.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r1.proxy);
  }
}
class RuleListComponent {
  constructor(clashApiService) {
    this.clashApiService = clashApiService;
    this.rules = [];
  }
  ngOnInit() {
    this.clashApiService.fetchRules().subscribe(res => {
      this.rules = res.rules;
    });
  }
  static #_ = this.ɵfac = function RuleListComponent_Factory(t) {
    return new (t || RuleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_0__.ClashApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RuleListComponent,
    selectors: [["app-rule-list"]],
    decls: 2,
    vars: 1,
    consts: [[1, "container"], ["class", "rule", 4, "ngFor", "ngForOf"], [1, "rule"], [1, "type"], [1, "payload"], [1, "proxy"]],
    template: function RuleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RuleListComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rules);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".container[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.container[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8px 0 7px 0;\n  border-bottom: 1px dotted;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.7529411765);\n}\n.container[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  flex: 1 0 35%;\n}\n.container[_ngcontent-%COMP%]   .payload[_ngcontent-%COMP%] {\n  flex: 1 1 60%;\n}\n.container[_ngcontent-%COMP%]   .proxy[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtcnVsZXMvY29tcG9uZW50cy9ydWxlLWxpc3QvcnVsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgLnJ1bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogOHB4IDAgN3B4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiMwMDAwMDBDMDtcbiAgfVxuICAudHlwZSB7XG4gICAgZmxleDogMSAwIDM1JTtcbiAgfVxuICAucGF5bG9hZCB7XG4gICAgZmxleDogMSAxIDYwJTtcbiAgfVxuICAucHJveHkge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_clash-rules_clash-rules_module_ts.js.map