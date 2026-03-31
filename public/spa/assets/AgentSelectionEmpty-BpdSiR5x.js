import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as r, C as a } from './index-C8UyLGsD.js';
import { E as l } from './Empty-DHLc2EKW.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a4 as p } from '../vendor/vendor-icons-BHMUH78i.js';
const c = m.memo(({ search: n, variant: o = 'empty', ...s }) => {
  const { t: e } = r('home');
  let t = e('agentSelection.empty');
  return (
    n
      ? (t = e('agentSelection.search'))
      : o === 'noAvailable'
        ? (t = e('agentSelection.noAvailable'))
        : o === 'noSelected' && (t = e('agentSelection.noSelected')),
    i.jsx(a, {
      height: '100%',
      style: { minHeight: '30vh' },
      width: '100%',
      children: i.jsx(l, {
        description: t,
        icon: p,
        descriptionProps: { fontSize: 14 },
        style: { maxWidth: 400 },
        ...s,
      }),
    })
  );
});
c.displayName = 'AgentSelectionEmpty';
export { c as A };
