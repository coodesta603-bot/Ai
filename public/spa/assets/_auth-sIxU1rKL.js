import './purify.es-r8glNMJW.js';
import { df as u, dg as S, R as P, v as m } from './index-C8UyLGsD.js';
import { s as t, g as s, h as K, M as i } from './providerConfig-qS2Xx-oI.js';
import { g as U, u as M } from './store-CTAK9tZ0.js';
import { a as O } from './selectors-BgvhR9tA.js';
class G {
  _cache = new Map();
  _mode = 'random';
  getKeyStore(_) {
    let o = this._cache.get(_);
    if (!o) {
      const A = _.split(',')
        .map((E) => E.trim())
        .filter((E) => !!E);
      ((o = { index: 0, keyLen: A.length, keys: A }), this._cache.set(_, o));
    }
    return o;
  }
  pick(_ = '') {
    if (!_) return;
    const o = this.getKeyStore(_);
    let A = 0;
    return (
      this._mode === 'turn' && (A = o.index++ % o.keyLen),
      this._mode === 'random' && (A = Math.floor(Math.random() * o.keyLen)),
      o.keys[A]
    );
  }
}
const H = new G();
var T = {};
const f = () =>
  u({
    clientPrefix: 'NEXT_PUBLIC_',
    client: {},
    server: {
      AUTH_SECRET: t(),
      AUTH_SSO_PROVIDERS: t().optional().default(''),
      AUTH_TRUSTED_ORIGINS: t().optional(),
      AUTH_EMAIL_VERIFICATION: s().optional().default(!1),
      AUTH_ENABLE_MAGIC_LINK: s().optional().default(!1),
      AUTH_ALLOWED_EMAILS: t().optional(),
      AUTH_DISABLE_EMAIL_PASSWORD: s().optional().default(!1),
      AUTH_GOOGLE_ID: t().optional(),
      AUTH_GOOGLE_SECRET: t().optional(),
      AUTH_APPLE_CLIENT_ID: t().optional(),
      AUTH_APPLE_CLIENT_SECRET: t().optional(),
      AUTH_APPLE_APP_BUNDLE_IDENTIFIER: t().optional(),
      AUTH_GITHUB_ID: t().optional(),
      AUTH_GITHUB_SECRET: t().optional(),
      AUTH_COGNITO_ID: t().optional(),
      AUTH_COGNITO_SECRET: t().optional(),
      AUTH_COGNITO_ISSUER: t().optional(),
      AUTH_COGNITO_DOMAIN: t().optional(),
      AUTH_COGNITO_REGION: t().optional(),
      AUTH_COGNITO_USERPOOL_ID: t().optional(),
      AUTH_MICROSOFT_AUTHORITY_URL: t().optional(),
      AUTH_MICROSOFT_ID: t().optional(),
      AUTH_MICROSOFT_SECRET: t().optional(),
      AUTH_MICROSOFT_TENANT_ID: t().optional(),
      AUTH_AUTH0_ID: t().optional(),
      AUTH_AUTH0_SECRET: t().optional(),
      AUTH_AUTH0_ISSUER: t().optional(),
      AUTH_AUTHELIA_ID: t().optional(),
      AUTH_AUTHELIA_SECRET: t().optional(),
      AUTH_AUTHELIA_ISSUER: t().optional(),
      AUTH_AUTHENTIK_ID: t().optional(),
      AUTH_AUTHENTIK_SECRET: t().optional(),
      AUTH_AUTHENTIK_ISSUER: t().optional(),
      AUTH_CASDOOR_ID: t().optional(),
      AUTH_CASDOOR_SECRET: t().optional(),
      AUTH_CASDOOR_ISSUER: t().optional(),
      AUTH_CLOUDFLARE_ZERO_TRUST_ID: t().optional(),
      AUTH_CLOUDFLARE_ZERO_TRUST_SECRET: t().optional(),
      AUTH_CLOUDFLARE_ZERO_TRUST_ISSUER: t().optional(),
      AUTH_FEISHU_APP_ID: t().optional(),
      AUTH_FEISHU_APP_SECRET: t().optional(),
      AUTH_GENERIC_OIDC_ID: t().optional(),
      AUTH_GENERIC_OIDC_SECRET: t().optional(),
      AUTH_GENERIC_OIDC_ISSUER: t().optional(),
      AUTH_KEYCLOAK_ID: t().optional(),
      AUTH_KEYCLOAK_SECRET: t().optional(),
      AUTH_KEYCLOAK_ISSUER: t().optional(),
      AUTH_LOGTO_ID: t().optional(),
      AUTH_LOGTO_SECRET: t().optional(),
      AUTH_LOGTO_ISSUER: t().optional(),
      AUTH_OKTA_ID: t().optional(),
      AUTH_OKTA_SECRET: t().optional(),
      AUTH_OKTA_ISSUER: t().optional(),
      AUTH_WECHAT_ID: t().optional(),
      AUTH_WECHAT_SECRET: t().optional(),
      AUTH_ZITADEL_ID: t().optional(),
      AUTH_ZITADEL_SECRET: t().optional(),
      AUTH_ZITADEL_ISSUER: t().optional(),
      LOGTO_WEBHOOK_SIGNING_KEY: t().optional(),
      CASDOOR_WEBHOOK_SECRET: t().optional(),
      JWKS_KEY: t().optional(),
      ENABLE_OIDC: s(),
      INTERNAL_JWT_EXPIRATION: t().default('30s'),
    },
    runtimeEnv: {
      AUTH_EMAIL_VERIFICATION: T.AUTH_EMAIL_VERIFICATION === '1',
      AUTH_ENABLE_MAGIC_LINK: T.AUTH_ENABLE_MAGIC_LINK === '1',
      AUTH_SECRET: T.AUTH_SECRET,
      AUTH_SSO_PROVIDERS: T.AUTH_SSO_PROVIDERS,
      AUTH_TRUSTED_ORIGINS: T.AUTH_TRUSTED_ORIGINS,
      AUTH_ALLOWED_EMAILS: T.AUTH_ALLOWED_EMAILS,
      AUTH_DISABLE_EMAIL_PASSWORD: T.AUTH_DISABLE_EMAIL_PASSWORD === '1',
      AUTH_COGNITO_DOMAIN: T.AUTH_COGNITO_DOMAIN,
      AUTH_COGNITO_REGION: T.AUTH_COGNITO_REGION,
      AUTH_COGNITO_USERPOOL_ID: T.AUTH_COGNITO_USERPOOL_ID,
      AUTH_GOOGLE_ID: T.AUTH_GOOGLE_ID,
      AUTH_GOOGLE_SECRET: T.AUTH_GOOGLE_SECRET,
      AUTH_APPLE_CLIENT_ID: T.AUTH_APPLE_CLIENT_ID,
      AUTH_APPLE_CLIENT_SECRET: T.AUTH_APPLE_CLIENT_SECRET,
      AUTH_APPLE_APP_BUNDLE_IDENTIFIER: T.AUTH_APPLE_APP_BUNDLE_IDENTIFIER,
      AUTH_GITHUB_ID: T.AUTH_GITHUB_ID,
      AUTH_GITHUB_SECRET: T.AUTH_GITHUB_SECRET,
      AUTH_MICROSOFT_AUTHORITY_URL: T.AUTH_MICROSOFT_AUTHORITY_URL,
      AUTH_MICROSOFT_ID: T.AUTH_MICROSOFT_ID,
      AUTH_MICROSOFT_SECRET: T.AUTH_MICROSOFT_SECRET,
      AUTH_MICROSOFT_TENANT_ID: T.AUTH_MICROSOFT_TENANT_ID,
      AUTH_COGNITO_ID: T.AUTH_COGNITO_ID,
      AUTH_COGNITO_SECRET: T.AUTH_COGNITO_SECRET,
      AUTH_COGNITO_ISSUER: T.AUTH_COGNITO_ISSUER,
      AUTH_AUTH0_ID: T.AUTH_AUTH0_ID,
      AUTH_AUTH0_SECRET: T.AUTH_AUTH0_SECRET,
      AUTH_AUTH0_ISSUER: T.AUTH_AUTH0_ISSUER,
      AUTH_AUTHELIA_ID: T.AUTH_AUTHELIA_ID,
      AUTH_AUTHELIA_SECRET: T.AUTH_AUTHELIA_SECRET,
      AUTH_AUTHELIA_ISSUER: T.AUTH_AUTHELIA_ISSUER,
      AUTH_AUTHENTIK_ID: T.AUTH_AUTHENTIK_ID,
      AUTH_AUTHENTIK_SECRET: T.AUTH_AUTHENTIK_SECRET,
      AUTH_AUTHENTIK_ISSUER: T.AUTH_AUTHENTIK_ISSUER,
      AUTH_CASDOOR_ID: T.AUTH_CASDOOR_ID,
      AUTH_CASDOOR_SECRET: T.AUTH_CASDOOR_SECRET,
      AUTH_CASDOOR_ISSUER: T.AUTH_CASDOOR_ISSUER,
      AUTH_CLOUDFLARE_ZERO_TRUST_ID: T.AUTH_CLOUDFLARE_ZERO_TRUST_ID,
      AUTH_CLOUDFLARE_ZERO_TRUST_SECRET: T.AUTH_CLOUDFLARE_ZERO_TRUST_SECRET,
      AUTH_CLOUDFLARE_ZERO_TRUST_ISSUER: T.AUTH_CLOUDFLARE_ZERO_TRUST_ISSUER,
      AUTH_FEISHU_APP_ID: T.AUTH_FEISHU_APP_ID,
      AUTH_FEISHU_APP_SECRET: T.AUTH_FEISHU_APP_SECRET,
      AUTH_GENERIC_OIDC_ID: T.AUTH_GENERIC_OIDC_ID,
      AUTH_GENERIC_OIDC_SECRET: T.AUTH_GENERIC_OIDC_SECRET,
      AUTH_GENERIC_OIDC_ISSUER: T.AUTH_GENERIC_OIDC_ISSUER,
      AUTH_KEYCLOAK_ID: T.AUTH_KEYCLOAK_ID,
      AUTH_KEYCLOAK_SECRET: T.AUTH_KEYCLOAK_SECRET,
      AUTH_KEYCLOAK_ISSUER: T.AUTH_KEYCLOAK_ISSUER,
      AUTH_LOGTO_ID: T.AUTH_LOGTO_ID,
      AUTH_LOGTO_SECRET: T.AUTH_LOGTO_SECRET,
      AUTH_LOGTO_ISSUER: T.AUTH_LOGTO_ISSUER,
      AUTH_OKTA_ID: T.AUTH_OKTA_ID,
      AUTH_OKTA_SECRET: T.AUTH_OKTA_SECRET,
      AUTH_OKTA_ISSUER: T.AUTH_OKTA_ISSUER,
      AUTH_WECHAT_ID: T.AUTH_WECHAT_ID,
      AUTH_WECHAT_SECRET: T.AUTH_WECHAT_SECRET,
      AUTH_ZITADEL_ID: T.AUTH_ZITADEL_ID,
      AUTH_ZITADEL_SECRET: T.AUTH_ZITADEL_SECRET,
      AUTH_ZITADEL_ISSUER: T.AUTH_ZITADEL_ISSUER,
      LOGTO_WEBHOOK_SIGNING_KEY: T.LOGTO_WEBHOOK_SIGNING_KEY,
      CASDOOR_WEBHOOK_SECRET: T.CASDOOR_WEBHOOK_SECRET,
      JWKS_KEY: T.JWKS_KEY,
      ENABLE_OIDC: !!T.JWKS_KEY,
      INTERNAL_JWT_EXPIRATION: T.INTERNAL_JWT_EXPIRATION,
    },
  });
f();
const h = 'X-lobe-chat-auth',
  g = 'LobeHub · LobeHub',
  b = (e) => e.aiProviderModelList.filter((_) => _.type === 'chat').map((_) => _.id),
  d = (e) => e.aiProviderModelList.filter((_) => _.enabled),
  y = (e) => e.aiProviderModelList.filter((_) => !_.enabled),
  B = (e) => {
    const _ = e.modelSearchKeyword.toLowerCase().trim();
    return e.aiProviderModelList.filter(
      (o) => o.id.toLowerCase().includes(_) || o.displayName?.toLowerCase().includes(_),
    );
  },
  C = (e) => e.aiProviderModelList.length,
  v = (e) => C(e) === 0,
  F = (e, _) => (o) => o.builtinAiModelList.find((A) => A.id === e && A.providerId === _),
  W = (e) => e.aiProviderModelList.some((_) => _.source === K.Remote),
  w = (e) => (_) => d(_).some((o) => o.id === e),
  Y = (e) => (_) => _.aiModelLoadingIds.includes(e),
  Z = (e) => (_) => _.aiProviderModelList.find((o) => o.id === e),
  n = (e, _) => (o) => o.enabledAiModels?.find((A) => A.id === e && (_ ? _ === A.providerId : !0)),
  x = (e, _) => (o) => n(e, _)(o)?.abilities?.functionCall || !1,
  J = (e, _) => (o) => n(e, _)(o)?.abilities?.files,
  X = (e, _) => (o) => n(e, _)(o)?.abilities?.vision || !1,
  j = (e, _) => (o) => n(e, _)(o)?.abilities?.video,
  z = (e, _) => (o) => n(e, _)(o)?.abilities?.reasoning,
  k = (e, _) => (o) => typeof n(e, _)(o)?.contextWindowTokens == 'number',
  q = (e, _) => (o) => n(e, _)(o)?.contextWindowTokens,
  c = (e, _) => (o) => n(e, _)(o)?.settings?.extendParams,
  Q = (e, _) => (o) => {
    const A = c(e, _)(o);
    return !!A && A.length > 0;
  },
  r = (e, _) => (o) => n(e, _)(o)?.settings?.searchImpl,
  V = (e, _) => (o) => !!r(e, _)(o),
  $ = (e, _) => (o) => r(e, _)(o) === S.Internal,
  __ = (e, _) => (o) => {
    const A = r(e, _)(o);
    return !!A && [S.Tool, S.Params].includes(A);
  },
  L = {
    aiProviderChatModelListIds: b,
    disabledAiProviderModelList: y,
    enabledAiProviderModelList: d,
    filteredAiProviderModelList: B,
    getAiModelById: Z,
    getEnabledModelById: n,
    getModelCard: F,
    hasRemoteModels: W,
    isEmptyAiProviderModelList: v,
    isModelBuiltinSearchInternal: $,
    isModelEnabled: w,
    isModelHasBuiltinSearch: V,
    isModelHasBuiltinSearchConfig: __,
    isModelHasContextWindowToken: k,
    isModelHasExtendParams: Q,
    isModelLoading: Y,
    isModelSupportFiles: J,
    isModelSupportReasoning: z,
    isModelSupportToolUse: x,
    isModelSupportVideo: j,
    isModelSupportVision: X,
    modelBuiltinSearchImpl: r,
    modelContextWindowTokens: q,
    modelExtendParams: c,
    totalAiProviderModelList: C,
  },
  R = (e) => new TextEncoder().encode(e),
  e_ = (e, _) => {
    const o = new Uint8Array(e.length);
    for (const [A, E] of e.entries()) o[A] = E ^ _[A % _.length];
    return o;
  },
  o_ = (e, _) => {
    const o = JSON.stringify(e),
      A = R(o),
      E = R(_),
      I = e_(A, E);
    return btoa(String.fromCharCode(...I));
  },
  s_ = (e, _) => L.isModelSupportVision(e, _)(U()),
  r_ = (e, _) => L.isModelSupportVideo(e, _)(U()) || !1,
  a_ = (e, _) => {
    let o = e;
    const A = U().enabledAiModels?.find((E) => E.id === e && E.providerId === _);
    return (A && A.config?.deploymentName && (o = A.config?.deploymentName), o);
  },
  H_ = (e) => O.isProviderFetchOnClient(e)(U()),
  T_ = (e) =>
    Object.values(i).includes(e) ? e : O.providerConfigById(e)(U())?.settings.sdkType || 'openai',
  p = (e, _) => {
    switch (e) {
      case i.Bedrock: {
        const { accessKeyId: o, region: A, secretAccessKey: E, sessionToken: I } = _,
          a = E,
          l = o,
          N = (a || '') + (l || '');
        return {
          accessKeyId: o,
          accessKeySecret: a,
          apiKey: N,
          awsAccessKeyId: l,
          awsRegion: A,
          awsSecretAccessKey: a,
          awsSessionToken: I,
          region: A,
          sessionToken: I,
        };
      }
      case i.Azure:
        return {
          apiKey: H.pick(_.apiKey),
          apiVersion: _.apiVersion,
          azureApiVersion: _.apiVersion,
          baseURL: _.baseURL || _.endpoint,
        };
      case i.Ollama:
        return { baseURL: _?.baseURL };
      case i.Cloudflare:
        return {
          apiKey: H.pick(_?.apiKey),
          baseURLOrAccountID: _?.baseURLOrAccountID,
          cloudflareBaseURLOrAccountID: _?.baseURLOrAccountID,
        };
      case i.ComfyUI:
        return {
          apiKey: _?.apiKey,
          authType: _?.authType,
          baseURL: _?.baseURL,
          customHeaders: _?.customHeaders,
          password: _?.password,
          username: _?.username,
        };
      case i.VertexAI:
        return { apiKey: _?.apiKey, baseURL: _?.baseURL, vertexAIRegion: _?.region };
      default:
        return { apiKey: H.pick(_?.apiKey), baseURL: _?.baseURL };
    }
  },
  t_ = (e = {}) => {
    const _ = P.userId(m.getState());
    return o_({ userId: _, ...e }, g);
  },
  D = (e) => {
    const _ = O.providerKeyVaults(e)(M.getState()) || {},
      o = T_(e);
    return { ...p(o, _), runtimeProvider: o };
  },
  A_ = async (e) => {
    let _ = e?.payload || {};
    e?.provider && (_ = { ..._, ...D(e?.provider) });
    const o = t_(_);
    return { ...e?.headers, [h]: o };
  },
  S_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        createHeaderWithAuth: A_,
        createPayloadWithKeyVaults: D,
        getProviderAuthPayload: p,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { S_ as _, L as a, D as b, A_ as c, r_ as d, H_ as e, a_ as f, s_ as i, T_ as r };
