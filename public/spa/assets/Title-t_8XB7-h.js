import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { j as u, I as n, L as x, F as o, f as y } from './index-C8UyLGsD.js';
import { r as R } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { R as c } from '../vendor/vendor-icons-BHMUH78i.js';
const l = y(({ css: e, cssVar: i }) => ({
    more: e`
    display: flex;
    align-items: center;
    color: ${i.colorTextSecondary};
  `,
    title: e`
    margin-block: 0.2em;
    font-weight: bold;
    line-height: 1.5;
  `,
    title2: e`
    font-size: 18px;
  `,
    title3: e`
    font-size: 16px;
  `,
  })),
  w = R.memo(
    ({ id: e, tag: i, children: f, moreLink: s, more: a, level: p = 2, icon: h, ...j }) => {
      const m = t.jsx('h2', { className: u(l.title, l[`title${p}`]), id: e, children: f }),
        g = s?.startsWith('http') ?? !1,
        d = s?.startsWith('/community') ?? !1;
      let r = null;
      return (
        s &&
          (g
            ? (r = t.jsxs('a', {
                className: l.more,
                href: s,
                rel: 'noreferrer',
                target: '_blank',
                children: [
                  t.jsx('span', { style: { marginRight: 4 }, children: a }),
                  t.jsx(n, { icon: c }),
                ],
              }))
            : d
              ? (r = t.jsxs(x, {
                  className: l.more,
                  to: s,
                  children: [
                    t.jsx('span', { style: { marginRight: 4 }, children: a }),
                    t.jsx(n, { icon: c }),
                  ],
                }))
              : (r = t.jsxs(x, {
                  className: l.more,
                  to: s,
                  children: [
                    t.jsx('span', { style: { marginRight: 4 }, children: a }),
                    t.jsx(n, { icon: c }),
                  ],
                }))),
        t.jsxs(o, {
          horizontal: !0,
          align: 'center',
          gap: 16,
          justify: 'space-between',
          width: '100%',
          ...j,
          children: [
            i || h
              ? t.jsxs(o, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    h,
                    m,
                    i && t.jsx(o, { horizontal: !0, align: 'center', gap: 4, children: i }),
                  ],
                })
              : m,
            r,
          ],
        })
      );
    },
  );
export { w as T };
