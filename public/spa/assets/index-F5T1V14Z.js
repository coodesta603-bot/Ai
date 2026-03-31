const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-DFd57EDP.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/tslib.es6-BWnLUwbd.js',
      'assets/index-ClRvEh9W.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
    ]),
) => i.map((i) => d[i]);
import { _ as lt } from './index-C8UyLGsD.js';
import { c as xi, d as Ri, e as Ci, f as Ti } from './tslib.es6-BWnLUwbd.js';
import { p as et } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as tt, r as vi } from './providerConfig-qS2Xx-oI.js';
import {
  aJ as Pi,
  aK as hs,
  aL as _i,
  aM as ps,
  aN as ar,
  aO as $i,
  A as q,
  m as N,
  aP as ki,
  q as rt,
  S as Be,
  y as Jr,
  aQ as Di,
  aR as Ii,
  aS as Mi,
  aT as Oi,
  aU as Bi,
  aV as Ni,
  aW as Ui,
  p as Li,
  aX as Fi,
  aY as zi,
  D as Hi,
} from './index-ClRvEh9W.js';
import { B as Ct } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const ji = async function* (t) {
    for await (const e of t)
      if (e.chunk) {
        const n = new TextDecoder().decode(e.chunk.bytes, { stream: !0 });
        try {
          yield JSON.parse(n);
        } catch (s) {
          (console.log('bedrock stream parser error:', s), yield n);
        }
      } else yield e;
  },
  nt = (t) => Pi(ji(t.body)),
  Vi = (t, e) => {
    const r = { id: 'chat_' + hs() },
      n = t instanceof ReadableStream ? t : nt(t),
      s = (o, i) => $i(o, i, e?.payload);
    return n
      .pipeThrough(_i(s, { inputStartAt: e?.inputStartAt, streamStack: r }))
      .pipeThrough(ps((o) => o, r))
      .pipeThrough(ar(e?.callbacks));
  },
  Wi = (t, e) =>
    t.stop_reason
      ? { data: 'finished', id: e.id, type: 'stop' }
      : { data: t.generation, id: e.id, type: 'text' },
  qi = (t, e) => {
    const r = { id: 'chat_' + hs() };
    return (t instanceof ReadableStream ? t : nt(t)).pipeThrough(ps(Wi, r)).pipeThrough(ar(e));
  };
class Gi {
  _key;
  get key() {
    return this._key;
  }
  constructor(e) {
    if (!e) throw new Error('key must be a non-empty string');
    this._key = e;
  }
  update(e) {
    this._key = e;
  }
}
function Ji(t, e) {
  return ((t = Math.ceil(t)), (e = Math.floor(e)), Math.floor(Math.random() * (e - t + 1)) + t);
}
function Ki(t, e) {
  const r = e.retryDelayInMs * Math.pow(2, t),
    n = Math.min(e.maxRetryDelayInMs, r);
  return { retryAfterInMs: n / 2 + Ji(0, n / 2) };
}
function ms(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    !Array.isArray(t) &&
    !(t instanceof RegExp) &&
    !(t instanceof Date)
  );
}
function cr(t) {
  if (ms(t)) {
    const e = typeof t.name == 'string',
      r = typeof t.message == 'string';
    return e && r;
  }
  return !1;
}
function Qi(t, e) {
  switch (e) {
    case 'utf-8':
      return Yi(t);
    case 'base64':
      return gs(t);
    case 'base64url':
      return Xi(t);
    case 'hex':
      return Zi(t);
  }
}
function j(t, e) {
  switch (e) {
    case 'utf-8':
      return ea(t);
    case 'base64':
      return ys(t);
    case 'base64url':
      return ta(t);
    case 'hex':
      return ra(t);
  }
}
function gs(t) {
  return btoa([...t].map((e) => String.fromCharCode(e)).join(''));
}
function Xi(t) {
  return gs(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
function Yi(t) {
  return new TextDecoder().decode(t);
}
function Zi(t) {
  return [...t].map((e) => e.toString(16).padStart(2, '0')).join('');
}
function ea(t) {
  return new TextEncoder().encode(t);
}
function ys(t) {
  return new Uint8Array([...atob(t)].map((e) => e.charCodeAt(0)));
}
function ta(t) {
  const e = t.replace(/-/g, '+').replace(/_/g, '/');
  return ys(e);
}
const Kr = new Set('0123456789abcdefABCDEF');
function ra(t) {
  const e = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length / 2; ++r) {
    const n = t[2 * r],
      s = t[2 * r + 1];
    if (!Kr.has(n) || !Kr.has(s)) return e.slice(0, r);
    e[r] = parseInt(`${n}${s}`, 16);
  }
  return e;
}
function na() {
  let t = '';
  for (let e = 0; e < 32; e++) {
    const r = Math.floor(Math.random() * 16);
    (e === 12 ? (t += '4') : e === 16 ? (t += (r & 3) | 8) : (t += r.toString(16)),
      (e === 7 || e === 11 || e === 15 || e === 19) && (t += '-'));
  }
  return t;
}
const sa =
  typeof globalThis?.crypto?.randomUUID == 'function'
    ? globalThis.crypto.randomUUID.bind(globalThis.crypto)
    : na;
function ws() {
  return sa();
}
typeof Deno < 'u' && typeof Deno.version < 'u' && typeof Deno.version.deno < 'u';
typeof Bun < 'u' && typeof Bun.version < 'u';
const Se =
    typeof globalThis.process < 'u' &&
    !!globalThis.process.version &&
    !!globalThis.process.versions?.node,
  Tt = 'REDACTED',
  oa = [
    'x-ms-client-request-id',
    'x-ms-return-client-request-id',
    'x-ms-useragent',
    'x-ms-correlation-request-id',
    'x-ms-request-id',
    'client-request-id',
    'ms-cv',
    'return-client-request-id',
    'traceparent',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Origin',
    'Access-Control-Expose-Headers',
    'Access-Control-Max-Age',
    'Access-Control-Request-Headers',
    'Access-Control-Request-Method',
    'Origin',
    'Accept',
    'Accept-Encoding',
    'Cache-Control',
    'Connection',
    'Content-Length',
    'Content-Type',
    'Date',
    'ETag',
    'Expires',
    'If-Match',
    'If-Modified-Since',
    'If-None-Match',
    'If-Unmodified-Since',
    'Last-Modified',
    'Pragma',
    'Request-Id',
    'Retry-After',
    'Server',
    'Transfer-Encoding',
    'User-Agent',
    'WWW-Authenticate',
  ],
  ia = ['api-version'];
class ur {
  allowedHeaderNames;
  allowedQueryParameters;
  constructor({
    additionalAllowedHeaderNames: e = [],
    additionalAllowedQueryParameters: r = [],
  } = {}) {
    ((e = oa.concat(e)),
      (r = ia.concat(r)),
      (this.allowedHeaderNames = new Set(e.map((n) => n.toLowerCase()))),
      (this.allowedQueryParameters = new Set(r.map((n) => n.toLowerCase()))));
  }
  sanitize(e) {
    const r = new Set();
    return JSON.stringify(
      e,
      (n, s) => {
        if (s instanceof Error) return { ...s, name: s.name, message: s.message };
        if (n === 'headers') return this.sanitizeHeaders(s);
        if (n === 'url') return this.sanitizeUrl(s);
        if (n === 'query') return this.sanitizeQuery(s);
        if (n === 'body') return;
        if (n === 'response') return;
        if (n === 'operationSpec') return;
        if (Array.isArray(s) || ms(s)) {
          if (r.has(s)) return '[Circular]';
          r.add(s);
        }
        return s;
      },
      2,
    );
  }
  sanitizeUrl(e) {
    if (typeof e != 'string' || e === null || e === '') return e;
    const r = new URL(e);
    if (!r.search) return e;
    for (const [n] of r.searchParams)
      this.allowedQueryParameters.has(n.toLowerCase()) || r.searchParams.set(n, Tt);
    return r.toString();
  }
  sanitizeHeaders(e) {
    const r = {};
    for (const n of Object.keys(e))
      this.allowedHeaderNames.has(n.toLowerCase()) ? (r[n] = e[n]) : (r[n] = Tt);
    return r;
  }
  sanitizeQuery(e) {
    if (typeof e != 'object' || e === null) return e;
    const r = {};
    for (const n of Object.keys(e))
      this.allowedQueryParameters.has(n.toLowerCase()) ? (r[n] = e[n]) : (r[n] = Tt);
    return r;
  }
}
let aa = class extends Error {
  constructor(e) {
    (super(e), (this.name = 'AbortError'));
  }
};
function ca(t, e) {
  const { cleanupBeforeAbort: r, abortSignal: n, abortErrorMsg: s } = e ?? {};
  return new Promise((o, i) => {
    function a() {
      i(new aa(s ?? 'The operation was aborted.'));
    }
    function c() {
      n?.removeEventListener('abort', u);
    }
    function u() {
      (r?.(), c(), a());
    }
    if (n?.aborted) return a();
    try {
      t(
        (l) => {
          (c(), o(l));
        },
        (l) => {
          (c(), i(l));
        },
      );
    } catch (l) {
      i(l);
    }
    n?.addEventListener('abort', u);
  });
}
const ua = 'The delay was aborted.';
function la(t, e) {
  let r;
  const { abortSignal: n, abortErrorMsg: s } = {};
  return ca(
    (o) => {
      r = setTimeout(o, t);
    },
    { cleanupBeforeAbort: () => clearTimeout(r), abortSignal: n, abortErrorMsg: s ?? ua },
  );
}
function We(t) {
  if (cr(t)) return t.message;
  {
    let e;
    try {
      typeof t == 'object' && t ? (e = JSON.stringify(t)) : (e = String(t));
    } catch {
      e = '[unable to stringify input]';
    }
    return `Unknown error ${e}`;
  }
}
function bs(t) {
  return typeof t < 'u' && t !== null;
}
function da(t, e) {
  if (!bs(t) || typeof t != 'object') return !1;
  for (const r of e) if (!fa(t, r)) return !1;
  return !0;
}
function fa(t, e) {
  return bs(t) && typeof t == 'object' && e in t;
}
function Ss(t) {
  return cr(t);
}
const Qr = Se;
function Es(t) {
  return da(t, ['key']) && typeof t.key == 'string';
}
function As(t) {
  const e = t;
  return (
    e && typeof e.getToken == 'function' && (e.signRequest === void 0 || e.getToken.length > 0)
  );
}
class lr extends Error {
  constructor(e) {
    (super(e), (this.name = 'AbortError'));
  }
}
function ha(...t) {
  if (t.length > 0) {
    const e = String(t[0]);
    e.includes(':error')
      ? console.error(...t)
      : e.includes(':warning')
        ? console.warn(...t)
        : e.includes(':info')
          ? console.info(...t)
          : e.includes(':verbose')
            ? console.debug(...t)
            : console.debug(...t);
  }
}
var Xr = {};
const Yr = (typeof et < 'u' && Xr && Xr.DEBUG) || void 0;
let xs,
  Jt = [],
  Kt = [];
const st = [];
Yr && dr(Yr);
const ge = Object.assign((t) => Rs(t), { enable: dr, enabled: fr, disable: pa, log: ha });
function dr(t) {
  ((xs = t), (Jt = []), (Kt = []));
  const e = t.split(',').map((r) => r.trim());
  for (const r of e) r.startsWith('-') ? Kt.push(r.substring(1)) : Jt.push(r);
  for (const r of st) r.enabled = fr(r.namespace);
}
function fr(t) {
  if (t.endsWith('*')) return !0;
  for (const e of Kt) if (Zr(t, e)) return !1;
  for (const e of Jt) if (Zr(t, e)) return !0;
  return !1;
}
function Zr(t, e) {
  if (e.indexOf('*') === -1) return t === e;
  let r = e;
  if (e.indexOf('**') !== -1) {
    const f = [];
    let h = '';
    for (const p of e) (p === '*' && h === '*') || ((h = p), f.push(p));
    r = f.join('');
  }
  let n = 0,
    s = 0;
  const o = r.length,
    i = t.length;
  let a = -1,
    c = -1;
  for (; n < i && s < o; )
    if (r[s] === '*') {
      if (((a = s), s++, s === o)) return !0;
      for (; t[n] !== r[s]; ) if ((n++, n === i)) return !1;
      ((c = n), n++, s++);
      continue;
    } else if (r[s] === t[n]) (s++, n++);
    else if (a >= 0) {
      if (((s = a + 1), (n = c + 1), n === i)) return !1;
      for (; t[n] !== r[s]; ) if ((n++, n === i)) return !1;
      ((c = n), n++, s++);
      continue;
    } else return !1;
  const u = n === t.length,
    l = s === r.length,
    d = s === r.length - 1 && r[s] === '*';
  return u && (l || d);
}
function pa() {
  const t = xs || '';
  return (dr(''), t);
}
function Rs(t) {
  const e = Object.assign(r, {
    enabled: fr(t),
    destroy: ma,
    log: ge.log,
    namespace: t,
    extend: ga,
  });
  function r(...n) {
    e.enabled && (n.length > 0 && (n[0] = `${t} ${n[0]}`), e.log(...n));
  }
  return (st.push(e), e);
}
function ma() {
  const t = st.indexOf(this);
  return t >= 0 ? (st.splice(t, 1), !0) : !1;
}
function ga(t) {
  const e = Rs(`${this.namespace}:${t}`);
  return ((e.log = this.log), e);
}
var en = {};
const Qt = ['verbose', 'info', 'warning', 'error'],
  tn = { verbose: 400, info: 300, warning: 200, error: 100 };
function rn(t, e) {
  e.log = (...r) => {
    t.log(...r);
  };
}
function nn(t) {
  return Qt.includes(t);
}
function Cs(t) {
  const e = new Set(),
    r = (typeof et < 'u' && en && en[t.logLevelEnvVarName]) || void 0;
  let n;
  const s = ge(t.namespace);
  s.log = (...l) => {
    ge.log(...l);
  };
  function o(l) {
    if (l && !nn(l))
      throw new Error(`Unknown log level '${l}'. Acceptable values: ${Qt.join(',')}`);
    n = l;
    const d = [];
    for (const f of e) i(f) && d.push(f.namespace);
    ge.enable(d.join(','));
  }
  r &&
    (nn(r)
      ? o(r)
      : console.error(
          `${t.logLevelEnvVarName} set to unknown log level '${r}'; logging is not enabled. Acceptable values: ${Qt.join(', ')}.`,
        ));
  function i(l) {
    return !!(n && tn[l.level] <= tn[n]);
  }
  function a(l, d) {
    const f = Object.assign(l.extend(d), { level: d });
    if ((rn(l, f), i(f))) {
      const h = ge.disable();
      ge.enable(h + ',' + f.namespace);
    }
    return (e.add(f), f);
  }
  function c() {
    return n;
  }
  function u(l) {
    const d = s.extend(l);
    return (
      rn(s, d),
      {
        error: a(d, 'error'),
        warning: a(d, 'warning'),
        info: a(d, 'info'),
        verbose: a(d, 'verbose'),
      }
    );
  }
  return { setLogLevel: o, getLogLevel: c, createClientLogger: u, logger: s };
}
const ya = Cs({ logLevelEnvVarName: 'TYPESPEC_RUNTIME_LOG_LEVEL', namespace: 'typeSpecRuntime' });
function Ts(t) {
  return ya.createClientLogger(t);
}
function qe(t) {
  return t.toLowerCase();
}
function* wa(t) {
  for (const e of t.values()) yield [e.name, e.value];
}
class ba {
  _headersMap;
  constructor(e) {
    if (((this._headersMap = new Map()), e)) for (const r of Object.keys(e)) this.set(r, e[r]);
  }
  set(e, r) {
    this._headersMap.set(qe(e), { name: e, value: String(r).trim() });
  }
  get(e) {
    return this._headersMap.get(qe(e))?.value;
  }
  has(e) {
    return this._headersMap.has(qe(e));
  }
  delete(e) {
    this._headersMap.delete(qe(e));
  }
  toJSON(e = {}) {
    const r = {};
    if (e.preserveCase) for (const n of this._headersMap.values()) r[n.name] = n.value;
    else for (const [n, s] of this._headersMap) r[n] = s.value;
    return r;
  }
  toString() {
    return JSON.stringify(this.toJSON({ preserveCase: !0 }));
  }
  [Symbol.iterator]() {
    return wa(this._headersMap);
  }
}
function Ee(t) {
  return new ba(t);
}
class Sa {
  url;
  method;
  headers;
  timeout;
  withCredentials;
  body;
  multipartBody;
  formData;
  streamResponseStatusCodes;
  enableBrowserStreams;
  proxySettings;
  disableKeepAlive;
  abortSignal;
  requestId;
  allowInsecureConnection;
  onUploadProgress;
  onDownloadProgress;
  requestOverrides;
  authSchemes;
  constructor(e) {
    ((this.url = e.url),
      (this.body = e.body),
      (this.headers = e.headers ?? Ee()),
      (this.method = e.method ?? 'GET'),
      (this.timeout = e.timeout ?? 0),
      (this.multipartBody = e.multipartBody),
      (this.formData = e.formData),
      (this.disableKeepAlive = e.disableKeepAlive ?? !1),
      (this.proxySettings = e.proxySettings),
      (this.streamResponseStatusCodes = e.streamResponseStatusCodes),
      (this.withCredentials = e.withCredentials ?? !1),
      (this.abortSignal = e.abortSignal),
      (this.onUploadProgress = e.onUploadProgress),
      (this.onDownloadProgress = e.onDownloadProgress),
      (this.requestId = e.requestId || ws()),
      (this.allowInsecureConnection = e.allowInsecureConnection ?? !1),
      (this.enableBrowserStreams = e.enableBrowserStreams ?? !1),
      (this.requestOverrides = e.requestOverrides),
      (this.authSchemes = e.authSchemes));
  }
}
function Ea(t) {
  return new Sa(t);
}
const sn = new Set(['Deserialize', 'Serialize', 'Retry', 'Sign']);
class ot {
  _policies = [];
  _orderedPolicies;
  constructor(e) {
    ((this._policies = e?.slice(0) ?? []), (this._orderedPolicies = void 0));
  }
  addPolicy(e, r = {}) {
    if (r.phase && r.afterPhase)
      throw new Error('Policies inside a phase cannot specify afterPhase.');
    if (r.phase && !sn.has(r.phase)) throw new Error(`Invalid phase name: ${r.phase}`);
    if (r.afterPhase && !sn.has(r.afterPhase))
      throw new Error(`Invalid afterPhase name: ${r.afterPhase}`);
    (this._policies.push({ policy: e, options: r }), (this._orderedPolicies = void 0));
  }
  removePolicy(e) {
    const r = [];
    return (
      (this._policies = this._policies.filter((n) =>
        (e.name && n.policy.name === e.name) || (e.phase && n.options.phase === e.phase)
          ? (r.push(n.policy), !1)
          : !0,
      )),
      (this._orderedPolicies = void 0),
      r
    );
  }
  sendRequest(e, r) {
    return this.getOrderedPolicies().reduceRight(
      (o, i) => (a) => i.sendRequest(a, o),
      (o) => e.sendRequest(o),
    )(r);
  }
  getOrderedPolicies() {
    return (
      this._orderedPolicies || (this._orderedPolicies = this.orderPolicies()),
      this._orderedPolicies
    );
  }
  clone() {
    return new ot(this._policies);
  }
  static create() {
    return new ot();
  }
  orderPolicies() {
    const e = [],
      r = new Map();
    function n(p) {
      return { name: p, policies: new Set(), hasRun: !1, hasAfterPolicies: !1 };
    }
    const s = n('Serialize'),
      o = n('None'),
      i = n('Deserialize'),
      a = n('Retry'),
      c = n('Sign'),
      u = [s, o, i, a, c];
    function l(p) {
      return p === 'Retry'
        ? a
        : p === 'Serialize'
          ? s
          : p === 'Deserialize'
            ? i
            : p === 'Sign'
              ? c
              : o;
    }
    for (const p of this._policies) {
      const g = p.policy,
        m = p.options,
        y = g.name;
      if (r.has(y)) throw new Error('Duplicate policy names not allowed in pipeline');
      const w = { policy: g, dependsOn: new Set(), dependants: new Set() };
      (m.afterPhase && ((w.afterPhase = l(m.afterPhase)), (w.afterPhase.hasAfterPolicies = !0)),
        r.set(y, w),
        l(m.phase).policies.add(w));
    }
    for (const p of this._policies) {
      const { policy: g, options: m } = p,
        y = g.name,
        w = r.get(y);
      if (!w) throw new Error(`Missing node for policy ${y}`);
      if (m.afterPolicies)
        for (const S of m.afterPolicies) {
          const b = r.get(S);
          b && (w.dependsOn.add(b), b.dependants.add(w));
        }
      if (m.beforePolicies)
        for (const S of m.beforePolicies) {
          const b = r.get(S);
          b && (b.dependsOn.add(w), w.dependants.add(b));
        }
    }
    function d(p) {
      p.hasRun = !0;
      for (const g of p.policies)
        if (
          !(g.afterPhase && (!g.afterPhase.hasRun || g.afterPhase.policies.size)) &&
          g.dependsOn.size === 0
        ) {
          e.push(g.policy);
          for (const m of g.dependants) m.dependsOn.delete(g);
          (r.delete(g.policy.name), p.policies.delete(g));
        }
    }
    function f() {
      for (const p of u) {
        if ((d(p), p.policies.size > 0 && p !== o)) {
          o.hasRun || d(o);
          return;
        }
        p.hasAfterPolicies && d(o);
      }
    }
    let h = 0;
    for (; r.size > 0; ) {
      h++;
      const p = e.length;
      if ((f(), e.length <= p && h > 1))
        throw new Error('Cannot satisfy policy dependencies due to requirements cycle.');
    }
    return e;
  }
}
function vs() {
  return ot.create();
}
const Aa = Symbol(),
  xa = new ur();
class se extends Error {
  static REQUEST_SEND_ERROR = 'REQUEST_SEND_ERROR';
  static PARSE_ERROR = 'PARSE_ERROR';
  code;
  statusCode;
  request;
  response;
  details;
  constructor(e, r = {}) {
    (super(e),
      (this.name = 'RestError'),
      (this.code = r.code),
      (this.statusCode = r.statusCode),
      Object.defineProperty(this, 'request', { value: r.request, enumerable: !1 }),
      Object.defineProperty(this, 'response', { value: r.response, enumerable: !1 }));
    const n = this.request?.agent
      ? {
          maxFreeSockets: this.request.agent.maxFreeSockets,
          maxSockets: this.request.agent.maxSockets,
        }
      : void 0;
    (Object.defineProperty(this, Aa, {
      value: () => `RestError: ${this.message} 
 ${xa.sanitize({ ...this, request: { ...this.request, agent: n }, response: this.response })}`,
      enumerable: !1,
    }),
      Object.setPrototypeOf(this, se.prototype));
  }
}
function Ps(t) {
  return t instanceof se ? !0 : cr(t) && t.name === 'RestError';
}
function _s(t) {
  return !!(t && typeof t.pipe == 'function');
}
function dt(t) {
  return !!(t && typeof t.getReader == 'function' && typeof t.tee == 'function');
}
function $s(t) {
  return (
    t !== void 0 &&
    (t instanceof Uint8Array || ks(t) || typeof t == 'function' || t instanceof Blob)
  );
}
function ks(t) {
  return _s(t) || dt(t);
}
function hr(t) {
  return typeof t.stream == 'function';
}
function Ra(t) {
  if (t.buffer instanceof ArrayBuffer && t.byteOffset === 0 && t.byteLength === t.buffer.byteLength)
    return t.buffer;
  const e = new ArrayBuffer(t.byteLength),
    r = new Uint8Array(e),
    n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  return (r.set(n), r.buffer);
}
function Ca(t) {
  return (typeof Blob == 'function' || typeof Blob == 'object') && t instanceof Blob;
}
class Ta {
  async sendRequest(e) {
    if (new URL(e.url).protocol !== 'https:' && !e.allowInsecureConnection)
      throw new Error(`Cannot connect to ${e.url} while allowInsecureConnection is false.`);
    if (e.proxySettings) throw new Error('HTTP proxy is not supported in browser environment');
    try {
      return await va(e);
    } catch (s) {
      throw $a(s, e);
    }
  }
}
async function va(t) {
  const { abortController: e, abortControllerCleanup: r } = _a(t);
  try {
    const n = ka(t.headers),
      { streaming: s, body: o } = Ia(t),
      i = {
        body: o,
        method: t.method,
        headers: n,
        signal: e.signal,
        ...('credentials' in Request.prototype
          ? { credentials: t.withCredentials ? 'include' : 'same-origin' }
          : {}),
        ...('cache' in Request.prototype ? { cache: 'no-store' } : {}),
      };
    s && (i.duplex = 'half');
    const a = await fetch(t.url, { ...i, ...t.requestOverrides });
    return (
      Ca(t.body) && t.onUploadProgress && t.onUploadProgress({ loadedBytes: t.body.size }),
      Pa(a, t, r)
    );
  } catch (n) {
    throw (r?.(), n);
  }
}
async function Pa(t, e, r) {
  const n = Da(t),
    s = { request: e, headers: n, status: t.status },
    o = dt(t.body) ? Ds(t.body, { onProgress: e.onDownloadProgress, onEnd: r }) : t.body;
  if (
    e.streamResponseStatusCodes?.has(Number.POSITIVE_INFINITY) ||
    e.streamResponseStatusCodes?.has(s.status)
  )
    if (e.enableBrowserStreams) s.browserStreamBody = o ?? void 0;
    else {
      const i = new Response(o);
      ((s.blobBody = i.blob()), r?.());
    }
  else {
    const i = new Response(o);
    ((s.bodyAsText = await i.text()), r?.());
  }
  return s;
}
function _a(t) {
  const e = new AbortController();
  let r, n;
  if (t.abortSignal) {
    if (t.abortSignal.aborted)
      throw new lr('The operation was aborted. Request has already been canceled.');
    ((n = (s) => {
      s.type === 'abort' && e.abort();
    }),
      t.abortSignal.addEventListener('abort', n),
      (r = () => {
        n && t.abortSignal?.removeEventListener('abort', n);
      }));
  }
  return (
    t.timeout > 0 &&
      setTimeout(() => {
        e.abort();
      }, t.timeout),
    { abortController: e, abortControllerCleanup: r }
  );
}
function $a(t, e) {
  return t && t?.name === 'AbortError'
    ? t
    : new se(`Error sending request: ${t.message}`, {
        code: t?.code ?? se.REQUEST_SEND_ERROR,
        request: e,
      });
}
function ka(t) {
  const e = new Headers();
  for (const [r, n] of t) e.append(r, n);
  return e;
}
function Da(t) {
  const e = Ee();
  for (const [r, n] of t.headers) e.set(r, n);
  return e;
}
function Ia(t) {
  const e = typeof t.body == 'function' ? t.body() : t.body;
  if (_s(e)) throw new Error('Node streams are not supported in browser environment.');
  return dt(e)
    ? { streaming: !0, body: Ds(e, { onProgress: t.onUploadProgress }) }
    : typeof e == 'object' && e && 'buffer' in e
      ? { streaming: !1, body: Ra(e) }
      : e === void 0
        ? { streaming: !1 }
        : { streaming: !1, body: e };
}
function Ds(t, e = {}) {
  let r = 0;
  const { onProgress: n, onEnd: s } = e;
  if (Oa(t))
    return t.pipeThrough(
      new TransformStream({
        transform(o, i) {
          if (o === null) {
            i.terminate();
            return;
          }
          (i.enqueue(o), (r += o.length), n && n({ loadedBytes: r }));
        },
        flush() {
          s?.();
        },
      }),
    );
  {
    const o = t.getReader();
    return new ReadableStream({
      async pull(i) {
        const { done: a, value: c } = await o.read();
        if (a || !c) {
          (s?.(), i.close(), o.releaseLock());
          return;
        }
        ((r += c?.length ?? 0), i.enqueue(c), n && n({ loadedBytes: r }));
      },
      cancel(i) {
        return (s?.(), o.cancel(i));
      },
    });
  }
}
function Ma() {
  return new Ta();
}
function Oa(t) {
  return t.pipeThrough !== void 0 && self.TransformStream !== void 0;
}
function Ba() {
  return Ma();
}
const pr = Ts('ts-http-runtime'),
  Na = 'logPolicy';
function Is(t = {}) {
  const e = t.logger ?? pr.info,
    r = new ur({
      additionalAllowedHeaderNames: t.additionalAllowedHeaderNames,
      additionalAllowedQueryParameters: t.additionalAllowedQueryParameters,
    });
  return {
    name: Na,
    async sendRequest(n, s) {
      if (!e.enabled) return s(n);
      e(`Request: ${r.sanitize(n)}`);
      const o = await s(n);
      return (e(`Response status code: ${o.status}`), e(`Headers: ${r.sanitize(o.headers)}`), o);
    },
  };
}
const Ua = 'redirectPolicy',
  on = ['GET', 'HEAD'];
function Ms(t = {}) {
  const { maxRetries: e = 20, allowCrossOriginRedirects: r = !1 } = t;
  return {
    name: Ua,
    async sendRequest(n, s) {
      const o = await s(n);
      return Os(s, o, e, r);
    },
  };
}
async function Os(t, e, r, n, s = 0) {
  const { request: o, status: i, headers: a } = e,
    c = a.get('location');
  if (
    c &&
    (i === 300 ||
      (i === 301 && on.includes(o.method)) ||
      (i === 302 && on.includes(o.method)) ||
      (i === 303 && o.method === 'POST') ||
      i === 307) &&
    s < r
  ) {
    const u = new URL(c, o.url);
    if (!n) {
      const d = new URL(o.url);
      if (u.origin !== d.origin)
        return (pr.verbose(`Skipping cross-origin redirect from ${d.origin} to ${u.origin}.`), e);
    }
    ((o.url = u.toString()),
      i === 303 && ((o.method = 'GET'), o.headers.delete('Content-Length'), delete o.body),
      o.headers.delete('Authorization'));
    const l = await t(o);
    return Os(t, l, r, n, s + 1);
  }
  return e;
}
function La() {
  return 'x-ms-useragent';
}
function Fa(t) {
  const e = [
    { name: 'Firefox', regex: /Firefox\/([\d.]+)/ },
    { name: 'Safari', regex: /Version\/([\d.]+).*Safari/ },
  ];
  for (const r of e) {
    const n = t.match(r.regex);
    if (n) return { brand: r.name, version: n[1] };
  }
}
function za(t) {
  const e = ['Google Chrome', 'Microsoft Edge', 'Opera', 'Brave', 'Chromium'];
  for (const r of e) {
    const n = t.find((s) => s.brand === r);
    if (n) return n;
  }
}
async function Ha(t) {
  const e = globalThis.navigator;
  let r = 'unknown';
  if (e?.userAgentData) {
    const n = await e.userAgentData.getHighEntropyValues(['architecture', 'platformVersion']);
    r = `${n.platform} ${n.platformVersion}; ${n.architecture}`;
    const s = za(e.userAgentData.brands);
    s && t.set(s.brand, `${s.version} (${r})`);
  } else if (e?.platform) {
    r = e.platform;
    const n = Fa(e.userAgent);
    n && t.set(n.brand, `${n.version} (${r})`);
  } else
    typeof globalThis.EdgeRuntime == 'string' &&
      t.set('EdgeRuntime', `${globalThis.EdgeRuntime} (${r})`);
}
const ja = '0.3.4',
  Xt = 3;
function Va(t) {
  const e = [];
  for (const [r, n] of t) {
    const s = n ? `${r}/${n}` : r;
    e.push(s);
  }
  return e.join(' ');
}
function Wa() {
  return La();
}
async function qa(t) {
  const e = new Map();
  (e.set('ts-http-runtime', ja), await Ha(e));
  const r = Va(e);
  return t ? `${t} ${r}` : r;
}
const an = Wa(),
  Ga = 'userAgentPolicy';
function Ja(t = {}) {
  const e = qa(t.userAgentPrefix);
  return {
    name: Ga,
    async sendRequest(r, n) {
      return (r.headers.has(an) || r.headers.set(an, await e), n(r));
    },
  };
}
function Bs() {
  throw new Error('decompressResponsePolicy is not supported in browser environment');
}
const Ka = 'The operation was aborted.';
function Qa(t, e, r) {
  return new Promise((n, s) => {
    let o, i;
    const a = () => s(new lr(r?.abortErrorMsg ? r?.abortErrorMsg : Ka)),
      c = () => {
        r?.abortSignal && i && r.abortSignal.removeEventListener('abort', i);
      };
    if (((i = () => (o && clearTimeout(o), c(), a())), r?.abortSignal && r.abortSignal.aborted))
      return a();
    ((o = setTimeout(() => {
      (c(), n(e));
    }, t)),
      r?.abortSignal && r.abortSignal.addEventListener('abort', i));
  });
}
function Xa(t, e) {
  const r = t.headers.get(e);
  if (!r) return;
  const n = Number(r);
  if (!Number.isNaN(n)) return n;
}
const Yt = 'Retry-After',
  Ya = ['retry-after-ms', 'x-ms-retry-after-ms', Yt];
function Ns(t) {
  if (t && [429, 503].includes(t.status))
    try {
      for (const s of Ya) {
        const o = Xa(t, s);
        if (o === 0 || o) return o * (s === Yt ? 1e3 : 1);
      }
      const e = t.headers.get(Yt);
      if (!e) return;
      const n = Date.parse(e) - Date.now();
      return Number.isFinite(n) ? Math.max(0, n) : void 0;
    } catch {
      return;
    }
}
function Za(t) {
  return Number.isFinite(Ns(t));
}
function ec() {
  return {
    name: 'throttlingRetryStrategy',
    retry({ response: t }) {
      const e = Ns(t);
      return Number.isFinite(e) ? { retryAfterInMs: e } : { skipStrategy: !0 };
    },
  };
}
const tc = 1e3,
  rc = 1e3 * 64;
function nc(t = {}) {
  const e = t.retryDelayInMs ?? tc,
    r = t.maxRetryDelayInMs ?? rc;
  return {
    name: 'exponentialRetryStrategy',
    retry({ retryCount: n, response: s, responseError: o }) {
      const i = oc(o),
        a = i && t.ignoreSystemErrors,
        c = sc(s),
        u = c && t.ignoreHttpStatusCodes;
      return (s && (Za(s) || !c)) || u || a
        ? { skipStrategy: !0 }
        : o && !i && !c
          ? { errorToThrow: o }
          : Ki(n, { retryDelayInMs: e, maxRetryDelayInMs: r });
    },
  };
}
function sc(t) {
  return !!(
    t &&
    t.status !== void 0 &&
    (t.status >= 500 || t.status === 408) &&
    t.status !== 501 &&
    t.status !== 505
  );
}
function oc(t) {
  return t
    ? t.code === 'ETIMEDOUT' ||
        t.code === 'ESOCKETTIMEDOUT' ||
        t.code === 'ECONNREFUSED' ||
        t.code === 'ECONNRESET' ||
        t.code === 'ENOENT' ||
        t.code === 'ENOTFOUND'
    : !1;
}
const ic = Ts('ts-http-runtime retryPolicy'),
  ac = 'retryPolicy';
function cc(t, e = { maxRetries: Xt }) {
  const r = e.logger || ic;
  return {
    name: ac,
    async sendRequest(n, s) {
      let o,
        i,
        a = -1;
      e: for (;;) {
        ((a += 1), (o = void 0), (i = void 0));
        try {
          (r.info(`Retry ${a}: Attempting to send request`, n.requestId),
            (o = await s(n)),
            r.info(`Retry ${a}: Received a response from request`, n.requestId));
        } catch (c) {
          if (
            (r.error(`Retry ${a}: Received an error from request`, n.requestId),
            (i = c),
            !c || i.name !== 'RestError')
          )
            throw c;
          o = i.response;
        }
        if (n.abortSignal?.aborted) throw (r.error(`Retry ${a}: Request aborted.`), new lr());
        if (a >= (e.maxRetries ?? Xt)) {
          if (
            (r.info(
              `Retry ${a}: Maximum retries reached. Returning the last received response, or throwing the last received error.`,
            ),
            i)
          )
            throw i;
          if (o) return o;
          throw new Error('Maximum retries reached with no response or error to throw');
        }
        r.info(`Retry ${a}: Processing ${t.length} retry strategies.`);
        t: for (const c of t) {
          const u = c.logger || r;
          u.info(`Retry ${a}: Processing retry strategy ${c.name}.`);
          const l = c.retry({ retryCount: a, response: o, responseError: i });
          if (l.skipStrategy) {
            u.info(`Retry ${a}: Skipped.`);
            continue t;
          }
          const { errorToThrow: d, retryAfterInMs: f, redirectTo: h } = l;
          if (d) throw (u.error(`Retry ${a}: Retry strategy ${c.name} throws error:`, d), d);
          if (f || f === 0) {
            (u.info(`Retry ${a}: Retry strategy ${c.name} retries after ${f}`),
              await Qa(f, void 0, { abortSignal: n.abortSignal }));
            continue e;
          }
          if (h) {
            (u.info(`Retry ${a}: Retry strategy ${c.name} redirects to ${h}`), (n.url = h));
            continue e;
          }
        }
        if (i)
          throw (
            r.info('None of the retry strategies could work with the received error. Throwing it.'),
            i
          );
        if (o)
          return (
            r.info(
              'None of the retry strategies could work with the received response. Returning it.',
            ),
            o
          );
      }
    },
  };
}
const uc = 'defaultRetryPolicy';
function Us(t = {}) {
  return {
    name: uc,
    sendRequest: cc([ec(), nc(t)], { maxRetries: t.maxRetries ?? Xt }).sendRequest,
  };
}
const lc = 'formDataPolicy';
function dc(t) {
  const e = {};
  for (const [r, n] of t.entries()) ((e[r] ??= []), e[r].push(n));
  return e;
}
function Ls() {
  return {
    name: lc,
    async sendRequest(t, e) {
      if (
        (Se &&
          typeof FormData < 'u' &&
          t.body instanceof FormData &&
          ((t.formData = dc(t.body)), (t.body = void 0)),
        t.formData)
      ) {
        const r = t.headers.get('Content-Type');
        (r && r.indexOf('application/x-www-form-urlencoded') !== -1
          ? (t.body = fc(t.formData))
          : await hc(t.formData, t),
          (t.formData = void 0));
      }
      return e(t);
    },
  };
}
function fc(t) {
  const e = new URLSearchParams();
  for (const [r, n] of Object.entries(t))
    if (Array.isArray(n)) for (const s of n) e.append(r, s.toString());
    else e.append(r, n.toString());
  return e.toString();
}
async function hc(t, e) {
  const r = e.headers.get('Content-Type');
  if (r && !r.startsWith('multipart/form-data')) return;
  e.headers.set('Content-Type', r ?? 'multipart/form-data');
  const n = [];
  for (const [s, o] of Object.entries(t))
    for (const i of Array.isArray(o) ? o : [o])
      if (typeof i == 'string')
        n.push({
          headers: Ee({ 'Content-Disposition': `form-data; name="${s}"` }),
          body: j(i, 'utf-8'),
        });
      else {
        if (i == null || typeof i != 'object')
          throw new Error(
            `Unexpected value for key ${s}: ${i}. Value should be serialized to string first.`,
          );
        {
          const a = i.name || 'blob',
            c = Ee();
          (c.set('Content-Disposition', `form-data; name="${s}"; filename="${a}"`),
            c.set('Content-Type', i.type || 'application/octet-stream'),
            n.push({ headers: c, body: i }));
        }
      }
  e.multipartBody = { parts: n };
}
const pc = 'proxyPolicy is not supported in browser environment';
function Fs(t, e) {
  throw new Error(pc);
}
const mc = 'agentPolicy';
function zs(t) {
  return { name: mc, sendRequest: async (e, r) => (e.agent || (e.agent = t), r(e)) };
}
const gc = 'tlsPolicy';
function Hs(t) {
  return { name: gc, sendRequest: async (e, r) => (e.tlsSettings || (e.tlsSettings = t), r(e)) };
}
function yc(t) {
  return new Response(t).blob();
}
async function wc(t) {
  if (t instanceof Blob || t instanceof Uint8Array) return t;
  if (dt(t)) return yc(t);
  throw new Error(
    'Unsupported source type. Only Blob, Uint8Array, and ReadableStream are supported in browser.',
  );
}
function bc(t) {
  return 'resize' in t.buffer ? t : t.map((e) => e);
}
async function Sc(t) {
  const e = [];
  for (const r of t) {
    const n = await wc(typeof r == 'function' ? r() : r);
    n instanceof Blob ? e.push(n) : e.push(new Blob([bc(n)]));
  }
  return new Blob(e);
}
function Ec() {
  return `----AzSDKFormBoundary${ws()}`;
}
function Ac(t) {
  let e = '';
  for (const [r, n] of t)
    e += `${r}: ${n}\r
`;
  return e;
}
function xc(t) {
  return t instanceof Uint8Array
    ? t.byteLength
    : hr(t)
      ? t.size === -1
        ? void 0
        : t.size
      : void 0;
}
function Rc(t) {
  let e = 0;
  for (const r of t) {
    const n = xc(r);
    if (n === void 0) return;
    e += n;
  }
  return e;
}
async function Cc(t, e, r) {
  const n = [
      j(`--${r}`, 'utf-8'),
      ...e.flatMap((o) => [
        j(
          `\r
`,
          'utf-8',
        ),
        j(Ac(o.headers), 'utf-8'),
        j(
          `\r
`,
          'utf-8',
        ),
        o.body,
        j(
          `\r
--${r}`,
          'utf-8',
        ),
      ]),
      j(
        `--\r
\r
`,
        'utf-8',
      ),
    ],
    s = Rc(n);
  (s && t.headers.set('Content-Length', s), (t.body = await Sc(n)));
}
const mr = 'multipartPolicy',
  Tc = 70,
  vc = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?");
function Pc(t) {
  if (t.length > Tc)
    throw new Error(`Multipart boundary "${t}" exceeds maximum length of 70 characters`);
  if (Array.from(t).some((e) => !vc.has(e)))
    throw new Error(`Multipart boundary "${t}" contains invalid characters`);
}
function js() {
  return {
    name: mr,
    async sendRequest(t, e) {
      if (!t.multipartBody) return e(t);
      if (t.body) throw new Error('multipartBody and regular body cannot be set at the same time');
      let r = t.multipartBody.boundary;
      const n = t.headers.get('Content-Type') ?? 'multipart/mixed',
        s = n.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
      if (!s)
        throw new Error(
          `Got multipart request body, but content-type header was not multipart: ${n}`,
        );
      const [, o, i] = s;
      if (i && r && i !== r)
        throw new Error(
          `Multipart boundary was specified as ${i} in the header, but got ${r} in the request body`,
        );
      return (
        (r ??= i),
        r ? Pc(r) : (r = Ec()),
        t.headers.set('Content-Type', `${o}; boundary=${r}`),
        await Cc(t, t.multipartBody.parts, r),
        (t.multipartBody = void 0),
        e(t)
      );
    },
  };
}
function _c(t) {
  const e = vs();
  return (
    Se &&
      (t.agent && e.addPolicy(zs(t.agent)),
      t.tlsOptions && e.addPolicy(Hs(t.tlsOptions)),
      e.addPolicy(Fs(t.proxyOptions)),
      e.addPolicy(Bs())),
    e.addPolicy(Ls(), { beforePolicies: [mr] }),
    e.addPolicy(Ja(t.userAgentOptions)),
    e.addPolicy(js(), { afterPhase: 'Deserialize' }),
    e.addPolicy(Us(t.retryOptions), { phase: 'Retry' }),
    Se && e.addPolicy(Ms(t.redirectOptions), { afterPhase: 'Retry' }),
    e.addPolicy(Is(t.loggingOptions), { afterPhase: 'Sign' }),
    e
  );
}
const $c = 'ApiVersionPolicy';
function kc(t) {
  return {
    name: $c,
    sendRequest: (e, r) => {
      const n = new URL(e.url);
      return (
        !n.searchParams.get('api-version') &&
          t.apiVersion &&
          (e.url = `${e.url}${Array.from(n.searchParams.keys()).length > 0 ? '&' : '?'}api-version=${t.apiVersion}`),
        r(e)
      );
    },
  };
}
function Dc(t) {
  return 'getOAuth2Token' in t;
}
function Ic(t) {
  return 'getBearerToken' in t;
}
function Mc(t) {
  return 'username' in t && 'password' in t;
}
function Oc(t) {
  return 'key' in t;
}
let cn = !1;
function Bc(t, e) {
  if (e.allowInsecureConnection && t.allowInsecureConnection) {
    const r = new URL(t.url);
    if (r.hostname === 'localhost' || r.hostname === '127.0.0.1') return !0;
  }
  return !1;
}
function Nc() {
  const t = 'Sending token over insecure transport. Assume any token issued is compromised.';
  (pr.warning(t), typeof et?.emitWarning == 'function' && !cn && ((cn = !0), et.emitWarning(t)));
}
function ft(t, e) {
  if (!t.url.toLowerCase().startsWith('https://'))
    if (Bc(t, e)) Nc();
    else
      throw new Error(
        'Authentication is not permitted for non-TLS protected (non-https) URLs when allowInsecureConnection is false.',
      );
}
const Uc = 'apiKeyAuthenticationPolicy';
function Lc(t) {
  return {
    name: Uc,
    async sendRequest(e, r) {
      ft(e, t);
      const n = (e.authSchemes ?? t.authSchemes)?.find((s) => s.kind === 'apiKey');
      if (!n) return r(e);
      if (n.apiKeyLocation !== 'header')
        throw new Error(`Unsupported API key location: ${n.apiKeyLocation}`);
      return (e.headers.set(n.name, t.credential.key), r(e));
    },
  };
}
const Fc = 'bearerAuthenticationPolicy';
function zc(t) {
  return {
    name: Fc,
    async sendRequest(e, r) {
      if (
        (ft(e, t),
        !(e.authSchemes ?? t.authSchemes)?.find((a) => a.kind === 'http' && a.scheme === 'basic'))
      )
        return r(e);
      const { username: s, password: o } = t.credential,
        i = Qi(j(`${s}:${o}`, 'utf-8'), 'base64');
      return (e.headers.set('Authorization', `Basic ${i}`), r(e));
    },
  };
}
const Hc = 'bearerAuthenticationPolicy';
function jc(t) {
  return {
    name: Hc,
    async sendRequest(e, r) {
      if (
        (ft(e, t),
        !(e.authSchemes ?? t.authSchemes)?.find((o) => o.kind === 'http' && o.scheme === 'bearer'))
      )
        return r(e);
      const s = await t.credential.getBearerToken({ abortSignal: e.abortSignal });
      return (e.headers.set('Authorization', `Bearer ${s}`), r(e));
    },
  };
}
const Vc = 'oauth2AuthenticationPolicy';
function Wc(t) {
  return {
    name: Vc,
    async sendRequest(e, r) {
      ft(e, t);
      const n = (e.authSchemes ?? t.authSchemes)?.find((o) => o.kind === 'oauth2');
      if (!n) return r(e);
      const s = await t.credential.getOAuth2Token(n.flows, { abortSignal: e.abortSignal });
      return (e.headers.set('Authorization', `Bearer ${s}`), r(e));
    },
  };
}
let vt;
function qc(t = {}) {
  const e = _c(t);
  e.addPolicy(kc(t));
  const { credential: r, authSchemes: n, allowInsecureConnection: s } = t;
  return (
    r &&
      (Oc(r)
        ? e.addPolicy(Lc({ authSchemes: n, credential: r, allowInsecureConnection: s }))
        : Mc(r)
          ? e.addPolicy(zc({ authSchemes: n, credential: r, allowInsecureConnection: s }))
          : Ic(r)
            ? e.addPolicy(jc({ authSchemes: n, credential: r, allowInsecureConnection: s }))
            : Dc(r) &&
              e.addPolicy(Wc({ authSchemes: n, credential: r, allowInsecureConnection: s }))),
    e
  );
}
function Gc() {
  return (vt || (vt = Ba()), vt);
}
function Vs(t, e) {
  if (t.headers) {
    const r = Object.keys(t.headers).find((n) => n.toLowerCase() === e.toLowerCase());
    if (r) return t.headers[r];
  }
}
function Jc(t) {
  const e = Vs(t, 'content-type');
  if (e) return e;
  if (t.contentType === null) return;
  if (t.contentType) return t.contentType;
  const { body: r } = t;
  if (r != null)
    return typeof r == 'string' || typeof r == 'number' || typeof r == 'boolean'
      ? 'text/plain; charset=UTF-8'
      : r instanceof Blob
        ? r.type || 'application/octet-stream'
        : $s(r)
          ? 'application/octet-stream'
          : 'application/json';
}
function un(t) {
  return JSON.stringify(t);
}
function Kc(t) {
  const e = Vs(t, 'content-disposition');
  if (e) return e;
  if (t.dispositionType === void 0 && t.name === void 0 && t.filename === void 0) return;
  let n = t.dispositionType ?? 'form-data';
  t.name && (n += `; name=${un(t.name)}`);
  let s;
  if (t.filename) s = t.filename;
  else if (typeof File < 'u' && t.body instanceof File) {
    const o = t.body.name;
    o !== '' && (s = o);
  }
  return (s && (n += `; filename=${un(s)}`), n);
}
function Qc(t, e) {
  if (t === void 0) return new Uint8Array([]);
  if ($s(t)) return t;
  if (typeof t == 'string' || typeof t == 'number' || typeof t == 'boolean')
    return j(String(t), 'utf-8');
  if (e && /application\/(.+\+)?json(;.+)?/i.test(String(e))) return j(JSON.stringify(t), 'utf-8');
  throw new se(`Unsupported body/content-type combination: ${t}, ${e}`);
}
function Xc(t) {
  const e = Jc(t),
    r = Kc(t),
    n = Ee(t.headers ?? {});
  (e && n.set('content-type', e), r && n.set('content-disposition', r));
  const s = Qc(t.body, e);
  return { headers: n, body: s };
}
function Yc(t) {
  return { parts: t.map(Xc) };
}
async function Pt(t, e, r, n = {}, s) {
  const o = s ?? Gc(),
    i = tu(t, e, n);
  try {
    const a = await r.sendRequest(o, i),
      c = a.headers.toJSON(),
      u = a.readableStreamBody ?? a.browserStreamBody,
      l = n.responseAsStream || u !== void 0 ? void 0 : nu(a),
      d = u ?? l;
    return (
      n?.onResponse && n.onResponse({ ...a, request: i, rawHeaders: c, parsedBody: l }),
      { request: i, headers: c, status: `${a.status}`, body: d }
    );
  } catch (a) {
    if (Ps(a) && a.response && n.onResponse) {
      const { response: c } = a,
        u = c.headers.toJSON();
      n?.onResponse({ ...c, request: i, rawHeaders: u }, a);
    }
    throw a;
  }
}
function Zc(t = {}) {
  return t.contentType ?? t.headers?.['content-type'] ?? eu(t.body);
}
function eu(t) {
  if (t !== void 0) {
    if (ArrayBuffer.isView(t)) return 'application/octet-stream';
    if (hr(t) && t.type) return t.type;
    if (typeof t == 'string')
      try {
        return (JSON.parse(t), 'application/json');
      } catch {
        return;
      }
    return 'application/json';
  }
}
function tu(t, e, r = {}) {
  const n = Zc(r),
    { body: s, multipartBody: o } = ru(r.body, n),
    i = Ee({
      ...(r.headers ? r.headers : {}),
      accept: r.accept ?? r.headers?.accept ?? 'application/json',
      ...(n && { 'content-type': n }),
    });
  return Ea({
    url: e,
    method: t,
    body: s,
    multipartBody: o,
    headers: i,
    allowInsecureConnection: r.allowInsecureConnection,
    abortSignal: r.abortSignal,
    onUploadProgress: r.onUploadProgress,
    onDownloadProgress: r.onDownloadProgress,
    timeout: r.timeout,
    enableBrowserStreams: !0,
    streamResponseStatusCodes: r.responseAsStream ? new Set([Number.POSITIVE_INFINITY]) : void 0,
  });
}
function ru(t, e = '') {
  if (t === void 0) return { body: void 0 };
  if (typeof FormData < 'u' && t instanceof FormData) return { body: t };
  if (hr(t)) return { body: t };
  if (ks(t) || typeof t == 'function') return { body: t };
  if (ArrayBuffer.isView(t)) return { body: t instanceof Uint8Array ? t : JSON.stringify(t) };
  switch (e.split(';')[0]) {
    case 'application/json':
      return { body: JSON.stringify(t) };
    case 'multipart/form-data':
      return Array.isArray(t) ? { multipartBody: Yc(t) } : { body: JSON.stringify(t) };
    case 'text/plain':
      return { body: String(t) };
    default:
      return typeof t == 'string' ? { body: t } : { body: JSON.stringify(t) };
  }
}
function nu(t) {
  const r = (t.headers.get('content-type') ?? '').split(';')[0],
    n = t.bodyAsText ?? '';
  if (r === 'text/plain') return String(n);
  try {
    return n ? JSON.parse(n) : void 0;
  } catch (s) {
    if (r === 'application/json') throw su(t, s);
    return String(n);
  }
}
function su(t, e) {
  const r = `Error "${e}" occurred while parsing the response body - ${t.bodyAsText}.`,
    n = e.code ?? se.PARSE_ERROR;
  return new se(r, { code: n, statusCode: t.status, request: t.request, response: t });
}
function ou(t) {
  const e = t.value;
  return e !== void 0 && e.toString !== void 0 && typeof e.toString == 'function';
}
function iu(t, e, r, n = {}) {
  if (e.startsWith('https://') || e.startsWith('http://')) return e;
  ((t = cu(t, n)), (e = uu(e, r, n)));
  const s = au(`${t}/${e}`, n);
  return new URL(s).toString().replace(/([^:]\/)\/+/g, '$1');
}
function _t(t, e, r, n) {
  let s;
  r === 'pipeDelimited' ? (s = '|') : r === 'spaceDelimited' ? (s = '%20') : (s = ',');
  let o;
  Array.isArray(n)
    ? (o = n)
    : typeof n == 'object' && n.toString === Object.prototype.toString
      ? (o = Object.entries(n).flat())
      : (o = [n]);
  const i = o
    .map((a) => {
      if (a == null) return '';
      if (!a.toString || typeof a.toString != 'function')
        throw new Error(`Query parameters must be able to be represented as string, ${t} can't`);
      const c = a.toISOString !== void 0 ? a.toISOString() : a.toString();
      return e ? c : encodeURIComponent(c);
    })
    .join(s);
  return `${e ? t : encodeURIComponent(t)}=${i}`;
}
function au(t, e = {}) {
  if (!e.queryParameters) return t;
  const r = new URL(t),
    n = e.queryParameters,
    s = [];
  for (const o of Object.keys(n)) {
    const i = n[o];
    if (i == null) continue;
    const a = ou(i),
      c = a ? i.value : i,
      u = a ? (i.explode ?? !1) : !1,
      l = a && i.style ? i.style : 'form';
    if (u)
      if (Array.isArray(c)) for (const d of c) s.push(_t(o, e.skipUrlEncoding ?? !1, l, d));
      else if (typeof c == 'object')
        for (const [d, f] of Object.entries(c)) s.push(_t(d, e.skipUrlEncoding ?? !1, l, f));
      else throw new Error('explode can only be set to true for objects and arrays');
    else s.push(_t(o, e.skipUrlEncoding ?? !1, l, c));
  }
  return (r.search !== '' && (r.search += '&'), (r.search += s.join('&')), r.toString());
}
function cu(t, e) {
  if (!e.pathParameters) return t;
  const r = e.pathParameters;
  for (const [n, s] of Object.entries(r)) {
    if (s == null) throw new Error(`Path parameters ${n} must not be undefined or null`);
    if (!s.toString || typeof s.toString != 'function')
      throw new Error(`Path parameters must be able to be represented as string, ${n} can't`);
    let o = s.toISOString !== void 0 ? s.toISOString() : String(s);
    (e.skipUrlEncoding || (o = encodeURIComponent(s)), (t = lu(t, `{${n}}`, o) ?? ''));
  }
  return t;
}
function uu(t, e, r = {}) {
  for (const n of e) {
    const s = typeof n == 'object' && (n.allowReserved ?? !1);
    let o = typeof n == 'object' ? n.value : n;
    (!r.skipUrlEncoding && !s && (o = encodeURIComponent(o)),
      (t = t.replace(/\{[\w-]+\}/, String(o))));
  }
  return t;
}
function lu(t, e, r) {
  return !t || !e ? t : t.split(e).join(r || '');
}
function du(t, e = {}) {
  const r = e.pipeline ?? qc(e);
  if (e.additionalPolicies?.length)
    for (const { policy: a, position: c } of e.additionalPolicies) {
      const u = c === 'perRetry' ? 'Sign' : void 0;
      r.addPolicy(a, { afterPhase: u });
    }
  const { allowInsecureConnection: n, httpClient: s } = e,
    o = e.endpoint ?? t,
    i = (a, ...c) => {
      const u = (l) => iu(o, a, c, { ...l });
      return {
        get: (l = {}) => Z('GET', u(l), r, l, n, s),
        post: (l = {}) => Z('POST', u(l), r, l, n, s),
        put: (l = {}) => Z('PUT', u(l), r, l, n, s),
        patch: (l = {}) => Z('PATCH', u(l), r, l, n, s),
        delete: (l = {}) => Z('DELETE', u(l), r, l, n, s),
        head: (l = {}) => Z('HEAD', u(l), r, l, n, s),
        options: (l = {}) => Z('OPTIONS', u(l), r, l, n, s),
        trace: (l = {}) => Z('TRACE', u(l), r, l, n, s),
      };
    };
  return { path: i, pathUnchecked: i, pipeline: r };
}
function Z(t, e, r, n, s, o) {
  return (
    (s = n.allowInsecureConnection ?? s),
    {
      then: function (i, a) {
        return Pt(t, e, r, { ...n, allowInsecureConnection: s }, o).then(i, a);
      },
      async asBrowserStream() {
        if (Se)
          throw new Error(
            '`asBrowserStream` is supported only in the browser environment. Use `asNodeStream` instead to obtain the response body stream. If you require a Web stream of the response in Node, consider using `Readable.toWeb` on the result of `asNodeStream`.',
          );
        return Pt(t, e, r, { ...n, allowInsecureConnection: s, responseAsStream: !0 }, o);
      },
      async asNodeStream() {
        if (Se) return Pt(t, e, r, { ...n, allowInsecureConnection: s, responseAsStream: !0 }, o);
        throw new Error(
          '`isNodeStream` is not supported in the browser environment. Use `asBrowserStream` to obtain the response body stream.',
        );
      },
    }
  );
}
function fu() {
  return vs();
}
const hu = Cs({ logLevelEnvVarName: 'AZURE_LOG_LEVEL', namespace: 'azure' });
function Ws(t) {
  return hu.createClientLogger(t);
}
const xe = Ws('core-rest-pipeline');
function pu(t = {}) {
  return Is({ logger: xe.info, ...t });
}
function mu(t = {}) {
  return Ms(t);
}
function gu() {
  return 'x-ms-useragent';
}
function yu(t) {
  const e = [
    { name: 'Firefox', regex: /Firefox\/([\d.]+)/ },
    { name: 'Safari', regex: /Version\/([\d.]+).*Safari/ },
  ];
  for (const r of e) {
    const n = t.match(r.regex);
    if (n) return { brand: r.name, version: n[1] };
  }
}
function wu(t) {
  const e = ['Google Chrome', 'Microsoft Edge', 'Opera', 'Brave', 'Chromium'];
  for (const r of e) {
    const n = t.find((s) => s.brand === r);
    if (n) return n;
  }
}
async function bu(t) {
  const e = globalThis.navigator;
  let r = 'unknown';
  if (e?.userAgentData) {
    const n = await e.userAgentData.getHighEntropyValues(['architecture', 'platformVersion']);
    r = `${n.platform} ${n.platformVersion}; ${n.architecture}`;
    const s = wu(e.userAgentData.brands);
    s && t.set(s.brand, `${s.version} (${r})`);
  } else if (e?.platform) {
    r = e.platform;
    const n = yu(e.userAgent);
    n && t.set(n.brand, `${n.version} (${r})`);
  } else
    typeof globalThis.EdgeRuntime == 'string' &&
      t.set('EdgeRuntime', `${globalThis.EdgeRuntime} (${r})`);
}
const qs = '1.22.3';
function Su(t) {
  const e = [];
  for (const [r, n] of t) {
    const s = n ? `${r}/${n}` : r;
    e.push(s);
  }
  return e.join(' ');
}
function Eu() {
  return gu();
}
async function Gs(t) {
  const e = new Map();
  (e.set('core-rest-pipeline', qs), await bu(e));
  const r = Su(e);
  return t ? `${t} ${r}` : r;
}
const ln = Eu(),
  Au = 'userAgentPolicy';
function xu(t = {}) {
  const e = Gs(t.userAgentPrefix);
  return {
    name: Au,
    async sendRequest(r, n) {
      return (r.headers.has(ln) || r.headers.set(ln, await e), n(r));
    },
  };
}
const Js = Symbol('rawContent');
function Ks(t) {
  return typeof t[Js] == 'function';
}
function Ru(t) {
  return Ks(t) ? t[Js]() : t;
}
const Qs = mr;
function Cu() {
  const t = js();
  return {
    name: Qs,
    sendRequest: async (e, r) => {
      if (e.multipartBody)
        for (const n of e.multipartBody.parts) Ks(n.body) && (n.body = Ru(n.body));
      return t.sendRequest(e, r);
    },
  };
}
function Tu() {
  return Bs();
}
function vu(t = {}) {
  return Us(t);
}
function Pu() {
  return Ls();
}
function _u(t, e) {
  return Fs();
}
const $u = 'setClientRequestIdPolicy';
function ku(t = 'x-ms-client-request-id') {
  return {
    name: $u,
    async sendRequest(e, r) {
      return (e.headers.has(t) || e.headers.set(t, e.requestId), r(e));
    },
  };
}
function Du(t) {
  return zs(t);
}
function Iu(t) {
  return Hs(t);
}
const ke = {
  span: Symbol.for('@azure/core-tracing span'),
  namespace: Symbol.for('@azure/core-tracing namespace'),
};
function Mu(t = {}) {
  let e = new De(t.parentContext);
  return (
    t.span && (e = e.setValue(ke.span, t.span)),
    t.namespace && (e = e.setValue(ke.namespace, t.namespace)),
    e
  );
}
class De {
  _contextMap;
  constructor(e) {
    this._contextMap = e instanceof De ? new Map(e._contextMap) : new Map();
  }
  setValue(e, r) {
    const n = new De(this);
    return (n._contextMap.set(e, r), n);
  }
  getValue(e) {
    return this._contextMap.get(e);
  }
  deleteValue(e) {
    const r = new De(this);
    return (r._contextMap.delete(e), r);
  }
}
const $t = { instrumenterImplementation: void 0 };
function Ou() {
  return {
    end: () => {},
    isRecording: () => !1,
    recordException: () => {},
    setAttribute: () => {},
    setStatus: () => {},
    addEvent: () => {},
  };
}
function Bu() {
  return {
    createRequestHeaders: () => ({}),
    parseTraceparentHeader: () => {},
    startSpan: (t, e) => ({ span: Ou(), tracingContext: Mu({ parentContext: e.tracingContext }) }),
    withContext(t, e, ...r) {
      return e(...r);
    },
  };
}
function Ge() {
  return (
    $t.instrumenterImplementation || ($t.instrumenterImplementation = Bu()),
    $t.instrumenterImplementation
  );
}
function Xs(t) {
  const { namespace: e, packageName: r, packageVersion: n } = t;
  function s(u, l, d) {
    const f = Ge().startSpan(u, {
      ...d,
      packageName: r,
      packageVersion: n,
      tracingContext: l?.tracingOptions?.tracingContext,
    });
    let h = f.tracingContext;
    const p = f.span;
    (h.getValue(ke.namespace) || (h = h.setValue(ke.namespace, e)),
      p.setAttribute('az.namespace', h.getValue(ke.namespace)));
    const g = Object.assign({}, l, { tracingOptions: { ...l?.tracingOptions, tracingContext: h } });
    return { span: p, updatedOptions: g };
  }
  async function o(u, l, d, f) {
    const { span: h, updatedOptions: p } = s(u, l, f);
    try {
      const g = await i(p.tracingOptions.tracingContext, () => Promise.resolve(d(p, h)));
      return (h.setStatus({ status: 'success' }), g);
    } catch (g) {
      throw (h.setStatus({ status: 'error', error: g }), g);
    } finally {
      h.end();
    }
  }
  function i(u, l, ...d) {
    return Ge().withContext(u, l, ...d);
  }
  function a(u) {
    return Ge().parseTraceparentHeader(u);
  }
  function c(u) {
    return Ge().createRequestHeaders(u);
  }
  return {
    startSpan: s,
    withSpan: o,
    withContext: i,
    parseTraceparentHeader: a,
    createRequestHeaders: c,
  };
}
function Ys(t) {
  return Ps(t);
}
const Nu = 'tracingPolicy';
function Uu(t = {}) {
  const e = Gs(t.userAgentPrefix),
    r = new ur({ additionalAllowedQueryParameters: t.additionalAllowedQueryParameters }),
    n = Lu();
  return {
    name: Nu,
    async sendRequest(s, o) {
      if (!n) return o(s);
      const i = await e,
        a = {
          'http.url': r.sanitizeUrl(s.url),
          'http.method': s.method,
          'http.user_agent': i,
          'requestId': s.requestId,
        };
      i && (a['http.user_agent'] = i);
      const { span: c, tracingContext: u } = Fu(n, s, a) ?? {};
      if (!c || !u) return o(s);
      try {
        const l = await n.withContext(u, o, s);
        return (Hu(c, l), l);
      } catch (l) {
        throw (zu(c, l), l);
      }
    },
  };
}
function Lu() {
  try {
    return Xs({ namespace: '', packageName: '@azure/core-rest-pipeline', packageVersion: qs });
  } catch (t) {
    xe.warning(`Error when creating the TracingClient: ${We(t)}`);
    return;
  }
}
function Fu(t, e, r) {
  try {
    const { span: n, updatedOptions: s } = t.startSpan(
      `HTTP ${e.method}`,
      { tracingOptions: e.tracingOptions },
      { spanKind: 'client', spanAttributes: r },
    );
    if (!n.isRecording()) {
      n.end();
      return;
    }
    const o = t.createRequestHeaders(s.tracingOptions.tracingContext);
    for (const [i, a] of Object.entries(o)) e.headers.set(i, a);
    return { span: n, tracingContext: s.tracingOptions.tracingContext };
  } catch (n) {
    xe.warning(`Skipping creating a tracing span due to an error: ${We(n)}`);
    return;
  }
}
function zu(t, e) {
  try {
    (t.setStatus({ status: 'error', error: Ss(e) ? e : void 0 }),
      Ys(e) && e.statusCode && t.setAttribute('http.status_code', e.statusCode),
      t.end());
  } catch (r) {
    xe.warning(`Skipping tracing span processing due to an error: ${We(r)}`);
  }
}
function Hu(t, e) {
  try {
    t.setAttribute('http.status_code', e.status);
    const r = e.headers.get('x-ms-request-id');
    (r && t.setAttribute('serviceRequestId', r),
      e.status >= 400 && t.setStatus({ status: 'error' }),
      t.end());
  } catch (r) {
    xe.warning(`Skipping tracing span processing due to an error: ${We(r)}`);
  }
}
function ju(t) {
  if (t instanceof AbortSignal) return { abortSignal: t };
  if (t.aborted) return { abortSignal: AbortSignal.abort(t.reason) };
  const e = new AbortController();
  let r = !0;
  function n() {
    r && (t.removeEventListener('abort', s), (r = !1));
  }
  function s() {
    (e.abort(t.reason), n());
  }
  return (t.addEventListener('abort', s), { abortSignal: e.signal, cleanup: n });
}
const Vu = 'wrapAbortSignalLikePolicy';
function Wu() {
  return {
    name: Vu,
    sendRequest: async (t, e) => {
      if (!t.abortSignal) return e(t);
      const { abortSignal: r, cleanup: n } = ju(t.abortSignal);
      t.abortSignal = r;
      try {
        return await e(t);
      } finally {
        n?.();
      }
    },
  };
}
function qu(t) {
  const e = fu();
  return (
    Qr &&
      (t.agent && e.addPolicy(Du(t.agent)),
      t.tlsOptions && e.addPolicy(Iu(t.tlsOptions)),
      e.addPolicy(_u(t.proxyOptions)),
      e.addPolicy(Tu())),
    e.addPolicy(Wu()),
    e.addPolicy(Pu(), { beforePolicies: [Qs] }),
    e.addPolicy(xu(t.userAgentOptions)),
    e.addPolicy(ku(t.telemetryOptions?.clientRequestIdHeaderName)),
    e.addPolicy(Cu(), { afterPhase: 'Deserialize' }),
    e.addPolicy(vu(t.retryOptions), { phase: 'Retry' }),
    e.addPolicy(Uu({ ...t.userAgentOptions, ...t.loggingOptions }), { afterPhase: 'Retry' }),
    Qr && e.addPolicy(mu(t.redirectOptions), { afterPhase: 'Retry' }),
    e.addPolicy(pu(t.loggingOptions), { afterPhase: 'Sign' }),
    e
  );
}
const Gu = {
  forcedRefreshWindowInMs: 1e3,
  retryIntervalInMs: 3e3,
  refreshWindowInMs: 1e3 * 60 * 2,
};
async function Ju(t, e, r) {
  async function n() {
    if (Date.now() < r)
      try {
        return await t();
      } catch {
        return null;
      }
    else {
      const o = await t();
      if (o === null) throw new Error('Failed to refresh access token.');
      return o;
    }
  }
  let s = await n();
  for (; s === null; ) (await la(e), (s = await n()));
  return s;
}
function Ku(t, e) {
  let r = null,
    n = null,
    s;
  const o = { ...Gu, ...e },
    i = {
      get isRefreshing() {
        return r !== null;
      },
      get shouldRefresh() {
        return i.isRefreshing
          ? !1
          : n?.refreshAfterTimestamp && n.refreshAfterTimestamp < Date.now()
            ? !0
            : (n?.expiresOnTimestamp ?? 0) - o.refreshWindowInMs < Date.now();
      },
      get mustRefresh() {
        return n === null || n.expiresOnTimestamp - o.forcedRefreshWindowInMs < Date.now();
      },
    };
  function a(c, u) {
    return (
      i.isRefreshing ||
        (r = Ju(() => t.getToken(c, u), o.retryIntervalInMs, n?.expiresOnTimestamp ?? Date.now())
          .then((d) => ((r = null), (n = d), (s = u.tenantId), n))
          .catch((d) => {
            throw ((r = null), (n = null), (s = void 0), d);
          })),
      r
    );
  }
  return async (c, u) => {
    const l = !!u.claims,
      d = s !== u.tenantId;
    return (l && (n = null), d || l || i.mustRefresh ? a(c, u) : (i.shouldRefresh && a(c, u), n));
  };
}
const Qu = 'bearerTokenAuthenticationPolicy';
async function Je(t, e) {
  try {
    return [await e(t), void 0];
  } catch (r) {
    if (Ys(r) && r.response) return [r.response, r];
    throw r;
  }
}
async function Xu(t) {
  const { scopes: e, getAccessToken: r, request: n } = t,
    s = { abortSignal: n.abortSignal, tracingOptions: n.tracingOptions, enableCae: !0 },
    o = await r(e, s);
  o && t.request.headers.set('Authorization', `Bearer ${o.token}`);
}
function dn(t) {
  return t.status === 401 && t.headers.has('WWW-Authenticate');
}
async function fn(t, e) {
  const { scopes: r } = t,
    n = await t.getAccessToken(r, { enableCae: !0, claims: e });
  return n
    ? (t.request.headers.set('Authorization', `${n.tokenType ?? 'Bearer'} ${n.token}`), !0)
    : !1;
}
function Yu(t) {
  const { credential: e, scopes: r, challengeCallbacks: n } = t,
    s = t.logger || xe,
    o = {
      authorizeRequest: n?.authorizeRequest?.bind(n) ?? Xu,
      authorizeRequestOnChallenge: n?.authorizeRequestOnChallenge?.bind(n),
    },
    i = e ? Ku(e) : () => Promise.resolve(null);
  return {
    name: Qu,
    async sendRequest(a, c) {
      if (!a.url.toLowerCase().startsWith('https://'))
        throw new Error(
          'Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.',
        );
      await o.authorizeRequest({
        scopes: Array.isArray(r) ? r : [r],
        request: a,
        getAccessToken: i,
        logger: s,
      });
      let u, l, d;
      if ((([u, l] = await Je(a, c)), dn(u))) {
        let f = hn(u.headers.get('WWW-Authenticate'));
        if (f) {
          let h;
          try {
            h = atob(f);
          } catch {
            return (
              s.warning(
                `The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${f}`,
              ),
              u
            );
          }
          ((d = await fn(
            {
              scopes: Array.isArray(r) ? r : [r],
              response: u,
              request: a,
              getAccessToken: i,
              logger: s,
            },
            h,
          )),
            d && ([u, l] = await Je(a, c)));
        } else if (
          o.authorizeRequestOnChallenge &&
          ((d = await o.authorizeRequestOnChallenge({
            scopes: Array.isArray(r) ? r : [r],
            request: a,
            response: u,
            getAccessToken: i,
            logger: s,
          })),
          d && ([u, l] = await Je(a, c)),
          dn(u) && ((f = hn(u.headers.get('WWW-Authenticate'))), f))
        ) {
          let h;
          try {
            h = atob(f);
          } catch {
            return (
              s.warning(
                `The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${f}`,
              ),
              u
            );
          }
          ((d = await fn(
            {
              scopes: Array.isArray(r) ? r : [r],
              response: u,
              request: a,
              getAccessToken: i,
              logger: s,
            },
            h,
          )),
            d && ([u, l] = await Je(a, c)));
        }
      }
      if (l) throw l;
      return u;
    },
  };
}
function Zu(t) {
  const e = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g,
    r = /(\w+)="([^"]*)"/g,
    n = [];
  let s;
  for (; (s = e.exec(t)) !== null; ) {
    const o = s[1],
      i = s[2],
      a = {};
    let c;
    for (; (c = r.exec(i)) !== null; ) a[c[1]] = c[2];
    n.push({ scheme: o, params: a });
  }
  return n;
}
function hn(t) {
  return t
    ? Zu(t).find(
        (r) => r.scheme === 'Bearer' && r.params.claims && r.params.error === 'insufficient_claims',
      )?.params.claims
    : void 0;
}
const el = 'ApiVersionPolicy';
function tl(t) {
  return {
    name: el,
    sendRequest: (e, r) => {
      const n = new URL(e.url);
      return (
        !n.searchParams.get('api-version') &&
          t.apiVersion &&
          (e.url = `${e.url}${Array.from(n.searchParams.keys()).length > 0 ? '&' : '?'}api-version=${t.apiVersion}`),
        r(e)
      );
    },
  };
}
const rl = 'keyCredentialAuthenticationPolicy';
function nl(t, e) {
  return {
    name: rl,
    async sendRequest(r, n) {
      return (r.headers.set(e, t.key), n(r));
    },
  };
}
function sl(t, e, r = {}) {
  const { credential: n, clientOptions: s } = r;
  if (n) {
    if (As(n)) {
      const o = Yu({ credential: n, scopes: s?.credentials?.scopes ?? `${e}/.default` });
      t.addPolicy(o);
    } else if (il(n)) {
      if (!s?.credentials?.apiKeyHeaderName) throw new Error('Missing API Key Header Name');
      const o = nl(n, s?.credentials?.apiKeyHeaderName);
      t.addPolicy(o);
    }
  }
}
function ol(t, e, r = {}) {
  const n = qu(r);
  return (n.addPolicy(tl(r)), sl(n, t, { credential: e, clientOptions: r }), n);
}
function il(t) {
  return t.key !== void 0;
}
function ee(t) {
  return t.onResponse
    ? {
        ...t,
        onResponse(e, r) {
          t.onResponse?.(e, r, r);
        },
      }
    : t;
}
function al(t, e, r = {}) {
  let n;
  e && (cl(e) ? (n = e) : (r = e ?? {}));
  const s = ol(t, n, r),
    o = du(t, { ...r, pipeline: s }),
    i = (a, ...c) => ({
      get: (u = {}) => o.path(a, ...c).get(ee(u)),
      post: (u = {}) => o.path(a, ...c).post(ee(u)),
      put: (u = {}) => o.path(a, ...c).put(ee(u)),
      patch: (u = {}) => o.path(a, ...c).patch(ee(u)),
      delete: (u = {}) => o.path(a, ...c).delete(ee(u)),
      head: (u = {}) => o.path(a, ...c).head(ee(u)),
      options: (u = {}) => o.path(a, ...c).options(ee(u)),
      trace: (u = {}) => o.path(a, ...c).trace(ee(u)),
    });
  return { path: i, pathUnchecked: i, pipeline: o.pipeline };
}
function cl(t) {
  return Es(t) || As(t);
}
const Zs = Ws('ai-inference');
var pn = {};
const eo = 'az.ai.inference',
  Zt = () => ml('AZURE_TRACING_GEN_AI_CONTENT_RECORDING_ENABLED');
var R;
(function (t) {
  ((t.Operation_Name = 'gen_ai.operation.name'),
    (t.Request_Model = 'gen_ai.request.model'),
    (t.System = 'gen_ai.system'),
    (t.Error_Type = 'error.type'),
    (t.Server_Port = 'server.port'),
    (t.Request_Frequency_Penalty = 'gen_ai.request.frequency_penalty'),
    (t.Request_Max_Tokens = 'gen_ai.request.max_tokens'),
    (t.Request_Presence_Penalty = 'gen_ai.request.presence_penalty'),
    (t.Request_Stop_Sequences = 'gen_ai.request.stop_sequences'),
    (t.Request_Temperature = 'gen_ai.request.temperature'),
    (t.Request_Top_P = 'gen_ai.request.top_p'),
    (t.Response_Finish_Reasons = 'gen_ai.response.finish_reasons'),
    (t.Response_Id = 'gen_ai.response.id'),
    (t.Response_Model = 'gen_ai.response.model'),
    (t.Usage_Input_Tokens = 'gen_ai.usage.input_tokens'),
    (t.Usage_Output_Tokens = 'gen_ai.usage.output_tokens'),
    (t.Server_Address = 'server.address'));
})(R || (R = {}));
function gr(t) {
  return { body: JSON.parse(t.body) };
}
function ul(t) {
  var e;
  const { body: r } = gr(t);
  return `chat ${(e = r?.model) !== null && e !== void 0 ? e : ''}`.trim();
}
function ll(t, e, r) {
  if (!t.isRecording()) return;
  const n = new URL(r),
    s = Number(n.port) || (n.protocol === 'https:' ? void 0 : 80);
  (s && t.setAttribute(R.Server_Port, s),
    t.setAttribute(R.Server_Address, n.hostname),
    t.setAttribute(R.Operation_Name, 'chat'),
    t.setAttribute(R.System, 'az.ai.inference'));
  const { body: o } = gr(e);
  o &&
    (t.setAttribute(R.Request_Model, o.model),
    t.setAttribute(R.Request_Frequency_Penalty, o.frequency_penalty),
    t.setAttribute(R.Request_Max_Tokens, o.max_tokens),
    t.setAttribute(R.Request_Presence_Penalty, o.presence_penalty),
    t.setAttribute(R.Request_Stop_Sequences, o.stop),
    t.setAttribute(R.Request_Temperature, o.temperature),
    t.setAttribute(R.Request_Top_P, o.top_p),
    o.messages && hl(t, o.messages));
}
function dl(t, e) {
  var r, n, s;
  if (t.isRecording() && e?.bodyAsText) {
    const o = JSON.parse(e.bodyAsText);
    (((r = o.error) !== null && r !== void 0 ? r : o.message) &&
      (t.setAttribute(
        R.Error_Type,
        `${(n = o.status) !== null && n !== void 0 ? n : o.statusCode}`,
      ),
      t.setStatus({
        status: 'error',
        error: (s = o.error) !== null && s !== void 0 ? s : o.message,
      })),
      t.setAttribute(R.Response_Id, o.id),
      t.setAttribute(R.Response_Model, o.model),
      o.choices &&
        t.setAttribute(R.Response_Finish_Reasons, o.choices.map((i) => i.finish_reason).join(',')),
      o.usage &&
        (t.setAttribute(R.Usage_Input_Tokens, o.usage.prompt_tokens),
        t.setAttribute(R.Usage_Output_Tokens, o.usage.completion_tokens)),
      pl(t, o));
  }
}
function fl(t, e) {
  t.setStatus({ status: 'error', error: Ss(e) ? e : void 0 });
}
function hl(t, e) {
  e.forEach((r) => {
    var n;
    if (r.role) {
      const s = {},
        o = r;
      (o.content && (s.content = o.content), Zt() || (s.content = ''));
      const i = r;
      if (i.tool_calls && ((s.tool_calls = i.tool_calls), !Zt())) {
        const c = JSON.parse(JSON.stringify(s.tool_calls));
        (c.forEach((u) => {
          (u.function.arguments && (u.function.arguments = ''), (u.function.name = ''));
        }),
          (s.tool_calls = c));
      }
      const a = r;
      (a.tool_call_id && (s.id = a.tool_call_id),
        (n = t.addEvent) === null ||
          n === void 0 ||
          n.call(t, `gen_ai.${r.role}.message`, {
            attributes: { 'gen_ai.system': eo, 'gen_ai.event.content': JSON.stringify(s) },
          }));
    }
  });
}
function pl(t, e) {
  var r;
  t.addEvent &&
    ((r = e?.choices) === null ||
      r === void 0 ||
      r.forEach((n) => {
        var s;
        let o = {};
        (n.message.content && (o.content = n.message.content),
          n.message.tool_calls && (o.toolCalls = n.message.tool_calls),
          Zt() ||
            ((o = JSON.parse(JSON.stringify(o))),
            (o.content = ''),
            o.toolCalls &&
              o.toolCalls.forEach((c) => {
                (c.function.arguments && (c.function.arguments = ''), (c.function.name = ''));
              })));
        const i = { finish_reason: n.finish_reason, index: n.index, message: o },
          a = { 'gen_ai.system': eo, 'gen_ai.event.content': JSON.stringify(i) };
        (s = t.addEvent) === null || s === void 0 || s.call(t, 'gen_ai.choice', { attributes: a });
      }));
}
function ml(t) {
  var e;
  const r = (e = pn[t]) !== null && e !== void 0 ? e : pn[t.toLowerCase()];
  return r !== 'false' && r !== '0' && !!r;
}
const gl = '1.0.0-beta.4',
  yl = 'inferenceTracingPolicy';
function wl() {
  const t = Xs({
    namespace: 'Microsoft.CognitiveServices',
    packageName: '@azure/ai-inference-rest',
    packageVersion: gl,
  });
  return {
    name: yl,
    async sendRequest(e, r) {
      var n, s, o, i;
      const a = new URL(e.url);
      if (
        !t ||
        !a.href.endsWith('/chat/completions') ||
        (!((s = (n = gr(e)) === null || n === void 0 ? void 0 : n.body) === null || s === void 0) &&
          s.stream)
      )
        return r(e);
      const { span: c, tracingContext: u } = (o = bl(t, e)) !== null && o !== void 0 ? o : {};
      if (!c || !u) return r(e);
      try {
        (((i = e.tracingOptions) !== null && i !== void 0) || (e.tracingOptions = {}),
          (e.tracingOptions.tracingContext = u),
          ll(c, e, e.url));
        const l = await t.withContext(u, r, e);
        return (dl(c, l), l);
      } catch (l) {
        throw (fl(c, l), l);
      } finally {
        c.end();
      }
    },
  };
}
function bl(t, e) {
  try {
    const { span: r, updatedOptions: n } = t.startSpan(
      ul(e),
      { tracingOptions: e.tracingOptions },
      { spanKind: 'client' },
    );
    return { span: r, tracingContext: n.tracingOptions.tracingContext };
  } catch (r) {
    Zs.warning(`Skipping creating a tracing span due to an error: ${We(r)}`);
    return;
  }
}
function Sl(t, e, r = {}) {
  var n,
    s,
    o,
    i,
    a,
    c,
    u,
    l,
    { apiVersion: d = '2024-05-01-preview' } = r,
    f = xi(r, ['apiVersion']);
  const h =
      (s = (n = f.endpoint) !== null && n !== void 0 ? n : f.baseUrl) !== null && s !== void 0
        ? s
        : `${t}`,
    p = 'azsdk-js-ai-inference/1.0.0-beta.3',
    g =
      f.userAgentOptions && f.userAgentOptions.userAgentPrefix
        ? `${f.userAgentOptions.userAgentPrefix} ${p}`
        : `${p}`;
  f = Object.assign(Object.assign({}, f), {
    userAgentOptions: { userAgentPrefix: g },
    loggingOptions: {
      logger:
        (i = (o = f.loggingOptions) === null || o === void 0 ? void 0 : o.logger) !== null &&
        i !== void 0
          ? i
          : Zs.info,
    },
    credentials: {
      scopes:
        (c = (a = f.credentials) === null || a === void 0 ? void 0 : a.scopes) !== null &&
        c !== void 0
          ? c
          : ['https://ml.azure.com/.default'],
      apiKeyHeaderName:
        (l = (u = f.credentials) === null || u === void 0 ? void 0 : u.apiKeyHeaderName) !== null &&
        l !== void 0
          ? l
          : 'api-key',
    },
  });
  const m = al(h, e, f);
  return (
    m.pipeline.removePolicy({ name: 'ApiVersionPolicy' }),
    m.pipeline.addPolicy({
      name: 'InferenceTracingPolicy',
      sendRequest: (y, w) => wl().sendRequest(y, w),
    }),
    m.pipeline.addPolicy({
      name: 'ClientApiVersionPolicy',
      sendRequest: (y, w) => {
        const S = new URL(y.url);
        return (
          !S.searchParams.get('api-version') &&
            d &&
            (y.url = `${y.url}${Array.from(S.searchParams.keys()).length > 0 ? '&' : '?'}api-version=${d}`),
          w(y)
        );
      },
    }),
    Es(e) &&
      m.pipeline.addPolicy({
        name: 'customKeyCredentialPolicy',
        async sendRequest(y, w) {
          return (y.headers.set('Authorization', 'Bearer ' + e.key), w(y));
        },
      }),
    m
  );
}
var El = {};
class py {
  client;
  constructor(e) {
    if (!e?.apiKey || !e?.baseURL) throw q.createError(N.InvalidProviderAPIKey);
    ((this.client = Sl(e?.baseURL, new Gi(e?.apiKey))), (this.baseURL = e?.baseURL));
  }
  baseURL;
  async chat(e, r) {
    const { messages: n, model: s, temperature: o, top_p: i, apiMode: a, ...c } = e,
      u = s.includes('o1') ? !1 : (c.stream ?? !0),
      l = n.map((d) => ({
        ...d,
        role:
          (s.includes('o1') || s.includes('o3')) && d.role === 'system'
            ? [...ki].some((f) => s.includes(f))
              ? 'user'
              : 'developer'
            : d.role,
      }));
    try {
      const d = this.client
        .path('/chat/completions')
        .post({
          body: {
            messages: l,
            model: s,
            ...c,
            stream: u,
            temperature: s.includes('o3') || s.includes('o4') ? void 0 : o,
            tool_choice: c.tools ? 'auto' : void 0,
            top_p: s.includes('o3') || s.includes('o4') ? void 0 : i,
          },
        });
      if (u) {
        const f = await (async () => {
            if (typeof window > 'u') {
              const y = await lt(() => import('./_node-stub_node_stream-BIHI7g3E.js'), []),
                w = y.Readable ?? y.default.Readable;
              if (!w) throw new Error('node:stream module missing Readable export');
              if (typeof w.toWeb != 'function') throw new Error('Readable.toWeb is not a function');
              const b = (await d.asNodeStream()).body;
              if (!b) throw new Error('Azure AI response body is empty');
              return w.toWeb(b);
            }
            const m = (await d.asBrowserStream()).body;
            if (!m) throw new Error('Azure AI response body is empty');
            return m;
          })(),
          [h, p] = f.tee();
        return (
          El.DEBUG_AZURE_AI_CHAT_COMPLETION === '1' && rt(p).catch(console.error),
          Be(Jr(h.pipeThrough(Di()), { callbacks: r?.callback }), { headers: r?.headers })
        );
      } else {
        const f = await d,
          h = Ii(f.body);
        return Be(Jr(h, { callbacks: r?.callback, enableStreaming: !1 }), { headers: r?.headers });
      }
    } catch (d) {
      let f = d;
      f.code
        ? f.code === 'DeploymentNotFound' && (f = { ...f, deployId: s })
        : (f = { cause: f.cause, message: f.message, name: f.name });
      const h = f.code ? N.ProviderBizError : N.AgentRuntimeError,
        p = Mi(f);
      throw q.chat({
        endpoint: this.maskSensitiveUrl(this.baseURL),
        error: p,
        errorType: h,
        provider: tt.Azure,
      });
    }
  }
  maskSensitiveUrl = (e) => {
    const r = /^(https:\/\/)([^.]+)(\.cognitiveservices\.azure\.com\/.*)$/;
    return e.replace(r, (n, s, o, i) => `${s}***${i}`);
  };
}
function Al(t) {
  const e = t.signer,
    r = t.signer,
    n = Object.assign(t, { eventSigner: e, messageSigner: r }),
    s = n.eventStreamPayloadHandlerProvider(n);
  return Object.assign(n, { eventStreamPayloadHandler: s });
}
const xl = (t) => ({
    setHttpHandler(e) {
      t.httpHandler = e;
    },
    httpHandler() {
      return t.httpHandler;
    },
    updateHttpClientConfig(e, r) {
      t.httpHandler?.updateHttpClientConfig(e, r);
    },
    httpHandlerConfigs() {
      return t.httpHandler.httpHandlerConfigs();
    },
  }),
  Rl = (t) => ({ httpHandler: t.httpHandler() });
var Ne;
(function (t) {
  ((t.HTTP = 'http'), (t.HTTPS = 'https'));
})(Ne || (Ne = {}));
var Ue;
(function (t) {
  ((t.MD5 = 'md5'),
    (t.CRC32 = 'crc32'),
    (t.CRC32C = 'crc32c'),
    (t.SHA1 = 'sha1'),
    (t.SHA256 = 'sha256'));
})(Ue || (Ue = {}));
const er = '__smithy_context';
class P {
  method;
  protocol;
  hostname;
  port;
  path;
  query;
  headers;
  username;
  password;
  fragment;
  body;
  constructor(e) {
    ((this.method = e.method || 'GET'),
      (this.hostname = e.hostname || 'localhost'),
      (this.port = e.port),
      (this.query = e.query || {}),
      (this.headers = e.headers || {}),
      (this.body = e.body),
      (this.protocol = e.protocol
        ? e.protocol.slice(-1) !== ':'
          ? `${e.protocol}:`
          : e.protocol
        : 'https:'),
      (this.path = e.path ? (e.path.charAt(0) !== '/' ? `/${e.path}` : e.path) : '/'),
      (this.username = e.username),
      (this.password = e.password),
      (this.fragment = e.fragment));
  }
  static clone(e) {
    const r = new P({ ...e, headers: { ...e.headers } });
    return (r.query && (r.query = Cl(r.query)), r);
  }
  static isInstance(e) {
    if (!e) return !1;
    const r = e;
    return (
      'method' in r &&
      'protocol' in r &&
      'hostname' in r &&
      'path' in r &&
      typeof r.query == 'object' &&
      typeof r.headers == 'object'
    );
  }
  clone() {
    return P.clone(this);
  }
}
function Cl(t) {
  return Object.keys(t).reduce((e, r) => {
    const n = t[r];
    return { ...e, [r]: Array.isArray(n) ? [...n] : n };
  }, {});
}
class de {
  statusCode;
  reason;
  headers;
  body;
  constructor(e) {
    ((this.statusCode = e.statusCode),
      (this.reason = e.reason),
      (this.headers = e.headers || {}),
      (this.body = e.body));
  }
  static isInstance(e) {
    if (!e) return !1;
    const r = e;
    return typeof r.statusCode == 'number' && typeof r.headers == 'object';
  }
}
const Tl = (t) => (e) => async (r) => {
    if (!P.isInstance(r.request)) return e(r);
    const { request: n } = r,
      { handlerProtocol: s = '' } = t.requestHandler.metadata || {};
    if (s.indexOf('h2') >= 0 && !n.headers[':authority'])
      (delete n.headers.host,
        (n.headers[':authority'] = n.hostname + (n.port ? ':' + n.port : '')));
    else if (!n.headers.host) {
      let o = n.hostname;
      (n.port != null && (o += `:${n.port}`), (n.headers.host = o));
    }
    return e(r);
  },
  vl = {
    name: 'hostHeaderMiddleware',
    step: 'build',
    priority: 'low',
    tags: ['HOST'],
    override: !0,
  },
  Pl = (t) => ({
    applyToStack: (e) => {
      e.add(Tl(t), vl);
    },
  }),
  _l = () => (t, e) => async (r) => {
    try {
      const n = await t(r),
        { clientName: s, commandName: o, logger: i, dynamoDbDocumentClientOptions: a = {} } = e,
        { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: u } = a,
        l = c ?? e.inputFilterSensitiveLog,
        d = u ?? e.outputFilterSensitiveLog,
        { $metadata: f, ...h } = n.output;
      return (
        i?.info?.({ clientName: s, commandName: o, input: l(r.input), output: d(h), metadata: f }),
        n
      );
    } catch (n) {
      const { clientName: s, commandName: o, logger: i, dynamoDbDocumentClientOptions: a = {} } = e,
        { overrideInputFilterSensitiveLog: c } = a,
        u = c ?? e.inputFilterSensitiveLog;
      throw (
        i?.error?.({
          clientName: s,
          commandName: o,
          input: u(r.input),
          error: n,
          metadata: n.$metadata,
        }),
        n
      );
    }
  },
  $l = { name: 'loggerMiddleware', tags: ['LOGGER'], step: 'initialize', override: !0 },
  kl = (t) => ({
    applyToStack: (e) => {
      e.add(_l(), $l);
    },
  }),
  Dl = {
    step: 'build',
    tags: ['RECURSION_DETECTION'],
    name: 'recursionDetectionMiddleware',
    override: !0,
    priority: 'low',
  },
  Il = () => (t) => async (e) => t(e),
  Ml = (t) => ({
    applyToStack: (e) => {
      e.add(Il(), Dl);
    },
  }),
  Re = (t) => t[er] || (t[er] = {}),
  X = (t) => {
    if (typeof t == 'function') return t;
    const e = Promise.resolve(t);
    return () => e;
  },
  Ol = (t, e) => {
    if (!e || e.length === 0) return t;
    const r = [];
    for (const n of e) for (const s of t) s.schemeId.split('#')[1] === n && r.push(s);
    for (const n of t) r.find(({ schemeId: s }) => s === n.schemeId) || r.push(n);
    return r;
  };
function Bl(t) {
  const e = new Map();
  for (const r of t) e.set(r.schemeId, r);
  return e;
}
const Nl = (t, e) => (r, n) => async (s) => {
    const o = t.httpAuthSchemeProvider(await e.httpAuthSchemeParametersProvider(t, n, s.input)),
      i = t.authSchemePreference ? await t.authSchemePreference() : [],
      a = Ol(o, i),
      c = Bl(t.httpAuthSchemes),
      u = Re(n),
      l = [];
    for (const d of a) {
      const f = c.get(d.schemeId);
      if (!f) {
        l.push(`HttpAuthScheme \`${d.schemeId}\` was not enabled for this service.`);
        continue;
      }
      const h = f.identityProvider(await e.identityProviderConfigProvider(t));
      if (!h) {
        l.push(`HttpAuthScheme \`${d.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      const { identityProperties: p = {}, signingProperties: g = {} } =
        d.propertiesExtractor?.(t, n) || {};
      ((d.identityProperties = Object.assign(d.identityProperties || {}, p)),
        (d.signingProperties = Object.assign(d.signingProperties || {}, g)),
        (u.selectedHttpAuthScheme = {
          httpAuthOption: d,
          identity: await h(d.identityProperties),
          signer: f.signer,
        }));
      break;
    }
    if (!u.selectedHttpAuthScheme)
      throw new Error(
        l.join(`
`),
      );
    return r(s);
  },
  Ul = {
    step: 'serialize',
    tags: ['HTTP_AUTH_SCHEME'],
    name: 'httpAuthSchemeMiddleware',
    override: !0,
    relation: 'before',
    toMiddleware: 'endpointV2Middleware',
  },
  Ll = (t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }) => ({
    applyToStack: (n) => {
      n.addRelativeTo(
        Nl(t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }),
        Ul,
      );
    },
  }),
  Fl = (t) => (e) => {
    throw e;
  },
  zl = (t, e) => {},
  Hl = (t) => (e, r) => async (n) => {
    if (!P.isInstance(n.request)) return e(n);
    const o = Re(r).selectedHttpAuthScheme;
    if (!o) throw new Error('No HttpAuthScheme was selected: unable to sign request');
    const {
        httpAuthOption: { signingProperties: i = {} },
        identity: a,
        signer: c,
      } = o,
      u = await e({ ...n, request: await c.sign(n.request, a, i) }).catch(
        (c.errorHandler || Fl)(i),
      );
    return ((c.successHandler || zl)(u.response, i), u);
  },
  jl = {
    step: 'finalizeRequest',
    tags: ['HTTP_SIGNING'],
    name: 'httpSigningMiddleware',
    aliases: ['apiKeyMiddleware', 'tokenMiddleware', 'awsAuthMiddleware'],
    override: !0,
    relation: 'after',
    toMiddleware: 'retryMiddleware',
  },
  Vl = (t) => ({
    applyToStack: (e) => {
      e.addRelativeTo(Hl(), jl);
    },
  }),
  Ie = (t) => {
    if (typeof t == 'function') return t;
    const e = Promise.resolve(t);
    return () => e;
  },
  to = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  mn = Object.entries(to).reduce((t, [e, r]) => ((t[r] = Number(e)), t), {}),
  Wl = to.split(''),
  be = 6,
  Me = 8,
  ql = 63,
  fe = (t) => {
    let e = (t.length / 4) * 3;
    t.slice(-2) === '==' ? (e -= 2) : t.slice(-1) === '=' && e--;
    const r = new ArrayBuffer(e),
      n = new DataView(r);
    for (let s = 0; s < t.length; s += 4) {
      let o = 0,
        i = 0;
      for (let u = s, l = s + 3; u <= l; u++)
        if (t[u] !== '=') {
          if (!(t[u] in mn)) throw new TypeError(`Invalid character ${t[u]} in base64 string.`);
          ((o |= mn[t[u]] << ((l - u) * be)), (i += be));
        } else o >>= be;
      const a = (s / 4) * 3;
      o >>= i % Me;
      const c = Math.floor(i / Me);
      for (let u = 0; u < c; u++) {
        const l = (c - u - 1) * Me;
        n.setUint8(a + u, (o & (255 << l)) >> l);
      }
    }
    return new Uint8Array(r);
  },
  he = (t) => new TextEncoder().encode(t),
  Le = (t) =>
    typeof t == 'string'
      ? he(t)
      : ArrayBuffer.isView(t)
        ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        : new Uint8Array(t),
  Ce = (t) => {
    if (typeof t == 'string') return t;
    if (typeof t != 'object' || typeof t.byteOffset != 'number' || typeof t.byteLength != 'number')
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.',
      );
    return new TextDecoder('utf-8').decode(t);
  };
function pe(t) {
  let e;
  typeof t == 'string' ? (e = he(t)) : (e = t);
  const r = typeof e == 'object' && typeof e.length == 'number',
    n = typeof e == 'object' && typeof e.byteOffset == 'number' && typeof e.byteLength == 'number';
  if (!r && !n)
    throw new Error(
      '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.',
    );
  let s = '';
  for (let o = 0; o < e.length; o += 3) {
    let i = 0,
      a = 0;
    for (let u = o, l = Math.min(o + 3, e.length); u < l; u++)
      ((i |= e[u] << ((l - u - 1) * Me)), (a += Me));
    const c = Math.ceil(a / be);
    i <<= c * be - a;
    for (let u = 1; u <= c; u++) {
      const l = (c - u) * be;
      s += Wl[(i & (ql << l)) >> l];
    }
    s += '=='.slice(0, 4 - c);
  }
  return s;
}
class ue extends Uint8Array {
  static fromString(e, r = 'utf-8') {
    if (typeof e == 'string') return r === 'base64' ? ue.mutate(fe(e)) : ue.mutate(he(e));
    throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
  }
  static mutate(e) {
    return (Object.setPrototypeOf(e, ue.prototype), e);
  }
  transformToString(e = 'utf-8') {
    return e === 'base64' ? pe(this) : Ce(this);
  }
}
const gn = (t) =>
    typeof ReadableStream == 'function' &&
    (t?.constructor?.name === ReadableStream.name || t instanceof ReadableStream),
  le = (t) => encodeURIComponent(t).replace(/[!'()*]/g, Gl),
  Gl = (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`;
function ro(t) {
  const e = [];
  for (let r of Object.keys(t).sort()) {
    const n = t[r];
    if (((r = le(r)), Array.isArray(n)))
      for (let s = 0, o = n.length; s < o; s++) e.push(`${r}=${le(n[s])}`);
    else {
      let s = r;
      ((n || typeof n == 'string') && (s += `=${le(n)}`), e.push(s));
    }
  }
  return e.join('&');
}
function yn(t, e) {
  return new Request(t, e);
}
function Jl(t = 0) {
  return new Promise((e, r) => {
    t &&
      setTimeout(() => {
        const n = new Error(`Request did not complete within ${t} ms`);
        ((n.name = 'TimeoutError'), r(n));
      }, t);
  });
}
const kt = { supported: void 0 };
class Fe {
  config;
  configProvider;
  static create(e) {
    return typeof e?.handle == 'function' ? e : new Fe(e);
  }
  constructor(e) {
    (typeof e == 'function'
      ? (this.configProvider = e().then((r) => r || {}))
      : ((this.config = e ?? {}), (this.configProvider = Promise.resolve(this.config))),
      kt.supported === void 0 &&
        (kt.supported = typeof Request < 'u' && 'keepalive' in yn('https://[::1]')));
  }
  destroy() {}
  async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
    this.config || (this.config = await this.configProvider);
    const s = n ?? this.config.requestTimeout,
      o = this.config.keepAlive === !0,
      i = this.config.credentials;
    if (r?.aborted) {
      const w = wn(r);
      return Promise.reject(w);
    }
    let a = e.path;
    const c = ro(e.query || {});
    (c && (a += `?${c}`), e.fragment && (a += `#${e.fragment}`));
    let u = '';
    if (e.username != null || e.password != null) {
      const w = e.username ?? '',
        S = e.password ?? '';
      u = `${w}:${S}@`;
    }
    const { port: l, method: d } = e,
      f = `${e.protocol}//${u}${e.hostname}${l ? `:${l}` : ''}${a}`,
      h = d === 'GET' || d === 'HEAD' ? void 0 : e.body,
      p = { body: h, headers: new Headers(e.headers), method: d, credentials: i };
    (this.config?.cache && (p.cache = this.config.cache),
      h && (p.duplex = 'half'),
      typeof AbortController < 'u' && (p.signal = r),
      kt.supported && (p.keepalive = o),
      typeof this.config.requestInit == 'function' && Object.assign(p, this.config.requestInit(e)));
    let g = () => {};
    const m = yn(f, p),
      y = [
        fetch(m).then((w) => {
          const S = w.headers,
            b = {};
          for (const O of S.entries()) b[O[0]] = O[1];
          return w.body != null
            ? {
                response: new de({
                  headers: b,
                  reason: w.statusText,
                  statusCode: w.status,
                  body: w.body,
                }),
              }
            : w
                .blob()
                .then((O) => ({
                  response: new de({
                    headers: b,
                    reason: w.statusText,
                    statusCode: w.status,
                    body: O,
                  }),
                }));
        }),
        Jl(s),
      ];
    return (
      r &&
        y.push(
          new Promise((w, S) => {
            const b = () => {
              const C = wn(r);
              S(C);
            };
            if (typeof r.addEventListener == 'function') {
              const C = r;
              (C.addEventListener('abort', b, { once: !0 }),
                (g = () => C.removeEventListener('abort', b)));
            } else r.onabort = b;
          }),
        ),
      Promise.race(y).finally(g)
    );
  }
  updateHttpClientConfig(e, r) {
    ((this.config = void 0),
      (this.configProvider = this.configProvider.then((n) => ((n[e] = r), n))));
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
}
function wn(t) {
  const e = t && typeof t == 'object' && 'reason' in t ? t.reason : void 0;
  if (e) {
    if (e instanceof Error) {
      const s = new Error('Request aborted');
      return ((s.name = 'AbortError'), (s.cause = e), s);
    }
    const n = new Error(String(e));
    return ((n.name = 'AbortError'), n);
  }
  const r = new Error('Request aborted');
  return ((r.name = 'AbortError'), r);
}
const no = async (t) =>
  (typeof Blob == 'function' && t instanceof Blob) || t.constructor?.name === 'Blob'
    ? Blob.prototype.arrayBuffer !== void 0
      ? new Uint8Array(await t.arrayBuffer())
      : Kl(t)
    : Ql(t);
async function Kl(t) {
  const e = await Xl(t),
    r = fe(e);
  return new Uint8Array(r);
}
async function Ql(t) {
  const e = [],
    r = t.getReader();
  let n = !1,
    s = 0;
  for (; !n; ) {
    const { done: a, value: c } = await r.read();
    (c && (e.push(c), (s += c.length)), (n = a));
  }
  const o = new Uint8Array(s);
  let i = 0;
  for (const a of e) (o.set(a, i), (i += a.length));
  return o;
}
function Xl(t) {
  return new Promise((e, r) => {
    const n = new FileReader();
    ((n.onloadend = () => {
      if (n.readyState !== 2) return r(new Error('Reader aborted too early'));
      const s = n.result ?? '',
        o = s.indexOf(','),
        i = o > -1 ? o + 1 : s.length;
      e(s.substring(i));
    }),
      (n.onabort = () => r(new Error('Read aborted'))),
      (n.onerror = () => r(n.error)),
      n.readAsDataURL(t));
  });
}
const so = {},
  tr = {};
for (let t = 0; t < 256; t++) {
  let e = t.toString(16).toLowerCase();
  (e.length === 1 && (e = `0${e}`), (so[t] = e), (tr[e] = t));
}
function yr(t) {
  if (t.length % 2 !== 0) throw new Error('Hex encoded strings must have an even number length');
  const e = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2) {
    const n = t.slice(r, r + 2).toLowerCase();
    if (n in tr) e[r / 2] = tr[n];
    else throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
  }
  return e;
}
function k(t) {
  let e = '';
  for (let r = 0; r < t.byteLength; r++) e += so[t[r]];
  return e;
}
const bn = 'The stream has already been transformed.',
  Yl = (t) => {
    if (!Sn(t) && !gn(t)) {
      const s = t?.__proto__?.constructor?.name || t;
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${s}`);
    }
    let e = !1;
    const r = async () => {
        if (e) throw new Error(bn);
        return ((e = !0), await no(t));
      },
      n = (s) => {
        if (typeof s.stream != 'function')
          throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
        return s.stream();
      };
    return Object.assign(t, {
      transformToByteArray: r,
      transformToString: async (s) => {
        const o = await r();
        if (s === 'base64') return pe(o);
        if (s === 'hex') return k(o);
        if (s === void 0 || s === 'utf8' || s === 'utf-8') return Ce(o);
        if (typeof TextDecoder == 'function') return new TextDecoder(s).decode(o);
        throw new Error('TextDecoder is not available, please make sure polyfill is provided.');
      },
      transformToWebStream: () => {
        if (e) throw new Error(bn);
        if (((e = !0), Sn(t))) return n(t);
        if (gn(t)) return t;
        throw new Error(`Cannot transform payload to web stream, got ${t}`);
      },
    });
  },
  Sn = (t) => typeof Blob == 'function' && t instanceof Blob,
  $e = async (t = new Uint8Array(), e) => {
    if (t instanceof Uint8Array) return ue.mutate(t);
    if (!t) return ue.mutate(new Uint8Array());
    const r = e.streamCollector(t);
    return ue.mutate(await r);
  };
function En(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function (e) {
    return '%' + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
const Dt = (t) => (typeof t == 'function' ? t() : t),
  oo = (t, e, r, n, s) => ({ name: e, namespace: t, traits: r, input: n, output: s }),
  Zl = (t) => (e, r) => async (n) => {
    const { response: s } = await e(n),
      { operationSchema: o } = Re(r),
      [, i, a, c, u, l] = o ?? [];
    try {
      const d = await t.protocol.deserializeResponse(oo(i, a, c, u, l), { ...t, ...r }, s);
      return { response: s, output: d };
    } catch (d) {
      if (
        (Object.defineProperty(d, '$response', {
          value: s,
          enumerable: !1,
          writable: !1,
          configurable: !1,
        }),
        !('$metadata' in d))
      ) {
        const f =
          'Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.';
        try {
          d.message +=
            `
  ` + f;
        } catch {
          !r.logger || r.logger?.constructor?.name === 'NoOpLogger'
            ? console.warn(f)
            : r.logger?.warn?.(f);
        }
        typeof d.$responseBodyText < 'u' && d.$response && (d.$response.body = d.$responseBodyText);
        try {
          if (de.isInstance(s)) {
            const { headers: h = {} } = s,
              p = Object.entries(h);
            d.$metadata = {
              httpStatusCode: s.statusCode,
              requestId: It(/^x-[\w-]+-request-?id$/, p),
              extendedRequestId: It(/^x-[\w-]+-id-2$/, p),
              cfId: It(/^x-[\w-]+-cf-id$/, p),
            };
          }
        } catch {}
      }
      throw d;
    }
  },
  It = (t, e) => (e.find(([r]) => r.match(t)) || [void 0, void 0])[1];
function ed(t) {
  const e = {};
  if (((t = t.replace(/^\?/, '')), t))
    for (const r of t.split('&')) {
      let [n, s = null] = r.split('=');
      ((n = decodeURIComponent(n)),
        s && (s = decodeURIComponent(s)),
        n in e ? (Array.isArray(e[n]) ? e[n].push(s) : (e[n] = [e[n], s])) : (e[n] = s));
    }
  return e;
}
const Ae = (t) => {
    if (typeof t == 'string') return Ae(new URL(t));
    const { hostname: e, pathname: r, port: n, protocol: s, search: o } = t;
    let i;
    return (
      o && (i = ed(o)),
      { hostname: e, port: n ? parseInt(n) : void 0, protocol: s, path: r, query: i }
    );
  },
  td = (t) => {
    if (typeof t == 'object') {
      if ('url' in t) {
        const e = Ae(t.url);
        if (t.headers) {
          e.headers = {};
          for (const [r, n] of Object.entries(t.headers)) e.headers[r.toLowerCase()] = n.join(', ');
        }
        return e;
      }
      return t;
    }
    return Ae(t);
  },
  rd = (t) => (e, r) => async (n) => {
    const { operationSchema: s } = Re(r),
      [, o, i, a, c, u] = s ?? [],
      l = r.endpointV2 ? async () => td(r.endpointV2) : t.endpoint,
      d = await t.protocol.serializeRequest(oo(o, i, a, c, u), n.input, {
        ...t,
        ...r,
        endpoint: l,
      });
    return e({ ...n, request: d });
  },
  nd = {
    name: 'deserializerMiddleware',
    step: 'deserialize',
    tags: ['DESERIALIZER'],
    override: !0,
  },
  sd = { name: 'serializerMiddleware', step: 'serialize', tags: ['SERIALIZER'], override: !0 };
function od(t) {
  return {
    applyToStack: (e) => {
      (e.add(rd(t), sd), e.add(Zl(t), nd), t.protocol.setSerdeContext(t));
    },
  };
}
const Mt = [];
function ye(t) {
  if (typeof t == 'object') return t;
  if (((t = t | 0), Mt[t])) return Mt[t];
  const e = {};
  let r = 0;
  for (const n of [
    'httpLabel',
    'idempotent',
    'idempotencyToken',
    'sensitive',
    'httpPayload',
    'httpResponseCode',
    'httpQueryParams',
  ])
    ((t >> r++) & 1) === 1 && (e[n] = 1);
  return (Mt[t] = e);
}
const ve = { it: Symbol.for('@smithy/nor-struct-it'), ns: Symbol.for('@smithy/ns') },
  Ot = [],
  Bt = {};
class E {
  ref;
  memberName;
  static symbol = Symbol.for('@smithy/nor');
  symbol = E.symbol;
  name;
  schema;
  _isMemberSchema;
  traits;
  memberTraits;
  normalizedTraits;
  constructor(e, r) {
    ((this.ref = e), (this.memberName = r));
    const n = [];
    let s = e,
      o = e;
    for (this._isMemberSchema = !1; Nt(s); )
      (n.push(s[1]), (s = s[0]), (o = Dt(s)), (this._isMemberSchema = !0));
    if (n.length > 0) {
      this.memberTraits = {};
      for (let i = n.length - 1; i >= 0; --i) {
        const a = n[i];
        Object.assign(this.memberTraits, ye(a));
      }
    } else this.memberTraits = 0;
    if (o instanceof E) {
      const i = this.memberTraits;
      (Object.assign(this, o),
        (this.memberTraits = Object.assign({}, i, o.getMemberTraits(), this.getMemberTraits())),
        (this.normalizedTraits = void 0),
        (this.memberName = r ?? o.memberName));
      return;
    }
    if (
      ((this.schema = Dt(o)),
      id(this.schema)
        ? ((this.name = `${this.schema[1]}#${this.schema[2]}`), (this.traits = this.schema[3]))
        : ((this.name = this.memberName ?? String(o)), (this.traits = 0)),
      this._isMemberSchema && !r)
    )
      throw new Error(
        `@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`,
      );
  }
  static [Symbol.hasInstance](e) {
    const r = this.prototype.isPrototypeOf(e);
    return !r && typeof e == 'object' && e !== null ? e.symbol === this.symbol : r;
  }
  static of(e) {
    const r = typeof e == 'function' || (typeof e == 'object' && e !== null);
    if (typeof e == 'number') {
      if (Ot[e]) return Ot[e];
    } else if (typeof e == 'string') {
      if (Bt[e]) return Bt[e];
    } else if (r && e[ve.ns]) return e[ve.ns];
    const n = Dt(e);
    if (n instanceof E) return n;
    if (Nt(n)) {
      const [o, i] = n;
      if (o instanceof E) return (Object.assign(o.getMergedTraits(), ye(i)), o);
      throw new Error(
        `@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e, null, 2)}.`,
      );
    }
    const s = new E(n);
    return r
      ? (e[ve.ns] = s)
      : typeof n == 'string'
        ? (Bt[n] = s)
        : typeof n == 'number'
          ? (Ot[n] = s)
          : s;
  }
  getSchema() {
    const e = this.schema;
    return Array.isArray(e) && e[0] === 0 ? e[4] : e;
  }
  getName(e = !1) {
    const { name: r } = this;
    return !e && r && r.includes('#') ? r.split('#')[1] : r || void 0;
  }
  getMemberName() {
    return this.memberName;
  }
  isMemberSchema() {
    return this._isMemberSchema;
  }
  isListSchema() {
    const e = this.getSchema();
    return typeof e == 'number' ? e >= 64 && e < 128 : e[0] === 1;
  }
  isMapSchema() {
    const e = this.getSchema();
    return typeof e == 'number' ? e >= 128 && e <= 255 : e[0] === 2;
  }
  isStructSchema() {
    const e = this.getSchema();
    if (typeof e != 'object') return !1;
    const r = e[0];
    return r === 3 || r === -3 || r === 4;
  }
  isUnionSchema() {
    const e = this.getSchema();
    return typeof e != 'object' ? !1 : e[0] === 4;
  }
  isBlobSchema() {
    const e = this.getSchema();
    return e === 21 || e === 42;
  }
  isTimestampSchema() {
    const e = this.getSchema();
    return typeof e == 'number' && e >= 4 && e <= 7;
  }
  isUnitSchema() {
    return this.getSchema() === 'unit';
  }
  isDocumentSchema() {
    return this.getSchema() === 15;
  }
  isStringSchema() {
    return this.getSchema() === 0;
  }
  isBooleanSchema() {
    return this.getSchema() === 2;
  }
  isNumericSchema() {
    return this.getSchema() === 1;
  }
  isBigIntegerSchema() {
    return this.getSchema() === 17;
  }
  isBigDecimalSchema() {
    return this.getSchema() === 19;
  }
  isStreaming() {
    const { streaming: e } = this.getMergedTraits();
    return !!e || this.getSchema() === 42;
  }
  isIdempotencyToken() {
    return !!this.getMergedTraits().idempotencyToken;
  }
  getMergedTraits() {
    return (
      this.normalizedTraits ??
      (this.normalizedTraits = { ...this.getOwnTraits(), ...this.getMemberTraits() })
    );
  }
  getMemberTraits() {
    return ye(this.memberTraits);
  }
  getOwnTraits() {
    return ye(this.traits);
  }
  getKeySchema() {
    const [e, r] = [this.isDocumentSchema(), this.isMapSchema()];
    if (!e && !r)
      throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`);
    const n = this.getSchema(),
      s = e ? 15 : (n[4] ?? 0);
    return Pe([s, 0], 'key');
  }
  getValueSchema() {
    const e = this.getSchema(),
      [r, n, s] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()],
      o =
        typeof e == 'number'
          ? 63 & e
          : e && typeof e == 'object' && (n || s)
            ? e[3 + e[0]]
            : r
              ? 15
              : void 0;
    if (o != null) return Pe([o, 0], n ? 'value' : 'member');
    throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`);
  }
  getMemberSchema(e) {
    const r = this.getSchema();
    if (this.isStructSchema() && r[4].includes(e)) {
      const n = r[4].indexOf(e),
        s = r[5][n];
      return Pe(Nt(s) ? s : [s, 0], e);
    }
    if (this.isDocumentSchema()) return Pe([15, 0], e);
    throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no member=${e}.`);
  }
  getMemberSchemas() {
    const e = {};
    try {
      for (const [r, n] of this.structIterator()) e[r] = n;
    } catch {}
    return e;
  }
  getEventStreamMember() {
    if (this.isStructSchema()) {
      for (const [e, r] of this.structIterator())
        if (r.isStreaming() && r.isStructSchema()) return e;
    }
    return '';
  }
  *structIterator() {
    if (this.isUnitSchema()) return;
    if (!this.isStructSchema())
      throw new Error('@smithy/core/schema - cannot iterate non-struct schema.');
    const e = this.getSchema(),
      r = e[4].length;
    let n = e[ve.it];
    if (n && r === n.length) {
      yield* n;
      return;
    }
    n = Array(r);
    for (let s = 0; s < r; ++s) {
      const o = e[4][s],
        i = Pe([e[5][s], 0], o);
      yield (n[s] = [o, i]);
    }
    e[ve.it] = n;
  }
}
function Pe(t, e) {
  if (t instanceof E) return Object.assign(t, { memberName: e, _isMemberSchema: !0 });
  const r = E;
  return new r(t, e);
}
const Nt = (t) => Array.isArray(t) && t.length === 2,
  id = (t) => Array.isArray(t) && t.length >= 5;
class D {
  namespace;
  schemas;
  exceptions;
  static registries = new Map();
  constructor(e, r = new Map(), n = new Map()) {
    ((this.namespace = e), (this.schemas = r), (this.exceptions = n));
  }
  static for(e) {
    return (D.registries.has(e) || D.registries.set(e, new D(e)), D.registries.get(e));
  }
  copyFrom(e) {
    const { schemas: r, exceptions: n } = this;
    for (const [s, o] of e.schemas) r.has(s) || r.set(s, o);
    for (const [s, o] of e.exceptions) n.has(s) || n.set(s, o);
  }
  register(e, r) {
    const n = this.normalizeShapeId(e);
    for (const s of [this, D.for(n.split('#')[0])]) s.schemas.set(n, r);
  }
  getSchema(e) {
    const r = this.normalizeShapeId(e);
    if (!this.schemas.has(r)) throw new Error(`@smithy/core/schema - schema not found for ${r}`);
    return this.schemas.get(r);
  }
  registerError(e, r) {
    const n = e,
      s = n[1];
    for (const o of [this, D.for(s)]) (o.schemas.set(s + '#' + n[2], n), o.exceptions.set(n, r));
  }
  getErrorCtor(e) {
    const r = e;
    return this.exceptions.has(r) ? this.exceptions.get(r) : D.for(r[1]).exceptions.get(r);
  }
  getBaseException() {
    for (const e of this.exceptions.keys())
      if (Array.isArray(e)) {
        const [, r, n] = e,
          s = r + '#' + n;
        if (s.startsWith('smithy.ts.sdk.synthetic.') && s.endsWith('ServiceException')) return e;
      }
  }
  find(e) {
    return [...this.schemas.values()].find(e);
  }
  clear() {
    (this.schemas.clear(), this.exceptions.clear());
  }
  normalizeShapeId(e) {
    return e.includes('#') ? e : this.namespace + '#' + e;
  }
}
const rr = (t) => {
    if (t != null) {
      if (typeof t == 'string') {
        const e = parseFloat(t);
        if (!Number.isNaN(e))
          return (
            String(e) !== String(t) && md.warn(pd(`Expected number but observed string: ${t}`)),
            e
          );
      }
      if (typeof t == 'number') return t;
      throw new TypeError(`Expected number, got ${typeof t}: ${t}`);
    }
  },
  ad = Math.ceil(2 ** 127 * (2 - 2 ** -23)),
  An = (t) => {
    const e = rr(t);
    if (e !== void 0 && !Number.isNaN(e) && e !== 1 / 0 && e !== -1 / 0 && Math.abs(e) > ad)
      throw new TypeError(`Expected 32-bit float, got ${t}`);
    return e;
  },
  cd = (t) => {
    if (t != null) {
      if (Number.isInteger(t) && !Number.isNaN(t)) return t;
      throw new TypeError(`Expected integer, got ${typeof t}: ${t}`);
    }
  },
  xn = (t) => io(t, 16),
  Rn = (t) => io(t, 8),
  io = (t, e) => {
    const r = cd(t);
    if (r !== void 0 && ud(r, e) !== r) throw new TypeError(`Expected ${e}-bit integer, got ${t}`);
    return r;
  },
  ud = (t, e) => {
    switch (e) {
      case 32:
        return Int32Array.of(t)[0];
      case 16:
        return Int16Array.of(t)[0];
      case 8:
        return Int8Array.of(t)[0];
    }
  },
  ld = (t) => rr(typeof t == 'string' ? ht(t) : t),
  dd = (t) => An(typeof t == 'string' ? ht(t) : t),
  fd = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
  ht = (t) => {
    const e = t.match(fd);
    if (e === null || e[0].length !== t.length)
      throw new TypeError('Expected real number, got implicit NaN');
    return parseFloat(t);
  },
  it = (t) => xn(typeof t == 'string' ? ht(t) : t),
  hd = (t) => Rn(typeof t == 'string' ? ht(t) : t),
  pd = (t) =>
    String(new TypeError(t).stack || t)
      .split(
        `
`,
      )
      .slice(0, 5)
      .filter((e) => !e.includes('stackTraceWarning')).join(`
`),
  md = { warn: console.warn },
  gd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function ao(t) {
  const e = t.getUTCFullYear(),
    r = t.getUTCMonth(),
    n = t.getUTCDay(),
    s = t.getUTCDate(),
    o = t.getUTCHours(),
    i = t.getUTCMinutes(),
    a = t.getUTCSeconds(),
    c = s < 10 ? `0${s}` : `${s}`,
    u = o < 10 ? `0${o}` : `${o}`,
    l = i < 10 ? `0${i}` : `${i}`,
    d = a < 10 ? `0${a}` : `${a}`;
  return `${gd[n]}, ${c} ${wr[r]} ${e} ${u}:${l}:${d} GMT`;
}
const yd = new RegExp(
    /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/,
  ),
  wd = (t) => {
    if (t == null) return;
    if (typeof t != 'string')
      throw new TypeError('RFC-3339 date-times must be expressed as strings');
    const e = yd.exec(t);
    if (!e) throw new TypeError('Invalid RFC-3339 date-time value');
    const [r, n, s, o, i, a, c, u, l] = e,
      d = it(ze(n)),
      f = ne(s, 'month', 1, 12),
      h = ne(o, 'day', 1, 31),
      p = Xe(d, f, h, { hours: i, minutes: a, seconds: c, fractionalMilliseconds: u });
    return (l.toUpperCase() != 'Z' && p.setTime(p.getTime() - kd(l)), p);
  },
  bd = new RegExp(
    /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
  ),
  Sd = new RegExp(
    /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
  ),
  Ed = new RegExp(
    /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/,
  ),
  Ad = (t) => {
    if (t == null) return;
    if (typeof t != 'string')
      throw new TypeError('RFC-7231 date-times must be expressed as strings');
    let e = bd.exec(t);
    if (e) {
      const [r, n, s, o, i, a, c, u] = e;
      return Xe(it(ze(o)), Ut(s), ne(n, 'day', 1, 31), {
        hours: i,
        minutes: a,
        seconds: c,
        fractionalMilliseconds: u,
      });
    }
    if (((e = Sd.exec(t)), e)) {
      const [r, n, s, o, i, a, c, u] = e;
      return Td(
        Xe(Rd(o), Ut(s), ne(n, 'day', 1, 31), {
          hours: i,
          minutes: a,
          seconds: c,
          fractionalMilliseconds: u,
        }),
      );
    }
    if (((e = Ed.exec(t)), e)) {
      const [r, n, s, o, i, a, c, u] = e;
      return Xe(it(ze(u)), Ut(n), ne(s.trimLeft(), 'day', 1, 31), {
        hours: o,
        minutes: i,
        seconds: a,
        fractionalMilliseconds: c,
      });
    }
    throw new TypeError('Invalid RFC-7231 date-time value');
  },
  xd = (t) => {
    if (t == null) return;
    let e;
    if (typeof t == 'number') e = t;
    else if (typeof t == 'string') e = ld(t);
    else if (typeof t == 'object' && t.tag === 1) e = t.value;
    else
      throw new TypeError(
        'Epoch timestamps must be expressed as floating point numbers or their string representation',
      );
    if (Number.isNaN(e) || e === 1 / 0 || e === -1 / 0)
      throw new TypeError('Epoch timestamps must be valid, non-Infinite, non-NaN numerics');
    return new Date(Math.round(e * 1e3));
  },
  Xe = (t, e, r, n) => {
    const s = e - 1;
    return (
      Pd(t, s, r),
      new Date(
        Date.UTC(
          t,
          s,
          r,
          ne(n.hours, 'hour', 0, 23),
          ne(n.minutes, 'minute', 0, 59),
          ne(n.seconds, 'seconds', 0, 60),
          $d(n.fractionalMilliseconds),
        ),
      )
    );
  },
  Rd = (t) => {
    const e = new Date().getUTCFullYear(),
      r = Math.floor(e / 100) * 100 + it(ze(t));
    return r < e ? r + 100 : r;
  },
  Cd = 50 * 365 * 24 * 60 * 60 * 1e3,
  Td = (t) =>
    t.getTime() - new Date().getTime() > Cd
      ? new Date(
          Date.UTC(
            t.getUTCFullYear() - 100,
            t.getUTCMonth(),
            t.getUTCDate(),
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
            t.getUTCMilliseconds(),
          ),
        )
      : t,
  Ut = (t) => {
    const e = wr.indexOf(t);
    if (e < 0) throw new TypeError(`Invalid month: ${t}`);
    return e + 1;
  },
  vd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Pd = (t, e, r) => {
    let n = vd[e];
    if ((e === 1 && _d(t) && (n = 29), r > n))
      throw new TypeError(`Invalid day for ${wr[e]} in ${t}: ${r}`);
  },
  _d = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0),
  ne = (t, e, r, n) => {
    const s = hd(ze(t));
    if (s < r || s > n) throw new TypeError(`${e} must be between ${r} and ${n}, inclusive`);
    return s;
  },
  $d = (t) => (t == null ? 0 : dd('0.' + t) * 1e3),
  kd = (t) => {
    const e = t[0];
    let r = 1;
    if (e == '+') r = 1;
    else if (e == '-') r = -1;
    else throw new TypeError(`Offset direction, ${e}, must be "+" or "-"`);
    const n = Number(t.substring(1, 3)),
      s = Number(t.substring(4, 6));
    return r * (n * 60 + s) * 60 * 1e3;
  },
  ze = (t) => {
    let e = 0;
    for (; e < t.length - 1 && t.charAt(e) === '0'; ) e++;
    return e === 0 ? t : t.slice(e);
  },
  Cn = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  T = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0')),
  br = () => {
    if (Cn) return Cn();
    const t = new Uint8Array(16);
    return (
      crypto.getRandomValues(t),
      (t[6] = (t[6] & 15) | 64),
      (t[8] = (t[8] & 63) | 128),
      T[t[0]] +
        T[t[1]] +
        T[t[2]] +
        T[t[3]] +
        '-' +
        T[t[4]] +
        T[t[5]] +
        '-' +
        T[t[6]] +
        T[t[7]] +
        '-' +
        T[t[8]] +
        T[t[9]] +
        '-' +
        T[t[10]] +
        T[t[11]] +
        T[t[12]] +
        T[t[13]] +
        T[t[14]] +
        T[t[15]]
    );
  },
  G = function (e) {
    return Object.assign(new String(e), {
      deserializeJSON() {
        return JSON.parse(String(e));
      },
      toString() {
        return String(e);
      },
      toJSON() {
        return String(e);
      },
    });
  };
G.from = (t) =>
  t && typeof t == 'object' && (t instanceof G || 'deserializeJSON' in t)
    ? t
    : typeof t == 'string' || Object.getPrototypeOf(t) === String.prototype
      ? G(String(t))
      : G(JSON.stringify(t));
G.fromObject = G.from;
function Dd(t) {
  return ((t.includes(',') || t.includes('"')) && (t = `"${t.replace(/"/g, '\\"')}"`), t);
}
const Sr = '(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?',
  Er = '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)',
  Ar = '(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?',
  co = '(\\d?\\d)',
  uo = '(\\d{4})',
  Id = new RegExp(
    /^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/,
  ),
  Md = new RegExp(`^${Sr}, ${co} ${Er} ${uo} ${Ar} GMT$`),
  Od = new RegExp(`^${Sr}, ${co}-${Er}-(\\d\\d) ${Ar} GMT$`),
  Bd = new RegExp(`^${Sr} ${Er} ( [1-9]|\\d\\d) ${Ar} ${uo}$`),
  Nd = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  Ud = (t) => {
    if (t == null) return;
    let e = NaN;
    if (typeof t == 'number') e = t;
    else if (typeof t == 'string') {
      if (!/^-?\d*\.?\d+$/.test(t))
        throw new TypeError('parseEpochTimestamp - numeric string invalid.');
      e = Number.parseFloat(t);
    } else typeof t == 'object' && t.tag === 1 && (e = t.value);
    if (isNaN(e) || Math.abs(e) === 1 / 0)
      throw new TypeError('Epoch timestamps must be valid finite numbers.');
    return new Date(Math.round(e * 1e3));
  },
  Ld = (t) => {
    if (t == null) return;
    if (typeof t != 'string') throw new TypeError('RFC3339 timestamps must be strings');
    const e = Id.exec(t);
    if (!e) throw new TypeError(`Invalid RFC3339 timestamp format ${t}`);
    const [, r, n, s, o, i, a, , c, u] = e;
    (Q(n, 1, 12), Q(s, 1, 31), Q(o, 0, 23), Q(i, 0, 59), Q(a, 0, 60));
    const l = new Date(
      Date.UTC(
        Number(r),
        Number(n) - 1,
        Number(s),
        Number(o),
        Number(i),
        Number(a),
        Number(c) ? Math.round(parseFloat(`0.${c}`) * 1e3) : 0,
      ),
    );
    if ((l.setUTCFullYear(Number(r)), u.toUpperCase() != 'Z')) {
      const [, d, f, h] = /([+-])(\d\d):(\d\d)/.exec(u) || [void 0, '+', 0, 0],
        p = d === '-' ? 1 : -1;
      l.setTime(l.getTime() + p * (Number(f) * 60 * 60 * 1e3 + Number(h) * 60 * 1e3));
    }
    return l;
  },
  Fd = (t) => {
    if (t == null) return;
    if (typeof t != 'string') throw new TypeError('RFC7231 timestamps must be strings.');
    let e, r, n, s, o, i, a, c;
    if (
      ((c = Md.exec(t))
        ? ([, e, r, n, s, o, i, a] = c)
        : (c = Od.exec(t))
          ? (([, e, r, n, s, o, i, a] = c), (n = (Number(n) + 1900).toString()))
          : (c = Bd.exec(t)) && ([, r, e, s, o, i, a, n] = c),
      n && i)
    ) {
      const u = Date.UTC(
        Number(n),
        Nd.indexOf(r),
        Number(e),
        Number(s),
        Number(o),
        Number(i),
        a ? Math.round(parseFloat(`0.${a}`) * 1e3) : 0,
      );
      (Q(e, 1, 31), Q(s, 0, 23), Q(o, 0, 59), Q(i, 0, 60));
      const l = new Date(u);
      return (l.setUTCFullYear(Number(n)), l);
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${t}.`);
  };
function Q(t, e, r) {
  const n = Number(t);
  if (n < e || n > r) throw new Error(`Value ${n} out of range [${e}, ${r}]`);
}
function zd(t, e, r) {
  if (!Number.isInteger(r))
    throw new Error('Invalid number of delimiters (' + r + ') for splitEvery.');
  const n = t.split(e),
    s = [];
  let o = '';
  for (let i = 0; i < n.length; i++)
    (o === '' ? (o = n[i]) : (o += e + n[i]), (i + 1) % r === 0 && (s.push(o), (o = '')));
  return (o !== '' && s.push(o), s);
}
const lo = (t) => {
    const e = t.length,
      r = [];
    let n = !1,
      s,
      o = 0;
    for (let i = 0; i < e; ++i) {
      const a = t[i];
      switch (a) {
        case '"':
          s !== '\\' && (n = !n);
          break;
        case ',':
          n || (r.push(t.slice(o, i)), (o = i + 1));
          break;
      }
      s = a;
    }
    return (
      r.push(t.slice(o)),
      r.map((i) => {
        i = i.trim();
        const a = i.length;
        return a < 2
          ? i
          : (i[0] === '"' && i[a - 1] === '"' && (i = i.slice(1, a - 1)), i.replace(/\\"/g, '"'));
      })
    );
  },
  Tn = /^-?\d*(\.\d+)?$/;
class z {
  string;
  type;
  constructor(e, r) {
    if (((this.string = e), (this.type = r), !Tn.test(e)))
      throw new Error(
        '@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".',
      );
  }
  toString() {
    return this.string;
  }
  static [Symbol.hasInstance](e) {
    if (!e || typeof e != 'object') return !1;
    const r = e;
    return z.prototype.isPrototypeOf(e) || (r.type === 'bigDecimal' && Tn.test(r.string));
  }
}
class pt {
  serdeContext;
  setSerdeContext(e) {
    this.serdeContext = e;
  }
}
class Hd extends pt {
  options;
  compositeErrorRegistry;
  constructor(e) {
    (super(), (this.options = e), (this.compositeErrorRegistry = D.for(e.defaultNamespace)));
    for (const r of e.errorTypeRegistries ?? []) this.compositeErrorRegistry.copyFrom(r);
  }
  getRequestType() {
    return P;
  }
  getResponseType() {
    return de;
  }
  setSerdeContext(e) {
    ((this.serdeContext = e),
      this.serializer.setSerdeContext(e),
      this.deserializer.setSerdeContext(e),
      this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(e));
  }
  updateServiceEndpoint(e, r) {
    if ('url' in r) {
      ((e.protocol = r.url.protocol),
        (e.hostname = r.url.hostname),
        (e.port = r.url.port ? Number(r.url.port) : void 0),
        (e.path = r.url.pathname),
        (e.fragment = r.url.hash || void 0),
        (e.username = r.url.username || void 0),
        (e.password = r.url.password || void 0),
        e.query || (e.query = {}));
      for (const [n, s] of r.url.searchParams.entries()) e.query[n] = s;
      if (r.headers) for (const [n, s] of Object.entries(r.headers)) e.headers[n] = s.join(', ');
      return e;
    } else {
      if (
        ((e.protocol = r.protocol),
        (e.hostname = r.hostname),
        (e.port = r.port ? Number(r.port) : void 0),
        (e.path = r.path),
        (e.query = { ...r.query }),
        r.headers)
      )
        for (const [n, s] of Object.entries(r.headers)) e.headers[n] = s;
      return e;
    }
  }
  setHostPrefix(e, r, n) {
    if (this.serdeContext?.disableHostPrefix) return;
    const s = E.of(r.input),
      o = ye(r.traits ?? {});
    if (o.endpoint) {
      let i = o.endpoint?.[0];
      if (typeof i == 'string') {
        const a = [...s.structIterator()].filter(([, c]) => c.getMergedTraits().hostLabel);
        for (const [c] of a) {
          const u = n[c];
          if (typeof u != 'string')
            throw new Error(`@smithy/core/schema - ${c} in input must be a string as hostLabel.`);
          i = i.replace(`{${c}}`, u);
        }
        e.hostname = i + e.hostname;
      }
    }
  }
  deserializeMetadata(e) {
    return {
      httpStatusCode: e.statusCode,
      requestId:
        e.headers['x-amzn-requestid'] ??
        e.headers['x-amzn-request-id'] ??
        e.headers['x-amz-request-id'],
      extendedRequestId: e.headers['x-amz-id-2'],
      cfId: e.headers['x-amz-cf-id'],
    };
  }
  async serializeEventStream({ eventStream: e, requestSchema: r, initialRequest: n }) {
    return (await this.loadEventStreamCapability()).serializeEventStream({
      eventStream: e,
      requestSchema: r,
      initialRequest: n,
    });
  }
  async deserializeEventStream({ response: e, responseSchema: r, initialResponseContainer: n }) {
    return (await this.loadEventStreamCapability()).deserializeEventStream({
      response: e,
      responseSchema: r,
      initialResponseContainer: n,
    });
  }
  async loadEventStreamCapability() {
    const { EventStreamSerde: e } = await lt(
      async () => {
        const { EventStreamSerde: r } = await import('./index-DFd57EDP.js');
        return { EventStreamSerde: r };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    );
    return new e({
      marshaller: this.getEventStreamMarshaller(),
      serializer: this.serializer,
      deserializer: this.deserializer,
      serdeContext: this.serdeContext,
      defaultContentType: this.getDefaultContentType(),
    });
  }
  getDefaultContentType() {
    throw new Error(
      `@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`,
    );
  }
  async deserializeHttpMessage(e, r, n, s, o) {
    return [];
  }
  getEventStreamMarshaller() {
    const e = this.serdeContext;
    if (!e.eventStreamMarshaller)
      throw new Error(
        '@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.',
      );
    return e.eventStreamMarshaller;
  }
}
class jd extends Hd {
  async serializeRequest(e, r, n) {
    const s = r && typeof r == 'object' ? r : {},
      o = this.serializer,
      i = {},
      a = {},
      c = await n.endpoint(),
      u = E.of(e?.input),
      l = [],
      d = [];
    let f = !1,
      h;
    const p = new P({
      protocol: '',
      hostname: '',
      port: void 0,
      path: '',
      fragment: void 0,
      query: i,
      headers: a,
      body: void 0,
    });
    if (c) {
      (this.updateServiceEndpoint(p, c), this.setHostPrefix(p, e, s));
      const g = ye(e.traits);
      if (g.http) {
        p.method = g.http[0];
        const [m, y] = g.http[1].split('?');
        p.path == '/' ? (p.path = m) : (p.path += m);
        const w = new URLSearchParams(y ?? '');
        Object.assign(i, Object.fromEntries(w));
      }
    }
    for (const [g, m] of u.structIterator()) {
      const y = m.getMergedTraits() ?? {},
        w = s[g];
      if (w == null && !m.isIdempotencyToken()) {
        if (y.httpLabel && (p.path.includes(`{${g}+}`) || p.path.includes(`{${g}}`)))
          throw new Error(`No value provided for input HTTP label: ${g}.`);
        continue;
      }
      if (y.httpPayload)
        m.isStreaming()
          ? m.isStructSchema()
            ? s[g] && (h = await this.serializeEventStream({ eventStream: s[g], requestSchema: u }))
            : (h = w)
          : (o.write(m, w), (h = o.flush()));
      else if (y.httpLabel) {
        o.write(m, w);
        const S = o.flush();
        p.path.includes(`{${g}+}`)
          ? (p.path = p.path.replace(`{${g}+}`, S.split('/').map(En).join('/')))
          : p.path.includes(`{${g}}`) && (p.path = p.path.replace(`{${g}}`, En(S)));
      } else if (y.httpHeader) (o.write(m, w), (a[y.httpHeader.toLowerCase()] = String(o.flush())));
      else if (typeof y.httpPrefixHeaders == 'string')
        for (const [S, b] of Object.entries(w)) {
          const C = y.httpPrefixHeaders + S;
          (o.write([m.getValueSchema(), { httpHeader: C }], b), (a[C.toLowerCase()] = o.flush()));
        }
      else
        y.httpQuery || y.httpQueryParams
          ? this.serializeQuery(m, w, i)
          : ((f = !0), l.push(g), d.push(m));
    }
    if (f && s) {
      const [g, m] = (u.getName(!0) ?? '#Unknown').split('#'),
        y = u.getSchema()[6],
        w = [3, g, m, u.getMergedTraits(), l, d, void 0];
      (y ? (w[6] = y) : w.pop(), o.write(w, s), (h = o.flush()));
    }
    return ((p.headers = a), (p.query = i), (p.body = h), p);
  }
  serializeQuery(e, r, n) {
    const s = this.serializer,
      o = e.getMergedTraits();
    if (o.httpQueryParams) {
      for (const [i, a] of Object.entries(r))
        if (!(i in n)) {
          const c = e.getValueSchema();
          (Object.assign(c.getMergedTraits(), { ...o, httpQuery: i, httpQueryParams: void 0 }),
            this.serializeQuery(c, a, n));
        }
      return;
    }
    if (e.isListSchema()) {
      const i = !!e.getMergedTraits().sparse,
        a = [];
      for (const c of r) {
        s.write([e.getValueSchema(), o], c);
        const u = s.flush();
        (i || u !== void 0) && a.push(u);
      }
      n[o.httpQuery] = a;
    } else (s.write([e, o], r), (n[o.httpQuery] = s.flush()));
  }
  async deserializeResponse(e, r, n) {
    const s = this.deserializer,
      o = E.of(e.output),
      i = {};
    if (n.statusCode >= 300) {
      const c = await $e(n.body, r);
      throw (
        c.byteLength > 0 && Object.assign(i, await s.read(15, c)),
        await this.handleError(e, r, n, i, this.deserializeMetadata(n)),
        new Error('@smithy/core/protocols - HTTP Protocol error handler failed to throw.')
      );
    }
    for (const c in n.headers) {
      const u = n.headers[c];
      (delete n.headers[c], (n.headers[c.toLowerCase()] = u));
    }
    const a = await this.deserializeHttpMessage(o, r, n, i);
    if (a.length) {
      const c = await $e(n.body, r);
      if (c.byteLength > 0) {
        const u = await s.read(o, c);
        for (const l of a) u[l] != null && (i[l] = u[l]);
      }
    } else a.discardResponseBody && (await $e(n.body, r));
    return ((i.$metadata = this.deserializeMetadata(n)), i);
  }
  async deserializeHttpMessage(e, r, n, s, o) {
    let i;
    s instanceof Set ? (i = o) : (i = s);
    let a = !0;
    const c = this.deserializer,
      u = E.of(e),
      l = [];
    for (const [d, f] of u.structIterator()) {
      const h = f.getMemberTraits();
      if (h.httpPayload) {
        if (((a = !1), f.isStreaming()))
          f.isStructSchema()
            ? (i[d] = await this.deserializeEventStream({ response: n, responseSchema: u }))
            : (i[d] = Yl(n.body));
        else if (n.body) {
          const g = await $e(n.body, r);
          g.byteLength > 0 && (i[d] = await c.read(f, g));
        }
      } else if (h.httpHeader) {
        const p = String(h.httpHeader).toLowerCase(),
          g = n.headers[p];
        if (g != null)
          if (f.isListSchema()) {
            const m = f.getValueSchema();
            m.getMergedTraits().httpHeader = p;
            let y;
            m.isTimestampSchema() && m.getSchema() === 4 ? (y = zd(g, ',', 2)) : (y = lo(g));
            const w = [];
            for (const S of y) w.push(await c.read(m, S.trim()));
            i[d] = w;
          } else i[d] = await c.read(f, g);
      } else if (h.httpPrefixHeaders !== void 0) {
        i[d] = {};
        for (const [p, g] of Object.entries(n.headers))
          if (p.startsWith(h.httpPrefixHeaders)) {
            const m = f.getValueSchema();
            ((m.getMergedTraits().httpHeader = p),
              (i[d][p.slice(h.httpPrefixHeaders.length)] = await c.read(m, g)));
          }
      } else h.httpResponseCode ? (i[d] = n.statusCode) : l.push(d);
    }
    return ((l.discardResponseBody = a), l);
  }
}
function mt(t, e) {
  if (
    e.timestampFormat.useTrait &&
    t.isTimestampSchema() &&
    (t.getSchema() === 5 || t.getSchema() === 6 || t.getSchema() === 7)
  )
    return t.getSchema();
  const { httpLabel: r, httpPrefixHeaders: n, httpHeader: s, httpQuery: o } = t.getMergedTraits();
  return (
    (e.httpBindings ? (typeof n == 'string' || s ? 6 : o || r ? 5 : void 0) : void 0) ??
    e.timestampFormat.default
  );
}
class Vd extends pt {
  settings;
  constructor(e) {
    (super(), (this.settings = e));
  }
  read(e, r) {
    const n = E.of(e);
    if (n.isListSchema()) return lo(r).map((s) => this.read(n.getValueSchema(), s));
    if (n.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? fe)(r);
    if (n.isTimestampSchema())
      switch (mt(n, this.settings)) {
        case 5:
          return Ld(r);
        case 6:
          return Fd(r);
        case 7:
          return Ud(r);
        default:
          return (
            console.warn('Missing timestamp format, parsing value with Date constructor:', r),
            new Date(r)
          );
      }
    if (n.isStringSchema()) {
      const s = n.getMergedTraits().mediaType;
      let o = r;
      if (s)
        return (
          n.getMergedTraits().httpHeader && (o = this.base64ToUtf8(o)),
          (s === 'application/json' || s.endsWith('+json')) && (o = G.from(o)),
          o
        );
    }
    return n.isNumericSchema()
      ? Number(r)
      : n.isBigIntegerSchema()
        ? BigInt(r)
        : n.isBigDecimalSchema()
          ? new z(r, 'bigDecimal')
          : n.isBooleanSchema()
            ? String(r).toLowerCase() === 'true'
            : r;
  }
  base64ToUtf8(e) {
    return (this.serdeContext?.utf8Encoder ?? Ce)((this.serdeContext?.base64Decoder ?? fe)(e));
  }
}
class Wd extends pt {
  codecDeserializer;
  stringDeserializer;
  constructor(e, r) {
    (super(), (this.codecDeserializer = e), (this.stringDeserializer = new Vd(r)));
  }
  setSerdeContext(e) {
    (this.stringDeserializer.setSerdeContext(e),
      this.codecDeserializer.setSerdeContext(e),
      (this.serdeContext = e));
  }
  read(e, r) {
    const n = E.of(e),
      s = n.getMergedTraits(),
      o = this.serdeContext?.utf8Encoder ?? Ce;
    if (s.httpHeader || s.httpResponseCode) return this.stringDeserializer.read(n, o(r));
    if (s.httpPayload) {
      if (n.isBlobSchema()) {
        const i = this.serdeContext?.utf8Decoder ?? he;
        return typeof r == 'string' ? i(r) : r;
      } else if (n.isStringSchema()) return 'byteLength' in r ? o(r) : r;
    }
    return this.codecDeserializer.read(n, r);
  }
}
class qd extends pt {
  settings;
  stringBuffer = '';
  constructor(e) {
    (super(), (this.settings = e));
  }
  write(e, r) {
    const n = E.of(e);
    switch (typeof r) {
      case 'object':
        if (r === null) {
          this.stringBuffer = 'null';
          return;
        }
        if (n.isTimestampSchema()) {
          if (!(r instanceof Date))
            throw new Error(
              `@smithy/core/protocols - received non-Date value ${r} when schema expected Date in ${n.getName(!0)}`,
            );
          switch (mt(n, this.settings)) {
            case 5:
              this.stringBuffer = r.toISOString().replace('.000Z', 'Z');
              break;
            case 6:
              this.stringBuffer = ao(r);
              break;
            case 7:
              this.stringBuffer = String(r.getTime() / 1e3);
              break;
            default:
              (console.warn('Missing timestamp format, using epoch seconds', r),
                (this.stringBuffer = String(r.getTime() / 1e3)));
          }
          return;
        }
        if (n.isBlobSchema() && 'byteLength' in r) {
          this.stringBuffer = (this.serdeContext?.base64Encoder ?? pe)(r);
          return;
        }
        if (n.isListSchema() && Array.isArray(r)) {
          let i = '';
          for (const a of r) {
            this.write([n.getValueSchema(), n.getMergedTraits()], a);
            const c = this.flush(),
              u = n.getValueSchema().isTimestampSchema() ? c : Dd(c);
            (i !== '' && (i += ', '), (i += u));
          }
          this.stringBuffer = i;
          return;
        }
        this.stringBuffer = JSON.stringify(r, null, 2);
        break;
      case 'string':
        const s = n.getMergedTraits().mediaType;
        let o = r;
        if (
          s &&
          ((s === 'application/json' || s.endsWith('+json')) && (o = G.from(o)),
          n.getMergedTraits().httpHeader)
        ) {
          this.stringBuffer = (this.serdeContext?.base64Encoder ?? pe)(o.toString());
          return;
        }
        this.stringBuffer = r;
        break;
      default:
        n.isIdempotencyToken() ? (this.stringBuffer = br()) : (this.stringBuffer = String(r));
    }
  }
  flush() {
    const e = this.stringBuffer;
    return ((this.stringBuffer = ''), e);
  }
}
class Gd {
  codecSerializer;
  stringSerializer;
  buffer;
  constructor(e, r, n = new qd(r)) {
    ((this.codecSerializer = e), (this.stringSerializer = n));
  }
  setSerdeContext(e) {
    (this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e));
  }
  write(e, r) {
    const n = E.of(e),
      s = n.getMergedTraits();
    if (s.httpHeader || s.httpLabel || s.httpQuery) {
      (this.stringSerializer.write(n, r), (this.buffer = this.stringSerializer.flush()));
      return;
    }
    return this.codecSerializer.write(n, r);
  }
  flush() {
    if (this.buffer !== void 0) {
      const e = this.buffer;
      return ((this.buffer = void 0), e);
    }
    return this.codecSerializer.flush();
  }
}
function Jd(t, e, r) {
  (t.__smithy_context
    ? t.__smithy_context.features || (t.__smithy_context.features = {})
    : (t.__smithy_context = { features: {} }),
    (t.__smithy_context.features[e] = r));
}
class Kd {
  authSchemes = new Map();
  constructor(e) {
    for (const [r, n] of Object.entries(e)) n !== void 0 && this.authSchemes.set(r, n);
  }
  getIdentityProvider(e) {
    return this.authSchemes.get(e);
  }
}
class Qd {
  async sign(e, r, n) {
    const s = P.clone(e);
    if (!r.token)
      throw new Error('request could not be signed with `token` since the `token` is not defined');
    return ((s.headers.Authorization = `Bearer ${r.token}`), s);
  }
}
const Xd = (t) =>
    function (r) {
      return xr(r) && r.expiration.getTime() - Date.now() < t;
    },
  Yd = 3e5,
  fo = Xd(Yd),
  xr = (t) => t.expiration !== void 0,
  ho = (t, e, r) => {
    if (t === void 0) return;
    const n = typeof t != 'function' ? async () => Promise.resolve(t) : t;
    let s,
      o,
      i,
      a = !1;
    const c = async (u) => {
      o || (o = n(u));
      try {
        ((s = await o), (i = !0), (a = !1));
      } finally {
        o = void 0;
      }
      return s;
    };
    return e === void 0
      ? async (u) => ((!i || u?.forceRefresh) && (s = await c(u)), s)
      : async (u) => (
          (!i || u?.forceRefresh) && (s = await c(u)),
          a ? s : r(s) ? (e(s) && (await c(u)), s) : ((a = !0), s)
        );
  },
  Zd = void 0;
function ef(t) {
  return t === void 0 ? !0 : typeof t == 'string' && t.length <= 50;
}
function tf(t) {
  const e = Ie(t.userAgentAppId ?? Zd),
    { customUserAgent: r } = t;
  return Object.assign(t, {
    customUserAgent: typeof r == 'string' ? [[r]] : r,
    userAgentAppId: async () => {
      const n = await e();
      if (!ef(n)) {
        const s = t.logger?.constructor?.name === 'NoOpLogger' || !t.logger ? console : t.logger;
        typeof n != 'string'
          ? s?.warn('userAgentAppId must be a string or undefined.')
          : n.length > 50 &&
            s?.warn('The provided userAgentAppId exceeds the maximum length of 50 characters.');
      }
      return n;
    },
  });
}
class rf {
  capacity;
  data = new Map();
  parameters = [];
  constructor({ size: e, params: r }) {
    ((this.capacity = e ?? 50), r && (this.parameters = r));
  }
  get(e, r) {
    const n = this.hash(e);
    if (n === !1) return r();
    if (!this.data.has(n)) {
      if (this.data.size > this.capacity + 10) {
        const s = this.data.keys();
        let o = 0;
        for (;;) {
          const { value: i, done: a } = s.next();
          if ((this.data.delete(i), a || ++o > 10)) break;
        }
      }
      this.data.set(n, r());
    }
    return this.data.get(n);
  }
  size() {
    return this.data.size;
  }
  hash(e) {
    let r = '';
    const { parameters: n } = this;
    if (n.length === 0) return !1;
    for (const s of n) {
      const o = String(e[s] ?? '');
      if (o.includes('|;')) return !1;
      r += o + '|;';
    }
    return r;
  }
}
const nf = new RegExp(
    '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$',
  ),
  po = (t) => nf.test(t) || (t.startsWith('[') && t.endsWith(']')),
  sf = new RegExp('^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$'),
  gt = (t, e = !1) => {
    if (!e) return sf.test(t);
    const r = t.split('.');
    for (const n of r) if (!gt(n)) return !1;
    return !0;
  },
  at = {},
  He = 'endpoints';
function oe(t) {
  return typeof t != 'object' || t == null
    ? t
    : 'ref' in t
      ? `$${oe(t.ref)}`
      : 'fn' in t
        ? `${t.fn}(${(t.argv || []).map(oe).join(', ')})`
        : JSON.stringify(t, null, 2);
}
class I extends Error {
  constructor(e) {
    (super(e), (this.name = 'EndpointError'));
  }
}
const of = (t, e) => t === e,
  af = (t) => {
    const e = t.split('.'),
      r = [];
    for (const n of e) {
      const s = n.indexOf('[');
      if (s !== -1) {
        if (n.indexOf(']') !== n.length - 1) throw new I(`Path: '${t}' does not end with ']'`);
        const o = n.slice(s + 1, -1);
        if (Number.isNaN(parseInt(o))) throw new I(`Invalid array index: '${o}' in path: '${t}'`);
        (s !== 0 && r.push(n.slice(0, s)), r.push(o));
      } else r.push(n);
    }
    return r;
  },
  mo = (t, e) =>
    af(e).reduce((r, n) => {
      if (typeof r != 'object')
        throw new I(`Index '${n}' in '${e}' not found in '${JSON.stringify(t)}'`);
      return Array.isArray(r) ? r[parseInt(n)] : r[n];
    }, t),
  cf = (t) => t != null,
  uf = (t) => !t,
  Lt = { [Ne.HTTP]: 80, [Ne.HTTPS]: 443 },
  lf = (t) => {
    const e = (() => {
      try {
        if (t instanceof URL) return t;
        if (typeof t == 'object' && 'hostname' in t) {
          const { hostname: f, port: h, protocol: p = '', path: g = '', query: m = {} } = t,
            y = new URL(`${p}//${f}${h ? `:${h}` : ''}${g}`);
          return (
            (y.search = Object.entries(m)
              .map(([w, S]) => `${w}=${S}`)
              .join('&')),
            y
          );
        }
        return new URL(t);
      } catch {
        return null;
      }
    })();
    if (!e) return (console.error(`Unable to parse ${JSON.stringify(t)} as a whatwg URL.`), null);
    const r = e.href,
      { host: n, hostname: s, pathname: o, protocol: i, search: a } = e;
    if (a) return null;
    const c = i.slice(0, -1);
    if (!Object.values(Ne).includes(c)) return null;
    const u = po(s),
      l = r.includes(`${n}:${Lt[c]}`) || (typeof t == 'string' && t.includes(`${n}:${Lt[c]}`)),
      d = `${n}${l ? `:${Lt[c]}` : ''}`;
    return {
      scheme: c,
      authority: d,
      path: o,
      normalizedPath: o.endsWith('/') ? o : `${o}/`,
      isIp: u,
    };
  },
  df = (t, e) => t === e,
  ff = (t, e, r, n) =>
    e >= r || t.length < r || /[^\u0000-\u007f]/.test(t)
      ? null
      : n
        ? t.substring(t.length - r, t.length - e)
        : t.substring(e, r),
  hf = (t) =>
    encodeURIComponent(t).replace(
      /[!*'()]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
    ),
  pf = {
    booleanEquals: of,
    getAttr: mo,
    isSet: cf,
    isValidHostLabel: gt,
    not: uf,
    parseURL: lf,
    stringEquals: df,
    substring: ff,
    uriEncode: hf,
  },
  go = (t, e) => {
    const r = [],
      n = { ...e.endpointParams, ...e.referenceRecord };
    let s = 0;
    for (; s < t.length; ) {
      const o = t.indexOf('{', s);
      if (o === -1) {
        r.push(t.slice(s));
        break;
      }
      r.push(t.slice(s, o));
      const i = t.indexOf('}', o);
      if (i === -1) {
        r.push(t.slice(o));
        break;
      }
      t[o + 1] === '{' && t[i + 1] === '}' && (r.push(t.slice(o + 1, i)), (s = i + 2));
      const a = t.substring(o + 1, i);
      if (a.includes('#')) {
        const [c, u] = a.split('#');
        r.push(mo(n[c], u));
      } else r.push(n[a]);
      s = i + 1;
    }
    return r.join('');
  },
  mf = ({ ref: t }, e) => ({ ...e.endpointParams, ...e.referenceRecord })[t],
  yt = (t, e, r) => {
    if (typeof t == 'string') return go(t, r);
    if (t.fn) return wo.callFunction(t, r);
    if (t.ref) return mf(t, r);
    throw new I(`'${e}': ${String(t)} is not a string, function or reference.`);
  },
  yo = ({ fn: t, argv: e }, r) => {
    const n = e.map((o) =>
        ['boolean', 'number'].includes(typeof o) ? o : wo.evaluateExpression(o, 'arg', r),
      ),
      s = t.split('.');
    return s[0] in at && s[1] != null ? at[s[0]][s[1]](...n) : pf[t](...n);
  },
  wo = { evaluateExpression: yt, callFunction: yo },
  gf = ({ assign: t, ...e }, r) => {
    if (t && t in r.referenceRecord) throw new I(`'${t}' is already defined in Reference Record.`);
    const n = yo(e, r);
    return (
      r.logger?.debug?.(`${He} evaluateCondition: ${oe(e)} = ${oe(n)}`),
      { result: n === '' ? !0 : !!n, ...(t != null && { toAssign: { name: t, value: n } }) }
    );
  },
  Rr = (t = [], e) => {
    const r = {};
    for (const n of t) {
      const { result: s, toAssign: o } = gf(n, {
        ...e,
        referenceRecord: { ...e.referenceRecord, ...r },
      });
      if (!s) return { result: s };
      o && ((r[o.name] = o.value), e.logger?.debug?.(`${He} assign: ${o.name} := ${oe(o.value)}`));
    }
    return { result: !0, referenceRecord: r };
  },
  yf = (t, e) =>
    Object.entries(t).reduce(
      (r, [n, s]) => ({
        ...r,
        [n]: s.map((o) => {
          const i = yt(o, 'Header value entry', e);
          if (typeof i != 'string') throw new I(`Header '${n}' value '${i}' is not a string`);
          return i;
        }),
      }),
      {},
    ),
  bo = (t, e) =>
    Object.entries(t).reduce((r, [n, s]) => ({ ...r, [n]: Eo.getEndpointProperty(s, e) }), {}),
  So = (t, e) => {
    if (Array.isArray(t)) return t.map((r) => So(r, e));
    switch (typeof t) {
      case 'string':
        return go(t, e);
      case 'object':
        if (t === null) throw new I(`Unexpected endpoint property: ${t}`);
        return Eo.getEndpointProperties(t, e);
      case 'boolean':
        return t;
      default:
        throw new I(`Unexpected endpoint property type: ${typeof t}`);
    }
  },
  Eo = { getEndpointProperty: So, getEndpointProperties: bo },
  wf = (t, e) => {
    const r = yt(t, 'Endpoint URL', e);
    if (typeof r == 'string')
      try {
        return new URL(r);
      } catch (n) {
        throw (console.error(`Failed to construct URL with ${r}`, n), n);
      }
    throw new I(`Endpoint URL must be a string, got ${typeof r}`);
  },
  bf = (t, e) => {
    const { conditions: r, endpoint: n } = t,
      { result: s, referenceRecord: o } = Rr(r, e);
    if (!s) return;
    const i = { ...e, referenceRecord: { ...e.referenceRecord, ...o } },
      { url: a, properties: c, headers: u } = n;
    return (
      e.logger?.debug?.(`${He} Resolving endpoint from template: ${oe(n)}`),
      {
        ...(u != null && { headers: yf(u, i) }),
        ...(c != null && { properties: bo(c, i) }),
        url: wf(a, i),
      }
    );
  },
  Sf = (t, e) => {
    const { conditions: r, error: n } = t,
      { result: s, referenceRecord: o } = Rr(r, e);
    if (s) throw new I(yt(n, 'Error', { ...e, referenceRecord: { ...e.referenceRecord, ...o } }));
  },
  Ao = (t, e) => {
    for (const r of t)
      if (r.type === 'endpoint') {
        const n = bf(r, e);
        if (n) return n;
      } else if (r.type === 'error') Sf(r, e);
      else if (r.type === 'tree') {
        const n = xo.evaluateTreeRule(r, e);
        if (n) return n;
      } else throw new I(`Unknown endpoint rule: ${r}`);
    throw new I('Rules evaluation failed');
  },
  Ef = (t, e) => {
    const { conditions: r, rules: n } = t,
      { result: s, referenceRecord: o } = Rr(r, e);
    if (s) return xo.evaluateRules(n, { ...e, referenceRecord: { ...e.referenceRecord, ...o } });
  },
  xo = { evaluateRules: Ao, evaluateTreeRule: Ef },
  Af = (t, e) => {
    const { endpointParams: r, logger: n } = e,
      { parameters: s, rules: o } = t;
    e.logger?.debug?.(`${He} Initial EndpointParams: ${oe(r)}`);
    const i = Object.entries(s)
      .filter(([, u]) => u.default != null)
      .map(([u, l]) => [u, l.default]);
    if (i.length > 0) for (const [u, l] of i) r[u] = r[u] ?? l;
    const a = Object.entries(s)
      .filter(([, u]) => u.required)
      .map(([u]) => u);
    for (const u of a) if (r[u] == null) throw new I(`Missing required parameter: '${u}'`);
    const c = Ao(o, { endpointParams: r, logger: n, referenceRecord: {} });
    return (e.logger?.debug?.(`${He} Resolved endpoint: ${oe(c)}`), c);
  },
  Ro = (t, e = !1) => {
    if (e) {
      for (const r of t.split('.')) if (!Ro(r)) return !1;
      return !0;
    }
    return !(!gt(t) || t.length < 3 || t.length > 63 || t !== t.toLowerCase() || po(t));
  },
  vn = ':',
  xf = '/',
  Rf = (t) => {
    const e = t.split(vn);
    if (e.length < 6) return null;
    const [r, n, s, o, i, ...a] = e;
    if (r !== 'arn' || n === '' || s === '' || a.join(vn) === '') return null;
    const c = a.map((u) => u.split(xf)).flat();
    return { partition: n, service: s, region: o, accountId: i, resourceId: c };
  },
  Cf = [
    {
      id: 'aws',
      outputs: {
        dnsSuffix: 'amazonaws.com',
        dualStackDnsSuffix: 'api.aws',
        implicitGlobalRegion: 'us-east-1',
        name: 'aws',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$',
      regions: {
        'af-south-1': { description: 'Africa (Cape Town)' },
        'ap-east-1': { description: 'Asia Pacific (Hong Kong)' },
        'ap-east-2': { description: 'Asia Pacific (Taipei)' },
        'ap-northeast-1': { description: 'Asia Pacific (Tokyo)' },
        'ap-northeast-2': { description: 'Asia Pacific (Seoul)' },
        'ap-northeast-3': { description: 'Asia Pacific (Osaka)' },
        'ap-south-1': { description: 'Asia Pacific (Mumbai)' },
        'ap-south-2': { description: 'Asia Pacific (Hyderabad)' },
        'ap-southeast-1': { description: 'Asia Pacific (Singapore)' },
        'ap-southeast-2': { description: 'Asia Pacific (Sydney)' },
        'ap-southeast-3': { description: 'Asia Pacific (Jakarta)' },
        'ap-southeast-4': { description: 'Asia Pacific (Melbourne)' },
        'ap-southeast-5': { description: 'Asia Pacific (Malaysia)' },
        'ap-southeast-6': { description: 'Asia Pacific (New Zealand)' },
        'ap-southeast-7': { description: 'Asia Pacific (Thailand)' },
        'aws-global': { description: 'aws global region' },
        'ca-central-1': { description: 'Canada (Central)' },
        'ca-west-1': { description: 'Canada West (Calgary)' },
        'eu-central-1': { description: 'Europe (Frankfurt)' },
        'eu-central-2': { description: 'Europe (Zurich)' },
        'eu-north-1': { description: 'Europe (Stockholm)' },
        'eu-south-1': { description: 'Europe (Milan)' },
        'eu-south-2': { description: 'Europe (Spain)' },
        'eu-west-1': { description: 'Europe (Ireland)' },
        'eu-west-2': { description: 'Europe (London)' },
        'eu-west-3': { description: 'Europe (Paris)' },
        'il-central-1': { description: 'Israel (Tel Aviv)' },
        'me-central-1': { description: 'Middle East (UAE)' },
        'me-south-1': { description: 'Middle East (Bahrain)' },
        'mx-central-1': { description: 'Mexico (Central)' },
        'sa-east-1': { description: 'South America (Sao Paulo)' },
        'us-east-1': { description: 'US East (N. Virginia)' },
        'us-east-2': { description: 'US East (Ohio)' },
        'us-west-1': { description: 'US West (N. California)' },
        'us-west-2': { description: 'US West (Oregon)' },
      },
    },
    {
      id: 'aws-cn',
      outputs: {
        dnsSuffix: 'amazonaws.com.cn',
        dualStackDnsSuffix: 'api.amazonwebservices.com.cn',
        implicitGlobalRegion: 'cn-northwest-1',
        name: 'aws-cn',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^cn\\-\\w+\\-\\d+$',
      regions: {
        'aws-cn-global': { description: 'aws-cn global region' },
        'cn-north-1': { description: 'China (Beijing)' },
        'cn-northwest-1': { description: 'China (Ningxia)' },
      },
    },
    {
      id: 'aws-eusc',
      outputs: {
        dnsSuffix: 'amazonaws.eu',
        dualStackDnsSuffix: 'api.amazonwebservices.eu',
        implicitGlobalRegion: 'eusc-de-east-1',
        name: 'aws-eusc',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^eusc\\-(de)\\-\\w+\\-\\d+$',
      regions: { 'eusc-de-east-1': { description: 'AWS European Sovereign Cloud (Germany)' } },
    },
    {
      id: 'aws-iso',
      outputs: {
        dnsSuffix: 'c2s.ic.gov',
        dualStackDnsSuffix: 'api.aws.ic.gov',
        implicitGlobalRegion: 'us-iso-east-1',
        name: 'aws-iso',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^us\\-iso\\-\\w+\\-\\d+$',
      regions: {
        'aws-iso-global': { description: 'aws-iso global region' },
        'us-iso-east-1': { description: 'US ISO East' },
        'us-iso-west-1': { description: 'US ISO WEST' },
      },
    },
    {
      id: 'aws-iso-b',
      outputs: {
        dnsSuffix: 'sc2s.sgov.gov',
        dualStackDnsSuffix: 'api.aws.scloud',
        implicitGlobalRegion: 'us-isob-east-1',
        name: 'aws-iso-b',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^us\\-isob\\-\\w+\\-\\d+$',
      regions: {
        'aws-iso-b-global': { description: 'aws-iso-b global region' },
        'us-isob-east-1': { description: 'US ISOB East (Ohio)' },
        'us-isob-west-1': { description: 'US ISOB West' },
      },
    },
    {
      id: 'aws-iso-e',
      outputs: {
        dnsSuffix: 'cloud.adc-e.uk',
        dualStackDnsSuffix: 'api.cloud-aws.adc-e.uk',
        implicitGlobalRegion: 'eu-isoe-west-1',
        name: 'aws-iso-e',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^eu\\-isoe\\-\\w+\\-\\d+$',
      regions: {
        'aws-iso-e-global': { description: 'aws-iso-e global region' },
        'eu-isoe-west-1': { description: 'EU ISOE West' },
      },
    },
    {
      id: 'aws-iso-f',
      outputs: {
        dnsSuffix: 'csp.hci.ic.gov',
        dualStackDnsSuffix: 'api.aws.hci.ic.gov',
        implicitGlobalRegion: 'us-isof-south-1',
        name: 'aws-iso-f',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^us\\-isof\\-\\w+\\-\\d+$',
      regions: {
        'aws-iso-f-global': { description: 'aws-iso-f global region' },
        'us-isof-east-1': { description: 'US ISOF EAST' },
        'us-isof-south-1': { description: 'US ISOF SOUTH' },
      },
    },
    {
      id: 'aws-us-gov',
      outputs: {
        dnsSuffix: 'amazonaws.com',
        dualStackDnsSuffix: 'api.aws',
        implicitGlobalRegion: 'us-gov-west-1',
        name: 'aws-us-gov',
        supportsDualStack: !0,
        supportsFIPS: !0,
      },
      regionRegex: '^us\\-gov\\-\\w+\\-\\d+$',
      regions: {
        'aws-us-gov-global': { description: 'aws-us-gov global region' },
        'us-gov-east-1': { description: 'AWS GovCloud (US-East)' },
        'us-gov-west-1': { description: 'AWS GovCloud (US-West)' },
      },
    },
  ],
  Tf = { partitions: Cf };
let vf = Tf;
const Pf = (t) => {
    const { partitions: e } = vf;
    for (const n of e) {
      const { regions: s, outputs: o } = n;
      for (const [i, a] of Object.entries(s)) if (i === t) return { ...o, ...a };
    }
    for (const n of e) {
      const { regionRegex: s, outputs: o } = n;
      if (new RegExp(s).test(t)) return { ...o };
    }
    const r = e.find((n) => n.id === 'aws');
    if (!r)
      throw new Error(
        "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.",
      );
    return { ...r.outputs };
  },
  Co = { isVirtualHostableS3Bucket: Ro, parseArn: Rf, partition: Pf };
at.aws = Co;
function _f(t, e, r) {
  return (t.$source || (t.$source = {}), (t.$source[e] = r), t);
}
function K(t, e, r) {
  (t.__aws_sdk_context
    ? t.__aws_sdk_context.features || (t.__aws_sdk_context.features = {})
    : (t.__aws_sdk_context = { features: {} }),
    (t.__aws_sdk_context.features[e] = r));
}
var ie;
(function (t) {
  ((t.STANDARD = 'standard'), (t.ADAPTIVE = 'adaptive'));
})(ie || (ie = {}));
const ct = 3,
  $f = ie.STANDARD,
  kf = [
    'BandwidthLimitExceeded',
    'EC2ThrottledException',
    'LimitExceededException',
    'PriorRequestNotComplete',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException',
    'TransactionInProgressException',
  ],
  Df = ['TimeoutError', 'RequestTimeout', 'RequestTimeoutException'],
  If = [500, 502, 503, 504],
  Mf = ['ECONNRESET', 'ECONNREFUSED', 'EPIPE', 'ETIMEDOUT'],
  Of = ['EHOSTUNREACH', 'ENETUNREACH', 'ENOTFOUND'],
  Bf = (t) => t?.$retryable !== void 0,
  Nf = (t) => t.$metadata?.clockSkewCorrected,
  Uf = (t) => {
    const e = new Set([
      'Failed to fetch',
      'NetworkError when attempting to fetch resource',
      'The Internet connection appears to be offline',
      'Load failed',
      'Network request failed',
    ]);
    return t && t instanceof TypeError ? e.has(t.message) : !1;
  },
  To = (t) =>
    t.$metadata?.httpStatusCode === 429 || kf.includes(t.name) || t.$retryable?.throttling == !0,
  Cr = (t, e = 0) =>
    Bf(t) ||
    Nf(t) ||
    Df.includes(t.name) ||
    Mf.includes(t?.code || '') ||
    Of.includes(t?.code || '') ||
    If.includes(t.$metadata?.httpStatusCode || 0) ||
    Uf(t) ||
    (t.cause !== void 0 && e <= 10 && Cr(t.cause, e + 1)),
  Lf = (t) => {
    if (t.$metadata?.httpStatusCode !== void 0) {
      const e = t.$metadata.httpStatusCode;
      return 500 <= e && e <= 599 && !Cr(t);
    }
    return !1;
  };
class Tr {
  static setTimeoutFn = setTimeout;
  beta;
  minCapacity;
  minFillRate;
  scaleConstant;
  smooth;
  currentCapacity = 0;
  enabled = !1;
  lastMaxRate = 0;
  measuredTxRate = 0;
  requestCount = 0;
  fillRate;
  lastThrottleTime;
  lastTimestamp = 0;
  lastTxRateBucket;
  maxCapacity;
  timeWindow = 0;
  constructor(e) {
    ((this.beta = e?.beta ?? 0.7),
      (this.minCapacity = e?.minCapacity ?? 1),
      (this.minFillRate = e?.minFillRate ?? 0.5),
      (this.scaleConstant = e?.scaleConstant ?? 0.4),
      (this.smooth = e?.smooth ?? 0.8));
    const r = this.getCurrentTimeInSeconds();
    ((this.lastThrottleTime = r),
      (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
      (this.fillRate = this.minFillRate),
      (this.maxCapacity = this.minCapacity));
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(e) {
    if (this.enabled) {
      if ((this.refillTokenBucket(), e > this.currentCapacity)) {
        const r = ((e - this.currentCapacity) / this.fillRate) * 1e3;
        await new Promise((n) => Tr.setTimeoutFn(n, r));
      }
      this.currentCapacity = this.currentCapacity - e;
    }
  }
  refillTokenBucket() {
    const e = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = e;
      return;
    }
    const r = (e - this.lastTimestamp) * this.fillRate;
    ((this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + r)),
      (this.lastTimestamp = e));
  }
  updateClientSendingRate(e) {
    let r;
    if ((this.updateMeasuredRate(), To(e))) {
      const s = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
      ((this.lastMaxRate = s),
        this.calculateTimeWindow(),
        (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
        (r = this.cubicThrottle(s)),
        this.enableTokenBucket());
    } else (this.calculateTimeWindow(), (r = this.cubicSuccess(this.getCurrentTimeInSeconds())));
    const n = Math.min(r, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(n);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(
      Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3),
    );
  }
  cubicThrottle(e) {
    return this.getPrecise(e * this.beta);
  }
  cubicSuccess(e) {
    return this.getPrecise(
      this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) +
        this.lastMaxRate,
    );
  }
  enableTokenBucket() {
    this.enabled = !0;
  }
  updateTokenBucketRate(e) {
    (this.refillTokenBucket(),
      (this.fillRate = Math.max(e, this.minFillRate)),
      (this.maxCapacity = Math.max(e, this.minCapacity)),
      (this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)));
  }
  updateMeasuredRate() {
    const e = this.getCurrentTimeInSeconds(),
      r = Math.floor(e * 2) / 2;
    if ((this.requestCount++, r > this.lastTxRateBucket)) {
      const n = this.requestCount / (r - this.lastTxRateBucket);
      ((this.measuredTxRate = this.getPrecise(
        n * this.smooth + this.measuredTxRate * (1 - this.smooth),
      )),
        (this.requestCount = 0),
        (this.lastTxRateBucket = r));
    }
  }
  getPrecise(e) {
    return parseFloat(e.toFixed(8));
  }
}
const nr = 100,
  vo = 20 * 1e3,
  Ff = 500,
  Pn = 500,
  zf = 5,
  Hf = 10,
  jf = 1,
  Vf = 'amz-sdk-invocation-id',
  Wf = 'amz-sdk-request',
  qf = () => {
    let t = nr;
    return {
      computeNextBackoffDelay: (n) => Math.floor(Math.min(vo, Math.random() * 2 ** n * t)),
      setDelayBase: (n) => {
        t = n;
      },
    };
  },
  _n = ({ retryDelay: t, retryCount: e, retryCost: r }) => ({
    getRetryCount: () => e,
    getRetryDelay: () => Math.min(vo, t),
    getRetryCost: () => r,
  });
class Po {
  maxAttempts;
  mode = ie.STANDARD;
  capacity = Pn;
  retryBackoffStrategy = qf();
  maxAttemptsProvider;
  constructor(e) {
    ((this.maxAttempts = e),
      (this.maxAttemptsProvider = typeof e == 'function' ? e : async () => e));
  }
  async acquireInitialRetryToken(e) {
    return _n({ retryDelay: nr, retryCount: 0 });
  }
  async refreshRetryTokenForRetry(e, r) {
    const n = await this.getMaxAttempts();
    if (this.shouldRetry(e, r, n)) {
      const s = r.errorType;
      this.retryBackoffStrategy.setDelayBase(s === 'THROTTLING' ? Ff : nr);
      const o = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),
        i = r.retryAfterHint ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, o) : o,
        a = this.getCapacityCost(s);
      return (
        (this.capacity -= a),
        _n({ retryDelay: i, retryCount: e.getRetryCount() + 1, retryCost: a })
      );
    }
    throw new Error('No retry token available');
  }
  recordSuccess(e) {
    this.capacity = Math.max(Pn, this.capacity + (e.getRetryCost() ?? jf));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch {
      return (console.warn(`Max attempts provider could not resolve. Using default of ${ct}`), ct);
    }
  }
  shouldRetry(e, r, n) {
    return (
      e.getRetryCount() + 1 < n &&
      this.capacity >= this.getCapacityCost(r.errorType) &&
      this.isRetryableError(r.errorType)
    );
  }
  getCapacityCost(e) {
    return e === 'TRANSIENT' ? Hf : zf;
  }
  isRetryableError(e) {
    return e === 'THROTTLING' || e === 'TRANSIENT';
  }
}
class Gf {
  maxAttemptsProvider;
  rateLimiter;
  standardRetryStrategy;
  mode = ie.ADAPTIVE;
  constructor(e, r) {
    this.maxAttemptsProvider = e;
    const { rateLimiter: n } = r ?? {};
    ((this.rateLimiter = n ?? new Tr()), (this.standardRetryStrategy = new Po(e)));
  }
  async acquireInitialRetryToken(e) {
    return (
      await this.rateLimiter.getSendToken(),
      this.standardRetryStrategy.acquireInitialRetryToken(e)
    );
  }
  async refreshRetryTokenForRetry(e, r) {
    return (
      this.rateLimiter.updateClientSendingRate(r),
      this.standardRetryStrategy.refreshRetryTokenForRetry(e, r)
    );
  }
  recordSuccess(e) {
    (this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e));
  }
}
const Jf = /\d{12}\.ddb/;
async function Kf(t, e, r) {
  if (
    (r.request?.headers?.['smithy-protocol'] === 'rpc-v2-cbor' && K(t, 'PROTOCOL_RPC_V2_CBOR', 'M'),
    typeof e.retryStrategy == 'function')
  ) {
    const o = await e.retryStrategy();
    if (typeof o.mode == 'string')
      switch (o.mode) {
        case ie.ADAPTIVE:
          K(t, 'RETRY_MODE_ADAPTIVE', 'F');
          break;
        case ie.STANDARD:
          K(t, 'RETRY_MODE_STANDARD', 'E');
          break;
      }
  }
  if (typeof e.accountIdEndpointMode == 'function') {
    const o = t.endpointV2;
    switch (
      (String(o?.url?.hostname).match(Jf) && K(t, 'ACCOUNT_ID_ENDPOINT', 'O'),
      await e.accountIdEndpointMode?.())
    ) {
      case 'disabled':
        K(t, 'ACCOUNT_ID_MODE_DISABLED', 'Q');
        break;
      case 'preferred':
        K(t, 'ACCOUNT_ID_MODE_PREFERRED', 'P');
        break;
      case 'required':
        K(t, 'ACCOUNT_ID_MODE_REQUIRED', 'R');
        break;
    }
  }
  const s = t.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (s?.$source) {
    const o = s;
    o.accountId && K(t, 'RESOLVED_ACCOUNT_ID', 'T');
    for (const [i, a] of Object.entries(o.$source ?? {})) K(t, i, a);
  }
}
const $n = 'user-agent',
  Ft = 'x-amz-user-agent',
  kn = ' ',
  zt = '/',
  Qf = /[^!$%&'*+\-.^_`|~\w]/g,
  Xf = /[^!$%&'*+\-.^_`|~\w#]/g,
  Dn = '-',
  Yf = 1024;
function Zf(t) {
  let e = '';
  for (const r in t) {
    const n = t[r];
    if (e.length + n.length + 1 <= Yf) {
      e.length ? (e += ',' + n) : (e += n);
      continue;
    }
    break;
  }
  return e;
}
const eh = (t) => (e, r) => async (n) => {
    const { request: s } = n;
    if (!P.isInstance(s)) return e(n);
    const { headers: o } = s,
      i = r?.userAgent?.map(Ke) || [],
      a = (await t.defaultUserAgentProvider()).map(Ke);
    await Kf(r, t, n);
    const c = r;
    a.push(
      `m/${Zf(Object.assign({}, r.__smithy_context?.features, c.__aws_sdk_context?.features))}`,
    );
    const u = t?.customUserAgent?.map(Ke) || [],
      l = await t.userAgentAppId();
    l && a.push(Ke(['app', `${l}`]));
    const d = [].concat([...a, ...i, ...u]).join(kn),
      f = [...a.filter((h) => h.startsWith('aws-sdk-')), ...u].join(kn);
    return (
      t.runtime !== 'browser'
        ? (f && (o[Ft] = o[Ft] ? `${o[$n]} ${f}` : f), (o[$n] = d))
        : (o[Ft] = d),
      e({ ...n, request: s })
    );
  },
  Ke = (t) => {
    const e = t[0]
        .split(zt)
        .map((i) => i.replace(Qf, Dn))
        .join(zt),
      r = t[1]?.replace(Xf, Dn),
      n = e.indexOf(zt),
      s = e.substring(0, n);
    let o = e.substring(n + 1);
    return (
      s === 'api' && (o = o.toLowerCase()),
      [s, o, r]
        .filter((i) => i && i.length > 0)
        .reduce((i, a, c) => {
          switch (c) {
            case 0:
              return a;
            case 1:
              return `${i}/${a}`;
            default:
              return `${i}#${a}`;
          }
        }, '')
    );
  },
  th = {
    name: 'getUserAgentMiddleware',
    step: 'build',
    priority: 'low',
    tags: ['SET_USER_AGENT', 'USER_AGENT'],
    override: !0,
  },
  rh = (t) => ({
    applyToStack: (e) => {
      e.add(eh(t), th);
    },
  });
function nh(t) {
  const { port: e, query: r } = t;
  let { protocol: n, path: s, hostname: o } = t;
  (n && n.slice(-1) !== ':' && (n += ':'),
    e && (o += `:${e}`),
    s && s.charAt(0) !== '/' && (s = `/${s}`));
  let i = r ? ro(r) : '';
  i && i[0] !== '?' && (i = `?${i}`);
  let a = '';
  if (t.username != null || t.password != null) {
    const u = t.username ?? '',
      l = t.password ?? '';
    a = `${u}:${l}@`;
  }
  let c = '';
  return (t.fragment && (c = `#${t.fragment}`), `${n}//${a}${o}${s}${i}${c}`);
}
const sh = (t) => new TextEncoder().encode(t);
var oh =
  typeof Ct < 'u' && Ct.from
    ? function (t) {
        return Ct.from(t, 'utf8');
      }
    : sh;
function je(t) {
  return t instanceof Uint8Array
    ? t
    : typeof t == 'string'
      ? oh(t)
      : ArrayBuffer.isView(t)
        ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        : new Uint8Array(t);
}
function sr(t) {
  return typeof t == 'string' ? t.length === 0 : t.byteLength === 0;
}
function ih(t) {
  if (!Uint32Array.from) {
    for (var e = new Uint32Array(t.length), r = 0; r < t.length; ) ((e[r] = t[r]), (r += 1));
    return e;
  }
  return Uint32Array.from(t);
}
var _o = (function () {
    function t() {
      this.checksum = 4294967295;
    }
    return (
      (t.prototype.update = function (e) {
        var r, n;
        try {
          for (var s = Ri(e), o = s.next(); !o.done; o = s.next()) {
            var i = o.value;
            this.checksum = (this.checksum >>> 8) ^ ch[(this.checksum ^ i) & 255];
          }
        } catch (a) {
          r = { error: a };
        } finally {
          try {
            o && !o.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        return this;
      }),
      (t.prototype.digest = function () {
        return (this.checksum ^ 4294967295) >>> 0;
      }),
      t
    );
  })(),
  ah = [
    0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274,
    2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548,
    1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
    1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096,
    1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722,
    1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
    1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974,
    1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192,
    31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
    251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444,
    476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902,
    314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
    984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506,
    879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948,
    654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
    702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384,
    2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930,
    2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
    2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526,
    2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888,
    2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
    2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542,
    2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
    3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634,
    3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012,
    4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
    4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896,
    3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818,
    3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
    3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614,
    3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117,
  ],
  ch = ih(ah);
let Ht = class $o {
  bytes;
  constructor(e) {
    if (((this.bytes = e), e.byteLength !== 8))
      throw new Error('Int64 buffers must be exactly 8 bytes');
  }
  static fromNumber(e) {
    if (e > 9223372036854776e3 || e < -9223372036854776e3)
      throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    const r = new Uint8Array(8);
    for (let n = 7, s = Math.abs(Math.round(e)); n > -1 && s > 0; n--, s /= 256) r[n] = s;
    return (e < 0 && In(r), new $o(r));
  }
  valueOf() {
    const e = this.bytes.slice(0),
      r = e[0] & 128;
    return (r && In(e), parseInt(k(e), 16) * (r ? -1 : 1));
  }
  toString() {
    return String(this.valueOf());
  }
};
function In(t) {
  for (let e = 0; e < 8; e++) t[e] ^= 255;
  for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--);
}
class uh {
  toUtf8;
  fromUtf8;
  constructor(e, r) {
    ((this.toUtf8 = e), (this.fromUtf8 = r));
  }
  format(e) {
    const r = [];
    for (const o of Object.keys(e)) {
      const i = this.fromUtf8(o);
      r.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(e[o]));
    }
    const n = new Uint8Array(r.reduce((o, i) => o + i.byteLength, 0));
    let s = 0;
    for (const o of r) (n.set(o, s), (s += o.byteLength));
    return n;
  }
  formatHeaderValue(e) {
    switch (e.type) {
      case 'boolean':
        return Uint8Array.from([e.value ? 0 : 1]);
      case 'byte':
        return Uint8Array.from([2, e.value]);
      case 'short':
        const r = new DataView(new ArrayBuffer(3));
        return (r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer));
      case 'integer':
        const n = new DataView(new ArrayBuffer(5));
        return (n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer));
      case 'long':
        const s = new Uint8Array(9);
        return ((s[0] = 5), s.set(e.value.bytes, 1), s);
      case 'binary':
        const o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        (o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1));
        const i = new Uint8Array(o.buffer);
        return (i.set(e.value, 3), i);
      case 'string':
        const a = this.fromUtf8(e.value),
          c = new DataView(new ArrayBuffer(3 + a.byteLength));
        (c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1));
        const u = new Uint8Array(c.buffer);
        return (u.set(a, 3), u);
      case 'timestamp':
        const l = new Uint8Array(9);
        return ((l[0] = 8), l.set(Ht.fromNumber(e.value.valueOf()).bytes, 1), l);
      case 'uuid':
        if (!wh.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
        const d = new Uint8Array(17);
        return ((d[0] = 9), d.set(yr(e.value.replace(/\-/g, '')), 1), d);
    }
  }
  parse(e) {
    const r = {};
    let n = 0;
    for (; n < e.byteLength; ) {
      const s = e.getUint8(n++),
        o = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, s));
      switch (((n += s), e.getUint8(n++))) {
        case 0:
          r[o] = { type: On, value: !0 };
          break;
        case 1:
          r[o] = { type: On, value: !1 };
          break;
        case 2:
          r[o] = { type: lh, value: e.getInt8(n++) };
          break;
        case 3:
          ((r[o] = { type: dh, value: e.getInt16(n, !1) }), (n += 2));
          break;
        case 4:
          ((r[o] = { type: fh, value: e.getInt32(n, !1) }), (n += 4));
          break;
        case 5:
          ((r[o] = { type: hh, value: new Ht(new Uint8Array(e.buffer, e.byteOffset + n, 8)) }),
            (n += 8));
          break;
        case 6:
          const i = e.getUint16(n, !1);
          ((n += 2),
            (r[o] = { type: ph, value: new Uint8Array(e.buffer, e.byteOffset + n, i) }),
            (n += i));
          break;
        case 7:
          const a = e.getUint16(n, !1);
          ((n += 2),
            (r[o] = {
              type: mh,
              value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, a)),
            }),
            (n += a));
          break;
        case 8:
          ((r[o] = {
            type: gh,
            value: new Date(new Ht(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf()),
          }),
            (n += 8));
          break;
        case 9:
          const c = new Uint8Array(e.buffer, e.byteOffset + n, 16);
          ((n += 16),
            (r[o] = {
              type: yh,
              value: `${k(c.subarray(0, 4))}-${k(c.subarray(4, 6))}-${k(c.subarray(6, 8))}-${k(c.subarray(8, 10))}-${k(c.subarray(10))}`,
            }));
          break;
        default:
          throw new Error('Unrecognized header type tag');
      }
    }
    return r;
  }
}
var Mn;
(function (t) {
  ((t[(t.boolTrue = 0)] = 'boolTrue'),
    (t[(t.boolFalse = 1)] = 'boolFalse'),
    (t[(t.byte = 2)] = 'byte'),
    (t[(t.short = 3)] = 'short'),
    (t[(t.integer = 4)] = 'integer'),
    (t[(t.long = 5)] = 'long'),
    (t[(t.byteArray = 6)] = 'byteArray'),
    (t[(t.string = 7)] = 'string'),
    (t[(t.timestamp = 8)] = 'timestamp'),
    (t[(t.uuid = 9)] = 'uuid'));
})(Mn || (Mn = {}));
const On = 'boolean',
  lh = 'byte',
  dh = 'short',
  fh = 'integer',
  hh = 'long',
  ph = 'binary',
  mh = 'string',
  gh = 'timestamp',
  yh = 'uuid',
  wh = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  ko = 4,
  re = ko * 2,
  ce = 4,
  bh = re + ce * 2;
function Sh({ byteLength: t, byteOffset: e, buffer: r }) {
  if (t < bh)
    throw new Error('Provided message too short to accommodate event stream message overhead');
  const n = new DataView(r, e, t),
    s = n.getUint32(0, !1);
  if (t !== s) throw new Error('Reported message length does not match received message length');
  const o = n.getUint32(ko, !1),
    i = n.getUint32(re, !1),
    a = n.getUint32(t - ce, !1),
    c = new _o().update(new Uint8Array(r, e, re));
  if (i !== c.digest())
    throw new Error(
      `The prelude checksum specified in the message (${i}) does not match the calculated CRC32 checksum (${c.digest()})`,
    );
  if ((c.update(new Uint8Array(r, e + re, t - (re + ce))), a !== c.digest()))
    throw new Error(
      `The message checksum (${c.digest()}) did not match the expected value of ${a}`,
    );
  return {
    headers: new DataView(r, e + re + ce, o),
    body: new Uint8Array(r, e + re + ce + o, s - o - (re + ce + ce)),
  };
}
class Do {
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
  constructor(e, r) {
    ((this.headerMarshaller = new uh(e, r)), (this.messageBuffer = []), (this.isEndOfStream = !1));
  }
  feed(e) {
    this.messageBuffer.push(this.decode(e));
  }
  endOfStream() {
    this.isEndOfStream = !0;
  }
  getMessage() {
    const e = this.messageBuffer.pop(),
      r = this.isEndOfStream;
    return {
      getMessage() {
        return e;
      },
      isEndOfStream() {
        return r;
      },
    };
  }
  getAvailableMessages() {
    const e = this.messageBuffer;
    this.messageBuffer = [];
    const r = this.isEndOfStream;
    return {
      getMessages() {
        return e;
      },
      isEndOfStream() {
        return r;
      },
    };
  }
  encode({ headers: e, body: r }) {
    const n = this.headerMarshaller.format(e),
      s = n.byteLength + r.byteLength + 16,
      o = new Uint8Array(s),
      i = new DataView(o.buffer, o.byteOffset, o.byteLength),
      a = new _o();
    return (
      i.setUint32(0, s, !1),
      i.setUint32(4, n.byteLength, !1),
      i.setUint32(8, a.update(o.subarray(0, 8)).digest(), !1),
      o.set(n, 12),
      o.set(r, n.byteLength + 12),
      i.setUint32(s - 4, a.update(o.subarray(8, s - 4)).digest(), !1),
      o
    );
  }
  decode(e) {
    const { headers: r, body: n } = Sh(e);
    return { headers: this.headerMarshaller.parse(r), body: n };
  }
  formatHeaders(e) {
    return this.headerMarshaller.format(e);
  }
}
class Eh {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const e of this.options.inputStream) yield this.options.decoder.decode(e);
  }
}
class Ah {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const e of this.options.messageStream) yield this.options.encoder.encode(e);
    this.options.includeEndFrame && (yield new Uint8Array(0));
  }
}
class xh {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const e of this.options.messageStream) {
      const r = await this.options.deserializer(e);
      r !== void 0 && (yield r);
    }
  }
}
class Rh {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const e of this.options.inputStream) yield this.options.serializer(e);
  }
}
function Ch(t) {
  let e = 0,
    r = 0,
    n = null,
    s = null;
  const o = (a) => {
      if (typeof a != 'number')
        throw new Error('Attempted to allocate an event message where size was not a number: ' + a);
      ((e = a), (r = 4), (n = new Uint8Array(a)), new DataView(n.buffer).setUint32(0, a, !1));
    },
    i = async function* () {
      const a = t[Symbol.asyncIterator]();
      for (;;) {
        const { value: c, done: u } = await a.next();
        if (u) {
          if (e)
            if (e === r) yield n;
            else throw new Error('Truncated event message received.');
          else return;
          return;
        }
        const l = c.length;
        let d = 0;
        for (; d < l; ) {
          if (!n) {
            const h = l - d;
            s || (s = new Uint8Array(4));
            const p = Math.min(4 - r, h);
            if ((s.set(c.slice(d, d + p), r), (r += p), (d += p), r < 4)) break;
            (o(new DataView(s.buffer).getUint32(0, !1)), (s = null));
          }
          const f = Math.min(e - r, l - d);
          (n.set(c.slice(d, d + f), r),
            (r += f),
            (d += f),
            e && e === r && (yield n, (n = null), (e = 0), (r = 0)));
        }
      }
    };
  return { [Symbol.asyncIterator]: i };
}
function Th(t, e) {
  return async function (r) {
    const { value: n } = r.headers[':message-type'];
    if (n === 'error') {
      const s = new Error(r.headers[':error-message'].value || 'UnknownError');
      throw ((s.name = r.headers[':error-code'].value), s);
    } else if (n === 'exception') {
      const s = r.headers[':exception-type'].value,
        o = { [s]: r },
        i = await t(o);
      if (i.$unknown) {
        const a = new Error(e(r.body));
        throw ((a.name = s), a);
      }
      throw i[s];
    } else if (n === 'event') {
      const s = { [r.headers[':event-type'].value]: r },
        o = await t(s);
      return o.$unknown ? void 0 : o;
    } else throw Error(`Unrecognizable event type: ${r.headers[':event-type'].value}`);
  };
}
let vh = class {
  eventStreamCodec;
  utfEncoder;
  constructor({ utf8Encoder: e, utf8Decoder: r }) {
    ((this.eventStreamCodec = new Do(e, r)), (this.utfEncoder = e));
  }
  deserialize(e, r) {
    const n = Ch(e);
    return new xh({
      messageStream: new Eh({ inputStream: n, decoder: this.eventStreamCodec }),
      deserializer: Th(r, this.utfEncoder),
    });
  }
  serialize(e, r) {
    return new Ah({
      messageStream: new Rh({ inputStream: e, serializer: r }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0,
    });
  }
};
const Io = (t) => ({
    [Symbol.asyncIterator]: async function* () {
      const e = t.getReader();
      try {
        for (;;) {
          const { done: r, value: n } = await e.read();
          if (r) return;
          yield n;
        }
      } finally {
        e.releaseLock();
      }
    },
  }),
  Mo = (t) => {
    const e = t[Symbol.asyncIterator]();
    return new ReadableStream({
      async pull(r) {
        const { done: n, value: s } = await e.next();
        if (n) return r.close();
        r.enqueue(s);
      },
    });
  };
class Ph {
  universalMarshaller;
  constructor({ utf8Encoder: e, utf8Decoder: r }) {
    this.universalMarshaller = new vh({ utf8Decoder: r, utf8Encoder: e });
  }
  deserialize(e, r) {
    const n = _h(e) ? Io(e) : e;
    return this.universalMarshaller.deserialize(n, r);
  }
  serialize(e, r) {
    const n = this.universalMarshaller.serialize(e, r);
    return typeof ReadableStream == 'function' ? Mo(n) : n;
  }
}
const _h = (t) => typeof ReadableStream == 'function' && t instanceof ReadableStream,
  $h = (t) => new Ph(t),
  Oo = (t) => t.protocol === 'ws:' || t.protocol === 'wss:',
  kh = 3e3;
class vr {
  metadata = { handlerProtocol: 'websocket/h1.1' };
  config = {};
  configPromise;
  httpHandler;
  sockets = {};
  static create(e, r = new Fe()) {
    return typeof e?.handle == 'function' ? e : new vr(e, r);
  }
  constructor(e, r = new Fe()) {
    this.httpHandler = r;
    const n = (s) => ((this.config = { ...(s ?? {}) }), this.config);
    typeof e == 'function'
      ? ((this.config = {}), (this.configPromise = e().then((s) => n(s))))
      : (this.configPromise = Promise.resolve(n(e)));
  }
  destroy() {
    for (const [e, r] of Object.entries(this.sockets)) {
      for (const n of r) n.close(1e3, 'Socket closed through destroy() call');
      delete this.sockets[e];
    }
  }
  async handle(e) {
    this.config = await this.configPromise;
    const { logger: r } = this.config;
    if (!Oo(e))
      return (
        r?.debug?.(`@aws-sdk - ws fetching ${e.protocol}${e.hostname}${e.path}`),
        this.httpHandler.handle(e)
      );
    const n = nh(e);
    r?.debug?.(`@aws-sdk - ws connecting ${n.split('?')[0]}`);
    const s = new WebSocket(n);
    (this.sockets[n] || (this.sockets[n] = []),
      this.sockets[n].push(s),
      (s.binaryType = 'arraybuffer'));
    const { connectionTimeout: o = kh } = this.config;
    await this.waitForReady(s, o);
    const { body: i } = e,
      a = Dh(i),
      c = this.connect(s, a),
      u = Ih(c);
    return { response: new de({ statusCode: 200, body: u }) };
  }
  updateHttpClientConfig(e, r) {
    this.configPromise = this.configPromise.then((n) => ((n[e] = r), n));
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
  removeNotUsableSockets(e) {
    this.sockets[e] = (this.sockets[e] ?? []).filter(
      (r) => ![WebSocket.CLOSING, WebSocket.CLOSED].includes(r.readyState),
    );
  }
  waitForReady(e, r) {
    return new Promise((n, s) => {
      const o = setTimeout(() => {
        (this.removeNotUsableSockets(e.url),
          s({ $metadata: { httpStatusCode: 500, websocketSynthetic500Error: !0 } }));
      }, r);
      e.onopen = () => {
        (clearTimeout(o), n());
      };
    });
  }
  connect(e, r) {
    const n = [];
    let s = null,
      o = null;
    const i = (u) => {
      s
        ? (u.error ? o(u.error) : s({ done: u.done, value: u.value }), (s = null), (o = null))
        : n.push(u);
    };
    ((e.onmessage = (u) => {
      const { data: l } = u;
      i(typeof l == 'string' ? { done: !1, value: fe(l) } : { done: !1, value: new Uint8Array(l) });
    }),
      (e.onerror = (u) => {
        (e.close(), i({ done: !0, error: u }));
      }),
      (e.onclose = () => {
        (this.removeNotUsableSockets(e.url), i({ done: !0 }));
      }));
    const a = {
      [Symbol.asyncIterator]: () => ({
        async next() {
          if (n.length > 0) {
            const u = n.shift();
            if (u.error) throw u.error;
            return { done: u.done, value: u.value };
          }
          return new Promise((u, l) => {
            ((s = u), (o = l));
          });
        },
      }),
    };
    return (
      (async () => {
        try {
          for await (const u of r) {
            if (e.readyState >= WebSocket.CLOSING) break;
            e.send(u);
          }
        } catch (u) {
          i({ done: !0, error: u });
        } finally {
          e.close(1e3);
        }
      })(),
      a
    );
  }
}
const Dh = (t) =>
    t[Symbol.asyncIterator]
      ? t
      : Mh(t)
        ? Io(t)
        : {
            [Symbol.asyncIterator]: async function* () {
              yield t;
            },
          },
  Ih = (t) => (typeof ReadableStream == 'function' ? Mo(t) : t),
  Mh = (t) => typeof ReadableStream == 'function' && t instanceof ReadableStream;
class Oh {
  signer;
  constructor(e) {
    this.signer = e.signer;
  }
  presign(e, r = {}) {
    return this.signer.presign(e, r);
  }
  async sign(e, r) {
    return P.isInstance(e) && Oo(e)
      ? {
          ...(await this.signer.presign(
            { ...e, body: '' },
            {
              ...r,
              expiresIn: 60,
              unsignableHeaders: new Set(Object.keys(e.headers).filter((s) => s !== 'host')),
            },
          )),
          body: e.body,
        }
      : this.signer.sign(e, r);
  }
  signMessage(e, r) {
    return this.signer.signMessage(e, r);
  }
}
const Bh = (t) => {
    const { signer: e } = t;
    return Object.assign(t, {
      signer: async (r) => {
        const n = await e(r);
        if (Nh(n)) return new Oh({ signer: n });
        throw new Error(
          'Expected WebsocketSignatureV4 signer, please check the client constructor.',
        );
      },
    });
  },
  Nh = (t) => !!t;
class Uh extends TransformStream {
  constructor(e, r, n, s) {
    let o = e;
    super({
      start() {},
      async transform(i, a) {
        try {
          const c = new Date(Date.now() + (await s())),
            u = { ':date': { type: 'timestamp', value: c } },
            l = await r.sign(
              { message: { body: i, headers: u }, priorSignature: o },
              { signingDate: c },
            );
          o = l.signature;
          const d = n.encode({
            headers: { ...u, ':chunk-signature': { type: 'binary', value: yr(l.signature) } },
            body: i,
          });
          a.enqueue(d);
        } catch (c) {
          a.error(c);
        }
      },
    });
  }
}
class Lh {
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  constructor(e) {
    ((this.messageSigner = e.messageSigner),
      (this.eventStreamCodec = new Do(e.utf8Encoder, e.utf8Decoder)),
      (this.systemClockOffsetProvider = async () => e.systemClockOffset ?? 0));
  }
  async handle(e, r, n = {}) {
    const s = r.request,
      { body: o, headers: i, query: a } = s;
    if (!(o instanceof ReadableStream))
      throw new Error('Eventstream payload must be a ReadableStream.');
    const c = new TransformStream();
    s.body = c.readable;
    let l =
      ((i?.authorization ?? '').match(/Signature=(\w+)$/) ?? [])[1] ??
      (a && a['X-Amz-Signature']) ??
      '';
    n.__staticSignature && (l = '');
    const d = new Uh(
      l,
      await this.messageSigner(),
      this.eventStreamCodec,
      this.systemClockOffsetProvider,
    );
    o.pipeThrough(d).pipeThrough(c);
    let f;
    try {
      f = await e(r);
    } catch (h) {
      const p = o.cancel?.();
      throw (p instanceof Promise && p.catch(() => {}), h);
    }
    return f;
  }
}
const Fh = (t) => new Lh(t),
  zh = !1,
  Hh = !1,
  Bn = new Set(),
  jh = (t, e = gt) => {
    if (!Bn.has(t) && !e(t))
      if (t === '*')
        console.warn(
          '@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.',
        );
      else throw new Error(`Region not accepted: region="${t}" is not a valid hostname component.`);
    else Bn.add(t);
  },
  Bo = (t) => typeof t == 'string' && (t.startsWith('fips-') || t.endsWith('-fips')),
  Vh = (t) =>
    Bo(t)
      ? ['fips-aws-global', 'aws-fips'].includes(t)
        ? 'us-east-1'
        : t.replace(/fips-(dkr-|prod-)?|-fips/, '')
      : t,
  Wh = (t) => {
    const { region: e, useFipsEndpoint: r } = t;
    if (!e) throw new Error('Region is missing');
    return Object.assign(t, {
      region: async () => {
        const n = typeof e == 'function' ? await e() : e,
          s = Vh(n);
        return (jh(s), s);
      },
      useFipsEndpoint: async () => {
        const n = typeof e == 'string' ? e : await e();
        return Bo(n) ? !0 : typeof r != 'function' ? Promise.resolve(!!r) : r();
      },
    });
  },
  qh = (t) => Object.assign(t, { eventStreamMarshaller: t.eventStreamSerdeProvider(t) }),
  Nn = 'content-length';
function Gh(t) {
  return (e) => async (r) => {
    const n = r.request;
    if (P.isInstance(n)) {
      const { body: s, headers: o } = n;
      if (
        s &&
        Object.keys(o)
          .map((i) => i.toLowerCase())
          .indexOf(Nn) === -1
      )
        try {
          const i = t(s);
          n.headers = { ...n.headers, [Nn]: String(i) };
        } catch {}
    }
    return e({ ...r, request: n });
  };
}
const Jh = {
    step: 'build',
    tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
    name: 'contentLengthMiddleware',
    override: !0,
  },
  Kh = (t) => ({
    applyToStack: (e) => {
      e.add(Gh(t.bodyLengthChecker), Jh);
    },
  }),
  Qh = async (t) => {
    const e = t?.Bucket || '';
    if (
      (typeof t.Bucket == 'string' &&
        (t.Bucket = e
          .replace(/#/g, encodeURIComponent('#'))
          .replace(/\?/g, encodeURIComponent('?'))),
      tp(e))
    ) {
      if (t.ForcePathStyle === !0)
        throw new Error('Path-style addressing cannot be used with ARN buckets');
    } else
      (!ep(e) ||
        (e.indexOf('.') !== -1 && !String(t.Endpoint).startsWith('http:')) ||
        e.toLowerCase() !== e ||
        e.length < 3) &&
        (t.ForcePathStyle = !0);
    return (
      t.DisableMultiRegionAccessPoints &&
        ((t.disableMultiRegionAccessPoints = !0), (t.DisableMRAP = !0)),
      t
    );
  },
  Xh = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
  Yh = /(\d+\.){3}\d+/,
  Zh = /\.\./,
  ep = (t) => Xh.test(t) && !Yh.test(t) && !Zh.test(t),
  tp = (t) => {
    const [e, r, n, , , s] = t.split(':'),
      o = e === 'arn' && t.split(':').length >= 6,
      i = !!(o && r && n && s);
    if (o && !i) throw new Error(`Invalid ARN: ${t} was an invalid ARN.`);
    return i;
  },
  rp = (t, e, r, n = !1) => {
    const s = async () => {
      let o;
      return (
        n ? (o = r.clientContextParams?.[t] ?? r[t] ?? r[e]) : (o = r[t] ?? r[e]),
        typeof o == 'function' ? o() : o
      );
    };
    return t === 'credentialScope' || e === 'CredentialScope'
      ? async () => {
          const o = typeof r.credentials == 'function' ? await r.credentials() : r.credentials;
          return o?.credentialScope ?? o?.CredentialScope;
        }
      : t === 'accountId' || e === 'AccountId'
        ? async () => {
            const o = typeof r.credentials == 'function' ? await r.credentials() : r.credentials;
            return o?.accountId ?? o?.AccountId;
          }
        : t === 'endpoint' || e === 'endpoint'
          ? async () => {
              if (r.isCustomEndpoint === !1) return;
              const o = await s();
              if (o && typeof o == 'object') {
                if ('url' in o) return o.url.href;
                if ('hostname' in o) {
                  const { protocol: i, hostname: a, port: c, path: u } = o;
                  return `${i}//${a}${c ? ':' + c : ''}${u}`;
                }
              }
              return o;
            }
          : s;
  },
  No = async (t) => {},
  Uo = (t) => {
    if (typeof t == 'object') {
      if ('url' in t) {
        const e = Ae(t.url);
        if (t.headers) {
          e.headers = {};
          for (const [r, n] of Object.entries(t.headers)) e.headers[r.toLowerCase()] = n.join(', ');
        }
        return e;
      }
      return t;
    }
    return Ae(t);
  },
  np = async (t, e, r, n) => {
    if (!r.isCustomEndpoint) {
      let i;
      (r.serviceConfiguredEndpoint
        ? (i = await r.serviceConfiguredEndpoint())
        : (i = await No(r.serviceId)),
        i && ((r.endpoint = () => Promise.resolve(Uo(i))), (r.isCustomEndpoint = !0)));
    }
    const s = await sp(t, e, r);
    if (typeof r.endpointProvider != 'function')
      throw new Error('config.endpointProvider is not set.');
    const o = r.endpointProvider(s, n);
    if (r.isCustomEndpoint && r.endpoint) {
      const i = await r.endpoint();
      if (i?.headers) {
        o.headers ??= {};
        for (const [a, c] of Object.entries(i.headers)) o.headers[a] = Array.isArray(c) ? c : [c];
      }
    }
    return o;
  },
  sp = async (t, e, r) => {
    const n = {},
      s = e?.getEndpointParameterInstructions?.() || {};
    for (const [o, i] of Object.entries(s))
      switch (i.type) {
        case 'staticContextParams':
          n[o] = i.value;
          break;
        case 'contextParams':
          n[o] = t[i.name];
          break;
        case 'clientContextParams':
        case 'builtInParams':
          n[o] = await rp(i.name, o, r, i.type !== 'builtInParams')();
          break;
        case 'operationContextParams':
          n[o] = i.get(t);
          break;
        default:
          throw new Error('Unrecognized endpoint parameter instruction: ' + JSON.stringify(i));
      }
    return (
      Object.keys(s).length === 0 && Object.assign(n, r),
      String(r.serviceId).toLowerCase() === 's3' && (await Qh(n)),
      n
    );
  },
  op =
    ({ config: t, instructions: e }) =>
    (r, n) =>
    async (s) => {
      t.isCustomEndpoint && Jd(n, 'ENDPOINT_OVERRIDE', 'N');
      const o = await np(
        s.input,
        {
          getEndpointParameterInstructions() {
            return e;
          },
        },
        { ...t },
        n,
      );
      ((n.endpointV2 = o), (n.authSchemes = o.properties?.authSchemes));
      const i = n.authSchemes?.[0];
      if (i) {
        ((n.signing_region = i.signingRegion), (n.signing_service = i.signingName));
        const c = Re(n)?.selectedHttpAuthScheme?.httpAuthOption;
        c &&
          (c.signingProperties = Object.assign(
            c.signingProperties || {},
            {
              signing_region: i.signingRegion,
              signingRegion: i.signingRegion,
              signing_service: i.signingName,
              signingName: i.signingName,
              signingRegionSet: i.signingRegionSet,
            },
            i.properties,
          ));
      }
      return r({ ...s });
    },
  ip = { name: 'serializerMiddleware' },
  ap = {
    step: 'serialize',
    tags: ['ENDPOINT_PARAMETERS', 'ENDPOINT_V2', 'ENDPOINT'],
    name: 'endpointV2Middleware',
    override: !0,
    relation: 'before',
    toMiddleware: ip.name,
  },
  Lo = (t, e) => ({
    applyToStack: (r) => {
      r.addRelativeTo(op({ config: t, instructions: e }), ap);
    },
  }),
  cp = (t) => {
    const e = t.tls ?? !0,
      { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: s } = t,
      o = r != null ? async () => Uo(await X(r)()) : void 0,
      a = Object.assign(t, {
        endpoint: o,
        tls: e,
        isCustomEndpoint: !!r,
        useDualstackEndpoint: X(n ?? !1),
        useFipsEndpoint: X(s ?? !1),
      });
    let c;
    return (
      (a.serviceConfiguredEndpoint = async () => (t.serviceId && !c && (c = No(t.serviceId)), c)),
      a
    );
  },
  up = (t) =>
    t instanceof Error
      ? t
      : t instanceof Object
        ? Object.assign(new Error(), t)
        : typeof t == 'string'
          ? new Error(t)
          : new Error(`AWS SDK error wrapper for ${t}`),
  lp = (t) => {
    const { retryStrategy: e, retryMode: r } = t,
      n = X(t.maxAttempts ?? ct);
    let s = e ? Promise.resolve(e) : void 0;
    const o = async () => ((await X(r)()) === ie.ADAPTIVE ? new Gf(n) : new Po(n));
    return Object.assign(t, { maxAttempts: n, retryStrategy: () => (s ??= o()) });
  },
  ae = (t, e) => {
    const r = [];
    if ((t && r.push(t), e)) for (const n of e) r.push(n);
    return r;
  },
  te = (t, e) => `${t || 'anonymous'}${e && e.length > 0 ? ` (a.k.a. ${e.join(',')})` : ''}`,
  ut = () => {
    let t = [],
      e = [],
      r = !1;
    const n = new Set(),
      s = (d) =>
        d.sort(
          (f, h) =>
            Un[h.step] - Un[f.step] || Ln[h.priority || 'normal'] - Ln[f.priority || 'normal'],
        ),
      o = (d) => {
        let f = !1;
        const h = (p) => {
          const g = ae(p.name, p.aliases);
          if (g.includes(d)) {
            f = !0;
            for (const m of g) n.delete(m);
            return !1;
          }
          return !0;
        };
        return ((t = t.filter(h)), (e = e.filter(h)), f);
      },
      i = (d) => {
        let f = !1;
        const h = (p) => {
          if (p.middleware === d) {
            f = !0;
            for (const g of ae(p.name, p.aliases)) n.delete(g);
            return !1;
          }
          return !0;
        };
        return ((t = t.filter(h)), (e = e.filter(h)), f);
      },
      a = (d) => (
        t.forEach((f) => {
          d.add(f.middleware, { ...f });
        }),
        e.forEach((f) => {
          d.addRelativeTo(f.middleware, { ...f });
        }),
        d.identifyOnResolve?.(l.identifyOnResolve()),
        d
      ),
      c = (d) => {
        const f = [];
        return (
          d.before.forEach((h) => {
            h.before.length === 0 && h.after.length === 0 ? f.push(h) : f.push(...c(h));
          }),
          f.push(d),
          d.after.reverse().forEach((h) => {
            h.before.length === 0 && h.after.length === 0 ? f.push(h) : f.push(...c(h));
          }),
          f
        );
      },
      u = (d = !1) => {
        const f = [],
          h = [],
          p = {};
        return (
          t.forEach((m) => {
            const y = { ...m, before: [], after: [] };
            for (const w of ae(y.name, y.aliases)) p[w] = y;
            f.push(y);
          }),
          e.forEach((m) => {
            const y = { ...m, before: [], after: [] };
            for (const w of ae(y.name, y.aliases)) p[w] = y;
            h.push(y);
          }),
          h.forEach((m) => {
            if (m.toMiddleware) {
              const y = p[m.toMiddleware];
              if (y === void 0) {
                if (d) return;
                throw new Error(
                  `${m.toMiddleware} is not found when adding ${te(m.name, m.aliases)} middleware ${m.relation} ${m.toMiddleware}`,
                );
              }
              (m.relation === 'after' && y.after.push(m),
                m.relation === 'before' && y.before.push(m));
            }
          }),
          s(f)
            .map(c)
            .reduce((m, y) => (m.push(...y), m), [])
        );
      },
      l = {
        add: (d, f = {}) => {
          const { name: h, override: p, aliases: g } = f,
            m = { step: 'initialize', priority: 'normal', middleware: d, ...f },
            y = ae(h, g);
          if (y.length > 0) {
            if (y.some((w) => n.has(w))) {
              if (!p) throw new Error(`Duplicate middleware name '${te(h, g)}'`);
              for (const w of y) {
                const S = t.findIndex((C) => C.name === w || C.aliases?.some((O) => O === w));
                if (S === -1) continue;
                const b = t[S];
                if (b.step !== m.step || m.priority !== b.priority)
                  throw new Error(
                    `"${te(b.name, b.aliases)}" middleware with ${b.priority} priority in ${b.step} step cannot be overridden by "${te(h, g)}" middleware with ${m.priority} priority in ${m.step} step.`,
                  );
                t.splice(S, 1);
              }
            }
            for (const w of y) n.add(w);
          }
          t.push(m);
        },
        addRelativeTo: (d, f) => {
          const { name: h, override: p, aliases: g } = f,
            m = { middleware: d, ...f },
            y = ae(h, g);
          if (y.length > 0) {
            if (y.some((w) => n.has(w))) {
              if (!p) throw new Error(`Duplicate middleware name '${te(h, g)}'`);
              for (const w of y) {
                const S = e.findIndex((C) => C.name === w || C.aliases?.some((O) => O === w));
                if (S === -1) continue;
                const b = e[S];
                if (b.toMiddleware !== m.toMiddleware || b.relation !== m.relation)
                  throw new Error(
                    `"${te(b.name, b.aliases)}" middleware ${b.relation} "${b.toMiddleware}" middleware cannot be overridden by "${te(h, g)}" middleware ${m.relation} "${m.toMiddleware}" middleware.`,
                  );
                e.splice(S, 1);
              }
            }
            for (const w of y) n.add(w);
          }
          e.push(m);
        },
        clone: () => a(ut()),
        use: (d) => {
          d.applyToStack(l);
        },
        remove: (d) => (typeof d == 'string' ? o(d) : i(d)),
        removeByTag: (d) => {
          let f = !1;
          const h = (p) => {
            const { tags: g, name: m, aliases: y } = p;
            if (g && g.includes(d)) {
              const w = ae(m, y);
              for (const S of w) n.delete(S);
              return ((f = !0), !1);
            }
            return !0;
          };
          return ((t = t.filter(h)), (e = e.filter(h)), f);
        },
        concat: (d) => {
          const f = a(ut());
          return (
            f.use(d),
            f.identifyOnResolve(r || f.identifyOnResolve() || (d.identifyOnResolve?.() ?? !1)),
            f
          );
        },
        applyToStack: a,
        identify: () =>
          u(!0).map((d) => {
            const f = d.step ?? d.relation + ' ' + d.toMiddleware;
            return te(d.name, d.aliases) + ' - ' + f;
          }),
        identifyOnResolve(d) {
          return (typeof d == 'boolean' && (r = d), r);
        },
        resolve: (d, f) => {
          for (const h of u()
            .map((p) => p.middleware)
            .reverse())
            d = h(d, f);
          return (r && console.log(l.identify()), d);
        },
      };
    return l;
  },
  Un = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
  Ln = { high: 3, normal: 2, low: 1 };
class dp {
  config;
  middlewareStack = ut();
  initConfig;
  handlers;
  constructor(e) {
    this.config = e;
    const { protocol: r, protocolSettings: n } = e;
    n && typeof r == 'function' && (e.protocol = new r(n));
  }
  send(e, r, n) {
    const s = typeof r != 'function' ? r : void 0,
      o = typeof r == 'function' ? r : n,
      i = s === void 0 && this.config.cacheMiddleware === !0;
    let a;
    if (i) {
      this.handlers || (this.handlers = new WeakMap());
      const c = this.handlers;
      c.has(e.constructor)
        ? (a = c.get(e.constructor))
        : ((a = e.resolveMiddleware(this.middlewareStack, this.config, s)),
          c.set(e.constructor, a));
    } else (delete this.handlers, (a = e.resolveMiddleware(this.middlewareStack, this.config, s)));
    if (o)
      a(e)
        .then(
          (c) => o(null, c.output),
          (c) => o(c),
        )
        .catch(() => {});
    else return a(e).then((c) => c.output);
  }
  destroy() {
    (this.config?.requestHandler?.destroy?.(), delete this.handlers);
  }
}
const jt = '***SensitiveInformation***';
function or(t, e) {
  if (e == null) return e;
  const r = E.of(t);
  if (r.getMergedTraits().sensitive) return jt;
  if (r.isListSchema()) {
    if (!!r.getValueSchema().getMergedTraits().sensitive) return jt;
  } else if (r.isMapSchema()) {
    if (
      !!r.getKeySchema().getMergedTraits().sensitive ||
      !!r.getValueSchema().getMergedTraits().sensitive
    )
      return jt;
  } else if (r.isStructSchema() && typeof e == 'object') {
    const n = e,
      s = {};
    for (const [o, i] of r.structIterator()) n[o] != null && (s[o] = or(i, n[o]));
    return s;
  }
  return e;
}
class Pr {
  middlewareStack = ut();
  schema;
  static classBuilder() {
    return new fp();
  }
  resolveMiddlewareWithContext(
    e,
    r,
    n,
    {
      middlewareFn: s,
      clientName: o,
      commandName: i,
      inputFilterSensitiveLog: a,
      outputFilterSensitiveLog: c,
      smithyContext: u,
      additionalContext: l,
      CommandCtor: d,
    },
  ) {
    for (const m of s.bind(this)(d, e, r, n)) this.middlewareStack.use(m);
    const f = e.concat(this.middlewareStack),
      { logger: h } = r,
      p = {
        logger: h,
        clientName: o,
        commandName: i,
        inputFilterSensitiveLog: a,
        outputFilterSensitiveLog: c,
        [er]: { commandInstance: this, ...u },
        ...l,
      },
      { requestHandler: g } = r;
    return f.resolve((m) => g.handle(m.request, n || {}), p);
  }
}
class fp {
  _init = () => {};
  _ep = {};
  _middlewareFn = () => [];
  _commandName = '';
  _clientName = '';
  _additionalContext = {};
  _smithyContext = {};
  _inputFilterSensitiveLog = void 0;
  _outputFilterSensitiveLog = void 0;
  _serializer = null;
  _deserializer = null;
  _operationSchema;
  init(e) {
    this._init = e;
  }
  ep(e) {
    return ((this._ep = e), this);
  }
  m(e) {
    return ((this._middlewareFn = e), this);
  }
  s(e, r, n = {}) {
    return ((this._smithyContext = { service: e, operation: r, ...n }), this);
  }
  c(e = {}) {
    return ((this._additionalContext = e), this);
  }
  n(e, r) {
    return ((this._clientName = e), (this._commandName = r), this);
  }
  f(e = (n) => n, r = (n) => n) {
    return ((this._inputFilterSensitiveLog = e), (this._outputFilterSensitiveLog = r), this);
  }
  ser(e) {
    return ((this._serializer = e), this);
  }
  de(e) {
    return ((this._deserializer = e), this);
  }
  sc(e) {
    return ((this._operationSchema = e), (this._smithyContext.operationSchema = e), this);
  }
  build() {
    const e = this;
    let r;
    return (r = class extends Pr {
      input;
      static getEndpointParameterInstructions() {
        return e._ep;
      }
      constructor(...[n]) {
        (super(), (this.input = n ?? {}), e._init(this), (this.schema = e._operationSchema));
      }
      resolveMiddleware(n, s, o) {
        const i = e._operationSchema,
          a = i?.[4] ?? i?.input,
          c = i?.[5] ?? i?.output;
        return this.resolveMiddlewareWithContext(n, s, o, {
          CommandCtor: r,
          middlewareFn: e._middlewareFn,
          clientName: e._clientName,
          commandName: e._commandName,
          inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (i ? or.bind(null, a) : (u) => u),
          outputFilterSensitiveLog:
            e._outputFilterSensitiveLog ?? (i ? or.bind(null, c) : (u) => u),
          smithyContext: e._smithyContext,
          additionalContext: e._additionalContext,
        });
      }
      serialize = e._serializer;
      deserialize = e._deserializer;
    });
  }
}
class we extends Error {
  $fault;
  $response;
  $retryable;
  $metadata;
  constructor(e) {
    (super(e.message),
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype),
      (this.name = e.name),
      (this.$fault = e.$fault),
      (this.$metadata = e.$metadata));
  }
  static isInstance(e) {
    if (!e) return !1;
    const r = e;
    return (
      we.prototype.isPrototypeOf(r) ||
      (!!r.$fault && !!r.$metadata && (r.$fault === 'client' || r.$fault === 'server'))
    );
  }
  static [Symbol.hasInstance](e) {
    if (!e) return !1;
    const r = e;
    return this === we
      ? we.isInstance(e)
      : we.isInstance(e)
        ? r.name && this.name
          ? this.prototype.isPrototypeOf(e) || r.name === this.name
          : this.prototype.isPrototypeOf(e)
        : !1;
  }
}
const Fn = (t, e = {}) => {
    Object.entries(e)
      .filter(([, n]) => n !== void 0)
      .forEach(([n, s]) => {
        (t[n] == null || t[n] === '') && (t[n] = s);
      });
    const r = t.message || t.Message || 'UnknownError';
    return ((t.message = r), delete t.Message, t);
  },
  hp = (t) => {
    switch (t) {
      case 'standard':
        return { retryMode: 'standard', connectionTimeout: 3100 };
      case 'in-region':
        return { retryMode: 'standard', connectionTimeout: 1100 };
      case 'cross-region':
        return { retryMode: 'standard', connectionTimeout: 3100 };
      case 'mobile':
        return { retryMode: 'standard', connectionTimeout: 3e4 };
      default:
        return {};
    }
  },
  Fo = Object.values(Ue),
  pp = (t) => {
    const e = [];
    for (const r in Ue) {
      const n = Ue[r];
      t[n] !== void 0 && e.push({ algorithmId: () => n, checksumConstructor: () => t[n] });
    }
    for (const [r, n] of Object.entries(t.checksumAlgorithms ?? {}))
      e.push({ algorithmId: () => r, checksumConstructor: () => n });
    return {
      addChecksumAlgorithm(r) {
        t.checksumAlgorithms = t.checksumAlgorithms ?? {};
        const n = r.algorithmId(),
          s = r.checksumConstructor();
        (Fo.includes(n)
          ? (t.checksumAlgorithms[n.toUpperCase()] = s)
          : (t.checksumAlgorithms[n] = s),
          e.push(r));
      },
      checksumAlgorithms() {
        return e;
      },
    };
  },
  mp = (t) => {
    const e = {};
    return (
      t.checksumAlgorithms().forEach((r) => {
        const n = r.algorithmId();
        Fo.includes(n) && (e[n] = r.checksumConstructor());
      }),
      e
    );
  },
  gp = (t) => ({
    setRetryStrategy(e) {
      t.retryStrategy = e;
    },
    retryStrategy() {
      return t.retryStrategy;
    },
  }),
  yp = (t) => {
    const e = {};
    return ((e.retryStrategy = t.retryStrategy()), e);
  },
  wp = (t) => Object.assign(pp(t), gp(t)),
  bp = (t) => Object.assign(mp(t), yp(t));
class zo {
  trace() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
}
const Sp = (t) => t?.body instanceof ReadableStream,
  Ep = (t) => (e, r) => async (n) => {
    let s = await t.retryStrategy();
    const o = await t.maxAttempts();
    if (Ap(s)) {
      s = s;
      let i = await s.acquireInitialRetryToken(r.partition_id),
        a = new Error(),
        c = 0,
        u = 0;
      const { request: l } = n,
        d = P.isInstance(l);
      for (d && (l.headers[Vf] = br()); ; )
        try {
          d && (l.headers[Wf] = `attempt=${c + 1}; max=${o}`);
          const { response: f, output: h } = await e(n);
          return (
            s.recordSuccess(i),
            (h.$metadata.attempts = c + 1),
            (h.$metadata.totalRetryDelay = u),
            { response: f, output: h }
          );
        } catch (f) {
          const h = xp(f);
          if (((a = up(f)), d && Sp(l)))
            throw (
              (r.logger instanceof zo ? console : r.logger)?.warn(
                'An error was encountered in a non-retryable streaming request.',
              ),
              a
            );
          try {
            i = await s.refreshRetryTokenForRetry(i, h);
          } catch {
            throw (
              a.$metadata || (a.$metadata = {}),
              (a.$metadata.attempts = c + 1),
              (a.$metadata.totalRetryDelay = u),
              a
            );
          }
          c = i.getRetryCount();
          const p = i.getRetryDelay();
          ((u += p), await new Promise((g) => setTimeout(g, p)));
        }
    } else
      return (
        (s = s),
        s?.mode && (r.userAgent = [...(r.userAgent || []), ['cfg/retry-mode', s.mode]]),
        s.retry(e, n)
      );
  },
  Ap = (t) =>
    typeof t.acquireInitialRetryToken < 'u' &&
    typeof t.refreshRetryTokenForRetry < 'u' &&
    typeof t.recordSuccess < 'u',
  xp = (t) => {
    const e = { error: t, errorType: Rp(t) },
      r = vp(t.$response);
    return (r && (e.retryAfterHint = r), e);
  },
  Rp = (t) =>
    To(t) ? 'THROTTLING' : Cr(t) ? 'TRANSIENT' : Lf(t) ? 'SERVER_ERROR' : 'CLIENT_ERROR',
  Cp = {
    name: 'retryMiddleware',
    tags: ['RETRY'],
    step: 'finalizeRequest',
    priority: 'high',
    override: !0,
  },
  Tp = (t) => ({
    applyToStack: (e) => {
      e.add(Ep(t), Cp);
    },
  }),
  vp = (t) => {
    if (!de.isInstance(t)) return;
    const e = Object.keys(t.headers).find((o) => o.toLowerCase() === 'retry-after');
    if (!e) return;
    const r = t.headers[e],
      n = Number(r);
    return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3);
  },
  zn = (t) => (de.isInstance(t) ? (t.headers?.date ?? t.headers?.Date) : void 0),
  Ho = (t) => new Date(Date.now() + t),
  Pp = (t, e) => Math.abs(Ho(e).getTime() - t) >= 3e5,
  Hn = (t, e) => {
    const r = Date.parse(t);
    return Pp(r, e) ? r - Date.now() : e;
  },
  Oe = (t, e) => {
    if (!e) throw new Error(`Property \`${t}\` is not resolved for AWS SDK SigV4Auth`);
    return e;
  },
  _p = async (t) => {
    const e = Oe('context', t.context),
      r = Oe('config', t.config),
      n = e.endpointV2?.properties?.authSchemes?.[0],
      o = await Oe('signer', r.signer)(n),
      i = t?.signingRegion,
      a = t?.signingRegionSet,
      c = t?.signingName;
    return { config: r, signer: o, signingRegion: i, signingRegionSet: a, signingName: c };
  };
class $p {
  async sign(e, r, n) {
    if (!P.isInstance(e))
      throw new Error('The request is not an instance of `HttpRequest` and cannot be signed');
    const s = await _p(n),
      { config: o, signer: i } = s;
    let { signingRegion: a, signingName: c } = s;
    const u = n.context;
    if (u?.authSchemes?.length ?? !1) {
      const [d, f] = u.authSchemes;
      d?.name === 'sigv4a' &&
        f?.name === 'sigv4' &&
        ((a = f?.signingRegion ?? a), (c = f?.signingName ?? c));
    }
    return await i.sign(e, {
      signingDate: Ho(o.systemClockOffset),
      signingRegion: a,
      signingService: c,
    });
  }
  errorHandler(e) {
    return (r) => {
      const n = r.ServerTime ?? zn(r.$response);
      if (n) {
        const s = Oe('config', e.config),
          o = s.systemClockOffset;
        ((s.systemClockOffset = Hn(n, s.systemClockOffset)),
          s.systemClockOffset !== o && r.$metadata && (r.$metadata.clockSkewCorrected = !0));
      }
      throw r;
    };
  }
  successHandler(e, r) {
    const n = zn(e);
    if (n) {
      const s = Oe('config', r.config);
      s.systemClockOffset = Hn(n, s.systemClockOffset);
    }
  }
}
const kp = (t, e, r) => {
    let n,
      s,
      o,
      i = !1;
    const a = async () => {
      s || (s = t());
      try {
        ((n = await s), (o = !0), (i = !1));
      } finally {
        s = void 0;
      }
      return n;
    };
    return async (c) => ((!o || c?.forceRefresh) && (n = await a()), n);
  },
  Dp = 'X-Amz-Algorithm',
  Ip = 'X-Amz-Credential',
  jo = 'X-Amz-Date',
  Mp = 'X-Amz-SignedHeaders',
  Op = 'X-Amz-Expires',
  Vo = 'X-Amz-Signature',
  Wo = 'X-Amz-Security-Token',
  qo = 'authorization',
  Go = jo.toLowerCase(),
  Bp = 'date',
  Np = [qo, Go, Bp],
  Up = Vo.toLowerCase(),
  ir = 'x-amz-content-sha256',
  Lp = Wo.toLowerCase(),
  Fp = {
    'authorization': !0,
    'cache-control': !0,
    'connection': !0,
    'expect': !0,
    'from': !0,
    'keep-alive': !0,
    'max-forwards': !0,
    'pragma': !0,
    'referer': !0,
    'te': !0,
    'trailer': !0,
    'transfer-encoding': !0,
    'upgrade': !0,
    'user-agent': !0,
    'x-amzn-trace-id': !0,
  },
  zp = /^proxy-/,
  Hp = /^sec-/,
  Vt = 'AWS4-HMAC-SHA256',
  jp = 'AWS4-HMAC-SHA256-PAYLOAD',
  Vp = 'UNSIGNED-PAYLOAD',
  Wp = 50,
  Jo = 'aws4_request',
  qp = 3600 * 24 * 7,
  Qe = {},
  Wt = [],
  qt = (t, e, r) => `${t}/${e}/${r}/${Jo}`,
  Gp = async (t, e, r, n, s) => {
    const o = await jn(t, e.secretAccessKey, e.accessKeyId),
      i = `${r}:${n}:${s}:${k(o)}:${e.sessionToken}`;
    if (i in Qe) return Qe[i];
    for (Wt.push(i); Wt.length > Wp; ) delete Qe[Wt.shift()];
    let a = `AWS4${e.secretAccessKey}`;
    for (const c of [r, n, s, Jo]) a = await jn(t, a, c);
    return (Qe[i] = a);
  },
  jn = (t, e, r) => {
    const n = new t(e);
    return (n.update(Le(r)), n.digest());
  },
  Vn = ({ headers: t }, e, r) => {
    const n = {};
    for (const s of Object.keys(t).sort()) {
      if (t[s] == null) continue;
      const o = s.toLowerCase();
      ((o in Fp || e?.has(o) || zp.test(o) || Hp.test(o)) && (!r || (r && !r.has(o)))) ||
        (n[o] = t[s].trim().replace(/\s+/g, ' '));
    }
    return n;
  },
  Jp = (t) =>
    (typeof ArrayBuffer == 'function' && t instanceof ArrayBuffer) ||
    Object.prototype.toString.call(t) === '[object ArrayBuffer]',
  Gt = async ({ headers: t, body: e }, r) => {
    for (const n of Object.keys(t)) if (n.toLowerCase() === ir) return t[n];
    if (e == null) return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    if (typeof e == 'string' || ArrayBuffer.isView(e) || Jp(e)) {
      const n = new r();
      return (n.update(Le(e)), k(await n.digest()));
    }
    return Vp;
  };
class Kp {
  format(e) {
    const r = [];
    for (const o of Object.keys(e)) {
      const i = he(o);
      r.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(e[o]));
    }
    const n = new Uint8Array(r.reduce((o, i) => o + i.byteLength, 0));
    let s = 0;
    for (const o of r) (n.set(o, s), (s += o.byteLength));
    return n;
  }
  formatHeaderValue(e) {
    switch (e.type) {
      case 'boolean':
        return Uint8Array.from([e.value ? 0 : 1]);
      case 'byte':
        return Uint8Array.from([2, e.value]);
      case 'short':
        const r = new DataView(new ArrayBuffer(3));
        return (r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer));
      case 'integer':
        const n = new DataView(new ArrayBuffer(5));
        return (n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer));
      case 'long':
        const s = new Uint8Array(9);
        return ((s[0] = 5), s.set(e.value.bytes, 1), s);
      case 'binary':
        const o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        (o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1));
        const i = new Uint8Array(o.buffer);
        return (i.set(e.value, 3), i);
      case 'string':
        const a = he(e.value),
          c = new DataView(new ArrayBuffer(3 + a.byteLength));
        (c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1));
        const u = new Uint8Array(c.buffer);
        return (u.set(a, 3), u);
      case 'timestamp':
        const l = new Uint8Array(9);
        return ((l[0] = 8), l.set(_r.fromNumber(e.value.valueOf()).bytes, 1), l);
      case 'uuid':
        if (!Qp.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
        const d = new Uint8Array(17);
        return ((d[0] = 9), d.set(yr(e.value.replace(/\-/g, '')), 1), d);
    }
  }
}
var Wn;
(function (t) {
  ((t[(t.boolTrue = 0)] = 'boolTrue'),
    (t[(t.boolFalse = 1)] = 'boolFalse'),
    (t[(t.byte = 2)] = 'byte'),
    (t[(t.short = 3)] = 'short'),
    (t[(t.integer = 4)] = 'integer'),
    (t[(t.long = 5)] = 'long'),
    (t[(t.byteArray = 6)] = 'byteArray'),
    (t[(t.string = 7)] = 'string'),
    (t[(t.timestamp = 8)] = 'timestamp'),
    (t[(t.uuid = 9)] = 'uuid'));
})(Wn || (Wn = {}));
const Qp = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class _r {
  bytes;
  constructor(e) {
    if (((this.bytes = e), e.byteLength !== 8))
      throw new Error('Int64 buffers must be exactly 8 bytes');
  }
  static fromNumber(e) {
    if (e > 9223372036854776e3 || e < -9223372036854776e3)
      throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    const r = new Uint8Array(8);
    for (let n = 7, s = Math.abs(Math.round(e)); n > -1 && s > 0; n--, s /= 256) r[n] = s;
    return (e < 0 && qn(r), new _r(r));
  }
  valueOf() {
    const e = this.bytes.slice(0),
      r = e[0] & 128;
    return (r && qn(e), parseInt(k(e), 16) * (r ? -1 : 1));
  }
  toString() {
    return String(this.valueOf());
  }
}
function qn(t) {
  for (let e = 0; e < 8; e++) t[e] ^= 255;
  for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--);
}
const Xp = (t, e) => {
    t = t.toLowerCase();
    for (const r of Object.keys(e)) if (t === r.toLowerCase()) return !0;
    return !1;
  },
  Yp = (t, e = {}) => {
    const { headers: r, query: n = {} } = P.clone(t);
    for (const s of Object.keys(r)) {
      const o = s.toLowerCase();
      ((o.slice(0, 6) === 'x-amz-' && !e.unhoistableHeaders?.has(o)) ||
        e.hoistableHeaders?.has(o)) &&
        ((n[s] = r[s]), delete r[s]);
    }
    return { ...t, headers: r, query: n };
  },
  Gn = (t) => {
    t = P.clone(t);
    for (const e of Object.keys(t.headers)) Np.indexOf(e.toLowerCase()) > -1 && delete t.headers[e];
    return t;
  },
  Zp = ({ query: t = {} }) => {
    const e = [],
      r = {};
    for (const n of Object.keys(t)) {
      if (n.toLowerCase() === Up) continue;
      const s = le(n);
      e.push(s);
      const o = t[n];
      typeof o == 'string'
        ? (r[s] = `${s}=${le(o)}`)
        : Array.isArray(o) &&
          (r[s] = o
            .slice(0)
            .reduce((i, a) => i.concat([`${s}=${le(a)}`]), [])
            .sort()
            .join('&'));
    }
    return e
      .sort()
      .map((n) => r[n])
      .filter((n) => n)
      .join('&');
  },
  em = (t) =>
    tm(t)
      .toISOString()
      .replace(/\.\d{3}Z$/, 'Z'),
  tm = (t) =>
    typeof t == 'number'
      ? new Date(t * 1e3)
      : typeof t == 'string'
        ? Number(t)
          ? new Date(Number(t) * 1e3)
          : new Date(t)
        : t;
class rm {
  service;
  regionProvider;
  credentialProvider;
  sha256;
  uriEscapePath;
  applyChecksum;
  constructor({
    applyChecksum: e,
    credentials: r,
    region: n,
    service: s,
    sha256: o,
    uriEscapePath: i = !0,
  }) {
    ((this.service = s),
      (this.sha256 = o),
      (this.uriEscapePath = i),
      (this.applyChecksum = typeof e == 'boolean' ? e : !0),
      (this.regionProvider = X(n)),
      (this.credentialProvider = X(r)));
  }
  createCanonicalRequest(e, r, n) {
    const s = Object.keys(r).sort();
    return `${e.method}
${this.getCanonicalPath(e)}
${Zp(e)}
${s.map((o) => `${o}:${r[o]}`).join(`
`)}

${s.join(';')}
${n}`;
  }
  async createStringToSign(e, r, n, s) {
    const o = new this.sha256();
    o.update(Le(n));
    const i = await o.digest();
    return `${s}
${e}
${r}
${k(i)}`;
  }
  getCanonicalPath({ path: e }) {
    if (this.uriEscapePath) {
      const r = [];
      for (const o of e.split('/'))
        o?.length !== 0 && o !== '.' && (o === '..' ? r.pop() : r.push(o));
      const n = `${e?.startsWith('/') ? '/' : ''}${r.join('/')}${r.length > 0 && e?.endsWith('/') ? '/' : ''}`;
      return le(n).replace(/%2F/g, '/');
    }
    return e;
  }
  validateResolvedCredentials(e) {
    if (
      typeof e != 'object' ||
      typeof e.accessKeyId != 'string' ||
      typeof e.secretAccessKey != 'string'
    )
      throw new Error('Resolved credential object is not valid');
  }
  formatDate(e) {
    const r = em(e).replace(/[\-:]/g, '');
    return { longDate: r, shortDate: r.slice(0, 8) };
  }
  getCanonicalHeaderList(e) {
    return Object.keys(e).sort().join(';');
  }
}
class Jn extends rm {
  headerFormatter = new Kp();
  constructor({
    applyChecksum: e,
    credentials: r,
    region: n,
    service: s,
    sha256: o,
    uriEscapePath: i = !0,
  }) {
    super({ applyChecksum: e, credentials: r, region: n, service: s, sha256: o, uriEscapePath: i });
  }
  async presign(e, r = {}) {
    const {
        signingDate: n = new Date(),
        expiresIn: s = 3600,
        unsignableHeaders: o,
        unhoistableHeaders: i,
        signableHeaders: a,
        hoistableHeaders: c,
        signingRegion: u,
        signingService: l,
      } = r,
      d = await this.credentialProvider();
    this.validateResolvedCredentials(d);
    const f = u ?? (await this.regionProvider()),
      { longDate: h, shortDate: p } = this.formatDate(n);
    if (s > qp)
      return Promise.reject(
        'Signature version 4 presigned URLs must have an expiration date less than one week in the future',
      );
    const g = qt(p, f, l ?? this.service),
      m = Yp(Gn(e), { unhoistableHeaders: i, hoistableHeaders: c });
    (d.sessionToken && (m.query[Wo] = d.sessionToken),
      (m.query[Dp] = Vt),
      (m.query[Ip] = `${d.accessKeyId}/${g}`),
      (m.query[jo] = h),
      (m.query[Op] = s.toString(10)));
    const y = Vn(m, o, a);
    return (
      (m.query[Mp] = this.getCanonicalHeaderList(y)),
      (m.query[Vo] = await this.getSignature(
        h,
        g,
        this.getSigningKey(d, f, p, l),
        this.createCanonicalRequest(m, y, await Gt(e, this.sha256)),
      )),
      m
    );
  }
  async sign(e, r) {
    return typeof e == 'string'
      ? this.signString(e, r)
      : e.headers && e.payload
        ? this.signEvent(e, r)
        : e.message
          ? this.signMessage(e, r)
          : this.signRequest(e, r);
  }
  async signEvent(
    { headers: e, payload: r },
    { signingDate: n = new Date(), priorSignature: s, signingRegion: o, signingService: i },
  ) {
    const a = o ?? (await this.regionProvider()),
      { shortDate: c, longDate: u } = this.formatDate(n),
      l = qt(c, a, i ?? this.service),
      d = await Gt({ headers: {}, body: r }, this.sha256),
      f = new this.sha256();
    f.update(e);
    const h = k(await f.digest()),
      p = [jp, u, l, s, h, d].join(`
`);
    return this.signString(p, { signingDate: n, signingRegion: a, signingService: i });
  }
  async signMessage(e, { signingDate: r = new Date(), signingRegion: n, signingService: s }) {
    return this.signEvent(
      { headers: this.headerFormatter.format(e.message.headers), payload: e.message.body },
      { signingDate: r, signingRegion: n, signingService: s, priorSignature: e.priorSignature },
    ).then((i) => ({ message: e.message, signature: i }));
  }
  async signString(e, { signingDate: r = new Date(), signingRegion: n, signingService: s } = {}) {
    const o = await this.credentialProvider();
    this.validateResolvedCredentials(o);
    const i = n ?? (await this.regionProvider()),
      { shortDate: a } = this.formatDate(r),
      c = new this.sha256(await this.getSigningKey(o, i, a, s));
    return (c.update(Le(e)), k(await c.digest()));
  }
  async signRequest(
    e,
    {
      signingDate: r = new Date(),
      signableHeaders: n,
      unsignableHeaders: s,
      signingRegion: o,
      signingService: i,
    } = {},
  ) {
    const a = await this.credentialProvider();
    this.validateResolvedCredentials(a);
    const c = o ?? (await this.regionProvider()),
      u = Gn(e),
      { longDate: l, shortDate: d } = this.formatDate(r),
      f = qt(d, c, i ?? this.service);
    ((u.headers[Go] = l), a.sessionToken && (u.headers[Lp] = a.sessionToken));
    const h = await Gt(u, this.sha256);
    !Xp(ir, u.headers) && this.applyChecksum && (u.headers[ir] = h);
    const p = Vn(u, s, n),
      g = await this.getSignature(
        l,
        f,
        this.getSigningKey(a, c, d, i),
        this.createCanonicalRequest(u, p, h),
      );
    return (
      (u.headers[qo] =
        `${Vt} Credential=${a.accessKeyId}/${f}, SignedHeaders=${this.getCanonicalHeaderList(p)}, Signature=${g}`),
      u
    );
  }
  async getSignature(e, r, n, s) {
    const o = await this.createStringToSign(e, r, s, Vt),
      i = new this.sha256(await n);
    return (i.update(Le(o)), k(await i.digest()));
  }
  getSigningKey(e, r, n, s) {
    return Gp(this.sha256, e, n, r, s || this.service);
  }
}
const nm = (t) => {
  let e = t.credentials,
    r = !!t.credentials,
    n;
  (Object.defineProperty(t, 'credentials', {
    set(u) {
      (u && u !== e && u !== n && (r = !0), (e = u));
      const l = sm(t, { credentials: e, credentialDefaultProvider: t.credentialDefaultProvider }),
        d = om(t, l);
      if (r && !d.attributed) {
        const f = typeof e == 'object' && e !== null;
        ((n = async (h) => {
          const g = await d(h);
          return f && (!g.$source || Object.keys(g.$source).length === 0)
            ? _f(g, 'CREDENTIALS_CODE', 'e')
            : g;
        }),
          (n.memoized = d.memoized),
          (n.configBound = d.configBound),
          (n.attributed = !0));
      } else n = d;
    },
    get() {
      return n;
    },
    enumerable: !0,
    configurable: !0,
  }),
    (t.credentials = e));
  const {
    signingEscapePath: s = !0,
    systemClockOffset: o = t.systemClockOffset || 0,
    sha256: i,
  } = t;
  let a;
  return (
    t.signer
      ? (a = Ie(t.signer))
      : t.regionInfoProvider
        ? (a = () =>
            Ie(t.region)()
              .then(async (u) => [
                (await t.regionInfoProvider(u, {
                  useFipsEndpoint: await t.useFipsEndpoint(),
                  useDualstackEndpoint: await t.useDualstackEndpoint(),
                })) || {},
                u,
              ])
              .then(([u, l]) => {
                const { signingRegion: d, signingService: f } = u;
                ((t.signingRegion = t.signingRegion || d || l),
                  (t.signingName = t.signingName || f || t.serviceId));
                const h = {
                    ...t,
                    credentials: t.credentials,
                    region: t.signingRegion,
                    service: t.signingName,
                    sha256: i,
                    uriEscapePath: s,
                  },
                  p = t.signerConstructor || Jn;
                return new p(h);
              }))
        : (a = async (u) => {
            u = Object.assign(
              {},
              {
                name: 'sigv4',
                signingName: t.signingName || t.defaultSigningName,
                signingRegion: await Ie(t.region)(),
                properties: {},
              },
              u,
            );
            const l = u.signingRegion,
              d = u.signingName;
            ((t.signingRegion = t.signingRegion || l),
              (t.signingName = t.signingName || d || t.serviceId));
            const f = {
                ...t,
                credentials: t.credentials,
                region: t.signingRegion,
                service: t.signingName,
                sha256: i,
                uriEscapePath: s,
              },
              h = t.signerConstructor || Jn;
            return new h(f);
          }),
    Object.assign(t, { systemClockOffset: o, signingEscapePath: s, signer: a })
  );
};
function sm(t, { credentials: e, credentialDefaultProvider: r }) {
  let n;
  return (
    e
      ? e?.memoized
        ? (n = e)
        : (n = ho(e, fo, xr))
      : r
        ? (n = Ie(r(Object.assign({}, t, { parentClientConfig: t }))))
        : (n = async () => {
            throw new Error(
              '@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.',
            );
          }),
    (n.memoized = !0),
    n
  );
}
function om(t, e) {
  if (e.configBound) return e;
  const r = async (n) => e({ ...n, callerClientConfig: t });
  return ((r.memoized = e.memoized), (r.configBound = !0), r);
}
const im = async (t, e, r) => ({
  operation: Re(e).operation,
  region:
    (await X(t.region)()) ||
    (() => {
      throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
    })(),
});
function am(t) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'bedrock', region: t.region },
    propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
  };
}
function cm(t) {
  return {
    schemeId: 'smithy.api#httpBearerAuth',
    propertiesExtractor: ({ profile: e, filepath: r, configFilepath: n, ignoreCache: s }, o) => ({
      identityProperties: { profile: e, filepath: r, configFilepath: n, ignoreCache: s },
    }),
  };
}
const um = (t) => {
    const e = [];
    switch (t.operation) {
      default:
        (e.push(am(t)), e.push(cm()));
    }
    return e;
  },
  lm = (t) => {
    const e = ho(t.token, fo, xr),
      r = nm(t);
    return Object.assign(r, { authSchemePreference: X(t.authSchemePreference ?? []), token: e });
  },
  dm = (t) =>
    Object.assign(t, {
      useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
      useFipsEndpoint: t.useFipsEndpoint ?? !1,
      defaultSigningName: 'bedrock',
    }),
  Ko = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  fm = '3.1020.0',
  hm = { version: fm };
var Qo = { name: 'SHA-256' },
  Kn = { name: 'HMAC', hash: Qo },
  pm = new Uint8Array([
    227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228,
    100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85,
  ]);
const mm = {};
function Ye() {
  return typeof window < 'u' ? window : typeof self < 'u' ? self : mm;
}
var gm = (function () {
    function t(e) {
      ((this.toHash = new Uint8Array(0)), (this.secret = e), this.reset());
    }
    return (
      (t.prototype.update = function (e) {
        if (!sr(e)) {
          var r = je(e),
            n = new Uint8Array(this.toHash.byteLength + r.byteLength);
          (n.set(this.toHash, 0), n.set(r, this.toHash.byteLength), (this.toHash = n));
        }
      }),
      (t.prototype.digest = function () {
        var e = this;
        return this.key
          ? this.key.then(function (r) {
              return Ye()
                .crypto.subtle.sign(Kn, r, e.toHash)
                .then(function (n) {
                  return new Uint8Array(n);
                });
            })
          : sr(this.toHash)
            ? Promise.resolve(pm)
            : Promise.resolve()
                .then(function () {
                  return Ye().crypto.subtle.digest(Qo, e.toHash);
                })
                .then(function (r) {
                  return Promise.resolve(new Uint8Array(r));
                });
      }),
      (t.prototype.reset = function () {
        var e = this;
        ((this.toHash = new Uint8Array(0)),
          this.secret &&
            this.secret !== void 0 &&
            ((this.key = new Promise(function (r, n) {
              Ye().crypto.subtle.importKey('raw', je(e.secret), Kn, !1, ['sign']).then(r, n);
            })),
            this.key.catch(function () {})));
      }),
      t
    );
  })(),
  B = 64,
  ym = 32,
  wm = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  bm = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ],
  Sm = Math.pow(2, 53) - 1,
  Ze = (function () {
    function t() {
      ((this.state = Int32Array.from(bm)),
        (this.temp = new Int32Array(64)),
        (this.buffer = new Uint8Array(64)),
        (this.bufferLength = 0),
        (this.bytesHashed = 0),
        (this.finished = !1));
    }
    return (
      (t.prototype.update = function (e) {
        if (this.finished) throw new Error('Attempted to update an already finished hash.');
        var r = 0,
          n = e.byteLength;
        if (((this.bytesHashed += n), this.bytesHashed * 8 > Sm))
          throw new Error('Cannot hash more than 2^53 - 1 bits');
        for (; n > 0; )
          ((this.buffer[this.bufferLength++] = e[r++]),
            n--,
            this.bufferLength === B && (this.hashBuffer(), (this.bufferLength = 0)));
      }),
      (t.prototype.digest = function () {
        if (!this.finished) {
          var e = this.bytesHashed * 8,
            r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
            n = this.bufferLength;
          if ((r.setUint8(this.bufferLength++, 128), n % B >= B - 8)) {
            for (var s = this.bufferLength; s < B; s++) r.setUint8(s, 0);
            (this.hashBuffer(), (this.bufferLength = 0));
          }
          for (var s = this.bufferLength; s < B - 8; s++) r.setUint8(s, 0);
          (r.setUint32(B - 8, Math.floor(e / 4294967296), !0),
            r.setUint32(B - 4, e),
            this.hashBuffer(),
            (this.finished = !0));
        }
        for (var o = new Uint8Array(ym), s = 0; s < 8; s++)
          ((o[s * 4] = (this.state[s] >>> 24) & 255),
            (o[s * 4 + 1] = (this.state[s] >>> 16) & 255),
            (o[s * 4 + 2] = (this.state[s] >>> 8) & 255),
            (o[s * 4 + 3] = (this.state[s] >>> 0) & 255));
        return o;
      }),
      (t.prototype.hashBuffer = function () {
        for (
          var e = this,
            r = e.buffer,
            n = e.state,
            s = n[0],
            o = n[1],
            i = n[2],
            a = n[3],
            c = n[4],
            u = n[5],
            l = n[6],
            d = n[7],
            f = 0;
          f < B;
          f++
        ) {
          if (f < 16)
            this.temp[f] =
              ((r[f * 4] & 255) << 24) |
              ((r[f * 4 + 1] & 255) << 16) |
              ((r[f * 4 + 2] & 255) << 8) |
              (r[f * 4 + 3] & 255);
          else {
            var h = this.temp[f - 2],
              p = ((h >>> 17) | (h << 15)) ^ ((h >>> 19) | (h << 13)) ^ (h >>> 10);
            h = this.temp[f - 15];
            var g = ((h >>> 7) | (h << 25)) ^ ((h >>> 18) | (h << 14)) ^ (h >>> 3);
            this.temp[f] = ((p + this.temp[f - 7]) | 0) + ((g + this.temp[f - 16]) | 0);
          }
          var m =
              ((((((c >>> 6) | (c << 26)) ^ ((c >>> 11) | (c << 21)) ^ ((c >>> 25) | (c << 7))) +
                ((c & u) ^ (~c & l))) |
                0) +
                ((d + ((wm[f] + this.temp[f]) | 0)) | 0)) |
              0,
            y =
              ((((s >>> 2) | (s << 30)) ^ ((s >>> 13) | (s << 19)) ^ ((s >>> 22) | (s << 10))) +
                ((s & o) ^ (s & i) ^ (o & i))) |
              0;
          ((d = l),
            (l = u),
            (u = c),
            (c = (a + m) | 0),
            (a = i),
            (i = o),
            (o = s),
            (s = (m + y) | 0));
        }
        ((n[0] += s),
          (n[1] += o),
          (n[2] += i),
          (n[3] += a),
          (n[4] += c),
          (n[5] += u),
          (n[6] += l),
          (n[7] += d));
      }),
      t
    );
  })(),
  Em = (function () {
    function t(e) {
      ((this.secret = e), (this.hash = new Ze()), this.reset());
    }
    return (
      (t.prototype.update = function (e) {
        if (!(sr(e) || this.error))
          try {
            this.hash.update(je(e));
          } catch (r) {
            this.error = r;
          }
      }),
      (t.prototype.digestSync = function () {
        if (this.error) throw this.error;
        return this.outer
          ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest())
          : this.hash.digest();
      }),
      (t.prototype.digest = function () {
        return Ci(this, void 0, void 0, function () {
          return Ti(this, function (e) {
            return [2, this.digestSync()];
          });
        });
      }),
      (t.prototype.reset = function () {
        if (((this.hash = new Ze()), this.secret)) {
          this.outer = new Ze();
          var e = Am(this.secret),
            r = new Uint8Array(B);
          r.set(e);
          for (var n = 0; n < B; n++) ((e[n] ^= 54), (r[n] ^= 92));
          (this.hash.update(e), this.outer.update(r));
          for (var n = 0; n < e.byteLength; n++) e[n] = 0;
        }
      }),
      t
    );
  })();
function Am(t) {
  var e = je(t);
  if (e.byteLength > B) {
    var r = new Ze();
    (r.update(e), (e = r.digest()));
  }
  var n = new Uint8Array(B);
  return (n.set(e), n);
}
var xm = [
  'decrypt',
  'digest',
  'encrypt',
  'exportKey',
  'generateKey',
  'importKey',
  'sign',
  'verify',
];
function Rm(t) {
  if (Cm(t) && typeof t.crypto.subtle == 'object') {
    var e = t.crypto.subtle;
    return Tm(e);
  }
  return !1;
}
function Cm(t) {
  if (typeof t == 'object' && typeof t.crypto == 'object') {
    var e = t.crypto.getRandomValues;
    return typeof e == 'function';
  }
  return !1;
}
function Tm(t) {
  return (
    t &&
    xm.every(function (e) {
      return typeof t[e] == 'function';
    })
  );
}
var vm = (function () {
  function t(e) {
    Rm(Ye()) ? (this.hash = new gm(e)) : (this.hash = new Em(e));
  }
  return (
    (t.prototype.update = function (e, r) {
      this.hash.update(je(e));
    }),
    (t.prototype.digest = function () {
      return this.hash.digest();
    }),
    (t.prototype.reset = function () {
      this.hash.reset();
    }),
    t
  );
})();
const Pm =
    ({ serviceId: t, clientVersion: e }) =>
    async (r) => {
      const n = typeof window < 'u' ? window.navigator : void 0,
        s = n?.userAgent ?? '',
        o = n?.userAgentData?.platform ?? Qn.os(s) ?? 'other',
        i = void 0,
        a = n?.userAgentData?.brands ?? [],
        c = a[a.length - 1],
        u = c?.brand ?? Qn.browser(s) ?? 'unknown',
        l = c?.version ?? 'unknown',
        d = [
          ['aws-sdk-js', e],
          ['ua', '2.1'],
          [`os/${o}`, i],
          ['lang/js'],
          ['md/browser', `${u}_${l}`],
        ];
      t && d.push([`api/${t}`, e]);
      const f = await r?.userAgentAppId?.();
      return (f && d.push([`app/${f}`]), d);
    },
  Qn = {
    os(t) {
      if (/iPhone|iPad|iPod/.test(t)) return 'iOS';
      if (/Macintosh|Mac OS X/.test(t)) return 'macOS';
      if (/Windows NT/.test(t)) return 'Windows';
      if (/Android/.test(t)) return 'Android';
      if (/Linux/.test(t)) return 'Linux';
    },
    browser(t) {
      if (/EdgiOS|EdgA|Edg\//.test(t)) return 'Microsoft Edge';
      if (/Firefox\//.test(t)) return 'Firefox';
      if (/Chrome\//.test(t)) return 'Chrome';
      if (/Safari\//.test(t)) return 'Safari';
    },
  },
  _m = (t) => () => Promise.reject(t),
  Xn = typeof TextEncoder == 'function' ? new TextEncoder() : null,
  $m = (t) => {
    if (typeof t == 'string') {
      if (Xn) return Xn.encode(t).byteLength;
      let e = t.length;
      for (let r = e - 1; r >= 0; r--) {
        const n = t.charCodeAt(r);
        (n > 127 && n <= 2047 ? e++ : n > 2047 && n <= 65535 && (e += 2),
          n >= 56320 && n <= 57343 && r--);
      }
      return e;
    } else {
      if (typeof t.byteLength == 'number') return t.byteLength;
      if (typeof t.size == 'number') return t.size;
    }
    throw new Error(`Body Length computation failed for ${t}`);
  },
  km = ['in-region', 'cross-region', 'mobile', 'standard', 'legacy'],
  Dm = ({ defaultsMode: t } = {}) =>
    kp(async () => {
      const e = typeof t == 'function' ? await t() : t;
      switch (e?.toLowerCase()) {
        case 'auto':
          return Promise.resolve(Im() ? 'mobile' : 'standard');
        case 'mobile':
        case 'in-region':
        case 'cross-region':
        case 'standard':
        case 'legacy':
          return Promise.resolve(e?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve('legacy');
        default:
          throw new Error(
            `Invalid parameter for "defaultsMode", expect ${km.join(', ')}, got ${e}`,
          );
      }
    }),
  Im = () => {
    const t = window?.navigator;
    if (t?.connection) {
      const { effectiveType: e, rtt: r, downlink: n } = t?.connection;
      if ((typeof e == 'string' && e !== '4g') || Number(r) > 100 || Number(n) < 10) return !0;
    }
    return (
      t?.userAgentData?.mobile || (typeof t?.maxTouchPoints == 'number' && t?.maxTouchPoints > 1)
    );
  };
class Mm {
  queryCompat;
  errorRegistry;
  constructor(e = !1) {
    this.queryCompat = e;
  }
  resolveRestContentType(e, r) {
    const n = r.getMemberSchemas(),
      s = Object.values(n).find((o) => !!o.getMergedTraits().httpPayload);
    if (s) {
      const o = s.getMergedTraits().mediaType;
      return (
        o || (s.isStringSchema() ? 'text/plain' : s.isBlobSchema() ? 'application/octet-stream' : e)
      );
    } else if (
      !r.isUnitSchema() &&
      Object.values(n).find((i) => {
        const {
          httpQuery: a,
          httpQueryParams: c,
          httpHeader: u,
          httpLabel: l,
          httpPrefixHeaders: d,
        } = i.getMergedTraits();
        return !a && !c && !u && !l && d === void 0;
      })
    )
      return e;
  }
  async getErrorSchemaOrThrowBaseException(e, r, n, s, o, i) {
    let a = e;
    e.includes('#') && ([, a] = e.split('#'));
    const c = { $metadata: o, $fault: n.statusCode < 500 ? 'client' : 'server' };
    if (!this.errorRegistry)
      throw new Error('@aws-sdk/core/protocols - error handler not initialized.');
    try {
      return {
        errorSchema: i?.(this.errorRegistry, a) ?? this.errorRegistry.getSchema(e),
        errorMetadata: c,
      };
    } catch {
      s.message = s.message ?? s.Message ?? 'UnknownError';
      const l = this.errorRegistry,
        d = l.getBaseException();
      if (d) {
        const p = l.getErrorCtor(d) ?? Error;
        throw this.decorateServiceException(Object.assign(new p({ name: a }), c), s);
      }
      const f = s,
        h = f?.message ?? f?.Message ?? f?.Error?.Message ?? f?.Error?.message;
      throw this.decorateServiceException(Object.assign(new Error(h), { name: a }, c), s);
    }
  }
  compose(e, r, n) {
    let s = n;
    r.includes('#') && ([s] = r.split('#'));
    const o = D.for(s),
      i = D.for('smithy.ts.sdk.synthetic.' + n);
    (e.copyFrom(o), e.copyFrom(i), (this.errorRegistry = e));
  }
  decorateServiceException(e, r = {}) {
    if (this.queryCompat) {
      const n = e.Message ?? r.Message,
        s = Fn(e, r);
      (n && (s.message = n),
        (s.Error = {
          ...s.Error,
          Type: s.Error?.Type,
          Code: s.Error?.Code,
          Message: s.Error?.message ?? s.Error?.Message ?? n,
        }));
      const o = s.$metadata.requestId;
      return (o && (s.RequestId = o), s);
    }
    return Fn(e, r);
  }
  setQueryCompatError(e, r) {
    const n = r.headers?.['x-amzn-query-error'];
    if (e !== void 0 && n != null) {
      const [s, o] = n.split(';'),
        i = Object.entries(e),
        a = { Code: s, Type: o };
      Object.assign(e, a);
      for (const [c, u] of i) a[c === 'message' ? 'Message' : c] = u;
      (delete a.__type, (e.Error = a));
    }
  }
  queryCompatOutput(e, r) {
    (e.Error && (r.Error = e.Error), e.Type && (r.Type = e.Type), e.Code && (r.Code = e.Code));
  }
  findQueryCompatibleError(e, r) {
    try {
      return e.getSchema(r);
    } catch {
      return e.find((s) => E.of(s).getMergedTraits().awsQueryError?.[0] === r);
    }
  }
}
class $r {
  serdeContext;
  setSerdeContext(e) {
    this.serdeContext = e;
  }
}
class Om {
  from;
  to;
  keys;
  constructor(e, r) {
    ((this.from = e),
      (this.to = r),
      (this.keys = new Set(Object.keys(this.from).filter((n) => n !== '__type'))));
  }
  mark(e) {
    this.keys.delete(e);
  }
  hasUnknown() {
    return this.keys.size === 1 && Object.keys(this.to).length === 0;
  }
  writeUnknown() {
    if (this.hasUnknown()) {
      const e = this.keys.values().next().value,
        r = this.from[e];
      this.to.$unknown = [e, r];
    }
  }
}
function Bm(t, e, r) {
  if (r?.source) {
    const n = r.source;
    if (
      typeof e == 'number' &&
      (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER || n !== String(e))
    )
      return n.includes('.') ? new z(n, 'bigDecimal') : BigInt(n);
  }
  return e;
}
const Nm = (t, e) => $e(t, e).then((r) => (e?.utf8Encoder ?? Ce)(r)),
  Um = (t, e) =>
    Nm(t, e).then((r) => {
      if (r.length)
        try {
          return JSON.parse(r);
        } catch (n) {
          throw (
            n?.name === 'SyntaxError' &&
              Object.defineProperty(n, '$responseBodyText', { value: r }),
            n
          );
        }
      return {};
    }),
  Lm = (t, e) => {
    const r = (o, i) => Object.keys(o).find((a) => a.toLowerCase() === i.toLowerCase()),
      n = (o) => {
        let i = o;
        return (
          typeof i == 'number' && (i = i.toString()),
          i.indexOf(',') >= 0 && (i = i.split(',')[0]),
          i.indexOf(':') >= 0 && (i = i.split(':')[0]),
          i.indexOf('#') >= 0 && (i = i.split('#')[1]),
          i
        );
      },
      s = r(t.headers, 'x-amzn-errortype');
    if (s !== void 0) return n(t.headers[s]);
    if (e && typeof e == 'object') {
      const o = r(e, 'code');
      if (o && e[o] !== void 0) return n(e[o]);
      if (e.__type !== void 0) return n(e.__type);
    }
  };
class Fm extends $r {
  settings;
  constructor(e) {
    (super(), (this.settings = e));
  }
  async read(e, r) {
    return this._read(e, typeof r == 'string' ? JSON.parse(r, Bm) : await Um(r, this.serdeContext));
  }
  readObject(e, r) {
    return this._read(e, r);
  }
  _read(e, r) {
    const n = r !== null && typeof r == 'object',
      s = E.of(e);
    if (n) {
      if (s.isStructSchema()) {
        const i = r,
          a = s.isUnionSchema(),
          c = {};
        let u;
        const { jsonName: l } = this.settings;
        l && (u = {});
        let d;
        a && (d = new Om(i, c));
        for (const [f, h] of s.structIterator()) {
          let p = f;
          (l && ((p = h.getMergedTraits().jsonName ?? p), (u[p] = f)),
            a && d.mark(p),
            i[p] != null && (c[f] = this._read(h, i[p])));
        }
        if (a) d.writeUnknown();
        else if (typeof i.__type == 'string')
          for (const [f, h] of Object.entries(i)) {
            const p = l ? (u[f] ?? f) : f;
            p in c || (c[p] = h);
          }
        return c;
      }
      if (Array.isArray(r) && s.isListSchema()) {
        const i = s.getValueSchema(),
          a = [];
        for (const c of r) a.push(this._read(i, c));
        return a;
      }
      if (s.isMapSchema()) {
        const i = s.getValueSchema(),
          a = {};
        for (const [c, u] of Object.entries(r)) a[c] = this._read(i, u);
        return a;
      }
    }
    if (s.isBlobSchema() && typeof r == 'string') return fe(r);
    const o = s.getMergedTraits().mediaType;
    if (s.isStringSchema() && typeof r == 'string' && o)
      return o === 'application/json' || o.endsWith('+json') ? G.from(r) : r;
    if (s.isTimestampSchema() && r != null)
      switch (mt(s, this.settings)) {
        case 5:
          return wd(r);
        case 6:
          return Ad(r);
        case 7:
          return xd(r);
        default:
          return (
            console.warn('Missing timestamp format, parsing value with Date constructor:', r),
            new Date(r)
          );
      }
    if (s.isBigIntegerSchema() && (typeof r == 'number' || typeof r == 'string')) return BigInt(r);
    if (s.isBigDecimalSchema() && r != null) {
      if (r instanceof z) return r;
      const i = r;
      return i.type === 'bigDecimal' && 'string' in i
        ? new z(i.string, i.type)
        : new z(String(r), 'bigDecimal');
    }
    if (s.isNumericSchema() && typeof r == 'string') {
      switch (r) {
        case 'Infinity':
          return 1 / 0;
        case '-Infinity':
          return -1 / 0;
        case 'NaN':
          return NaN;
      }
      return r;
    }
    if (s.isDocumentSchema())
      if (n) {
        const i = Array.isArray(r) ? [] : {};
        for (const [a, c] of Object.entries(r))
          c instanceof z ? (i[a] = c) : (i[a] = this._read(s, c));
        return i;
      } else return structuredClone(r);
    return r;
  }
}
const Yn = 'Ν';
class zm {
  values = new Map();
  counter = 0;
  stage = 0;
  createReplacer() {
    if (this.stage === 1)
      throw new Error('@aws-sdk/core/protocols - JsonReplacer already created.');
    if (this.stage === 2) throw new Error('@aws-sdk/core/protocols - JsonReplacer exhausted.');
    return (
      (this.stage = 1),
      (e, r) => {
        if (r instanceof z) {
          const n = `${Yn + 'nv' + this.counter++}_` + r.string;
          return (this.values.set(`"${n}"`, r.string), n);
        }
        if (typeof r == 'bigint') {
          const n = r.toString(),
            s = `${Yn + 'b' + this.counter++}_` + n;
          return (this.values.set(`"${s}"`, n), s);
        }
        return r;
      }
    );
  }
  replaceInJson(e) {
    if (this.stage === 0)
      throw new Error('@aws-sdk/core/protocols - JsonReplacer not created yet.');
    if (this.stage === 2) throw new Error('@aws-sdk/core/protocols - JsonReplacer exhausted.');
    if (((this.stage = 2), this.counter === 0)) return e;
    for (const [r, n] of this.values) e = e.replace(r, n);
    return e;
  }
}
class Hm extends $r {
  settings;
  buffer;
  useReplacer = !1;
  rootSchema;
  constructor(e) {
    (super(), (this.settings = e));
  }
  write(e, r) {
    ((this.rootSchema = E.of(e)), (this.buffer = this._write(this.rootSchema, r)));
  }
  writeDiscriminatedDocument(e, r) {
    (this.write(e, r),
      typeof this.buffer == 'object' && (this.buffer.__type = E.of(e).getName(!0)));
  }
  flush() {
    const { rootSchema: e, useReplacer: r } = this;
    if (
      ((this.rootSchema = void 0),
      (this.useReplacer = !1),
      e?.isStructSchema() || e?.isDocumentSchema())
    ) {
      if (!r) return JSON.stringify(this.buffer);
      const n = new zm();
      return n.replaceInJson(JSON.stringify(this.buffer, n.createReplacer(), 0));
    }
    return this.buffer;
  }
  _write(e, r, n) {
    const s = r !== null && typeof r == 'object',
      o = E.of(e);
    if (s) {
      if (o.isStructSchema()) {
        const i = r,
          a = {},
          { jsonName: c } = this.settings;
        let u;
        c && (u = {});
        for (const [l, d] of o.structIterator()) {
          const f = this._write(d, i[l], o);
          if (f !== void 0) {
            let h = l;
            (c && ((h = d.getMergedTraits().jsonName ?? l), (u[l] = h)), (a[h] = f));
          }
        }
        if (o.isUnionSchema() && Object.keys(a).length === 0) {
          const { $unknown: l } = i;
          if (Array.isArray(l)) {
            const [d, f] = l;
            a[d] = this._write(15, f);
          }
        } else if (typeof i.__type == 'string')
          for (const [l, d] of Object.entries(i)) {
            const f = c ? (u[l] ?? l) : l;
            f in a || (a[f] = this._write(15, d));
          }
        return a;
      }
      if (Array.isArray(r) && o.isListSchema()) {
        const i = o.getValueSchema(),
          a = [],
          c = !!o.getMergedTraits().sparse;
        for (const u of r) (c || u != null) && a.push(this._write(i, u));
        return a;
      }
      if (o.isMapSchema()) {
        const i = o.getValueSchema(),
          a = {},
          c = !!o.getMergedTraits().sparse;
        for (const [u, l] of Object.entries(r)) (c || l != null) && (a[u] = this._write(i, l));
        return a;
      }
      if (r instanceof Uint8Array && (o.isBlobSchema() || o.isDocumentSchema()))
        return o === this.rootSchema ? r : (this.serdeContext?.base64Encoder ?? pe)(r);
      if (r instanceof Date && (o.isTimestampSchema() || o.isDocumentSchema()))
        switch (mt(o, this.settings)) {
          case 5:
            return r.toISOString().replace('.000Z', 'Z');
          case 6:
            return ao(r);
          case 7:
            return r.getTime() / 1e3;
          default:
            return (
              console.warn('Missing timestamp format, using epoch seconds', r),
              r.getTime() / 1e3
            );
        }
      r instanceof z && (this.useReplacer = !0);
    }
    if (!(r === null && n?.isStructSchema())) {
      if (o.isStringSchema()) {
        if (typeof r > 'u' && o.isIdempotencyToken()) return br();
        const i = o.getMergedTraits().mediaType;
        return r != null && i && (i === 'application/json' || i.endsWith('+json')) ? G.from(r) : r;
      }
      if (typeof r == 'number' && o.isNumericSchema())
        return Math.abs(r) === 1 / 0 || isNaN(r) ? String(r) : r;
      if (typeof r == 'string' && o.isBlobSchema())
        return o === this.rootSchema ? r : (this.serdeContext?.base64Encoder ?? pe)(r);
      if ((typeof r == 'bigint' && (this.useReplacer = !0), o.isDocumentSchema()))
        if (s) {
          const i = Array.isArray(r) ? [] : {};
          for (const [a, c] of Object.entries(r))
            c instanceof z ? ((this.useReplacer = !0), (i[a] = c)) : (i[a] = this._write(o, c));
          return i;
        } else return structuredClone(r);
      return r;
    }
  }
}
class jm extends $r {
  settings;
  constructor(e) {
    (super(), (this.settings = e));
  }
  createSerializer() {
    const e = new Hm(this.settings);
    return (e.setSerdeContext(this.serdeContext), e);
  }
  createDeserializer() {
    const e = new Fm(this.settings);
    return (e.setSerdeContext(this.serdeContext), e);
  }
}
class Vm extends jd {
  serializer;
  deserializer;
  codec;
  mixin = new Mm();
  constructor({ defaultNamespace: e, errorTypeRegistries: r }) {
    super({ defaultNamespace: e, errorTypeRegistries: r });
    const n = { timestampFormat: { useTrait: !0, default: 7 }, httpBindings: !0, jsonName: !0 };
    ((this.codec = new jm(n)),
      (this.serializer = new Gd(this.codec.createSerializer(), n)),
      (this.deserializer = new Wd(this.codec.createDeserializer(), n)));
  }
  getShapeId() {
    return 'aws.protocols#restJson1';
  }
  getPayloadCodec() {
    return this.codec;
  }
  setSerdeContext(e) {
    (this.codec.setSerdeContext(e), super.setSerdeContext(e));
  }
  async serializeRequest(e, r, n) {
    const s = await super.serializeRequest(e, r, n),
      o = E.of(e.input);
    if (!s.headers['content-type']) {
      const i = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
      i && (s.headers['content-type'] = i);
    }
    return (
      s.body == null &&
        s.headers['content-type'] === this.getDefaultContentType() &&
        (s.body = '{}'),
      s
    );
  }
  async deserializeResponse(e, r, n) {
    const s = await super.deserializeResponse(e, r, n),
      o = E.of(e.output);
    for (const [i, a] of o.structIterator())
      a.getMemberTraits().httpPayload && !(i in s) && (s[i] = null);
    return s;
  }
  async handleError(e, r, n, s, o) {
    const i = Lm(n, s) ?? 'Unknown';
    this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace);
    const { errorSchema: a, errorMetadata: c } =
        await this.mixin.getErrorSchemaOrThrowBaseException(
          i,
          this.options.defaultNamespace,
          n,
          s,
          o,
        ),
      u = E.of(a),
      l = s.message ?? s.Message ?? 'UnknownError',
      d = this.compositeErrorRegistry.getErrorCtor(a) ?? Error,
      f = new d(l);
    await this.deserializeHttpMessage(a, r, n, s);
    const h = {};
    for (const [p, g] of u.structIterator()) {
      const m = g.getMergedTraits().jsonName ?? p;
      h[p] = this.codec.createDeserializer().readObject(g, s[m]);
    }
    throw this.mixin.decorateServiceException(
      Object.assign(f, c, { $fault: u.getMergedTraits().error, message: l }, h),
      s,
    );
  }
  getDefaultContentType() {
    return 'application/json';
  }
}
const Xo = 'required',
  V = 'fn',
  W = 'argv',
  Te = 'ref',
  Zn = !0,
  es = 'isSet',
  Ve = 'booleanEquals',
  me = 'error',
  _e = 'endpoint',
  v = 'tree',
  kr = 'PartitionResult',
  ts = { [Xo]: !1, type: 'string' },
  rs = { [Xo]: !0, default: !1, type: 'boolean' },
  ns = { [Te]: 'Endpoint' },
  Yo = { [V]: Ve, [W]: [{ [Te]: 'UseFIPS' }, !0] },
  Zo = { [V]: Ve, [W]: [{ [Te]: 'UseDualStack' }, !0] },
  H = {},
  ss = { [V]: 'getAttr', [W]: [{ [Te]: kr }, 'supportsFIPS'] },
  os = { [V]: Ve, [W]: [!0, { [V]: 'getAttr', [W]: [{ [Te]: kr }, 'supportsDualStack'] }] },
  is = [Yo],
  as = [Zo],
  cs = [{ [Te]: 'Region' }],
  Wm = {
    parameters: { Region: ts, UseDualStack: rs, UseFIPS: rs, Endpoint: ts },
    rules: [
      {
        conditions: [{ [V]: es, [W]: [ns] }],
        rules: [
          {
            conditions: is,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: me,
          },
          {
            rules: [
              {
                conditions: as,
                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                type: me,
              },
              { endpoint: { url: ns, properties: H, headers: H }, type: _e },
            ],
            type: v,
          },
        ],
        type: v,
      },
      {
        rules: [
          {
            conditions: [{ [V]: es, [W]: cs }],
            rules: [
              {
                conditions: [{ [V]: 'aws.partition', [W]: cs, assign: kr }],
                rules: [
                  {
                    conditions: [Yo, Zo],
                    rules: [
                      {
                        conditions: [{ [V]: Ve, [W]: [Zn, ss] }, os],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: H,
                                  headers: H,
                                },
                                type: _e,
                              },
                            ],
                            type: v,
                          },
                        ],
                        type: v,
                      },
                      {
                        error:
                          'FIPS and DualStack are enabled, but this partition does not support one or both',
                        type: me,
                      },
                    ],
                    type: v,
                  },
                  {
                    conditions: is,
                    rules: [
                      {
                        conditions: [{ [V]: Ve, [W]: [ss, Zn] }],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}',
                                  properties: H,
                                  headers: H,
                                },
                                type: _e,
                              },
                            ],
                            type: v,
                          },
                        ],
                        type: v,
                      },
                      {
                        error: 'FIPS is enabled but this partition does not support FIPS',
                        type: me,
                      },
                    ],
                    type: v,
                  },
                  {
                    conditions: as,
                    rules: [
                      {
                        conditions: [os],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: H,
                                  headers: H,
                                },
                                type: _e,
                              },
                            ],
                            type: v,
                          },
                        ],
                        type: v,
                      },
                      {
                        error: 'DualStack is enabled but this partition does not support DualStack',
                        type: me,
                      },
                    ],
                    type: v,
                  },
                  {
                    rules: [
                      {
                        endpoint: {
                          url: 'https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}',
                          properties: H,
                          headers: H,
                        },
                        type: _e,
                      },
                    ],
                    type: v,
                  },
                ],
                type: v,
              },
            ],
            type: v,
          },
          { error: 'Invalid Configuration: Missing Region', type: me },
        ],
        type: v,
      },
    ],
  },
  qm = Wm,
  Gm = new rf({ size: 50, params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'] }),
  Jm = (t, e = {}) => Gm.get(t, () => Af(qm, { endpointParams: t, logger: e.logger }));
at.aws = Co;
class _ extends we {
  constructor(e) {
    (super(e), Object.setPrototypeOf(this, _.prototype));
  }
}
class Dr extends _ {
  name = 'AccessDeniedException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'AccessDeniedException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Dr.prototype));
  }
}
class Ir extends _ {
  name = 'InternalServerException';
  $fault = 'server';
  constructor(e) {
    (super({ name: 'InternalServerException', $fault: 'server', ...e }),
      Object.setPrototypeOf(this, Ir.prototype));
  }
}
class Mr extends _ {
  name = 'ThrottlingException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ThrottlingException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Mr.prototype));
  }
}
class Or extends _ {
  name = 'ValidationException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ValidationException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Or.prototype));
  }
}
class Br extends _ {
  name = 'ConflictException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ConflictException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Br.prototype));
  }
}
class Nr extends _ {
  name = 'ResourceNotFoundException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ResourceNotFoundException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Nr.prototype));
  }
}
class Ur extends _ {
  name = 'ServiceQuotaExceededException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ServiceQuotaExceededException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Ur.prototype));
  }
}
class Lr extends _ {
  name = 'ServiceUnavailableException';
  $fault = 'server';
  constructor(e) {
    (super({ name: 'ServiceUnavailableException', $fault: 'server', ...e }),
      Object.setPrototypeOf(this, Lr.prototype));
  }
}
class Fr extends _ {
  name = 'ModelErrorException';
  $fault = 'client';
  originalStatusCode;
  resourceName;
  constructor(e) {
    (super({ name: 'ModelErrorException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Fr.prototype),
      (this.originalStatusCode = e.originalStatusCode),
      (this.resourceName = e.resourceName));
  }
}
class zr extends _ {
  name = 'ModelNotReadyException';
  $fault = 'client';
  $retryable = {};
  constructor(e) {
    (super({ name: 'ModelNotReadyException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, zr.prototype));
  }
}
class Hr extends _ {
  name = 'ModelTimeoutException';
  $fault = 'client';
  constructor(e) {
    (super({ name: 'ModelTimeoutException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, Hr.prototype));
  }
}
class jr extends _ {
  name = 'ModelStreamErrorException';
  $fault = 'client';
  originalStatusCode;
  originalMessage;
  constructor(e) {
    (super({ name: 'ModelStreamErrorException', $fault: 'client', ...e }),
      Object.setPrototypeOf(this, jr.prototype),
      (this.originalStatusCode = e.originalStatusCode),
      (this.originalMessage = e.originalMessage));
  }
}
const Km = 'Accept',
  Qm = 'AccessDeniedException',
  Xm = 'Body',
  Ym = 'ConflictException',
  Vr = 'Content-Type',
  Zm = 'InvokeModel',
  eg = 'InvokeModelRequest',
  tg = 'InvokeModelResponse',
  rg = 'InvokeModelWithResponseStream',
  ng = 'InvokeModelWithResponseStreamRequest',
  sg = 'InvokeModelWithResponseStreamResponse',
  og = 'InternalServerException',
  ig = 'ModelErrorException',
  ag = 'ModelNotReadyException',
  cg = 'ModelStreamErrorException',
  ug = 'ModelTimeoutException',
  lg = 'PartBody',
  dg = 'PayloadPart',
  fg = 'ResourceNotFoundException',
  hg = 'ResponseStream',
  pg = 'ServiceQuotaExceededException',
  mg = 'ServiceUnavailableException',
  gg = 'ThrottlingException',
  yg = 'ValidationException',
  wg = 'X-Amzn-Bedrock-Accept',
  bg = 'X-Amzn-Bedrock-Content-Type',
  ei = 'X-Amzn-Bedrock-GuardrailIdentifier',
  ti = 'X-Amzn-Bedrock-GuardrailVersion',
  wt = 'X-Amzn-Bedrock-PerformanceConfig-Latency',
  bt = 'X-Amzn-Bedrock-Service-Tier',
  ri = 'X-Amzn-Bedrock-Trace',
  ni = 'accept',
  Sg = 'bytes',
  St = 'body',
  J = 'client',
  Et = 'contentType',
  Eg = 'chunk',
  U = 'error',
  si = 'guardrailIdentifier',
  oi = 'guardrailVersion',
  ii = 'http',
  L = 'httpError',
  x = 'httpHeader',
  Ag = 'internalServerException',
  F = 'message',
  ai = 'modelId',
  xg = 'modelStreamErrorException',
  Rg = 'modelTimeoutException',
  Cg = 'originalMessage',
  ci = 'originalStatusCode',
  At = 'performanceConfigLatency',
  Tg = 'resourceName',
  ui = 'smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime',
  xt = 'serviceTier',
  vg = 'serviceUnavailableException',
  li = 'server',
  Pg = 'streaming',
  _g = 'throttlingException',
  di = 'trace',
  $g = 'validationException',
  A = 'com.amazonaws.bedrockruntime',
  fi = D.for(ui);
var kg = [-3, ui, 'BedrockRuntimeServiceException', 0, [], []];
fi.registerError(kg, _);
const M = D.for(A);
var Dg = [-3, A, Qm, { [U]: J, [L]: 403 }, [F], [0]];
M.registerError(Dg, Dr);
var Ig = [-3, A, Ym, { [U]: J, [L]: 400 }, [F], [0]];
M.registerError(Ig, Br);
var hi = [-3, A, og, { [U]: li, [L]: 500 }, [F], [0]];
M.registerError(hi, Ir);
var Mg = [-3, A, ig, { [U]: J, [L]: 424 }, [F, ci, Tg], [0, 1, 0]];
M.registerError(Mg, Fr);
var Og = [-3, A, ag, { [U]: J, [L]: 429 }, [F], [0]];
M.registerError(Og, zr);
var pi = [-3, A, cg, { [U]: J, [L]: 424 }, [F, ci, Cg], [0, 1, 0]];
M.registerError(pi, jr);
var mi = [-3, A, ug, { [U]: J, [L]: 408 }, [F], [0]];
M.registerError(mi, Hr);
var Bg = [-3, A, fg, { [U]: J, [L]: 404 }, [F], [0]];
M.registerError(Bg, Nr);
var Ng = [-3, A, pg, { [U]: J, [L]: 400 }, [F], [0]];
M.registerError(Ng, Ur);
var gi = [-3, A, mg, { [U]: li, [L]: 503 }, [F], [0]];
M.registerError(gi, Lr);
var yi = [-3, A, gg, { [U]: J, [L]: 429 }, [F], [0]];
M.registerError(yi, Mr);
var wi = [-3, A, yg, { [U]: J, [L]: 400 }, [F], [0]];
M.registerError(wi, Or);
const Ug = [fi, M];
var Wr = [0, A, Xm, 8, 21],
  Lg = [0, A, lg, 8, 21],
  Fg = [
    3,
    A,
    eg,
    0,
    [ai, St, Et, ni, di, si, oi, At, xt],
    [
      [0, 1],
      [() => Wr, 16],
      [0, { [x]: Vr }],
      [0, { [x]: Km }],
      [0, { [x]: ri }],
      [0, { [x]: ei }],
      [0, { [x]: ti }],
      [0, { [x]: wt }],
      [0, { [x]: bt }],
    ],
    1,
  ],
  zg = [
    3,
    A,
    tg,
    0,
    [St, Et, At, xt],
    [
      [() => Wr, 16],
      [0, { [x]: Vr }],
      [0, { [x]: wt }],
      [0, { [x]: bt }],
    ],
    2,
  ],
  Hg = [
    3,
    A,
    ng,
    0,
    [ai, St, Et, ni, di, si, oi, At, xt],
    [
      [0, 1],
      [() => Wr, 16],
      [0, { [x]: Vr }],
      [0, { [x]: wg }],
      [0, { [x]: ri }],
      [0, { [x]: ei }],
      [0, { [x]: ti }],
      [0, { [x]: wt }],
      [0, { [x]: bt }],
    ],
    1,
  ],
  jg = [
    3,
    A,
    sg,
    0,
    [St, Et, At, xt],
    [
      [() => Wg, 16],
      [0, { [x]: bg }],
      [0, { [x]: wt }],
      [0, { [x]: bt }],
    ],
    2,
  ],
  Vg = [3, A, dg, 8, [Sg], [[() => Lg, 0]]],
  Wg = [
    4,
    A,
    hg,
    { [Pg]: 1 },
    [Eg, Ag, xg, $g, _g, Rg, vg],
    [
      [() => Vg, 0],
      [() => hi, 0],
      [() => pi, 0],
      [() => wi, 0],
      [() => yi, 0],
      [() => mi, 0],
      [() => gi, 0],
    ],
  ],
  qg = [9, A, Zm, { [ii]: ['POST', '/model/{modelId}/invoke', 200] }, () => Fg, () => zg],
  Gg = [
    9,
    A,
    rg,
    { [ii]: ['POST', '/model/{modelId}/invoke-with-response-stream', 200] },
    () => Hg,
    () => jg,
  ];
const Jg = (t) => ({
    apiVersion: '2023-09-30',
    base64Decoder: t?.base64Decoder ?? fe,
    base64Encoder: t?.base64Encoder ?? pe,
    disableHostPrefix: t?.disableHostPrefix ?? !1,
    endpointProvider: t?.endpointProvider ?? Jm,
    extensions: t?.extensions ?? [],
    httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? um,
    httpAuthSchemes: t?.httpAuthSchemes ?? [
      {
        schemeId: 'aws.auth#sigv4',
        identityProvider: (e) => e.getIdentityProvider('aws.auth#sigv4'),
        signer: new $p(),
      },
      {
        schemeId: 'smithy.api#httpBearerAuth',
        identityProvider: (e) => e.getIdentityProvider('smithy.api#httpBearerAuth'),
        signer: new Qd(),
      },
    ],
    logger: t?.logger ?? new zo(),
    protocol: t?.protocol ?? Vm,
    protocolSettings: t?.protocolSettings ?? {
      defaultNamespace: 'com.amazonaws.bedrockruntime',
      errorTypeRegistries: Ug,
      version: '2023-09-30',
      serviceTarget: 'AmazonBedrockFrontendService',
    },
    serviceId: t?.serviceId ?? 'Bedrock Runtime',
    urlParser: t?.urlParser ?? Ae,
    utf8Decoder: t?.utf8Decoder ?? he,
    utf8Encoder: t?.utf8Encoder ?? Ce,
  }),
  Kg = (t) => {
    const e = Dm(t),
      r = () => e().then(hp),
      n = Jg(t);
    return {
      ...n,
      ...t,
      runtime: 'browser',
      defaultsMode: e,
      bodyLengthChecker: t?.bodyLengthChecker ?? $m,
      credentialDefaultProvider:
        t?.credentialDefaultProvider ??
        ((s) => () => Promise.reject(new Error('Credential is missing'))),
      defaultUserAgentProvider:
        t?.defaultUserAgentProvider ?? Pm({ serviceId: n.serviceId, clientVersion: hm.version }),
      eventStreamPayloadHandlerProvider: t?.eventStreamPayloadHandlerProvider ?? Fh,
      eventStreamSerdeProvider: t?.eventStreamSerdeProvider ?? $h,
      maxAttempts: t?.maxAttempts ?? ct,
      region: t?.region ?? _m('Region is missing'),
      requestHandler: vr.create(t?.requestHandler ?? r, Fe.create(r)),
      retryMode: t?.retryMode ?? (async () => (await r()).retryMode || $f),
      sha256: t?.sha256 ?? vm,
      streamCollector: t?.streamCollector ?? no,
      useDualstackEndpoint: t?.useDualstackEndpoint ?? (() => Promise.resolve(zh)),
      useFipsEndpoint: t?.useFipsEndpoint ?? (() => Promise.resolve(Hh)),
    };
  },
  Qg = (t) => ({
    setRegion(e) {
      t.region = e;
    },
    region() {
      return t.region;
    },
  }),
  Xg = (t) => ({ region: t.region() }),
  Yg = (t) => {
    const e = t.httpAuthSchemes;
    let r = t.httpAuthSchemeProvider,
      n = t.credentials,
      s = t.token;
    return {
      setHttpAuthScheme(o) {
        const i = e.findIndex((a) => a.schemeId === o.schemeId);
        i === -1 ? e.push(o) : e.splice(i, 1, o);
      },
      httpAuthSchemes() {
        return e;
      },
      setHttpAuthSchemeProvider(o) {
        r = o;
      },
      httpAuthSchemeProvider() {
        return r;
      },
      setCredentials(o) {
        n = o;
      },
      credentials() {
        return n;
      },
      setToken(o) {
        s = o;
      },
      token() {
        return s;
      },
    };
  },
  Zg = (t) => ({
    httpAuthSchemes: t.httpAuthSchemes(),
    httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
    credentials: t.credentials(),
    token: t.token(),
  }),
  ey = (t, e) => {
    const r = Object.assign(Qg(t), wp(t), xl(t), Yg(t));
    return (e.forEach((n) => n.configure(r)), Object.assign(t, Xg(r), bp(r), Rl(r), Zg(r)));
  };
class ty extends dp {
  config;
  constructor(...[e]) {
    const r = Kg(e || {});
    (super(r), (this.initConfig = r));
    const n = dm(r),
      s = tf(n),
      o = lp(s),
      i = Wh(o),
      a = i,
      c = cp(a),
      u = qh(c),
      l = lm(u),
      d = Al(l),
      f = Bh(d),
      h = ey(f, e?.extensions || []);
    ((this.config = h),
      this.middlewareStack.use(od(this.config)),
      this.middlewareStack.use(rh(this.config)),
      this.middlewareStack.use(Tp(this.config)),
      this.middlewareStack.use(Kh(this.config)),
      this.middlewareStack.use(Pl(this.config)),
      this.middlewareStack.use(kl(this.config)),
      this.middlewareStack.use(Ml(this.config)),
      this.middlewareStack.use(
        Ll(this.config, {
          httpAuthSchemeParametersProvider: im,
          identityProviderConfigProvider: async (p) =>
            new Kd({ 'aws.auth#sigv4': p.credentials, 'smithy.api#httpBearerAuth': p.token }),
        }),
      ),
      this.middlewareStack.use(Vl(this.config)));
  }
  destroy() {
    super.destroy();
  }
}
class ry extends Pr.classBuilder()
  .ep(Ko)
  .m(function (e, r, n, s) {
    return [Lo(n, e.getEndpointParameterInstructions())];
  })
  .s('AmazonBedrockFrontendService', 'InvokeModel', {})
  .n('BedrockRuntimeClient', 'InvokeModelCommand')
  .sc(qg)
  .build() {}
class us extends Pr.classBuilder()
  .ep(Ko)
  .m(function (e, r, n, s) {
    return [Lo(n, e.getEndpointParameterInstructions())];
  })
  .s('AmazonBedrockFrontendService', 'InvokeModelWithResponseStream', {
    eventStream: { output: !0 },
  })
  .n('BedrockRuntimeClient', 'InvokeModelWithResponseStreamCommand')
  .sc(Gg)
  .build() {}
var ls = {};
function ny(t) {
  const e = '<s>[INST] ',
    r = ' [/INST]',
    n = t.map(({ content: s, role: o }, i) => {
      switch (o) {
        case 'user':
          return s.trim();
        case 'assistant':
          return ` [/INST] ${s}</s><s>[INST] `;
        case 'function':
          throw new Error('Llama 2 does not support function calls.');
        default: {
          if (o === 'system' && i === 0)
            return `<<SYS>>
${s}
<</SYS>>

`;
          throw new Error(`Invalid message role: ${o}`);
        }
      }
    });
  return e + n.join('') + r;
}
class gy {
  client;
  id;
  region;
  constructor(e = {}) {
    const { id: r, region: n, accessKeyId: s, accessKeySecret: o, sessionToken: i } = e;
    if (!(s && o)) throw q.createError(N.InvalidBedrockCredentials);
    ((this.region = n ?? 'us-east-1'),
      (this.id = r ?? tt.Bedrock),
      (this.client = new ty({
        credentials: { accessKeyId: s, secretAccessKey: o, sessionToken: i },
        region: this.region,
      })));
  }
  async chat(e, r) {
    return e.model.startsWith('meta') ? this.invokeLlamaModel(e, r) : this.invokeClaudeModel(e, r);
  }
  async embeddings(e, r) {
    const s = (Array.isArray(e.input) ? e.input : [e.input]).map((o) =>
      this.invokeEmbeddingModel({ dimensions: e.dimensions, input: o, model: e.model }, r),
    );
    return Promise.all(s);
  }
  invokeEmbeddingModel = async (e, r) => {
    const n = new ry({
      accept: 'application/json',
      body: JSON.stringify({ dimensions: e.dimensions, inputText: e.input, normalize: !0 }),
      contentType: 'application/json',
      modelId: e.model,
    });
    try {
      const s = await this.client.send(n, { abortSignal: r?.signal });
      return JSON.parse(new TextDecoder().decode(s.body)).embedding;
    } catch (s) {
      const o = s;
      throw q.chat({
        error: { body: o.$metadata, message: o.message, type: o.name },
        errorType: N.ProviderBizError,
        provider: this.id,
        region: this.region,
      });
    }
  };
  invokeClaudeModel = async (e, r) => {
    const {
        effort: n,
        enabledContextCaching: s = !0,
        max_tokens: o,
        messages: i,
        model: a,
        temperature: c,
        top_p: u,
        tools: l,
        thinking: d,
      } = e,
      f = Date.now(),
      h = i.find(($) => $.role === 'system'),
      p = i.filter(($) => $.role !== 'system'),
      g = typeof h?.content == 'string' && h.content.trim() ? h.content : void 0,
      { bedrock: m } = await lt(async () => {
        const { bedrock: $ } = await import('./providerConfig-qS2Xx-oI.js').then((Y) => Y.a4);
        return { bedrock: $ };
      }, []),
      y = await Oi({ max_tokens: o, model: a, providerModels: m, thinking: d }),
      w = g
        ? [{ cache_control: s ? { type: 'ephemeral' } : void 0, text: g, type: 'text' }]
        : void 0,
      S = Bi(l, { enabledContextCaching: s }),
      b = await Ni(p, { enabledContextCaching: s });
    a.includes('-4-6') && b.at(-1)?.role === 'assistant' && b.pop();
    const C = {
      anthropic_version: 'bedrock-2023-05-31',
      max_tokens: y,
      messages: b,
      system: w,
      tools: S,
    };
    let O;
    if (d && (d.type === 'enabled' || d.type === 'adaptive')) {
      const $ =
        d.type === 'enabled'
          ? { budget_tokens: Math.min(d?.budget_tokens || 1024, y - 1), type: 'enabled' }
          : { type: 'adaptive' };
      O = {
        ...C,
        ...(d.type === 'adaptive' && n ? { output_config: { effort: n } } : {}),
        thinking: $,
      };
    } else {
      const $ = Ui(
        a,
        { temperature: c, top_p: u },
        { normalizeTemperature: !0, preferTemperature: !0 },
      );
      O = { ...C, temperature: $.temperature, top_p: $.top_p };
    }
    const bi = new us({
      accept: 'application/json',
      body: JSON.stringify(O),
      contentType: 'application/json',
      modelId: vi[a] || a,
    });
    try {
      const $ = await this.client.send(bi, { abortSignal: r?.signal }),
        Y = nt($),
        [Rt, Si] = Y.tee();
      ls.DEBUG_BEDROCK_CHAT_COMPLETION === '1' && rt(Si).catch(console.error);
      const Ei = await Li(e.model, this.id),
        Gr = Fi({ ...e, enabledContextCaching: s }, C),
        Ai = Gr ? { lookupParams: { ttl: Gr } } : void 0;
      return Be(
        Vi(Rt, {
          callbacks: r?.callback,
          inputStartAt: f,
          payload: { model: a, pricing: Ei, pricingOptions: Ai, provider: this.id },
        }),
        { headers: r?.headers },
      );
    } catch ($) {
      const Y = $,
        Rt = zi(Y.message) ? N.ExceededContextWindow : N.ProviderBizError;
      throw q.chat({
        error: { body: Y.$metadata, message: Y.message, type: Y.name },
        errorType: Rt,
        provider: this.id,
        region: this.region,
      });
    }
  };
  invokeLlamaModel = async (e, r) => {
    const { max_tokens: n, messages: s, model: o } = e,
      i = new us({
        accept: 'application/json',
        body: JSON.stringify({ max_gen_len: n || 400, prompt: ny(s) }),
        contentType: 'application/json',
        modelId: o,
      });
    try {
      const a = await this.client.send(i),
        c = nt(a),
        [u, l] = c.tee();
      return (
        ls.DEBUG_BEDROCK_CHAT_COMPLETION === '1' && rt(l).catch(console.error),
        Be(qi(u, r?.callback), { headers: r?.headers })
      );
    } catch (a) {
      const c = a;
      throw q.chat({
        error: { body: c.$metadata, message: c.message, region: this.region, type: c.name },
        errorType: N.ProviderBizError,
        provider: this.id,
        region: this.region,
      });
    }
  };
}
class sy {
  textDecoder = new TextDecoder();
  buffer = '';
  parseChunk(e, r) {
    const n = /^data: /,
      s = e.replace(n, ''),
      o = JSON.parse(s);
    o?.response &&
      (r.enqueue(`event: text
`),
      r.enqueue(`data: ${JSON.stringify(o.response)}

`));
  }
  async transform(e, r) {
    let n = this.textDecoder.decode(e);
    this.buffer.trim() !== '' && ((n = this.buffer + n), (this.buffer = ''));
    const s = n.split(`

`);
    for (let i = 0; i < s.length - 1; i++) {
      if (/\[DONE]/.test(s[i].trim())) return;
      this.parseChunk(s[i], r);
    }
    const o = s.at(-1);
    o.trim() !== '' && (this.buffer += o);
  }
}
const qr = 'https://api.cloudflare.com';
function oy(t) {
  return `${qr}/client/v4/accounts/${t}/ai/run/`;
}
function ds(t) {
  return t.replace(/\/[\da-f]{32}\//i, '/****/');
}
function fs(t) {
  const e = new URL(t),
    { protocol: r, hostname: n, port: s, search: o } = e;
  let { pathname: i } = e;
  if (t.startsWith(qr)) return `${r}//${n}${s ? `:${s}` : ''}${ds(i)}${o}`;
  {
    const a = Hi(`${r}//${n}${s ? `:${s}` : ''}`);
    return (a.endsWith('/') && i.startsWith('/') && (i = i.slice(1)), `${a}${ds(i)}${o}`);
  }
}
var iy = {};
class yy {
  baseURL;
  accountID;
  apiKey;
  constructor({ apiKey: e, baseURLOrAccountID: r } = {}) {
    if (!r) throw q.createError(N.InvalidProviderAPIKey);
    if (r.startsWith('http'))
      ((this.baseURL = r.endsWith('/') ? r : r + '/'),
        (this.accountID = r.replaceAll(/^.*\/([\da-f]{32})\/.*$/gi, '$1')));
    else {
      if (!e) throw q.createError(N.InvalidProviderAPIKey);
      ((this.accountID = r), (this.baseURL = oy(r)));
    }
    this.apiKey = e;
  }
  async chat(e, r) {
    try {
      const { model: n, tools: s, apiMode: o, ...i } = e,
        a = s?.map((h) => h.function),
        c = r?.headers || {};
      this.apiKey && (c.Authorization = `Bearer ${this.apiKey}`);
      const u = new URL(n, this.baseURL),
        l = await fetch(u, {
          body: JSON.stringify({ tools: a, ...i }),
          headers: { 'Content-Type': 'application/json', ...c },
          method: 'POST',
          signal: r?.signal,
        }),
        d = fs(u.toString());
      if (l.status === 400)
        throw q.chat({
          endpoint: d,
          error: l,
          errorType: N.ProviderBizError,
          provider: tt.Cloudflare,
        });
      let f;
      if (iy.DEBUG_CLOUDFLARE_CHAT_COMPLETION === '1') {
        const [h, p] = l.body.tee();
        (rt(p).catch(), (f = h));
      } else f = l.body;
      return Be(f.pipeThrough(new TransformStream(new sy())).pipeThrough(ar(r?.callback)), {
        headers: r?.headers,
      });
    } catch (n) {
      const s = fs(this.baseURL);
      throw q.chat({
        endpoint: s,
        error: n,
        errorType: N.ProviderBizError,
        provider: tt.Cloudflare,
      });
    }
  }
  async models() {
    const { LOBE_DEFAULT_MODEL_LIST: e } = await lt(async () => {
        const { LOBE_DEFAULT_MODEL_LIST: i } = await import('./providerConfig-qS2Xx-oI.js').then(
          (a) => a.a4,
        );
        return { LOBE_DEFAULT_MODEL_LIST: i };
      }, []),
      r = `${qr}/client/v4/accounts/${this.accountID}/ai/models/search`;
    return (
      await (
        await fetch(r, {
          headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
          method: 'GET',
        })
      ).json()
    ).result
      .map((i) => {
        const a = e.find((c) => i.name.toLowerCase() === c.id.toLowerCase());
        return {
          contextWindowTokens: i.properties?.max_total_tokens
            ? Number(i.properties.max_total_tokens)
            : (a?.contextWindowTokens ?? void 0),
          displayName:
            a?.displayName ?? (i.properties?.beta === 'true' ? `${i.name} (Beta)` : void 0),
          enabled: a?.enabled || !1,
          functionCall:
            i.description.toLowerCase().includes('function call') ||
            i.properties?.function_calling === 'true' ||
            a?.abilities?.functionCall ||
            !1,
          id: i.name,
          reasoning: i.name.toLowerCase().includes('deepseek-r1') || a?.abilities?.reasoning || !1,
          vision:
            i.name.toLowerCase().includes('vision') ||
            i.task?.name.toLowerCase().includes('image-to-text') ||
            i.description.toLowerCase().includes('vision') ||
            a?.abilities?.vision ||
            !1,
        };
      })
      .filter(Boolean);
  }
}
export { yy as L, gy as a, py as b, he as f, Ce as t };
