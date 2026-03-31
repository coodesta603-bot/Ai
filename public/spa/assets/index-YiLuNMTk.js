import { r as s, R as V } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  F as nt,
  w as st,
  c as P,
  h as Te,
  b as rt,
  C as at,
  a as de,
  u as ct,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bL as $e,
  eK as it,
  eL as lt,
  dm as ut,
  eP as mt,
  cq as ft,
  bh as se,
  b8 as dt,
  b9 as gt,
  bN as oe,
  dp as ge,
  cZ as pt,
  bb as Ae,
  be as ze,
  cK as De,
} from './index-C8UyLGsD.js';
import { R as pe } from './LeftOutlined-Pp_b6_vA.js';
const ue = s.createContext(null);
function ht(t) {
  return new Promise((e) => {
    if (!t) {
      e(!1);
      return;
    }
    const o = document.createElement('img');
    ((o.onerror = () => e(!1)), (o.onload = () => e(!0)), (o.src = t));
  });
}
function Ye() {
  const t = document.documentElement.clientWidth,
    e = window.innerHeight || document.documentElement.clientHeight;
  return { width: t, height: e };
}
const ae = { x: 0, y: 0, rotate: 0, scale: 1, flipX: !1, flipY: !1 };
function vt(t, e, o, n) {
  const c = s.useRef(null),
    r = s.useRef([]),
    [a, l] = s.useState(ae),
    d = (f) => {
      (l(ae), nt(ae, a) || n?.({ transform: ae, action: f }));
    },
    m = (f, C) => {
      (c.current === null &&
        ((r.current = []),
        (c.current = st(() => {
          l((h) => {
            let g = h;
            return (
              r.current.forEach((b) => {
                g = { ...g, ...b };
              }),
              (c.current = null),
              n?.({ transform: g, action: C }),
              g
            );
          });
        }))),
        r.current.push({ ...a, ...f }));
    };
  return {
    transform: a,
    resetTransform: d,
    updateTransform: m,
    dispatchZoomChange: (f, C, h, g, b) => {
      const {
        width: v,
        height: E,
        offsetWidth: i,
        offsetHeight: u,
        offsetLeft: w,
        offsetTop: x,
      } = t.current;
      let I = f,
        y = a.scale * f;
      y > o ? ((y = o), (I = o / a.scale)) : y < e && ((y = b ? y : e), (I = y / a.scale));
      const S = h ?? innerWidth / 2,
        k = g ?? innerHeight / 2,
        N = I - 1,
        O = N * v * 0.5,
        D = N * E * 0.5,
        A = N * (S - a.x - w),
        Y = N * (k - a.y - x);
      let R = a.x - (A - O),
        T = a.y - (Y - D);
      if (f < 1 && y === 1) {
        const z = i * y,
          _ = u * y,
          { width: X, height: $ } = Ye();
        z <= X && _ <= $ && ((R = 0), (T = 0));
      }
      m({ x: R, y: T, scale: y }, C);
    },
  };
}
function Le(t, e, o, n) {
  const c = e + o,
    r = (o - n) / 2;
  if (o > n) {
    if (e > 0) return { [t]: r };
    if (e < 0 && c < n) return { [t]: -r };
  } else if (e < 0 || c > n) return { [t]: e < 0 ? r : -r };
  return {};
}
function Xe(t, e, o, n) {
  const { width: c, height: r } = Ye();
  let a = null;
  return (
    t <= c && e <= r
      ? (a = { x: 0, y: 0 })
      : (t > c || e > r) && (a = { ...Le('x', o, t, c), ...Le('y', n, e, r) }),
    a
  );
}
const te = 1,
  wt = 1;
function Ct(t, e, o, n, c, r, a) {
  const { rotate: l, scale: d, x: m, y: p } = c,
    [f, C] = s.useState(!1),
    h = s.useRef({ diffX: 0, diffY: 0, transformX: 0, transformY: 0 }),
    g = (i) => {
      !e ||
        i.button !== 0 ||
        (i.preventDefault(),
        i.stopPropagation(),
        (h.current = { diffX: i.pageX - m, diffY: i.pageY - p, transformX: m, transformY: p }),
        C(!0));
    },
    b = (i) => {
      o && f && r({ x: i.pageX - h.current.diffX, y: i.pageY - h.current.diffY }, 'move');
    },
    v = () => {
      if (o && f) {
        C(!1);
        const { transformX: i, transformY: u } = h.current;
        if (!(m !== i && p !== u)) return;
        const x = t.current.offsetWidth * d,
          I = t.current.offsetHeight * d,
          { left: y, top: S } = t.current.getBoundingClientRect(),
          k = l % 180 !== 0,
          N = Xe(k ? I : x, k ? x : I, y, S);
        N && r({ ...N }, 'dragRebound');
      }
    },
    E = (i) => {
      if (!o || i.deltaY == 0) return;
      const u = Math.abs(i.deltaY / 100),
        w = Math.min(u, wt);
      let x = te + w * n;
      (i.deltaY > 0 && (x = te / x), a(x, 'wheel', i.clientX, i.clientY));
    };
  return (
    s.useEffect(() => {
      if (e) {
        (window.addEventListener('mouseup', v, !1), window.addEventListener('mousemove', b, !1));
        try {
          window.top !== window.self &&
            (window.top.addEventListener('mouseup', v, !1),
            window.top.addEventListener('mousemove', b, !1));
        } catch {}
      }
      return () => {
        (window.removeEventListener('mouseup', v), window.removeEventListener('mousemove', b));
        try {
          (window.top?.removeEventListener('mouseup', v),
            window.top?.removeEventListener('mousemove', b));
        } catch {}
      };
    }, [o, f, m, p, l, e]),
    { isMoving: f, onMouseDown: g, onMouseMove: b, onMouseUp: v, onWheel: E }
  );
}
function He({ src: t, isCustomPlaceholder: e, fallback: o }) {
  const [n, c] = s.useState(e ? 'loading' : 'normal'),
    r = s.useRef(!1),
    a = n === 'error';
  (s.useEffect(() => {
    let p = !0;
    return (
      ht(t).then((f) => {
        !f && p && c('error');
      }),
      () => {
        p = !1;
      }
    );
  }, [t]),
    s.useEffect(() => {
      e && !r.current ? c('loading') : a && c('normal');
    }, [t]));
  const l = () => {
    c('normal');
  };
  return [
    (p) => {
      ((r.current = !1),
        n === 'loading' &&
          p?.complete &&
          (p.naturalWidth || p.naturalHeight) &&
          ((r.current = !0), l()));
    },
    a && o ? { src: o } : { onLoad: l, src: t },
    n,
  ];
}
function ce(t, e) {
  const o = t.x - e.x,
    n = t.y - e.y;
  return Math.hypot(o, n);
}
function bt(t, e, o, n) {
  const c = ce(t, o),
    r = ce(e, n);
  if (c === 0 && r === 0) return [t.x, t.y];
  const a = c / (c + r),
    l = t.x + a * (e.x - t.x),
    d = t.y + a * (e.y - t.y);
  return [l, d];
}
function yt(t, e, o, n, c, r, a) {
  const { rotate: l, scale: d, x: m, y: p } = c,
    [f, C] = s.useState(!1),
    h = s.useRef({ point1: { x: 0, y: 0 }, point2: { x: 0, y: 0 }, eventType: 'none' }),
    g = (i) => {
      h.current = { ...h.current, ...i };
    },
    b = (i) => {
      if (!e) return;
      (i.stopPropagation(), C(!0));
      const { touches: u = [] } = i;
      u.length > 1
        ? g({
            point1: { x: u[0].clientX, y: u[0].clientY },
            point2: { x: u[1].clientX, y: u[1].clientY },
            eventType: 'touchZoom',
          })
        : g({ point1: { x: u[0].clientX - m, y: u[0].clientY - p }, eventType: 'move' });
    },
    v = (i) => {
      const { touches: u = [] } = i,
        { point1: w, point2: x, eventType: I } = h.current;
      if (u.length > 1 && I === 'touchZoom') {
        const y = { x: u[0].clientX, y: u[0].clientY },
          S = { x: u[1].clientX, y: u[1].clientY },
          [k, N] = bt(w, x, y, S),
          O = ce(y, S) / ce(w, x);
        (a(O, 'touchZoom', k, N, !0), g({ point1: y, point2: S, eventType: 'touchZoom' }));
      } else
        I === 'move' &&
          (r({ x: u[0].clientX - w.x, y: u[0].clientY - w.y }, 'move'), g({ eventType: 'move' }));
    },
    E = () => {
      if (!o) return;
      if ((f && C(!1), g({ eventType: 'none' }), n > d))
        return r({ x: 0, y: 0, scale: n }, 'touchZoom');
      const i = t.current.offsetWidth * d,
        u = t.current.offsetHeight * d,
        { left: w, top: x } = t.current.getBoundingClientRect(),
        I = l % 180 !== 0,
        y = Xe(I ? u : i, I ? i : u, w, x);
      y && r({ ...y }, 'dragRebound');
    };
  return (
    s.useEffect(() => {
      const i = (u) => {
        u.preventDefault();
      };
      return (
        o && e && window.addEventListener('touchmove', i, { passive: !1 }),
        () => {
          window.removeEventListener('touchmove', i);
        }
      );
    }, [o, e]),
    { isTouching: f, onTouchStart: b, onTouchMove: v, onTouchEnd: E }
  );
}
function xt(t) {
  const { prefixCls: e, icon: o, onClick: n, className: c, style: r } = t;
  return s.createElement('button', { className: P(`${e}-close`, c), style: r, onClick: n }, o);
}
function It(t) {
  const {
      prefixCls: e,
      showProgress: o,
      current: n,
      count: c,
      showSwitch: r,
      classNames: a,
      styles: l,
      icons: d,
      image: m,
      transform: p,
      countRender: f,
      actionsRender: C,
      scale: h,
      minScale: g,
      maxScale: b,
      onActive: v,
      onFlipY: E,
      onFlipX: i,
      onRotateLeft: u,
      onRotateRight: w,
      onZoomOut: x,
      onZoomIn: I,
      onClose: y,
      onReset: S,
    } = t,
    {
      left: k,
      right: N,
      prev: O,
      next: D,
      flipY: A,
      flipX: Y,
      rotateLeft: R,
      rotateRight: T,
      zoomOut: z,
      zoomIn: _,
    } = d,
    X =
      o &&
      s.createElement(
        'div',
        { className: `${e}-progress` },
        f ? f(n + 1, c) : s.createElement('bdi', null, `${n + 1} / ${c}`),
      ),
    $ = `${e}-actions-action`,
    M = ({ type: F, disabled: W, onClick: ee, icon: me }) =>
      s.createElement(
        'button',
        {
          'type': 'button',
          'key': F,
          'className': P($, `${$}-${F}`, { [`${$}-disabled`]: !!W }),
          'onClick': ee,
          'disabled': !!W,
          'aria-label': F,
        },
        me,
      ),
    G = r ? M({ icon: O ?? k, onClick: () => v(-1), type: 'prev', disabled: n === 0 }) : void 0,
    Z = r ? M({ icon: D ?? N, onClick: () => v(1), type: 'next', disabled: n === c - 1 }) : void 0,
    H = M({ icon: A, onClick: E, type: 'flipY' }),
    K = M({ icon: Y, onClick: i, type: 'flipX' }),
    Q = M({ icon: R, onClick: u, type: 'rotateLeft' }),
    J = M({ icon: T, onClick: w, type: 'rotateRight' }),
    q = M({ icon: z, onClick: x, type: 'zoomOut', disabled: h <= g }),
    L = M({ icon: _, onClick: I, type: 'zoomIn', disabled: h === b }),
    j = s.createElement(
      'div',
      { className: P(`${e}-actions`, a.actions), style: l.actions },
      H,
      K,
      Q,
      J,
      q,
      L,
    );
  return s.createElement(
    'div',
    { className: P(`${e}-footer`, a.footer), style: l.footer },
    X,
    C
      ? C(j, {
          icons: {
            prevIcon: G,
            nextIcon: Z,
            flipYIcon: H,
            flipXIcon: K,
            rotateLeftIcon: Q,
            rotateRightIcon: J,
            zoomOutIcon: q,
            zoomInIcon: L,
          },
          actions: {
            onActive: v,
            onFlipY: E,
            onFlipX: i,
            onRotateLeft: u,
            onRotateRight: w,
            onZoomOut: x,
            onZoomIn: I,
            onReset: S,
            onClose: y,
          },
          transform: p,
          current: n,
          total: c,
          image: m,
        })
      : j,
  );
}
function Et(t) {
  const {
      prefixCls: e,
      onActive: o,
      current: n,
      count: c,
      icons: { left: r, right: a, prev: l, next: d },
    } = t,
    m = `${e}-switch`,
    p = n === 0,
    f = n === c - 1;
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      'button',
      { className: P(m, `${m}-prev`, { [`${m}-disabled`]: p }), onClick: () => o(-1), disabled: p },
      l ?? r,
    ),
    s.createElement(
      'button',
      {
        type: 'button',
        className: P(m, `${m}-next`, { [`${m}-disabled`]: f }),
        onClick: () => o(1),
        disabled: f,
      },
      d ?? a,
    ),
  );
}
function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    ie.apply(this, arguments)
  );
}
const St = ({ fallback: t, src: e, imgRef: o, ...n }) => {
    const [c, r] = He({ src: e, fallback: t });
    return V.createElement(
      'img',
      ie(
        {
          ref: (a) => {
            ((o.current = a), c(a));
          },
        },
        n,
        r,
      ),
    );
  },
  Ze = (t) => {
    const {
        prefixCls: e,
        rootClassName: o,
        src: n,
        alt: c,
        imageInfo: r,
        fallback: a,
        movable: l = !0,
        onClose: d,
        open: m,
        afterOpenChange: p,
        icons: f = {},
        closeIcon: C,
        getContainer: h,
        current: g = 0,
        count: b = 1,
        countRender: v,
        scaleStep: E = 0.5,
        minScale: i = 1,
        maxScale: u = 50,
        motionName: w = 'fade',
        imageRender: x,
        imgCommonProps: I,
        actionsRender: y,
        onTransform: S,
        onChange: k,
        classNames: N = {},
        styles: O = {},
        mousePosition: D,
        zIndex: A,
      } = t,
      Y = s.useRef(),
      R = s.useRef(null),
      T = s.useContext(ue),
      z = T && b > 1,
      _ = T && b >= 1,
      [X, $] = s.useState(!0),
      {
        transform: M,
        resetTransform: G,
        updateTransform: Z,
        dispatchZoomChange: H,
      } = vt(Y, i, u, S),
      { isMoving: K, onMouseDown: Q, onWheel: J } = Ct(Y, l, m, E, M, Z, H),
      { isTouching: q, onTouchStart: L, onTouchMove: j, onTouchEnd: F } = yt(Y, l, m, i, M, Z, H),
      { rotate: W, scale: ee } = M;
    (s.useEffect(() => {
      X || $(!0);
    }, [X]),
      s.useEffect(() => {
        m || G('close');
      }, [m]));
    const me = (B) => {
        m &&
          (ee !== 1
            ? Z({ x: 0, y: 0, scale: 1 }, 'doubleClick')
            : H(te + E, 'doubleClick', B.clientX, B.clientY));
      },
      Se = V.createElement(
        St,
        ie({}, I, {
          width: t.width,
          height: t.height,
          imgRef: Y,
          className: `${e}-img`,
          alt: c,
          style: {
            transform: `translate3d(${M.x}px, ${M.y}px, 0) scale3d(${M.flipX ? '-' : ''}${ee}, ${M.flipY ? '-' : ''}${ee}, 1) rotate(${W}deg)`,
            transitionDuration: (!X || q) && '0s',
          },
          fallback: a,
          src: n,
          onWheel: J,
          onMouseDown: Q,
          onDoubleClick: me,
          onTouchStart: L,
          onTouchMove: j,
          onTouchEnd: F,
          onTouchCancel: F,
        }),
      ),
      Ne = { url: n, alt: c, ...r },
      We = () => {
        H(te + E, 'zoomIn');
      },
      Ve = () => {
        H(te / (te + E), 'zoomOut');
      },
      Ge = () => {
        Z({ rotate: W + 90 }, 'rotateRight');
      },
      Ke = () => {
        Z({ rotate: W - 90 }, 'rotateLeft');
      },
      Ue = () => {
        Z({ flipX: !M.flipX }, 'flipX');
      },
      Qe = () => {
        Z({ flipY: !M.flipY }, 'flipY');
      },
      Je = () => {
        G('reset');
      },
      re = (B) => {
        const U = g + B;
        U >= 0 && U <= b - 1 && ($(!1), G(B < 0 ? 'prev' : 'next'), k?.(U, g));
      },
      Me = Te((B) => {
        if (m) {
          const { keyCode: U } = B;
          z && (U === $e.LEFT ? re(-1) : U === $e.RIGHT && re(1));
        }
      });
    s.useEffect(() => {
      if (m)
        return (
          window.addEventListener('keydown', Me),
          () => {
            window.removeEventListener('keydown', Me);
          }
        );
    }, [m]);
    const [qe, Pe] = s.useState(!1);
    V.useEffect(() => {
      m && Pe(!0);
    }, [m]);
    const et = (B) => {
        (B || Pe(!1), p?.(B));
      },
      [fe, tt] = s.useState(!1);
    rt(() => {
      m && tt(!0);
    }, [m]);
    const ot = ({ top: B }) => {
      B && d?.();
    };
    it(m && fe, () => R.current);
    const Re = { ...O.body };
    return (
      D && (Re.transformOrigin = `${D.x}px ${D.y}px`),
      V.createElement(
        lt,
        { open: fe && m, autoDestroy: !1, getContainer: h, autoLock: qe, onEsc: ot },
        V.createElement(
          at,
          {
            motionName: w,
            visible: fe && m,
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            onVisibleChanged: et,
          },
          ({ className: B, style: U }) => {
            const Oe = { ...O.root, ...U };
            return (
              A && (Oe.zIndex = A),
              V.createElement(
                'div',
                {
                  'ref': R,
                  'className': P(e, o, N.root, B, { [`${e}-movable`]: l, [`${e}-moving`]: K }),
                  'style': Oe,
                  'role': 'dialog',
                  'aria-modal': 'true',
                  'aria-label': c,
                  'tabIndex': -1,
                },
                V.createElement('div', {
                  className: P(`${e}-mask`, N.mask),
                  style: O.mask,
                  onClick: d,
                }),
                V.createElement(
                  'div',
                  { className: P(`${e}-body`, N.body), style: Re },
                  x ? x(Se, { transform: M, image: Ne, ...(T ? { current: g } : {}) }) : Se,
                ),
                C !== !1 &&
                  C !== null &&
                  V.createElement(xt, {
                    prefixCls: e,
                    icon: C === !0 ? f.close : C || f.close,
                    onClick: d,
                    className: N.close,
                    style: O.close,
                  }),
                z &&
                  V.createElement(Et, {
                    prefixCls: e,
                    current: g,
                    count: b,
                    icons: f,
                    onActive: re,
                  }),
                V.createElement(It, {
                  prefixCls: e,
                  showProgress: _,
                  current: g,
                  count: b,
                  showSwitch: z,
                  classNames: N,
                  styles: O,
                  image: Ne,
                  transform: M,
                  icons: f,
                  countRender: v,
                  actionsRender: y,
                  scale: ee,
                  minScale: i,
                  maxScale: u,
                  onActive: re,
                  onFlipY: Qe,
                  onFlipX: Ue,
                  onRotateLeft: Ke,
                  onRotateRight: Ge,
                  onZoomOut: Ve,
                  onZoomIn: We,
                  onClose: d,
                  onReset: Je,
                }),
              )
            );
          },
        ),
      )
    );
  },
  he = [
    'crossOrigin',
    'decoding',
    'draggable',
    'loading',
    'referrerPolicy',
    'sizes',
    'srcSet',
    'useMap',
    'alt',
    'fetchPriority',
  ];
function Nt(t) {
  const [e, o] = s.useState({}),
    n = s.useCallback(
      (r, a) => (
        o((l) => ({ ...l, [r]: a })),
        () => {
          o((l) => {
            const d = { ...l };
            return (delete d[r], d);
          });
        }
      ),
      [],
    );
  return [
    s.useMemo(
      () =>
        t
          ? t.map((r) => {
              if (typeof r == 'string') return { data: { src: r } };
              const a = {};
              return (
                Object.keys(r).forEach((l) => {
                  ['src', ...he].includes(l) && (a[l] = r[l]);
                }),
                { data: a }
              );
            })
          : Object.keys(e).reduce((r, a) => {
              const { canPreview: l, data: d } = e[a];
              return (l && r.push({ data: d, id: a }), r);
            }, []),
      [t, e],
    ),
    n,
    !!t,
  ];
}
function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    ve.apply(this, arguments)
  );
}
const Mt = ({
  previewPrefixCls: t = 'rc-image-preview',
  classNames: e,
  styles: o,
  children: n,
  icons: c = {},
  items: r,
  preview: a,
  fallback: l,
}) => {
  const {
      open: d,
      onOpenChange: m,
      current: p,
      onChange: f,
      ...C
    } = a && typeof a == 'object' ? a : {},
    [h, g, b] = Nt(r),
    [v, E] = de(0, p),
    [i, u] = s.useState(!1),
    { src: w, ...x } = h[v]?.data || {},
    [I, y] = de(!!d, d),
    S = Te((R) => {
      (y(R), R !== I && m?.(R, { current: v }));
    }),
    [k, N] = s.useState(null),
    O = s.useCallback(
      (R, T, z, _) => {
        const X = b ? h.findIndex(($) => $.data.src === T) : h.findIndex(($) => $.id === R);
        (E(X < 0 ? 0 : X), S(!0), N({ x: z, y: _ }), u(!0));
      },
      [h, b],
    );
  s.useEffect(() => {
    I ? i || E(0) : u(!1);
  }, [I]);
  const D = (R, T) => {
      (E(R), f?.(R, T));
    },
    A = () => {
      (S(!1), N(null));
    },
    Y = s.useMemo(() => ({ register: g, onPreview: O }), [g, O]);
  return s.createElement(
    ue.Provider,
    { value: Y },
    n,
    s.createElement(
      Ze,
      ve(
        {
          'aria-hidden': !I,
          'open': I,
          'prefixCls': t,
          'onClose': A,
          'mousePosition': k,
          'imgCommonProps': x,
          'src': w,
          'fallback': l,
          'icons': c,
          'current': v,
          'count': h.length,
          'onChange': D,
        },
        C,
        { classNames: e?.popup, styles: o?.popup },
      ),
    ),
  );
};
let ke = 0;
function Pt(t, e) {
  const [o] = s.useState(() => ((ke += 1), String(ke))),
    n = s.useContext(ue),
    c = { data: e, canPreview: t };
  return (
    s.useEffect(() => {
      if (n) return n.register(o, c);
    }, []),
    s.useEffect(() => {
      n && n.register(o, c);
    }, [t, e]),
    o
  );
}
function ne() {
  return (
    (ne = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    ne.apply(this, arguments)
  );
}
const Ee = (t) => {
  const {
      prefixCls: e = 'rc-image',
      previewPrefixCls: o = `${e}-preview`,
      rootClassName: n,
      className: c,
      style: r,
      classNames: a = {},
      styles: l = {},
      width: d,
      height: m,
      src: p,
      alt: f,
      placeholder: C,
      fallback: h,
      preview: g = !0,
      onClick: b,
      onError: v,
      onKeyDown: E,
      ...i
    } = t,
    u = s.useContext(ue),
    w = !!g,
    {
      src: x,
      open: I,
      onOpenChange: y,
      cover: S,
      rootClassName: k,
      ...N
    } = g && typeof g == 'object' ? g : {},
    O = (typeof S == 'object' && S.placement && S.placement) || 'center',
    D = typeof S == 'object' && S.coverNode ? S.coverNode : S,
    [A, Y] = de(!!I, I),
    [R, T] = s.useState(null),
    z = (L) => {
      (Y(L), y?.(L));
    },
    _ = () => {
      z(!1);
    },
    X = C && C !== !0,
    $ = x ?? p,
    [M, G, Z] = He({ src: p, isCustomPlaceholder: X, fallback: h }),
    H = s.useMemo(
      () => {
        const L = {};
        return (
          he.forEach((j) => {
            t[j] !== void 0 && (L[j] = t[j]);
          }),
          L
        );
      },
      he.map((L) => t[L]),
    ),
    K = s.useMemo(() => ({ ...H, src: $ }), [$, H]),
    Q = Pt(w, K),
    J = (L) => {
      const j = L.target.getBoundingClientRect(),
        F = j.x + j.width / 2,
        W = j.y + j.height / 2;
      (u ? u.onPreview(Q, $, F, W) : (T({ x: F, y: W }), z(!0)), b?.(L));
    },
    q = (L) => {
      if ((E?.(L), !!w && (L.key === 'Enter' || L.key === ' '))) {
        L.preventDefault();
        const j = L.target.getBoundingClientRect(),
          F = j.x + j.width / 2,
          W = j.y + j.height / 2;
        u ? u.onPreview(Q, $, F, W) : (T({ x: F, y: W }), z(!0));
      }
    };
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      'div',
      ne({}, i, {
        'className': P(e, n, a.root, { [`${e}-error`]: Z === 'error' }),
        'onClick': w ? J : b,
        'role': w ? 'button' : i.role,
        'tabIndex': w && i.tabIndex == null ? 0 : i.tabIndex,
        'aria-label': w ? (i['aria-label'] ?? f) : i['aria-label'],
        'onKeyDown': q,
        'style': { width: d, height: m, ...l.root },
      }),
      s.createElement(
        'img',
        ne(
          {},
          H,
          {
            className: P(`${e}-img`, { [`${e}-img-placeholder`]: C === !0 }, a.image, c),
            style: { height: m, ...l.image, ...r },
            ref: M,
          },
          G,
          { width: d, height: m, onError: v },
        ),
      ),
      Z === 'loading' &&
        s.createElement('div', { 'aria-hidden': 'true', 'className': `${e}-placeholder` }, C),
      S !== !1 &&
        w &&
        s.createElement(
          'div',
          {
            className: P(`${e}-cover`, a.cover, `${e}-cover-${O}`),
            style: { display: r?.display === 'none' ? 'none' : void 0, ...l.cover },
          },
          D,
        ),
    ),
    !u &&
      w &&
      s.createElement(
        Ze,
        ne(
          {
            'aria-hidden': !A,
            'open': A,
            'prefixCls': o,
            'onClose': _,
            'mousePosition': R,
            'src': $,
            'alt': f,
            'imageInfo': { width: d, height: m },
            'fallback': h,
            'imgCommonProps': H,
          },
          N,
          { classNames: a?.popup, styles: l?.popup, rootClassName: P(k, n) },
        ),
      ),
  );
};
Ee.PreviewGroup = Mt;
const Be = (t, e, o, n, c, r, a) => {
  const [l] = ut('ImagePreview', t?.zIndex),
    [d, m] = mt(t?.mask, e?.mask, `${o}-preview`);
  return V.useMemo(() => {
    if (!t) return t;
    const { cover: p, getContainer: f, closeIcon: C, rootClassName: h } = t,
      { closeIcon: g } = e ?? {};
    return {
      motionName: ft(`${o}-preview`, 'fade'),
      ...t,
      ...(a ? { cover: p ?? a } : {}),
      icons: r,
      getContainer: f ?? c,
      zIndex: l,
      closeIcon: C ?? g,
      rootClassName: P(n, h),
      mask: d,
      blurClassName: m.mask,
    };
  }, [t, e, o, n, c, a, r, l, d, m]);
};
function Rt(t) {
  return s.isValidElement(t)
    ? [t, void 0]
    : typeof t == 'boolean' || (t && typeof t == 'object')
      ? [void 0, t]
      : [void 0, void 0];
}
function le(t) {
  const e = s.useMemo(
    () => (typeof t == 'boolean' ? (t ? {} : null) : t && typeof t == 'object' ? t : {}),
    [t],
  );
  return s.useMemo(() => {
    if (!e) return [e, '', ''];
    const {
      open: n,
      onOpenChange: c,
      cover: r,
      actionsRender: a,
      visible: l,
      onVisibleChange: d,
      rootClassName: m,
      maskClassName: p,
      mask: f,
      forceRender: C,
      destroyOnClose: h,
      toolbarRender: g,
      ...b
    } = e;
    let v;
    c
      ? (v = c)
      : d &&
        (v = (u, w) => {
          const { current: x } = w || {};
          x !== void 0 ? d(u, !u, x) : d(u, !u);
        });
    const [E, i] = Rt(f);
    return [
      { ...b, open: n ?? l, onOpenChange: v, cover: r ?? E, mask: i, actionsRender: a ?? g },
      m,
      p,
    ];
  }, [e]);
}
var Ot = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
      {
        tag: 'path',
        attrs: {
          d: 'M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z',
        },
      },
    ],
  },
  name: 'rotate-left',
  theme: 'outlined',
};
function we() {
  return (
    (we = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    we.apply(this, arguments)
  );
}
const $t = (t, e) => s.createElement(se, we({}, t, { ref: e, icon: Ot })),
  Lt = s.forwardRef($t);
var kt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
      {
        tag: 'path',
        attrs: {
          d: 'M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z',
        },
      },
    ],
  },
  name: 'rotate-right',
  theme: 'outlined',
};
function Ce() {
  return (
    (Ce = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    Ce.apply(this, arguments)
  );
}
const jt = (t, e) => s.createElement(se, Ce({}, t, { ref: e, icon: kt })),
  Tt = s.forwardRef(jt);
var At = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'swap',
  theme: 'outlined',
};
function be() {
  return (
    (be = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    be.apply(this, arguments)
  );
}
const zt = (t, e) => s.createElement(se, be({}, t, { ref: e, icon: At })),
  je = s.forwardRef(zt);
var Dt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
        },
      },
    ],
  },
  name: 'zoom-in',
  theme: 'outlined',
};
function ye() {
  return (
    (ye = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    ye.apply(this, arguments)
  );
}
const Yt = (t, e) => s.createElement(se, ye({}, t, { ref: e, icon: Dt })),
  Xt = s.forwardRef(Yt);
var Ht = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
        },
      },
    ],
  },
  name: 'zoom-out',
  theme: 'outlined',
};
function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    xe.apply(this, arguments)
  );
}
const Zt = (t, e) => s.createElement(se, xe({}, t, { ref: e, icon: Ht })),
  Bt = s.forwardRef(Zt),
  _e = (t) => ({ position: t || 'absolute', inset: 0 }),
  _t = (t) => {
    const { componentCls: e, motionDurationSlow: o, colorTextLightSolid: n } = t;
    return {
      [e]: {
        [`${e}-cover`]: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: n,
          background: new oe('#000').setA(0.3).toRgbString(),
          cursor: 'pointer',
          opacity: 0,
          transition: `opacity ${o}`,
        },
        '&:hover': { [`${e}-cover`]: { opacity: 1 } },
        [`${e}-cover-top`]: { inset: '0 0 auto 0', justifyContent: 'center' },
        [`${e}-cover-bottom`]: { inset: 'auto 0 0 0', justifyContent: 'center' },
      },
    };
  },
  Ft = (t) => {
    const {
        motionEaseOut: e,
        previewCls: o,
        motionDurationSlow: n,
        componentCls: c,
        colorBgMask: r,
        marginXL: a,
        marginSM: l,
        margin: d,
        colorTextLightSolid: m,
        paddingSM: p,
        paddingLG: f,
        previewOperationHoverColor: C,
        previewOperationColorDisabled: h,
        previewOperationSize: g,
        zIndexPopup: b,
      } = t,
      v = new oe(r).setA(0.1),
      E = v.clone().setA(0.2),
      i = {
        'position': 'absolute',
        'color': m,
        'backgroundColor': v.toRgbString(),
        'borderRadius': '50%',
        'padding': p,
        'outline': 0,
        'border': 0,
        'cursor': 'pointer',
        'transition': `all ${n}`,
        'display': 'flex',
        'fontSize': g,
        '&:hover': { backgroundColor: E.toRgbString() },
        '&:active': { backgroundColor: v.toRgbString() },
      };
    return {
      [`${c}-preview`]: {
        textAlign: 'center',
        inset: 0,
        position: 'fixed',
        userSelect: 'none',
        zIndex: b,
        [`${o}-mask`]: {
          inset: 0,
          position: 'absolute',
          background: r,
          backdropFilter: 'blur(0px)',
          transition: `backdrop-filter ${n}`,
          [`&${c}-preview-mask-blur`]: { backdropFilter: 'blur(4px)' },
          [`&${c}-preview-mask-hidden`]: { display: 'none' },
        },
        [`${o}-body`]: {
          ..._e(),
          'pointer-events': 'none',
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
          '> *': { pointerEvents: 'auto' },
        },
        [`${o}-img`]: {
          maxWidth: '100%',
          maxHeight: '70%',
          verticalAlign: 'middle',
          transform: 'scale3d(1, 1, 1)',
          transition: `transform ${n} ${e} 0s`,
        },
        [`&-movable ${o}-img`]: { cursor: 'grab' },
        [`&-moving ${o}-img`]: { cursor: 'grabbing' },
        [`${o}-close`]: { ...i, top: l, insetInlineEnd: l },
        [`${o}-switch`]: {
          ...i,
          'top': '50%',
          'transform': 'translateY(-50%)',
          '&-disabled': {
            '&, &:hover, &:active': { color: h, background: 'transparent', cursor: 'not-allowed' },
          },
          '&-prev': { insetInlineStart: l },
          '&-next': { insetInlineEnd: l },
        },
        [`${o}-footer`]: {
          position: 'absolute',
          bottom: a,
          left: { _skip_check_: !0, value: '50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: t.previewOperationColor,
          transform: 'translateX(-50%)',
          gap: d,
        },
        [`${o}-actions`]: {
          'display': 'flex',
          'gap': p,
          'padding': `0 ${ct(f)}`,
          'backgroundColor': v.toRgbString(),
          'borderRadius': 100,
          'fontSize': g,
          '&-action': {
            'color': 'inherit',
            'background': 'transparent',
            'border': 0,
            'font': 'inherit',
            'padding': p,
            'cursor': 'pointer',
            'transition': `all ${n}`,
            'display': 'flex',
            [`&:not(${o}-actions-action-disabled):hover`]: { color: C },
            '&-disabled': { color: h, cursor: 'not-allowed' },
          },
        },
      },
    };
  },
  Wt = (t) => {
    const { componentCls: e } = t;
    return {
      [e]: {
        position: 'relative',
        display: 'inline-block',
        [`${e}-img`]: { width: '100%', height: 'auto', verticalAlign: 'middle' },
        [`${e}-img-placeholder`]: {
          backgroundColor: t.colorBgContainerDisabled,
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '30%',
        },
        [`${e}-placeholder`]: { ..._e() },
      },
    };
  },
  Vt = (t) => {
    const { previewCls: e, motionDurationSlow: o } = t;
    return {
      [e]: {
        '&-fade': {
          'transition': `opacity ${o}`,
          '&-enter, &-appear': {
            'opacity': 0,
            [`${e}-body`]: { transform: 'scale(0)' },
            '&-active': {
              opacity: 1,
              [`${e}-body`]: { transform: 'scale(1)', transition: `transform ${o}` },
            },
          },
          '&-leave': {
            'opacity': 1,
            '&-active': {
              opacity: 0,
              [`${e}-body`]: { transform: 'scale(0)', transition: `transform ${o}` },
            },
          },
        },
      },
    };
  },
  Gt = (t) => ({
    zIndexPopup: t.zIndexPopupBase + 80,
    previewOperationColor: new oe(t.colorTextLightSolid).setA(0.65).toRgbString(),
    previewOperationHoverColor: new oe(t.colorTextLightSolid).setA(0.85).toRgbString(),
    previewOperationColorDisabled: new oe(t.colorTextLightSolid).setA(0.25).toRgbString(),
    previewOperationSize: t.fontSizeIcon * 1.5,
  }),
  Fe = dt(
    'Image',
    (t) => {
      const e = `${t.componentCls}-preview`,
        o = gt(t, { previewCls: e, imagePreviewSwitchSize: t.controlHeightLG });
      return [Wt(o), _t(o), Ft(o), Vt(o)];
    },
    Gt,
  ),
  Ie = {
    rotateLeft: s.createElement(Lt, null),
    rotateRight: s.createElement(Tt, null),
    zoomIn: s.createElement(Xt, null),
    zoomOut: s.createElement(Bt, null),
    close: s.createElement(pt, null),
    left: s.createElement(pe, null),
    right: s.createElement(ge, null),
    flipX: s.createElement(je, null),
    flipY: s.createElement(je, { rotate: 90 }),
  },
  Kt = ({ previewPrefixCls: t, preview: e, classNames: o, styles: n, ...c }) => {
    const {
        getPrefixCls: r,
        getPopupContainer: a,
        direction: l,
        preview: d,
        classNames: m,
        styles: p,
      } = Ae('image'),
      f = r('image', t),
      C = `${f}-preview`,
      h = De(f),
      [g, b] = Fe(f, h),
      v = P(g, b, h),
      [E, i, u] = le(e),
      [w, x, I] = le(d),
      y = s.useMemo(
        () => ({
          ...Ie,
          left: l === 'rtl' ? s.createElement(ge, null) : s.createElement(pe, null),
          right: l === 'rtl' ? s.createElement(pe, null) : s.createElement(ge, null),
        }),
        [l],
      ),
      S = Be(E, w, f, v, a, Ie),
      { mask: k, blurClassName: N } = S ?? {},
      O = { ...c, classNames: o, styles: n },
      [D, A] = ze(
        [
          m,
          o,
          {
            cover: P(I, u),
            popup: { root: P(x, i), mask: P({ [`${f}-preview-mask-hidden`]: !k }, N) },
          },
        ],
        [p, n],
        { props: O },
        { popup: { _default: 'root' } },
      );
    return s.createElement(Ee.PreviewGroup, {
      preview: S,
      previewPrefixCls: C,
      icons: y,
      ...c,
      classNames: D,
      styles: A,
    });
  },
  Ut = (t) => {
    const {
        prefixCls: e,
        preview: o,
        className: n,
        rootClassName: c,
        style: r,
        styles: a,
        classNames: l,
        wrapperStyle: d,
        fallback: m,
        ...p
      } = t,
      {
        getPrefixCls: f,
        getPopupContainer: C,
        className: h,
        style: g,
        preview: b,
        styles: v,
        classNames: E,
        fallback: i,
      } = Ae('image'),
      u = f('image', e),
      w = De(u),
      [x, I] = Fe(u, w),
      y = P(c, x, I, w),
      S = P(n, x, h),
      [k, N, O] = le(o),
      [D, A, Y] = le(b),
      R = Be(k, D, u, y, C, Ie, !0),
      T = { ...t, preview: R },
      z = s.useMemo(() => ({ cover: P(Y, O), popup: { root: P(A, N) } }), [N, O, A, Y]),
      { mask: _, blurClassName: X } = R ?? {},
      $ = s.useMemo(() => ({ mask: P({ [`${u}-preview-mask-hidden`]: !_ }, X) }), [_, u, X]),
      M = s.useMemo(() => [E, l, z, { popup: $ }], [E, l, z, $]),
      [G, Z] = ze(M, [v, { root: d }, a], { props: T }, { popup: { _default: 'root' } }),
      H = { ...g, ...r },
      K = m ?? i;
    return s.createElement(Ee, {
      prefixCls: u,
      preview: R || !1,
      rootClassName: y,
      className: S,
      style: H,
      fallback: K,
      ...p,
      classNames: G,
      styles: Z,
    });
  };
Ut.PreviewGroup = Kt;
export { Ut as I };
