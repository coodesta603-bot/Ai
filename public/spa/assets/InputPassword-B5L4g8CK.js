import { v as i } from './style-Bc_3l5BM.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as d } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as n } from './index-OkOG2AHU.js';
import { a3 as u, j as l } from './index-C8UyLGsD.js';
const a = p.memo(({ ref: o, variant: s, shadow: t, className: e, ...m }) => {
  const { isDarkMode: r } = u();
  return d.jsx(n.Password, {
    ref: o,
    variant: s || (r ? 'filled' : 'outlined'),
    className: l(i({ shadow: t, variant: s || (r ? 'filled' : 'outlined') }), e),
    ...m,
  });
});
a.displayName = 'InputPassword';
var v = a;
export { v as I };
