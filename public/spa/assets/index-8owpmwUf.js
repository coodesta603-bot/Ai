import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { G as v } from './Grid-CdN2I7qJ.js';
import {
  g as h,
  C as z,
  $ as b,
  I as x,
  k as w,
  c as M,
  bz as T,
  F as s,
  L as k,
  Z as m,
  a1 as I,
  T as _,
  f as $,
} from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { E as N } from './Empty-DHLc2EKW.js';
import {
  bu as C,
  aN as P,
  bv as S,
  bw as B,
  y as D,
  bx as E,
  I as L,
  by as F,
  ax as G,
  ab as R,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { B as W } from './Block-DDntSWi2.js';
import { k as q } from './Popover-Cg4CTqoX.js';
import { a as A } from './index-CATsCkTi.js';
import { P as H } from './PublishedTime-B_fy9H_1.js';
import { s as J } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { M as O } from './index-Di19k3su.js';
import { P as p } from './index-DbyirWUA.js';
const u = n.memo(({ search: t, ...o }) => {
  const { t: a } = h('discover');
  return e.jsx(z, {
    height: '100%',
    style: { minHeight: '50vh' },
    width: '100%',
    children: e.jsx(N, {
      description: a(t ? 'models.empty.search' : 'models.empty.description'),
      icon: C,
      title: t ? void 0 : a('models.empty.title'),
      type: t ? 'default' : 'page',
      descriptionProps: { fontSize: 14 },
      style: { maxWidth: 400 },
      ...o,
    }),
  });
});
u.displayName = 'ModelEmpty';
const Z = { chat: G, embedding: F, image: L, realtime: E, stt: D, text2music: B, tts: S, video: P },
  K = n.memo(({ type: t, size: o = 20 }) =>
    e.jsx(b, {
      title: `${J(t)} Model`,
      children: e.jsx(x, { color: w.colorTextDescription, icon: Z?.[t], size: o }),
    }),
  ),
  r = $(({ css: t, cssVar: o }) => ({
    author: t`
      color: ${o.colorTextDescription};
    `,
    code: t`
      font-family: ${o.fontFamilyCode};
    `,
    desc: t`
      flex: 1;
      margin: 0 !important;
      color: ${o.colorTextSecondary};
    `,
    footer: t`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${o.colorBorder};
      background: ${o.colorBgContainer};
    `,
    secondaryDesc: t`
      font-size: 12px;
      color: ${o.colorTextDescription};
    `,
    title: t`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${o.colorLink};
      }
    `,
  })),
  Q = n.memo(
    ({
      identifier: t,
      displayName: o,
      contextWindowTokens: a,
      releasedAt: d,
      type: f,
      abilities: g,
      providers: l,
    }) => {
      const { t: j } = h(['models', 'discover']),
        y = M(),
        c = T('/community/model', t);
      return e.jsxs(W, {
        'clickable': !0,
        'data-testid': 'model-item',
        'height': '100%',
        'variant': 'outlined',
        'width': '100%',
        'style': { overflow: 'hidden', position: 'relative' },
        'onClick': () => {
          y(c);
        },
        'children': [
          e.jsxs(s, {
            horizontal: !0,
            align: 'flex-start',
            gap: 16,
            justify: 'space-between',
            padding: 16,
            width: '100%',
            children: [
              e.jsxs(s, {
                horizontal: !0,
                gap: 12,
                title: t,
                style: { overflow: 'hidden' },
                children: [
                  e.jsx(O, { model: t, size: 40, style: { flex: 'none' }, type: 'avatar' }),
                  e.jsxs(s, {
                    flex: 1,
                    gap: 2,
                    style: { overflow: 'hidden' },
                    children: [
                      e.jsx(s, {
                        horizontal: !0,
                        align: 'center',
                        flex: 1,
                        gap: 8,
                        style: { overflow: 'hidden' },
                        children: e.jsx(k, {
                          style: { color: 'inherit', overflow: 'hidden' },
                          to: c,
                          children: e.jsx(m, {
                            ellipsis: !0,
                            as: 'h2',
                            className: r.title,
                            children: o,
                          }),
                        }),
                      }),
                      e.jsx('div', { className: r.author, children: t }),
                    ],
                  }),
                ],
              }),
              e.jsx(s, {
                horizontal: !0,
                align: 'center',
                gap: 4,
                children: e.jsx(K, { type: f }),
              }),
            ],
          }),
          e.jsxs(s, {
            flex: 1,
            gap: 12,
            paddingInline: 16,
            children: [
              e.jsx(A, { directionReverse: !0, contextWindowTokens: a, ...g }),
              e.jsx(m, {
                as: 'p',
                className: r.desc,
                ellipsis: { rows: 3 },
                children: j(`${t}.description`),
              }),
            ],
          }),
          e.jsx(s, {
            horizontal: !0,
            align: 'center',
            className: r.footer,
            justify: 'space-between',
            padding: 16,
            children: e.jsxs(s, {
              horizontal: !0,
              align: 'center',
              className: r.secondaryDesc,
              justify: 'space-between',
              children: [
                e.jsxs(s, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  children: [
                    e.jsx(x, { icon: R, size: 14 }),
                    e.jsx(H, { className: r.secondaryDesc, date: d || I().toISOString() }),
                  ],
                }),
                e.jsx(q, {
                  content: e.jsx(s, {
                    horizontal: !0,
                    gap: 6,
                    wrap: 'wrap',
                    style: { maxWidth: 175 },
                    children: l.map((i) => e.jsx(p, { provider: i, size: 24 }, i)),
                  }),
                  children: e.jsxs(s, {
                    horizontal: !0,
                    align: 'center',
                    gap: 6,
                    children: [
                      l
                        .slice(0, 6)
                        .map((i) => e.jsx(p, { provider: i, size: 14, type: 'mono' }, i)),
                      l.length > 6 && e.jsx(_, { size: 'small', children: l.length }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    },
  ),
  de = n.memo(({ data: t = [], rows: o = 3 }) =>
    t.length === 0
      ? e.jsx(u, {})
      : e.jsx(v, { rows: o, width: '100%', children: t.map((a, d) => e.jsx(Q, { ...a }, d)) }),
  );
export { de as M, K as a };
