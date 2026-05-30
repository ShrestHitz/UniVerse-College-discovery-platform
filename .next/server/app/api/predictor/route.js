"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/predictor/route";
exports.ids = ["app/api/predictor/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredictor%2Froute&page=%2Fapi%2Fpredictor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictor%2Froute.ts&appDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredictor%2Froute&page=%2Fapi%2Fpredictor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictor%2Froute.ts&appDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Shresth_Downloads_UniVerse_final_UniVerse_app_api_predictor_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/predictor/route.ts */ \"(rsc)/./app/api/predictor/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/predictor/route\",\n        pathname: \"/api/predictor\",\n        filename: \"route\",\n        bundlePath: \"app/api/predictor/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Shresth\\\\Downloads\\\\UniVerse final\\\\UniVerse\\\\app\\\\api\\\\predictor\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Shresth_Downloads_UniVerse_final_UniVerse_app_api_predictor_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/predictor/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVkaWN0b3IlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByZWRpY3RvciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByZWRpY3RvciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaHJlc3RoJTVDRG93bmxvYWRzJTVDVW5pVmVyc2UlMjBmaW5hbCU1Q1VuaVZlcnNlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNTaHJlc3RoJTVDRG93bmxvYWRzJTVDVW5pVmVyc2UlMjBmaW5hbCU1Q1VuaVZlcnNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXZlcnNlLz8zMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFNocmVzdGhcXFxcRG93bmxvYWRzXFxcXFVuaVZlcnNlIGZpbmFsXFxcXFVuaVZlcnNlXFxcXGFwcFxcXFxhcGlcXFxccHJlZGljdG9yXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcmVkaWN0b3Ivcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcmVkaWN0b3JcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByZWRpY3Rvci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFNocmVzdGhcXFxcRG93bmxvYWRzXFxcXFVuaVZlcnNlIGZpbmFsXFxcXFVuaVZlcnNlXFxcXGFwcFxcXFxhcGlcXFxccHJlZGljdG9yXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcmVkaWN0b3Ivcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredictor%2Froute&page=%2Fapi%2Fpredictor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictor%2Froute.ts&appDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/predictor/route.ts":
/*!************************************!*\
  !*** ./app/api/predictor/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\nasync function POST(req) {\n    try {\n        const { exam, rank, category } = await req.json();\n        if (!exam || !rank || !category) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"exam, rank, and category are required\"\n            }, {\n                status: 400\n            });\n        }\n        const examRecord = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.exam.findFirst({\n            where: {\n                name: {\n                    contains: exam,\n                    mode: \"insensitive\"\n                }\n            }\n        });\n        if (!examRecord) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Exam not found\"\n            }, {\n                status: 404\n            });\n        }\n        const cutoffs = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.cutoff.findMany({\n            where: {\n                examId: examRecord.id,\n                category: {\n                    equals: category,\n                    mode: \"insensitive\"\n                },\n                closingRank: {\n                    gte: parseInt(rank)\n                }\n            },\n            include: {\n                college: {\n                    include: {\n                        placements: true\n                    }\n                },\n                course: true\n            },\n            orderBy: {\n                closingRank: \"asc\"\n            },\n            take: 20\n        });\n        const results = cutoffs.map((c)=>({\n                college: {\n                    id: c.college.id,\n                    name: c.college.name,\n                    location: c.college.location,\n                    state: c.college.state,\n                    rating: c.college.rating,\n                    images: c.college.images,\n                    nirfRanking: c.college.nirfRanking,\n                    placements: c.college.placements[0] || null\n                },\n                course: {\n                    name: c.course.name\n                },\n                closingRank: c.closingRank,\n                openingRank: c.openingRank,\n                category: c.category\n            }));\n        // Save session if user is logged in\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (session?.user) {\n            const userId = parseInt(session.user.id);\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.predictorSession.create({\n                data: {\n                    userId,\n                    exam,\n                    rank: parseInt(rank),\n                    category,\n                    recommendedColleges: results\n                }\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            results,\n            exam,\n            rank,\n            category\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Predictor failed\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3hFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bml2ZXJzZS8uL2FwcC9hcGkvcHJlZGljdG9yL3JvdXRlLnRzPzQ1NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZXhhbSwgcmFuaywgY2F0ZWdvcnkgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAoIWV4YW0gfHwgIXJhbmsgfHwgIWNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJleGFtLCByYW5rLCBhbmQgY2F0ZWdvcnkgYXJlIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtUmVjb3JkID0gYXdhaXQgcHJpc21hLmV4YW0uZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IG5hbWU6IHsgY29udGFpbnM6IGV4YW0sIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9IH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4YW1SZWNvcmQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkV4YW0gbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXRvZmZzID0gYXdhaXQgcHJpc21hLmN1dG9mZi5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBleGFtSWQ6IGV4YW1SZWNvcmQuaWQsXG4gICAgICAgIGNhdGVnb3J5OiB7IGVxdWFsczogY2F0ZWdvcnksIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9LFxuICAgICAgICBjbG9zaW5nUmFuazogeyBndGU6IHBhcnNlSW50KHJhbmspIH0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb2xsZWdlOiB7XG4gICAgICAgICAgaW5jbHVkZTogeyBwbGFjZW1lbnRzOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJzZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7IGNsb3NpbmdSYW5rOiBcImFzY1wiIH0sXG4gICAgICB0YWtlOiAyMCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBjdXRvZmZzLm1hcCgoYykgPT4gKHtcbiAgICAgIGNvbGxlZ2U6IHtcbiAgICAgICAgaWQ6IGMuY29sbGVnZS5pZCxcbiAgICAgICAgbmFtZTogYy5jb2xsZWdlLm5hbWUsXG4gICAgICAgIGxvY2F0aW9uOiBjLmNvbGxlZ2UubG9jYXRpb24sXG4gICAgICAgIHN0YXRlOiBjLmNvbGxlZ2Uuc3RhdGUsXG4gICAgICAgIHJhdGluZzogYy5jb2xsZWdlLnJhdGluZyxcbiAgICAgICAgaW1hZ2VzOiBjLmNvbGxlZ2UuaW1hZ2VzLFxuICAgICAgICBuaXJmUmFua2luZzogYy5jb2xsZWdlLm5pcmZSYW5raW5nLFxuICAgICAgICBwbGFjZW1lbnRzOiBjLmNvbGxlZ2UucGxhY2VtZW50c1swXSB8fCBudWxsLFxuICAgICAgfSxcbiAgICAgIGNvdXJzZTogeyBuYW1lOiBjLmNvdXJzZS5uYW1lIH0sXG4gICAgICBjbG9zaW5nUmFuazogYy5jbG9zaW5nUmFuayxcbiAgICAgIG9wZW5pbmdSYW5rOiBjLm9wZW5pbmdSYW5rLFxuICAgICAgY2F0ZWdvcnk6IGMuY2F0ZWdvcnksXG4gICAgfSkpO1xuXG4gICAgLy8gU2F2ZSBzZXNzaW9uIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBwYXJzZUludCgoc2Vzc2lvbi51c2VyIGFzIHsgaWQ6IHN0cmluZyB9KS5pZCk7XG4gICAgICBhd2FpdCBwcmlzbWEucHJlZGljdG9yU2Vzc2lvbi5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGV4YW0sXG4gICAgICAgICAgcmFuazogcGFyc2VJbnQocmFuayksXG4gICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgcmVjb21tZW5kZWRDb2xsZWdlczogcmVzdWx0cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHJlc3VsdHMsIGV4YW0sIHJhbmssIGNhdGVnb3J5IH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUHJlZGljdG9yIGZhaWxlZFwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwiZXhhbSIsInJhbmsiLCJjYXRlZ29yeSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImV4YW1SZWNvcmQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIm5hbWUiLCJjb250YWlucyIsIm1vZGUiLCJjdXRvZmZzIiwiY3V0b2ZmIiwiZmluZE1hbnkiLCJleGFtSWQiLCJpZCIsImVxdWFscyIsImNsb3NpbmdSYW5rIiwiZ3RlIiwicGFyc2VJbnQiLCJpbmNsdWRlIiwiY29sbGVnZSIsInBsYWNlbWVudHMiLCJjb3Vyc2UiLCJvcmRlckJ5IiwidGFrZSIsInJlc3VsdHMiLCJtYXAiLCJjIiwibG9jYXRpb24iLCJzdGF0ZSIsInJhdGluZyIsImltYWdlcyIsIm5pcmZSYW5raW5nIiwib3BlbmluZ1JhbmsiLCJzZXNzaW9uIiwidXNlciIsInVzZXJJZCIsInByZWRpY3RvclNlc3Npb24iLCJjcmVhdGUiLCJkYXRhIiwicmVjb21tZW5kZWRDb2xsZWdlcyIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/predictor/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) return null;\n                return {\n                    id: String(user.id),\n                    name: user.name,\n                    email: user.email\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) token.id = user.id;\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRTtBQUNwQztBQUNJO0FBRTNCLE1BQU1HLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVLE9BQU87Z0JBRTFELE1BQU1FLE9BQU8sTUFBTVYsMkNBQU1BLENBQUNVLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFBRVAsT0FBT0QsWUFBWUMsS0FBSztvQkFBQztnQkFDcEM7Z0JBRUEsSUFBSSxDQUFDSyxNQUFNLE9BQU87Z0JBRWxCLE1BQU1HLGtCQUFrQixNQUFNZCx1REFBYyxDQUMxQ0ssWUFBWUksUUFBUSxFQUNwQkUsS0FBS0YsUUFBUTtnQkFHZixJQUFJLENBQUNLLGlCQUFpQixPQUFPO2dCQUU3QixPQUFPO29CQUFFRSxJQUFJQyxPQUFPTixLQUFLSyxFQUFFO29CQUFHWixNQUFNTyxLQUFLUCxJQUFJO29CQUFFRSxPQUFPSyxLQUFLTCxLQUFLO2dCQUFDO1lBQ25FO1FBQ0Y7S0FDRDtJQUNEWSxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUMzQkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTVcsTUFBTU4sRUFBRSxHQUFHTCxLQUFLSyxFQUFFO1lBQzVCLE9BQU9NO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNKLFFBQVFQLElBQUksRUFBRTtnQkFDeEJPLFFBQVFQLElBQUksQ0FBcUJLLEVBQUUsR0FBR00sTUFBTU4sRUFBRTtZQUNqRDtZQUNBLE9BQU9FO1FBQ1Q7SUFDRjtJQUNBSyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXZlcnNlLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuL3ByaXNtYVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7IGlkOiBTdHJpbmcodXNlci5pZCksIG5hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KS5pZCA9IHRva2VuLmlkIGFzIHN0cmluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJpZCIsIlN0cmluZyIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFHO0FBRUwsSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pdmVyc2UvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBbXCJxdWVyeVwiXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredictor%2Froute&page=%2Fapi%2Fpredictor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictor%2Froute.ts&appDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShresth%5CDownloads%5CUniVerse%20final%5CUniVerse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();