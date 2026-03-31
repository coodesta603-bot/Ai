import { i as y } from './index-Br6hqyew.js';
import {
  v as Ge,
  an as ze,
  g as T,
  eU as Ie,
  V as N,
  A as F,
  F as b,
  j as oe,
  Z as $,
  $ as O,
  B as U,
  f as H,
  u as X,
  by as re,
  M as ae,
  eV as Le,
  de as le,
  bA as R,
  I as ie,
  ax as ce,
  i as Pe,
} from './index-C8UyLGsD.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { C as Ee } from './index-Xkgn-ReB.js';
import { A as W } from './index-BAOF5XWg.js';
import { C as Te } from './index--HdG3zDE.js';
import { M as Z } from './Modal-Dd2pIxVd.js';
import { L as Be } from './index-QAeRfw4U.js';
import { S as Fe } from './SearchBar-BtAHEw-s.js';
import { u as Re } from './index-BSyA7UzD.js';
import { A as ne } from './AgentSelectionEmpty-BpdSiR5x.js';
import { M as We } from './index-CebVGYjj.js';
import { u as _e } from './useEnabledChatModels-Dc-yaT5f.js';
import { u as se } from './index-7WkVJNSh.js';
import {
  bp as $e,
  ce as de,
  cw as ue,
  cy as Ne,
  aH as Ue,
  a_ as qe,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { L as pe } from './index-DYqiTmoN.js';
import { S as De } from './index-CaOmqfDS.js';
import { m as Oe, j as He, e as Xe, f as Ze } from './Popover-Cg4CTqoX.js';
import './providerConfig-qS2Xx-oI.js';
import { B as ge } from './Block-DDntSWi2.js';
import { I as Q } from './Input-C_EgL0SG.js';
import { E as me } from './index-CopzJgBK.js';
import { B as he } from './BackgroundSwatches-DKc0P1cG.js';
import { u as fe } from './store-8fdqmFXe.js';
import { g as xe } from './general-Bhxy39g6.js';
import { G as Qe } from './index-HPKm0oip.js';
import { c as Ye } from './react-CQWP4pV0.js';
import { S as q } from './SortableList-Cl2V_SXC.js';
import { h as Je } from './selectors-3paDlMAr.js';
import { E as Ke } from './EditableText-BG4TXUOU.js';
const qt = () => {
    const t = Ge(ze.isLogin),
      o = y((x) => x.useFetchAgentList),
      { isValidating: n, data: d } = o(t);
    return { isRevalidating: n && !!d };
  },
  D = Ye((t) => ({
    close: () => t({ target: null }),
    open: (o) => t({ target: o }),
    target: null,
  })),
  Dt = (t) => D.getState().open(t),
  Ve = a.memo(({ agent: t, isSelected: o, onToggle: n, styles: d, cx: x, t: C }) => {
    const p = a.useRef(null),
      i = Re(p),
      l = t.config?.id,
      r = t.meta?.title || C('defaultSession', { ns: 'common' }),
      k = t.meta?.description || '',
      u = t.meta?.avatar || N,
      c = t.meta?.backgroundColor;
    return l
      ? e.jsx(pe.Item, {
          className: x(d.listItem),
          ref: p,
          onClick: () => n(l),
          children: e.jsxs(b, {
            horizontal: !0,
            align: 'center',
            gap: 12,
            width: '100%',
            children: [
              e.jsx(Te, {
                checked: o,
                onChange: () => {
                  n(l);
                },
                onClick: (g) => {
                  g.stopPropagation();
                },
              }),
              e.jsx(b, {
                style: { flexShrink: 0 },
                children: e.jsx(W, { animation: i, avatar: u, background: c, size: 40 }),
              }),
              e.jsxs(b, {
                flex: 1,
                gap: 2,
                style: { minWidth: 0 },
                children: [
                  e.jsx($, { className: d.title, weight: 500, children: r }),
                  k && e.jsx($, { ellipsis: !0, className: d.description, children: k }),
                ],
              }),
            ],
          }),
        })
      : null;
  }),
  E = H(({ css: t, cssVar: o }) => ({
    container: t`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${o.colorBorderSecondary};
    border-radius: ${o.borderRadius};
  `,
    description: t`
    font-size: 11px;
    line-height: 1.2;
    color: ${o.colorTextSecondary};
  `,
    hostCard: t`
    margin-block-end: ${o.paddingSM};
    padding: ${o.padding};
    border: 1px solid ${o.colorBorderSecondary};
    border-radius: ${o.borderRadiusLG};

    background: ${o.colorFillTertiary};
  `,
    leftColumn: t`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding-block: ${o.paddingSM} 0;
    padding-inline: ${o.paddingSM};
    border-inline-end: 1px solid ${o.colorBorderSecondary};
  `,
    listItem: t`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${o.paddingSM} !important;
    border-radius: ${o.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${o.colorFillTertiary};
    }
  `,
    modelSelectDisabled: t`
    pointer-events: none;
  `,
    rightColumn: t`
    overflow-y: auto;
    flex: 1;
    padding: ${o.paddingSM};
  `,
    selectedItem: t`
    opacity: 0.6;
    background: ${o.colorFillQuaternary};
  `,
  })),
  et = a.memo(
    ({
      currentHostConfig: t,
      existingMembers: o = [],
      mode: n,
      onCancel: d,
      onConfirm: x,
      open: C,
      preSelectedAgents: p = [],
    }) => {
      const { t: i } = T(['chat', 'common']),
        l = _e(),
        [r, k] = a.useState(p),
        [u, c] = a.useState(''),
        g = n === 'add' && t?.enableSupervisor === !0,
        [S, w] = a.useState(n === 'add'),
        [f, M] = a.useState(() => {
          if (n === 'add' && t)
            return { model: t.orchestratorModel, provider: t.orchestratorProvider };
          if (l.length > 0 && l[0].children.length > 0) {
            const s = l[0];
            return { model: s.children[0].id, provider: s.id };
          }
          return {};
        }),
        h = se((s) => (s.sessions || []).filter((A) => A.type === Ie.Agent && !A.config?.virtual)),
        G = se((s) => s.activeId),
        L = (s) => {
          k((m) => (m.includes(s) ? m.filter((A) => A !== s) : [...m, s]));
        },
        j = (s) => {
          k((m) => m.filter((A) => A !== s));
        },
        z = a.useCallback((s) => {
          c(s.target.value);
        }, []),
        P = a.useCallback((s) => {
          w(!s);
        }, []),
        v = a.useCallback((s) => {
          M(s);
        }, []),
        I = a.useMemo(
          () =>
            n === 'create' ? h : h.filter((s) => s.id !== G && !o.includes(s.config?.id || '')),
          [h, G, n, o],
        ),
        B = a.useMemo(
          () =>
            u.trim()
              ? I.filter((s) => {
                  const m = s.meta?.title || '',
                    A = s.meta?.description || '',
                    _ = u.toLowerCase();
                  return m.toLowerCase().includes(_) || A.toLowerCase().includes(_);
                })
              : I,
          [I, u],
        ),
        Y = a.useMemo(
          () =>
            r
              .map((s) => {
                const m = h.find((Me) => Me.config.id === s);
                if (!m) return null;
                const A = m.meta?.title || i('defaultSession', { ns: 'common' }),
                  _ = m.meta?.avatar || N,
                  ye = m.meta?.backgroundColor,
                  we = m.meta?.description || '';
                return {
                  actions: e.jsx(F, {
                    icon: $e,
                    size: 'small',
                    style: { color: '#999' },
                    onClick: () => j(s),
                  }),
                  avatar: e.jsx(W, { avatar: _, background: ye, shape: 'circle', size: 40 }),
                  description: we,
                  key: s,
                  showAction: !0,
                  title: A,
                };
              })
              .filter((s) => s !== null),
          [r, h, i, j],
        ),
        J = () => {
          (k(p),
            c(''),
            w(n === 'add'),
            n === 'add' &&
              t &&
              M({ model: t.orchestratorModel, provider: t.orchestratorProvider }));
        },
        [K, V] = a.useState(!1),
        Se = a.useMemo(() => {
          const s = f.model,
            m = f.provider;
          if (!(!s || !m)) return { model: s, provider: m };
        }, [f]),
        be = async () => {
          try {
            (V(!0), await x(r), J());
          } catch (s) {
            console.error('Failed to confirm action:', s);
          } finally {
            V(!1);
          }
        },
        ee = () => {
          (J(), d());
        },
        ve = i(n === 'create' ? 'memberSelection.setInitialMembers' : 'memberSelection.addMember'),
        je = i(n === 'create' ? 'memberSelection.createGroup' : 'memberSelection.addMember'),
        ke = !g,
        te = r.length + (ke && !S ? 1 : 0),
        Ae = te < (n === 'create' ? 1 : 0) || K;
      return e.jsx(Z, {
        allowFullscreen: !0,
        open: C,
        title: ve,
        width: 800,
        footer: e.jsxs(b, {
          horizontal: !0,
          gap: 8,
          justify: 'end',
          children: [
            e.jsx(U, { onClick: ee, children: i('cancel', { ns: 'common' }) }),
            e.jsxs(U, {
              disabled: Ae,
              loading: K,
              type: 'primary',
              onClick: be,
              children: [je, ' (', te, ')'],
            }),
          ],
        }),
        onCancel: ee,
        children: e.jsxs(b, {
          horizontal: !0,
          className: E.container,
          children: [
            e.jsxs(b, {
              className: E.leftColumn,
              flex: 1,
              gap: 12,
              children: [
                e.jsx(Fe, {
                  allowClear: !0,
                  placeholder: i('memberSelection.searchAgents'),
                  value: u,
                  variant: 'filled',
                  onChange: z,
                }),
                e.jsx(b, {
                  flex: 1,
                  style: { overflowY: 'auto' },
                  children:
                    B.length === 0
                      ? e.jsx(ne, { search: !!u, variant: u ? 'empty' : 'noAvailable' })
                      : e.jsx(pe, {
                          dataSource: B,
                          split: !1,
                          renderItem: (s) => {
                            const m = s.config?.id;
                            if (!m) return null;
                            const A = r.includes(m);
                            return e.jsx(
                              Ve,
                              { agent: s, cx: oe, isSelected: A, styles: E, t: i, onToggle: L },
                              m,
                            );
                          },
                        }),
                }),
              ],
            }),
            e.jsx(b, {
              className: E.rightColumn,
              flex: 1,
              children: e.jsxs(b, {
                gap: 16,
                children: [
                  !g &&
                    e.jsxs(b, {
                      horizontal: !0,
                      align: 'center',
                      className: E.hostCard,
                      gap: 12,
                      children: [
                        e.jsxs(b, {
                          flex: 1,
                          gap: 2,
                          children: [
                            e.jsx($, {
                              style: { fontSize: 14, fontWeight: 500 },
                              type: S ? 'secondary' : void 0,
                              children: i('groupWizard.host.title'),
                            }),
                            e.jsx($, {
                              style: { color: '#999', fontSize: 12 },
                              type: S ? 'secondary' : void 0,
                              children: i('groupWizard.host.description'),
                            }),
                          ],
                        }),
                        e.jsxs(b, {
                          horizontal: !0,
                          align: 'center',
                          gap: 12,
                          children: [
                            e.jsx('div', {
                              className: oe(S && E.modelSelectDisabled),
                              style: { opacity: S ? 0.6 : 1 },
                              children: e.jsx(We, {
                                requiredAbilities: ['functionCall'],
                                value: Se,
                                onChange: v,
                              }),
                            }),
                            e.jsx(O, {
                              title: i('groupWizard.host.tooltip'),
                              children: e.jsx(De, {
                                checked: !S,
                                size: 'small',
                                onChange: (s) => P(s),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsx(b, {
                    flex: 1,
                    children:
                      Y.length === 0
                        ? e.jsx(ne, { variant: 'noSelected' })
                        : e.jsx(Be, { items: Y }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
  ),
  tt = 1024 * 1024,
  ot = a.memo(({ id: t, title: o, avatar: n, onClose: d }) => {
    const { t: x } = T('setting'),
      C = X(xe.currentLanguage),
      p = re(),
      i = fe((j) => j.uploadWithProgress),
      l = ae(Le.getAgentMetaById(t)),
      [r, k] = a.useState(o),
      [u, c] = a.useState(n),
      [g, S] = a.useState(l.backgroundColor),
      [w, f] = a.useState(!1),
      M = a.useCallback(async () => {
        const j = r && o !== r,
          z = u !== (n || void 0),
          P = g !== l.backgroundColor;
        if (j || z || P)
          try {
            y.getState().setAgentUpdatingId(t);
            const v = {};
            (j && (v.title = r),
              z && (v.avatar = u || void 0),
              P && (v.backgroundColor = g),
              await ae.getState().optimisticUpdateAgentMeta(t, v),
              await y.getState().refreshAgentList());
          } finally {
            y.getState().setAgentUpdatingId(null);
          }
        d();
      }, [r, u, g, o, n, l.backgroundColor, t, d]),
      h = a.useCallback(
        async (j) => {
          if (j.size > tt) {
            le.error(x('settingAgent.avatar.sizeExceeded'));
            return;
          }
          f(!0);
          try {
            const z = await i({ file: j });
            z?.url && c(z.url);
          } finally {
            f(!1);
          }
        },
        [i, x],
      ),
      G = a.useCallback(() => {
        c(null);
      }, []),
      L = a.useRef(null);
    return (
      a.useEffect(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            L.current && L.current.focus();
          });
        });
      }, []),
      e.jsxs(b, {
        horizontal: !0,
        align: 'center',
        gap: 4,
        style: { width: 320 },
        onClick: R,
        children: [
          e.jsx(me, {
            allowUpload: !0,
            allowDelete: !!u,
            loading: w,
            locale: C,
            shape: 'square',
            value: u ?? void 0,
            background: g && g !== 'rgba(0,0,0,0)' ? g : void 0,
            customRender: (j) =>
              e.jsx(ge, {
                clickable: !0,
                align: 'center',
                height: 36,
                justify: 'center',
                variant: p ? 'filled' : 'outlined',
                width: 36,
                onClick: R,
                children: e.jsx(W, {
                  emojiScaleWithBackground: !0,
                  avatar: j || N,
                  shape: 'square',
                  size: 32,
                  background: g && g !== 'rgba(0,0,0,0)' ? g : void 0,
                }),
              }),
            customTabs: [
              {
                label: e.jsx(O, {
                  title: x('settingAgent.backgroundColor.title'),
                  children: e.jsx(ie, { icon: de, size: { size: 20, strokeWidth: 2.5 } }),
                }),
                render: () =>
                  e.jsx(b, {
                    padding: 8,
                    width: 332,
                    children: e.jsx(he, {
                      gap: 8,
                      shape: 'square',
                      size: 38,
                      value: g,
                      onChange: S,
                    }),
                  }),
                value: 'background',
              },
            ],
            onChange: c,
            onDelete: G,
            onUpload: h,
          }),
          e.jsx(Q, {
            defaultValue: o,
            ref: L,
            style: { flex: 1 },
            onChange: (j) => k(j.target.value),
            onPressEnter: M,
          }),
          e.jsx(F, { icon: ue, size: 'small', onClick: M }),
        ],
      })
    );
  }),
  at = 1024 * 1024,
  nt = a.memo(
    ({ id: t, title: o, avatar: n, backgroundColor: d, memberAvatars: x, type: C, onClose: p }) => {
      const { t: i } = T('setting'),
        l = X(xe.currentLanguage),
        r = re(),
        k = fe((v) => v.uploadWithProgress),
        u = C === 'agentGroup',
        [c, g] = a.useState(o),
        [S, w] = a.useState(n),
        [f, M] = a.useState(d),
        [h, G] = a.useState(!1),
        L = a.useCallback(async () => {
          const v = c && o !== c,
            I = u && S !== n,
            B = u && f !== d;
          if (v || I || B)
            try {
              (y.getState().setGroupUpdatingId(t),
                C === 'group'
                  ? await y.getState().updateGroupName(t, c)
                  : await y.getState().renameAgentGroup(t, c || o, I ? S : void 0, B ? f : void 0));
            } finally {
              y.getState().setGroupUpdatingId(null);
            }
          p();
        }, [c, S, f, o, n, d, t, C, u, p]),
        j = a.useCallback(
          async (v) => {
            if (v.size > at) {
              le.error(i('settingAgent.avatar.sizeExceeded'));
              return;
            }
            G(!0);
            try {
              const I = await k({ file: v });
              I?.url && w(I.url);
            } finally {
              G(!1);
            }
          },
          [k, i],
        ),
        z = a.useCallback(() => {
          w(null);
        }, []),
        P = a.useRef(null);
      return (
        a.useEffect(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              P.current && P.current.focus();
            });
          });
        }, []),
        e.jsxs(b, {
          horizontal: !0,
          align: 'center',
          gap: 4,
          style: { width: 320 },
          onClick: R,
          children: [
            u &&
              e.jsx(me, {
                allowUpload: !0,
                allowDelete: !!S,
                loading: h,
                locale: l,
                shape: 'square',
                value: S ?? void 0,
                background: f && f !== 'rgba(0,0,0,0)' ? f : void 0,
                customRender: (v) =>
                  e.jsx(ge, {
                    clickable: !0,
                    align: 'center',
                    height: 36,
                    justify: 'center',
                    variant: r ? 'filled' : 'outlined',
                    width: 36,
                    onClick: R,
                    children: v
                      ? e.jsx(W, {
                          emojiScaleWithBackground: !0,
                          avatar: v,
                          shape: 'square',
                          size: 32,
                          background: f && f !== 'rgba(0,0,0,0)' ? f : void 0,
                        })
                      : e.jsx(Qe, { avatars: x || [], background: f, size: 32 }),
                  }),
                customTabs: [
                  {
                    label: e.jsx(O, {
                      title: i('settingAgent.backgroundColor.title'),
                      children: e.jsx(ie, { icon: de, size: { size: 20, strokeWidth: 2.5 } }),
                    }),
                    render: () =>
                      e.jsx(b, {
                        padding: 8,
                        width: 332,
                        children: e.jsx(he, {
                          gap: 8,
                          shape: 'square',
                          size: 38,
                          value: f,
                          onChange: M,
                        }),
                      }),
                    value: 'background',
                  },
                ],
                onChange: w,
                onDelete: z,
                onUpload: j,
              }),
            e.jsx(Q, {
              defaultValue: o,
              ref: P,
              style: { flex: 1 },
              onChange: (v) => g(v.target.value),
              onPressEnter: L,
            }),
            e.jsx(F, { icon: ue, size: 'small', onClick: L }),
          ],
        })
      );
    },
  ),
  st = () => {
    const t = D((n) => n.target),
      o = D((n) => n.close);
    return e.jsx(Oe, {
      open: t !== null,
      onOpenChange: (n) => {
        n || o();
      },
      children: e.jsx(He, {
        children: e.jsx(Xe, {
          anchor: t?.anchor ?? document.body,
          placement: 'bottomLeft',
          children: e.jsx(Ze, {
            'data-testid': 'editing-popover',
            'style': { padding: 4 },
            'children':
              t?.type === 'agent'
                ? e.jsx(ot, { avatar: t.avatar, id: t.id, title: t.title, onClose: o })
                : t
                  ? e.jsx(nt, {
                      avatar: t.avatar,
                      backgroundColor: t.backgroundColor,
                      id: t.id,
                      memberAvatars: t.memberAvatars,
                      title: t.title,
                      type: t.type,
                      onClose: o,
                    })
                  : null,
          }),
        }),
      }),
    });
  },
  rt = H(({ css: t }) => ({
    content: t`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,
    title: t`
    flex: 1;
    height: 28px;
    line-height: 28px;
    text-align: start;
  `,
  })),
  lt = a.memo(({ id: t, name: o }) => {
    const { t: n } = T('chat'),
      { message: d, modal: x } = ce.useApp(),
      [C, p] = a.useState(!1),
      [i, l] = y((r) => [r.updateGroupName, r.removeGroup]);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(q.DragHandle, {}),
        C
          ? e.jsx(Ke, {
              editing: C,
              showEditIcon: !1,
              style: { height: 28 },
              value: o,
              onEditingChange: (r) => p(r),
              onChangeEnd: async (r) => {
                if (o !== r) {
                  if (!r) return;
                  if (r.length === 0 || r.length > 20 || r.trim() === '')
                    return d.warning(n('sessionGroup.tooLong'));
                  (await i(t, r), d.success(n('sessionGroup.renameSuccess')));
                }
                p(!1);
              },
            })
          : e.jsxs(e.Fragment, {
              children: [
                e.jsx('span', { className: rt.title, children: o }),
                e.jsx(F, { icon: Ne, size: 'small', onClick: () => p(!0) }),
                e.jsx(F, {
                  icon: Ue,
                  size: 'small',
                  onClick: () => {
                    x.confirm({
                      centered: !0,
                      okButtonProps: { danger: !0, type: 'primary' },
                      onOk: async () => {
                        await l(t);
                      },
                      title: n('sessionGroup.confirmRemoveGroupAlert'),
                    });
                  },
                }),
              ],
            }),
      ],
    });
  }),
  it = H(({ css: t, cssVar: o }) => ({
    container: t`
    height: 36px;
    padding-inline: 8px;
    border-radius: ${o.borderRadius}px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${o.colorFillTertiary};
    }
  `,
  })),
  ct = a.memo(({ open: t, onCancel: o }) => {
    const { t: n } = T('chat'),
      d = y((l) => Je.agentGroups(l).map((r) => ({ id: r.id, name: r.name, sort: r.sort })), Pe),
      [x, C] = y((l) => [l.addGroup, l.updateGroupSort]),
      [p, i] = a.useState(!1);
    return e.jsx(Z, {
      allowFullscreen: !0,
      footer: null,
      open: t,
      title: n('sessionGroup.config'),
      width: 400,
      onCancel: o,
      children: e.jsxs(b, {
        children: [
          e.jsx(q, {
            items: d,
            renderItem: (l) =>
              e.jsx(q.Item, {
                horizontal: !0,
                align: 'center',
                className: it.container,
                gap: 4,
                id: l.id,
                justify: 'space-between',
                children: e.jsx(lt, { ...l }),
              }),
            onChange: (l) => {
              C(l);
            },
          }),
          e.jsx(U, {
            block: !0,
            icon: qe,
            loading: p,
            onClick: async () => {
              (i(!0), await x(n('sessionGroup.newGroup')), i(!1));
            },
            children: n('sessionGroup.createGroup'),
          }),
        ],
      }),
    });
  }),
  dt = a.memo(({ id: t, open: o, onCancel: n }) => {
    const { t: d } = T('chat'),
      x = X((c) => c.toggleExpandSessionGroup),
      { message: C } = ce.useApp(),
      [p, i] = y((c) => [c.updateAgentGroup, c.addGroup]),
      [l, r] = a.useState(''),
      [k, u] = a.useState(!1);
    return e.jsx('div', {
      onClick: R,
      children: e.jsx(Z, {
        allowFullscreen: !0,
        destroyOnHidden: !0,
        okButtonProps: { loading: k },
        open: o,
        title: d('sessionGroup.createGroup'),
        width: 400,
        onCancel: (c) => {
          (r(''), n?.(c));
        },
        onOk: async (c) => {
          if (l.length === 0 || l.length > 20 || l.trim() === '')
            return C.warning(d('sessionGroup.tooLong'));
          u(!0);
          const g = await i(l);
          (await p(t, g), x(g, !0), u(!1), C.success(d('sessionGroup.createSuccess')), n?.(c));
        },
        children: e.jsx(b, {
          paddingBlock: 16,
          children: e.jsx(Q, {
            autoFocus: !0,
            placeholder: d('sessionGroup.inputPlaceholder'),
            value: l,
            onChange: (c) => r(c.target.value),
          }),
        }),
      }),
    });
  }),
  Ce = a.createContext(null),
  Ot = () => {
    const t = a.use(Ce);
    if (!t) throw new Error('useAgentModal must be used within AgentModalProvider');
    return t;
  },
  Ht = a.memo(({ children: t }) => {
    const [o, n] = a.useState(!1),
      [d, x] = a.useState(''),
      [C, p] = a.useState(!1),
      [i, l] = a.useState(!1),
      [r, k] = a.useState({}),
      [u, c] = a.useState(!1),
      [g, S] = a.useState(!1),
      [w, f] = a.useState({}),
      M = a.useMemo(
        () => ({
          closeAllModals: () => {
            (n(!1), p(!1), l(!1), S(!1));
          },
          closeConfigGroupModal: () => p(!1),
          closeCreateGroupModal: () => n(!1),
          closeGroupWizardModal: () => l(!1),
          closeMemberSelectionModal: () => S(!1),
          openConfigGroupModal: () => p(!0),
          openCreateGroupModal: (h) => {
            (x(h), n(!0));
          },
          openGroupWizardModal: (h) => {
            (k(h), l(!0));
          },
          openMemberSelectionModal: (h) => {
            (f(h), S(!0));
          },
          setGroupWizardLoading: c,
        }),
        [],
      );
    return e.jsxs(Ce, {
      value: M,
      children: [
        t,
        o && e.jsx(dt, { id: d, open: o, onCancel: () => n(!1) }),
        e.jsx(ct, { open: C, onCancel: () => p(!1) }),
        e.jsx(Ee, {
          isCreatingFromTemplate: u,
          open: i,
          onCancel: () => {
            (r.onCancel?.(), l(!1));
          },
          onCreateCustom: async (h) => {
            await r.onCreateCustom?.(h);
          },
          onCreateFromTemplate: async (h, G) => {
            await r.onCreateFromTemplate?.(h, G);
          },
        }),
        e.jsx(et, {
          mode: 'create',
          open: g,
          onCancel: () => {
            (w.onCancel?.(), S(!1));
          },
          onConfirm: async (h) => {
            await w.onConfirm?.(h);
          },
        }),
        e.jsx(st, {}),
      ],
    });
  }),
  Xt = a.memo(({ avatar: t, avatarBackground: o }) =>
    e.jsx(W, {
      emojiScaleWithBackground: !0,
      avatar: t || N,
      background: o,
      shape: 'square',
      size: 22,
    }),
  );
export { Xt as A, Ht as a, Ot as b, Dt as o, qt as u };
