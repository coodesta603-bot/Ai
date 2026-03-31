import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { C as l, j as c, f as h, k as u, F as i } from './index-C8UyLGsD.js';
import { A as j } from './index-BAOF5XWg.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
const n = h(({ css: e, cssVar: r }) => ({
    container: e`
    border: 1px solid ${r.colorSplit};
    border-radius: 8px;
    color: ${r.colorText};
    background: ${r.colorBgContainer};
  `,
    desc: e`
    color: ${r.colorTextTertiary};
    text-align: center;
  `,
    form: e`
    width: 100%;
    max-width: 360px;

    @media (width <= 768px) {
      max-width: 90%;
    }
  `,
  })),
  y = d.memo(({ children: e, className: r, gap: o = 24, padding: a = 24, ...s }) =>
    t.jsx(l, { className: c(n.container, r), gap: o, padding: a, ...s, children: e }),
  );
d.memo(
  ({
    children: e,
    background: r,
    title: o,
    description: a,
    avatar: s,
    animation: x,
    className: m,
    gap: p = 16,
    ...f
  }) =>
    t.jsxs(l, {
      className: c(n.form, m),
      gap: p,
      ...f,
      children: [
        t.jsx(j, {
          animation: x,
          avatar: s,
          background: r ?? u.colorFillContent,
          gap: 12,
          shape: 'square',
          size: 80,
        }),
        t.jsxs(i, {
          gap: 8,
          width: '100%',
          children: [
            t.jsx(i, {
              style: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
              children: o,
            }),
            t.jsx(i, { className: n.desc, children: a }),
          ],
        }),
        e,
      ],
    }),
);
export { y as E };
