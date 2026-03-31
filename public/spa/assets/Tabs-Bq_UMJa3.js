import { f as u, ad as l, A as x, j as m } from './index-C8UyLGsD.js';
import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { T as c } from './index-CXy3GcSN.js';
import { aC as h } from '../vendor/vendor-icons-BHMUH78i.js';
const a = 'ant',
  o = u(({ css: r, cssVar: t }) => ({
    compact: r`
      &.${a}-tabs {
        .${a}-tabs-tab {
          margin: 4px;

          + [class*='ant-tabs-tab'] {
            margin: 4px;
          }
        }
      }
    `,
    dropdown: r`
      .${a}-tabs-dropdown-menu {
        padding: 4px;
        border: 1px solid ${t.colorBorderSecondary};

        .${a}-tabs-dropdown-menu-item {
          border-radius: ${t.borderRadius};
        }
      }
    `,
    hideHolder: r`
      &.${a}-tabs {
        .${a}-tabs-content-holder {
          display: none;
        }

        .${a}-tabs-nav {
          margin: 0;

          &::before {
            display: none;
          }
        }
      }
    `,
    margin: r`
      &.${a}-tabs {
        .${a}-tabs-tab {
          margin: 8px;

          + .${a}-tabs-tab {
            margin: 8px;
          }
        }
      }
    `,
    point: r`
      &.${a}-tabs {
        &.${a}-tabs-top {
          .${a}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-start-start-radius: 4px;
            border-start-end-radius: 4px;
          }
        }

        &.${a}-tabs-bottom {
          .${a}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-end-start-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &.${a}-tabs-left {
          .${a}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
          }
        }

        &.${a}-tabs-right {
          .${a}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }
      }
    `,
    root: r`
      &.${a}-tabs {
        .${a}-tabs-tab {
          padding-block: 8px;
          padding-inline: 12px;
          color: ${t.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:hover {
            border-radius: ${t.borderRadius};
            color: ${t.colorText};
            background: ${t.colorFillTertiary};
          }
        }
      }
    `,
    rounded: r`
      &.${a}-tabs {
        &.${a}-tabs-top {
          .${a}-tabs-ink-bar {
            height: 3px;
            border-start-start-radius: 3px;
            border-start-end-radius: 3px;
          }
        }

        &.${a}-tabs-bottom {
          .${a}-tabs-ink-bar {
            height: 3px;
            border-end-start-radius: 3px;
            border-end-end-radius: 3px;
          }
        }

        &.${a}-tabs-left {
          .${a}-tabs-ink-bar {
            width: 3px;
            border-start-start-radius: 3px;
            border-end-start-radius: 3px;
          }
        }

        &.${a}-tabs-right {
          .${a}-tabs-ink-bar {
            width: 3px;
            border-start-end-radius: 3px;
            border-end-end-radius: 3px;
          }
        }
      }
    `,
  })),
  $ = l(o.root, {
    defaultVariants: { compact: !1, underlined: !1, variant: 'rounded' },
    variants: {
      variant: { square: null, rounded: o.rounded, point: o.point },
      compact: { false: o.margin, true: o.compact },
      underlined: { false: o.hideHolder, true: null },
    },
  }),
  n = ({ className: r, compact: t, variant: i = 'rounded', items: e, ...d }) => {
    const b = e?.some((p) => !!p.children);
    return s.jsx(c, {
      className: m($({ compact: t, underlined: b, variant: i }), r),
      items: e,
      ...d,
      classNames: { ...d?.classNames, popup: { root: o.dropdown, ...d?.classNames?.popup } },
      more: { icon: s.jsx(x, { icon: h }), ...d?.more },
    });
  };
n.displayName = 'Tabs';
var T = n;
export { T };
