"use strict";
(self["webpackChunkng_clash"] = self["webpackChunkng_clash"] || []).push([["src_app_features_clash-proxy_clash-proxy_module_ts"],{

/***/ 9607:
/*!********************************************************************!*\
  !*** ./src/app/features/clash-proxy/clash-proxy-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashProxyRoutingModule": () => (/* binding */ ClashProxyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _clash_proxy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clash-proxy.component */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _clash_proxy_component__WEBPACK_IMPORTED_MODULE_0__.ClashProxyComponent
}];
class ClashProxyRoutingModule {}
ClashProxyRoutingModule.ɵfac = function ClashProxyRoutingModule_Factory(t) {
  return new (t || ClashProxyRoutingModule)();
};
ClashProxyRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClashProxyRoutingModule
});
ClashProxyRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClashProxyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3338:
/*!***************************************************************!*\
  !*** ./src/app/features/clash-proxy/clash-proxy.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashProxyComponent": () => (/* binding */ ClashProxyComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_feature_clash_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/feature/clash.service */ 4491);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_proxy_group_proxy_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/proxy-group/proxy-group.component */ 7118);
/* harmony import */ var _components_proxy_card_proxy_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/proxy-card/proxy-card.component */ 6412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);









class ClashProxyComponent {
  toggleViewModel(viewModel) {
    switch (viewModel) {
      case 'grid_view':
        this.viewModel = 'view_list';
        break;
      case 'view_list':
        this.viewModel = 'grid_view';
        break;
      default:
        this.viewModel = 'grid_view';
        break;
    }
  }
  putProxy(data) {
    const {
      proxyName,
      policyName
    } = data;
    this.clashService.putProxy(proxyName, policyName).subscribe(res => {
      if (res === null) {
        this._snackBar.open('success', 'close', {
          duration: 3000
        });
      } else if (res === void 0) {
        this._snackBar.open('error', 'close', {
          duration: 3000
        });
      }
      this.clashService.fetch(new Date().toString());
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.stop$.next('stop');
  }
  constructor(_snackBar,
  // private ref: ChangeDetectorRef,
  clashService) {
    this._snackBar = _snackBar;
    this.clashService = clashService;
    this.viewModel = 'grid_view';
    /** 用于取消订阅 */
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.proxies$ = this.clashService.proxies$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.proxies), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    }));
    this.global$ = this.clashService.proxies$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.global), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    }));
    this.policyGroups$ = this.clashService.proxies$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.policyGroups), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    }));
    this.providers$ = this.clashService.fetchProviders();
  }
}
ClashProxyComponent.ɵfac = function ClashProxyComponent_Factory(t) {
  return new (t || ClashProxyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_feature_clash_service__WEBPACK_IMPORTED_MODULE_0__.ClashService));
};
ClashProxyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ClashProxyComponent,
  selectors: [["app-clash-proxy"]],
  decls: 14,
  vars: 8,
  consts: [[1, "container"], [1, "head"], [3, "policyGroups", "onPutProxy"], [1, "head-left"], [1, "head-rigt"], [1, "view-model-icon", 3, "click"], ["matListItemIcon", ""], [3, "proxies", "viewModel"]],
  template: function ClashProxyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u7B56\u7565\u7EC4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-proxy-group", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPutProxy", function ClashProxyComponent_Template_app_proxy_group_onPutProxy_3_listener($event) {
        return ctx.putProxy($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1)(6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u4EE3\u7406");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4)(9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClashProxyComponent_Template_span_click_9_listener() {
        return ctx.toggleViewModel(ctx.viewModel);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-proxy-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("policyGroups", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx.policyGroups$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.viewModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("proxies", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 6, ctx.proxies$))("viewModel", ctx.viewModel);
    }
  },
  dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItemIcon, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _components_proxy_group_proxy_group_component__WEBPACK_IMPORTED_MODULE_1__.ProxyGroupComponent, _components_proxy_card_proxy_card_component__WEBPACK_IMPORTED_MODULE_2__.ProxyCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.head[_ngcontent-%COMP%] {\n  margin: 16px 4px;\n  font-size: 24px;\n  height: 32px;\n  line-height: 32px;\n  display: flex;\n}\n.head-right[_ngcontent-%COMP%], .head-left[_ngcontent-%COMP%] {\n  flex: 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtcHJveHkvY2xhc2gtcHJveHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUFGO0FBQ0U7RUFFRSxZQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWQge1xuICBtYXJnaW46IDE2cHggNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAmLXJpZ2h0LFxuICAmLWxlZnQge1xuICAgIGZsZXg6IDEgYXV0bztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2001:
/*!************************************************************!*\
  !*** ./src/app/features/clash-proxy/clash-proxy.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashProxyModule": () => (/* binding */ ClashProxyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _clash_proxy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clash-proxy.component */ 3338);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.module */ 294);
/* harmony import */ var _clash_proxy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clash-proxy-routing.module */ 9607);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _components_proxy_group_proxy_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/proxy-group/proxy-group.component */ 7118);
/* harmony import */ var _components_proxy_card_proxy_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/proxy-card/proxy-card.component */ 6412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class ClashProxyModule {}
ClashProxyModule.ɵfac = function ClashProxyModule_Factory(t) {
  return new (t || ClashProxyModule)();
};
ClashProxyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ClashProxyModule
});
ClashProxyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _clash_proxy_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClashProxyRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClashProxyModule, {
    declarations: [_clash_proxy_component__WEBPACK_IMPORTED_MODULE_0__.ClashProxyComponent, _components_proxy_group_proxy_group_component__WEBPACK_IMPORTED_MODULE_4__.ProxyGroupComponent, _components_proxy_card_proxy_card_component__WEBPACK_IMPORTED_MODULE_5__.ProxyCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _clash_proxy_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClashProxyRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

/***/ }),

/***/ 6412:
/*!************************************************************************************!*\
  !*** ./src/app/features/clash-proxy/components/proxy-card/proxy-card.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyCardComponent": () => (/* binding */ ProxyCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);



const _c0 = function (a0) {
  return {
    "proxy-card-list": a0
  };
};
function ProxyCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const proxy_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.viewModel === "view_list"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proxy_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proxy_r1.name);
  }
}
class ProxyCardComponent {
  constructor() {
    this.proxies = null;
    this.viewModel = 'grid_view';
  }
}
ProxyCardComponent.ɵfac = function ProxyCardComponent_Factory(t) {
  return new (t || ProxyCardComponent)();
};
ProxyCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProxyCardComponent,
  selectors: [["app-proxy-card"]],
  inputs: {
    proxies: "proxies",
    viewModel: "viewModel"
  },
  decls: 2,
  vars: 1,
  consts: [["matRipple", "", 1, "proxy-card-wrap"], ["class", "proxy-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "proxy-card", 3, "ngClass"], ["align", "end"]],
  template: function ProxyCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProxyCardComponent_div_1_Template, 8, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proxies);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
  styles: [".proxy-card-wrap[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.proxy-card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100%;\n  transition: all 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);\n  width: calc(25% - 12px);\n  margin-bottom: 16px;\n  margin-right: 16px;\n  position: relative;\n  top: 0;\n}\n.proxy-card[_ngcontent-%COMP%]:nth-child(4n) {\n  margin-right: 0;\n}\n.proxy-card[_ngcontent-%COMP%]:hover {\n  top: -4px;\n}\n\n.proxy-card-list[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtcHJveHkvY29tcG9uZW50cy9wcm94eS1jYXJkL3Byb3h5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFBRTtFQUNFLFNBQUE7QUFFSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJveHktY2FyZC13cmFwIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJveHktY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODQsIDAuNDQsIDEpO1xuICB3aWR0aDogY2FsYygyNSUgLSAxMnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgJjpudGgtY2hpbGQoNG4pIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgdG9wOiAtNHB4O1xuICB9XG59XG5cbi5wcm94eS1jYXJkLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7118:
/*!**************************************************************************************!*\
  !*** ./src/app/features/clash-proxy/components/proxy-group/proxy-group.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyGroupComponent": () => (/* binding */ ProxyGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ 1169);






function ProxyGroupComponent_mat_expansion_panel_2_mat_chip_option_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProxyGroupComponent_mat_expansion_panel_2_mat_chip_option_18_Template_mat_chip_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const proxyName_r5 = restoredCtx.$implicit;
      const policyGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.handlePutProxy(policyGroup_r1.name, proxyName_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proxyName_r5 = ctx.$implicit;
    const policyGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", proxyName_r5 === policyGroup_r1.now)("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proxyName_r5, " ");
  }
}
function ProxyGroupComponent_mat_expansion_panel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", null, 2)(2, "mat-expansion-panel-header")(3, "mat-panel-title", 3)(4, "div", 4)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-description")(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "mat-chip-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-listbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProxyGroupComponent_mat_expansion_panel_2_mat_chip_option_18_Template, 2, 3, "mat-chip-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const policyGroup_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policyGroup_r1.all.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policyGroup_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[ ", policyGroup_r1.type, " ]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", false)("disabled", _r3.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", policyGroup_r1.now, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", policyGroup_r1.all);
  }
}
const _c0 = ["*"];
class ProxyGroupComponent {
  constructor() {
    this.policyGroups = null;
    this.onPutProxy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  handlePutProxy(policyName, proxyName) {
    this.onPutProxy.emit({
      policyName,
      proxyName
    });
  }
}
ProxyGroupComponent.ɵfac = function ProxyGroupComponent_Factory(t) {
  return new (t || ProxyGroupComponent)();
};
ProxyGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProxyGroupComponent,
  selectors: [["app-proxy-group"]],
  viewQuery: function ProxyGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatAccordion, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    }
  },
  inputs: {
    policyGroups: "policyGroups"
  },
  outputs: {
    onPutProxy: "onPutProxy"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [["mat-accordion", "", "multi", ""], [4, "ngFor", "ngForOf"], ["panel", ""], [1, "title"], [1, "policy-badge"], [1, "policy-name"], [1, "policy-type"], [1, "separator"], [1, "selected"], ["selected", "", 3, "selectable", "disabled"], [3, "selected", "selectable", "click", 4, "ngFor", "ngForOf"], [3, "selected", "selectable", "click"]],
  template: function ProxyGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProxyGroupComponent_mat_expansion_panel_2_Template, 19, 7, "mat-expansion-panel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policyGroups);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipOption, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelDescription],
  styles: [".title[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.policy-name[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.policy-badge[_ngcontent-%COMP%] {\n  flex: 0 0 48px;\n}\n.policy-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 40px;\n  line-height: 16px;\n  text-align: center;\n  font-size: 14px;\n  overflow: hidden;\n}\n\n.policy-type[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.selected-light[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2xhc2gtcHJveHkvY29tcG9uZW50cy9wcm94eS1ncm91cC9wcm94eS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUVFLGNBQUE7QUFBRjs7QUFHQTtFQWFFLGNBQUE7QUFaRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUpNO0VBS04sWUFMTTtFQU1OLG1CQUFBO0VBQ0EsaUJBUE07RUFRTixrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUlBO0VBRUUsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQU1FO0VBQ0UsWUFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBvbGljeS1uYW1lIHtcbiAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5wb2xpY3ktYmFkZ2Uge1xuICAkd2lkdGg6IDE2cHg7XG4gIGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkd2lkdGg7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygkd2lkdGggKiAyICsgNHB4ICogMik7XG4gICAgbGluZS1oZWlnaHQ6ICR3aWR0aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgZmxleDogMCAwIGNhbGMoJHdpZHRoICogMyk7XG59XG5cbi5wb2xpY3ktdHlwZSB7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICYtbGlnaHQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4491:
/*!***************************************************!*\
  !*** ./src/app/services/feature/clash.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashService": () => (/* binding */ ClashService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @model */ 5766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_clash_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/clash-api.service */ 210);




class ClashService {
  /**
   * @param timestamp 时间戳
   */
  fetch(timestamp) {
    this.fetchAction$.next(timestamp);
  }
  fetchProviders() {
    return this.clashApiService.fetchProvideMap().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.providers));
  }
  putProxy(proxyName, policyName) {
    return this.clashApiService.putProxy(proxyName, policyName);
  }
  constructor(clashApiService) {
    this.clashApiService = clashApiService;
    this.providers$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.fetchAction$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new Date().toString());
    this.proxies$ = this.fetchAction$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
      return this.clashApiService.fetchProxyMap().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.proxies), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(list => {
        const proxies = Object.values(list).filter(p => Object.values(_model__WEBPACK_IMPORTED_MODULE_0__.ProxyType).find(q => q === p.type));
        const policyGroups = Object.values(list).filter(p => Object.values(_model__WEBPACK_IMPORTED_MODULE_0__.PolicyGroupType).find(q => q === p.type));
        const global = Object.values(list).filter(p => p.name === 'GLOBAL');
        return {
          proxies,
          policyGroups,
          global
        };
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
  }
}
ClashService.ɵfac = function ClashService_Factory(t) {
  return new (t || ClashService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_api_clash_api_service__WEBPACK_IMPORTED_MODULE_1__.ClashApiService));
};
ClashService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ClashService,
  factory: ClashService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_features_clash-proxy_clash-proxy_module_ts.js.map