import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as u } from './AutoSaveHint-DeOrmjay.js';
import { u as e, e as o } from './EditorCanvas-CaZwW-_5.js';
const n = p.memo(({ documentId: s, style: a }) => {
  const r = e((t) => o.saveStatus(s)(t)),
    m = e((t) => o.lastUpdatedTime(s)(t) ?? null);
  return i.jsx(u, { lastUpdatedTime: m, saveStatus: r, style: a });
});
n.displayName = 'AutoSaveHint';
export { n as A };
