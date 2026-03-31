import {
  a_ as s,
  aL as n,
  n as c,
  eJ as u,
  cF as v,
  au as f,
  dv as d,
  cE as S,
} from './index-C8UyLGsD.js';
import { g as a, d as l } from './discover-H7COHXvN.js';
class F {
  setAccessToken(e) {}
  async follow(e) {
    await s.market.social.follow.mutate({ followingId: e });
  }
  async unfollow(e) {
    await s.market.social.unfollow.mutate({ followingId: e });
  }
  async checkFollowStatus(e) {
    return s.market.social.checkFollowStatus.query({ targetUserId: e });
  }
  async getFollowCounts(e) {
    return s.market.social.getFollowCounts.query({ userId: e });
  }
  async getFollowing(e, t) {
    return s.market.social.getFollowing.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
  async getFollowers(e, t) {
    return s.market.social.getFollowers.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
  async addFavorite(e, t) {
    const o =
      typeof t == 'string' ? { identifier: t, targetType: e } : { targetId: t, targetType: e };
    await s.market.social.addFavorite.mutate(o);
  }
  async removeFavorite(e, t) {
    const o =
      typeof t == 'string' ? { identifier: t, targetType: e } : { targetId: t, targetType: e };
    await s.market.social.removeFavorite.mutate(o);
  }
  async checkFavoriteStatus(e, t) {
    return s.market.social.checkFavorite.query({ targetIdOrIdentifier: t, targetType: e });
  }
  async getMyFavorites(e) {
    return s.market.social.getMyFavorites.query({
      limit: e?.pageSize,
      offset: e?.page ? (e.page - 1) * (e.pageSize || 10) : void 0,
    });
  }
  async getUserFavoriteAgents(e, t) {
    return s.market.social.getUserFavoriteAgents.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
  async getUserFavoritePlugins(e, t) {
    return s.market.social.getUserFavoritePlugins.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
  async like(e, t) {
    const o =
      typeof t == 'string' ? { identifier: t, targetType: e } : { targetId: t, targetType: e };
    await s.market.social.like.mutate(o);
  }
  async unlike(e, t) {
    const o =
      typeof t == 'string' ? { identifier: t, targetType: e } : { targetId: t, targetType: e };
    await s.market.social.unlike.mutate(o);
  }
  async checkLikeStatus(e, t) {
    return s.market.social.checkLike.query({ targetIdOrIdentifier: t, targetType: e });
  }
  async toggleLike(e, t) {
    const o =
      typeof t == 'string' ? { identifier: t, targetType: e } : { targetId: t, targetType: e };
    return s.market.social.toggleLike.mutate(o);
  }
  async getUserLikedAgents(e, t) {
    return s.market.social.getUserLikedAgents.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
  async getUserLikedPlugins(e, t) {
    return s.market.social.getUserLikedPlugins.query({
      limit: t?.pageSize,
      offset: t?.page ? (t.page - 1) * (t.pageSize || 10) : void 0,
      userId: e,
    });
  }
}
const r = new F(),
  y = (i, e, t) => new w(i, e, t);
class w {
  constructor(e, t, o) {}
  useAssistantCategories = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['assistant-categories', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () => l.getAssistantCategories(e),
      { revalidateOnFocus: !1 },
    );
  };
  useAssistantDetail = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['assistant-details', t, e.identifier, e.version, e.source].filter(Boolean).join('-'),
      async () => l.getAssistantDetail(e),
      { revalidateOnFocus: !1 },
    );
  };
  useAssistantIdentifiers = (e) =>
    n(
      ['assistant-identifiers', e?.source].filter(Boolean).join('-') || 'assistant-identifiers',
      async () => l.getAssistantIdentifiers(e),
      { revalidateOnFocus: !1 },
    );
  useAssistantList = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['assistant-list', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () =>
        l.getAssistantList({
          ...e,
          page: e.page ? Number(e.page) : 1,
          pageSize: e.pageSize ? Number(e.pageSize) : 21,
        }),
      { revalidateOnFocus: !1 },
    );
  };
}
const p = (i, e, t) => new k(i, e, t);
class k {
  constructor(e, t, o) {}
  useGroupAgentCategories = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['group-agent-categories', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () => l.getGroupAgentCategories(e),
      { revalidateOnFocus: !1 },
    );
  };
  useGroupAgentDetail = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['group-agent-details', t, e.identifier, e.version].filter(Boolean).join('-'),
      async () => l.getGroupAgentDetail(e),
      { revalidateOnFocus: !1 },
    );
  };
  useGroupAgentIdentifiers = () =>
    n('group-agent-identifiers', async () => l.getGroupAgentIdentifiers(), {
      revalidateOnFocus: !1,
    });
  useGroupAgentList = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['group-agent-list', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () =>
        l.getGroupAgentList({
          ...e,
          page: e.page ? Number(e.page) : 1,
          pageSize: e.pageSize ? Number(e.pageSize) : 20,
        }),
      { revalidateOnFocus: !1 },
    );
  };
}
const L = (i, e, t) => new j(i, e, t);
class j {
  constructor(e, t, o) {}
  useFetchMcpDetail = ({ identifier: e, version: t }) => {
    const o = a.getCurrentLanguage();
    return c(e ? ['mcp-detail', o, e, t].filter(Boolean).join('-') : null, async () =>
      l.getMcpDetail({ identifier: e, version: t }),
    );
  };
  useFetchMcpList = (e) => {
    const t = a.getCurrentLanguage();
    return c(['mcp-list', t, ...Object.values(e)].filter(Boolean).join('-'), async () =>
      l.getMcpList({
        ...e,
        page: e.page ? Number(e.page) : 1,
        pageSize: e.pageSize ? Number(e.pageSize) : 21,
      }),
    );
  };
  useMcpCategories = (e) => {
    const t = a.getCurrentLanguage();
    return c(
      ['mcp-categories', t, ...Object.values(e)].join('-'),
      async () => l.getMcpCategories(e),
      { revalidateOnFocus: !1 },
    );
  };
}
const C = (i, e, t) => new z(i, e, t);
class z {
  constructor(e, t, o) {}
  useModelCategories = (e) =>
    n(
      ['model-categories', ...Object.values(e)].filter(Boolean).join('-'),
      async () => l.getModelCategories(e),
      { revalidateOnFocus: !1 },
    );
  useModelDetail = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['model-details', t, e.identifier].filter(Boolean).join('-'),
      async () => l.getModelDetail(e),
      { revalidateOnFocus: !1 },
    );
  };
  useModelIdentifiers = () =>
    n('model-identifiers', async () => l.getModelIdentifiers(), { revalidateOnFocus: !1 });
  useModelList = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['model-list', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () =>
        l.getModelList({
          ...e,
          page: e.page ? Number(e.page) : 1,
          pageSize: e.pageSize ? Number(e.pageSize) : 21,
        }),
      { revalidateOnFocus: !1 },
    );
  };
}
const A = (i, e, t) => new O(i, e, t);
class O {
  constructor(e, t, o) {}
  usePluginCategories = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['plugin-categories', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () => l.getPluginCategories(e),
      { revalidateOnFocus: !1 },
    );
  };
  usePluginDetail = ({ identifier: e, withManifest: t }) => {
    const o = a.getCurrentLanguage();
    return n(
      e ? ['plugin-details', o, e, t].filter(Boolean).join('-') : null,
      async () => l.getPluginDetail({ identifier: e, withManifest: t }),
      { revalidateOnFocus: !1 },
    );
  };
  usePluginIdentifiers = () =>
    n('plugin-identifiers', async () => l.getPluginIdentifiers(), { revalidateOnFocus: !1 });
  usePluginList = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['plugin-list', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () =>
        l.getPluginList({
          ...e,
          page: e.page ? Number(e.page) : 1,
          pageSize: e.pageSize ? Number(e.pageSize) : 21,
        }),
      { revalidateOnFocus: !1 },
    );
  };
}
const b = (i, e, t) => new P(i, e, t);
class P {
  constructor(e, t, o) {}
  useProviderDetail = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      ['provider-details', t, e.identifier].filter(Boolean).join('-'),
      async () => l.getProviderDetail(e),
      { revalidateOnFocus: !1 },
    );
  };
  useProviderIdentifiers = () =>
    n('provider-identifiers', async () => l.getProviderIdentifiers(), { revalidateOnFocus: !1 });
  useProviderList = (e = {}) => {
    const t = a.getCurrentLanguage();
    return n(
      ['provider-list', t, ...Object.values(e)].filter(Boolean).join('-'),
      async () =>
        l.getProviderList({
          ...e,
          page: e.page ? Number(e.page) : 1,
          pageSize: e.pageSize ? Number(e.pageSize) : 21,
        }),
      { revalidateOnFocus: !1 },
    );
  };
}
const B = (i, e, t) => new M(i, e, t);
class M {
  constructor(e, t, o) {}
  useFetchSkillDetail = ({ identifier: e, version: t }) => {
    const o = a.getCurrentLanguage();
    return c(e ? ['skill-detail', o, e, t].filter(Boolean).join('-') : null, async () =>
      l.getSkillDetail({ identifier: e, version: t }),
    );
  };
  useFetchSkillList = (e) => {
    const t = a.getCurrentLanguage();
    return c(['skill-list', t, ...Object.values(e)].filter(Boolean).join('-'), async () =>
      l.getSkillList({
        ...e,
        page: e.page ? Number(e.page) : 1,
        pageSize: e.pageSize ? Number(e.pageSize) : 21,
      }),
    );
  };
  useSkillCategories = (e = {}) => {
    const t = a.getCurrentLanguage();
    return c(
      ['skill-categories', t, ...Object.values(e)].join('-'),
      async () => l.getSkillCategories(e),
      { revalidateOnFocus: !1 },
    );
  };
}
const h = (i, e, t) => new D(i, e, t);
class D {
  constructor(e, t, o) {}
  addFavorite = async (e, t) => {
    (await r.addFavorite(e, t),
      await u((o) => typeof o == 'string' && o.startsWith('favorite-'), void 0, {
        revalidate: !0,
      }));
  };
  follow = async (e) => {
    (await r.follow(e),
      await u((t) => typeof t == 'string' && t.startsWith('follow-'), void 0, { revalidate: !0 }));
  };
  removeFavorite = async (e, t) => {
    (await r.removeFavorite(e, t),
      await u((o) => typeof o == 'string' && o.startsWith('favorite-'), void 0, {
        revalidate: !0,
      }));
  };
  toggleLike = async (e, t) => {
    const o = await r.toggleLike(e, t);
    return (
      await u((g) => typeof g == 'string' && g.startsWith('liked-'), void 0, { revalidate: !0 }),
      o
    );
  };
  unfollow = async (e) => {
    (await r.unfollow(e),
      await u((t) => typeof t == 'string' && t.startsWith('follow-'), void 0, { revalidate: !0 }));
  };
  useFavoriteAgents = (e, t) =>
    n(
      e ? ['favorite-agents', e, t?.page, t?.pageSize].join('-') : null,
      async () => r.getUserFavoriteAgents(e, t),
      { revalidateOnFocus: !1 },
    );
  useFavoritePlugins = (e, t) =>
    n(
      e ? ['favorite-plugins', e, t?.page, t?.pageSize].join('-') : null,
      async () => r.getUserFavoritePlugins(e, t),
      { revalidateOnFocus: !1 },
    );
  useFollowCounts = (e) =>
    n(e ? ['follow-counts', e].join('-') : null, async () => r.getFollowCounts(e), {
      revalidateOnFocus: !1,
    });
  useFollowStatus = (e) =>
    n(e ? ['follow-status', e].join('-') : null, async () => r.checkFollowStatus(e), {
      revalidateOnFocus: !1,
    });
  useFollowers = (e, t) =>
    n(
      e ? ['followers', e, t?.page, t?.pageSize].join('-') : null,
      async () => r.getFollowers(e, t),
      { revalidateOnFocus: !1 },
    );
  useFollowing = (e, t) =>
    n(
      e ? ['following', e, t?.page, t?.pageSize].join('-') : null,
      async () => r.getFollowing(e, t),
      { revalidateOnFocus: !1 },
    );
}
const U = (i, e, t) => new N(i, e, t);
class N {
  constructor(e, t, o) {}
  useUserProfile = (e) => {
    const t = a.getCurrentLanguage();
    return n(
      e.username ? ['user-profile', t, e.username].join('-') : null,
      async () => l.getUserInfo({ username: e.username }),
      { revalidateOnFocus: !1 },
    );
  };
}
const q = (...i) =>
    S([L(...i), y(...i), p(...i), b(...i), C(...i), A(...i), B(...i), h(...i), U(...i)]),
  _ = d('discover'),
  E = v()(_(q), f);
export { r as s, E as u };
