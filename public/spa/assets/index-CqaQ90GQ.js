import { R as re, r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as G, t as le } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bX as h,
  b8 as ne,
  b9 as oe,
  bb as ce,
  bd as ie,
  be as pe,
  d6 as me,
} from './index-C8UyLGsD.js';
import { S as de } from './Input-BIU8BRU1.js';
function P(e) {
  return ['small', 'middle', 'medium', 'large'].includes(e);
}
function E(e) {
  return e ? typeof e == 'number' && !Number.isNaN(e) : !1;
}
const V = re.createContext({ latestIndex: 0 }),
  ge = V.Provider,
  Se = (e) => {
    const {
        className: a,
        prefix: l,
        index: g,
        children: n,
        separator: o,
        style: S,
        classNames: u,
        styles: f,
      } = e,
      { latestIndex: r } = t.useContext(V);
    return h(n)
      ? t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: a, style: S }, n),
          g < r &&
            o &&
            t.createElement(
              'span',
              { className: G(`${l}-item-separator`, u?.separator), style: f?.separator },
              o,
            ),
        )
      : null;
  },
  ue = (e) => {
    const { componentCls: a, antCls: l } = e;
    return {
      [a]: {
        'display': 'inline-flex',
        '&-rtl': { direction: 'rtl' },
        '&-vertical': { flexDirection: 'column' },
        '&-align': {
          'flexDirection': 'column',
          '&-center': { alignItems: 'center' },
          '&-start': { alignItems: 'flex-start' },
          '&-end': { alignItems: 'flex-end' },
          '&-baseline': { alignItems: 'baseline' },
        },
        [`${a}-item:empty`]: { display: 'none' },
        [`${a}-item > ${l}-badge-not-a-wrapper:only-child`]: { display: 'block' },
      },
    };
  },
  fe = (e) => {
    const { componentCls: a } = e;
    return {
      [a]: {
        '&-gap-row-small': { rowGap: e.spaceGapSmallSize },
        '&-gap-row-medium, &-gap-row-middle': { rowGap: e.spaceGapMiddleSize },
        '&-gap-row-large': { rowGap: e.spaceGapLargeSize },
        '&-gap-col-small': { columnGap: e.spaceGapSmallSize },
        '&-gap-col-medium, &-gap-col-middle': { columnGap: e.spaceGapMiddleSize },
        '&-gap-col-large': { columnGap: e.spaceGapLargeSize },
      },
    };
  },
  xe = ne(
    'Space',
    (e) => {
      const a = oe(e, {
        spaceGapSmallSize: e.paddingXS,
        spaceGapMiddleSize: e.padding,
        spaceGapLargeSize: e.paddingLG,
      });
      return [ue(a), fe(a)];
    },
    () => ({}),
    { resetStyle: !1 },
  ),
  ye = t.forwardRef((e, a) => {
    const {
        getPrefixCls: l,
        direction: g,
        size: n,
        className: o,
        style: S,
        classNames: u,
        styles: f,
      } = ce('space'),
      {
        size: r = n ?? 'small',
        align: $,
        className: L,
        rootClassName: M,
        children: H,
        direction: R,
        orientation: D,
        prefixCls: O,
        split: X,
        separator: F,
        style: T,
        vertical: W,
        wrap: j = !1,
        classNames: q,
        styles: B,
        ...J
      } = e,
      [c, i] = Array.isArray(r) ? r : [r, r],
      b = P(i),
      w = P(c),
      K = E(i),
      Q = E(c),
      p = le(H, { keepEmpty: !0 }),
      [I, U] = ie(D, W, R),
      x = $ === void 0 && !U ? 'center' : $,
      Y = F ?? X,
      s = l('space', O),
      [Z, _] = xe(s),
      k = { ...e, size: r, orientation: I, align: x },
      [y, C] = pe([u, q], [f, B], { props: k }),
      ee = G(
        s,
        o,
        Z,
        `${s}-${I}`,
        {
          [`${s}-rtl`]: g === 'rtl',
          [`${s}-align-${x}`]: x,
          [`${s}-gap-row-${i}`]: b,
          [`${s}-gap-col-${c}`]: w,
        },
        L,
        M,
        _,
        y.root,
      ),
      v = G(`${s}-item`, y.item),
      ae = p.map((N, d) => {
        const z = N?.key || `${v}-${d}`;
        return t.createElement(
          Se,
          {
            prefix: s,
            classNames: y,
            styles: C,
            className: v,
            key: z,
            index: d,
            separator: Y,
            style: C.item,
          },
          N,
        );
      }),
      te = t.useMemo(() => ({ latestIndex: p.reduce((d, z, se) => (h(z) ? se : d), 0) }), [p]);
    if (p.length === 0) return null;
    const m = {};
    return (
      j && (m.flexWrap = 'wrap'),
      !w && Q && (m.columnGap = c),
      !b && K && (m.rowGap = i),
      t.createElement(
        'div',
        { ref: a, className: ee, style: { ...m, ...C.root, ...S, ...T }, ...J },
        t.createElement(ge, { value: te }, ae),
      )
    );
  }),
  A = ye;
A.Compact = me;
A.Addon = de;
export { A as S, P as i };
