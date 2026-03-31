import { r as S } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as y, M as T, p as z } from './providerConfig-C5BYp5FR.js';
import { C as N, k as B } from './index-C8UyLGsD.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
function b(r) {
  '@babel/helpers - typeof';
  return (
    (b =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    b(r)
  );
}
function M(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })),
      e.push.apply(e, n));
  }
  return e;
}
function K(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? M(Object(e), !0).forEach(function (n) {
          L(r, n, e[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
        : M(Object(e)).forEach(function (n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
          });
  }
  return r;
}
function L(r, t, e) {
  return (
    (t = k(t)),
    t in r
      ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (r[t] = e),
    r
  );
}
function k(r) {
  var t = F(r, 'string');
  return b(t) == 'symbol' ? t : String(t);
}
function F(r, t) {
  if (b(r) != 'object' || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (b(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(r);
}
var H = S.memo(function (r) {
  var t = r.shape,
    e = t === void 0 ? 'circle' : t,
    n = r.color,
    i = r.background,
    l = r.size,
    p = r.style,
    f = r.iconMultiple,
    s = f === void 0 ? 0.6 : f,
    o = r.iconStyle,
    u = r.iconClassName;
  return c.jsx(N, {
    flex: 'none',
    style: K(
      {
        background: i || B.colorFillSecondary,
        borderRadius: e === 'circle' ? '50%' : Math.floor(l * 0.1),
        color: n,
        height: l,
        width: l,
      },
      p,
    ),
    children: c.jsx(y, { className: u, color: n, size: l * s, style: o }),
  });
});
function v(r) {
  '@babel/helpers - typeof';
  return (
    (v =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    v(r)
  );
}
var W = ['provider', 'size', 'type', 'forceMono', 'shape'];
function D(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })),
      e.push.apply(e, n));
  }
  return e;
}
function a(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D(Object(e), !0).forEach(function (n) {
          U(r, n, e[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
        : D(Object(e)).forEach(function (n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
          });
  }
  return r;
}
function U(r, t, e) {
  return (
    (t = V(t)),
    t in r
      ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (r[t] = e),
    r
  );
}
function V(r) {
  var t = q(r, 'string');
  return v(t) == 'symbol' ? t : String(t);
}
function q(r, t) {
  if (v(r) != 'object' || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (v(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(r);
}
function G(r, t) {
  var e = (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (!e) {
    if (Array.isArray(r) || (e = J(r)) || t) {
      e && (r = e);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
        },
        e: function (o) {
          throw o;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l = !0,
    p = !1,
    f;
  return {
    s: function () {
      e = e.call(r);
    },
    n: function () {
      var o = e.next();
      return ((l = o.done), o);
    },
    e: function (o) {
      ((p = !0), (f = o));
    },
    f: function () {
      try {
        !l && e.return != null && e.return();
      } finally {
        if (p) throw f;
      }
    },
  };
}
function J(r, t) {
  if (r) {
    if (typeof r == 'string') return E(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if ((e === 'Object' && r.constructor && (e = r.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(r);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return E(r, t);
  }
}
function E(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Q(r, t) {
  if (r == null) return {};
  var e = X(r, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(r);
    for (i = 0; i < l.length; i++)
      ((n = l[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (e[n] = r[n]));
  }
  return e;
}
function X(r, t) {
  if (r == null) return {};
  var e = {},
    n = Object.keys(r),
    i,
    l;
  for (l = 0; l < n.length; l++) ((i = n[l]), !(t.indexOf(i) >= 0) && (e[i] = r[i]));
  return e;
}
var Y = S.memo(function (r) {
  var t = r.provider,
    e = r.size,
    n = e === void 0 ? 12 : e,
    i = r.type,
    l = i === void 0 ? 'avatar' : i,
    p = r.forceMono,
    f = r.shape,
    s = Q(r, W),
    o = S.useMemo(
      function () {
        if (t) {
          var A = t.toLowerCase(),
            m = G(z),
            I;
          try {
            for (m.s(); !(I = m.n()).done; ) {
              var C = I.value;
              if (
                C.keywords.some(function (w) {
                  return w.toLowerCase() === A;
                })
              )
                return C;
            }
          } catch (w) {
            m.e(w);
          } finally {
            m.f();
          }
        }
      },
      [t],
    ),
    u = a(a({ size: n }, o?.props), s);
  switch (l) {
    case 'avatar':
      return o != null && o.Icon
        ? c.jsx(o.Icon.Avatar, a({ shape: f }, u))
        : c.jsx(H, a({ shape: f }, u));
    case 'mono':
      return o != null && o.Icon
        ? !p && t === T.LobeHub
          ? c.jsx(o.Icon.Color, a({}, u))
          : c.jsx(o.Icon, a({}, u))
        : c.jsx(y, a({}, u));
    case 'color': {
      var d;
      return o != null && o.Icon
        ? (d = o.Icon) !== null && d !== void 0 && d.Color
          ? c.jsx(o.Icon.Color, a({}, u))
          : c.jsx(o.Icon, a({}, u))
        : c.jsx(y, a({}, u));
    }
    case 'combine': {
      var j, g, O;
      return o != null && o.Icon
        ? (j = o.Icon) !== null && j !== void 0 && j.Combine
          ? c.jsx(o.Icon.Combine, a({ type: 'mono' }, u))
          : (g = o.Icon) !== null && g !== void 0 && g.Brand
            ? c.jsx(o.Icon.Brand, a({}, u))
            : (O = o.Icon) !== null && O !== void 0 && O.Text
              ? c.jsx(o.Icon.Text, a({}, u))
              : c.jsx(o.Icon, a({}, u))
        : c.jsx(y, a({}, u));
    }
    case 'combine-color': {
      var h, P, x;
      return o != null && o.Icon
        ? (h = o.Icon) !== null && h !== void 0 && h.Combine
          ? c.jsx(o.Icon.Combine, a({ type: 'color' }, u))
          : (P = o.Icon) !== null && P !== void 0 && P.BrandColor
            ? c.jsx(o.Icon.BrandColor, a({}, u))
            : (x = o.Icon) !== null && x !== void 0 && x.Text
              ? c.jsx(o.Icon.Text, a({}, u))
              : c.jsx(o.Icon, a({}, u))
        : c.jsx(y, a({}, u));
    }
    default:
      return c.jsx(y, a({}, u));
  }
});
Y.displayName = 'ProviderIcon';
export { Y as P };
