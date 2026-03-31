import { ad as f, f as m, ae as a, a3 as v, aD as p, I as h, j as S } from './index-C8UyLGsD.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aK as y } from '../vendor/vendor-icons-BHMUH78i.js';
const s = m(({ css: e, cssVar: t }) => ({
    borderless: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantBorderless}
        }
      }
    `,
    filled: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantFilled}
        }
      }
    `,
    outlined: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantOutlined}
        }
      }
    `,
    root: e`
      &[class*='ant-select'] {
        &[class*='ant-select-focused'] {
          > [class*='ant-select-selector'] {
            background: ${t.colorFillTertiary} !important;
          }
        }
      }
    `,
    shadow: e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.shadow}
        }
      }
    `,
  })),
  w = f(s.root, {
    defaultVariants: { shadow: !1 },
    variants: {
      variant: {
        filled: s.filled,
        outlined: s.outlined,
        borderless: s.borderless,
        underlined: null,
      },
      shadow: { false: null, true: s.shadow },
    },
  }),
  n = x.memo(
    ({ ref: e, variant: t, suffixIconProps: l, suffixIcon: c, shadow: i, className: d, ...u }) => {
      const { isDarkMode: r } = v();
      return o.jsx(p, {
        ref: e,
        variant: t || (r ? 'filled' : 'outlined'),
        className: S(w({ shadow: i, variant: t || (r ? 'filled' : 'outlined') }), d),
        suffixIcon: o.jsx(h, {
          icon: c || y,
          size: 'small',
          ...l,
          style: { pointerEvents: 'none', ...l?.style },
        }),
        ...u,
      });
    },
  );
n.displayName = 'Select';
var k = n;
export { k as S };
