import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { B as r, Z as o, k as s, I as a } from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { L as n } from './Link-NDczSa-V.js';
import { a9 as d } from '../vendor/vendor-icons-BHMUH78i.js';
const h = l.memo(({ source: t }) => {
  if (!t) return;
  const i = t.title || t.id?.replace('tpc_', '').slice(0, 8);
  return e.jsx(n, {
    href: `/agent/${t.agentId}?topic=${t.id}`,
    style: { flex: 1, maxWidth: '100%', overflow: 'hidden' },
    children: e.jsx(r, {
      icon: e.jsx(a, { icon: d }),
      size: 'small',
      title: i,
      type: 'text',
      style: { flex: 1, maxWidth: '100%', overflow: 'hidden' },
      children: e.jsx(o, { ellipsis: !0, color: s.colorTextSecondary, children: i }),
    }),
  });
});
export { h as S };
