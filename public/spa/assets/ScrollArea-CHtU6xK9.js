import {
  ge as rt,
  fm as ot,
  f as nt,
  dx as We,
  dA as lt,
  d$ as ge,
  dy as me,
  dG as fe,
  dU as st,
  gf as Fe,
  J as at,
  dB as xe,
  eC as ct,
  j as Ae,
} from './index-C8UyLGsD.js';
import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { m as Ue } from './styles-D1jYbijK.js';
const it = rt(
  () => ot`
    @property --lobe-scroll-area-fade-top {
      inherits: true;
      initial-value: 0;
      syntax: '<length>';
    }

    @property --lobe-scroll-area-fade-bottom {
      inherits: true;
      initial-value: 0;
      syntax: '<length>';
    }
  `,
);
var ft = it;
const re = nt(({ css: e, cssVar: t }) => ({
    content: e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: ${t.fontSizeSM};
    line-height: 1.375rem;
    color: ${t.colorText};
  `,
    corner: e`
    background: ${t.colorFillSecondary};
  `,
    root: e`
    position: relative;
    box-sizing: border-box;
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgLayout};
  `,
    scrollbar: e`
    pointer-events: none;

    position: relative;

    display: flex;
    justify-content: center;

    margin: 8px;
    border-radius: ${t.borderRadiusSM};

    opacity: 0;
    background: transparent;

    transition: opacity 150ms;

    &::before {
      content: '';
      position: absolute;
    }

    &[data-scrolling] {
      transition-duration: 0ms;
    }

    &[data-hovering],
    &[data-scrolling] {
      pointer-events: auto;
      opacity: 1;
    }

    &[data-orientation='vertical'] {
      width: 4px;

      &::before {
        inset-inline-start: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 100%;
      }
    }

    &[data-orientation='horizontal'] {
      height: 4px;

      &::before {
        inset-block-end: -8px;
        inset-inline: 0;
        width: 100%;
        height: 20px;
      }
    }
  `,
    thumb: e`
    width: 100%;
    border-radius: inherit;
    background: ${t.colorTextQuaternary};
  `,
    viewport: e`
    position: relative;
    height: 100%;
    outline: none;

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,
    viewportFade: e`
    --scroll-area-overflow-y-start: inherit;
    --scroll-area-overflow-y-end: inherit;
    --lobe-scroll-area-fade-size: 40px;
    --lobe-scroll-area-fade-top: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-start, 0px)
    );
    --lobe-scroll-area-fade-bottom: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-end, 0px)
    );

    /* Fade the CONTENT via mask, so it works on background images too. */
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      #000 var(--lobe-scroll-area-fade-top),
      #000 calc(100% - var(--lobe-scroll-area-fade-bottom)),
      transparent 100%
    );
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    /* Scroll-driven animation: use scroll position to drive the mask. */
    @supports (animation-timeline: scroll()) {
      /*
       * Important: drive fade by *distance to edges* (first/last 40px),
       * so reaching top/bottom doesn't cause a sudden snap.
       */
      @keyframes lobe-scroll-area-fade-top-in {
        from {
          --lobe-scroll-area-fade-top: 0;
        }

        to {
          --lobe-scroll-area-fade-top: var(--lobe-scroll-area-fade-size);
        }
      }

      @keyframes lobe-scroll-area-fade-bottom-out {
        from {
          --lobe-scroll-area-fade-bottom: var(--lobe-scroll-area-fade-size);
        }

        to {
          --lobe-scroll-area-fade-bottom: 0;
        }
      }

      animation-name: lobe-scroll-area-fade-top-in, lobe-scroll-area-fade-bottom-out;
      animation-duration: 1ms, 1ms;
      animation-timing-function: linear, linear;
      animation-fill-mode: both, both;
      animation-timeline: scroll(self y), scroll(self y);

      animation-range:
        0 var(--lobe-scroll-area-fade-size),
        calc(100% - var(--lobe-scroll-area-fade-size)) 100%;
    }
  `,
  })),
  _e = r.createContext(void 0);
function pe() {
  const e = r.useContext(_e);
  if (e === void 0) throw new Error(We(53));
  return e;
}
let Se = (function (e) {
  return (
    (e.scrollAreaCornerHeight = '--scroll-area-corner-height'),
    (e.scrollAreaCornerWidth = '--scroll-area-corner-width'),
    e
  );
})({});
const we = 500,
  ke = 16;
function z(e, t, l) {
  if (!e) return 0;
  const H = getComputedStyle(e),
    W = l === 'x' ? 'Inline' : 'Block';
  return l === 'x' && t === 'margin'
    ? parseFloat(H[`${t}InlineStart`]) * 2
    : parseFloat(H[`${t}${W}Start`]) + parseFloat(H[`${t}${W}End`]);
}
let dt = (function (e) {
    return (
      (e.orientation = 'data-orientation'),
      (e.hovering = 'data-hovering'),
      (e.scrolling = 'data-scrolling'),
      (e.hasOverflowX = 'data-has-overflow-x'),
      (e.hasOverflowY = 'data-has-overflow-y'),
      (e.overflowXStart = 'data-overflow-x-start'),
      (e.overflowXEnd = 'data-overflow-x-end'),
      (e.overflowYStart = 'data-overflow-y-start'),
      (e.overflowYEnd = 'data-overflow-y-end'),
      e
    );
  })({}),
  ie = (function (e) {
    return (
      (e.hasOverflowX = 'data-has-overflow-x'),
      (e.hasOverflowY = 'data-has-overflow-y'),
      (e.overflowXStart = 'data-overflow-x-start'),
      (e.overflowXEnd = 'data-overflow-x-end'),
      (e.overflowYStart = 'data-overflow-y-start'),
      (e.overflowYEnd = 'data-overflow-y-end'),
      e
    );
  })({});
const Ee = {
    hasOverflowX: (e) => (e ? { [ie.hasOverflowX]: '' } : null),
    hasOverflowY: (e) => (e ? { [ie.hasOverflowY]: '' } : null),
    overflowXStart: (e) => (e ? { [ie.overflowXStart]: '' } : null),
    overflowXEnd: (e) => (e ? { [ie.overflowXEnd]: '' } : null),
    overflowYStart: (e) => (e ? { [ie.overflowYStart]: '' } : null),
    overflowYEnd: (e) => (e ? { [ie.overflowYEnd]: '' } : null),
    cornerHidden: () => null,
  },
  je = { width: 0, height: 0 },
  ut = { xStart: !1, xEnd: !1, yStart: !1, yEnd: !1 },
  ht = r.forwardRef(function (t, l) {
    const { render: H, className: W, overflowEdgeThreshold: o, ...s } = t,
      [x, v] = r.useState(!1),
      [P, g] = r.useState(!1),
      [O, b] = r.useState(!1),
      [i, X] = r.useState(je),
      [S, w] = r.useState(je),
      [K, ee] = r.useState(!1),
      [I, F] = r.useState(ut),
      U = lt(),
      _ = r.useRef(null),
      m = r.useRef(null),
      B = r.useRef(null),
      L = r.useRef(null),
      T = r.useRef(null),
      f = r.useRef(null),
      G = r.useRef(null),
      c = r.useRef(!1),
      E = r.useRef(0),
      M = r.useRef(0),
      h = r.useRef(0),
      u = r.useRef(0),
      d = r.useRef('vertical'),
      y = ge(),
      k = ge(),
      j = r.useRef({ x: 0, y: 0 }),
      [Y, R] = r.useState({ scrollbarYHidden: !1, scrollbarXHidden: !1, cornerHidden: !1 }),
      Z = mt(o),
      q = me((n) => {
        const $ = n.x - j.current.x,
          Q = n.y - j.current.y;
        ((j.current = n),
          Q !== 0 &&
            (b(!0),
            y.start(we, () => {
              b(!1);
            })),
          $ !== 0 &&
            (g(!0),
            k.start(we, () => {
              g(!1);
            })));
      }),
      J = me((n) => {
        n.button === 0 &&
          ((c.current = !0),
          (E.current = n.clientY),
          (M.current = n.clientX),
          (d.current = n.currentTarget.getAttribute(dt.orientation)),
          m.current && ((h.current = m.current.scrollTop), (u.current = m.current.scrollLeft)),
          T.current && d.current === 'vertical' && T.current.setPointerCapture(n.pointerId),
          f.current && d.current === 'horizontal' && f.current.setPointerCapture(n.pointerId));
      }),
      ue = me((n) => {
        if (!c.current) return;
        const $ = n.clientY - E.current,
          Q = n.clientX - M.current;
        if (m.current) {
          const ve = m.current.scrollHeight,
            Ye = m.current.clientHeight,
            He = m.current.scrollWidth,
            Oe = m.current.clientWidth;
          if (T.current && B.current && d.current === 'vertical') {
            const ne = z(B.current, 'padding', 'y'),
              le = z(T.current, 'margin', 'y'),
              se = T.current.offsetHeight,
              ae = B.current.offsetHeight - se - ne - le,
              ce = $ / ae;
            ((m.current.scrollTop = h.current + ce * (ve - Ye)),
              n.preventDefault(),
              b(!0),
              y.start(we, () => {
                b(!1);
              }));
          }
          if (f.current && L.current && d.current === 'horizontal') {
            const ne = z(L.current, 'padding', 'x'),
              le = z(f.current, 'margin', 'x'),
              se = f.current.offsetWidth,
              ae = L.current.offsetWidth - se - ne - le,
              ce = Q / ae;
            ((m.current.scrollLeft = u.current + ce * (He - Oe)),
              n.preventDefault(),
              g(!0),
              k.start(we, () => {
                g(!1);
              }));
          }
        }
      }),
      oe = me((n) => {
        ((c.current = !1),
          T.current && d.current === 'vertical' && T.current.releasePointerCapture(n.pointerId),
          f.current && d.current === 'horizontal' && f.current.releasePointerCapture(n.pointerId));
      });
    function C(n) {
      const $ = n.pointerType === 'touch';
      if ((ee($), !$)) {
        const Q = st(_.current, n.target);
        v(Q);
      }
    }
    const A = r.useMemo(
        () => ({
          hasOverflowX: !Y.scrollbarXHidden,
          hasOverflowY: !Y.scrollbarYHidden,
          overflowXStart: I.xStart,
          overflowXEnd: I.xEnd,
          overflowYStart: I.yStart,
          overflowYEnd: I.yEnd,
          cornerHidden: Y.cornerHidden,
        }),
        [Y.scrollbarXHidden, Y.scrollbarYHidden, Y.cornerHidden, I],
      ),
      Re = {
        role: 'presentation',
        onPointerEnter: C,
        onPointerMove: C,
        onPointerDown({ pointerType: n }) {
          ee(n === 'touch');
        },
        onPointerLeave() {
          v(!1);
        },
        style: {
          position: 'relative',
          [Se.scrollAreaCornerHeight]: `${i.height}px`,
          [Se.scrollAreaCornerWidth]: `${i.width}px`,
        },
      },
      Xe = fe('div', t, { state: A, ref: [l, _], props: [Re, s], stateAttributesMapping: Ee }),
      te = r.useMemo(
        () => ({
          handlePointerDown: J,
          handlePointerMove: ue,
          handlePointerUp: oe,
          handleScroll: q,
          cornerSize: i,
          setCornerSize: X,
          thumbSize: S,
          setThumbSize: w,
          touchModality: K,
          cornerRef: G,
          scrollingX: P,
          setScrollingX: g,
          scrollingY: O,
          setScrollingY: b,
          hovering: x,
          setHovering: v,
          viewportRef: m,
          rootRef: _,
          scrollbarYRef: B,
          scrollbarXRef: L,
          thumbYRef: T,
          thumbXRef: f,
          rootId: U,
          hiddenState: Y,
          setHiddenState: R,
          overflowEdges: I,
          setOverflowEdges: F,
          viewportState: A,
          overflowEdgeThreshold: Z,
        }),
        [J, ue, oe, q, i, S, K, G, P, g, O, b, x, v, m, _, B, L, T, f, U, Y, I, A, Z],
      );
    return p.jsxs(_e.Provider, { value: te, children: [Ue.element, Xe] });
  });
function mt(e) {
  if (typeof e == 'number') {
    const t = Math.max(0, e);
    return { xStart: t, xEnd: t, yStart: t, yEnd: t };
  }
  return {
    xStart: Math.max(0, e?.xStart || 0),
    xEnd: Math.max(0, e?.xEnd || 0),
    yStart: Math.max(0, e?.yStart || 0),
    yEnd: Math.max(0, e?.yEnd || 0),
  };
}
const Be = r.createContext(void 0);
function pt() {
  const e = r.useContext(Be);
  if (e === void 0) throw new Error(We(55));
  return e;
}
function D(e, t = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, l));
}
function vt(e, t) {
  if (typeof IntersectionObserver > 'u') return () => {};
  const l = new IntersectionObserver((H) => {
    H.forEach((W) => {
      W.intersectionRatio > 0 && (t(), l.disconnect());
    });
  });
  return (
    l.observe(e),
    () => {
      l.disconnect();
    }
  );
}
let V = (function (e) {
    return (
      (e.scrollAreaOverflowXStart = '--scroll-area-overflow-x-start'),
      (e.scrollAreaOverflowXEnd = '--scroll-area-overflow-x-end'),
      (e.scrollAreaOverflowYStart = '--scroll-area-overflow-y-start'),
      (e.scrollAreaOverflowYEnd = '--scroll-area-overflow-y-end'),
      e
    );
  })({}),
  $e = !1;
function bt() {
  $e ||
    ct ||
    (typeof CSS < 'u' &&
      'registerProperty' in CSS &&
      [
        V.scrollAreaOverflowXStart,
        V.scrollAreaOverflowXEnd,
        V.scrollAreaOverflowYStart,
        V.scrollAreaOverflowYEnd,
      ].forEach((e) => {
        try {
          CSS.registerProperty({ name: e, syntax: '<length>', inherits: !1, initialValue: '0px' });
        } catch {}
      }),
    ($e = !0));
}
const wt = r.forwardRef(function (t, l) {
    const { render: H, className: W, ...o } = t,
      {
        viewportRef: s,
        scrollbarYRef: x,
        scrollbarXRef: v,
        thumbYRef: P,
        thumbXRef: g,
        cornerRef: O,
        setCornerSize: b,
        setThumbSize: i,
        rootId: X,
        setHiddenState: S,
        hiddenState: w,
        handleScroll: K,
        setHovering: ee,
        setOverflowEdges: I,
        overflowEdges: F,
        overflowEdgeThreshold: U,
      } = pe(),
      _ = Fe(),
      m = r.useRef(!0),
      B = ge(),
      L = ge();
    function T() {
      const u = s.current,
        d = x.current,
        y = v.current,
        k = P.current,
        j = g.current,
        Y = O.current;
      if (!u) return;
      const R = u.scrollHeight,
        Z = u.scrollWidth,
        q = u.clientHeight,
        J = u.clientWidth,
        ue = u.scrollTop,
        oe = u.scrollLeft;
      if (R === 0 || Z === 0) return;
      const C = q >= R,
        A = J >= Z,
        Re = J / Z,
        Xe = q / R,
        te = Math.max(0, Z - J),
        n = Math.max(0, R - q);
      let $ = 0,
        Q = 0;
      A || (_ === 'rtl' ? ($ = D(-oe, 0, te)) : ($ = D(oe, 0, te)), (Q = te - $));
      const ve = C ? 0 : D(ue, 0, n),
        Ye = C ? 0 : n - ve,
        He = A ? 0 : J,
        Oe = C ? 0 : q,
        ne = z(y, 'padding', 'x'),
        le = z(d, 'padding', 'y'),
        se = z(j, 'margin', 'x'),
        ae = z(k, 'margin', 'y'),
        ce = He - ne - se,
        Pe = Oe - le - ae,
        Ve = y ? Math.min(y.offsetWidth, ce) : ce,
        et = d ? Math.min(d.offsetHeight, Pe) : Pe,
        Te = Math.max(ke, Ve * Re),
        Me = Math.max(ke, et * Xe);
      if ((i((a) => (a.height === Me && a.width === Te ? a : { width: Te, height: Me })), d && k)) {
        const a = d.offsetHeight - Me - le - ae,
          N = R - q,
          be = N === 0 ? 0 : ue / N,
          Ce = Math.min(a, Math.max(0, be * a));
        k.style.transform = `translate3d(0,${Ce}px,0)`;
      }
      if (y && j) {
        const a = y.offsetWidth - Te - ne - se,
          N = Z - J,
          be = N === 0 ? 0 : oe / N,
          Ce = _ === 'rtl' ? D(be * a, -a, 0) : D(be * a, 0, a);
        j.style.transform = `translate3d(${Ce}px,0,0)`;
      }
      const Ne = D($, 0, te),
        ze = D(Q, 0, te),
        Ie = D(ve, 0, n),
        Le = D(Ye, 0, n),
        tt = [
          [V.scrollAreaOverflowXStart, Ne],
          [V.scrollAreaOverflowXEnd, ze],
          [V.scrollAreaOverflowYStart, Ie],
          [V.scrollAreaOverflowYEnd, Le],
        ];
      for (const [a, N] of tt) u.style.setProperty(a, `${N}px`);
      if (Y) {
        if (A || C) b({ width: 0, height: 0 });
        else if (!A && !C) {
          const a = d?.offsetWidth || 0,
            N = y?.offsetHeight || 0;
          b({ width: a, height: N });
        }
      }
      S((a) => {
        const N = C || A;
        return a.scrollbarYHidden === C && a.scrollbarXHidden === A && a.cornerHidden === N
          ? a
          : { scrollbarYHidden: C, scrollbarXHidden: A, cornerHidden: N };
      });
      const he = {
        xStart: !A && Ne > U.xStart,
        xEnd: !A && ze > U.xEnd,
        yStart: !C && Ie > U.yStart,
        yEnd: !C && Le > U.yEnd,
      };
      I((a) =>
        a.xStart === he.xStart && a.xEnd === he.xEnd && a.yStart === he.yStart && a.yEnd === he.yEnd
          ? a
          : he,
      );
    }
    const f = me(() => {
      at.flushSync(T);
    });
    (xe(() => (s.current ? (bt(), vt(s.current, f)) : void 0), [f, s]),
      xe(() => {
        queueMicrotask(f);
      }, [f, w, _]),
      xe(() => {
        s.current?.matches(':hover') && ee(!0);
      }, [s, ee]),
      r.useEffect(() => {
        const u = s.current;
        if (typeof ResizeObserver > 'u' || !u) return;
        const d = new ResizeObserver(f);
        return (
          d.observe(u),
          L.start(0, () => {
            Promise.all(u.getAnimations({ subtree: !0 }).map((y) => y.finished))
              .then(f)
              .catch(() => {});
          }),
          () => {
            (d.disconnect(), L.clear());
          }
        );
      }, [f, s, L]));
    function G() {
      m.current = !1;
    }
    const c = {
        role: 'presentation',
        ...(X && { 'data-id': `${X}-viewport` }),
        ...((!w.scrollbarXHidden || !w.scrollbarYHidden) && { tabIndex: 0 }),
        className: Ue.className,
        style: { overflow: 'scroll' },
        onScroll() {
          s.current &&
            (f(),
            m.current || K({ x: s.current.scrollLeft, y: s.current.scrollTop }),
            B.start(100, () => {
              m.current = !0;
            }));
        },
        onWheel: G,
        onTouchMove: G,
        onPointerMove: G,
        onPointerEnter: G,
        onKeyDown: G,
      },
      E = r.useMemo(
        () => ({
          hasOverflowX: !w.scrollbarXHidden,
          hasOverflowY: !w.scrollbarYHidden,
          overflowXStart: F.xStart,
          overflowXEnd: F.xEnd,
          overflowYStart: F.yStart,
          overflowYEnd: F.yEnd,
          cornerHidden: w.cornerHidden,
        }),
        [w.scrollbarXHidden, w.scrollbarYHidden, w.cornerHidden, F],
      ),
      M = fe('div', t, { ref: [l, s], state: E, props: [c, o], stateAttributesMapping: Ee }),
      h = r.useMemo(() => ({ computeThumbPosition: f }), [f]);
    return p.jsx(Be.Provider, { value: h, children: M });
  }),
  Ge = r.createContext(void 0);
function xt() {
  const e = r.useContext(Ge);
  if (e === void 0) throw new Error(We(54));
  return e;
}
let ye = (function (e) {
  return (
    (e.scrollAreaThumbHeight = '--scroll-area-thumb-height'),
    (e.scrollAreaThumbWidth = '--scroll-area-thumb-width'),
    e
  );
})({});
const gt = r.forwardRef(function (t, l) {
    const { render: H, className: W, orientation: o = 'vertical', keepMounted: s = !1, ...x } = t,
      {
        hovering: v,
        scrollingX: P,
        scrollingY: g,
        hiddenState: O,
        overflowEdges: b,
        scrollbarYRef: i,
        scrollbarXRef: X,
        viewportRef: S,
        thumbYRef: w,
        thumbXRef: K,
        handlePointerDown: ee,
        handlePointerUp: I,
        rootId: F,
        thumbSize: U,
      } = pe(),
      _ = r.useMemo(
        () => ({
          hovering: v,
          scrolling: { horizontal: P, vertical: g }[o],
          orientation: o,
          hasOverflowX: !O.scrollbarXHidden,
          hasOverflowY: !O.scrollbarYHidden,
          overflowXStart: b.xStart,
          overflowXEnd: b.xEnd,
          overflowYStart: b.yStart,
          overflowYEnd: b.yEnd,
          cornerHidden: O.cornerHidden,
        }),
        [v, P, g, o, O, b],
      ),
      m = Fe();
    r.useEffect(() => {
      const c = S.current,
        E = o === 'vertical' ? i.current : X.current;
      if (!E) return;
      function M(h) {
        if (!(!c || !E || h.ctrlKey)) {
          if ((h.preventDefault(), o === 'vertical')) {
            if (c.scrollTop === 0 && h.deltaY < 0) return;
          } else if (c.scrollLeft === 0 && h.deltaX < 0) return;
          if (o === 'vertical') {
            if (c.scrollTop === c.scrollHeight - c.clientHeight && h.deltaY > 0) return;
          } else if (c.scrollLeft === c.scrollWidth - c.clientWidth && h.deltaX > 0) return;
          o === 'vertical' ? (c.scrollTop += h.deltaY) : (c.scrollLeft += h.deltaX);
        }
      }
      return (
        E.addEventListener('wheel', M, { passive: !1 }),
        () => {
          E.removeEventListener('wheel', M);
        }
      );
    }, [o, X, i, S]);
    const B = {
        ...(F && { 'data-id': `${F}-scrollbar` }),
        onPointerDown(c) {
          if (c.button === 0 && c.currentTarget === c.target && S.current) {
            if (w.current && i.current && o === 'vertical') {
              const E = z(w.current, 'margin', 'y'),
                M = z(i.current, 'padding', 'y'),
                h = w.current.offsetHeight,
                u = i.current.getBoundingClientRect(),
                d = c.clientY - u.top - h / 2 - M + E / 2,
                y = S.current.scrollHeight,
                k = S.current.clientHeight,
                j = i.current.offsetHeight - h - M - E,
                R = (d / j) * (y - k);
              S.current.scrollTop = R;
            }
            if (K.current && X.current && o === 'horizontal') {
              const E = z(K.current, 'margin', 'x'),
                M = z(X.current, 'padding', 'x'),
                h = K.current.offsetWidth,
                u = X.current.getBoundingClientRect(),
                d = c.clientX - u.left - h / 2 - M + E / 2,
                y = S.current.scrollWidth,
                k = S.current.clientWidth,
                j = X.current.offsetWidth - h - M - E,
                Y = d / j;
              let R;
              (m === 'rtl'
                ? ((R = (1 - Y) * (y - k)), S.current.scrollLeft <= 0 && (R = -R))
                : (R = Y * (y - k)),
                (S.current.scrollLeft = R));
            }
            ee(c);
          }
        },
        onPointerUp: I,
        style: {
          position: 'absolute',
          touchAction: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          ...(o === 'vertical' && {
            top: 0,
            bottom: `var(${Se.scrollAreaCornerHeight})`,
            insetInlineEnd: 0,
            [ye.scrollAreaThumbHeight]: `${U.height}px`,
          }),
          ...(o === 'horizontal' && {
            insetInlineStart: 0,
            insetInlineEnd: `var(${Se.scrollAreaCornerWidth})`,
            bottom: 0,
            [ye.scrollAreaThumbWidth]: `${U.width}px`,
          }),
        },
      },
      L = fe('div', t, {
        ref: [l, o === 'vertical' ? i : X],
        state: _,
        props: [B, x],
        stateAttributesMapping: Ee,
      }),
      T = r.useMemo(() => ({ orientation: o }), [o]),
      f = o === 'vertical' ? O.scrollbarYHidden : O.scrollbarXHidden;
    return s || !f ? p.jsx(Ge.Provider, { value: T, children: L }) : null;
  }),
  St = r.forwardRef(function (t, l) {
    const { render: H, className: W, ...o } = t,
      s = r.useRef(null),
      { computeThumbPosition: x } = pt(),
      { viewportState: v } = pe();
    return (
      xe(() => {
        if (typeof ResizeObserver > 'u') return;
        const g = new ResizeObserver(x);
        return (
          s.current && g.observe(s.current),
          () => {
            g.disconnect();
          }
        );
      }, [x]),
      fe('div', t, {
        ref: [l, s],
        state: v,
        stateAttributesMapping: Ee,
        props: [{ role: 'presentation', style: { minWidth: 'fit-content' } }, o],
      })
    );
  }),
  yt = r.forwardRef(function (t, l) {
    const { render: H, className: W, ...o } = t,
      {
        thumbYRef: s,
        thumbXRef: x,
        handlePointerDown: v,
        handlePointerMove: P,
        handlePointerUp: g,
        setScrollingX: O,
        setScrollingY: b,
      } = pe(),
      { orientation: i } = xt(),
      X = r.useMemo(() => ({ orientation: i }), [i]);
    return fe('div', t, {
      ref: [l, i === 'vertical' ? s : x],
      state: X,
      props: [
        {
          onPointerDown: v,
          onPointerMove: P,
          onPointerUp(w) {
            (i === 'vertical' && b(!1), i === 'horizontal' && O(!1), g(w));
          },
          style: {
            ...(i === 'vertical' && { height: `var(${ye.scrollAreaThumbHeight})` }),
            ...(i === 'horizontal' && { width: `var(${ye.scrollAreaThumbWidth})` }),
          },
        },
        o,
      ],
    });
  }),
  Et = r.forwardRef(function (t, l) {
    const { render: H, className: W, ...o } = t,
      { cornerRef: s, cornerSize: x, hiddenState: v } = pe(),
      P = fe('div', t, {
        ref: [l, s],
        props: [
          {
            style: {
              position: 'absolute',
              bottom: 0,
              insetInlineEnd: 0,
              width: x.width,
              height: x.height,
            },
          },
          o,
        ],
      });
    return v.cornerHidden ? null : P;
  }),
  de = (e, t) => (typeof t == 'function' ? (l) => Ae(e, t(l)) : Ae(e, t)),
  De = ({ className: e, ...t }) => p.jsx(ht, { ...t, className: de(re.root, e) });
De.displayName = 'ScrollAreaRoot';
const Ke = ({ className: e, scrollFade: t = !1, ...l }) =>
  p.jsxs(p.Fragment, {
    children: [
      p.jsx(ft, {}),
      p.jsx(wt, { ...l, className: de(Ae(re.viewport, t && re.viewportFade), e) }),
    ],
  });
Ke.displayName = 'ScrollAreaViewport';
const Ze = ({ className: e, ...t }) => p.jsx(St, { ...t, className: de(re.content, e) });
Ze.displayName = 'ScrollAreaContent';
const qe = ({ className: e, ...t }) => p.jsx(gt, { ...t, className: de(re.scrollbar, e) });
qe.displayName = 'ScrollAreaScrollbar';
const Je = ({ className: e, ...t }) => p.jsx(yt, { ...t, className: de(re.thumb, e) });
Je.displayName = 'ScrollAreaThumb';
const Qe = ({ className: e, ...t }) => p.jsx(Et, { ...t, className: de(re.corner, e) });
Qe.displayName = 'ScrollAreaCorner';
const Ot = ({
  children: e,
  contentProps: t,
  corner: l = !1,
  cornerProps: H,
  scrollFade: W = !1,
  scrollbarProps: o,
  thumbProps: s,
  viewportProps: x,
  ...v
}) =>
  p.jsxs(De, {
    ...v,
    children: [
      p.jsx(Ke, { scrollFade: W, ...x, children: p.jsx(Ze, { ...t, children: e }) }),
      p.jsx(qe, { ...o, children: p.jsx(Je, { ...s }) }),
      l && p.jsx(Qe, { ...H }),
    ],
  });
export { Ot as S, Ze as a, Qe as b, De as c, qe as d, Je as e, Ke as f };
