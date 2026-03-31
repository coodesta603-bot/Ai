import { r as p, R as ct } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as R, u as I, i as Xt, x as Ht, a as Yt } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  cn as Dt,
  cC as Ft,
  co as G,
  b8 as Ut,
  b9 as pt,
  dr as Zt,
  ba as Gt,
  ds as Kt,
  f5 as Jt,
  bm as Qt,
  be as ft,
  cK as mt,
  dl as te,
  bb as ee,
  eF as oe,
  f6 as re,
  dm as ne,
  cq as se,
  cr as ae,
  dn as ie,
  f7 as le,
  dq as ce,
} from './index-C8UyLGsD.js';
const ut = (e) => {
    const {
      children: n,
      prefixCls: o,
      id: t,
      classNames: s,
      styles: a,
      className: r,
      style: l,
    } = e;
    return p.createElement(
      'div',
      {
        id: t,
        className: R(`${o}-container`, s?.container, r),
        style: { ...a?.container, ...l },
        role: 'tooltip',
      },
      typeof n == 'function' ? n() : n,
    );
  },
  T = { shiftX: 64, adjustY: 1 },
  A = { adjustX: 1, shiftY: !0 },
  C = [0, 0],
  pe = {
    left: { points: ['cr', 'cl'], overflow: A, offset: [-4, 0], targetOffset: C },
    right: { points: ['cl', 'cr'], overflow: A, offset: [4, 0], targetOffset: C },
    top: { points: ['bc', 'tc'], overflow: T, offset: [0, -4], targetOffset: C },
    bottom: { points: ['tc', 'bc'], overflow: T, offset: [0, 4], targetOffset: C },
    topLeft: { points: ['bl', 'tl'], overflow: T, offset: [0, -4], targetOffset: C },
    leftTop: { points: ['tr', 'tl'], overflow: A, offset: [-4, 0], targetOffset: C },
    topRight: { points: ['br', 'tr'], overflow: T, offset: [0, -4], targetOffset: C },
    rightTop: { points: ['tl', 'tr'], overflow: A, offset: [4, 0], targetOffset: C },
    bottomRight: { points: ['tr', 'br'], overflow: T, offset: [0, 4], targetOffset: C },
    rightBottom: { points: ['bl', 'br'], overflow: A, offset: [4, 0], targetOffset: C },
    bottomLeft: { points: ['tl', 'bl'], overflow: T, offset: [0, 4], targetOffset: C },
    leftBottom: { points: ['br', 'bl'], overflow: A, offset: [-4, 0], targetOffset: C },
  };
function Z() {
  return (
    (Z = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
          }
          return e;
        }),
    Z.apply(this, arguments)
  );
}
const fe = p.forwardRef((e, n) => {
  const {
      trigger: o = ['hover'],
      mouseEnterDelay: t = 0,
      mouseLeaveDelay: s = 0.1,
      prefixCls: a = 'rc-tooltip',
      children: r,
      onVisibleChange: l,
      afterVisibleChange: c,
      motion: f,
      placement: i = 'right',
      align: d = {},
      destroyOnHidden: m = !1,
      defaultVisible: y,
      getTooltipContainer: v,
      arrowContent: u,
      overlay: g,
      id: x,
      showArrow: h = !0,
      classNames: b,
      styles: w,
      ...S
    } = e,
    $ = Dt(x),
    M = p.useRef(null);
  p.useImperativeHandle(n, () => M.current);
  const _ = { ...S };
  'visible' in e && (_.popupVisible = e.visible);
  const E = p.useMemo(() => {
      if (!h) return !1;
      const P = h === !0 ? {} : h;
      return {
        ...P,
        className: R(P.className, b?.arrow),
        style: { ...P.style, ...w?.arrow },
        content: P.content ?? u,
      };
    }, [h, b?.arrow, w?.arrow, u]),
    j = ({ open: P }) => {
      const k = p.Children.only(r),
        N = { 'aria-describedby': g && P ? $ : void 0 };
      return p.cloneElement(k, N);
    };
  return p.createElement(
    Ft,
    Z(
      {
        popupClassName: b?.root,
        prefixCls: a,
        popup: p.createElement(
          ut,
          { key: 'content', prefixCls: a, id: $, classNames: b, styles: w },
          g,
        ),
        action: o,
        builtinPlacements: pe,
        popupPlacement: i,
        ref: M,
        popupAlign: d,
        getPopupContainer: v,
        onOpenChange: l,
        afterOpenChange: c,
        popupMotion: f,
        defaultPopupVisible: y,
        autoDestroy: m,
        mouseLeaveDelay: s,
        popupStyle: w?.root,
        mouseEnterDelay: t,
        arrow: E,
        uniqueContainerClassName: b?.uniqueContainer,
        uniqueContainerStyle: w?.uniqueContainer,
      },
      _,
    ),
    j,
  );
});
function me(e) {
  const { sizePopupArrow: n, borderRadiusXS: o, borderRadiusOuter: t } = e,
    s = n / 2,
    a = 0,
    r = s,
    l = (t * 1) / Math.sqrt(2),
    c = s - t * (1 - 1 / Math.sqrt(2)),
    f = s - o * (1 / Math.sqrt(2)),
    i = t * (Math.sqrt(2) - 1) + o * (1 / Math.sqrt(2)),
    d = 2 * s - f,
    m = i,
    y = 2 * s - l,
    v = c,
    u = 2 * s - a,
    g = r,
    x = s * Math.sqrt(2) + t * (Math.sqrt(2) - 2),
    h = t * (Math.sqrt(2) - 1),
    b = `polygon(${h}px 100%, 50% ${h}px, ${2 * s - h}px 100%, ${h}px 100%)`,
    w = `path('M ${a} ${r} A ${t} ${t} 0 0 0 ${l} ${c} L ${f} ${i} A ${o} ${o} 0 0 1 ${d} ${m} L ${y} ${v} A ${t} ${t} 0 0 0 ${u} ${g} Z')`;
  return { arrowShadowWidth: x, arrowPath: w, arrowPolygon: b };
}
const ue = (e, n, o) => {
    const {
      sizePopupArrow: t,
      arrowPolygon: s,
      arrowPath: a,
      arrowShadowWidth: r,
      borderRadiusXS: l,
      calc: c,
    } = e;
    return {
      'pointerEvents': 'none',
      'width': t,
      'height': t,
      'overflow': 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: t,
        height: c(t).div(2).equal(),
        background: n,
        clipPath: { _multi_value_: !0, value: [s, a] },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: r,
        height: r,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${I(l)} 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: o,
        zIndex: 0,
        background: 'transparent',
      },
    };
  },
  dt = 8;
function gt(e) {
  const { contentRadius: n, limitVerticalRadius: o } = e,
    t = n > 12 ? n + 2 : 12;
  return { arrowOffsetHorizontal: t, arrowOffsetVertical: o ? dt : t };
}
function q(e, n) {
  return e ? n : {};
}
const de = (e, n, o) => {
  const {
      componentCls: t,
      boxShadowPopoverArrow: s,
      arrowOffsetVertical: a,
      arrowOffsetHorizontal: r,
      antCls: l,
    } = e,
    [c] = G(l, 'tooltip'),
    { arrowDistance: f = 0, arrowPlacement: i = { left: !0, right: !0, top: !0, bottom: !0 } } =
      o || {};
  return {
    [t]: {
      [`${t}-arrow`]: [
        {
          'position': 'absolute',
          'zIndex': 1,
          'display': 'block',
          ...ue(e, n, s),
          '&:before': { background: n },
        },
      ],
      ...q(!!i.top, {
        [[
          `&-placement-top > ${t}-arrow`,
          `&-placement-topLeft > ${t}-arrow`,
          `&-placement-topRight > ${t}-arrow`,
        ].join(',')]: { bottom: f, transform: 'translateY(100%) rotate(180deg)' },
        [`&-placement-top > ${t}-arrow`]: {
          left: { _skip_check_: !0, value: '50%' },
          transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
        },
        '&-placement-topLeft': {
          [c('arrow-offset-x')]: r,
          [`> ${t}-arrow`]: { left: { _skip_check_: !0, value: r } },
        },
        '&-placement-topRight': {
          [c('arrow-offset-x')]: `calc(100% - ${I(r)})`,
          [`> ${t}-arrow`]: { right: { _skip_check_: !0, value: r } },
        },
      }),
      ...q(!!i.bottom, {
        [[
          `&-placement-bottom > ${t}-arrow`,
          `&-placement-bottomLeft > ${t}-arrow`,
          `&-placement-bottomRight > ${t}-arrow`,
        ].join(',')]: { top: f, transform: 'translateY(-100%)' },
        [`&-placement-bottom > ${t}-arrow`]: {
          left: { _skip_check_: !0, value: '50%' },
          transform: 'translateX(-50%) translateY(-100%)',
        },
        '&-placement-bottomLeft': {
          [c('arrow-offset-x')]: r,
          [`> ${t}-arrow`]: { left: { _skip_check_: !0, value: r } },
        },
        '&-placement-bottomRight': {
          [c('arrow-offset-x')]: `calc(100% - ${I(r)})`,
          [`> ${t}-arrow`]: { right: { _skip_check_: !0, value: r } },
        },
      }),
      ...q(!!i.left, {
        [[
          `&-placement-left > ${t}-arrow`,
          `&-placement-leftTop > ${t}-arrow`,
          `&-placement-leftBottom > ${t}-arrow`,
        ].join(',')]: {
          right: { _skip_check_: !0, value: f },
          transform: 'translateX(100%) rotate(90deg)',
        },
        [`&-placement-left > ${t}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
        },
        [`&-placement-leftTop > ${t}-arrow`]: { top: a },
        [`&-placement-leftBottom > ${t}-arrow`]: { bottom: a },
      }),
      ...q(!!i.right, {
        [[
          `&-placement-right > ${t}-arrow`,
          `&-placement-rightTop > ${t}-arrow`,
          `&-placement-rightBottom > ${t}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: f },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right > ${t}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop > ${t}-arrow`]: { top: a },
        [`&-placement-rightBottom > ${t}-arrow`]: { bottom: a },
      }),
    },
  };
};
function ge(e, n, o, t) {
  if (t === !1) return { adjustX: !1, adjustY: !1 };
  const s = t && typeof t == 'object' ? t : {},
    a = {};
  switch (e) {
    case 'top':
    case 'bottom':
      ((a.shiftX = n.arrowOffsetHorizontal * 2 + o), (a.shiftY = !0), (a.adjustY = !0));
      break;
    case 'left':
    case 'right':
      ((a.shiftY = n.arrowOffsetVertical * 2 + o), (a.shiftX = !0), (a.adjustX = !0));
      break;
  }
  const r = { ...a, ...s };
  return (r.shiftX || (r.adjustX = !0), r.shiftY || (r.adjustY = !0), r);
}
const it = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  he = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  be = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function we(e) {
  const {
      arrowWidth: n,
      autoAdjustOverflow: o,
      arrowPointAtCenter: t,
      offset: s,
      borderRadius: a,
      visibleFirst: r,
    } = e,
    l = n / 2,
    c = {},
    f = gt({ contentRadius: a, limitVerticalRadius: !0 });
  return (
    Object.keys(it).forEach((i) => {
      const m = { ...((t && he[i]) || it[i]), offset: [0, 0], dynamicInset: !0 };
      switch (((c[i] = m), be.has(i) && (m.autoArrow = !1), i)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          m.offset[1] = -l - s;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          m.offset[1] = l + s;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          m.offset[0] = -l - s;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          m.offset[0] = l + s;
          break;
      }
      if (t)
        switch (i) {
          case 'topLeft':
          case 'bottomLeft':
            m.offset[0] = -f.arrowOffsetHorizontal - l;
            break;
          case 'topRight':
          case 'bottomRight':
            m.offset[0] = f.arrowOffsetHorizontal + l;
            break;
          case 'leftTop':
          case 'rightTop':
            m.offset[1] = -f.arrowOffsetHorizontal * 2 + l;
            break;
          case 'leftBottom':
          case 'rightBottom':
            m.offset[1] = f.arrowOffsetHorizontal * 2 - l;
            break;
        }
      ((m.overflow = ge(i, f, n, o)), r && (m.htmlRegion = 'visibleFirst'));
    }),
    c
  );
}
const Ce = ct.createContext(!1),
  ye = (e, n) => {
    const o = (t) => (typeof t == 'boolean' ? { show: t } : t || {});
    return ct.useMemo(() => {
      const t = o(e),
        s = o(n);
      return { ...s, ...t, show: t.show ?? s.show ?? !0 };
    }, [e, n]);
  },
  lt = '50%',
  ve = (e) => {
    const {
        calc: n,
        componentCls: o,
        tooltipMaxWidth: t,
        tooltipColor: s,
        tooltipBg: a,
        tooltipBorderRadius: r,
        zIndexPopup: l,
        controlHeight: c,
        boxShadowSecondary: f,
        paddingSM: i,
        paddingXS: d,
        arrowOffsetHorizontal: m,
        sizePopupArrow: y,
        antCls: v,
      } = e,
      [u, g] = G(v, 'tooltip'),
      x = n(r).add(y).add(m).equal(),
      b = {
        minWidth: n(r).mul(2).add(y).equal(),
        minHeight: c,
        padding: `${I(e.calc(i).div(2).equal())} ${I(d)}`,
        color: g('overlay-color', s),
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: a,
        borderRadius: r,
        boxShadow: f,
        boxSizing: 'border-box',
      },
      w = {
        [u('valid-offset-x')]: g('arrow-offset-x', 'var(--arrow-x)'),
        transformOrigin: [g('valid-offset-x', lt), `var(--arrow-y, ${lt})`].join(' '),
      };
    return [
      {
        [o]: {
          ...Gt(e),
          'position': 'absolute',
          'zIndex': l,
          'display': 'block',
          'width': 'max-content',
          'maxWidth': t,
          'visibility': 'visible',
          ...w,
          '&-hidden': { display: 'none' },
          [u('arrow-background-color')]: a,
          [`${o}-container`]: [b, Ht(e, !0)],
          [`&:has(~ ${o}-unique-container)`]: {
            [`${o}-container`]: { border: 'none', background: 'transparent', boxShadow: 'none' },
          },
          [[
            '&-placement-topLeft',
            '&-placement-topRight',
            '&-placement-bottomLeft',
            '&-placement-bottomRight',
          ].join(',')]: { minWidth: x },
          [[
            '&-placement-left',
            '&-placement-leftTop',
            '&-placement-leftBottom',
            '&-placement-right',
            '&-placement-rightTop',
            '&-placement-rightBottom',
          ].join(',')]: { [`${o}-inner`]: { borderRadius: e.min(r, dt) } },
          [`${o}-content`]: { position: 'relative' },
          ...Zt(e, (S, { darkColor: $ }) => ({
            [`&${o}-${S}`]: {
              [`${o}-container`]: { backgroundColor: $ },
              [`${o}-arrow`]: { [u('arrow-background-color')]: $ },
            },
          })),
          '&-rtl': { direction: 'rtl' },
        },
      },
      de(e, g('arrow-background-color')),
      { [`${o}-pure`]: { position: 'relative', maxWidth: 'none', margin: e.sizePopupArrow } },
      {
        [`${o}-unique-container`]: {
          ...b,
          ...w,
          'position': 'absolute',
          'zIndex': n(l).sub(1).equal(),
          '&-hidden': { display: 'none' },
          '&-visible': { transition: `all ${e.motionDurationSlow}` },
        },
      },
    ];
  },
  xe = (e) => ({
    zIndexPopup: e.zIndexPopupBase + 70,
    maxWidth: 250,
    ...gt({ contentRadius: e.borderRadius, limitVerticalRadius: !0 }),
    ...me(pt(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) })),
  }),
  ht = (e, n, o = !0) =>
    Ut(
      'Tooltip',
      (s) => {
        const { borderRadius: a, colorTextLightSolid: r, colorBgSpotlight: l, maxWidth: c } = s,
          f = pt(s, { tooltipMaxWidth: c, tooltipColor: r, tooltipBorderRadius: a, tooltipBg: l });
        return [ve(f), Xt(s, 'zoom-big-fast')];
      },
      xe,
      { resetStyle: !1, injectStyle: o },
    )(e, n),
  bt = (e, n, o) => {
    const t = Kt(o),
      [s] = G(e, 'tooltip'),
      a = R({ [`${n}-${o}`]: o && t }),
      r = {},
      l = {},
      c = Jt(o).toRgb(),
      i = (0.299 * c.r + 0.587 * c.g + 0.114 * c.b) / 255 < 0.5 ? '#FFF' : '#000';
    return (
      o &&
        !t &&
        ((r.background = o), (r[s('overlay-color')] = i), (l[s('arrow-background-color')] = o)),
      { className: a, overlayStyle: r, arrowStyle: l }
    );
  },
  $e = (e) => {
    const {
        prefixCls: n,
        className: o,
        placement: t = 'top',
        title: s,
        color: a,
        overlayInnerStyle: r,
        classNames: l,
        styles: c,
      } = e,
      { getPrefixCls: f } = p.useContext(Qt),
      i = f('tooltip', n),
      d = f(),
      m = mt(i),
      [y, v] = ht(i, m),
      u = bt(d, i, a),
      g = u.arrowStyle,
      x = p.useMemo(() => ({ container: { ...r, ...u.overlayStyle } }), [r, u.overlayStyle]),
      h = { ...e, placement: t },
      [b, w] = ft([l], [x, c], { props: h }),
      S = R(m, y, v, i, `${i}-pure`, `${i}-placement-${t}`, o, u.className);
    return p.createElement(
      'div',
      { className: S, style: g },
      p.createElement('div', { className: `${i}-arrow` }),
      p.createElement(ut, { ...e, className: y, prefixCls: i, classNames: b, styles: w }, s),
    );
  },
  Pe = p.forwardRef((e, n) => {
    const {
        prefixCls: o,
        openClassName: t,
        getTooltipContainer: s,
        color: a,
        children: r,
        afterOpenChange: l,
        arrow: c,
        destroyTooltipOnHide: f,
        destroyOnHidden: i,
        title: d,
        overlay: m,
        trigger: y,
        builtinPlacements: v,
        autoAdjustOverflow: u = !0,
        motion: g,
        getPopupContainer: x,
        placement: h = 'top',
        mouseEnterDelay: b = 0.1,
        mouseLeaveDelay: w = 0.1,
        rootClassName: S,
        styles: $,
        classNames: M,
        onOpenChange: _,
        overlayInnerStyle: E,
        overlayStyle: j,
        overlayClassName: P,
        ...k
      } = e,
      [, N] = te(),
      {
        getPopupContainer: Ct,
        getPrefixCls: K,
        direction: yt,
        className: vt,
        style: xt,
        classNames: $t,
        styles: Pt,
        arrow: Rt,
        trigger: St,
      } = ee('tooltip'),
      W = ye(c, Rt),
      V = W.show,
      J = y || St || 'hover',
      Q = x || Ct,
      tt = i ?? !!f,
      Ot = p.useContext(Ce);
    ce();
    const L = p.useRef(null),
      Nt = () => {
        L.current?.forceAlign();
      };
    p.useImperativeHandle(n, () => ({
      forceAlign: Nt,
      nativeElement: L.current?.nativeElement,
      popupElement: L.current?.popupElement,
    }));
    const [Tt, At] = Yt(e.defaultOpen ?? !1, e.open),
      X = !d && !m && d !== 0,
      _t = (at) => {
        (At(X ? !1 : at), !X && _ && _(at));
      },
      et = p.useMemo(
        () =>
          v ||
          we({
            arrowPointAtCenter: W?.pointAtCenter ?? !1,
            autoAdjustOverflow: u,
            arrowWidth: V ? N.sizePopupArrow : 0,
            borderRadius: N.borderRadius,
            offset: N.marginXXS,
            visibleFirst: !0,
          }),
        [W, v, N, V, u],
      ),
      H = p.useMemo(() => (d === 0 ? d : m || d || ''), [m, d]),
      It = p.createElement(oe, { space: !0, form: !0 }, typeof H == 'function' ? H() : H),
      Mt = { ...e, trigger: J, builtinPlacements: et, getPopupContainer: Q, destroyOnHidden: tt },
      [z, Y] = ft([$t, M], [Pt, $], { props: Mt }),
      O = K('tooltip', o),
      ot = K(),
      kt = e['data-popover-inject'];
    let D = Tt;
    ((!('open' in e) && X) || Ot) && (D = !1);
    const F = p.isValidElement(r) && !re(r) ? r : p.createElement('span', null, r),
      B = F.props,
      Lt =
        !B.className || typeof B.className == 'string'
          ? R(B.className, t || `${O}-open`)
          : B.className,
      rt = mt(O),
      [zt, Bt] = ht(O, rt, !kt),
      U = bt(ot, O, a),
      qt = U.arrowStyle,
      nt = R(rt, zt, Bt),
      Et = R(P, { [`${O}-rtl`]: yt === 'rtl' }, U.className, S, nt, vt, z.root),
      [jt, Wt] = ne('Tooltip', k.zIndex),
      st = { ...Y.container, ...E, ...U.overlayStyle },
      Vt = p.createElement(
        fe,
        {
          unique: !0,
          ...k,
          zIndex: jt,
          showArrow: V,
          placement: h,
          mouseEnterDelay: b,
          mouseLeaveDelay: w,
          prefixCls: O,
          classNames: {
            root: Et,
            container: z.container,
            arrow: z.arrow,
            uniqueContainer: R(nt, z.container),
          },
          styles: {
            root: { ...qt, ...Y.root, ...xt, ...j },
            container: st,
            uniqueContainer: st,
            arrow: Y.arrow,
          },
          ref: L,
          overlay: It,
          visible: D,
          onVisibleChange: _t,
          afterVisibleChange: l,
          arrowContent: p.createElement('span', { className: `${O}-arrow-content` }),
          motion: {
            motionName: se(
              ot,
              'zoom-big-fast',
              typeof g?.motionName == 'string' ? g?.motionName : void 0,
            ),
            motionDeadline: 1e3,
          },
          trigger: J,
          builtinPlacements: et,
          getTooltipContainer: Q,
          destroyOnHidden: tt,
        },
        D ? ae(F, { className: Lt }) : F,
      );
    return p.createElement(ie.Provider, { value: Wt }, Vt);
  }),
  wt = Pe;
wt._InternalPanelDoNotUseOrYouWillBeFired = $e;
wt.UniqueProvider = le;
export { dt as M, ut as P, wt as T, gt as a, me as b, we as c, ue as d, Ce as e, de as g, ye as u };
