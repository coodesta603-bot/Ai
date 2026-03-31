import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  di as _e,
  f as We,
  dx as V,
  gg as Ye,
  gh as qe,
  ex as Ke,
  gi as Ve,
  ei as X,
  ev as se,
  gj as Xe,
  gk as Ze,
  J as ae,
  dY as ie,
  e1 as Je,
  gl as Qe,
  gm as et,
  fW as U,
  gn as tt,
  go as ot,
  gp as nt,
  dE as K,
  gq as le,
  gr as rt,
  f$ as st,
  g0 as me,
  b6 as at,
  dA as it,
  gs as lt,
  gt as pt,
  gu as ct,
  dC as ut,
  g2 as dt,
  g4 as gt,
  dG as Y,
  eq as ft,
  dy as Q,
  gv as vt,
  el as mt,
  gw as ht,
  dU as yt,
  em as bt,
  ek as de,
  g5 as xt,
  gx as Pt,
  gy as Ct,
  gz as he,
  g7 as St,
  gA as Et,
  dB as J,
  gc as ye,
  g8 as be,
  gB as Rt,
  g9 as te,
  gf as Tt,
  fZ as wt,
  gC as Ot,
  gD as It,
  dW as Mt,
  gb as xe,
  gE as kt,
  eb as Nt,
  j as q,
  q as pe,
  gF as jt,
  gG as ce,
  aq as Pe,
  bE as Ce,
  dh as Ft,
} from './index-C8UyLGsD.js';
import { u as Bt, p as Se } from './parseTrigger-BVMOpYJv.js';
import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  u as At,
  b as Dt,
  a as Ht,
  I as Lt,
  c as Gt,
  F as zt,
  C as Ut,
} from './useOpenInteractionType-BsDcqr8f.js';
const Ee = i.jsxs('svg', {
    'aria-hidden': 'true',
    'height': '6',
    'viewBox': '0 0 12 6',
    'width': '12',
    'children': [
      i.jsx('path', { 'd': 'M0 6L6 0L12 6Z', 'data-role': 'fill' }),
      i.jsx('path', { 'd': 'M0 6L6 0L12 6', 'data-role': 'stroke' }),
    ],
  }),
  Re = (t) => {
    const e = _e();
    return typeof document > 'u' ? null : (t ?? e ?? document.body);
  },
  oe = We(({ css: t, cssVar: e }) => ({
    arrow: t`
    --lobe-popover-arrow-offset-block: 5px;
    --lobe-popover-arrow-offset-inline: 8px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 12px;
    height: 6px;

    transition: inset-inline-start var(--lobe-popover-animation-duration)
      var(--lobe-popover-animation-ease-out);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    & [data-role='fill'] {
      fill: ${e.colorBgElevated};
    }

    & [data-role='stroke'] {
      fill: none;
      stroke: ${e.colorBorder};
      stroke-width: 1px;
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-popover-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-popover-arrow-offset-block) * -1);
    }
  `,
    popup: t`
    position: relative;
    transform-origin: var(--transform-origin);

    min-width: 120px;
    max-width: var(--available-width);
    border-radius: ${e.borderRadius};

    color: ${e.colorText};

    background: ${e.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 15px 0 #00000008,
      0 2px 30px 0 #00000014,
      0 0 0 1px ${e.colorBorder} inset;

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: opacity, transform;

    &[data-layout-animation] {
      transition-property: opacity, transform, width, height;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0)
        scale(var(--lobe-popover-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-popover-animation-ease-in);
      transition-duration: var(--lobe-popover-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `,
    positioner: t`
    --lobe-popover-animation-duration: 150ms;
    --lobe-popover-animation-translate: 6px;
    --lobe-popover-animation-scale: 0.96;
    --lobe-popover-animation-ease-in: ease-in;
    --lobe-popover-animation-duration-exit: 75ms;
    --lobe-popover-animation-ease-out: ${e.motionEaseOut};
    --lobe-popover-translate-x: 0;
    --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);

    z-index: 1100;

    width: min(var(--positioner-width), var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant] {
      transition: none;
    }

    /* Fallback: never show a popover when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: var(--lobe-popover-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-popover-translate-x: var(--lobe-popover-animation-translate);
      --lobe-popover-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-popover-translate-x: calc(var(--lobe-popover-animation-translate) * -1);
      --lobe-popover-translate-y: 0;
    }
  `,
    root: t`
    user-select: none;
    position: relative;
    filter: drop-shadow(0 2px 8px rgb(0 0 0 / 12%));
  `,
    viewport: t`
    --lobe-popover-viewport-inline-padding: 12px;

    position: relative;

    overflow: clip;

    max-width: var(--available-width);
    padding-block: 12px;
    padding-inline: var(--lobe-popover-viewport-inline-padding);

    [data-previous],
    [data-current] {
      transform: translateX(0);
      opacity: 1;
      transition:
        transform var(--lobe-popover-animation-duration) var(--lobe-popover-animation-ease-out),
        opacity calc(var(--lobe-popover-animation-duration) / 2)
          var(--lobe-popover-animation-ease-out);
    }

    [data-previous] {
      position: absolute;
      inset-block-start: 12px;
      inset-inline-start: var(--lobe-popover-viewport-inline-padding);
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(-50%);
      opacity: 0;
    }
  `,
  })),
  Te = o.createContext(void 0);
function _(t) {
  const e = o.useContext(Te);
  if (e === void 0 && !t) throw new Error(V(47));
  return e;
}
function $t() {
  return {
    ...et(),
    disabled: !1,
    modal: !1,
    instantType: void 0,
    openMethod: null,
    openChangeReason: null,
    titleElementId: void 0,
    descriptionElementId: void 0,
    stickIfOpen: !0,
    nested: !1,
    openOnHover: !1,
    closeDelay: 0,
  };
}
const _t = {
  ...Ve,
  disabled: U((t) => t.disabled),
  instantType: U((t) => t.instantType),
  openMethod: U((t) => t.openMethod),
  openChangeReason: U((t) => t.openChangeReason),
  modal: U((t) => t.modal),
  stickIfOpen: U((t) => t.stickIfOpen),
  titleElementId: U((t) => t.titleElementId),
  descriptionElementId: U((t) => t.descriptionElementId),
  openOnHover: U((t) => t.openOnHover),
  closeDelay: U((t) => t.closeDelay),
};
class ne extends Ye {
  constructor(e) {
    const n = { ...$t(), ...e };
    (n.open && e?.mounted === void 0 && (n.mounted = !0),
      super(
        n,
        {
          popupRef: o.createRef(),
          backdropRef: o.createRef(),
          internalBackdropRef: o.createRef(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
          triggerFocusTargetRef: o.createRef(),
          beforeContentFocusGuardRef: o.createRef(),
          stickIfOpenTimeout: new Ke(),
          triggerElements: new qe(),
        },
        _t,
      ));
  }
  setOpen = (e, n) => {
    const l = n.reason === X,
      c = n.reason === se && n.event.detail === 0,
      a = !e && (n.reason === Xe || n.reason == null);
    if (
      ((n.preventUnmountOnClose = () => {
        this.set('preventUnmountingOnClose', !0);
      }),
      this.context.onOpenChange?.(e, n),
      n.isCanceled)
    )
      return;
    const p = {
      open: e,
      nativeEvent: n.event,
      reason: n.reason,
      nested: this.state.nested,
      triggerElement: n.trigger,
    };
    this.state.floatingRootContext.context.events?.emit('openchange', p);
    const r = () => {
      const u = { open: e, openChangeReason: n.reason },
        s = n.trigger?.id ?? null;
      ((s || e) && ((u.activeTriggerId = s), (u.activeTriggerElement = n.trigger ?? null)),
        this.update(u));
    };
    (l
      ? (this.set('stickIfOpen', !0),
        this.context.stickIfOpenTimeout.start(Ze, () => {
          this.set('stickIfOpen', !1);
        }),
        ae.flushSync(r))
      : r(),
      c || a
        ? this.set('instantType', c ? 'click' : 'dismiss')
        : n.reason === ie
          ? this.set('instantType', 'focus')
          : this.set('instantType', void 0));
  };
  static useStore(e, n) {
    const l = Je(() => e ?? new ne(n)).current;
    return (Qe(l.disposeEffect), l);
  }
  disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
}
function ge({ props: t }) {
  const {
      children: e,
      open: n,
      defaultOpen: l = !1,
      onOpenChange: c,
      onOpenChangeComplete: a,
      modal: p = !1,
      handle: f,
      triggerId: r,
      defaultTriggerId: u = null,
    } = t,
    s = ne.useStore(f?.store, { open: n ?? l, modal: p, activeTriggerId: r !== void 0 ? r : u });
  (s.useControlledProp('open', n, l), s.useControlledProp('activeTriggerId', r, u));
  const v = s.useState('open'),
    m = s.useState('positionerElement'),
    y = s.useState('payload'),
    E = s.useState('openChangeReason');
  (s.useContextCallback('onOpenChange', c), s.useContextCallback('onOpenChangeComplete', a));
  const { openMethod: d, triggerProps: h, reset: b } = At(v);
  ot(s);
  const { forceUnmount: g } = nt(v, s, () => {
    (s.update({ stickIfOpen: !0, openChangeReason: null }), b());
  });
  (Dt(v && p === !0 && E !== X && d !== 'touch', m),
    o.useEffect(() => {
      v || s.context.stickIfOpenTimeout.clear();
    }, [s, v]));
  const k = o.useCallback(
      (T) => {
        const j = K(T);
        return (
          (j.preventUnmountOnClose = () => {
            s.set('preventUnmountingOnClose', !0);
          }),
          j
        );
      },
      [s],
    ),
    P = o.useCallback(() => {
      s.setOpen(!1, k(le));
    }, [s, k]);
  o.useImperativeHandle(t.actionsRef, () => ({ unmount: g, close: P }), [g, P]);
  const R = rt({ popupStore: s, onOpenChange: s.setOpen }),
    w = st(R, {
      outsidePressEvent: { mouse: p === 'trap-focus' ? 'sloppy' : 'intentional', touch: 'sloppy' },
    }),
    S = Bt(R),
    { getReferenceProps: N, getFloatingProps: O, getTriggerProps: x } = me([w, S]),
    L = o.useMemo(() => N(h), [N, h]),
    B = o.useMemo(() => x(h), [x, h]),
    A = o.useMemo(() => O(), [O]);
  s.useSyncedValues({
    modal: p,
    openMethod: d,
    activeTriggerProps: L,
    inactiveTriggerProps: B,
    popupProps: A,
    floatingRootContext: R,
    nested: at() != null,
  });
  const D = o.useMemo(() => ({ store: s }), [s]);
  return i.jsx(Te.Provider, { value: D, children: typeof e == 'function' ? e({ payload: y }) : e });
}
function Wt(t) {
  return _(!0) ? i.jsx(ge, { props: t }) : i.jsx(tt, { children: i.jsx(ge, { props: t }) });
}
const Yt = 300,
  ee = o.forwardRef(function (e, n) {
    const {
        render: l,
        className: c,
        disabled: a = !1,
        nativeButton: p = !0,
        handle: f,
        payload: r,
        openOnHover: u = !1,
        delay: s = Yt,
        closeDelay: v = 0,
        id: m,
        ...y
      } = e,
      E = _(!0),
      d = f?.store ?? E?.store;
    if (!d) throw new Error(V(74));
    const h = it(m),
      b = d.useState('isTriggerActive', h),
      g = d.useState('floatingRootContext'),
      k = d.useState('isOpenedByTrigger', h),
      P = o.useRef(null),
      { registerTrigger: R, isMountedByThisTrigger: w } = lt(h, P, d, {
        payload: r,
        disabled: a,
        openOnHover: u,
        closeDelay: v,
      }),
      S = d.useState('openChangeReason'),
      N = d.useState('stickIfOpen'),
      O = d.useState('openMethod'),
      x = pt(g, {
        enabled: g != null && u && (O !== 'touch' || S !== se),
        mouseOnly: !0,
        move: !1,
        handleClose: ct(),
        restMs: s,
        delay: { close: v },
        triggerElementRef: P,
        isActiveTrigger: b,
      }),
      L = Ht(g, { enabled: g != null, stickIfOpen: N }),
      B = me([L]),
      A = d.useState('triggerProps', w),
      D = o.useMemo(() => ({ disabled: a, open: k }), [a, k]),
      { getButtonProps: T, buttonRef: j } = ut({ disabled: a, native: p }),
      H = o.useMemo(
        () => ({
          open(C) {
            return C && S === se ? dt.open(C) : gt.open(C);
          },
        }),
        [S],
      ),
      F = Y('button', e, {
        state: D,
        ref: [j, n, R, P],
        props: [B.getReferenceProps(), x, A, { [ft]: '', id: h }, y, T],
        stateAttributesMapping: H,
      }),
      G = o.useRef(null),
      z = Q((C) => {
        (ae.flushSync(() => {
          d.setOpen(!1, K(ie, C.nativeEvent, C.currentTarget));
        }),
          vt(G.current)?.focus());
      }),
      $ = Q((C) => {
        const I = d.select('positionerElement');
        if (I && mt(C, I)) d.context.beforeContentFocusGuardRef.current?.focus();
        else {
          ae.flushSync(() => {
            d.setOpen(!1, K(ie, C.nativeEvent, C.currentTarget));
          });
          let M = ht(P.current);
          for (; (M !== null && yt(I, M)) || M?.hasAttribute('aria-hidden'); ) {
            const W = M;
            if (((M = bt(M)), M === W)) break;
          }
          M?.focus();
        }
      });
    return b
      ? i.jsxs(o.Fragment, {
          children: [
            i.jsx(de, { ref: G, onFocus: z }),
            i.jsx(o.Fragment, { children: F }, h),
            i.jsx(de, { ref: d.context.triggerFocusTargetRef, onFocus: $ }),
          ],
        })
      : i.jsx(o.Fragment, { children: F }, h);
  }),
  we = o.createContext(void 0);
function qt() {
  const t = o.useContext(we);
  if (t === void 0) throw new Error(V(45));
  return t;
}
const Kt = o.forwardRef(function (e, n) {
    const { keepMounted: l = !1, ...c } = e,
      { store: a } = _();
    return a.useState('mounted') || l
      ? i.jsx(we.Provider, { value: l, children: i.jsx(xt, { ref: n, ...c, renderGuards: !1 }) })
      : null;
  }),
  Oe = o.createContext(void 0);
function Ie() {
  const t = o.useContext(Oe);
  if (!t) throw new Error(V(46));
  return t;
}
const Vt = o.forwardRef(function (e, n) {
    const {
        render: l,
        className: c,
        anchor: a,
        positionMethod: p = 'absolute',
        side: f = 'bottom',
        align: r = 'center',
        sideOffset: u = 0,
        alignOffset: s = 0,
        collisionBoundary: v = 'clipping-ancestors',
        collisionPadding: m = 5,
        arrowPadding: y = 5,
        sticky: E = !1,
        disableAnchorTracking: d = !1,
        collisionAvoidance: h = Pt,
        ...b
      } = e,
      { store: g } = _(),
      k = qt(),
      P = Ct(),
      R = g.useState('floatingRootContext'),
      w = g.useState('mounted'),
      S = g.useState('open'),
      N = g.useState('openChangeReason'),
      O = g.useState('activeTriggerElement'),
      x = g.useState('modal'),
      L = g.useState('positionerElement'),
      B = g.useState('instantType'),
      A = g.useState('transitionStatus'),
      D = o.useRef(null),
      T = he(L, !1, !1),
      j = St({
        anchor: a,
        floatingRootContext: R,
        positionMethod: p,
        mounted: w,
        side: f,
        sideOffset: u,
        align: r,
        alignOffset: s,
        arrowPadding: y,
        collisionBoundary: v,
        collisionPadding: m,
        sticky: E,
        disableAnchorTracking: d,
        keepMounted: k,
        nodeId: P,
        collisionAvoidance: h,
        adaptiveOrigin: Et,
      }),
      H = o.useMemo(() => {
        const I = {};
        return (
          S || (I.pointerEvents = 'none'),
          { role: 'presentation', hidden: !w, style: { ...j.positionerStyles, ...I } }
        );
      }, [S, w, j.positionerStyles]),
      F = o.useMemo(() => ({ props: H, ...j }), [H, j]),
      G = R?.select('domReferenceElement');
    J(() => {
      const I = G,
        M = D.current;
      if ((I && (D.current = I), M && I && I !== M)) {
        g.set('instantType', void 0);
        const W = new AbortController();
        return (
          T(() => {
            g.set('instantType', 'trigger-change');
          }, W.signal),
          () => {
            W.abort();
          }
        );
      }
    }, [G, T, g]);
    const z = o.useMemo(
        () => ({ open: S, side: F.side, align: F.align, anchorHidden: F.anchorHidden, instant: B }),
        [S, F.side, F.align, F.anchorHidden, B],
      ),
      $ = o.useCallback(
        (I) => {
          g.set('positionerElement', I);
        },
        [g],
      ),
      C = Y('div', e, {
        state: z,
        props: [F.props, ye(A), b],
        ref: [n, $],
        stateAttributesMapping: te,
      });
    return i.jsxs(Oe.Provider, {
      value: F,
      children: [
        w &&
          x === !0 &&
          N !== X &&
          i.jsx(Lt, { ref: g.context.internalBackdropRef, inert: be(!S), cutout: O }),
        i.jsx(Rt, { id: P, children: C }),
      ],
    });
  }),
  Xt = { ...te, ...xe },
  Zt = o.forwardRef(function (e, n) {
    const { className: l, render: c, initialFocus: a, finalFocus: p, ...f } = e,
      { store: r } = _(),
      u = Ie(),
      s = Gt() != null,
      v = Tt(),
      m = r.useState('open'),
      y = r.useState('openMethod'),
      E = r.useState('instantType'),
      d = r.useState('transitionStatus'),
      h = r.useState('popupProps'),
      b = r.useState('titleElementId'),
      g = r.useState('descriptionElementId'),
      k = r.useState('modal'),
      P = r.useState('mounted'),
      R = r.useState('openChangeReason'),
      w = r.useState('popupElement'),
      S = r.useState('payload'),
      N = r.useState('positionerElement'),
      O = r.useState('activeTriggerElement'),
      x = r.useState('floatingRootContext');
    wt({
      open: m,
      ref: r.context.popupRef,
      onComplete() {
        m && r.context.onOpenChangeComplete?.(!0);
      },
    });
    const L = r.useState('disabled'),
      B = r.useState('openOnHover'),
      A = r.useState('closeDelay');
    Ot(x, { enabled: B && !L, closeDelay: A });
    function D(C) {
      return C === 'touch' ? r.context.popupRef.current : !0;
    }
    const T = a === void 0 ? D : a,
      j = o.useMemo(
        () => ({ open: m, side: u.side, align: u.align, instant: E, transitionStatus: d }),
        [m, u.side, u.align, E, d],
      ),
      H = o.useCallback(
        (C) => {
          r.set('popupElement', C);
        },
        [r],
      );
    function F() {
      x.context.events.emit('measure-layout');
    }
    function G(C, I) {
      x.context.events.emit('measure-layout-complete', {
        previousDimensions: C,
        nextDimensions: I,
      });
    }
    const z = o.useCallback(() => r.context.triggerElements.size > 1, [r]);
    It({
      popupElement: w,
      positionerElement: N,
      mounted: P,
      content: S,
      enabled: z,
      onMeasureLayout: F,
      onMeasureLayoutComplete: G,
      side: u.side,
      direction: v,
    });
    const $ = Y('div', e, {
      state: j,
      ref: [n, r.context.popupRef, H],
      props: [
        h,
        {
          'aria-labelledby': b,
          'aria-describedby': g,
          'onKeyDown'(C) {
            s && Ut.has(C.key) && C.stopPropagation();
          },
        },
        ye(d),
        f,
      ],
      stateAttributesMapping: Xt,
    });
    return i.jsx(zt, {
      context: x,
      openInteractionType: y,
      modal: k === 'trap-focus',
      disabled: !P || R === X,
      initialFocus: T,
      returnFocus: p,
      restoreFocus: 'popup',
      previousFocusableElement: Mt(O) ? O : void 0,
      nextFocusableElement: r.context.triggerFocusTargetRef,
      beforeContentFocusGuardRef: r.context.beforeContentFocusGuardRef,
      children: $,
    });
  }),
  Jt = o.forwardRef(function (e, n) {
    const { className: l, render: c, ...a } = e,
      { store: p } = _(),
      f = p.useState('open'),
      { arrowRef: r, side: u, align: s, arrowUncentered: v, arrowStyles: m } = Ie(),
      y = o.useMemo(() => ({ open: f, side: u, align: s, uncentered: v }), [f, u, s, v]);
    return Y('div', e, {
      state: y,
      ref: [n, r],
      props: [{ 'style': m, 'aria-hidden': !0 }, a],
      stateAttributesMapping: te,
    });
  }),
  Qt = { ...te, ...xe },
  Me = o.forwardRef(function (e, n) {
    const { className: l, render: c, ...a } = e,
      { store: p } = _(),
      f = p.useState('open'),
      r = p.useState('mounted'),
      u = p.useState('transitionStatus'),
      s = p.useState('openChangeReason'),
      v = o.useMemo(() => ({ open: f, transitionStatus: u }), [f, u]);
    return Y('div', e, {
      state: v,
      ref: [p.context.backdropRef, n],
      props: [
        {
          role: 'presentation',
          hidden: !r,
          style: {
            pointerEvents: s === X ? 'none' : void 0,
            userSelect: 'none',
            WebkitUserSelect: 'none',
          },
        },
        a,
      ],
      stateAttributesMapping: Qt,
    });
  });
let fe = (function (t) {
  return ((t.popupWidth = '--popup-width'), (t.popupHeight = '--popup-height'), t);
})({});
const eo = { activationDirection: (t) => (t ? { 'data-activation-direction': t } : null) },
  to = o.forwardRef(function (e, n) {
    const { render: l, className: c, children: a, ...p } = e,
      { store: f } = _(),
      r = f.useState('activeTriggerElement'),
      u = f.useState('open'),
      s = f.useState('floatingRootContext'),
      v = kt(u ? r : null),
      m = o.useRef(null),
      [y, E] = o.useState(null),
      [d, h] = o.useState(null),
      b = o.useRef(null),
      g = o.useRef(null),
      k = he(b, !0, !1),
      P = Nt(),
      [R, w] = o.useState(null),
      [S, N] = o.useState(!1);
    J(() => {
      const T = b.current;
      if (!T) return;
      const j = document.createElement('div');
      for (const H of Array.from(T.childNodes)) j.appendChild(H.cloneNode(!0));
      m.current = j;
    });
    const O = Q(() => {
        (b.current?.style.setProperty('animation', 'none'),
          b.current?.style.setProperty('transition', 'none'),
          g.current?.style.setProperty('display', 'none'));
      }),
      x = Q((T) => {
        (b.current?.style.removeProperty('animation'),
          b.current?.style.removeProperty('transition'),
          g.current?.style.removeProperty('display'),
          R || w(T.previousDimensions));
      });
    o.useEffect(
      () => (
        s.context.events.on('measure-layout', O),
        s.context.events.on('measure-layout-complete', x),
        () => {
          (s.context.events.off('measure-layout', O),
            s.context.events.off('measure-layout-complete', x));
        }
      ),
      [s, O, x],
    );
    const L = o.useRef(null);
    J(() => {
      if (r && v && r !== v && L.current !== r && m.current) {
        (E(m.current), N(!0));
        const T = no(v, r);
        (h(T),
          P.request(() => {
            P.request(() => {
              (N(!1),
                k(() => {
                  (E(null), w(null), (m.current = null));
                }));
            });
          }),
          (L.current = r));
      }
    }, [r, v, y, k, P]);
    const B = y != null;
    let A;
    (B
      ? (A = i.jsxs(o.Fragment, {
          children: [
            i.jsx(
              'div',
              {
                'data-previous': !0,
                'inert': be(!0),
                'ref': g,
                'style': {
                  [fe.popupWidth]: `${R?.width}px`,
                  [fe.popupHeight]: `${R?.height}px`,
                  position: 'absolute',
                },
                'data-ending-style': S ? void 0 : '',
              },
              'previous',
            ),
            i.jsx(
              'div',
              {
                'data-current': !0,
                'ref': b,
                'data-starting-style': S ? '' : void 0,
                'children': a,
              },
              'current',
            ),
          ],
        }))
      : (A = i.jsx('div', { 'data-current': !0, 'ref': b, 'children': a }, 'current')),
      J(() => {
        const T = g.current;
        !T || !y || T.replaceChildren(...Array.from(y.childNodes));
      }, [y]));
    const D = o.useMemo(() => ({ activationDirection: oo(d), transitioning: B }), [d, B]);
    return Y('div', e, {
      state: D,
      ref: n,
      props: [p, { children: A }],
      stateAttributesMapping: eo,
    });
  });
function oo(t) {
  if (t) return `${ve(t.horizontal, 5, 'right', 'left')} ${ve(t.vertical, 5, 'down', 'up')}`;
}
function ve(t, e, n, l) {
  return t > e ? n : t < -e ? l : '';
}
function no(t, e) {
  const n = t.getBoundingClientRect(),
    l = e.getBoundingClientRect(),
    c = { x: n.left + n.width / 2, y: n.top + n.height / 2 },
    a = { x: l.left + l.width / 2, y: l.top + l.height / 2 };
  return { horizontal: a.x - c.x, vertical: a.y - c.y };
}
class ro {
  constructor() {
    this.store = new ne();
  }
  open(e) {
    const n = e ? (this.store.context.triggerElements.getById(e) ?? void 0) : void 0;
    if (e && !n) throw new Error(V(80, e));
    this.store.setOpen(!0, K(le, void 0, n));
  }
  close() {
    this.store.setOpen(!1, K(le, void 0, void 0));
  }
  get isOpen() {
    return this.store.state.open;
  }
}
function so() {
  return new ro();
}
const ao = Wt,
  ho = Me,
  ke = ({ children: t, className: e, nativeButton: n, ref: l, ...c }) => {
    const { isNativeButtonTriggerElement: a, resolvedNativeButton: p } = ce({
      children: t,
      nativeButton: n,
    });
    return o.isValidElement(t)
      ? i.jsx(ee, {
          ...c,
          nativeButton: p,
          render: (f, r) => {
            const u = (() => {
                if (a) return f;
                const { type: y, ref: E, ...d } = f;
                return d;
              })(),
              s = Pe(t.props, u),
              v = typeof s.className == 'function' ? s.className(r) : s.className,
              m = typeof e == 'function' ? e(r) : e;
            return o.cloneElement(t, { ...s, className: q(v, m), ref: Ce([t.ref, f.ref, l]) });
          },
        })
      : i.jsx(ee, { ...c, className: e, nativeButton: p, ref: l, children: t });
  };
ke.displayName = 'PopoverTriggerElement';
const Ne = ({ container: t, root: e, children: n, ...l }) => {
  const c = Re(e),
    a = t ?? c;
  return a ? i.jsx(Kt, { container: a, ...l, children: n }) : null;
};
Ne.displayName = 'PopoverPortal';
const je = ({
  children: t,
  className: e,
  hoverTrigger: n,
  placement: l,
  align: c,
  side: a,
  sideOffset: p,
  ...f
}) => {
  const r = l ? pe[l] : void 0,
    [u, s] = o.useState(null);
  return i.jsx(Vt, {
    'align': c ?? r?.align ?? 'center',
    'data-hover-trigger': n || void 0,
    'data-placement': l,
    'ref': s,
    'side': a ?? r?.side ?? 'bottom',
    'sideOffset': p ?? 6,
    'className': (v) => q(oe.positioner, typeof e == 'function' ? e(v) : e),
    ...f,
    'children': i.jsx(jt, { value: u, children: t }),
  });
};
je.displayName = 'PopoverPositioner';
const Fe = ({ className: t, ...e }) =>
  i.jsx(Zt, { className: (n) => q(oe.popup, typeof t == 'function' ? t(n) : t), ...e });
Fe.displayName = 'PopoverPopup';
const Be = ({ className: t, children: e, ...n }) =>
  i.jsx(Jt, {
    className: (l) => q(oe.arrow, typeof t == 'function' ? t(l) : t),
    ...n,
    children: e ?? Ee,
  });
Be.displayName = 'PopoverArrow';
const Ae = ({ className: t, ...e }) =>
  i.jsx(to, { className: (n) => q(oe.viewport, typeof t == 'function' ? t(n) : t), ...e });
Ae.displayName = 'PopoverViewport';
const io = () => {},
  De = o.createContext({ close: io }),
  lo = o.memo(({ children: t, value: e }) => i.jsx(De, { value: e, children: t })),
  yo = () => o.use(De),
  He = o.createContext(null),
  po = o.createContext(null),
  co = (t) => {
    const e = o.useContext(po),
      {
        arrow: n,
        trigger: l,
        placement: c,
        className: a,
        classNames: p,
        styles: f,
        onOpenChange: r,
        content: u,
        closeDelay: s,
        disabled: v,
        getPopupContainer: m,
        mouseEnterDelay: y,
        mouseLeaveDelay: E,
        nativeButton: d,
        openDelay: h,
        zIndex: b,
        positionerProps: g,
        triggerProps: k,
        popupProps: P,
        backdropProps: R,
      } = t,
      w = o.useMemo(() => {
        if (!(!e?.className && !a)) return [e?.className, a].filter(Boolean).join(' ');
      }, [a, e?.className]),
      S = o.useMemo(() => {
        if (!(!e?.classNames && !p)) return { ...e?.classNames, ...p };
      }, [p, e?.classNames]),
      N = o.useMemo(() => {
        if (!(!e?.styles && !f)) return { ...e?.styles, ...f };
      }, [e?.styles, f]),
      O = o.useMemo(() => {
        if (!(!e?.onOpenChange && !r))
          return (x) => {
            (e?.onOpenChange?.(x), r?.(x));
          };
      }, [r, e?.onOpenChange]);
    return o.useMemo(
      () => ({
        arrow: n ?? e?.arrow ?? !1,
        backdropProps: R ?? e?.backdropProps,
        className: w,
        classNames: S,
        closeDelay: s ?? e?.closeDelay,
        content: u,
        disabled: v ?? e?.disabled,
        getPopupContainer: m ?? e?.getPopupContainer,
        mouseEnterDelay: y ?? e?.mouseEnterDelay,
        mouseLeaveDelay: E ?? e?.mouseLeaveDelay,
        nativeButton: d ?? e?.nativeButton,
        onOpenChange: O,
        openDelay: h ?? e?.openDelay,
        placement: c ?? e?.placement ?? 'top',
        popupProps: P ?? e?.popupProps,
        positionerProps: g ?? e?.positionerProps,
        styles: N,
        trigger: l ?? e?.trigger ?? 'hover',
        triggerProps: k ?? e?.triggerProps,
        zIndex: b ?? e?.zIndex,
      }),
      [
        n,
        R,
        s,
        u,
        v,
        m,
        w,
        S,
        O,
        N,
        y,
        E,
        d,
        h,
        c,
        P,
        g,
        e?.arrow,
        e?.backdropProps,
        e?.closeDelay,
        e?.disabled,
        e?.getPopupContainer,
        e?.mouseEnterDelay,
        e?.mouseLeaveDelay,
        e?.nativeButton,
        e?.openDelay,
        e?.placement,
        e?.popupProps,
        e?.positionerProps,
        e?.trigger,
        e?.triggerProps,
        e?.zIndex,
        l,
        k,
        b,
      ],
    );
  },
  Le = ({ children: t, ref: e, ...n }) => {
    const l = o.use(He),
      c = co(n),
      { openOnHover: a } = o.useMemo(() => Se(c.trigger ?? 'hover'), [c.trigger]),
      p = c.openDelay ?? (c.mouseEnterDelay ?? 0.1) * 1e3,
      f = c.closeDelay ?? (c.mouseLeaveDelay ?? 0.1) * 1e3,
      r = !!c.disabled,
      { isNativeButtonTriggerElement: u, resolvedNativeButton: s } = ce({
        children: t,
        nativeButton: c.nativeButton,
      });
    if (!c.content) return t;
    const v = { closeDelay: f, delay: p, disabled: r, openOnHover: a && !r, payload: c },
      m = c.classNames?.trigger;
    return o.isValidElement(t)
      ? i.jsx(ee, {
          handle: l ?? void 0,
          ...v,
          nativeButton: s,
          render: (y) => {
            const E = (() => {
                if (u) return y;
                const { type: h, ref: b, ...g } = y;
                return g;
              })(),
              d = Pe(t.props, E);
            return o.cloneElement(t, {
              ...d,
              className: q(d.className, m),
              ref: Ce([t.ref, y.ref, e]),
            });
          },
        })
      : i.jsx(ee, {
          handle: l ?? void 0,
          ...v,
          className: m,
          nativeButton: s,
          ref: e,
          children: t,
        });
  };
Le.displayName = 'PopoverInGroup';
const Ge = o.memo(
  ({
    children: t,
    content: e,
    arrow: n = !1,
    trigger: l = 'hover',
    placement: c = 'top',
    styles: a,
    classNames: p,
    className: f,
    open: r,
    onOpenChange: u,
    defaultOpen: s = !1,
    mouseEnterDelay: v = 0.1,
    mouseLeaveDelay: m = 0.1,
    openDelay: y,
    closeDelay: E,
    getPopupContainer: d,
    disabled: h = !1,
    zIndex: b,
    nativeButton: g,
    ref: k,
    positionerProps: P,
    triggerProps: R,
    popupProps: w,
    backdropProps: S,
    portalProps: N,
  }) => {
    const O = Ft(),
      x = o.useMemo(() => so(), []),
      [L, B] = o.useState(!!s),
      A = o.useCallback(() => {
        x.close();
      }, [x]),
      D = o.useMemo(() => ({ close: A }), [A]),
      T = h ? !1 : (r ?? L),
      j = o.useCallback(
        (re) => {
          (h && re) || (u?.(re), r === void 0 && B(re));
        },
        [u, r, h],
      ),
      { openOnHover: H } = o.useMemo(() => Se(l), [l]),
      F = y ?? v * 1e3,
      G = E ?? m * 1e3,
      z = pe[c] ?? pe.top,
      $ = n ? 10 : 6,
      C = Re(),
      { resolvedNativeButton: I } = ce({ children: t, nativeButton: g }),
      M = o.useMemo(
        () => ({
          arrow: p?.arrow,
          popup: f,
          positioner: p?.root,
          trigger: p?.trigger,
          viewport: p?.content,
        }),
        [f, p?.arrow, p?.content, p?.root, p?.trigger],
      ),
      W = o.useMemo(
        () =>
          i.jsx(ke, {
            handle: x,
            closeDelay: G,
            delay: F,
            disabled: h,
            openOnHover: H && !h,
            ...R,
            className: M.trigger,
            nativeButton: I,
            ref: k,
            children: t,
          }),
        [t, h, H, x, k, M.trigger, I, F, G, R],
      ),
      Ue = o.useMemo(() => {}, [d, O]),
      Z = o.useMemo(
        () => ({
          arrow: a?.arrow,
          positioner: { ...a?.root, zIndex: b ?? 1100 },
          viewport: a?.content,
        }),
        [a?.arrow, a?.content, a?.root, b],
      ),
      $e = o.useMemo(
        () =>
          i.jsx(je, {
            align: z.align,
            className: M.positioner,
            hoverTrigger: H,
            placement: c,
            side: z.side,
            sideOffset: $,
            style: Z.positioner,
            ...P,
            children: i.jsxs(Fe, {
              className: M.popup,
              ...w,
              children: [
                n && i.jsx(Be, { className: M.arrow, style: Z.arrow, children: Ee }),
                i.jsx(Ae, {
                  className: M.viewport,
                  style: Z.viewport,
                  children: i.jsx(lo, { value: D, children: e }),
                }),
              ],
            }),
          }),
        [n, e, D, H, c, z.align, z.side, w, P, M, $, Z],
      );
    if (!e) return t;
    const ue = Ue ?? C;
    return i.jsxs(ao, {
      defaultOpen: s,
      handle: x,
      open: T,
      onOpenChange: j,
      children: [
        W,
        S && i.jsx(Me, { ...S }),
        ue ? i.jsx(Ne, { container: ue, ...N, children: $e }) : null,
      ],
    });
  },
);
Ge.displayName = 'PopoverStandalone';
const ze = (t) =>
  o.use(He) && t.open === void 0 && t.defaultOpen === void 0 && !t.standalone
    ? i.jsx(Le, { ...t })
    : i.jsx(Ge, { ...t });
ze.displayName = 'Popover';
var bo = ze;
export {
  He as P,
  po as a,
  Wt as b,
  so as c,
  lo as d,
  je as e,
  Fe as f,
  Be as g,
  Ee as h,
  Ae as i,
  Ne as j,
  bo as k,
  yo as l,
  ao as m,
  ho as n,
  ke as o,
  Re as u,
};
