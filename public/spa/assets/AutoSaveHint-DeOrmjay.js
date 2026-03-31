import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as c, T as s, I as i, a1 as u } from './index-C8UyLGsD.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { _ as x, k as e } from '../vendor/vendor-icons-BHMUH78i.js';
const g = m.memo(({ style: a, saveStatus: n, lastUpdatedTime: t }) => {
  const { t: r } = c('editor');
  return n === 'saving'
    ? o.jsx(s, { icon: o.jsx(i, { spin: !0, icon: x }), style: a, children: r('autoSave.saving') })
    : n === 'saved' && t
      ? o.jsxs(s, {
          icon: o.jsx(i, { icon: e }),
          style: a,
          children: [r('autoSave.saved'), ' ', u(t).fromNow()],
        })
      : o.jsx(s, { icon: o.jsx(i, { icon: e }), style: a, children: r('autoSave.latest') });
});
export { g as A };
