import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as S } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as d } from './useQuery-C1-jdg1a.js';
import { u as x } from './store-DLK7hSbM.js';
import { D as L } from './index-C67aJrLL.js';
import { P as j } from './Pagination-Dymx-J7U.js';
import { S as k } from './index-Byc34Arm.js';
import { S as P } from './skills-Dr1Utsva.js';
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
import './SkillsIcon-DjXX_Ijx.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './Spotlight-D7beHiMz.js';
import './PublishedTime-B_fy9H_1.js';
import './index-DqcYNTWN.js';
import './index-BsHwsvJB.js';
import './index-DLsdvBKx.js';
const st = g.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = d(),
    a = x((f) => f.useFetchSkillList),
    { data: o, isLoading: e } = a({
      category: m,
      order: s,
      page: i,
      pageSize: 21,
      q: r,
      sort: p ?? P.InstallCount,
    });
  if (e || !o) return t.jsx(h, {});
  const { items: l, currentPage: n, pageSize: u, totalCount: c } = o;
  return t.jsxs(S, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(k, { data: l }),
      t.jsx(j, { currentPage: n, pageSize: u, tab: L.Skills, total: c }),
    ],
  });
});
export { st as default };
