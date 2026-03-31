import {
  e as x,
  c as O,
  g as m,
  h as p,
  j as P,
  k as w,
  l as c,
  m as I,
  t as A,
  n as N,
} from './_baseUniq-qDkQdKzt.js';
import {
  p as g,
  b as E,
  q as F,
  r as M,
  j as _,
  e as l,
  h as $,
  s as B,
  t as T,
  u as y,
} from './isEmpty-D-XN117C.js';
import { k as S } from './_baseIsEqual-wSwq2BXm.js';
var q = /\s/;
function G(n) {
  for (var r = n.length; r-- && q.test(n.charAt(r)); );
  return r;
}
var H = /^\s+/;
function L(n) {
  return n && n.slice(0, G(n) + 1).replace(H, '');
}
var o = NaN,
  R = /^[-+]0x[0-9a-f]+$/i,
  z = /^0b[01]+$/i,
  C = /^0o[0-7]+$/i,
  K = parseInt;
function W(n) {
  if (typeof n == 'number') return n;
  if (x(n)) return o;
  if (g(n)) {
    var r = typeof n.valueOf == 'function' ? n.valueOf() : n;
    n = g(r) ? r + '' : r;
  }
  if (typeof n != 'string') return n === 0 ? n : +n;
  n = L(n);
  var t = z.test(n);
  return t || C.test(n) ? K(n.slice(2), t ? 2 : 8) : R.test(n) ? o : +n;
}
var v = 1 / 0,
  X = 17976931348623157e292;
function Y(n) {
  if (!n) return n === 0 ? n : 0;
  if (((n = W(n)), n === v || n === -v)) {
    var r = n < 0 ? -1 : 1;
    return r * X;
  }
  return n === n ? n : 0;
}
function D(n) {
  var r = Y(n),
    t = r % 1;
  return r === r ? (t ? r - t : r) : 0;
}
function dn(n) {
  var r = n == null ? 0 : n.length;
  return r ? O(n) : [];
}
var b = Object.prototype,
  J = b.hasOwnProperty,
  un = E(function (n, r) {
    n = Object(n);
    var t = -1,
      a = r.length,
      e = a > 2 ? r[2] : void 0;
    for (e && F(r[0], r[1], e) && (a = 1); ++t < a; )
      for (var f = r[t], i = M(f), s = -1, d = i.length; ++s < d; ) {
        var u = i[s],
          h = n[u];
        (h === void 0 || (_(h, b[u]) && !J.call(n, u))) && (n[u] = f[u]);
      }
    return n;
  });
function hn(n) {
  var r = n == null ? 0 : n.length;
  return r ? n[r - 1] : void 0;
}
function Q(n) {
  return function (r, t, a) {
    var e = Object(r);
    if (!l(r)) {
      var f = m(t);
      ((r = S(r)),
        (t = function (s) {
          return f(e[s], s, e);
        }));
    }
    var i = n(r, t, a);
    return i > -1 ? e[f ? r[i] : i] : void 0;
  };
}
var U = Math.max;
function Z(n, r, t) {
  var a = n == null ? 0 : n.length;
  if (!a) return -1;
  var e = t == null ? 0 : D(t);
  return (e < 0 && (e = U(a + e, 0)), p(n, m(r), e));
}
var gn = Q(Z);
function V(n, r) {
  var t = -1,
    a = l(n) ? Array(n.length) : [];
  return (
    P(n, function (e, f, i) {
      a[++t] = r(e, f, i);
    }),
    a
  );
}
function mn(n, r) {
  var t = $(n) ? w : V;
  return t(n, m(r));
}
var j = Object.prototype,
  k = j.hasOwnProperty;
function nn(n, r) {
  return n != null && k.call(n, r);
}
function on(n, r) {
  return n != null && c(n, r, nn);
}
function rn(n, r) {
  return n < r;
}
function tn(n, r, t) {
  for (var a = -1, e = n.length; ++a < e; ) {
    var f = n[a],
      i = r(f);
    if (i != null && (s === void 0 ? i === i && !x(i) : t(i, s)))
      var s = i,
        d = f;
  }
  return d;
}
function vn(n) {
  return n && n.length ? tn(n, B, rn) : void 0;
}
function en(n, r, t, a) {
  if (!g(n)) return n;
  r = I(r, n);
  for (var e = -1, f = r.length, i = f - 1, s = n; s != null && ++e < f; ) {
    var d = A(r[e]),
      u = t;
    if (d === '__proto__' || d === 'constructor' || d === 'prototype') return n;
    if (e != i) {
      var h = s[d];
      ((u = void 0), u === void 0 && (u = g(h) ? h : T(r[e + 1]) ? [] : {}));
    }
    (y(s, d, u), (s = s[d]));
  }
  return n;
}
function xn(n, r, t) {
  for (var a = -1, e = r.length, f = {}; ++a < e; ) {
    var i = r[a],
      s = N(n, i);
    t(s, i) && en(f, I(i, n), s);
  }
  return f;
}
export {
  rn as a,
  tn as b,
  V as c,
  xn as d,
  vn as e,
  dn as f,
  gn as g,
  on as h,
  un as i,
  D as j,
  hn as l,
  mn as m,
  Y as t,
};
