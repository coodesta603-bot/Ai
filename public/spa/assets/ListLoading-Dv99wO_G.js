import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as s, e as l, k as n, f as h } from './index-C8UyLGsD.js';
import { B as d } from './Block-DDntSWi2.js';
import { G as c } from './Grid-CdN2I7qJ.js';
import { S as e } from './index-DLsdvBKx.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
const x = h(({ css: r, cssVar: a }) => ({
    footer: r`
    border-block-start: 1px dashed ${a.colorBorder};
    background: ${a.colorBgContainer};
  `,
  })),
  B = i.memo(({ rows: r = 3, length: a = 12 }) =>
    t.jsx(c, {
      rows: r,
      width: '100%',
      children: Array.from({ length: a }).map((p, o) =>
        t.jsxs(
          d,
          {
            gap: 12,
            padding: 16,
            variant: 'outlined',
            children: [
              t.jsxs(s, {
                horizontal: !0,
                align: 'center',
                gap: 12,
                children: [
                  t.jsx(e.Avatar, {
                    active: !0,
                    shape: 'square',
                    size: 40,
                    style: { flex: 'none' },
                  }),
                  t.jsxs(s, {
                    flex: 1,
                    gap: 4,
                    children: [
                      t.jsx(e.Button, { active: !0, style: { height: 20, width: '70%' } }),
                      t.jsx(e.Button, { active: !0, style: { height: 14, width: '40%' } }),
                    ],
                  }),
                ],
              }),
              t.jsx(e.Paragraph, { active: !0, rows: 3, style: { marginBottom: 0 } }),
              t.jsxs(s, {
                horizontal: !0,
                gap: 8,
                children: [
                  t.jsx(e.Button, { active: !0, size: 'small', style: { height: 20, width: 60 } }),
                  t.jsx(e.Button, { active: !0, size: 'small', style: { height: 20, width: 50 } }),
                ],
              }),
              t.jsx(s, {
                className: x.footer,
                gap: 4,
                padding: 8,
                style: { marginBottom: -16, marginInline: -16 },
                children: t.jsx(e.Button, {
                  active: !0,
                  size: 'small',
                  style: { height: 14, width: 100 },
                }),
              }),
            ],
          },
          o,
        ),
      ),
    }),
  ),
  v = i.memo(() => {
    const { mobile: r } = l();
    return t.jsxs(s, {
      gap: 24,
      children: [
        t.jsxs(s, {
          gap: 12,
          children: [
            !r && t.jsx(e, { paragraph: { rows: 1 }, style: { width: 200 }, title: !1 }),
            t.jsxs(s, {
              horizontal: !0,
              align: 'center',
              gap: 16,
              width: '100%',
              children: [
                t.jsx(e.Avatar, { active: !0, size: r ? 48 : 64 }),
                t.jsx(e.Button, { active: !0, style: { height: 36, width: 200 } }),
              ],
            }),
            t.jsx(e.Button, { active: !0, size: 'small', style: { width: 200 } }),
          ],
        }),
        t.jsxs(s, {
          horizontal: !0,
          gap: 12,
          height: 54,
          style: { borderBottom: `1px solid ${n.colorBorder}` },
          children: [t.jsx(e.Button, {}), t.jsx(e.Button, {})],
        }),
        t.jsxs(s, {
          gap: 48,
          horizontal: !r,
          style: r ? { flexDirection: 'column-reverse' } : void 0,
          children: [
            t.jsxs(s, {
              flex: 1,
              gap: 16,
              width: '100%',
              style: { overflow: 'hidden' },
              children: [
                t.jsx(e, { paragraph: { rows: 3 }, title: !1 }),
                t.jsx(e, { paragraph: { rows: 8 }, title: !1 }),
                t.jsx(e, { paragraph: { rows: 8 }, title: !1 }),
              ],
            }),
            t.jsxs(s, {
              gap: 16,
              width: 360,
              children: [
                t.jsx(e, { paragraph: { rows: 3 }, title: !1 }),
                t.jsx(e, { paragraph: { rows: 4 }, title: !1 }),
              ],
            }),
          ],
        }),
      ],
    });
  });
export { v as D, B as L };
