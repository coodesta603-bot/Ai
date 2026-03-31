import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as r, C as i } from './index-C8UyLGsD.js';
import { E as m } from './Empty-DHLc2EKW.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { ax as p } from '../vendor/vendor-icons-BHMUH78i.js';
const n = a.memo(({ search: s, ...o }) => {
  const { t } = r('topic');
  return e.jsx(i, {
    height: '100%',
    style: { minHeight: '50vh' },
    width: '100%',
    children: e.jsx(m, {
      description: t(s ? 'searchResultEmpty' : 'guide.desc'),
      icon: p,
      descriptionProps: { fontSize: 14 },
      style: { maxWidth: 400 },
      ...o,
    }),
  });
});
n.displayName = 'TopicEmpty';
export { n as T };
