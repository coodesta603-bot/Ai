import { T as a } from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as y } from './index-Di19k3su.js';
import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
function u(t) {
  '@babel/helpers - typeof';
  return (
    (u =
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
    u(t)
  );
}
var m = ['type', 'model'];
function f(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })),
      o.push.apply(o, r));
  }
  return o;
}
function c(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? f(Object(o), !0).forEach(function (r) {
          b(t, r, o[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
        : f(Object(o)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r));
          });
  }
  return t;
}
function b(t, e, o) {
  return (
    (e = s(e)),
    e in t
      ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = o),
    t
  );
}
function s(t) {
  var e = O(t, 'string');
  return u(e) == 'symbol' ? e : String(e);
}
function O(t, e) {
  if (u(t) != 'object' || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(t, e);
    if (u(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function g(t, e) {
  if (t == null) return {};
  var o = v(t, e),
    r,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      ((r = i[n]),
        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function v(t, e) {
  if (t == null) return {};
  var o = {},
    r = Object.keys(t),
    n,
    i;
  for (i = 0; i < r.length; i++) ((n = r[i]), !(e.indexOf(n) >= 0) && (o[n] = t[n]));
  return o;
}
var j = l.memo(function (t) {
  var e = t.type,
    o = e === void 0 ? 'mono' : e,
    r = t.model,
    n = g(t, m);
  return p.jsx(a, c(c({ icon: p.jsx(y, { model: r, type: o }) }, n), {}, { children: r }));
});
j.displayName = 'ModelTag';
export { j as M };
