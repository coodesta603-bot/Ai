import { ab as u } from './index-C8UyLGsD.js';
import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
const p = (t) => {
  const { t: r, locale: a } = u();
  return {
    locale: a,
    t: e.useMemo(
      () =>
        t
          ? (n) => {
              const o = r(n),
                s = t[n];
              return o === n && s ? s : o;
            }
          : r,
      [r, t],
    ),
  };
};
export { p as u };
