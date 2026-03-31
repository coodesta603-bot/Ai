const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/models-Cn8Sk3JX.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/index-ClRvEh9W.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
      'assets/clientModelRuntime-ByjgYOys.js',
      'assets/index-F5T1V14Z.js',
      'assets/tslib.es6-BWnLUwbd.js',
      'assets/_auth-sIxU1rKL.js',
      'assets/purify.es-r8glNMJW.js',
      'assets/selectors-BgvhR9tA.js',
      'assets/_url-C5lJURGN.js',
    ]),
) => i.map((i) => d[i]);
import {
  a_ as n,
  _ as b,
  at as h,
  n as y,
  i as F,
  z as L,
  v as k,
  an as U,
  cF as x,
  au as B,
  dv as N,
  cE as W,
} from './index-C8UyLGsD.js';
import { m as H } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import { aG as f } from './index-ClRvEh9W.js';
class q {
  createAiModel = async (e) => n.aiModel.createAiModel.mutate(e);
  getAiProviderModelList = async (e, i) => n.aiModel.getAiProviderModelList.query({ id: e, ...i });
  getAiModelById = async (e) => n.aiModel.getAiModelById.query({ id: e });
  toggleModelEnabled = async (e) => n.aiModel.toggleModelEnabled.mutate(e);
  updateAiModel = async (e, i, t) =>
    n.aiModel.updateAiModel.mutate({ id: e, providerId: i, value: t });
  batchUpdateAiModels = async (e, i) => n.aiModel.batchUpdateAiModels.mutate({ id: e, models: i });
  batchToggleAiModels = async (e, i, t) =>
    n.aiModel.batchToggleAiModels.mutate({ enabled: t, id: e, models: i });
  clearModelsByProvider = async (e) => n.aiModel.clearModelsByProvider.mutate({ providerId: e });
  clearRemoteModels = async (e) => n.aiModel.clearRemoteModels.mutate({ providerId: e });
  updateAiModelOrder = async (e, i) =>
    n.aiModel.updateAiModelOrder.mutate({ providerId: e, sortMap: i });
  deleteAiModel = async (e) => n.aiModel.removeAiModel.mutate(e);
}
const v = new q(),
  w = 'FETCH_AI_PROVIDER_MODELS',
  z = (r, e, i) => new G(r, e, i);
class G {
  #e;
  #i;
  constructor(e, i, t) {
    ((this.#i = e), (this.#e = i));
  }
  batchToggleAiModels = async (e, i) => {
    const { activeAiProvider: t } = this.#e();
    t && (await v.batchToggleAiModels(t, e, i), await this.#e().refreshAiModelList());
  };
  batchUpdateAiModels = async (e) => {
    const { activeAiProvider: i } = this.#e();
    i && (await v.batchUpdateAiModels(i, e), await this.#e().refreshAiModelList());
  };
  clearModelsByProvider = async (e) => {
    (await v.clearModelsByProvider(e), await this.#e().refreshAiModelList());
  };
  clearRemoteModels = async (e) => {
    (await v.clearRemoteModels(e), await this.#e().refreshAiModelList());
  };
  createNewAiModel = async (e) => {
    (await v.createAiModel(e), await this.#e().refreshAiModelList());
  };
  fetchRemoteModelList = async (e) => {
    const { modelsService: i } = await b(
        async () => {
          const { modelsService: a } = await import('./models-Cn8Sk3JX.js');
          return { modelsService: a };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
      ),
      t = await i.getModels(e);
    t &&
      (await this.#e().batchUpdateAiModels(
        t.map((a) => ({
          ...a,
          abilities: {
            files: a.files,
            functionCall: a.functionCall,
            imageOutput: a.imageOutput,
            reasoning: a.reasoning,
            search: a.search,
            video: a.video,
            vision: a.vision,
          },
          enabled: a.enabled || !1,
          source: 'remote',
          type: a.type || 'chat',
        })),
      ),
      await this.#e().refreshAiModelList());
  };
  internal_toggleAiModelLoading = (e, i) => {
    this.#i(
      (t) =>
        i
          ? { aiModelLoadingIds: [...t.aiModelLoadingIds, e] }
          : { aiModelLoadingIds: t.aiModelLoadingIds.filter((a) => a !== e) },
      !1,
      'toggleAiModelLoading',
    );
  };
  refreshAiModelList = async () => {
    (await h([w, this.#e().activeAiProvider]), this.#e().refreshAiProviderRuntimeState());
  };
  removeAiModel = async (e, i) => {
    (await v.deleteAiModel({ id: e, providerId: i }), await this.#e().refreshAiModelList());
  };
  toggleModelEnabled = async (e) => {
    const { activeAiProvider: i } = this.#e();
    i &&
      (this.#e().internal_toggleAiModelLoading(e.id, !0),
      await v.toggleModelEnabled({ ...e, providerId: i }),
      await this.#e().refreshAiModelList(),
      this.#e().internal_toggleAiModelLoading(e.id, !1));
  };
  updateAiModelsConfig = async (e, i, t) => {
    (await v.updateAiModel(e, i, t), await this.#e().refreshAiModelList());
  };
  updateAiModelsSort = async (e, i) => {
    (await v.updateAiModelOrder(e, i), await this.#e().refreshAiModelList());
  };
  useFetchAiProviderModels = (e) =>
    y([w, e], ([, i]) => v.getAiProviderModelList(i), {
      onSuccess: (i) => {
        (this.#e().isAiModelListInit && F(i, this.#e().aiProviderModelList)) ||
          this.#i(
            { aiProviderModelList: i, isAiModelListInit: !0 },
            !1,
            `useFetchAiProviderModels/${e}`,
          );
      },
    });
}
const K = {
    aiModelLoadingIds: [],
    aiProviderModelList: [],
    builtinAiModelList: [],
    modelSearchKeyword: '',
  },
  j = (1024 * 1024) / 1e6,
  Y = (r) => {
    if (!r) return {};
    if (typeof r.approximatePricePerImage == 'number')
      return { approximatePrice: r.approximatePricePerImage };
    const e = r.units.find((i) => i.name === 'imageGeneration');
    if (!e) return {};
    if (e.strategy === 'fixed') {
      if (e.unit === 'image') return { price: e.rate };
      if (e.unit === 'megapixel') return { price: e.rate * j };
    }
    return {};
  },
  $ = (r) =>
    r
      ? typeof r.approximatePricePerVideo == 'number'
        ? { approximatePrice: r.approximatePricePerVideo }
        : {}
      : {};
class J {
  createAiProvider = async (e) => n.aiProvider.createAiProvider.mutate(e);
  getAiProviderList = async () => n.aiProvider.getAiProviderList.query();
  getAiProviderById = async (e) => n.aiProvider.getAiProviderById.query({ id: e });
  toggleProviderEnabled = async (e, i) =>
    n.aiProvider.toggleProviderEnabled.mutate({ enabled: i, id: e });
  updateAiProvider = async (e, i) => n.aiProvider.updateAiProvider.mutate({ id: e, value: i });
  updateAiProviderConfig = async (e, i) =>
    n.aiProvider.updateAiProviderConfig.mutate({ id: e, value: i });
  updateAiProviderOrder = async (e) => n.aiProvider.updateAiProviderOrder.mutate({ sortMap: e });
  deleteAiProvider = async (e) => n.aiProvider.removeAiProvider.mutate({ id: e });
  getAiProviderRuntimeState = async (e) =>
    n.aiProvider.getAiProviderRuntimeState.query({ isLogin: e });
}
const A = new J(),
  Q = (r) => H(r, 'id'),
  I = (r, e) => async (i, t) => {
    const a = i.filter((s) => s.providerId === t && s.type === r);
    if (!a.length) return [];
    const c = await Promise.all(a.map((s) => e(s)));
    return Q(c);
  },
  X = async (r) => {
    const [e, i] = await Promise.all([
      f(r.id, 'description', r.providerId),
      f(r.id, 'pricing', r.providerId),
    ]);
    return {
      abilities: r.abilities || {},
      contextWindowTokens: r.contextWindowTokens,
      displayName: r.displayName ?? '',
      id: r.id,
      releasedAt: r.releasedAt,
      ...(e && { description: e }),
      ...(i && { pricing: i }),
    };
  },
  Z = async (r) => {
    const e = r.parameters ? Promise.resolve(r.parameters) : f(r.id, 'parameters', r.providerId),
      i = r,
      t = i.pricing ? Promise.resolve(i.pricing) : f(r.id, 'pricing', r.providerId),
      a = f(r.id, 'description', r.providerId),
      [c, s, d] = await Promise.all([e, t, a]),
      P = r.parameters ?? c,
      l = s,
      g = d,
      { price: p, approximatePrice: M } = Y(l);
    return {
      abilities: r.abilities || {},
      contextWindowTokens: r.contextWindowTokens,
      displayName: r.displayName ?? '',
      id: r.id,
      releasedAt: r.releasedAt,
      ...(P && { parameters: P }),
      ...(g && { description: g }),
      ...(l && { pricing: l }),
      ...(typeof M == 'number' && { approximatePricePerImage: M }),
      ...(typeof p == 'number' && { pricePerImage: p }),
    };
  },
  ee = async (r) => {
    const e = r.parameters ? Promise.resolve(r.parameters) : f(r.id, 'parameters', r.providerId),
      i = r,
      t = i.pricing ? Promise.resolve(i.pricing) : f(r.id, 'pricing', r.providerId),
      a = f(r.id, 'description', r.providerId),
      [c, s, d] = await Promise.all([e, t, a]),
      P = r.parameters ?? c,
      l = s,
      g = d,
      { approximatePrice: p } = $(l);
    return {
      abilities: r.abilities || {},
      contextWindowTokens: r.contextWindowTokens,
      displayName: r.displayName ?? '',
      id: r.id,
      releasedAt: r.releasedAt,
      ...(P && { parameters: P }),
      ...(g && { description: g }),
      ...(l && { pricing: l }),
      ...(typeof p == 'number' && { approximatePricePerVideo: p }),
    };
  },
  ie = I('chat', async (r) => X(r)),
  re = I('image', Z),
  te = I('video', ee),
  _ = async (r, e, i) =>
    Promise.all(r.map(async (t) => ({ ...t, children: await i(e, t.id), name: t.name || t.id }))),
  E = async (r, e) => _(r, e, re),
  C = async (r, e) => _(r, e, ie),
  R = async (r, e) => _(r, e, te),
  ae = (r, e, i) => new oe(r, e, i);
class oe {
  #e;
  #i;
  constructor(e, i, t) {
    ((this.#i = e), (this.#e = i));
  }
  createNewAiProvider = async (e) => {
    (await A.createAiProvider({ ...e, source: L.Custom }), await this.#e().refreshAiProviderList());
  };
  deleteAiProvider = async (e) => {
    (await A.deleteAiProvider(e), await this.#e().refreshAiProviderList());
  };
  internal_toggleAiProviderConfigUpdating = (e, i) => {
    this.#i(
      (t) =>
        i
          ? { aiProviderConfigUpdatingIds: [...t.aiProviderConfigUpdatingIds, e] }
          : { aiProviderConfigUpdatingIds: t.aiProviderConfigUpdatingIds.filter((a) => a !== e) },
      !1,
      'toggleAiProviderLoading',
    );
  };
  internal_toggleAiProviderLoading = (e, i) => {
    this.#i(
      (t) =>
        i
          ? { aiProviderLoadingIds: [...t.aiProviderLoadingIds, e] }
          : { aiProviderLoadingIds: t.aiProviderLoadingIds.filter((a) => a !== e) },
      !1,
      'toggleAiProviderLoading',
    );
  };
  refreshAiProviderDetail = async () => {
    (await h(['FETCH_AI_PROVIDER_ITEM', this.#e().activeAiProvider]),
      await this.#e().refreshAiProviderRuntimeState());
  };
  refreshAiProviderList = async () => {
    (await h('FETCH_AI_PROVIDER'), await this.#e().refreshAiProviderRuntimeState());
  };
  refreshAiProviderRuntimeState = async () => {
    await Promise.all([
      h(['FETCH_AI_PROVIDER_RUNTIME_STATE', !0]),
      h(['FETCH_AI_PROVIDER_RUNTIME_STATE', !1]),
    ]);
  };
  removeAiProvider = async (e) => {
    (await A.deleteAiProvider(e), await this.#e().refreshAiProviderList());
  };
  toggleProviderEnabled = async (e, i) => {
    (this.#e().internal_toggleAiProviderLoading(e, !0),
      await A.toggleProviderEnabled(e, i),
      this.#i(
        (t) => ({
          aiProviderList: t.aiProviderList.map((a) => (a.id === e ? { ...a, enabled: i } : a)),
        }),
        !1,
        'toggleProviderEnabled/syncEnabled',
      ),
      await this.#e().refreshAiProviderList(),
      this.#e().internal_toggleAiProviderLoading(e, !1));
  };
  updateAiProvider = async (e, i) => {
    (this.#e().internal_toggleAiProviderLoading(e, !0),
      await A.updateAiProvider(e, i),
      await this.#e().refreshAiProviderList(),
      await this.#e().refreshAiProviderDetail(),
      this.#e().internal_toggleAiProviderLoading(e, !1));
  };
  updateAiProviderConfig = async (e, i) => {
    (this.#e().internal_toggleAiProviderConfigUpdating(e, !0),
      await A.updateAiProviderConfig(e, i),
      this.#i(
        (t) => {
          const a = t.aiProviderRuntimeConfig[e],
            c = t.aiProviderDetailMap[e],
            s = {},
            d = {};
          if (typeof i.fetchOnClient < 'u') {
            const P = i.fetchOnClient === null ? void 0 : i.fetchOnClient;
            ((s.fetchOnClient = P), (d.fetchOnClient = P));
          }
          return (
            i.config?.enableResponseApi !== void 0 &&
              a?.config &&
              (s.config = { ...a.config, enableResponseApi: i.config.enableResponseApi }),
            {
              aiProviderDetailMap:
                c && Object.keys(d).length > 0
                  ? { ...t.aiProviderDetailMap, [e]: { ...c, ...d } }
                  : t.aiProviderDetailMap,
              aiProviderRuntimeConfig:
                a && Object.keys(s).length > 0
                  ? { ...t.aiProviderRuntimeConfig, [e]: { ...a, ...s } }
                  : t.aiProviderRuntimeConfig,
            }
          );
        },
        !1,
        'updateAiProviderConfig/syncChanges',
      ),
      await this.#e().refreshAiProviderDetail(),
      this.#e().internal_toggleAiProviderConfigUpdating(e, !1));
  };
  updateAiProviderSort = async (e) => {
    (await A.updateAiProviderOrder(e), await this.#e().refreshAiProviderList());
  };
  useFetchAiProviderItem = (e) =>
    y(['FETCH_AI_PROVIDER_ITEM', e], () => A.getAiProviderById(e), {
      onSuccess: (i) => {
        i &&
          this.#i(
            (t) => ({
              activeAiProvider: e,
              aiProviderDetailMap: { ...t.aiProviderDetailMap, [e]: i },
            }),
            !1,
            'useFetchAiProviderItem',
          );
      },
    });
  useFetchAiProviderList = (e) =>
    y(e?.enabled === !1 ? null : 'FETCH_AI_PROVIDER', () => A.getAiProviderList(), {
      fallbackData: [],
      onSuccess: (i) => {
        if (!this.#e().initAiProviderList) {
          this.#i({ aiProviderList: i, initAiProviderList: !0 }, !1, 'useFetchAiProviderList/init');
          return;
        }
        this.#i({ aiProviderList: i }, !1, 'useFetchAiProviderList/refresh');
      },
    });
  useFetchAiProviderRuntimeState = (e, i) => {
    const t = e,
      c = k(U.isLoaded) && t !== null && t !== void 0;
    return y(
      c ? ['FETCH_AI_PROVIDER_RUNTIME_STATE', t] : null,
      async ([, s]) => {
        const [{ LOBE_DEFAULT_MODEL_LIST: d }, { DEFAULT_MODEL_PROVIDER_LIST: P }] =
          await Promise.all([
            b(() => import('./providerConfig-qS2Xx-oI.js').then((o) => o.a4), []),
            b(() => import('./providerConfig-qS2Xx-oI.js').then((o) => o.Y), []),
          ]);
        if (s) {
          const o = await A.getAiProviderRuntimeState(),
            [u, O, V] = await Promise.all([
              C(o.enabledChatAiProviders, o.enabledAiModels),
              E(o.enabledImageAiProviders, o.enabledAiModels),
              R(o.enabledVideoAiProviders, o.enabledAiModels),
            ]);
          return {
            ...o,
            builtinAiModelList: d,
            enabledChatModelList: u,
            enabledImageModelList: O,
            enabledVideoModelList: V,
          };
        }
        const l = P.filter((o) => o.enabled).map((o) => ({
            id: o.id,
            name: o.name,
            source: L.Builtin,
          })),
          g = l.filter((o) => d.some((u) => u.providerId === o.id && u.type === 'chat')),
          p = l
            .filter((o) => d.some((u) => u.providerId === o.id && u.type === 'image'))
            .map((o) => ({ id: o.id, name: o.name, source: L.Builtin })),
          M = l
            .filter((o) => d.some((u) => u.providerId === o.id && u.type === 'video'))
            .map((o) => ({ id: o.id, name: o.name, source: L.Builtin })),
          m = d.filter((o) => o.enabled),
          [S, T, D] = await Promise.all([C(g, m), E(p, m), R(M, m)]);
        return {
          builtinAiModelList: d,
          enabledAiModels: m,
          enabledAiProviders: l,
          enabledChatAiProviders: g,
          enabledChatModelList: S,
          enabledImageAiProviders: p,
          enabledImageModelList: T,
          enabledVideoAiProviders: M,
          enabledVideoModelList: D,
          runtimeConfig: {},
        };
      },
      {
        onSuccess: (s) => {
          s &&
            this.#i(
              {
                aiProviderRuntimeConfig: s.runtimeConfig,
                builtinAiModelList: s.builtinAiModelList,
                enabledAiModels: s.enabledAiModels,
                enabledAiProviders: s.enabledAiProviders,
                enabledChatModelList: s.enabledChatModelList || [],
                enabledImageModelList: s.enabledImageModelList || [],
                enabledVideoModelList: s.enabledVideoModelList || [],
                isInitAiProviderRuntimeState: !0,
              },
              !1,
              'useFetchAiProviderRuntimeState',
            );
        },
      },
    );
  };
}
const se = {
    activeProviderModelList: [],
    aiProviderConfigUpdatingIds: [],
    aiProviderDetailMap: {},
    aiProviderList: [],
    aiProviderLoadingIds: [],
    aiProviderRuntimeConfig: {},
    initAiProviderList: !1,
    isInitAiProviderRuntimeState: !1,
    providerSearchKeyword: '',
  },
  ne = { ...se, ...K },
  de = (...r) => ({ ...ne, ...W([z(...r), ae(...r)]) }),
  le = N('aiInfra'),
  ce = x()(le(de), B),
  ge = () => ce.getState();
export { A as a, v as b, ge as g, ce as u };
