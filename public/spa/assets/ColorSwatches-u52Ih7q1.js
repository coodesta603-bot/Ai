import {
  bY as A,
  bZ as N,
  b_ as W,
  b$ as E,
  c0 as B,
  c1 as H,
  c2 as I,
  c3 as M,
  c4 as $,
  c5 as O,
  c6 as Y,
  c7 as Z,
  c8 as q,
  c9 as D,
  ca as G,
  cb as J,
  cc as K,
  f as L,
  ai as Q,
  k as l,
  F as U,
  $ as k,
  C as X,
  I as V,
  cd as ee,
  ce as oe,
  j as v,
} from './index-C8UyLGsD.js';
import { r as y } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as ae } from './index-Ciqn2WuZ.js';
import { be as re } from '../vendor/vendor-icons-BHMUH78i.js';
import { C as te } from './ColorPicker-B5azT_mb.js';
const a = {
    blue: K.dark[9],
    cyan: J.dark[9],
    geekblue: G.dark[9],
    gold: D.dark[9],
    green: q.dark[9],
    lime: Z.dark[9],
    magenta: Y.dark[9],
    orange: O.dark[9],
    purple: $.dark[9],
    red: M.dark[9],
    volcano: I.dark[9],
    yellow: H.dark[9],
  },
  ue = [
    a.red,
    a.orange,
    a.gold,
    a.yellow,
    a.lime,
    a.green,
    a.cyan,
    a.blue,
    a.geekblue,
    a.purple,
    a.magenta,
    a.volcano,
  ],
  n = { mauve: B.dark[9], olive: E.dark[9], sage: W.dark[9], sand: N.dark[9], slate: A.dark[9] },
  pe = [n.mauve, n.slate, n.sage, n.olive, n.sand],
  me = (r, e) => Object.entries(r === 'primary' ? a : n).find((u) => u[1] === e)?.[0],
  w = 'ant',
  i = L(({ css: r, cssVar: e }) => ({
    active: r`
      box-shadow: inset 0 0 0 1px ${e.colorFill};
    `,
    conic: r`
      background: conic-gradient(
        ${e.red},
        ${e.volcano},
        ${e.orange},
        ${e.gold},
        ${e.yellow},
        ${e.lime},
        ${e.green},
        ${e.cyan},
        ${e.blue},
        ${e.geekblue},
        ${e.purple},
        ${e.magenta},
        ${e.red}
      );
      .${w}-color-picker-color-block {
        opacity: 0;
      }
    `,
    container: r`
      cursor: pointer;

      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);

      background: ${e.colorBgContainer};
      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px rgba(0, 0, 0, 5%),
          0 0 0 2px ${e.colorText};
      }
    `,
    picker: r`
      overflow: hidden;
      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);
      padding: 0;
      border: none;

      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px ${e.colorFillSecondary},
          0 0 0 2px ${e.colorText};
      }

      .${w}-color-picker-color-block {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: inherit;
      }
    `,
    transparent: r`
      background-image: conic-gradient(
        ${e.colorFillSecondary} 25%,
        transparent 25% 50%,
        ${e.colorFillSecondary} 50% 75%,
        transparent 75% 100%
      );
      background-size: 50% 50%;
    `,
  })),
  _ = ({
    enableColorPicker: r,
    enableColorSwatches: e = !0,
    defaultValue: d,
    value: u,
    style: C,
    colors: c,
    onChange: z,
    size: h = 24,
    shape: g = 'circle',
    texts: f,
    ref: S,
    ...j
  }) => {
    const [t, p] = Q(d, { defaultValue: d, onChange: z, value: u }),
      F = y.useMemo(() => ({ '--color-swatches-size': `${h}px` }), [h]),
      P = y.useMemo(() => t && t !== l.colorPrimary && !c.some((o) => o.color === t), [t, c]);
    return s.jsxs(U, {
      horizontal: !0,
      gap: 6,
      ref: S,
      style: { ...F, flexWrap: 'wrap', ...C },
      ...j,
      children: [
        e &&
          c.map((o, R) => {
            const m = o.color || l.colorPrimary,
              x = (!t && !o.color) || m === t,
              b =
                o.color === 'transparent' ||
                (o.color &&
                  !o.color.startsWith('var(') &&
                  (() => {
                    try {
                      return ae(o.color).alpha() === 0;
                    } catch {
                      return !1;
                    }
                  })()),
              T = o.color?.startsWith('var(') ? l.colorPrimary : m;
            return s.jsx(
              k,
              {
                title: o.title,
                children: s.jsx(X, {
                  className: v(i.container, b && i.transparent, x && i.active),
                  style: {
                    background: b ? void 0 : m,
                    borderRadius: g === 'circle' ? '50%' : l.borderRadius,
                  },
                  onClick: () => p(o.color || void 0),
                  children:
                    x &&
                    s.jsx(V, {
                      color: ee(oe(T), 0.33),
                      icon: re,
                      size: { size: 14, strokeWidth: 4 },
                      style: { pointerEvents: 'none' },
                    }),
                }),
              },
              o?.key || R,
            );
          }),
        r &&
          s.jsx(k, {
            title: f?.custom || 'Custom',
            children: s.jsx(te, {
              disabledAlpha: !0,
              arrow: !1,
              defaultValue: l.colorPrimary,
              format: 'hex',
              value: e ? void 0 : t,
              className: v(i.picker, e && i.conic, P && i.active),
              presets: e
                ? void 0
                : [{ colors: c.map((o) => o.color), label: f?.presets || 'Presets' }],
              style: { borderRadius: g === 'circle' ? '50%' : l.borderRadius },
              onChangeComplete: (o) => {
                o.toHexString() === l.colorPrimary ? p('') : p(o.toHexString());
              },
            }),
          }),
      ],
    });
  };
_.displayName = 'ColorSwatches';
var he = _;
export { he as C, pe as a, ue as b, me as f, n, a as p };
