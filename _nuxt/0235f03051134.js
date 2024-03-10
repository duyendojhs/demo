(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([[38], {
    1164: function(t, e, o) {
        "use strict";
        var n = o(881)
          , r = o.n(n);
        o.d(e, "default", (function() {
            return r.a
        }
        ))
    },
    674: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(927).a
          , r = o(1164)
          , l = o(20);
        var component = Object(l.a)(n, (function() {
            var t = this
              , e = t._self._c;
            t._self._setupProxy;
            return e("div", {
                staticClass: "landingPageLayout"
            }, [e("div", {
                staticClass: "wrapper"
            }, [void 0 !== t.overviewData && t.overviewData.length > 0 ? e("div", [e("div", {
                staticClass: "modules-content",
                attrs: {
                    id: "module-system-container"
                },
                domProps: {
                    innerHTML: t._s(t.overviewData)
                }
            })]) : t._e()]), t._v(" "), e("script", {
                attrs: {
                    type: "application/javascript",
                    src: "/dist/overview/js/overview.js"
                }
            }), t._v(" "), e("p", {
                staticClass: "sr-only"
            }, [t._v(t._s(t.translation.ADA_Footer))]), t._v(" "), t.isShowApiList ? e("div", {
                staticClass: "apiList"
            }, [t._v("\n    " + t._s(t.apilist) + "\n  ")]) : t._e()])
        }
        ), [], !1, (function(t) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        e.default = component.exports
    },
    676: function(t, e, o) {
        t.exports = {
            loadingContainer: "fullLoading__loadingContainer__sy4Rg",
            isFullContentLoading: "fullLoading__isFullContentLoading__1LWxP",
            loadingIcon: "fullLoading__loadingIcon__g1tiM",
            "rotate-ltr": "fullLoading__rotate-ltr__8qKue",
            "rotate-rtl": "fullLoading__rotate-rtl__by1XC",
            isLeave: "fullLoading__isLeave__ZVDz5",
            fadeinout: "fullLoading__fadeinout__Tmef9"
        }
    },
    678: function(t, e, o) {
        "use strict";
        var n, r = o(2), l = o(9), c = (o(48),
        o(38),
        o(10),
        o(3)), d = (n = function(t, b) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, b) {
                t.__proto__ = b
            }
            || function(t, b) {
                for (var p in b)
                    Object.prototype.hasOwnProperty.call(b, p) && (t[p] = b[p])
            }
            ,
            n(t, b)
        }
        ,
        function(t, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            function e() {
                this.constructor = t
            }
            n(t, b),
            t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype,
            new e)
        }
        ), f = function(t, e, o, desc) {
            var n, r = arguments.length, c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, o, desc);
            else
                for (var i = t.length - 1; i >= 0; i--)
                    (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c),
            c
        }, h = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return d(e, t),
            f([Object(c.Prop)({
                default: !0
            })], e.prototype, "isLoading", void 0),
            f([Object(c.Prop)({
                default: !1
            })], e.prototype, "isContentLoading", void 0),
            e = f([c.Component], e)
        }(c.Vue), y = h, v = o(683), w = o(20);
        var component = Object(w.a)(y, (function() {
            var t = this
              , e = t._self._c;
            t._self._setupProxy;
            return e("div", {
                class: [t.$style.loadingContainer, Object(r.a)({}, t.$style.isFullContentLoading, t.isContentLoading), Object(r.a)({}, t.$style.isLeave, !t.isLoading)]
            }, [e("i", {
                class: t.$style.loadingIcon
            })])
        }
        ), [], !1, (function(t) {
            this.$style = v.default.locals || v.default
        }
        ), null, null);
        e.a = component.exports
    },
    683: function(t, e, o) {
        "use strict";
        var n = o(676)
          , r = o.n(n);
        o.d(e, "default", (function() {
            return r.a
        }
        ))
    },
    881: function(t, e, o) {
        t.exports = {}
    },
    927: function(t, e, o) {
        "use strict";
        (function(t) {
            var n, r = o(9), l = (o(48),
            o(38),
            o(10),
            o(42),
            o(44),
            o(45),
            o(35),
            o(36),
            o(65),
            o(21),
            o(77),
            o(3)), c = o(5), d = o(1), f = o(405), h = o(401), y = o(678), v = (n = function(t, b) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, b) {
                    t.__proto__ = b
                }
                || function(t, b) {
                    for (var p in b)
                        Object.prototype.hasOwnProperty.call(b, p) && (t[p] = b[p])
                }
                ,
                n(t, b)
            }
            ,
            function(t, b) {
                if ("function" != typeof b && null !== b)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                function e() {
                    this.constructor = t
                }
                n(t, b),
                t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype,
                new e)
            }
            ), w = function(t, e, o, desc) {
                var n, l = arguments.length, c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate)
                    c = Reflect.decorate(t, e, o, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)
                        (n = t[i]) && (c = (l < 3 ? n(c) : l > 3 ? n(e, o, c) : n(e, o)) || c);
                return l > 3 && c && Object.defineProperty(e, o, c),
                c
            }, _ = function(t, e, o, n) {
                return new (o || (o = Promise))((function(r, l) {
                    function c(t) {
                        try {
                            f(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }
                    function d(t) {
                        try {
                            f(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }
                    function f(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value,
                        e instanceof o ? e : new o((function(t) {
                            t(e)
                        }
                        ))).then(c, d)
                    }
                    f((n = n.apply(t, e || [])).next())
                }
                ))
            }, m = function(t, body) {
                var e, o, n, g, r = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }
                ),
                g;
                function l(l) {
                    return function(c) {
                        return function(l) {
                            if (e)
                                throw new TypeError("Generator is already executing.");
                            for (; g && (g = 0,
                            l[0] && (r = 0)),
                            r; )
                                try {
                                    if (e = 1,
                                    o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o),
                                    0) : o.next) && !(n = n.call(o, l[1])).done)
                                        return n;
                                    switch (o = 0,
                                    n && (l = [2 & l[0], n.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        n = l;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        o = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = r.trys,
                                        (n = n.length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
                                            r.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && r.label < n[1]) {
                                            r.label = n[1],
                                            n = l;
                                            break
                                        }
                                        if (n && r.label < n[2]) {
                                            r.label = n[2],
                                            r.ops.push(l);
                                            break
                                        }
                                        n[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    l = body.call(t, r)
                                } catch (t) {
                                    l = [6, t],
                                    o = 0
                                } finally {
                                    e = n = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, c])
                    }
                }
            }, O = function(e) {
                function o() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.contentHTML = "",
                    t.nowSite = "",
                    t.pageLoadingStatus = !0,
                    t.content = "",
                    t.metaTitle = "ROG - Republic of Gamers｜Global | The Choice of Champions",
                    t.area = "",
                    t.metaLink = "",
                    t.apiListContent = "",
                    t.overview = "",
                    t
                }
                return v(o, e),
                o.prototype.asyncData = function(e) {
                    var o = e.query
                      , n = (e.params,
                    e.route)
                      , r = e.store
                      , l = e.req
                      , c = e.error
                      , f = e.redirect;
                    return _(this, void 0, Promise, (function() {
                        var e, h, y, v, w, _, O, L;
                        return m(this, (function(m) {
                            switch (m.label) {
                            case 0:
                                return e = "/" === n.fullPath ? n.fullPath : n.fullPath.slice(1),
                                [4, r.dispatch("getRoute", {
                                    url: e
                                })];
                            case 1:
                                return m.sent(),
                                -1 !== r.getters.routeInfo.type ? [3, 3] : [4, d.a.getRouteRedirect({
                                    url: e
                                }).then((function(t) {
                                    -2 === t.data.result.type && f(t.data.result.redirectUrl)
                                }
                                ))];
                            case 2:
                                m.sent(),
                                c({
                                    statusCode: 404,
                                    message: "頁面不存在"
                                }),
                                m.label = 3;
                            case 3:
                                return "",
                                l && l.headers && l.headers.authorization ? (h = l.headers.authorization,
                                [4, r.dispatch("setAuth", h)]) : [3, 5];
                            case 4:
                                m.sent(),
                                m.label = 5;
                            case 5:
                                return y = r.getters.mappingWebsiteId,
                                r.getters.routeInfo.levelTagId,
                                v = r.getters.routeInfo.lpContentId,
                                w = r.getters.routeInfo.lpContentRowId,
                                [4, Promise.all([r.dispatch("getHeader", {
                                    params: {
                                        WebsiteId: y
                                    }
                                }), r.dispatch("getFooterAPI", {
                                    WebsiteId: y
                                }), r.dispatch("getTranslation", {
                                    WebsiteId: y,
                                    isRogSite: !0,
                                    isElite: !1
                                }), r.dispatch("getAccountMenu", {
                                    WebsiteId: y
                                })])];
                            case 6:
                                return m.sent(),
                                _ = "",
                                null === v ? [3, 8] : [4, d.a.contentTemplate({
                                    params: {
                                        DataId: o.pageid ? o.pageid : v || "",
                                        DataRowId: o.datarowid ? o.datarowid : w || ""
                                    }
                                }).then((function(t) {
                                    return t.data.result.dataContent
                                }
                                )).catch((function(t) {
                                    c({
                                        statusCode: 404,
                                        message: "頁面不存在"
                                    })
                                }
                                ))];
                            case 7:
                                _ = m.sent(),
                                m.label = 8;
                            case 8:
                                return O = "",
                                O = l ? l.headers.host.indexOf("azure") > -1 ? "rog.asus.com/" + e : l.headers.host + "/" + e : window.location.host + n.fullPath,
                                L = t.env.APILIST,
                                "rog.asus.com" !== n.host && n.fullPath.indexOf("apilist") > -1 && (r.dispatch("APIList", L),
                                r.dispatch("showAPIList", !0)),
                                [2, {
                                    apiListContent: L,
                                    siteURL: O,
                                    overviewData: _
                                }]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                o.prototype.head = function() {
                    var t, e, o, n, r, l, c, d, f, h, y, meta = null === (t = this.routeInfo) || void 0 === t ? void 0 : t.metaInfo;
                    return {
                        title: null === (e = meta[0]) || void 0 === e ? void 0 : e.metaTitle,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: null === (o = meta[0]) || void 0 === o ? void 0 : o.description
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: null === (n = meta[1]) || void 0 === n ? void 0 : n.metaTitle
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
                            content: null === (l = this.routeInfo) || void 0 === l ? void 0 : l.fullPath
                        }, {
                            hid: "og:image",
                            property: "og:image",
                            content: null === (c = meta[0]) || void 0 === c ? void 0 : c.mediaPC
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
                            content: null === (f = meta[2]) || void 0 === f ? void 0 : f.description
                        }, {
                            hid: "twitter:card",
                            property: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            hid: "twitter:image",
                            property: "twitter:image",
                            content: null === (h = meta[2]) || void 0 === h ? void 0 : h.mediaPC
                        }],
                        link: [{
                            rel: "canonical",
                            href: null === (y = meta[0]) || void 0 === y ? void 0 : y.url
                        }],
                        script: []
                    }
                }
                ,
                Object.defineProperty(o.prototype, "transformOverview", {
                    get: function() {
                        var t = this.contentHTMLValue;
                        return t.length > 0 ? t : ""
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, "showAPIList", {
                    get: function() {
                        return "undefined" != typeof window && window.location.href.indexOf("apilist") > -1
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                o.prototype.beforeMount = function() {
                    this.area = "global" === this.routeInfo.websitePath ? "" : "/".concat(this.routeInfo.websitePath),
                    this.metaLink = "https://".concat(window.location.host).concat(this.area, "/gaming-laptops-group/")
                }
                ,
                o.prototype.mounted = function() {
                    setTimeout((function() {
                        "function" == typeof tiggerReady && tiggerReady()
                    }
                    ), 2e3),
                    window.popStateDetected = !1,
                    window.addEventListener("popstate", (function(t) {
                        window.popStateDetected || (history.back(),
                        window.popStateDetected = !0)
                    }
                    ))
                }
                ,
                o.prototype.loadCSS = function(t) {
                    var head = document.getElementsByTagName("head")[0]
                      , link = document.createElement("link");
                    link.href = t,
                    link.rel = "stylesheet",
                    link.type = "text/css",
                    head.appendChild(link)
                }
                ,
                w([Object(c.Action)("getTranslation")], o.prototype, "getTranslation", void 0),
                w([Object(c.Getter)("translation")], o.prototype, "translation", void 0),
                w([Object(c.Getter)("rogCategory")], o.prototype, "rogCategory", void 0),
                w([Object(c.Getter)("websiteId")], o.prototype, "websiteId", void 0),
                w([Object(c.Getter)("routeInfo")], o.prototype, "routeInfo", void 0),
                w([Object(c.Getter)("contentHTMLValue")], o.prototype, "contentHTMLValue", void 0),
                w([Object(c.Getter)("isShowApiList")], o.prototype, "isShowApiList", void 0),
                w([Object(c.Getter)("apilist")], o.prototype, "apilist", void 0),
                o = w([Object(l.Component)({
                    components: {
                        Header: f.a,
                        Footer: h.a,
                        FullLoading: y.a
                    },
                    metaInfo: function() {
                        return {
                            title: this.metaTitle,
                            link: [{
                                rel: "canonical",
                                href: this.metaLink
                            }]
                        }
                    }
                })], o)
            }(l.Vue);
            e.a = O
        }
        ).call(this, o(72))
    }
}]);

