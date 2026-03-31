import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { aj as c, k as r, j as s, f as d } from './index-C8UyLGsD.js';
import { M as g } from './index-DeBHMb7c.js';
const e = 'ant',
  m = d(({ css: n, cssVar: i }) => ({
    compact: n`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,
    menu: n`
    flex: 1;
    border: none !important;
    background: transparent;

    .${e}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${i.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${e}-menu-item, .${e}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${e}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${e}-menu-item-selected {
      .${e}-menu-item-icon svg {
        color: ${i.colorText};
      }
    }

    .${e}-menu-item-icon svg {
      color: ${i.colorTextSecondary};
    }

    .${e}-menu-title-content {
      flex: 1;
    }
  `,
  })),
  $ = a.memo(({ className: n, selectable: i = !1, compact: t, ...l }) =>
    o.jsx(c, {
      theme: {
        components: {
          Menu: {
            controlHeightLG: 36,
            iconMarginInlineEnd: 8,
            iconSize: 16,
            itemBorderRadius: 8,
            itemColor: i ? r.colorTextSecondary : r.colorText,
            itemHoverBg: r.colorFillTertiary,
            itemMarginBlock: t ? 0 : 4,
            itemMarginInline: t ? 0 : 4,
            itemSelectedBg: r.colorFillSecondary,
            paddingXS: -8,
          },
        },
      },
      children: o.jsx(g, {
        className: s(m.menu, t && m.compact, n),
        mode: 'vertical',
        selectable: i,
        ...l,
      }),
    }),
  );
export { $ as M };
