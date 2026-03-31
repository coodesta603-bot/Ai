import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as D,
  eU as ke,
  j as R,
  V as B,
  $ as I,
  Z as f,
  F as u,
  k as y,
  bi as ze,
  B as re,
  f as Te,
  bA as le,
} from './index-C8UyLGsD.js';
import { A as O } from './index-BAOF5XWg.js';
import { C as ae } from './index--HdG3zDE.js';
import { E as P } from './Empty-DHLc2EKW.js';
import { M as we } from './Modal-Dd2pIxVd.js';
import { L as ne } from './index-QAeRfw4U.js';
import { S as Ae } from './SearchBar-BtAHEw-s.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { G as $e } from './index-HPKm0oip.js';
import { M as Re } from './index-CebVGYjj.js';
import { u as We } from './useEnabledChatModels-Dc-yaT5f.js';
import { u as Le } from './index-7WkVJNSh.js';
import { t as _e } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { S as K } from './index-CaOmqfDS.js';
import { a4 as W } from '../vendor/vendor-icons-BHMUH78i.js';
const Ne = () => {
    const { t: r } = D('welcome');
    return ['brainstorm', 'analysis', 'writing', 'planning', 'product', 'game'].map((m) => ({
      description: r(`guide.groupTemplates.${m}.description`),
      id: m,
      members: r(`guide.groupTemplates.${m}.members`, { returnObjects: !0 }),
      title: r(`guide.groupTemplates.${m}.title`),
    }));
  },
  Pe = s.memo(({ template: r, isSelected: n, onToggle: m, styles: p, cx: z }) => {
    const { t: l } = D('chat');
    return t.jsx('div', {
      className: z(p.listItem),
      onClick: () => m(r.id),
      children: t.jsxs(u, {
        horizontal: !0,
        align: 'center',
        gap: 12,
        width: '100%',
        children: [
          t.jsx(ae, { checked: n, onChange: () => m(r.id), onClick: le }),
          t.jsx($e, {
            size: 40,
            avatars: r.members
              .filter((a) => a != null)
              .map((a) => ({ avatar: a.avatar || B, background: a.backgroundColor || void 0 })),
          }),
          t.jsxs(u, {
            flex: 1,
            gap: 2,
            children: [
              t.jsx(f, { className: p.title, children: r.title }),
              t.jsx(f, { ellipsis: !0, className: p.description, children: r.description }),
              t.jsxs(u, {
                horizontal: !0,
                align: 'center',
                gap: 4,
                children: [
                  t.jsx(W, { size: 11, style: { color: '#999' } }),
                  t.jsx(f, {
                    style: { fontSize: 11 },
                    type: 'secondary',
                    children: l('groupWizard.memberCount', {
                      count: r.members.filter((a) => a != null).length,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }),
  Be = s.memo(({ agent: r, isSelected: n, onToggle: m, styles: p, cx: z }) => {
    const { t: l } = D(['chat', 'common']),
      a = r.config?.id,
      S = r.meta?.title || l('defaultSession', { ns: 'common' }),
      C = r.meta?.description || '',
      x = r.meta?.avatar || B,
      T = r.meta?.backgroundColor;
    return a
      ? t.jsx('div', {
          className: z(p.listItem),
          onClick: () => m(a),
          children: t.jsxs(u, {
            horizontal: !0,
            align: 'center',
            gap: 12,
            width: '100%',
            children: [
              t.jsx(ae, { checked: n, onChange: () => m(a), onClick: le }),
              t.jsx(O, { avatar: x, background: T, size: 40 }),
              t.jsxs(u, {
                flex: 1,
                gap: 2,
                style: { minWidth: 0 },
                children: [
                  t.jsx(f, { className: p.title, children: S }),
                  C && t.jsx(f, { ellipsis: !0, className: p.description, children: C }),
                ],
              }),
            ],
          }),
        })
      : null;
  }),
  g = Te(({ css: r, cssVar: n }) => ({
    container: r`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadius};
  `,
    description: r`
    font-size: 12px;
    line-height: 1.2;
    color: ${n.colorTextSecondary};
  `,
    hostCard: r`
    margin-block-start: ${n.paddingSM};
    margin-inline: ${n.paddingSM};
    padding: ${n.padding};
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadiusLG};

    background: ${n.colorFillTertiary};
  `,
    leftColumn: r`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding: 0;
    border-inline-end: 1px solid ${n.colorBorderSecondary};
  `,
    listHeader: r`
    padding: 0;
    color: ${n.colorTextDescription};
  `,
    listItem: r`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${n.paddingSM} !important;
    border-radius: ${n.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${n.colorFillTertiary};
    }
  `,
    memberDescription: r`
    display: block;
    padding-inline-end: 48px;
  `,
    modelSelectDisabled: r`
    pointer-events: none;
  `,
    rightColumn: r`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: 0;
  `,
    title: r`
    font-size: 14px;
    font-weight: 500;
  `,
  })),
  De = s.memo(
    ({
      onCancel: r,
      onCreateFromTemplate: n,
      onCreateCustom: m,
      open: p,
      isCreatingFromTemplate: z,
    }) => {
      const { t: l } = D(['chat', 'common']),
        a = Ne(),
        S = We(),
        C = Le((e) => (e.sessions || []).filter((o) => o.type === ke.Agent)),
        x = s.useMemo(() => C.filter((e) => !e.config?.virtual), [C]),
        T = s.useMemo(
          () => R(g.description, g.memberDescription),
          [R, g.description, g.memberDescription],
        ),
        h = s.useMemo(() => {
          if (S.length > 0 && S[0].children.length > 0) {
            const e = S[0];
            return { model: e.children[0].id, provider: e.id };
          }
          return { model: void 0, provider: void 0 };
        }, [S]),
        [ce, U] = s.useState(''),
        [b, Y] = s.useState(''),
        [c, E] = s.useState(''),
        [v, w] = s.useState([]),
        [L, _] = s.useState({}),
        [M, F] = s.useState(!1),
        [H, q] = s.useState(h.model && h.provider ? h : {}),
        [de, Z] = s.useState(!1),
        [ue, J] = s.useState('templates'),
        j = s.useRef(null),
        me = z ?? !1,
        pe = s.useCallback((e) => {
          E((o) => {
            const i = o === e ? '' : e;
            return (i !== o && (_({}), F(!1)), i && w([]), i);
          });
        }, []),
        ge = s.useCallback((e) => {
          (E(''), _({}), w((o) => (o.includes(e) ? o.filter((i) => i !== e) : [...o, e])));
        }, []),
        Q = s.useCallback((e) => {
          w((o) => o.filter((i) => i !== e));
        }, []),
        G = () => {
          (E(''),
            w([]),
            U(''),
            Y(''),
            _({}),
            F(!1),
            q(h.model && h.provider ? h : {}),
            j.current && clearTimeout(j.current));
        },
        fe = s.useCallback((e) => {
          q(e);
        }, []),
        he = s.useCallback((e, o, i) => {
          _((d) => {
            const A = d[e] || [];
            if (i) {
              const k = A.filter(($) => $ !== o);
              return k.length === 0 ? _e(d, [e]) : { ...d, [e]: k };
            }
            return A.includes(o) ? d : { ...d, [e]: [...A, o] };
          });
        }, []),
        xe = s.useCallback((e) => {
          F(!e);
        }, []),
        Ce = s.useCallback((e) => {
          const o = e.target.value;
          (U(o),
            j.current && clearTimeout(j.current),
            (j.current = setTimeout(() => {
              Y(o);
            }, 300)));
        }, []),
        X = x.length;
      (s.useEffect(
        () => () => {
          j.current && clearTimeout(j.current);
        },
        [],
      ),
        s.useEffect(() => {
          p && J(X > 2 ? 'agents' : 'templates');
        }, [p, X]),
        s.useEffect(() => {
          w((e) => e.filter((o) => x.some((i) => i.config?.id === o)));
        }, [x]));
      const ve = s.useCallback((e) => {
          if (!e) return;
          const o = Array.isArray(e) ? e[0] : e;
          (o === 'templates' || o === 'agents') && J(o);
        }, []),
        V = s.useMemo(() => {
          const e = b.trim().toLowerCase();
          return e
            ? a.filter((o) =>
                o.title.toLowerCase().includes(e) || o.description.toLowerCase().includes(e)
                  ? !0
                  : o.members.some((i) => i != null && i.title.toLowerCase().includes(e)),
              )
            : a;
        }, [a, b]),
        ee = s.useMemo(() => {
          const e = b.trim().toLowerCase();
          return e
            ? x.filter((o) => {
                const i = o.meta?.title || '',
                  d = o.meta?.description || '';
                return i.toLowerCase().includes(e) || d.toLowerCase().includes(e);
              })
            : x;
        }, [x, b]),
        N = s.useMemo(() => {
          if (!c) return [];
          const e = a.find((i) => i.id === c);
          if (!e) return [];
          const o = new Set(L[c] || []);
          return e.members
            .filter((i) => i != null)
            .map((i) => ({
              avatar: i.avatar || B,
              backgroundColor: i.backgroundColor,
              description: i.systemRole,
              isRemoved: o.has(i.title),
              key: `${c}-${i.title}`,
              systemRole: i.systemRole,
              title: i.title,
            }));
        }, [c, L, a]),
        je = s.useMemo(() => N.filter((e) => !e.isRemoved).length, [N]),
        te = s.useMemo(
          () =>
            v
              .map((e) => {
                const o = C.find(($) => $.config?.id === e);
                if (!o) return null;
                const i = o.meta?.title || l('defaultSession', { ns: 'common' }),
                  d = o.meta?.avatar || B,
                  A = o.meta?.backgroundColor,
                  k = o.meta?.description || '';
                return {
                  actions: t.jsx(K, {
                    checked: !0,
                    size: 'small',
                    onChange: ($) => {
                      $ || Q(e);
                    },
                  }),
                  avatar: t.jsx(O, { avatar: d, background: A, size: 40 }),
                  description: k
                    ? t.jsx(I, {
                        title: k,
                        children: t.jsx(f, { className: T, ellipsis: { rows: 1 }, children: k }),
                      })
                    : null,
                  key: e,
                  showAction: !0,
                  title: i,
                };
              })
              .filter((e) => !!e),
          [v, C, l, Q, T],
        ),
        ye = s.useMemo(() => {
          const e = H.model ?? h.model,
            o = H.provider ?? h.provider;
          if (!(!e || !o)) return { model: e, provider: o };
        }, [H, h]),
        oe = s.useCallback(async () => {
          if (c)
            try {
              const e = a.find((d) => d.id === c),
                o = new Set(L[c] || []),
                i = (e?.members || [])
                  .filter((d) => d != null && !o.has(d.title))
                  .map((d) => d.title);
              (await n(c, i), G());
            } catch (e) {
              console.error('Failed to create group from template:', e);
            }
        }, [c, n, a, L]),
        se = s.useCallback(async () => {
          if (v.length !== 0)
            try {
              (Z(!0), await m(v), G(), r());
            } catch (e) {
              console.error('Failed to create group with selected members:', e);
            } finally {
              Z(!1);
            }
        }, [v, m, r]),
        Se = s.useCallback(async () => {
          if (c) {
            await oe();
            return;
          }
          await se();
        }, [c, oe, se]),
        ie = () => {
          (G(), r());
        },
        be = c ? je === 0 && M : v.length === 0,
        Me = c ? me : de;
      return t.jsx(we, {
        open: p,
        title: l('groupWizard.title'),
        width: 900,
        footer: t.jsxs(u, {
          horizontal: !0,
          gap: 8,
          justify: 'end',
          children: [
            t.jsx(re, { onClick: ie, children: l('cancel', { ns: 'common' }) }),
            t.jsx(re, {
              disabled: be,
              loading: Me,
              type: 'primary',
              onClick: Se,
              children: l('groupWizard.createGroup'),
            }),
          ],
        }),
        onCancel: ie,
        children: t.jsxs(u, {
          horizontal: !0,
          className: g.container,
          children: [
            t.jsxs(u, {
              className: g.leftColumn,
              flex: 1,
              gap: 12,
              children: [
                t.jsx(Ae, {
                  allowClear: !0,
                  placeholder: l('memberSelection.searchAgents'),
                  style: { margin: `${y.paddingSM} ${y.paddingSM} 0 ${y.paddingSM}` },
                  value: ce,
                  variant: 'filled',
                  onChange: Ce,
                }),
                t.jsx(u, {
                  flex: 1,
                  style: { overflowY: 'auto', padding: `0 ${y.paddingSM}` },
                  children: t.jsx(ze, {
                    accordion: !0,
                    collapsible: !0,
                    activeKey: ue,
                    expandIconPlacement: 'end',
                    gap: 12,
                    size: 'small',
                    variant: 'borderless',
                    items: [
                      {
                        children:
                          V.length === 0
                            ? t.jsx(P, {
                                descriptionProps: { fontSize: 14 },
                                icon: W,
                                style: { maxWidth: 400 },
                                description: l(
                                  b ? 'groupWizard.noMatchingTemplates' : 'groupWizard.noTemplates',
                                ),
                              })
                            : t.jsx(u, {
                                gap: 4,
                                children: V.map((e) =>
                                  t.jsx(
                                    Pe,
                                    {
                                      cx: R,
                                      isSelected: c === e.id,
                                      styles: g,
                                      template: e,
                                      onToggle: pe,
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                        key: 'templates',
                        label: l('groupWizard.useTemplate'),
                      },
                      {
                        children:
                          ee.length === 0
                            ? t.jsx(P, {
                                descriptionProps: { fontSize: 14 },
                                icon: W,
                                style: { maxWidth: 400 },
                                description: b
                                  ? l('noMatchingAgents', { ns: 'chat' })
                                  : l('noAvailableAgents', { ns: 'chat' }),
                              })
                            : t.jsx(u, {
                                gap: 4,
                                children: ee.map((e) =>
                                  t.jsx(
                                    Be,
                                    {
                                      agent: e,
                                      cx: R,
                                      isSelected: v.includes(e.config?.id || ''),
                                      styles: g,
                                      onToggle: ge,
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                        key: 'agents',
                        label: l('groupWizard.existingMembers'),
                      },
                    ],
                    styles: {
                      header: { color: y.colorTextDescription, fontSize: y.fontSize, padding: 0 },
                    },
                    onChange: ve,
                  }),
                }),
              ],
            }),
            t.jsx(u, {
              className: g.rightColumn,
              flex: 1,
              children: t.jsxs(u, {
                flex: 1,
                gap: 16,
                style: { overflowY: 'auto' },
                children: [
                  t.jsxs(u, {
                    horizontal: !0,
                    align: 'center',
                    className: g.hostCard,
                    gap: 12,
                    children: [
                      t.jsxs(u, {
                        flex: 1,
                        gap: 2,
                        children: [
                          t.jsx(f, {
                            style: { fontSize: 14, fontWeight: 500 },
                            type: M ? 'secondary' : void 0,
                            children: l('groupWizard.host.title'),
                          }),
                          t.jsx(f, {
                            style: { color: '#999', fontSize: 12 },
                            type: M ? 'secondary' : void 0,
                            children: l('groupWizard.host.description'),
                          }),
                        ],
                      }),
                      t.jsxs(u, {
                        horizontal: !0,
                        align: 'center',
                        gap: 12,
                        children: [
                          t.jsx('div', {
                            className: R(M && g.modelSelectDisabled),
                            style: { opacity: M ? 0.6 : 1 },
                            children: t.jsx(Re, {
                              requiredAbilities: ['functionCall'],
                              value: ye,
                              onChange: fe,
                            }),
                          }),
                          t.jsx(I, {
                            title: l('groupWizard.host.tooltip'),
                            children: t.jsx(K, {
                              checked: !M,
                              size: 'small',
                              onChange: (e) => xe(e),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsx(u, {
                    style: { padding: `0 ${y.paddingSM}` },
                    children: c
                      ? N.length > 0
                        ? t.jsx(ne, {
                            items: N.map((e) => ({
                              actions: t.jsx(K, {
                                checked: !e.isRemoved,
                                size: 'small',
                                onChange: (o) => he(c, e.title, o),
                              }),
                              avatar: t.jsx(O, {
                                avatar: e.avatar,
                                background: e.backgroundColor,
                                size: 40,
                              }),
                              description: e.systemRole
                                ? t.jsx(I, {
                                    title: e.systemRole,
                                    children: t.jsx(f, {
                                      className: T,
                                      ellipsis: { rows: 1 },
                                      type: e.isRemoved ? 'secondary' : void 0,
                                      children: e.systemRole,
                                    }),
                                  })
                                : null,
                              key: e.key,
                              showAction: !0,
                              title: t.jsx(f, {
                                type: e.isRemoved ? 'secondary' : void 0,
                                children: e.title,
                              }),
                            })),
                          })
                        : t.jsx(P, {
                            description: l('groupWizard.noTemplateMembers'),
                            descriptionProps: { fontSize: 14 },
                            icon: W,
                            style: { maxWidth: 400 },
                          })
                      : te.length > 0
                        ? t.jsx(ne, { items: te })
                        : t.jsx(P, {
                            description: l('memberSelection.noSelectedAgents'),
                            descriptionProps: { fontSize: 14 },
                            icon: W,
                            style: { maxWidth: 400 },
                          }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
  ),
  tt = Object.freeze(
    Object.defineProperty({ __proto__: null, ChatGroupWizard: De }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { De as C, tt as i, Ne as u };
