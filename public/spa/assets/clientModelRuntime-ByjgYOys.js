import { B as he } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { _ as Ne } from './index-C8UyLGsD.js';
import { M as $ } from './providerConfig-qS2Xx-oI.js';
import {
  A as O,
  m as A,
  n as Fe,
  o as je,
  p as Me,
  q as se,
  S as W,
  r as Ue,
  O as De,
  s as Ve,
  t as _e,
  u as de,
  v as Be,
  w as ge,
  x as Ke,
  y as He,
  z as ze,
  B as Ge,
  R as We,
  C as Je,
  M as qe,
  D as Qe,
  L as Xe,
  E as Ye,
  F as Ze,
  G as et,
  a as tt,
  b as st,
  H as it,
  I as at,
  J as nt,
  c as rt,
  K as ot,
  N as lt,
  P as ut,
  Q as ct,
  T as ht,
  U as dt,
  V as gt,
  W as ft,
  X as pt,
  Y as mt,
  Z as bt,
  _ as yt,
  $ as Lt,
  a0 as xt,
  a1 as fe,
  e as wt,
  a2 as St,
  a3 as Rt,
  a4 as vt,
  a5 as It,
  f as Ee,
  a6 as Ot,
  a7 as At,
  a8 as Ct,
  a9 as Pt,
  aa as kt,
  g as Et,
  ab as Tt,
  ac as $t,
  ad as Nt,
  h as Ft,
  ae as jt,
  af as Mt,
  ag as Ut,
  ah as Dt,
  ai as Vt,
  aj as _t,
  ak as Bt,
  al as Kt,
  am as Ht,
  an as zt,
  ao as Gt,
  i as Wt,
  ap as Jt,
  aq as qt,
  ar as Qt,
  j as Xt,
  k as Yt,
  as as Zt,
  at as es,
  au as ts,
  av as ss,
  aw as is,
  ax as as,
  ay as ns,
  az as rs,
  l as os,
  aA as ls,
  aB as us,
  aC as cs,
  aD as hs,
  aE as ds,
} from './index-ClRvEh9W.js';
import { L as gs, a as fs, b as ps } from './index-F5T1V14Z.js';
import { b as ms } from './_auth-sIxU1rKL.js';
var pe = {};
const ie = 'https://api.githubcopilot.com',
  bs = 'https://api.github.com/copilot_internal/v2/token',
  ys = 5,
  Ls = 3,
  j = {
    chatCompletion: () => pe.DEBUG_GITHUBCOPILOT_CHAT_COMPLETION === '1',
    responses: () => pe.DEBUG_GITHUBCOPILOT_RESPONSES === '1',
  };
class xs {
  cache = new Map();
  pendingRefresh = new Map();
  async getToken(e) {
    const t = this.hashToken(e),
      s = this.cache.get(t);
    if (s && Date.now() < s.expiresAt - 3e5) return s.token;
    const i = this.pendingRefresh.get(t);
    if (i) return i;
    const a = this.exchangeToken(e, t);
    this.pendingRefresh.set(t, a);
    try {
      return await a;
    } finally {
      this.pendingRefresh.delete(t);
    }
  }
  invalidate(e) {
    const t = this.hashToken(e);
    this.cache.delete(t);
  }
  hashToken(e) {
    return e.slice(-8);
  }
  async exchangeToken(e, t) {
    const s = await fetch(bs, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${e}`,
        'User-Agent': 'LobeChat/1.0',
      },
      method: 'GET',
    });
    if (s.status === 401)
      throw O.createError(A.InvalidGithubCopilotToken, {
        message: 'Invalid GitHub Personal Access Token',
      });
    if (s.status === 403)
      throw O.createError(A.PermissionDenied, {
        message: 'No GitHub Copilot subscription or access denied',
      });
    if (!s.ok)
      throw O.createError(A.ProviderBizError, {
        message: `Token exchange failed: ${s.status} ${s.statusText}`,
      });
    const i = await s.json();
    if (!i?.token || typeof i.expires_at != 'number')
      throw O.createError(A.ProviderBizError, { message: 'Invalid token response format' });
    return (this.cache.set(t, { expiresAt: i.expires_at * 1e3, token: i.token }), i.token);
  }
}
const ae = new xs();
class ws {
  baseURL = ie;
  cachedBearerToken;
  githubToken;
  constructor({ apiKey: e, oauthAccessToken: t, bearerToken: s, bearerTokenExpiresAt: i } = {}) {
    if (s && i && Date.now() < i - 3e5)
      ((this.cachedBearerToken = s), (this.githubToken = t || e || ''));
    else if (t) this.githubToken = t;
    else if (e) this.githubToken = e;
    else
      throw O.createError(A.InvalidGithubCopilotToken, {
        message: 'GitHub Personal Access Token or OAuth token is required',
      });
  }
  async chat(e, t) {
    return this.executeWithRetry(async () => {
      const s = Date.now(),
        i = this.cachedBearerToken || (await ae.getToken(this.githubToken)),
        { model: a, ...n } = this.handlePayload(e),
        r = n.stream !== !1;
      if (a.toLowerCase().includes('claude')) {
        const f = new Fe({
            apiKey: i,
            baseURL: this.baseURL,
            defaultHeaders: {
              'Authorization': `Bearer ${i}`,
              'Copilot-Integration-Id': 'vscode-chat',
              'Editor-Plugin-Version': 'LobeChat/1.0',
              'Editor-Version': 'LobeChat/1.0',
              'anthropic-version': '2023-06-01',
            },
          }),
          p = { ...(await je({ ...n, model: a })), stream: r };
        j.chatCompletion() &&
          (console.log('[requestPayload]'),
          console.log(
            JSON.stringify(p),
            `
`,
          ));
        const w = await f.messages.create(
            { ...p, metadata: t?.user ? { user_id: t.user } : void 0 },
            { headers: t?.requestHeaders, signal: t?.signal },
          ),
          y = await Me(a, $.GithubCopilot),
          L = w,
          [x, P] = L.tee();
        if (j.chatCompletion()) {
          const k = P instanceof ReadableStream ? P : P.toReadableStream();
          se(k).catch(console.error);
        }
        return W(
          Ue(x, {
            callbacks: t?.callback,
            inputStartAt: s,
            payload: { pricing: y, provider: $.GithubCopilot },
          }),
          { headers: t?.headers },
        );
      }
      const l = new De({
        apiKey: i,
        baseURL: ie,
        defaultHeaders: {
          'Copilot-Integration-Id': 'vscode-chat',
          'Editor-Plugin-Version': 'LobeChat/1.0',
          'Editor-Version': 'LobeChat/1.0',
        },
      });
      if (Ve.has(a) || a.toLowerCase().includes('oswe') || e.apiMode === 'responses') {
        const {
          messages: f,
          reasoning_effort: b,
          tools: p,
          reasoning: w,
          max_tokens: y,
          verbosity: L,
          ...x
        } = n;
        (delete x.apiMode, delete x.frequency_penalty, delete x.presence_penalty);
        const P = await _e(f, { forceImageBase64: !0, strictToolPairing: !0 }),
          k = p?.map(this.convertChatCompletionToolToResponseTool),
          S = {
            ...x,
            ...(w || b
              ? { reasoning: { ...w, ...(b && { effort: b }), summary: 'detailed' } }
              : {}),
            ...(y && { max_output_tokens: y }),
            text: L ? { verbosity: L } : void 0,
            input: P,
            model: a,
            stream: r,
            ...(k ? { tools: k } : {}),
          };
        j.responses() &&
          (console.log('[requestPayload]'),
          console.log(
            JSON.stringify(S),
            `
`,
          ));
        const R = await l.responses.create(S, { signal: t?.signal });
        if (r) {
          const te = R,
            [v, I] = te.tee();
          if (j.responses()) {
            const z = I instanceof ReadableStream ? I : I.toReadableStream();
            se(z).catch(console.error);
          }
          return W(
            de(v, { callbacks: t?.callback, payload: { model: a, provider: $.GithubCopilot } }),
            { headers: t?.headers },
          );
        }
        const ee = Be(R);
        return (
          j.responses() && ge(R),
          W(
            de(ee, {
              callbacks: t?.callback,
              enableStreaming: !1,
              payload: { model: a, provider: $.GithubCopilot },
            }),
            { headers: t?.headers },
          )
        );
      }
      const { apiMode: c, ...h } = n,
        d = await Ke(h.messages, { forceImageBase64: !0 }),
        u = { ...h, messages: d, model: a, stream: r };
      j.chatCompletion() &&
        (console.log('[requestPayload]'),
        console.log(
          JSON.stringify(u),
          `
`,
        ));
      let g = await l.chat.completions.create(u, { signal: t?.signal });
      if (r && j.chatCompletion()) {
        const [f, b] = g.tee(),
          p = b instanceof ReadableStream ? b : b.toReadableStream();
        (se(p).catch(console.error), (g = f));
      }
      return (
        !r && j.chatCompletion() && ge(g),
        W(He(g, { callbacks: t?.callback, payload: { model: a, provider: $.GithubCopilot } }), {
          headers: t?.headers,
        })
      );
    });
  }
  async models() {
    return this.executeWithRetry(async () => {
      const e = this.cachedBearerToken || (await ae.getToken(this.githubToken)),
        t = await fetch(`${ie}/models`, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${e}`,
            'Copilot-Integration-Id': 'vscode-chat',
            'Editor-Plugin-Version': 'LobeChat/1.0',
            'Editor-Version': 'LobeChat/1.0',
          },
          method: 'GET',
        });
      if (!t.ok) throw { status: t.status };
      const s = await t.json();
      return (s.models || s.data || []).map((i) => ({
        displayName: i.name || i.id,
        enabled: !0,
        id: i.id || i.name,
        type: 'chat',
      }));
    });
  }
  handlePayload(e) {
    const { model: t } = e;
    return t.startsWith('o1') || t.startsWith('o3') || t.startsWith('o4')
      ? { ...ze(e), stream: !1 }
      : { ...e, stream: !0 };
  }
  convertChatCompletionToolToResponseTool = (e) => ({ type: e.type, ...e.function });
  async executeWithRetry(e) {
    let t = 0,
      s = !1,
      i = 0;
    for (; t < ys; ) {
      t++;
      try {
        return await e();
      } catch (a) {
        const n = a?.status ?? a?.error?.status ?? a?.response?.status;
        if (n === 401 && !s && this.githubToken) {
          ((s = !0), (this.cachedBearerToken = void 0), ae.invalidate(this.githubToken));
          continue;
        }
        if (n === 429 && i < Ls) {
          i++;
          const r = this.getRetryAfterMs(a) ?? 1e3 * Math.pow(2, i);
          await new Promise((l) => {
            setTimeout(l, Math.min(r, 1e4));
          });
          continue;
        }
        throw this.mapError(a);
      }
    }
    throw O.chat({
      endpoint: this.baseURL,
      error: { message: 'Max retry attempts exceeded' },
      errorType: A.ProviderBizError,
      provider: $.GithubCopilot,
    });
  }
  getRetryAfterMs(e) {
    const t = e?.response?.headers?.get?.('Retry-After');
    if (t) {
      const s = parseInt(t, 10);
      if (!isNaN(s)) return s * 1e3;
    }
  }
  mapError(e) {
    switch (e?.status ?? e?.error?.status) {
      case 401:
        return O.chat({
          endpoint: this.baseURL,
          error: e,
          errorType: A.InvalidGithubCopilotToken,
          provider: $.GithubCopilot,
        });
      case 403:
        return O.chat({
          endpoint: this.baseURL,
          error: e,
          errorType: A.PermissionDenied,
          provider: $.GithubCopilot,
        });
      case 429:
        return O.chat({
          endpoint: this.baseURL,
          error: e,
          errorType: A.QuotaLimitReached,
          provider: $.GithubCopilot,
        });
      default:
        return O.chat({
          endpoint: this.baseURL,
          error: e,
          errorType: A.ProviderBizError,
          provider: $.GithubCopilot,
        });
    }
  }
}
const Ss = { id: 'lobehub', routers: async (o, { model: e }) => [] },
  Rs = Ge(Ss);
var me = {};
const ne = 'https://api.replicate.com';
class vs {
  client;
  baseURL;
  apiKey;
  id;
  constructor({ apiKey: e, baseURL: t = ne, id: s } = {}) {
    if (!e) throw O.createError(A.InvalidProviderAPIKey);
    ((this.client = new We({ auth: e, baseUrl: t !== ne ? t : void 0, useFileOutput: !1 })),
      (this.baseURL = t),
      (this.apiKey = e),
      (this.id = s || 'replicate'));
  }
  async chat(e, t) {
    const s = e.model;
    try {
      if (!s || typeof s != 'string' || !s.includes('/'))
        throw new Error('Invalid model id for Replicate connectivity check');
      const [i, ...a] = s.split('/'),
        n = a.join('/'),
        [r] = n.split(':');
      await this.client.models.get(i, r, { signal: t?.signal });
      const l = new TextEncoder(),
        c = new ReadableStream({
          start(h) {
            const d = JSON.stringify(`Replicate connectivity ok for ${s}`),
              u = JSON.stringify('stop');
            (h.enqueue(
              l.encode(`event: text
data: ${d}

`),
            ),
              h.enqueue(
                l.encode(`event: stop
data: ${u}

`),
              ),
              h.close());
          },
        });
      return new Response(c, { headers: { 'Content-Type': 'text/event-stream' } });
    } catch (i) {
      throw this.handleError(i);
    }
  }
  async createImage(e) {
    try {
      const { model: t, params: s } = e,
        {
          prompt: i,
          width: a,
          height: n,
          cfg: r,
          steps: l,
          seed: c,
          imageUrl: h,
          aspectRatio: d,
        } = s;
      (this.debugLog('[Replicate createImage] === START ==='),
        this.debugLog('[Replicate createImage] Model:', t),
        this.debugLog('[Replicate createImage] Params received:', JSON.stringify(s, null, 2)));
      const u = {};
      if (
        (t.includes('redux')
          ? this.debugLog('[Replicate createImage] Skipping prompt (Redux model)')
          : ((u.prompt = i), this.debugLog('[Replicate createImage] Added prompt:', i)),
        h)
      ) {
        this.debugLog('[Replicate createImage] imageUrl provided:', h);
        let p;
        t.includes('redux')
          ? ((p = 'redux_image'), this.debugLog('[Replicate createImage] Will map to redux_image'))
          : t.includes('canny') || t.includes('depth')
            ? ((p = 'control_image'),
              this.debugLog('[Replicate createImage] Will map to control_image'))
            : t.includes('fill')
              ? ((p = 'image'), this.debugLog('[Replicate createImage] Will map to image (fill)'))
              : ((p = 'image'),
                this.debugLog('[Replicate createImage] Will map to image (generic)'));
        let w = !1;
        try {
          const L = new URL(h).hostname,
            x = L === 'localhost' || L === '127.0.0.1' || L === '[::1]',
            P = L.startsWith('10.'),
            k = L.startsWith('192.168.'),
            S = /^172\.(1[6-9]|2\d|3[01])\./.test(L),
            R = L.endsWith('.local');
          w = x || P || S || k || R;
        } catch {
          w = !0;
        }
        if (w) {
          this.debugLog(
            '[Replicate createImage] Local URL detected, will fetch and upload as data',
          );
          try {
            const { ssrfSafeFetch: y } = await Ne(async () => {
                const { ssrfSafeFetch: P } = await import('./index.browser-DrK-zmGc.js');
                return { ssrfSafeFetch: P };
              }, []),
              L = await y(h);
            if (!L.ok) throw new Error(`Failed to fetch image: ${L.status} ${L.statusText}`);
            const x = he.from(await L.arrayBuffer());
            if (
              (this.debugLog('[Replicate createImage] Fetched image, size:', x.length, 'bytes'),
              x.length > 100 * 1024 * 1024)
            )
              throw new Error(`Image too large: ${x.length} bytes (max 100MB)`);
            ((u[p] = x), this.debugLog('[Replicate createImage] Mapped to', p, 'as Buffer'));
          } catch (y) {
            throw (
              this.debugLog('[Replicate createImage] Error fetching local image:', y),
              new Error(`Failed to fetch local image: ${y.message}`)
            );
          }
        } else
          ((u[p] = h), this.debugLog('[Replicate createImage] Public URL, mapped directly to', p));
      } else this.debugLog('[Replicate createImage] No imageUrl provided');
      (a &&
        n &&
        ((u.width = a),
        (u.height = n),
        this.debugLog('[Replicate createImage] Set dimensions:', a, 'x', n)),
        t.includes('flux') &&
          (d
            ? ((u.aspect_ratio = d),
              this.debugLog('[Replicate createImage] Set aspect_ratio from param:', d))
            : a &&
              n &&
              (a === n
                ? (u.aspect_ratio = '1:1')
                : a === 1280 && n === 720
                  ? (u.aspect_ratio = '16:9')
                  : a === 720 && n === 1280
                    ? (u.aspect_ratio = '9:16')
                    : a > n
                      ? (u.aspect_ratio = '16:9')
                      : (u.aspect_ratio = '9:16'),
              this.debugLog('[Replicate createImage] Calculated aspect_ratio:', u.aspect_ratio)),
          t.includes('fill') ||
            (delete u.width,
            delete u.height,
            this.debugLog('[Replicate createImage] Removed width/height (using aspect_ratio)'))),
        r !== void 0 &&
          ((u.guidance_scale = r), this.debugLog('[Replicate createImage] Set guidance_scale:', r)),
        l !== void 0 &&
          (t.includes('redux')
            ? ((u.num_inference_steps = l),
              this.debugLog('[Replicate createImage] Set num_inference_steps:', l))
            : t.includes('canny') || t.includes('depth') || t.includes('fill')
              ? ((u.steps = l), this.debugLog('[Replicate createImage] Set steps:', l))
              : ((u.num_inference_steps = l),
                this.debugLog('[Replicate createImage] Set num_inference_steps:', l))),
        c != null && ((u.seed = c), this.debugLog('[Replicate createImage] Set seed:', c)));
      const g = { ...u };
      for (const p in g) he.isBuffer(g[p]) && (g[p] = `<Buffer ${g[p].length} bytes>`);
      (this.debugLog('[Replicate createImage] Final input object:', JSON.stringify(g, null, 2)),
        this.debugLog('[Replicate createImage] Calling client.run...'));
      const f = await this.client.run(t, { input: u });
      (this.debugLog('[Replicate createImage] Raw output:', f),
        this.debugLog(
          '[Replicate createImage] Output type:',
          typeof f,
          'Is array:',
          Array.isArray(f),
        ));
      let b;
      if (Array.isArray(f)) {
        if (f.length === 0) throw new Error('Replicate returned empty array');
        ((b = f[0]), this.debugLog('[Replicate] Extracted URL from array:', b));
      } else if (typeof f == 'string')
        ((b = f), this.debugLog('[Replicate] Output is direct string URL:', b));
      else throw new Error(`Unexpected output format from Replicate: ${typeof f}`);
      if (typeof b != 'string') throw new Error(`Expected URL string, got ${typeof b}: ${b}`);
      return (
        this.debugLog('[Replicate] Final imageUrl:', b),
        { height: n, imageUrl: b, width: a }
      );
    } catch (t) {
      throw this.handleError(t);
    }
  }
  async models() {
    try {
      const e = new Map(),
        t = [
          'flux image generation',
          'stable diffusion',
          'sdxl',
          'ideogram',
          'image to image',
          'text to image',
        ];
      for (const i of t)
        try {
          for await (const a of this.client.paginate(() => this.client.models.search(i))) {
            for (const n of a) {
              const r = `${n.owner}/${n.name}`;
              e.has(r) ||
                e.set(r, {
                  created: n.latest_version
                    ? new Date(n.latest_version.created_at).getTime()
                    : void 0,
                  displayName: n.name,
                  id: r,
                });
            }
            break;
          }
        } catch {
          this.debugLog(`[Replicate models] Search failed for query: ${i}`);
        }
      const s = [...e.values()];
      return (
        this.debugLog(`[Replicate models] Found ${s.length} unique models`),
        Je(s, qe.replicate, 'replicate')
      );
    } catch (e) {
      throw this.handleError(e);
    }
  }
  handleError(e) {
    let t = this.baseURL;
    throw (
      this.baseURL !== ne && (t = Qe(this.baseURL)),
      e?.message?.includes('authentication') || e?.message?.includes('API token')
        ? O.chat({ endpoint: t, error: e, errorType: A.InvalidProviderAPIKey, provider: this.id })
        : e?.message?.includes('not found')
          ? O.chat({ endpoint: t, error: e, errorType: A.ModelNotFound, provider: this.id })
          : O.chat({ endpoint: t, error: e, errorType: A.ProviderBizError, provider: this.id })
    );
  }
  debugLog(...e) {
    (me.DEBUG_REPLICATE === '1' || me.DEBUG_REPLICATE_CHAT_COMPLETION === '1') && console.log(...e);
  }
}
const Is = {
  ai21: ds,
  ai302: hs,
  ai360: cs,
  aihubmix: us,
  akashchat: ls,
  anthropic: os,
  bailiancodingplan: rs,
  azure: ns,
  azureai: ps,
  baichuan: as,
  bedrock: fs,
  bfl: is,
  cerebras: ss,
  cloudflare: gs,
  cohere: ts,
  cometapi: es,
  comfyui: Zt,
  deepseek: Yt,
  fal: Xt,
  fireworksai: Qt,
  giteeai: qt,
  github: Jt,
  githubcopilot: ws,
  google: Wt,
  glmcodingplan: Gt,
  groq: zt,
  higress: Ht,
  huggingface: Kt,
  hunyuan: Bt,
  infiniai: _t,
  internlm: Vt,
  jina: Dt,
  kimicodingplan: Ut,
  lmstudio: Mt,
  lobehub: Rs,
  longcat: jt,
  minimax: Ft,
  minimaxcodingplan: Nt,
  mistral: $t,
  modelscope: Tt,
  moonshot: Et,
  nebius: kt,
  newapi: fe,
  novita: Pt,
  nvidia: Ct,
  ollama: At,
  ollamacloud: Ot,
  openai: Ee,
  openrouter: It,
  perplexity: vt,
  ppio: Rt,
  qiniu: St,
  qwen: wt,
  replicate: vs,
  router: fe,
  sambanova: xt,
  search1api: Lt,
  sensenova: yt,
  siliconcloud: bt,
  spark: mt,
  stepfun: pt,
  straico: ft,
  taichu: gt,
  tencentcloud: dt,
  togetherai: ht,
  upstage: ct,
  v0: ut,
  vercelaigateway: lt,
  vllm: ot,
  volcengine: rt,
  volcenginecodingplan: nt,
  wavespeed: at,
  wenxin: it,
  xai: st,
  xiaomimimo: tt,
  xinference: et,
  zenmux: Ze,
  zeroone: Ye,
  zhipu: Xe,
};
class le {
  _hooks;
  _runtime;
  constructor(e, t) {
    ((this._runtime = e), (this._hooks = t));
  }
  async chat(e, t) {
    if (typeof this._runtime.chat != 'function')
      throw O.chat({
        error: new Error('Chat is not supported by this provider'),
        errorType: A.ProviderBizError,
        provider: e.provider || 'unknown',
      });
    const s = await this.applyHooks(e, t);
    try {
      return await this._runtime.chat(e, s);
    } catch (i) {
      throw (
        this._hooks?.onChatError && (await this._hooks.onChatError(i, { options: t, payload: e })),
        i
      );
    }
  }
  async applyHooks(e, t) {
    if ((await this._hooks?.beforeChat?.(e, t), !this._hooks?.onChatFinal)) return t;
    const s = this._hooks.onChatFinal,
      i = t?.callback?.onFinal;
    return {
      ...t,
      callback: {
        ...t?.callback,
        async onFinal(a) {
          await i?.(a);
          try {
            await s(a, { options: t, payload: e });
          } catch (n) {
            console.error('[ModelRuntime] onChatFinal hook error:', n);
          }
        },
      },
    };
  }
  async generateObject(e, t) {
    await this._hooks?.beforeGenerateObject?.(e, t);
    const s = this._hooks?.onGenerateObjectFinal
      ? {
          ...t,
          onUsage: async (i) => {
            await t?.onUsage?.(i);
            try {
              await this._hooks.onGenerateObjectFinal({ usage: i }, { options: t, payload: e });
            } catch (a) {
              console.error('[ModelRuntime] onGenerateObjectFinal hook error:', a);
            }
          },
        }
      : t;
    try {
      return await this._runtime.generateObject(e, s);
    } catch (i) {
      throw (
        this._hooks?.onGenerateObjectError &&
          (await this._hooks.onGenerateObjectError(i, { options: t, payload: e })),
        i
      );
    }
  }
  async createImage(e) {
    return this._runtime.createImage?.(e);
  }
  async createVideo(e) {
    return this._runtime.createVideo?.(e);
  }
  async handleCreateVideoWebhook(e) {
    return this._runtime.handleCreateVideoWebhook?.(e);
  }
  async models() {
    return this._runtime.models?.();
  }
  async embeddings(e, t) {
    await this._hooks?.beforeEmbeddings?.(e, t);
    const s = Date.now(),
      i = this._hooks?.onEmbeddingsFinal
        ? {
            ...t,
            onUsage: async (a) => {
              await t?.onUsage?.(a);
              try {
                const n = Date.now() - s;
                await this._hooks.onEmbeddingsFinal(
                  { latencyMs: n, usage: a },
                  { options: t, payload: e },
                );
              } catch (n) {
                console.error('[ModelRuntime] onEmbeddingsFinal hook error:', n);
              }
            },
          }
        : t;
    try {
      return await this._runtime.embeddings?.(e, i);
    } catch (a) {
      throw (
        this._hooks?.onEmbeddingsError &&
          (await this._hooks.onEmbeddingsError(a, { options: t, payload: e })),
        a
      );
    }
  }
  async textToSpeech(e, t) {
    return this._runtime.textToSpeech?.(e, t);
  }
  async pullModel(e, t) {
    return this._runtime.pullModel?.(e, t);
  }
  getAuthHeaders() {
    return this._runtime.getAuthHeaders?.();
  }
  static initializeWithProvider(e, t, s) {
    const i = Is[e] ?? Ee,
      a = new i(t);
    return new le(a, s);
  }
}
const m = (o) => typeof o == 'string',
  B = () => {
    let o, e;
    const t = new Promise((s, i) => {
      ((o = s), (e = i));
    });
    return ((t.resolve = o), (t.reject = e), t);
  },
  be = (o) => (o == null ? '' : '' + o),
  Os = (o, e, t) => {
    o.forEach((s) => {
      e[s] && (t[s] = e[s]);
    });
  },
  As = /###/g,
  ye = (o) => (o && o.indexOf('###') > -1 ? o.replace(As, '.') : o),
  Le = (o) => !o || m(o),
  K = (o, e, t) => {
    const s = m(e) ? e.split('.') : e;
    let i = 0;
    for (; i < s.length - 1; ) {
      if (Le(o)) return {};
      const a = ye(s[i]);
      (!o[a] && t && (o[a] = new t()),
        Object.prototype.hasOwnProperty.call(o, a) ? (o = o[a]) : (o = {}),
        ++i);
    }
    return Le(o) ? {} : { obj: o, k: ye(s[i]) };
  },
  xe = (o, e, t) => {
    const { obj: s, k: i } = K(o, e, Object);
    if (s !== void 0 || e.length === 1) {
      s[i] = t;
      return;
    }
    let a = e[e.length - 1],
      n = e.slice(0, e.length - 1),
      r = K(o, n, Object);
    for (; r.obj === void 0 && n.length; )
      ((a = `${n[n.length - 1]}.${a}`),
        (n = n.slice(0, n.length - 1)),
        (r = K(o, n, Object)),
        r?.obj && typeof r.obj[`${r.k}.${a}`] < 'u' && (r.obj = void 0));
    r.obj[`${r.k}.${a}`] = t;
  },
  Cs = (o, e, t, s) => {
    const { obj: i, k: a } = K(o, e, Object);
    ((i[a] = i[a] || []), i[a].push(t));
  },
  q = (o, e) => {
    const { obj: t, k: s } = K(o, e);
    if (t && Object.prototype.hasOwnProperty.call(t, s)) return t[s];
  },
  Ps = (o, e, t) => {
    const s = q(o, t);
    return s !== void 0 ? s : q(e, t);
  },
  Te = (o, e, t) => {
    for (const s in e)
      s !== '__proto__' &&
        s !== 'constructor' &&
        (s in o
          ? m(o[s]) || o[s] instanceof String || m(e[s]) || e[s] instanceof String
            ? t && (o[s] = e[s])
            : Te(o[s], e[s], t)
          : (o[s] = e[s]));
    return o;
  },
  U = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var ks = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const Es = (o) => (m(o) ? o.replace(/[&<>"'\/]/g, (e) => ks[e]) : o);
class Ts {
  constructor(e) {
    ((this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []));
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const s = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, s),
      this.regExpQueue.push(e),
      s
    );
  }
}
const $s = [' ', ',', '?', '!', ';'],
  Ns = new Ts(20),
  Fs = (o, e, t) => {
    ((e = e || ''), (t = t || ''));
    const s = $s.filter((n) => e.indexOf(n) < 0 && t.indexOf(n) < 0);
    if (s.length === 0) return !0;
    const i = Ns.getRegExp(`(${s.map((n) => (n === '?' ? '\\?' : n)).join('|')})`);
    let a = !i.test(o);
    if (!a) {
      const n = o.indexOf(t);
      n > 0 && !i.test(o.substring(0, n)) && (a = !0);
    }
    return a;
  },
  oe = function (o, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!o) return;
    if (o[e]) return Object.prototype.hasOwnProperty.call(o, e) ? o[e] : void 0;
    const s = e.split(t);
    let i = o;
    for (let a = 0; a < s.length; ) {
      if (!i || typeof i != 'object') return;
      let n,
        r = '';
      for (let l = a; l < s.length; ++l)
        if ((l !== a && (r += t), (r += s[l]), (n = i[r]), n !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof n) > -1 && l < s.length - 1) continue;
          a += l - a + 1;
          break;
        }
      i = n;
    }
    return i;
  },
  Q = (o) => o?.replace('_', '-'),
  js = {
    type: 'logger',
    log(o) {
      this.output('log', o);
    },
    warn(o) {
      this.output('warn', o);
    },
    error(o) {
      this.output('error', o);
    },
    output(o, e) {
      console?.[o]?.apply?.(console, e);
    },
  };
class X {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = t.prefix || 'i18next:'),
      (this.logger = e || js),
      (this.options = t),
      (this.debug = t.debug));
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.forward(t, 'log', '', !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.forward(t, 'warn', '', !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.forward(t, 'error', '');
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(e, t, s, i) {
    return i && !this.debug
      ? null
      : (m(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new X(this.logger, { prefix: `${this.prefix}:${e}:`, ...this.options });
  }
  clone(e) {
    return ((e = e || this.options), (e.prefix = e.prefix || this.prefix), new X(this.logger, e));
  }
}
var N = new X();
class Z {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(' ').forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const i = this.observers[s].get(t) || 0;
        this.observers[s].set(t, i + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      s[i - 1] = arguments[i];
    (this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((n) => {
        let [r, l] = n;
        for (let c = 0; c < l; c++) r(...s);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((n) => {
          let [r, l] = n;
          for (let c = 0; c < l; c++) r.apply(r, [e, ...s]);
        }));
  }
}
class we extends Z {
  constructor(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    (super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      n =
        i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let r;
    e.indexOf('.') > -1
      ? (r = e.split('.'))
      : ((r = [e, t]),
        s && (Array.isArray(s) ? r.push(...s) : m(s) && a ? r.push(...s.split(a)) : r.push(s)));
    const l = q(this.data, r);
    return (
      !l && !t && !s && e.indexOf('.') > -1 && ((e = r[0]), (t = r[1]), (s = r.slice(2).join('.'))),
      l || !n || !m(s) ? l : oe(this.data?.[e]?.[t], s, a)
    );
  }
  addResource(e, t, s, i) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const n = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let r = [e, t];
    (s && (r = r.concat(n ? s.split(n) : s)),
      e.indexOf('.') > -1 && ((r = e.split('.')), (i = t), (t = r[1])),
      this.addNamespaces(t),
      xe(this.data, r, i),
      a.silent || this.emit('added', e, t, s, i));
  }
  addResources(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const a in s)
      (m(s[a]) || Array.isArray(s[a])) && this.addResource(e, t, a, s[a], { silent: !0 });
    i.silent || this.emit('added', e, t, s);
  }
  addResourceBundle(e, t, s, i, a) {
    let n =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      r = [e, t];
    (e.indexOf('.') > -1 && ((r = e.split('.')), (i = s), (s = t), (t = r[1])),
      this.addNamespaces(t));
    let l = q(this.data, r) || {};
    (n.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      i ? Te(l, s, a) : (l = { ...l, ...s }),
      xe(this.data, r, l),
      n.silent || this.emit('added', e, t, s));
  }
  removeResourceBundle(e, t) {
    (this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit('removed', e, t));
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (t || (t = this.options.defaultNS), this.getResource(e, t));
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var $e = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, e, t, s, i) {
    return (
      o.forEach((a) => {
        e = this.processors[a]?.process(e, t, s, i) ?? e;
      }),
      e
    );
  },
};
const Se = {},
  Re = (o) => !m(o) && typeof o != 'boolean' && typeof o != 'number';
class Y extends Z {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      Os(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        e,
        this,
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = N.create('translator')));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    return e == null ? !1 : this.resolve(e, t)?.res !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ':');
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let a = t.ns || this.options.defaultNS || [];
    const n = s && e.indexOf(s) > -1,
      r =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !Fs(e, s, i);
    if (n && !r) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: m(a) ? [a] : a };
      const c = e.split(s);
      ((s !== i || (s === i && this.options.ns.indexOf(c[0]) > -1)) && (a = c.shift()),
        (e = c.join(i)));
    }
    return { key: e, namespaces: m(a) ? [a] : a };
  }
  translate(e, t, s) {
    if (
      (typeof t != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (t = this.options.overloadTranslationOptionHandler(arguments)),
      typeof t == 'object' && (t = { ...t }),
      t || (t = {}),
      e == null)
    )
      return '';
    Array.isArray(e) || (e = [String(e)]);
    const i = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails,
      a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      { key: n, namespaces: r } = this.extractFromKey(e[e.length - 1], t),
      l = r[r.length - 1],
      c = t.lng || this.language,
      h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c?.toLowerCase() === 'cimode') {
      if (h) {
        const v = t.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${v}${n}`,
              usedKey: n,
              exactUsedKey: n,
              usedLng: c,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(t),
            }
          : `${l}${v}${n}`;
      }
      return i
        ? {
            res: n,
            usedKey: n,
            exactUsedKey: n,
            usedLng: c,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(t),
          }
        : n;
    }
    const d = this.resolve(e, t);
    let u = d?.res;
    const g = d?.usedKey || n,
      f = d?.exactUsedKey || n,
      b = ['[object Number]', '[object Function]', '[object RegExp]'],
      p = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
      y = t.count !== void 0 && !m(t.count),
      L = Y.hasDefaultValue(t),
      x = y ? this.pluralResolver.getSuffix(c, t.count, t) : '',
      P = t.ordinal && y ? this.pluralResolver.getSuffix(c, t.count, { ordinal: !1 }) : '',
      k = y && !t.ordinal && t.count === 0,
      S =
        (k && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
        t[`defaultValue${x}`] ||
        t[`defaultValue${P}`] ||
        t.defaultValue;
    let R = u;
    w && !u && L && (R = S);
    const ee = Re(R),
      te = Object.prototype.toString.apply(R);
    if (w && R && ee && b.indexOf(te) < 0 && !(m(p) && Array.isArray(R))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const v = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, R, { ...t, ns: r })
          : `key '${n} (${this.language})' returned an object instead of string.`;
        return i ? ((d.res = v), (d.usedParams = this.getUsedParamsDetails(t)), d) : v;
      }
      if (a) {
        const v = Array.isArray(R),
          I = v ? [] : {},
          z = v ? f : g;
        for (const T in R)
          if (Object.prototype.hasOwnProperty.call(R, T)) {
            const F = `${z}${a}${T}`;
            (L && !u
              ? (I[T] = this.translate(F, {
                  ...t,
                  defaultValue: Re(S) ? S[T] : void 0,
                  joinArrays: !1,
                  ns: r,
                }))
              : (I[T] = this.translate(F, { ...t, joinArrays: !1, ns: r })),
              I[T] === F && (I[T] = R[T]));
          }
        u = I;
      }
    } else if (w && m(p) && Array.isArray(u))
      ((u = u.join(p)), u && (u = this.extendTranslation(u, e, t, s)));
    else {
      let v = !1,
        I = !1;
      (!this.isValidLookup(u) && L && ((v = !0), (u = S)),
        this.isValidLookup(u) || ((I = !0), (u = n)));
      const T =
          (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && I
            ? void 0
            : u,
        F = L && S !== u && this.options.updateMissing;
      if (I || v || F) {
        if ((this.logger.log(F ? 'updateKey' : 'missingKey', c, l, n, F ? S : u), a)) {
          const E = this.resolve(n, { ...t, keySeparator: !1 });
          E &&
            E.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let V = [];
        const G = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          t.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && G && G[0])
          for (let E = 0; E < G.length; E++) V.push(G[E]);
        else
          this.options.saveMissingTo === 'all'
            ? (V = this.languageUtils.toResolveHierarchy(t.lng || this.language))
            : V.push(t.lng || this.language);
        const ue = (E, M, _) => {
          const ce = L && _ !== u ? _ : T;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(E, l, M, ce, F, t)
            : this.backendConnector?.saveMissing &&
              this.backendConnector.saveMissing(E, l, M, ce, F, t),
            this.emit('missingKey', E, l, M, u));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && y
            ? V.forEach((E) => {
                const M = this.pluralResolver.getSuffixes(E, t);
                (k &&
                  t[`defaultValue${this.options.pluralSeparator}zero`] &&
                  M.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  M.push(`${this.options.pluralSeparator}zero`),
                  M.forEach((_) => {
                    ue([E], n + _, t[`defaultValue${_}`] || S);
                  }));
              })
            : ue(V, n, S));
      }
      ((u = this.extendTranslation(u, e, t, d, s)),
        I && u === n && this.options.appendNamespaceToMissingKey && (u = `${l}:${n}`),
        (I || v) &&
          this.options.parseMissingKeyHandler &&
          (u = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${l}:${n}` : n,
            v ? u : void 0,
          )));
    }
    return i ? ((d.res = u), (d.usedParams = this.getUsedParamsDetails(t)), d) : u;
  }
  extendTranslation(e, t, s, i, a) {
    var n = this;
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const c =
        m(e) &&
        (s?.interpolation?.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (c) {
        const u = e.match(this.interpolator.nestingRegexp);
        h = u && u.length;
      }
      let d = s.replace && !m(s.replace) ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (e = this.interpolator.interpolate(e, d, s.lng || this.language || i.usedLng, s)),
        c)
      ) {
        const u = e.match(this.interpolator.nestingRegexp),
          g = u && u.length;
        h < g && (s.nest = !1);
      }
      (!s.lng && i && i.res && (s.lng = this.language || i.usedLng),
        s.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (var u = arguments.length, g = new Array(u), f = 0; f < u; f++)
                g[f] = arguments[f];
              return a?.[0] === g[0] && !s.context
                ? (n.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`,
                  ),
                  null)
                : n.translate(...g, t);
            },
            s,
          )),
        s.interpolation && this.interpolator.reset());
    }
    const r = s.postProcess || this.options.postProcess,
      l = m(r) ? [r] : r;
    return (
      e != null &&
        l?.length &&
        s.applyPostProcessor !== !1 &&
        (e = $e.handle(
          l,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...i, usedParams: this.getUsedParamsDetails(s) }, ...s }
            : s,
          this,
        )),
      e
    );
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      i,
      a,
      n,
      r;
    return (
      m(e) && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(s)) return;
        const c = this.extractFromKey(l, t),
          h = c.key;
        i = h;
        let d = c.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const u = t.count !== void 0 && !m(t.count),
          g = u && !t.ordinal && t.count === 0,
          f =
            t.context !== void 0 &&
            (m(t.context) || typeof t.context == 'number') &&
            t.context !== '',
          b = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
        d.forEach((p) => {
          this.isValidLookup(s) ||
            ((r = p),
            !Se[`${b[0]}-${p}`] &&
              this.utils?.hasLoadedNamespace &&
              !this.utils?.hasLoadedNamespace(r) &&
              ((Se[`${b[0]}-${p}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${b.join(', ')}" won't get resolved as namespace "${r}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            b.forEach((w) => {
              if (this.isValidLookup(s)) return;
              n = w;
              const y = [h];
              if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(y, h, w, p, t);
              else {
                let x;
                u && (x = this.pluralResolver.getSuffix(w, t.count, t));
                const P = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (u &&
                    (y.push(h + x),
                    t.ordinal &&
                      x.indexOf(k) === 0 &&
                      y.push(h + x.replace(k, this.options.pluralSeparator)),
                    g && y.push(h + P)),
                  f)
                ) {
                  const S = `${h}${this.options.contextSeparator}${t.context}`;
                  (y.push(S),
                    u &&
                      (y.push(S + x),
                      t.ordinal &&
                        x.indexOf(k) === 0 &&
                        y.push(S + x.replace(k, this.options.pluralSeparator)),
                      g && y.push(S + P)));
                }
              }
              let L;
              for (; (L = y.pop()); )
                this.isValidLookup(s) || ((a = L), (s = this.getResource(w, p, L, t)));
            }));
        });
      }),
      { res: s, usedKey: i, exactUsedKey: a, usedLng: n, usedNS: r }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === '')
    );
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource
      ? this.i18nFormat.getResource(e, t, s, i)
      : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      s = e.replace && !m(e.replace);
    let i = s ? e.replace : e;
    if (
      (s && typeof e.count < 'u' && (i.count = e.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !s)
    ) {
      i = { ...i };
      for (const a of t) delete i[a];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = 'defaultValue';
    for (const s in e)
      if (
        Object.prototype.hasOwnProperty.call(e, s) &&
        t === s.substring(0, t.length) &&
        e[s] !== void 0
      )
        return !0;
    return !1;
  }
}
class ve {
  constructor(e) {
    ((this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = N.create('languageUtils')));
  }
  getScriptPartFromCode(e) {
    if (((e = Q(e)), !e || e.indexOf('-') < 0)) return null;
    const t = e.split('-');
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(t.join('-'));
  }
  getLanguagePartFromCode(e) {
    if (((e = Q(e)), !e || e.indexOf('-') < 0)) return e;
    const t = e.split('-');
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (m(e) && e.indexOf('-') > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        t && this.options.lowerCaseLng && (t = t.toLowerCase()),
        t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((s) => {
        if (t) return;
        const i = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((s) => {
          if (t) return;
          const i = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(i)) return (t = i);
          t = this.options.supportedLngs.find((a) => {
            if (a === i) return a;
            if (
              !(a.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((a.indexOf('-') > 0 && i.indexOf('-') < 0 && a.substring(0, a.indexOf('-')) === i) ||
                (a.indexOf(i) === 0 && i.length > 1))
            )
              return a;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if ((typeof e == 'function' && (e = e(t)), m(e) && (e = [e]), Array.isArray(e))) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return (
      s || (s = e[this.getScriptPartFromCode(t)]),
      s || (s = e[this.formatLanguageCode(t)]),
      s || (s = e[this.getLanguagePartFromCode(t)]),
      s || (s = e.default),
      s || []
    );
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
      i = [],
      a = (n) => {
        n &&
          (this.isSupportedCode(n)
            ? i.push(n)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`));
      };
    return (
      m(e) && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && a(this.formatLanguageCode(e)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            a(this.getScriptPartFromCode(e)),
          this.options.load !== 'currentOnly' && a(this.getLanguagePartFromCode(e)))
        : m(e) && a(this.formatLanguageCode(e)),
      s.forEach((n) => {
        i.indexOf(n) < 0 && a(this.formatLanguageCode(n));
      }),
      i
    );
  }
}
const Ie = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Oe = {
    select: (o) => (o === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class Ms {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = e),
      (this.options = t),
      (this.logger = N.create('pluralResolver')),
      (this.pluralRulesCache = {}));
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = Q(e === 'dev' ? 'en' : e),
      i = t.ordinal ? 'ordinal' : 'cardinal',
      a = JSON.stringify({ cleanedCode: s, type: i });
    if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
    let n;
    try {
      n = new Intl.PluralRules(s, { type: i });
    } catch {
      if (!Intl) return (this.logger.error('No Intl support, please use an Intl polyfill!'), Oe);
      if (!e.match(/-|_/)) return Oe;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      n = this.getRule(l, t);
    }
    return ((this.pluralRulesCache[a] = n), n);
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(e, t);
    return (s || (s = this.getRule('dev', t)), s?.resolvedOptions().pluralCategories.length > 1);
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(e, t);
    return (
      s || (s = this.getRule('dev', t)),
      s
        ? s
            .resolvedOptions()
            .pluralCategories.sort((i, a) => Ie[i] - Ie[a])
            .map(
              (i) =>
                `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ''}${i}`,
            )
        : []
    );
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(e, s);
    return i
      ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ''}${i.select(t)}`
      : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix('dev', t, s));
  }
}
const Ae = function (o, e, t) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      a = Ps(o, e, t);
    return (!a && i && m(t) && ((a = oe(o, t, s)), a === void 0 && (a = oe(e, t, s))), a);
  },
  re = (o) => o.replace(/\$/g, '$$$$');
class Us {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = N.create('interpolator')),
      (this.options = e),
      (this.format = e?.interpolation?.format || ((t) => t)),
      this.init(e));
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: a,
      prefixEscaped: n,
      suffix: r,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: h,
      unescapePrefix: d,
      nestingPrefix: u,
      nestingPrefixEscaped: g,
      nestingSuffix: f,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: p,
      maxReplaces: w,
      alwaysFormat: y,
    } = e.interpolation;
    ((this.escape = t !== void 0 ? t : Es),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = a ? U(a) : n || '{{'),
      (this.suffix = r ? U(r) : l || '}}'),
      (this.formatSeparator = c || ','),
      (this.unescapePrefix = h ? '' : d || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : h || ''),
      (this.nestingPrefix = u ? U(u) : g || U('$t(')),
      (this.nestingSuffix = f ? U(f) : b || U(')')),
      (this.nestingOptionsSeparator = p || ','),
      (this.maxReplaces = w || 1e3),
      (this.alwaysFormat = y !== void 0 ? y : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t?.source === s ? ((t.lastIndex = 0), t) : new RegExp(s, 'g'));
    ((this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      )));
  }
  interpolate(e, t, s, i) {
    let a, n, r;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (g) => {
        if (g.indexOf(this.formatSeparator) < 0) {
          const w = Ae(t, l, g, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(w, void 0, s, { ...i, ...t, interpolationkey: g })
            : w;
        }
        const f = g.split(this.formatSeparator),
          b = f.shift().trim(),
          p = f.join(this.formatSeparator).trim();
        return this.format(
          Ae(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure),
          p,
          s,
          { ...i, ...t, interpolationkey: b },
        );
      };
    this.resetRegExp();
    const h = i?.missingInterpolationHandler || this.options.missingInterpolationHandler,
      d =
        i?.interpolation?.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => re(g) },
        { regex: this.regexp, safeValue: (g) => (this.escapeValue ? re(this.escape(g)) : re(g)) },
      ].forEach((g) => {
        for (r = 0; (a = g.regex.exec(e)); ) {
          const f = a[1].trim();
          if (((n = c(f)), n === void 0))
            if (typeof h == 'function') {
              const p = h(e, a, i);
              n = m(p) ? p : '';
            } else if (i && Object.prototype.hasOwnProperty.call(i, f)) n = '';
            else if (d) {
              n = a[0];
              continue;
            } else
              (this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),
                (n = ''));
          else !m(n) && !this.useRawValueToEscape && (n = be(n));
          const b = g.safeValue(n);
          if (
            ((e = e.replace(a[0], b)),
            d
              ? ((g.regex.lastIndex += n.length), (g.regex.lastIndex -= a[0].length))
              : (g.regex.lastIndex = 0),
            r++,
            r >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      a,
      n;
    const r = (l, c) => {
      const h = this.nestingOptionsSeparator;
      if (l.indexOf(h) < 0) return l;
      const d = l.split(new RegExp(`${h}[ ]*{`));
      let u = `{${d[1]}`;
      ((l = d[0]), (u = this.interpolate(u, n)));
      const g = u.match(/'/g),
        f = u.match(/"/g);
      (((g?.length ?? 0) % 2 === 0 && !f) || f.length % 2 !== 0) && (u = u.replace(/'/g, '"'));
      try {
        ((n = JSON.parse(u)), c && (n = { ...c, ...n }));
      } catch (b) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${l}`, b),
          `${l}${h}${u}`
        );
      }
      return (
        n.defaultValue && n.defaultValue.indexOf(this.prefix) > -1 && delete n.defaultValue,
        l
      );
    };
    for (; (i = this.nestingRegexp.exec(e)); ) {
      let l = [];
      ((n = { ...s }),
        (n = n.replace && !m(n.replace) ? n.replace : n),
        (n.applyPostProcessor = !1),
        delete n.defaultValue);
      let c = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const h = i[1].split(this.formatSeparator).map((d) => d.trim());
        ((i[1] = h.shift()), (l = h), (c = !0));
      }
      if (((a = t(r.call(this, i[1].trim(), n), n)), a && i[0] === e && !m(a))) return a;
      (m(a) || (a = be(a)),
        a || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), (a = '')),
        c &&
          (a = l.reduce(
            (h, d) => this.format(h, d, s.lng, { ...s, interpolationkey: i[1].trim() }),
            a.trim(),
          )),
        (e = e.replace(i[0], a)),
        (this.regexp.lastIndex = 0));
    }
    return e;
  }
}
const Ds = (o) => {
    let e = o.toLowerCase().trim();
    const t = {};
    if (o.indexOf('(') > -1) {
      const s = o.split('(');
      e = s[0].toLowerCase().trim();
      const i = s[1].substring(0, s[1].length - 1);
      e === 'currency' && i.indexOf(':') < 0
        ? t.currency || (t.currency = i.trim())
        : e === 'relativetime' && i.indexOf(':') < 0
          ? t.range || (t.range = i.trim())
          : i.split(';').forEach((n) => {
              if (n) {
                const [r, ...l] = n.split(':'),
                  c = l
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  h = r.trim();
                (t[h] || (t[h] = c),
                  c === 'false' && (t[h] = !1),
                  c === 'true' && (t[h] = !0),
                  isNaN(c) || (t[h] = parseInt(c, 10)));
              }
            });
    }
    return { formatName: e, formatOptions: t };
  },
  D = (o) => {
    const e = {};
    return (t, s, i) => {
      let a = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (a = { ...a, [i.interpolationkey]: void 0 });
      const n = s + JSON.stringify(a);
      let r = e[n];
      return (r || ((r = o(Q(s), i)), (e[n] = r)), r(t));
    };
  };
class Vs {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = N.create('formatter')),
      (this.options = e),
      (this.formats = {
        number: D((t, s) => {
          const i = new Intl.NumberFormat(t, { ...s });
          return (a) => i.format(a);
        }),
        currency: D((t, s) => {
          const i = new Intl.NumberFormat(t, { ...s, style: 'currency' });
          return (a) => i.format(a);
        }),
        datetime: D((t, s) => {
          const i = new Intl.DateTimeFormat(t, { ...s });
          return (a) => i.format(a);
        }),
        relativetime: D((t, s) => {
          const i = new Intl.RelativeTimeFormat(t, { ...s });
          return (a) => i.format(a, s.range || 'day');
        }),
        list: D((t, s) => {
          const i = new Intl.ListFormat(t, { ...s });
          return (a) => i.format(a);
        }),
      }),
      this.init(e));
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = t.interpolation.formatSeparator || ',';
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = D(t);
  }
  format(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = t.split(this.formatSeparator);
    if (
      a.length > 1 &&
      a[0].indexOf('(') > 1 &&
      a[0].indexOf(')') < 0 &&
      a.find((r) => r.indexOf(')') > -1)
    ) {
      const r = a.findIndex((l) => l.indexOf(')') > -1);
      a[0] = [a[0], ...a.splice(1, r)].join(this.formatSeparator);
    }
    return a.reduce((r, l) => {
      const { formatName: c, formatOptions: h } = Ds(l);
      if (this.formats[c]) {
        let d = r;
        try {
          const u = i?.formatParams?.[i.interpolationkey] || {},
            g = u.locale || u.lng || i.locale || i.lng || s;
          d = this.formats[c](r, g, { ...h, ...i, ...u });
        } catch (u) {
          this.logger.warn(u);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${c}`);
      return r;
    }, e);
  }
}
const _s = (o, e) => {
  o.pending[e] !== void 0 && (delete o.pending[e], o.pendingCount--);
};
class Bs extends Z {
  constructor(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = e),
      (this.store = t),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = i),
      (this.logger = N.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend?.init?.(s, i.backend, i));
  }
  queueLoad(e, t, s, i) {
    const a = {},
      n = {},
      r = {},
      l = {};
    return (
      e.forEach((c) => {
        let h = !0;
        (t.forEach((d) => {
          const u = `${c}|${d}`;
          !s.reload && this.store.hasResourceBundle(c, d)
            ? (this.state[u] = 2)
            : this.state[u] < 0 ||
              (this.state[u] === 1
                ? n[u] === void 0 && (n[u] = !0)
                : ((this.state[u] = 1),
                  (h = !1),
                  n[u] === void 0 && (n[u] = !0),
                  a[u] === void 0 && (a[u] = !0),
                  l[d] === void 0 && (l[d] = !0)));
        }),
          h || (r[c] = !0));
      }),
      (Object.keys(a).length || Object.keys(n).length) &&
        this.queue.push({
          pending: n,
          pendingCount: Object.keys(n).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(a),
        pending: Object.keys(n),
        toLoadLanguages: Object.keys(r),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, t, s) {
    const i = e.split('|'),
      a = i[0],
      n = i[1];
    (t && this.emit('failedLoading', a, n, t),
      !t && s && this.store.addResourceBundle(a, n, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && s && (this.state[e] = 0));
    const r = {};
    (this.queue.forEach((l) => {
      (Cs(l.loaded, [a], n),
        _s(l, e),
        t && l.errors.push(t),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((c) => {
            r[c] || (r[c] = {});
            const h = l.loaded[c];
            h.length &&
              h.forEach((d) => {
                r[c][d] === void 0 && (r[c][d] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback()));
    }),
      this.emit('loaded', r),
      (this.queue = this.queue.filter((l) => !l.done)));
  }
  read(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      n = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return n(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: e, ns: t, fcName: s, tried: i, wait: a, callback: n });
      return;
    }
    this.readingCalls++;
    const r = (c, h) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (c && h && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, s, i + 1, a * 2, n);
          }, a);
          return;
        }
        n(c, h);
      },
      l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == 'function' ? c.then((h) => r(null, h)).catch(r) : r(null, c);
      } catch (c) {
        r(c);
      }
      return;
    }
    return l(e, t, r);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'),
        i && i()
      );
    (m(e) && (e = this.languageUtils.toResolveHierarchy(e)), m(t) && (t = [t]));
    const a = this.queueLoad(e, t, s, i);
    if (!a.toLoad.length) return (a.pending.length || i(), null);
    a.toLoad.forEach((n) => {
      this.loadOne(n);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, { reload: !0 }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const s = e.split('|'),
      i = s[0],
      a = s[1];
    this.read(i, a, 'read', void 0, void 0, (n, r) => {
      (n && this.logger.warn(`${t}loading namespace ${a} for language ${i} failed`, n),
        !n && r && this.logger.log(`${t}loaded namespace ${a} for language ${i}`, r),
        this.loaded(e, n, r));
    });
  }
  saveMissing(e, t, s, i, a) {
    let n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      r = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${t}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(s == null || s === '')) {
      if (this.backend?.create) {
        const l = { ...n, isUpdate: a },
          c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let h;
            (c.length === 5 ? (h = c(e, t, s, i, l)) : (h = c(e, t, s, i)),
              h && typeof h.then == 'function' ? h.then((d) => r(null, d)).catch(r) : r(null, h));
          } catch (h) {
            r(h);
          }
        else c(e, t, s, i, r, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
const Ce = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (o) => {
      let e = {};
      if (
        (typeof o[1] == 'object' && (e = o[1]),
        m(o[1]) && (e.defaultValue = o[1]),
        m(o[2]) && (e.tDescription = o[2]),
        typeof o[2] == 'object' || typeof o[3] == 'object')
      ) {
        const t = o[3] || o[2];
        Object.keys(t).forEach((s) => {
          e[s] = t[s];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (o) => o,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Pe = (o) => (
    m(o.ns) && (o.ns = [o.ns]),
    m(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]),
    m(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]),
    o.supportedLngs?.indexOf?.('cimode') < 0 &&
      (o.supportedLngs = o.supportedLngs.concat(['cimode'])),
    typeof o.initImmediate == 'boolean' && (o.initAsync = o.initImmediate),
    o
  ),
  J = () => {},
  Ks = (o) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((t) => {
      typeof o[t] == 'function' && (o[t] = o[t].bind(o));
    });
  };
class H extends Z {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Pe(e)),
      (this.services = {}),
      (this.logger = N),
      (this.modules = { external: [] }),
      Ks(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(e, t), this);
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof t == 'function' && ((s = t), (t = {})),
      t.defaultNS == null &&
        t.ns &&
        (m(t.ns)
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf('translation') < 0 && (t.defaultNS = t.ns[0])));
    const i = Ce();
    ((this.options = { ...i, ...this.options, ...Pe(t) }),
      (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
      t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator));
    const a = (h) => (h ? (typeof h == 'function' ? new h() : h) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? N.init(a(this.modules.logger), this.options)
        : N.init(null, this.options);
      let h;
      this.modules.formatter ? (h = this.modules.formatter) : (h = Vs);
      const d = new ve(this.options);
      this.store = new we(this.options.resources, this.options);
      const u = this.services;
      ((u.logger = N),
        (u.resourceStore = this.store),
        (u.languageUtils = d),
        (u.pluralResolver = new Ms(d, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        h &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((u.formatter = a(h)),
          u.formatter.init(u, this.options),
          (this.options.interpolation.format = u.formatter.format.bind(u.formatter))),
        (u.interpolator = new Us(this.options)),
        (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (u.backendConnector = new Bs(a(this.modules.backend), u.resourceStore, u, this.options)),
        u.backendConnector.on('*', function (g) {
          for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
            b[p - 1] = arguments[p];
          e.emit(g, ...b);
        }),
        this.modules.languageDetector &&
          ((u.languageDetector = a(this.modules.languageDetector)),
          u.languageDetector.init &&
            u.languageDetector.init(u, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((u.i18nFormat = a(this.modules.i18nFormat)),
          u.i18nFormat.init && u.i18nFormat.init(this)),
        (this.translator = new Y(this.services, this.options)),
        this.translator.on('*', function (g) {
          for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
            b[p - 1] = arguments[p];
          e.emit(g, ...b);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = J),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== 'dev' && (this.options.lng = h[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (h) => {
          this[h] = function () {
            return e.store[h](...arguments);
          };
        },
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((h) => {
        this[h] = function () {
          return (e.store[h](...arguments), e);
        };
      }));
    const l = B(),
      c = () => {
        const h = (d, u) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(u),
            s(d, u));
        };
        if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return (this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l);
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : J;
    const i = m(e) ? e : this.language;
    if (
      (typeof e == 'function' && (s = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i?.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const a = [],
        n = (r) => {
          if (!r || r === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(r).forEach((c) => {
            c !== 'cimode' && a.indexOf(c) < 0 && a.push(c);
          });
        };
      (i
        ? n(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => n(l)),
        this.options.preload?.forEach?.((r) => n(r)),
        this.services.backendConnector.load(a, this.options.ns, (r) => {
          (!r && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            s(r));
        }));
    } else s(null);
  }
  reloadResources(e, t, s) {
    const i = B();
    return (
      typeof e == 'function' && ((s = e), (e = void 0)),
      typeof t == 'function' && ((s = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      s || (s = J),
      this.services.backendConnector.reload(e, t, (a) => {
        (i.resolve(), s(a));
      }),
      i
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!e.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      e.type === 'backend' && (this.modules.backend = e),
      (e.type === 'logger' || (e.log && e.warn && e.error)) && (this.modules.logger = e),
      e.type === 'languageDetector' && (this.modules.languageDetector = e),
      e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
      e.type === 'postProcessor' && $e.addPostProcessor(e),
      e.type === 'formatter' && (this.modules.formatter = e),
      e.type === '3rdParty' && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(['cimode', 'dev'].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const i = B();
    this.emit('languageChanging', e);
    const a = (l) => {
        ((this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l));
      },
      n = (l, c) => {
        (c
          ? (a(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', c),
            this.logger.log('languageChanged', c))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return s.t(...arguments);
          }),
          t &&
            t(l, function () {
              return s.t(...arguments);
            }));
      },
      r = (l) => {
        !e && !l && this.services.languageDetector && (l = []);
        const c = m(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
        (c &&
          (this.language || a(c),
          this.translator.language || this.translator.changeLanguage(c),
          this.services.languageDetector?.cacheUserLanguage?.(c)),
          this.loadResources(c, (h) => {
            n(h, c);
          }));
      };
    return (
      !e && this.services.languageDetector && !this.services.languageDetector.async
        ? r(this.services.languageDetector.detect())
        : !e && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(r)
            : this.services.languageDetector.detect(r)
          : r(e),
      i
    );
  }
  getFixedT(e, t, s) {
    var i = this;
    const a = function (n, r) {
      let l;
      if (typeof r != 'object') {
        for (var c = arguments.length, h = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          h[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([n, r].concat(h));
      } else l = { ...r };
      ((l.lng = l.lng || a.lng),
        (l.lngs = l.lngs || a.lngs),
        (l.ns = l.ns || a.ns),
        l.keyPrefix !== '' && (l.keyPrefix = l.keyPrefix || s || a.keyPrefix));
      const u = i.options.keySeparator || '.';
      let g;
      return (
        l.keyPrefix && Array.isArray(n)
          ? (g = n.map((f) => `${l.keyPrefix}${u}${f}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${u}${n}` : n),
        i.t(g, l)
      );
    };
    return (m(e) ? (a.lng = e) : (a.lngs = e), (a.ns = t), (a.keyPrefix = s), a);
  }
  t() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.translator?.translate(...t);
  }
  exists() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return this.translator?.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      );
    const s = t.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      a = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === 'cimode') return !0;
    const n = (r, l) => {
      const c = this.services.backendConnector.state[`${r}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const r = t.precheck(this, n);
      if (r !== void 0) return r;
    }
    return !!(
      this.hasResourceBundle(s, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (n(s, e) && (!i || n(a, e)))
    );
  }
  loadNamespaces(e, t) {
    const s = B();
    return this.options.ns
      ? (m(e) && (e = [e]),
        e.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          (s.resolve(), t && t(i));
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = B();
    m(e) && (e = [e]);
    const i = this.options.preload || [],
      a = e.filter((n) => i.indexOf(n) < 0 && this.services.languageUtils.isSupportedCode(n));
    return a.length
      ? ((this.options.preload = i.concat(a)),
        this.loadResources((n) => {
          (s.resolve(), t && t(n));
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages?.length > 0 ? this.languages[0] : this.language)),
      !e)
    )
      return 'rtl';
    const t = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      s = this.services?.languageUtils || new ve(Ce());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new H(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : J;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = { ...this.options, ...e, isClone: !0 },
      a = new H(i);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)),
      ['store', 'services', 'language'].forEach((r) => {
        a[r] = this[r];
      }),
      (a.services = { ...this.services }),
      (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      s)
    ) {
      const r = Object.keys(this.store.data).reduce(
        (l, c) => (
          (l[c] = { ...this.store.data[c] }),
          Object.keys(l[c]).reduce((h, d) => ((h[d] = { ...l[c][d] }), h), {})
        ),
        {},
      );
      ((a.store = new we(r, i)), (a.services.resourceStore = a.store));
    }
    return (
      (a.translator = new Y(a.services, i)),
      a.translator.on('*', function (r) {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
          c[h - 1] = arguments[h];
        a.emit(r, ...c);
      }),
      a.init(i, t),
      (a.translator.options = i),
      (a.translator.backendConnector.services.utils = {
        hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
      }),
      a
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const C = H.createInstance();
C.createInstance = H.createInstance;
C.createInstance;
C.dir;
C.init;
C.loadResources;
C.reloadResources;
C.use;
C.changeLanguage;
C.getFixedT;
const ke = C.t;
C.exists;
C.setDefaultNamespace;
C.hasLoadedNamespace;
C.loadNamespaces;
C.loadLanguages;
const Qs = async (o) => {
    let e;
    try {
      const t = await o.json();
      e = {
        body: t.body,
        message: ke(`response.${t.errorType}`, { ns: 'error' }),
        type: t.errorType,
      };
    } catch {
      e = { message: ke(`response.${o.status}`, { ns: 'error' }), type: o.status };
    }
    return e;
  },
  Xs = ({ provider: o, runtimeProvider: e, payload: t }) => {
    const s = { ...t, ...ms(o) },
      i = { dangerouslyAllowBrowser: !0 };
    return le.initializeWithProvider(e ?? o, { ...i, ...s, ...t });
  };
export { Qs as g, Xs as i };
