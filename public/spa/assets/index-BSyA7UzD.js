import {
  f as be,
  F as k,
  j as d,
  ai as me,
  A as de,
  ad as O,
  aj as De,
  C as ue,
  I as Fe,
  i as Ce,
} from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as x } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  dD as Ne,
  dE as Ie,
  dF as je,
  c9 as ge,
  dG as ze,
  dH as He,
  aK as Me,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { _ as W } from './tslib.es6-BWnLUwbd.js';
import { a as Oe, u as We } from './index-CVZJoh5n.js';
import { a as Ge } from './index-Dq_SzPY7.js';
import { R as Ue } from './index-DiBRq82H.js';
const A = be(({ css: e, cssVar: t }) => ({
    body: e`
      overflow: hidden auto;
      padding: 16px;
    `,
    container: e`
      position: relative;
      overflow: hidden;
    `,
    footer: e`
      padding-block: 8px;
      padding-inline: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
    `,
    handlerIcon: e`
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ${t.motionEaseOut};
    `,
    header: e`
      padding-block: 8px;
      padding-inline: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};
      font-weight: 500;
    `,
  })),
  ve = n.memo(({ className: e, ...t }) => x.jsx(k, { className: d(A.body, e), flex: 1, ...t }));
ve.displayName = 'DraggablePanelBody';
var Ze = ve;
const xe = n.memo(({ className: e, ...t }) => x.jsx(k, { className: d(A.container, e), ...t }));
xe.displayName = 'DraggablePanelContainer';
var Xe = xe;
const Ee = n.memo(({ className: e, ...t }) =>
  x.jsx(k, {
    horizontal: !0,
    align: 'center',
    className: d(A.footer, e),
    flex: 'none',
    gap: 8,
    justify: 'flex-start',
    ...t,
  }),
);
Ee.displayName = 'DraggablePanelFooter';
var qe = Ee;
const we = n.memo((e) => {
  const { pin: t, setPin: r, className: i, setExpand: u, title: l, position: a = 'left', ...c } = e,
    [g, s] = me(!1, { onChange: r, value: t }),
    b = x.jsx(de, { icon: Ne, size: 'small', onClick: () => u?.(!1) }),
    f = x.jsx(de, { active: t, icon: t ? Ie : je, size: 'small', onClick: () => s(!g) });
  return x.jsxs(k, {
    horizontal: !0,
    align: 'center',
    className: d(A.header, i),
    flex: 'none',
    gap: 8,
    justify: 'space-between',
    ...c,
    children: [a === 'left' ? b : f, l, a === 'left' ? f : b],
  });
});
we.displayName = 'DraggablePanelHeader';
var Ke = we;
const h = { offset: 16, toggleLength: 54, toggleShort: 16 },
  v = 'ant-draggable-panel',
  o = be(({ css: e, cssVar: t }) => {
    const r = {
        borderBottom: e`
      border-block-end: 1px solid ${t.colorBorderSecondary};
    `,
        borderBottomNone: e`
      border-block-end-width: 0;
    `,
        borderLeft: e`
      border-inline-start: 1px solid ${t.colorBorderSecondary};
    `,
        borderLeftNone: e`
      border-inline-start-width: 0;
    `,
        borderRight: e`
      border-inline-end: 1px solid ${t.colorBorderSecondary};
    `,
        borderRightNone: e`
      border-inline-end-width: 0;
    `,
        borderTop: e`
      border-block-start: 1px solid ${t.colorBorderSecondary};
    `,
        borderTopNone: e`
      border-block-start-width: 0;
    `,
      },
      i = e`
    position: absolute;
    z-index: 200;
  `,
      u = {
        bottomFloat: d(
          i,
          e`
        inset-block-end: 0;
        inset-inline: 0 0;
        width: 100%;
      `,
        ),
        leftFloat: d(
          i,
          e`
        inset-block: var(--draggable-panel-header-height, 0) 0;
        inset-inline-start: 0;
        height: calc(100% - var(--draggable-panel-header-height, 0px));
      `,
        ),
        rightFloat: d(
          i,
          e`
        inset-block: var(--draggable-panel-header-height, 0) 0;
        inset-inline-end: 0;
        height: calc(100% - var(--draggable-panel-header-height, 0px));
      `,
        ),
        topFloat: d(
          i,
          e`
        inset-block-start: var(--draggable-panel-header-height, 0);
        inset-inline: 0 0;
        width: 100%;
      `,
        ),
      },
      l = e`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      transition: all 0.2s ${t.motionEaseOut};
    }
  `,
      a = e`
    &:hover {
      &::before {
        background: ${t.colorPrimaryBorder};
        box-shadow: 0 0 8px color-mix(in srgb, ${t.colorPrimary} 25%, transparent);
      }
    }

    &:active {
      &::before {
        background: ${t.colorPrimary} !important;
      }
    }
  `,
      c = {
        handleBottom: d(
          `${v}-bottom-handle`,
          e`
        &::before {
          inset-block-end: 50%;
          width: 100%;
          height: 2px;
        }
      `,
        ),
        handleLeft: d(
          `${v}-left-handle`,
          e`
        &::before {
          inset-inline-start: 50%;
          width: 2px;
          height: 100%;
        }
      `,
        ),
        handleRight: d(
          `${v}-right-handle`,
          e`
        &::before {
          inset-inline-end: 50%;
          width: 2px;
          height: 100%;
        }
      `,
        ),
        handleRoot: l,
        handleTop: d(
          `${v}-top-handle`,
          e`
        &::before {
          inset-block-start: 50%;
          width: 100%;
          height: 2px;
        }
      `,
        ),
      },
      g = d(
        `${v}-toggle`,
        e`
      position: absolute;
      z-index: 50;
      opacity: 0;
      transition: all 0.2s ${t.motionEaseOut};

      &:hover,
      &:active {
        opacity: 1 !important;
      }

      > div {
        pointer-events: all;
        cursor: pointer;

        position: absolute;

        border: 1px solid ${t.colorBorder};

        color: ${t.colorTextTertiary};

        background: var(--draggable-panel-bg, ${t.colorBgLayout});
        backdrop-filter: blur(8px);

        transition: all 0.2s ${t.motionEaseOut};

        &:hover {
          color: ${t.colorTextSecondary};
        }

        &:active {
          color: ${t.colorText};
        }
      }
    `,
      ),
      s = e`
    pointer-events: all;
  `,
      b = e`
    pointer-events: none;
  `,
      f = {
        toggleBottom: d(
          `${v}-toggle-bottom`,
          e`
        inset-block-end: -${h.offset}px;
        width: 100%;
        height: ${h.toggleShort}px;

        > div {
          inset-inline-start: 50%;

          width: ${h.toggleLength}px;
          height: ${h.toggleShort}px;
          margin-inline-start: -27px;
          border-block-start-width: 0;
          border-radius: 0 0 ${t.borderRadiusLG} ${t.borderRadiusLG};
        }
      `,
        ),
        toggleLeft: d(
          `${v}-toggle-left`,
          e`
        inset-inline-start: -${h.offset}px;
        width: ${h.toggleShort}px;
        height: 100%;

        > div {
          inset-block-start: 50%;

          width: ${h.toggleShort}px;
          height: ${h.toggleLength}px;
          margin-block-start: -27px;
          border-inline-end-width: 0;
          border-radius: ${t.borderRadiusLG} 0 0 ${t.borderRadiusLG};
        }
      `,
        ),
        toggleRight: d(
          `${v}-toggle-right`,
          e`
        inset-inline-end: -${h.offset}px;
        width: ${h.toggleShort}px;
        height: 100%;

        > div {
          inset-block-start: 50%;

          width: ${h.toggleShort}px;
          height: ${h.toggleLength}px;
          margin-block-start: -27px;
          border-inline-start-width: 0;
          border-radius: 0 ${t.borderRadiusLG} ${t.borderRadiusLG} 0;
        }
      `,
        ),
        toggleRoot: g,
        toggleRootWithWideArea: s,
        toggleRootWithoutWideArea: b,
        toggleTop: d(
          `${v}-toggle-top`,
          e`
        inset-block-start: -${h.offset}px;
        width: 100%;
        height: ${h.toggleShort}px;

        > div {
          inset-inline-start: 50%;

          width: ${h.toggleLength}px;
          height: ${h.toggleShort}px;
          margin-inline-start: -27px;
          border-block-end-width: 0;
          border-radius: ${t.borderRadiusLG} ${t.borderRadiusLG} 0 0;
        }
      `,
        ),
      },
      E = {
        fixed: e`
      position: relative;
    `,
        fullscreen: e`
      position: absolute;
      inset-block: var(--draggable-panel-header-height, 0) 0;
      inset-inline: 0;

      width: 100%;
      height: calc(100% - var(--draggable-panel-header-height, 0px));

      background: ${t.colorBgContainer};
    `,
        handlerIcon: e`
      transition: all 0.2s ${t.motionEaseOut};
    `,
        panel: d(
          `${v}-fixed`,
          e`
        overflow: hidden;
        background: var(--draggable-panel-bg, ${t.colorBgLayout});
        transition: all 0.2s ${t.motionEaseOut};
      `,
        ),
        root: d(
          v,
          e`
        flex-shrink: 0;

        &:hover {
          > .${v}-toggle {
            opacity: 1;
          }
        }
      `,
        ),
      };
    return { ...r, ...u, ...c, handleHighlight: a, ...f, ...E };
  }),
  ce = O(o.handleRoot, {
    variants: {
      placement: {
        bottom: o.handleBottom,
        left: o.handleLeft,
        right: o.handleRight,
        top: o.handleTop,
      },
    },
  }),
  Ye = O(o.root, {
    compoundVariants: [
      { class: o.bottomFloat, mode: 'float', placement: 'bottom' },
      { class: o.topFloat, mode: 'float', placement: 'top' },
      { class: o.leftFloat, mode: 'float', placement: 'left' },
      { class: o.rightFloat, mode: 'float', placement: 'right' },
      { class: o.borderBottom, isExpand: !0, placement: 'top', showBorder: !0 },
      { class: o.borderBottomNone, isExpand: !0, placement: 'top', showBorder: !1 },
      { class: o.borderLeft, isExpand: !0, placement: 'right', showBorder: !0 },
      { class: o.borderLeftNone, isExpand: !0, placement: 'right', showBorder: !1 },
      { class: o.borderTop, isExpand: !0, placement: 'bottom', showBorder: !0 },
      { class: o.borderTopNone, isExpand: !0, placement: 'bottom', showBorder: !1 },
      { class: o.borderRight, isExpand: !0, placement: 'left', showBorder: !0 },
      { class: o.borderRightNone, isExpand: !0, placement: 'left', showBorder: !1 },
    ],
    defaultVariants: { isExpand: !1, mode: 'fixed', placement: 'right', showBorder: !0 },
    variants: {
      isExpand: { false: null, true: null },
      mode: { fixed: o.fixed, float: null },
      placement: { bottom: null, left: null, right: null, top: null },
      showBorder: { false: null, true: null },
    },
  }),
  he = O(o.toggleRoot, {
    compoundVariants: [
      { class: o.toggleRootWithWideArea, showHandleWideArea: !0 },
      { class: o.toggleRootWithoutWideArea, showHandleWideArea: !1 },
    ],
    defaultVariants: { showHandleWideArea: !1 },
    variants: {
      placement: {
        bottom: o.toggleTop,
        left: o.toggleRight,
        right: o.toggleLeft,
        top: o.toggleBottom,
      },
      showHandleWideArea: { false: null, true: null },
    },
  }),
  M = (e) => {
    switch (e) {
      case 'bottom':
        return 'top';
      case 'top':
        return 'bottom';
      case 'right':
        return 'left';
      case 'left':
        return 'right';
    }
  };
function fe(e, t) {
  if (e === t) return !0;
  for (var r = 0; r < e.length; r++) if (!Object.is(e[r], t[r])) return !1;
  return !0;
}
var $e = !!(typeof window < 'u' && window.document && window.document.createElement);
function Je(e, t) {
  var r = W(n.useState(e), 2),
    i = r[0],
    u = r[1],
    l = n.useMemo(function () {
      var a = !e,
        c = function () {
          return u(function (f) {
            return f === e ? a : e;
          });
        },
        g = function (f) {
          return u(f);
        },
        s = function () {
          return u(e);
        },
        b = function () {
          return u(a);
        };
      return { toggle: c, set: g, setLeft: s, setRight: b };
    }, []);
  return [i, l];
}
function Qe(e) {
  var t = W(Je(!1), 2),
    r = t[0],
    i = t[1],
    u = i.toggle,
    l = i.set,
    a = n.useMemo(function () {
      var c = function () {
          return l(!0);
        },
        g = function () {
          return l(!1);
        };
      return {
        toggle: u,
        set: function (s) {
          return l(!!s);
        },
        setTrue: c,
        setFalse: g,
      };
    }, []);
  return [r, a];
}
function Re(e, t) {
  if ($e) {
    if (!e) return t;
    var r;
    return (Ge(e) ? (r = e()) : 'current' in e ? (r = e.current) : (r = e), r);
  }
}
var Ve = function (e) {
    var t = function (r, i, u) {
      var l = n.useRef(!1),
        a = n.useRef([]),
        c = n.useRef([]),
        g = n.useRef(void 0);
      (e(function () {
        var s,
          b = Array.isArray(u) ? u : [u],
          f = b.map(function (E) {
            return Re(E);
          });
        if (!l.current) {
          ((l.current = !0), (a.current = f), (c.current = i), (g.current = r()));
          return;
        }
        (f.length !== a.current.length || !fe(a.current, f) || !fe(c.current, i)) &&
          ((s = g.current) === null || s === void 0 || s.call(g),
          (a.current = f),
          (c.current = i),
          (g.current = r()));
      }),
        Oe(function () {
          var s;
          ((s = g.current) === null || s === void 0 || s.call(g), (l.current = !1));
        }));
    };
    return t;
  },
  et = Ve(n.useEffect);
function pe(e, t, r) {
  r === void 0 && (r = {});
  var i = r.enable,
    u = i === void 0 ? !0 : i,
    l = We(t);
  et(
    function () {
      if (u) {
        var a = Re(r.target, window);
        if (a?.addEventListener) {
          var c = function (s) {
              return l.current(s);
            },
            g = Array.isArray(e) ? e : [e];
          return (
            g.forEach(function (s) {
              a.addEventListener(s, c, { capture: r.capture, once: r.once, passive: r.passive });
            }),
            function () {
              g.forEach(function (s) {
                a.removeEventListener(s, c, { capture: r.capture });
              });
            }
          );
        }
      }
    },
    [e, r.capture, r.once, r.passive, u],
    r.target,
  );
}
const tt = function (e, t) {
    var r = {},
      i = r.onEnter,
      u = r.onLeave,
      l = r.onChange,
      a = W(Qe(), 2),
      c = a[0],
      g = a[1],
      s = g.setTrue,
      b = g.setFalse;
    return (
      pe(
        'mouseenter',
        function () {
          (i?.(), s(), l?.(!0));
        },
        { target: e },
      ),
      pe(
        'mouseleave',
        function () {
          (u?.(), b(), l?.(!1));
        },
        { target: e },
      ),
      c
    );
  },
  rt = 180,
  ot = 280,
  nt = 0,
  at = !0,
  it = 'fixed',
  lt = !0,
  st = !0,
  dt = !0;
function ut(e, t) {
  switch (t.type) {
    case 'START_RESIZE':
      return { ...e, isResizing: !0, showExpand: !1 };
    case 'STOP_RESIZE':
      return { ...e, isResizing: !1, showExpand: !0 };
    case 'SET_SHOW_EXPAND':
      return { ...e, showExpand: t.payload };
    default:
      return e;
  }
}
const ye = n.memo(
  ({
    headerHeight: e = nt,
    fullscreen: t,
    maxHeight: r,
    pin: i = at,
    mode: u = it,
    children: l,
    placement: a = 'right',
    resize: c,
    style: g,
    showBorder: s = !0,
    showHandleHighlight: b = !1,
    showHandleWideArea: f = dt,
    backgroundColor: E,
    size: G,
    defaultSize: D,
    minWidth: T,
    minHeight: S,
    maxWidth: _,
    onSizeChange: U,
    onSizeDragging: Z,
    expandable: F = lt,
    expand: Le,
    defaultExpand: Te = st,
    onExpandChange: Se,
    className: X,
    showHandleWhenCollapsed: q,
    destroyOnClose: _e,
    styles: K,
    classNames: B,
    dir: Y,
  }) => {
    const $ = n.useRef(null),
      C = tt($),
      P = a === 'top' || a === 'bottom',
      [J, N] = n.useTransition(),
      w = n.useRef(void 0),
      { direction: Be } = n.use(De.ConfigContext),
      Q = Y ?? Be,
      p = n.useMemo(
        () =>
          Q === 'rtl' && ['left', 'right'].includes(a) ? (a === 'left' ? 'right' : 'left') : a,
        [Q, a],
      ),
      I = n.useMemo(
        () => ({ '--draggable-panel-bg': E || '', '--draggable-panel-header-height': `${e}px` }),
        [E, e],
      ),
      [m, R] = me(Te, { onChange: Se, value: Le }),
      [j, V] = n.useReducer(ut, { isResizing: !1, showExpand: !0 });
    (n.useEffect(() => {
      i ||
        (w.current && clearTimeout(w.current),
        C && !m
          ? N(() => {
              R(!0);
            })
          : !C &&
            m &&
            (w.current = setTimeout(() => {
              N(() => {
                R(!1);
              });
            }, 150)));
    }, [i, C, m, R]),
      n.useEffect(
        () => () => {
          w.current && clearTimeout(w.current);
        },
        [],
      ));
    const z = c !== !1 && m,
      ee = n.useMemo(
        () => ({
          bottom: !1,
          bottomLeft: !1,
          bottomRight: !1,
          left: !1,
          right: !1,
          top: !1,
          topLeft: !1,
          topRight: !1,
          [M(p)]: !0,
          ...c,
        }),
        [p, c],
      ),
      te = n.useMemo(
        () => (P ? { height: rt, width: '100%', ...D } : { height: '100%', width: ot, ...D }),
        [P, D],
      ),
      re = n.useMemo(
        () =>
          m
            ? {
                defaultSize: te,
                maxHeight: typeof r == 'number' ? Math.max(r, 0) : r,
                maxWidth: typeof _ == 'number' ? Math.max(_, 0) : _,
                minHeight: typeof S == 'number' ? Math.max(S, 0) : S,
                minWidth: typeof T == 'number' ? Math.max(T, 0) : T,
                size: G,
              }
            : P
              ? { minHeight: 0, size: { height: 0 } }
              : { minWidth: 0, size: { width: 0 } },
        [m, P, te, r, _, S, T, G],
      ),
      oe = n.useMemo(() => {
        switch (p) {
          case 'top':
            return Me;
          case 'bottom':
            return He;
          case 'right':
            return ge;
          case 'left':
            return ze;
          default:
            return ge;
        }
      }, [p]),
      ne = n.useCallback(() => {
        F &&
          N(() => {
            R(!m);
          });
      }, [F, m, R]),
      Pe = n.useMemo(
        () =>
          x.jsx(ue, {
            className: he({ placement: p, showHandleWideArea: f }),
            style: { opacity: m ? (i ? void 0 : 0) : q ? 1 : 0 },
            children: x.jsx(ue, {
              className: B?.handle,
              style: K?.handle,
              onClick: ne,
              children: x.jsx(Fe, {
                className: o.handlerIcon,
                icon: oe,
                size: 16,
                style: {
                  marginBottom: p === 'top' ? 4 : 0,
                  marginLeft: p === 'right' ? 4 : 0,
                  marginRight: p === 'left' ? 4 : 0,
                  marginTop: p === 'bottom' ? 4 : 0,
                  transform: `rotate(${m ? 180 : 0}deg)`,
                  transition: 'transform 0.3s ease',
                },
              }),
            }),
          }),
        [he, p, m, i, q, B?.handle, ne, K?.handle, o.handlerIcon, oe],
      ),
      ae = n.useCallback(
        (ke, Ae, y, H) => {
          Z?.(H, { height: y.style.height, width: y.style.width });
        },
        [Z],
      ),
      ie = n.useCallback(() => {
        V({ type: 'START_RESIZE' });
      }, []),
      le = n.useCallback(
        (ke, Ae, y, H) => {
          (V({ type: 'STOP_RESIZE' }), U?.(H, { height: y.style.height, width: y.style.width }));
        },
        [U],
      ),
      se = n.useMemo(
        () =>
          x.jsx(Ue, {
            ...re,
            className: d(o.panel, B?.content),
            enable: z ? ee : void 0,
            handleClasses: z ? { [M(p)]: d(ce({ placement: M(p) }), b && o.handleHighlight) } : {},
            style: {
              ...I,
              opacity: J ? 0.95 : 1,
              transition: j.isResizing ? 'unset' : void 0,
              ...g,
            },
            onResize: ae,
            onResizeStart: ie,
            onResizeStop: le,
            children: l,
          }),
        [
          re,
          o.panel,
          B?.content,
          z,
          ee,
          p,
          ce,
          b,
          o.handleHighlight,
          ae,
          ie,
          le,
          j.isResizing,
          J,
          g,
          l,
          d,
        ],
      );
    return t
      ? x.jsx('div', { className: d(o.fullscreen, X), style: I, children: l })
      : x.jsxs('aside', {
          dir: Y,
          ref: $,
          style: I,
          className: d(Ye({ isExpand: m, mode: u, placement: p, showBorder: s }), X),
          children: [F && j.showExpand && Pe, _e ? m && se : se],
        });
  },
  Ce,
);
ye.displayName = 'DraggablePanel';
var gt = ye;
const L = gt;
L.Body = Ze;
L.Container = Xe;
L.Footer = qe;
L.Header = Ke;
var Et = L;
export { Et as D, Ze as a, Xe as b, qe as c, Ke as d, Ve as e, et as f, Re as g, $e as i, tt as u };
