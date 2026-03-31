import {
  cV as en,
  bL as ue,
  hC as tn,
  cn as nn,
  hD as sn,
  bm as St,
  cl as Bn,
  b8 as bt,
  bV as Gn,
  hE as Xn,
  bP as Un,
  dp as Jn,
  bb as xt,
  bO as vt,
  cw as Ft,
  cK as it,
  d4 as on,
  hF as rn,
  d8 as an,
  al as ln,
  hG as cn,
  bc as Wt,
  hH as un,
  hI as dn,
  be as pn,
  dm as fn,
  cq as Ct,
  hJ as mn,
  d9 as hn,
  da as gn,
  ct as Yn,
  am as Cn,
  b9 as It,
  bd as qn,
  bX as Ut,
  bh as Zn,
  ba as Qn,
  dl as es,
} from './index-C8UyLGsD.js';
import { r, R as me } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  c as Ce,
  O as $t,
  a as Je,
  h as ut,
  u as dt,
  o as pt,
  t as ts,
  v as Nt,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as yn, b as nt, U as ns, d as ss, i as os, g as rs, S as as } from './Table-BlWKciej.js';
import { g as Sn } from './index-BOZ0hr8D.js';
import { R as ls } from './LeftOutlined-Pp_b6_vA.js';
import { i as Jt } from './index-CqaQ90GQ.js';
import { T as Yt } from './index-BSuyBMRZ.js';
var _o = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
        },
      },
    ],
  },
  name: 'vertical-align-top',
  theme: 'outlined',
};
const rt = r.createContext({}),
  tt = '__rc_cascader_search_mark__',
  cs = (e, t, { label: n = '' }) =>
    t.some((s) => String(s[n]).toLowerCase().includes(e.toLowerCase())),
  is = (e, t, n, s) => t.map((o) => o[s.label]).join(' / '),
  us = (e, t, n, s, o, c) => {
    const { filter: a = cs, render: l = is, limit: i = 50, sort: u } = o;
    return r.useMemo(() => {
      const p = [];
      if (!e) return [];
      function S(h, m, g = !1) {
        h.forEach((C) => {
          if (!u && i !== !1 && i > 0 && p.length >= i) return;
          const d = [...m, C],
            v = C[n.children],
            N = g || C.disabled;
          ((!v || v.length === 0 || c) &&
            a(e, d, { label: n.label }) &&
            p.push({ ...C, disabled: N, [n.label]: l(e, d, s, n), [tt]: d, [n.children]: void 0 }),
            v && S(C[n.children], d, N));
        });
      }
      return (
        S(t, []),
        u && p.sort((h, m) => u(h[tt], m[tt], e, n)),
        i !== !1 && i > 0 ? p.slice(0, i) : p
      );
    }, [e, t, n, s, l, c, a, u, i]);
  },
  jt = '__RC_CASCADER_SPLIT__',
  bn = 'SHOW_PARENT',
  xn = 'SHOW_CHILD';
function Me(e) {
  return e.join(jt);
}
function st(e) {
  return e.map(Me);
}
function ds(e) {
  return e.split(jt);
}
function vn(e) {
  const { label: t, value: n, children: s } = e || {},
    o = n || 'value';
  return { label: t || 'label', value: o, key: o, children: s || 'children' };
}
function ct(e, t) {
  return e.isLeaf ?? !e[t.children]?.length;
}
function In(e) {
  const t = e.parentElement;
  if (!t) return;
  const n = e.offsetTop - t.offsetTop;
  n - t.scrollTop < 0
    ? t.scrollTo({ top: n })
    : n + e.offsetHeight - t.scrollTop > t.offsetHeight &&
      t.scrollTo({ top: n + e.offsetHeight - t.offsetHeight });
}
function wn(e, t) {
  return e.map((n) => n[tt]?.map((s) => s[t.value]));
}
function ps(e) {
  return Array.isArray(e) && Array.isArray(e[0]);
}
function yt(e) {
  return e
    ? ps(e)
      ? e
      : (e.length === 0 ? [] : [e]).map((t) => (Array.isArray(t) ? t : [t]))
    : [];
}
function En(e, t, n) {
  const s = new Set(e),
    o = t();
  return e.filter((c) => {
    const a = o[c],
      l = a ? a.parent : null,
      i = a ? a.children : null;
    return a && a.node.disabled
      ? !0
      : n === xn
        ? !(i && i.some((u) => u.key && s.has(u.key)))
        : !(l && !l.node.disabled && s.has(l.key));
  });
}
function ot(e, t, n, s = !1) {
  let o = t;
  const c = [];
  for (let a = 0; a < e.length; a += 1) {
    const l = e[a],
      i = o?.findIndex((p) => {
        const S = p[n.value];
        return s ? String(S) === String(l) : S === l;
      }),
      u = i !== -1 ? o?.[i] : null;
    (c.push({ value: u?.[n.value] ?? l, index: i, option: u }), (o = u?.[n.children]));
  }
  return c;
}
const fs = (e, t, n, s, o) =>
  r.useMemo(() => {
    const c =
      o ||
      ((a) => {
        const l = s ? a.slice(-1) : a,
          i = ' / ';
        return l.every((u) => ['string', 'number'].includes(typeof u))
          ? l.join(i)
          : l.reduce((u, p, S) => {
              const h = r.isValidElement(p) ? r.cloneElement(p, { key: S }) : p;
              return S === 0 ? [h] : [...u, i, h];
            }, []);
      });
    return e.map((a) => {
      const l = ot(a, t, n),
        i = c(
          l.map(({ option: p, value: S }) => p?.[n.label] ?? S),
          l.map(({ option: p }) => p),
        ),
        u = Me(a);
      return {
        label: i,
        value: u,
        key: u,
        valueCells: a,
        disabled: l[l.length - 1]?.option?.disabled,
      };
    });
  }, [e, t, n, o, s]);
function Pn(e, t) {
  return r.useCallback(
    (n) => {
      const s = [],
        o = [];
      return (
        n.forEach((c) => {
          ot(c, e, t).every((l) => l.option) ? o.push(c) : s.push(c);
        }),
        [o, s]
      );
    },
    [e, t],
  );
}
const ms = (e, t) => {
  const n = r.useRef({ options: [], info: { keyEntities: {}, pathKeyEntities: {} } });
  return r.useCallback(
    () => (
      n.current.options !== e &&
        ((n.current.options = e),
        (n.current.info = yn(e, {
          fieldNames: t,
          initWrapper: (o) => ({ ...o, pathKeyEntities: {} }),
          processEntity: (o, c) => {
            const a = o.nodes.map((l) => l[t.value]).join(jt);
            ((c.pathKeyEntities[a] = o), (o.key = a));
          },
        }))),
      n.current.info.pathKeyEntities
    ),
    [t, e],
  );
};
function On(e, t) {
  const n = r.useMemo(() => t || [], [t]),
    s = ms(n, e),
    o = r.useCallback(
      (c) => {
        const a = s();
        return c.map((l) => {
          const { nodes: i } = a[l];
          return i.map((u) => u[e.value]);
        });
      },
      [s, e],
    );
  return [n, s, o];
}
function hs(e, t) {
  const { autoClearSearchValue: n, searchValue: s, onSearch: o } = t;
  return r.useMemo(() => {
    if (!e) return [!1, {}];
    let c = {
      matchInputWidth: !0,
      limit: 50,
      autoClearSearchValue: n,
      searchValue: s,
      onSearch: o,
    };
    return (
      e && typeof e == 'object' && (c = { ...c, ...e }),
      c.limit <= 0 && (c.limit = !1),
      [!0, c]
    );
  }, [e, n, s, o]);
}
function Vn(e, t, n, s, o, c, a, l) {
  return (i) => {
    if (!e) t(i);
    else {
      const u = Me(i),
        p = st(n),
        S = st(s),
        h = p.includes(u),
        m = o.some((d) => Me(d) === u);
      let g = n,
        C = o;
      if (m && !h) C = o.filter((d) => Me(d) !== u);
      else {
        const d = h ? p.filter((f) => f !== u) : [...p, u],
          v = c();
        let N;
        h
          ? ({ checkedKeys: N } = nt(d, { halfCheckedKeys: S }, v))
          : ({ checkedKeys: N } = nt(d, !0, v));
        const b = En(N, c, l);
        g = a(b);
      }
      t([...C, ...g]);
    }
  };
}
function $n(e, t, n, s, o) {
  return r.useMemo(() => {
    const [c, a] = o(t);
    if (!e || !t.length) return [c, [], a];
    const l = st(c),
      i = n(),
      { checkedKeys: u, halfCheckedKeys: p } = nt(l, !0, i);
    return [s(u), s(p), a];
  }, [e, t, n, s, o]);
}
function gs({
  prefixCls: e,
  checked: t,
  halfChecked: n,
  disabled: s,
  onClick: o,
  disableCheckbox: c,
}) {
  const { checkable: a } = r.useContext(rt),
    l = typeof a != 'boolean' ? a : null;
  return r.createElement(
    'span',
    {
      className: Ce(`${e}`, {
        [`${e}-checked`]: t,
        [`${e}-indeterminate`]: !t && n,
        [`${e}-disabled`]: s || c,
      }),
      onClick: o,
    },
    l,
  );
}
function Rt() {
  return (
    (Rt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Rt.apply(this, arguments)
  );
}
const Nn = '__cascader_fix_label__';
function Cs({
  prefixCls: e,
  multiple: t,
  options: n,
  activeValue: s,
  prevValuePath: o,
  onToggleOpen: c,
  onSelect: a,
  onActive: l,
  checkedSet: i,
  halfCheckedSet: u,
  loadingKeys: p,
  isSelectable: S,
  disabled: h,
}) {
  const m = `${e}-menu`,
    g = `${e}-menu-item`,
    C = r.useRef(null),
    {
      fieldNames: d,
      changeOnSelect: v,
      expandTrigger: N,
      expandIcon: b,
      loadingIcon: f,
      popupMenuColumnStyle: P,
      optionRender: x,
      classNames: L,
      styles: R,
    } = r.useContext(rt),
    I = N === 'hover',
    X = (D) => h || D,
    M = r.useMemo(
      () =>
        n.map((D) => {
          const { disabled: H, disableCheckbox: z } = D,
            U = D[tt],
            A = D[Nn] ?? D[d.label],
            ne = D[d.value],
            oe = ct(D, d),
            B = U ? U.map((ee) => ee[d.value]) : [...o, ne],
            _ = Me(B),
            W = p.includes(_),
            K = i.has(_),
            Y = u.has(_);
          return {
            disabled: H,
            label: A,
            value: ne,
            isLeaf: oe,
            isLoading: W,
            checked: K,
            halfChecked: Y,
            option: D,
            disableCheckbox: z,
            fullPath: B,
            fullPathKey: _,
          };
        }),
      [n, i, d, u, p, o],
    );
  return (
    r.useEffect(() => {
      if (C.current) {
        const D = `.${g}-active`,
          H = C.current.querySelector(D);
        H && In(H);
      }
    }, [s, g]),
    r.createElement(
      'ul',
      { className: Ce(m, L?.popup?.list), style: R?.popup?.list, ref: C, role: 'menu' },
      M.map(
        ({
          disabled: D,
          label: H,
          value: z,
          isLeaf: U,
          isLoading: A,
          checked: ne,
          halfChecked: oe,
          option: B,
          fullPath: _,
          fullPathKey: W,
          disableCheckbox: K,
        }) => {
          const Y = en(B, { aria: !0, data: !0 }),
            ee = () => {
              if (X(D)) return;
              const E = [..._];
              (I && U && E.pop(), l(E));
            },
            te = () => {
              S(B) && !X(D) && a(_, U);
            };
          let q;
          return (
            typeof B.title == 'string' ? (q = B.title) : typeof H == 'string' && (q = H),
            r.createElement(
              'li',
              Rt({ key: W }, Y, {
                'className': Ce(g, L?.popup?.listItem, {
                  [`${g}-expand`]: !U,
                  [`${g}-active`]: s === z || s === W,
                  [`${g}-disabled`]: X(D),
                  [`${g}-loading`]: A,
                }),
                'style': { ...P, ...R?.popup?.listItem },
                'role': 'menuitemcheckbox',
                'title': q,
                'aria-checked': ne,
                'data-path-key': W,
                'onClick': () => {
                  (ee(), !K && (!t || U) && te());
                },
                'onDoubleClick': () => {
                  v && c(!1);
                },
                'onMouseEnter': () => {
                  I && ee();
                },
                'onMouseDown': (E) => {
                  E.preventDefault();
                },
              }),
              t &&
                r.createElement(gs, {
                  prefixCls: `${e}-checkbox`,
                  checked: ne,
                  halfChecked: oe,
                  disabled: X(D) || K,
                  disableCheckbox: K,
                  onClick: (E) => {
                    K || (E.stopPropagation(), te());
                  },
                }),
              r.createElement(
                'div',
                { className: `${g}-content` },
                x && z !== '__EMPTY__' ? x(B) : H,
              ),
              !A && b && !U && r.createElement('div', { className: `${g}-expand-icon` }, b),
              A && f && r.createElement('div', { className: `${g}-loading-icon` }, f),
            )
          );
        },
      ),
    )
  );
}
const ys = (e, t) => {
    const { values: n } = r.useContext(rt),
      s = n[0],
      [o, c] = r.useState([]);
    return (
      r.useEffect(() => {
        e || c(s || []);
      }, [t, s]),
      [o, c]
    );
  },
  Ss = (e, t, n, s, o, c, a) => {
    const { direction: l, searchValue: i, toggleOpen: u, open: p } = a,
      S = l === 'rtl',
      [h, m, g, C] = r.useMemo(() => {
        let f = -1,
          P = t;
        const x = [],
          L = [],
          R = s.length,
          I = wn(t, n);
        for (let M = 0; M < R && P; M += 1) {
          const D = P.findIndex((H, z) => (I[z] ? Me(I[z]) : H[n.value]) === s[M]);
          if (D === -1) break;
          ((f = D), x.push(f), L.push(s[M]), (P = P[f][n.children]));
        }
        let X = t;
        for (let M = 0; M < x.length - 1; M += 1) X = X[x[M]][n.children];
        return [L, f, X, I];
      }, [s, n, t]),
      d = (f) => {
        o(f);
      },
      v = (f) => {
        const P = g.length;
        let x = m;
        x === -1 && f < 0 && (x = P);
        for (let L = 0; L < P; L += 1) {
          x = (x + f + P) % P;
          const R = g[x];
          if (R && !R.disabled) {
            const I = h.slice(0, -1).concat(C[x] ? Me(C[x]) : R[n.value]);
            d(I);
            return;
          }
        }
      },
      N = () => {
        if (h.length > 1) {
          const f = h.slice(0, -1);
          d(f);
        } else u(!1);
      },
      b = () => {
        const P = (g[m]?.[n.children] || []).find((x) => !x.disabled);
        if (P) {
          const x = [...h, P[n.value]];
          d(x);
        }
      };
    r.useImperativeHandle(e, () => ({
      onKeyDown: (f) => {
        const { which: P } = f;
        switch (P) {
          case ue.UP:
          case ue.DOWN: {
            let x = 0;
            (P === ue.UP ? (x = -1) : P === ue.DOWN && (x = 1), x !== 0 && v(x));
            break;
          }
          case ue.LEFT: {
            if (i) break;
            S ? b() : N();
            break;
          }
          case ue.RIGHT: {
            if (i) break;
            S ? N() : b();
            break;
          }
          case ue.BACKSPACE: {
            i || N();
            break;
          }
          case ue.ENTER: {
            if (h.length) {
              const L = g[m]?.[tt] || [];
              L.length
                ? c(
                    L.map((R) => R[n.value]),
                    L[L.length - 1],
                  )
                : c(h, g[m]);
            }
            break;
          }
          case ue.ESC:
            (u(!1), p && f.stopPropagation());
        }
      },
      onKeyUp: () => {},
    }));
  };
function Lt() {
  return (
    (Lt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Lt.apply(this, arguments)
  );
}
const Rn = r.forwardRef((e, t) => {
  const {
      prefixCls: n,
      multiple: s,
      searchValue: o,
      toggleOpen: c,
      notFoundContent: a,
      direction: l,
      open: i,
      disabled: u,
      lockOptions: p = !1,
    } = e,
    S = r.useRef(null),
    h = l === 'rtl',
    {
      options: m,
      values: g,
      halfValues: C,
      fieldNames: d,
      changeOnSelect: v,
      onSelect: N,
      searchOptions: b,
      popupPrefixCls: f,
      loadData: P,
      expandTrigger: x,
    } = r.useContext(rt),
    L = f || n,
    [R, I] = r.useState([]),
    X = (E) => {
      if (!P || o) return;
      const y = ot(E, m, d).map(({ option: T }) => T),
        w = y[y.length - 1];
      if (w && !ct(w, d)) {
        const T = Me(E);
        (I((j) => [...j, T]), P(y));
      }
    };
  r.useEffect(() => {
    R.length &&
      R.forEach((E) => {
        const V = ds(E),
          y = ot(V, m, d, !0).map(({ option: T }) => T),
          w = y[y.length - 1];
        (!w || w[d.children] || ct(w, d)) && I((T) => T.filter((j) => j !== E));
      });
  }, [m, R, d]);
  const M = r.useMemo(() => new Set(st(g)), [g]),
    D = r.useMemo(() => new Set(st(C)), [C]),
    [H, z] = ys(s, i),
    U = (E) => {
      (z(E), X(E));
    },
    A = (E) => {
      if (u) return !1;
      const { disabled: V } = E,
        y = ct(E, d);
      return !V && (y || v || s);
    },
    ne = (E, V, y = !1) => {
      (N(E), !s && (V || (v && (x === 'hover' || y))) && c(!1));
    },
    oe = r.useMemo(() => (o ? b : m), [o, b, m]),
    B = $t(
      () => oe,
      [i, p],
      (E, V) => !!V[0] && !V[1],
    ),
    _ = r.useMemo(() => {
      const E = [{ options: B }];
      let V = B;
      const y = wn(V, d);
      for (let w = 0; w < H.length; w += 1) {
        const T = H[w],
          ae = V.find((he, ie) => (y[ie] ? Me(y[ie]) : he[d.value]) === T)?.[d.children];
        if (!ae?.length) break;
        ((V = ae), E.push({ options: ae }));
      }
      return E;
    }, [B, H, d]);
  (Ss(
    t,
    B,
    d,
    H,
    U,
    (E, V) => {
      A(V) && ne(E, ct(V, d), !0);
    },
    { direction: l, searchValue: o, toggleOpen: c, open: i },
  ),
    r.useEffect(() => {
      if (!o)
        for (let E = 0; E < H.length; E += 1) {
          const V = H.slice(0, E + 1),
            y = Me(V),
            w = S.current?.querySelector(`li[data-path-key="${y.replace(/\\{0,2}"/g, '\\"')}"]`);
          w && In(w);
        }
    }, [H, o]));
  const K = !_[0]?.options?.length,
    Y = [{ [d.value]: '__EMPTY__', [Nn]: a, disabled: !0 }],
    ee = {
      ...e,
      multiple: !K && s,
      onSelect: ne,
      onActive: U,
      onToggleOpen: c,
      checkedSet: M,
      halfCheckedSet: D,
      loadingKeys: R,
      isSelectable: A,
    },
    q = (K ? [{ options: Y }] : _).map((E, V) => {
      const y = H.slice(0, V),
        w = H[V];
      return r.createElement(
        Cs,
        Lt({ key: V }, ee, { prefixCls: L, options: E.options, prevValuePath: y, activeValue: w }),
      );
    });
  return r.createElement(
    'div',
    { className: Ce(`${L}-menus`, { [`${L}-menu-empty`]: K, [`${L}-rtl`]: h }), ref: S },
    q,
  );
});
function Mt() {
  return (
    (Mt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Mt.apply(this, arguments)
  );
}
const bs = r.forwardRef((e, t) => {
  const { lockOptions: n, ...s } = tn();
  return r.createElement(Rn, Mt({}, e, s, { lockOptions: n, ref: t }));
});
function xs() {}
function Ln(e) {
  const {
      prefixCls: t = 'rc-cascader',
      style: n,
      className: s,
      options: o,
      checkable: c,
      defaultValue: a,
      value: l,
      fieldNames: i,
      changeOnSelect: u,
      onChange: p,
      showCheckedStrategy: S,
      loadData: h,
      expandTrigger: m,
      expandIcon: g = '>',
      loadingIcon: C,
      direction: d,
      notFoundContent: v = 'Not Found',
      disabled: N,
      optionRender: b,
    } = e,
    f = !!c,
    [P, x] = Je(a, l),
    L = yt(P),
    R = r.useMemo(() => vn(i), [JSON.stringify(i)]),
    [I, X, M] = On(R, o),
    D = Pn(I, R),
    [H, z, U] = $n(f, L, X, M, D),
    A = ut((K) => {
      if ((x(K), p)) {
        const Y = yt(K),
          ee = Y.map((E) => ot(E, I, R).map((V) => V.option)),
          te = f ? Y : Y[0],
          q = f ? ee : ee[0];
        p(te, q);
      }
    }),
    ne = Vn(f, A, H, z, U, X, M, S),
    oe = ut((K) => {
      ne(K);
    }),
    B = r.useMemo(
      () => ({
        options: I,
        fieldNames: R,
        values: H,
        halfValues: z,
        changeOnSelect: u,
        onSelect: oe,
        checkable: c,
        searchOptions: [],
        popupPrefixCls: void 0,
        loadData: h,
        expandTrigger: m,
        expandIcon: g,
        loadingIcon: C,
        popupMenuColumnStyle: void 0,
        optionRender: b,
      }),
      [I, R, H, z, u, oe, c, h, m, g, C, b],
    ),
    _ = `${t}-panel`,
    W = !I.length;
  return r.createElement(
    rt.Provider,
    { value: B },
    r.createElement(
      'div',
      { className: Ce(_, { [`${_}-rtl`]: d === 'rtl', [`${_}-empty`]: W }, s), style: n },
      W
        ? v
        : r.createElement(Rn, {
            prefixCls: t,
            searchValue: '',
            multiple: f,
            toggleOpen: xs,
            open: !0,
            direction: d,
            disabled: N,
          }),
    ),
  );
}
function Dt() {
  return (
    (Dt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Dt.apply(this, arguments)
  );
}
const ft = r.forwardRef((e, t) => {
  const {
      id: n,
      prefixCls: s = 'rc-cascader',
      fieldNames: o,
      defaultValue: c,
      value: a,
      changeOnSelect: l,
      onChange: i,
      displayRender: u,
      checkable: p,
      showSearch: S,
      expandTrigger: h,
      options: m,
      popupPrefixCls: g,
      loadData: C,
      open: d,
      popupClassName: v,
      popupMenuColumnStyle: N,
      popupStyle: b,
      classNames: f,
      styles: P,
      placement: x,
      onPopupVisibleChange: L,
      expandIcon: R = '>',
      loadingIcon: I,
      children: X,
      popupMatchSelectWidth: M = !1,
      showCheckedStrategy: D = bn,
      optionRender: H,
      ...z
    } = e,
    U = nn(n),
    A = !!p,
    [ne, oe] = Je(c, a),
    B = yt(ne),
    _ = r.useMemo(() => vn(o), [JSON.stringify(o)]),
    [W, K, Y] = On(_, m),
    [ee, te] = hs(S, e),
    { autoClearSearchValue: q = !0, searchValue: E, onSearch: V } = te,
    [y, w] = Je('', E),
    T = y || '',
    j = (G, $) => {
      (w(G), $.source !== 'blur' && V && V(G));
    },
    ae = us(T, W, _, g || s, te, l || A),
    he = Pn(W, _),
    [ie, Z, le] = $n(A, B, K, Y, he),
    fe = r.useMemo(() => {
      const G = st(ie),
        $ = En(G, K, D);
      return [...le, ...Y($)];
    }, [ie, K, Y, le, D]),
    J = fs(fe, W, _, A, u),
    ye = ut((G) => {
      if ((oe(G), i)) {
        const $ = yt(G),
          O = $.map((Re) => ot(Re, W, _).map((ve) => ve.option)),
          k = A ? $ : $[0],
          Ne = A ? O : O[0];
        i(k, Ne);
      }
    }),
    ge = Vn(A, ye, ie, Z, le, K, Y, D),
    Se = ut((G) => {
      ((!A || q) && w(''), ge(G));
    }),
    Ee = (G, $) => {
      if ($.type === 'clear') {
        ye([]);
        return;
      }
      const { valueCells: O } = $.values[0];
      Se(O);
    },
    xe = (G) => {
      L?.(G);
    },
    de = r.useMemo(
      () => ({
        classNames: f,
        styles: P,
        options: W,
        fieldNames: _,
        values: ie,
        halfValues: Z,
        changeOnSelect: l,
        onSelect: Se,
        checkable: p,
        searchOptions: ae,
        popupPrefixCls: g,
        loadData: C,
        expandTrigger: h,
        expandIcon: R,
        loadingIcon: I,
        popupMenuColumnStyle: N,
        optionRender: H,
      }),
      [f, P, W, _, ie, Z, l, Se, p, ae, g, C, h, R, I, N, H],
    ),
    De = !(T ? ae : W).length,
    Pe = (T && te.matchInputWidth) || De ? {} : { minWidth: 'auto' };
  return r.createElement(
    rt.Provider,
    { value: de },
    r.createElement(
      sn,
      Dt({}, z, {
        ref: t,
        id: U,
        prefixCls: s,
        autoClearSearchValue: q,
        popupMatchSelectWidth: M,
        classNames: f,
        styles: P,
        popupStyle: { ...Pe, ...b },
        displayValues: J,
        onDisplayValuesChange: Ee,
        mode: A ? 'multiple' : void 0,
        searchValue: T,
        onSearch: j,
        showSearch: ee,
        OptionList: bs,
        emptyOptions: De,
        open: d,
        popupClassName: v,
        placement: x,
        onPopupVisibleChange: xe,
        getRawInputElement: () => X,
      }),
    ),
  );
});
ft.SHOW_PARENT = bn;
ft.SHOW_CHILD = xn;
ft.Panel = Ln;
function Mn(e, t) {
  const { getPrefixCls: n, direction: s, renderEmpty: o } = r.useContext(St),
    c = t || s,
    a = n('select', e),
    l = n('cascader', e);
  return [a, l, c, o];
}
function Dn(e, t) {
  return r.useMemo(
    () => (t ? r.createElement('span', { className: `${e}-checkbox-inner` }) : !1),
    [e, t],
  );
}
const Tn = (e) => {
    const { prefixCls: t, componentCls: n } = e,
      s = `${n}-menu-item`,
      o = `
  &${s}-expand ${s}-expand-icon,
  ${s}-loading-icon
`;
    return [
      Sn(`${t}-checkbox`, e),
      {
        [n]: {
          '&-checkbox': { top: 0, marginInlineEnd: e.paddingXS, pointerEvents: 'unset' },
          '&-menus': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            [`&${n}-menu-empty`]: {
              [`${n}-menu`]: { width: '100%', height: 'auto', [s]: { color: e.colorTextDisabled } },
            },
          },
          '&-menu': {
            'flexGrow': 1,
            'flexShrink': 0,
            'minWidth': e.controlItemWidth,
            'height': e.dropdownHeight,
            'margin': 0,
            'padding': e.menuPadding,
            'overflow': 'auto',
            'verticalAlign': 'top',
            'listStyle': 'none',
            '-ms-overflow-style': '-ms-autohiding-scrollbar',
            '&:not(:last-child)': {
              borderInlineEnd: `${dt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            },
            '&-item': {
              ...Bn,
              'display': 'flex',
              'flexWrap': 'nowrap',
              'alignItems': 'center',
              'padding': e.optionPadding,
              'lineHeight': e.lineHeight,
              'cursor': 'pointer',
              'transition': `all ${e.motionDurationMid}`,
              'borderRadius': e.borderRadiusSM,
              '&:hover': { background: e.controlItemBgHover },
              '&-disabled': {
                'color': e.colorTextDisabled,
                'cursor': 'not-allowed',
                '&:hover': { background: 'transparent' },
                [o]: { color: e.colorTextDisabled },
              },
              [`&-active:not(${s}-disabled)`]: {
                '&, &:hover': {
                  color: e.optionSelectedColor,
                  fontWeight: e.optionSelectedFontWeight,
                  backgroundColor: e.optionSelectedBg,
                },
              },
              '&-content': { flex: 'auto' },
              [o]: {
                marginInlineStart: e.paddingXXS,
                color: e.colorIcon,
                fontSize: e.fontSizeIcon,
              },
              '&-keyword': { color: e.colorHighlight },
            },
          },
        },
      },
    ];
  },
  vs = (e) => {
    const { componentCls: t, antCls: n } = e;
    return [
      { [t]: { width: e.controlWidth } },
      { [`${t}-dropdown`]: [{ [`&${n}-select-dropdown`]: { padding: 0 } }, Tn(e)] },
      { [`${t}-dropdown-rtl`]: { direction: 'rtl' } },
      Gn(e),
    ];
  },
  Hn = (e) => {
    const t = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
    return {
      controlWidth: 184,
      controlItemWidth: 111,
      dropdownHeight: 180,
      optionSelectedBg: e.controlItemBgActive,
      optionSelectedFontWeight: e.fontWeightStrong,
      optionPadding: `${t}px ${e.paddingSM}px`,
      menuPadding: e.paddingXXS,
      optionSelectedColor: e.colorText,
    };
  },
  kn = bt('Cascader', vs, Hn, { resetFont: !1, unitless: { optionSelectedFontWeight: !0 } }),
  Is = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-panel`]: [
        Tn(e),
        {
          'display': 'inline-flex',
          'border': `${dt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
          'borderRadius': e.borderRadiusLG,
          'overflowX': 'auto',
          'maxWidth': '100%',
          [`${t}-menus`]: { alignItems: 'stretch' },
          [`${t}-menu`]: { height: 'auto' },
          '&-empty': { padding: e.paddingXXS },
        },
      ],
    };
  },
  ws = Xn(['Cascader', 'Panel'], Is, Hn, { resetFont: !1 }),
  Es = r.createElement(Un, { spin: !0 }),
  Ps = r.createElement(Jn, null),
  Os = r.createElement(ls, null);
function _n({
  contextExpandIcon: e,
  contextLoadingIcon: t,
  expandIcon: n,
  loadingIcon: s,
  isRtl: o,
}) {
  return r.useMemo(
    () => ({ expandIcon: n ?? e ?? (o ? Os : Ps), loadingIcon: s ?? t ?? Es }),
    [e, t, n, o, s],
  );
}
function Vs(e) {
  const {
      prefixCls: t,
      className: n,
      multiple: s,
      rootClassName: o,
      notFoundContent: c,
      direction: a,
      expandIcon: l,
      loadingIcon: i,
      disabled: u,
    } = e,
    { expandIcon: p, loadingIcon: S } = xt('cascader'),
    h = r.useContext(vt),
    m = u ?? h,
    [g, C, d, v] = Mn(t, a),
    N = it(C),
    [b, f] = kn(C, N);
  ws(C);
  const P = d === 'rtl',
    { expandIcon: x, loadingIcon: L } = _n({
      contextExpandIcon: p,
      contextLoadingIcon: S,
      expandIcon: l,
      loadingIcon: i,
      isRtl: P,
    }),
    R = c || v?.('Cascader') || r.createElement(Ft, { componentName: 'Cascader' }),
    I = Dn(C, s);
  return r.createElement(Ln, {
    ...e,
    checkable: I,
    prefixCls: C,
    className: Ce(n, b, o, f, N),
    notFoundContent: R,
    direction: d,
    expandIcon: x,
    loadingIcon: L,
    disabled: m,
  });
}
const { SHOW_CHILD: $s, SHOW_PARENT: Ns } = ft,
  Rs = (e, t, n) => {
    const s = e
        .toLowerCase()
        .split(t)
        .reduce((a, l, i) => (i === 0 ? [l] : [].concat(Yn(a), [t, l])), []),
      o = [];
    let c = 0;
    return (
      s.forEach((a, l) => {
        const i = c + a.length;
        let u = e.slice(c, i);
        ((c = i),
          l % 2 === 1 &&
            (u = r.createElement(
              'span',
              { className: `${n}-menu-item-keyword`, key: `separator-${l}` },
              u,
            )),
          o.push(u));
      }),
      o
    );
  },
  Ls = (e, t, n, s) => {
    const o = [],
      c = e.toLowerCase();
    return (
      t.forEach((a, l) => {
        l !== 0 && o.push(' / ');
        let i = a[s.label];
        const u = typeof i;
        ((u === 'string' || u === 'number') && (i = Rs(String(i), c, n)), o.push(i));
      }),
      o
    );
  },
  mt = r.forwardRef((e, t) => {
    const {
        prefixCls: n,
        size: s,
        disabled: o,
        className: c,
        rootClassName: a,
        multiple: l,
        bordered: i = !0,
        transitionName: u,
        choiceTransitionName: p = '',
        popupClassName: S,
        expandIcon: h,
        placement: m,
        showSearch: g,
        allowClear: C = !0,
        notFoundContent: d,
        direction: v,
        getPopupContainer: N,
        status: b,
        showArrow: f,
        builtinPlacements: P,
        style: x,
        variant: L,
        dropdownClassName: R,
        dropdownRender: I,
        onDropdownVisibleChange: X,
        onPopupVisibleChange: M,
        dropdownMenuColumnStyle: D,
        popupRender: H,
        dropdownStyle: z,
        popupMenuColumnStyle: U,
        onOpenChange: A,
        styles: ne,
        classNames: oe,
        loadingIcon: B,
        ..._
      } = e,
      W = pt(_, ['suffixIcon']),
      {
        getPrefixCls: K,
        getPopupContainer: Y,
        className: ee,
        style: te,
        classNames: q,
        styles: E,
        expandIcon: V,
        loadingIcon: y,
      } = xt('cascader'),
      { popupOverflow: w } = r.useContext(St),
      { status: T, hasFeedback: j, isFormItemInput: ae, feedbackIcon: he } = r.useContext(on),
      ie = gn(T, b),
      [Z, le, fe, J] = Mn(n, v),
      ye = fe === 'rtl',
      ge = K(),
      Se = it(Z),
      [Ee, xe] = rn(Z, Se),
      de = it(le);
    kn(le, de);
    const { compactSize: De, compactItemClassnames: Pe } = an(Z, v),
      [G, $] = ln('cascader', L, i),
      O = d || J?.('Cascader') || r.createElement(Ft, { componentName: 'Cascader' }),
      k = cn(H || I),
      Ne = U || D,
      Re = A || M || X,
      ve = r.useMemo(() => {
        if (!g) return g;
        let Ve = { render: Ls };
        return (typeof g == 'object' && (Ve = { ...Ve, ...g }), Ve);
      }, [g]),
      Le = Wt((Ve) => s ?? De ?? Ve),
      Ke = r.useContext(vt),
      pe = o ?? Ke,
      { expandIcon: Ie, loadingIcon: Te } = _n({
        contextExpandIcon: V,
        contextLoadingIcon: y,
        expandIcon: h,
        loadingIcon: B,
        isRtl: ye,
      }),
      He = Dn(le, l),
      Ye = un(e.suffixIcon, f),
      {
        suffixIcon: Ae,
        removeIcon: Fe,
        clearIcon: We,
      } = dn({
        ...e,
        loadingIcon: Te,
        hasFeedback: j,
        feedbackIcon: he,
        showSuffixIcon: Ye,
        multiple: l,
        componentName: 'Cascader',
      }),
      ke = r.useMemo(() => (m !== void 0 ? m : ye ? 'bottomRight' : 'bottomLeft'), [m, ye]),
      qe = C === !0 ? { clearIcon: We } : C,
      Ze = { ...e, variant: G, size: Le, status: ie, disabled: pe },
      [Oe, _e] = pn([q, oe], [E, ne], { props: Ze }, { popup: { _default: 'root' } }),
      Qe = { ..._e.popup?.root, ...z },
      [Ue] = fn('SelectLike', Qe?.zIndex),
      je = Ce(
        S || R,
        `${le}-dropdown`,
        { [`${le}-dropdown-rtl`]: fe === 'rtl' },
        a,
        Se,
        Oe.popup?.root,
        de,
        Ee,
        xe,
      );
    return r.createElement(ft, {
      prefixCls: Z,
      className: Ce(
        !n && le,
        {
          [`${Z}-lg`]: Le === 'large',
          [`${Z}-sm`]: Le === 'small',
          [`${Z}-rtl`]: ye,
          [`${Z}-${G}`]: $,
          [`${Z}-in-form-item`]: ae,
        },
        hn(Z, ie, j),
        Pe,
        ee,
        c,
        a,
        Oe.root,
        Se,
        de,
        Ee,
        xe,
      ),
      disabled: pe,
      style: { ..._e.root, ...te, ...x },
      classNames: Oe,
      styles: _e,
      ...W,
      builtinPlacements: mn(P, w),
      direction: fe,
      placement: ke,
      notFoundContent: O,
      allowClear: qe,
      showSearch: ve,
      expandIcon: Ie,
      suffixIcon: Ae,
      removeIcon: Fe,
      loadingIcon: Te,
      checkable: He,
      popupClassName: je,
      popupPrefixCls: n || le,
      popupStyle: { ...Qe, zIndex: Ue },
      popupRender: k,
      popupMenuColumnStyle: Ne,
      onPopupVisibleChange: Re,
      choiceTransitionName: Ct(ge, '', p),
      transitionName: Ct(ge, 'slide-up', u),
      getPopupContainer: N || Y,
      ref: t,
    });
  }),
  Ms = Cn(mt, 'popupAlign', (e) => pt(e, ['visible']));
mt.SHOW_PARENT = Ns;
mt.SHOW_CHILD = $s;
mt.Panel = Vs;
mt._InternalPanelDoNotUseOrYouWillBeFired = Ms;
const An = ['wrap', 'nowrap', 'wrap-reverse'],
  Kn = [
    'flex-start',
    'flex-end',
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'normal',
    'left',
    'right',
  ],
  Fn = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'self-start',
    'self-end',
    'baseline',
    'normal',
    'stretch',
  ],
  Ds = (e, t) => {
    const n = t.wrap === !0 ? 'wrap' : t.wrap;
    return { [`${e}-wrap-${n}`]: n && An.includes(n) };
  },
  Ts = (e, t) => {
    const n = {};
    return (
      Fn.forEach((s) => {
        n[`${e}-align-${s}`] = t.align === s;
      }),
      (n[`${e}-align-stretch`] = !t.align && !!t.vertical),
      n
    );
  },
  Hs = (e, t) => {
    const n = {};
    return (
      Kn.forEach((s) => {
        n[`${e}-justify-${s}`] = t.justify === s;
      }),
      n
    );
  },
  ks = (e, t) => Ce({ ...Ds(e, t), ...Ts(e, t), ...Hs(e, t) }),
  _s = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        'display': 'flex',
        'margin': 0,
        'padding': 0,
        '&-vertical': { flexDirection: 'column' },
        '&-rtl': { direction: 'rtl' },
        '&:empty': { display: 'none' },
      },
    };
  },
  As = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-gap-small': { gap: e.flexGapSM },
        '&-gap-medium, &-gap-middle': { gap: e.flexGap },
        '&-gap-large': { gap: e.flexGapLG },
      },
    };
  },
  Ks = (e) => {
    const { componentCls: t } = e,
      n = {};
    return (
      An.forEach((s) => {
        n[`${t}-wrap-${s}`] = { flexWrap: s };
      }),
      n
    );
  },
  Fs = (e) => {
    const { componentCls: t } = e,
      n = {};
    return (
      Fn.forEach((s) => {
        n[`${t}-align-${s}`] = { alignItems: s };
      }),
      n
    );
  },
  Ws = (e) => {
    const { componentCls: t } = e,
      n = {};
    return (
      Kn.forEach((s) => {
        n[`${t}-justify-${s}`] = { justifyContent: s };
      }),
      n
    );
  },
  js = () => ({}),
  zs = bt(
    'Flex',
    (e) => {
      const { paddingXS: t, padding: n, paddingLG: s } = e,
        o = It(e, { flexGapSM: t, flexGap: n, flexGapLG: s });
      return [_s(o), As(o), Ks(o), Fs(o), Ws(o)];
    },
    js,
    { resetStyle: !1 },
  ),
  Ao = me.forwardRef((e, t) => {
    const {
        prefixCls: n,
        rootClassName: s,
        className: o,
        style: c,
        flex: a,
        gap: l,
        vertical: i,
        orientation: u,
        component: p = 'div',
        children: S,
        ...h
      } = e,
      { flex: m, direction: g, getPrefixCls: C } = me.useContext(St),
      d = C('flex', n),
      [v, N] = zs(d),
      [, b] = qn(u, i ?? m?.vertical),
      f = Ce(o, s, m?.className, d, v, N, ks(d, { ...e, vertical: b }), {
        [`${d}-rtl`]: g === 'rtl',
        [`${d}-gap-${l}`]: Jt(l),
        [`${d}-vertical`]: b,
      }),
      P = { ...m?.style, ...c };
    return (
      Ut(a) && (P.flex = a),
      Ut(l) && !Jt(l) && (P.gap = l),
      me.createElement(
        p,
        { ref: t, className: f, style: P, ...pt(h, ['justify', 'wrap', 'align']) },
        S,
      )
    );
  });
var Bs = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
        },
      },
    ],
  },
  name: 'star',
  theme: 'filled',
};
function Tt() {
  return (
    (Tt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Tt.apply(this, arguments)
  );
}
const Gs = (e, t) => r.createElement(Zn, Tt({}, e, { ref: t, icon: Bs })),
  Xs = r.forwardRef(Gs);
function Us(e, t) {
  const {
      disabled: n,
      prefixCls: s,
      character: o,
      characterRender: c,
      index: a,
      count: l,
      value: i,
      allowHalf: u,
      focused: p,
      onHover: S,
      onClick: h,
    } = e,
    m = (f) => {
      S(f, a);
    },
    g = (f) => {
      h(f, a);
    },
    C = (f) => {
      f.keyCode === ue.ENTER && h(f, a);
    },
    d = a + 1,
    v = new Set([s]);
  i === 0 && a === 0 && p
    ? v.add(`${s}-focused`)
    : u && i + 0.5 >= d && i < d
      ? (v.add(`${s}-half`), v.add(`${s}-active`), p && v.add(`${s}-focused`))
      : (d <= i ? v.add(`${s}-full`) : v.add(`${s}-zero`), d === i && p && v.add(`${s}-focused`));
  const N = typeof o == 'function' ? o(e) : o;
  let b = me.createElement(
    'li',
    { className: Ce(Array.from(v)), ref: t },
    me.createElement(
      'div',
      {
        'onClick': n ? null : g,
        'onKeyDown': n ? null : C,
        'onMouseMove': n ? null : m,
        'role': 'radio',
        'aria-checked': i > a ? 'true' : 'false',
        'aria-posinset': a + 1,
        'aria-setsize': l,
        'tabIndex': n ? -1 : 0,
      },
      me.createElement('div', { className: `${s}-first` }, N),
      me.createElement('div', { className: `${s}-second` }, N),
    ),
  );
  return (c && (b = c(b, e)), b);
}
const Js = me.forwardRef(Us);
function Ys() {
  const e = r.useRef({});
  function t(s) {
    return e.current[s];
  }
  function n(s) {
    return (o) => {
      e.current[s] = o;
    };
  }
  return [t, n];
}
function qs(e) {
  let t = e.pageXOffset;
  const n = 'scrollLeft';
  if (typeof t != 'number') {
    const s = e.document;
    ((t = s.documentElement[n]), typeof t != 'number' && (t = s.body[n]));
  }
  return t;
}
function Zs(e) {
  let t, n;
  const s = e.ownerDocument,
    { body: o } = s,
    c = s && s.documentElement,
    a = e.getBoundingClientRect();
  return (
    (t = a.left),
    (n = a.top),
    (t -= c.clientLeft || o.clientLeft || 0),
    (n -= c.clientTop || o.clientTop || 0),
    { left: t, top: n }
  );
}
function Qs(e) {
  const t = Zs(e),
    n = e.ownerDocument,
    s = n.defaultView || n.parentWindow;
  return ((t.left += qs(s)), t.left);
}
function Ht() {
  return (
    (Ht = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Ht.apply(this, arguments)
  );
}
function eo(e, t) {
  const {
      prefixCls: n = 'rc-rate',
      className: s,
      defaultValue: o,
      value: c,
      count: a = 5,
      allowHalf: l = !1,
      allowClear: i = !0,
      keyboard: u = !0,
      character: p = '★',
      characterRender: S,
      disabled: h,
      direction: m = 'ltr',
      tabIndex: g = 0,
      autoFocus: C,
      onHoverChange: d,
      onChange: v,
      onFocus: N,
      onBlur: b,
      onKeyDown: f,
      onMouseLeave: P,
      ...x
    } = e,
    [L, R] = Ys(),
    I = me.useRef(null),
    X = () => {
      h || I.current?.focus();
    };
  me.useImperativeHandle(t, () => ({
    focus: X,
    blur: () => {
      h || I.current?.blur();
    },
  }));
  const [M, D] = Je(o || 0, c),
    [H, z] = Je(null),
    U = (y, w) => {
      const T = m === 'rtl';
      let j = y + 1;
      if (l) {
        const ae = L(y),
          he = Qs(ae),
          ie = ae.clientWidth;
        ((T && w - he > ie / 2) || (!T && w - he < ie / 2)) && (j -= 0.5);
      }
      return j;
    },
    A = (y) => {
      (D(y), v?.(y));
    },
    [ne, oe] = me.useState(!1),
    B = () => {
      (oe(!0), N?.());
    },
    _ = () => {
      (oe(!1), b?.());
    },
    [W, K] = me.useState(null),
    Y = (y, w) => {
      const T = U(w, y.pageX);
      (T !== H && (K(T), z(null)), d?.(T));
    },
    ee = (y) => {
      (h || (K(null), z(null), d?.(void 0)), y && P?.(y));
    },
    te = (y, w) => {
      const T = U(w, y.pageX);
      let j = !1;
      (i && (j = T === M), ee(), A(j ? 0 : T), z(j ? T : null));
    },
    q = (y) => {
      const { keyCode: w } = y,
        T = m === 'rtl',
        j = l ? 0.5 : 1;
      (u &&
        (w === ue.RIGHT && M < a && !T
          ? (A(M + j), y.preventDefault())
          : (w === ue.LEFT && M > 0 && !T) || (w === ue.RIGHT && M > 0 && T)
            ? (A(M - j), y.preventDefault())
            : w === ue.LEFT && M < a && T && (A(M + j), y.preventDefault())),
        f?.(y));
    };
  me.useEffect(() => {
    C && !h && X();
  }, []);
  const E = new Array(a)
      .fill(0)
      .map((y, w) =>
        me.createElement(Js, {
          ref: R(w),
          index: w,
          count: a,
          disabled: h,
          prefixCls: `${n}-star`,
          allowHalf: l,
          value: W === null ? M : W,
          onClick: te,
          onHover: Y,
          key: y || w,
          character: p,
          characterRender: S,
          focused: ne,
        }),
      ),
    V = Ce(n, s, { [`${n}-disabled`]: h, [`${n}-rtl`]: m === 'rtl' });
  return me.createElement(
    'ul',
    Ht(
      {
        className: V,
        onMouseLeave: ee,
        tabIndex: h ? -1 : g,
        onFocus: h ? null : B,
        onBlur: h ? null : _,
        onKeyDown: h ? null : q,
        ref: I,
      },
      en(x, { aria: !0, data: !0, attr: !0 }),
    ),
    E,
  );
}
const to = me.forwardRef(eo),
  no = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-star`]: {
        'position': 'relative',
        'display': 'inline-block',
        'color': 'inherit',
        'cursor': 'pointer',
        '&:not(:last-child)': { marginInlineEnd: e.marginXS },
        '> div': {
          'transition': `all ${e.motionDurationMid}, outline 0s`,
          '&:hover': { transform: e.starHoverScale },
          '&:focus': { outline: 0 },
          '&:focus-visible': {
            outline: `${dt(e.lineWidth)} dashed ${e.starColor}`,
            transform: e.starHoverScale,
          },
        },
        '&-first, &-second': {
          color: e.starBg,
          transition: `all ${e.motionDurationMid}`,
          userSelect: 'none',
        },
        '&-first': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          width: '50%',
          height: '100%',
          overflow: 'hidden',
          opacity: 0,
        },
        [`&-half ${t}-star-first, &-half ${t}-star-second`]: { opacity: 1 },
        [`&-half ${t}-star-first, &-full ${t}-star-second`]: { color: 'inherit' },
      },
    };
  },
  so = (e) => ({ [`&-rtl${e.componentCls}`]: { direction: 'rtl' } }),
  oo = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        ...Qn(e),
        'display': 'inline-block',
        'margin': 0,
        'padding': 0,
        'color': e.starColor,
        'fontSize': e.starSize,
        'lineHeight': 1,
        'listStyle': 'none',
        'outline': 'none',
        '&-small': { fontSize: e.starSizeSM },
        '&-large': { fontSize: e.starSizeLG },
        [`&-disabled${t} ${t}-star`]: {
          'cursor': 'default',
          '> div:hover': { transform: 'scale(1)' },
        },
        ...no(e),
        ...so(e),
      },
    };
  },
  ro = (e) => ({
    starColor: e.yellow6,
    starSize: e.controlHeight * 0.625,
    starSizeSM: e.controlHeightSM * 0.625,
    starSizeLG: e.controlHeightLG * 0.625,
    starHoverScale: 'scale(1.1)',
    starBg: e.colorFillContent,
  }),
  ao = bt(
    'Rate',
    (e) => {
      const t = It(e, {});
      return oo(t);
    },
    ro,
  ),
  lo = (e) => typeof e == 'object' && e !== null,
  Ko = r.forwardRef((e, t) => {
    const {
        prefixCls: n,
        className: s,
        rootClassName: o,
        style: c,
        tooltips: a,
        character: l = r.createElement(Xs, null),
        disabled: i,
        size: u,
        ...p
      } = e,
      S = (L, { index: R }) => {
        if (!a) return L;
        const I = a[R];
        return lo(I) ? r.createElement(Yt, { ...I }, L) : r.createElement(Yt, { title: I }, L);
      },
      { getPrefixCls: h, direction: m, className: g, style: C } = xt('rate'),
      d = h('rate', n),
      [v, N] = ao(d),
      b = { ...C, ...c },
      f = r.useContext(vt),
      P = i ?? f,
      x = Wt((L) => u ?? L);
    return r.createElement(to, {
      ref: t,
      character: l,
      characterRender: S,
      disabled: P,
      ...p,
      className: Ce(
        { [`${d}-large`]: x === 'large', [`${d}-small`]: x === 'small' },
        s,
        o,
        v,
        N,
        g,
      ),
      style: b,
      prefixCls: d,
      direction: m,
    });
  }),
  co = (e) => {
    const t = r.useRef({ valueLabels: new Map() });
    return r.useMemo(() => {
      const { valueLabels: n } = t.current,
        s = new Map(),
        o = e.map((c) => {
          const { value: a, label: l } = c,
            i = l ?? n.get(a);
          return (s.set(a, i), { ...c, label: i });
        });
      return ((t.current.valueLabels = s), [o]);
    }, [e]);
  },
  io = (e, t, n, s) =>
    r.useMemo(() => {
      const o = (p) => p.map(({ value: S }) => S),
        c = o(e),
        a = o(t),
        l = c.filter((p) => !s[p]);
      let i = c,
        u = a;
      if (n) {
        const p = nt(c, !0, s);
        ((i = p.checkedKeys), (u = p.halfCheckedKeys));
      }
      return [Array.from(new Set([...l, ...i])), u];
    }, [e, t, n, s]),
  uo = (e) => (Array.isArray(e) ? e : e !== void 0 ? [e] : []),
  po = (e) => {
    const { label: t, value: n, children: s } = e || {};
    return {
      _title: t ? [t] : ['title', 'label'],
      value: n || 'value',
      key: n || 'value',
      children: s || 'children',
    };
  },
  kt = (e) => !e || e.disabled || e.disableCheckbox || e.checkable === !1,
  fo = (e, t) => {
    const n = [],
      s = (o) => {
        o.forEach((c) => {
          const a = c[t.children];
          a && (n.push(c[t.value]), s(a));
        });
      };
    return (s(e), n);
  },
  qt = (e) => e == null,
  mo = (e, t) =>
    r.useMemo(
      () =>
        yn(e, {
          fieldNames: t,
          initWrapper: (s) => ({ ...s, valueEntities: new Map() }),
          processEntity: (s, o) => {
            const c = s.node[t.value];
            o.valueEntities.set(c, s);
          },
        }),
      [e, t],
    ),
  zt = () => null;
function Wn(e) {
  return ts(e)
    .map((t) => {
      if (!r.isValidElement(t) || !t.type) return null;
      const {
          key: n,
          props: { children: s, value: o, ...c },
        } = t,
        a = { key: n, value: o, ...c },
        l = Wn(s);
      return (l.length && (a.children = l), a);
    })
    .filter((t) => t);
}
function _t(e) {
  if (!e) return e;
  const t = { ...e };
  return (
    'props' in t ||
      Object.defineProperty(t, 'props', {
        get() {
          return (
            Nt(
              !1,
              'New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access.',
            ),
            t
          );
        },
      }),
    t
  );
}
function ho(e, t, n, s, o, c) {
  let a = null,
    l = null;
  function i() {
    function u(p, S = '0', h = !1) {
      return p
        .map((m, g) => {
          const C = `${S}-${g}`,
            d = m[c.value],
            v = n.includes(d),
            N = u(m[c.children] || [], C, v),
            b = r.createElement(
              zt,
              m,
              N.map((f) => f.node),
            );
          if ((t === d && (a = b), v)) {
            const f = { pos: C, node: b, children: N };
            return (h || l.push(f), f);
          }
          return null;
        })
        .filter((m) => m);
    }
    l ||
      ((l = []),
      u(s),
      l.sort(
        (
          {
            node: {
              props: { value: p },
            },
          },
          {
            node: {
              props: { value: S },
            },
          },
        ) => {
          const h = n.indexOf(p),
            m = n.indexOf(S);
          return h - m;
        },
      ));
  }
  (Object.defineProperty(e, 'triggerNode', {
    get() {
      return (
        Nt(!1, '`triggerNode` is deprecated. Please consider decoupling data with node.'),
        i(),
        a
      );
    },
  }),
    Object.defineProperty(e, 'allCheckedNodes', {
      get() {
        return (
          Nt(!1, '`allCheckedNodes` is deprecated. Please consider decoupling data with node.'),
          i(),
          o ? l : l.map(({ node: u }) => u)
        );
      },
    }));
}
const go = (e, t, n) => {
  const { fieldNames: s, treeNodeFilterProp: o, filterTreeNode: c } = n,
    { children: a } = s;
  return r.useMemo(() => {
    if (!t || c === !1) return e;
    const l =
        typeof c == 'function' ? c : (u, p) => String(p[o]).toUpperCase().includes(t.toUpperCase()),
      i = (u, p = !1) =>
        u.reduce((S, h) => {
          const m = h[a],
            g = p || l(t, _t(h)),
            C = i(m || [], g);
          return ((g || C.length) && S.push({ ...h, isLeaf: void 0, [a]: C }), S);
        }, []);
    return i(e);
  }, [e, t, a, o, c]);
};
function Zt(e) {
  const t = r.useRef();
  return ((t.current = e), r.useCallback((...s) => t.current(...s), []));
}
function Co(e, t) {
  const { id: n, pId: s, rootPId: o } = t,
    c = new Map(),
    a = [];
  return (
    e.forEach((l) => {
      const i = l[n],
        u = { ...l, key: l.key || i };
      c.set(i, u);
    }),
    c.forEach((l) => {
      const i = l[s],
        u = c.get(i);
      u
        ? ((u.children = u.children || []), u.children.push(l))
        : (i === o || o === null) && a.push(l);
    }),
    a
  );
}
function yo(e, t, n) {
  return r.useMemo(() => {
    if (e) {
      if (n) {
        const s = { id: 'id', pId: 'pId', rootPId: null, ...(typeof n == 'object' ? n : {}) };
        return Co(e, s);
      }
      return e;
    }
    return Wn(t);
  }, [t, n, e]);
}
const jn = r.createContext(null),
  zn = r.createContext(null);
function At() {
  return (
    (At = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    At.apply(this, arguments)
  );
}
const So = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  bo = (e, t) => {
    const {
        prefixCls: n,
        multiple: s,
        searchValue: o,
        toggleOpen: c,
        open: a,
        notFoundContent: l,
      } = tn(),
      {
        virtual: i,
        listHeight: u,
        listItemHeight: p,
        listItemScrollOffset: S,
        treeData: h,
        fieldNames: m,
        onSelect: g,
        popupMatchSelectWidth: C,
        treeExpandAction: d,
        treeTitleRender: v,
        onPopupScroll: N,
        leftMaxCount: b,
        leafCountOnly: f,
        valueEntities: P,
        classNames: x,
        styles: L,
      } = r.useContext(zn),
      {
        checkable: R,
        checkedKeys: I,
        halfCheckedKeys: X,
        treeExpandedKeys: M,
        treeDefaultExpandAll: D,
        treeDefaultExpandedKeys: H,
        onTreeExpand: z,
        treeIcon: U,
        showTreeIcon: A,
        switcherIcon: ne,
        treeLine: oe,
        treeNodeFilterProp: B,
        loadData: _,
        treeLoadedKeys: W,
        treeMotion: K,
        onTreeLoad: Y,
        keyEntities: ee,
      } = r.useContext(jn),
      te = r.useRef(),
      q = $t(
        () => h,
        [a, h],
        ($, O) => O[0] && $[1] !== O[1],
      ),
      E = r.useMemo(() => (R ? { checked: I, halfChecked: X } : null), [R, I, X]);
    r.useEffect(() => {
      a && !s && I.length && te.current?.scrollTo({ key: I[0] });
    }, [a]);
    const V = ($) => {
        $.preventDefault();
      },
      y = ($, O) => {
        const { node: k } = O;
        (R && kt(k)) || (g(k.key, { selected: !I.includes(k.key) }), s || c(!1));
      },
      [w, T] = r.useState(H),
      [j, ae] = r.useState(null),
      he = r.useMemo(() => (M ? [...M] : o ? j : w), [w, j, M, o]),
      ie = ($) => {
        (T($), ae($), z && z($));
      },
      Z = String(o).toLowerCase(),
      le = ($) => (Z ? String($[B]).toLowerCase().includes(Z) : !1);
    r.useEffect(() => {
      o && ae(fo(h, m));
    }, [o]);
    const [fe, J] = r.useState(() => new Map());
    r.useEffect(() => {
      b && J(new Map());
    }, [b]);
    function ye($) {
      const O = $[m.value];
      if (!fe.has(O)) {
        const k = P.get(O);
        if ((k.children || []).length === 0) fe.set(O, !1);
        else {
          const ve = k.children.filter(
            (Le) => !Le.node.disabled && !Le.node.disableCheckbox && !I.includes(Le.node[m.value]),
          ).length;
          fe.set(O, ve > b);
        }
      }
      return fe.get(O);
    }
    const ge = ut(($) => {
        const O = $[m.value];
        return I.includes(O) || b === null ? !1 : b <= 0 ? !0 : f && b ? ye($) : !1;
      }),
      Se = ($) => {
        for (const O of $)
          if (!(O.disabled || O.selectable === !1)) {
            if (o) {
              if (le(O)) return O;
            } else return O;
            if (O[m.children]) {
              const k = Se(O[m.children]);
              if (k) return k;
            }
          }
        return null;
      },
      [Ee, xe] = r.useState(null),
      de = ee[Ee];
    (r.useEffect(() => {
      if (!a) return;
      let $ = null;
      const O = () => {
        const k = Se(q);
        return k ? k[m.value] : null;
      };
      (!s && I.length && !o ? ($ = I[0]) : ($ = O()), xe($));
    }, [a, o]),
      r.useImperativeHandle(t, () => ({
        scrollTo: te.current?.scrollTo,
        onKeyDown: ($) => {
          const { which: O } = $;
          switch (O) {
            case ue.UP:
            case ue.DOWN:
            case ue.LEFT:
            case ue.RIGHT:
              te.current?.onKeyDown($);
              break;
            case ue.ENTER: {
              if (de) {
                const k = ge(de.node),
                  { selectable: Ne, value: Re, disabled: ve } = de?.node || {};
                Ne !== !1 && !ve && !k && y(null, { node: { key: Ee }, selected: !I.includes(Re) });
              }
              break;
            }
            case ue.ESC:
              c(!1);
          }
        },
        onKeyUp: () => {},
      })));
    const Pe = $t(
      () => !o,
      [o, M || w],
      ([$], [O, k]) => $ !== O && !!(O || k),
    )
      ? _
      : null;
    if (q.length === 0)
      return r.createElement(
        'div',
        { role: 'listbox', className: `${n}-empty`, onMouseDown: V },
        l,
      );
    const G = { fieldNames: m };
    return (
      W && (G.loadedKeys = W),
      he && (G.expandedKeys = he),
      r.createElement(
        'div',
        { onMouseDown: V },
        de &&
          a &&
          r.createElement('span', { 'style': So, 'aria-live': 'assertive' }, de.node.value),
        r.createElement(
          ns.Provider,
          { value: { nodeDisabled: ge } },
          r.createElement(
            ss,
            At(
              {
                classNames: x?.popup,
                styles: L?.popup,
                ref: te,
                focusable: !1,
                prefixCls: `${n}-tree`,
                treeData: q,
                height: u,
                itemHeight: p,
                itemScrollOffset: S,
                virtual: i !== !1 && C !== !1,
                multiple: s,
                icon: U,
                showIcon: A,
                switcherIcon: ne,
                showLine: oe,
                loadData: Pe,
                motion: K,
                activeKey: Ee,
                checkable: R,
                checkStrictly: !0,
                checkedKeys: E,
                selectedKeys: R ? [] : I,
                defaultExpandAll: D,
                titleRender: v,
              },
              G,
              {
                onActiveChange: xe,
                onSelect: y,
                onCheck: y,
                onExpand: ie,
                onLoad: Y,
                filterTreeNode: le,
                expandAction: d,
                onScroll: N,
              },
            ),
          ),
        ),
      )
    );
  },
  xo = r.forwardRef(bo),
  Bt = 'SHOW_ALL',
  Gt = 'SHOW_PARENT',
  wt = 'SHOW_CHILD';
function Qt(e, t, n, s) {
  const o = new Set(e);
  return t === wt
    ? e.filter((c) => {
        const a = n[c];
        return (
          !a ||
          !a.children ||
          !a.children.some(({ node: l }) => o.has(l[s.value])) ||
          !a.children.every(({ node: l }) => kt(l) || o.has(l[s.value]))
        );
      })
    : t === Gt
      ? e.filter((c) => {
          const a = n[c],
            l = a ? a.parent : null;
          return !l || kt(l.node) || !o.has(l.key);
        })
      : e;
}
function vo(e, t) {
  const {
    searchValue: n,
    inputValue: s,
    onSearch: o,
    autoClearSearchValue: c,
    filterTreeNode: a,
    treeNodeFilterProp: l,
  } = t;
  return r.useMemo(() => {
    const i = typeof e == 'object',
      u = {
        searchValue: n ?? s,
        onSearch: o,
        autoClearSearchValue: c,
        filterTreeNode: a,
        treeNodeFilterProp: l,
        ...(i ? e : {}),
      };
    return [i ? !0 : e, u];
  }, [e, n, s, o, c, a, l]);
}
function Kt() {
  return (
    (Kt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    Kt.apply(this, arguments)
  );
}
function Io(e) {
  return !e || typeof e != 'object';
}
const wo = r.forwardRef((e, t) => {
    const {
        id: n,
        prefixCls: s = 'rc-tree-select',
        value: o,
        defaultValue: c,
        onChange: a,
        onSelect: l,
        onDeselect: i,
        showSearch: u,
        searchValue: p,
        inputValue: S,
        onSearch: h,
        autoClearSearchValue: m,
        filterTreeNode: g,
        treeNodeFilterProp: C,
        showCheckedStrategy: d,
        treeNodeLabelProp: v,
        multiple: N,
        treeCheckable: b,
        treeCheckStrictly: f,
        labelInValue: P,
        maxCount: x,
        fieldNames: L,
        treeDataSimpleMode: R,
        treeData: I,
        children: X,
        loadData: M,
        treeLoadedKeys: D,
        onTreeLoad: H,
        treeDefaultExpandAll: z,
        treeExpandedKeys: U,
        treeDefaultExpandedKeys: A,
        onTreeExpand: ne,
        treeExpandAction: oe,
        virtual: B,
        listHeight: _ = 200,
        listItemHeight: W = 20,
        listItemScrollOffset: K = 0,
        onPopupVisibleChange: Y,
        popupMatchSelectWidth: ee = !0,
        treeLine: te,
        treeIcon: q,
        showTreeIcon: E,
        switcherIcon: V,
        treeMotion: y,
        treeTitleRender: w,
        onPopupScroll: T,
        classNames: j,
        styles: ae,
        ...he
      } = e,
      ie = nn(n),
      Z = b && !f,
      le = b || f,
      fe = f || P,
      J = le || N,
      ye = {
        searchValue: p,
        inputValue: S,
        onSearch: h,
        autoClearSearchValue: m,
        filterTreeNode: g,
        treeNodeFilterProp: C,
      },
      [ge, Se] = vo(u, ye),
      {
        searchValue: Ee,
        onSearch: xe,
        autoClearSearchValue: de = !0,
        filterTreeNode: De,
        treeNodeFilterProp: Pe = 'value',
      } = Se,
      [G, $] = Je(c, o),
      O = r.useMemo(() => (b ? d || wt : Bt), [d, b]),
      k = r.useMemo(() => po(L), [JSON.stringify(L)]),
      [Ne, Re] = Je('', Ee),
      ve = Ne || '',
      Le = (F) => {
        (Re(F), xe?.(F));
      },
      Ke = yo(I, X, R),
      { keyEntities: pe, valueEntities: Ie } = mo(Ke, k),
      Te = r.useCallback(
        (F) => {
          const re = [],
            Q = [];
          return (
            F.forEach((ce) => {
              Ie.has(ce) ? Q.push(ce) : re.push(ce);
            }),
            { missingRawValues: re, existRawValues: Q }
          );
        },
        [Ie],
      ),
      He = go(Ke, ve, { fieldNames: k, treeNodeFilterProp: Pe, filterTreeNode: De }),
      Ye = r.useCallback(
        (F) => {
          if (F) {
            if (v) return F[v];
            const { _title: re } = k;
            for (let Q = 0; Q < re.length; Q += 1) {
              const ce = F[re[Q]];
              if (ce !== void 0) return ce;
            }
          }
        },
        [k, v],
      ),
      Ae = r.useCallback((F) => uo(F).map((Q) => (Io(Q) ? { value: Q } : Q)), []),
      Fe = r.useCallback(
        (F) =>
          Ae(F).map((Q) => {
            let { label: ce } = Q;
            const { value: we, halfChecked: se } = Q;
            let $e;
            const be = Ie.get(we);
            return (
              be
                ? ((ce = w ? w(be.node) : (ce ?? Ye(be.node))), ($e = be.node.disabled))
                : ce === void 0 && (ce = Ae(G).find((Be) => Be.value === we).label),
              { label: ce, value: we, halfChecked: se, disabled: $e }
            );
          }),
        [Ie, Ye, Ae, G],
      ),
      We = r.useMemo(() => Ae(G === null ? [] : G), [Ae, G]),
      [ke, qe] = r.useMemo(() => {
        const F = [],
          re = [];
        return (
          We.forEach((Q) => {
            Q.halfChecked ? re.push(Q) : F.push(Q);
          }),
          [F, re]
        );
      }, [We]),
      Ze = r.useMemo(() => ke.map((F) => F.value), [ke]),
      [Oe, _e] = io(ke, qe, Z, pe),
      Qe = r.useMemo(() => {
        const Q = Qt(Oe, O, pe, k)
            .map((se) => pe[se]?.node?.[k.value] ?? se)
            .map((se) => {
              const $e = ke.find((ze) => ze.value === se),
                be = P ? $e?.label : w?.($e);
              return { value: se, label: be };
            }),
          ce = Fe(Q),
          we = ce[0];
        return !J && we && qt(we.value) && qt(we.label)
          ? []
          : ce.map((se) => ({ ...se, label: se.label ?? se.value }));
      }, [k, J, Oe, ke, Fe, O, pe]),
      [Ue] = co(Qe),
      je = r.useMemo(() => (J && (O === 'SHOW_CHILD' || f || !b) ? x : null), [x, J, f, O, b]),
      Ve = Zt((F, re, Q) => {
        const ce = Qt(F, O, pe, k);
        if (je && ce.length > je) return;
        const we = Fe(F);
        if (($(we), de && Re(''), a)) {
          let se = F;
          Z &&
            (se = ce.map((Xe) => {
              const gt = Ie.get(Xe);
              return gt ? gt.node[k.value] : Xe;
            }));
          const { triggerValue: $e, selected: be } = re || {
            triggerValue: void 0,
            selected: void 0,
          };
          let ze = se;
          if (f) {
            const Xe = qe.filter((gt) => !se.includes(gt.value));
            ze = [...ze, ...Xe];
          }
          const Be = Fe(ze),
            Ge = { preValue: ke, triggerValue: $e };
          let et = !0;
          ((f || (Q === 'selection' && !be)) && (et = !1),
            ho(Ge, $e, F, Ke, et, k),
            le ? (Ge.checked = be) : (Ge.selected = be));
          const Xt = fe ? Be : Be.map((Xe) => Xe.value);
          a(J ? Xt : Xt[0], fe ? null : Be.map((Xe) => Xe.label), Ge);
        }
      }),
      lt = r.useCallback(
        (F, { selected: re, source: Q }) => {
          const we = pe[F]?.node,
            se = we?.[k.value] ?? F;
          if (!J) Ve([se], { selected: !0, triggerValue: se }, 'option');
          else {
            let $e = re ? [...Ze, se] : Oe.filter((be) => be !== se);
            if (Z) {
              const { missingRawValues: be, existRawValues: ze } = Te($e),
                Be = ze.map((et) => Ie.get(et).key);
              let Ge;
              (re
                ? ({ checkedKeys: Ge } = nt(Be, !0, pe))
                : ({ checkedKeys: Ge } = nt(Be, { halfCheckedKeys: _e }, pe)),
                ($e = [...be, ...Ge.map((et) => pe[et].node[k.value])]));
            }
            Ve($e, { selected: re, triggerValue: se }, Q || 'option');
          }
          re || !J ? l?.(se, _t(we)) : i?.(se, _t(we));
        },
        [Te, Ie, pe, k, J, Ze, Ve, Z, l, i, Oe, _e, x],
      ),
      Et = r.useCallback(
        (F) => {
          Y && Y(F);
        },
        [Y],
      ),
      Pt = Zt((F, re) => {
        const Q = F.map((ce) => ce.value);
        if (re.type === 'clear') {
          Ve(Q, {}, 'selection');
          return;
        }
        re.values.length && lt(re.values[0].value, { selected: !1, source: 'selection' });
      }),
      Ot = r.useMemo(
        () => ({
          virtual: B,
          popupMatchSelectWidth: ee,
          listHeight: _,
          listItemHeight: W,
          listItemScrollOffset: K,
          treeData: He,
          fieldNames: k,
          onSelect: lt,
          treeExpandAction: oe,
          treeTitleRender: w,
          onPopupScroll: T,
          leftMaxCount: x === void 0 ? null : x - Ue.length,
          leafCountOnly: O === 'SHOW_CHILD' && !f && !!b,
          valueEntities: Ie,
          classNames: j,
          styles: ae,
        }),
        [B, ee, _, W, K, He, k, lt, oe, w, T, x, Ue.length, O, f, b, Ie, j, ae],
      ),
      Vt = r.useMemo(
        () => ({
          checkable: le,
          loadData: M,
          treeLoadedKeys: D,
          onTreeLoad: H,
          checkedKeys: Oe,
          halfCheckedKeys: _e,
          treeDefaultExpandAll: z,
          treeExpandedKeys: U,
          treeDefaultExpandedKeys: A,
          onTreeExpand: ne,
          treeIcon: q,
          treeMotion: y,
          showTreeIcon: E,
          switcherIcon: V,
          treeLine: te,
          treeNodeFilterProp: Pe,
          keyEntities: pe,
        }),
        [le, M, D, H, Oe, _e, z, U, A, ne, q, y, E, V, te, Pe, pe],
      );
    return r.createElement(
      zn.Provider,
      { value: Ot },
      r.createElement(
        jn.Provider,
        { value: Vt },
        r.createElement(
          sn,
          Kt({ ref: t }, he, {
            classNames: j,
            styles: ae,
            id: ie,
            prefixCls: s,
            mode: J ? 'multiple' : void 0,
            displayValues: Ue,
            onDisplayValuesChange: Pt,
            autoClearSearchValue: de,
            showSearch: ge,
            searchValue: ve,
            onSearch: Le,
            OptionList: xo,
            emptyOptions: !Ke.length,
            onPopupVisibleChange: Et,
            popupMatchSelectWidth: ee,
          }),
        ),
      ),
    );
  }),
  ht = wo;
ht.TreeNode = zt;
ht.SHOW_ALL = Bt;
ht.SHOW_PARENT = Gt;
ht.SHOW_CHILD = wt;
const Eo = (e) => {
  const { componentCls: t, treePrefixCls: n, colorBgElevated: s } = e,
    o = `.${n}`;
  return [
    {
      [`${t}-dropdown`]: [
        { padding: `${dt(e.paddingXS)} ${dt(e.calc(e.paddingXS).div(2).equal())}` },
        rs(n, It(e, { colorBgContainer: s }), !1),
        {
          [o]: {
            borderRadius: 0,
            [`${o}-list-holder-inner`]: {
              alignItems: 'stretch',
              [`${o}-treenode`]: { [`${o}-node-content-wrapper`]: { flex: 'auto' } },
            },
          },
        },
        Sn(`${n}-checkbox`, e),
        {
          '&-rtl': {
            direction: 'rtl',
            [`${o}-switcher${o}-switcher_close`]: {
              [`${o}-switcher-icon svg`]: { transform: 'rotate(90deg)' },
            },
          },
        },
      ],
    },
  ];
};
function Po(e, t, n) {
  return bt(
    'TreeSelect',
    (s) => {
      const o = It(s, { treePrefixCls: t });
      return Eo(o);
    },
    os,
    { resetFont: !1 },
  )(e, n);
}
const Oo = (e, t) => {
    const {
        prefixCls: n,
        size: s,
        disabled: o,
        bordered: c = !0,
        style: a,
        className: l,
        rootClassName: i,
        treeCheckable: u,
        multiple: p,
        listHeight: S = 256,
        listItemHeight: h,
        placement: m,
        notFoundContent: g,
        switcherIcon: C,
        treeLine: d,
        getPopupContainer: v,
        popupClassName: N,
        dropdownClassName: b,
        treeIcon: f = !1,
        transitionName: P,
        choiceTransitionName: x = '',
        status: L,
        treeExpandAction: R,
        builtinPlacements: I,
        dropdownMatchSelectWidth: X,
        popupMatchSelectWidth: M,
        allowClear: D,
        variant: H,
        dropdownStyle: z,
        dropdownRender: U,
        popupRender: A,
        onDropdownVisibleChange: ne,
        onOpenChange: oe,
        tagRender: B,
        maxCount: _,
        showCheckedStrategy: W,
        treeCheckStrictly: K,
        styles: Y,
        classNames: ee,
        ...te
      } = e,
      {
        getPrefixCls: q,
        getPopupContainer: E,
        direction: V,
        styles: y,
        classNames: w,
        switcherIcon: T,
      } = xt('treeSelect'),
      {
        renderEmpty: j,
        virtual: ae,
        popupMatchSelectWidth: he,
        popupOverflow: ie,
      } = r.useContext(St),
      [, Z] = es(),
      le = h ?? Z?.controlHeightSM + Z?.paddingXXS,
      fe = q(),
      J = q('select', n),
      ye = q('select-tree', n),
      ge = q('tree-select', n),
      { compactSize: Se, compactItemClassnames: Ee } = an(J, V),
      xe = it(J),
      de = it(ge),
      [De, Pe] = rn(J, xe);
    Po(ge, ye, de);
    const [G, $] = ln('treeSelect', H, c),
      O = Wt((F) => s ?? Se ?? F),
      k = r.useContext(vt),
      Ne = o ?? k,
      { status: Re, hasFeedback: ve, isFormItemInput: Le, feedbackIcon: Ke } = r.useContext(on),
      pe = gn(Re, L),
      Ie = { ...e, size: O, disabled: Ne, status: pe, variant: G },
      [Te, He] = pn([w, ee], [y, Y], { props: Ie }, { popup: { _default: 'root' } }),
      Ye = Ce(
        N || b,
        `${ge}-dropdown`,
        { [`${ge}-dropdown-rtl`]: V === 'rtl' },
        i,
        Te.root,
        Te.popup?.root,
        Pe,
        xe,
        de,
        De,
      ),
      Ae = cn(A || U),
      Fe = oe || ne,
      We = !!(u || p),
      ke = r.useMemo(() => {
        if (!(_ && ((W === 'SHOW_ALL' && !K) || W === 'SHOW_PARENT'))) return _;
      }, [_, W, K]),
      qe = un(e.suffixIcon, e.showArrow),
      Ze = M ?? X ?? he,
      {
        suffixIcon: Oe,
        removeIcon: _e,
        clearIcon: Qe,
      } = dn({
        ...te,
        multiple: We,
        showSuffixIcon: qe,
        hasFeedback: ve,
        feedbackIcon: Ke,
        componentName: 'TreeSelect',
      }),
      Ue = D === !0 ? { clearIcon: Qe } : D;
    let je;
    g !== void 0
      ? (je = g)
      : (je = j?.('Select') || r.createElement(Ft, { componentName: 'Select' }));
    const Ve = pt(te, ['suffixIcon', 'removeIcon', 'clearIcon']),
      lt = r.useMemo(() => (m !== void 0 ? m : V === 'rtl' ? 'bottomRight' : 'bottomLeft'), [m, V]),
      Et = Ce(
        !n && ge,
        {
          [`${J}-lg`]: O === 'large',
          [`${J}-sm`]: O === 'small',
          [`${J}-rtl`]: V === 'rtl',
          [`${J}-${G}`]: $,
          [`${J}-in-form-item`]: Le,
        },
        hn(J, pe, ve),
        Ee,
        l,
        i,
        Te?.root,
        Pe,
        xe,
        de,
        De,
      ),
      Pt = C ?? T,
      Ot = (F) =>
        r.createElement(as, { prefixCls: ye, switcherIcon: Pt, treeNodeProps: F, showLine: d }),
      [Vt] = fn('SelectLike', He.popup?.root?.zIndex);
    return r.createElement(ht, {
      classNames: Te,
      styles: He,
      virtual: ae,
      disabled: Ne,
      ...Ve,
      popupMatchSelectWidth: Ze,
      builtinPlacements: mn(I, ie),
      ref: t,
      prefixCls: J,
      className: Et,
      style: { ...He?.root, ...a },
      listHeight: S,
      listItemHeight: le,
      treeCheckable: u && r.createElement('span', { className: `${J}-tree-checkbox-inner` }),
      treeLine: !!d,
      suffixIcon: Oe,
      multiple: We,
      placement: lt,
      removeIcon: _e,
      allowClear: Ue,
      switcherIcon: Ot,
      showTreeIcon: f,
      notFoundContent: je,
      getPopupContainer: v || E,
      treeMotion: null,
      popupClassName: Ye,
      popupStyle: { ...He.root, ...He.popup?.root, zIndex: Vt },
      popupRender: Ae,
      onPopupVisibleChange: Fe,
      choiceTransitionName: Ct(fe, '', x),
      transitionName: Ct(fe, 'slide-up', P),
      treeExpandAction: R,
      tagRender: We ? B : void 0,
      maxCount: ke,
      showCheckedStrategy: W,
      treeCheckStrictly: K,
    });
  },
  Vo = r.forwardRef(Oo),
  at = Vo,
  $o = Cn(at, 'popupAlign', (e) => pt(e, ['visible']));
at.TreeNode = zt;
at.SHOW_ALL = Bt;
at.SHOW_PARENT = Gt;
at.SHOW_CHILD = wt;
at._InternalPanelDoNotUseOrYouWillBeFired = $o;
export { mt as C, Ao as F, Ko as R, at as T, _o as V };
