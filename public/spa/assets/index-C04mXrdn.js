import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { G as y } from './Grid-CdN2I7qJ.js';
import {
  g as x,
  C as b,
  c as k,
  bz as c,
  F as n,
  L as p,
  bA as m,
  A as h,
  k as f,
  Z as w,
  f as z,
} from './index-C8UyLGsD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { E as P } from './Empty-DHLc2EKW.js';
import { k as _, m as C } from '../vendor/vendor-icons-BHMUH78i.js';
import { B as $ } from './Block-DDntSWi2.js';
import { M as T } from './MaskShadow-Ds8TovT8.js';
import { P as B } from './index-Ch5xOhA1.js';
import { I as E } from './index-DqcYNTWN.js';
import { M as D } from './index-BBHpQOoQ.js';
const u = a.memo(({ search: e, ...r }) => {
  const { t } = x('discover');
  return o.jsx(b, {
    height: '100%',
    style: { minHeight: '50vh' },
    width: '100%',
    children: o.jsx(P, {
      description: t(e ? 'providers.empty.search' : 'providers.empty.description'),
      icon: _,
      title: e ? void 0 : t('providers.empty.title'),
      type: e ? 'default' : 'page',
      descriptionProps: { fontSize: 14 },
      style: { maxWidth: 400 },
      ...r,
    }),
  });
});
u.displayName = 'ProviderEmpty';
const l = z(({ css: e, cssVar: r }) => ({
    author: e`
      color: ${r.colorTextDescription};
    `,
    code: e`
      font-family: ${r.fontFamilyCode};
    `,
    desc: e`
      flex: none;
      margin: 0 !important;
      color: ${r.colorTextSecondary};
    `,
    footer: e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${r.colorBorder};
      background: ${r.colorBgContainer};
    `,
    secondaryDesc: e`
      font-size: 12px;
      color: ${r.colorTextDescription};
    `,
    title: e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${r.colorLink};
      }
    `,
  })),
  I = a.memo(({ url: e, name: r, description: t, identifier: i, models: g }) => {
    const v = k(),
      d = c('/community/provider', i),
      { t: j } = x(['discover', 'providers']);
    return o.jsxs($, {
      'clickable': !0,
      'data-testid': 'provider-item',
      'height': '100%',
      'variant': 'outlined',
      'width': '100%',
      'style': { overflow: 'hidden', position: 'relative' },
      'onClick': () => {
        v(d);
      },
      'children': [
        o.jsxs(n, {
          horizontal: !0,
          align: 'flex-start',
          gap: 16,
          justify: 'space-between',
          padding: 16,
          width: '100%',
          children: [
            o.jsxs(n, {
              title: i,
              style: { overflow: 'hidden' },
              children: [
                o.jsx(p, {
                  style: { color: 'inherit', overflow: 'hidden' },
                  to: d,
                  children: o.jsx(B, { provider: i, size: 28, style: { flex: 'none' } }),
                }),
                o.jsxs('div', { className: l.author, children: ['@', r] }),
              ],
            }),
            o.jsxs(n, {
              horizontal: !0,
              align: 'center',
              children: [
                o.jsx('a', {
                  href: e,
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  onClick: m,
                  children: o.jsx(h, { color: f.colorTextDescription, icon: C }),
                }),
                o.jsx('a', {
                  href: `https://github.com/lobehub/lobe-chat/blob/main/src/config/modelProviders/${i}.ts`,
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  onClick: m,
                  children: o.jsx(h, { fill: f.colorTextDescription, icon: E }),
                }),
              ],
            }),
          ],
        }),
        o.jsx(n, {
          flex: 1,
          gap: 12,
          paddingInline: 16,
          children:
            t &&
            o.jsx(w, {
              className: l.desc,
              ellipsis: { rows: 3 },
              children: j(`${i}.description`, { ns: 'providers' }),
            }),
        }),
        o.jsx(n, {
          horizontal: !0,
          align: 'center',
          className: l.footer,
          justify: 'space-between',
          padding: 16,
          children: o.jsx(T, {
            horizontal: !0,
            gap: 6,
            position: 'right',
            size: 10,
            width: '100%',
            children: g
              .slice(0, 6)
              .filter(Boolean)
              .map((s) =>
                o.jsx(
                  p,
                  { to: c('/model', s), children: o.jsx(D, { model: s, style: { margin: 0 } }) },
                  s,
                ),
              ),
          }),
        }),
      ],
    });
  }),
  Z = a.memo(({ data: e = [], rows: r = 3 }) =>
    e.length === 0
      ? o.jsx(u, {})
      : o.jsx(y, { rows: r, width: '100%', children: e.map((t, i) => o.jsx(I, { ...t }, i)) }),
  );
export { Z as P };
