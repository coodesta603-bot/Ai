import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as g } from './index-C8UyLGsD.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as M } from './useQuery-C1-jdg1a.js';
import { u as L } from './store-DLK7hSbM.js';
import { D as j } from './index-C67aJrLL.js';
import { P as l } from './Pagination-Dymx-J7U.js';
import { M as P } from './index-6E78qpe_.js';
import { M as S } from './mcp-bmlNDBWs.js';
import { L as h } from './ListLoading-Dv99wO_G.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './base-AbuBx_QK.js';
import './navigation-BPKNAvqq.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './object-CksihGcT.js';
import './const-lbjNOSiN.js';
import './Pagination-Cg0T9GpR.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-RoMbEimC.js';
import './Grid-CdN2I7qJ.js';
import './Empty-DHLc2EKW.js';
import './Block-DDntSWi2.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './Spotlight-D7beHiMz.js';
import './PublishedTime-B_fy9H_1.js';
import './Link-NDczSa-V.js';
import './index-DqcYNTWN.js';
import './index-BsHwsvJB.js';
import './index-DLsdvBKx.js';
const st = x.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = M(),
    a = L((d) => d.useFetchMcpList),
    { data: o, isLoading: e } = a({
      category: m,
      order: s,
      page: i,
      pageSize: 21,
      q: r,
      sort: p ?? S.Recommended,
    });
  if (e || !o) return t.jsx(h, {});
  const { items: c, currentPage: n, pageSize: u, totalCount: f } = o;
  return t.jsxs(g, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(P, { data: c }),
      t.jsx(l, { currentPage: n, pageSize: u, tab: j.Mcp, total: f }),
    ],
  });
});
export { st as default };
