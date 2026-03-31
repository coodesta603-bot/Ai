import { i as l } from './providerConfig-qS2Xx-oI.js';
import { z as s } from './index-C8UyLGsD.js';
const d = (e) => e.aiProviderList.filter((i) => i.enabled).sort((i, t) => i.sort - t.sort),
  v = (e) => e.aiProviderList.filter((i) => !i.enabled && i.source !== s.Custom),
  u = (e) => e.aiProviderList.filter((i) => !i.enabled && i.source === s.Custom),
  f = (e) => e.enabledImageModelList || [],
  P = (e) => e.enabledVideoModelList || [],
  p = (e) => (i) => d(i).some((t) => t.id === e),
  g = (e) => (i) => i.aiProviderLoadingIds.includes(e),
  y = (e) => (i) => i.aiProviderDetailMap[e],
  a = (e) => (e.activeAiProvider ? e.aiProviderDetailMap[e.activeAiProvider] : void 0),
  m = (e) => (i) => !i.aiProviderDetailMap[e],
  C = new Set(['ollama', 'lmstudio']),
  c = (e) => a(e)?.keyVaults,
  b = (e) => {
    const i = c(e);
    return !!i?.baseURL || !!i?.endpoint;
  },
  A = (e) => {
    const i = c(e);
    return !!i?.apiKey || !!i?.accessKeyId || !!i?.secretAccessKey;
  },
  o = (e) => (i) => {
    if (e) return i.aiProviderRuntimeConfig?.[e];
  },
  L = (e) => (i) => i.aiProviderConfigUpdatingIds.includes(e),
  h = (e) => (i) => {
    const t = o(e)(i);
    if (l(e)) return !1;
    if (C.has(e) && typeof t?.fetchOnClient < 'u') return t?.fetchOnClient;
    const r = !!t?.keyVaults.baseURL,
      n = !!t?.keyVaults.apiKey;
    return !r && !n ? !1 : r && !n ? !0 : typeof t?.fetchOnClient < 'u' ? t?.fetchOnClient : !1;
  },
  M = (e) => (i) => {
    if (e) return i.aiProviderRuntimeConfig?.[e]?.keyVaults;
  },
  R = (e) => (i) => !!o(e)(i)?.settings.searchMode,
  E = (e) => (i) => {
    const t = o(e)(i);
    return !!t?.settings.searchMode && t?.settings.searchMode !== 'internal';
  },
  I = (e) => (i) => {
    const r = o(e)(i)?.config?.enableResponseApi;
    return typeof r == 'boolean' ? r : e === 'openai';
  },
  K = (e) => !!e.isInitAiProviderRuntimeState,
  B = {
    activeProviderConfig: a,
    disabledAiProviderList: v,
    disabledCustomAiProviderList: u,
    enabledAiProviderList: d,
    enabledImageModelList: f,
    enabledVideoModelList: P,
    isActiveProviderApiKeyNotEmpty: A,
    isActiveProviderEndpointNotEmpty: b,
    isAiProviderConfigLoading: m,
    isInitAiProviderRuntimeState: K,
    isProviderConfigUpdating: L,
    isProviderEnableResponseApi: I,
    isProviderEnabled: p,
    isProviderFetchOnClient: h,
    isProviderHasBuiltinSearch: R,
    isProviderHasBuiltinSearchConfig: E,
    isProviderLoading: g,
    providerConfigById: o,
    providerDetailById: y,
    providerKeyVaults: M,
  };
export { B as a };
