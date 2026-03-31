import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as x } from './index-C8UyLGsD.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from './useQuery-C1-jdg1a.js';
import { u as L } from './store-DLK7hSbM.js';
import { D as j } from './index-C67aJrLL.js';
import { P } from './Pagination-Dymx-J7U.js';
import { A as S } from './index-D7-UoUwP.js';
import { A as D } from './assistants-Bnb1hBSy.js';
import { L as b } from './ListLoading-Dv99wO_G.js';
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
import './AssistantEmpty-YPRCCezD.js';
import './Empty-DHLc2EKW.js';
import './Block-DDntSWi2.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './PublishedTime-B_fy9H_1.js';
import './format-DpcrcXfF.js';
import './currency-iJxIWo9y.js';
import './index-DAR6aCpQ.js';
import './index-BsHwsvJB.js';
import './index-DLsdvBKx.js';
const et = A.memo(() => {
  const { q: r, page: i, category: s, sort: m, order: p, source: a } = l(),
    e = L((g) => g.useAssistantList),
    { data: o, isLoading: n } = e({
      category: s,
      includeAgentGroup: !0,
      order: p,
      page: i,
      pageSize: 21,
      q: r,
      sort: m ?? D.Recommended,
      source: a,
    });
  if (n || !o) return t.jsx(b, {});
  const { items: u, currentPage: c, pageSize: f, totalCount: d } = o;
  return t.jsxs(x, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(S, { data: u }),
      t.jsx(P, { currentPage: c, pageSize: f, tab: j.Assistants, total: d }),
    ],
  });
});
export { et as default };
