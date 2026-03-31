import { a3 as E, C as N, F as C } from './index-C8UyLGsD.js';
import { r as M } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
var D = function (t, r) {
  if (r) {
    if (t && r === '#000') return '0 0 0 1px rgba(255,255,255,0.1) inset';
    if (!t && r === '#fff') return '0 0 0 1px rgba(0,0,0,0.05) inset';
  }
};
function f(e) {
  '@babel/helpers - typeof';
  return (
    (f =
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
    f(e)
  );
}
var L = [
  'shape',
  'color',
  'background',
  'size',
  'style',
  'iconMultiple',
  'Icon',
  'iconStyle',
  'iconClassName',
];
function S(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    (t &&
      (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? S(Object(r), !0).forEach(function (o) {
          F(e, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : S(Object(r)).forEach(function (o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return e;
}
function F(e, t, r) {
  return (
    (t = K(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function K(e) {
  var t = W(e, 'string');
  return f(t) == 'symbol' ? t : String(t);
}
function W(e, t) {
  if (f(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t);
    if (f(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function _(e, t) {
  if (e == null) return {};
  var r = k(e, t),
    o,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((o = i[n]),
        !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
  }
  return r;
}
function k(e, t) {
  if (e == null) return {};
  var r = {},
    o = Object.keys(e),
    n,
    i;
  for (i = 0; i < o.length; i++) ((n = o[i]), !(t.indexOf(n) >= 0) && (r[n] = e[n]));
  return r;
}
var V = M.memo(function (e) {
  var t = e.shape,
    r = t === void 0 ? 'circle' : t,
    o = e.color,
    n = o === void 0 ? '#fff' : o,
    i = e.background,
    l = e.size,
    b = e.style,
    u = e.iconMultiple,
    m = u === void 0 ? 0.75 : u,
    p = e.Icon,
    v = e.iconStyle,
    j = e.iconClassName,
    g = _(e, L),
    d = E(),
    O = d.isDarkMode;
  return a.jsx(
    N,
    h(
      h(
        {
          flex: 'none',
          style: h(
            {
              background: i,
              borderRadius: r === 'circle' ? '50%' : Math.floor(l * 0.1),
              boxShadow: D(O, i),
              color: n,
              height: l,
              width: l,
            },
            b,
          ),
        },
        g,
      ),
      {},
      {
        children:
          p &&
          a.jsx(p, {
            className: j,
            color: n,
            size: l,
            style: h({ transform: 'scale('.concat(m, ')') }, v),
          }),
      },
    ),
  );
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
var A = [
  'Icon',
  'style',
  'Text',
  'color',
  'size',
  'spaceMultiple',
  'textMultiple',
  'extra',
  'extraStyle',
  'showText',
  'showLogo',
  'extraClassName',
  'iconProps',
  'inverse',
];
function $(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    (t &&
      (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $(Object(r), !0).forEach(function (o) {
          R(e, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $(Object(r)).forEach(function (o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return e;
}
function R(e, t, r) {
  return (
    (t = B(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function B(e) {
  var t = H(e, 'string');
  return y(t) == 'symbol' ? t : String(t);
}
function H(e, t) {
  if (y(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t);
    if (y(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function q(e, t) {
  if (e == null) return {};
  var r = G(e, t),
    o,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      ((o = i[n]),
        !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
  }
  return r;
}
function G(e, t) {
  if (e == null) return {};
  var r = {},
    o = Object.keys(e),
    n,
    i;
  for (i = 0; i < o.length; i++) ((n = o[i]), !(t.indexOf(n) >= 0) && (r[n] = e[n]));
  return r;
}
var X = M.memo(function (e) {
  var t = e.Icon,
    r = e.style,
    o = e.Text,
    n = e.color,
    i = e.size,
    l = i === void 0 ? 24 : i,
    b = e.spaceMultiple,
    u = b === void 0 ? 1 : b,
    m = e.textMultiple,
    p = m === void 0 ? 1 : m,
    v = e.extra,
    j = e.extraStyle,
    g = e.showText,
    d = g === void 0 ? !0 : g,
    O = e.showLogo,
    z = O === void 0 ? !0 : O,
    I = e.extraClassName,
    c = e.iconProps,
    x = e.inverse,
    T = q(e, A),
    P =
      t &&
      z &&
      a.jsx(
        t,
        s(
          s({ size: l }, c),
          {},
          { style: s(x ? { marginLeft: l * u } : { marginRight: l * u }, c?.style) },
        ),
      ),
    w = d && o && a.jsx(o, { size: l * p });
  return a.jsxs(
    C,
    s(
      s(
        {
          align: 'center',
          flex: 'none',
          horizontal: !0,
          justify: 'flex-start',
          style: s({ color: n }, r),
        },
        T,
      ),
      {},
      {
        children: [
          x ? a.jsxs(a.Fragment, { children: [w, P] }) : a.jsxs(a.Fragment, { children: [P, w] }),
          v &&
            a.jsx('span', {
              className: I,
              style: s({ fontSize: l * p * 0.95, lineHeight: 1 }, j),
              children: v,
            }),
        ],
      },
    ),
  );
});
export { V as I, X as a };
