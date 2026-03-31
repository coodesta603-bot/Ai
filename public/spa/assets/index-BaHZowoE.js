import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  b8 as ue,
  ba as pe,
  bb as fe,
  bX as B,
  be as ge,
  cV as D,
  bR as ye,
  cW as Ce,
  cX as Ie,
  cY as $e,
  cZ as be,
  c_ as T,
  c$ as he,
  d0 as Se,
  d1 as Ee,
  d2 as ve,
  d3 as xe,
} from './index-C8UyLGsD.js';
import { u as _, c as C, C as Ne, d as we } from '../vendor/vendor-motion-Dbb9VQJo.js';
const x = (o, e, n, r, s) => ({
    background: o,
    border: `${_(r.lineWidth)} ${r.lineType} ${e}`,
    [`${s}-icon`]: { color: n },
  }),
  Be = (o) => {
    const {
      componentCls: e,
      motionDurationSlow: n,
      marginXS: r,
      marginSM: s,
      fontSize: a,
      fontSizeLG: c,
      lineHeight: d,
      borderRadiusLG: m,
      motionEaseInOutCirc: u,
      withDescriptionIconSize: p,
      colorText: I,
      colorTextHeading: f,
      withDescriptionPadding: $,
      defaultPadding: v,
    } = o;
    return {
      [e]: {
        ...pe(o),
        'position': 'relative',
        'display': 'flex',
        'alignItems': 'center',
        'padding': v,
        'wordWrap': 'break-word',
        'borderRadius': m,
        [`&${e}-rtl`]: { direction: 'rtl' },
        [`${e}-section`]: { flex: 1, minWidth: 0 },
        [`${e}-icon`]: { marginInlineEnd: r, lineHeight: 0 },
        '&-description': { display: 'none', fontSize: a, lineHeight: d },
        '&-title': { color: f },
        [`&${e}-motion-leave`]: {
          overflow: 'hidden',
          opacity: 1,
          transition: ['max-height', 'opacity', 'padding-top', 'padding-bottom', 'margin-bottom']
            .map((i) => `${i} ${n} ${u}`)
            .join(', '),
        },
        [`&${e}-motion-leave-active`]: {
          maxHeight: 0,
          marginBottom: '0 !important',
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
        },
      },
      [`${e}-with-description`]: {
        alignItems: 'flex-start',
        padding: $,
        [`${e}-icon`]: { marginInlineEnd: s, fontSize: p, lineHeight: 0 },
        [`${e}-title`]: { display: 'block', marginBottom: r, color: f, fontSize: c },
        [`${e}-description`]: { display: 'block', color: I },
      },
      [`${e}-banner`]: { marginBottom: 0, border: '0 !important', borderRadius: 0 },
    };
  },
  Re = (o) => {
    const {
      componentCls: e,
      colorSuccess: n,
      colorSuccessBorder: r,
      colorSuccessBg: s,
      colorWarning: a,
      colorWarningBorder: c,
      colorWarningBg: d,
      colorError: m,
      colorErrorBorder: u,
      colorErrorBg: p,
      colorInfo: I,
      colorInfoBorder: f,
      colorInfoBg: $,
    } = o;
    return {
      [e]: {
        '&-success': x(s, r, n, o, e),
        '&-info': x($, f, I, o, e),
        '&-warning': x(d, c, a, o, e),
        '&-error': { ...x(p, u, m, o, e), [`${e}-description > pre`]: { margin: 0, padding: 0 } },
      },
    };
  },
  He = (o) => {
    const {
      componentCls: e,
      iconCls: n,
      motionDurationMid: r,
      marginXS: s,
      fontSizeIcon: a,
      colorIcon: c,
      colorIconHover: d,
    } = o;
    return {
      [e]: {
        '&-actions': { marginInlineStart: s },
        [`${e}-close-icon`]: {
          marginInlineStart: s,
          padding: 0,
          overflow: 'hidden',
          fontSize: a,
          lineHeight: _(a),
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          [`${n}-close`]: { 'color': c, 'transition': `color ${r}`, '&:hover': { color: d } },
        },
        '&-close-text': { 'color': c, 'transition': `color ${r}`, '&:hover': { color: d } },
      },
    };
  },
  ze = (o) => ({
    withDescriptionIconSize: o.fontSizeHeading3,
    defaultPadding: `${o.paddingContentVerticalSM}px 12px`,
    withDescriptionPadding: `${o.paddingMD}px ${o.paddingContentHorizontalLG}px`,
  }),
  Me = ue('Alert', (o) => [Be(o), Re(o), He(o)], ze),
  Pe = (o) => {
    const {
        icon: e,
        type: n,
        className: r,
        style: s,
        successIcon: a,
        infoIcon: c,
        warningIcon: d,
        errorIcon: m,
      } = o,
      u = {
        success: a ?? t.createElement($e, null),
        info: c ?? t.createElement(Ie, null),
        error: m ?? t.createElement(Ce, null),
        warning: d ?? t.createElement(ye, null),
      };
    return t.createElement('span', { className: r, style: s }, e ?? u[n]);
  },
  Ae = (o) => {
    const {
        isClosable: e,
        prefixCls: n,
        closeIcon: r,
        handleClose: s,
        ariaProps: a,
        className: c,
        style: d,
      } = o,
      m = r === !0 || r === void 0 ? t.createElement(be, null) : r;
    return e
      ? t.createElement(
          'button',
          {
            type: 'button',
            onClick: s,
            className: C(`${n}-close-icon`, c),
            tabIndex: 0,
            style: d,
            ...a,
          },
          m,
        )
      : null;
  },
  W = t.forwardRef((o, e) => {
    const {
        description: n,
        prefixCls: r,
        message: s,
        title: a,
        banner: c,
        className: d,
        rootClassName: m,
        style: u,
        onMouseEnter: p,
        onMouseLeave: I,
        onClick: f,
        afterClose: $,
        showIcon: v,
        closable: i,
        closeText: E,
        closeIcon: S,
        action: R,
        id: j,
        styles: L,
        classNames: X,
        ...k
      } = o,
      H = a ?? s,
      [z, G] = t.useState(!1),
      M = t.useRef(null);
    t.useImperativeHandle(e, () => ({ nativeElement: M.current }));
    const {
        getPrefixCls: O,
        direction: V,
        closable: g,
        closeIcon: P,
        className: F,
        style: Y,
        classNames: Z,
        styles: q,
        successIcon: J,
        infoIcon: K,
        warningIcon: Q,
        errorIcon: U,
      } = fe('alert'),
      l = O('alert', r),
      [ee, oe] = Me(l),
      { onClose: te, afterClose: ne } = i && typeof i == 'object' ? i : {},
      re = (y) => {
        (G(!0), (te ?? o.onClose)?.(y));
      },
      N = t.useMemo(() => (o.type !== void 0 ? o.type : c ? 'warning' : 'info'), [o.type, c]),
      A = t.useMemo(
        () =>
          (typeof i == 'object' && i.closeIcon) || E
            ? !0
            : typeof i == 'boolean'
              ? i
              : S !== !1 && B(S)
                ? !0
                : !!g,
        [E, S, i, g],
      ),
      w = c && v === void 0 ? !0 : v,
      se = { ...o, prefixCls: l, type: N, showIcon: w, closable: A },
      [b, h] = ge([Z, X], [q, L], { props: se }),
      ce = C(
        l,
        `${l}-${N}`,
        {
          [`${l}-with-description`]: !!n,
          [`${l}-no-icon`]: !w,
          [`${l}-banner`]: !!c,
          [`${l}-rtl`]: V === 'rtl',
        },
        F,
        d,
        m,
        b.root,
        oe,
        ee,
      ),
      ie = D(k, { aria: !0, data: !0 }),
      le = t.useMemo(
        () =>
          typeof i == 'object' && i.closeIcon
            ? i.closeIcon
            : E || (S !== void 0 ? S : typeof g == 'object' && g.closeIcon ? g.closeIcon : P),
        [S, i, g, E, P],
      ),
      ae = t.useMemo(() => {
        const y = i ?? g;
        return typeof y == 'object' ? D(y, { data: !0, aria: !0 }) : {};
      }, [i, g]);
    return t.createElement(
      Ne,
      {
        visible: !z,
        motionName: `${l}-motion`,
        motionAppear: !1,
        motionEnter: !1,
        onLeaveStart: (y) => ({ maxHeight: y.offsetHeight }),
        onLeaveEnd: ne ?? $,
      },
      ({ className: y, style: de }, me) =>
        t.createElement(
          'div',
          {
            'id': j,
            'ref': we(M, me),
            'data-show': !z,
            'className': C(ce, y),
            'style': { ...h.root, ...Y, ...u, ...de },
            'onMouseEnter': p,
            'onMouseLeave': I,
            'onClick': f,
            'role': 'alert',
            ...ie,
          },
          w
            ? t.createElement(Pe, {
                className: C(`${l}-icon`, b.icon),
                style: h.icon,
                description: n,
                icon: o.icon,
                prefixCls: l,
                type: N,
                successIcon: J,
                infoIcon: K,
                warningIcon: Q,
                errorIcon: U,
              })
            : null,
          t.createElement(
            'div',
            { className: C(`${l}-section`, b.section), style: h.section },
            H
              ? t.createElement('div', { className: C(`${l}-title`, b.title), style: h.title }, H)
              : null,
            n
              ? t.createElement(
                  'div',
                  { className: C(`${l}-description`, b.description), style: h.description },
                  n,
                )
              : null,
          ),
          R
            ? t.createElement(
                'div',
                { className: C(`${l}-actions`, b.actions), style: h.actions },
                R,
              )
            : null,
          t.createElement(Ae, {
            className: b.close,
            style: h.close,
            isClosable: A,
            prefixCls: l,
            closeIcon: le,
            handleClose: re,
            ariaProps: ae,
          }),
        ),
    );
  });
function De(o, e, n) {
  return (
    (e = T(e)),
    he(o, Se() ? Reflect.construct(e, n || [], T(o).constructor) : e.apply(o, n))
  );
}
let Te = (function (o) {
  function e() {
    var n;
    return (xe(this, e), (n = De(this, e, arguments)), (n.state = { error: void 0, info: {} }), n);
  }
  return (
    Ee(e, o),
    ve(e, [
      {
        key: 'componentDidCatch',
        value: function (r, s) {
          this.setState({ error: r, info: s });
        },
      },
      {
        key: 'render',
        value: function () {
          const { message: r, title: s, description: a, id: c, children: d } = this.props,
            { error: m, info: u } = this.state,
            p = s ?? r,
            I = u?.componentStack || null,
            f = B(p) ? p : m?.toString(),
            $ = B(a) ? a : I;
          return m
            ? t.createElement(W, {
                id: c,
                type: 'error',
                title: f,
                description: t.createElement(
                  'pre',
                  { style: { fontSize: '0.9em', overflowX: 'auto' } },
                  $,
                ),
              })
            : d;
        },
      },
    ])
  );
})(t.PureComponent);
const _e = W;
_e.ErrorBoundary = Te;
export { _e as A };
