(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _components_reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reservation-create/reservation-create.component */ "./src/app/components/reservation-create/reservation-create.component.ts");
/* harmony import */ var _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reservation-list/reservation-list.component */ "./src/app/components/reservation-list/reservation-list.component.ts");
/* harmony import */ var _components_reservation_edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reservation-edit/reservation-edit.component */ "./src/app/components/reservation-edit/reservation-edit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");








var routes = [
    { path: "", pathMatch: "full", redirectTo: "auth" },
    { path: "auth", component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: "create-reservation",
        component: _components_reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_4__["ReservationCreateComponent"],
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: "edit-reservation/:id",
        component: _components_reservation_edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_6__["ReservationEditComponent"],
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: "reservations-list",
        component: _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_5__["ReservationListComponent"],
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mean-stack-crud-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _components_reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reservation-create/reservation-create.component */ "./src/app/components/reservation-create/reservation-create.component.ts");
/* harmony import */ var _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reservation-list/reservation-list.component */ "./src/app/components/reservation-list/reservation-list.component.ts");
/* harmony import */ var _components_reservation_edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reservation-edit/reservation-edit.component */ "./src/app/components/reservation-edit/reservation-edit.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _service_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/auth.interceptor */ "./src/app/service/auth.interceptor.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_8__["ReservationCreateComponent"],
                _components_reservation_list_reservation_list_component__WEBPACK_IMPORTED_MODULE_9__["ReservationListComponent"],
                _components_reservation_edit_reservation_edit_component__WEBPACK_IMPORTED_MODULE_10__["ReservationEditComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [
                _service_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
                _service_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _service_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _service_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["UnauthorizedInterceptor"],
                    multi: true,
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: "/" },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/reservation-create/reservation-create.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/reservation-create/reservation-create.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24tY3JlYXRlL3Jlc2VydmF0aW9uLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reservation-create/reservation-create.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/reservation-create/reservation-create.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-res\">\n    <div class=\"card card-outline-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Add Reservation</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"reservationForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Customer Name</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"name\"\n              placeholder=\"Customer Name\"\n            />\n\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.name.errors?.required\"\n            >\n              Customer Name is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone Number</label>\n            <input\n              class=\"form-control\"\n              type=\"tel\"\n              formControlName=\"phone\"\n              placeholder=\"Phone Number\"\n            />\n\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.count.errors?.required\"\n            >\n              Enter Phone Number\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"count\">Number of People</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              formControlName=\"count\"\n              placeholder=\"Number of People\"\n            />\n\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.count.errors?.required\"\n            >\n              Enter Number of People.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"time\">Arrival Time</label>\n            <input\n              class=\"form-control\"\n              type=\"time\"\n              formControlName=\"time\"\n              placeholder=\"Arrival Time\"\n            />\n\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.time.errors?.required\"\n            >\n              Time is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"table\">Table Number</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              formControlName=\"table\"\n              placeholder=\"Table Number\"\n            />\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-lg col-5 ml-4\" type=\"submit\">\n              Add Reservation\n            </button>\n            <button\n              class=\"btn btn-danger btn-lg col-5 ml-4\"\n              routerLink=\"/reservations-list\"\n            >\n              Cancel\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reservation-create/reservation-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/reservation-create/reservation-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReservationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateComponent", function() { return ReservationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ReservationCreateComponent = /** @class */ (function () {
    function ReservationCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.alert = false;
        this.createForm();
    }
    ReservationCreateComponent.prototype.ngOnInit = function () { };
    ReservationCreateComponent.prototype.createForm = function () {
        this.reservationForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            count: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            table: ["", []],
        });
    };
    Object.defineProperty(ReservationCreateComponent.prototype, "myForm", {
        get: function () {
            return this.reservationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ReservationCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.alert = true;
        if (!this.reservationForm.valid) {
            return false;
        }
        else {
            this.apiService.createReservation(this.reservationForm.value).subscribe(function (res) {
                console.log("Reservation successfully created!");
                _this.apiService.saveAlert(_this.alert);
                _this.ngZone.run(function () {
                    return _this.router.navigateByUrl("/reservations-list");
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReservationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-reservation-create",
            template: __webpack_require__(/*! ./reservation-create.component.html */ "./src/app/components/reservation-create/reservation-create.component.html"),
            styles: [__webpack_require__(/*! ./reservation-create.component.css */ "./src/app/components/reservation-create/reservation-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ReservationCreateComponent);
    return ReservationCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-edit/reservation-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/reservation-edit/reservation-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24tZWRpdC9yZXNlcnZhdGlvbi1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/reservation-edit/reservation-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/reservation-edit/reservation-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-employee\">\n    <div class=\"card card-outline-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Edit Reservation</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Customer Name</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"name\"\n              placeholder=\"Customer Name\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.name.errors?.required\"\n            >\n              Customer Name is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone Number</label>\n            <input\n              class=\"form-control\"\n              type=\"tel\"\n              formControlName=\"phone\"\n              placeholder=\"Phone Number\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.count.errors?.required\"\n            >\n              Enter Phone Number\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"count\">Number of People</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              formControlName=\"count\"\n              placeholder=\"Number of People\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.count.errors?.required\"\n            >\n              Enter Number of People.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"time\">Arrival Time</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"time\" />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && myForm.time.errors?.required\"\n            >\n              Time is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"table\">Table Number</label>\n            <input\n              class=\"form-control\"\n              type=\"number\"\n              formControlName=\"table\"\n              placeholder=\"Table Number\"\n            />\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-lg col-5 ml-4\" type=\"submit\">\n              Update\n            </button>\n            <button\n              class=\"btn btn-danger btn-lg col-5 ml-4\"\n              routerLink=\"/reservations-list\"\n            >\n              Cancel\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reservation-edit/reservation-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/reservation-edit/reservation-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReservationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationEditComponent", function() { return ReservationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ReservationEditComponent = /** @class */ (function () {
    function ReservationEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.alert = true;
    }
    ReservationEditComponent.prototype.ngOnInit = function () {
        this.updateReservation();
        var id = this.actRoute.snapshot.paramMap.get("id");
        this.getReservation(id);
    };
    Object.defineProperty(ReservationEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ReservationEditComponent.prototype.getReservation = function (id) {
        var _this = this;
        this.apiService.getReservation(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data["name"],
                phone: data["phone"],
                count: data["count"],
                time: data["time"],
                table: data["table"],
            });
        });
    };
    ReservationEditComponent.prototype.updateReservation = function () {
        this.editForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            count: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            table: ["", []],
        });
    };
    ReservationEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.alert = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm("Confirm Reservation Updation")) {
                var id = this.actRoute.snapshot.paramMap.get("id");
                this.apiService.updateReservation(id, this.editForm.value).subscribe(function (res) {
                    _this.apiService.saveAlert(_this.alert);
                    _this.router.navigateByUrl("/reservations-list");
                    console.log("Content updated successfully!");
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ReservationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reservation-edit",
            template: __webpack_require__(/*! ./reservation-edit.component.html */ "./src/app/components/reservation-edit/reservation-edit.component.html"),
            styles: [__webpack_require__(/*! ./reservation-edit.component.css */ "./src/app/components/reservation-edit/reservation-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReservationEditComponent);
    return ReservationEditComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-list/reservation-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/reservation-list/reservation-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNlcnZhdGlvbi1saXN0L3Jlc2VydmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc2VydmF0aW9uLWxpc3QvcmVzZXJ2YXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/reservation-list/reservation-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/reservation-list/reservation-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-10 offset-1 register-res\">\n  <p *ngIf=\"!Reservations\" class=\"no-data text-center\">\n    There is no reservation added yet!\n  </p>\n  <div\n    *ngIf=\"alert\"\n    class=\"alert alert-success alert-dismissible fade show\"\n    role=\"alert\"\n  >\n    <strong>Success !</strong> Reservations has been Updated.\n    <button\n      (click)=\"closeAlert()\"\n      type=\"button\"\n      class=\"close\"\n      data-dimiss=\"alert\"\n      aria-label=\"close\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <table class=\"table table-bordered\" *ngIf=\"Reservations\">\n    <thead class=\"table-success\">\n      <tr>\n        <th scope=\"col\">Reservation ID</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Phone Number</th>\n        <th scope=\"col\">Number of People</th>\n        <th scope=\"col\">Time</th>\n        <th scope=\"col\">Table Number</th>\n        <th scope=\"col center\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let res of Reservations; let i = index\">\n        <th scope=\"row\">{{ res._id }}</th>\n        <td>{{ res.name }}</td>\n        <td>{{ res.phone }}</td>\n        <td>{{ res.count }}</td>\n        <td>{{ res.time }}</td>\n        <td>{{ res.table }}</td>\n        <td class=\"text-center edit-block\">\n          <span class=\"edit\" [routerLink]=\"['/edit-reservation/', res._id]\">\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n          </span>\n          <span class=\"delete\" (click)=\"removeReservation(res, i)\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reservation-list/reservation-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/reservation-list/reservation-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReservationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationListComponent", function() { return ReservationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");



var ReservationListComponent = /** @class */ (function () {
    function ReservationListComponent(apiService) {
        this.apiService = apiService;
        this.alert = false;
        this.alert = apiService.getAlert();
        this.readReservation();
    }
    ReservationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .getReservations()
            .subscribe(function (Reservations) { return (_this.Reservations = Reservations); });
    };
    ReservationListComponent.prototype.readReservation = function () { };
    ReservationListComponent.prototype.removeReservation = function (res, index) {
        var _this = this;
        if (window.confirm("Comfirm Reservation Deletion.")) {
            this.apiService.deleteReservation(res._id).subscribe(function (data) {
                _this.alert = true;
                _this.apiService.saveAlert(_this.alert);
                _this.Reservations.splice(index, 1);
            });
        }
    };
    ReservationListComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    ReservationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reservation-list",
            template: __webpack_require__(/*! ./reservation-list.component.html */ "./src/app/components/reservation-list/reservation-list.component.html"),
            styles: [__webpack_require__(/*! ./reservation-list.component.css */ "./src/app/components/reservation-list/reservation-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ReservationListComponent);
    return ReservationListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\"\n>\n  <h5 class=\"my-0 mr-md-auto font-weight-bold\">ONLINE RESERVATION PORTAL</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a\n      *ngIf=\"username\"\n      class=\"btn btn-outline-primary\"\n      routerLinkActive=\"active\"\n      routerLink=\"/reservations-list\"\n      >View Reservation</a\n    >\n  </nav>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a\n      *ngIf=\"username\"\n      class=\"btn btn-outline-primary\"\n      routerLinkActive=\"active\"\n      routerLink=\"/create-reservation\"\n      >Add Reservation</a\n    >\n  </nav>\n  <a\n    *ngIf=\"username\"\n    class=\"btn btn-outline-primary\"\n    routerLink=\"/auth\"\n    (click)=\"logOut()\"\n  >\n    Logout</a\n  >\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = undefined;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername().subscribe(function (name) {
            console.log(name);
            _this.username = name;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.logOut = function () {
        this.username = undefined;
        this.authService.logOut();
        this.router.navigate(["/auth"]);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf=\"alert\"\n  class=\"container alert alert-success alert-dismissible fade show\"\n  role=\"alert\"\n>\n  <strong>Success !</strong> New Owner Registered.\n  <button\n    (click)=\"closeAlert()\"\n    type=\"button\"\n    class=\"close\"\n    data-dimiss=\"alert\"\n    aria-label=\"close\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-res\">\n    <div class=\"card card-outline-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Owner Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"loginForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username/Email</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"username\"\n              placeholder=\"Username/Email\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submittedL && myForm.username.errors?.required\"\n            >\n              Username/Email is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              class=\"form-control\"\n              type=\"password\"\n              formControlName=\"password\"\n              placeholder=\"Password\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submittedL && myForm.password.errors?.required\"\n            >\n              Password is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">\n              Login\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 register-res\">\n    <div class=\"card card-outline-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Add New Owner</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"signupForm\" #fform=\"ngForm\" (ngSubmit)=\"onSignup()\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">First Name</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"firstname\"\n              placeholder=\"First Name\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && sForm.firstname.errors?.required\"\n            >\n              First Name is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Last Name</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"lastname\"\n              placeholder=\"Last Name\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && sForm.lastname.errors?.required\"\n            >\n              Last Name is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username/Email</label>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"username\"\n              placeholder=\"Username/Email\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && sForm.username.errors?.required\"\n            >\n              Username/Email is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              class=\"form-control\"\n              type=\"password\"\n              formControlName=\"password\"\n              placeholder=\"Password\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"submitted && sForm.password.errors?.required\"\n            >\n              Password is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">\n              Register\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb, ngZone) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.ngZone = ngZone;
        this.submitted = false;
        this.submittedL = false;
        this.alert = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.signupForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "myForm", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "sForm", {
        get: function () {
            return this.signupForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submittedL = true;
        console.log("User: ", this.loginForm.value);
        this.authService.logIn(this.loginForm.value).subscribe(function (res) {
            if (res.success) {
                _this.router.navigate(["/reservations-list"]);
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    LoginComponent.prototype.onSignup = function () {
        var _this = this;
        this.submitted = true;
        console.log("User: ", this.signupForm.value);
        this.authService.signUp(this.signupForm.value).subscribe(function (res) {
            if (res.success) {
                _this.alert = true;
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    LoginComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/service/process-httpmsg.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.baseUri = "http://localhost:8080";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/json");
        this.storeAlert = false;
    }
    ApiService.prototype.createReservation = function (data) {
        var url = "reservations/create-reservation";
        return this.http
            .post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ApiService.prototype.getReservations = function () {
        return this.http
            .get("reservations")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ApiService.prototype.getReservation = function (id) {
        var url = "reservations/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ApiService.prototype.updateReservation = function (id, data) {
        var url = "reservations/edit-reservation/" + id;
        return this.http
            .put(url, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ApiService.prototype.deleteReservation = function (id) {
        var url = "reservations/delete-reservation/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ApiService.prototype.saveAlert = function (alert) {
        this.storeAlert = alert;
    };
    ApiService.prototype.getAlert = function () {
        return this.storeAlert;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(["login"]);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/auth.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/service/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor, UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(inj) {
        this.inj = inj;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        // Get the auth header from the service.
        var authToken = authService.getToken();
        // console.log("Interceptor: " + authToken);
        // Clone the request to add the new header.
        var authReq = req.clone({
            headers: req.headers.set("Authorization", "bearer " + authToken),
        });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(inj) {
        this.inj = inj;
    }
    UnauthorizedInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        var authToken = authService.getToken();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            // do nothing
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401 && authToken) {
                    console.log("Unauthorized Interceptor: ", err);
                    authService.checkJWTtoken();
                }
            }
        }));
    };
    UnauthorizedInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], UnauthorizedInterceptor);
    return UnauthorizedInterceptor;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/service/process-httpmsg.service.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.tokenKey = "JWT";
        this.isAuthenticated = false;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authToken = undefined;
        this.baseUri = "http://localhost:8080";
    }
    AuthService.prototype.checkJWTtoken = function () {
        var _this = this;
        this.http.get("users/checkJWTtoken").subscribe(function (res) {
            console.log("JWT Token Valid: ", res);
            _this.sendUsername(res.user.username);
        }, function (err) {
            console.log("JWT Token invalid: ", err);
            _this.destroyUserCredentials();
        });
    };
    AuthService.prototype.sendUsername = function (name) {
        this.username.next(name);
    };
    AuthService.prototype.clearUsername = function () {
        this.username.next(undefined);
    };
    AuthService.prototype.loadUserCredentials = function () {
        var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
        console.log("loadUserCredentials ", credentials);
        if (credentials && credentials.username !== undefined) {
            this.useCredentials(credentials);
            if (this.authToken) {
                this.checkJWTtoken();
            }
        }
    };
    AuthService.prototype.storeUserCredentials = function (credentials) {
        console.log("storeUserCredentials ", credentials);
        localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
        this.useCredentials(credentials);
    };
    AuthService.prototype.useCredentials = function (credentials) {
        this.isAuthenticated = true;
        this.sendUsername(credentials.username);
        this.authToken = credentials.token;
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.clearUsername();
        this.isAuthenticated = false;
        localStorage.removeItem(this.tokenKey);
    };
    AuthService.prototype.signUp = function (newUser) {
        var _this = this;
        return this.http
            .post("users/signup", {
            username: newUser.username,
            password: newUser.password,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.storeUserCredentials({});
            return { success: true, username: newUser.username };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    AuthService.prototype.logIn = function (user) {
        var _this = this;
        return this.http
            .post("users/login", {
            username: user.username,
            password: user.password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.storeUserCredentials({
                username: user.username,
                token: res.token,
            });
            return { success: true, username: user.username };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    AuthService.prototype.logOut = function () {
        this.destroyUserCredentials();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUsername = function () {
        return this.username.asObservable();
    };
    AuthService.prototype.getToken = function () {
        return this.authToken;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/process-httpmsg.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/process-httpmsg.service.ts ***!
  \****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || "") + " " + error.error;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg);
    };
    ProcessHTTPMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Aayush\Projects\ResturantReservation\restaurant\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map