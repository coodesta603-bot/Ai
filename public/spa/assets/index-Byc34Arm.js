import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { G as N } from './Grid-CdN2I7qJ.js';
import {
  g as z,
  C as T,
  F as o,
  I as n,
  c as B,
  bz as E,
  L as I,
  Z as g,
  k as j,
  bA as $,
  A as C,
  T as y,
  f as A,
} from './index-C8UyLGsD.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { E as F } from './Empty-DHLc2EKW.js';
import { S as L } from './SkillsIcon-DjXX_Ijx.js';
import { B as P } from './Block-DDntSWi2.js';
import { A as G } from './index-BAOF5XWg.js';
import { S as M } from './Spotlight-D7beHiMz.js';
import { P as q } from './PublishedTime-B_fy9H_1.js';
import { d as H } from './discover-H7COHXvN.js';
import { bz as J, bA as k, bB as R, F as W, ab as Z } from '../vendor/vendor-icons-BHMUH78i.js';
import { I as K } from './index-DqcYNTWN.js';
const v = c.memo(({ search: t, ...i }) => {
  const { t: r } = z('discover');
  return e.jsx(T, {
    height: '100%',
    style: { minHeight: '50vh' },
    width: '100%',
    children: e.jsx(F, {
      description: r(t ? 'skillEmpty.search' : 'skillEmpty.description'),
      icon: L,
      title: t ? void 0 : r('skillEmpty.title'),
      type: t ? 'default' : 'page',
      descriptionProps: { fontSize: 14 },
      style: { maxWidth: 400 },
      ...i,
    }),
  });
});
v.displayName = 'SkillEmpty';
const O = c.memo(({ style: t, stars: i, installCount: r, commentCount: l, className: a }) =>
    e.jsxs(o, {
      horizontal: !0,
      align: 'center',
      className: a,
      gap: 8,
      style: t,
      children: [
        !!r &&
          e.jsxs(o, {
            horizontal: !0,
            align: 'center',
            gap: 4,
            children: [e.jsx(n, { icon: J, size: 14 }), r],
          }),
        !!i &&
          e.jsxs(o, {
            horizontal: !0,
            align: 'center',
            gap: 4,
            children: [e.jsx(n, { icon: k, size: 14 }), i],
          }),
        !!l &&
          e.jsxs(o, {
            horizontal: !0,
            align: 'center',
            gap: 4,
            children: [e.jsx(n, { icon: R, size: 14 }), l],
          }),
      ],
    }),
  ),
  s = A(({ css: t, cssVar: i }) => ({
    author: t`
      color: ${i.colorTextDescription};
    `,
    desc: t`
      flex: 1;
      margin: 0 !important;
      color: ${i.colorTextSecondary};
    `,
    footer: t`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${i.colorBorder};
      background: ${i.colorBgContainer};
    `,
    secondaryDesc: t`
      font-size: 12px;
      color: ${i.colorTextDescription};
    `,
    title: t`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${i.colorLink};
      }
    `,
  })),
  Q = c.memo(
    ({
      name: t,
      icon: i,
      author: r,
      description: l,
      identifier: a,
      category: h,
      isFeatured: m,
      updatedAt: S,
      installCount: b,
      github: d,
      homepage: U,
      ratingAvg: x,
      commentCount: w,
      resourcesCount: _ = 0,
    }) => {
      const { t: f } = z('discover'),
        u = B(),
        p = E('/community/skill', a),
        D = c.useCallback(() => {
          (H.reportSkillEvent({ event: 'click', identifier: a, source: location.pathname }).catch(
            () => {},
          ),
            u(p));
        }, [a, p, u]);
      return e.jsxs(P, {
        'clickable': !0,
        'data-testid': 'skill-item',
        'height': '100%',
        'variant': 'outlined',
        'width': '100%',
        'style': { overflow: 'hidden', position: 'relative' },
        'onClick': D,
        'children': [
          m && e.jsx(M, { size: 400 }),
          e.jsxs(o, {
            horizontal: !0,
            align: 'flex-start',
            gap: 16,
            justify: 'space-between',
            padding: 16,
            width: '100%',
            children: [
              e.jsxs(o, {
                horizontal: !0,
                gap: 12,
                title: a,
                style: { overflow: 'hidden' },
                children: [
                  e.jsx(G, { avatar: i || t, size: 40, style: { flex: 'none' } }),
                  e.jsxs(o, {
                    flex: 1,
                    gap: 6,
                    style: { overflow: 'hidden' },
                    children: [
                      e.jsx(o, {
                        horizontal: !0,
                        align: 'center',
                        flex: 1,
                        gap: 8,
                        style: { overflow: 'hidden' },
                        children: e.jsx(I, {
                          style: { color: 'inherit', overflow: 'hidden' },
                          to: p,
                          children: e.jsx(g, {
                            ellipsis: !0,
                            as: 'h2',
                            className: s.title,
                            children: t,
                          }),
                        }),
                      }),
                      e.jsxs(o, {
                        horizontal: !0,
                        align: 'center',
                        className: s.author,
                        gap: 8,
                        children: [
                          !!x &&
                            e.jsxs(o, {
                              horizontal: !0,
                              align: 'center',
                              gap: 4,
                              style: { fontSize: 13 },
                              children: [
                                e.jsx(n, { fill: j.colorTextDescription, icon: k, size: 12 }),
                                x?.toFixed(1),
                              ],
                            }),
                          r && e.jsx('div', { children: r }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(o, {
                horizontal: !0,
                align: 'center',
                gap: 4,
                children:
                  d?.url &&
                  e.jsx('a', {
                    href: d.url,
                    rel: 'noopener noreferrer',
                    target: '_blank',
                    onClick: $,
                    children: e.jsx(C, { fill: j.colorTextDescription, icon: K }),
                  }),
              }),
            ],
          }),
          e.jsxs(o, {
            flex: 1,
            gap: 12,
            paddingInline: 16,
            children: [
              e.jsx(g, { as: 'p', className: s.desc, ellipsis: { rows: 3 }, children: l }),
              e.jsxs(o, {
                horizontal: !0,
                align: 'center',
                className: s.secondaryDesc,
                justify: 'space-between',
                children: [
                  e.jsx(y, {
                    icon: e.jsx(n, { icon: W }),
                    size: 'small',
                    variant: 'filled',
                    style: { color: 'inherit', fontSize: 'inherit' },
                    children: (_ || 0) + 1,
                  }),
                  e.jsxs(o, {
                    horizontal: !0,
                    align: 'center',
                    className: s.secondaryDesc,
                    gap: 8,
                    children: [
                      h && f(`skills.categories.${h}.name`),
                      m &&
                        e.jsx(y, {
                          size: 'small',
                          variant: 'outlined',
                          style: { color: 'inherit', fontSize: 'inherit' },
                          children: f('isFeatured'),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(o, {
            horizontal: !0,
            align: 'center',
            className: s.footer,
            justify: 'space-between',
            padding: 16,
            children: [
              e.jsxs(o, {
                horizontal: !0,
                align: 'center',
                gap: 4,
                children: [
                  e.jsx(n, { className: s.secondaryDesc, icon: Z, size: 14 }),
                  e.jsx(q, { className: s.secondaryDesc, date: S }),
                ],
              }),
              e.jsx(O, {
                className: s.secondaryDesc,
                commentCount: w,
                installCount: b,
                stars: d?.stars,
              }),
            ],
          }),
        ],
      });
    },
  ),
  de = c.memo(({ data: t = [], rows: i = 3 }) =>
    t.length === 0
      ? e.jsx(v, {})
      : e.jsx(N, { rows: i, width: '100%', children: t.map((r, l) => e.jsx(Q, { ...r }, l)) }),
  );
export { de as S };
