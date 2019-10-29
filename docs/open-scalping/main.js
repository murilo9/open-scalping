(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app-routing.module.ts":
/*!*******************************!*\
  !*** ./app-routing.module.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _src_app_widgets_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/widgets/new-game/new-game.component */ "./src/app/widgets/new-game/new-game.component.ts");
/* harmony import */ var _src_app_widgets_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/app/widgets/game-view/game-view.component */ "./src/app/widgets/game-view/game-view.component.ts");





const routes = [
    { path: 'new-game', component: _src_app_widgets_new_game_new_game_component__WEBPACK_IMPORTED_MODULE_3__["NewGameComponent"] },
    { path: 'play', component: _src_app_widgets_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_4__["GameViewComponent"] },
    { path: '', redirectTo: 'new-game', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-bar></app-top-bar>\n<router-outlet (newGame)=\"onNewGame($event)\"></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/bullet/bullet.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/bullet/bullet.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bullet\">\n    <p class=\"title\">Boleta</p>\n    <form>\n        <div class=\"field\">\n            <div class=\"value-input\">\n                <a href='#' onclick=\"event.preventDefault()\" \n                class=\"button\" (click)=\"quantityDecrease()\">-</a>\n                <input type=\"text\" [(ngModel)]=\"quantityString\" \n                name=\"quantity\" class=\"quantity\" (change)=\"parseQuantity($event)\">\n                <a href='#' onclick=\"event.preventDefault()\" \n                class=\"button\" (click)=\"quantityIncrease()\">+</a>\n            </div>\n            <div class=\"value-input\">\n                <a href='#' onclick=\"event.preventDefault()\" \n                class=\"button\" (click)=\"priceDecrease()\">-</a>\n                <input type=\"text\" [(ngModel)]=\"priceString\" \n                (change)=\"parsePrice($event)\" name=\"price\" class=\"price\">\n                <a href='#' onclick=\"event.preventDefault()\" \n                class=\"button\" (click)=\"priceIncrease()\">+</a>\n            </div>\n        </div>\n        <div class=\"field\">\n            <a href='#' onclick=\"event.preventDefault()\" class=\"button sell\" (click)=\"sell()\">Vender</a>\n            <a href='#' onclick=\"event.preventDefault()\" class=\"button buy\" (click)=\"buy()\">Comprar</a>\n        </div>\n        <p class=\"field hr\"></p>\n        <div class=\"field\">\n            <button type=\"button\" class=\"button sell\">Vender no Topo</button>\n            <button type=\"button\" class=\"button buy\">Comprar no Topo</button>\n        </div>\n        <div class=\"field\">\n            <button type=\"button\" class=\"button sell\">Vender Já</button>\n            <button type=\"button\" class=\"button buy\">Comprar Já</button>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/deal-history/deal-history.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/deal-history/deal-history.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"deal-history\">\n    <p class=\"title\">Histórico de negócios</p>\n    <p class=\"item subtitle\">\n        <span class=\"field score\">Valor</span>\n        <span class=\"field quantity\">Qtd</span>\n        <span class=\"field sold\">Vendedor</span>\n        <span class=\"field bought\">Comprador</span>\n    </p>\n    <div class=\"deal-list\" id=\"deal-list\">\n        <div class=\"deal-list-wrapper\">\n            <p *ngFor=\"let deal of dealList\" class=\"item\" \n            [ngClass]=\"(deal.type === 0) ? 'activeSold' : 'activeBought'\">\n                <span class=\"field score\">{{deal.score | currency:' '}}</span>\n                <span class=\"field quantity\">{{deal.quantity}}</span>\n                <span class=\"field sold\">\n                    {{deal.type === 0 ? getPlayerLabel(deal.activePlayerId) \n                        : getPlayerLabel(deal.passivePlayerId)}}\n                </span>\n                <span class=\"field bought\">\n                    {{deal.type === 1 ? getPlayerLabel(deal.activePlayerId) \n                        : getPlayerLabel(deal.passivePlayerId)}}\n                </span>\n            </p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/game-view/game-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/game-view/game-view.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"game-view\">\n    <div class=\"col-1\">\n        <app-bullet></app-bullet>\n    </div>\n    <div class=\"col-2\">\n        <app-offers-book></app-offers-book>\n        <app-deal-history></app-deal-history>\n    </div>\n    <div class=\"col-3\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/new-game/new-game.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/new-game/new-game.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"new-game-view\">\n    <p class=\"title\">Nova Partida</p>\n    <form>\n        <div class=\"field\">\n            <label>Players (máx. 30):</label>\n            <input type=\"number\" [(ngModel)]=\"form.playersQty\" name=\"playersQty\">\n        </div>\n        <div class=\"field\">\n            <label>Preço Incial (venda):</label>\n            <input type=\"number\" [(ngModel)]=\"form.initialSalePrice\" name=\"initialSalePrice\">\n        </div>\n        <div class=\"field\">\n            <label>Preço Incial (compra):</label>\n            <input type=\"number\" [(ngModel)]=\"form.initialPurchasePrice\" name=\"initialPurchasePrice\">\n        </div>\n        <div class=\"field\">\n            <label>Variação mínima (tick):</label>\n            <input type=\"number\" [(ngModel)]=\"form.tickSize\" name=\"tickSize\">\n        </div>\n        <div class=\"field\">\n            <label>Lote mínimo:</label>\n            <input type=\"number\" [(ngModel)]=\"form.minimumOfferSize\" name=\"minimumOfferSize\">\n        </div>\n        <div class=\"field\">\n            <label></label>\n            <button type=\"button\" (click)=\"newGame()\" class=\"start-button\">Iniciar</button>\n        </div>\n    </form>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/offers-book/offers-book.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/offers-book/offers-book.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"offers-book\">\n    <p class=\"title\">Book de Ofertas</p>\n    <div class=\"offers-list\">\n        <div class=\"purchase\">\n            <div class=\"titles\">\n                <span class=\"total\">Total</span>\n                <span class=\"price\">Preço</span>\n            </div>\n            <div class=\"list\">\n                <div *ngFor=\"let score of purchaseOffersList\">\n                    <div class=\"offer\" *ngIf=\"score.total != 0\">\n                        <span class=\"total\">{{score.total}}</span>\n                        <span class=\"price\">{{score.score | currency:' '}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"sale\">\n            <div class=\"titles\">\n                <span class=\"price\">Preço</span>\n                <span class=\"total\">Total</span>\n            </div>\n            <div class=\"list\">\n                <div *ngFor=\"let score of saleOffersList\">\n                    <div class=\"offer\" *ngIf=\"score.total != 0\">\n                        <span class=\"price\">{{score.score | currency:' '}}</span>\n                        <span class=\"total\">{{score.total}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/top-bar/top-bar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/top-bar/top-bar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topbar\">\n    <a href='#' routerLink=\"new-game\"\n    routerLinkActive=\"active\"\n    class=\"new-game-button\">\n        Nova Partida\n    </a>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Game */ "./src/app/core/Game.ts");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var _shared_market_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/market.service */ "./src/app/shared/market.service.ts");






let AppComponent = class AppComponent {
    constructor(gameService, marketService, router) {
        this.gameService = gameService;
        this.marketService = marketService;
        this.router = router;
        this.title = 'open-scalping';
        this.gameStarted = false;
        this.subscription1 = gameService.newGameCalled$.subscribe((form) => {
            this.initialPurchasePrice = form.initialPurchasePrice;
            this.initialSalePrice = form.initialSalePrice;
            this.onNewGame(form);
        });
        this.subscription2 = marketService.offerSent$.subscribe((offer) => {
            this.game.market.makeOffer(offer);
        });
    }
    onNewGame(form) {
        this.gameStarted = true;
        this.game = new _core_Game__WEBPACK_IMPORTED_MODULE_3__["Game"](this.marketService, this.gameService, form);
        this.router.navigateByUrl('/play');
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _shared_market_service__WEBPACK_IMPORTED_MODULE_5__["MarketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_core_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"], _shared_market_service__WEBPACK_IMPORTED_MODULE_5__["MarketService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-routing.module */ "./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__["WidgetsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/BotPlayer.ts":
/*!***********************************!*\
  !*** ./src/app/core/BotPlayer.ts ***!
  \***********************************/
/*! exports provided: BotPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotPlayer", function() { return BotPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/app/core/Player.ts");


class BotPlayer extends _Player__WEBPACK_IMPORTED_MODULE_1__["Player"] {
    constructor(id, label, marketService, gameService) {
        super(id, label, marketService);
        this.human = false;
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, 5000 + Math.random() * 50000);
        this.marketService = marketService;
        this.gameService = gameService;
    }
    makeRandomOffer() {
        let buyOrSell = Math.random() > 0.5 ? true : false;
        let quantity = Math.floor(Math.random() * 10);
        if (buyOrSell) { //Comprar
            let offerPrice = this.gameService.initialPurchasePrice -
                Math.floor(-2 + Math.random() * 12) * this.gameService.tickSize;
            this.marketService.makePurchaseOffer(this.id, offerPrice, quantity);
        }
        else { //Vender
            let offerPrice = this.gameService.initialSalePrice +
                Math.floor(-2 + Math.random() * 12) * this.gameService.tickSize;
            this.marketService.makeSaleOffer(this.id, offerPrice, quantity);
        }
        //Reseta a função:
        this.randomOffer = setTimeout(() => { this.makeRandomOffer(); }, Math.random() * 60000);
    }
}


/***/ }),

/***/ "./src/app/core/Game.ts":
/*!******************************!*\
  !*** ./src/app/core/Game.ts ***!
  \******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Market */ "./src/app/core/Market.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/app/core/Player.ts");
/* harmony import */ var _BotPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BotPlayer */ "./src/app/core/BotPlayer.ts");




class Game {
    constructor(marketService, gameService, form) {
        this.marketService = marketService;
        this.gameService = gameService;
        this.players = [];
        this.lastplayerId = 1;
        this.botNames = [
            'XPI', 'UBS', 'Clear', 'BTG', 'Rico', 'Turett'
        ];
        this.market = new _Market__WEBPACK_IMPORTED_MODULE_1__["Market"](marketService, form);
        this.players.push(new _Player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.lastplayerId, 'XPI', marketService)); //Usuário sempre será da XP
        //Insere os players:
        var playersQty = form.playersQty;
        for (var i = 0; i < playersQty; i++) {
            this.lastplayerId++;
            var label = this.botNames[Math.floor(Math.random() * 5)];
            this.players.push(new _BotPlayer__WEBPACK_IMPORTED_MODULE_3__["BotPlayer"](this.lastplayerId, label, this.marketService, this.gameService));
        }
        //Insere os big players:
        this.players.push(new _BotPlayer__WEBPACK_IMPORTED_MODULE_3__["BotPlayer"](this.lastplayerId, 'Itaú', marketService, gameService));
        this.players.push(new _BotPlayer__WEBPACK_IMPORTED_MODULE_3__["BotPlayer"](this.lastplayerId, 'Bradesco', marketService, gameService));
        this.players.push(new _BotPlayer__WEBPACK_IMPORTED_MODULE_3__["BotPlayer"](this.lastplayerId, 'Santander', marketService, gameService));
        //Após terminar de construir a lista de players, registra ele no gameService:
        gameService.setPlayersList(this.players);
    }
}


/***/ }),

/***/ "./src/app/core/Market.ts":
/*!********************************!*\
  !*** ./src/app/core/Market.ts ***!
  \********************************/
/*! exports provided: Market */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Market", function() { return Market; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_Deal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Deal */ "./src/app/shared/Deal.ts");
/* harmony import */ var _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/OfferType */ "./src/app/shared/OfferType.ts");



class Market {
    constructor(marketService, form) {
        this.marketService = marketService;
        this.offerList = {};
        this.dealList = [];
        this.tickSize = form.tickSize;
        this.minimumOfferSize = form.minimumOfferSize;
    }
    makeOffer(offer) {
        //Instancia este preço caso ele ainda não tenha sido instanciado
        if (this.offerList[offer.score] === undefined || this.offerList[offer.score].total == 0) {
            this.offerList[offer.score] = { status: offer.type, score: offer.score, total: 0, queue: [] };
        }
        //--------------- Se for uma oferta de COMPRA ---------------
        if (offer.type == _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].PURCHASE) {
            //Se houver uma oferta de venda neste preço, fecha negócio:
            if (this.offerList[offer.score].status == _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].SALE) {
                do { //Fecha negócio
                    var dealSize = 0;
                    do { //Fecha negócio 
                        offer.quantity -= 1;
                        this.offerList[offer.score].queue[0].quantity -= 1;
                        dealSize += 1;
                    } while //...enquanto houverem lotes apregoados nesta oferta
                     (this.offerList[offer.score].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    var deal = new _shared_Deal__WEBPACK_IMPORTED_MODULE_1__["Deal"](dealSize, parseFloat(offer.score), offer.type, offer.sendingPlayerId, this.offerList[offer.score].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if (this.offerList[offer.score].queue[0].quantity == 0) {
                        this.offerList[offer.score].queue.splice(0, 1);
                    }
                } while //...enquanto houverem ofertas de venda apregoadas neste preço
                 (this.offerList[offer.score].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if (offer.quantity > 0) {
                    this.offerList[offer.score].queue.push(offer);
                    this.offerList[offer.score].status = _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].PURCHASE; //Atualiza o status deste preço
                }
            }
            else { //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }
        //--------------- Se for uma oferta de VENDA ---------------
        if (offer.type == _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].SALE) {
            //Se houver uma oferta de compra neste preço, fecha negócio:
            if (this.offerList[offer.score].status == _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].PURCHASE) {
                do { //Fecha negócio
                    var dealSize = 0;
                    do { //Fecha negócio 
                        offer.quantity -= 1;
                        this.offerList[offer.score].queue[0].quantity -= 1;
                        dealSize += 1;
                    } while //...enquanto houverem lotes apregoados nesta oferta
                     (this.offerList[offer.score].queue[0].quantity > 0 && offer.quantity > 0);
                    //Registra um negócio, neste preço, com esta quantidade, no histórico de negócios:
                    var deal = new _shared_Deal__WEBPACK_IMPORTED_MODULE_1__["Deal"](dealSize, parseFloat(offer.score), offer.type, offer.sendingPlayerId, this.offerList[offer.score].queue[0].sendingPlayerId);
                    this.dealList.push(deal);
                    this.marketService.dealListHasChanged(this.dealList);
                    //Remove a oferta apregoada da lista caso ela tenha sido totalmente fechada:
                    if (this.offerList[offer.score].queue[0].quantity == 0) {
                        this.offerList[offer.score].queue.splice(0, 1);
                    }
                } while //...enquanto houverem ofertas de compra apregoadas neste preço
                 (this.offerList[offer.score].queue.length > 0 && offer.quantity > 0);
                //Caso a oferta não tenha sido totalmente fechada, deixa o restante apregoado neste preço:
                if (offer.quantity > 0) {
                    this.offerList[offer.score].queue.push(offer);
                    this.offerList[offer.score].status = _shared_OfferType__WEBPACK_IMPORTED_MODULE_2__["OfferType"].SALE; //Atualiza o status deste preço
                }
            }
            else { //Caso contrário, deixa a oferta apregoada nesta pontuação:
                this.offerList[offer.score].queue.push(offer);
            }
        }
        this.refreshOfferList(offer.score); //Finalmente, atualiza o total de ofertas neste preço:
        this.marketService.offerListHasChanged(this.offerList);
        /*console.log('----------- momento ---------------')
        console.log(this.offerList);
        console.log(this.dealList);*/
        return status; //Retorna o status da operação ('offered'/'parcial'/'total')
    }
    /**
     * Atualiza e reacalcula o total de ofertas neste preço
     */
    refreshOfferList(score) {
        this.offerList[score].total = 0;
        this.offerList[score].queue.forEach((existingOffer, eoIndex) => {
            this.offerList[score].total += existingOffer.quantity;
        });
    }
}


/***/ }),

/***/ "./src/app/core/Player.ts":
/*!********************************!*\
  !*** ./src/app/core/Player.ts ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Player {
    constructor(id, label, marketService) {
        this.id = id;
        this.label = label;
        this.human = true;
    }
}


/***/ }),

/***/ "./src/app/core/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GameService = class GameService {
    constructor() {
        this.newGameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newGameCalled$ = this.newGameSubject.asObservable();
        this.playersIdList = [];
    }
    callNewGame(form) {
        this.initialPurchasePrice = form.initialPurchasePrice;
        this.initialSalePrice = form.initialSalePrice;
        this.minimumOfferSize = form.minimumOfferSize;
        this.tickSize = form.tickSize;
        this.newGameSubject.next(form);
    }
    setPlayersList(playersList) {
        playersList.forEach((player, p) => {
            this.playersIdList.push(player.label);
        });
    }
    getPlayerLabel(id) {
        let label = '(null)';
        this.playersIdList.forEach((playerLabel, p) => {
            if (p == id)
                label = playerLabel;
        });
        return label;
    }
};
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/app/shared/Deal.ts":
/*!********************************!*\
  !*** ./src/app/shared/Deal.ts ***!
  \********************************/
/*! exports provided: Deal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deal", function() { return Deal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Deal {
    constructor(quantity, score, type, activePlayerId, passivePlayerId) {
        this.quantity = quantity;
        this.score = score;
        this.type = type;
        this.activePlayerId = activePlayerId;
        this.passivePlayerId = passivePlayerId;
    }
}


/***/ }),

/***/ "./src/app/shared/Offer.ts":
/*!*********************************!*\
  !*** ./src/app/shared/Offer.ts ***!
  \*********************************/
/*! exports provided: Offer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offer", function() { return Offer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Offer {
    constructor(quantity, score, type, sendingPlayerId) {
        this.quantity = quantity;
        this.score = score + '';
        this.type = type;
        this.sendingPlayerId = sendingPlayerId;
    }
}


/***/ }),

/***/ "./src/app/shared/OfferType.ts":
/*!*************************************!*\
  !*** ./src/app/shared/OfferType.ts ***!
  \*************************************/
/*! exports provided: OfferType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferType", function() { return OfferType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var OfferType;
(function (OfferType) {
    OfferType[OfferType["PURCHASE"] = 0] = "PURCHASE";
    OfferType[OfferType["SALE"] = 1] = "SALE";
})(OfferType || (OfferType = {}));


/***/ }),

/***/ "./src/app/shared/market.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/market.service.ts ***!
  \******************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _OfferType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferType */ "./src/app/shared/OfferType.ts");
/* harmony import */ var _Offer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Offer */ "./src/app/shared/Offer.ts");





let MarketService = class MarketService {
    constructor() {
        this.offerListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.offerListChanged$ = this.offerListSubject.asObservable();
        this.dealListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dealListChanged$ = this.dealListSubject.asObservable();
        this.offerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.offerSent$ = this.offerSubject.asObservable();
    }
    offerListHasChanged(offerList) {
        this.offerListSubject.next(offerList); //Isto será emitido para os widgets
    }
    dealListHasChanged(dealList) {
        this.dealListSubject.next(dealList);
    }
    makeSaleOffer(playerId, price, quantity) {
        this.offerSubject.next(new _Offer__WEBPACK_IMPORTED_MODULE_4__["Offer"](quantity, price + '', _OfferType__WEBPACK_IMPORTED_MODULE_3__["OfferType"].SALE, playerId));
    }
    makePurchaseOffer(playerId, price, quantity) {
        this.offerSubject.next(new _Offer__WEBPACK_IMPORTED_MODULE_4__["Offer"](quantity, price + '', _OfferType__WEBPACK_IMPORTED_MODULE_3__["OfferType"].PURCHASE, playerId));
    }
};
MarketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarketService);



/***/ }),

/***/ "./src/app/widgets/bullet/bullet.component.scss":
/*!******************************************************!*\
  !*** ./src/app/widgets/bullet/bullet.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bullet {\n  display: inline-block;\n  background: #1f1f1f;\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 8px;\n}\n.bullet .title {\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n.bullet form .hr {\n  border-bottom: 1px solid #121212;\n}\n.bullet form .field {\n  display: flex;\n  justify-content: space-around;\n}\n.bullet form .field:not(:last-child) {\n  margin-bottom: 24px;\n}\n.bullet form .field .value-input {\n  border: 1px solid #e2e2e2;\n  border-radius: 4px;\n}\n.bullet form .field .value-input .button {\n  background: none;\n  border: none;\n  padding: 0 8px;\n  box-shadow: none;\n}\n.bullet form .field .value-input input[type=text] {\n  outline: none;\n  background: #121212;\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid #e2e2e2;\n  border-right: 1px solid #e2e2e2;\n  height: 24px;\n  color: #e2e2e2;\n  text-align: center;\n  width: 72px;\n}\n.bullet form .field .value-input input[type=text]:first-child {\n  margin-right: 8px;\n}\n.bullet form .field .value-input input[type=text].sell {\n  color: red;\n}\n.bullet form .field .value-input input[type=text].buy {\n  color: green;\n}\n.bullet form .field .button {\n  background: #1f1f1f;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  color: #e2e2e2;\n  border-radius: 4px;\n  padding: 0 16px;\n  height: 24px;\n  border: none;\n  font-size: 11pt;\n}\n.bullet form .field .button.buy {\n  background: #33691E;\n}\n.bullet form .field .button.sell {\n  background: #BF360C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvYnVsbGV0L2J1bGxldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQUE7RUFDQSxtQkFSVTtFQVNWLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSlI7QURPUTtFQUNJLGdDQUFBO0FDTFo7QURPUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQ0xaO0FETVk7RUFDSSxtQkFBQTtBQ0poQjtBRE1ZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0poQjtBREtnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0hwQjtBREtnQjtFQUNJLGFBQUE7RUFDQSxtQkFyQ0Y7RUFzQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0E1Q0g7RUE2Q0csa0JBQUE7RUFDQSxXQUFBO0FDSHBCO0FESW9CO0VBQ0ksaUJBQUE7QUNGeEI7QURJb0I7RUFDSSxVQUFBO0FDRnhCO0FESW9CO0VBQ0ksWUFBQTtBQ0Z4QjtBRE1ZO0VBQ0ksbUJBNURGO0VBNkRFLHdDQUFBO0VBQ0EsY0E3REM7RUE4REQsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSmhCO0FES2dCO0VBQ0ksbUJBQUE7QUNIcEI7QURLZ0I7RUFDSSxtQkFBQTtBQ0hwQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYnVsbGV0L2J1bGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdWZhY2VDb2xvcjogIzFmMWYxZjtcbiRvblByaW1hcnlDb2xvcjogI2UyZTJlMjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICMxMjEyMTI7XG4kc2hhZG93Q29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiRpbnB1dEJhY2tncm91bmRDb2xvcjogIzA4MDgwODtcblxuLmJ1bGxldHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogJHN1ZmFjZUNvbG9yO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAkc2hhZG93Q29sb3I7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgICAgLmhye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFsdWUtaW5wdXR7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG9uUHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAuYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRvblByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG9uUHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb25QcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuYnV5e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3VmYWNlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4ICRzaGFkb3dDb2xvcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG9uUHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHQ7XG4gICAgICAgICAgICAgICAgJi5idXl7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzY5MUU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0JGMzYwQztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJ1bGxldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYnVsbGV0IC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uYnVsbGV0IGZvcm0gLmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjEyMTI7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmJ1bGxldCBmb3JtIC5maWVsZCAudmFsdWUtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIC52YWx1ZS1pbnB1dCAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idWxsZXQgZm9ybSAuZmllbGQgLnZhbHVlLWlucHV0IGlucHV0W3R5cGU9dGV4dF0ge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNlMmUyZTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcycHg7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIC52YWx1ZS1pbnB1dCBpbnB1dFt0eXBlPXRleHRdOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIC52YWx1ZS1pbnB1dCBpbnB1dFt0eXBlPXRleHRdLnNlbGwge1xuICBjb2xvcjogcmVkO1xufVxuLmJ1bGxldCBmb3JtIC5maWVsZCAudmFsdWUtaW5wdXQgaW5wdXRbdHlwZT10ZXh0XS5idXkge1xuICBjb2xvcjogZ3JlZW47XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDExcHQ7XG59XG4uYnVsbGV0IGZvcm0gLmZpZWxkIC5idXR0b24uYnV5IHtcbiAgYmFja2dyb3VuZDogIzMzNjkxRTtcbn1cbi5idWxsZXQgZm9ybSAuZmllbGQgLmJ1dHRvbi5zZWxsIHtcbiAgYmFja2dyb3VuZDogI0JGMzYwQztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/widgets/bullet/bullet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/widgets/bullet/bullet.component.ts ***!
  \****************************************************/
/*! exports provided: BulletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletComponent", function() { return BulletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/game.service */ "./src/app/core/game.service.ts");
/* harmony import */ var src_app_shared_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/market.service */ "./src/app/shared/market.service.ts");




let BulletComponent = class BulletComponent {
    constructor(gameService, marketService) {
        this.gameService = gameService;
        this.marketService = marketService;
        this.price = 0; //Preço real, numérico
        this.quantity = 0; //Quantidde real, numérico
        this.price = gameService.initialSalePrice;
        this.priceString = this.price.toFixed(2);
        this.quantity = gameService.minimumOfferSize;
        this.quantityString = this.quantity.toString();
        this.tick = gameService.tickSize;
        this.minimumOfferSize = gameService.minimumOfferSize;
    }
    ngOnInit() {
    }
    parsePrice(event) {
        let price = event.target.value;
        if (!isNaN(price)) {
            this.price = parseFloat(price); //Coloca o valor numérico no price
            this.priceString = this.price.toFixed(2); //Coloca a string formatada no priceString
        }
    }
    parseQuantity(event) {
        let quantity = event.target.value;
        if (!isNaN(quantity)) {
            this.quantity = parseFloat(quantity); //Coloca o valor numérico no price
            this.quantityString = this.quantity.toFixed(2); //Coloca a string formatada no quantityString
        }
    }
    sell() {
        this.marketService.makeSaleOffer(0, this.price, this.quantity);
    }
    buy() {
        this.marketService.makePurchaseOffer(0, this.price, this.quantity);
    }
    priceIncrease() {
        this.price = this.price + this.tick;
        this.priceString = this.price.toFixed(2);
    }
    priceDecrease() {
        if (this.price > this.tick) {
            this.price = this.price - this.tick;
            this.priceString = this.price.toFixed(2);
        }
    }
    quantityIncrease() {
        this.quantity = this.quantity + 1;
        this.quantityString = this.quantity.toString();
    }
    quantityDecrease() {
        if (this.quantity > this.minimumOfferSize) {
            this.quantity = this.quantity - 1;
            this.quantityString = this.quantity.toString();
        }
    }
};
BulletComponent.ctorParameters = () => [
    { type: src_app_core_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: src_app_shared_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"] }
];
BulletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bullet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bullet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/bullet/bullet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bullet.component.scss */ "./src/app/widgets/bullet/bullet.component.scss")).default]
    })
], BulletComponent);



/***/ }),

/***/ "./src/app/widgets/deal-history/deal-history.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/widgets/deal-history/deal-history.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".deal-history {\n  display: inline-flex;\n  flex-direction: column;\n  background: #1f1f1f;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n.deal-history .title {\n  text-align: center;\n  margin-bottom: 8px;\n  font-weight: bold;\n}\n.deal-history .deal-list {\n  height: 256px;\n  overflow-y: scroll;\n  transform: rotate(180deg);\n  direction: rtl;\n}\n.deal-history .deal-list .deal-list-wrapper {\n  transform: rotate(180deg);\n  direction: ltr;\n}\n.deal-history .item.activeSold {\n  color: green;\n}\n.deal-history .item.activeBought {\n  color: red;\n}\n.deal-history .item .field, .deal-history .item .subtitle > .field {\n  display: inline-block;\n}\n.deal-history .item .field.quantity, .deal-history .item .subtitle > .field.quantity {\n  width: 48px;\n  text-align: center;\n}\n.deal-history .item .field.score, .deal-history .item .subtitle > .field.score {\n  width: 88px;\n}\n.deal-history .item .field.sold, .deal-history .item .subtitle > .field.sold {\n  width: 88px;\n}\n.deal-history .item .field.bought, .deal-history .item .subtitle > .field.bought {\n  width: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvZGVhbC1oaXN0b3J5L2RlYWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0cy9kZWFsLWhpc3RvcnkvZGVhbC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQVJVO0VBU1YsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNKSjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURLSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0hSO0FESVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNGWjtBRE1RO0VBQ0ksWUFBQTtBQ0paO0FETVE7RUFDSSxVQUFBO0FDSlo7QURNUTtFQUNJLHFCQUFBO0FDSlo7QURLWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0hoQjtBREtZO0VBQ0ksV0FBQTtBQ0hoQjtBREtZO0VBQ0ksV0FBQTtBQ0hoQjtBREtZO0VBQ0ksV0FBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZGVhbC1oaXN0b3J5L2RlYWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdWZhY2VDb2xvcjogIzFmMWYxZjtcbiRvblByaW1hcnlDb2xvcjogI2UyZTJlMjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICMxMjEyMTI7XG4kc2hhZG93Q29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuLmRlYWwtaGlzdG9yeXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6ICRzdWZhY2VDb2xvcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAkc2hhZG93Q29sb3I7XG4gICAgLnRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kZWFsLWxpc3R7XG4gICAgICAgIGhlaWdodDogMjU2cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIC5kZWFsLWxpc3Qtd3JhcHBlcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbXtcbiAgICAgICAgJi5hY3RpdmVTb2xke1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlQm91Z2h0e1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQsIC5zdWJ0aXRsZT4uZmllbGR7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAmLnF1YW50aXR5e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuc2NvcmV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnNvbGR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmJvdWdodHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZGVhbC1oaXN0b3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmRlYWwtaGlzdG9yeSAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGVhbC1oaXN0b3J5IC5kZWFsLWxpc3Qge1xuICBoZWlnaHQ6IDI1NnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLmRlYWwtaGlzdG9yeSAuZGVhbC1saXN0IC5kZWFsLWxpc3Qtd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbS5hY3RpdmVTb2xkIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbS5hY3RpdmVCb3VnaHQge1xuICBjb2xvcjogcmVkO1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbSAuZmllbGQsIC5kZWFsLWhpc3RvcnkgLml0ZW0gLnN1YnRpdGxlID4gLmZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbSAuZmllbGQucXVhbnRpdHksIC5kZWFsLWhpc3RvcnkgLml0ZW0gLnN1YnRpdGxlID4gLmZpZWxkLnF1YW50aXR5IHtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZWFsLWhpc3RvcnkgLml0ZW0gLmZpZWxkLnNjb3JlLCAuZGVhbC1oaXN0b3J5IC5pdGVtIC5zdWJ0aXRsZSA+IC5maWVsZC5zY29yZSB7XG4gIHdpZHRoOiA4OHB4O1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbSAuZmllbGQuc29sZCwgLmRlYWwtaGlzdG9yeSAuaXRlbSAuc3VidGl0bGUgPiAuZmllbGQuc29sZCB7XG4gIHdpZHRoOiA4OHB4O1xufVxuLmRlYWwtaGlzdG9yeSAuaXRlbSAuZmllbGQuYm91Z2h0LCAuZGVhbC1oaXN0b3J5IC5pdGVtIC5zdWJ0aXRsZSA+IC5maWVsZC5ib3VnaHQge1xuICB3aWR0aDogODhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/widgets/deal-history/deal-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/widgets/deal-history/deal-history.component.ts ***!
  \****************************************************************/
/*! exports provided: DealHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealHistoryComponent", function() { return DealHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_market_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/market.service */ "./src/app/shared/market.service.ts");
/* harmony import */ var src_app_core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/game.service */ "./src/app/core/game.service.ts");




let DealHistoryComponent = class DealHistoryComponent {
    constructor(marketService, gameService) {
        this.marketService = marketService;
        this.gameService = gameService;
        this.dealList = [];
        //Quando ocorrer um negócio fechado:
        this.subscription1 = marketService.dealListChanged$.subscribe((dealList) => {
            this.dealList = dealList; //Atualiza o histórico de negócios neste component
        });
    }
    getPlayerLabel(id) {
        return this.gameService.getPlayerLabel(id);
    }
};
DealHistoryComponent.ctorParameters = () => [
    { type: _shared_market_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"] },
    { type: src_app_core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
DealHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deal-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/deal-history/deal-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal-history.component.scss */ "./src/app/widgets/deal-history/deal-history.component.scss")).default]
    })
], DealHistoryComponent);



/***/ }),

/***/ "./src/app/widgets/game-view/game-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/widgets/game-view/game-view.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game-view {\n  padding: 8px 0;\n  display: flex;\n}\n.game-view .col-1 {\n  display: inline-flex;\n  height: 100%;\n}\n.game-view .col-2 {\n  display: inline-flex;\n  height: 100%;\n  flex-direction: column;\n}\n.game-view .col-3 {\n  height: 100%;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvZ2FtZS12aWV3L2dhbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0cy9nYW1lLXZpZXcvZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9nYW1lLXZpZXcvZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtdmlld3tcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb2wtMXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmNvbC0ye1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY29sLTN7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxufSIsIi5nYW1lLXZpZXcge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nYW1lLXZpZXcgLmNvbC0xIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nYW1lLXZpZXcgLmNvbC0yIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5nYW1lLXZpZXcgLmNvbC0zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/widgets/game-view/game-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/widgets/game-view/game-view.component.ts ***!
  \**********************************************************/
/*! exports provided: GameViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameViewComponent", function() { return GameViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameViewComponent = class GameViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
GameViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/game-view/game-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-view.component.scss */ "./src/app/widgets/game-view/game-view.component.scss")).default]
    })
], GameViewComponent);



/***/ }),

/***/ "./src/app/widgets/new-game/new-game.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/widgets/new-game/new-game.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-game-view {\n  padding: 24px 0;\n}\n.new-game-view .title {\n  font-size: 12pt;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.new-game-view form {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  margin: auto;\n  width: 400px;\n}\n.new-game-view form .field {\n  margin-bottom: 24px;\n}\n.new-game-view form .field label {\n  margin-right: 8px;\n  display: inline-block;\n  width: 176px;\n  text-align: right;\n}\n.new-game-view form .field input[type=number] {\n  outline: none;\n  border: 1px solid #e2e2e2;\n  background: #080808;\n  border-radius: 4px;\n  height: 24px;\n  color: #e2e2e2;\n  text-align: center;\n  width: 128px;\n}\n.new-game-view form .start-button {\n  background: #1f1f1f;\n  box-shadow: 0 1px 3px #050505;\n  color: #e2e2e2;\n  border-radius: 4px;\n  padding: 0 16px;\n  height: 24px;\n  border: none;\n  font-size: 11pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldHMvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxlQUFBO0FDTEo7QURNSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNKUjtBREtRO0VBQ0ksbUJBQUE7QUNIWjtBRElZO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBMUJPO0VBMkJQLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBaENDO0VBaUNELGtCQUFBO0VBQ0EsWUFBQTtBQ0ZoQjtBREtRO0VBQ0ksbUJBdkNFO0VBd0NGLDZCQUFBO0VBQ0EsY0F4Q0s7RUF5Q0wsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL25ldy1nYW1lL25ldy1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHN1ZmFjZUNvbG9yOiAjMWYxZjFmO1xuJG9uUHJpbWFyeUNvbG9yOiAjZTJlMmUyO1xuJGJhY2tncm91bmRDb2xvcjogIzEyMTIxMjtcbiRzaGFkb3dDb2xvcjogIzA1MDUwNTtcbiRpbnB1dEJhY2tncm91bmRDb2xvcjogIzA4MDgwODtcblxuLm5ldy1nYW1lLXZpZXd7XG4gICAgcGFkZGluZzogMjRweCAwO1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIGZvcm17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIC5maWVsZHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3NnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJde1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG9uUHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRpbnB1dEJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkb25QcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RhcnQtYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1ZmFjZUNvbG9yO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4ICRzaGFkb3dDb2xvcjtcbiAgICAgICAgICAgIGNvbG9yOiAkb25QcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm5ldy1nYW1lLXZpZXcge1xuICBwYWRkaW5nOiAyNHB4IDA7XG59XG4ubmV3LWdhbWUtdmlldyAudGl0bGUge1xuICBmb250LXNpemU6IDEycHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5uZXctZ2FtZS12aWV3IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xufVxuLm5ldy1nYW1lLXZpZXcgZm9ybSAuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm5ldy1nYW1lLXZpZXcgZm9ybSAuZmllbGQgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTc2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm5ldy1nYW1lLXZpZXcgZm9ybSAuZmllbGQgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZTJlMmUyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMjhweDtcbn1cbi5uZXctZ2FtZS12aWV3IGZvcm0gLnN0YXJ0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAjMDUwNTA1O1xuICBjb2xvcjogI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDExcHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/widgets/new-game/new-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/widgets/new-game/new-game.component.ts ***!
  \********************************************************/
/*! exports provided: NewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameComponent", function() { return NewGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/game.service */ "./src/app/core/game.service.ts");



let NewGameComponent = class NewGameComponent {
    constructor(gameService) {
        this.gameService = gameService;
        //Este são os valores default inseridos no formulário de nova partida:
        this.form = {
            playersQty: 30,
            initialPurchasePrice: 65370,
            initialSalePrice: 65370.5,
            tickSize: 0.5,
            minimumOfferSize: 1,
        };
    }
    ngOnInit() {
    }
    newGame() {
        this.gameService.callNewGame(this.form);
    }
};
NewGameComponent.ctorParameters = () => [
    { type: _core_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
NewGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/new-game/new-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-game.component.scss */ "./src/app/widgets/new-game/new-game.component.scss")).default]
    })
], NewGameComponent);



/***/ }),

/***/ "./src/app/widgets/offers-book/offers-book.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/widgets/offers-book/offers-book.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".offers-book {\n  display: inline-flex;\n  flex-direction: column;\n  background: #1f1f1f;\n  padding: 8px;\n  border-radius: 4px;\n}\n.offers-book .title {\n  text-align: center;\n  margin-bottom: 8px;\n}\n.offers-book .offers-list {\n  display: flex;\n}\n.offers-book .purchase, .offers-book .sale {\n  display: inline-block;\n}\n.offers-book .purchase span, .offers-book .sale span {\n  display: inline-block;\n  text-align: center;\n}\n.offers-book .purchase .titles, .offers-book .sale .titles {\n  font-weight: bold;\n}\n.offers-book .purchase .total, .offers-book .sale .total {\n  width: 48px;\n}\n.offers-book .purchase .price, .offers-book .sale .price {\n  width: 96px;\n}\n.offers-book .purchase .offer .price {\n  color: green;\n}\n.offers-book .sale .offer .price {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvb2ZmZXJzLWJvb2svb2ZmZXJzLWJvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldHMvb2ZmZXJzLWJvb2svb2ZmZXJzLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBVFU7RUFVVixZQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0pSO0FETUk7RUFDSSxhQUFBO0FDSlI7QURNSTtFQUNJLHFCQUFBO0FDSlI7QURLUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtRO0VBQ0ksaUJBQUE7QUNIWjtBREtRO0VBQ0ksV0FBQTtBQ0haO0FES1E7RUFDSSxXQUFBO0FDSFo7QURPUTtFQUNJLFlBQUE7QUNMWjtBRFNRO0VBQ0ksVUFBQTtBQ1BaIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9vZmZlcnMtYm9vay9vZmZlcnMtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdWZhY2VDb2xvcjogIzFmMWYxZjtcbiRvblByaW1hcnlDb2xvcjogI2UyZTJlMjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICMxMjEyMTI7XG4kc2hhZG93Q29sb3I6ICMwNTA1MDU7XG4kaW5wdXRCYWNrZ3JvdW5kQ29sb3I6ICMwODA4MDg7XG5cbi5vZmZlcnMtYm9va3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6ICRzdWZhY2VDb2xvcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5vZmZlcnMtbGlzdHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnB1cmNoYXNlLCAuc2FsZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZXN7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAudG90YWx7XG4gICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICB3aWR0aDogOTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHVyY2hhc2V7XG4gICAgICAgIC5vZmZlciAucHJpY2V7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNhbGV7XG4gICAgICAgIC5vZmZlciAucHJpY2V7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5vZmZlcnMtYm9vayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5vZmZlcnMtYm9vayAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5vZmZlcnMtYm9vayAub2ZmZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm9mZmVycy1ib29rIC5wdXJjaGFzZSwgLm9mZmVycy1ib29rIC5zYWxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm9mZmVycy1ib29rIC5wdXJjaGFzZSBzcGFuLCAub2ZmZXJzLWJvb2sgLnNhbGUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9mZmVycy1ib29rIC5wdXJjaGFzZSAudGl0bGVzLCAub2ZmZXJzLWJvb2sgLnNhbGUgLnRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9mZmVycy1ib29rIC5wdXJjaGFzZSAudG90YWwsIC5vZmZlcnMtYm9vayAuc2FsZSAudG90YWwge1xuICB3aWR0aDogNDhweDtcbn1cbi5vZmZlcnMtYm9vayAucHVyY2hhc2UgLnByaWNlLCAub2ZmZXJzLWJvb2sgLnNhbGUgLnByaWNlIHtcbiAgd2lkdGg6IDk2cHg7XG59XG4ub2ZmZXJzLWJvb2sgLnB1cmNoYXNlIC5vZmZlciAucHJpY2Uge1xuICBjb2xvcjogZ3JlZW47XG59XG4ub2ZmZXJzLWJvb2sgLnNhbGUgLm9mZmVyIC5wcmljZSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/widgets/offers-book/offers-book.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/widgets/offers-book/offers-book.component.ts ***!
  \**************************************************************/
/*! exports provided: OffersBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersBookComponent", function() { return OffersBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_market_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/market.service */ "./src/app/shared/market.service.ts");
/* harmony import */ var src_app_shared_OfferType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/OfferType */ "./src/app/shared/OfferType.ts");




let OffersBookComponent = class OffersBookComponent {
    constructor(marketService) {
        this.marketService = marketService;
        this.purchaseOffersList = [];
        this.saleOffersList = [];
        this.subscription1 = marketService.offerListChanged$.subscribe((offersList) => {
            //Recebe o atributo offerList da classe Market e atribui ao purchaseOffersList ou saleOffersList:
            this.refreshOffers(offersList);
        });
    }
    refreshOffers(offersList) {
        //Zera as listas, visto que elas serão reconstruídas:
        this.purchaseOffersList = [];
        this.saleOffersList = [];
        //Reconstrói as listas:
        for (var score in offersList) { //Para cada score na lista de ofertas por nível de pontuação...
            //Se a oferta a ser inserida for de compra:
            if (offersList[score].status === src_app_shared_OfferType__WEBPACK_IMPORTED_MODULE_3__["OfferType"].PURCHASE) {
                this.purchaseOffersList.push(offersList[score]);
            }
            //Se a oferta a ser inserida for de venda:
            else if (offersList[score].status === src_app_shared_OfferType__WEBPACK_IMPORTED_MODULE_3__["OfferType"].SALE) {
                this.saleOffersList.push(offersList[score]);
            }
            else
                console.log('Erro, tipo de offer score não identificado: ' + offersList[score].status);
        }
        //Ordena as litas de ofertas:
        this.sortOffers();
    }
    sortOffers() {
        //Ordena a lista de ofertas de compra:
        let sortedPurchases = [];
        let count = this.purchaseOffersList.length;
        for (let i = 0; i < count; i++) {
            let maxScore = 0;
            let index = -1;
            this.purchaseOffersList.forEach((offerScore, os) => {
                if (parseFloat(offerScore.score) > maxScore) {
                    maxScore = parseFloat(offerScore.score);
                    index = os;
                }
            });
            sortedPurchases.push(this.purchaseOffersList[index]);
            this.purchaseOffersList.splice(index, 1);
        }
        sortedPurchases.forEach((sortedOffer, so) => {
            this.purchaseOffersList.push(sortedOffer);
        });
        //Ordena a lista de ofertas de venda:
        sortedPurchases = [];
        count = this.saleOffersList.length;
        for (let i = 0; i < count; i++) {
            let maxScore = 0;
            let index = -1;
            this.saleOffersList.forEach((offerScore, os) => {
                if (parseFloat(offerScore.score) > maxScore) {
                    maxScore = parseFloat(offerScore.score);
                    index = os;
                }
            });
            sortedPurchases.push(this.saleOffersList[index]);
            this.saleOffersList.splice(index, 1);
        }
        sortedPurchases.forEach((sortedOffer, so) => {
            this.saleOffersList.push(sortedOffer);
        });
        this.saleOffersList.reverse();
    }
};
OffersBookComponent.ctorParameters = () => [
    { type: src_app_shared_market_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"] }
];
OffersBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/offers-book/offers-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers-book.component.scss */ "./src/app/widgets/offers-book/offers-book.component.scss")).default]
    })
], OffersBookComponent);



/***/ }),

/***/ "./src/app/widgets/top-bar/top-bar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/widgets/top-bar/top-bar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbar {\n  display: flex;\n  background: #1f1f1f;\n  color: #e2e2e2;\n  padding: 8px 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211cmlsby9yZXAvb3Blbi1zY2FscGluZy9zcmMvYXBwL3dpZGdldHMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFQVTtFQVFWLGNBUGE7RUFRYixnQkFBQTtFQUNBLHdDQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdWZhY2VDb2xvcjogIzFmMWYxZjtcbiRvblByaW1hcnlDb2xvcjogI2UyZTJlMjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICMxMjEyMTI7XG4kc2hhZG93Q29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuLnRvcGJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICRzdWZhY2VDb2xvcjtcbiAgICBjb2xvcjogJG9uUHJpbWFyeUNvbG9yO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4ICRzaGFkb3dDb2xvcjtcbn0iLCIudG9wYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgY29sb3I6ICNlMmUyZTI7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/widgets/top-bar/top-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widgets/top-bar/top-bar.component.ts ***!
  \******************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/top-bar/top-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-bar.component.scss */ "./src/app/widgets/top-bar/top-bar.component.scss")).default]
    })
], TopBarComponent);



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-view/game-view.component */ "./src/app/widgets/game-view/game-view.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/widgets/top-bar/top-bar.component.ts");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/widgets/new-game/new-game.component.ts");
/* harmony import */ var _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal-history/deal-history.component */ "./src/app/widgets/deal-history/deal-history.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bullet_bullet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bullet/bullet.component */ "./src/app/widgets/bullet/bullet.component.ts");
/* harmony import */ var _offers_book_offers_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offers-book/offers-book.component */ "./src/app/widgets/offers-book/offers-book.component.ts");










let WidgetsModule = class WidgetsModule {
};
WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_game_view_game_view_component__WEBPACK_IMPORTED_MODULE_3__["GameViewComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"], _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__["NewGameComponent"], _deal_history_deal_history_component__WEBPACK_IMPORTED_MODULE_6__["DealHistoryComponent"], _bullet_bullet_component__WEBPACK_IMPORTED_MODULE_8__["BulletComponent"], _offers_book_offers_book_component__WEBPACK_IMPORTED_MODULE_9__["OffersBookComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        exports: [
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"],
            _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_5__["NewGameComponent"],
            _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_3__["GameViewComponent"]
        ]
    })
], WidgetsModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/murilo/rep/open-scalping/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map