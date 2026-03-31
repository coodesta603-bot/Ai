import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  bh as le,
  f as J,
  r as b,
  F as C,
  j as L,
  I as U,
  e as X,
  a1 as K,
  ax as de,
  bx as ce,
  T as ue,
} from './index-C8UyLGsD.js';
import { u as me } from './useTranslation-BcQ_3h0b.js';
import { c as pe } from './chat-DOIKXITp.js';
import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { A as fe } from './index-BAOF5XWg.js';
import {
  aI as ge,
  du as xe,
  dv as he,
  cc as be,
  dw as ve,
  dx as ye,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { A as Ce } from './Alert-lszDImnb.js';
import { E as je } from './EditableMessage-DuPpxAb3.js';
import { A as we } from './ActionIconGroup-DGEsztGU.js';
import { D as ke } from './index-BfwjtmVb.js';
var Ee = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z',
        },
      },
    ],
  },
  name: 'exclamation-circle',
  theme: 'outlined',
};
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (e[l] = o[l]);
          }
          return e;
        }),
    G.apply(this, arguments)
  );
}
const Me = (e, t) => i.createElement(le, G({}, e, { ref: t, icon: Ee })),
  lt = i.forwardRef(Me),
  a = J(({ css: e, cssVar: t }) => {
    const o = e`
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 66%, transparent);
    border-radius: ${t.borderRadiusLG};

    background-color: ${t.colorBgContainer};
  `,
      l = e`
    padding-block-start: 0;
  `,
      m = e`
    padding-block-start: 6px;
  `,
      h = e`
    margin-block-end: -16px;
    transition: background-color 100ms ${t.motionEaseOut};
  `,
      u = e`
    width: 100%;
  `;
    return {
      actionsBubbleLeft: e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-end;
    `,
      actionsBubbleRight: e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,
      actionsDocsLeft: e`
      flex: none;
      align-self: flex-start;
      justify-content: flex-end;
    `,
      actionsDocsRight: e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,
      actionsEditing: e`
      pointer-events: none !important;
      opacity: 0 !important;
    `,
      avatarContainer: e`
      position: relative;
      flex: none;
      width: var(--chat-item-avatar-size, 40px);
      height: var(--chat-item-avatar-size, 40px);
    `,
      avatarGroupContainer: e`
      width: var(--chat-item-avatar-size, 40px);
    `,
      container: e`
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has([data-popup-open]),
      div[role='menubar'][data-popup-open] {
        pointer-events: unset !important;
        opacity: 1 !important;

        [data-popup-open] {
          background: ${t.colorFillTertiary};
        }
      }

      ${b.sm} {
        padding-block-start: 12px;
        padding-inline: 8px;
      }
    `,
      containerDocs: e`
      ${h}
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has(.lobe-dropdown-menu-trigger[data-popup-open]) {
        pointer-events: unset;
        opacity: 1;
      }

      ${b.sm} {
        padding-block-start: 16px;
        padding-inline: 8px;
      }
    `,
      editingContainer: e`
      ${u}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,
      editingContainerDocs: e`
      ${u}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadius};

      background: ${t.colorFillQuaternary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,
      editingInput: e`
      width: 100%;
    `,
      errorContainer: e`
      position: relative;
      overflow: hidden;
      width: 100%;
    `,
      loadingLeft: e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,
      loadingRight: e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-end: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,
      messageBubble: e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,
      messageContainer: e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        overflow-x: auto;
      }
    `,
      messageContainerEditing: e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        overflow-x: auto;
      }
    `,
      messageContainerEditingWithTime: e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${b.sm} {
        overflow-x: auto;
      }
    `,
      messageContainerWithTime: e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${b.sm} {
        overflow-x: auto;
      }
    `,
      messageContent: e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        flex-direction: column !important;
      }
    `,
      messageContentEditing: e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        flex-direction: column !important;
      }
    `,
      messageDocsWithTitle: e`
      ${l}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,
      messageDocsWithoutTitle: e`
      ${m}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,
      messageExtra: e`
      /* message-extra class */
    `,
      nameLeft: e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: start;
    `,
      nameRight: e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: end;
    `,
    };
  }),
  Re = ({ actions: e, placement: t = 'left', variant: o = 'bubble', editing: l, ref: m }) =>
    r.jsx(C, {
      align: 'flex-start',
      className: L(
        i.useMemo(
          () =>
            o === 'bubble'
              ? t === 'left'
                ? a.actionsBubbleLeft
                : a.actionsBubbleRight
              : t === 'left'
                ? a.actionsDocsLeft
                : a.actionsDocsRight,
          [t, o],
        ),
        l && a.actionsEditing,
      ),
      ref: m,
      role: 'menubar',
      children: e,
    });
var Ae = Re;
const ze = ({ loading: e, placement: t = 'left' }) =>
  e
    ? r.jsx(C, {
        align: 'center',
        className: t === 'left' ? a.loadingLeft : a.loadingRight,
        justify: 'center',
        children: r.jsx(U, { spin: !0, icon: ge, size: { size: 12, strokeWidth: 3 } }),
      })
    : null;
var Be = ze;
const Se = ({
  loading: e,
  avatar: t,
  placement: o,
  unoptimized: l,
  addon: m,
  onClick: h,
  size: u = 40,
  style: f,
  alt: g,
}) => {
  const s = i.useMemo(() => ({ '--chat-item-avatar-size': `${u}px` }), [u]),
    p = r.jsxs('div', {
      className: a.avatarContainer,
      style: { ...s, ...f },
      children: [
        r.jsx(fe, {
          alt: g || t.title,
          animation: e,
          avatar: t.avatar,
          background: t.backgroundColor,
          size: u,
          title: t.title,
          unoptimized: l,
          onClick: h,
        }),
        r.jsx(Be, { loading: e, placement: o }),
      ],
    });
  return m
    ? r.jsxs(C, { align: 'center', className: a.avatarGroupContainer, gap: 8, children: [p, m] })
    : p;
};
var Te = Se;
const De = ({ borderSpacing: e }) =>
  e ? r.jsx('div', { style: { flex: 'none', width: e } }) : null;
var Le = De;
const _e = ({ message: e, error: t }) =>
  r.jsx(C, {
    className: a.errorContainer,
    children: r.jsx(Ce, { showIcon: !0, closable: !1, extra: e, type: 'error', ...t }),
  });
var Q = _e;
const Ne = i.memo(
  ({
    editing: e,
    onChange: t,
    onEditingChange: o,
    text: l,
    message: m,
    placement: h,
    messageExtra: u,
    renderMessage: f,
    variant: g,
    primary: s,
    onDoubleClick: p,
    fontSize: j,
    markdownProps: v,
  }) => {
    const { mobile: x } = X(),
      k = i.useMemo(() => (g === 'bubble' ? a.messageBubble : a.messageDocsWithoutTitle), [g]),
      n = i.useMemo(() => (g === 'docs' ? a.editingContainerDocs : a.editingContainer), [g]),
      E = r.jsx(je, {
        fullFeaturedCodeBlock: !0,
        classNames: { input: a.editingInput },
        editButtonSize: 'small',
        editing: e,
        fontSize: j,
        markdownProps: v,
        openModal: x ? e : void 0,
        text: l,
        value: m ? String(m) : '',
        onChange: t,
        onEditingChange: o,
      }),
      w = f ? f(E) : E;
    return r.jsxs(C, {
      className: L(k, e && n),
      onDoubleClick: p,
      children: [w, u && !e ? r.jsx('div', { className: a.messageExtra, children: u }) : null],
    });
  },
);
var Ie = Ne;
const Fe = (e) => {
    const t = K(),
      o = K(e);
    return o.isSame(t, 'day')
      ? o.format('HH:mm:ss')
      : o.isSame(t, 'year')
        ? o.format('MM-DD HH:mm:ss')
        : o.format('YYYY-MM-DD HH:mm:ss');
  },
  We = ({ showTitle: e, placement: t = 'left', time: o, avatar: l, titleAddon: m }) =>
    r.jsxs(C, {
      align: 'center',
      className: t === 'left' ? a.nameLeft : a.nameRight,
      direction: t === 'left' ? 'horizontal' : 'horizontal-reverse',
      gap: 4,
      children: [
        e ? l.title || 'untitled' : void 0,
        e ? m : void 0,
        o && r.jsx('time', { children: Fe(o) }),
      ],
    });
var Oe = We;
const Z = 32,
  He = i.memo(
    ({
      avatarAddon: e,
      onAvatarClick: t,
      avatarProps: o,
      actions: l,
      className: m,
      primary: h,
      loading: u,
      message: f,
      placeholderMessage: g,
      placement: s = 'left',
      variant: p = 'bubble',
      avatar: j,
      error: v,
      showTitle: x,
      time: k,
      editing: n,
      onChange: E,
      onEditingChange: w,
      messageExtra: M,
      renderMessage: z,
      text: B,
      errorMessage: R,
      onDoubleClick: _,
      fontSize: N,
      aboveMessage: I,
      belowMessage: d,
      markdownProps: c,
      actionsWrapWidth: y = 54,
      showAvatar: A = !0,
      titleAddon: D,
      ...V
    }) => {
      const { mobile: F } = X(),
        { t: Y } = me(pe),
        W = F ? Z : o?.size || 40,
        ee = i.useMemo(() => ({ '--chat-item-avatar-size': `${W}px` }), [W]),
        O = !!k,
        te = g ?? Y('chat.placeholder'),
        ne = o?.alt || j.title || Y('chat.avatar'),
        S = i.useRef(null),
        T = i.useRef(null),
        [P, q] = i.useState(p === 'bubble' ? 'horizontal' : 'vertical');
      i.useEffect(() => {
        if (p === 'docs') {
          q('vertical');
          return;
        }
        if (!S.current || !T.current) return;
        const H = new ResizeObserver(() => {
          if (!S.current || !T.current) return;
          const ae = T.current.clientWidth,
            se = S.current.scrollWidth;
          q(se + y > ae ? 'vertical' : 'horizontal');
        });
        return (H.observe(S.current), H.observe(T.current), () => H.disconnect());
      }, [p, y]);
      const re = L(p === 'docs' ? a.containerDocs : a.container, m),
        oe = i.useMemo(
          () =>
            n
              ? O
                ? a.messageContainerEditingWithTime
                : a.messageContainerEditing
              : O
                ? a.messageContainerWithTime
                : a.messageContainer,
          [n, O],
        ),
        ie = i.useMemo(() => (n ? a.messageContentEditing : a.messageContent), [n]);
      return r.jsxs(C, {
        className: re,
        direction: s === 'left' ? 'horizontal' : 'horizontal-reverse',
        gap: F ? 6 : 12,
        style: ee,
        ...V,
        children: [
          A &&
            r.jsx(Te, {
              ...o,
              addon: e,
              alt: ne,
              avatar: j,
              loading: u,
              placement: s,
              size: W,
              style: { marginTop: x ? -12 : 6, ...o?.style },
              onClick: t,
            }),
          r.jsxs(C, {
            align: s === 'left' ? 'flex-start' : 'flex-end',
            className: oe,
            ref: T,
            children: [
              r.jsx(Oe, { avatar: j, placement: s, showTitle: x, time: k, titleAddon: D }),
              I,
              r.jsxs(C, {
                'align': s === 'left' ? 'flex-start' : 'flex-end',
                'className': ie,
                'data-layout': P,
                'gap': 8,
                'direction':
                  P === 'horizontal'
                    ? s === 'left'
                      ? 'horizontal'
                      : 'horizontal-reverse'
                    : 'vertical',
                'children': [
                  r.jsx(C, {
                    ref: S,
                    width: '100%',
                    children:
                      v && (f === te || !f)
                        ? r.jsx(Q, { error: v, message: R, placement: s })
                        : r.jsx(Ie, {
                            editing: n,
                            fontSize: N,
                            markdownProps: c,
                            message: f,
                            placement: s,
                            primary: h,
                            renderMessage: z,
                            text: B,
                            variant: p,
                            messageExtra: r.jsxs(r.Fragment, {
                              children: [v && r.jsx(Q, { error: v, message: R, placement: s }), M],
                            }),
                            onChange: E,
                            onDoubleClick: _,
                            onEditingChange: w,
                          }),
                  }),
                  l && r.jsx(Ae, { actions: l, editing: n, placement: s, variant: p }),
                ],
              }),
              d,
            ],
          }),
          F && p === 'bubble' && A && r.jsx(Le, { borderSpacing: Z }),
        ],
      });
    },
  );
var Ge = He;
const Ye = (e) =>
    i.useMemo(
      () => ({
        copy: { icon: ve, key: 'copy', label: e?.copy || 'Copy' },
        del: { icon: be, key: 'del', label: e?.delete || 'Delete' },
        divider: { type: 'divider' },
        edit: { icon: he, key: 'edit', label: e?.edit || 'Edit' },
        regenerate: { icon: xe, key: 'regenerate', label: e?.regenerate || 'Regenerate' },
      }),
      [e],
    ),
  Pe = ({ text: e, ref: t, ...o }) => {
    const { regenerate: l, edit: m, copy: h, divider: u, del: f } = Ye(e);
    return r.jsx(we, { items: [l, m], menu: [m, h, l, u, f], ref: t, ...o });
  };
var qe = Pe;
const $ = i.memo((e) => {
  const {
      renderMessagesExtra: t,
      showTitle: o,
      onActionsClick: l,
      onAvatarsClick: m,
      onMessageChange: h,
      variant: u,
      text: f,
      renderMessages: g,
      renderErrorMessages: s,
      renderActions: p,
      loading: j,
      groupNav: v,
      renderItems: x,
      showAvatar: k,
      ...n
    } = e,
    [E, w] = i.useState(!1),
    { message: M } = de.useApp(),
    z = i.useMemo(() => {
      if (!x || !n?.role) return;
      let d;
      if ((x?.[n.role] && (d = x[n.role]), !d && x?.default && (d = x.default), !!d)) return d;
    }, [x?.[n.role]]),
    B = i.useCallback(
      ({ editableContent: d, data: c }) => {
        if (!g || !n?.role) return;
        let y;
        if ((g?.[n.role] && (y = g[n.role]), !y && g?.default && (y = g.default), !!y))
          return r.jsx(y, { ...c, editableContent: d });
      },
      [g?.[n.role]],
    ),
    R = i.useCallback(
      ({ data: d }) => {
        if (!t || !n?.role) return;
        let c;
        if ((t?.[n.role] && (c = t[n.role]), t?.default && (c = t.default), !!c))
          return r.jsx(c, { ...d });
      },
      [t?.[n.role]],
    ),
    _ = i.useCallback(
      ({ data: d }) => {
        if (!s || !n?.error?.type) return;
        let c;
        if (
          (s?.[n.error.type] && (c = s[n.error.type].Render),
          !c && s?.default && (c = s.default.Render),
          !!c)
        )
          return r.jsx(c, { ...d });
      },
      [s],
    ),
    N = i.useCallback(
      ({ data: d }) => {
        if (!p || !n?.role) return;
        let c;
        (p?.[n.role] && (c = p[n.role]), p?.default && (c = p.default), c || (c = qe));
        const y = async (A, D) => {
          switch (A.key) {
            case 'copy':
              (await ce(D.content), M.success(f?.copySuccess || 'Copy Success'));
              break;
            case 'edit':
              w(!0);
          }
          l?.(A, D);
        };
        return r.jsx(c, { ...d, text: f, onActionClick: (A) => y?.(A, d) });
      },
      [p?.[n.role], f, l],
    ),
    I = i.useMemo(() => {
      if (!n.error) return;
      const d = n.error?.message;
      let c = {};
      return (
        n.error.type && s?.[n.error.type] && (c = s[n.error.type]?.config),
        { message: d, ...c }
      );
    }, [s, n.error]);
  return z
    ? r.jsx(z, { ...e }, n.id)
    : r.jsx(Ge, {
        actions: r.jsx(N, { data: n }),
        avatar: n.meta,
        avatarAddon: v,
        editing: E,
        error: I,
        errorMessage: r.jsx(_, { data: n }),
        loading: j,
        message: n.content,
        messageExtra: r.jsx(R, { data: n }),
        placement: u === 'bubble' && n.role === 'user' ? 'right' : 'left',
        primary: n.role === 'user',
        showAvatar: k,
        showTitle: o,
        text: f,
        time: n.updateAt || n.createAt,
        variant: u,
        renderMessage: (d) => r.jsx(B, { data: n, editableContent: d }),
        onAvatarClick: m?.(n.role),
        onChange: (d) => h?.(n.id, d),
        onEditingChange: w,
        onDoubleClick: (d) => {
          n.id === 'default' ||
            n.error ||
            (n.role && ['assistant', 'user'].includes(n.role) && d.altKey && w(!0));
        },
      });
});
$.displayName = 'ChatListItem';
var Ke = $;
const Qe = ({ enable: e, text: t }) =>
  e
    ? r.jsx('div', {
        style: { padding: '0 20px' },
        children: r.jsx(ke, {
          children: r.jsx(ue, { icon: r.jsx(U, { icon: ye }), children: t || 'History Message' }),
        }),
      })
    : null;
var Ze = Qe;
const Je = J(({ css: e }) => ({
    container: e`
      position: relative;
    `,
  })),
  Ue = i.memo(
    ({
      onActionsClick: e,
      onAvatarsClick: t,
      renderMessagesExtra: o,
      className: l,
      data: m,
      variant: h = 'bubble',
      text: u,
      showTitle: f,
      onMessageChange: g,
      renderMessages: s,
      renderErrorMessages: p,
      loadingId: j,
      renderItems: v,
      enableHistoryCount: x,
      renderActions: k,
      historyCount: n = 0,
      showAvatar: E,
      ...w
    }) =>
      r.jsx('div', {
        className: L(Je.container, l),
        ...w,
        children: m.map((M, z) => {
          const B = {
              loading: j === M.id,
              onActionsClick: e,
              onAvatarsClick: t,
              onMessageChange: g,
              renderActions: k,
              renderErrorMessages: p,
              renderItems: v,
              renderMessages: s,
              renderMessagesExtra: o,
              showAvatar: E,
              showTitle: f,
              text: u,
              variant: h,
            },
            R = m.length;
          return r.jsxs(
            i.Fragment,
            {
              children: [
                r.jsx(Ze, { enable: x && R > n && n === R - z + 1, text: u?.history }),
                r.jsx(Ke, { ...B, ...M }),
              ],
            },
            M.id,
          );
        }),
      }),
  );
var dt = Ue;
export { dt as C, lt as R };
