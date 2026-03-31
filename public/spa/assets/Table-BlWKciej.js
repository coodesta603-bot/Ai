import { r as s, R as oe } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  t as Zo,
  v as at,
  o as Jo,
  h as it,
  b as tt,
  F as Et,
  s as po,
  O as Qo,
  I as Yn,
  c as W,
  Y as mo,
  P as qr,
  e as Zn,
  w as pn,
  a as Ur,
  C as Xr,
  E as Gr,
  K as Yr,
  u as F,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  gM as Zr,
  J as Jr,
  cL as Jn,
  fP as Qr,
  iL as ho,
  iM as go,
  cV as Jt,
  iN as er,
  iO as tr,
  ct as Ie,
  dq as Qn,
  dH as es,
  bX as ts,
  bh as Ze,
  cn as ns,
  b8 as nr,
  b9 as or,
  cm as os,
  ba as eo,
  bP as rs,
  cr as yo,
  bb as rr,
  bm as rn,
  bO as ss,
  fD as ls,
  be as sr,
  dl as lr,
  eE as as,
  bL as ar,
  aG as bo,
  cs as ir,
  a5 as xo,
  cl as mn,
  gN as is,
  bW as cs,
  bN as Mt,
  cv as ds,
  bc as us,
  bS as fs,
  cw as ps,
  aj as ms,
  cK as hs,
} from './index-C8UyLGsD.js';
import { C as Qt, g as gs } from './index-BOZ0hr8D.js';
import { D as cr } from './index-BHffy9NV.js';
import { R as dr } from './index-B0kjmwCf.js';
import { s as ys } from './scrollTo-DrqiKkdE.js';
import { l as Co } from '../i18n/i18n-en-US-DgOT8d-N.js';
import { P as bs } from './Pagination-Cg0T9GpR.js';
import { S as xs } from './index-Bc7JilPY.js';
import { M as Cs, O as Ss } from './index-DeBHMb7c.js';
import { e as ur, T as So } from './index-BSuyBMRZ.js';
import { I as ws } from './Input-BIU8BRU1.js';
const vs = (n) => {
    const [e, t] = s.useState(null);
    return [
      s.useCallback(
        (r, l, a) => {
          const i = e ?? r,
            d = Math.min(i || 0, r),
            c = Math.max(i || 0, r),
            u = l.slice(d, c + 1).map(n),
            p = u.some((m) => !a.has(m)),
            f = [];
          return (
            u.forEach((m) => {
              p ? (a.has(m) || f.push(m), a.add(m)) : (a.delete(m), f.push(m));
            }),
            t(p ? c : null),
            f
          );
        },
        [e],
      ),
      t,
    ];
  },
  Es = (n, e) => (
    (n._antProxy = n._antProxy || {}),
    Object.keys(e).forEach((t) => {
      if (!(t in n._antProxy)) {
        const o = n[t];
        ((n._antProxy[t] = o), (n[t] = e[t]));
      }
    }),
    n
  ),
  $s = (n, e) =>
    s.useImperativeHandle(n, () => {
      const t = e(),
        { nativeElement: o } = t;
      return typeof Proxy < 'u'
        ? new Proxy(o, {
            get(r, l) {
              return t[l] ? t[l] : Reflect.get(r, l);
            },
          })
        : Es(o, t);
    }),
  Ns = (n) => {
    const e = s.useRef(n),
      [, t] = Zr();
    return [
      () => e.current,
      (o) => {
        ((e.current = o), t());
      },
    ];
  };
function Me(n, e) {
  return n[e];
}
function fr(n, e) {
  return `${n}-${e}`;
}
function ks(n) {
  return n && n.type && n.type.isTreeNode;
}
function Ft(n, e) {
  return n ?? e;
}
function $t(n) {
  const { title: e, _title: t, key: o, children: r } = n || {},
    l = e || 'title';
  return { title: l, _title: t || [l], key: o || 'key', children: r || 'children' };
}
function pr(n) {
  function e(t) {
    return Zo(t)
      .map((r) => {
        if (!ks(r)) return (at(!r, 'Tree/TreeNode can only accept TreeNode as children.'), null);
        const { key: l } = r,
          { children: a, ...i } = r.props,
          d = { key: l, ...i },
          c = e(a);
        return (c.length && (d.children = c), d);
      })
      .filter((r) => r);
  }
  return e(n);
}
function hn(n, e, t) {
  const { _title: o, key: r, children: l } = $t(t),
    a = new Set(e === !0 ? [] : e),
    i = [];
  function d(c, u = null) {
    return c.map((p, f) => {
      const m = fr(u ? u.pos : '0', f),
        h = Ft(p[r], m);
      let b;
      for (let y = 0; y < o.length; y += 1) {
        const C = o[y];
        if (p[C] !== void 0) {
          b = p[C];
          break;
        }
      }
      const x = Object.assign(Jo(p, [...o, r, l]), {
        title: b,
        key: h,
        parent: u,
        pos: m,
        children: null,
        data: p,
        isStart: [...(u ? u.isStart : []), f === 0],
        isEnd: [...(u ? u.isEnd : []), f === c.length - 1],
      });
      return (
        i.push(x),
        e === !0 || a.has(h) ? (x.children = d(p[l] || [], x)) : (x.children = []),
        x
      );
    });
  }
  return (d(n), i);
}
function Rs(n, e, t) {
  let o = {};
  (typeof t == 'object' ? (o = t) : (o = { externalGetKey: t }), (o = o || {}));
  const { childrenPropName: r, externalGetKey: l, fieldNames: a } = o,
    { key: i, children: d } = $t(a),
    c = r || d;
  let u;
  l
    ? typeof l == 'string'
      ? (u = (f) => f[l])
      : typeof l == 'function' && (u = (f) => l(f))
    : (u = (f, m) => Ft(f[i], m));
  function p(f, m, h, b) {
    const x = f ? f[c] : n,
      y = f ? fr(h.pos, m) : '0',
      C = f ? [...b, f] : [];
    if (f) {
      const v = u(f, y),
        $ = {
          node: f,
          index: m,
          pos: y,
          key: v,
          parentPos: h.node ? h.pos : null,
          level: h.level + 1,
          nodes: C,
        };
      e($);
    }
    x &&
      x.forEach((v, $) => {
        p(v, $, { node: f, pos: y, level: h ? h.level + 1 : -1 }, C);
      });
  }
  p(null);
}
function to(
  n,
  {
    initWrapper: e,
    processEntity: t,
    onProcessFinished: o,
    externalGetKey: r,
    childrenPropName: l,
    fieldNames: a,
  } = {},
  i,
) {
  const d = r || i,
    c = {},
    u = {};
  let p = { posEntities: c, keyEntities: u };
  return (
    e && (p = e(p) || p),
    Rs(
      n,
      (f) => {
        const { node: m, index: h, pos: b, key: x, parentPos: y, level: C, nodes: v } = f,
          $ = { node: m, nodes: v, index: h, key: x, pos: b, level: C },
          w = Ft(x, b);
        ((c[b] = $),
          (u[w] = $),
          ($.parent = c[y]),
          $.parent && (($.parent.children = $.parent.children || []), $.parent.children.push($)),
          t && t($, p));
      },
      { externalGetKey: d, childrenPropName: l, fieldNames: a },
    ),
    o && o(p),
    p
  );
}
function mr(n, e, t, o) {
  return n === !1 ? !1 : n || (!e && !t) || (e && o && !t);
}
function Bt(
  n,
  {
    expandedKeys: e,
    selectedKeys: t,
    loadedKeys: o,
    loadingKeys: r,
    checkedKeys: l,
    halfCheckedKeys: a,
    dragOverNodeKey: i,
    dropPosition: d,
    keyEntities: c,
  },
) {
  const u = Me(c, n);
  return {
    eventKey: n,
    expanded: e.indexOf(n) !== -1,
    selected: t.indexOf(n) !== -1,
    loaded: o.indexOf(n) !== -1,
    loading: r.indexOf(n) !== -1,
    checked: l.indexOf(n) !== -1,
    halfChecked: a.indexOf(n) !== -1,
    pos: String(u ? u.pos : ''),
    dragOver: i === n && d === 0,
    dragOverGapTop: i === n && d === -1,
    dragOverGapBottom: i === n && d === 1,
  };
}
function Ne(n) {
  const {
      data: e,
      expanded: t,
      selected: o,
      checked: r,
      loaded: l,
      loading: a,
      halfChecked: i,
      dragOver: d,
      dragOverGapTop: c,
      dragOverGapBottom: u,
      pos: p,
      active: f,
      eventKey: m,
    } = n,
    h = {
      ...e,
      expanded: t,
      selected: o,
      checked: r,
      loaded: l,
      loading: a,
      halfChecked: i,
      dragOver: d,
      dragOverGapTop: c,
      dragOverGapBottom: u,
      pos: p,
      active: f,
      key: m,
    };
  return (
    'props' in h ||
      Object.defineProperty(h, 'props', {
        get() {
          return (
            at(
              !1,
              'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
            ),
            n
          );
        },
      }),
    h
  );
}
function hr(n, e) {
  const t = new Set();
  return (
    n.forEach((o) => {
      e.has(o) || t.add(o);
    }),
    t
  );
}
function Is(n) {
  const { disabled: e, disableCheckbox: t, checkable: o } = n || {};
  return !!(e || t) || o === !1;
}
function Ks(n, e, t, o) {
  const r = new Set(n),
    l = new Set();
  for (let i = 0; i <= t; i += 1)
    (e.get(i) || new Set()).forEach((c) => {
      const { key: u, node: p, children: f = [] } = c;
      r.has(u) &&
        !o(p) &&
        f
          .filter((m) => !o(m.node))
          .forEach((m) => {
            r.add(m.key);
          });
    });
  const a = new Set();
  for (let i = t; i >= 0; i -= 1)
    (e.get(i) || new Set()).forEach((c) => {
      const { parent: u, node: p } = c;
      if (o(p) || !c.parent || a.has(c.parent.key)) return;
      if (o(c.parent.node)) {
        a.add(u.key);
        return;
      }
      let f = !0,
        m = !1;
      ((u.children || [])
        .filter((h) => !o(h.node))
        .forEach(({ key: h }) => {
          const b = r.has(h);
          (f && !b && (f = !1), !m && (b || l.has(h)) && (m = !0));
        }),
        f && r.add(u.key),
        m && l.add(u.key),
        a.add(u.key));
    });
  return { checkedKeys: Array.from(r), halfCheckedKeys: Array.from(hr(l, r)) };
}
function Ps(n, e, t, o, r) {
  const l = new Set(n);
  let a = new Set(e);
  for (let d = 0; d <= o; d += 1)
    (t.get(d) || new Set()).forEach((u) => {
      const { key: p, node: f, children: m = [] } = u;
      !l.has(p) &&
        !a.has(p) &&
        !r(f) &&
        m
          .filter((h) => !r(h.node))
          .forEach((h) => {
            l.delete(h.key);
          });
    });
  a = new Set();
  const i = new Set();
  for (let d = o; d >= 0; d -= 1)
    (t.get(d) || new Set()).forEach((u) => {
      const { parent: p, node: f } = u;
      if (r(f) || !u.parent || i.has(u.parent.key)) return;
      if (r(u.parent.node)) {
        i.add(p.key);
        return;
      }
      let m = !0,
        h = !1;
      ((p.children || [])
        .filter((b) => !r(b.node))
        .forEach(({ key: b }) => {
          const x = l.has(b);
          (m && !x && (m = !1), !h && (x || a.has(b)) && (h = !0));
        }),
        m || l.delete(p.key),
        h && a.add(p.key),
        i.add(p.key));
    });
  return { checkedKeys: Array.from(l), halfCheckedKeys: Array.from(hr(a, l)) };
}
function wt(n, e, t, o) {
  const r = [];
  let l;
  o ? (l = o) : (l = Is);
  const a = new Set(
      n.filter((u) => {
        const p = !!Me(t, u);
        return (p || r.push(u), p);
      }),
    ),
    i = new Map();
  let d = 0;
  (Object.keys(t).forEach((u) => {
    const p = t[u],
      { level: f } = p;
    let m = i.get(f);
    (m || ((m = new Set()), i.set(f, m)), m.add(p), (d = Math.max(d, f)));
  }),
    at(
      !r.length,
      `Tree missing follow keys: ${r
        .slice(0, 100)
        .map((u) => `'${u}'`)
        .join(', ')}`,
    ));
  let c;
  return (e === !0 ? (c = Ks(a, i, d, l)) : (c = Ps(a, e.halfCheckedKeys, i, d, l)), c);
}
const st = {},
  jt = 'rc-table-internal-hook';
function no(n) {
  const e = s.createContext(void 0);
  return {
    Context: e,
    Provider: ({ value: o, children: r }) => {
      const l = s.useRef(o);
      l.current = o;
      const [a] = s.useState(() => ({ getValue: () => l.current, listeners: new Set() }));
      return (
        tt(() => {
          Jr.unstable_batchedUpdates(() => {
            a.listeners.forEach((i) => {
              i(o);
            });
          });
        }, [o]),
        s.createElement(e.Provider, { value: a }, r)
      );
    },
    defaultValue: n,
  };
}
function ke(n, e) {
  const t = it(
      typeof e == 'function'
        ? e
        : (d) => {
            if (e === void 0) return d;
            if (!Array.isArray(e)) return d[e];
            const c = {};
            return (
              e.forEach((u) => {
                c[u] = d[u];
              }),
              c
            );
          },
    ),
    o = s.useContext(n?.Context),
    { listeners: r, getValue: l } = o || {},
    a = s.useRef();
  a.current = t(o ? l() : n?.defaultValue);
  const [, i] = s.useState({});
  return (
    tt(() => {
      if (!o) return;
      function d(c) {
        const u = t(c);
        Et(a.current, u, !0) || i({});
      }
      return (
        r.add(d),
        () => {
          r.delete(d);
        }
      );
    }, [o]),
    a.current
  );
}
function Lt() {
  return (
    (Lt = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Lt.apply(this, arguments)
  );
}
function Ts() {
  const n = s.createContext(null);
  function e() {
    return s.useContext(n);
  }
  function t(r, l) {
    const a = po(r),
      i = (d, c) => {
        const u = a ? { ref: c } : {},
          p = s.useRef(0),
          f = s.useRef(d);
        return e() !== null
          ? s.createElement(r, Lt({}, d, u))
          : ((!l || l(f.current, d)) && (p.current += 1),
            (f.current = d),
            s.createElement(n.Provider, { value: p.current }, s.createElement(r, Lt({}, d, u))));
      };
    return a ? s.forwardRef(i) : i;
  }
  function o(r, l) {
    const a = po(r),
      i = (d, c) => {
        const u = a ? { ref: c } : {};
        return (e(), s.createElement(r, Lt({}, d, u)));
      };
    return s.memo(a ? s.forwardRef(i) : i, l);
  }
  return { makeImmutable: t, responseImmutable: o, useImmutableMark: e };
}
const { makeImmutable: gr, responseImmutable: Nt, useImmutableMark: Os } = Ts(),
  Pe = no(),
  yr = s.createContext({ renderWithProps: !1 }),
  Ds = 'RC_TABLE_KEY';
function Ms(n) {
  return n == null ? [] : Array.isArray(n) ? n : [n];
}
function sn(n) {
  const e = [],
    t = {};
  return (
    n.forEach((o) => {
      const { key: r, dataIndex: l } = o || {};
      let a = r || Ms(l).join('-') || Ds;
      for (; t[a]; ) a = `${a}_next`;
      ((t[a] = !0), e.push(a));
    }),
    e
  );
}
function wn(n) {
  return n != null;
}
function Bs(n) {
  return typeof n == 'number' && !Number.isNaN(n);
}
function Ls(n) {
  return n && typeof n == 'object' && !Array.isArray(n) && !s.isValidElement(n);
}
function Hs(n, e, t, o, r, l) {
  const a = s.useContext(yr),
    i = Os();
  return Qo(
    () => {
      if (wn(o)) return [o];
      const c = e == null || e === '' ? [] : Array.isArray(e) ? e : [e],
        u = Yn(n, c);
      let p = u,
        f;
      if (r) {
        const m = r(u, n, t);
        Ls(m) ? ((p = m.children), (f = m.props), (a.renderWithProps = !0)) : (p = m);
      }
      return [p, f];
    },
    [i, n, o, e, r, t],
    (c, u) => {
      if (l) {
        const [, p] = c,
          [, f] = u;
        return l(f, p);
      }
      return a.renderWithProps ? !0 : !Et(c, u, !0);
    },
  );
}
function zs(n, e, t, o) {
  const r = n + e - 1;
  return n <= o && r >= t;
}
function As(n, e) {
  return ke(Pe, (t) => [zs(n, e || 1, t.hoverStartRow, t.hoverEndRow), t.onHover]);
}
function vn() {
  return (
    (vn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    vn.apply(this, arguments)
  );
}
const Fs = ({ ellipsis: n, rowType: e, children: t }) => {
    let o;
    const r = n === !0 ? { showTitle: !0 } : n;
    return (
      r &&
        (r.showTitle || e === 'header') &&
        (typeof t == 'string' || typeof t == 'number'
          ? (o = t.toString())
          : s.isValidElement(t) && typeof t.props?.children == 'string' && (o = t.props?.children)),
      o
    );
  },
  js = (n) => {
    const {
        component: e,
        children: t,
        ellipsis: o,
        scope: r,
        prefixCls: l,
        className: a,
        style: i,
        align: d,
        record: c,
        render: u,
        dataIndex: p,
        renderIndex: f,
        shouldCellUpdate: m,
        index: h,
        rowType: b,
        colSpan: x,
        rowSpan: y,
        fixStart: C,
        fixEnd: v,
        fixedStartShadow: $,
        fixedEndShadow: w,
        offsetFixedStartShadow: D,
        offsetFixedEndShadow: g,
        zIndex: E,
        zIndexReverse: k,
        appendNode: R,
        additionalProps: S = {},
        isSticky: T,
      } = n,
      N = `${l}-cell`,
      { allColumnsFixedLeft: K, rowHoverable: B } = ke(Pe, ['allColumnsFixedLeft', 'rowHoverable']),
      [_, V] = Hs(c, p, f, t, u, m),
      X = {},
      O = typeof C == 'number' && !K,
      Q = typeof v == 'number' && !K,
      [Y, z] = ke(Pe, ({ scrollInfo: j }) => {
        if (!O && !Q) return [!1, !1];
        const [P, L] = j,
          I = (O && $ && P) - D >= 1,
          M = (Q && w && L - P) - g > 1;
        return [I, M];
      });
    (O && ((X.insetInlineStart = C), (X['--z-offset'] = E), (X['--z-offset-reverse'] = k)),
      Q && ((X.insetInlineEnd = v), (X['--z-offset'] = E), (X['--z-offset-reverse'] = k)));
    const U = V?.colSpan ?? S.colSpan ?? x ?? 1,
      Z = V?.rowSpan ?? S.rowSpan ?? y ?? 1,
      [se, q] = As(h, Z),
      he = it((j) => {
        (c && q(h, h + Z - 1), S?.onMouseEnter?.(j));
      }),
      ge = it((j) => {
        (c && q(-1, -1), S?.onMouseLeave?.(j));
      });
    if (U === 0 || Z === 0) return null;
    const ce = S.title ?? Fs({ rowType: b, ellipsis: o, children: _ }),
      le = W(
        N,
        a,
        {
          [`${N}-fix`]: O || Q,
          [`${N}-fix-start`]: O,
          [`${N}-fix-end`]: Q,
          [`${N}-fix-start-shadow`]: $,
          [`${N}-fix-start-shadow-show`]: $ && Y,
          [`${N}-fix-end-shadow`]: w,
          [`${N}-fix-end-shadow-show`]: w && z,
          [`${N}-ellipsis`]: o,
          [`${N}-with-append`]: R,
          [`${N}-fix-sticky`]: (O || Q) && T,
          [`${N}-row-hover`]: !V && se,
        },
        S.className,
        V?.className,
      ),
      ne = {};
    d && (ne.textAlign = d);
    const ve = { ...V?.style, ...X, ...ne, ...S.style, ...i };
    let A = _;
    return (
      typeof A == 'object' && !Array.isArray(A) && !s.isValidElement(A) && (A = null),
      o && ($ || w) && (A = s.createElement('span', { className: `${N}-content` }, A)),
      s.createElement(
        e,
        vn({}, V, S, {
          className: le,
          style: ve,
          title: ce,
          scope: r,
          onMouseEnter: B ? he : void 0,
          onMouseLeave: B ? ge : void 0,
          colSpan: U !== 1 ? U : null,
          rowSpan: Z !== 1 ? Z : null,
        }),
        R,
        A,
      )
    );
  },
  kt = s.memo(js);
function Xt(n) {
  return n.fixed === 'start';
}
function Gt(n) {
  return n.fixed === 'end';
}
function oo(n, e, t, o) {
  const r = t[n] || {},
    l = t[e] || {};
  let a = null,
    i = null;
  Xt(r) && Xt(l) ? (a = o.start[n]) : Gt(l) && Gt(r) && (i = o.end[e]);
  let d = !1,
    c = !1,
    u = 0,
    p = 0;
  (a !== null && ((d = !t[e + 1] || !Xt(t[e + 1])), (u = t.length * 2 - n), (p = t.length + n)),
    i !== null && ((c = !t[n - 1] || !Gt(t[n - 1])), (u = e), (p = t.length - e)));
  let f = 0,
    m = 0;
  if (d) for (let h = 0; h < n; h += 1) Xt(t[h]) || (f += o.widths[h] || 0);
  if (c) for (let h = t.length - 1; h > e; h -= 1) Gt(t[h]) || (m += o.widths[h] || 0);
  return {
    fixStart: a,
    fixEnd: i,
    fixedStartShadow: d,
    fixedEndShadow: c,
    offsetFixedStartShadow: f,
    offsetFixedEndShadow: m,
    isSticky: o.isSticky,
    zIndex: u,
    zIndexReverse: p,
  };
}
const br = s.createContext({});
function En() {
  return (
    (En = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    En.apply(this, arguments)
  );
}
const _s = (n) => {
    const { className: e, index: t, children: o, colSpan: r = 1, rowSpan: l, align: a } = n,
      { prefixCls: i } = ke(Pe, ['prefixCls']),
      { scrollColumnIndex: d, stickyOffsets: c, flattenColumns: u } = s.useContext(br),
      f = t + r - 1 + 1 === d ? r + 1 : r,
      m = s.useMemo(() => oo(t, t + f - 1, u, c), [t, f, u, c]);
    return s.createElement(
      kt,
      En(
        {
          className: e,
          index: t,
          component: 'td',
          prefixCls: i,
          record: null,
          dataIndex: null,
          align: a,
          colSpan: f,
          rowSpan: l,
          render: () => o,
        },
        m,
      ),
    );
  },
  Ws = (n) => {
    const { children: e, ...t } = n;
    return s.createElement('tr', t, e);
  },
  ln = (n) => {
    const { children: e } = n;
    return e;
  };
ln.Row = Ws;
ln.Cell = _s;
const Vs = (n) => {
    const { children: e, stickyOffsets: t, flattenColumns: o } = n,
      r = ke(Pe, 'prefixCls'),
      l = o.length - 1,
      a = o[l],
      i = s.useMemo(
        () => ({ stickyOffsets: t, flattenColumns: o, scrollColumnIndex: a?.scrollbar ? l : null }),
        [a, o, l, t],
      );
    return s.createElement(
      br.Provider,
      { value: i },
      s.createElement('tfoot', { className: `${r}-summary` }, e),
    );
  },
  Yt = Nt(Vs),
  xr = ln;
function qs(n) {
  return null;
}
function Us(n) {
  return null;
}
function Cr(n, e, t, o, r, l, a) {
  const i = l(e, a);
  n.push({ record: e, indent: t, index: a, rowKey: i });
  const d = r?.has(i);
  if (e && Array.isArray(e[o]) && d)
    for (let c = 0; c < e[o].length; c += 1) Cr(n, e[o][c], t + 1, o, r, l, c);
}
function Sr(n, e, t, o) {
  return s.useMemo(() => {
    if (t?.size) {
      const l = [];
      for (let a = 0; a < n?.length; a += 1) {
        const i = n[a];
        Cr(l, i, 0, e, t, o, a);
      }
      return l;
    }
    return n?.map((l, a) => ({ record: l, indent: 0, index: a, rowKey: o(l, a) }));
  }, [n, e, t, o]);
}
function wr(n, e, t, o) {
  const r = ke(Pe, [
      'prefixCls',
      'fixedInfoList',
      'flattenColumns',
      'expandableType',
      'expandRowByClick',
      'onTriggerExpand',
      'rowClassName',
      'expandedRowClassName',
      'indentSize',
      'expandIcon',
      'expandedRowRender',
      'expandIconColumnIndex',
      'expandedKeys',
      'childrenColumnName',
      'rowExpandable',
      'onRow',
    ]),
    {
      flattenColumns: l,
      expandableType: a,
      expandedKeys: i,
      childrenColumnName: d,
      onTriggerExpand: c,
      rowExpandable: u,
      onRow: p,
      expandRowByClick: f,
      rowClassName: m,
    } = r,
    h = a === 'nest',
    b = a === 'row' && (!u || u(n)),
    x = b || h,
    y = i && i.has(e),
    C = d && n && n[d],
    v = it(c),
    $ = p?.(n, t),
    w = $?.onClick,
    D = (k, ...R) => {
      (f && x && c(n, k), w?.(k, ...R));
    };
  let g;
  typeof m == 'string' ? (g = m) : typeof m == 'function' && (g = m(n, t, o));
  const E = sn(l);
  return {
    ...r,
    columnsKey: E,
    nestExpandable: h,
    expanded: y,
    hasNestChildren: C,
    record: n,
    onTriggerExpand: v,
    rowSupportExpand: b,
    expandable: x,
    rowProps: { ...$, className: W(g, $?.className), onClick: D },
  };
}
const vr = (n) => {
  const {
      prefixCls: e,
      children: t,
      component: o,
      cellComponent: r,
      className: l,
      expanded: a,
      colSpan: i,
      isEmpty: d,
      stickyOffset: c = 0,
    } = n,
    {
      scrollbarSize: u,
      fixHeader: p,
      fixColumn: f,
      componentWidth: m,
      horizonScroll: h,
    } = ke(Pe, ['scrollbarSize', 'fixHeader', 'fixColumn', 'componentWidth', 'horizonScroll']);
  let b = t;
  return (
    (d ? h && m : f) &&
      (b = s.createElement(
        'div',
        {
          style: {
            width: m - c - (p && !d ? u : 0),
            position: 'sticky',
            left: c,
            overflow: 'hidden',
          },
          className: `${e}-expanded-row-fixed`,
        },
        b,
      )),
    s.createElement(
      o,
      { className: l, style: { display: a ? null : 'none' } },
      s.createElement(kt, { component: r, prefixCls: e, colSpan: i }, b),
    )
  );
};
function Xs({ prefixCls: n, record: e, onExpand: t, expanded: o, expandable: r }) {
  const l = `${n}-row-expand-icon`;
  if (!r) return s.createElement('span', { className: W(l, `${n}-row-spaced`) });
  const a = (i) => {
    (t(e, i), i.stopPropagation());
  };
  return s.createElement('span', {
    className: W(l, { [`${n}-row-expanded`]: o, [`${n}-row-collapsed`]: !o }),
    onClick: a,
  });
}
function Gs(n, e, t) {
  const o = [];
  function r(l) {
    (l || []).forEach((a, i) => {
      (o.push(e(a, i)), r(a[t]));
    });
  }
  return (r(n), o);
}
function Er(n, e, t, o) {
  return typeof n == 'string' ? n : typeof n == 'function' ? n(e, t, o) : '';
}
function en() {
  return (
    (en = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    en.apply(this, arguments)
  );
}
function $r(n, e, t, o, r, l = [], a = 0) {
  const {
      record: i,
      prefixCls: d,
      columnsKey: c,
      fixedInfoList: u,
      expandIconColumnIndex: p,
      nestExpandable: f,
      indentSize: m,
      expandIcon: h,
      expanded: b,
      hasNestChildren: x,
      onTriggerExpand: y,
      expandable: C,
      expandedKeys: v,
    } = n,
    $ = c[t],
    w = u[t];
  let D;
  t === (p || 0) &&
    f &&
    (D = s.createElement(
      s.Fragment,
      null,
      s.createElement('span', {
        style: { paddingLeft: `${m * o}px` },
        className: `${d}-row-indent indent-level-${o}`,
      }),
      h({ prefixCls: d, expanded: b, expandable: x, record: i, onExpand: y }),
    ));
  const g = e.onCell?.(i, r) || {};
  if (a) {
    const { rowSpan: E = 1 } = g;
    if (C && E && t < a) {
      let k = E;
      for (let R = r; R < r + E; R += 1) {
        const S = l[R];
        v.has(S) && (k += 1);
      }
      g.rowSpan = k;
    }
  }
  return { key: $, fixedInfo: w, appendCellNode: D, additionalCellProps: g };
}
const Ys = (n) => {
    const {
        className: e,
        style: t,
        classNames: o,
        styles: r,
        record: l,
        index: a,
        renderIndex: i,
        rowKey: d,
        rowKeys: c,
        indent: u = 0,
        rowComponent: p,
        cellComponent: f,
        scopeCellComponent: m,
        expandedRowInfo: h,
      } = n,
      b = wr(l, d, a, u),
      {
        prefixCls: x,
        flattenColumns: y,
        expandedRowClassName: C,
        expandedRowRender: v,
        rowProps: $,
        expanded: w,
        rowSupportExpand: D,
      } = b,
      g = s.useRef(!1);
    g.current ||= w;
    const E = Er(C, l, a, u),
      k = s.createElement(
        p,
        en({}, $, {
          'data-row-key': d,
          'className': W(e, `${x}-row`, `${x}-row-level-${u}`, $?.className, o.row, {
            [E]: u >= 1,
          }),
          'style': { ...t, ...$?.style, ...r.row },
        }),
        y.map((S, T) => {
          const { render: N, dataIndex: K, className: B } = S,
            {
              key: _,
              fixedInfo: V,
              appendCellNode: X,
              additionalCellProps: O,
            } = $r(b, S, T, u, a, c, h?.offset);
          return s.createElement(
            kt,
            en(
              {
                className: W(B, o.cell),
                style: r.cell,
                ellipsis: S.ellipsis,
                align: S.align,
                scope: S.rowScope,
                component: S.rowScope ? m : f,
                prefixCls: x,
                key: _,
                record: l,
                index: a,
                renderIndex: i,
                dataIndex: K,
                render: N,
                shouldCellUpdate: S.shouldCellUpdate,
              },
              V,
              { appendNode: X, additionalProps: O },
            ),
          );
        }),
      );
    let R;
    if (D && (g.current || w)) {
      const S = v(l, a, u + 1, w);
      R = s.createElement(
        vr,
        {
          expanded: w,
          className: W(`${x}-expanded-row`, `${x}-expanded-row-level-${u + 1}`, E),
          prefixCls: x,
          component: p,
          cellComponent: f,
          colSpan: h ? h.colSpan : y.length,
          isEmpty: !1,
          stickyOffset: h?.sticky,
        },
        S,
      );
    }
    return s.createElement(s.Fragment, null, k, R);
  },
  Zs = Nt(Ys),
  Js = (n) => {
    const { columnKey: e, onColumnResize: t, title: o } = n,
      r = s.useRef(null);
    return (
      tt(() => {
        r.current && t(e, r.current.offsetWidth);
      }, []),
      s.createElement(
        Jn,
        { data: e },
        s.createElement(
          'td',
          {
            ref: r,
            style: { paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, height: 0 },
          },
          s.createElement(
            'div',
            { style: { height: 0, overflow: 'hidden', fontWeight: 'bold' } },
            o || ' ',
          ),
        ),
      )
    );
  },
  Qs = ({ prefixCls: n, columnsKey: e, onColumnResize: t, columns: o }) => {
    const r = s.useRef(null),
      { measureRowRender: l } = ke(Pe, ['measureRowRender']),
      a = s.createElement(
        'tr',
        {
          'aria-hidden': 'true',
          'className': `${n}-measure-row`,
          'style': { height: 0 },
          'ref': r,
        },
        s.createElement(
          Jn.Collection,
          {
            onBatchResize: (i) => {
              Qr(r.current) &&
                i.forEach(({ data: d, size: c }) => {
                  t(d, c.offsetWidth);
                });
            },
          },
          e.map((i) => {
            const c = o.find((p) => p.key === i)?.title,
              u = s.isValidElement(c) ? s.cloneElement(c, { ref: null }) : c;
            return s.createElement(Js, { key: i, columnKey: i, onColumnResize: t, title: u });
          }),
        ),
      );
    return typeof l == 'function' ? l(a) : a;
  },
  el = (n) => {
    const { data: e, measureColumnWidth: t } = n,
      {
        prefixCls: o,
        getComponent: r,
        onColumnResize: l,
        flattenColumns: a,
        getRowKey: i,
        expandedKeys: d,
        childrenColumnName: c,
        emptyNode: u,
        classNames: p,
        styles: f,
        expandedRowOffset: m = 0,
        colWidths: h,
      } = ke(Pe, [
        'prefixCls',
        'getComponent',
        'onColumnResize',
        'flattenColumns',
        'getRowKey',
        'expandedKeys',
        'childrenColumnName',
        'emptyNode',
        'classNames',
        'styles',
        'expandedRowOffset',
        'fixedInfoList',
        'colWidths',
      ]),
      { body: b = {} } = p || {},
      { body: x = {} } = f || {},
      y = Sr(e, c, d, i),
      C = s.useMemo(() => y.map((S) => S.rowKey), [y]),
      v = s.useRef({ renderWithProps: !1 }),
      $ = s.useMemo(() => {
        const S = a.length - m;
        let T = 0;
        for (let N = 0; N < m; N += 1) T += h[N] || 0;
        return { offset: m, colSpan: S, sticky: T };
      }, [a.length, m, h]),
      w = r(['body', 'wrapper'], 'tbody'),
      D = r(['body', 'row'], 'tr'),
      g = r(['body', 'cell'], 'td'),
      E = r(['body', 'cell'], 'th');
    let k;
    e.length
      ? (k = y.map((S, T) => {
          const { record: N, indent: K, index: B, rowKey: _ } = S;
          return s.createElement(Zs, {
            classNames: b,
            styles: x,
            key: _,
            rowKey: _,
            rowKeys: C,
            record: N,
            index: T,
            renderIndex: B,
            rowComponent: D,
            cellComponent: g,
            scopeCellComponent: E,
            indent: K,
            expandedRowInfo: $,
          });
        }))
      : (k = s.createElement(
          vr,
          {
            expanded: !0,
            className: `${o}-placeholder`,
            prefixCls: o,
            component: D,
            cellComponent: g,
            colSpan: a.length,
            isEmpty: !0,
          },
          u,
        ));
    const R = sn(a);
    return s.createElement(
      yr.Provider,
      { value: v.current },
      s.createElement(
        w,
        { style: x.wrapper, className: W(`${o}-tbody`, b.wrapper) },
        t && s.createElement(Qs, { prefixCls: o, columnsKey: R, onColumnResize: l, columns: a }),
        k,
      ),
    );
  },
  tl = Nt(el),
  Ht = 'RC_TABLE_INTERNAL_COL_DEFINE';
function nl(n) {
  const { expandable: e, ...t } = n;
  let o;
  return (
    'expandable' in n ? (o = { ...t, ...e }) : (o = t),
    o.showExpandColumn === !1 && (o.expandIconColumnIndex = -1),
    o
  );
}
function $n() {
  return (
    ($n = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    $n.apply(this, arguments)
  );
}
const Nr = (n) => {
  const { colWidths: e, columns: t, columCount: o } = n,
    { tableLayout: r } = ke(Pe, ['tableLayout']),
    l = [],
    a = o || t.length;
  let i = !1;
  for (let d = a - 1; d >= 0; d -= 1) {
    const c = e[d],
      u = t && t[d];
    let p, f;
    if ((u && ((p = u[Ht]), r === 'auto' && (f = u.minWidth)), c || f || p || i)) {
      const { columnType: m, ...h } = p || {};
      (l.unshift(s.createElement('col', $n({ key: d, style: { width: c, minWidth: f } }, h))),
        (i = !0));
    }
  }
  return l.length > 0 ? s.createElement('colgroup', null, l) : null;
};
function ol(n, e) {
  return s.useMemo(() => {
    const t = [];
    for (let o = 0; o < e; o += 1) {
      const r = n[o];
      if (r !== void 0) t[o] = r;
      else return null;
    }
    return t;
  }, [n.join('_'), e]);
}
const rl = s.forwardRef((n, e) => {
    const {
        className: t,
        style: o,
        noData: r,
        columns: l,
        flattenColumns: a,
        colWidths: i,
        colGroup: d,
        columCount: c,
        stickyOffsets: u,
        direction: p,
        fixHeader: f,
        stickyTopOffset: m,
        stickyBottomOffset: h,
        stickyClassName: b,
        scrollX: x,
        tableLayout: y = 'fixed',
        onScroll: C,
        maxContentScroll: v,
        children: $,
        ...w
      } = n,
      {
        prefixCls: D,
        scrollbarSize: g,
        isSticky: E,
        getComponent: k,
      } = ke(Pe, ['prefixCls', 'scrollbarSize', 'isSticky', 'getComponent']),
      R = k(['header', 'table'], 'table'),
      S = E && !f ? 0 : g,
      T = s.useRef(null),
      N = s.useCallback((Y) => {
        (mo(e, Y), mo(T, Y));
      }, []);
    s.useEffect(() => {
      function Y(U) {
        const { currentTarget: Z, deltaX: se } = U;
        if (se) {
          const { scrollLeft: q, scrollWidth: he, clientWidth: ge } = Z,
            ce = he - ge;
          let le = q + se;
          (p === 'rtl'
            ? ((le = Math.max(-ce, le)), (le = Math.min(0, le)))
            : ((le = Math.min(ce, le)), (le = Math.max(0, le))),
            C({ currentTarget: Z, scrollLeft: le }),
            U.preventDefault());
        }
      }
      const z = T.current;
      return (
        z?.addEventListener('wheel', Y, { passive: !1 }),
        () => {
          z?.removeEventListener('wheel', Y);
        }
      );
    }, []);
    const K = a[a.length - 1],
      B = {
        fixed: K ? K.fixed : null,
        scrollbar: !0,
        onHeaderCell: () => ({ className: `${D}-cell-scrollbar` }),
      },
      _ = s.useMemo(() => (S ? [...l, B] : l), [S, l]),
      V = s.useMemo(() => (S ? [...a, B] : a), [S, a]),
      X = s.useMemo(() => {
        const { start: Y, end: z } = u;
        return { ...u, start: Y, end: [...z.map((U) => U + S), 0], isSticky: E };
      }, [S, u, E]),
      O = ol(i, c),
      Q = s.useMemo(() => {
        const Y = !O || !O.length || O.every((z) => !z);
        return r || Y;
      }, [r, O]);
    return s.createElement(
      'div',
      {
        style: { overflow: 'hidden', ...(E ? { top: m, bottom: h } : {}), ...o },
        ref: N,
        className: W(t, { [b]: !!b }),
      },
      s.createElement(
        R,
        { style: { tableLayout: y, minWidth: '100%', width: x } },
        Q ? d : s.createElement(Nr, { colWidths: [...O, S], columCount: c + 1, columns: V }),
        $({ ...w, stickyOffsets: X, columns: _, flattenColumns: V }),
      ),
    );
  }),
  wo = s.memo(rl);
function tn() {
  return (
    (tn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    tn.apply(this, arguments)
  );
}
const sl = (n) => {
  const {
      cells: e,
      stickyOffsets: t,
      flattenColumns: o,
      rowComponent: r,
      cellComponent: l,
      onHeaderRow: a,
      index: i,
      classNames: d,
      styles: c,
    } = n,
    { prefixCls: u } = ke(Pe, ['prefixCls']);
  let p;
  a &&
    (p = a(
      e.map((m) => m.column),
      i,
    ));
  const f = sn(e.map((m) => m.column));
  return s.createElement(
    r,
    tn({}, p, { className: d.row, style: c.row }),
    e.map((m, h) => {
      const { column: b, colStart: x, colEnd: y, colSpan: C } = m,
        v = oo(x, y, o, t),
        $ = b?.onHeaderCell?.(b) || {};
      return s.createElement(
        kt,
        tn(
          {},
          m,
          {
            scope: b.title ? (C > 1 ? 'colgroup' : 'col') : null,
            ellipsis: b.ellipsis,
            align: b.align,
            component: l,
            prefixCls: u,
            key: f[h],
          },
          v,
          { additionalProps: $, rowType: 'header' },
        ),
      );
    }),
  );
};
function ll(n, e, t) {
  const o = [];
  function r(a, i, d = 0) {
    o[d] = o[d] || [];
    let c = i;
    return a.filter(Boolean).map((p) => {
      const f = {
        key: p.key,
        className: W(p.className, e.cell) || '',
        style: t.cell,
        children: p.title,
        column: p,
        colStart: c,
      };
      let m = 1;
      const h = p.children;
      return (
        h &&
          h.length > 0 &&
          ((m = r(h, c, d + 1).reduce((b, x) => b + x, 0)), (f.hasSubColumns = !0)),
        'colSpan' in p && ({ colSpan: m } = p),
        'rowSpan' in p && (f.rowSpan = p.rowSpan),
        (f.colSpan = m),
        (f.colEnd = f.colStart + m - 1),
        o[d].push(f),
        (c += m),
        m
      );
    });
  }
  r(n, 0);
  const l = o.length;
  for (let a = 0; a < l; a += 1)
    o[a].forEach((i) => {
      !('rowSpan' in i) && !i.hasSubColumns && (i.rowSpan = l - a);
    });
  return o;
}
const al = (n) => {
    const { stickyOffsets: e, columns: t, flattenColumns: o, onHeaderRow: r } = n,
      {
        prefixCls: l,
        getComponent: a,
        classNames: i,
        styles: d,
      } = ke(Pe, ['prefixCls', 'getComponent', 'classNames', 'styles']),
      { header: c = {} } = i || {},
      { header: u = {} } = d || {},
      p = s.useMemo(() => ll(t, c, u), [t, c, u]),
      f = a(['header', 'wrapper'], 'thead'),
      m = a(['header', 'row'], 'tr'),
      h = a(['header', 'cell'], 'th');
    return s.createElement(
      f,
      { className: W(`${l}-thead`, c.wrapper), style: u.wrapper },
      p.map((b, x) =>
        s.createElement(sl, {
          classNames: c,
          styles: u,
          key: x,
          flattenColumns: o,
          cells: b,
          stickyOffsets: e,
          rowComponent: m,
          cellComponent: h,
          onHeaderRow: r,
          index: x,
        }),
      ),
    );
  },
  vo = Nt(al);
function Eo(n, e = '') {
  return typeof e == 'number' ? e : e.endsWith('%') ? (n * parseFloat(e)) / 100 : null;
}
function il(n, e, t) {
  return s.useMemo(() => {
    if (e && e > 0) {
      let o = 0,
        r = 0;
      n.forEach((p) => {
        const f = Eo(e, p.width);
        f ? (o += f) : (r += 1);
      });
      const l = Math.max(e, t);
      let a = Math.max(l - o, r),
        i = r;
      const d = a / r;
      let c = 0;
      const u = n.map((p) => {
        const f = { ...p },
          m = Eo(e, f.width);
        if (m) f.width = m;
        else {
          const h = Math.floor(d);
          ((f.width = i === 1 ? a : h), (a -= h), (i -= 1));
        }
        return ((c += f.width), f);
      });
      if (c < l) {
        const p = l / c;
        ((a = l),
          u.forEach((f, m) => {
            const h = Math.floor(f.width * p);
            ((f.width = m === u.length - 1 ? a : h), (a -= h));
          }));
      }
      return [u, Math.max(c, l)];
    }
    return [n, e];
  }, [n, e, t]);
}
function ro(n) {
  return Zo(n)
    .filter((e) => s.isValidElement(e))
    .map((e) => {
      const { key: t, props: o } = e,
        { children: r, ...l } = o,
        a = { key: t, ...l };
      return (r && (a.children = ro(r)), a);
    });
}
function kr(n) {
  return n
    .filter((e) => e && typeof e == 'object' && !e.hidden)
    .map((e) => {
      const t = e.children;
      return t && t.length > 0 ? { ...e, children: kr(t) } : e;
    });
}
function Rr(n, e = 'key') {
  return n
    .filter((t) => t && typeof t == 'object')
    .reduce((t, o, r) => {
      const { fixed: l } = o,
        a = l === !0 || l === 'left' ? 'start' : l === 'right' ? 'end' : l,
        i = `${e}-${r}`,
        d = o.children;
      return d && d.length > 0
        ? [...t, ...Rr(d, i).map((c) => ({ ...c, fixed: c.fixed ?? a }))]
        : [...t, { key: i, ...o, fixed: a }];
    }, []);
}
function cl(
  {
    prefixCls: n,
    columns: e,
    children: t,
    expandable: o,
    expandedKeys: r,
    columnTitle: l,
    getRowKey: a,
    onTriggerExpand: i,
    expandIcon: d,
    rowExpandable: c,
    expandIconColumnIndex: u,
    expandedRowOffset: p = 0,
    direction: f,
    expandRowByClick: m,
    columnWidth: h,
    fixed: b,
    scrollWidth: x,
    clientWidth: y,
  },
  C,
) {
  const v = s.useMemo(() => {
      const k = e || ro(t) || [];
      return kr(k.slice());
    }, [e, t]),
    $ = s.useMemo(() => {
      if (o) {
        let k = v.slice();
        if (!k.includes(st)) {
          const K = u || 0,
            B = K === 0 && (b === 'right' || b === 'end') ? v.length : K;
          B >= 0 && k.splice(B, 0, st);
        }
        const R = k.indexOf(st);
        k = k.filter((K, B) => K !== st || B === R);
        const S = v[R];
        let T;
        b ? (T = b) : (T = S ? S.fixed : null);
        const N = {
          [Ht]: { className: `${n}-expand-icon-col`, columnType: 'EXPAND_COLUMN' },
          title: l,
          fixed: T,
          className: `${n}-row-expand-icon-cell`,
          width: h,
          render: (K, B, _) => {
            const V = a(B, _),
              X = r.has(V),
              O = c ? c(B) : !0,
              Q = d({ prefixCls: n, expanded: X, expandable: O, record: B, onExpand: i });
            return m ? s.createElement('span', { onClick: (Y) => Y.stopPropagation() }, Q) : Q;
          },
        };
        return k.map((K, B) => {
          const _ = K === st ? N : K;
          return B < p ? { ..._, fixed: _.fixed || 'start' } : _;
        });
      }
      return v.filter((k) => k !== st);
    }, [o, v, a, r, d, f, p]),
    w = s.useMemo(() => {
      let k = $;
      return (C && (k = C(k)), k.length || (k = [{ render: () => null }]), k);
    }, [C, $, f]),
    D = s.useMemo(() => Rr(w), [w, f, x]),
    [g, E] = il(D, x, y);
  return [w, g, E];
}
function dl(n, e, t) {
  const o = nl(n),
    {
      expandIcon: r,
      expandedRowKeys: l,
      defaultExpandedRowKeys: a,
      defaultExpandAllRows: i,
      expandedRowRender: d,
      onExpand: c,
      onExpandedRowsChange: u,
      childrenColumnName: p,
    } = o,
    f = r || Xs,
    m = p || 'children',
    h = s.useMemo(
      () =>
        d
          ? 'row'
          : (n.expandable && n.internalHooks === jt && n.expandable.__PARENT_RENDER_ICON__) ||
              e.some((v) => v && typeof v == 'object' && v[m])
            ? 'nest'
            : !1,
      [!!d, e],
    ),
    [b, x] = s.useState(() => a || (i ? Gs(e, t, m) : [])),
    y = s.useMemo(() => new Set(l || b || []), [l, b]),
    C = s.useCallback(
      (v) => {
        const $ = t(v, e.indexOf(v));
        let w;
        const D = y.has($);
        (D ? (y.delete($), (w = [...y])) : (w = [...y, $]), x(w), c && c(!D, v), u && u(w));
      },
      [t, y, e, c, u],
    );
  return [o, h, y, f, m, C];
}
function ul(n, e) {
  const t = s.useMemo(() => n.map((o, r) => oo(r, r, n, e)), [n, e]);
  return Qo(
    () => t,
    [t],
    (o, r) => !Et(o, r),
  );
}
function fl(n) {
  const e = s.useRef(n),
    [, t] = s.useState({}),
    o = s.useRef(null),
    r = s.useRef([]);
  function l(a) {
    r.current.push(a);
    const i = Promise.resolve();
    ((o.current = i),
      i.then(() => {
        if (o.current === i) {
          const d = r.current,
            c = e.current;
          ((r.current = []),
            d.forEach((u) => {
              e.current = u(e.current);
            }),
            (o.current = null),
            c !== e.current && t({}));
        }
      }));
  }
  return (
    s.useEffect(
      () => () => {
        o.current = null;
      },
      [],
    ),
    [e.current, l]
  );
}
function pl(n) {
  const e = s.useRef(null),
    t = s.useRef(null);
  function o() {
    clearTimeout(t.current);
  }
  function r(a) {
    ((e.current = a),
      o(),
      (t.current = setTimeout(() => {
        ((e.current = null), (t.current = void 0));
      }, 100)));
  }
  function l() {
    return e.current;
  }
  return (s.useEffect(() => o, []), [r, l]);
}
function ml() {
  const [n, e] = s.useState(-1),
    [t, o] = s.useState(-1),
    r = s.useCallback((l, a) => {
      (e(l), o(a));
    }, []);
  return [n, t, r];
}
const $o = qr() ? window : null;
function hl(n, e) {
  const {
      offsetHeader: t = 0,
      offsetSummary: o = 0,
      offsetScroll: r = 0,
      getContainer: l = () => $o,
    } = typeof n == 'object' ? n : {},
    a = l() || $o,
    i = !!n;
  return s.useMemo(
    () => ({
      isSticky: i,
      stickyClassName: i ? `${e}-sticky-holder` : '',
      offsetHeader: t,
      offsetSummary: o,
      offsetScroll: r,
      container: a,
    }),
    [i, r, t, o, e, a],
  );
}
function gl(n, e) {
  return s.useMemo(() => {
    const o = e.length,
      r = (i, d, c) => {
        const u = [];
        let p = 0;
        for (let f = i; f !== d; f += c) (u.push(p), e[f].fixed && (p += n[f] || 0));
        return u;
      },
      l = r(0, o, 1),
      a = r(o - 1, -1, -1).reverse();
    return { start: l, end: a, widths: n };
  }, [n, e]);
}
const No = (n) => {
  const { children: e, className: t, style: o } = n;
  return s.createElement('div', { className: t, style: o }, e);
};
function ko(n) {
  const t = Zn(n).getBoundingClientRect(),
    o = document.documentElement;
  return {
    left:
      t.left +
      (window.pageXOffset || o.scrollLeft) -
      (o.clientLeft || document.body.clientLeft || 0),
    top:
      t.top + (window.pageYOffset || o.scrollTop) - (o.clientTop || document.body.clientTop || 0),
  };
}
const Ro = 'mouseup',
  Io = 'mousemove',
  St = 'scroll',
  Ko = 'resize',
  yl = (n, e) => {
    const { scrollBodyRef: t, onScroll: o, offsetScroll: r, container: l, direction: a } = n,
      i = ke(Pe, 'prefixCls'),
      d = t.current?.scrollWidth || 0,
      c = t.current?.clientWidth || 0,
      u = d && c * (c / d),
      p = s.useRef(null),
      [f, m] = fl({ scrollLeft: 0, isHiddenScrollBar: !0 }),
      h = s.useRef({ delta: 0, x: 0 }),
      [b, x] = s.useState(!1),
      y = s.useRef(null);
    s.useEffect(
      () => () => {
        pn.cancel(y.current);
      },
      [],
    );
    const C = () => {
        x(!1);
      },
      v = (g) => {
        (g.persist(),
          (h.current.delta = g.pageX - f.scrollLeft),
          (h.current.x = 0),
          x(!0),
          g.preventDefault());
      },
      $ = (g) => {
        const { buttons: E } = g || window?.event;
        if (!b || E === 0) {
          b && x(!1);
          return;
        }
        let k = h.current.x + g.pageX - h.current.x - h.current.delta;
        const R = a === 'rtl';
        ((k = Math.max(R ? u - c : 0, Math.min(R ? 0 : c - u, k))),
          (!R || Math.abs(k) + Math.abs(u) < c) &&
            (o({ scrollLeft: (k / c) * (d + 2) }), (h.current.x = g.pageX)));
      },
      w = () => {
        (pn.cancel(y.current),
          (y.current = pn(() => {
            if (!t.current) return;
            const g = ko(t.current).top,
              E = g + t.current.offsetHeight,
              k =
                l === window
                  ? document.documentElement.scrollTop + window.innerHeight
                  : ko(l).top + l.clientHeight;
            E - ho() <= k || g >= k - r
              ? m((R) => ({ ...R, isHiddenScrollBar: !0 }))
              : m((R) => ({ ...R, isHiddenScrollBar: !1 }));
          })));
      },
      D = (g) => {
        m((E) => ({ ...E, scrollLeft: (g / d) * c || 0 }));
      };
    return (
      s.useImperativeHandle(e, () => ({ setScrollLeft: D, checkScrollBarVisible: w })),
      s.useEffect(
        () => (
          document.body.addEventListener(Ro, C, !1),
          document.body.addEventListener(Io, $, !1),
          w(),
          () => {
            (document.body.removeEventListener(Ro, C), document.body.removeEventListener(Io, $));
          }
        ),
        [u, b],
      ),
      s.useEffect(() => {
        if (t.current) {
          const g = [];
          let E = Zn(t.current);
          for (; E; ) (g.push(E), (E = E.parentElement));
          return (
            g.forEach((k) => {
              k.addEventListener(St, w, !1);
            }),
            window.addEventListener(Ko, w, !1),
            window.addEventListener(St, w, !1),
            l.addEventListener(St, w, !1),
            () => {
              (g.forEach((k) => {
                k.removeEventListener(St, w);
              }),
                window.removeEventListener(Ko, w),
                window.removeEventListener(St, w),
                l.removeEventListener(St, w));
            }
          );
        }
      }, [l]),
      s.useEffect(() => {
        f.isHiddenScrollBar ||
          m((g) => {
            const E = t.current;
            return E ? { ...g, scrollLeft: (E.scrollLeft / E.scrollWidth) * E.clientWidth } : g;
          });
      }, [f.isHiddenScrollBar]),
      d <= c || !u || f.isHiddenScrollBar
        ? null
        : s.createElement(
            'div',
            { style: { height: ho(), width: c, bottom: r }, className: `${i}-sticky-scroll` },
            s.createElement('div', {
              onMouseDown: v,
              ref: p,
              className: W(`${i}-sticky-scroll-bar`, { [`${i}-sticky-scroll-bar-active`]: b }),
              style: { width: `${u}px`, transform: `translate3d(${f.scrollLeft}px, 0, 0)` },
            }),
          )
    );
  },
  bl = s.forwardRef(yl);
function lt() {
  return (
    (lt = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    lt.apply(this, arguments)
  );
}
const Ir = 'rc-table',
  xl = [],
  Cl = {};
function Sl() {
  return 'No Data';
}
const wl = (n, e) => {
    const t = { rowKey: 'key', prefixCls: Ir, emptyText: Sl, ...n },
      {
        prefixCls: o,
        className: r,
        rowClassName: l,
        style: a,
        classNames: i,
        styles: d,
        data: c,
        rowKey: u,
        scroll: p,
        tableLayout: f,
        direction: m,
        title: h,
        footer: b,
        summary: x,
        caption: y,
        id: C,
        showHeader: v,
        components: $,
        emptyText: w,
        onRow: D,
        onHeaderRow: g,
        measureRowRender: E,
        onScroll: k,
        internalHooks: R,
        transformColumns: S,
        internalRefs: T,
        tailor: N,
        getContainerWidth: K,
        sticky: B,
        rowHoverable: _ = !0,
      } = t,
      V = c || xl,
      X = !!V.length,
      O = R === jt,
      Q = s.useCallback((G, me) => Yn($, G) || me, [$]),
      Y = s.useMemo(() => (typeof u == 'function' ? u : (G) => G && G[u]), [u]),
      z = Q(['body']),
      [U, Z, se] = ml(),
      [q, he, ge, ce, le, ne] = dl(t, V, Y),
      ve = p?.x,
      [A, j] = s.useState(0),
      [P, L, I] = cl(
        {
          ...t,
          ...q,
          expandable: !!q.expandedRowRender,
          columnTitle: q.columnTitle,
          expandedKeys: ge,
          getRowKey: Y,
          onTriggerExpand: ne,
          expandIcon: ce,
          expandIconColumnIndex: q.expandIconColumnIndex,
          direction: m,
          scrollWidth: O && N && typeof ve == 'number' ? ve : null,
          clientWidth: A,
        },
        O ? S : null,
      ),
      M = I ?? ve,
      ue = s.useMemo(() => ({ columns: P, flattenColumns: L }), [P, L]),
      xe = s.useRef(null),
      be = s.useRef(null),
      ae = s.useRef(null),
      Te = s.useRef(null);
    s.useImperativeHandle(e, () => ({
      nativeElement: xe.current,
      scrollTo: (G) => {
        if (ae.current instanceof HTMLElement) {
          const { index: me, top: De, key: Qe, offset: Ge } = G;
          if (Bs(De)) ae.current?.scrollTo({ top: De });
          else {
            const Ot = Qe ?? Y(V[me]),
              yt = ae.current.querySelector(`[data-row-key="${Ot}"]`);
            if (yt)
              if (!Ge) yt.scrollIntoView();
              else {
                const Dt = yt.offsetTop;
                ae.current.scrollTo({ top: Dt + Ge });
              }
          }
        } else ae.current?.scrollTo && ae.current.scrollTo(G);
      },
    }));
    const Ce = s.useRef(null),
      [Se, je] = s.useState(!1),
      [H, Re] = s.useState(!1),
      [We, _e] = s.useState(new Map()),
      ye = sn(L).map((G) => We.get(G)),
      fe = s.useMemo(() => ye, [ye.join('_')]),
      pe = gl(fe, L),
      te = p && wn(p.y),
      de = (p && wn(M)) || !!q.fixed,
      Ee = de && L.some(({ fixed: G }) => G),
      Ae = s.useRef(null),
      {
        isSticky: ie,
        offsetHeader: Fe,
        offsetSummary: Ve,
        offsetScroll: qe,
        stickyClassName: ut,
        container: Be,
      } = hl(B, o),
      we = s.useMemo(() => x?.(V), [x, V]),
      Le = (te || ie) && s.isValidElement(we) && we.type === ln && we.props.fixed;
    let Oe, Je, nt;
    (te && (Je = { overflowY: X ? 'scroll' : 'auto', maxHeight: p.y }),
      de &&
        ((Oe = { overflowX: 'auto' }),
        te || (Je = { overflowY: 'hidden' }),
        (nt = { width: M === !0 ? 'auto' : M, minWidth: '100%' })));
    const _t = s.useCallback((G, me) => {
        _e((De) => {
          if (De.get(G) !== me) {
            const Qe = new Map(De);
            return (Qe.set(G, me), Qe);
          }
          return De;
        });
      }, []),
      [He, Wt] = pl();
    function ft(G, me) {
      me &&
        (typeof me == 'function'
          ? me(G)
          : me.scrollLeft !== G &&
            ((me.scrollLeft = G),
            me.scrollLeft !== G &&
              setTimeout(() => {
                me.scrollLeft = G;
              }, 0)));
    }
    const [Kt, cn] = s.useState([0, 0]),
      ot = it(({ currentTarget: G, scrollLeft: me }) => {
        const De = typeof me == 'number' ? me : G.scrollLeft,
          Qe = G || Cl;
        (!Wt() || Wt() === Qe) &&
          (He(Qe),
          ft(De, be.current),
          ft(De, ae.current),
          ft(De, Ce.current),
          ft(De, Ae.current?.setScrollLeft));
        const Ge = G || be.current;
        if (Ge) {
          const Ot = O && N && typeof M == 'number' ? M : Ge.scrollWidth,
            yt = Ge.clientWidth,
            Dt = Math.abs(De);
          if (
            (cn((uo) => {
              const fo = [Dt, Ot - yt];
              return Et(uo, fo) ? uo : fo;
            }),
            Ot === yt)
          ) {
            (je(!1), Re(!1));
            return;
          }
          (je(Dt > 0), Re(Dt < Ot - yt - 1));
        }
      }),
      dn = it((G) => {
        (ot(G), k?.(G));
      }),
      Pt = () => {
        de && ae.current
          ? ot({ currentTarget: Zn(ae.current), scrollLeft: ae.current?.scrollLeft })
          : (je(!1), Re(!1));
      },
      pt = (G) => {
        Ae.current?.checkScrollBarVisible();
        let me = G ?? xe.current?.offsetWidth ?? 0;
        (O && K && xe.current && (me = K(xe.current, me) || me), me !== A && (Pt(), j(me)));
      };
    tt(() => {
      de && pt();
    }, [de]);
    const xt = s.useRef(!1);
    (s.useEffect(() => {
      xt.current && Pt();
    }, [de, c, P.length]),
      s.useEffect(() => {
        xt.current = !0;
      }, []));
    const [Ct, Vt] = s.useState(0);
    (tt(() => {
      (!N || !O) &&
        (ae.current instanceof Element ? Vt(go(ae.current).width) : Vt(go(Te.current).width));
    }, []),
      s.useEffect(() => {
        O && T && (T.body.current = ae.current);
      }));
    const un = s.useCallback(
        (G) =>
          s.createElement(
            s.Fragment,
            null,
            s.createElement(vo, G),
            Le === 'top' && s.createElement(Yt, G, we),
          ),
        [Le, we],
      ),
      fn = s.useCallback((G) => s.createElement(Yt, G, we), [we]),
      Tt = Q(['table'], 'table'),
      mt = s.useMemo(
        () =>
          f ||
          (Ee
            ? M === 'max-content'
              ? 'auto'
              : 'fixed'
            : te || ie || L.some(({ ellipsis: G }) => G)
              ? 'fixed'
              : 'auto'),
        [te, Ee, L, f, ie],
      );
    let J;
    const re = {
        colWidths: fe,
        columCount: L.length,
        stickyOffsets: pe,
        onHeaderRow: g,
        fixHeader: te,
        scroll: p,
      },
      $e = s.useMemo(() => (X ? null : typeof w == 'function' ? w() : w), [X, w]),
      Ke = s.createElement(tl, { data: V, measureColumnWidth: te || de || ie }),
      Ue = s.createElement(Nr, { colWidths: L.map(({ width: G }) => G), columns: L }),
      ht = y != null ? s.createElement('caption', { className: `${o}-caption` }, y) : void 0,
      ze = Jt(t, { data: !0 }),
      Xe = Jt(t, { aria: !0 });
    if (te || ie) {
      let G;
      typeof z == 'function'
        ? ((G = z(V, { scrollbarSize: Ct, ref: ae, onScroll: ot })),
          (re.colWidths = L.map(({ width: De }, Qe) => {
            const Ge = Qe === L.length - 1 ? De - Ct : De;
            return typeof Ge == 'number' && !Number.isNaN(Ge) ? Ge : 0;
          })))
        : (G = s.createElement(
            'div',
            { style: { ...Oe, ...Je }, onScroll: dn, ref: ae, className: `${o}-body` },
            s.createElement(
              Tt,
              lt({ style: { ...nt, tableLayout: mt } }, Xe),
              ht,
              Ue,
              Ke,
              !Le && we && s.createElement(Yt, { stickyOffsets: pe, flattenColumns: L }, we),
            ),
          ));
      const me = {
        noData: !V.length,
        maxContentScroll: de && M === 'max-content',
        ...re,
        ...ue,
        direction: m,
        stickyClassName: ut,
        scrollX: M,
        tableLayout: mt,
        onScroll: ot,
      };
      J = s.createElement(
        s.Fragment,
        null,
        v !== !1 &&
          s.createElement(
            wo,
            lt({}, me, { stickyTopOffset: Fe, className: `${o}-header`, ref: be, colGroup: Ue }),
            un,
          ),
        G,
        Le &&
          Le !== 'top' &&
          s.createElement(
            wo,
            lt({}, me, {
              stickyBottomOffset: Ve,
              className: `${o}-summary`,
              ref: Ce,
              colGroup: Ue,
            }),
            fn,
          ),
        ie &&
          ae.current &&
          ae.current instanceof Element &&
          s.createElement(bl, {
            ref: Ae,
            offsetScroll: qe,
            scrollBodyRef: ae,
            onScroll: ot,
            container: Be,
            direction: m,
          }),
      );
    } else
      J = s.createElement(
        'div',
        {
          style: { ...Oe, ...Je, ...d?.content },
          className: W(`${o}-content`, i?.content),
          onScroll: ot,
          ref: ae,
        },
        s.createElement(
          Tt,
          lt({ style: { ...nt, tableLayout: mt } }, Xe),
          ht,
          Ue,
          v !== !1 && s.createElement(vo, lt({}, re, ue)),
          Ke,
          we && s.createElement(Yt, { stickyOffsets: pe, flattenColumns: L }, we),
        ),
      );
    const qt = { ...a };
    ie && (qt['--columns-count'] = L.length);
    let gt = s.createElement(
      'div',
      lt(
        {
          className: W(o, r, {
            [`${o}-rtl`]: m === 'rtl',
            [`${o}-fix-start-shadow`]: de,
            [`${o}-fix-end-shadow`]: de,
            [`${o}-fix-start-shadow-show`]: de && Se,
            [`${o}-fix-end-shadow-show`]: de && H,
            [`${o}-layout-fixed`]: f === 'fixed',
            [`${o}-fixed-header`]: te,
            [`${o}-fixed-column`]: Ee,
            [`${o}-scroll-horizontal`]: de,
            [`${o}-has-fix-start`]: L[0]?.fixed,
            [`${o}-has-fix-end`]: L[L.length - 1]?.fixed === 'end',
          }),
          style: qt,
          id: C,
          ref: xe,
        },
        ze,
      ),
      h && s.createElement(No, { className: W(`${o}-title`, i?.title), style: d?.title }, h(V)),
      s.createElement(
        'div',
        { ref: Te, className: W(`${o}-container`, i?.section), style: d?.section },
        J,
      ),
      b && s.createElement(No, { className: W(`${o}-footer`, i?.footer), style: d?.footer }, b(V)),
    );
    de && (gt = s.createElement(Jn, { onResize: ({ offsetWidth: G }) => pt(G) }, gt));
    const Ut = ul(L, pe),
      Vr = s.useMemo(
        () => ({
          scrollX: M,
          scrollInfo: Kt,
          classNames: i,
          styles: d,
          prefixCls: o,
          getComponent: Q,
          scrollbarSize: Ct,
          direction: m,
          fixedInfoList: Ut,
          isSticky: ie,
          componentWidth: A,
          fixHeader: te,
          fixColumn: Ee,
          horizonScroll: de,
          tableLayout: mt,
          rowClassName: l,
          expandedRowClassName: q.expandedRowClassName,
          expandIcon: ce,
          expandableType: he,
          expandRowByClick: q.expandRowByClick,
          expandedRowRender: q.expandedRowRender,
          expandedRowOffset: q.expandedRowOffset,
          onTriggerExpand: ne,
          expandIconColumnIndex: q.expandIconColumnIndex,
          indentSize: q.indentSize,
          allColumnsFixedLeft: L.every((G) => G.fixed === 'start'),
          emptyNode: $e,
          columns: P,
          flattenColumns: L,
          onColumnResize: _t,
          colWidths: fe,
          hoverStartRow: U,
          hoverEndRow: Z,
          onHover: se,
          rowExpandable: q.rowExpandable,
          onRow: D,
          getRowKey: Y,
          expandedKeys: ge,
          childrenColumnName: le,
          rowHoverable: _,
          measureRowRender: E,
        }),
        [
          M,
          Kt,
          i,
          d,
          o,
          Q,
          Ct,
          m,
          Ut,
          ie,
          A,
          te,
          Ee,
          de,
          mt,
          l,
          q.expandedRowClassName,
          ce,
          he,
          q.expandRowByClick,
          q.expandedRowRender,
          q.expandedRowOffset,
          ne,
          q.expandIconColumnIndex,
          q.indentSize,
          $e,
          P,
          L,
          _t,
          fe,
          U,
          Z,
          se,
          q.rowExpandable,
          D,
          Y,
          ge,
          le,
          _,
          E,
        ],
      );
    return s.createElement(Pe.Provider, { value: Vr }, gt);
  },
  vl = s.forwardRef(wl),
  Kr = (n) => gr(vl, n),
  Rt = Kr();
Rt.EXPAND_COLUMN = st;
Rt.INTERNAL_HOOKS = jt;
Rt.Column = qs;
Rt.ColumnGroup = Us;
Rt.Summary = xr;
const so = no(null),
  Pr = no(null);
function Nn() {
  return (
    (Nn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Nn.apply(this, arguments)
  );
}
function El(n, e, t) {
  return t[n + (e || 1)] - (t[n] || 0);
}
const $l = (n) => {
  const {
      rowInfo: e,
      column: t,
      colIndex: o,
      indent: r,
      index: l,
      component: a,
      renderIndex: i,
      record: d,
      style: c,
      className: u,
      inverse: p,
      getHeight: f,
    } = n,
    { render: m, dataIndex: h, className: b, width: x } = t,
    { columnsOffset: y } = ke(Pr, ['columnsOffset']),
    { key: C, fixedInfo: v, appendCellNode: $, additionalCellProps: w } = $r(e, t, o, r, l),
    { style: D, colSpan: g = 1, rowSpan: E = 1 } = w,
    k = o - 1,
    R = El(k, g, y),
    S = g > 1 ? x - R : 0,
    T = { ...D, ...c, flex: `0 0 ${R}px`, width: `${R}px`, marginRight: S, pointerEvents: 'auto' },
    N = s.useMemo(() => (p ? E <= 1 : g === 0 || E === 0 || E > 1), [E, g, p]);
  N ? (T.visibility = 'hidden') : p && (T.height = f?.(E));
  const K = N ? () => null : m,
    B = {};
  return (
    (E === 0 || g === 0) && ((B.rowSpan = 1), (B.colSpan = 1)),
    s.createElement(
      kt,
      Nn(
        {
          className: W(b, u),
          ellipsis: t.ellipsis,
          align: t.align,
          scope: t.rowScope,
          component: a,
          prefixCls: e.prefixCls,
          key: C,
          record: d,
          index: l,
          renderIndex: i,
          dataIndex: h,
          render: K,
          shouldCellUpdate: t.shouldCellUpdate,
        },
        v,
        { appendNode: $, additionalProps: { ...w, style: T, ...B } },
      ),
    )
  );
};
function kn() {
  return (
    (kn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    kn.apply(this, arguments)
  );
}
const Nl = s.forwardRef((n, e) => {
    const {
        data: t,
        index: o,
        className: r,
        rowKey: l,
        style: a,
        extra: i,
        getHeight: d,
        ...c
      } = n,
      { record: u, indent: p, index: f } = t,
      {
        scrollX: m,
        flattenColumns: h,
        prefixCls: b,
        fixColumn: x,
        componentWidth: y,
      } = ke(Pe, ['prefixCls', 'flattenColumns', 'fixColumn', 'componentWidth', 'scrollX']),
      { getComponent: C } = ke(so, ['getComponent']),
      v = wr(u, l, o, p),
      $ = C(['body', 'row'], 'div'),
      w = C(['body', 'cell'], 'div'),
      {
        rowSupportExpand: D,
        expanded: g,
        rowProps: E,
        expandedRowRender: k,
        expandedRowClassName: R,
      } = v;
    let S;
    if (D && g) {
      const K = k(u, o, p + 1, g),
        B = Er(R, u, o, p);
      let _ = {};
      x && (_ = { style: { '--virtual-width': `${y}px` } });
      const V = `${b}-expanded-row-cell`;
      S = s.createElement(
        $,
        { className: W(`${b}-expanded-row`, `${b}-expanded-row-level-${p + 1}`, B) },
        s.createElement(
          kt,
          {
            component: w,
            prefixCls: b,
            className: W(V, { [`${V}-fixed`]: x }),
            additionalProps: _,
          },
          K,
        ),
      );
    }
    const T = { ...a, width: m };
    i && ((T.position = 'absolute'), (T.pointerEvents = 'none'));
    const N = s.createElement(
      $,
      kn({}, E, c, {
        'data-row-key': l,
        'ref': D ? null : e,
        'className': W(r, `${b}-row`, E?.className, { [`${b}-row-extra`]: i }),
        'style': { ...T, ...E?.style },
      }),
      h.map((K, B) =>
        s.createElement($l, {
          key: B,
          component: w,
          rowInfo: v,
          column: K,
          colIndex: B,
          indent: p,
          index: o,
          renderIndex: f,
          record: u,
          inverse: i,
          getHeight: d,
        }),
      ),
    );
    return D ? s.createElement('div', { ref: e }, N, S) : N;
  }),
  Po = Nt(Nl),
  kl = s.forwardRef((n, e) => {
    const { data: t, onScroll: o } = n,
      {
        flattenColumns: r,
        onColumnResize: l,
        getRowKey: a,
        expandedKeys: i,
        prefixCls: d,
        childrenColumnName: c,
        scrollX: u,
        direction: p,
      } = ke(Pe, [
        'flattenColumns',
        'onColumnResize',
        'getRowKey',
        'prefixCls',
        'expandedKeys',
        'childrenColumnName',
        'scrollX',
        'direction',
      ]),
      { sticky: f, scrollY: m, listItemHeight: h, getComponent: b, onScroll: x } = ke(so),
      y = s.useRef(null),
      C = Sr(t, c, i, a),
      v = s.useMemo(() => {
        let S = 0;
        return r.map(({ width: T, minWidth: N, key: K }) => {
          const B = Math.max(T || 0, N || 0);
          return ((S += B), [K, B, S]);
        });
      }, [r]),
      $ = s.useMemo(() => v.map((S) => S[2]), [v]);
    (s.useEffect(() => {
      v.forEach(([S, T]) => {
        l(S, T);
      });
    }, [v]),
      s.useImperativeHandle(e, () => {
        const S = {
          scrollTo: (T) => {
            const { offset: N, ...K } = T;
            N ? y.current?.scrollTo({ ...K, offset: N, align: 'top' }) : y.current?.scrollTo(T);
          },
          nativeElement: y.current?.nativeElement,
        };
        return (
          Object.defineProperty(S, 'scrollLeft', {
            get: () => y.current?.getScrollInfo().x || 0,
            set: (T) => {
              y.current?.scrollTo({ left: T });
            },
          }),
          Object.defineProperty(S, 'scrollTop', {
            get: () => y.current?.getScrollInfo().y || 0,
            set: (T) => {
              y.current?.scrollTo({ top: T });
            },
          }),
          S
        );
      }));
    const w = (S, T) => {
        const N = C[T]?.record,
          { onCell: K } = S;
        return K ? (K(N, T)?.rowSpan ?? 1) : 1;
      },
      D = (S) => {
        const { start: T, end: N, getSize: K, offsetY: B } = S;
        if (N < 0) return null;
        let _ = r.filter((z) => w(z, T) === 0),
          V = T;
        for (let z = T; z >= 0; z -= 1)
          if (((_ = _.filter((U) => w(U, z) === 0)), !_.length)) {
            V = z;
            break;
          }
        let X = r.filter((z) => w(z, N) !== 1),
          O = N;
        for (let z = N; z < C.length; z += 1)
          if (((X = X.filter((U) => w(U, z) !== 1)), !X.length)) {
            O = Math.max(z - 1, N);
            break;
          }
        const Q = [];
        for (let z = V; z <= O; z += 1) C[z] && r.some((Z) => w(Z, z) > 1) && Q.push(z);
        return Q.map((z) => {
          const U = C[z],
            Z = a(U.record, z),
            se = (he) => {
              const ge = z + he - 1,
                ce = C[ge];
              if (!ce || !ce.record) {
                const ve = Math.min(ge, C.length - 1),
                  A = C[ve],
                  j = a(A.record, ve),
                  P = K(Z, j);
                return P.bottom - P.top;
              }
              const le = a(ce.record, ge),
                ne = K(Z, le);
              return ne.bottom - ne.top;
            },
            q = K(Z);
          return s.createElement(Po, {
            key: z,
            data: U,
            rowKey: Z,
            index: z,
            style: { top: -B + q.top },
            extra: !0,
            getHeight: se,
          });
        });
      },
      g = s.useMemo(() => ({ columnsOffset: $ }), [$]),
      E = `${d}-tbody`,
      k = b(['body', 'wrapper']),
      R = {};
    return (
      f &&
        ((R.position = 'sticky'),
        (R.bottom = 0),
        typeof f == 'object' && f.offsetScroll && (R.bottom = f.offsetScroll)),
      s.createElement(
        Pr.Provider,
        { value: g },
        s.createElement(
          er,
          {
            fullHeight: !1,
            ref: y,
            prefixCls: `${E}-virtual`,
            styles: { horizontalScrollBar: R },
            className: E,
            height: m,
            itemHeight: h || 24,
            data: C,
            itemKey: (S) => a(S.record),
            component: k,
            scrollWidth: u,
            direction: p,
            onVirtualScroll: ({ x: S }) => {
              o({ currentTarget: y.current?.nativeElement, scrollLeft: S });
            },
            onScroll: x,
            extraRender: D,
          },
          (S, T, N) => {
            const K = a(S.record, T);
            return s.createElement(Po, { data: S, rowKey: K, index: T, style: N.style });
          },
        ),
      )
    );
  }),
  Rl = Nt(kl);
function Rn() {
  return (
    (Rn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Rn.apply(this, arguments)
  );
}
const Il = (n, e) => {
    const { ref: t, onScroll: o } = e;
    return s.createElement(Rl, { ref: t, data: n, onScroll: o });
  },
  Kl = (n, e) => {
    const {
      data: t,
      columns: o,
      scroll: r,
      sticky: l,
      prefixCls: a = Ir,
      className: i,
      listItemHeight: d,
      components: c,
      onScroll: u,
    } = n;
    let { x: p, y: f } = r || {};
    (typeof p != 'number' && (p = 1), typeof f != 'number' && (f = 500));
    const m = it((x, y) => Yn(c, x) || y),
      h = it(u),
      b = s.useMemo(
        () => ({ sticky: l, scrollY: f, listItemHeight: d, getComponent: m, onScroll: h }),
        [l, f, d, m, h],
      );
    return s.createElement(
      so.Provider,
      { value: b },
      s.createElement(
        Rt,
        Rn({}, n, {
          className: W(i, `${a}-virtual`),
          scroll: { ...r, x: p },
          components: { ...c, body: t?.length ? Il : void 0 },
          columns: o,
          internalHooks: jt,
          tailor: !0,
          ref: e,
        }),
      ),
    );
  },
  Pl = s.forwardRef(Kl),
  Tr = (n) => gr(Pl, n);
Tr();
const Tl = (n) => null,
  Ol = (n) => null,
  lo = s.createContext(null),
  Dl = s.createContext({}),
  Ml = ({ prefixCls: n, level: e, isStart: t, isEnd: o }) => {
    const r = `${n}-indent-unit`,
      l = [];
    for (let a = 0; a < e; a += 1)
      l.push(
        s.createElement('span', {
          key: a,
          className: W(r, { [`${r}-start`]: t[a], [`${r}-end`]: o[a] }),
        }),
      );
    return s.createElement('span', { 'aria-hidden': 'true', 'className': `${n}-indent` }, l);
  },
  Bl = s.memo(Ml);
function In() {
  return (
    (In = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    In.apply(this, arguments)
  );
}
const To = 'open',
  Oo = 'close',
  Ll = '---',
  At = (n) => {
    const {
        eventKey: e,
        className: t,
        style: o,
        dragOver: r,
        dragOverGapTop: l,
        dragOverGapBottom: a,
        isLeaf: i,
        isStart: d,
        isEnd: c,
        expanded: u,
        selected: p,
        checked: f,
        halfChecked: m,
        loading: h,
        domRef: b,
        active: x,
        data: y,
        onMouseMove: C,
        selectable: v,
        treeId: $,
        ...w
      } = n,
      D = tr($, e),
      g = oe.useContext(lo),
      { classNames: E, styles: k } = g || {},
      R = oe.useContext(Dl),
      S = oe.useRef(null),
      [T, N] = oe.useState(!1),
      K = !!(g.disabled || n.disabled || R.nodeDisabled?.(y)),
      B = oe.useMemo(
        () => (!g.checkable || n.checkable === !1 ? !1 : g.checkable),
        [g.checkable, n.checkable],
      ),
      _ = (H) => {
        K || g.onNodeSelect(H, Ne(n));
      },
      V = (H) => {
        K || !B || n.disableCheckbox || g.onNodeCheck(H, Ne(n), !f);
      },
      X = oe.useMemo(() => (typeof v == 'boolean' ? v : g.selectable), [v, g.selectable]),
      O = (H) => {
        (g.onNodeClick(H, Ne(n)), X ? _(H) : V(H));
      },
      Q = (H) => {
        g.onNodeDoubleClick(H, Ne(n));
      },
      Y = (H) => {
        g.onNodeMouseEnter(H, Ne(n));
      },
      z = (H) => {
        g.onNodeMouseLeave(H, Ne(n));
      },
      U = (H) => {
        g.onNodeContextMenu(H, Ne(n));
      },
      Z = oe.useMemo(
        () => !!(g.draggable && (!g.draggable.nodeDraggable || g.draggable.nodeDraggable(y))),
        [g.draggable, y],
      ),
      se = (H) => {
        (H.stopPropagation(), N(!0), g.onNodeDragStart(H, n));
        try {
          H.dataTransfer.setData('text/plain', '');
        } catch {}
      },
      q = (H) => {
        (H.preventDefault(), H.stopPropagation(), g.onNodeDragEnter(H, n));
      },
      he = (H) => {
        (H.preventDefault(), H.stopPropagation(), g.onNodeDragOver(H, n));
      },
      ge = (H) => {
        (H.stopPropagation(), g.onNodeDragLeave(H, n));
      },
      ce = (H) => {
        (H.stopPropagation(), N(!1), g.onNodeDragEnd(H, n));
      },
      le = (H) => {
        (H.preventDefault(), H.stopPropagation(), N(!1), g.onNodeDrop(H, n));
      },
      ne = (H) => {
        h || g.onNodeExpand(H, Ne(n));
      },
      ve = oe.useMemo(() => {
        const { children: H } = Me(g.keyEntities, e) || {};
        return !!(H || []).length;
      }, [g.keyEntities, e]),
      A = oe.useMemo(() => mr(i, g.loadData, ve, n.loaded), [i, g.loadData, ve, n.loaded]);
    oe.useEffect(() => {
      h || (typeof g.loadData == 'function' && u && !A && !n.loaded && g.onNodeLoad(Ne(n)));
    }, [h, g.loadData, g.onNodeLoad, u, A, n]);
    const j = oe.useMemo(
        () =>
          g.draggable?.icon
            ? oe.createElement(
                'span',
                { className: `${g.prefixCls}-draggable-icon` },
                g.draggable.icon,
              )
            : null,
        [g.draggable],
      ),
      P = (H) => {
        const Re = n.switcherIcon || g.switcherIcon;
        return typeof Re == 'function' ? Re({ ...n, isLeaf: H }) : Re;
      },
      L = () => {
        if (A) {
          const Re = P(!0);
          return Re !== !1
            ? oe.createElement(
                'span',
                { className: W(`${g.prefixCls}-switcher`, `${g.prefixCls}-switcher-noop`) },
                Re,
              )
            : null;
        }
        const H = P(!1);
        return H !== !1
          ? oe.createElement(
              'span',
              {
                onClick: ne,
                className: W(`${g.prefixCls}-switcher`, `${g.prefixCls}-switcher_${u ? To : Oo}`),
              },
              H,
            )
          : null;
      },
      I = oe.useMemo(() => {
        if (!B) return null;
        const H = typeof B != 'boolean' ? B : null;
        return oe.createElement(
          'span',
          {
            'className': W(`${g.prefixCls}-checkbox`, {
              [`${g.prefixCls}-checkbox-checked`]: f,
              [`${g.prefixCls}-checkbox-indeterminate`]: !f && m,
              [`${g.prefixCls}-checkbox-disabled`]: K || n.disableCheckbox,
            }),
            'onClick': V,
            'role': 'checkbox',
            'aria-checked': m ? 'mixed' : f,
            'aria-disabled': K || n.disableCheckbox,
            'aria-labelledby': D,
          },
          H,
        );
      }, [B, f, m, K, n.disableCheckbox, D]),
      M = oe.useMemo(() => (A ? null : u ? To : Oo), [A, u]),
      ue = oe.useMemo(
        () =>
          oe.createElement('span', {
            className: W(
              E?.itemIcon,
              `${g.prefixCls}-iconEle`,
              `${g.prefixCls}-icon__${M || 'docu'}`,
              { [`${g.prefixCls}-icon_loading`]: h },
            ),
            style: k?.itemIcon,
          }),
        [g.prefixCls, M, h],
      ),
      xe = oe.useMemo(() => {
        const H = !!g.draggable;
        return !n.disabled && H && g.dragOverNodeKey === e
          ? g.dropIndicatorRender({
              dropPosition: g.dropPosition,
              dropLevelOffset: g.dropLevelOffset,
              indent: g.indent,
              prefixCls: g.prefixCls,
              direction: g.direction,
            })
          : null;
      }, [
        g.dropPosition,
        g.dropLevelOffset,
        g.indent,
        g.prefixCls,
        g.direction,
        g.draggable,
        g.dragOverNodeKey,
        g.dropIndicatorRender,
      ]),
      be = oe.useMemo(() => {
        const { title: H = Ll } = n,
          Re = `${g.prefixCls}-node-content-wrapper`;
        let We;
        if (g.showIcon) {
          const ee = n.icon || g.icon;
          We = ee
            ? oe.createElement(
                'span',
                {
                  className: W(
                    E?.itemIcon,
                    `${g.prefixCls}-iconEle`,
                    `${g.prefixCls}-icon__customize`,
                  ),
                  style: k?.itemIcon,
                },
                typeof ee == 'function' ? ee(n) : ee,
              )
            : ue;
        } else g.loadData && h && (We = ue);
        let _e;
        return (
          typeof H == 'function' ? (_e = H(y)) : g.titleRender ? (_e = g.titleRender(y)) : (_e = H),
          oe.createElement(
            'span',
            {
              ref: S,
              title: typeof H == 'string' ? H : '',
              className: W(Re, `${Re}-${M || 'normal'}`, {
                [`${g.prefixCls}-node-selected`]: !K && (p || T),
              }),
              onMouseEnter: Y,
              onMouseLeave: z,
              onContextMenu: U,
              onClick: O,
              onDoubleClick: Q,
            },
            We,
            oe.createElement(
              'span',
              { className: W(`${g.prefixCls}-title`, E?.itemTitle), style: k?.itemTitle },
              _e,
            ),
            xe,
          )
        );
      }, [g.prefixCls, g.showIcon, n, g.icon, ue, g.titleRender, y, M, Y, z, U, O, Q]),
      ae = Jt(w, { aria: !0, data: !0 }),
      { level: Te } = Me(g.keyEntities, e) || {},
      Ce = c[c.length - 1],
      Se = !K && Z,
      je = g.draggingNodeKey === e;
    return oe.createElement(
      'div',
      In(
        {
          'ref': b,
          'role': 'treeitem',
          'id': D,
          'aria-expanded': A ? void 0 : u,
          'aria-selected': X && !K ? p : void 0,
          'aria-checked': B && !K ? (m ? 'mixed' : f) : void 0,
          'aria-disabled': K,
          'className': W(t, `${g.prefixCls}-treenode`, E?.item, {
            [`${g.prefixCls}-treenode-disabled`]: K,
            [`${g.prefixCls}-treenode-switcher-${u ? 'open' : 'close'}`]: !i,
            [`${g.prefixCls}-treenode-checkbox-checked`]: f,
            [`${g.prefixCls}-treenode-checkbox-indeterminate`]: m,
            [`${g.prefixCls}-treenode-selected`]: p,
            [`${g.prefixCls}-treenode-loading`]: h,
            [`${g.prefixCls}-treenode-active`]: x,
            [`${g.prefixCls}-treenode-leaf-last`]: Ce,
            [`${g.prefixCls}-treenode-draggable`]: Z,
            'dragging': je,
            'drop-target': g.dropTargetKey === e,
            'drop-container': g.dropContainerKey === e,
            'drag-over': !K && r,
            'drag-over-gap-top': !K && l,
            'drag-over-gap-bottom': !K && a,
            'filter-node': g.filterTreeNode?.(Ne(n)),
            [`${g.prefixCls}-treenode-leaf`]: A,
          }),
          'style': { ...o, ...k?.item },
          'draggable': Se,
          'onDragStart': Se ? se : void 0,
          'onDragEnter': Z ? q : void 0,
          'onDragOver': Z ? he : void 0,
          'onDragLeave': Z ? ge : void 0,
          'onDrop': Z ? le : void 0,
          'onDragEnd': Z ? ce : void 0,
          'onMouseMove': C,
        },
        ae,
      ),
      oe.createElement(Bl, { prefixCls: g.prefixCls, level: Te, isStart: d, isEnd: c }),
      j,
      L(),
      I,
      be,
    );
  };
At.isTreeNode = 1;
function Ye(n, e) {
  if (!n) return [];
  const t = n.slice(),
    o = t.indexOf(e);
  return (o >= 0 && t.splice(o, 1), t);
}
function et(n, e) {
  const t = (n || []).slice();
  return (t.indexOf(e) === -1 && t.push(e), t);
}
function ao(n) {
  return n.split('-');
}
function Hl(n, e) {
  const t = [],
    o = Me(e, n);
  function r(l = []) {
    l.forEach(({ key: a, children: i }) => {
      (t.push(a), r(i));
    });
  }
  return (r(o.children), t);
}
function zl(n) {
  if (n.parent) {
    const e = ao(n.pos);
    return Number(e[e.length - 1]) === n.parent.children.length - 1;
  }
  return !1;
}
function Al(n) {
  const e = ao(n.pos);
  return Number(e[e.length - 1]) === 0;
}
function Do(n, e, t, o, r, l, a, i, d, c) {
  const { clientX: u, clientY: p } = n,
    { top: f, height: m } = n.target.getBoundingClientRect(),
    b = ((c === 'rtl' ? -1 : 1) * ((r?.x || 0) - u) - 12) / o,
    x = d.filter((R) => i[R]?.children?.length);
  let y = Me(i, t.eventKey);
  if (p < f + m / 2) {
    const R = a.findIndex((N) => N.key === y.key),
      S = R <= 0 ? 0 : R - 1,
      T = a[S].key;
    y = Me(i, T);
  }
  const C = y.key,
    v = y,
    $ = y.key;
  let w = 0,
    D = 0;
  if (!x.includes(C)) for (let R = 0; R < b && zl(y); R += 1) ((y = y.parent), (D += 1));
  const g = e.data,
    E = y.node;
  let k = !0;
  return (
    Al(y) &&
    y.level === 0 &&
    p < f + m / 2 &&
    l({ dragNode: g, dropNode: E, dropPosition: -1 }) &&
    y.key === t.eventKey
      ? (w = -1)
      : (v.children || []).length && x.includes($)
        ? l({ dragNode: g, dropNode: E, dropPosition: 0 })
          ? (w = 0)
          : (k = !1)
        : D === 0
          ? b > -1.5
            ? l({ dragNode: g, dropNode: E, dropPosition: 1 })
              ? (w = 1)
              : (k = !1)
            : l({ dragNode: g, dropNode: E, dropPosition: 0 })
              ? (w = 0)
              : l({ dragNode: g, dropNode: E, dropPosition: 1 })
                ? (w = 1)
                : (k = !1)
          : l({ dragNode: g, dropNode: E, dropPosition: 1 })
            ? (w = 1)
            : (k = !1),
    {
      dropPosition: w,
      dropLevelOffset: D,
      dropTargetKey: y.key,
      dropTargetPos: y.pos,
      dragOverNodeKey: $,
      dropContainerKey: w === 0 ? null : y.parent?.key || null,
      dropAllowed: k,
    }
  );
}
function Mo(n, e) {
  if (!n) return;
  const { multiple: t } = e;
  return t ? n.slice() : n.length ? [n[0]] : n;
}
function gn(n) {
  if (!n) return null;
  let e;
  if (Array.isArray(n)) e = { checkedKeys: n, halfCheckedKeys: void 0 };
  else if (typeof n == 'object')
    e = { checkedKeys: n.checked || void 0, halfCheckedKeys: n.halfChecked || void 0 };
  else return (at(!1, '`checkedKeys` is not an array or an object'), null);
  return e;
}
function Kn(n, e) {
  const t = new Set();
  function o(r) {
    if (t.has(r)) return;
    const l = Me(e, r);
    if (!l) return;
    t.add(r);
    const { parent: a, node: i } = l;
    i.disabled || (a && o(a.key));
  }
  return (
    (n || []).forEach((r) => {
      o(r);
    }),
    [...t]
  );
}
const rt = {},
  Pn = 'SELECT_ALL',
  Tn = 'SELECT_INVERT',
  On = 'SELECT_NONE',
  yn = [],
  Or = (n, e, t = []) => (
    (e || []).forEach((o) => {
      (t.push(o), o && typeof o == 'object' && n in o && Or(n, o[n], t));
    }),
    t
  ),
  Fl = (n, e) => {
    const {
        preserveSelectedRowKeys: t,
        selectedRowKeys: o,
        defaultSelectedRowKeys: r,
        getCheckboxProps: l,
        getTitleCheckboxProps: a,
        onChange: i,
        onSelect: d,
        onSelectAll: c,
        onSelectInvert: u,
        onSelectNone: p,
        onSelectMultiple: f,
        columnWidth: m,
        type: h,
        selections: b,
        fixed: x,
        renderCell: y,
        hideSelectAll: C,
        checkStrictly: v = !0,
      } = e || {},
      {
        prefixCls: $,
        data: w,
        pageData: D,
        getRecordByKey: g,
        getRowKey: E,
        expandType: k,
        childrenColumnName: R,
        locale: S,
        getPopupContainer: T,
      } = n,
      N = Qn(),
      [K, B] = vs((A) => A),
      [_, V] = Ur(r || yn, o),
      X = _ ?? yn,
      O = s.useRef(new Map()),
      Q = s.useCallback(
        (A) => {
          if (t) {
            const j = new Map();
            (A.forEach((P) => {
              let L = g(P);
              (!L && O.current.has(P) && (L = O.current.get(P)), j.set(P, L));
            }),
              (O.current = j));
          }
        },
        [g, t],
      );
    s.useEffect(() => {
      Q(X);
    }, [X, Q]);
    const Y = s.useMemo(() => Or(R, D), [R, D]),
      { keyEntities: z } = s.useMemo(() => {
        if (v) return { keyEntities: null };
        let A = w;
        if (t) {
          const j = new Set(Y.map(E)),
            P = Array.from(O.current).reduce((L, [I, M]) => (j.has(I) ? L : L.concat(M)), []);
          A = [].concat(Ie(A), Ie(P));
        }
        return to(A, { externalGetKey: E, childrenPropName: R });
      }, [w, E, v, R, t, Y]),
      U = s.useMemo(() => {
        const A = new Map();
        return (
          Y.forEach((j, P) => {
            const L = E(j, P),
              I = (l ? l(j) : null) || {};
            A.set(L, I);
          }),
          A
        );
      }, [Y, E, l]),
      Z = s.useCallback(
        (A) => {
          const j = E(A);
          let P;
          return (U.has(j) ? (P = U.get(E(A))) : (P = l ? l(A) : void 0), !!P?.disabled);
        },
        [U, E],
      ),
      [se, q] = s.useMemo(() => {
        if (v) return [X, []];
        const { checkedKeys: A, halfCheckedKeys: j } = wt(X, !0, z, Z);
        return [A || [], j];
      }, [X, v, z, Z]),
      he = s.useMemo(() => {
        const A = h === 'radio' ? se.slice(0, 1) : se;
        return new Set(A);
      }, [se, h]),
      ge = s.useMemo(() => (h === 'radio' ? new Set() : new Set(q)), [q, h]);
    s.useEffect(() => {
      e || V(yn);
    }, [!!e]);
    const ce = s.useCallback(
        (A, j) => {
          let P, L;
          (Q(A),
            t
              ? ((P = A), (L = A.map((I) => O.current.get(I))))
              : ((P = []),
                (L = []),
                A.forEach((I) => {
                  const M = g(I);
                  M !== void 0 && (P.push(I), L.push(M));
                })),
            V(P),
            i?.(P, L, { type: j }));
        },
        [V, g, i, t],
      ),
      le = s.useCallback(
        (A, j, P, L) => {
          if (d) {
            const I = P.map(g);
            d(g(A), j, I, L);
          }
          ce(P, 'single');
        },
        [d, g, ce],
      ),
      ne = s.useMemo(
        () =>
          !b || C
            ? null
            : (b === !0 ? [Pn, Tn, On] : b)
                .map((j) =>
                  j === Pn
                    ? {
                        key: 'all',
                        text: S.selectionAll,
                        onSelect() {
                          ce(
                            w
                              .map((P, L) => E(P, L))
                              .filter((P) => !U.get(P)?.disabled || he.has(P)),
                            'all',
                          );
                        },
                      }
                    : j === Tn
                      ? {
                          key: 'invert',
                          text: S.selectInvert,
                          onSelect() {
                            const P = new Set(he);
                            D.forEach((I, M) => {
                              const ue = E(I, M);
                              U.get(ue)?.disabled || (P.has(ue) ? P.delete(ue) : P.add(ue));
                            });
                            const L = Array.from(P);
                            (u && (N.deprecated(!1, 'onSelectInvert', 'onChange'), u(L)),
                              ce(L, 'invert'));
                          },
                        }
                      : j === On
                        ? {
                            key: 'none',
                            text: S.selectNone,
                            onSelect() {
                              (p?.(),
                                ce(
                                  Array.from(he).filter((P) => U.get(P)?.disabled),
                                  'none',
                                ));
                            },
                          }
                        : j,
                )
                .map((j) => ({
                  ...j,
                  onSelect: (...P) => {
                    (j.onSelect?.(...P), B(null));
                  },
                })),
        [b, C, S.selectionAll, S.selectInvert, S.selectNone, U, he, w, D, E, u, ce],
      );
    return [
      s.useCallback(
        (A) => {
          if (!e) return A.filter((ee) => ee !== rt);
          let j = Ie(A);
          const P = new Set(he),
            L = Y.map(E).filter((ee) => !U.get(ee).disabled),
            I = L.every((ee) => P.has(ee)),
            M = L.some((ee) => P.has(ee)),
            ue = () => {
              const ee = [];
              I
                ? L.forEach((fe) => {
                    (P.delete(fe), ee.push(fe));
                  })
                : L.forEach((fe) => {
                    P.has(fe) || (P.add(fe), ee.push(fe));
                  });
              const ye = Array.from(P);
              (c?.(!I, ye.map(g), ee.map(g)), ce(ye, 'all'), B(null));
            };
          let xe, be;
          if (h !== 'radio') {
            let ee;
            if (ne) {
              const ie = {
                getPopupContainer: T,
                items: ne.map((Fe, Ve) => {
                  const { key: qe, text: ut, onSelect: Be } = Fe;
                  return {
                    key: qe ?? Ve,
                    onClick: () => {
                      Be?.(L);
                    },
                    label: ut,
                  };
                }),
              };
              ee = s.createElement(
                'div',
                { className: `${$}-selection-extra` },
                s.createElement(
                  cr,
                  { menu: ie, getPopupContainer: T },
                  s.createElement('span', null, s.createElement(es, null)),
                ),
              );
            }
            const ye = Y.map((ie, Fe) => {
                const Ve = E(ie, Fe),
                  qe = U.get(Ve) || {};
                return { checked: P.has(Ve), ...qe };
              }).filter(({ disabled: ie }) => ie),
              fe = !!ye.length && ye.length === Y.length,
              pe = fe && ye.every(({ checked: ie }) => ie),
              te = fe && ye.some(({ checked: ie }) => ie),
              de = a?.() || {},
              { onChange: Ee, disabled: Ae } = de;
            ((be = s.createElement(Qt, {
              'aria-label': ee ? 'Custom selection' : 'Select all',
              ...de,
              'checked': fe ? pe : !!Y.length && I,
              'indeterminate': fe ? !pe && te : !I && M,
              'onChange': (ie) => {
                (ue(), Ee?.(ie));
              },
              'disabled': Ae ?? (Y.length === 0 || fe),
              'skipGroup': !0,
            })),
              (xe = !C && s.createElement('div', { className: `${$}-selection` }, be, ee)));
          }
          let ae;
          h === 'radio'
            ? (ae = (ee, ye, fe) => {
                const pe = E(ye, fe),
                  te = P.has(pe),
                  de = U.get(pe);
                return {
                  node: s.createElement(dr, {
                    ...de,
                    checked: te,
                    onClick: (Ee) => {
                      (Ee.stopPropagation(), de?.onClick?.(Ee));
                    },
                    onChange: (Ee) => {
                      (P.has(pe) || le(pe, !0, [pe], Ee.nativeEvent), de?.onChange?.(Ee));
                    },
                  }),
                  checked: te,
                };
              })
            : (ae = (ee, ye, fe) => {
                const pe = E(ye, fe),
                  te = P.has(pe),
                  de = ge.has(pe),
                  Ee = U.get(pe);
                let Ae;
                return (
                  k === 'nest' ? (Ae = de) : (Ae = Ee?.indeterminate ?? de),
                  {
                    node: s.createElement(Qt, {
                      ...Ee,
                      indeterminate: Ae,
                      checked: te,
                      skipGroup: !0,
                      onClick: (ie) => {
                        (ie.stopPropagation(), Ee?.onClick?.(ie));
                      },
                      onChange: (ie) => {
                        const { nativeEvent: Fe } = ie,
                          { shiftKey: Ve } = Fe,
                          qe = L.indexOf(pe),
                          ut = se.some((Be) => L.includes(Be));
                        if (Ve && v && ut) {
                          const Be = K(qe, L, P),
                            we = Array.from(P);
                          (f?.(!te, we.map(g), Be.map(g)), ce(we, 'multiple'));
                        } else {
                          const Be = se;
                          if (v) {
                            const we = te ? Ye(Be, pe) : et(Be, pe);
                            le(pe, !te, we, Fe);
                          } else {
                            const we = wt([].concat(Ie(Be), [pe]), !0, z, Z),
                              { checkedKeys: Le, halfCheckedKeys: Oe } = we;
                            let Je = Le;
                            if (te) {
                              const nt = new Set(Le);
                              (nt.delete(pe),
                                (Je = wt(
                                  Array.from(nt),
                                  { halfCheckedKeys: Oe },
                                  z,
                                  Z,
                                ).checkedKeys));
                            }
                            le(pe, !te, Je, Fe);
                          }
                        }
                        (B(te ? null : qe), Ee?.onChange?.(ie));
                      },
                    }),
                    checked: te,
                  }
                );
              });
          const Te = (ee, ye, fe) => {
            const { node: pe, checked: te } = ae(ee, ye, fe);
            return y ? y(te, ye, fe, pe) : pe;
          };
          if (!j.includes(rt))
            if (j.findIndex((ee) => ee[Ht]?.columnType === 'EXPAND_COLUMN') === 0) {
              const [ee, ...ye] = j;
              j = [ee, rt].concat(Ie(ye));
            } else j = [rt].concat(Ie(j));
          const Ce = j.indexOf(rt);
          j = j.filter((ee, ye) => ee !== rt || ye === Ce);
          const Se = j[Ce - 1],
            je = j[Ce + 1];
          let H = x;
          (H === void 0 &&
            (je?.fixed !== void 0 ? (H = je.fixed) : Se?.fixed !== void 0 && (H = Se.fixed)),
            H &&
              Se &&
              Se[Ht]?.columnType === 'EXPAND_COLUMN' &&
              Se.fixed === void 0 &&
              (Se.fixed = H));
          const Re = W(`${$}-selection-col`, {
              [`${$}-selection-col-with-dropdown`]: b && h === 'checkbox',
            }),
            We = () =>
              e?.columnTitle
                ? typeof e.columnTitle == 'function'
                  ? e.columnTitle(be)
                  : e.columnTitle
                : xe,
            _e = {
              fixed: H,
              width: m,
              className: `${$}-selection-column`,
              title: We(),
              render: Te,
              onCell: e.onCell,
              align: e.align,
              [Ht]: { className: Re },
            };
          return j.map((ee) => (ee === rt ? _e : ee));
        },
        [E, Y, e, se, he, ge, m, ne, k, U, f, le, Z],
      ),
      he,
    ];
  };
function jl(n) {
  return (e) => {
    const { prefixCls: t, onExpand: o, record: r, expanded: l, expandable: a } = e,
      i = `${t}-row-expand-icon`;
    return s.createElement('button', {
      'type': 'button',
      'onClick': (d) => {
        (o(r, d), d.stopPropagation());
      },
      'className': W(i, {
        [`${i}-spaced`]: !a,
        [`${i}-expanded`]: a && l,
        [`${i}-collapsed`]: a && !l,
      }),
      'aria-label': l ? n.collapse : n.expand,
      'aria-expanded': l,
    });
  };
}
function _l(n) {
  return (t, o) => {
    const r = t.querySelector(`.${n}-container`);
    let l = o;
    if (r) {
      const a = getComputedStyle(r),
        i = Number.parseInt(a.borderLeftWidth, 10),
        d = Number.parseInt(a.borderRightWidth, 10);
      l = o - i - d;
    }
    return l;
  };
}
const ct = (n, e) =>
  'key' in n && ts(n.key)
    ? n.key
    : n.dataIndex
      ? Array.isArray(n.dataIndex)
        ? n.dataIndex.join('.')
        : n.dataIndex
      : e;
function It(n, e) {
  return e ? `${e}-${n}` : `${n}`;
}
const an = (n, e) => (typeof n == 'function' ? n(e) : n),
  Wl = (n, e) => {
    const t = an(n, e);
    return Object.prototype.toString.call(t) === '[object Object]' ? '' : t;
  };
var Vl = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z',
        },
      },
    ],
  },
  name: 'filter',
  theme: 'filled',
};
function Dn() {
  return (
    (Dn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Dn.apply(this, arguments)
  );
}
const ql = (n, e) => s.createElement(Ze, Dn({}, n, { ref: e, icon: Vl })),
  Ul = s.forwardRef(ql),
  Xl = (n) => {
    const { dropPosition: e, dropLevelOffset: t, indent: o } = n,
      r = {
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        backgroundColor: 'red',
        height: 2,
      };
    switch (e) {
      case -1:
        ((r.top = 0), (r.left = -t * o));
        break;
      case 1:
        ((r.bottom = 0), (r.left = -t * o));
        break;
      case 0:
        ((r.bottom = 0), (r.left = o));
        break;
    }
    return oe.createElement('div', { style: r });
  };
function Gl(n, e) {
  const [t, o] = s.useState(!1);
  (tt(() => {
    if (t)
      return (
        n(),
        () => {
          e();
        }
      );
  }, [t]),
    tt(
      () => (
        o(!0),
        () => {
          o(!1);
        }
      ),
      [],
    ));
}
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    zt.apply(this, arguments)
  );
}
const Yl = s.forwardRef((n, e) => {
  const {
      className: t,
      style: o,
      motion: r,
      motionNodes: l,
      motionType: a,
      onMotionStart: i,
      onMotionEnd: d,
      active: c,
      treeNodeRequiredProps: u,
      ...p
    } = n,
    [f, m] = s.useState(!0),
    { prefixCls: h } = s.useContext(lo),
    b = l && a !== 'hide';
  tt(() => {
    l && b !== f && m(b);
  }, [l]);
  const x = () => {
      l && i();
    },
    y = s.useRef(!1),
    C = () => {
      l && !y.current && ((y.current = !0), d());
    };
  Gl(x, C);
  const v = ($) => {
    b === $ && C();
  };
  return l
    ? s.createElement(
        Xr,
        zt({ ref: e, visible: f }, r, { motionAppear: a === 'show', onVisibleChanged: v }),
        ({ className: $, style: w }, D) =>
          s.createElement(
            'div',
            { ref: D, className: W(`${h}-treenode-motion`, $), style: w },
            l.map((g) => {
              const {
                data: { ...E },
                title: k,
                key: R,
                isStart: S,
                isEnd: T,
              } = g;
              delete E.children;
              const N = Bt(R, u);
              return s.createElement(
                At,
                zt({}, E, N, { title: k, active: c, data: g.data, key: R, isStart: S, isEnd: T }),
              );
            }),
          ),
      )
    : s.createElement(At, zt({ domRef: e, className: t, style: o }, p, { active: c }));
});
function Zl(n = [], e = []) {
  const t = n.length,
    o = e.length;
  if (Math.abs(t - o) !== 1) return { add: !1, key: null };
  function r(l, a) {
    const i = new Map();
    l.forEach((c) => {
      i.set(c, !0);
    });
    const d = a.filter((c) => !i.has(c));
    return d.length === 1 ? d[0] : null;
  }
  return t < o ? { add: !0, key: r(n, e) } : { add: !1, key: r(e, n) };
}
function Bo(n, e, t) {
  const o = n.findIndex((a) => a.key === t),
    r = n[o + 1],
    l = e.findIndex((a) => a.key === t);
  if (r) {
    const a = e.findIndex((i) => i.key === r.key);
    return e.slice(l + 1, a);
  }
  return e.slice(l + 1);
}
function nn() {
  return (
    (nn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    nn.apply(this, arguments)
  );
}
const bt = `RC_TREE_MOTION_${Math.random()}`,
  Mn = { key: bt },
  Dr = { key: bt, level: 0, index: 0, pos: '0', node: Mn, nodes: [Mn] },
  Lo = {
    parent: null,
    children: [],
    pos: Dr.pos,
    data: Mn,
    title: null,
    key: bt,
    isStart: [],
    isEnd: [],
  };
function Ho(n, e, t, o) {
  return e === !1 || !t ? n : n.slice(0, Math.ceil(t / o) + 1);
}
function zo(n) {
  const { key: e, pos: t } = n;
  return Ft(e, t);
}
const Jl = s.forwardRef((n, e) => {
  const {
      prefixCls: t,
      data: o,
      selectable: r,
      checkable: l,
      expandedKeys: a,
      selectedKeys: i,
      checkedKeys: d,
      loadedKeys: c,
      loadingKeys: u,
      halfCheckedKeys: p,
      keyEntities: f,
      disabled: m,
      dragging: h,
      dragOverNodeKey: b,
      dropPosition: x,
      motion: y,
      height: C,
      itemHeight: v,
      virtual: $,
      scrollWidth: w,
      focusable: D,
      activeItem: g,
      tabIndex: E,
      onKeyDown: k,
      onFocus: R,
      onBlur: S,
      onMouseDown: T,
      onMouseUp: N,
      onActiveChange: K,
      onListChangeStart: B,
      onListChangeEnd: _,
      ...V
    } = n,
    X = ns(),
    O = s.useRef(null),
    Q = s.useRef(null);
  s.useImperativeHandle(e, () => ({
    scrollTo: (P) => {
      O.current.scrollTo(P);
    },
    getIndentWidth: () => Q.current.offsetWidth,
  }));
  const [Y, z] = s.useState(a),
    [U, Z] = s.useState(o),
    [se, q] = s.useState(o),
    [he, ge] = s.useState([]),
    [ce, le] = s.useState(null),
    ne = s.useRef(o);
  ne.current = o;
  function ve() {
    const P = ne.current;
    (Z(P), q(P), ge([]), le(null), _());
  }
  (tt(() => {
    z(a);
    const P = Zl(Y, a);
    if (P.key !== null)
      if (P.add) {
        const L = U.findIndex(({ key: ue }) => ue === P.key),
          I = Ho(Bo(U, o, P.key), $, C, v),
          M = U.slice();
        (M.splice(L + 1, 0, Lo), q(M), ge(I), le('show'));
      } else {
        const L = o.findIndex(({ key: ue }) => ue === P.key),
          I = Ho(Bo(o, U, P.key), $, C, v),
          M = o.slice();
        (M.splice(L + 1, 0, Lo), q(M), ge(I), le('hide'));
      }
    else U !== o && (Z(o), q(o));
  }, [a, o]),
    s.useEffect(() => {
      h || ve();
    }, [h]));
  const A = y ? se : o,
    j = {
      expandedKeys: a,
      selectedKeys: i,
      loadedKeys: c,
      loadingKeys: u,
      checkedKeys: d,
      halfCheckedKeys: p,
      dragOverNodeKey: b,
      dropPosition: x,
      keyEntities: f,
    };
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      'div',
      {
        'className': `${t}-treenode`,
        'aria-hidden': !0,
        'style': {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          border: 0,
          padding: 0,
        },
      },
      s.createElement(
        'div',
        { className: `${t}-indent` },
        s.createElement('div', { ref: Q, className: `${t}-indent-unit` }),
      ),
    ),
    s.createElement(
      er,
      nn({}, V, {
        'data': A,
        'itemKey': zo,
        'height': C,
        'fullHeight': !1,
        'virtual': $,
        'itemHeight': v,
        'scrollWidth': w,
        'prefixCls': `${t}-list`,
        'ref': O,
        'role': 'tree',
        'tabIndex': D !== !1 && !m ? E : void 0,
        'aria-activedescendant': g ? tr(X, g.key) : void 0,
        'onKeyDown': k,
        'onFocus': R,
        'onBlur': S,
        'onMouseDown': T,
        'onMouseUp': N,
        'onVisibleChange': (P) => {
          P.every((L) => zo(L) !== bt) && ve();
        },
      }),
      (P) => {
        const {
            pos: L,
            data: { ...I },
            title: M,
            key: ue,
            isStart: xe,
            isEnd: be,
          } = P,
          ae = Ft(ue, L);
        (delete I.key, delete I.children);
        const Te = Bt(ae, j);
        return s.createElement(
          Yl,
          nn({}, I, Te, {
            title: M,
            active: !!g && ue === g.key,
            pos: L,
            data: P.data,
            isStart: xe,
            isEnd: be,
            motion: y,
            motionNodes: ue === bt ? he : null,
            motionType: ce,
            onMotionStart: B,
            onMotionEnd: ve,
            treeNodeRequiredProps: j,
            treeId: X,
            onMouseMove: () => {
              K(null);
            },
          }),
        );
      },
    ),
  );
});
function Bn() {
  return (
    (Bn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Bn.apply(this, arguments)
  );
}
const Ql = 10;
let ea = class extends s.Component {
  static defaultProps = {
    prefixCls: 'rc-tree',
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: Xl,
    allowDrop: () => !0,
    expandAction: !1,
  };
  static TreeNode = At;
  destroyed = !1;
  delayedDragEnterLogic;
  loadingRetryTimes = {};
  state = {
    keyEntities: {},
    indent: null,
    selectedKeys: [],
    checkedKeys: [],
    halfCheckedKeys: [],
    loadedKeys: [],
    loadingKeys: [],
    expandedKeys: [],
    draggingNodeKey: null,
    dragChildrenKeys: [],
    dropTargetKey: null,
    dropPosition: null,
    dropContainerKey: null,
    dropLevelOffset: null,
    dropTargetPos: null,
    dropAllowed: !0,
    dragOverNodeKey: null,
    treeData: [],
    flattenNodes: [],
    activeKey: null,
    listChanging: !1,
    prevProps: null,
    fieldNames: $t(),
  };
  dragStartMousePosition = null;
  dragNodeProps = null;
  currentMouseOverDroppableNodeKey = null;
  focusedByMouse = !1;
  listRef = s.createRef();
  componentDidMount() {
    ((this.destroyed = !1), this.onUpdated());
  }
  componentDidUpdate() {
    this.onUpdated();
  }
  onUpdated() {
    const { activeKey: e, itemScrollOffset: t = 0 } = this.props;
    e !== void 0 &&
      e !== this.state.activeKey &&
      (this.setState({ activeKey: e }), e !== null && this.scrollTo({ key: e, offset: t }));
  }
  componentWillUnmount() {
    (window.removeEventListener('dragend', this.onWindowDragEnd), (this.destroyed = !0));
  }
  static getDerivedStateFromProps(e, t) {
    const { prevProps: o } = t,
      r = { prevProps: e };
    function l(c) {
      return (!o && e.hasOwnProperty(c)) || (o && o[c] !== e[c]);
    }
    let a,
      { fieldNames: i } = t;
    if (
      (l('fieldNames') && ((i = $t(e.fieldNames)), (r.fieldNames = i)),
      l('treeData')
        ? ({ treeData: a } = e)
        : l('children') &&
          (at(!1, '`children` of Tree is deprecated. Please use `treeData` instead.'),
          (a = pr(e.children))),
      a)
    ) {
      r.treeData = a;
      const c = to(a, { fieldNames: i });
      r.keyEntities = { [bt]: Dr, ...c.keyEntities };
    }
    const d = r.keyEntities || t.keyEntities;
    if (l('expandedKeys') || (o && l('autoExpandParent')))
      r.expandedKeys =
        e.autoExpandParent || (!o && e.defaultExpandParent)
          ? Kn(e.expandedKeys, d)
          : e.expandedKeys;
    else if (!o && e.defaultExpandAll) {
      const c = { ...d };
      delete c[bt];
      const u = [];
      (Object.keys(c).forEach((p) => {
        const f = c[p];
        f.children && f.children.length && u.push(f.key);
      }),
        (r.expandedKeys = u));
    } else
      !o &&
        e.defaultExpandedKeys &&
        (r.expandedKeys =
          e.autoExpandParent || e.defaultExpandParent
            ? Kn(e.defaultExpandedKeys, d)
            : e.defaultExpandedKeys);
    if ((r.expandedKeys || delete r.expandedKeys, a || r.expandedKeys)) {
      const c = hn(a || t.treeData, r.expandedKeys || t.expandedKeys, i);
      r.flattenNodes = c;
    }
    if (
      (e.selectable &&
        (l('selectedKeys')
          ? (r.selectedKeys = Mo(e.selectedKeys, e))
          : !o && e.defaultSelectedKeys && (r.selectedKeys = Mo(e.defaultSelectedKeys, e))),
      e.checkable)
    ) {
      let c;
      if (
        (l('checkedKeys')
          ? (c = gn(e.checkedKeys) || {})
          : !o && e.defaultCheckedKeys
            ? (c = gn(e.defaultCheckedKeys) || {})
            : a &&
              (c = gn(e.checkedKeys) || {
                checkedKeys: t.checkedKeys,
                halfCheckedKeys: t.halfCheckedKeys,
              }),
        c)
      ) {
        let { checkedKeys: u = [], halfCheckedKeys: p = [] } = c;
        (e.checkStrictly || ({ checkedKeys: u, halfCheckedKeys: p } = wt(u, !0, d)),
          (r.checkedKeys = u),
          (r.halfCheckedKeys = p));
      }
    }
    return (l('loadedKeys') && (r.loadedKeys = e.loadedKeys), r);
  }
  onNodeDragStart = (e, t) => {
    const { expandedKeys: o, keyEntities: r } = this.state,
      { onDragStart: l } = this.props,
      { eventKey: a } = t;
    ((this.dragNodeProps = t), (this.dragStartMousePosition = { x: e.clientX, y: e.clientY }));
    const i = Ye(o, a);
    (this.setState({
      draggingNodeKey: a,
      dragChildrenKeys: Hl(a, r),
      indent: this.listRef.current.getIndentWidth(),
    }),
      this.setExpandedKeys(i),
      window.addEventListener('dragend', this.onWindowDragEnd),
      l?.({ event: e, node: Ne(t) }));
  };
  onNodeDragEnter = (e, t) => {
    const {
        expandedKeys: o,
        keyEntities: r,
        dragChildrenKeys: l,
        flattenNodes: a,
        indent: i,
      } = this.state,
      { onDragEnter: d, onExpand: c, allowDrop: u, direction: p } = this.props,
      { pos: f, eventKey: m } = t;
    if (
      (this.currentMouseOverDroppableNodeKey !== m && (this.currentMouseOverDroppableNodeKey = m),
      !this.dragNodeProps)
    ) {
      this.resetDragState();
      return;
    }
    const {
      dropPosition: h,
      dropLevelOffset: b,
      dropTargetKey: x,
      dropContainerKey: y,
      dropTargetPos: C,
      dropAllowed: v,
      dragOverNodeKey: $,
    } = Do(e, this.dragNodeProps, t, i, this.dragStartMousePosition, u, a, r, o, p);
    if (l.includes(x) || !v) {
      this.resetDragState();
      return;
    }
    if (
      (this.delayedDragEnterLogic || (this.delayedDragEnterLogic = {}),
      Object.keys(this.delayedDragEnterLogic).forEach((w) => {
        clearTimeout(this.delayedDragEnterLogic[w]);
      }),
      this.dragNodeProps.eventKey !== t.eventKey &&
        (e.persist(),
        (this.delayedDragEnterLogic[f] = window.setTimeout(() => {
          if (this.state.draggingNodeKey === null) return;
          let w = [...o];
          const D = Me(r, t.eventKey);
          (D && (D.children || []).length && (w = et(o, t.eventKey)),
            this.props.hasOwnProperty('expandedKeys') || this.setExpandedKeys(w),
            c?.(w, { node: Ne(t), expanded: !0, nativeEvent: e.nativeEvent }));
        }, 800))),
      this.dragNodeProps.eventKey === x && b === 0)
    ) {
      this.resetDragState();
      return;
    }
    (this.setState({
      dragOverNodeKey: $,
      dropPosition: h,
      dropLevelOffset: b,
      dropTargetKey: x,
      dropContainerKey: y,
      dropTargetPos: C,
      dropAllowed: v,
    }),
      d?.({ event: e, node: Ne(t), expandedKeys: o }));
  };
  onNodeDragOver = (e, t) => {
    const {
        dragChildrenKeys: o,
        flattenNodes: r,
        keyEntities: l,
        expandedKeys: a,
        indent: i,
      } = this.state,
      { onDragOver: d, allowDrop: c, direction: u } = this.props;
    if (!this.dragNodeProps) return;
    const {
      dropPosition: p,
      dropLevelOffset: f,
      dropTargetKey: m,
      dropContainerKey: h,
      dropTargetPos: b,
      dropAllowed: x,
      dragOverNodeKey: y,
    } = Do(e, this.dragNodeProps, t, i, this.dragStartMousePosition, c, r, l, a, u);
    o.includes(m) ||
      !x ||
      (this.dragNodeProps.eventKey === m && f === 0
        ? (this.state.dropPosition === null &&
            this.state.dropLevelOffset === null &&
            this.state.dropTargetKey === null &&
            this.state.dropContainerKey === null &&
            this.state.dropTargetPos === null &&
            this.state.dropAllowed === !1 &&
            this.state.dragOverNodeKey === null) ||
          this.resetDragState()
        : (p === this.state.dropPosition &&
            f === this.state.dropLevelOffset &&
            m === this.state.dropTargetKey &&
            h === this.state.dropContainerKey &&
            b === this.state.dropTargetPos &&
            x === this.state.dropAllowed &&
            y === this.state.dragOverNodeKey) ||
          this.setState({
            dropPosition: p,
            dropLevelOffset: f,
            dropTargetKey: m,
            dropContainerKey: h,
            dropTargetPos: b,
            dropAllowed: x,
            dragOverNodeKey: y,
          }),
      d?.({ event: e, node: Ne(t) }));
  };
  onNodeDragLeave = (e, t) => {
    this.currentMouseOverDroppableNodeKey === t.eventKey &&
      !e.currentTarget.contains(e.relatedTarget) &&
      (this.resetDragState(), (this.currentMouseOverDroppableNodeKey = null));
    const { onDragLeave: o } = this.props;
    o?.({ event: e, node: Ne(t) });
  };
  onWindowDragEnd = (e) => {
    (this.onNodeDragEnd(e, null, !0), window.removeEventListener('dragend', this.onWindowDragEnd));
  };
  onNodeDragEnd = (e, t) => {
    const { onDragEnd: o } = this.props;
    (this.setState({ dragOverNodeKey: null }),
      this.cleanDragState(),
      o?.({ event: e, node: Ne(t) }),
      (this.dragNodeProps = null),
      window.removeEventListener('dragend', this.onWindowDragEnd));
  };
  onNodeDrop = (e, t, o = !1) => {
    const {
      dragChildrenKeys: r,
      dropPosition: l,
      dropTargetKey: a,
      dropTargetPos: i,
      dropAllowed: d,
    } = this.state;
    if (!d) return;
    const { onDrop: c } = this.props;
    if ((this.setState({ dragOverNodeKey: null }), this.cleanDragState(), a === null)) return;
    const u = {
        ...Bt(a, this.getTreeNodeRequiredProps()),
        active: this.getActiveItem()?.key === a,
        data: Me(this.state.keyEntities, a).node,
      },
      p = r.includes(a);
    at(
      !p,
      "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
    );
    const f = ao(i),
      m = {
        event: e,
        node: Ne(u),
        dragNode: this.dragNodeProps ? Ne(this.dragNodeProps) : null,
        dragNodesKeys: [this.dragNodeProps.eventKey].concat(r),
        dropToGap: l !== 0,
        dropPosition: l + Number(f[f.length - 1]),
      };
    (o || c?.(m), (this.dragNodeProps = null));
  };
  resetDragState() {
    this.setState({
      dragOverNodeKey: null,
      dropPosition: null,
      dropLevelOffset: null,
      dropTargetKey: null,
      dropContainerKey: null,
      dropTargetPos: null,
      dropAllowed: !1,
    });
  }
  cleanDragState = () => {
    const { draggingNodeKey: e } = this.state;
    (e !== null &&
      this.setState({
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null,
      }),
      (this.dragStartMousePosition = null),
      (this.currentMouseOverDroppableNodeKey = null));
  };
  triggerExpandActionExpand = (e, t) => {
    const { expandedKeys: o, flattenNodes: r } = this.state,
      { expanded: l, key: a, isLeaf: i } = t;
    if (i || e.shiftKey || e.metaKey || e.ctrlKey) return;
    const d = r.filter((u) => u.key === a)[0],
      c = Ne({ ...Bt(a, this.getTreeNodeRequiredProps()), data: d.data });
    (this.setExpandedKeys(l ? Ye(o, a) : et(o, a)), this.onNodeExpand(e, c));
  };
  onNodeClick = (e, t) => {
    const { onClick: o, expandAction: r } = this.props;
    (r === 'click' && this.triggerExpandActionExpand(e, t), o?.(e, t));
  };
  onNodeDoubleClick = (e, t) => {
    const { onDoubleClick: o, expandAction: r } = this.props;
    (r === 'doubleClick' && this.triggerExpandActionExpand(e, t), o?.(e, t));
  };
  onNodeSelect = (e, t) => {
    let { selectedKeys: o } = this.state;
    const { keyEntities: r, fieldNames: l } = this.state,
      { onSelect: a, multiple: i } = this.props,
      { selected: d } = t,
      c = t[l.key],
      u = !d;
    u ? (i ? (o = et(o, c)) : (o = [c])) : (o = Ye(o, c));
    const p = o
      .map((f) => {
        const m = Me(r, f);
        return m ? m.node : null;
      })
      .filter(Boolean);
    (this.setUncontrolledState({ selectedKeys: o }),
      a?.(o, {
        event: 'select',
        selected: u,
        node: t,
        selectedNodes: p,
        nativeEvent: e.nativeEvent,
      }));
  };
  onNodeCheck = (e, t, o) => {
    const { keyEntities: r, checkedKeys: l, halfCheckedKeys: a } = this.state,
      { checkStrictly: i, onCheck: d } = this.props,
      { key: c } = t;
    let u;
    const p = { event: 'check', node: t, checked: o, nativeEvent: e.nativeEvent };
    if (i) {
      const f = o ? et(l, c) : Ye(l, c),
        m = Ye(a, c);
      ((u = { checked: f, halfChecked: m }),
        (p.checkedNodes = f
          .map((h) => Me(r, h))
          .filter(Boolean)
          .map((h) => h.node)),
        this.setUncontrolledState({ checkedKeys: f }));
    } else {
      let { checkedKeys: f, halfCheckedKeys: m } = wt([...l, c], !0, r);
      if (!o) {
        const h = new Set(f);
        (h.delete(c),
          ({ checkedKeys: f, halfCheckedKeys: m } = wt(Array.from(h), { halfCheckedKeys: m }, r)));
      }
      ((u = f),
        (p.checkedNodes = []),
        (p.checkedNodesPositions = []),
        (p.halfCheckedKeys = m),
        f.forEach((h) => {
          const b = Me(r, h);
          if (!b) return;
          const { node: x, pos: y } = b;
          (p.checkedNodes.push(x), p.checkedNodesPositions.push({ node: x, pos: y }));
        }),
        this.setUncontrolledState({ checkedKeys: f }, !1, { halfCheckedKeys: m }));
    }
    d?.(u, p);
  };
  onNodeLoad = (e) => {
    const { key: t } = e,
      { keyEntities: o } = this.state;
    if (Me(o, t)?.children?.length) return;
    const l = new Promise((a, i) => {
      this.setState(({ loadedKeys: d = [], loadingKeys: c = [] }) => {
        const { loadData: u, onLoad: p } = this.props;
        return !u || d.includes(t) || c.includes(t)
          ? null
          : (u(e)
              .then(() => {
                const { loadedKeys: m } = this.state,
                  h = et(m, t);
                (p?.(h, { event: 'load', node: e }),
                  this.setUncontrolledState({ loadedKeys: h }),
                  this.setState((b) => ({ loadingKeys: Ye(b.loadingKeys, t) })),
                  a());
              })
              .catch((m) => {
                if (
                  (this.setState((h) => ({ loadingKeys: Ye(h.loadingKeys, t) })),
                  (this.loadingRetryTimes[t] = (this.loadingRetryTimes[t] || 0) + 1),
                  this.loadingRetryTimes[t] >= Ql)
                ) {
                  const { loadedKeys: h } = this.state;
                  (at(!1, 'Retry for `loadData` many times but still failed. No more retry.'),
                    this.setUncontrolledState({ loadedKeys: et(h, t) }),
                    a());
                }
                i(m);
              }),
            { loadingKeys: et(c, t) });
      });
    });
    return (l.catch(() => {}), l);
  };
  onNodeMouseEnter = (e, t) => {
    const { onMouseEnter: o } = this.props;
    o?.({ event: e, node: t });
  };
  onNodeMouseLeave = (e, t) => {
    const { onMouseLeave: o } = this.props;
    o?.({ event: e, node: t });
  };
  onNodeContextMenu = (e, t) => {
    const { onRightClick: o } = this.props;
    o && (e.preventDefault(), o({ event: e, node: t }));
  };
  onMouseDown = (e) => {
    this.focusedByMouse = !0;
    const { onMouseDown: t } = this.props;
    t?.(e);
  };
  onMouseUp = (e) => {
    this.focusedByMouse = !1;
    const { onMouseUp: t } = this.props;
    t?.(e);
  };
  onFocus = (...e) => {
    const { onFocus: t, disabled: o } = this.props,
      { activeKey: r, selectedKeys: l, flattenNodes: a } = this.state;
    if (!this.focusedByMouse && !o && r === null) {
      const i = l.find((d) => a.some((c) => c.key === d));
      i !== void 0 ? this.onActiveChange(i) : this.onActiveChange(a?.[0]?.key || null);
    }
    t?.(...e);
  };
  onBlur = (...e) => {
    this.focusedByMouse = !1;
    const { onBlur: t } = this.props;
    (this.onActiveChange(null), t?.(...e));
  };
  getTreeNodeRequiredProps = () => {
    const {
      expandedKeys: e,
      selectedKeys: t,
      loadedKeys: o,
      loadingKeys: r,
      checkedKeys: l,
      halfCheckedKeys: a,
      dragOverNodeKey: i,
      dropPosition: d,
      keyEntities: c,
    } = this.state;
    return {
      expandedKeys: e || [],
      selectedKeys: t || [],
      loadedKeys: o || [],
      loadingKeys: r || [],
      checkedKeys: l || [],
      halfCheckedKeys: a || [],
      dragOverNodeKey: i,
      dropPosition: d,
      keyEntities: c,
    };
  };
  setExpandedKeys = (e) => {
    const { treeData: t, fieldNames: o } = this.state,
      r = hn(t, e, o);
    this.setUncontrolledState({ expandedKeys: e, flattenNodes: r }, !0);
  };
  onNodeExpand = (e, t) => {
    let { expandedKeys: o } = this.state;
    const { listChanging: r, fieldNames: l } = this.state,
      { onExpand: a, loadData: i } = this.props,
      { expanded: d } = t,
      c = t[l.key];
    if (r) return;
    const u = o.includes(c),
      p = !d;
    if (
      (at((d && u) || (!d && !u), 'Expand state not sync with index check'),
      (o = p ? et(o, c) : Ye(o, c)),
      this.setExpandedKeys(o),
      a?.(o, { node: t, expanded: p, nativeEvent: e.nativeEvent }),
      p && i)
    ) {
      const f = this.onNodeLoad(t);
      f &&
        f
          .then(() => {
            const m = hn(this.state.treeData, o, l);
            this.setUncontrolledState({ flattenNodes: m });
          })
          .catch(() => {
            const { expandedKeys: m } = this.state,
              h = Ye(m, c);
            this.setExpandedKeys(h);
          });
    }
  };
  onListChangeStart = () => {
    this.setUncontrolledState({ listChanging: !0 });
  };
  onListChangeEnd = () => {
    setTimeout(() => {
      this.setUncontrolledState({ listChanging: !1 });
    });
  };
  onActiveChange = (e) => {
    const { activeKey: t } = this.state,
      { onActiveChange: o, itemScrollOffset: r = 0 } = this.props;
    t !== e &&
      (this.setState({ activeKey: e }), e !== null && this.scrollTo({ key: e, offset: r }), o?.(e));
  };
  getActiveItem = () => {
    const { activeKey: e, flattenNodes: t } = this.state;
    return e === null ? null : t.find(({ key: o }) => o === e) || null;
  };
  offsetActiveKey = (e) => {
    const { flattenNodes: t, activeKey: o } = this.state;
    let r = t.findIndex(({ key: a }) => a === o);
    (r === -1 && e < 0 && (r = t.length), (r = (r + e + t.length) % t.length));
    const l = t[r];
    if (l) {
      const { key: a } = l;
      this.onActiveChange(a);
    } else this.onActiveChange(null);
  };
  onKeyDown = (e) => {
    const {
        activeKey: t,
        expandedKeys: o,
        checkedKeys: r,
        flattenNodes: l,
        keyEntities: a,
      } = this.state,
      { onKeyDown: i, checkable: d, selectable: c, disabled: u, loadData: p } = this.props;
    if (u) return;
    switch (e.key) {
      case 'ArrowUp': {
        (this.offsetActiveKey(-1), e.preventDefault());
        break;
      }
      case 'ArrowDown': {
        (this.offsetActiveKey(1), e.preventDefault());
        break;
      }
      case 'Home': {
        (this.onActiveChange(l?.[0]?.key), e.preventDefault());
        break;
      }
      case 'End': {
        (this.onActiveChange(l?.[l.length - 1]?.key), e.preventDefault());
        break;
      }
    }
    const f = this.getActiveItem();
    if (f && f.data) {
      const m = this.getTreeNodeRequiredProps(),
        h = Ne({ ...Bt(t, m), data: f.data, active: !0 }),
        x = !!Me(a, t)?.children?.length,
        y = !mr(f.data.isLeaf, p, x, h.loaded),
        C = d && !h.disabled && h.checkable !== !1 && !h.disableCheckbox,
        v = !d && c && !h.disabled && h.selectable !== !1;
      switch (e.key) {
        case 'ArrowLeft': {
          (y && o.includes(t)
            ? this.onNodeExpand({}, h)
            : f.parent && this.onActiveChange(f.parent.key),
            e.preventDefault());
          break;
        }
        case 'ArrowRight': {
          (y && !o.includes(t)
            ? this.onNodeExpand({}, h)
            : f.children && f.children.length && this.onActiveChange(f.children[0].key),
            e.preventDefault());
          break;
        }
        case 'Enter': {
          y
            ? (e.preventDefault(), this.onNodeExpand({}, h))
            : C
              ? r.includes(t) || (e.preventDefault(), this.onNodeCheck({}, h, !0))
              : v && !h.selected && (e.preventDefault(), this.onNodeSelect({}, h));
          break;
        }
        case ' ': {
          C
            ? (e.preventDefault(), this.onNodeCheck({}, h, !r.includes(t)))
            : v && (e.preventDefault(), this.onNodeSelect({}, h));
          break;
        }
      }
    }
    i?.(e);
  };
  setUncontrolledState = (e, t = !1, o = null) => {
    if (!this.destroyed) {
      let r = !1,
        l = !0;
      const a = {};
      (Object.keys(e).forEach((i) => {
        if (this.props.hasOwnProperty(i)) {
          l = !1;
          return;
        }
        ((r = !0), (a[i] = e[i]));
      }),
        r && (!t || l) && this.setState({ ...a, ...o }));
    }
  };
  scrollTo = (e) => {
    this.listRef.current.scrollTo(e);
  };
  render() {
    const {
        flattenNodes: e,
        keyEntities: t,
        draggingNodeKey: o,
        dropLevelOffset: r,
        dropContainerKey: l,
        dropTargetKey: a,
        dropPosition: i,
        dragOverNodeKey: d,
        indent: c,
      } = this.state,
      {
        prefixCls: u,
        className: p,
        style: f,
        styles: m,
        classNames: h,
        showLine: b,
        focusable: x,
        tabIndex: y = 0,
        selectable: C,
        showIcon: v,
        icon: $,
        switcherIcon: w,
        draggable: D,
        checkable: g,
        checkStrictly: E,
        disabled: k,
        motion: R,
        loadData: S,
        filterTreeNode: T,
        height: N,
        itemHeight: K,
        scrollWidth: B,
        virtual: _,
        titleRender: V,
        dropIndicatorRender: X,
        onContextMenu: O,
        onScroll: Q,
        direction: Y,
        rootClassName: z,
        rootStyle: U,
      } = this.props,
      Z = Jt(this.props, { aria: !0, data: !0 });
    let se;
    D &&
      (typeof D == 'object'
        ? (se = D)
        : typeof D == 'function'
          ? (se = { nodeDraggable: D })
          : (se = {}));
    const q = {
      styles: m,
      classNames: h,
      prefixCls: u,
      selectable: C,
      showIcon: v,
      icon: $,
      switcherIcon: w,
      draggable: se,
      draggingNodeKey: o,
      checkable: g,
      checkStrictly: E,
      disabled: k,
      keyEntities: t,
      dropLevelOffset: r,
      dropContainerKey: l,
      dropTargetKey: a,
      dropPosition: i,
      dragOverNodeKey: d,
      indent: c,
      direction: Y,
      dropIndicatorRender: X,
      loadData: S,
      filterTreeNode: T,
      titleRender: V,
      onNodeClick: this.onNodeClick,
      onNodeDoubleClick: this.onNodeDoubleClick,
      onNodeExpand: this.onNodeExpand,
      onNodeSelect: this.onNodeSelect,
      onNodeCheck: this.onNodeCheck,
      onNodeLoad: this.onNodeLoad,
      onNodeMouseEnter: this.onNodeMouseEnter,
      onNodeMouseLeave: this.onNodeMouseLeave,
      onNodeContextMenu: this.onNodeContextMenu,
      onNodeDragStart: this.onNodeDragStart,
      onNodeDragEnter: this.onNodeDragEnter,
      onNodeDragOver: this.onNodeDragOver,
      onNodeDragLeave: this.onNodeDragLeave,
      onNodeDragEnd: this.onNodeDragEnd,
      onNodeDrop: this.onNodeDrop,
    };
    return s.createElement(
      lo.Provider,
      { value: q },
      s.createElement(
        'div',
        { className: W(u, p, z, { [`${u}-show-line`]: b }), style: U },
        s.createElement(
          Jl,
          Bn(
            {
              ref: this.listRef,
              prefixCls: u,
              style: f,
              data: e,
              disabled: k,
              selectable: C,
              checkable: !!g,
              motion: R,
              dragging: o !== null,
              height: N,
              itemHeight: K,
              virtual: _,
              focusable: x,
              tabIndex: y,
              activeItem: this.getActiveItem(),
              onFocus: this.onFocus,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onBlur: this.onBlur,
              onKeyDown: this.onKeyDown,
              onActiveChange: this.onActiveChange,
              onListChangeStart: this.onListChangeStart,
              onListChangeEnd: this.onListChangeEnd,
              onContextMenu: O,
              onScroll: Q,
              scrollWidth: B,
            },
            this.getTreeNodeRequiredProps(),
            Z,
          ),
        ),
      ),
    );
  }
};
var ta = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z',
        },
      },
    ],
  },
  name: 'file',
  theme: 'outlined',
};
function Ln() {
  return (
    (Ln = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Ln.apply(this, arguments)
  );
}
const na = (n, e) => s.createElement(Ze, Ln({}, n, { ref: e, icon: ta })),
  Mr = s.forwardRef(na);
var oa = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z',
        },
      },
    ],
  },
  name: 'folder-open',
  theme: 'outlined',
};
function Hn() {
  return (
    (Hn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Hn.apply(this, arguments)
  );
}
const ra = (n, e) => s.createElement(Ze, Hn({}, n, { ref: e, icon: oa })),
  sa = s.forwardRef(ra);
var la = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z',
        },
      },
    ],
  },
  name: 'folder',
  theme: 'outlined',
};
function zn() {
  return (
    (zn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    zn.apply(this, arguments)
  );
}
const aa = (n, e) => s.createElement(Ze, zn({}, n, { ref: e, icon: la })),
  ia = s.forwardRef(aa);
var ca = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z',
        },
      },
    ],
  },
  name: 'holder',
  theme: 'outlined',
};
function An() {
  return (
    (An = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    An.apply(this, arguments)
  );
}
const da = (n, e) => s.createElement(Ze, An({}, n, { ref: e, icon: ca })),
  ua = s.forwardRef(da),
  fa = ({
    treeCls: n,
    treeNodeCls: e,
    directoryNodeSelectedBg: t,
    directoryNodeSelectedColor: o,
    motionDurationMid: r,
    borderRadius: l,
    controlItemBgHover: a,
  }) => ({
    [`${n}${n}-directory ${e}`]: {
      [`${n}-node-content-wrapper`]: {
        'position': 'static',
        [`&:has(${n}-drop-indicator)`]: { position: 'relative' },
        [`> *:not(${n}-drop-indicator)`]: { position: 'relative' },
        '&:hover': { background: 'transparent' },
        '&:before': {
          position: 'absolute',
          inset: 0,
          transition: `background-color ${r}`,
          content: '""',
          borderRadius: l,
        },
        '&:hover:before': { background: a },
      },
      [`${n}-switcher, ${n}-checkbox, ${n}-draggable-icon`]: { zIndex: 1 },
      '&-selected': {
        background: t,
        borderRadius: l,
        [`${n}-switcher, ${n}-draggable-icon`]: { color: o },
        [`${n}-node-content-wrapper`]: {
          'color': o,
          'background': 'transparent',
          '&, &:hover': { color: o },
          '&:before, &:hover:before': { background: t },
        },
      },
    },
  }),
  pa = new Yr('ant-tree-node-fx-do-not-use', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  ma = (n, e) => ({
    [`.${n}-switcher-icon`]: {
      display: 'inline-block',
      fontSize: 10,
      verticalAlign: 'baseline',
      svg: { transition: `transform ${e.motionDurationSlow}` },
    },
  }),
  ha = (n, e) => ({
    [`.${n}-drop-indicator`]: {
      'position': 'absolute',
      'zIndex': 1,
      'height': 2,
      'backgroundColor': e.colorPrimary,
      'borderRadius': 1,
      'pointerEvents': 'none',
      '&:after': {
        position: 'absolute',
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        border: `${F(e.lineWidthBold)} solid ${e.colorPrimary}`,
        borderRadius: '50%',
        content: '""',
      },
    },
  }),
  ga = (n, e) => {
    const {
      treeCls: t,
      treeNodeCls: o,
      treeNodePadding: r,
      titleHeight: l,
      indentSize: a,
      switcherSize: i,
      motionDurationMid: d,
      nodeSelectedBg: c,
      nodeHoverBg: u,
      colorTextQuaternary: p,
      controlItemBgActiveDisabled: f,
    } = e;
    return {
      [t]: {
        ...eo(e),
        '--rc-virtual-list-scrollbar-bg': e.colorSplit,
        'background': e.colorBgContainer,
        'borderRadius': e.borderRadius,
        'transition': `background-color ${e.motionDurationSlow}`,
        '&-rtl': { direction: 'rtl' },
        [`&${t}-rtl ${t}-switcher_close ${t}-switcher-icon svg`]: { transform: 'rotate(90deg)' },
        [`${t}-list`]: {
          '&:focus-visible': {
            outline: 'none',
            [`${o}-active ${t}-node-content-wrapper`]: { ...os(e) },
          },
        },
        [`${t}-list-holder-inner`]: { alignItems: 'flex-start' },
        [`&${t}-block-node`]: {
          [`${t}-list-holder-inner`]: {
            alignItems: 'stretch',
            [`${t}-node-content-wrapper`]: { flex: 'auto' },
            [`${o}.dragging:after`]: {
              position: 'absolute',
              inset: 0,
              border: `1px solid ${e.colorPrimary}`,
              opacity: 0,
              animationName: pa,
              animationDuration: e.motionDurationSlow,
              animationPlayState: 'running',
              animationFillMode: 'forwards',
              content: '""',
              pointerEvents: 'none',
              borderRadius: e.borderRadius,
            },
          },
        },
        [o]: {
          'display': 'flex',
          'alignItems': 'flex-start',
          'marginBottom': r,
          'lineHeight': F(l),
          'position': 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: 1,
            insetInlineStart: 0,
            width: '100%',
            top: '100%',
            height: r,
          },
          [`&-disabled ${t}-node-content-wrapper`]: {
            'color': e.colorTextDisabled,
            'cursor': 'not-allowed',
            '&:hover': { background: 'transparent' },
          },
          [`${t}-checkbox-disabled + ${t}-node-selected,&${o}-disabled${o}-selected ${t}-node-content-wrapper`]:
            { backgroundColor: f },
          [`${t}-checkbox-disabled`]: { pointerEvents: 'unset' },
          [`&:not(${o}-disabled)`]: {
            [`${t}-node-content-wrapper`]: { '&:hover': { color: e.nodeHoverColor } },
          },
          [`&-active ${t}-node-content-wrapper`]: { background: e.controlItemBgHover },
          [`&:not(${o}-disabled).filter-node ${t}-title`]: {
            color: e.colorPrimary,
            fontWeight: e.fontWeightStrong,
          },
          '&-draggable': {
            cursor: 'grab',
            [`${t}-draggable-icon`]: {
              flexShrink: 0,
              width: i,
              textAlign: 'center',
              visibility: 'visible',
              color: p,
            },
            [`&${o}-disabled ${t}-draggable-icon`]: { visibility: 'hidden' },
          },
        },
        [`${t}-indent`]: {
          'alignSelf': 'stretch',
          'whiteSpace': 'nowrap',
          'userSelect': 'none',
          '&-unit': { display: 'inline-block', width: a },
        },
        [`${t}-draggable-icon`]: { visibility: 'hidden' },
        [`${t}-switcher, ${t}-checkbox`]: {
          marginInlineEnd: e.calc(e.calc(i).sub(e.controlInteractiveSize)).div(2).equal(),
        },
        [`${t}-checkbox`]: { flexShrink: 0 },
        [`${t}-switcher`]: {
          ...ma(n, e),
          'position': 'relative',
          'flex': 'none',
          'alignSelf': 'stretch',
          'width': i,
          'textAlign': 'center',
          'cursor': 'pointer',
          'userSelect': 'none',
          'transition': `all ${e.motionDurationSlow}`,
          '&-noop': { cursor: 'unset' },
          '&:before': {
            pointerEvents: 'none',
            content: '""',
            width: i,
            height: l,
            position: 'absolute',
            left: { _skip_check_: !0, value: 0 },
            top: 0,
            borderRadius: e.borderRadius,
            transition: `all ${e.motionDurationSlow}`,
          },
          [`&:not(${t}-switcher-noop):hover:before`]: { backgroundColor: e.colorBgTextHover },
          [`&_close ${t}-switcher-icon svg`]: { transform: 'rotate(-90deg)' },
          '&-loading-icon': { color: e.colorPrimary },
          '&-leaf-line': {
            'position': 'relative',
            'zIndex': 1,
            'display': 'inline-block',
            'width': '100%',
            'height': '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.calc(i).div(2).equal(),
              bottom: e.calc(r).mul(-1).equal(),
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${e.colorBorder}`,
              content: '""',
            },
            '&:after': {
              position: 'absolute',
              width: e.calc(e.calc(i).div(2).equal()).mul(0.8).equal(),
              height: e.calc(l).div(2).equal(),
              borderBottom: `1px solid ${e.colorBorder}`,
              content: '""',
            },
          },
        },
        [`${t}-node-content-wrapper`]: {
          'position': 'relative',
          'minHeight': l,
          'paddingBlock': 0,
          'paddingInline': e.paddingXS,
          'background': 'transparent',
          'borderRadius': e.borderRadius,
          'cursor': 'pointer',
          'transition': [`all ${d}`, 'border 0s', 'line-height 0s', 'box-shadow 0s'].join(', '),
          ...ha(n, e),
          '&:hover': { backgroundColor: u },
          [`&${t}-node-selected`]: { color: e.nodeSelectedColor, backgroundColor: c },
          [`${t}-iconEle`]: {
            'display': 'inline-block',
            'width': i,
            'height': l,
            'textAlign': 'center',
            'verticalAlign': 'top',
            '&:empty': { display: 'none' },
          },
        },
        [`${t}-unselectable ${t}-node-content-wrapper:hover`]: { backgroundColor: 'transparent' },
        [`${o}.drop-container > [draggable]`]: { boxShadow: `0 0 0 2px ${e.colorPrimary}` },
        '&-show-line': {
          [`${t}-indent-unit`]: {
            'position': 'relative',
            'height': '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.calc(i).div(2).equal(),
              bottom: e.calc(r).mul(-1).equal(),
              borderInlineEnd: `1px solid ${e.colorBorder}`,
              content: '""',
            },
            '&-end:before': { display: 'none' },
          },
          [`${t}-switcher`]: {
            'background': 'transparent',
            '&-line-icon': { verticalAlign: '-0.15em' },
          },
        },
        [`${o}-leaf-last ${t}-switcher-leaf-line:before`]: {
          top: 'auto !important',
          bottom: 'auto !important',
          height: `${F(e.calc(l).div(2).equal())} !important`,
        },
      },
    };
  },
  ya = (n, e, t = !0) => {
    const o = `.${n}`,
      r = `${o}-treenode`,
      l = e.calc(e.paddingXS).div(2).equal(),
      a = or(e, { treeCls: o, treeNodeCls: r, treeNodePadding: l });
    return [ga(n, a), t && fa(a)].filter(Boolean);
  },
  ba = (n) => {
    const { controlHeightSM: e, controlItemBgHover: t, controlItemBgActive: o } = n,
      r = e;
    return {
      titleHeight: r,
      switcherSize: r,
      indentSize: r,
      nodeHoverBg: t,
      nodeHoverColor: n.colorText,
      nodeSelectedBg: o,
      nodeSelectedColor: n.colorText,
    };
  },
  xa = (n) => {
    const { colorTextLightSolid: e, colorPrimary: t } = n;
    return { ...ba(n), directoryNodeSelectedColor: e, directoryNodeSelectedBg: t };
  },
  Ca = nr(
    'Tree',
    (n, { prefixCls: e }) => [{ [n.componentCls]: gs(`${e}-checkbox`, n) }, ya(e, n), Gr(n)],
    xa,
  ),
  Ao = 4,
  Sa = (n) => {
    const {
        dropPosition: e,
        dropLevelOffset: t,
        prefixCls: o,
        indent: r,
        direction: l = 'ltr',
      } = n,
      a = l === 'ltr' ? 'left' : 'right',
      i = l === 'ltr' ? 'right' : 'left',
      d = { [a]: -t * r + Ao, [i]: 0 };
    switch (e) {
      case -1:
        d.top = -3;
        break;
      case 1:
        d.bottom = -3;
        break;
      default:
        ((d.bottom = -3), (d[a] = r + Ao));
        break;
    }
    return oe.createElement('div', { style: d, className: `${o}-drop-indicator` });
  };
var wa = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
        },
      },
    ],
  },
  name: 'caret-down',
  theme: 'filled',
};
function Fn() {
  return (
    (Fn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Fn.apply(this, arguments)
  );
}
const va = (n, e) => s.createElement(Ze, Fn({}, n, { ref: e, icon: wa })),
  Ea = s.forwardRef(va);
var $a = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
        },
      },
    ],
  },
  name: 'minus-square',
  theme: 'outlined',
};
function jn() {
  return (
    (jn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    jn.apply(this, arguments)
  );
}
const Na = (n, e) => s.createElement(Ze, jn({}, n, { ref: e, icon: $a })),
  ka = s.forwardRef(Na);
var Ra = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
        },
      },
    ],
  },
  name: 'plus-square',
  theme: 'outlined',
};
function _n() {
  return (
    (_n = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    _n.apply(this, arguments)
  );
}
const Ia = (n, e) => s.createElement(Ze, _n({}, n, { ref: e, icon: Ra })),
  Ka = s.forwardRef(Ia),
  Pa = (n) => {
    const {
        prefixCls: e,
        switcherIcon: t,
        treeNodeProps: o,
        showLine: r,
        switcherLoadingIcon: l,
      } = n,
      { isLeaf: a, expanded: i, loading: d } = o;
    if (d)
      return s.isValidElement(l)
        ? l
        : s.createElement(rs, { className: `${e}-switcher-loading-icon` });
    let c;
    if ((r && typeof r == 'object' && (c = r.showLeafIcon), a)) {
      if (!r) return null;
      if (typeof c != 'boolean' && c) {
        const f = typeof c == 'function' ? c(o) : c,
          m = `${e}-switcher-line-custom-icon`;
        return s.isValidElement(f) ? yo(f, { className: W(f.props?.className, m) }) : f;
      }
      return c
        ? s.createElement(Mr, { className: `${e}-switcher-line-icon` })
        : s.createElement('span', { className: `${e}-switcher-leaf-line` });
    }
    const u = `${e}-switcher-icon`,
      p = typeof t == 'function' ? t(o) : t;
    return s.isValidElement(p)
      ? yo(p, { className: W(p.props?.className, r ? `${e}-switcher-line-icon` : u) })
      : p !== void 0
        ? p
        : r
          ? i
            ? s.createElement(ka, { className: `${e}-switcher-line-icon` })
            : s.createElement(Ka, { className: `${e}-switcher-line-icon` })
          : s.createElement(Ea, { className: u });
  },
  Br = oe.forwardRef((n, e) => {
    const {
        getPrefixCls: t,
        direction: o,
        className: r,
        style: l,
        classNames: a,
        styles: i,
      } = rr('tree'),
      { virtual: d } = oe.useContext(rn),
      {
        prefixCls: c,
        className: u,
        showIcon: p = !1,
        showLine: f,
        switcherIcon: m,
        switcherLoadingIcon: h,
        blockNode: b = !1,
        children: x,
        checkable: y = !1,
        selectable: C = !0,
        draggable: v,
        disabled: $,
        motion: w,
        style: D,
        rootClassName: g,
        classNames: E,
        styles: k,
        icon: R,
      } = n,
      S = oe.useContext(ss),
      T = $ ?? S,
      N = t('tree', c),
      K = t(),
      B = w ?? { ...ls(K), motionAppear: !1 },
      _ = { ...n, showIcon: p, blockNode: b, checkable: y, selectable: C, disabled: T, motion: B },
      [V, X] = sr([a, E], [i, k], { props: _ }),
      O = { ..._, showLine: !!f, icon: R, dropIndicatorRender: Sa },
      [Q, Y] = Ca(N),
      [, z] = lr(),
      U = z.paddingXS / 2 + (z.Tree?.titleHeight || z.controlHeightSM),
      Z = oe.useMemo(() => {
        if (!v) return !1;
        let q = {};
        switch (typeof v) {
          case 'function':
            q.nodeDraggable = v;
            break;
          case 'object':
            q = { ...v };
            break;
        }
        return (q.icon !== !1 && (q.icon = q.icon || oe.createElement(ua, null)), q);
      }, [v]),
      se = (q) =>
        oe.createElement(Pa, {
          prefixCls: N,
          switcherIcon: m,
          switcherLoadingIcon: h,
          treeNodeProps: q,
          showLine: f,
        });
    return oe.createElement(
      ea,
      {
        itemHeight: U,
        ref: e,
        virtual: d,
        ...O,
        prefixCls: N,
        className: W(
          {
            [`${N}-icon-hide`]: !p,
            [`${N}-block-node`]: b,
            [`${N}-unselectable`]: !C,
            [`${N}-rtl`]: o === 'rtl',
            [`${N}-disabled`]: T,
          },
          r,
          u,
          Q,
          Y,
        ),
        style: { ...l, ...D },
        rootClassName: W(V.root, g),
        rootStyle: X.root,
        classNames: V,
        styles: X,
        direction: o,
        checkable: y && oe.createElement('span', { className: `${N}-checkbox-inner` }),
        selectable: C,
        switcherIcon: se,
        draggable: Z,
      },
      x,
    );
  }),
  Fo = 0,
  bn = 1,
  jo = 2;
function io(n, e, t) {
  const { key: o, children: r } = t;
  function l(a) {
    const i = a[o],
      d = a[r];
    e(i, a) !== !1 && io(d || [], e, t);
  }
  n.forEach(l);
}
function Ta({ treeData: n, expandedKeys: e, startKey: t, endKey: o, fieldNames: r }) {
  const l = [];
  let a = Fo;
  if (t && t === o) return [t];
  if (!t || !o) return [];
  function i(d) {
    return d === t || d === o;
  }
  return (
    io(
      n,
      (d) => {
        if (a === jo) return !1;
        if (i(d)) {
          if ((l.push(d), a === Fo)) a = bn;
          else if (a === bn) return ((a = jo), !1);
        } else a === bn && l.push(d);
        return e.includes(d);
      },
      $t(r),
    ),
    l
  );
}
function xn(n, e, t) {
  const o = Ie(e),
    r = [];
  return (
    io(
      n,
      (l, a) => {
        const i = o.indexOf(l);
        return (i !== -1 && (r.push(a), o.splice(i, 1)), !!o.length);
      },
      $t(t),
    ),
    r
  );
}
function Oa(n) {
  const { isLeaf: e, expanded: t } = n;
  return e ? s.createElement(Mr, null) : t ? s.createElement(sa, null) : s.createElement(ia, null);
}
function _o({ treeData: n, children: e }) {
  return n || pr(e);
}
const Da = s.forwardRef((n, e) => {
    const { defaultExpandAll: t, defaultExpandParent: o, defaultExpandedKeys: r, ...l } = n,
      a = s.useRef(null),
      i = s.useRef(null),
      d = () => {
        const { keyEntities: E } = to(_o(l), { fieldNames: l.fieldNames });
        let k;
        const R = l.expandedKeys || r || [];
        return (t ? (k = Object.keys(E)) : o ? (k = Kn(R, E)) : (k = R), k);
      },
      [c, u] = s.useState(l.selectedKeys || l.defaultSelectedKeys || []),
      [p, f] = s.useState(() => d());
    (s.useEffect(() => {
      'selectedKeys' in l && u(l.selectedKeys);
    }, [l.selectedKeys]),
      s.useEffect(() => {
        'expandedKeys' in l && f(l.expandedKeys);
      }, [l.expandedKeys]));
    const m = (E, k) => ('expandedKeys' in l || f(E), l.onExpand?.(E, k)),
      h = (E, k) => {
        const { multiple: R, fieldNames: S } = l,
          { node: T, nativeEvent: N } = k,
          { key: K = '' } = T,
          B = _o(l),
          _ = { ...k, selected: !0 },
          V = N?.ctrlKey || N?.metaKey,
          X = N?.shiftKey;
        let O;
        (R && V
          ? ((O = E), (a.current = K), (i.current = O), (_.selectedNodes = xn(B, O, S)))
          : R && X
            ? ((O = Array.from(
                new Set(
                  [].concat(
                    Ie(i.current || []),
                    Ie(
                      Ta({
                        treeData: B,
                        expandedKeys: p,
                        startKey: K,
                        endKey: a.current,
                        fieldNames: S,
                      }),
                    ),
                  ),
                ),
              )),
              (_.selectedNodes = xn(B, O, S)))
            : ((O = [K]), (a.current = K), (i.current = O), (_.selectedNodes = xn(B, O, S))),
          l.onSelect?.(O, _),
          'selectedKeys' in l || u(O));
      },
      { getPrefixCls: b, direction: x } = s.useContext(rn),
      { prefixCls: y, className: C, showIcon: v = !0, expandAction: $ = 'click', ...w } = l,
      D = b('tree', y),
      g = W(`${D}-directory`, { [`${D}-directory-rtl`]: x === 'rtl' }, C);
    return s.createElement(Br, {
      icon: Oa,
      ref: e,
      blockNode: !0,
      ...w,
      showIcon: v,
      expandAction: $,
      prefixCls: D,
      className: g,
      expandedKeys: p,
      selectedKeys: c,
      onSelect: h,
      onExpand: m,
    });
  }),
  co = Br;
co.DirectoryTree = Da;
co.TreeNode = At;
const Wo = (n) => {
    const { value: e, filterSearch: t, tablePrefixCls: o, locale: r, onChange: l } = n;
    return t
      ? s.createElement(
          'div',
          { className: `${o}-filter-dropdown-search` },
          s.createElement(ws, {
            prefix: s.createElement(as, null),
            placeholder: r.filterSearchPlaceholder,
            onChange: l,
            value: e,
            htmlSize: 1,
            className: `${o}-filter-dropdown-search-input`,
          }),
        )
      : null;
  },
  Ma = (n) => {
    const { keyCode: e } = n;
    e === ar.ENTER && n.stopPropagation();
  },
  Ba = s.forwardRef((n, e) =>
    s.createElement(
      'div',
      { className: n.className, onClick: (t) => t.stopPropagation(), onKeyDown: Ma, ref: e },
      n.children,
    ),
  );
function vt(n) {
  let e = [];
  return (
    (n || []).forEach(({ value: t, children: o }) => {
      (e.push(t), o && (e = [].concat(Ie(e), Ie(vt(o)))));
    }),
    e
  );
}
function La(n) {
  return n.some(({ children: e }) => e);
}
function Lr(n, e) {
  return typeof e == 'string' || typeof e == 'number'
    ? e?.toString().toLowerCase().includes(n.trim().toLowerCase())
    : !1;
}
function Hr({
  filters: n,
  prefixCls: e,
  filteredKeys: t,
  filterMultiple: o,
  searchValue: r,
  filterSearch: l,
}) {
  return n.map((a, i) => {
    const d = String(a.value);
    if (a.children)
      return {
        key: d || i,
        label: a.text,
        popupClassName: `${e}-dropdown-submenu`,
        children: Hr({
          filters: a.children,
          prefixCls: e,
          filteredKeys: t,
          filterMultiple: o,
          searchValue: r,
          filterSearch: l,
        }),
      };
    const c = o ? Qt : dr,
      u = {
        key: a.value !== void 0 ? d : i,
        label: s.createElement(
          s.Fragment,
          null,
          s.createElement(c, { checked: t.includes(d) }),
          s.createElement('span', null, a.text),
        ),
      };
    return r.trim()
      ? typeof l == 'function'
        ? l(r, a)
          ? u
          : null
        : Lr(r, a.text)
          ? u
          : null
      : u;
  });
}
function Cn(n) {
  return n || [];
}
const Ha = (n) => {
    const {
        tablePrefixCls: e,
        prefixCls: t,
        column: o,
        dropdownPrefixCls: r,
        columnKey: l,
        filterOnClose: a,
        filterMultiple: i,
        filterMode: d = 'menu',
        filterSearch: c = !1,
        filterState: u,
        triggerFilter: p,
        locale: f,
        children: m,
        getPopupContainer: h,
        rootClassName: b,
      } = n,
      {
        filterResetToDefaultFilteredValue: x,
        defaultFilteredValue: y,
        filterDropdownProps: C = {},
        filterDropdownOpen: v,
        onFilterDropdownOpenChange: $,
      } = o,
      [w, D] = s.useState(!1),
      g = s.useContext(ur),
      E = !!(u && (u.filteredKeys?.length || u.forceFiltered)),
      k = (I) => {
        (D(I), C.onOpenChange?.(I), $?.(I));
      },
      R = C.open ?? v ?? w,
      S = u?.filteredKeys,
      [T, N] = Ns(Cn(S)),
      K = ({ selectedKeys: I }) => {
        N(I);
      },
      B = (I, { node: M, checked: ue }) => {
        K(i ? { selectedKeys: I } : { selectedKeys: ue && M.key ? [M.key] : [] });
      };
    s.useEffect(() => {
      w && K({ selectedKeys: Cn(S) });
    }, [S]);
    const [_, V] = s.useState([]),
      X = (I) => {
        V(I);
      },
      [O, Q] = s.useState(''),
      Y = (I) => {
        const { value: M } = I.target;
        Q(M);
      };
    s.useEffect(() => {
      w || Q('');
    }, [w]);
    const z = (I) => {
        const M = I?.length ? I : null;
        if ((M === null && (!u || !u.filteredKeys)) || Et(M, u?.filteredKeys, !0)) return null;
        p({ column: o, key: l, filteredKeys: M });
      },
      U = () => {
        (k(!1), z(T()));
      },
      Z = ({ confirm: I, closeDropdown: M } = { confirm: !1, closeDropdown: !1 }) => {
        (I && z([]), M && k(!1), Q(''), N(x ? (y || []).map(String) : []));
      },
      se = ({ closeDropdown: I } = { closeDropdown: !0 }) => {
        (I && k(!1), z(T()));
      },
      q = (I, M) => {
        M.source === 'trigger' &&
          (I && S !== void 0 && N(Cn(S)), k(I), !I && !o.filterDropdown && a && U());
      },
      he = W({ [`${r}-menu-without-submenu`]: !La(o.filters || []) }),
      ge = (I) => {
        if (I.target.checked) {
          const M = vt(o?.filters).map(String);
          N(M);
        } else N([]);
      },
      ce = ({ filters: I }) =>
        (I || []).map((M, ue) => {
          const xe = String(M.value),
            be = { title: M.text, key: M.value !== void 0 ? xe : String(ue) };
          return (M.children && (be.children = ce({ filters: M.children })), be);
        }),
      le = (I) => ({ ...I, text: I.title, value: I.key, children: I.children?.map(le) || [] });
    let ne;
    const { direction: ve, renderEmpty: A } = s.useContext(rn);
    if (typeof o.filterDropdown == 'function')
      ne = o.filterDropdown({
        prefixCls: `${r}-custom`,
        setSelectedKeys: (I) => K({ selectedKeys: I }),
        selectedKeys: T(),
        confirm: se,
        clearFilters: Z,
        filters: o.filters,
        visible: R,
        close: () => {
          k(!1);
        },
      });
    else if (o.filterDropdown) ne = o.filterDropdown;
    else {
      const I = T() || [],
        M = () => {
          const xe =
            A?.('Table.filter') ??
            s.createElement(xo, {
              image: xo.PRESENTED_IMAGE_SIMPLE,
              description: f.filterEmptyText,
              styles: { image: { height: 24 } },
              style: { margin: 0, padding: '16px 0' },
            });
          if ((o.filters || []).length === 0) return xe;
          if (d === 'tree')
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(Wo, {
                filterSearch: c,
                value: O,
                onChange: Y,
                tablePrefixCls: e,
                locale: f,
              }),
              s.createElement(
                'div',
                { className: `${e}-filter-dropdown-tree` },
                i
                  ? s.createElement(
                      Qt,
                      {
                        checked: I.length === vt(o.filters).length,
                        indeterminate: I.length > 0 && I.length < vt(o.filters).length,
                        className: `${e}-filter-dropdown-checkall`,
                        onChange: ge,
                      },
                      f?.filterCheckall ?? f?.filterCheckAll,
                    )
                  : null,
                s.createElement(co, {
                  checkable: !0,
                  selectable: !1,
                  blockNode: !0,
                  multiple: i,
                  checkStrictly: !i,
                  className: `${r}-menu`,
                  onCheck: B,
                  checkedKeys: I,
                  selectedKeys: I,
                  showIcon: !1,
                  treeData: ce({ filters: o.filters }),
                  autoExpandParent: !0,
                  defaultExpandAll: !0,
                  filterTreeNode: O.trim()
                    ? (Te) => (typeof c == 'function' ? c(O, le(Te)) : Lr(O, Te.title))
                    : void 0,
                }),
              ),
            );
          const be = Hr({
              filters: o.filters || [],
              filterSearch: c,
              prefixCls: t,
              filteredKeys: T(),
              filterMultiple: i,
              searchValue: O,
            }),
            ae = be.every((Te) => Te === null);
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(Wo, {
              filterSearch: c,
              value: O,
              onChange: Y,
              tablePrefixCls: e,
              locale: f,
            }),
            ae
              ? xe
              : s.createElement(Cs, {
                  selectable: !0,
                  multiple: i,
                  prefixCls: `${r}-menu`,
                  className: he,
                  onSelect: K,
                  onDeselect: K,
                  selectedKeys: I,
                  getPopupContainer: h,
                  openKeys: _,
                  onOpenChange: X,
                  items: be,
                }),
          );
        },
        ue = () => (x ? Et((y || []).map(String), I, !0) : I.length === 0);
      ne = s.createElement(
        s.Fragment,
        null,
        M(),
        s.createElement(
          'div',
          { className: `${t}-dropdown-btns` },
          s.createElement(
            bo,
            { type: 'link', size: 'small', disabled: ue(), onClick: () => Z() },
            f.filterReset,
          ),
          s.createElement(bo, { type: 'primary', size: 'small', onClick: U }, f.filterConfirm),
        ),
      );
    }
    (o.filterDropdown && (ne = s.createElement(Ss, { selectable: void 0 }, ne)),
      (ne = s.createElement(Ba, { className: `${t}-dropdown` }, ne)));
    const P = (() => {
      let I;
      return (
        typeof o.filterIcon == 'function'
          ? (I = o.filterIcon(E))
          : o.filterIcon
            ? (I = o.filterIcon)
            : (I = s.createElement(Ul, null)),
        s.createElement(
          'span',
          {
            role: 'button',
            tabIndex: -1,
            className: W(`${t}-trigger`, { active: E }),
            onClick: (M) => {
              M.stopPropagation();
            },
          },
          I,
        )
      );
    })();
    if (g)
      return s.createElement(
        'div',
        { className: `${t}-column` },
        s.createElement('span', { className: `${e}-column-title` }, m),
        P,
      );
    const L = ir(
      {
        trigger: ['click'],
        placement: ve === 'rtl' ? 'bottomLeft' : 'bottomRight',
        children: P,
        getPopupContainer: h,
      },
      {
        ...C,
        rootClassName: W(b, C.rootClassName),
        open: R,
        onOpenChange: q,
        popupRender: () => (typeof C?.dropdownRender == 'function' ? C.dropdownRender(ne) : ne),
      },
    );
    return s.createElement(
      'div',
      { className: `${t}-column` },
      s.createElement('span', { className: `${e}-column-title` }, m),
      s.createElement(cr, { ...L }),
    );
  },
  Wn = (n, e, t) => {
    let o = [];
    return (
      (n || []).forEach((r, l) => {
        const a = It(l, t),
          i = r.filterDropdown !== void 0;
        if (r.filters || i || 'onFilter' in r)
          if ('filteredValue' in r) {
            let d = r.filteredValue;
            (i || (d = d?.map(String) ?? d),
              o.push({ column: r, key: ct(r, a), filteredKeys: d, forceFiltered: r.filtered }));
          } else
            o.push({
              column: r,
              key: ct(r, a),
              filteredKeys: e && r.defaultFilteredValue ? r.defaultFilteredValue : void 0,
              forceFiltered: r.filtered,
            });
        'children' in r && (o = [].concat(Ie(o), Ie(Wn(r.children, e, a))));
      }),
      o
    );
  };
function zr(n, e, t, o, r, l, a, i, d) {
  return t.map((c, u) => {
    const p = It(u, i),
      { filterOnClose: f = !0, filterMultiple: m = !0, filterMode: h, filterSearch: b } = c;
    let x = c;
    if (x.filters || x.filterDropdown) {
      const y = ct(x, p),
        C = o.find(({ key: v }) => y === v);
      x = {
        ...x,
        title: (v) =>
          s.createElement(
            Ha,
            {
              tablePrefixCls: n,
              prefixCls: `${n}-filter`,
              dropdownPrefixCls: e,
              column: x,
              columnKey: y,
              filterState: C,
              filterOnClose: f,
              filterMultiple: m,
              filterMode: h,
              filterSearch: b,
              triggerFilter: l,
              locale: r,
              getPopupContainer: a,
              rootClassName: d,
            },
            an(c.title, v),
          ),
      };
    }
    return ('children' in x && (x = { ...x, children: zr(n, e, x.children, o, r, l, a, p, d) }), x);
  });
}
const Vo = (n) => {
    const e = {};
    return (
      n.forEach(({ key: t, filteredKeys: o, column: r }) => {
        const l = t,
          { filters: a, filterDropdown: i } = r;
        if (i) e[l] = o || null;
        else if (Array.isArray(o)) {
          const d = vt(a);
          e[l] = d.filter((c) => o.includes(String(c)));
        } else e[l] = null;
      }),
      e
    );
  },
  Vn = (n, e, t) =>
    e.reduce((r, l) => {
      const {
        column: { onFilter: a, filters: i },
        filteredKeys: d,
      } = l;
      return a && d && d.length
        ? r
            .map((c) => ({ ...c }))
            .filter((c) =>
              d.some((u) => {
                const p = vt(i),
                  f = p.findIndex((h) => String(h) === String(u)),
                  m = f !== -1 ? p[f] : u;
                return (c[t] && (c[t] = Vn(c[t], e, t)), a(m, c));
              }),
            )
        : r;
    }, n),
  Ar = (n) => n.flatMap((e) => ('children' in e ? [e].concat(Ie(Ar(e.children || []))) : [e])),
  za = (n) => {
    const {
      prefixCls: e,
      dropdownPrefixCls: t,
      mergedColumns: o,
      onFilterChange: r,
      getPopupContainer: l,
      locale: a,
      rootClassName: i,
    } = n;
    Qn();
    const d = s.useMemo(() => Ar(o || []), [o]),
      [c, u] = s.useState(() => Wn(d, !0)),
      p = s.useMemo(() => {
        const b = Wn(d, !1);
        if (b.length === 0) return b;
        let x = !0;
        if (
          (b.forEach(({ filteredKeys: y }) => {
            y !== void 0 && (x = !1);
          }),
          x)
        ) {
          const y = (d || []).map((C, v) => ct(C, It(v)));
          return c
            .filter(({ key: C }) => y.includes(C))
            .map((C) => {
              const v = d[y.indexOf(C.key)];
              return { ...C, column: { ...C.column, ...v }, forceFiltered: v.filtered };
            });
        }
        return b;
      }, [d, c]),
      f = s.useMemo(() => Vo(p), [p]),
      m = (b) => {
        const x = p.filter(({ key: y }) => y !== b.key);
        (x.push(b), u(x), r(Vo(x), x));
      };
    return [(b) => zr(e, t, b, p, a, m, l, void 0, i), p, f];
  },
  Aa = (n, e, t) => {
    const o = s.useRef({});
    function r(l) {
      if (
        !o.current ||
        o.current.data !== n ||
        o.current.childrenColumnName !== e ||
        o.current.getRowKey !== t
      ) {
        let i = function (d) {
          d.forEach((c, u) => {
            const p = t(c, u);
            (a.set(p, c), c && typeof c == 'object' && e in c && i(c[e] || []));
          });
        };
        const a = new Map();
        (i(n), (o.current = { data: n, childrenColumnName: e, kvMap: a, getRowKey: t }));
      }
      return o.current.kvMap?.get(l);
    }
    return [r];
  },
  Fr = 10;
function Fa(n, e) {
  const t = { current: n.current, pageSize: n.pageSize };
  return (
    Object.keys(e && typeof e == 'object' ? e : {}).forEach((r) => {
      const l = n[r];
      typeof l != 'function' && (t[r] = l);
    }),
    t
  );
}
function ja(n, e, t) {
  const { total: o = 0, ...r } = t && typeof t == 'object' ? t : {},
    [l, a] = s.useState(() => ({
      current: 'defaultCurrent' in r ? r.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in r ? r.defaultPageSize : Fr,
    })),
    i = ir(l, r, { total: o > 0 ? o : n }),
    d = Math.ceil((o || n) / i.pageSize);
  i.current > d && (i.current = d || 1);
  const c = (p, f) => {
      a({ current: p ?? 1, pageSize: f || i.pageSize });
    },
    u = (p, f) => {
      (t && t.onChange?.(p, f), c(p, f), e(p, f || i?.pageSize));
    };
  return t === !1 ? [{}, () => {}] : [{ ...i, onChange: u }, c];
}
var _a = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
        },
      },
    ],
  },
  name: 'caret-down',
  theme: 'outlined',
};
function qn() {
  return (
    (qn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    qn.apply(this, arguments)
  );
}
const Wa = (n, e) => s.createElement(Ze, qn({}, n, { ref: e, icon: _a })),
  Va = s.forwardRef(Wa);
var qa = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
        },
      },
    ],
  },
  name: 'caret-up',
  theme: 'outlined',
};
function Un() {
  return (
    (Un = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          }
          return n;
        }),
    Un.apply(this, arguments)
  );
}
const Ua = (n, e) => s.createElement(Ze, Un({}, n, { ref: e, icon: qa })),
  Xa = s.forwardRef(Ua),
  Zt = 'ascend',
  Sn = 'descend',
  on = (n) =>
    typeof n.sorter == 'object' && typeof n.sorter.multiple == 'number' ? n.sorter.multiple : !1,
  qo = (n) =>
    typeof n == 'function' ? n : n && typeof n == 'object' && n.compare ? n.compare : !1,
  Ga = (n, e) => (e ? n[n.indexOf(e) + 1] : n[0]),
  Xn = (n, e, t) => {
    let o = [];
    const r = (l, a) => {
      o.push({ column: l, key: ct(l, a), multiplePriority: on(l), sortOrder: l.sortOrder });
    };
    return (
      (n || []).forEach((l, a) => {
        const i = It(a, t);
        l.children
          ? ('sortOrder' in l && r(l, i), (o = [].concat(Ie(o), Ie(Xn(l.children, e, i)))))
          : l.sorter &&
            ('sortOrder' in l
              ? r(l, i)
              : e &&
                l.defaultSortOrder &&
                o.push({
                  column: l,
                  key: ct(l, i),
                  multiplePriority: on(l),
                  sortOrder: l.defaultSortOrder,
                }));
      }),
      o
    );
  },
  jr = (n, e, t, o, r, l, a, i, d) =>
    (e || []).map((u, p) => {
      const f = It(p, i);
      let m = u;
      if (m.sorter) {
        const h = m.sortDirections || r,
          b = m.showSorterTooltip === void 0 ? a : m.showSorterTooltip,
          x = ct(m, f),
          y = t.find(({ key: R }) => R === x),
          C = y ? y.sortOrder : null,
          v = Ga(h, C);
        let $;
        if (u.sortIcon) $ = u.sortIcon({ sortOrder: C });
        else {
          const R =
              h.includes(Zt) &&
              s.createElement(Xa, { className: W(`${n}-column-sorter-up`, { active: C === Zt }) }),
            S =
              h.includes(Sn) &&
              s.createElement(Va, {
                className: W(`${n}-column-sorter-down`, { active: C === Sn }),
              });
          $ = s.createElement(
            'span',
            { className: W(`${n}-column-sorter`, { [`${n}-column-sorter-full`]: !!(R && S) }) },
            s.createElement(
              'span',
              { 'className': `${n}-column-sorter-inner`, 'aria-hidden': 'true' },
              R,
              S,
            ),
          );
        }
        const { cancelSort: w, triggerAsc: D, triggerDesc: g } = l || {};
        let E = w;
        v === Sn ? (E = g) : v === Zt && (E = D);
        const k = typeof b == 'object' ? { title: E, ...b } : { title: E };
        m = {
          ...m,
          className: W(m.className, { [`${n}-column-sort`]: C }),
          title: (R) => {
            const S = `${n}-column-sorters`,
              T = s.createElement('span', { className: `${n}-column-title` }, an(u.title, R)),
              N = s.createElement('div', { className: S }, T, $);
            return b
              ? typeof b != 'boolean' && b?.target === 'sorter-icon'
                ? s.createElement(
                    'div',
                    { className: W(S, `${S}-tooltip-target-sorter`) },
                    T,
                    s.createElement(So, { ...k }, $),
                  )
                : s.createElement(So, { ...k }, N)
              : N;
          },
          onHeaderCell: (R) => {
            const S = u.onHeaderCell?.(R) || {},
              T = S.onClick,
              N = S.onKeyDown;
            ((S.onClick = (_) => {
              (o({ column: u, key: x, sortOrder: v, multiplePriority: on(u) }), T?.(_));
            }),
              (S.onKeyDown = (_) => {
                _.keyCode === ar.ENTER &&
                  (o({ column: u, key: x, sortOrder: v, multiplePriority: on(u) }), N?.(_));
              }));
            const K = Wl(u.title, {}),
              B = K?.toString();
            return (
              C && (S['aria-sort'] = C === 'ascend' ? 'ascending' : 'descending'),
              (S['aria-description'] = d?.sortable),
              (S['aria-label'] = B || ''),
              (S.className = W(S.className, `${n}-column-has-sorters`)),
              (S.tabIndex = 0),
              u.ellipsis && (S.title = (K ?? '').toString()),
              S
            );
          },
        };
      }
      return (
        'children' in m && (m = { ...m, children: jr(n, m.children, t, o, r, l, a, f, d) }),
        m
      );
    }),
  Uo = (n) => {
    const { column: e, sortOrder: t } = n;
    return { column: e, order: t, field: e.dataIndex, columnKey: e.key };
  },
  Xo = (n) => {
    const e = n.filter(({ sortOrder: t }) => t).map(Uo);
    if (e.length === 0 && n.length) {
      const t = n.length - 1;
      return { ...Uo(n[t]), column: void 0, order: void 0, field: void 0, columnKey: void 0 };
    }
    return e.length <= 1 ? e[0] || {} : e;
  },
  Gn = (n, e, t) => {
    const o = e.slice().sort((a, i) => i.multiplePriority - a.multiplePriority),
      r = n.slice(),
      l = o.filter(({ column: { sorter: a }, sortOrder: i }) => qo(a) && i);
    return l.length
      ? r
          .sort((a, i) => {
            for (let d = 0; d < l.length; d += 1) {
              const c = l[d],
                {
                  column: { sorter: u },
                  sortOrder: p,
                } = c,
                f = qo(u);
              if (f && p) {
                const m = f(a, i, p);
                if (m !== 0) return p === Zt ? m : -m;
              }
            }
            return 0;
          })
          .map((a) => {
            const i = a[t];
            return i ? { ...a, [t]: Gn(i, e, t) } : a;
          })
      : r;
  },
  Ya = (n) => {
    const {
        prefixCls: e,
        mergedColumns: t,
        sortDirections: o,
        tableLocale: r,
        showSorterTooltip: l,
        onSorterChange: a,
        globalLocale: i,
      } = n,
      [d, c] = s.useState(() => Xn(t, !0)),
      u = (x, y) => {
        const C = [];
        return (
          x.forEach((v, $) => {
            const w = It($, y);
            if ((C.push(ct(v, w)), Array.isArray(v.children))) {
              const D = u(v.children, w);
              C.push.apply(C, Ie(D));
            }
          }),
          C
        );
      },
      p = s.useMemo(() => {
        let x = !0;
        const y = Xn(t, !1);
        if (!y.length) {
          const w = u(t);
          return d.filter(({ key: D }) => w.includes(D));
        }
        const C = [];
        function v(w) {
          x ? C.push(w) : C.push({ ...w, sortOrder: null });
        }
        let $ = null;
        return (
          y.forEach((w) => {
            $ === null
              ? (v(w), w.sortOrder && (w.multiplePriority === !1 ? (x = !1) : ($ = !0)))
              : (($ && w.multiplePriority !== !1) || (x = !1), v(w));
          }),
          C
        );
      }, [t, d]),
      f = s.useMemo(() => {
        const x = p.map(({ column: y, sortOrder: C }) => ({ column: y, order: C }));
        return { sortColumns: x, sortColumn: x[0]?.column, sortOrder: x[0]?.order };
      }, [p]),
      m = (x) => {
        let y;
        (x.multiplePriority === !1 || !p.length || p[0].multiplePriority === !1
          ? (y = [x])
          : (y = [].concat(Ie(p.filter(({ key: C }) => C !== x.key)), [x])),
          c(y),
          a(Xo(y), y));
      };
    return [(x) => jr(e, x, p, m, o, r, l, void 0, i), p, f, () => Xo(p)];
  },
  _r = (n, e) =>
    n.map((o) => {
      const r = { ...o };
      return ((r.title = an(o.title, e)), 'children' in r && (r.children = _r(r.children, e)), r);
    }),
  Za = (n) => [s.useCallback((t) => _r(t, n), [n])],
  Ja = Kr((n, e) => {
    const { _renderTimes: t } = n,
      { _renderTimes: o } = e;
    return t !== o;
  }),
  Qa = Tr((n, e) => {
    const { _renderTimes: t } = n,
      { _renderTimes: o } = e;
    return t !== o;
  }),
  ei = (n) => {
    const {
        componentCls: e,
        lineWidth: t,
        lineType: o,
        tableBorderColor: r,
        tableHeaderBg: l,
        tablePaddingVertical: a,
        tablePaddingHorizontal: i,
        calc: d,
      } = n,
      c = `${F(t)} ${o} ${r}`,
      u = (p, f, m) => ({
        [`&${e}-${p}`]: {
          [`> ${e}-container`]: {
            [`> ${e}-content, > ${e}-body`]: {
              '\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ':
                {
                  [`> ${e}-expanded-row-fixed`]: {
                    margin: `${F(d(f).mul(-1).equal())}
              ${F(d(d(m).add(t)).mul(-1).equal())}`,
                  },
                },
            },
          },
        },
      });
    return {
      [`${e}-wrapper`]: {
        [`${e}${e}-bordered`]: {
          [`> ${e}-title`]: { border: c, borderBottom: 0 },
          [`> ${e}-container`]: {
            borderInlineStart: c,
            borderTop: c,
            [`
            > ${e}-content,
            > ${e}-header,
            > ${e}-body,
            > ${e}-summary
          `]: {
              '> table': {
                '\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ':
                  { borderInlineEnd: c },
                '> thead': {
                  '> tr:not(:last-child) > th': { borderBottom: c },
                  '> tr > th::before': { backgroundColor: 'transparent !important' },
                },
                '\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ':
                  { [`> ${e}-cell-fix-right-first::after`]: { borderInlineEnd: c } },
                '\n                > tbody > tr > th,\n                > tbody > tr > td\n              ':
                  {
                    [`> ${e}-expanded-row-fixed`]: {
                      'margin': `${F(d(a).mul(-1).equal())} ${F(d(d(i).add(t)).mul(-1).equal())}`,
                      '&::after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: t,
                        bottom: 0,
                        borderInlineEnd: c,
                        content: '""',
                      },
                    },
                  },
              },
            },
          },
          [`&${e}-scroll-horizontal`]: {
            [`> ${e}-container > ${e}-body`]: {
              '> table > tbody': {
                [`
                > tr${e}-expanded-row,
                > tr${e}-placeholder
              `]: { '> th, > td': { borderInlineEnd: 0 } },
              },
            },
          },
          ...u('medium', n.tablePaddingVerticalMiddle, n.tablePaddingHorizontalMiddle),
          ...u('small', n.tablePaddingVerticalSmall, n.tablePaddingHorizontalSmall),
          [`> ${e}-footer`]: { border: c, borderTop: 0 },
        },
        [`${e}-cell`]: {
          [`${e}-container:first-child`]: { borderTop: 0 },
          '&-scrollbar:not([rowspan])': { boxShadow: `0 ${F(t)} 0 ${F(t)} ${l}` },
        },
        [`${e}-bordered ${e}-cell-scrollbar`]: { borderInlineEnd: c },
      },
    };
  },
  ti = (n) => {
    const { componentCls: e } = n;
    return {
      [`${e}-wrapper`]: {
        [`${e}-cell-ellipsis`]: {
          ...mn,
          wordBreak: 'keep-all',
          [`
          &${e}-cell-fix-start-shadow,
          &${e}-cell-fix-end-shadow
        `]: { overflow: 'visible', [`${e}-cell-content`]: { ...mn, display: 'block' } },
          [`${e}-column-title`]: { ...mn, wordBreak: 'keep-all' },
        },
      },
    };
  },
  ni = (n) => {
    const { componentCls: e } = n;
    return {
      [`${e}-wrapper`]: {
        [`${e}-tbody > tr${e}-placeholder`]: {
          'textAlign': 'center',
          'color': n.colorTextDisabled,
          '\n          &:hover > th,\n          &:hover > td,\n        ': {
            background: n.colorBgContainer,
          },
        },
      },
    };
  },
  oi = (n) => {
    const {
        componentCls: e,
        antCls: t,
        motionDurationSlow: o,
        lineWidth: r,
        paddingXS: l,
        lineType: a,
        tableBorderColor: i,
        tableExpandIconBg: d,
        tableExpandColumnWidth: c,
        borderRadius: u,
        tablePaddingVertical: p,
        tablePaddingHorizontal: f,
        tableExpandedRowBg: m,
        paddingXXS: h,
        expandIconMarginTop: b,
        expandIconSize: x,
        expandIconHalfInner: y,
        expandIconScale: C,
        calc: v,
      } = n,
      $ = `${F(r)} ${a} ${i}`,
      w = v(h).sub(r).equal();
    return {
      [`${e}-wrapper`]: {
        [`${e}-expand-icon-col`]: { width: c },
        [`${e}-row-expand-icon-cell`]: {
          textAlign: 'center',
          [`${e}-row-expand-icon`]: { display: 'inline-flex', float: 'none', verticalAlign: 'sub' },
        },
        [`${e}-row-indent`]: { height: 1, float: 'left' },
        [`${e}-row-expand-icon`]: {
          ...is(n),
          'position': 'relative',
          'float': 'left',
          'width': x,
          'height': x,
          'color': 'inherit',
          'lineHeight': F(x),
          'background': d,
          'border': $,
          'borderRadius': u,
          'transform': `scale(${C})`,
          '&:focus, &:hover, &:active': { borderColor: 'currentcolor' },
          '&::before, &::after': {
            position: 'absolute',
            background: 'currentcolor',
            transition: `transform ${o} ease-out`,
            content: '""',
          },
          '&::before': { top: y, insetInlineEnd: w, insetInlineStart: w, height: r },
          '&::after': {
            top: w,
            bottom: w,
            insetInlineStart: y,
            width: r,
            transform: 'rotate(90deg)',
          },
          '&-collapsed::before': { transform: 'rotate(-180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
          '&-spaced': {
            '&::before, &::after': { display: 'none', content: 'none' },
            'background': 'transparent',
            'border': 0,
            'visibility': 'hidden',
          },
        },
        [`${e}-row-indent + ${e}-row-expand-icon`]: { marginTop: b, marginInlineEnd: l },
        [`tr${e}-expanded-row`]: {
          '&, &:hover': { '> th, > td': { background: m } },
          [`${t}-descriptions-view`]: { display: 'flex', table: { flex: 'auto', width: '100%' } },
        },
        [`${e}-expanded-row-fixed`]: {
          position: 'relative',
          margin: `${F(v(p).mul(-1).equal())} ${F(v(f).mul(-1).equal())}`,
          padding: `${F(p)} ${F(f)}`,
        },
      },
    };
  },
  ri = (n) => {
    const {
        componentCls: e,
        antCls: t,
        iconCls: o,
        tableFilterDropdownWidth: r,
        tableFilterDropdownSearchWidth: l,
        paddingXXS: a,
        paddingXS: i,
        colorText: d,
        lineWidth: c,
        lineType: u,
        tableBorderColor: p,
        headerIconColor: f,
        fontSizeSM: m,
        tablePaddingHorizontal: h,
        borderRadius: b,
        motionDurationSlow: x,
        colorIcon: y,
        colorPrimary: C,
        tableHeaderFilterActiveBg: v,
        colorTextDisabled: $,
        tableFilterDropdownBg: w,
        tableFilterDropdownHeight: D,
        controlItemBgHover: g,
        controlItemBgActive: E,
        boxShadowSecondary: k,
        filterDropdownMenuBg: R,
        calc: S,
      } = n,
      T = `${t}-dropdown`,
      N = `${e}-filter-dropdown`,
      K = `${t}-tree`,
      B = `${F(c)} ${u} ${p}`;
    return [
      {
        [`${e}-wrapper`]: {
          [`${e}-filter-column`]: { display: 'flex', justifyContent: 'space-between' },
          [`${e}-filter-trigger`]: {
            'position': 'relative',
            'display': 'flex',
            'alignItems': 'center',
            'marginBlock': S(a).mul(-1).equal(),
            'marginInline': `${F(a)} ${F(S(h).div(2).mul(-1).equal())}`,
            'padding': `0 ${F(a)}`,
            'color': f,
            'fontSize': m,
            'borderRadius': b,
            'cursor': 'pointer',
            'transition': `all ${x}`,
            '&:hover': { color: y, background: v },
            '&.active': { color: C },
          },
        },
      },
      {
        [`${t}-dropdown`]: {
          [N]: {
            ...eo(n),
            minWidth: r,
            backgroundColor: w,
            borderRadius: b,
            boxShadow: k,
            overflow: 'hidden',
            [`${T}-menu`]: {
              'maxHeight': D,
              'overflowX': 'hidden',
              'border': 0,
              'boxShadow': 'none',
              'borderRadius': 'unset',
              'backgroundColor': R,
              '&:empty::after': {
                display: 'block',
                padding: `${F(i)} 0`,
                color: $,
                fontSize: m,
                textAlign: 'center',
                content: '"Not Found"',
              },
            },
            [`${N}-tree`]: {
              paddingBlock: `${F(i)} 0`,
              paddingInline: i,
              [K]: { padding: 0 },
              [`${K}-treenode ${K}-node-content-wrapper:hover`]: { backgroundColor: g },
              [`${K}-treenode-checkbox-checked ${K}-node-content-wrapper`]: {
                '&, &:hover': { backgroundColor: E },
              },
            },
            [`${N}-search`]: {
              'padding': i,
              'borderBottom': B,
              '&-input': { input: { minWidth: l }, [o]: { color: $ } },
            },
            [`${N}-checkall`]: { width: '100%', marginBottom: a, marginInlineStart: a },
            [`${N}-btns`]: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: `${F(S(i).sub(c).equal())} ${F(i)}`,
              overflow: 'hidden',
              borderTop: B,
            },
          },
        },
      },
      {
        [`${t}-dropdown ${N}, ${N}-submenu`]: {
          [`${t}-checkbox-wrapper + span`]: { paddingInlineStart: i, color: d },
          '> ul': { maxHeight: 'calc(100vh - 130px)', overflowX: 'hidden', overflowY: 'auto' },
        },
      },
    ];
  };
function Wr({ colorSplit: n }) {
  const e = { boxShadow: `inset 10px 0 8px -8px ${n}` },
    t = { boxShadow: `inset -10px 0 8px -8px ${n}` };
  return [e, t];
}
const si = (n) => {
    const {
        componentCls: e,
        lineWidth: t,
        motionDurationSlow: o,
        zIndexTableFixed: r,
        tableBg: l,
        calc: a,
      } = n,
      i = `${e}-cell`,
      d = `${i}-fix`,
      c = {
        position: 'absolute',
        top: 0,
        bottom: a(t).mul(-1).equal(),
        width: 30,
        transition: `box-shadow ${o}`,
        content: '""',
        pointerEvents: 'none',
      },
      [u, p] = Wr(n);
    return {
      [`${e}-wrapper`]: {
        [`${i}${d}`]: { position: 'sticky' },
        [d]: {
          'zIndex': `calc(var(--z-offset-reverse) + ${r})`,
          'background': l,
          '&:after': c,
          '&-start:after': { insetInlineStart: '100%' },
          '&-end:after': { insetInlineEnd: '100%' },
          '&-start-shadow-show:after': u,
          '&-end-shadow-show:after': p,
        },
        [`${e}-container`]: {
          'position': 'relative',
          '&:before, &:after': { ...c, zIndex: `calc(var(--columns-count) * 2 + ${r} + 1)` },
          '&:before': { insetInlineStart: 0 },
          '&:after': { insetInlineEnd: 0 },
        },
        [`${e}-has-fix-start ${e}-container:before`]: { display: 'none' },
        [`${e}-has-fix-end ${e}-container:after`]: { display: 'none' },
        [`${e}-fix-start-shadow-show ${e}-container:before`]: u,
        [`${e}-fix-end-shadow-show ${e}-container:after`]: p,
      },
    };
  },
  li = (n) => {
    const { componentCls: e, antCls: t, margin: o } = n;
    return {
      [`${e}-wrapper`]: {
        [`${e}-pagination${t}-pagination`]: { margin: `${F(o)} 0` },
        [`${e}-pagination`]: {
          'display': 'flex',
          'flexWrap': 'wrap',
          'rowGap': n.paddingXS,
          '> *': { flex: 'none' },
          '&-start': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-end': { justifyContent: 'flex-end' },
        },
      },
    };
  },
  ai = (n) => {
    const { componentCls: e, tableRadius: t } = n;
    return {
      [`${e}-wrapper`]: {
        [e]: {
          [`${e}-title, ${e}-header`]: { borderRadius: `${F(t)} ${F(t)} 0 0` },
          [`${e}-title + ${e}-container`]: {
            'borderStartStartRadius': 0,
            'borderStartEndRadius': 0,
            [`${e}-header, table`]: { borderRadius: 0 },
            'table > thead > tr:first-child': {
              'th:first-child, th:last-child, td:first-child, td:last-child': { borderRadius: 0 },
            },
          },
          '&-container': {
            'borderStartStartRadius': t,
            'borderStartEndRadius': t,
            '&::before': { borderStartStartRadius: t },
            '&::after': { borderStartEndRadius: t },
            [`> ${e}-content`]: { borderStartStartRadius: t, borderStartEndRadius: t },
            'table > thead > tr:first-child': {
              '> *:first-child': { borderStartStartRadius: t },
              '> *:last-child': { borderStartEndRadius: t },
            },
          },
          '&-footer': { borderRadius: `0 0 ${F(t)} ${F(t)}` },
        },
      },
    };
  },
  ii = (n) => {
    const { componentCls: e } = n,
      [t, o] = Wr(n);
    return {
      [`${e}-wrapper-rtl`]: {
        direction: 'rtl',
        table: { direction: 'rtl' },
        [`${e}-row-expand-icon`]: {
          'float': 'right',
          '&::after': { transform: 'rotate(-90deg)' },
          '&-collapsed::before': { transform: 'rotate(180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
        },
        [`${e}-cell-fix`]: { '&-start-shadow-show:after': o, '&-end-shadow-show:after': t },
        [`${e}-container`]: { [`${e}-row-indent`]: { float: 'right' } },
        [`${e}-fix-start-shadow-show ${e}-container:before`]: o,
        [`${e}-fix-end-shadow-show ${e}-container:after`]: t,
      },
    };
  },
  ci = (n) => {
    const {
      componentCls: e,
      antCls: t,
      iconCls: o,
      fontSizeIcon: r,
      padding: l,
      paddingXS: a,
      headerIconColor: i,
      headerIconHoverColor: d,
      tableSelectionColumnWidth: c,
      tableSelectedRowBg: u,
      tableSelectedRowHoverBg: p,
      tableRowHoverBg: f,
      tablePaddingHorizontal: m,
      calc: h,
    } = n;
    return {
      [`${e}-wrapper`]: {
        [`${e}-selection-col`]: {
          width: c,
          [`&${e}-selection-col-with-dropdown`]: { width: h(c).add(r).add(h(l).div(4)).equal() },
        },
        [`${e}-bordered ${e}-selection-col`]: {
          width: h(c).add(h(a).mul(2)).equal(),
          [`&${e}-selection-col-with-dropdown`]: {
            width: h(c).add(r).add(h(l).div(4)).add(h(a).mul(2)).equal(),
          },
        },
        [`
        table tr th${e}-selection-column,
        table tr td${e}-selection-column,
        ${e}-selection-column
      `]: {
          paddingInlineEnd: n.paddingXS,
          paddingInlineStart: n.paddingXS,
          textAlign: 'center',
          [`${t}-radio-wrapper`]: { marginInlineEnd: 0 },
        },
        [`table tr th${e}-selection-column${e}-cell-fix-left`]: {
          zIndex: h(n.zIndexTableFixed).add(1).equal({ unit: !1 }),
        },
        [`table tr th${e}-selection-column::after`]: { backgroundColor: 'transparent !important' },
        [`${e}-selection`]: {
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
        },
        [`${e}-selection-extra`]: {
          position: 'absolute',
          top: 0,
          zIndex: 1,
          cursor: 'pointer',
          transition: `all ${n.motionDurationSlow}`,
          marginInlineStart: '100%',
          paddingInlineStart: F(h(m).div(4).equal()),
          [o]: { 'color': i, 'fontSize': r, 'verticalAlign': 'baseline', '&:hover': { color: d } },
        },
        [`${e}-tbody`]: {
          [`${e}-row`]: {
            [`&${e}-row-selected`]: {
              [`> ${e}-cell`]: { 'background': u, '&-row-hover': { background: p } },
            },
            [`> ${e}-cell-row-hover`]: { background: f },
          },
        },
      },
    };
  },
  di = (n) => {
    const { componentCls: e, tableExpandColumnWidth: t, calc: o } = n,
      r = (l, a, i, d) => ({
        [`${e}${e}-${l}`]: {
          fontSize: d,
          [`
        ${e}-title,
        ${e}-footer,
        ${e}-cell,
        ${e}-thead > tr > th,
        ${e}-tbody > tr > th,
        ${e}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${F(a)} ${F(i)}` },
          [`${e}-filter-trigger`]: { marginInlineEnd: F(o(i).div(2).mul(-1).equal()) },
          [`${e}-expanded-row-fixed`]: {
            margin: `${F(o(a).mul(-1).equal())} ${F(o(i).mul(-1).equal())}`,
          },
          [`${e}-tbody`]: {
            [`${e}-wrapper:only-child ${e}`]: {
              marginBlock: F(o(a).mul(-1).equal()),
              marginInline: `${F(o(t).sub(i).equal())} ${F(o(i).mul(-1).equal())}`,
            },
          },
          [`${e}-selection-extra`]: { paddingInlineStart: F(o(i).div(4).equal()) },
        },
      });
    return {
      [`${e}-wrapper`]: {
        ...r(
          'medium',
          n.tablePaddingVerticalMiddle,
          n.tablePaddingHorizontalMiddle,
          n.tableFontSizeMiddle,
        ),
        ...r(
          'small',
          n.tablePaddingVerticalSmall,
          n.tablePaddingHorizontalSmall,
          n.tableFontSizeSmall,
        ),
      },
    };
  },
  ui = (n) => {
    const {
      componentCls: e,
      marginXXS: t,
      fontSizeIcon: o,
      headerIconColor: r,
      headerIconHoverColor: l,
    } = n;
    return {
      [`${e}-wrapper`]: {
        [`${e}-thead th${e}-column-has-sorters`]: {
          'outline': 'none',
          'cursor': 'pointer',
          'transition': `all ${n.motionDurationSlow}, left 0s`,
          '&:hover': {
            'background': n.tableHeaderSortHoverBg,
            '&::before': { backgroundColor: 'transparent !important' },
          },
          '&:focus-visible': { color: n.colorPrimary },
          [`
          &${e}-cell-fix-left:hover,
          &${e}-cell-fix-right:hover
        `]: { background: n.tableFixedHeaderSortActiveBg },
        },
        [`${e}-thead th${e}-column-sort`]: {
          'background': n.tableHeaderSortBg,
          '&::before': { backgroundColor: 'transparent !important' },
        },
        [`td${e}-column-sort`]: { background: n.tableBodySortBg },
        [`${e}-column-title`]: { position: 'relative', zIndex: 1, flex: 1, minWidth: 0 },
        [`${e}-column-sorters`]: {
          'display': 'flex',
          'flex': 'auto',
          'alignItems': 'center',
          'justifyContent': 'space-between',
          '&::after': {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            content: '""',
          },
        },
        [`${e}-column-sorters-tooltip-target-sorter`]: { '&::after': { content: 'none' } },
        [`${e}-column-sorter`]: {
          'marginInlineStart': t,
          'color': r,
          'fontSize': 0,
          'transition': `color ${n.motionDurationSlow}`,
          '&-inner': { display: 'inline-flex', flexDirection: 'column', alignItems: 'center' },
          '&-up, &-down': { 'fontSize': o, '&.active': { color: n.colorPrimary } },
          [`${e}-column-sorter-up + ${e}-column-sorter-down`]: { marginTop: '-0.3em' },
        },
        [`${e}-column-sorters:hover ${e}-column-sorter`]: { color: l },
      },
    };
  },
  fi = (n) => {
    const {
        componentCls: e,
        opacityLoading: t,
        tableScrollThumbBg: o,
        tableScrollThumbBgHover: r,
        tableScrollThumbSize: l,
        tableScrollBg: a,
        stickyScrollBarBorderRadius: i,
        lineWidth: d,
        lineType: c,
        tableBorderColor: u,
        zIndexTableFixed: p,
      } = n,
      f = `${F(d)} ${c} ${u}`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-sticky`]: {
          '&-holder': {
            position: 'sticky',
            zIndex: `calc(var(--columns-count) * 2 + ${p} + 1)`,
            background: n.colorBgContainer,
          },
          '&-scroll': {
            'position': 'sticky',
            'bottom': 0,
            'height': `${F(l)} !important`,
            'zIndex': `calc(var(--columns-count) * 2 + ${p} + 1)`,
            'display': 'flex',
            'alignItems': 'center',
            'background': a,
            'borderTop': f,
            'opacity': t,
            '&:hover': { transformOrigin: 'center bottom' },
            '&-bar': {
              'height': l,
              'backgroundColor': o,
              'borderRadius': i,
              'transition': `all ${n.motionDurationSlow}, transform 0s`,
              'position': 'absolute',
              'bottom': 0,
              '&:hover, &-active': { backgroundColor: r },
            },
          },
        },
      },
    };
  },
  Go = (n) => {
    const { componentCls: e, lineWidth: t, tableBorderColor: o, calc: r } = n,
      l = `${F(t)} ${n.lineType} ${o}`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-summary`]: {
          'position': 'relative',
          'zIndex': n.zIndexTableFixed,
          'background': n.tableBg,
          '> tr': { '> th, > td': { borderBottom: l } },
        },
        [`div${e}-summary`]: { boxShadow: `0 ${F(r(t).mul(-1).equal())} 0 ${o}` },
      },
    };
  },
  pi = (n) => {
    const {
        componentCls: e,
        motionDurationMid: t,
        lineWidth: o,
        lineType: r,
        tableBorderColor: l,
        calc: a,
      } = n,
      i = `${F(o)} ${r} ${l}`,
      d = `${e}-expanded-row-cell`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-tbody-virtual`]: {
          [`${e}-tbody-virtual-holder-inner`]: {
            [`
            & > ${e}-row,
            & > div:not(${e}-row) > ${e}-row
          `]: { display: 'flex', boxSizing: 'border-box', width: '100%' },
          },
          [`${e}-cell`]: { borderBottom: i, transition: `background-color ${t}` },
          [`${e}-expanded-row`]: {
            [`${d}${d}-fixed`]: {
              position: 'sticky',
              insetInlineStart: 0,
              overflow: 'hidden',
              width: `calc(var(--virtual-width) - ${F(o)})`,
              borderInlineEnd: 'none',
            },
          },
        },
        [`${e}-bordered`]: {
          [`${e}-tbody-virtual`]: {
            '&:after': {
              content: '""',
              insetInline: 0,
              bottom: 0,
              borderBottom: i,
              position: 'absolute',
            },
            [`${e}-cell`]: {
              borderInlineEnd: i,
              [`&${e}-cell-fix-right-first:before`]: {
                content: '""',
                position: 'absolute',
                insetBlock: 0,
                insetInlineStart: a(o).mul(-1).equal(),
                borderInlineStart: i,
              },
            },
          },
          [`&${e}-virtual`]: {
            [`${e}-placeholder ${e}-cell`]: { borderInlineEnd: i, borderBottom: i },
          },
        },
      },
    };
  },
  mi = (n) => {
    const {
        componentCls: e,
        fontWeightStrong: t,
        tablePaddingVertical: o,
        tablePaddingHorizontal: r,
        tableExpandColumnWidth: l,
        lineWidth: a,
        lineType: i,
        tableBorderColor: d,
        tableFontSize: c,
        tableBg: u,
        tableRadius: p,
        tableHeaderTextColor: f,
        motionDurationMid: m,
        tableHeaderBg: h,
        tableHeaderCellSplitColor: b,
        tableFooterTextColor: x,
        tableFooterBg: y,
        calc: C,
      } = n,
      v = `${F(a)} ${i} ${d}`;
    return {
      [`${e}-wrapper`]: {
        'clear': 'both',
        'maxWidth': '100%',
        '--rc-virtual-list-scrollbar-bg': n.tableScrollBg,
        ...cs(),
        [e]: {
          ...eo(n),
          fontSize: c,
          background: u,
          borderRadius: `${F(p)} ${F(p)} 0 0`,
          scrollbarColor: `${n.tableScrollThumbBg} ${n.tableScrollBg}`,
        },
        'table': {
          width: '100%',
          textAlign: 'start',
          borderRadius: `${F(p)} ${F(p)} 0 0`,
          borderCollapse: 'separate',
          borderSpacing: 0,
        },
        [`
          ${e}-cell,
          ${e}-thead > tr > th,
          ${e}-tbody > tr > th,
          ${e}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: { position: 'relative', padding: `${F(o)} ${F(r)}`, overflowWrap: 'break-word' },
        [`${e}-title`]: { padding: `${F(o)} ${F(r)}` },
        [`${e}-thead`]: {
          '\n          > tr > th,\n          > tr > td\n        ': {
            'position': 'relative',
            'color': f,
            'fontWeight': t,
            'textAlign': 'start',
            'background': h,
            'borderBottom': v,
            'transition': `background-color ${m} ease`,
            "&[colspan]:not([colspan='1'])": { textAlign: 'center' },
            [`&:not(:last-child):not(${e}-selection-column):not(${e}-row-expand-icon-cell):not([colspan])::before`]:
              {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: 0,
                width: 1,
                height: '1.6em',
                backgroundColor: b,
                transform: 'translateY(-50%)',
                transition: `background-color ${m}`,
                content: '""',
              },
          },
          '> tr:not(:last-child) > th[colspan]': { borderBottom: 0 },
        },
        [`${e}-tbody`]: {
          '> tr': {
            '> th, > td': {
              borderBottom: v,
              transition: ['background-color', 'border-color'].map(($) => `${$} ${m}`).join(', '),
              [`
              > ${e}-wrapper:only-child,
              > ${e}-expanded-row-fixed > ${e}-wrapper:only-child
            `]: {
                [e]: {
                  marginBlock: F(C(o).mul(-1).equal()),
                  marginInline: `${F(C(l).sub(r).equal())}
                ${F(C(r).mul(-1).equal())}`,
                  [`${e}-tbody > tr:last-child > td`]: {
                    'borderBottomWidth': 0,
                    '&:first-child, &:last-child': { borderRadius: 0 },
                  },
                },
              },
            },
            '> th': {
              position: 'relative',
              color: f,
              fontWeight: t,
              textAlign: 'start',
              background: h,
              borderBottom: v,
              transition: `background-color ${m} ease`,
            },
            [`& > ${e}-measure-cell`]: {
              paddingBlock: '0 !important',
              borderBlock: '0 !important',
              [`${e}-measure-cell-content`]: {
                height: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
              },
            },
          },
        },
        [`${e}-footer`]: { padding: `${F(o)} ${F(r)}`, color: x, background: y },
      },
    };
  },
  hi = (n) => {
    const {
        colorFillAlter: e,
        colorBgContainer: t,
        colorTextHeading: o,
        colorFillSecondary: r,
        colorFillContent: l,
        controlItemBgActive: a,
        controlItemBgActiveHover: i,
        padding: d,
        paddingSM: c,
        paddingXS: u,
        colorBorderSecondary: p,
        borderRadiusLG: f,
        controlHeight: m,
        colorTextPlaceholder: h,
        fontSize: b,
        fontSizeSM: x,
        lineHeight: y,
        lineWidth: C,
        colorIcon: v,
        colorIconHover: $,
        opacityLoading: w,
        controlInteractiveSize: D,
      } = n,
      g = new Mt(r).onBackground(t).toHexString(),
      E = new Mt(l).onBackground(t).toHexString(),
      k = new Mt(e).onBackground(t).toHexString(),
      R = new Mt(v),
      S = new Mt($),
      T = D / 2 - C,
      N = T * 2 + C * 3;
    return {
      headerBg: k,
      headerColor: o,
      headerSortActiveBg: g,
      headerSortHoverBg: E,
      bodySortBg: k,
      rowHoverBg: k,
      rowSelectedBg: a,
      rowSelectedHoverBg: i,
      rowExpandedBg: e,
      cellPaddingBlock: d,
      cellPaddingInline: d,
      cellPaddingBlockMD: c,
      cellPaddingInlineMD: u,
      cellPaddingBlockSM: u,
      cellPaddingInlineSM: u,
      borderColor: p,
      headerBorderRadius: f,
      footerBg: k,
      footerColor: o,
      cellFontSize: b,
      cellFontSizeMD: b,
      cellFontSizeSM: b,
      headerSplitColor: p,
      fixedHeaderSortActiveBg: g,
      headerFilterHoverBg: l,
      filterDropdownMenuBg: t,
      filterDropdownBg: t,
      expandIconBg: t,
      selectionColumnWidth: m,
      stickyScrollBarBg: h,
      stickyScrollBarBorderRadius: 100,
      expandIconMarginTop: (b * y - C * 3) / 2 - Math.ceil((x * 1.4 - C * 3) / 2),
      headerIconColor: R.clone()
        .setA(R.a * w)
        .toRgbString(),
      headerIconHoverColor: S.clone()
        .setA(S.a * w)
        .toRgbString(),
      expandIconHalfInner: T,
      expandIconSize: N,
      expandIconScale: D / N,
    };
  },
  gi = 2,
  yi = nr(
    'Table',
    (n) => {
      const {
          colorTextHeading: e,
          colorSplit: t,
          colorBgContainer: o,
          controlInteractiveSize: r,
          headerBg: l,
          headerColor: a,
          headerSortActiveBg: i,
          headerSortHoverBg: d,
          bodySortBg: c,
          rowHoverBg: u,
          rowSelectedBg: p,
          rowSelectedHoverBg: f,
          rowExpandedBg: m,
          cellPaddingBlock: h,
          cellPaddingInline: b,
          cellPaddingBlockMD: x,
          cellPaddingInlineMD: y,
          cellPaddingBlockSM: C,
          cellPaddingInlineSM: v,
          borderColor: $,
          footerBg: w,
          footerColor: D,
          headerBorderRadius: g,
          cellFontSize: E,
          cellFontSizeMD: k,
          cellFontSizeSM: R,
          headerSplitColor: S,
          fixedHeaderSortActiveBg: T,
          headerFilterHoverBg: N,
          filterDropdownBg: K,
          expandIconBg: B,
          selectionColumnWidth: _,
          stickyScrollBarBg: V,
          calc: X,
        } = n,
        O = or(n, {
          tableFontSize: E,
          tableBg: o,
          tableRadius: g,
          tablePaddingVertical: h,
          tablePaddingHorizontal: b,
          tablePaddingVerticalMiddle: x,
          tablePaddingHorizontalMiddle: y,
          tablePaddingVerticalSmall: C,
          tablePaddingHorizontalSmall: v,
          tableBorderColor: $,
          tableHeaderTextColor: a,
          tableHeaderBg: l,
          tableFooterTextColor: D,
          tableFooterBg: w,
          tableHeaderCellSplitColor: S,
          tableHeaderSortBg: i,
          tableHeaderSortHoverBg: d,
          tableBodySortBg: c,
          tableFixedHeaderSortActiveBg: T,
          tableHeaderFilterActiveBg: N,
          tableFilterDropdownBg: K,
          tableRowHoverBg: u,
          tableSelectedRowBg: p,
          tableSelectedRowHoverBg: f,
          zIndexTableFixed: gi,
          tableFontSizeMiddle: k,
          tableFontSizeSmall: R,
          tableSelectionColumnWidth: _,
          tableExpandIconBg: B,
          tableExpandColumnWidth: X(r).add(X(n.padding).mul(2)).equal(),
          tableExpandedRowBg: m,
          tableFilterDropdownWidth: 120,
          tableFilterDropdownHeight: 264,
          tableFilterDropdownSearchWidth: 140,
          tableScrollThumbSize: 8,
          tableScrollThumbBg: V,
          tableScrollThumbBgHover: e,
          tableScrollBg: t,
        });
      return [
        mi(O),
        li(O),
        Go(O),
        ui(O),
        ri(O),
        ei(O),
        ai(O),
        oi(O),
        Go(O),
        ni(O),
        ci(O),
        si(O),
        fi(O),
        ti(O),
        di(O),
        ii(O),
        pi(O),
      ];
    },
    hi,
    { resetFont: !1, unitless: { expandIconScale: !0 } },
  ),
  Yo = [],
  bi = (n, e) => {
    const {
      prefixCls: t,
      className: o,
      rootClassName: r,
      style: l,
      classNames: a,
      styles: i,
      size: d,
      bordered: c,
      dropdownPrefixCls: u,
      dataSource: p,
      pagination: f,
      rowSelection: m,
      rowKey: h,
      rowClassName: b,
      columns: x,
      children: y,
      childrenColumnName: C,
      onChange: v,
      getPopupContainer: $,
      loading: w,
      expandIcon: D,
      expandable: g,
      expandedRowRender: E,
      expandIconColumnIndex: k,
      indentSize: R,
      scroll: S,
      sortDirections: T,
      locale: N,
      showSorterTooltip: K = { target: 'full-header' },
      virtual: B,
    } = n;
    Qn();
    const _ = s.useMemo(() => x || ro(y), [x, y]),
      V = s.useMemo(() => _.some((J) => J.responsive), [_]),
      X = ds(V),
      O = s.useMemo(() => {
        const J = new Set(Object.keys(X).filter((re) => X[re]));
        return _.filter((re) => !re.responsive || re.responsive.some(($e) => J.has($e)));
      }, [_, X]),
      Q = Jo(n, ['className', 'style', 'columns']),
      { locale: Y = Co, table: z } = s.useContext(rn),
      {
        getPrefixCls: U,
        direction: Z,
        renderEmpty: se,
        getPopupContainer: q,
        className: he,
        style: ge,
        classNames: ce,
        styles: le,
      } = rr('table'),
      ne = us((J) => (d === 'middle' ? 'medium' : (d ?? J))),
      ve = { ...n, size: ne, bordered: c },
      [A, j] = sr(
        [ce, a],
        [le, i],
        { props: ve },
        {
          pagination: { _default: 'root' },
          header: { _default: 'wrapper' },
          body: { _default: 'wrapper' },
        },
      ),
      P = { ...Y.Table, ...N },
      [L] = fs('global', Co.global),
      I = p || Yo,
      M = U('table', t),
      ue = U('dropdown', u),
      [, xe] = lr(),
      be = hs(M),
      [ae, Te] = yi(M, be),
      Ce = {
        childrenColumnName: C,
        expandIconColumnIndex: k,
        ...g,
        expandIcon: g?.expandIcon ?? z?.expandable?.expandIcon,
      },
      { childrenColumnName: Se = 'children' } = Ce,
      je = s.useMemo(
        () => (I.some((J) => J?.[Se]) ? 'nest' : E || g?.expandedRowRender ? 'row' : null),
        [Se, I],
      ),
      H = { body: s.useRef(null) },
      Re = _l(M),
      We = s.useRef(null),
      _e = s.useRef(null);
    $s(e, () => ({ ..._e.current, nativeElement: We.current }));
    const ee = h || z?.rowKey || 'key',
      ye = S ?? z?.scroll,
      fe = s.useMemo(() => (typeof ee == 'function' ? ee : (J) => J?.[ee]), [ee]),
      [pe] = Aa(I, Se, fe),
      te = {},
      de = (J, re, $e = !1) => {
        const Ke = { ...te, ...J };
        ($e &&
          (te.resetPagination?.(),
          Ke.pagination?.current && (Ke.pagination.current = 1),
          f && f.onChange?.(1, Ke.pagination?.pageSize)),
          S &&
            S.scrollToFirstRowOnChange !== !1 &&
            H.body.current &&
            ys(0, { getContainer: () => H.body.current }),
          v?.(Ke.pagination, Ke.filters, Ke.sorter, {
            currentDataSource: Vn(Gn(I, Ke.sorterStates, Se), Ke.filterStates, Se),
            action: re,
          }));
      },
      Ee = (J, re) => {
        de({ sorter: J, sorterStates: re }, 'sort', !1);
      },
      [Ae, ie, Fe, Ve] = Ya({
        prefixCls: M,
        mergedColumns: O,
        onSorterChange: Ee,
        sortDirections: T || ['ascend', 'descend'],
        tableLocale: P,
        showSorterTooltip: K,
        globalLocale: L,
      }),
      qe = s.useMemo(() => Gn(I, ie, Se), [Se, I, ie]);
    ((te.sorter = Ve()), (te.sorterStates = ie));
    const ut = (J, re) => {
        de({ filters: J, filterStates: re }, 'filter', !0);
      },
      [Be, we, Le] = za({
        prefixCls: M,
        locale: P,
        dropdownPrefixCls: ue,
        mergedColumns: O,
        onFilterChange: ut,
        getPopupContainer: $ || q,
        rootClassName: W(r, be),
      }),
      Oe = Vn(qe, we, Se);
    ((te.filters = Le), (te.filterStates = we));
    const Je = s.useMemo(() => {
        const J = {};
        return (
          Object.keys(Le).forEach((re) => {
            Le[re] !== null && (J[re] = Le[re]);
          }),
          { ...Fe, filters: J }
        );
      }, [Fe, Le]),
      [nt] = Za(Je),
      _t = (J, re) => {
        de({ pagination: { ...te.pagination, current: J, pageSize: re } }, 'paginate');
      },
      [He, Wt] = ja(Oe.length, _t, f);
    ((te.pagination = f === !1 ? {} : Fa(He, f)), (te.resetPagination = Wt));
    const ft = s.useMemo(() => {
        if (f === !1 || !He.pageSize) return Oe;
        const { current: J = 1, total: re, pageSize: $e = Fr } = He;
        return Oe.length < re
          ? Oe.length > $e
            ? Oe.slice((J - 1) * $e, J * $e)
            : Oe
          : Oe.slice((J - 1) * $e, J * $e);
      }, [!!f, Oe, He?.current, He?.pageSize, He?.total]),
      [Kt, cn] = Fl(
        {
          prefixCls: M,
          data: Oe,
          pageData: ft,
          getRowKey: fe,
          getRecordByKey: pe,
          expandType: je,
          childrenColumnName: Se,
          locale: P,
          getPopupContainer: $ || q,
        },
        m,
      ),
      ot = (J, re, $e) => {
        const Ke = typeof b == 'function' ? b(J, re, $e) : b;
        return W({ [`${M}-row-selected`]: cn.has(fe(J, re)) }, Ke);
      };
    ((Ce.__PARENT_RENDER_ICON__ = Ce.expandIcon),
      (Ce.expandIcon = Ce.expandIcon || D || jl(P)),
      je === 'nest' && Ce.expandIconColumnIndex === void 0
        ? (Ce.expandIconColumnIndex = m ? 1 : 0)
        : Ce.expandIconColumnIndex > 0 && m && (Ce.expandIconColumnIndex -= 1),
      typeof Ce.indentSize != 'number' && (Ce.indentSize = typeof R == 'number' ? R : 15));
    const dn = s.useCallback((J) => nt(Kt(Be(Ae(J)))), [Ae, Be, Kt]);
    let Pt, pt;
    if (f !== !1 && He?.total) {
      let J;
      He.size ? (J = He.size) : (J = ne === 'small' || ne === 'medium' ? 'small' : void 0);
      const re = (ze = 'end') =>
          s.createElement(bs, {
            ...He,
            classNames: A.pagination,
            styles: j.pagination,
            className: W(`${M}-pagination ${M}-pagination-${ze}`, He.className),
            size: J,
          }),
        { placement: $e, position: Ke } = He,
        Ue = $e ?? Ke,
        ht = (ze) => {
          const Xe = ze.toLowerCase();
          return Xe.includes('center')
            ? 'center'
            : Xe.includes('left') || Xe.includes('start')
              ? 'start'
              : 'end';
        };
      if (Array.isArray(Ue)) {
        const [ze, Xe] = ['top', 'bottom'].map((gt) => Ue.find((Ut) => Ut.includes(gt))),
          qt = Ue.every((gt) => `${gt}` == 'none');
        (!ze && !Xe && !qt && (pt = re()), ze && (Pt = re(ht(ze))), Xe && (pt = re(ht(Xe))));
      } else pt = re();
    }
    const xt = s.useMemo(
        () =>
          typeof w == 'boolean'
            ? { spinning: w }
            : typeof w == 'object' && w !== null
              ? { spinning: !0, ...w }
              : void 0,
        [w],
      ),
      Ct = W(Te, be, `${M}-wrapper`, he, { [`${M}-wrapper-rtl`]: Z === 'rtl' }, o, r, A.root, ae),
      Vt = { ...j.root, ...ge, ...l },
      un = s.useMemo(
        () =>
          xt?.spinning && I === Yo
            ? null
            : typeof N?.emptyText < 'u'
              ? N.emptyText
              : se?.('Table') || s.createElement(ps, { componentName: 'Table' }),
        [xt?.spinning, I, N?.emptyText, se],
      ),
      fn = B ? Qa : Ja,
      Tt = {},
      mt = s.useMemo(() => {
        const {
            fontSize: J,
            lineHeight: re,
            lineWidth: $e,
            padding: Ke,
            paddingXS: Ue,
            paddingSM: ht,
          } = xe,
          ze = Math.floor(J * re);
        switch (ne) {
          case 'medium':
            return ht * 2 + ze + $e;
          case 'small':
            return Ue * 2 + ze + $e;
          default:
            return Ke * 2 + ze + $e;
        }
      }, [xe, ne]);
    return (
      B && (Tt.listItemHeight = mt),
      s.createElement(
        'div',
        { ref: We, className: Ct, style: Vt },
        s.createElement(
          xs,
          { spinning: !1, ...xt },
          Pt,
          s.createElement(fn, {
            ...Tt,
            ...Q,
            scroll: ye,
            classNames: A,
            styles: j,
            ref: _e,
            columns: O,
            direction: Z,
            expandable: Ce,
            prefixCls: M,
            className: W(
              {
                [`${M}-medium`]: ne === 'medium',
                [`${M}-small`]: ne === 'small',
                [`${M}-bordered`]: c,
                [`${M}-empty`]: I.length === 0,
              },
              Te,
              be,
              ae,
            ),
            data: ft,
            rowKey: fe,
            rowClassName: ot,
            emptyText: un,
            internalHooks: jt,
            internalRefs: H,
            transformColumns: dn,
            getContainerWidth: Re,
            measureRowRender: (J) =>
              s.createElement(
                ur.Provider,
                { value: !0 },
                s.createElement(ms, { getPopupContainer: (re) => re }, J),
              ),
          }),
          pt,
        ),
      )
    );
  },
  xi = s.forwardRef(bi),
  Ci = (n, e) => {
    const t = s.useRef(0);
    return ((t.current += 1), s.createElement(xi, { ...n, ref: e, _renderTimes: t.current }));
  },
  dt = s.forwardRef(Ci);
dt.SELECTION_COLUMN = rt;
dt.EXPAND_COLUMN = st;
dt.SELECTION_ALL = Pn;
dt.SELECTION_INVERT = Tn;
dt.SELECTION_NONE = On;
dt.Column = Tl;
dt.ColumnGroup = Ol;
dt.Summary = xr;
export {
  dt as F,
  Ea as R,
  Pa as S,
  co as T,
  Dl as U,
  sa as a,
  wt as b,
  to as c,
  ea as d,
  Aa as e,
  ya as g,
  ba as i,
  vs as u,
};
