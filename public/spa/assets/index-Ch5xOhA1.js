import { F as w } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as S, p as x } from './providerConfig-C5BYp5FR.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
function p(r) {
  '@babel/helpers - typeof';
  return (
    (p =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    p(r)
  );
}
var _ = ['provider', 'size', 'type'];
function O(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })),
      t.push.apply(t, n));
  }
  return t;
}
function f(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? O(Object(t), !0).forEach(function (n) {
          I(r, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
        : O(Object(t)).forEach(function (n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return r;
}
function I(r, e, t) {
  return (
    (e = C(e)),
    e in r
      ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (r[e] = t),
    r
  );
}
function C(r) {
  var e = A(r, 'string');
  return p(e) == 'symbol' ? e : String(e);
}
function A(r, e) {
  if (p(r) != 'object' || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (p(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(r);
}
function E(r, e) {
  var t = (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (Array.isArray(r) || (t = z(r)) || e) {
      t && (r = t);
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
  var u = !0,
    l = !1,
    s;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var o = t.next();
      return ((u = o.done), o);
    },
    e: function (o) {
      ((l = !0), (s = o));
    },
    f: function () {
      try {
        !u && t.return != null && t.return();
      } finally {
        if (l) throw s;
      }
    },
  };
}
function z(r, e) {
  if (r) {
    if (typeof r == 'string') return j(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if ((t === 'Object' && r.constructor && (t = r.constructor.name), t === 'Map' || t === 'Set'))
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(r, e);
  }
}
function j(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function D(r, e) {
  if (r == null) return {};
  var t = T(r, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (i = 0; i < u.length; i++)
      ((n = u[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]));
  }
  return t;
}
function T(r, e) {
  if (r == null) return {};
  var t = {},
    n = Object.keys(r),
    i,
    u;
  for (u = 0; u < n.length; u++) ((i = n[u]), !(e.indexOf(i) >= 0) && (t[i] = r[i]));
  return t;
}
var $ = g.memo(function (r) {
  var e,
    t,
    n = r.provider,
    i = r.size,
    u = i === void 0 ? 12 : i,
    l = r.type,
    s = l === void 0 ? 'color' : l,
    a = D(r, _),
    o = g.useMemo(
      function () {
        if (n) {
          var P = n.toLowerCase(),
            y = E(x),
            m;
          try {
            for (y.s(); !(m = y.n()).done; ) {
              var d = m.value;
              if (
                d.keywords.some(function (b) {
                  return b.toLowerCase() === P;
                })
              )
                return d;
            }
          } catch (b) {
            y.e(b);
          } finally {
            y.f();
          }
        }
      },
      [n],
    ),
    v = f({ size: u * (o?.combineMultiple || 1), type: s }, o?.props),
    h =
      o != null && o.Combine
        ? c.jsx(o.Combine, f({}, v))
        : o != null && (e = o.Icon) !== null && e !== void 0 && e.Combine
          ? c.jsx(o.Icon.Combine, f({}, v))
          : o != null && (t = o.Icon) !== null && t !== void 0 && t.Text
            ? c.jsx(o.Icon.Text, f({}, v))
            : c.jsx(S, { size: u });
  return c.jsx(
    w,
    f(
      f(
        { align: 'center', flex: 'none', height: u * 1.5, horizontal: !0, width: 'fit-content' },
        a,
      ),
      {},
      { children: h },
    ),
  );
});
$.displayName = 'ProviderCombine';
export { $ as P };
