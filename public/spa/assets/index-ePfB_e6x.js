import { r as b } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as x, a as E } from './index-BsHwsvJB.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
var u = 'Cloudflare',
  z = 0.4,
  D = 0.25,
  S = '#F38020',
  I = S,
  C = '#fff',
  T = 0.75;
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
var A = ['size', 'style'];
function h(e, t) {
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
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? h(Object(r), !0).forEach(function (n) {
          M(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : h(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M(e, t, r) {
  return (
    (t = L(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function L(e) {
  var t = V(e, 'string');
  return f(t) == 'symbol' ? t : String(t);
}
function V(e, t) {
  if (f(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (f(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function K(e, t) {
  if (e == null) return {};
  var r = R(e, t),
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
function R(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var g = b.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = K(e, A);
  return c.jsxs(
    'svg',
    m(
      m(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: m({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: u }),
          c.jsx('path', {
            d: 'M16.493 17.4c.135-.52.08-.983-.161-1.338-.215-.328-.592-.519-1.05-.519l-8.663-.109a.148.148 0 01-.135-.082c-.027-.054-.027-.109-.027-.163.027-.082.108-.164.189-.164l8.744-.11c1.05-.054 2.153-.9 2.556-1.937l.511-1.31c.027-.055.027-.11.027-.164C17.92 8.91 15.66 7 12.942 7c-2.503 0-4.628 1.638-5.381 3.903a2.432 2.432 0 00-1.803-.491c-1.21.109-2.153 1.092-2.287 2.32-.027.328 0 .628.054.9C1.56 13.688 0 15.326 0 17.319c0 .19.027.355.027.545 0 .082.08.137.161.137h15.983c.08 0 .188-.055.215-.164l.107-.437',
          }),
          c.jsx('path', {
            d: 'M19.238 11.75h-.242c-.054 0-.108.054-.135.109l-.35 1.2c-.134.52-.08.983.162 1.338.215.328.592.518 1.05.518l1.855.11c.054 0 .108.027.135.082.027.054.027.109.027.163-.027.082-.108.164-.188.164l-1.91.11c-1.05.054-2.153.9-2.557 1.937l-.134.355c-.027.055.026.137.107.137h6.592c.081 0 .162-.055.162-.137.107-.41.188-.846.188-1.31-.027-2.62-2.153-4.777-4.762-4.777',
          }),
        ],
      },
    ),
  );
});
function a(e) {
  '@babel/helpers - typeof';
  return (
    (a =
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
    a(e)
  );
}
function j(e, t) {
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
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? j(Object(r), !0).forEach(function (n) {
          W(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : j(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function W(e, t, r) {
  return (
    (t = H(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function H(e) {
  var t = B(e, 'string');
  return a(t) == 'symbol' ? t : String(t);
}
function B(e, t) {
  if (a(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (a(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function U(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var F = b.memo(function (e) {
  var t = Object.assign({}, (U(e), e));
  return c.jsx(
    x,
    N({ 'Icon': g, 'aria-label': u, 'background': I, 'color': C, 'iconMultiple': T }, t),
  );
});
function p(e) {
  '@babel/helpers - typeof';
  return (
    (p =
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
    p(e)
  );
}
var G = ['size', 'style'];
function P(e, t) {
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
function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? P(Object(r), !0).forEach(function (n) {
          X(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : P(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function X(e, t, r) {
  return (
    (t = Y(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Y(e) {
  var t = q(e, 'string');
  return p(t) == 'symbol' ? t : String(t);
}
function q(e, t) {
  if (p(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (p(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function J(e, t) {
  if (e == null) return {};
  var r = Q(e, t),
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
function Q(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var _ = b.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = J(e, G);
  return c.jsxs(
    'svg',
    v(
      v(
        {
          height: r,
          style: v({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: u }),
          c.jsx('path', {
            d: 'M16.493 17.4c.135-.52.08-.983-.161-1.338-.215-.328-.592-.519-1.05-.519l-8.663-.109a.148.148 0 01-.135-.082c-.027-.054-.027-.109-.027-.163.027-.082.108-.164.189-.164l8.744-.11c1.05-.054 2.153-.9 2.556-1.937l.511-1.31c.027-.055.027-.11.027-.164C17.92 8.91 15.66 7 12.942 7c-2.503 0-4.628 1.638-5.381 3.903a2.432 2.432 0 00-1.803-.491c-1.21.109-2.153 1.092-2.287 2.32-.027.328 0 .628.054.9C1.56 13.688 0 15.326 0 17.319c0 .19.027.355.027.545 0 .082.08.137.161.137h15.983c.08 0 .188-.055.215-.164l.107-.437',
            fill: '#F38020',
          }),
          c.jsx('path', {
            d: 'M19.238 11.75h-.242c-.054 0-.108.054-.135.109l-.35 1.2c-.134.52-.08.983.162 1.338.215.328.592.518 1.05.518l1.855.11c.054 0 .108.027.135.082.027.054.027.109.027.163-.027.082-.108.164-.188.164l-1.91.11c-1.05.054-2.153.9-2.557 1.937l-.134.355c-.027.055.026.137.107.137h6.592c.081 0 .162-.055.162-.137.107-.41.188-.846.188-1.31-.027-2.62-2.153-4.777-4.762-4.777',
            fill: '#FCAD32',
          }),
        ],
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
var Z = ['size', 'style'];
function w(e, t) {
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
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? w(Object(r), !0).forEach(function (n) {
          k(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : w(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function k(e, t, r) {
  return (
    (t = ee(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ee(e) {
  var t = te(e, 'string');
  return y(t) == 'symbol' ? t : String(t);
}
function te(e, t) {
  if (y(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (y(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function re(e, t) {
  if (e == null) return {};
  var r = ne(e, t),
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
function ne(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var $ = b.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = re(e, Z);
  return c.jsxs(
    'svg',
    O(
      O(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: O({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 242 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: u }),
          c.jsx('path', {
            d: 'M28.4 2.395h5.386v14.606h9.326v4.736H28.4V2.395zM16.71 14.369c-.787 1.71-2.363 2.894-4.465 2.894-2.89 0-4.86-2.368-4.86-5.263 0-2.764 1.97-5.132 4.86-5.132 2.232 0 3.81 1.316 4.597 3.158h5.647C21.571 5.421 17.5 2 12.377 2 6.467 2 2 6.474 2 12s4.335 10 10.377 10c5.122 0 9.062-3.289 10.112-7.763H16.71v.132zM224.37 2.395h15.499v4.606h-10.114v2.894h9.194v4.21h-9.194v3.027H240v4.605h-15.63V2.395zm-24.693 0h9.062c2.89 0 4.991.79 6.305 2.105 1.182 1.052 1.708 2.632 1.708 4.474 0 2.894-1.576 4.868-3.94 5.921l4.596 6.71h-6.174l-3.939-5.79h-2.365v5.79h-5.386V2.395h.133zm8.8 9.211c1.838 0 2.889-.921 2.889-2.238 0-1.579-1.05-2.237-2.89-2.237l-3.546.001v4.605h3.547v-.13zm-29.028-9.343h5.122l8.144 19.474h-5.78l-1.444-3.421h-7.486l-1.315 3.42h-5.516l8.275-19.473zm4.598 11.842l-2.103-5.526-2.232 5.526h4.335zm-33.232-11.71h5.386v14.606h9.325v4.736h-14.711V2.395zm-22.854 0h15.367v4.737h-9.981v3.158h9.062v4.474h-9.062v6.973h-5.386V2.395zm-26.007 0h7.488c6.829 0 10.9 3.947 10.9 9.473 0 5.526-4.071 9.737-11.032 9.737h-7.356V2.395zm7.488 14.606c3.151 0 5.253-1.712 5.253-4.87 0-3.025-2.102-4.868-5.253-4.868h-2.233v9.87h2.233V17zm-33.625-3.816V2.395H81.2v10.658c0 2.763 1.445 4.078 3.547 4.078 2.101 0 3.547-1.315 3.547-3.946V2.263h5.385v10.659c0 6.183-3.548 8.946-9.063 8.946-5.386.132-8.8-2.63-8.8-8.683zm-27.19-1.053C48.628 6.474 53.095 2 59.006 2c5.91 0 10.375 4.474 10.375 10s-4.465 10-10.375 10c-6.042 0-10.377-4.342-10.377-9.868zm15.237 0c0-2.896-1.97-5.264-4.99-5.264-2.891 0-4.861 2.368-4.861 5.132s1.97 5.263 4.86 5.263c3.02 0 4.99-2.368 4.99-5.131z',
          }),
        ],
      },
    ),
  );
});
function s(e) {
  '@babel/helpers - typeof';
  return (
    (s =
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
    s(e)
  );
}
var oe = ['type'];
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
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? d(Object(r), !0).forEach(function (n) {
          ce(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ce(e, t, r) {
  return (
    (t = ue(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ue(e) {
  var t = le(e, 'string');
  return s(t) == 'symbol' ? t : String(t);
}
function le(e, t) {
  if (s(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (s(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function fe(e, t) {
  if (e == null) return {};
  var r = ae(e, t),
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
function ae(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var pe = b.memo(function (e) {
    var t = e.type,
      r = t === void 0 ? 'mono' : t,
      n = fe(e, oe),
      o = r === 'color' ? _ : g;
    return c.jsx(
      E,
      ie({ 'Icon': o, 'Text': $, 'aria-label': u, 'spaceMultiple': D, 'textMultiple': z }, n),
    );
  }),
  l = g;
l.Color = _;
l.Text = $;
l.Combine = pe;
l.Avatar = F;
l.colorPrimary = S;
l.title = u;
export { l as I };
