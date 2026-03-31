import { u } from './store-8fdqmFXe.js';
import { f as U } from './store-8fdqmFXe.js';
import { f as j } from './selectors-DclnpyYm.js';
import './index-C8UyLGsD.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
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
const i = (t) => (n) => {
    if (!t) return;
    const e = n.localDocumentMap.get(t),
      o = n.documents.find((r) => r.id === t);
    return e && o ? (new Date(e.updatedAt) >= new Date(o.updatedAt) ? e : o) : e || o;
  },
  m = (t) => {
    const n = new Set(),
      e = t.documents.map((o) => {
        n.add(o.id);
        const r = t.localDocumentMap.get(o.id);
        return r && new Date(r.updatedAt) >= new Date(o.updatedAt) ? r : o;
      });
    for (const [o, r] of t.localDocumentMap.entries()) n.has(o) || e.unshift(r);
    return e;
  },
  s = (t) => t.hasMoreDocuments,
  a = (t) => t.isLoadingMoreDocuments,
  c = (t) => t.documentsTotal,
  C = {
    documentsTotal: c,
    getDocumentById: i,
    getOptimisticDocuments: m,
    hasMoreDocuments: s,
    isLoadingMoreDocuments: a,
  };
export {
  C as documentSelectors,
  j as fileChatSelectors,
  U as fileManagerSelectors,
  u as useFileStore,
};
