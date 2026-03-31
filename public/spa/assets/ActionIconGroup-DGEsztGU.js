import { ad as M, f as R, ae as s, m as B, C as D, A as h, j as H } from './index-C8UyLGsD.js';
import { D as I } from './DropdownMenu-CEFIlaZw.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aC as N } from '../vendor/vendor-icons-BHMUH78i.js';
const t = R(({ css: n, cssVar: a }) => ({
    borderless: s.variantBorderless,
    disabled: s.disabled,
    filled: s.variantFilledWithoutHover,
    glass: s.blur,
    outlined: s.variantOutlinedWithoutHover,
    root: n`
      position: relative;
      border-radius: ${a.borderRadius};
    `,
    shadow: s.shadow,
  })),
  P = M(t.root, {
    defaultVariants: { disabled: !1, glass: !1, shadow: !1, variant: 'outlined' },
    variants: {
      variant: { filled: t.filled, outlined: t.outlined, borderless: t.borderless },
      glass: { false: null, true: t.glass },
      shadow: { false: null, true: t.shadow },
      disabled: { false: null, true: t.disabled },
    },
  }),
  x = ({
    variant: n = 'filled',
    disabled: a,
    shadow: j,
    glass: y,
    actionIconProps: l,
    items: c = [],
    horizontal: u = !0,
    menu: r,
    onActionClick: p,
    className: w,
    size: f = 'small',
    ref: k,
    ...C
  }) => {
    const m = g.useMemo(() => (l?.tooltipProps?.placement || u ? 'top' : 'right'), [l, u]),
      S = g.useMemo(() => {
        const i = typeof r == 'function' ? r() : r;
        return i
          ? i.map((d) => ({
              ...d,
              onClick: (e) => {
                (d?.onClick?.(e), p?.(e));
              },
            }))
          : [];
      }, [r, p]);
    return o.jsx(B, {
      children: o.jsxs(D, {
        className: H(P({ disabled: a, glass: y, shadow: j, variant: n }), w),
        horizontal: u,
        padding: 2,
        ref: k,
        ...C,
        children: [
          c?.length > 0 &&
            c.map((i) => {
              const { icon: d, key: e, label: _, onClick: A, danger: E, loading: v, ...G } = i;
              return o.jsx(
                h,
                {
                  danger: E,
                  icon: d,
                  loading: v,
                  size: f,
                  title: _,
                  tooltipProps: { placement: m },
                  onClick: (b) => {
                    (p?.({ domEvent: b, key: String(e), keyPath: [String(e)] }), A?.(b));
                  },
                  ...l,
                  disabled: a || v || G?.disabled,
                },
                e,
              );
            }),
          r &&
            o.jsx(I, {
              items: S,
              nativeButton: !1,
              children: o.jsx(
                h,
                {
                  disabled: a,
                  icon: N,
                  size: f,
                  ...l,
                  tooltipProps: { placement: m, ...l?.tooltipProps },
                },
                'more',
              ),
            }),
        ],
      }),
    });
  };
x.displayName = 'ActionIconGroup';
var $ = x;
export { $ as A };
