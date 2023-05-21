(window.webpackJsonp = window.webpackJsonp || []).push([[0, 3, 12, 13, 14], {
    343: function (t, e, n) {
        var content = n(346);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("7c4fe2f7", content, !0, {sourceMap: !1})
    }, 344: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            components: {Octicon: n(122).default},
            props: {href: {type: String, default: null}, text: {type: String, default: null}}
        }, l = (n(345), n(6)), component = Object(l.a)(r, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("a", {attrs: {href: t.href}}, [n("span", [t._v(t._s(t.text))]), t._v(" "), n("Octicon")], 1)
        }), [], !1, null, "440985de", null);
        e.default = component.exports;
        installComponents(component, {Octicon: n(122).default})
    }, 345: function (t, e, n) {
        "use strict";
        n(343)
    }, 346: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, 'a[data-v-440985de]{display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:16px;line-height:1}a>span[data-v-440985de]{position:relative;margin-right:3px}a>span[data-v-440985de]:before{position:absolute;bottom:-8px;left:0;width:0;height:2px;background-color:#fff;transition:.2s;content:""}a:active>span[data-v-440985de]:before,a:focus>span[data-v-440985de]:before,a:hover>span[data-v-440985de]:before{width:100%}', ""]), r.locals = {}, t.exports = r
    }, 348: function (t, e, n) {
        var content = n(355);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("495fbd48", content, !0, {sourceMap: !1})
    }, 354: function (t, e, n) {
        "use strict";
        n(348)
    }, 355: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, ".card[data-v-e5b9c30e]{padding:2.5rem;background-color:#21262d;border-radius:6px}@media(max-width:767px){.card[data-v-e5b9c30e]{padding:1.5rem}}", ""]), r.locals = {}, t.exports = r
    }, 356: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = {}, l = (n(354), n(6)), component = Object(l.a)(r, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {staticClass: "card"}, [t._t("default")], 2)
        }), [], !1, null, "e5b9c30e", null);
        e.default = component.exports
    }, 358: function (t, e, n) {
        var content = n(371);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("462683ca", content, !0, {sourceMap: !1})
    }, 359: function (t, e, n) {
        var content = n(376);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("4b6246e4", content, !0, {sourceMap: !1})
    }, 370: function (t, e, n) {
        "use strict";
        n(358)
    }, 371: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, 'a[data-v-80776c86]{position:relative;display:inline-block;align-items:center;justify-content:center;color:#79c0ff;font-weight:600;line-height:1;background:linear-gradient(92.7deg,#56d364 -1.37%,#79c0ff 78.71%);-webkit-background-clip:text;background-clip:text;border-radius:6px;transition:.25s;-webkit-text-fill-color:transparent}a[data-v-80776c86]:before{position:absolute;bottom:-8px;left:0;width:0;height:2px;background:linear-gradient(92.7deg,#56d364 -1.37%,#79c0ff 78.71%);transition:.2s;content:""}a[data-v-80776c86]:active:before,a[data-v-80776c86]:focus:before,a[data-v-80776c86]:hover:before{width:calc(100% - 20px)}', ""]), r.locals = {}, t.exports = r
    }, 372: function (t, e, n) {
        var map = {"./flag.svg": 373, "./pack.svg": 374};

        function r(t) {
            var e = l(t);
            return n(e)
        }

        function l(t) {
            if (!n.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }

        r.keys = function () {
            return Object.keys(map)
        }, r.resolve = l, t.exports = r, r.id = 372
    }, 373: function (t, e, n) {
        "use strict";
        n.r(e), e.default = n.p + "img/flag.2c77cc3.svg"
    }, 374: function (t, e, n) {
        "use strict";
        n.r(e), e.default = n.p + "img/pack.3e38c53.svg"
    }, 375: function (t, e, n) {
        "use strict";
        n(359)
    }, 376: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, "@media(max-width:767px){.packs[data-v-0146a00a]>:first-child{margin-bottom:1rem}}@media(min-width:768px){.packs[data-v-0146a00a]{display:grid;grid-template-columns:1fr 1fr;gap:3rem;padding:3rem 0}}.icon[data-v-0146a00a]{margin-bottom:1.5rem}.icon img[data-v-0146a00a]{width:auto;height:3rem}.subtitle[data-v-0146a00a]{margin-bottom:1.5rem;font-size:16px;font-family:monospace}.link[data-v-0146a00a]{margin-top:3rem}", ""]), r.locals = {}, t.exports = r
    }, 419: function (t, e, n) {
        var content = n(434);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("948252c0", content, !0, {sourceMap: !1})
    }, 420: function (t, e, n) {
        var content = n(436);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
        (0, n(23).default)("75b29cac", content, !0, {sourceMap: !1})
    }, 422: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            components: {Octicon: n(122).default},
            props: {href: {type: String, default: null}, text: {type: String, default: null}}
        }, l = (n(370), n(6)), component = Object(l.a)(r, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("a", {attrs: {href: t.href}}, [t._v("\n  " + t._s(t.text) + "\n  "), n("Octicon", {staticClass: "icon"})], 1)
        }), [], !1, null, "80776c86", null);
        e.default = component.exports;
        installComponents(component, {Octicon: n(122).default})
    }, 423: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            data: function () {
                return {
                    packs: [{
                        icon: "pack",
                        title: "Student Developer Pack",
                        subtitle: "Get the best developer tools",
                        text: "There’s no substitute for hands-on experience, but for most students, real-world tools can be cost prohibitive. That’s why we created the Pack with some of our partners and friends.",
                        link: "Get the Student Pack",
                        href: "/pack"
                    }, {
                        icon: "flag",
                        title: "GitHub Campus Expert",
                        subtitle: "Grow your leadership skills",
                        text: "Build a tech community at your school with training and support from GitHub. Campus Experts learn public speaking, technical writing, community leadership, and software development skills that will help you improve your campus.",
                        link: "Become a Campus Expert",
                        href: "/experts"
                    }]
                }
            }
        }, l = (n(375), n(6)), component = Object(l.a)(r, (function () {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {staticClass: "packs"}, t._l(t.packs, (function (e, l) {
                return r("div", {key: l}, [r("Card", [r("div", {staticClass: "icon"}, [r("img", {
                    attrs: {
                        src: n(372)("./" + e.icon + ".svg").default,
                        alt: ""
                    }
                })]), t._v(" "), r("h3", {staticClass: "h4"}, [t._v(t._s(e.title))]), t._v(" "), r("p", {staticClass: "subtitle"}, [t._v(t._s(e.subtitle))]), t._v(" "), r("p", {staticClass: "text"}, [t._v(t._s(e.text))]), t._v(" "), r("div", {staticClass: "link"}, [r("Link", {
                    attrs: {
                        href: e.href,
                        text: e.link
                    }
                })], 1)])], 1)
            })), 0)
        }), [], !1, null, "0146a00a", null);
        e.default = component.exports;
        installComponents(component, {Link: n(344).default, Card: n(356).default})
    }, 430: function (t, e, n) {
        t.exports = n.p + "img/planet-back.d464ec5.png"
    }, 431: function (t, e, n) {
        t.exports = n.p + "img/planet-front.1fa7dc5.png"
    }, 432: function (t, e) {
        function n(t, e, n) {
            var r, l, o, c, d;

            function f() {
                var h = Date.now() - c;
                h < e && h >= 0 ? r = setTimeout(f, e - h) : (r = null, n || (d = t.apply(o, l), o = l = null))
            }

            null == e && (e = 100);
            var h = function () {
                o = this, l = arguments, c = Date.now();
                var h = n && !r;
                return r || (r = setTimeout(f, e)), h && (d = t.apply(o, l), o = l = null), d
            };
            return h.clear = function () {
                r && (clearTimeout(r), r = null)
            }, h.flush = function () {
                r && (d = t.apply(o, l), o = l = null, clearTimeout(r), r = null)
            }, h
        }

        n.debounce = n, t.exports = n
    }, 433: function (t, e, n) {
        "use strict";
        n(419)
    }, 434: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, ".planet-wrapper{transform:translateZ(0) translateY(var(--planet-position))}.planet-wrapper.transition,.planet-wrapper.transition .planet-back{transition:all .3s ease-in-out}.planet-wrapper.highlight .planet-back{transform:translateY(-15px)}", ""]), r.locals = {}, t.exports = r
    }, 435: function (t, e, n) {
        "use strict";
        n(420)
    }, 436: function (t, e, n) {
        var r = n(22)((function (i) {
            return i[1]
        }));
        r.push([t.i, ".planet-wrapper[data-v-1b7cd93c]{position:absolute;z-index:0;display:flex;justify-content:center;width:100%;max-width:100%;height:100%;overflow:hidden}.planet-wrapper .planet-back[data-v-1b7cd93c],.planet-wrapper .planet-front[data-v-1b7cd93c]{position:absolute;top:0;left:0;flex-shrink:0;width:100%;height:100%;background-repeat:no-repeat;background-position:top;background-size:3600px}.planet-wrapper .planet-back[data-v-1b7cd93c]{background-size:1252px}.planet-wrapper .planet-front[data-v-1b7cd93c]{top:50px;background-size:3200px}.container[data-v-1b7cd93c]{position:relative;z-index:1;padding-top:6rem;padding-bottom:4rem}@media(min-width:768px){.container[data-v-1b7cd93c]{padding-top:8rem;padding-bottom:8rem}}.content[data-v-1b7cd93c]{max-width:48rem;margin:auto;padding:3rem 0;text-align:center}@media(max-width:767px){.content[data-v-1b7cd93c]{padding:1rem 0 5rem}}", ""]), r.locals = {}, t.exports = r
    }, 448: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(6), l = (Object(r.a)({}, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("svg", t._g({
                attrs: {
                    height: "1328",
                    viewBox: "0 0 3294 1328",
                    width: "3294",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, t.$listeners), [n("defs", [n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__b",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "50%"
                }
            }, [n("stop", {attrs: {offset: ".026", "stop-color": "#56d364"}}), n("stop", {
                attrs: {
                    offset: ".216",
                    "stop-color": "#79c0ff"
                }
            }), n("stop", {
                attrs: {
                    offset: ".479",
                    "stop-color": "#0d1117"
                }
            })], 1), n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__d",
                    x1: "50%",
                    x2: "50.104%",
                    y1: "-4.166%",
                    y2: "77.163%"
                }
            }, [n("stop", {attrs: {offset: ".13", "stop-color": "#fff"}}), n("stop", {
                attrs: {
                    offset: ".488",
                    "stop-color": "#fff",
                    "stop-opacity": "0"
                }
            })], 1), n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__f",
                    x1: "49.964%",
                    x2: "49.964%",
                    y1: ".022%",
                    y2: "49.986%"
                }
            }, [n("stop", {attrs: {offset: "0", "stop-color": "#21262d"}}), n("stop", {
                attrs: {
                    offset: "1",
                    "stop-color": "#0d1117"
                }
            })], 1), n("linearGradient", {attrs: {id: "planet_full_svg__a"}}, [n("stop", {
                attrs: {
                    offset: "0",
                    "stop-color": "#0d1117"
                }
            }), n("stop", {
                attrs: {
                    offset: "1",
                    "stop-color": "#5ad273"
                }
            })], 1), n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__i",
                    x1: "55.971%",
                    x2: "58.113%",
                    "xlink:href": "#planet_full_svg__a",
                    y1: "48.924%",
                    y2: "52.431%"
                }
            }), n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__j",
                    x1: "42.933%",
                    x2: "38.63%",
                    "xlink:href": "#planet_full_svg__a",
                    y1: "48.527%",
                    y2: "51.229%"
                }
            }), n("linearGradient", {
                attrs: {
                    id: "planet_full_svg__k",
                    x1: "48.388%",
                    x2: "46.307%",
                    "xlink:href": "#planet_full_svg__a",
                    y1: "49.3%",
                    y2: "51.248%"
                }
            }), n("filter", {
                attrs: {
                    id: "planet_full_svg__c",
                    height: "107.8%",
                    width: "107.9%",
                    x: "-4%",
                    y: "-3.9%"
                }
            }, [n("feGaussianBlur", {
                attrs: {
                    in: "SourceGraphic",
                    stdDeviation: "16"
                }
            })], 1), n("filter", {
                attrs: {
                    id: "planet_full_svg__e",
                    height: "102.4%",
                    width: "102.4%",
                    x: "-1.2%",
                    y: "-1.2%"
                }
            }, [n("feGaussianBlur", {
                attrs: {
                    in: "SourceGraphic",
                    stdDeviation: "5"
                }
            })], 1), n("filter", {
                attrs: {
                    id: "planet_full_svg__h",
                    height: "103.3%",
                    width: "103.3%",
                    x: "-1.6%",
                    y: "-1.6%"
                }
            }, [n("feGaussianBlur", {
                attrs: {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "20"
                }
            }), n("feOffset", {
                attrs: {
                    dy: "1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }
            }), n("feComposite", {
                attrs: {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }
            }), n("feColorMatrix", {
                attrs: {
                    in: "shadowInnerInner1",
                    result: "shadowMatrixInner1",
                    values: "0 0 0 0 0.0509803922 0 0 0 0 0.0666666667 0 0 0 0 0.0901960784 0 0 0 1 0"
                }
            }), n("feGaussianBlur", {
                attrs: {
                    in: "SourceAlpha",
                    result: "shadowBlurInner2",
                    stdDeviation: "4"
                }
            }), n("feOffset", {
                attrs: {
                    dy: "11",
                    in: "shadowBlurInner2",
                    result: "shadowOffsetInner2"
                }
            }), n("feComposite", {
                attrs: {
                    in: "shadowOffsetInner2",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner2"
                }
            }), n("feColorMatrix", {
                attrs: {
                    in: "shadowInnerInner2",
                    result: "shadowMatrixInner2",
                    values: "0 0 0 0 0.337254902 0 0 0 0 0.82745098 0 0 0 0 0.392156863 0 0 0 0.248581253 0"
                }
            }), n("feMerge", [n("feMergeNode", {attrs: {in: "shadowMatrixInner1"}}), n("feMergeNode", {attrs: {in: "shadowMatrixInner2"}})], 1)], 1), n("circle", {
                attrs: {
                    id: "planet_full_svg__g",
                    cx: "1647.719",
                    cy: "640",
                    r: "624"
                }
            })], 1), n("g", {attrs: {fill: "none", "fill-rule": "evenodd"}}, [n("g", {
                attrs: {
                    "fill-rule": "nonzero",
                    transform: "translate(1 48)"
                }
            }, [n("ellipse", {
                attrs: {
                    cx: "1647.719",
                    cy: "616",
                    fill: "url(#planet_full_svg__b)",
                    filter: "url(#planet_full_svg__c)",
                    rx: "605",
                    ry: "616"
                }
            }), n("circle", {
                attrs: {
                    cx: "1647.719",
                    cy: "636",
                    fill: "url(#planet_full_svg__d)",
                    "fill-opacity": ".72",
                    filter: "url(#planet_full_svg__e)",
                    r: "624"
                }
            }), n("use", {
                attrs: {
                    fill: "url(#planet_full_svg__f)",
                    "xlink:href": "#planet_full_svg__g"
                }
            }), n("use", {
                attrs: {
                    fill: "#000",
                    filter: "url(#planet_full_svg__h)",
                    "xlink:href": "#planet_full_svg__g"
                }
            })]), n("path", {
                attrs: {
                    d: "M1186.739 188.264c-41.03-4.504-158.67-16.761-281.568-27.13C396.077 118.183 34.94 127.71 2.405 196.379-45.997 298.515 641.902 537.45 1549.719 675c907.82 137.56 1691.75 121.6 1740.15 19.47 34.99-73.82-319.31-195.8-861.24-309.693-60.63-12.742-153.1-28.552-209.94-38.021",
                    stroke: "url(#planet_full_svg__i)",
                    "stroke-linejoin": "round",
                    transform: "translate(1 48)"
                }
            }), n("path", {
                attrs: {
                    d: "M1776.333 180.47c33.92 6.836 63.79 13.265 97.66 20.809 352.88 78.603 577.13 159.866 553.16 210.436-35.67 75.22-606.88 54.07-1275.84-47.21C482.355 263.213-33.922 120.48 1.742 45.264 26.546-7.052 313.373-13.1 709.103 22.37",
                    opacity: ".8",
                    stroke: "url(#planet_full_svg__j)",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.2",
                    transform: "translate(447.926 232.415)"
                }
            }), n("path", {
                attrs: {
                    d: "M1329.832 159.971c152.86 40.353 242.86 79.058 230.51 105.106-22.95 48.41-390.61 34.81-821.17-30.384-430.55-65.193-761-157.29-738.045-205.7C11.94 6.19 97.782-2.852 232.122.776",
                    opacity: ".8",
                    stroke: "url(#planet_full_svg__k)",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    transform: "translate(907.157 277.513)"
                }
            })])])
        }), [], !1, null, null, null).exports, {
            data: function () {
                return {scrollPosition: 0}
            }, mounted: function () {
                window.addEventListener("scroll", this.handleScroll), this.handleScroll()
            }, destroyed: function () {
                window.removeEventListener("scroll", this.handleScroll)
            }, methods: {
                handleScroll: function () {
                    window.requestAnimationFrame(this.setScrollPosition)
                }, setScrollPosition: function () {
                    window.scrollY > window.innerHeight ? this.scrollPosition = 1 : this.scrollPosition = window.scrollY / window.innerHeight
                }
            }
        }), o = n(432), c = {
            mixins: [l], props: {highlightPlanet: {type: Boolean, required: !1, default: !1}}, data: function () {
                return {transition: !0}
            }, watch: {
                scrollPosition: function (t) {
                    this.transition = !1, this.debounceScroll()
                }
            }, methods: {
                debounceScroll: n.n(o)()((function () {
                    this.transition = !0
                }), 300)
            }
        }, d = (n(433), n(435), Object(r.a)(c, (function () {
            var t = this, e = t.$createElement, r = t._self._c || e;
            // return r("div", {staticClass: "sub-hero"}, [r("div", {
            //     class: {
            //         "planet-wrapper": !0,
            //         transition: t.transition,
            //         highlight: t.highlightPlanet
            //     },
            //     style: "--planet-position: " + (t.highlightPlanet ? 0 : 100 * t.scrollPosition) + "px; opacity: " + (1 - t.scrollPosition)
            // }, [r("div", {
            //     staticClass: "planet-back",
            //     style: "background-image: url(" + n(430) + ");"
            // }), t._v(" "), r("div", {
            //     staticClass: "planet-front",
            //     style: "background-image: url(" + n(431) + ");"
            // })]), t._v(" "), r("div", {staticClass: "container"}, [r("div", {staticClass: "content"}, [r("h2", {staticClass: "h2"}, [t._v("We’ve got you covered")]), t._v(" "), r("p", [t._v("Learn using real-world development tools")]), t._v(" "), r("button-secondary", {
            //     attrs: {
            //         href: "/benefits",
            //         text: "View the benefits"
            //     }
            // })], 1), t._v(" "), r("BlocksCampusPacks")], 1)])
        }), [], !1, null, "1b7cd93c", null));
        e.default = d.exports;
        installComponents(d, {ButtonSecondary: n(422).default, BlocksCampusPacks: n(423).default})
    }
}]);