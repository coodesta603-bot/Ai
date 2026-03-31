import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { i as o } from './index-C8UyLGsD.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as p } from './index-Dp4SCEiz.js';
import { c as t, d as a } from './index-Br6hqyew.js';
const v = u.memo(({ size: e = 28 }) => {
  const r = t(a.currentGroupMeta, o),
    s = t(a.currentGroupMemberAvatars, o);
  return m.jsx(p, {
    avatar: r.avatar,
    backgroundColor: r.backgroundColor,
    memberAvatars: s,
    size: e,
  });
});
export { v as C };
