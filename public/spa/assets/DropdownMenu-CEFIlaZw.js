import {
  dx as ce,
  dC as lt,
  aq as Ie,
  gd as He,
  dz as dt,
  gb as pt,
  dA as xe,
  dy as he,
  dE as ie,
  dG as Q,
  fX as an,
  fZ as ft,
  dB as Re,
  gC as cn,
  ej as un,
  g9 as gt,
  gc as ln,
  g5 as dn,
  g6 as pn,
  gx as fn,
  g7 as gn,
  ei as be,
  g8 as mn,
  gB as hn,
  gZ as ge,
  gg as bn,
  gh as xn,
  gi as vn,
  fW as H,
  e1 as Cn,
  b7 as Se,
  g_ as mt,
  gm as yn,
  gy as ht,
  b6 as bt,
  b4 as Mn,
  go as In,
  gp as Rn,
  d$ as Te,
  g$ as nt,
  ev as Tn,
  J as Ne,
  dY as De,
  dV as Sn,
  gj as Pn,
  gq as En,
  gr as kn,
  f$ as wn,
  gf as On,
  e0 as je,
  h0 as Nn,
  g0 as Ue,
  eb as Dn,
  gn as jn,
  h1 as xt,
  dW as An,
  h2 as Fn,
  h3 as Bn,
  ey as Ae,
  dQ as Ln,
  gs as Hn,
  dU as Oe,
  g3 as Un,
  gt as vt,
  gu as Ct,
  h4 as Gn,
  gv as _n,
  el as $n,
  gw as Kn,
  em as Vn,
  g2 as ot,
  ek as st,
  gk as Yn,
  h5 as qn,
  g4 as zn,
  j as K,
  di as Wn,
  q as Xn,
  gF as Jn,
  gG as yt,
  ap as rt,
  bE as Zn,
  I as Qn,
} from './index-C8UyLGsD.js';
import {
  c as Pe,
  u as eo,
  C as to,
  a as no,
  b as oo,
  g as so,
  s as F,
} from './getPseudoElementBounds-D4ZSmtDt.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as c, c as at } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as ro } from './index-CaOmqfDS.js';
import {
  c as ao,
  F as io,
  C as co,
  I as uo,
  u as lo,
  b as po,
  a as Mt,
} from './useOpenInteractionType-BsDcqr8f.js';
import { u as fo, p as go } from './parseTrigger-BVMOpYJv.js';
import { dG as mo, be as ho } from '../vendor/vendor-icons-BHMUH78i.js';
const It = o.createContext(void 0);
function Ee(e) {
  const t = o.useContext(It);
  if (t === void 0 && !e) throw new Error(ce(33));
  return t;
}
const Rt = o.createContext(void 0);
function te(e) {
  const t = o.useContext(Rt);
  if (t === void 0 && !e) throw new Error(ce(36));
  return t;
}
const bo = o.createContext(void 0);
function ke(e = !0) {
  const t = o.useContext(bo);
  if (t === void 0 && !e) throw new Error(ce(25));
  return t;
}
const Tt = o.createContext(void 0);
function xo() {
  const e = o.useContext(Tt);
  if (e === void 0) throw new Error(ce(30));
  return e;
}
const St = { type: 'regular-item' };
function Ge(e) {
  const {
      closeOnClick: t,
      disabled: n = !1,
      highlighted: i,
      id: p,
      store: d,
      nativeButton: h,
      itemMetadata: a,
      nodeId: l,
    } = e,
    f = o.useRef(null),
    g = ke(!0),
    b = g !== void 0,
    { events: I } = d.useState('floatingTreeRoot'),
    { getButtonProps: R, buttonRef: M } = lt({ disabled: n, focusableWhenDisabled: !0, native: h }),
    r = o.useCallback(
      (m) =>
        Ie(
          {
            id: p,
            role: 'menuitem',
            tabIndex: i ? 0 : -1,
            onMouseMove(u) {
              l && I.emit('itemhover', { nodeId: l, target: u.currentTarget });
            },
            onMouseEnter() {
              a.type === 'submenu-trigger' && a.setActive();
            },
            onKeyUp(u) {
              u.key === ' ' && d.context.typingRef.current && u.preventBaseUIHandler();
            },
            onClick(u) {
              t && I.emit('close', { domEvent: u, reason: He });
            },
            onMouseUp(u) {
              if (g) {
                const v = g.initialCursorPointRef.current;
                if (
                  ((g.initialCursorPointRef.current = null),
                  b && v && Math.abs(u.clientX - v.x) <= 1 && Math.abs(u.clientY - v.y) <= 1)
                )
                  return;
              }
              f.current &&
                d.context.allowMouseUpTriggerRef.current &&
                (!b || u.button === 2) &&
                a.type === 'regular-item' &&
                f.current.click();
            },
          },
          m,
          R,
        ),
      [p, i, R, t, I, d, b, g, a, l],
    ),
    x = dt(f, M);
  return o.useMemo(() => ({ getItemProps: r, itemRef: x }), [r, x]);
}
let it = (function (e) {
  return (
    (e.checked = 'data-checked'),
    (e.unchecked = 'data-unchecked'),
    (e.disabled = 'data-disabled'),
    (e.highlighted = 'data-highlighted'),
    e
  );
})({});
const Pt = {
    checked(e) {
      return e ? { [it.checked]: '' } : { [it.unchecked]: '' };
    },
    ...pt,
  },
  vo = o.forwardRef(function (t, n) {
    const {
        render: i,
        className: p,
        id: d,
        label: h,
        nativeButton: a = !1,
        disabled: l = !1,
        closeOnClick: f = !1,
        checked: g,
        defaultChecked: b,
        onCheckedChange: I,
        ...R
      } = t,
      M = Pe({ label: h }),
      r = Ee(!0),
      x = xe(d),
      { store: m } = te(),
      u = m.useState('isActive', M.index),
      v = m.useState('itemProps'),
      [T, s] = eo({ controlled: g, default: b ?? !1, name: 'MenuCheckboxItem', state: 'checked' }),
      { getItemProps: U, itemRef: S } = Ge({
        closeOnClick: f,
        disabled: l,
        highlighted: u,
        id: x,
        store: m,
        nativeButton: a,
        nodeId: r?.nodeId,
        itemMetadata: St,
      }),
      N = o.useMemo(() => ({ disabled: l, highlighted: u, checked: T }), [l, u, T]),
      C = he((j) => {
        const k = { ...ie(He, j.nativeEvent), preventUnmountOnClose: () => {} };
        (I?.(!T, k), !k.isCanceled && s((w) => !w));
      }),
      V = Q('div', t, {
        state: N,
        stateAttributesMapping: Pt,
        props: [v, { 'role': 'menuitemcheckbox', 'aria-checked': T, 'onClick': C }, R, U],
        ref: [S, n, M.ref],
      });
    return c.jsx(Tt.Provider, { value: N, children: V });
  }),
  Co = o.forwardRef(function (t, n) {
    const { render: i, className: p, keepMounted: d = !1, ...h } = t,
      a = xo(),
      l = o.useRef(null),
      { transitionStatus: f, setMounted: g } = an(a.checked);
    ft({
      open: a.checked,
      ref: l,
      onComplete() {
        a.checked || g(!1);
      },
    });
    const b = o.useMemo(
      () => ({
        checked: a.checked,
        disabled: a.disabled,
        highlighted: a.highlighted,
        transitionStatus: f,
      }),
      [a.checked, a.disabled, a.highlighted, f],
    );
    return Q('span', t, {
      state: b,
      ref: [n, l],
      stateAttributesMapping: Pt,
      props: { 'aria-hidden': !0, ...h },
      enabled: d || a.checked,
    });
  }),
  Et = o.createContext(void 0);
function yo() {
  const e = o.useContext(Et);
  if (e === void 0) throw new Error(ce(31));
  return e;
}
const Mo = o.forwardRef(function (t, n) {
    const { render: i, className: p, ...d } = t,
      [h, a] = o.useState(void 0),
      l = o.useMemo(() => ({ setLabelId: a }), [a]),
      f = Q('div', t, { ref: n, props: { 'role': 'group', 'aria-labelledby': h, ...d } });
    return c.jsx(Et.Provider, { value: l, children: f });
  }),
  Io = o.forwardRef(function (t, n) {
    const { className: i, render: p, id: d, ...h } = t,
      a = xe(d),
      { setLabelId: l } = yo();
    return (
      Re(
        () => (
          l(a),
          () => {
            l(void 0);
          }
        ),
        [l, a],
      ),
      Q('div', t, { ref: n, props: { id: a, role: 'presentation', ...h } })
    );
  }),
  kt = o.forwardRef(function (t, n) {
    const {
        render: i,
        className: p,
        id: d,
        label: h,
        nativeButton: a = !1,
        disabled: l = !1,
        closeOnClick: f = !0,
        ...g
      } = t,
      b = Pe({ label: h }),
      I = Ee(!0),
      R = xe(d),
      { store: M } = te(),
      r = M.useState('isActive', b.index),
      x = M.useState('itemProps'),
      { getItemProps: m, itemRef: u } = Ge({
        closeOnClick: f,
        disabled: l,
        highlighted: r,
        id: R,
        store: M,
        nativeButton: a,
        nodeId: I?.nodeId,
        itemMetadata: St,
      }),
      v = o.useMemo(() => ({ disabled: l, highlighted: r }), [l, r]);
    return Q('div', t, { state: v, props: [x, g, m], ref: [u, n, b.ref] });
  }),
  Ro = { ...gt, ...pt },
  To = o.forwardRef(function (t, n) {
    const { render: i, className: p, finalFocus: d, ...h } = t,
      { store: a } = te(),
      { side: l, align: f } = Ee(),
      g = ao() != null,
      b = a.useState('open'),
      I = a.useState('transitionStatus'),
      R = a.useState('popupProps'),
      M = a.useState('mounted'),
      r = a.useState('instantType'),
      x = a.useState('activeTriggerElement'),
      m = a.useState('parent'),
      u = a.useState('lastOpenChangeReason'),
      v = a.useState('rootId'),
      T = a.useState('floatingRootContext'),
      s = a.useState('floatingTreeRoot'),
      U = a.useState('closeDelay'),
      S = a.useState('activeTriggerElement');
    (ft({
      open: b,
      ref: a.context.popupRef,
      onComplete() {
        b && a.context.onOpenChangeComplete?.(!0);
      },
    }),
      o.useEffect(() => {
        function w(A) {
          a.setOpen(!1, ie(A.reason, A.domEvent));
        }
        return (
          s.events.on('close', w),
          () => {
            s.events.off('close', w);
          }
        );
      }, [s.events, a]));
    const N = a.useState('hoverEnabled'),
      C = a.useState('disabled');
    cn(T, { enabled: N && !C && m.type !== 'context-menu' && m.type !== 'menubar', closeDelay: U });
    const V = o.useMemo(
        () => ({
          transitionStatus: I,
          side: l,
          align: f,
          open: b,
          nested: m.type === 'menu',
          instant: r,
        }),
        [I, l, f, b, m.type, r],
      ),
      j = Q('div', t, {
        state: V,
        ref: [n, a.context.popupRef],
        stateAttributesMapping: Ro,
        props: [
          R,
          {
            onKeyDown(w) {
              g && co.has(w.key) && w.stopPropagation();
            },
          },
          ln(I),
          h,
          { 'data-rootownerid': v },
        ],
      });
    let k = m.type === void 0 || m.type === 'context-menu';
    return (
      (x || (m.type === 'menubar' && u !== un)) && (k = !0),
      c.jsx(io, {
        context: T,
        modal: !1,
        disabled: !M,
        returnFocus: d === void 0 ? k : d,
        initialFocus: m.type !== 'menu',
        restoreFocus: !0,
        externalTree: m.type !== 'menubar' ? s : void 0,
        previousFocusableElement: S,
        nextFocusableElement: m.type === void 0 ? a.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef:
          m.type === void 0 ? a.context.beforeContentFocusGuardRef : void 0,
        children: j,
      })
    );
  }),
  wt = o.createContext(void 0);
function So() {
  const e = o.useContext(wt);
  if (e === void 0) throw new Error(ce(32));
  return e;
}
const Po = o.forwardRef(function (t, n) {
    const { keepMounted: i = !1, ...p } = t,
      { store: d } = te();
    return d.useState('mounted') || i
      ? c.jsx(wt.Provider, { value: i, children: c.jsx(dn, { ref: n, ...p }) })
      : null;
  }),
  Eo = o.forwardRef(function (t, n) {
    const {
        anchor: i,
        positionMethod: p = 'absolute',
        className: d,
        render: h,
        side: a,
        align: l,
        sideOffset: f = 0,
        alignOffset: g = 0,
        collisionBoundary: b = 'clipping-ancestors',
        collisionPadding: I = 5,
        arrowPadding: R = 5,
        sticky: M = !1,
        disableAnchorTracking: r = !1,
        collisionAvoidance: x = pn,
        ...m
      } = t,
      { store: u } = te(),
      v = So(),
      T = ke(!0),
      s = u.useState('parent'),
      U = u.useState('floatingRootContext'),
      S = u.useState('floatingTreeRoot'),
      N = u.useState('mounted'),
      C = u.useState('open'),
      V = u.useState('modal'),
      j = u.useState('activeTriggerElement'),
      k = u.useState('lastOpenChangeReason'),
      w = u.useState('floatingNodeId'),
      A = u.useState('floatingParentNodeId');
    let se = i,
      O = f,
      G = g,
      J = l,
      ee = x;
    s.type === 'context-menu' &&
      ((se = i ?? s.context?.anchor),
      (J = J ?? 'start'),
      !a && J !== 'center' && ((G = t.alignOffset ?? 2), (O = t.sideOffset ?? -5)));
    let _ = a,
      W = J;
    s.type === 'menu'
      ? ((_ = _ ?? 'inline-end'), (W = W ?? 'start'), (ee = t.collisionAvoidance ?? fn))
      : s.type === 'menubar' && ((_ = _ ?? 'bottom'), (W = W ?? 'start'));
    const q = s.type === 'context-menu',
      P = gn({
        anchor: se,
        floatingRootContext: U,
        positionMethod: T ? 'fixed' : p,
        mounted: N,
        side: _,
        sideOffset: O,
        align: W,
        alignOffset: G,
        arrowPadding: q ? 0 : R,
        collisionBoundary: b,
        collisionPadding: I,
        sticky: M,
        nodeId: w,
        keepMounted: v,
        disableAnchorTracking: r,
        collisionAvoidance: ee,
        shiftCrossAxis: q,
        externalTree: S,
      }),
      ne = o.useMemo(() => {
        const B = {};
        return (
          C || (B.pointerEvents = 'none'),
          { role: 'presentation', hidden: !N, style: { ...P.positionerStyles, ...B } }
        );
      }, [C, N, P.positionerStyles]);
    (o.useEffect(() => {
      function B(D) {
        D.open
          ? (D.parentNodeId === w && u.set('hoverEnabled', !1),
            D.nodeId !== w &&
              D.parentNodeId === u.select('floatingParentNodeId') &&
              u.setOpen(!1, ie(ge)))
          : D.parentNodeId === w && D.reason !== ge && u.set('hoverEnabled', !0);
      }
      return (
        S.events.on('menuopenchange', B),
        () => {
          S.events.off('menuopenchange', B);
        }
      );
    }, [u, S.events, w]),
      o.useEffect(() => {
        if (u.select('floatingParentNodeId') == null) return;
        function B(D) {
          if (D.open || D.nodeId !== u.select('floatingParentNodeId')) return;
          const le = D.reason ?? ge;
          u.setOpen(!1, ie(le));
        }
        return (
          S.events.on('menuopenchange', B),
          () => {
            S.events.off('menuopenchange', B);
          }
        );
      }, [S.events, u]),
      o.useEffect(() => {
        function B(D) {
          !C ||
            D.nodeId !== u.select('floatingParentNodeId') ||
            (D.target && j && j !== D.target && u.setOpen(!1, ie(ge)));
        }
        return (
          S.events.on('itemhover', B),
          () => {
            S.events.off('itemhover', B);
          }
        );
      }, [S.events, C, j, u]),
      o.useEffect(() => {
        const B = { open: C, nodeId: w, parentNodeId: A, reason: u.select('lastOpenChangeReason') };
        S.events.emit('menuopenchange', B);
      }, [S.events, C, u, w, A]));
    const X = o.useMemo(
        () => ({
          open: C,
          side: P.side,
          align: P.align,
          anchorHidden: P.anchorHidden,
          nested: s.type === 'menu',
        }),
        [C, P.side, P.align, P.anchorHidden, s.type],
      ),
      re = o.useMemo(
        () => ({
          side: P.side,
          align: P.align,
          arrowRef: P.arrowRef,
          arrowUncentered: P.arrowUncentered,
          arrowStyles: P.arrowStyles,
          nodeId: P.context.nodeId,
        }),
        [P.side, P.align, P.arrowRef, P.arrowUncentered, P.arrowStyles, P.context.nodeId],
      ),
      ue = Q('div', t, {
        state: X,
        stateAttributesMapping: gt,
        ref: [n, u.useStateSetter('positionerElement')],
        props: [ne, m],
      }),
      oe =
        N &&
        s.type !== 'menu' &&
        ((s.type !== 'menubar' && V && k !== be) || (s.type === 'menubar' && s.context.modal));
    let Z = null;
    return (
      s.type === 'menubar' ? (Z = s.context.contentElement) : s.type === void 0 && (Z = j),
      c.jsxs(It.Provider, {
        value: re,
        children: [
          oe &&
            c.jsx(uo, {
              ref:
                s.type === 'context-menu' || s.type === 'nested-context-menu'
                  ? s.context.internalBackdropRef
                  : null,
              inert: mn(!C),
              cutout: Z,
            }),
          c.jsx(hn, {
            id: w,
            children: c.jsx(to, {
              elementsRef: u.context.itemDomElements,
              labelsRef: u.context.itemLabels,
              children: ue,
            }),
          }),
        ],
      })
    );
  }),
  ko = o.createContext(null);
function Ot(e) {
  return o.useContext(ko);
}
const wo = {
  ...vn,
  disabled: H((e) => (e.parent.type === 'menubar' && e.parent.context.disabled) || e.disabled),
  modal: H(
    (e) => (e.parent.type === void 0 || e.parent.type === 'context-menu') && (e.modal ?? !0),
  ),
  allowMouseEnter: H((e) =>
    e.parent.type === 'menu' ? e.parent.store.select('allowMouseEnter') : e.allowMouseEnter,
  ),
  stickIfOpen: H((e) => e.stickIfOpen),
  parent: H((e) => e.parent),
  rootId: H((e) =>
    e.parent.type === 'menu'
      ? e.parent.store.select('rootId')
      : e.parent.type !== void 0
        ? e.parent.context.rootId
        : e.rootId,
  ),
  activeIndex: H((e) => e.activeIndex),
  isActive: H((e, t) => e.activeIndex === t),
  hoverEnabled: H((e) => e.hoverEnabled),
  instantType: H((e) => e.instantType),
  lastOpenChangeReason: H((e) => e.openChangeReason),
  floatingTreeRoot: H((e) =>
    e.parent.type === 'menu' ? e.parent.store.select('floatingTreeRoot') : e.floatingTreeRoot,
  ),
  floatingNodeId: H((e) => e.floatingNodeId),
  floatingParentNodeId: H((e) => e.floatingParentNodeId),
  itemProps: H((e) => e.itemProps),
  closeDelay: H((e) => e.closeDelay),
  keyboardEventRelay: H((e) => {
    if (e.keyboardEventRelay) return e.keyboardEventRelay;
    if (e.parent.type === 'menu') return e.parent.store.select('keyboardEventRelay');
  }),
};
class _e extends bn {
  constructor(t) {
    (super(
      { ...Oo(), ...t },
      {
        positionerRef: o.createRef(),
        popupRef: o.createRef(),
        typingRef: { current: !1 },
        itemDomElements: { current: [] },
        itemLabels: { current: [] },
        allowMouseUpTriggerRef: { current: !1 },
        triggerFocusTargetRef: o.createRef(),
        beforeContentFocusGuardRef: o.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: new xn(),
      },
      wo,
    ),
      this.observe(
        H((n) => n.allowMouseEnter),
        (n, i) => {
          this.state.parent.type === 'menu' &&
            n !== i &&
            this.state.parent.store.set('allowMouseEnter', n);
        },
      ),
      (this.unsubscribeParentListener = this.observe('parent', (n) => {
        if ((this.unsubscribeParentListener?.(), n.type === 'menu')) {
          ((this.unsubscribeParentListener = n.store.subscribe(() => {
            this.notifyAll();
          })),
            (this.context.allowMouseUpTriggerRef = n.store.context.allowMouseUpTriggerRef));
          return;
        }
        (n.type !== void 0 &&
          (this.context.allowMouseUpTriggerRef = n.context.allowMouseUpTriggerRef),
          (this.unsubscribeParentListener = null));
      })));
  }
  setOpen(t, n) {
    this.state.floatingRootContext.context.events.emit('setOpen', { open: t, eventDetails: n });
  }
  static useStore(t, n) {
    return Cn(() => t ?? new _e(n)).current;
  }
  unsubscribeParentListener = null;
}
function Oo() {
  return {
    ...yn(),
    disabled: !1,
    modal: !0,
    allowMouseEnter: !0,
    stickIfOpen: !0,
    parent: { type: void 0 },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new mt(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: Se,
    keyboardEventRelay: void 0,
    closeDelay: 0,
  };
}
const Nt = o.createContext(void 0);
function Dt() {
  return o.useContext(Nt);
}
function $e(e) {
  const {
      children: t,
      open: n,
      onOpenChange: i,
      onOpenChangeComplete: p,
      defaultOpen: d = !1,
      disabled: h = !1,
      modal: a,
      loopFocus: l = !0,
      orientation: f = 'vertical',
      actionsRef: g,
      closeParentOnEsc: b = !1,
      handle: I,
      triggerId: R,
      defaultTriggerId: M = null,
      highlightItemOnHover: r = !0,
    } = e,
    x = ke(!0),
    m = te(!0),
    u = Ot(),
    v = Dt(),
    T = o.useMemo(
      () =>
        v && m
          ? { type: 'menu', store: m.store }
          : u
            ? { type: 'menubar', context: u }
            : x && !m
              ? { type: 'context-menu', context: x }
              : { type: void 0 },
      [x, m, u, v],
    ),
    s = _e.useStore(I?.store, { parent: T }),
    U = s.useState('floatingTreeRoot'),
    S = ht(U),
    N = bt();
  (Re(() => {
    x && !m
      ? s.update({
          parent: { type: 'context-menu', context: x },
          floatingNodeId: S,
          floatingParentNodeId: N,
        })
      : m && s.update({ floatingNodeId: S, floatingParentNodeId: N });
  }, [x, m, S, N, s]),
    s.useControlledProp('open', n, d),
    s.useControlledProp('activeTriggerId', R, M),
    s.useContextCallback('onOpenChangeComplete', p));
  const C = s.useState('open'),
    V = s.useState('activeTriggerElement'),
    j = s.useState('positionerElement'),
    k = s.useState('hoverEnabled'),
    w = s.useState('modal'),
    A = s.useState('disabled'),
    se = s.useState('lastOpenChangeReason'),
    O = s.useState('parent'),
    G = s.useState('activeIndex'),
    J = s.useState('payload'),
    ee = s.useState('floatingParentNodeId'),
    _ = o.useRef(null),
    W = ee != null;
  let q;
  s.useSyncedValues({ disabled: h, modal: O.type === void 0 ? a : void 0, rootId: Mn() });
  const { openMethod: P, triggerProps: ne, reset: X } = lo(C);
  In(s);
  const { forceUnmount: re } = Rn(C, s, () => {
      (s.update({ allowMouseEnter: !1, stickIfOpen: !0 }), X());
    }),
    ue = o.useRef(O.type !== 'context-menu'),
    oe = Te();
  (o.useEffect(() => {
    if ((C || (_.current = null), O.type === 'context-menu')) {
      if (!C) {
        (oe.clear(), (ue.current = !1));
        return;
      }
      oe.start(500, () => {
        ue.current = !0;
      });
    }
  }, [oe, C, O.type]),
    po(C && w && se !== be && P !== 'touch', j),
    Re(() => {
      !C && !k && s.set('hoverEnabled', !0);
    }, [C, k, s]));
  const Z = o.useRef(!0),
    B = Te(),
    D = he((y, E) => {
      const Y = E.reason;
      if (
        (C === y && E.trigger === V) ||
        ((E.preventUnmountOnClose = () => {
          s.set('preventUnmountingOnClose', !0);
        }),
        !y && E.trigger == null && (E.trigger = V ?? void 0),
        i?.(y, E),
        E.isCanceled)
      )
        return;
      const sn = { open: y, nativeEvent: E.event, reason: E.reason, nested: W };
      q?.emit('openchange', sn);
      const Ce = E.event;
      if (y === !1 && Ce?.type === 'click' && Ce.pointerType === 'touch' && !Z.current) return;
      if (!y && G !== null) {
        const fe = s.context.itemDomElements.current[G];
        queueMicrotask(() => {
          fe?.setAttribute('tabindex', '-1');
        });
      }
      y && Y === nt
        ? ((Z.current = !1),
          B.start(300, () => {
            Z.current = !0;
          }))
        : ((Z.current = !0), B.clear());
      const Qe = (Y === Tn || Y === He) && Ce.detail === 0 && Ce?.isTrusted,
        rn = !y && (Y === Pn || Y == null);
      function et() {
        const fe = { open: y, openChangeReason: Y };
        _.current = E.event ?? null;
        const tt = E.trigger?.id ?? null;
        ((tt || y) && ((fe.activeTriggerId = tt), (fe.activeTriggerElement = E.trigger ?? null)),
          s.update(fe));
      }
      (Y === be ? Ne.flushSync(et) : et(),
        O.type === 'menubar' && (Y === nt || Y === De || Y === be || Y === Sn || Y === ge)
          ? s.set('instantType', 'group')
          : Qe || rn
            ? s.set('instantType', Qe ? 'click' : 'dismiss')
            : s.set('instantType', void 0));
    }),
    le = o.useCallback(
      (y) => {
        const E = ie(y);
        return (
          (E.preventUnmountOnClose = () => {
            s.set('preventUnmountingOnClose', !0);
          }),
          E
        );
      },
      [s],
    ),
    de = o.useCallback(() => {
      s.setOpen(!1, le(En));
    }, [s, le]);
  o.useImperativeHandle(g, () => ({ unmount: re, close: de }), [re, de]);
  let pe;
  (O.type === 'context-menu' && (pe = O.context),
    o.useImperativeHandle(pe?.positionerRef, () => j, [j]),
    o.useImperativeHandle(pe?.actionsRef, () => ({ setOpen: D }), [D]));
  const ae = kn({ popupStore: s, onOpenChange: D });
  ((q = ae.context.events),
    o.useEffect(() => {
      const y = ({ open: E, eventDetails: Y }) => D(E, Y);
      return (
        q.on('setOpen', y),
        () => {
          q?.off('setOpen', y);
        }
      );
    }, [q, D]));
  const ve = wn(ae, {
      enabled: !A,
      bubbles: b && O.type === 'menu',
      outsidePress() {
        return O.type !== 'context-menu' || _.current?.type === 'contextmenu' ? !0 : ue.current;
      },
      externalTree: W ? U : void 0,
    }),
    L = fo(ae, { role: 'menu' }),
    z = On(),
    $ = o.useCallback(
      (y) => {
        s.select('activeIndex') !== y && s.set('activeIndex', y);
      },
      [s],
    ),
    we = no(ae, {
      enabled: !A,
      listRef: s.context.itemDomElements,
      activeIndex: G,
      nested: O.type !== void 0,
      loopFocus: l,
      orientation: f,
      parentOrientation: O.type === 'menubar' ? O.context.orientation : void 0,
      rtl: z === 'rtl',
      disabledIndices: je,
      onNavigate: $,
      openOnArrowKeyDown: O.type !== 'context-menu',
      externalTree: W ? U : void 0,
      focusItemOnHover: r,
    }),
    Jt = o.useCallback(
      (y) => {
        s.context.typingRef.current = y;
      },
      [s],
    ),
    Zt = oo(ae, {
      listRef: s.context.itemLabels,
      activeIndex: G,
      resetMs: Nn,
      onMatch: (y) => {
        C && y !== G && s.set('activeIndex', y);
      },
      onTypingChange: Jt,
    }),
    {
      getReferenceProps: qe,
      getFloatingProps: ze,
      getItemProps: We,
      getTriggerProps: Xe,
    } = Ue([ve, L, we, Zt]),
    Qt = o.useMemo(() => {
      const y = Ie(
        qe(),
        {
          onMouseEnter() {
            s.set('hoverEnabled', !0);
          },
          onMouseMove() {
            s.set('allowMouseEnter', !0);
          },
        },
        ne,
      );
      return (delete y.role, y);
    }, [qe, s, ne]),
    en = o.useMemo(() => {
      const y = Xe();
      if (!y) return y;
      const E = Ie(y, ne);
      return (delete E.role, delete E['aria-controls'], E);
    }, [Xe, ne]),
    Je = Dn(),
    tn = o.useMemo(
      () =>
        ze({
          onMouseEnter() {
            O.type === 'menu' && Je.request(() => s.set('hoverEnabled', !1));
          },
          onMouseMove() {
            s.set('allowMouseEnter', !0);
          },
          onClick() {
            s.select('hoverEnabled') && s.set('hoverEnabled', !1);
          },
          onKeyDown(y) {
            const E = s.select('keyboardEventRelay');
            E && !y.isPropagationStopped() && E(y);
          },
        }),
      [ze, O.type, Je, s],
    ),
    nn = o.useMemo(() => We(), [We]);
  s.useSyncedValues({
    floatingRootContext: ae,
    activeTriggerProps: Qt,
    inactiveTriggerProps: en,
    popupProps: tn,
    itemProps: nn,
  });
  const on = o.useMemo(() => ({ store: s, parent: T }), [s, T]),
    Ze = c.jsx(Rt.Provider, {
      value: on,
      children: typeof t == 'function' ? t({ payload: J }) : t,
    });
  return O.type === void 0 || O.type === 'context-menu'
    ? c.jsx(jn, { externalTree: U, children: Ze })
    : Ze;
}
function No(e) {
  const t = te().store,
    n = o.useMemo(() => ({ parentMenu: t }), [t]);
  return c.jsx(Nt.Provider, { value: n, children: c.jsx($e, { ...e }) });
}
function Do(e = {}) {
  const { highlightItemOnHover: t, highlightedIndex: n, onHighlightedIndexChange: i } = xt(),
    { ref: p, index: d } = Pe(e),
    h = n === d,
    a = o.useRef(null),
    l = dt(p, a);
  return {
    compositeProps: o.useMemo(
      () => ({
        tabIndex: h ? 0 : -1,
        onFocus() {
          i(d);
        },
        onMouseMove() {
          const g = a.current;
          if (!t || !g) return;
          const b = g.hasAttribute('disabled') || g.ariaDisabled === 'true';
          !h && !b && g.focus();
        },
      }),
      [h, i, d, t],
    ),
    compositeRef: l,
    index: d,
  };
}
function jo(e) {
  const {
      render: t,
      className: n,
      state: i = Se,
      props: p = je,
      refs: d = je,
      metadata: h,
      stateAttributesMapping: a,
      tag: l = 'div',
      ...f
    } = e,
    { compositeProps: g, compositeRef: b } = Do({ metadata: h });
  return Q(l, e, { state: i, ref: [...d, b], props: [g, ...p, f], stateAttributesMapping: a });
}
function jt(e) {
  if (An(e) && e.hasAttribute('data-rootownerid'))
    return e.getAttribute('data-rootownerid') ?? void 0;
  if (!Fn(e)) return jt(Bn(e));
}
function Ao(e) {
  const { enabled: t = !0, mouseDownAction: n, open: i } = e,
    p = o.useRef(!1);
  return o.useMemo(
    () =>
      t
        ? {
            onMouseDown: (d) => {
              ((n === 'open' && !i) || (n === 'close' && i)) &&
                ((p.current = !0),
                Ae(d.currentTarget).addEventListener(
                  'click',
                  () => {
                    p.current = !1;
                  },
                  { once: !0 },
                ));
            },
            onClick: (d) => {
              p.current && ((p.current = !1), d.preventBaseUIHandler());
            },
          }
        : Se,
    [t, n, i],
  );
}
const ye = 2,
  ct = o.forwardRef(function (t, n) {
    const {
        render: i,
        className: p,
        disabled: d = !1,
        nativeButton: h = !0,
        id: a,
        openOnHover: l,
        delay: f = 100,
        closeDelay: g = 0,
        handle: b,
        payload: I,
        ...R
      } = t,
      M = te(!0),
      r = b?.store ?? M?.store;
    if (!r) throw new Error(ce(85));
    const x = xe(a),
      m = r.useState('isTriggerActive', x),
      u = r.useState('floatingRootContext'),
      v = r.useState('isOpenedByTrigger', x),
      T = o.useRef(null),
      s = Bo(),
      U = xt(!0),
      S = Ln(),
      N = o.useMemo(() => S ?? new mt(), [S]),
      C = ht(N),
      V = bt(),
      { registerTrigger: j, isMountedByThisTrigger: k } = Hn(x, T, r, {
        payload: I,
        closeDelay: g,
        parent: s,
        floatingTreeRoot: N,
        floatingNodeId: C,
        floatingParentNodeId: V,
        keyboardEventRelay: U?.relayKeyboardEvent,
      }),
      w = r.useState('disabled'),
      A = d || w || (s.type === 'menubar' && s.context.disabled),
      { getButtonProps: se, buttonRef: O } = lt({ disabled: A, native: h });
    o.useEffect(() => {
      !v && s.type === void 0 && (r.context.allowMouseUpTriggerRef.current = !1);
    }, [r, v, s.type]);
    const G = o.useRef(null),
      J = Te(),
      ee = he((L) => {
        if (!G.current) return;
        (J.clear(), (r.context.allowMouseUpTriggerRef.current = !1));
        const z = L.target;
        if (
          Oe(G.current, z) ||
          Oe(r.select('positionerElement'), z) ||
          z === G.current ||
          (z != null && jt(z) === r.select('rootId'))
        )
          return;
        const $ = so(G.current);
        (L.clientX >= $.left - ye &&
          L.clientX <= $.right + ye &&
          L.clientY >= $.top - ye &&
          L.clientY <= $.bottom + ye) ||
          N.events.emit('close', { domEvent: L, reason: Un });
      });
    o.useEffect(() => {
      v &&
        r.select('lastOpenChangeReason') === be &&
        Ae(G.current).addEventListener('mouseup', ee, { once: !0 });
    }, [v, ee, r]);
    const _ = s.type === 'menubar' && s.context.hasSubmenuOpen,
      q = vt(u, {
        enabled:
          (l ?? _ ?? !1) && !A && s.type !== 'context-menu' && (s.type !== 'menubar' || (_ && !k)),
        handleClose: Ct({ blockPointerEvents: s.type !== 'menubar' }),
        mouseOnly: !0,
        move: !1,
        restMs: s.type === void 0 ? f : void 0,
        delay: { close: g },
        triggerElementRef: T,
        externalTree: N,
        isActiveTrigger: m,
      }),
      P = Fo(v, r.select('lastOpenChangeReason')),
      ne = Mt(u, {
        enabled: !A && s.type !== 'context-menu',
        event: v && s.type === 'menubar' ? 'click' : 'mousedown',
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: s.type === void 0 ? P : !1,
      }),
      X = Gn(u, { enabled: !A && ((s.type !== 'menubar' && v) || _) }),
      re = Ao({ open: v, enabled: s.type === 'menubar', mouseDownAction: 'open' }),
      ue = Ue([ne, X]),
      oe = s.type === 'menubar',
      Z = o.useMemo(() => ({ disabled: A, open: v }), [A, v]),
      B = r.useState('triggerProps', k),
      D = [G, n, O, j, T],
      le = [
        ue.getReferenceProps(),
        q ?? Se,
        B,
        {
          'aria-haspopup': 'menu',
          'id': x,
          'onMouseDown': (L) => {
            if (r.select('open')) return;
            (J.start(200, () => {
              r.context.allowMouseUpTriggerRef.current = !0;
            }),
              Ae(L.currentTarget).addEventListener('mouseup', ee, { once: !0 }));
          },
        },
        oe ? { role: 'menuitem' } : {},
        re,
        R,
        se,
      ],
      de = o.useRef(null),
      pe = he((L) => {
        (Ne.flushSync(() => {
          r.setOpen(!1, ie(De, L.nativeEvent, L.currentTarget));
        }),
          _n(de.current)?.focus());
      }),
      ae = he((L) => {
        const z = r.select('positionerElement');
        if (z && $n(L, z)) r.context.beforeContentFocusGuardRef.current?.focus();
        else {
          Ne.flushSync(() => {
            r.setOpen(!1, ie(De, L.nativeEvent, L.currentTarget));
          });
          let $ = Kn(T.current);
          for (; ($ !== null && Oe(z, $)) || $?.hasAttribute('aria-hidden'); ) {
            const we = $;
            if ((($ = Vn($)), $ === we)) break;
          }
          $?.focus();
        }
      }),
      ve = Q('button', t, {
        enabled: !oe,
        stateAttributesMapping: ot,
        state: Z,
        ref: D,
        props: le,
      });
    return oe
      ? c.jsx(jo, {
          tag: 'button',
          render: i,
          className: p,
          state: Z,
          refs: D,
          props: le,
          stateAttributesMapping: ot,
        })
      : v
        ? c.jsxs(o.Fragment, {
            children: [
              c.jsx(st, { ref: de, onFocus: pe }, `${x}-pre-focus-guard`),
              c.jsx(o.Fragment, { children: ve }, x),
              c.jsx(
                st,
                { ref: r.context.triggerFocusTargetRef, onFocus: ae },
                `${x}-post-focus-guard`,
              ),
            ],
          })
        : c.jsx(o.Fragment, { children: ve }, x);
  });
function Fo(e, t) {
  const n = Te(),
    [i, p] = o.useState(!1);
  return (
    Re(() => {
      e && t === 'trigger-hover'
        ? (p(!0),
          n.start(Yn, () => {
            p(!1);
          }))
        : e || (n.clear(), p(!1));
    }, [e, t, n]),
    i
  );
}
function Bo() {
  const e = ke(!0),
    t = te(!0),
    n = Ot();
  return o.useMemo(
    () =>
      n
        ? { type: 'menubar', context: n }
        : e && !t
          ? { type: 'context-menu', context: e }
          : { type: void 0 },
    [e, t, n],
  );
}
const Lo = o.forwardRef(function (t, n) {
    const { className: i, render: p, orientation: d = 'horizontal', ...h } = t,
      a = o.useMemo(() => ({ orientation: d }), [d]);
    return Q('div', t, {
      state: a,
      ref: n,
      props: [{ 'role': 'separator', 'aria-orientation': d }, h],
    });
  }),
  Ho = o.forwardRef(function (t, n) {
    const {
        render: i,
        className: p,
        label: d,
        id: h,
        nativeButton: a = !1,
        openOnHover: l = !0,
        delay: f = 100,
        closeDelay: g = 0,
        disabled: b = !1,
        ...I
      } = t,
      R = Pe(),
      M = Ee(),
      { store: r } = te(),
      x = xe(h),
      m = r.useState('open'),
      u = r.useState('floatingRootContext'),
      v = r.useState('floatingTreeRoot'),
      T = qn(x, r),
      s = o.useCallback(
        (X) => {
          const re = T(X);
          return (
            X !== null &&
              r.select('open') &&
              r.select('activeTriggerId') == null &&
              r.update({ activeTriggerId: x, activeTriggerElement: X, closeDelay: g }),
            re
          );
        },
        [T, g, r, x],
      ),
      U = o.useRef(null),
      S = o.useCallback(
        (X) => {
          ((U.current = X), r.set('activeTriggerElement', X));
        },
        [r],
      ),
      N = Dt();
    if (!N?.parentMenu) throw new Error(ce(37));
    r.useSyncedValue('closeDelay', g);
    const C = N.parentMenu,
      V = C.useState('itemProps'),
      j = C.useState('isActive', R.index),
      k = o.useMemo(
        () => ({ type: 'submenu-trigger', setActive: () => C.set('activeIndex', R.index) }),
        [C, R.index],
      ),
      w = r.useState('disabled'),
      A = b || w,
      { getItemProps: se, itemRef: O } = Ge({
        closeOnClick: !1,
        disabled: A,
        highlighted: j,
        id: x,
        store: r,
        nativeButton: a,
        itemMetadata: k,
        nodeId: M?.nodeId,
      }),
      G = r.useState('hoverEnabled'),
      J = r.useState('allowMouseEnter'),
      ee = vt(u, {
        enabled: G && l && !A && J,
        handleClose: Ct({ blockPointerEvents: !0 }),
        mouseOnly: !0,
        move: !0,
        restMs: f,
        delay: { open: f, close: g },
        triggerElementRef: U,
        externalTree: v,
      }),
      _ = Mt(u, { enabled: !A, event: 'mousedown', toggle: !l, ignoreMouse: l, stickIfOpen: !1 }),
      W = Ue([_]),
      q = r.useState('triggerProps', !0);
    delete q.id;
    const P = o.useMemo(() => ({ disabled: A, highlighted: j, open: m }), [A, j, m]);
    return Q('div', t, {
      state: P,
      stateAttributesMapping: zn,
      props: [
        W.getReferenceProps(),
        ee,
        q,
        V,
        {
          tabIndex: m || j ? 0 : -1,
          onBlur() {
            j && C.set('activeIndex', null);
          },
        },
        I,
        se,
      ],
      ref: [n, R.ref, O, s, S],
    });
  }),
  Qo = (e) => c.jsx($e, { modal: !1, ...e }),
  Uo = No,
  Go = Co,
  At = (e, t) => (typeof t == 'function' ? (n) => K(e, t(n)) : K(e, t)),
  Ft = ({ children: e, className: t, nativeButton: n, ref: i, ...p }) => {
    const { isNativeButtonTriggerElement: d, resolvedNativeButton: h } = yt({
        children: e,
        nativeButton: n,
      }),
      a = (l) => {
        const f = (() => {
            if (d) return l;
            const { type: b, ...I } = l;
            return I;
          })(),
          g = Ie(e.props, f);
        return o.cloneElement(e, {
          ...g,
          className: at(rt.DropdownMenuTrigger, t, g.className),
          ref: Zn([e.ref, l.ref, i]),
        });
      };
    return o.isValidElement(e)
      ? c.jsx(ct, { ...p, nativeButton: h, render: a })
      : c.jsx(ct, {
          ...p,
          className: at(rt.DropdownMenuTrigger, t),
          nativeButton: h,
          ref: i,
          children: e,
        });
  };
Ft.displayName = 'DropdownMenuTrigger';
const Ke = ({ container: e, ...t }) => {
  const n = Wn();
  return c.jsx(Po, { container: e ?? n ?? void 0, ...t });
};
Ke.displayName = 'DropdownMenuPortal';
const Ve = ({
  className: e,
  placement: t,
  hoverTrigger: n,
  align: i,
  side: p,
  sideOffset: d,
  children: h,
  ...a
}) => {
  const l = t ? Xn[t] : void 0,
    [f, g] = o.useState(null);
  return c.jsx(Eo, {
    ...a,
    'align': i ?? l?.align,
    'className': At(F.positioner, e),
    'data-hover-trigger': n || void 0,
    'data-placement': t,
    'ref': g,
    'side': p ?? l?.side,
    'sideOffset': d ?? (l ? 6 : void 0),
    'children': c.jsx(Jn, { value: f, children: h }),
  });
};
Ve.displayName = 'DropdownMenuPositioner';
const Ye = ({ className: e, ...t }) => c.jsx(To, { ...t, className: At(F.popup, e) });
Ye.displayName = 'DropdownMenuPopup';
const Bt = ({ className: e, danger: t, ...n }) =>
  c.jsx(kt, {
    ...n,
    className: (i) => K(F.item, t && F.danger, typeof e == 'function' ? e(i) : e),
  });
Bt.displayName = 'DropdownMenuItem';
const Lt = ({ className: e, danger: t, ...n }) =>
  c.jsx(vo, {
    ...n,
    className: (i) => K(F.item, t && F.danger, typeof e == 'function' ? e(i) : e),
  });
Lt.displayName = 'DropdownMenuCheckboxItemPrimitive';
const Ht = ({ className: e, ...t }) =>
  c.jsx(Lo, { ...t, className: (n) => K(F.separator, typeof e == 'function' ? e(n) : e) });
Ht.displayName = 'DropdownMenuSeparator';
const _o = Mo,
  Ut = ({ className: e, ...t }) =>
    c.jsx(Io, { ...t, className: (n) => K(F.groupLabel, typeof e == 'function' ? e(n) : e) });
Ut.displayName = 'DropdownMenuGroupLabel';
const Gt = ({ className: e, danger: t, ...n }) =>
  c.jsx(Ho, {
    ...n,
    className: (i) => K(F.item, t && F.danger, typeof e == 'function' ? e(i) : e),
  });
Gt.displayName = 'DropdownMenuSubmenuTrigger';
const _t = ({ className: e, ...t }) => c.jsx('div', { ...t, className: K(F.itemContent, e) });
_t.displayName = 'DropdownMenuItemContent';
const $t = ({ className: e, ...t }) => c.jsx('span', { ...t, className: K(F.icon, e) });
$t.displayName = 'DropdownMenuItemIcon';
const Kt = ({ className: e, ...t }) => c.jsx('div', { ...t, className: K(F.labelGroup, e) });
Kt.displayName = 'DropdownMenuItemLabelGroup';
const Fe = ({ className: e, ...t }) => c.jsx('span', { ...t, className: K(F.label, e) });
Fe.displayName = 'DropdownMenuItemLabel';
const Vt = ({ className: e, ...t }) => c.jsx('span', { ...t, className: K(F.desc, e) });
Vt.displayName = 'DropdownMenuItemDesc';
const Yt = ({ className: e, ...t }) => c.jsx('span', { ...t, className: K(F.extra, e) });
Yt.displayName = 'DropdownMenuItemExtra';
const qt = ({ className: e, ...t }) => c.jsx('span', { ...t, className: K(F.submenuArrow, e) });
qt.displayName = 'DropdownMenuSubmenuArrow';
const zt = ({
  checked: e,
  className: t,
  closeOnClick: n = !1,
  danger: i,
  defaultChecked: p,
  disabled: d,
  onCheckedChange: h,
  children: a,
  ...l
}) => {
  const [f, g] = o.useState(p ?? !1),
    b = e !== void 0,
    I = b ? e : f,
    R = o.useCallback(
      (M) => {
        (b || g(M), h?.(M));
      },
      [b, h],
    );
  return c.jsxs(kt, {
    ...l,
    closeOnClick: n,
    disabled: d,
    className: (M) => K(F.item, i && F.danger, typeof t == 'function' ? t(M) : t),
    onClick: (M) => {
      (M.preventDefault(), d || R(!I));
    },
    children: [
      a,
      c.jsx(ro, {
        checked: I,
        disabled: d,
        size: 'small',
        style: { marginInlineStart: 16 },
        onChange: R,
        onClick: (M, r) => r.stopPropagation(),
      }),
    ],
  });
};
zt.displayName = 'DropdownMenuSwitchItem';
const $o = (e, t) => (e && 'key' in e && e.key !== void 0 ? e.key : t),
  me = (e) => (e.label !== void 0 ? e.label : 'title' in e && e.title !== void 0 ? e.title : e.key),
  Wt = (e, t) => (e ? (o.isValidElement(e) ? e : c.jsx(Qn, { icon: e, size: t })) : null),
  Be = (e, t = !1) =>
    e.some((n) =>
      n
        ? n.type === 'checkbox' || ('icon' in n && n.icon)
          ? !0
          : t && 'children' in n && n.children
            ? Be(n.children, !0)
            : !1
        : !1,
    ),
  ut = (e) => {
    let t = !1,
      n = !1;
    for (const i of e)
      if (i && (i.type === 'checkbox' && (t = !0), 'icon' in i && i.icon && (n = !0), t && n))
        return !0;
    return !1;
  },
  Me = (e, t, n) => {
    const i = me(e),
      p = 'desc' in e ? e.desc : void 0,
      d = 'extra' in e ? e.extra : void 0,
      h = t?.indicatorOnRight,
      a = !!p && t?.iconAlign === 'start',
      l = n !== void 0 && !h,
      f = l ? !!n : !!e.icon,
      g = l ? !!(t?.reserveIconSpace || n) : !!(f || t?.reserveIconSpace),
      b = p
        ? c.jsxs(Kt, { children: [c.jsx(Fe, { children: i }), c.jsx(Vt, { children: p })] })
        : c.jsx(Fe, { children: i });
    return c.jsxs(_t, {
      className: a ? F.itemContentAlignStart : void 0,
      children: [
        g
          ? c.jsx($t, {
              'aria-hidden': !f,
              'className': a ? F.iconAlignStart : void 0,
              'children': l ? n : f ? Wt(e.icon) : null,
            })
          : null,
        b,
        d ? c.jsx(Yt, { children: d }) : null,
        h && n ? n : null,
        t?.submenu ? c.jsx(qt, { children: c.jsx(mo, { size: 16 }) }) : null,
      ],
    });
  },
  Ko = (e, t, n) => {
    if (!e.onClick) return;
    const i = e.key ?? t.at(-1) ?? '',
      p = { domEvent: n, item: n.currentTarget, key: String(i), keyPath: t };
    e.onClick(p);
  },
  Le = (e, t = [], n) => {
    const i = n?.iconAlign,
      p = n?.iconSpaceMode ?? 'global',
      d = n?.reserveIconSpace ?? Be(e, p === 'global'),
      h = n?.indicatorOnRight ?? ut(e);
    return e.map((a, l) => {
      if (!a) return null;
      const f = $o(a, `${t.join('-') || 'root'}-${l}`),
        g = [...t, String(f)];
      if (a.type === 'checkbox') {
        const r = a,
          x = me(r),
          m = typeof x == 'string' ? x : void 0,
          u = !!r.danger,
          v = c.jsx(Go, { children: Wt(ho) });
        return c.jsx(
          Lt,
          {
            checked: r.checked,
            closeOnClick: r.closeOnClick,
            danger: u,
            defaultChecked: r.defaultChecked,
            disabled: r.disabled,
            label: m,
            onCheckedChange: (T) => r.onCheckedChange?.(T),
            children: Me(r, { iconAlign: i, indicatorOnRight: h, reserveIconSpace: d }, v),
          },
          f,
        );
      }
      if (a.type === 'switch') {
        const r = a,
          x = me(r),
          m = typeof x == 'string' ? x : void 0,
          u = !!r.danger;
        return c.jsx(
          zt,
          {
            checked: r.checked,
            closeOnClick: r.closeOnClick,
            danger: u,
            defaultChecked: r.defaultChecked,
            disabled: r.disabled,
            label: m,
            onCheckedChange: (v) => r.onCheckedChange?.(v),
            children: Me(r, { iconAlign: i, reserveIconSpace: d }),
          },
          f,
        );
      }
      if (a.type === 'divider') return c.jsx(Ht, {}, f);
      if (a.type === 'group') {
        const r = a,
          x = p === 'group' ? (r.children ? Be(r.children) : !1) : d,
          m = r.children ? ut(r.children) : !1;
        return c.jsxs(
          _o,
          {
            children: [
              r.label ? c.jsx(Ut, { children: r.label }) : null,
              r.children
                ? Le(r.children, g, {
                    iconAlign: i,
                    iconSpaceMode: p,
                    indicatorOnRight: m,
                    reserveIconSpace: x,
                  })
                : null,
            ],
          },
          f,
        );
      }
      if (a.type === 'submenu' || 'children' in a) {
        const r = a,
          x = me(r),
          m = typeof x == 'string' ? x : void 0;
        return c.jsxs(
          Uo,
          {
            children: [
              c.jsx(Gt, {
                danger: 'danger' in r && !!r.danger,
                disabled: r.disabled,
                label: m,
                children: Me(r, { iconAlign: i, reserveIconSpace: d, submenu: !0 }),
              }),
              c.jsx(Ke, {
                children: c.jsx(Ve, {
                  'alignOffset': -4,
                  'data-submenu': '',
                  'sideOffset': -1,
                  'children': c.jsx(Ye, {
                    children: r.children
                      ? Le(r.children, g, { iconAlign: i, iconSpaceMode: p })
                      : null,
                  }),
                }),
              }),
            ],
          },
          f,
        );
      }
      const b = a,
        I = me(b),
        R = typeof I == 'string' ? I : void 0,
        M = 'danger' in b && !!b.danger;
      return c.jsx(
        Bt,
        {
          closeOnClick: b.closeOnClick,
          danger: M,
          disabled: b.disabled,
          label: R,
          onClick: (r) => Ko(b, g, r),
          children: Me(b, { iconAlign: i, reserveIconSpace: d }),
        },
        f,
      );
    });
  },
  Xt = o.memo(
    ({
      children: e,
      defaultOpen: t,
      iconAlign: n,
      iconSpaceMode: i,
      items: p,
      nativeButton: d,
      onOpenChange: h,
      onOpenChangeComplete: a,
      open: l,
      placement: f = 'bottomLeft',
      popupProps: g,
      portalProps: b,
      positionerProps: I,
      trigger: R = 'click',
      triggerProps: M,
      ...r
    }) => {
      const [x, m] = o.useState(!!t),
        { openOnHover: u } = o.useMemo(() => go(R), [R]);
      o.useEffect(() => {
        l !== void 0 && m(l);
      }, [l]);
      const v = o.useCallback(
          (k, w) => {
            (h?.(k, w), l === void 0 && m(k));
          },
          [h, l],
        ),
        T = o.useRef(null),
        s = l ?? x,
        U = o.useMemo(() => {
          if (s) {
            const k = Le(typeof p == 'function' ? p() : p, [], { iconAlign: n, iconSpaceMode: i });
            return ((T.current = k), k);
          }
          return T.current;
        }, [s, p, n, i]),
        S = o.useCallback(
          (k) => {
            (a?.(k), k || (T.current = null));
          },
          [a],
        ),
        { container: N, ...C } = b ?? {},
        { resolvedNativeButton: V } = yt({
          children: e,
          nativeButton: d,
          triggerNativeButton: M?.nativeButton,
        }),
        j = c.jsx(Ft, { ...M, nativeButton: V, openOnHover: u, children: e });
      return c.jsxs($e, {
        ...r,
        defaultOpen: t,
        modal: !1,
        open: l,
        onOpenChange: v,
        onOpenChangeComplete: S,
        children: [
          j,
          c.jsx(Ke, {
            container: N,
            ...C,
            children: c.jsx(Ve, {
              ...I,
              hoverTrigger: u,
              placement: f,
              children: c.jsx(Ye, { ...g, children: U }),
            }),
          }),
        ],
      });
    },
  );
Xt.displayName = 'DropdownMenuV2';
var es = Xt;
export {
  kt as A,
  Wt as B,
  bo as C,
  es as D,
  Co as E,
  Go as F,
  Lt as G,
  _t as H,
  Yt as I,
  Ht as J,
  qt as K,
  Rt as M,
  Lo as S,
  Qo as a,
  Ft as b,
  Ke as c,
  Ve as d,
  Ye as e,
  Uo as f,
  Gt as g,
  _o as h,
  Ut as i,
  Bt as j,
  $t as k,
  Fe as l,
  $e as m,
  Be as n,
  ut as o,
  $o as p,
  me as q,
  Le as r,
  vo as s,
  Mo as t,
  Io as u,
  No as v,
  Ho as w,
  Po as x,
  Eo as y,
  To as z,
};
