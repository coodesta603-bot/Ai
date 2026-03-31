import {
  ad as m,
  f as r,
  r as n,
  ae as b,
  e as M,
  F as g,
  I as N,
  j as H,
  bi as R,
} from './index-C8UyLGsD.js';
import { r as L } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as l } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { h as k } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const o = 'ant',
  s = r(({ css: e, cssVar: t }) => ({
    borderless: e`
    gap: 48px;
    .${o}-collapse .${o}-collapse-header {
      padding-block-end: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }

    .${o}-collapse-body {
      padding-inline: 0 !important;
    }
  `,
    filled: e`
    .${o}-collapse-body {
      padding-block: 0 !important;
    }
  `,
    outlined: e`
    .${o}-collapse-body {
      padding-block: 0 !important;
    }
  `,
    root: e`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    .${o}-form-item {
      margin: 0 !important;
    }

    .${o}-form-item .${o}-form-item-label > label {
      height: unset;
    }

    .${o}-row {
      position: relative;
      flex-wrap: nowrap;
    }

    .${o}-form-item-label {
      position: relative;
      flex: 1;
      max-width: 100%;
    }

    .${o}-form-item-row {
      align-items: center;
    }

    .${o}-form-item-control {
      position: relative;
      flex: 0;
      min-width: unset !important;
    }

    .${o}-collapse-item {
      border-radius: ${t.borderRadius} !important;
    }

    ${n.sm} {
      gap: 0 !important;
    }
  `,
  })),
  q = m(s.root, {
    defaultVariants: { variant: 'borderless' },
    variants: { variant: { filled: s.filled, outlined: s.outlined, borderless: s.borderless } },
  }),
  d = r(({ cx: e, css: t, cssVar: i }) => ({
    borderless: e(
      b.variantBorderlessWithoutHover,
      t`
        padding-inline: 0;
      `,
    ),
    filled: e(
      b.variantFilledWithoutHover,
      t`
        background: ${i.colorFillQuaternary};
      `,
    ),
    mobile: t`
      padding-block: 0;
      padding-inline: 16px;
      border-radius: 0;
      background: ${i.colorBgContainer};
    `,
    outlined: b.variantOutlinedWithoutHover,
    root: t`
      padding-inline: 16px;
      border-radius: ${i.borderRadiusLG};
    `,
  })),
  A = m(d.root, {
    defaultVariants: { variant: 'borderless' },
    variants: { variant: { filled: d.filled, outlined: d.outlined, borderless: d.borderless } },
  });
r(({ css: e, cssVar: t }) => ({
  root: e`
      ${n.sm} {
        padding: 16px;
        border-block-start: 1px solid ${t.colorBorderSecondary};
        background: ${t.colorBgContainer};
      }
    `,
}));
const x = r(({ css: e, cssVar: t }) => ({
    mobileGroupBody: e`
      padding-block: 0;
      padding-inline: 16px;
      background: ${t.colorBgContainer};
    `,
    mobileGroupHeader: e`
      padding: 16px;
      background: ${t.colorBgLayout};
    `,
    title: e`
      align-items: center;
      font-size: 16px;
      font-weight: bold;
    `,
    titleBorderless: e`
      font-size: 18px;
      font-weight: bold;
    `,
    titleMobile: e`
      ${n.sm} {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.5;
      }
    `,
  })),
  _ = m(x.title, {
    defaultVariants: { variant: 'borderless' },
    variants: { variant: { filled: null, outlined: null, borderless: x.titleBorderless } },
  }),
  p = r(({ css: e }) => ({
    itemMinWidth: e`
    &.${o}-form-item .${o}-form-item-control {
      width: var(--form-item-min-width) !important;
    }
  `,
    itemNoDivider: e`
    &:not(:first-child) {
      padding-block-start: 0;
    }
  `,
    root: e`
    &.${o}-form-item {
      padding-block: 16px;
      padding-inline: 0;

      .${o}-form-item-label {
        text-align: start;
      }

      .${o}-row {
        gap: 12px;
        justify-content: space-between;

        > div {
          flex: unset;
          flex-grow: unset;
        }
      }

      .${o}-form-item-required::before {
        align-self: flex-start;
      }

      ${n.sm} {
        &.${o}-form-item-horizontal {
          .${o}-form-item-label {
            flex: 1 !important;
          }
          .${o}-form-item-control {
            flex: none !important;
          }
        }
      }
    }
  `,
    verticalLayout: e`
    &.${o}-form-item {
      .${o}-row {
        align-items: stretch;
      }
    }
  `,
  })),
  O = m(p.root, {
    defaultVariants: { divider: !1, itemMinWidth: !1, layout: 'vertical' },
    variants: {
      itemMinWidth: { true: p.itemMinWidth, false: null },
      divider: { true: null, false: p.itemNoDivider },
      layout: { vertical: p.verticalLayout, horizontal: null },
    },
  }),
  Q = r(({ css: e, cssVar: t }) => ({
    floatFooter: e`
    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    width: max-content;
    padding: 8px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 48px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowSecondary};
  `,
    footer: e`
    ${n.sm} {
      margin-block-start: calc(-1 * ${t.borderRadius});
      padding: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
      background: ${t.colorBgContainer};
    }
  `,
  })),
  T = r(({ css: e, cssVar: t }) => ({
    content: e`
    position: relative;
    text-align: start;
  `,
    desc: e`
    display: block;

    line-height: 1.44;
    color: ${t.colorTextDescription};
    word-wrap: break-word;
    white-space: pre-wrap;
  `,
    title: e`
    font-weight: 500;
    line-height: 1;
  `,
  })),
  B = L.memo(
    ({
      className: e,
      icon: t,
      title: i,
      children: v,
      extra: h,
      variant: c = 'borderless',
      defaultActive: $ = !0,
      collapsible: y,
      active: w,
      keyValue: u = 'group',
      onCollapse: S,
      desc: j,
      ...C
    }) => {
      const { mobile: F } = M(),
        a = x,
        f = c === 'borderless',
        G = k(y) ? !f : y,
        z = l.jsxs(g, {
          horizontal: !0,
          className: H(_({ variant: c }), a.titleMobile),
          gap: 8,
          children: [t && l.jsx(N, { icon: t }), i],
        });
      return F
        ? l.jsxs(g, {
            className: e,
            children: [
              l.jsxs(g, {
                horizontal: !0,
                className: a.mobileGroupHeader,
                justify: 'space-between',
                children: [z, h],
              }),
              l.jsx('div', { className: a.mobileGroupBody, children: v }),
            ],
          })
        : l.jsx(R, {
            activeKey: k(w) ? void 0 : w ? [u] : [],
            className: e,
            collapsible: G,
            defaultActiveKey: $ ? [u] : void 0,
            variant: c,
            classNames: {
              header: f ? a.titleBorderless : void 0,
              title: f ? a.titleBorderless : void 0,
            },
            items: [{ children: v, desc: j, extra: h, icon: t, key: u, label: i }],
            onChange: (W) => S?.(W.length > 0),
            ...C,
          });
    },
  );
B.displayName = 'FormGroup';
var U = B;
export { U as F, A as a, d as f, O as i, Q as s, T as t, q as v };
