import {
  e as K,
  f as F,
  g as m,
  h as x,
  M as q,
  S as D,
  j as J,
  U as M,
  k as G,
  l as $,
  m as S,
  n as Q,
  o as b,
} from './isEmpty-D-XN117C.js';
function X(n) {
  return K(n) ? F(n) : m(n);
}
function Y(n, e) {
  for (var r = -1, f = e.length, i = n.length; ++r < f; ) n[i + r] = e[r];
  return n;
}
function Z(n, e) {
  for (var r = -1, f = n == null ? 0 : n.length, i = 0, a = []; ++r < f; ) {
    var s = n[r];
    e(s, r, n) && (a[i++] = s);
  }
  return a;
}
function o() {
  return [];
}
var W = Object.prototype,
  z = W.propertyIsEnumerable,
  B = Object.getOwnPropertySymbols,
  V = B
    ? function (n) {
        return n == null
          ? []
          : ((n = Object(n)),
            Z(B(n), function (e) {
              return z.call(n, e);
            }));
      }
    : o;
function j(n, e, r) {
  var f = e(n);
  return x(n) ? f : Y(f, r(n));
}
function C(n) {
  return j(n, X, V);
}
var k = '__lodash_hash_undefined__';
function nn(n) {
  return (this.__data__.set(n, k), this);
}
function en(n) {
  return this.__data__.has(n);
}
function E(n) {
  var e = -1,
    r = n == null ? 0 : n.length;
  for (this.__data__ = new q(); ++e < r; ) this.add(n[e]);
}
E.prototype.add = E.prototype.push = nn;
E.prototype.has = en;
function rn(n, e) {
  for (var r = -1, f = n == null ? 0 : n.length; ++r < f; ) if (e(n[r], r, n)) return !0;
  return !1;
}
function an(n, e) {
  return n.has(e);
}
var fn = 1,
  sn = 2;
function H(n, e, r, f, i, a) {
  var s = r & fn,
    l = n.length,
    u = e.length;
  if (l != u && !(s && u > l)) return !1;
  var g = a.get(n),
    _ = a.get(e);
  if (g && _) return g == e && _ == n;
  var v = -1,
    t = !0,
    p = r & sn ? new E() : void 0;
  for (a.set(n, e), a.set(e, n); ++v < l; ) {
    var d = n[v],
      A = e[v];
    if (f) var y = s ? f(A, d, v, e, n, a) : f(d, A, v, n, e, a);
    if (y !== void 0) {
      if (y) continue;
      t = !1;
      break;
    }
    if (p) {
      if (
        !rn(e, function (O, T) {
          if (!an(p, T) && (d === O || i(d, O, r, f, a))) return p.push(T);
        })
      ) {
        t = !1;
        break;
      }
    } else if (!(d === A || i(d, A, r, f, a))) {
      t = !1;
      break;
    }
  }
  return (a.delete(n), a.delete(e), t);
}
function tn(n) {
  var e = -1,
    r = Array(n.size);
  return (
    n.forEach(function (f, i) {
      r[++e] = [i, f];
    }),
    r
  );
}
function un(n) {
  var e = -1,
    r = Array(n.size);
  return (
    n.forEach(function (f) {
      r[++e] = f;
    }),
    r
  );
}
var ln = 1,
  gn = 2,
  vn = '[object Boolean]',
  dn = '[object Date]',
  An = '[object Error]',
  _n = '[object Map]',
  pn = '[object Number]',
  yn = '[object RegExp]',
  On = '[object Set]',
  Tn = '[object String]',
  wn = '[object Symbol]',
  Pn = '[object ArrayBuffer]',
  Ln = '[object DataView]',
  N = D ? D.prototype : void 0,
  R = N ? N.valueOf : void 0;
function En(n, e, r, f, i, a, s) {
  switch (r) {
    case Ln:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset) return !1;
      ((n = n.buffer), (e = e.buffer));
    case Pn:
      return !(n.byteLength != e.byteLength || !a(new M(n), new M(e)));
    case vn:
    case dn:
    case pn:
      return J(+n, +e);
    case An:
      return n.name == e.name && n.message == e.message;
    case yn:
    case Tn:
      return n == e + '';
    case _n:
      var l = tn;
    case On:
      var u = f & ln;
      if ((l || (l = un), n.size != e.size && !u)) return !1;
      var g = s.get(n);
      if (g) return g == e;
      ((f |= gn), s.set(n, e));
      var _ = H(l(n), l(e), f, i, a, s);
      return (s.delete(n), _);
    case wn:
      if (R) return R.call(n) == R.call(e);
  }
  return !1;
}
var Sn = 1,
  Rn = Object.prototype,
  xn = Rn.hasOwnProperty;
function In(n, e, r, f, i, a) {
  var s = r & Sn,
    l = C(n),
    u = l.length,
    g = C(e),
    _ = g.length;
  if (u != _ && !s) return !1;
  for (var v = u; v--; ) {
    var t = l[v];
    if (!(s ? t in e : xn.call(e, t))) return !1;
  }
  var p = a.get(n),
    d = a.get(e);
  if (p && d) return p == e && d == n;
  var A = !0;
  (a.set(n, e), a.set(e, n));
  for (var y = s; ++v < u; ) {
    t = l[v];
    var O = n[t],
      T = e[t];
    if (f) var I = s ? f(T, O, t, e, n, a) : f(O, T, t, n, e, a);
    if (!(I === void 0 ? O === T || i(O, T, r, f, a) : I)) {
      A = !1;
      break;
    }
    y || (y = t == 'constructor');
  }
  if (A && !y) {
    var w = n.constructor,
      P = e.constructor;
    w != P &&
      'constructor' in n &&
      'constructor' in e &&
      !(typeof w == 'function' && w instanceof w && typeof P == 'function' && P instanceof P) &&
      (A = !1);
  }
  return (a.delete(n), a.delete(e), A);
}
var Dn = 1,
  U = '[object Arguments]',
  c = '[object Array]',
  L = '[object Object]',
  Mn = Object.prototype,
  h = Mn.hasOwnProperty;
function Gn(n, e, r, f, i, a) {
  var s = x(n),
    l = x(e),
    u = s ? c : G(n),
    g = l ? c : G(e);
  ((u = u == U ? L : u), (g = g == U ? L : g));
  var _ = u == L,
    v = g == L,
    t = u == g;
  if (t && $(n)) {
    if (!$(e)) return !1;
    ((s = !0), (_ = !1));
  }
  if (t && !_)
    return (a || (a = new S()), s || Q(n) ? H(n, e, r, f, i, a) : En(n, e, u, r, f, i, a));
  if (!(r & Dn)) {
    var p = _ && h.call(n, '__wrapped__'),
      d = v && h.call(e, '__wrapped__');
    if (p || d) {
      var A = p ? n.value() : n,
        y = d ? e.value() : e;
      return (a || (a = new S()), i(A, y, r, f, a));
    }
  }
  return t ? (a || (a = new S()), In(n, e, r, f, i, a)) : !1;
}
function $n(n, e, r, f, i) {
  return n === e
    ? !0
    : n == null || e == null || (!b(n) && !b(e))
      ? n !== n && e !== e
      : Gn(n, e, r, f, $n, i);
}
export {
  E as S,
  Y as a,
  j as b,
  C as c,
  $n as d,
  Z as e,
  un as f,
  V as g,
  an as h,
  rn as i,
  X as k,
  o as s,
};
