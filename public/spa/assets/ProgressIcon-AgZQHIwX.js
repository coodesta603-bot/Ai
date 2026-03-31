import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as i, Z as n, k as l, $ as c } from './index-C8UyLGsD.js';
import { r as f } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { P as x } from './progress-CqsUaYIW.js';
const j = f.memo(({ showInfo: e, format: r, percent: s, ...a }) => {
  if (typeof s != 'number') return;
  const t = o.jsx(x, { format: r, percent: s, showInfo: !1, size: [2, 12], steps: 5, ...a });
  return e
    ? o.jsxs(i, {
        horizontal: !0,
        align: 'center',
        gap: 8,
        children: [t, o.jsx(n, { color: l.colorTextSecondary, fontSize: 12, children: r?.(s) })],
      })
    : o.jsx(c, { title: r?.(s), children: t });
});
export { j as P };
