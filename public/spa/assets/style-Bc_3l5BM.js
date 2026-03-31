import { ad as s, f as e, ae as a, j as r } from './index-C8UyLGsD.js';
const t = e(({ css: l, cssVar: o }) => ({
    borderless: l`
      &[class*='ant-input'] {
        ${a.variantBorderless}
        &:hover {
          ${a.variantBorderlessWithoutHover}
        }
      }
    `,
    borderlessOPT: l`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${a.variantBorderless};
        }
      }
    `,
    filled: r(
      a.variantFilled,
      l`
        &:focus-within {
          ${a.variantFilledWithoutHover}
        }
      `,
    ),
    filledOPT: l`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${a.variantFilled};
        }
      }
    `,
    outlined: a.variantOutlined,
    outlinedOPT: l`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${a.variantOutlined};
        }
      }
    `,
    root: l``,
    rootOPT: l`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          &:focus-within {
            border-color: ${o.colorBorder};
          }
        }
      }
    `,
    shadow: a.shadow,
    shadowOPT: l`
      &[class*='ant-otp'] {
        [class*='ant-otp-input'] {
          ${a.shadow};
        }
      }
    `,
  })),
  i = s(t.root, {
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
  d = s(t.rootOPT, {
    defaultVariants: { shadow: !1 },
    variants: {
      variant: {
        filled: t.filledOPT,
        outlined: t.outlinedOPT,
        borderless: t.borderlessOPT,
        underlined: null,
      },
      shadow: { false: null, true: t.shadowOPT },
    },
  });
export { d as a, i as v };
