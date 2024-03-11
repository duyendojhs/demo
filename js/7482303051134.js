(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([[11], {
    1: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(process) {
            var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10), core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__), core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42), core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__), core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44), core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__), core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45), core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__), core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35), core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__), core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36), core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__), core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52), core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__), core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66), core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__), core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37), core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__), core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(202), core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__), core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28), core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__), core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15), core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__), core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34), core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__), core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21), core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__), https__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87), https__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_14__), axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8), axios__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__), __awaiter = function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, c) {
                    function l(e) {
                        try {
                            h(o.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }
                    function d(e) {
                        try {
                            h(o.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }
                    function h(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(l, d)
                    }
                    h((o = o.apply(e, t || [])).next())
                }
                ))
            }, __generator = function(e, body) {
                var t, n, o, g, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                },
                "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }
                ),
                g;
                function c(c) {
                    return function(l) {
                        return function(c) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; g && (g = 0,
                            c[0] && (r = 0)),
                            r; )
                                try {
                                    if (t = 1,
                                    n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, c[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (c = [2 & c[0], o.value]),
                                    c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = c[1],
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = r.trys,
                                        (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            r.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = c;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(c);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    c = body.call(e, r)
                                } catch (e) {
                                    c = [6, e],
                                    n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & c[0])
                                throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, l])
                    }
                }
            }, _a, FilterResultSource, isCN = !!(null === (_a = "api-rog.asus.com") || void 0 === _a ? void 0 : _a.includes(".cn")), baseUrl = "api-rog.asus.com", baseECUrl = "estorestage.asus.com", baseSupportUrl = "rog.asus.com", axiosInstance;
            axiosInstance = axios__WEBPACK_IMPORTED_MODULE_15___default.a.create({
                httpsAgent: new https__WEBPACK_IMPORTED_MODULE_14___default.a.Agent({
                    rejectUnauthorized: !1
                }),
                timeout: 15e3
            }),
            axiosInstance.interceptors.response.use((function(res) {
                try {
                    if ("undefined" != typeof window && "stage-api-rog.asus.com" !== baseUrl && "stage-api-rog.asus.com.cn" !== baseUrl && "api-rog.asus.com " !== baseUrl && "api-rog.asus.com.cn" !== baseUrl) {
                        var NDATA = eval('window["__NUXT__"].state.Config');
                        NDATA.APIList += "," + res.request.responseURL
                    }
                } catch (e) {}
                return res
            }
            )),
            process.env.APILIST = "",
            axiosInstance.interceptors.request.use((function(e) {
                var t, n = e.url.split("https://")[1].split("/")[0];
                e.url;
                return (t = e.params || {}).systemCode = setCDNSystemCodeHandler(n),
                e.params = t,
                e
            }
            ));
            try {
                if (isCN) {
                    if (isCN) {
                        var isCNProductionSite = -1 !== window.location.origin.indexOf("rog.asus.com.cn");
                        baseSupportUrl = isCNProductionSite ? "rog.asus.com.cn" : "rog-bacchus.asus.com"
                    }
                } else {
                    var isProductionSite = "api-rog.asus.com" === baseUrl;
                    baseSupportUrl = isProductionSite ? "rog.asus.com" : "rog-bacchus.asus.com",
                    baseECUrl = isProductionSite ? "estore.asus.com" : "estorestage.asus.com"
                }
            } catch (e) {}
            var setCDNSystemCodeHandler = function(e) {
                var t = window.location.host
                  , n = window.location.href;
                if (n.indexOf("/event") > -1 || n.indexOf("/microsite") > -1 || n.indexOf("/campaign") > -1)
                    return n.indexOf("/event") > -1 ? "rogevent" : n.indexOf("/microsite") > -1 ? "rogmicrosite" : n.indexOf("/campaign") > -1 ? "rogcampaign" : "";
                switch (e) {
                case "dev-api-rog.asus.com":
                    return "devrog";
                case "api-rogmars.asus.com":
                    return "rogmars";
                case "stage-api-rog.asus.com":
                    return "stagerog";
                case "api-rog.asus.com":
                case "rog-bacchus.asus.com":
                    return "rog"
                }
                switch (t) {
                case "localhost:8000":
                    return "localrog";
                case "dev-rog.asus.com":
                    return "devrog";
                case "rogmars.asus.com":
                    return "rogmars";
                case "stage-rog.asus.com":
                    return "stagerog";
                case "rog.asus.com":
                    return "rog";
                case "sowoverload.asus.com":
                    return "sowoverload";
                case "www.asus.com":
                    return "asus";
                case "account.asus.com":
                    return "account";
                case "dev-account.asus.com":
                    return "devaccount";
                case "nomos.asus.com":
                    return "nomos";
                case "rog.asus.com.cn":
                    return "rogcn";
                case "rog-bacchus.asus.com":
                    return "devsupport";
                default:
                    var o = window.location.host.replace(".asus.com", "").replace(".", "");
                    return "rog".concat(o)
                }
            }, setServerCDNSystemCodeHandler = function(e, t) {
                var n = e;
                if (t.indexOf("/event") > -1 || t.indexOf("/microsite") > -1 || t.indexOf("/campaign") > -1)
                    return t.indexOf("/event") > -1 ? "rogevent" : t.indexOf("/microsite") > -1 ? "rogmicrosite" : t.indexOf("/campaign") > -1 ? "rogcampaign" : "";
                switch (n) {
                case "localhost:8000":
                    return "localrog";
                case "dev-api-rog.asus.com":
                    return "devrog";
                case "api-rogmars.asus.com":
                    return "rogmars";
                case "stage-api-rog.asus.com":
                    return "stagerog";
                case "api-rog.asus.com":
                    return "rog";
                default:
                    var o = n.replace(".asus.com", "").replace(".", "");
                    return "rog".concat(o)
                }
            }, errorHandler = function(e, t) {
                return void 0 === t && (t = {}),
                Promise.reject(e)
            }, baseECCartUrl, subECCartUrl = "";
            __webpack_exports__.a = {
                getRouteInfo: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Route?WebURL=").concat(param.url),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getRouteRedirect: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/RouteRedirect?WebURL=").concat(param.url),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getWebsiteID: function() {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Website"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getHeader: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Header"),
                                    params: e.params,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getBanners: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Banners"),
                                    params: e.params
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getWebsite: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Website"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getFooter: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Footer?WebsiteId=").concat(e.WebsiteId),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getTranslation: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Translation"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getRegion: function() {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Region"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getTermCategory: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Terms/Category"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: param.params
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getTerms: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Terms/Content"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: param
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                rogProductArticle: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/ArticleTag?LevelTagId=").concat(param.LevelTagId),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                rogProductDisclaimer: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Disclaimer?Url=").concat(e.Url),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductLine: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/ProductLine"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e.params
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSection: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/Section"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e.params
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getRogStory: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/RogStory"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e.params
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getPLVideo: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/PLVideo"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getFilters: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v5/Filters"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getFiltersResults: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v5/Filters/Results"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                filterResultsAPINoToken: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v5/Filters/Results"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                levelHotProduct: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Template/HotProducts"),
                                    params: {
                                        WebsiteId: e.WebsiteId,
                                        LevelTagId: e.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                templateLevel: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Template/Level"),
                                    params: {
                                        WebsiteId: e.WebsiteId,
                                        LevelTagId: e.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSpotLight: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Template/SpotLight"),
                                    params: {
                                        WebsiteId: e.WebsiteId,
                                        LevelTagId: e.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                levelRelatedProduct: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/RelatedProduct"),
                                    params: {
                                        WebsiteId: e.WebsiteId,
                                        LevelTagId: e.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, "error message"),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                popUpAds: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Level/PopUPAds"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: {
                                        WebsiteId: param.WebsiteId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                accountStatus: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "post",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Account/Status"),
                                    data: {
                                        WebsiteId: param.WebsiteId,
                                        aticket: param.aticket
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                accountLinkMenu: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Account/Menu"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: {
                                        WebsiteId: param.WebsiteId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductInfo: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return param.Authorization && "" !== param.Authorization && "api-rogmars.asus.com" === baseUrl ? [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Info"),
                                    params: {
                                        LevelTagId: param.LevelTagId,
                                        DataId: param.DataId,
                                        DataRowId: param.DataRowId
                                    },
                                    headers: {
                                        Authorization: param.Authorization
                                    }
                                })] : [3, 2];
                            case 1:
                            case 3:
                                return [2, e.sent()];
                            case 2:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Info"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductTabs: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Tabs"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getGallery: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Gallery"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSpec: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return param.Authorization && "" !== param.Authorization && "api-rogmars.asus.com" === baseUrl ? [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Spec"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    },
                                    headers: {
                                        Authorization: param.Authorization
                                    }
                                })] : [3, 2];
                            case 1:
                            case 3:
                                return [2, e.sent()];
                            case 2:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Spec"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })]
                            }
                        }
                        ))
                    }
                    ))
                },
                getModelSpec: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return param.Authorization && "" !== param.Authorization && "api-rogmars.asus.com" === baseUrl ? [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/ModelSpec"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    },
                                    headers: {
                                        Authorization: param.Authorization
                                    }
                                })] : [3, 2];
                            case 1:
                            case 3:
                                return [2, e.sent()];
                            case 2:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/ModelSpec"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSingleSpec: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Common/Spec"),
                                    params: {
                                        WebsiteId: param.WebsiteId,
                                        PartNo: param.PartNo
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductWTB: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/WTB"),
                                    params: {
                                        WebsiteId: param.WebsiteId,
                                        PartNo: param.PartNo
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductAward: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Award"),
                                    params: {
                                        PageSize: param.PageSize,
                                        Page: param.Page,
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getRecommended: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Product/Recommend"),
                                    params: {
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                contentTemplate: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Content"),
                                    params: e.params
                                })];
                            case 1:
                                return [2, t.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportHeaderWording: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return origin = "https://www.asus.com",
                                origin = "9" === param.WebsiteId ? origin + ".cn" : origin,
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/OfficialSiteAPI.asmx/GetWording"),
                                    params: {
                                        WebsiteId: param.WebsiteId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportContentWording: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/Common/GetWording"),
                                    params: {
                                        website: param.WebSitePath,
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportRegisterPd: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/CheckRegisterByPD"),
                                    params: {
                                        website: param.WebSitePath,
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        aticket: param.Aticket ? param.Aticket : "",
                                        model: param.ModelName ? param.ModelName : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportTabs: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDSupportTab"),
                                    params: {
                                        website: param.WebSitePath,
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        model: param.ModelName ? param.ModelName : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportNeedHelp: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/service/GetNeedHelp"),
                                    params: {
                                        website: param.WebSitePath,
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportCPU: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDCPUList"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportCPUQVL: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLCPU"),
                                    params: param
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportCPUCol: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLCPUCOL"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: param
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportCPUGroupList: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var e;
                        return __generator(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLCPUGroupList"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: param
                                })];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return e = t.sent(),
                                errorHandler(e),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportQVL: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVL"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportFAQ: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDFaq"),
                                    params: {
                                        website: param.WebSitePath,
                                        typeId: param.TypeId,
                                        categoryId: param.CategoryId,
                                        keyword: param.Keyword,
                                        pdlevelId: param.LevelTagId,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        pagesize: "10",
                                        pageNumber: param.PageNumber,
                                        sort: "latest",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportManual: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDManual"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId,
                                        country: param.Country,
                                        region: param.Region
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportDeclaration: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDDeclaration"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportEMI: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDEMI"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportServiceGuide: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDGuide"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdhashedid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId,
                                        region: "",
                                        country: param.WebSitePath
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportCPUName: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDCPUName"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportOS: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDOS"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        cpu: param.cpu ? param.cpu : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportDriver: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDDrivers"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        cpu: param.cpu ? param.cpu : "",
                                        osid: param.osid ? param.osid : "",
                                        active: param.active ? param.active : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportBIOS: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDBIOS"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        cpu: param.cpu ? param.cpu : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportWarranty: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDWarranty"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportService: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetMoreService"),
                                    params: {
                                        systemCode: "rog",
                                        websiteCode: param.WebSitePath,
                                        typeId: 1
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportMemory: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLMemory"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        PageSize: param.PageSize ? param.PageSize : "20",
                                        PageIndex: param.PageIndex ? param.PageIndex : "1",
                                        Vendors: param.Vendors ? param.Vendors : "",
                                        Size: param.Size ? param.Size : "",
                                        RAMSpeed: param.RAMSpeed ? param.RAMSpeed : "",
                                        DIMM: param.DIMM ? param.DIMM : "",
                                        ECCDIMM: param.ECCDIMM ? param.ECCDIMM : "",
                                        keyword: param.keyword ? param.keyword : "",
                                        XMPEXPO: param.XMPEXPO ? param.XMPEXPO : "",
                                        CPUSeries: param.CPUSeries ? param.CPUSeries : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportMemoryCol: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLMemoryCOL"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportMemoryGroupList: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLMemoryGroupList"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportDevice: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLDevice"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        PageSize: param.PageSize ? param.PageSize : "20",
                                        PageIndex: param.PageIndex ? param.PageIndex : "1",
                                        keyword: param.keyword ? param.keyword : "",
                                        Series: param.Series ? param.Series : "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportDeviceCol: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLDeviceCOL"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportDeviceGroupList: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/product/GetPDQVLDeviceGroupList"),
                                    params: {
                                        website: param.WebSitePath,
                                        model: param.ModelName ? param.ModelName : "",
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        mode: "",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getProductSupportGetSupportURL: function(param) {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseSupportUrl, "/support/webapi/Service/GetSupportURL"),
                                    params: {
                                        website: param.WebSitePath,
                                        pdid: param.ProductId ? param.ProductId : "0",
                                        m1id: param.M1Id ? param.M1Id : "0",
                                        LevelTagId: param.LevelTagId
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                rogGeo: function() {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://rog.asus.com/geo",
                                    data: {},
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                rogCNGeo: function() {
                    return __awaiter(this, void 0, Promise, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, axiosInstance({
                                    method: "get",
                                    url: "https://geo.asus.com/rogcngeo/",
                                    data: {},
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        }
                        ))
                    }
                    ))
                },
                getWallpaperFolderList: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Wallpaper/FolderList"),
                                    params: e.params,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getWallpaperPhotoList: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Wallpaper/PhotoList"),
                                    params: e.params,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getWallpaperDownload: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Wallpaper/Download/").concat(e.params.selectedSize),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getArticleList: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Article/List"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                getArticleContent: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "get",
                                    url: "https://".concat(baseUrl, "/recent-data/api/v3/Article/Content"),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    params: e
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                postStar: function(e) {
                    return __awaiter(this, void 0, Promise, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]),
                                [4, axiosInstance({
                                    method: "post",
                                    url: "https://".concat(baseUrl, "/api/nc/v3/NoCache/Wallpapers/Star"),
                                    data: e.params,
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return t = n.sent(),
                                errorHandler(t, e.frontendUse),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
        ).call(this, __webpack_require__(72))
    },
    117: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(10),
        n(28);
        function o(e, area) {
            var t = "";
            return e ? (e.forEach((function(e) {
                e.WebPath !== area && e.webPath !== area || (t = e.AccountLang || e.accountLang)
            }
            )),
            t) : t
        }
    },
    168: function(e, t, n) {
        e.exports = {
            errorContainer: "error__errorContainer__Qzd+B",
            rogLogoIcon: "error__rogLogoIcon__mpF0j",
            errorWrapper: "error__errorWrapper__pcbhN",
            errorContent: "error__errorContent__UsBN7",
            errorPatten: "error__errorPatten__HM52v",
            errorSlogan: "error__errorSlogan__Dkrbf",
            errorInfo: "error__errorInfo__oQncd",
            errorReturnLink: "error__errorReturnLink__DGG2q",
            returnIcon: "error__returnIcon__W50SR"
        }
    },
    169: function(e, t, n) {
        e.exports = {
            loadingContainer: "PageLoading__loadingContainer__LnxUq",
            isFullContentLoading: "PageLoading__isFullContentLoading__fRlHp",
            loadingIcon: "PageLoading__loadingIcon__Rr9iJ",
            "rotate-ltr": "PageLoading__rotate-ltr__xkfjM",
            "rotate-rtl": "PageLoading__rotate-rtl__LAdPw",
            isLeave: "PageLoading__isLeave__YZea2",
            fadeinout: "PageLoading__fadeinout__b1hV6"
        }
    },
    170: function(e, t, n) {
        e.exports = {
            dropDownMenuContainer: "headerDropDownMenuList__dropDownMenuContainer__YLTOW",
            dropDownContent: "headerDropDownMenuList__dropDownContent__ST5-y",
            dropDownOList: "headerDropDownMenuList__dropDownOList__fhuH4",
            dropDownOListProduct: "headerDropDownMenuList__dropDownOListProduct__BBZkj",
            listItem: "headerDropDownMenuList__listItem__oI1sA",
            menuLink: "headerDropDownMenuList__menuLink__rP4dY",
            otherMenuList: "headerDropDownMenuList__otherMenuList__PC7GC",
            listCategory: "headerDropDownMenuList__listCategory__fXSm4",
            subDetailLink: "headerDropDownMenuList__subDetailLink__LTgQS",
            headerItemName: "headerDropDownMenuList__headerItemName__4QDPV",
            subDetailLinkItem: "headerDropDownMenuList__subDetailLinkItem__Ua73j",
            subDetailBlock: "headerDropDownMenuList__subDetailBlock__Ig+kU",
            mobileMenuList: "headerDropDownMenuList__mobileMenuList__ViGBt",
            mobileActived: "headerDropDownMenuList__mobileActived__A1Jik",
            show: "headerDropDownMenuList__show__V8x2d",
            dropDownCotent: "headerDropDownMenuList__dropDownCotent__eRTZQ",
            dropDownBack: "headerDropDownMenuList__dropDownBack__ooso9"
        }
    },
    171: function(e, t, n) {
        e.exports = {
            dropDownMenuContainer: "headerMobileDropDownMenuList__dropDownMenuContainer__j-c+y",
            dropDownContent: "headerMobileDropDownMenuList__dropDownContent__R2khZ",
            dropDownOList: "headerMobileDropDownMenuList__dropDownOList__2dFCN",
            dropDownOListProduct: "headerMobileDropDownMenuList__dropDownOListProduct__lD1AA",
            listItem: "headerMobileDropDownMenuList__listItem__HcMbT",
            menuLink: "headerMobileDropDownMenuList__menuLink__Lp44r",
            otherMenuList: "headerMobileDropDownMenuList__otherMenuList__d9v6x",
            listCategory: "headerMobileDropDownMenuList__listCategory__Dqwzs",
            subDetailLink: "headerMobileDropDownMenuList__subDetailLink__wdKCe",
            headerItemName: "headerMobileDropDownMenuList__headerItemName__OKUms",
            subDetailLinkItem: "headerMobileDropDownMenuList__subDetailLinkItem__Yg5mw",
            subDetailBlock: "headerMobileDropDownMenuList__subDetailBlock__8Hwru",
            mobileMenuList: "headerMobileDropDownMenuList__mobileMenuList__JdbNn",
            mobileActived: "headerMobileDropDownMenuList__mobileActived__zLHeT",
            show: "headerMobileDropDownMenuList__show__faezu",
            dropDownCotent: "headerMobileDropDownMenuList__dropDownCotent__e+5b8",
            dropDownBack: "headerMobileDropDownMenuList__dropDownBack__Zd2YE"
        }
    },
    172: function(e, t, n) {
        e.exports = {
            personalWrapper: "headerPersonalBlock__personalWrapper__N2xAS",
            accountButton: "headerPersonalBlock__accountButton__y2X2l",
            isLogin: "headerPersonalBlock__isLogin__zviqO",
            isActivity: "headerPersonalBlock__isActivity__vT9CI",
            isRed: "headerPersonalBlock__isRed__pfks7",
            personalDropDownMenu: "headerPersonalBlock__personalDropDownMenu__2qxFK",
            accountLinkSection: "headerPersonalBlock__accountLinkSection__oPr3f",
            isMenuShow: "headerPersonalBlock__isMenuShow__yyrxX",
            dropDownLink: "headerPersonalBlock__dropDownLink__-s275",
            wishlist: "headerPersonalBlock__wishlist__68ycq",
            lastItem: "headerPersonalBlock__lastItem__IgpHb",
            isLoginStatus: "headerPersonalBlock__isLoginStatus__IzTlz",
            accountInfo: "headerPersonalBlock__accountInfo__U6dZZ",
            accountName: "headerPersonalBlock__accountName__lfMMX",
            accountPoints: "headerPersonalBlock__accountPoints__m2ChJ",
            dropDownBar: "headerPersonalBlock__dropDownBar__kOTGs",
            linkSectionLink: "headerPersonalBlock__linkSectionLink__6GeaP",
            accountIcon: "headerPersonalBlock__accountIcon__9OEDW"
        }
    },
    173: function(e, t, n) {
        e.exports = {
            searchHeaderPanel: "SearchHeaderPanel__searchHeaderPanel__WSEdM",
            panelContainer: "SearchHeaderPanel__panelContainer__ReqkH",
            container: "SearchHeaderPanel__container__2QudB",
            searchInputContainer: "SearchHeaderPanel__searchInputContainer__scpcF",
            fadeIn: "SearchHeaderPanel__fadeIn__SejVW",
            inputWrapper: "SearchHeaderPanel__inputWrapper__4HU1Q",
            searchTyping: "SearchHeaderPanel__searchTyping__XM5Z8",
            searchIcon: "SearchHeaderPanel__searchIcon__DrTZg",
            closeButton: "SearchHeaderPanel__closeButton__7XL2B",
            exploreContainer: "SearchHeaderPanel__exploreContainer__SNbCz",
            exploreResultBlock: "SearchHeaderPanel__exploreResultBlock__gLg9J",
            title: "SearchHeaderPanel__title__wb2c2",
            searchResultItem: "SearchHeaderPanel__searchResultItem__wTTlb",
            searchSuggestedItem: "SearchHeaderPanel__searchSuggestedItem__yHVD2",
            mask: "SearchHeaderPanel__mask__x2kfj"
        }
    },
    174: function(e, t, n) {
        e.exports = {
            redFullButton: "ButtonRed__redFullButton__0lMzl",
            isProductListButton: "ButtonRed__isProductListButton__1rCeF",
            isSpecButton: "ButtonRed__isSpecButton__yraDR",
            isFilterPrice: "ButtonRed__isFilterPrice__-fvAf",
            isProductBarButton: "ButtonRed__isProductBarButton__qIAJB",
            isProductLineStatus: "ButtonRed__isProductLineStatus__yNgyK",
            btnRed: "ButtonRed__btnRed__SXGza",
            maxWidth: "ButtonRed__maxWidth__D1j8R",
            hoverColor: "ButtonRed__hoverColor__0DIt8",
            isFilter: "ButtonRed__isFilter__EzHBw",
            inner: "ButtonRed__inner__U++OE",
            miniCartButton: "ButtonRed__miniCartButton__9xdbF",
            disabled: "ButtonRed__disabled__Q+k5e",
            isFull: "ButtonRed__isFull__6Glcz",
            isPassPortCardDisabled: "ButtonRed__isPassPortCardDisabled__NyMOl",
            isEliteModelButtonDisabled: "ButtonRed__isEliteModelButtonDisabled__+uM2Q",
            isFullWidth: "ButtonRed__isFullWidth__T36mv",
            isShort: "ButtonRed__isShort__sbOeL",
            modelButton: "ButtonRed__modelButton__tDIKt",
            isECCustomize: "ButtonRed__isECCustomize__ockGJ",
            isWTB: "ButtonRed__isWTB__7HuK9",
            isBuy: "ButtonRed__isBuy__gmq8Z",
            isEliteButton: "ButtonRed__isEliteButton__wCkD1",
            isSearchButton: "ButtonRed__isSearchButton__NOBd1",
            storeButton: "ButtonRed__storeButton__KCNOS",
            specStoreButton: "ButtonRed__specStoreButton__crNM+",
            isDownload: "ButtonRed__isDownload__Y0O2W",
            isPassPortCard: "ButtonRed__isPassPortCard__fbx2I",
            isEliteModelButton: "ButtonRed__isEliteModelButton__ryGdS",
            smallFont: "ButtonRed__smallFont__LQtGu"
        }
    },
    175: function(e, t, n) {
        e.exports = {
            bagWrapper: "MiniCart__bagWrapper__gKdgC",
            bagButton: "MiniCart__bagButton__21a47",
            isActivity: "MiniCart__isActivity__Eo-2B",
            isRed: "MiniCart__isRed__EdcuZ",
            bagItemNum: "MiniCart__bagItemNum__tA3yY",
            bagDropdownMenu: "MiniCart__bagDropdownMenu__nOEHD",
            isMenuShow: "MiniCart__isMenuShow__dI1nv",
            closeButton: "MiniCart__closeButton__U43ii",
            bagContent: "MiniCart__bagContent__jGc2x",
            bagTitle: "MiniCart__bagTitle__O5vnH",
            bagItemList: "MiniCart__bagItemList__vpWvx",
            bagItemContent: "MiniCart__bagItemContent__IbYyW",
            bagItemLink: "MiniCart__bagItemLink__xjKzK",
            bagItemImg: "MiniCart__bagItemImg__aPeO8",
            bagItemData: "MiniCart__bagItemData__g5xXL",
            bagItemName: "MiniCart__bagItemName__2RCTP",
            bagItemPlusSaleName: "MiniCart__bagItemPlusSaleName__Hnqdl",
            bagItmInfo: "MiniCart__bagItmInfo__cqGQa",
            bagItemCount: "MiniCart__bagItemCount__2SP2r",
            bagItemPrice: "MiniCart__bagItemPrice__o4JYS",
            moreItemText: "MiniCart__moreItemText__sSasR",
            subTotalText: "MiniCart__subTotalText__HD0AL",
            viewAndEditText: "MiniCart__viewAndEditText__89eD8",
            emptyText: "MiniCart__emptyText__luCEA"
        }
    },
    176: function(e, t, n) {
        e.exports = {
            closeLightBox: "Advertising__closeLightBox__JBDmh",
            AdvertisingActivityWrapper: "Advertising__AdvertisingActivityWrapper__HnaJt",
            AdvertisingActivityContent: "Advertising__AdvertisingActivityContent__u2sHr",
            youtubeContent: "Advertising__youtubeContent__Z5Fuk",
            AdsWrapper: "Advertising__AdsWrapper__ghBXB",
            active: "Advertising__active__ynQY8",
            desktopSize: "Advertising__desktopSize__eCuBD",
            mobileSize: "Advertising__mobileSize__6Cv6l"
        }
    },
    177: function(e, t, n) {
        e.exports = {
            headerWrapper: "Header__headerWrapper__4ipKk",
            isMotherboards: "Header__isMotherboards__Jc8Xn",
            scrolled: "Header__scrolled__dwLDV",
            upscrolled: "Header__upscrolled__V-ogp",
            noSticky: "Header__noSticky__kZaPC",
            headerContainer: "Header__headerContainer__-AktX",
            fixed: "Header__fixed__ucce9",
            header: "Header__header__iNAJ6",
            rogLogo: "Header__rogLogo__LY-pL",
            rogLogoIcon: "Header__rogLogoIcon__SUCq+",
            headerNav: "Header__headerNav__9MLbL",
            headerBurger: "Header__headerBurger__sqASp",
            headerMenuToolBar: "Header__headerMenuToolBar__SrL+j",
            closeButton: "Header__closeButton__jIbDj",
            headerMenuList: "Header__headerMenuList__jpBKd",
            menuList: "Header__menuList__61wq5",
            menuItem: "Header__menuItem__yvKxM",
            active: "Header__active__9kAE-",
            userButton: "Header__userButton__rc8F9",
            iconBlock: "Header__iconBlock__WQh2q",
            asusLogo: "Header__asusLogo__I7sul",
            mobileAsusLogo: "Header__mobileAsusLogo__UzZfj",
            searchButton: "Header__searchButton__NyfWa",
            messageButton: "Header__messageButton__WDPnW",
            unReadMessageNumberIcon: "Header__unReadMessageNumberIcon__+P6kV",
            messageListMobile: "Header__messageListMobile__fh34o",
            userListMobile: "Header__userListMobile__Xz0G0",
            messageListContent: "Header__messageListContent__yI67y",
            isMobileArrow: "Header__isMobileArrow__8hwJn",
            accessibility: "Header__accessibility__Wa+tY",
            smallList: "Header__smallList__oi526",
            smallItem: "Header__smallItem__SO4rZ",
            rogBurger: "Header__rogBurger__di8FM",
            headerMenu: "Header__headerMenu__lncT7",
            close: "Header__close__JB-fV",
            isMobileActived: "Header__isMobileActived__DUdoH",
            noArrow: "Header__noArrow__bv8YA",
            userMobileListTitle: "Header__userMobileListTitle__HY03J",
            accountLinkSection: "Header__accountLinkSection__-4tgi",
            accountInfo: "Header__accountInfo__X2Xvi",
            accountName: "Header__accountName__Y426I",
            accountPoints: "Header__accountPoints__gLMa3",
            messageMobileListTitle: "Header__messageMobileListTitle__vhC1N",
            messageItem: "Header__messageItem__MohAD",
            messageItemContent: "Header__messageItemContent__KG6FH",
            messageItemData: "Header__messageItemData__P4ov8",
            messageItemDate: "Header__messageItemDate__i8AJ9",
            messageItemName: "Header__messageItemName__Zu4Yt",
            messageItemLastShortMsg: "Header__messageItemLastShortMsg__urRZL",
            messageImageContent: "Header__messageImageContent__pLIqR",
            messageUnreadNumber: "Header__messageUnreadNumber__wYdPe",
            messageMoreContent: "Header__messageMoreContent__E+Fvz",
            messageEmpty: "Header__messageEmpty__xeTxU"
        }
    },
    178: function(e, t, n) {
        e.exports = {
            breadcrumbContainer: "Breadcrumb__breadcrumbContainer__1YPg6",
            homeLinkIcon: "Breadcrumb__homeLinkIcon__HXqz1",
            linkFont: "Breadcrumb__linkFont__r2rvL",
            breadcrumbHome: "Breadcrumb__breadcrumbHome__p4M2t"
        }
    },
    179: function(e, t, n) {
        e.exports = {
            footerContainer: "Footer__footerContainer__4paCr",
            footerContent: "Footer__footerContent__8f6dw",
            vnStyle: "Footer__vnStyle__xvR1C",
            footerTopContent: "Footer__footerTopContent__vP++P",
            noBottomBanner: "Footer__noBottomBanner__MW5d9",
            privateContent: "Footer__privateContent__hl0oD",
            siteMap: "Footer__siteMap__NF2ry",
            cnSite: "Footer__cnSite__vr-PO",
            footerLine: "Footer__footerLine__3dhcV",
            legalInfoContent: "Footer__legalInfoContent__BUNpk",
            footerLink: "Footer__footerLink__jWbYC",
            socialLink: "Footer__socialLink__MRz8L",
            socialList: "Footer__socialList__nGDiB",
            isDesktop: "Footer__isDesktop__at9Kk",
            isMobile: "Footer__isMobile__vIGu2",
            socialItem: "Footer__socialItem__sqbj-",
            language: "Footer__language__wc6xe",
            languageIcon: "Footer__languageIcon__7s29R",
            reclamacioneLink: "Footer__reclamacioneLink__CLwsx",
            reclamacione: "Footer__reclamacione__9v7xQ",
            personalContent: "Footer__personalContent__AjxR0",
            copyRightContent: "Footer__copyRightContent__2jo3j",
            termsContent: "Footer__termsContent__lvktr",
            footerBanner: "Footer__footerBanner__AuWBh",
            footerPCMode: "Footer__footerPCMode__Uwsfg",
            footerItemName: "Footer__footerItemName__DEwd0",
            footerItemLink: "Footer__footerItemLink__Qbyko",
            footerLeftBottomContent: "Footer__footerLeftBottomContent__MLbtq",
            footerRegionButton: "Footer__footerRegionButton__GbKJs",
            mobileFollowSocialMediaName: "Footer__mobileFollowSocialMediaName__JuIQk",
            socialMediaIcon: "Footer__socialMediaIcon__x-FOY",
            "sr-only": "Footer__sr-only__HWZ+d"
        }
    },
    180: function(e, t, n) {
        e.exports = {}
    },
    181: function(e, t, n) {
        "use strict";
        (function(e) {
            var o, r = n(9), c = (n(48),
            n(38),
            n(10),
            n(42),
            n(44),
            n(45),
            n(35),
            n(36),
            n(24),
            n(52),
            n(66),
            n(21),
            n(37),
            n(77),
            n(15),
            n(34),
            n(120),
            n(30)), l = n(405), d = n(401), h = n(484), _ = n(86), f = n(485), m = n(486), v = n(6), w = (o = function(e, b) {
                return o = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                o(e, b)
            }
            ,
            function(e, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function t() {
                    this.constructor = e
                }
                o(e, b),
                e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
                new t)
            }
            ), y = function(e, t, n, desc) {
                var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                    l = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)
                        (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
                return c > 3 && l && Object.defineProperty(t, n, l),
                l
            }, P = function(e, t, n, o) {
                return new (n || (n = Promise))((function(r, c) {
                    function l(e) {
                        try {
                            h(o.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }
                    function d(e) {
                        try {
                            h(o.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }
                    function h(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(l, d)
                    }
                    h((o = o.apply(e, t || [])).next())
                }
                ))
            }, I = function(e, body) {
                var t, n, o, g, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                },
                "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }
                ),
                g;
                function c(c) {
                    return function(l) {
                        return function(c) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; g && (g = 0,
                            c[0] && (r = 0)),
                            r; )
                                try {
                                    if (t = 1,
                                    n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, c[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (c = [2 & c[0], o.value]),
                                    c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = c[1],
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = r.trys,
                                        (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            r.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = c;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(c);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    c = body.call(e, r)
                                } catch (e) {
                                    c = [6, e],
                                    n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & c[0])
                                throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, l])
                    }
                }
            }, k = function(t) {
                function n() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isRTL = !1,
                    e.isCN = !1,
                    e.websiteCode = "",
                    e.timer = !1,
                    e.bvLocale = f.a,
                    e.languageCode = m.a,
                    e.closeReminder = !1,
                    e
                }
                return w(n, t),
                n.prototype.head = function() {
                    var t, n, o, r, c, l, d, h, f, m, v, w, y, P, I, k = this.$route.params.area || "global", L = this.$nuxt.$route.fullPath, O = {}, C = {};
                    "/laptops/rog-flow-series/?FilterLevelTagId=1065&items=20392&inStock=0&outStock=0&preOrder=0&all=0&sale=0" !== L && "/laptops/rog-flow/rog-flow-x16-2023-series/" !== L || (C = {
                        rel: "preconnect",
                        href: "https://dev.visualwebsiteoptimizer.com"
                    }),
                    "api-rog.asus.com".indexOf(".cn") > -1 && (k = "cn"),
                    O = "cn" === k ? {
                        rel: "stylesheet",
                        href: "/rog/nuxtStatic/css/fontCN.css"
                    } : {
                        rel: "stylesheet",
                        href: "/rog/nuxtStatic/css/fontHQ.css"
                    },
                    (null === (n = null === (t = null == e ? void 0 : e.env) || void 0 === t ? void 0 : t.SITE) || void 0 === n ? void 0 : n.indexOf("localhost")) > -1 && (O = {
                        rel: "stylesheet",
                        href: "/rog/nuxtStatic/css/fontLocal.css"
                    });
                    var S = this.$route.fullPath
                      , M = {}
                      , A = S.substring(S.indexOf("rog") + 6).split("/")[1];
                    A = A ? "-" + A : "-index",
                    this.$route.name,
                    M = this.$nuxt.nuxt.err && 404 === this.$nuxt.nuxt.err.statusCode || "ErrorPage" === this.$route.name ? {
                        innerHTML: "var mPulsePageGroup = '".concat(k, "-error' "),
                        body: !0
                    } : "EntryPage" === this.$route.name ? {
                        innerHTML: "var mPulsePageGroup = '".concat(k, "-entry' "),
                        body: !0
                    } : {
                        innerHTML: "var mPulsePageGroup = '".concat(this.routeInfo.configValue.mPulsePageGroup, "' "),
                        body: !0
                    };
                    var D = {};
                    this.bvLocale[k] && (D = {
                        async: !0,
                        src: "https://apps.bazaarvoice.com/deployments/asustek/rog/" + ((null === (o = "api-rog.asus.com") ? void 0 : o.includes("stage-")) || (null === (r = "api-rog.asus.com") ? void 0 : r.includes("dev-")) ? "staging/" : "production/") + this.bvLocale[k] + "/bv.js",
                        body: !0
                    });
                    var W = {}
                      , j = {}
                      , x = {}
                      , E = "/rog/nuxtStatic/js/mPulse/global.js";
                    -1 !== _.b.indexOf(k.toLowerCase()) ? this.isRTL = !0 : this.isRTL = !1,
                    "/laptops/rog-flow-series/?FilterLevelTagId=1065&items=20392&inStock=0&outStock=0&preOrder=0&all=0&sale=0" !== L && "/laptops/rog-flow/rog-flow-x16-2023-series/" !== L || (x = {
                        async: !0,
                        src: "https://script.crazyegg.com/pages/scripts/0026/9477.js",
                        body: !1
                    }),
                    "cn" === k ? (E = "/rog/nuxtStatic/js/mPulse/cn.js",
                    W = {
                        type: "text/javascript",
                        innerHTML: 'var _hmt = _hmt || [];\n            (function() {\n            var hm = document.createElement("script");\n            hm.src = "https://hm.baidu.com/hm.js?b4671500ff917b268437ff5be30c0ff0";\n            var s = document.getElementsByTagName("script")[0];\n            s.parentNode.insertBefore(hm, s);\n            })();\n          '
                    }) : ("/laptops/rog-flow-series/?FilterLevelTagId=1065&items=20392&inStock=0&outStock=0&preOrder=0&all=0&sale=0" !== L && "/laptops/rog-flow/rog-flow-x16-2023-series/" !== L || (j = {
                        id: "vwoCode",
                        type: "text/javascript",
                        innerHTML: "window._vwo_code=window._vwo_code || (function() {\n            var account_id=734173,\n            version = 1.5,\n            settings_tolerance=2000,\n            library_tolerance=2500,\n            use_existing_jquery=false,\n            is_spa=1,\n            hide_element='body',\n            hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',\n            /* DO NOT EDIT BELOW THIS LINE */\n            f=false,w=window,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)s?(_vis_opt_exp_d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_d+_combi=(?:d+,?)+s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;w.settings_timer=setTimeout(function(){_vwo_code.finish()},settings_tolerance);var e=d.currentScript,t=d.createElement('style'),i=e&&!e.async?hide_element?hide_element+'{'+hide_element_style+'}':'':code.lA=1,n=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&t.setAttribute('nonce',vwoCodeEl.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));n.appendChild(t);var o=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(o?'&c='+o:''));return settings_timer}};w._vwo_settings_timer = code.init();return code;}());\n          "
                    }),
                    W = {
                        type: "text/javascript",
                        innerHTML: '(function (w, d, s, l, i) {\n          w[l] = w[l] || [];\n          w[l].push({\'gtm.start\': new Date().getTime(), event: \'gtm.js\' });\n          var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n          j.defer = true;\n          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n          f.parentNode.insertBefore(j, f);\n          })(window, document, "script", "dataLayer", "GTM-NJRLM8");\n          '
                    }),
                    I = {
                        type: "text/javascript",
                        innerHTML: 'window.AsusAPIConfig = {\n        system: "rog",\n      };'
                    };
                    var meta = null === (c = this.routeInfo) || void 0 === c ? void 0 : c.metaInfo;
                    return {
                        title: null === (l = meta[0]) || void 0 === l ? void 0 : l.metaTitle,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: null === (d = meta[0]) || void 0 === d ? void 0 : d.description
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: null === (h = meta[1]) || void 0 === h ? void 0 : h.metaTitle
                        }, {
                            hid: "og:type",
                            property: "og:type",
                            content: "website"
                        }, {
                            hid: "og:site_name",
                            property: "og:site_name",
                            content: "@ROG"
                        }, {
                            hid: "og:description",
                            property: "og:description",
                            content: null === (f = meta[0]) || void 0 === f ? void 0 : f.description
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: null === (m = this.routeInfo) || void 0 === m ? void 0 : m.fullPath
                        }, {
                            hid: "og:image",
                            property: "og:image",
                            content: null === (v = meta[0]) || void 0 === v ? void 0 : v.mediaPC
                        }, {
                            hid: "twitter:title",
                            property: "twitter:title",
                            content: null === (w = meta[2]) || void 0 === w ? void 0 : w.metaTitle
                        }, {
                            hid: "twitter:site",
                            property: "twitter:site",
                            content: "@ROG"
                        }, {
                            hid: "twitter:description",
                            property: "twitter:description",
                            content: null === (y = meta[2]) || void 0 === y ? void 0 : y.description
                        }, {
                            hid: "twitter:card",
                            property: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            hid: "twitter:image",
                            property: "twitter:image",
                            content: null === (P = meta[2]) || void 0 === P ? void 0 : P.mediaPC
                        }],
                        htmlAttrs: {
                            dir: this.isRTL ? "rtl" : "ltr",
                            lang: this.languageCode[k]
                        },
                        link: [O, {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "/rog/nuxtStatic/css/chat.css"
                        }, {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "/rog/nuxtStatic/css/rating.css"
                        }, {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "/dist/overview/css/review.css"
                        }, C],
                        script: [I, M, {
                            src: E,
                            defer: !0,
                            body: !0
                        }, W, D, j, x]
                    }
                }
                ,
                n.prototype.setRTLGetter = function() {
                    this.isRTL = this.RTLGetter
                }
                ,
                Object.defineProperty(n.prototype, "lang", {
                    get: function() {
                        var e, t, n, o;
                        return this.$route && this.$route.params.area ? null === (n = null === (t = null === (e = this.$route) || void 0 === e ? void 0 : e.params) || void 0 === t ? void 0 : t.area) || void 0 === n ? void 0 : n.toLowerCase() : this.$route && this.$route.fullPath ? null === (o = this.$route) || void 0 === o ? void 0 : o.fullPath.split("/")[1].toLowerCase() : void 0
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "isErrorPage", {
                    get: function() {
                        var e;
                        if (this.$route && this.$route.name)
                            return "ErrorPage" === (null === (e = this.$route) || void 0 === e ? void 0 : e.name)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "dirType", {
                    get: function() {
                        if (this.$route && this.$route.params.area)
                            switch (this.$route.params.area.toLowerCase()) {
                            case "il":
                            case "me-ar":
                            case "sa-ar":
                            case "eg":
                                return "rtl";
                            default:
                                return "ltr"
                            }
                        if (this.$route && this.$route.fullPath)
                            switch (this.$route.fullPath.split("/")[1].toLowerCase()) {
                            case "il":
                            case "me-ar":
                            case "sa-ar":
                            case "eg":
                                return "rtl";
                            default:
                                return "ltr"
                            }
                        return "ltr"
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                n.prototype.created = function() {
                    var e, t, n = this;
                    this.websiteCode = Object(h.a)(this.$route.params.area),
                    this.getWebsiteCode({
                        route: this.$route
                    }),
                    this.isRTL = this.RTLGetter,
                    null === this.$route.name && (this.websiteCode = this.$route.fullPath.split("/")[1].toLowerCase());
                    var o = null === (t = null === (e = this.routeInfo) || void 0 === e ? void 0 : e.configValue) || void 0 === t ? void 0 : t.componentsPageKey;
                    window.AsusAPIConfig = {
                        system: "rog",
                        websitePath: n.websiteCode,
                        websiteId: n.mappingWebsiteId,
                        reminderElement: document.body,
                        pageKey: o,
                        reminder: function(e) {
                            return P(this, void 0, void 0, (function() {
                                return I(this, (function(t) {
                                    return [2, {
                                        reminderURL: n.changeWebsiteCode(e)
                                    }]
                                }
                                ))
                            }
                            ))
                        }
                    };
                    var r = document.createElement("script");
                    r.type = "text/javascript",
                    r.src = "https://dlcdnimgs.asus.com/vendor/location-reminder/js/locationreminder.min.js",
                    "cn" === this.websiteCode && (r.src = "https://www.asus.com.cn/vendor/location-reminder/js/locationreminder.min.js"),
                    document.body.appendChild(r);
                    var c = document.createElement("script");
                    c.type = "text/javascript",
                    c.src = "https://dlcdnimgs.asus.com/vendor/promotion-banner/js/promotionbanner.min.js",
                    "cn" === this.websiteCode && (c.src = "https://www.asus.com.cn/vendor/promotion-banner/js/promotionbanner.min.js"),
                    document.body.appendChild(c),
                    document.querySelector("body").classList.add(this.websiteCode),
                    window.innerWidth <= 1024 && (this.closeReminder = !0)
                }
                ,
                n.prototype.beforeMount = function() {
                    c.Vue.config.errorHandler = function(e, t, n) {
                        console.error("".concat(n, ": ").concat(e.toString()))
                    }
                    ,
                    sessionStorage.getItem("locationReminder") && (this.closeReminder = !0,
                    Object(v.d)("locationReminder", "true", "1"))
                }
                ,
                n.prototype.mounted = function() {
                    var e = this
                      , t = setInterval((function() {
                        document.querySelector("body").classList.contains("hide-locationReminder-skeleton") && (e.closeReminder = !0,
                        clearInterval(t),
                        Object(v.d)("locationReminder", "true", "1"))
                    }
                    ), 0);
                    this.$nextTick((function() {}
                    )),
                    window.addEventListener("beforeunload", (function(e) {
                        e.target.domain !== window.location.hostname && Object(v.a)("locationReminder")
                    }
                    ))
                }
                ,
                n.prototype.changeWebsiteCode = function(e) {
                    return "cn" === e ? "/" === window.location.pathname ? "https://rog.asus.com.cn/" : "https://rog.asus.com.cn" + ("global" !== this.websiteCode ? window.location.pathname.replace("/".concat(this.websiteCode, "/"), "/") : decodeURI(window.location.pathname)) + decodeURI(window.location.search) : "global" === this.websiteCode || "cn" === this.websiteCode ? "https://rog.asus.com/" + e + decodeURI(window.location.pathname) + decodeURI(window.location.search) : window.location.href.replace("/".concat(this.websiteCode, "/"), "/".concat(e, "/"))
                }
                ,
                y([Object(c.Getter)("routeInfo")], n.prototype, "routeInfo", void 0),
                y([Object(c.Getter)("RTLGetter")], n.prototype, "RTLGetter", void 0),
                y([Object(c.Getter)("websiteCodeGetter")], n.prototype, "websiteCodeGetter", void 0),
                y([Object(c.Getter)("mappingWebsiteId")], n.prototype, "mappingWebsiteId", void 0),
                y([Object(c.Action)("getWebsiteCode")], n.prototype, "getWebsiteCode", void 0),
                y([Object(c.Watch)("RTLGetter", {
                    immediate: !0
                })], n.prototype, "setRTLGetter", null),
                n = y([Object(c.Component)({
                    components: {
                        Header: l.a,
                        Footer: d.a
                    }
                })], n)
            }(c.Vue);
            t.a = k
        }
        ).call(this, n(72))
    },
    198: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10), core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__), core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42), core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__), core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44), core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__), core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45), core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__), core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35), core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__), core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36), core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__), core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52), core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__), core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66), core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__), axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8), axios__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__), https__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87), https__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_9__), __awaiter = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }, __generator = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }, _a, isCN = !!(null === (_a = "api-rog.asus.com") || void 0 === _a ? void 0 : _a.includes(".cn")), baseUrl = "api-rog.asus.com", baseECUrl = "estorestage.asus.com", axiosInstance = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({
            httpsAgent: new https__WEBPACK_IMPORTED_MODULE_9___default.a.Agent({
                rejectUnauthorized: !1
            }),
            timeout: 15e3
        });
        axiosInstance.interceptors.response.use((function(res) {
            try {
                if ("undefined" != typeof window && "stage-api-rog.asus.com" !== baseUrl && "stage-api-rog.asus.com.cn" !== baseUrl && "api-rog.asus.com " !== baseUrl && "api-rog.asus.com.cn" !== baseUrl) {
                    var NDATA = eval('window["__NUXT__"].state.Config');
                    NDATA.APIList += "," + res.request.responseURL
                }
            } catch (e) {}
            return res
        }
        )),
        __webpack_exports__.a = {
            getModelPrice: function(param) {
                return __awaiter(this, void 0, Promise, (function() {
                    return __generator(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, axiosInstance({
                                method: "get",
                                url: "https://".concat(baseUrl, "/api/nc/v3/NoCache/ModelPrice"),
                                params: {
                                    WebsiteId: param.WebsiteId,
                                    LevelTagId: param.LevelTagId,
                                    token: param.token,
                                    GroupId: param.GroupId,
                                    SimplePrice: param.SimplePrice
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getModelListPrice: function(param) {
                return __awaiter(this, void 0, Promise, (function() {
                    return __generator(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, axiosInstance({
                                method: "post",
                                url: "https://".concat(baseUrl, "/api/nc/v3/NoCache/ModelListPrice"),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                data: {
                                    WebsiteId: param.WebsiteId,
                                    ProductId: param.ProductId,
                                    SimplePrice: param.SimplePrice,
                                    GroupId: param.GroupId
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSkuPrice: function(param) {
                return __awaiter(this, void 0, Promise, (function() {
                    return __generator(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, axiosInstance({
                                method: "get",
                                url: "https://".concat(baseUrl, "/api/nc/v3/NoCache/SkuPrice"),
                                params: {
                                    WebsiteId: param.WebsiteId,
                                    SkuWebpathName: param.SkuWebpathName,
                                    SimplePrice: param.SimplePrice,
                                    GroupId: param.GroupId
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            postSkuPrice: function(param) {
                return __awaiter(this, void 0, Promise, (function() {
                    return __generator(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, axiosInstance({
                                method: "post",
                                url: "https://".concat(baseUrl, "/api/nc/v3/NoCache/SkuPrice"),
                                data: {
                                    WebsiteId: param.WebsiteId,
                                    SkuWebpathName: param.SkuWebpathName,
                                    SimplePrice: param.SimplePrice,
                                    GroupId: param.GroupId
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
        }
    },
    33: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        ));
        n(10);
        var o = ["dev-rog.asus.com", "stage-rog.asus.com", "rogmars.asus.com", "rogmars.asus.com:8034", "rog.asus.com.cn", "rog.asus.com", "localhost", "rog-bacchus.asus.com", "www.asus.com", "nomos.asus.com", "sowoverload.asus.com", "localhost:8000"]
          , r = ["rogmars.asus.com", "rog.asus.com", "stage-rog.asus.com", "rog.asus.com.cn"]
          , c = function() {
            try {
                if (window)
                    return encodeURI(window.location.hostname)
            } catch (e) {
                return ""
            }
        }
          , l = function() {
            var e = !1
              , t = c();
            return r.forEach((function(n) {
                n === t && (e = !0)
            }
            )),
            e
        };
        t.a = function() {
            var e = !1
              , t = c();
            return o.forEach((function(n) {
                n === t && (e = !0)
            }
            )),
            e
        }
    },
    378: function(e, t, n) {
        "use strict";
        n.r(t);
        var o, r = n(9), c = (n(48),
        n(38),
        n(10),
        n(3)), l = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), d = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }, h = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return l(t, e),
            t = d([c.Component], t)
        }(c.Vue), _ = h, f = n(20), component = Object(f.a)(_, (function() {
            var e = this._self._c;
            this._self._setupProxy;
            return e("div", {
                staticClass: "product-page"
            }, [e("router-view")], 1)
        }
        ), [], !1, null, null, null);
        t.default = component.exports
    },
    381: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(10),
        n(28),
        n(70),
        n(51);
        function o(e, t) {
            var n = null;
            return e.forEach((function(element) {
                Number(element.id) === Number(t) && (n = element.filter)
            }
            )),
            n
        }
    },
    382: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(10),
        n(37),
        n(28);
        function o(e, t) {
            var n = t.split(",")
              , o = e.toString()
              , r = !1;
            return n.forEach((function(e) {
                e === o && (r = !0)
            }
            )),
            r
        }
    },
    383: function(e, t, n) {
        "use strict";
        var o = n(168)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    384: function(e, t, n) {
        "use strict";
        var o = n(169)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    385: function(e, t, n) {
        "use strict";
        var o = n(170)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    386: function(e, t, n) {
        "use strict";
        var o = n(171)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    387: function(e, t, n) {
        "use strict";
        var o = n(172)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    388: function(e, t, n) {
        "use strict";
        var o = n(173)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    389: function(e, t, n) {
        "use strict";
        var o = n(174)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    390: function(e, t, n) {
        "use strict";
        var o = n(175)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    391: function(e, t, n) {
        "use strict";
        var o = n(176)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    392: function(e, t, n) {
        "use strict";
        var o = n(177)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    393: function(e, t, n) {
        "use strict";
        var o = n(178)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    394: function(e, t, n) {
        "use strict";
        var o = n(179)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    395: function(e, t, n) {
        "use strict";
        var o = n(180)
          , r = n.n(o);
        n.d(t, "default", (function() {
            return r.a
        }
        ))
    },
    396: function(e, t, n) {
        "use strict";
        var o = n(7)
          , r = n(143)
          , c = n.n(r);
        o.default.use(c.a)
    },
    398: function(e, t, n) {
        "use strict";
        var o, r = n(2), c = (n(24),
        n(9)), l = (n(48),
        n(38),
        n(10),
        n(49),
        n(21),
        n(3)), d = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), h = function(e, t, n, desc) {
            var o, r = arguments.length, l = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(t, n, l) : o(t, n)) || l);
            return r > 3 && l && Object.defineProperty(t, n, l),
            l
        }, _ = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return d(t, e),
            Object.defineProperty(t.prototype, "buttonLink", {
                get: function() {
                    return this.buttonData.link ? this.buttonData.link : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "linkTarget", {
                get: function() {
                    return this.isDownload ? "_blank" : "_self"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "goToSpecUrl", {
                get: function() {
                    if (this.isProductLineStatus)
                        return "/".concat(this.productLink, "spec/");
                    var e = ""
                      , area = this.$route.params.area ? this.$route.params.area : ""
                      , t = area ? "/".concat(area) : "";
                    return this.$route.params.modelPath ? e = "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.modelPath, "-model/spec/") : this.$route.params.noModelPath ? e = this.$route.params.groupSeries && this.$route.params.productSeries ? "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.groupSeries, "/").concat(this.$route.params.productSeries, "/").concat(this.$route.params.noModelPath, "/spec/") : this.$route.params.groupSeries ? "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.groupSeries, "/").concat(this.$route.params.noModelPath, "/spec/") : this.$route.params.productSeries ? "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.productSeries, "/").concat(this.$route.params.noModelPath, "/spec/") : "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.noModelPath, "/spec/") : this.$route.params.seriesPath && (e = "".concat(t, "/").concat(this.$route.params.productLine, "/").concat(this.$route.params.groupSeries, "/").concat(this.$route.params.seriesPath, "-series/spec/")),
                    "" !== e ? e : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.seriesPage = function() {
                return this.$route.params.series ? "/".concat(this.$route.params.series, "-series") : ""
            }
            ,
            t.prototype.callEvent = function(e) {
                var t = this.buttonData.disabled ? "disabled" : "default";
                if (this.buttonData.isExternalLink)
                    -1 === this.buttonLink.indexOf(".asus.com") ? (e.preventDefault(),
                    this.$emit("click", t)) : this.isDownload && window.open(this.buttonLink, "_blank");
                else if (!this.isDownload && this.buttonLink) {
                    if (this.isWhereToBuy && window.open(this.buttonLink, "_blank"),
                    this.isGoToSpec)
                        return this.$router.push({
                            path: "".concat(this.goToSpecUrl)
                        }),
                        void this.$emit("click", t);
                    if (!this.isGoToSpec && this.isModel)
                        return this.$emit("click", t),
                        void window.location.assign(this.buttonLink);
                    if (this.isStore && this.isModel)
                        return void this.$emit("click", t);
                    this.isStore && this.$emit("gaTrigger"),
                    this.isSpecStore && this.$emit("gaTrigger"),
                    !this.isRogSite || this.isStore || this.isSpecStore || this.$router.push({
                        path: this.buttonLink
                    }),
                    this.isRogSite || this.isWhereToBuy || (this.isNewTab ? window.open(this.buttonLink) : (this.isGA && this.gaHandler(),
                    window.location.assign(this.buttonLink)))
                } else
                    this.isDownload && window.open(this.buttonLink, "_blank");
                this.$emit("click", t)
            }
            ,
            t.prototype.gaHandler = function() {
                window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-mini_cart-L2",
                    event_action_DL: "clicked",
                    event_label_DL: this.buttonData.name,
                    event_value_DL: "0"
                })
            }
            ,
            h([Object(l.Prop)()], t.prototype, "buttonData", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isFullWidthStatus", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isMaxWidth", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isFilter", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isShort", void 0),
            h([Object(l.Prop)({
                default: !0
            })], t.prototype, "isRogSite", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isModel", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isNewTab", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isDownload", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isWhereToBuy", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isStore", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isSpecStore", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isBuy", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isMiniCartButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isEliteButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isSearchButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isGA", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isSpecButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isGoToSpec", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isProductListButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isPassPortCard", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isEliteModelButton", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isFilterPrice", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isECCustomize", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "isProductLineStatus", void 0),
            h([Object(l.Prop)({
                default: ""
            })], t.prototype, "productLink", void 0),
            h([Object(l.Prop)({
                default: !1
            })], t.prototype, "noLink", void 0),
            t = h([Object(l.Component)({})], t)
        }(l.Vue), f = _, m = n(389), v = n(20);
        var component = Object(v.a)(f, (function() {
            var e, t, n, o = this, c = o._self._c;
            o._self._setupProxy;
            return c("div", {
                class: [o.$style.redFullButton, (e = {},
                Object(r.a)(e, o.$style.isSpecButton, o.isSpecButton),
                Object(r.a)(e, o.$style.isProductListButton, o.isProductListButton),
                Object(r.a)(e, o.$style.isFilterPrice, o.isFilterPrice),
                Object(r.a)(e, o.$style.isProductBarButton, o.isModel),
                Object(r.a)(e, o.$style.isProductLineStatus, o.isProductLineStatus),
                e)]
            }, ["" === o.buttonLink || o.noLink ? [c("div", {
                staticClass: "btn",
                class: [o.$style.btnRed, o.$style.isFull, (n = {},
                Object(r.a)(n, o.$style.disabled, o.buttonData.disabled),
                Object(r.a)(n, o.$style.isFullWidth, o.isFullWidthStatus),
                Object(r.a)(n, o.$style.maxWidth, o.isMaxWidth),
                Object(r.a)(n, o.$style.isFilter, o.isFilter),
                Object(r.a)(n, o.$style.isShort, o.isShort),
                Object(r.a)(n, o.$style.modelButton, o.isModel),
                Object(r.a)(n, o.$style.isWTB, o.isWhereToBuy),
                Object(r.a)(n, o.$style.storeButton, o.isStore),
                Object(r.a)(n, o.$style.specStoreButton, o.isSpecStore),
                Object(r.a)(n, o.$style.miniCartButton, o.isMiniCartButton),
                Object(r.a)(n, o.$style.isEliteButton, o.isEliteButton),
                Object(r.a)(n, o.$style.isSearchButton, o.isSearchButton),
                Object(r.a)(n, o.$style.isSpecButton, o.isSpecButton),
                Object(r.a)(n, o.$style.isGoToSpec, o.isGoToSpec),
                Object(r.a)(n, o.$style.isPassPortCard, o.isPassPortCard),
                Object(r.a)(n, o.$style.isPassPortCardDisabled, o.buttonData.disabled),
                Object(r.a)(n, o.$style.isEliteModelButton, o.isEliteModelButton),
                Object(r.a)(n, o.$style.isEliteModelButtonDisabled, o.buttonData.disabled),
                Object(r.a)(n, o.$style.isFilterPrice, o.isFilterPrice),
                Object(r.a)(n, o.$style.isECCustomize, o.isECCustomize),
                Object(r.a)(n, o.$style.isProductLineStatus, o.isProductLineStatus),
                n)],
                attrs: {
                    role: o.buttonData.role ? o.buttonData.role : "button",
                    "aria-label": o.buttonData.ariaLabel,
                    tabindex: o.buttonData.disabled ? -1 : 0
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && o._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : o.callEvent.apply(null, arguments)
                    },
                    click: o.callEvent
                }
            }, [c("div", {
                staticClass: "buttonClick",
                class: o.$style.inner
            }, [c("span", {
                staticClass: "buttonClick"
            }, [o.buttonData.isVideo ? c("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    "aria-hidden": "true",
                    alt: "icon-triangle-right",
                    role: "presentation",
                    focusable: "false"
                }
            }, [c("path", {
                attrs: {
                    d: "M26.7 15.24L6 3v26l20.7-12.23L28 16l-1.3-.76z"
                }
            })]) : o._e(), o._v(" "), o.buttonData.isExternalLink ? c("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "svg-inline": "",
                    "aria-hidden": "true",
                    alt: "icon-external-link",
                    role: "presentation",
                    focusable: "false"
                }
            }, [c("path", {
                attrs: {
                    d: "M16 23.9H1c-.5 0-.9-.4-.9-.9V8c0-.5.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9H1.9v13.3h13.3V15c0-.5.4-.9.9-.9s.9.4.9.9v8c-.1.5-.5.9-1 .9z"
                }
            }), c("path", {
                attrs: {
                    d: "M8 16.9c-.2 0-.4-.1-.6-.3-.3-.3-.3-.9 0-1.2l11-11c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-11 11c-.2.2-.4.3-.6.3z"
                }
            }), c("path", {
                attrs: {
                    d: "M19 11.9c-.5 0-.9-.4-.9-.9V5.9H13c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h6c.5 0 .9.4.9.9v6c0 .5-.4.9-.9.9z"
                }
            })]) : o._e(), o._v("\n          " + o._s(o.buttonData.name) + "\n        ")])]), o._v(" "), c("div", {
                staticClass: "buttonClick",
                class: o.$style.hoverColor
            })])] : [c("a", {
                staticClass: "btn",
                class: [o.$style.btnRed, o.$style.isFull, (t = {},
                Object(r.a)(t, o.$style.disabled, o.buttonData.disabled),
                Object(r.a)(t, o.$style.isFullWidth, o.isFullWidthStatus),
                Object(r.a)(t, o.$style.maxWidth, o.isMaxWidth),
                Object(r.a)(t, o.$style.isFilter, o.isFilter),
                Object(r.a)(t, o.$style.isShort, o.isShort),
                Object(r.a)(t, o.$style.modelButton, o.isModel),
                Object(r.a)(t, o.$style.isWTB, o.isWhereToBuy),
                Object(r.a)(t, o.$style.storeButton, o.isStore),
                Object(r.a)(t, o.$style.specStoreButton, o.isSpecStore),
                Object(r.a)(t, o.$style.miniCartButton, o.isMiniCartButton),
                Object(r.a)(t, o.$style.isEliteButton, o.isEliteButton),
                Object(r.a)(t, o.$style.isSearchButton, o.isSearchButton),
                Object(r.a)(t, o.$style.isSpecButton, o.isSpecButton),
                Object(r.a)(t, o.$style.isGoToSpec, o.isGoToSpec),
                Object(r.a)(t, o.$style.isDownload, o.isDownload),
                Object(r.a)(t, o.$style.isPassPortCard, o.isPassPortCard),
                Object(r.a)(t, o.$style.isFilterPrice, o.isFilterPrice),
                Object(r.a)(t, o.$style.isECCustomize, o.isECCustomize),
                Object(r.a)(t, o.$style.isProductLineStatus, o.isProductLineStatus),
                t)],
                attrs: {
                    tabindex: o.buttonData.disabled ? -1 : 0,
                    href: o.isGoToSpec ? "".concat(o.goToSpecUrl) : o.buttonLink,
                    target: o.linkTarget
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        o.callEvent.apply(null, arguments)
                    }
                }
            }, [c("div", {
                class: o.$style.inner
            }, [o.buttonData && o.buttonData.name ? c("span", {
                staticClass: "buttonName",
                class: [Object(r.a)({}, o.$style.smallFont, o.buttonData.name.length > 10)]
            }, [o.buttonData.isVideo ? c("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    "aria-hidden": "true",
                    alt: "icon-triangle-right",
                    role: "presentation",
                    focusable: "false"
                }
            }, [c("path", {
                attrs: {
                    d: "M26.7 15.24L6 3v26l20.7-12.23L28 16l-1.3-.76z"
                }
            })]) : o._e(), o._v("\n          " + o._s(o.buttonData.name) + "\n          "), o.buttonData.isExternalLink ? c("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "svg-inline": "",
                    "aria-hidden": "true",
                    alt: "icon-external-link",
                    role: "presentation",
                    focusable: "false"
                }
            }, [c("path", {
                attrs: {
                    d: "M16 23.9H1c-.5 0-.9-.4-.9-.9V8c0-.5.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9H1.9v13.3h13.3V15c0-.5.4-.9.9-.9s.9.4.9.9v8c-.1.5-.5.9-1 .9z"
                }
            }), c("path", {
                attrs: {
                    d: "M8 16.9c-.2 0-.4-.1-.6-.3-.3-.3-.3-.9 0-1.2l11-11c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-11 11c-.2.2-.4.3-.6.3z"
                }
            }), c("path", {
                attrs: {
                    d: "M19 11.9c-.5 0-.9-.4-.9-.9V5.9H13c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h6c.5 0 .9.4.9.9v6c0 .5-.4.9-.9.9z"
                }
            })]) : o._e()]) : o._e()]), o._v(" "), c("div", {
                class: o.$style.hoverColor
            })])]], 2)
        }
        ), [], !1, (function(e) {
            this.$style = m.default.locals || m.default
        }
        ), null, null);
        t.a = component.exports
    },
    399: function(e, t, n) {
        "use strict";
        var o, r = n(9), c = (n(48),
        n(38),
        n(10),
        n(52),
        n(66),
        n(7)), l = n(3), d = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), h = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }, _ = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return d(t, e),
            t.prototype.gaDataLayerPush = function(data) {
                try {
                    if ("data_layer_page_level_SPA" === data.event && (window.countOfDataLayerPageLevelSPA = window.countOfDataLayerPageLevelSPA + 1,
                    1 === window.countOfDataLayerPageLevelSPA))
                        return;
                    window.location.hostname.includes(".cn") && "cn" === this.$route.params.area || window.dataLayer.push(data)
                } catch (e) {}
            }
            ,
            t.prototype.gaHmtPush = function(data) {
                var e;
                try {
                    ((null === (e = "api-rog.asus.com") ? void 0 : e.includes(".cn")) || "cn" === this.$route.params.area) && window._hmt.push(data)
                } catch (e) {}
            }
            ,
            t = h([Object(l.Component)({})], t)
        }(c.default);
        t.a = _
    },
    401: function(e, t, n) {
        "use strict";
        var o, r = n(2), c = (n(49),
        n(24),
        n(21),
        n(9)), l = (n(48),
        n(38),
        n(10),
        n(40),
        n(65),
        n(15),
        n(120),
        n(34),
        n(77),
        n(89),
        n(37),
        n(104),
        n(3)), d = n(5), h = n(8), _ = n.n(h), f = n(71), m = n(33), v = n(73), w = n(0), y = n(6), P = n(406), I = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), k = function(e, t, n, desc) {
            var o, r = arguments.length, l = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(t, n, l) : o(t, n)) || l);
            return r > 3 && l && Object.defineProperty(t, n, l),
            l
        }, L = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rogFooterMode = "pc",
                t.activeBottomBanner = "",
                t.WebsiteInfoObj = new v.a,
                t.exportWebsiteID = 1,
                t.exportWebsitePath = "global",
                t.isAccount = !1,
                t
            }
            return I(t, e),
            Object.defineProperty(t.prototype, "fullPath", {
                get: function() {
                    return Object.keys(this.routeInfo).length > 0 ? this.routeInfo.fullPath ? this.routeInfo.fullPath : null : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isHome", {
                get: function() {
                    var e;
                    return "HomePage" === (null === (e = this.$route) || void 0 === e ? void 0 : e.name)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isProductHome", {
                get: function() {
                    var e;
                    return "ProductLinePage" === (null === (e = this.$route) || void 0 === e ? void 0 : e.name)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    var e = "";
                    return Object.keys(this.routeInfo).length > 0 ? (this.routeInfo.websitePath,
                    e = this.routeInfo.websitePath) : window && window.AsusAPIConfig ? (e = window.AsusAPIConfig.websitePath,
                    this.isAccount = window.AsusAPIConfig && window.AsusAPIConfig.simplifyFooter || !1) : e = this.exportWebsitePath,
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pageNameType", {
                get: function() {
                    var e, t;
                    return !!(null === (t = null === (e = this.$route) || void 0 === e ? void 0 : e.meta) || void 0 === t ? void 0 : t.homePage)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dirtype", {
                get: function() {
                    if (!this.$route)
                        if (this.exportWebsitePath)
                            switch (this.exportWebsitePath) {
                            case "il":
                            case "me-ar":
                            case "sa-ar":
                            case "eg":
                                return "rtl";
                            default:
                                return "ltr"
                            }
                        else
                            switch (this.routeInfo.websitePath,
                            this.routeInfo.websitePath) {
                            case "il":
                            case "me-ar":
                            case "sa-ar":
                            case "eg":
                                return "rtl";
                            default:
                                return "ltr"
                            }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "rogCategoryStatus", {
                get: function() {
                    return !!(this.footerApi && Object.keys(this.footerApi.termsOfUseData).length > 0)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isPCMode", {
                get: function() {
                    return "pc" === this.rogFooterMode && "" !== this.activeBottomBanner && this.isHome && !this.isAccount
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isShowBottomBanner", {
                get: function() {
                    return Object.keys(this.bottomBanner).length > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "spotLightStatus", {
                get: function() {
                    return Object.keys(this.getSpotLight).length > 0 && Object.keys(this.getSpotLight[0].data).length > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.listenDeviceMode = function() {
                var e;
                (null === (e = this.footerApi) || void 0 === e ? void 0 : e.logo) && ("pc" === this.rogFooterMode ? this.activeBottomBanner = this.footerApi.logo : this.activeBottomBanner = "")
            }
            ,
            t.prototype.backgroundHander = function(e) {
                return e ? "background-image:url(".concat(this.activeBottomBanner, ");background-size:auto;") : ""
            }
            ,
            t.prototype.imgHandler = function(e) {
                return e ? "".concat(this.activeBottomBanner) : ""
            }
            ,
            t.prototype.footerRegionClick = function(e) {
                window.location.host.indexOf("account") > -1 ? window.location.host.indexOf("dev-account") > -1 || window.location.host.indexOf("test-account") > -1 ? ("global" === window.AsusAPIConfig.websitePath ? Object(y.d)("rog_account", window.location.pathname.slice(1) + window.location.search, "") : Object(y.d)("rog_account", window.location.pathname.replace("/".concat(window.AsusAPIConfig.websitePath, "/"), "") + window.location.search, ""),
                window.location.href = "https://rogmars.asus.com/accountentry/") : ("global" === window.AsusAPIConfig.websitePath ? Object(y.d)("rog_account", window.location.pathname.slice(1) + window.location.search, "") : Object(y.d)("rog_account", window.location.pathname.replace("/".concat(window.AsusAPIConfig.websitePath, "/"), "") + window.location.search, ""),
                window.location.href = "https://rog.asus.com/accountentry/") : this.openUrl(e.link, e.linkTarget)
            }
            ,
            t.prototype.openSocialMediaLink = function(e) {
                this.gaDataLayer(e.name, "buttons"),
                this.openUrl(e.link, e.linkTarget)
            }
            ,
            t.prototype.siteMapListClick = function(e) {
                this.gaDataLayer(e.name, "internal-links"),
                this.openUrl(e.link, e.linkTarget)
            }
            ,
            t.prototype.categoryClick = function(e) {
                this.openUrl(e.link, null)
            }
            ,
            t.prototype.bindingSwitchDevice = function() {
                var e = this;
                try {
                    "undefined" != typeof window && (this.switchDeviceMode(),
                    window.addEventListener("resize", (function() {
                        e.switchDeviceMode()
                    }
                    ), !1))
                } catch (e) {
                    console.error(e)
                }
            }
            ,
            t.prototype.chkFooterVal = function(e) {
                return Object.keys(e).length > 0 && (this.bindingSwitchDevice(),
                !0)
            }
            ,
            t.prototype.openUrl = function(e, t) {
                window && e && (t ? window.open(e, t) : window.location.href = encodeURI(e))
            }
            ,
            t.prototype.switchDeviceMode = function() {
                Object(f.a)().width > 768 ? this.rogFooterMode = "pc" : this.rogFooterMode = "mobile"
            }
            ,
            t.prototype.getUrlOrigin = function() {
                return Object(m.a)() ? encodeURI(window.location.origin) : "https://rog.asus.com"
            }
            ,
            t.prototype.reGetFooterAPI = function() {
                this.getFooterAPI({
                    WebsiteId: this.mappingWebsiteId
                })
            }
            ,
            t.prototype.getExportFooterAPI = function() {
                var e = this
                  , t = this.$root ? this.$root.$data : null
                  , n = (t.websitePath ? t.websitePath : this.exportWebsitePath,
                "")
                  , o = encodeURI(window.location.host)
                  , r = o.replace(".asus.com", "");
                "rog.asus.com.cn" === window.location.host ? (n = encodeURI(window.location.host),
                _()({
                    method: "get",
                    url: "https://api-rog.asus.com.cn/recent-data/api/v3/Common/Footer?WebsiteId=".concat(this.exportWebsiteID, "&systemCode=").concat(r)
                }).then((function(t) {
                    e.rogExportFooter(t.data)
                }
                )).catch((function(e) {
                    console.error(e)
                }
                ))) : (n = "api-rog.asus.com",
                o.indexOf("dev") > -1 ? n = "dev-api-rog.asus.com" : o.indexOf("stage") > -1 ? n = "stage-api-rog.asus.com" : o.indexOf("rogmars") > -1 && (n = "api-rogmars.asus.com"),
                _()({
                    method: "get",
                    url: "https://".concat(n, "/recent-data/api/v3/Common/Footer?WebsiteId=").concat(this.exportWebsiteID, "&systemCode=").concat(r)
                }).then((function(t) {
                    e.rogExportFooter(t.data),
                    window.AsusAPIConfig.getEcObject = {
                        ecDomain: t.data.result.ecDomain,
                        tagLang: t.data.result.tagLang,
                        storeviewCode: t.data.result.storeviewCode,
                        memberDiscount: t.data.result.memberDiscount
                    }
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )))
            }
            ,
            t.prototype.reGetCookieValues = function(e) {
                var t = this;
                this.WebsiteInfoObj.getRouteInfoAPI().then((function(n) {
                    if (200 === n.data.status && n.data.result) {
                        var o = n.data.result;
                        t.getUrlOrigin(),
                        o.WebPathName;
                        "function" == typeof e && e()
                    }
                }
                )).catch((function(e) {
                    console.error(e)
                }
                ))
            }
            ,
            t.prototype.getTerm = function() {}
            ,
            t.prototype.mounted = function() {
                if (window && 0 === Object.keys(this.footerApi).length && this.mappingWebsiteId && this.$route && this.reGetFooterAPI(),
                this.exportFooter(),
                "us" === this.lang || "ca-en" === this.lang || "ca-fr" === this.lang) {
                    var e = document.createElement("script");
                    e.setAttribute("data-cfasync", "false"),
                    e.text = "window.ju_num=\"5F08F32F-5D29-40EC-BA20-E24539C6857C\";window.asset_host='//cdn.jst.ai/';(function(i,s,o,g,r,a,m){i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)};a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script',asset_host+'vck.js','juapp');",
                    document.body.appendChild(e)
                }
            }
            ,
            t.prototype.exportFooter = function() {
                if (this.$root && !this.$route) {
                    var e = this.$root ? this.$root.$data : null;
                    this.exportWebsiteID = e.websiteID;
                    encodeURI(window.location.host),
                    e.websitePath ? e.websitePath : this.exportWebsitePath;
                    this.getExportFooterAPI(),
                    this.setTranslation()
                }
            }
            ,
            t.prototype.categoryHandler = function() {
                var e = this;
                this.exportWebsiteID;
                setTimeout((function() {
                    e.getTerm()
                }
                ), 500)
            }
            ,
            t.prototype.setTranslation = function() {
                if (0 === Object.keys(this.translation).length) {
                    var e = encodeURI(window.location.host)
                      , t = !1
                      , n = new RegExp(/stage/gim);
                    switch (e) {
                    case "rogmars.asus.com":
                        "https://api-rogmars.asus.com",
                        t = !0;
                        break;
                    case "rog.asus.com":
                        "https://api-rog.asus.com",
                        t = !0;
                        break;
                    case "stage-rog.asus.com":
                    default:
                        "https://stage-api-rog.asus.com",
                        t = !0;
                        break;
                    case "rog.asus.com.cn":
                        "https://api-rog.asus.com.cn",
                        t = !0;
                        break;
                    case "rog-bacchus.asus.com":
                        "https://rogmars.asus.com",
                        t = !0
                    }
                    e.match(n) && ("https://dev-rog.asus.com",
                    t = !1),
                    this.getTranslation({
                        WebsiteId: this.exportWebsiteID,
                        isRogSite: t,
                        isElite: !1
                    })
                }
            }
            ,
            t.prototype.footerLinkHandler = function(e) {
                if ("undefined" != typeof window)
                    return "rog.asus.com.cn" === window.location.host && e && e.indexOf("/cn") > -1 ? "".concat(encodeURI(window.location.origin)).concat(e.replace("/cn", "")) : e
            }
            ,
            t.prototype.gaDataLayer = function(e, t) {
                if (window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: t,
                    event_action_DL: "clicked",
                    event_label_DL: "footer/".concat(e),
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", t, "clicked", "footer/".concat(e)])
                }
            }
            ,
            k([Object(d.Getter)("footerApi")], t.prototype, "footerApi", void 0),
            k([Object(d.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            k([Object(d.Getter)("bottomBanner")], t.prototype, "bottomBanner", void 0),
            k([Object(d.Getter)("translation")], t.prototype, "translation", void 0),
            k([Object(d.Getter)("getSpotLight")], t.prototype, "getSpotLight", void 0),
            k([Object(d.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            k([Object(d.Action)("getFooterAPI")], t.prototype, "getFooterAPI", void 0),
            k([Object(d.Action)("getTranslation")], t.prototype, "getTranslation", void 0),
            k([Object(d.Mutation)(w.ROG_FOOTER)], t.prototype, "rogExportFooter", void 0),
            k([Object(l.Prop)({
                default: !1
            })], t.prototype, "isFooterContainerActived", void 0),
            k([Object(l.Watch)("rogFooterMode")], t.prototype, "listenDeviceMode", null),
            t = k([Object(l.Component)({
                components: {
                    Breadcrumb: P.a
                }
            })], t)
        }(l.Vue), O = L, C = n(394), S = n(20);
        var component = Object(S.a)(O, (function() {
            var e, t = this, n = t._self._c;
            t._self._setupProxy;
            return n("footer", {
                staticClass: "footer newFooter",
                class: t.$style.footerContainer,
                attrs: {
                    dir: t.dirtype
                }
            }, [t.chkFooterVal(t.footerApi) ? n("div", {
                class: [t.$style.footerContent, (e = {},
                Object(r.a)(e, t.$style.footerPCMode, t.isPCMode),
                Object(r.a)(e, t.$style.vnStyle, ("vn" === t.lang || "kr" === t.lang) && t.pageNameType),
                e)]
            }, [n("div", {
                class: [t.$style.footerTopContent, Object(r.a)({}, t.$style.noBottomBanner, t.isProductHome && !t.isShowBottomBanner && t.spotLightStatus)]
            }, [n("Breadcrumb", {
                class: [],
                attrs: {
                    breadList: t.fullPath
                }
            })], 1), t._v(" "), !t.footerApi.link && !t.footerApi.socialMedia || t.isAccount ? t._e() : n("div", {
                class: [t.$style.siteMap, Object(r.a)({}, t.$style.vnStyle, ("vn" === t.lang || "kr" === t.lang) && t.pageNameType)]
            }, [t.footerApi.link ? n("ul", {
                attrs: {
                    role: "list"
                }
            }, t._l(t.footerApi.link, (function(e, o) {
                return n("li", {
                    key: "footerLink".concat(o),
                    class: t.$style.footerLink,
                    attrs: {
                        role: "listitem"
                    }
                }, [n("a", {
                    class: [t.$style.footerItemName, {
                        firstFooterItem: 0 === o
                    }],
                    attrs: {
                        id: "rogFooter".concat(0 === o ? "" : o),
                        href: t.footerLinkHandler(e.link),
                        target: e.linkTarget
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.siteMapListClick(e)
                        }
                    }
                }, [t._v(t._s(e.name))])])
            }
            )), 0) : t._e(), t._v(" "), n("p", {
                class: t.$style.mobileFollowSocialMediaName
            }, [t._v("\n          " + t._s(t.translation.Footer_M_Follow_ROG) + "\n        ")]), t._v(" "), t.footerApi.socialMedia ? n("ul", {
                class: t.$style.socialList,
                attrs: {
                    role: "tree"
                }
            }, t._l(t.footerApi.socialMedia, (function(e, o) {
                return n("li", {
                    key: "socialMedia".concat(o),
                    class: t.$style.socialLink,
                    attrs: {
                        role: "treeitem"
                    }
                }, [n("a", {
                    class: t.$style.socialItem,
                    attrs: {
                        href: e.link
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            n.preventDefault(),
                            t.openSocialMediaLink(e)
                        }
                    }
                }, ["facebook" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1024",
                        height: "1024",
                        viewBox: "0 0 1024 1024",
                        "svg-inline": "",
                        alt: "facebook",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M303.572 365.85h89.272v-87.112c-.558-6.041-.878-13.063-.878-20.158 0-41.664 11.01-80.76 30.273-114.532l-.597 1.138c29.122-39.877 75.711-65.49 128.283-65.49 3.625 0 7.225.12 10.79.363l-.483-.023c7.328-.342 15.915-.54 24.543-.54 48.177 0 94.924 6.105 139.513 17.581l-3.872-.847-22.318 132.11c-21.4-6.183-46.092-10.085-71.582-10.792l-.416-.008c-35.996 0-65.874 12.598-65.874 47.158V365.85h143.99l-12.242 129.232H560.226V943.97H392.838V495.082h-89.272V365.85z"
                    }
                })]) : t._e(), t._v(" "), "twitter" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        "svg-inline": "",
                        alt: "twitter",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M17.647 14.469L24.932 6h-1.726l-6.326 7.353L11.827 6H6l7.64 11.119L6 26h1.726l6.68-7.765L19.743 26h5.827l-7.924-11.531zm-2.365 2.748l-.774-1.107L8.349 7.3H11l4.971 7.11.774 1.107 6.461 9.242h-2.651l-5.273-7.541z",
                        fill: "#999"
                    }
                })]) : t._e(), t._v(" "), "instagram" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1024",
                        height: "1024",
                        viewBox: "0 0 1024 1024",
                        "svg-inline": "",
                        alt: "instagram",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M512 170.88c111.04 0 124.16 0 168 2.56 27.899.361 54.465 5.611 79.028 14.929l-1.588-.529c18.807 7.164 34.763 18.079 47.608 31.921l.072.079c13.82 12.988 24.715 28.92 31.701 46.809l.299.871c8.481 22.992 13.601 49.544 14.077 77.227l.003.213c1.92 43.84 2.56 56.96 2.56 168s0 124.16-2.56 168c-.479 27.896-5.599 54.448-14.618 79.123l.538-1.683c-7.285 18.76-18.18 34.692-31.933 47.618l-.067.062c-12.917 13.921-28.873 24.836-46.827 31.713l-.853.287c-22.975 8.789-49.541 14.039-77.286 14.398l-.154.002c-43.84 2.24-56.96 2.56-168 2.56s-124.16 0-168-2.56c-27.899-.361-54.465-5.611-79.028-14.929l1.588.529c-18.807-7.164-34.763-18.079-47.608-31.921l-.072-.079c-13.921-12.917-24.836-28.873-31.713-46.827l-.287-.853c-8.789-22.975-14.039-49.541-14.398-77.286l-.002-.154c-1.92-43.84-2.56-56.96-2.56-168s0-124.16 2.56-168c.361-27.899 5.611-54.465 14.929-79.028l-.529 1.588c7.164-18.807 18.079-34.763 31.921-47.608l.079-.072c12.917-13.921 28.873-24.836 46.827-31.713l.853-.287c22.975-8.789 49.541-14.039 77.286-14.398l.154-.002c43.84-1.92 56.96-2.56 168-2.56zM512 96c-112.96 0-128 0-171.52 2.56-36.495.707-71.15 7.688-103.222 19.903l2.102-.703c-28.766 11.153-53.299 27.461-73.581 47.98l-.019.02c-20.614 20.254-36.936 44.803-47.525 72.203l-.475 1.397c-11.512 29.97-18.493 64.625-19.195 100.818l-.005.302C96 384 96 399.04 96 512s0 128 2.56 171.52c.707 36.495 7.688 71.15 19.903 103.222l-.703-2.102c11.064 28.797 27.386 53.346 47.97 73.571l.03.029c20.301 20.539 44.834 36.847 72.188 47.515l1.412.485c29.97 11.512 64.625 18.493 100.818 19.195l.302.005C384 928 399.04 928 512 928s128 0 171.52-2.56c36.495-.707 71.15-7.688 103.222-19.903l-2.102.703c55.979-22.133 99.467-65.621 121.096-120.158l.504-1.442c11.512-29.97 18.493-64.625 19.195-100.818l.005-.302C928 640 928 624.96 928 512s0-128-2.56-171.52c-.707-36.495-7.688-71.15-19.903-103.222l.703 2.102c-22.133-55.979-65.621-99.467-120.158-121.096l-1.442-.504c-29.97-11.512-64.625-18.493-100.818-19.195l-.302-.005C640 96 624.96 96 512 96z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M512 298.24c-118.056 0-213.76 95.704-213.76 213.76S393.944 725.76 512 725.76 725.76 630.056 725.76 512 630.056 298.24 512 298.24zm0 352c-76.524 0-138.56-62.036-138.56-138.56S435.475 373.12 512 373.12s138.56 62.035 138.56 138.56v.338V512c0 76.525-62.035 138.56-138.56 138.56zm272-360.32c0 27.57-22.35 49.92-49.92 49.92s-49.92-22.35-49.92-49.92S706.51 240 734.08 240 784 262.35 784 289.92z"
                    }
                })]) : t._e(), t._v(" "), "youtube" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1024",
                        height: "1024",
                        viewBox: "0 0 1024 1024",
                        "svg-inline": "",
                        alt: "youtube",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M969.714 286.058c-10.824-40.607-41.978-72.023-81.625-83.029l-.82-.191c-72.723-19.444-364.773-19.444-364.773-19.444s-291.658 0-364.382 19.444c-40.626 11.079-71.942 42.525-82.647 82.408l-.185.814c-12.381 65.579-19.465 141.025-19.465 218.116 0 2.747.01 5.5.023 8.242l-.003-.424c-.019 2.327-.021 5.073-.021 7.818 0 77.099 7.083 152.536 20.637 225.711l-1.171-7.595c10.278 41.503 41.759 73.758 82.009 84.967l.82.194c72.723 19.444 364.382 19.444 364.382 19.444s292.052 0 364.773-19.444c40.466-11.198 71.62-42.615 82.254-82.408l.185-.814c12.381-65.579 19.465-141.025 19.465-218.116 0-2.747-.01-5.5-.023-8.242l.003.424c.021-2.88.036-6.282.036-9.692 0-77.125-7.089-152.591-20.654-225.785l1.173 7.596zM427.225 650.831v-277.66L671.05 512.002z"
                    }
                })]) : t._e(), t._v(" "), "twitch" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1024",
                        height: "1024",
                        viewBox: "0 0 1024 1024",
                        "svg-inline": "",
                        alt: "twitch",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M430.205 294.26H512v237.975h-81.795zm218.025 0h81.795v237.975H648.23z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M137.795 56L76.52 212.465V852.29h217.74V968h122.55l115.71-115.71h176.985L947.48 614.03V56zM865.97 573.275l-136.23 136.23H512L396.29 825.5V709.505H212.465v-571.71H865.97z"
                    }
                })]) : t._e(), t._v(" "), "threads" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512",
                        "svg-inline": "",
                        alt: "threads",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M331.5 235.7c2.2.9 4.2 1.9 6.3 2.8 29.2 14.1 50.6 35.2 61.8 61.4 15.7 36.5 17.2 95.8-30.3 143.2-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2-32.3-41-48.9-98.1-49.5-169.6v-.5c.5-71.5 17.1-128.6 49.4-169.6 36.3-46.1 90.3-69.7 160.5-70.2h.3c70.3.5 124.9 24 162.3 69.9 18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4-29.2-35.8-73-54.2-130.5-54.6-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3 28 35.6 71.2 53.9 128.2 54.4 51.4-.4 85.4-12.6 113.7-40.9 32.3-32.2 31.7-71.8 21.4-95.9-6.1-14.2-17.1-26-31.9-34.9-3.7 26.9-11.8 48.3-24.7 64.8-17.1 21.8-41.4 33.6-72.7 35.3-23.6 1.3-46.3-4.4-63.9-16-20.8-13.8-33-34.8-34.3-59.3-2.5-48.3 35.7-83 95.2-86.4 21.1-1.2 40.9-.3 59.2 2.8-2.4-14.8-7.3-26.6-14.6-35.2-10-11.7-25.6-17.7-46.2-17.8h-.7c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6.4 99.9 39.5 103.7 107.7l-.2.2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3 25.6-1.4 54.6-11.4 59.5-73.2-13.2-2.9-27.8-4.4-43.4-4.4-4.8 0-9.6.1-14.4.4-42.9 2.4-57.2 23.2-56.2 41.8l-.1.1z"
                    }
                })]) : t._e(), t._v(" "), "weibo" === e.class ? n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        "svg-inline": "",
                        alt: "weibo",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M22.9 4.7c-.7 0-1.3 0-2 .1-.6.2-.9.8-.8 1.3s.7.9 1.3.8c1.9-.5 3.7.1 5 1.5 1.3 1.4 1.6 3.5 1.2 5.1-.1.6.1 1.2.7 1.4.6.1 1.2-.1 1.4-.7.8-2.3.2-5.1-1.5-7.2-1.4-1.2-3.3-2.1-5.3-2.3zM13.3 8c-2 .1-4.5 1.6-7.1 4.2C3.5 14.8 2 17.6 2 19.9c0 4.5 5.8 7.3 11.7 7.3 7.6 0 12.7-4.4 12.7-7.9 0-2.1-1.9-3.4-3.4-3.7-.5-.1-.7-.1-.5-.7.5-1.2.6-2.1 0-2.8-.8-1.3-3.4-1.3-6.3 0 0 0-.8.5-.7-.2.5-1.4.5-2.7-.2-3.1-.4-.7-1.1-1-2-.8zm9.5.5c-.2 0-.6 0-.9.1-.6.1-.8.6-.7 1.2s.6.8 1.2.7c.6-.1 1.3 0 1.6.6.5.5.6 1.2.5 1.6-.1.5.1.9.6 1.2.5.1.9-.1 1.2-.6.5-1.2.1-2.6-.7-3.5-1-.9-1.8-1.3-2.8-1.3zm-8.4 6.2c3.8.1 7 2.1 7.2 4.8.2 3-3.1 5.8-7.8 6.3-4.5.5-8.6-1.6-9-4.8-.2-3 3.1-5.8 7.8-6.3h1.8zm-1.8 2.2C11 17 9.5 18 8.8 19.4c-.9 2 0 4.2 2.2 4.9 2.3.7 5-.5 5.9-2.6.9-2.1-.2-4.2-2.6-4.8h-1.7zm1.1 2.7h.1c.2.1.5.5.2.7-.1.2-.6.5-.8.2-.2-.1-.5-.5-.2-.7.3-.2.4-.2.7-.2zm-2.3.5c.1 0 .5 0 .6.1.7.2.9 1.2.6 1.9-.5.7-1.4 1.2-2.1.7-.7-.2-.9-1.1-.5-1.8.4-.6 1-.9 1.4-.9z"
                    }
                })]) : t._e(), t._v(" "), "discord" === e.class ? n("svg", {
                    class: "discord icon",
                    attrs: {
                        width: "2184",
                        height: "2500",
                        viewBox: "0 0 256 293",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid",
                        "svg-inline": "",
                        alt: "discord",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M226.011 0H29.99C13.459 0 0 13.458 0 30.135v197.778c0 16.677 13.458 30.135 29.989 30.135h165.888l-7.754-27.063 18.725 17.408 17.7 16.384L256 292.571V30.135C256 13.458 242.542 0 226.011 0zm-56.466 191.05s-5.266-6.291-9.655-11.85c19.164-5.413 26.478-17.408 26.478-17.408-5.998 3.95-11.703 6.73-16.823 8.63-7.314 3.073-14.336 5.12-21.211 6.291-14.044 2.633-26.917 1.902-37.888-.146-8.339-1.61-15.507-3.95-21.504-6.29-3.365-1.317-7.022-2.926-10.68-4.974-.438-.293-.877-.439-1.316-.732a2.022 2.022 0 01-.585-.438c-2.633-1.463-4.096-2.487-4.096-2.487s7.022 11.703 25.6 17.261c-4.388 5.56-9.801 12.142-9.801 12.142-32.33-1.024-44.617-22.235-44.617-22.235 0-47.104 21.065-85.285 21.065-85.285 21.065-15.799 41.106-15.36 41.106-15.36l1.463 1.756C80.75 77.53 68.608 89.088 68.608 89.088s3.218-1.755 8.63-4.242c15.653-6.876 28.088-8.777 33.208-9.216.877-.147 1.609-.293 2.487-.293a123.776 123.776 0 0129.55-.292c13.896 1.609 28.818 5.705 44.031 14.043 0 0-11.556-10.971-36.425-18.578l2.048-2.34s20.041-.44 41.106 15.36c0 0 21.066 38.18 21.066 85.284 0 0-12.435 21.211-44.764 22.235zm-68.023-68.316c-8.338 0-14.92 7.314-14.92 16.237 0 8.924 6.728 16.238 14.92 16.238 8.339 0 14.921-7.314 14.921-16.238.147-8.923-6.582-16.237-14.92-16.237m53.394 0c-8.339 0-14.922 7.314-14.922 16.237 0 8.924 6.73 16.238 14.922 16.238 8.338 0 14.92-7.314 14.92-16.238 0-8.923-6.582-16.237-14.92-16.237",
                        fill: "#7289DA"
                    }
                })]) : t._e(), t._v(" "), "whatsapp" === e.class ? n("svg", {
                    class: "whatsapp icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 308 308",
                        "svg-inline": "",
                        alt: "whatsapp",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 011.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 004.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 00-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 00-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z"
                    }
                })]) : t._e(), t._v(" "), "vksocial" === e.class ? n("svg", {
                    class: "vk social icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 80 80",
                        "svg-inline": "",
                        alt: "vk social",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M79.021 40c0 21.579-17.47 39.073-39.021 39.073C18.45 79.073.979 61.577.979 40 .979 18.421 18.452.927 40 .927 61.55.927 79.021 18.423 79.021 40z",
                        fill: "none",
                        stroke: "gray",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10"
                    }
                }), n("path", {
                    attrs: {
                        d: "M66.031 25.993c.377-1.27 0-2.198-1.81-2.198h-5.97c-1.51 0-2.214.804-2.593 1.69 0 0-3.034 7.397-7.33 12.206-1.394 1.385-2.022 1.833-2.786 1.833-.38 0-.948-.448-.948-1.708V25.993c0-1.52-.415-2.198-1.69-2.198h-9.378c-.946 0-1.519.71-1.519 1.376 0 1.438 2.147 1.766 2.372 5.811v8.79c0 1.934-.348 2.282-1.106 2.282-2.025 0-6.95-7.43-9.866-15.935-.576-1.655-1.145-2.324-2.674-2.324h-5.968c-1.705 0-2.047.804-2.047 1.69 0 1.58 2.023 9.42 9.423 19.798 4.932 7.08 11.878 10.922 18.208 10.922 3.79 0 4.261-.855 4.261-2.322v-5.36c0-1.705.365-2.057 1.562-2.057.887 0 2.404.457 5.951 3.87 4.047 4.052 4.71 5.869 6.982 5.869h5.968c1.707 0 2.56-.855 2.074-2.536-.537-1.682-2.473-4.106-5.038-6.99-1.395-1.643-3.486-3.42-4.112-4.307-.88-1.14-.631-1.645 0-2.656 0 0 7.28-10.251 8.034-13.723z",
                        fill: "gray"
                    }
                })]) : t._e(), t._v(" "), "tiktok" === e.class ? n("svg", {
                    class: "tiktok icon",
                    attrs: {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "svg-inline": "",
                        alt: "tiktok",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M21.55 6.661c0-.096 0-.096-.11-.096-.246 0-.493-.027-.74-.062-.892-.13-3.787-1.565-4.274-3.913-.007-.048-.116-.632-.116-.879 0-.11 0-.11-.116-.11h-3.476c-.225 0-.195-.027-.195.192v13.945c0 .171-.008.343-.037.515-.174.899-.66 1.6-1.48 2.087-.711.419-1.488.535-2.315.384-.26-.048-.5-.144-.747-.233-.022-.014-.036-.035-.058-.048-.08-.062-.174-.117-.261-.179-1.052-.686-1.546-1.64-1.394-2.835.153-1.209.893-2.033 2.105-2.458.363-.124.74-.179 1.132-.158.246.014.493.041.74.11.087.02.13-.007.13-.09v-.089c0-.837-.036-2.657-.036-2.664 0-.24 0-.48.007-.72 0-.07-.036-.083-.094-.09a7.63 7.63 0 00-1.371-.027 7.128 7.128 0 00-1.85.37 6.955 6.955 0 00-2.519 1.497 6.468 6.468 0 00-1.465 1.991 6.302 6.302 0 00-.595 2.26c-.022.342-.022.679.014 1.022.044.474.138.934.29 1.387.436 1.297 1.227 2.355 2.351 3.2.117.082.225.178.363.233l.174.144c.182.13.378.24.58.336 1.256.59 2.584.831 3.984.666 1.815-.212 3.324-.968 4.514-2.28 1.117-1.235 1.661-2.677 1.676-4.297.014-2.314 0-4.627.007-6.941 0-.055-.036-.13.03-.165.05-.02.1.041.144.069a9.424 9.424 0 002.954 1.208c.616.137 1.24.213 1.879.213.203 0 .225-.007.225-.2-.007-.83-.05-3.075-.05-3.295z",
                        fill: "#999"
                    }
                })]) : t._e(), t._v(" "), n("span", {
                    staticClass: "sr-only"
                }, [t._v(t._s(e.class))])])])
            }
            )), 0) : t._e()]), t._v(" "), n("div", {
                class: t.$style.footerLine
            }, [n("div", {
                class: t.$style.left
            }), t._v(" "), n("div", {
                class: t.$style.right
            })]), t._v(" "), "vn" !== t.lang && "kr" !== t.lang || "" === t.translation.Footer_Legal_Info ? t._e() : n("div", {
                class: t.$style.legalInfoContent
            }, [n("p", {
                domProps: {
                    innerHTML: t._s(t.translation.Footer_Legal_Info)
                }
            })]), t._v(" "), t.footerApi.region || t.footerApi.copyright || t.rogCategoryStatus ? n("div", {
                class: [t.$style.privateContent, Object(r.a)({}, t.$style.cnSite, "cn" === t.lang)]
            }, [n("div", {
                class: t.$style.footerLeftBottomContent
            }, [t.footerApi.region && "cn" !== t.lang ? n("button", {
                class: [t.$style.language, t.$style.footerItemName, t.$style.footerRegionButton],
                attrs: {
                    tabindex: "0",
                    type: "button",
                    "aria-label": "".concat(t.translation.Aria_entry).concat(t.footerApi.region.name)
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.footerRegionClick(t.footerApi.region)
                    }
                }
            }, [n("svg", {
                class: t.$style.languageIcon,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    alt: "language change",
                    role: "presentation",
                    focusable: "false"
                }
            }, [n("path", {
                attrs: {
                    d: "M16 0a16 16 0 1016 16A16 16 0 0016 0zm14.28 16h-5.85a29.25 29.25 0 00-.65-6.25 18.25 18.25 0 004.08-1.7 14.21 14.21 0 012.42 8zm-21 0a27.59 27.59 0 01.61-5.83 29.15 29.15 0 005.24.61V16H9.29zm13.42 0h-5.84v-5.22a29.15 29.15 0 005.24-.61 27.59 27.59 0 01.61 5.83zm-7.56 14.14c-1.67-.48-3.17-2.32-4.23-5a26.22 26.22 0 014.23-.45zm1.72-5.42a26.22 26.22 0 014.23.45c-1.06 2.65-2.56 4.49-4.23 5zm0-1.72v-5.25h5.79a25.52 25.52 0 01-1 5.76 29.41 29.41 0 00-4.79-.51zm0-13.94v-7.2c2 .57 3.75 3.11 4.81 6.64a27.42 27.42 0 01-4.81.56zm-1.72-7.2v7.2a27.42 27.42 0 01-4.81-.56c1.06-3.5 2.81-6.07 4.81-6.64zm0 15.89V23a29.41 29.41 0 00-4.8.51 25.52 25.52 0 01-1-5.76zm-6.5 6.15a20.36 20.36 0 00-3.53 1.31 14.26 14.26 0 01-3.27-7.46h5.78a27.14 27.14 0 001.02 6.15zm.56 1.64a14.1 14.1 0 002.25 4 14.19 14.19 0 01-5.08-3 19.55 19.55 0 012.83-1zm13.6 0a19.55 19.55 0 012.83 1 14.19 14.19 0 01-5.08 3 14.1 14.1 0 002.25-4zm.56-1.64a27.14 27.14 0 001-6.15h5.78a14.26 14.26 0 01-3.27 7.46 20.36 20.36 0 00-3.51-1.31zM26.8 6.68a17.25 17.25 0 01-3.45 1.4 15.46 15.46 0 00-2.8-5.6 14.3 14.3 0 016.25 4.2zm-15.35-4.2a15.46 15.46 0 00-2.8 5.6 17.25 17.25 0 01-3.45-1.4 14.3 14.3 0 016.25-4.2zM4.14 8.05a18.25 18.25 0 004.08 1.7A29.25 29.25 0 007.57 16H1.72a14.21 14.21 0 012.42-7.95z"
                }
            })]), t._v(" "), n("p", [t._v(t._s(t.footerApi.region.name))])]) : t._e(), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "us" === t.lang,
                    expression: "lang === 'us'"
                }]
            }, [n("button", {
                attrs: {
                    id: "usWidget",
                    tabindex: "0",
                    "aria-label": "Press to open accessibility menu"
                }
            }, [n("svg", {
                attrs: {
                    role: "presentation",
                    version: "1.2",
                    baseProfile: "tiny",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 11.299 14.886",
                    "xml:space": "preserve"
                }
            }, [n("path", {
                attrs: {
                    fill: "#010101",
                    d: "M11.271,3.656c-0.117-0.442-0.619-0.708-1.061-0.59c0,0-3.361,1.09-4.57,1.09\n                  c-1.178,0-4.509-1.061-4.509-1.061C0.689,2.978,0.188,3.184,0.041,3.626c-0.147,0.471,0.118,0.972,0.59,1.09l3.625,1.09\n                  c0.177,0.06,0.325,0.236,0.296,0.442c-0.03,0.59-0.089,1.858-0.207,2.329c-0.295,1.356-1.916,5.07-1.916,5.07\n                  c-0.207,0.442,0,0.943,0.413,1.15c0.118,0.059,0.236,0.088,0.354,0.088c0.324,0,0.648-0.178,0.766-0.501L5.7,10.848l1.651,3.567\n                  c0.147,0.293,0.441,0.471,0.767,0.471c0.118,0,0.235-0.029,0.354-0.088c0.44-0.207,0.617-0.708,0.412-1.15\n                  c0,0-1.621-3.714-1.917-5.07C6.849,8.106,6.791,6.839,6.761,6.249c0-0.206,0.118-0.382,0.295-0.442l3.625-1.09\n                  C11.124,4.599,11.388,4.097,11.271,3.656z M5.7,3.302c0.912,0,1.651-0.739,1.651-1.65S6.612,0,5.7,0C4.788,0,4.049,0.74,4.049,1.651\n                  S4.788,3.302,5.7,3.302z"
                }
            })]), t._v(" "), n("span", {
                staticStyle: {
                    color: "#999999"
                }
            }, [t._v("Accessibility")])])])]), t._v(" "), t.translation.copyRight || t.rogCategoryStatus ? n("div", {
                class: t.$style.personalContent
            }, ["pe" === t.lang ? n("a", {
                class: t.$style.reclamacioneLink,
                attrs: {
                    href: "https://pe.store.asus.com/libro-de-reclamaciones/"
                }
            }, [n("svg", {
                class: t.$style.reclamacione,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "185",
                    height: "14.001",
                    viewBox: "0 0 185 14.001",
                    "svg-inline": "",
                    alt: "icon-reclamaciones",
                    role: "presentation",
                    focusable: "false"
                }
            }, [n("defs", [n("clipPath", {
                attrs: {
                    id: "a"
                }
            }, [n("path", {
                attrs: {
                    "data-name": "矩形 581",
                    fill: "none",
                    d: "M0 0h185v14.001H0z"
                }
            })])]), n("g", {
                attrs: {
                    "data-name": "组 1262"
                }
            }, [n("g", {
                attrs: {
                    "data-name": "组 1261",
                    "clip-path": "url(#a)",
                    fill: "#b3b3b3"
                }
            }, [n("path", {
                attrs: {
                    "data-name": "联合 33",
                    d: "M1.656 10.17V.1c3.37-.612 6.74 1.724 7.926 3.831V14C8.4 11.895 5.026 9.559 1.656 10.17zM0 14V3.388h.874v7.76l.915-.167a5.578 5.578 0 01.98-.086 7.717 7.717 0 015.87 3.1zM10.419 3.93c1.186-2.107 4.556-4.442 7.926-3.831v10.069c-3.37-.611-6.74 1.724-7.926 3.83zm.943 10.065a7.714 7.714 0 015.87-3.1 5.58 5.58 0 01.98.086l.914.167v-7.76h.875V14z"
                }
            }), n("path", {
                attrs: {
                    "data-name": "联合 34",
                    d: "M178.05 11.701v-2.3a4.729 4.729 0 001.166.624 3.417 3.417 0 001.189.238 1.184 1.184 0 00.645-.149.49.49 0 00.228-.437.586.586 0 00-.113-.36 1.126 1.126 0 00-.347-.291 6.423 6.423 0 00-.858-.368 2.659 2.659 0 01-2.029-2.521 2.355 2.355 0 01.926-1.948 3.9 3.9 0 012.485-.73 8.706 8.706 0 011.48.123c.202.035.481.1.846.2v2.137a4.324 4.324 0 00-2.086-.58 1.285 1.285 0 00-.679.158.484.484 0 00-.258.434.545.545 0 00.207.436 3.909 3.909 0 00.869.449 4.833 4.833 0 011.85 1.154 2.208 2.208 0 01.541 1.489 2.425 2.425 0 01-.447 1.459 2.66 2.66 0 01-1.257.926 5.539 5.539 0 01-1.944.3 6.349 6.349 0 01-2.414-.443zm-23.739-.091a3.785 3.785 0 01-1.51-1.507 4.44 4.44 0 01-.539-2.193 4.855 4.855 0 01.545-2.309 3.871 3.871 0 011.529-1.585 4.456 4.456 0 012.238-.559 4.323 4.323 0 012.159.536 3.657 3.657 0 011.471 1.529 4.8 4.8 0 01.518 2.253 4.658 4.658 0 01-.544 2.264 3.89 3.89 0 01-1.523 1.553 4.368 4.368 0 01-2.192.553 4.37 4.37 0 01-2.153-.535zm1.063-5.423a2.708 2.708 0 00-.422 1.624 2.68 2.68 0 00.418 1.6 1.34 1.34 0 001.14.574 1.3 1.3 0 00.791-.257 1.668 1.668 0 00.545-.738 3.059 3.059 0 00.193-1.144 2.915 2.915 0 00-.4-1.633 1.245 1.245 0 00-1.09-.6 1.379 1.379 0 00-1.176.574zm-12.855 5.446a3.5 3.5 0 01-1.487-1.459 4.516 4.516 0 01-.511-2.182 4.8 4.8 0 01.573-2.367 3.974 3.974 0 011.624-1.6 5.005 5.005 0 012.414-.565 8.384 8.384 0 012.109.263v2.338a2.982 2.982 0 00-.837-.329 4.232 4.232 0 00-.985-.116 2.2 2.2 0 00-1.626.591 2.165 2.165 0 00-.595 1.605 2.127 2.127 0 00.595 1.59 2.171 2.171 0 001.591.583 4.114 4.114 0 001.857-.469v2.256a7.115 7.115 0 01-2.407.375 4.9 4.9 0 01-2.316-.514zm-43.893 0a3.506 3.506 0 01-1.487-1.459 4.524 4.524 0 01-.511-2.182 4.8 4.8 0 01.573-2.367 3.974 3.974 0 011.624-1.6 5.005 5.005 0 012.414-.565 8.384 8.384 0 012.109.263v2.338a2.982 2.982 0 00-.837-.329 4.232 4.232 0 00-.985-.116 2.2 2.2 0 00-1.626.591 2.165 2.165 0 00-.595 1.605 2.127 2.127 0 00.595 1.59 2.172 2.172 0 001.591.583 4.114 4.114 0 001.857-.469v2.256a7.114 7.114 0 01-2.407.375 4.893 4.893 0 01-2.315-.514zm-46.069-.67a4.323 4.323 0 01-1.094-3.064 4.583 4.583 0 011.113-3.234A3.908 3.908 0 0155.6 3.458a3.694 3.694 0 012.85 1.171 4.342 4.342 0 011.081 3.065 4.6 4.6 0 01-1.107 3.252 3.842 3.842 0 01-2.959 1.2 3.776 3.776 0 01-2.909-1.184zm1.1-5.419a3.407 3.407 0 00-.723 2.267 3.436 3.436 0 00.7 2.255 2.265 2.265 0 001.84.855 2.376 2.376 0 001.9-.813 3.4 3.4 0 00.7-2.28 3.562 3.562 0 00-.676-2.325 2.292 2.292 0 00-1.868-.821 2.337 2.337 0 00-1.878.861zm118.005 6.457v-8.4h5.232v1.981h-2.7v1.225h2.537v1.98h-2.537v1.236h2.9v1.981zm-3.874 0l-2.966-4.054a9.755 9.755 0 01-.574-.867h-.022c.022.414.035.879.035 1.394v3.528h-2.344v-8.4h2.39l2.841 3.856.129.182c.051.07.1.142.153.216l.143.217a1.4 1.4 0 01.1.188h.023a7.793 7.793 0 01-.035-.891V3.602h2.344v8.4zm-19.237 0v-8.4h2.532v8.4zm-11.291 0l-.369-1.547h-2.508l-.4 1.547h-2.736l2.894-8.4h3.142l2.723 8.4zm-1.734-6.112q-.07.323-.709 2.766h1.606l-.585-2.285a7 7 0 01-.17-.943h-.059a3.891 3.891 0 01-.087.461zm-7.681 6.112v-4.6q0-.652.041-1.43l.018-.388h-.069q-.188.992-.287 1.373l-1.238 5.05h-2.379l-1.3-4.991c-.035-.125-.126-.6-.275-1.431h-.07q.082 1.971.083 2.462v3.961h-2.221v-8.4h3.791l1.154 4.565a5.316 5.316 0 01.109.572c.046.287.073.509.085.665h.035c.043-.355.111-.776.205-1.26l1.077-4.542h3.733v8.4zm-11.427 0l-.369-1.547h-2.507l-.4 1.547h-2.736l2.894-8.4h3.141l2.724 8.4zm-1.734-6.112q-.07.323-.708 2.766h1.6l-.585-2.285a7.155 7.155 0 01-.17-.943h-.058a3.988 3.988 0 01-.083.461zm-10.025 6.112v-8.4h2.532v6.422h2.894v1.98zm-14.179 0v-8.4h5.232v1.981h-2.7v1.225h2.537v1.98h-2.537v1.236h2.9v1.981zm-3.826 0l-.627-1.811a2.24 2.24 0 00-.471-.838.86.86 0 00-.63-.3h-.1v2.953h-2.532v-8.4h3.363a4.668 4.668 0 012.6.578 1.958 1.958 0 01.841 1.732 2.192 2.192 0 01-.489 1.453 2.792 2.792 0 01-1.456.85v.022a2.041 2.041 0 01.887.534 3.284 3.284 0 01.635 1.1l.826 2.138zm-1.828-4.729h.457a1.163 1.163 0 00.82-.287.94.94 0 00.31-.721.882.882 0 00-.257-.669 1.144 1.144 0 00-.809-.246h-.521zm-11.843 4.729v-8.4h4.531v1.184h-3.136v2.379h2.889v1.178h-2.889v2.484H77.7v1.178zm-8.607 0v-8.4h2.426q4.645 0 4.646 4.1a4.031 4.031 0 01-1.289 3.126 4.921 4.921 0 01-3.457 1.18zm1.389-1.177h1.113a3.115 3.115 0 002.288-.809 3.071 3.071 0 00.817-2.284q0-2.948-3.053-2.947h-1.166zm-16.248 1.177l-1.343-2.25a4.564 4.564 0 00-.355-.531 2.156 2.156 0 00-.351-.36 1.194 1.194 0 00-.39-.205 1.648 1.648 0 00-.474-.065h-.567v3.411h-1.39v-8.4h2.767a4 4 0 011.089.141 2.533 2.533 0 01.868.425 1.962 1.962 0 01.577.709 2.232 2.232 0 01.208.993 2.42 2.42 0 01-.132.817 2.083 2.083 0 01-.375.662 2.269 2.269 0 01-.586.495 2.9 2.9 0 01-.77.317v.023a2.161 2.161 0 01.4.283c.114.1.221.211.323.32a3.767 3.767 0 01.3.372c.1.138.21.3.33.483l1.5 2.362zm-3.48-4.544h1.159a1.719 1.719 0 00.595-.1 1.343 1.343 0 00.473-.286 1.3 1.3 0 00.31-.457 1.563 1.563 0 00.113-.6 1.2 1.2 0 00-.382-.943 1.591 1.591 0 00-1.1-.34h-1.168zm-8.636 4.54v-8.4h2.666a3.149 3.149 0 011.93.534 1.659 1.659 0 01.712 1.389 1.978 1.978 0 01-.4 1.242 2.178 2.178 0 01-1.119.75v.024a2.19 2.19 0 011.385.641 1.958 1.958 0 01.519 1.41 2.121 2.121 0 01-.849 1.746 3.372 3.372 0 01-2.146.668zm1.388-1.114h1.19a1.808 1.808 0 001.2-.36 1.229 1.229 0 00.425-.993q0-1.307-1.811-1.307h-1.008zm0-3.779h.9a1.727 1.727 0 001.139-.343 1.185 1.185 0 00.414-.969q0-1.078-1.442-1.079h-1.014zm-4.891 4.893v-8.4h1.435v8.4zm-5.861 0v-8.4h1.4v7.225h3.258v1.177z"
                }
            })])])])]) : t._e(), t._v(" "), t.rogCategoryStatus ? n("ul", {
                class: t.$style.termsContent,
                attrs: {
                    role: "list"
                }
            }, t._l(t.footerApi.termsOfUseData, (function(e, o) {
                return n("li", {
                    key: "category".concat(o),
                    attrs: {
                        role: "listitem"
                    }
                }, [n("a", {
                    class: [t.$style.footerItemName, t.$style.footerItemLink],
                    attrs: {
                        href: e.link
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            n.preventDefault(),
                            t.categoryClick(e)
                        }
                    }
                }, [t._v(t._s(e.name))])])
            }
            )), 0) : t._e(), t._v(" "), t.translation.Footer_CopyRight ? n("p", {
                class: [t.$style.copyRightContent, t.$style.footerItemName],
                domProps: {
                    innerHTML: t._s(t.translation.Footer_CopyRight)
                }
            }) : t._e()]) : t._e()]) : t._e(), t._v(" "), t.isPCMode ? n("img", {
                attrs: {
                    src: t.imgHandler(t.isHome),
                    alt: "",
                    loading: "lazy"
                }
            }) : t._e()]) : t._e()])
        }
        ), [], !1, (function(e) {
            this.$style = C.default.locals || C.default
        }
        ), null, null);
        t.a = component.exports
    },
    405: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = (n(630),
        n(24),
        n(49),
        n(9))
          , c = (n(48),
        n(38),
        n(10),
        n(42),
        n(44),
        n(45),
        n(35),
        n(36),
        n(40),
        n(77),
        n(15),
        n(34),
        n(21),
        n(28),
        n(52),
        n(37),
        n(51),
        n(89),
        n(142),
        n(3))
          , l = n(5)
          , d = n(476)
          , h = n(8)
          , _ = n.n(h)
          , f = (n(197),
        function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }
        )
          , m = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        };
        "https://".concat("estore", ".asus.com/graphql");
        function v(param) {
            return {
                Store: param.store,
                Authorization: "Bearer ".concat(param.token)
            }
        }
        var w, y = {
            usersEcToken: function(e, t) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(t, "/graphql"),
                                data: {
                                    query: '\n          mutation {\n            getAuthorizationToken(id:"'.concat(e, '", type:"aTicket"){\n              token\n            }\n          }\n          ')
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            usersEcShopToken: function(e, t) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(t, "/graphql"),
                                data: {
                                    query: '\n          mutation {\n            getAuthorizationToken(id:"'.concat(e, '", type:"aTicket", group_id_only:"Y"){\n              token\n            }\n          }\n          ')
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            visitorEcToken: function(e, t) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(t, "/graphql"),
                                data: {
                                    query: '\n          mutation {\n            getAuthorizationToken(id:"'.concat(e, '", type:"session"){\n              token\n            }\n          }\n          ')
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getEcCustomer: function(param, e) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(e, "/graphql"),
                                headers: v(param),
                                data: {
                                    query: "\n          {\n            customer {\n              firstname\n              lastname\n              email\n              group_id\n            }\n          }\n            "
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getEcCartId: function(param, e) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(e, "/graphql"),
                                headers: v(param),
                                data: {
                                    query: "\n        {\n          customerCart {\n            id\n          }\n        }\n          "
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getVisitorEcCartId: function(param, e) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(e, "/graphql"),
                                headers: v(param),
                                data: {
                                    query: "\n        mutation {\n          createEmptyCart\n        }\n          "
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getEcCartItems: function(param, e) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(e, "/graphql"),
                                headers: v(param),
                                data: {
                                    query: '\n        {\n          cart(cart_id: "'.concat(param.cartID, '") {\n            id\n            total_quantity\n            translate {\n              items_in_cart\n              more_items\n              cart_subtotal\n              checkout\n            }\n            items {\n              quantity\n              prices {\n                row_total_including_tax {\n                  value\n                  currency\n                }\n              }\n              product {\n                sku\n                name\n                price_range {\n                  maximum_price {\n                    final_price {\n                      currency\n                      value\n                    }\n                  }\n                }\n                small_image {\n                  url\n                  label\n                }\n              }\n              buy_page_url\n            }\n            prices {\n              subtotal_including_tax {\n                value\n                currency\n              }\n            }\n            checkout_url\n          }\n        }\n\n          ')
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getShopComEcCartItems: function(param, e) {
                return f(this, void 0, Promise, (function() {
                    return m(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, _()({
                                method: "post",
                                url: "".concat(e, "/graphql"),
                                headers: v(param),
                                data: {
                                    query: '\n        {\n          cart(cart_id: "'.concat(param.cartID, '") {\n            id\n            total_quantity\n            translate {\n              items_in_cart\n              more_items\n              cart_subtotal\n              checkout\n            }\n            items {\n              quantity\n              prices {\n                row_total_including_tax {\n                  value\n                  currency\n                }\n\n                row_total{\n                  value\n                  currency\n                }\n\n              }\n              product {\n                sku\n                name\n                price_range {\n                  maximum_price {\n                    final_price {\n                      currency\n                      value\n                    }\n                  }\n                }\n                small_image {\n                  url\n                  label\n                }\n              }\n              buy_page_url\n              additional_message\n            }\n            prices {\n              subtotal_including_tax {\n                value\n                currency\n              }\n              subtotal_excluding_tax{\n                value\n                currency\n              }\n            }\n            checkout_url\n          }\n        }\n\n          ')
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
        }, P = n(71), I = n(6), k = n(117), L = n(33), O = (n(70),
        n(27)), C = n.n(O), S = n(73), M = (w = function(e, b) {
            return w = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            w(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            w(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), A = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }, D = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.navSubNestedItemSplitNum = 9,
                t.websiteInfo = new S.a,
                t
            }
            return M(t, e),
            t.prototype.urlReplace = function(e) {
                for (var t = [], n = "localhost:8000" === window.location.host ? "https://dev-rog.asus.com" : encodeURI(window.location.origin), o = 0, r = L.b; o < r.length; o++) {
                    var c = r[o];
                    new RegExp(c).test(e) && (t = e.split(n))
                }
                return t.length > 1 ? t[1] : null
            }
            ,
            t.prototype.linkClick = function(e) {
                var t = Object(L.a)()
                  , n = this.urlReplace(e.link);
                (e || e.link) && (t && n && this.$route ? (this.gaSetting(e.class, e.name),
                "object" === Object(r.a)(window._satellite) && window._satellite.track("spa-pageview"),
                void 0 !== window._hmt && window._hmt && window._hmt.push(["_requirePlugin", "UrlChangeTracker", {
                    shouldTrackUrlChange: function(e, t) {
                        return e && t
                    }
                }]),
                this.$router.push({
                    path: "".concat(this.changeUrl(n), "/")
                }).catch((function(e) {}
                )),
                this.$emit("closeAction")) : (this.gaSetting(e.class, e.name),
                window.location = e.link))
            }
            ,
            t.prototype.changeUrl = function(e) {
                var t = e.split("/")
                  , n = "";
                return t.forEach((function(e) {
                    e.length > 0 && (n = n + "/" + e)
                }
                )),
                n.toLowerCase()
            }
            ,
            t.prototype.linkClickNoRouterPush = function(e) {
                (e || e.link) && (this.gaNoRoutePushSetting(e.name),
                window.open(e.link, e.linkTarget))
            }
            ,
            t.prototype.createLink = function(e) {
                if (e || e.link)
                    return e.link
            }
            ,
            t.prototype.menuMouseLeave = function() {
                this.$emit("leaveSubMenu", {
                    leave: !0
                })
            }
            ,
            t.prototype.menuMouseOver = function() {
                this.$emit("enterSubMenu", {
                    leave: !1
                })
            }
            ,
            t.prototype.mobilePrev = function() {
                this.$emit("mobileSubMenu")
            }
            ,
            t.prototype.splitSubNestedItemSplitVal = function(e) {
                return C.a.chunk(e, this.navSubNestedItemSplitNum)
            }
            ,
            t.prototype.gaSetting = function(e, t) {
                if ("rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-".concat(this.dropDownVal.Class, "-L2"), "clicked", "".concat(e, "-").concat(t)])
                } else
                    window.dataLayer && window.dataLayer.push({
                        event: "data_layer_event",
                        event_category_DL: "header-".concat(this.dropDownVal.Class, "-L2"),
                        event_action_DL: "clicked",
                        event_label_DL: "".concat(e, "-").concat(t),
                        event_value_DL: "0"
                    })
            }
            ,
            t.prototype.gaNoRoutePushSetting = function(e) {
                if ("rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-".concat(this.dropDownVal.Class, "-L2"), "clicked", e])
                } else
                    window.dataLayer && window.dataLayer.push({
                        event: "data_layer_event",
                        event_category_DL: "header-".concat(this.dropDownVal.Class, "-L2"),
                        event_action_DL: "clicked",
                        event_label_DL: e,
                        event_value_DL: "0"
                    })
            }
            ,
            A([Object(c.Prop)({
                default: null
            })], t.prototype, "dropDownVal", void 0),
            A([Object(c.Prop)({
                type: String,
                default: "default"
            })], t.prototype, "dropDownType", void 0),
            A([Object(c.Prop)({
                default: null
            })], t.prototype, "headerBlockPosition", void 0),
            A([Object(c.Prop)({
                default: null
            })], t.prototype, "headerListBlockPosition", void 0),
            A([Object(c.Prop)({
                type: Boolean,
                default: !1
            })], t.prototype, "isMobile", void 0),
            A([Object(c.Prop)({
                type: Number,
                default: 286
            })], t.prototype, "menuWidth", void 0),
            t = A([c.Component], t)
        }(c.Vue), W = D, j = n(385), x = n(20);
        var E = Object(x.a)(W, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return e.dropDownVal && e.dropDownVal.items && e.dropDownVal.items.length > 0 ? t("div", {
                class: [e.$style.dropDownMenuContainer, Object(o.a)({}, e.$style.mobileActived, e.isMobile)],
                style: "width:".concat(e.menuWidth, "px;\n  top:").concat(e.headerBlockPosition, "px;\n  left:").concat(0 === e.headerListBlockPosition.left ? "auto" : e.headerListBlockPosition.left + "px", ";\n  right:").concat(0 === e.headerListBlockPosition.right ? "auto" : e.headerListBlockPosition.right + "px"),
                attrs: {
                    role: "menu"
                },
                on: {
                    mouseover: e.menuMouseOver,
                    mouseleave: e.menuMouseLeave
                }
            }, [!e.dropDownType || e.dropDownType && "default" === e.dropDownType ? t("div", {
                class: e.$style.dropDownContent
            }, [e.isMobile ? t("p", {
                class: e.$style.dropDownBack,
                on: {
                    click: e.mobilePrev
                }
            }, [e._v(e._s(e.dropDownVal.name))]) : e._e(), e._v(" "), e._l(e.dropDownVal.items, (function(n, r) {
                return t("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.subItem.length > 0,
                        expression: "items.subItem.length > 0"
                    }],
                    key: r,
                    class: [e.$style.dropDownOList, Object(o.a)({}, e.$style.dropDownOListProduct, "product" === e.dropDownVal.class)]
                }, ["product" !== e.dropDownVal.class && n.name ? t("li", {
                    class: e.$style.listCategory
                }, [t("p", {
                    class: e.$style.listCategory
                }, [e._v(e._s(n.name))])]) : e._e(), e._v(" "), n.subItem && n.subItem.length > 0 && "product" !== e.dropDownVal.class ? t("li", {
                    class: [Object(o.a)({}, e.$style.otherMenuList, "product" !== e.dropDownVal.class)]
                }, [t("ul", {
                    attrs: {
                        role: "menu"
                    }
                }, e._l(n.subItem, (function(n, o) {
                    return t("li", {
                        key: o,
                        staticClass: "dropMenuItem",
                        class: [e.$style.menuLink],
                        attrs: {
                            role: "menuitem"
                        }
                    }, [t("a", {
                        class: [e.$style.headerItemName, e.$style.subDetailLinkItem],
                        attrs: {
                            tabindex: "0",
                            href: e.createLink(n)
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.linkClickNoRouterPush(n)
                            },
                            click: function(t) {
                                return t.preventDefault(),
                                e.linkClickNoRouterPush(n)
                            }
                        }
                    }, [e._v("\n              " + e._s(n.name) + "\n            ")])])
                }
                )), 0)]) : e._e(), e._v(" "), n.subItem && n.subItem.length > 0 && "product" === e.dropDownVal.class ? t("li", {
                    class: [e.$style.listItem]
                }, e._l(e.splitSubNestedItemSplitVal(n.subItem), (function(o, r) {
                    return t("ul", {
                        key: r,
                        class: e.$style.subDetailLink,
                        attrs: {
                            role: "menu"
                        }
                    }, e._l(o, (function(o, r) {
                        return t("li", {
                            key: r,
                            staticClass: "dropMenuItem",
                            class: [e.$style.menuLink],
                            attrs: {
                                role: "menuitem"
                            }
                        }, [t("a", {
                            class: [e.$style.headerItemName, e.$style.subDetailLinkItem],
                            attrs: {
                                tabindex: "0",
                                id: "".concat(n.name).concat(r),
                                href: e.createLink(o)
                            },
                            on: {
                                keydown: function(t) {
                                    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.linkClick(o)
                                },
                                click: function(t) {
                                    return t.preventDefault(),
                                    e.linkClick(o)
                                }
                            }
                        }, [e._v("\n              " + e._s(o.name) + "\n            ")])])
                    }
                    )), 0)
                }
                )), 0) : e._e()])
            }
            ))], 2) : e._e(), e._v(" "), e.dropDownVal.productItems && e.dropDownVal.productItems.length > 0 ? [t("div", {
                class: e.$style.dropDownContent
            }, e._l(e.dropDownVal.productItems, (function(n, o) {
                return t("ul", {
                    key: o,
                    class: e.$style.dropDownOList,
                    attrs: {
                        role: "menu"
                    }
                }, e._l(n.subItem, (function(n, o) {
                    return t("li", {
                        key: o,
                        class: [e.$style.subDetailLink, e.$style.subDetailBlock],
                        attrs: {
                            role: "menuitem"
                        }
                    }, [t("a", {
                        class: [e.$style.headerItemName, e.$style.subDetailLinkItem],
                        attrs: {
                            tabindex: "0",
                            href: n.link,
                            target: n.linkTarget
                        }
                    }, [e._v(e._s(n.name))])])
                }
                )), 0)
            }
            )), 0)] : e._e()], 2) : e._e()
        }
        ), [], !1, (function(e) {
            this.$style = j.default.locals || j.default
        }
        ), null, null).exports
          , T = function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }()
          , R = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , U = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.showMenu = !1,
                t.navSubNestedItemSpliteNum = 20,
                t.websiteInfo = new S.a,
                t
            }
            return T(t, e),
            t.prototype.watchIsMobile = function(e, t) {
                var n = this;
                e && (this.showMenu = !0),
                e || (this.isBurgerActived ? this.showMenu = !1 : setTimeout((function() {
                    n.showMenu = !1
                }
                ), 500))
            }
            ,
            t.prototype.urlReplace = function(e) {
                for (var t = [], n = 0, o = L.b; n < o.length; n++) {
                    var r = o[n];
                    new RegExp(r).test(e) && (t = e.split(encodeURI(window.location.origin)))
                }
                return t.length > 1 ? t[1] : null
            }
            ,
            t.prototype.linkClick = function(e) {
                event.preventDefault();
                var t = Object(L.a)()
                  , n = this.urlReplace(e.link);
                (e || e.link) && (t && n && this.$route ? (this.gaSetting(e.name),
                "object" === Object(r.a)(window._satellite) && window._satellite.track("spa-pageview"),
                void 0 !== window._hmt && window._hmt && window._hmt.push(["_requirePlugin", "UrlChangeTracker", {
                    shouldTrackUrlChange: function(e, t) {
                        return e && t
                    }
                }]),
                this.$router.push({
                    path: "".concat(n)
                }),
                this.$emit("closeAction")) : (this.gaSetting(e.name),
                window.location = e.link))
            }
            ,
            t.prototype.linkClickOldPage = function(e) {
                event.preventDefault(),
                (e || e.link) && (this.$emit("closeAction"),
                window.location = e.link)
            }
            ,
            t.prototype.menuMouseLeave = function() {
                this.$emit("leaveSubMenu", {
                    leave: !0
                })
            }
            ,
            t.prototype.menuMouseOver = function() {
                this.$emit("leaveSubMenu", {
                    leave: !1
                })
            }
            ,
            t.prototype.mobilePrev = function() {
                this.$emit("mobileSubMenu")
            }
            ,
            t.prototype.spliteSubNestedItemSpliteVal = function(e) {
                return C.a.chunk(e, this.navSubNestedItemSpliteNum)
            }
            ,
            t.prototype.closeMobileMenuList = function() {
                this.showMenu = !1,
                this.$emit("closeMobileMenuList")
            }
            ,
            t.prototype.gaSetting = function(e) {
                if ("rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-L1", "clicked", "Products-".concat(e)])
                } else
                    window.dataLayer && window.dataLayer.push({
                        event: "data_layer_event",
                        event_category_DL: "header-L1",
                        event_action_DL: "clicked",
                        event_label_DL: "Products-".concat(e),
                        event_value_DL: "0"
                    })
            }
            ,
            t.prototype.mounted = function() {}
            ,
            R([Object(c.Prop)({
                default: null
            })], t.prototype, "dropDownVal", void 0),
            R([Object(c.Prop)({
                type: String,
                default: "default"
            })], t.prototype, "dropDownType", void 0),
            R([Object(c.Prop)({
                default: {
                    top: 0,
                    left: 0
                }
            })], t.prototype, "headerBlockPosition", void 0),
            R([Object(c.Prop)({
                default: {
                    top: 0,
                    left: 0
                }
            })], t.prototype, "headerListBlockPosition", void 0),
            R([Object(c.Prop)({
                type: Boolean,
                default: !1
            })], t.prototype, "isMobile", void 0),
            R([Object(c.Prop)({
                type: Boolean,
                default: !1
            })], t.prototype, "isBurgerActived", void 0),
            R([Object(c.Watch)("isMobile")], t.prototype, "watchIsMobile", null),
            t = R([c.Component], t)
        }(c.Vue)
          , B = U
          , $ = n(386);
        var H = Object(x.a)(B, (function() {
            var e, t = this, n = t._self._c;
            t._self._setupProxy;
            return n("div", {
                class: [t.$style.dropDownMenuContainer, t.$style.mobileMenuList, (e = {},
                Object(o.a)(e, t.$style.mobileActived, t.isBurgerActived),
                Object(o.a)(e, t.$style.show, t.showMenu),
                Object(o.a)(e, t.$style.isBurgerActived, t.isBurgerActived),
                e)],
                style: "top: ".concat(t.headerBlockPosition, "px;"),
                on: {
                    mouseover: t.menuMouseOver,
                    mouseleave: t.menuMouseLeave
                }
            }, [t.dropDownVal && t.dropDownVal.items && t.dropDownVal.items.length > 0 ? n("div", [!t.dropDownType || t.dropDownType && "default" === t.dropDownType ? n("div", {
                class: [t.$style.dropDownCotent, Object(o.a)({}, t.$style.dropDownProductContent, "product" === t.dropDownVal.class)]
            }, [n("div", {
                class: t.$style.dropDownBack,
                attrs: {
                    role: "button",
                    "aria-label": "go back"
                },
                on: {
                    click: t.mobilePrev
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    alt: "left",
                    role: "presentation",
                    focusable: "false"
                }
            }, [n("path", {
                attrs: {
                    d: "M8.93 13.77L22.94 0v6.7l-9.18 8.94 9.18 9.66V32L8.93 17.51l-1.87-1.87 1.87-1.87z"
                }
            })]), t._v(" "), n("p", [t._v(t._s(t.dropDownVal.name))])]), t._v(" "), t._l(t.dropDownVal.items, (function(e, r) {
                return n("ol", {
                    key: r,
                    class: [t.$style.dropDownOList, Object(o.a)({}, t.$style.dropDownOListProduct, "product" === t.dropDownVal.class)],
                    attrs: {
                        role: "menu"
                    }
                }, ["product" !== t.dropDownVal.class ? n("li", {
                    class: t.$style.listCategory,
                    attrs: {
                        role: "presentation"
                    }
                }, [n("p", {
                    class: t.$style.listCategory,
                    on: {
                        click: t.closeMobileMenuList
                    }
                }, [t._v(t._s(e.name))])]) : t._e(), t._v(" "), e.subItem && e.subItem.length > 0 && "product" !== t.dropDownVal.class ? n("li", {
                    class: t.$style.listItem,
                    attrs: {
                        role: "presentation"
                    }
                }, t._l(e.subItem, (function(e, o) {
                    return n("a", {
                        key: o,
                        attrs: {
                            href: e.link
                        },
                        on: {
                            click: function(n) {
                                return n.preventDefault(),
                                t.linkClickOldPage(e)
                            }
                        }
                    }, [t._v("\n          " + t._s(e.name) + "\n        ")])
                }
                )), 0) : t._e(), t._v(" "), e.subItem && e.subItem.length > 0 && "product" === t.dropDownVal.class ? n("li", {
                    class: t.$style.listItem,
                    attrs: {
                        role: "presentation"
                    }
                }, t._l(t.spliteSubNestedItemSpliteVal(e.subItem), (function(e, o) {
                    return n("div", {
                        key: o,
                        class: t.$style.subDetailLink
                    }, t._l(e, (function(e, o) {
                        return n("div", {
                            key: o,
                            class: t.$style.subDetailLinkItem,
                            attrs: {
                                role: "link"
                            },
                            on: {
                                click: function(n) {
                                    return n.preventDefault(),
                                    t.linkClick(e)
                                }
                            }
                        }, [t._v("\n            " + t._s(e.name) + "\n          ")])
                    }
                    )), 0)
                }
                )), 0) : t._e()])
            }
            ))], 2) : t._e(), t._v(" "), t.dropDownVal.ProductItems && t.dropDownVal.ProductItems.length > 0 ? [n("div", {
                class: t.$style.dropDownCotent
            }, t._l(t.dropDownVal.ProductItems, (function(e, o) {
                return n("ol", {
                    key: o,
                    class: t.$style.dropDownOList,
                    attrs: {
                        role: "menu"
                    }
                }, t._l(e.subItem, (function(e, o) {
                    return n("li", {
                        key: o,
                        class: [t.$style.subDetailLink, t.$style.subDetailBlock],
                        attrs: {
                            role: "none"
                        }
                    }, [n("div", {
                        class: t.$style.subDetailLinkItem,
                        attrs: {
                            role: "presentation"
                        },
                        on: {
                            click: function(n) {
                                return n.preventDefault(),
                                t.linkClick(e)
                            }
                        }
                    }, [t._v(t._s(e.name))])])
                }
                )), 0)
            }
            )), 0)] : t._e()], 2) : t._e()])
        }
        ), [], !1, (function(e) {
            this.$style = $.default.locals || $.default
        }
        ), null, null).exports
          , z = (n(631),
        function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }())
          , N = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , G = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , F = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , V = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rightWidth = 20,
                t.getWebsiteInfoMetas = new S.a,
                t.messageNum = 1,
                t.isDropDownActived = !1,
                t.aticketValue = "null",
                t.accountLanguage = "",
                t.exportAccountWebsitePath = "global",
                t.exportWebsiteID = 0,
                t.exportStatus = !1,
                t
            }
            return z(t, e),
            t.prototype.getRouteInfo = function() {
                return G(this, void 0, Promise, (function() {
                    return F(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.getWebsiteInfoMetas.getRouteInfoAPI()];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    return this.routeInfo ? this.routeInfo.websitePath : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isUserLogin", {
                get: function() {
                    return "undefined" != typeof window && null !== Object(I.b)("aticket")
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isRtlArea", {
                get: function() {
                    return "eg" === this.lang || "me-ar" === this.lang || "il" === this.lang || "sa-ar" === this.lang
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "createUrl", {
                get: function() {
                    if (this.accountStatus && this.accountStatus.userInfo && this.accountStatus.userInfo.MediaUrl)
                        return this.accountStatus.userInfo.MediaUrl
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "filteredAccountMenu", {
                get: function() {
                    if (this.accountMenu)
                        return this.aticketValue,
                        this.accountMenu
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "userName", {
                get: function() {
                    if (this.accountStatus && this.accountStatus.userInfo && this.accountStatus.userInfo.name)
                        return this.accountStatus.userInfo.name
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.watchEcObject = function(e, t) {}
            ,
            t.prototype.urlReplace = function(e) {
                for (var t = [], n = 0, o = L.b; n < o.length; n++) {
                    var r = o[n]
                      , c = new RegExp(r);
                    c.test(e) && (t = e.split(c))
                }
                return t.length > 1 ? t[1] : null
            }
            ,
            t.prototype.blurMenu = function(e) {
                e && (this.isDropDownActived = !this.isDropDownActived)
            }
            ,
            t.prototype.accountIconClick = function(e) {
                e.preventDefault(),
                this.gaSetting("member"),
                this.isDropDownActived = !this.isDropDownActived,
                this.isDropDownActived && setTimeout((function() {
                    var e = document.getElementById("personMenu").children[0].children[0];
                    e instanceof HTMLElement && e.focus()
                }
                ), 100)
            }
            ,
            t.prototype.accountName = function(e) {
                return e.link.indexOf("signin") > -1 ? this.translation.Header_Login : e.link.indexOf("logout") > -1 ? this.translation.Header_Logout : this.translation.Header_Sign_up
            }
            ,
            t.prototype.accountLinkActived = function(e) {
                if ("post" === (e.type ? e.type : null)) {
                    if (this.accountLanguage = this.routeInfo.websitePath,
                    this.exportStatus) {
                        var t = this.$root ? this.$root.$data : null;
                        t && Object.keys(t).length > 0 && (this.accountLanguage = t.language,
                        this.exportAccountWebsitePath = t.websitePath)
                    }
                    this.accountActive(e)
                }
            }
            ,
            t.prototype.accountActive = function(e) {
                var t = (window.location.host,
                encodeURI(e.link))
                  , n = new RegExp("logout","ig");
                if (t.indexOf("logout") > -1 && Object(I.a)("groupid_rog_".concat(this.lang)),
                this.accountMappingWebsite(),
                t && Object.keys(this.accountLanguage).length > 0)
                    try {
                        if (window) {
                            var o = encodeURI(window.location.href);
                            o.indexOf("wishlist") > -1 && (o = encodeURI(window.location.origin).indexOf("stage") ? encodeURI(window.location.origin + "/rog/") : encodeURI(window.location.origin));
                            var r = {
                                lang: this.accountLanguage,
                                site: this.exportStatus ? this.exportAccountWebsitePath : this.routeInfo.websitePath,
                                AppID: this.checkAppID(),
                                login_background: "general_black",
                                login_panel: "simply",
                                ReturnURL: encodeURI(window.location.href)
                            }
                              , form = document.createElement("form");
                            for (var c in form.setAttribute("method", "post"),
                            form.setAttribute("action", n.test(t) ? "".concat(t).concat(encodeURI(window.location.href)) : "".concat(t)),
                            r)
                                if (r.hasOwnProperty(c)) {
                                    var element = r[c]
                                      , l = document.createElement("input");
                                    l.setAttribute("type", "hidden"),
                                    l.setAttribute("name", c),
                                    l.setAttribute("value", element),
                                    form.appendChild(l)
                                }
                            document.body.appendChild(form),
                            form.submit()
                        }
                    } catch (e) {
                        console.error(e)
                    }
            }
            ,
            t.prototype.accountLogOutActive = function() {
                var e = "dev-rog.asus.com" === window.location.host ? "dev-" : "";
                if (Object(I.a)("groupid_rog_".concat(this.lang)),
                this.accountMappingWebsite(),
                Object.keys(this.accountLanguage).length > 0)
                    try {
                        if (window) {
                            var t = encodeURI(window.location.href);
                            t.indexOf("wishlist") > -1 && (t = encodeURI(window.location.origin).indexOf("stage") ? encodeURI(window.location.origin + "/rog/") : encodeURI(window.location.origin));
                            var n = {
                                lang: this.accountLanguage,
                                site: this.exportStatus ? this.exportAccountWebsitePath : this.routeInfo.websitePath,
                                AppID: this.checkAppID(),
                                login_background: "general_black",
                                login_panel: "simply",
                                ReturnURL: encodeURI(window.location.href)
                            }
                              , form = document.createElement("form");
                            for (var o in form.setAttribute("method", "post"),
                            form.setAttribute("action", "https://".concat(e, "account.asus.com/logout.aspx?ReturnUrl=").concat(t)),
                            n)
                                if (n.hasOwnProperty(o)) {
                                    var element = n[o]
                                      , r = document.createElement("input");
                                    r.setAttribute("type", "hidden"),
                                    r.setAttribute("name", o),
                                    r.setAttribute("value", element),
                                    form.appendChild(r)
                                }
                            document.body.appendChild(form),
                            form.submit()
                        }
                    } catch (e) {
                        console.error(e)
                    }
            }
            ,
            t.prototype.accountMappingWebsite = function() {
                if (0 === Object.keys(this.accountLanguage).length) {
                    var e = this.websiteMapping.value ? this.websiteMapping.value : this.routeInfo.websiteMapping;
                    this.accountLanguage = Object(k.a)(e, this.routeInfo.websitePath)
                }
            }
            ,
            t.prototype.accountStatusWashActived = function(e, link) {
                var t = (window.location.host,
                encodeURI(e.link))
                  , n = new RegExp("logout","ig");
                if (this.exportStatus && 0 === Object.keys(this.accountLanguage).length && (this.accountLanguage = window.AsusAPIConfig.language,
                this.exportAccountWebsitePath = window.AsusAPIConfig.websitePath),
                0 === Object.keys(this.accountLanguage).length && (this.accountLanguage = Object(k.a)(this.websiteMapping.value ? this.websiteMapping.value : this.routeInfo.websiteMapping, this.routeInfo.websitePath)),
                Object.keys(this.accountLanguage).length > 0)
                    try {
                        if (window) {
                            var o = this.exportStatus ? encodeURI(link) : encodeURI(window.location.href)
                              , r = {
                                lang: this.accountLanguage,
                                site: this.exportStatus ? this.exportAccountWebsitePath : this.routeInfo.websitePath,
                                AppID: this.checkAppID(),
                                login_background: "general_black",
                                login_panel: "simply",
                                ReturnURL: o
                            };
                            Object(I.d)("gowish", encodeURI(link), "");
                            var form = document.createElement("form");
                            for (var c in form.setAttribute("method", "post"),
                            form.setAttribute("action", n.test(t) ? "".concat(t).concat(encodeURI(window.location.href)) : "".concat(t)),
                            r)
                                if (r.hasOwnProperty(c)) {
                                    var element = r[c]
                                      , l = document.createElement("input");
                                    l.setAttribute("type", "hidden"),
                                    l.setAttribute("name", c),
                                    l.setAttribute("value", element),
                                    form.appendChild(l)
                                }
                            document.body.appendChild(form),
                            form.submit()
                        }
                    } catch (e) {
                        console.error(e)
                    }
            }
            ,
            t.prototype.accountStatusActived = function(e) {
                var t = Object(L.a)()
                  , n = this.urlReplace(e.link);
                (e || e.link) && (n ? t && ("object" === Object(r.a)(window._satellite) && window._satellite.track("spa-pageview"),
                void 0 !== window._hmt && window._hmt && window._hmt.push(["_requirePlugin", "UrlChangeTracker", {
                    shouldTrackUrlChange: function(e, t) {
                        return e && t
                    }
                }]),
                this.$router.push({
                    path: n
                })) : (this.gaSubMenuSetting(e.name, e.name),
                this.accountLinkActived(e)))
            }
            ,
            t.prototype.accountDropDownLinkClick = function(e) {
                var t = Object(L.a)()
                  , n = this.urlReplace(e.link);
                (e || e.link) && (t && n ? ("object" === Object(r.a)(window._satellite) && window._satellite.track("spa-pageview"),
                void 0 !== window._hmt && window._hmt && window._hmt.push(["_requirePlugin", "UrlChangeTracker", {
                    shouldTrackUrlChange: function(e, t) {
                        return e && t
                    }
                }]),
                this.$router.push({
                    path: n
                })) : window.location = e.link)
            }
            ,
            t.prototype.checkAppID = function() {
                return encodeURI(window.location.origin).indexOf("store") > -1 || encodeURI(window.location.origin).indexOf("shop") > -1 ? window.AsusAPIConfig ? window.AsusAPIConfig.appID : void 0 : "0000000003"
            }
            ,
            t.prototype.getAccountMenuMetas = function() {
                if (0 === Object.keys(this.accountMenu).length) {
                    var e = encodeURI(window.location.origin).replace(".asus.com", "")
                      , t = {
                        WebsiteId: this.exportStatus ? this.exportWebsiteID : Number(this.mappingWebsiteId),
                        systemCode: e
                    };
                    this.getAccountMenu(t)
                }
            }
            ,
            t.prototype.getAccountStatusMetas = function() {
                if (0 === Object.keys(this.accountStatus).length) {
                    this.aticketValue = Object(I.b)("aticket") ? Object(I.b)("aticket") : "";
                    var e = encodeURI(window.location.origin).replace(".asus.com", "")
                      , t = {
                        WebsiteId: this.exportStatus ? this.exportWebsiteID : Number(this.mappingWebsiteId),
                        aticket: this.aticketValue,
                        systemCode: e
                    };
                    this.getAccountStatus(t)
                }
            }
            ,
            t.prototype.checkRouteInfo = function() {
                this.getAccountStatusMetas()
            }
            ,
            t.prototype.checkIsExport = function() {
                if (this.$route)
                    this.checkRouteInfo();
                else {
                    var e = this.$root ? this.$root.$data : null;
                    this.exportStatus = !0,
                    e && Object.keys(e).length > 0 && (this.exportWebsiteID = e.websiteID,
                    this.getAccountMenuMetas(),
                    this.getAccountStatusMetas())
                }
            }
            ,
            t.prototype.checkDropMenuRightPosition = function() {
                var e = this;
                document.body.clientWidth >= 1890 ? e.rightWidth = 135 : document.body.clientWidth < 1890 && document.body.clientWidth > 1600 ? e.rightWidth = (document.body.clientWidth - 1600) / 2 : document.body.clientWidth <= 1600 && (e.rightWidth = 20)
            }
            ,
            t.prototype.regexEliteName = function(e) {
                return !!new RegExp("elite","ig").test(e)
            }
            ,
            t.prototype.accountLinkHandler = function(e) {
                if ("undefined" != typeof window)
                    return new RegExp("account","ig").test(e) ? "dev-rog.asus.com" === window.location.host ? encodeURI(e.replace("https://account", "https://dev-account")) : encodeURI(e) : e
            }
            ,
            t.prototype.accountGaHandler = function(e) {
                var t = e.link
                  , n = new RegExp("elite","ig")
                  , o = new RegExp("account","ig");
                n.test(t) ? this.gaSubMenuSetting("elite_rewards", e.name) : o.test(t) && this.gaSubMenuSetting("my_account", e.name)
            }
            ,
            t.prototype.mounted = function() {
                var e = this
                  , t = this;
                if ("undefined" != typeof window && (this.aticketValue = Object(I.b)("aticket") ? Object(I.b)("aticket") : "null"),
                Object(I.b)("gowish") && "" !== Object(I.b)("gowish")) {
                    var n = Object(I.b)("gowish");
                    Object(I.d)("gowish", "", ""),
                    window.location.assign(n)
                }
                this.checkIsExport(),
                this.checkDropMenuRightPosition(),
                document.body.addEventListener("click", (function(e) {
                    e.target;
                    if (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) {
                        var n = e.target;
                        n.closest(".personalMenu") || n.closest(".userButton") || (t.isDropDownActived = !1)
                    } else {
                        var o = e.target;
                        o.closest(".personalMenu") || o.closest(".userButton") || (t.isDropDownActived = !1)
                    }
                }
                )),
                window.addEventListener("resize", (function() {
                    e.checkDropMenuRightPosition()
                }
                ))
            }
            ,
            t.prototype.gaSetting = function(e) {
                if (window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-L1",
                    event_action_DL: "clicked",
                    event_label_DL: e,
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-L1", "clicked", e])
                }
            }
            ,
            t.prototype.gaSubMenuSetting = function(e, t) {
                if (window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-member-L2",
                    event_action_DL: "clicked",
                    event_label_DL: "".concat(e, "-").concat(t),
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-member-L2", "clicked", "".concat(e, "-").concat(t), , ])
                }
            }
            ,
            N([Object(l.Getter)("accountMenu")], t.prototype, "accountMenu", void 0),
            N([Object(l.Getter)("websiteId")], t.prototype, "websiteId", void 0),
            N([Object(l.Getter)("accountStatus")], t.prototype, "accountStatus", void 0),
            N([Object(l.Getter)("websiteMapping")], t.prototype, "websiteMapping", void 0),
            N([Object(l.Getter)("websitePath")], t.prototype, "websitePath", void 0),
            N([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            N([Object(l.Getter)("translation")], t.prototype, "translation", void 0),
            N([Object(l.Getter)("accountResultStatus")], t.prototype, "accountResultStatus", void 0),
            N([Object(l.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            N([Object(l.Action)("getAccountStatus")], t.prototype, "getAccountStatus", void 0),
            N([Object(l.Action)("getAccountMenu")], t.prototype, "getAccountMenu", void 0),
            N([Object(l.Action)("getCookie")], t.prototype, "getCookie", void 0),
            N([Object(c.Watch)("accountResultStatus", {
                deep: !0
            })], t.prototype, "watchEcObject", null),
            t = N([c.Component], t)
        }(c.Vue)
          , K = V
          , Q = n(387);
        var J = Object(x.a)(K, (function() {
            var e, t = this, n = t._self._c;
            t._self._setupProxy;
            return n("div", {
                ref: "personalWrapper",
                class: t.$style.personalWrapper
            }, [n("button", {
                class: ["userButton", t.$style.accountButton, (e = {},
                Object(o.a)(e, t.$style.isActivity, t.isDropDownActived && t.accountMenu),
                Object(o.a)(e, t.$style.isLogin, "null" !== t.aticketValue),
                e)],
                attrs: {
                    id: "personMenuButton",
                    "aria-haspopup": "true",
                    "aria-controls": "personMenu",
                    type: "button",
                    "aria-label": t.aticketValue ? "".concat(t.translation.Aria_MyAccount).concat(t.userName) : t.translation.Aria_SignIn,
                    "aria-expanded": !(!t.isDropDownActived || !t.accountMenu),
                    tabindex: "0"
                },
                on: {
                    click: function(e) {
                        return t.accountIconClick(e)
                    },
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.accountIconClick(e)
                    }
                }
            }, [n("svg", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "null" === t.aticketValue || !t.createUrl && "null" !== t.aticketValue,
                    expression: "aticketValue === 'null' || (!createUrl && aticketValue !== 'null')"
                }],
                class: ["svg-icon", Object(o.a)({}, t.$style.isRed, t.accountMenu && t.isDropDownActived && t.accountStatus)],
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    alt: "user",
                    role: "presentation",
                    focusable: "false"
                }
            }, [n("path", {
                attrs: {
                    d: "M5 27c0-5.2 4.93-9.37 11-9.37s11 4.17 11 9.29l-.9.06h-.9c0-4.13-4.13-7.49-9.2-7.49s-9.2 3.36-9.2 7.49zm11-9.67a6.59 6.59 0 116.58-6.59A6.59 6.59 0 0116 17.33zM16 6a4.79 4.79 0 104.78 4.78A4.78 4.78 0 0016 6z"
                }
            })]), t._v(" "), n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.createUrl && "null" !== t.aticketValue,
                    expression: "createUrl && aticketValue !== 'null'"
                }],
                attrs: {
                    "aria-hidden": !(t.createUrl && "null" !== t.aticketValue),
                    src: t.createUrl,
                    alt: "user"
                }
            })]), t._v(" "), n("ul", {
                class: [t.$style.personalDropDownMenu, Object(o.a)({}, t.$style.isMenuShow, t.accountMenu && t.isDropDownActived && t.accountStatus), "personalMenu"],
                style: "left: ".concat(t.isRtlArea ? "-" + t.rightWidth + "px" : "auto", "; right: ").concat(t.isRtlArea ? "auto" : "-" + t.rightWidth + "px"),
                attrs: {
                    role: "menu",
                    "aria-labelledby": "personMenuButton"
                }
            }, ["cn" !== t.lang && "it" !== t.lang && t.accountStatus && t.accountStatus.userInfo && t.accountStatus.userInfo.name ? n("li", {
                class: t.$style.accountInfo,
                attrs: {
                    role: "menuitem"
                }
            }, [n("p", {
                class: t.$style.accountName
            }, [t._v(t._s(t.accountStatus.userInfo.name))]), t._v(" "), n("p", {
                class: t.$style.accountPoints
            }, [t._v("\n        " + t._s(t.accountStatus.userInfo.Points) + " \n        " + t._s(t.translation.Points))])]) : t._e(), t._v(" "), n("li", {
                attrs: {
                    role: "menuitem"
                }
            }, [n("ul", {
                class: t.$style.accountLinkSection,
                attrs: {
                    role: "group",
                    id: "personMenu"
                }
            }, [t.accountStatus.linkSection && t.accountStatus.linkSection.length > 0 ? n("li", {
                attrs: {
                    role: "menuitem"
                }
            }, t._l(t.accountStatus.linkSection, (function(e, r) {
                return n("a", {
                    key: r,
                    class: [t.$style.linkSectionLink, Object(o.a)({}, t.$style.isLoginStatus, "null" !== t.aticketValue)],
                    attrs: {
                        tabindex: "0",
                        href: e.link,
                        "aria-label": "".concat(e.name)
                    },
                    on: {
                        keydown: function(n) {
                            return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : t.accountStatusActived(e)
                        },
                        blur: function(e) {
                            return t.blurMenu(r === t.accountStatus.linkSection.length - 1)
                        }
                    }
                }, [n("span", {
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.accountStatusActived(e)
                        }
                    }
                }, [t._v(t._s(t.accountName(e)))])])
            }
            )), 0) : t._e(), t._v(" "), t._l(t.filteredAccountMenu, (function(e, r) {
                var c;
                return n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !(("it" === t.lang || "cn" === t.lang) && t.regexEliteName(e.link)),
                        expression: "!((lang === 'it' || lang === 'cn') && regexEliteName(accountInfo.link))"
                    }],
                    key: r,
                    class: [t.$style.dropDownLink, (c = {},
                    Object(o.a)(c, t.$style.isLoginStatus, "null" !== t.aticketValue),
                    Object(o.a)(c, t.$style.lastItem, t.filteredAccountMenu.length - 1 === r && "null" === t.aticketValue),
                    c)],
                    attrs: {
                        role: "menuitem"
                    }
                }, [e && e.link && e.link.indexOf("wishlist") > -1 && e.link.indexOf("info") > -1 && !t.isUserLogin ? n("div", {
                    staticClass: "wishlist",
                    class: t.$style.wishlist,
                    attrs: {
                        target: e.linkTarget
                    },
                    on: {
                        click: function(n) {
                            return t.accountStatusWashActived(t.accountStatus.linkSection[0], e.link)
                        }
                    }
                }, [t._v("\n          " + t._s(e.name))]) : n("a", {
                    attrs: {
                        href: t.accountLinkHandler(e.link),
                        target: e.linkTarget,
                        "aria-label": "".concat(e.name)
                    },
                    on: {
                        click: function(n) {
                            return t.accountGaHandler(e)
                        }
                    }
                }, [t._v("\n          " + t._s(e.name))])])
            }
            ))], 2)])])])
        }
        ), [], !1, (function(e) {
            this.$style = Q.default.locals || Q.default
        }
        ), null, null).exports
          , Y = (n(400),
        n(104),
        n(493),
        n(494),
        n(495),
        n(496),
        n(497),
        n(498),
        n(499),
        n(500),
        n(501),
        n(502),
        n(503),
        n(504),
        n(505),
        n(506),
        n(507),
        n(508),
        n(509),
        n(182))
          , X = n.n(Y)
          , Z = n(0)
          , ee = n(1)
          , te = function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }()
          , ne = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , oe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.windowInnerSize = P.a,
                t.getWebsiteInfoMetas = new S.a,
                t.searchKeyword = "",
                t.suggestionCount = 5,
                t.panelHeight = 0,
                t.firstAnimationDone = !1,
                t.resultAnimationDone = !1,
                t.exportWebsiteID = 1,
                t.exportWebsitePath = "global",
                t.showSearchSuggested = !0,
                t.searchTyping = !1,
                t
            }
            return te(t, e),
            Object.defineProperty(t.prototype, "searchSuggestionResult", {
                get: function() {
                    var e;
                    return null === (e = this.searchSuggestion) || void 0 === e ? void 0 : e.obj
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.searchSuggestionHandler = function(e) {
                e && (this.searchTyping = !0),
                this.debounceSearchTypingResetHandler(),
                this.debounceSearchSuggestedHandler(),
                this.debounceSearchHandler()
            }
            ,
            t.prototype.animationHandler = function(e, t) {
                e > t ? requestAnimationFrame(this.expandAnimationStep.bind(this, !1)) : requestAnimationFrame(this.expandAnimationStep.bind(this, !0))
            }
            ,
            t.prototype.closeHandler = function() {
                this.clearSearchSuggestionResult(),
                this.searchKeywordMutation(""),
                this.firstAnimationDone = !1,
                this.panelHeight = 0
            }
            ,
            t.prototype.clearSearchSuggestionResult = function() {
                this.clearSearchSuggestionMutation(),
                this.resultAnimationDone = !1
            }
            ,
            t.prototype.debounceSearchTypingResetHandler = function() {
                this.searchTyping = !1
            }
            ,
            t.prototype.debounceSearchSuggestedHandler = function() {
                this.searchQuick && "" === this.searchKeyword ? this.showSearchSuggested = !0 : this.showSearchSuggested = !1
            }
            ,
            t.prototype.debounceSearchHandler = function() {
                this.clearSearchSuggestionResult(),
                this.searchHandler()
            }
            ,
            t.prototype.searchHandler = function() {
                var e = this;
                if (!this.searchKeyword)
                    return this.clearSearchSuggestionResult(),
                    void this.$nextTick((function() {
                        e.calculateHeight()
                    }
                    ));
                this.$route ? this.getWebsiteInfoMetas.originVal() : "https://rog-bacchus.asus.com" === this.getWebsiteInfoMetas.originVal() || ("https://rog.asus.com.cn" === this.getWebsiteInfoMetas.originVal() || ("https://stage-rog.asus.com" === this.getWebsiteInfoMetas.originVal() || window.location.host.indexOf("stage")));
                var t = {
                    SearchKey: this.searchKeyword.replace(/\s+/g, "-"),
                    Website: this.getWebsite(),
                    Source: "",
                    RowLimit: ""
                };
                t.Source = "product,campaign,faq,article",
                t.RowLimit = "".concat(this.suggestionCount, ",").concat(this.suggestionCount, ",").concat(this.suggestionCount, ",").concat(this.suggestionCount),
                this.getSearchSuggestion({
                    url: this.getWebsiteInfoMetas.originVal(),
                    datas: t
                }).then((function() {
                    e.calculateHeight() && (e.resultAnimationDone = !0)
                }
                )).catch((function(e) {
                    console.error(e)
                }
                ))
            }
            ,
            t.prototype.getWebsite = function() {
                var e = this;
                if (this.$route)
                    return this.routeInfo.websitePath;
                var t = this.$root ? this.$root.$data : null;
                if (t && Object.keys(t).length > 0) {
                    this.exportWebsiteID = t.websiteID;
                    return "rog.asus.com.cn" === encodeURI(window.location.host) ? "https://rog.asus.com.cn" : "rogmars.asus.com" === encodeURI(window.location.host) ? "https://rogmars.asus.com" : "https://rog.asus.com",
                    ee.a.getWebsiteID().then((function(t) {
                        var n = t.data.result;
                        n && n.forEach((function(element) {
                            element.websiteId === e.exportWebsiteID && (e.exportWebsitePath = element.webPath)
                        }
                        ))
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    )),
                    t.websitePath ? t.websitePath : this.exportWebsitePath
                }
            }
            ,
            t.prototype.directToSearchPage = function() {
                if ("" !== this.searchKeyword) {
                    this.searchKeywordMutation(this.searchKeyword),
                    localStorage.setItem("searchKeyWords", this.searchKeyword),
                    this.$emit("close");
                    var area = ""
                      , e = "";
                    if (this.$route) {
                        var t = this.routeInfo.websitePath;
                        area = "global" !== t ? t : "",
                        "rog.asus.com.cn" === window.location.host && (area = ""),
                        e = encodeURI(area ? "/".concat(area, "/search/explore/") : "/search/explore/"),
                        "object" === ("undefined" == typeof _satellite ? "undefined" : Object(r.a)(_satellite)) && _satellite.track("spa-pageview"),
                        "undefined" != typeof _hmt && _hmt && _hmt.push(["_requirePlugin", "UrlChangeTracker", {
                            shouldTrackUrlChange: function(e, t) {
                                return e && t
                            }
                        }]),
                        this.$router.push({
                            path: "".concat(e, "?searchkeyword=").concat(encodeURI(this.searchKeyword))
                        })
                    } else {
                        var n = "";
                        n = "cn" === (area = "global" === this.getWebsite() ? "" : this.getWebsite()) ? "https://rog.asus.com.cn/search/explore/" : encodeURI(area ? "https://rog.asus.com/".concat(area, "/search/explore/") : "https://rog.asus.com/search/explore/"),
                        window.location.assign(encodeURI("".concat(n, "?searchkeyword=").concat(this.searchKeyword)))
                    }
                }
            }
            ,
            t.prototype.maskHeightHandler = function() {
                try {
                    return {
                        height: "".concat(document.body.clientHeight, "px")
                    }
                } catch (e) {
                    return {
                        height: "0"
                    }
                }
            }
            ,
            t.prototype.expandAnimationStep = function(e) {
                var t = this.$refs.searchHeaderPanel
                  , n = 0;
                t && (n = "auto" === t.style.height.split("px")[0] ? this.panelHeight : Number(t.style.height.split("px")[0])),
                e ? (n -= 30) < this.panelHeight && (n = this.panelHeight) : (n += 30) > this.panelHeight && (n = this.panelHeight),
                t && (t.style.height = "".concat(n, "px"));
                var o = this.expandAnimationStep.bind(this, e);
                if (e) {
                    if (n <= 30)
                        return void this.$emit("close");
                    n > this.panelHeight ? requestAnimationFrame(o) : this.firstAnimationDone && (this.resultAnimationDone = !0)
                } else
                    n < this.panelHeight ? requestAnimationFrame(o) : this.animationStepFlagHandler(e)
            }
            ,
            t.prototype.animationStepFlagHandler = function(e) {
                e ? this.resultAnimationDone ? this.resultAnimationDone = !1 : this.firstAnimationDone = !1 : this.firstAnimationDone ? this.resultAnimationDone = !0 : this.firstAnimationDone = !0
            }
            ,
            t.prototype.calculateHeight = function() {
                var e = this.$refs.searchHeaderPanel
                  , t = this.panelHeight;
                e.style.height = "auto";
                var n = e.clientHeight;
                return e.style.height = "".concat(t, "px"),
                this.panelHeight = n,
                n === t
            }
            ,
            t.prototype.isOuterLink = function(e) {
                return /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-.,@?^=%&:/~+#]*)+)?$/.test(e)
            }
            ,
            t.prototype.highlightHandler = function(e) {
                var t = new RegExp(this.searchKeyword,"gi");
                if (e.match(t)) {
                    var n = e;
                    return n = n.replace(t, (function(e) {
                        return '<span class="highlightText">'.concat(e, "</span>")
                    }
                    ))
                }
                return e
            }
            ,
            t.prototype.sort = function(e) {
                var t = new Set;
                return e.filter((function(e) {
                    return !t.has(e.name) && t.add(e.name)
                }
                ))
            }
            ,
            t.prototype.rightClick = function(e, t) {
                3 === e.which && (e.target.href = t.replace(/script|java|applet|iframe|meta|CONCAT|CHAR|<|>|'/g, ""))
            }
            ,
            t.prototype.openLink = function(e, title) {
                window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "site search dynamic list",
                    event_action_DL: "clicked",
                    event_label_DL: "".concat(this.searchKeyword, "-").concat(title, "-").concat(e.name)
                });
                var t = e.url.replace(/script|java|applet|iframe|meta|CONCAT|CHAR|<|>|'/g, "");
                window.open(t, "_blank")
            }
            ,
            t.prototype.getSearchQuickList = function() {
                var e = this;
                this.getSearchQuick({
                    url: this.getWebsiteInfoMetas.originVal(),
                    datas: {
                        websiteId: this.mappingWebsiteId
                    }
                }).then((function() {
                    e.calculateHeight()
                }
                ))
            }
            ,
            t.prototype.created = function() {
                this.clearSearchSuggestionResult(),
                this.getSearchQuickList()
            }
            ,
            t.prototype.mounted = function() {
                this.calculateHeight()
            }
            ,
            ne([Object(l.Getter)("searchSuggestion")], t.prototype, "searchSuggestion", void 0),
            ne([Object(l.Getter)("searchKeyword")], t.prototype, "stageSearchKeyword", void 0),
            ne([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            ne([Object(l.Getter)("translation")], t.prototype, "translation", void 0),
            ne([Object(l.Getter)("searchQuick")], t.prototype, "searchQuick", void 0),
            ne([Object(l.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            ne([Object(l.Action)("getSearchSuggestion")], t.prototype, "getSearchSuggestion", void 0),
            ne([Object(l.Action)("getSearchQuick")], t.prototype, "getSearchQuick", void 0),
            ne([Object(l.Mutation)(Z.CLEAR_SEARCH_SUGGESTION)], t.prototype, "clearSearchSuggestionMutation", void 0),
            ne([Object(l.Mutation)(Z.SEARCH_KEYWORD)], t.prototype, "searchKeywordMutation", void 0),
            ne([Object(l.Mutation)(Z.SEARCH_SUGGESTION)], t.prototype, "searchSuggestionMutation", void 0),
            ne([Object(c.Prop)({
                default: 1
            })], t.prototype, "websiteId", void 0),
            ne([Object(c.Watch)("searchKeyword")], t.prototype, "searchSuggestionHandler", null),
            ne([Object(c.Watch)("panelHeight")], t.prototype, "animationHandler", null),
            ne([X()(600)], t.prototype, "debounceSearchTypingResetHandler", null),
            ne([X()(600)], t.prototype, "debounceSearchSuggestedHandler", null),
            ne([X()(600)], t.prototype, "debounceSearchHandler", null),
            t = ne([c.Component], t)
        }(c.Vue)
          , re = oe
          , ae = n(388);
        var ie = Object(x.a)(re, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return t("div", {
                ref: "searchHeaderPanel",
                class: e.$style.searchHeaderPanel
            }, [t("div", {
                class: e.$style.panelContainer
            }, [t("div", {
                class: [e.$style.container, e.$style.searchInputContainer, Object(o.a)({}, e.$style.searchTyping, e.searchTyping), Object(o.a)({}, e.$style.fadeIn, e.firstAnimationDone)]
            }, [t("div", {
                class: e.$style.inputWrapper
            }, [t("div", {
                class: e.$style.searchIcon
            }, [t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    role: "presentation",
                    "svg-inline": "",
                    alt: "search",
                    focusable: "false"
                }
            }, [t("path", {
                attrs: {
                    d: "M26.44 24.32l-3.65-3.65a9.79 9.79 0 00-7.9-15.57A9.8 9.8 0 008 21.82a9.79 9.79 0 0012.7 1l3.64 3.65a1.54 1.54 0 001.1.46 1.48 1.48 0 001.05-.44 1.51 1.51 0 00-.05-2.17zM14.89 6.86a8 8 0 11-5.68 2.35 8 8 0 015.68-2.35z"
                }
            })])]), e._v(" "), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.searchKeyword,
                    expression: "searchKeyword"
                }],
                class: Object(o.a)({}, e.$style.searchTyping, e.searchTyping),
                attrs: {
                    name: "search",
                    id: "search",
                    type: "text",
                    size: "20",
                    placeholder: "",
                    "aria-label": e.translation.Aria_SearchBar
                },
                domProps: {
                    value: e.searchKeyword
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.directToSearchPage.apply(null, arguments)
                    },
                    input: function(t) {
                        t.target.composing || (e.searchKeyword = t.target.value)
                    }
                }
            }), e._v(" "), t("label", {
                staticClass: "sr-only",
                attrs: {
                    for: "search"
                }
            }, [e._v("\n          " + e._s(e.translation.Aria_SearchBar) + "\n        ")])]), e._v(" "), t("button", {
                class: e.$style.closeButton,
                attrs: {
                    tabindex: "0",
                    type: "button",
                    "aria-label": e.translation.Aria_CancelSearch
                },
                on: {
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.closeHandler.apply(null, arguments)
                    },
                    click: e.closeHandler
                }
            })]), e._v(" "), t("div", {
                class: [e.$style.container, e.$style.exploreContainer, Object(o.a)({}, e.$style.fadeIn, e.firstAnimationDone)]
            }, [e.searchQuick && e.searchQuick && 0 !== e.searchQuick.length ? [e.showSearchSuggested ? t("ul", {
                attrs: {
                    role: "listbox"
                }
            }, e._l(e.searchQuick, (function(n, o) {
                return t("li", {
                    key: "suggested_".concat(o),
                    attrs: {
                        role: "presentation"
                    }
                }, [t("a", {
                    class: [e.$style.searchSuggestedItem, e.$style.fadeIn],
                    attrs: {
                        role: "option",
                        "aria-label": "".concat(n.name),
                        href: n.url
                    }
                }, [e._v(e._s(n.name))])])
            }
            )), 0) : e._e()] : e._e(), e._v(" "), e.searchSuggestionResult && e.searchSuggestionResult.length > 0 ? e._l(e.searchSuggestionResult, (function(n) {
                return t("div", {
                    key: n.type,
                    class: e.$style.exploreResultBlock,
                    attrs: {
                        role: n.items.length ? "listbox" : "none",
                        "aria-label": n.items.length ? n.type : ""
                    }
                }, [t("p", {
                    class: e.$style.title,
                    attrs: {
                        role: "presentation"
                    }
                }, [e._v(e._s(n.type))]), e._v(" "), e._l(e.sort(n.items), (function(o, r) {
                    return [t("a", {
                        key: "".concat(r, "-").concat(o.id),
                        class: e.$style.searchResultItem,
                        attrs: {
                            role: "option",
                            "aria-label": "".concat(o.name),
                            href: o.url
                        },
                        domProps: {
                            innerHTML: e._s(e.highlightHandler(o.name))
                        },
                        on: {
                            mousedown: function(t) {
                                return e.rightClick(t, o.url)
                            },
                            click: function(t) {
                                return t.preventDefault(),
                                e.openLink(o, n.type)
                            }
                        }
                    })]
                }
                ))], 2)
            }
            )) : e._e()], 2)]), e._v(" "), t("div", {
                class: [e.$style.mask, Object(o.a)({}, e.$style.fadeIn, e.firstAnimationDone)],
                style: e.maskHeightHandler()
            })])
        }
        ), [], !1, (function(e) {
            this.$style = ae.default.locals || ae.default
        }
        ), null, null)
          , se = ie.exports
          , ce = (n(65),
        n(514),
        n(398))
          , ue = function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }()
          , le = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , de = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rightWidth = 20,
                t.isDropDownActived = !1,
                t.websiteResult = [],
                t.callWebsite = !1,
                t.langMappingList = {
                    es: "es-ES",
                    it: "it-IT",
                    fr: "fr-FR",
                    se: "sv-SE",
                    dk: "da-DK",
                    fi: "fi-FI",
                    cz: "cs-CZ",
                    pl: "pl-PL",
                    hu: "hu-HU",
                    de: "de-DE",
                    nl: "nl-NL",
                    pt: "pt-PT",
                    "be-nl": "nl-BE",
                    "be-fr": "fr-BE",
                    id: "id-ID",
                    uk: "en-UK",
                    kr: "ko-KR",
                    in: "en-IN",
                    "ca-en": "en-CA",
                    "ca-fr": "fr-CA",
                    co: "es-CO",
                    cl: "es-CL",
                    us: "en-US",
                    ro: "ro-RO"
                },
                t
            }
            return ue(t, e),
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    return this.routeInfo && Object.keys(this.routeInfo).length > 0 ? this.routeInfo.websitePath : window.AsusAPIConfig ? window.AsusAPIConfig.websitePath : void 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "i18AccountLang", {
                get: function() {
                    var e, t;
                    return null !== (null === (e = this.getEcObject) || void 0 === e ? void 0 : e.tagLang) ? null === (t = this.getEcObject) || void 0 === t ? void 0 : t.tagLang.replace(/rog_/g, "").replace("_", "-") : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "displayedItems", {
                get: function() {
                    return this.cartList.items ? this.cartList.items.slice(0, 3) : []
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "cartButtonData", {
                get: function() {
                    return {
                        name: this.getWording("checkout"),
                        link: this.cartList.checkout_url,
                        disabled: !1
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "bagItemsQuantity", {
                get: function() {
                    if (this.cartList)
                        return this.cartList.total_quantity
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "displayedQuantity", {
                get: function() {
                    return this.bagItemsQuantity || 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "itemsMoreThanThree", {
                get: function() {
                    if (this.cartList && this.cartList.items)
                        return this.cartList.items.length > 3
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isRtlArea", {
                get: function() {
                    return "eg" === this.lang || "me-ar" === this.lang || "il" === this.lang || "sa-ar" === this.lang
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.mounted = function() {
                var e = this;
                this.checkDropMenuRightPosition(),
                document.body.addEventListener("click", (function(t) {
                    -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/"),
                    t.target.closest(".bagDropdownMenu") || t.target.closest(".bagButton") || (e.isDropDownActived = !1)
                }
                )),
                window.addEventListener("resize", (function() {
                    e.checkDropMenuRightPosition()
                }
                )),
                this.websiteObj.forEach((function(t) {
                    t.websiteId === Number(e.mappingWebsiteId) && (e.websiteResult = t)
                }
                ))
            }
            ,
            t.prototype.checkDropMenuRightPosition = function() {
                var e = document.body.clientWidth;
                e > 1890 ? this.rightWidth = 155 : e <= 1890 && e > 1600 ? this.rightWidth = (e - 1600) / 2 : e <= 1600 && e > 1024 ? this.rightWidth = 20 : e <= 1024 && (this.rightWidth = 0)
            }
            ,
            t.prototype.bagIconClick = function() {
                this.isDropDownActived = !this.isDropDownActived
            }
            ,
            t.prototype.closeMenu = function() {
                this.isDropDownActived = !1
            }
            ,
            t.prototype.isFloat = function(e) {
                return e == e && e !== (0 | e)
            }
            ,
            t.prototype.thousandSeparatorHandler = function(e, t) {
                var n = "";
                return "" !== t ? "IN" === this.websiteResult.isoCode || "PE" === this.websiteResult.isoCode ? (n = Number(e).toLocaleString(this.i18AccountLang, {
                    maximumFractionDigits: this.websiteResult.numberOfDecimal,
                    style: "currency",
                    currency: this.websiteResult.currencyCode
                }),
                "PE" === this.websiteResult.isoCode && (n = n.replace("S/", "S/."))) : n = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.websiteResult.thousandSeparators) : n = e,
                n
            }
            ,
            t.prototype.currencyHandler = function(e) {
                var t = this;
                if (!this.callWebsite && 0 === this.websiteResult.length) {
                    this.callWebsite = !0;
                    Object(L.a)() && encodeURI(window.location.origin);
                    var n = this.$root ? this.$root.$data : null;
                    return ee.a.getWebsiteID().then((function(o) {
                        if (200 === o.data.status && o.data.result) {
                            var r = o.data.result;
                            r && r.forEach((function(o) {
                                o.websiteId === Number(n.websiteID) && (t.websiteResult = o,
                                t.currencyHandler(e))
                            }
                            ))
                        }
                    }
                    )),
                    ""
                }
                var o = e
                  , r = Number(this.websiteResult.numberOfDecimal);
                return this.isFloat(Number(o)) && r > 0 ? o = o.toFixed(2).replace(".", this.websiteResult.decimalSeparator) : r > 0 && (o = o.toString() + this.websiteResult.decimalSeparator + "00"),
                o = this.thousandSeparatorHandler(o, this.websiteResult.thousandSeparators),
                "IN" === this.websiteResult.isoCode || "PE" === this.websiteResult.isoCode ? o : "LEFT" === this.websiteResult.currencyPosition ? "".concat(this.websiteResult.currencySymbol, " ").concat(o) : "".concat(o, " ").concat(this.websiteResult.currencySymbol)
            }
            ,
            t.prototype.splitWord = function(e) {
                return e.split(";")
            }
            ,
            t.prototype.getWording = function(e) {
                var t = this.cartList;
                return t && t.translate && t.translate[e] ? t.translate[e] : e
            }
            ,
            le([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            le([Object(l.Getter)("translation")], t.prototype, "translation", void 0),
            le([Object(l.Getter)("getEcObject")], t.prototype, "getEcObject", void 0),
            le([Object(l.Getter)("websiteId")], t.prototype, "websiteId", void 0),
            le([Object(l.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            le([Object(l.Getter)("websiteObj")], t.prototype, "websiteObj", void 0),
            le([Object(c.Prop)()], t.prototype, "cartList", void 0),
            t = le([Object(c.Component)({
                components: {
                    ButtonRed: ce.a
                }
            })], t)
        }(c.Vue)
          , he = de
          , pe = n(390);
        var _e = Object(x.a)(he, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return "" !== e.i18AccountLang ? t("div", {
                class: e.$style.bagWrapper
            }, [t("button", {
                class: ["bagButton", e.$style.bagButton, Object(o.a)({}, e.$style.isActivity, e.isDropDownActived)],
                attrs: {
                    "aria-label": "".concat(e.displayedQuantity, " ").concat(e.translation.Aria_cart),
                    tabindex: "0",
                    "aria-haspopup": "true",
                    "aria-expanded": e.isDropDownActived
                },
                on: {
                    click: e.bagIconClick
                }
            }, [t("svg", {
                class: ["svg-icon", Object(o.a)({}, e.$style.isRed, e.isDropDownActived)],
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "19.187",
                    height: "19",
                    "data-name": "icon-Mini Cart",
                    viewBox: "0 0 19.187 19",
                    "svg-inline": "",
                    alt: "bag",
                    role: "presentation",
                    focusable: "false"
                }
            }, [t("path", {
                attrs: {
                    d: "M19.018 5a.755.755 0 00-.563-.257h-4.047a4.807 4.807 0 00-9.614 0H.748A.737.737 0 00.186 5a.726.726 0 00-.178.6l1.836 12.768a.734.734 0 00.73.632h14.034a.734.734 0 00.73-.632L19.176 5.6a.714.714 0 00-.158-.6zM9.602 1.481a3.335 3.335 0 013.326 3.267H6.275a3.335 3.335 0 013.327-3.267zm6.376 16.038H3.226L1.608 6.228h16z",
                    "data-name": "icon-Mini Cart"
                }
            })]), e._v(" "), e.displayedQuantity ? t("span", {
                class: e.$style.bagItemNum,
                attrs: {
                    "aria-hidden": "true",
                    tabindex: "0"
                }
            }, [e._v(e._s(e.displayedQuantity))]) : e._e()]), e._v(" "), t("div", {
                class: ["bagDropdownMenu", e.$style.bagDropdownMenu, Object(o.a)({}, e.$style.isMenuShow, e.isDropDownActived)],
                style: "left: ".concat(e.isRtlArea ? "-" + e.rightWidth + "px" : "auto", "; right: ").concat(e.isRtlArea ? "auto" : "-" + e.rightWidth + "px")
            }, [t("button", {
                class: e.$style.closeButton,
                attrs: {
                    "aria-label": "close button",
                    tabindex: "0",
                    type: "button"
                },
                on: {
                    click: e.closeMenu,
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.closeMenu.apply(null, arguments)
                    }
                }
            }, [t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    alt: "close",
                    role: "presentation",
                    focusable: "false"
                }
            }, [t("path", {
                attrs: {
                    d: "M28 5.41L26.59 4 16 14.59 5.41 4 4 5.41 14.59 16 4 26.59 5.41 28 16 17.41 26.59 28 28 26.59 17.41 16 28 5.41z"
                }
            })])]), e._v(" "), e.bagItemsQuantity > 0 ? t("div", {
                class: e.$style.bagContent
            }, [t("p", {
                class: e.$style.bagTitle
            }, [t("span", [e._v(e._s(e.splitWord(e.getWording("items_in_cart"))[0]))]), e._v("\n        " + e._s(e.splitWord(e.getWording("items_in_cart"))[1]) + "\n      ")]), e._v(" "), t("ul", {
                class: e.$style.bagItemList
            }, e._l(e.displayedItems, (function(n, o) {
                return t("li", {
                    key: o,
                    class: e.$style.bagItemContent
                }, [t("a", {
                    class: e.$style.bagItemLink,
                    attrs: {
                        href: n.buy_page_url
                    }
                }, [t("div", {
                    class: e.$style.bagItemImg,
                    style: {
                        backgroundImage: "url(".concat(n.product.small_image.url, ")")
                    }
                })]), e._v(" "), t("div", {
                    class: e.$style.bagItemData
                }, [t("a", {
                    class: e.$style.bagItemLink,
                    attrs: {
                        href: n.buy_page_url
                    }
                }, [t("p", {
                    class: e.$style.bagItemName
                }, [e._v(e._s(n.product.name))])]), e._v(" "), n.additional_message ? t("p", {
                    class: e.$style.bagItemPlusSaleName
                }, [e._v("\n              " + e._s(n.additional_message) + "\n            ")]) : e._e(), e._v(" "), t("div", {
                    class: e.$style.bagItmInfo
                }, [t("p", {
                    class: e.$style.bagItemCount
                }, [e._v("X " + e._s(n.quantity))]), e._v(" "), "us" === e.lang && "ca-en" === e.lang && "ca-fr" === e.lang ? t("p", {
                    class: e.$style.bagItemPrice
                }, [e._v("\n                " + e._s(e.currencyHandler(n.prices.row_total.value)) + "\n              ")]) : t("p", {
                    class: e.$style.bagItemPrice
                }, [e._v("\n                " + e._s(e.currencyHandler(n.prices.row_total_including_tax.value)) + "\n              ")])])])])
            }
            )), 0), e._v(" "), e.itemsMoreThanThree ? t("p", {
                class: e.$style.moreItemText
            }, [e._v(e._s(e.getWording("more_items")))]) : e._e(), e._v(" "), t("p", {
                class: e.$style.subTotalText
            }, [e._v("\n        " + e._s(e.getWording("cart_subtotal")) + " \n        "), "us" === e.lang && "ca-en" === e.lang && "ca-fr" === e.lang ? t("span", [e._v(e._s(e.currencyHandler(e.cartList.prices.subtotal_excluding_tax.value)))]) : t("span", [e._v(e._s(e.currencyHandler(e.cartList.prices.subtotal_including_tax.value)))])]), e._v(" "), t("ButtonRed", {
                attrs: {
                    buttonData: e.cartButtonData,
                    isMaxWidth: !0,
                    isRogSite: !1,
                    isGA: !0,
                    isMiniCartButton: !0
                }
            })], 1) : t("div", {
                class: e.$style.emptyText
            }, [t("p", [e._v(e._s(e.translation.Header_Bag_Empty))])])])]) : e._e()
        }
        ), [], !1, (function(e) {
            this.$style = pe.default.locals || pe.default
        }
        ), null, null)
          , ge = _e.exports
          , fe = function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }()
          , be = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , me = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEnd = !1,
                t
            }
            return fe(t, e),
            Object.defineProperty(t.prototype, "isYoutube", {
                get: function() {
                    return !(!this.adsUrl || !(this.adsUrl.indexOf("https://youtu.be/") > -1 || this.adsUrl.indexOf("https://www.youtube.com/") > -1 || this.adsUrl.indexOf("https://www.youtube-nocookie.com/") > -1))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isFB", {
                get: function() {
                    return !!(this.adsUrl && this.adsUrl.indexOf("facebook") > -1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "adsImgUrl", {
                get: function() {
                    return "undefined" != typeof window && this.popUpAds && "" !== this.popUpAds.mediaPC ? this.popUpAds.mediaPC : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "adsMobileImgUrl", {
                get: function() {
                    return "undefined" != typeof window && this.popUpAds && "" !== this.popUpAds.mediaMobile ? this.popUpAds.mediaMobile : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "adsAltPC", {
                get: function() {
                    return "undefined" != typeof window && this.popUpAds && this.popUpAds.altPC && "" !== this.popUpAds.altPC ? this.popUpAds.altPC : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "adsAltMobile", {
                get: function() {
                    return "undefined" != typeof window && this.popUpAds && this.popUpAds.altMobile && "" !== this.popUpAds.altMobile ? this.popUpAds.altMobile : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "adsUrl", {
                get: function() {
                    return this.popUpAds && "" !== this.popUpAds.url ? this.popUpAds.url : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    return this.routeInfo ? this.routeInfo.websitePath : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.fbHandler = function(e) {
                var t = "";
                return e.split("?v=").length > 1 && (t = e.split("?v=")[1].split("&")[0]),
                "https://www.facebook.com/plugins/video.php?height=518&href=https://www.facebook.com/asusrogmalaysia/videos/".concat(t, "/&show_text=false&width=1345&t=0")
            }
            ,
            t.prototype.youtubeHandler = function(e) {
                var t = "";
                return e ? (e.split("?v=").length > 1 ? t = e.split("?v=")[1].split("&")[0] : e.indexOf("https://www.youtube-nocookie.com/embed/") > -1 && e.split("https://www.youtube-nocookie.com/embed/").length > 1 ? t = e.split("?")[0].split("https://www.youtube-nocookie.com/embed/")[1] : e.indexOf("https://www.youtube.com/embed/") > -1 && e.split("https://www.youtube.com/embed/").length > 1 ? t = e.split("?")[0].split("https://www.youtube.com/embed/")[1] : e.indexOf("https://youtu.be/") > -1 && e.split("https://youtu.be/").length > 1 && (t = e.split("?")[0].split("https://youtu.be/")[1]),
                "https://www.youtube-nocookie.com/embed/".concat(t)) : ""
            }
            ,
            t.prototype.closeLightBox = function() {
                this.$emit("closeBox", !1)
            }
            ,
            t.prototype.closeDate = function() {
                var e = new Date
                  , t = e.getUTCFullYear()
                  , n = e.getUTCMonth() + 1
                  , o = e.getUTCDate()
                  , r = e.getUTCHours() + 8
                  , c = e.getUTCMinutes()
                  , s = e.getUTCSeconds();
                new Date(t,n,o,r,c,s).getTime() > new Date(2020,9,16,23,59,59).getTime() && (this.isEnd = !0)
            }
            ,
            t.prototype.isShowHandler = function() {
                this.$emit("update:isShow", !1)
            }
            ,
            t.prototype.closeHandler = function(e) {
                return window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "buttons",
                    event_action_DL: "clicked",
                    event_label_DL: "close_Pop-up"
                }),
                document.getElementsByTagName("html")[0].classList.remove("fixScroll"),
                e.target.className.baseVal && e.target.className.baseVal.indexOf("closeLightBox") > -1 || e.target.tagName && "path" === e.target.tagName || e.target.className && e.target.className.indexOf("AdvertisingActivityWrapper") > -1 ? (this.isShowHandler(),
                void Object(I.d)("rog_close_advert", encodeURI("1"), "")) : void 0
            }
            ,
            t.prototype.focusOnAdvertise = function() {
                var e = this;
                this.$nextTick((function() {
                    setTimeout((function() {
                        var t = e.$refs.advertiseWrapper;
                        t && t.focus()
                    }
                    ), 500)
                }
                ))
            }
            ,
            t.prototype.gaHandler = function() {
                var e = this.adsUrl;
                window.dataLayer && window.dataLayer.push({
                    event: "promotionClick",
                    ecommerce: {
                        promoClick: {
                            promotions: [{
                                id: e,
                                name: "live stream",
                                position: "homepage_Pop-up"
                            }]
                        }
                    },
                    eventCallback: function() {
                        window.location.href = e
                    }
                })
            }
            ,
            t.prototype.gaDefaultHandler = function() {
                window.dataLayer && this.popUpAds && this.popUpAds.url && window.dataLayer.push({
                    event: "promotionView",
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: this.adsUrl,
                                name: "live stream",
                                position: "homepage_Pop-up"
                            }]
                        }
                    }
                })
            }
            ,
            t.prototype.mounted = function() {
                var e = this;
                this.closeDate(),
                this.focusOnAdvertise(),
                setTimeout((function() {
                    e.gaDefaultHandler()
                }
                ), 1500)
            }
            ,
            be([Object(l.Action)("getPopUpAds")], t.prototype, "getPopUpAds", void 0),
            be([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            be([Object(l.Getter)("popUpAds")], t.prototype, "popUpAds", void 0),
            be([Object(l.Getter)("websiteId")], t.prototype, "websiteId", void 0),
            be([Object(c.Prop)({
                default: !1
            })], t.prototype, "isShow", void 0),
            t = be([Object(c.Component)({})], t)
        }(c.Vue)
          , ve = me
          , we = n(391);
        var ye = Object(x.a)(ve, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return e.isShow && e.popUpAds && Object.keys(e.popUpAds).length > 0 && "" !== e.popUpAds.mediaPC ? t("div", [t("div", {
                ref: "advertiseWrapper",
                class: e.$style.AdvertisingActivityWrapper,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: e.closeHandler,
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.isShowHandler.apply(null, arguments)
                    }
                }
            }, [t("div", {
                class: [e.$style.AdvertisingActivityContent, Object(o.a)({}, e.$style.youtubeContent, e.isYoutube)]
            }, [t("button", {
                staticClass: "closeLightBox",
                class: e.$style.closeLightBox,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    click: e.isShowHandler
                }
            }, [t("svg", {
                class: "closeLightBox",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    role: "none",
                    focusable: "false",
                    "aria-hidden": "true",
                    alt: "no image",
                    title: "no image",
                    loading: "lazy"
                }
            }, [t("path", {
                attrs: {
                    d: "M28 5.41L26.59 4 16 14.59 5.41 4 4 5.41 14.59 16 4 26.59 5.41 28 16 17.41 26.59 28 28 26.59 17.41 16 28 5.41z"
                }
            })])]), e._v(" "), t("div", {
                class: e.$style.AdsWrapper
            }, [t("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isYoutube && !e.isFB,
                    expression: "!isYoutube && !isFB"
                }],
                attrs: {
                    href: e.adsUrl
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.gaHandler()
                    }
                }
            }, [t("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.adsImgUrl,
                    expression: "adsImgUrl"
                }],
                class: e.$style.desktopSize,
                attrs: {
                    src: encodeURI("".concat(e.adsImgUrl)),
                    alt: e.adsAltPC,
                    loading: "lazy"
                }
            }), e._v(" "), t("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.adsMobileImgUrl,
                    expression: "adsMobileImgUrl"
                }],
                class: e.$style.mobileSize,
                attrs: {
                    src: encodeURI("".concat(e.adsMobileImgUrl)),
                    alt: e.adsAltMobile,
                    loading: "lazy"
                }
            })]), e._v(" "), t("iframe", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isFB,
                    expression: "isFB"
                }],
                staticStyle: {
                    border: "none",
                    overflow: "hidden"
                },
                attrs: {
                    width: "100%",
                    height: "100%",
                    src: "".concat(e.fbHandler(e.adsUrl)),
                    scrolling: "no",
                    frameborder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                    allowfullscreen: ""
                }
            }), e._v(" "), t("iframe", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isYoutube,
                    expression: "isYoutube"
                }],
                attrs: {
                    width: "100%",
                    height: "100%",
                    src: "".concat(e.youtubeHandler(e.adsUrl)),
                    frameborder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowfullscreen: ""
                }
            })])])])]) : e._e()
        }
        ), [], !1, (function(e) {
            this.$style = we.default.locals || we.default
        }
        ), null, null)
          , Pe = ye.exports
          , Ie = function() {
            var e = function(t, b) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, b) {
                    e.__proto__ = b
                }
                || function(e, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }
                ,
                e(t, b)
            };
            return function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function n() {
                    this.constructor = t
                }
                e(t, b),
                t.prototype = null === b ? Object.create(b) : (n.prototype = b.prototype,
                new n)
            }
        }()
          , ke = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }
          , Le = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , Oe = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , Ce = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isScrolled = !1,
                t.isMotherboards = !1,
                t.isBurgerActived = !1,
                t.isFixed = !1,
                t.isRogSite = !0,
                t.isAccount = !1,
                t.isRegion = !1,
                t.isMobileStatus = !1,
                t.showUserListMobile = !1,
                t.isSmallItem = !1,
                t.isDisplay = !1,
                t.isMobileDisplay = !1,
                t.showMessageListMobile = !1,
                t.AccessibilityPolicySite = "/us",
                t.mobileDropDownMenuActivedMeta = null,
                t.headerBasicPosition = 0,
                t.windowSize = null,
                t.menuWidth = 286,
                t.searchPanelStatus = !1,
                t.headerListPosition = {
                    top: 0,
                    left: -30,
                    right: 0
                },
                t.mobilePosition = {
                    top: 50,
                    left: 0,
                    right: 0
                },
                t.dropDownMenuActivedMeta = null,
                t.activeNumber = -1,
                t.tabClickStatus = !1,
                t.exportWebsitePath = "global",
                t.exportStatus = !1,
                t.exportWebsiteID = 0,
                t.headerParams = {
                    WebsiteId: null
                },
                t.mainMenuActivedStatus = {
                    leave: !0
                },
                t.subMenuActivedStatus = {
                    leave: !0
                },
                t.ecAreaList = {
                    es: "rog_es_ES",
                    it: "rog_it_IT",
                    fr: "rog_fr_FR",
                    se: "rog_sv_SE",
                    dk: "rog_da_DK",
                    fi: "rog_fi_FI",
                    cz: "rog_cs_CZ",
                    pl: "rog_pl_PL",
                    hu: "rog_hu_HU",
                    de: "rog_de_DE",
                    nl: "rog_nl_NL",
                    pt: "rog_pt_PT",
                    "be-nl": "rog_nl_BE",
                    "be-fr": "rog_fr_BE",
                    id: "rog_id_ID",
                    uk: "rog_en_UK",
                    kr: "rog_ko_KR",
                    in: "rog_en_IN",
                    "ca-en": "rog_en_CA",
                    "ca-fr": "rog_fr_CA",
                    co: "rog_es_CO",
                    cl: "rog_es_CL",
                    us: "rog_en_US",
                    ro: "rog_ro_RO",
                    tw: "rog_zh_TW",
                    au: "rog_en_AU",
                    br: "rog_pt_BR",
                    ru: "rog_ru_RU",
                    "ua-ua": "rog_ua_UA",
                    "me-en": "rog_en_AE",
                    "me-ar": "rog_ar_AE",
                    hk: "rog_en_HK",
                    jp: "rog_jp_JP",
                    th: "rog_th_TH",
                    vn: "rog_vi_VN",
                    pe: "rog_es_PE",
                    za: "rog_en_ZA"
                },
                t.cartList = null,
                t.ECToken = "",
                t.ECCartId = "",
                t.ECMemberToken = "",
                t.ECMemberCartId = "",
                t.ECGuestId = "",
                t.resetToken = !1,
                t.triggerECHandler = !1,
                t.alertStatus = !1,
                t.lastPosition = 0,
                t.topValue = 0,
                t.accountLanguage = "",
                t.accountLang = [{
                    WebsiteId: 1,
                    WebPath: "global",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 2,
                    WebPath: "mx",
                    AccountLang: "es-es"
                }, {
                    WebsiteId: 3,
                    WebPath: "es",
                    AccountLang: "es-es"
                }, {
                    WebsiteId: 4,
                    WebPath: "th",
                    AccountLang: "th-th"
                }, {
                    WebsiteId: 5,
                    WebPath: "tw",
                    AccountLang: "zh-tw"
                }, {
                    WebsiteId: 6,
                    WebPath: "us",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 7,
                    WebPath: "br",
                    AccountLang: "pt-br"
                }, {
                    WebsiteId: 8,
                    WebPath: "ca-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 9,
                    WebPath: "ca-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 10,
                    WebPath: "latin",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 11,
                    WebPath: "tr",
                    AccountLang: "tr-tr"
                }, {
                    WebsiteId: 12,
                    WebPath: "it",
                    AccountLang: "it-it"
                }, {
                    WebsiteId: 13,
                    WebPath: "jp",
                    AccountLang: "ja-jp"
                }, {
                    WebsiteId: 14,
                    WebPath: "me-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 15,
                    WebPath: "lk",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 16,
                    WebPath: "in",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 17,
                    WebPath: "bd",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 18,
                    WebPath: "cn",
                    AccountLang: "zh-cn"
                }, {
                    WebsiteId: 19,
                    WebPath: "hk",
                    AccountLang: "zh-tw"
                }, {
                    WebsiteId: 20,
                    WebPath: "vn",
                    AccountLang: "vi-vn"
                }, {
                    WebsiteId: 21,
                    WebPath: "kr",
                    AccountLang: "ko-kr"
                }, {
                    WebsiteId: 22,
                    WebPath: "ru",
                    AccountLang: "ru-ru"
                }, {
                    WebsiteId: 23,
                    WebPath: "sg",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 24,
                    WebPath: "nz",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 25,
                    WebPath: "ph",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 26,
                    WebPath: "id",
                    AccountLang: "id-id"
                }, {
                    WebsiteId: 27,
                    WebPath: "au",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 28,
                    WebPath: "my",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 29,
                    WebPath: "de",
                    AccountLang: "de-de"
                }, {
                    WebsiteId: 30,
                    WebPath: "pl",
                    AccountLang: "pl-pl"
                }, {
                    WebsiteId: 31,
                    WebPath: "no",
                    AccountLang: "no"
                }, {
                    WebsiteId: 32,
                    WebPath: "se",
                    AccountLang: "sv-se"
                }, {
                    WebsiteId: 33,
                    WebPath: "dk",
                    AccountLang: "da-dk"
                }, {
                    WebsiteId: 34,
                    WebPath: "uk",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 35,
                    WebPath: "sk",
                    AccountLang: "sk-sk"
                }, {
                    WebsiteId: 36,
                    WebPath: "cz",
                    AccountLang: "cs-cz"
                }, {
                    WebsiteId: 37,
                    WebPath: "ch-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 39,
                    WebPath: "ch-de",
                    AccountLang: "de-de"
                }, {
                    WebsiteId: 40,
                    WebPath: "ro",
                    AccountLang: "ro-ro"
                }, {
                    WebsiteId: 41,
                    WebPath: "rs",
                    AccountLang: "sr"
                }, {
                    WebsiteId: 43,
                    WebPath: "hu",
                    AccountLang: "hu-hu"
                }, {
                    WebsiteId: 44,
                    WebPath: "fi",
                    AccountLang: "fi-fi"
                }, {
                    WebsiteId: 45,
                    WebPath: "pt",
                    AccountLang: "pt-pt"
                }, {
                    WebsiteId: 46,
                    WebPath: "fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 47,
                    WebPath: "be-nl",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 48,
                    WebPath: "be-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 49,
                    WebPath: "nl",
                    AccountLang: "nl-nl"
                }, {
                    WebsiteId: 50,
                    WebPath: "gr",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 51,
                    WebPath: "za",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 52,
                    WebPath: "me-ar",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 53,
                    WebPath: "bg",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 54,
                    WebPath: "ie",
                    AccountLang: "he-il"
                }, {
                    WebsiteId: 55,
                    WebPath: "il",
                    AccountLang: "he-il"
                }, {
                    WebsiteId: 56,
                    WebPath: "ea",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 57,
                    WebPath: "middleeast-fa",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 58,
                    WebPath: "ua-ua",
                    AccountLang: "uk-ua"
                }, {
                    WebsiteId: 59,
                    WebPath: "nafr-ar",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 60,
                    WebPath: "africa-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 61,
                    WebPath: "np",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 62,
                    WebPath: "wa",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 64,
                    WebPath: "lt",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 65,
                    WebPath: "lv",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 66,
                    WebPath: "ee",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 67,
                    WebPath: "kz",
                    AccountLang: "ru-ru"
                }, {
                    WebsiteId: 68,
                    WebPath: "mm",
                    AccountLang: "mm"
                }, {
                    WebsiteId: 69,
                    WebPath: "hk-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 70,
                    WebPath: "co",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 71,
                    WebPath: "cl",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 72,
                    WebPath: "ar",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 73,
                    WebPath: "pe",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 74,
                    WebPath: "ea-sw",
                    AccountLang: "sw-ea"
                }, {
                    WebsiteId: 78,
                    WebPath: "ch-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 81,
                    WebPath: "bn",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 82,
                    WebPath: "gr-el",
                    AccountLang: "el"
                }, {
                    WebsiteId: 85,
                    WebPath: "eg",
                    AccountLang: "ar-eg"
                }, {
                    WebsiteId: 86,
                    WebPath: "eg-en",
                    AccountLang: "en-eg"
                }, {
                    WebsiteId: 87,
                    WebPath: "bt",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 88,
                    WebPath: "uy",
                    AccountLang: "es-uy"
                }, {
                    WebsiteId: 89,
                    WebPath: "py",
                    AccountLang: "es-py"
                }, {
                    WebsiteId: 90,
                    WebPath: "ec",
                    AccountLang: "es-EC"
                }, {
                    WebsiteId: 91,
                    WebPath: "pk",
                    AccountLang: "en-PK"
                }, {
                    WebsiteId: 92,
                    WebPath: "kh",
                    AccountLang: "en-KH"
                }, {
                    WebsiteId: 93,
                    WebPath: "sa-ar",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 94,
                    WebPath: "sa-en",
                    AccountLang: "en-us"
                }],
                t
            }
            return Ie(t, e),
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    var e = "";
                    return "us" === (e = Object.keys(this.routeInfo).length > 0 ? this.routeInfo.WebsitePath ? this.routeInfo.WebsitePath : this.routeInfo.websitePath : "undefined" != typeof window && window.AsusAPIConfig ? window.AsusAPIConfig.websitePath : this.exportWebsitePath) && (this.AccessibilityPolicySite = "/us"),
                    e
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "asusLinkArea", {
                get: function() {
                    if (this.$route && this.routeInfo) {
                        var area = "global" === this.routeInfo.websitePath ? "" : "/".concat(this.routeInfo.websitePath, "/");
                        return "/cn/" === area.toLowerCase() ? "https://w3.asus.com.cn" : "https://www.asus.com".concat(area)
                    }
                    var e = this.$root ? this.$root.$data : null;
                    if (e && Object.keys(e).length > 0) {
                        var path = "global" === e.websitePath ? "" : "/".concat(e.websitePath, "/");
                        return "/cn/" === path.toLowerCase() ? "https://w3.asus.com.cn" : "https://www.asus.com".concat(path)
                    }
                    return ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "createUrl", {
                get: function() {
                    var e, t;
                    if (null === (t = null === (e = this.accountStatus) || void 0 === e ? void 0 : e.userInfo) || void 0 === t ? void 0 : t.mediaUrl)
                        return this.accountStatus.userInfo.mediaUrl
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dirType", {
                get: function() {
                    if (this.$route)
                        switch (this.routeInfo.websitePath) {
                        case "il":
                        case "me-ar":
                        case "sa-ar":
                        case "eg":
                            return this.textRightToLeft(),
                            "rtl";
                        default:
                            return "ltr"
                        }
                    else if (this.exportWebsitePath)
                        switch (this.exportWebsitePath) {
                        case "il":
                        case "me-ar":
                        case "sa-ar":
                        case "eg":
                            return this.textRightToLeft(),
                            document.documentElement.setAttribute("data-dirtype", "rtl"),
                            "rtl";
                        default:
                            return this.headerListPosition.left = -30,
                            this.headerListPosition.right = "auto",
                            document.documentElement.setAttribute("data-dirtype", "ltr"),
                            "ltr"
                        }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isHomePage", {
                get: function() {
                    var e, t;
                    return "1" === (null === (t = null === (e = this.$route) || void 0 === e ? void 0 : e.meta) || void 0 === t ? void 0 : t.homePage)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isECSite", {
                get: function() {
                    return null !== this.getEcObject.storeviewCode && "" !== this.getEcObject.storeviewCode
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.watchEcObject = function(e, t) {
                !this.triggerECHandler && "" === this.ECToken && e && Object.keys(e).length > 0 && e.storeviewCode && (this.triggerECHandler = !0,
                this.setSessionStorageHandler(),
                this.ecHandler())
            }
            ,
            t.prototype.canonicalHandler = function() {
                document.querySelector('link[rel="canonical"]').href = encodeURI(window.location.href)
            }
            ,
            t.prototype.textRightToLeft = function() {
                this.headerListPosition.left = "auto",
                this.headerListPosition.right = -30
            }
            ,
            t.prototype.debounceDisplaySubMenu = function() {
                this.displaySubMenu()
            }
            ,
            t.prototype.beforeMount = function() {
                this.advertisingCookieHandler()
            }
            ,
            t.prototype.mounted = function() {
                var e = this;
                "undefined" != typeof window && (this.windowSize = Object(P.a)(),
                this.setWindowSize(),
                window.addEventListener("resize", this.setWindowSize, !1)),
                document.documentElement.addEventListener("click", (function(t) {
                    var n = t.target;
                    -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/"),
                    n.closest(".searchHeaderPanel") || n.closest(".searchButton") || (e.searchPanelStatus = !1)
                }
                )),
                window.refreshCart = function() {
                    e.setSessionStorageHandler(),
                    e.ecHandler()
                }
                ,
                this.exportHeader(),
                !this.$route && window.AsusAPIConfig && this.getEcObject.storeviewCode ? (this.setSessionStorageHandler(),
                this.ecHandler()) : setTimeout((function() {
                    e.isECSite && (e.setSessionStorageHandler(),
                    e.ecHandler())
                }
                ), 2e3)
            }
            ,
            t.prototype.exportHeader = function() {
                if (this.$root && !this.$route) {
                    var e = this.$root ? this.$root.$data : null;
                    if (this.exportStatus = !0,
                    e && Object.keys(e).length > 0) {
                        if (this.exportWebsiteID = e.websiteID,
                        window.AsusAPIConfig) {
                            var t = window.AsusAPIConfig;
                            this.exportWebsitePath = t.websitePath,
                            this.isRogSite = !1,
                            this.isAccount = t && t.simplifyHeader || !1
                        }
                        this.setHeaderParam()
                    }
                }
            }
            ,
            t.prototype.setHeaderParam = function() {
                var e = this
                  , t = {
                    WebsiteId: this.exportWebsiteID
                };
                this.headerParams = t;
                var n = this.$root ? this.$root.$data : null
                  , o = (n.websitePath ? n.websitePath : this.exportWebsitePath,
                encodeURI(window.location.host))
                  , r = o.replace(".asus.com", "");
                if ("https://rog.asus.com.cn" === o)
                    _()({
                        method: "get",
                        url: "https://api-rog.asus.com.cn/recent-data/api/v3/Common/Header?WebsiteId=".concat(this.exportWebsiteID, "&systemCode=").concat(r)
                    }).then((function(t) {
                        e.rogExportHeader(t.data)
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ));
                else {
                    var c = "api-rog.asus.com";
                    o.indexOf("dev") > -1 ? c = "dev-api-rog.asus.com" : o.indexOf("stage") > -1 ? c = "stage-api-rog.asus.com" : o.indexOf("rogmars") > -1 && (c = "api-rogmars.asus.com"),
                    _()({
                        method: "get",
                        url: "https://".concat(c, "/recent-data/api/v3/Common/Header?WebsiteId=").concat(this.exportWebsiteID, "&systemCode=").concat(r)
                    }).then((function(t) {
                        e.rogExportHeader(t.data.result)
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    ))
                }
            }
            ,
            t.prototype.displaySubMenu = function() {
                this.windowSize = Object(P.a)(),
                document.documentElement.clientWidth > 1024 && (this.subMenuActivedStatus.leave && this.mainMenuActivedStatus.leave || (this.isDisplay = !0),
                this.subMenuActivedStatus.leave && this.mainMenuActivedStatus.leave && (this.isDisplay = !1))
            }
            ,
            t.prototype.checkMenuItems = function(e) {
                var t = !1;
                return e && e.items && Object.keys(e.items).length > 0 && e.items.forEach((function(meta) {
                    meta.subItem.length > 0 && (t = !0)
                }
                )),
                t
            }
            ,
            t.prototype.chkMenuApisObject = function(e) {
                return !!(e && e.length > 0) && (this.settingHeaderTop(),
                !0)
            }
            ,
            t.prototype.settingHeaderTop = function() {
                var e = this.$refs.header
                  , t = this.$refs.menuList;
                if (t && e) {
                    var n = e.clientHeight;
                    "undefined" != typeof window && (window.innerWidth <= 1450 && this.isSmallItem ? (this.headerBasicPosition = 20,
                    this.headerListPosition.top = 20) : (this.headerBasicPosition = n - t.offsetTop,
                    this.headerListPosition.top = n - t.offsetTop))
                }
            }
            ,
            t.prototype.menuClick = function(meta, e) {
                e.preventDefault(),
                document.documentElement.clientWidth <= 1024 && (this.isMobileDisplay = !this.isMobileDisplay,
                this.mobileDropDownMenuActivedMeta = meta)
            }
            ,
            t.prototype.tabClick = function(e, t, n) {
                t.preventDefault(),
                n !== this.activeNumber && (this.tabClickStatus = !1,
                this.menuMouseLeave()),
                this.activeNumber = n,
                this.tabClickStatus ? (this.menuMouseLeave(),
                this.tabClickStatus = !this.tabClickStatus) : (this.menuListOver(),
                this.menuMouseOver(e, t, n),
                this.tabClickStatus = !this.tabClickStatus),
                setTimeout((function() {
                    document.querySelector(".dropMenuItem > a").focus()
                }
                ), 100)
            }
            ,
            t.prototype.menuMouseLeave = function() {
                this.mainMenuActivedStatus.leave = !0,
                this.activeNumber = -1,
                this.debounceDisplaySubMenu()
            }
            ,
            t.prototype.closeMenuHandler = function() {
                this.mainMenuActivedStatus.leave = !0,
                this.subMenuActivedStatus.leave = !0,
                this.debounceDisplaySubMenu()
            }
            ,
            t.prototype.menuMouseOver = function(e, t, n) {
                t.target && (this.dropDownMenuActivedMeta = e,
                this.activeNumber = n,
                this.setMenuWidth(this.dropDownMenuActivedMeta))
            }
            ,
            t.prototype.menuListOver = function() {
                this.mainMenuActivedStatus.leave = !1,
                this.debounceDisplaySubMenu()
            }
            ,
            t.prototype.closeMobileMenuList = function() {
                this.isMobileDisplay = !1
            }
            ,
            t.prototype.searchPanelHandler = function() {
                this.gaSetting("search"),
                this.searchPanelStatus = !this.searchPanelStatus,
                this.searchPanelStatus ? setTimeout((function() {
                    document.getElementById("search").focus()
                }
                ), 100) : setTimeout((function() {
                    document.getElementById("searchButton").focus()
                }
                ), 100)
            }
            ,
            t.prototype.subMenuStatus = function(e) {
                this.subMenuActivedStatus.leave = e.leave,
                this.debounceDisplaySubMenu()
            }
            ,
            t.prototype.setMenuWidth = function(meta) {
                var time = 0;
                meta.items.length > 0 ? meta.items.length > 1 ? (meta.items.forEach((function(e) {
                    e.subItem.length > 8 && (time += 1)
                }
                )),
                this.menuWidth = time > 0 ? 190 * meta.items.length + 52 + 52 + 38 : 190 * meta.items.length + 102) : this.menuWidth = 286 : this.menuWidth = 210 * meta.items.length + 84
            }
            ,
            t.prototype.burgerClick = function() {
                window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "button",
                    event_action_DL: "clicked",
                    event_label_DL: "display the top menu",
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host && void 0 !== window._hmt && window._hmt && window._hmt.push(["_trackEvent", "button", "clicked", "display the top menu"]),
                document.querySelector(".mobileMenu").classList.add("close"),
                this.isMobileDisplay = !1,
                this.isBurgerActived = !this.isBurgerActived;
                var e = document.getElementsByTagName("html")[0];
                this.isBurgerActived ? e.classList.add("fixScroll") : (this.isMobileDisplay = !1,
                e.classList.remove("fixScroll")),
                this.showUserListMobile = !1,
                this.showMessageListMobile = !1,
                setTimeout((function() {
                    document.querySelector(".mobileMenu").classList.remove("close")
                }
                ), 500)
            }
            ,
            t.prototype.isLogin = function() {
                return !("undefined" == typeof window || !Object(I.b)("aticket"))
            }
            ,
            t.prototype.closeUserMobileHandler = function() {
                this.showUserListMobile = !1
            }
            ,
            t.prototype.mobileSubMenuClickEvent = function() {
                this.isMobileDisplay = !1
            }
            ,
            t.prototype.setWindowSize = function() {
                this.windowSize = Object(P.a)(),
                this.windowSize.width <= 1024 ? this.isMobileStatus = !0 : this.isMobileStatus = !1,
                this.windowSize.width <= 1024 && (this.isDisplay = !1),
                this.setMenuWidthHandler()
            }
            ,
            t.prototype.setMenuWidthHandler = function() {
                var e, t = document.querySelector(".headerMenuList") ? null === (e = document.querySelector(".headerMenuList")) || void 0 === e ? void 0 : e.clientWidth : 1520, n = 0, o = 20;
                document.querySelectorAll(".headerItem").forEach((function(e) {
                    document.documentElement.clientWidth <= 1200 ? o = 10 : document.documentElement.clientWidth <= 1300 ? o = 20 : document.documentElement.clientWidth <= 1450 && (o = 28),
                    n = n + e.clientWidth + o
                }
                )),
                n > t || document.documentElement.clientWidth <= 1300 ? this.isSmallItem = !0 : this.isSmallItem = !1
            }
            ,
            t.prototype.userMobileHandler = function() {
                this.gaSetting("member"),
                this.showUserListMobile = !0
            }
            ,
            t.prototype.triggerDisplaySubMenu = function(e) {
                this.displaySubMenu(),
                this.gaMenuClick(e.class, e.name)
            }
            ,
            t.prototype.goHomeLink = function() {
                if ("undefined" != typeof window) {
                    if (this.$route) {
                        if (this.routeInfo) {
                            var area = "global" === this.routeInfo.websitePath ? "" : "".concat(this.routeInfo.websitePath, "/");
                            return "undefined" == typeof window || "rog.asus.com.cn" !== window.location.host && "stage.asus.com.cn" !== window.location.host || (area = ""),
                            "/".concat(area)
                        }
                        if (Object(I.b)("rog_site_area")) {
                            area = "global" === Object(I.b)("rog_site_area") ? "" : "/".concat(Object(I.b)("rog_site_area"), "/");
                            return "".concat(area)
                        }
                        area = "global" === window.location.pathname.split("/")[1] ? "" : "/".concat(window.location.pathname.split("/")[1], "/");
                        return "".concat(area)
                    }
                    var e = this.$root ? this.$root.$data : null;
                    if (e && Object.keys(e).length > 0) {
                        var path = "global" === e.websitePath ? "" : "/".concat(e.websitePath, "/");
                        return "undefined" != typeof window && "rog-bacchus.asus.com" === window.location.host || "undefined" != typeof window && "rogmars.asus.com" === window.location.host ? "https://rogmars.asus.com".concat(path) : "undefined" != typeof window && "rog.asus.com.cn" === window.location.host ? "https://rog.asus.com.cn" : "undefined" != typeof window && window.location.host.indexOf("stage") > -1 ? "https://stage-rog.asus.com".concat(path) : "https://rog.asus.com".concat(path)
                    }
                    return encodeURI("".concat(window.location.origin))
                }
                return "/"
            }
            ,
            t.prototype.goToHome = function() {
                if (window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-L1",
                    event_action_DL: "clicked",
                    event_label_DL: "ROG",
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host && void 0 !== window._hmt && window._hmt && window._hmt.push(["_trackEvent", "header-L1", "clicked", "ROG"]),
                this.$route) {
                    var area = encodeURI("global" === this.routeInfo.websitePath ? "" : "/".concat(this.routeInfo.websitePath, "/"));
                    "rog.asus.com.cn" === window.location.host ? window.location.href = encodeURI("".concat(window.location.origin)) : (window.location.host,
                    window.location.href = encodeURI("".concat(window.location.origin).concat(area)))
                } else {
                    var e = this.$root ? this.$root.$data : null;
                    if (e && Object.keys(e).length > 0) {
                        var path = encodeURI("global" === e.websitePath ? "" : "/".concat(e.websitePath, "/"));
                        "undefined" != typeof window && "rog-bacchus.asus.com" === window.location.host || "undefined" != typeof window && "rogmars.asus.com" === window.location.host ? window.location.href = encodeURI("https://rogmars.asus.com".concat(path)) : "undefined" != typeof window && "rog.asus.com.cn" === window.location.host ? window.location.href = encodeURI("https://rog.asus.com.cn") : "undefined" != typeof window && window.location.host.indexOf("stage") > -1 ? window.location.href = encodeURI("https://stage-rog.asus.com".concat(path)) : window.location.href = encodeURI("https://rog.asus.com".concat(path))
                    }
                }
            }
            ,
            t.prototype.usersEcToken = function() {
                return Le(this, void 0, Promise, (function() {
                    return Oe(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return this.setPlusSale(this.lang) ? [4, y.usersEcShopToken(Object(I.b)("aticket"), this.getEcObject.ecDomain)] : [3, 2];
                        case 1:
                        case 3:
                            return [2, e.sent()];
                        case 2:
                            return [4, y.usersEcToken(Object(I.b)("aticket"), this.getEcObject.ecDomain)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.usersEcCartId = function(param) {
                return Le(this, void 0, Promise, (function() {
                    return Oe(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, y.getEcCartId(param, this.getEcObject.ecDomain)];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.usersEcCustomer = function(param) {
                return Le(this, void 0, Promise, (function() {
                    return Oe(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, y.getEcCustomer(param, this.getEcObject.ecDomain)];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.usersEcCartItems = function(param) {
                return Le(this, void 0, Promise, (function() {
                    var e = this;
                    return Oe(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.setPlusSale(this.lang) ? [4, y.getShopComEcCartItems(param, this.getEcObject.ecDomain).then((function(t) {
                                e.setSessionStorage("rog_ec_cartList_".concat(e.lang), JSON.stringify(t.data.data.cart));
                                var n = t.data.data.cart;
                                e.cartList = n
                            }
                            )).catch((function(e) {
                                console.error(e)
                            }
                            ))] : [3, 2];
                        case 1:
                            return t.sent(),
                            [3, 4];
                        case 2:
                            return [4, y.getEcCartItems(param, this.getEcObject.ecDomain).then((function(t) {
                                e.setSessionStorage("rog_ec_cartList_".concat(e.lang), JSON.stringify(t.data.data.cart));
                                var n = t.data.data.cart;
                                e.cartList = n
                            }
                            )).catch((function(e) {
                                console.error(e)
                            }
                            ))];
                        case 3:
                            t.sent(),
                            t.label = 4;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.visitEcCartId = function(param) {
                return Le(this, void 0, Promise, (function() {
                    return Oe(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, y.getVisitorEcCartId(param, this.getEcObject.ecDomain)];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.setPlusSale = function(e) {
                return ["tw", "us", "ca-fr", "ca-en", "es", "it", "fr", "se", "dk", "fi", "cz", "pl", "hu", "de", "nl", "pt", "be-nl", "be-fr", "tr", "kr", "hk", "th", "id", "au", "my", "ph", "tr", "mx"].includes(e)
            }
            ,
            t.prototype.setCookiesHandler = function() {
                if (!Object(I.b)("rog_site_area")) {
                    var e = "";
                    e = Object.keys(this.routeInfo).length > 0 ? this.routeInfo.websitePath : window.AsusAPIConfig.websitePath,
                    Object(I.d)("rog_site_area", e, "")
                }
                if (!Object(I.b)("rog_site_id")) {
                    e = this.mappingWebsiteId ? this.mappingWebsiteId.toString() : window.AsusAPIConfig.websitePath;
                    Object(I.d)("rog_site_id", e, "")
                }
            }
            ,
            t.prototype.setSessionStorageHandler = function() {
                this.setCookiesHandler();
                var e = Object(I.b)("private_content_version_asus")
                  , t = this.getSessionStorage("private_content_version_asus");
                null !== e ? t && "null" !== t ? e !== t ? (this.setSessionStorage("private_content_version_asus", e),
                this.resetToken = !0) : this.resetToken = !1 : (this.setSessionStorage("private_content_version_asus", e),
                this.resetToken = !0) : this.resetToken = !1,
                this.ECToken = this.getSessionStorage("rog_ec_token_".concat(this.lang)),
                this.ECCartId = this.getSessionStorage("rog_ec_cartID_".concat(this.lang));
                ["us", "ca-fr", "ca-en", "tw", "mx", "my", "ph", "tr"].includes(this.lang) ? this.ECGuestId = Object(I.b)("asus_mg_guest_id") : this.ECGuestId = Object(I.b)("mg_guest_id"),
                this.ECMemberToken = this.getSessionStorage("rog_ec_member_token_".concat(this.lang)),
                this.ECMemberCartId = this.getSessionStorage("rog_ec_member_cartID_".concat(this.lang))
            }
            ,
            t.prototype.ecHandler = function() {
                var e = this
                  , path = "";
                Object.keys(this.routeInfo).length > 0 ? path = this.routeInfo.websitePath : window.AsusAPIConfig && (path = window.AsusAPIConfig.websitePath);
                var t = this.ecAreaList[path]
                  , n = null !== this.getEcObject.storeviewCode ? this.getEcObject.storeviewCode : t;
                Object(I.b)("aticket") || Object(I.a)("groupid_rog_".concat(this.lang)),
                Object(I.b)("aticket") ? this.ECToken && "null" !== this.ECToken ? this.resetToken ? this.usersEcToken().then((function(t) {
                    var o = t.data.data.getAuthorizationToken;
                    e.setSessionStorage("rog_ec_token_".concat(e.lang), o.token),
                    o && "" !== o.token && (e.ECToken = o.token,
                    e.getECGroupIdHandler(n),
                    e.usersEcCartId({
                        token: e.ECToken,
                        store: n
                    }).then((function(t) {
                        e.setSessionStorage("rog_ec_cartID_".concat(e.lang), t.data.data.customerCart.id),
                        e.ECCartId = t.data.data.customerCart.id,
                        e.usersEcCartItems({
                            token: e.ECToken,
                            store: n,
                            cartID: e.ECCartId
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    )))
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )) : (this.getECGroupIdHandler(n),
                this.ECCartId && "null" !== this.ECCartId ? this.getSessionStorage("rog_ec_cartList_".concat(this.lang)) && "null" !== this.getSessionStorage("rog_ec_cartList_" + this.lang) ? this.cartList = JSON.parse(this.getSessionStorage("rog_ec_cartList_".concat(this.lang))) : this.usersEcCartItems({
                    token: this.ECToken,
                    store: n,
                    cartID: this.ECCartId
                }) : this.usersEcCartId({
                    token: this.ECToken,
                    store: n
                }).then((function(t) {
                    e.setSessionStorage("rog_ec_cartID_".concat(e.lang), t.data.data.customerCart.id),
                    e.ECCartId = t.data.data.customerCart.id,
                    e.usersEcCartItems({
                        token: e.ECToken,
                        store: n,
                        cartID: e.ECCartId
                    })
                }
                )).catch((function(e) {
                    console.error(e)
                }
                ))) : this.usersEcToken().then((function(t) {
                    var o = t.data.data.getAuthorizationToken;
                    e.setSessionStorage("rog_ec_token_".concat(e.lang), o.token),
                    o && "" !== o.token && (e.ECToken = o.token,
                    e.getECGroupIdHandler(n),
                    e.usersEcCartId({
                        token: e.ECToken,
                        store: n
                    }).then((function(t) {
                        e.setSessionStorage("rog_ec_cartID_".concat(e.lang), t.data.data.customerCart.id),
                        e.ECCartId = t.data.data.customerCart.id,
                        e.usersEcCartItems({
                            token: e.ECToken,
                            store: n,
                            cartID: e.ECCartId
                        })
                    }
                    )).catch((function(e) {
                        console.error(e)
                    }
                    )))
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )) : (Object(I.b)("mg_guest_id") || Object(I.b)("asus_mg_guest_id")) && (this.ECMemberToken && "null" !== this.ECMemberToken ? this.resetToken ? y.visitorEcToken(this.ECGuestId, this.getEcObject.ecDomain).then((function(t) {
                    if (t.data.data.getAuthorizationToken) {
                        e.ECMemberToken = t.data.data.getAuthorizationToken.token;
                        var o = t.data.data.getAuthorizationToken.token
                          , param = {
                            token: o,
                            store: n
                        };
                        e.setSessionStorage("rog_ec_member_token_".concat(e.lang), o),
                        e.visitEcCartId(param).then((function(t) {
                            e.setSessionStorage("rog_ec_member_cartID_".concat(e.lang), t.data.data.createEmptyCart),
                            e.ECMemberCartId = t.data.data.createEmptyCart,
                            e.usersEcCartItems({
                                token: e.ECMemberToken,
                                store: n,
                                cartID: e.ECMemberCartId
                            })
                        }
                        )).catch((function(e) {
                            console.error(e)
                        }
                        ))
                    }
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )) : this.ECMemberCartId && "null" !== this.ECMemberCartId ? this.getSessionStorage("rog_ec_cartList_".concat(this.lang)) && "null" !== this.getSessionStorage("rog_ec_cartList_" + this.lang) ? this.cartList = JSON.parse(this.getSessionStorage("rog_ec_cartList_".concat(this.lang))) : "null" === this.getSessionStorage("rog_ec_cartList_" + this.lang) ? this.visitEcCartId({
                    token: this.ECMemberToken,
                    store: n
                }).then((function(t) {
                    e.setSessionStorage("rog_ec_member_cartID_".concat(e.lang), t.data.data.createEmptyCart),
                    e.ECMemberCartId = t.data.data.createEmptyCart,
                    e.usersEcCartItems({
                        token: e.ECMemberToken,
                        store: n,
                        cartID: e.ECMemberCartId
                    })
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )) : this.usersEcCartItems({
                    token: this.ECMemberToken,
                    store: n,
                    cartID: this.ECMemberCartId
                }) : this.visitEcCartId({
                    token: this.ECMemberToken,
                    store: n
                }).then((function(t) {
                    e.setSessionStorage("rog_ec_member_cartID_".concat(e.lang), t.data.data.createEmptyCart),
                    e.ECMemberCartId = t.data.data.createEmptyCart,
                    e.usersEcCartItems({
                        token: e.ECMemberToken,
                        store: n,
                        cartID: e.ECMemberCartId
                    })
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )) : y.visitorEcToken(this.ECGuestId, this.getEcObject.ecDomain).then((function(t) {
                    if (t.data.data.getAuthorizationToken) {
                        e.ECMemberToken = t.data.data.getAuthorizationToken.token;
                        var o = t.data.data.getAuthorizationToken.token
                          , param = {
                            token: o,
                            store: n
                        };
                        e.setSessionStorage("rog_ec_member_token_".concat(e.lang), o),
                        e.ECMemberCartId && "null" !== e.ECMemberCartId ? e.usersEcCartItems({
                            token: e.ECMemberToken,
                            store: n,
                            cartID: e.ECMemberCartId
                        }) : e.visitEcCartId(param).then((function(t) {
                            e.setSessionStorage("rog_ec_member_cartID_".concat(e.lang), t.data.data.createEmptyCart),
                            e.ECMemberCartId = t.data.data.createEmptyCart,
                            e.usersEcCartItems({
                                token: e.ECMemberToken,
                                store: n,
                                cartID: e.ECMemberCartId
                            })
                        }
                        )).catch((function(e) {
                            console.error(e)
                        }
                        ))
                    }
                }
                )).catch((function(e) {
                    console.error(e)
                }
                )))
            }
            ,
            t.prototype.getECGroupIdHandler = function(e) {
                var t = this;
                if (null === this.getEcObject.memberDiscount) {
                    if (0 === ["es", "it", "fr", "se", "dk", "fi", "cz", "pl", "hu", "de", "nl", "pt", "be-nl", "be-fr", "tw", "ca-en", "ca-fr", "us", "uk", "mx", "my", "ph", "ro", "in", "kr", "hk", "th", "id", "me-en", "me-ar", "au", "br", "tr", "cl", "co", "pe", "za", "vn", "sa-en", "sa-ar", "ua-ua", "eg-en", "eg"].filter((function(e) {
                        return e === t.lang
                    }
                    )).length)
                        return
                } else if (this.getEcObject.memberDiscount && 0 === this.getEcObject.memberDiscount)
                    return;
                Object(I.b)("groupid_rog_".concat(this.lang)) && "undefined" !== Object(I.b)("groupid_rog_".concat(this.lang)) || this.usersEcCustomer({
                    token: this.ECToken,
                    store: e
                }).then((function(e) {
                    Object(I.d)("groupid_rog_".concat(t.lang), e.data.data.customer.group_id, "1")
                }
                ))
            }
            ,
            t.prototype.setSessionStorage = function(e, t) {
                sessionStorage.setItem(e, t)
            }
            ,
            t.prototype.getSessionStorage = function(e) {
                return sessionStorage.getItem(e)
            }
            ,
            t.prototype.accountDropDownLinkClick = function(e) {
                (e || e.link) && (this.accountGaHandler(e),
                window.location = e.link)
            }
            ,
            t.prototype.accountStatusActived = function(e) {
                var t = Object(L.a)()
                  , n = this.urlReplace(e.link);
                (e || e.link) && (n ? t && ("object" === Object(r.a)(window._satellite) && window._satellite.track("spa-pageview"),
                void 0 !== window._hmt && window._hmt && window._hmt.push(["_requirePlugin", "UrlChangeTracker", {
                    shouldTrackUrlChange: function(e, t) {
                        return e && t
                    }
                }]),
                this.$router.push({
                    path: n
                }).catch((function(e) {}
                ))) : (this.accountGaHandler(e),
                this.accountLinkActived(e)))
            }
            ,
            t.prototype.accountLinkActived = function(e) {
                if ("post" === (e.type ? e.type : null)) {
                    if (this.accountLanguage = Object(k.a)(this.accountLang, this.lang),
                    this.exportStatus) {
                        var t = this.$root ? this.$root.$data : null;
                        t && Object.keys(t).length > 0 && (this.accountLanguage = t.language,
                        this.exportWebsitePath = t.websitePath)
                    }
                    this.accountActive(e)
                }
            }
            ,
            t.prototype.accountActive = function(e) {
                var t = encodeURI(e.link)
                  , n = new RegExp("logout","ig");
                if (0 === Object.keys(this.accountLanguage).length && (this.accountLanguage = Object(k.a)(this.accountLang, this.lang)),
                t && Object.keys(this.accountLanguage).length > 0)
                    try {
                        if (window) {
                            var o = {
                                lang: this.accountLanguage,
                                site: this.lang,
                                AppID: "0000000003",
                                login_background: "general_black",
                                login_panel: "simply",
                                ReturnURL: encodeURI(window.location.href)
                            }
                              , form = document.createElement("form");
                            for (var r in form.setAttribute("method", "post"),
                            form.setAttribute("action", n.test(t) ? "".concat(t).concat(encodeURI(window.location.href)) : "".concat(t)),
                            o)
                                if (o.hasOwnProperty(r)) {
                                    var element = o[r]
                                      , c = document.createElement("input");
                                    c.setAttribute("type", "hidden"),
                                    c.setAttribute("name", r),
                                    c.setAttribute("value", element),
                                    form.appendChild(c)
                                }
                            document.body.appendChild(form),
                            form.submit()
                        }
                    } catch (e) {
                        console.error(e)
                    }
            }
            ,
            t.prototype.urlReplace = function(e) {
                for (var t = [], n = 0, o = L.b; n < o.length; n++) {
                    var r = o[n]
                      , c = new RegExp(r);
                    c.test(e) && (t = e.split(c))
                }
                return t.length > 1 ? t[1] : null
            }
            ,
            t.prototype.accountGaHandler = function(e) {
                var t = e.link
                  , n = new RegExp("elite","ig")
                  , o = new RegExp("account","ig");
                n.test(t) ? this.gaSubMenuSetting("elite_rewards", e.name) : o.test(t) && this.gaSubMenuSetting("my_account", e.name)
            }
            ,
            t.prototype.regexEliteName = function(e) {
                return !!new RegExp("elite","ig").test(e)
            }
            ,
            t.prototype.accountName = function(e) {
                return e.link.indexOf("signin") > -1 ? this.translation.Header_Login : e.link.indexOf("logout") > -1 ? this.translation.Header_Logout : this.translation.Header_Sign_up
            }
            ,
            t.prototype.closeTabControlMenu = function(e) {
                e !== this.activeNumber && (this.tabClickStatus = !1,
                this.menuMouseLeave())
            }
            ,
            t.prototype.focusDropDownMenu = function() {
                document.querySelector(".dropMenuItem > a").focus()
            }
            ,
            t.prototype.advertisingCookieHandler = function() {
                var e = this;
                Object(I.b)("rog_close_advert") || Object(I.d)("rog_close_advert", "", ""),
                Object(I.b)("rog_allPageShow_advert") || Object(I.d)("rog_allPageShow_advert", "", ""),
                this.$route && this.getPopUpAds({
                    WebsiteId: this.mappingWebsiteId
                }).then((function(t) {
                    var n, o, r, c;
                    if (t) {
                        var l = t.result
                          , d = l && l.repeatDisplay ? l.repeatDisplay : null
                          , h = l && l.displayAllPage ? l.displayAllPage : null;
                        Object(I.d)("rog_repeatShow_advert", d ? encodeURI("1") : "", ""),
                        Object(I.d)("rog_allPageShow_advert", h ? encodeURI("1") : "", ""),
                        "" === Object(I.b)("rog_close_advert") ? "" === Object(I.b)("rog_allPageShow_advert") && (null === (o = null === (n = e.$route) || void 0 === n ? void 0 : n.meta) || void 0 === o ? void 0 : o.homePage) || "1" === Object(I.b)("rog_allPageShow_advert") ? e.alertStatus = !0 : e.alertStatus = !1 : "1" === Object(I.b)("rog_close_advert") && ("1" === Object(I.b)("rog_repeatShow_advert") && ("" === Object(I.b)("rog_allPageShow_advert") && (null === (c = null === (r = e.$route) || void 0 === r ? void 0 : r.meta) || void 0 === c ? void 0 : c.homePage) || "1" === Object(I.b)("rog_allPageShow_advert")) ? e.alertStatus = !0 : e.alertStatus = !1)
                    }
                }
                ))
            }
            ,
            t.prototype.gaSetting = function(e) {
                window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-L1",
                    event_action_DL: "clicked",
                    event_label_DL: e,
                    event_value_DL: " 0"
                }),
                "rog.asus.com.cn" === window.location.host && void 0 !== window._hmt && window._hmt && window._hmt.push(["_trackEvent", "header-L1", "clicked", e])
            }
            ,
            t.prototype.gaMenuClick = function(e, t) {
                window.dataLayer && window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-L1",
                    event_action_DL: "clicked",
                    event_label_DL: "".concat(e, "-").concat(t),
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host && void 0 !== window._hmt && window._hmt && window._hmt.push(["_trackEvent", "header-L1", "clicked", "".concat(e, "-").concat(t)])
            }
            ,
            t.prototype.gaSubMenuSetting = function(e, t) {
                if (window.dataLayer && (window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "header-member-L2",
                    event_action_DL: "clicked",
                    event_label_DL: "".concat(e, "-").concat(t),
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host)) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "header-member-L2", "clicked", "".concat(e, "-").concat(t)])
                }
            }
            ,
            ke([Object(l.Action)("getPopUpAds")], t.prototype, "getPopUpAds", void 0),
            ke([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            ke([Object(l.Getter)("translation")], t.prototype, "translation", void 0),
            ke([Object(l.Getter)("headerGetter")], t.prototype, "menuApis", void 0),
            ke([Object(l.Getter)("websiteId")], t.prototype, "websiteId", void 0),
            ke([Object(l.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            ke([Object(l.Getter)("websiteMapping")], t.prototype, "websiteMapping", void 0),
            ke([Object(l.Getter)("websiteObj")], t.prototype, "websiteObj", void 0),
            ke([Object(l.Getter)("accountMenu")], t.prototype, "accountMenu", void 0),
            ke([Object(l.Getter)("accountStatus")], t.prototype, "accountStatus", void 0),
            ke([Object(l.Getter)("accountResultStatus")], t.prototype, "accountResultStatus", void 0),
            ke([Object(l.Getter)("accountMessage")], t.prototype, "messageList", void 0),
            ke([Object(l.Getter)("unReadMessageNumber")], t.prototype, "unReadMessageNumber", void 0),
            ke([Object(l.Getter)("getEcObject")], t.prototype, "getEcObject", void 0),
            ke([Object(l.Mutation)(Z.HEADER)], t.prototype, "rogExportHeader", void 0),
            ke([Object(l.Mutation)(Z.ROG_FOOTER)], t.prototype, "rogExportFooter", void 0),
            ke([Object(c.Watch)("getEcObject", {
                deep: !0
            })], t.prototype, "watchEcObject", null),
            ke([Object(d.debounce)(100)], t.prototype, "debounceDisplaySubMenu", null),
            t = ke([Object(c.Component)({
                components: {
                    mobileDropDownMenuList: H,
                    dropDownMenuList: E,
                    personalBlock: J,
                    SearchHeaderPanel: se,
                    miniCartBlock: ge,
                    Advertising: Pe
                }
            })], t)
        }(c.Vue)
          , Se = Ce
          , Me = n(392);
        var Ae = Object(x.a)(Se, (function() {
            var e, t, n = this, r = n._self._c;
            n._self._setupProxy;
            return r("div", {
                staticClass: "newHeader",
                class: [n.$style.headerWrapper, (e = {},
                Object(o.a)(e, n.$style.scrolled, n.isScrolled),
                Object(o.a)(e, n.$style.upscrolled, !n.isScrolled),
                Object(o.a)(e, n.$style.isMotherboards, n.isMotherboards),
                Object(o.a)(e, n.$style.noSticky, !n.isHomePage),
                e)],
                attrs: {
                    dir: n.dirType
                }
            }, [r("div", {
                class: [n.$style.headerContainer, (t = {},
                Object(o.a)(t, n.$style.isMobileActived, n.isBurgerActived),
                Object(o.a)(t, n.$style.scrolled, n.isScrolled),
                Object(o.a)(t, n.$style.fixed, n.isFixed),
                t)]
            }, [r("header", {
                ref: "header",
                staticClass: "robotoFont",
                class: n.$style.header,
                attrs: {
                    "aria-label": "rog header"
                }
            }, [r("a", {
                class: n.$style.rogLogo,
                attrs: {
                    "aria-label": "ROG - Republic of Gamers",
                    href: n.goHomeLink(),
                    id: "rogLogo"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        n.goToHome()
                    }
                }
            }, [r("div", {
                class: n.$style.rogLogoIcon
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 200 37",
                    "svg-inline": "",
                    role: "presentation",
                    focusable: "false"
                }
            }, [r("path", {
                attrs: {
                    d: "M22.2 29.1c.8.5 1.6 1 2.4 1.4 8.6 3.8 21.3 6.1 23.7 5.3C55 33.6 62.5 19.5 64.8 13c0 0-7 2.8-14.1 6.1-5.9 2.8-12.4 6-12.4 6l16.5-5s-4.4 10.4-10.2 11.6c-5.8 1.2-16-2.9-16-2.9.8-.7 11.6-8.6 36.8-18.9 1.1-.8 1.8-2.1 2-3.4-5.8.6-11.4 2.3-16.7 4.8-10.6 5-28.5 17.8-28.5 17.8zM3.8 24c1.8 2.3 9.2 4.2 10.2 4.4-4.6-3.2-14-12-14-12 1 2.7 2.3 5.2 3.8 7.6z"
                }
            }), r("path", {
                attrs: {
                    d: "M25.6 22.9C30.5 19.3 47.9 4.6 64.7.6c0 0-8.8-1.4-21.3 2.5-4.5 1.4-11 7.7-23.1 19.4-1.6.9-7.5-2.5-10.9-4.1 0 0 5.6 8.9 7.6 11.5 3 4.1 8.5 6.5 8.5 6.5-.5-.5-4.3-4.5-5.4-6.8-.7-1.1.1-2.7 5.5-6.7zM127.9 6.8h-3v8.9h-5.6V6.8h-3v10.4h11.6zM152.9 15.6h-7.5V6.8h-3.1v10.4h9.2zM154.2 6.8h3.1v10.4h-3.1zM191.7 8.3h6.9l1.4-1.5h-11.4v10.4h3.1v-5.1h6.7l1.2-1.6h-7.9zM106.6 13.8h8.3V7.6c0-.4-.3-.8-.7-.8h-10.7v10.3h3.1v-3.3zm0-5.5h5c.1 0 .3 0 .3.5v3.5h-5.3v-4zM140.7 10.8h-.9v-3c0-.6-.3-1-.8-1h-9.7v10.4h11.3l.1-6.4zm-3.1 4.8h-5.2v-3.3h5.2v3.3zm0-4.8h-5.2V8.3h4.9c.3 0 .3.4.3.5v2zM100.5 8.3l1.6-1.5H90.5v10.3h11.6l-1.6-1.5h-6.9v-2.8h7.8v-1.7h-7.8V8.3zM162 8.3h7l1.5-1.5h-11.6v10.3H169l1.5-1.5H162zM154 24.5l1.3-1.5h-11.8v5.6h8.5v3.1h-8.9l1.9 1.6h10.2V27h-8.6v-2.5zM100.6 23h-11v10.3h3.1v-4.4h5.5v4.4h3.1v-9.4c.1-.4-.2-.8-.7-.9zm-2.4 4.4h-5.4v-2.9h5.1c.3 0 .3.3.3.5v2.4zM127.2 24.5l1.6-1.5h-11.7v10.3h11.7l-1.6-1.5h-7V29h7.9v-1.7h-7.9v-2.8zM86.4 24.6L88 23H75.8v10.3h11.8v-5.6h-3.1v4.1H79v-7.2zM103 23v10.4h3.2v-6l3 2.1 3.1-2.1v6h3.1V23l-6.2 4.1zM141.8 28.9v-5c0-.5-.3-1-.8-1h-11.2v10.4h3.1v-8.8h5.4c.3 0 .3.3.3.5v2h-5.1l5.6 6.3h3.7l-3.9-4.4h2.9zM88.7 14.1V7.8c0-.5 0-1-.6-1H75.8V14l3.2 3.5V8.3h6c.4 0 .5.1.5.5v3.3h-5.3l8.5 8.9v-3.5L85.5 14h3.2zM186.1 6.8h-10.5v7.5l2.5 2.9h8.7V7.6c0-.4-.3-.8-.7-.8zm-2.4 8.8h-3.3l-1.7-2V8.3h5v7.3z"
                }
            })])])]), n._v(" "), r("div", {
                class: n.$style.accessibility
            }, [r("div", {
                staticClass: "orb-skip-links"
            }, [r("span", [n._v("Accessibility links")]), n._v(" "), r("ul", [n.isRogSite ? r("li", [r("a", {
                attrs: {
                    href: "#rogContent",
                    "aria-label": n.translation.ADA_Content
                }
            }, [n._v(n._s(n.translation.ADA_Content))])]) : n._e(), n._v(" "), r("li", [r("a", {
                attrs: {
                    "aria-label": n.translation.ADA_Accessibility_Help,
                    href: "https://www.asus.com".concat(n.AccessibilityPolicySite, "/content/Accessibility-Policy/")
                }
            }, [n._v(n._s(n.translation.ADA_Accessibility_Help))])]), n._v(" "), n.isAccount ? n._e() : r("li", [r("a", {
                attrs: {
                    href: "#rogMenu",
                    "aria-label": n.translation.ADA_Menu
                }
            }, [n._v(n._s(n.translation.ADA_Menu))])]), n._v(" "), n.isAccount ? n._e() : r("li", [r("a", {
                attrs: {
                    href: "#rogFooter",
                    "aria-label": n.translation.ADA_Footer
                }
            }, [n._v(n._s(n.translation.ADA_Footer))])])])])]), n._v(" "), !n.menuApis || n.isRegion || n.isAccount ? n._e() : r("nav", {
                class: n.$style.headerNav
            }, [n.isMobileStatus ? r("div", {
                class: n.$style.headerBurger,
                attrs: {
                    "aria-label": "Menu",
                    role: "button",
                    tabindex: "0"
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.burgerClick.apply(null, arguments)
                    },
                    click: n.burgerClick
                }
            }, [r("span", {
                class: n.$style.rogBurger
            })]) : n._e(), n._v(" "), r("div", {
                staticClass: "mobileMenu",
                class: n.$style.headerMenu
            }, [n.isMobileStatus ? r("div", {
                class: n.$style.headerMenuToolBar
            }, [r("div", {
                class: [n.$style.userButton, n.$style.accountButton],
                attrs: {
                    role: "button",
                    tabindex: "0",
                    "aria-label": "Account",
                    "aria-expanded": n.showUserListMobile
                },
                on: {
                    click: n.userMobileHandler
                }
            }, [n.isLogin() ? n._e() : r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    role: "none",
                    "svg-inline": "",
                    alt: "user",
                    focusable: "false"
                }
            }, [r("path", {
                attrs: {
                    d: "M5 27c0-5.2 4.93-9.37 11-9.37s11 4.17 11 9.29l-.9.06h-.9c0-4.13-4.13-7.49-9.2-7.49s-9.2 3.36-9.2 7.49zm11-9.67a6.59 6.59 0 116.58-6.59A6.59 6.59 0 0116 17.33zM16 6a4.79 4.79 0 104.78 4.78A4.78 4.78 0 0016 6z"
                }
            })]), n._v(" "), n.isLogin() ? r("img", {
                attrs: {
                    role: "none",
                    tabindex: "-1",
                    src: n.createUrl,
                    alt: "user",
                    "aria-hidden": n.isLogin()
                }
            }) : n._e()]), n._v(" "), r("div", {
                class: n.$style.closeButton,
                attrs: {
                    role: "button",
                    "aria-label": "close menu",
                    tabindex: "0"
                },
                on: {
                    click: n.burgerClick
                }
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    "svg-inline": "",
                    alt: "close",
                    role: "presentation",
                    focusable: "false"
                }
            }, [r("path", {
                attrs: {
                    d: "M28 5.41L26.59 4 16 14.59 5.41 4 4 5.41 14.59 16 4 26.59 5.41 28 16 17.41 26.59 28 28 26.59 17.41 16 28 5.41z"
                }
            })])])]) : n._e(), n._v(" "), r("ul", {
                class: [n.$style.userListMobile, Object(o.a)({}, n.$style.active, n.showUserListMobile)],
                attrs: {
                    "aria-hidden": !n.showUserListMobile
                }
            }, [r("li", {
                class: n.$style.userMobileListTitle
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    role: "button",
                    "aria-label": "go back",
                    "svg-inline": "",
                    alt: "left",
                    focusable: "false"
                },
                on: {
                    click: n.closeUserMobileHandler
                }
            }, [r("path", {
                attrs: {
                    d: "M8.93 13.77L22.94 0v6.7l-9.18 8.94 9.18 9.66V32L8.93 17.51l-1.87-1.87 1.87-1.87z"
                }
            })]), n._v(" "), r("p", [n._v(n._s(n.translation.Header_M_User))])]), n._v(" "), "cn" !== n.lang && n.accountStatus && n.accountStatus.userInfo && n.accountStatus.userInfo.name ? r("li", {
                class: n.$style.accountInfo
            }, [r("p", {
                class: n.$style.accountName
            }, [n._v(n._s(n.accountStatus.userInfo.name))]), n._v(" "), r("p", {
                class: n.$style.accountPoints
            }, [n._v(n._s(n.accountStatus.userInfo.points) + " " + n._s(n.translation.points))])]) : n._e(), n._v(" "), r("li", [r("ul", {
                class: n.$style.accountLinkSection,
                attrs: {
                    role: "list"
                }
            }, [n._l(n.accountMenu, (function(e, t) {
                return r("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !("cn" === n.lang && n.regexEliteName(e.link)),
                        expression: "!(lang === 'cn' && regexEliteName(accountInfo.link))"
                    }],
                    key: t,
                    class: n.$style.dropDownLink,
                    attrs: {
                        role: "none"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            n.accountDropDownLinkClick(e)
                        }
                    }
                }, [r("a", {
                    attrs: {
                        "aria-label": e.name,
                        href: e.link
                    }
                }, [n._v("\n                    " + n._s(e.name) + "\n                  ")])])
            }
            )), n._v(" "), n.accountStatus.linkSection && n.accountStatus.linkSection.length > 0 ? r("li", {
                attrs: {
                    role: "none"
                }
            }, n._l(n.accountStatus.linkSection, (function(e, t) {
                return r("div", {
                    key: t,
                    class: n.$style.linkSectionLink,
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            n.accountStatusActived(e)
                        }
                    }
                }, [r("a", {
                    attrs: {
                        "aria-label": n.accountName(e),
                        href: e.link
                    }
                }, [n._v("\n                    " + n._s(n.accountName(e)) + "\n                    ")])])
            }
            )), 0) : n._e()], 2)])]), n._v(" "), r("ul", {
                ref: "menuList",
                staticClass: "headerMenuList",
                class: [n.$style.headerMenuList, Object(o.a)({}, n.$style.smallList, n.isSmallItem)],
                attrs: {
                    role: "menu"
                },
                on: {
                    mouseover: n.menuListOver,
                    mouseleave: n.menuMouseLeave
                }
            }, [n.chkMenuApisObject(n.menuApis) ? [n._l(n.menuApis, (function(e, t) {
                return r("li", {
                    key: t,
                    staticClass: "headerItem",
                    class: [n.$style.menuList, Object(o.a)({}, n.$style.smallItem, n.isSmallItem)],
                    attrs: {
                        role: "menuitem"
                    },
                    on: {
                        keydown: [function(o) {
                            return !o.type.indexOf("key") && n._k(o.keyCode, "enter", 13, o.key, "Enter") ? null : n.tabClick(e, o, t)
                        }
                        , function(e) {
                            return !e.type.indexOf("key") && n._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : n.focusDropDownMenu.apply(null, arguments)
                        }
                        ],
                        mouseover: function(o) {
                            return n.menuMouseOver(e, o, t)
                        },
                        click: function(t) {
                            return n.triggerDisplaySubMenu(e)
                        }
                    }
                }, [e.items.length > 0 && e.items[0].subItem.length > 0 ? r("div", {
                    class: [n.$style.menuItem, {
                        firstMenuItem: 0 === t
                    }],
                    attrs: {
                        tabindex: "0",
                        "aria-haspopup": "true",
                        "aria-label": e.name,
                        "aria-expanded": !(!n.isDisplay || !n.checkMenuItems(n.dropDownMenuActivedMeta) || n.activeNumber !== t),
                        id: "rogMenu".concat(0 === t ? "" : t)
                    },
                    on: {
                        click: function(t) {
                            return n.menuClick(e, t)
                        },
                        keydown: function(o) {
                            return !o.type.indexOf("key") && n._k(o.keyCode, "space", 32, o.key, [" ", "Spacebar"]) ? null : n.tabClick(e, o, t)
                        }
                    }
                }, [r("span", {
                    staticClass: "menuItem",
                    class: [Object(o.a)({}, n.$style.active, n.isDisplay && n.activeNumber === t)]
                }, [n._v(n._s(e.name))]), n._v(" "), r("div", {
                    class: n.$style.isMobileArrow
                }, [r("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-name": "圖層 1",
                        viewBox: "0 0 32 32",
                        "svg-inline": "",
                        alt: "right",
                        role: "presentation",
                        focusable: "false"
                    }
                }, [r("path", {
                    attrs: {
                        d: "M23.07 13.77L9.06 0v6.7l9.18 8.94-9.18 9.66V32l14.01-14.49 1.87-1.87-1.87-1.87z"
                    }
                })])])]) : r("a", {
                    class: n.$style.noArrow,
                    attrs: {
                        id: "rogMenu".concat(0 === t ? "" : t),
                        "aria-label": "".concat(e.name),
                        href: e.url
                    },
                    on: {
                        focus: function(e) {
                            return n.closeTabControlMenu(t)
                        }
                    }
                }, [r("span", {
                    staticClass: "menuItem",
                    class: [Object(o.a)({}, n.$style.active, n.isDisplay && n.activeNumber === t)]
                }, [n._v(n._s(e.name))])]), n._v(" "), n.isDisplay && n.checkMenuItems(n.dropDownMenuActivedMeta) && n.activeNumber === t ? r("dropDownMenuList", {
                    attrs: {
                        dropDownVal: n.dropDownMenuActivedMeta,
                        headerListBlockPosition: n.headerListPosition,
                        headerBlockPosition: n.headerBasicPosition,
                        menuWidth: n.menuWidth
                    },
                    on: {
                        enterSubMenu: n.subMenuStatus,
                        leaveSubMenu: n.subMenuStatus,
                        closeAction: n.closeMenuHandler
                    }
                }) : n._e()], 1)
            }
            )), n._v(" "), n.isMobileDisplay ? r("li", [r("div", {
                class: n.$style.mobileAsusLogo
            }, [r("a", {
                attrs: {
                    "aria-label": "ASUS",
                    href: "".concat(n.asusLinkArea)
                }
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "71.418",
                    height: "15.556",
                    viewBox: "0 0 71.418 15.556",
                    "svg-inline": "",
                    alt: "asus",
                    role: "presentation",
                    focusable: "false"
                }
            }, [r("g", {
                attrs: {
                    "data-name": "组件 69 – 1"
                }
            }, [r("path", {
                attrs: {
                    fill: "#797979",
                    stroke: "rgba(0,0,0,0)",
                    "stroke-miterlimit": "10",
                    d: "M52.803 15.056l.009-3.84h13.593a1.609 1.609 0 00.649-.183.818.818 0 00.256-.578c0-.737-.613-.769-.921-.785l-9.882-.815A4.615 4.615 0 0154.3 7.812a3.758 3.758 0 01-1.271-2.052s12.766.746 14.184.877a4.359 4.359 0 013.618 3.351 6.077 6.077 0 01-.022 1.57 4.233 4.233 0 01-4.008 3.5zm-12.767-.017l-.354-.025a4.216 4.216 0 01-3.621-3.534v-.609a5.825 5.825 0 01-.077.656 4.261 4.261 0 01-3.52 3.5h-18.3v-9.8l3.8.276v5.738h13.688a.768.768 0 00.807-.74c.007-.738-.562-.814-.864-.828 0 0-9.444-.774-9.782-.806a4.988 4.988 0 01-2.284-1.074 3.976 3.976 0 01-1.2-2.258s12.694 1 14.119 1.129c2.392.221 3.494 2.753 3.59 3.327 0 0 .008.059.015.164V4.642l3.881.278v5.078a1.23 1.23 0 001.119 1.273h6.6a1.264 1.264 0 001.267-1.285v-4.46l3.843.227v5.358c0 3.627-3.817 3.931-3.817 3.931zM.918 15.021L7.651 4.597l4.341.458-6.472 9.966zM52.803 4.363v-.311a5.491 5.491 0 01.973-2A4.27 4.27 0 0156.918.5h14v3.866zm-3.937 0V.519h3.909v3.844zm-12.844 0V.519h3.912v3.844zm-28.216 0s1.589-2.59 1.983-3.1a1.682 1.682 0 011.4-.738h6.946v3.527a5.5 5.5 0 01.977-2A4.252 4.252 0 0122.253.496h13.086v3.863z",
                    "data-name": "联合 1"
                }
            })])])])])]) : n._e()] : n._e()], 2), n._v(" "), r("mobileDropDownMenuList", {
                attrs: {
                    isMobile: n.isMobileDisplay,
                    dropDownVal: n.mobileDropDownMenuActivedMeta,
                    headerListBlockPosition: n.mobilePosition,
                    headerBlockPosition: n.mobilePosition.top,
                    isBurgerActived: n.isBurgerActived
                },
                on: {
                    mobileSubMenu: n.mobileSubMenuClickEvent,
                    closeMobileMenuList: n.closeMobileMenuList,
                    closeAction: n.burgerClick
                }
            })], 1)]), n._v(" "), r("div", {
                class: n.$style.iconBlock
            }, [n.isAccount ? n._e() : r("div", {
                class: n.$style.asusLogo
            }, [r("a", {
                attrs: {
                    "aria-label": "ASUS",
                    href: "".concat(n.asusLinkArea)
                }
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "71.418",
                    height: "15.556",
                    viewBox: "0 0 71.418 15.556",
                    "svg-inline": "",
                    alt: "asus",
                    role: "none",
                    focusable: "false"
                }
            }, [r("g", {
                attrs: {
                    "data-name": "组件 69 – 1"
                }
            }, [r("path", {
                attrs: {
                    fill: "#797979",
                    stroke: "rgba(0,0,0,0)",
                    "stroke-miterlimit": "10",
                    d: "M52.803 15.056l.009-3.84h13.593a1.609 1.609 0 00.649-.183.818.818 0 00.256-.578c0-.737-.613-.769-.921-.785l-9.882-.815A4.615 4.615 0 0154.3 7.812a3.758 3.758 0 01-1.271-2.052s12.766.746 14.184.877a4.359 4.359 0 013.618 3.351 6.077 6.077 0 01-.022 1.57 4.233 4.233 0 01-4.008 3.5zm-12.767-.017l-.354-.025a4.216 4.216 0 01-3.621-3.534v-.609a5.825 5.825 0 01-.077.656 4.261 4.261 0 01-3.52 3.5h-18.3v-9.8l3.8.276v5.738h13.688a.768.768 0 00.807-.74c.007-.738-.562-.814-.864-.828 0 0-9.444-.774-9.782-.806a4.988 4.988 0 01-2.284-1.074 3.976 3.976 0 01-1.2-2.258s12.694 1 14.119 1.129c2.392.221 3.494 2.753 3.59 3.327 0 0 .008.059.015.164V4.642l3.881.278v5.078a1.23 1.23 0 001.119 1.273h6.6a1.264 1.264 0 001.267-1.285v-4.46l3.843.227v5.358c0 3.627-3.817 3.931-3.817 3.931zM.918 15.021L7.651 4.597l4.341.458-6.472 9.966zM52.803 4.363v-.311a5.491 5.491 0 01.973-2A4.27 4.27 0 0156.918.5h14v3.866zm-3.937 0V.519h3.909v3.844zm-12.844 0V.519h3.912v3.844zm-28.216 0s1.589-2.59 1.983-3.1a1.682 1.682 0 011.4-.738h6.946v3.527a5.5 5.5 0 01.977-2A4.252 4.252 0 0122.253.496h13.086v3.863z",
                    "data-name": "联合 1"
                }
            })])]), n._v(" "), r("span", {
                staticClass: "sr-only"
            }, [n._v("ASUS home logo")])])]), n._v(" "), r("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !n.isRegion && !n.isAccount,
                    expression: "!isRegion && !isAccount"
                }],
                class: ["searchButton", n.$style.searchButton, Object(o.a)({}, n.$style.active, n.searchPanelStatus)],
                attrs: {
                    id: "searchButton",
                    tabindex: "0",
                    "aria-haspopup": "true",
                    "aria-expanded": n.searchPanelStatus,
                    "aria-label": n.translation.Aria_SearchBar
                },
                on: {
                    click: n.searchPanelHandler
                }
            }, [r("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-name": "圖層 1",
                    viewBox: "0 0 32 32",
                    role: "none",
                    "svg-inline": "",
                    alt: "search",
                    focusable: "false"
                }
            }, [r("path", {
                attrs: {
                    d: "M26.44 24.32l-3.65-3.65a9.79 9.79 0 00-7.9-15.57A9.8 9.8 0 008 21.82a9.79 9.79 0 0012.7 1l3.64 3.65a1.54 1.54 0 001.1.46 1.48 1.48 0 001.05-.44 1.51 1.51 0 00-.05-2.17zM14.89 6.86a8 8 0 11-5.68 2.35 8 8 0 015.68-2.35z"
                }
            })])]), n._v(" "), !n.searchPanelStatus || n.isRegion || n.isAccount ? n._e() : r("SearchHeaderPanel", {
                staticClass: "searchHeaderPanel",
                attrs: {
                    websiteId: n.mappingWebsiteId
                },
                on: {
                    close: n.searchPanelHandler
                }
            }), n._v(" "), n.isMobileDisplay || n.isRegion || n.isAccount ? n._e() : r("personalBlock"), n._v(" "), n.isAccount ? n._e() : r("miniCartBlock", {
                attrs: {
                    cartList: n.cartList
                }
            })], 1)]), n._v(" "), r("Advertising", {
                attrs: {
                    isShow: n.alertStatus
                },
                on: {
                    "update:isShow": function(e) {
                        n.alertStatus = e
                    },
                    "update:is-show": function(e) {
                        n.alertStatus = e
                    }
                }
            })], 1)])
        }
        ), [], !1, (function(e) {
            this.$style = Me.default.locals || Me.default
        }
        ), null, null);
        t.a = Ae.exports
    },
    406: function(e, t, n) {
        "use strict";
        n(21),
        n(49),
        n(40),
        n(24);
        var o, r = n(9), c = (n(48),
        n(38),
        n(10),
        n(51),
        n(15),
        n(34),
        n(199),
        n(28),
        n(103),
        n(120),
        n(3)), l = n(5), d = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), h = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }, _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.parsedBreadList = "",
                t
            }
            return d(t, e),
            Object.defineProperty(t.prototype, "pageLevel", {
                get: function() {
                    if (this.routeInfo && this.routeInfo.type)
                        switch (this.routeInfo.type) {
                        case 1:
                            return 1;
                        case 2:
                            return 2
                        }
                    return 0
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "routeName", {
                get: function() {
                    var e;
                    return this.$route ? null === (e = this.$route) || void 0 === e ? void 0 : e.name : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isShow", {
                get: function() {
                    var e;
                    return "search" !== (null === (e = this.$route) || void 0 === e ? void 0 : e.meta.layout)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "area", {
                get: function() {
                    if (this.routeInfo && this.routeInfo.websitePath) {
                        var e = this.routeInfo.websitePath;
                        return "global" === e ? "/" : "/".concat(e, "/")
                    }
                    return ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "newList", {
                get: function() {
                    if (this.parsedBreadList.indexOf("helpdesk") > -1) {
                        var e = this.routeInfo.bread.split(" > ");
                        return e[e.length - 1] = "help desk",
                        e
                    }
                    var t = [];
                    if (this.routeInfo.bread)
                        if ((t = this.routeInfo.bread.split(" > "))[t.length - 1] === t[t.length - 2] && (t[t.length - 1] = ""),
                        "/" === this.area) {
                            var n = this.parsedBreadList.split("/").filter((function(e) {
                                return "" !== e
                            }
                            ));
                            2 === t.length && n.length > t.length && (t[2] = n[2]),
                            3 === t.length && n.length > t.length && (t[3] = n[3]),
                            4 === t.length && n.length > t.length && (t[4] = n[4]),
                            5 === t.length && n.length > t.length && (t[5] = n[5])
                        } else {
                            n = this.parsedBreadList.split("/").filter((function(e) {
                                return "" !== e
                            }
                            ));
                            2 === t.length && (t[2] = n[n.length - 1]),
                            3 === t.length && (t[3] = n[n.length - 1]),
                            4 === t.length && (t[4] = n[n.length - 1]),
                            5 === t.length && (t[5] = n[n.length - 1])
                        }
                    else if (17 === this.routeInfo.type && (t[0] = "articles"),
                    10 === this.routeInfo.type)
                        t[0] = "".concat(this.list[0].replace(/-/g, " "));
                    else if (8 === this.routeInfo.type)
                        t[0] = "articles",
                        t[1] = "".concat(this.list[1].replace(/-/g, " "));
                    else if (12 === this.routeInfo.type)
                        t[0] = "wallpapers";
                    else if (13 === this.routeInfo.type)
                        t[0] = "wallpapers",
                        t[1] = "".concat(this.list[1].replace(/-/g, " "));
                    else if (4 === this.routeInfo.type) {
                        t = n = this.parsedBreadList.split("/").filter((function(e) {
                            return "" !== e.replace(/-/g, " ")
                        }
                        ))
                    }
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "list", {
                get: function() {
                    if (this.routeInfo && this.routeInfo.websitePath && "undefined" != typeof window && this.parsedBreadList) {
                        var area = this.routeInfo.websitePath.toLowerCase()
                          , e = this.parsedBreadList.toLowerCase();
                        if (e = window.location.pathname) {
                            if ("/" === e[e.length - 1]) {
                                var t = e.split("/");
                                if (8 === this.routeInfo.type) {
                                    var n = [];
                                    return n[0] = "articles",
                                    n[1] = this.routeInfo.brandingName,
                                    n
                                }
                                if (10 === this.routeInfo.type) {
                                    var o = [];
                                    return o[0] = "tag " + this.routeInfo.brandingName.toLowerCase(),
                                    o
                                }
                                if ("global" !== area) {
                                    var r = this.listFilter(t);
                                    return "rog.asus.com.cn" !== window.location.host && r.shift(),
                                    r
                                }
                                return this.listFilter(t)
                            }
                            if ("global" !== area) {
                                var c = e.split("/");
                                r = this.listFilter(c);
                                return "rog.asus.com.cn" !== window.location.host && r.shift(),
                                r
                            }
                            var l = e.split("/");
                            return this.listFilter(l)
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "paths", {
                get: function() {
                    var e = this;
                    if ("undefined" != typeof window) {
                        var t = this.$root ? this.$root.$data : null
                          , n = ""
                          , o = "";
                        t && Object.keys(t).length > 0 && (n = t.websitePath ? "".concat(t.websitePath) : "",
                        o = "global" === n ? "/" : "/".concat(n, "/"));
                        var r = []
                          , c = window.location.pathname.split("/")
                          , l = Object.assign([], c)
                          , d = 0;
                        "about-rog" === c[1] || "articles" === c[1] || "wallpapers" === c[1] ? d = 1 : "terms-of-notice" === c[1] || "about-rog" === c[2] || "articles" === c[2] || "wallpapers" === c[2] ? d = 2 : "terms-of-notice" === c[2] && (d = 3);
                        var h = c.splice(d)
                          , _ = encodeURI(window.location.origin);
                        if ("terms-of-notice" === l[1] || "terms-of-notice" === l[2])
                            h.forEach((function(t) {
                                if ("" !== t)
                                    if ("Official-Site" === t) {
                                        var n = "terms-of-notice"
                                          , o = "".concat(_).concat(e.area, "/").concat(n).concat(t);
                                        r.push({
                                            name: n.toUpperCase(),
                                            link: o
                                        })
                                    } else {
                                        o = "".concat(_).concat(e.area).concat(t);
                                        r.push({
                                            name: t.toUpperCase(),
                                            link: o
                                        })
                                    }
                            }
                            ));
                        else if ("about-rog" === l[1] || "about-rog" === l[2])
                            h.forEach((function(t) {
                                if ("" !== t) {
                                    var n = "".concat(_).concat(e.area).concat(t);
                                    r.push({
                                        name: t.toUpperCase(),
                                        link: n
                                    })
                                }
                            }
                            ));
                        else if ("team-rog" === l[1] || "team-rog" === l[2])
                            h.forEach((function(t) {
                                if ("" !== t) {
                                    var n = "".concat(_).concat(e.area).concat(t);
                                    r.push({
                                        name: t.toUpperCase(),
                                        link: n
                                    })
                                }
                            }
                            ));
                        else if ("rog-intelligent-cooling" === l[1] || "rog-intelligent-cooling" === l[2])
                            h.forEach((function(t) {
                                if ("" !== t) {
                                    var n = "".concat(_).concat(e.area).concat(t);
                                    r.push({
                                        name: t.toUpperCase(),
                                        link: n
                                    })
                                }
                            }
                            ));
                        else if ("articles" !== l[1] && "articles" !== l[2] || !o) {
                            if (("wallpapers" === l[1] || "wallpapers" === l[2]) && o) {
                                var f = [];
                                h.forEach((function(e) {
                                    if ("" !== e) {
                                        f.push(e);
                                        var t = f.join("/")
                                          , n = "".concat(_).concat(o).concat(t);
                                        r.push({
                                            name: e.toUpperCase(),
                                            link: n
                                        })
                                    }
                                }
                                ))
                            }
                        } else {
                            var m = [];
                            h.forEach((function(e) {
                                if ("" !== e) {
                                    m.push(e);
                                    var t = m.join("/")
                                      , n = "".concat(_).concat(o).concat(t);
                                    r.push({
                                        name: e.toUpperCase(),
                                        link: n
                                    })
                                }
                            }
                            ))
                        }
                        return r
                    }
                    return []
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.watchRoute = function(e, t) {
                e && (this.parsedBreadList = e.fullPath.split("?")[0])
            }
            ,
            t.prototype.listFilter = function(e) {
                return e.filter((function(e) {
                    return e.length > 0
                }
                ))
            }
            ,
            t.prototype.parsePhoneBreadCrumb = function(e) {
                var t = /group/gi
                  , area = this.routeInfo.websitePath.toLowerCase();
                if ("global" !== area)
                    if ("rog.asus.com.cn" === window.location.host)
                        switch (e) {
                        case 0:
                            return t.test(this.list[0]) ? "/".concat(this.list[0], "/") : "/".concat(this.list[0], "-group/");
                        case 1:
                            return "/".concat(this.list[0], "/").concat(this.list[1], "/");
                        case 2:
                            return "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/")
                        }
                    else
                        switch (e) {
                        case 0:
                            return 1 === this.routeInfo.layoutTemplate ? t.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/") : "/".concat(area, "/").concat(this.list[0], "-group/") : t.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/") : "/".concat(area, "/").concat(this.list[0], "-group/allmodels/");
                        case 1:
                            return "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/");
                        case 2:
                            return "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/")
                        }
                else
                    switch (e) {
                    case 0:
                        return 1 === this.routeInfo.layoutTemplate ? t.test(this.list[0]) ? "/".concat(this.list[0], "/") : "/".concat(this.list[0], "-group/") : t.test(this.list[0]) ? "/".concat(this.list[0], "/") : "/".concat(this.list[0], "-group/allmodels/");
                    case 1:
                        return "/".concat(this.list[0], "/").concat(this.list[1], "/");
                    case 2:
                        return "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/")
                    }
                return ""
            }
            ,
            t.prototype.link = function(e) {
                var t, n, o, r, c, l, d, h, _, f, m, v, w, y, P = /group/gi;
                if (this.routeInfo && "Phones" === this.routeInfo.productLine)
                    return this.parsePhoneBreadCrumb(e);
                if (this.routeInfo && this.routeInfo.websitePath) {
                    var area = this.routeInfo.websitePath.toLowerCase()
                      , I = this.routeInfo.type;
                    if ("global" !== area)
                        if ("rog.asus.com.cn" === window.location.host)
                            switch (e) {
                            case 0:
                                return 8 === this.routeInfo.type || (10 === this.routeInfo.type || 12 === this.routeInfo.type || 13 === this.routeInfo.type || 17 === this.routeInfo.type || P.test(this.list[0])) ? this.handlerUrl(0) : "".concat(this.handlerUrl(0), "-group/");
                            case 1:
                                return encodeURI(window.location.pathname).toLowerCase().indexOf("allmodels") > 0 ? "".concat(this.handlerUrl(1)) : this.list[1].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? "".concat(this.handlerUrl(1), "-series/").concat(window.location.search) : "".concat(this.handlerUrl(1), "-series/") : this.list[2] && this.list[2].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? "".concat(this.handlerUrl(0), "-group/") : "".concat(this.handlerUrl(1), "-series/") : 3 === this.list.length ? "".concat(this.handlerUrl(0), "-group/") : "".concat(this.handlerUrl(1), "-series/");
                            case 2:
                                return this.list[2].toLowerCase().indexOf("series") > 0 && 2 === this.routeInfo.type ? "".concat(this.handlerUrl(2)).concat(window.location.search) : "".concat(this.handlerUrl(2), "/");
                            case 3:
                                return "".concat(this.handlerUrl(3), "/");
                            case 4:
                                return "".concat(this.handlerUrl(4), "/").concat(window.location.search)
                            }
                        else
                            switch (e) {
                            case 0:
                                var k = this.routeInfo.type;
                                return 8 === k ? (P.test(this.list[0]),
                                "/".concat(area, "/").concat(this.list[0], "/")) : 10 === k ? P.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/") : "/".concat(area, "/").concat(this.list[0].replace(/ /g, "/"), "/") : 12 === k || 13 === k || 17 === k ? (P.test(this.list[0]),
                                "/".concat(area, "/").concat(this.list[0], "/")) : k > 1 ? P.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/") : "/".concat(area, "/").concat(this.list[0], "-group/") : P.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/allmodels") : "/".concat(area, "/").concat(this.list[0], "-group/allmodels");
                            case 1:
                                return encodeURI(window.location.pathname).toLowerCase().indexOf("allmodels") > 0 ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1]) : this.list[1].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? 3 === this.list.length ? "/".concat(area, "/").concat(this.list[0], "-group") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1]).concat(window.location.search) : this.list[1].toLowerCase().indexOf("series") > 0 ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/") : 4 === this.list.length && this.$route && (null === (n = null === (t = this.$route) || void 0 === t ? void 0 : t.name) || void 0 === n ? void 0 : n.indexOf("Features")) > -1 ? "/".concat(area, "/").concat(this.list[0], "-group/") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "-series/") : this.list[2] && this.list[2].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? "/".concat(area, "/").concat(this.list[0], "-group/") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "-series/") : 2 === this.list.length ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/") : 3 === this.list.length ? "Motherboards" === this.routeInfo.productLine ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "-series/") : this.$route && -1 === (null === (r = null === (o = this.$route) || void 0 === o ? void 0 : o.name) || void 0 === r ? void 0 : r.indexOf("Features")) ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/") : 4 === this.routeInfo.layoutTemplate ? P.test(this.list[0]) ? "/".concat(area, "/").concat(this.list[0], "/allmodels") : "/".concat(area, "/").concat(this.list[0], "-group/allmodels") : "/".concat(area, "/").concat(this.list[0], "-group/") : 4 === this.list.length ? this.$route && (null === (l = null === (c = this.$route) || void 0 === c ? void 0 : c.name) || void 0 === l ? void 0 : l.indexOf("Features")) > -1 ? "/".concat(area, "/").concat(this.list[0], "-group/") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "-series/") : this.$route && (null === (h = null === (d = this.$route) || void 0 === d ? void 0 : d.name) || void 0 === h ? void 0 : h.indexOf("Features")) > -1 ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "-series/") : "/".concat(area, "/").concat(this.list[0], "-group/");
                            case 2:
                                return this.list[2].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2]).concat(window.location.search) : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/") : 3 === this.list.length ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/") : 4 === this.list.length ? this.$route && (null === (f = null === (_ = this.$route) || void 0 === _ ? void 0 : _.name) || void 0 === f ? void 0 : f.indexOf("Features")) > -1 ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "-series/") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/") : this.list.length >= 5 ? "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "-series/") : "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/");
                            case 3:
                                return "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/").concat(this.list[3], "/");
                            case 4:
                                return "/".concat(area, "/").concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/").concat(this.list[3], "/").concat(this.list[4], "/")
                            }
                    else
                        switch (e) {
                        case 0:
                            return 8 === I ? (P.test(this.list[0]),
                            "/".concat(this.list[0], "/")) : 10 === I ? "/".concat(this.list[0].replace(/ /g, "/")) : 12 === I || 13 === I || 17 === I ? (P.test(this.list[0]),
                            "/".concat(this.list[0], "/")) : I > 1 ? P.test(this.list[0]) ? "/".concat(this.list[0], "/") : "/".concat(this.list[0], "-group/") : P.test(this.list[0]) ? "/".concat(this.list[0], "/allmodels") : "/".concat(this.list[0], "-group/allmodels");
                        case 1:
                            return encodeURI(window.location.pathname).toLowerCase().indexOf("allmodels") > 0 ? "/".concat(this.list[0], "/").concat(this.list[1]) : this.list[1].toLowerCase().indexOf("series") > 0 ? "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(window.location.search) : this.list[2] && this.list[2].toLowerCase().indexOf("series") > 0 ? "/".concat(this.list[0], "-group") : 2 === this.list.length ? 8 === I ? "".concat(window.location.pathname) : "/".concat(this.list[0], "/").concat(this.list[1], "/") : 3 === this.list.length ? "Motherboards" === this.routeInfo.productLine ? "/".concat(this.list[0], "/").concat(this.list[1], "-series/") : this.$route && -1 === (null === (v = null === (m = this.$route) || void 0 === m ? void 0 : m.name) || void 0 === v ? void 0 : v.indexOf("Features")) ? "/".concat(this.list[0], "/").concat(this.list[1], "/") : 4 === this.routeInfo.layoutTemplate ? P.test(this.list[0]) ? "/".concat(this.list[0], "/allmodels") : "/".concat(this.list[0], "-group/allmodels") : "/".concat(this.list[0], "-group/") : 4 === this.list.length || this.list.length >= 5 ? "/".concat(this.list[0], "-group/") : "/".concat(this.list[0], "/").concat(this.list[1], "-series/");
                        case 2:
                            return this.list[2].toLowerCase().indexOf("series") > 0 ? 2 === this.routeInfo.type ? "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2]).concat(window.location.search) : "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/") : 4 === this.list.length ? this.$route && (null === (y = null === (w = this.$route) || void 0 === w ? void 0 : w.name) || void 0 === y ? void 0 : y.indexOf("Features")) > -1 ? "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "-series/") : "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/") : this.list.length >= 5 ? "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "-series/") : "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/");
                        case 3:
                            return this.list[3].toLowerCase().indexOf("series") > 0 && 2 === this.routeInfo.type ? "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/").concat(this.list[3]).concat(window.location.search) : "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/").concat(this.list[3], "/");
                        case 4:
                            return "/".concat(this.list[0], "/").concat(this.list[1], "/").concat(this.list[2], "/").concat(this.list[3], "/").concat(this.list[4], "/")
                        }
                }
                return ""
            }
            ,
            t.prototype.handlerUrl = function(e) {
                var t = "";
                return this.list.forEach((function(n, o) {
                    o <= e && (t = "".concat(t, "/").concat(n))
                }
                )),
                t
            }
            ,
            t.prototype.getBreadName = function(e, t) {
                return this.routeInfo && 16 === this.routeInfo.type ? (encodeURI(window.location.pathname).indexOf("AllModels") > 0 || encodeURI(window.location.pathname).indexOf("allmodels") > 0) && 1 === t ? "".concat(this.translation.Common_Breadcrumbs_Result) : this.newList[t] : this.routeInfo && 2 === this.routeInfo.type && e.indexOf("Series") > 0 && 1 === t ? this.newList[t] : this.routeInfo && 4 === this.routeInfo.type ? this.newList[t].replace(/-/g, " ") : -1 !== this.list[t].indexOf("wtb") ? this.translation.WTB_Find_Stire : this.newList[t]
            }
            ,
            t.prototype.gaDataLayer = function(e) {
                if (window.dataLayer.push({
                    event: "data_layer_event",
                    event_category_DL: "internal-links",
                    event_action_DL: "clicked",
                    event_label_DL: e,
                    event_value_DL: "0"
                }),
                "rog.asus.com.cn" === window.location.host) {
                    if (!window._hmt)
                        return;
                    window._hmt.push(["_trackEvent", "internal-links", "clicked", e])
                }
            }
            ,
            h([Object(l.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            h([Object(l.Getter)("translation")], t.prototype, "translation", void 0),
            h([Object(c.Prop)()], t.prototype, "breadList", void 0),
            h([Object(c.Watch)("$route", {
                immediate: !0,
                deep: !0
            })], t.prototype, "watchRoute", null),
            t = h([c.Component], t)
        }(c.Vue), f = _, m = n(393), v = n(20);
        var component = Object(v.a)(f, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShow,
                    expression: "isShow"
                }],
                class: e.$style.breadcrumbContainer,
                attrs: {
                    "aria-label": "breadcrumbs",
                    role: "navigation"
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "HomePage" !== e.routeName,
                    expression: "routeName !== 'HomePage'"
                }],
                class: e.$style.homeLinkIcon
            }, [t("a", {
                class: e.$style.breadcrumbHome,
                attrs: {
                    "aria-label": "Home Page",
                    href: "".concat(e.area)
                },
                on: {
                    click: function(t) {
                        return e.gaDataLayer("home")
                    }
                }
            }, [t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "24",
                    viewBox: "0 0 32 24",
                    "svg-inline": "",
                    role: "presentation",
                    focusable: "false"
                }
            }, [t("path", {
                attrs: {
                    "data-name": "矩形 10",
                    d: "M0 0h32v24H0z",
                    fill: "none"
                }
            }), t("path", {
                attrs: {
                    "data-name": "路径 15",
                    d: "M24 8.59C19 11 10.52 17 10.52 17a31.45 31.45 0 005.18 2.12c3 .91 5.79 1.39 7.22 1.07 3.23-.72 6.69-7.68 7.81-10.76 0 0-4.77 2-6.27 2.7-1.31.6-6.28 3-6.28 3L26 12.78c-.14.32-2.2 4.95-4.83 5.47s-7.58-1.39-7.58-1.39A89.739 89.739 0 0131 8a2.49 2.49 0 001-1.64 24.59 24.59 0 00-8 2.23z",
                    fill: "#999"
                }
            }), t("path", {
                attrs: {
                    "data-name": "路径 16",
                    d: "M9.49 17.32c-.33-.58.08-1.38 2.64-3.26 2.3-1.69 10.61-8.64 18.55-10.49a24 24 0 00-10.1 1.16c-2.12.66-5.25 3.62-11 9.19-.77.43-3.55-1.18-5.15-2 0 0 2.65 4.22 3.58 5.48a11.35 11.35 0 004 3.11 21.65 21.65 0 01-2.52-3.19z",
                    fill: "#999"
                }
            }), t("path", {
                attrs: {
                    "data-name": "路径 17",
                    d: "M0 10.93s1.29 3.44 2.14 4a15.16 15.16 0 004.51 1.78S5.06 15.42 3.42 14 0 10.93 0 10.93z",
                    fill: "#999"
                }
            })])])]), e._v(" "), t("ul", [e.list ? e._l(e.list, (function(n, o) {
                return t("li", {
                    key: o
                }, [0 === o && 1 === e.pageLevel && -1 === e.routeName.indexOf("Result") ? t("p", [t("a", {
                    attrs: {
                        "aria-label": "".concat(e.translation.SEO_Gaming, " ").concat(e.getBreadName(n, o)),
                        href: e.link(o),
                        "aria-current": 1 === Object.keys(e.list).length ? "page" : "false"
                    },
                    on: {
                        click: function(t) {
                            return e.gaDataLayer(n)
                        }
                    }
                }, [t("span", [e._v(e._s(e.translation.SEO_Gaming) + " " + e._s(e.getBreadName(n, o)))])])]) : 0 !== o || -1 === e.routeName.indexOf("Result") && -1 === e.routeName.indexOf("Series") ? t("a", 1 === o ? {
                    staticClass: "index1",
                    attrs: {
                        "aria-label": e.getBreadName(n, o),
                        href: e.link(o),
                        "aria-current": 2 === Object.keys(e.list).length || o >= 2 && -1 !== e.routeName.indexOf("Features") ? "page" : "false"
                    },
                    on: {
                        click: function(t) {
                            return e.gaDataLayer(n)
                        }
                    }
                } : {
                    staticClass: "indexEnd",
                    attrs: {
                        "aria-label": e.getBreadName(n, o),
                        href: e.link(o),
                        "aria-current": 2 === Object.keys(e.list).length || o >= 2 && -1 !== e.routeName.indexOf("Features") ? "page" : "false"
                    },
                    on: {
                        click: function(t) {
                            return e.gaDataLayer(n)
                        }
                    }
                }, [t("span", [e._v(e._s(e.getBreadName(n, o)))])]) : t("a", {
                    attrs: {
                        "aria-label": "".concat(e.translation.SEO_Gaming, " ").concat(e.getBreadName(n, o)),
                        href: e.link(o),
                        "aria-current": 1 === Object.keys(e.list).length ? "page" : "false"
                    },
                    on: {
                        click: function(t) {
                            return e.gaDataLayer(n)
                        }
                    }
                }, [t("span", [e._v(e._s(e.translation.SEO_Gaming) + " " + e._s(e.getBreadName(n, o)))])])])
            }
            )) : e.paths ? e._l(e.paths, (function(path, n) {
                return t("li", {
                    key: "paths_".concat(n)
                }, [t("a", {
                    class: e.$style.linkFont,
                    attrs: {
                        "aria-label": "go to ".concat(path.name, " page"),
                        "aria-current": "page",
                        href: path.link
                    }
                }, [e._v(e._s(path.name))])])
            }
            )) : e._e()], 2)])
        }
        ), [], !1, (function(e) {
            this.$style = m.default.locals || m.default
        }
        ), null, null);
        t.a = component.exports
    },
    484: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(52),
        n(66);
        function o(e) {
            var t, n = "";
            if (null === (t = "api-rog.asus.com") ? void 0 : t.includes(".cn"))
                n = "cn";
            else if (e) {
                n = e.toLowerCase()
            } else
                n = "global";
            return n
        }
    },
    486: function(e, t, n) {
        "use strict";
        var o, r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.es = "es-ES",
            e.it = "it-IT",
            e.fr = "fr-FR",
            e.se = "sv-SE",
            e.dk = "da-DK",
            e.fi = "fi-FI",
            e.cz = "cs-CZ",
            e.pl = "pl-PL",
            e.hu = "hu-HU",
            e.de = "de-DE",
            e.nl = "nl-NL",
            e.pt = "pt-PT",
            e.in = "en-IN",
            e.kr = "ko-KR",
            e.id = "id-ID",
            e.uk = "en-UK",
            e.au = "en-AU",
            e.tw = "zh-TW",
            e.us = "en-US",
            e["be-nl"] = "nl-BE",
            e["be-fr"] = "fr-BE",
            e["ca-en"] = "en-CA",
            e["ca-fr"] = "fr-CA",
            e.cl = "es-CL",
            e.co = "es-CO",
            e.br = "pt-BR",
            e.pe = "es-PE",
            e.jp = "jp-JP",
            e.vn = "vi-VN",
            e.th = "th-TH",
            e.ro = "ro-RO",
            e["ua-ua"] = "ua-UA",
            e["me-en"] = "en-ME",
            e["me-ar"] = "ar-ME",
            e.ru = "ru-RU",
            e.za = "en-ZA"
        }(o || (o = {})),
        function(e) {
            e.global = "en-us",
            e["be-nl"] = "en-us",
            e.bt = "en-us",
            e["ca-en"] = "en-us",
            e.cz = "cs-cz",
            e.de = "de-de",
            e.dk = "da-dk",
            e.fi = "fi-fi",
            e.fr = "fr-fr",
            e["me-en"] = "en-us",
            e.nl = "nl-nl",
            e.no = "no",
            e.pl = "pl-pl",
            e.ro = "ro-ro",
            e.ru = "ru-ru",
            e.se = "sv-se",
            e.tw = "zh-tw",
            e.uk = "en-us",
            e.us = "en-us",
            e.au = "en-us",
            e["ch-de"] = "de-de",
            e["ch-en"] = "en-us",
            e["ch-fr"] = "fr-fr",
            e.hk = "zh-tw",
            e.hu = "hu-hu",
            e.id = "id-id",
            e.in = "en-us",
            e.it = "it-it",
            e.jp = "ja-jp",
            e.kr = "ko-kr",
            e.latin = "es-ar",
            e.lk = "en-us",
            e.mx = "es-es",
            e.my = "en-us",
            e.ph = "en-us",
            e["sa-en"] = "en-us",
            e.sg = "en-us",
            e.sk = "sk-sk",
            e.th = "th-th",
            e.tr = "tr-tr",
            e.vn = "vi-vn",
            e.za = "en-us",
            e.cn = "zh-cn",
            e["me-ar"] = "en-us",
            e.il = "he-il",
            e["sa-ar"] = "sa-ar",
            e["ua-ua"] = "uk-ua",
            e["be-fr"] = "fr-fr",
            e["africa-fr"] = "en-us",
            e.ar = "es-ar",
            e.bd = "en-us",
            e.bn = "en-us",
            e.br = "pt-br",
            e["ca-fr"] = "fr-fr",
            e.cl = "es-ar",
            e.co = "es-ar",
            e.ea = "en-us",
            e["ea-sw"] = "sw-ea",
            e.ec = "es-ar",
            e.eg = "ar-eg",
            e["eg-en"] = "en-eg",
            e.es = "es-es",
            e["hk-en"] = "en-us",
            e.ie = "en-us",
            e.mm = "mm",
            e["nafr-ar"] = "en-us",
            e.np = "en-us",
            e.nz = "en-us",
            e.pe = "es-ar",
            e.pk = "",
            e.pt = "pt-pt",
            e.py = "es-ar",
            e.uy = "es-ar",
            e.wa = "en-us"
        }(r || (r = {}))
    },
    489: function(e, t, n) {
        "use strict";
        var o, r = n(2), c = n(9), l = (n(48),
        n(38),
        n(10),
        n(3)), d = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), h = function(e, t, n, desc) {
            var o, r = arguments.length, l = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(t, n, l) : o(t, n)) || l);
            return r > 3 && l && Object.defineProperty(t, n, l),
            l
        }, _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loading = !1,
                t
            }
            return d(t, e),
            t.prototype.start = function() {
                this.loading = !0
            }
            ,
            t.prototype.finish = function() {
                this.loading = !1
            }
            ,
            t.prototype.mounted = function() {}
            ,
            t = h([l.Component], t)
        }(l.Vue), f = _, m = n(384), v = n(20);
        var component = Object(v.a)(f, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return t("div", {
                class: [e.$style.loadingContainer, Object(r.a)({}, e.$style.isLeave, !e.loading)]
            }, [t("i", {
                class: e.$style.loadingIcon
            })])
        }
        ), [], !1, (function(e) {
            this.$style = m.default.locals || m.default
        }
        ), null, null);
        t.a = component.exports
    },
    490: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(181).a
          , c = n(395)
          , l = n(20);
        var component = Object(l.a)(r, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return t("div", {
                staticClass: "rogApp",
                class: [e.lang, e.$style.defaultWrapper],
                attrs: {
                    "data-dirtype": e.dirType
                }
            }, [e.isCN ? e._e() : t("noscript", [t("iframe", {
                staticStyle: {
                    display: "none",
                    visibility: "hidden"
                },
                attrs: {
                    src: "//www.googletagmanager.com/ns.html?id=GTM-NJRLM8",
                    height: "0",
                    width: "0"
                }
            })]), e._v(" "), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.closeReminder,
                    expression: "!closeReminder"
                }],
                staticClass: "locationReminder",
                style: "position: relative; width: 100%;height: 72px; background-color:#000000;"
            }), e._v(" "), t("div", [t("Header")], 1), e._v(" "), t("main", {
                staticClass: "layout",
                class: [e.$style.main, Object(o.a)({}, "error", e.isErrorPage)]
            }, [t("nuxt", {
                class: e.$style.nuxtview
            })], 1), e._v(" "), t("div", [t("Footer")], 1)])
        }
        ), [], !1, (function(e) {
            this.$style = c.default.locals || c.default
        }
        ), null, null);
        t.a = component.exports
    },
    550: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = function(e, t, n) {
            t.setHeader("Cache-Control", "max-age=3600"),
            n()
        }
    },
    551: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            var o = n(26)
              , r = (n(96),
            n(15),
            n(34),
            n(103),
            n(52),
            n(66),
            n(65),
            n(104),
            n(10),
            n(37),
            n(35),
            n(36),
            n(202),
            n(24),
            n(90),
            n(51),
            n(553),
            n(86));
            n(1);
            function c() {
                return (c = Object(o.a)(regeneratorRuntime.mark((function t(n) {
                    var o, c, l, d, h, _, f, m, v, w, y, P, I, k, L, path, O, C, S, M, A, D;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                for (o = n.route,
                                c = n.store,
                                l = n.redirect,
                                n.req,
                                n.error,
                                d = n.env,
                                n.$axios,
                                h = decodeURIComponent(o.fullPath),
                                _ = !1; h.indexOf("//") >= 0 || h.indexOf("///") >= 0; )
                                    h = h.replace("//", "/"),
                                    _ = !0;
                                return f = "/" + h.replace(/(script|java|applet|iframe|\<meta|CONCAT|CHAR|<|>|')/g, "").replace(/^\/+/g, ""),
                                h !== f && l(301, f),
                                m = h.split("?"),
                                v = m.join("&"),
                                w = v.substr(0, v.indexOf("&")) + "?" + v.substr(v.indexOf("&") + 1, v.length),
                                m.length > 2 && l(301, w),
                                !0 === _ && l(301, h),
                                y = o.fullPath.split("/")[1].toLowerCase(),
                                P = "global",
                                I = r.a,
                                -1 !== d.baseUrl.indexOf(".cn") ? P = "cn" : "global" !== y && I.includes(y) ? "cn" === y ? ("api-rogmars.asus.com" === d.baseUrl || "dev-api-rog.asus.com" === d.baseUrl || "stage-api-rog.asus.com" === d.baseUrl ? P = "cn" : o.fullPath.indexOf("/cn") > -1 && (k = o.fullPath.replace("/cn/", ""),
                                l(301, "https://rog.asus.com.cn/".concat(k)),
                                P = "cn"),
                                P = "cn") : P = y : P = "global",
                                L = o.fullPath,
                                path = o.path,
                                "/" === L.slice(-1) || L.includes("?") || (L = o.fullPath + "/"),
                                null !== path.match(/^.*[A-Z]+.*$/) && (O = (O = new URLSearchParams(o.query).toString() ? "?" + new URLSearchParams(o.query).toString() : "").replace(/apilist=null/i, "apilist"),
                                L = path.toLowerCase() + O),
                                L !== o.fullPath && l(301, L),
                                P,
                                e.env.APILIST = "",
                                "/" === o.fullPath ? o.fullPath : o.fullPath.slice(1),
                                t.next = 25,
                                c.dispatch("setLeaveStatus", !0);
                            case 25:
                                return t.next = 27,
                                c.dispatch("setRoute", o.fullPath);
                            case 27:
                                return t.next = 29,
                                c.dispatch("getWebsiteID", {
                                    region: P
                                });
                            case 29:
                                return t.next = 31,
                                Promise.all([]);
                            case 31:
                                o.name,
                                c.getters.urlRedirectGetter && c.getters.urlRedirectGetter.targetUrl && (null === c.getters.urlRedirectGetter.offlineDate || Date.now() < c.getters.urlRedirectGetter.offlineDate) && (C = new URLSearchParams(o.query),
                                S = Array.from(C.entries()),
                                M = ["gclid", "utm_source", "utm_campaign", "utm_medium", "ttclid"],
                                S = S.filter((function(e) {
                                    return M.includes(e[0])
                                }
                                )),
                                A = new URLSearchParams(Object.fromEntries(S)),
                                D = encodeURI(A.toString()) ? (c.getters.urlRedirectGetter.targetUrl.includes("?") ? "&" : "?") + encodeURI(A.toString()) : "",
                                l(301, c.getters.urlRedirectGetter.targetUrl + D));
                            case 33:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).apply(this, arguments)
            }
            t.default = function(e) {
                return c.apply(this, arguments)
            }
        }
        .call(this, n(72))
    },
    558: function(e, t) {},
    560: function(e, t) {},
    577: function(e, t) {},
    6: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return r
        }
        )),
        n.d(t, "d", (function() {
            return c
        }
        )),
        n.d(t, "a", (function() {
            return l
        }
        ));
        n(15),
        n(104),
        n(605),
        n(10),
        n(35),
        n(610),
        n(611),
        n(612),
        n(613),
        n(614),
        n(615),
        n(617),
        n(618),
        n(619),
        n(620),
        n(621),
        n(622),
        n(623),
        n(36),
        n(70);
        function o(e) {
            var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
            return t ? t[2] : null
        }
        function r(e) {
            for (var t = new Map, n = 0, o = encodeURI(document.cookie).split(";"); n < o.length; n++) {
                var r = o[n].split("=")
                  , c = r[0]
                  , text = r[1];
                t.set(c, text)
            }
            return encodeURI(t.get(e))
        }
        function c(e, t, n) {
            var o, r, c = encodeURI(t);
            n ? ((o = new Date).setTime(o.getTime() + 864e5 * Number(n)),
            r = new Date(o).getTimezoneOffset() / 60) : ((o = new Date).setTime(o.getTime() + 2592e6),
            r = new Date(o).getTimezoneOffset() / 60),
            o.setTime(o.getTime() + 24 * (-8 - r) * 60 * 60 * 1e3);
            var l = "expires=" + o.toUTCString()
              , d = window.location.host.indexOf("asus.com.cn") > -1 ? ".asus.com.cn" : ".asus.com";
            void 0 !== c && (document.cookie = e + "=" + c + ";" + l + ";domain=" + d + ";path=/;SameSite=Lax;secure;")
        }
        function l(e) {
            document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=" + encodeURI(".asus.com") + ";"
        }
    },
    629: function(e, t, n) {
        e.exports = {}
    },
    675: function(e, t, n) {
        e.exports = n(515)
    },
    68: function(e, t, n) {
        "use strict";
        n(10),
        n(42),
        n(44),
        n(45),
        n(35),
        n(36),
        n(15),
        n(34),
        n(21);
        var o, r = n(8), c = n.n(r), l = n(87), d = n.n(l), h = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }, _ = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }, f = "api-rog.asus.com";
        (o = c.a.create({
            httpsAgent: new d.a.Agent({
                rejectUnauthorized: !1
            }),
            timeout: 15e3
        })).interceptors.request.use((function(e) {
            var t = e.params || {};
            return t.systemCode = m(),
            e.params = t,
            e
        }
        ));
        var m = function() {
            var e = window.location.host
              , t = window.location.href;
            if (t.indexOf("/event") > -1 || t.indexOf("/microsite") > -1 || t.indexOf("/campaign") > -1)
                return t.indexOf("/event") > -1 ? "rogevent" : t.indexOf("/microsite") > -1 ? "rogmicrosite" : t.indexOf("/campaign") > -1 ? "rogcampaign" : "";
            switch (e) {
            case "localhost:8000":
                return "localrog";
            case "dev-rog.asus.com":
                return "devrog";
            case "rogmars.asus.com":
                return "rogmars";
            case "stage-rog.asus.com":
                return "stagerog";
            case "rog.asus.com":
                return "rog";
            case "sowoverload.asus.com":
                return "sowoverload";
            case "www.asus.com":
                return "asus";
            case "account.asus.com":
                return "account";
            case "dev-account.asus.com":
                return "devaccount";
            case "nomos.asus.com":
                return "nomos";
            case "rog.asus.com.cn":
                return "rogcn";
            case "rog-bacchus.asus.com":
                return "devsupport";
            default:
                var n = window.location.host.replace(".asus.com", "").replace(".", "");
                return "rog".concat(n)
            }
        };
        t.a = {
            getSearchSuggestion: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n, r;
                    return _(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return e = param.Website,
                            t = param.Source,
                            n = param.RowLimit,
                            r = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/SuggestionV1/").concat(e, "/").concat(t, "/").concat(n),
                                params: {
                                    SearchKey: r
                                }
                            })];
                        case 1:
                            return [2, c.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchExplore: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n;
                    return _(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return e = param.Website,
                            t = param.Count,
                            n = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/Explore/ExploreV1/").concat(e, "/").concat(t),
                                params: {
                                    SearchKey: n
                                }
                            })];
                        case 1:
                            return [2, r.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchProductResult: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n, r, c, l;
                    return _(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            return e = param.Website,
                            t = param.PageSize,
                            n = param.Page,
                            r = param.Sort,
                            c = param.ProductCategory,
                            l = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/ResultV1/").concat(e, "/Product/").concat(t, "/").concat(n, "/").concat(c, "/").concat(r),
                                params: {
                                    SearchKey: l
                                }
                            })];
                        case 1:
                            return [2, d.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchCampaignResult: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n, r, c;
                    return _(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return e = param.Website,
                            t = param.PageSize,
                            n = param.Page,
                            r = param.Sort,
                            c = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/ResultV1/").concat(e, "/Campaign/").concat(t, "/").concat(n, "/").concat(r),
                                params: {
                                    SearchKey: c
                                }
                            })];
                        case 1:
                            return [2, l.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchFAQResult: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n, r, c, l, d, h, m, v;
                    return _(this, (function(_) {
                        switch (_.label) {
                        case 0:
                            return e = param.Website,
                            t = param.PageSize,
                            n = param.Page,
                            r = param.Sort,
                            c = param.FAQTopic,
                            l = param.FAQCategory,
                            d = param.FAQProductLine,
                            h = param.LocalFlag,
                            m = param.SearchKey,
                            v = param.Callback,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/ResultV1/").concat(e, "/Faq/").concat(t, "/").concat(n, "/").concat(r, "/").concat(c, "/").concat(l, "/").concat(d, "/").concat(h),
                                params: {
                                    SearchKey: m,
                                    Callback: v
                                }
                            })];
                        case 1:
                            return [2, _.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchArticleResult: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t, n, r, c, l, d;
                    return _(this, (function(h) {
                        switch (h.label) {
                        case 0:
                            return e = param.Website,
                            t = param.PageSize,
                            n = param.Page,
                            r = param.Sort,
                            c = param.ArticleDateRange,
                            l = param.ArticleCategory,
                            d = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/ResultV1/").concat(e, "/Article/").concat(t, "/").concat(n, "/").concat(r),
                                params: {
                                    SearchKey: d,
                                    ArticleDateRange: c,
                                    ArticleCategory: l
                                }
                            })];
                        case 1:
                            return [2, h.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchArticleFilter: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t;
                    return _(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = param.Website,
                            t = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/FiltersV1/").concat(e, "/article"),
                                params: {
                                    SearchKey: t
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchProductFilter: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t;
                    return _(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = param.Website,
                            t = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/FiltersV1/").concat(e, "/product"),
                                params: {
                                    SearchKey: t
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchFAQFilter: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e, t;
                    return _(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = param.Website,
                            t = param.SearchKey,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/FiltersV1/").concat(e, "/faq"),
                                params: {
                                    SearchKey: t
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSearchQuick: function(e, param) {
                return h(this, void 0, Promise, (function() {
                    var e;
                    return _(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return e = param.websiteId,
                            [4, o({
                                method: "get",
                                url: "https://".concat(f, "/recent-data/search-api/v1/SuggestionV1/QuickSearch"),
                                params: {
                                    websiteId: e
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
        }
    },
    71: function(e, t, n) {
        "use strict";
        function o() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        n.d(t, "a", (function() {
            return o
        }
        ))
    },
    73: function(e, t, n) {
        "use strict";
        n(10),
        n(42),
        n(44),
        n(45),
        n(35),
        n(36),
        n(15),
        n(21);
        var o = n(8)
          , r = n.n(o)
          , c = n(33)
          , l = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , d = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , h = {
            rogGeo: function() {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "https://rog.asus.com/geo"
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            checkGeo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v1/GeoCheck"),
                                params: {
                                    ISOCode: param.ISOCode,
                                    Url: param.Url
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getWebsiteInfo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/route/info?weburl=").concat(param.weburl)
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            postToken: function() {
                return l(this, void 0, Promise, (function() {
                    var e, t;
                    return d(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = "",
                            encodeURI(window.location.origin),
                            t = "Em3l6i7t2qe",
                            e = Object(c.c)() ? "https://nomos.asus.com/api/v1/Token/Get" : "https://sowoverload.asus.com/APIToken/api/v1/Token/Get",
                            [4, r()({
                                method: "post",
                                url: e,
                                params: {
                                    api_key: t
                                }
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            usersProfile: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(e, "/elite/api/v1/users/Users_Profile"),
                                params: {
                                    WebSiteCode: param.WebSiteCode,
                                    aticket: param.aticket
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getEliteBanner: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/Banner"),
                                params: {
                                    WebSiteCode: param.WebSiteCode,
                                    BannerType: param.BannerType
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getTranslation: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/Translation"),
                                params: {
                                    WebsiteId: param.WebsiteId,
                                    PageTypeId: param.PageTypeId,
                                    Str_key: ""
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            RedirectCheck: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v1/RedirectCheck"),
                                params: {
                                    aticket: param.aticket,
                                    url: param.url
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getHeaderFooter: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/HeaderFooter"),
                                params: {
                                    WebsiteCode: param.WebsiteCode
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getGuideInfo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/GuideInfo"),
                                params: {
                                    WebsiteCode: param.websiteCode,
                                    Type: param.type
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getSystemList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/SystemList"),
                                params: {
                                    WebSiteCode: param.WebSiteCode,
                                    Type: param.Type
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getFaqList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v1/FaqList"),
                                params: {
                                    WebsiteId: param.WebsiteId,
                                    SearchKey: param.SearchKey
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getTierList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/cth/TierList"),
                                params: {
                                    WebsiteId: param.WebsiteId
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getWidget: function(e, t) {
                return new Promise((function(n, o) {
                    r.a.get("".concat(e, "/elite/api/cth/Widgets"), {
                        params: t
                    }).then((function(e) {
                        n(e.data)
                    }
                    )).catch((function(e) {
                        o(e)
                    }
                    ))
                }
                ))
            },
            getActivityList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/ActivityList"),
                                params: {
                                    aticket: param.aticket,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getRewardList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/RewardList"),
                                params: {
                                    aticket: param.aticket,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getUserProfile: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(e, "/elite/api/v2/users/UserProfile"),
                                params: {
                                    aticket: param.aticket,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getV2TierList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/cth/TierList"),
                                params: {
                                    WebsiteCode: param.WebSiteCode
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getNewGuideInfo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/GuideInfo"),
                                params: {
                                    WebsiteCode: param.WebSiteCode,
                                    Type: param.type
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getRegisterPointCheck: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/RegisterPointCheck"),
                                params: {
                                    DisplayName: param.DisplayName
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getActivityInfo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/ActivityInfo"),
                                params: {
                                    aticket: param.aticket,
                                    activityId: param.activityId,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getRewardInfo: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/RewardInfo"),
                                params: {
                                    aticket: param.aticket,
                                    rewardId: param.rewardId,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getActivityUpdate: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(e, "/elite/api/v2/ActivityUpdate"),
                                data: {
                                    qRecordItemObj: param.qRecordItemObj,
                                    codes: param.codes,
                                    aticket: param.aticket,
                                    activityId: param.activityId,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getRewardUpdate: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(e, "/elite/api/v2/RewardUpdate"),
                                data: {
                                    aticket: param.aticket,
                                    rewardId: param.rewardId,
                                    quantity: param.quantity,
                                    physicalItemObj: param.physicalItemObj,
                                    personalObj: param.personalObj,
                                    terms: param.terms,
                                    WebsiteCode: param.WebSiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getTranslateList: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(e, "/elite/api/v2/TranslateList"),
                                params: {
                                    WebsiteCode: param.WebSiteCode
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            productRegister: function(e, param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(e, "/elite/api/v2/ProductRegister"),
                                data: {
                                    aticket: param.aticket,
                                    purchaseTime: param.purchaseTime,
                                    purchasePlace: param.purchasePlace,
                                    serialNumber: param.serialNumber,
                                    checkNumber: param.checkNumber,
                                    registerTime: param.registerTime,
                                    invoicePath: param.invoicePath,
                                    WebsiteCode: param.WebsiteCode
                                },
                                headers: {
                                    api_key: param.api_key,
                                    Token: param.Token
                                }
                            })];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getRegion: function(param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(param.param.origin, "/api/RegionApi")
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getUserInfo: function(param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(param.param.origin, "/api/EliteApi/Get"),
                                data: {
                                    TokenCaller: param.param.api_key,
                                    Token: param.param.Token,
                                    Ticket: param.param.aticket
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getUserInitialize: function(param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "post",
                                url: "".concat(param.param.origin, "/api/EliteApi/Initialize"),
                                data: {
                                    TokenCaller: param.param.api_key,
                                    Token: param.param.Token,
                                    Ticket: param.param.aticket,
                                    IsAgreeTermsAndCondition: param.param.agreeTermsAndCondition,
                                    IsAgreePrivacyPolicy: param.param.agreePrivacyPolicy
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getTranslationApi: function(param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(param.param.origin, "/api/TranslationApi"),
                                params: {
                                    pageId: param.param.pageId,
                                    WebsiteCode: param.param.WebSiteCode,
                                    systemCode: param.param.systemCode
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            },
            getPrivacyApi: function(param) {
                return l(this, void 0, Promise, (function() {
                    return d(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, r()({
                                method: "get",
                                url: "".concat(param.param.origin, "/api/PrivacyApi/Get"),
                                params: {
                                    WebsiteCode: param.param.WebsiteCode,
                                    SystemCode: param.param.systemCode,
                                    TranslationKey: param.param.translationKey
                                }
                            })];
                        case 1:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
        }
          , _ = n(1)
          , f = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }
          , m = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }
          , v = function() {
            function e() {
                this.routeInfoParam = {
                    url: ""
                }
            }
            return e.prototype.pathnameVal = function() {
                try {
                    return window.location.pathname
                } catch (e) {
                    return ""
                }
            }
            ,
            e.prototype.isECSite = function(e) {
                return e.indexOf("stage.store") > -1 ? "https://dev-rog.asus.com" : "https://rog.asus.com"
            }
            ,
            e.prototype.originVal = function() {
                try {
                    return Object(c.a)() ? encodeURI(window.location.origin) : this.isECSite(encodeURI(window.location.origin))
                } catch (e) {
                    return ""
                }
            }
            ,
            e.prototype.getRouteInfoAPI = function(e) {
                return f(this, void 0, Promise, (function() {
                    var t, n, o, r;
                    return m(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return t = e ? this.splitePathNameVal(e.path) : this.splitePathNameVal(),
                            n = this.originVal(),
                            o = this.chkPathnameSite(),
                            r = this.routeInfoParam,
                            t && (r.url = "".concat(t)),
                            o.type ? [4, h.getWebsiteInfo(n, r)] : [3, 2];
                        case 1:
                        case 3:
                            return [2, c.sent()];
                        case 2:
                            return [4, _.a.getRouteInfo(r)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.chkPathnameSite = function() {
                var e = this.pathnameVal()
                  , t = {
                    type: null,
                    basicPathname: null
                };
                return t.type = /(\/elite)/gi.test(e),
                t.basicPathname = e,
                t
            }
            ,
            e.prototype.splitePathNameVal = function(path) {
                void 0 === path && (path = "");
                return "" === path ? this.pathnameVal() : path
            }
            ,
            e
        }();
        t.a = v
    },
    86: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return r
        }
        ));
        n(21);
        var o = ["global", "de", "pl", "se", "dk", "cz", "it", "hu", "fi", "pt", "es", "fr", "nl", "be-fr", "be-nl"].concat(["bt", "me-en", "lk", "in", "tr", "tw", "bd", "cn", "hk", "vn", "kr", "jp", "ru", "th", "sg", "nz", "ph", "id", "au", "my", "br", "latin", "no", "uk", "sk", "ch-fr", "ch-it", "ch-de", "ro", "rs", "ua", "gr", "za", "ca-fr", "ca-en", "us", "me-ar", "mx", "bg", "ie", "il", "ea", "middleeast-fa", "eg", "ua-ua", "nafr-ar", "africa-fr", "np", "wa", "lt", "lv", "ee", "kz", "mm", "eg-en", "hk-en", "co", "cl", "ar", "pe", "ea-sw", "ch-en", "bn", "gr-el", "ec", "py", "uy", "pk", "kh", "sa-ar", "sa-en", "gr-en", "rs-en"])
          , r = ["il", "eg", "me-ar", "nafr-ar", "sa-ar"]
    },
    88: function(e, t, n) {
        "use strict";
        var o, r = n(9), c = (n(48),
        n(38),
        n(10),
        n(42),
        n(44),
        n(45),
        n(35),
        n(36),
        n(65),
        n(28),
        n(21),
        n(24),
        n(15),
        n(30)), l = n(143), d = n(399), h = n(71), _ = n(6), f = (o = function(e, b) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, b) {
                e.__proto__ = b
            }
            || function(e, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
            }
            ,
            o(e, b)
        }
        ,
        function(e, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function t() {
                this.constructor = e
            }
            o(e, b),
            e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype,
            new t)
        }
        ), m = function(e, t, n, desc) {
            var o, c = arguments.length, l = c < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, n, desc);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (o = e[i]) && (l = (c < 3 ? o(l) : c > 3 ? o(t, n, l) : o(t, n)) || l);
            return c > 3 && l && Object.defineProperty(t, n, l),
            l
        }, v = function(e, t, n, o) {
            return new (n || (n = Promise))((function(r, c) {
                function l(e) {
                    try {
                        h(o.next(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function d(e) {
                    try {
                        h(o.throw(e))
                    } catch (e) {
                        c(e)
                    }
                }
                function h(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(l, d)
                }
                h((o = o.apply(e, t || [])).next())
            }
            ))
        }, w = function(e, body) {
            var t, n, o, g, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return g = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                return this
            }
            ),
            g;
            function c(c) {
                return function(l) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; g && (g = 0,
                        c[0] && (r = 0)),
                        r; )
                            try {
                                if (t = 1,
                                n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, c[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = r.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        r.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(c);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                c = body.call(e, r)
                            } catch (e) {
                                c = [6, e],
                                n = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, l])
                }
            }
        }, y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.windowSize = {
                    width: 0,
                    height: 0
                },
                t.refreshSlideShowStatus = !1,
                t.deviceType = "pc",
                t.websiteMapping = [{
                    WebsiteId: 1,
                    WebPath: "global",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 2,
                    WebPath: "mx",
                    AccountLang: "es-es"
                }, {
                    WebsiteId: 3,
                    WebPath: "es",
                    AccountLang: "es-es"
                }, {
                    WebsiteId: 4,
                    WebPath: "th",
                    AccountLang: "th-th"
                }, {
                    WebsiteId: 5,
                    WebPath: "tw",
                    AccountLang: "zh-tw"
                }, {
                    WebsiteId: 6,
                    WebPath: "us",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 7,
                    WebPath: "br",
                    AccountLang: "pt-br"
                }, {
                    WebsiteId: 8,
                    WebPath: "ca-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 9,
                    WebPath: "ca-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 10,
                    WebPath: "latin",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 11,
                    WebPath: "tr",
                    AccountLang: "tr-tr"
                }, {
                    WebsiteId: 12,
                    WebPath: "it",
                    AccountLang: "it-it"
                }, {
                    WebsiteId: 13,
                    WebPath: "jp",
                    AccountLang: "ja-jp"
                }, {
                    WebsiteId: 14,
                    WebPath: "me-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 15,
                    WebPath: "lk",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 16,
                    WebPath: "in",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 17,
                    WebPath: "bd",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 18,
                    WebPath: "cn",
                    AccountLang: "zh-cn"
                }, {
                    WebsiteId: 19,
                    WebPath: "hk",
                    AccountLang: "zh-tw"
                }, {
                    WebsiteId: 20,
                    WebPath: "vn",
                    AccountLang: "vi-vn"
                }, {
                    WebsiteId: 21,
                    WebPath: "kr",
                    AccountLang: "ko-kr"
                }, {
                    WebsiteId: 22,
                    WebPath: "ru",
                    AccountLang: "ru-ru"
                }, {
                    WebsiteId: 23,
                    WebPath: "sg",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 24,
                    WebPath: "nz",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 25,
                    WebPath: "ph",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 26,
                    WebPath: "id",
                    AccountLang: "id-id"
                }, {
                    WebsiteId: 27,
                    WebPath: "au",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 28,
                    WebPath: "my",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 29,
                    WebPath: "de",
                    AccountLang: "de-de"
                }, {
                    WebsiteId: 30,
                    WebPath: "pl",
                    AccountLang: "pl-pl"
                }, {
                    WebsiteId: 31,
                    WebPath: "no",
                    AccountLang: "no"
                }, {
                    WebsiteId: 32,
                    WebPath: "se",
                    AccountLang: "sv-se"
                }, {
                    WebsiteId: 33,
                    WebPath: "dk",
                    AccountLang: "da-dk"
                }, {
                    WebsiteId: 34,
                    WebPath: "uk",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 35,
                    WebPath: "sk",
                    AccountLang: "sk-sk"
                }, {
                    WebsiteId: 36,
                    WebPath: "cz",
                    AccountLang: "cs-cz"
                }, {
                    WebsiteId: 37,
                    WebPath: "ch-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 39,
                    WebPath: "ch-de",
                    AccountLang: "de-de"
                }, {
                    WebsiteId: 40,
                    WebPath: "ro",
                    AccountLang: "ro-ro"
                }, {
                    WebsiteId: 41,
                    WebPath: "rs",
                    AccountLang: "sr"
                }, {
                    WebsiteId: 42,
                    WebPath: "ua",
                    AccountLang: "ru-ua"
                }, {
                    WebsiteId: 43,
                    WebPath: "hu",
                    AccountLang: "hu-hu"
                }, {
                    WebsiteId: 44,
                    WebPath: "fi",
                    AccountLang: "fi-fi"
                }, {
                    WebsiteId: 45,
                    WebPath: "pt",
                    AccountLang: "pt-pt"
                }, {
                    WebsiteId: 46,
                    WebPath: "fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 47,
                    WebPath: "be-nl",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 48,
                    WebPath: "be-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 49,
                    WebPath: "nl",
                    AccountLang: "nl-nl"
                }, {
                    WebsiteId: 50,
                    WebPath: "gr",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 51,
                    WebPath: "za",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 52,
                    WebPath: "me-ar",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 53,
                    WebPath: "bg",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 54,
                    WebPath: "ie",
                    AccountLang: "he-il"
                }, {
                    WebsiteId: 55,
                    WebPath: "il",
                    AccountLang: "he-il"
                }, {
                    WebsiteId: 56,
                    WebPath: "ea",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 57,
                    WebPath: "middleeast-fa",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 58,
                    WebPath: "ua-ua",
                    AccountLang: "uk-ua"
                }, {
                    WebsiteId: 59,
                    WebPath: "nafr-ar",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 60,
                    WebPath: "nafr-fr",
                    AccountLang: "fr-fr"
                }, {
                    WebsiteId: 61,
                    WebPath: "np",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 62,
                    WebPath: "wa",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 64,
                    WebPath: "lt",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 65,
                    WebPath: "lv",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 66,
                    WebPath: "ee",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 67,
                    WebPath: "kz",
                    AccountLang: "ru-ru"
                }, {
                    WebsiteId: 68,
                    WebPath: "mm",
                    AccountLang: "mm"
                }, {
                    WebsiteId: 69,
                    WebPath: "hk-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 70,
                    WebPath: "co",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 71,
                    WebPath: "cl",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 72,
                    WebPath: "ar",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 73,
                    WebPath: "pe",
                    AccountLang: "es-ar"
                }, {
                    WebsiteId: 74,
                    WebPath: "ea-sw",
                    AccountLang: "sw-ea"
                }, {
                    WebsiteId: 78,
                    WebPath: "ch-en",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 81,
                    WebPath: "bn",
                    AccountLang: "en-us"
                }, {
                    WebsiteId: 82,
                    WebPath: "gr-el",
                    AccountLang: "el"
                }, {
                    WebsiteId: 85,
                    WebPath: "eg",
                    AccountLang: "ar-eg"
                }, {
                    WebsiteId: 86,
                    WebPath: "eg-en",
                    AccountLang: "en-eg"
                }, {
                    WebsiteId: 87,
                    WebPath: "bt",
                    AccountLang: "en-us"
                }],
                t.siteId = "",
                t.siteName = "",
                t
            }
            return f(t, e),
            t.prototype.asyncData = function(e) {
                e.query,
                e.params;
                var t = e.route
                  , n = e.store;
                e.req;
                return v(this, void 0, Promise, (function() {
                    var e, o;
                    return w(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return e = "/" === t.fullPath ? t.fullPath : t.fullPath.slice(1),
                            [4, n.dispatch("getRoute", {
                                url: e
                            })];
                        case 1:
                            return r.sent(),
                            console.log("error async"),
                            o = n.getters.mappingWebsiteId,
                            n.getters.routeInfo.levelTagId,
                            [4, Promise.all([n.dispatch("getHeader", {
                                params: {
                                    WebsiteId: o
                                }
                            }), n.dispatch("getFooterAPI", {
                                WebsiteId: o
                            }), n.dispatch("getTranslation", {
                                WebsiteId: o
                            }), n.dispatch("getAccountMenu", {
                                WebsiteId: o
                            })])];
                        case 2:
                            return r.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            Object.defineProperty(t.prototype, "lang", {
                get: function() {
                    return this.routeInfo ? this.routeInfo.websitePath : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.head = function() {
                var e, t, n, o, r, c, l, d, h, _, meta = null === (e = this.routeInfo) || void 0 === e ? void 0 : e.metaInfo;
                return {
                    title: null === (t = meta[0]) || void 0 === t ? void 0 : t.metaTitle,
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: null === (n = meta[0]) || void 0 === n ? void 0 : n.description
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: null === (o = meta[1]) || void 0 === o ? void 0 : o.metaTitle
                    }, {
                        hid: "og:type",
                        property: "og:type",
                        content: "website"
                    }, {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "@ROG"
                    }, {
                        hid: "og:description",
                        property: "og:description",
                        content: null === (r = meta[0]) || void 0 === r ? void 0 : r.description
                    }, {
                        hid: "og:url",
                        property: "og:url",
                        content: null === (c = this.routeInfo) || void 0 === c ? void 0 : c.fullPath
                    }, {
                        hid: "og:image",
                        property: "og:image",
                        content: null === (l = meta[0]) || void 0 === l ? void 0 : l.mediaPC
                    }, {
                        hid: "twitter:title",
                        property: "twitter:title",
                        content: null === (d = meta[2]) || void 0 === d ? void 0 : d.metaTitle
                    }, {
                        hid: "twitter:site",
                        property: "twitter:site",
                        content: "@ROG"
                    }, {
                        hid: "twitter:description",
                        property: "twitter:description",
                        content: null === (h = meta[2]) || void 0 === h ? void 0 : h.description
                    }, {
                        hid: "twitter:card",
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, {
                        hid: "twitter:image",
                        property: "twitter:image",
                        content: null === (_ = meta[2]) || void 0 === _ ? void 0 : _.mediaPC
                    }],
                    link: [{
                        rel: "canonical",
                        href: "https://rog.asus.com" + this.routeQuery
                    }],
                    script: []
                }
            }
            ,
            t.prototype.beforeMount = function() {
                this.windowSize = Object(h.a)(),
                this.windowSize.width <= 768 && (this.deviceType = "mobile")
            }
            ,
            t.prototype.mounted = function() {
                var e = this;
                if (window) {
                    this.siteId = "";
                    if ("rog.asus.com.cn" === encodeURI(window.location.host))
                        "https://rog.asus.com.cn";
                    else
                        switch (encodeURI(window.location.host)) {
                        case "rogmars.asus.com":
                            "https://rogmars.asus.com";
                            break;
                        case "dev-rog.asus.com":
                            "https://dev-rog.asus.com";
                            break;
                        case "stage-rog.asus.com":
                            "https://stage-rog.asus.com";
                            break;
                        case "rog.asus.com":
                            "https://rog.asus.com"
                        }
                    if ("undefined" != typeof window) {
                        var t = this.routeInfo.websitePath;
                        "error" !== t.toLowerCase() ? this.websiteMapping.forEach((function(n) {
                            n.WebPath === t && (e.siteId = n.WebsiteId,
                            e.siteName = "global" === n.WebPath ? "" : n.WebPath,
                            e.getHeader({
                                params: {
                                    WebsiteId: e.siteId
                                }
                            }),
                            e.getFooterAPI({
                                WebsiteId: e.siteId
                            }),
                            e.getTranslation({
                                WebsiteId: e.siteId
                            }),
                            e.getAccountMenu({
                                WebsiteId: e.siteId
                            }))
                        }
                        )) : this.siteId = Object(_.b)("rog_site_id")
                    }
                }
            }
            ,
            t.prototype.redirectUrl = function() {
                var e = this.$route
                  , area = "/";
                if ("undefined" != typeof window) {
                    var t = encodeURI(window.location.pathname).split("/")[1];
                    area = "rog.asus.com.cn" === window.location.host ? "/" : Object(_.b)("rog_site_area") ? "global" === Object(_.b)("rog_site_area") ? "".concat(encodeURI(window.location.origin)) : "".concat(encodeURI(window.location.origin), "/").concat(Object(_.b)("rog_site_area")) : "error" === t ? "".concat(encodeURI(window.location.origin)) : "".concat(encodeURI(window.location.origin), "/").concat(t)
                }
                if (e && "Error" === e.name)
                    return e.redirectedFrom && /\elite/gi.test(e.redirectedFrom) ? "/elite" : area
            }
            ,
            m([Object(c.Getter)("routeInfo")], t.prototype, "routeInfo", void 0),
            m([Object(c.Getter)("metaData")], t.prototype, "metaData", void 0),
            m([Object(c.Getter)("mappingWebsiteId")], t.prototype, "mappingWebsiteId", void 0),
            m([Object(c.Getter)("translation")], t.prototype, "translation", void 0),
            m([Object(c.Getter)("routeQuery")], t.prototype, "routeQuery", void 0),
            m([Object(c.Action)("getTranslation")], t.prototype, "getTranslation", void 0),
            m([Object(c.Action)("getHeader")], t.prototype, "getHeader", void 0),
            m([Object(c.Action)("getFooterAPI")], t.prototype, "getFooterAPI", void 0),
            m([Object(c.Action)("getAccountMenu")], t.prototype, "getAccountMenu", void 0),
            t = m([l.Jsonld, Object(c.Component)({
                components: {}
            })], t)
        }(Object(c.mixins)(d.a)), P = y, I = n(383), k = n(20);
        var component = Object(k.a)(P, (function() {
            var e = this
              , t = e._self._c;
            e._self._setupProxy;
            return t("div", {
                staticClass: "for404",
                class: e.$style.errorContainer
            }, [t("div", {
                class: e.$style.errorWrapper
            }, [t("div", {
                class: e.$style.errorContent
            }, [t("i", {
                class: e.$style.errorPatten
            }), e._v(" "), t("h1", {
                class: e.$style.errorSlogan
            }, [e._v(e._s(e.translation["404_Sorry"]))]), e._v(" "), t("p", {
                class: e.$style.errorInfo
            }, [e._v(e._s(e.translation["404_Not_Found"]))]), e._v(" "), t("a", {
                attrs: {
                    href: e.redirectUrl()
                }
            }, [t("p", {
                class: [e.$style.errorInfo, e.$style.errorReturnLink]
            }, [e._v(e._s(e.translation["404_Back_to_Home"])), t("i", {
                class: e.$style.returnIcon
            })])])])])])
        }
        ), [], !1, (function(e) {
            this.$style = I.default.locals || I.default
        }
        ), null, null);
        t.a = component.exports
    }
}]);
