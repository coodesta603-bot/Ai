import { W as o } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
const r = (e) => e.dataSyncConfig.active,
  t = (e) => e.dataSyncConfig.storageMode,
  n = (e) =>
    e.dataSyncConfig.storageMode === 'cloud' ? o : e.dataSyncConfig.remoteServerUrl || '',
  a = (e) => e.dataSyncConfig.remoteServerUrl || '',
  s = { isSyncActive: r, rawRemoteServerUrl: a, remoteServerUrl: n, storageMode: t };
export { s as e };
