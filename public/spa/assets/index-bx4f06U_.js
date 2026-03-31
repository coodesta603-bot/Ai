import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { i as Y, c as y, a as Z } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  b8 as J,
  b9 as K,
  co as k,
  ba as Q,
  cp as ee,
  bm as te,
  be as W,
  bb as oe,
  cq as re,
} from './index-C8UyLGsD.js';
import { g as ne, a as se, b as ae, P as le, u as ie, T as ce } from './index-BSuyBMRZ.js';
const w = (e) => (e ? (typeof e == 'function' ? e() : e) : null),
  E = '50%',
  de = (e) => {
    const {
        componentCls: t,
        popoverColor: o,
        titleMinWidth: n,
        fontWeightStrong: s,
        innerPadding: r,
        boxShadowSecondary: l,
        colorTextHeading: c,
        borderRadiusLG: x,
        zIndexPopup: p,
        titleMarginBottom: g,
        colorBgElevated: C,
        popoverBg: d,
        titleBorderBottom: u,
        innerContentPadding: m,
        titlePadding: i,
        antCls: v,
      } = e,
      [N, f] = k(v, 'tooltip');
    return [
      {
        [t]: {
          ...Q(e),
          'position': 'absolute',
          'top': 0,
          'left': { _skip_check_: !0, value: 0 },
          'zIndex': p,
          'fontWeight': 'normal',
          'whiteSpace': 'normal',
          'textAlign': 'start',
          'cursor': 'auto',
          'userSelect': 'text',
          [N('valid-offset-x')]: f('arrow-offset-x', 'var(--arrow-x)'),
          'transformOrigin': [f('valid-offset-x', E), `var(--arrow-y, ${E})`].join(' '),
          [N('arrow-background-color')]: C,
          'width': 'max-content',
          'maxWidth': '100vw',
          '&-rtl': { direction: 'rtl' },
          '&-hidden': { display: 'none' },
          [`${t}-content`]: { position: 'relative' },
          [`${t}-container`]: {
            backgroundColor: d,
            backgroundClip: 'padding-box',
            borderRadius: x,
            boxShadow: l,
            padding: r,
          },
          [`${t}-title`]: {
            minWidth: n,
            marginBottom: g,
            color: c,
            fontWeight: s,
            borderBottom: u,
            padding: i,
          },
          [`${t}-content`]: { color: o, padding: m },
        },
      },
      ne(e, f('arrow-background-color')),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
          display: 'inline-block',
        },
      },
    ];
  },
  me = (e) => {
    const { componentCls: t, antCls: o } = e,
      [n] = k(o, 'tooltip');
    return {
      [t]: ee.map((s) => {
        const r = e[`${s}6`];
        return {
          [`&${t}-${s}`]: {
            [n('arrow-background-color')]: r,
            [`${t}-inner`]: { backgroundColor: r },
            [`${t}-arrow`]: { background: 'transparent' },
          },
        };
      }),
    };
  },
  pe = (e) => {
    const {
        lineWidth: t,
        controlHeight: o,
        fontHeight: n,
        padding: s,
        wireframe: r,
        zIndexPopupBase: l,
        borderRadiusLG: c,
        marginXS: x,
        lineType: p,
        colorSplit: g,
        paddingSM: C,
      } = e,
      d = o - n,
      u = d / 2,
      m = d / 2 - t,
      i = s;
    return {
      titleMinWidth: 177,
      zIndexPopup: l + 30,
      ...ae(e),
      ...se({ contentRadius: c, limitVerticalRadius: !0 }),
      innerPadding: r ? 0 : 12,
      titleMarginBottom: r ? 0 : x,
      titlePadding: r ? `${u}px ${i}px ${m}px` : 0,
      titleBorderBottom: r ? `${t}px ${p} ${g}` : 'none',
      innerContentPadding: r ? `${C}px ${i}px` : 0,
    };
  },
  I = J(
    'Popover',
    (e) => {
      const { colorBgElevated: t, colorText: o } = e,
        n = K(e, { popoverBg: t, popoverColor: o });
      return [de(n), me(n), Y(n, 'zoom-big')];
    },
    pe,
    {
      resetStyle: !1,
      deprecatedTokens: [
        ['width', 'titleMinWidth'],
        ['minWidth', 'titleMinWidth'],
      ],
    },
  ),
  A = (e) => {
    const { title: t, content: o, prefixCls: n, classNames: s, styles: r } = e;
    return !t && !o
      ? null
      : a.createElement(
          a.Fragment,
          null,
          t && a.createElement('div', { className: y(`${n}-title`, s?.title), style: r?.title }, t),
          o &&
            a.createElement(
              'div',
              { className: y(`${n}-content`, s?.content), style: r?.content },
              o,
            ),
        );
  },
  ge = (e) => {
    const {
        hashId: t,
        prefixCls: o,
        className: n,
        style: s,
        placement: r = 'top',
        title: l,
        content: c,
        children: x,
        classNames: p,
        styles: g,
      } = e,
      C = w(l),
      d = w(c),
      u = { ...e, placement: r },
      [m, i] = W([p], [g], { props: u }),
      v = y(t, o, `${o}-pure`, `${o}-placement-${r}`, n);
    return a.createElement(
      'div',
      { className: v, style: s },
      a.createElement('div', { className: `${o}-arrow` }),
      a.createElement(
        le,
        { ...e, className: t, prefixCls: o, classNames: m, styles: i },
        x || a.createElement(A, { prefixCls: o, title: C, content: d, classNames: m, styles: i }),
      ),
    );
  },
  ue = (e) => {
    const { prefixCls: t, className: o, ...n } = e,
      { getPrefixCls: s } = a.useContext(te),
      r = s('popover', t),
      [l, c] = I(r);
    return a.createElement(ge, { ...n, prefixCls: r, hashId: l, className: y(o, c) });
  },
  xe = a.forwardRef((e, t) => {
    const {
        prefixCls: o,
        title: n,
        content: s,
        overlayClassName: r,
        placement: l = 'top',
        trigger: c,
        children: x,
        mouseEnterDelay: p = 0.1,
        mouseLeaveDelay: g = 0.1,
        onOpenChange: C,
        overlayStyle: d = {},
        styles: u,
        classNames: m,
        motion: i,
        arrow: v,
        ...N
      } = e,
      {
        getPrefixCls: f,
        className: R,
        style: z,
        classNames: M,
        styles: O,
        arrow: _,
        trigger: H,
      } = oe('popover'),
      b = f('popover', o),
      [L, D] = I(b),
      F = f(),
      G = ie(v, _),
      $ = c || H || 'hover',
      j = {
        ...e,
        placement: l,
        trigger: $,
        mouseEnterDelay: p,
        mouseLeaveDelay: g,
        overlayStyle: d,
        styles: u,
        classNames: m,
      },
      [P, h] = W([M, m], [O, u], { props: j }),
      q = y(r, L, D, R, P.root),
      [V, U] = Z(e.defaultOpen ?? !1, e.open),
      X = (T) => {
        (U(T), C?.(T));
      },
      S = w(n),
      B = w(s);
    return a.createElement(
      ce,
      {
        'unique': !1,
        'arrow': G,
        'placement': l,
        'trigger': $,
        'mouseEnterDelay': p,
        'mouseLeaveDelay': g,
        ...N,
        'prefixCls': b,
        'classNames': { root: q, container: P.container, arrow: P.arrow },
        'styles': { root: { ...h.root, ...z, ...d }, container: h.container, arrow: h.arrow },
        'ref': t,
        'open': V,
        'onOpenChange': X,
        'overlay':
          S || B
            ? a.createElement(A, { prefixCls: b, title: S, content: B, classNames: P, styles: h })
            : null,
        'motion': {
          motionName: re(F, 'zoom-big', typeof i?.motionName == 'string' ? i?.motionName : void 0),
        },
        'data-popover-inject': !0,
      },
      x,
    );
  }),
  Ce = xe;
Ce._InternalPanelDoNotUseOrYouWillBeFired = ue;
export { ue as P, ge as R, Ce as a, w as g };
