import { j as u } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as S } from './useQuery-C1-jdg1a.js';
import { S as f } from './const-lbjNOSiN.js';
import { c as h, d as b, e as $, f as y } from './index-C8UyLGsD.js';
import { P as C } from './Pagination-Cg0T9GpR.js';
const P = 'lobe-mobile-scroll-container',
  x = 'ant',
  R = y(({ css: e, cssVar: o }) => ({
    page: e`
      .${x}-pagination-item-active {
        border-color: ${o.colorFillSecondary};
        background: ${o.colorFillSecondary};

        &:hover {
          border-color: ${o.colorFill};
          background: ${o.colorFill};
        }
      }
    `,
  })),
  _ = d.memo(({ tab: e, currentPage: o, total: n, pageSize: s }) => {
    const { page: t } = S(),
      i = h(),
      c = b(),
      { mobile: l } = $(),
      m = (g) => {
        const r = new URLSearchParams(c.search);
        (r.set('page', String(g)), i(`/community/${e}?${r.toString()}`));
        const p = l ? P : f,
          a = document?.querySelector(`#${p}`);
        a && a.scrollTo({ behavior: 'smooth', top: 0 });
      };
    return u.jsx(C, {
      'className': R.page,
      'current': t ? Number(t) : o,
      'data-testid': 'pagination',
      'pageSize': s,
      'showSizeChanger': !1,
      'total': n,
      'style': { alignSelf: 'flex-end' },
      'onChange': m,
    });
  });
export { _ as P };
