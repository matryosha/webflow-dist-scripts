"use strict";
var Favia;
(self["webpackChunkfavia_client"] = self["webpackChunkfavia_client"] || []).push([[535],{

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export isAuthenticated */
/* harmony import */ var serverEndpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);



class AuthClient {
    #isAuthenticated = false;

    get isAuthenticated() {
        return this.#isAuthenticated;
    }

    init() {
        const authStatus = localStorage.getItem('authStatus')
        if (authStatus !== null) {
            this.#isAuthenticated = true;
            return;
        }
    }

    async exchangeSignCodeToTokenCookie(code) {
        const respone = await fetch(serverEndpoints__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB + `/exchangeCodeToToken?code=${code}`, {credentials: 'include'})

        return respone.ok
    }

    setAuthenticatedStatus(isAuth) {
        if (isAuth) {
            localStorage.setItem('authStatus', 'yay')
            this.#isAuthenticated = true;
        } else {
            localStorage.removeItem('authStatus');
            this.#isAuthenticated = false;
        }
    }

    async goToAuthPage() {
        const serverGetAuthUrl = `${serverEndpoints__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/request-auth-url;`;

        const response = await fetch(serverGetAuthUrl);
        const { authUrl } = await response.json();

        window.location.href = authUrl;
    }

}

const authClient = new AuthClient();

const isAuthenticated = () => authClient.isAuthenticated;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authClient);


/***/ }),

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var authClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);



const googleLoginBtn = document.getElementById('google-login-btn')
googleLoginBtn.addEventListener('click', async () => {
    authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.goToAuthPage();
})

console.log('login page code 3')

/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J7: () => (/* binding */ GEODECODE_URL),
/* harmony export */   LB: () => (/* binding */ SERVER_URL),
/* harmony export */   _F: () => (/* binding */ GET_RECENT_LISTING_URL),
/* harmony export */   _r: () => (/* binding */ CREATE_LISTING_URL),
/* harmony export */   il: () => (/* binding */ REVERSE_GEO_URL),
/* harmony export */   nq: () => (/* binding */ UPLOAD_MEDIA_URL)
/* harmony export */ });
const SERVER_URL = 'http://localhost:5000'
const GEODECODE_URL = SERVER_URL + '/map/geodecode'
const REVERSE_GEO_URL = SERVER_URL + '/map/reverseGeo'

const UPLOAD_MEDIA_URL = SERVER_URL + '/upload/newListingMedia'

const CREATE_LISTING_URL = SERVER_URL + '/create-listing'

const GET_RECENT_LISTING_URL = SERVER_URL + '/listings/recent'

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(882));
/******/ (Favia = typeof Favia === "undefined" ? {} : Favia).pageModule = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlEOzs7QUFHekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsaUVBQVMsZ0NBQWdDLEtBQUssSUFBSSx1QkFBdUI7O0FBRTdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsaUVBQVMsQ0FBQyxrQkFBa0I7O0FBRWhFO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVAsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7O0FDakRTOzs7QUFHbkM7QUFDQTtBQUNBLElBQUksMkRBQVU7QUFDZCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXV0aENsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlckVuZHBvaW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVJWRVJfVVJMIGFzIHNlcnZlclVybCB9IGZyb20gJ3NlcnZlckVuZHBvaW50cydcblxuXG5jbGFzcyBBdXRoQ2xpZW50IHtcbiAgICAjaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgICBnZXQgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGF1dGhTdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aFN0YXR1cycpXG4gICAgICAgIGlmIChhdXRoU3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiNpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZXhjaGFuZ2VTaWduQ29kZVRvVG9rZW5Db29raWUoY29kZSkge1xuICAgICAgICBjb25zdCByZXNwb25lID0gYXdhaXQgZmV0Y2goc2VydmVyVXJsICsgYC9leGNoYW5nZUNvZGVUb1Rva2VuP2NvZGU9JHtjb2RlfWAsIHtjcmVkZW50aWFsczogJ2luY2x1ZGUnfSlcblxuICAgICAgICByZXR1cm4gcmVzcG9uZS5va1xuICAgIH1cblxuICAgIHNldEF1dGhlbnRpY2F0ZWRTdGF0dXMoaXNBdXRoKSB7XG4gICAgICAgIGlmIChpc0F1dGgpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoU3RhdHVzJywgJ3lheScpXG4gICAgICAgICAgICB0aGlzLiNpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhTdGF0dXMnKTtcbiAgICAgICAgICAgIHRoaXMuI2lzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ29Ub0F1dGhQYWdlKCkge1xuICAgICAgICBjb25zdCBzZXJ2ZXJHZXRBdXRoVXJsID0gYCR7c2VydmVyVXJsfS9yZXF1ZXN0LWF1dGgtdXJsO2A7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZXJ2ZXJHZXRBdXRoVXJsKTtcbiAgICAgICAgY29uc3QgeyBhdXRoVXJsIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhdXRoVXJsO1xuICAgIH1cblxufVxuXG5jb25zdCBhdXRoQ2xpZW50ID0gbmV3IEF1dGhDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IGF1dGhDbGllbnQuaXNBdXRoZW50aWNhdGVkO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoQ2xpZW50O1xuIiwiaW1wb3J0IGF1dGhDbGllbnQgZnJvbSBcImF1dGhDbGllbnRcIlxuXG5cbmNvbnN0IGdvb2dsZUxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1sb2dpbi1idG4nKVxuZ29vZ2xlTG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXV0aENsaWVudC5nb1RvQXV0aFBhZ2UoKTtcbn0pXG5cbmNvbnNvbGUubG9nKCdsb2dpbiBwYWdlIGNvZGUgMycpIiwiZXhwb3J0IGNvbnN0IFNFUlZFUl9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuZXhwb3J0IGNvbnN0IEdFT0RFQ09ERV9VUkwgPSBTRVJWRVJfVVJMICsgJy9tYXAvZ2VvZGVjb2RlJ1xuZXhwb3J0IGNvbnN0IFJFVkVSU0VfR0VPX1VSTCA9IFNFUlZFUl9VUkwgKyAnL21hcC9yZXZlcnNlR2VvJ1xuXG5leHBvcnQgY29uc3QgVVBMT0FEX01FRElBX1VSTCA9IFNFUlZFUl9VUkwgKyAnL3VwbG9hZC9uZXdMaXN0aW5nTWVkaWEnXG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVElOR19VUkwgPSBTRVJWRVJfVVJMICsgJy9jcmVhdGUtbGlzdGluZydcblxuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfTElTVElOR19VUkwgPSBTRVJWRVJfVVJMICsgJy9saXN0aW5ncy9yZWNlbnQnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9