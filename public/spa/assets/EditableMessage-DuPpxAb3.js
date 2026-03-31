import { M as I } from './Markdown-Mtmmwid1.js';
import {
  f as G,
  e as K,
  cj as N,
  ck as S,
  B as _,
  F as H,
  j as F,
  $ as A,
  ai as z,
} from './index-C8UyLGsD.js';
import { C as R } from './CodeEditor-B7r6hUX1.js';
import { T as $ } from './TextArea-CHeYteyg.js';
import { r as w } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as J } from './index-BJ9KbyB2.js';
import { u as L } from './useTranslation-BcQ_3h0b.js';
import { M as P } from './Modal-Dd2pIxVd.js';
import { m as Q } from './messageModal-aCXTOdCO.js';
const B = G(
    ({ css: t, cssVar: d }) => t`
    position: relative;

    height: 100%;

    font-family: ${d.fontFamilyCode};
    font-size: 13px;
    line-height: 1.8;
  `,
  ),
  U = w.memo(
    ({
      text: t,
      variant: d = 'borderless',
      onCancel: h,
      defaultValue: k,
      onConfirm: E,
      renderButtons: M,
      placeholder: u,
      styles: a,
      style: T,
      editButtonSize: m = 'middle',
      classNames: n,
      shortcut: g,
      language: p = 'markdown',
      ...b
    }) => {
      const { mobile: j } = K(),
        [i, o] = w.useState(k || ''),
        y = N([S.Mod, S.Enter]),
        v = t?.confirm || 'Confirm',
        c = N([S.Esc]),
        r = t?.cancel || 'Cancel',
        C = () => E?.(i),
        f = () => h?.();
      J(y, C, { enableOnFormTags: !0, enabled: g, preventDefault: !0 });
      const x = e.jsx(_, { size: m, type: 'primary', onClick: C, children: v }),
        s = e.jsx(_, { size: m, variant: 'filled', onClick: f, children: t?.cancel || 'Cancel' });
      return e.jsxs(H, {
        gap: 16,
        style: { flex: 1, width: '100%', ...T },
        ...b,
        children: [
          j
            ? e.jsx($, {
                autoSize: !0,
                className: F(B, n?.editor),
                placeholder: u,
                style: a?.editor,
                value: i,
                variant: d,
                onBlur: (l) => o(l.target.value),
                onChange: (l) => o(l.target.value),
              })
            : e.jsx(R, {
                className: F(B, n?.editor),
                classNames: n,
                language: p,
                placeholder: u,
                style: a?.editor,
                styles: a,
                value: i,
                variant: d,
                onBlur: (l) => o(l.target.value),
                onValueChange: (l) => o(l),
              }),
          e.jsx(H, {
            direction: 'horizontal-reverse',
            gap: 8,
            children: M
              ? M(i).map((l, V) => e.jsx(_, { size: m, ...l }, V))
              : e.jsxs(e.Fragment, {
                  children: [
                    g ? e.jsx(A, { hotkey: y, title: v, children: x }) : x,
                    g ? e.jsx(A, { hotkey: c, title: r, children: s }) : s,
                  ],
                }),
          }),
        ],
      });
    },
  );
var W = U;
const D = w.memo(
  ({
    panelRef: t,
    editing: d,
    open: h,
    height: k = '75vh',
    onOpenChange: E,
    onEditingChange: M,
    placeholder: u,
    value: a,
    language: T = 'markdown',
    onChange: m,
    text: n,
    footer: g,
    extra: p,
  }) => {
    const { mobile: b } = K(),
      { t: j } = L(Q),
      [i, o] = z(!1, { onChange: M, value: d }),
      [y, v] = z(!1, { onChange: E, value: h }),
      [c, r] = w.useState(a),
      C = n?.confirm ?? j('messageModal.confirm'),
      f = n?.cancel ?? j('messageModal.cancel'),
      x = n?.edit ?? j('messageModal.edit');
    return e.jsx(P, {
      allowFullscreen: !0,
      destroyOnHidden: !0,
      cancelText: f,
      footer: i
        ? e.jsxs(H, {
            direction: 'horizontal-reverse',
            gap: 8,
            children: [
              e.jsx(_, {
                type: 'primary',
                onClick: () => {
                  (o(!1), m?.(c), r(a));
                },
                children: C,
              }),
              e.jsx(_, {
                onClick: () => {
                  (o(!1), r(a));
                },
                children: f,
              }),
            ],
          })
        : g,
      height: k,
      okText: x,
      open: y,
      panelRef: t,
      title: n?.title,
      onOk: () => o(!0),
      onCancel: () => {
        (v(!1), o(!1), r(a));
      },
      children: i
        ? b
          ? e.jsx($, {
              autoSize: !0,
              className: B,
              defaultValue: c,
              placeholder: u,
              value: c,
              variant: 'borderless',
              onBlur: (s) => r(s.target.value),
              onChange: (s) => r(s.target.value),
            })
          : e.jsx(R, {
              className: B,
              defaultValue: c,
              language: T,
              placeholder: u,
              value: c,
              variant: 'borderless',
              onBlur: (s) => r(s.target.value),
              onValueChange: (s) => r(s),
            })
        : e.jsxs(e.Fragment, {
            children: [p, e.jsx(I, { variant: 'chat', children: String(a || u) })],
          }),
    });
  },
);
D.displayName = 'MessageModal';
var X = D;
const q = w.memo(
  ({
    value: t,
    onChange: d,
    classNames: h = {},
    onEditingChange: k,
    editing: E,
    openModal: M,
    onOpenChange: u,
    placeholder: a,
    showEditWhenEmpty: T = !1,
    styles: m,
    className: n,
    style: g,
    height: p,
    variant: b,
    editButtonSize: j,
    text: i,
    fullFeaturedCodeBlock: o,
    model: y,
    fontSize: v,
    language: c = 'markdown',
    markdownProps: r,
  }) => {
    const [C, f] = z(!1, { onChange: k, value: E }),
      [x, s] = z(!1, { onChange: u, value: M }),
      l = p === 'auto',
      V = e.jsx(W, {
        shortcut: !0,
        className: F(n, h?.input),
        classNames: h,
        defaultValue: t,
        editButtonSize: j,
        height: p,
        language: c,
        placeholder: a,
        styles: m,
        text: i,
        variant: b,
        style: { ...g, ...m?.input },
        onCancel: () => f(!1),
        onConfirm: (O) => {
          (d?.(O), f(!1));
        },
      });
    return !t && T
      ? V
      : e.jsxs(e.Fragment, {
          children: [
            !x && C
              ? V
              : e.jsx(I, {
                  className: F(n, h?.markdown),
                  fontSize: v,
                  fullFeaturedCodeBlock: o,
                  variant: 'chat',
                  style: { height: l ? 'unset' : p, ...g, ...m?.markdown },
                  ...r,
                  children: t || a || '',
                }),
            x &&
              e.jsx(X, {
                editing: C,
                extra: y?.extra,
                footer: y?.footer,
                height: p,
                language: c,
                open: x,
                placeholder: a,
                text: i,
                value: t,
                onChange: d,
                onEditingChange: f,
                onOpenChange: (O) => {
                  (s(O), f(!1));
                },
              }),
          ],
        });
  },
);
q.displayName = 'EditableMessage';
var ie = q;
export { ie as E };
