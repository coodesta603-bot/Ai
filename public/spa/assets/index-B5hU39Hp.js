import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as u } from './index-CaOmqfDS.js';
const S = t.memo(({ enabled: o, onChange: e, size: r }) => {
  const [n, i] = t.useState(o),
    [m, s] = t.useState(!1);
  return c.jsx(u, {
    loading: m,
    size: r,
    value: n,
    onChange: async (a) => {
      (s(!0), i(a), await e(a), s(!1));
    },
  });
});
export { S as I };
