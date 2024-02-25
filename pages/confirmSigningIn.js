"use strict";
var Favia;
(self["webpackChunkfavia_client"] = self["webpackChunkfavia_client"] || []).push([[292],{

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

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var authClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);


console.log(authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

(async function (){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const signInCode = urlParams.get('signInCode');

    if (signInCode === undefined) {
        console.log('no code found')
        return
    }

    const isSuccessful = await authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.exchangeSignCodeToTokenCookie(signInCode)
    if (isSuccessful) {
        authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.setAuthenticatedStatus(true)
        window.location.href = '/'
        return
    }

})();

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
/******/ var __webpack_exports__ = (__webpack_exec__(223));
/******/ (Favia = typeof Favia === "undefined" ? {} : Favia).pageModule = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY29uZmlybVNpZ25pbmdJbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUQ7OztBQUd6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxpRUFBUyxnQ0FBZ0MsS0FBSyxJQUFJLHVCQUF1Qjs7QUFFN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxpRUFBUyxDQUFDLGtCQUFrQjs7QUFFaEU7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7QUNqRFU7O0FBRXBDLFlBQVksMkRBQVU7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsMkRBQVU7QUFDekM7QUFDQSxRQUFRLDJEQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qk07QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGhDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbmZpcm1TaWduaW5nSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlckVuZHBvaW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVJWRVJfVVJMIGFzIHNlcnZlclVybCB9IGZyb20gJ3NlcnZlckVuZHBvaW50cydcblxuXG5jbGFzcyBBdXRoQ2xpZW50IHtcbiAgICAjaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgICBnZXQgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaXNBdXRoZW50aWNhdGVkO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGF1dGhTdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aFN0YXR1cycpXG4gICAgICAgIGlmIChhdXRoU3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiNpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZXhjaGFuZ2VTaWduQ29kZVRvVG9rZW5Db29raWUoY29kZSkge1xuICAgICAgICBjb25zdCByZXNwb25lID0gYXdhaXQgZmV0Y2goc2VydmVyVXJsICsgYC9leGNoYW5nZUNvZGVUb1Rva2VuP2NvZGU9JHtjb2RlfWAsIHtjcmVkZW50aWFsczogJ2luY2x1ZGUnfSlcblxuICAgICAgICByZXR1cm4gcmVzcG9uZS5va1xuICAgIH1cblxuICAgIHNldEF1dGhlbnRpY2F0ZWRTdGF0dXMoaXNBdXRoKSB7XG4gICAgICAgIGlmIChpc0F1dGgpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoU3RhdHVzJywgJ3lheScpXG4gICAgICAgICAgICB0aGlzLiNpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhTdGF0dXMnKTtcbiAgICAgICAgICAgIHRoaXMuI2lzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ29Ub0F1dGhQYWdlKCkge1xuICAgICAgICBjb25zdCBzZXJ2ZXJHZXRBdXRoVXJsID0gYCR7c2VydmVyVXJsfS9yZXF1ZXN0LWF1dGgtdXJsO2A7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZXJ2ZXJHZXRBdXRoVXJsKTtcbiAgICAgICAgY29uc3QgeyBhdXRoVXJsIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhdXRoVXJsO1xuICAgIH1cblxufVxuXG5jb25zdCBhdXRoQ2xpZW50ID0gbmV3IEF1dGhDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IGF1dGhDbGllbnQuaXNBdXRoZW50aWNhdGVkO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoQ2xpZW50O1xuIiwiaW1wb3J0IGF1dGhDbGllbnQgZnJvbSBcImF1dGhDbGllbnRcIjtcblxuY29uc29sZS5sb2coYXV0aENsaWVudCk7XG5cbihhc3luYyBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cbiAgICBjb25zdCBzaWduSW5Db2RlID0gdXJsUGFyYW1zLmdldCgnc2lnbkluQ29kZScpO1xuXG4gICAgaWYgKHNpZ25JbkNvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gY29kZSBmb3VuZCcpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VjY2Vzc2Z1bCA9IGF3YWl0IGF1dGhDbGllbnQuZXhjaGFuZ2VTaWduQ29kZVRvVG9rZW5Db29raWUoc2lnbkluQ29kZSlcbiAgICBpZiAoaXNTdWNjZXNzZnVsKSB7XG4gICAgICAgIGF1dGhDbGllbnQuc2V0QXV0aGVudGljYXRlZFN0YXR1cyh0cnVlKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IFNFUlZFUl9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuZXhwb3J0IGNvbnN0IEdFT0RFQ09ERV9VUkwgPSBTRVJWRVJfVVJMICsgJy9tYXAvZ2VvZGVjb2RlJ1xuZXhwb3J0IGNvbnN0IFJFVkVSU0VfR0VPX1VSTCA9IFNFUlZFUl9VUkwgKyAnL21hcC9yZXZlcnNlR2VvJ1xuXG5leHBvcnQgY29uc3QgVVBMT0FEX01FRElBX1VSTCA9IFNFUlZFUl9VUkwgKyAnL3VwbG9hZC9uZXdMaXN0aW5nTWVkaWEnXG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVElOR19VUkwgPSBTRVJWRVJfVVJMICsgJy9jcmVhdGUtbGlzdGluZydcblxuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfTElTVElOR19VUkwgPSBTRVJWRVJfVVJMICsgJy9saXN0aW5ncy9yZWNlbnQnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9