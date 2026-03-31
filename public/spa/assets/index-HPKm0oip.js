import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { G as A } from './GroupAvatar-RtGU9nHc.js';
import { S as f } from './index-DLsdvBKx.js';
import { v as d, R as e, V as v, k as x } from './index-C8UyLGsD.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
const R = i.memo(({ size: t = 28, avatars: o = [], background: a, loading: n, ...l }) => {
  const [s, u, m] = d((r) => [e.userAvatar(r), e.nickName(r), e.username(r)]),
    c = i.useMemo(() => {
      let r = o;
      return (
        r.length === 0 && (r = [{ avatar: v }]),
        [{ avatar: s || u || m, style: { color: x.colorText } }, ...r]
      );
    }, [o, s, u, m]);
  return n
    ? p.jsx(f.Avatar, { active: !0, shape: 'square', size: t })
    : p.jsx(A, {
        avatarShape: 'square',
        cornerShape: 'square',
        size: t,
        avatars: c.map((r) => ({
          avatar: r.avatar || v,
          background: r?.backgroundColor || void 0,
          ...r,
        })),
        style: a && a !== 'rgba(0,0,0,0)' ? { background: a, borderRadius: '22%' } : void 0,
        ...l,
      });
});
export { R as G };
