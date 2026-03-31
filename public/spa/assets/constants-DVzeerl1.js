import {
  au as Te,
  f as H,
  A as _,
  F as w,
  ai as _e,
  j as ue,
  a3 as Le,
  I as Re,
  g as $e,
} from './index-C8UyLGsD.js';
import { D as De } from './Dropdown-DdDP6pcJ.js';
import { R as Ne, r as S } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as u, z as Fe } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as ze } from './index-BfwjtmVb.js';
import { k as Be } from './Popover-Cg4CTqoX.js';
import {
  dg as Ge,
  dh as Ue,
  di as He,
  dj as Ke,
  bs as We,
} from '../vendor/vendor-icons-BHMUH78i.js';
import {
  J as pe,
  U as de,
  a7 as G,
  X as Qe,
  O as Ye,
  a8 as qe,
  a9 as Ve,
  n as fe,
  u as j,
  A as Xe,
} from './index-Br6hqyew.js';
import { B as Je } from './Block-DDntSWi2.js';
import { l as Ze, m as V } from './index-CMcqKxKW.js';
import { I as et } from './index-BhTv9jof.js';
import { m as U, h as tt, i as nt, u as P, D as rt, j as ot } from './index-bsLCy3LH.js';
import { v as it } from './index-CaczU3az.js';
import { A as at } from './Alert-lszDImnb.js';
import { b as st, C as lt } from './index-jMJizVYM.js';
import { o as k } from './index-Dp4SCEiz.js';
import { u as N } from './store-8fdqmFXe.js';
import { W as ct } from './index-9IUPw_JO.js';
import { f as A } from './selectors-DclnpyYm.js';
function ut(e) {
  const t = Ne.useRef(void 0);
  return (n) => {
    const r = e(n);
    return Te(t.current, r) ? t.current : (t.current = r);
  };
}
var X, J, Z;
function F(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var K = H(function (e) {
  var t = e.css;
  return {
    collapsedContainer: t(
      X ||
        (X = F([
          `
    overflow: hidden;
    display: flex;
    align-items: center;
  `,
        ])),
    ),
    container: t(
      J ||
        (J = F([
          `
    position: relative;
    width: 100%;
  `,
        ])),
    ),
    divider: t(
      Z ||
        (Z = F([
          `
    height: 20px;
    margin-inline: 4px;
  `,
        ])),
    ),
  };
});
function L(e) {
  '@babel/helpers - typeof';
  return (
    (L =
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
    L(e)
  );
}
var pt = [
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
function ee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ee(Object(n), !0).forEach(function (r) {
          ft(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ee(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function ft(e, t, n) {
  return (
    (t = gt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function gt(e) {
  var t = mt(e, 'string');
  return L(t) == 'symbol' ? t : String(t);
}
function mt(e, t) {
  if (L(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (L(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function yt(e, t) {
  if (e == null) return {};
  var n = bt(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      ((r = i[o]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
  }
  return n;
}
function bt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) ((o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
var te = function (t) {
    var n = t.item,
      r = t.onActionClick,
      o = t.disabled;
    if (n.type === 'divider') return u.jsx(ze, { className: K.divider, orientation: 'vertical' });
    var i = n,
      s = i.wrapper,
      p = i.icon,
      d = i.key,
      g = i.label,
      a = i.onClick,
      f = i.danger,
      y = i.loading,
      h = i.active,
      m = i.tooltipProps,
      l = yt(i, pt);
    if (n.children && S.isValidElement(n.children)) return s ? s(n.children) : n.children;
    var C = u.jsx(_, {
      active: h,
      danger: f,
      disabled: o || y || l?.disabled,
      icon: p,
      loading: y,
      onClick: function (v) {
        (r?.({ domEvent: v, key: String(d), keyPath: [String(d)] }), a?.(v));
      },
      size: { blockSize: 36, size: 20 },
      title: g,
      tooltipProps: dt({ placement: 'top' }, m),
    });
    return s ? s(C) : C;
  },
  ge = function (t) {
    var n = t.children,
      r = t.groupCollapse,
      o = r === void 0 ? !1 : r,
      i = t.onGroupCollapseChange,
      s = t.gap,
      p = t.mode;
    return p === 'popup'
      ? u.jsx(Be, {
          arrow: !1,
          content: u.jsx(w, { align: 'center', gap: s, horizontal: !0, children: n }),
          styles: { content: { padding: 4 } },
          children: u.jsx(_, { icon: Ge, size: { blockSize: 36, size: 20 } }),
        })
      : u.jsxs(w, {
          align: 'center',
          flex: 'none',
          gap: s,
          horizontal: !0,
          children: [
            u.jsx(Fe.div, {
              animate: o ? 'closed' : 'open',
              className: K.collapsedContainer,
              initial: o ? 'closed' : 'open',
              style: { gap: s },
              transition: { duration: 0.2 },
              variants: { closed: { opacity: 0, width: 0 }, open: { opacity: 1, width: 'auto' } },
              children: n,
            }),
            u.jsx(_, {
              icon: o ? Ue : He,
              onClick: function () {
                return i?.(!o);
              },
              size: { blockSize: 36, size: 20 },
            }),
          ],
        });
  };
ge.displayName = 'FloatActionsCollapse';
function R(e) {
  '@babel/helpers - typeof';
  return (
    (R =
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
    R(e)
  );
}
function ne(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ne(Object(n), !0).forEach(function (r) {
          ht(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ne(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function ht(e, t, n) {
  return (
    (t = Ct(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ct(e) {
  var t = St(e, 'string');
  return R(t) == 'symbol' ? t : String(t);
}
function St(e, t) {
  if (R(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (R(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var me = function (t) {
  var n = t.item,
    r = t.disabled,
    o = t.onActionClick,
    i = t.groupCollapsed,
    s = t.gap,
    p = t.setGroupCollapsed;
  return n.type === 'collapse'
    ? u.jsx(ge, {
        gap: s,
        groupCollapse: i,
        mode: 'default',
        onGroupCollapseChange: p,
        children: n.children.map(function (d, g) {
          return u.jsx(
            te,
            { disabled: r, item: d, onActionClick: o },
            d?.key || 'action-'.concat(g),
          );
        }),
      })
    : n.type === 'dropdown'
      ? u.jsx(
          De,
          {
            menu: { items: n.children },
            children: u.jsx(_, {
              active: n.active,
              danger: n.danger,
              disabled: r || n.loading || n?.disabled,
              icon: n.icon,
              loading: n.loading,
              size: { blockSize: 36, size: 20 },
              title: n.label,
              tooltipProps: vt({ placement: 'top' }, n.tooltipProps),
            }),
          },
          n.key,
        )
      : u.jsx(te, { disabled: r, item: n, onActionClick: o });
};
me.displayName = 'FloatActionsItem';
function $(e) {
  '@babel/helpers - typeof';
  return (
    ($ =
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
    $(e)
  );
}
var Ot = [
  'gap',
  'disabled',
  'items',
  'onActionClick',
  'className',
  'defaultGroupCollapse',
  'onGroupCollapseChange',
  'groupCollapse',
];
function re(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? re(Object(n), !0).forEach(function (r) {
          xt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : re(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function xt(e, t, n) {
  return (
    (t = jt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function jt(e) {
  var t = wt(e, 'string');
  return $(t) == 'symbol' ? t : String(t);
}
function wt(e, t) {
  if ($(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Et(e, t) {
  return Mt(e) || At(e, t) || It(e, t) || Pt();
}
function Pt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function It(e, t) {
  if (e) {
    if (typeof e == 'string') return ie(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t);
  }
}
function ie(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function At(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      s,
      p = [],
      d = !0,
      g = !1;
    try {
      if (((i = (n = n.call(e)).next), t !== 0))
        for (; !(d = (r = i.call(n)).done) && (p.push(r.value), p.length !== t); d = !0);
    } catch (a) {
      ((g = !0), (o = a));
    } finally {
      try {
        if (!d && n.return != null && ((s = n.return()), Object(s) !== s)) return;
      } finally {
        if (g) throw o;
      }
    }
    return p;
  }
}
function Mt(e) {
  if (Array.isArray(e)) return e;
}
function kt(e, t) {
  if (e == null) return {};
  var n = Tt(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      ((r = i[o]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
  }
  return n;
}
function Tt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) ((o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
var _t = function (t) {
  var n = t.gap,
    r = n === void 0 ? 2 : n,
    o = t.disabled,
    i = t.items,
    s = i === void 0 ? [] : i,
    p = t.onActionClick,
    d = t.className,
    g = t.defaultGroupCollapse,
    a = g === void 0 ? !1 : g,
    f = t.onGroupCollapseChange,
    y = t.groupCollapse,
    h = kt(t, Ot),
    m = _e(a, { defaultValue: a, onChange: f, value: y }),
    l = Et(m, 2),
    C = l[0],
    c = l[1];
  return u.jsx(
    w,
    oe(
      oe({ align: 'center', className: ue(K.container, d), flex: 1, gap: r, horizontal: !0 }, h),
      {},
      {
        children: s.map(function (v, O) {
          return u.jsx(
            me,
            {
              disabled: o,
              gap: r,
              groupCollapsed: C,
              item: v,
              onActionClick: p,
              setGroupCollapsed: c,
            },
            v.key || O,
          );
        }),
      },
    ),
  );
};
_t.displayName = 'FloatActions';
var ye = pe(),
  Lt = pe();
function Rt(e, t) {
  var n = t || {},
    r = n.onHide,
    o = n.onShow;
  return de(
    e.registerCommand(
      ye,
      function () {
        return (r?.(), !0);
      },
      G,
    ),
    e.registerCommand(
      Lt,
      function () {
        return (o?.(), !0);
      },
      G,
    ),
  );
}
function $t(e, t) {
  var n = e.getRangeAt(0),
    r;
  if (e.anchorNode === t) {
    for (var o = t; o.firstElementChild !== null; ) o = o.firstElementChild;
    r = o.getBoundingClientRect();
  } else r = n.getBoundingClientRect();
  return r;
}
var Dt = 4,
  Nt = 0;
function Ft(e) {
  for (var t = e.parentElement; t; ) {
    var n = window.getComputedStyle(t),
      r = n.overflow,
      o = n.overflowY,
      i = n.overflowX;
    if (/(auto|scroll)/.test(r + o + i)) return t;
    t = t.parentElement;
  }
  return document.documentElement;
}
function zt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Dt,
    i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Nt,
    s = Ft(n);
  if (e === null || !s) {
    ((t.style.opacity = '0'), (t.style.transform = 'translate(-10000px, -10000px)'));
    return;
  }
  var p = t.getBoundingClientRect(),
    d = n.getBoundingClientRect(),
    g = s.getBoundingClientRect(),
    a = e.top - p.height - o,
    f = e.left - i,
    y = window.getSelection();
  if (y && y.rangeCount > 0) {
    var h = y.getRangeAt(0),
      m = h.startContainer;
    if (m.nodeType === Node.ELEMENT_NODE || m.parentElement) {
      var l = m.nodeType === Node.ELEMENT_NODE ? m : m.parentElement,
        C = window.getComputedStyle(l).textAlign;
      (C === 'right' || C === 'end') && (f = e.right - p.width + i);
    }
  }
  (a < g.top && (a += p.height + e.height + o * (r ? 9 : 2)),
    f + p.width > g.right && (f = g.right - p.width - i),
    f < g.left && (f = g.left + i),
    (a -= d.top + 12),
    (f -= d.left),
    (t.style.opacity = '1'),
    (t.style.transform = 'translate('.concat(f, 'px, ').concat(a, 'px)')));
}
var ae, se, le;
function z(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var B = H(function (e) {
  var t = e.css,
    n = e.cssVar;
  return {
    anchor: t(
      ae ||
        (ae = z([
          `
    position: relative;
  `,
        ])),
    ),
    toolbarDark: t(
      se ||
        (se = z([
          `
    will-change: transform;

    position: absolute;
    z-index: 10;
    inset-block-start: 0;
    inset-inline-start: 0;
    transform: translate(-10000px, -10000px);

    display: flex;

    border-color: `,
          `;

    vertical-align: middle;

    opacity: 0;
    background: `,
          `;
    box-shadow:
      0 14px 28px -6px color-mix(in srgb, #000 18.75%, transparent),
      0 2px 4px -1px color-mix(in srgb, #000 12.19%, transparent);

    transition: opacity 0.12s `,
          `;
  `,
        ])),
      n.colorFillSecondary,
      n.colorBgElevated,
      n.motionEaseOut,
    ),
    toolbarLight: t(
      le ||
        (le = z([
          `
    will-change: transform;

    position: absolute;
    z-index: 10;
    inset-block-start: 0;
    inset-inline-start: 0;
    transform: translate(-10000px, -10000px);

    display: flex;

    border-color: `,
          `;

    vertical-align: middle;

    opacity: 0;
    background: `,
          `;
    box-shadow:
      0 14px 28px -6px color-mix(in srgb, #000 10.2%, transparent),
      0 2px 4px -1px color-mix(in srgb, #000 5.88%, transparent);

    transition: opacity 0.12s `,
          `;
  `,
        ])),
      n.colorFillSecondary,
      n.colorBgElevated,
      n.motionEaseOut,
    ),
  };
});
function Bt(e, t) {
  return Kt(e) || Ht(e, t) || Ut(e, t) || Gt();
}
function Gt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(e, t) {
  if (e) {
    if (typeof e == 'string') return ce(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t);
  }
}
function ce(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ht(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      s,
      p = [],
      d = !0,
      g = !1;
    try {
      if (((i = (n = n.call(e)).next), t !== 0))
        for (; !(d = (r = i.call(n)).done) && (p.push(r.value), p.length !== t); d = !0);
    } catch (a) {
      ((g = !0), (o = a));
    } finally {
      try {
        if (!d && n.return != null && ((s = n.return()), Object(s) !== s)) return;
      } finally {
        if (g) throw o;
      }
    }
    return p;
  }
}
function Kt(e) {
  if (Array.isArray(e)) return e;
}
var vn = function (t) {
  var n = t.className,
    r = t.children,
    o = S.useRef(null),
    i = S.useRef(null),
    s = Ze(),
    p = Bt(s, 1),
    d = p[0],
    g = Le(),
    a = g.isDarkMode,
    f = S.useRef(!1),
    y = Qe('plugin', 'toolbar'),
    h = S.useCallback(
      function (c) {
        if (i.current) {
          var v = Ye(),
            O = o.current,
            x = qe(c._window);
          if (O !== null) {
            var E = c.getRootElement();
            if (
              v !== null &&
              x !== null &&
              !x.isCollapsed &&
              E !== null &&
              E.contains(x.anchorNode)
            ) {
              var I = $t(x, E);
              (y.debug('🔍 rangeRect', I), zt(I, O, i.current, !1));
            } else ((O.style.opacity = '0'), (O.style.transform = 'translate(-10000px, -10000px)'));
          }
        }
      },
      [i],
    ),
    m = S.useCallback(
      function () {
        if (i.current) {
          var c = o.current;
          c !== null &&
            ((c.style.opacity = '0'), (c.style.transform = 'translate(-10000px, -10000px)'));
        }
      },
      [i],
    ),
    l = S.useCallback(function (c) {
      return function (v) {
        v.button === 0 && ((f.current = !0), c());
      };
    }, []),
    C = S.useCallback(function (c) {
      return function (v) {
        v.button === 0 && ((f.current = !1), c());
      };
    }, []);
  return (
    V(function () {
      var c = d.requireService(et);
      if (c)
        return (
          c.setLinkToolbar(!1),
          function () {
            c.setLinkToolbar(!0);
          }
        );
    }, []),
    V(function (c) {
      var v = l(function () {
          c.dispatchCommand(ye, void 0);
        }),
        O = C(function () {
          c.update(function () {
            h(c);
          });
        }),
        x = c.getRootElement();
      return (
        x && (x.addEventListener('mousedown', v), document.addEventListener('mouseup', O)),
        de(
          Rt(c, { onHide: m }),
          c.registerUpdateListener(function (E) {
            var I = E.editorState;
            f.current ||
              I.read(function () {
                h(c);
              });
          }),
          c.registerCommand(
            Ve,
            function () {
              return (f.current || h(c), !1);
            },
            G,
          ),
          function () {
            x &&
              (x.removeEventListener('mousedown', v), document.removeEventListener('mouseup', O));
          },
        )
      );
    }),
    u.jsx('div', {
      className: B.anchor,
      ref: i,
      children: u.jsx(Je, {
        className: ue(a ? B.toolbarDark : B.toolbarLight, n),
        padding: 4,
        ref: o,
        variant: 'outlined',
        children: r,
      }),
    })
  );
};
const Wt = (e) => e.editor,
  Qt = (e) => e.inputMessage,
  Yt = (e) => e.inputMessage.trim().length > 0,
  qt = { editor: Wt, hasInput: Yt, inputMessage: Qt },
  hn = { ...nt, ...tt, ...qt, ...U, ...it },
  M = H(({ css: e, cssVar: t }) => ({
    container: e`
    border: 1px solid ${t.colorBorderSecondary};
    border-block-end: none;
    border-radius: 12px 12px 0 0;
    background: ${t.colorBgContainer};
  `,
    icon: e`
    flex-shrink: 0;
    color: ${t.colorTextDescription};
  `,
    item: e`
    padding-block: 6px 4px;
    padding-inline: 12px 8px;
  `,
    itemDivider: e`
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,
    text: e`
    overflow: hidden;

    font-size: 13px;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  })),
  be = S.memo(() => {
    const e = P((o) => o.context),
      t = S.useMemo(
        () => fe({ agentId: e.agentId, groupId: e.groupId, topicId: e.topicId }),
        [e.agentId, e.groupId, e.topicId],
      ),
      n = j((o) => k.getQueuedMessages(e)(o)),
      r = j((o) => o.removeQueuedMessage);
    return n.length === 0
      ? null
      : u.jsx(w, {
          className: M.container,
          gap: 0,
          children: n.map((o, i) =>
            u.jsxs(
              w,
              {
                horizontal: !0,
                align: 'center',
                className: i > 0 ? `${M.item} ${M.itemDivider}` : M.item,
                gap: 8,
                children: [
                  u.jsx(Re, { className: M.icon, icon: Ke, size: 14 }),
                  u.jsx(w, { className: M.text, flex: 1, children: o.content }),
                  u.jsx(_, { icon: We, size: 'small', onClick: () => r(t, o.id) }),
                ],
              },
              o.id,
            ),
          ),
        });
  });
be.displayName = 'QueueTray';
const Vt = S.memo(
  ({
    actionBarStyle: e,
    allowExpand: t,
    leftActions: n = [],
    leftContent: r,
    rightActions: o = [],
    children: i,
    extraActionItems: s,
    mentionItems: p,
    sendMenu: d,
    sendAreaPrefix: g,
    sendButtonProps: a,
    onEditorReady: f,
    showRuntimeConfig: y,
    skipScrollMarginWithList: h,
  }) => {
    const { t: m } = $e('chat'),
      l = P((b) => b.context),
      [C, c, v, O] = P((b) => [b.context.agentId, b.inputMessage, b.sendMessage, b.stopGenerating]),
      x = P((b) => b.updateInputMessage),
      E = P((b) => b.setEditor),
      I = P(U.isInputLoading),
      W = P(U.sendMessageError),
      ve = j((b) => b.clearSendMessageError),
      he = N(A.chatUploadFileList),
      Ce = N(A.chatContextSelections),
      Se = N(A.isUploadingFiles),
      Oe = j((b) => k.queuedMessageCount(l)(b) > 0),
      xe = (!c.trim() && he.length === 0 && Ce.length === 0) || Se,
      je = S.useCallback(
        async ({ clearContent: b, getMarkdownContent: Pe, getEditorData: Ie }) => {
          const T = N.getState(),
            Q = A.chatUploadFileList(T),
            Ae = A.isUploadingFiles(T),
            Y = A.chatContextSelections(T);
          if (Ae) return;
          const q = Pe();
          if (!q.trim() && Q.length === 0 && Y.length === 0) return;
          const Me = Ie();
          (b(), T.clearChatUploadFileList(), T.clearChatContextSelections());
          const ke = Y.map((D) => ({
            content: D.preview || '',
            id: D.id,
            pageId: D.pageId || '',
            xml: D.content,
          }));
          await v({ editorData: Me, files: Q, message: q, pageSelections: ke });
        },
        [v],
      ),
      we = { disabled: xe, generating: I, onStop: O, ...a },
      Ee = u.jsxs(ct, {
        style: h ? { marginTop: -12, position: 'relative' } : void 0,
        children: [
          W &&
            u.jsx(w, {
              paddingBlock: '0 6px',
              paddingInline: 12,
              children: u.jsx(at, {
                closable: !0,
                title: m('input.errorMsg', { errorMsg: W }),
                type: 'secondary',
                onClose: ve,
              }),
            }),
          Oe &&
            u.jsx(w, {
              paddingInline: 12,
              style: { position: 'absolute', zIndex: 10, bottom: '100%', left: 12, right: 12 },
              children: u.jsx(be, {}),
            }),
          u.jsx(st, {
            actionBarStyle: e,
            borderRadius: 12,
            extraActionItems: s,
            leftContent: r,
            sendAreaPrefix: g,
            showRuntimeConfig: y,
          }),
        ],
      });
    return u.jsx(lt, {
      agentId: C,
      allowExpand: t,
      leftActions: n,
      mentionItems: p,
      rightActions: o,
      sendButtonProps: we,
      sendMenu: d,
      slashPlacement: 'top',
      chatInputEditorRef: (b) => {
        b && (E(b), f?.(b));
      },
      onMarkdownContentChange: x,
      onSend: je,
      children: i ?? Ee,
    });
  },
);
Vt.displayName = 'ConversationChatInput';
const Cn = (e) => {
    const t = fe(e),
      {
        operations: n,
        operationsByContext: r,
        operationsByMessage: o,
        toolCallingStreamIds: i,
      } = j(
        ut((a) => ({
          operations: a.operations,
          operationsByContext: a.operationsByContext,
          operationsByMessage: a.operationsByMessage,
          toolCallingStreamIds: a.toolCallingStreamIds,
        })),
      ),
      s = j((a) => k.isAgentRuntimeRunningByContext(e)(a)),
      p = j((a) => k.isInputLoadingByContext(e)(a)),
      d = S.useMemo(() => {
        const a = r[t] || [];
        for (const f of [...a].reverse()) {
          const y = n[f];
          if (y && y.type === 'sendMessage' && y.metadata.inputSendErrorMsg)
            return y.metadata.inputSendErrorMsg;
        }
      }, [r, t, n]);
    return S.useMemo(
      () => ({
        getMessageOperationState: (a) => {
          const f = j.getState(),
            y = o[a] || [];
          if (y.length === 0) return ot;
          const m = y
            .map((l) => n[l])
            .filter(Boolean)
            .filter((l) => l.status === 'running');
          return {
            isContinuing: m.some((l) => l.type === 'continue'),
            isCreating: m.some(
              (l) => l.type === 'sendMessage' || l.type === 'createAssistantMessage',
            ),
            isGenerating: m.some((l) => Xe.includes(l.type)),
            isInReasoning: m.some((l) => l.type === 'reasoning'),
            isProcessing: k.isMessageProcessing(a)(f),
            isRegenerating: m.some((l) => l.type === 'regenerate'),
          };
        },
        getToolOperationState: (a, f, y) => {
          const h = j.getState(),
            m = i[a],
            l = m ? (m[f] ?? !1) : !1,
            C = k.isMessageInToolCalling(a)(h);
          return !l && !C ? rt : { isInvoking: C, isStreaming: l };
        },
        isAIGenerating: s,
        isInputLoading: p,
        sendMessageError: d,
      }),
      [n, o, i, s, p, d],
    );
  },
  Sn = {
    root: {
      id: 'root',
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          id: '42',
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
      ],
      direction: null,
    },
  };
export { Vt as C, Sn as E, _t as F, ye as H, vn as R, hn as c, Cn as u };
