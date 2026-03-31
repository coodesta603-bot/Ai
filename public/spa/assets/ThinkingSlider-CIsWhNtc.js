import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  gR as b,
  cF as B,
  au as U,
  cG as D,
  M as _,
  aD as j,
  ai as I,
  F as C,
} from './index-C8UyLGsD.js';
import { q as v } from './index-Br6hqyew.js';
import { I as T } from './InputNumber-DGocrXJO.js';
import { S as k } from './index-BvIL68ic.js';
import { L as $ } from './LevelSlider-Chbv3HA0.js';
const Le = { disabled: !1, generating: !1, onStop: () => {} },
  H = {
    allowExpand: !0,
    expand: !1,
    isContentEmpty: !1,
    leftActions: [],
    markdownContent: '',
    rightActions: [],
    slashMenuRef: { current: null },
    slashPlacement: 'top',
  },
  X = (e) => (s, t) => ({
    ...H,
    ...e,
    getJSONState: () => t().editor?.getDocument('json'),
    getMarkdownContent: () => String(t().editor?.getDocument('markdown') || '').trimEnd(),
    handleSendButton: () => {
      const o = t().editor;
      o &&
        (t().onSend?.({
          clearContent: () => o?.cleanDocument(),
          editor: o,
          getEditorData: t().getJSONState,
          getMarkdownContent: t().getMarkdownContent,
        }),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            o.focus();
          });
        }));
    },
    handleStop: () => {
      t().editor && t().sendButtonProps?.onStop?.({ editor: t().editor });
    },
    setDocument: (o, d, r) => {
      t().editor?.setDocument(o, d, r);
    },
    setExpand: (o) => {
      s({ expand: o });
    },
    setJSONState: (o) => {
      t().editor?.setDocument('json', o);
    },
    setShowTypoBar: (o) => {
      s({ showTypoBar: o });
    },
    updateMarkdownContent: () => {
      if (!t().onMarkdownContentChange) return;
      const o = t().getMarkdownContent();
      o !== t().markdownContent && (t().onMarkdownContentChange?.(o), s({ markdownContent: o }));
    },
  }),
  Oe = (e) => B(D(X(e)), U),
  { useStore: q, useStoreApi: Ve, Provider: ve } = b(),
  L = () => {
    const e = q((t) => t.agentId),
      s = _((t) => t.activeAgentId);
    return e !== void 0 ? e : s || '';
  },
  K = () => {
    const e = L(),
      s = _((r) => r.updateAgentConfigById),
      t = _((r) => r.updateAgentChatConfigById),
      o = l.useCallback((r) => s(e, r), [e, s]);
    return { updateAgentChatConfig: l.useCallback((r) => t(e, r), [e, t]), updateAgentConfig: o };
  };
function g(e) {
  const { levels: s, configKey: t, defaultValue: o, marks: d, style: r } = e,
    c = l.memo(({ value: m, onChange: i, defaultValue: n }) =>
      a.jsx($, { defaultValue: n, levels: s, marks: d, style: r, value: m, onChange: i }),
    ),
    f = l.memo(({ defaultValue: m }) => {
      const i = L(),
        { updateAgentChatConfig: n } = K(),
        N = _((O) => v.getChatConfigById(i)(O))[t] || m,
        P = (O) => {
          n({ [t]: O });
        };
      return a.jsx(c, { defaultValue: m, value: N, onChange: P });
    });
  return l.memo(({ value: m, onChange: i, defaultValue: n }) => {
    const u = n ?? o;
    return m !== void 0 || i !== void 0
      ? a.jsx(c, { defaultValue: u, value: m ?? u, onChange: i ?? (() => {}) })
      : a.jsx(f, { defaultValue: u });
  });
}
const z = ['low', 'medium', 'high', 'xhigh'],
  Ke = g({
    configKey: 'codexMaxReasoningEffort',
    defaultValue: 'medium',
    levels: z,
    style: { minWidth: 200 },
  }),
  J = ['low', 'medium', 'high', 'max'],
  Ne = g({ configKey: 'effort', defaultValue: 'high', levels: J, style: { minWidth: 200 } }),
  Y = ['minimal', 'low', 'medium', 'high'],
  we = g({
    configKey: 'gpt5ReasoningEffort',
    defaultValue: 'medium',
    levels: Y,
    style: { minWidth: 200 },
  }),
  Q = ['none', 'low', 'medium', 'high'],
  Fe = g({
    configKey: 'gpt5_1ReasoningEffort',
    defaultValue: 'none',
    levels: Q,
    style: { minWidth: 200 },
  }),
  Z = ['medium', 'high', 'xhigh'],
  Me = g({
    configKey: 'gpt5_2ProReasoningEffort',
    defaultValue: 'medium',
    levels: Z,
    style: { minWidth: 160 },
  }),
  ee = ['none', 'low', 'medium', 'high', 'xhigh'],
  je = g({
    configKey: 'gpt5_2ReasoningEffort',
    defaultValue: 'none',
    levels: ee,
    style: { minWidth: 230 },
  }),
  te = ['low', 'medium', 'high', 'xhigh'],
  We = g({
    configKey: 'grok4_20ReasoningEffort',
    defaultValue: 'medium',
    levels: te,
    style: { minWidth: 200 },
  }),
  ne = [
    'auto',
    '1:1',
    '2:3',
    '3:2',
    '3:4',
    '4:3',
    '4:5',
    '5:4',
    '9:16',
    '16:9',
    '21:9',
    '1:4',
    '4:1',
    '1:8',
    '8:1',
  ],
  W = l.memo(({ value: e, onChange: s }) => {
    const t = l.useMemo(() => ne.map((o) => ({ label: o, value: o })), []);
    return a.jsx(j, {
      options: t,
      style: { height: 32, marginRight: 10, width: 75 },
      value: e,
      onChange: (o) => s(o),
    });
  }),
  oe = l.memo(({ defaultValue: e }) => {
    const s = L(),
      { updateAgentChatConfig: t } = K(),
      d = _((c) => v.getChatConfigById(s)(c)).imageAspectRatio2 || e,
      r = (c) => {
        t({ imageAspectRatio2: c });
      };
    return a.jsx(W, { value: d, onChange: r });
  }),
  Ge = l.memo(({ value: e, onChange: s, defaultValue: t = 'auto' }) =>
    e !== void 0 || s !== void 0
      ? a.jsx(W, { value: e ?? t, onChange: s ?? (() => {}) })
      : a.jsx(oe, { defaultValue: t }),
  ),
  ie = ['auto', '1:1', '2:3', '3:2', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9', '21:9'],
  G = l.memo(({ value: e, onChange: s }) => {
    const t = l.useMemo(() => ie.map((o) => ({ label: o, value: o })), []);
    return a.jsx(j, {
      options: t,
      style: { height: 32, marginRight: 10, width: 75 },
      value: e,
      onChange: (o) => s(o),
    });
  }),
  se = l.memo(({ defaultValue: e }) => {
    const s = L(),
      { updateAgentChatConfig: t } = K(),
      d = _((c) => v.getChatConfigById(s)(c)).imageAspectRatio || e,
      r = (c) => {
        t({ imageAspectRatio: c });
      };
    return a.jsx(G, { value: d, onChange: r });
  }),
  Pe = l.memo(({ value: e, onChange: s, defaultValue: t = 'auto' }) =>
    e !== void 0 || s !== void 0
      ? a.jsx(G, { value: e ?? t, onChange: s ?? (() => {}) })
      : a.jsx(se, { defaultValue: t }),
  ),
  ae = ['512px', '1K', '2K', '4K'],
  be = g({
    configKey: 'imageResolution',
    defaultValue: '1K',
    levels: ae,
    style: { minWidth: 190 },
  }),
  re = ['1K', '2K', '4K'],
  Be = g({
    configKey: 'imageResolution',
    defaultValue: '1K',
    levels: re,
    style: { minWidth: 150 },
  }),
  le = ['low', 'medium', 'high'],
  Ue = g({
    configKey: 'reasoningEffort',
    defaultValue: 'medium',
    levels: le,
    style: { minWidth: 200 },
  }),
  E = 1024,
  w = 64 * E,
  h = (e) => Math.log2(e),
  de = (e) => Math.round(Math.pow(2, e) * E),
  De = l.memo(({ value: e, onChange: s, defaultValue: t }) => {
    const [o, d] = I(0, { defaultValue: t, onChange: s, value: e }),
      [r, c] = I(0, {
        defaultValue: h(typeof t > 'u' ? 0 : t / 1024),
        value: h(typeof e > 'u' ? 0 : e / E),
      }),
      f = (n) => {
        (c(n), d(Math.min(de(n), w)));
      },
      S = (n) => {
        (d(Math.round(n)), c(h(n / E)));
      },
      m = l.useMemo(
        () => ({
          [h(1)]: '1k',
          [h(2)]: '2k',
          [h(4)]: '4k',
          [h(8)]: '8k',
          [h(16)]: '16k',
          [h(32)]: '32k',
          [h(64)]: '64k',
        }),
        [],
      ),
      i = l.useMemo(() => {
        const n = o ?? 0;
        return n <= E ? 128 : n < 8 * E ? E : 4 * E;
      }, [o]);
    return a.jsxs(C, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      paddingInline: '4px 0',
      children: [
        a.jsx(C, {
          flex: 1,
          children: a.jsx(k, {
            marks: m,
            max: h(64),
            min: h(1),
            step: null,
            tooltip: { open: !1 },
            value: r,
            onChange: f,
          }),
        }),
        a.jsx('div', {
          children: a.jsx(T, {
            changeOnWheel: !0,
            max: w,
            min: 0,
            step: i,
            style: { width: 80 },
            value: o,
            onChange: (n) => {
              (!n && n !== 0) || S(n);
            },
          }),
        }),
      ],
    });
  }),
  x = 1024,
  F = 32 * x,
  y = [1, 2, 4, 8, 16, 32],
  $e = l.memo(({ value: e, onChange: s, defaultValue: t }) => {
    const [o, d] = I(0, { defaultValue: t, onChange: s, value: e }),
      r = (i) => {
        const n = i / x;
        for (let u = 0; u < y.length - 1; u++) if (n <= y[u]) return u;
        return y.length - 1;
      },
      [c, f] = I(0, { defaultValue: typeof t > 'u' ? 0 : r(t), value: typeof e > 'u' ? 0 : r(e) }),
      S = l.useMemo(() => y.reduce((i, n, u) => ((i[u] = `${n}k`), i), {}), []),
      m = l.useMemo(() => {
        const i = o ?? 0;
        return i <= x ? 128 : i < 8 * x ? x : 4 * x;
      }, [o]);
    return a.jsxs(C, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      paddingInline: '4px 0',
      children: [
        a.jsx(C, {
          flex: 1,
          style: { minWidth: 200, maxWidth: 320 },
          children: a.jsx(k, {
            marks: S,
            max: y.length - 1,
            min: 0,
            step: null,
            tooltip: { open: !1 },
            value: c,
            onChange: (i) => {
              (f(i), d(y[i] * x));
            },
          }),
        }),
        a.jsx('div', {
          children: a.jsx(T, {
            changeOnWheel: !0,
            max: F,
            min: 0,
            step: m,
            style: { width: 80 },
            value: o,
            onChange: (i) => {
              if (!i && i !== 0) return;
              const n = Math.min(Math.round(i), F);
              (d(n), f(r(n)));
            },
          }),
        }),
      ],
    });
  }),
  A = 1024,
  M = 80 * A,
  R = [1, 2, 4, 8, 16, 32, 64, 80],
  He = l.memo(({ value: e, onChange: s, defaultValue: t }) => {
    const [o, d] = I(0, { defaultValue: t, onChange: s, value: e }),
      r = (i) => {
        const n = i / A;
        for (let u = 0; u < R.length - 1; u++) if (n <= R[u]) return u;
        return R.length - 1;
      },
      [c, f] = I(0, { defaultValue: typeof t > 'u' ? 0 : r(t), value: typeof e > 'u' ? 0 : r(e) }),
      S = l.useMemo(() => R.reduce((i, n, u) => ((i[u] = `${n}k`), i), {}), []),
      m = l.useMemo(() => {
        const i = o ?? 0;
        return i <= A ? 128 : i < 8 * A ? A : 4 * A;
      }, [o]);
    return a.jsxs(C, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      paddingInline: '4px 0',
      children: [
        a.jsx(C, {
          flex: 1,
          style: { minWidth: 200, maxWidth: 320 },
          children: a.jsx(k, {
            marks: S,
            max: R.length - 1,
            min: 0,
            step: null,
            tooltip: { open: !1 },
            value: c,
            onChange: (i) => {
              (f(i), d(R[i] * A));
            },
          }),
        }),
        a.jsx('div', {
          children: a.jsx(T, {
            changeOnWheel: !0,
            max: M,
            min: 0,
            step: m,
            style: { width: 80 },
            value: o,
            onChange: (i) => {
              if (!i && i !== 0) return;
              const n = Math.min(Math.round(i), M);
              (d(n), f(r(n)));
            },
          }),
        }),
      ],
    });
  }),
  ue = ['low', 'medium', 'high'],
  Xe = g({
    configKey: 'textVerbosity',
    defaultValue: 'medium',
    levels: ue,
    style: { minWidth: 160 },
  }),
  p = { AUTO: -1, OFF: 0 },
  V = [p.AUTO, p.OFF, 128, 512, 1024, 2048, 4096, 8192, 16384, 24576, 32768],
  ce = (e) => {
    const s = V.indexOf(e);
    if (s !== -1) return s;
    if (e <= p.AUTO) return 0;
    if (e > p.OFF && e <= 128) return 2;
    let t = 0;
    for (const [o, d] of V.entries()) {
      if (d <= e) {
        t = o;
        continue;
      }
      break;
    }
    return t;
  },
  ge = (e) => {
    const s = V[e];
    return s === void 0 ? p.AUTO : s;
  },
  me = (e) => (e < 0 ? 1 : e <= 1024 ? 128 : e < 8192 ? 1024 : 2048),
  qe = l.memo(({ value: e, onChange: s, defaultValue: t }) => {
    const o = e ?? t ?? p.AUTO,
      [d, r] = I(o, { defaultValue: t, onChange: s, value: e }),
      c = ce(d),
      f = (n) => {
        const u = ge(n);
        r(u);
      },
      S = (n) => {
        r(n);
      },
      m = l.useMemo(() => me(d), [d]),
      i = l.useMemo(
        () => ({
          0: 'Auto',
          1: 'OFF',
          2: '128',
          3: '512',
          4: '1K',
          5: '2K',
          6: '4K',
          7: '8K',
          8: '16K',
          9: '24K',
          10: '32K',
        }),
        [],
      );
    return a.jsxs(C, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      paddingInline: '4px 0',
      children: [
        a.jsx(C, {
          flex: 1,
          children: a.jsx(k, {
            marks: i,
            max: 10,
            min: 0,
            step: null,
            tooltip: { open: !1 },
            value: c,
            onChange: f,
          }),
        }),
        a.jsx('div', {
          children: a.jsx(T, {
            changeOnWheel: !0,
            max: 32768,
            min: -1,
            step: m,
            style: { width: 80 },
            value: d,
            formatter: (n, u) => (n === p.AUTO ? 'Auto' : n === p.OFF ? 'OFF' : `${n}`),
            parser: (n) =>
              typeof n == 'string'
                ? n.toLowerCase() === 'auto'
                  ? p.AUTO
                  : n.toLowerCase() === 'off'
                    ? p.OFF
                    : parseInt(n.replaceAll(/[^\d-]/g, ''), 10) || 0
                : typeof n == 'number'
                  ? n
                  : p.AUTO,
            onChange: (n) => {
              n != null && S(n);
            },
          }),
        }),
      ],
    });
  }),
  he = ['low', 'high'],
  ze = g({
    configKey: 'thinkingLevel',
    defaultValue: 'high',
    levels: he,
    style: { minWidth: 110 },
  }),
  fe = ['low', 'medium', 'high'],
  Je = g({
    configKey: 'thinkingLevel',
    defaultValue: 'high',
    levels: fe,
    style: { minWidth: 160 },
  }),
  pe = ['minimal', 'high'],
  Ye = g({
    configKey: 'thinkingLevel',
    defaultValue: 'minimal',
    levels: pe,
    style: { minWidth: 110 },
  }),
  Se = ['minimal', 'low', 'medium', 'high'],
  Qe = g({
    configKey: 'thinkingLevel',
    defaultValue: 'minimal',
    levels: Se,
    style: { minWidth: 200 },
  }),
  Ee = ['minimal', 'low', 'medium', 'high'],
  Ze = g({
    configKey: 'thinkingLevel',
    defaultValue: 'high',
    levels: Ee,
    style: { minWidth: 200 },
  }),
  Ce = ['disabled', 'auto', 'enabled'],
  xe = { 0: 'OFF', 1: 'Auto', 2: 'ON' },
  et = g({
    configKey: 'thinking',
    defaultValue: 'auto',
    levels: Ce,
    marks: xe,
    style: { minWidth: 200 },
  });
export {
  Ke as C,
  Ne as E,
  We as G,
  be as I,
  ve as P,
  Ue as R,
  Qe as T,
  Ye as a,
  Je as b,
  ze as c,
  Ze as d,
  qe as e,
  et as f,
  Xe as g,
  He as h,
  $e as i,
  De as j,
  Be as k,
  Ge as l,
  Pe as m,
  je as n,
  Me as o,
  Fe as p,
  we as q,
  K as r,
  Le as s,
  q as t,
  L as u,
  Ve as v,
  Oe as w,
};
