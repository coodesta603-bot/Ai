import { r as o, R as Le } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  cV as pe,
  eK as Te,
  eL as Fe,
  bb as ke,
  be as Ne,
  eM as _e,
  eN as Ce,
  aJ as Ae,
  b8 as Be,
  b9 as We,
  bM as je,
  cn as Ue,
  eO as Xe,
  dm as Ye,
  eP as Ge,
  eQ as Ke,
  eF as Ve,
  dn as Ze,
  cq as Se,
  bm as qe,
} from './index-C8UyLGsD.js';
import {
  k as Je,
  c as C,
  h as ge,
  v as Qe,
  C as we,
  b as $e,
  u as K,
  d as et,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
const ve = o.createContext(null),
  Re = o.createContext({});
function he() {
  return (
    (he = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
          return t;
        }),
    he.apply(this, arguments)
  );
}
const tt = (t) => {
  const { prefixCls: n, className: e, containerRef: r, ...s } = t,
    { panel: l } = o.useContext(Re),
    a = Je(l, r);
  return o.createElement(
    'div',
    he(
      { className: C(`${n}-section`, e), role: 'dialog', ref: a },
      pe(t, { aria: !0 }),
      { 'aria-modal': 'true' },
      s,
    ),
  );
};
function nt(t) {
  const {
      prefixCls: n,
      direction: e,
      className: r,
      style: s,
      maxSize: l,
      containerRef: a,
      currentSize: p,
      onResize: S,
      onResizeEnd: v,
      onResizeStart: g,
    } = t,
    [c, w] = o.useState(!1),
    [$, N] = o.useState(0),
    [R, P] = o.useState(0),
    h = e === 'left' || e === 'right',
    z = ge((m) => {
      (m.preventDefault(), m.stopPropagation(), w(!0), N(h ? m.clientX : m.clientY));
      let b;
      if (typeof p == 'number') b = p;
      else if (a?.current) {
        const x = a.current.getBoundingClientRect();
        b = h ? x.width : x.height;
      }
      (P(b), g?.(b));
    }),
    d = ge((m) => {
      if (!c) return;
      let x = (h ? m.clientX : m.clientY) - $;
      (e === 'right' || e === 'bottom') && (x = -x);
      let i = R + x;
      (i < 0 && (i = 0), l && i > l && (i = l), S?.(i));
    }),
    u = o.useCallback(() => {
      if (c && (w(!1), a?.current)) {
        const m = a.current.getBoundingClientRect(),
          b = h ? m.width : m.height;
        v?.(b);
      }
    }, [c, a, v, h]);
  return (
    o.useEffect(() => {
      if (c)
        return (
          document.addEventListener('mousemove', d),
          document.addEventListener('mouseup', u),
          () => {
            (document.removeEventListener('mousemove', d),
              document.removeEventListener('mouseup', u));
          }
        );
    }, [c, d, u]),
    {
      dragElementProps: {
        className: C(
          `${n}-dragger`,
          `${n}-dragger-${e}`,
          {
            [`${n}-dragger-dragging`]: c,
            [`${n}-dragger-horizontal`]: h,
            [`${n}-dragger-vertical`]: !h,
          },
          r,
        ),
        style: s,
        onMouseDown: z,
      },
      isDragging: c,
    }
  );
}
function fe(t) {
  if (typeof t == 'string') {
    const n = Number(t.replace(/px$/i, ''));
    if (
      (parseFloat(t) === n &&
        Qe(!1, 'Invalid value type of `width` or `height` which should be number type instead.'),
      !Number.isNaN(n))
    )
      return n;
  }
  return t;
}
function ot(t, n, e, r, s) {
  const l = r ?? s !== !1,
    [a] = Te(n && l, t);
  return (
    Le.useEffect(() => {
      n && e === !0 && t()?.focus({ preventScroll: !0 });
    }, [n]),
    a
  );
}
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
          return t;
        }),
    V.apply(this, arguments)
  );
}
const rt = (t, n) => {
    const {
        prefixCls: e,
        open: r,
        placement: s,
        inline: l,
        push: a,
        forceRender: p,
        autoFocus: S,
        focusTrap: v,
        classNames: g,
        rootClassName: c,
        rootStyle: w,
        zIndex: $,
        className: N,
        id: R,
        style: P,
        motion: h,
        width: z,
        height: d,
        size: u,
        maxSize: E,
        children: m,
        mask: b,
        maskClosable: x,
        maskMotion: i,
        maskClassName: k,
        maskStyle: f,
        afterOpenChange: I,
        onClose: j,
        onMouseEnter: Z,
        onMouseOver: O,
        onMouseLeave: U,
        onClick: F,
        onKeyDown: q,
        onKeyUp: J,
        styles: _,
        drawerRender: D,
        resizable: A,
        defaultSize: H,
      } = t,
      L = o.useRef(null);
    o.useImperativeHandle(n, () => L.current);
    const ae = ot(() => L.current, r, S, v, b),
      [ne, oe] = o.useState(!1),
      X = o.useContext(ve);
    let Q;
    typeof a == 'boolean' ? (Q = a ? {} : { distance: 0 }) : (Q = a || {});
    const M = Q?.distance ?? X?.pushDistance ?? 180,
      le = o.useMemo(
        () => ({
          pushDistance: M,
          push: () => {
            oe(!0);
          },
          pull: () => {
            oe(!1);
          },
        }),
        [M],
      );
    (o.useEffect(() => {
      r ? X?.push?.() : X?.pull?.();
    }, [r]),
      o.useEffect(
        () => () => {
          X?.pull?.();
        },
        [],
      ));
    const Y = o.createElement(
        we,
        V({ key: 'mask' }, i, { visible: b && r }),
        ({ className: y, style: se }, me) =>
          o.createElement('div', {
            className: C(`${e}-mask`, y, g?.mask, k),
            style: { ...se, ...f, ..._?.mask },
            onClick: x && r ? j : void 0,
            ref: me,
          }),
      ),
      ie = typeof h == 'function' ? h(s) : h,
      [ee, te] = o.useState(),
      B = s === 'left' || s === 'right',
      G = o.useMemo(
        () => fe(u ?? (B ? z : d) ?? ee ?? H ?? (B ? 378 : void 0)),
        [u, z, d, H, B, ee],
      ),
      ce = o.useMemo(() => {
        const y = {};
        if (ne && M)
          switch (s) {
            case 'top':
              y.transform = `translateY(${M}px)`;
              break;
            case 'bottom':
              y.transform = `translateY(${-M}px)`;
              break;
            case 'left':
              y.transform = `translateX(${M}px)`;
              break;
            default:
              y.transform = `translateX(${-M}px)`;
              break;
          }
        return (B ? (y.width = fe(G)) : (y.height = fe(G)), y);
      }, [ne, M, s, B, G]),
      re = o.useRef(null),
      W = !!A,
      T = (typeof A == 'object' && A) || {},
      de = ge((y) => {
        (te(y), T.onResize?.(y));
      }),
      { dragElementProps: ue, isDragging: be } = nt({
        prefixCls: `${e}-resizable`,
        direction: s,
        className: g?.dragger,
        style: _?.dragger,
        maxSize: E,
        containerRef: re,
        currentSize: G,
        onResize: de,
        onResizeStart: T.onResizeStart,
        onResizeEnd: T.onResizeEnd,
      }),
      Oe = {
        onMouseEnter: Z,
        onMouseOver: O,
        onMouseLeave: U,
        onClick: F,
        onKeyDown: q,
        onKeyUp: J,
        onFocus: (y) => {
          ae(y.target);
        },
      },
      He = o.createElement(
        we,
        V({ key: 'panel' }, ie, {
          visible: r,
          forceRender: p,
          onVisibleChanged: I,
          removeOnLeave: !1,
          leavedClassName: `${e}-content-wrapper-hidden`,
        }),
        ({ className: y, style: se }, me) => {
          const ye = o.createElement(
            tt,
            V(
              {
                id: R,
                containerRef: me,
                prefixCls: e,
                className: C(N, g?.section),
                style: { ...P, ..._?.section },
              },
              pe(t, { aria: !0 }),
              Oe,
            ),
            m,
          );
          return o.createElement(
            'div',
            V(
              {
                ref: re,
                className: C(
                  `${e}-content-wrapper`,
                  be && `${e}-content-wrapper-dragging`,
                  g?.wrapper,
                  !be && y,
                ),
                style: { ...se, ...ce, ..._?.wrapper },
              },
              pe(t, { data: !0 }),
            ),
            W && o.createElement('div', ue),
            D ? D(ye) : ye,
          );
        },
      ),
      xe = { ...w };
    return (
      $ && (xe.zIndex = $),
      o.createElement(
        ve.Provider,
        { value: le },
        o.createElement(
          'div',
          {
            className: C(e, `${e}-${s}`, c, { [`${e}-open`]: r, [`${e}-inline`]: l }),
            style: xe,
            tabIndex: -1,
            ref: L,
          },
          Y,
          He,
        ),
      )
    );
  },
  st = o.forwardRef(rt),
  at = (t) => {
    const {
        open: n = !1,
        prefixCls: e = 'rc-drawer',
        placement: r = 'right',
        autoFocus: s = !0,
        keyboard: l = !0,
        width: a,
        height: p,
        size: S,
        maxSize: v,
        mask: g = !0,
        maskClosable: c = !0,
        getContainer: w,
        forceRender: $,
        afterOpenChange: N,
        destroyOnHidden: R,
        onMouseEnter: P,
        onMouseOver: h,
        onMouseLeave: z,
        onClick: d,
        onKeyDown: u,
        onKeyUp: E,
        onClose: m,
        resizable: b,
        defaultSize: x,
        focusTriggerAfterClose: i,
        panelRef: k,
      } = t,
      [f, I] = o.useState(!1),
      [j, Z] = o.useState(!1);
    $e(() => {
      Z(!0);
    }, []);
    const O = j ? n : !1,
      U = o.useRef(null),
      F = o.useRef(null);
    $e(() => {
      O && (F.current = document.activeElement);
    }, [O]);
    const q = (H) => {
        (I(H),
          N?.(H),
          !H &&
            i !== !1 &&
            F.current &&
            !U.current?.contains(F.current) &&
            F.current?.focus({ preventScroll: !0 }));
      },
      J = o.useMemo(() => ({ panel: k }), [k]);
    if (!$ && !f && !O && R) return null;
    const D = {
        ...t,
        open: O,
        prefixCls: e,
        placement: r,
        autoFocus: s,
        keyboard: l,
        width: a,
        height: p,
        size: S,
        maxSize: v,
        defaultSize: x,
        mask: g,
        maskClosable: c,
        inline: w === !1,
        afterOpenChange: q,
        ref: U,
        resizable: b,
        ...{
          onMouseEnter: P,
          onMouseOver: h,
          onMouseLeave: z,
          onClick: d,
          onKeyDown: u,
          onKeyUp: E,
        },
      },
      A = ({ top: H, event: L }) => {
        H && l && (L.stopPropagation(), m?.(L));
      };
    return o.createElement(
      Re.Provider,
      { value: J },
      o.createElement(
        Fe,
        { open: O || $ || f, autoDestroy: !1, getContainer: w, autoLock: g && (O || f), onEsc: A },
        o.createElement(st, D),
      ),
    );
  },
  Pe = (t) => {
    const {
        prefixCls: n,
        ariaId: e,
        title: r,
        footer: s,
        extra: l,
        closable: a,
        loading: p,
        onClose: S,
        headerStyle: v,
        bodyStyle: g,
        footerStyle: c,
        children: w,
        classNames: $,
        styles: N,
      } = t,
      R = ke('drawer'),
      { classNames: P, styles: h, closable: z } = R,
      [d, u] = Ne([P, $], [h, N], { props: { ...t, closable: a ?? z } }),
      E = o.useMemo(() => {
        const f = a ?? z;
        if (f !== !1) return typeof f == 'object' && f?.placement === 'end' ? 'end' : 'start';
      }, [a, z]),
      m = o.useCallback(
        (f) =>
          o.createElement(
            'button',
            {
              type: 'button',
              onClick: S,
              className: C(`${n}-close`, { [`${n}-close-${E}`]: E === 'end' }, d.close),
              style: u.close,
            },
            f,
          ),
        [S, n, E, d.close, u.close],
      ),
      [b, x] = _e(Ce(t), Ce(R), { closable: !0, closeIconRender: m }),
      i = () =>
        !r && !b
          ? null
          : o.createElement(
              'div',
              {
                style: { ...u.header, ...v },
                className: C(`${n}-header`, d.header, {
                  [`${n}-header-close-only`]: b && !r && !l,
                }),
              },
              o.createElement(
                'div',
                { className: `${n}-header-title` },
                E === 'start' && x,
                r &&
                  o.createElement(
                    'div',
                    { className: C(`${n}-title`, d.title), style: u.title, id: e },
                    r,
                  ),
              ),
              l &&
                o.createElement('div', { className: C(`${n}-extra`, d.extra), style: u.extra }, l),
              E === 'end' && x,
            ),
      k = () =>
        s
          ? o.createElement(
              'div',
              { className: C(`${n}-footer`, d.footer), style: { ...u.footer, ...c } },
              s,
            )
          : null;
    return o.createElement(
      o.Fragment,
      null,
      i(),
      o.createElement(
        'div',
        { className: C(`${n}-body`, d.body), style: { ...u.body, ...g } },
        p
          ? o.createElement(Ae, {
              active: !0,
              title: !1,
              paragraph: { rows: 5 },
              className: `${n}-body-skeleton`,
            })
          : w,
      ),
      k(),
    );
  },
  lt = (t) => {
    const n = '100%';
    return {
      left: `translateX(-${n})`,
      right: `translateX(${n})`,
      top: `translateY(-${n})`,
      bottom: `translateY(${n})`,
    }[t];
  },
  Ie = (t, n) => ({
    '&-enter, &-appear': { ...t, '&-active': n },
    '&-leave': { ...n, '&-active': t },
  }),
  De = (t, n) => ({
    '&-enter, &-appear, &-leave': {
      '&-start': { transition: 'none' },
      '&-active': { transition: `all ${n}` },
    },
    ...Ie({ opacity: t }, { opacity: 1 }),
  }),
  it = (t, n) => [De(0.7, n), Ie({ transform: lt(t) }, { transform: 'none' })],
  ct = (t) => {
    const { componentCls: n, motionDurationSlow: e } = t;
    return {
      [n]: {
        [`${n}-mask-motion`]: De(0, e),
        [`${n}-panel-motion`]: ['left', 'right', 'top', 'bottom'].reduce(
          (r, s) => ({ ...r, [`&-${s}`]: it(s, e) }),
          {},
        ),
      },
    };
  },
  dt = (t) => {
    const {
        borderRadiusSM: n,
        componentCls: e,
        zIndexPopup: r,
        colorBgMask: s,
        colorBgElevated: l,
        motionDurationSlow: a,
        motionDurationMid: p,
        paddingXS: S,
        padding: v,
        paddingLG: g,
        fontSizeLG: c,
        lineHeightLG: w,
        lineWidth: $,
        lineType: N,
        colorSplit: R,
        marginXS: P,
        colorIcon: h,
        colorIconHover: z,
        colorBgTextHover: d,
        colorBgTextActive: u,
        colorText: E,
        fontWeightStrong: m,
        footerPaddingBlock: b,
        footerPaddingInline: x,
        draggerSize: i,
        calc: k,
      } = t,
      f = `${e}-content-wrapper`,
      I = `${e}-resizable-dragger`;
    return {
      [e]: {
        'position': 'fixed',
        'inset': 0,
        'zIndex': r,
        'pointerEvents': 'none',
        'color': E,
        '&-pure': {
          position: 'relative',
          background: l,
          display: 'flex',
          flexDirection: 'column',
          pointerEvents: 'auto',
          [`&${e}-left`]: { boxShadow: t.boxShadowDrawerLeft },
          [`&${e}-right`]: { boxShadow: t.boxShadowDrawerRight },
          [`&${e}-top`]: { boxShadow: t.boxShadowDrawerUp },
          [`&${e}-bottom`]: { boxShadow: t.boxShadowDrawerDown },
        },
        '&-inline': { position: 'absolute' },
        [`${e}-mask`]: {
          position: 'absolute',
          inset: 0,
          zIndex: r,
          background: s,
          pointerEvents: 'auto',
          [`&${e}-mask-blur`]: { backdropFilter: 'blur(4px)' },
        },
        [f]: {
          'position': 'absolute',
          'zIndex': r,
          'maxWidth': '100vw',
          'transition': `all ${a}`,
          '&-hidden': { display: 'none' },
        },
        [`&-left > ${f}`]: {
          top: 0,
          bottom: 0,
          left: { _skip_check_: !0, value: 0 },
          boxShadow: t.boxShadowDrawerLeft,
        },
        [`&-right > ${f}`]: {
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: 0,
          boxShadow: t.boxShadowDrawerRight,
        },
        [`&-top > ${f}`]: { top: 0, insetInline: 0, boxShadow: t.boxShadowDrawerUp },
        [`&-bottom > ${f}`]: { bottom: 0, insetInline: 0, boxShadow: t.boxShadowDrawerDown },
        [`${e}-section`]: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          background: l,
          pointerEvents: 'auto',
        },
        [`${e}-header`]: {
          'display': 'flex',
          'flex': 0,
          'alignItems': 'center',
          'padding': `${K(v)} ${K(g)}`,
          'fontSize': c,
          'lineHeight': w,
          'borderBottom': `${K($)} ${N} ${R}`,
          '&-title': { display: 'flex', flex: 1, alignItems: 'center', minWidth: 0, minHeight: 0 },
        },
        [`${e}-extra`]: { flex: 'none' },
        [`${e}-close`]: {
          'display': 'inline-flex',
          'width': k(c).add(S).equal(),
          'height': k(c).add(S).equal(),
          'borderRadius': n,
          'justifyContent': 'center',
          'alignItems': 'center',
          'color': h,
          'fontWeight': m,
          'fontSize': c,
          'fontStyle': 'normal',
          'lineHeight': 1,
          'textAlign': 'center',
          'textTransform': 'none',
          'textDecoration': 'none',
          'background': 'transparent',
          'border': 0,
          'cursor': 'pointer',
          'transition': `all ${p}`,
          'textRendering': 'auto',
          [`&${e}-close-end`]: { marginInlineStart: P },
          [`&:not(${e}-close-end)`]: { marginInlineEnd: P },
          '&:hover': { color: z, backgroundColor: d, textDecoration: 'none' },
          '&:active': { backgroundColor: u },
          ...je(t),
        },
        [`${e}-title`]: {
          flex: 1,
          margin: 0,
          fontWeight: t.fontWeightStrong,
          fontSize: c,
          lineHeight: w,
        },
        [`${e}-body`]: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          padding: g,
          overflow: 'auto',
          [`${e}-body-skeleton`]: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          },
        },
        [`${e}-footer`]: {
          flexShrink: 0,
          padding: `${K(b)} ${K(x)}`,
          borderTop: `${K($)} ${N} ${R}`,
        },
        [I]: {
          'position': 'absolute',
          'zIndex': 1,
          'backgroundColor': 'transparent',
          'userSelect': 'none',
          'pointerEvents': 'auto',
          '&:hover': { backgroundColor: t.colorPrimary, opacity: 0.2 },
          '&-dragging': { backgroundColor: t.colorPrimary, opacity: 0.3 },
        },
        [`${I}-left`]: {
          top: 0,
          bottom: 0,
          right: { _skip_check_: !0, value: 0 },
          width: i,
          cursor: 'col-resize',
        },
        [`${I}-right`]: {
          top: 0,
          bottom: 0,
          left: { _skip_check_: !0, value: 0 },
          width: i,
          cursor: 'col-resize',
        },
        [`${I}-top`]: { insetInline: 0, bottom: 0, height: i, cursor: 'row-resize' },
        [`${I}-bottom`]: { insetInline: 0, top: 0, height: i, cursor: 'row-resize' },
        [`${f}-dragging`]: {
          userSelect: 'none',
          transition: 'none',
          willChange: 'width, height',
          [`${e}-content`]: { pointerEvents: 'none' },
          [`${e}-section`]: { pointerEvents: 'none' },
        },
        '&-rtl': { direction: 'rtl' },
      },
    };
  },
  ut = (t) => ({
    zIndexPopup: t.zIndexPopupBase,
    footerPaddingBlock: t.paddingXS,
    footerPaddingInline: t.padding,
    draggerSize: 4,
  }),
  Me = Be(
    'Drawer',
    (t) => {
      const n = We(t, {});
      return [dt(n), ct(n)];
    },
    ut,
  ),
  mt = { distance: 180 },
  ze = 378,
  Ee = { motionAppear: !0, motionEnter: !0, motionLeave: !0, motionDeadline: 500 },
  ft = (t) => {
    const {
        'rootClassName': n,
        'size': e,
        'defaultSize': r = ze,
        'height': s,
        'width': l,
        'mask': a,
        'push': p = mt,
        'open': S,
        'afterOpenChange': v,
        'onClose': g,
        'prefixCls': c,
        'getContainer': w,
        'panelRef': $ = null,
        'style': N,
        'className': R,
        'resizable': P,
        'aria-labelledby': h,
        'focusable': z,
        'maskClosable': d,
        'maskStyle': u,
        'drawerStyle': E,
        'contentWrapperStyle': m,
        'destroyOnClose': b,
        'destroyOnHidden': x,
        ...i
      } = t,
      { placement: k } = i,
      f = Ue(),
      I = i.title ? f : void 0,
      {
        getPopupContainer: j,
        getPrefixCls: Z,
        direction: O,
        className: U,
        style: F,
        classNames: q,
        styles: J,
        mask: _,
      } = ke('drawer'),
      D = Z('drawer', c),
      [A, H] = Me(D),
      L = w === void 0 && j ? () => j(document.body) : w,
      ae = o.useMemo(
        () =>
          typeof e == 'number'
            ? e
            : e === 'large'
              ? 736
              : e === 'default'
                ? ze
                : typeof e == 'string'
                  ? /^\d+(\.\d+)?$/.test(e)
                    ? Number(e)
                    : e
                  : !k || k === 'left' || k === 'right'
                    ? l
                    : s,
        [e, k, l, s],
      ),
      ne = { motionName: Se(D, 'mask-motion'), ...Ee },
      oe = (ue) => ({ motionName: Se(D, `panel-motion-${ue}`), ...Ee }),
      X = Xe(),
      Q = et($, X),
      [M, le] = Ye('Drawer', i.zIndex),
      [Y, ie, ee] = Ge(a, _, D, d),
      te = Ke(z, L !== !1 && Y),
      { classNames: B, styles: G, rootStyle: ce } = i,
      re = {
        ...t,
        zIndex: M,
        panelRef: $,
        mask: Y,
        maskClosable: ee,
        defaultSize: r,
        push: p,
        focusable: te,
      },
      [W, T] = Ne([q, B], [J, G], { props: re }),
      de = C({ 'no-mask': !Y, [`${D}-rtl`]: O === 'rtl' }, n, A, H, W.root);
    return o.createElement(
      Ve,
      { form: !0, space: !0 },
      o.createElement(
        Ze.Provider,
        { value: le },
        o.createElement(
          at,
          {
            'prefixCls': D,
            'onClose': g,
            'maskMotion': ne,
            'motion': oe,
            ...i,
            'classNames': {
              mask: C(W.mask, ie.mask),
              section: W.section,
              wrapper: W.wrapper,
              dragger: W.dragger,
            },
            'styles': {
              mask: { ...T.mask, ...u },
              section: { ...T.section, ...E },
              wrapper: { ...T.wrapper, ...m },
              dragger: T.dragger,
            },
            'open': S,
            'mask': Y,
            'maskClosable': ee,
            'push': p,
            'size': ae,
            'defaultSize': r,
            'style': { ...F, ...N },
            'rootStyle': { ...ce, ...T.root },
            'className': C(U, R),
            'rootClassName': de,
            'getContainer': L,
            'afterOpenChange': v,
            'panelRef': Q,
            'zIndex': M,
            ...(P ? { resizable: P } : {}),
            'aria-labelledby': h ?? I,
            'destroyOnHidden': x ?? b,
            'focusTriggerAfterClose': te.focusTriggerAfterClose,
            'focusTrap': te.trap,
          },
          o.createElement(Pe, { prefixCls: D, size: e, ...i, ariaId: I, onClose: g }),
        ),
      ),
    );
  },
  pt = (t) => {
    const { prefixCls: n, style: e, className: r, placement: s = 'right', ...l } = t,
      { getPrefixCls: a } = o.useContext(qe),
      p = a('drawer', n),
      [S, v] = Me(p),
      g = C(p, `${p}-pure`, `${p}-${s}`, S, v, r);
    return o.createElement(
      'div',
      { className: g, style: e },
      o.createElement(Pe, { prefixCls: p, ...l }),
    );
  };
ft._InternalPanelDoNotUseOrYouWillBeFired = pt;
export { ft as D };
