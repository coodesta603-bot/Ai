import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f, bw as g, dj as j, dk as c, F as d, k as p } from './index-C8UyLGsD.js';
import { I as x } from './index-BsUJTjY1.js';
import { r as h } from '../vendor/vendor-emotion-DdM-9MtU.js';
import './providerConfig-qS2Xx-oI.js';
const L = { path: 'assets/logo-3d.webp', pkg: '@lobehub/assets-logo', version: '1.2.0' },
  k = f(({ css: t }) => ({
    extraTitle: t`
      font-weight: 300;
      white-space: nowrap;
    `,
  })),
  m = ({ size: t = '1em', style: o, alt: r = 'LobeHub', ...n }) =>
    e.jsx(g, { alt: r, height: t, src: j()(L), style: o, width: t, ...n });
m.displayName = 'LobeHubLogo3d';
var u = m,
  v = x.Color;
const w = ({ size: t = '1em', style: o, ...r }) =>
  e.jsx('svg', {
    fill: 'none',
    height: t,
    shapeRendering: 'geometricPrecision',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { flex: 'none', lineHeight: 1, ...o },
    viewBox: '0 0 24 24',
    width: t,
    ...r,
    children: e.jsx('path', { d: 'M16.88 3.549L7.12 20.451' }),
  });
var _ = w;
const b = h.memo(({ type: t = '3d', size: o = 32, style: r, extra: n, className: s, ...i }) => {
  let a;
  switch (t) {
    case '3d':
      a = e.jsx(u, { size: o, ...i });
      break;
    case 'flat':
      a = e.jsx(v, { size: o, style: r });
      break;
    case 'mono':
      a = e.jsx(x, { size: o, style: r });
      break;
    case 'text':
      a = e.jsx(c, { className: s, size: o, style: r, ...i });
      break;
    case 'combine':
      ((a = e.jsxs(e.Fragment, {
        children: [
          e.jsx(u, { alt: 'LobeChat', size: o }),
          e.jsx(c, { size: o, style: { marginLeft: Math.round(o / 4) } }),
        ],
      })),
        n ||
          (a = e.jsx(d, {
            horizontal: !0,
            align: 'center',
            className: s,
            flex: 'none',
            style: r,
            children: a,
          })));
      break;
  }
  if (!n) return a;
  const l = Math.round((o / 3) * 1.9);
  return e.jsxs(d, {
    horizontal: !0,
    align: 'center',
    className: s,
    flex: 'none',
    style: r,
    ...i,
    children: [
      a,
      e.jsx(_, { size: l, style: { color: p.colorFill } }),
      e.jsx('div', { className: k.extraTitle, style: { fontSize: l }, children: n }),
    ],
  });
});
b.displayName = 'LobeHubBrand';
var H = b;
const D = h.memo((t) => e.jsx(H, { ...t }));
export { D as P };
