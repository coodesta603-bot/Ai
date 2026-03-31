import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as s, F as l, av as a, a4 as d, B as m } from './index-C8UyLGsD.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
const x = c.memo(({ extra: n, status: o = 404, title: i, desc: r }) => {
  const { t: e } = s('error');
  return t.jsxs(l, {
    align: 'center',
    justify: 'center',
    style: { minHeight: '100%', width: '100%' },
    children: [
      t.jsx('h1', {
        style: {
          filter: 'blur(8px)',
          fontSize: `min(${a / 3}px, 50vw)`,
          fontWeight: 'bolder',
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        },
        children: o,
      }),
      t.jsx(d, { emoji: '👀', size: 64 }),
      t.jsx('h2', {
        style: { fontWeight: 'bold', marginTop: '1em', textAlign: 'center' },
        children: i || e('notFound.title'),
      }),
      t.jsxs('div', {
        style: { lineHeight: '1.8', marginBottom: '2em', textAlign: 'center' },
        children: [
          t.jsx('div', { children: r || e('notFound.desc') }),
          t.jsx('div', { style: { marginTop: '0.5em' }, children: e('notFound.check') }),
        ],
      }),
      n ||
        t.jsx(m, {
          type: 'primary',
          onClick: () => (window.location.href = '/'),
          children: e('notFound.backHome'),
        }),
    ],
  });
});
x.displayName = 'NotFound';
export { x as N };
