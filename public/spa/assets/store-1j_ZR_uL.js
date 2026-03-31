import {
  a_ as r,
  du as D,
  i as R,
  n as l,
  at as c,
  cF as k,
  au as y,
  dv as p,
} from './index-C8UyLGsD.js';
const S = {
    benchmarkDetailMap: {},
    benchmarkList: [],
    benchmarkListInit: !1,
    isCreatingBenchmark: !1,
    isDeletingBenchmark: !1,
    isLoadingBenchmarkList: !0,
    isUpdatingBenchmark: !1,
    loadingBenchmarkDetailIds: [],
  },
  L = { datasetDetailMap: {}, datasetList: [], isLoadingDatasets: !0, loadingDatasetDetailIds: [] },
  v = {
    datasetRunListMap: {},
    isCreatingRun: !1,
    isLoadingRuns: !0,
    loadingRunDetailIds: [],
    loadingRunResultIds: [],
    runDetailMap: {},
    runList: [],
    runResultsMap: {},
  },
  F = { loadingTestCaseIds: [], testCasesCache: {} },
  w = { ...S, ...L, ...v, ...F };
class A {
  async listBenchmarks() {
    return r.agentEval.listBenchmarks.query();
  }
  async getBenchmark(a) {
    return r.agentEval.getBenchmark.query({ id: a });
  }
  async createBenchmark(a) {
    return r.agentEval.createBenchmark.mutate(a);
  }
  async updateBenchmark(a) {
    return r.agentEval.updateBenchmark.mutate(a);
  }
  async deleteBenchmark(a) {
    return r.agentEval.deleteBenchmark.mutate({ id: a });
  }
  async listDatasets(a) {
    return r.agentEval.listDatasets.query({ benchmarkId: a });
  }
  async getDataset(a) {
    return r.agentEval.getDataset.query({ id: a });
  }
  async createDataset(a) {
    return r.agentEval.createDataset.mutate(a);
  }
  async updateDataset(a) {
    return r.agentEval.updateDataset.mutate(a);
  }
  async deleteDataset(a) {
    return r.agentEval.deleteDataset.mutate({ id: a });
  }
  async parseDatasetFile(a) {
    return r.agentEval.parseDatasetFile.mutate(a);
  }
  async importDataset(a) {
    return r.agentEval.importDataset.mutate(a);
  }
  async listTestCases(a) {
    return r.agentEval.listTestCases.query(a);
  }
  async createTestCase(a) {
    return r.agentEval.createTestCase.mutate(a);
  }
  async updateTestCase(a) {
    return r.agentEval.updateTestCase.mutate(a);
  }
  async deleteTestCase(a) {
    return r.agentEval.deleteTestCase.mutate({ id: a });
  }
  async listRuns(a) {
    return r.agentEval.listRuns.query(a);
  }
  async getRunDetails(a) {
    return r.agentEval.getRunDetails.query({ id: a });
  }
  async getRunResults(a) {
    return r.agentEval.getRunResults.query({ id: a });
  }
  async createRun(a) {
    return r.agentEval.createRun.mutate(a);
  }
  async startRun(a, e) {
    return r.agentEval.startRun.mutate({ force: e, id: a });
  }
  async abortRun(a) {
    return r.agentEval.abortRun.mutate({ id: a });
  }
  async retryRunErrors(a) {
    return r.agentEval.retryRunErrors.mutate({ id: a });
  }
  async retryRunCase(a, e) {
    return r.agentEval.retryRunCase.mutate({ runId: a, testCaseId: e });
  }
  async updateRun(a) {
    return r.agentEval.updateRun.mutate(a);
  }
  async deleteRun(a) {
    return r.agentEval.deleteRun.mutate({ id: a });
  }
}
const u = new A(),
  I = (n = {}, a) => {
    switch (a.type) {
      case 'setBenchmarkDetail':
        return D(n, (e) => {
          e[a.id] = a.value;
        });
      case 'updateBenchmarkDetail':
        return D(n, (e) => {
          e[a.id] && (e[a.id] = { ...e[a.id], ...a.value });
        });
      case 'deleteBenchmarkDetail':
        return D(n, (e) => {
          delete e[a.id];
        });
      default:
        return n;
    }
  },
  E = 'FETCH_BENCHMARKS',
  m = 'FETCH_BENCHMARK_DETAIL',
  M = (n, a) => ({
    createBenchmark: async (e) => {
      n({ isCreatingBenchmark: !0 }, !1, 'createBenchmark/start');
      try {
        const t = await u.createBenchmark({
          identifier: e.identifier,
          name: e.name,
          description: e.description,
          metadata: e.metadata,
          rubrics: e.rubrics ?? [],
          tags: e.tags,
        });
        return (await a().refreshBenchmarks(), t);
      } finally {
        n({ isCreatingBenchmark: !1 }, !1, 'createBenchmark/end');
      }
    },
    deleteBenchmark: async (e) => {
      n({ isDeletingBenchmark: !0 }, !1, 'deleteBenchmark/start');
      try {
        (await u.deleteBenchmark(e), await a().refreshBenchmarks());
      } finally {
        n({ isDeletingBenchmark: !1 }, !1, 'deleteBenchmark/end');
      }
    },
    refreshBenchmarkDetail: async (e) => {
      await c([m, e]);
    },
    refreshBenchmarks: async () => {
      await c(E);
    },
    updateBenchmark: async (e) => {
      const { id: t } = e;
      (a().internal_dispatchBenchmarkDetail({ type: 'updateBenchmarkDetail', id: t, value: e }),
        a().internal_updateBenchmarkDetailLoading(t, !0));
      try {
        (await u.updateBenchmark({
          id: e.id,
          identifier: e.identifier,
          name: e.name,
          description: e.description,
          metadata: e.metadata,
          tags: e.tags,
        }),
          await a().refreshBenchmarks(),
          await a().refreshBenchmarkDetail(t));
      } finally {
        a().internal_updateBenchmarkDetailLoading(t, !1);
      }
    },
    useFetchBenchmarkDetail: (e) =>
      l(e ? [m, e] : null, () => u.getBenchmark(e), {
        onSuccess: (t) => {
          (a().internal_dispatchBenchmarkDetail({ type: 'setBenchmarkDetail', id: e, value: t }),
            a().internal_updateBenchmarkDetailLoading(e, !1));
        },
      }),
    useFetchBenchmarks: () =>
      l(E, () => u.listBenchmarks(), {
        onSuccess: (e) => {
          n(
            { benchmarkList: e, benchmarkListInit: !0, isLoadingBenchmarkList: !1 },
            !1,
            'useFetchBenchmarks/success',
          );
        },
      }),
    internal_dispatchBenchmarkDetail: (e) => {
      const t = a().benchmarkDetailMap,
        s = I(t, e);
      R(s, t) || n({ benchmarkDetailMap: s }, !1, `dispatchBenchmarkDetail/${e.type}`);
    },
    internal_updateBenchmarkDetailLoading: (e, t) => {
      n(
        (s) =>
          t
            ? { loadingBenchmarkDetailIds: [...s.loadingBenchmarkDetailIds, e] }
            : { loadingBenchmarkDetailIds: s.loadingBenchmarkDetailIds.filter((i) => i !== e) },
        !1,
        'updateBenchmarkDetailLoading',
      );
    },
  }),
  H = (n = {}, a) => {
    switch (a.type) {
      case 'setDatasetDetail':
        return D(n, (e) => {
          e[a.id] = a.value;
        });
      case 'updateDatasetDetail':
        return D(n, (e) => {
          e[a.id] && (e[a.id] = { ...e[a.id], ...a.value });
        });
      case 'deleteDatasetDetail':
        return D(n, (e) => {
          delete e[a.id];
        });
      default:
        return n;
    }
  },
  f = 'FETCH_DATASETS',
  g = 'FETCH_DATASET_DETAIL',
  K = (n, a) => ({
    refreshDatasetDetail: async (e) => {
      await c([g, e]);
    },
    refreshDatasets: async (e) => {
      await c([f, e]);
    },
    useFetchDatasetDetail: (e) =>
      l(e ? [g, e] : null, () => u.getDataset(e), {
        onSuccess: (t) => {
          (a().internal_dispatchDatasetDetail({ type: 'setDatasetDetail', id: e, value: t }),
            a().internal_updateDatasetDetailLoading(e, !1));
        },
      }),
    useFetchDatasets: (e) =>
      l(e ? [f, e] : null, () => u.listDatasets(e), {
        onSuccess: (t) => {
          n({ datasetList: t, isLoadingDatasets: !1 }, !1, 'useFetchDatasets/success');
        },
      }),
    internal_dispatchDatasetDetail: (e) => {
      const t = a().datasetDetailMap,
        s = H(t, e);
      R(s, t) || n({ datasetDetailMap: s }, !1, `dispatchDatasetDetail/${e.type}`);
    },
    internal_updateDatasetDetailLoading: (e, t) => {
      n(
        (s) =>
          t
            ? { loadingDatasetDetailIds: [...s.loadingDatasetDetailIds, e] }
            : { loadingDatasetDetailIds: s.loadingDatasetDetailIds.filter((i) => i !== e) },
        !1,
        'updateDatasetDetailLoading',
      );
    },
  }),
  N = (n = {}, a) => {
    switch (a.type) {
      case 'setRunDetail':
        return D(n, (e) => {
          e[a.id] = a.value;
        });
      case 'updateRunDetail':
        return D(n, (e) => {
          e[a.id] && (e[a.id] = { ...e[a.id], ...a.value });
        });
      case 'deleteRunDetail':
        return D(n, (e) => {
          delete e[a.id];
        });
      default:
        return n;
    }
  },
  d = 'FETCH_EVAL_RUNS',
  C = 'FETCH_EVAL_DATASET_RUNS',
  B = 'FETCH_EVAL_RUN_DETAIL',
  b = 'FETCH_EVAL_RUN_RESULTS',
  U = (n, a) => ({
    abortRun: async (e) => {
      (await u.abortRun(e), await a().refreshRunDetail(e));
    },
    createRun: async (e) => {
      n({ isCreatingRun: !0 }, !1, 'createRun/start');
      try {
        const t = await u.createRun(e);
        return (await a().refreshRuns(), t);
      } finally {
        n({ isCreatingRun: !1 }, !1, 'createRun/end');
      }
    },
    deleteRun: async (e) => {
      (await u.deleteRun(e),
        a().internal_dispatchRunDetail({ id: e, type: 'deleteRunDetail' }),
        await a().refreshRuns());
    },
    internal_dispatchRunDetail: (e) => {
      const t = a().runDetailMap,
        s = N(t, e);
      R(s, t) || n({ runDetailMap: s }, !1, `dispatchRunDetail/${e.type}`);
    },
    internal_updateRunDetailLoading: (e, t) => {
      n(
        (s) =>
          t
            ? { loadingRunDetailIds: [...s.loadingRunDetailIds, e] }
            : { loadingRunDetailIds: s.loadingRunDetailIds.filter((i) => i !== e) },
        !1,
        'updateRunDetailLoading',
      );
    },
    internal_updateRunResultLoading: (e, t) => {
      n(
        (s) =>
          t
            ? { loadingRunResultIds: [...s.loadingRunResultIds, e] }
            : { loadingRunResultIds: s.loadingRunResultIds.filter((i) => i !== e) },
        !1,
        'updateRunResultLoading',
      );
    },
    refreshDatasetRuns: async (e) => {
      await c([C, e]);
    },
    refreshRunDetail: async (e) => {
      await c([B, e]);
    },
    refreshRuns: async (e) => {
      e ? await c([d, e]) : await c((t) => Array.isArray(t) && t[0] === d);
    },
    retryRunCase: async (e, t) => {
      (await u.retryRunCase(e, t), await a().refreshRunDetail(e));
    },
    retryRunErrors: async (e) => {
      (await u.retryRunErrors(e), await a().refreshRunDetail(e));
    },
    startRun: async (e, t) => {
      (await u.startRun(e, t), await a().refreshRunDetail(e));
    },
    updateRun: async (e) => {
      const t = await u.updateRun(e);
      return (await a().refreshRunDetail(e.id), await a().refreshRuns(), t);
    },
    useFetchRunDetail: (e, t) =>
      l(e ? [B, e] : null, () => u.getRunDetails(e), {
        ...t,
        onSuccess: (s) => {
          (a().internal_dispatchRunDetail({ id: e, type: 'setRunDetail', value: s }),
            a().internal_updateRunDetailLoading(e, !1));
        },
      }),
    useFetchRunResults: (e, t) =>
      l(e ? [b, e] : null, () => u.getRunResults(e), {
        ...t,
        onSuccess: (s) => {
          (n(
            (i) => ({ runResultsMap: { ...i.runResultsMap, [e]: s } }),
            !1,
            'useFetchRunResults/success',
          ),
            a().internal_updateRunResultLoading(e, !1));
        },
      }),
    useFetchDatasetRuns: (e) =>
      l(e ? [C, e] : null, () => u.listRuns({ datasetId: e }), {
        onSuccess: (t) => {
          n(
            (s) => ({ datasetRunListMap: { ...s.datasetRunListMap, [e]: t.data } }),
            !1,
            'useFetchDatasetRuns/success',
          );
        },
      }),
    useFetchRuns: (e) =>
      l(e ? [d, e] : null, () => u.listRuns({ benchmarkId: e }), {
        onSuccess: (t) => {
          n({ isLoadingRuns: !1, runList: t.data }, !1, 'useFetchRuns/success');
        },
      }),
  }),
  T = 'FETCH_TEST_CASES',
  q = (n, a) => ({
    getTestCasesByDatasetId: (e) => a().testCasesCache[e]?.data || [],
    getTestCasesTotalByDatasetId: (e) => a().testCasesCache[e]?.total || 0,
    isLoadingTestCases: (e) => a().loadingTestCaseIds.includes(e),
    refreshTestCases: async (e) => {
      await c((t) => Array.isArray(t) && t[0] === T && t[1] === e);
    },
    useFetchTestCases: (e) => {
      const { datasetId: t, limit: s = 10, offset: i = 0 } = e;
      return l(
        t ? [T, t, s, i] : null,
        () => u.listTestCases({ datasetId: t, limit: s, offset: i }),
        {
          onSuccess: (h) => {
            n(
              (o) => ({
                loadingTestCaseIds: o.loadingTestCaseIds.filter((_) => _ !== t),
                testCasesCache: {
                  ...o.testCasesCache,
                  [t]: { data: h.data, pagination: { limit: s, offset: i }, total: h.total },
                },
              }),
              !1,
              `useFetchTestCases/success/${t}`,
            );
          },
        },
      );
    },
  }),
  Y = (n, a, e) => ({ ...w, ...M(n, a), ...K(n, a), ...U(n, a), ...q(n, a) }),
  x = p('eval'),
  $ = k()(x(Y), y);
export { u as a, $ as u };
