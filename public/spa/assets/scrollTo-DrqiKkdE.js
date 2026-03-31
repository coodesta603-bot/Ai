import { w as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { bX as w } from './index-C8UyLGsD.js';
function u(o) {
  return w(o) && o === o.window;
}
const T = (o) => {
  if (typeof window > 'u') return 0;
  let n = 0;
  return (
    u(o)
      ? (n = o.pageYOffset)
      : o instanceof Document
        ? (n = o.documentElement.scrollTop)
        : (o instanceof HTMLElement || o) && (n = o.scrollTop),
    o && !u(o) && typeof n != 'number' && (n = (o.ownerDocument ?? o).documentElement?.scrollTop),
    n
  );
};
function d(o, n, l, s) {
  const e = l - n;
  return ((o /= s / 2), o < 1 ? (e / 2) * o * o * o + n : (e / 2) * ((o -= 2) * o * o + 2) + n);
}
function O(o, n = {}) {
  const { getContainer: l = () => window, callback: s, duration: e = 450 } = n,
    c = l(),
    p = T(c),
    a = Date.now();
  let i;
  const m = () => {
    const t = Date.now() - a,
      f = d(t > e ? e : t, p, o, e);
    (u(c)
      ? c.scrollTo(window.pageXOffset, f)
      : c instanceof Document || c.constructor.name === 'HTMLDocument'
        ? (c.documentElement.scrollTop = f)
        : (c.scrollTop = f),
      t < e ? (i = r(m)) : typeof s == 'function' && s());
  };
  return (
    (i = r(m)),
    () => {
      r.cancel(i);
    }
  );
}
export { T as g, O as s };
