import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as a, u as n, s as i, A as c, x as l } from './index-C8UyLGsD.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a7 as S, a8 as g } from '../vendor/vendor-icons-BHMUH78i.js';
const x = m.memo(() => {
  const { t: o } = a('chat'),
    [e, r] = n((t) => [i.wideScreen(t), t.toggleWideScreen]);
  return s.jsx(c, {
    icon: e ? S : g,
    size: l,
    title: o(e ? 'toggleWideScreen.off' : 'toggleWideScreen.on'),
    tooltipProps: { placement: 'bottom' },
    onClick: () => r(),
  });
});
export { x as W };
