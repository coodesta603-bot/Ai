import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as l } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as x } from './useQuery-C1-jdg1a.js';
import { u as L } from './store-DLK7hSbM.js';
import { D as j } from './index-C67aJrLL.js';
import { P as M } from './Pagination-Dymx-J7U.js';
import { M as P } from './index-8owpmwUf.js';
import { L as D } from './ListLoading-Dv99wO_G.js';
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
import './Popover-Cg4CTqoX.js';
import './parseTrigger-BVMOpYJv.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-CATsCkTi.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './format-DpcrcXfF.js';
import './currency-iJxIWo9y.js';
import './time-Co3YlGiT.js';
import './index-BsUJTjY1.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './index-DbyirWUA.js';
import './providerConfig-C5BYp5FR.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-BtctqgmI.js';
import './index-Bn9og1vQ.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './index-DTt8RGNw.js';
import './index-BfwjtmVb.js';
import './index-Di19k3su.js';
import './PublishedTime-B_fy9H_1.js';
import './index-DLsdvBKx.js';
const Do = g.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = x(),
    e = L((f) => f.useModelList),
    { data: t, isLoading: a } = e({ category: m, order: s, page: i, pageSize: 21, q: r, sort: p });
  if (a || !t) return o.jsx(D, {});
  const { items: n, currentPage: d, pageSize: u, totalCount: c } = t;
  return o.jsxs(l, {
    gap: 32,
    width: '100%',
    children: [
      o.jsx(P, { data: n }),
      o.jsx(M, { currentPage: d, pageSize: u, tab: j.Models, total: c }),
    ],
  });
});
export { Do as default };
