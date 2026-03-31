import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  g as te,
  ax as Ce,
  a_ as V,
  Z as M,
  F as R,
  k as D,
  by as Ge,
  eH as Ke,
  eI as We,
  j as $e,
  f as qe,
  $ as ye,
  A as Xe,
  aG as Je,
  u as Ze,
  X as ve,
  bD as je,
  v as re,
  R as Qe,
  aC as Ye,
  C as et,
  I as tt,
  aL as rt,
  eJ as Pe,
  w as nt,
} from './index-C8UyLGsD.js';
import { M as ae } from './_url-C5lJURGN.js';
import { M as be } from './Modal-Dd2pIxVd.js';
import { L as he } from './index-DYqiTmoN.js';
import {
  cC as st,
  W as ot,
  _ as at,
  cD as it,
  bE as lt,
  Z as Re,
  ay as ct,
  bs as ut,
  m as dt,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { C as ft } from './index-BOZ0hr8D.js';
import { marketAuthEvents as pt } from './events-NnJKY1rz.js';
import { B as ht } from './providerConfig-qS2Xx-oI.js';
import { B as mt } from './Block-DDntSWi2.js';
import { T as gt } from './Trans-B9Jc6Abr.js';
import { I as me } from './Input-C_EgL0SG.js';
import { T as kt } from './TextArea-CHeYteyg.js';
import { E as yt } from './index-CopzJgBK.js';
import { u as St } from './store-8fdqmFXe.js';
import { g as wt } from './general-Bhxy39g6.js';
import { S as Ct } from './SiX-DO6VXJ8i.js';
import { S as bt } from './SiGithub-Bv-kH4Y-.js';
import { S as xt } from './index-Bc7JilPY.js';
import { t as ge } from './tools-grZ3gd_F.js';
import { F as W } from './index-5nC5GwBn.js';
import { U as It } from './index-C2-gySBL.js';
const ze = r.memo(({ open: n, onClose: t, resources: o, onSuccess: f }) => {
  const { t: l } = te('marketAuth'),
    { message: m } = Ce.useApp(),
    [h, a] = r.useState(new Set()),
    [s, k] = r.useState(new Set()),
    [S, E] = r.useState(!1);
  r.useEffect(() => {
    if (!n) {
      (a(new Set()), k(new Set()));
      return;
    }
    (a(new Set(o.plugins.map((d) => String(d.id)))), k(new Set(o.skills.map((d) => String(d.id)))));
  }, [n, o]);
  const z = r.useCallback((d) => {
      a((w) => {
        const c = new Set(w);
        return (c.has(d) ? c.delete(d) : c.add(d), c);
      });
    }, []),
    A = r.useCallback((d) => {
      k((w) => {
        const c = new Set(w);
        return (c.has(d) ? c.delete(d) : c.add(d), c);
      });
    }, []),
    j = r.useCallback(async () => {
      const d = [...h],
        w = [...s];
      if (d.length === 0 && w.length === 0) {
        t();
        return;
      }
      E(!0);
      try {
        await V.market.socialProfile.claimResources.mutate({ pluginIds: d, skillIds: w });
        const c = d.length + w.length;
        (m.success(
          l('claimResources.success', {
            count: c,
            defaultValue: `Successfully claimed ${c} resource(s)`,
          }),
        ),
          f?.(c),
          t());
      } catch (c) {
        (console.error('[ClaimResources] Failed to claim:', c),
          m.error(
            l('claimResources.error', {
              defaultValue: 'Failed to claim resources. Please try again.',
            }),
          ));
      } finally {
        E(!1);
      }
    }, [h, s, m, l, f, t]),
    b = h.size + s.size,
    x = (d, w, c, I) => {
      const O = d.name || d.parsedUrl?.fullName || d.identifier;
      return e.jsx(he.Item, {
        style: { cursor: 'pointer', padding: '8px 12px' },
        onClick: c,
        children: e.jsxs(R, {
          horizontal: !0,
          align: 'center',
          gap: 12,
          style: { width: '100%' },
          children: [
            e.jsx(ft, { checked: w }),
            I,
            e.jsxs(R, {
              flex: 1,
              gap: 2,
              children: [
                e.jsx(M, { style: { fontSize: 14 }, children: O }),
                d.description &&
                  e.jsx(M, { style: { fontSize: 12 }, type: 'secondary', children: d.description }),
              ],
            }),
          ],
        }),
      });
    };
  return e.jsxs(be, {
    centered: !0,
    cancelText: l('claimResources.skip', { defaultValue: 'Skip' }),
    confirmLoading: S,
    okText: l('claimResources.claim', { defaultValue: 'Claim Selected' }),
    open: n,
    title: !1,
    width: 480,
    onCancel: t,
    onOk: j,
    children: [
      e.jsx(M, {
        strong: !0,
        fontSize: 20,
        style: { display: 'block', marginBottom: 8, marginTop: 16 },
        children: l('claimResources.title', { defaultValue: 'Claim Your Resources' }),
      }),
      e.jsx(M, {
        style: { display: 'block', marginBottom: 16 },
        type: 'secondary',
        children: l('claimResources.description', {
          defaultValue: 'We found resources linked to your account that you can claim:',
        }),
      }),
      o.plugins.length > 0 &&
        e.jsxs(R, {
          gap: 8,
          style: { marginBottom: 16 },
          children: [
            e.jsx(M, {
              style: { fontSize: 13 },
              type: 'secondary',
              children: l('claimResources.pluginSection', { defaultValue: 'Plugins' }),
            }),
            e.jsx(he, {
              bordered: !0,
              dataSource: o.plugins,
              size: 'small',
              style: { borderRadius: D.borderRadiusLG },
              renderItem: (d) =>
                x(
                  d,
                  h.has(String(d.id)),
                  () => z(String(d.id)),
                  e.jsx(st, { size: 18, style: { color: D.colorTextSecondary } }),
                ),
            }),
          ],
        }),
      o.skills.length > 0 &&
        e.jsxs(R, {
          gap: 8,
          children: [
            e.jsx(M, {
              style: { fontSize: 13 },
              type: 'secondary',
              children: l('claimResources.skillSection', { defaultValue: 'Skills' }),
            }),
            e.jsx(he, {
              bordered: !0,
              dataSource: o.skills,
              size: 'small',
              style: { borderRadius: D.borderRadiusLG },
              renderItem: (d) =>
                x(
                  d,
                  s.has(String(d.id)),
                  () => A(String(d.id)),
                  e.jsx(ot, { size: 18, style: { color: D.colorTextSecondary } }),
                ),
            }),
          ],
        }),
      b > 0 &&
        e.jsx(M, {
          style: { display: 'block', fontSize: 12, marginTop: 12 },
          type: 'secondary',
          children: l('claimResources.selectedCount', {
            count: b,
            defaultValue: `${b} item(s) selected`,
          }),
        }),
    ],
  });
});
ze.displayName = 'ClaimResourcesModal';
class P extends Error {
  code;
  meta;
  constructor(t, o = {}) {
    (super(o.message ?? t),
      (this.name = 'MarketAuthError'),
      (this.code = t),
      (this.meta = o.meta),
      o.cause && (this.cause = o.cause));
  }
}
const Tt = [
    [/authorization can only be initiated in a browser environment/i, 'browserOnly'],
    [/authorization code already consumed/i, 'codeConsumed'],
    [/authorization popup was closed/i, 'popupClosed'],
    [/authorization session expired/i, 'sessionExpired'],
    [/authorization state not found/i, 'stateMissing'],
    [/state mismatch/i, 'stateMismatch'],
    [/code verifier not found/i, 'codeVerifierMissing'],
    [/failed to open authorization popup/i, 'openPopupFailed'],
    [/failed to open system browser/i, 'openBrowserFailed'],
    [/oidc client not initialized/i, 'oidcNotReady'],
    [/failed to retrieve authorization result from handoff endpoint/i, 'handoffFailed'],
    [/invalid state parameter/i, 'stateMismatch'],
    [/timeout/i, 'handoffTimeout'],
  ],
  ur = (n) => {
    if (n instanceof P) return n;
    if (n instanceof Error) {
      const t = Tt.find(([o]) => o.test(n.message));
      return t
        ? new P(t[1], { cause: n })
        : new P('authorizationFailed', { cause: n, meta: { message: n.message } });
    }
    return new P('general');
  },
  At = r.memo(({ children: n, title: t, subtitle: o, footer: f, ...l }) =>
    e.jsxs(R, {
      width: 'min(100%,440px)',
      ...l,
      children: [
        e.jsxs(R, {
          gap: 16,
          children: [
            t &&
              e.jsx(M, { fontSize: 28, style: { lineHeight: 1.4 }, weight: 'bold', children: t }),
            o &&
              e.jsx(M, {
                fontSize: 18,
                style: { lineHeight: 1.4 },
                type: 'secondary',
                weight: 500,
                children: o,
              }),
          ],
        }),
        e.jsx(R, { gap: 4, paddingBlock: 32, children: n }),
        f,
      ],
    }),
  ),
  Ee = qe(({ css: n }) => ({
    container: n`
    padding-block-start: 32px;

    background-image: url('/images/community_header_light.webp');
    background-repeat: no-repeat;
    background-position: 400% 0;
    background-size: 400px auto;
    background-blend-mode: multiply;
  `,
    container_dark: n`
    background-image: url('/images/community_header_dark.webp');
    background-blend-mode: screen;
  `,
  })),
  Oe = r.memo(({ open: n, onConfirm: t, onCancel: o }) => {
    const { t: f } = te('marketAuth'),
      l = Ge(),
      m = e.jsx(M, {
        align: 'center',
        as: 'div',
        fontSize: 13,
        type: 'secondary',
        children: e.jsx(gt, {
          i18nKey: 'authorize.footer.agreement',
          ns: 'marketAuth',
          components: {
            privacy: e.jsx('a', {
              href: We,
              style: { color: 'inherit', cursor: 'pointer', textDecoration: 'underline' },
              children: f('authorize.footer.terms'),
            }),
            terms: e.jsx('a', {
              href: Ke,
              style: { color: 'inherit', cursor: 'pointer', textDecoration: 'underline' },
              children: f('authorize.footer.privacy'),
            }),
          },
        }),
      });
    return e.jsx(be, {
      centered: !0,
      cancelText: f('authorize.cancel'),
      okText: f('authorize.confirm'),
      open: n,
      title: null,
      width: 440,
      classNames: { container: $e(Ee.container, l && Ee.container_dark) },
      paddings: { desktop: 24 },
      onCancel: o,
      onOk: t,
      children: e.jsx(At, {
        footer: m,
        paddingBlock: '40px 20px',
        subtitle: f('authorize.subtitle'),
        title: f('authorize.title'),
        width: '100%',
        children: e.jsx(mt, {
          padding: 16,
          variant: 'filled',
          children: e.jsx(M, {
            align: 'center',
            children: f('authorize.description', { appName: ht }),
          }),
        }),
      }),
    });
  });
Oe.displayName = 'MarketAuthConfirmModal';
const Pt = 'market_auth_result:',
  Le = () => typeof window < 'u',
  xe = (n) => `${Pt}${n}`,
  Se = (n) => {
    if (!n || typeof n != 'object') return null;
    const t = n;
    return t.type === 'MARKET_AUTH_SUCCESS'
      ? typeof t.code != 'string' || typeof t.state != 'string'
        ? null
        : { code: t.code, state: t.state, type: t.type }
      : t.type === 'MARKET_AUTH_ERROR'
        ? typeof t.error != 'string'
          ? null
          : { error: t.error, state: typeof t.state == 'string' ? t.state : void 0, type: t.type }
        : null;
  },
  Rt = (n) => {
    if (!Le()) return null;
    try {
      const t = localStorage.getItem(xe(n));
      return t ? Se(JSON.parse(t)) : null;
    } catch (t) {
      return (console.error('[MarketAuthHandoff] Failed to read auth result:', t), null);
    }
  },
  Me = (n) => {
    if (!Le()) return !1;
    try {
      return (localStorage.removeItem(xe(n)), !0);
    } catch (t) {
      return (console.error('[MarketAuthHandoff] Failed to clear auth result:', t), !1);
    }
  };
class G {
  config;
  static DESKTOP_HANDOFF_CLIENT = 'desktop';
  static DESKTOP_HANDOFF_POLL_INTERVAL = 1500;
  static DESKTOP_HANDOFF_TIMEOUT = 300 * 1e3;
  static WEB_POPUP_CLOSE_GRACE_PERIOD = 1500;
  static WEB_POPUP_MONITOR_INTERVAL = 500;
  static WEB_POPUP_TIMEOUT = 300 * 1e3;
  constructor(t) {
    this.config = t;
  }
  generateCodeVerifier() {
    console.info('[MarketOIDC] Generating PKCE code verifier');
    const t = new Uint8Array(32);
    return (
      crypto.getRandomValues(t),
      btoa(String.fromCharCode.apply(null, Array.from(t)))
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '')
    );
  }
  async generateCodeChallenge(t) {
    console.info('[MarketOIDC] Generating PKCE code challenge');
    const f = new TextEncoder().encode(t),
      l = await crypto.subtle.digest('SHA-256', f);
    return btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(l))))
      .replaceAll('+', '-')
      .replaceAll('/', '_')
      .replaceAll('=', '');
  }
  generateState() {
    console.info('[MarketOIDC] Generating random state');
    const t = new Uint8Array(16);
    return (
      crypto.getRandomValues(t),
      btoa(String.fromCharCode.apply(null, Array.from(t)))
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '')
    );
  }
  async generatePKCEParams() {
    console.info('[MarketOIDC] Generating PKCE parameters');
    const t = this.generateCodeVerifier(),
      o = await this.generateCodeChallenge(t),
      f = this.generateState();
    return (
      sessionStorage.setItem('market_code_verifier', t),
      sessionStorage.setItem('market_state', f),
      console.info('[MarketOIDC] PKCE parameters generated and stored'),
      { codeChallenge: o, codeVerifier: t, state: f }
    );
  }
  async buildAuthUrl() {
    console.info('[MarketOIDC] Building authorization URL');
    const t = await this.generatePKCEParams();
    console.info('[MarketOIDC] this.config:', this.config);
    const o = new URL(ae.auth, this.config.baseUrl);
    return (
      o.searchParams.set('client_id', this.config.clientId),
      o.searchParams.set('redirect_uri', this.config.redirectUri),
      o.searchParams.set('response_type', 'code'),
      o.searchParams.set('scope', this.config.scope),
      o.searchParams.set('state', t.state),
      o.searchParams.set('code_challenge', t.codeChallenge),
      o.searchParams.set('code_challenge_method', 'S256'),
      console.info('[MarketOIDC] Authorization URL built:', o.toString()),
      o.toString()
    );
  }
  async exchangeCodeForToken(t, o) {
    console.info('[MarketOIDC] Exchanging authorization code for token');
    const f = sessionStorage.getItem('market_state');
    if (o !== f)
      throw (
        console.error('[MarketOIDC] State parameter mismatch'),
        new P('stateMismatch', { message: 'Invalid state parameter' })
      );
    const l = sessionStorage.getItem('market_code_verifier');
    if (!l)
      throw (
        console.error('[MarketOIDC] Code verifier not found'),
        new P('codeVerifierMissing', { message: 'Code verifier not found' })
      );
    const m = ae.token,
      h = new URLSearchParams({
        client_id: this.config.clientId,
        code: t,
        code_verifier: l,
        grant_type: 'authorization_code',
        redirect_uri: this.config.redirectUri,
      }),
      a = await fetch(m, {
        body: h.toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });
    if (!a.ok) {
      const k = await a.json().catch(() => {}),
        S =
          `Token exchange failed: ${a.status} ${a.statusText} ${k?.error_description || k?.error || ''}`.trim();
      throw (
        console.error('[MarketOIDC]', S),
        new P('authorizationFailed', {
          message: S,
          meta: { error: k, status: a.status, statusText: a.statusText },
        })
      );
    }
    const s = await a.json();
    return (
      console.info('[MarketOIDC] Token exchange successful'),
      sessionStorage.removeItem('market_code_verifier'),
      sessionStorage.removeItem('market_state'),
      s
    );
  }
  async startAuthorization() {
    const t = await this.buildAuthUrl();
    if (typeof window > 'u')
      throw new P('browserOnly', {
        message: 'Authorization can only be initiated in a browser environment.',
      });
    const o = sessionStorage.getItem('market_state');
    if (!o)
      throw (
        console.error('[MarketOIDC] Missing state parameter in session storage'),
        new P('stateMissing', { message: 'Authorization state not found. Please try again.' })
      );
    let f = null;
    if (
      ((f = window.open(t, 'market_auth', 'width=580,height=720,scrollbars=yes,resizable=yes')), !f)
    )
      throw (
        console.error('[MarketOIDC] Failed to open authorization popup'),
        new P('openPopupFailed', {
          message: 'Failed to open authorization popup. Please check popup blocker settings.',
        })
      );
    return (
      Me(o),
      new Promise((l, m) => {
        let h, a, s;
        const k = setTimeout(() => {
            (S(),
              m(
                new P('handoffTimeout', {
                  message:
                    'Authorization timeout. Please complete the authorization in the browser and try again.',
                }),
              ));
          }, G.WEB_POPUP_TIMEOUT),
          S = () => {
            (window.removeEventListener('message', d),
              window.removeEventListener('storage', w),
              clearTimeout(k),
              h && clearInterval(h),
              a && clearInterval(a),
              s && clearTimeout(s),
              Me(o));
          },
          E = (c) => {
            if ((S(), c.type === 'MARKET_AUTH_SUCCESS')) {
              l({ code: c.code, state: c.state });
              return;
            }
            try {
              f?.close();
            } catch {}
            m(
              new P('authorizationFailed', {
                message: c.error || 'Authorization failed',
                meta: { error: c.error },
              }),
            );
          },
          z = (c) => (!c || (c.state && c.state !== o) ? !1 : (E(c), !0)),
          A = () => z(Rt(o)),
          j = () => {
            a ||
              (a = setInterval(() => {
                A();
              }, G.WEB_POPUP_MONITOR_INTERVAL));
          },
          b = () => {
            (S(), m(new P('popupClosed', { message: 'Authorization popup was closed' })));
          },
          x = () => {
            s ||
              (h && (clearInterval(h), (h = void 0)),
              !A() &&
                (j(),
                (s = setTimeout(() => {
                  A() || b();
                }, G.WEB_POPUP_CLOSE_GRACE_PERIOD))));
          },
          d = (c) => {
            c.origin === window.location.origin &&
              (console.info('[MarketOIDC] Received message from popup:', c.data), z(Se(c.data)));
          },
          w = (c) => {
            if (c.storageArea === localStorage && c.key === xe(o)) {
              if (!c.newValue) {
                A();
                return;
              }
              try {
                z(Se(JSON.parse(c.newValue)));
              } catch {}
            }
          };
        (window.addEventListener('message', d),
          window.addEventListener('storage', w),
          !A() &&
            f &&
            (h = setInterval(() => {
              try {
                f.closed && x();
              } catch {
                (console.info(
                  '[MarketOIDC] COOP blocked popup monitoring, falling back to storage handoff',
                ),
                  h && (clearInterval(h), (h = void 0)),
                  j());
              }
            }, G.WEB_POPUP_MONITOR_INTERVAL)));
      })
    );
  }
  async pollDesktopHandoff(t) {
    console.info('[MarketOIDC] Starting desktop handoff polling with state:', t);
    const o = Date.now(),
      f = `${ae.handoff}?id=${encodeURIComponent(t)}&client=${encodeURIComponent(G.DESKTOP_HANDOFF_CLIENT)}`;
    for (console.info('[MarketOIDC] Poll URL:', f); Date.now() - o < G.DESKTOP_HANDOFF_TIMEOUT; )
      try {
        const l = await fetch(f, { cache: 'no-store', credentials: 'include' }),
          m = await l.json().catch(() => {});
        if (
          (console.info('[MarketOIDC] Poll response:', l.status, m),
          l.status === 200 && m?.status === 'success' && typeof m?.code == 'string')
        )
          return (
            console.info('[MarketOIDC] Desktop handoff succeeded'),
            { code: m.code, state: t }
          );
        if (l.status === 202 || m?.status === 'pending') {
          await new Promise((a) => {
            setTimeout(a, G.DESKTOP_HANDOFF_POLL_INTERVAL);
          });
          continue;
        }
        if (l.status === 404 || m?.status === 'consumed')
          throw new P('codeConsumed', {
            message: 'Authorization code already consumed. Please retry.',
          });
        if (l.status === 410 || m?.status === 'expired')
          throw new P('sessionExpired', {
            message: 'Authorization session expired. Please restart the sign-in process.',
          });
        const h = m?.error || m?.message || `Handoff request failed with status ${l.status}`;
        throw (
          console.error('[MarketOIDC] Handoff polling failed:', h),
          new P('handoffFailed', { message: h, meta: { data: m, status: l.status } })
        );
      } catch (l) {
        if (
          (console.error('[MarketOIDC] Error while polling handoff endpoint:', l), l instanceof P)
        )
          throw l;
        const m =
          l instanceof Error
            ? l.message
            : 'Failed to retrieve authorization result from handoff endpoint.';
        throw new P('handoffFailed', { cause: l, message: m });
      }
    throw (
      console.warn('[MarketOIDC] Desktop handoff polling timed out'),
      new P('handoffTimeout', {
        message:
          'Authorization timeout. Please complete the authorization in the browser and try again.',
      })
    );
  }
}
const Et = { github: bt, twitter: Ct },
  Mt = { github: 'GitHub', twitter: 'X (Twitter)' },
  we = r.memo(
    ({
      provider: n,
      profile: t,
      isConnecting: o,
      isDisconnecting: f,
      disabled: l,
      onConnect: m,
      onDisconnect: h,
    }) => {
      const { t: a } = te('marketAuth'),
        s = Et[n],
        k = Mt[n],
        E = o || f || l;
      return t
        ? e.jsxs(R, {
            horizontal: !0,
            align: 'center',
            gap: 12,
            justify: 'space-between',
            style: {
              background: D.colorFillQuaternary,
              borderRadius: D.borderRadiusLG,
              padding: '8px 12px',
            },
            children: [
              e.jsxs(R, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [
                  e.jsx(s, { size: 18 }),
                  e.jsxs(R, {
                    gap: 2,
                    children: [
                      e.jsxs(M, { style: { fontSize: 13 }, children: ['@', t.username] }),
                      e.jsx(M, {
                        style: { fontSize: 11 },
                        type: 'secondary',
                        children: a('profileSetup.socialLinks.connected', {
                          defaultValue: 'Connected',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(ye, {
                title: a('profileSetup.socialLinks.disconnect', { defaultValue: 'Disconnect' }),
                children: e.jsx(Xe, {
                  disabled: E,
                  icon: f ? at : it,
                  loading: f,
                  size: 'small',
                  onClick: h,
                }),
              }),
            ],
          })
        : e.jsx(Je, {
            block: !0,
            disabled: E,
            icon: o ? e.jsx(xt, { size: 'small' }) : e.jsx(s, { size: 16 }),
            style: {
              alignItems: 'center',
              display: 'flex',
              gap: 8,
              height: 40,
              justifyContent: 'flex-start',
              paddingLeft: 12,
            },
            onClick: m,
            children: e.jsxs(R, {
              horizontal: !0,
              align: 'center',
              flex: 1,
              justify: 'space-between',
              children: [
                e.jsx('span', {
                  children: o
                    ? a('profileSetup.socialLinks.connecting', { defaultValue: 'Connecting...' })
                    : a('profileSetup.socialLinks.connectProvider', {
                        defaultValue: `Connect ${k}`,
                        provider: k,
                      }),
                }),
                !o && e.jsx(lt, { size: 14, style: { opacity: 0.5 } }),
              ],
            }),
          });
    },
  );
we.displayName = 'SocialConnectButton';
const _t = 1e3,
  Ut = 15e3,
  vt = 'SOCIAL_PROFILE_AUTH_CALLBACK',
  jt = 'SOCIAL_PROFILE_AUTH_ERROR',
  _e = ({
    provider: n,
    onConnectSuccess: t,
    onDisconnectSuccess: o,
    onClaimableResourcesFound: f,
  }) => {
    const [l, m] = r.useState(!1),
      [h, a] = r.useState(!1),
      [s, k] = r.useState(!1),
      [S, E] = r.useState(null),
      [z, A] = r.useState(null),
      j = r.useRef(null),
      b = r.useRef(null),
      x = r.useRef(null),
      d = r.useRef(null),
      w = r.useRef(!1),
      c = r.useCallback(() => {
        (b.current && (clearInterval(b.current), (b.current = null)),
          x.current && (clearInterval(x.current), (x.current = null)),
          d.current && (clearTimeout(d.current), (d.current = null)),
          (j.current = null),
          a(!1));
      }, []);
    r.useEffect(
      () => () => {
        c();
      },
      [c],
    );
    const I = r.useCallback(async () => {
        try {
          const i = await ge.market.connectGetStatus.query({ provider: n });
          if (i.connected && i.connection) {
            const T = { id: n, provider: n, username: i.connection.providerUsername || n };
            return (E(T), T);
          }
          return (E(null), null);
        } catch (i) {
          return (console.error('[SocialConnect] Failed to fetch profile:', i), E(null), null);
        }
      }, [n]),
      O = r.useCallback(async () => {
        try {
          const i = await V.market.socialProfile.scanClaimableResources.query();
          return ((i.plugins.length > 0 || i.skills.length > 0) && f?.(i), i);
        } catch (i) {
          return (
            console.error('[SocialConnect] Failed to scan claimable resources:', i),
            { plugins: [], skills: [] }
          );
        }
      }, [f]),
      $ = r.useCallback(
        async (i) => {
          w.current || ((w.current = !0), c(), E(i), t?.(i), await O());
        },
        [O, c, t],
      ),
      L = r.useCallback(async () => {
        const i = await I();
        return i ? (await $(i), !0) : !1;
      }, [I, $]),
      N = r.useCallback(() => {
        if (x.current || w.current) return;
        a(!0);
        const i = async () => {
          try {
            await L();
          } catch (T) {
            console.error('[SocialConnect] Polling check failed:', T);
          }
        };
        ((x.current = setInterval(i, _t)),
          i(),
          (d.current = setTimeout(() => {
            (x.current && (clearInterval(x.current), (x.current = null)), w.current || a(!1));
          }, Ut)));
      }, [L]);
    r.useEffect(() => {
      const i = async (T) => {
        T.origin === window.location.origin &&
          T.data?.provider === n &&
          (T.data?.type === vt && N(),
          T.data?.type === jt && (c(), A(T.data?.error || 'Failed to connect')));
      };
      return (
        window.addEventListener('message', i),
        () => window.removeEventListener('message', i)
      );
    }, [c, n, N]);
    const B = r.useCallback(
        (i) => {
          b.current = setInterval(async () => {
            try {
              i.closed &&
                (b.current && (clearInterval(b.current), (b.current = null)),
                (j.current = null),
                (await L()) || N());
            } catch {
              (b.current && (clearInterval(b.current), (b.current = null)), N());
            }
          }, 500);
        },
        [L, N],
      ),
      F = r.useCallback(
        (i) => {
          (c(), (w.current = !1), a(!0), A(null));
          const T = window.open(i, '_blank', 'width=600,height=700');
          T ? ((j.current = T), B(T)) : N();
        },
        [c, B, N],
      ),
      K = r.useCallback(async () => {
        if (!S) {
          (m(!0), A(null));
          try {
            const i = `${window.location.origin}/oauth/callback/social?provider=${encodeURIComponent(n)}`,
              T = await ge.market.connectGetAuthorizeUrl.query({ provider: n, redirectUri: i });
            if (T.authorizeUrl) F(T.authorizeUrl);
            else throw new Error('No authorize URL returned');
          } catch (i) {
            (console.error('[SocialConnect] Failed to get authorize URL:', i),
              A(i instanceof Error ? i.message : 'Failed to connect'));
          } finally {
            m(!1);
          }
        }
      }, [n, S, F]),
      U = r.useCallback(async () => {
        if (S) {
          (k(!0), A(null));
          try {
            (await ge.market.connectRevoke.mutate({ provider: n }), E(null), o?.());
          } catch (i) {
            (console.error('[SocialConnect] Failed to disconnect:', i),
              A(i instanceof Error ? i.message : 'Failed to disconnect'));
          } finally {
            k(!1);
          }
        }
      }, [S, n, o]);
    return {
      connect: K,
      disconnect: U,
      error: z,
      fetchProfile: I,
      isConnected: !!S,
      isConnecting: l || h,
      isDisconnecting: s,
      profile: S,
    };
  },
  Ue = 2 * 1024 * 1024,
  Ne = r.memo(
    ({
      open: n,
      onClose: t,
      onShowClaimResources: o,
      onSuccess: f,
      accessToken: l,
      defaultDisplayName: m,
      userProfile: h,
      isFirstTimeSetup: a = !1,
    }) => {
      const { t: s } = te('marketAuth'),
        { message: k } = Ce.useApp(),
        [S] = W.useForm(),
        [E, z] = r.useState(!1),
        A = Ze(wt.currentLanguage),
        j = ve(je.enableMarketTrustedClient),
        b = re(Qe.userAvatar),
        [x, d] = r.useState(null),
        [w, c] = r.useState(!1),
        [I, O] = r.useState(null),
        [$, L] = r.useState(!1),
        [N, B] = r.useState(!1),
        F = St((p) => p.uploadWithProgress),
        K = r.useCallback(
          (p) => {
            o?.(p);
          },
          [o],
        ),
        U = _e({ onClaimableResourcesFound: K, provider: 'github' }),
        i = _e({ onClaimableResourcesFound: K, provider: 'twitter' });
      (r.useEffect(() => {
        n &&
          !a &&
          (async () => {
            B(!0);
            try {
              await Promise.all([U.fetchProfile(), i.fetchProfile()]);
            } finally {
              B(!1);
            }
          })();
      }, [n, a, U.fetchProfile, i.fetchProfile]),
        r.useEffect(() => {
          if (n) {
            const p = h?.userName,
              y = h?.displayName || m || '',
              v = y
                .toLowerCase()
                .replaceAll(/[^\w-]/g, '')
                .slice(0, 32);
            (S.setFieldsValue({
              description: h?.description || '',
              displayName: y,
              userName: p || v,
              website: h?.socialLinks?.website || '',
            }),
              d(h?.avatarUrl || b || null),
              O(h?.bannerUrl || null));
          }
        }, [n, h, m, S, b]));
      const T = r.useCallback((p) => {
          d(p);
        }, []),
        ie = r.useCallback(
          async (p) => {
            if (p.size > Ue) {
              k.error(s('profileSetup.errors.fileTooLarge'));
              return;
            }
            c(!0);
            try {
              const y = await F({ file: p });
              y?.url && d(y.url);
            } catch (y) {
              (console.error('[ProfileSetupModal] Avatar upload failed:', y),
                k.error(s('profileSetup.errors.uploadFailed')));
            } finally {
              c(!1);
            }
          },
          [F, k, s],
        ),
        le = r.useCallback(() => {
          d(null);
        }, []),
        Z = r.useCallback(
          async (p) => {
            const y = p.file;
            if (y.size > Ue) {
              (k.error(s('profileSetup.errors.fileTooLarge')),
                p.onError?.(new Error('File too large')));
              return;
            }
            L(!0);
            try {
              const v = await F({ file: y });
              v?.url && (O(v.url), p.onSuccess?.(v));
            } catch (v) {
              (console.error('[ProfileSetupModal] Banner upload failed:', v),
                k.error(s('profileSetup.errors.uploadFailed')),
                p.onError?.(v));
            } finally {
              L(!1);
            }
          },
          [F, k, s],
        ),
        ce = r.useCallback(() => {
          O(null);
        }, []),
        Q = r.useCallback(async () => {
          if (!j && !l) {
            k.error(s('profileSetup.errors.notAuthenticated'));
            return;
          }
          try {
            const p = await S.validateFields();
            z(!0);
            const y = {};
            (U.profile?.username && (y.github = U.profile.username),
              i.profile?.username && (y.twitter = i.profile.username),
              p.website && (y.website = p.website));
            const v = {};
            (p.description && (v.description = p.description),
              I && (v.bannerUrl = I),
              Object.keys(y).length > 0 && (v.socialLinks = y));
            const q = await V.market.user.updateUserProfile.mutate({
              avatarUrl: x || void 0,
              displayName: p.displayName,
              meta: Object.keys(v).length > 0 ? v : void 0,
              userName: p.userName,
            });
            k.success(s('profileSetup.success'));
            const ne = {
              avatarUrl: q.user?.avatarUrl || x || null,
              bannerUrl: I || null,
              createdAt: q.user?.createdAt || new Date().toISOString(),
              description: p.description || null,
              displayName: p.displayName || null,
              id: q.user?.id || 0,
              namespace: q.user?.namespace || '',
              socialLinks: Object.keys(y).length > 0 ? y : null,
              type: q.user?.type || null,
              userName: p.userName || null,
            };
            if (U.profile)
              try {
                const X = await V.market.socialProfile.scanClaimableResources.query();
                if (X.plugins.length > 0 || X.skills.length > 0) {
                  (f?.(ne), t(), o?.(X));
                  return;
                }
              } catch (X) {
                console.error('[ProfileSetupModal] Failed to scan claimable resources:', X);
              }
            (f?.(ne), t());
          } catch (p) {
            if (
              (console.error('[ProfileSetupModal] Update failed:', p),
              p instanceof Error && p.message !== 'Validation failed')
            ) {
              const y = p.message || '';
              y.toLowerCase().includes('already taken') || y.includes('CONFLICT')
                ? k.error(s('profileSetup.errors.usernameTaken'))
                : k.error(s('profileSetup.errors.updateFailed'));
            }
          } finally {
            z(!1);
          }
        }, [l, x, I, j, S, U.profile, i.profile, k, t, o, f, s]),
        ue = r.useCallback(async () => {
          try {
            const p = await S.validateFields(),
              y = h?.userName;
            if (!a && y && p.userName !== y) {
              Ye.confirm({
                cancelText: s('profileSetup.confirmChangeUserId.cancel'),
                content: s('profileSetup.confirmChangeUserId.description', {
                  newId: p.userName,
                  oldId: y,
                }),
                okButtonProps: { danger: !0 },
                okText: s('profileSetup.confirmChangeUserId.confirm'),
                title: s('profileSetup.confirmChangeUserId.title'),
                onOk: Q,
              });
              return;
            }
            await Q();
          } catch {}
        }, [Q, S, a, s, h?.userName]),
        de = r.useCallback(() => {
          a || t();
        }, [a, t]);
      return e.jsxs(be, {
        centered: !0,
        cancelButtonProps: a ? { style: { display: 'none' } } : void 0,
        cancelText: s('profileSetup.cancel'),
        closable: !a,
        confirmLoading: E,
        keyboard: !a,
        maskClosable: !a,
        okText: s(a ? 'profileSetup.getStarted' : 'profileSetup.save'),
        open: n,
        title: !1,
        width: 640,
        onCancel: de,
        onOk: ue,
        children: [
          e.jsx(M, {
            strong: !0,
            fontSize: 20,
            style: { marginTop: 16 },
            children: s(a ? 'profileSetup.titleFirstTime' : 'profileSetup.titleEdit'),
          }),
          e.jsx(M, {
            style: { display: 'block', marginBottom: 24 },
            type: 'secondary',
            children: s(a ? 'profileSetup.descriptionFirstTime' : 'profileSetup.descriptionEdit'),
          }),
          e.jsxs(W, {
            form: S,
            layout: 'vertical',
            children: [
              e.jsxs(R, {
                horizontal: !0,
                gap: 24,
                children: [
                  e.jsxs(R, {
                    flex: 1,
                    children: [
                      e.jsx(W.Item, {
                        label: s('profileSetup.fields.displayName.label'),
                        name: 'displayName',
                        rules: [
                          { message: s('profileSetup.fields.displayName.required'), required: !0 },
                          { max: 50, message: s('profileSetup.fields.displayName.maxLength') },
                        ],
                        children: e.jsx(me, {
                          showCount: !0,
                          maxLength: 50,
                          placeholder: s('profileSetup.fields.displayName.placeholder'),
                        }),
                      }),
                      e.jsx(W.Item, {
                        name: 'userName',
                        label: e.jsxs(R, {
                          horizontal: !0,
                          align: 'center',
                          gap: 4,
                          children: [
                            s('profileSetup.fields.userName.label'),
                            e.jsx(ye, {
                              title: s('profileSetup.fields.userName.tooltip'),
                              children: e.jsx(Re, {
                                size: 14,
                                style: { cursor: 'help', opacity: 0.5 },
                              }),
                            }),
                          ],
                        }),
                        rules: [
                          { message: s('profileSetup.fields.userName.required'), required: !0 },
                          {
                            message: s('profileSetup.fields.userName.pattern'),
                            pattern: /^[\w-]+$/,
                          },
                          { max: 32, message: s('profileSetup.fields.userName.maxLength') },
                          { message: s('profileSetup.fields.userName.minLength'), min: 3 },
                        ],
                        children: e.jsx(me, {
                          showCount: !0,
                          maxLength: 32,
                          placeholder: s('profileSetup.fields.userName.placeholder'),
                          prefix: '@',
                        }),
                      }),
                    ],
                  }),
                  e.jsx(W.Item, {
                    children: e.jsx(yt, {
                      allowDelete: !!x,
                      loading: w,
                      locale: A,
                      shape: 'square',
                      size: 80,
                      value: x || void 0,
                      allowUpload: { enableEmoji: !1 },
                      onChange: T,
                      onDelete: le,
                      onUpload: ie,
                    }),
                  }),
                ],
              }),
              e.jsx(W.Item, {
                label: s('profileSetup.fields.description.label'),
                name: 'description',
                rules: [{ max: 200, message: s('profileSetup.fields.description.maxLength') }],
                children: e.jsx(kt, {
                  showCount: !0,
                  maxLength: 200,
                  placeholder: s('profileSetup.fields.description.placeholder'),
                  rows: 3,
                }),
              }),
              !a &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(W.Item, {
                      label: e.jsxs(R, {
                        horizontal: !0,
                        align: 'center',
                        gap: 4,
                        children: [
                          s('profileSetup.fields.bannerUrl.label'),
                          e.jsx(ye, {
                            title: s('profileSetup.fields.bannerUrl.tooltip'),
                            children: e.jsx(Re, {
                              size: 14,
                              style: { cursor: 'help', opacity: 0.5 },
                            }),
                          }),
                        ],
                      }),
                      children: e.jsxs(R, {
                        gap: 8,
                        width: '100%',
                        children: [
                          e.jsx(It, {
                            accept: 'image/*',
                            customRequest: Z,
                            maxCount: 1,
                            showUploadList: !1,
                            style: { display: 'block', width: '100%' },
                            children: e.jsx('div', {
                              style: {
                                backgroundColor: I ? void 0 : D.colorFillTertiary,
                                backgroundImage: I ? `url(${I})` : void 0,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderRadius: D.borderRadiusLG,
                                cursor: 'pointer',
                                height: 120,
                                overflow: 'hidden',
                                position: 'relative',
                                width: '100%',
                              },
                              children: e.jsx(et, {
                                style: {
                                  background: I ? 'rgba(0,0,0,0.4)' : 'transparent',
                                  height: '100%',
                                  opacity: I ? 0 : 1,
                                  transition: 'opacity 0.2s',
                                  width: '100%',
                                },
                                onMouseEnter: (p) => {
                                  p.currentTarget.style.opacity = '1';
                                },
                                onMouseLeave: (p) => {
                                  I && (p.currentTarget.style.opacity = '0');
                                },
                                children: e.jsxs(R, {
                                  align: 'center',
                                  gap: 8,
                                  children: [
                                    e.jsx(ct, {
                                      size: 24,
                                      style: { color: I ? '#fff' : D.colorTextSecondary },
                                    }),
                                    e.jsx(M, {
                                      style: {
                                        color: I ? '#fff' : D.colorTextSecondary,
                                        fontSize: 12,
                                      },
                                      children: s(
                                        $
                                          ? 'profileSetup.fields.bannerUrl.uploading'
                                          : 'profileSetup.fields.bannerUrl.clickToUpload',
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          I &&
                            e.jsx(R, {
                              horizontal: !0,
                              align: 'center',
                              gap: 8,
                              justify: 'flex-end',
                              children: e.jsx(M, {
                                style: { color: D.colorError, cursor: 'pointer', fontSize: 12 },
                                onClick: (p) => {
                                  (p.stopPropagation(), ce());
                                },
                                children: e.jsxs(R, {
                                  horizontal: !0,
                                  align: 'center',
                                  gap: 4,
                                  children: [
                                    e.jsx(ut, { size: 12 }),
                                    s('profileSetup.fields.bannerUrl.remove'),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    e.jsx(M, {
                      style: { display: 'block', marginBottom: 12 },
                      type: 'secondary',
                      children: s('profileSetup.socialLinks.title'),
                    }),
                    e.jsxs(R, {
                      gap: 12,
                      style: { marginBottom: 16 },
                      children: [
                        e.jsx(we, {
                          disabled: N,
                          isConnecting: U.isConnecting,
                          isDisconnecting: U.isDisconnecting,
                          profile: U.profile,
                          provider: 'github',
                          onConnect: U.connect,
                          onDisconnect: U.disconnect,
                        }),
                        e.jsx(we, {
                          disabled: N,
                          isConnecting: i.isConnecting,
                          isDisconnecting: i.isDisconnecting,
                          profile: i.profile,
                          provider: 'twitter',
                          onConnect: i.connect,
                          onDisconnect: i.disconnect,
                        }),
                      ],
                    }),
                    e.jsx(W.Item, {
                      name: 'website',
                      rules: [
                        { message: s('profileSetup.fields.website.invalidUrl'), type: 'url' },
                      ],
                      children: e.jsx(me, {
                        placeholder: s('profileSetup.fields.website.placeholder'),
                        prefix: e.jsx(tt, {
                          color: D.colorTextSecondary,
                          icon: dt,
                          style: { marginRight: 8 },
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    },
  );
Ne.displayName = 'ProfileSetupModal';
const zt = async (n) => await V.market.user.getUserByUsername.query({ username: n }),
  Ot = (n) =>
    rt(n ? ['market-user-profile', n] : null, () => zt(n), {
      dedupingInterval: 6e4,
      revalidateOnFocus: !1,
      revalidateOnReconnect: !1,
    });
var Lt = {};
const De = r.createContext(null),
  Y = async (n) => {
    try {
      return await V.market.oidc.getUserInfo.mutate({ token: n });
    } catch (t) {
      return (console.error('[MarketAuth] Error fetching user info:', t), null);
    }
  },
  ee = () => nt.currentSettings(re.getState()).market,
  ke = async (n, t, o) => {
    try {
      await re
        .getState()
        .setSettings({ market: { accessToken: n, expiresAt: o, refreshToken: t } });
    } catch (f) {
      console.error('[MarketAuth] Failed to save tokens to DB:', f);
    }
  },
  oe = async () => {
    const n = ee();
    if (!(!n?.accessToken && !n?.refreshToken && !n?.expiresAt))
      try {
        await re.getState().setSettings({ market: void 0 });
      } catch (t) {
        console.error('[MarketAuth] Failed to clear tokens from DB:', t);
      }
  },
  Nt = () => {
    const n = ee();
    return n?.refreshToken ? n.refreshToken : null;
  },
  Dt = async (n) => {
    try {
      return !(await V.market.user.getUserByUsername.query({ username: n })).userName;
    } catch {
      return !0;
    }
  },
  dr = ({ children: n, isDesktop: t }) => {
    const { message: o } = Ce.useApp(),
      { t: f } = te('marketAuth'),
      [l, m] = r.useState(null),
      [h, a] = r.useState('loading'),
      [s, k] = r.useState(null),
      [S, E] = r.useState(!1),
      [z, A] = r.useState(!1),
      [j, b] = r.useState(!1),
      [x, d] = r.useState(null),
      [w, c] = r.useState(null),
      [I, O] = r.useState(null),
      [$, L] = r.useState(null),
      [N, B] = r.useState(!1),
      [F, K] = r.useState(null),
      U = re((u) => u.isUserStateInit),
      i = ve(je.enableMarketTrustedClient);
    r.useEffect(() => {
      if (typeof window < 'u') {
        const u = Lt.NEXT_PUBLIC_MARKET_BASE_URL || 'https://market.lobehub.com',
          g = new URL(ae.desktopCallback, u).toString(),
          C = t ? g : `${window.location.origin}/market-auth-callback`,
          _ = {
            baseUrl: u,
            clientId: t ? 'lobehub-desktop' : 'lobechat-com',
            redirectUri: C,
            scope: 'openid profile email',
          };
        k(new G(_));
      }
    }, [t]);
    const T = async (u) => {
        try {
          const g = t ? 'lobehub-desktop' : 'lobechat-com',
            C = await V.market.oidc.refreshToken.mutate({ clientId: g, refreshToken: u }),
            _ = C.expiresIn ?? 3600,
            H = Date.now() + _ * 1e3;
          await ke(C.accessToken, C.refreshToken, H);
          const se = await Y(C.accessToken),
            pe = {
              accessToken: C.accessToken,
              expiresAt: H,
              expiresIn: _,
              scope: C.scope || 'openid profile email',
              tokenType: 'Bearer',
              userInfo: se || void 0,
            };
          return (
            m(pe),
            a('authenticated'),
            console.info('[MarketAuth] Token refreshed successfully during initialization'),
            !0
          );
        } catch (g) {
          return (
            console.error('[MarketAuth] Failed to refresh token during initialization:', g),
            !1
          );
        }
      },
      ie = async () => {
        if ((a('loading'), i)) {
          const _ = await Y();
          if (_) {
            const H = {
              accessToken: '',
              expiresAt: Number.MAX_SAFE_INTEGER,
              expiresIn: Number.MAX_SAFE_INTEGER,
              scope: 'openid profile email',
              tokenType: 'Bearer',
              userInfo: _,
            };
            (m(H), a('authenticated'));
            return;
          }
          a('unauthenticated');
          return;
        }
        const u = ee();
        if (!u?.accessToken) {
          a('unauthenticated');
          return;
        }
        if (!u.expiresAt || u.expiresAt <= Date.now()) {
          if (
            u.refreshToken &&
            (console.info('[MarketAuth] Access token expired, attempting refresh...'),
            await T(u.refreshToken))
          )
            return;
          (await oe(), a('unauthenticated'));
          return;
        }
        const g = await Y(u.accessToken);
        if (!g) {
          if (
            u.refreshToken &&
            (console.info('[MarketAuth] Access token invalid, attempting refresh...'),
            await T(u.refreshToken))
          )
            return;
          (await oe(), a('unauthenticated'));
          return;
        }
        const C = {
          accessToken: u.accessToken,
          expiresAt: u.expiresAt,
          expiresIn: Math.floor((u.expiresAt - Date.now()) / 1e3),
          scope: 'openid profile email',
          tokenType: 'Bearer',
          userInfo: g,
        };
        (m(C), a('authenticated'));
      },
      le = async () => {
        if (!s)
          throw (
            console.error('[MarketAuth] OIDC client not initialized'),
            new P('oidcNotReady', { message: 'OIDC client not initialized' })
          );
        try {
          a('loading');
          const u = await s.startAuthorization(),
            g = await s.exchangeCodeForToken(u.code, u.state),
            C = await Y(g.accessToken),
            _ = Date.now() + g.expiresIn * 1e3,
            H = {
              accessToken: g.accessToken,
              expiresAt: _,
              expiresIn: g.expiresIn,
              scope: g.scope,
              tokenType: g.tokenType,
              userInfo: C || void 0,
            };
          return (
            await ke(g.accessToken, g.refreshToken, _),
            m(H),
            a('authenticated'),
            C?.sub &&
              (await Dt(C.sub)) &&
              setTimeout(() => {
                (b(!0), A(!0));
              }, 0),
            C?.accountId ?? null
          );
        } catch (u) {
          throw (
            a('unauthenticated'),
            u instanceof P
              ? o.error(f(`errors.${u.code}`) || f('errors.general'))
              : o.error(f('errors.general')),
            u
          );
        }
      },
      Z = r.useCallback(
        async () =>
          new Promise((u, g) => {
            (d(() => u), c(() => g), E(!0));
          }),
        [],
      ),
      ce = async () => {
        if ((E(!1), i)) {
          (b(!0), A(!0), x && (x(l?.userInfo?.accountId ?? null), d(null), c(null)));
          return;
        }
        try {
          const u = await le();
          x && (x(u), d(null), c(null));
        } catch (u) {
          w && (w(u), d(null), c(null));
        }
      },
      Q = () => {
        (E(!1), w && (w(new Error('User cancelled authorization')), d(null), c(null)));
      },
      ue = async () => {
        (m(null), a('unauthenticated'), await oe());
      },
      de = () => l?.userInfo ?? null,
      p = () => (l?.accessToken ? l.accessToken : (ee()?.accessToken ?? null)),
      y = r.useCallback((u) => {
        (b(!1), O(() => u || null), A(!0));
      }, []),
      v = r.useCallback(() => {
        (A(!1), b(!1), O(null));
      }, []),
      q = r.useCallback((u) => {
        (L(u), B(!0));
      }, []),
      ne = r.useCallback(() => {
        (B(!1), L(null), K(null));
      }, []),
      X = r.useCallback(() => {
        (B(!1),
          L(null),
          F && (F(), K(null)),
          Pe((u) => typeof u == 'string' && u.startsWith('user-profile'), void 0, {
            revalidate: !0,
          }));
      }, [F]),
      Fe = r.useCallback(
        async (u) => {
          if (h !== 'authenticated') return !1;
          try {
            const g = await V.market.socialProfile.scanClaimableResources.query();
            return g.plugins.length > 0 || g.skills.length > 0
              ? (u && K(() => u), L(g), B(!0), !0)
              : !1;
          } catch (g) {
            return (console.error('[MarketAuth] Failed to check claimable resources:', g), !1);
          }
        },
        [h],
      ),
      Ie = r.useCallback(() => {}, []),
      J = r.useCallback(async () => {
        const u = ee();
        if (!u?.refreshToken) return (console.warn('[MarketAuth] No refresh token available'), !1);
        try {
          const g = t ? 'lobehub-desktop' : 'lobechat-com',
            C = await V.market.oidc.refreshToken.mutate({
              clientId: g,
              refreshToken: u.refreshToken,
            }),
            _ = C.expiresIn ?? 3600,
            H = Date.now() + _ * 1e3;
          await ke(C.accessToken, C.refreshToken, H);
          const se = await Y(C.accessToken),
            pe = {
              accessToken: C.accessToken,
              expiresAt: H,
              expiresIn: _,
              scope: C.scope || 'openid profile email',
              tokenType: 'Bearer',
              userInfo: se || void 0,
            };
          return (
            m(pe),
            a('authenticated'),
            console.info('[MarketAuth] Token refreshed successfully'),
            !0
          );
        } catch (g) {
          return (
            console.error('[MarketAuth] Failed to refresh token:', g),
            await oe(),
            m(null),
            a('unauthenticated'),
            !1
          );
        }
      }, [t]),
      fe = r.useCallback(async () => {
        if (
          (console.info('[MarketAuth] Handling unauthorized error, attempting recovery...'),
          await J())
        )
          return (console.info('[MarketAuth] Token refresh successful, recovered from 401'), !0);
        console.info('[MarketAuth] Token refresh failed, triggering signIn...');
        try {
          return (await Z()) !== null
            ? (console.info('[MarketAuth] Re-authentication successful'), !0)
            : !1;
        } catch (g) {
          return (console.error('[MarketAuth] Re-authentication failed:', g), !1);
        }
      }, [J, Z]);
    (r.useEffect(() => {
      U && ie();
    }, [U, i]),
      r.useEffect(() => {
        if (i || h !== 'authenticated' || !l?.expiresAt) return;
        const u = 300 * 1e3,
          C = l.expiresAt - Date.now() - u;
        if (C <= 0) {
          J();
          return;
        }
        const _ = setTimeout(() => {
          (console.info('[MarketAuth] Auto-refreshing token before expiration...'), J());
        }, C);
        return () => {
          clearTimeout(_);
        };
      }, [h, l?.expiresAt, i, J]),
      r.useEffect(
        () =>
          pt.on('market-unauthorized', async (g) => {
            (console.info('[MarketAuth] Received unauthorized event for path:', g.path),
              await fe());
          }),
        [fe],
      ));
    const Be = {
        checkAndShowClaimableResources: Fe,
        getAccessToken: p,
        getCurrentUserInfo: de,
        getRefreshToken: Nt,
        handleUnauthorized: fe,
        isAuthenticated: i || h === 'authenticated',
        isLoading: h === 'loading',
        openProfileSetup: y,
        refreshToken: J,
        session: l,
        signIn: Z,
        signOut: ue,
        status: h,
      },
      Ve = l?.userInfo?.sub,
      { data: Te, mutate: Ae } = Ot(Ve),
      He = r.useCallback(
        (u) => {
          (Ie(),
            Ae(u, !1),
            u.userName &&
              Pe(
                (g) => typeof g == 'string' && g.includes('user-profile') && g.includes(u.userName),
                void 0,
                { revalidate: !0 },
              ),
            I && (I(u), O(null)));
        },
        [Ie, Ae, I],
      );
    return e.jsxs(De, {
      value: Be,
      children: [
        n,
        e.jsx(Oe, { open: S, onCancel: Q, onConfirm: ce }),
        e.jsx(Ne, {
          accessToken: l?.accessToken ?? null,
          defaultDisplayName: Te?.displayName || '',
          isFirstTimeSetup: j,
          open: z,
          userProfile: Te,
          onClose: v,
          onShowClaimResources: q,
          onSuccess: He,
        }),
        $ && e.jsx(ze, { open: N, resources: $, onClose: ne, onSuccess: X }),
      ],
    });
  },
  fr = () => {
    const n = r.use(De);
    if (!n) throw new Error('useMarketAuth must be used within a MarketAuthProvider');
    return n;
  };
export { dr as M, Ot as a, ur as r, fr as u };
