"use strict";
(self["webpackChunkng_clash"] = self["webpackChunkng_clash"] || []).push([["src_app_features_clash-settings_clash-settings_module_ts"],{

/***/ 8082:
/*!**************************************************************************!*\
  !*** ./src/app/features/clash-settings/clash-settings-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClashSettingsRoutingModule: () => (/* binding */ ClashSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clash_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clash-settings.component */ 6810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _clash_settings_component__WEBPACK_IMPORTED_MODULE_0__.ClashSettingsComponent
}];
class ClashSettingsRoutingModule {
  static #_ = this.ɵfac = function ClashSettingsRoutingModule_Factory(t) {
    return new (t || ClashSettingsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ClashSettingsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClashSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6810:
/*!*********************************************************************!*\
  !*** ./src/app/features/clash-settings/clash-settings.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClashSettingsComponent: () => (/* binding */ ClashSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_api_host_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/host.service */ 1288);
/* harmony import */ var src_app_services_core_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/core/store/store.service */ 4293);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/settings/settings.component */ 6434);




class ClashSettingsComponent {
  /** 外部控制设置 */
  get externalControlConfig() {
    return this.hostService.externalControlConfig;
  }
  updateDashboardConfig() {
    this.storeService.configExpired();
  }
  ngOnInit() {
    this.updateDashboardConfig();
  }
  constructor(hostService, storeService) {
    this.hostService = hostService;
    this.storeService = storeService;
    this.dashboardConfig = null;
    this.storeService.dashboardConfig$.subscribe(config => {
      this.dashboardConfig = config;
    });
  }
  static #_ = this.ɵfac = function ClashSettingsComponent_Factory(t) {
    return new (t || ClashSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_host_service__WEBPACK_IMPORTED_MODULE_0__.HostService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_core_store_store_service__WEBPACK_IMPORTED_MODULE_1__.StoreService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ClashSettingsComponent,
    selectors: [["app-clash-settings"]],
    decls: 1,
    vars: 2,
    consts: [[3, "dashboardConfig", "externalControlConfig", "updateDashboardConfig"]],
    template: function ClashSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-settings", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("updateDashboardConfig", function ClashSettingsComponent_Template_app_settings_updateDashboardConfig_0_listener() {
          return ctx.updateDashboardConfig();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dashboardConfig", ctx.dashboardConfig)("externalControlConfig", ctx.externalControlConfig);
      }
    },
    dependencies: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6980:
/*!******************************************************************!*\
  !*** ./src/app/features/clash-settings/clash-settings.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClashSettingsModule: () => (/* binding */ ClashSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/material/material.module */ 4611);
/* harmony import */ var _clash_settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clash-settings-routing.module */ 8082);
/* harmony import */ var _clash_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clash-settings.component */ 6810);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settings/settings.component */ 6434);
/* harmony import */ var _components_settings_control_settings_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings-control/settings-control.component */ 1342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








class ClashSettingsModule {
  static #_ = this.ɵfac = function ClashSettingsModule_Factory(t) {
    return new (t || ClashSettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ClashSettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _clash_settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClashSettingsRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClashSettingsModule, {
    declarations: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent, _components_settings_control_settings_control_component__WEBPACK_IMPORTED_MODULE_4__.SettingsControlComponent, _clash_settings_component__WEBPACK_IMPORTED_MODULE_2__.ClashSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _clash_settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClashSettingsRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
})();

/***/ }),

/***/ 1342:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/clash-settings/components/settings-control/settings-control.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsControlComponent: () => (/* binding */ SettingsControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);








class SettingsControlComponent {
  onCancel() {
    this.dialogRef.close();
  }
  onConfirm() {
    this.dialogRef.close(this.validateForm.value);
  }
  constructor(fb, dialogRef, data) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.data = data;
    this.validateForm = this.fb.group({
      hostname: [],
      port: [],
      key: []
    });
    this.validateForm.patchValue(this.data);
  }
  static #_ = this.ɵfac = function SettingsControlComponent_Factory(t) {
    return new (t || SettingsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsControlComponent,
    selectors: [["app-settings-control"]],
    decls: 39,
    vars: 1,
    consts: [[3, "formGroup"], [1, "flex-box"], [1, "flex-item"], [1, "label"], [1, "control"], ["mat-form-field", "", "appearance", "fill"], ["matInput", "", "formControlName", "hostname"], ["matInput", "", "formControlName", "port"], ["matInput", "", "formControlName", "key"], [1, "tip"], [1, "actions"], ["type", "button", "mat-raised-button", "", 1, "action", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "action", 3, "click"]],
    template: function SettingsControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u5916\u90E8\u63A7\u5236\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content")(5, "form", 0)(6, "div", 1)(7, "div", 2)(8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u4E3B\u673A\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u4E3B\u673A\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2)(16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2)(24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u5BC6\u94A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "div", 5)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u5BC6\u94A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-footer")(32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u8BF7\u6CE8\u610F\uFF0C\u4FEE\u6539\u8BE5\u914D\u7F6E\u9879\u5E76\u4E0D\u4F1A\u4FEE\u6539\u4F60\u7684 Clash \u914D\u7F6E\u6587\u4EF6\uFF0C\u8BF7\u786E\u8BA4\u4FEE\u6539\u540E\u7684\u5916\u90E8\u63A7\u5236\u5730\u5740\u548C Clash \u914D\u7F6E\u6587\u4EF6\u5185\u7684\u5730\u5740\u4E00\u81F4\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4 Dashboard \u65E0\u6CD5\u8FDE\u63A5\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-actions", 10)(35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsControlComponent_Template_button_click_35_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsControlComponent_Template_button_click_37_listener() {
          return ctx.onConfirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u786E\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
    styles: [".flex-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(100% - 0px - 0px);\n  margin: 0px 0px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tip[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  padding: 8px 16px;\n  border-left: 4px solid;\n  color: rgba(0, 0, 0, 0.3137254902);\n}\n\n.actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.action[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy1jb250cm9sL3NldHRpbmdzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNERSxhQUFBO0VBQ0EsZUFBQTtBRENGOztBQUdBO0VDT0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUVGLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QURQRjtBQ1FFO0VBQ0UsZUFBQTtBRE5KOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFTRjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0FBU0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiL3NyYy9sYXlvdXQuc2Nzc1wiIGFzIGxheW91dDtcblxuLmZsZXgtYm94IHtcbiAgQGluY2x1ZGUgbGF5b3V0LmZsZXgtYm94O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgQGluY2x1ZGUgbGF5b3V0LmZsZXgtaXRlbTtcbn1cblxuLnRpcCB7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBjb2xvcjogIzAwMDAwMDUwO1xufVxuXG4uYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW46IDAgOHB4O1xufVxuIiwiQG1peGluIGZsZXgtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5AbWl4aW4gZmxleC1pdGVtKFxuICAkd2lkdGg6IDEwMCUsXG4gICRtYXJnaW4tdG9wOiAwcHgsXG4gICRtYXJnaW4tcmlnaHQ6IDBweCxcbiAgJG1hcmdpbi1ib3R0b206IDBweCxcbiAgJG1hcmdpbi1sZWZ0OiAwcHhcbikge1xuICBmbGV4OiB7XG4gICAgZ3JvdzogMDtcbiAgICBzaHJpbms6IDA7XG4gICAgYmFzaXM6IGNhbGMoJHdpZHRoIC0gJG1hcmdpbi1sZWZ0IC0gJG1hcmdpbi1yaWdodCk7XG4gIH1cbiAgbWFyZ2luOiAkbWFyZ2luLXRvcCAkbWFyZ2luLXJpZ2h0ICRtYXJnaW4tYm90dG9tICRtYXJnaW4tbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC8vIC5jb250cm9sIHtcbiAgLy8gICAvLyBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIC8vIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6434:
/*!***********************************************************************************!*\
  !*** ./src/app/features/clash-settings/components/settings/settings.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ 1817);
/* harmony import */ var _settings_control_settings_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings-control/settings-control.component */ 1342);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_services_api_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/host.service */ 1288);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service */ 5583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);


















function SettingsComponent_mat_button_toggle_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-button-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mode_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", mode_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mode_r1.value, " ");
  }
}
function isNonNullable(value) {
  return value !== null && value !== void 0;
}
class SettingsComponent {
  set dashboardConfig(value) {
    if (value) {
      this.validateForm.reset(value);
    }
    this._dashboardConfig = value;
  }
  get dashboardConfig() {
    return this._dashboardConfig;
  }
  openDialog() {
    const dialogRef = this.dialog.open(_settings_control_settings_control_component__WEBPACK_IMPORTED_MODULE_1__.SettingsControlComponent, {
      width: '600px',
      data: this.externalControlConfig
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(isNonNullable)).subscribe(result => {
      if (result) {
        this.hostService.externalControlConfig = result;
      }
    });
  }
  save() {
    const {
      mode,
      ...rest
    } = this.validateForm.value;
    this.clashApiService.patchConfig({
      ...rest,
      mode: _model__WEBPACK_IMPORTED_MODULE_0__.ClashMode[mode]
    }).subscribe(res => {
      if (res === null) {
        this._snackBar.open('success', 'close', {
          duration: 3000
        });
        // 重置表单默认值为此时ui中的数据,此操作将影响保存按钮的颜色
        this.validateForm.reset(this.validateForm.value);
        this.updateDashboardConfig.emit('');
      } else if (res === void 0) {
        this._snackBar.open('error', 'close', {
          duration: 3000
        });
      }
    });
  }
  KVCompareFn(a, b) {
    return 0;
  }
  ngOnInit() {}
  constructor(fb, dialog, _snackBar, hostService, clashApiService) {
    this.fb = fb;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.hostService = hostService;
    this.clashApiService = clashApiService;
    this._dashboardConfig = null;
    this.externalControlConfig = null;
    this.updateDashboardConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.clashMode = _model__WEBPACK_IMPORTED_MODULE_0__.ClashMode;
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.validateForm = this.fb.group({
      port: [null],
      'socks-port': [null],
      'redir-port': [null],
      'tproxy-port': [null],
      'mixed-port': [null],
      'allow-lan': [null],
      'bind-address': [null],
      'log-level': [null],
      mode: [null],
      ipv6: [null]
    });
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_host_service__WEBPACK_IMPORTED_MODULE_2__.HostService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_3__.ClashApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    inputs: {
      dashboardConfig: "dashboardConfig",
      externalControlConfig: "externalControlConfig"
    },
    outputs: {
      updateDashboardConfig: "updateDashboardConfig",
      change: "change"
    },
    decls: 79,
    vars: 8,
    consts: [[1, "container"], [3, "formGroup"], [1, "flex-box"], [1, "flex-item"], [1, "label"], [1, "control"], ["labelPosition", "before", "disabled", ""], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["formControlName", "allow-lan", "labelPosition", "before"], ["formControlName", "mode"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill"], ["matInput", "", "type", "number", "formControlName", "socks-port"], ["matInput", "", "type", "number", "formControlName", "redir-port"], ["matInput", "", "type", "number", "formControlName", "mixed-port"], [1, "external-config", 3, "click"], [1, "save"], ["mat-fab", "", 3, "color", "click"], [3, "value"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "mat-card")(3, "mat-card-content")(4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u5F00\u673A\u65F6\u542F\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-slide-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u8BED\u8A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5)(14, "mat-button-toggle-group", 7)(15, "mat-button-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u4E2D\u6587");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-button-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u8BBE\u4E3A\u7CFB\u7EDF\u4EE3\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-slide-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 3)(25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u5141\u8BB8\u6765\u81EA\u5C40\u57DF\u7F51\u7684\u8FDE\u63A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "mat-slide-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-card")(31, "mat-card-content")(32, "div", 2)(33, "div", 3)(34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u4EE3\u7406\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 5)(37, "mat-button-toggle-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SettingsComponent_mat_button_toggle_38_Template, 2, 2, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 3)(41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Socks5 \u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 5)(44, "mat-form-field", 13)(45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Socks5 \u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 3)(49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "HTTP \u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 5)(52, "mat-form-field", 13)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "HTTP \u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3)(57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u6DF7\u5408\u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 5)(60, "mat-form-field", 13)(61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\u6DF7\u5408\u4EE3\u7406\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 3)(65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u5916\u90E8\u63A7\u5236\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 5)(68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_68_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 18)(76, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_76_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 5, ctx.clashMode, ctx.KVCompareFn));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.externalControlConfig == null ? null : ctx.externalControlConfig.hostname);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.externalControlConfig == null ? null : ctx.externalControlConfig.port);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.validateForm.pristine ? "primary" : "accent");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatFabButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe],
    styles: [".flex-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: calc(50% - 8px - 8px);\n  margin: 0 8px 8px 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.external-config[_ngcontent-%COMP%] {\n  font-size: 16px;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.save[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0RFLGFBQUE7RUFDQSxlQUFBO0FEQ0Y7O0FBR0E7RUNPSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBRUYscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRFBGO0FDUUU7RUFDRSxlQUFBO0FETko7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBU0Y7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi9zcmMvbGF5b3V0LnNjc3NcIjtcblxuLmZsZXgtYm94IHtcbiAgQGluY2x1ZGUgbGF5b3V0LmZsZXgtYm94O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgQGluY2x1ZGUgbGF5b3V0LmZsZXgtaXRlbSg1MCUsIDAsIDhweCwgOHB4LCA4cHgpO1xufVxuXG4uZXh0ZXJuYWwtY29uZmlnIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2F2ZSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iLCJAbWl4aW4gZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtaXhpbiBmbGV4LWl0ZW0oXG4gICR3aWR0aDogMTAwJSxcbiAgJG1hcmdpbi10b3A6IDBweCxcbiAgJG1hcmdpbi1yaWdodDogMHB4LFxuICAkbWFyZ2luLWJvdHRvbTogMHB4LFxuICAkbWFyZ2luLWxlZnQ6IDBweFxuKSB7XG4gIGZsZXg6IHtcbiAgICBncm93OiAwO1xuICAgIHNocmluazogMDtcbiAgICBiYXNpczogY2FsYygkd2lkdGggLSAkbWFyZ2luLWxlZnQgLSAkbWFyZ2luLXJpZ2h0KTtcbiAgfVxuICBtYXJnaW46ICRtYXJnaW4tdG9wICRtYXJnaW4tcmlnaHQgJG1hcmdpbi1ib3R0b20gJG1hcmdpbi1sZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLy8gLmNvbnRyb2wge1xuICAvLyAgIC8vIG1hcmdpbi1yaWdodDogMTZweDtcbiAgLy8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_clash-settings_clash-settings_module_ts.js.map