import { ad as d, f as n, ae as s, a3 as c, j as u } from './index-C8UyLGsD.js';
import { r as f } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as v } from './index-uNJ5HPPz.js';
const e = n(({ css: a }) => ({
    borderless: s.variantBorderless,
    filled: s.variantFilled,
    outlined: s.variantOutlined,
    root: a``,
    shadow: s.shadow,
  })),
  p = d(e.root, {
    defaultVariants: { shadow: !1 },
    variants: {
      variant: {
        filled: e.filled,
        outlined: e.outlined,
        borderless: e.borderless,
        underlined: null,
      },
      shadow: { false: null, true: e.shadow },
    },
  }),
  r = f.memo(({ variant: a, shadow: l, className: o, ...i }) => {
    const { isDarkMode: t } = c();
    return m.jsx(v, {
      variant: a || (t ? 'filled' : 'outlined'),
      className: u(p({ shadow: l, variant: a || (t ? 'filled' : 'outlined') }), o),
      ...i,
    });
  });
r.displayName = 'DatePicker';
var w = r;
export { w as D };
