import { ad as u, f as b, ae as a, F as v, j as f } from './index-C8UyLGsD.js';
import { j as k } from '../vendor/vendor-motion-Dbb9VQJo.js';
const l = b(({ css: e, cssVar: s }) => ({
    borderless: a.variantBorderlessWithoutHover,
    clickableBorderless: a.variantBorderless,
    clickableFilled: a.variantFilled,
    clickableOutlined: a.variantOutlined,
    clickableRoot: e`
      cursor: pointer;
    `,
    filled: a.variantFilledWithoutHover,
    glass: a.blur,
    outlined: a.variantOutlinedWithoutHover,
    root: e`
      position: relative;
      border-radius: ${s.borderRadius};
    `,
    shadow: a.shadow,
  })),
  h = u(l.root, {
    compoundVariants: [
      { class: l.clickableBorderless, clickable: !0, variant: 'borderless' },
      { class: l.clickableFilled, clickable: !0, variant: 'filled' },
      { class: l.clickableOutlined, clickable: !0, variant: 'outlined' },
    ],
    defaultVariants: { clickable: !1, glass: !1, shadow: !1, variant: 'filled' },
    variants: {
      variant: { filled: l.filled, outlined: l.outlined, borderless: l.borderless },
      clickable: { false: null, true: l.clickableRoot },
      glass: { false: null, true: l.glass },
      shadow: { false: null, true: l.shadow },
    },
  }),
  r = ({
    className: e,
    variant: s = 'filled',
    shadow: i,
    glass: t,
    children: o,
    clickable: c,
    ref: d,
    ...n
  }) =>
    k.jsx(v, {
      className: f(h({ clickable: c, glass: t, shadow: i, variant: s }), e),
      ref: d,
      ...n,
      children: o,
    });
r.displayName = 'Block';
var p = r;
export { p as B };
