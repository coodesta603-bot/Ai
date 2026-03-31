import { r as y } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as S, a as d } from './index-BsHwsvJB.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
var p = 'Github',
  _ = 0.8,
  E = 0.2,
  h = '#000',
  x = h,
  $ = '#fff',
  D = 0.75;
function u(e) {
  '@babel/helpers - typeof';
  return (
    (u =
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
    u(e)
  );
}
var I = ['size', 'style'];
function O(e, t) {
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
function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? O(Object(r), !0).forEach(function (n) {
          T(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : O(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function T(e, t, r) {
  return (
    (t = z(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function z(e) {
  var t = A(e, 'string');
  return u(t) == 'symbol' ? t : String(t);
}
function A(e, t) {
  if (u(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (u(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function C(e, t) {
  if (e == null) return {};
  var r = M(e, t),
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
function M(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var v = y.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = C(e, I);
  return c.jsxs(
    'svg',
    b(
      b(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: b({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: p }),
          c.jsx('path', {
            d: 'M12 0c6.63 0 12 5.276 12 11.79-.001 5.067-3.29 9.567-8.175 11.187-.6.118-.825-.25-.825-.56 0-.398.015-1.665.015-3.242 0-1.105-.375-1.813-.81-2.181 2.67-.295 5.475-1.297 5.475-5.822 0-1.297-.465-2.344-1.23-3.169.12-.295.54-1.503-.12-3.125 0 0-1.005-.324-3.3 1.209a11.32 11.32 0 00-3-.398c-1.02 0-2.04.133-3 .398-2.295-1.518-3.3-1.209-3.3-1.209-.66 1.622-.24 2.83-.12 3.125-.765.825-1.23 1.887-1.23 3.169 0 4.51 2.79 5.527 5.46 5.822-.345.294-.66.81-.765 1.577-.69.31-2.415.81-3.495-.973-.225-.354-.9-1.223-1.845-1.209-1.005.015-.405.56.015.781.51.28 1.095 1.327 1.23 1.666.24.663 1.02 1.93 4.035 1.385 0 .988.015 1.916.015 2.196 0 .31-.225.664-.825.56C3.303 21.374-.003 16.867 0 11.791 0 5.276 5.37 0 12 0z',
          }),
        ],
      },
    ),
  );
});
function l(e) {
  '@babel/helpers - typeof';
  return (
    (l =
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
    l(e)
  );
}
function g(e, t) {
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
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : g(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function R(e, t, r) {
  return (
    (t = V(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function V(e) {
  var t = K(e, 'string');
  return l(t) == 'symbol' ? t : String(t);
}
function K(e, t) {
  if (l(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (l(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function N(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var B = y.memo(function (e) {
  var t = Object.assign({}, (N(e), e));
  return c.jsx(
    S,
    L({ 'Icon': v, 'aria-label': p, 'background': x, 'color': $, 'iconMultiple': D }, t),
  );
});
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
var U = ['size', 'style'];
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
function m(e) {
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
  var t = G(e, 'string');
  return f(t) == 'symbol' ? t : String(t);
}
function G(e, t) {
  if (f(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (f(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function X(e, t) {
  if (e == null) return {};
  var r = Y(e, t),
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
function Y(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var w = y.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = X(e, U);
  return c.jsxs(
    'svg',
    m(
      m(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: m({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 78 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: p }),
          c.jsx('path', {
            d: 'M16.598 10.836v9.48c0 .066-.017.181-.1.214 0 0-2.07 1.47-5.484 1.47C6.888 22 2 20.712 2 12.223 2 3.734 6.275 1.983 10.45 2c3.613 0 5.07.81 5.303.958.066.083.1.149.1.231l-.697 2.94c0 .149-.149.33-.331.28-.597-.18-1.491-.544-3.596-.544-2.435 0-5.053.693-5.053 6.16 0 5.466 2.485 6.11 4.275 6.11 1.524 0 2.07-.181 2.07-.181v-3.799h-2.435c-.182 0-.315-.132-.315-.28v-3.04c0-.148.133-.28.315-.28h6.197c.182 0 .315.132.315.28zM76 14.684c0 5.664-1.84 7.283-5.054 7.283-2.717 0-4.175-1.37-4.175-1.37s-.067.759-.15.858c-.05.1-.132.132-.231.132h-2.453c-.165 0-.315-.132-.315-.28l.034-18.349a.29.29 0 01.281-.28h3.53a.29.29 0 01.281.28v6.226s1.359-.875 3.347-.875l-.016-.033c1.988 0 4.921.743 4.921 6.408zM47.865 2.71a.29.29 0 01.281.281V21.34a.29.29 0 01-.281.281h-3.53a.29.29 0 01-.281-.28l.033-7.845h-5.485v7.844a.29.29 0 01-.281.281h-3.53c-.132 0-.281-.132-.281-.28V2.99a.29.29 0 01.281-.28h3.53a.29.29 0 01.281.28v6.755h5.485V2.99a.29.29 0 01.282-.28h3.496zM61.55 8.722c.183 0 .315.132.315.28l-.033 12.337c0 .149-.1.281-.282.281h-2.22c-.116 0-.232-.066-.265-.148-.05-.1-.133-.744-.133-.744S57.061 22 54.758 22c-2.8 0-4.839-.908-4.839-4.542V9.02a.29.29 0 01.282-.28h3.546a.29.29 0 01.282.28v7.845c0 1.238.364 1.8 1.607 1.8 1.243 0 2.154-.644 2.154-.644V9.036c0-.182.1-.314.282-.314h3.48zm-28.84 9.861h.007c.14.029.239.154.234.296v2.477c0 .116-.05.231-.149.264-.166.083-1.226.363-2.104.363-1.922 0-4.74-.412-4.74-4.442v-5.417H24.12c-.149 0-.281-.132-.281-.314V9.564c0-.132.083-.248.215-.28.116-.017 1.922-.463 1.922-.463V5.237c0-.132.083-.215.232-.215h3.58c.148 0 .231.083.231.215v3.485h2.635c.132 0 .265.132.265.28v2.808c0 .182-.116.314-.265.314h-2.635v5.17c0 .777.448 1.372 1.74 1.372.41 0 .797-.081.951-.083zM22.28 8.705a.29.29 0 01.282.281v12.172c0 .297-.083.446-.414.446h-3.182c-.281 0-.497-.116-.497-.446V9.036c0-.182.133-.33.282-.33h3.53zm49.693 6.243c0-2.99-1.21-3.386-2.486-3.253-.994.066-1.79.561-1.79.561v5.813s.813.562 2.022.595c1.707.05 2.254-.562 2.254-3.716zM20.54 3.123a2.26 2.26 0 012.254 2.28A2.26 2.26 0 0120.54 7.68a2.266 2.266 0 01-2.286-2.279c0-1.271 1.01-2.279 2.286-2.279z',
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
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? P(Object(r), !0).forEach(function (n) {
          F(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : P(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function F(e, t, r) {
  return (
    (t = J(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function J(e) {
  var t = Q(e, 'string');
  return a(t) == 'symbol' ? t : String(t);
}
function Q(e, t) {
  if (a(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (a(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Z(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var k = y.memo(function (e) {
    var t = Object.assign({}, (Z(e), e));
    return c.jsx(
      d,
      q({ 'Icon': v, 'Text': w, 'aria-label': p, 'spaceMultiple': E, 'textMultiple': _ }, t),
    );
  }),
  s = v;
s.Text = w;
s.Combine = k;
s.Avatar = B;
s.colorPrimary = h;
s.title = p;
export { s as I };
