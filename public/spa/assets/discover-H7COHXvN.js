import { u as k, a_ as r, b3 as s, v as g } from './index-C8UyLGsD.js';
import { g as f } from './general-Bhxy39g6.js';
import { c as l } from './object-CksihGcT.js';
const d = () => f.currentLanguage(k.getState()),
  n = { getCurrentLanguage: d };
class p {
  _isRetrying = !1;
  _tokenRefreshPromise = null;
  isMarketTrustedClientEnabled = () => {
    if (typeof window > 'u' || !window.global_serverConfigStore) return !1;
    try {
      return (
        window.global_serverConfigStore.getState().serverConfig.enableMarketTrustedClient || !1
      );
    } catch {
      return !1;
    }
  };
  safeInjectMPToken = async () => {
    if (!this.isMarketTrustedClientEnabled())
      try {
        await this.injectMPToken();
      } catch (e) {
        console.warn('Failed to inject MP token, continuing without it:', e);
      }
  };
  getAssistantCategories = async (e = {}) => {
    const t = n.getCurrentLanguage(),
      { source: a, ...i } = e;
    return r.market.getAssistantCategories.query({ ...i, locale: t, source: a });
  };
  getAssistantDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getAssistantDetail.query({
      identifier: e.identifier,
      locale: t,
      source: e.source,
      version: e.version,
    });
  };
  getAssistantIdentifiers = async (e = {}) => r.market.getAssistantIdentifiers.query(e);
  getAssistantList = async (e = {}) => {
    await this.safeInjectMPToken();
    const t = n.getCurrentLanguage();
    return r.market.getAssistantList.query(
      {
        ...e,
        locale: t,
        page: e.page ? Number(e.page) : 1,
        pageSize: e.pageSize ? Number(e.pageSize) : 20,
      },
      { context: { showNotification: !1 } },
    );
  };
  getAgentsByPlugin = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getAgentsByPlugin.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  getMcpCategories = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getMcpCategories.query({ ...e, locale: t });
  };
  getMcpDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getMcpDetail.query({ ...e, locale: t });
  };
  getMcpList = async (e = {}) => {
    await this.safeInjectMPToken();
    const t = n.getCurrentLanguage();
    return r.market.getMcpList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  getMCPPluginList = async (e) => {
    await this.safeInjectMPToken();
    const t = n.getCurrentLanguage();
    return r.market.getMcpList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 21,
    });
  };
  getMcpManifest = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getMcpManifest.query({ ...e, locale: t });
  };
  getMCPPluginManifest = async (e, t = {}) => {
    const a = n.getCurrentLanguage();
    return r.market.getMcpManifest.query({ identifier: e, install: t.install, locale: a });
  };
  registerClient = () => r.market.registerClientInMarketplace.mutate({});
  reportMcpInstallResult = async ({
    success: e,
    manifest: t,
    errorMessage: a,
    errorCode: i,
    ...o
  }) => {
    if (!s.telemetry(g.getState())) return;
    await this.safeInjectMPToken();
    const u = {
      errorCode: e ? void 0 : i,
      errorMessage: e ? void 0 : a,
      manifest: e ? t : void 0,
      success: e,
      ...o,
    };
    r.market.reportMcpInstallResult.mutate(l(u)).catch((y) => {
      console.warn('Failed to report MCP installation result:', y);
    });
  };
  reportPluginCall = async (e) => {
    s.telemetry(g.getState()) &&
      (await this.safeInjectMPToken(),
      r.market.reportCall.mutate(l(e)).catch((a) => {
        console.warn('Failed to report call:', a);
      }));
  };
  reportMcpEvent = async (e) => {
    if (!s.telemetry(g.getState())) return;
    await this.safeInjectMPToken();
    const a = l({ ...e, source: e.source ?? 'community/mcp' });
    r.market.reportMcpEvent.mutate(a).catch((i) => {
      console.warn('Failed to report MCP event:', i);
    });
  };
  reportAgentInstall = async (e) => {
    s.telemetry(g.getState()) &&
      (await this.safeInjectMPToken(),
      r.market.reportAgentInstall.mutate({ identifier: e }).catch((a) => {
        console.warn('Failed to report agent installation:', a);
      }));
  };
  reportAgentEvent = async (e) => {
    if (!s.telemetry(g.getState())) return;
    await this.safeInjectMPToken();
    const a = l({ ...e, source: e.source ?? 'community/agent' });
    r.market.reportAgentEvent.mutate(a).catch((i) => {
      console.warn('Failed to report Agent event:', i);
    });
  };
  getModelCategories = async (e = {}) => r.market.getModelCategories.query(e);
  getModelDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getModelDetail.query({ ...e, locale: t });
  };
  getModelIdentifiers = async () => r.market.getModelIdentifiers.query();
  getModelList = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getModelList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  getPluginCategories = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getPluginCategories.query({ ...e, locale: t });
  };
  getPluginDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getPluginDetail.query({ ...e, locale: t });
  };
  getPluginIdentifiers = async () => r.market.getPluginIdentifiers.query();
  getPluginList = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getPluginList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  getProviderDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getProviderDetail.query({ ...e, locale: t });
  };
  getProviderIdentifiers = async () => r.market.getProviderIdentifiers.query();
  getProviderList = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getProviderList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  getUserInfo = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getUserInfo.query({ locale: t, username: e.username });
  };
  async injectMPToken() {
    if (!(typeof localStorage > 'u' || this.getTokenStatusFromCookie() === 'active')) {
      if (this._tokenRefreshPromise) {
        await this._tokenRefreshPromise;
        return;
      }
      this._tokenRefreshPromise = this._doRefreshToken();
      try {
        await this._tokenRefreshPromise;
      } finally {
        this._tokenRefreshPromise = null;
      }
    }
  }
  async _doRefreshToken() {
    let e, t;
    const a = localStorage.getItem('_mpc');
    if (a)
      try {
        const i = atob(a),
          o = JSON.parse(i);
        ((e = o.clientId), (t = o.clientSecret));
      } catch (i) {
        console.error('Failed to decode client data:', i);
        const o = await this.registerClient();
        ((e = o.clientId), (t = o.clientSecret));
        const c = JSON.stringify({ clientId: e, clientSecret: t }),
          u = btoa(c);
        localStorage.setItem('_mpc', u);
      }
    else {
      const i = await this.registerClient();
      ((e = i.clientId), (t = i.clientSecret));
      const o = JSON.stringify({ clientId: e, clientSecret: t }),
        c = btoa(o);
      localStorage.setItem('_mpc', c);
    }
    try {
      if (!(await r.market.registerM2MToken.query({ clientId: e, clientSecret: t })).success) {
        if (
          (console.warn(
            'Token registration failed, client credentials may be invalid. Clearing and retrying...',
          ),
          localStorage.removeItem('_mpc'),
          this._isRetrying)
        )
          console.error('Failed to re-register after credential invalidation');
        else {
          this._isRetrying = !0;
          try {
            await this._doRefreshToken();
          } finally {
            this._isRetrying = !1;
          }
        }
        return;
      }
      await this._waitForCookieSet();
    } catch (i) {
      console.error('Failed to register M2M token:', i);
    }
  }
  async _waitForCookieSet(e = 10, t = 10) {
    for (let a = 0; a < e; a++) {
      if (this.getTokenStatusFromCookie() === 'active') return;
      await new Promise((i) => setTimeout(i, t));
    }
    console.warn('Cookie may not be fully set, proceeding anyway');
  }
  getTokenStatusFromCookie() {
    if (typeof document > 'u') return null;
    const e = document.cookie.split(';');
    for (const t of e) {
      const [a, i] = t.trim().split('=');
      if (a === 'mp_token_status') return i;
    }
    return null;
  }
  getSkillCategories = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.skill.getSkillCategories.query({ ...e, locale: t });
  };
  getSkillDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.skill.getSkillDetail.query({ ...e, locale: t });
  };
  getSkillList = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.skill.getSkillList.query({
      ...e,
      locale: t,
      page: e.page ? Number(e.page) : 1,
      pageSize: e.pageSize ? Number(e.pageSize) : 20,
    });
  };
  reportSkillEvent = async (e) => {
    s.telemetry(g.getState()) && l({ ...e, source: e.source ?? 'community/skill' });
  };
  getGroupAgentCategories = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.getGroupAgentCategories.query({ ...e, locale: t });
  };
  getGroupAgentDetail = async (e) => {
    const t = n.getCurrentLanguage();
    return r.market.getGroupAgentDetail.query({
      identifier: e.identifier,
      locale: t,
      version: e.version,
    });
  };
  getGroupAgentIdentifiers = async () => r.market.getGroupAgentIdentifiers.query();
  getGroupAgentList = async (e = {}) => {
    const t = n.getCurrentLanguage();
    return r.market.agentGroup.getAgentGroupList.query(
      {
        ...e,
        locale: t,
        page: e.page ? Number(e.page) : 1,
        pageSize: e.pageSize ? Number(e.pageSize) : 20,
      },
      { context: { showNotification: !1 } },
    );
  };
  reportGroupAgentEvent = async (e) => {
    await r.market.reportGroupAgentEvent.mutate(e);
  };
  reportGroupAgentInstall = async (e) => {
    await r.market.reportGroupAgentInstall.mutate({ identifier: e });
  };
}
const M = new p();
export { M as d, n as g };
