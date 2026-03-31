import { j as x } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { b as pe, g as fe, r as $ } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { N as me } from './index-h-YeTOru.js';
import { r as ge } from './index-Chjiymov.js';
import './providerConfig-qS2Xx-oI.js';
import { k as he, aw as ve, F as be, ao as we, d as ye } from './index-C8UyLGsD.js';
import { u as xe, R as Se } from './useInitFileCheck-0tUpg7yE.js';
import { u as Le } from './store-B9jA_OfS.js';
import { u as Pe } from './index-BneFsgq9.js';
var _ = { exports: {} };
var ke = _.exports,
  X;
function Z() {
  return (
    X ||
      ((X = 1),
      (function (v, h) {
        (function (t, i) {
          v.exports = i();
        })(ke, function () {
          var t = {};
          t.version = '0.2.0';
          var i = (t.settings = {
            minimum: 0.08,
            easing: 'ease',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
          ((t.configure = function (e) {
            var r, s;
            for (r in e) ((s = e[r]), s !== void 0 && e.hasOwnProperty(r) && (i[r] = s));
            return this;
          }),
            (t.status = null),
            (t.set = function (e) {
              var r = t.isStarted();
              ((e = k(e, i.minimum, 1)), (t.status = e === 1 ? null : e));
              var s = t.render(!r),
                u = s.querySelector(i.barSelector),
                g = i.speed,
                o = i.easing;
              return (
                s.offsetWidth,
                z(function (n) {
                  (i.positionUsing === '' && (i.positionUsing = t.getPositioningCSS()),
                    C(u, m(e, g, o)),
                    e === 1
                      ? (C(s, { transition: 'none', opacity: 1 }),
                        s.offsetWidth,
                        setTimeout(function () {
                          (C(s, { transition: 'all ' + g + 'ms linear', opacity: 0 }),
                            setTimeout(function () {
                              (t.remove(), n());
                            }, g));
                        }, g))
                      : setTimeout(n, g));
                }),
                this
              );
            }),
            (t.isStarted = function () {
              return typeof t.status == 'number';
            }),
            (t.start = function () {
              t.status || t.set(0);
              var e = function () {
                setTimeout(function () {
                  t.status && (t.trickle(), e());
                }, i.trickleSpeed);
              };
              return (i.trickle && e(), this);
            }),
            (t.done = function (e) {
              return !e && !t.status ? this : t.inc(0.3 + 0.5 * Math.random()).set(1);
            }),
            (t.inc = function (e) {
              var r = t.status;
              return r
                ? (typeof e != 'number' && (e = (1 - r) * k(Math.random() * r, 0.1, 0.95)),
                  (r = k(r + e, 0, 0.994)),
                  t.set(r))
                : t.start();
            }),
            (t.trickle = function () {
              return t.inc(Math.random() * i.trickleRate);
            }),
            (function () {
              var e = 0,
                r = 0;
              t.promise = function (s) {
                return !s || s.state() === 'resolved'
                  ? this
                  : (r === 0 && t.start(),
                    e++,
                    r++,
                    s.always(function () {
                      (r--, r === 0 ? ((e = 0), t.done()) : t.set((e - r) / e));
                    }),
                    this);
              };
            })(),
            (t.render = function (e) {
              if (t.isRendered()) return document.getElementById('nprogress');
              M(document.documentElement, 'nprogress-busy');
              var r = document.createElement('div');
              ((r.id = 'nprogress'), (r.innerHTML = i.template));
              var s = r.querySelector(i.barSelector),
                u = e ? '-100' : y(t.status || 0),
                g = document.querySelector(i.parent),
                o;
              return (
                C(s, { transition: 'all 0 linear', transform: 'translate3d(' + u + '%,0,0)' }),
                i.showSpinner || ((o = r.querySelector(i.spinnerSelector)), o && T(o)),
                g != document.body && M(g, 'nprogress-custom-parent'),
                g.appendChild(r),
                r
              );
            }),
            (t.remove = function () {
              (j(document.documentElement, 'nprogress-busy'),
                j(document.querySelector(i.parent), 'nprogress-custom-parent'));
              var e = document.getElementById('nprogress');
              e && T(e);
            }),
            (t.isRendered = function () {
              return !!document.getElementById('nprogress');
            }),
            (t.getPositioningCSS = function () {
              var e = document.body.style,
                r =
                  'WebkitTransform' in e
                    ? 'Webkit'
                    : 'MozTransform' in e
                      ? 'Moz'
                      : 'msTransform' in e
                        ? 'ms'
                        : 'OTransform' in e
                          ? 'O'
                          : '';
              return r + 'Perspective' in e
                ? 'translate3d'
                : r + 'Transform' in e
                  ? 'translate'
                  : 'margin';
            }));
          function k(e, r, s) {
            return e < r ? r : e > s ? s : e;
          }
          function y(e) {
            return (-1 + e) * 100;
          }
          function m(e, r, s) {
            var u;
            return (
              i.positionUsing === 'translate3d'
                ? (u = { transform: 'translate3d(' + y(e) + '%,0,0)' })
                : i.positionUsing === 'translate'
                  ? (u = { transform: 'translate(' + y(e) + '%,0)' })
                  : (u = { 'margin-left': y(e) + '%' }),
              (u.transition = 'all ' + r + 'ms ' + s),
              u
            );
          }
          var z = (function () {
              var e = [];
              function r() {
                var s = e.shift();
                s && s(r);
              }
              return function (s) {
                (e.push(s), e.length == 1 && r());
              };
            })(),
            C = (function () {
              var e = ['Webkit', 'O', 'Moz', 'ms'],
                r = {};
              function s(n) {
                return n.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (a, d) {
                  return d.toUpperCase();
                });
              }
              function u(n) {
                var a = document.body.style;
                if (n in a) return n;
                for (var d = e.length, f = n.charAt(0).toUpperCase() + n.slice(1), b; d--; )
                  if (((b = e[d] + f), b in a)) return b;
                return n;
              }
              function g(n) {
                return ((n = s(n)), r[n] || (r[n] = u(n)));
              }
              function o(n, a, d) {
                ((a = g(a)), (n.style[a] = d));
              }
              return function (n, a) {
                var d = arguments,
                  f,
                  b;
                if (d.length == 2)
                  for (f in a) ((b = a[f]), b !== void 0 && a.hasOwnProperty(f) && o(n, f, b));
                else o(n, d[1], d[2]);
              };
            })();
          function O(e, r) {
            var s = typeof e == 'string' ? e : c(e);
            return s.indexOf(' ' + r + ' ') >= 0;
          }
          function M(e, r) {
            var s = c(e),
              u = s + r;
            O(s, r) || (e.className = u.substring(1));
          }
          function j(e, r) {
            var s = c(e),
              u;
            O(e, r) &&
              ((u = s.replace(' ' + r + ' ', ' ')), (e.className = u.substring(1, u.length - 1)));
          }
          function c(e) {
            return (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' ');
          }
          function T(e) {
            e && e.parentNode && e.parentNode.removeChild(e);
          }
          return t;
        });
      })(_)),
    _.exports
  );
}
var W, ee;
function Ce() {
  if (ee) return W;
  ee = 1;
  var v = Object.create,
    h = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    k = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty,
    m = (o, n) => h(o, 'name', { value: n, configurable: !0 }),
    z = (o, n) => {
      for (var a in n) h(o, a, { get: n[a], enumerable: !0 });
    },
    C = (o, n, a, d) => {
      if ((n && typeof n == 'object') || typeof n == 'function')
        for (let f of i(n))
          !y.call(o, f) &&
            f !== a &&
            h(o, f, { get: () => n[f], enumerable: !(d = t(n, f)) || d.enumerable });
      return o;
    },
    O = (o, n, a) => (
      (a = o != null ? v(k(o)) : {}),
      C(!o || !o.__esModule ? h(a, 'default', { value: o, enumerable: !0 }) : a, o)
    ),
    M = (o) => C(h({}, '__esModule', { value: !0 }), o),
    j = {};
  (z(j, { default: () => g, useTopLoader: () => s }), (W = M(j)));
  var c = O(ge()),
    T = O(pe()),
    e = O(Z()),
    r = O(Z()),
    s = m(
      () => ({
        start: () => r.start(),
        done: (o) => r.done(o),
        remove: () => r.remove(),
        setProgress: (o) => r.set(o),
        inc: (o) => r.inc(o),
        trickle: () => r.trickle(),
        isStarted: () => r.isStarted(),
        isRendered: () => r.isRendered(),
        getPositioningCSS: () => r.getPositioningCSS(),
      }),
      'useTopLoader',
    ),
    u = m(
      ({
        color: o,
        height: n,
        showSpinner: a,
        crawl: d,
        crawlSpeed: f,
        initialPosition: b,
        easing: H,
        speed: V,
        shadow: I,
        template: Y,
        zIndex: G = 1600,
        showAtBottom: J = !1,
        showForHashAnchor: te = !0,
        nonce: ne,
      }) => {
        let se = '#29d',
          E = o ?? se,
          oe = n ?? 3,
          ie =
            !I && I !== void 0
              ? ''
              : I
                ? `box-shadow:${I}`
                : `box-shadow:0 0 10px ${E},0 0 5px ${E}`,
          ae = T.createElement(
            'style',
            { nonce: ne },
            `#nprogress{pointer-events:none}#nprogress .bar{background:${E};position:fixed;z-index:${G};${J ? 'bottom: 0;' : 'top: 0;'}left:0;width:100%;height:${oe}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${ie};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${G};${J ? 'bottom: 15px;' : 'top: 15px;'}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${E};border-left-color:${E};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`,
          ),
          N = m((S) => new URL(S, window.location.href).href, 'toAbsoluteURL'),
          le = m((S, U) => {
            let L = new URL(N(S)),
              R = new URL(N(U));
            return L.href.split('#')[0] === R.href.split('#')[0];
          }, 'isHashAnchor'),
          ue = m((S, U) => {
            let L = new URL(N(S)),
              R = new URL(N(U));
            return L.hostname.replace(/^www\./, '') === R.hostname.replace(/^www\./, '');
          }, 'isSameHostName');
        return (
          T.useEffect(() => {
            e.configure({
              showSpinner: a ?? !0,
              trickle: d ?? !0,
              trickleSpeed: f ?? 200,
              minimum: b ?? 0.08,
              easing: H ?? 'ease',
              speed: V ?? 200,
              template:
                Y ??
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
            function S(l, P) {
              let p = new URL(l),
                w = new URL(P);
              if (p.hostname === w.hostname && p.pathname === w.pathname && p.search === w.search) {
                let B = p.hash,
                  q = w.hash;
                return B !== q && p.href.replace(B, '') === w.href.replace(q, '');
              }
              return !1;
            }
            m(S, 'isAnchorOfCurrentUrl');
            var U = document.querySelectorAll('html');
            let L = m(
              () => U.forEach((l) => l.classList.remove('nprogress-busy')),
              'removeNProgressClass',
            );
            function R(l) {
              for (; l && l.tagName.toLowerCase() !== 'a'; ) l = l.parentElement;
              return l;
            }
            m(R, 'findClosestAnchor');
            function F(l) {
              try {
                let P = l.target,
                  p = R(P),
                  w = p?.href;
                if (w) {
                  let B = window.location.href,
                    q = p.target !== '',
                    ce = ['tel:', 'mailto:', 'sms:', 'blob:', 'download:'].some((de) =>
                      w.startsWith(de),
                    );
                  if (!ue(window.location.href, p.href)) return;
                  let Q = S(B, w) || le(window.location.href, p.href);
                  if (!te && Q) return;
                  w === B ||
                  q ||
                  ce ||
                  Q ||
                  l.ctrlKey ||
                  l.metaKey ||
                  l.shiftKey ||
                  l.altKey ||
                  !N(p.href).startsWith('http')
                    ? (e.start(), e.done(), L())
                    : e.start();
                }
              } catch {
                (e.start(), e.done());
              }
            }
            (m(F, 'handleClick'),
              ((l) => {
                let P = l.pushState;
                l.pushState = (...p) => (e.done(), L(), P.apply(l, p));
              })(window.history),
              ((l) => {
                let P = l.replaceState;
                l.replaceState = (...p) => (e.done(), L(), P.apply(l, p));
              })(window.history));
            function A() {
              (e.done(), L());
            }
            m(A, 'handlePageHide');
            function K() {
              e.done();
            }
            return (
              m(K, 'handleBackAndForth'),
              window.addEventListener('popstate', K),
              document.addEventListener('click', F),
              window.addEventListener('pagehide', A),
              () => {
                (document.removeEventListener('click', F),
                  window.removeEventListener('pagehide', A),
                  window.removeEventListener('popstate', K));
              }
            );
          }, []),
          ae
        );
      },
      'NextTopLoader',
    ),
    g = u;
  u.propTypes = {
    color: c.string,
    height: c.number,
    showSpinner: c.bool,
    crawl: c.bool,
    crawlSpeed: c.number,
    initialPosition: c.number,
    easing: c.string,
    speed: c.number,
    template: c.string,
    shadow: c.oneOfType([c.string, c.bool]),
    zIndex: c.number,
    showAtBottom: c.bool,
  };
  return W;
}
var Oe = Ce();
const Re = fe(Oe),
  je = $.memo(() =>
    x.jsx(Re, { color: he.colorText, height: 2, shadow: !1, showSpinner: !1, zIndex: 1e3 }),
  ),
  Te = ({ children: v }) => {
    const h = ve();
    return x.jsx(be, {
      flex: 1,
      style: { background: h.colorBgContainerSecondary, overflowY: 'auto', position: 'relative' },
      children: v,
    });
  },
  Ee = (v) => Le((t) => t.useFetchKnowledgeBaseItem)(v),
  re = $.memo(() => {
    const { id: v } = we(),
      h = ye(),
      t = Pe((y) => y.setLibraryId),
      { data: i, isLoading: k } = Ee(v || '');
    return (
      $.useLayoutEffect(() => {
        h.pathname.includes('/library/') && t(v);
      }, [v, t, h.pathname]),
      xe(),
      !k && !i ? x.jsx(me, {}) : x.jsx(Se, {})
    );
  });
re.displayName = 'LibraryMainContent';
const D = $.memo(() =>
  x.jsxs(x.Fragment, { children: [x.jsx(je, {}), x.jsx(Te, { children: x.jsx(re, {}) })] }),
);
D.displayName = 'LibraryPage';
const Fe = Object.freeze(
    Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, { value: 'Module' }),
  ),
  Ae = Object.freeze(
    Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, { value: 'Module' }),
  );
export { Ae as a, Fe as i };
