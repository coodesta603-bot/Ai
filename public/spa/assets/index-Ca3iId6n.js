import {
  aw as Nv,
  F as De,
  I as mu,
  k as be,
  j as Tt,
  f as vr,
  aG as Rv,
  C as Bv,
  a5 as il,
  fm as Lv,
} from './index-C8UyLGsD.js';
import { S as qv } from './index-DLsdvBKx.js';
import { g as ie, r as M, R as j } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { V as zv, c as Y, j as F } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { eg as rd, bR as Wv, R as Fv } from '../vendor/vendor-icons-BHMUH78i.js';
import { T as Cn } from './index-DE9LlaC5.js';
import {
  a as Gv,
  b as Uv,
  c as Kv,
  d as Vv,
  e as Xv,
  f as Hv,
  g as nd,
  h as Yv,
  i as Zv,
  r as Nt,
  j as Jv,
  k as yi,
  l as Qv,
  m as eh,
  n as th,
  o as rh,
  p as gu,
  q as nh,
  s as ih,
  t as mi,
  u as id,
  v as ah,
  w as oh,
  x as ad,
  y as uh,
  z as lh,
  A as ch,
  B as sh,
  C as fh,
  D as dh,
} from './_baseAssignValue-fHrU2WBP.js';
import { a as ph, b as od, c as ud, f as vh, d as ld, h as hh } from './debounce-Bxk92SIb.js';
import { i as Ct } from './tiny-invariant-CopsF_GD.js';
import {
  w as cd,
  n as sd,
  a as ce,
  M as bu,
  S as yh,
  T as mh,
  l as fd,
  t as gi,
  b as Ge,
  p as ao,
  s as Mn,
  c as dd,
  F as gh,
  G as bh,
  H as Oh,
  I as wh,
  J as xh,
  K as Sh,
  L as Ah,
  N as Ph,
  O as jh,
  k as Eh,
  P as Th,
  Q as _h,
} from './step-B6EOmCqb.js';
import { r as $h } from './index-Chjiymov.js';
import { b as oo, p as $r } from './band-CquvqAHh.js';
import {
  d as kn,
  n as Ih,
  e as Ch,
  i as Ou,
  f as uo,
  g as Rt,
  h as wu,
  a as xu,
  j as al,
  k as at,
  c as Mh,
  m as bi,
  o as pd,
  l as lo,
  p as kh,
} from './linear-BkEJkjA2.js';
import { i as bt, a as st } from './init-Dmth1JHB.js';
import {
  m as ol,
  a as ul,
  p as Dh,
  q as Nh,
  u as Rh,
  s as Bh,
  r as Lh,
  v as qh,
  w as zh,
  x as Wh,
  y as Fh,
  z as Gh,
  A as Uh,
  B as Kh,
  t as Vh,
} from './time-DAeG9hya.js';
import { f as Xh, b as Hh } from './defaultLocale-DX6XiGOO.js';
import { i as Yh, o as Zh } from './ordinal-DILIJJjt.js';
var Jh = Gv();
const Qh = ie(Jh);
function ey(t = kn) {
  if (t === kn) return vd;
  if (typeof t != 'function') throw new TypeError('compare is not a function');
  return (e, r) => {
    const n = t(e, r);
    return n || n === 0 ? n : (t(r, r) === 0) - (t(e, e) === 0);
  };
}
function vd(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
}
function hd(t, e, r = 0, n = 1 / 0, i) {
  if (
    ((e = Math.floor(e)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(t.length - 1, n))),
    !(r <= e && e <= n))
  )
    return t;
  for (i = i === void 0 ? vd : ey(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1,
        c = e - r + 1,
        f = Math.log(l),
        s = 0.5 * Math.exp((2 * f) / 3),
        d = 0.5 * Math.sqrt((f * s * (l - s)) / l) * (c - l / 2 < 0 ? -1 : 1),
        p = Math.max(r, Math.floor(e - (c * s) / l + d)),
        m = Math.min(n, Math.floor(e + ((l - c) * s) / l + d));
      hd(t, e, p, m, i);
    }
    const a = t[e];
    let o = r,
      u = n;
    for (Sr(t, r, e), i(t[n], a) > 0 && Sr(t, r, n); o < u; ) {
      for (Sr(t, o, u), ++o, --u; i(t[o], a) < 0; ) ++o;
      for (; i(t[u], a) > 0; ) --u;
    }
    (i(t[r], a) === 0 ? Sr(t, r, u) : (++u, Sr(t, u, n)),
      u <= e && (r = u + 1),
      e <= u && (n = u - 1));
  }
  return t;
}
function Sr(t, e, r) {
  const n = t[e];
  ((t[e] = t[r]), (t[r] = n));
}
function ty(t, e, r) {
  if (((t = Float64Array.from(Ih(t))), !(!(n = t.length) || isNaN((e = +e))))) {
    if (e <= 0 || n < 2) return ol(t);
    if (e >= 1) return ul(t);
    var n,
      i = (n - 1) * e,
      a = Math.floor(i),
      o = ul(hd(t, a).subarray(0, a + 1)),
      u = ol(t.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function ry(t, e, r = Ch) {
  if (!(!(n = t.length) || isNaN((e = +e)))) {
    if (e <= 0 || n < 2) return +r(t[0], 0, t);
    if (e >= 1) return +r(t[n - 1], n - 1, t);
    var n,
      i = (n - 1) * e,
      a = Math.floor(i),
      o = +r(t[a], a, t),
      u = +r(t[a + 1], a + 1, t);
    return o + (u - o) * (i - a);
  }
}
function ny(t, e) {
  e === void 0 && ((e = t), (t = Ou));
  for (var r = 0, n = e.length - 1, i = e[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = t(i, (i = e[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function yd(t) {
  var e;
  function r(n) {
    return n == null || isNaN((n = +n)) ? e : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((t = Array.from(n, uo)), r) : t.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((e = n), r) : e;
    }),
    (r.copy = function () {
      return yd(t).unknown(e);
    }),
    (t = arguments.length ? Array.from(t, uo) : [0, 1]),
    Rt(r)
  );
}
function ll(t) {
  return Math.log(t);
}
function cl(t) {
  return Math.exp(t);
}
function iy(t) {
  return -Math.log(-t);
}
function ay(t) {
  return -Math.exp(-t);
}
function oy(t) {
  return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
}
function uy(t) {
  return t === 10 ? oy : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function ly(t) {
  return t === Math.E
    ? Math.log
    : (t === 10 && Math.log10) ||
        (t === 2 && Math.log2) ||
        ((t = Math.log(t)), (e) => Math.log(e) / t);
}
function sl(t) {
  return (e, r) => -t(-e, r);
}
function Su(t) {
  const e = t(ll, cl),
    r = e.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = ly(n)),
      (a = uy(n)),
      r()[0] < 0 ? ((i = sl(i)), (a = sl(a)), t(iy, ay)) : t(ll, cl),
      e
    );
  }
  return (
    (e.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (e.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (e.ticks = (u) => {
      const l = r();
      let c = l[0],
        f = l[l.length - 1];
      const s = f < c;
      s && ([c, f] = [f, c]);
      let d = i(c),
        p = i(f),
        m,
        y;
      const v = u == null ? 10 : +u;
      let g = [];
      if (!(n % 1) && p - d < v) {
        if (((d = Math.floor(d)), (p = Math.ceil(p)), c > 0)) {
          for (; d <= p; ++d)
            for (m = 1; m < n; ++m)
              if (((y = d < 0 ? m / a(-d) : m * a(d)), !(y < c))) {
                if (y > f) break;
                g.push(y);
              }
        } else
          for (; d <= p; ++d)
            for (m = n - 1; m >= 1; --m)
              if (((y = d > 0 ? m / a(-d) : m * a(d)), !(y < c))) {
                if (y > f) break;
                g.push(y);
              }
        g.length * 2 < v && (g = al(c, f, v));
      } else g = al(d, p, Math.min(p - d, v)).map(a);
      return s ? g.reverse() : g;
    }),
    (e.tickFormat = (u, l) => {
      if (
        (u == null && (u = 10),
        l == null && (l = n === 10 ? 's' : ','),
        typeof l != 'function' &&
          (!(n % 1) && (l = Xh(l)).precision == null && (l.trim = !0), (l = Hh(l))),
        u === 1 / 0)
      )
        return l;
      const c = Math.max(1, (n * u) / e.ticks().length);
      return (f) => {
        let s = f / a(Math.round(i(f)));
        return (s * n < n - 0.5 && (s *= n), s <= c ? l(f) : '');
      };
    }),
    (e.nice = () =>
      r(Dh(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) }))),
    e
  );
}
function md() {
  const t = Su(wu()).domain([1, 10]);
  return ((t.copy = () => xu(t, md()).base(t.base())), bt.apply(t, arguments), t);
}
function fl(t) {
  return function (e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function dl(t) {
  return function (e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function Au(t) {
  var e = 1,
    r = t(fl(e), dl(e));
  return (
    (r.constant = function (n) {
      return arguments.length ? t(fl((e = +n)), dl(e)) : e;
    }),
    Rt(r)
  );
}
function gd() {
  var t = Au(wu());
  return (
    (t.copy = function () {
      return xu(t, gd()).constant(t.constant());
    }),
    bt.apply(t, arguments)
  );
}
function pl(t) {
  return function (e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function cy(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function sy(t) {
  return t < 0 ? -t * t : t * t;
}
function Pu(t) {
  var e = t(at, at),
    r = 1;
  function n() {
    return r === 1 ? t(at, at) : r === 0.5 ? t(cy, sy) : t(pl(r), pl(1 / r));
  }
  return (
    (e.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    Rt(e)
  );
}
function ju() {
  var t = Pu(wu());
  return (
    (t.copy = function () {
      return xu(t, ju()).exponent(t.exponent());
    }),
    bt.apply(t, arguments),
    t
  );
}
function fy() {
  return ju.apply(null, arguments).exponent(0.5);
}
function vl(t) {
  return Math.sign(t) * t * t;
}
function dy(t) {
  return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function bd() {
  var t = Mh(),
    e = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = dy(t(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return t.invert(vl(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (t.domain(a), i) : t.domain();
    }),
    (i.range = function (a) {
      return arguments.length ? (t.range((e = Array.from(a, uo)).map(vl)), i) : e.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (t.clamp(a), i) : t.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return bd(t.domain(), e).round(r).clamp(t.clamp()).unknown(n);
    }),
    bt.apply(i, arguments),
    Rt(i)
  );
}
function Od() {
  var t = [],
    e = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, e.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = ry(t, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : e[bi(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = e.indexOf(o);
      return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : t[0], u < r.length ? r[u] : t[t.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return t.slice();
      t = [];
      for (let u of o) u != null && !isNaN((u = +u)) && t.push(u);
      return (t.sort(kn), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((e = Array.from(o)), i()) : e.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return Od().domain(t).range(e).unknown(n);
    }),
    bt.apply(a, arguments)
  );
}
function wd() {
  var t = 0,
    e = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(l) {
    return l != null && l <= l ? i[bi(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * e - (l - r) * t) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (l) {
      return arguments.length ? (([t, e] = l), (t = +t), (e = +e), u()) : [t, e];
    }),
    (o.range = function (l) {
      return arguments.length ? ((r = (i = Array.from(l)).length - 1), u()) : i.slice();
    }),
    (o.invertExtent = function (l) {
      var c = i.indexOf(l);
      return c < 0 ? [NaN, NaN] : c < 1 ? [t, n[0]] : c >= r ? [n[r - 1], e] : [n[c - 1], n[c]];
    }),
    (o.unknown = function (l) {
      return (arguments.length && (a = l), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return wd().domain([t, e]).range(i).unknown(a);
    }),
    bt.apply(Rt(o), arguments)
  );
}
function xd() {
  var t = [0.5],
    e = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? e[bi(t, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(t.length, e.length - 1)), i)
        : t.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(t.length, e.length - 1)), i)
        : e.slice();
    }),
    (i.invertExtent = function (a) {
      var o = e.indexOf(a);
      return [t[o - 1], t[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return xd().domain(t).range(e).unknown(r);
    }),
    bt.apply(i, arguments)
  );
}
function py() {
  return bt.apply(
    Nh(Kh, Uh, Gh, Fh, Wh, zh, qh, Lh, Bh, Rh).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
function Oi() {
  var t = 0,
    e = 1,
    r,
    n,
    i,
    a,
    o = at,
    u = !1,
    l;
  function c(s) {
    return s == null || isNaN((s = +s))
      ? l
      : o(i === 0 ? 0.5 : ((s = (a(s) - r) * i), u ? Math.max(0, Math.min(1, s)) : s));
  }
  ((c.domain = function (s) {
    return arguments.length
      ? (([t, e] = s), (r = a((t = +t))), (n = a((e = +e))), (i = r === n ? 0 : 1 / (n - r)), c)
      : [t, e];
  }),
    (c.clamp = function (s) {
      return arguments.length ? ((u = !!s), c) : u;
    }),
    (c.interpolator = function (s) {
      return arguments.length ? ((o = s), c) : o;
    }));
  function f(s) {
    return function (d) {
      var p, m;
      return arguments.length ? (([p, m] = d), (o = s(p, m)), c) : [o(0), o(1)];
    };
  }
  return (
    (c.range = f(Ou)),
    (c.rangeRound = f(pd)),
    (c.unknown = function (s) {
      return arguments.length ? ((l = s), c) : l;
    }),
    function (s) {
      return ((a = s), (r = s(t)), (n = s(e)), (i = r === n ? 0 : 1 / (n - r)), c);
    }
  );
}
function Ot(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function Sd() {
  var t = Rt(Oi()(at));
  return (
    (t.copy = function () {
      return Ot(t, Sd());
    }),
    st.apply(t, arguments)
  );
}
function Ad() {
  var t = Su(Oi()).domain([1, 10]);
  return (
    (t.copy = function () {
      return Ot(t, Ad()).base(t.base());
    }),
    st.apply(t, arguments)
  );
}
function Pd() {
  var t = Au(Oi());
  return (
    (t.copy = function () {
      return Ot(t, Pd()).constant(t.constant());
    }),
    st.apply(t, arguments)
  );
}
function Eu() {
  var t = Pu(Oi());
  return (
    (t.copy = function () {
      return Ot(t, Eu()).exponent(t.exponent());
    }),
    st.apply(t, arguments)
  );
}
function vy() {
  return Eu.apply(null, arguments).exponent(0.5);
}
function jd() {
  var t = [],
    e = at;
  function r(n) {
    if (n != null && !isNaN((n = +n))) return e((bi(t, n, 1) - 1) / (t.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return t.slice();
      t = [];
      for (let i of n) i != null && !isNaN((i = +i)) && t.push(i);
      return (t.sort(kn), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((e = n), r) : e;
    }),
    (r.range = function () {
      return t.map((n, i) => e(i / (t.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => ty(t, a / n));
    }),
    (r.copy = function () {
      return jd(e).domain(t);
    }),
    st.apply(r, arguments)
  );
}
function wi() {
  var t = 0,
    e = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    l,
    c = at,
    f,
    s = !1,
    d;
  function p(y) {
    return isNaN((y = +y))
      ? d
      : ((y = 0.5 + ((y = +f(y)) - a) * (n * y < n * a ? u : l)),
        c(s ? Math.max(0, Math.min(1, y)) : y));
  }
  ((p.domain = function (y) {
    return arguments.length
      ? (([t, e, r] = y),
        (i = f((t = +t))),
        (a = f((e = +e))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p)
      : [t, e, r];
  }),
    (p.clamp = function (y) {
      return arguments.length ? ((s = !!y), p) : s;
    }),
    (p.interpolator = function (y) {
      return arguments.length ? ((c = y), p) : c;
    }));
  function m(y) {
    return function (v) {
      var g, b, O;
      return arguments.length ? (([g, b, O] = v), (c = ny(y, [g, b, O])), p) : [c(0), c(0.5), c(1)];
    };
  }
  return (
    (p.range = m(Ou)),
    (p.rangeRound = m(pd)),
    (p.unknown = function (y) {
      return arguments.length ? ((d = y), p) : d;
    }),
    function (y) {
      return (
        (f = y),
        (i = y(t)),
        (a = y(e)),
        (o = y(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p
      );
    }
  );
}
function Ed() {
  var t = Rt(wi()(at));
  return (
    (t.copy = function () {
      return Ot(t, Ed());
    }),
    st.apply(t, arguments)
  );
}
function Td() {
  var t = Su(wi()).domain([0.1, 1, 10]);
  return (
    (t.copy = function () {
      return Ot(t, Td()).base(t.base());
    }),
    st.apply(t, arguments)
  );
}
function _d() {
  var t = Au(wi());
  return (
    (t.copy = function () {
      return Ot(t, _d()).constant(t.constant());
    }),
    st.apply(t, arguments)
  );
}
function Tu() {
  var t = Pu(wi());
  return (
    (t.copy = function () {
      return Ot(t, Tu()).exponent(t.exponent());
    }),
    st.apply(t, arguments)
  );
}
function hy() {
  return Tu.apply(null, arguments).exponent(0.5);
}
function On(t, e, r) {
  var n = null,
    i = ce(!0),
    a = null,
    o = bu,
    u = null,
    l = cd(c);
  ((t = typeof t == 'function' ? t : t === void 0 ? yh : ce(+t)),
    (e = typeof e == 'function' ? e : e === void 0 ? ce(0) : ce(+e)),
    (r = typeof r == 'function' ? r : r === void 0 ? mh : ce(+r)));
  function c(s) {
    var d,
      p,
      m,
      y = (s = sd(s)).length,
      v,
      g = !1,
      b,
      O = new Array(y),
      x = new Array(y);
    for (a == null && (u = o((b = l()))), d = 0; d <= y; ++d) {
      if (!(d < y && i((v = s[d]), d, s)) === g)
        if ((g = !g)) ((p = d), u.areaStart(), u.lineStart());
        else {
          for (u.lineEnd(), u.lineStart(), m = d - 1; m >= p; --m) u.point(O[m], x[m]);
          (u.lineEnd(), u.areaEnd());
        }
      g &&
        ((O[d] = +t(v, d, s)),
        (x[d] = +e(v, d, s)),
        u.point(n ? +n(v, d, s) : O[d], r ? +r(v, d, s) : x[d]));
    }
    if (b) return ((u = null), b + '' || null);
  }
  function f() {
    return fd().defined(i).curve(o).context(a);
  }
  return (
    (c.x = function (s) {
      return arguments.length ? ((t = typeof s == 'function' ? s : ce(+s)), (n = null), c) : t;
    }),
    (c.x0 = function (s) {
      return arguments.length ? ((t = typeof s == 'function' ? s : ce(+s)), c) : t;
    }),
    (c.x1 = function (s) {
      return arguments.length
        ? ((n = s == null ? null : typeof s == 'function' ? s : ce(+s)), c)
        : n;
    }),
    (c.y = function (s) {
      return arguments.length ? ((e = typeof s == 'function' ? s : ce(+s)), (r = null), c) : e;
    }),
    (c.y0 = function (s) {
      return arguments.length ? ((e = typeof s == 'function' ? s : ce(+s)), c) : e;
    }),
    (c.y1 = function (s) {
      return arguments.length
        ? ((r = s == null ? null : typeof s == 'function' ? s : ce(+s)), c)
        : r;
    }),
    (c.lineX0 = c.lineY0 =
      function () {
        return f().x(t).y(e);
      }),
    (c.lineY1 = function () {
      return f().x(t).y(r);
    }),
    (c.lineX1 = function () {
      return f().x(n).y(e);
    }),
    (c.defined = function (s) {
      return arguments.length ? ((i = typeof s == 'function' ? s : ce(!!s)), c) : i;
    }),
    (c.curve = function (s) {
      return arguments.length ? ((o = s), a != null && (u = o(a)), c) : o;
    }),
    (c.context = function (s) {
      return arguments.length ? (s == null ? (a = u = null) : (u = o((a = s))), c) : a;
    }),
    c
  );
}
const _u = {
    draw(t, e) {
      const r = Ge(e / ao);
      (t.moveTo(r, 0), t.arc(0, 0, r, 0, gi));
    },
  },
  yy = {
    draw(t, e) {
      const r = Ge(e / 5) / 2;
      (t.moveTo(-3 * r, -r),
        t.lineTo(-r, -r),
        t.lineTo(-r, -3 * r),
        t.lineTo(r, -3 * r),
        t.lineTo(r, -r),
        t.lineTo(3 * r, -r),
        t.lineTo(3 * r, r),
        t.lineTo(r, r),
        t.lineTo(r, 3 * r),
        t.lineTo(-r, 3 * r),
        t.lineTo(-r, r),
        t.lineTo(-3 * r, r),
        t.closePath());
    },
  },
  $d = Ge(1 / 3),
  my = $d * 2,
  gy = {
    draw(t, e) {
      const r = Ge(e / my),
        n = r * $d;
      (t.moveTo(0, -r), t.lineTo(n, 0), t.lineTo(0, r), t.lineTo(-n, 0), t.closePath());
    },
  },
  by = {
    draw(t, e) {
      const r = Ge(e),
        n = -r / 2;
      t.rect(n, n, r, r);
    },
  },
  Oy = 0.8908130915292852,
  Id = Mn(ao / 10) / Mn((7 * ao) / 10),
  wy = Mn(gi / 10) * Id,
  xy = -dd(gi / 10) * Id,
  Sy = {
    draw(t, e) {
      const r = Ge(e * Oy),
        n = wy * r,
        i = xy * r;
      (t.moveTo(0, -r), t.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (gi * a) / 5,
          u = dd(o),
          l = Mn(o);
        (t.lineTo(l * r, -u * r), t.lineTo(u * n - l * i, l * n + u * i));
      }
      t.closePath();
    },
  },
  Wi = Ge(3),
  Ay = {
    draw(t, e) {
      const r = -Ge(e / (Wi * 3));
      (t.moveTo(0, r * 2), t.lineTo(-Wi * r, -r), t.lineTo(Wi * r, -r), t.closePath());
    },
  },
  Ce = -0.5,
  Me = Ge(3) / 2,
  co = 1 / Ge(12),
  Py = (co / 2 + 1) * 3,
  jy = {
    draw(t, e) {
      const r = Ge(e / Py),
        n = r / 2,
        i = r * co,
        a = n,
        o = r * co + r,
        u = -a,
        l = o;
      (t.moveTo(n, i),
        t.lineTo(a, o),
        t.lineTo(u, l),
        t.lineTo(Ce * n - Me * i, Me * n + Ce * i),
        t.lineTo(Ce * a - Me * o, Me * a + Ce * o),
        t.lineTo(Ce * u - Me * l, Me * u + Ce * l),
        t.lineTo(Ce * n + Me * i, Ce * i - Me * n),
        t.lineTo(Ce * a + Me * o, Ce * o - Me * a),
        t.lineTo(Ce * u + Me * l, Ce * l - Me * u),
        t.closePath());
    },
  };
function Ey(t, e) {
  let r = null,
    n = cd(i);
  ((t = typeof t == 'function' ? t : ce(t || _u)),
    (e = typeof e == 'function' ? e : ce(e === void 0 ? 64 : +e)));
  function i() {
    let a;
    if ((r || (r = a = n()), t.apply(this, arguments).draw(r, +e.apply(this, arguments)), a))
      return ((r = null), a + '' || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length ? ((t = typeof a == 'function' ? a : ce(a)), i) : t;
    }),
    (i.size = function (a) {
      return arguments.length ? ((e = typeof a == 'function' ? a : ce(+a)), i) : e;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function Yt(t, e) {
  if ((o = t.length) > 1)
    for (var r = 1, n, i, a = t[e[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = t[e[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function so(t) {
  for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
  return r;
}
function Ty(t, e) {
  return t[e];
}
function _y(t) {
  const e = [];
  return ((e.key = t), e);
}
function $y() {
  var t = ce([]),
    e = so,
    r = Yt,
    n = Ty;
  function i(a) {
    var o = Array.from(t.apply(this, arguments), _y),
      u,
      l = o.length,
      c = -1,
      f;
    for (const s of a) for (u = 0, ++c; u < l; ++u) (o[u][c] = [0, +n(s, o[u].key, c, a)]).data = s;
    for (u = 0, f = sd(e(o)); u < l; ++u) o[f[u]].index = u;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length ? ((t = typeof a == 'function' ? a : ce(Array.from(a))), i) : t;
    }),
    (i.value = function (a) {
      return arguments.length ? ((n = typeof a == 'function' ? a : ce(+a)), i) : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((e = a == null ? so : typeof a == 'function' ? a : ce(Array.from(a))), i)
        : e;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Yt), i) : r;
    }),
    i
  );
}
function Iy(t, e) {
  if ((n = t.length) > 0) {
    for (var r, n, i = 0, a = t[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) t[r][i][1] /= o;
    }
    Yt(t, e);
  }
}
function Cy(t, e) {
  if ((i = t.length) > 0) {
    for (var r = 0, n = t[e[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += t[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Yt(t, e);
  }
}
function My(t, e) {
  if (!(!((o = t.length) > 0) || !((a = (i = t[e[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, c = 0; u < o; ++u) {
        for (
          var f = t[e[u]], s = f[n][1] || 0, d = f[n - 1][1] || 0, p = (s - d) / 2, m = 0;
          m < u;
          ++m
        ) {
          var y = t[e[m]],
            v = y[n][1] || 0,
            g = y[n - 1][1] || 0;
          p += v - g;
        }
        ((l += s), (c += p * s));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), l && (r -= c / l));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), Yt(t, e));
  }
}
var ky = Uv();
const Ne = ie(ky);
var Fi, hl;
function Dy() {
  if (hl) return Fi;
  hl = 1;
  function t(e) {
    return e == null;
  }
  return ((Fi = t), Fi);
}
var Ny = Dy();
const X = ie(Ny);
var Ry = Kv();
const Mt = ie(Ry);
var By = Vv();
const V = ie(By);
var Ly = ph();
const hr = ie(Ly);
var Gi, yl;
function Cd() {
  if (yl) return Gi;
  yl = 1;
  var t = od(),
    e = ud(),
    r = '[object Number]';
  function n(i) {
    return typeof i == 'number' || (e(i) && t(i) == r);
  }
  return ((Gi = n), Gi);
}
var Ui, ml;
function qy() {
  if (ml) return Ui;
  ml = 1;
  var t = Cd();
  function e(r) {
    return t(r) && r != +r;
  }
  return ((Ui = e), Ui);
}
var zy = qy();
const yn = ie(zy);
var Wy = Cd();
const Fy = ie(Wy);
var ze = function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  },
  jt = function (e) {
    return Mt(e) && e.indexOf('%') === e.length - 1;
  },
  R = function (e) {
    return Fy(e) && !yn(e);
  },
  Gy = function (e) {
    return X(e);
  },
  ve = function (e) {
    return R(e) || Mt(e);
  },
  Uy = 0,
  xi = function (e) {
    var r = ++Uy;
    return ''.concat(e || '').concat(r);
  },
  We = function (e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!R(e) && !Mt(e)) return n;
    var a;
    if (jt(e)) {
      var o = e.indexOf('%');
      a = (r * parseFloat(e.slice(0, o))) / 100;
    } else a = +e;
    return (yn(a) && (a = n), i && a > r && (a = r), a);
  },
  yt = function (e) {
    if (!e) return null;
    var r = Object.keys(e);
    return r && r.length ? e[r[0]] : null;
  },
  Ky = function (e) {
    if (!Array.isArray(e)) return !1;
    for (var r = e.length, n = {}, i = 0; i < r; i++)
      if (!n[e[i]]) n[e[i]] = !0;
      else return !0;
    return !1;
  },
  Wt = function (e, r) {
    return R(e) && R(r)
      ? function (n) {
          return e + n * (r - e);
        }
      : function () {
          return r;
        };
  };
function fo(t, e, r) {
  return !t || !t.length
    ? null
    : t.find(function (n) {
        return n && (typeof e == 'function' ? e(n) : Ne(n, e)) === r;
      });
}
var Vy = function (e, r) {
  return R(e) && R(r)
    ? e - r
    : Mt(e) && Mt(r)
      ? e.localeCompare(r)
      : e instanceof Date && r instanceof Date
        ? e.getTime() - r.getTime()
        : String(e).localeCompare(String(r));
};
function Xt(t, e) {
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])) return !1;
  for (var n in e) if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n)) return !1;
  return !0;
}
function po(t) {
  '@babel/helpers - typeof';
  return (
    (po =
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
    po(t)
  );
}
var Xy = ['viewBox', 'children'],
  Hy = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'className',
    'color',
    'height',
    'id',
    'lang',
    'max',
    'media',
    'method',
    'min',
    'name',
    'style',
    'target',
    'width',
    'role',
    'tabIndex',
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baselineShift',
    'baseProfile',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'horizAdvX',
    'horizOriginX',
    'href',
    'ideographic',
    'imageRendering',
    'in2',
    'in',
    'intercept',
    'k1',
    'k2',
    'k3',
    'k4',
    'k',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'vHanging',
    'vIdeographic',
    'viewTarget',
    'visibility',
    'vMathematical',
    'widths',
    'wordSpacing',
    'writingMode',
    'x1',
    'x2',
    'x',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlLang',
    'xmlns',
    'xmlnsXlink',
    'xmlSpace',
    'y1',
    'y2',
    'y',
    'yChannelSelector',
    'z',
    'zoomAndPan',
    'ref',
    'key',
    'angle',
  ],
  gl = ['points', 'pathLength'],
  Ki = { svg: Xy, polygon: gl, polyline: gl },
  $u = [
    'dangerouslySetInnerHTML',
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture',
  ],
  Dn = function (e, r) {
    if (!e || typeof e == 'function' || typeof e == 'boolean') return null;
    var n = e;
    if ((M.isValidElement(e) && (n = e.props), !hr(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        $u.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  Yy = function (e, r, n) {
    return function (i) {
      return (e(r, n, i), null);
    };
  },
  Nn = function (e, r, n) {
    if (!hr(e) || po(e) !== 'object') return null;
    var i = null;
    return (
      Object.keys(e).forEach(function (a) {
        var o = e[a];
        $u.includes(a) && typeof o == 'function' && (i || (i = {}), (i[a] = Yy(o, r, n)));
      }),
      i
    );
  },
  Zy = ['children'],
  Jy = ['children'];
function bl(t, e) {
  if (t == null) return {};
  var r = Qy(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function Qy(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var Ol = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
    contextmenu: 'onContextMenu',
    dblclick: 'onDoubleClick',
  },
  ut = function (e) {
    return typeof e == 'string' ? e : e ? e.displayName || e.name || 'Component' : '';
  },
  wl = null,
  Vi = null,
  Iu = function t(e) {
    if (e === wl && Array.isArray(Vi)) return Vi;
    var r = [];
    return (
      M.Children.forEach(e, function (n) {
        X(n) || (zv.isFragment(n) ? (r = r.concat(t(n.props.children))) : r.push(n));
      }),
      (Vi = r),
      (wl = e),
      r
    );
  };
function Fe(t, e) {
  var r = [],
    n = [];
  return (
    Array.isArray(e)
      ? (n = e.map(function (i) {
          return ut(i);
        }))
      : (n = [ut(e)]),
    Iu(t).forEach(function (i) {
      var a = Ne(i, 'type.displayName') || Ne(i, 'type.name');
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function _e(t, e) {
  var r = Fe(t, e);
  return r && r[0];
}
var xl = function (e) {
    if (!e || !e.props) return !1;
    var r = e.props,
      n = r.width,
      i = r.height;
    return !(!R(n) || n <= 0 || !R(i) || i <= 0);
  },
  em = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ],
  tm = function (e) {
    return e && e.type && Mt(e.type) && em.indexOf(e.type) >= 0;
  },
  rm = function (e, r, n, i) {
    var a,
      o = (a = Ki?.[i]) !== null && a !== void 0 ? a : [];
    return (
      r.startsWith('data-') ||
      (!V(e) && ((i && o.includes(r)) || Hy.includes(r))) ||
      (n && $u.includes(r))
    );
  },
  H = function (e, r, n) {
    if (!e || typeof e == 'function' || typeof e == 'boolean') return null;
    var i = e;
    if ((M.isValidElement(e) && (i = e.props), !hr(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        rm((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
      }),
      a
    );
  },
  vo = function t(e, r) {
    if (e === r) return !0;
    var n = M.Children.count(e);
    if (n !== M.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return Sl(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = e[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!t(a, o)) return !1;
      } else if (!Sl(a, o)) return !1;
    }
    return !0;
  },
  Sl = function (e, r) {
    if (X(e) && X(r)) return !0;
    if (!X(e) && !X(r)) {
      var n = e.props || {},
        i = n.children,
        a = bl(n, Zy),
        o = r.props || {},
        u = o.children,
        l = bl(o, Jy);
      return i && u ? Xt(a, l) && vo(i, u) : !i && !u ? Xt(a, l) : !1;
    }
    return !1;
  },
  Al = function (e, r) {
    var n = [],
      i = {};
    return (
      Iu(e).forEach(function (a, o) {
        if (tm(a)) n.push(a);
        else if (a) {
          var u = ut(a.type),
            l = r[u] || {},
            c = l.handler,
            f = l.once;
          if (c && (!f || !i[u])) {
            var s = c(a, u, o);
            (n.push(s), (i[u] = !0));
          }
        }
      }),
      n
    );
  },
  nm = function (e) {
    var r = e && e.type;
    return r && Ol[r] ? Ol[r] : null;
  },
  im = function (e, r) {
    return Iu(r).indexOf(e);
  },
  am = ['children', 'width', 'height', 'viewBox', 'className', 'style', 'title', 'desc'];
function ho() {
  return (
    (ho = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ho.apply(this, arguments)
  );
}
function om(t, e) {
  if (t == null) return {};
  var r = um(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function um(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function yo(t) {
  var e = t.children,
    r = t.width,
    n = t.height,
    i = t.viewBox,
    a = t.className,
    o = t.style,
    u = t.title,
    l = t.desc,
    c = om(t, am),
    f = i || { width: r, height: n, x: 0, y: 0 },
    s = Y('recharts-surface', a);
  return j.createElement(
    'svg',
    ho({}, H(c, !0, 'svg'), {
      className: s,
      width: r,
      height: n,
      style: o,
      viewBox: ''.concat(f.x, ' ').concat(f.y, ' ').concat(f.width, ' ').concat(f.height),
    }),
    j.createElement('title', null, u),
    j.createElement('desc', null, l),
    e,
  );
}
var lm = ['children', 'className'];
function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    mo.apply(this, arguments)
  );
}
function cm(t, e) {
  if (t == null) return {};
  var r = sm(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function sm(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var me = j.forwardRef(function (t, e) {
    var r = t.children,
      n = t.className,
      i = cm(t, lm),
      a = Y('recharts-layer', n);
    return j.createElement('g', mo({ className: a }, H(i, !0), { ref: e }), r);
  }),
  lt = function (e, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
  },
  Xi,
  Pl;
function fm() {
  if (Pl) return Xi;
  Pl = 1;
  function t(e, r, n) {
    var i = -1,
      a = e.length;
    (r < 0 && (r = -r > a ? 0 : a + r),
      (n = n > a ? a : n),
      n < 0 && (n += a),
      (a = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0));
    for (var o = Array(a); ++i < a; ) o[i] = e[i + r];
    return o;
  }
  return ((Xi = t), Xi);
}
var Hi, jl;
function dm() {
  if (jl) return Hi;
  jl = 1;
  var t = fm();
  function e(r, n, i) {
    var a = r.length;
    return ((i = i === void 0 ? a : i), !n && i >= a ? r : t(r, n, i));
  }
  return ((Hi = e), Hi);
}
var Yi, El;
function Md() {
  if (El) return Yi;
  El = 1;
  var t = '\\ud800-\\udfff',
    e = '\\u0300-\\u036f',
    r = '\\ufe20-\\ufe2f',
    n = '\\u20d0-\\u20ff',
    i = e + r + n,
    a = '\\ufe0e\\ufe0f',
    o = '\\u200d',
    u = RegExp('[' + o + t + i + a + ']');
  function l(c) {
    return u.test(c);
  }
  return ((Yi = l), Yi);
}
var Zi, Tl;
function pm() {
  if (Tl) return Zi;
  Tl = 1;
  function t(e) {
    return e.split('');
  }
  return ((Zi = t), Zi);
}
var Ji, _l;
function vm() {
  if (_l) return Ji;
  _l = 1;
  var t = '\\ud800-\\udfff',
    e = '\\u0300-\\u036f',
    r = '\\ufe20-\\ufe2f',
    n = '\\u20d0-\\u20ff',
    i = e + r + n,
    a = '\\ufe0e\\ufe0f',
    o = '[' + t + ']',
    u = '[' + i + ']',
    l = '\\ud83c[\\udffb-\\udfff]',
    c = '(?:' + u + '|' + l + ')',
    f = '[^' + t + ']',
    s = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    d = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    p = '\\u200d',
    m = c + '?',
    y = '[' + a + ']?',
    v = '(?:' + p + '(?:' + [f, s, d].join('|') + ')' + y + m + ')*',
    g = y + m + v,
    b = '(?:' + [f + u + '?', u, s, d, o].join('|') + ')',
    O = RegExp(l + '(?=' + l + ')|' + b + g, 'g');
  function x(h) {
    return h.match(O) || [];
  }
  return ((Ji = x), Ji);
}
var Qi, $l;
function hm() {
  if ($l) return Qi;
  $l = 1;
  var t = pm(),
    e = Md(),
    r = vm();
  function n(i) {
    return e(i) ? r(i) : t(i);
  }
  return ((Qi = n), Qi);
}
var ea, Il;
function ym() {
  if (Il) return ea;
  Il = 1;
  var t = dm(),
    e = Md(),
    r = hm(),
    n = Xv();
  function i(a) {
    return function (o) {
      o = n(o);
      var u = e(o) ? r(o) : void 0,
        l = u ? u[0] : o.charAt(0),
        c = u ? t(u, 1).join('') : o.slice(1);
      return l[a]() + c;
    };
  }
  return ((ea = i), ea);
}
var ta, Cl;
function mm() {
  if (Cl) return ta;
  Cl = 1;
  var t = ym(),
    e = t('toUpperCase');
  return ((ta = e), ta);
}
var gm = mm();
const Si = ie(gm);
function kr(t) {
  '@babel/helpers - typeof';
  return (
    (kr =
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
    kr(t)
  );
}
var bm = ['type', 'size', 'sizeType'];
function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    go.apply(this, arguments)
  );
}
function Ml(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function kl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ml(Object(r), !0).forEach(function (n) {
          Om(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ml(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Om(t, e, r) {
  return (
    (e = wm(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function wm(t) {
  var e = xm(t, 'string');
  return kr(e) == 'symbol' ? e : e + '';
}
function xm(t, e) {
  if (kr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (kr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Sm(t, e) {
  if (t == null) return {};
  var r = Am(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function Am(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var kd = {
    symbolCircle: _u,
    symbolCross: yy,
    symbolDiamond: gy,
    symbolSquare: by,
    symbolStar: Sy,
    symbolTriangle: Ay,
    symbolWye: jy,
  },
  Pm = Math.PI / 180,
  jm = function (e) {
    var r = 'symbol'.concat(Si(e));
    return kd[r] || _u;
  },
  Em = function (e, r, n) {
    if (r === 'area') return e;
    switch (n) {
      case 'cross':
        return (5 * e * e) / 9;
      case 'diamond':
        return (0.5 * e * e) / Math.sqrt(3);
      case 'square':
        return e * e;
      case 'star': {
        var i = 18 * Pm;
        return 1.25 * e * e * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
      }
      case 'triangle':
        return (Math.sqrt(3) * e * e) / 4;
      case 'wye':
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  Tm = function (e, r) {
    kd['symbol'.concat(Si(e))] = r;
  },
  Cu = function (e) {
    var r = e.type,
      n = r === void 0 ? 'circle' : r,
      i = e.size,
      a = i === void 0 ? 64 : i,
      o = e.sizeType,
      u = o === void 0 ? 'area' : o,
      l = Sm(e, bm),
      c = kl(kl({}, l), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var v = jm(n),
          g = Ey()
            .type(v)
            .size(Em(a, u, n));
        return g();
      },
      s = c.className,
      d = c.cx,
      p = c.cy,
      m = H(c, !0);
    return d === +d && p === +p && a === +a
      ? j.createElement(
          'path',
          go({}, m, {
            className: Y('recharts-symbols', s),
            transform: 'translate('.concat(d, ', ').concat(p, ')'),
            d: f(),
          }),
        )
      : null;
  };
Cu.registerSymbol = Tm;
function Zt(t) {
  '@babel/helpers - typeof';
  return (
    (Zt =
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
    Zt(t)
  );
}
function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    bo.apply(this, arguments)
  );
}
function Dl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function _m(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Dl(Object(r), !0).forEach(function (n) {
          Dr(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Dl(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function $m(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Im(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Nd(n.key), n));
  }
}
function Cm(t, e, r) {
  return (e && Im(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function Mm(t, e, r) {
  return (
    (e = Rn(e)),
    km(t, Dd() ? Reflect.construct(e, r || [], Rn(t).constructor) : e.apply(t, r))
  );
}
function km(t, e) {
  if (e && (Zt(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Dm(t);
}
function Dm(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Dd() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dd = function () {
    return !!t;
  })();
}
function Rn(t) {
  return (
    (Rn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Rn(t)
  );
}
function Nm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Oo(t, e));
}
function Oo(t, e) {
  return (
    (Oo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Oo(t, e)
  );
}
function Dr(t, e, r) {
  return (
    (e = Nd(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Nd(t) {
  var e = Rm(t, 'string');
  return Zt(e) == 'symbol' ? e : e + '';
}
function Rm(t, e) {
  if (Zt(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Zt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var ke = 32,
  Mu = (function (t) {
    function e() {
      return ($m(this, e), Mm(this, e, arguments));
    }
    return (
      Nm(e, t),
      Cm(e, [
        {
          key: 'renderIcon',
          value: function (n) {
            var i = this.props.inactiveColor,
              a = ke / 2,
              o = ke / 6,
              u = ke / 3,
              l = n.inactive ? i : n.color;
            if (n.type === 'plainline')
              return j.createElement('line', {
                strokeWidth: 4,
                fill: 'none',
                stroke: l,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: ke,
                y2: a,
                className: 'recharts-legend-icon',
              });
            if (n.type === 'line')
              return j.createElement('path', {
                strokeWidth: 4,
                fill: 'none',
                stroke: l,
                d: 'M0,'
                  .concat(a, 'h')
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ',')
                  .concat(o, ',0,1,1,')
                  .concat(2 * u, ',')
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(ke, 'M')
                  .concat(2 * u, ',')
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ',')
                  .concat(o, ',0,1,1,')
                  .concat(u, ',')
                  .concat(a),
                className: 'recharts-legend-icon',
              });
            if (n.type === 'rect')
              return j.createElement('path', {
                stroke: 'none',
                fill: l,
                d: 'M0,'
                  .concat(ke / 8, 'h')
                  .concat(ke, 'v')
                  .concat((ke * 3) / 4, 'h')
                  .concat(-ke, 'z'),
                className: 'recharts-legend-icon',
              });
            if (j.isValidElement(n.legendIcon)) {
              var c = _m({}, n);
              return (delete c.legendIcon, j.cloneElement(n.legendIcon, c));
            }
            return j.createElement(Cu, {
              fill: l,
              cx: a,
              cy: a,
              size: ke,
              sizeType: 'diameter',
              type: n.type,
            });
          },
        },
        {
          key: 'renderItems',
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              l = i.formatter,
              c = i.inactiveColor,
              f = { x: 0, y: 0, width: ke, height: ke },
              s = { display: u === 'horizontal' ? 'inline-block' : 'block', marginRight: 10 },
              d = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };
            return a.map(function (p, m) {
              var y = p.formatter || l,
                v = Y(
                  Dr(
                    Dr({ 'recharts-legend-item': !0 }, 'legend-item-'.concat(m), !0),
                    'inactive',
                    p.inactive,
                  ),
                );
              if (p.type === 'none') return null;
              var g = V(p.value) ? null : p.value;
              lt(
                !V(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var b = p.inactive ? c : p.color;
              return j.createElement(
                'li',
                bo({ className: v, style: s, key: 'legend-item-'.concat(m) }, Nn(n.props, p, m)),
                j.createElement(yo, { width: o, height: o, viewBox: f, style: d }, n.renderIcon(p)),
                j.createElement(
                  'span',
                  { className: 'recharts-legend-item-text', style: { color: b } },
                  y ? y(g, p, m) : g,
                ),
              );
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = { padding: 0, margin: 0, textAlign: a === 'horizontal' ? o : 'left' };
            return j.createElement(
              'ul',
              { className: 'recharts-default-legend', style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(M.PureComponent);
Dr(Mu, 'displayName', 'Legend');
Dr(Mu, 'defaultProps', {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc',
});
var ra, Nl;
function Rd() {
  if (Nl) return ra;
  Nl = 1;
  function t(e, r, n, i) {
    for (var a = e.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; ) if (r(e[o], o, e)) return o;
    return -1;
  }
  return ((ra = t), ra);
}
var na, Rl;
function Bm() {
  if (Rl) return na;
  Rl = 1;
  function t(e) {
    return e !== e;
  }
  return ((na = t), na);
}
var ia, Bl;
function Lm() {
  if (Bl) return ia;
  Bl = 1;
  function t(e, r, n) {
    for (var i = n - 1, a = e.length; ++i < a; ) if (e[i] === r) return i;
    return -1;
  }
  return ((ia = t), ia);
}
var aa, Ll;
function qm() {
  if (Ll) return aa;
  Ll = 1;
  var t = Rd(),
    e = Bm(),
    r = Lm();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : t(i, e, o);
  }
  return ((aa = n), aa);
}
var oa, ql;
function zm() {
  if (ql) return oa;
  ql = 1;
  var t = qm();
  function e(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && t(r, n, 0) > -1;
  }
  return ((oa = e), oa);
}
var ua, zl;
function Wm() {
  if (zl) return ua;
  zl = 1;
  function t(e, r, n) {
    for (var i = -1, a = e == null ? 0 : e.length; ++i < a; ) if (n(r, e[i])) return !0;
    return !1;
  }
  return ((ua = t), ua);
}
var la, Wl;
function Fm() {
  if (Wl) return la;
  Wl = 1;
  function t() {}
  return ((la = t), la);
}
var ca, Fl;
function Gm() {
  if (Fl) return ca;
  Fl = 1;
  var t = Hv(),
    e = Fm(),
    r = nd(),
    n = 1 / 0,
    i =
      t && 1 / r(new t([, -0]))[1] == n
        ? function (a) {
            return new t(a);
          }
        : e;
  return ((ca = i), ca);
}
var sa, Gl;
function Um() {
  if (Gl) return sa;
  Gl = 1;
  var t = Yv(),
    e = zm(),
    r = Wm(),
    n = Zv(),
    i = Gm(),
    a = nd(),
    o = 200;
  function u(l, c, f) {
    var s = -1,
      d = e,
      p = l.length,
      m = !0,
      y = [],
      v = y;
    if (f) ((m = !1), (d = r));
    else if (p >= o) {
      var g = c ? null : i(l);
      if (g) return a(g);
      ((m = !1), (d = n), (v = new t()));
    } else v = c ? [] : y;
    e: for (; ++s < p; ) {
      var b = l[s],
        O = c ? c(b) : b;
      if (((b = f || b !== 0 ? b : 0), m && O === O)) {
        for (var x = v.length; x--; ) if (v[x] === O) continue e;
        (c && v.push(O), y.push(b));
      } else d(v, O, f) || (v !== y && v.push(O), y.push(b));
    }
    return y;
  }
  return ((sa = u), sa);
}
var fa, Ul;
function Km() {
  if (Ul) return fa;
  Ul = 1;
  var t = Nt(),
    e = Um();
  function r(n, i) {
    return n && n.length ? e(n, t(i, 2)) : [];
  }
  return ((fa = r), fa);
}
var Vm = Km();
const Kl = ie(Vm);
function Bd(t, e, r) {
  return e === !0 ? Kl(t, r) : V(e) ? Kl(t, e) : t;
}
function Jt(t) {
  '@babel/helpers - typeof';
  return (
    (Jt =
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
    Jt(t)
  );
}
var Xm = ['ref'];
function Vl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function nt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vl(Object(r), !0).forEach(function (n) {
          Ai(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Vl(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Hm(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Xl(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, qd(n.key), n));
  }
}
function Ym(t, e, r) {
  return (
    e && Xl(t.prototype, e),
    r && Xl(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function Zm(t, e, r) {
  return (
    (e = Bn(e)),
    Jm(t, Ld() ? Reflect.construct(e, r || [], Bn(t).constructor) : e.apply(t, r))
  );
}
function Jm(t, e) {
  if (e && (Jt(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Qm(t);
}
function Qm(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ld() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ld = function () {
    return !!t;
  })();
}
function Bn(t) {
  return (
    (Bn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bn(t)
  );
}
function eg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && wo(t, e));
}
function wo(t, e) {
  return (
    (wo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wo(t, e)
  );
}
function Ai(t, e, r) {
  return (
    (e = qd(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function qd(t) {
  var e = tg(t, 'string');
  return Jt(e) == 'symbol' ? e : e + '';
}
function tg(t, e) {
  if (Jt(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Jt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function rg(t, e) {
  if (t == null) return {};
  var r = ng(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function ng(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function ig(t) {
  return t.value;
}
function ag(t, e) {
  if (j.isValidElement(t)) return j.cloneElement(t, e);
  if (typeof t == 'function') return j.createElement(t, e);
  e.ref;
  var r = rg(e, Xm);
  return j.createElement(Mu, r);
}
var Hl = 1,
  _t = (function (t) {
    function e() {
      var r;
      Hm(this, e);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = Zm(this, e, [].concat(i))),
        Ai(r, 'lastBoundingBox', { width: -1, height: -1 }),
        r
      );
    }
    return (
      eg(e, t),
      Ym(
        e,
        [
          {
            key: 'componentDidMount',
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: 'getBBox',
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: 'updateBBox',
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Hl ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Hl) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: 'getBBoxSnapshot',
            value: function () {
              return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0
                ? nt({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: 'getDefaultPosition',
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                l = i.margin,
                c = i.chartWidth,
                f = i.chartHeight,
                s,
                d;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
              )
                if (o === 'center' && a === 'vertical') {
                  var p = this.getBBoxSnapshot();
                  s = { left: ((c || 0) - p.width) / 2 };
                } else
                  s = o === 'right' ? { right: (l && l.right) || 0 } : { left: (l && l.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
              )
                if (u === 'middle') {
                  var m = this.getBBoxSnapshot();
                  d = { top: ((f || 0) - m.height) / 2 };
                } else
                  d =
                    u === 'bottom' ? { bottom: (l && l.bottom) || 0 } : { top: (l && l.top) || 0 };
              return nt(nt({}, s), d);
            },
          },
          {
            key: 'render',
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                l = i.wrapperStyle,
                c = i.payloadUniqBy,
                f = i.payload,
                s = nt(
                  nt(
                    { position: 'absolute', width: o || 'auto', height: u || 'auto' },
                    this.getDefaultPosition(l),
                  ),
                  l,
                );
              return j.createElement(
                'div',
                {
                  className: 'recharts-legend-wrapper',
                  style: s,
                  ref: function (p) {
                    n.wrapperNode = p;
                  },
                },
                ag(a, nt(nt({}, this.props), {}, { payload: Bd(f, c, ig) })),
              );
            },
          },
        ],
        [
          {
            key: 'getWithHeight',
            value: function (n, i) {
              var a = nt(nt({}, this.defaultProps), n.props),
                o = a.layout;
              return o === 'vertical' && R(n.props.height)
                ? { height: n.props.height }
                : o === 'horizontal'
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(M.PureComponent);
Ai(_t, 'displayName', 'Legend');
Ai(_t, 'defaultProps', {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom',
});
var da, Yl;
function og() {
  if (Yl) return da;
  Yl = 1;
  var t = vh(),
    e = Jv(),
    r = yi(),
    n = t ? t.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || e(a) || !!(n && a && a[n]);
  }
  return ((da = i), da);
}
var pa, Zl;
function zd() {
  if (Zl) return pa;
  Zl = 1;
  var t = Qv(),
    e = og();
  function r(n, i, a, o, u) {
    var l = -1,
      c = n.length;
    for (a || (a = e), u || (u = []); ++l < c; ) {
      var f = n[l];
      i > 0 && a(f) ? (i > 1 ? r(f, i - 1, a, o, u) : t(u, f)) : o || (u[u.length] = f);
    }
    return u;
  }
  return ((pa = r), pa);
}
var va, Jl;
function ug() {
  if (Jl) return va;
  Jl = 1;
  function t(e, r) {
    var n = e.length;
    for (e.sort(r); n--; ) e[n] = e[n].value;
    return e;
  }
  return ((va = t), va);
}
var ha, Ql;
function lg() {
  if (Ql) return ha;
  Ql = 1;
  var t = ld();
  function e(r, n) {
    if (r !== n) {
      var i = r !== void 0,
        a = r === null,
        o = r === r,
        u = t(r),
        l = n !== void 0,
        c = n === null,
        f = n === n,
        s = t(n);
      if (
        (!c && !s && !u && r > n) ||
        (u && l && f && !c && !s) ||
        (a && l && f) ||
        (!i && f) ||
        !o
      )
        return 1;
      if (
        (!a && !u && !s && r < n) ||
        (s && i && o && !a && !u) ||
        (c && i && o) ||
        (!l && o) ||
        !f
      )
        return -1;
    }
    return 0;
  }
  return ((ha = e), ha);
}
var ya, ec;
function cg() {
  if (ec) return ya;
  ec = 1;
  var t = lg();
  function e(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, l = o.length, c = i.length; ++a < l; ) {
      var f = t(o[a], u[a]);
      if (f) {
        if (a >= c) return f;
        var s = i[a];
        return f * (s == 'desc' ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return ((ya = e), ya);
}
var ma, tc;
function sg() {
  if (tc) return ma;
  tc = 1;
  var t = rh(),
    e = eh(),
    r = Nt(),
    n = th(),
    i = ug(),
    a = nh(),
    o = cg(),
    u = gu(),
    l = yi();
  function c(f, s, d) {
    s.length
      ? (s = t(s, function (y) {
          return l(y)
            ? function (v) {
                return e(v, y.length === 1 ? y[0] : y);
              }
            : y;
        }))
      : (s = [u]);
    var p = -1;
    s = t(s, a(r));
    var m = n(f, function (y, v, g) {
      var b = t(s, function (O) {
        return O(y);
      });
      return { criteria: b, index: ++p, value: y };
    });
    return i(m, function (y, v) {
      return o(y, v, d);
    });
  }
  return ((ma = c), ma);
}
var ga, rc;
function fg() {
  if (rc) return ga;
  rc = 1;
  var t = zd(),
    e = sg(),
    r = ih(),
    n = mi(),
    i = r(function (a, o) {
      if (a == null) return [];
      var u = o.length;
      return (
        u > 1 && n(a, o[0], o[1]) ? (o = []) : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]),
        e(a, t(o, 1), [])
      );
    });
  return ((ga = i), ga);
}
var dg = fg();
const ku = ie(dg);
function Nr(t) {
  '@babel/helpers - typeof';
  return (
    (Nr =
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
    Nr(t)
  );
}
function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    xo.apply(this, arguments)
  );
}
function pg(t, e) {
  return mg(t) || yg(t, e) || hg(t, e) || vg();
}
function vg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hg(t, e) {
  if (t) {
    if (typeof t == 'string') return nc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nc(t, e);
  }
}
function nc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function yg(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function mg(t) {
  if (Array.isArray(t)) return t;
}
function ic(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ba(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ic(Object(r), !0).forEach(function (n) {
          gg(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ic(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function gg(t, e, r) {
  return (
    (e = bg(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function bg(t) {
  var e = Og(t, 'string');
  return Nr(e) == 'symbol' ? e : e + '';
}
function Og(t, e) {
  if (Nr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Nr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function wg(t) {
  return Array.isArray(t) && ve(t[0]) && ve(t[1]) ? t.join(' ~ ') : t;
}
var xg = function (e) {
  var r = e.separator,
    n = r === void 0 ? ' : ' : r,
    i = e.contentStyle,
    a = i === void 0 ? {} : i,
    o = e.itemStyle,
    u = o === void 0 ? {} : o,
    l = e.labelStyle,
    c = l === void 0 ? {} : l,
    f = e.payload,
    s = e.formatter,
    d = e.itemSorter,
    p = e.wrapperClassName,
    m = e.labelClassName,
    y = e.label,
    v = e.labelFormatter,
    g = e.accessibilityLayer,
    b = g === void 0 ? !1 : g,
    O = function () {
      if (f && f.length) {
        var E = { padding: 0, margin: 0 },
          $ = (d ? ku(f, d) : f).map(function (k, C) {
            if (k.type === 'none') return null;
            var D = ba(
                { display: 'block', paddingTop: 4, paddingBottom: 4, color: k.color || '#000' },
                u,
              ),
              N = k.formatter || s || wg,
              B = k.value,
              z = k.name,
              W = B,
              U = z;
            if (N && W != null && U != null) {
              var L = N(B, z, k, C, f);
              if (Array.isArray(L)) {
                var K = pg(L, 2);
                ((W = K[0]), (U = K[1]));
              } else W = L;
            }
            return j.createElement(
              'li',
              { className: 'recharts-tooltip-item', key: 'tooltip-item-'.concat(C), style: D },
              ve(U)
                ? j.createElement('span', { className: 'recharts-tooltip-item-name' }, U)
                : null,
              ve(U)
                ? j.createElement('span', { className: 'recharts-tooltip-item-separator' }, n)
                : null,
              j.createElement('span', { className: 'recharts-tooltip-item-value' }, W),
              j.createElement('span', { className: 'recharts-tooltip-item-unit' }, k.unit || ''),
            );
          });
        return j.createElement('ul', { className: 'recharts-tooltip-item-list', style: E }, $);
      }
      return null;
    },
    x = ba(
      {
        margin: 0,
        padding: 10,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        whiteSpace: 'nowrap',
      },
      a,
    ),
    h = ba({ margin: 0 }, c),
    w = !X(y),
    S = w ? y : '',
    A = Y('recharts-default-tooltip', p),
    P = Y('recharts-tooltip-label', m);
  w && v && f !== void 0 && f !== null && (S = v(y, f));
  var I = b ? { 'role': 'status', 'aria-live': 'assertive' } : {};
  return j.createElement(
    'div',
    xo({ className: A, style: x }, I),
    j.createElement('p', { className: P, style: h }, j.isValidElement(S) ? S : ''.concat(S)),
    O(),
  );
};
function Rr(t) {
  '@babel/helpers - typeof';
  return (
    (Rr =
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
    Rr(t)
  );
}
function wn(t, e, r) {
  return (
    (e = Sg(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Sg(t) {
  var e = Ag(t, 'string');
  return Rr(e) == 'symbol' ? e : e + '';
}
function Ag(t, e) {
  if (Rr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Rr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var Ar = 'recharts-tooltip-wrapper',
  Pg = { visibility: 'hidden' };
function jg(t) {
  var e = t.coordinate,
    r = t.translateX,
    n = t.translateY;
  return Y(
    Ar,
    wn(
      wn(
        wn(
          wn({}, ''.concat(Ar, '-right'), R(r) && e && R(e.x) && r >= e.x),
          ''.concat(Ar, '-left'),
          R(r) && e && R(e.x) && r < e.x,
        ),
        ''.concat(Ar, '-bottom'),
        R(n) && e && R(e.y) && n >= e.y,
      ),
      ''.concat(Ar, '-top'),
      R(n) && e && R(e.y) && n < e.y,
    ),
  );
}
function ac(t) {
  var e = t.allowEscapeViewBox,
    r = t.coordinate,
    n = t.key,
    i = t.offsetTopLeft,
    a = t.position,
    o = t.reverseDirection,
    u = t.tooltipDimension,
    l = t.viewBox,
    c = t.viewBoxDimension;
  if (a && R(a[n])) return a[n];
  var f = r[n] - u - i,
    s = r[n] + i;
  if (e[n]) return o[n] ? f : s;
  if (o[n]) {
    var d = f,
      p = l[n];
    return d < p ? Math.max(s, l[n]) : Math.max(f, l[n]);
  }
  var m = s + u,
    y = l[n] + c;
  return m > y ? Math.max(f, l[n]) : Math.max(s, l[n]);
}
function Eg(t) {
  var e = t.translateX,
    r = t.translateY,
    n = t.useTranslate3d;
  return {
    transform: n
      ? 'translate3d('.concat(e, 'px, ').concat(r, 'px, 0)')
      : 'translate('.concat(e, 'px, ').concat(r, 'px)'),
  };
}
function Tg(t) {
  var e = t.allowEscapeViewBox,
    r = t.coordinate,
    n = t.offsetTopLeft,
    i = t.position,
    a = t.reverseDirection,
    o = t.tooltipBox,
    u = t.useTranslate3d,
    l = t.viewBox,
    c,
    f,
    s;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = ac({
          allowEscapeViewBox: e,
          coordinate: r,
          key: 'x',
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: l,
          viewBoxDimension: l.width,
        })),
        (s = ac({
          allowEscapeViewBox: e,
          coordinate: r,
          key: 'y',
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: l,
          viewBoxDimension: l.height,
        })),
        (c = Eg({ translateX: f, translateY: s, useTranslate3d: u })))
      : (c = Pg),
    { cssProperties: c, cssClasses: jg({ translateX: f, translateY: s, coordinate: r }) }
  );
}
function Qt(t) {
  '@babel/helpers - typeof';
  return (
    (Qt =
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
    Qt(t)
  );
}
function oc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function uc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? oc(Object(r), !0).forEach(function (n) {
          Ao(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : oc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function _g(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function $g(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Fd(n.key), n));
  }
}
function Ig(t, e, r) {
  return (e && $g(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function Cg(t, e, r) {
  return (
    (e = Ln(e)),
    Mg(t, Wd() ? Reflect.construct(e, r || [], Ln(t).constructor) : e.apply(t, r))
  );
}
function Mg(t, e) {
  if (e && (Qt(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return kg(t);
}
function kg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Wd() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wd = function () {
    return !!t;
  })();
}
function Ln(t) {
  return (
    (Ln = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ln(t)
  );
}
function Dg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && So(t, e));
}
function So(t, e) {
  return (
    (So = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    So(t, e)
  );
}
function Ao(t, e, r) {
  return (
    (e = Fd(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Fd(t) {
  var e = Ng(t, 'string');
  return Qt(e) == 'symbol' ? e : e + '';
}
function Ng(t, e) {
  if (Qt(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Qt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var lc = 1,
  Rg = (function (t) {
    function e() {
      var r;
      _g(this, e);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = Cg(this, e, [].concat(i))),
        Ao(r, 'state', {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Ao(r, 'handleKeyDown', function (o) {
          if (o.key === 'Escape') {
            var u, l, c, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null &&
                  u !== void 0
                    ? u
                    : 0,
                y:
                  (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null &&
                  c !== void 0
                    ? c
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      Dg(e, t),
      Ig(e, [
        {
          key: 'updateBBox',
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > lc ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > lc) &&
                this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            (document.addEventListener('keydown', this.handleKeyDown), this.updateBBox());
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            document.removeEventListener('keydown', this.handleKeyDown);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !==
                  this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !==
                    this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              l = i.animationEasing,
              c = i.children,
              f = i.coordinate,
              s = i.hasPayload,
              d = i.isAnimationActive,
              p = i.offset,
              m = i.position,
              y = i.reverseDirection,
              v = i.useTranslate3d,
              g = i.viewBox,
              b = i.wrapperStyle,
              O = Tg({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: m,
                reverseDirection: y,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: v,
                viewBox: g,
              }),
              x = O.cssClasses,
              h = O.cssProperties,
              w = uc(
                uc({ transition: d && a ? 'transform '.concat(u, 'ms ').concat(l) : void 0 }, h),
                {},
                {
                  pointerEvents: 'none',
                  visibility: !this.state.dismissed && a && s ? 'visible' : 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                b,
              );
            return j.createElement(
              'div',
              {
                tabIndex: -1,
                className: x,
                style: w,
                ref: function (A) {
                  n.wrapperNode = A;
                },
              },
              c,
            );
          },
        },
      ])
    );
  })(M.PureComponent),
  Bg = function () {
    return !(
      typeof window < 'u' &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  mn = { isSsr: Bg() };
function er(t) {
  '@babel/helpers - typeof';
  return (
    (er =
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
    er(t)
  );
}
function cc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? cc(Object(r), !0).forEach(function (n) {
          Du(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : cc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Lg(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function qg(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Ud(n.key), n));
  }
}
function zg(t, e, r) {
  return (e && qg(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function Wg(t, e, r) {
  return (
    (e = qn(e)),
    Fg(t, Gd() ? Reflect.construct(e, r || [], qn(t).constructor) : e.apply(t, r))
  );
}
function Fg(t, e) {
  if (e && (er(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Gg(t);
}
function Gg(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Gd() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gd = function () {
    return !!t;
  })();
}
function qn(t) {
  return (
    (qn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    qn(t)
  );
}
function Ug(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Po(t, e));
}
function Po(t, e) {
  return (
    (Po = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Po(t, e)
  );
}
function Du(t, e, r) {
  return (
    (e = Ud(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Ud(t) {
  var e = Kg(t, 'string');
  return er(e) == 'symbol' ? e : e + '';
}
function Kg(t, e) {
  if (er(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (er(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function Vg(t) {
  return t.dataKey;
}
function Xg(t, e) {
  return j.isValidElement(t)
    ? j.cloneElement(t, e)
    : typeof t == 'function'
      ? j.createElement(t, e)
      : j.createElement(xg, e);
}
var Ve = (function (t) {
  function e() {
    return (Lg(this, e), Wg(this, e, arguments));
  }
  return (
    Ug(e, t),
    zg(e, [
      {
        key: 'render',
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            l = i.animationEasing,
            c = i.content,
            f = i.coordinate,
            s = i.filterNull,
            d = i.isAnimationActive,
            p = i.offset,
            m = i.payload,
            y = i.payloadUniqBy,
            v = i.position,
            g = i.reverseDirection,
            b = i.useTranslate3d,
            O = i.viewBox,
            x = i.wrapperStyle,
            h = m ?? [];
          s &&
            h.length &&
            (h = Bd(
              m.filter(function (S) {
                return S.value != null && (S.hide !== !0 || n.props.includeHidden);
              }),
              y,
              Vg,
            ));
          var w = h.length > 0;
          return j.createElement(
            Rg,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: l,
              isAnimationActive: d,
              active: a,
              coordinate: f,
              hasPayload: w,
              offset: p,
              position: v,
              reverseDirection: g,
              useTranslate3d: b,
              viewBox: O,
              wrapperStyle: x,
            },
            Xg(c, sc(sc({}, this.props), {}, { payload: h })),
          );
        },
      },
    ])
  );
})(M.PureComponent);
Du(Ve, 'displayName', 'Tooltip');
Du(Ve, 'defaultProps', {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: 'ease',
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !mn.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: ' : ',
  trigger: 'hover',
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
function Br(t) {
  '@babel/helpers - typeof';
  return (
    (Br =
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
    Br(t)
  );
}
function fc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? fc(Object(r), !0).forEach(function (n) {
          Hg(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : fc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Hg(t, e, r) {
  return (
    (e = Yg(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Yg(t) {
  var e = Zg(t, 'string');
  return Br(e) == 'symbol' ? e : e + '';
}
function Zg(t, e) {
  if (Br(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Br(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Jg(t, e) {
  return rb(t) || tb(t, e) || eb(t, e) || Qg();
}
function Qg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eb(t, e) {
  if (t) {
    if (typeof t == 'string') return dc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dc(t, e);
  }
}
function dc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function tb(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function rb(t) {
  if (Array.isArray(t)) return t;
}
var nb = M.forwardRef(function (t, e) {
    var r = t.aspect,
      n = t.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = t.width,
      o = a === void 0 ? '100%' : a,
      u = t.height,
      l = u === void 0 ? '100%' : u,
      c = t.minWidth,
      f = c === void 0 ? 0 : c,
      s = t.minHeight,
      d = t.maxHeight,
      p = t.children,
      m = t.debounce,
      y = m === void 0 ? 0 : m,
      v = t.id,
      g = t.className,
      b = t.onResize,
      O = t.style,
      x = O === void 0 ? {} : O,
      h = M.useRef(null),
      w = M.useRef();
    ((w.current = b),
      M.useImperativeHandle(e, function () {
        return Object.defineProperty(h.current, 'current', {
          get: function () {
            return (
              console.warn(
                'The usage of ref.current.current is deprecated and will no longer be supported.',
              ),
              h.current
            );
          },
          configurable: !0,
        });
      }));
    var S = M.useState({ containerWidth: i.width, containerHeight: i.height }),
      A = Jg(S, 2),
      P = A[0],
      I = A[1],
      T = M.useCallback(function ($, k) {
        I(function (C) {
          var D = Math.round($),
            N = Math.round(k);
          return C.containerWidth === D && C.containerHeight === N
            ? C
            : { containerWidth: D, containerHeight: N };
        });
      }, []);
    M.useEffect(
      function () {
        var $ = function (z) {
          var W,
            U = z[0].contentRect,
            L = U.width,
            K = U.height;
          (T(L, K), (W = w.current) === null || W === void 0 || W.call(w, L, K));
        };
        y > 0 && ($ = id($, y, { trailing: !0, leading: !1 }));
        var k = new ResizeObserver($),
          C = h.current.getBoundingClientRect(),
          D = C.width,
          N = C.height;
        return (
          T(D, N),
          k.observe(h.current),
          function () {
            k.disconnect();
          }
        );
      },
      [T, y],
    );
    var E = M.useMemo(
      function () {
        var $ = P.containerWidth,
          k = P.containerHeight;
        if ($ < 0 || k < 0) return null;
        (lt(
          jt(o) || jt(l),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          l,
        ),
          lt(!r || r > 0, 'The aspect(%s) must be greater than zero.', r));
        var C = jt(o) ? $ : o,
          D = jt(l) ? k : l;
        (r && r > 0 && (C ? (D = C / r) : D && (C = D * r), d && D > d && (D = d)),
          lt(
            C > 0 || D > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            C,
            D,
            o,
            l,
            f,
            s,
            r,
          ));
        var N = !Array.isArray(p) && ut(p.type).endsWith('Chart');
        return j.Children.map(p, function (B) {
          return j.isValidElement(B)
            ? M.cloneElement(
                B,
                xn(
                  { width: C, height: D },
                  N
                    ? {
                        style: xn(
                          { height: '100%', width: '100%', maxHeight: D, maxWidth: C },
                          B.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : B;
        });
      },
      [r, p, l, d, s, f, P, o],
    );
    return j.createElement(
      'div',
      {
        id: v ? ''.concat(v) : void 0,
        className: Y('recharts-responsive-container', g),
        style: xn(xn({}, x), {}, { width: o, height: l, minWidth: f, minHeight: s, maxHeight: d }),
        ref: h,
      },
      E,
    );
  }),
  Kd = function (e) {
    return null;
  };
Kd.displayName = 'Cell';
function Lr(t) {
  '@babel/helpers - typeof';
  return (
    (Lr =
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
    Lr(t)
  );
}
function pc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function jo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? pc(Object(r), !0).forEach(function (n) {
          ib(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : pc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ib(t, e, r) {
  return (
    (e = ab(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function ab(t) {
  var e = ob(t, 'string');
  return Lr(e) == 'symbol' ? e : e + '';
}
function ob(t, e) {
  if (Lr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Lr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var Ft = { widthCache: {}, cacheCount: 0 },
  ub = 2e3,
  lb = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  vc = 'recharts_measurement_span';
function cb(t) {
  var e = jo({}, t);
  return (
    Object.keys(e).forEach(function (r) {
      e[r] || delete e[r];
    }),
    e
  );
}
var Ir = function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || mn.isSsr) return { width: 0, height: 0 };
    var n = cb(r),
      i = JSON.stringify({ text: e, copyStyle: n });
    if (Ft.widthCache[i]) return Ft.widthCache[i];
    try {
      var a = document.getElementById(vc);
      a ||
        ((a = document.createElement('span')),
        a.setAttribute('id', vc),
        a.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(a));
      var o = jo(jo({}, lb), n);
      (Object.assign(a.style, o), (a.textContent = ''.concat(e)));
      var u = a.getBoundingClientRect(),
        l = { width: u.width, height: u.height };
      return (
        (Ft.widthCache[i] = l),
        ++Ft.cacheCount > ub && ((Ft.cacheCount = 0), (Ft.widthCache = {})),
        l
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  sb = function (e) {
    return {
      top: e.top + window.scrollY - document.documentElement.clientTop,
      left: e.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function qr(t) {
  '@babel/helpers - typeof';
  return (
    (qr =
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
    qr(t)
  );
}
function zn(t, e) {
  return vb(t) || pb(t, e) || db(t, e) || fb();
}
function fb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function db(t, e) {
  if (t) {
    if (typeof t == 'string') return hc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hc(t, e);
  }
}
function hc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function pb(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function vb(t) {
  if (Array.isArray(t)) return t;
}
function hb(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function yc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, mb(n.key), n));
  }
}
function yb(t, e, r) {
  return (
    e && yc(t.prototype, e),
    r && yc(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function mb(t) {
  var e = gb(t, 'string');
  return qr(e) == 'symbol' ? e : e + '';
}
function gb(t, e) {
  if (qr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (qr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var mc = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  gc = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  bb = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  Ob = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  Vd = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  wb = Object.keys(Vd),
  Ut = 'NaN';
function xb(t, e) {
  return t * Vd[e];
}
var Sn = (function () {
  function t(e, r) {
    (hb(this, t),
      (this.num = e),
      (this.unit = r),
      (this.num = e),
      (this.unit = r),
      Number.isNaN(e) && (this.unit = ''),
      r !== '' && !bb.test(r) && ((this.num = NaN), (this.unit = '')),
      wb.includes(r) && ((this.num = xb(e, r)), (this.unit = 'px')));
  }
  return yb(
    t,
    [
      {
        key: 'add',
        value: function (r) {
          return this.unit !== r.unit ? new t(NaN, '') : new t(this.num + r.num, this.unit);
        },
      },
      {
        key: 'subtract',
        value: function (r) {
          return this.unit !== r.unit ? new t(NaN, '') : new t(this.num - r.num, this.unit);
        },
      },
      {
        key: 'multiply',
        value: function (r) {
          return this.unit !== '' && r.unit !== '' && this.unit !== r.unit
            ? new t(NaN, '')
            : new t(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: 'divide',
        value: function (r) {
          return this.unit !== '' && r.unit !== '' && this.unit !== r.unit
            ? new t(NaN, '')
            : new t(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: 'toString',
        value: function () {
          return ''.concat(this.num).concat(this.unit);
        },
      },
      {
        key: 'isNaN',
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: 'parse',
        value: function (r) {
          var n,
            i = (n = Ob.exec(r)) !== null && n !== void 0 ? n : [],
            a = zn(i, 3),
            o = a[1],
            u = a[2];
          return new t(parseFloat(o), u ?? '');
        },
      },
    ],
  );
})();
function Xd(t) {
  if (t.includes(Ut)) return Ut;
  for (var e = t; e.includes('*') || e.includes('/'); ) {
    var r,
      n = (r = mc.exec(e)) !== null && r !== void 0 ? r : [],
      i = zn(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      l = Sn.parse(a ?? ''),
      c = Sn.parse(u ?? ''),
      f = o === '*' ? l.multiply(c) : l.divide(c);
    if (f.isNaN()) return Ut;
    e = e.replace(mc, f.toString());
  }
  for (; e.includes('+') || /.-\d+(?:\.\d+)?/.test(e); ) {
    var s,
      d = (s = gc.exec(e)) !== null && s !== void 0 ? s : [],
      p = zn(d, 4),
      m = p[1],
      y = p[2],
      v = p[3],
      g = Sn.parse(m ?? ''),
      b = Sn.parse(v ?? ''),
      O = y === '+' ? g.add(b) : g.subtract(b);
    if (O.isNaN()) return Ut;
    e = e.replace(gc, O.toString());
  }
  return e;
}
var bc = /\(([^()]*)\)/;
function Sb(t) {
  for (var e = t; e.includes('('); ) {
    var r = bc.exec(e),
      n = zn(r, 2),
      i = n[1];
    e = e.replace(bc, Xd(i));
  }
  return e;
}
function Ab(t) {
  var e = t.replace(/\s+/g, '');
  return ((e = Sb(e)), (e = Xd(e)), e);
}
function Pb(t) {
  try {
    return Ab(t);
  } catch {
    return Ut;
  }
}
function Oa(t) {
  var e = Pb(t.slice(5, -1));
  return e === Ut ? '' : e;
}
var jb = [
    'x',
    'y',
    'lineHeight',
    'capHeight',
    'scaleToFit',
    'textAnchor',
    'verticalAnchor',
    'fill',
  ],
  Eb = ['dx', 'dy', 'angle', 'className', 'breakAll'];
function Eo() {
  return (
    (Eo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Eo.apply(this, arguments)
  );
}
function Oc(t, e) {
  if (t == null) return {};
  var r = Tb(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function Tb(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function wc(t, e) {
  return Cb(t) || Ib(t, e) || $b(t, e) || _b();
}
function _b() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $b(t, e) {
  if (t) {
    if (typeof t == 'string') return xc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xc(t, e);
  }
}
function xc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Ib(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Cb(t) {
  if (Array.isArray(t)) return t;
}
var Hd = /[ \f\n\r\t\v\u2028\u2029]+/,
  Yd = function (e) {
    var r = e.children,
      n = e.breakAll,
      i = e.style;
    try {
      var a = [];
      X(r) || (n ? (a = r.toString().split('')) : (a = r.toString().split(Hd)));
      var o = a.map(function (l) {
          return { word: l, width: Ir(l, i).width };
        }),
        u = n ? 0 : Ir(' ', i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  Mb = function (e, r, n, i, a) {
    var o = e.maxLines,
      u = e.children,
      l = e.style,
      c = e.breakAll,
      f = R(o),
      s = u,
      d = function () {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return C.reduce(function (D, N) {
          var B = N.word,
            z = N.width,
            W = D[D.length - 1];
          if (W && (i == null || a || W.width + z + n < Number(i)))
            (W.words.push(B), (W.width += z + n));
          else {
            var U = { words: [B], width: z };
            D.push(U);
          }
          return D;
        }, []);
      },
      p = d(r),
      m = function (C) {
        return C.reduce(function (D, N) {
          return D.width > N.width ? D : N;
        });
      };
    if (!f) return p;
    for (
      var y = '…',
        v = function (C) {
          var D = s.slice(0, C),
            N = Yd({ breakAll: c, style: l, children: D + y }).wordsWithComputedWidth,
            B = d(N),
            z = B.length > o || m(B).width > Number(i);
          return [z, B];
        },
        g = 0,
        b = s.length - 1,
        O = 0,
        x;
      g <= b && O <= s.length - 1;
    ) {
      var h = Math.floor((g + b) / 2),
        w = h - 1,
        S = v(w),
        A = wc(S, 2),
        P = A[0],
        I = A[1],
        T = v(h),
        E = wc(T, 1),
        $ = E[0];
      if ((!P && !$ && (g = h + 1), P && $ && (b = h - 1), !P && $)) {
        x = I;
        break;
      }
      O++;
    }
    return x || p;
  },
  Sc = function (e) {
    var r = X(e) ? [] : e.toString().split(Hd);
    return [{ words: r }];
  },
  kb = function (e) {
    var r = e.width,
      n = e.scaleToFit,
      i = e.children,
      a = e.style,
      o = e.breakAll,
      u = e.maxLines;
    if ((r || n) && !mn.isSsr) {
      var l,
        c,
        f = Yd({ breakAll: o, children: i, style: a });
      if (f) {
        var s = f.wordsWithComputedWidth,
          d = f.spaceWidth;
        ((l = s), (c = d));
      } else return Sc(i);
      return Mb({ breakAll: o, children: i, maxLines: u, style: a }, l, c, r, n);
    }
    return Sc(i);
  },
  Ac = '#808080',
  Wn = function (e) {
    var r = e.x,
      n = r === void 0 ? 0 : r,
      i = e.y,
      a = i === void 0 ? 0 : i,
      o = e.lineHeight,
      u = o === void 0 ? '1em' : o,
      l = e.capHeight,
      c = l === void 0 ? '0.71em' : l,
      f = e.scaleToFit,
      s = f === void 0 ? !1 : f,
      d = e.textAnchor,
      p = d === void 0 ? 'start' : d,
      m = e.verticalAnchor,
      y = m === void 0 ? 'end' : m,
      v = e.fill,
      g = v === void 0 ? Ac : v,
      b = Oc(e, jb),
      O = M.useMemo(
        function () {
          return kb({
            breakAll: b.breakAll,
            children: b.children,
            maxLines: b.maxLines,
            scaleToFit: s,
            style: b.style,
            width: b.width,
          });
        },
        [b.breakAll, b.children, b.maxLines, s, b.style, b.width],
      ),
      x = b.dx,
      h = b.dy,
      w = b.angle,
      S = b.className,
      A = b.breakAll,
      P = Oc(b, Eb);
    if (!ve(n) || !ve(a)) return null;
    var I = n + (R(x) ? x : 0),
      T = a + (R(h) ? h : 0),
      E;
    switch (y) {
      case 'start':
        E = Oa('calc('.concat(c, ')'));
        break;
      case 'middle':
        E = Oa(
          'calc('
            .concat((O.length - 1) / 2, ' * -')
            .concat(u, ' + (')
            .concat(c, ' / 2))'),
        );
        break;
      default:
        E = Oa('calc('.concat(O.length - 1, ' * -').concat(u, ')'));
        break;
    }
    var $ = [];
    if (s) {
      var k = O[0].width,
        C = b.width;
      $.push('scale('.concat((R(C) ? C / k : 1) / k, ')'));
    }
    return (
      w && $.push('rotate('.concat(w, ', ').concat(I, ', ').concat(T, ')')),
      $.length && (P.transform = $.join(' ')),
      j.createElement(
        'text',
        Eo({}, H(P, !0), {
          x: I,
          y: T,
          className: Y('recharts-text', S),
          textAnchor: p,
          fill: g.includes('url') ? Ac : g,
        }),
        O.map(function (D, N) {
          var B = D.words.join(A ? '' : ' ');
          return j.createElement(
            'tspan',
            { x: I, dy: N === 0 ? E : u, key: ''.concat(B, '-').concat(N) },
            B,
          );
        }),
      )
    );
  };
const Pc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: oo,
      scaleDiverging: Ed,
      scaleDivergingLog: Td,
      scaleDivergingPow: Tu,
      scaleDivergingSqrt: hy,
      scaleDivergingSymlog: _d,
      scaleIdentity: yd,
      scaleImplicit: Yh,
      scaleLinear: lo,
      scaleLog: md,
      scaleOrdinal: Zh,
      scalePoint: $r,
      scalePow: ju,
      scaleQuantile: Od,
      scaleQuantize: wd,
      scaleRadial: bd,
      scaleSequential: Sd,
      scaleSequentialLog: Ad,
      scaleSequentialPow: Eu,
      scaleSequentialQuantile: jd,
      scaleSequentialSqrt: vy,
      scaleSequentialSymlog: Pd,
      scaleSqrt: fy,
      scaleSymlog: gd,
      scaleThreshold: xd,
      scaleTime: Vh,
      scaleUtc: py,
      tickFormat: kh,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var wa, jc;
function Zd() {
  if (jc) return wa;
  jc = 1;
  var t = ld();
  function e(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a],
        l = n(u);
      if (l != null && (c === void 0 ? l === l && !t(l) : i(l, c)))
        var c = l,
          f = u;
    }
    return f;
  }
  return ((wa = e), wa);
}
var xa, Ec;
function Db() {
  if (Ec) return xa;
  Ec = 1;
  function t(e, r) {
    return e > r;
  }
  return ((xa = t), xa);
}
var Sa, Tc;
function Nb() {
  if (Tc) return Sa;
  Tc = 1;
  var t = Zd(),
    e = Db(),
    r = gu();
  function n(i) {
    return i && i.length ? t(i, r, e) : void 0;
  }
  return ((Sa = n), Sa);
}
var Rb = Nb();
const Pi = ie(Rb);
var Aa, _c;
function Bb() {
  if (_c) return Aa;
  _c = 1;
  function t(e, r) {
    return e < r;
  }
  return ((Aa = t), Aa);
}
var Pa, $c;
function Lb() {
  if ($c) return Pa;
  $c = 1;
  var t = Zd(),
    e = Bb(),
    r = gu();
  function n(i) {
    return i && i.length ? t(i, r, e) : void 0;
  }
  return ((Pa = n), Pa);
}
var qb = Lb();
const ji = ie(qb);
var ja, Ic;
function zb() {
  if (Ic) return ja;
  Ic = 1;
  var t = zd(),
    e = ah();
  function r(n, i) {
    return t(e(n, i), 1);
  }
  return ((ja = r), ja);
}
var Wb = zb();
const Fb = ie(Wb);
var Ea, Cc;
function Gb() {
  if (Cc) return Ea;
  Cc = 1;
  var t = oh();
  function e(r, n) {
    return t(r, n);
  }
  return ((Ea = e), Ea);
}
var Ub = Gb();
const Nu = ie(Ub);
var yr = 1e9,
  Kb = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
  },
  Bu,
  ae = !0,
  Re = '[DecimalError] ',
  $t = Re + 'Invalid argument: ',
  Ru = Re + 'Exponent out of range: ',
  mr = Math.floor,
  Pt = Math.pow,
  Vb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  $e,
  ye = 1e7,
  ne = 7,
  Jd = 9007199254740991,
  Fn = mr(Jd / ne),
  q = {};
q.absoluteValue = q.abs = function () {
  var t = new this.constructor(this);
  return (t.s && (t.s = 1), t);
};
q.comparedTo = q.cmp = function (t) {
  var e,
    r,
    n,
    i,
    a = this;
  if (((t = new a.constructor(t)), a.s !== t.s)) return a.s || -t.s;
  if (a.e !== t.e) return (a.e > t.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = t.d.length, e = 0, r = n < i ? n : i; e < r; ++e)
    if (a.d[e] !== t.d[e]) return (a.d[e] > t.d[e]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
q.decimalPlaces = q.dp = function () {
  var t = this,
    e = t.d.length - 1,
    r = (e - t.e) * ne;
  if (((e = t.d[e]), e)) for (; e % 10 == 0; e /= 10) r--;
  return r < 0 ? 0 : r;
};
q.dividedBy = q.div = function (t) {
  return ct(this, new this.constructor(t));
};
q.dividedToIntegerBy = q.idiv = function (t) {
  var e = this,
    r = e.constructor;
  return Q(ct(e, new r(t), 0, 1), r.precision);
};
q.equals = q.eq = function (t) {
  return !this.cmp(t);
};
q.exponent = function () {
  return fe(this);
};
q.greaterThan = q.gt = function (t) {
  return this.cmp(t) > 0;
};
q.greaterThanOrEqualTo = q.gte = function (t) {
  return this.cmp(t) >= 0;
};
q.isInteger = q.isint = function () {
  return this.e > this.d.length - 2;
};
q.isNegative = q.isneg = function () {
  return this.s < 0;
};
q.isPositive = q.ispos = function () {
  return this.s > 0;
};
q.isZero = function () {
  return this.s === 0;
};
q.lessThan = q.lt = function (t) {
  return this.cmp(t) < 0;
};
q.lessThanOrEqualTo = q.lte = function (t) {
  return this.cmp(t) < 1;
};
q.logarithm = q.log = function (t) {
  var e,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (t === void 0) t = new n(10);
  else if (((t = new n(t)), t.s < 1 || t.eq($e))) throw Error(Re + 'NaN');
  if (r.s < 1) throw Error(Re + (r.s ? 'NaN' : '-Infinity'));
  return r.eq($e) ? new n(0) : ((ae = !1), (e = ct(zr(r, a), zr(t, a), a)), (ae = !0), Q(e, i));
};
q.minus = q.sub = function (t) {
  var e = this;
  return ((t = new e.constructor(t)), e.s == t.s ? tp(e, t) : Qd(e, ((t.s = -t.s), t)));
};
q.modulo = q.mod = function (t) {
  var e,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((t = new n(t)), !t.s)) throw Error(Re + 'NaN');
  return r.s ? ((ae = !1), (e = ct(r, t, 0, 1).times(t)), (ae = !0), r.minus(e)) : Q(new n(r), i);
};
q.naturalExponential = q.exp = function () {
  return ep(this);
};
q.naturalLogarithm = q.ln = function () {
  return zr(this);
};
q.negated = q.neg = function () {
  var t = new this.constructor(this);
  return ((t.s = -t.s || 0), t);
};
q.plus = q.add = function (t) {
  var e = this;
  return ((t = new e.constructor(t)), e.s == t.s ? Qd(e, t) : tp(e, ((t.s = -t.s), t)));
};
q.precision = q.sd = function (t) {
  var e,
    r,
    n,
    i = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error($t + t);
  if (((e = fe(i) + 1), (n = i.d.length - 1), (r = n * ne + 1), (n = i.d[n]), n)) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return t && e > r ? e : r;
};
q.squareRoot = q.sqrt = function () {
  var t,
    e,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(Re + 'NaN');
  }
  for (
    t = fe(u),
      ae = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((e = Xe(u.d)),
          (e.length + t) % 2 == 0 && (e += '0'),
          (i = Math.sqrt(e)),
          (t = mr((t + 1) / 2) - (t < 0 || t % 2)),
          i == 1 / 0
            ? (e = '5e' + t)
            : ((e = i.toExponential()), (e = e.slice(0, e.indexOf('e') + 1) + t)),
          (n = new l(e)))
        : (n = new l(i.toString())),
      r = l.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(ct(u, a, o + 2)).times(0.5)),
      Xe(a.d).slice(0, o) === (e = Xe(n.d)).slice(0, o))
    ) {
      if (((e = e.slice(o - 3, o + 1)), i == o && e == '4999')) {
        if ((Q(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (e != '9999') break;
      o += 4;
    }
  return ((ae = !0), Q(n, r));
};
q.times = q.mul = function (t) {
  var e,
    r,
    n,
    i,
    a,
    o,
    u,
    l,
    c,
    f = this,
    s = f.constructor,
    d = f.d,
    p = (t = new s(t)).d;
  if (!f.s || !t.s) return new s(0);
  for (
    t.s *= f.s,
      r = f.e + t.e,
      l = d.length,
      c = p.length,
      l < c && ((a = d), (d = p), (p = a), (o = l), (l = c), (c = o)),
      a = [],
      o = l + c,
      n = o;
    n--;
  )
    a.push(0);
  for (n = c; --n >= 0; ) {
    for (e = 0, i = l + n; i > n; )
      ((u = a[i] + p[n] * d[i - n - 1] + e), (a[i--] = (u % ye) | 0), (e = (u / ye) | 0));
    a[i] = ((a[i] + e) % ye) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (e ? ++r : a.shift(), (t.d = a), (t.e = r), ae ? Q(t, s.precision) : t);
};
q.toDecimalPlaces = q.todp = function (t, e) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    t === void 0
      ? r
      : (Ye(t, 0, yr), e === void 0 ? (e = n.rounding) : Ye(e, 0, 8), Q(r, t + fe(r) + 1, e))
  );
};
q.toExponential = function (t, e) {
  var r,
    n = this,
    i = n.constructor;
  return (
    t === void 0
      ? (r = kt(n, !0))
      : (Ye(t, 0, yr),
        e === void 0 ? (e = i.rounding) : Ye(e, 0, 8),
        (n = Q(new i(n), t + 1, e)),
        (r = kt(n, !0, t + 1))),
    r
  );
};
q.toFixed = function (t, e) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return t === void 0
    ? kt(i)
    : (Ye(t, 0, yr),
      e === void 0 ? (e = a.rounding) : Ye(e, 0, 8),
      (n = Q(new a(i), t + fe(i) + 1, e)),
      (r = kt(n.abs(), !1, t + fe(n) + 1)),
      i.isneg() && !i.isZero() ? '-' + r : r);
};
q.toInteger = q.toint = function () {
  var t = this,
    e = t.constructor;
  return Q(new e(t), fe(t) + 1, e.rounding);
};
q.toNumber = function () {
  return +this;
};
q.toPower = q.pow = function (t) {
  var e,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor,
    c = 12,
    f = +(t = new l(t));
  if (!t.s) return new l($e);
  if (((u = new l(u)), !u.s)) {
    if (t.s < 1) throw Error(Re + 'Infinity');
    return u;
  }
  if (u.eq($e)) return u;
  if (((n = l.precision), t.eq($e))) return Q(u, n);
  if (((e = t.e), (r = t.d.length - 1), (o = e >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= Jd) {
      for (
        i = new l($e), e = Math.ceil(n / ne + 4), ae = !1;
        r % 2 && ((i = i.times(u)), kc(i.d, e)), (r = mr(r / 2)), r !== 0;
      )
        ((u = u.times(u)), kc(u.d, e));
      return ((ae = !0), t.s < 0 ? new l($e).div(i) : Q(i, n));
    }
  } else if (a < 0) throw Error(Re + 'NaN');
  return (
    (a = a < 0 && t.d[Math.max(e, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (ae = !1),
    (i = t.times(zr(u, n + c))),
    (ae = !0),
    (i = ep(i)),
    (i.s = a),
    i
  );
};
q.toPrecision = function (t, e) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    t === void 0
      ? ((r = fe(i)), (n = kt(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (Ye(t, 1, yr),
        e === void 0 ? (e = a.rounding) : Ye(e, 0, 8),
        (i = Q(new a(i), t, e)),
        (r = fe(i)),
        (n = kt(i, t <= r || r <= a.toExpNeg, t))),
    n
  );
};
q.toSignificantDigits = q.tosd = function (t, e) {
  var r = this,
    n = r.constructor;
  return (
    t === void 0
      ? ((t = n.precision), (e = n.rounding))
      : (Ye(t, 1, yr), e === void 0 ? (e = n.rounding) : Ye(e, 0, 8)),
    Q(new n(r), t, e)
  );
};
q.toString =
  q.valueOf =
  q.val =
  q.toJSON =
  q[Symbol.for('nodejs.util.inspect.custom')] =
    function () {
      var t = this,
        e = fe(t),
        r = t.constructor;
      return kt(t, e <= r.toExpNeg || e >= r.toExpPos);
    };
function Qd(t, e) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    c,
    f = t.constructor,
    s = f.precision;
  if (!t.s || !e.s) return (e.s || (e = new f(t)), ae ? Q(e, s) : e);
  if (((l = t.d), (c = e.d), (o = t.e), (i = e.e), (l = l.slice()), (a = o - i), a)) {
    for (
      a < 0 ? ((n = l), (a = -a), (u = c.length)) : ((n = c), (i = o), (u = l.length)),
        o = Math.ceil(s / ne),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (u = l.length, a = c.length, u - a < 0 && ((a = u), (n = c), (c = l), (l = n)), r = 0; a; )
    ((r = ((l[--a] = l[a] + c[a] + r) / ye) | 0), (l[a] %= ye));
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return ((e.d = l), (e.e = i), ae ? Q(e, s) : e);
}
function Ye(t, e, r) {
  if (t !== ~~t || t < e || t > r) throw Error($t + t);
}
function Xe(t) {
  var e,
    r,
    n,
    i = t.length - 1,
    a = '',
    o = t[0];
  if (i > 0) {
    for (a += o, e = 1; e < i; e++)
      ((n = t[e] + ''), (r = ne - n.length), r && (a += ht(r)), (a += n));
    ((o = t[e]), (n = o + ''), (r = ne - n.length), r && (a += ht(r)));
  } else if (o === 0) return '0';
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var ct = (function () {
  function t(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; ) ((a = n[u] * i + o), (n[u] = (a % ye) | 0), (o = (a / ye) | 0));
    return (o && n.unshift(o), n);
  }
  function e(n, i, a, o) {
    var u, l;
    if (a != o) l = a > o ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * ye + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      l,
      c,
      f,
      s,
      d,
      p,
      m,
      y,
      v,
      g,
      b,
      O,
      x,
      h,
      w,
      S,
      A,
      P = n.constructor,
      I = n.s == i.s ? 1 : -1,
      T = n.d,
      E = i.d;
    if (!n.s) return new P(n);
    if (!i.s) throw Error(Re + 'Division by zero');
    for (
      l = n.e - i.e, S = E.length, h = T.length, p = new P(I), m = p.d = [], c = 0;
      E[c] == (T[c] || 0);
    )
      ++c;
    if (
      (E[c] > (T[c] || 0) && --l,
      a == null ? (b = a = P.precision) : o ? (b = a + (fe(n) - fe(i)) + 1) : (b = a),
      b < 0)
    )
      return new P(0);
    if (((b = (b / ne + 2) | 0), (c = 0), S == 1))
      for (f = 0, E = E[0], b++; (c < h || f) && b--; c++)
        ((O = f * ye + (T[c] || 0)), (m[c] = (O / E) | 0), (f = (O % E) | 0));
    else {
      for (
        f = (ye / (E[0] + 1)) | 0,
          f > 1 && ((E = t(E, f)), (T = t(T, f)), (S = E.length), (h = T.length)),
          x = S,
          y = T.slice(0, S),
          v = y.length;
        v < S;
      )
        y[v++] = 0;
      ((A = E.slice()), A.unshift(0), (w = E[0]), E[1] >= ye / 2 && ++w);
      do
        ((f = 0),
          (u = e(E, y, S, v)),
          u < 0
            ? ((g = y[0]),
              S != v && (g = g * ye + (y[1] || 0)),
              (f = (g / w) | 0),
              f > 1
                ? (f >= ye && (f = ye - 1),
                  (s = t(E, f)),
                  (d = s.length),
                  (v = y.length),
                  (u = e(s, y, d, v)),
                  u == 1 && (f--, r(s, S < d ? A : E, d)))
                : (f == 0 && (u = f = 1), (s = E.slice())),
              (d = s.length),
              d < v && s.unshift(0),
              r(y, s, v),
              u == -1 &&
                ((v = y.length), (u = e(E, y, S, v)), u < 1 && (f++, r(y, S < v ? A : E, v))),
              (v = y.length))
            : u === 0 && (f++, (y = [0])),
          (m[c++] = f),
          u && y[0] ? (y[v++] = T[x] || 0) : ((y = [T[x]]), (v = 1)));
      while ((x++ < h || y[0] !== void 0) && b--);
    }
    return (m[0] || m.shift(), (p.e = l), Q(p, o ? a + fe(p) + 1 : a));
  };
})();
function ep(t, e) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l = 0,
    c = 0,
    f = t.constructor,
    s = f.precision;
  if (fe(t) > 16) throw Error(Ru + fe(t));
  if (!t.s) return new f($e);
  for (ae = !1, u = s, o = new f(0.03125); t.abs().gte(0.1); ) ((t = t.times(o)), (c += 5));
  for (
    n = ((Math.log(Pt(2, c)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f($e),
      f.precision = u;
    ;
  ) {
    if (
      ((i = Q(i.times(t), u)),
      (r = r.times(++l)),
      (o = a.plus(ct(i, r, u))),
      Xe(o.d).slice(0, u) === Xe(a.d).slice(0, u))
    ) {
      for (; c--; ) a = Q(a.times(a), u);
      return ((f.precision = s), e == null ? ((ae = !0), Q(a, s)) : a);
    }
    a = o;
  }
}
function fe(t) {
  for (var e = t.e * ne, r = t.d[0]; r >= 10; r /= 10) e++;
  return e;
}
function Ta(t, e, r) {
  if (e > t.LN10.sd())
    throw ((ae = !0), r && (t.precision = r), Error(Re + 'LN10 precision limit exceeded'));
  return Q(new t(t.LN10), e);
}
function ht(t) {
  for (var e = ''; t--; ) e += '0';
  return e;
}
function zr(t, e) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    c,
    f,
    s = 1,
    d = 10,
    p = t,
    m = p.d,
    y = p.constructor,
    v = y.precision;
  if (p.s < 1) throw Error(Re + (p.s ? 'NaN' : '-Infinity'));
  if (p.eq($e)) return new y(0);
  if ((e == null ? ((ae = !1), (c = v)) : (c = e), p.eq(10)))
    return (e == null && (ae = !0), Ta(y, c));
  if (
    ((c += d), (y.precision = c), (r = Xe(m)), (n = r.charAt(0)), (a = fe(p)), Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((p = p.times(t)), (r = Xe(p.d)), (n = r.charAt(0)), s++);
    ((a = fe(p)), n > 1 ? ((p = new y('0.' + r)), a++) : (p = new y(n + '.' + r.slice(1))));
  } else
    return (
      (l = Ta(y, c + 2, v).times(a + '')),
      (p = zr(new y(n + '.' + r.slice(1)), c - d).plus(l)),
      (y.precision = v),
      e == null ? ((ae = !0), Q(p, v)) : p
    );
  for (u = o = p = ct(p.minus($e), p.plus($e), c), f = Q(p.times(p), c), i = 3; ; ) {
    if (
      ((o = Q(o.times(f), c)),
      (l = u.plus(ct(o, new y(i), c))),
      Xe(l.d).slice(0, c) === Xe(u.d).slice(0, c))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(Ta(y, c + 2, v).times(a + ''))),
        (u = ct(u, new y(s), c)),
        (y.precision = v),
        e == null ? ((ae = !0), Q(u, v)) : u
      );
    ((u = l), (i += 2));
  }
}
function Mc(t, e) {
  var r, n, i;
  for (
    (r = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
      (n = e.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +e.slice(n + 1)), (e = e.substring(0, n)))
        : r < 0 && (r = e.length),
      n = 0;
    e.charCodeAt(n) === 48;
  )
    ++n;
  for (i = e.length; e.charCodeAt(i - 1) === 48; ) --i;
  if (((e = e.slice(n, i)), e)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (t.e = mr(r / ne)),
      (t.d = []),
      (n = (r + 1) % ne),
      r < 0 && (n += ne),
      n < i)
    ) {
      for (n && t.d.push(+e.slice(0, n)), i -= ne; n < i; ) t.d.push(+e.slice(n, (n += ne)));
      ((e = e.slice(n)), (n = ne - e.length));
    } else n -= i;
    for (; n--; ) e += '0';
    if ((t.d.push(+e), ae && (t.e > Fn || t.e < -Fn))) throw Error(Ru + r);
  } else ((t.s = 0), (t.e = 0), (t.d = [0]));
  return t;
}
function Q(t, e, r) {
  var n,
    i,
    a,
    o,
    u,
    l,
    c,
    f,
    s = t.d;
  for (o = 1, a = s[0]; a >= 10; a /= 10) o++;
  if (((n = e - o), n < 0)) ((n += ne), (i = e), (c = s[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / ne)), (a = s.length), f >= a)) return t;
    for (c = a = s[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= ne), (i = n - ne + o));
  }
  if (
    (r !== void 0 &&
      ((a = Pt(10, o - i - 1)),
      (u = ((c / a) % 10) | 0),
      (l = e < 0 || s[f + 1] !== void 0 || c % a),
      (l =
        r < 4
          ? (u || l) && (r == 0 || r == (t.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                l ||
                (r == 6 && ((n > 0 ? (i > 0 ? c / Pt(10, o - i) : 0) : s[f - 1]) % 10) & 1) ||
                r == (t.s < 0 ? 8 : 7))))),
    e < 1 || !s[0])
  )
    return (
      l
        ? ((a = fe(t)),
          (s.length = 1),
          (e = e - a - 1),
          (s[0] = Pt(10, (ne - (e % ne)) % ne)),
          (t.e = mr(-e / ne) || 0))
        : ((s.length = 1), (s[0] = t.e = t.s = 0)),
      t
    );
  if (
    (n == 0
      ? ((s.length = f), (a = 1), f--)
      : ((s.length = f + 1),
        (a = Pt(10, ne - n)),
        (s[f] = i > 0 ? (((c / Pt(10, o - i)) % Pt(10, i)) | 0) * a : 0)),
    l)
  )
    for (;;)
      if (f == 0) {
        (s[0] += a) == ye && ((s[0] = 1), ++t.e);
        break;
      } else {
        if (((s[f] += a), s[f] != ye)) break;
        ((s[f--] = 0), (a = 1));
      }
  for (n = s.length; s[--n] === 0; ) s.pop();
  if (ae && (t.e > Fn || t.e < -Fn)) throw Error(Ru + fe(t));
  return t;
}
function tp(t, e) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    c,
    f,
    s,
    d = t.constructor,
    p = d.precision;
  if (!t.s || !e.s) return (e.s ? (e.s = -e.s) : (e = new d(t)), ae ? Q(e, p) : e);
  if (((l = t.d), (s = e.d), (n = e.e), (c = t.e), (l = l.slice()), (o = c - n), o)) {
    for (
      f = o < 0,
        f ? ((r = l), (o = -o), (u = s.length)) : ((r = s), (n = c), (u = l.length)),
        i = Math.max(Math.ceil(p / ne), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = s.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (l[i] != s[i]) {
        f = l[i] < s[i];
        break;
      }
    o = 0;
  }
  for (f && ((r = l), (l = s), (s = r), (e.s = -e.s)), u = l.length, i = s.length - u; i > 0; --i)
    l[u++] = 0;
  for (i = s.length; i > o; ) {
    if (l[--i] < s[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = ye - 1;
      (--l[a], (l[i] += ye));
    }
    l[i] -= s[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? ((e.d = l), (e.e = n), ae ? Q(e, p) : e) : new d(0);
}
function kt(t, e, r) {
  var n,
    i = fe(t),
    a = Xe(t.d),
    o = a.length;
  return (
    e
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + '.' + a.slice(1) + ht(n))
          : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)),
        (a = a + (i < 0 ? 'e' : 'e+') + i))
      : i < 0
        ? ((a = '0.' + ht(-i - 1) + a), r && (n = r - o) > 0 && (a += ht(n)))
        : i >= o
          ? ((a += ht(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + '.' + ht(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + '.' + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += '.'), (a += ht(n)))),
    t.s < 0 ? '-' + a : a
  );
}
function kc(t, e) {
  if (t.length > e) return ((t.length = e), !0);
}
function rp(t) {
  var e, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == 'number') {
      if (a * 0 !== 0) throw Error($t + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return Mc(o, a.toString());
    } else if (typeof a != 'string') throw Error($t + a);
    if ((a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1), Vb.test(a))) Mc(o, a);
    else throw Error($t + a);
  }
  if (
    ((i.prototype = q),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = rp),
    (i.config = i.set = Xb),
    t === void 0 && (t = {}),
    t)
  )
    for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], e = 0; e < n.length; )
      t.hasOwnProperty((r = n[e++])) || (t[r] = this[r]);
  return (i.config(t), i);
}
function Xb(t) {
  if (!t || typeof t != 'object') throw Error(Re + 'Object expected');
  var e,
    r,
    n,
    i = ['precision', 1, yr, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0];
  for (e = 0; e < i.length; e += 3)
    if ((n = t[(r = i[e])]) !== void 0)
      if (mr(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n;
      else throw Error($t + r + ': ' + n);
  if ((n = t[(r = 'LN10')]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error($t + r + ': ' + n);
  return this;
}
var Bu = rp(Kb);
$e = new Bu(1);
const J = Bu;
function Hb(t) {
  return Qb(t) || Jb(t) || Zb(t) || Yb();
}
function Yb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zb(t, e) {
  if (t) {
    if (typeof t == 'string') return To(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return To(t, e);
  }
}
function Jb(t) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(t)) return Array.from(t);
}
function Qb(t) {
  if (Array.isArray(t)) return To(t);
}
function To(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var e0 = function (e) {
    return e;
  },
  np = {},
  ip = function (e) {
    return e === np;
  },
  Dc = function (e) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 && ip(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : e.apply(void 0, arguments);
    };
  },
  t0 = function t(e, r) {
    return e === 1
      ? r
      : Dc(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== np;
          }).length;
          return o >= e
            ? r.apply(void 0, i)
            : t(
                e - o,
                Dc(function () {
                  for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++)
                    l[c] = arguments[c];
                  var f = i.map(function (s) {
                    return ip(s) ? l.shift() : s;
                  });
                  return r.apply(void 0, Hb(f).concat(l));
                }),
              );
        });
  },
  Ei = function (e) {
    return t0(e.length, e);
  },
  _o = function (e, r) {
    for (var n = [], i = e; i < r; ++i) n[i - e] = i;
    return n;
  },
  r0 = Ei(function (t, e) {
    return Array.isArray(e)
      ? e.map(t)
      : Object.keys(e)
          .map(function (r) {
            return e[r];
          })
          .map(t);
  }),
  n0 = function () {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    if (!r.length) return e0;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, l) {
          return l(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  $o = function (e) {
    return Array.isArray(e) ? e.reverse() : e.split('').reverse.join('');
  },
  ap = function (e) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, l) {
            return u === r[l];
          })) ||
          ((r = a), (n = e.apply(void 0, a))),
        n
      );
    };
  };
function i0(t) {
  var e;
  return (t === 0 ? (e = 1) : (e = Math.floor(new J(t).abs().log(10).toNumber()) + 1), e);
}
function a0(t, e, r) {
  for (var n = new J(t), i = 0, a = []; n.lt(e) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var o0 = Ei(function (t, e, r) {
    var n = +t,
      i = +e;
    return n + r * (i - n);
  }),
  u0 = Ei(function (t, e, r) {
    var n = e - +t;
    return ((n = n || 1 / 0), (r - t) / n);
  }),
  l0 = Ei(function (t, e, r) {
    var n = e - +t;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n)));
  });
const Ti = {
  rangeStep: a0,
  getDigitCount: i0,
  interpolateNumber: o0,
  uninterpolateNumber: u0,
  uninterpolateTruncation: l0,
};
function Io(t) {
  return f0(t) || s0(t) || op(t) || c0();
}
function c0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s0(t) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(t)) return Array.from(t);
}
function f0(t) {
  if (Array.isArray(t)) return Co(t);
}
function Wr(t, e) {
  return v0(t) || p0(t, e) || op(t, e) || d0();
}
function d0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function op(t, e) {
  if (t) {
    if (typeof t == 'string') return Co(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Co(t, e);
  }
}
function Co(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function p0(t, e) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(t)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = t[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(e && r.length === e));
        n = !0
      );
    } catch (l) {
      ((i = !0), (a = l));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function v0(t) {
  if (Array.isArray(t)) return t;
}
function up(t) {
  var e = Wr(t, 2),
    r = e[0],
    n = e[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function lp(t, e, r) {
  if (t.lte(0)) return new J(0);
  var n = Ti.getDigitCount(t.toNumber()),
    i = new J(10).pow(n),
    a = t.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new J(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    l = u.mul(i);
  return e ? l : new J(Math.ceil(l));
}
function h0(t, e, r) {
  var n = 1,
    i = new J(t);
  if (!i.isint() && r) {
    var a = Math.abs(t);
    a < 1
      ? ((n = new J(10).pow(Ti.getDigitCount(t) - 1)),
        (i = new J(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new J(Math.floor(t)));
  } else t === 0 ? (i = new J(Math.floor((e - 1) / 2))) : r || (i = new J(Math.floor(t)));
  var o = Math.floor((e - 1) / 2),
    u = n0(
      r0(function (l) {
        return i.add(new J(l - o).mul(n)).toNumber();
      }),
      _o,
    );
  return u(0, e);
}
function cp(t, e, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (r - 1)))
    return { step: new J(0), tickMin: new J(0), tickMax: new J(0) };
  var a = lp(new J(e).sub(t).div(r - 1), n, i),
    o;
  t <= 0 && e >= 0 ? (o = new J(0)) : ((o = new J(t).add(e).div(2)), (o = o.sub(new J(o).mod(a))));
  var u = Math.ceil(o.sub(t).div(a).toNumber()),
    l = Math.ceil(new J(e).sub(o).div(a).toNumber()),
    c = u + l + 1;
  return c > r
    ? cp(t, e, r, n, i + 1)
    : (c < r && ((l = e > 0 ? l + (r - c) : l), (u = e > 0 ? u : u + (r - c))),
      { step: a, tickMin: o.sub(new J(u).mul(a)), tickMax: o.add(new J(l).mul(a)) });
}
function y0(t) {
  var e = Wr(t, 2),
    r = e[0],
    n = e[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = up([r, n]),
    l = Wr(u, 2),
    c = l[0],
    f = l[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var s =
      f === 1 / 0
        ? [c].concat(
            Io(
              _o(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Io(
              _o(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? $o(s) : s;
  }
  if (c === f) return h0(c, i, a);
  var d = cp(c, f, o, a),
    p = d.step,
    m = d.tickMin,
    y = d.tickMax,
    v = Ti.rangeStep(m, y.add(new J(0.1).mul(p)), p);
  return r > n ? $o(v) : v;
}
function m0(t, e) {
  var r = Wr(t, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = up([n, i]),
    u = Wr(o, 2),
    l = u[0],
    c = u[1];
  if (l === -1 / 0 || c === 1 / 0) return [n, i];
  if (l === c) return [l];
  var f = Math.max(e, 2),
    s = lp(new J(c).sub(l).div(f - 1), a, 0),
    d = [].concat(Io(Ti.rangeStep(new J(l), new J(c).sub(new J(0.99).mul(s)), s)), [c]);
  return n > i ? $o(d) : d;
}
var g0 = ap(y0),
  b0 = ap(m0),
  O0 = ['offset', 'layout', 'width', 'dataKey', 'data', 'dataPointFormatter', 'xAxis', 'yAxis'];
function tr(t) {
  '@babel/helpers - typeof';
  return (
    (tr =
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
    tr(t)
  );
}
function Gn() {
  return (
    (Gn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Gn.apply(this, arguments)
  );
}
function w0(t, e) {
  return P0(t) || A0(t, e) || S0(t, e) || x0();
}
function x0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S0(t, e) {
  if (t) {
    if (typeof t == 'string') return Nc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nc(t, e);
  }
}
function Nc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function A0(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function P0(t) {
  if (Array.isArray(t)) return t;
}
function j0(t, e) {
  if (t == null) return {};
  var r = E0(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function E0(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function T0(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _0(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, dp(n.key), n));
  }
}
function $0(t, e, r) {
  return (e && _0(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function I0(t, e, r) {
  return (
    (e = Un(e)),
    C0(t, sp() ? Reflect.construct(e, r || [], Un(t).constructor) : e.apply(t, r))
  );
}
function C0(t, e) {
  if (e && (tr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return M0(t);
}
function M0(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function sp() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sp = function () {
    return !!t;
  })();
}
function Un(t) {
  return (
    (Un = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Un(t)
  );
}
function k0(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Mo(t, e));
}
function Mo(t, e) {
  return (
    (Mo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Mo(t, e)
  );
}
function fp(t, e, r) {
  return (
    (e = dp(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function dp(t) {
  var e = D0(t, 'string');
  return tr(e) == 'symbol' ? e : e + '';
}
function D0(t, e) {
  if (tr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (tr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var _i = (function (t) {
  function e() {
    return (T0(this, e), I0(this, e, arguments));
  }
  return (
    k0(e, t),
    $0(e, [
      {
        key: 'render',
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            l = n.data,
            c = n.dataPointFormatter,
            f = n.xAxis,
            s = n.yAxis,
            d = j0(n, O0),
            p = H(d, !1);
          this.props.direction === 'x' && f.type !== 'number' && Ct(!1);
          var m = l.map(function (y) {
            var v = c(y, u),
              g = v.x,
              b = v.y,
              O = v.value,
              x = v.errorVal;
            if (!x) return null;
            var h = [],
              w,
              S;
            if (Array.isArray(x)) {
              var A = w0(x, 2);
              ((w = A[0]), (S = A[1]));
            } else w = S = x;
            if (a === 'vertical') {
              var P = f.scale,
                I = b + i,
                T = I + o,
                E = I - o,
                $ = P(O - w),
                k = P(O + S);
              (h.push({ x1: k, y1: T, x2: k, y2: E }),
                h.push({ x1: $, y1: I, x2: k, y2: I }),
                h.push({ x1: $, y1: T, x2: $, y2: E }));
            } else if (a === 'horizontal') {
              var C = s.scale,
                D = g + i,
                N = D - o,
                B = D + o,
                z = C(O - w),
                W = C(O + S);
              (h.push({ x1: N, y1: W, x2: B, y2: W }),
                h.push({ x1: D, y1: z, x2: D, y2: W }),
                h.push({ x1: N, y1: z, x2: B, y2: z }));
            }
            return j.createElement(
              me,
              Gn(
                {
                  className: 'recharts-errorBar',
                  key: 'bar-'.concat(
                    h.map(function (U) {
                      return ''.concat(U.x1, '-').concat(U.x2, '-').concat(U.y1, '-').concat(U.y2);
                    }),
                  ),
                },
                p,
              ),
              h.map(function (U) {
                return j.createElement(
                  'line',
                  Gn({}, U, {
                    key: 'line-'.concat(U.x1, '-').concat(U.x2, '-').concat(U.y1, '-').concat(U.y2),
                  }),
                );
              }),
            );
          });
          return j.createElement(me, { className: 'recharts-errorBars' }, m);
        },
      },
    ])
  );
})(j.Component);
fp(_i, 'defaultProps', {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal',
});
fp(_i, 'displayName', 'ErrorBar');
function Fr(t) {
  '@babel/helpers - typeof';
  return (
    (Fr =
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
    Fr(t)
  );
}
function Rc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function At(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Rc(Object(r), !0).forEach(function (n) {
          N0(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Rc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function N0(t, e, r) {
  return (
    (e = R0(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function R0(t) {
  var e = B0(t, 'string');
  return Fr(e) == 'symbol' ? e : e + '';
}
function B0(t, e) {
  if (Fr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Fr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var pp = function (e) {
  var r = e.children,
    n = e.formattedGraphicalItems,
    i = e.legendWidth,
    a = e.legendContent,
    o = _e(r, _t);
  if (!o) return null;
  var u = _t.defaultProps,
    l = u !== void 0 ? At(At({}, u), o.props) : {},
    c;
  return (
    o.props && o.props.payload
      ? (c = o.props && o.props.payload)
      : a === 'children'
        ? (c = (n || []).reduce(function (f, s) {
            var d = s.item,
              p = s.props,
              m = p.sectors || p.data || [];
            return f.concat(
              m.map(function (y) {
                return {
                  type: o.props.iconType || d.props.legendType,
                  value: y.name,
                  color: y.fill,
                  payload: y,
                };
              }),
            );
          }, []))
        : (c = (n || []).map(function (f) {
            var s = f.item,
              d = s.type.defaultProps,
              p = d !== void 0 ? At(At({}, d), s.props) : {},
              m = p.dataKey,
              y = p.name,
              v = p.legendType,
              g = p.hide;
            return {
              inactive: g,
              dataKey: m,
              type: l.iconType || v || 'square',
              color: Lu(s),
              value: y || m,
              payload: p,
            };
          })),
    At(At(At({}, l), _t.getWithHeight(o, i)), {}, { payload: c, item: o })
  );
};
function Gr(t) {
  '@babel/helpers - typeof';
  return (
    (Gr =
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
    Gr(t)
  );
}
function Bc(t) {
  return W0(t) || z0(t) || q0(t) || L0();
}
function L0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q0(t, e) {
  if (t) {
    if (typeof t == 'string') return ko(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ko(t, e);
  }
}
function z0(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function W0(t) {
  if (Array.isArray(t)) return ko(t);
}
function ko(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Lc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function oe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Lc(Object(r), !0).forEach(function (n) {
          Ht(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Lc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ht(t, e, r) {
  return (
    (e = F0(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function F0(t) {
  var e = G0(t, 'string');
  return Gr(e) == 'symbol' ? e : e + '';
}
function G0(t, e) {
  if (Gr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Gr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Ze(t, e, r) {
  return X(t) || X(e) ? r : ve(e) ? Ne(t, e, r) : V(e) ? e(t) : r;
}
function Cr(t, e, r, n) {
  var i = Fb(t, function (u) {
    return Ze(u, e);
  });
  if (r === 'number') {
    var a = i.filter(function (u) {
      return R(u) || parseFloat(u);
    });
    return a.length ? [ji(a), Pi(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !X(u);
      })
    : i;
  return o.map(function (u) {
    return ve(u) || u instanceof Date ? u : '';
  });
}
var U0 = function (e) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n?.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === 'angleAxis' &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var l = a.range, c = 0; c < u; c++) {
        var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate,
          s = i[c].coordinate,
          d = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate,
          p = void 0;
        if (ze(s - f) !== ze(d - s)) {
          var m = [];
          if (ze(d - s) === ze(l[1] - l[0])) {
            p = d;
            var y = s + l[1] - l[0];
            ((m[0] = Math.min(y, (y + f) / 2)), (m[1] = Math.max(y, (y + f) / 2)));
          } else {
            p = f;
            var v = d + l[1] - l[0];
            ((m[0] = Math.min(s, (v + s) / 2)), (m[1] = Math.max(s, (v + s) / 2)));
          }
          var g = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
          if ((e > g[0] && e <= g[1]) || (e >= m[0] && e <= m[1])) {
            o = i[c].index;
            break;
          }
        } else {
          var b = Math.min(f, d),
            O = Math.max(f, d);
          if (e > (b + s) / 2 && e <= (O + s) / 2) {
            o = i[c].index;
            break;
          }
        }
      }
    else
      for (var x = 0; x < u; x++)
        if (
          (x === 0 && e <= (n[x].coordinate + n[x + 1].coordinate) / 2) ||
          (x > 0 &&
            x < u - 1 &&
            e > (n[x].coordinate + n[x - 1].coordinate) / 2 &&
            e <= (n[x].coordinate + n[x + 1].coordinate) / 2) ||
          (x === u - 1 && e > (n[x].coordinate + n[x - 1].coordinate) / 2)
        ) {
          o = n[x].index;
          break;
        }
    return o;
  },
  Lu = function (e) {
    var r,
      n = e,
      i = n.type.displayName,
      a =
        (r = e.type) !== null && r !== void 0 && r.defaultProps
          ? oe(oe({}, e.type.defaultProps), e.props)
          : e.props,
      o = a.stroke,
      u = a.fill,
      l;
    switch (i) {
      case 'Line':
        l = o;
        break;
      case 'Area':
      case 'Radar':
        l = o && o !== 'none' ? o : u;
        break;
      default:
        l = u;
        break;
    }
    return l;
  },
  K0 = function (e) {
    var r = e.barSize,
      n = e.totalSize,
      i = e.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), l = 0, c = u.length; l < c; l++)
      for (var f = a[u[l]].stackGroups, s = Object.keys(f), d = 0, p = s.length; d < p; d++) {
        var m = f[s[d]],
          y = m.items,
          v = m.cateAxisId,
          g = y.filter(function (S) {
            return ut(S.type).indexOf('Bar') >= 0;
          });
        if (g && g.length) {
          var b = g[0].type.defaultProps,
            O = b !== void 0 ? oe(oe({}, b), g[0].props) : g[0].props,
            x = O.barSize,
            h = O[v];
          o[h] || (o[h] = []);
          var w = X(x) ? r : x;
          o[h].push({ item: g[0], stackList: g.slice(1), barSize: X(w) ? void 0 : We(w, n, 0) });
        }
      }
    return o;
  },
  V0 = function (e) {
    var r = e.barGap,
      n = e.barCategoryGap,
      i = e.bandSize,
      a = e.sizeList,
      o = a === void 0 ? [] : a,
      u = e.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var c = We(r, i, 0, !0),
      f,
      s = [];
    if (o[0].barSize === +o[0].barSize) {
      var d = !1,
        p = i / l,
        m = o.reduce(function (x, h) {
          return x + h.barSize || 0;
        }, 0);
      ((m += (l - 1) * c),
        m >= i && ((m -= (l - 1) * c), (c = 0)),
        m >= i && p > 0 && ((d = !0), (p *= 0.9), (m = l * p)));
      var y = ((i - m) / 2) >> 0,
        v = { offset: y - c, size: 0 };
      f = o.reduce(function (x, h) {
        var w = {
            item: h.item,
            position: { offset: v.offset + v.size + c, size: d ? p : h.barSize },
          },
          S = [].concat(Bc(x), [w]);
        return (
          (v = S[S.length - 1].position),
          h.stackList &&
            h.stackList.length &&
            h.stackList.forEach(function (A) {
              S.push({ item: A, position: v });
            }),
          S
        );
      }, s);
    } else {
      var g = We(n, i, 0, !0);
      i - 2 * g - (l - 1) * c <= 0 && (c = 0);
      var b = (i - 2 * g - (l - 1) * c) / l;
      b > 1 && (b >>= 0);
      var O = u === +u ? Math.min(b, u) : b;
      f = o.reduce(function (x, h, w) {
        var S = [].concat(Bc(x), [
          { item: h.item, position: { offset: g + (b + c) * w + (b - O) / 2, size: O } },
        ]);
        return (
          h.stackList &&
            h.stackList.length &&
            h.stackList.forEach(function (A) {
              S.push({ item: A, position: S[S.length - 1].position });
            }),
          S
        );
      }, s);
    }
    return f;
  },
  X0 = function (e, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      l = o - (u.left || 0) - (u.right || 0),
      c = pp({ children: a, legendWidth: l });
    if (c) {
      var f = i || {},
        s = f.width,
        d = f.height,
        p = c.align,
        m = c.verticalAlign,
        y = c.layout;
      if ((y === 'vertical' || (y === 'horizontal' && m === 'middle')) && p !== 'center' && R(e[p]))
        return oe(oe({}, e), {}, Ht({}, p, e[p] + (s || 0)));
      if ((y === 'horizontal' || (y === 'vertical' && p === 'center')) && m !== 'middle' && R(e[m]))
        return oe(oe({}, e), {}, Ht({}, m, e[m] + (d || 0)));
    }
    return e;
  },
  H0 = function (e, r, n) {
    return X(r)
      ? !0
      : e === 'horizontal'
        ? r === 'yAxis'
        : e === 'vertical' || n === 'x'
          ? r === 'xAxis'
          : n === 'y'
            ? r === 'yAxis'
            : !0;
  },
  vp = function (e, r, n, i, a) {
    var o = r.props.children,
      u = Fe(o, _i).filter(function (c) {
        return H0(i, a, c.props.direction);
      });
    if (u && u.length) {
      var l = u.map(function (c) {
        return c.props.dataKey;
      });
      return e.reduce(
        function (c, f) {
          var s = Ze(f, n);
          if (X(s)) return c;
          var d = Array.isArray(s) ? [ji(s), Pi(s)] : [s, s],
            p = l.reduce(
              function (m, y) {
                var v = Ze(f, y, 0),
                  g = d[0] - Math.abs(Array.isArray(v) ? v[0] : v),
                  b = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
                return [Math.min(g, m[0]), Math.max(b, m[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  Y0 = function (e, r, n, i, a) {
    var o = r
      .map(function (u) {
        return vp(e, u, n, a, i);
      })
      .filter(function (u) {
        return !X(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, l) {
            return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  hp = function (e, r, n, i, a) {
    var o = r.map(function (l) {
      var c = l.props.dataKey;
      return (n === 'number' && c && vp(e, l, c, i)) || Cr(e, c, n, a);
    });
    if (n === 'number')
      return o.reduce(
        function (l, c) {
          return [Math.min(l[0], c[0]), Math.max(l[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (l, c) {
      for (var f = 0, s = c.length; f < s; f++) u[c[f]] || ((u[c[f]] = !0), l.push(c[f]));
      return l;
    }, []);
  },
  yp = function (e, r) {
    return (
      (e === 'horizontal' && r === 'xAxis') ||
      (e === 'vertical' && r === 'yAxis') ||
      (e === 'centric' && r === 'angleAxis') ||
      (e === 'radial' && r === 'radiusAxis')
    );
  },
  mp = function (e, r, n, i) {
    if (i)
      return e.map(function (l) {
        return l.coordinate;
      });
    var a,
      o,
      u = e.map(function (l) {
        return (l.coordinate === r && (a = !0), l.coordinate === n && (o = !0), l.coordinate);
      });
    return (a || u.push(r), o || u.push(n), u);
  },
  ot = function (e, r, n) {
    if (!e) return null;
    var i = e.scale,
      a = e.duplicateDomain,
      o = e.type,
      u = e.range,
      l = e.realScaleType === 'scaleBand' ? i.bandwidth() / 2 : 2,
      c = (r || n) && o === 'category' && i.bandwidth ? i.bandwidth() / l : 0;
    if (
      ((c = e.axisType === 'angleAxis' && u?.length >= 2 ? ze(u[0] - u[1]) * 2 * c : c),
      r && (e.ticks || e.niceTicks))
    ) {
      var f = (e.ticks || e.niceTicks).map(function (s) {
        var d = a ? a.indexOf(s) : s;
        return { coordinate: i(d) + c, value: s, offset: c };
      });
      return f.filter(function (s) {
        return !yn(s.coordinate);
      });
    }
    return e.isCategorical && e.categoricalDomain
      ? e.categoricalDomain.map(function (s, d) {
          return { coordinate: i(s) + c, value: s, index: d, offset: c };
        })
      : i.ticks && !n
        ? i.ticks(e.tickCount).map(function (s) {
            return { coordinate: i(s) + c, value: s, offset: c };
          })
        : i.domain().map(function (s, d) {
            return { coordinate: i(s) + c, value: a ? a[s] : s, index: d, offset: c };
          });
  },
  _a = new WeakMap(),
  An = function (e, r) {
    if (typeof r != 'function') return e;
    _a.has(e) || _a.set(e, new WeakMap());
    var n = _a.get(e);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (e.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  gp = function (e, r, n) {
    var i = e.scale,
      a = e.type,
      o = e.layout,
      u = e.axisType;
    if (i === 'auto')
      return o === 'radial' && u === 'radiusAxis'
        ? { scale: oo(), realScaleType: 'band' }
        : o === 'radial' && u === 'angleAxis'
          ? { scale: lo(), realScaleType: 'linear' }
          : a === 'category' &&
              r &&
              (r.indexOf('LineChart') >= 0 ||
                r.indexOf('AreaChart') >= 0 ||
                (r.indexOf('ComposedChart') >= 0 && !n))
            ? { scale: $r(), realScaleType: 'point' }
            : a === 'category'
              ? { scale: oo(), realScaleType: 'band' }
              : { scale: lo(), realScaleType: 'linear' };
    if (Mt(i)) {
      var l = 'scale'.concat(Si(i));
      return { scale: (Pc[l] || $r)(), realScaleType: Pc[l] ? l : 'point' };
    }
    return V(i) ? { scale: i } : { scale: $r(), realScaleType: 'point' };
  },
  qc = 1e-4,
  bp = function (e) {
    var r = e.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = e.range(),
        a = Math.min(i[0], i[1]) - qc,
        o = Math.max(i[0], i[1]) + qc,
        u = e(r[0]),
        l = e(r[n - 1]);
      (u < a || u > o || l < a || l > o) && e.domain([r[0], r[n - 1]]);
    }
  },
  Z0 = function (e, r) {
    if (!e) return null;
    for (var n = 0, i = e.length; n < i; n++) if (e[n].item === r) return e[n].position;
    return null;
  },
  J0 = function (e, r) {
    if (!r || r.length !== 2 || !R(r[0]) || !R(r[1])) return e;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [e[0], e[1]];
    return (
      (!R(e[0]) || e[0] < n) && (a[0] = n),
      (!R(e[1]) || e[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  Q0 = function (e) {
    var r = e.length;
    if (!(r <= 0))
      for (var n = 0, i = e[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var l = yn(e[u][n][1]) ? e[u][n][0] : e[u][n][1];
          l >= 0
            ? ((e[u][n][0] = a), (e[u][n][1] = a + l), (a = e[u][n][1]))
            : ((e[u][n][0] = o), (e[u][n][1] = o + l), (o = e[u][n][1]));
        }
  },
  eO = function (e) {
    var r = e.length;
    if (!(r <= 0))
      for (var n = 0, i = e[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = yn(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
          u >= 0
            ? ((e[o][n][0] = a), (e[o][n][1] = a + u), (a = e[o][n][1]))
            : ((e[o][n][0] = 0), (e[o][n][1] = 0));
        }
  },
  tO = { sign: Q0, expand: Iy, none: Yt, silhouette: Cy, wiggle: My, positive: eO },
  rO = function (e, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = tO[n],
      o = $y()
        .keys(i)
        .value(function (u, l) {
          return +Ze(u, l, 0);
        })
        .order(so)
        .offset(a);
    return o(e);
  },
  nO = function (e, r, n, i, a, o) {
    if (!e) return null;
    var u = o ? r.reverse() : r,
      l = {},
      c = u.reduce(function (s, d) {
        var p,
          m =
            (p = d.type) !== null && p !== void 0 && p.defaultProps
              ? oe(oe({}, d.type.defaultProps), d.props)
              : d.props,
          y = m.stackId,
          v = m.hide;
        if (v) return s;
        var g = m[n],
          b = s[g] || { hasStack: !1, stackGroups: {} };
        if (ve(y)) {
          var O = b.stackGroups[y] || { numericAxisId: n, cateAxisId: i, items: [] };
          (O.items.push(d), (b.hasStack = !0), (b.stackGroups[y] = O));
        } else b.stackGroups[xi('_stackId_')] = { numericAxisId: n, cateAxisId: i, items: [d] };
        return oe(oe({}, s), {}, Ht({}, g, b));
      }, l),
      f = {};
    return Object.keys(c).reduce(function (s, d) {
      var p = c[d];
      if (p.hasStack) {
        var m = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (y, v) {
          var g = p.stackGroups[v];
          return oe(
            oe({}, y),
            {},
            Ht({}, v, {
              numericAxisId: n,
              cateAxisId: i,
              items: g.items,
              stackedData: rO(e, g.items, a),
            }),
          );
        }, m);
      }
      return oe(oe({}, s), {}, Ht({}, d, p));
    }, f);
  },
  Op = function (e, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      l = n || r.scale;
    if (l !== 'auto' && l !== 'linear') return null;
    if (a && i === 'number' && o && (o[0] === 'auto' || o[1] === 'auto')) {
      var c = e.domain();
      if (!c.length) return null;
      var f = g0(c, a, u);
      return (e.domain([ji(f), Pi(f)]), { niceTicks: f });
    }
    if (a && i === 'number') {
      var s = e.domain(),
        d = b0(s, a, u);
      return { niceTicks: d };
    }
    return null;
  },
  zc = function (e) {
    var r = e.axis,
      n = e.ticks,
      i = e.offset,
      a = e.bandSize,
      o = e.entry,
      u = e.index;
    if (r.type === 'category') return n[u] ? n[u].coordinate + i : null;
    var l = Ze(o, r.dataKey, r.domain[u]);
    return X(l) ? null : r.scale(l) - a / 2 + i;
  },
  iO = function (e) {
    var r = e.numericAxis,
      n = r.scale.domain();
    if (r.type === 'number') {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  aO = function (e, r) {
    var n,
      i =
        (n = e.type) !== null && n !== void 0 && n.defaultProps
          ? oe(oe({}, e.type.defaultProps), e.props)
          : e.props,
      a = i.stackId;
    if (ve(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(e);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  oO = function (e) {
    return e.reduce(
      function (r, n) {
        return [ji(n.concat([r[0]]).filter(R)), Pi(n.concat([r[1]]).filter(R))];
      },
      [1 / 0, -1 / 0],
    );
  },
  wp = function (e, r, n) {
    return Object.keys(e)
      .reduce(
        function (i, a) {
          var o = e[a],
            u = o.stackedData,
            l = u.reduce(
              function (c, f) {
                var s = oO(f.slice(r, n + 1));
                return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  Wc = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Fc = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Do = function (e, r, n) {
    if (V(e)) return e(r, n);
    if (!Array.isArray(e)) return r;
    var i = [];
    if (R(e[0])) i[0] = n ? e[0] : Math.min(e[0], r[0]);
    else if (Wc.test(e[0])) {
      var a = +Wc.exec(e[0])[1];
      i[0] = r[0] - a;
    } else V(e[0]) ? (i[0] = e[0](r[0])) : (i[0] = r[0]);
    if (R(e[1])) i[1] = n ? e[1] : Math.max(e[1], r[1]);
    else if (Fc.test(e[1])) {
      var o = +Fc.exec(e[1])[1];
      i[1] = r[1] + o;
    } else V(e[1]) ? (i[1] = e[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  Kn = function (e, r, n) {
    if (e && e.scale && e.scale.bandwidth) {
      var i = e.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (e && r && r.length >= 2) {
      for (
        var a = ku(r, function (s) {
            return s.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          l = a.length;
        u < l;
        u++
      ) {
        var c = a[u],
          f = a[u - 1];
        o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  Gc = function (e, r, n) {
    return !e || !e.length || Nu(e, Ne(n, 'type.defaultProps.domain')) ? r : e;
  },
  xp = function (e, r) {
    var n = e.type.defaultProps ? oe(oe({}, e.type.defaultProps), e.props) : e.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      l = n.tooltipType,
      c = n.chartType,
      f = n.hide;
    return oe(
      oe({}, H(e, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Lu(e),
        value: Ze(r, i),
        type: l,
        payload: r,
        chartType: c,
        hide: f,
      },
    );
  };
function Ur(t) {
  '@babel/helpers - typeof';
  return (
    (Ur =
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
    Ur(t)
  );
}
function Uc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function it(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Uc(Object(r), !0).forEach(function (n) {
          Sp(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Uc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Sp(t, e, r) {
  return (
    (e = uO(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function uO(t) {
  var e = lO(t, 'string');
  return Ur(e) == 'symbol' ? e : e + '';
}
function lO(t, e) {
  if (Ur(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Ur(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function cO(t, e) {
  return pO(t) || dO(t, e) || fO(t, e) || sO();
}
function sO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fO(t, e) {
  if (t) {
    if (typeof t == 'string') return Kc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kc(t, e);
  }
}
function Kc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function dO(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function pO(t) {
  if (Array.isArray(t)) return t;
}
var Vn = Math.PI / 180,
  vO = function (e) {
    return (e * 180) / Math.PI;
  },
  Oe = function (e, r, n, i) {
    return { x: e + Math.cos(-Vn * i) * n, y: r + Math.sin(-Vn * i) * n };
  },
  hO = function (e, r) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(r - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  UE = function (e, r, n, i, a) {
    var o = e.width,
      u = e.height,
      l = e.startAngle,
      c = e.endAngle,
      f = We(e.cx, o, o / 2),
      s = We(e.cy, u, u / 2),
      d = hO(o, u, n),
      p = We(e.innerRadius, d, 0),
      m = We(e.outerRadius, d, d * 0.8),
      y = Object.keys(r);
    return y.reduce(function (v, g) {
      var b = r[g],
        O = b.domain,
        x = b.reversed,
        h;
      if (X(b.range))
        (i === 'angleAxis' ? (h = [l, c]) : i === 'radiusAxis' && (h = [p, m]),
          x && (h = [h[1], h[0]]));
      else {
        h = b.range;
        var w = h,
          S = cO(w, 2);
        ((l = S[0]), (c = S[1]));
      }
      var A = gp(b, a),
        P = A.realScaleType,
        I = A.scale;
      (I.domain(O).range(h), bp(I));
      var T = Op(I, it(it({}, b), {}, { realScaleType: P })),
        E = it(
          it(it({}, b), T),
          {},
          {
            range: h,
            radius: m,
            realScaleType: P,
            scale: I,
            cx: f,
            cy: s,
            innerRadius: p,
            outerRadius: m,
            startAngle: l,
            endAngle: c,
          },
        );
      return it(it({}, v), {}, Sp({}, g, E));
    }, {});
  },
  yO = function (e, r) {
    var n = e.x,
      i = e.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  mO = function (e, r) {
    var n = e.x,
      i = e.y,
      a = r.cx,
      o = r.cy,
      u = yO({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var l = (n - a) / u,
      c = Math.acos(l);
    return (i > o && (c = 2 * Math.PI - c), { radius: u, angle: vO(c), angleInRadian: c });
  },
  gO = function (e) {
    var r = e.startAngle,
      n = e.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  bO = function (e, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return e + u * 360;
  },
  Vc = function (e, r) {
    var n = e.x,
      i = e.y,
      a = mO({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      l = r.innerRadius,
      c = r.outerRadius;
    if (o < l || o > c) return !1;
    if (o === 0) return !0;
    var f = gO(r),
      s = f.startAngle,
      d = f.endAngle,
      p = u,
      m;
    if (s <= d) {
      for (; p > d; ) p -= 360;
      for (; p < s; ) p += 360;
      m = p >= s && p <= d;
    } else {
      for (; p > s; ) p -= 360;
      for (; p < d; ) p += 360;
      m = p >= d && p <= s;
    }
    return m ? it(it({}, r), {}, { radius: o, angle: bO(p, r) }) : null;
  },
  KE = function (e) {
    return !M.isValidElement(e) && !V(e) && typeof e != 'boolean' ? e.className : '';
  };
function Kr(t) {
  '@babel/helpers - typeof';
  return (
    (Kr =
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
    Kr(t)
  );
}
var OO = ['offset'];
function wO(t) {
  return PO(t) || AO(t) || SO(t) || xO();
}
function xO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SO(t, e) {
  if (t) {
    if (typeof t == 'string') return No(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return No(t, e);
  }
}
function AO(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function PO(t) {
  if (Array.isArray(t)) return No(t);
}
function No(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function jO(t, e) {
  if (t == null) return {};
  var r = EO(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function EO(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function Xc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function pe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Xc(Object(r), !0).forEach(function (n) {
          TO(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Xc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function TO(t, e, r) {
  return (
    (e = _O(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function _O(t) {
  var e = $O(t, 'string');
  return Kr(e) == 'symbol' ? e : e + '';
}
function $O(t, e) {
  if (Kr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Kr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Vr() {
  return (
    (Vr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Vr.apply(this, arguments)
  );
}
var IO = function (e) {
    var r = e.value,
      n = e.formatter,
      i = X(e.children) ? r : e.children;
    return V(n) ? n(i) : i;
  },
  CO = function (e, r) {
    var n = ze(r - e),
      i = Math.min(Math.abs(r - e), 360);
    return n * i;
  },
  MO = function (e, r, n) {
    var i = e.position,
      a = e.viewBox,
      o = e.offset,
      u = e.className,
      l = a,
      c = l.cx,
      f = l.cy,
      s = l.innerRadius,
      d = l.outerRadius,
      p = l.startAngle,
      m = l.endAngle,
      y = l.clockWise,
      v = (s + d) / 2,
      g = CO(p, m),
      b = g >= 0 ? 1 : -1,
      O,
      x;
    (i === 'insideStart'
      ? ((O = p + b * o), (x = y))
      : i === 'insideEnd'
        ? ((O = m - b * o), (x = !y))
        : i === 'end' && ((O = m + b * o), (x = y)),
      (x = g <= 0 ? x : !x));
    var h = Oe(c, f, v, O),
      w = Oe(c, f, v, O + (x ? 1 : -1) * 359),
      S = 'M'
        .concat(h.x, ',')
        .concat(
          h.y,
          `
    A`,
        )
        .concat(v, ',')
        .concat(v, ',0,1,')
        .concat(
          x ? 0 : 1,
          `,
    `,
        )
        .concat(w.x, ',')
        .concat(w.y),
      A = X(e.id) ? xi('recharts-radial-line-') : e.id;
    return j.createElement(
      'text',
      Vr({}, n, { dominantBaseline: 'central', className: Y('recharts-radial-bar-label', u) }),
      j.createElement('defs', null, j.createElement('path', { id: A, d: S })),
      j.createElement('textPath', { xlinkHref: '#'.concat(A) }, r),
    );
  },
  kO = function (e) {
    var r = e.viewBox,
      n = e.offset,
      i = e.position,
      a = r,
      o = a.cx,
      u = a.cy,
      l = a.innerRadius,
      c = a.outerRadius,
      f = a.startAngle,
      s = a.endAngle,
      d = (f + s) / 2;
    if (i === 'outside') {
      var p = Oe(o, u, c + n, d),
        m = p.x,
        y = p.y;
      return { x: m, y, textAnchor: m >= o ? 'start' : 'end', verticalAnchor: 'middle' };
    }
    if (i === 'center') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'middle' };
    if (i === 'centerTop') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'start' };
    if (i === 'centerBottom') return { x: o, y: u, textAnchor: 'middle', verticalAnchor: 'end' };
    var v = (l + c) / 2,
      g = Oe(o, u, v, d),
      b = g.x,
      O = g.y;
    return { x: b, y: O, textAnchor: 'middle', verticalAnchor: 'middle' };
  },
  DO = function (e) {
    var r = e.viewBox,
      n = e.parentViewBox,
      i = e.offset,
      a = e.position,
      o = r,
      u = o.x,
      l = o.y,
      c = o.width,
      f = o.height,
      s = f >= 0 ? 1 : -1,
      d = s * i,
      p = s > 0 ? 'end' : 'start',
      m = s > 0 ? 'start' : 'end',
      y = c >= 0 ? 1 : -1,
      v = y * i,
      g = y > 0 ? 'end' : 'start',
      b = y > 0 ? 'start' : 'end';
    if (a === 'top') {
      var O = { x: u + c / 2, y: l - s * i, textAnchor: 'middle', verticalAnchor: p };
      return pe(pe({}, O), n ? { height: Math.max(l - n.y, 0), width: c } : {});
    }
    if (a === 'bottom') {
      var x = { x: u + c / 2, y: l + f + d, textAnchor: 'middle', verticalAnchor: m };
      return pe(pe({}, x), n ? { height: Math.max(n.y + n.height - (l + f), 0), width: c } : {});
    }
    if (a === 'left') {
      var h = { x: u - v, y: l + f / 2, textAnchor: g, verticalAnchor: 'middle' };
      return pe(pe({}, h), n ? { width: Math.max(h.x - n.x, 0), height: f } : {});
    }
    if (a === 'right') {
      var w = { x: u + c + v, y: l + f / 2, textAnchor: b, verticalAnchor: 'middle' };
      return pe(pe({}, w), n ? { width: Math.max(n.x + n.width - w.x, 0), height: f } : {});
    }
    var S = n ? { width: c, height: f } : {};
    return a === 'insideLeft'
      ? pe({ x: u + v, y: l + f / 2, textAnchor: b, verticalAnchor: 'middle' }, S)
      : a === 'insideRight'
        ? pe({ x: u + c - v, y: l + f / 2, textAnchor: g, verticalAnchor: 'middle' }, S)
        : a === 'insideTop'
          ? pe({ x: u + c / 2, y: l + d, textAnchor: 'middle', verticalAnchor: m }, S)
          : a === 'insideBottom'
            ? pe({ x: u + c / 2, y: l + f - d, textAnchor: 'middle', verticalAnchor: p }, S)
            : a === 'insideTopLeft'
              ? pe({ x: u + v, y: l + d, textAnchor: b, verticalAnchor: m }, S)
              : a === 'insideTopRight'
                ? pe({ x: u + c - v, y: l + d, textAnchor: g, verticalAnchor: m }, S)
                : a === 'insideBottomLeft'
                  ? pe({ x: u + v, y: l + f - d, textAnchor: b, verticalAnchor: p }, S)
                  : a === 'insideBottomRight'
                    ? pe({ x: u + c - v, y: l + f - d, textAnchor: g, verticalAnchor: p }, S)
                    : hr(a) && (R(a.x) || jt(a.x)) && (R(a.y) || jt(a.y))
                      ? pe(
                          {
                            x: u + We(a.x, c),
                            y: l + We(a.y, f),
                            textAnchor: 'end',
                            verticalAnchor: 'end',
                          },
                          S,
                        )
                      : pe(
                          {
                            x: u + c / 2,
                            y: l + f / 2,
                            textAnchor: 'middle',
                            verticalAnchor: 'middle',
                          },
                          S,
                        );
  },
  NO = function (e) {
    return 'cx' in e && R(e.cx);
  };
function se(t) {
  var e = t.offset,
    r = e === void 0 ? 5 : e,
    n = jO(t, OO),
    i = pe({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    l = i.children,
    c = i.content,
    f = i.className,
    s = f === void 0 ? '' : f,
    d = i.textBreakAll;
  if (!a || (X(u) && X(l) && !M.isValidElement(c) && !V(c))) return null;
  if (M.isValidElement(c)) return M.cloneElement(c, i);
  var p;
  if (V(c)) {
    if (((p = M.createElement(c, i)), M.isValidElement(p))) return p;
  } else p = IO(i);
  var m = NO(a),
    y = H(i, !0);
  if (m && (o === 'insideStart' || o === 'insideEnd' || o === 'end')) return MO(i, p, y);
  var v = m ? kO(i) : DO(i);
  return j.createElement(Wn, Vr({ className: Y('recharts-label', s) }, y, v, { breakAll: d }), p);
}
se.displayName = 'Label';
var Ap = function (e) {
    var r = e.cx,
      n = e.cy,
      i = e.angle,
      a = e.startAngle,
      o = e.endAngle,
      u = e.r,
      l = e.radius,
      c = e.innerRadius,
      f = e.outerRadius,
      s = e.x,
      d = e.y,
      p = e.top,
      m = e.left,
      y = e.width,
      v = e.height,
      g = e.clockWise,
      b = e.labelViewBox;
    if (b) return b;
    if (R(y) && R(v)) {
      if (R(s) && R(d)) return { x: s, y: d, width: y, height: v };
      if (R(p) && R(m)) return { x: p, y: m, width: y, height: v };
    }
    return R(s) && R(d)
      ? { x: s, y: d, width: 0, height: 0 }
      : R(r) && R(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: c || 0,
            outerRadius: f || l || u || 0,
            clockWise: g,
          }
        : e.viewBox
          ? e.viewBox
          : {};
  },
  RO = function (e, r) {
    return e
      ? e === !0
        ? j.createElement(se, { key: 'label-implicit', viewBox: r })
        : ve(e)
          ? j.createElement(se, { key: 'label-implicit', viewBox: r, value: e })
          : M.isValidElement(e)
            ? e.type === se
              ? M.cloneElement(e, { key: 'label-implicit', viewBox: r })
              : j.createElement(se, { key: 'label-implicit', content: e, viewBox: r })
            : V(e)
              ? j.createElement(se, { key: 'label-implicit', content: e, viewBox: r })
              : hr(e)
                ? j.createElement(se, Vr({ viewBox: r }, e, { key: 'label-implicit' }))
                : null
      : null;
  },
  BO = function (e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && n && !e.label)) return null;
    var i = e.children,
      a = Ap(e),
      o = Fe(i, se).map(function (l, c) {
        return M.cloneElement(l, { viewBox: r || a, key: 'label-'.concat(c) });
      });
    if (!n) return o;
    var u = RO(e.label, r || a);
    return [u].concat(wO(o));
  };
se.parseViewBox = Ap;
se.renderCallByParent = BO;
var $a, Hc;
function LO() {
  if (Hc) return $a;
  Hc = 1;
  function t(e) {
    var r = e == null ? 0 : e.length;
    return r ? e[r - 1] : void 0;
  }
  return (($a = t), $a);
}
var qO = LO();
const zO = ie(qO);
function Xr(t) {
  '@babel/helpers - typeof';
  return (
    (Xr =
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
    Xr(t)
  );
}
var WO = ['valueAccessor'],
  FO = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll'];
function GO(t) {
  return XO(t) || VO(t) || KO(t) || UO();
}
function UO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KO(t, e) {
  if (t) {
    if (typeof t == 'string') return Ro(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ro(t, e);
  }
}
function VO(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function XO(t) {
  if (Array.isArray(t)) return Ro(t);
}
function Ro(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Xn() {
  return (
    (Xn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Xn.apply(this, arguments)
  );
}
function Yc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Yc(Object(r), !0).forEach(function (n) {
          HO(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Yc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function HO(t, e, r) {
  return (
    (e = YO(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function YO(t) {
  var e = ZO(t, 'string');
  return Xr(e) == 'symbol' ? e : e + '';
}
function ZO(t, e) {
  if (Xr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Xr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Jc(t, e) {
  if (t == null) return {};
  var r = JO(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function JO(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var QO = function (e) {
  return Array.isArray(e.value) ? zO(e.value) : e.value;
};
function It(t) {
  var e = t.valueAccessor,
    r = e === void 0 ? QO : e,
    n = Jc(t, WO),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    l = n.textBreakAll,
    c = Jc(n, FO);
  return !i || !i.length
    ? null
    : j.createElement(
        me,
        { className: 'recharts-label-list' },
        i.map(function (f, s) {
          var d = X(a) ? r(f, s) : Ze(f && f.payload, a),
            p = X(u) ? {} : { id: ''.concat(u, '-').concat(s) };
          return j.createElement(
            se,
            Xn({}, H(f, !0), c, p, {
              parentViewBox: f.parentViewBox,
              value: d,
              textBreakAll: l,
              viewBox: se.parseViewBox(X(o) ? f : Zc(Zc({}, f), {}, { clockWise: o })),
              key: 'label-'.concat(s),
              index: s,
            }),
          );
        }),
      );
}
It.displayName = 'LabelList';
function ew(t, e) {
  return t
    ? t === !0
      ? j.createElement(It, { key: 'labelList-implicit', data: e })
      : j.isValidElement(t) || V(t)
        ? j.createElement(It, { key: 'labelList-implicit', data: e, content: t })
        : hr(t)
          ? j.createElement(It, Xn({ data: e }, t, { key: 'labelList-implicit' }))
          : null
    : null;
}
function tw(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || (!t.children && r && !t.label)) return null;
  var n = t.children,
    i = Fe(n, It).map(function (o, u) {
      return M.cloneElement(o, { data: e, key: 'labelList-'.concat(u) });
    });
  if (!r) return i;
  var a = ew(t.label, e);
  return [a].concat(GO(i));
}
It.renderCallByParent = tw;
function Hr(t) {
  '@babel/helpers - typeof';
  return (
    (Hr =
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
    Hr(t)
  );
}
function Bo() {
  return (
    (Bo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Bo.apply(this, arguments)
  );
}
function Qc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function es(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Qc(Object(r), !0).forEach(function (n) {
          rw(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Qc(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function rw(t, e, r) {
  return (
    (e = nw(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function nw(t) {
  var e = iw(t, 'string');
  return Hr(e) == 'symbol' ? e : e + '';
}
function iw(t, e) {
  if (Hr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Hr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var aw = function (e, r) {
    var n = ze(r - e),
      i = Math.min(Math.abs(r - e), 359.999);
    return n * i;
  },
  Pn = function (e) {
    var r = e.cx,
      n = e.cy,
      i = e.radius,
      a = e.angle,
      o = e.sign,
      u = e.isExternal,
      l = e.cornerRadius,
      c = e.cornerIsExternal,
      f = l * (u ? 1 : -1) + i,
      s = Math.asin(l / f) / Vn,
      d = c ? a : a + o * s,
      p = Oe(r, n, f, d),
      m = Oe(r, n, i, d),
      y = c ? a - o * s : a,
      v = Oe(r, n, f * Math.cos(s * Vn), y);
    return { center: p, circleTangency: m, lineTangency: v, theta: s };
  },
  Pp = function (e) {
    var r = e.cx,
      n = e.cy,
      i = e.innerRadius,
      a = e.outerRadius,
      o = e.startAngle,
      u = e.endAngle,
      l = aw(o, u),
      c = o + l,
      f = Oe(r, n, a, o),
      s = Oe(r, n, a, c),
      d = 'M '
        .concat(f.x, ',')
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ',')
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(l) > 180), ',')
        .concat(
          +(o > c),
          `,
    `,
        )
        .concat(s.x, ',')
        .concat(
          s.y,
          `
  `,
        );
    if (i > 0) {
      var p = Oe(r, n, i, o),
        m = Oe(r, n, i, c);
      d += 'L '
        .concat(m.x, ',')
        .concat(
          m.y,
          `
            A `,
        )
        .concat(i, ',')
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(l) > 180), ',')
        .concat(
          +(o <= c),
          `,
            `,
        )
        .concat(p.x, ',')
        .concat(p.y, ' Z');
    } else d += 'L '.concat(r, ',').concat(n, ' Z');
    return d;
  },
  ow = function (e) {
    var r = e.cx,
      n = e.cy,
      i = e.innerRadius,
      a = e.outerRadius,
      o = e.cornerRadius,
      u = e.forceCornerRadius,
      l = e.cornerIsExternal,
      c = e.startAngle,
      f = e.endAngle,
      s = ze(f - c),
      d = Pn({ cx: r, cy: n, radius: a, angle: c, sign: s, cornerRadius: o, cornerIsExternal: l }),
      p = d.circleTangency,
      m = d.lineTangency,
      y = d.theta,
      v = Pn({ cx: r, cy: n, radius: a, angle: f, sign: -s, cornerRadius: o, cornerIsExternal: l }),
      g = v.circleTangency,
      b = v.lineTangency,
      O = v.theta,
      x = l ? Math.abs(c - f) : Math.abs(c - f) - y - O;
    if (x < 0)
      return u
        ? 'M '
            .concat(m.x, ',')
            .concat(
              m.y,
              `
        a`,
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              -o * 2,
              `,0
      `,
            )
        : Pp({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: c, endAngle: f });
    var h = 'M '
      .concat(m.x, ',')
      .concat(
        m.y,
        `
    A`,
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(s < 0), ',')
      .concat(p.x, ',')
      .concat(
        p.y,
        `
    A`,
      )
      .concat(a, ',')
      .concat(a, ',0,')
      .concat(+(x > 180), ',')
      .concat(+(s < 0), ',')
      .concat(g.x, ',')
      .concat(
        g.y,
        `
    A`,
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(s < 0), ',')
      .concat(b.x, ',')
      .concat(
        b.y,
        `
  `,
      );
    if (i > 0) {
      var w = Pn({
          cx: r,
          cy: n,
          radius: i,
          angle: c,
          sign: s,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        S = w.circleTangency,
        A = w.lineTangency,
        P = w.theta,
        I = Pn({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -s,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        T = I.circleTangency,
        E = I.lineTangency,
        $ = I.theta,
        k = l ? Math.abs(c - f) : Math.abs(c - f) - P - $;
      if (k < 0 && o === 0) return ''.concat(h, 'L').concat(r, ',').concat(n, 'Z');
      h += 'L'
        .concat(E.x, ',')
        .concat(
          E.y,
          `
      A`,
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(s < 0), ',')
        .concat(T.x, ',')
        .concat(
          T.y,
          `
      A`,
        )
        .concat(i, ',')
        .concat(i, ',0,')
        .concat(+(k > 180), ',')
        .concat(+(s > 0), ',')
        .concat(S.x, ',')
        .concat(
          S.y,
          `
      A`,
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(s < 0), ',')
        .concat(A.x, ',')
        .concat(A.y, 'Z');
    } else h += 'L'.concat(r, ',').concat(n, 'Z');
    return h;
  },
  uw = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  jp = function (e) {
    var r = es(es({}, uw), e),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      l = r.forceCornerRadius,
      c = r.cornerIsExternal,
      f = r.startAngle,
      s = r.endAngle,
      d = r.className;
    if (o < a || f === s) return null;
    var p = Y('recharts-sector', d),
      m = o - a,
      y = We(u, m, 0, !0),
      v;
    return (
      y > 0 && Math.abs(f - s) < 360
        ? (v = ow({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(y, m / 2),
            forceCornerRadius: l,
            cornerIsExternal: c,
            startAngle: f,
            endAngle: s,
          }))
        : (v = Pp({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: s })),
      j.createElement('path', Bo({}, H(r, !0), { className: p, d: v, role: 'img' }))
    );
  };
function Yr(t) {
  '@babel/helpers - typeof';
  return (
    (Yr =
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
    Yr(t)
  );
}
function Lo() {
  return (
    (Lo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Lo.apply(this, arguments)
  );
}
function ts(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ts(Object(r), !0).forEach(function (n) {
          lw(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ts(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function lw(t, e, r) {
  return (
    (e = cw(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function cw(t) {
  var e = sw(t, 'string');
  return Yr(e) == 'symbol' ? e : e + '';
}
function sw(t, e) {
  if (Yr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Yr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var ns = {
    curveBasisClosed: _h,
    curveBasisOpen: Th,
    curveBasis: Eh,
    curveBumpX: jh,
    curveBumpY: Ph,
    curveLinearClosed: Ah,
    curveLinear: bu,
    curveMonotoneX: Sh,
    curveMonotoneY: xh,
    curveNatural: wh,
    curveStep: Oh,
    curveStepAfter: bh,
    curveStepBefore: gh,
  },
  jn = function (e) {
    return e.x === +e.x && e.y === +e.y;
  },
  Pr = function (e) {
    return e.x;
  },
  jr = function (e) {
    return e.y;
  },
  fw = function (e, r) {
    if (V(e)) return e;
    var n = 'curve'.concat(Si(e));
    return (n === 'curveMonotone' || n === 'curveBump') && r
      ? ns[''.concat(n).concat(r === 'vertical' ? 'Y' : 'X')]
      : ns[n] || bu;
  },
  dw = function (e) {
    var r = e.type,
      n = r === void 0 ? 'linear' : r,
      i = e.points,
      a = i === void 0 ? [] : i,
      o = e.baseLine,
      u = e.layout,
      l = e.connectNulls,
      c = l === void 0 ? !1 : l,
      f = fw(n, u),
      s = c
        ? a.filter(function (y) {
            return jn(y);
          })
        : a,
      d;
    if (Array.isArray(o)) {
      var p = c
          ? o.filter(function (y) {
              return jn(y);
            })
          : o,
        m = s.map(function (y, v) {
          return rs(rs({}, y), {}, { base: p[v] });
        });
      return (
        u === 'vertical'
          ? (d = On()
              .y(jr)
              .x1(Pr)
              .x0(function (y) {
                return y.base.x;
              }))
          : (d = On()
              .x(Pr)
              .y1(jr)
              .y0(function (y) {
                return y.base.y;
              })),
        d.defined(jn).curve(f),
        d(m)
      );
    }
    return (
      u === 'vertical' && R(o)
        ? (d = On().y(jr).x1(Pr).x0(o))
        : R(o)
          ? (d = On().x(Pr).y1(jr).y0(o))
          : (d = fd().x(Pr).y(jr)),
      d.defined(jn).curve(f),
      d(s)
    );
  },
  is = function (e) {
    var r = e.className,
      n = e.points,
      i = e.path,
      a = e.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? dw(e) : i;
    return M.createElement(
      'path',
      Lo({}, H(e, !1), Dn(e), { className: Y('recharts-curve', r), d: o, ref: a }),
    );
  },
  pw = $h();
const Z = ie(pw),
  { getOwnPropertyNames: vw, getOwnPropertySymbols: hw } = Object,
  { hasOwnProperty: yw } = Object.prototype;
function Ia(t, e) {
  return function (n, i, a) {
    return t(n, i, a) && e(n, i, a);
  };
}
function En(t) {
  return function (r, n, i) {
    if (!r || !n || typeof r != 'object' || typeof n != 'object') return t(r, n, i);
    const { cache: a } = i,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    (a.set(r, n), a.set(n, r));
    const l = t(r, n, i);
    return (a.delete(r), a.delete(n), l);
  };
}
function mw(t) {
  return t?.[Symbol.toStringTag];
}
function as(t) {
  return vw(t).concat(hw(t));
}
const gw = Object.hasOwn || ((t, e) => yw.call(t, e));
function Bt(t, e) {
  return t === e || (!t && !e && t !== t && e !== e);
}
const bw = '__v',
  Ow = '__o',
  ww = '_owner',
  { getOwnPropertyDescriptor: os, keys: us } = Object;
function xw(t, e) {
  return t.byteLength === e.byteLength && Hn(new Uint8Array(t), new Uint8Array(e));
}
function Sw(t, e, r) {
  let n = t.length;
  if (e.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
  return !0;
}
function Aw(t, e) {
  return (
    t.byteLength === e.byteLength &&
    Hn(
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
    )
  );
}
function Pw(t, e) {
  return Bt(t.getTime(), e.getTime());
}
function jw(t, e) {
  return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack;
}
function Ew(t, e) {
  return t === e;
}
function ls(t, e, r) {
  const n = t.size;
  if (n !== e.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = t.entries();
  let o,
    u,
    l = 0;
  for (; (o = a.next()) && !o.done; ) {
    const c = e.entries();
    let f = !1,
      s = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (i[s]) {
        s++;
        continue;
      }
      const d = o.value,
        p = u.value;
      if (r.equals(d[0], p[0], l, s, t, e, r) && r.equals(d[1], p[1], d[0], p[0], t, e, r)) {
        f = i[s] = !0;
        break;
      }
      s++;
    }
    if (!f) return !1;
    l++;
  }
  return !0;
}
const Tw = Bt;
function _w(t, e, r) {
  const n = us(t);
  let i = n.length;
  if (us(e).length !== i) return !1;
  for (; i-- > 0; ) if (!Ep(t, e, r, n[i])) return !1;
  return !0;
}
function Er(t, e, r) {
  const n = as(t);
  let i = n.length;
  if (as(e).length !== i) return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (
      ((a = n[i]),
      !Ep(t, e, r, a) ||
        ((o = os(t, a)),
        (u = os(e, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function $w(t, e) {
  return Bt(t.valueOf(), e.valueOf());
}
function Iw(t, e) {
  return t.source === e.source && t.flags === e.flags;
}
function cs(t, e, r) {
  const n = t.size;
  if (n !== e.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = t.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const l = e.values();
    let c = !1,
      f = 0;
    for (; (u = l.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, t, e, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c) return !1;
  }
  return !0;
}
function Hn(t, e) {
  let r = t.byteLength;
  if (e.byteLength !== r || t.byteOffset !== e.byteOffset) return !1;
  for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
  return !0;
}
function Cw(t, e) {
  return (
    t.hostname === e.hostname &&
    t.pathname === e.pathname &&
    t.protocol === e.protocol &&
    t.port === e.port &&
    t.hash === e.hash &&
    t.username === e.username &&
    t.password === e.password
  );
}
function Ep(t, e, r, n) {
  return (n === ww || n === Ow || n === bw) && (t.$$typeof || e.$$typeof)
    ? !0
    : gw(e, n) && r.equals(t[n], e[n], n, n, t, e, r);
}
const Mw = '[object ArrayBuffer]',
  kw = '[object Arguments]',
  Dw = '[object Boolean]',
  Nw = '[object DataView]',
  Rw = '[object Date]',
  Bw = '[object Error]',
  Lw = '[object Map]',
  qw = '[object Number]',
  zw = '[object Object]',
  Ww = '[object RegExp]',
  Fw = '[object Set]',
  Gw = '[object String]',
  Uw = {
    '[object Int8Array]': !0,
    '[object Uint8Array]': !0,
    '[object Uint8ClampedArray]': !0,
    '[object Int16Array]': !0,
    '[object Uint16Array]': !0,
    '[object Int32Array]': !0,
    '[object Uint32Array]': !0,
    '[object Float16Array]': !0,
    '[object Float32Array]': !0,
    '[object Float64Array]': !0,
    '[object BigInt64Array]': !0,
    '[object BigUint64Array]': !0,
  },
  Kw = '[object URL]',
  Vw = Object.prototype.toString;
function Xw({
  areArrayBuffersEqual: t,
  areArraysEqual: e,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: u,
  areObjectsEqual: l,
  arePrimitiveWrappersEqual: c,
  areRegExpsEqual: f,
  areSetsEqual: s,
  areTypedArraysEqual: d,
  areUrlsEqual: p,
  unknownTagComparators: m,
}) {
  return function (v, g, b) {
    if (v === g) return !0;
    if (v == null || g == null) return !1;
    const O = typeof v;
    if (O !== typeof g) return !1;
    if (O !== 'object') return O === 'number' ? u(v, g, b) : O === 'function' ? a(v, g, b) : !1;
    const x = v.constructor;
    if (x !== g.constructor) return !1;
    if (x === Object) return l(v, g, b);
    if (Array.isArray(v)) return e(v, g, b);
    if (x === Date) return n(v, g, b);
    if (x === RegExp) return f(v, g, b);
    if (x === Map) return o(v, g, b);
    if (x === Set) return s(v, g, b);
    const h = Vw.call(v);
    if (h === Rw) return n(v, g, b);
    if (h === Ww) return f(v, g, b);
    if (h === Lw) return o(v, g, b);
    if (h === Fw) return s(v, g, b);
    if (h === zw) return typeof v.then != 'function' && typeof g.then != 'function' && l(v, g, b);
    if (h === Kw) return p(v, g, b);
    if (h === Bw) return i(v, g, b);
    if (h === kw) return l(v, g, b);
    if (Uw[h]) return d(v, g, b);
    if (h === Mw) return t(v, g, b);
    if (h === Nw) return r(v, g, b);
    if (h === Dw || h === qw || h === Gw) return c(v, g, b);
    if (m) {
      let w = m[h];
      if (!w) {
        const S = mw(v);
        S && (w = m[S]);
      }
      if (w) return w(v, g, b);
    }
    return !1;
  };
}
function Hw({ circular: t, createCustomConfig: e, strict: r }) {
  let n = {
    areArrayBuffersEqual: xw,
    areArraysEqual: r ? Er : Sw,
    areDataViewsEqual: Aw,
    areDatesEqual: Pw,
    areErrorsEqual: jw,
    areFunctionsEqual: Ew,
    areMapsEqual: r ? Ia(ls, Er) : ls,
    areNumbersEqual: Tw,
    areObjectsEqual: r ? Er : _w,
    arePrimitiveWrappersEqual: $w,
    areRegExpsEqual: Iw,
    areSetsEqual: r ? Ia(cs, Er) : cs,
    areTypedArraysEqual: r ? Ia(Hn, Er) : Hn,
    areUrlsEqual: Cw,
    unknownTagComparators: void 0,
  };
  if ((e && (n = Object.assign({}, n, e(n))), t)) {
    const i = En(n.areArraysEqual),
      a = En(n.areMapsEqual),
      o = En(n.areObjectsEqual),
      u = En(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u,
    });
  }
  return n;
}
function Yw(t) {
  return function (e, r, n, i, a, o, u) {
    return t(e, r, u);
  };
}
function Zw({ circular: t, comparator: e, createState: r, equals: n, strict: i }) {
  if (r)
    return function (u, l) {
      const { cache: c = t ? new WeakMap() : void 0, meta: f } = r();
      return e(u, l, { cache: c, equals: n, meta: f, strict: i });
    };
  if (t)
    return function (u, l) {
      return e(u, l, { cache: new WeakMap(), equals: n, meta: void 0, strict: i });
    };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function (u, l) {
    return e(u, l, a);
  };
}
const Jw = wt();
wt({ strict: !0 });
wt({ circular: !0 });
wt({ circular: !0, strict: !0 });
wt({ createInternalComparator: () => Bt });
wt({ strict: !0, createInternalComparator: () => Bt });
wt({ circular: !0, createInternalComparator: () => Bt });
wt({ circular: !0, createInternalComparator: () => Bt, strict: !0 });
function wt(t = {}) {
  const { circular: e = !1, createInternalComparator: r, createState: n, strict: i = !1 } = t,
    a = Hw(t),
    o = Xw(a),
    u = r ? r(o) : Yw(o);
  return Zw({ circular: e, comparator: o, createState: n, equals: u, strict: i });
}
function Qw(t) {
  typeof requestAnimationFrame < 'u' && requestAnimationFrame(t);
}
function ss(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > e ? (t(a), (r = -1)) : Qw(i));
    };
  requestAnimationFrame(n);
}
function qo(t) {
  '@babel/helpers - typeof';
  return (
    (qo =
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
    qo(t)
  );
}
function ex(t) {
  return ix(t) || nx(t) || rx(t) || tx();
}
function tx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rx(t, e) {
  if (t) {
    if (typeof t == 'string') return fs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fs(t, e);
  }
}
function fs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function nx(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function ix(t) {
  if (Array.isArray(t)) return t;
}
function ax() {
  var t = {},
    e = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = ex(o),
            l = u[0],
            c = u.slice(1);
          if (typeof l == 'number') {
            ss(i.bind(null, c), l);
            return;
          }
          (i(l), ss(i.bind(null, c)));
          return;
        }
        (qo(a) === 'object' && ((t = a), e(t)), typeof a == 'function' && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (e = a),
        function () {
          e = function () {
            return null;
          };
        }
      );
    },
  };
}
function Zr(t) {
  '@babel/helpers - typeof';
  return (
    (Zr =
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
    Zr(t)
  );
}
function ds(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ps(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ds(Object(r), !0).forEach(function (n) {
          Tp(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ds(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Tp(t, e, r) {
  return (
    (e = ox(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function ox(t) {
  var e = ux(t, 'string');
  return Zr(e) === 'symbol' ? e : String(e);
}
function ux(t, e) {
  if (Zr(t) !== 'object' || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Zr(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var lx = function (e, r) {
    return [Object.keys(e), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  cx = function (e) {
    return e;
  },
  sx = function (e) {
    return e.replace(/([A-Z])/g, function (r) {
      return '-'.concat(r.toLowerCase());
    });
  },
  Mr = function (e, r) {
    return Object.keys(r).reduce(function (n, i) {
      return ps(ps({}, n), {}, Tp({}, i, e(i, r[i])));
    }, {});
  },
  vs = function (e, r, n) {
    return e
      .map(function (i) {
        return ''.concat(sx(i), ' ').concat(r, 'ms ').concat(n);
      })
      .join(',');
  };
function fx(t, e) {
  return vx(t) || px(t, e) || _p(t, e) || dx();
}
function dx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function px(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function vx(t) {
  if (Array.isArray(t)) return t;
}
function hx(t) {
  return gx(t) || mx(t) || _p(t) || yx();
}
function yx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _p(t, e) {
  if (t) {
    if (typeof t == 'string') return zo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zo(t, e);
  }
}
function mx(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function gx(t) {
  if (Array.isArray(t)) return zo(t);
}
function zo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Yn = 1e-4,
  $p = function (e, r) {
    return [0, 3 * e, 3 * r - 6 * e, 3 * e - 3 * r + 1];
  },
  Ip = function (e, r) {
    return e
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  hs = function (e, r) {
    return function (n) {
      var i = $p(e, r);
      return Ip(i, n);
    };
  },
  bx = function (e, r) {
    return function (n) {
      var i = $p(e, r),
        a = [].concat(
          hx(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return Ip(a, n);
    };
  },
  ys = function () {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case 'linear':
          ((i = 0), (a = 0), (o = 1), (u = 1));
          break;
        case 'ease':
          ((i = 0.25), (a = 0.1), (o = 0.25), (u = 1));
          break;
        case 'ease-in':
          ((i = 0.42), (a = 0), (o = 1), (u = 1));
          break;
        case 'ease-out':
          ((i = 0.42), (a = 0), (o = 0.58), (u = 1));
          break;
        case 'ease-in-out':
          ((i = 0), (a = 0), (o = 0.58), (u = 1));
          break;
        default: {
          var l = r[0].split('(');
          if (l[0] === 'cubic-bezier' && l[1].split(')')[0].split(',').length === 4) {
            var c = l[1]
                .split(')')[0]
                .split(',')
                .map(function (v) {
                  return parseFloat(v);
                }),
              f = fx(c, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]));
          }
        }
      }
    var s = hs(i, o),
      d = hs(a, u),
      p = bx(i, o),
      m = function (g) {
        return g > 1 ? 1 : g < 0 ? 0 : g;
      },
      y = function (g) {
        for (var b = g > 1 ? 1 : g, O = b, x = 0; x < 8; ++x) {
          var h = s(O) - b,
            w = p(O);
          if (Math.abs(h - b) < Yn || w < Yn) return d(O);
          O = m(O - h / w);
        }
        return d(O);
      };
    return ((y.isStepper = !1), y);
  },
  Ox = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = e.stiff,
      n = r === void 0 ? 100 : r,
      i = e.damping,
      a = i === void 0 ? 8 : i,
      o = e.dt,
      u = o === void 0 ? 17 : o,
      l = function (f, s, d) {
        var p = -(f - s) * n,
          m = d * a,
          y = d + ((p - m) * u) / 1e3,
          v = (d * u) / 1e3 + f;
        return Math.abs(v - s) < Yn && Math.abs(y) < Yn ? [s, 0] : [v, y];
      };
    return ((l.isStepper = !0), (l.dt = u), l);
  },
  wx = function () {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    var i = r[0];
    if (typeof i == 'string')
      switch (i) {
        case 'ease':
        case 'ease-in-out':
        case 'ease-out':
        case 'ease-in':
        case 'linear':
          return ys(i);
        case 'spring':
          return Ox();
        default:
          if (i.split('(')[0] === 'cubic-bezier') return ys(i);
      }
    return typeof i == 'function' ? i : null;
  };
function Jr(t) {
  '@babel/helpers - typeof';
  return (
    (Jr =
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
    Jr(t)
  );
}
function ms(t) {
  return Ax(t) || Sx(t) || Cp(t) || xx();
}
function xx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sx(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function Ax(t) {
  if (Array.isArray(t)) return Fo(t);
}
function gs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? gs(Object(r), !0).forEach(function (n) {
          Wo(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : gs(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Wo(t, e, r) {
  return (
    (e = Px(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Px(t) {
  var e = jx(t, 'string');
  return Jr(e) === 'symbol' ? e : String(e);
}
function jx(t, e) {
  if (Jr(t) !== 'object' || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Jr(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Ex(t, e) {
  return $x(t) || _x(t, e) || Cp(t, e) || Tx();
}
function Tx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cp(t, e) {
  if (t) {
    if (typeof t == 'string') return Fo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fo(t, e);
  }
}
function Fo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function _x(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function $x(t) {
  if (Array.isArray(t)) return t;
}
var Zn = function (e, r, n) {
    return e + (r - e) * n;
  },
  Go = function (e) {
    var r = e.from,
      n = e.to;
    return r !== n;
  },
  Ix = function t(e, r, n) {
    var i = Mr(function (a, o) {
      if (Go(o)) {
        var u = e(o.from, o.to, o.velocity),
          l = Ex(u, 2),
          c = l[0],
          f = l[1];
        return ge(ge({}, o), {}, { from: c, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? Mr(function (a, o) {
          return Go(o)
            ? ge(
                ge({}, o),
                {},
                { velocity: Zn(o.velocity, i[a].velocity, n), from: Zn(o.from, i[a].from, n) },
              )
            : o;
        }, r)
      : t(e, i, n - 1);
  };
const Cx = function (t, e, r, n, i) {
  var a = lx(t, e),
    o = a.reduce(function (v, g) {
      return ge(ge({}, v), {}, Wo({}, g, [t[g], e[g]]));
    }, {}),
    u = a.reduce(function (v, g) {
      return ge(ge({}, v), {}, Wo({}, g, { from: t[g], velocity: 0, to: e[g] }));
    }, {}),
    l = -1,
    c,
    f,
    s = function () {
      return null;
    },
    d = function () {
      return Mr(function (g, b) {
        return b.from;
      }, u);
    },
    p = function () {
      return !Object.values(u).filter(Go).length;
    },
    m = function (g) {
      c || (c = g);
      var b = g - c,
        O = b / r.dt;
      ((u = Ix(r, u, O)),
        i(ge(ge(ge({}, t), e), d())),
        (c = g),
        p() || (l = requestAnimationFrame(s)));
    },
    y = function (g) {
      f || (f = g);
      var b = (g - f) / n,
        O = Mr(function (h, w) {
          return Zn.apply(void 0, ms(w).concat([r(b)]));
        }, o);
      if ((i(ge(ge(ge({}, t), e), O)), b < 1)) l = requestAnimationFrame(s);
      else {
        var x = Mr(function (h, w) {
          return Zn.apply(void 0, ms(w).concat([r(1)]));
        }, o);
        i(ge(ge(ge({}, t), e), x));
      }
    };
  return (
    (s = r.isStepper ? m : y),
    function () {
      return (
        requestAnimationFrame(s),
        function () {
          cancelAnimationFrame(l);
        }
      );
    }
  );
};
function rr(t) {
  '@babel/helpers - typeof';
  return (
    (rr =
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
    rr(t)
  );
}
var Mx = [
  'children',
  'begin',
  'duration',
  'attributeName',
  'easing',
  'isActive',
  'steps',
  'from',
  'to',
  'canBegin',
  'onAnimationEnd',
  'shouldReAnimate',
  'onAnimationReStart',
];
function kx(t, e) {
  if (t == null) return {};
  var r = Dx(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function Dx(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
function Ca(t) {
  return Lx(t) || Bx(t) || Rx(t) || Nx();
}
function Nx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rx(t, e) {
  if (t) {
    if (typeof t == 'string') return Uo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uo(t, e);
  }
}
function Bx(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function Lx(t) {
  if (Array.isArray(t)) return Uo(t);
}
function Uo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function bs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? bs(Object(r), !0).forEach(function (n) {
          _r(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : bs(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function _r(t, e, r) {
  return (
    (e = Mp(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function qx(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function zx(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Mp(n.key), n));
  }
}
function Wx(t, e, r) {
  return (e && zx(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function Mp(t) {
  var e = Fx(t, 'string');
  return rr(e) === 'symbol' ? e : String(e);
}
function Fx(t, e) {
  if (rr(t) !== 'object' || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (rr(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Gx(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Ko(t, e));
}
function Ko(t, e) {
  return (
    (Ko = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ko(t, e)
  );
}
function Ux(t) {
  var e = Kx();
  return function () {
    var n = Jn(t),
      i;
    if (e) {
      var a = Jn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Vo(this, i);
  };
}
function Vo(t, e) {
  if (e && (rr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Xo(t);
}
function Xo(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kx() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function Jn(t) {
  return (
    (Jn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Jn(t)
  );
}
var gt = (function (t) {
  Gx(r, t);
  var e = Ux(r);
  function r(n, i) {
    var a;
    (qx(this, r), (a = e.call(this, n, i)));
    var o = a.props,
      u = o.isActive,
      l = o.attributeName,
      c = o.from,
      f = o.to,
      s = o.steps,
      d = o.children,
      p = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Xo(a))),
      (a.changeStyle = a.changeStyle.bind(Xo(a))),
      !u || p <= 0)
    )
      return ((a.state = { style: {} }), typeof d == 'function' && (a.state = { style: f }), Vo(a));
    if (s && s.length) a.state = { style: s[0].style };
    else if (c) {
      if (typeof d == 'function') return ((a.state = { style: c }), Vo(a));
      a.state = { style: l ? _r({}, l, c) : c };
    } else a.state = { style: {} };
    return a;
  }
  return (
    Wx(r, [
      {
        key: 'componentDidMount',
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            l = a.attributeName,
            c = a.shouldReAnimate,
            f = a.to,
            s = a.from,
            d = this.state.style;
          if (u) {
            if (!o) {
              var p = { style: l ? _r({}, l, f) : f };
              this.state && d && ((l && d[l] !== f) || (!l && d !== f)) && this.setState(p);
              return;
            }
            if (!(Jw(i.to, f) && i.canBegin && i.isActive)) {
              var m = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation());
              var y = m || c ? s : i.to;
              if (this.state && d) {
                var v = { style: l ? _r({}, l, y) : y };
                ((l && d[l] !== y) || (!l && d !== y)) && this.setState(v);
              }
              this.runAnimation(Be(Be({}, this.props), {}, { from: y, begin: 0 }));
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: 'handleStyleChange',
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: 'changeStyle',
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: 'runJSAnimation',
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            l = i.duration,
            c = i.easing,
            f = i.begin,
            s = i.onAnimationEnd,
            d = i.onAnimationStart,
            p = Cx(o, u, wx(c), l, this.changeStyle),
            m = function () {
              a.stopJSAnimation = p();
            };
          this.manager.start([d, f, m, l, s]);
        },
      },
      {
        key: 'runStepAnimation',
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            l = i.onAnimationStart,
            c = o[0],
            f = c.style,
            s = c.duration,
            d = s === void 0 ? 0 : s,
            p = function (y, v, g) {
              if (g === 0) return y;
              var b = v.duration,
                O = v.easing,
                x = O === void 0 ? 'ease' : O,
                h = v.style,
                w = v.properties,
                S = v.onAnimationEnd,
                A = g > 0 ? o[g - 1] : v,
                P = w || Object.keys(h);
              if (typeof x == 'function' || x === 'spring')
                return [].concat(Ca(y), [
                  a.runJSAnimation.bind(a, { from: A.style, to: h, duration: b, easing: x }),
                  b,
                ]);
              var I = vs(P, b, x),
                T = Be(Be(Be({}, A.style), h), {}, { transition: I });
              return [].concat(Ca(y), [T, b, S]).filter(cx);
            };
          return this.manager.start(
            [l].concat(Ca(o.reduce(p, [f, Math.max(d, u)])), [i.onAnimationEnd]),
          );
        },
      },
      {
        key: 'runAnimation',
        value: function (i) {
          this.manager || (this.manager = ax());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            l = i.to,
            c = i.easing,
            f = i.onAnimationStart,
            s = i.onAnimationEnd,
            d = i.steps,
            p = i.children,
            m = this.manager;
          if (
            ((this.unSubscribe = m.subscribe(this.handleStyleChange)),
            typeof c == 'function' || typeof p == 'function' || c === 'spring')
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var y = u ? _r({}, u, l) : l,
            v = vs(Object.keys(y), o, c);
          m.start([f, a, Be(Be({}, y), {}, { transition: v }), o, s]);
        },
      },
      {
        key: 'render',
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var u = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var l = kx(i, Mx),
            c = M.Children.count(a),
            f = this.state.style;
          if (typeof a == 'function') return a(f);
          if (!u || c === 0 || o <= 0) return a;
          var s = function (p) {
            var m = p.props,
              y = m.style,
              v = y === void 0 ? {} : y,
              g = m.className,
              b = M.cloneElement(p, Be(Be({}, l), {}, { style: Be(Be({}, v), f), className: g }));
            return b;
          };
          return c === 1
            ? s(M.Children.only(a))
            : j.createElement(
                'div',
                null,
                M.Children.map(a, function (d) {
                  return s(d);
                }),
              );
        },
      },
    ]),
    r
  );
})(M.PureComponent);
gt.displayName = 'Animate';
gt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
gt.propTypes = {
  from: Z.oneOfType([Z.object, Z.string]),
  to: Z.oneOfType([Z.object, Z.string]),
  attributeName: Z.string,
  duration: Z.number,
  begin: Z.number,
  easing: Z.oneOfType([Z.string, Z.func]),
  steps: Z.arrayOf(
    Z.shape({
      duration: Z.number.isRequired,
      style: Z.object.isRequired,
      easing: Z.oneOfType([
        Z.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
        Z.func,
      ]),
      properties: Z.arrayOf('string'),
      onAnimationEnd: Z.func,
    }),
  ),
  children: Z.oneOfType([Z.node, Z.func]),
  isActive: Z.bool,
  canBegin: Z.bool,
  onAnimationEnd: Z.func,
  shouldReAnimate: Z.bool,
  onAnimationStart: Z.func,
  onAnimationReStart: Z.func,
};
function Qr(t) {
  '@babel/helpers - typeof';
  return (
    (Qr =
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
    Qr(t)
  );
}
function Qn() {
  return (
    (Qn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Qn.apply(this, arguments)
  );
}
function Vx(t, e) {
  return Zx(t) || Yx(t, e) || Hx(t, e) || Xx();
}
function Xx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hx(t, e) {
  if (t) {
    if (typeof t == 'string') return Os(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Os(t, e);
  }
}
function Os(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Yx(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Zx(t) {
  if (Array.isArray(t)) return t;
}
function ws(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ws(Object(r), !0).forEach(function (n) {
          Jx(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ws(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Jx(t, e, r) {
  return (
    (e = Qx(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Qx(t) {
  var e = eS(t, 'string');
  return Qr(e) == 'symbol' ? e : e + '';
}
function eS(t, e) {
  if (Qr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Qr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var Ss = function (e, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      l = n >= 0 ? 1 : -1,
      c = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var s = [0, 0, 0, 0], d = 0, p = 4; d < p; d++) s[d] = a[d] > o ? o : a[d];
      ((f = 'M'.concat(e, ',').concat(r + u * s[0])),
        s[0] > 0 &&
          (f += 'A '
            .concat(s[0], ',')
            .concat(s[0], ',0,0,')
            .concat(c, ',')
            .concat(e + l * s[0], ',')
            .concat(r)),
        (f += 'L '.concat(e + n - l * s[1], ',').concat(r)),
        s[1] > 0 &&
          (f += 'A '
            .concat(s[1], ',')
            .concat(s[1], ',0,0,')
            .concat(
              c,
              `,
        `,
            )
            .concat(e + n, ',')
            .concat(r + u * s[1])),
        (f += 'L '.concat(e + n, ',').concat(r + i - u * s[2])),
        s[2] > 0 &&
          (f += 'A '
            .concat(s[2], ',')
            .concat(s[2], ',0,0,')
            .concat(
              c,
              `,
        `,
            )
            .concat(e + n - l * s[2], ',')
            .concat(r + i)),
        (f += 'L '.concat(e + l * s[3], ',').concat(r + i)),
        s[3] > 0 &&
          (f += 'A '
            .concat(s[3], ',')
            .concat(s[3], ',0,0,')
            .concat(
              c,
              `,
        `,
            )
            .concat(e, ',')
            .concat(r + i - u * s[3])),
        (f += 'Z'));
    } else if (o > 0 && a === +a && a > 0) {
      var m = Math.min(o, a);
      f = 'M '
        .concat(e, ',')
        .concat(
          r + u * m,
          `
            A `,
        )
        .concat(m, ',')
        .concat(m, ',0,0,')
        .concat(c, ',')
        .concat(e + l * m, ',')
        .concat(
          r,
          `
            L `,
        )
        .concat(e + n - l * m, ',')
        .concat(
          r,
          `
            A `,
        )
        .concat(m, ',')
        .concat(m, ',0,0,')
        .concat(c, ',')
        .concat(e + n, ',')
        .concat(
          r + u * m,
          `
            L `,
        )
        .concat(e + n, ',')
        .concat(
          r + i - u * m,
          `
            A `,
        )
        .concat(m, ',')
        .concat(m, ',0,0,')
        .concat(c, ',')
        .concat(e + n - l * m, ',')
        .concat(
          r + i,
          `
            L `,
        )
        .concat(e + l * m, ',')
        .concat(
          r + i,
          `
            A `,
        )
        .concat(m, ',')
        .concat(m, ',0,0,')
        .concat(c, ',')
        .concat(e, ',')
        .concat(r + i - u * m, ' Z');
    } else
      f = 'M '.concat(e, ',').concat(r, ' h ').concat(n, ' v ').concat(i, ' h ').concat(-n, ' Z');
    return f;
  },
  tS = function (e, r) {
    if (!e || !r) return !1;
    var n = e.x,
      i = e.y,
      a = r.x,
      o = r.y,
      u = r.width,
      l = r.height;
    if (Math.abs(u) > 0 && Math.abs(l) > 0) {
      var c = Math.min(a, a + u),
        f = Math.max(a, a + u),
        s = Math.min(o, o + l),
        d = Math.max(o, o + l);
      return n >= c && n <= f && i >= s && i <= d;
    }
    return !1;
  },
  rS = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  qu = function (e) {
    var r = xs(xs({}, rS), e),
      n = M.useRef(),
      i = M.useState(-1),
      a = Vx(i, 2),
      o = a[0],
      u = a[1];
    M.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var x = n.current.getTotalLength();
          x && u(x);
        } catch {}
    }, []);
    var l = r.x,
      c = r.y,
      f = r.width,
      s = r.height,
      d = r.radius,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      v = r.animationBegin,
      g = r.isAnimationActive,
      b = r.isUpdateAnimationActive;
    if (l !== +l || c !== +c || f !== +f || s !== +s || f === 0 || s === 0) return null;
    var O = Y('recharts-rectangle', p);
    return b
      ? j.createElement(
          gt,
          {
            canBegin: o > 0,
            from: { width: f, height: s, x: l, y: c },
            to: { width: f, height: s, x: l, y: c },
            duration: y,
            animationEasing: m,
            isActive: b,
          },
          function (x) {
            var h = x.width,
              w = x.height,
              S = x.x,
              A = x.y;
            return j.createElement(
              gt,
              {
                canBegin: o > 0,
                from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                to: ''.concat(o, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: v,
                duration: y,
                isActive: g,
                easing: m,
              },
              j.createElement(
                'path',
                Qn({}, H(r, !0), { className: O, d: Ss(S, A, h, w, d), ref: n }),
              ),
            );
          },
        )
      : j.createElement('path', Qn({}, H(r, !0), { className: O, d: Ss(l, c, f, s, d) }));
  };
function Ho() {
  return (
    (Ho = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Ho.apply(this, arguments)
  );
}
var kp = function (e) {
  var r = e.cx,
    n = e.cy,
    i = e.r,
    a = e.className,
    o = Y('recharts-dot', a);
  return r === +r && n === +n && i === +i
    ? M.createElement('circle', Ho({}, H(e, !1), Dn(e), { className: o, cx: r, cy: n, r: i }))
    : null;
};
function en(t) {
  '@babel/helpers - typeof';
  return (
    (en =
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
    en(t)
  );
}
var nS = ['x', 'y', 'top', 'left', 'width', 'height', 'className'];
function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Yo.apply(this, arguments)
  );
}
function As(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function iS(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? As(Object(r), !0).forEach(function (n) {
          aS(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : As(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function aS(t, e, r) {
  return (
    (e = oS(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function oS(t) {
  var e = uS(t, 'string');
  return en(e) == 'symbol' ? e : e + '';
}
function uS(t, e) {
  if (en(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (en(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function lS(t, e) {
  if (t == null) return {};
  var r = cS(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function cS(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var sS = function (e, r, n, i, a, o) {
    return 'M'.concat(e, ',').concat(a, 'v').concat(i, 'M').concat(o, ',').concat(r, 'h').concat(n);
  },
  fS = function (e) {
    var r = e.x,
      n = r === void 0 ? 0 : r,
      i = e.y,
      a = i === void 0 ? 0 : i,
      o = e.top,
      u = o === void 0 ? 0 : o,
      l = e.left,
      c = l === void 0 ? 0 : l,
      f = e.width,
      s = f === void 0 ? 0 : f,
      d = e.height,
      p = d === void 0 ? 0 : d,
      m = e.className,
      y = lS(e, nS),
      v = iS({ x: n, y: a, top: u, left: c, width: s, height: p }, y);
    return !R(n) || !R(a) || !R(s) || !R(p) || !R(u) || !R(c)
      ? null
      : j.createElement(
          'path',
          Yo({}, H(v, !0), { className: Y('recharts-cross', m), d: sS(n, a, s, p, u, c) }),
        );
  },
  Ma,
  Ps;
function dS() {
  if (Ps) return Ma;
  Ps = 1;
  var t = od(),
    e = ud(),
    r = '[object Boolean]';
  function n(i) {
    return i === !0 || i === !1 || (e(i) && t(i) == r);
  }
  return ((Ma = n), Ma);
}
var pS = dS();
const vS = ie(pS);
function tn(t) {
  '@babel/helpers - typeof';
  return (
    (tn =
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
    tn(t)
  );
}
function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ei.apply(this, arguments)
  );
}
function hS(t, e) {
  return bS(t) || gS(t, e) || mS(t, e) || yS();
}
function yS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mS(t, e) {
  if (t) {
    if (typeof t == 'string') return js(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return js(t, e);
  }
}
function js(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function gS(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function bS(t) {
  if (Array.isArray(t)) return t;
}
function Es(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ts(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Es(Object(r), !0).forEach(function (n) {
          OS(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Es(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function OS(t, e, r) {
  return (
    (e = wS(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function wS(t) {
  var e = xS(t, 'string');
  return tn(e) == 'symbol' ? e : e + '';
}
function xS(t, e) {
  if (tn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (tn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var _s = function (e, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = 'M '.concat(e, ',').concat(r)),
      (u += 'L '.concat(e + n, ',').concat(r)),
      (u += 'L '.concat(e + n - o / 2, ',').concat(r + a)),
      (u += 'L '.concat(e + n - o / 2 - i, ',').concat(r + a)),
      (u += 'L '.concat(e, ',').concat(r, ' Z')),
      u
    );
  },
  SS = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  },
  AS = function (e) {
    var r = Ts(Ts({}, SS), e),
      n = M.useRef(),
      i = M.useState(-1),
      a = hS(i, 2),
      o = a[0],
      u = a[1];
    M.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var O = n.current.getTotalLength();
          O && u(O);
        } catch {}
    }, []);
    var l = r.x,
      c = r.y,
      f = r.upperWidth,
      s = r.lowerWidth,
      d = r.height,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      v = r.animationBegin,
      g = r.isUpdateAnimationActive;
    if (l !== +l || c !== +c || f !== +f || s !== +s || d !== +d || (f === 0 && s === 0) || d === 0)
      return null;
    var b = Y('recharts-trapezoid', p);
    return g
      ? j.createElement(
          gt,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: d, x: l, y: c },
            to: { upperWidth: f, lowerWidth: s, height: d, x: l, y: c },
            duration: y,
            animationEasing: m,
            isActive: g,
          },
          function (O) {
            var x = O.upperWidth,
              h = O.lowerWidth,
              w = O.height,
              S = O.x,
              A = O.y;
            return j.createElement(
              gt,
              {
                canBegin: o > 0,
                from: '0px '.concat(o === -1 ? 1 : o, 'px'),
                to: ''.concat(o, 'px 0px'),
                attributeName: 'strokeDasharray',
                begin: v,
                duration: y,
                easing: m,
              },
              j.createElement(
                'path',
                ei({}, H(r, !0), { className: b, d: _s(S, A, x, h, w), ref: n }),
              ),
            );
          },
        )
      : j.createElement(
          'g',
          null,
          j.createElement('path', ei({}, H(r, !0), { className: b, d: _s(l, c, f, s, d) })),
        );
  },
  PS = ['option', 'shapeType', 'propTransformer', 'activeClassName', 'isActive'];
function rn(t) {
  '@babel/helpers - typeof';
  return (
    (rn =
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
    rn(t)
  );
}
function jS(t, e) {
  if (t == null) return {};
  var r = ES(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function ES(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function $s(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ti(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $s(Object(r), !0).forEach(function (n) {
          TS(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : $s(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function TS(t, e, r) {
  return (
    (e = _S(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function _S(t) {
  var e = $S(t, 'string');
  return rn(e) == 'symbol' ? e : e + '';
}
function $S(t, e) {
  if (rn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (rn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function IS(t, e) {
  return ti(ti({}, e), t);
}
function CS(t, e) {
  return t === 'symbols';
}
function Is(t) {
  var e = t.shapeType,
    r = t.elementProps;
  switch (e) {
    case 'rectangle':
      return j.createElement(qu, r);
    case 'trapezoid':
      return j.createElement(AS, r);
    case 'sector':
      return j.createElement(jp, r);
    case 'symbols':
      if (CS(e)) return j.createElement(Cu, r);
      break;
    default:
      return null;
  }
}
function MS(t) {
  return M.isValidElement(t) ? t.props : t;
}
function kS(t) {
  var e = t.option,
    r = t.shapeType,
    n = t.propTransformer,
    i = n === void 0 ? IS : n,
    a = t.activeClassName,
    o = a === void 0 ? 'recharts-active-shape' : a,
    u = t.isActive,
    l = jS(t, PS),
    c;
  if (M.isValidElement(e)) c = M.cloneElement(e, ti(ti({}, l), MS(e)));
  else if (V(e)) c = e(l);
  else if (Qh(e) && !vS(e)) {
    var f = i(e, l);
    c = j.createElement(Is, { shapeType: r, elementProps: f });
  } else {
    var s = l;
    c = j.createElement(Is, { shapeType: r, elementProps: s });
  }
  return u ? j.createElement(me, { className: o }, c) : c;
}
function $i(t, e) {
  return e != null && 'trapezoids' in t.props;
}
function Ii(t, e) {
  return e != null && 'sectors' in t.props;
}
function nn(t, e) {
  return e != null && 'points' in t.props;
}
function DS(t, e) {
  var r,
    n,
    i =
      t.x === (e == null || (r = e.labelViewBox) === null || r === void 0 ? void 0 : r.x) ||
      t.x === e.x,
    a =
      t.y === (e == null || (n = e.labelViewBox) === null || n === void 0 ? void 0 : n.y) ||
      t.y === e.y;
  return i && a;
}
function NS(t, e) {
  var r = t.endAngle === e.endAngle,
    n = t.startAngle === e.startAngle;
  return r && n;
}
function RS(t, e) {
  var r = t.x === e.x,
    n = t.y === e.y,
    i = t.z === e.z;
  return r && n && i;
}
function BS(t, e) {
  var r;
  return ($i(t, e) ? (r = DS) : Ii(t, e) ? (r = NS) : nn(t, e) && (r = RS), r);
}
function LS(t, e) {
  var r;
  return (
    $i(t, e) ? (r = 'trapezoids') : Ii(t, e) ? (r = 'sectors') : nn(t, e) && (r = 'points'),
    r
  );
}
function qS(t, e) {
  if ($i(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Ii(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return nn(t, e) ? e.payload : {};
}
function zS(t) {
  var e = t.activeTooltipItem,
    r = t.graphicalItem,
    n = t.itemData,
    i = LS(r, e),
    a = qS(r, e),
    o = n.filter(function (l, c) {
      var f = Nu(a, l),
        s = r.props[i].filter(function (m) {
          var y = BS(r, e);
          return y(m, e);
        }),
        d = r.props[i].indexOf(s[s.length - 1]),
        p = c === d;
      return f && p;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var ka, Cs;
function WS() {
  if (Cs) return ka;
  Cs = 1;
  var t = Math.ceil,
    e = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, l = e(t((i - n) / (a || 1)), 0), c = Array(l); l--; )
      ((c[o ? l : ++u] = n), (n += a));
    return c;
  }
  return ((ka = r), ka);
}
var Da, Ms;
function Dp() {
  if (Ms) return Da;
  Ms = 1;
  var t = hh(),
    e = 1 / 0,
    r = 17976931348623157e292;
  function n(i) {
    if (!i) return i === 0 ? i : 0;
    if (((i = t(i)), i === e || i === -e)) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return ((Da = n), Da);
}
var Na, ks;
function FS() {
  if (ks) return Na;
  ks = 1;
  var t = WS(),
    e = mi(),
    r = Dp();
  function n(i) {
    return function (a, o, u) {
      return (
        u && typeof u != 'number' && e(a, o, u) && (o = u = void 0),
        (a = r(a)),
        o === void 0 ? ((o = a), (a = 0)) : (o = r(o)),
        (u = u === void 0 ? (a < o ? 1 : -1) : r(u)),
        t(a, o, u, i)
      );
    };
  }
  return ((Na = n), Na);
}
var Ra, Ds;
function GS() {
  if (Ds) return Ra;
  Ds = 1;
  var t = FS(),
    e = t();
  return ((Ra = e), Ra);
}
var US = GS();
const ri = ie(US);
function an(t) {
  '@babel/helpers - typeof';
  return (
    (an =
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
    an(t)
  );
}
function Ns(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ns(Object(r), !0).forEach(function (n) {
          Np(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ns(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Np(t, e, r) {
  return (
    (e = KS(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function KS(t) {
  var e = VS(t, 'string');
  return an(e) == 'symbol' ? e : e + '';
}
function VS(t, e) {
  if (an(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (an(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var XS = ['Webkit', 'Moz', 'O', 'ms'],
  HS = function (e, r) {
    var n = e.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = XS.reduce(function (a, o) {
        return Rs(Rs({}, a), {}, Np({}, o + n, r));
      }, {});
    return ((i[e] = r), i);
  };
function nr(t) {
  '@babel/helpers - typeof';
  return (
    (nr =
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
    nr(t)
  );
}
function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ni.apply(this, arguments)
  );
}
function Bs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ba(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Bs(Object(r), !0).forEach(function (n) {
          Te(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Bs(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function YS(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Ls(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Bp(n.key), n));
  }
}
function ZS(t, e, r) {
  return (
    e && Ls(t.prototype, e),
    r && Ls(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function JS(t, e, r) {
  return (
    (e = ii(e)),
    QS(t, Rp() ? Reflect.construct(e, r || [], ii(t).constructor) : e.apply(t, r))
  );
}
function QS(t, e) {
  if (e && (nr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return eA(t);
}
function eA(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Rp() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rp = function () {
    return !!t;
  })();
}
function ii(t) {
  return (
    (ii = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ii(t)
  );
}
function tA(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Zo(t, e));
}
function Zo(t, e) {
  return (
    (Zo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Zo(t, e)
  );
}
function Te(t, e, r) {
  return (
    (e = Bp(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Bp(t) {
  var e = rA(t, 'string');
  return nr(e) == 'symbol' ? e : e + '';
}
function rA(t, e) {
  if (nr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (nr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var nA = function (e) {
    var r = e.data,
      n = e.startIndex,
      i = e.endIndex,
      a = e.x,
      o = e.width,
      u = e.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      c = $r()
        .domain(ri(0, l))
        .range([a, a + o - u]),
      f = c.domain().map(function (s) {
        return c(s);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: c(n),
      endX: c(i),
      scale: c,
      scaleValues: f,
    };
  },
  qs = function (e) {
    return e.changedTouches && !!e.changedTouches.length;
  },
  ir = (function (t) {
    function e(r) {
      var n;
      return (
        YS(this, e),
        (n = JS(this, e, [r])),
        Te(n, 'handleDrag', function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        Te(n, 'handleTouchMove', function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        Te(n, 'handleDragEnd', function () {
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = n.props,
              a = i.endIndex,
              o = i.onDragEnd,
              u = i.startIndex;
            o?.({ endIndex: a, startIndex: u });
          }),
            n.detachDragEndListener());
        }),
        Te(n, 'handleLeaveWrapper', function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
        }),
        Te(n, 'handleEnterSlideOrTraveller', function () {
          n.setState({ isTextActive: !0 });
        }),
        Te(n, 'handleLeaveSlideOrTraveller', function () {
          n.setState({ isTextActive: !1 });
        }),
        Te(n, 'handleSlideDragStart', function (i) {
          var a = qs(i) ? i.changedTouches[0] : i;
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: a.pageX }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, 'startX'),
          endX: n.handleTravellerDragStart.bind(n, 'endX'),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      tA(e, t),
      ZS(
        e,
        [
          {
            key: 'componentWillUnmount',
            value: function () {
              (this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: 'getIndex',
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                l = u.gap,
                c = u.data,
                f = c.length - 1,
                s = Math.min(i, a),
                d = Math.max(i, a),
                p = e.getIndexInRange(o, s),
                m = e.getIndexInRange(o, d);
              return { startIndex: p - (p % l), endIndex: m === f ? f : m - (m % l) };
            },
          },
          {
            key: 'getTextOfTick',
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                l = Ze(a[n], u, n);
              return V(o) ? o(l, n) : l;
            },
          },
          {
            key: 'attachDragEndListener',
            value: function () {
              (window.addEventListener('mouseup', this.handleDragEnd, !0),
                window.addEventListener('touchend', this.handleDragEnd, !0),
                window.addEventListener('mousemove', this.handleDrag, !0));
            },
          },
          {
            key: 'detachDragEndListener',
            value: function () {
              (window.removeEventListener('mouseup', this.handleDragEnd, !0),
                window.removeEventListener('touchend', this.handleDragEnd, !0),
                window.removeEventListener('mousemove', this.handleDrag, !0));
            },
          },
          {
            key: 'handleSlideDrag',
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                l = this.props,
                c = l.x,
                f = l.width,
                s = l.travellerWidth,
                d = l.startIndex,
                p = l.endIndex,
                m = l.onChange,
                y = n.pageX - a;
              y > 0
                ? (y = Math.min(y, c + f - s - u, c + f - s - o))
                : y < 0 && (y = Math.max(y, c - o, c - u));
              var v = this.getIndex({ startX: o + y, endX: u + y });
              ((v.startIndex !== d || v.endIndex !== p) && m && m(v),
                this.setState({ startX: o + y, endX: u + y, slideMoveStartX: n.pageX }));
            },
          },
          {
            key: 'handleTravellerDragStart',
            value: function (n, i) {
              var a = qs(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: 'handleTravellerMove',
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                l = i.startX,
                c = this.state[o],
                f = this.props,
                s = f.x,
                d = f.width,
                p = f.travellerWidth,
                m = f.onChange,
                y = f.gap,
                v = f.data,
                g = { startX: this.state.startX, endX: this.state.endX },
                b = n.pageX - a;
              (b > 0 ? (b = Math.min(b, s + d - p - c)) : b < 0 && (b = Math.max(b, s - c)),
                (g[o] = c + b));
              var O = this.getIndex(g),
                x = O.startIndex,
                h = O.endIndex,
                w = function () {
                  var A = v.length - 1;
                  return (
                    (o === 'startX' && (u > l ? x % y === 0 : h % y === 0)) ||
                    (u < l && h === A) ||
                    (o === 'endX' && (u > l ? h % y === 0 : x % y === 0)) ||
                    (u > l && h === A)
                  );
                };
              this.setState(Te(Te({}, o, c + b), 'brushMoveStartX', n.pageX), function () {
                m && w() && m(O);
              });
            },
          },
          {
            key: 'handleTravellerMoveKeyboard',
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                l = o.startX,
                c = o.endX,
                f = this.state[i],
                s = u.indexOf(f);
              if (s !== -1) {
                var d = s + n;
                if (!(d === -1 || d >= u.length)) {
                  var p = u[d];
                  (i === 'startX' && p >= c) ||
                    (i === 'endX' && p <= l) ||
                    this.setState(Te({}, i, p), function () {
                      a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
                    });
                }
              }
            },
          },
          {
            key: 'renderBackground',
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.fill,
                c = n.stroke;
              return j.createElement('rect', {
                stroke: c,
                fill: l,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: 'renderPanorama',
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.data,
                c = n.children,
                f = n.padding,
                s = M.Children.only(c);
              return s
                ? j.cloneElement(s, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: l,
                  })
                : null;
            },
          },
          {
            key: 'renderTravellerLayer',
            value: function (n, i) {
              var a,
                o,
                u = this,
                l = this.props,
                c = l.y,
                f = l.travellerWidth,
                s = l.height,
                d = l.traveller,
                p = l.ariaLabel,
                m = l.data,
                y = l.startIndex,
                v = l.endIndex,
                g = Math.max(n, this.props.x),
                b = Ba(Ba({}, H(this.props, !1)), {}, { x: g, y: c, width: f, height: s }),
                O =
                  p ||
                  'Min value: '
                    .concat((a = m[y]) === null || a === void 0 ? void 0 : a.name, ', Max value: ')
                    .concat((o = m[v]) === null || o === void 0 ? void 0 : o.name);
              return j.createElement(
                me,
                {
                  'tabIndex': 0,
                  'role': 'slider',
                  'aria-label': O,
                  'aria-valuenow': n,
                  'className': 'recharts-brush-traveller',
                  'onMouseEnter': this.handleEnterSlideOrTraveller,
                  'onMouseLeave': this.handleLeaveSlideOrTraveller,
                  'onMouseDown': this.travellerDragStartHandlers[i],
                  'onTouchStart': this.travellerDragStartHandlers[i],
                  'onKeyDown': function (h) {
                    ['ArrowLeft', 'ArrowRight'].includes(h.key) &&
                      (h.preventDefault(),
                      h.stopPropagation(),
                      u.handleTravellerMoveKeyboard(h.key === 'ArrowRight' ? 1 : -1, i));
                  },
                  'onFocus': function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  'onBlur': function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  'style': { cursor: 'col-resize' },
                },
                e.renderTraveller(d, b),
              );
            },
          },
          {
            key: 'renderSlide',
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                l = a.stroke,
                c = a.travellerWidth,
                f = Math.min(n, i) + c,
                s = Math.max(Math.abs(i - n) - c, 0);
              return j.createElement('rect', {
                className: 'recharts-brush-slide',
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: 'move' },
                stroke: 'none',
                fill: l,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: s,
                height: u,
              });
            },
          },
          {
            key: 'renderText',
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                l = n.travellerWidth,
                c = n.stroke,
                f = this.state,
                s = f.startX,
                d = f.endX,
                p = 5,
                m = { pointerEvents: 'none', fill: c };
              return j.createElement(
                me,
                { className: 'recharts-brush-texts' },
                j.createElement(
                  Wn,
                  ni(
                    {
                      textAnchor: 'end',
                      verticalAnchor: 'middle',
                      x: Math.min(s, d) - p,
                      y: o + u / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(i),
                ),
                j.createElement(
                  Wn,
                  ni(
                    {
                      textAnchor: 'start',
                      verticalAnchor: 'middle',
                      x: Math.max(s, d) + l + p,
                      y: o + u / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                l = n.y,
                c = n.width,
                f = n.height,
                s = n.alwaysShowText,
                d = this.state,
                p = d.startX,
                m = d.endX,
                y = d.isTextActive,
                v = d.isSlideMoving,
                g = d.isTravellerMoving,
                b = d.isTravellerFocused;
              if (!i || !i.length || !R(u) || !R(l) || !R(c) || !R(f) || c <= 0 || f <= 0)
                return null;
              var O = Y('recharts-brush', a),
                x = j.Children.count(o) === 1,
                h = HS('userSelect', 'none');
              return j.createElement(
                me,
                {
                  className: O,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: h,
                },
                this.renderBackground(),
                x && this.renderPanorama(),
                this.renderSlide(p, m),
                this.renderTravellerLayer(p, 'startX'),
                this.renderTravellerLayer(m, 'endX'),
                (y || v || g || b || s) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: 'renderDefaultTraveller',
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.stroke,
                c = Math.floor(a + u / 2) - 1;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement('rect', {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: l,
                  stroke: 'none',
                }),
                j.createElement('line', {
                  x1: i + 1,
                  y1: c,
                  x2: i + o - 1,
                  y2: c,
                  fill: 'none',
                  stroke: '#fff',
                }),
                j.createElement('line', {
                  x1: i + 1,
                  y1: c + 2,
                  x2: i + o - 1,
                  y2: c + 2,
                  fill: 'none',
                  stroke: '#fff',
                }),
              );
            },
          },
          {
            key: 'renderTraveller',
            value: function (n, i) {
              var a;
              return (
                j.isValidElement(n)
                  ? (a = j.cloneElement(n, i))
                  : V(n)
                    ? (a = n(i))
                    : (a = e.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: 'getDerivedStateFromProps',
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                l = n.travellerWidth,
                c = n.updateId,
                f = n.startIndex,
                s = n.endIndex;
              if (a !== i.prevData || c !== i.prevUpdateId)
                return Ba(
                  { prevData: a, prevTravellerWidth: l, prevUpdateId: c, prevX: u, prevWidth: o },
                  a && a.length
                    ? nA({ data: a, width: o, x: u, travellerWidth: l, startIndex: f, endIndex: s })
                    : { scale: null, scaleValues: null },
                );
              if (i.scale && (o !== i.prevWidth || u !== i.prevX || l !== i.prevTravellerWidth)) {
                i.scale.range([u, u + o - l]);
                var d = i.scale.domain().map(function (p) {
                  return i.scale(p);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: l,
                  prevUpdateId: c,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: d,
                };
              }
              return null;
            },
          },
          {
            key: 'getIndexInRange',
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var l = Math.floor((o + u) / 2);
                n[l] > i ? (u = l) : (o = l);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(M.PureComponent);
Te(ir, 'displayName', 'Brush');
Te(ir, 'defaultProps', {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var La, zs;
function iA() {
  if (zs) return La;
  zs = 1;
  var t = ad();
  function e(r, n) {
    var i;
    return (
      t(r, function (a, o, u) {
        return ((i = n(a, o, u)), !i);
      }),
      !!i
    );
  }
  return ((La = e), La);
}
var qa, Ws;
function aA() {
  if (Ws) return qa;
  Ws = 1;
  var t = uh(),
    e = Nt(),
    r = iA(),
    n = yi(),
    i = mi();
  function a(o, u, l) {
    var c = n(o) ? t : r;
    return (l && i(o, u, l) && (u = void 0), c(o, e(u, 3)));
  }
  return ((qa = a), qa);
}
var oA = aA();
const uA = ie(oA);
var He = function (e, r) {
    var n = e.alwaysShow,
      i = e.ifOverflow;
    return (n && (i = 'extendDomain'), i === r);
  },
  za,
  Fs;
function lA() {
  if (Fs) return za;
  Fs = 1;
  var t = lh(),
    e = ch(),
    r = Nt();
  function n(i, a) {
    var o = {};
    return (
      (a = r(a, 3)),
      e(i, function (u, l, c) {
        t(o, l, a(u, l, c));
      }),
      o
    );
  }
  return ((za = n), za);
}
var cA = lA();
const sA = ie(cA);
var Wa, Gs;
function fA() {
  if (Gs) return Wa;
  Gs = 1;
  function t(e, r) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (!r(e[n], n, e)) return !1;
    return !0;
  }
  return ((Wa = t), Wa);
}
var Fa, Us;
function dA() {
  if (Us) return Fa;
  Us = 1;
  var t = ad();
  function e(r, n) {
    var i = !0;
    return (
      t(r, function (a, o, u) {
        return ((i = !!n(a, o, u)), i);
      }),
      i
    );
  }
  return ((Fa = e), Fa);
}
var Ga, Ks;
function pA() {
  if (Ks) return Ga;
  Ks = 1;
  var t = fA(),
    e = dA(),
    r = Nt(),
    n = yi(),
    i = mi();
  function a(o, u, l) {
    var c = n(o) ? t : e;
    return (l && i(o, u, l) && (u = void 0), c(o, r(u, 3)));
  }
  return ((Ga = a), Ga);
}
var vA = pA();
const Lp = ie(vA);
var hA = ['x', 'y'];
function on(t) {
  '@babel/helpers - typeof';
  return (
    (on =
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
    on(t)
  );
}
function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Jo.apply(this, arguments)
  );
}
function Vs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Tr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vs(Object(r), !0).forEach(function (n) {
          yA(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Vs(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function yA(t, e, r) {
  return (
    (e = mA(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function mA(t) {
  var e = gA(t, 'string');
  return on(e) == 'symbol' ? e : e + '';
}
function gA(t, e) {
  if (on(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (on(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function bA(t, e) {
  if (t == null) return {};
  var r = OA(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function OA(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function wA(t, e) {
  var r = t.x,
    n = t.y,
    i = bA(t, hA),
    a = ''.concat(r),
    o = parseInt(a, 10),
    u = ''.concat(n),
    l = parseInt(u, 10),
    c = ''.concat(e.height || i.height),
    f = parseInt(c, 10),
    s = ''.concat(e.width || i.width),
    d = parseInt(s, 10);
  return Tr(
    Tr(Tr(Tr(Tr({}, e), i), o ? { x: o } : {}), l ? { y: l } : {}),
    {},
    { height: f, width: d, name: e.name, radius: e.radius },
  );
}
function Xs(t) {
  return j.createElement(
    kS,
    Jo({ shapeType: 'rectangle', propTransformer: wA, activeClassName: 'recharts-active-bar' }, t),
  );
}
var xA = function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof e == 'number') return e;
      var a = R(n) || Gy(n);
      return a ? e(n, i) : (a || Ct(!1), r);
    };
  },
  SA = ['value', 'background'],
  qp;
function ar(t) {
  '@babel/helpers - typeof';
  return (
    (ar =
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
    ar(t)
  );
}
function AA(t, e) {
  if (t == null) return {};
  var r = PA(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function PA(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ai.apply(this, arguments)
  );
}
function Hs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Hs(Object(r), !0).forEach(function (n) {
          mt(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Hs(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function jA(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Ys(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Wp(n.key), n));
  }
}
function EA(t, e, r) {
  return (
    e && Ys(t.prototype, e),
    r && Ys(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function TA(t, e, r) {
  return (
    (e = oi(e)),
    _A(t, zp() ? Reflect.construct(e, r || [], oi(t).constructor) : e.apply(t, r))
  );
}
function _A(t, e) {
  if (e && (ar(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return $A(t);
}
function $A(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function zp() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zp = function () {
    return !!t;
  })();
}
function oi(t) {
  return (
    (oi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    oi(t)
  );
}
function IA(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Qo(t, e));
}
function Qo(t, e) {
  return (
    (Qo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Qo(t, e)
  );
}
function mt(t, e, r) {
  return (
    (e = Wp(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Wp(t) {
  var e = CA(t, 'string');
  return ar(e) == 'symbol' ? e : e + '';
}
function CA(t, e) {
  if (ar(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (ar(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var Lt = (function (t) {
  function e() {
    var r;
    jA(this, e);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = TA(this, e, [].concat(i))),
      mt(r, 'state', { isAnimationFinished: !1 }),
      mt(r, 'id', xi('recharts-bar-')),
      mt(r, 'handleAnimationEnd', function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      mt(r, 'handleAnimationStart', function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    IA(e, t),
    EA(
      e,
      [
        {
          key: 'renderRectanglesStatically',
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              l = a.activeIndex,
              c = a.activeBar,
              f = H(this.props, !1);
            return (
              n &&
              n.map(function (s, d) {
                var p = d === l,
                  m = p ? c : o,
                  y = le(
                    le(le({}, f), s),
                    {},
                    {
                      isActive: p,
                      option: m,
                      index: d,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return j.createElement(
                  me,
                  ai({ className: 'recharts-bar-rectangle' }, Nn(i.props, s, d), {
                    key: 'rectangle-'
                      .concat(s?.x, '-')
                      .concat(s?.y, '-')
                      .concat(s?.value, '-')
                      .concat(d),
                  }),
                  j.createElement(Xs, y),
                );
              })
            );
          },
        },
        {
          key: 'renderRectanglesWithAnimation',
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              l = i.animationBegin,
              c = i.animationDuration,
              f = i.animationEasing,
              s = i.animationId,
              d = this.state.prevData;
            return j.createElement(
              gt,
              {
                begin: l,
                duration: c,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: 'bar-'.concat(s),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var m = p.t,
                  y = a.map(function (v, g) {
                    var b = d && d[g];
                    if (b) {
                      var O = Wt(b.x, v.x),
                        x = Wt(b.y, v.y),
                        h = Wt(b.width, v.width),
                        w = Wt(b.height, v.height);
                      return le(le({}, v), {}, { x: O(m), y: x(m), width: h(m), height: w(m) });
                    }
                    if (o === 'horizontal') {
                      var S = Wt(0, v.height),
                        A = S(m);
                      return le(le({}, v), {}, { y: v.y + v.height - A, height: A });
                    }
                    var P = Wt(0, v.width),
                      I = P(m);
                    return le(le({}, v), {}, { width: I });
                  });
                return j.createElement(me, null, n.renderRectanglesStatically(y));
              },
            );
          },
        },
        {
          key: 'renderRectangles',
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Nu(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: 'renderBackground',
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              l = H(this.props.background, !1);
            return a.map(function (c, f) {
              c.value;
              var s = c.background,
                d = AA(c, SA);
              if (!s) return null;
              var p = le(
                le(le(le(le({}, d), {}, { fill: '#eee' }, s), l), Nn(n.props, c, f)),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: 'recharts-bar-background-rectangle',
                },
              );
              return j.createElement(
                Xs,
                ai(
                  {
                    key: 'background-bar-'.concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  p,
                ),
              );
            });
          },
        },
        {
          key: 'renderErrorBar',
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              l = a.yAxis,
              c = a.layout,
              f = a.children,
              s = Fe(f, _i);
            if (!s) return null;
            var d = c === 'vertical' ? o[0].height / 2 : o[0].width / 2,
              p = function (v, g) {
                var b = Array.isArray(v.value) ? v.value[1] : v.value;
                return { x: v.x, y: v.y, value: b, errorVal: Ze(v, g) };
              },
              m = { clipPath: n ? 'url(#clipPath-'.concat(i, ')') : null };
            return j.createElement(
              me,
              m,
              s.map(function (y) {
                return j.cloneElement(y, {
                  key: 'error-bar-'.concat(i, '-').concat(y.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: l,
                  layout: c,
                  offset: d,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              l = n.yAxis,
              c = n.left,
              f = n.top,
              s = n.width,
              d = n.height,
              p = n.isAnimationActive,
              m = n.background,
              y = n.id;
            if (i || !a || !a.length) return null;
            var v = this.state.isAnimationFinished,
              g = Y('recharts-bar', o),
              b = u && u.allowDataOverflow,
              O = l && l.allowDataOverflow,
              x = b || O,
              h = X(y) ? this.id : y;
            return j.createElement(
              me,
              { className: g },
              b || O
                ? j.createElement(
                    'defs',
                    null,
                    j.createElement(
                      'clipPath',
                      { id: 'clipPath-'.concat(h) },
                      j.createElement('rect', {
                        x: b ? c : c - s / 2,
                        y: O ? f : f - d / 2,
                        width: b ? s : s * 2,
                        height: O ? d : d * 2,
                      }),
                    ),
                  )
                : null,
              j.createElement(
                me,
                {
                  className: 'recharts-bar-rectangles',
                  clipPath: x ? 'url(#clipPath-'.concat(h, ')') : null,
                },
                m ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(x, h),
              (!p || v) && It.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(M.PureComponent);
qp = Lt;
mt(Lt, 'displayName', 'Bar');
mt(Lt, 'defaultProps', {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: 'vertical',
  activeBar: !1,
  isAnimationActive: !mn.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
});
mt(Lt, 'getComposedData', function (t) {
  var e = t.props,
    r = t.item,
    n = t.barPosition,
    i = t.bandSize,
    a = t.xAxis,
    o = t.yAxis,
    u = t.xAxisTicks,
    l = t.yAxisTicks,
    c = t.stackedData,
    f = t.dataStartIndex,
    s = t.displayedData,
    d = t.offset,
    p = Z0(n, r);
  if (!p) return null;
  var m = e.layout,
    y = r.type.defaultProps,
    v = y !== void 0 ? le(le({}, y), r.props) : r.props,
    g = v.dataKey,
    b = v.children,
    O = v.minPointSize,
    x = m === 'horizontal' ? o : a,
    h = c ? x.scale.domain() : null,
    w = iO({ numericAxis: x }),
    S = Fe(b, Kd),
    A = s.map(function (P, I) {
      var T, E, $, k, C, D;
      c ? (T = J0(c[f + I], h)) : ((T = Ze(P, g)), Array.isArray(T) || (T = [w, T]));
      var N = xA(O, qp.defaultProps.minPointSize)(T[1], I);
      if (m === 'horizontal') {
        var B,
          z = [o.scale(T[0]), o.scale(T[1])],
          W = z[0],
          U = z[1];
        ((E = zc({ axis: a, ticks: u, bandSize: i, offset: p.offset, entry: P, index: I })),
          ($ = (B = U ?? W) !== null && B !== void 0 ? B : void 0),
          (k = p.size));
        var L = W - U;
        if (
          ((C = Number.isNaN(L) ? 0 : L),
          (D = { x: E, y: o.y, width: k, height: o.height }),
          Math.abs(N) > 0 && Math.abs(C) < Math.abs(N))
        ) {
          var K = ze(C || N) * (Math.abs(N) - Math.abs(C));
          (($ -= K), (C += K));
        }
      } else {
        var ee = [a.scale(T[0]), a.scale(T[1])],
          ue = ee[0],
          je = ee[1];
        if (
          ((E = ue),
          ($ = zc({ axis: o, ticks: l, bandSize: i, offset: p.offset, entry: P, index: I })),
          (k = je - ue),
          (C = p.size),
          (D = { x: a.x, y: $, width: a.width, height: C }),
          Math.abs(N) > 0 && Math.abs(k) < Math.abs(N))
        ) {
          var xt = ze(k || N) * (Math.abs(N) - Math.abs(k));
          k += xt;
        }
      }
      return le(
        le(
          le({}, P),
          {},
          { x: E, y: $, width: k, height: C, value: c ? T : T[1], payload: P, background: D },
          S && S[I] && S[I].props,
        ),
        {},
        { tooltipPayload: [xp(r, P)], tooltipPosition: { x: E + k / 2, y: $ + C / 2 } },
      );
    });
  return le({ data: A, layout: m }, d);
});
function un(t) {
  '@babel/helpers - typeof';
  return (
    (un =
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
    un(t)
  );
}
function MA(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Zs(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Fp(n.key), n));
  }
}
function kA(t, e, r) {
  return (
    e && Zs(t.prototype, e),
    r && Zs(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function Js(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Js(Object(r), !0).forEach(function (n) {
          Ci(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Js(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ci(t, e, r) {
  return (
    (e = Fp(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Fp(t) {
  var e = DA(t, 'string');
  return un(e) == 'symbol' ? e : e + '';
}
function DA(t, e) {
  if (un(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (un(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var NA = function (e, r, n, i, a) {
    var o = e.width,
      u = e.height,
      l = e.layout,
      c = e.children,
      f = Object.keys(r),
      s = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      d = !!_e(c, Lt);
    return f.reduce(function (p, m) {
      var y = r[m],
        v = y.orientation,
        g = y.domain,
        b = y.padding,
        O = b === void 0 ? {} : b,
        x = y.mirror,
        h = y.reversed,
        w = ''.concat(v).concat(x ? 'Mirror' : ''),
        S,
        A,
        P,
        I,
        T;
      if (y.type === 'number' && (y.padding === 'gap' || y.padding === 'no-gap')) {
        var E = g[1] - g[0],
          $ = 1 / 0,
          k = y.categoricalDomain.sort(Vy);
        if (
          (k.forEach(function (ee, ue) {
            ue > 0 && ($ = Math.min((ee || 0) - (k[ue - 1] || 0), $));
          }),
          Number.isFinite($))
        ) {
          var C = $ / E,
            D = y.layout === 'vertical' ? n.height : n.width;
          if ((y.padding === 'gap' && (S = (C * D) / 2), y.padding === 'no-gap')) {
            var N = We(e.barCategoryGap, C * D),
              B = (C * D) / 2;
            S = B - N - ((B - N) / D) * N;
          }
        }
      }
      (i === 'xAxis'
        ? (A = [n.left + (O.left || 0) + (S || 0), n.left + n.width - (O.right || 0) - (S || 0)])
        : i === 'yAxis'
          ? (A =
              l === 'horizontal'
                ? [n.top + n.height - (O.bottom || 0), n.top + (O.top || 0)]
                : [n.top + (O.top || 0) + (S || 0), n.top + n.height - (O.bottom || 0) - (S || 0)])
          : (A = y.range),
        h && (A = [A[1], A[0]]));
      var z = gp(y, a, d),
        W = z.scale,
        U = z.realScaleType;
      (W.domain(g).range(A), bp(W));
      var L = Op(W, qe(qe({}, y), {}, { realScaleType: U }));
      i === 'xAxis'
        ? ((T = (v === 'top' && !x) || (v === 'bottom' && x)),
          (P = n.left),
          (I = s[w] - T * y.height))
        : i === 'yAxis' &&
          ((T = (v === 'left' && !x) || (v === 'right' && x)),
          (P = s[w] - T * y.width),
          (I = n.top));
      var K = qe(
        qe(qe({}, y), L),
        {},
        {
          realScaleType: U,
          x: P,
          y: I,
          scale: W,
          width: i === 'xAxis' ? n.width : y.width,
          height: i === 'yAxis' ? n.height : y.height,
        },
      );
      return (
        (K.bandSize = Kn(K, L)),
        !y.hide && i === 'xAxis'
          ? (s[w] += (T ? -1 : 1) * K.height)
          : y.hide || (s[w] += (T ? -1 : 1) * K.width),
        qe(qe({}, p), {}, Ci({}, m, K))
      );
    }, {});
  },
  Gp = function (e, r) {
    var n = e.x,
      i = e.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  RA = function (e) {
    var r = e.x1,
      n = e.y1,
      i = e.x2,
      a = e.y2;
    return Gp({ x: r, y: n }, { x: i, y: a });
  },
  Up = (function () {
    function t(e) {
      (MA(this, t), (this.scale = e));
    }
    return kA(
      t,
      [
        {
          key: 'domain',
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: 'range',
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: 'rangeMin',
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: 'rangeMax',
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: 'bandwidth',
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: 'apply',
          value: function (r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case 'start':
                    return this.scale(r);
                  case 'middle': {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case 'end': {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + l;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: 'isInRange',
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function (r) {
            return new t(r);
          },
        },
      ],
    );
  })();
Ci(Up, 'EPS', 1e-4);
var zu = function (e) {
  var r = Object.keys(e).reduce(function (n, i) {
    return qe(qe({}, n), {}, Ci({}, i, Up.create(e[i])));
  }, {});
  return qe(
    qe({}, r),
    {},
    {
      apply: function (i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return sA(i, function (l, c) {
          return r[c].apply(l, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return Lp(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function BA(t) {
  return ((t % 180) + 180) % 180;
}
var LA = function (e) {
    var r = e.width,
      n = e.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = BA(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(l);
  },
  Ua,
  Qs;
function qA() {
  if (Qs) return Ua;
  Qs = 1;
  var t = Nt(),
    e = sh(),
    r = fh();
  function n(i) {
    return function (a, o, u) {
      var l = Object(a);
      if (!e(a)) {
        var c = t(o, 3);
        ((a = r(a)),
          (o = function (s) {
            return c(l[s], s, l);
          }));
      }
      var f = i(a, o, u);
      return f > -1 ? l[c ? a[f] : f] : void 0;
    };
  }
  return ((Ua = n), Ua);
}
var Ka, ef;
function zA() {
  if (ef) return Ka;
  ef = 1;
  var t = Dp();
  function e(r) {
    var n = t(r),
      i = n % 1;
    return n === n ? (i ? n - i : n) : 0;
  }
  return ((Ka = e), Ka);
}
var Va, tf;
function WA() {
  if (tf) return Va;
  tf = 1;
  var t = Rd(),
    e = Nt(),
    r = zA(),
    n = Math.max;
  function i(a, o, u) {
    var l = a == null ? 0 : a.length;
    if (!l) return -1;
    var c = u == null ? 0 : r(u);
    return (c < 0 && (c = n(l + c, 0)), t(a, e(o, 3), c));
  }
  return ((Va = i), Va);
}
var Xa, rf;
function FA() {
  if (rf) return Xa;
  rf = 1;
  var t = qA(),
    e = WA(),
    r = t(e);
  return ((Xa = r), Xa);
}
var GA = FA();
const UA = ie(GA);
var KA = dh();
const VA = ie(KA);
var XA = VA(
    function (t) {
      return { x: t.left, y: t.top, width: t.width, height: t.height };
    },
    function (t) {
      return ['l', t.left, 't', t.top, 'w', t.width, 'h', t.height].join('');
    },
  ),
  Wu = M.createContext(void 0),
  Fu = M.createContext(void 0),
  Kp = M.createContext(void 0),
  Vp = M.createContext({}),
  Xp = M.createContext(void 0),
  Hp = M.createContext(0),
  Yp = M.createContext(0),
  nf = function (e) {
    var r = e.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = e.clipPathId,
      u = e.children,
      l = e.width,
      c = e.height,
      f = XA(a);
    return j.createElement(
      Wu.Provider,
      { value: n },
      j.createElement(
        Fu.Provider,
        { value: i },
        j.createElement(
          Vp.Provider,
          { value: a },
          j.createElement(
            Kp.Provider,
            { value: f },
            j.createElement(
              Xp.Provider,
              { value: o },
              j.createElement(
                Hp.Provider,
                { value: c },
                j.createElement(Yp.Provider, { value: l }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  HA = function () {
    return M.useContext(Xp);
  },
  Zp = function (e) {
    var r = M.useContext(Wu);
    r == null && Ct(!1);
    var n = r[e];
    return (n == null && Ct(!1), n);
  },
  YA = function () {
    var e = M.useContext(Wu);
    return yt(e);
  },
  ZA = function () {
    var e = M.useContext(Fu),
      r = UA(e, function (n) {
        return Lp(n.domain, Number.isFinite);
      });
    return r || yt(e);
  },
  Jp = function (e) {
    var r = M.useContext(Fu);
    r == null && Ct(!1);
    var n = r[e];
    return (n == null && Ct(!1), n);
  },
  JA = function () {
    var e = M.useContext(Kp);
    return e;
  },
  QA = function () {
    return M.useContext(Vp);
  },
  Gu = function () {
    return M.useContext(Yp);
  },
  Uu = function () {
    return M.useContext(Hp);
  };
function or(t) {
  '@babel/helpers - typeof';
  return (
    (or =
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
    or(t)
  );
}
function eP(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function tP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, ev(n.key), n));
  }
}
function rP(t, e, r) {
  return (e && tP(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function nP(t, e, r) {
  return (
    (e = ui(e)),
    iP(t, Qp() ? Reflect.construct(e, r || [], ui(t).constructor) : e.apply(t, r))
  );
}
function iP(t, e) {
  if (e && (or(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return aP(t);
}
function aP(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Qp() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qp = function () {
    return !!t;
  })();
}
function ui(t) {
  return (
    (ui = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ui(t)
  );
}
function oP(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && eu(t, e));
}
function eu(t, e) {
  return (
    (eu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    eu(t, e)
  );
}
function af(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function of(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? af(Object(r), !0).forEach(function (n) {
          Ku(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : af(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ku(t, e, r) {
  return (
    (e = ev(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function ev(t) {
  var e = uP(t, 'string');
  return or(e) == 'symbol' ? e : e + '';
}
function uP(t, e) {
  if (or(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (or(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function lP(t, e) {
  return dP(t) || fP(t, e) || sP(t, e) || cP();
}
function cP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sP(t, e) {
  if (t) {
    if (typeof t == 'string') return uf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uf(t, e);
  }
}
function uf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function fP(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function dP(t) {
  if (Array.isArray(t)) return t;
}
function tu() {
  return (
    (tu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    tu.apply(this, arguments)
  );
}
var pP = function (e, r) {
    var n;
    return (
      j.isValidElement(e)
        ? (n = j.cloneElement(e, r))
        : V(e)
          ? (n = e(r))
          : (n = j.createElement('line', tu({}, r, { className: 'recharts-reference-line-line' }))),
      n
    );
  },
  vP = function (e, r, n, i, a, o, u, l, c) {
    var f = a.x,
      s = a.y,
      d = a.width,
      p = a.height;
    if (n) {
      var m = c.y,
        y = e.y.apply(m, { position: o });
      if (He(c, 'discard') && !e.y.isInRange(y)) return null;
      var v = [
        { x: f + d, y },
        { x: f, y },
      ];
      return l === 'left' ? v.reverse() : v;
    }
    if (r) {
      var g = c.x,
        b = e.x.apply(g, { position: o });
      if (He(c, 'discard') && !e.x.isInRange(b)) return null;
      var O = [
        { x: b, y: s + p },
        { x: b, y: s },
      ];
      return u === 'top' ? O.reverse() : O;
    }
    if (i) {
      var x = c.segment,
        h = x.map(function (w) {
          return e.apply(w, { position: o });
        });
      return He(c, 'discard') &&
        uA(h, function (w) {
          return !e.isInRange(w);
        })
        ? null
        : h;
    }
    return null;
  };
function hP(t) {
  var e = t.x,
    r = t.y,
    n = t.segment,
    i = t.xAxisId,
    a = t.yAxisId,
    o = t.shape,
    u = t.className,
    l = t.alwaysShow,
    c = HA(),
    f = Zp(i),
    s = Jp(a),
    d = JA();
  if (!c || !d) return null;
  lt(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var p = zu({ x: f.scale, y: s.scale }),
    m = ve(e),
    y = ve(r),
    v = n && n.length === 2,
    g = vP(p, m, y, v, d, t.position, f.orientation, s.orientation, t);
  if (!g) return null;
  var b = lP(g, 2),
    O = b[0],
    x = O.x,
    h = O.y,
    w = b[1],
    S = w.x,
    A = w.y,
    P = He(t, 'hidden') ? 'url(#'.concat(c, ')') : void 0,
    I = of(of({ clipPath: P }, H(t, !0)), {}, { x1: x, y1: h, x2: S, y2: A });
  return j.createElement(
    me,
    { className: Y('recharts-reference-line', u) },
    pP(o, I),
    se.renderCallByParent(t, RA({ x1: x, y1: h, x2: S, y2: A })),
  );
}
var Vu = (function (t) {
  function e() {
    return (eP(this, e), nP(this, e, arguments));
  }
  return (
    oP(e, t),
    rP(e, [
      {
        key: 'render',
        value: function () {
          return j.createElement(hP, this.props);
        },
      },
    ])
  );
})(j.Component);
Ku(Vu, 'displayName', 'ReferenceLine');
Ku(Vu, 'defaultProps', {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle',
});
function ru() {
  return (
    (ru = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    ru.apply(this, arguments)
  );
}
function ur(t) {
  '@babel/helpers - typeof';
  return (
    (ur =
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
    ur(t)
  );
}
function lf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function cf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? lf(Object(r), !0).forEach(function (n) {
          Mi(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : lf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function yP(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function mP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, rv(n.key), n));
  }
}
function gP(t, e, r) {
  return (e && mP(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function bP(t, e, r) {
  return (
    (e = li(e)),
    OP(t, tv() ? Reflect.construct(e, r || [], li(t).constructor) : e.apply(t, r))
  );
}
function OP(t, e) {
  if (e && (ur(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return wP(t);
}
function wP(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tv() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tv = function () {
    return !!t;
  })();
}
function li(t) {
  return (
    (li = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    li(t)
  );
}
function xP(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && nu(t, e));
}
function nu(t, e) {
  return (
    (nu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    nu(t, e)
  );
}
function Mi(t, e, r) {
  return (
    (e = rv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function rv(t) {
  var e = SP(t, 'string');
  return ur(e) == 'symbol' ? e : e + '';
}
function SP(t, e) {
  if (ur(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (ur(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var AP = function (e) {
    var r = e.x,
      n = e.y,
      i = e.xAxis,
      a = e.yAxis,
      o = zu({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return He(e, 'discard') && !o.isInRange(u) ? null : u;
  },
  ki = (function (t) {
    function e() {
      return (yP(this, e), bP(this, e, arguments));
    }
    return (
      xP(e, t),
      gP(e, [
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              l = n.clipPathId,
              c = ve(i),
              f = ve(a);
            if (
              (lt(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !c || !f)
            )
              return null;
            var s = AP(this.props);
            if (!s) return null;
            var d = s.x,
              p = s.y,
              m = this.props,
              y = m.shape,
              v = m.className,
              g = He(this.props, 'hidden') ? 'url(#'.concat(l, ')') : void 0,
              b = cf(cf({ clipPath: g }, H(this.props, !0)), {}, { cx: d, cy: p });
            return j.createElement(
              me,
              { className: Y('recharts-reference-dot', v) },
              e.renderDot(y, b),
              se.renderCallByParent(this.props, {
                x: d - o,
                y: p - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(j.Component);
Mi(ki, 'displayName', 'ReferenceDot');
Mi(ki, 'defaultProps', {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
});
Mi(ki, 'renderDot', function (t, e) {
  var r;
  return (
    j.isValidElement(t)
      ? (r = j.cloneElement(t, e))
      : V(t)
        ? (r = t(e))
        : (r = j.createElement(
            kp,
            ru({}, e, { cx: e.cx, cy: e.cy, className: 'recharts-reference-dot-dot' }),
          )),
    r
  );
});
function iu() {
  return (
    (iu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    iu.apply(this, arguments)
  );
}
function lr(t) {
  '@babel/helpers - typeof';
  return (
    (lr =
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
    lr(t)
  );
}
function sf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ff(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? sf(Object(r), !0).forEach(function (n) {
          Di(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : sf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function PP(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function jP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, iv(n.key), n));
  }
}
function EP(t, e, r) {
  return (e && jP(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function TP(t, e, r) {
  return (
    (e = ci(e)),
    _P(t, nv() ? Reflect.construct(e, r || [], ci(t).constructor) : e.apply(t, r))
  );
}
function _P(t, e) {
  if (e && (lr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return $P(t);
}
function $P(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function nv() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (nv = function () {
    return !!t;
  })();
}
function ci(t) {
  return (
    (ci = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ci(t)
  );
}
function IP(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && au(t, e));
}
function au(t, e) {
  return (
    (au = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    au(t, e)
  );
}
function Di(t, e, r) {
  return (
    (e = iv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function iv(t) {
  var e = CP(t, 'string');
  return lr(e) == 'symbol' ? e : e + '';
}
function CP(t, e) {
  if (lr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (lr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var MP = function (e, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      l = a.y1,
      c = a.y2,
      f = a.xAxis,
      s = a.yAxis;
    if (!f || !s) return null;
    var d = zu({ x: f.scale, y: s.scale }),
      p = {
        x: e ? d.x.apply(o, { position: 'start' }) : d.x.rangeMin,
        y: n ? d.y.apply(l, { position: 'start' }) : d.y.rangeMin,
      },
      m = {
        x: r ? d.x.apply(u, { position: 'end' }) : d.x.rangeMax,
        y: i ? d.y.apply(c, { position: 'end' }) : d.y.rangeMax,
      };
    return He(a, 'discard') && (!d.isInRange(p) || !d.isInRange(m)) ? null : Gp(p, m);
  },
  Ni = (function (t) {
    function e() {
      return (PP(this, e), TP(this, e, arguments));
    }
    return (
      IP(e, t),
      EP(e, [
        {
          key: 'render',
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              l = n.className,
              c = n.alwaysShow,
              f = n.clipPathId;
            lt(
              c === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var s = ve(i),
              d = ve(a),
              p = ve(o),
              m = ve(u),
              y = this.props.shape;
            if (!s && !d && !p && !m && !y) return null;
            var v = MP(s, d, p, m, this.props);
            if (!v && !y) return null;
            var g = He(this.props, 'hidden') ? 'url(#'.concat(f, ')') : void 0;
            return j.createElement(
              me,
              { className: Y('recharts-reference-area', l) },
              e.renderRect(y, ff(ff({ clipPath: g }, H(this.props, !0)), v)),
              se.renderCallByParent(this.props, v),
            );
          },
        },
      ])
    );
  })(j.Component);
Di(Ni, 'displayName', 'ReferenceArea');
Di(Ni, 'defaultProps', {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1,
});
Di(Ni, 'renderRect', function (t, e) {
  var r;
  return (
    j.isValidElement(t)
      ? (r = j.cloneElement(t, e))
      : V(t)
        ? (r = t(e))
        : (r = j.createElement(qu, iu({}, e, { className: 'recharts-reference-area-rect' }))),
    r
  );
});
function av(t, e, r) {
  if (e < 1) return [];
  if (e === 1 && r === void 0) return t;
  for (var n = [], i = 0; i < t.length; i += e) n.push(t[i]);
  return n;
}
function kP(t, e, r) {
  var n = { width: t.width + e.width, height: t.height + e.height };
  return LA(n, r);
}
function DP(t, e, r) {
  var n = r === 'width',
    i = t.x,
    a = t.y,
    o = t.width,
    u = t.height;
  return e === 1
    ? { start: n ? i : a, end: n ? i + o : a + u }
    : { start: n ? i + o : a + u, end: n ? i : a };
}
function si(t, e, r, n, i) {
  if (t * e < t * n || t * e > t * i) return !1;
  var a = r();
  return t * (e - (t * a) / 2 - n) >= 0 && t * (e + (t * a) / 2 - i) <= 0;
}
function NP(t, e) {
  return av(t, e + 1);
}
function RP(t, e, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = e.start,
      u = e.end,
      l = 0,
      c = 1,
      f = o,
      s = function () {
        var m = n?.[l];
        if (m === void 0) return { v: av(n, c) };
        var y = l,
          v,
          g = function () {
            return (v === void 0 && (v = r(m, y)), v);
          },
          b = m.coordinate,
          O = l === 0 || si(t, b, g, f, u);
        (O || ((l = 0), (f = o), (c += 1)), O && ((f = b + t * (g() / 2 + i)), (l += c)));
      },
      d;
    c <= a.length;
  )
    if (((d = s()), d)) return d.v;
  return [];
}
function ln(t) {
  '@babel/helpers - typeof';
  return (
    (ln =
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
    ln(t)
  );
}
function df(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? df(Object(r), !0).forEach(function (n) {
          BP(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : df(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function BP(t, e, r) {
  return (
    (e = LP(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function LP(t) {
  var e = qP(t, 'string');
  return ln(e) == 'symbol' ? e : e + '';
}
function qP(t, e) {
  if (ln(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (ln(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function zP(t, e, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = e.start,
      l = e.end,
      c = function (d) {
        var p = a[d],
          m,
          y = function () {
            return (m === void 0 && (m = r(p, d)), m);
          };
        if (d === o - 1) {
          var v = t * (p.coordinate + (t * y()) / 2 - l);
          a[d] = p = xe(xe({}, p), {}, { tickCoord: v > 0 ? p.coordinate - v * t : p.coordinate });
        } else a[d] = p = xe(xe({}, p), {}, { tickCoord: p.coordinate });
        var g = si(t, p.tickCoord, y, u, l);
        g && ((l = p.tickCoord - t * (y() / 2 + i)), (a[d] = xe(xe({}, p), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    c(f);
  return a;
}
function WP(t, e, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    l = e.start,
    c = e.end;
  if (a) {
    var f = n[u - 1],
      s = r(f, u - 1),
      d = t * (f.coordinate + (t * s) / 2 - c);
    o[u - 1] = f = xe(xe({}, f), {}, { tickCoord: d > 0 ? f.coordinate - d * t : f.coordinate });
    var p = si(
      t,
      f.tickCoord,
      function () {
        return s;
      },
      l,
      c,
    );
    p && ((c = f.tickCoord - t * (s / 2 + i)), (o[u - 1] = xe(xe({}, f), {}, { isShow: !0 })));
  }
  for (
    var m = a ? u - 1 : u,
      y = function (b) {
        var O = o[b],
          x,
          h = function () {
            return (x === void 0 && (x = r(O, b)), x);
          };
        if (b === 0) {
          var w = t * (O.coordinate - (t * h()) / 2 - l);
          o[b] = O = xe(xe({}, O), {}, { tickCoord: w < 0 ? O.coordinate - w * t : O.coordinate });
        } else o[b] = O = xe(xe({}, O), {}, { tickCoord: O.coordinate });
        var S = si(t, O.tickCoord, h, l, c);
        S && ((l = O.tickCoord + t * (h() / 2 + i)), (o[b] = xe(xe({}, O), {}, { isShow: !0 })));
      },
      v = 0;
    v < m;
    v++
  )
    y(v);
  return o;
}
function Xu(t, e, r) {
  var n = t.tick,
    i = t.ticks,
    a = t.viewBox,
    o = t.minTickGap,
    u = t.orientation,
    l = t.interval,
    c = t.tickFormatter,
    f = t.unit,
    s = t.angle;
  if (!i || !i.length || !n) return [];
  if (R(l) || mn.isSsr) return NP(i, typeof l == 'number' && R(l) ? l : 0);
  var d = [],
    p = u === 'top' || u === 'bottom' ? 'width' : 'height',
    m = f && p === 'width' ? Ir(f, { fontSize: e, letterSpacing: r }) : { width: 0, height: 0 },
    y = function (O, x) {
      var h = V(c) ? c(O.value, x) : O.value;
      return p === 'width'
        ? kP(Ir(h, { fontSize: e, letterSpacing: r }), m, s)
        : Ir(h, { fontSize: e, letterSpacing: r })[p];
    },
    v = i.length >= 2 ? ze(i[1].coordinate - i[0].coordinate) : 1,
    g = DP(a, v, p);
  return l === 'equidistantPreserveStart'
    ? RP(v, g, y, i, o)
    : (l === 'preserveStart' || l === 'preserveStartEnd'
        ? (d = WP(v, g, y, i, o, l === 'preserveStartEnd'))
        : (d = zP(v, g, y, i, o)),
      d.filter(function (b) {
        return b.isShow;
      }));
}
var FP = ['viewBox'],
  GP = ['viewBox'],
  UP = ['ticks'];
function cr(t) {
  '@babel/helpers - typeof';
  return (
    (cr =
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
    cr(t)
  );
}
function Kt() {
  return (
    (Kt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Kt.apply(this, arguments)
  );
}
function pf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function de(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? pf(Object(r), !0).forEach(function (n) {
          Hu(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : pf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ha(t, e) {
  if (t == null) return {};
  var r = KP(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function KP(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function VP(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function vf(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, uv(n.key), n));
  }
}
function XP(t, e, r) {
  return (
    e && vf(t.prototype, e),
    r && vf(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
  );
}
function HP(t, e, r) {
  return (
    (e = fi(e)),
    YP(t, ov() ? Reflect.construct(e, r || [], fi(t).constructor) : e.apply(t, r))
  );
}
function YP(t, e) {
  if (e && (cr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return ZP(t);
}
function ZP(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ov() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ov = function () {
    return !!t;
  })();
}
function fi(t) {
  return (
    (fi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fi(t)
  );
}
function JP(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && ou(t, e));
}
function ou(t, e) {
  return (
    (ou = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ou(t, e)
  );
}
function Hu(t, e, r) {
  return (
    (e = uv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function uv(t) {
  var e = QP(t, 'string');
  return cr(e) == 'symbol' ? e : e + '';
}
function QP(t, e) {
  if (cr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (cr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var gr = (function (t) {
  function e(r) {
    var n;
    return (
      VP(this, e),
      (n = HP(this, e, [r])),
      (n.state = { fontSize: '', letterSpacing: '' }),
      n
    );
  }
  return (
    JP(e, t),
    XP(
      e,
      [
        {
          key: 'shouldComponentUpdate',
          value: function (n, i) {
            var a = n.viewBox,
              o = Ha(n, FP),
              u = this.props,
              l = u.viewBox,
              c = Ha(u, GP);
            return !Xt(a, l) || !Xt(o, c) || !Xt(i, this.state);
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName('recharts-cartesian-axis-tick-value')[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: 'getTickLineCoord',
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              l = i.height,
              c = i.orientation,
              f = i.tickSize,
              s = i.mirror,
              d = i.tickMargin,
              p,
              m,
              y,
              v,
              g,
              b,
              O = s ? -1 : 1,
              x = n.tickSize || f,
              h = R(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (c) {
              case 'top':
                ((p = m = n.coordinate),
                  (v = o + +!s * l),
                  (y = v - O * x),
                  (b = y - O * d),
                  (g = h));
                break;
              case 'left':
                ((y = v = n.coordinate),
                  (m = a + +!s * u),
                  (p = m - O * x),
                  (g = p - O * d),
                  (b = h));
                break;
              case 'right':
                ((y = v = n.coordinate),
                  (m = a + +s * u),
                  (p = m + O * x),
                  (g = p + O * d),
                  (b = h));
                break;
              default:
                ((p = m = n.coordinate),
                  (v = o + +s * l),
                  (y = v + O * x),
                  (b = y + O * d),
                  (g = h));
                break;
            }
            return { line: { x1: p, y1: y, x2: m, y2: v }, tick: { x: g, y: b } };
          },
        },
        {
          key: 'getTickTextAnchor',
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case 'left':
                o = a ? 'start' : 'end';
                break;
              case 'right':
                o = a ? 'end' : 'start';
                break;
              default:
                o = 'middle';
                break;
            }
            return o;
          },
        },
        {
          key: 'getTickVerticalAnchor',
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = 'end';
            switch (i) {
              case 'left':
              case 'right':
                o = 'middle';
                break;
              case 'top':
                o = a ? 'start' : 'end';
                break;
              default:
                o = a ? 'end' : 'start';
                break;
            }
            return o;
          },
        },
        {
          key: 'renderAxisLine',
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              l = n.orientation,
              c = n.mirror,
              f = n.axisLine,
              s = de(de(de({}, H(this.props, !1)), H(f, !1)), {}, { fill: 'none' });
            if (l === 'top' || l === 'bottom') {
              var d = +((l === 'top' && !c) || (l === 'bottom' && c));
              s = de(de({}, s), {}, { x1: i, y1: a + d * u, x2: i + o, y2: a + d * u });
            } else {
              var p = +((l === 'left' && !c) || (l === 'right' && c));
              s = de(de({}, s), {}, { x1: i + p * o, y1: a, x2: i + p * o, y2: a + u });
            }
            return j.createElement(
              'line',
              Kt({}, s, { className: Y('recharts-cartesian-axis-line', Ne(f, 'className')) }),
            );
          },
        },
        {
          key: 'renderTicks',
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              l = u.tickLine,
              c = u.stroke,
              f = u.tick,
              s = u.tickFormatter,
              d = u.unit,
              p = Xu(de(de({}, this.props), {}, { ticks: n }), i, a),
              m = this.getTickTextAnchor(),
              y = this.getTickVerticalAnchor(),
              v = H(this.props, !1),
              g = H(f, !1),
              b = de(de({}, v), {}, { fill: 'none' }, H(l, !1)),
              O = p.map(function (x, h) {
                var w = o.getTickLineCoord(x),
                  S = w.line,
                  A = w.tick,
                  P = de(
                    de(
                      de(
                        de({ textAnchor: m, verticalAnchor: y }, v),
                        {},
                        { stroke: 'none', fill: c },
                        g,
                      ),
                      A,
                    ),
                    {},
                    { index: h, payload: x, visibleTicksCount: p.length, tickFormatter: s },
                  );
                return j.createElement(
                  me,
                  Kt(
                    {
                      className: 'recharts-cartesian-axis-tick',
                      key: 'tick-'
                        .concat(x.value, '-')
                        .concat(x.coordinate, '-')
                        .concat(x.tickCoord),
                    },
                    Nn(o.props, x, h),
                  ),
                  l &&
                    j.createElement(
                      'line',
                      Kt({}, b, S, {
                        className: Y('recharts-cartesian-axis-tick-line', Ne(l, 'className')),
                      }),
                    ),
                  f &&
                    e.renderTickItem(
                      f,
                      P,
                      ''.concat(V(s) ? s(x.value, h) : x.value).concat(d || ''),
                    ),
                );
              });
            return j.createElement('g', { className: 'recharts-cartesian-axis-ticks' }, O);
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              l = i.ticksGenerator,
              c = i.className,
              f = i.hide;
            if (f) return null;
            var s = this.props,
              d = s.ticks,
              p = Ha(s, UP),
              m = d;
            return (
              V(l) && (m = d && d.length > 0 ? l(this.props) : l(p)),
              o <= 0 || u <= 0 || !m || !m.length
                ? null
                : j.createElement(
                    me,
                    {
                      className: Y('recharts-cartesian-axis', c),
                      ref: function (v) {
                        n.layerReference = v;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(m, this.state.fontSize, this.state.letterSpacing),
                    se.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: 'renderTickItem',
          value: function (n, i, a) {
            var o,
              u = Y(i.className, 'recharts-cartesian-axis-tick-value');
            return (
              j.isValidElement(n)
                ? (o = j.cloneElement(n, de(de({}, i), {}, { className: u })))
                : V(n)
                  ? (o = n(de(de({}, i), {}, { className: u })))
                  : (o = j.createElement(
                      Wn,
                      Kt({}, i, { className: 'recharts-cartesian-axis-tick-value' }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(M.Component);
Hu(gr, 'displayName', 'CartesianAxis');
Hu(gr, 'defaultProps', {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: 'bottom',
  ticks: [],
  stroke: '#666',
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd',
});
var e1 = ['x1', 'y1', 'x2', 'y2', 'key'],
  t1 = ['offset'];
function Dt(t) {
  '@babel/helpers - typeof';
  return (
    (Dt =
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
    Dt(t)
  );
}
function hf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? hf(Object(r), !0).forEach(function (n) {
          r1(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : hf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function r1(t, e, r) {
  return (
    (e = n1(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function n1(t) {
  var e = i1(t, 'string');
  return Dt(e) == 'symbol' ? e : e + '';
}
function i1(t, e) {
  if (Dt(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Dt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Et() {
  return (
    (Et = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Et.apply(this, arguments)
  );
}
function yf(t, e) {
  if (t == null) return {};
  var r = a1(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function a1(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var o1 = function (e) {
  var r = e.fill;
  if (!r || r === 'none') return null;
  var n = e.fillOpacity,
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height,
    l = e.ry;
  return j.createElement('rect', {
    x: i,
    y: a,
    ry: l,
    width: o,
    height: u,
    stroke: 'none',
    fill: r,
    fillOpacity: n,
    className: 'recharts-cartesian-grid-bg',
  });
};
function lv(t, e) {
  var r;
  if (j.isValidElement(t)) r = j.cloneElement(t, e);
  else if (V(t)) r = t(e);
  else {
    var n = e.x1,
      i = e.y1,
      a = e.x2,
      o = e.y2,
      u = e.key,
      l = yf(e, e1),
      c = H(l, !1);
    c.offset;
    var f = yf(c, t1);
    r = j.createElement('line', Et({}, f, { x1: n, y1: i, x2: a, y2: o, fill: 'none', key: u }));
  }
  return r;
}
function u1(t) {
  var e = t.x,
    r = t.width,
    n = t.horizontal,
    i = n === void 0 ? !0 : n,
    a = t.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, l) {
    var c = Se(Se({}, t), {}, { x1: e, y1: u, x2: e + r, y2: u, key: 'line-'.concat(l), index: l });
    return lv(i, c);
  });
  return j.createElement('g', { className: 'recharts-cartesian-grid-horizontal' }, o);
}
function l1(t) {
  var e = t.y,
    r = t.height,
    n = t.vertical,
    i = n === void 0 ? !0 : n,
    a = t.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, l) {
    var c = Se(Se({}, t), {}, { x1: u, y1: e, x2: u, y2: e + r, key: 'line-'.concat(l), index: l });
    return lv(i, c);
  });
  return j.createElement('g', { className: 'recharts-cartesian-grid-vertical' }, o);
}
function c1(t) {
  var e = t.horizontalFill,
    r = t.fillOpacity,
    n = t.x,
    i = t.y,
    a = t.width,
    o = t.height,
    u = t.horizontalPoints,
    l = t.horizontal,
    c = l === void 0 ? !0 : l;
  if (!c || !e || !e.length) return null;
  var f = u
    .map(function (d) {
      return Math.round(d + i - i);
    })
    .sort(function (d, p) {
      return d - p;
    });
  i !== f[0] && f.unshift(0);
  var s = f.map(function (d, p) {
    var m = !f[p + 1],
      y = m ? i + o - d : f[p + 1] - d;
    if (y <= 0) return null;
    var v = p % e.length;
    return j.createElement('rect', {
      key: 'react-'.concat(p),
      y: d,
      x: n,
      height: y,
      width: a,
      stroke: 'none',
      fill: e[v],
      fillOpacity: r,
      className: 'recharts-cartesian-grid-bg',
    });
  });
  return j.createElement('g', { className: 'recharts-cartesian-gridstripes-horizontal' }, s);
}
function s1(t) {
  var e = t.vertical,
    r = e === void 0 ? !0 : e,
    n = t.verticalFill,
    i = t.fillOpacity,
    a = t.x,
    o = t.y,
    u = t.width,
    l = t.height,
    c = t.verticalPoints;
  if (!r || !n || !n.length) return null;
  var f = c
    .map(function (d) {
      return Math.round(d + a - a);
    })
    .sort(function (d, p) {
      return d - p;
    });
  a !== f[0] && f.unshift(0);
  var s = f.map(function (d, p) {
    var m = !f[p + 1],
      y = m ? a + u - d : f[p + 1] - d;
    if (y <= 0) return null;
    var v = p % n.length;
    return j.createElement('rect', {
      key: 'react-'.concat(p),
      x: d,
      y: o,
      width: y,
      height: l,
      stroke: 'none',
      fill: n[v],
      fillOpacity: i,
      className: 'recharts-cartesian-grid-bg',
    });
  });
  return j.createElement('g', { className: 'recharts-cartesian-gridstripes-vertical' }, s);
}
var f1 = function (e, r) {
    var n = e.xAxis,
      i = e.width,
      a = e.height,
      o = e.offset;
    return mp(
      Xu(
        Se(
          Se(Se({}, gr.defaultProps), n),
          {},
          { ticks: ot(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.left,
      o.left + o.width,
      r,
    );
  },
  d1 = function (e, r) {
    var n = e.yAxis,
      i = e.width,
      a = e.height,
      o = e.offset;
    return mp(
      Xu(
        Se(
          Se(Se({}, gr.defaultProps), n),
          {},
          { ticks: ot(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.top,
      o.top + o.height,
      r,
    );
  },
  Gt = {
    horizontal: !0,
    vertical: !0,
    stroke: '#ccc',
    fill: 'none',
    verticalFill: [],
    horizontalFill: [],
  };
function cv(t) {
  var e,
    r,
    n,
    i,
    a,
    o,
    u = Gu(),
    l = Uu(),
    c = QA(),
    f = Se(
      Se({}, t),
      {},
      {
        stroke: (e = t.stroke) !== null && e !== void 0 ? e : Gt.stroke,
        fill: (r = t.fill) !== null && r !== void 0 ? r : Gt.fill,
        horizontal: (n = t.horizontal) !== null && n !== void 0 ? n : Gt.horizontal,
        horizontalFill: (i = t.horizontalFill) !== null && i !== void 0 ? i : Gt.horizontalFill,
        vertical: (a = t.vertical) !== null && a !== void 0 ? a : Gt.vertical,
        verticalFill: (o = t.verticalFill) !== null && o !== void 0 ? o : Gt.verticalFill,
        x: R(t.x) ? t.x : c.left,
        y: R(t.y) ? t.y : c.top,
        width: R(t.width) ? t.width : c.width,
        height: R(t.height) ? t.height : c.height,
      },
    ),
    s = f.x,
    d = f.y,
    p = f.width,
    m = f.height,
    y = f.syncWithTicks,
    v = f.horizontalValues,
    g = f.verticalValues,
    b = YA(),
    O = ZA();
  if (!R(p) || p <= 0 || !R(m) || m <= 0 || !R(s) || s !== +s || !R(d) || d !== +d) return null;
  var x = f.verticalCoordinatesGenerator || f1,
    h = f.horizontalCoordinatesGenerator || d1,
    w = f.horizontalPoints,
    S = f.verticalPoints;
  if ((!w || !w.length) && V(h)) {
    var A = v && v.length,
      P = h(
        {
          yAxis: O ? Se(Se({}, O), {}, { ticks: A ? v : O.ticks }) : void 0,
          width: u,
          height: l,
          offset: c,
        },
        A ? !0 : y,
      );
    (lt(
      Array.isArray(P),
      'horizontalCoordinatesGenerator should return Array but instead it returned ['.concat(
        Dt(P),
        ']',
      ),
    ),
      Array.isArray(P) && (w = P));
  }
  if ((!S || !S.length) && V(x)) {
    var I = g && g.length,
      T = x(
        {
          xAxis: b ? Se(Se({}, b), {}, { ticks: I ? g : b.ticks }) : void 0,
          width: u,
          height: l,
          offset: c,
        },
        I ? !0 : y,
      );
    (lt(
      Array.isArray(T),
      'verticalCoordinatesGenerator should return Array but instead it returned ['.concat(
        Dt(T),
        ']',
      ),
    ),
      Array.isArray(T) && (S = T));
  }
  return j.createElement(
    'g',
    { className: 'recharts-cartesian-grid' },
    j.createElement(o1, {
      fill: f.fill,
      fillOpacity: f.fillOpacity,
      x: f.x,
      y: f.y,
      width: f.width,
      height: f.height,
      ry: f.ry,
    }),
    j.createElement(u1, Et({}, f, { offset: c, horizontalPoints: w, xAxis: b, yAxis: O })),
    j.createElement(l1, Et({}, f, { offset: c, verticalPoints: S, xAxis: b, yAxis: O })),
    j.createElement(c1, Et({}, f, { horizontalPoints: w })),
    j.createElement(s1, Et({}, f, { verticalPoints: S })),
  );
}
cv.displayName = 'CartesianGrid';
function sr(t) {
  '@babel/helpers - typeof';
  return (
    (sr =
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
    sr(t)
  );
}
function p1(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function v1(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, dv(n.key), n));
  }
}
function h1(t, e, r) {
  return (e && v1(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function y1(t, e, r) {
  return (
    (e = di(e)),
    m1(t, sv() ? Reflect.construct(e, r || [], di(t).constructor) : e.apply(t, r))
  );
}
function m1(t, e) {
  if (e && (sr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return g1(t);
}
function g1(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function sv() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sv = function () {
    return !!t;
  })();
}
function di(t) {
  return (
    (di = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    di(t)
  );
}
function b1(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && uu(t, e));
}
function uu(t, e) {
  return (
    (uu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    uu(t, e)
  );
}
function fv(t, e, r) {
  return (
    (e = dv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function dv(t) {
  var e = O1(t, 'string');
  return sr(e) == 'symbol' ? e : e + '';
}
function O1(t, e) {
  if (sr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (sr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function lu() {
  return (
    (lu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    lu.apply(this, arguments)
  );
}
function w1(t) {
  var e = t.xAxisId,
    r = Gu(),
    n = Uu(),
    i = Zp(e);
  return i == null
    ? null
    : M.createElement(
        gr,
        lu({}, i, {
          className: Y('recharts-'.concat(i.axisType, ' ').concat(i.axisType), i.className),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return ot(o, !0);
          },
        }),
      );
}
var cn = (function (t) {
  function e() {
    return (p1(this, e), y1(this, e, arguments));
  }
  return (
    b1(e, t),
    h1(e, [
      {
        key: 'render',
        value: function () {
          return M.createElement(w1, this.props);
        },
      },
    ])
  );
})(M.Component);
fv(cn, 'displayName', 'XAxis');
fv(cn, 'defaultProps', {
  allowDecimals: !0,
  hide: !1,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function fr(t) {
  '@babel/helpers - typeof';
  return (
    (fr =
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
    fr(t)
  );
}
function x1(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function S1(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, hv(n.key), n));
  }
}
function A1(t, e, r) {
  return (e && S1(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function P1(t, e, r) {
  return (
    (e = pi(e)),
    j1(t, pv() ? Reflect.construct(e, r || [], pi(t).constructor) : e.apply(t, r))
  );
}
function j1(t, e) {
  if (e && (fr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return E1(t);
}
function E1(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function pv() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pv = function () {
    return !!t;
  })();
}
function pi(t) {
  return (
    (pi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    pi(t)
  );
}
function T1(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && cu(t, e));
}
function cu(t, e) {
  return (
    (cu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    cu(t, e)
  );
}
function vv(t, e, r) {
  return (
    (e = hv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function hv(t) {
  var e = _1(t, 'string');
  return fr(e) == 'symbol' ? e : e + '';
}
function _1(t, e) {
  if (fr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (fr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    su.apply(this, arguments)
  );
}
var $1 = function (e) {
    var r = e.yAxisId,
      n = Gu(),
      i = Uu(),
      a = Jp(r);
    return a == null
      ? null
      : M.createElement(
          gr,
          su({}, a, {
            className: Y('recharts-'.concat(a.axisType, ' ').concat(a.axisType), a.className),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (u) {
              return ot(u, !0);
            },
          }),
        );
  },
  sn = (function (t) {
    function e() {
      return (x1(this, e), P1(this, e, arguments));
    }
    return (
      T1(e, t),
      A1(e, [
        {
          key: 'render',
          value: function () {
            return M.createElement($1, this.props);
          },
        },
      ])
    );
  })(M.Component);
vv(sn, 'displayName', 'YAxis');
vv(sn, 'defaultProps', {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
});
function mf(t) {
  return k1(t) || M1(t) || C1(t) || I1();
}
function I1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C1(t, e) {
  if (t) {
    if (typeof t == 'string') return fu(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fu(t, e);
  }
}
function M1(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function k1(t) {
  if (Array.isArray(t)) return fu(t);
}
function fu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var du = function (e, r, n, i, a) {
    var o = Fe(e, Vu),
      u = Fe(e, ki),
      l = [].concat(mf(o), mf(u)),
      c = Fe(e, Ni),
      f = ''.concat(i, 'Id'),
      s = i[0],
      d = r;
    if (
      (l.length &&
        (d = l.reduce(function (y, v) {
          if (v.props[f] === n && He(v.props, 'extendDomain') && R(v.props[s])) {
            var g = v.props[s];
            return [Math.min(y[0], g), Math.max(y[1], g)];
          }
          return y;
        }, d)),
      c.length)
    ) {
      var p = ''.concat(s, '1'),
        m = ''.concat(s, '2');
      d = c.reduce(function (y, v) {
        if (v.props[f] === n && He(v.props, 'extendDomain') && R(v.props[p]) && R(v.props[m])) {
          var g = v.props[p],
            b = v.props[m];
          return [Math.min(y[0], g, b), Math.max(y[1], g, b)];
        }
        return y;
      }, d);
    }
    return (
      a &&
        a.length &&
        (d = a.reduce(function (y, v) {
          return R(v) ? [Math.min(y[0], v), Math.max(y[1], v)] : y;
        }, d)),
      d
    );
  },
  Ya = { exports: {} },
  gf;
function D1() {
  return (
    gf ||
      ((gf = 1),
      (function (t) {
        var e = Object.prototype.hasOwnProperty,
          r = '~';
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(l, c, f) {
          ((this.fn = l), (this.context = c), (this.once = f || !1));
        }
        function a(l, c, f, s, d) {
          if (typeof f != 'function') throw new TypeError('The listener must be a function');
          var p = new i(f, s || l, d),
            m = r ? r + c : c;
          return (
            l._events[m]
              ? l._events[m].fn
                ? (l._events[m] = [l._events[m], p])
                : l._events[m].push(p)
              : ((l._events[m] = p), l._eventsCount++),
            l
          );
        }
        function o(l, c) {
          --l._eventsCount === 0 ? (l._events = new n()) : delete l._events[c];
        }
        function u() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((u.prototype.eventNames = function () {
          var c = [],
            f,
            s;
          if (this._eventsCount === 0) return c;
          for (s in (f = this._events)) e.call(f, s) && c.push(r ? s.slice(1) : s);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
        }),
          (u.prototype.listeners = function (c) {
            var f = r ? r + c : c,
              s = this._events[f];
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var d = 0, p = s.length, m = new Array(p); d < p; d++) m[d] = s[d].fn;
            return m;
          }),
          (u.prototype.listenerCount = function (c) {
            var f = r ? r + c : c,
              s = this._events[f];
            return s ? (s.fn ? 1 : s.length) : 0;
          }),
          (u.prototype.emit = function (c, f, s, d, p, m) {
            var y = r ? r + c : c;
            if (!this._events[y]) return !1;
            var v = this._events[y],
              g = arguments.length,
              b,
              O;
            if (v.fn) {
              switch ((v.once && this.removeListener(c, v.fn, void 0, !0), g)) {
                case 1:
                  return (v.fn.call(v.context), !0);
                case 2:
                  return (v.fn.call(v.context, f), !0);
                case 3:
                  return (v.fn.call(v.context, f, s), !0);
                case 4:
                  return (v.fn.call(v.context, f, s, d), !0);
                case 5:
                  return (v.fn.call(v.context, f, s, d, p), !0);
                case 6:
                  return (v.fn.call(v.context, f, s, d, p, m), !0);
              }
              for (O = 1, b = new Array(g - 1); O < g; O++) b[O - 1] = arguments[O];
              v.fn.apply(v.context, b);
            } else {
              var x = v.length,
                h;
              for (O = 0; O < x; O++)
                switch ((v[O].once && this.removeListener(c, v[O].fn, void 0, !0), g)) {
                  case 1:
                    v[O].fn.call(v[O].context);
                    break;
                  case 2:
                    v[O].fn.call(v[O].context, f);
                    break;
                  case 3:
                    v[O].fn.call(v[O].context, f, s);
                    break;
                  case 4:
                    v[O].fn.call(v[O].context, f, s, d);
                    break;
                  default:
                    if (!b) for (h = 1, b = new Array(g - 1); h < g; h++) b[h - 1] = arguments[h];
                    v[O].fn.apply(v[O].context, b);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, f, s) {
            return a(this, c, f, s, !1);
          }),
          (u.prototype.once = function (c, f, s) {
            return a(this, c, f, s, !0);
          }),
          (u.prototype.removeListener = function (c, f, s, d) {
            var p = r ? r + c : c;
            if (!this._events[p]) return this;
            if (!f) return (o(this, p), this);
            var m = this._events[p];
            if (m.fn) m.fn === f && (!d || m.once) && (!s || m.context === s) && o(this, p);
            else {
              for (var y = 0, v = [], g = m.length; y < g; y++)
                (m[y].fn !== f || (d && !m[y].once) || (s && m[y].context !== s)) && v.push(m[y]);
              v.length ? (this._events[p] = v.length === 1 ? v[0] : v) : o(this, p);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (c) {
            var f;
            return (
              c
                ? ((f = r ? r + c : c), this._events[f] && o(this, f))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (t.exports = u));
      })(Ya)),
    Ya.exports
  );
}
var N1 = D1();
const R1 = ie(N1);
var Za = new R1(),
  Ja = 'recharts.syncMouseEvents';
function fn(t) {
  '@babel/helpers - typeof';
  return (
    (fn =
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
    fn(t)
  );
}
function B1(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function L1(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, yv(n.key), n));
  }
}
function q1(t, e, r) {
  return (e && L1(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function Qa(t, e, r) {
  return (
    (e = yv(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function yv(t) {
  var e = z1(t, 'string');
  return fn(e) == 'symbol' ? e : e + '';
}
function z1(t, e) {
  if (fn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (fn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var W1 = (function () {
  function t() {
    (B1(this, t),
      Qa(this, 'activeIndex', 0),
      Qa(this, 'coordinateList', []),
      Qa(this, 'layout', 'horizontal'));
  }
  return q1(t, [
    {
      key: 'setDetails',
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          l = r.layout,
          c = l === void 0 ? null : l,
          f = r.offset,
          s = f === void 0 ? null : f,
          d = r.mouseHandlerCallback,
          p = d === void 0 ? null : d;
        ((this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = c ?? this.layout),
          (this.offset = s ?? this.offset),
          (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: 'focus',
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: 'keyboardEvent',
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case 'ArrowRight': {
              if (this.layout !== 'horizontal') return;
              ((this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)),
                this.spoofMouse());
              break;
            }
            case 'ArrowLeft': {
              if (this.layout !== 'horizontal') return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: 'setIndex',
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: 'spoofMouse',
      value: function () {
        var r, n;
        if (this.layout === 'horizontal' && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            l = this.coordinateList[this.activeIndex].coordinate,
            c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            s = a + l + c,
            d = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: s, pageY: d });
        }
      },
    },
  ]);
})();
function F1(t, e, r) {
  if (r === 'number' && e === !0 && Array.isArray(t)) {
    var n = t?.[0],
      i = t?.[1];
    if (n && i && R(n) && R(i)) return !0;
  }
  return !1;
}
function G1(t, e, r, n) {
  var i = n / 2;
  return {
    stroke: 'none',
    fill: '#ccc',
    x: t === 'horizontal' ? e.x - i : r.left + 0.5,
    y: t === 'horizontal' ? r.top + 0.5 : e.y - i,
    width: t === 'horizontal' ? n : r.width - 1,
    height: t === 'horizontal' ? r.height - 1 : n,
  };
}
function mv(t) {
  var e = t.cx,
    r = t.cy,
    n = t.radius,
    i = t.startAngle,
    a = t.endAngle,
    o = Oe(e, r, n, i),
    u = Oe(e, r, n, a);
  return { points: [o, u], cx: e, cy: r, radius: n, startAngle: i, endAngle: a };
}
function U1(t, e, r) {
  var n, i, a, o;
  if (t === 'horizontal') ((n = e.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (t === 'vertical') ((i = e.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (e.cx != null && e.cy != null)
    if (t === 'centric') {
      var u = e.cx,
        l = e.cy,
        c = e.innerRadius,
        f = e.outerRadius,
        s = e.angle,
        d = Oe(u, l, c, s),
        p = Oe(u, l, f, s);
      ((n = d.x), (i = d.y), (a = p.x), (o = p.y));
    } else return mv(e);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function dn(t) {
  '@babel/helpers - typeof';
  return (
    (dn =
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
    dn(t)
  );
}
function bf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Tn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? bf(Object(r), !0).forEach(function (n) {
          K1(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : bf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function K1(t, e, r) {
  return (
    (e = V1(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function V1(t) {
  var e = X1(t, 'string');
  return dn(e) == 'symbol' ? e : e + '';
}
function X1(t, e) {
  if (dn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (dn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function H1(t) {
  var e,
    r,
    n = t.element,
    i = t.tooltipEventType,
    a = t.isActive,
    o = t.activeCoordinate,
    u = t.activePayload,
    l = t.offset,
    c = t.activeTooltipIndex,
    f = t.tooltipAxisBandSize,
    s = t.layout,
    d = t.chartName,
    p =
      (e = n.props.cursor) !== null && e !== void 0
        ? e
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !p || !a || !o || (d !== 'ScatterChart' && i !== 'axis')) return null;
  var m,
    y = is;
  if (d === 'ScatterChart') ((m = o), (y = fS));
  else if (d === 'BarChart') ((m = G1(s, o, l, f)), (y = qu));
  else if (s === 'radial') {
    var v = mv(o),
      g = v.cx,
      b = v.cy,
      O = v.radius,
      x = v.startAngle,
      h = v.endAngle;
    ((m = { cx: g, cy: b, startAngle: x, endAngle: h, innerRadius: O, outerRadius: O }), (y = jp));
  } else ((m = { points: U1(s, o, l) }), (y = is));
  var w = Tn(
    Tn(Tn(Tn({ stroke: '#ccc', pointerEvents: 'none' }, l), m), H(p, !1)),
    {},
    { payload: u, payloadIndex: c, className: Y('recharts-tooltip-cursor', p.className) },
  );
  return M.isValidElement(p) ? M.cloneElement(p, w) : M.createElement(y, w);
}
var Y1 = ['item'],
  Z1 = ['children', 'className', 'width', 'height', 'style', 'compact', 'title', 'desc'];
function dr(t) {
  '@babel/helpers - typeof';
  return (
    (dr =
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
    dr(t)
  );
}
function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Vt.apply(this, arguments)
  );
}
function Of(t, e) {
  return ej(t) || Q1(t, e) || bv(t, e) || J1();
}
function J1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q1(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function ej(t) {
  if (Array.isArray(t)) return t;
}
function wf(t, e) {
  if (t == null) return {};
  var r = tj(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function tj(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function rj(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function nj(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, Ov(n.key), n));
  }
}
function ij(t, e, r) {
  return (e && nj(t.prototype, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t);
}
function aj(t, e, r) {
  return (
    (e = vi(e)),
    oj(t, gv() ? Reflect.construct(e, r || [], vi(t).constructor) : e.apply(t, r))
  );
}
function oj(t, e) {
  if (e && (dr(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return uj(t);
}
function uj(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function gv() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gv = function () {
    return !!t;
  })();
}
function vi(t) {
  return (
    (vi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    vi(t)
  );
}
function lj(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && pu(t, e));
}
function pu(t, e) {
  return (
    (pu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    pu(t, e)
  );
}
function pr(t) {
  return fj(t) || sj(t) || bv(t) || cj();
}
function cj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bv(t, e) {
  if (t) {
    if (typeof t == 'string') return vu(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vu(t, e);
  }
}
function sj(t) {
  if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
    return Array.from(t);
}
function fj(t) {
  if (Array.isArray(t)) return vu(t);
}
function vu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function xf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function _(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? xf(Object(r), !0).forEach(function (n) {
          G(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : xf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function G(t, e, r) {
  return (
    (e = Ov(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Ov(t) {
  var e = dj(t, 'string');
  return dr(e) == 'symbol' ? e : e + '';
}
function dj(t, e) {
  if (dr(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (dr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
var pj = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
  vj = { width: '100%', height: '100%' },
  wv = { x: 0, y: 0 };
function _n(t) {
  return t;
}
var hj = function (e, r) {
    return r === 'horizontal' ? e.x : r === 'vertical' ? e.y : r === 'centric' ? e.angle : e.radius;
  },
  yj = function (e, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (e === 'horizontal') return { x: a.coordinate, y: i.y };
      if (e === 'vertical') return { x: i.x, y: a.coordinate };
      if (e === 'centric') {
        var o = a.coordinate,
          u = i.radius;
        return _(_(_({}, i), Oe(i.cx, i.cy, u, o)), {}, { angle: o, radius: u });
      }
      var l = a.coordinate,
        c = i.angle;
      return _(_(_({}, i), Oe(i.cx, i.cy, l, c)), {}, { angle: c, radius: l });
    }
    return wv;
  },
  Ri = function (e, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, l) {
        var c = l.props.data;
        return c && c.length ? [].concat(pr(u), pr(c)) : u;
      }, []);
    return o.length > 0 ? o : e && e.length && R(i) && R(a) ? e.slice(i, a + 1) : [];
  };
function xv(t) {
  return t === 'number' ? [0, 'auto'] : void 0;
}
var hu = function (e, r, n, i) {
    var a = e.graphicalItems,
      o = e.tooltipAxis,
      u = Ri(r, e);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (l, c) {
          var f,
            s = (f = c.props.data) !== null && f !== void 0 ? f : r;
          s &&
            e.dataStartIndex + e.dataEndIndex !== 0 &&
            e.dataEndIndex - e.dataStartIndex >= n &&
            (s = s.slice(e.dataStartIndex, e.dataEndIndex + 1));
          var d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = s === void 0 ? u : s;
            d = fo(p, o.dataKey, i);
          } else d = (s && s[n]) || u[n];
          return d ? [].concat(pr(l), [xp(c, d)]) : l;
        }, []);
  },
  Sf = function (e, r, n, i) {
    var a = i || { x: e.chartX, y: e.chartY },
      o = hj(a, n),
      u = e.orderedTooltipTicks,
      l = e.tooltipAxis,
      c = e.tooltipTicks,
      f = U0(o, u, c, l);
    if (f >= 0 && c) {
      var s = c[f] && c[f].value,
        d = hu(e, r, f, s),
        p = yj(n, u, f, a);
      return { activeTooltipIndex: f, activeLabel: s, activePayload: d, activeCoordinate: p };
    }
    return null;
  },
  mj = function (e, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      f = e.layout,
      s = e.children,
      d = e.stackOffset,
      p = yp(f, a);
    return n.reduce(function (m, y) {
      var v,
        g = y.type.defaultProps !== void 0 ? _(_({}, y.type.defaultProps), y.props) : y.props,
        b = g.type,
        O = g.dataKey,
        x = g.allowDataOverflow,
        h = g.allowDuplicatedCategory,
        w = g.scale,
        S = g.ticks,
        A = g.includeHidden,
        P = g[o];
      if (m[P]) return m;
      var I = Ri(e.data, {
          graphicalItems: i.filter(function (L) {
            var K,
              ee =
                o in L.props
                  ? L.props[o]
                  : (K = L.type.defaultProps) === null || K === void 0
                    ? void 0
                    : K[o];
            return ee === P;
          }),
          dataStartIndex: l,
          dataEndIndex: c,
        }),
        T = I.length,
        E,
        $,
        k;
      F1(g.domain, x, b) &&
        ((E = Do(g.domain, null, x)),
        p && (b === 'number' || w !== 'auto') && (k = Cr(I, O, 'category')));
      var C = xv(b);
      if (!E || E.length === 0) {
        var D,
          N = (D = g.domain) !== null && D !== void 0 ? D : C;
        if (O) {
          if (((E = Cr(I, O, b)), b === 'category' && p)) {
            var B = Ky(E);
            h && B
              ? (($ = E), (E = ri(0, T)))
              : h ||
                (E = Gc(N, E, y).reduce(function (L, K) {
                  return L.indexOf(K) >= 0 ? L : [].concat(pr(L), [K]);
                }, []));
          } else if (b === 'category')
            h
              ? (E = E.filter(function (L) {
                  return L !== '' && !X(L);
                }))
              : (E = Gc(N, E, y).reduce(function (L, K) {
                  return L.indexOf(K) >= 0 || K === '' || X(K) ? L : [].concat(pr(L), [K]);
                }, []));
          else if (b === 'number') {
            var z = Y0(
              I,
              i.filter(function (L) {
                var K,
                  ee,
                  ue =
                    o in L.props
                      ? L.props[o]
                      : (K = L.type.defaultProps) === null || K === void 0
                        ? void 0
                        : K[o],
                  je =
                    'hide' in L.props
                      ? L.props.hide
                      : (ee = L.type.defaultProps) === null || ee === void 0
                        ? void 0
                        : ee.hide;
                return ue === P && (A || !je);
              }),
              O,
              a,
              f,
            );
            z && (E = z);
          }
          p && (b === 'number' || w !== 'auto') && (k = Cr(I, O, 'category'));
        } else
          p
            ? (E = ri(0, T))
            : u && u[P] && u[P].hasStack && b === 'number'
              ? (E = d === 'expand' ? [0, 1] : wp(u[P].stackGroups, l, c))
              : (E = hp(
                  I,
                  i.filter(function (L) {
                    var K = o in L.props ? L.props[o] : L.type.defaultProps[o],
                      ee = 'hide' in L.props ? L.props.hide : L.type.defaultProps.hide;
                    return K === P && (A || !ee);
                  }),
                  b,
                  f,
                  !0,
                ));
        if (b === 'number') ((E = du(s, E, P, a, S)), N && (E = Do(N, E, x)));
        else if (b === 'category' && N) {
          var W = N,
            U = E.every(function (L) {
              return W.indexOf(L) >= 0;
            });
          U && (E = W);
        }
      }
      return _(
        _({}, m),
        {},
        G(
          {},
          P,
          _(
            _({}, g),
            {},
            {
              axisType: a,
              domain: E,
              categoricalDomain: k,
              duplicateDomain: $,
              originalDomain: (v = g.domain) !== null && v !== void 0 ? v : C,
              isCategorical: p,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  gj = function (e, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      f = e.layout,
      s = e.children,
      d = Ri(e.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: c }),
      p = d.length,
      m = yp(f, a),
      y = -1;
    return n.reduce(function (v, g) {
      var b = g.type.defaultProps !== void 0 ? _(_({}, g.type.defaultProps), g.props) : g.props,
        O = b[o],
        x = xv('number');
      if (!v[O]) {
        y++;
        var h;
        return (
          m
            ? (h = ri(0, p))
            : u && u[O] && u[O].hasStack
              ? ((h = wp(u[O].stackGroups, l, c)), (h = du(s, h, O, a)))
              : ((h = Do(
                  x,
                  hp(
                    d,
                    n.filter(function (w) {
                      var S,
                        A,
                        P =
                          o in w.props
                            ? w.props[o]
                            : (S = w.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S[o],
                        I =
                          'hide' in w.props
                            ? w.props.hide
                            : (A = w.type.defaultProps) === null || A === void 0
                              ? void 0
                              : A.hide;
                      return P === O && !I;
                    }),
                    'number',
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (h = du(s, h, O, a))),
          _(
            _({}, v),
            {},
            G(
              {},
              O,
              _(
                _({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: Ne(pj, ''.concat(a, '.').concat(y % 2), null),
                  domain: h,
                  originalDomain: x,
                  isCategorical: m,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return v;
    }, {});
  },
  bj = function (e, r) {
    var n = r.axisType,
      i = n === void 0 ? 'xAxis' : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      f = e.children,
      s = ''.concat(i, 'Id'),
      d = Fe(f, a),
      p = {};
    return (
      d && d.length
        ? (p = mj(e, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: c,
          }))
        : o &&
          o.length &&
          (p = gj(e, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: c,
          })),
      p
    );
  },
  Oj = function (e) {
    var r = yt(e),
      n = ot(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: ku(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Kn(r, n),
    };
  },
  Af = function (e) {
    var r = e.children,
      n = e.defaultShowTooltip,
      i = _e(r, ir),
      a = 0,
      o = 0;
    return (
      e.data && e.data.length !== 0 && (o = e.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  wj = function (e) {
    return !e || !e.length
      ? !1
      : e.some(function (r) {
          var n = ut(r && r.type);
          return n && n.indexOf('Bar') >= 0;
        });
  },
  Pf = function (e) {
    return e === 'horizontal'
      ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
      : e === 'vertical'
        ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
        : e === 'centric'
          ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
          : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
  },
  xj = function (e, r) {
    var n = e.props,
      i = e.graphicalItems,
      a = e.xAxisMap,
      o = a === void 0 ? {} : a,
      u = e.yAxisMap,
      l = u === void 0 ? {} : u,
      c = n.width,
      f = n.height,
      s = n.children,
      d = n.margin || {},
      p = _e(s, ir),
      m = _e(s, _t),
      y = Object.keys(l).reduce(
        function (h, w) {
          var S = l[w],
            A = S.orientation;
          return !S.mirror && !S.hide ? _(_({}, h), {}, G({}, A, h[A] + S.width)) : h;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      v = Object.keys(o).reduce(
        function (h, w) {
          var S = o[w],
            A = S.orientation;
          return !S.mirror && !S.hide
            ? _(_({}, h), {}, G({}, A, Ne(h, ''.concat(A)) + S.height))
            : h;
        },
        { top: d.top || 0, bottom: d.bottom || 0 },
      ),
      g = _(_({}, v), y),
      b = g.bottom;
    (p && (g.bottom += p.props.height || ir.defaultProps.height), m && r && (g = X0(g, i, n, r)));
    var O = c - g.left - g.right,
      x = f - g.top - g.bottom;
    return _(_({ brushBottom: b }, g), {}, { width: Math.max(O, 0), height: Math.max(x, 0) });
  },
  Sj = function (e, r) {
    if (r === 'xAxis') return e[r].width;
    if (r === 'yAxis') return e[r].height;
  },
  Aj = function (e) {
    var r = e.chartName,
      n = e.GraphicalChild,
      i = e.defaultTooltipEventType,
      a = i === void 0 ? 'axis' : i,
      o = e.validateTooltipEventTypes,
      u = o === void 0 ? ['axis'] : o,
      l = e.axisComponents,
      c = e.legendContent,
      f = e.formatAxisMap,
      s = e.defaultProps,
      d = function (g, b) {
        var O = b.graphicalItems,
          x = b.stackGroups,
          h = b.offset,
          w = b.updateId,
          S = b.dataStartIndex,
          A = b.dataEndIndex,
          P = g.barSize,
          I = g.layout,
          T = g.barGap,
          E = g.barCategoryGap,
          $ = g.maxBarSize,
          k = Pf(I),
          C = k.numericAxisName,
          D = k.cateAxisName,
          N = wj(O),
          B = [];
        return (
          O.forEach(function (z, W) {
            var U = Ri(g.data, { graphicalItems: [z], dataStartIndex: S, dataEndIndex: A }),
              L = z.type.defaultProps !== void 0 ? _(_({}, z.type.defaultProps), z.props) : z.props,
              K = L.dataKey,
              ee = L.maxBarSize,
              ue = L[''.concat(C, 'Id')],
              je = L[''.concat(D, 'Id')],
              xt = {},
              Ae = l.reduce(function (we, et) {
                var zt = b[''.concat(et.axisType, 'Map')],
                  br = L[''.concat(et.axisType, 'Id')];
                (zt && zt[br]) || et.axisType === 'zAxis' || Ct(!1);
                var Or = zt[br];
                return _(
                  _({}, we),
                  {},
                  G(G({}, et.axisType, Or), ''.concat(et.axisType, 'Ticks'), ot(Or)),
                );
              }, xt),
              Ue = Ae[D],
              qt = Ae[''.concat(D, 'Ticks')],
              te = x && x[ue] && x[ue].hasStack && aO(z, x[ue].stackGroups),
              ft = ut(z.type).indexOf('Bar') >= 0,
              Je = Kn(Ue, qt),
              dt = [],
              he = N && K0({ barSize: P, stackGroups: x, totalSize: Sj(Ae, D) });
            if (ft) {
              var St,
                Qe,
                pt = X(ee) ? $ : ee,
                vt =
                  (St = (Qe = Kn(Ue, qt, !0)) !== null && Qe !== void 0 ? Qe : pt) !== null &&
                  St !== void 0
                    ? St
                    : 0;
              ((dt = V0({
                barGap: T,
                barCategoryGap: E,
                bandSize: vt !== Je ? vt : Je,
                sizeList: he[je],
                maxBarSize: pt,
              })),
                vt !== Je &&
                  (dt = dt.map(function (we) {
                    return _(
                      _({}, we),
                      {},
                      {
                        position: _(
                          _({}, we.position),
                          {},
                          { offset: we.position.offset - vt / 2 },
                        ),
                      },
                    );
                  })));
            }
            var Ke = z && z.type && z.type.getComposedData;
            Ke &&
              B.push({
                props: _(
                  _(
                    {},
                    Ke(
                      _(
                        _({}, Ae),
                        {},
                        {
                          displayedData: U,
                          props: g,
                          dataKey: K,
                          item: z,
                          bandSize: Je,
                          barPosition: dt,
                          offset: h,
                          stackedData: te,
                          layout: I,
                          dataStartIndex: S,
                          dataEndIndex: A,
                        },
                      ),
                    ),
                  ),
                  {},
                  G(
                    G(G({ key: z.key || 'item-'.concat(W) }, C, Ae[C]), D, Ae[D]),
                    'animationId',
                    w,
                  ),
                ),
                childIndex: im(z, g.children),
                item: z,
              });
          }),
          B
        );
      },
      p = function (g, b) {
        var O = g.props,
          x = g.dataStartIndex,
          h = g.dataEndIndex,
          w = g.updateId;
        if (!xl({ props: O })) return null;
        var S = O.children,
          A = O.layout,
          P = O.stackOffset,
          I = O.data,
          T = O.reverseStackOrder,
          E = Pf(A),
          $ = E.numericAxisName,
          k = E.cateAxisName,
          C = Fe(S, n),
          D = nO(I, C, ''.concat($, 'Id'), ''.concat(k, 'Id'), P, T),
          N = l.reduce(function (L, K) {
            var ee = ''.concat(K.axisType, 'Map');
            return _(
              _({}, L),
              {},
              G(
                {},
                ee,
                bj(
                  O,
                  _(
                    _({}, K),
                    {},
                    {
                      graphicalItems: C,
                      stackGroups: K.axisType === $ && D,
                      dataStartIndex: x,
                      dataEndIndex: h,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          B = xj(_(_({}, N), {}, { props: O, graphicalItems: C }), b?.legendBBox);
        Object.keys(N).forEach(function (L) {
          N[L] = f(O, N[L], B, L.replace('Map', ''), r);
        });
        var z = N[''.concat(k, 'Map')],
          W = Oj(z),
          U = d(
            O,
            _(
              _({}, N),
              {},
              {
                dataStartIndex: x,
                dataEndIndex: h,
                updateId: w,
                graphicalItems: C,
                stackGroups: D,
                offset: B,
              },
            ),
          );
        return _(
          _({ formattedGraphicalItems: U, graphicalItems: C, offset: B, stackGroups: D }, W),
          N,
        );
      },
      m = (function (v) {
        function g(b) {
          var O, x, h;
          return (
            rj(this, g),
            (h = aj(this, g, [b])),
            G(h, 'eventEmitterSymbol', Symbol('rechartsEventEmitter')),
            G(h, 'accessibilityManager', new W1()),
            G(h, 'handleLegendBBoxUpdate', function (w) {
              if (w) {
                var S = h.state,
                  A = S.dataStartIndex,
                  P = S.dataEndIndex,
                  I = S.updateId;
                h.setState(
                  _(
                    { legendBBox: w },
                    p(
                      { props: h.props, dataStartIndex: A, dataEndIndex: P, updateId: I },
                      _(_({}, h.state), {}, { legendBBox: w }),
                    ),
                  ),
                );
              }
            }),
            G(h, 'handleReceiveSyncEvent', function (w, S, A) {
              if (h.props.syncId === w) {
                if (A === h.eventEmitterSymbol && typeof h.props.syncMethod != 'function') return;
                h.applySyncEvent(S);
              }
            }),
            G(h, 'handleBrushChange', function (w) {
              var S = w.startIndex,
                A = w.endIndex;
              if (S !== h.state.dataStartIndex || A !== h.state.dataEndIndex) {
                var P = h.state.updateId;
                (h.setState(function () {
                  return _(
                    { dataStartIndex: S, dataEndIndex: A },
                    p({ props: h.props, dataStartIndex: S, dataEndIndex: A, updateId: P }, h.state),
                  );
                }),
                  h.triggerSyncEvent({ dataStartIndex: S, dataEndIndex: A }));
              }
            }),
            G(h, 'handleMouseEnter', function (w) {
              var S = h.getMouseInfo(w);
              if (S) {
                var A = _(_({}, S), {}, { isTooltipActive: !0 });
                (h.setState(A), h.triggerSyncEvent(A));
                var P = h.props.onMouseEnter;
                V(P) && P(A, w);
              }
            }),
            G(h, 'triggeredAfterMouseMove', function (w) {
              var S = h.getMouseInfo(w),
                A = S ? _(_({}, S), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
              (h.setState(A), h.triggerSyncEvent(A));
              var P = h.props.onMouseMove;
              V(P) && P(A, w);
            }),
            G(h, 'handleItemMouseEnter', function (w) {
              h.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: w,
                  activePayload: w.tooltipPayload,
                  activeCoordinate: w.tooltipPosition || { x: w.cx, y: w.cy },
                };
              });
            }),
            G(h, 'handleItemMouseLeave', function () {
              h.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            G(h, 'handleMouseMove', function (w) {
              (w.persist(), h.throttleTriggeredAfterMouseMove(w));
            }),
            G(h, 'handleMouseLeave', function (w) {
              h.throttleTriggeredAfterMouseMove.cancel();
              var S = { isTooltipActive: !1 };
              (h.setState(S), h.triggerSyncEvent(S));
              var A = h.props.onMouseLeave;
              V(A) && A(S, w);
            }),
            G(h, 'handleOuterEvent', function (w) {
              var S = nm(w),
                A = Ne(h.props, ''.concat(S));
              if (S && V(A)) {
                var P, I;
                (/.*touch.*/i.test(S)
                  ? (I = h.getMouseInfo(w.changedTouches[0]))
                  : (I = h.getMouseInfo(w)),
                  A((P = I) !== null && P !== void 0 ? P : {}, w));
              }
            }),
            G(h, 'handleClick', function (w) {
              var S = h.getMouseInfo(w);
              if (S) {
                var A = _(_({}, S), {}, { isTooltipActive: !0 });
                (h.setState(A), h.triggerSyncEvent(A));
                var P = h.props.onClick;
                V(P) && P(A, w);
              }
            }),
            G(h, 'handleMouseDown', function (w) {
              var S = h.props.onMouseDown;
              if (V(S)) {
                var A = h.getMouseInfo(w);
                S(A, w);
              }
            }),
            G(h, 'handleMouseUp', function (w) {
              var S = h.props.onMouseUp;
              if (V(S)) {
                var A = h.getMouseInfo(w);
                S(A, w);
              }
            }),
            G(h, 'handleTouchMove', function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                h.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
            }),
            G(h, 'handleTouchStart', function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                h.handleMouseDown(w.changedTouches[0]);
            }),
            G(h, 'handleTouchEnd', function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                h.handleMouseUp(w.changedTouches[0]);
            }),
            G(h, 'handleDoubleClick', function (w) {
              var S = h.props.onDoubleClick;
              if (V(S)) {
                var A = h.getMouseInfo(w);
                S(A, w);
              }
            }),
            G(h, 'handleContextMenu', function (w) {
              var S = h.props.onContextMenu;
              if (V(S)) {
                var A = h.getMouseInfo(w);
                S(A, w);
              }
            }),
            G(h, 'triggerSyncEvent', function (w) {
              h.props.syncId !== void 0 && Za.emit(Ja, h.props.syncId, w, h.eventEmitterSymbol);
            }),
            G(h, 'applySyncEvent', function (w) {
              var S = h.props,
                A = S.layout,
                P = S.syncMethod,
                I = h.state.updateId,
                T = w.dataStartIndex,
                E = w.dataEndIndex;
              if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
                h.setState(
                  _(
                    { dataStartIndex: T, dataEndIndex: E },
                    p({ props: h.props, dataStartIndex: T, dataEndIndex: E, updateId: I }, h.state),
                  ),
                );
              else if (w.activeTooltipIndex !== void 0) {
                var $ = w.chartX,
                  k = w.chartY,
                  C = w.activeTooltipIndex,
                  D = h.state,
                  N = D.offset,
                  B = D.tooltipTicks;
                if (!N) return;
                if (typeof P == 'function') C = P(B, w);
                else if (P === 'value') {
                  C = -1;
                  for (var z = 0; z < B.length; z++)
                    if (B[z].value === w.activeLabel) {
                      C = z;
                      break;
                    }
                }
                var W = _(_({}, N), {}, { x: N.left, y: N.top }),
                  U = Math.min($, W.x + W.width),
                  L = Math.min(k, W.y + W.height),
                  K = B[C] && B[C].value,
                  ee = hu(h.state, h.props.data, C),
                  ue = B[C]
                    ? {
                        x: A === 'horizontal' ? B[C].coordinate : U,
                        y: A === 'horizontal' ? L : B[C].coordinate,
                      }
                    : wv;
                h.setState(
                  _(
                    _({}, w),
                    {},
                    {
                      activeLabel: K,
                      activeCoordinate: ue,
                      activePayload: ee,
                      activeTooltipIndex: C,
                    },
                  ),
                );
              } else h.setState(w);
            }),
            G(h, 'renderCursor', function (w) {
              var S,
                A = h.state,
                P = A.isTooltipActive,
                I = A.activeCoordinate,
                T = A.activePayload,
                E = A.offset,
                $ = A.activeTooltipIndex,
                k = A.tooltipAxisBandSize,
                C = h.getTooltipEventType(),
                D = (S = w.props.active) !== null && S !== void 0 ? S : P,
                N = h.props.layout,
                B = w.key || '_recharts-cursor';
              return j.createElement(H1, {
                key: B,
                activeCoordinate: I,
                activePayload: T,
                activeTooltipIndex: $,
                chartName: r,
                element: w,
                isActive: D,
                layout: N,
                offset: E,
                tooltipAxisBandSize: k,
                tooltipEventType: C,
              });
            }),
            G(h, 'renderPolarAxis', function (w, S, A) {
              var P = Ne(w, 'type.axisType'),
                I = Ne(h.state, ''.concat(P, 'Map')),
                T = w.type.defaultProps,
                E = T !== void 0 ? _(_({}, T), w.props) : w.props,
                $ = I && I[E[''.concat(P, 'Id')]];
              return M.cloneElement(
                w,
                _(
                  _({}, $),
                  {},
                  {
                    className: Y(P, $.className),
                    key: w.key || ''.concat(S, '-').concat(A),
                    ticks: ot($, !0),
                  },
                ),
              );
            }),
            G(h, 'renderPolarGrid', function (w) {
              var S = w.props,
                A = S.radialLines,
                P = S.polarAngles,
                I = S.polarRadius,
                T = h.state,
                E = T.radiusAxisMap,
                $ = T.angleAxisMap,
                k = yt(E),
                C = yt($),
                D = C.cx,
                N = C.cy,
                B = C.innerRadius,
                z = C.outerRadius;
              return M.cloneElement(w, {
                polarAngles: Array.isArray(P)
                  ? P
                  : ot(C, !0).map(function (W) {
                      return W.coordinate;
                    }),
                polarRadius: Array.isArray(I)
                  ? I
                  : ot(k, !0).map(function (W) {
                      return W.coordinate;
                    }),
                cx: D,
                cy: N,
                innerRadius: B,
                outerRadius: z,
                key: w.key || 'polar-grid',
                radialLines: A,
              });
            }),
            G(h, 'renderLegend', function () {
              var w = h.state.formattedGraphicalItems,
                S = h.props,
                A = S.children,
                P = S.width,
                I = S.height,
                T = h.props.margin || {},
                E = P - (T.left || 0) - (T.right || 0),
                $ = pp({
                  children: A,
                  formattedGraphicalItems: w,
                  legendWidth: E,
                  legendContent: c,
                });
              if (!$) return null;
              var k = $.item,
                C = wf($, Y1);
              return M.cloneElement(
                k,
                _(
                  _({}, C),
                  {},
                  {
                    chartWidth: P,
                    chartHeight: I,
                    margin: T,
                    onBBoxUpdate: h.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            G(h, 'renderTooltip', function () {
              var w,
                S = h.props,
                A = S.children,
                P = S.accessibilityLayer,
                I = _e(A, Ve);
              if (!I) return null;
              var T = h.state,
                E = T.isTooltipActive,
                $ = T.activeCoordinate,
                k = T.activePayload,
                C = T.activeLabel,
                D = T.offset,
                N = (w = I.props.active) !== null && w !== void 0 ? w : E;
              return M.cloneElement(I, {
                viewBox: _(_({}, D), {}, { x: D.left, y: D.top }),
                active: N,
                label: C,
                payload: N ? k : [],
                coordinate: $,
                accessibilityLayer: P,
              });
            }),
            G(h, 'renderBrush', function (w) {
              var S = h.props,
                A = S.margin,
                P = S.data,
                I = h.state,
                T = I.offset,
                E = I.dataStartIndex,
                $ = I.dataEndIndex,
                k = I.updateId;
              return M.cloneElement(w, {
                key: w.key || '_recharts-brush',
                onChange: An(h.handleBrushChange, w.props.onChange),
                data: P,
                x: R(w.props.x) ? w.props.x : T.left,
                y: R(w.props.y) ? w.props.y : T.top + T.height + T.brushBottom - (A.bottom || 0),
                width: R(w.props.width) ? w.props.width : T.width,
                startIndex: E,
                endIndex: $,
                updateId: 'brush-'.concat(k),
              });
            }),
            G(h, 'renderReferenceElement', function (w, S, A) {
              if (!w) return null;
              var P = h,
                I = P.clipPathId,
                T = h.state,
                E = T.xAxisMap,
                $ = T.yAxisMap,
                k = T.offset,
                C = w.type.defaultProps || {},
                D = w.props,
                N = D.xAxisId,
                B = N === void 0 ? C.xAxisId : N,
                z = D.yAxisId,
                W = z === void 0 ? C.yAxisId : z;
              return M.cloneElement(w, {
                key: w.key || ''.concat(S, '-').concat(A),
                xAxis: E[B],
                yAxis: $[W],
                viewBox: { x: k.left, y: k.top, width: k.width, height: k.height },
                clipPathId: I,
              });
            }),
            G(h, 'renderActivePoints', function (w) {
              var S = w.item,
                A = w.activePoint,
                P = w.basePoint,
                I = w.childIndex,
                T = w.isRange,
                E = [],
                $ = S.props.key,
                k =
                  S.item.type.defaultProps !== void 0
                    ? _(_({}, S.item.type.defaultProps), S.item.props)
                    : S.item.props,
                C = k.activeDot,
                D = k.dataKey,
                N = _(
                  _(
                    {
                      index: I,
                      dataKey: D,
                      cx: A.x,
                      cy: A.y,
                      r: 4,
                      fill: Lu(S.item),
                      strokeWidth: 2,
                      stroke: '#fff',
                      payload: A.payload,
                      value: A.value,
                    },
                    H(C, !1),
                  ),
                  Dn(C),
                );
              return (
                E.push(g.renderActiveDot(C, N, ''.concat($, '-activePoint-').concat(I))),
                P
                  ? E.push(
                      g.renderActiveDot(
                        C,
                        _(_({}, N), {}, { cx: P.x, cy: P.y }),
                        ''.concat($, '-basePoint-').concat(I),
                      ),
                    )
                  : T && E.push(null),
                E
              );
            }),
            G(h, 'renderGraphicChild', function (w, S, A) {
              var P = h.filterFormatItem(w, S, A);
              if (!P) return null;
              var I = h.getTooltipEventType(),
                T = h.state,
                E = T.isTooltipActive,
                $ = T.tooltipAxis,
                k = T.activeTooltipIndex,
                C = T.activeLabel,
                D = h.props.children,
                N = _e(D, Ve),
                B = P.props,
                z = B.points,
                W = B.isRange,
                U = B.baseLine,
                L =
                  P.item.type.defaultProps !== void 0
                    ? _(_({}, P.item.type.defaultProps), P.item.props)
                    : P.item.props,
                K = L.activeDot,
                ee = L.hide,
                ue = L.activeBar,
                je = L.activeShape,
                xt = !!(!ee && E && N && (K || ue || je)),
                Ae = {};
              I !== 'axis' && N && N.props.trigger === 'click'
                ? (Ae = { onClick: An(h.handleItemMouseEnter, w.props.onClick) })
                : I !== 'axis' &&
                  (Ae = {
                    onMouseLeave: An(h.handleItemMouseLeave, w.props.onMouseLeave),
                    onMouseEnter: An(h.handleItemMouseEnter, w.props.onMouseEnter),
                  });
              var Ue = M.cloneElement(w, _(_({}, P.props), Ae));
              function qt(et) {
                return typeof $.dataKey == 'function' ? $.dataKey(et.payload) : null;
              }
              if (xt)
                if (k >= 0) {
                  var te, ft;
                  if ($.dataKey && !$.allowDuplicatedCategory) {
                    var Je =
                      typeof $.dataKey == 'function' ? qt : 'payload.'.concat($.dataKey.toString());
                    ((te = fo(z, Je, C)), (ft = W && U && fo(U, Je, C)));
                  } else ((te = z?.[k]), (ft = W && U && U[k]));
                  if (je || ue) {
                    var dt = w.props.activeIndex !== void 0 ? w.props.activeIndex : k;
                    return [
                      M.cloneElement(w, _(_(_({}, P.props), Ae), {}, { activeIndex: dt })),
                      null,
                      null,
                    ];
                  }
                  if (!X(te))
                    return [Ue].concat(
                      pr(
                        h.renderActivePoints({
                          item: P,
                          activePoint: te,
                          basePoint: ft,
                          childIndex: k,
                          isRange: W,
                        }),
                      ),
                    );
                } else {
                  var he,
                    St =
                      (he = h.getItemByXY(h.state.activeCoordinate)) !== null && he !== void 0
                        ? he
                        : { graphicalItem: Ue },
                    Qe = St.graphicalItem,
                    pt = Qe.item,
                    vt = pt === void 0 ? w : pt,
                    Ke = Qe.childIndex,
                    we = _(_(_({}, P.props), Ae), {}, { activeIndex: Ke });
                  return [M.cloneElement(vt, we), null, null];
                }
              return W ? [Ue, null, null] : [Ue, null];
            }),
            G(h, 'renderCustomized', function (w, S, A) {
              return M.cloneElement(
                w,
                _(_({ key: 'recharts-customized-'.concat(A) }, h.props), h.state),
              );
            }),
            G(h, 'renderMap', {
              CartesianGrid: { handler: _n, once: !0 },
              ReferenceArea: { handler: h.renderReferenceElement },
              ReferenceLine: { handler: _n },
              ReferenceDot: { handler: h.renderReferenceElement },
              XAxis: { handler: _n },
              YAxis: { handler: _n },
              Brush: { handler: h.renderBrush, once: !0 },
              Bar: { handler: h.renderGraphicChild },
              Line: { handler: h.renderGraphicChild },
              Area: { handler: h.renderGraphicChild },
              Radar: { handler: h.renderGraphicChild },
              RadialBar: { handler: h.renderGraphicChild },
              Scatter: { handler: h.renderGraphicChild },
              Pie: { handler: h.renderGraphicChild },
              Funnel: { handler: h.renderGraphicChild },
              Tooltip: { handler: h.renderCursor, once: !0 },
              PolarGrid: { handler: h.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: h.renderPolarAxis },
              PolarRadiusAxis: { handler: h.renderPolarAxis },
              Customized: { handler: h.renderCustomized },
            }),
            (h.clipPathId = ''.concat(
              (O = b.id) !== null && O !== void 0 ? O : xi('recharts'),
              '-clip',
            )),
            (h.throttleTriggeredAfterMouseMove = id(
              h.triggeredAfterMouseMove,
              (x = b.throttleDelay) !== null && x !== void 0 ? x : 1e3 / 60,
            )),
            (h.state = {}),
            h
          );
        }
        return (
          lj(g, v),
          ij(g, [
            {
              key: 'componentDidMount',
              value: function () {
                var O, x;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: (O = this.props.margin.left) !== null && O !== void 0 ? O : 0,
                      top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: 'displayDefaultTooltip',
              value: function () {
                var O = this.props,
                  x = O.children,
                  h = O.data,
                  w = O.height,
                  S = O.layout,
                  A = _e(x, Ve);
                if (A) {
                  var P = A.props.defaultIndex;
                  if (!(typeof P != 'number' || P < 0 || P > this.state.tooltipTicks.length - 1)) {
                    var I = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value,
                      T = hu(this.state, h, P, I),
                      E = this.state.tooltipTicks[P].coordinate,
                      $ = (this.state.offset.top + w) / 2,
                      k = S === 'horizontal',
                      C = k ? { x: E, y: $ } : { y: E, x: $ },
                      D = this.state.formattedGraphicalItems.find(function (B) {
                        var z = B.item;
                        return z.type.name === 'Scatter';
                      });
                    D &&
                      ((C = _(_({}, C), D.props.points[P].tooltipPosition)),
                      (T = D.props.points[P].tooltipPayload));
                    var N = {
                      activeTooltipIndex: P,
                      isTooltipActive: !0,
                      activeLabel: I,
                      activePayload: T,
                      activeCoordinate: C,
                    };
                    (this.setState(N), this.renderCursor(A), this.accessibilityManager.setIndex(P));
                  }
                }
              },
            },
            {
              key: 'getSnapshotBeforeUpdate',
              value: function (O, x) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== x.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== O.layout &&
                    this.accessibilityManager.setDetails({ layout: this.props.layout }),
                  this.props.margin !== O.margin)
                ) {
                  var h, w;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left: (h = this.props.margin.left) !== null && h !== void 0 ? h : 0,
                      top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (O) {
                vo([_e(O.children, Ve)], [_e(this.props.children, Ve)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                (this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: 'getTooltipEventType',
              value: function () {
                var O = _e(this.props.children, Ve);
                if (O && typeof O.props.shared == 'boolean') {
                  var x = O.props.shared ? 'axis' : 'item';
                  return u.indexOf(x) >= 0 ? x : a;
                }
                return a;
              },
            },
            {
              key: 'getMouseInfo',
              value: function (O) {
                if (!this.container) return null;
                var x = this.container,
                  h = x.getBoundingClientRect(),
                  w = sb(h),
                  S = { chartX: Math.round(O.pageX - w.left), chartY: Math.round(O.pageY - w.top) },
                  A = h.width / x.offsetWidth || 1,
                  P = this.inRange(S.chartX, S.chartY, A);
                if (!P) return null;
                var I = this.state,
                  T = I.xAxisMap,
                  E = I.yAxisMap,
                  $ = this.getTooltipEventType(),
                  k = Sf(this.state, this.props.data, this.props.layout, P);
                if ($ !== 'axis' && T && E) {
                  var C = yt(T).scale,
                    D = yt(E).scale,
                    N = C && C.invert ? C.invert(S.chartX) : null,
                    B = D && D.invert ? D.invert(S.chartY) : null;
                  return _(_({}, S), {}, { xValue: N, yValue: B }, k);
                }
                return k ? _(_({}, S), k) : null;
              },
            },
            {
              key: 'inRange',
              value: function (O, x) {
                var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                  w = this.props.layout,
                  S = O / h,
                  A = x / h;
                if (w === 'horizontal' || w === 'vertical') {
                  var P = this.state.offset,
                    I = S >= P.left && S <= P.left + P.width && A >= P.top && A <= P.top + P.height;
                  return I ? { x: S, y: A } : null;
                }
                var T = this.state,
                  E = T.angleAxisMap,
                  $ = T.radiusAxisMap;
                if (E && $) {
                  var k = yt(E);
                  return Vc({ x: S, y: A }, k);
                }
                return null;
              },
            },
            {
              key: 'parseEventsOfWrapper',
              value: function () {
                var O = this.props.children,
                  x = this.getTooltipEventType(),
                  h = _e(O, Ve),
                  w = {};
                h &&
                  x === 'axis' &&
                  (h.props.trigger === 'click'
                    ? (w = { onClick: this.handleClick })
                    : (w = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var S = Dn(this.props, this.handleOuterEvent);
                return _(_({}, S), w);
              },
            },
            {
              key: 'addListener',
              value: function () {
                Za.on(Ja, this.handleReceiveSyncEvent);
              },
            },
            {
              key: 'removeListener',
              value: function () {
                Za.removeListener(Ja, this.handleReceiveSyncEvent);
              },
            },
            {
              key: 'filterFormatItem',
              value: function (O, x, h) {
                for (var w = this.state.formattedGraphicalItems, S = 0, A = w.length; S < A; S++) {
                  var P = w[S];
                  if (
                    P.item === O ||
                    P.props.key === O.key ||
                    (x === ut(P.item.type) && h === P.childIndex)
                  )
                    return P;
                }
                return null;
              },
            },
            {
              key: 'renderClipPath',
              value: function () {
                var O = this.clipPathId,
                  x = this.state.offset,
                  h = x.left,
                  w = x.top,
                  S = x.height,
                  A = x.width;
                return j.createElement(
                  'defs',
                  null,
                  j.createElement(
                    'clipPath',
                    { id: O },
                    j.createElement('rect', { x: h, y: w, height: S, width: A }),
                  ),
                );
              },
            },
            {
              key: 'getXScales',
              value: function () {
                var O = this.state.xAxisMap;
                return O
                  ? Object.entries(O).reduce(function (x, h) {
                      var w = Of(h, 2),
                        S = w[0],
                        A = w[1];
                      return _(_({}, x), {}, G({}, S, A.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: 'getYScales',
              value: function () {
                var O = this.state.yAxisMap;
                return O
                  ? Object.entries(O).reduce(function (x, h) {
                      var w = Of(h, 2),
                        S = w[0],
                        A = w[1];
                      return _(_({}, x), {}, G({}, S, A.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: 'getXScaleByAxisId',
              value: function (O) {
                var x;
                return (x = this.state.xAxisMap) === null ||
                  x === void 0 ||
                  (x = x[O]) === null ||
                  x === void 0
                  ? void 0
                  : x.scale;
              },
            },
            {
              key: 'getYScaleByAxisId',
              value: function (O) {
                var x;
                return (x = this.state.yAxisMap) === null ||
                  x === void 0 ||
                  (x = x[O]) === null ||
                  x === void 0
                  ? void 0
                  : x.scale;
              },
            },
            {
              key: 'getItemByXY',
              value: function (O) {
                var x = this.state,
                  h = x.formattedGraphicalItems,
                  w = x.activeItem;
                if (h && h.length)
                  for (var S = 0, A = h.length; S < A; S++) {
                    var P = h[S],
                      I = P.props,
                      T = P.item,
                      E =
                        T.type.defaultProps !== void 0
                          ? _(_({}, T.type.defaultProps), T.props)
                          : T.props,
                      $ = ut(T.type);
                    if ($ === 'Bar') {
                      var k = (I.data || []).find(function (B) {
                        return tS(O, B);
                      });
                      if (k) return { graphicalItem: P, payload: k };
                    } else if ($ === 'RadialBar') {
                      var C = (I.data || []).find(function (B) {
                        return Vc(O, B);
                      });
                      if (C) return { graphicalItem: P, payload: C };
                    } else if ($i(P, w) || Ii(P, w) || nn(P, w)) {
                      var D = zS({ graphicalItem: P, activeTooltipItem: w, itemData: E.data }),
                        N = E.activeIndex === void 0 ? D : E.activeIndex;
                      return {
                        graphicalItem: _(_({}, P), {}, { childIndex: N }),
                        payload: nn(P, w) ? E.data[D] : P.props.data[D],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: 'render',
              value: function () {
                var O = this;
                if (!xl(this)) return null;
                var x = this.props,
                  h = x.children,
                  w = x.className,
                  S = x.width,
                  A = x.height,
                  P = x.style,
                  I = x.compact,
                  T = x.title,
                  E = x.desc,
                  $ = wf(x, Z1),
                  k = H($, !1);
                if (I)
                  return j.createElement(
                    nf,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    j.createElement(
                      yo,
                      Vt({}, k, { width: S, height: A, title: T, desc: E }),
                      this.renderClipPath(),
                      Al(h, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var C, D;
                  ((k.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0),
                    (k.role = (D = this.props.role) !== null && D !== void 0 ? D : 'application'),
                    (k.onKeyDown = function (B) {
                      O.accessibilityManager.keyboardEvent(B);
                    }),
                    (k.onFocus = function () {
                      O.accessibilityManager.focus();
                    }));
                }
                var N = this.parseEventsOfWrapper();
                return j.createElement(
                  nf,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  j.createElement(
                    'div',
                    Vt(
                      {
                        className: Y('recharts-wrapper', w),
                        style: _(
                          { position: 'relative', cursor: 'default', width: S, height: A },
                          P,
                        ),
                      },
                      N,
                      {
                        ref: function (z) {
                          O.container = z;
                        },
                      },
                    ),
                    j.createElement(
                      yo,
                      Vt({}, k, { width: S, height: A, title: T, desc: E, style: vj }),
                      this.renderClipPath(),
                      Al(h, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(M.Component);
    (G(m, 'displayName', r),
      G(
        m,
        'defaultProps',
        _(
          {
            layout: 'horizontal',
            stackOffset: 'none',
            barCategoryGap: '10%',
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: 'index',
          },
          s,
        ),
      ),
      G(m, 'getDerivedStateFromProps', function (v, g) {
        var b = v.dataKey,
          O = v.data,
          x = v.children,
          h = v.width,
          w = v.height,
          S = v.layout,
          A = v.stackOffset,
          P = v.margin,
          I = g.dataStartIndex,
          T = g.dataEndIndex;
        if (g.updateId === void 0) {
          var E = Af(v);
          return _(
            _(_({}, E), {}, { updateId: 0 }, p(_(_({ props: v }, E), {}, { updateId: 0 }), g)),
            {},
            {
              prevDataKey: b,
              prevData: O,
              prevWidth: h,
              prevHeight: w,
              prevLayout: S,
              prevStackOffset: A,
              prevMargin: P,
              prevChildren: x,
            },
          );
        }
        if (
          b !== g.prevDataKey ||
          O !== g.prevData ||
          h !== g.prevWidth ||
          w !== g.prevHeight ||
          S !== g.prevLayout ||
          A !== g.prevStackOffset ||
          !Xt(P, g.prevMargin)
        ) {
          var $ = Af(v),
            k = { chartX: g.chartX, chartY: g.chartY, isTooltipActive: g.isTooltipActive },
            C = _(_({}, Sf(g, O, S)), {}, { updateId: g.updateId + 1 }),
            D = _(_(_({}, $), k), C);
          return _(
            _(_({}, D), p(_({ props: v }, D), g)),
            {},
            {
              prevDataKey: b,
              prevData: O,
              prevWidth: h,
              prevHeight: w,
              prevLayout: S,
              prevStackOffset: A,
              prevMargin: P,
              prevChildren: x,
            },
          );
        }
        if (!vo(x, g.prevChildren)) {
          var N,
            B,
            z,
            W,
            U = _e(x, ir),
            L =
              U &&
              (N = (B = U.props) === null || B === void 0 ? void 0 : B.startIndex) !== null &&
              N !== void 0
                ? N
                : I,
            K =
              U &&
              (z = (W = U.props) === null || W === void 0 ? void 0 : W.endIndex) !== null &&
              z !== void 0
                ? z
                : T,
            ee = L !== I || K !== T,
            ue = !X(O),
            je = ue && !ee ? g.updateId : g.updateId + 1;
          return _(
            _(
              { updateId: je },
              p(_(_({ props: v }, g), {}, { updateId: je, dataStartIndex: L, dataEndIndex: K }), g),
            ),
            {},
            { prevChildren: x, dataStartIndex: L, dataEndIndex: K },
          );
        }
        return null;
      }),
      G(m, 'renderActiveDot', function (v, g, b) {
        var O;
        return (
          M.isValidElement(v)
            ? (O = M.cloneElement(v, g))
            : V(v)
              ? (O = v(g))
              : (O = j.createElement(kp, g)),
          j.createElement(me, { className: 'recharts-active-dot', key: b }, O)
        );
      }));
    var y = M.forwardRef(function (g, b) {
      return j.createElement(m, Vt({}, g, { ref: b }));
    });
    return ((y.displayName = m.displayName), y);
  },
  Pj = Aj({
    chartName: 'BarChart',
    GraphicalChild: Lt,
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
      { axisType: 'xAxis', AxisComp: cn },
      { axisType: 'yAxis', AxisComp: sn },
    ],
    formatAxisMap: NA,
  }),
  Sv = function () {
    var e = Nv();
    return M.useMemo(
      function () {
        return [
          e.geekblue,
          e.gold,
          e.green,
          e.cyan,
          e.purple,
          e.red,
          e.volcano,
          e.gray,
          e.geekblue7,
          e.gold7,
          e.green7,
          e.cyan7,
          e.purple7,
          e.red7,
          e.volcano7,
          e.gray7,
        ];
      },
      [e],
    );
  },
  jf,
  Ef,
  Tf;
function eo(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var to = vr(function (t) {
    var e = t.css;
    return {
      container: e(
        jf ||
          (jf = eo([
            `
    display: inline-flex;
    align-items: center;

    border-radius: `,
            `;

    color: `,
            `;
    white-space: nowrap;
  `,
          ])),
        be.borderRadius,
        be.colorTextDescription,
      ),
      hasOnValueChange: e(
        Ef ||
          (Ef = eo([
            `
    transition: all 0.25s `,
            `;

    &:hover {
      color: `,
            `;
      background: `,
            `;
    }
  `,
          ])),
        be.motionEaseInOut,
        be.colorTextSecondary,
        be.colorFillTertiary,
      ),
      itemContent: e(
        Tf ||
          (Tf = eo([
            `
    font-size: 12px;
    color: inherit;
  `,
          ])),
      ),
    };
  }),
  jj = M.memo(function (t) {
    var e = t.label,
      r = t.name,
      n = t.color,
      i = t.onClick,
      a = t.activeLegend,
      o = !!i;
    return F.jsxs(De, {
      className: Tt(to.container, o && to.hasOnValueChange),
      gap: 6,
      horizontal: !0,
      onClick: function (l) {
        (l.stopPropagation(), i?.(r, n));
      },
      paddingBlock: 2,
      paddingInline: 8,
      style: { cursor: o ? 'pointer' : 'default' },
      children: [
        F.jsx(mu, {
          color: n,
          fill: n,
          icon: rd,
          size: 10,
          style: { opacity: a && a !== r ? 0.4 : 1 },
        }),
        F.jsx(Cn.Paragraph, {
          className: to.itemContent,
          ellipsis: !0,
          style: {
            color: a && a === r ? be.colorTextSecondary : void 0,
            margin: 0,
            opacity: a && a !== r ? 0.4 : 1,
          },
          children: e,
        }),
      ],
    });
  });
function Ej(t, e) {
  return Ij(t) || $j(t, e) || _j(t, e) || Tj();
}
function Tj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _j(t, e) {
  if (t) {
    if (typeof t == 'string') return _f(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _f(t, e);
  }
}
function _f(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function $j(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Ij(t) {
  if (Array.isArray(t)) return t;
}
var $f = M.memo(function (t) {
  var e = t.icon,
    r = t.onClick,
    n = t.disabled,
    i = M.useState(!1),
    a = Ej(i, 2),
    o = a[0],
    u = a[1],
    l = M.useRef(null);
  return (
    M.useEffect(
      function () {
        return (
          o
            ? (l.current = setInterval(function () {
                r?.();
              }, 300))
            : clearInterval(l.current),
          function () {
            return clearInterval(l.current);
          }
        );
      },
      [o, r],
    ),
    M.useEffect(
      function () {
        n && (clearInterval(l.current), u(!1));
      },
      [n],
    ),
    F.jsx(Rv, {
      disabled: n,
      icon: F.jsx(mu, { className: 'w-full', icon: e }),
      onClick: function (f) {
        (f.stopPropagation(), r?.());
      },
      onMouseDown: function (f) {
        (f.stopPropagation(), u(!0));
      },
      onMouseUp: function (f) {
        (f.stopPropagation(), u(!1));
      },
      size: 'small',
      style: { height: 24, width: 24 },
    })
  );
});
function pn(t) {
  '@babel/helpers - typeof';
  return (
    (pn =
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
    pn(t)
  );
}
var Cj = [
    'customCategories',
    'categories',
    'colors',
    'className',
    'onClickLegendItem',
    'activeLegend',
    'enableLegendSlider',
  ],
  If,
  Cf,
  Mf;
function kf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Df(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? kf(Object(r), !0).forEach(function (n) {
          Mj(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : kf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Mj(t, e, r) {
  return (
    (e = kj(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function kj(t) {
  var e = Dj(t, 'string');
  return pn(e) == 'symbol' ? e : String(e);
}
function Dj(t, e) {
  if (pn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (pn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Nf(t, e) {
  return Lj(t) || Bj(t, e) || Rj(t, e) || Nj();
}
function Nj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rj(t, e) {
  if (t) {
    if (typeof t == 'string') return Rf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rf(t, e);
  }
}
function Rf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Bj(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Lj(t) {
  if (Array.isArray(t)) return t;
}
function qj(t, e) {
  if (t == null) return {};
  var r = zj(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function zj(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
function ro(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var no = vr(function (t) {
    var e = t.css;
    return {
      container: e(
        If ||
          (If = ro([
            `
    position: relative;
    overflow: hidden;
  `,
          ])),
      ),
      enableLegendSlider: e(
        Cf ||
          (Cf = ro([
            `
    scrollbar-width: none;

    overflow: auto;
    align-items: center;

    padding-right: 48px;
    padding-left: 16px;
  `,
          ])),
      ),
      scrollButtons: e(
        Mf ||
          (Mf = ro([
            `
    top: 0;
    right: 0;
    bottom: 0;
  `,
          ])),
      ),
    };
  }),
  Av = M.forwardRef(function (t, e) {
    var r = Sv(),
      n = t.customCategories,
      i = t.categories,
      a = t.colors,
      o = a === void 0 ? r : a,
      u = t.className,
      l = t.onClickLegendItem,
      c = t.activeLegend,
      f = t.enableLegendSlider,
      s = f === void 0 ? !1 : f,
      d = qj(t, Cj),
      p = M.useRef(null),
      m = M.useRef(null),
      y = M.useState(null),
      v = Nf(y, 2),
      g = v[0],
      b = v[1],
      O = M.useState(null),
      x = Nf(O, 2),
      h = x[0],
      w = x[1],
      S = M.useRef(null),
      A = M.useCallback(
        function () {
          var E = p?.current;
          if (E) {
            var $ = E.scrollLeft > 0,
              k = E.scrollWidth - E.clientWidth > E.scrollLeft;
            b({ left: $, right: k });
          }
        },
        [b],
      ),
      P = M.useCallback(
        function (E) {
          var $,
            k,
            C = p?.current,
            D = m?.current,
            N = ($ = C?.clientWidth) !== null && $ !== void 0 ? $ : 0,
            B = (k = D?.clientWidth) !== null && k !== void 0 ? k : 0;
          C &&
            s &&
            (C.scrollTo({
              behavior: 'smooth',
              left: E === 'left' ? C.scrollLeft - N + B : C.scrollLeft + N - B,
            }),
            setTimeout(function () {
              A();
            }, 400));
        },
        [s, A],
      );
    M.useEffect(
      function () {
        var E = function (k) {
          k === 'ArrowLeft' ? P('left') : k === 'ArrowRight' && P('right');
        };
        return (
          h
            ? (E(h),
              (S.current = setInterval(function () {
                E(h);
              }, 300)))
            : clearInterval(S.current),
          function () {
            return clearInterval(S.current);
          }
        );
      },
      [h, P],
    );
    var I = function ($) {
        ($.stopPropagation(),
          ($.key === 'ArrowLeft' || $.key === 'ArrowRight') && ($.preventDefault(), w($.key)));
      },
      T = function ($) {
        ($.stopPropagation(), w(null));
      };
    return (
      M.useEffect(
        function () {
          var E = p?.current;
          return (
            s && (A(), E?.addEventListener('keydown', I), E?.addEventListener('keyup', T)),
            function () {
              (E?.removeEventListener('keydown', I), E?.removeEventListener('keyup', T));
            }
          );
        },
        [A, s],
      ),
      F.jsxs(
        De,
        Df(
          Df({ className: Tt(no.container, u), gap: 8, horizontal: !0, ref: e }, d),
          {},
          {
            children: [
              F.jsx(De, {
                className: Tt(s && (g?.right || g?.left) && no.enableLegendSlider),
                flex: 1,
                height: '100%',
                horizontal: !0,
                ref: p,
                style: { overflow: 'hidden' },
                tabIndex: 0,
                wrap: s ? 'nowrap' : 'wrap',
                children: i.map(function (E, $) {
                  return F.jsx(
                    jj,
                    {
                      activeLegend: c,
                      color: o[$ % o.length],
                      label: n?.[E] || E,
                      name: E,
                      onClick: l,
                    },
                    'item-'.concat($),
                  );
                }),
              }),
              s && ((g != null && g.right) || (g != null && g.left))
                ? F.jsxs(De, {
                    align: 'center',
                    className: no.scrollButtons,
                    flex: 'none',
                    gap: 4,
                    height: '100%',
                    horizontal: !0,
                    justify: 'center',
                    ref: m,
                    children: [
                      F.jsx($f, {
                        disabled: !(g != null && g.left),
                        icon: Wv,
                        onClick: function () {
                          (w(null), P('left'));
                        },
                      }),
                      F.jsx($f, {
                        disabled: !(g != null && g.right),
                        icon: Fv,
                        onClick: function () {
                          (w(null), P('right'));
                        },
                      }),
                    ],
                  })
                : null,
            ],
          },
        ),
      )
    );
  });
Av.displayName = 'Legend';
var yu = String,
  VE = function (e) {
    return e.reduce(function (r, n) {
      return r + n;
    }, 0);
  },
  Pv = typeof document > 'u' || typeof window > 'u',
  Wj = function (e) {
    M.useEffect(
      function () {
        if (!Pv) {
          var r = function () {
            e();
          };
          return (
            r(),
            window.addEventListener('resize', r),
            function () {
              return window.removeEventListener('resize', r);
            }
          );
        }
      },
      [e],
    );
  },
  Fj = function (e) {
    return e ? Number(e) + 20 : 60;
  },
  Gj = function (e, r, n, i, a, o, u) {
    var l = e.payload,
      c = M.useRef(null);
    Wj(function () {
      var s;
      n(Fj((s = c.current) === null || s === void 0 ? void 0 : s.clientHeight));
    });
    var f = l.filter(function (s) {
      return s.type !== 'none';
    });
    return F.jsx(De, {
      align: 'center',
      horizontal: !0,
      justify: 'flex-end',
      ref: c,
      children: F.jsx(Av, {
        activeLegend: i,
        categories: f.map(function (s) {
          return s.value;
        }),
        colors: f.map(function (s) {
          return r.get(s.value);
        }),
        customCategories: u,
        enableLegendSlider: o,
        onClickLegendItem: a,
      }),
    });
  };
function vn(t) {
  '@babel/helpers - typeof';
  return (
    (vn =
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
    vn(t)
  );
}
var Uj = ['children'],
  Bf;
function Lf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Lf(Object(r), !0).forEach(function (n) {
          Kj(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Lf(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Kj(t, e, r) {
  return (
    (e = Vj(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Vj(t) {
  var e = Xj(t, 'string');
  return vn(e) == 'symbol' ? e : String(e);
}
function Xj(t, e) {
  if (vn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (vn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Hj(t, e) {
  if (t == null) return {};
  var r = Yj(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function Yj(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
function Zj(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var Jj = vr(function (t) {
    var e = t.css,
      r = t.cssVar;
    return {
      container: e(
        Bf ||
          (Bf = Zj([
            `
    overflow: hidden;

    border: 1px solid `,
            `;
    border-radius: `,
            `;

    background: `,
            `;
    box-shadow: `,
            `;
  `,
          ])),
        r.colorBorderSecondary,
        r.borderRadiusLG,
        r.colorBgElevated,
        r.boxShadow,
      ),
    };
  }),
  Qj = M.memo(function (t) {
    var e = t.children,
      r = Hj(t, Uj);
    return F.jsx(De, qf(qf({ className: Jj.container }, r), {}, { children: e }));
  }),
  zf,
  Wf;
function Ff(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var Gf = vr(function (t) {
    var e = t.css,
      r = t.cssVar;
    return {
      number: e(
        zf ||
          (zf = Ff([
            `
    font-weight: 500;
  `,
          ])),
      ),
      title: e(
        Wf ||
          (Wf = Ff([
            `
    color: `,
            `;
  `,
          ])),
        r.colorTextSecondary,
      ),
    };
  }),
  eE = M.memo(function (t) {
    var e = t.value,
      r = t.name,
      n = t.color;
    return F.jsxs(De, {
      align: 'center',
      gap: 32,
      horizontal: !0,
      justify: 'space-between',
      children: [
        F.jsxs(De, {
          align: 'center',
          gap: 8,
          horizontal: !0,
          children: [
            F.jsx(mu, { color: n, fill: n, icon: rd, size: 10 }),
            F.jsx(Cn.Paragraph, {
              className: Gf.title,
              ellipsis: !0,
              style: { margin: 0 },
              children: r,
            }),
          ],
        }),
        F.jsx(Cn.Paragraph, { className: Gf.number, style: { margin: 0 }, children: e }),
      ],
    });
  }),
  Uf;
function tE(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var rE = vr(function (t) {
    var e = t.css,
      r = t.cssVar;
    return {
      header: e(
        Uf ||
          (Uf = tE([
            `
    border-bottom: 1px solid `,
            `;
    font-weight: 500;
  `,
          ])),
        r.colorBorderSecondary,
      ),
    };
  }),
  nE = function (e) {
    var r = e.active,
      n = e.payload,
      i = e.label,
      a = e.categoryColors,
      o = e.valueFormatter,
      u = e.customCategories,
      l = e.footer;
    if (r && n) {
      var c = n.filter(function (f) {
        return f.type !== 'none';
      });
      return F.jsxs(Qj, {
        children: [
          F.jsx(De, {
            className: Tt(rE.header),
            paddingBlock: 8,
            paddingInline: 16,
            children: F.jsx(Cn.Paragraph, { ellipsis: !0, style: { margin: 0 }, children: i }),
          }),
          F.jsx(De, {
            gap: 4,
            paddingBlock: 8,
            paddingInline: 16,
            style: { flexDirection: 'column-reverse', marginTop: 4 },
            children: c.map(function (f, s) {
              var d,
                p = f.value,
                m = f.name;
              return F.jsx(
                eE,
                {
                  color: (d = a.get(m)) !== null && d !== void 0 ? d : be.colorPrimary,
                  name: u?.[m] || m,
                  value: o(p),
                },
                'id-'.concat(s),
              );
            }),
          }),
          l,
        ],
      });
    }
    return null;
  },
  Kf = M.memo(function (t) {
    var e = t.yAxisLabel,
      r = t.x,
      n = t.y,
      i = t.payload,
      a = t.align,
      o = t.formatter,
      u = e ? 24 : 0;
    return F.jsx('g', {
      transform: 'translate('.concat(a === 'left' ? u : r + u, ',').concat(n, ')'),
      children: F.jsx('text', {
        dy: 4,
        fill: be.colorTextDescription,
        fontSize: 12,
        textAnchor: a === 'left' ? 'start' : 'end',
        x: 0,
        y: 0,
        children: o(i.value),
      }),
    });
  }),
  iE = M.memo(function (t) {
    var e = t.noDataText,
      r =
        e === void 0
          ? { desc: "There's no data available for your selection.", title: 'No Data' }
          : e,
      n = t.className,
      i = M.isValidElement(r);
    return F.jsx(Bv, {
      height: '100%',
      width: '100%',
      children: F.jsx(il, {
        className: n,
        description: i
          ? r
          : F.jsxs(De, {
              padding: 8,
              children: [
                F.jsx('div', {
                  style: { color: be.colorText, fontSize: 14, fontWeight: 'bold' },
                  children: r?.title,
                }),
                F.jsx('div', {
                  style: { color: be.colorTextDescription, fontSize: 12 },
                  children: r?.desc,
                }),
              ],
            }),
        image: il.PRESENTED_IMAGE_SIMPLE,
      }),
    });
  });
function hi(t) {
  '@babel/helpers - typeof';
  return (
    (hi =
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
    hi(t)
  );
}
function aE(t, e) {
  return lE(t) || uE(t, e) || jv(t, e) || oE();
}
function oE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uE(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function lE(t) {
  if (Array.isArray(t)) return t;
}
function cE(t, e) {
  var r = (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (!r) {
    if (Array.isArray(t) || (r = jv(t)) || e) {
      r && (t = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0,
    o = !1,
    u;
  return {
    s: function () {
      r = r.call(t);
    },
    n: function () {
      var c = r.next();
      return ((a = c.done), c);
    },
    e: function (c) {
      ((o = !0), (u = c));
    },
    f: function () {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    },
  };
}
function jv(t, e) {
  if (t) {
    if (typeof t == 'string') return Vf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vf(t, e);
  }
}
function Vf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var sE = function (e, r) {
    var n = new Map(),
      i = cE(e.entries()),
      a;
    try {
      for (i.s(); !(a = i.n()).done; ) {
        var o = aE(a.value, 2),
          u = o[0],
          l = o[1];
        n.set(l, r[u % r.length]);
      }
    } catch (c) {
      i.e(c);
    } finally {
      i.f();
    }
    return n;
  },
  fE = function (e, r, n) {
    return [e ? 'auto' : (r ?? 0), n ?? 'auto'];
  },
  dE = function t(e, r) {
    if (e === r) return !0;
    if (hi(e) !== 'object' || hi(r) !== 'object' || e === null || r === null) return !1;
    var n = Object.keys(e),
      i = Object.keys(r);
    if (n.length !== i.length) return !1;
    for (var a = 0, o = n; a < o.length; a++) {
      var u = o[a];
      if (!i.includes(u) || !t(e[u], r[u])) return !1;
    }
    return !0;
  };
function $n(t, e) {
  var r = (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (!r) {
    if (Array.isArray(t) || (r = pE(t)) || e) {
      r && (t = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0,
    o = !1,
    u;
  return {
    s: function () {
      r = r.call(t);
    },
    n: function () {
      var c = r.next();
      return ((a = c.done), c);
    },
    e: function (c) {
      ((o = !0), (u = c));
    },
    f: function () {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    },
  };
}
function pE(t, e) {
  if (t) {
    if (typeof t == 'string') return Xf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xf(t, e);
  }
}
function Xf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var vE = function (e) {
    if (Pv) return 0;
    var r = document.createElement('span');
    ((r.style.fontSize = '12px'),
      (r.style.position = 'absolute'),
      (r.style.visibility = 'hidden'),
      (r.style.whiteSpace = 'nowrap'),
      (r.textContent = e),
      document.body.append(r));
    var n = r.getBoundingClientRect().width;
    return (r.remove(), n);
  },
  hE = function (e) {
    var r = e.data,
      n = e.valueFormatter,
      i = n === void 0 ? yu : n,
      a = e.index,
      o = e.layout,
      u = o === void 0 ? 'horizontal' : o,
      l = e.margin,
      c = l === void 0 ? 24 : l,
      f = e.isScatterChart,
      s = 0,
      d = '';
    if (f) {
      var p = $n(r),
        m;
      try {
        for (p.s(); !(m = p.n()).done; ) {
          var y = m.value,
            v = i(y[a]);
          v.length > s && ((s = v.length), (d = v));
        }
      } catch ($) {
        p.e($);
      } finally {
        p.f();
      }
    } else if (u === 'vertical') {
      var g = $n(r),
        b;
      try {
        for (g.s(); !(b = g.n()).done; ) {
          var O = b.value;
          O[a].length > s && ((s = O[a].length), (d = O[a]));
        }
      } catch ($) {
        g.e($);
      } finally {
        g.f();
      }
    } else {
      var x = $n(r),
        h;
      try {
        for (x.s(); !(h = x.n()).done; ) {
          var w = h.value,
            S = Object.keys(w).filter(function ($) {
              return $ !== a;
            }),
            A = $n(S),
            P;
          try {
            for (A.s(); !(P = A.n()).done; ) {
              var I = P.value,
                T = w[I];
              if (T !== void 0) {
                var E = i(T);
                E.length > s && ((s = E.length), (d = E));
              }
            }
          } catch ($) {
            A.e($);
          } finally {
            A.f();
          }
        }
      } catch ($) {
        x.e($);
      } finally {
        x.f();
      }
    }
    return vE(d) + c;
  },
  Hf,
  Yf,
  Zf,
  Jf;
function In(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var Le = vr(function (t) {
  var e = t.css,
    r = t.cssVar;
  return {
    emphasis: e(
      Hf ||
        (Hf = In([
          `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
        ])),
    ),
    gridLines: e(
      Yf ||
        (Yf = In([
          `
    stroke: `,
          `;
    stroke-width: 1;
  `,
        ])),
      r.colorBorderSecondary,
    ),
    label: e(
      Zf ||
        (Zf = In([
          `
    font-size: 12px;
    line-height: 16px;
    fill: `,
          `;
  `,
        ])),
      r.colorTextDescription,
    ),
    strongLabel: e(
      Jf ||
        (Jf = In([
          `
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    fill: `,
          `;
  `,
        ])),
      r.colorTextSecondary,
    ),
  };
});
function hn(t) {
  '@babel/helpers - typeof';
  return (
    (hn =
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
    hn(t)
  );
}
var Qf,
  yE = [
    'data',
    'categories',
    'customCategories',
    'index',
    'yAxisAlign',
    'colors',
    'valueFormatter',
    'xAxisLabelFormatter',
    'layout',
    'stack',
    'startEndOnly',
    'animationDuration',
    'showAnimation',
    'showXAxis',
    'showYAxis',
    'yAxisWidth',
    'intervalType',
    'showTooltip',
    'showLegend',
    'showGridLines',
    'autoMinValue',
    'minValue',
    'maxValue',
    'allowDecimals',
    'noDataText',
    'onValueChange',
    'enableLegendSlider',
    'customTooltip',
    'rotateLabelX',
    'barCategoryGap',
    'tickGap',
    'loading',
    'xAxisLabel',
    'yAxisLabel',
    'className',
    'width',
    'height',
    'style',
  ];
function mE(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
function ed(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Pe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ed(Object(r), !0).forEach(function (n) {
          gE(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function gE(t, e, r) {
  return (
    (e = bE(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function bE(t) {
  var e = OE(t, 'string');
  return hn(e) == 'symbol' ? e : String(e);
}
function OE(t, e) {
  if (hn(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (hn(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function io(t, e) {
  return AE(t) || SE(t, e) || xE(t, e) || wE();
}
function wE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xE(t, e) {
  if (t) {
    if (typeof t == 'string') return td(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return td(t, e);
  }
}
function td(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function SE(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      c = !1;
    try {
      if (((a = (r = r.call(t)).next), e !== 0))
        for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== e); l = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function AE(t) {
  if (Array.isArray(t)) return t;
}
function PE(t, e) {
  if (t == null) return {};
  var r = jE(t, e),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
  }
  return r;
}
function jE(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var EE = M.forwardRef(function (t, e) {
  var r = Sv(),
    n = t.data,
    i = n === void 0 ? [] : n,
    a = t.categories,
    o = a === void 0 ? [] : a,
    u = t.customCategories,
    l = t.index,
    c = t.yAxisAlign,
    f = c === void 0 ? 'left' : c,
    s = t.colors,
    d = s === void 0 ? r : s,
    p = t.valueFormatter,
    m = p === void 0 ? yu : p,
    y = t.xAxisLabelFormatter,
    v = y === void 0 ? yu : y,
    g = t.layout,
    b = g === void 0 ? 'horizontal' : g,
    O = t.stack,
    x = O === void 0 ? !1 : O,
    h = t.startEndOnly,
    w = h === void 0 ? !1 : h,
    S = t.animationDuration,
    A = S === void 0 ? 900 : S,
    P = t.showAnimation,
    I = P === void 0 ? !1 : P,
    T = t.showXAxis,
    E = T === void 0 ? !0 : T,
    $ = t.showYAxis,
    k = $ === void 0 ? !0 : $,
    C = t.yAxisWidth,
    D = t.intervalType,
    N = D === void 0 ? 'equidistantPreserveStart' : D,
    B = t.showTooltip,
    z = B === void 0 ? !0 : B,
    W = t.showLegend,
    U = W === void 0 ? !0 : W,
    L = t.showGridLines,
    K = L === void 0 ? !0 : L,
    ee = t.autoMinValue,
    ue = ee === void 0 ? !1 : ee,
    je = t.minValue,
    xt = t.maxValue,
    Ae = t.allowDecimals,
    Ue = Ae === void 0 ? !0 : Ae,
    qt = t.noDataText,
    te = t.onValueChange,
    ft = t.enableLegendSlider,
    Je = ft === void 0 ? !1 : ft,
    dt = t.customTooltip,
    he = t.rotateLabelX,
    St = t.barCategoryGap,
    Qe = t.tickGap,
    pt = Qe === void 0 ? 5 : Qe,
    vt = t.loading,
    Ke = t.xAxisLabel,
    we = t.yAxisLabel,
    et = t.className,
    zt = t.width,
    br = zt === void 0 ? '100%' : zt,
    Or = t.height,
    Yu = Or === void 0 ? 280 : Or,
    Ev = t.style,
    Tv = PE(t, yE),
    _v = M.useState(),
    Zu = io(_v, 2),
    Bi = Zu[0],
    gn = Zu[1],
    $v = M.useState(),
    Ju = io($v, 2),
    Li = Ju[0],
    wr = Ju[1],
    Iv = M.useState(60),
    Qu = io(Iv, 2),
    Cv = Qu[0],
    Mv = Qu[1],
    el = M.useMemo(
      function () {
        return C || hE({ data: i, index: l, layout: b, valueFormatter: m });
      },
      [C, b, i, m, l],
    );
  if (vt || !i) return F.jsx(qv.Block, { active: !0, height: Yu, width: br });
  var tl = dt,
    rl = !E && !k ? 0 : 20,
    bn = sE(o, d),
    qi = !!te,
    kv = function (re, xr, Ie) {
      if ((Ie.stopPropagation(), !!te))
        if (dE(Bi, Pe(Pe({}, re.payload), {}, { value: re.value })))
          (wr(void 0), gn(void 0), te?.(null));
        else {
          var tt, rt;
          (wr(
            (tt = re.tooltipPayload) === null ||
              tt === void 0 ||
              (tt = tt[0]) === null ||
              tt === void 0
              ? void 0
              : tt.dataKey,
          ),
            gn(Pe(Pe({}, re.payload), {}, { value: re.value })),
            te?.(
              Pe(
                {
                  categoryClicked:
                    (rt = re.tooltipPayload) === null ||
                    rt === void 0 ||
                    (rt = rt[0]) === null ||
                    rt === void 0
                      ? void 0
                      : rt.dataKey,
                  eventType: 'bar',
                },
                re.payload,
              ),
            ));
        }
    },
    Dv = function (re) {
      qi &&
        (re === Li && !Bi
          ? (wr(void 0), te?.(null))
          : (wr(re), te?.({ categoryClicked: re, eventType: 'category' })),
        gn(void 0));
    },
    nl = fE(ue, je, xt);
  return F.jsx(
    De,
    Pe(
      Pe(
        { className: et, height: Yu, ref: e, style: Pe({ position: 'relative' }, Ev), width: br },
        Tv,
      ),
      {},
      {
        children: F.jsx(nb, {
          children:
            i != null && i.length
              ? F.jsxs(Pj, {
                  barCategoryGap: St,
                  data: i,
                  layout: b === 'vertical' ? 'vertical' : 'horizontal',
                  margin: {
                    bottom: Ke ? 30 : void 0,
                    left: we ? 20 : void 0,
                    right: we ? 5 : void 0,
                    top: 5,
                  },
                  onClick:
                    qi && (Li || Bi)
                      ? function () {
                          (gn(void 0), wr(void 0), te?.(null));
                        }
                      : void 0,
                  stackOffset: x ? 'sign' : 'none',
                  children: [
                    K
                      ? F.jsx(cv, {
                          className: Le.gridLines,
                          horizontal: b !== 'vertical',
                          vertical: b === 'vertical',
                        })
                      : void 0,
                    b === 'vertical'
                      ? F.jsx(cn, {
                          allowDecimals: Ue,
                          angle: he?.angle,
                          axisLine: !1,
                          className: Le.label,
                          domain: nl,
                          dy: he?.verticalShift,
                          fill: '',
                          hide: !E,
                          minTickGap: pt,
                          stroke: '',
                          tick: { transform: 'translate(-3, 0)' },
                          tickFormatter: m,
                          tickLine: !1,
                          type: 'number',
                          children:
                            Ke &&
                            F.jsx(se, {
                              className: Tt(Le.strongLabel, Le.emphasis),
                              offset: -20,
                              position: 'insideBottom',
                              style: {
                                fill: be.colorTextSecondary,
                                fontWeight: 500,
                                textAnchor: 'middle',
                              },
                              children: Ke,
                            }),
                        })
                      : F.jsx(cn, {
                          angle: he?.angle,
                          axisLine: !1,
                          className: Le.label,
                          dataKey: l,
                          dy: he?.verticalShift,
                          fill: '',
                          hide: !E,
                          interval: w ? 'preserveStartEnd' : N,
                          minTickGap: pt,
                          padding: { left: rl, right: rl },
                          stroke: '',
                          tick: { transform: 'translate(0, 6)' },
                          tickFormatter: v,
                          tickLine: !1,
                          ticks: w ? [i[0][l], i.at(-1)[l]] : void 0,
                          children:
                            Ke &&
                            F.jsx(se, {
                              className: Tt(Le.strongLabel, Le.emphasis),
                              offset: -20,
                              position: 'insideBottom',
                              style: {
                                fill: be.colorTextSecondary,
                                fontWeight: 500,
                                textAnchor: 'middle',
                              },
                              children: Ke,
                            }),
                        }),
                    b === 'vertical'
                      ? F.jsx(sn, {
                          axisLine: !1,
                          className: Le.label,
                          dataKey: l,
                          fill: '',
                          hide: !k,
                          interval: 'preserveStartEnd',
                          stroke: '',
                          tick: function (re) {
                            return F.jsx(
                              Kf,
                              Pe(
                                Pe({}, re),
                                {},
                                {
                                  align: f,
                                  formatter: v,
                                  textAnchor: f === 'left' ? 'start' : 'end',
                                  yAxisLabel: !!we,
                                },
                              ),
                            );
                          },
                          tickFormatter: v,
                          tickLine: !1,
                          ticks: w ? [i[0][l], i.at(-1)[l]] : void 0,
                          type: 'category',
                          width: el,
                          children:
                            we &&
                            F.jsx(se, {
                              angle: -90,
                              className: Le.emphasis,
                              offset: -15,
                              position: 'insideLeft',
                              style: {
                                fill: be.colorTextSecondary,
                                fontWeight: 500,
                                textAnchor: 'middle',
                              },
                              children: we,
                            }),
                        })
                      : F.jsx(sn, {
                          allowDecimals: Ue,
                          axisLine: !1,
                          className: Le.label,
                          domain: nl,
                          fill: '',
                          hide: !k,
                          stroke: '',
                          tick: function (re) {
                            return F.jsx(
                              Kf,
                              Pe(
                                Pe({}, re),
                                {},
                                {
                                  align: f,
                                  formatter: m,
                                  textAnchor: f === 'left' ? 'start' : 'end',
                                  yAxisLabel: !!we,
                                },
                              ),
                            );
                          },
                          tickFormatter: m,
                          tickLine: !1,
                          type: 'number',
                          width: el,
                          children:
                            we &&
                            F.jsx(se, {
                              angle: -90,
                              className: Le.emphasis,
                              offset: -15,
                              position: 'insideLeft',
                              style: {
                                fill: be.colorTextSecondary,
                                fontWeight: 500,
                                textAnchor: 'middle',
                              },
                              children: we,
                            }),
                        }),
                    F.jsx(Ve, {
                      content: z
                        ? function (Ee) {
                            var re,
                              xr = Ee.active,
                              Ie = Ee.payload,
                              tt = Ee.label;
                            return tl
                              ? F.jsx(tl, {
                                  active: xr,
                                  customCategories: u,
                                  label: tt,
                                  payload:
                                    (re = x ? Ie?.reverse() : Ie) === null || re === void 0
                                      ? void 0
                                      : re.map(function (rt) {
                                          var zi;
                                          return Pe(
                                            Pe({}, rt),
                                            {},
                                            {
                                              color:
                                                (zi = bn.get(rt.dataKey)) !== null && zi !== void 0
                                                  ? zi
                                                  : be.colorPrimary,
                                            },
                                          );
                                        }),
                                  valueFormatter: m,
                                })
                              : F.jsx(nE, {
                                  active: xr,
                                  categoryColors: bn,
                                  customCategories: u,
                                  label: tt,
                                  payload: x ? Ie?.reverse() : Ie,
                                  valueFormatter: m,
                                });
                          }
                        : void 0,
                      cursor: { fill: be.colorFillTertiary },
                      isAnimationActive: !1,
                      position: { y: 0 },
                      wrapperStyle: { outline: 'none' },
                    }),
                    U
                      ? F.jsx(_t, {
                          content: function (re) {
                            var xr = re.payload;
                            return Gj(
                              { payload: xr },
                              bn,
                              Mv,
                              Li,
                              qi
                                ? function (Ie) {
                                    return Dv(Ie);
                                  }
                                : void 0,
                              Je,
                              u,
                            );
                          },
                          height: Cv,
                          verticalAlign: 'top',
                        })
                      : void 0,
                    o.map(function (Ee) {
                      var re;
                      return F.jsx(
                        Lt,
                        {
                          animationDuration: A,
                          className: Tt(
                            Lv(
                              Qf ||
                                (Qf = mE([
                                  `
                    fill: `,
                                  `;
                  `,
                                ])),
                              (re = bn.get(Ee)) !== null && re !== void 0 ? re : be.colorPrimary,
                            ),
                          ),
                          dataKey: Ee,
                          fill: '',
                          isAnimationActive: I,
                          name: Ee,
                          onClick: kv,
                          stackId: x ? 'a' : void 0,
                          style: { cursor: te ? 'pointer' : void 0 },
                          type: 'linear',
                        },
                        Ee,
                      );
                    }),
                  ],
                })
              : F.jsx(iE, { noDataText: qt }),
        }),
      },
    ),
  );
});
EE.displayName = 'BarChart';
export {
  gt as A,
  eE as B,
  is as C,
  kp as D,
  VE as E,
  jp as F,
  mn as G,
  Sv as H,
  Pv as I,
  Ve as J,
  yu as K,
  me as L,
  EE as M,
  iE as N,
  nb as R,
  kS as S,
  Wn as T,
  Db as a,
  Bb as b,
  Nn as c,
  se as d,
  X as e,
  H as f,
  KE as g,
  Ze as h,
  V as i,
  Ne as j,
  Wt as k,
  Nu as l,
  R as m,
  It as n,
  ze as o,
  Oe as p,
  Fe as q,
  Zd as r,
  Kd as s,
  hO as t,
  xi as u,
  We as v,
  lt as w,
  Aj as x,
  UE as y,
  Qj as z,
};
