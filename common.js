"use strict";
(self["webpackChunkng_clash"] = self["webpackChunkng_clash"] || []).push([["common"],{

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
  fetchRules() {
    const url = `${this.hostname}/rules`;
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

/***/ 10:
/*!********************************************!*\
  !*** ./src/app/services/api/public_api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashApiService": () => (/* reexport safe */ _clash_api_service__WEBPACK_IMPORTED_MODULE_0__.ClashApiService)
/* harmony export */ });
/* harmony import */ var _clash_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clash-api.service */ 210);


/***/ }),

/***/ 647:
/*!****************************************!*\
  !*** ./src/app/services/public_api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClashApiService": () => (/* reexport safe */ _api_public_api__WEBPACK_IMPORTED_MODULE_0__.ClashApiService),
/* harmony export */   "DocCookiesService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.DocCookiesService),
/* harmony export */   "WebsocketService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.WebsocketService)
/* harmony export */ });
/* harmony import */ var _api_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/public_api */ 10);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ 7817);



/***/ })

}]);
//# sourceMappingURL=common.js.map