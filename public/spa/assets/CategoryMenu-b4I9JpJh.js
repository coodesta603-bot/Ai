import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as a } from './ScrollShadow-Dm9kdU7B.js';
import { f as n } from './index-C8UyLGsD.js';
import { M as r } from './Menu-Dl6ttHxv.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
const x = ({ children: t, top: e = 16 }) =>
    o.jsx(a, {
      hideScrollBar: !0,
      as: 'aside',
      flex: 'none',
      height: `calc(100vh - ${e * 2 + 4}px)`,
      offset: 16,
      size: 4,
      style: { paddingBottom: 16, position: 'sticky', top: e },
      width: 280,
      children: t,
    }),
  i = 'ant',
  m = n(({ css: t }) => ({
    menu: t`
      padding: 0 !important;
      .${i}-menu-item {
        display: flex;
        gap: 4px;

        width: 100%;
        height: 36px;
        margin-inline: 0;
        padding-inline-start: 12px !important;

        font-size: 14px;

        .${i}-menu-title-content > a {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    `,
  })),
  u = s.memo(({ style: t, ...e }) =>
    o.jsx(r, {
      'className': m.menu,
      'data-testid': 'category-menu',
      'mode': 'inline',
      'style': t,
      ...e,
    }),
  );
export { u as C, x as a };
