import { jD as E, jE as v, ii as I, ij as M, _ as W, jF as x } from './index-C8UyLGsD.js';
import {
  jG as Se,
  jH as Ue,
  jI as we,
  jJ as Le,
  jK as be,
  iY as Ae,
  j0 as Pe,
  jL as je,
  jM as ke,
  i_ as Ce,
  jN as He,
  jO as Oe,
  jP as Be,
  jQ as Ee,
  jR as ve,
  jS as Ie,
  jT as Me,
  jU as We,
  jV as xe,
  jW as De,
  jX as Ve,
  iX as Re,
  iZ as Ne,
  jY as Fe,
  jZ as ze,
  j_ as Ge,
  ik as Je,
  j$ as $e,
  k0 as Xe,
  k1 as Ye,
  k2 as Ze,
  i$ as Ke,
  k3 as Qe,
  k4 as qe,
  k5 as et,
  k6 as tt,
  k7 as nt,
  k8 as it,
} from './index-C8UyLGsD.js';
import { B as O } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { c as st, d as ot } from './engine-compile-CWG9UysY.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
class k extends Error {
  constructor(e) {
    (super(e), (this.name = 'ShikiError'));
  }
}
function D() {
  return 2147483648;
}
function V() {
  return typeof performance < 'u' ? performance.now() : Date.now();
}
const R = (i, e) => i + ((e - (i % e)) % e);
async function N(i) {
  let e, n;
  const t = {};
  function l(s) {
    ((n = s), (t.HEAPU8 = new Uint8Array(s)), (t.HEAPU32 = new Uint32Array(s)));
  }
  function h(s, u, U) {
    t.HEAPU8.copyWithin(s, u, u + U);
  }
  function a(s) {
    try {
      return (e.grow((s - n.byteLength + 65535) >>> 16), l(e.buffer), 1);
    } catch {}
  }
  function o(s) {
    const u = t.HEAPU8.length;
    s = s >>> 0;
    const U = D();
    if (s > U) return !1;
    for (let w = 1; w <= 4; w *= 2) {
      let p = u * (1 + 0.2 / w);
      p = Math.min(p, s + 100663296);
      const S = Math.min(U, R(Math.max(s, p), 65536));
      if (a(S)) return !0;
    }
    return !1;
  }
  const r = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
  function f(s, u, U = 1024) {
    const w = u + U;
    let p = u;
    for (; s[p] && !(p >= w); ) ++p;
    if (p - u > 16 && s.buffer && r) return r.decode(s.subarray(u, p));
    let S = '';
    for (; u < p; ) {
      let m = s[u++];
      if (!(m & 128)) {
        S += String.fromCharCode(m);
        continue;
      }
      const P = s[u++] & 63;
      if ((m & 224) === 192) {
        S += String.fromCharCode(((m & 31) << 6) | P);
        continue;
      }
      const C = s[u++] & 63;
      if (
        ((m & 240) === 224
          ? (m = ((m & 15) << 12) | (P << 6) | C)
          : (m = ((m & 7) << 18) | (P << 12) | (C << 6) | (s[u++] & 63)),
        m < 65536)
      )
        S += String.fromCharCode(m);
      else {
        const H = m - 65536;
        S += String.fromCharCode(55296 | (H >> 10), 56320 | (H & 1023));
      }
    }
    return S;
  }
  function _(s, u) {
    return s ? f(t.HEAPU8, s, u) : '';
  }
  const c = {
    emscripten_get_now: V,
    emscripten_memcpy_big: h,
    emscripten_resize_heap: o,
    fd_write: () => 0,
  };
  async function y() {
    const u = await i({ env: c, wasi_snapshot_preview1: c });
    ((e = u.memory), l(e.buffer), Object.assign(t, u), (t.UTF8ToString = _));
  }
  return (await y(), t);
}
var F = Object.defineProperty,
  z = (i, e, n) =>
    e in i ? F(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (i[e] = n),
  g = (i, e, n) => z(i, typeof e != 'symbol' ? e + '' : e, n);
let d = null;
function G(i) {
  throw new k(i.UTF8ToString(i.getLastOnigError()));
}
class b {
  constructor(e) {
    (g(this, 'utf16Length'),
      g(this, 'utf8Length'),
      g(this, 'utf16Value'),
      g(this, 'utf8Value'),
      g(this, 'utf16OffsetToUtf8'),
      g(this, 'utf8OffsetToUtf16'));
    const n = e.length,
      t = b._utf8ByteLength(e),
      l = t !== n,
      h = l ? new Uint32Array(n + 1) : null;
    l && (h[n] = t);
    const a = l ? new Uint32Array(t + 1) : null;
    l && (a[t] = n);
    const o = new Uint8Array(t);
    let r = 0;
    for (let f = 0; f < n; f++) {
      const _ = e.charCodeAt(f);
      let c = _,
        y = !1;
      if (_ >= 55296 && _ <= 56319 && f + 1 < n) {
        const s = e.charCodeAt(f + 1);
        s >= 56320 && s <= 57343 && ((c = (((_ - 55296) << 10) + 65536) | (s - 56320)), (y = !0));
      }
      (l &&
        ((h[f] = r),
        y && (h[f + 1] = r),
        c <= 127
          ? (a[r + 0] = f)
          : c <= 2047
            ? ((a[r + 0] = f), (a[r + 1] = f))
            : c <= 65535
              ? ((a[r + 0] = f), (a[r + 1] = f), (a[r + 2] = f))
              : ((a[r + 0] = f), (a[r + 1] = f), (a[r + 2] = f), (a[r + 3] = f))),
        c <= 127
          ? (o[r++] = c)
          : c <= 2047
            ? ((o[r++] = 192 | ((c & 1984) >>> 6)), (o[r++] = 128 | ((c & 63) >>> 0)))
            : c <= 65535
              ? ((o[r++] = 224 | ((c & 61440) >>> 12)),
                (o[r++] = 128 | ((c & 4032) >>> 6)),
                (o[r++] = 128 | ((c & 63) >>> 0)))
              : ((o[r++] = 240 | ((c & 1835008) >>> 18)),
                (o[r++] = 128 | ((c & 258048) >>> 12)),
                (o[r++] = 128 | ((c & 4032) >>> 6)),
                (o[r++] = 128 | ((c & 63) >>> 0))),
        y && f++);
    }
    ((this.utf16Length = n),
      (this.utf8Length = t),
      (this.utf16Value = e),
      (this.utf8Value = o),
      (this.utf16OffsetToUtf8 = h),
      (this.utf8OffsetToUtf16 = a));
  }
  static _utf8ByteLength(e) {
    let n = 0;
    for (let t = 0, l = e.length; t < l; t++) {
      const h = e.charCodeAt(t);
      let a = h,
        o = !1;
      if (h >= 55296 && h <= 56319 && t + 1 < l) {
        const r = e.charCodeAt(t + 1);
        r >= 56320 && r <= 57343 && ((a = (((h - 55296) << 10) + 65536) | (r - 56320)), (o = !0));
      }
      (a <= 127 ? (n += 1) : a <= 2047 ? (n += 2) : a <= 65535 ? (n += 3) : (n += 4), o && t++);
    }
    return n;
  }
  createString(e) {
    const n = e.omalloc(this.utf8Length);
    return (e.HEAPU8.set(this.utf8Value, n), n);
  }
}
const A = class T {
  constructor(e) {
    if (
      (g(this, 'id', ++T.LAST_ID),
      g(this, '_onigBinding'),
      g(this, 'content'),
      g(this, 'utf16Length'),
      g(this, 'utf8Length'),
      g(this, 'utf16OffsetToUtf8'),
      g(this, 'utf8OffsetToUtf16'),
      g(this, 'ptr'),
      !d)
    )
      throw new k('Must invoke loadWasm first.');
    ((this._onigBinding = d), (this.content = e));
    const n = new b(e);
    ((this.utf16Length = n.utf16Length),
      (this.utf8Length = n.utf8Length),
      (this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8),
      (this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16),
      this.utf8Length < 1e4 && !T._sharedPtrInUse
        ? (T._sharedPtr || (T._sharedPtr = d.omalloc(1e4)),
          (T._sharedPtrInUse = !0),
          d.HEAPU8.set(n.utf8Value, T._sharedPtr),
          (this.ptr = T._sharedPtr))
        : (this.ptr = n.createString(d)));
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16
      ? e < 0
        ? 0
        : e > this.utf8Length
          ? this.utf16Length
          : this.utf8OffsetToUtf16[e]
      : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8
      ? e < 0
        ? 0
        : e > this.utf16Length
          ? this.utf8Length
          : this.utf16OffsetToUtf8[e]
      : e;
  }
  dispose() {
    this.ptr === T._sharedPtr ? (T._sharedPtrInUse = !1) : this._onigBinding.ofree(this.ptr);
  }
};
g(A, 'LAST_ID', 0);
g(A, '_sharedPtr', 0);
g(A, '_sharedPtrInUse', !1);
let B = A;
class J {
  constructor(e) {
    if ((g(this, '_onigBinding'), g(this, '_ptr'), !d)) throw new k('Must invoke loadWasm first.');
    const n = [],
      t = [];
    for (let o = 0, r = e.length; o < r; o++) {
      const f = new b(e[o]);
      ((n[o] = f.createString(d)), (t[o] = f.utf8Length));
    }
    const l = d.omalloc(4 * e.length);
    d.HEAPU32.set(n, l / 4);
    const h = d.omalloc(4 * e.length);
    d.HEAPU32.set(t, h / 4);
    const a = d.createOnigScanner(l, h, e.length);
    for (let o = 0, r = e.length; o < r; o++) d.ofree(n[o]);
    (d.ofree(h), d.ofree(l), a === 0 && G(d), (this._onigBinding = d), (this._ptr = a));
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e, n, t) {
    let l = 0;
    if ((typeof t == 'number' && (l = t), typeof e == 'string')) {
      e = new B(e);
      const h = this._findNextMatchSync(e, n, !1, l);
      return (e.dispose(), h);
    }
    return this._findNextMatchSync(e, n, !1, l);
  }
  _findNextMatchSync(e, n, t, l) {
    const h = this._onigBinding,
      a = h.findNextOnigScannerMatch(
        this._ptr,
        e.id,
        e.ptr,
        e.utf8Length,
        e.convertUtf16OffsetToUtf8(n),
        l,
      );
    if (a === 0) return null;
    const o = h.HEAPU32;
    let r = a / 4;
    const f = o[r++],
      _ = o[r++],
      c = [];
    for (let y = 0; y < _; y++) {
      const s = e.convertUtf8OffsetToUtf16(o[r++]),
        u = e.convertUtf8OffsetToUtf16(o[r++]);
      c[y] = { start: s, end: u, length: u - s };
    }
    return { index: f, captureIndices: c };
  }
}
function $(i) {
  return typeof i.instantiator == 'function';
}
function X(i) {
  return typeof i.default == 'function';
}
function Y(i) {
  return typeof i.data < 'u';
}
function Z(i) {
  return typeof Response < 'u' && i instanceof Response;
}
function K(i) {
  return (
    (typeof ArrayBuffer < 'u' && (i instanceof ArrayBuffer || ArrayBuffer.isView(i))) ||
    (typeof O < 'u' && O.isBuffer?.(i)) ||
    (typeof SharedArrayBuffer < 'u' && i instanceof SharedArrayBuffer) ||
    (typeof Uint32Array < 'u' && i instanceof Uint32Array)
  );
}
let L;
function Q(i) {
  if (L) return L;
  async function e() {
    d = await N(async (n) => {
      let t = i;
      return (
        (t = await t),
        typeof t == 'function' && (t = await t(n)),
        typeof t == 'function' && (t = await t(n)),
        $(t)
          ? (t = await t.instantiator(n))
          : X(t)
            ? (t = await t.default(n))
            : (Y(t) && (t = t.data),
              Z(t)
                ? typeof WebAssembly.instantiateStreaming == 'function'
                  ? (t = await q(t)(n))
                  : (t = await ee(t)(n))
                : K(t)
                  ? (t = await j(t)(n))
                  : t instanceof WebAssembly.Module
                    ? (t = await j(t)(n))
                    : 'default' in t &&
                      t.default instanceof WebAssembly.Module &&
                      (t = await j(t.default)(n))),
        'instance' in t && (t = t.instance),
        'exports' in t && (t = t.exports),
        t
      );
    });
  }
  return ((L = e()), L);
}
function j(i) {
  return (e) => WebAssembly.instantiate(i, e);
}
function q(i) {
  return (e) => WebAssembly.instantiateStreaming(i, e);
}
function ee(i) {
  return async (e) => {
    const n = await i.arrayBuffer();
    return WebAssembly.instantiate(n, e);
  };
}
async function te(i) {
  return (
    i && (await Q(i)),
    {
      createScanner(e) {
        return new J(e.map((n) => (typeof n == 'string' ? n : n.source)));
      },
      createString(e) {
        return new B(e);
      },
    }
  );
}
const ne = v({ langs: I, themes: M, engine: () => te(W(() => import('./wasm-CG6Dc4jp.js'), [])) }),
  {
    codeToHtml: le,
    codeToHast: he,
    codeToTokens: ge,
    codeToTokensBase: de,
    codeToTokensWithThemes: me,
    getSingletonHighlighter: pe,
    getLastGrammarState: Te,
  } = E(ne, { guessEmbeddedLanguages: x });
export {
  Se as ShikiError,
  Ue as addClassToHast,
  we as applyColorReplacements,
  I as bundledLanguages,
  Le as bundledLanguagesAlias,
  be as bundledLanguagesBase,
  Ae as bundledLanguagesInfo,
  M as bundledThemes,
  Pe as bundledThemesInfo,
  he as codeToHast,
  le as codeToHtml,
  ge as codeToTokens,
  de as codeToTokensBase,
  me as codeToTokensWithThemes,
  v as createBundledHighlighter,
  je as createCssVariablesTheme,
  ne as createHighlighter,
  ke as createHighlighterCore,
  Ce as createHighlighterCoreSync,
  st as createJavaScriptRegexEngine,
  te as createOnigurumaEngine,
  He as createPositionConverter,
  Oe as createShikiInternal,
  Be as createShikiInternalSync,
  E as createSingletonShorthands,
  Ee as createdBundledHighlighter,
  ot as defaultJavaScriptRegexConstructor,
  ve as enableDeprecationWarnings,
  Ie as flatTokenVariants,
  Te as getLastGrammarState,
  pe as getSingletonHighlighter,
  Me as getSingletonHighlighterCore,
  We as getTokenStyleObject,
  x as guessEmbeddedLanguages,
  xe as hastToHtml,
  De as isNoneTheme,
  Ve as isPlainLang,
  Re as isSpecialLang,
  Ne as isSpecialTheme,
  Q as loadWasm,
  Fe as makeSingletonHighlighter,
  ze as makeSingletonHighlighterCore,
  Ge as normalizeGetter,
  Je as normalizeTheme,
  $e as resolveColorReplacements,
  Xe as splitLines,
  Ye as splitToken,
  Ze as splitTokens,
  Ke as stringifyTokenStyle,
  Qe as toArray,
  qe as tokenizeAnsiWithTheme,
  et as tokenizeWithTheme,
  tt as tokensToHast,
  nt as transformerDecorations,
  it as warnDeprecated,
};
