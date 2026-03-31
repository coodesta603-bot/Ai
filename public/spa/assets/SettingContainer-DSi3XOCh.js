import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aw as m, F as o, k as d } from './index-C8UyLGsD.js';
import { r as h } from '../vendor/vendor-emotion-DdM-9MtU.js';
const p = h.memo(
  ({
    variant: r,
    maxWidth: t = 1024,
    children: s,
    addonAfter: a,
    addonBefore: n,
    style: i,
    ...c
  }) => {
    const l = m();
    return e.jsxs(o, {
      align: 'center',
      height: '100%',
      width: '100%',
      style: {
        background: r === 'secondary' ? l.colorBgContainerSecondary : d.colorBgContainer,
        overflowX: 'hidden',
        overflowY: 'auto',
        ...i,
      },
      ...c,
      children: [
        n,
        e.jsx(o, { flex: 1, gap: 36, width: '100%', style: { maxWidth: t }, children: s }),
        a,
      ],
    });
  },
);
export { p as S };
