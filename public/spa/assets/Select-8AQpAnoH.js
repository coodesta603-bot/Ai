import { ad as i, f as c, ae as s, a3 as d, j as u } from './index-C8UyLGsD.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as f } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { A as p } from './index-DLWAK85S.js';
const t = c(({ css: e }) => ({
    borderless: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantBorderless}
        }
      }
    `,
    filled: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantFilled}
        }
      }
    `,
    outlined: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantOutlined}
        }
      }
    `,
    root: e``,
    shadow: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.shadow}
        }
      }
    `,
  })),
  v = i(t.root, {
    defaultVariants: { shadow: !1 },
    variants: {
      variant: {
        filled: t.filled,
        outlined: t.outlined,
        borderless: t.borderless,
        underlined: null,
      },
      shadow: { false: null, true: t.shadow },
    },
  }),
  l = m.memo(({ variant: e, shadow: o, className: r, ...n }) => {
    const { isDarkMode: a } = d();
    return f.jsx(p, {
      variant: e || (a ? 'filled' : 'outlined'),
      className: u(v({ shadow: o, variant: e || (a ? 'filled' : 'outlined') }), r),
      ...n,
    });
  });
l.displayName = 'AutoComplete';
var j = l;
export { j as S };
