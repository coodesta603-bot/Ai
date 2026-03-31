import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as x, L as C, I as h, T as l, f as j, F as m, aE as S } from './index-C8UyLGsD.js';
import { C as v, a as M } from './CategoryMenu-b4I9JpJh.js';
import { q as b } from './base-AbuBx_QK.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as k } from './withSuspense-twnyXsUR.js';
import { u as D } from './useMCPCategory-BDqDyl53.js';
import { u as R } from './useQuery-C1-jdg1a.js';
import { S as q } from './const-lbjNOSiN.js';
import { u as E } from './store-DLK7hSbM.js';
import { a, M as I } from './mcp-bmlNDBWs.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './ScrollShadow-Dm9kdU7B.js';
import './Menu-Dl6ttHxv.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-BSuyBMRZ.js';
import './navigation-BPKNAvqq.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './object-CksihGcT.js';
const L = p.memo(() => {
    const r = E((o) => o.useMcpCategories),
      { category: u = a.Discover, q: i } = R(),
      { data: s = [] } = r({ q: i }),
      d = x(),
      y = D(),
      n = (o) =>
        b.stringifyUrl(
          {
            query: {
              category: o === a.Discover ? null : o,
              q: i,
              sort: o === a.Discover ? I.Recommended : null,
            },
            url: '/community/mcp',
          },
          { skipNull: !0 },
        ),
      g = (o) => {
        d(n(o));
        const e = document?.querySelector(`#${q}`);
        e && e.scrollTo({ behavior: 'smooth', top: 0 });
      },
      c = p.useMemo(() => s.reduce((o, e) => o + e.count, 0), [s]);
    return t.jsx(v, {
      mode: 'inline',
      selectedKeys: [u],
      items: y.map((o) => {
        const e = s.find((f) => f.category === o.key);
        return {
          extra:
            o.key === 'all'
              ? c > 0 &&
                t.jsx(l, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: c,
                })
              : e &&
                t.jsx(l, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: e.count,
                }),
          ...o,
          icon: t.jsx(h, { icon: o.icon, size: 18 }),
          label: t.jsx(C, { to: n(o.key), children: o.label }),
        };
      }),
      onClick: (o) => g(o.key),
    });
  }),
  _ = k(L),
  z = j(({ css: r }) => ({
    mainContainer: r`
    position: relative;
  `,
  })),
  io = () =>
    t.jsxs(m, {
      horizontal: !0,
      className: z.mainContainer,
      gap: 24,
      width: '100%',
      children: [
        t.jsx(M, { children: t.jsx(_, {}) }),
        t.jsx(m, { flex: 1, gap: 16, children: t.jsx(S, {}) }),
      ],
    });
export { io as default };
