import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { ai as j, F as s } from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S } from './index-BvIL68ic.js';
function C({ levels: t, value: c, defaultValue: i, onChange: d, marks: r, style: m }) {
  const f = i ?? t[Math.floor(t.length / 2)],
    [h, p] = j(f, { defaultValue: i, onChange: d, value: c }),
    x = l.useMemo(() => {
      if (r) return r;
      const e = {};
      return (
        t.forEach((n, L) => {
          e[L] = n;
        }),
        e
      );
    }, [r, t]),
    a = t.indexOf(h),
    u = a === -1 ? Math.floor(t.length / 2) : a,
    g = (e) => {
      const n = t[e];
      n !== void 0 && p(n);
    };
  return o.jsx(s, {
    horizontal: !0,
    align: 'center',
    gap: 12,
    paddingInline: '0 20px',
    style: { minWidth: 200, width: '100%', ...m },
    children: o.jsx(s, {
      flex: 1,
      children: o.jsx(S, {
        marks: x,
        max: t.length - 1,
        min: 0,
        step: 1,
        tooltip: { open: !1 },
        value: u,
        onChange: g,
      }),
    }),
  });
}
const v = l.memo(C);
export { v as L };
