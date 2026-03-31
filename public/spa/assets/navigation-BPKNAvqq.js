import { q as t } from './base-AbuBx_QK.js';
import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { l as s, d as o, c } from './index-C8UyLGsD.js';
const p = () => {
    const a = c();
    return e.useMemo(
      () => ({
        back: () => a(-1),
        forward: () => a(1),
        prefetch: () => {},
        push: (r) => a(r),
        replace: (r) => a(r, { replace: !0 }),
      }),
      [a],
    );
  },
  i = () => o().pathname,
  h = () => s(),
  f = () => {
    const [a] = s();
    return e.useMemo(() => t.parse(a.toString()), [a]);
  };
export { i as a, f as b, p as c, h as u };
