"use strict";
(self["webpackChunkng_clash"] = self["webpackChunkng_clash"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 7571:
/*!**************************************************************!*\
  !*** ./src/app/core/components/loading/loading.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingComponent {}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
  return new (t || LoadingComponent)();
};
LoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingComponent,
  selectors: [["app-loading"]],
  decls: 1,
  vars: 0,
  consts: [[1, "box"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["@keyframes _ngcontent-%COMP%_rotar {\n  0% {\n    transform: rotateZ(0deg) scaleX(0.82) scaleY(0.82);\n  }\n  50% {\n    transform: rotateZ(180deg) scaleX(1) scaleY(1);\n  }\n  100% {\n    transform: rotateZ(360deg) scaleX(0.82) scaleY(0.82);\n  }\n}\n@keyframes _ngcontent-%COMP%_rotarIz {\n  0% {\n    transform: rotateZ(0deg) scaleX(0.82) scaleY(0.82);\n  }\n  50% {\n    transform: rotateZ(-180deg) scaleX(1) scaleY(1);\n  }\n  100% {\n    transform: rotateZ(-360deg) scaleX(0.82) scaleY(0.82);\n  }\n}\n.box[_ngcontent-%COMP%] {\n  margin: 4px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  z-index: 99;\n  box-sizing: border-box;\n}\n.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-radius: 66%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center center;\n}\n.box[_ngcontent-%COMP%]:before {\n  box-shadow: inset 0 4px 0 rgba(0, 250, 250, 0.6), inset 4px 0 0 rgba(0, 200, 200, 0.6), inset -4px 0 rgba(0, 150, 200, 0.6), inset -4px 0 0 rgba(0, 200, 250, 0.6);\n  animation: _ngcontent-%COMP%_rotarIz 2s -0.5s linear infinite;\n}\n.box[_ngcontent-%COMP%]:after {\n  box-shadow: inset 0 4px 0 rgba(250, 250, 0, 0.6), inset 4px 0 0 rgba(250, 200, 0, 0.6), inset -4px 0 rgba(250, 150, 0, 0.6), inset -4px 0 0 rgba(250, 100, 0, 0.6);\n  animation: _ngcontent-%COMP%_rotar 2s -0.5s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBO0VBQ0U7SUFDRSxrREFBQTtFQzlCRjtFRGdDQTtJQUNFLDhDQUFBO0VDOUJGO0VEZ0NBO0lBQ0Usb0RBQUE7RUM5QkY7QUFDRjtBRGlDQTtFQUNFO0lBQ0Usa0RBQUE7RUMvQkY7RURpQ0E7SUFDRSwrQ0FBQTtFQy9CRjtFRGlDQTtJQUNFLHFEQUFBO0VDL0JGO0FBQ0Y7QUFuQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQXFCRjtBQW5CRTtFRFRBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLCtCQUFBO0FDK0JGO0FBMUJFO0VEREEsa0tBQUE7RUFLQSwyQ0FBQTtBQzJCRjtBQTNCRTtFRElBLGtLQUFBO0VBS0EseUNBQUE7QUN1QkYiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY2lyY2xlLWJhc2Uge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA2NiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuXG5AbWl4aW4gY2lyY2xlLUEoJHdpZHRoOiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgJHdpZHRoIDAgcmdiYSgwLCAyNTAsIDI1MCwgMC42KSxcbiAgICBpbnNldCAkd2lkdGggMCAwIHJnYmEoMCwgMjAwLCAyMDAsIDAuNiksXG4gICAgaW5zZXQgMCAtJHdpZHRoIDAgcmdiYSgwLCAxNTAsIDIwMCwgMC42KSxcbiAgICBpbnNldCBjYWxjKDBweCAtICR3aWR0aCkgMCAwIHJnYmEoMCwgMjAwLCAyNTAsIDAuNik7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3Rhckl6IDJzIC0wLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiByb3Rhckl6IDJzIC0wLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQG1peGluIGNpcmNsZS1CKCR3aWR0aDogMTBweCkge1xuICBib3gtc2hhZG93OiBpbnNldCAwICR3aWR0aCAwIHJnYmEoMjUwLCAyNTAsIDAsIDAuNiksXG4gICAgaW5zZXQgJHdpZHRoIDAgMCByZ2JhKDI1MCwgMjAwLCAwLCAwLjYpLFxuICAgIGluc2V0IDAgLSR3aWR0aCAwIHJnYmEoMjUwLCAxNTAsIDAsIDAuNiksXG4gICAgaW5zZXQgY2FsYygwcHggLSAkd2lkdGgpIDAgMCByZ2JhKDI1MCwgMTAwLCAwLCAwLjYpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXIgMnMgLTAuNXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHJvdGFyIDJzIC0wLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGVYKDAuODIpIHNjYWxlWSgwLjgyKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlWCgxKSBzY2FsZVkoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGVYKDAuODIpIHNjYWxlWSgwLjgyKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGFySXoge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlWCgwLjgyKSBzY2FsZVkoMC44Mik7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE4MGRlZykgc2NhbGVYKDEpIHNjYWxlWSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTM2MGRlZykgc2NhbGVYKDAuODIpIHNjYWxlWSgwLjgyKTtcbiAgfVxufVxuIiwiQHVzZSBcIi9zcmMvYW5pbWF0ZVwiO1xuXG4uYm94IHtcbiAgbWFyZ2luOiA0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIEBpbmNsdWRlIGFuaW1hdGUuY2lyY2xlLWJhc2U7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0ZS5jaXJjbGUtQSg0cHgpO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgQGluY2x1ZGUgYW5pbWF0ZS5jaXJjbGUtQig0cHgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loading/loading.component */ 7571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent]
  });
})();

/***/ }),

/***/ 495:
/*!**************************************************************************!*\
  !*** ./src/app/features/dashboard/components/layout/layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _core_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/components/loading/loading.component */ 7571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);










const _c0 = [[["", "AppMenu", ""]], [["", "AppExtra", ""]], [["", "AppContent", ""]]];
const _c1 = ["[AppMenu]", "[AppExtra]", "[AppContent]"];
class LayoutComponent {
  ngOnInit() {}
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.title = 'ng-clash';
    this.showSideNav = false;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  ngContentSelectors: _c1,
  decls: 22,
  vars: 9,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "sidenav-content"], ["color", "primary", 1, "toolbar"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "content"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "mat-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](12, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-sidenav-content")(14, "mat-toolbar", 4)(15, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Ng-Clash");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](21, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, ctx.isHandset$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx.isHandset$) ? "dialog" : "navigation");
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _core_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  min-height: calc(100% - 64px);\n  padding: 0 24px 24px 24px;\n  position: relative;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFFRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIC8vIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgcGFkZGluZzogMCAyNHB4IDI0cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9vbGJhciB7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6640:
/*!**********************************************************************!*\
  !*** ./src/app/features/dashboard/components/menu/menu.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);






function MenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ng_container_1_Template_mat_list_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const nav_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onChange.emit(nav_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nav_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activated", nav_r1.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r1.name, " ");
  }
}
class MenuComponent {
  constructor() {
    this.navList = [];
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)();
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  viewQuery: function MenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatSelectionList, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSelectionList = _t.first);
    }
  },
  inputs: {
    navList: "navList"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 2,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [3, "activated", "click"], ["matListItemIcon", ""], ["matListItemTitle", ""]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 6, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItemTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5970:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/feature/menu.model */ 7701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_feature_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/feature/log.service */ 8512);
/* harmony import */ var src_app_services_core_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/core/store/store.service */ 4936);
/* harmony import */ var src_app_services_feature_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/feature/connection.service */ 8226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 495);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ 6640);










function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("highlighted", true);
  }
}
class DashboardComponent {
  handleSideNavActive(menu) {
    this.navList = this.toggleSideNavActiveStatus(this.navList, menuItem => menuItem.value === menu.value);
    this.router.navigate([menu.value], {
      relativeTo: this.route
    });
  }
  /** toggle sideNav highlight */
  toggleSideNavActiveStatus(menuList, compareFn) {
    return menuList.map(menuItem => {
      if (compareFn(menuItem)) {
        menuItem.activated = true;
      } else {
        menuItem.activated = false;
      }
      return menuItem;
    });
  }
  ngOnInit() {
    this.navList = this.toggleSideNavActiveStatus(this.navList, menuItem => location.pathname.includes(menuItem.value));
    // todo 获取日志
    this.logService.initLog();
    this.connectionService.initConnection();
    // 获取版本号
    this.storeService.clashVersion$.subscribe(data => this.clashVersion = data);
  }
  constructor(router, route, logService, storeService, connectionService) {
    this.router = router;
    this.route = route;
    this.logService = logService;
    this.storeService = storeService;
    this.connectionService = connectionService;
    this.navList = [{
      name: '代理',
      value: _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__.NavValue.proxies,
      icon: 'vpn_key',
      activated: true
    }, {
      name: '日志',
      value: _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__.NavValue.logs,
      icon: 'terminal',
      activated: false
    }, {
      name: '规则',
      value: _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__.NavValue.rules,
      icon: 'rule',
      activated: false
    }, {
      name: '连接',
      value: _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__.NavValue.links,
      icon: 'link',
      activated: false
    }, {
      name: '设置',
      value: _models_feature_menu_model__WEBPACK_IMPORTED_MODULE_0__.NavValue.settings,
      icon: 'settings',
      activated: false
    }];
    this['githubPages'] = 'https://github.com/teddingdev/ng-clash/actions/workflows/github-pages.yml/badge.svg';
    this['pagesBuildDeployment'] = 'https://github.com/teddingdev/ng-clash/actions/workflows/pages/pages-build-deployment/badge.svg';
    this.clashVersion = null;
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_feature_log_service__WEBPACK_IMPORTED_MODULE_1__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_core_store_store_service__WEBPACK_IMPORTED_MODULE_2__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_feature_connection_service__WEBPACK_IMPORTED_MODULE_3__.ConnectionService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 13,
  vars: 4,
  consts: [["AppMenu", ""], ["AppMenu", "", 3, "navList", "onChange"], [1, "app-extra"], [1, "version"], [4, "ngIf"], [1, "CI-status"], ["alt", "github-pages-badge.svg", 3, "src"], ["AppContent", ""], [3, "highlighted"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function DashboardComponent_Template_app_menu_onChange_2_listener($event) {
        return ctx.handleSideNavActive($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "CLASH VERSION");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("navList", ctx.navList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.clashVersion == null ? null : ctx.clashVersion.version, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clashVersion == null ? null : ctx.clashVersion.premium);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.githubPages, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChip, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent],
  styles: [".app-extra[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.app-extra[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 8px;\n  line-height: 28px;\n  font-size: 14px;\n}\n.app-extra[_ngcontent-%COMP%]   .CI-status[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtZXh0cmEge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAudmVyc2lvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLkNJLXN0YXR1cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1104:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 5970);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ 6640);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/layout.component */ 495);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/material/material.module */ 793);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routing.module */ 4645);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ 294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__.DashboardRoutingModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__.DashboardRoutingModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule]
  });
})();

/***/ }),

/***/ 4645:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 5970);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @model */ 5766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  children: [{
    path: '',
    redirectTo: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.proxies,
    pathMatch: 'full'
  }, {
    path: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.proxies,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_clash-proxy_clash-proxy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../clash-proxy/clash-proxy.module */ 2001)).then(m => m.ClashProxyModule)
  }, {
    path: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.rules,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_clash-rules_clash-rules_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../clash-rules/clash-rules.module */ 9814)).then(m => m.ClashRulesModule)
  }, {
    path: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.logs,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_clash-logs_clash-logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../clash-logs/clash-logs.module */ 2599)).then(m => m.ClashLogsModule)
  }, {
    path: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.links,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_clash-links_clash-links_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../clash-links/clash-links.module */ 9585)).then(m => m.ClashLinksModule)
  }, {
    path: _model__WEBPACK_IMPORTED_MODULE_1__.NavValue.settings,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_clash-settings_clash-settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../clash-settings/clash-settings.module */ 6201)).then(m => m.ClashSettingsModule)
  }]
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 2429:
/*!********************************************!*\
  !*** ./src/app/models/api/config.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashMode": () => (/* binding */ ClashMode)
/* harmony export */ });
var ClashMode;
(function (ClashMode) {
  /** 全局 */
  ClashMode["global"] = "Global";
  /** 规则 */
  ClashMode["rule"] = "Rule";
  /** 脚本 */
  ClashMode["script"] = "Script";
  /** 直连 */
  ClashMode["direct"] = "Direct";
})(ClashMode || (ClashMode = {}));

/***/ }),

/***/ 3316:
/*!************************************************!*\
  !*** ./src/app/models/api/connection.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 473:
/*!*******************************************!*\
  !*** ./src/app/models/api/proxy.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyGroupType": () => (/* binding */ PolicyGroupType),
/* harmony export */   "ProxyType": () => (/* binding */ ProxyType),
/* harmony export */   "UnUsedProxy": () => (/* binding */ UnUsedProxy)
/* harmony export */ });
var ProxyType;
(function (ProxyType) {
  ProxyType["Shadowsocks"] = "Shadowsocks";
  ProxyType["Vmess"] = "Vmess";
  ProxyType["Trojan"] = "Trojan";
  ProxyType["Socks"] = "Socks";
  ProxyType["Http"] = "Http";
  ProxyType["Snell"] = "Snell";
})(ProxyType || (ProxyType = {}));
var UnUsedProxy;
(function (UnUsedProxy) {
  UnUsedProxy["Direct"] = "Direct";
  UnUsedProxy["Reject"] = "Reject";
  UnUsedProxy["GLOBAL"] = "GLOBAL";
})(UnUsedProxy || (UnUsedProxy = {}));
var PolicyGroupType;
(function (PolicyGroupType) {
  PolicyGroupType["Selector"] = "Selector";
  PolicyGroupType["URLTest"] = "URLTest";
  PolicyGroupType["Fallback"] = "Fallback";
  PolicyGroupType["LoadBalance"] = "LoadBalance";
})(PolicyGroupType || (PolicyGroupType = {}));

/***/ }),

/***/ 4736:
/*!******************************************!*\
  !*** ./src/app/models/api/public_api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashMode": () => (/* reexport safe */ _config_model__WEBPACK_IMPORTED_MODULE_2__.ClashMode),
/* harmony export */   "PolicyGroupType": () => (/* reexport safe */ _proxy_model__WEBPACK_IMPORTED_MODULE_0__.PolicyGroupType),
/* harmony export */   "ProxyType": () => (/* reexport safe */ _proxy_model__WEBPACK_IMPORTED_MODULE_0__.ProxyType),
/* harmony export */   "UnUsedProxy": () => (/* reexport safe */ _proxy_model__WEBPACK_IMPORTED_MODULE_0__.UnUsedProxy)
/* harmony export */ });
/* harmony import */ var _proxy_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy.model */ 473);
/* harmony import */ var _rule_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule.model */ 4200);
/* harmony import */ var _config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.model */ 2429);
/* harmony import */ var _connection_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.model */ 3316);





/***/ }),

/***/ 4200:
/*!******************************************!*\
  !*** ./src/app/models/api/rule.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2753:
/*!*******************************************!*\
  !*** ./src/app/models/core/public_api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketReadyState": () => (/* reexport safe */ _websocket_model__WEBPACK_IMPORTED_MODULE_0__.WebSocketReadyState)
/* harmony export */ });
/* harmony import */ var _websocket_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket.model */ 2417);


/***/ }),

/***/ 2417:
/*!************************************************!*\
  !*** ./src/app/models/core/websocket.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketReadyState": () => (/* binding */ WebSocketReadyState)
/* harmony export */ });
var WebSocketReadyState;
(function (WebSocketReadyState) {
  WebSocketReadyState[WebSocketReadyState["CONNECTING"] = 0] = "CONNECTING";
  WebSocketReadyState[WebSocketReadyState["OPEN"] = 1] = "OPEN";
  WebSocketReadyState[WebSocketReadyState["CLOSING"] = 2] = "CLOSING";
  WebSocketReadyState[WebSocketReadyState["CLOSED"] = 3] = "CLOSED";
})(WebSocketReadyState || (WebSocketReadyState = {}));

/***/ }),

/***/ 1388:
/*!*********************************************!*\
  !*** ./src/app/models/feature/log.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7701:
/*!**********************************************!*\
  !*** ./src/app/models/feature/menu.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavValue": () => (/* binding */ NavValue)
/* harmony export */ });
var NavValue;
(function (NavValue) {
  NavValue["proxies"] = "proxies";
  NavValue["logs"] = "logs";
  NavValue["rules"] = "rules";
  NavValue["links"] = "links";
  NavValue["settings"] = "settings";
})(NavValue || (NavValue = {}));

/***/ }),

/***/ 775:
/*!**********************************************!*\
  !*** ./src/app/models/feature/public_api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavValue": () => (/* reexport safe */ _menu_model__WEBPACK_IMPORTED_MODULE_1__.NavValue)
/* harmony export */ });
/* harmony import */ var _log_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.model */ 1388);
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.model */ 7701);



/***/ }),

/***/ 5766:
/*!**************************************!*\
  !*** ./src/app/models/public_api.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashMode": () => (/* reexport safe */ _api_public_api__WEBPACK_IMPORTED_MODULE_1__.ClashMode),
/* harmony export */   "NavValue": () => (/* reexport safe */ _feature_public_api__WEBPACK_IMPORTED_MODULE_2__.NavValue),
/* harmony export */   "PolicyGroupType": () => (/* reexport safe */ _api_public_api__WEBPACK_IMPORTED_MODULE_1__.PolicyGroupType),
/* harmony export */   "ProxyType": () => (/* reexport safe */ _api_public_api__WEBPACK_IMPORTED_MODULE_1__.ProxyType),
/* harmony export */   "UnUsedProxy": () => (/* reexport safe */ _api_public_api__WEBPACK_IMPORTED_MODULE_1__.UnUsedProxy),
/* harmony export */   "WebSocketReadyState": () => (/* reexport safe */ _core_public_api__WEBPACK_IMPORTED_MODULE_0__.WebSocketReadyState)
/* harmony export */ });
/* harmony import */ var _core_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/public_api */ 2753);
/* harmony import */ var _api_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/public_api */ 4736);
/* harmony import */ var _feature_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature/public_api */ 775);




/***/ }),

/***/ 210:
/*!***************************************************!*\
  !*** ./src/app/services/api/clash-api.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashApiService": () => (/* binding */ ClashApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./host.service */ 535);




class ClashApiService {
  get hostname() {
    return this.hostService.hostname;
  }
  fetchProxyMap() {
    const url = `${this.hostname}/proxies`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      return [];
    }));
  }
  fetchProvideMap() {
    const url = `${this.hostname}/providers/proxies`;
    return this.http.get(url);
  }
  putProxy(proxyName, policyName) {
    const url = `${this.hostname}/proxies/${policyName}`;
    return this.http.put(url, {
      name: proxyName
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined);
    }));
  }
  fetchConfig() {
    const url = `${this.hostname}/configs`;
    return this.http.get(url);
  }
  putConfig(body) {
    const url = `${this.hostname}/configs`;
    return this.http.put(url, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined);
    }));
  }
  patchConfig(body) {
    const url = `${this.hostname}/configs`;
    return this.http.patch(url, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined);
    }));
  }
  fetchRules() {
    const url = `${this.hostname}/rules`;
    console.log(`🍅 -> file: clash-api.service.ts:58 -> ClashApiService -> fetchRules -> this.hostname:`, this.hostname);
    console.log(`🍅 -> file: clash-api.service.ts:58 -> ClashApiService -> fetchRules -> url:`, url);
    return this.http.get(url);
  }
  fetchVersion() {
    const url = `${this.hostname}/version`;
    return this.http.get(url);
  }
  constructor(http, hostService) {
    this.http = http;
    this.hostService = hostService;
  }
}
ClashApiService.ɵfac = function ClashApiService_Factory(t) {
  return new (t || ClashApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_host_service__WEBPACK_IMPORTED_MODULE_0__.HostService));
};
ClashApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClashApiService,
  factory: ClashApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 535:
/*!**********************************************!*\
  !*** ./src/app/services/api/host.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostService": () => (/* binding */ HostService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HostService {
  get externalControlConfig() {
    const defaultHostname = 'localhost';
    const defaultPort = '7891';
    let cachedHostname;
    let cachedPort;
    let cachedKey;
    const cachedConfig = localStorage.getItem('ngClash');
    if (cachedConfig) {
      const ngClashConfig = JSON.parse(cachedConfig);
      const externalControl = ngClashConfig['externalControl'] ?? {};
      cachedHostname = externalControl['hostname'] || defaultHostname;
      cachedPort = externalControl['port'] || defaultPort;
      cachedKey = externalControl['key'];
    }
    return {
      hostname: cachedHostname ?? defaultHostname,
      port: cachedPort ?? defaultPort,
      key: cachedKey ?? ''
    };
  }
  set externalControlConfig(externalControl) {
    if (false) {}
    const cachedConfig = localStorage.getItem('ngClash') ?? '{}';
    const ngClashConfig = JSON.parse(cachedConfig);
    ngClashConfig['externalControl'] = externalControl;
    localStorage.setItem('ngClash', JSON.stringify(ngClashConfig));
  }
  get host() {
    return this.externalControlConfig.hostname;
  }
  get port() {
    return this.externalControlConfig.port;
  }
  get hostname() {
    return `http://${this.host}:${this.port}`;
  }
  constructor() {}
}
HostService.ɵfac = function HostService_Factory(t) {
  return new (t || HostService)();
};
HostService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HostService,
  factory: HostService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9490:
/*!******************************************************************!*\
  !*** ./src/app/services/core/doc-cookies/doc-cookies.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocCookiesService": () => (/* binding */ DocCookiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DocCookiesService {
  constructor() {}
  getItem(sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  }
  setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    let sExpires = '';
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
          break;
        case String:
          sExpires = '; expires=' + vEnd;
          break;
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
    return true;
  }
  removeItem(sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) {
      return false;
    }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
    return true;
  }
  hasItem(sKey) {
    return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(document.cookie);
  }
}
DocCookiesService.ɵfac = function DocCookiesService_Factory(t) {
  return new (t || DocCookiesService)();
};
DocCookiesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DocCookiesService,
  factory: DocCookiesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7817:
/*!****************************************!*\
  !*** ./src/app/services/core/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocCookiesService": () => (/* reexport safe */ _doc_cookies_doc_cookies_service__WEBPACK_IMPORTED_MODULE_0__.DocCookiesService),
/* harmony export */   "WebsocketService": () => (/* reexport safe */ _websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__.WebsocketService)
/* harmony export */ });
/* harmony import */ var _doc_cookies_doc_cookies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc-cookies/doc-cookies.service */ 9490);
/* harmony import */ var _websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket/websocket.service */ 3082);



/***/ }),

/***/ 4936:
/*!******************************************************!*\
  !*** ./src/app/services/core/store/store.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_clash_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/clash-api.service */ 210);



class StoreService {
  configExpired() {
    this.dashboardConfigSubject.next('new config');
  }
  fetchVersion() {}
  constructor(clashApiService) {
    this.clashApiService = clashApiService;
    this.dashboardConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.dashboardConfig$ = this.dashboardConfigSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => {
      return this.clashApiService.fetchConfig();
    }));
    this.clashVersion$ = this.clashApiService.fetchVersion();
  }
}
StoreService.ɵfac = function StoreService_Factory(t) {
  return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_clash_api_service__WEBPACK_IMPORTED_MODULE_0__.ClashApiService));
};
StoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StoreService,
  factory: StoreService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3082:
/*!**************************************************************!*\
  !*** ./src/app/services/core/websocket/websocket.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ 5766);

class WebsocketService {
  constructor(wsConfig) {
    this.connected = () => {
      const instance = this.instance;
      if (!instance) {
        return false;
      }
      if (instance.readyState === _model__WEBPACK_IMPORTED_MODULE_0__.WebSocketReadyState.CONNECTING || instance.readyState === _model__WEBPACK_IMPORTED_MODULE_0__.WebSocketReadyState.OPEN) {
        return true;
      } else {
        return false;
      }
    };
    /** websocket 关闭 */
    this.onClose = () => {
      const instance = this.instance;
      if (!instance || !this.connected) {
        return;
      }
      instance.close();
      this.instance = null;
    };
    /** webSocket 已连接 */
    this.onopen = ev => {
      console.log('webSocket 已连接');
      // this.wsHeartBeatStart();
    };
    /** webSocket 已关闭 */
    this.onclose = ev => {
      console.log('webSocket 已关闭');
      // this.wsHeartBeatStop();
    };

    this.onmessage = data => {
      console.log(`🍅 -> file: websocket.service.ts:67 -> WebsocketService -> data:`, data);
    };
    this.onerror = error => {
      console.log(error);
    };
    /** webSocket 发送消息 */
    this.send = data => {
      if (!this.instance) {
        return;
      }
      this.instance.send(JSON.stringify(data));
    };
    const {
      url,
      onopen,
      onerror,
      onclose,
      onmessage
    } = wsConfig;
    this.instance = new WebSocket(url);
    this.instance.onopen = onopen || this.onopen;
    this.instance.onerror = onerror || this.onerror;
    this.instance.onclose = onclose || this.onclose;
    this.instance.onmessage = onmessage || this.onmessage;
  }
}

/***/ }),

/***/ 8226:
/*!********************************************************!*\
  !*** ./src/app/services/feature/connection.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 7817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_host_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/host.service */ 535);




class ConnectionService {
  initConnection() {
    this.connection$.subscribe(data => {
      this.connectionList = data;
    });
  }
  constructor(hostService) {
    this.hostService = hostService;
    this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.connectionList = null;
    const host = this.hostService.host;
    const port = this.hostService.port;
    const connectionUrl = `ws://${host}:${port}/connections`;
    const wsConnection = new _core__WEBPACK_IMPORTED_MODULE_0__.WebsocketService({
      url: connectionUrl,
      onmessage: event => {
        let data = null;
        try {
          data = JSON.parse(event.data);
        } catch (error) {
          console.log(error);
        }
        if (data) {
          this.connection$.next(data);
        }
      }
    });
    wsConnection.connected();
  }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) {
  return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_host_service__WEBPACK_IMPORTED_MODULE_1__.HostService));
};
ConnectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConnectionService,
  factory: ConnectionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8512:
/*!*************************************************!*\
  !*** ./src/app/services/feature/log.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _core_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/websocket/websocket.service */ 3082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_host_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/host.service */ 535);




var WSType;
(function (WSType) {
  WSType[WSType["debug"] = 0] = "debug";
  WSType[WSType["info"] = 1] = "info";
  WSType[WSType["warn"] = 2] = "warn";
  WSType[WSType["error"] = 3] = "error";
})(WSType || (WSType = {}));
const scanLog = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.scan)((accumulator, seed) => {
  accumulator.unshift(seed);
  return accumulator;
}, []);
class LogService {
  initLog() {
    this.debug$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => JSON.parse(log)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => ({
      ...log,
      time: new Date()
    })), scanLog(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    })).subscribe(log => {
      this.debugLog = log;
    });
    this.info$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => JSON.parse(log)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => ({
      ...log,
      time: new Date()
    })), scanLog(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    })).subscribe(log => {
      this.infoLog = log;
    });
    this.warn$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => JSON.parse(log)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => ({
      ...log,
      time: new Date()
    })), scanLog(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    })).subscribe(log => {
      this.warnLog = log;
    });
    this.error$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => JSON.parse(log)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(log => ({
      ...log,
      time: new Date()
    })), scanLog(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    })).subscribe(log => {
      this.errorLog = log;
    });
  }
  constructor(hostService) {
    this.hostService = hostService;
    this.debug$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.info$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.warn$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.debugLog = [];
    this.infoLog = [];
    this.warnLog = [];
    this.errorLog = [];
    const host = this.hostService.host;
    const port = this.hostService.port;
    const infoUrl = `ws://${host}:${port}/logs?level=info`;
    const warnUrl = `ws://${host}:${port}/logs?level=warn`;
    const debugUrl = `ws://${host}:${port}/logs?level=debug`;
    const errorUrl = `ws://${host}:${port}/logs?level=error`;
    const wsDebug = new _core_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService({
      url: debugUrl,
      onmessage: event => {
        this.debug$.next(event.data);
      }
    });
    const wsInfo = new _core_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService({
      url: infoUrl,
      onmessage: event => {
        this.info$.next(event.data);
      }
    });
    const wsWarn = new _core_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService({
      url: warnUrl,
      onmessage: event => {
        this.warn$.next(event.data);
      }
    });
    const wsErrorUrl = new _core_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService({
      url: errorUrl,
      onmessage: event => {
        this.error$.next(event.data);
      }
    });
    wsDebug.connected();
    wsInfo.connected();
    wsWarn.connected();
    wsErrorUrl.connected();
  }
}
LogService.ɵfac = function LogService_Factory(t) {
  return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_api_host_service__WEBPACK_IMPORTED_MODULE_1__.HostService));
};
LogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LogService,
  factory: LogService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map