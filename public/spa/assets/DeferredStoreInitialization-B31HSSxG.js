import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as s } from './store-CTAK9tZ0.js';
import { u as p } from './store-CMvu1t2Y.js';
import { e as n } from './sync-Dxmxhr-a.js';
import { u as c } from './store-Cj3bQrT7.js';
import './index-C8UyLGsD.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './ipc-wTHpVC92.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
const M = m.memo(({ isLogin: t }) => {
  const o = s((r) => r.useFetchAiProviderRuntimeState),
    e = c((r) => r.useFetchPersona),
    i = p((r) => n.isSyncActive(r));
  return (o(t, i), e(t), null);
});
export { M as default };
