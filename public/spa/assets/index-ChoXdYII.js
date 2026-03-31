import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  b8 as q,
  bR as I,
  bm as z,
  bS as D,
  aG as G,
  bT as Y,
  bU as _,
  bb as J,
  be as K,
} from './index-C8UyLGsD.js';
import { c as S, a as Q, o as Z } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as k, P as ee, a as te } from './index-bx4f06U_.js';
import { u as oe } from './index-BSuyBMRZ.js';
import { l as ne } from '../i18n/i18n-en-US-DgOT8d-N.js';
const se = (o) => {
    const {
      componentCls: e,
      iconCls: l,
      antCls: s,
      zIndexPopup: c,
      colorText: r,
      colorWarning: i,
      marginXXS: n,
      marginXS: m,
      fontSize: p,
      fontWeightStrong: g,
      colorTextHeading: f,
    } = o;
    return {
      [e]: {
        zIndex: c,
        [`&${s}-popover`]: { fontSize: p },
        [`${e}-message`]: {
          marginBottom: m,
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'start',
          [`> ${e}-message-icon ${l}`]: {
            color: i,
            fontSize: p,
            lineHeight: 1,
            marginInlineEnd: m,
          },
          [`${e}-title`]: { 'fontWeight': g, 'color': f, '&:only-child': { fontWeight: 'normal' } },
          [`${e}-description`]: { marginTop: n, color: r },
        },
        [`${e}-buttons`]: {
          textAlign: 'end',
          whiteSpace: 'nowrap',
          button: { marginInlineStart: m },
        },
      },
    };
  },
  re = (o) => {
    const { zIndexPopupBase: e } = o;
    return { zIndexPopup: e + 60 };
  },
  O = q('Popconfirm', se, re, { resetStyle: !1 }),
  B = (o) => {
    const {
        prefixCls: e,
        okButtonProps: l,
        cancelButtonProps: s,
        title: c,
        description: r,
        cancelText: i,
        okText: n,
        okType: m = 'primary',
        icon: p = t.createElement(I, null),
        showCancel: g = !0,
        close: f,
        onConfirm: w,
        onCancel: u,
        onPopupClick: b,
        classNames: C,
        styles: x,
      } = o,
      { getPrefixCls: v } = t.useContext(z),
      [d] = D('Popconfirm', ne.Popconfirm),
      P = k(c),
      y = k(r);
    return t.createElement(
      'div',
      { className: `${e}-inner-content`, onClick: b },
      t.createElement(
        'div',
        { className: `${e}-message` },
        p && t.createElement('span', { className: `${e}-message-icon` }, p),
        t.createElement(
          'div',
          { className: `${e}-message-text` },
          P && t.createElement('div', { className: S(`${e}-title`, C?.title), style: x?.title }, P),
          y &&
            t.createElement(
              'div',
              { className: S(`${e}-description`, C?.content), style: x?.content },
              y,
            ),
        ),
      ),
      t.createElement(
        'div',
        { className: `${e}-buttons` },
        g && t.createElement(G, { onClick: u, size: 'small', ...s }, i || d?.cancelText),
        t.createElement(
          Y,
          {
            buttonProps: { size: 'small', ..._(m), ...l },
            actionFn: w,
            close: f,
            prefixCls: v('btn'),
            quitOnNullishReturnValue: !0,
            emitEvent: !0,
          },
          n || d?.okText,
        ),
      ),
    );
  },
  ae = (o) => {
    const { prefixCls: e, placement: l, className: s, style: c, ...r } = o,
      { getPrefixCls: i } = t.useContext(z),
      n = i('popconfirm', e);
    return (
      O(n),
      t.createElement(ee, {
        placement: l,
        className: S(n, s),
        style: c,
        content: t.createElement(B, { prefixCls: n, ...r }),
      })
    );
  },
  le = t.forwardRef((o, e) => {
    const {
        prefixCls: l,
        placement: s = 'top',
        trigger: c,
        okType: r = 'primary',
        icon: i = t.createElement(I, null),
        children: n,
        overlayClassName: m,
        onOpenChange: p,
        overlayStyle: g,
        styles: f,
        arrow: w,
        classNames: u,
        ...b
      } = o,
      {
        getPrefixCls: C,
        className: x,
        style: v,
        classNames: d,
        styles: P,
        arrow: y,
        trigger: A,
      } = J('popconfirm'),
      [W, R] = Q(o.defaultOpen ?? !1, o.open),
      H = oe(w, y),
      h = c || A || 'click',
      $ = (a) => {
        (R(a), p?.(a));
      },
      L = () => {
        $(!1);
      },
      V = (a) => o.onConfirm?.call(void 0, a),
      X = (a) => {
        ($(!1), o.onCancel?.call(void 0, a));
      },
      F = (a) => {
        const { disabled: j = !1 } = o;
        j || $(a);
      },
      T = C('popconfirm', l),
      M = { ...o, placement: s, trigger: h, okType: r, overlayStyle: g, styles: f, classNames: u },
      [N, E] = K([d, u], [P, f], { props: M }),
      U = S(T, x, m, N.root);
    return (
      O(T),
      t.createElement(
        te,
        {
          'arrow': H,
          ...Z(b, ['title']),
          'trigger': h,
          'placement': s,
          'onOpenChange': F,
          'open': W,
          'ref': e,
          'classNames': { root: U, container: N.container, arrow: N.arrow },
          'styles': { root: { ...v, ...E.root, ...g }, container: E.container, arrow: E.arrow },
          'content': t.createElement(B, {
            okType: r,
            icon: i,
            ...o,
            prefixCls: T,
            close: L,
            onConfirm: V,
            onCancel: X,
            classNames: N,
            styles: E,
          }),
          'data-popover-inject': !0,
        },
        n,
      )
    );
  }),
  ce = le;
ce._InternalPanelDoNotUseOrYouWillBeFired = ae;
export { ce as P };
