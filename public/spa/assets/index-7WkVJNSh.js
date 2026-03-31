import {
  u as m,
  dt as R,
  n as f,
  i as h,
  du as g,
  V as E,
  k9 as v,
  cI as l,
  az as T,
  f9 as w,
  w as N,
  v as U,
  eU as L,
  gW as K,
  ka as B,
  R as H,
  fr as S,
  aL as W,
  at as $,
  cF as k,
  cG as Y,
  au as j,
  dv as q,
  cE as z,
} from './index-C8UyLGsD.js';
import { d as V, b as y } from './store-8fdqmFXe.js';
import { u as _, a0 as X, e4 as J } from './index-Br6hqyew.js';
import { t as Q, s as c } from './index-BrpHwoCT.js';
const Z = { homeInputLoading: !1, inputActiveMode: null },
  ee = {
    isRecentPagesInit: !1,
    isRecentResourcesInit: !1,
    isRecentTopicsInit: !1,
    recentPages: [],
    recentResources: [],
    recentTopics: [],
  },
  se = {
    activeId: 'inbox',
    allAgentsDrawerOpen: !1,
    defaultSessions: [],
    isAgentPinned: !1,
    isSearching: !1,
    isSessionsFirstFetchFinished: !1,
    pinnedSessions: [],
    searchKeywords: '',
    sessionRenamingId: null,
    sessionUpdatingId: null,
    sessions: [],
  },
  te = {
    customSessionGroups: [],
    sessionGroupRenamingId: null,
    sessionGroupUpdatingId: null,
    sessionGroups: [],
  },
  ne = { ...te, ...se, ...ee, ...Z },
  u = R('homeInput'),
  ie = (t, e, s) => new oe(t, e, s);
class oe {
  #e;
  #s;
  constructor(e, s, n) {
    ((this.#s = e), (this.#e = s));
  }
  clearInputMode = () => {
    this.#s({ inputActiveMode: null }, !1, u('clearInputMode'));
  };
  sendAsAgent = async (e) => {
    this.#s({ homeInputLoading: !0 }, !1, u('sendAsAgent/start'));
    try {
      const s = await this.#e().createSession(
          { config: { systemRole: e }, meta: { title: e?.slice(0, 50) || 'New Agent' } },
          !1,
        ),
        n = m.getState().navigate;
      n && n(`/agent/${s}/profile`);
      const { sendMessage: i } = _.getState();
      return (
        await i({ context: { agentId: s, scope: 'agent_builder' }, message: e }),
        this.#s({ inputActiveMode: null }, !1, u('sendAsAgent/clearMode')),
        s
      );
    } finally {
      this.#s({ homeInputLoading: !1 }, !1, u('sendAsAgent/end'));
    }
  };
  sendAsImage = () => {
    const e = m.getState().navigate;
    (e && e('/image'), this.#s({ inputActiveMode: null }, !1, u('sendAsImage')));
  };
  sendAsResearch = async (e) => {
    (console.info('sendAsResearch:', e),
      this.#s({ inputActiveMode: null }, !1, u('sendAsResearch')));
  };
  sendAsWrite = async (e) => {
    this.#s({ homeInputLoading: !0 }, !1, u('sendAsWrite/start'));
    try {
      const s = await V.createDocument({ editorData: '', title: e?.slice(0, 50) || 'Untitled' }),
        n = m.getState().navigate;
      n && n(`/page/${s.id}`);
      const { sendMessage: i } = _.getState();
      return (
        await i({ context: { agentId: s.id, scope: 'page' }, message: e }),
        this.#s({ inputActiveMode: null }, !1, u('sendAsWrite/clearMode')),
        s.id
      );
    } finally {
      this.#s({ homeInputLoading: !1 }, !1, u('sendAsWrite/end'));
    }
  };
  setInputActiveMode = (e) => {
    this.#s({ inputActiveMode: e }, !1, u('setInputActiveMode', e));
  };
}
const I = R('recent'),
  ae = 'fetchRecentTopics',
  re = 'fetchRecentResources',
  ce = 'fetchRecentPages',
  ue = (t, e, s) => new le(t, e, s);
class le {
  #e;
  #s;
  constructor(e, s, n) {
    ((this.#s = e), (this.#e = s));
  }
  useFetchRecentPages = (e) =>
    f(e === !0 ? [ce, e] : null, async () => y.getRecentPages(12), {
      onSuccess: (s) => {
        (this.#e().isRecentPagesInit && h(this.#e().recentPages, s)) ||
          this.#s(
            { isRecentPagesInit: !0, recentPages: s },
            !1,
            I('useFetchRecentPages/onSuccess'),
          );
      },
    });
  useFetchRecentResources = (e) =>
    f(e === !0 ? [re, e] : null, async () => y.getRecentFiles(12), {
      onSuccess: (s) => {
        (this.#e().isRecentResourcesInit && h(this.#e().recentResources, s)) ||
          this.#s(
            { isRecentResourcesInit: !0, recentResources: s },
            !1,
            I('useFetchRecentResources/onSuccess'),
          );
      },
    });
  useFetchRecentTopics = (e) =>
    f(e === !0 ? [ae, e] : null, async () => Q.getRecentTopics(12), {
      onSuccess: (s) => {
        (this.#e().isRecentTopicsInit && h(this.#e().recentTopics, s)) ||
          this.#s(
            { isRecentTopicsInit: !0, recentTopics: s },
            !1,
            I('useFetchRecentTopics/onSuccess'),
          );
      },
    });
}
const de = (t, e) => {
    switch (e.type) {
      case 'addSession':
        return g(t, (s) => {
          const { session: n } = e;
          n && s.unshift({ ...n, createdAt: new Date(), updatedAt: new Date() });
        });
      case 'removeSession':
        return g(t, (s) => {
          const n = s.findIndex((i) => i.id === e.id);
          n !== -1 && s.splice(n, 1);
        });
      case 'updateSession':
        return g(t, (s) => {
          const { value: n, id: i } = e,
            r = s.findIndex((a) => a.id === i);
          r !== -1 && (s[r] = { ...s[r], ...n, updatedAt: new Date() });
        });
      default:
        return g(t, () => {});
    }
  },
  Se = (t) => t.pinned,
  pe = (t) => t.avatar || E,
  he = (t) => t.title || l('defaultSession', { ns: 'common' }),
  ge = (t, e) => {
    const s = e.find((n) => n.id === t);
    return s || v;
  },
  fe = { getAvatar: pe, getSessionById: ge, getSessionPinned: Se, getTitle: he },
  M = (t) => t.defaultSessions,
  Ae = (t) => (e) => e.defaultSessions.slice(0, t),
  me = (t) => t.defaultSessions.length,
  Ie = (t) => t.pinnedSessions,
  we = (t) => t.customSessionGroups,
  P = (t) => t.sessions,
  D = (t) => (e) => fe.getSessionById(t, P(e)),
  Ge = (t) => (e) => {
    const s = D(t)(e);
    return s ? s.meta : {};
  },
  A = (t) => {
    if (t.activeId) return P(t).find((e) => e.id === t.activeId);
  },
  Re = (t) => A(t) || v,
  ve = (t) => M(t).length > 0,
  ye = (t) => t.activeId === T,
  _e = (t) => A(t)?.type === 'group',
  Fe = (t) => {
    const e = A(t);
    return e && e.type !== 'group' ? [] : e ? (e.members ?? []) : [];
  },
  O = (t) => t.isSessionsFirstFetchFinished,
  Ee = (t) => !!t.activeId && O(t),
  G = {
    currentGroupAgents: Fe,
    currentSession: A,
    currentSessionSafe: Re,
    customSessionGroups: we,
    defaultSessions: M,
    defaultSessionsCount: me,
    defaultSessionsLimited: Ae,
    getSessionById: D,
    getSessionMetaById: Ge,
    hasCustomAgents: ve,
    isCurrentSessionGroupSession: _e,
    isInboxSession: ye,
    isSessionListInit: O,
    isSomeSessionActive: Ee,
    pinnedSessions: Ie,
  },
  Te = (t) => {
    const e = {
        description: l('group.desc', { ns: 'chat' }),
        title: l('group.title', { ns: 'chat' }),
      },
      s = G.currentSession(t);
    return w(e, s?.meta);
  },
  Me = (t) => t.avatar || E,
  Pe = (t) => t.title || l('defaultSession', { ns: 'common' }),
  De = (t) => t.description,
  Oe = { currentGroupMeta: Te, getAvatar: Me, getDescription: De, getTitle: Pe },
  d = R('session'),
  F = 'fetchSessions',
  Ce = 'searchSessions',
  be = (t, e, s) => new xe(t, e, s);
class xe {
  #e;
  #s;
  constructor(e, s, n) {
    ((this.#s = e), (this.#e = s));
  }
  clearSessions = async () => {
    (await c.removeAllSessions(), await this.#e().refreshSessions());
  };
  closeAllAgentsDrawer = () => {
    this.#s({ allAgentsDrawerOpen: !1 }, !1, d('closeAllAgentsDrawer'));
  };
  createSession = async (e, s = !0) => {
    const { switchSession: n, refreshSessions: i } = this.#e(),
      r = w(v, N.defaultAgent(U.getState())),
      a = w(r, e),
      o = await c.createSession(L.Agent, a);
    await i();
    const p = K();
    if (p) {
      const b = B(),
        x = H.userId(b);
      p.track({
        name: 'new_agent_created',
        properties: {
          assistant_name: a.meta?.title || 'Untitled Agent',
          assistant_tags: a.meta?.tags || [],
          session_id: o,
          user_id: x || 'anonymous',
        },
      });
    }
    return (s && n(o), o);
  };
  duplicateSession = async (e) => {
    const { switchSession: s, refreshSessions: n } = this.#e(),
      i = G.getSessionById(e)(this.#e());
    if (!i) return;
    const r = Oe.getTitle(i.meta),
      a = l('duplicateSession.title', { ns: 'chat', title: r }),
      o = 'duplicateSession.loading';
    S.loading({ content: l('duplicateSession.loading', { ns: 'chat' }), duration: 0, key: o });
    const p = await c.cloneSession(e, a);
    if (!p) {
      (S.destroy(o), S.error(l('copyFail', { ns: 'common' })));
      return;
    }
    (await n(), S.destroy(o), S.success(l('duplicateSession.success', { ns: 'chat' })), s(p));
  };
  openAllAgentsDrawer = () => {
    this.#s({ allAgentsDrawerOpen: !0 }, !1, d('openAllAgentsDrawer'));
  };
  pinSession = async (e, s) => {
    await this.#e().internal_updateSession(e, { pinned: s });
  };
  removeSession = async (e) => {
    (await c.removeSession(e),
      await this.#e().refreshSessions(),
      e === this.#e().activeId && this.#e().switchSession(T));
  };
  setAgentPinned = (e) => {
    this.#s(
      (s) => ({ isAgentPinned: typeof e == 'function' ? e(s.isAgentPinned) : e }),
      !1,
      d('setAgentPinned'),
    );
  };
  switchSession = (e) => {
    this.#e().activeAgentId !== e && this.#s({ activeAgentId: e }, !1, d(`activeSession/${e}`));
  };
  toggleAgentPinned = () => {
    this.#s((e) => ({ isAgentPinned: !e.isAgentPinned }), !1, d('toggleAgentPinned'));
  };
  triggerSessionUpdate = async (e) => {
    await this.#e().internal_updateSession(e, { updatedAt: new Date() });
  };
  updateSearchKeywords = (e) => {
    this.#s({ isSearching: !!e, sessionSearchKeywords: e }, !1, d('updateSearchKeywords'));
  };
  updateSessionGroupId = async (e, s) => {
    G.getSessionById(e)(this.#e())?.type === 'group'
      ? (await X.updateGroup(e, { groupId: s === 'default' ? null : s }),
        await this.#e().refreshSessions())
      : await this.#e().internal_updateSession(e, { group: s });
  };
  useFetchSessions = (e, s) =>
    f(e ? [F, s] : null, () => c.getGroupedSessions(), {
      fallbackData: { sessionGroups: [], sessions: [] },
      onSuccess: (n) => {
        if (
          this.#e().isSessionsFirstFetchFinished &&
          h(this.#e().sessions, n.sessions) &&
          h(this.#e().sessionGroups, n.sessionGroups)
        )
          return;
        this.#e().internal_processSessions(n.sessions, n.sessionGroups);
        const i = n.sessions.filter((r) => r.type === 'group');
        if (i.length > 0) {
          const r = J(),
            a = i.map((o) => ({
              accessedAt: o.updatedAt,
              avatar: null,
              backgroundColor: null,
              clientId: null,
              config: null,
              content: null,
              createdAt: o.createdAt,
              description: o.meta?.description || '',
              editorData: null,
              groupId: o.group || null,
              id: o.id,
              marketIdentifier: null,
              pinned: o.pinned || !1,
              slug: null,
              title: o.meta?.title || 'Untitled Group',
              updatedAt: o.updatedAt,
              userId: '',
            }));
          r.internal_updateGroupMaps(a);
        }
        this.#s({ isSessionsFirstFetchFinished: !0 }, !1, d('useFetchSessions/onSuccess', n));
      },
      suspense: !0,
    });
  useSearchSessions = (e) =>
    W([Ce, e], async () => (e ? c.searchSessions(e) : []), {
      revalidateOnFocus: !1,
      revalidateOnMount: !1,
    });
  internal_dispatchSessions = (e) => {
    const s = de(this.#e().sessions, e);
    this.#e().internal_processSessions(s, this.#e().sessionGroups);
  };
  internal_updateSession = async (e, s) => {
    (this.#e().internal_dispatchSessions({ id: e, type: 'updateSession', value: s }),
      await c.updateSession(e, s),
      await this.#e().refreshSessions());
  };
  internal_processSessions = (e, s) => {
    const n = s.map((a) => ({ ...a, children: e.filter((o) => o.group === a.id && !o.pinned) })),
      i = e.filter((a) => (!a.group || a.group === 'default') && !a.pinned),
      r = e.filter((a) => a.pinned);
    this.#s(
      {
        customSessionGroups: n,
        defaultSessions: i,
        pinnedSessions: r,
        sessionGroups: s,
        sessions: e,
      },
      !1,
      d('processSessions'),
    );
  };
  refreshSessions = async () => {
    await $([F, !0]);
  };
}
const Ne = (t, e) => {
    switch (e.type) {
      case 'addSessionGroupItem':
        return [...t, e.item];
      case 'deleteSessionGroupItem':
        return t.filter((s) => s.id !== e.id);
      case 'updateSessionGroupItem':
        return t.map((s) => (s.id === e.id ? { ...s, ...e.item } : s));
      case 'updateSessionGroupOrder':
        return t
          .map((s) => {
            const n = e.sortMap.find((i) => i.id === s.id)?.sort;
            return { ...s, sort: n };
          })
          .sort((s, n) => (s.sort || 0) - (n.sort || 0));
      default:
        return t;
    }
  },
  Ue = (t, e, s) => new Le(t, e, s);
class Le {
  #e;
  constructor(e, s, n) {
    this.#e = s;
  }
  addSessionGroup = async (e) => {
    const s = await c.createSessionGroup(e);
    return (await this.#e().refreshSessions(), s);
  };
  clearSessionGroups = async () => {
    (await c.removeSessionGroups(), await this.#e().refreshSessions());
  };
  removeSessionGroup = async (e) => {
    (await c.removeSessionGroup(e), await this.#e().refreshSessions());
  };
  updateSessionGroupName = async (e, s) => {
    (await c.updateSessionGroup(e, { name: s }), await this.#e().refreshSessions());
  };
  updateSessionGroupSort = async (e) => {
    const s = e.map((n, i) => ({ id: n.id, sort: i }));
    (this.#e().internal_dispatchSessionGroups({ sortMap: s, type: 'updateSessionGroupOrder' }),
      S.loading({
        content: l('sessionGroup.sorting', { ns: 'chat' }),
        duration: 0,
        key: 'updateSessionGroupSort',
      }),
      await c.updateSessionGroupOrder(s),
      S.destroy('updateSessionGroupSort'),
      S.success(l('sessionGroup.sortSuccess', { ns: 'chat' })),
      await this.#e().refreshSessions());
  };
  internal_dispatchSessionGroups = (e) => {
    const s = Ne(this.#e().sessionGroups, e);
    this.#e().internal_processSessions(this.#e().sessions, s);
  };
}
const Ke = (...t) => ({ ...ne, ...z([be(...t), Ue(...t), ue(...t), ie(...t)]) }),
  Be = q('session'),
  C = k()(Y(Be(Ke, { name: 'LobeChat_Session' })), j),
  He = () => C.getState(),
  je = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getSessionStoreState: He, useSessionStore: C },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { He as g, je as i, G as s, C as u };
