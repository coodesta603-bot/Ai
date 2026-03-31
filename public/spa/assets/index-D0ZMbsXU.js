import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { k as r, aj as p, aC as u, F as x, j as g, f as h } from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
const s = 'ant',
  i = h(({ css: e }) => ({
    content: e`
      .${s}-modal-footer {
        margin: 0;
        padding: 16px;
      }
      .${s}-modal-header {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }
      .${s}-modal-container {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${r.colorSplit};
        border-radius: ${r.borderRadiusLG};
      }
    `,
    wrap: e`
      overflow: hidden auto;
    `,
  })),
  y = n.memo(({ className: e, title: t, desc: a, cover: l, width: d = 360, ...c }) => {
    const m = n.useMemo(
      () => ({
        token: { colorBgElevated: `color-mix(in srgb, ${r.colorBgContainer} 99.5%, white)` },
      }),
      [],
    );
    return o.jsx(p, {
      theme: m,
      children: o.jsxs(u, {
        centered: !0,
        maskClosable: !0,
        className: g(i.content, e),
        closable: !1,
        width: d,
        wrapClassName: i.wrap,
        ...c,
        children: [
          l,
          o.jsxs(x, {
            padding: 16,
            children: [
              o.jsx('h3', { style: { fontWeight: 'bold' }, children: t }),
              o.jsx('p', { style: { marginBottom: 0 }, children: a }),
            ],
          }),
        ],
      }),
    });
  }),
  w = n.memo(({ height: e, width: t, src: a }) =>
    o.jsx('video', {
      autoPlay: !0,
      loop: !0,
      muted: !0,
      controls: !1,
      height: e,
      src: a,
      width: t,
      style: { background: r.colorFillSecondary, height: 'auto', width: '100%' },
    }),
  );
export { y as G, w as a };
