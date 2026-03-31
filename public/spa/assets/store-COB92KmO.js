import {
  a_ as H,
  dw as k,
  du as T,
  n as C,
  i as A,
  f4 as q,
  v as y,
  f9 as z,
  b3 as j,
  at as U,
  dt as O,
  fr as K,
  cI as Y,
  an as J,
  u as Q,
  cF as X,
  cG as Z,
  au as ee,
  dv as ne,
} from './index-C8UyLGsD.js';
import { k as F, M as te, l as D, E as ae } from './providerConfig-qS2Xx-oI.js';
import { g as m, c as ie, a as V, b } from './generationBatch-ZU4HN8uR.js';
import { r as M } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as h } from './asyncTask-Deq5sCIJ.js';
import { e as I } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { g as re } from './store-CTAK9tZ0.js';
import { a as oe } from './selectors-BgvhR9tA.js';
import { a4 as ce, a5 as se } from './index-Br6hqyew.js';
import { g as le } from './discover-H7COHXvN.js';
const pe = { isCreating: !1, isCreatingWithNewTopic: !1 },
  de = { generationBatchesMap: {} },
  ue = te.LobeHub,
  he = 'seedance-1-5-pro-251215',
  Te = D(F),
  fe = { model: he, provider: ue, parameters: Te, parametersSchema: F, isInit: !1 },
  Ge = {
    activeGenerationTopicId:
      typeof window < 'u' ? new URLSearchParams(window.location.search).get('topic') : null,
    generationTopics: [],
    loadingGenerationTopicIds: [],
  },
  me = { ...fe, ...Ge, ...de, ...pe },
  E = k('lobe-video:service');
class ge {
  async createVideo(n) {
    E('Creating video with payload: %O', n);
    try {
      const e = await H.video.createVideo.mutate(n);
      return (
        E('Video creation service call completed: %O', {
          batchId: e.data?.batch?.id,
          generationCount: e.data?.generations?.length,
          success: e.success,
        }),
        e
      );
    } catch (e) {
      throw (E('Video creation service call failed: %O', { error: e.message, payload: n }), e);
    }
  }
}
const L = new ge(),
  ve = (a) => a.activeGenerationTopicId,
  we = (a) => a.generationTopics,
  Be = (a) => (n) => n.generationTopics.find((e) => e.id === a),
  Se = (a) => (n) => n.loadingGenerationTopicIds.includes(a),
  f = {
    activeGenerationTopicId: ve,
    generationTopics: we,
    getGenerationTopicById: Be,
    isLoadingGenerationTopic: Se,
  },
  $ = (a) => (n) => n.generationBatchesMap[a] || [],
  P = (a) => {
    const n = f.activeGenerationTopicId(a);
    return n ? $(n)(a) : [];
  },
  _e = (a) => (n) => P(n).find((t) => t.id === a),
  Ie = (a) => {
    const n = f.activeGenerationTopicId(a);
    return n ? Array.isArray(a.generationBatchesMap[n]) : !1;
  },
  Ee = {
    currentGenerationBatches: P,
    getGenerationBatchByBatchId: _e,
    getGenerationBatchesByTopicId: $,
    isCurrentGenerationTopicLoaded: Ie,
  },
  Ce = (a) => a.model,
  ye = (a) => a.provider,
  Ae = (a) => a.parameters,
  W = (a) => a.parametersSchema,
  Ve = (a) => (n) => {
    const e = W(n);
    return a in e;
  },
  w = { isSupportedParam: Ve, model: Ce, parameters: Ae, parametersSchema: W, provider: ye },
  be = (a = [], n) => {
    switch (n.type) {
      case 'addTopic':
        return T(a, (e) => {
          const t = new Date();
          e.unshift({
            coverUrl: n.value.coverUrl || null,
            createdAt: n.value.createdAt || t,
            title: n.value.title || null,
            updatedAt: n.value.updatedAt || t,
            ...n.value,
          });
        });
      case 'updateTopic':
        return T(a, (e) => {
          const t = e.findIndex((i) => i.id === n.id);
          t !== -1 && (e[t] = { ...e[t], ...n.value, updatedAt: new Date() });
        });
      case 'deleteTopic':
        return a.filter((e) => e.id !== n.id);
      default:
        return a;
    }
  },
  R = 'fetchVideoGenerationTopics',
  g = O('videoGenerationTopic'),
  Me = (a, n) => ({
    createGenerationTopic: async (e) => {
      if (!e || e.length === 0)
        throw new Error('Prompts cannot be empty when creating a generation topic');
      const { internal_createGenerationTopic: t, summaryGenerationTopicTitle: i } = n(),
        r = await t();
      return (i(r, e), r);
    },
    internal_createGenerationTopic: async () => {
      const e = Date.now().toString();
      (n().internal_dispatchGenerationTopic(
        { type: 'addTopic', value: { id: e, title: '' } },
        'internal_createGenerationTopic',
      ),
        n().internal_updateGenerationTopicLoading(e, !0));
      const t = await m.createTopic('video');
      return (
        n().internal_updateGenerationTopicLoading(e, !1),
        n().internal_updateGenerationTopicLoading(t, !0),
        await n().refreshGenerationTopics(),
        n().internal_updateGenerationTopicLoading(t, !1),
        t
      );
    },
    internal_dispatchGenerationTopic: (e, t) => {
      const i = be(n().generationTopics, e);
      A(i, n().generationTopics) ||
        a({ generationTopics: i }, !1, t ?? g(`dispatchGenerationTopic/${e.type}`));
    },
    internal_removeGenerationTopic: async (e) => {
      n().internal_updateGenerationTopicLoading(e, !0);
      try {
        (await m.deleteTopic(e), await n().refreshGenerationTopics());
      } finally {
        n().internal_updateGenerationTopicLoading(e, !1);
      }
    },
    internal_updateGenerationTopic: async (e, t) => {
      (n().internal_dispatchGenerationTopic({ id: e, type: 'updateTopic', value: t }),
        n().internal_updateGenerationTopicLoading(e, !0),
        await m.updateTopic(e, t),
        await n().refreshGenerationTopics(),
        n().internal_updateGenerationTopicLoading(e, !1));
    },
    internal_updateGenerationTopicCover: async (e, t) => {
      const {
        internal_dispatchGenerationTopic: i,
        internal_updateGenerationTopicLoading: r,
        refreshGenerationTopics: s,
      } = n();
      (i(
        { id: e, type: 'updateTopic', value: { coverUrl: t } },
        'internal_updateGenerationTopicCover/optimistic',
      ),
        r(e, !0));
      try {
        (await m.updateTopicCover(e, t), await s());
      } finally {
        r(e, !1);
      }
    },
    internal_updateGenerationTopicLoading: (e, t) => {
      a(
        (i) =>
          t
            ? { loadingGenerationTopicIds: [...i.loadingGenerationTopicIds, e] }
            : { loadingGenerationTopicIds: i.loadingGenerationTopicIds.filter((r) => r !== e) },
        !1,
        g('updateGenerationTopicLoading'),
      );
    },
    internal_updateGenerationTopicTitleInSummary: (e, t) => {
      n().internal_dispatchGenerationTopic(
        { id: e, type: 'updateTopic', value: { title: t } },
        'updateGenerationTopicTitleInSummary',
      );
    },
    openNewGenerationTopic: () => {
      a({ activeGenerationTopicId: null }, !1, g('openNewGenerationTopic'));
    },
    refreshGenerationTopics: async () => {
      await U([R]);
    },
    removeGenerationTopic: async (e) => {
      const {
          internal_removeGenerationTopic: t,
          generationTopics: i,
          activeGenerationTopicId: r,
          switchGenerationTopic: s,
          openNewGenerationTopic: c,
        } = n(),
        o = r === e;
      let p = -1;
      if ((o && (p = i.findIndex((l) => l.id === e)), await t(e), o)) {
        const l = n().generationTopics;
        if (l.length > 0) {
          const d = Math.min(p, l.length - 1),
            u = l[d];
          u ? s(u.id) : c();
        } else c();
      }
    },
    summaryGenerationTopicTitle: async (e, t) => {
      if (!f.getGenerationTopicById(e)(n())) throw new Error(`Topic ${e} not found`);
      const {
        internal_updateGenerationTopicTitleInSummary: r,
        internal_updateGenerationTopicLoading: s,
      } = n();
      (s(e, !0), r(e, q));
      let c = '';
      const o = () =>
          t[0]
            .replaceAll(/[^\s\w\u4E00-\u9FFF]/g, '')
            .trim()
            .split(/\s+/)
            .slice(0, 3)
            .join(' ')
            .slice(0, 20),
        p = ce.generationTopic(y.getState());
      return (
        await se.fetchPresetTaskResult({
          onError: async () => {
            const l = o();
            (r(e, l), await n().internal_updateGenerationTopic(e, { title: l }));
          },
          onFinish: async (l) => {
            await n().internal_updateGenerationTopic(e, { title: l });
          },
          onLoadingChange: (l) => {
            s(e, l);
          },
          onMessageHandle: (l) => {
            l.type === 'text' && ((c += l.text), r(e, c));
          },
          params: z(p, ie(t, 'video', j.responseLanguage(y.getState()) || le.getCurrentLanguage())),
        }),
        c
      );
    },
    switchGenerationTopic: (e) => {
      n().activeGenerationTopicId !== e &&
        a({ activeGenerationTopicId: e }, !1, g('switchGenerationTopic'));
    },
    updateGenerationTopicCover: async (e, t) => {
      const { internal_updateGenerationTopicCover: i } = n();
      await i(e, t);
    },
    useFetchGenerationTopics: (e) =>
      C(e ? [R] : null, () => m.getAllGenerationTopics('video'), {
        onSuccess: (t) => {
          A(t, n().generationTopics) ||
            a({ generationTopics: t }, !1, g('useFetchGenerationTopics'));
        },
        suspense: !0,
      }),
  }),
  Le = (a, n) => ({
    async createVideo() {
      a({ isCreating: !0 }, !1, 'createVideo/startCreateVideo');
      const e = n(),
        t = w.parameters(e),
        i = w.provider(e),
        r = w.model(e),
        s = f.activeGenerationTopicId(e),
        { createGenerationTopic: c, switchGenerationTopic: o, setTopicBatchLoaded: p } = e;
      if (!t) throw new TypeError('parameters is not initialized');
      if (!t.prompt) throw new TypeError('prompt is empty');
      const d = w.parametersSchema(e)?.endImageUrl;
      if (d && 'requiresImageUrl' in d && d.requiresImageUrl && t.endImageUrl && !t.imageUrl) {
        (K.warning({
          content: Y('generation.validation.endFrameRequiresStartFrame', { ns: 'video' }),
          duration: 3,
        }),
          a({ isCreating: !1 }, !1, 'createVideo/endCreateVideo'));
        return;
      }
      let u = s;
      const G = s;
      let v = !1;
      if (!G) {
        v = !0;
        const S = [t.prompt],
          _ = await c(S);
        ((u = _), p(_), o(_));
      }
      try {
        (v && a({ isCreatingWithNewTopic: !0 }, !1, 'createVideo/startCreateVideoWithNewTopic'),
          await L.createVideo({ generationTopicId: u, model: r, params: t, provider: i }),
          v || (await n().refreshGenerationBatches()),
          a(
            (S) => ({ parameters: { ...S.parameters, prompt: '' } }),
            !1,
            'createVideo/clearPrompt',
          ));
      } finally {
        v
          ? a(
              { isCreating: !1, isCreatingWithNewTopic: !1 },
              !1,
              'createVideo/endCreateVideoWithNewTopic',
            )
          : a({ isCreating: !1 }, !1, 'createVideo/endCreateVideo');
      }
    },
    async recreateVideo(e) {
      a({ isCreating: !0 }, !1, 'recreateVideo/start');
      const t = n(),
        i = f.activeGenerationTopicId(t);
      if (!i) throw new Error('No active generation topic');
      const { removeGenerationBatch: r } = t,
        s = Ee.getGenerationBatchByBatchId(e)(t);
      try {
        (await r(e, i),
          await L.createVideo({
            generationTopicId: i,
            model: s.model,
            params: s.config,
            provider: s.provider,
          }),
          await t.refreshGenerationBatches());
      } finally {
        a({ isCreating: !1 }, !1, 'recreateVideo/end');
      }
    },
  }),
  Re = (a = [], n) => {
    switch (n.type) {
      case 'updateGenerationInBatch':
        return T(a, (e) => {
          const t = e.findIndex((r) => r.id === n.batchId);
          if (t === -1) return;
          const i = e[t].generations.findIndex((r) => r.id === n.generationId);
          i !== -1 && (e[t].generations[i] = { ...e[t].generations[i], ...n.value });
        });
      case 'updateBatch':
        return T(a, (e) => {
          const t = e.findIndex((i) => i.id === n.id);
          t !== -1 && (e[t] = { ...e[t], ...n.value });
        });
      case 'deleteBatch':
        return a.filter((e) => e.id !== n.id);
      case 'deleteGenerationInBatch':
        return T(a, (e) => {
          const t = e.findIndex((i) => i.id === n.batchId);
          t !== -1 && (e[t].generations = e[t].generations.filter((i) => i.id !== n.generationId));
        });
      case 'addBatch':
        return T(a, (e) => {
          e.unshift(n.value);
        });
      default:
        return a;
    }
  },
  B = O('generationBatch'),
  N = 'SWR_USE_FETCH_VIDEO_GENERATION_BATCHES',
  Ne = 'SWR_USE_CHECK_VIDEO_GENERATION_STATUS',
  xe = (a, n) => ({
    internal_deleteGeneration: async (e) => {
      const {
        activeGenerationTopicId: t,
        refreshGenerationBatches: i,
        internal_dispatchGenerationBatch: r,
      } = n();
      if (!t) return;
      const c = (n().generationBatchesMap[t] || []).find((o) =>
        o.generations.some((p) => p.id === e),
      );
      c &&
        (r(
          t,
          { batchId: c.id, generationId: e, type: 'deleteGenerationInBatch' },
          'internal_deleteGeneration',
        ),
        await b.deleteGeneration(e),
        await i());
    },
    internal_deleteGenerationBatch: async (e, t) => {
      const { internal_dispatchGenerationBatch: i, refreshGenerationBatches: r } = n();
      (i(t, { id: e, type: 'deleteBatch' }, 'internal_deleteGenerationBatch'),
        await V.deleteGenerationBatch(e),
        await r());
    },
    internal_dispatchGenerationBatch: (e, t, i) => {
      const r = n().generationBatchesMap[e] || [],
        s = Re(r, t),
        c = { ...n().generationBatchesMap, [e]: s };
      I(c, n().generationBatchesMap) ||
        a({ generationBatchesMap: c }, !1, i ?? B(`dispatchGenerationBatch/${t.type}`));
    },
    refreshGenerationBatches: async () => {
      const { activeGenerationTopicId: e } = n();
      e && (await U([N, e]));
    },
    removeGeneration: async (e) => {
      const {
        internal_deleteGeneration: t,
        activeGenerationTopicId: i,
        internal_deleteGenerationBatch: r,
      } = n();
      if ((await t(e), i)) {
        const c = (n().generationBatchesMap[i] || []).filter((o) => o.generations.length === 0);
        for (const o of c) await r(o.id, i);
      }
    },
    removeGenerationBatch: async (e, t) => {
      const { internal_deleteGenerationBatch: i } = n();
      await i(e, t);
    },
    setTopicBatchLoaded: (e) => {
      const t = { ...n().generationBatchesMap, [e]: [] };
      I(t, n().generationBatchesMap) ||
        a({ generationBatchesMap: t }, !1, B('setTopicBatchLoaded'));
    },
    useCheckGenerationStatus: (e, t, i, r = !0) => {
      const s = M.useRef(0),
        c = M.useRef(!1);
      return C(
        r && e && !e.startsWith('temp-') && t ? [Ne, e, t] : null,
        async ([, o, p]) => ((s.current += 1), b.getGenerationStatus(o, p)),
        {
          onError: (o) => {
            ((c.current = !0), console.error('Video generation status check error:', o));
          },
          onSuccess: async (o) => {
            if (!o) return;
            c.current = !1;
            const l = (n().generationBatchesMap[i] || []).find((d) =>
              d.generations.some((u) => u.id === e),
            );
            if ((o.status === h.Success || o.status === h.Error) && l) {
              if (
                ((s.current = 0),
                o.generation &&
                  (n().internal_dispatchGenerationBatch(
                    i,
                    {
                      batchId: l.id,
                      generationId: e,
                      type: 'updateGenerationInBatch',
                      value: o.generation,
                    },
                    B(`useCheckGenerationStatus/${o.status === h.Success ? 'success' : 'error'}`),
                  ),
                  o.status === h.Success && o.generation.asset?.thumbnailUrl))
              ) {
                const d = f.getGenerationTopicById(i)(n());
                d &&
                  !d.coverUrl &&
                  (await n().updateGenerationTopicCover(i, o.generation.asset.thumbnailUrl));
              }
              await n().refreshGenerationBatches();
            }
          },
          refreshInterval: (o) => {
            if (o?.status === h.Success || o?.status === h.Error) return 0;
            const p = 1e3,
              l = 3e4,
              d = s.current,
              u = Math.floor(d / 5);
            let G = Math.min(p * Math.pow(2, u), l);
            return (c.current && (G = Math.min(G * 2, l)), G);
          },
          refreshWhenHidden: !1,
        },
      );
    },
    useFetchGenerationBatches: (e) =>
      C(e ? [N, e] : null, async ([, t]) => V.getGenerationBatches(t, 'video'), {
        onSuccess: (t) => {
          const i = { ...n().generationBatchesMap, [e]: t };
          I(i, n().generationBatchesMap) ||
            a(
              { generationBatchesMap: i },
              !1,
              B('useFetchGenerationBatches(success)', { topicId: e }),
            );
        },
      }),
  });
function x(a, n) {
  const e = oe.enabledVideoModelList(re()),
    t = e.find((c) => c.id === n);
  if (!t)
    throw new Error(
      `Provider "${n}" not found in enabled video provider list. Available providers: ${e.map((c) => c.id).join(', ')}`,
    );
  const i = t.children.find((c) => c.id === a);
  if (!i)
    throw new Error(
      `Model "${a}" not found in provider "${n}". Available models: ${t.children.map((c) => c.id).join(', ')}`,
    );
  const r = i.parameters,
    s = D(r);
  return { activeModel: i, defaultValues: s, parametersSchema: r };
}
const Ue = (a) => ({
    initializeVideoConfig: (n, e, t) => {
      if (n && e && t)
        try {
          const { defaultValues: i, parametersSchema: r } = x(e, t);
          a(
            { isInit: !0, model: e, parameters: i, parametersSchema: r, provider: t },
            !1,
            `initializeVideoConfig/${e}/${t}`,
          );
        } catch {
          a({ isInit: !0 }, !1, 'initializeVideoConfig/default');
        }
      else a({ isInit: !0 }, !1, 'initializeVideoConfig/default');
    },
    setModelAndProviderOnSelect: (n, e) => {
      const { defaultValues: t, parametersSchema: i } = x(n, e);
      (a(
        { model: n, parameters: t, parametersSchema: i, provider: e },
        !1,
        `setModelAndProviderOnSelect/${n}/${e}`,
      ),
        J.isLogin(y.getState()) &&
          Q.getState().updateSystemStatus({
            lastSelectedVideoModel: n,
            lastSelectedVideoProvider: e,
          }));
    },
    setParamOnInput: (n, e) => {
      a(
        (t) => {
          const { parameters: i } = t;
          return { parameters: { ...i, [n]: e } };
        },
        !1,
        `setParamOnInput/${n}`,
      );
    },
  }),
  Oe = (...a) => ({ ...me, ...Ue(...a), ...Me(...a), ...xe(...a), ...Le(...a) }),
  Fe = ne('video'),
  Je = X()(Z(Fe(Oe)), ee);
export { he as D, ue as a, Ee as b, f as g, Je as u, w as v };
