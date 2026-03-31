import {
  jC as V,
  a_ as z,
  dw as j,
  du as T,
  f4 as q,
  v as I,
  f9 as K,
  b3 as Y,
  i as E,
  n as y,
  at as O,
  dt as U,
  an as Z,
  u as J,
  w as C,
  cF as Q,
  cG as X,
  au as ee,
  dv as te,
  cE as ne,
} from './index-C8UyLGsD.js';
import { Z as k, M as ie, _ as b, E as ae } from './providerConfig-qS2Xx-oI.js';
import { c as re, g as G, b as M, a as R } from './generationBatch-ZU4HN8uR.js';
import { imageGenerationConfigSelectors as v } from './selectors-DasueCgW.js';
import { r as L } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as f } from './asyncTask-Deq5sCIJ.js';
import { e as _ } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { g as se } from './store-CTAK9tZ0.js';
import { a as oe } from './selectors-BgvhR9tA.js';
import { a4 as ce, a5 as he } from './index-Br6hqyew.js';
import { g as ue } from './discover-H7COHXvN.js';
const pe = { isCreating: !1, isCreatingWithNewTopic: !1 },
  le = { generationBatchesMap: {} },
  ge = ie.Google,
  me = 'gemini-3.1-flash-image-preview:image',
  de = b(k),
  fe = {
    model: me,
    provider: ge,
    imageNum: V.defaultImageNum,
    parameters: de,
    parametersSchema: k,
    isAspectRatioLocked: !1,
    activeAspectRatio: null,
    isInit: !1,
  },
  Te = {
    activeGenerationTopicId:
      typeof window < 'u' ? new URLSearchParams(window.location.search).get('topic') : null,
    loadingGenerationTopicIds: [],
    generationTopics: [],
  },
  Ge = { ...fe, ...Te, ...le, ...pe },
  A = j('lobe-image:service');
class we {
  async createImage(e) {
    A('Creating image with payload: %O', e);
    try {
      const t = await z.image.createImage.mutate(e);
      return (
        A('Image creation service call completed successfully: %O', {
          batchId: t.data?.batch?.id,
          generationCount: t.data?.generations?.length,
          success: t.success,
        }),
        t
      );
    } catch (t) {
      throw (A('Image creation service call failed: %O', { error: t.message, payload: e }), t);
    }
  }
}
const N = new we(),
  Ie = (a) => a.activeGenerationTopicId,
  ve = (a) => a.generationTopics,
  Se = (a) => (e) => e.generationTopics.find((t) => t.id === a),
  Be = (a) => (e) => e.loadingGenerationTopicIds.includes(a),
  d = {
    activeGenerationTopicId: Ie,
    generationTopics: ve,
    getGenerationTopicById: Se,
    isLoadingGenerationTopic: Be,
  },
  D = (a) => (e) => e.generationBatchesMap[a] || [],
  P = (a) => {
    const e = d.activeGenerationTopicId(a);
    return e ? D(e)(a) : [];
  },
  _e = (a) => (e) => P(e).find((n) => n.id === a),
  Ae = (a) => {
    const e = d.activeGenerationTopicId(a);
    return e ? Array.isArray(a.generationBatchesMap[e]) : !1;
  },
  ye = {
    getGenerationBatchesByTopicId: D,
    currentGenerationBatches: P,
    getGenerationBatchByBatchId: _e,
    isCurrentGenerationTopicLoaded: Ae,
  },
  be = (a = [], e) => {
    switch (e.type) {
      case 'addTopic':
        return T(a, (t) => {
          const n = new Date();
          t.unshift({
            title: e.value.title || null,
            coverUrl: e.value.coverUrl || null,
            createdAt: e.value.createdAt || n,
            updatedAt: e.value.updatedAt || n,
            ...e.value,
          });
        });
      case 'updateTopic':
        return T(a, (t) => {
          const n = t.findIndex((i) => i.id === e.id);
          n !== -1 && (t[n] = { ...t[n], ...e.value, updatedAt: new Date() });
        });
      case 'deleteTopic':
        return a.filter((t) => t.id !== e.id);
      default:
        return a;
    }
  },
  x = 'fetchGenerationTopics',
  w = U('generationTopic'),
  Ee = (a, e, t) => new Ce(a, e, t);
class Ce {
  #e;
  #t;
  constructor(e, t, n) {
    ((this.#t = e), (this.#e = t));
  }
  createGenerationTopic = async (e) => {
    if (!e || e.length === 0)
      throw new Error('Prompts cannot be empty when creating a generation topic');
    const { internal_createGenerationTopic: t, summaryGenerationTopicTitle: n } = this.#e(),
      i = await t();
    return (n(i, e), i);
  };
  switchGenerationTopic = (e) => {
    if (this.#e().activeGenerationTopicId === e) return;
    if (!d.getGenerationTopicById(e)(this.#e())) {
      console.warn(`Generation topic with id ${e} not found`);
      return;
    }
    this.#t({ activeGenerationTopicId: e }, !1, w('switchGenerationTopic'));
  };
  openNewGenerationTopic = () => {
    this.#t({ activeGenerationTopicId: null }, !1, w('openNewGenerationTopic'));
  };
  summaryGenerationTopicTitle = async (e, t) => {
    if (!d.getGenerationTopicById(e)(this.#e())) throw new Error(`Topic ${e} not found`);
    const {
      internal_updateGenerationTopicTitleInSummary: i,
      internal_updateGenerationTopicLoading: r,
    } = this.#e();
    (r(e, !0), i(e, q));
    let c = '';
    const s = () =>
        t[0]
          .replaceAll(/[^\s\w\u4E00-\u9FFF]/g, '')
          .trim()
          .split(/\s+/)
          .slice(0, 3)
          .join(' ')
          .slice(0, 20),
      h = ce.generationTopic(I.getState());
    return (
      await he.fetchPresetTaskResult({
        params: K(h, re(t, 'image', Y.responseLanguage(I.getState()) || ue.getCurrentLanguage())),
        onError: async () => {
          const o = s();
          (i(e, o), await this.#e().internal_updateGenerationTopic(e, { title: o }));
        },
        onFinish: async (o) => {
          await this.#e().internal_updateGenerationTopic(e, { title: o });
        },
        onLoadingChange: (o) => {
          r(e, o);
        },
        onMessageHandle: (o) => {
          o.type === 'text' && ((c += o.text), i(e, c));
        },
      }),
      c
    );
  };
  internal_createGenerationTopic = async () => {
    const e = Date.now().toString();
    (this.#e().internal_dispatchGenerationTopic(
      { type: 'addTopic', value: { id: e, title: '' } },
      'internal_createGenerationTopic',
    ),
      this.#e().internal_updateGenerationTopicLoading(e, !0));
    const t = await G.createTopic('image');
    return (
      this.#e().internal_updateGenerationTopicLoading(e, !1),
      this.#e().internal_updateGenerationTopicLoading(t, !0),
      await this.#e().refreshGenerationTopics(),
      this.#e().internal_updateGenerationTopicLoading(t, !1),
      t
    );
  };
  internal_updateGenerationTopic = async (e, t) => {
    (this.#e().internal_dispatchGenerationTopic({ type: 'updateTopic', id: e, value: t }),
      this.#e().internal_updateGenerationTopicLoading(e, !0),
      await G.updateTopic(e, t),
      await this.#e().refreshGenerationTopics(),
      this.#e().internal_updateGenerationTopicLoading(e, !1));
  };
  internal_updateGenerationTopicTitleInSummary = (e, t) => {
    this.#e().internal_dispatchGenerationTopic(
      { type: 'updateTopic', id: e, value: { title: t } },
      'updateGenerationTopicTitleInSummary',
    );
  };
  internal_updateGenerationTopicLoading = (e, t) => {
    this.#t(
      (n) =>
        t
          ? { loadingGenerationTopicIds: [...n.loadingGenerationTopicIds, e] }
          : { loadingGenerationTopicIds: n.loadingGenerationTopicIds.filter((i) => i !== e) },
      !1,
      w('updateGenerationTopicLoading'),
    );
  };
  internal_dispatchGenerationTopic = (e, t) => {
    const n = be(this.#e().generationTopics, e);
    E(n, this.#e().generationTopics) ||
      this.#t({ generationTopics: n }, !1, t ?? w(`dispatchGenerationTopic/${e.type}`));
  };
  useFetchGenerationTopics = (e) =>
    y(e ? [x] : null, () => G.getAllGenerationTopics('image'), {
      suspense: !0,
      onSuccess: (t) => {
        E(t, this.#e().generationTopics) ||
          this.#t({ generationTopics: t }, !1, w('useFetchGenerationTopics'));
      },
    });
  refreshGenerationTopics = async () => {
    await O([x]);
  };
  removeGenerationTopic = async (e) => {
    const {
        internal_removeGenerationTopic: t,
        generationTopics: n,
        activeGenerationTopicId: i,
        switchGenerationTopic: r,
        openNewGenerationTopic: c,
      } = this.#e(),
      s = i === e;
    let h = -1;
    if ((s && (h = n.findIndex((o) => o.id === e)), await t(e), s)) {
      const o = this.#e().generationTopics;
      if (o.length > 0) {
        const u = Math.min(h, o.length - 1),
          l = o[u];
        l ? r(l.id) : c();
      } else c();
    }
  };
  internal_removeGenerationTopic = async (e) => {
    this.#e().internal_updateGenerationTopicLoading(e, !0);
    try {
      (await G.deleteTopic(e), await this.#e().refreshGenerationTopics());
    } finally {
      this.#e().internal_updateGenerationTopicLoading(e, !1);
    }
  };
  updateGenerationTopicCover = async (e, t) => {
    const { internal_updateGenerationTopicCover: n } = this.#e();
    await n(e, t);
  };
  internal_updateGenerationTopicCover = async (e, t) => {
    const {
      internal_dispatchGenerationTopic: n,
      internal_updateGenerationTopicLoading: i,
      refreshGenerationTopics: r,
    } = this.#e();
    (n(
      { type: 'updateTopic', id: e, value: { coverUrl: t } },
      'internal_updateGenerationTopicCover/optimistic',
    ),
      i(e, !0));
    try {
      (await G.updateTopicCover(e, t), await r());
    } finally {
      i(e, !1);
    }
  };
}
const Me = (a, e, t) => new Re(a, e, t);
class Re {
  #e;
  #t;
  constructor(e, t, n) {
    ((this.#t = e), (this.#e = t));
  }
  async createImage() {
    this.#t({ isCreating: !0 }, !1, 'createImage/startCreateImage');
    const e = this.#e(),
      t = v.imageNum(e),
      n = v.parameters(e),
      i = v.provider(e),
      r = v.model(e),
      c = d.activeGenerationTopicId(e),
      { createGenerationTopic: s, switchGenerationTopic: h, setTopicBatchLoaded: o } = e;
    if (!n) throw new TypeError('parameters is not initialized');
    if (!n.prompt) throw new TypeError('prompt is empty');
    let u = c;
    const l = c;
    let p = !1;
    if (!l) {
      p = !0;
      const m = [n.prompt],
        g = await s(m);
      ((u = g), o(g), h(g));
    }
    try {
      (p && this.#t({ isCreatingWithNewTopic: !0 }, !1, 'createImage/startCreateImageWithNewTopic'),
        await N.createImage({
          generationTopicId: u,
          provider: i,
          model: r,
          imageNum: t,
          params: n,
        }),
        p || (await this.#e().refreshGenerationBatches()),
        this.#t(
          (m) => ({ parameters: { ...m.parameters, prompt: '' } }),
          !1,
          'createImage/clearPrompt',
        ));
    } finally {
      p
        ? this.#t(
            { isCreating: !1, isCreatingWithNewTopic: !1 },
            !1,
            'createImage/endCreateImageWithNewTopic',
          )
        : this.#t({ isCreating: !1 }, !1, 'createImage/endCreateImage');
    }
  }
  async recreateImage(e) {
    this.#t({ isCreating: !0 }, !1, 'recreateImage/startCreateImage');
    const t = this.#e(),
      n = d.activeGenerationTopicId(t);
    if (!n) throw new Error('No active generation topic');
    const { removeGenerationBatch: i } = t,
      r = ye.getGenerationBatchByBatchId(e)(t),
      c = r.generations.length;
    try {
      (await i(e, n),
        await N.createImage({
          generationTopicId: n,
          provider: r.provider,
          model: r.model,
          imageNum: c,
          params: r.config,
        }),
        await t.refreshGenerationBatches());
    } finally {
      this.#t({ isCreating: !1 }, !1, 'recreateImage/endCreateImage');
    }
  }
}
const Le = (a = [], e) => {
    switch (e.type) {
      case 'updateGenerationInBatch':
        return T(a, (t) => {
          const n = t.findIndex((r) => r.id === e.batchId);
          if (n === -1) return;
          const i = t[n].generations.findIndex((r) => r.id === e.generationId);
          i !== -1 && (t[n].generations[i] = { ...t[n].generations[i], ...e.value });
        });
      case 'updateBatch':
        return T(a, (t) => {
          const n = t.findIndex((i) => i.id === e.id);
          n !== -1 && (t[n] = { ...t[n], ...e.value });
        });
      case 'deleteBatch':
        return a.filter((t) => t.id !== e.id);
      case 'deleteGenerationInBatch':
        return T(a, (t) => {
          const n = t.findIndex((i) => i.id === e.batchId);
          n !== -1 && (t[n].generations = t[n].generations.filter((i) => i.id !== e.generationId));
        });
      case 'addBatch':
        return T(a, (t) => {
          t.unshift(e.value);
        });
      default:
        return a;
    }
  },
  S = U('generationBatch'),
  F = 'SWR_USE_FETCH_GENERATION_BATCHES',
  Ne = 'SWR_USE_CHECK_GENERATION_STATUS',
  xe = (a, e, t) => new Fe(a, e, t);
class Fe {
  #e;
  #t;
  constructor(e, t, n) {
    ((this.#t = e), (this.#e = t));
  }
  setTopicBatchLoaded = (e) => {
    const t = { ...this.#e().generationBatchesMap, [e]: [] };
    _(t, this.#e().generationBatchesMap) ||
      this.#t({ generationBatchesMap: t }, !1, S('setTopicBatchLoaded'));
  };
  removeGeneration = async (e) => {
    const {
      internal_deleteGeneration: t,
      activeGenerationTopicId: n,
      refreshGenerationBatches: i,
    } = this.#e();
    if ((await t(e), n)) {
      const c = (this.#e().generationBatchesMap[n] || []).filter((s) => s.generations.length === 0);
      for (const s of c) await this.#e().internal_deleteGenerationBatch(s.id, n);
      c.length > 0 && (await i());
    }
  };
  internal_deleteGeneration = async (e) => {
    const {
      activeGenerationTopicId: t,
      refreshGenerationBatches: n,
      internal_dispatchGenerationBatch: i,
    } = this.#e();
    if (!t) return;
    const c = (this.#e().generationBatchesMap[t] || []).find((s) =>
      s.generations.some((h) => h.id === e),
    );
    c &&
      (i(
        t,
        { type: 'deleteGenerationInBatch', batchId: c.id, generationId: e },
        'internal_deleteGeneration',
      ),
      await M.deleteGeneration(e),
      await n());
  };
  removeGenerationBatch = async (e, t) => {
    const { internal_deleteGenerationBatch: n } = this.#e();
    await n(e, t);
  };
  internal_deleteGenerationBatch = async (e, t) => {
    const { internal_dispatchGenerationBatch: n, refreshGenerationBatches: i } = this.#e();
    (n(t, { type: 'deleteBatch', id: e }, 'internal_deleteGenerationBatch'),
      await R.deleteGenerationBatch(e),
      await i());
  };
  internal_dispatchGenerationBatch = (e, t, n) => {
    const i = this.#e().generationBatchesMap[e] || [],
      r = Le(i, t),
      c = { ...this.#e().generationBatchesMap, [e]: r };
    _(c, this.#e().generationBatchesMap) ||
      this.#t({ generationBatchesMap: c }, !1, n ?? S(`dispatchGenerationBatch/${t.type}`));
  };
  refreshGenerationBatches = async () => {
    const { activeGenerationTopicId: e } = this.#e();
    e && (await O([F, e]));
  };
  useFetchGenerationBatches = (e) =>
    y(e ? [F, e] : null, async ([, t]) => R.getGenerationBatches(t, 'image'), {
      onSuccess: (t) => {
        const n = { ...this.#e().generationBatchesMap, [e]: t };
        _(n, this.#e().generationBatchesMap) ||
          this.#t(
            { generationBatchesMap: n },
            !1,
            S('useFetchGenerationBatches(success)', { topicId: e }),
          );
      },
    });
  useCheckGenerationStatus = (e, t, n, i = !0) => {
    const r = L.useRef(0),
      c = L.useRef(!1);
    return y(
      i && e && !e.startsWith('temp-') && t ? [Ne, e, t] : null,
      async ([, s, h]) => ((r.current += 1), M.getGenerationStatus(s, h)),
      {
        refreshWhenHidden: !1,
        refreshInterval: (s) => {
          if (s?.status === f.Success || s?.status === f.Error) return 0;
          const h = 1e3,
            o = 3e4,
            u = r.current,
            l = Math.floor(u / 5);
          let p = Math.min(h * Math.pow(2, l), o);
          return (c.current && (p = Math.min(p * 2, o)), p);
        },
        onError: (s) => {
          ((c.current = !0), console.error('Generation status check error:', s));
        },
        onSuccess: async (s) => {
          if (!s) return;
          c.current = !1;
          const o = (this.#e().generationBatchesMap[n] || []).find((u) =>
            u.generations.some((l) => l.id === e),
          );
          if ((s.status === f.Success || s.status === f.Error) && o) {
            if (
              ((r.current = 0),
              s.generation &&
                (this.#e().internal_dispatchGenerationBatch(
                  n,
                  {
                    type: 'updateGenerationInBatch',
                    batchId: o.id,
                    generationId: e,
                    value: s.generation,
                  },
                  S(`useCheckGenerationStatus/${s.status === f.Success ? 'success' : 'error'}`),
                ),
                s.status === f.Success && s.generation.asset?.thumbnailUrl))
            ) {
              const u = d.getGenerationTopicById(n)(this.#e());
              u &&
                !u.coverUrl &&
                (await this.#e().updateGenerationTopicCover(n, s.generation.asset.thumbnailUrl));
            }
            await this.#e().refreshGenerationBatches();
          }
        },
      },
    );
  };
}
const $e = (a, e) => {
  if (a?.aspectRatio || a?.size || !a?.width || !a?.height) return null;
  const { width: t, height: n } = e;
  return typeof t == 'number' && typeof n == 'number' && t > 0 && n > 0 ? `${t}:${n}` : '1:1';
};
function B(a) {
  if (!a || typeof a != 'string') return 1;
  const e = a.split(':');
  if (e.length !== 2) return 1;
  const [t, n] = e,
    i = Number(t),
    r = Number(n);
  return !Number.isFinite(i) || !Number.isFinite(r) || i <= 0 || r <= 0 ? 1 : i / r;
}
function Oe(a, e, t) {
  if (!Number.isFinite(a) || a <= 0)
    throw new Error('Invalid ratio: must be a positive finite number');
  if (!Number.isFinite(e) || e <= 0)
    throw new Error('Invalid defaultWidth: must be a positive finite number');
  if (!Number.isFinite(t) || t <= 0)
    throw new Error('Invalid defaultHeight: must be a positive finite number');
  const n = e / t;
  return a > n ? { width: e, height: Math.round(e / a) } : { width: Math.round(t * a), height: t };
}
function W(a, e) {
  const t = oe.enabledImageModelList(se()),
    n = t.find((s) => s.id === e);
  if (!n)
    throw new Error(
      `Provider "${e}" not found in enabled image provider list. Available providers: ${t.map((s) => s.id).join(', ')}`,
    );
  const i = n.children.find((s) => s.id === a);
  if (!i)
    throw new Error(
      `Model "${a}" not found in provider "${e}". Available models: ${n.children.map((s) => s.id).join(', ')}`,
    );
  const r = i.parameters;
  return { defaultValues: b(r), activeModel: i, parametersSchema: r };
}
function $(a, e) {
  const { defaultValues: t, parametersSchema: n } = W(a, e),
    i = $e(n, t);
  return { defaultValues: t, parametersSchema: n, initialActiveRatio: i };
}
const Ue = (a, e, t) => new ke(a, e, t);
class ke {
  #e;
  #t;
  constructor(e, t, n) {
    ((this.#t = e), (this.#e = t));
  }
  setParamOnInput = (e, t) => {
    this.#t(
      (n) => {
        const { parameters: i } = n;
        return { parameters: { ...i, [e]: t } };
      },
      !1,
      `setParamOnInput/${e}`,
    );
  };
  setWidth = (e) => {
    this.#t(
      (t) => {
        const {
            parameters: n,
            isAspectRatioLocked: i,
            activeAspectRatio: r,
            parametersSchema: c,
          } = t,
          s = { ...n, width: e };
        if (i && r) {
          const h = B(r),
            o = c?.height;
          if (o && typeof o.max == 'number' && typeof o.min == 'number') {
            const u = Math.round(e / h);
            s.height = Math.max(Math.min(u, o.max), o.min);
          }
        }
        return { parameters: s };
      },
      !1,
      'setWidth',
    );
  };
  setHeight = (e) => {
    this.#t(
      (t) => {
        const {
            parameters: n,
            isAspectRatioLocked: i,
            activeAspectRatio: r,
            parametersSchema: c,
          } = t,
          s = { ...n, height: e };
        if (i && r) {
          const h = B(r),
            o = c?.width;
          if (o && typeof o.max == 'number' && typeof o.min == 'number') {
            const u = Math.round(e * h);
            s.width = Math.max(Math.min(u, o.max), o.min);
          }
        }
        return { parameters: s };
      },
      !1,
      'setHeight',
    );
  };
  toggleAspectRatioLock = () => {
    this.#t(
      (e) => {
        const {
            isAspectRatioLocked: t,
            activeAspectRatio: n,
            parameters: i,
            parametersSchema: r,
          } = e,
          c = !t;
        if (c && n && i && r) {
          const s = i.width,
            h = i.height;
          if (typeof s == 'number' && typeof h == 'number' && r?.width && r?.height) {
            const o = B(n),
              u = s / h;
            if (Math.abs(u - o) > 0.01) {
              const l = r.width,
                p = r.height;
              if (
                l &&
                p &&
                typeof l.max == 'number' &&
                typeof l.min == 'number' &&
                typeof p.max == 'number' &&
                typeof p.min == 'number'
              ) {
                let m = s,
                  g = Math.round(s / o);
                return (
                  g > p.max || g < p.min
                    ? ((g = h), (m = Math.round(h * o)), (m = Math.max(Math.min(m, l.max), l.min)))
                    : (g = Math.max(Math.min(g, p.max), p.min)),
                  { isAspectRatioLocked: c, parameters: { ...i, width: m, height: g } }
                );
              }
            }
          }
        }
        return { isAspectRatioLocked: c };
      },
      !1,
      'toggleAspectRatioLock',
    );
  };
  setAspectRatio = (e) => {
    const { parameters: t, parametersSchema: n } = this.#e();
    if (!t || !n) return;
    const i = b(n),
      r = { ...t };
    if (n?.width && n?.height && typeof i.width == 'number' && typeof i.height == 'number') {
      const c = B(e),
        { width: s, height: h } = Oe(c, i.width, i.height);
      ((r.width = s), (r.height = h));
    }
    (n?.aspectRatio && (r.aspectRatio = e),
      this.#t({ activeAspectRatio: e, parameters: r }, !1, `setAspectRatio/${e}`));
  };
  setModelAndProviderOnSelect = (e, t) => {
    const { defaultValues: n, parametersSchema: i, initialActiveRatio: r } = $(e, t);
    (this.#t(
      {
        model: e,
        provider: t,
        parameters: n,
        parametersSchema: i,
        isAspectRatioLocked: !1,
        activeAspectRatio: r,
      },
      !1,
      `setModelAndProviderOnSelect/${e}/${t}`,
    ),
      Z.isLogin(I.getState()) &&
        J.getState().updateSystemStatus({
          lastSelectedImageModel: e,
          lastSelectedImageProvider: t,
        }));
  };
  setImageNum = (e) => {
    this.#t(() => ({ imageNum: e }), !1, `setImageNum/${e}`);
  };
  reuseSettings = (e, t, n) => {
    const { defaultValues: i, parametersSchema: r } = W(e, t);
    this.#t(
      () => ({ model: e, provider: t, parameters: { ...i, ...n }, parametersSchema: r }),
      !1,
      `reuseSettings/${e}/${t}`,
    );
  };
  reuseSeed = (e) => {
    this.#t((t) => ({ parameters: { ...t.parameters, seed: e } }), !1, `reuseSeed/${e}`);
  };
  _initializeDefaultImageConfig = () => {
    const { defaultImageNum: e } = C.currentImageSettings(I.getState());
    this.#t({ imageNum: e, isInit: !0 }, !1, 'initializeImageConfig/default');
  };
  initializeImageConfig = (e, t, n) => {
    const { _initializeDefaultImageConfig: i } = this.#e(),
      { defaultImageNum: r } = C.currentImageSettings(I.getState());
    if (e && t && n)
      try {
        const { defaultValues: c, parametersSchema: s, initialActiveRatio: h } = $(t, n);
        this.#t(
          {
            model: t,
            provider: n,
            parameters: c,
            parametersSchema: s,
            isAspectRatioLocked: !1,
            activeAspectRatio: h,
            imageNum: r,
            isInit: !0,
          },
          !1,
          `initializeImageConfig/${t}/${n}`,
        );
      } catch {
        i();
      }
    else i();
  };
}
const De = (...a) => ({ ...Ge, ...ne([Ue(...a), Ee(...a), xe(...a), Me(...a)]) }),
  Pe = te('image'),
  H = Q()(X(Pe(De)), ee),
  We = () => H.getState(),
  tt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImageStoreState: We, useImageStore: H },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { me as D, ye as a, ge as b, d as g, tt as i, H as u };
