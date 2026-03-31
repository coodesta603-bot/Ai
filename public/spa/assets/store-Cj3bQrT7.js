import {
  a_ as c,
  du as y,
  aL as M,
  dt as v,
  dI as u,
  _ as Q,
  at as h,
  n as F,
  i as O,
  cF as U,
  au as j,
  dv as H,
  cE as W,
} from './index-C8UyLGsD.js';
import { m, v as k, w as $, g as T, x as C } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { u as _ } from './useClientDataSWRWithSync-BKXDfgeT.js';
import './providerConfig-qS2Xx-oI.js';
const Y = { activities: 3, contexts: 0, experiences: 0, preferences: 3 };
class N {
  deleteAll = async () => c.userMemory.deleteAll.mutate();
  createIdentity = async (e) => c.userMemory.createIdentity.mutate(e);
  deleteIdentity = async (e) => c.userMemory.deleteIdentity.mutate({ id: e });
  getIdentities = async () => c.userMemory.getIdentities.query();
  updateIdentity = async (e, t) => c.userMemory.updateIdentity.mutate({ data: t, id: e });
  deleteContext = async (e) => c.userMemory.deleteContext.mutate({ id: e });
  getContexts = async () => c.userMemory.getContexts.query();
  updateContext = async (e, t) => c.userMemory.updateContext.mutate({ data: t, id: e });
  deleteActivity = async (e) => c.userMemory.deleteActivity.mutate({ id: e });
  getActivities = async () => c.userMemory.getActivities.query();
  updateActivity = async (e, t) => c.userMemory.updateActivity.mutate({ data: t, id: e });
  deleteExperience = async (e) => c.userMemory.deleteExperience.mutate({ id: e });
  getExperiences = async () => c.userMemory.getExperiences.query();
  updateExperience = async (e, t) => c.userMemory.updateExperience.mutate({ data: t, id: e });
  deletePreference = async (e) => c.userMemory.deletePreference.mutate({ id: e });
  getPreferences = async () => c.userMemory.getPreferences.query();
  updatePreference = async (e, t) => c.userMemory.updatePreference.mutate({ data: t, id: e });
}
const l = new N();
class B {
  requestFromChatTopics = async (e) => c.userMemory.requestMemoryFromChatTopic.mutate(e);
  getTask = async (e) => c.userMemory.getMemoryExtractionTask.query(e ? { taskId: e } : void 0);
}
const G = new B();
class J {
  addActivityMemory = async (e) => c.userMemories.toolAddActivityMemory.mutate(e);
  addContextMemory = async (e) => c.userMemories.toolAddContextMemory.mutate(e);
  addExperienceMemory = async (e) => c.userMemories.toolAddExperienceMemory.mutate(e);
  addIdentityMemory = async (e) => c.userMemories.toolAddIdentityMemory.mutate(e);
  addPreferenceMemory = async (e) => c.userMemories.toolAddPreferenceMemory.mutate(e);
  removeIdentityMemory = async (e) => c.userMemories.toolRemoveIdentityMemory.mutate(e);
  getMemoryDetail = async (e) => c.userMemories.getMemoryDetail.query(e);
  getPersona = async () => c.userMemory.getPersona.query();
  queryExperiences = async (e) => c.userMemories.queryExperiences.query(e);
  queryActivities = async (e) => c.userMemories.queryActivities.query(e);
  queryIdentities = async (e) => c.userMemories.queryIdentities.query(e);
  retrieveMemory = async (e) => c.userMemories.toolSearchMemory.query(e);
  retrieveMemoryForTopic = async (e) => c.userMemories.retrieveMemoryForTopic.query({ topicId: e });
  searchMemory = async (e) => c.userMemories.toolSearchMemory.query(e);
  queryTags = async (e) => c.userMemories.queryTags.query(e);
  queryIdentityRoles = async (e) => c.userMemories.queryIdentityRoles.query(e);
  queryIdentitiesForInjection = async (e) => c.userMemories.queryIdentitiesForInjection.query(e);
  queryMemories = async (e) => c.userMemories.queryMemories.query(e);
  updateIdentityMemory = async (e) => c.userMemories.toolUpdateIdentityMemory.mutate(e);
}
const p = new J(),
  V = Object.freeze(
    Object.defineProperty(
      { __proto__: null, memoryCRUDService: l, memoryExtractionService: G, userMemoryService: p },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  x = (o) => {
    const { query: e, topK: t } = o;
    return JSON.stringify({ query: e, topK: t ?? null });
  },
  S = v('userMemory/activity'),
  X = (o, e, t) => new Z(o, e, t);
class Z {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  deleteActivity = async (e) => {
    (await l.deleteActivity(e),
      this.#e().resetActivitiesList({
        q: this.#e().activitiesQuery,
        sort: this.#e().activitiesSort,
      }));
  };
  loadMoreActivities = () => {
    const { activitiesPage: e, activitiesTotal: t, activities: r } = this.#e();
    r.length < (t || 0) &&
      this.#t(
        y((s) => {
          s.activitiesPage = e + 1;
        }),
        !1,
        S('loadMoreActivities'),
      );
  };
  resetActivitiesList = (e) => {
    this.#t(
      y((t) => {
        ((t.activities = []),
          (t.activitiesPage = 1),
          (t.activitiesQuery = e?.q),
          (t.activitiesSearchLoading = !0),
          (t.activitiesSort = e?.sort));
      }),
      !1,
      S('resetActivitiesList'),
    );
  };
  useFetchActivities = (e) => {
    const r = [
        'useFetchActivities',
        e.page,
        e.pageSize,
        e.q,
        e.sort,
        e.status?.join(',') ?? '',
        e.types?.join(',') ?? '',
      ]
        .filter((n) => n != null && n !== '')
        .join('-'),
      s = e.page ?? 1;
    return M(
      r,
      async () =>
        p.queryActivities({
          page: e.page,
          pageSize: e.pageSize,
          q: e.q,
          sort: e.sort,
          status: e.status,
          types: e.types,
        }),
      {
        onSuccess: (n) => {
          this.#t(
            y((i) => {
              ((i.activitiesSearchLoading = !1),
                (i.activitiesTotal = n.total),
                i.activitiesInit || (i.activitiesInit = !0),
                s === 1
                  ? (i.activities = m(n.items, 'id'))
                  : (i.activities = m([...i.activities, ...n.items], 'id')),
                (i.activitiesHasMore = n.items.length >= (e.pageSize || 20)));
            }),
            !1,
            S('useFetchActivities/onSuccess'),
          );
        },
        revalidateOnFocus: !1,
      },
    );
  };
}
const R = {
    activities: [],
    activitiesHasMore: !0,
    activitiesInit: !1,
    activitiesPage: 1,
    activitiesQuery: void 0,
    activitiesSearchLoading: void 0,
    activitiesSort: void 0,
    activitiesTotal: 0,
  },
  w = v('userMemory/agent'),
  ee = (o, e, t) => new te(o, e, t);
class te {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  clearTopicMemories = (e) => {
    this.#t(
      { topicMemoriesMap: k(this.#e().topicMemoriesMap, [e]) },
      !1,
      w('clearTopicMemories', { topicId: e }),
    );
  };
  useFetchMemoriesForTopic = (e) =>
    _(e ? ['useFetchMemoriesForTopic', e] : null, async () => await p.retrieveMemoryForTopic(e), {
      onData: (t) => {
        !e ||
          !t ||
          this.#t(
            (r) => ({ topicMemoriesMap: { ...r.topicMemoriesMap, [e]: t } }),
            !1,
            w('useFetchMemoriesForTopic/success', {
              activitiesCount: t.activities?.length ?? 0,
              contextsCount: t.contexts?.length ?? 0,
              experiencesCount: t.experiences?.length ?? 0,
              preferencesCount: t.preferences?.length ?? 0,
              topicId: e,
            }),
          );
      },
      revalidateOnFocus: !1,
    });
}
const se = { topicMemoriesMap: {} },
  I = v('userMemory/context'),
  ie = (o, e, t) => new re(o, e, t);
class re {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  deleteContext = async (e) => {
    (await l.deleteContext(e),
      this.#e().resetContextsList({ q: this.#e().contextsQuery, sort: this.#e().contextsSort }));
  };
  loadMoreContexts = () => {
    const { contextsPage: e, contextsTotal: t, contexts: r } = this.#e();
    r.length < (t || 0) &&
      this.#t(
        y((s) => {
          s.contextsPage = e + 1;
        }),
        !1,
        I('loadMoreContexts'),
      );
  };
  resetContextsList = (e) => {
    this.#t(
      y((t) => {
        ((t.contexts = []),
          (t.contextsPage = 1),
          (t.contextsQuery = e?.q),
          (t.contextsSearchLoading = !0),
          (t.contextsSort = e?.sort));
      }),
      !1,
      I('resetContextsList'),
    );
  };
  useFetchContexts = (e) => {
    const r = ['useFetchContexts', e.page, e.pageSize, e.q, e.sort]
        .filter((n) => n != null && n !== '')
        .join('-'),
      s = e.page ?? 1;
    return M(
      r,
      async () =>
        await p.queryMemories({
          layer: u.Context,
          page: e.page,
          pageSize: e.pageSize,
          q: e.q,
          sort: e.sort,
        }),
      {
        onSuccess: (n) => {
          this.#t(
            y((i) => {
              ((i.contextsSearchLoading = !1), (i.contextsInit = !0), (i.contextsTotal = n.total));
              const d = n.items.map((a) => ({ ...a.memory, ...a.context, source: null }));
              (s === 1 ? (i.contexts = m(d, 'id')) : (i.contexts = m([...i.contexts, ...d], 'id')),
                (i.contextsHasMore = n.items.length >= (e.pageSize || 20)));
            }),
            !1,
            I('useFetchContexts/onSuccess'),
          );
        },
        revalidateOnFocus: !1,
      },
    );
  };
}
const K = {
    contexts: [],
    contextsHasMore: !0,
    contextsInit: !1,
    contextsPage: 1,
    contextsQuery: void 0,
    contextsSort: void 0,
    contextsTotal: 0,
  },
  f = v('userMemory/experience'),
  ne = (o, e, t) => new oe(o, e, t);
class oe {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  deleteExperience = async (e) => {
    (await l.deleteExperience(e),
      this.#e().resetExperiencesList({
        q: this.#e().experiencesQuery,
        sort: this.#e().experiencesSort,
      }));
  };
  loadMoreExperiences = () => {
    const { experiencesPage: e, experiencesTotal: t, experiences: r } = this.#e();
    r.length < (t || 0) &&
      this.#t(
        y((s) => {
          s.experiencesPage = e + 1;
        }),
        !1,
        f('loadMoreExperiences'),
      );
  };
  resetExperiencesList = (e) => {
    this.#t(
      y((t) => {
        ((t.experiences = []),
          (t.experiencesPage = 1),
          (t.experiencesQuery = e?.q),
          (t.experiencesSearchLoading = !0),
          (t.experiencesSort = e?.sort));
      }),
      !1,
      f('resetExperiencesList'),
    );
  };
  useFetchExperiences = (e) => {
    const r = ['useFetchExperiences', e.page, e.pageSize, e.q, e.sort]
        .filter((n) => n != null && n !== '')
        .join('-'),
      s = e.page ?? 1;
    return M(
      r,
      async () => p.queryExperiences({ page: e.page, pageSize: e.pageSize, q: e.q, sort: e.sort }),
      {
        onSuccess: (n) => {
          this.#t(
            y((i) => {
              ((i.experiencesSearchLoading = !1),
                (i.experiencesTotal = n.total),
                i.experiencesInit || (i.experiencesInit = !0),
                s === 1
                  ? (i.experiences = m(n.items, 'id'))
                  : (i.experiences = m([...i.experiences, ...n.items], 'id')),
                (i.experiencesHasMore = n.items.length >= (e.pageSize || 20)));
            }),
            !1,
            f('useFetchExperiences/onSuccess'),
          );
        },
        revalidateOnFocus: !1,
      },
    );
  };
}
const b = {
    experiences: [],
    experiencesHasMore: !0,
    experiencesInit: !1,
    experiencesPage: 1,
    experiencesQuery: void 0,
    experiencesSort: void 0,
    experiencesTotal: 0,
  },
  P = v('userMemory/identity'),
  ce = (o, e, t) => new ae(o, e, t);
class ae {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  createIdentity = async (e) => {
    const t = await l.createIdentity(e);
    return (
      this.#e().resetIdentitiesList({
        q: this.#e().identitiesQuery,
        relationships: this.#e().identitiesRelationships,
        sort: this.#e().identitiesSort,
        types: this.#e().identitiesTypes,
      }),
      t
    );
  };
  deleteIdentity = async (e) => {
    (await l.deleteIdentity(e),
      this.#e().resetIdentitiesList({
        q: this.#e().identitiesQuery,
        relationships: this.#e().identitiesRelationships,
        sort: this.#e().identitiesSort,
        types: this.#e().identitiesTypes,
      }));
  };
  loadMoreIdentities = () => {
    const { identitiesPage: e, identitiesTotal: t, identities: r } = this.#e();
    r.length < (t || 0) &&
      this.#t(
        y((s) => {
          s.identitiesPage = e + 1;
        }),
        !1,
        P('loadMoreIdentities'),
      );
  };
  resetIdentitiesList = (e) => {
    this.#t(
      y((t) => {
        ((t.identities = []),
          (t.identitiesPage = 1),
          (t.identitiesQuery = e?.q),
          (t.identitiesRelationships = e?.relationships),
          (t.identitiesSearchLoading = !0),
          (t.identitiesSort = e?.sort),
          (t.identitiesTypes = e?.types));
      }),
      !1,
      P('resetIdentitiesList'),
    );
  };
  updateIdentity = async (e, t) => {
    const r = await l.updateIdentity(e, t);
    return (
      this.#e().resetIdentitiesList({
        q: this.#e().identitiesQuery,
        relationships: this.#e().identitiesRelationships,
        sort: this.#e().identitiesSort,
        types: this.#e().identitiesTypes,
      }),
      r
    );
  };
  useFetchIdentities = (e) => {
    const r = [
        'useFetchIdentities',
        e.page,
        e.pageSize,
        e.q,
        e.relationships?.join(','),
        e.sort,
        e.types?.join(','),
      ]
        .filter((n) => n != null && n !== '')
        .join('-'),
      s = e.page ?? 1;
    return M(
      r,
      async () =>
        p.queryIdentities({
          page: e.page,
          pageSize: e.pageSize,
          q: e.q,
          relationships: e.relationships,
          sort: e.sort,
          types: e.types,
        }),
      {
        onSuccess: (n) => {
          this.#t(
            y((i) => {
              ((i.identitiesSearchLoading = !1),
                (i.identitiesTotal = n.total),
                i.identitiesInit || (i.identitiesInit = !0),
                s === 1
                  ? (i.identities = m(n.items, 'id'))
                  : (i.identities = m([...i.identities, ...n.items], 'id')),
                (i.identitiesHasMore = n.items.length >= (e.pageSize || 20)));
            }),
            !1,
            P('useFetchIdentities/onSuccess'),
          );
        },
        revalidateOnFocus: !1,
      },
    );
  };
}
const z = {
    globalIdentities: [],
    globalIdentitiesFetchedAt: void 0,
    globalIdentitiesInit: !1,
    identities: [],
    identitiesHasMore: !0,
    identitiesInit: !1,
    identitiesPage: 1,
    identitiesQuery: void 0,
    identitiesRelationships: void 0,
    identitiesSort: void 0,
    identitiesTotal: 0,
    identitiesTypes: void 0,
  },
  q = v('userMemory/preference'),
  ue = (o, e, t) => new ye(o, e, t);
class ye {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  deletePreference = async (e) => {
    (await l.deletePreference(e),
      this.#e().resetPreferencesList({
        q: this.#e().preferencesQuery,
        sort: this.#e().preferencesSort,
      }));
  };
  loadMorePreferences = () => {
    const { preferencesPage: e, preferencesTotal: t, preferences: r } = this.#e();
    r.length < (t || 0) &&
      this.#t(
        y((s) => {
          s.preferencesPage = e + 1;
        }),
        !1,
        q('loadMorePreferences'),
      );
  };
  resetPreferencesList = (e) => {
    this.#t(
      y((t) => {
        ((t.preferences = []),
          (t.preferencesPage = 1),
          (t.preferencesQuery = e?.q),
          (t.preferencesSearchLoading = !0),
          (t.preferencesSort = e?.sort));
      }),
      !1,
      q('resetPreferencesList'),
    );
  };
  useFetchPreferences = (e) => {
    const r = ['useFetchPreferences', e.page, e.pageSize, e.q, e.sort]
        .filter((n) => n != null && n !== '')
        .join('-'),
      s = e.page ?? 1;
    return M(
      r,
      async () =>
        await p.queryMemories({
          layer: u.Preference,
          page: e.page,
          pageSize: e.pageSize,
          q: e.q,
          sort: e.sort,
        }),
      {
        onSuccess: (n) => {
          this.#t(
            y((i) => {
              ((i.preferencesSearchLoading = !1),
                i.preferencesInit || ((i.preferencesInit = !0), (i.preferencesTotal = n.total)));
              const d = n.items.map((a) => ({ ...a.memory, ...a.preference }));
              (s === 1
                ? (i.preferences = m(d, 'id'))
                : (i.preferences = m([...i.preferences, ...d], 'id')),
                (i.preferencesHasMore = n.items.length >= (e.pageSize || 20)));
            }),
            !1,
            q('useFetchPreferences/onSuccess'),
          );
        },
        revalidateOnFocus: !1,
      },
    );
  };
}
const D = {
    preferences: [],
    preferencesHasMore: !0,
    preferencesInit: !1,
    preferencesPage: 1,
    preferencesQuery: void 0,
    preferencesSort: void 0,
    preferencesTotal: 0,
  },
  le = {
    ...R,
    ...se,
    ...K,
    ...b,
    ...z,
    ...D,
    activeParams: void 0,
    activeParamsKey: void 0,
    editingMemoryContent: void 0,
    editingMemoryId: void 0,
    editingMemoryLayer: void 0,
    memoryFetchedAtMap: {},
    memoryMap: {},
    persona: void 0,
    personaInit: !1,
    roles: [],
    tags: [],
    tagsInit: !1,
  },
  pe = (o) => {
    const e = $(o, (t) => T(t) && C(t).length > 0);
    if (T(e)) return C(e);
  },
  de = (o) => {
    const e = pe([
      o.topic?.historySummary,
      o.agent?.description,
      o.latestUserMessage,
      o.sendingMessage,
    ]);
    if (e) return { query: e, topK: { ...Y } };
  },
  A = 'SWR_FETCH_USER_MEMORY',
  g = v('userMemory'),
  he = (o, e, t) => new me(o, e, t);
class me {
  #e;
  #t;
  constructor(e, t, r) {
    ((this.#t = e), (this.#e = t));
  }
  clearEditingMemory = () => {
    this.#t(
      { editingMemoryContent: void 0, editingMemoryId: void 0, editingMemoryLayer: void 0 },
      !1,
      g('clearEditingMemory'),
    );
  };
  purgeAllMemories = async () => {
    const { memoryCRUDService: e } = await Q(
      async () => {
        const { memoryCRUDService: t } = await Promise.resolve().then(() => V);
        return { memoryCRUDService: t };
      },
      void 0,
    );
    (await e.deleteAll(),
      this.#t(
        y((t) => {
          (Object.assign(t, R),
            Object.assign(t, K),
            Object.assign(t, b),
            Object.assign(t, z),
            Object.assign(t, D),
            (t.activeParams = void 0),
            (t.activeParamsKey = void 0),
            (t.editingMemoryContent = void 0),
            (t.editingMemoryId = void 0),
            (t.editingMemoryLayer = void 0),
            (t.memoryFetchedAtMap = {}),
            (t.memoryMap = {}),
            (t.persona = void 0),
            (t.personaInit = !0),
            (t.roles = []),
            (t.tags = []),
            (t.tagsInit = !0));
        }),
        !1,
        g('purgeAllMemories'),
      ),
      await Promise.all([
        h((t) => typeof t == 'string' && t.startsWith('memoryDetail-'), void 0, { revalidate: !0 }),
        h((t) => typeof t == 'string' && t.startsWith('useFetchActivities'), void 0, {
          revalidate: !0,
        }),
        h((t) => typeof t == 'string' && t.startsWith('useFetchContexts'), void 0, {
          revalidate: !0,
        }),
        h((t) => typeof t == 'string' && t.startsWith('useFetchExperiences'), void 0, {
          revalidate: !0,
        }),
        h((t) => typeof t == 'string' && t.startsWith('useFetchIdentities'), void 0, {
          revalidate: !0,
        }),
        h((t) => typeof t == 'string' && t.startsWith('useFetchPreferences'), void 0, {
          revalidate: !0,
        }),
        h((t) => Array.isArray(t) && t[0] === A, void 0, { revalidate: !0 }),
        h('useFetchPersona', null, { revalidate: !1 }),
        h('useFetchTags', { roles: [], tags: [] }, { revalidate: !1 }),
      ]));
  };
  refreshUserMemory = async (e) => {
    const t = x(e);
    await h([A, t]);
  };
  setActiveMemoryContext = (e) => {
    const t = e ? de(e) : void 0,
      r = t ? x(t) : void 0;
    this.#t({ activeParams: t, activeParamsKey: r }, !1, g('setActiveMemoryContext', { key: r }));
  };
  setEditingMemory = (e, t, r) => {
    this.#t(
      { editingMemoryContent: t, editingMemoryId: e, editingMemoryLayer: r },
      !1,
      g('setEditingMemory', { id: e, layer: r }),
    );
  };
  updateMemory = async (e, t, r) => {
    const {
      resetActivitiesList: s,
      resetContextsList: n,
      resetExperiencesList: i,
      resetIdentitiesList: d,
      resetPreferencesList: a,
    } = this.#e();
    switch (r) {
      case u.Activity: {
        (await l.updateActivity(e, { narrative: t }),
          s({ q: this.#e().activitiesQuery, sort: this.#e().activitiesSort }));
        break;
      }
      case u.Context: {
        (await l.updateContext(e, { description: t }),
          n({ q: this.#e().contextsQuery, sort: this.#e().contextsSort }));
        break;
      }
      case u.Experience: {
        (await l.updateExperience(e, { keyLearning: t }),
          i({ q: this.#e().experiencesQuery, sort: this.#e().experiencesSort }));
        break;
      }
      case u.Identity: {
        (await l.updateIdentity(e, { description: t }),
          d({ q: this.#e().identitiesQuery, types: this.#e().identitiesTypes }));
        break;
      }
      case u.Preference: {
        (await l.updatePreference(e, { conclusionDirectives: t }),
          a({ q: this.#e().preferencesQuery, sort: this.#e().preferencesSort }));
        break;
      }
    }
    this.#e().clearEditingMemory();
  };
  useFetchMemoryDetail = (e, t) => {
    const r = e ? `memoryDetail-${t}-${e}` : null;
    return M(
      r,
      async () => {
        if (!e) return null;
        const s = await p.getMemoryDetail({ id: e, layer: t });
        if (!s) return null;
        switch (t) {
          case u.Activity: {
            if (s.layer === u.Activity)
              return { ...s.memory, ...s.activity, source: s.source, sourceType: s.sourceType };
            break;
          }
          case u.Context: {
            if (s.layer === u.Context)
              return { ...s.memory, ...s.context, source: s.source, sourceType: s.sourceType };
            break;
          }
          case u.Experience: {
            if (s.layer === u.Experience)
              return { ...s.memory, ...s.experience, source: s.source, sourceType: s.sourceType };
            break;
          }
          case u.Identity: {
            if (s.layer === u.Identity)
              return { ...s.memory, ...s.identity, source: s.source, sourceType: s.sourceType };
            break;
          }
          case u.Preference: {
            if (s.layer === u.Preference)
              return { ...s.memory, ...s.preference, source: s.source, sourceType: s.sourceType };
            break;
          }
        }
        return null;
      },
      { revalidateOnFocus: !1 },
    );
  };
  useFetchUserMemory = (e, t) => {
    const r = t ?? this.#e().activeParams,
      s = r ? x(r) : void 0;
    return F(e && r ? [A, s] : null, () => p.retrieveMemory(r), {
      onSuccess: (n) => {
        if (!r || !s) return;
        const i = this.#e(),
          d = i.memoryMap[s],
          a = n ?? { activities: [], contexts: [], experiences: [], preferences: [] },
          E = Date.now();
        if (d && O(d, a)) {
          this.#t(
            { memoryFetchedAtMap: { ...i.memoryFetchedAtMap, [s]: E } },
            !1,
            g('useFetchUserMemory/refresh', {
              key: s,
              totals: {
                activities: a.activities.length,
                contexts: a.contexts.length,
                experiences: a.experiences.length,
                preferences: a.preferences.length,
              },
            }),
          );
          return;
        }
        this.#t(
          {
            memoryFetchedAtMap: { ...i.memoryFetchedAtMap, [s]: E },
            memoryMap: { ...i.memoryMap, [s]: a },
          },
          !1,
          g('useFetchUserMemory/success', {
            key: s,
            totals: {
              activities: a.activities.length,
              contexts: a.contexts.length,
              experiences: a.experiences.length,
              preferences: a.preferences.length,
            },
          }),
        );
      },
    });
  };
  useInitIdentities = (e) =>
    _(e ? 'useInitIdentities' : null, () => p.queryIdentitiesForInjection({ limit: 25 }), {
      onSuccess: (t) => {
        if (!t) return;
        const r = Date.now();
        this.#t(
          { globalIdentities: t, globalIdentitiesFetchedAt: r, globalIdentitiesInit: !0 },
          !1,
          g('useInitIdentities/success', { count: t.length }),
        );
      },
    });
}
const ge = 'useFetchTags',
  ve = 'useFetchPersona',
  L = (o) => o,
  Me = (o, e, t) => new xe(o, e, t);
class xe {
  #e;
  constructor(e, t, r) {
    this.#e = e;
  }
  useFetchPersona = (e = !0) =>
    F(e ? ve : null, () => p.getPersona(), {
      onSuccess: (t) => {
        this.#e({ persona: t ?? void 0, personaInit: !0 }, !1, L('useFetchPersona/onSuccess'));
      },
    });
  useFetchTags = () =>
    F(ge, () => p.queryIdentityRoles({ page: 1, size: 64 }), {
      onSuccess: (e) => {
        this.#e(
          {
            roles: e?.roles.map((t) => ({ count: t.count, tag: t.role })) || [],
            tags: e?.tags || [],
            tagsInit: !0,
          },
          !1,
          L('useFetchTags/onSuccess'),
        );
      },
    });
}
const Se = (o, e, t) => ({
    ...le,
    ...W([
      X(o, e, t),
      ee(o, e, t),
      he(o, e, t),
      ie(o, e, t),
      ne(o, e, t),
      Me(o, e, t),
      ce(o, e, t),
      ue(o, e, t),
    ]),
  }),
  Ie = H('userMemory'),
  fe = U()(Ie(Se), j),
  Ee = () => fe.getState();
export { p as a, Ee as g, G as m, fe as u };
