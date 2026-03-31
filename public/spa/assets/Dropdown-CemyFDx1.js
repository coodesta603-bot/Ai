import { bL as q, cC as z } from './index-C8UyLGsD.js';
import { w as G, d as k, f as L, s as j, c as P } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as v, R as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
const { ESC: J, TAB: Q } = q;
function U({ visible: e, triggerRef: s, onVisibleChange: t, autoFocus: n, overlayRef: c }) {
  const r = v.useRef(!1),
    l = () => {
      e && (s.current?.focus?.(), t?.(!1));
    },
    a = () => (c.current?.focus ? (c.current.focus(), (r.current = !0), !0) : !1),
    p = (m) => {
      switch (m.keyCode) {
        case J:
          l();
          break;
        case Q: {
          let d = !1;
          (r.current || (d = a()), d ? m.preventDefault() : l());
          break;
        }
      }
    };
  v.useEffect(
    () =>
      e
        ? (window.addEventListener('keydown', p),
          n && G(a, 3),
          () => {
            (window.removeEventListener('keydown', p), (r.current = !1));
          })
        : () => {
            r.current = !1;
          },
    [e],
  );
}
const Z = v.forwardRef((e, s) => {
    const { overlay: t, arrow: n, prefixCls: c } = e,
      r = v.useMemo(() => {
        let a;
        return (typeof t == 'function' ? (a = t()) : (a = t), a);
      }, [t]),
      l = k(s, L(r));
    return o.createElement(
      o.Fragment,
      null,
      n && o.createElement('div', { className: `${c}-arrow` }),
      o.cloneElement(r, { ref: j(r) ? l : void 0 }),
    );
  }),
  f = { adjustX: 1, adjustY: 1 },
  u = [0, 0],
  ee = {
    topLeft: { points: ['bl', 'tl'], overflow: f, offset: [0, -4], targetOffset: u },
    top: { points: ['bc', 'tc'], overflow: f, offset: [0, -4], targetOffset: u },
    topRight: { points: ['br', 'tr'], overflow: f, offset: [0, -4], targetOffset: u },
    bottomLeft: { points: ['tl', 'bl'], overflow: f, offset: [0, 4], targetOffset: u },
    bottom: { points: ['tc', 'bc'], overflow: f, offset: [0, 4], targetOffset: u },
    bottomRight: { points: ['tr', 'br'], overflow: f, offset: [0, 4], targetOffset: u },
  };
function y() {
  return (
    (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var s = 1; s < arguments.length; s++) {
            var t = arguments[s];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    y.apply(this, arguments)
  );
}
const re = o.forwardRef((e, s) => {
  const {
      arrow: t = !1,
      prefixCls: n = 'rc-dropdown',
      transitionName: c,
      animation: r,
      align: l,
      placement: a = 'bottomLeft',
      placements: p = ee,
      getPopupContainer: m,
      showAction: d,
      hideAction: T,
      overlayClassName: V,
      overlayStyle: $,
      visible: D,
      trigger: C = ['hover'],
      autoFocus: S,
      overlay: R,
      children: g,
      onVisibleChange: W,
      ...F
    } = e,
    [H, O] = o.useState(),
    w = 'visible' in e ? D : H,
    K = r ? `${n}-${r}` : c,
    E = o.useRef(null),
    M = o.useRef(null),
    N = o.useRef(null);
  o.useImperativeHandle(s, () => E.current);
  const x = (i) => {
    (O(i), W?.(i));
  };
  U({ visible: w, triggerRef: N, onVisibleChange: x, autoFocus: S, overlayRef: M });
  const B = (i) => {
      const { onOverlayClick: h } = e;
      (O(!1), h && h(i));
    },
    A = () => o.createElement(Z, { ref: M, overlay: R, prefixCls: n, arrow: t }),
    I = () => (typeof R == 'function' ? A : A()),
    X = () => {
      const { minOverlayWidthMatchTrigger: i, alignPoint: h } = e;
      return 'minOverlayWidthMatchTrigger' in e ? i : !h;
    },
    Y = () => {
      const { openClassName: i } = e;
      return i !== void 0 ? i : `${n}-open`;
    },
    _ = o.cloneElement(g, {
      className: P(g.props?.className, w && Y()),
      ref: j(g) ? k(N, L(g)) : void 0,
    });
  let b = T;
  return (
    !b && C.indexOf('contextMenu') !== -1 && (b = ['click']),
    o.createElement(
      z,
      y({ builtinPlacements: p }, F, {
        prefixCls: n,
        ref: E,
        popupClassName: P(V, { [`${n}-show-arrow`]: t }),
        popupStyle: $,
        action: C,
        showAction: d,
        hideAction: b,
        popupPlacement: a,
        popupAlign: l,
        popupMotion: { motionName: K },
        popupVisible: w,
        stretch: X() ? 'minWidth' : '',
        popup: I(),
        onOpenChange: x,
        onPopupClick: B,
        getPopupContainer: m,
      }),
      _,
    )
  );
});
export { re as D };
