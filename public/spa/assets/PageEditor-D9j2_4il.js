import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as y,
  by as be,
  aG as K,
  I as j,
  j as $,
  f as P,
  k as b,
  M as C,
  F as S,
  C as ne,
  A as E,
  ax as ae,
  u as N,
  x as O,
  Z as z,
  aA as se,
  gS as ie,
  s as re,
  dw as Ae,
  gR as ke,
  cF as Ee,
  au as Te,
  cG as we,
  e as Me,
  a1 as De,
  ci as Pe,
  b2 as Ne,
  gI as _e,
  bn as Be,
  br as Le,
  B as Oe,
  gT as ze,
} from './index-C8UyLGsD.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { B as ce } from './Block-DDntSWi2.js';
import { u as U, L as Y, D as X, I as Re, E as Fe, e as We } from './EditorCanvas-CaZwW-_5.js';
import { S as He } from './index-CqaQ90GQ.js';
import {
  bp as $e,
  cw as Ue,
  c3 as qe,
  b4 as Ge,
  dy as Ke,
  cl as le,
  bs as de,
  a_ as Ye,
  dn as Xe,
  aT as Ze,
  e7 as Qe,
  aS as Je,
  aR as Ve,
  bl as et,
  bj as tt,
  bk as ot,
  I as nt,
  cx as at,
  e8 as st,
  bo as it,
  bn as rt,
  e9 as ct,
  db as lt,
  a9 as dt,
  bz as ut,
  bq as mt,
  ea as pt,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { W as gt } from './index-9IUPw_JO.js';
import { u as ht } from './filesScope-4KHGKDzQ.js';
import { u as ft } from './store-B8XKtjEP.js';
import { S as xt } from './styles-Csneu1zx.js';
import { R as St, T as vt } from './ToggleRightPanelButton-hmPf3CHc.js';
import { a as yt, c as Ct, D as jt } from './index-jMJizVYM.js';
import { a as It, b as bt } from './Action-BIzXeFfi.js';
import { u as _, C as At } from './index-bsLCy3LH.js';
import { c as B, C as kt, H as Et, u as Tt } from './constants-DVzeerl1.js';
import { C as wt } from './index-CaczU3az.js';
import {
  i as Z,
  o as M,
  u as I,
  h as Q,
  aU as Mt,
  E as Dt,
  aV as Pt,
  aW as Nt,
  n as _t,
  aX as T,
} from './index-Br6hqyew.js';
import { k as ue } from './Popover-Cg4CTqoX.js';
import { N as me, S as J } from './NavItem-DJlHrVXk.js';
import { A as pe, u as Bt, a as Lt } from './Avatar-Xdh3iYlB.js';
import { h as V } from './selectors-3paDlMAr.js';
import { M as Ot, C as zt } from './index-Gdan7gtM.js';
import { u as ee } from './store-CTAK9tZ0.js';
import { a as te } from './_auth-sIxU1rKL.js';
import { N as ge } from './index-0kThxxSh.js';
import { D as he } from './DropdownMenu-CEFIlaZw.js';
import { A as q } from './index-BAOF5XWg.js';
import { M as Rt } from './Markdown-Mtmmwid1.js';
import './providerConfig-qS2Xx-oI.js';
import { S as Ft } from './index-DyzLj6nP.js';
import { u as D, n as Wt } from './store-8fdqmFXe.js';
import { d as Ht } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { an as F, ao as $t, ap as Ut, aq as qt, u as Gt } from './index-CMcqKxKW.js';
import { b as Kt } from './index-BhTv9jof.js';
import { I as Yt } from './ReactCodemirrorNode-BfJ0IybP.js';
import { A as Xt } from './AutoSaveHint-Dt8FqcIJ.js';
import { u as Zt } from './store-B9jA_OfS.js';
import { knowledgeBaseSelectors as Qt } from './index-D_qVPCxy.js';
import { P as Jt } from './index-DDvtsgDb.js';
import { T as Vt } from './TextArea-CHeYteyg.js';
import { E as eo } from './index-CopzJgBK.js';
import { g as to } from './general-Bhxy39g6.js';
function oo(e, n = '*/*') {
  if (typeof document > 'u') return;
  const o = document.createElement('input');
  ((o.type = 'file'),
    (o.accept = n),
    (o.multiple = !1),
    o.addEventListener('change', (s) => {
      const r = s.target?.files;
      r && r.length > 0 && e(r);
    }),
    o.click());
}
const L = P(({ css: e }) => ({
    container: e`
    position: absolute;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,
    toolbar: e`
    border-color: ${b.colorFillSecondary};
    background: ${b.colorBgElevated};
  `,
    toolbarDark: e`
    box-shadow:
      0 14px 28px -6px #0003,
      0 2px 4px -1px #0000001f;
  `,
    toolbarLight: e`
    box-shadow:
      0 14px 28px -6px #0000001a,
      0 2px 4px -1px #0000000f;
  `,
  })),
  no = (e) => {
    const [n, o] = p.useState(!!e?.getLexicalEditor());
    return (
      p.useEffect(() => {
        if (!e) return;
        const s = () => {
          o(!0);
        };
        return (
          e.on('initialized', s),
          () => {
            e.off('initialized', s);
          }
        );
      }, [e]),
      n
    );
  },
  ao = (e) => {
    const [n, o] = p.useState(!1),
      s = no(e);
    return (
      p.useEffect(() => {
        if (!e) return;
        const r = e.getLexicalEditor();
        if (!r || !s) return;
        const a = () => {
          const c = r.getEditorState();
          c.read(() => {
            const m = c._nodeMap;
            let d = !1;
            (m.forEach((u) => {
              u.getType() === 'diff' && (d = !0);
            }),
              o(d));
          });
        };
        a();
        const i = r.registerUpdateListener(() => {
          a();
        });
        return () => {
          i();
        };
      }, [e, s]),
      n
    );
  },
  fe = p.memo(({ documentId: e }) => {
    const { t: n } = y('editor'),
      o = be(),
      [s, r, a] = U((m) => [m.editor, m.performSave, m.markDirty]);
    if (!ao(s)) return null;
    const c = async () => {
      (a(e), await r());
    };
    return t.jsx('div', {
      className: L.container,
      children: t.jsx(ce, {
        horizontal: !0,
        shadow: !0,
        className: $(L.toolbar, o ? L.toolbarDark : L.toolbarLight),
        gap: 8,
        padding: 4,
        variant: 'outlined',
        children: t.jsxs(He, {
          children: [
            t.jsxs(K, {
              size: 'small',
              type: 'text',
              onClick: async () => {
                (s?.dispatchCommand(Y, { action: X.Reject }), await c());
              },
              children: [t.jsx(j, { icon: $e, size: 16 }), n('modifier.rejectAll')],
            }),
            t.jsxs(K, {
              color: 'default',
              size: 'small',
              variant: 'filled',
              onClick: async () => {
                (s?.dispatchCommand(Y, { action: X.Accept }), await c());
              },
              children: [t.jsx(j, { color: 'green', icon: Ue, size: 16 }), n('modifier.acceptAll')],
            }),
          ],
        }),
      }),
    });
  });
fe.displayName = 'DiffAllToolbar';
const so = p.memo(
    ({ active: e, agentId: n, agentTitle: o, avatar: s, onAgentChange: r, onClose: a }) => {
      const { t: i } = y('chat');
      return t.jsx(me, {
        active: e,
        icon: t.jsx(pe, { avatar: typeof s == 'string' ? s : void 0 }),
        style: { flexShrink: 0 },
        title: o || i('untitledAgent'),
        onClick: () => {
          (r(n), a());
        },
      });
    },
  ),
  oe = P(({ css: e, cssVar: n }) => ({
    chevron: e`
    color: ${n.colorTextQuaternary};
  `,
    container: e`
    cursor: pointer;

    border-radius: 12px;
    border-start-start-radius: 8px;
    border-end-start-radius: 8px;

    background: ${n.colorFillTertiary};

    :hover {
      background: ${n.colorFillSecondary};
    }
  `,
  })),
  xe = p.memo(({ onAgentChange: e }) => {
    const { t: n } = y(['chat', 'common']),
      [o, s] = p.useState(!1),
      r = _(B.agentId),
      a = Z(V.allAgents),
      i = Z(V.isAgentListInit),
      c = C((h) => h.builtinAgentIdMap['page-agent']),
      m = C((h) => h.agentMap[c || '']);
    Bt();
    const d = p.useMemo(() => {
        const h = a.filter((v) => v.type === 'agent'),
          f = h.some((v) => v.id === c);
        return c && !f
          ? [
              {
                avatar: m?.avatar || null,
                description: m?.description || null,
                id: c,
                pinned: !1,
                title: n('builtinCopilot'),
                type: 'agent',
                updatedAt: new Date(),
              },
              ...h,
            ]
          : h;
      }, [a, c, m, n]),
      u = p.useMemo(() => d.find((h) => h.id === r), [r, d]),
      l = p.useCallback(
        (h) => {
          e(h);
        },
        [e],
      ),
      g = t.jsx(S, {
        gap: 4,
        padding: 8,
        style: { maxHeight: '50vh', overflowY: 'auto', width: '100%' },
        children: d.map((h) =>
          t.jsx(
            so,
            {
              active: h.id === r,
              agentId: h.id,
              agentTitle: h.title || n('untitledAgent', { ns: 'chat' }),
              avatar: h.avatar,
              onAgentChange: l,
              onClose: () => s(!1),
            },
            h.id,
          ),
        ),
      });
    return t.jsx(ue, {
      open: o,
      placement: 'topLeft',
      trigger: 'click',
      content: t.jsx(p.Suspense, {
        fallback: t.jsx(J, { rows: 6 }),
        children: t.jsx(Lt, { children: i ? g : t.jsx(J, { rows: 6 }) }),
      }),
      styles: { content: { padding: 0, width: 240 } },
      onOpenChange: s,
      children: t.jsx(ne, {
        horizontal: !0,
        className: $(oe.container),
        height: 28,
        paddingInline: 6,
        children: t.jsxs(S, {
          horizontal: !0,
          align: 'center',
          gap: 4,
          children: [
            t.jsx(pe, { avatar: typeof u?.avatar == 'string' ? u.avatar : void 0 }),
            t.jsx(qe, { className: oe.chevron, size: 14 }),
          ],
        }),
      }),
    });
  });
xe.displayName = 'AgentSelectorAction';
const W = P(({ css: e, cssVar: n }) => ({
    chevron: e`
    color: ${n.colorTextQuaternary};
  `,
    name: e`
    overflow: hidden;

    max-width: 120px;

    font-size: 12px;
    line-height: 1;
    color: ${n.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
    trigger: e`
    cursor: pointer;
    border-radius: 6px;

    :hover {
      background: ${n.colorFillTertiary};
    }
  `,
  })),
  Se = p.memo(() => {
    const [e, n] = p.useState(!1),
      o = _(B.agentId),
      [s, r, a] = C((u) => [
        M.getAgentModelById(o)(u),
        M.getAgentModelProviderById(o)(u),
        u.updateAgentConfigById,
      ]),
      i = ee(te.getEnabledModelById(s, r)),
      c = ee(te.isModelHasExtendParams(s, r)),
      m = i?.displayName || s,
      d = p.useCallback(
        async (u) => {
          await a(o, u);
        },
        [o, a],
      );
    return t.jsxs(S, {
      horizontal: !0,
      align: 'center',
      children: [
        t.jsx(Ot, {
          model: s,
          openOnHover: !1,
          provider: r,
          onModelChange: d,
          children: t.jsx(ne, {
            horizontal: !0,
            className: W.trigger,
            height: 28,
            paddingInline: 6,
            children: t.jsxs(S, {
              horizontal: !0,
              align: 'center',
              gap: 2,
              children: [
                t.jsx('span', { className: W.name, children: m }),
                t.jsx(Ge, { className: W.chevron, size: 12 }),
              ],
            }),
          }),
        }),
        c &&
          t.jsx(It, {
            content: t.jsx(zt, {}),
            minWidth: 350,
            open: e,
            placement: 'topRight',
            trigger: 'click',
            onOpenChange: n,
            children: t.jsx(E, {
              icon: Ke,
              size: { blockSize: 28, size: 16 },
              onClick: () => n(!0),
            }),
          }),
      ],
    });
  });
Se.displayName = 'CopilotModelSelector';
const io = p.memo(({ dropdownMenu: e }) =>
    !e || (typeof e != 'function' && e.length === 0)
      ? null
      : t.jsx(he, { items: e, children: t.jsx(E, { icon: le, size: 'small' }) }),
  ),
  ro = ({ onClose: e, topicId: n }) => {
    const { t: o } = y(['common', 'topic']),
      { modal: s } = ae.useApp(),
      r = I((i) => i.removeTopic),
      a = () => {
        s.confirm({
          cancelText: o('cancel'),
          centered: !0,
          content: o('actions.confirmRemoveTopic', { ns: 'topic' }),
          okButtonProps: { danger: !0 },
          okText: o('delete'),
          onOk: async () => {
            (await r(n), e());
          },
          title: o('delete'),
        });
      };
    return p.useCallback(
      () =>
        [
          {
            danger: !0,
            icon: t.jsx(j, { icon: de }),
            key: 'delete',
            label: o('delete'),
            onClick: a,
          },
        ].filter(Boolean),
      [o, a],
    );
  },
  co = p.memo(({ active: e, onClose: n, onTopicChange: o, topicId: s, topicTitle: r }) => {
    const { t: a } = y('topic'),
      i = ro({ onClose: n, topicId: s });
    return t.jsx(me, {
      actions: t.jsx(io, { dropdownMenu: i }),
      active: e,
      contextMenuItems: i,
      style: { flexShrink: 0 },
      title: r || a('untitled', { defaultValue: 'Untitled' }),
      onClick: () => {
        (o(s), n());
      },
    });
  }),
  ve = p.memo(() => {
    const { t: e } = y('topic'),
      [n, o] = p.useState(!1),
      s = _(B.agentId);
    I((g) => g.useFetchTopics)(!0, { agentId: s });
    const [r, a, i] = I((g) => [g.activeTopicId, g.switchTopic, Q.currentTopics(g)]),
      c = I(Q.currentActiveTopic),
      [m] = N((g) => [g.toggleRightPanel]),
      d = i === void 0,
      u = !d && i.length === 0,
      l = c?.title || e('title');
    return t.jsx(ge, {
      showTogglePanelButton: !1,
      left: t.jsx(z, {
        style: { fontSize: 13, fontWeight: 500, marginLeft: 8 },
        type: 'secondary',
        ellipsis: { tooltipWhenOverflow: !0 },
        children: l,
      }),
      right: t.jsxs(t.Fragment, {
        children: [
          t.jsx(E, {
            icon: Ye,
            size: O,
            title: e('actions.addNewTopic'),
            onClick: () => a(null, { scope: 'page' }),
          }),
          !u &&
            t.jsx(ue, {
              open: d ? !1 : n,
              placement: 'bottomRight',
              trigger: 'click',
              content: t.jsx(S, {
                gap: 4,
                padding: 8,
                style: { maxHeight: '50vh', overflowY: 'auto', width: '100%' },
                children: (i || []).map((g) =>
                  t.jsx(
                    co,
                    {
                      active: g.id === r,
                      topicId: g.id,
                      topicTitle: g.title,
                      onClose: () => o(!1),
                      onTopicChange: (h) => a(h),
                    },
                    g.id,
                  ),
                ),
              }),
              styles: { content: { padding: 0, width: 240 } },
              onOpenChange: o,
              children: t.jsx(E, { disabled: d, icon: Xe, loading: d, size: O }),
            }),
          t.jsx(E, { icon: Ze, size: O, onClick: () => m() }),
        ],
      }),
    });
  });
ve.displayName = 'CopilotToolbar';
const lo = p.memo(() => {
    const { t: e } = y('chat'),
      n = _(B.agentId),
      o = C(M.getAgentConfigById(n));
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(S, { flex: 1 }),
        t.jsxs(S, {
          gap: 12,
          width: '100%',
          style: { paddingBottom: 16 },
          children: [
            t.jsx(q, { avatar: o?.avatar || se, shape: 'square', size: 78 }),
            t.jsx(z, { fontSize: 24, weight: 'bold', children: e('pageCopilot.title') }),
            t.jsx(Rt, { fontSize: 14, variant: 'chat', children: e('pageCopilot.welcome') }),
            t.jsx(Ft, { count: 3, mode: 'write' }),
          ],
        }),
      ],
    });
  }),
  uo = Ct.search,
  mo = [],
  po = { blockSize: 28, size: 16 },
  go = { actionSize: po },
  ho = { paddingLeft: 4, paddingRight: 4 },
  fo = { size: 28 },
  xo = p.memo(() => {
    const [e, n] = C((d) => [d.setActiveAgentId, d.useFetchAgentConfig]),
      o = _(B.agentId);
    (p.useEffect(() => {
      if (!o) return;
      C.getState().activeAgentId !== o && e(o);
      const { activeAgentId: d, activeTopicId: u, switchTopic: l } = I.getState();
      (d !== o && I.setState({ activeAgentId: o }),
        (d !== o || u) && l(null, { scope: 'page', skipRefreshMessage: !0 }));
    }, [o, e]),
      n(!0, o));
    const s = C((d) => M.getAgentModelById(o)(d)),
      r = C((d) => M.getAgentModelProviderById(o)(d)),
      { handleUploadFiles: a } = yt({ model: s, provider: r }),
      i = p.useCallback(
        (d) => {
          !d || d === o || ie(d) || e(d);
        },
        [o, e],
      ),
      c = p.useMemo(
        () =>
          t.jsx(bt, {
            value: go,
            children: t.jsxs(S, {
              horizontal: !0,
              align: 'center',
              gap: 2,
              children: [t.jsx(xe, { onAgentChange: i }), t.jsx(uo, {})],
            }),
          }),
        [i],
      ),
      m = p.useMemo(() => t.jsx(Se, {}), []);
    return t.jsx(jt, {
      style: { flex: 1, height: '100%', minWidth: 300 },
      onUploadFiles: a,
      children: t.jsxs(S, {
        flex: 1,
        height: '100%',
        children: [
          t.jsx(ve, {}),
          t.jsx(S, {
            flex: 1,
            style: { overflow: 'hidden' },
            children: t.jsx(wt, { welcome: t.jsx(lo, {}) }),
          }),
          t.jsx(kt, {
            actionBarStyle: ho,
            allowExpand: !1,
            leftActions: mo,
            leftContent: c,
            sendAreaPrefix: m,
            sendButtonProps: fo,
            showRuntimeConfig: !1,
          }),
        ],
      }),
    });
  }),
  So = p.memo(() => {
    const [e, n] = N((o) => [re.pageAgentPanelWidth(o), o.updateSystemStatus]);
    return t.jsx(St, {
      defaultWidth: e,
      onSizeChange: (o) => {
        if (o?.width) {
          const s = typeof o.width == 'string' ? Number.parseInt(o.width) : o.width;
          s && n({ pageAgentPanelWidth: s });
        }
      },
      children: t.jsx(xo, {}),
    });
  }),
  vo = {
    autoSave: !0,
    documentId: void 0,
    emoji: void 0,
    isMetaDirty: !1,
    metaSaveStatus: 'idle',
    title: void 0,
  },
  yo = Ae('page:editor'),
  Co = (e) => (n, o) => {
    let s = null;
    const r = () => (
      s ||
        (s = Ht(
          async () => {
            try {
              await o().performMetaSave();
            } catch (a) {
              console.error('[PageEditor] Failed to auto-save meta:', a);
            }
          },
          Dt,
          { leading: !1, maxWait: Mt, trailing: !0 },
        )),
      s
    );
    return {
      ...vo,
      ...e,
      flushMetaSave: () => {
        s?.flush();
      },
      handleCopyLink: (a, i) => {
        const { documentId: c } = o();
        if (c) {
          const m = `${window.location.origin}${window.location.pathname}`;
          (navigator.clipboard.writeText(m), i.success(a('pageEditor.linkCopied')));
        }
      },
      handleDelete: async (a, i, c, m) => {
        const { documentId: d } = o();
        if (d)
          return new Promise((u, l) => {
            c.confirm({
              cancelText: a('cancel'),
              content: a('pageEditor.deleteConfirm.content'),
              okButtonProps: { danger: !0 },
              okText: a('delete'),
              onOk: async () => {
                try {
                  const { removeDocument: g } = D.getState();
                  (await g(d), i.success(a('pageEditor.deleteSuccess')), m?.(), u());
                } catch (g) {
                  (yo('Failed to delete page:', g), i.error(a('pageEditor.deleteError')), l(g));
                }
              },
              title: a('pageEditor.deleteConfirm.title'),
            });
          });
      },
      handleTitleSubmit: async () => {
        const { editor: a, flushMetaSave: i } = o();
        (i(), a?.focus());
      },
      initMeta: (a, i) => {
        n({
          emoji: i,
          isMetaDirty: !1,
          lastSavedEmoji: i,
          lastSavedTitle: a,
          metaSaveStatus: 'idle',
          title: a,
        });
      },
      performMetaSave: async () => {
        const {
          documentId: a,
          title: i,
          emoji: c,
          lastSavedTitle: m,
          lastSavedEmoji: d,
          isMetaDirty: u,
          onTitleChange: l,
          onEmojiChange: g,
        } = o();
        if (!(!a || !u)) {
          n({ metaSaveStatus: 'saving' });
          try {
            (await U.getState().performSave(a, { emoji: c, title: i }),
              i !== m && l?.(i || ''),
              c !== d && g?.(c),
              n({
                isMetaDirty: !1,
                lastSavedEmoji: c,
                lastSavedTitle: i,
                metaSaveStatus: 'saved',
              }));
          } catch (h) {
            (console.error('[PageEditor] Failed to save meta:', h), n({ metaSaveStatus: 'idle' }));
          }
        }
      },
      setEmoji: (a) => {
        const { lastSavedEmoji: i, triggerDebouncedMetaSave: c } = o(),
          m = a !== i;
        (n({ emoji: a, isMetaDirty: m }), m && c());
      },
      setTitle: (a) => {
        const { lastSavedTitle: i, triggerDebouncedMetaSave: c } = o(),
          m = a !== i;
        (n({ isMetaDirty: m, title: a }), m && c());
      },
      triggerDebouncedMetaSave: () => {
        r()();
      },
    };
  },
  jo = { title: (e) => e.title },
  Io = (e) => Ee(we(Co(e)), Te),
  { useStore: x, useStoreApi: ye, Provider: bo } = ke(),
  Ao = P(({ css: e }) => ({
    askCopilot: e`
    border-radius: 6px;
    color: ${b.colorTextDescription};

    &:hover {
      color: ${b.colorTextSecondary};
    }
  `,
  })),
  ko = (e) => {
    const { t: n } = y('common'),
      o = D((r) => r.addChatContextSelection),
      s = x((r) => r.documentId);
    return p.useMemo(() => {
      if (!e) return [];
      const r = n('cmdk.askLobeAI');
      return [
        {
          children: t.jsxs(ce, {
            clickable: !0,
            horizontal: !0,
            align: 'center',
            className: Ao.askCopilot,
            gap: 8,
            paddingBlock: 6,
            paddingInline: 12,
            variant: 'borderless',
            onClick: () => {
              const a = e.getSelectionDocument?.('litexml') || '',
                i = e.getSelectionDocument?.('text') || '',
                c = a.trim() || i.trim();
              if (!c) return;
              const m = a.trim() ? 'xml' : 'text',
                d =
                  (i || a)
                    .replaceAll(/<[^>]*>/g, ' ')
                    .replaceAll(/\s+/g, ' ')
                    .trim() || void 0;
              (o({
                content: c,
                format: m,
                id: `selection-${Wt(6)}`,
                pageId: s,
                preview: d,
                title: 'Selection',
                type: 'text',
              }),
                N.getState().toggleRightPanel(!0),
                setTimeout(() => {
                  const l = [...document.querySelectorAll('[data-lexical-editor="true"]')].at(-1);
                  l && l.focus();
                }, 300),
                e.dispatchCommand(Et, void 0),
                e.blur());
            },
            children: [
              t.jsx(q, { avatar: se, shape: 'square', size: 16 }),
              t.jsx('span', { children: r }),
            ],
          }),
          key: 'ask-copilot',
          label: r,
          onClick: () => {},
        },
      ];
    }, [o, e, s, n]);
  },
  Eo = () => {
    const { t: e } = y('editor');
    return p.useMemo(
      () =>
        [
          {
            icon: Qe,
            key: 'h1',
            label: e('slash.h1'),
            onSelect: (o) => {
              o.dispatchCommand(F, { tag: 'h1' });
            },
          },
          {
            icon: Je,
            key: 'h2',
            label: e('slash.h2'),
            onSelect: (o) => {
              o.dispatchCommand(F, { tag: 'h2' });
            },
          },
          {
            icon: Ve,
            key: 'h3',
            label: e('slash.h3'),
            onSelect: (o) => {
              o.dispatchCommand(F, { tag: 'h3' });
            },
          },
          { type: 'divider' },
          {
            icon: et,
            key: 'tl',
            label: e('typobar.taskList'),
            onSelect: (o) => {
              o.dispatchCommand($t, void 0);
            },
          },
          {
            icon: tt,
            key: 'ul',
            label: e('typobar.bulletList'),
            onSelect: (o) => {
              o.dispatchCommand(Pt, void 0);
            },
          },
          {
            icon: ot,
            key: 'ol',
            label: e('typobar.numberList'),
            onSelect: (o) => {
              o.dispatchCommand(Nt, void 0);
            },
          },
          { type: 'divider' },
          {
            icon: nt,
            key: 'image',
            label: e('typobar.image'),
            onSelect: (o) => {
              oo((s) => {
                for (const r of s)
                  r && r.type.startsWith('image/') && o.dispatchCommand(Re, { file: r });
              }, 'image/*');
            },
          },
          {
            icon: at,
            key: 'hr',
            label: e('slash.hr'),
            onSelect: (o) => {
              o.dispatchCommand(Ut, {});
            },
          },
          {
            icon: st,
            key: 'table',
            label: e('slash.table'),
            onSelect: (o) => {
              o.dispatchCommand(Kt, { columns: '3', rows: '3' });
            },
          },
          {
            icon: it,
            key: 'codeblock',
            label: e('typobar.codeblock'),
            onSelect: (o) => {
              (o.dispatchCommand(Yt, void 0),
                queueMicrotask(() => {
                  o.focus();
                }));
            },
          },
          {
            icon: rt,
            key: 'tex',
            label: e('slash.tex'),
            onSelect: (o) => {
              (o.dispatchCommand(qt, { code: 'x^2 + y^2 = z^2' }),
                queueMicrotask(() => {
                  o.focus();
                }));
            },
          },
        ].map((o) =>
          o.type === 'divider'
            ? o
            : {
                ...o,
                extra: t.jsx(z, { code: !0, fontSize: 12, type: 'secondary', children: o.key }),
                style: { minWidth: 200 },
              },
        ),
      [e],
    );
  },
  To = p.memo(({ placeholder: e, style: n }) => {
    const { t: o } = y(['file', 'ui']),
      s = x((c) => c.editor),
      r = x((c) => c.documentId),
      a = Eo(),
      i = ko(s);
    return t.jsx(Fe, {
      documentId: r,
      editor: s,
      placeholder: e || o('pageEditor.editorPlaceholder'),
      slashItems: a,
      style: n,
      toolbarExtraItems: i,
      unsavedChangesGuard: {
        enabled: !0,
        message: o('form.unsavedWarning', { ns: 'ui' }),
        title: o('form.unsavedChanges', { ns: 'ui' }),
      },
    });
  }),
  k = P(({ css: e, cssVar: n }) => ({
    breadcrumb: e`
    font-size: 14px;
    color: ${n.colorTextSecondary};
  `,
    breadcrumbItem: e`
    cursor: pointer;
    transition: color ${n.motionDurationSlow};

    &:hover {
      color: ${n.colorText};
    }
  `,
    currentItem: e`
    font-weight: 500;
    color: ${n.colorText};
  `,
    separator: e`
    margin-inline: 8px;
    color: ${n.colorTextQuaternary};
  `,
  })),
  Ce = p.memo(() => {
    const { t: e } = y('file'),
      n = x((u) => u.title),
      o = x((u) => u.knowledgeBaseId),
      s = x((u) => u.parentId),
      r = Zt(Qt.getKnowledgeBaseNameById(o || '')),
      a = D((u) => u.useFetchKnowledgeItem),
      { data: i } = a(s),
      c = D((u) => u.useFetchFolderBreadcrumb),
      { data: m = [] } = c(i?.slug || null);
    if (!i || !s) return null;
    const d = n || e('pageEditor.titlePlaceholder');
    return t.jsxs(S, {
      horizontal: !0,
      align: 'center',
      className: k.breadcrumb,
      flex: 1,
      gap: 0,
      children: [
        o &&
          t.jsxs(t.Fragment, {
            children: [
              t.jsx('span', {
                className: k.breadcrumbItem,
                style: { cursor: 'default' },
                children: r || 'Knowledge Base',
              }),
              t.jsx('span', { className: k.separator, children: '/' }),
            ],
          }),
        m.map((u) =>
          t.jsxs(
            S,
            {
              horizontal: !0,
              align: 'center',
              gap: 0,
              children: [
                t.jsx('span', {
                  className: k.breadcrumbItem,
                  style: { cursor: 'default' },
                  children: u.name,
                }),
                t.jsx('span', { className: k.separator, children: '/' }),
              ],
            },
            u.id,
          ),
        ),
        t.jsx('span', {
          className: $(k.breadcrumbItem, k.currentItem),
          style: { cursor: 'default' },
          children: d,
        }),
      ],
    });
  });
Ce.displayName = 'Breadcrumb';
const wo = () => {
    const { t: e } = y(['file', 'common', 'chat']),
      { message: n, modal: o } = ae.useApp(),
      s = ye(),
      { lg: r = !0 } = Me(),
      a = x((f) => f.documentId),
      i = U((f) => (a ? We.lastUpdatedTime(a)(f) : null)),
      c = D((f) => f.duplicateDocument),
      [m, d] = N((f) => [re.wideScreen(f), f.toggleWideScreen]),
      u = r,
      l = async () => {
        if (a)
          try {
            (await c(a), n.success(e('pageEditor.duplicateSuccess')));
          } catch (f) {
            (console.error('Failed to duplicate page:', f),
              n.error(e('pageEditor.duplicateError')));
          }
      },
      g = async () => {
        const f = s.getState(),
          { editor: v, title: A } = f;
        if (v)
          try {
            const R = v.getDocument('markdown') || '',
              je = `${A || 'Untitled'}.md`;
            if (!Pe) {
              const Ie = new Blob([R], { type: 'text/markdown' }),
                G = URL.createObjectURL(Ie),
                w = document.createElement('a');
              ((w.href = G),
                (w.download = je),
                document.body.append(w),
                w.click(),
                w.remove(),
                URL.revokeObjectURL(G),
                n.success(e('pageEditor.exportSuccess')));
            }
          } catch (R) {
            (console.error('Failed to export markdown:', R), n.error(e('pageEditor.exportError')));
          }
      };
    return {
      menuItems: p.useMemo(() => {
        const f = [
          ...(u
            ? [
                {
                  checked: m,
                  icon: t.jsx(j, { icon: ct }),
                  key: 'full-width',
                  label: e('viewMode.fullWidth', { ns: 'chat' }),
                  onCheckedChange: d,
                  type: 'switch',
                },
                { type: 'divider' },
              ]
            : []),
          {
            icon: t.jsx(j, { icon: lt }),
            key: 'duplicate',
            label: e('pageList.duplicate'),
            onClick: l,
          },
          {
            icon: t.jsx(j, { icon: dt }),
            key: 'copy-link',
            label: e('pageEditor.menu.copyLink'),
            onClick: () => {
              s.getState().handleCopyLink(e, n);
            },
          },
          {
            danger: !0,
            icon: t.jsx(j, { icon: de }),
            key: 'delete',
            label: e('delete', { ns: 'common' }),
            onClick: async () => {
              const v = s.getState();
              await v.handleDelete(e, n, o, v.onDelete);
            },
          },
          { type: 'divider' },
          {
            children: [
              { key: 'export-markdown', label: e('pageEditor.menu.export.markdown'), onClick: g },
            ],
            icon: t.jsx(j, { icon: ut }),
            key: 'export',
            label: e('pageEditor.menu.export'),
          },
        ];
        return (
          i &&
            f.push(
              { type: 'divider' },
              {
                disabled: !0,
                key: 'page-info',
                label: t.jsx('div', {
                  style: { color: b.colorTextTertiary, fontSize: 12, lineHeight: 1.6 },
                  children: t.jsx('div', {
                    children: i
                      ? e('pageEditor.editedAt', { time: De(i).format('MMMM D, YYYY [at] h:mm A') })
                      : '',
                  }),
                }),
              },
            ),
          f
        );
      }, [i, s, e, n, o, m, d, u, l, g]),
    };
  },
  Mo = p.memo(() => {
    const { t: e } = y('file'),
      [n, o, s, r, a] = x((c) => [c.documentId, c.emoji, c.title, c.parentId, c.onBack]),
      { menuItems: i } = wo();
    return t.jsx(ge, {
      left: t.jsxs(t.Fragment, {
        children: [
          a && t.jsx(E, { icon: mt, onClick: a }),
          r && t.jsx(Ce, {}),
          !r &&
            t.jsxs(t.Fragment, {
              children: [
                o && t.jsx(q, { avatar: o, shape: 'square', size: 28 }),
                t.jsx(z, {
                  ellipsis: !0,
                  style: { marginLeft: 4 },
                  weight: 500,
                  children: s || e('pageEditor.titlePlaceholder'),
                }),
              ],
            }),
          n && t.jsx(Xt, { documentId: n, style: { marginLeft: 6 } }),
        ],
      }),
      right: t.jsxs(t.Fragment, {
        children: [
          t.jsx(he, {
            iconSpaceMode: 'group',
            items: i,
            placement: 'bottomRight',
            popupProps: { style: { minWidth: 200 } },
            children: t.jsx(E, { icon: le, size: O }),
          }),
          t.jsx(vt, { hideWhenExpanded: !0, showActive: !1 }),
        ],
      }),
    });
  }),
  Do = p.memo(({ children: e }) => {
    const n = C((l) => l.useInitBuiltinAgent),
      o = C(Ne.pageAgentId),
      s = I((l) => l.activeTopicId),
      r = C((l) => l.activeAgentId);
    n(_e.pageAgent);
    const a = !r || ie(r) ? o : r,
      i = p.useMemo(() => ({ agentId: a, scope: 'page', topicId: s }), [a, s]),
      c = p.useMemo(() => _t(i), [i]),
      m = I((l) => l.replaceMessages),
      d = I((l) => (c ? l.dbMessagesMap[c] : void 0)),
      u = Tt(i);
    return o
      ? t.jsx(At, {
          context: i,
          hasInitMessages: !!d,
          messages: d,
          operationState: u,
          onMessagesChange: (l, g) => {
            m(l, { context: g });
          },
          children: e,
        })
      : t.jsx(Be, { debugId: 'PageAgentProvider' });
  }),
  Po = p.memo(
    ({
      pageId: e,
      knowledgeBaseId: n,
      onDocumentIdChange: o,
      onEmojiChange: s,
      onSave: r,
      onTitleChange: a,
      onDelete: i,
      onBack: c,
      parentId: m,
      title: d,
      emoji: u,
    }) => {
      const l = ye(),
        g = Le(l),
        h = x((A) => A.editor),
        f = x((A) => A.initMeta),
        v = h;
      return (
        g('documentId', e),
        g('knowledgeBaseId', n),
        g('onDocumentIdChange', o),
        g('onEmojiChange', s),
        g('onSave', r),
        g('onTitleChange', a),
        g('onDelete', i),
        g('onBack', c),
        g('parentId', m),
        p.useEffect(() => {
          f(d, u);
        }, [e, d, u]),
        p.useEffect(
          () => (
            v && T.setEditor(v),
            () => {
              T.setEditor(null);
            }
          ),
          [v],
        ),
        p.useEffect(() => {
          const A = () => l.getState().title || '';
          return (
            T.setCurrentDocId(e),
            T.setTitleHandlers(l.getState().setTitle, A),
            () => {
              (T.setCurrentDocId(void 0), T.setTitleHandlers(null, null));
            }
          );
        }, [e, l]),
        null
      );
    },
  ),
  No = p.memo(
    ({
      children: e,
      pageId: n,
      knowledgeBaseId: o,
      onDocumentIdChange: s,
      onEmojiChange: r,
      onSave: a,
      onTitleChange: i,
      onDelete: c,
      onBack: m,
      parentId: d,
      title: u,
      emoji: l,
    }) => {
      const g = Gt();
      return t.jsxs(bo, {
        createStore: () =>
          Io({
            documentId: n,
            editor: g,
            emoji: l,
            knowledgeBaseId: o,
            onBack: m,
            onDelete: c,
            onDocumentIdChange: s,
            onEmojiChange: r,
            onSave: a,
            onTitleChange: i,
            parentId: d,
            title: u,
          }),
        children: [
          t.jsx(Po, {
            emoji: l,
            knowledgeBaseId: o,
            pageId: n,
            parentId: d,
            title: u,
            onBack: m,
            onDelete: c,
            onDocumentIdChange: s,
            onEmojiChange: r,
            onSave: a,
            onTitleChange: i,
          }),
          e,
        ],
      });
    },
  ),
  _o = p.memo(() => {
    const e = x(jo.title);
    return e && t.jsx(Jt, { title: e });
  }),
  Bo = (e) => {
    const n = e.codePointAt(0);
    return n
      ? (n >= 19968 && n <= 40959) ||
          (n >= 13312 && n <= 19903) ||
          (n >= 63744 && n <= 64255) ||
          (n >= 12352 && n <= 12447) ||
          (n >= 12448 && n <= 12543) ||
          (n >= 44032 && n <= 55215) ||
          (n >= 4352 && n <= 4607) ||
          (n >= 131072 && n <= 191471)
      : !1;
  },
  Lo = (e, n, o = 2) => {
    let s = 0,
      r = '';
    for (const a of e) {
      const i = Bo(a) ? o : 1;
      if (s + i > n) break;
      ((s += i), (r += a));
    }
    return r;
  },
  Oo = p.memo(() => {
    const { t: e } = y('file'),
      n = N(to.currentLanguage),
      o = x((l) => l.emoji),
      s = x((l) => l.title),
      r = x((l) => l.setEmoji),
      a = x((l) => l.setTitle),
      i = x((l) => l.handleTitleSubmit),
      [c, m] = p.useState(!1),
      [d, u] = p.useState(!1);
    return t.jsxs(S, {
      gap: 16,
      paddingBlock: 16,
      style: { cursor: 'default' },
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      onClick: (l) => {
        (l.stopPropagation(), l.preventDefault());
      },
      children: [
        (o || d) &&
          t.jsx(eo, {
            allowDelete: !0,
            locale: n,
            open: d,
            shape: 'square',
            size: 72,
            title: e('pageEditor.chooseIcon'),
            value: o,
            onChange: (l) => {
              (r(l), u(!1));
            },
            onDelete: () => {
              (r(void 0), u(!1));
            },
            onOpenChange: (l) => {
              u(l);
            },
          }),
        !o &&
          !d &&
          t.jsx(Oe, {
            icon: t.jsx(j, { icon: pt }),
            size: 'small',
            type: 'text',
            style: {
              opacity: c ? 1 : 0,
              transition: `opacity ${b.motionDurationMid} ${b.motionEaseInOut}`,
              width: 'fit-content',
            },
            onClick: () => {
              (r('📄'), u(!0));
            },
            children: e('pageEditor.chooseIcon'),
          }),
        t.jsx(Vt, {
          autoSize: { minRows: 1 },
          placeholder: e('pageEditor.titlePlaceholder'),
          value: s,
          variant: 'borderless',
          style: { fontSize: 36, fontWeight: 600, padding: 0, resize: 'none', width: '100%' },
          onChange: (l) => {
            const g = Lo(l.target.value, 100);
            a(g);
          },
          onKeyDown: (l) => {
            l.key === 'Enter' && (l.preventDefault(), i());
          },
        }),
      ],
    });
  }),
  H = xt.create({
    contentWrapper: { display: 'flex', overflowY: 'auto', position: 'relative' },
    editorContainer: { minWidth: 0, position: 'relative' },
    editorContent: { overflowY: 'auto', position: 'relative' },
  }),
  zo = p.memo(() => {
    const e = x((o) => o.editor),
      n = x((o) => o.documentId);
    return (
      ht(),
      t.jsxs(t.Fragment, {
        children: [
          t.jsx(_o, {}),
          t.jsxs(S, {
            horizontal: !0,
            height: '100%',
            style: { backgroundColor: b.colorBgContainer },
            width: '100%',
            children: [
              t.jsxs(S, {
                flex: 1,
                height: '100%',
                style: H.editorContainer,
                children: [
                  t.jsx(Mo, {}),
                  t.jsx(S, {
                    horizontal: !0,
                    height: '100%',
                    style: H.contentWrapper,
                    width: '100%',
                    children: t.jsx(gt, {
                      wrapperStyle: { cursor: 'text' },
                      onClick: () => e?.focus(),
                      children: t.jsxs(S, {
                        flex: 1,
                        style: H.editorContent,
                        children: [t.jsx(Oo, {}), t.jsx(To, {})],
                      }),
                    }),
                  }),
                  n && t.jsx(fe, { documentId: n, editor: e }),
                ],
              }),
              t.jsx(So, {}),
            ],
          }),
        ],
      })
    );
  }),
  Mn = ({
    pageId: e,
    knowledgeBaseId: n,
    onDocumentIdChange: o,
    onEmojiChange: s,
    onSave: r,
    onTitleChange: a,
    onBack: i,
    title: c,
    emoji: m,
  }) => {
    const d = ft((u) => u.deletePage);
    return t.jsx(Do, {
      children: t.jsx(ze, {
        children: t.jsx(No, {
          emoji: m,
          knowledgeBaseId: n,
          pageId: e,
          title: c,
          onBack: i,
          onDelete: () => d(e || ''),
          onDocumentIdChange: o,
          onEmojiChange: s,
          onSave: r,
          onTitleChange: a,
          children: t.jsx(zo, {}),
        }),
      }),
    });
  };
export { Mn as P, Do as a };
