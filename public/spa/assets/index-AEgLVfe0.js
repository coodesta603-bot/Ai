import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { aj as n, k as l, j as d, f as c } from './index-C8UyLGsD.js';
import { F as p } from './Table-BlWKciej.js';
const a = 'ant',
  r = c(({ css: t }) => ({
    hoverToActive: t`
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  `,
    table: t`
    .${a}-table {
      background: transparent;

      th,
      td {
        border: none !important;
        font-size: 13px;
      }

      .${a}-table-cell:before {
        display: none;
      }
    }

    tr {
      td:first-child,
      th:first-child {
        padding-inline-start: 24px !important;
      }

      td:last-child,
      th:last-child {
        padding-inline-end: 24px !important;
      }
    }
  `,
  })),
  b = s.memo(({ hoverToActive: t, className: o, ...i }) =>
    e.jsx(n, {
      theme: { components: { Table: { headerBg: l.colorFillQuaternary, headerBorderRadius: 0 } } },
      children: e.jsx(p, {
        bordered: !1,
        className: d(r.table, t && r.hoverToActive, o),
        pagination: !1,
        scroll: { x: 'max-content' },
        size: 'small',
        ...i,
      }),
    }),
  );
export { b as I };
