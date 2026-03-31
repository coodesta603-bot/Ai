import { f as He, A as W, F as te, ai as it, m as ot, j as re, g as at } from './index-C8UyLGsD.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as lt } from './Dropdown-DdDP6pcJ.js';
import { j as g, z as ut } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as ct } from './index-BfwjtmVb.js';
import { k as st } from './Popover-Cg4CTqoX.js';
import { dg as ft, dh as pt, di as yt } from '../vendor/vendor-icons-BHMUH78i.js';
import { u as gt } from './ChatInputActionBar-D4T5Vfpz.js';
import {
  H as dt,
  n as mt,
  L as ne,
  r as vt,
  o as de,
  i as ce,
  h as z,
  M as me,
  K as Me,
  l as q,
  p as ht,
  I as De,
  R as bt,
  a as Ot,
  b as wt,
  c as Ct,
} from './index-CMcqKxKW.js';
import { S as _t, a as Pt, R as St } from './ReactCodemirrorNode-BfJ0IybP.js';
import {
  U as ze,
  M as ie,
  ao as At,
  X as Be,
  ap as jt,
  O as I,
  Q as R,
  aq as ve,
  ar as k,
  $ as w,
  as as Tt,
  at as U,
  au as he,
  av as kt,
  aw as $t,
  ax as It,
  ay as Rt,
  az as se,
  aA as Et,
  S as Ke,
  aB as Ge,
  aC as Ue,
  J as We,
  aD as xt,
  a7 as Nt,
} from './index-Br6hqyew.js';
import {
  $ as Lt,
  A as Ht,
  a as V,
  b as P,
  R as Mt,
  c as S,
  d as be,
  e as Dt,
} from './ReferTopicNode-DHjQF-BV.js';
var Oe, we, Ce;
function Q(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var fe = He(function (e) {
  var t = e.css;
  return {
    collapsedContainer: t(
      Oe ||
        (Oe = Q([
          `
    overflow: hidden;
    display: flex;
    align-items: center;
  `,
        ])),
    ),
    container: t(
      we ||
        (we = Q([
          `
    position: relative;
    overflow: hidden;
    width: 100%;
  `,
        ])),
    ),
    divider: t(
      Ce ||
        (Ce = Q([
          `
    height: 20px;
    margin-inline: 4px;
  `,
        ])),
    ),
  };
});
function E(e) {
  '@babel/helpers - typeof';
  return (
    (E =
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
    E(e)
  );
}
var zt = [
  'wrapper',
  'icon',
  'key',
  'label',
  'onClick',
  'danger',
  'loading',
  'active',
  'tooltipProps',
];
function _e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _e(Object(r), !0).forEach(function (n) {
          Kt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _e(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Kt(e, t, r) {
  return (
    (t = Gt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Gt(e) {
  var t = Ut(e, 'string');
  return E(t) == 'symbol' ? t : String(t);
}
function Ut(e, t) {
  if (E(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (E(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Wt(e, t) {
  if (e == null) return {};
  var r = Vt(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      ((n = o[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function Vt(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++) ((i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
var Pe = function (t) {
    var r = t.item,
      n = t.onActionClick,
      i = t.disabled;
    if (r.type === 'divider') return g.jsx(ct, { className: fe.divider, orientation: 'vertical' });
    var o = r,
      c = o.wrapper,
      l = o.icon,
      a = o.key,
      u = o.label,
      s = o.onClick,
      f = o.danger,
      p = o.loading,
      y = o.active,
      m = o.tooltipProps,
      h = Wt(o, zt);
    if (r.children && d.isValidElement(r.children)) return c ? c(r.children) : r.children;
    var b = g.jsx(W, {
      active: y,
      danger: f,
      disabled: i || p || h?.disabled,
      icon: l,
      loading: p,
      onClick: function (C) {
        (n?.({ domEvent: C, key: String(a), keyPath: [String(a)] }), s?.(C));
      },
      size: { blockSize: 36, size: 20 },
      title: u,
      tooltipProps: Bt({ placement: 'top' }, m),
    });
    return c ? c(b) : b;
  },
  Ve = function (t) {
    var r = t.children,
      n = t.groupCollapse,
      i = n === void 0 ? !1 : n,
      o = t.onGroupCollapseChange,
      c = t.gap,
      l = t.mode;
    return l === 'popup'
      ? g.jsx(st, {
          arrow: !1,
          content: g.jsx(te, { align: 'center', gap: c, horizontal: !0, children: r }),
          styles: { content: { padding: 4 } },
          children: g.jsx(W, { icon: ft, size: { blockSize: 36, size: 20 } }),
        })
      : g.jsxs(te, {
          align: 'center',
          flex: 'none',
          gap: c,
          horizontal: !0,
          children: [
            g.jsx(ut.div, {
              animate: i ? 'closed' : 'open',
              className: fe.collapsedContainer,
              initial: i ? 'closed' : 'open',
              style: { gap: c },
              transition: { duration: 0.2 },
              variants: { closed: { opacity: 0, width: 0 }, open: { opacity: 1, width: 'auto' } },
              children: r,
            }),
            g.jsx(W, {
              icon: i ? pt : yt,
              onClick: function () {
                return o?.(!i);
              },
              size: { blockSize: 36, size: 20 },
            }),
          ],
        });
  };
Ve.displayName = 'ChatInputActionsCollapse';
function x(e) {
  '@babel/helpers - typeof';
  return (
    (x =
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
    x(e)
  );
}
function Se(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Se(Object(r), !0).forEach(function (n) {
          Ft(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Se(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ft(e, t, r) {
  return (
    (t = qt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function qt(e) {
  var t = Jt(e, 'string');
  return x(t) == 'symbol' ? t : String(t);
}
function Jt(e, t) {
  if (x(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (x(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Xe = function (t) {
  var r = t.item,
    n = t.disabled,
    i = t.onActionClick,
    o = t.groupCollapsed,
    c = t.collapsed,
    l = t.gap,
    a = t.setGroupCollapsed;
  return r.type === 'collapse'
    ? g.jsx(Ve, {
        gap: l,
        groupCollapse: o,
        mode: c ? 'popup' : 'default',
        onGroupCollapseChange: a,
        children: r.children.map(function (u, s) {
          return g.jsx(
            Pe,
            { disabled: n, item: u, onActionClick: i },
            u?.key || 'action-'.concat(s),
          );
        }),
      })
    : r.type === 'dropdown'
      ? g.jsx(
          lt,
          {
            menu: { items: r.children },
            children: g.jsx(W, {
              active: r.active,
              danger: r.danger,
              disabled: n || r.loading || r?.disabled,
              icon: r.icon,
              loading: r.loading,
              size: { blockSize: 36, size: 20 },
              title: r.label,
              tooltipProps: Xt({ placement: 'top' }, r.tooltipProps),
            }),
          },
          r.key,
        )
      : g.jsx(Pe, { disabled: n, item: r, onActionClick: i });
};
Xe.displayName = 'ChatInputActionItem';
function Ae(e, t) {
  return er(e) || Zt(e, t) || Yt(e, t) || Qt();
}
function Qt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(e, t) {
  if (e) {
    if (typeof e == 'string') return je(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return je(e, t);
  }
}
function je(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zt(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      i,
      o,
      c,
      l = [],
      a = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(a = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
    } catch (s) {
      ((u = !0), (i = s));
    } finally {
      try {
        if (!a && r.return != null && ((c = r.return()), Object(c) !== c)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function er(e) {
  if (Array.isArray(e)) return e;
}
var tr = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = t.items,
    n = r === void 0 ? [] : r,
    i = t.collapseOffset,
    o = i === void 0 ? 0 : i,
    c = t.autoCollapse,
    l = gt(),
    a = l.ref,
    u = l.width,
    s = d.useState(!1),
    f = Ae(s, 2),
    p = f[0],
    y = f[1],
    m = d.useMemo(
      function () {
        return n
          .flatMap(function (v) {
            return v.type === 'collapse' && v.children ? v.children : v;
          })
          .filter(function (v) {
            return v.type !== 'divider';
          });
      },
      [n],
    ),
    h = d.useMemo(
      function () {
        return n.filter(function (v) {
          return v.alwaysDisplay;
        }).length;
      },
      [n],
    ),
    b = d.useMemo(
      function () {
        return m.length + 1;
      },
      [m.length],
    ),
    L = d.useState(b),
    C = Ae(L, 2),
    H = C[0],
    M = C[1];
  return (
    d.useEffect(
      function () {
        if (!c) {
          (y(!1), M(b));
          return;
        }
        if (u) {
          var v = 1 + h,
            _ = Math.floor((u - o) / 38);
          (_ < v && (_ = v), y(_ < b), !(_ >= b) && M(_));
        }
      },
      [c, u, b, o, h],
    ),
    d.useMemo(
      function () {
        return { collapsed: p, maxCount: H, ref: a };
      },
      [p, H, a],
    )
  );
};
function N(e) {
  '@babel/helpers - typeof';
  return (
    (N =
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
    N(e)
  );
}
var rr = [
  'gap',
  'disabled',
  'items',
  'onActionClick',
  'className',
  'collapseOffset',
  'autoCollapse',
  'defaultGroupCollapse',
  'onGroupCollapseChange',
  'groupCollapse',
];
function Te(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Te(Object(r), !0).forEach(function (n) {
          nr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Te(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nr(e, t, r) {
  return (
    (t = ir(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ir(e) {
  var t = or(e, 'string');
  return N(t) == 'symbol' ? t : String(t);
}
function or(e, t) {
  if (N(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (N(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function K(e) {
  return ur(e) || lr(e) || Fe(e) || ar();
}
function ar() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lr(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function ur(e) {
  if (Array.isArray(e)) return oe(e);
}
function cr(e, t) {
  return pr(e) || fr(e, t) || Fe(e, t) || sr();
}
function sr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fe(e, t) {
  if (e) {
    if (typeof e == 'string') return oe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oe(e, t);
  }
}
function oe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fr(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      i,
      o,
      c,
      l = [],
      a = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(a = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
    } catch (s) {
      ((u = !0), (i = s));
    } finally {
      try {
        if (!a && r.return != null && ((c = r.return()), Object(c) !== c)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function pr(e) {
  if (Array.isArray(e)) return e;
}
function yr(e, t) {
  if (e == null) return {};
  var r = gr(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      ((n = o[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function gr(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++) ((i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
var dr = d.memo(function (e) {
  var t = e.gap,
    r = t === void 0 ? 2 : t,
    n = e.disabled,
    i = e.items,
    o = i === void 0 ? [] : i,
    c = e.onActionClick,
    l = e.className,
    a = e.collapseOffset,
    u = a === void 0 ? 0 : a,
    s = e.autoCollapse,
    f = s === void 0 ? !0 : s,
    p = e.defaultGroupCollapse,
    y = p === void 0 ? !1 : p,
    m = e.onGroupCollapseChange,
    h = e.groupCollapse,
    b = yr(e, rr),
    L = it(y, { defaultValue: y, onChange: m, value: h }),
    C = cr(L, 2),
    H = C[0],
    M = C[1],
    v = tr({ autoCollapse: f, collapseOffset: u, items: o }),
    _ = v.ref,
    pe = v.maxCount,
    J = v.collapsed,
    nt = d.useMemo(
      function () {
        if (!J) return o;
        var T = o.filter(function (O) {
            return O.alwaysDisplay;
          }),
          D = o.filter(function (O) {
            return O.type !== 'collapse' && !O.alwaysDisplay;
          }),
          ye = o.find(function (O) {
            return O.type === 'collapse' && O.children;
          }) || { children: [], type: 'collapse' },
          ge = pe - T.length - 1;
        return []
          .concat(
            K(D.slice(0, ge)),
            [
              B(
                B({}, ye),
                {},
                {
                  children: [].concat(
                    K(
                      D.filter(function (O) {
                        return O.type !== 'divider';
                      }).slice(ge),
                    ),
                    K(ye.children),
                  ),
                },
              ),
            ],
            K(T),
          )
          .filter(Boolean);
      },
      [J, o, pe],
    );
  return g.jsx(ot, {
    children: g.jsx(
      te,
      B(
        B(
          {
            align: 'center',
            className: re(fe.container, l),
            flex: 1,
            gap: r,
            horizontal: !0,
            ref: _,
          },
          b,
        ),
        {},
        {
          children: nt.map(function (T, D) {
            return g.jsx(
              Xe,
              {
                collapsed: J,
                disabled: n,
                gap: r,
                groupCollapsed: H,
                item: T,
                onActionClick: c,
                setGroupCollapsed: M,
              },
              T.key || D,
            );
          }),
        },
      ),
    ),
  });
});
dr.displayName = 'ChatInputActions';
var mr = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:www\.)?[\dA-Za-z][\w#%+./:=?@~-]*[\w#%+/=@~-]$/);
function ke(e) {
  if (!e || typeof e != 'string') return !1;
  var t = e.trim();
  if (mr.test(t)) return !0;
  try {
    var r = new URL(t);
    return !!r.protocol && !!r.hostname;
  } catch {}
  return !!/^[\da-z][\w#%+./:=?@~-]*\.[\w#%+/:=?@~-]+$/i.test(t);
}
function vr(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = hr(e)) || t) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    c = !1,
    l;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((o = u.done), u);
    },
    e: function (u) {
      ((c = !0), (l = u));
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (c) throw l;
      }
    },
  };
}
function hr(e, t) {
  if (e) {
    if (typeof e == 'string') return $e(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $e(e, t);
  }
}
function $e(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function br(e, t, r) {
  var n = r || {},
    i = n.enableHotkey,
    o = i === void 0 ? !0 : i;
  return ze(
    e.registerUpdateListener(function (c) {
      var l = c.mutatedNodes,
        a = l?.get(ne),
        u = a?.keys() || [],
        s = new Set();
      (e.getEditorState().read(function () {
        var f = vr(u),
          p;
        try {
          for (f.s(); !(p = f.n()).done; ) {
            var y = p.value,
              m = ie(y);
            if (!m) return;
            var h = m.getParent();
            h?.getFirstChild() === m && s.add(m);
          }
        } catch (b) {
          f.e(b);
        } finally {
          f.f();
        }
      }),
        s.size > 0 &&
          e.update(function () {
            s.forEach(function (f) {
              var p = f.getPreviousSibling();
              p || f.insertBefore(At());
            });
          }));
    }),
    t.registerHotkey(
      dt.Link,
      function () {
        return e.dispatchCommand(mt, void 0);
      },
      { enabled: o, preventDefault: !0, stopPropagation: !0 },
    ),
  );
}
var Y;
function A(e) {
  '@babel/helpers - typeof';
  return (
    (A =
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
    A(e)
  );
}
function Or(e, t) {
  return Pr(e) || _r(e, t) || Cr(e, t) || wr();
}
function wr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cr(e, t) {
  if (e) {
    if (typeof e == 'string') return Ie(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ie(e, t);
  }
}
function Ie(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _r(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      i,
      o,
      c,
      l = [],
      a = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(a = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
    } catch (s) {
      ((u = !0), (i = s));
    } finally {
      try {
        if (!a && r.return != null && ((c = r.return()), Object(c) !== c)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function Pr(e) {
  if (Array.isArray(e)) return e;
}
function Sr(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ar(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, qe(n.key), n));
  }
}
function jr(e, t, r) {
  return (t && Ar(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Tr(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && ae(e, t));
}
function ae(e, t) {
  return (
    (ae = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ae(e, t)
  );
}
function kr(e) {
  var t = Ir();
  return function () {
    var n = X(e),
      i;
    if (t) {
      var o = X(this).constructor;
      i = Reflect.construct(n, arguments, o);
    } else i = n.apply(this, arguments);
    return $r(this, i);
  };
}
function $r(e, t) {
  if (t && (A(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return le(e);
}
function le(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ir() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function X(e) {
  return (
    (X = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    X(e)
  );
}
function Z(e, t, r) {
  return (
    (t = qe(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function qe(e) {
  var t = Rr(e, 'string');
  return A(t) == 'symbol' ? t : String(t);
}
function Rr(e, t) {
  if (A(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (A(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Er =
    ((Y = (function (e) {
      Tr(r, e);
      var t = kr(r);
      function r(n, i) {
        var o;
        return (
          Sr(this, r),
          (o = t.call(this)),
          Z(le(o), 'logger', Be('plugin', 'link-highlight')),
          Z(le(o), 'urlRegex', void 0),
          (o.kernel = n),
          (o.config = i),
          n.registerNodes([ne]),
          n.registerThemes({ linkHighlight: i?.theme || 'editor-link-highlight' }),
          (o.urlRegex =
            i?.urlRegex ||
            /^(?:https?:\/\/|mailto:|tel:)[^\s"<>[\\\]^`{|}]+|^www\.[^\s"<>[\\\]^`{|}]+/i),
          o.logger.debug('LinkHighlightPlugin initialized'),
          o
        );
      }
      return (
        jr(r, [
          {
            key: 'onInit',
            value: function (i) {
              var o,
                c,
                l = this;
              (this.register(vt(i)),
                this.register(
                  br(i, this.kernel, {
                    enableHotkey:
                      (o = this.config) === null || o === void 0 ? void 0 : o.enableHotkey,
                  }),
                ),
                ((c = this.config) === null || c === void 0
                  ? void 0
                  : c.enablePasteAutoHighlight) !== !1 &&
                  this.register(
                    i.registerCommand(
                      jt,
                      function (u) {
                        var s = u.clipboardData;
                        if (s && s.types && s.types.length === 1 && s.types[0] === 'text/plain') {
                          var f = s.getData('text/plain').trim();
                          if (l.urlRegex.test(f) && ke(f))
                            return (
                              u.stopImmediatePropagation(),
                              u.preventDefault(),
                              l.logger.debug('Auto-highlighting pasted URL:', f),
                              i.update(function () {
                                var p = I();
                                if (R(p)) {
                                  var y = de(),
                                    m = ve(f);
                                  (y.append(m), p.insertNodes([y]));
                                }
                              }),
                              !0
                            );
                        }
                        return !1;
                      },
                      k,
                    ),
                  ));
              var a = this.kernel.requireService(ce);
              a &&
                (a.registerMarkdownWriter(ne.getType(), function (u, s) {
                  return (u.appendLine(s.getTextContent()), !0);
                }),
                a.registerMarkdownShortCut({
                  regExp: /<((?:https?:\/\/|mailto:|tel:|www\.)[^\s"<>[\\\]^`{|}]+)>\s?$/,
                  replace: function (s, f) {
                    var p = Or(f, 2),
                      y = p[1];
                    if (!(!y || !ke(y))) {
                      l.logger.debug('Converting markdown auto-link to LinkHighlightNode:', y);
                      var m = de(),
                        h = ve(y);
                      (m.append(h), s.replace(m));
                    }
                  },
                  trigger: '>',
                  type: 'text-match',
                }),
                a.registerMarkdownReader(
                  'html',
                  function (u) {
                    var s = u.value || '',
                      f = s.match(/^<((?:https?:\/\/|mailto:|tel:|www\.)[^\s"<>[\\\]^`{|}]+)>$/);
                    if (f) {
                      var p = f[1].replaceAll(/[\u200B-\u200D\u2060\uFEFF]/g, '');
                      return (
                        l.logger.debug('Converting HTML auto-link to LinkHighlightNode:', p),
                        z.createElementNode('linkHighlight', {
                          children: [z.createTextNode(p, {})],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          type: 'linkHighlight',
                          version: 1,
                        })
                      );
                    }
                    return !1;
                  },
                  me,
                ),
                a.registerMarkdownReader(
                  'link',
                  function (u, s) {
                    var f = u.url || '';
                    if (!s || s.length === 0) return !1;
                    var p = s
                      .filter(function (y) {
                        return y.type === 'text';
                      })
                      .map(function (y) {
                        return y.text || '';
                      })
                      .join('');
                    return p === f
                      ? (l.logger.debug('Converting markdown auto-link to LinkHighlightNode:', f),
                        z.createElementNode('linkHighlight', {
                          children: [z.createTextNode(f, {})],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          type: 'linkHighlight',
                          version: 1,
                        }))
                      : !1;
                  },
                  me,
                ),
                this.logger.debug('LinkHighlightPlugin initialized with markdown support'));
            },
          },
        ]),
        r
      );
    })(Me)),
    Z(Y, 'pluginName', 'LinkHighlightPlugin'),
    Y),
  Re;
function xr(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Ee = He(function (e) {
  var t = e.css;
  return {
    linkHighlight: t(
      Re ||
        (Re = xr([
          `
      cursor: unset;

      margin-block: 1em;
      margin-inline: 0;
      padding: 2px;
      border: none;
    `,
        ])),
    ),
  };
});
function Nr(e, t) {
  return Dr(e) || Mr(e, t) || Hr(e, t) || Lr();
}
function Lr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hr(e, t) {
  if (e) {
    if (typeof e == 'string') return xe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xe(e, t);
  }
}
function xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mr(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      i,
      o,
      c,
      l = [],
      a = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(a = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
    } catch (s) {
      ((u = !0), (i = s));
    } finally {
      try {
        if (!a && r.return != null && ((c = r.return()), Object(c) !== c)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function Dr(e) {
  if (Array.isArray(e)) return e;
}
var Je = function (t) {
  var r = t.className,
    n = t.enableHotkey,
    i = n === void 0 ? !0 : n,
    o = t.enablePasteAutoHighlight,
    c = o === void 0 ? !0 : o,
    l = q(),
    a = Nr(l, 1),
    u = a[0];
  return (
    d.useLayoutEffect(
      function () {
        (u.registerPlugin(ht),
          u.registerPlugin(Er, {
            enableHotkey: i,
            enablePasteAutoHighlight: c,
            theme: re(Ee.linkHighlight, r),
          }));
      },
      [r, re, i, c, u, Ee.linkHighlight],
    ),
    null
  );
};
Je.displayName = 'ReactLinkHighlightPlugin';
function zr(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Br(e)) || t) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    c = !1,
    l;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((o = u.done), u);
    },
    e: function (u) {
      ((c = !0), (l = u));
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (c) throw l;
      }
    },
  };
}
function Br(e, t) {
  if (e) {
    if (typeof e == 'string') return Ne(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ne(e, t);
  }
}
function Ne(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Kr = Be('plugin', 'virtual-block');
function G(e) {
  for (var t = e, r = t.getParent(); r !== null && !se(r); ) ((t = r), (r = t.getParent()));
  return t;
}
function $(e) {
  if (e.getChildrenSize() === 0) return !0;
  var t = zr(e.getChildren()),
    r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var n = r.value;
      if (Et(n)) {
        if (n.getTextContent().trim().length > 0) return !1;
      } else if (!$(n)) return !1;
    }
  } catch (i) {
    t.e(i);
  } finally {
    t.f();
  }
  return !0;
}
function Gr(e, t) {
  var r = null;
  return ze(
    e.registerUpdateListener(function (n) {
      var i = n.mutatedNodes;
      if (r) {
        var o;
        if (
          (i == null || (o = i.get(It)) === null || o === void 0 ? void 0 : o.get(r.getKey())) ===
          'destroyed'
        ) {
          (console.info('Virtual block node was removed externally', r), (r = null));
          return;
        }
        e.update(function () {
          try {
            var c = I();
            if (R(c)) {
              var l = c.focus.getNode();
              if (
                r &&
                !Rt(l, function (s) {
                  return s === r;
                })
              ) {
                if ($(r)) {
                  var a;
                  (Kr.info('Removing virtual block node after focus moved away', r),
                    (a = r) === null || a === void 0 || a.remove(),
                    (r = null));
                } else r = null;
                return;
              }
            } else if (U(c) && r) {
              if ($(r)) {
                var u;
                ((u = r) === null || u === void 0 || u.remove(), (r = null));
              } else r = null;
              return;
            }
          } catch (s) {
            console.error('Error during virtual block cleanup', s);
          }
        });
      }
    }),
    t.registerHighCommand(
      kt,
      function (n) {
        var i = I();
        if (n.shiftKey) return !1;
        if (U(i)) {
          var o = i.getNodes();
          if (o.length > 0) {
            var c = G(o[0]);
            n.preventDefault();
            var l = w();
            return ((r = l), c.insertBefore(l), l.selectEnd(), !0);
          }
        } else if (R(i)) {
          var a = G(i.focus.getNode());
          if (a === r || $(a)) return !1;
          if (he().getFirstChild() === a) {
            n.preventDefault();
            var u = w();
            return (a.insertBefore(u), (r = u), u.selectStart(), !0);
          } else if ($t(a.getPreviousSibling())) {
            n.preventDefault();
            var s = w();
            return (a.insertBefore(s), (r = s), s.selectStart(), !0);
          }
        }
        return !1;
      },
      k,
    ),
    t.registerHighCommand(
      Tt,
      function (n) {
        var i = I();
        if (U(i)) {
          var o = i.getNodes();
          if (o.length > 0) {
            var c = o[0],
              l = G(c);
            n.preventDefault();
            var a = w();
            return ((r = a), l.insertAfter(a), a.selectStart(), !0);
          }
        } else if (R(i)) {
          if (!i.isCollapsed()) return !1;
          var u = i.focus.getNode(),
            s = G(u);
          if (s === r || $(s)) return !1;
          var f = he();
          if (f.getLastChild() === s) {
            n.preventDefault();
            var p = w();
            (s.insertAfter(p), (r = p), p.selectStart());
          }
          return !0;
        }
        return !1;
      },
      k,
    ),
    e.registerCommand(
      Pt,
      function (n) {
        return (
          e.update(function () {
            var i = ie(n.key);
            if (i) {
              var o = w();
              return ((r = o), i.insertBefore(o), o.selectEnd(), e.focus(), !0);
            }
          }),
          !0
        );
      },
      k,
    ),
    e.registerCommand(
      _t,
      function (n) {
        return (
          e.update(function () {
            var i = ie(n.key);
            if (i) {
              var o = w();
              return ((r = o), i.insertAfter(o), o.selectEnd(), e.focus(), !0);
            }
          }),
          !0
        );
      },
      k,
    ),
  );
}
var ee;
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
function Ur(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Wr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Qe(n.key), n));
  }
}
function Vr(e, t, r) {
  return (t && Wr(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Xr(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && ue(e, t));
}
function ue(e, t) {
  return (
    (ue = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ue(e, t)
  );
}
function Fr(e) {
  var t = Qr();
  return function () {
    var n = F(e),
      i;
    if (t) {
      var o = F(this).constructor;
      i = Reflect.construct(n, arguments, o);
    } else i = n.apply(this, arguments);
    return qr(this, i);
  };
}
function qr(e, t) {
  if (t && (j(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Jr(e);
}
function Jr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qr() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function F(e) {
  return (
    (F = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    F(e)
  );
}
function Yr(e, t, r) {
  return (
    (t = Qe(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Qe(e) {
  var t = Zr(e, 'string');
  return j(t) == 'symbol' ? t : String(t);
}
function Zr(e, t) {
  if (j(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (j(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var en =
  ((ee = (function (e) {
    Xr(r, e);
    var t = Fr(r);
    function r(n, i) {
      var o;
      return (
        Ur(this, r),
        (o = t.call(this)),
        (o.kernel = n),
        n.registerThemes({ virtualBlock: i?.theme || '' }),
        o
      );
    }
    return (
      Vr(r, [
        {
          key: 'onInit',
          value: function (i) {
            this.register(Gr(i, this.kernel));
          },
        },
      ]),
      r
    );
  })(Me)),
  Yr(ee, 'pluginName', 'VirtualBlockPlugin'),
  ee);
function tn(e, t) {
  return an(e) || on(e, t) || nn(e, t) || rn();
}
function rn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nn(e, t) {
  if (e) {
    if (typeof e == 'string') return Le(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Le(e, t);
  }
}
function Le(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function on(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      i,
      o,
      c,
      l = [],
      a = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(a = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); a = !0);
    } catch (s) {
      ((u = !0), (i = s));
    } finally {
      try {
        if (!a && r.return != null && ((c = r.return()), Object(c) !== c)) return;
      } finally {
        if (u) throw i;
      }
    }
    return l;
  }
}
function an(e) {
  if (Array.isArray(e)) return e;
}
var Ye = function () {
  var t = q(),
    r = tn(t, 1),
    n = r[0];
  return (
    d.useLayoutEffect(function () {
      n.registerPlugin(en);
    }, []),
    null
  );
};
Ye.displayName = 'ReactVirtualBlockPlugin';
const ln = We('INSERT_ACTION_TAG_COMMAND');
function un(e) {
  return e.registerCommand(
    ln,
    (t) => (
      e.update(() => {
        const r = Lt(t.type, t.category, t.label);
        (Ke([r]), se(r.getParentOrThrow()) && Ge(r, w).selectEnd());
      }),
      !0
    ),
    Ue,
  );
}
const Ze = d.memo(({ node: e, editor: t, label: r }) => {
  const n = d.useRef(null),
    i = d.useCallback((o) => !!(o.target === n.current || n.current?.contains(o.target)), []);
  return (
    d.useEffect(() => t.registerCommand(xt, i, Nt), [t, i]),
    g.jsx('span', { ref: n, children: g.jsx(Ht, { category: e.actionCategory, label: r }) })
  );
});
Ze.displayName = 'ActionTag';
function cn(e) {
  let t = [];
  return e.registerUpdateListener(({ editorState: r }) => {
    const n = r.read(() => I()),
      i = [];
    U(n)
      ? r.read(() => {
          for (const l of n.getNodes()) V(l) && i.push(l.getKey());
        })
      : R(n) &&
        !n.isCollapsed() &&
        r.read(() => {
          for (const l of n.getNodes()) V(l) && i.push(l.getKey());
        });
    const o = t.filter((l) => !i.includes(l)),
      c = i.filter((l) => !t.includes(l));
    t = [...i];
    for (const l of o) e.getElementByKey(l)?.classList.remove('selected');
    for (const l of c) e.getElementByKey(l)?.classList.add('selected');
  });
}
class sn {
  static pluginName = 'ActionTagPlugin';
  config;
  kernel;
  clears = [];
  constructor(t, r) {
    ((this.kernel = t),
      (this.config = r),
      t.registerNodes([P]),
      r?.theme && t.registerThemes(r.theme),
      t.registerDecorator(P.getType(), (n, i) => (r?.decorator ? r.decorator(n, i) : null)));
  }
  onInit(t) {
    (this.clears.push(un(t)),
      this.clears.push(cn(t)),
      this.registerMarkdown(),
      this.registerLiteXml());
  }
  registerMarkdown() {
    this.kernel.requireService(ce)?.registerMarkdownWriter(P.getType(), (r, n) => {
      V(n) && r.appendLine(`<action type="${n.actionType}" category="${n.actionCategory}" />`);
    });
  }
  registerLiteXml() {
    const t = this.kernel.requireService(De);
    (t?.registerXMLWriter(P.getType(), (r, n) =>
      V(r)
        ? n.createXmlNode('action', {
            category: r.actionCategory,
            label: r.actionLabel,
            type: r.actionType,
          })
        : !1,
    ),
      t?.registerXMLReader('action', (r) => {
        try {
          const { INodeHelper: n } = require('@lobehub/editor/es/editor-kernel/inode/helper');
          return n.createElementNode(P.getType(), {
            actionCategory: r.getAttribute('category') || 'skill',
            actionLabel: r.getAttribute('label') || '',
            actionType: r.getAttribute('type') || 'translate',
          });
        } catch {
          return !1;
        }
      }));
  }
  destroy() {
    for (const t of this.clears) t();
    ((this.clears = []), this.kernel.unregisterDecorator?.(P.getType()));
  }
}
const et = () => {
  const [e] = q(),
    { t } = at('editor');
  return (
    d.useLayoutEffect(() => {
      e.registerPlugin(sn, {
        decorator: (r, n) => {
          const i = r.actionCategory === 'command' ? t(`slash.${r.actionType}`) : r.actionLabel;
          return g.jsx(Ze, { editor: n, label: i, node: r });
        },
      });
    }, [e, t]),
    null
  );
};
et.displayName = 'ReactActionTagPlugin';
const tt = d.memo(({ node: e }) => g.jsx(Mt, { fallbackTitle: e.topicTitle, topicId: e.topicId }));
tt.displayName = 'ReferTopic';
const fn = We('INSERT_REFER_TOPIC_COMMAND');
class pn {
  static pluginName = 'ReferTopicPlugin';
  config;
  kernel;
  constructor(t, r) {
    ((this.kernel = t),
      (this.config = r),
      t.registerNodes([S]),
      r?.theme && t.registerThemes(r.theme),
      t.registerDecorator(S.getType(), (n, i) => (r?.decorator ? r.decorator(n, i) : null)));
  }
  onInit(t) {
    (this.registerMarkdown(), this.registerLiteXml(), this.registerCommand(t));
  }
  registerMarkdown() {
    this.kernel.requireService(ce)?.registerMarkdownWriter(S.getType(), (r, n) => {
      be(n) && r.appendLine(`<refer_topic name="${n.topicTitle}" id="${n.topicId}" />`);
    });
  }
  registerCommand(t) {
    t.registerCommand(
      fn,
      (r) => (
        t.update(() => {
          const n = Dt(r.topicId, r.topicTitle);
          (Ke([n]), se(n.getParentOrThrow()) && Ge(n, w).selectEnd());
        }),
        !0
      ),
      Ue,
    );
  }
  registerLiteXml() {
    const t = this.kernel.requireService(De);
    (t?.registerXMLWriter(S.getType(), (r, n) =>
      be(r) ? n.createXmlNode('referTopic', { id: r.topicId, name: r.topicTitle }) : !1,
    ),
      t?.registerXMLReader('referTopic', (r) => {
        try {
          const { INodeHelper: n } = require('@lobehub/editor/es/editor-kernel/inode/helper');
          return n.createElementNode(S.getType(), {
            topicId: r.getAttribute('id') || '',
            topicTitle: r.getAttribute('name') || '',
          });
        } catch {
          return !1;
        }
      }));
  }
  destroy() {
    this.kernel.unregisterDecorator?.(S.getType());
  }
}
const rt = () => {
  const [e] = q();
  return (
    d.useLayoutEffect(() => {
      e.registerPlugin(pn, { decorator: (t) => g.jsx(tt, { node: t }) });
    }, [e]),
    null
  );
};
rt.displayName = 'ReactReferTopicPlugin';
const yn = [et, rt],
  An = ({ linkPlugin: e = Je, mathPlugin: t = Ct } = {}) => [bt, Ot, St, wt, e, Ye, t, ...yn];
export { dr as C, ln as I, yn as a, fn as b, An as c };
