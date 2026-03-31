import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { n as m } from './index-C8UyLGsD.js';
function E(c, a, f) {
  const { onData: t, skipSync: s, onSuccess: i, ...S } = f || {},
    e = r.useRef(!1),
    o = m(c, a, {
      ...S,
      onSuccess: (u, p, l) => {
        (i?.(u, p, l), t && !s && (t(u), (e.current = !0)));
      },
    }),
    { data: n } = o;
  return (
    r.useEffect(() => {
      n && t && !s && !e.current && (t(n), (e.current = !0));
    }, [n, t, s]),
    r.useEffect(() => {
      e.current = !1;
    }, [c?.toString()]),
    o
  );
}
export { E as u };
