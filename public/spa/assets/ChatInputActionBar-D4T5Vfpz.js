import { r as f } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { l as h } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { f as j, F as S, j as w } from './index-C8UyLGsD.js';
import { j as P } from '../vendor/vendor-motion-Dbb9VQJo.js';
function O(e, t) {
  return x(e) || R(e, t) || A(e, t) || _();
}
function _() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A(e, t) {
  if (e) {
    if (typeof e == 'string') return v(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t);
  }
}
function v(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function R(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      o,
      i,
      a,
      b = [],
      p = !0,
      u = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (; !(p = (n = i.call(r)).done) && (b.push(n.value), b.length !== t); p = !0);
    } catch (c) {
      ((u = !0), (o = c));
    } finally {
      try {
        if (!p && r.return != null && ((a = r.return()), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return b;
  }
}
function x(e) {
  if (Array.isArray(e)) return e;
}
var F = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.debounceMs,
      n = r === void 0 ? 100 : r,
      o = f.useRef(null),
      i = f.useState(),
      a = O(i, 2),
      b = a[0],
      p = a[1],
      u = f.useRef(null),
      c = f.useCallback(
        h(function (s) {
          if (s[0]) {
            var l = s[0].contentRect.width;
            p(Math.floor(l));
          }
        }, n),
        [n],
      );
    return (
      f.useEffect(
        function () {
          var s = o.current;
          if (s)
            return (
              (u.current = new ResizeObserver(c)),
              u.current.observe(s),
              function () {
                if (u.current) {
                  var l;
                  (u.current.disconnect(), (l = c.cancel) === null || l === void 0 || l.call(c));
                }
              }
            );
        },
        [c],
      ),
      { ref: o, width: b }
    );
  },
  K = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.debounceMs,
      n = r === void 0 ? 100 : r,
      o = f.useRef(null),
      i = f.useState(),
      a = O(i, 2),
      b = a[0],
      p = a[1],
      u = f.useRef(null),
      c = f.useCallback(
        h(function (s) {
          if (s[0]) {
            var l = s[0].contentRect.height;
            p(Math.floor(l));
          }
        }, n),
        [n],
      );
    return (
      f.useEffect(
        function () {
          var s = o.current;
          if (s)
            return (
              (u.current = new ResizeObserver(c)),
              u.current.observe(s),
              function () {
                if (u.current) {
                  var l;
                  (u.current.disconnect(), (l = c.cancel) === null || l === void 0 || l.call(c));
                }
              }
            );
        },
        [c],
      ),
      { height: b, ref: o }
    );
  },
  m;
function z(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var E = j(function (e) {
  var t = e.css;
  return {
    container: t(
      m ||
        (m = z([
          `
    overflow: hidden;
  `,
        ])),
    ),
  };
});
function y(e) {
  '@babel/helpers - typeof';
  return (
    (y =
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
    y(e)
  );
}
var I = ['className', 'style', 'left', 'right'];
function d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? d(Object(r), !0).forEach(function (n) {
          M(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M(e, t, r) {
  return (
    (t = C(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function C(e) {
  var t = T(e, 'string');
  return y(t) == 'symbol' ? t : String(t);
}
function T(e, t) {
  if (y(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (y(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function N(e, t) {
  if (e == null) return {};
  var r = W(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      ((n = i[o]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function W(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var B = function (t) {
  var r = t.className,
    n = t.style,
    o = t.left,
    i = t.right,
    a = N(t, I);
  return P.jsxs(
    S,
    g(
      g(
        {
          align: 'center',
          className: w(E.container, r),
          gap: 4,
          horizontal: !0,
          justify: 'space-between',
          padding: 4,
          style: n,
        },
        a,
      ),
      {},
      { children: [o, i] },
    ),
  );
};
B.displayName = 'ChatInputActionBar';
export { B as C, K as a, F as u };
