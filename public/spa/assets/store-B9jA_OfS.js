const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/index-x_pUhOek.js', 'vendor/vendor-emotion-DdM-9MtU.js']),
) => i.map((i) => d[i]);
import {
  at as u,
  n as l,
  a_ as s,
  _ as m,
  eG as L,
  cH as S,
  aW as B,
  cE as v,
  cF as K,
  au as _,
  dv as f,
} from './index-C8UyLGsD.js';
import { k as r, u as g } from './store-8fdqmFXe.js';
import { u as y } from './upload-BTy9wwF3.js';
const E = 'FETCH_KNOWLEDGE_BASE',
  T = 'FETCH_KNOWLEDGE_BASE_ITEM',
  p = (t, e, a) => new F(t, e, a);
class F {
  #e;
  #a;
  constructor(e, a, n) {
    ((this.#a = e), (this.#e = a));
  }
  createNewKnowledgeBase = async (e) => {
    const a = await r.createKnowledgeBase(e);
    return (await this.#e().refreshKnowledgeBaseList(), a);
  };
  internal_toggleKnowledgeBaseLoading = (e, a) => {
    this.#a(
      (n) =>
        a
          ? { knowledgeBaseLoadingIds: [...n.knowledgeBaseLoadingIds, e] }
          : { knowledgeBaseLoadingIds: n.knowledgeBaseLoadingIds.filter((c) => c !== e) },
      !1,
      'toggleKnowledgeBaseLoading',
    );
  };
  refreshKnowledgeBaseList = async () => {
    await u(E);
  };
  removeKnowledgeBase = async (e) => {
    (await r.deleteKnowledgeBase(e), await this.#e().refreshKnowledgeBaseList());
  };
  updateKnowledgeBase = async (e, a) => {
    (this.#e().internal_toggleKnowledgeBaseLoading(e, !0),
      await r.updateKnowledgeBaseList(e, a),
      await this.#e().refreshKnowledgeBaseList(),
      this.#e().internal_toggleKnowledgeBaseLoading(e, !1));
  };
  useFetchKnowledgeBaseItem = (e) =>
    l([T, e], () => r.getKnowledgeBaseById(e), {
      onSuccess: (a) => {
        a &&
          this.#a({
            activeKnowledgeBaseId: e,
            activeKnowledgeBaseItems: { ...this.#e().activeKnowledgeBaseItems, [e]: a },
          });
      },
    });
  useFetchKnowledgeBaseList = (e = {}) =>
    l(E, () => r.getKnowledgeBaseList(), {
      fallbackData: [],
      onSuccess: () => {
        this.#e().initKnowledgeBaseList ||
          this.#a({ initKnowledgeBaseList: !0 }, !1, 'useFetchKnowledgeBaseList/init');
      },
      suspense: e.suspense,
    });
}
const A = {
  activeKnowledgeBaseId: null,
  activeKnowledgeBaseItems: {},
  initKnowledgeBaseList: !1,
  knowledgeBaseLoadingIds: [],
  knowledgeBaseRenamingId: null,
  knowledgeBaseUpdatingId: null,
};
class R {
  createDataset = async (e) => s.ragEval.createDataset.mutate(e);
  getDatasets = async (e) => s.ragEval.getDatasets.query({ knowledgeBaseId: e });
  removeDataset = async (e) => {
    await s.ragEval.removeDataset.mutate({ id: e });
  };
  updateDataset = async (e, a) => {
    await s.ragEval.updateDataset.mutate({ id: e, value: a });
  };
  getDatasetRecords = async (e) => s.ragEval.getDatasetRecords.query({ datasetId: e });
  removeDatasetRecord = async (e) => {
    await s.ragEval.removeDatasetRecords.mutate({ id: e });
  };
  importDatasetRecords = async (e, a) => {
    const { path: n } = await y.uploadToServerS3(a, { directory: 'ragEval' });
    await s.ragEval.importDatasetRecords.mutate({ datasetId: e, pathname: n });
  };
  createEvaluation = async (e) => s.ragEval.createEvaluation.mutate(e);
  getEvaluationList = async (e) => s.ragEval.getEvaluationList.query({ knowledgeBaseId: e });
  startEvaluationTask = async (e) => s.ragEval.startEvaluationTask.mutate({ id: e });
  removeEvaluation = async (e) => {
    await s.ragEval.removeEvaluation.mutate({ id: e });
  };
  checkEvaluationStatus = async (e) => s.ragEval.checkEvaluationStatus.query({ id: e });
}
const i = new R(),
  d = 'FETCH_DATASET_LIST',
  I = 'FETCH_DATASET_RECORD_KEY',
  k = (t, e, a) => new C(t, e, a);
class C {
  #e;
  #a;
  constructor(e, a, n) {
    ((this.#a = e), (this.#e = a));
  }
  createNewDataset = async (e) => {
    (await i.createDataset(e), await this.#e().refreshDatasetList());
  };
  importDataset = async (e, a) => {
    if (!a) return;
    if (e.name.split('.').pop() === 'jsonl') {
      const c = await e.text(),
        { default: D } = await m(
          async () => {
            const { default: o } = await import('./index-x_pUhOek.js').then((h) => h.i);
            return { default: o };
          },
          __vite__mapDeps([0, 1]),
        );
      try {
        const o = D.parse(c);
        (L.array().parse(o), await i.importDatasetRecords(a, e));
      } catch (o) {
        S.error({
          description: o.message,
          message: B.t('errors.invalidFileFormat', { ns: 'common' }),
        });
      }
    }
    await this.#e().refreshDatasetList();
  };
  refreshDatasetList = async () => {
    await u(d);
  };
  removeDataset = async (e) => {
    (await i.removeDataset(e), await this.#e().refreshDatasetList());
  };
  useFetchDatasetRecords = (e) => l(e ? [I, e] : null, () => i.getDatasetRecords(e));
  useFetchDatasets = (e) =>
    l([d, e], () => i.getDatasets(e), {
      fallbackData: [],
      onSuccess: () => {
        this.#e().initDatasetList || this.#a({ initDatasetList: !0 }, !1, 'useFetchDatasets/init');
      },
    });
}
const w = 'FETCH_EVALUATION_LIST_KEY',
  H = (t, e, a) => new N(t, e, a);
class N {
  #e;
  #a;
  constructor(e, a, n) {
    ((this.#a = e), (this.#e = a));
  }
  checkEvaluationStatus = async (e) => {
    await i.checkEvaluationStatus(e);
  };
  createNewEvaluation = async (e) => {
    (await i.createEvaluation(e), await this.#e().refreshEvaluationList());
  };
  refreshEvaluationList = async () => {
    await u(w);
  };
  removeEvaluation = async (e) => {
    await i.removeEvaluation(e);
  };
  runEvaluation = async (e) => {
    await i.startEvaluationTask(e);
  };
  useFetchEvaluationList = (e) =>
    l([w, e], () => i.getEvaluationList(e), {
      fallbackData: [],
      onSuccess: () => {
        this.#e().initDatasetList || this.#a({ initDatasetList: !0 }, !1, 'useFetchDatasets/init');
      },
    });
}
const O = (...t) => v([k(...t), H(...t)]),
  G = { initDatasetList: !1 },
  W = { ...A, ...G },
  Y = (t, e, a) => new q(t, e, a);
class q {
  constructor(e, a, n) {}
  addFilesToKnowledgeBase = async (e, a) => {
    await g.getState().addResourcesToKnowledgeBase(e, a);
  };
  removeFilesFromKnowledgeBase = async (e, a) => {
    await g.getState().removeResourcesFromKnowledgeBase(e, a);
  };
}
const b = (...t) => ({ ...W, ...v([p(...t), Y(...t), O(...t)]) }),
  U = f('knowledgeBase'),
  J = K()(U(b), _);
export { J as u };
