import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { u as f, s as x, F as t, m as p } from './index-C8UyLGsD.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { T as m } from './ToggleLeftPanelButton-MPNqlyqh.js';
const S = c.memo(
  ({
    showTogglePanelButton: l = !0,
    style: i,
    children: o,
    left: n,
    right: s,
    styles: r,
    ...u
  }) => {
    const a = f(x.showLeftPanel);
    if (!(!n && !s && a))
      return e.jsx(t, {
        allowShrink: !0,
        horizontal: !0,
        align: 'center',
        flex: 'none',
        gap: 4,
        height: 44,
        justify: 'space-between',
        padding: 8,
        style: i,
        ...u,
        children: e.jsxs(p, {
          children: [
            e.jsxs(t, {
              allowShrink: !0,
              horizontal: !0,
              align: 'center',
              gap: 2,
              justify: 'flex-start',
              style: r?.left,
              children: [l && !a && e.jsx(m, {}), n],
            }),
            o && e.jsx(t, { flex: 1, style: r?.center, children: o }),
            e.jsx(t, {
              horizontal: !0,
              align: 'center',
              gap: 2,
              justify: 'flex-end',
              style: r?.right,
              children: s,
            }),
          ],
        }),
      });
  },
);
export { S as N };
