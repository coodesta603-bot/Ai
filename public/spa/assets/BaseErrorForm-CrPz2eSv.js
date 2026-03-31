import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as r, Z as t } from './index-C8UyLGsD.js';
import { B as n } from './Block-DDntSWi2.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
const x = l.memo(({ title: o, desc: i, action: a, avatar: s }) =>
  e.jsxs(n, {
    horizontal: !0,
    align: 'center',
    gap: 8,
    justify: 'space-between',
    padding: 16,
    variant: 'outlined',
    style: { overflow: 'hidden', position: 'relative', width: '100%' },
    children: [
      e.jsxs(r, {
        horizontal: !0,
        align: 'center',
        gap: 12,
        children: [
          s,
          e.jsxs(r, {
            gap: 2,
            children: [
              e.jsx(t, { weight: 500, children: o }),
              e.jsx(t, { fontSize: 12, type: 'secondary', children: i }),
            ],
          }),
        ],
      }),
      a,
    ],
  }),
);
export { x as B };
