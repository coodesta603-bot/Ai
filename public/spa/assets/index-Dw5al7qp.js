import {
  e6 as f,
  d2 as Ze,
  d3 as qe,
  e3 as c,
  e5 as w,
  io as Q,
  ct as Ce,
  gP as re,
  aj as ae,
  e4 as ye,
  a1 as er,
  it as tr,
  iu as nr,
  iv as rr,
  is as ar,
  cv as ir,
} from './index-C8UyLGsD.js';
import { c as Y } from './index-eF79sEgZ.js';
import {
  r as p,
  m as Ae,
  d as fn,
  _ as Ye,
  u as or,
  R as q,
  p as lr,
} from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as sr, T as cr, U as dr, V as ct, j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as ur } from './InfoCircleOutlined-BWYuV3b3.js';
import { T as fr } from './index-BSuyBMRZ.js';
import { R as Ie, C as ne } from './row-cnvQQvQf.js';
import { T as hn } from './index-CXy3GcSN.js';
import { a as hr } from '../i18n/i18n-zh-CN-BU7DHEsw.js';
function De() {
  return !!(typeof window < 'u' && window.document && window.document.createElement);
}
function gr(n, e) {
  if (!n) return !1;
  if (n.contains) return n.contains(e);
  for (var t = e; t; ) {
    if (t === n) return !0;
    t = t.parentNode;
  }
  return !1;
}
var Dt = 'data-rc-order',
  Nt = 'data-rc-priority',
  mr = 'rc-util-key',
  St = new Map();
function gn() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = n.mark;
  return e ? (e.startsWith('data-') ? e : 'data-'.concat(e)) : mr;
}
function Qe(n) {
  if (n.attachTo) return n.attachTo;
  var e = document.querySelector('head');
  return e || document.body;
}
function pr(n) {
  return n === 'queue' ? 'prependQueue' : n ? 'prepend' : 'append';
}
function It(n) {
  return Array.from((St.get(n) || n).children).filter(function (e) {
    return e.tagName === 'STYLE';
  });
}
function mn(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!De()) return null;
  var t = e.csp,
    r = e.prepend,
    a = e.priority,
    i = a === void 0 ? 0 : a,
    o = pr(r),
    s = o === 'prependQueue',
    l = document.createElement('style');
  (l.setAttribute(Dt, o),
    s && i && l.setAttribute(Nt, ''.concat(i)),
    t != null && t.nonce && (l.nonce = t?.nonce),
    (l.innerHTML = n));
  var u = Qe(e),
    d = u.firstChild;
  if (r) {
    if (s) {
      var g = (e.styles || It(u)).filter(function (h) {
        if (!['prepend', 'prependQueue'].includes(h.getAttribute(Dt))) return !1;
        var v = Number(h.getAttribute(Nt) || 0);
        return i >= v;
      });
      if (g.length) return (u.insertBefore(l, g[g.length - 1].nextSibling), l);
    }
    u.insertBefore(l, d);
  } else u.appendChild(l);
  return l;
}
function pn(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = Qe(e);
  return (e.styles || It(t)).find(function (r) {
    return r.getAttribute(gn(e)) === n;
  });
}
function vr(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = pn(n, e);
  if (t) {
    var r = Qe(e);
    r.removeChild(t);
  }
}
function br(n, e) {
  var t = St.get(n);
  if (!t || !gr(document, t)) {
    var r = mn('', e),
      a = r.parentNode;
    (St.set(n, a), n.removeChild(r));
  }
}
function _e(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Qe(t),
    a = It(r),
    i = f(f({}, t), {}, { styles: a });
  br(r, i);
  var o = pn(e, i);
  if (o) {
    var s, l;
    if (
      (s = i.csp) !== null &&
      s !== void 0 &&
      s.nonce &&
      o.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)
    ) {
      var u;
      o.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return (o.innerHTML !== n && (o.innerHTML = n), o);
  }
  var d = mn(n, i);
  return (d.setAttribute(gn(i), e), d);
}
function yr(n, e, t) {
  var r = p.useRef({});
  return (
    (!('value' in r.current) || t(r.current.condition, e)) &&
      ((r.current.value = n()), (r.current.condition = e)),
    r.current.value
  );
}
var Tt = {},
  xr = function (e) {};
function Sr(n, e) {}
function Tr(n, e) {}
function Cr() {
  Tt = {};
}
function vn(n, e, t) {
  !e && !Tt[t] && (n(!1, t), (Tt[t] = !0));
}
function Je(n, e) {
  vn(Sr, n, e);
}
function bn(n, e) {
  vn(Tr, n, e);
}
Je.preMessage = xr;
Je.resetWarned = Cr;
Je.noteOnce = bn;
var Pr = '%';
function Ct(n) {
  return n.join(Pr);
}
var Fr = (function () {
    function n(e) {
      (qe(this, n),
        c(this, 'instanceId', void 0),
        c(this, 'cache', new Map()),
        c(this, 'extracted', new Set()),
        (this.instanceId = e));
    }
    return (
      Ze(n, [
        {
          key: 'get',
          value: function (t) {
            return this.opGet(Ct(t));
          },
        },
        {
          key: 'opGet',
          value: function (t) {
            return this.cache.get(t) || null;
          },
        },
        {
          key: 'update',
          value: function (t, r) {
            return this.opUpdate(Ct(t), r);
          },
        },
        {
          key: 'opUpdate',
          value: function (t, r) {
            var a = this.cache.get(t),
              i = r(a);
            i === null ? this.cache.delete(t) : this.cache.set(t, i);
          },
        },
      ]),
      n
    );
  })(),
  Be = 'data-token-hash',
  le = 'data-css-hash',
  me = '__cssinjs_instance__';
function kr() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    var e = document.body.querySelectorAll('style['.concat(le, ']')) || [],
      t = document.head.firstChild;
    Array.from(e).forEach(function (a) {
      ((a[me] = a[me] || n), a[me] === n && document.head.insertBefore(a, t));
    });
    var r = {};
    Array.from(document.querySelectorAll('style['.concat(le, ']'))).forEach(function (a) {
      var i = a.getAttribute(le);
      if (r[i]) {
        if (a[me] === n) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else r[i] = !0;
    });
  }
  return new Fr(n);
}
var Et = p.createContext({ hashPriority: 'low', cache: kr(), defaultCache: !0 });
function Mr(n, e) {
  if (n.length !== e.length) return !1;
  for (var t = 0; t < n.length; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
var _t = (function () {
  function n() {
    (qe(this, n),
      c(this, 'cache', void 0),
      c(this, 'keys', void 0),
      c(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0));
  }
  return (
    Ze(n, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (t) {
          var r,
            a,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            o = { map: this.cache };
          return (
            t.forEach(function (s) {
              if (!o) o = void 0;
              else {
                var l;
                o =
                  (l = o) === null || l === void 0 || (l = l.map) === null || l === void 0
                    ? void 0
                    : l.get(s);
              }
            }),
            (r = o) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (o.value[1] = this.cacheCallTimes++),
            (a = o) === null || a === void 0 ? void 0 : a.value
          );
        },
      },
      {
        key: 'get',
        value: function (t) {
          var r;
          return (r = this.internalGet(t, !0)) === null || r === void 0 ? void 0 : r[0];
        },
      },
      {
        key: 'has',
        value: function (t) {
          return !!this.internalGet(t);
        },
      },
      {
        key: 'set',
        value: function (t, r) {
          var a = this;
          if (!this.has(t)) {
            if (this.size() + 1 > n.MAX_CACHE_SIZE + n.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (u, d) {
                    var g = w(u, 2),
                      h = g[1];
                    return a.internalGet(d)[1] < h ? [d, a.internalGet(d)[1]] : u;
                  },
                  [this.keys[0], this.cacheCallTimes],
                ),
                o = w(i, 1),
                s = o[0];
              this.delete(s);
            }
            this.keys.push(t);
          }
          var l = this.cache;
          t.forEach(function (u, d) {
            if (d === t.length - 1) l.set(u, { value: [r, a.cacheCallTimes++] });
            else {
              var g = l.get(u);
              (g ? g.map || (g.map = new Map()) : l.set(u, { map: new Map() }), (l = l.get(u).map));
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (t, r) {
          var a = t.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              a.map ? t.set(r[0], { map: a.map }) : t.delete(r[0]),
              (i = a.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var o = this.deleteByPath(a.map, r.slice(1));
          return ((!a.map || a.map.size === 0) && !a.value && t.delete(r[0]), o);
        },
      },
      {
        key: 'delete',
        value: function (t) {
          if (this.has(t))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !Mr(r, t);
              })),
              this.deleteByPath(this.cache, t)
            );
        },
      },
    ]),
    n
  );
})();
c(_t, 'MAX_CACHE_SIZE', 20);
c(_t, 'MAX_CACHE_OFFSET', 5);
var Ot = 0,
  yn = (function () {
    function n(e) {
      (qe(this, n),
        c(this, 'derivatives', void 0),
        c(this, 'id', void 0),
        (this.derivatives = Array.isArray(e) ? e : [e]),
        (this.id = Ot),
        e.length === 0 && (e.length > 0, void 0),
        (Ot += 1));
    }
    return (
      Ze(n, [
        {
          key: 'getDerivativeToken',
          value: function (t) {
            return this.derivatives.reduce(
              function (r, a) {
                return a(t, r);
              },
              void 0,
            );
          },
        },
      ]),
      n
    );
  })(),
  dt = new _t();
function wr(n) {
  var e = Array.isArray(n) ? n : [n];
  return (dt.has(e) || dt.set(e, new yn(e)), dt.get(e));
}
var Ir = new WeakMap(),
  ut = {};
function Er(n, e) {
  for (var t = Ir, r = 0; r < e.length; r += 1) {
    var a = e[r];
    (t.has(a) || t.set(a, new WeakMap()), (t = t.get(a)));
  }
  return (t.has(ut) || t.set(ut, n()), t.get(ut));
}
var $t = new WeakMap();
function Re(n) {
  var e = $t.get(n) || '';
  return (
    e ||
      (Object.keys(n).forEach(function (t) {
        var r = n[t];
        ((e += t),
          r instanceof yn ? (e += r.id) : r && Q(r) === 'object' ? (e += Re(r)) : (e += r));
      }),
      (e = Ae(e)),
      $t.set(n, e)),
    e
  );
}
function Ut(n, e) {
  return Ae(''.concat(e, '_').concat(Re(n)));
}
var Vt = De();
function Xe(n, e, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a) return n;
  var i = f(f({}, r), {}, c(c({}, Be, e), le, t)),
    o = Object.keys(i)
      .map(function (s) {
        var l = i[s];
        return l ? ''.concat(s, '="').concat(l, '"') : null;
      })
      .filter(function (s) {
        return s;
      })
      .join(' ');
  return '<style '.concat(o, '>').concat(n, '</style>');
}
var _r = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return '--'
      .concat(t ? ''.concat(t, '-') : '')
      .concat(e)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase();
  },
  Rr = function (e, t, r) {
    return Object.keys(e).length
      ? '.'
          .concat(t)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(e)
              .map(function (a) {
                var i = w(a, 2),
                  o = i[0],
                  s = i[1];
                return ''.concat(o, ':').concat(s, ';');
              })
              .join(''),
            '}',
          )
      : '';
  },
  Lr = function (e, t, r) {
    var a = {},
      i = {};
    return (
      Object.entries(e).forEach(function (o) {
        var s,
          l,
          u = w(o, 2),
          d = u[0],
          g = u[1];
        if (r != null && (s = r.preserve) !== null && s !== void 0 && s[d]) i[d] = g;
        else if (
          (typeof g == 'string' || typeof g == 'number') &&
          !(r != null && (l = r.ignore) !== null && l !== void 0 && l[d])
        ) {
          var h,
            v = _r(d, r?.prefix);
          ((a[v] =
            typeof g == 'number' &&
            !(r != null && (h = r.unitless) !== null && h !== void 0 && h[d])
              ? ''.concat(g, 'px')
              : String(g)),
            (i[d] = 'var('.concat(v, ')')));
        }
      }),
      [i, Rr(a, t, { scope: r?.scope })]
    );
  },
  Gt = De() ? p.useLayoutEffect : p.useEffect,
  xn = function (e, t) {
    var r = p.useRef(!0);
    (Gt(function () {
      return e(r.current);
    }, t),
      Gt(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []));
  },
  Kt = function (e, t) {
    xn(function (r) {
      if (!r) return e();
    }, t);
  },
  Ar = f({}, fn),
  Wt = Ar.useInsertionEffect,
  Br = function (e, t, r) {
    (p.useMemo(e, r),
      xn(function () {
        return t(!0);
      }, r));
  },
  zr = Wt
    ? function (n, e, t) {
        return Wt(function () {
          return (n(), e());
        }, t);
      }
    : Br,
  Hr = f({}, fn),
  jr = Hr.useInsertionEffect,
  Dr = function (e) {
    var t = [],
      r = !1;
    function a(i) {
      r || t.push(i);
    }
    return (
      p.useEffect(function () {
        return (
          (r = !1),
          function () {
            ((r = !0),
              t.length &&
                t.forEach(function (i) {
                  return i();
                }));
          }
        );
      }, e),
      a
    );
  },
  Nr = function () {
    return function (e) {
      e();
    };
  },
  Or = typeof jr < 'u' ? Dr : Nr;
function Sn(n, e, t, r, a) {
  var i = p.useContext(Et),
    o = i.cache,
    s = [n].concat(Ce(e)),
    l = Ct(s),
    u = Or([l]),
    d = function (b) {
      o.opUpdate(l, function (x) {
        var F = x || [void 0, void 0],
          T = w(F, 2),
          C = T[0],
          S = C === void 0 ? 0 : C,
          P = T[1],
          y = P,
          I = y || t(),
          _ = [S, I];
        return b ? b(_) : _;
      });
    };
  p.useMemo(
    function () {
      d();
    },
    [l],
  );
  var g = o.opGet(l),
    h = g[1];
  return (
    zr(
      function () {
        a?.(h);
      },
      function (v) {
        return (
          d(function (b) {
            var x = w(b, 2),
              F = x[0],
              T = x[1];
            return (v && F === 0 && a?.(h), [F + 1, T]);
          }),
          function () {
            o.opUpdate(l, function (b) {
              var x = b || [],
                F = w(x, 2),
                T = F[0],
                C = T === void 0 ? 0 : T,
                S = F[1],
                P = C - 1;
              return P === 0
                ? (u(function () {
                    (v || !o.opGet(l)) && r?.(S, !1);
                  }),
                  null)
                : [C - 1, S];
            });
          }
        );
      },
      [l],
    ),
    h
  );
}
var $r = {},
  Ur = 'css',
  ge = new Map();
function Vr(n) {
  ge.set(n, (ge.get(n) || 0) + 1);
}
function Gr(n, e) {
  if (typeof document < 'u') {
    var t = document.querySelectorAll('style['.concat(Be, '="').concat(n, '"]'));
    t.forEach(function (r) {
      if (r[me] === e) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Kr = 0;
function Wr(n, e) {
  ge.set(n, (ge.get(n) || 0) - 1);
  var t = new Set();
  (ge.forEach(function (r, a) {
    r <= 0 && t.add(a);
  }),
    ge.size - t.size > Kr &&
      t.forEach(function (r) {
        (Gr(r, e), ge.delete(r));
      }));
}
var Xr = function (e, t, r, a) {
    var i = r.getDerivativeToken(e),
      o = f(f({}, i), t);
    return (a && (o = a(o)), o);
  },
  Tn = 'token';
function Zr(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = p.useContext(Et),
    a = r.cache.instanceId,
    i = r.container,
    o = t.salt,
    s = o === void 0 ? '' : o,
    l = t.override,
    u = l === void 0 ? $r : l,
    d = t.formatToken,
    g = t.getComputedToken,
    h = t.cssVar,
    v = Er(function () {
      return Object.assign.apply(Object, [{}].concat(Ce(e)));
    }, e),
    b = Re(v),
    x = Re(u),
    F = h ? Re(h) : '',
    T = Sn(
      Tn,
      [s, n.id, b, x, F],
      function () {
        var C,
          S = g ? g(v, u, n) : Xr(v, u, n, d),
          P = f({}, S),
          y = '';
        if (h) {
          var I = Lr(S, h.key, {
              prefix: h.prefix,
              ignore: h.ignore,
              unitless: h.unitless,
              preserve: h.preserve,
            }),
            _ = w(I, 2);
          ((S = _[0]), (y = _[1]));
        }
        var H = Ut(S, s);
        ((S._tokenKey = H), (P._tokenKey = Ut(P, s)));
        var X = (C = h?.key) !== null && C !== void 0 ? C : H;
        ((S._themeKey = X), Vr(X));
        var K = ''.concat(Ur, '-').concat(Ae(H));
        return ((S._hashId = K), [S, K, P, y, h?.key || '']);
      },
      function (C) {
        Wr(C[0]._themeKey, a);
      },
      function (C) {
        var S = w(C, 4),
          P = S[0],
          y = S[3];
        if (h && y) {
          var I = _e(y, Ae('css-variables-'.concat(P._themeKey)), {
            mark: le,
            prepend: 'queue',
            attachTo: i,
            priority: -999,
          });
          ((I[me] = a), I.setAttribute(Be, P._themeKey));
        }
      },
    );
  return T;
}
var qr = function (e, t, r) {
    var a = w(e, 5),
      i = a[2],
      o = a[3],
      s = a[4],
      l = r || {},
      u = l.plain;
    if (!o) return null;
    var d = i._tokenKey,
      g = -999,
      h = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(g) },
      v = Xe(o, s, d, h, u);
    return [g, d, v];
  },
  Xt = 'data-ant-cssinjs-cache-path',
  Cn = '_FILE_STYLE__',
  ve,
  Pn = !0;
function Yr() {
  if (!ve && ((ve = {}), De())) {
    var n = document.createElement('div');
    ((n.className = Xt),
      (n.style.position = 'fixed'),
      (n.style.visibility = 'hidden'),
      (n.style.top = '-9999px'),
      document.body.appendChild(n));
    var e = getComputedStyle(n).content || '';
    ((e = e.replace(/^"/, '').replace(/"$/, '')),
      e.split(';').forEach(function (a) {
        var i = a.split(':'),
          o = w(i, 2),
          s = o[0],
          l = o[1];
        ve[s] = l;
      }));
    var t = document.querySelector('style['.concat(Xt, ']'));
    if (t) {
      var r;
      ((Pn = !1), (r = t.parentNode) === null || r === void 0 || r.removeChild(t));
    }
    document.body.removeChild(n);
  }
}
function Qr(n) {
  return (Yr(), !!ve[n]);
}
function Jr(n) {
  var e = ve[n],
    t = null;
  if (e && De())
    if (Pn) t = Cn;
    else {
      var r = document.querySelector('style['.concat(le, '="').concat(ve[n], '"]'));
      r ? (t = r.innerHTML) : delete ve[n];
    }
  return [t, e];
}
var ea = '_skip_check_',
  Fn = '_multi_value_';
function We(n) {
  var e = sr(dr(n), cr);
  return e.replace(/\{%%%\:[^;];}/g, ';');
}
function ta(n) {
  return Q(n) === 'object' && n && (ea in n || Fn in n);
}
function Zt(n, e, t) {
  if (!e) return n;
  var r = '.'.concat(e),
    a = t === 'low' ? ':where('.concat(r, ')') : r,
    i = n.split(',').map(function (o) {
      var s,
        l = o.trim().split(/\s+/),
        u = l[0] || '',
        d = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || '';
      return (
        (u = ''.concat(d).concat(a).concat(u.slice(d.length))),
        [u].concat(Ce(l.slice(1))).join(' ')
      );
    });
  return i.join(',');
}
var na = function n(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    a = r.root,
    i = r.injectHash,
    o = r.parentSelectors,
    s = t.hashId,
    l = t.layer;
  t.path;
  var u = t.hashPriority,
    d = t.transformers,
    g = d === void 0 ? [] : d;
  t.linters;
  var h = '',
    v = {};
  function b(T) {
    var C = T.getName(s);
    if (!v[C]) {
      var S = n(T.style, t, { root: !1, parentSelectors: o }),
        P = w(S, 1),
        y = P[0];
      v[C] = '@keyframes '.concat(T.getName(s)).concat(y);
    }
  }
  function x(T) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      T.forEach(function (S) {
        Array.isArray(S) ? x(S, C) : S && C.push(S);
      }),
      C
    );
  }
  var F = x(Array.isArray(e) ? e : [e]);
  return (
    F.forEach(function (T) {
      var C = typeof T == 'string' && !a ? {} : T;
      if (typeof C == 'string')
        h += ''.concat(
          C,
          `
`,
        );
      else if (C._keyframe) b(C);
      else {
        var S = g.reduce(function (P, y) {
          var I;
          return (y == null || (I = y.visit) === null || I === void 0 ? void 0 : I.call(y, P)) || P;
        }, C);
        Object.keys(S).forEach(function (P) {
          var y = S[P];
          if (Q(y) === 'object' && y && (P !== 'animationName' || !y._keyframe) && !ta(y)) {
            var I = !1,
              _ = P.trim(),
              H = !1;
            (a || i) && s
              ? _.startsWith('@')
                ? (I = !0)
                : _ === '&'
                  ? (_ = Zt('', s, u))
                  : (_ = Zt(P, s, u))
              : a && !s && (_ === '&' || _ === '') && ((_ = ''), (H = !0));
            var X = n(y, t, { root: H, injectHash: I, parentSelectors: [].concat(Ce(o), [_]) }),
              K = w(X, 2),
              J = K[0],
              j = K[1];
            ((v = f(f({}, v), j)), (h += ''.concat(_).concat(J)));
          } else {
            let U = function (L, A) {
              var V = L.replace(/[A-Z]/g, function (se) {
                  return '-'.concat(se.toLowerCase());
                }),
                D = A;
              (!or[L] && typeof D == 'number' && D !== 0 && (D = ''.concat(D, 'px')),
                L === 'animationName' &&
                  A !== null &&
                  A !== void 0 &&
                  A._keyframe &&
                  (b(A), (D = A.getName(s))),
                (h += ''.concat(V, ':').concat(D, ';')));
            };
            var E,
              O = (E = y?.value) !== null && E !== void 0 ? E : y;
            Q(y) === 'object' && y !== null && y !== void 0 && y[Fn] && Array.isArray(O)
              ? O.forEach(function (L) {
                  U(P, L);
                })
              : U(P, O);
          }
        });
      }
    }),
    a
      ? l &&
        (h && (h = '@layer '.concat(l.name, ' {').concat(h, '}')),
        l.dependencies &&
          (v['@layer '.concat(l.name)] = l.dependencies.map(function (T) {
            return '@layer '.concat(T, ', ').concat(l.name, ';');
          }).join(`
`)))
      : (h = '{'.concat(h, '}')),
    [h, v]
  );
};
function ra(n, e) {
  return Ae(''.concat(n.join('%')).concat(e));
}
function aa() {
  return null;
}
var kn = 'style';
function ia(n, e) {
  var t = n.token,
    r = n.path,
    a = n.hashId,
    i = n.layer,
    o = n.nonce,
    s = n.clientOnly,
    l = n.order,
    u = l === void 0 ? 0 : l,
    d = p.useContext(Et),
    g = d.autoClear;
  d.mock;
  var h = d.defaultCache,
    v = d.hashPriority,
    b = d.container,
    x = d.ssrInline,
    F = d.transformers,
    T = d.linters,
    C = d.cache,
    S = d.layer,
    P = t._tokenKey,
    y = [P];
  (S && y.push('layer'), y.push.apply(y, Ce(r)));
  var I = Vt,
    _ = Sn(
      kn,
      y,
      function () {
        var j = y.join('|');
        if (Qr(j)) {
          var E = Jr(j),
            O = w(E, 2),
            U = O[0],
            L = O[1];
          if (U) return [U, P, L, {}, s, u];
        }
        var A = e(),
          V = na(A, {
            hashId: a,
            hashPriority: v,
            layer: S ? i : void 0,
            path: r.join('-'),
            transformers: F,
            linters: T,
          }),
          D = w(V, 2),
          se = D[0],
          ue = D[1],
          G = We(se),
          et = ra(y, G);
        return [G, P, et, ue, s, u];
      },
      function (j, E) {
        var O = w(j, 3),
          U = O[2];
        (E || g) && Vt && vr(U, { mark: le, attachTo: b });
      },
      function (j) {
        var E = w(j, 4),
          O = E[0];
        E[1];
        var U = E[2],
          L = E[3];
        if (I && O !== Cn) {
          var A = { mark: le, prepend: S ? !1 : 'queue', attachTo: b, priority: u },
            V = typeof o == 'function' ? o() : o;
          V && (A.csp = { nonce: V });
          var D = [],
            se = [];
          (Object.keys(L).forEach(function (G) {
            G.startsWith('@layer') ? D.push(G) : se.push(G);
          }),
            D.forEach(function (G) {
              _e(We(L[G]), '_layer-'.concat(G), f(f({}, A), {}, { prepend: !0 }));
            }));
          var ue = _e(O, U, A);
          ((ue[me] = C.instanceId),
            ue.setAttribute(Be, P),
            se.forEach(function (G) {
              _e(We(L[G]), '_effect-'.concat(G), A);
            }));
        }
      },
    ),
    H = w(_, 3),
    X = H[0],
    K = H[1],
    J = H[2];
  return function (j) {
    var E;
    return (
      !x || I || !h
        ? (E = p.createElement(aa, null))
        : (E = p.createElement(
            'style',
            Ye({}, c(c({}, Be, K), le, J), { dangerouslySetInnerHTML: { __html: X } }),
          )),
      p.createElement(p.Fragment, null, E, j)
    );
  };
}
var oa = function (e, t, r) {
    var a = w(e, 6),
      i = a[0],
      o = a[1],
      s = a[2],
      l = a[3],
      u = a[4],
      d = a[5],
      g = r || {},
      h = g.plain;
    if (u) return null;
    var v = i,
      b = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(d) };
    return (
      (v = Xe(i, o, s, b, h)),
      l &&
        Object.keys(l).forEach(function (x) {
          if (!t[x]) {
            t[x] = !0;
            var F = We(l[x]),
              T = Xe(F, o, '_effect-'.concat(x), b, h);
            x.startsWith('@layer') ? (v = T + v) : (v += T);
          }
        }),
      [d, s, v]
    );
  },
  la = 'cssVar',
  sa = function (e, t, r) {
    var a = w(e, 4),
      i = a[1],
      o = a[2],
      s = a[3],
      l = r || {},
      u = l.plain;
    if (!i) return null;
    var d = -999,
      g = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(d) },
      h = Xe(i, s, o, g, u);
    return [d, o, h];
  };
c(c(c({}, kn, oa), Tn, qr), la, sa);
var ca = (function () {
  function n(e, t) {
    (qe(this, n),
      c(this, 'name', void 0),
      c(this, 'style', void 0),
      c(this, '_keyframe', !0),
      (this.name = e),
      (this.style = t));
  }
  return (
    Ze(n, [
      {
        key: 'getName',
        value: function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          return t ? ''.concat(t, '-').concat(this.name) : this.name;
        },
      },
    ]),
    n
  );
})();
function xe(n) {
  return ((n.notSplit = !0), n);
}
(xe(['borderTop', 'borderBottom']),
  xe(['borderTop']),
  xe(['borderBottom']),
  xe(['borderLeft', 'borderRight']),
  xe(['borderLeft']),
  xe(['borderRight']));
function qt(n) {
  var e = p.useRef();
  e.current = n;
  var t = p.useCallback(function () {
    for (var r, a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    return (r = e.current) === null || r === void 0 ? void 0 : r.call.apply(r, [e].concat(i));
  }, []);
  return t;
}
function Yt(n) {
  var e = p.useRef(!1),
    t = p.useState(n),
    r = w(t, 2),
    a = r[0],
    i = r[1];
  p.useEffect(function () {
    return (
      (e.current = !1),
      function () {
        e.current = !0;
      }
    );
  }, []);
  function o(s, l) {
    (l && e.current) || i(s);
  }
  return [a, o];
}
function ft(n) {
  return n !== void 0;
}
function da(n, e) {
  var t = e || {},
    r = t.defaultValue,
    a = t.value,
    i = t.onChange,
    o = t.postState,
    s = Yt(function () {
      return ft(a)
        ? a
        : ft(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof n == 'function'
            ? n()
            : n;
    }),
    l = w(s, 2),
    u = l[0],
    d = l[1],
    g = a !== void 0 ? a : u,
    h = o ? o(g) : g,
    v = qt(i),
    b = Yt([g]),
    x = w(b, 2),
    F = x[0],
    T = x[1];
  (Kt(
    function () {
      var S = F[0];
      u !== S && v(u, S);
    },
    [F],
  ),
    Kt(
      function () {
        ft(a) || d(a);
      },
      [a],
    ));
  var C = qt(function (S, P) {
    (d(S, P), T([g], P));
  });
  return [h, C];
}
var ua = Symbol.for('react.element'),
  fa = Symbol.for('react.transitional.element'),
  ha = Symbol.for('react.fragment');
function Mn(n) {
  return n && Q(n) === 'object' && (n.$$typeof === ua || n.$$typeof === fa) && n.type === ha;
}
var ga = Number(p.version.split('.')[0]),
  ma = function (e, t) {
    typeof e == 'function' ? e(t) : Q(e) === 'object' && e && 'current' in e && (e.current = t);
  },
  pa = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var a = t.filter(Boolean);
    return a.length <= 1
      ? a[0]
      : function (i) {
          t.forEach(function (o) {
            ma(o, i);
          });
        };
  },
  Yo = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return yr(
      function () {
        return pa.apply(void 0, t);
      },
      t,
      function (a, i) {
        return (
          a.length !== i.length ||
          a.every(function (o, s) {
            return o !== i[s];
          })
        );
      },
    );
  },
  Qo = function (e) {
    var t, r;
    if (!e) return !1;
    if (wn(e) && ga >= 19) return !0;
    var a = ct.isMemo(e) ? e.type.type : e.type;
    return !(
      (typeof a == 'function' &&
        !((t = a.prototype) !== null && t !== void 0 && t.render) &&
        a.$$typeof !== ct.ForwardRef) ||
      (typeof e == 'function' &&
        !((r = e.prototype) !== null && r !== void 0 && r.render) &&
        e.$$typeof !== ct.ForwardRef)
    );
  };
function wn(n) {
  return p.isValidElement(n) && !Mn(n);
}
var Jo = function (e) {
  if (e && wn(e)) {
    var t = e;
    return t.props.propertyIsEnumerable('ref') ? t.props.ref : t.ref;
  }
  return null;
};
function va(n, e) {
  for (var t = n, r = 0; r < e.length; r += 1) {
    if (t == null) return;
    t = t[e[r]];
  }
  return t;
}
const ba = {
    moneySymbol: '$',
    form: { lightFilter: { more: 'المزيد', clear: 'نظف', confirm: 'تأكيد', itemUnit: 'عناصر' } },
    tableForm: {
      search: 'ابحث',
      reset: 'إعادة تعيين',
      submit: 'ارسال',
      collapsed: 'مُقلص',
      expand: 'مُوسع',
      inputPlaceholder: 'الرجاء الإدخال',
      selectPlaceholder: 'الرجاء الإختيار',
    },
    alert: { clear: 'نظف', selected: 'محدد', item: 'عنصر' },
    pagination: { total: { range: ' ', total: 'من', item: 'عناصر' } },
    tableToolBar: {
      leftPin: 'ثبت على اليسار',
      rightPin: 'ثبت على اليمين',
      noPin: 'الغاء التثبيت',
      leftFixedTitle: 'لصق على اليسار',
      rightFixedTitle: 'لصق على اليمين',
      noFixedTitle: 'إلغاء الإلصاق',
      reset: 'إعادة تعيين',
      columnDisplay: 'الأعمدة المعروضة',
      columnSetting: 'الإعدادات',
      fullScreen: 'وضع كامل الشاشة',
      exitFullScreen: 'الخروج من وضع كامل الشاشة',
      reload: 'تحديث',
      density: 'الكثافة',
      densityDefault: 'افتراضي',
      densityLarger: 'أكبر',
      densityMiddle: 'وسط',
      densitySmall: 'مدمج',
    },
    stepsForm: { next: 'التالي', prev: 'السابق', submit: 'أنهى' },
    loginForm: { submitText: 'تسجيل الدخول' },
    editableTable: {
      action: { save: 'أنقذ', cancel: 'إلغاء الأمر', delete: 'حذف', add: 'إضافة صف من البيانات' },
    },
    switch: { open: 'مفتوح', close: 'غلق' },
  },
  ya = {
    moneySymbol: '€',
    form: {
      lightFilter: { more: 'Més', clear: 'Netejar', confirm: 'Confirmar', itemUnit: 'Elements' },
    },
    tableForm: {
      search: 'Cercar',
      reset: 'Netejar',
      submit: 'Enviar',
      collapsed: 'Expandir',
      expand: 'Col·lapsar',
      inputPlaceholder: 'Introduïu valor',
      selectPlaceholder: 'Seleccioneu valor',
    },
    alert: { clear: 'Netejar', selected: 'Seleccionat', item: 'Article' },
    pagination: { total: { range: ' ', total: 'de', item: 'articles' } },
    tableToolBar: {
      leftPin: "Pin a l'esquerra",
      rightPin: 'Pin a la dreta',
      noPin: 'Sense Pin',
      leftFixedTitle: "Fixat a l'esquerra",
      rightFixedTitle: 'Fixat a la dreta',
      noFixedTitle: 'Sense fixar',
      reset: 'Reiniciar',
      columnDisplay: 'Mostrar Columna',
      columnSetting: 'Configuració',
      fullScreen: 'Pantalla Completa',
      exitFullScreen: 'Sortir Pantalla Completa',
      reload: 'Refrescar',
      density: 'Densitat',
      densityDefault: 'Per Defecte',
      densityLarger: 'Llarg',
      densityMiddle: 'Mitjà',
      densitySmall: 'Compacte',
    },
    stepsForm: { next: 'Següent', prev: 'Anterior', submit: 'Finalizar' },
    loginForm: { submitText: 'Entrar' },
    editableTable: {
      action: {
        save: 'Guardar',
        cancel: 'Cancel·lar',
        delete: 'Eliminar',
        add: 'afegir una fila de dades',
      },
    },
    switch: { open: 'obert', close: 'tancat' },
  },
  xa = {
    moneySymbol: 'Kč',
    deleteThisLine: 'Smazat tento řádek',
    copyThisLine: 'Kopírovat tento řádek',
    form: {
      lightFilter: { more: 'Víc', clear: 'Vymazat', confirm: 'Potvrdit', itemUnit: 'Položky' },
    },
    tableForm: {
      search: 'Hledat',
      reset: 'Resetovat',
      submit: 'Odeslat',
      collapsed: 'Zvětšit',
      expand: 'Zmenšit',
      inputPlaceholder: 'Zadejte prosím',
      selectPlaceholder: 'Vyberte prosím',
    },
    alert: { clear: 'Vymazat', selected: 'Vybráno', item: 'Položka' },
    pagination: { total: { range: ' ', total: 'z', item: 'položek' } },
    tableToolBar: {
      leftPin: 'Připnout doleva',
      rightPin: 'Připnout doprava',
      noPin: 'Odepnuto',
      leftFixedTitle: 'Fixováno nalevo',
      rightFixedTitle: 'Fixováno napravo',
      noFixedTitle: 'Nefixováno',
      reset: 'Resetovat',
      columnDisplay: 'Zobrazení sloupců',
      columnSetting: 'Nastavení',
      fullScreen: 'Celá obrazovka',
      exitFullScreen: 'Ukončit celou obrazovku',
      reload: 'Obnovit',
      density: 'Hustota',
      densityDefault: 'Výchozí',
      densityLarger: 'Větší',
      densityMiddle: 'Střední',
      densitySmall: 'Kompaktní',
    },
    stepsForm: { next: 'Další', prev: 'Předchozí', submit: 'Dokončit' },
    loginForm: { submitText: 'Přihlásit se' },
    editableTable: {
      onlyOneLineEditor: 'Upravit lze pouze jeden řádek',
      action: { save: 'Uložit', cancel: 'Zrušit', delete: 'Vymazat', add: 'Přidat řádek' },
    },
    switch: { open: 'Otevřít', close: 'Zavřít' },
  },
  Sa = {
    moneySymbol: '€',
    form: {
      lightFilter: {
        more: 'Mehr',
        clear: 'Zurücksetzen',
        confirm: 'Bestätigen',
        itemUnit: 'Einträge',
      },
    },
    tableForm: {
      search: 'Suchen',
      reset: 'Zurücksetzen',
      submit: 'Absenden',
      collapsed: 'Zeige mehr',
      expand: 'Zeige weniger',
      inputPlaceholder: 'Bitte eingeben',
      selectPlaceholder: 'Bitte auswählen',
    },
    alert: { clear: 'Zurücksetzen', selected: 'Ausgewählt', item: 'Eintrag' },
    pagination: { total: { range: ' ', total: 'von', item: 'Einträgen' } },
    tableToolBar: {
      leftPin: 'Links anheften',
      rightPin: 'Rechts anheften',
      noPin: 'Nicht angeheftet',
      leftFixedTitle: 'Links fixiert',
      rightFixedTitle: 'Rechts fixiert',
      noFixedTitle: 'Nicht fixiert',
      reset: 'Zurücksetzen',
      columnDisplay: 'Angezeigte Reihen',
      columnSetting: 'Einstellungen',
      fullScreen: 'Vollbild',
      exitFullScreen: 'Vollbild verlassen',
      reload: 'Aktualisieren',
      density: 'Abstand',
      densityDefault: 'Standard',
      densityLarger: 'Größer',
      densityMiddle: 'Mittel',
      densitySmall: 'Kompakt',
    },
    stepsForm: { next: 'Weiter', prev: 'Zurück', submit: 'Abschließen' },
    loginForm: { submitText: 'Anmelden' },
    editableTable: {
      action: {
        save: 'Retten',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        add: 'Hinzufügen einer Datenzeile',
      },
    },
    switch: { open: 'offen', close: 'schließen' },
  },
  Ta = {
    moneySymbol: '£',
    form: { lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' } },
    tableForm: {
      search: 'Query',
      reset: 'Reset',
      submit: 'Submit',
      collapsed: 'Expand',
      expand: 'Collapse',
      inputPlaceholder: 'Please enter',
      selectPlaceholder: 'Please select',
    },
    alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
    pagination: { total: { range: ' ', total: 'of', item: 'items' } },
    tableToolBar: {
      leftPin: 'Pin to left',
      rightPin: 'Pin to right',
      noPin: 'Unpinned',
      leftFixedTitle: 'Fixed to the left',
      rightFixedTitle: 'Fixed to the right',
      noFixedTitle: 'Not Fixed',
      reset: 'Reset',
      columnDisplay: 'Column Display',
      columnSetting: 'Table Settings',
      fullScreen: 'Full Screen',
      exitFullScreen: 'Exit Full Screen',
      reload: 'Refresh',
      density: 'Density',
      densityDefault: 'Default',
      densityLarger: 'Larger',
      densityMiddle: 'Middle',
      densitySmall: 'Compact',
    },
    stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
    loginForm: { submitText: 'Login' },
    editableTable: {
      onlyOneLineEditor: 'Only one line can be edited',
      onlyAddOneLine: 'Only one line can be added',
      action: { save: 'Save', cancel: 'Cancel', delete: 'Delete', add: 'add a row of data' },
    },
    switch: { open: 'open', close: 'close' },
  },
  Ca = {
    moneySymbol: '$',
    deleteThisLine: 'Delete this line',
    copyThisLine: 'Copy this line',
    form: { lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' } },
    tableForm: {
      search: 'Query',
      reset: 'Reset',
      submit: 'Submit',
      collapsed: 'Expand',
      expand: 'Collapse',
      inputPlaceholder: 'Please enter',
      selectPlaceholder: 'Please select',
    },
    alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
    pagination: { total: { range: ' ', total: 'of', item: 'items' } },
    tableToolBar: {
      leftPin: 'Pin to left',
      rightPin: 'Pin to right',
      noPin: 'Unpinned',
      leftFixedTitle: 'Fixed to the left',
      rightFixedTitle: 'Fixed to the right',
      noFixedTitle: 'Not Fixed',
      reset: 'Reset',
      columnDisplay: 'Column Display',
      columnSetting: 'Table Settings',
      fullScreen: 'Full Screen',
      exitFullScreen: 'Exit Full Screen',
      reload: 'Refresh',
      density: 'Density',
      densityDefault: 'Default',
      densityLarger: 'Larger',
      densityMiddle: 'Middle',
      densitySmall: 'Compact',
    },
    stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
    loginForm: { submitText: 'Login' },
    editableTable: {
      onlyOneLineEditor: 'Only one line can be edited',
      onlyAddOneLine: 'Only one line can be added',
      action: { save: 'Save', cancel: 'Cancel', delete: 'Delete', add: 'add a row of data' },
    },
    switch: { open: 'open', close: 'close' },
  },
  Pa = {
    moneySymbol: '€',
    form: {
      lightFilter: { more: 'Más', clear: 'Limpiar', confirm: 'Confirmar', itemUnit: 'artículos' },
    },
    tableForm: {
      search: 'Buscar',
      reset: 'Limpiar',
      submit: 'Submit',
      collapsed: 'Expandir',
      expand: 'Colapsar',
      inputPlaceholder: 'Ingrese valor',
      selectPlaceholder: 'Seleccione valor',
    },
    alert: { clear: 'Limpiar', selected: 'Seleccionado', item: 'Articulo' },
    pagination: { total: { range: ' ', total: 'de', item: 'artículos' } },
    tableToolBar: {
      leftPin: 'Pin a la izquierda',
      rightPin: 'Pin a la derecha',
      noPin: 'Sin Pin',
      leftFixedTitle: 'Fijado a la izquierda',
      rightFixedTitle: 'Fijado a la derecha',
      noFixedTitle: 'Sin Fijar',
      reset: 'Reiniciar',
      columnDisplay: 'Mostrar Columna',
      columnSetting: 'Configuración',
      fullScreen: 'Pantalla Completa',
      exitFullScreen: 'Salir Pantalla Completa',
      reload: 'Refrescar',
      density: 'Densidad',
      densityDefault: 'Por Defecto',
      densityLarger: 'Largo',
      densityMiddle: 'Medio',
      densitySmall: 'Compacto',
    },
    stepsForm: { next: 'Siguiente', prev: 'Anterior', submit: 'Finalizar' },
    loginForm: { submitText: 'Entrar' },
    editableTable: {
      action: {
        save: 'Guardar',
        cancel: 'Descartar',
        delete: 'Borrar',
        add: 'añadir una fila de datos',
      },
    },
    switch: { open: 'abrir', close: 'cerrar' },
  },
  Fa = {
    moneySymbol: 'تومان',
    form: { lightFilter: { more: 'بیشتر', clear: 'پاک کردن', confirm: 'تایید', itemUnit: 'مورد' } },
    tableForm: {
      search: 'جستجو',
      reset: 'بازنشانی',
      submit: 'تایید',
      collapsed: 'نمایش بیشتر',
      expand: 'نمایش کمتر',
      inputPlaceholder: 'پیدا کنید',
      selectPlaceholder: 'انتخاب کنید',
    },
    alert: { clear: 'پاک سازی', selected: 'انتخاب', item: 'مورد' },
    pagination: { total: { range: ' ', total: 'از', item: 'مورد' } },
    tableToolBar: {
      leftPin: 'سنجاق به چپ',
      rightPin: 'سنجاق به راست',
      noPin: 'سنجاق نشده',
      leftFixedTitle: 'ثابت شده در چپ',
      rightFixedTitle: 'ثابت شده در راست',
      noFixedTitle: 'شناور',
      reset: 'بازنشانی',
      columnDisplay: 'نمایش همه',
      columnSetting: 'تنظیمات',
      fullScreen: 'تمام صفحه',
      exitFullScreen: 'خروج از حالت تمام صفحه',
      reload: 'تازه سازی',
      density: 'تراکم',
      densityDefault: 'پیش فرض',
      densityLarger: 'بزرگ',
      densityMiddle: 'متوسط',
      densitySmall: 'کوچک',
    },
    stepsForm: { next: 'بعدی', prev: 'قبلی', submit: 'اتمام' },
    loginForm: { submitText: 'ورود' },
    editableTable: {
      action: { save: 'ذخیره', cancel: 'لغو', delete: 'حذف', add: 'یک ردیف داده اضافه کنید' },
    },
    switch: { open: 'باز', close: 'نزدیک' },
  },
  ka = {
    moneySymbol: '€',
    form: {
      lightFilter: { more: 'Plus', clear: 'Effacer', confirm: 'Confirmer', itemUnit: 'Items' },
    },
    tableForm: {
      search: 'Rechercher',
      reset: 'Réinitialiser',
      submit: 'Envoyer',
      collapsed: 'Agrandir',
      expand: 'Réduire',
      inputPlaceholder: 'Entrer une valeur',
      selectPlaceholder: 'Sélectionner une valeur',
    },
    alert: { clear: 'Réinitialiser', selected: 'Sélectionné', item: 'Item' },
    pagination: { total: { range: ' ', total: 'sur', item: 'éléments' } },
    tableToolBar: {
      leftPin: 'Épingler à gauche',
      rightPin: 'Épingler à gauche',
      noPin: 'Sans épingle',
      leftFixedTitle: 'Fixer à gauche',
      rightFixedTitle: 'Fixer à droite',
      noFixedTitle: 'Non fixé',
      reset: 'Réinitialiser',
      columnDisplay: 'Affichage colonne',
      columnSetting: 'Réglages',
      fullScreen: 'Plein écran',
      exitFullScreen: 'Quitter Plein écran',
      reload: 'Rafraichir',
      density: 'Densité',
      densityDefault: 'Par défaut',
      densityLarger: 'Larger',
      densityMiddle: 'Moyenne',
      densitySmall: 'Compacte',
    },
    stepsForm: { next: 'Suivante', prev: 'Précédente', submit: 'Finaliser' },
    loginForm: { submitText: 'Se connecter' },
    editableTable: {
      action: {
        save: 'Sauvegarder',
        cancel: 'Annuler',
        delete: 'Supprimer',
        add: 'ajouter une ligne de données',
      },
    },
    switch: { open: 'ouvert', close: 'près' },
  },
  Ma = {
    moneySymbol: '₪',
    deleteThisLine: 'מחק שורה זו',
    copyThisLine: 'העתק שורה זו',
    form: { lightFilter: { more: 'יותר', clear: 'נקה', confirm: 'אישור', itemUnit: 'פריטים' } },
    tableForm: {
      search: 'חיפוש',
      reset: 'איפוס',
      submit: 'שלח',
      collapsed: 'הרחב',
      expand: 'כווץ',
      inputPlaceholder: 'אנא הכנס',
      selectPlaceholder: 'אנא בחר',
    },
    alert: { clear: 'נקה', selected: 'נבחר', item: 'פריט' },
    pagination: { total: { range: ' ', total: 'מתוך', item: 'פריטים' } },
    tableToolBar: {
      leftPin: 'הצמד לשמאל',
      rightPin: 'הצמד לימין',
      noPin: 'לא מצורף',
      leftFixedTitle: 'מוצמד לשמאל',
      rightFixedTitle: 'מוצמד לימין',
      noFixedTitle: 'לא מוצמד',
      reset: 'איפוס',
      columnDisplay: 'תצוגת עמודות',
      columnSetting: 'הגדרות',
      fullScreen: 'מסך מלא',
      exitFullScreen: 'צא ממסך מלא',
      reload: 'רענן',
      density: 'רזולוציה',
      densityDefault: 'ברירת מחדל',
      densityLarger: 'גדול',
      densityMiddle: 'בינוני',
      densitySmall: 'קטן',
    },
    stepsForm: { next: 'הבא', prev: 'קודם', submit: 'סיום' },
    loginForm: { submitText: 'כניסה' },
    editableTable: {
      onlyOneLineEditor: 'ניתן לערוך רק שורה אחת',
      action: { save: 'שמור', cancel: 'ביטול', delete: 'מחיקה', add: 'הוסף שורת נתונים' },
    },
    switch: { open: 'פתח', close: 'סגור' },
  },
  wa = {
    moneySymbol: 'kn',
    form: {
      lightFilter: { more: 'Više', clear: 'Očisti', confirm: 'Potvrdi', itemUnit: 'Stavke' },
    },
    tableForm: {
      search: 'Pretraži',
      reset: 'Poništi',
      submit: 'Potvrdi',
      collapsed: 'Raširi',
      expand: 'Skupi',
      inputPlaceholder: 'Unesite',
      selectPlaceholder: 'Odaberite',
    },
    alert: { clear: 'Očisti', selected: 'Odaberi', item: 'stavke' },
    pagination: { total: { range: ' ', total: 'od', item: 'stavke' } },
    tableToolBar: {
      leftPin: 'Prikači lijevo',
      rightPin: 'Prikači desno',
      noPin: 'Bez prikačenja',
      leftFixedTitle: 'Fiksiraj lijevo',
      rightFixedTitle: 'Fiksiraj desno',
      noFixedTitle: 'Bez fiksiranja',
      reset: 'Resetiraj',
      columnDisplay: 'Prikaz stupaca',
      columnSetting: 'Postavke',
      fullScreen: 'Puni zaslon',
      exitFullScreen: 'Izađi iz punog zaslona',
      reload: 'Ponovno učitaj',
      density: 'Veličina',
      densityDefault: 'Zadano',
      densityLarger: 'Veliko',
      densityMiddle: 'Srednje',
      densitySmall: 'Malo',
    },
    stepsForm: { next: 'Sljedeći', prev: 'Prethodni', submit: 'Kraj' },
    loginForm: { submitText: 'Prijava' },
    editableTable: {
      action: { save: 'Spremi', cancel: 'Odustani', delete: 'Obriši', add: 'dodajte red podataka' },
    },
    switch: { open: 'otvori', close: 'zatvori' },
  },
  Ia = {
    moneySymbol: 'RP',
    form: {
      lightFilter: { more: 'Lebih', clear: 'Hapus', confirm: 'Konfirmasi', itemUnit: 'Unit' },
    },
    tableForm: {
      search: 'Cari',
      reset: 'Atur ulang',
      submit: 'Kirim',
      collapsed: 'Lebih sedikit',
      expand: 'Lebih banyak',
      inputPlaceholder: 'Masukkan pencarian',
      selectPlaceholder: 'Pilih',
    },
    alert: { clear: 'Hapus', selected: 'Dipilih', item: 'Butir' },
    pagination: { total: { range: ' ', total: 'Dari', item: 'Butir' } },
    tableToolBar: {
      leftPin: 'Pin kiri',
      rightPin: 'Pin kanan',
      noPin: 'Tidak ada pin',
      leftFixedTitle: 'Rata kiri',
      rightFixedTitle: 'Rata kanan',
      noFixedTitle: 'Tidak tetap',
      reset: 'Atur ulang',
      columnDisplay: 'Tampilan kolom',
      columnSetting: 'Pengaturan',
      fullScreen: 'Layar penuh',
      exitFullScreen: 'Keluar layar penuh',
      reload: 'Atur ulang',
      density: 'Kerapatan',
      densityDefault: 'Standar',
      densityLarger: 'Lebih besar',
      densityMiddle: 'Sedang',
      densitySmall: 'Rapat',
    },
    stepsForm: { next: 'Selanjutnya', prev: 'Sebelumnya', submit: 'Selesai' },
    loginForm: { submitText: 'Login' },
    editableTable: {
      action: { save: 'simpan', cancel: 'batal', delete: 'hapus', add: 'Tambahkan baris data' },
    },
    switch: { open: 'buka', close: 'tutup' },
  },
  Ea = {
    moneySymbol: '€',
    form: {
      lightFilter: { more: 'più', clear: 'pulisci', confirm: 'conferma', itemUnit: 'elementi' },
    },
    tableForm: {
      search: 'Filtra',
      reset: 'Pulisci',
      submit: 'Invia',
      collapsed: 'Espandi',
      expand: 'Contrai',
      inputPlaceholder: 'Digita',
      selectPlaceholder: 'Seleziona',
    },
    alert: { clear: 'Rimuovi', selected: 'Selezionati', item: 'elementi' },
    pagination: { total: { range: ' ', total: 'di', item: 'elementi' } },
    tableToolBar: {
      leftPin: 'Fissa a sinistra',
      rightPin: 'Fissa a destra',
      noPin: 'Ripristina posizione',
      leftFixedTitle: 'Fissato a sinistra',
      rightFixedTitle: 'Fissato a destra',
      noFixedTitle: 'Non fissato',
      reset: 'Ripristina',
      columnDisplay: 'Disposizione colonne',
      columnSetting: 'Impostazioni',
      fullScreen: 'Modalità schermo intero',
      exitFullScreen: 'Esci da modalità schermo intero',
      reload: 'Ricarica',
      density: 'Grandezza tabella',
      densityDefault: 'predefinito',
      densityLarger: 'Grande',
      densityMiddle: 'Media',
      densitySmall: 'Compatta',
    },
    stepsForm: { next: 'successivo', prev: 'precedente', submit: 'finisci' },
    loginForm: { submitText: 'Accedi' },
    editableTable: {
      action: { save: 'salva', cancel: 'annulla', delete: 'Delete', add: 'add a row of data' },
    },
    switch: { open: 'open', close: 'chiudi' },
  },
  _a = {
    moneySymbol: '¥',
    form: { lightFilter: { more: '更に', clear: 'クリア', confirm: '確認', itemUnit: 'アイテム' } },
    tableForm: {
      search: '検索',
      reset: 'リセット',
      submit: '送信',
      collapsed: '拡大',
      expand: '折畳',
      inputPlaceholder: '入力してください',
      selectPlaceholder: '選択してください',
    },
    alert: { clear: 'クリア', selected: '選択した', item: 'アイテム' },
    pagination: { total: { range: 'レコード', total: '/合計', item: ' ' } },
    tableToolBar: {
      leftPin: '左に固定',
      rightPin: '右に固定',
      noPin: 'キャンセル',
      leftFixedTitle: '左に固定された項目',
      rightFixedTitle: '右に固定された項目',
      noFixedTitle: '固定されてない項目',
      reset: 'リセット',
      columnDisplay: '表示列',
      columnSetting: '列表示設定',
      fullScreen: 'フルスクリーン',
      exitFullScreen: '終了',
      reload: '更新',
      density: '行高',
      densityDefault: 'デフォルト',
      densityLarger: '大',
      densityMiddle: '中',
      densitySmall: '小',
    },
    stepsForm: { next: '次へ', prev: '前へ', submit: '送信' },
    loginForm: { submitText: 'ログイン' },
    editableTable: { action: { save: '保存', cancel: 'キャンセル', delete: '削除', add: '追加' } },
    switch: { open: '開く', close: '閉じる' },
  },
  Ra = {
    moneySymbol: '₩',
    form: { lightFilter: { more: '더보기', clear: '초기화', confirm: '확인', itemUnit: '건수' } },
    tableForm: {
      search: '조회',
      reset: '초기화',
      submit: '제출',
      collapsed: '확장',
      expand: '닫기',
      inputPlaceholder: '입력해 주세요',
      selectPlaceholder: '선택해 주세요',
    },
    alert: { clear: '취소', selected: '선택', item: '건' },
    pagination: { total: { range: ' ', total: '/ 총', item: '건' } },
    tableToolBar: {
      leftPin: '왼쪽으로 핀',
      rightPin: '오른쪽으로 핀',
      noPin: '핀 제거',
      leftFixedTitle: '왼쪽으로 고정',
      rightFixedTitle: '오른쪽으로 고정',
      noFixedTitle: '비고정',
      reset: '초기화',
      columnDisplay: '컬럼 표시',
      columnSetting: '설정',
      fullScreen: '전체 화면',
      exitFullScreen: '전체 화면 취소',
      reload: '새로 고침',
      density: '여백',
      densityDefault: '기본',
      densityLarger: '많은 여백',
      densityMiddle: '중간 여백',
      densitySmall: '좁은 여백',
    },
    stepsForm: { next: '다음', prev: '이전', submit: '종료' },
    loginForm: { submitText: '로그인' },
    editableTable: {
      action: { save: '저장', cancel: '취소', delete: '삭제', add: '데이터 행 추가' },
    },
    switch: { open: '열', close: '가까 운' },
  },
  La = {
    moneySymbol: '₮',
    form: {
      lightFilter: {
        more: 'Илүү',
        clear: 'Цэвэрлэх',
        confirm: 'Баталгаажуулах',
        itemUnit: 'Нэгжүүд',
      },
    },
    tableForm: {
      search: 'Хайх',
      reset: 'Шинэчлэх',
      submit: 'Илгээх',
      collapsed: 'Өргөтгөх',
      expand: 'Хураах',
      inputPlaceholder: 'Утга оруулна уу',
      selectPlaceholder: 'Утга сонгоно уу',
    },
    alert: { clear: 'Цэвэрлэх', selected: 'Сонгогдсон', item: 'Нэгж' },
    pagination: { total: { range: ' ', total: 'Нийт', item: 'мөр' } },
    tableToolBar: {
      leftPin: 'Зүүн тийш бэхлэх',
      rightPin: 'Баруун тийш бэхлэх',
      noPin: 'Бэхлэхгүй',
      leftFixedTitle: 'Зүүн зэрэгцүүлэх',
      rightFixedTitle: 'Баруун зэрэгцүүлэх',
      noFixedTitle: 'Зэрэгцүүлэхгүй',
      reset: 'Шинэчлэх',
      columnDisplay: 'Баганаар харуулах',
      columnSetting: 'Тохиргоо',
      fullScreen: 'Бүтэн дэлгэцээр',
      exitFullScreen: 'Бүтэн дэлгэц цуцлах',
      reload: 'Шинэчлэх',
      density: 'Хэмжээ',
      densityDefault: 'Хэвийн',
      densityLarger: 'Том',
      densityMiddle: 'Дунд',
      densitySmall: 'Жижиг',
    },
    stepsForm: { next: 'Дараах', prev: 'Өмнөх', submit: 'Дуусгах' },
    loginForm: { submitText: 'Нэвтрэх' },
    editableTable: {
      action: { save: 'Хадгалах', cancel: 'Цуцлах', delete: 'Устгах', add: 'Мөр нэмэх' },
    },
    switch: { open: 'Нээх', close: 'Хаах' },
  },
  Aa = {
    moneySymbol: 'RM',
    form: {
      lightFilter: {
        more: 'Lebih banyak',
        clear: 'Jelas',
        confirm: 'Mengesahkan',
        itemUnit: 'Item',
      },
    },
    tableForm: {
      search: 'Cari',
      reset: 'Menetapkan semula',
      submit: 'Hantar',
      collapsed: 'Kembang',
      expand: 'Kuncup',
      inputPlaceholder: 'Sila masuk',
      selectPlaceholder: 'Sila pilih',
    },
    alert: { clear: 'Padam', selected: 'Dipilih', item: 'Item' },
    pagination: { total: { range: ' ', total: 'daripada', item: 'item' } },
    tableToolBar: {
      leftPin: 'Pin ke kiri',
      rightPin: 'Pin ke kanan',
      noPin: 'Tidak pin',
      leftFixedTitle: 'Tetap ke kiri',
      rightFixedTitle: 'Tetap ke kanan',
      noFixedTitle: 'Tidak Tetap',
      reset: 'Menetapkan semula',
      columnDisplay: 'Lajur',
      columnSetting: 'Settings',
      fullScreen: 'Full Screen',
      exitFullScreen: 'Keluar Full Screen',
      reload: 'Muat Semula',
      density: 'Densiti',
      densityDefault: 'Biasa',
      densityLarger: 'Besar',
      densityMiddle: 'Tengah',
      densitySmall: 'Kecil',
    },
    stepsForm: { next: 'Seterusnya', prev: 'Sebelumnya', submit: 'Selesai' },
    loginForm: { submitText: 'Log Masuk' },
    editableTable: {
      action: {
        save: 'Simpan',
        cancel: 'Membatalkan',
        delete: 'Menghapuskan',
        add: 'tambah baris data',
      },
    },
    switch: { open: 'Terbuka', close: 'Tutup' },
  },
  Ba = {
    moneySymbol: '€',
    deleteThisLine: 'Verwijder deze regel',
    copyThisLine: 'Kopieer deze regel',
    form: {
      lightFilter: {
        more: 'Meer filters',
        clear: 'Wissen',
        confirm: 'Bevestigen',
        itemUnit: 'item',
      },
    },
    tableForm: {
      search: 'Zoeken',
      reset: 'Resetten',
      submit: 'Indienen',
      collapsed: 'Uitvouwen',
      expand: 'Inklappen',
      inputPlaceholder: 'Voer in',
      selectPlaceholder: 'Selecteer',
    },
    alert: { clear: 'Selectie annuleren', selected: 'Geselecteerd', item: 'item' },
    pagination: { total: { range: 'Van', total: 'items/totaal', item: 'items' } },
    tableToolBar: {
      leftPin: 'Vastzetten aan begin',
      rightPin: 'Vastzetten aan einde',
      noPin: 'Niet vastzetten',
      leftFixedTitle: 'Vastzetten aan de linkerkant',
      rightFixedTitle: 'Vastzetten aan de rechterkant',
      noFixedTitle: 'Niet vastzetten',
      reset: 'Resetten',
      columnDisplay: 'Kolomweergave',
      columnSetting: 'Kolominstellingen',
      fullScreen: 'Volledig scherm',
      exitFullScreen: 'Verlaat volledig scherm',
      reload: 'Vernieuwen',
      density: 'Dichtheid',
      densityDefault: 'Normaal',
      densityLarger: 'Ruim',
      densityMiddle: 'Gemiddeld',
      densitySmall: 'Compact',
    },
    stepsForm: { next: 'Volgende stap', prev: 'Vorige stap', submit: 'Indienen' },
    loginForm: { submitText: 'Inloggen' },
    editableTable: {
      onlyOneLineEditor: 'Slechts één regel tegelijk bewerken',
      action: {
        save: 'Opslaan',
        cancel: 'Annuleren',
        delete: 'Verwijderen',
        add: 'Een regel toevoegen',
      },
    },
    switch: { open: 'Openen', close: 'Sluiten' },
  },
  za = {
    moneySymbol: 'zł',
    form: {
      lightFilter: { more: 'Więcej', clear: 'Wyczyść', confirm: 'Potwierdź', itemUnit: 'Ilość' },
    },
    tableForm: {
      search: 'Szukaj',
      reset: 'Reset',
      submit: 'Zatwierdź',
      collapsed: 'Pokaż wiecej',
      expand: 'Pokaż mniej',
      inputPlaceholder: 'Proszę podać',
      selectPlaceholder: 'Proszę wybrać',
    },
    alert: { clear: 'Wyczyść', selected: 'Wybrane', item: 'Wpis' },
    pagination: { total: { range: ' ', total: 'z', item: 'Wpisów' } },
    tableToolBar: {
      leftPin: 'Przypnij do lewej',
      rightPin: 'Przypnij do prawej',
      noPin: 'Odepnij',
      leftFixedTitle: 'Przypięte do lewej',
      rightFixedTitle: 'Przypięte do prawej',
      noFixedTitle: 'Nieprzypięte',
      reset: 'Reset',
      columnDisplay: 'Wyświetlane wiersze',
      columnSetting: 'Ustawienia',
      fullScreen: 'Pełen ekran',
      exitFullScreen: 'Zamknij pełen ekran',
      reload: 'Odśwież',
      density: 'Odstęp',
      densityDefault: 'Standard',
      densityLarger: 'Wiekszy',
      densityMiddle: 'Sredni',
      densitySmall: 'Kompaktowy',
    },
    stepsForm: { next: 'Weiter', prev: 'Zurück', submit: 'Abschließen' },
    loginForm: { submitText: 'Zaloguj się' },
    editableTable: {
      action: {
        save: 'Zapisać',
        cancel: 'Anuluj',
        delete: 'Usunąć',
        add: 'dodawanie wiersza danych',
      },
    },
    switch: { open: 'otwierać', close: 'zamykać' },
  },
  Ha = {
    moneySymbol: 'R$',
    form: {
      lightFilter: { more: 'Mais', clear: 'Limpar', confirm: 'Confirmar', itemUnit: 'Itens' },
    },
    tableForm: {
      search: 'Filtrar',
      reset: 'Limpar',
      submit: 'Confirmar',
      collapsed: 'Expandir',
      expand: 'Colapsar',
      inputPlaceholder: 'Por favor insira',
      selectPlaceholder: 'Por favor selecione',
    },
    alert: { clear: 'Limpar', selected: 'Selecionado(s)', item: 'Item(s)' },
    pagination: { total: { range: ' ', total: 'de', item: 'itens' } },
    tableToolBar: {
      leftPin: 'Fixar à esquerda',
      rightPin: 'Fixar à direita',
      noPin: 'Desfixado',
      leftFixedTitle: 'Fixado à esquerda',
      rightFixedTitle: 'Fixado à direita',
      noFixedTitle: 'Não fixado',
      reset: 'Limpar',
      columnDisplay: 'Mostrar Coluna',
      columnSetting: 'Configurações',
      fullScreen: 'Tela Cheia',
      exitFullScreen: 'Sair da Tela Cheia',
      reload: 'Atualizar',
      density: 'Densidade',
      densityDefault: 'Padrão',
      densityLarger: 'Largo',
      densityMiddle: 'Médio',
      densitySmall: 'Compacto',
    },
    stepsForm: { next: 'Próximo', prev: 'Anterior', submit: 'Enviar' },
    loginForm: { submitText: 'Entrar' },
    editableTable: {
      action: {
        save: 'Salvar',
        cancel: 'Cancelar',
        delete: 'Apagar',
        add: 'adicionar uma linha de dados',
      },
    },
    switch: { open: 'abrir', close: 'fechar' },
  },
  ja = {
    moneySymbol: 'RON',
    deleteThisLine: 'Șterge acest rând',
    copyThisLine: 'Copiază acest rând',
    form: {
      lightFilter: {
        more: 'Mai multe filtre',
        clear: 'Curăță',
        confirm: 'Confirmă',
        itemUnit: 'elemente',
      },
    },
    tableForm: {
      search: 'Caută',
      reset: 'Resetează',
      submit: 'Trimite',
      collapsed: 'Extinde',
      expand: 'Restrânge',
      inputPlaceholder: 'Introduceți',
      selectPlaceholder: 'Selectați',
    },
    alert: { clear: 'Anulează selecția', selected: 'Selectat', item: 'elemente' },
    pagination: { total: { range: 'De la', total: 'elemente/total', item: 'elemente' } },
    tableToolBar: {
      leftPin: 'Fixează la început',
      rightPin: 'Fixează la sfârșit',
      noPin: 'Nu fixa',
      leftFixedTitle: 'Fixează în stânga',
      rightFixedTitle: 'Fixează în dreapta',
      noFixedTitle: 'Nu fixa',
      reset: 'Resetează',
      columnDisplay: 'Afișare coloane',
      columnSetting: 'Setări coloane',
      fullScreen: 'Ecran complet',
      exitFullScreen: 'Ieși din ecran complet',
      reload: 'Reîncarcă',
      density: 'Densitate',
      densityDefault: 'Normal',
      densityLarger: 'Larg',
      densityMiddle: 'Mediu',
      densitySmall: 'Compact',
    },
    stepsForm: { next: 'Pasul următor', prev: 'Pasul anterior', submit: 'Trimite' },
    loginForm: { submitText: 'Autentificare' },
    editableTable: {
      onlyOneLineEditor: 'Se poate edita doar un rând simultan',
      action: { save: 'Salvează', cancel: 'Anulează', delete: 'Șterge', add: 'Adaugă un rând' },
    },
    switch: { open: 'Deschide', close: 'Închide' },
  },
  Da = {
    moneySymbol: '₽',
    form: { lightFilter: { more: 'Еще', clear: 'Очистить', confirm: 'ОК', itemUnit: 'Позиции' } },
    tableForm: {
      search: 'Найти',
      reset: 'Сброс',
      submit: 'Отправить',
      collapsed: 'Развернуть',
      expand: 'Свернуть',
      inputPlaceholder: 'Введите значение',
      selectPlaceholder: 'Выберите значение',
    },
    alert: { clear: 'Очистить', selected: 'Выбрано', item: 'элементов' },
    pagination: { total: { range: ' ', total: 'из', item: 'элементов' } },
    tableToolBar: {
      leftPin: 'Закрепить слева',
      rightPin: 'Закрепить справа',
      noPin: 'Открепить',
      leftFixedTitle: 'Закреплено слева',
      rightFixedTitle: 'Закреплено справа',
      noFixedTitle: 'Не закреплено',
      reset: 'Сброс',
      columnDisplay: 'Отображение столбца',
      columnSetting: 'Настройки',
      fullScreen: 'Полный экран',
      exitFullScreen: 'Выйти из полноэкранного режима',
      reload: 'Обновить',
      density: 'Размер',
      densityDefault: 'По умолчанию',
      densityLarger: 'Большой',
      densityMiddle: 'Средний',
      densitySmall: 'Сжатый',
    },
    stepsForm: { next: 'Следующий', prev: 'Предыдущий', submit: 'Завершить' },
    loginForm: { submitText: 'Вход' },
    editableTable: {
      action: {
        save: 'Сохранить',
        cancel: 'Отменить',
        delete: 'Удалить',
        add: 'добавить ряд данных',
      },
    },
    switch: { open: 'Открытый чемпионат мира по теннису', close: 'По адресу:' },
  },
  Na = {
    moneySymbol: '€',
    deleteThisLine: 'Odstrániť tento riadok',
    copyThisLine: 'Skopírujte tento riadok',
    form: {
      lightFilter: { more: 'Viac', clear: 'Vyčistiť', confirm: 'Potvrďte', itemUnit: 'Položky' },
    },
    tableForm: {
      search: 'Vyhladať',
      reset: 'Resetovať',
      submit: 'Odoslať',
      collapsed: 'Rozbaliť',
      expand: 'Zbaliť',
      inputPlaceholder: 'Prosím, zadajte',
      selectPlaceholder: 'Prosím, vyberte',
    },
    alert: { clear: 'Vyčistiť', selected: 'Vybraný', item: 'Položka' },
    pagination: { total: { range: ' ', total: 'z', item: 'položiek' } },
    tableToolBar: {
      leftPin: 'Pripnúť vľavo',
      rightPin: 'Pripnúť vpravo',
      noPin: 'Odopnuté',
      leftFixedTitle: 'Fixované na ľavo',
      rightFixedTitle: 'Fixované na pravo',
      noFixedTitle: 'Nefixované',
      reset: 'Resetovať',
      columnDisplay: 'Zobrazenie stĺpcov',
      columnSetting: 'Nastavenia',
      fullScreen: 'Celá obrazovka',
      exitFullScreen: 'Ukončiť celú obrazovku',
      reload: 'Obnoviť',
      density: 'Hustota',
      densityDefault: 'Predvolené',
      densityLarger: 'Väčšie',
      densityMiddle: 'Stredné',
      densitySmall: 'Kompaktné',
    },
    stepsForm: { next: 'Ďalšie', prev: 'Predchádzajúce', submit: 'Potvrdiť' },
    loginForm: { submitText: 'Prihlásiť sa' },
    editableTable: {
      onlyOneLineEditor: 'Upravovať možno iba jeden riadok',
      action: {
        save: 'Uložiť',
        cancel: 'Zrušiť',
        delete: 'Odstrániť',
        add: 'pridať riadok údajov',
      },
    },
    switch: { open: 'otvoriť', close: 'zavrieť' },
  },
  Oa = {
    moneySymbol: 'RSD',
    form: {
      lightFilter: { more: 'Više', clear: 'Očisti', confirm: 'Potvrdi', itemUnit: 'Stavke' },
    },
    tableForm: {
      search: 'Pronađi',
      reset: 'Resetuj',
      submit: 'Pošalji',
      collapsed: 'Proširi',
      expand: 'Skupi',
      inputPlaceholder: 'Molimo unesite',
      selectPlaceholder: 'Molimo odaberite',
    },
    alert: { clear: 'Očisti', selected: 'Odabrano', item: 'Stavka' },
    pagination: { total: { range: ' ', total: 'od', item: 'stavki' } },
    tableToolBar: {
      leftPin: 'Zakači levo',
      rightPin: 'Zakači desno',
      noPin: 'Nije zakačeno',
      leftFixedTitle: 'Fiksirano levo',
      rightFixedTitle: 'Fiksirano desno',
      noFixedTitle: 'Nije fiksirano',
      reset: 'Resetuj',
      columnDisplay: 'Prikaz kolona',
      columnSetting: 'Podešavanja',
      fullScreen: 'Pun ekran',
      exitFullScreen: 'Zatvori pun ekran',
      reload: 'Osveži',
      density: 'Veličina',
      densityDefault: 'Podrazumevana',
      densityLarger: 'Veća',
      densityMiddle: 'Srednja',
      densitySmall: 'Kompaktna',
    },
    stepsForm: { next: 'Dalje', prev: 'Nazad', submit: 'Gotovo' },
    loginForm: { submitText: 'Prijavi se' },
    editableTable: {
      action: { save: 'Sačuvaj', cancel: 'Poništi', delete: 'Obriši', add: 'dodajte red podataka' },
    },
    switch: { open: 'Отворите', close: 'Затворите' },
  },
  $a = {
    moneySymbol: 'SEK',
    deleteThisLine: 'Radera denna rad',
    copyThisLine: 'Kopiera denna rad',
    form: {
      lightFilter: { more: 'Fler filter', clear: 'Rensa', confirm: 'Bekräfta', itemUnit: 'objekt' },
    },
    tableForm: {
      search: 'Sök',
      reset: 'Återställ',
      submit: 'Skicka',
      collapsed: 'Expandera',
      expand: 'Fäll ihop',
      inputPlaceholder: 'Vänligen ange',
      selectPlaceholder: 'Vänligen välj',
    },
    alert: { clear: 'Avbryt val', selected: 'Vald', item: 'objekt' },
    pagination: { total: { range: 'Från', total: 'objekt/totalt', item: 'objekt' } },
    tableToolBar: {
      leftPin: 'Fäst till vänster',
      rightPin: 'Fäst till höger',
      noPin: 'Inte fäst',
      leftFixedTitle: 'Fäst till vänster',
      rightFixedTitle: 'Fäst till höger',
      noFixedTitle: 'Inte fäst',
      reset: 'Återställ',
      columnDisplay: 'Kolumnvisning',
      columnSetting: 'Kolumninställningar',
      fullScreen: 'Fullskärm',
      exitFullScreen: 'Avsluta fullskärm',
      reload: 'Ladda om',
      density: 'Täthet',
      densityDefault: 'Normal',
      densityLarger: 'Lös',
      densityMiddle: 'Medium',
      densitySmall: 'Kompakt',
    },
    stepsForm: { next: 'Nästa steg', prev: 'Föregående steg', submit: 'Skicka' },
    loginForm: { submitText: 'Logga in' },
    editableTable: {
      onlyOneLineEditor: 'Endast en rad kan redigeras åt gången',
      action: { save: 'Spara', cancel: 'Avbryt', delete: 'Radera', add: 'Lägg till en rad' },
    },
    switch: { open: 'Öppna', close: 'Stäng' },
  },
  Ua = {
    moneySymbol: '฿',
    deleteThisLine: 'ลบบรรทัดนี้',
    copyThisLine: 'คัดลอกบรรทัดนี้',
    form: {
      lightFilter: { more: 'มากกว่า', clear: 'ชัดเจน', confirm: 'ยืนยัน', itemUnit: 'รายการ' },
    },
    tableForm: {
      search: 'สอบถาม',
      reset: 'รีเซ็ต',
      submit: 'ส่ง',
      collapsed: 'ขยาย',
      expand: 'ทรุด',
      inputPlaceholder: 'กรุณาป้อน',
      selectPlaceholder: 'โปรดเลือก',
    },
    alert: { clear: 'ชัดเจน', selected: 'เลือกแล้ว', item: 'รายการ' },
    pagination: { total: { range: ' ', total: 'ของ', item: 'รายการ' } },
    tableToolBar: {
      leftPin: 'ปักหมุดไปทางซ้าย',
      rightPin: 'ปักหมุดไปทางขวา',
      noPin: 'เลิกตรึงแล้ว',
      leftFixedTitle: 'แก้ไขด้านซ้าย',
      rightFixedTitle: 'แก้ไขด้านขวา',
      noFixedTitle: 'ไม่คงที่',
      reset: 'รีเซ็ต',
      columnDisplay: 'การแสดงคอลัมน์',
      columnSetting: 'การตั้งค่า',
      fullScreen: 'เต็มจอ',
      exitFullScreen: 'ออกจากโหมดเต็มหน้าจอ',
      reload: 'รีเฟรช',
      density: 'ความหนาแน่น',
      densityDefault: 'ค่าเริ่มต้น',
      densityLarger: 'ขนาดใหญ่ขึ้น',
      densityMiddle: 'กลาง',
      densitySmall: 'กะทัดรัด',
    },
    stepsForm: { next: 'ถัดไป', prev: 'ก่อนหน้า', submit: 'เสร็จ' },
    loginForm: { submitText: 'เข้าสู่ระบบ' },
    editableTable: {
      onlyOneLineEditor: 'แก้ไขได้เพียงบรรทัดเดียวเท่านั้น',
      action: { save: 'บันทึก', cancel: 'ยกเลิก', delete: 'ลบ', add: 'เพิ่มแถวของข้อมูล' },
    },
    switch: { open: 'เปิด', close: 'ปิด' },
  },
  Va = {
    moneySymbol: '₺',
    form: {
      lightFilter: { more: 'Daha Fazla', clear: 'Temizle', confirm: 'Onayla', itemUnit: 'Öğeler' },
    },
    tableForm: {
      search: 'Filtrele',
      reset: 'Sıfırla',
      submit: 'Gönder',
      collapsed: 'Daha fazla',
      expand: 'Daha az',
      inputPlaceholder: 'Filtrelemek için bir değer girin',
      selectPlaceholder: 'Filtrelemek için bir değer seçin',
    },
    alert: { clear: 'Temizle', selected: 'Seçili', item: 'Öğe' },
    pagination: { total: { range: ' ', total: 'Toplam', item: 'Öğe' } },
    tableToolBar: {
      leftPin: 'Sola sabitle',
      rightPin: 'Sağa sabitle',
      noPin: 'Sabitlemeyi kaldır',
      leftFixedTitle: 'Sola sabitlendi',
      rightFixedTitle: 'Sağa sabitlendi',
      noFixedTitle: 'Sabitlenmedi',
      reset: 'Sıfırla',
      columnDisplay: 'Kolon Görünümü',
      columnSetting: 'Ayarlar',
      fullScreen: 'Tam Ekran',
      exitFullScreen: 'Tam Ekrandan Çık',
      reload: 'Yenile',
      density: 'Kalınlık',
      densityDefault: 'Varsayılan',
      densityLarger: 'Büyük',
      densityMiddle: 'Orta',
      densitySmall: 'Küçük',
    },
    stepsForm: { next: 'Sıradaki', prev: 'Önceki', submit: 'Gönder' },
    loginForm: { submitText: 'Giriş Yap' },
    editableTable: {
      action: {
        save: 'Kaydet',
        cancel: 'Vazgeç',
        delete: 'Sil',
        add: 'foegje in rige gegevens ta',
      },
    },
    switch: { open: 'açık', close: 'kapatmak' },
  },
  Ga = {
    moneySymbol: '₴',
    deleteThisLine: 'Видатили рядок',
    copyThisLine: 'Скопіювати рядок',
    form: { lightFilter: { more: 'Ще', clear: 'Очистити', confirm: 'Ок', itemUnit: 'Позиції' } },
    tableForm: {
      search: 'Пошук',
      reset: 'Очистити',
      submit: 'Відправити',
      collapsed: 'Розгорнути',
      expand: 'Згорнути',
      inputPlaceholder: 'Введіть значення',
      selectPlaceholder: 'Оберіть значення',
    },
    alert: { clear: 'Очистити', selected: 'Обрано', item: 'елементів' },
    pagination: { total: { range: ' ', total: 'з', item: 'елементів' } },
    tableToolBar: {
      leftPin: 'Закріпити зліва',
      rightPin: 'Закріпити справа',
      noPin: 'Відкріпити',
      leftFixedTitle: 'Закріплено зліва',
      rightFixedTitle: 'Закріплено справа',
      noFixedTitle: 'Не закріплено',
      reset: 'Скинути',
      columnDisplay: 'Відображення стовпців',
      columnSetting: 'Налаштування',
      fullScreen: 'Повноекранний режим',
      exitFullScreen: 'Вийти з повноекранного режиму',
      reload: 'Оновити',
      density: 'Розмір',
      densityDefault: 'За замовчуванням',
      densityLarger: 'Великий',
      densityMiddle: 'Середній',
      densitySmall: 'Стислий',
    },
    stepsForm: { next: 'Наступний', prev: 'Попередній', submit: 'Завершити' },
    loginForm: { submitText: 'Вхіх' },
    editableTable: {
      onlyOneLineEditor: 'Тільки один рядок може бути редагований одночасно',
      action: { save: 'Зберегти', cancel: 'Відмінити', delete: 'Видалити', add: 'додати рядок' },
    },
    switch: { open: 'Відкрито', close: 'Закрито' },
  },
  Ka = {
    moneySymbol: 'UZS',
    form: {
      lightFilter: { more: 'Yana', clear: 'Tozalash', confirm: 'OK', itemUnit: 'Pozitsiyalar' },
    },
    tableForm: {
      search: 'Qidirish',
      reset: 'Qayta tiklash',
      submit: 'Yuborish',
      collapsed: 'Yig‘ish',
      expand: 'Kengaytirish',
      inputPlaceholder: 'Qiymatni kiriting',
      selectPlaceholder: 'Qiymatni tanlang',
    },
    alert: { clear: 'Tozalash', selected: 'Tanlangan', item: 'elementlar' },
    pagination: { total: { range: ' ', total: 'dan', item: 'elementlar' } },
    tableToolBar: {
      leftPin: 'Chapga mahkamlash',
      rightPin: 'O‘ngga mahkamlash',
      noPin: 'Mahkamlashni olib tashlash',
      leftFixedTitle: 'Chapga mahkamlangan',
      rightFixedTitle: 'O‘ngga mahkamlangan',
      noFixedTitle: 'Mahkamlashsiz',
      reset: 'Qayta tiklash',
      columnDisplay: 'Ustunni ko‘rsatish',
      columnSetting: 'Sozlamalar',
      fullScreen: 'To‘liq ekran',
      exitFullScreen: 'To‘liq ekrandan chiqish',
      reload: 'Yangilash',
      density: 'O‘lcham',
      densityDefault: 'Standart',
      densityLarger: 'Katta',
      densityMiddle: 'O‘rtacha',
      densitySmall: 'Kichik',
    },
    stepsForm: { next: 'Keyingi', prev: 'Oldingi', submit: 'Tugatish' },
    loginForm: { submitText: 'Kirish' },
    editableTable: {
      action: {
        save: 'Saqlash',
        cancel: 'Bekor qilish',
        delete: 'O‘chirish',
        add: 'maʼlumotlar qatorini qo‘shish',
      },
    },
    switch: { open: 'Ochish', close: 'Yopish' },
  },
  Wa = {
    moneySymbol: '₫',
    form: {
      lightFilter: { more: 'Nhiều hơn', clear: 'Trong', confirm: 'Xác nhận', itemUnit: 'Mục' },
    },
    tableForm: {
      search: 'Tìm kiếm',
      reset: 'Làm lại',
      submit: 'Gửi đi',
      collapsed: 'Mở rộng',
      expand: 'Thu gọn',
      inputPlaceholder: 'nhập dữ liệu',
      selectPlaceholder: 'Vui lòng chọn',
    },
    alert: { clear: 'Xóa', selected: 'đã chọn', item: 'mục' },
    pagination: { total: { range: ' ', total: 'trên', item: 'mặt hàng' } },
    tableToolBar: {
      leftPin: 'Ghim trái',
      rightPin: 'Ghim phải',
      noPin: 'Bỏ ghim',
      leftFixedTitle: 'Cố định trái',
      rightFixedTitle: 'Cố định phải',
      noFixedTitle: 'Chưa cố định',
      reset: 'Làm lại',
      columnDisplay: 'Cột hiển thị',
      columnSetting: 'Cấu hình',
      fullScreen: 'Chế độ toàn màn hình',
      exitFullScreen: 'Thoát chế độ toàn màn hình',
      reload: 'Làm mới',
      density: 'Mật độ hiển thị',
      densityDefault: 'Mặc định',
      densityLarger: 'Mặc định',
      densityMiddle: 'Trung bình',
      densitySmall: 'Chật',
    },
    stepsForm: { next: 'Sau', prev: 'Trước', submit: 'Kết thúc' },
    loginForm: { submitText: 'Đăng nhập' },
    editableTable: {
      action: { save: 'Cứu', cancel: 'Hủy', delete: 'Xóa', add: 'thêm một hàng dữ liệu' },
    },
    switch: { open: 'mở', close: 'đóng' },
  },
  Xa = {
    moneySymbol: '¥',
    deleteThisLine: '删除此项',
    copyThisLine: '复制此项',
    form: { lightFilter: { more: '更多筛选', clear: '清除', confirm: '确认', itemUnit: '项' } },
    tableForm: {
      search: '查询',
      reset: '重置',
      submit: '提交',
      collapsed: '展开',
      expand: '收起',
      inputPlaceholder: '请输入',
      selectPlaceholder: '请选择',
    },
    alert: { clear: '取消选择', selected: '已选择', item: '项' },
    pagination: { total: { range: '第', total: '条/总共', item: '条' } },
    tableToolBar: {
      leftPin: '固定在列首',
      rightPin: '固定在列尾',
      noPin: '不固定',
      leftFixedTitle: '固定在左侧',
      rightFixedTitle: '固定在右侧',
      noFixedTitle: '不固定',
      reset: '重置',
      columnDisplay: '列展示',
      columnSetting: '列设置',
      fullScreen: '全屏',
      exitFullScreen: '退出全屏',
      reload: '刷新',
      density: '密度',
      densityDefault: '正常',
      densityLarger: '宽松',
      densityMiddle: '中等',
      densitySmall: '紧凑',
    },
    stepsForm: { next: '下一步', prev: '上一步', submit: '提交' },
    loginForm: { submitText: '登录' },
    editableTable: {
      onlyOneLineEditor: '只能同时编辑一行',
      action: { save: '保存', cancel: '取消', delete: '删除', add: '添加一行数据' },
    },
    switch: { open: '打开', close: '关闭' },
  },
  Za = {
    moneySymbol: 'HK$',
    deleteThisLine: '刪除此項',
    copyThisLine: '複製此項',
    form: { lightFilter: { more: '更多篩選', clear: '清除', confirm: '確認', itemUnit: '項' } },
    tableForm: {
      search: '搜尋',
      reset: '重設',
      submit: '提交',
      collapsed: '展開',
      expand: '收起',
      inputPlaceholder: '請輸入',
      selectPlaceholder: '請選擇',
    },
    alert: { clear: '取消選取', selected: '已選取', item: '項' },
    pagination: { total: { range: '第', total: '項/總共', item: '項' } },
    tableToolBar: {
      leftPin: '固定到左邊',
      rightPin: '固定到右邊',
      noPin: '不固定',
      leftFixedTitle: '固定在左側',
      rightFixedTitle: '固定在右側',
      noFixedTitle: '不固定',
      reset: '重設',
      columnDisplay: '列顯示',
      columnSetting: '列設定',
      fullScreen: '全螢幕',
      exitFullScreen: '退出全螢幕',
      reload: '重新整理',
      density: '密度',
      densityDefault: '正常',
      densityLarger: '寬鬆',
      densityMiddle: '中等',
      densitySmall: '緊湊',
    },
    stepsForm: { next: '下一步', prev: '上一步', submit: '完成' },
    loginForm: { submitText: '登入' },
    editableTable: {
      onlyOneLineEditor: '只能同時編輯一行',
      action: { save: '保存', cancel: '取消', delete: '刪除', add: '新增一行資料' },
    },
    switch: { open: '打開', close: '關閉' },
  },
  qa = {
    moneySymbol: 'NT$',
    deleteThisLine: '刪除此项',
    copyThisLine: '複製此项',
    form: { lightFilter: { more: '更多篩選', clear: '清除', confirm: '確認', itemUnit: '項' } },
    tableForm: {
      search: '查詢',
      reset: '重置',
      submit: '提交',
      collapsed: '展開',
      expand: '收起',
      inputPlaceholder: '請輸入',
      selectPlaceholder: '請選擇',
    },
    alert: { clear: '取消選擇', selected: '已選擇', item: '項' },
    pagination: { total: { range: '第', total: '條/總共', item: '條' } },
    tableToolBar: {
      leftPin: '固定到左邊',
      rightPin: '固定到右邊',
      noPin: '不固定',
      leftFixedTitle: '固定在左側',
      rightFixedTitle: '固定在右側',
      noFixedTitle: '不固定',
      reset: '重置',
      columnDisplay: '列展示',
      columnSetting: '列設置',
      fullScreen: '全屏',
      exitFullScreen: '退出全屏',
      reload: '刷新',
      density: '密度',
      densityDefault: '正常',
      densityLarger: '寬鬆',
      densityMiddle: '中等',
      densitySmall: '緊湊',
    },
    stepsForm: { next: '下一步', prev: '上一步', submit: '完成' },
    loginForm: { submitText: '登入' },
    editableTable: {
      onlyOneLineEditor: '只能同時編輯一行',
      action: { save: '保存', cancel: '取消', delete: '刪除', add: '新增一行資料' },
    },
    switch: { open: '打開', close: '關閉' },
  };
var k = function (e, t) {
    return {
      getMessage: function (a, i) {
        var o = va(t, a.replace(/\[(\d+)\]/g, '.$1').split('.')) || '';
        if (o) return o;
        var s = e.replace('_', '-');
        if (s === 'zh-CN') return i;
        var l = ze['zh-CN'];
        return l ? l.getMessage(a, i) : i;
      },
      locale: e,
    };
  },
  Ya = k('mn_MN', La),
  Qa = k('ar_EG', ba),
  Te = k('zh_CN', Xa),
  Ja = k('en_US', Ca),
  ei = k('en_GB', Ta),
  ti = k('vi_VN', Wa),
  ni = k('it_IT', Ea),
  ri = k('ja_JP', _a),
  ai = k('es_ES', Pa),
  ii = k('ca_ES', ya),
  oi = k('ru_RU', Da),
  li = k('sr_RS', Oa),
  si = k('ms_MY', Aa),
  ci = k('zh_TW', qa),
  di = k('zh_HK', Za),
  ui = k('fr_FR', ka),
  fi = k('pt_BR', Ha),
  hi = k('ko_KR', Ra),
  gi = k('id_ID', Ia),
  mi = k('de_DE', Sa),
  pi = k('fa_IR', Fa),
  vi = k('tr_TR', Va),
  bi = k('pl_PL', za),
  yi = k('hr_', wa),
  xi = k('th_TH', Ua),
  Si = k('cs_cz', xa),
  Ti = k('sk_SK', Na),
  Ci = k('he_IL', Ma),
  Pi = k('uk_UA', Ga),
  Fi = k('uz_UZ', Ka),
  ki = k('nl_NL', Ba),
  Mi = k('ro_RO', ja),
  wi = k('sv_SE', $a),
  ze = {
    'mn-MN': Ya,
    'ar-EG': Qa,
    'zh-CN': Te,
    'en-US': Ja,
    'en-GB': ei,
    'vi-VN': ti,
    'it-IT': ni,
    'ja-JP': ri,
    'es-ES': ai,
    'ca-ES': ii,
    'ru-RU': oi,
    'sr-RS': li,
    'ms-MY': si,
    'zh-TW': ci,
    'zh-HK': di,
    'fr-FR': ui,
    'pt-BR': fi,
    'ko-KR': hi,
    'id-ID': gi,
    'de-DE': mi,
    'fa-IR': pi,
    'tr-TR': vi,
    'pl-PL': bi,
    'hr-HR': yi,
    'th-TH': xi,
    'cs-CZ': Si,
    'sk-SK': Ti,
    'he-IL': Ci,
    'uk-UA': Pi,
    'uz-UZ': Fi,
    'nl-NL': ki,
    'ro-RO': Mi,
    'sv-SE': wi,
  },
  Ii = Object.keys(ze),
  In = function (e) {
    var t = (e || 'zh-CN').toLocaleLowerCase();
    return Ii.find(function (r) {
      var a = r.toLocaleLowerCase();
      return a.includes(t);
    });
  };
function N(n, e) {
  Ei(n) && (n = '100%');
  var t = _i(n);
  return (
    (n = e === 360 ? n : Math.min(e, Math.max(0, parseFloat(n)))),
    t && (n = parseInt(String(n * e), 10) / 100),
    Math.abs(n - e) < 1e-6
      ? 1
      : (e === 360
          ? (n = (n < 0 ? (n % e) + e : n % e) / parseFloat(String(e)))
          : (n = (n % e) / parseFloat(String(e))),
        n)
  );
}
function Ve(n) {
  return Math.min(1, Math.max(0, n));
}
function Ei(n) {
  return typeof n == 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
function _i(n) {
  return typeof n == 'string' && n.indexOf('%') !== -1;
}
function En(n) {
  return ((n = parseFloat(n)), (isNaN(n) || n < 0 || n > 1) && (n = 1), n);
}
function Ge(n) {
  return n <= 1 ? ''.concat(Number(n) * 100, '%') : n;
}
function pe(n) {
  return n.length === 1 ? '0' + n : String(n);
}
function Ri(n, e, t) {
  return { r: N(n, 255) * 255, g: N(e, 255) * 255, b: N(t, 255) * 255 };
}
function Qt(n, e, t) {
  ((n = N(n, 255)), (e = N(e, 255)), (t = N(t, 255)));
  var r = Math.max(n, e, t),
    a = Math.min(n, e, t),
    i = 0,
    o = 0,
    s = (r + a) / 2;
  if (r === a) ((o = 0), (i = 0));
  else {
    var l = r - a;
    switch (((o = s > 0.5 ? l / (2 - r - a) : l / (r + a)), r)) {
      case n:
        i = (e - t) / l + (e < t ? 6 : 0);
        break;
      case e:
        i = (t - n) / l + 2;
        break;
      case t:
        i = (n - e) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l: s };
}
function ht(n, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? n + (e - n) * (6 * t)
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? n + (e - n) * (2 / 3 - t) * 6
          : n
  );
}
function Li(n, e, t) {
  var r, a, i;
  if (((n = N(n, 360)), (e = N(e, 100)), (t = N(t, 100)), e === 0)) ((a = t), (i = t), (r = t));
  else {
    var o = t < 0.5 ? t * (1 + e) : t + e - t * e,
      s = 2 * t - o;
    ((r = ht(s, o, n + 1 / 3)), (a = ht(s, o, n)), (i = ht(s, o, n - 1 / 3)));
  }
  return { r: r * 255, g: a * 255, b: i * 255 };
}
function Jt(n, e, t) {
  ((n = N(n, 255)), (e = N(e, 255)), (t = N(t, 255)));
  var r = Math.max(n, e, t),
    a = Math.min(n, e, t),
    i = 0,
    o = r,
    s = r - a,
    l = r === 0 ? 0 : s / r;
  if (r === a) i = 0;
  else {
    switch (r) {
      case n:
        i = (e - t) / s + (e < t ? 6 : 0);
        break;
      case e:
        i = (t - n) / s + 2;
        break;
      case t:
        i = (n - e) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: o };
}
function Ai(n, e, t) {
  ((n = N(n, 360) * 6), (e = N(e, 100)), (t = N(t, 100)));
  var r = Math.floor(n),
    a = n - r,
    i = t * (1 - e),
    o = t * (1 - a * e),
    s = t * (1 - (1 - a) * e),
    l = r % 6,
    u = [t, o, i, i, s, t][l],
    d = [s, t, t, o, i, i][l],
    g = [i, i, s, t, t, o][l];
  return { r: u * 255, g: d * 255, b: g * 255 };
}
function en(n, e, t, r) {
  var a = [
    pe(Math.round(n).toString(16)),
    pe(Math.round(e).toString(16)),
    pe(Math.round(t).toString(16)),
  ];
  return r &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
    : a.join('');
}
function Bi(n, e, t, r, a) {
  var i = [
    pe(Math.round(n).toString(16)),
    pe(Math.round(e).toString(16)),
    pe(Math.round(t).toString(16)),
    pe(zi(r)),
  ];
  return a &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function zi(n) {
  return Math.round(parseFloat(n) * 255).toString(16);
}
function tn(n) {
  return W(n) / 255;
}
function W(n) {
  return parseInt(n, 16);
}
function Hi(n) {
  return { r: n >> 16, g: (n & 65280) >> 8, b: n & 255 };
}
var Pt = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function ji(n) {
  var e = { r: 0, g: 0, b: 0 },
    t = 1,
    r = null,
    a = null,
    i = null,
    o = !1,
    s = !1;
  return (
    typeof n == 'string' && (n = Oi(n)),
    typeof n == 'object' &&
      (oe(n.r) && oe(n.g) && oe(n.b)
        ? ((e = Ri(n.r, n.g, n.b)), (o = !0), (s = String(n.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : oe(n.h) && oe(n.s) && oe(n.v)
          ? ((r = Ge(n.s)), (a = Ge(n.v)), (e = Ai(n.h, r, a)), (o = !0), (s = 'hsv'))
          : oe(n.h) &&
            oe(n.s) &&
            oe(n.l) &&
            ((r = Ge(n.s)), (i = Ge(n.l)), (e = Li(n.h, r, i)), (o = !0), (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(n, 'a') && (t = n.a)),
    (t = En(t)),
    {
      ok: o,
      format: n.format || s,
      r: Math.min(255, Math.max(e.r, 0)),
      g: Math.min(255, Math.max(e.g, 0)),
      b: Math.min(255, Math.max(e.b, 0)),
      a: t,
    }
  );
}
var Di = '[-\\+]?\\d+%?',
  Ni = '[-\\+]?\\d*\\.\\d+%?',
  de = '(?:'.concat(Ni, ')|(?:').concat(Di, ')'),
  gt = '[\\s|\\(]+('.concat(de, ')[,|\\s]+(').concat(de, ')[,|\\s]+(').concat(de, ')\\s*\\)?'),
  mt = '[\\s|\\(]+('
    .concat(de, ')[,|\\s]+(')
    .concat(de, ')[,|\\s]+(')
    .concat(de, ')[,|\\s]+(')
    .concat(de, ')\\s*\\)?'),
  te = {
    CSS_UNIT: new RegExp(de),
    rgb: new RegExp('rgb' + gt),
    rgba: new RegExp('rgba' + mt),
    hsl: new RegExp('hsl' + gt),
    hsla: new RegExp('hsla' + mt),
    hsv: new RegExp('hsv' + gt),
    hsva: new RegExp('hsva' + mt),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Oi(n) {
  if (((n = n.trim().toLowerCase()), n.length === 0)) return !1;
  var e = !1;
  if (Pt[n]) ((n = Pt[n]), (e = !0));
  else if (n === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var t = te.rgb.exec(n);
  return t
    ? { r: t[1], g: t[2], b: t[3] }
    : ((t = te.rgba.exec(n)),
      t
        ? { r: t[1], g: t[2], b: t[3], a: t[4] }
        : ((t = te.hsl.exec(n)),
          t
            ? { h: t[1], s: t[2], l: t[3] }
            : ((t = te.hsla.exec(n)),
              t
                ? { h: t[1], s: t[2], l: t[3], a: t[4] }
                : ((t = te.hsv.exec(n)),
                  t
                    ? { h: t[1], s: t[2], v: t[3] }
                    : ((t = te.hsva.exec(n)),
                      t
                        ? { h: t[1], s: t[2], v: t[3], a: t[4] }
                        : ((t = te.hex8.exec(n)),
                          t
                            ? {
                                r: W(t[1]),
                                g: W(t[2]),
                                b: W(t[3]),
                                a: tn(t[4]),
                                format: e ? 'name' : 'hex8',
                              }
                            : ((t = te.hex6.exec(n)),
                              t
                                ? { r: W(t[1]), g: W(t[2]), b: W(t[3]), format: e ? 'name' : 'hex' }
                                : ((t = te.hex4.exec(n)),
                                  t
                                    ? {
                                        r: W(t[1] + t[1]),
                                        g: W(t[2] + t[2]),
                                        b: W(t[3] + t[3]),
                                        a: tn(t[4] + t[4]),
                                        format: e ? 'name' : 'hex8',
                                      }
                                    : ((t = te.hex3.exec(n)),
                                      t
                                        ? {
                                            r: W(t[1] + t[1]),
                                            g: W(t[2] + t[2]),
                                            b: W(t[3] + t[3]),
                                            format: e ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function oe(n) {
  return !!te.CSS_UNIT.exec(String(n));
}
var $i = (function () {
    function n(e, t) {
      (e === void 0 && (e = ''), t === void 0 && (t = {}));
      var r;
      if (e instanceof n) return e;
      (typeof e == 'number' && (e = Hi(e)), (this.originalInput = e));
      var a = ji(e);
      ((this.originalInput = e),
        (this.r = a.r),
        (this.g = a.g),
        (this.b = a.b),
        (this.a = a.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = t.format) !== null && r !== void 0 ? r : a.format),
        (this.gradientType = t.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = a.ok));
    }
    return (
      (n.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (n.prototype.isLight = function () {
        return !this.isDark();
      }),
      (n.prototype.getBrightness = function () {
        var e = this.toRgb();
        return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
      }),
      (n.prototype.getLuminance = function () {
        var e = this.toRgb(),
          t,
          r,
          a,
          i = e.r / 255,
          o = e.g / 255,
          s = e.b / 255;
        return (
          i <= 0.03928 ? (t = i / 12.92) : (t = Math.pow((i + 0.055) / 1.055, 2.4)),
          o <= 0.03928 ? (r = o / 12.92) : (r = Math.pow((o + 0.055) / 1.055, 2.4)),
          s <= 0.03928 ? (a = s / 12.92) : (a = Math.pow((s + 0.055) / 1.055, 2.4)),
          0.2126 * t + 0.7152 * r + 0.0722 * a
        );
      }),
      (n.prototype.getAlpha = function () {
        return this.a;
      }),
      (n.prototype.setAlpha = function (e) {
        return ((this.a = En(e)), (this.roundA = Math.round(100 * this.a) / 100), this);
      }),
      (n.prototype.isMonochrome = function () {
        var e = this.toHsl().s;
        return e === 0;
      }),
      (n.prototype.toHsv = function () {
        var e = Jt(this.r, this.g, this.b);
        return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
      }),
      (n.prototype.toHsvString = function () {
        var e = Jt(this.r, this.g, this.b),
          t = Math.round(e.h * 360),
          r = Math.round(e.s * 100),
          a = Math.round(e.v * 100);
        return this.a === 1
          ? 'hsv('.concat(t, ', ').concat(r, '%, ').concat(a, '%)')
          : 'hsva('.concat(t, ', ').concat(r, '%, ').concat(a, '%, ').concat(this.roundA, ')');
      }),
      (n.prototype.toHsl = function () {
        var e = Qt(this.r, this.g, this.b);
        return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
      }),
      (n.prototype.toHslString = function () {
        var e = Qt(this.r, this.g, this.b),
          t = Math.round(e.h * 360),
          r = Math.round(e.s * 100),
          a = Math.round(e.l * 100);
        return this.a === 1
          ? 'hsl('.concat(t, ', ').concat(r, '%, ').concat(a, '%)')
          : 'hsla('.concat(t, ', ').concat(r, '%, ').concat(a, '%, ').concat(this.roundA, ')');
      }),
      (n.prototype.toHex = function (e) {
        return (e === void 0 && (e = !1), en(this.r, this.g, this.b, e));
      }),
      (n.prototype.toHexString = function (e) {
        return (e === void 0 && (e = !1), '#' + this.toHex(e));
      }),
      (n.prototype.toHex8 = function (e) {
        return (e === void 0 && (e = !1), Bi(this.r, this.g, this.b, this.a, e));
      }),
      (n.prototype.toHex8String = function (e) {
        return (e === void 0 && (e = !1), '#' + this.toHex8(e));
      }),
      (n.prototype.toHexShortString = function (e) {
        return (
          e === void 0 && (e = !1),
          this.a === 1 ? this.toHexString(e) : this.toHex8String(e)
        );
      }),
      (n.prototype.toRgb = function () {
        return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
      }),
      (n.prototype.toRgbString = function () {
        var e = Math.round(this.r),
          t = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(e, ', ').concat(t, ', ').concat(r, ')')
          : 'rgba('.concat(e, ', ').concat(t, ', ').concat(r, ', ').concat(this.roundA, ')');
      }),
      (n.prototype.toPercentageRgb = function () {
        var e = function (t) {
          return ''.concat(Math.round(N(t, 255) * 100), '%');
        };
        return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
      }),
      (n.prototype.toPercentageRgbString = function () {
        var e = function (t) {
          return Math.round(N(t, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('.concat(e(this.r), '%, ').concat(e(this.g), '%, ').concat(e(this.b), '%)')
          : 'rgba('
              .concat(e(this.r), '%, ')
              .concat(e(this.g), '%, ')
              .concat(e(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (n.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var e = '#' + en(this.r, this.g, this.b, !1), t = 0, r = Object.entries(Pt);
          t < r.length;
          t++
        ) {
          var a = r[t],
            i = a[0],
            o = a[1];
          if (e === o) return i;
        }
        return !1;
      }),
      (n.prototype.toString = function (e) {
        var t = !!e;
        e = e ?? this.format;
        var r = !1,
          a = this.a < 1 && this.a >= 0,
          i = !t && a && (e.startsWith('hex') || e === 'name');
        return i
          ? e === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (e === 'rgb' && (r = this.toRgbString()),
            e === 'prgb' && (r = this.toPercentageRgbString()),
            (e === 'hex' || e === 'hex6') && (r = this.toHexString()),
            e === 'hex3' && (r = this.toHexString(!0)),
            e === 'hex4' && (r = this.toHex8String(!0)),
            e === 'hex8' && (r = this.toHex8String()),
            e === 'name' && (r = this.toName()),
            e === 'hsl' && (r = this.toHslString()),
            e === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (n.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      }),
      (n.prototype.clone = function () {
        return new n(this.toString());
      }),
      (n.prototype.lighten = function (e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return ((t.l += e / 100), (t.l = Ve(t.l)), new n(t));
      }),
      (n.prototype.brighten = function (e) {
        e === void 0 && (e = 10);
        var t = this.toRgb();
        return (
          (t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100))))),
          (t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100))))),
          (t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100))))),
          new n(t)
        );
      }),
      (n.prototype.darken = function (e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return ((t.l -= e / 100), (t.l = Ve(t.l)), new n(t));
      }),
      (n.prototype.tint = function (e) {
        return (e === void 0 && (e = 10), this.mix('white', e));
      }),
      (n.prototype.shade = function (e) {
        return (e === void 0 && (e = 10), this.mix('black', e));
      }),
      (n.prototype.desaturate = function (e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return ((t.s -= e / 100), (t.s = Ve(t.s)), new n(t));
      }),
      (n.prototype.saturate = function (e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return ((t.s += e / 100), (t.s = Ve(t.s)), new n(t));
      }),
      (n.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (n.prototype.spin = function (e) {
        var t = this.toHsl(),
          r = (t.h + e) % 360;
        return ((t.h = r < 0 ? 360 + r : r), new n(t));
      }),
      (n.prototype.mix = function (e, t) {
        t === void 0 && (t = 50);
        var r = this.toRgb(),
          a = new n(e).toRgb(),
          i = t / 100,
          o = {
            r: (a.r - r.r) * i + r.r,
            g: (a.g - r.g) * i + r.g,
            b: (a.b - r.b) * i + r.b,
            a: (a.a - r.a) * i + r.a,
          };
        return new n(o);
      }),
      (n.prototype.analogous = function (e, t) {
        (e === void 0 && (e = 6), t === void 0 && (t = 30));
        var r = this.toHsl(),
          a = 360 / t,
          i = [this];
        for (r.h = (r.h - ((a * e) >> 1) + 720) % 360; --e; )
          ((r.h = (r.h + a) % 360), i.push(new n(r)));
        return i;
      }),
      (n.prototype.complement = function () {
        var e = this.toHsl();
        return ((e.h = (e.h + 180) % 360), new n(e));
      }),
      (n.prototype.monochromatic = function (e) {
        e === void 0 && (e = 6);
        for (var t = this.toHsv(), r = t.h, a = t.s, i = t.v, o = [], s = 1 / e; e--; )
          (o.push(new n({ h: r, s: a, v: i })), (i = (i + s) % 1));
        return o;
      }),
      (n.prototype.splitcomplement = function () {
        var e = this.toHsl(),
          t = e.h;
        return [
          this,
          new n({ h: (t + 72) % 360, s: e.s, l: e.l }),
          new n({ h: (t + 216) % 360, s: e.s, l: e.l }),
        ];
      }),
      (n.prototype.onBackground = function (e) {
        var t = this.toRgb(),
          r = new n(e).toRgb(),
          a = t.a + r.a * (1 - t.a);
        return new n({
          r: (t.r * t.a + r.r * r.a * (1 - t.a)) / a,
          g: (t.g * t.a + r.g * r.a * (1 - t.a)) / a,
          b: (t.b * t.a + r.b * r.a * (1 - t.a)) / a,
          a,
        });
      }),
      (n.prototype.triad = function () {
        return this.polyad(3);
      }),
      (n.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (n.prototype.polyad = function (e) {
        for (var t = this.toHsl(), r = t.h, a = [this], i = 360 / e, o = 1; o < e; o++)
          a.push(new n({ h: (r + o * i) % 360, s: t.s, l: t.l }));
        return a;
      }),
      (n.prototype.equals = function (e) {
        return this.toRgbString() === new n(e).toRgbString();
      }),
      n
    );
  })(),
  pt,
  He = {
    'blue': '#1677ff',
    'purple': '#722ED1',
    'cyan': '#13C2C2',
    'green': '#52C41A',
    'magenta': '#EB2F96',
    'pink': '#eb2f96',
    'red': '#F5222D',
    'orange': '#FA8C16',
    'yellow': '#FADB14',
    'volcano': '#FA541C',
    'geekblue': '#2F54EB',
    'gold': '#FAAD14',
    'lime': '#A0D911',
    'colorPrimary': '#1677ff',
    'colorSuccess': '#52c41a',
    'colorWarning': '#faad14',
    'colorError': '#ff7875',
    'colorInfo': '#1677ff',
    'colorTextBase': '#000',
    'colorBgBase': '#fff',
    'fontFamily':
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    'fontSize': 14,
    'lineWidth': 1,
    'lineType': 'solid',
    'motionUnit': 0.1,
    'motionBase': 0,
    'motionEaseOutCirc': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    'motionEaseInOutCirc': 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    'motionEaseOut': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'motionEaseInOut': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'motionEaseOutBack': 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    'motionEaseInQuint': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'motionEaseOutQuint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'borderRadius': 4,
    'sizeUnit': 4,
    'sizeStep': 4,
    'sizePopupArrow': 16,
    'controlHeight': 32,
    'zIndexBase': 0,
    'zIndexPopupBase': 1e3,
    'opacityImage': 1,
    'wireframe': !1,
    'blue-1': '#e6f4ff',
    'blue-2': '#bae0ff',
    'blue-3': '#91caff',
    'blue-4': '#69b1ff',
    'blue-5': '#4096ff',
    'blue-6': '#1677ff',
    'blue-7': '#0958d9',
    'blue-8': '#003eb3',
    'blue-9': '#002c8c',
    'blue-10': '#001d66',
    'purple-1': '#f9f0ff',
    'purple-2': '#efdbff',
    'purple-3': '#d3adf7',
    'purple-4': '#b37feb',
    'purple-5': '#9254de',
    'purple-6': '#722ed1',
    'purple-7': '#531dab',
    'purple-8': '#391085',
    'purple-9': '#22075e',
    'purple-10': '#120338',
    'cyan-1': '#e6fffb',
    'cyan-2': '#b5f5ec',
    'cyan-3': '#87e8de',
    'cyan-4': '#5cdbd3',
    'cyan-5': '#36cfc9',
    'cyan-6': '#13c2c2',
    'cyan-7': '#08979c',
    'cyan-8': '#006d75',
    'cyan-9': '#00474f',
    'cyan-10': '#002329',
    'green-1': '#f6ffed',
    'green-2': '#d9f7be',
    'green-3': '#b7eb8f',
    'green-4': '#95de64',
    'green-5': '#73d13d',
    'green-6': '#52c41a',
    'green-7': '#389e0d',
    'green-8': '#237804',
    'green-9': '#135200',
    'green-10': '#092b00',
    'magenta-1': '#fff0f6',
    'magenta-2': '#ffd6e7',
    'magenta-3': '#ffadd2',
    'magenta-4': '#ff85c0',
    'magenta-5': '#f759ab',
    'magenta-6': '#eb2f96',
    'magenta-7': '#c41d7f',
    'magenta-8': '#9e1068',
    'magenta-9': '#780650',
    'magenta-10': '#520339',
    'pink-1': '#fff0f6',
    'pink-2': '#ffd6e7',
    'pink-3': '#ffadd2',
    'pink-4': '#ff85c0',
    'pink-5': '#f759ab',
    'pink-6': '#eb2f96',
    'pink-7': '#c41d7f',
    'pink-8': '#9e1068',
    'pink-9': '#780650',
    'pink-10': '#520339',
    'red-1': '#fff1f0',
    'red-2': '#ffccc7',
    'red-3': '#ffa39e',
    'red-4': '#ff7875',
    'red-5': '#ff4d4f',
    'red-6': '#f5222d',
    'red-7': '#cf1322',
    'red-8': '#a8071a',
    'red-9': '#820014',
    'red-10': '#5c0011',
    'orange-1': '#fff7e6',
    'orange-2': '#ffe7ba',
    'orange-3': '#ffd591',
    'orange-4': '#ffc069',
    'orange-5': '#ffa940',
    'orange-6': '#fa8c16',
    'orange-7': '#d46b08',
    'orange-8': '#ad4e00',
    'orange-9': '#873800',
    'orange-10': '#612500',
    'yellow-1': '#feffe6',
    'yellow-2': '#ffffb8',
    'yellow-3': '#fffb8f',
    'yellow-4': '#fff566',
    'yellow-5': '#ffec3d',
    'yellow-6': '#fadb14',
    'yellow-7': '#d4b106',
    'yellow-8': '#ad8b00',
    'yellow-9': '#876800',
    'yellow-10': '#614700',
    'volcano-1': '#fff2e8',
    'volcano-2': '#ffd8bf',
    'volcano-3': '#ffbb96',
    'volcano-4': '#ff9c6e',
    'volcano-5': '#ff7a45',
    'volcano-6': '#fa541c',
    'volcano-7': '#d4380d',
    'volcano-8': '#ad2102',
    'volcano-9': '#871400',
    'volcano-10': '#610b00',
    'geekblue-1': '#f0f5ff',
    'geekblue-2': '#d6e4ff',
    'geekblue-3': '#adc6ff',
    'geekblue-4': '#85a5ff',
    'geekblue-5': '#597ef7',
    'geekblue-6': '#2f54eb',
    'geekblue-7': '#1d39c4',
    'geekblue-8': '#10239e',
    'geekblue-9': '#061178',
    'geekblue-10': '#030852',
    'gold-1': '#fffbe6',
    'gold-2': '#fff1b8',
    'gold-3': '#ffe58f',
    'gold-4': '#ffd666',
    'gold-5': '#ffc53d',
    'gold-6': '#faad14',
    'gold-7': '#d48806',
    'gold-8': '#ad6800',
    'gold-9': '#874d00',
    'gold-10': '#613400',
    'lime-1': '#fcffe6',
    'lime-2': '#f4ffb8',
    'lime-3': '#eaff8f',
    'lime-4': '#d3f261',
    'lime-5': '#bae637',
    'lime-6': '#a0d911',
    'lime-7': '#7cb305',
    'lime-8': '#5b8c00',
    'lime-9': '#3f6600',
    'lime-10': '#254000',
    'colorText': 'rgba(0, 0, 0, 0.88)',
    'colorTextSecondary': 'rgba(0, 0, 0, 0.65)',
    'colorTextTertiary': 'rgba(0, 0, 0, 0.45)',
    'colorTextQuaternary': 'rgba(0, 0, 0, 0.25)',
    'colorFill': 'rgba(0, 0, 0, 0.15)',
    'colorFillSecondary': 'rgba(0, 0, 0, 0.06)',
    'colorFillTertiary': 'rgba(0, 0, 0, 0.04)',
    'colorFillQuaternary': 'rgba(0, 0, 0, 0.02)',
    'colorBgLayout': 'hsl(220,23%,97%)',
    'colorBgContainer': '#ffffff',
    'colorBgElevated': '#ffffff',
    'colorBgSpotlight': 'rgba(0, 0, 0, 0.85)',
    'colorBorder': '#d9d9d9',
    'colorBorderSecondary': '#f0f0f0',
    'colorPrimaryBg': '#e6f4ff',
    'colorPrimaryBgHover': '#bae0ff',
    'colorPrimaryBorder': '#91caff',
    'colorPrimaryBorderHover': '#69b1ff',
    'colorPrimaryHover': '#4096ff',
    'colorPrimaryActive': '#0958d9',
    'colorPrimaryTextHover': '#4096ff',
    'colorPrimaryText': '#1677ff',
    'colorPrimaryTextActive': '#0958d9',
    'colorSuccessBg': '#f6ffed',
    'colorSuccessBgHover': '#d9f7be',
    'colorSuccessBorder': '#b7eb8f',
    'colorSuccessBorderHover': '#95de64',
    'colorSuccessHover': '#95de64',
    'colorSuccessActive': '#389e0d',
    'colorSuccessTextHover': '#73d13d',
    'colorSuccessText': '#52c41a',
    'colorSuccessTextActive': '#389e0d',
    'colorErrorBg': '#fff2f0',
    'colorErrorBgHover': '#fff1f0',
    'colorErrorBorder': '#ffccc7',
    'colorErrorBorderHover': '#ffa39e',
    'colorErrorHover': '#ffa39e',
    'colorErrorActive': '#d9363e',
    'colorErrorTextHover': '#ff7875',
    'colorErrorText': '#ff4d4f',
    'colorErrorTextActive': '#d9363e',
    'colorWarningBg': '#fffbe6',
    'colorWarningBgHover': '#fff1b8',
    'colorWarningBorder': '#ffe58f',
    'colorWarningBorderHover': '#ffd666',
    'colorWarningHover': '#ffd666',
    'colorWarningActive': '#d48806',
    'colorWarningTextHover': '#ffc53d',
    'colorWarningText': '#faad14',
    'colorWarningTextActive': '#d48806',
    'colorInfoBg': '#e6f4ff',
    'colorInfoBgHover': '#bae0ff',
    'colorInfoBorder': '#91caff',
    'colorInfoBorderHover': '#69b1ff',
    'colorInfoHover': '#69b1ff',
    'colorInfoActive': '#0958d9',
    'colorInfoTextHover': '#4096ff',
    'colorInfoText': '#1677ff',
    'colorInfoTextActive': '#0958d9',
    'colorBgMask': 'rgba(0, 0, 0, 0.45)',
    'colorWhite': '#fff',
    'sizeXXL': 48,
    'sizeXL': 32,
    'sizeLG': 24,
    'sizeMD': 20,
    'sizeMS': 16,
    'size': 16,
    'sizeSM': 12,
    'sizeXS': 8,
    'sizeXXS': 4,
    'controlHeightSM': 24,
    'controlHeightXS': 16,
    'controlHeightLG': 40,
    'motionDurationFast': '0.1s',
    'motionDurationMid': '0.2s',
    'motionDurationSlow': '0.3s',
    'fontSizes': [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
    'lineHeights': [
      1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666,
      1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294,
    ],
    'lineWidthBold': 2,
    'borderRadiusXS': 1,
    'borderRadiusSM': 4,
    'borderRadiusLG': 8,
    'borderRadiusOuter': 4,
    'colorLink': '#1677ff',
    'colorLinkHover': '#69b1ff',
    'colorLinkActive': '#0958d9',
    'colorFillContent': 'rgba(0, 0, 0, 0.06)',
    'colorFillContentHover': 'rgba(0, 0, 0, 0.15)',
    'colorFillAlter': 'rgba(0, 0, 0, 0.02)',
    'colorBgContainerDisabled': 'rgba(0, 0, 0, 0.04)',
    'colorBorderBg': '#ffffff',
    'colorSplit': 'rgba(5, 5, 5, 0.06)',
    'colorTextPlaceholder': 'rgba(0, 0, 0, 0.25)',
    'colorTextDisabled': 'rgba(0, 0, 0, 0.25)',
    'colorTextHeading': 'rgba(0, 0, 0, 0.88)',
    'colorTextLabel': 'rgba(0, 0, 0, 0.65)',
    'colorTextDescription': 'rgba(0, 0, 0, 0.45)',
    'colorTextLightSolid': '#fff',
    'colorHighlight': '#ff7875',
    'colorBgTextHover': 'rgba(0, 0, 0, 0.06)',
    'colorBgTextActive': 'rgba(0, 0, 0, 0.15)',
    'colorIcon': 'rgba(0, 0, 0, 0.45)',
    'colorIconHover': 'rgba(0, 0, 0, 0.88)',
    'colorErrorOutline': 'rgba(255, 38, 5, 0.06)',
    'colorWarningOutline': 'rgba(255, 215, 5, 0.1)',
    'fontSizeSM': 12,
    'fontSizeLG': 16,
    'fontSizeXL': 20,
    'fontSizeHeading1': 38,
    'fontSizeHeading2': 30,
    'fontSizeHeading3': 24,
    'fontSizeHeading4': 20,
    'fontSizeHeading5': 16,
    'fontSizeIcon': 12,
    'lineHeight': 1.5714285714285714,
    'lineHeightLG': 1.5,
    'lineHeightSM': 1.6666666666666667,
    'lineHeightHeading1': 1.2105263157894737,
    'lineHeightHeading2': 1.2666666666666666,
    'lineHeightHeading3': 1.3333333333333333,
    'lineHeightHeading4': 1.4,
    'lineHeightHeading5': 1.5,
    'controlOutlineWidth': 2,
    'controlInteractiveSize': 16,
    'controlItemBgHover': 'rgba(0, 0, 0, 0.04)',
    'controlItemBgActive': '#e6f4ff',
    'controlItemBgActiveHover': '#bae0ff',
    'controlItemBgActiveDisabled': 'rgba(0, 0, 0, 0.15)',
    'controlTmpOutline': 'rgba(0, 0, 0, 0.02)',
    'controlOutline': 'rgba(5, 145, 255, 0.1)',
    'fontWeightStrong': 600,
    'opacityLoading': 0.65,
    'linkDecoration': 'none',
    'linkHoverDecoration': 'none',
    'linkFocusDecoration': 'none',
    'controlPaddingHorizontal': 12,
    'controlPaddingHorizontalSM': 8,
    'paddingXXS': 4,
    'paddingXS': 8,
    'paddingSM': 12,
    'padding': 16,
    'paddingMD': 20,
    'paddingLG': 24,
    'paddingXL': 32,
    'paddingContentHorizontalLG': 24,
    'paddingContentVerticalLG': 16,
    'paddingContentHorizontal': 16,
    'paddingContentVertical': 12,
    'paddingContentHorizontalSM': 16,
    'paddingContentVerticalSM': 8,
    'marginXXS': 4,
    'marginXS': 8,
    'marginSM': 12,
    'margin': 16,
    'marginMD': 20,
    'marginLG': 24,
    'marginXL': 32,
    'marginXXL': 48,
    'boxShadow':
      '0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    'boxShadowSecondary':
      '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    'screenXS': 480,
    'screenXSMin': 480,
    'screenXSMax': 479,
    'screenSM': 576,
    'screenSMMin': 576,
    'screenSMMax': 575,
    'screenMD': 768,
    'screenMDMin': 768,
    'screenMDMax': 767,
    'screenLG': 992,
    'screenLGMin': 992,
    'screenLGMax': 991,
    'screenXL': 1200,
    'screenXLMin': 1200,
    'screenXLMax': 1199,
    'screenXXL': 1600,
    'screenXXLMin': 1600,
    'screenXXLMax': 1599,
    'boxShadowPopoverArrow': '3px 3px 7px rgba(0, 0, 0, 0.1)',
    'boxShadowCard':
      '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)',
    'boxShadowDrawerRight':
      '-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)',
    'boxShadowDrawerLeft':
      '6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)',
    'boxShadowDrawerUp':
      '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    'boxShadowDrawerDown':
      '0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)',
    'boxShadowTabsOverflowLeft': 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    'boxShadowTabsOverflowRight': 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    'boxShadowTabsOverflowTop': 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    'boxShadowTabsOverflowBottom': 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    '_tokenKey': '19w80ff',
    '_hashId': 'css-dev-only-do-not-override-i2zu9q',
  },
  _n = function (e) {
    for (
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
        r = 3735928559 ^ t,
        a = 1103547991 ^ t,
        i = 0,
        o;
      i < e.length;
      i++
    )
      ((o = e.charCodeAt(i)),
        (r = Math.imul(r ^ o, 2654435761)),
        (a = Math.imul(a ^ o, 1597334677)));
    return (
      (r = Math.imul(r ^ (r >>> 16), 2246822507) ^ Math.imul(a ^ (a >>> 13), 3266489909)),
      (a = Math.imul(a ^ (a >>> 16), 2246822507) ^ Math.imul(r ^ (r >>> 13), 3266489909)),
      4294967296 * (2097151 & a) + (r >>> 0)
    );
  },
  Rt = wr(function (n) {
    return n;
  }),
  Rn = {
    theme: Rt,
    token: f(
      f({}, He),
      re === null || re === void 0 || (pt = re.defaultAlgorithm) === null || pt === void 0
        ? void 0
        : pt.call(re, re === null || re === void 0 ? void 0 : re.defaultSeed),
    ),
    hashId: 'pro-'.concat(_n(JSON.stringify(He))),
  },
  Ui = function () {
    return Rn;
  };
const Vi = Object.freeze(
  Object.defineProperty(
    { __proto__: null, defaultToken: He, emptyTheme: Rt, hashCode: _n, token: Rn, useToken: Ui },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var Z = function (e, t) {
    return new $i(e).setAlpha(t).toRgbString();
  },
  Gi = function () {
    return typeof re > 'u' || !re ? Vi : re;
  },
  je = Gi(),
  Ki = je.useToken,
  vt = function (e) {
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
    };
  };
function Ne(n, e) {
  var t,
    r = p.useContext(yt),
    a = r.token,
    i = a === void 0 ? {} : a,
    o = p.useContext(yt),
    s = o.hashed,
    l = Ki(),
    u = l.token,
    d = l.hashId,
    g = p.useContext(yt);
  g.theme;
  var h = p.useContext(ae.ConfigContext),
    v = h.getPrefixCls,
    b = h.csp;
  return (
    i.layout || (i = f({}, u)),
    (i.proComponentsCls =
      (t = i.proComponentsCls) !== null && t !== void 0 ? t : '.'.concat(v('pro'))),
    (i.antCls = '.'.concat(v())),
    {
      wrapSSR: ia(
        { token: i, path: [n], nonce: b?.nonce, layer: { name: 'antd-pro' } },
        function () {
          return e(i);
        },
      ),
      hashId: s ? d : '',
    }
  );
}
var Wi = function (e, t) {
    var r,
      a,
      i,
      o,
      s,
      l = f({}, e);
    return f(
      f(
        {
          bgLayout: 'linear-gradient('
            .concat(t.colorBgContainer, ', ')
            .concat(t.colorBgLayout, ' 28%)'),
          colorTextAppListIcon: t.colorTextSecondary,
          appListIconHoverBgColor:
            l == null || (r = l.sider) === null || r === void 0
              ? void 0
              : r.colorBgMenuItemSelected,
          colorBgAppListIconHover: Z(t.colorTextBase, 0.04),
          colorTextAppListIconHover: t.colorTextBase,
        },
        l,
      ),
      {},
      {
        header: f(
          {
            colorBgHeader: Z(t.colorBgElevated, 0.6),
            colorBgScrollHeader: Z(t.colorBgElevated, 0.8),
            colorHeaderTitle: t.colorText,
            colorBgMenuItemHover: Z(t.colorTextBase, 0.03),
            colorBgMenuItemSelected: 'transparent',
            colorBgMenuElevated:
              (l == null || (a = l.header) === null || a === void 0 ? void 0 : a.colorBgHeader) !==
              'rgba(255, 255, 255, 0.6)'
                ? (i = l.header) === null || i === void 0
                  ? void 0
                  : i.colorBgHeader
                : t.colorBgElevated,
            colorTextMenuSelected: Z(t.colorTextBase, 0.95),
            colorBgRightActionsItemHover: Z(t.colorTextBase, 0.03),
            colorTextRightActionsItem: t.colorTextTertiary,
            heightLayoutHeader: 56,
            colorTextMenu: t.colorTextSecondary,
            colorTextMenuSecondary: t.colorTextTertiary,
            colorTextMenuTitle: t.colorText,
            colorTextMenuActive: t.colorText,
          },
          l.header,
        ),
        sider: f(
          {
            paddingInlineLayoutMenu: 8,
            paddingBlockLayoutMenu: 0,
            colorBgCollapsedButton: t.colorBgElevated,
            colorTextCollapsedButtonHover: t.colorTextSecondary,
            colorTextCollapsedButton: Z(t.colorTextBase, 0.25),
            colorMenuBackground: 'transparent',
            colorMenuItemDivider: Z(t.colorTextBase, 0.06),
            colorBgMenuItemHover: Z(t.colorTextBase, 0.03),
            colorBgMenuItemSelected: Z(t.colorTextBase, 0.04),
            colorTextMenuItemHover: t.colorText,
            colorTextMenuSelected: Z(t.colorTextBase, 0.95),
            colorTextMenuActive: t.colorText,
            colorTextMenu: t.colorTextSecondary,
            colorTextMenuSecondary: t.colorTextTertiary,
            colorTextMenuTitle: t.colorText,
            colorTextSubMenuSelected: Z(t.colorTextBase, 0.95),
          },
          l.sider,
        ),
        pageContainer: f(
          {
            colorBgPageContainer: 'transparent',
            paddingInlinePageContainerContent:
              ((o = l.pageContainer) === null || o === void 0
                ? void 0
                : o.marginInlinePageContainerContent) || 40,
            paddingBlockPageContainerContent:
              ((s = l.pageContainer) === null || s === void 0
                ? void 0
                : s.marginBlockPageContainerContent) || 32,
            colorBgPageContainerFixed: t.colorBgElevated,
          },
          l.pageContainer,
        ),
      },
    );
  },
  Xi = function () {
    for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
    for (var i = r.length, o, s = 0; s < i; s += 1)
      for (o in r[s])
        r[s].hasOwnProperty(o) &&
          (Q(e[o]) === 'object' &&
          Q(r[s][o]) === 'object' &&
          e[o] !== void 0 &&
          e[o] !== null &&
          !Array.isArray(e[o]) &&
          !Array.isArray(r[s][o])
            ? (e[o] = f(f({}, e[o]), r[s][o]))
            : (e[o] = r[s][o]));
    return e;
  },
  Zi = ['locale', 'getPrefixCls'],
  qi = ['locale', 'theme'],
  Yi = function (e) {
    var t = {};
    if (
      (Object.keys(e || {}).forEach(function (r) {
        e[r] !== void 0 && (t[r] = e[r]);
      }),
      !(Object.keys(t).length < 1))
    )
      return t;
  },
  bt = function () {
    var e, t;
    return !(
      typeof lr < 'u' &&
      (((e = 'production') === null || e === void 0 ? void 0 : e.toUpperCase()) === 'TEST' ||
        ((t = 'production') === null || t === void 0 ? void 0 : t.toUpperCase()) === 'DEV')
    );
  },
  be = q.createContext({
    intl: f(f({}, Te), {}, { locale: 'default' }),
    valueTypeMap: {},
    theme: Rt,
    hashed: !0,
    dark: !1,
    token: He,
  });
be.Consumer;
var Qi = function () {
    var e = nr(),
      t = e.cache;
    return (
      p.useEffect(function () {
        return function () {
          t.clear();
        };
      }, []),
      null
    );
  },
  Ji = function (e) {
    var t,
      r = e.children,
      a = e.dark,
      i = e.valueTypeMap,
      o = e.autoClearCache,
      s = o === void 0 ? !1 : o,
      l = e.token,
      u = e.prefixCls,
      d = e.intl,
      g = p.useContext(ae.ConfigContext),
      h = g.locale,
      v = g.getPrefixCls,
      b = ye(g, Zi),
      x = (t = je.useToken) === null || t === void 0 ? void 0 : t.call(je),
      F = p.useContext(be),
      T = u ? '.'.concat(u) : '.'.concat(v(), '-pro'),
      C = '.' + v(),
      S = ''.concat(T),
      P = p.useMemo(
        function () {
          return Wi(l || {}, x.token || He);
        },
        [l, x.token],
      ),
      y = p.useMemo(
        function () {
          var L,
            A = h?.locale,
            V = In(A),
            D =
              d ??
              (A && ((L = F.intl) === null || L === void 0 ? void 0 : L.locale) === 'default'
                ? ze[V]
                : F.intl || ze[V]);
          return f(
            f({}, F),
            {},
            {
              dark: a ?? F.dark,
              token: Xi(F.token, x.token, {
                proComponentsCls: T,
                antCls: C,
                themeId: x.theme.id,
                layout: P,
              }),
              intl: D || Te,
            },
          );
        },
        [h?.locale, F, a, x.token, x.theme.id, T, C, P, d],
      ),
      I = f(f({}, y.token || {}), {}, { proComponentsCls: T }),
      _ = Zr(x.theme, [x.token, I ?? {}], { salt: S, override: I }),
      H = w(_, 2),
      X = H[0],
      K = H[1],
      J = p.useMemo(
        function () {
          return !(e.hashed === !1 || F.hashed === !1);
        },
        [F.hashed, e.hashed],
      ),
      j = p.useMemo(
        function () {
          return e.hashed === !1 || F.hashed === !1 || bt() === !1 ? '' : x.hashId ? x.hashId : K;
        },
        [K, F.hashed, e.hashed],
      );
    p.useEffect(
      function () {
        er.locale(h?.locale || 'zh-cn');
      },
      [h?.locale],
    );
    var E = p.useMemo(
        function () {
          return f(f({}, b.theme), {}, { hashId: j, hashed: J && bt() });
        },
        [b.theme, j, J, bt()],
      ),
      O = p.useMemo(
        function () {
          return f(
            f({}, y),
            {},
            { valueTypeMap: i || y?.valueTypeMap, token: X, theme: x.theme, hashed: J, hashId: j },
          );
        },
        [y, i, X, x.theme, J, j],
      ),
      U = p.useMemo(
        function () {
          return m.jsx(
            ae,
            f(
              f({}, b),
              {},
              {
                theme: E,
                children: m.jsx(be.Provider, {
                  value: O,
                  children: m.jsxs(m.Fragment, { children: [s && m.jsx(Qi, {}), r] }),
                }),
              },
            ),
          );
        },
        [b, E, O, s, r],
      );
    return s
      ? m.jsx(tr, {
          value: {
            provider: function () {
              return new Map();
            },
          },
          children: U,
        })
      : U;
  },
  el = function (e) {
    var t = e.needDeps,
      r = e.dark,
      a = e.token,
      i = p.useContext(be),
      o = p.useContext(ae.ConfigContext),
      s = o.locale,
      l = o.theme,
      u = ye(o, qi),
      d = t && i.hashId !== void 0 && Object.keys(e).sort().join('-') === 'children-needDeps';
    if (d) return m.jsx(m.Fragment, { children: e.children });
    var g = function () {
        var b = r ?? i.dark;
        return b && !Array.isArray(l?.algorithm)
          ? [l?.algorithm, je.darkAlgorithm].filter(Boolean)
          : b && Array.isArray(l?.algorithm)
            ? [].concat(Ce(l?.algorithm || []), [je.darkAlgorithm]).filter(Boolean)
            : l?.algorithm;
      },
      h = f(f({}, u), {}, { locale: s || hr, theme: Yi(f(f({}, l), {}, { algorithm: g() })) });
    return m.jsx(ae, f(f({}, h), {}, { children: m.jsx(Ji, f(f({}, e), {}, { token: a })) }));
  };
function tl() {
  var n = p.useContext(ae.ConfigContext),
    e = n.locale,
    t = p.useContext(be),
    r = t.intl;
  return r && r.locale !== 'default' ? r || Te : (e != null && e.locale && ze[In(e.locale)]) || Te;
}
be.displayName = 'ProProvider';
var yt = be,
  Ln = p.createContext({});
const z = Math.round;
function xt(n, e) {
  const t =
      n
        .replace(/^[^(]*\((.*)/, '$1')
        .replace(/\).*/, '')
        .match(/\d*\.?\d+%?/g) || [],
    r = t.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1) r[a] = e(r[a] || 0, t[a] || '', a);
  return (t[3] ? (r[3] = t[3].includes('%') ? r[3] / 100 : r[3]) : (r[3] = 1), r);
}
const nn = (n, e, t) => (t === 0 ? n : n / 100);
function Ee(n, e) {
  const t = e || 255;
  return n > t ? t : n < 0 ? 0 : n;
}
class Se {
  constructor(e) {
    (c(this, 'isValid', !0),
      c(this, 'r', 0),
      c(this, 'g', 0),
      c(this, 'b', 0),
      c(this, 'a', 1),
      c(this, '_h', void 0),
      c(this, '_s', void 0),
      c(this, '_l', void 0),
      c(this, '_v', void 0),
      c(this, '_max', void 0),
      c(this, '_min', void 0),
      c(this, '_brightness', void 0));
    function t(r) {
      return r[0] in e && r[1] in e && r[2] in e;
    }
    if (e)
      if (typeof e == 'string') {
        let a = function (i) {
          return r.startsWith(i);
        };
        const r = e.trim();
        /^#?[A-F\d]{3,8}$/i.test(r)
          ? this.fromHexString(r)
          : a('rgb')
            ? this.fromRgbString(r)
            : a('hsl')
              ? this.fromHslString(r)
              : (a('hsv') || a('hsb')) && this.fromHsvString(r);
      } else if (e instanceof Se)
        ((this.r = e.r),
          (this.g = e.g),
          (this.b = e.b),
          (this.a = e.a),
          (this._h = e._h),
          (this._s = e._s),
          (this._l = e._l),
          (this._v = e._v));
      else if (t('rgb'))
        ((this.r = Ee(e.r)),
          (this.g = Ee(e.g)),
          (this.b = Ee(e.b)),
          (this.a = typeof e.a == 'number' ? Ee(e.a, 1) : 1));
      else if (t('hsl')) this.fromHsl(e);
      else if (t('hsv')) this.fromHsv(e);
      else throw new Error('@ant-design/fast-color: unsupported input ' + JSON.stringify(e));
  }
  setR(e) {
    return this._sc('r', e);
  }
  setG(e) {
    return this._sc('g', e);
  }
  setB(e) {
    return this._sc('b', e);
  }
  setA(e) {
    return this._sc('a', e, 1);
  }
  setHue(e) {
    const t = this.toHsv();
    return ((t.h = e), this._c(t));
  }
  getLuminance() {
    function e(i) {
      const o = i / 255;
      return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
    }
    const t = e(this.r),
      r = e(this.g),
      a = e(this.b);
    return 0.2126 * t + 0.7152 * r + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > 'u') {
      const e = this.getMax() - this.getMin();
      e === 0
        ? (this._h = 0)
        : (this._h = z(
            60 *
              (this.r === this.getMax()
                ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0)
                : this.g === this.getMax()
                  ? (this.b - this.r) / e + 2
                  : (this.r - this.g) / e + 4),
          ));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > 'u') {
      const e = this.getMax() - this.getMin();
      e === 0 ? (this._s = 0) : (this._s = e / this.getMax());
    }
    return this._s;
  }
  getLightness() {
    return (typeof this._l > 'u' && (this._l = (this.getMax() + this.getMin()) / 510), this._l);
  }
  getValue() {
    return (typeof this._v > 'u' && (this._v = this.getMax() / 255), this._v);
  }
  getBrightness() {
    return (
      typeof this._brightness > 'u' &&
        (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3),
      this._brightness
    );
  }
  darken(e = 10) {
    const t = this.getHue(),
      r = this.getSaturation();
    let a = this.getLightness() - e / 100;
    return (a < 0 && (a = 0), this._c({ h: t, s: r, l: a, a: this.a }));
  }
  lighten(e = 10) {
    const t = this.getHue(),
      r = this.getSaturation();
    let a = this.getLightness() + e / 100;
    return (a > 1 && (a = 1), this._c({ h: t, s: r, l: a, a: this.a }));
  }
  mix(e, t = 50) {
    const r = this._c(e),
      a = t / 100,
      i = (s) => (r[s] - this[s]) * a + this[s],
      o = { r: z(i('r')), g: z(i('g')), b: z(i('b')), a: z(i('a') * 100) / 100 };
    return this._c(o);
  }
  tint(e = 10) {
    return this.mix({ r: 255, g: 255, b: 255, a: 1 }, e);
  }
  shade(e = 10) {
    return this.mix({ r: 0, g: 0, b: 0, a: 1 }, e);
  }
  onBackground(e) {
    const t = this._c(e),
      r = this.a + t.a * (1 - this.a),
      a = (i) => z((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
    return this._c({ r: a('r'), g: a('g'), b: a('b'), a: r });
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  equals(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
  }
  clone() {
    return this._c(this);
  }
  toHexString() {
    let e = '#';
    const t = (this.r || 0).toString(16);
    e += t.length === 2 ? t : '0' + t;
    const r = (this.g || 0).toString(16);
    e += r.length === 2 ? r : '0' + r;
    const a = (this.b || 0).toString(16);
    if (
      ((e += a.length === 2 ? a : '0' + a), typeof this.a == 'number' && this.a >= 0 && this.a < 1)
    ) {
      const i = z(this.a * 255).toString(16);
      e += i.length === 2 ? i : '0' + i;
    }
    return e;
  }
  toHsl() {
    return { h: this.getHue(), s: this.getSaturation(), l: this.getLightness(), a: this.a };
  }
  toHslString() {
    const e = this.getHue(),
      t = z(this.getSaturation() * 100),
      r = z(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${e},${t}%,${r}%,${this.a})` : `hsl(${e},${t}%,${r}%)`;
  }
  toHsv() {
    return { h: this.getHue(), s: this.getSaturation(), v: this.getValue(), a: this.a };
  }
  toRgb() {
    return { r: this.r, g: this.g, b: this.b, a: this.a };
  }
  toRgbString() {
    return this.a !== 1
      ? `rgba(${this.r},${this.g},${this.b},${this.a})`
      : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  _sc(e, t, r) {
    const a = this.clone();
    return ((a[e] = Ee(t, r)), a);
  }
  _c(e) {
    return new this.constructor(e);
  }
  getMax() {
    return (typeof this._max > 'u' && (this._max = Math.max(this.r, this.g, this.b)), this._max);
  }
  getMin() {
    return (typeof this._min > 'u' && (this._min = Math.min(this.r, this.g, this.b)), this._min);
  }
  fromHexString(e) {
    const t = e.replace('#', '');
    function r(a, i) {
      return parseInt(t[a] + t[i || a], 16);
    }
    t.length < 6
      ? ((this.r = r(0)), (this.g = r(1)), (this.b = r(2)), (this.a = t[3] ? r(3) / 255 : 1))
      : ((this.r = r(0, 1)),
        (this.g = r(2, 3)),
        (this.b = r(4, 5)),
        (this.a = t[6] ? r(6, 7) / 255 : 1));
  }
  fromHsl({ h: e, s: t, l: r, a }) {
    if (
      ((this._h = e % 360),
      (this._s = t),
      (this._l = r),
      (this.a = typeof a == 'number' ? a : 1),
      t <= 0)
    ) {
      const h = z(r * 255);
      ((this.r = h), (this.g = h), (this.b = h));
    }
    let i = 0,
      o = 0,
      s = 0;
    const l = e / 60,
      u = (1 - Math.abs(2 * r - 1)) * t,
      d = u * (1 - Math.abs((l % 2) - 1));
    l >= 0 && l < 1
      ? ((i = u), (o = d))
      : l >= 1 && l < 2
        ? ((i = d), (o = u))
        : l >= 2 && l < 3
          ? ((o = u), (s = d))
          : l >= 3 && l < 4
            ? ((o = d), (s = u))
            : l >= 4 && l < 5
              ? ((i = d), (s = u))
              : l >= 5 && l < 6 && ((i = u), (s = d));
    const g = r - u / 2;
    ((this.r = z((i + g) * 255)), (this.g = z((o + g) * 255)), (this.b = z((s + g) * 255)));
  }
  fromHsv({ h: e, s: t, v: r, a }) {
    ((this._h = e % 360), (this._s = t), (this._v = r), (this.a = typeof a == 'number' ? a : 1));
    const i = z(r * 255);
    if (((this.r = i), (this.g = i), (this.b = i), t <= 0)) return;
    const o = e / 60,
      s = Math.floor(o),
      l = o - s,
      u = z(r * (1 - t) * 255),
      d = z(r * (1 - t * l) * 255),
      g = z(r * (1 - t * (1 - l)) * 255);
    switch (s) {
      case 0:
        ((this.g = g), (this.b = u));
        break;
      case 1:
        ((this.r = d), (this.b = u));
        break;
      case 2:
        ((this.r = u), (this.b = g));
        break;
      case 3:
        ((this.r = u), (this.g = d));
        break;
      case 4:
        ((this.r = g), (this.g = u));
        break;
      default:
        ((this.g = u), (this.b = d));
        break;
    }
  }
  fromHsvString(e) {
    const t = xt(e, nn);
    this.fromHsv({ h: t[0], s: t[1], v: t[2], a: t[3] });
  }
  fromHslString(e) {
    const t = xt(e, nn);
    this.fromHsl({ h: t[0], s: t[1], l: t[2], a: t[3] });
  }
  fromRgbString(e) {
    const t = xt(e, (r, a) => (a.includes('%') ? z((r / 100) * 255) : r));
    ((this.r = t[0]), (this.g = t[1]), (this.b = t[2]), (this.a = t[3]));
  }
}
var Ke = 2,
  rn = 0.16,
  eo = 0.05,
  to = 0.05,
  no = 0.15,
  An = 5,
  Bn = 4,
  ro = [
    { index: 7, amount: 15 },
    { index: 6, amount: 25 },
    { index: 5, amount: 30 },
    { index: 5, amount: 45 },
    { index: 5, amount: 65 },
    { index: 5, amount: 85 },
    { index: 4, amount: 90 },
    { index: 3, amount: 95 },
    { index: 2, amount: 97 },
    { index: 1, amount: 98 },
  ];
function an(n, e, t) {
  var r;
  return (
    Math.round(n.h) >= 60 && Math.round(n.h) <= 240
      ? (r = t ? Math.round(n.h) - Ke * e : Math.round(n.h) + Ke * e)
      : (r = t ? Math.round(n.h) + Ke * e : Math.round(n.h) - Ke * e),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function on(n, e, t) {
  if (n.h === 0 && n.s === 0) return n.s;
  var r;
  return (
    t ? (r = n.s - rn * e) : e === Bn ? (r = n.s + rn) : (r = n.s + eo * e),
    r > 1 && (r = 1),
    t && e === An && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Math.round(r * 100) / 100
  );
}
function ln(n, e, t) {
  var r;
  return (
    t ? (r = n.v + to * e) : (r = n.v - no * e),
    (r = Math.max(0, Math.min(1, r))),
    Math.round(r * 100) / 100
  );
}
function ao(n) {
  for (
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = [],
      r = new Se(n),
      a = r.toHsv(),
      i = An;
    i > 0;
    i -= 1
  ) {
    var o = new Se({ h: an(a, i, !0), s: on(a, i, !0), v: ln(a, i, !0) });
    t.push(o);
  }
  t.push(r);
  for (var s = 1; s <= Bn; s += 1) {
    var l = new Se({ h: an(a, s), s: on(a, s), v: ln(a, s) });
    t.push(l);
  }
  return e.theme === 'dark'
    ? ro.map(function (u) {
        var d = u.index,
          g = u.amount;
        return new Se(e.backgroundColor || '#141414').mix(t[d], g).toHexString();
      })
    : t.map(function (u) {
        return u.toHexString();
      });
}
var Ft = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
];
Ft.primary = Ft[5];
function zn(n) {
  var e;
  return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
}
function io(n) {
  return zn(n) instanceof ShadowRoot;
}
function oo(n) {
  return io(n) ? zn(n) : null;
}
function lo(n) {
  return n.replace(/-(.)/g, function (e, t) {
    return t.toUpperCase();
  });
}
function so(n, e) {
  Je(n, '[@ant-design/icons] '.concat(e));
}
function sn(n) {
  return (
    Q(n) === 'object' &&
    typeof n.name == 'string' &&
    typeof n.theme == 'string' &&
    (Q(n.icon) === 'object' || typeof n.icon == 'function')
  );
}
function cn() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function (e, t) {
    var r = n[t];
    return (t === 'class' ? ((e.className = r), delete e.class) : (delete e[t], (e[lo(t)] = r)), e);
  }, {});
}
function kt(n, e, t) {
  return t
    ? q.createElement(
        n.tag,
        f(f({ key: e }, cn(n.attrs)), t),
        (n.children || []).map(function (r, a) {
          return kt(r, ''.concat(e, '-').concat(n.tag, '-').concat(a));
        }),
      )
    : q.createElement(
        n.tag,
        f({ key: e }, cn(n.attrs)),
        (n.children || []).map(function (r, a) {
          return kt(r, ''.concat(e, '-').concat(n.tag, '-').concat(a));
        }),
      );
}
function Hn(n) {
  return ao(n)[0];
}
function jn(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
var co = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  uo = function (e) {
    var t = p.useContext(Ln),
      r = t.csp,
      a = t.prefixCls,
      i = t.layer,
      o = co;
    (a && (o = o.replace(/anticon/g, a)),
      i &&
        (o = '@layer '
          .concat(
            i,
            ` {
`,
          )
          .concat(
            o,
            `
}`,
          )),
      p.useEffect(function () {
        var s = e.current,
          l = oo(s);
        _e(o, '@ant-design-icons', { prepend: !i, csp: r, attachTo: l });
      }, []));
  },
  fo = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
  Le = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function ho(n) {
  var e = n.primaryColor,
    t = n.secondaryColor;
  ((Le.primaryColor = e), (Le.secondaryColor = t || Hn(e)), (Le.calculated = !!t));
}
function go() {
  return f({}, Le);
}
var Pe = function (e) {
  var t = e.icon,
    r = e.className,
    a = e.onClick,
    i = e.style,
    o = e.primaryColor,
    s = e.secondaryColor,
    l = ye(e, fo),
    u = p.useRef(),
    d = Le;
  if (
    (o && (d = { primaryColor: o, secondaryColor: s || Hn(o) }),
    uo(u),
    so(sn(t), 'icon should be icon definiton, but got '.concat(t)),
    !sn(t))
  )
    return null;
  var g = t;
  return (
    g &&
      typeof g.icon == 'function' &&
      (g = f(f({}, g), {}, { icon: g.icon(d.primaryColor, d.secondaryColor) })),
    kt(
      g.icon,
      'svg-'.concat(g.name),
      f(
        f(
          {
            'className': r,
            'onClick': a,
            'style': i,
            'data-icon': g.name,
            'width': '1em',
            'height': '1em',
            'fill': 'currentColor',
            'aria-hidden': 'true',
          },
          l,
        ),
        {},
        { ref: u },
      ),
    )
  );
};
Pe.displayName = 'IconReact';
Pe.getTwoToneColors = go;
Pe.setTwoToneColors = ho;
function Dn(n) {
  var e = jn(n),
    t = w(e, 2),
    r = t[0],
    a = t[1];
  return Pe.setTwoToneColors({ primaryColor: r, secondaryColor: a });
}
function mo() {
  var n = Pe.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var po = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
Dn(Ft.primary);
var Oe = p.forwardRef(function (n, e) {
  var t = n.className,
    r = n.icon,
    a = n.spin,
    i = n.rotate,
    o = n.tabIndex,
    s = n.onClick,
    l = n.twoToneColor,
    u = ye(n, po),
    d = p.useContext(Ln),
    g = d.prefixCls,
    h = g === void 0 ? 'anticon' : g,
    v = d.rootClassName,
    b = Y(
      v,
      h,
      c(
        c({}, ''.concat(h, '-').concat(r.name), !!r.name),
        ''.concat(h, '-spin'),
        !!a || r.name === 'loading',
      ),
      t,
    ),
    x = o;
  x === void 0 && s && (x = -1);
  var F = i
      ? { msTransform: 'rotate('.concat(i, 'deg)'), transform: 'rotate('.concat(i, 'deg)') }
      : void 0,
    T = jn(l),
    C = w(T, 2),
    S = C[0],
    P = C[1];
  return p.createElement(
    'span',
    Ye({ 'role': 'img', 'aria-label': r.name }, u, {
      ref: e,
      tabIndex: x,
      onClick: s,
      className: b,
    }),
    p.createElement(Pe, { icon: r, primaryColor: S, secondaryColor: P, style: F }),
  );
});
Oe.displayName = 'AntdIcon';
Oe.getTwoToneColor = mo;
Oe.setTwoToneColor = Dn;
var vo = function (e, t) {
    return p.createElement(Oe, Ye({}, e, { ref: t, icon: ur }));
  },
  bo = p.forwardRef(vo),
  yo = function (e, t) {
    return p.createElement(Oe, Ye({}, e, { ref: t, icon: rr }));
  },
  xo = p.forwardRef(yo),
  So = function (e) {
    return c({}, e.componentCls, {
      'display': 'inline-flex',
      'alignItems': 'center',
      'maxWidth': '100%',
      '&-icon': {
        'display': 'block',
        'marginInlineStart': '4px',
        'cursor': 'pointer',
        '&:hover': { color: e.colorPrimary },
      },
      '&-title': { display: 'inline-flex', flex: '1' },
      '&-subtitle ': {
        marginInlineStart: 8,
        color: e.colorTextSecondary,
        fontWeight: 'normal',
        fontSize: e.fontSize,
        whiteSpace: 'nowrap',
      },
      '&-title-ellipsis': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all',
      },
    });
  };
function To(n) {
  return Ne('LabelIconTip', function (e) {
    var t = f(f({}, e), {}, { componentCls: '.'.concat(n) });
    return [So(t)];
  });
}
var Co = q.memo(function (n) {
    var e = n.label,
      t = n.tooltip,
      r = n.ellipsis,
      a = n.subTitle,
      i = p.useContext(ae.ConfigContext),
      o = i.getPrefixCls,
      s = o('pro-core-label-tip'),
      l = To(s),
      u = l.wrapSSR,
      d = l.hashId;
    if (!t && !a) return m.jsx(m.Fragment, { children: e });
    var g = typeof t == 'string' || q.isValidElement(t) ? { title: t } : t,
      h = g?.icon || m.jsx(bo, {});
    return u(
      m.jsxs('div', {
        className: Y(s, d),
        onMouseDown: function (b) {
          return b.stopPropagation();
        },
        onMouseLeave: function (b) {
          return b.stopPropagation();
        },
        onMouseMove: function (b) {
          return b.stopPropagation();
        },
        children: [
          m.jsx('div', {
            className: Y(''.concat(s, '-title'), d, c({}, ''.concat(s, '-title-ellipsis'), r)),
            children: e,
          }),
          a &&
            m.jsx('div', { className: ''.concat(s, '-subtitle ').concat(d).trim(), children: a }),
          t &&
            m.jsx(
              fr,
              f(
                f({}, g),
                {},
                {
                  children: m.jsx('span', {
                    className: ''.concat(s, '-icon ').concat(d).trim(),
                    children: h,
                  }),
                },
              ),
            ),
        ],
      }),
    );
  }),
  Po = function (e) {
    var t = e.componentCls,
      r = e.antCls;
    return c(
      {},
      ''.concat(t, '-actions'),
      c(
        c(
          {
            marginBlock: 0,
            marginInline: 0,
            paddingBlock: 0,
            paddingInline: 0,
            listStyle: 'none',
            display: 'flex',
            gap: e.marginXS,
            background: e.colorBgContainer,
            borderBlockStart: ''
              .concat(e.lineWidth, 'px ')
              .concat(e.lineType, ' ')
              .concat(e.colorSplit),
            minHeight: 42,
          },
          '& > *',
          {
            'alignItems': 'center',
            'justifyContent': 'center',
            'flex': 1,
            'display': 'flex',
            'cursor': 'pointer',
            'color': e.colorTextSecondary,
            'transition': 'color 0.3s',
            '&:hover': { color: e.colorPrimaryHover },
          },
        ),
        '& > li > div',
        {
          'flex': 1,
          'width': '100%',
          'marginBlock': e.marginSM,
          'marginInline': 0,
          'color': e.colorTextSecondary,
          'textAlign': 'center',
          'a': {
            'color': e.colorTextSecondary,
            'transition': 'color 0.3s',
            '&:hover': { color: e.colorPrimaryHover },
          },
          'div': c(
            c(
              {
                'position': 'relative',
                'display': 'block',
                'minWidth': 32,
                'fontSize': e.fontSize,
                'lineHeight': e.lineHeight,
                'cursor': 'pointer',
                '&:hover': { color: e.colorPrimaryHover, transition: 'color 0.3s' },
              },
              'a:not('.concat(
                r,
                `-btn),
            > .anticon`,
              ),
              {
                'display': 'inline-block',
                'width': '100%',
                'color': e.colorTextSecondary,
                'lineHeight': '22px',
                'transition': 'color 0.3s',
                '&:hover': { color: e.colorPrimaryHover },
              },
            ),
            '.anticon',
            { fontSize: e.cardActionIconSize, lineHeight: '22px' },
          ),
          '&:not(:last-child)': {
            borderInlineEnd: ''
              .concat(e.lineWidth, 'px ')
              .concat(e.lineType, ' ')
              .concat(e.colorSplit),
          },
        },
      ),
    );
  };
function Fo(n) {
  return Ne('ProCardActions', function (e) {
    var t = f(f({}, e), {}, { componentCls: '.'.concat(n), cardActionIconSize: 16 });
    return [Po(t)];
  });
}
var ko = function (e) {
  var t = e.actions,
    r = e.prefixCls,
    a = Fo(r),
    i = a.wrapSSR,
    o = a.hashId;
  return Array.isArray(t) && t !== null && t !== void 0 && t.length
    ? i(
        m.jsx('ul', {
          className: Y(''.concat(r, '-actions'), o),
          children: t.map(function (s, l) {
            return m.jsx(
              'li',
              {
                style: { width: ''.concat(100 / t.length, '%'), padding: 0, margin: 0 },
                className: Y(''.concat(r, '-actions-item'), o),
                children: s,
              },
              'action-'.concat(l),
            );
          }),
        }),
      )
    : i(m.jsx('ul', { className: Y(''.concat(r, '-actions'), o), children: t }));
};
function dn(n, e) {
  var t = Object.assign({}, n);
  return (
    Array.isArray(e) &&
      e.forEach(function (r) {
        delete t[r];
      }),
    t
  );
}
var Mo = new ca('card-loading', {
    '0%': { backgroundPosition: '0 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  }),
  wo = function (e) {
    return c(
      {},
      e.componentCls,
      c(
        c(
          { '&-loading': { overflow: 'hidden' }, '&-loading &-body': { userSelect: 'none' } },
          ''.concat(e.componentCls, '-loading-content'),
          { width: '100%', p: { marginBlock: 0, marginInline: 0 } },
        ),
        ''.concat(e.componentCls, '-loading-block'),
        {
          height: '14px',
          marginBlock: '4px',
          background:
            'linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))',
          backgroundSize: '600% 600%',
          borderRadius: e.borderRadius,
          animationName: Mo,
          animationDuration: '1.4s',
          animationTimingFunction: 'ease',
          animationIterationCount: 'infinite',
        },
      ),
    );
  };
function Io(n) {
  return Ne('ProCardLoading', function (e) {
    var t = f(f({}, e), {}, { componentCls: '.'.concat(n) });
    return [wo(t)];
  });
}
var Eo = function (e) {
  var t = e.style,
    r = e.prefix,
    a = Io(r || 'ant-pro-card'),
    i = a.wrapSSR;
  return i(
    m.jsxs('div', {
      className: ''.concat(r, '-loading-content'),
      style: t,
      children: [
        m.jsx(Ie, {
          gutter: 8,
          children: m.jsx(ne, {
            span: 22,
            children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
          }),
        }),
        m.jsxs(Ie, {
          gutter: 8,
          children: [
            m.jsx(ne, {
              span: 8,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
            m.jsx(ne, {
              span: 15,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
          ],
        }),
        m.jsxs(Ie, {
          gutter: 8,
          children: [
            m.jsx(ne, {
              span: 6,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
            m.jsx(ne, {
              span: 18,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
          ],
        }),
        m.jsxs(Ie, {
          gutter: 8,
          children: [
            m.jsx(ne, {
              span: 13,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
            m.jsx(ne, {
              span: 9,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
          ],
        }),
        m.jsxs(Ie, {
          gutter: 8,
          children: [
            m.jsx(ne, {
              span: 4,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
            m.jsx(ne, {
              span: 3,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
            m.jsx(ne, {
              span: 16,
              children: m.jsx('div', { className: ''.concat(r, '-loading-block') }),
            }),
          ],
        }),
      ],
    }),
  );
};
function Mt(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = [];
  return (
    q.Children.forEach(n, function (r) {
      (r == null && !e.keepEmpty) ||
        (Array.isArray(r)
          ? (t = t.concat(Mt(r)))
          : Mn(r) && r.props
            ? (t = t.concat(Mt(r.props.children, e)))
            : t.push(r));
    }),
    t
  );
}
var _o = ['tab', 'children'],
  Ro = [
    'key',
    'tab',
    'tabKey',
    'disabled',
    'destroyInactiveTabPane',
    'children',
    'className',
    'style',
    'cardProps',
  ];
function Lo(n) {
  return n.filter(function (e) {
    return e;
  });
}
function Ao(n, e, t) {
  if (n)
    return n.map(function (a) {
      return f(
        f({}, a),
        {},
        { children: m.jsx(wt, f(f({}, t?.cardProps), {}, { children: a.children })) },
      );
    });
  bn(!t, 'Tabs.TabPane is deprecated. Please use `items` directly.');
  var r = Mt(e).map(function (a) {
    if (q.isValidElement(a)) {
      var i = a.key,
        o = a.props,
        s = o || {},
        l = s.tab,
        u = s.children,
        d = ye(s, _o),
        g = f(
          f({ key: String(i) }, d),
          {},
          { children: m.jsx(wt, f(f({}, t?.cardProps), {}, { children: u })), label: l },
        );
      return g;
    }
    return null;
  });
  return Lo(r);
}
var nl = function (e) {
    var t = p.useContext(ae.ConfigContext),
      r = t.getPrefixCls;
    if (ar.startsWith('5')) return m.jsx(m.Fragment, {});
    var a = e.key,
      i = e.tab,
      o = e.tabKey,
      s = e.disabled,
      l = e.destroyInactiveTabPane,
      u = e.children,
      d = e.className,
      g = e.style,
      h = e.cardProps,
      v = ye(e, Ro),
      b = r('pro-card-tabpane'),
      x = Y(b, d);
    return m.jsx(
      hn.TabPane,
      f(
        f({ tabKey: o, tab: i, className: x, style: g, disabled: s, destroyInactiveTabPane: l }, v),
        {},
        { children: m.jsx(wt, f(f({}, h), {}, { children: u })) },
      ),
      a,
    );
  },
  un = function (e) {
    return { backgroundColor: e.controlItemBgActive, borderColor: e.controlOutline };
  },
  Bo = function (e) {
    var t = e.componentCls;
    return c(
      c(
        c(
          {},
          t,
          f(
            f(
              {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                width: '100%',
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                backgroundColor: e.colorBgContainer,
                borderRadius: e.borderRadius,
                transition: 'all 0.3s',
              },
              vt?.(e),
            ),
            {},
            c(
              c(
                c(
                  c(
                    c(
                      c(
                        c(
                          c(
                            c(
                              c(
                                {
                                  '&-box-shadow': {
                                    boxShadow:
                                      '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
                                    borderColor: 'transparent',
                                  },
                                  '&-col': { width: '100%' },
                                  '&-border': {
                                    border: ''
                                      .concat(e.lineWidth, 'px ')
                                      .concat(e.lineType, ' ')
                                      .concat(e.colorSplit),
                                  },
                                  '&-hoverable': c(
                                    {
                                      'cursor': 'pointer',
                                      'transition': 'box-shadow 0.3s, border-color 0.3s',
                                      '&:hover': {
                                        borderColor: 'transparent',
                                        boxShadow:
                                          '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
                                      },
                                    },
                                    '&'.concat(t, '-checked:hover'),
                                    { borderColor: e.controlOutline },
                                  ),
                                  '&-checked': f(
                                    f({}, un(e)),
                                    {},
                                    {
                                      '&::after': {
                                        visibility: 'visible',
                                        position: 'absolute',
                                        insetBlockStart: 2,
                                        insetInlineEnd: 2,
                                        opacity: 1,
                                        width: 0,
                                        height: 0,
                                        border: '6px solid '.concat(e.colorPrimary),
                                        borderBlockEnd: '6px solid transparent',
                                        borderInlineStart: '6px solid transparent',
                                        borderStartEndRadius: 2,
                                        content: '""',
                                      },
                                    },
                                  ),
                                  '&:focus': f({}, un(e)),
                                  '&&-ghost': c(
                                    { backgroundColor: 'transparent' },
                                    '> '.concat(t),
                                    {
                                      '&-header': {
                                        paddingInlineEnd: 0,
                                        paddingBlockEnd: e.padding,
                                        paddingInlineStart: 0,
                                      },
                                      '&-body': {
                                        paddingBlock: 0,
                                        paddingInline: 0,
                                        backgroundColor: 'transparent',
                                      },
                                    },
                                  ),
                                  '&&-split > &-body': { paddingBlock: 0, paddingInline: 0 },
                                  '&&-contain-card > &-body': { display: 'flex' },
                                },
                                ''.concat(t, '-body-direction-column'),
                                { flexDirection: 'column' },
                              ),
                              ''.concat(t, '-body-wrap'),
                              { flexWrap: 'wrap' },
                            ),
                            '&&-collapse',
                            c({}, '> '.concat(t), {
                              '&-header': { paddingBlockEnd: e.padding, borderBlockEnd: 0 },
                              '&-body': { display: 'none' },
                            }),
                          ),
                          ''.concat(t, '-header'),
                          {
                            'display': 'flex',
                            'alignItems': 'center',
                            'justifyContent': 'space-between',
                            'paddingInline': e.paddingLG,
                            'paddingBlock': e.padding,
                            'paddingBlockEnd': 0,
                            '&-border': {
                              '&': { paddingBlockEnd: e.padding },
                              'borderBlockEnd': ''
                                .concat(e.lineWidth, 'px ')
                                .concat(e.lineType, ' ')
                                .concat(e.colorSplit),
                            },
                            '&-collapsible': { cursor: 'pointer' },
                          },
                        ),
                        ''.concat(t, '-title'),
                        {
                          color: e.colorText,
                          fontWeight: 500,
                          fontSize: e.fontSizeLG,
                          lineHeight: e.lineHeight,
                        },
                      ),
                      ''.concat(t, '-extra'),
                      { color: e.colorText },
                    ),
                    ''.concat(t, '-type-inner'),
                    c({}, ''.concat(t, '-header'), { backgroundColor: e.colorFillAlter }),
                  ),
                  ''.concat(t, '-collapsible-icon'),
                  {
                    'marginInlineEnd': e.marginXS,
                    'color': e.colorIconHover,
                    ':hover': { color: e.colorPrimaryHover },
                    '& svg': { transition: 'transform '.concat(e.motionDurationMid) },
                  },
                ),
                ''.concat(t, '-body'),
                {
                  'display': 'block',
                  'boxSizing': 'border-box',
                  'height': '100%',
                  'paddingInline': e.paddingLG,
                  'paddingBlock': e.padding,
                  '&-center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                },
              ),
              '&&-size-small',
              c(
                c({}, t, {
                  '&-header': {
                    'paddingInline': e.paddingSM,
                    'paddingBlock': e.paddingXS,
                    'paddingBlockEnd': 0,
                    '&-border': { paddingBlockEnd: e.paddingXS },
                  },
                  '&-title': { fontSize: e.fontSize },
                  '&-body': { paddingInline: e.paddingSM, paddingBlock: e.paddingSM },
                }),
                ''.concat(t, '-header').concat(t, '-header-collapsible'),
                { paddingBlock: e.paddingXS },
              ),
            ),
          ),
        ),
        ''.concat(t, '-col'),
        c(
          c({}, '&'.concat(t, '-split-vertical'), {
            borderInlineEnd: ''
              .concat(e.lineWidth, 'px ')
              .concat(e.lineType, ' ')
              .concat(e.colorSplit),
          }),
          '&'.concat(t, '-split-horizontal'),
          {
            borderBlockEnd: ''
              .concat(e.lineWidth, 'px ')
              .concat(e.lineType, ' ')
              .concat(e.colorSplit),
          },
        ),
      ),
      ''.concat(t, '-tabs'),
      c(
        c(
          c(
            c(
              c(
                c(
                  {},
                  ''.concat(e.antCls, '-tabs-top > ').concat(e.antCls, '-tabs-nav'),
                  c({ marginBlockEnd: 0 }, ''.concat(e.antCls, '-tabs-nav-list'), {
                    marginBlockStart: e.marginXS,
                    paddingInlineStart: e.padding,
                  }),
                ),
                ''.concat(e.antCls, '-tabs-bottom > ').concat(e.antCls, '-tabs-nav'),
                c({ marginBlockEnd: 0 }, ''.concat(e.antCls, '-tabs-nav-list'), {
                  paddingInlineStart: e.padding,
                }),
              ),
              ''.concat(e.antCls, '-tabs-left'),
              c(
                {},
                ''.concat(e.antCls, '-tabs-content-holder'),
                c(
                  {},
                  ''.concat(e.antCls, '-tabs-content'),
                  c({}, ''.concat(e.antCls, '-tabs-tabpane'), { paddingInlineStart: 0 }),
                ),
              ),
            ),
            ''.concat(e.antCls, '-tabs-left > ').concat(e.antCls, '-tabs-nav'),
            c({ marginInlineEnd: 0 }, ''.concat(e.antCls, '-tabs-nav-list'), {
              paddingBlockStart: e.padding,
            }),
          ),
          ''.concat(e.antCls, '-tabs-right'),
          c(
            {},
            ''.concat(e.antCls, '-tabs-content-holder'),
            c(
              {},
              ''.concat(e.antCls, '-tabs-content'),
              c({}, ''.concat(e.antCls, '-tabs-tabpane'), { paddingInlineStart: 0 }),
            ),
          ),
        ),
        ''.concat(e.antCls, '-tabs-right > ').concat(e.antCls, '-tabs-nav'),
        c({}, ''.concat(e.antCls, '-tabs-nav-list'), { paddingBlockStart: e.padding }),
      ),
    );
  },
  Nn = 24,
  zo = function (e, t) {
    var r = t.componentCls;
    return e === 0
      ? c({}, ''.concat(r, '-col-0'), { display: 'none' })
      : c({}, ''.concat(r, '-col-').concat(e), {
          flexShrink: 0,
          width: ''.concat((e / Nn) * 100, '%'),
        });
  },
  Ho = function (e) {
    return Array(Nn + 1)
      .fill(1)
      .map(function (t, r) {
        return zo(r, e);
      });
  };
function jo(n) {
  return Ne('ProCard', function (e) {
    var t = f(f({}, e), {}, { componentCls: '.'.concat(n) });
    return [Bo(t), Ho(t)];
  });
}
var Do = [
    'className',
    'style',
    'bodyStyle',
    'headStyle',
    'title',
    'subTitle',
    'extra',
    'wrap',
    'layout',
    'loading',
    'gutter',
    'tooltip',
    'split',
    'headerBordered',
    'bordered',
    'boxShadow',
    'children',
    'size',
    'actions',
    'ghost',
    'hoverable',
    'direction',
    'collapsed',
    'collapsible',
    'collapsibleIconRender',
    'colStyle',
    'defaultCollapsed',
    'onCollapse',
    'checked',
    'onChecked',
    'tabs',
    'type',
  ],
  wt = q.forwardRef(function (n, e) {
    var t,
      r = n.className,
      a = n.style,
      i = n.bodyStyle,
      o = n.headStyle,
      s = n.title,
      l = n.subTitle,
      u = n.extra,
      d = n.wrap,
      g = d === void 0 ? !1 : d,
      h = n.layout,
      v = n.loading,
      b = n.gutter,
      x = b === void 0 ? 0 : b,
      F = n.tooltip,
      T = n.split,
      C = n.headerBordered,
      S = C === void 0 ? !1 : C,
      P = n.bordered,
      y = P === void 0 ? !1 : P,
      I = n.boxShadow,
      _ = I === void 0 ? !1 : I,
      H = n.children,
      X = n.size,
      K = n.actions,
      J = n.ghost,
      j = J === void 0 ? !1 : J,
      E = n.hoverable,
      O = E === void 0 ? !1 : E,
      U = n.direction,
      L = n.collapsed,
      A = n.collapsible,
      V = A === void 0 ? !1 : A,
      D = n.collapsibleIconRender,
      se = n.colStyle,
      ue = n.defaultCollapsed,
      G = ue === void 0 ? !1 : ue,
      et = n.onCollapse,
      On = n.checked,
      tt = n.onChecked,
      fe = n.tabs,
      nt = n.type,
      Fe = ye(n, Do),
      $n = p.useContext(ae.ConfigContext),
      Un = $n.getPrefixCls,
      $e = ir() || { lg: !0, md: !0, sm: !0, xl: !1, xs: !1, xxl: !1 },
      Vn = da(G, { value: L, onChange: et }),
      Lt = w(Vn, 2),
      ke = Lt[0],
      At = Lt[1],
      Ue = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
      Gn = Ao(fe?.items, H, fe),
      Kn = function (R) {
        var B = [0, 0],
          he = Array.isArray(R) ? R : [R, 0];
        return (
          he.forEach(function (ee, ie) {
            if (Q(ee) === 'object')
              for (var Me = 0; Me < Ue.length; Me += 1) {
                var we = Ue[Me];
                if ($e[we] && ee[we] !== void 0) {
                  B[ie] = ee[we];
                  break;
                }
              }
            else B[ie] = ee || 0;
          }),
          B
        );
      },
      rt = function (R, B) {
        return R ? B : {};
      },
      Wn = function (R) {
        var B = R;
        if (Q(R) === 'object')
          for (var he = 0; he < Ue.length; he += 1) {
            var ee = Ue[he];
            if ($e != null && $e[ee] && R?.[ee] !== void 0) {
              B = R[ee];
              break;
            }
          }
        var ie = rt(typeof B == 'string' && /\d%|\dpx/i.test(B), { width: B, flexShrink: 0 });
        return { span: B, colSpanStyle: ie };
      },
      M = Un('pro-card'),
      Bt = jo(M),
      zt = Bt.wrapSSR,
      ce = Bt.hashId,
      Xn = Kn(x),
      Ht = w(Xn, 2),
      at = Ht[0],
      it = Ht[1],
      ot = !1,
      lt = q.Children.toArray(H),
      Zn = lt.map(function ($, R) {
        var B;
        if ($ != null && (B = $.type) !== null && B !== void 0 && B.isProCard) {
          ot = !0;
          var he = $.props.colSpan,
            ee = Wn(he),
            ie = ee.span,
            Me = ee.colSpanStyle,
            we = Y(
              [''.concat(M, '-col')],
              ce,
              c(
                c(
                  c({}, ''.concat(M, '-split-vertical'), T === 'vertical' && R !== lt.length - 1),
                  ''.concat(M, '-split-horizontal'),
                  T === 'horizontal' && R !== lt.length - 1,
                ),
                ''.concat(M, '-col-').concat(ie),
                typeof ie == 'number' && ie >= 0 && ie <= 24,
              ),
            ),
            Jn = zt(
              m.jsx('div', {
                style: f(
                  f(
                    f(
                      f({}, Me),
                      rt(at > 0, { paddingInlineEnd: at / 2, paddingInlineStart: at / 2 }),
                    ),
                    rt(it > 0, { paddingBlockStart: it / 2, paddingBlockEnd: it / 2 }),
                  ),
                  se,
                ),
                className: we,
                children: q.cloneElement($),
              }),
            );
          return q.cloneElement(Jn, { key: 'pro-card-col-'.concat($?.key || R) });
        }
        return $;
      }),
      qn = Y(
        ''.concat(M),
        r,
        ce,
        ((t = {}),
        c(
          c(
            c(
              c(
                c(
                  c(
                    c(
                      c(
                        c(c(t, ''.concat(M, '-border'), y), ''.concat(M, '-box-shadow'), _),
                        ''.concat(M, '-contain-card'),
                        ot,
                      ),
                      ''.concat(M, '-loading'),
                      v,
                    ),
                    ''.concat(M, '-split'),
                    T === 'vertical' || T === 'horizontal',
                  ),
                  ''.concat(M, '-ghost'),
                  j,
                ),
                ''.concat(M, '-hoverable'),
                O,
              ),
              ''.concat(M, '-size-').concat(X),
              X,
            ),
            ''.concat(M, '-type-').concat(nt),
            nt,
          ),
          ''.concat(M, '-collapse'),
          ke,
        ),
        c(t, ''.concat(M, '-checked'), On)),
      ),
      Yn = Y(
        ''.concat(M, '-body'),
        ce,
        c(
          c(
            c({}, ''.concat(M, '-body-center'), h === 'center'),
            ''.concat(M, '-body-direction-column'),
            T === 'horizontal' || U === 'column',
          ),
          ''.concat(M, '-body-wrap'),
          g && ot,
        ),
      ),
      Qn = i,
      jt = q.isValidElement(v)
        ? v
        : m.jsx(Eo, {
            prefix: M,
            style: i?.padding === 0 || i?.padding === '0px' ? { padding: 24 } : void 0,
          }),
      st =
        V &&
        L === void 0 &&
        (D
          ? D({ collapsed: ke })
          : m.jsx(xo, {
              onClick: function () {
                V === 'icon' && At(!ke);
              },
              rotate: ke ? void 0 : 90,
              className: ''.concat(M, '-collapsible-icon ').concat(ce).trim(),
            }));
    return zt(
      m.jsxs(
        'div',
        f(
          f(
            {
              className: qn,
              style: a,
              ref: e,
              onClick: function (R) {
                var B;
                (tt?.(R), Fe == null || (B = Fe.onClick) === null || B === void 0 || B.call(Fe, R));
              },
            },
            dn(Fe, ['prefixCls', 'colSpan']),
          ),
          {},
          {
            children: [
              (s || u || st) &&
                m.jsxs('div', {
                  className: Y(
                    ''.concat(M, '-header'),
                    ce,
                    c(
                      c({}, ''.concat(M, '-header-border'), S || nt === 'inner'),
                      ''.concat(M, '-header-collapsible'),
                      st,
                    ),
                  ),
                  style: o,
                  onClick: function () {
                    (V === 'header' || V === !0) && At(!ke);
                  },
                  children: [
                    m.jsxs('div', {
                      className: ''.concat(M, '-title ').concat(ce).trim(),
                      children: [st, m.jsx(Co, { label: s, tooltip: F, subTitle: l })],
                    }),
                    u &&
                      m.jsx('div', {
                        className: ''.concat(M, '-extra ').concat(ce).trim(),
                        onClick: function (R) {
                          return R.stopPropagation();
                        },
                        children: u,
                      }),
                  ],
                }),
              fe
                ? m.jsx('div', {
                    className: ''.concat(M, '-tabs ').concat(ce).trim(),
                    children: m.jsx(
                      hn,
                      f(
                        f({ onChange: fe.onChange }, dn(fe, ['cardProps'])),
                        {},
                        { items: Gn, children: v ? jt : H },
                      ),
                    ),
                  })
                : m.jsx('div', { className: Yn, style: Qn, children: v ? jt : Zn }),
              K ? m.jsx(ko, { actions: K, prefixCls: M }) : null,
            ],
          },
        ),
      ),
    );
  }),
  No = function (e) {
    var t = e.componentCls;
    return c({}, t, {
      '&-divider': {
        'flex': 'none',
        'width': e.lineWidth,
        'marginInline': e.marginXS,
        'marginBlock': e.marginLG,
        'backgroundColor': e.colorSplit,
        '&-horizontal': {
          width: 'initial',
          height: e.lineWidth,
          marginInline: e.marginLG,
          marginBlock: e.marginXS,
        },
      },
      '&&-size-small &-divider': {
        'marginBlock': e.marginLG,
        'marginInline': e.marginXS,
        '&-horizontal': { marginBlock: e.marginXS, marginInline: e.marginLG },
      },
    });
  };
function Oo(n) {
  return Ne('ProCardDivider', function (e) {
    var t = f(f({}, e), {}, { componentCls: '.'.concat(n) });
    return [No(t)];
  });
}
var rl = function (e) {
  var t = p.useContext(ae.ConfigContext),
    r = t.getPrefixCls,
    a = r('pro-card'),
    i = ''.concat(a, '-divider'),
    o = Oo(a),
    s = o.wrapSSR,
    l = o.hashId,
    u = e.className,
    d = e.style,
    g = d === void 0 ? {} : d,
    h = e.type,
    v = Y(i, u, l, c({}, ''.concat(i, '-').concat(h), h));
  return s(m.jsx('div', { className: v, style: g }));
};
export {
  wt as C,
  Oe as I,
  ca as K,
  Co as L,
  rl as P,
  xo as R,
  nl as T,
  tl as a,
  Ki as b,
  da as c,
  be as d,
  yt as e,
  Jo as f,
  va as g,
  Yo as h,
  ze as i,
  el as j,
  Z as k,
  bn as n,
  dn as o,
  je as p,
  Qo as s,
  Mt as t,
  Ne as u,
  Je as w,
};
