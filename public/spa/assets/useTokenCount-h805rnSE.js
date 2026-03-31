import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { f as c } from './index-Br6hqyew.js';
import { d as a } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const f = (o = '') => {
  const [s, n] = e.useState(0),
    t = e.useCallback(
      a((r) => {
        c(r)
          .then(n)
          .catch(() => {
            n(r.length);
          });
      }, 300),
      [],
    );
  return (
    e.useEffect(
      () => (
        e.startTransition(() => {
          t(o || '');
        }),
        () => {
          t.cancel();
        }
      ),
      [o, t],
    ),
    s
  );
};
export { f as u };
