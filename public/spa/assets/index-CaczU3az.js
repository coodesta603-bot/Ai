import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as Ee } from './store-Cj3bQrT7.js';
import { an as W, q as Te } from './index-Br6hqyew.js';
import {
  F as P,
  g as U,
  ax as ee,
  j as Y,
  bq as te,
  bx as se,
  fm as we,
  J as L,
  M as Be,
  v as ne,
  b3 as ze,
  f as Oe,
  ae as Pe,
  A as Fe,
  i as Ne,
  w as Ge,
} from './index-C8UyLGsD.js';
import { W as F } from './index-9IUPw_JO.js';
import { S as B } from './index-DLsdvBKx.js';
import {
  u,
  m as T,
  f as oe,
  K as re,
  O as ae,
  Q as ie,
  T as le,
  h as E,
  U as Le,
  V as _e,
  X as De,
  Y as He,
  Z as Ve,
  _ as $e,
  $ as H,
  a0 as qe,
  i as Ue,
  M as Ye,
} from './index-bsLCy3LH.js';
import { A as _ } from './ActionIconGroup-DGEsztGU.js';
import { a as ce } from './imperative-Cstfu8oK.js';
import {
  t as Ke,
  h as de,
  cn as ue,
  cN as ge,
  dL as he,
  cq as pe,
  dM as me,
  aH as fe,
  cO as ye,
  dN as xe,
  dO as We,
  dP as Je,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { e as K } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { t as Qe } from './index-yRquFwd4.js';
const Xe = (e, s) => (t) => {
    if (!e || !s) return null;
    const n = t.notebookMap[e];
    return (n && n.find((r) => r.id === s)) || null;
  },
  Ze = (e) => (s) => (e ? s.notebookMap[e] || [] : []),
  et = (e) => (s) => {
    if (!e) return !1;
    const t = s.notebookMap[e];
    return t && t.length > 0;
  },
  tt = { getDocumentById: Xe, getDocumentsByTopicId: Ze, hasDocuments: et },
  st = (e) => e.atBottom,
  nt = (e) => e.isScrolling,
  ot = (e) => e.activeIndex,
  rt = (e) => e.visibleItems,
  at = (e) => e.virtuaScrollMethods,
  O = { activeIndex: ot, atBottom: st, isScrolling: nt, virtuaScrollMethods: at, visibleItems: rt },
  it = (e) => {
    Ee((t) => t.useFetchMemoriesForTopic)(e);
  },
  lt = (e) => {
    const s = W((r) => r.useFetchDocuments),
      t = W((r) => tt.getDocumentsByTopicId(e)(r)),
      { isLoading: n } = s(e);
    return { documents: t, isLoading: n, topicId: e };
  },
  ct = a.memo(() =>
    o.jsxs(F, {
      flex: 1,
      gap: 36,
      height: '100%',
      padding: 12,
      style: { marginTop: 24 },
      children: [
        o.jsx(P, {
          gap: 8,
          width: '100%',
          style: { paddingLeft: '25%' },
          children: o.jsx(B.Paragraph, { active: !0, rows: 3, style: { alignItems: 'flex-end' } }),
        }),
        o.jsxs(P, {
          gap: 8,
          width: '100%',
          children: [
            o.jsx(B, { active: !0, paragraph: !1, avatar: { shape: 'square', size: 28 } }),
            o.jsx(B.Paragraph, {}),
            o.jsx(B.Tags, { count: 2 }),
          ],
        }),
        o.jsxs(P, {
          gap: 8,
          width: '100%',
          children: [
            o.jsx(B, { active: !0, paragraph: !1, avatar: { shape: 'square', size: 28 } }),
            o.jsx(B.Paragraph, {}),
            o.jsx(B.Tags, { count: 2 }),
          ],
        }),
      ],
    }),
  ),
  be = a.memo(({ actions: e, onActionClick: s }) => {
    const { regenerate: t, copy: n, edit: r, del: c, divider: h } = e;
    return o.jsx(_, { items: [t, c], menu: [r, n, h, c], onActionClick: s });
  });
be.displayName = 'ErrorActionsBar';
const dt = we`
  .ant-dropdown-menu-sub {
    overflow-y: scroll;
    max-height: 400px;
  }
`,
  ut = ({ id: e, data: s, onOpenShareModal: t }) => {
    const { t: n } = U(['common', 'chat']),
      { message: r } = ee.useApp(),
      c = u(T.isMessageCollapsed(e)),
      h = u(T.isMessageRegenerating(e)),
      [x, d, l, M, b, m, A] = u((y) => [
        y.toggleMessageEditing,
        y.toggleMessageCollapsed,
        y.deleteMessage,
        y.regenerateAssistantMessage,
        y.translateMessage,
        y.ttsMessage,
        y.delAndRegenerateMessage,
      ]);
    return a.useMemo(
      () => ({
        collapse: {
          handleClick: () => d(e),
          icon: xe,
          key: 'collapse',
          label: n('messageAction.collapse', { ns: 'chat' }),
        },
        copy: {
          handleClick: async () => {
            (await se(s.content), r.success(n('copySuccess')));
          },
          icon: ye,
          key: 'copy',
          label: n('copy'),
        },
        del: { danger: !0, handleClick: () => l(e), icon: fe, key: 'del', label: n('delete') },
        delAndRegenerate: {
          disabled: h,
          handleClick: () => A(e),
          icon: me,
          key: 'delAndRegenerate',
          label: n('messageAction.delAndRegenerate', { ns: 'chat' }),
        },
        divider: { type: 'divider' },
        edit: {
          handleClick: () => {
            x(e, !0);
          },
          icon: pe,
          key: 'edit',
          label: n('edit'),
        },
        expand: {
          handleClick: () => d(e),
          icon: he,
          key: 'expand',
          label: n('messageAction.expand', { ns: 'chat' }),
        },
        regenerate: {
          disabled: h,
          handleClick: () => {
            (M(e), s.error && l(e));
          },
          icon: ge,
          key: 'regenerate',
          label: n('regenerate'),
          spin: h || void 0,
        },
        share: { handleClick: t, icon: ue, key: 'share', label: n('share') },
        translate: {
          children: te.map((y) => ({
            key: y.value,
            label: n(`lang.${y.value}`),
            onClick: () => b(e, y.value),
          })),
          icon: de,
          key: 'translate',
          label: n('translate.action', { ns: 'chat' }),
          popupClassName: Y(dt),
        },
        tts: {
          handleClick: () => m(e),
          icon: Ke,
          key: 'tts',
          label: n('tts.action', { ns: 'chat' }),
        },
      }),
      [n, e, s.content, s.error, h, c, x, l, M, b, m, A, d, t, r],
    );
  },
  J = (e) => {
    if ('type' in e && e.type === 'divider') return e;
    const { children: s, ...t } = e,
      n = { ...t };
    return (
      delete n.handleClick,
      s
        ? {
            ...n,
            children: s.map((r) => {
              const c = { ...r };
              return (delete c.handleClick, c);
            }),
          }
        : n
    );
  },
  gt = (e) => {
    const s = new Map();
    for (const t of e)
      if ('key' in t && t.key && (s.set(String(t.key), t), 'children' in t && t.children))
        for (const n of t.children) n.key && s.set(`${t.key}.${n.key}`, n);
    return s;
  },
  Me = a.memo(({ actionsConfig: e, id: s, data: t, index: n }) => {
    const { error: r, tools: c } = t,
      h = oe(),
      x = a.useCallback(() => {
        ce(
          (p) =>
            o.jsx(re, {
              createStore: () => {
                const I = h.getState();
                return ie({ context: I.context, hooks: I.hooks, skipFetch: I.skipFetch });
              },
              children: o.jsx(ae, { ...p }),
            }),
          { message: t },
          { onCloseKey: 'onCancel', openKey: 'open' },
        );
      }, [t, h]),
      d = u(T.isMessageCollapsed(s)),
      l = ut({ data: t, id: s, onOpenShareModal: x }),
      M = !!c,
      b = d ? l.expand : l.collapse,
      m = a.useMemo(
        () =>
          e?.extraBarActions ? e.extraBarActions.map((p) => p(s)).filter((p) => p !== null) : [],
        [e?.extraBarActions, s],
      ),
      A = a.useMemo(
        () =>
          e?.extraMenuActions ? e.extraMenuActions.map((p) => p(s)).filter((p) => p !== null) : [],
        [e?.extraMenuActions, s],
      ),
      y = a.useMemo(
        () => [...(e?.bar ?? (M ? [l.delAndRegenerate, l.copy] : [l.edit, l.copy])), ...m],
        [e?.bar, M, l.delAndRegenerate, l.copy, l.edit, m],
      ),
      k = a.useMemo(
        () => [
          ...(e?.menu ?? [
            l.edit,
            l.copy,
            b,
            l.divider,
            l.tts,
            l.translate,
            l.divider,
            l.share,
            l.divider,
            l.regenerate,
            l.delAndRegenerate,
            l.del,
          ]),
          ...A,
        ],
        [
          e?.menu,
          l.edit,
          l.copy,
          b,
          l.divider,
          l.tts,
          l.translate,
          l.share,
          l.regenerate,
          l.delAndRegenerate,
          l.del,
          A,
        ],
      ),
      R = a.useMemo(() => y.filter((p) => p && !('disabled' in p && p.disabled)).map(J), [y]),
      g = a.useMemo(() => k.map(J), [k]),
      C = a.useMemo(() => gt([...y, ...k]), [y, k]),
      w = a.useCallback(
        (p) => {
          if (p.keyPath && p.keyPath.length > 1) {
            const i = p.keyPath.at(-1),
              f = p.keyPath[0],
              S = C.get(i);
            if (S && 'children' in S && S.children) {
              S.children.find((j) => j.key === f)?.handleClick?.();
              return;
            }
          }
          C.get(p.key)?.handleClick?.();
        },
        [C],
      );
    return r
      ? o.jsx(be, { actions: l, onActionClick: w })
      : o.jsxs(P, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          children: [
            o.jsx(le, { messageId: s }),
            o.jsx(_, { items: R, menu: g, onActionClick: w }),
          ],
        });
  });
Me.displayName = 'AssistantActionsBar';
const Se = ({ id: e, data: s, contentBlock: t, onOpenShareModal: n }) => {
    const { t: r } = U(['common', 'chat']),
      { message: c } = ee.useApp(),
      h = u(T.isMessageCollapsed(e)),
      x = u(T.isMessageRegenerating(e)),
      d = u(E.findLastMessageId(e)),
      l = u((g) => (d ? T.isMessageContinuing(d)(g) : !1)),
      [M, b, m, A, y, k, R] = u((g) => [
        g.toggleMessageEditing,
        g.toggleMessageCollapsed,
        g.deleteMessage,
        g.regenerateAssistantMessage,
        g.translateMessage,
        g.delAndRegenerateMessage,
        g.continueGenerationMessage,
      ]);
    return a.useMemo(
      () => ({
        collapse: {
          handleClick: () => b(e),
          icon: xe,
          key: 'collapse',
          label: r('messageAction.collapse', { ns: 'chat' }),
        },
        continueGeneration: {
          disabled: l,
          handleClick: () => {
            d && R(e, d);
          },
          icon: We,
          key: 'continueGeneration',
          label: r('messageAction.continueGeneration', { ns: 'chat' }),
          spin: l || void 0,
        },
        copy: {
          handleClick: async () => {
            t && (await se(t.content), c.success(r('copySuccess')));
          },
          icon: ye,
          key: 'copy',
          label: r('copy'),
        },
        del: { danger: !0, handleClick: () => m(e), icon: fe, key: 'del', label: r('delete') },
        delAndRegenerate: {
          disabled: x,
          handleClick: () => k(e),
          icon: me,
          key: 'delAndRegenerate',
          label: r('messageAction.delAndRegenerate', { ns: 'chat' }),
        },
        divider: { type: 'divider' },
        edit: {
          handleClick: () => {
            t && M(t.id, !0);
          },
          icon: pe,
          key: 'edit',
          label: r('edit'),
        },
        expand: {
          handleClick: () => b(e),
          icon: he,
          key: 'expand',
          label: r('messageAction.expand', { ns: 'chat' }),
        },
        regenerate: {
          disabled: x,
          handleClick: () => {
            (A(e), s.error && m(e));
          },
          icon: ge,
          key: 'regenerate',
          label: r('regenerate'),
          spin: x || void 0,
        },
        share: { handleClick: n, icon: ue, key: 'share', label: r('share') },
        translate: {
          children: te.map((g) => ({
            handleClick: () => y(e, g.value),
            key: g.value,
            label: r(`lang.${g.value}`),
          })),
          icon: de,
          key: 'translate',
          label: r('translate.action', { ns: 'chat' }),
        },
      }),
      [e, t, s.error, x, l, h, d, M, m, A, y, k, b, R, n, c],
    );
  },
  V = (e) => {
    if ('type' in e && e.type === 'divider') return e;
    const { children: s, ...t } = e,
      n = { ...t };
    return (
      delete n.handleClick,
      s
        ? {
            ...n,
            children: s.map((r) => {
              const c = { ...r };
              return (delete c.handleClick, c);
            }),
          }
        : n
    );
  },
  Ae = (e) => {
    const s = new Map();
    for (const t of e)
      if ('key' in t && t.key && (s.set(String(t.key), t), 'children' in t && t.children))
        for (const n of t.children) n.key && s.set(`${t.key}.${n.key}`, n);
    return s;
  },
  ke = a.memo(({ actionsConfig: e, id: s, data: t, contentBlock: n }) => {
    const { tools: r } = t,
      c = oe(),
      h = a.useCallback(() => {
        ce(
          (g) =>
            o.jsx(re, {
              createStore: () => {
                const C = c.getState();
                return ie({ context: C.context, hooks: C.hooks, skipFetch: C.skipFetch });
              },
              children: o.jsx(ae, { ...g }),
            }),
          { message: t },
          { onCloseKey: 'onCancel', openKey: 'open' },
        );
      }, [t, c]),
      x = u(T.isMessageCollapsed(s)),
      d = Se({ contentBlock: n, data: t, id: s, onOpenShareModal: h }),
      l = !!r,
      M = x ? d.expand : d.collapse,
      b = e?.bar ?? (l ? [d.delAndRegenerate, d.copy] : [d.edit, d.copy]),
      m = e?.menu ?? [d.edit, d.copy, M, d.divider, d.share, d.divider, d.regenerate, d.del],
      A = a.useMemo(() => b.filter((g) => g && !('disabled' in g && g.disabled)).map(V), [b]),
      y = a.useMemo(() => m.map(V), [m]),
      k = a.useMemo(() => Ae([...b, ...m]), [b, m]),
      R = a.useCallback(
        (g) => {
          if (g.keyPath && g.keyPath.length > 1) {
            const w = g.keyPath.at(-1),
              p = g.keyPath[0],
              I = k.get(w);
            if (I && 'children' in I && I.children) {
              I.children.find((f) => f.key === p)?.handleClick?.();
              return;
            }
          }
          k.get(g.key)?.handleClick?.();
        },
        [k],
      );
    return o.jsxs(P, {
      horizontal: !0,
      align: 'center',
      gap: 8,
      children: [o.jsx(le, { messageId: s }), o.jsx(_, { items: A, menu: y, onActionClick: R })],
    });
  });
ke.displayName = 'GroupActionsWithContentId';
const ve = a.memo(({ actionsConfig: e, id: s, data: t }) => {
  const n = Se({ data: t, id: s }),
    r = e?.bar ?? [n.continueGeneration, n.delAndRegenerate, n.del],
    c = a.useMemo(() => r.map(V), [r]),
    h = a.useMemo(() => Ae(r), [r]),
    x = a.useCallback(
      (d) => {
        h.get(d.key)?.handleClick?.();
      },
      [h],
    );
  return o.jsx(_, { items: c, onActionClick: x });
});
ve.displayName = 'GroupActionsWithoutContentId';
const Ce = a.memo(({ actionsConfig: e, id: s, data: t, contentBlock: n, contentId: r }) =>
  r
    ? o.jsx(ke, { actionsConfig: e, contentBlock: n, data: t, id: s })
    : o.jsx(ve, { actionsConfig: e, data: t, id: s }),
);
Ce.displayName = 'GroupActionsBar';
const ht = ({ id: e, index: s }) => {
    const t = u((r) => r.actionsBar?.assistant),
      n = u(E.getDisplayMessageById(e), K);
    return n ? o.jsx(Me, { actionsConfig: t, data: n, id: e, index: s }) : null;
  },
  pt = ({ id: e }) => {
    const s = u((n) => n.actionsBar?.user),
      t = u(E.getDisplayMessageById(e), K);
    return t ? o.jsx(qe, { actionsConfig: s, data: t, id: e }) : null;
  },
  mt = ({ id: e }) => {
    const s = u((c) => c.actionsBar?.assistantGroup ?? c.actionsBar?.assistant),
      t = u(E.getDisplayMessageById(e), K),
      n = u(E.getGroupLatestMessageWithoutTools(e)),
      r = n?.id;
    return t
      ? o.jsx(Ce, { actionsConfig: s, contentBlock: n, contentId: r, data: t, id: e })
      : null;
  },
  ft = a.memo(() => {
    const e = Ve(),
      s = $e(),
      t = a.useRef(null);
    (!t.current &&
      typeof document < 'u' &&
      ((t.current = document.createElement('div')),
      (t.current.dataset.singletonMessageActionBarHost = 'true')),
      a.useEffect(() => {
        const r = t.current;
        if (!r || typeof document > 'u') return;
        let c = null;
        if (e && s)
          switch (s.type) {
            case 'assistant': {
              c = e.querySelector(H.assistant);
              break;
            }
            case 'user': {
              c = e.querySelector(H.user);
              break;
            }
            case 'assistantGroup': {
              c = e.querySelector(H.assistantGroup);
              break;
            }
          }
        if (c) {
          (r.parentElement !== c && c.append(r), (r.style.display = ''));
          return;
        }
        (document.body && r.parentElement !== document.body && document.body.append(r),
          (r.style.display = 'none'));
      }, [e, s?.id, s?.index, s?.type]),
      a.useEffect(() => {
        const r = t.current;
        if (r)
          return () => {
            r.remove();
          };
      }, []));
    const n = t.current;
    if (!n || !s) return null;
    switch (s.type) {
      case 'assistant':
        return L.createPortal(o.jsx(ht, { id: s.id, index: s.index }), n);
      case 'user':
        return L.createPortal(o.jsx(pt, { id: s.id, index: s.index }), n);
      case 'assistantGroup':
        return L.createPortal(o.jsx(mt, { id: s.id, index: s.index }), n);
    }
    return null;
  }),
  yt = ({ children: e, withSingletonActionsBar: s }) => {
    const [t, n] = a.useState(null),
      [r, c] = a.useState(null);
    return o.jsx(Le, {
      value: t,
      children: o.jsx(_e, {
        value: n,
        children: o.jsx(De, {
          value: c,
          children: o.jsxs(He, { value: r, children: [s && o.jsx(ft, {}), e] }),
        }),
      }),
    });
  },
  Q = '__conversation_spacer__',
  Ie = 200,
  xt = (e, s, t) => Math.max(Math.round(e - s - t), 0),
  $ = (e) => (e ? document.querySelector(`[data-message-id="${e}"]`) : null),
  X = (e) => $(e)?.getBoundingClientRect().height || 0,
  bt = (e) => {
    if (!e) return '';
    const s = e.children && e.children.length > 0 ? e.children.at(-1) : e,
      t = s.content?.length || 0,
      n = s.reasoning?.content?.length || 0,
      r = s.tools?.length || 0;
    return `${t}:${n}:${r}:${e.updatedAt || 0}`;
  },
  Mt = (e) => {
    const s = u(E.displayMessages),
      t = u(T.isAIGenerating),
      n = u((i) => i.virtuaScrollMethods?.getItemOffset),
      r = u((i) => i.virtuaScrollMethods?.getItemSize),
      c = u((i) => i.virtuaScrollMethods?.getViewportSize),
      [h, x] = a.useState(0),
      [d, l] = a.useState(!1),
      M = a.useRef(e.length),
      b = a.useRef(null),
      m = a.useRef(null),
      A = a.useRef(null),
      y = a.useRef(null),
      k = a.useCallback(() => {
        const i = A.current,
          f = y.current;
        return {
          assistantId: (f !== null && f >= 0 && e[f]) || null,
          assistantIndex: f,
          userId: (i !== null && i >= 0 && e[i]) || null,
          userIndex: i,
        };
      }, [e]),
      R = (() => {
        const { assistantId: i } = k();
        if (!i) return '';
        const f = s.find((S) => S.id === i);
        return bt(f);
      })(),
      g = a.useCallback(() => {
        b.current && (clearTimeout(b.current), (b.current = null));
      }, []),
      C = a.useCallback(() => {
        (m.current?.disconnect(), (m.current = null));
      }, []),
      w = a.useCallback(() => {
        (g(),
          (b.current = setTimeout(() => {
            (l(!1), (b.current = null));
          }, Ie)));
      }, [g]),
      p = a.useCallback(() => {
        g();
        const { assistantId: i, assistantIndex: f, userId: S, userIndex: v } = k(),
          j = c?.() || window.innerHeight;
        let N;
        if (v !== null && f !== null && n && r) {
          const G = n(v),
            D = n(f) + r(f);
          N = Math.max(Math.round(j - (D - G)), 0);
        } else {
          const G = X(S);
          if (!G) return;
          const D = X(i);
          N = xt(j, G, D);
        }
        if (N === 0) {
          (x(0), w());
          return;
        }
        (l(!0), x(N));
      }, [g, k, n, r, c, w]);
    (a.useEffect(
      () => () => {
        (C(), g());
      },
      [C, g],
    ),
      a.useEffect(() => {
        const i = e.length - M.current;
        M.current = e.length;
        const f = s.at(-2),
          S = s.at(-1);
        i !== 2 ||
          f?.role !== 'user' ||
          !S ||
          ((A.current = e.length - 2),
          (y.current = e.length - 1),
          requestAnimationFrame(() => {
            p();
          }));
      }, [e.length, s, p]),
      a.useEffect(() => {
        const { assistantId: i, userId: f } = k();
        if ((C(), !i || !f || typeof ResizeObserver > 'u')) return;
        const S = new ResizeObserver(() => {
          requestAnimationFrame(() => {
            p();
          });
        });
        m.current = S;
        const v = $(f),
          j = $(i);
        return (
          v && S.observe(v),
          j && S.observe(j),
          requestAnimationFrame(() => {
            p();
          }),
          C
        );
      }, [C, k, R, p]),
      a.useEffect(() => {
        d &&
          requestAnimationFrame(() => {
            p();
          });
      }, [t, R, d, p]));
    const I = a.useMemo(() => (d ? [...e, Q] : e), [e, d]);
    return { isSpacerMessage: (i) => i === Q, listData: I, spacerActive: d, spacerHeight: h };
  },
  St = [0, 32, 96];
function At({ dataSourceLength: e, isSecondLastMessageFromUser: s, scrollToIndex: t }) {
  const n = a.useRef(e),
    r = a.useRef([]),
    c = a.useCallback(() => {
      (r.current.forEach((h) => {
        window.clearTimeout(h);
      }),
        (r.current = []));
    }, []);
  (a.useEffect(() => c, [c]),
    a.useEffect(() => {
      const h = e - n.current;
      if (((n.current = e), h === 2 && s && t)) {
        const x = e - 2;
        (c(),
          St.forEach((d) => {
            const l = window.setTimeout(() => {
              t(x, { align: 'start', smooth: !0 });
            }, d);
            r.current.push(l);
          }));
      }
    }, [c, e, s, t]));
}
const q = a.memo(() => {
  const e = u(O.atBottom),
    s = u(O.isScrolling),
    t = u(T.isAIGenerating),
    n = u((d) => d.scrollToBottom),
    r = u(E.dbMessages),
    c = e && t && !s,
    h = r.at(-1),
    x = typeof h?.content == 'string' ? h.content.length : 0;
  return (
    a.useEffect(() => {
      c && n(!1);
    }, [c, n, r.length, x]),
    null
  );
});
q.displayName = 'ConversationAutoScroll';
const z = 100,
  je = !1,
  kt = a.memo(() => {
    const e = u(O.atBottom),
      s = u(O.isScrolling),
      t = u(T.isAIGenerating),
      n = u((k) => k.virtuaScrollMethods),
      r = e && t && !s,
      c = n?.getScrollOffset?.() ?? 0,
      h = n?.getScrollSize?.() ?? 0,
      x = n?.getViewportSize?.() ?? 0,
      d = h - c - x,
      l = 120,
      M = h > 0 ? l / h : 0,
      b = Math.max(x * M, 10),
      m = c * M,
      A = Math.min(z * M, l * 0.3),
      y = o.jsxs('div', {
        style: {
          background: 'rgba(0,0,0,0.9)',
          borderRadius: 8,
          bottom: 135,
          display: 'flex',
          fontFamily: 'monospace',
          fontSize: 11,
          gap: 16,
          left: 12,
          padding: '10px 14px',
          position: 'fixed',
          zIndex: 9999,
        },
        children: [
          o.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', gap: 4 },
            children: [
              o.jsx('div', {
                style: { color: '#9ca3af', fontSize: 10 },
                children: 'Scroll Position',
              }),
              o.jsxs('div', {
                style: {
                  background: '#374151',
                  borderRadius: 3,
                  height: l,
                  position: 'relative',
                  width: 24,
                },
                children: [
                  o.jsx('div', {
                    style: {
                      background: e ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                      borderRadius: '0 0 3px 3px',
                      bottom: 0,
                      height: A,
                      left: 0,
                      position: 'absolute',
                      right: 0,
                    },
                  }),
                  o.jsx('div', {
                    style: {
                      background: e ? '#22c55e' : '#3b82f6',
                      borderRadius: 2,
                      height: b,
                      left: 2,
                      position: 'absolute',
                      right: 2,
                      top: m,
                      transition: 'top 0.1s',
                    },
                  }),
                  o.jsx('div', {
                    style: {
                      background: '#f59e0b',
                      bottom: A,
                      height: 1,
                      left: 0,
                      position: 'absolute',
                      right: 0,
                    },
                  }),
                ],
              }),
              o.jsxs('div', {
                style: { color: '#f59e0b', fontSize: 9, textAlign: 'center' },
                children: [z, 'px'],
              }),
            ],
          }),
          o.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', gap: 4 },
            children: [
              o.jsxs('div', {
                style: { color: '#9ca3af', fontSize: 10 },
                children: [
                  'scrollSize: ',
                  o.jsxs('span', { style: { color: 'white' }, children: [Math.round(h), 'px'] }),
                ],
              }),
              o.jsxs('div', {
                style: { color: '#9ca3af', fontSize: 10 },
                children: [
                  'viewport: ',
                  o.jsxs('span', { style: { color: 'white' }, children: [Math.round(x), 'px'] }),
                ],
              }),
              o.jsxs('div', {
                style: { color: '#9ca3af', fontSize: 10 },
                children: [
                  'offset: ',
                  o.jsxs('span', { style: { color: 'white' }, children: [Math.round(c), 'px'] }),
                ],
              }),
              o.jsxs('div', {
                style: { color: e ? '#22c55e' : '#ef4444', fontSize: 10, fontWeight: 'bold' },
                children: ['toBottom: ', Math.round(d), 'px', d <= z ? ' ≤' : ' >', ' ', z],
              }),
              o.jsxs('div', {
                style: { borderTop: '1px solid #374151', marginTop: 4, paddingTop: 4 },
                children: [
                  o.jsxs('div', {
                    style: { color: e ? '#22c55e' : '#ef4444', fontSize: 10 },
                    children: ['atBottom: ', e ? 'YES' : 'NO'],
                  }),
                  o.jsxs('div', {
                    style: { color: t ? '#3b82f6' : '#6b7280', fontSize: 10 },
                    children: ['generating: ', t ? 'YES' : 'NO'],
                  }),
                  o.jsxs('div', {
                    style: { color: s ? '#f59e0b' : '#6b7280', fontSize: 10 },
                    children: ['scrolling: ', s ? 'YES' : 'NO'],
                  }),
                ],
              }),
              o.jsxs('div', {
                style: {
                  background: r ? '#22c55e' : '#ef4444',
                  borderRadius: 3,
                  color: 'white',
                  fontSize: 10,
                  marginTop: 4,
                  padding: '2px 6px',
                  textAlign: 'center',
                },
                children: ['autoScroll: ', r ? 'YES' : 'NO'],
              }),
            ],
          }),
        ],
      });
    return typeof document > 'u' ? null : L.createPortal(y, document.body);
  });
kt.displayName = 'DebugInspector';
const vt = () => {
    const e = u(Ue.agentId),
      t = Be(Te.getChatConfigById(e))?.enableAutoScrollOnStreaming,
      n = ne(ze.enableAutoScrollOnStreaming);
    return t !== void 0 ? t : n;
  },
  Z = Oe(({ css: e, cssVar: s }) => ({
    container: Y(
      Pe.blur,
      e`
      pointer-events: none;

      position: absolute;
      z-index: 50;
      inset-block-end: 16px;
      inset-inline-end: 16px;
      transform: translateY(16px);

      opacity: 0;
      background: color-mix(in srgb, ${s.colorBgElevated} 50%, transparent) !important;
    `,
    ),
    visible: e`
    pointer-events: all;
    transform: translateY(0);
    opacity: 1;
  `,
  })),
  Ct = a.memo(({ visible: e, atBottom: s, onScrollToBottom: t }) => {
    const { t: n } = U('chat');
    return o.jsxs(o.Fragment, {
      children: [
        je,
        o.jsx(Fe, {
          glass: !0,
          className: Y(Z.container, e && Z.visible),
          icon: Je,
          title: n('backToBottom'),
          variant: 'outlined',
          size: { blockSize: 36, borderRadius: 36, size: 18 },
          onClick: t,
        }),
      ],
    });
  }),
  Re = a.memo(({ dataSource: e, itemContent: s }) => {
    const t = a.useRef(null),
      n = a.useRef(null),
      { isSpacerMessage: r, listData: c, spacerHeight: h, spacerActive: x } = Mt(e),
      d = vt(),
      l = u((i) => i.registerVirtuaScrollMethods),
      M = u((i) => i.setScrollState),
      b = u((i) => i.resetVisibleItems),
      m = u((i) => i.setActiveIndex),
      A = u(O.activeIndex),
      y = a.useCallback(() => {
        const i = t.current;
        if (!i) return !1;
        const f = i.scrollOffset,
          S = i.scrollSize,
          v = i.viewportSize;
        return S - f - v <= z;
      }, [z]),
      k = a.useCallback(() => {
        const i = t.current,
          f =
            i && typeof i.findItemIndex == 'function'
              ? i.findItemIndex(i.scrollOffset + i.viewportSize * 0.25)
              : null,
          S = typeof f == 'number' && f >= 0 ? f : null;
        (S !== A && m(S), M({ isScrolling: !0 }));
        const v = y();
        (M({ atBottom: v }),
          n.current && clearTimeout(n.current),
          (n.current = setTimeout(() => {
            M({ isScrolling: !1 });
          }, 150)));
      }, [A, y, m, M]),
      R = a.useCallback(() => {
        M({ isScrolling: !1 });
      }, [M]);
    (a.useEffect(() => {
      const i = t.current;
      if (i) {
        l({
          getItemOffset: (v) => i.getItemOffset(v),
          getItemSize: (v) => i.getItemSize(v),
          getScrollOffset: () => i.scrollOffset,
          getScrollSize: () => i.scrollSize,
          getViewportSize: () => i.viewportSize,
          scrollTo: (v) => i.scrollTo(v),
          scrollToIndex: (v, j) => i.scrollToIndex(v, j),
        });
        const f = i.findItemIndex(i.scrollOffset + i.viewportSize * 0.25),
          S = typeof f == 'number' && f >= 0 ? f : null;
        m(S);
      }
      return () => {
        l(null);
      };
    }, [l, m]),
      a.useEffect(
        () => () => {
          (b(), n.current && clearTimeout(n.current));
        },
        [b],
      ));
    const w = u(E.displayMessages).at(-2)?.role === 'user';
    (At({
      dataSourceLength: e.length,
      isSecondLastMessageFromUser: w,
      scrollToIndex: t.current?.scrollToIndex ?? null,
    }),
      a.useEffect(() => {
        t.current && e.length > 0 && t.current.scrollToIndex(e.length - 1, { align: 'end' });
      }, []));
    const p = u(O.atBottom),
      I = u((i) => i.scrollToBottom);
    return o.jsxs('div', {
      style: { height: '100%', position: 'relative' },
      children: [
        je,
        o.jsx(Qe, {
          bufferSize: typeof window < 'u' ? window.innerHeight : 0,
          data: c,
          ref: t,
          style: { height: '100%', overflowAnchor: 'none', paddingBottom: 24 },
          onScroll: k,
          onScrollEnd: R,
          children: (i, f) => {
            if (r(i))
              return o.jsx(
                F,
                {
                  style: { position: 'relative' },
                  children: o.jsx('div', {
                    'aria-hidden': !0,
                    'style': {
                      height: h,
                      pointerEvents: 'none',
                      transition: `height ${Ie}ms ease`,
                      width: '100%',
                    },
                  }),
                },
                i,
              );
            const S = i.includes('agentCouncil'),
              v = f === e.length - 1,
              j = s(f, i);
            return S
              ? o.jsxs(
                  'div',
                  {
                    style: { position: 'relative', width: '100%' },
                    children: [j, v && d && !x && o.jsx(q, {})],
                  },
                  i,
                )
              : o.jsxs(
                  F,
                  { style: { position: 'relative' }, children: [j, v && d && !x && o.jsx(q, {})] },
                  i,
                );
          },
        }),
        o.jsx(F, {
          style: { position: 'relative' },
          children: o.jsx(Ct, { atBottom: p, visible: !p, onScrollToBottom: () => I(!0) }),
        }),
      ],
    });
  }, Ne);
Re.displayName = 'ConversationVirtualizedList';
const It = a.memo(({ disableActionsBar: e, welcome: s, itemContent: t }) => {
  const n = u((m) => m.context),
    r = ne(Ge.memoryEnabled),
    [c, h] = u((m) => [E.skipFetch(m), m.useFetchMessages]);
  h(n, c);
  const x = !!n.topicShareId;
  (lt(x ? void 0 : n.topicId), it(r && !x ? n.topicId : void 0));
  const d = u(E.displayMessageIds),
    l = a.useCallback(
      (m, A) => {
        const y = d.length === m + 1;
        return o.jsx(Ye, { id: A, index: m, isLatestItem: y });
      },
      [d.length],
    ),
    M = u(E.messagesInit),
    b = !n.topicId;
  return !M && !b
    ? o.jsx(ct, {})
    : d.length === 0
      ? o.jsx(F, {
          style: { height: '100%' },
          wrapperStyle: { minHeight: '100%', overflowY: 'auto' },
          children: s,
        })
      : o.jsx(yt, {
          withSingletonActionsBar: !e,
          children: o.jsx(Re, { dataSource: d, itemContent: t ?? l }),
        });
});
It.displayName = 'ConversationChatList';
export { It as C, yt as M, ct as S, Re as V, tt as n, lt as u, O as v };
