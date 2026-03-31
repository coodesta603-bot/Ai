import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as c } from './index-C8UyLGsD.js';
import { r as P } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as g } from './useQuery-C1-jdg1a.js';
import { u as x } from './store-DLK7hSbM.js';
import { D as v } from './index-C67aJrLL.js';
import { P as L } from './Pagination-Dymx-J7U.js';
import { P as j } from './index-C04mXrdn.js';
import { L as l } from './ListLoading-Dv99wO_G.js';
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
import './MaskShadow-Ds8TovT8.js';
import './index-Ch5xOhA1.js';
import './providerConfig-C5BYp5FR.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './index-BtctqgmI.js';
import './index-Bn9og1vQ.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './index-BsUJTjY1.js';
import './index-DTt8RGNw.js';
import './index-BfwjtmVb.js';
import './index-BBHpQOoQ.js';
import './index-Di19k3su.js';
import './index-DLsdvBKx.js';
const nr = P.memo(() => {
  const { q: t, page: i, sort: m, order: p } = g(),
    s = x((f) => f.useProviderList),
    { data: o, isLoading: e } = s({ order: p, page: i, pageSize: 21, q: t, sort: m });
  if (e || !o) return r.jsx(l, {});
  const { items: a, currentPage: n, pageSize: d, totalCount: u } = o;
  return r.jsxs(c, {
    gap: 32,
    width: '100%',
    children: [
      r.jsx(j, { data: a }),
      r.jsx(L, { currentPage: n, pageSize: d, tab: v.Providers, total: u }),
    ],
  });
});
export { nr as default };
