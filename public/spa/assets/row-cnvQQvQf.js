import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as I } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { bm as J, cx as O, co as P, cy as z, cu as E, cv as B, cz as W } from './index-C8UyLGsD.js';
const M = o.createContext({}),
  F = (e) => typeof e == 'number' && !Number.isNaN(e);
function V(e) {
  return e === 'auto'
    ? '1 1 auto'
    : F(e)
      ? `${e} ${e} auto`
      : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
        ? `0 0 ${e}`
        : e;
}
const L = o.forwardRef((e, a) => {
  const { getPrefixCls: c, direction: p } = o.useContext(J),
    { gutter: u, wrap: r } = o.useContext(M),
    {
      prefixCls: f,
      span: n,
      order: d,
      offset: y,
      push: w,
      pull: v,
      className: R,
      children: C,
      flex: h,
      style: N,
      ...i
    } = e,
    s = c('col', f),
    A = c(),
    [m, j] = O(s),
    [g] = P(A, 'col'),
    b = {};
  let $ = {};
  z.forEach((l) => {
    let t = {};
    const S = e[l];
    (typeof S == 'number' ? (t.span = S) : typeof S == 'object' && (t = S || {}),
      delete i[l],
      ($ = {
        ...$,
        [`${s}-${l}-${t.span}`]: t.span !== void 0,
        [`${s}-${l}-order-${t.order}`]: t.order || t.order === 0,
        [`${s}-${l}-offset-${t.offset}`]: t.offset || t.offset === 0,
        [`${s}-${l}-push-${t.push}`]: t.push || t.push === 0,
        [`${s}-${l}-pull-${t.pull}`]: t.pull || t.pull === 0,
        [`${s}-rtl`]: p === 'rtl',
      }),
      t.flex && (($[`${s}-${l}-flex`] = !0), (b[g(`${l}-flex`)] = V(t.flex))));
  });
  const G = I(
      s,
      {
        [`${s}-${n}`]: n !== void 0,
        [`${s}-order-${d}`]: d,
        [`${s}-offset-${y}`]: y,
        [`${s}-push-${w}`]: w,
        [`${s}-pull-${v}`]: v,
      },
      R,
      $,
      m,
      j,
    ),
    x = {};
  if (u?.[0]) {
    const l = typeof u[0] == 'number' ? `${u[0] / 2}px` : `calc(${u[0]} / 2)`;
    x.paddingInline = l;
  }
  return (
    h && ((x.flex = V(h)), r === !1 && !x.minWidth && (x.minWidth = 0)),
    o.createElement('div', { ...i, style: { ...x, ...N, ...b }, className: G, ref: a }, C)
  );
});
function H(e, a) {
  const c = [void 0, void 0],
    p = Array.isArray(e) ? e : [e, void 0],
    u = a || { xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0, xxxl: !0 };
  return (
    p.forEach((r, f) => {
      if (typeof r == 'object' && r !== null)
        for (let n = 0; n < E.length; n++) {
          const d = E[n];
          if (u[d] && r[d] !== void 0) {
            c[f] = r[d];
            break;
          }
        }
      else c[f] = r;
    }),
    c
  );
}
function k(e, a) {
  const [c, p] = o.useState(typeof e == 'string' ? e : ''),
    u = () => {
      if ((typeof e == 'string' && p(e), typeof e == 'object'))
        for (let r = 0; r < E.length; r++) {
          const f = E[r];
          if (!a || !a[f]) continue;
          const n = e[f];
          if (n !== void 0) {
            p(n);
            return;
          }
        }
    };
  return (
    o.useEffect(() => {
      u();
    }, [JSON.stringify(e), a]),
    c
  );
}
const Q = o.forwardRef((e, a) => {
  const {
      prefixCls: c,
      justify: p,
      align: u,
      className: r,
      style: f,
      children: n,
      gutter: d = 0,
      wrap: y,
      ...w
    } = e,
    { getPrefixCls: v, direction: R } = o.useContext(J),
    C = B(!0, null),
    h = k(u, C),
    N = k(p, C),
    i = v('row', c),
    [s, A] = W(i),
    m = H(d, C),
    j = I(
      i,
      { [`${i}-no-wrap`]: y === !1, [`${i}-${N}`]: N, [`${i}-${h}`]: h, [`${i}-rtl`]: R === 'rtl' },
      r,
      s,
      A,
    ),
    g = {};
  if (m?.[0]) {
    const x = typeof m[0] == 'number' ? `${m[0] / -2}px` : `calc(${m[0]} / -2)`;
    g.marginInline = x;
  }
  const [b, $] = m;
  g.rowGap = $;
  const G = o.useMemo(() => ({ gutter: [b, $], wrap: y }), [b, $, y]);
  return o.createElement(
    M.Provider,
    { value: G },
    o.createElement('div', { ...w, className: j, style: { ...g, ...f }, ref: a }, n),
  );
});
export { L as C, Q as R, H as u };
