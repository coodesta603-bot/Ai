import { R as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { af as c } from './index-C8UyLGsD.js';
const a = (t) => t;
function u(t, e = a) {
  const s = n.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState()),
  );
  return (n.useDebugValue(s), s);
}
const o = (t) => {
    const e = c(t),
      s = (r) => u(e, r);
    return (Object.assign(s, e), s);
  },
  m = (t) => (t ? o(t) : o);
export { m as c, u };
