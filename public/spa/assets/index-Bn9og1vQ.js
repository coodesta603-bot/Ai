import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as V, a as N } from './index-BsHwsvJB.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
var f = 'Claude',
  J = 0.8,
  Q = 0.1,
  W = '#D97757',
  Z = W,
  ee = '#fff',
  te = 0.75;
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
var re = ['size', 'style'];
function z(e, t) {
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
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? z(Object(r), !0).forEach(function (n) {
          ne(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : z(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ne(e, t, r) {
  return (
    (t = oe(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function oe(e) {
  var t = ie(e, 'string');
  return p(t) == 'symbol' ? t : String(t);
}
function ie(e, t) {
  if (p(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (p(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ce(e, t) {
  if (e == null) return {};
  var r = le(e, t),
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
function le(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var $ = u.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = ce(e, re);
  return c.jsxs(
    'svg',
    h(
      h(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: h({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: f }),
          c.jsx('path', {
            d: 'M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z',
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
function L(e, t) {
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
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? L(Object(r), !0).forEach(function (n) {
          fe(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : L(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function fe(e, t, r) {
  return (
    (t = ae(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ae(e) {
  var t = pe(e, 'string');
  return y(t) == 'symbol' ? t : String(t);
}
function pe(e, t) {
  if (y(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (y(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ye(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var be = u.memo(function (e) {
  var t = Object.assign({}, (ye(e), e));
  return c.jsx(
    V,
    ue({ 'Icon': $, 'aria-label': f, 'background': Z, 'color': ee, 'iconMultiple': te }, t),
  );
});
function b(e) {
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
    b(e)
  );
}
var se = ['size', 'style'];
function D(e, t) {
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
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D(Object(r), !0).forEach(function (n) {
          ve(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : D(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ve(e, t, r) {
  return (
    (t = me(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function me(e) {
  var t = Oe(e, 'string');
  return b(t) == 'symbol' ? t : String(t);
}
function Oe(e, t) {
  if (b(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (b(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ge(e, t) {
  if (e == null) return {};
  var r = je(e, t),
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
function je(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var B = u.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = ge(e, se);
  return c.jsxs(
    'svg',
    w(
      w(
        {
          height: r,
          style: w({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: f }),
          c.jsx('path', {
            d: 'M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z',
            fill: '#D97757',
            fillRule: 'nonzero',
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
var Pe = ['size', 'style'];
function I(e, t) {
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
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? I(Object(r), !0).forEach(function (n) {
          he(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : I(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function he(e, t, r) {
  return (
    (t = we(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we(e) {
  var t = Se(e, 'string');
  return s(t) == 'symbol' ? t : String(t);
}
function Se(e, t) {
  if (s(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (s(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function de(e, t) {
  if (e == null) return {};
  var r = _e(e, t),
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
function _e(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var F = u.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = de(e, Pe);
  return c.jsxs(
    'svg',
    S(
      S(
        {
          fill: 'currentColor',
          fillRule: 'nonzero',
          height: r,
          style: S({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 97 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: f }),
          c.jsx('path', {
            d: 'M13.623 20.222c-3.417 0-5.753-1.901-6.855-4.827a12.992 12.992 0 01-.838-4.772c0-4.907 2.206-8.315 7.08-8.315 3.275 0 5.297 1.425 6.448 4.826h1.402l-.19-4.69C18.709 1.18 16.258.543 13.276.543c-4.2 0-7.775 1.874-9.763 5.254a11.357 11.357 0 00-1.511 5.872c0 3.753 1.777 7.08 5.113 8.926a11.95 11.95 0 005.943 1.398c3.254 0 5.835-.617 8.122-1.697l.593-5.172h-1.43c-.858 2.362-1.88 3.78-3.574 4.534-.831.373-1.88.564-3.146.564zm14.74-17.914L28.499 0h-.967L23.23 1.29v.699l1.907.882v16.142c0 1.1-.565 1.344-2.043 1.528v1.18h7.319v-1.18c-1.484-.184-2.042-.428-2.042-1.528V2.315l-.007-.007zm29.104 19.685h.565l4.95-.937v-1.208l-.695-.054c-1.157-.109-1.457-.346-1.457-1.29V9.897l.137-2.763h-.783l-4.678.672v1.181l.457.082c1.266.183 1.64.536 1.64 1.419v7.67c-1.212.937-2.369 1.527-3.744 1.527-1.525 0-2.471-.774-2.471-2.58V9.905l.136-2.763h-.804l-4.684.672v1.181l.484.082c1.266.183 1.64.536 1.64 1.418v7.08c0 3 1.703 4.426 4.412 4.426 2.07 0 3.765-1.1 5.038-2.627L57.474 22l-.007-.007zm-13.602-9.55c0-3.836-2.043-5.309-5.733-5.309-3.254 0-5.616 1.344-5.616 3.57 0 .666.238 1.175.721 1.528l2.478-.326c-.109-.746-.163-1.201-.163-1.391 0-1.263.674-1.901 2.042-1.901 2.022 0 3.044 1.419 3.044 3.7v.746l-5.106 1.527c-1.702.462-2.67.863-3.316 1.8a3.386 3.386 0 00-.476 1.9c0 2.172 1.497 3.706 4.057 3.706 1.852 0 3.493-.835 4.922-2.416.51 1.581 1.294 2.416 2.69 2.416 1.13 0 2.15-.455 3.063-1.344l-.272-.937a4.363 4.363 0 01-1.178.163c-.783 0-1.157-.617-1.157-1.826v-5.607zm-6.536 7.378c-1.396 0-2.26-.808-2.26-2.226 0-.964.456-1.528 1.43-1.854l4.139-1.31v3.965c-1.321.997-2.097 1.425-3.31 1.425zm43.095 1.235v-1.208l-.701-.054c-1.158-.109-1.45-.346-1.45-1.29V2.308L78.409 0h-.974l-4.302 1.29v.699l1.906.882V8.18a6.024 6.024 0 00-3.656-1.046c-4.276 0-7.612 3.245-7.612 8.098 0 3.998 2.397 6.761 6.346 6.761 2.042 0 3.819-.99 4.922-2.525l-.136 2.525h.571l4.95-.937zm-8.96-12.313c2.043 0 3.575 1.181 3.575 3.353v6.11a4.91 4.91 0 01-3.547 1.425c-2.928 0-4.412-2.308-4.412-5.39 0-3.462 1.695-5.498 4.385-5.498zm19.424 3.055c-.381-1.792-1.484-2.81-3.016-2.81-2.288 0-3.874 1.717-3.874 4.18 0 3.646 1.934 6.008 5.059 6.008a5.858 5.858 0 005.03-2.953l.913.245c-.408 3.163-3.281 5.525-6.808 5.525-4.14 0-6.992-3.054-6.992-7.399 0-4.378 3.098-7.46 7.237-7.46 3.09 0 5.27 1.853 5.97 5.07l-10.783 3.3V14.05l7.264-2.247v-.006z',
          }),
        ],
      },
    ),
  );
});
function v(e) {
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
    v(e)
  );
}
var $e = ['type'];
function C(e, t) {
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
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? C(Object(r), !0).forEach(function (n) {
          Ee(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : C(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ee(e, t, r) {
  return (
    (t = ze(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ze(e) {
  var t = Le(e, 'string');
  return v(t) == 'symbol' ? t : String(t);
}
function Le(e, t) {
  if (v(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (v(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function De(e, t) {
  if (e == null) return {};
  var r = Ie(e, t),
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
function Ie(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var Ce = u.memo(function (e) {
    var t = e.type,
      r = t === void 0 ? 'mono' : t,
      n = De(e, $e),
      o = r === 'color' ? B : $;
    return c.jsx(
      N,
      xe({ 'Icon': o, 'Text': F, 'aria-label': f, 'spaceMultiple': Q, 'textMultiple': J }, n),
    );
  }),
  a = $;
a.Color = B;
a.Text = F;
a.Combine = Ce;
a.Avatar = be;
a.colorPrimary = W;
a.title = f;
var P = 'OpenAI',
  Te = 0.75,
  Ae = 0.1,
  G = '#000',
  H = '#19C37D',
  U = '#AB68FF',
  X = '#F86AA4',
  x = '#F9C322',
  Y = '#0099FF',
  k = '#0000FE',
  Me = G,
  Re = '#fff',
  Ke = 0.75;
function m(e) {
  '@babel/helpers - typeof';
  return (
    (m =
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
    m(e)
  );
}
var Ve = ['size', 'style'];
function T(e, t) {
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
function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T(Object(r), !0).forEach(function (n) {
          Ne(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : T(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ne(e, t, r) {
  return (
    (t = We(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function We(e) {
  var t = Be(e, 'string');
  return m(t) == 'symbol' ? t : String(t);
}
function Be(e, t) {
  if (m(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (m(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Fe(e, t) {
  if (e == null) return {};
  var r = Ge(e, t),
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
function Ge(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var E = u.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = Fe(e, Ve);
  return c.jsxs(
    'svg',
    d(
      d(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: d({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: P }),
          c.jsx('path', {
            d: 'M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z',
          }),
        ],
      },
    ),
  );
});
function O(e) {
  '@babel/helpers - typeof';
  return (
    (O =
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
    O(e)
  );
}
var He = ['type'];
function A(e, t) {
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
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? A(Object(r), !0).forEach(function (n) {
          Xe(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : A(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xe(e, t, r) {
  return (
    (t = Ye(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ye(e) {
  var t = ke(e, 'string');
  return O(t) == 'symbol' ? t : String(t);
}
function ke(e, t) {
  if (O(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (O(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function qe(e, t) {
  if (e == null) return {};
  var r = Je(e, t),
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
function Je(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var Qe = u.memo(function (e) {
  var t = e.type,
    r = t === void 0 ? 'normal' : t,
    n = qe(e, He),
    o = u.useMemo(
      function () {
        switch (r) {
          case 'gpt3':
            return H;
          case 'gpt4':
            return U;
          case 'gpt5':
            return X;
          case 'o3':
          case 'o1':
            return x;
          case 'oss':
            return Y;
          case 'platform':
            return k;
          default:
            return Me;
        }
      },
      [r],
    );
  return c.jsx(
    V,
    Ue({ 'Icon': E, 'aria-label': P, 'background': o, 'color': Re, 'iconMultiple': Ke }, n),
  );
});
function g(e) {
  '@babel/helpers - typeof';
  return (
    (g =
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
    g(e)
  );
}
var Ze = ['size', 'style'];
function M(e, t) {
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
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? M(Object(r), !0).forEach(function (n) {
          et(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : M(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function et(e, t, r) {
  return (
    (t = tt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function tt(e) {
  var t = rt(e, 'string');
  return g(t) == 'symbol' ? t : String(t);
}
function rt(e, t) {
  if (g(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (g(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function nt(e, t) {
  if (e == null) return {};
  var r = ot(e, t),
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
function ot(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var q = u.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = nt(e, Ze);
  return c.jsxs(
    'svg',
    _(
      _(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: _({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 86 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          c.jsx('title', { children: P }),
          c.jsx('path', {
            d: 'M10.703 2C5.916 2 2 5.916 2 10.703c0 4.787 3.916 8.704 8.703 8.704 4.787 0 8.704-3.893 8.704-8.704A8.698 8.698 0 0010.703 2zm0 14.288c-2.973 0-5.367-2.442-5.367-5.585S7.73 5.12 10.703 5.12c2.974 0 5.367 2.441 5.367 5.584s-2.393 5.585-5.367 5.585zM28.206 6.835c-1.57 0-3.094.629-3.892 1.693v-1.45h-3.143V24h3.143v-6.116c.798.99 2.273 1.523 3.892 1.523 3.385 0 6.045-2.66 6.045-6.286 0-3.626-2.66-6.286-6.044-6.286zm-.531 9.84c-1.79 0-3.385-1.402-3.385-3.554s1.596-3.554 3.385-3.554c1.789 0 3.384 1.402 3.384 3.554s-1.595 3.554-3.384 3.554zM41.649 6.835c-3.433 0-6.141 2.684-6.141 6.286 0 3.602 2.37 6.286 6.237 6.286 3.167 0 5.198-1.91 5.827-4.062h-3.07c-.388.895-1.475 1.523-2.78 1.523-1.62 0-2.854-1.136-3.144-2.756h9.139V12.88c0-3.288-2.297-6.044-6.068-6.044zm-3.047 5.053c.339-1.523 1.596-2.514 3.12-2.514 1.619 0 2.852 1.064 2.997 2.514h-6.117zM56.081 6.835c-1.402 0-2.877.629-3.553 1.669V7.077h-3.143v12.088h3.143v-6.503c0-1.886 1.015-3.119 2.659-3.119 1.523 0 2.345 1.16 2.345 2.78v6.842h3.143v-7.35c0-2.997-1.838-4.98-4.594-4.98zM68.724 2.242l-6.841 16.923h3.36l1.45-3.699h7.785l1.45 3.7h3.41L72.543 2.241h-3.82zm-.943 10.42l2.805-7.084 2.78 7.084H67.78zM83.81 2.242h-3.191v16.923h3.19V2.242z',
          }),
        ],
      },
    ),
  );
});
function j(e) {
  '@babel/helpers - typeof';
  return (
    (j =
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
    j(e)
  );
}
var it = ['extraStyle'];
function R(e, t) {
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
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? R(Object(r), !0).forEach(function (n) {
          ct(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : R(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ct(e, t, r) {
  return (
    (t = lt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function lt(e) {
  var t = ut(e, 'string');
  return j(t) == 'symbol' ? t : String(t);
}
function ut(e, t) {
  if (j(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (j(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ft(e, t) {
  if (e == null) return {};
  var r = at(e, t),
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
function at(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) ((o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var pt = u.memo(function (e) {
    var t = e.extraStyle,
      r = ft(e, it);
    return c.jsx(
      N,
      K(
        {
          'Icon': E,
          'Text': q,
          'aria-label': P,
          'extraStyle': K({ fontWeight: 600 }, t),
          'spaceMultiple': Ae,
          'textMultiple': Te,
        },
        r,
      ),
    );
  }),
  l = E;
l.Text = q;
l.Combine = pt;
l.Avatar = Qe;
l.colorPrimary = G;
l.colorGpt3 = H;
l.colorGpt4 = U;
l.colorGpt5 = X;
l.colorO1 = x;
l.colorO3 = x;
l.colorOss = Y;
l.colorPlatform = k;
l.title = P;
export { l as I, a, E as b };
