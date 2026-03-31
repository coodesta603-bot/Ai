import { v as i } from './style-Bc_3l5BM.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as u } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { T as n } from './index-GXVeGAZV.js';
import { a3 as d, j as l } from './index-C8UyLGsD.js';
const t = p.memo(({ ref: a, variant: r, shadow: m, className: o, ...s }) => {
  const { isDarkMode: e } = d();
  return u.jsx(n, {
    ref: a,
    variant: r || (e ? 'filled' : 'outlined'),
    className: l(i({ shadow: m, variant: r || (e ? 'filled' : 'outlined') }), o),
    ...s,
  });
});
t.displayName = 'InputNumber';
var b = t;
export { b as I };
