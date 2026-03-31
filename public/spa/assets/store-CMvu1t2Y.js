const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-7WkVJNSh.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/store-8fdqmFXe.js',
      'assets/abortableRequest-CqTkNl3n.js',
      'assets/upload-BTy9wwF3.js',
      'assets/index-ClRvEh9W.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
      'assets/_url-C5lJURGN.js',
      'assets/v4-BKrj-4V8.js',
      'assets/useClientDataSWRWithSync-BKXDfgeT.js',
      'assets/index-Br6hqyew.js',
      'assets/SiGithub-Bv-kH4Y-.js',
      'assets/SiX-DO6VXJ8i.js',
      'assets/clientModelRuntime-ByjgYOys.js',
      'assets/index-F5T1V14Z.js',
      'assets/tslib.es6-BWnLUwbd.js',
      'assets/_auth-sIxU1rKL.js',
      'assets/purify.es-r8glNMJW.js',
      'assets/store-CTAK9tZ0.js',
      'assets/selectors-BgvhR9tA.js',
      'assets/tools-grZ3gd_F.js',
      'assets/ipc-wTHpVC92.js',
      'assets/discover-H7COHXvN.js',
      'assets/general-Bhxy39g6.js',
      'assets/index-BrpHwoCT.js',
      'assets/store-Cj3bQrT7.js',
      'assets/browser-Cc4eeHpk.js',
      'assets/mcp-bmlNDBWs.js',
      'assets/GlobalAgentContextManager-DltpMSoH.js',
    ]),
) => i.map((i) => d[i]);
import {
  f9 as k,
  fa as N,
  fb as H,
  at as p,
  aL as y,
  i as S,
  _ as w,
  cF as O,
  au as G,
  dv as W,
  cE as z,
} from './index-C8UyLGsD.js';
import { g as L } from './GlobalAgentContextManager-DltpMSoH.js';
import { e as c } from './ipc-wTHpVC92.js';
class M {
  get ipc() {
    return c();
  }
  async getAppState() {
    return this.ipc.system.getAppState();
  }
  async closeWindow() {
    return this.ipc.windows.closeWindow();
  }
  async maximizeWindow() {
    return this.ipc.windows.maximizeWindow();
  }
  async isWindowMaximized() {
    return this.ipc.windows.isWindowMaximized();
  }
  async minimizeWindow() {
    return this.ipc.windows.minimizeWindow();
  }
  async setWindowSize(e) {
    return this.ipc.windows.setWindowSize(e);
  }
  async setWindowMinimumSize(e) {
    return this.ipc.windows.setWindowMinimumSize(e);
  }
  async openExternalLink(e) {
    return this.ipc.system.openExternalLink(e);
  }
  async hasLegacyLocalDb() {
    return this.ipc.system.hasLegacyLocalDb();
  }
  showContextMenu = async (e, t) => this.ipc.menu.showContextMenu({ data: t, type: e });
  async selectFolder(e) {
    return this.ipc.system.selectFolder(e);
  }
}
const F = new M(),
  V = (a, e, t) => new U(a, e, t);
class U {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  setConnectionDrawerOpen = (e) => {
    this.#e({ isConnectionDrawerOpen: e }, !1, 'setConnectionDrawerOpen');
  };
  updateElectronAppState = (e) => {
    const t = this.#t().appState;
    this.#e({ appState: k(t, e) });
  };
  useInitElectronAppState = () =>
    N('initElectronAppState', async () => F.getAppState(), {
      onSuccess: (e) => {
        (this.#e({ appState: e, isAppStateInit: !0 }, !1, 'initElectronAppState'),
          L.updateContext({
            desktopPath: e.userPath.desktop,
            documentsPath: e.userPath.documents,
            downloadsPath: e.userPath.downloads,
            homePath: e.userPath.home,
            musicPath: e.userPath.music,
            picturesPath: e.userPath.pictures,
            userDataPath: e.userPath.userData,
            videosPath: e.userPath.videos,
          }));
        const t = e.locale ?? 'auto';
        H(t);
      },
    });
}
class q {
  connect = async () => c().gatewayConnection.connect();
  disconnect = async () => c().gatewayConnection.disconnect();
  getConnectionStatus = async () => c().gatewayConnection.getConnectionStatus();
  getDeviceInfo = async () => c().gatewayConnection.getDeviceInfo();
  setDeviceDescription = async (e) =>
    c().gatewayConnection.setDeviceDescription({ description: e });
  setDeviceName = async (e) => c().gatewayConnection.setDeviceName({ name: e });
}
const u = new q(),
  P = 'electron:getGatewayDeviceInfo',
  K = (a, e, t) => new Y(a, e, t);
class Y {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  connectGateway = async () => {
    this.#e({ gatewayConnectionStatus: 'connecting' });
    try {
      (await u.connect()).success || this.#e({ gatewayConnectionStatus: 'disconnected' });
    } catch (e) {
      (console.error('Gateway connect failed:', e),
        this.#e({ gatewayConnectionStatus: 'disconnected' }));
    }
  };
  disconnectGateway = async () => {
    try {
      (await u.disconnect(), this.#e({ gatewayConnectionStatus: 'disconnected' }));
    } catch (e) {
      console.error('Gateway disconnect failed:', e);
    }
  };
  refreshGatewayDeviceInfo = async () => {
    await p(P);
  };
  setGatewayConnectionStatus = (e) => {
    this.#e({ gatewayConnectionStatus: e }, !1, 'setGatewayConnectionStatus');
  };
  updateDeviceDescription = async (e) => {
    try {
      (await u.setDeviceDescription(e), await this.#t().refreshGatewayDeviceInfo());
    } catch (t) {
      console.error('Update device description failed:', t);
    }
  };
  updateDeviceName = async (e) => {
    try {
      (await u.setDeviceName(e), await this.#t().refreshGatewayDeviceInfo());
    } catch (t) {
      console.error('Update device name failed:', t);
    }
  };
  useFetchGatewayDeviceInfo = () =>
    y(P, async () => u.getDeviceInfo(), {
      onSuccess: (e) => {
        this.#e({ gatewayDeviceInfo: e }, !1, 'setGatewayDeviceInfo');
      },
    });
  useFetchGatewayStatus = () =>
    y('electron:getGatewayConnectionStatus', async () => u.getConnectionStatus(), {
      onSuccess: (e) => {
        this.#e({ gatewayConnectionStatus: e.status }, !1, 'setGatewayConnectionStatus');
      },
    });
}
const B = {
    currentPageTitle: '',
    historyCurrentIndex: -1,
    historyEntries: [],
    isNavigatingHistory: !1,
  },
  J = (a, e, t) => new j(a, e, t);
class j {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  canGoBack = () => {
    const { historyCurrentIndex: e } = this.#t();
    return e > 0;
  };
  canGoForward = () => {
    const { historyCurrentIndex: e, historyEntries: t } = this.#t();
    return e < t.length - 1;
  };
  getCurrentEntry = () => {
    const { historyCurrentIndex: e, historyEntries: t } = this.#t();
    return e < 0 || e >= t.length ? null : t[e];
  };
  goBack = () => {
    const { historyCurrentIndex: e, historyEntries: t } = this.#t();
    if (e <= 0) return null;
    const s = e - 1,
      n = t[s];
    return (this.#e({ historyCurrentIndex: s, isNavigatingHistory: !0 }, !1, 'goBack'), n);
  };
  goForward = () => {
    const { historyCurrentIndex: e, historyEntries: t } = this.#t();
    if (e >= t.length - 1) return null;
    const s = e + 1,
      n = t[s];
    return (this.#e({ historyCurrentIndex: s, isNavigatingHistory: !0 }, !1, 'goForward'), n);
  };
  pushHistory = (e) => {
    const { historyCurrentIndex: t, historyEntries: s } = this.#t(),
      n = {
        icon: e.icon,
        metadata: { timestamp: Date.now(), ...e.metadata },
        title: e.title,
        url: e.url,
      },
      i = t < s.length - 1 ? s.slice(0, t + 1) : [...s];
    (i.push(n),
      this.#e({ historyCurrentIndex: i.length - 1, historyEntries: i }, !1, 'pushHistory'));
  };
  replaceHistory = (e) => {
    const { historyCurrentIndex: t, historyEntries: s } = this.#t();
    if (t < 0 || s.length === 0) {
      this.#t().pushHistory(e);
      return;
    }
    const n = {
        icon: e.icon,
        metadata: { timestamp: Date.now(), ...e.metadata },
        title: e.title,
        url: e.url,
      },
      i = [...s];
    ((i[t] = n), this.#e({ historyEntries: i }, !1, 'replaceHistory'));
  };
  setCurrentPageTitle = (e) => {
    this.#e({ currentPageTitle: e }, !1, 'setCurrentPageTitle');
  };
  setIsNavigatingHistory = (e) => {
    this.#e({ isNavigatingHistory: e }, !1, 'setIsNavigatingHistory');
  };
}
const E = 'lobechat:desktop:pinned-pages:v2',
  X = () => {
    if (typeof window > 'u') return [];
    try {
      const a = window.localStorage.getItem(E);
      if (!a) return [];
      const e = JSON.parse(a);
      return Array.isArray(e)
        ? e.filter(
            (t) =>
              t &&
              typeof t == 'object' &&
              typeof t.id == 'string' &&
              typeof t.type == 'string' &&
              typeof t.lastVisited == 'number' &&
              t.params !== void 0,
          )
        : [];
    } catch {
      return [];
    }
  },
  v = (a) => {
    if (typeof window > 'u') return !1;
    try {
      return (window.localStorage.setItem(E, JSON.stringify(a)), !0);
    } catch {
      return !1;
    }
  },
  b = 20,
  Q = 10,
  Z = { pinnedPages: [], recentPages: [] },
  $ = (a, e, t) => new ee(a, e, t);
class ee {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  addRecentPage = (e, t) => {
    const { pinnedPages: s, recentPages: n } = this.#t(),
      { id: i } = e,
      o = s.findIndex((d) => d.id === i);
    if (o >= 0) {
      if (t) {
        const d = [...s];
        ((d[o] = { ...d[o], cached: { ...d[o].cached, ...t } }),
          this.#e({ pinnedPages: d }, !1, 'updatePinnedPageCache'),
          v(d));
      }
      return;
    }
    const r = n.findIndex((d) => d.id === i),
      l = r >= 0 ? n[r] : null,
      h = t ? { ...l?.cached, ...t } : l?.cached,
      D = { ...e, cached: h, lastVisited: Date.now(), visitCount: (l?.visitCount || 0) + 1 },
      R = r >= 0 ? n.filter((d, _) => _ !== r) : n,
      A = [D, ...R].slice(0, b);
    this.#e({ recentPages: A }, !1, 'addRecentPage');
  };
  clearRecentPages = () => {
    this.#e({ recentPages: [] }, !1, 'clearRecentPages');
  };
  isPagePinned = (e) => this.#t().pinnedPages.some((t) => t.id === e);
  loadPinnedPages = () => {
    const e = X(),
      { recentPages: t } = this.#t(),
      s = new Set(e.map((i) => i.id)),
      n = t.filter((i) => !s.has(i.id));
    this.#e({ pinnedPages: e, recentPages: n }, !1, 'loadPinnedPages');
  };
  pinPage = (e) => {
    const { pinnedPages: t, recentPages: s } = this.#t(),
      { id: n } = e;
    if (t.some((h) => h.id === n) || t.length >= Q) return;
    const i = s.find((h) => h.id === n),
      o = { ...e, cached: e.cached ?? i?.cached, lastVisited: Date.now() },
      r = [...t, o],
      l = s.filter((h) => h.id !== n);
    (this.#e({ pinnedPages: r, recentPages: l }, !1, 'pinPage'), v(r));
  };
  removeRecentPage = (e) => {
    const { recentPages: t } = this.#t();
    this.#e({ recentPages: t.filter((s) => s.id !== e) }, !1, 'removeRecentPage');
  };
  unpinPage = (e) => {
    const { pinnedPages: t, recentPages: s } = this.#t(),
      n = t.find((r) => r.id === e);
    if (!n) return;
    const i = t.filter((r) => r.id !== e),
      o = [n, ...s].slice(0, b);
    (this.#e({ pinnedPages: i, recentPages: o }, !1, 'unpinPage'), v(i));
  };
}
class te {
  getProxySettings = async () => c().networkProxy.getDesktopSettings();
  setSettings = async (e) => c().networkProxy.setProxySettings(e);
  getDesktopHotkeys = async () => c().shortcut.getShortcutsConfig();
  updateDesktopHotkey = async (e, t) =>
    c().shortcut.updateShortcutConfig({ accelerator: t, id: e });
  testProxyConnection = async (e) => c().networkProxy.testProxyConnection(e);
  testProxyConfig = async (e, t) => c().networkProxy.testProxyConfig({ config: e, testUrl: t });
}
const f = new te(),
  m = 'electron:getProxySettings',
  I = 'electron:getDesktopHotkeys',
  se = (a, e, t) => new ne(a, e, t);
class ne {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  refreshDesktopHotkeys = async () => {
    await p(I);
  };
  refreshProxySettings = async () => {
    await p(m);
  };
  setProxySettings = async (e) => {
    try {
      (await f.setSettings(e), await this.#t().refreshProxySettings());
    } catch (t) {
      console.error('Proxy settings update failed:', t);
    }
  };
  updateDesktopHotkey = async (e, t) => {
    try {
      const s = await f.updateDesktopHotkey(e, t);
      return (s.success && (await this.#t().refreshDesktopHotkeys()), s);
    } catch (s) {
      return (
        console.error('Desktop hotkey update failed:', s),
        { errorType: 'UNKNOWN', success: !1 }
      );
    }
  };
  useFetchDesktopHotkeys = () =>
    y(I, async () => f.getDesktopHotkeys(), {
      onSuccess: (e) => {
        S(e, this.#t().desktopHotkeys) || this.#e({ desktopHotkeys: e, isDesktopHotkeysInit: !0 });
      },
    });
  useGetProxySettings = () =>
    y(m, async () => f.getProxySettings(), {
      onSuccess: (e) => {
        S(e, this.#t().proxySettings) || this.#e({ proxySettings: e });
      },
    });
}
class ie {
  getRemoteServerConfig = async () => c().remoteServer.getRemoteServerConfig();
  setRemoteServerConfig = async (e) => c().remoteServer.setRemoteServerConfig(e);
  clearRemoteServerConfig = async () => c().remoteServer.clearRemoteServerConfig();
  requestAuthorization = async (e) => c().auth.requestAuthorization(e);
  requestMarketAuthorization = async (e) => c().auth.requestMarketAuthorization(e);
  cancelAuthorization = async () => c().auth.cancelAuthorization();
  setupSubscriptionWebviewSession = async (e) =>
    c().remoteServer.setupSubscriptionWebviewSession({ partition: e });
}
const g = new ie(),
  T = 'lobechat:desktop:tab-pages:v1',
  ae = () => {
    if (typeof window > 'u') return { activeTabId: null, tabs: [] };
    try {
      const a = window.localStorage.getItem(T);
      if (!a) return { activeTabId: null, tabs: [] };
      const e = JSON.parse(a);
      if (!e || typeof e != 'object') return { activeTabId: null, tabs: [] };
      const t = Array.isArray(e.tabs)
        ? e.tabs.filter(
            (s) =>
              s &&
              typeof s == 'object' &&
              typeof s.id == 'string' &&
              typeof s.type == 'string' &&
              typeof s.lastVisited == 'number' &&
              s.params !== void 0,
          )
        : [];
      return { activeTabId: typeof e.activeTabId == 'string' ? e.activeTabId : null, tabs: t };
    } catch {
      return { activeTabId: null, tabs: [] };
    }
  },
  re = (a, e) => {
    if (typeof window > 'u') return !1;
    try {
      return (window.localStorage.setItem(T, JSON.stringify({ activeTabId: e, tabs: a })), !0);
    } catch {
      return !1;
    }
  },
  oe = { activeTabId: null, tabs: [] },
  ce = (a, e, t) => new de(a, e, t);
class de {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  activateTab = (e) => {
    const { tabs: t } = this.#t();
    t.some((s) => s.id === e) && (this.#e({ activeTabId: e }, !1, 'activateTab'), this.#s());
  };
  addTab = (e, t, s = !0) => {
    const { tabs: n } = this.#t(),
      i = n.find((l) => l.id === e.id);
    if (i) {
      s && (this.#e({ activeTabId: i.id }, !1, 'activateExistingTab'), this.#s());
      return;
    }
    const o = { ...e, cached: t, lastVisited: Date.now() },
      r = [...n, o];
    (this.#e({ activeTabId: s ? o.id : this.#t().activeTabId, tabs: r }, !1, 'addTab'), this.#s());
  };
  getActiveTab = () => {
    const { activeTabId: e, tabs: t } = this.#t();
    return e ? (t.find((s) => s.id === e) ?? null) : null;
  };
  loadTabs = () => {
    const { tabs: e, activeTabId: t } = ae();
    this.#e({ activeTabId: t, tabs: e }, !1, 'loadTabs');
  };
  removeTab = (e) => {
    const { tabs: t, activeTabId: s } = this.#t(),
      n = t.findIndex((r) => r.id === e);
    if (n < 0) return null;
    const i = t.filter((r) => r.id !== e);
    let o = s;
    return (
      s === e && (i.length === 0 ? (o = null) : n >= i.length ? (o = i.at(-1).id) : (o = i[n].id)),
      this.#e({ activeTabId: o, tabs: i }, !1, 'removeTab'),
      this.#s(),
      o
    );
  };
  closeLeftTabs = (e) => {
    const { tabs: t, activeTabId: s } = this.#t(),
      n = t.findIndex((r) => r.id === e);
    if (n <= 0) return;
    const i = t.slice(n),
      o = i.some((r) => r.id === s) ? s : e;
    (this.#e({ activeTabId: o, tabs: i }, !1, 'closeLeftTabs'), this.#s());
  };
  closeOtherTabs = (e) => {
    const { tabs: t } = this.#t(),
      s = t.find((n) => n.id === e);
    s && (this.#e({ activeTabId: e, tabs: [s] }, !1, 'closeOtherTabs'), this.#s());
  };
  closeRightTabs = (e) => {
    const { tabs: t, activeTabId: s } = this.#t(),
      n = t.findIndex((r) => r.id === e);
    if (n < 0 || n >= t.length - 1) return;
    const i = t.slice(0, n + 1),
      o = i.some((r) => r.id === s) ? s : e;
    (this.#e({ activeTabId: o, tabs: i }, !1, 'closeRightTabs'), this.#s());
  };
  reorderTabs = (e, t) => {
    const { tabs: s } = this.#t();
    if (e < 0 || e >= s.length || t < 0 || t >= s.length) return;
    const n = [...s],
      [i] = n.splice(e, 1);
    (n.splice(t, 0, i), this.#e({ tabs: n }, !1, 'reorderTabs'), this.#s());
  };
  updateTab = (e, t, s) => {
    const { tabs: n, activeTabId: i } = this.#t(),
      o = n.findIndex((h) => h.id === e);
    if (o < 0) return;
    const r = [...n];
    r[o] = { ...t, cached: s ? { ...r[o].cached, ...s } : r[o].cached, lastVisited: Date.now() };
    const l = i === e ? t.id : i;
    (this.#e({ activeTabId: l, tabs: r }, !1, 'updateTab'), this.#s());
  };
  updateTabCache = (e, t) => {
    const { tabs: s } = this.#t(),
      n = s.findIndex((o) => o.id === e);
    if (n < 0) return;
    const i = [...s];
    ((i[n] = { ...i[n], cached: { ...i[n].cached, ...t } }),
      this.#e({ tabs: i }, !1, 'updateTabCache'),
      this.#s());
  };
  #s = () => {
    const { tabs: e, activeTabId: t } = this.#t();
    re(e, t);
  };
}
const le = {
    enableProxy: !1,
    proxyBypass: 'localhost, 127.0.0.1, ::1',
    proxyPort: '',
    proxyRequireAuth: !1,
    proxyServer: '',
    proxyType: 'http',
  },
  x = {
    ...B,
    ...Z,
    ...oe,
    appState: {},
    dataSyncConfig: { storageMode: 'cloud' },
    desktopHotkeys: {},
    gatewayConnectionStatus: 'disconnected',
    isAppStateInit: !1,
    isConnectingServer: !1,
    isConnectionDrawerOpen: !1,
    isDesktopHotkeysInit: !1,
    isInitRemoteServerConfig: !1,
    isSyncActive: !1,
    proxySettings: le,
  },
  C = 'electron:getRemoteServerConfig',
  he = (a, e, t) => new ue(a, e, t);
class ue {
  #t;
  #e;
  constructor(e, t, s) {
    ((this.#e = e), (this.#t = t));
  }
  clearRemoteServerSyncError = () => {
    this.#e({ remoteServerSyncError: void 0 }, !1, 'clearRemoteServerSyncError');
  };
  connectRemoteServer = async (e) => {
    if (!(e.storageMode === 'selfHost' && !e.remoteServerUrl)) {
      (this.#e({ isConnectingServer: !0 }), this.#t().clearRemoteServerSyncError());
      try {
        const t = await g.getRemoteServerConfig();
        S(t, e) || (await g.setRemoteServerConfig({ ...e, active: !1 }));
        const s = await g.requestAuthorization(e);
        (s.success ||
          (console.error('Authorization request failed:', s.error),
          this.#e({ remoteServerSyncError: { message: s.error, type: 'AUTH_ERROR' } })),
          await this.#t().refreshServerConfig());
      } catch (t) {
        (console.error('Remote server configuration error:', t),
          this.#e({ remoteServerSyncError: { message: t.message, type: 'CONFIG_ERROR' } }));
      } finally {
        this.#e({ isConnectingServer: !1 });
      }
    }
  };
  disconnectRemoteServer = async () => {
    (this.#e({ isConnectingServer: !1 }), this.#t().clearRemoteServerSyncError());
    try {
      (await g.setRemoteServerConfig({ active: !1, storageMode: 'cloud' }),
        this.#e({ dataSyncConfig: x.dataSyncConfig }),
        await this.#t().refreshServerConfig());
    } catch (e) {
      (console.error('Disconnect failed:', e),
        this.#e({ remoteServerSyncError: { message: e.message, type: 'DISCONNECT_ERROR' } }));
    } finally {
      this.#e({ isConnectingServer: !1 });
    }
  };
  refreshServerConfig = async () => {
    await p(C);
  };
  refreshUserData = async () => {
    const { getSessionStoreState: e } = await w(
        async () => {
          const { getSessionStoreState: n } = await import('./index-7WkVJNSh.js').then((i) => i.i);
          return { getSessionStoreState: n };
        },
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        ]),
      ),
      { getChatStoreState: t } = await w(
        async () => {
          const { getChatStoreState: n } = await import('./index-Br6hqyew.js').then((i) => i.e5);
          return { getChatStoreState: n };
        },
        __vite__mapDeps([
          19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25,
          26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        ]),
      ),
      { getUserStoreState: s } = await w(
        async () => {
          const { getUserStoreState: n } =
            await import('./GlobalAgentContextManager-DltpMSoH.js').then((i) => i.i);
          return { getUserStoreState: n };
        },
        __vite__mapDeps([37, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      );
    (await e().refreshSessions(),
      await t().refreshMessages(),
      await t().refreshTopic(),
      await s().refreshUserState());
  };
  useDataSyncConfig = () =>
    y(
      C,
      async () => {
        try {
          return await g.getRemoteServerConfig();
        } catch (e) {
          throw (console.error('Failed to get remote server configuration:', e), e);
        }
      },
      {
        onSuccess: (e) => {
          (S(e, this.#t().dataSyncConfig) || this.#t().refreshUserData(),
            this.#e({ dataSyncConfig: e, isInitRemoteServerConfig: !0 }));
        },
        suspense: !1,
      },
    );
}
const ge = (...a) => ({
    ...x,
    ...z([he(...a), V(...a), K(...a), se(...a), J(...a), $(...a), ce(...a)]),
  }),
  ye = W('electron'),
  we = O()(ye(ge), G);
export { f as d, F as e, g as r, we as u };
