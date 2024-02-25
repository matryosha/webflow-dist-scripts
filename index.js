"use strict";
var Favia;
(self["webpackChunkfavia_client"] = self["webpackChunkfavia_client"] || []).push([[826],{

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

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authClient: () => (/* reexport safe */ authClient__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var authClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);



authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.init()
console.log("New auth status: ", authClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isAuthenticated */ .Z.isAuthenticated ? "Logged in" : "Anonymous")


// all re exported here will be available in any place. See webpack config for index.js entry, library option


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
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ Favia = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlEOzs7QUFHekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsaUVBQVMsZ0NBQWdDLEtBQUssSUFBSSx1QkFBdUI7O0FBRTdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsaUVBQVMsQ0FBQyxrQkFBa0I7O0FBRWhFO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVAsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakRDO0FBQzRCOztBQUV2RCwyREFBVTtBQUNWLGlDQUFpQywyRkFBMEI7OztBQUczRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hdXRoQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyRW5kcG9pbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFUlZFUl9VUkwgYXMgc2VydmVyVXJsIH0gZnJvbSAnc2VydmVyRW5kcG9pbnRzJ1xuXG5cbmNsYXNzIEF1dGhDbGllbnQge1xuICAgICNpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgIGdldCBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNpc0F1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgYXV0aFN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoU3RhdHVzJylcbiAgICAgICAgaWYgKGF1dGhTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuI2lzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBleGNoYW5nZVNpZ25Db2RlVG9Ub2tlbkNvb2tpZShjb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbmUgPSBhd2FpdCBmZXRjaChzZXJ2ZXJVcmwgKyBgL2V4Y2hhbmdlQ29kZVRvVG9rZW4/Y29kZT0ke2NvZGV9YCwge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KVxuXG4gICAgICAgIHJldHVybiByZXNwb25lLm9rXG4gICAgfVxuXG4gICAgc2V0QXV0aGVudGljYXRlZFN0YXR1cyhpc0F1dGgpIHtcbiAgICAgICAgaWYgKGlzQXV0aCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhTdGF0dXMnLCAneWF5JylcbiAgICAgICAgICAgIHRoaXMuI2lzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aFN0YXR1cycpO1xuICAgICAgICAgICAgdGhpcy4jaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnb1RvQXV0aFBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHNlcnZlckdldEF1dGhVcmwgPSBgJHtzZXJ2ZXJVcmx9L3JlcXVlc3QtYXV0aC11cmw7YDtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlcnZlckdldEF1dGhVcmwpO1xuICAgICAgICBjb25zdCB7IGF1dGhVcmwgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF1dGhVcmw7XG4gICAgfVxuXG59XG5cbmNvbnN0IGF1dGhDbGllbnQgPSBuZXcgQXV0aENsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4gYXV0aENsaWVudC5pc0F1dGhlbnRpY2F0ZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhDbGllbnQ7XG4iLCJpbXBvcnQgeyBkZXAgfSBmcm9tIFwibWFpblwiO1xuaW1wb3J0IGF1dGhDbGllbnQsIHtpc0F1dGhlbnRpY2F0ZWR9IGZyb20gXCJhdXRoQ2xpZW50XCI7XG5cbmF1dGhDbGllbnQuaW5pdCgpXG5jb25zb2xlLmxvZyhcIk5ldyBhdXRoIHN0YXR1czogXCIsIGF1dGhDbGllbnQuaXNBdXRoZW50aWNhdGVkID8gXCJMb2dnZWQgaW5cIiA6IFwiQW5vbnltb3VzXCIpXG5cblxuLy8gYWxsIHJlIGV4cG9ydGVkIGhlcmUgd2lsbCBiZSBhdmFpbGFibGUgaW4gYW55IHBsYWNlLiBTZWUgd2VicGFjayBjb25maWcgZm9yIGluZGV4LmpzIGVudHJ5LCBsaWJyYXJ5IG9wdGlvblxuZXhwb3J0IHthdXRoQ2xpZW50fSIsImV4cG9ydCBjb25zdCBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCdcbmV4cG9ydCBjb25zdCBHRU9ERUNPREVfVVJMID0gU0VSVkVSX1VSTCArICcvbWFwL2dlb2RlY29kZSdcbmV4cG9ydCBjb25zdCBSRVZFUlNFX0dFT19VUkwgPSBTRVJWRVJfVVJMICsgJy9tYXAvcmV2ZXJzZUdlbydcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9NRURJQV9VUkwgPSBTRVJWRVJfVVJMICsgJy91cGxvYWQvbmV3TGlzdGluZ01lZGlhJ1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1RJTkdfVVJMID0gU0VSVkVSX1VSTCArICcvY3JlYXRlLWxpc3RpbmcnXG5cbmV4cG9ydCBjb25zdCBHRVRfUkVDRU5UX0xJU1RJTkdfVVJMID0gU0VSVkVSX1VSTCArICcvbGlzdGluZ3MvcmVjZW50JyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==