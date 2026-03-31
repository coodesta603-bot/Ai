import { at as p, n as l, au as R } from './index-C8UyLGsD.js';
import { u as s, m as S, r as f } from './store-8fdqmFXe.js';
import { e as m } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
const n = 'SWR_RESOURCES',
  x = async (e) => {
    const t = e || s.getState().queryParams;
    t && (await p([n, t]));
  },
  D = (e, t = !0) =>
    l(
      t && e ? [n, e] : null,
      async ([, r]) => await f.queryResources({ ...r, limit: r.limit || 50, offset: 0 }),
      {
        dedupingInterval: 2e3,
        onSuccess: (r) => {
          const { resourceList: o, resourceMap: i } = s.getState(),
            u = S(r.items, i, e),
            c = u.resourceList,
            a = u.resourceMap;
          (!m(c, o) || !m(a, i)) &&
            s.setState(
              {
                hasMore: r.hasMore,
                offset: r.items.length,
                queryParams: e ?? void 0,
                resourceList: c,
                resourceMap: a,
                total: r.total,
              },
              !1,
              'useFetchResources/success',
            );
        },
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
      },
    ),
  I = () =>
    s(
      (e) => ({
        hasMore: e.hasMore,
        queryParams: e.queryParams,
        resourceList: e.resourceList,
        resourceMap: e.resourceMap,
        total: e.total,
      }),
      R,
    );
export { x as revalidateResources, D as useFetchResources, I as useResourceStore };
