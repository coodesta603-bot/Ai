import {
  ct as $e,
  b8 as Re,
  bb as be,
  bm as ue,
  cL as me,
  b9 as _e,
  cl as Oe,
  ba as De,
  be as Fe,
  cK as He,
} from './index-C8UyLGsD.js';
import { R as l, r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as ge, c as N, u as ae, h as le } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { e as qe } from './useForm-By-Y7CLc.js';
import { g as We, s as Xe } from './scrollTo-DrqiKkdE.js';
function xe(t) {
  let e = null;
  const o = (i) => () => {
      ((e = null), t.apply(void 0, $e(i)));
    },
    c = (...i) => {
      e === null && (e = ge(o(i)));
    };
  return (
    (c.cancel = () => {
      (ge.cancel(e), (e = null));
    }),
    c
  );
}
const Ve = (t) => {
    const { componentCls: e } = t;
    return { [e]: { position: 'fixed', zIndex: t.zIndexPopup } };
  },
  Ue = (t) => ({ zIndexPopup: t.zIndexBase + 10 }),
  Ge = Re('Affix', Ve, Ue);
function re(t) {
  return t !== window ? t.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
}
function ye(t, e, o) {
  if (o !== void 0 && Math.round(e.top) > Math.round(t.top) - o) return o + e.top;
}
function Ce(t, e, o) {
  if (o !== void 0 && Math.round(e.bottom) < Math.round(t.bottom) + o) {
    const c = window.innerHeight - e.bottom;
    return o + c;
  }
}
const Se = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
  je = () => (typeof window < 'u' ? window : null),
  ke = 0,
  ve = 1,
  Je = l.forwardRef((t, e) => {
    const {
        style: o,
        offsetTop: c,
        offsetBottom: i,
        prefixCls: f,
        className: g,
        rootClassName: $,
        children: B,
        target: P,
        onChange: x,
        onTestUpdatePosition: G,
        ...C
      } = t,
      { getPrefixCls: O, className: j, style: D } = be('affix'),
      { getTargetContainer: y } = l.useContext(ue),
      F = O('affix', f),
      [H, R] = l.useState(!1),
      [d, q] = l.useState(),
      [k, b] = l.useState(),
      v = l.useRef(ke),
      T = l.useRef(null),
      w = l.useRef(null),
      S = l.useRef(null),
      J = l.useRef(null),
      W = l.useRef(null),
      L = P ?? y ?? je,
      Q = i === void 0 && c === void 0 ? 0 : c,
      ie = () => {
        if (v.current !== ve || !J.current || !S.current || !L) return;
        const h = L();
        if (h) {
          const s = { status: ke },
            a = re(S.current);
          if (a.top === 0 && a.left === 0 && a.width === 0 && a.height === 0) return;
          const M = re(h),
            E = ye(a, M, Q),
            V = Ce(a, M, i);
          (E !== void 0
            ? ((s.affixStyle = { position: 'fixed', top: E, width: a.width, height: a.height }),
              (s.placeholderStyle = { width: a.width, height: a.height }))
            : V !== void 0 &&
              ((s.affixStyle = { position: 'fixed', bottom: V, width: a.width, height: a.height }),
              (s.placeholderStyle = { width: a.width, height: a.height })),
            (s.lastAffix = !!s.affixStyle),
            H !== s.lastAffix && x?.(s.lastAffix),
            (v.current = s.status),
            q(s.affixStyle),
            b(s.placeholderStyle),
            R(s.lastAffix));
        }
      },
      Z = () => {
        ((v.current = ve), ie());
      },
      I = xe(() => {
        Z();
      }),
      X = xe(() => {
        if (L && d) {
          const h = L();
          if (h && S.current) {
            const s = re(h),
              a = re(S.current),
              M = ye(a, s, Q),
              E = Ce(a, s, i);
            if ((M !== void 0 && d.top === M) || (E !== void 0 && d.bottom === E)) return;
          }
        }
        Z();
      }),
      p = () => {
        const h = L?.();
        h &&
          (Se.forEach((s) => {
            (w.current && T.current?.removeEventListener(s, w.current), h?.addEventListener(s, X));
          }),
          (T.current = h),
          (w.current = X));
      },
      K = () => {
        const h = L?.();
        (Se.forEach((s) => {
          (h?.removeEventListener(s, X), w.current && T.current?.removeEventListener(s, w.current));
        }),
          I.cancel(),
          X.cancel());
      };
    (l.useImperativeHandle(e, () => ({ updatePosition: I })),
      l.useEffect(
        () => (
          (W.current = setTimeout(p)),
          () => {
            (W.current && (clearTimeout(W.current), (W.current = null)), K());
          }
        ),
        [],
      ),
      l.useEffect(() => (p(), () => K()), [P, d, H, c, i]),
      l.useEffect(() => {
        I();
      }, [P, c, i]));
    const [se, ce] = Ge(F),
      z = N($, se, F, ce),
      ee = N({ [z]: d });
    return l.createElement(
      me,
      { onResize: I },
      l.createElement(
        'div',
        { style: { ...D, ...o }, className: N(g, j), ref: S, ...C },
        d && l.createElement('div', { 'style': k, 'aria-hidden': 'true' }),
        l.createElement(
          'div',
          { className: ee, ref: J, style: d },
          l.createElement(me, { onResize: I }, B),
        ),
      ),
    );
  }),
  Te = r.createContext(void 0),
  Le = (t) => {
    const { href: e, title: o, prefixCls: c, children: i, className: f, target: g, replace: $ } = t,
      B = r.useContext(Te),
      {
        registerLink: P,
        unregisterLink: x,
        scrollTo: G,
        onClick: C,
        activeLink: O,
        direction: j,
        classNames: D,
        styles: y,
      } = B || {};
    r.useEffect(
      () => (
        P?.(e),
        () => {
          x?.(e);
        }
      ),
      [e],
    );
    const F = (b) => {
        if ((C?.(b, { title: o, href: e }), G?.(e), b.defaultPrevented)) return;
        if (e.startsWith('http://') || e.startsWith('https://')) {
          $ && (b.preventDefault(), window.location.replace(e));
          return;
        }
        b.preventDefault();
        const T = $ ? 'replaceState' : 'pushState';
        window.history[T](null, '', e);
      },
      { getPrefixCls: H } = r.useContext(ue),
      R = H('anchor', c),
      d = O === e,
      q = N(`${R}-link`, f, D?.item, { [`${R}-link-active`]: d }),
      k = N(`${R}-link-title`, D?.itemTitle, { [`${R}-link-title-active`]: d });
    return r.createElement(
      'div',
      { className: q, style: y?.item },
      r.createElement(
        'a',
        {
          className: k,
          style: y?.itemTitle,
          href: e,
          title: typeof o == 'string' ? o : '',
          target: g,
          onClick: F,
        },
        o,
      ),
      j !== 'horizontal' ? i : null,
    );
  },
  Ke = (t) => {
    const {
      componentCls: e,
      holderOffsetBlock: o,
      motionDurationSlow: c,
      lineWidthBold: i,
      colorPrimary: f,
      lineType: g,
      colorSplit: $,
      calc: B,
    } = t;
    return {
      [`${e}-wrapper`]: {
        marginBlockStart: B(o).mul(-1).equal(),
        paddingBlockStart: o,
        [e]: {
          ...De(t),
          position: 'relative',
          paddingInlineStart: i,
          [`${e}-link`]: {
            'paddingBlock': t.linkPaddingBlock,
            'paddingInline': `${ae(t.linkPaddingInlineStart)} 0`,
            '&-title': {
              ...Oe,
              'position': 'relative',
              'display': 'block',
              'marginBlockEnd': t.anchorTitleBlock,
              'color': t.colorText,
              'transition': `all ${t.motionDurationSlow}`,
              '&:only-child': { marginBlockEnd: 0 },
            },
            [`&-active > ${e}-link-title`]: { color: t.colorPrimary },
            [`${e}-link`]: { paddingBlock: t.anchorPaddingBlockSecondary },
          },
        },
        [`&:not(${e}-wrapper-horizontal)`]: {
          [e]: {
            '&::before': {
              position: 'absolute',
              insetInlineStart: 0,
              top: 0,
              height: '100%',
              borderInlineStart: `${ae(i)} ${g} ${$}`,
              content: '" "',
            },
            [`${e}-ink`]: {
              position: 'absolute',
              insetInlineStart: 0,
              display: 'none',
              transform: 'translateY(-50%)',
              transition: `top ${c} ease-in-out`,
              width: i,
              backgroundColor: f,
              [`&${e}-ink-visible`]: { display: 'inline-block' },
            },
          },
        },
        [`${e}-fixed ${e}-ink ${e}-ink`]: { display: 'none' },
      },
    };
  },
  Ye = (t) => {
    const { componentCls: e, motionDurationSlow: o, lineWidthBold: c, colorPrimary: i } = t;
    return {
      [`${e}-wrapper-horizontal`]: {
        'position': 'relative',
        '&::before': {
          position: 'absolute',
          left: { _skip_check_: !0, value: 0 },
          right: { _skip_check_: !0, value: 0 },
          bottom: 0,
          borderBottom: `${ae(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,
          content: '" "',
        },
        [e]: {
          'overflowX': 'scroll',
          'position': 'relative',
          'display': 'flex',
          'scrollbarWidth': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          [`${e}-link:first-of-type`]: { paddingInline: 0 },
          [`${e}-ink`]: {
            position: 'absolute',
            bottom: 0,
            transition: ['left', 'width'].map((f) => `${f} ${o} ease-in-out`).join(', '),
            height: c,
            backgroundColor: i,
          },
        },
      },
    };
  },
  Qe = (t) => ({ linkPaddingBlock: t.paddingXXS, linkPaddingInlineStart: t.padding }),
  Ze = Re(
    'Anchor',
    (t) => {
      const { fontSize: e, fontSizeLG: o, paddingXXS: c, calc: i } = t,
        f = _e(t, {
          holderOffsetBlock: c,
          anchorPaddingBlockSecondary: i(c).div(2).equal(),
          anchorTitleBlock: i(e).div(14).mul(3).equal(),
          anchorBallSize: i(o).div(2).equal(),
        });
      return [Ke(f), Ye(f)];
    },
    Qe,
  );
function et() {
  return window;
}
function we(t, e) {
  if (!t.getClientRects().length) return 0;
  const o = t.getBoundingClientRect();
  return o.width || o.height
    ? e === window
      ? o.top - t.ownerDocument.documentElement.clientTop
      : o.top - e.getBoundingClientRect().top
    : o.top;
}
const Ee = /#([\S ]+)$/,
  tt = (t) => {
    const {
        rootClassName: e,
        prefixCls: o,
        className: c,
        style: i,
        offsetTop: f,
        affix: g = !0,
        showInkInFixed: $ = !1,
        children: B,
        items: P,
        direction: x = 'vertical',
        bounds: G,
        targetOffset: C,
        onClick: O,
        onChange: j,
        getContainer: D,
        getCurrentAnchor: y,
        replace: F,
        classNames: H,
        styles: R,
      } = t,
      [d, q] = r.useState([]),
      [k, b] = r.useState(null),
      v = r.useRef(k),
      T = r.useRef(null),
      w = r.useRef(null),
      S = r.useRef(!1),
      J = r.useRef(null),
      {
        direction: W,
        getPrefixCls: L,
        className: Q,
        style: ie,
        classNames: Z,
        styles: I,
      } = be('anchor'),
      { getTargetContainer: X } = r.useContext(ue),
      p = L('anchor', o),
      K = He(p),
      [se, ce] = Ze(p, K),
      z = D ?? X ?? et,
      ee = JSON.stringify(d),
      h = le((n) => {
        d.includes(n) || q((u) => [].concat($e(u), [n]));
      }),
      s = le((n) => {
        d.includes(n) && q((u) => u.filter((m) => m !== n));
      }),
      a = () => {
        const n = T.current?.querySelector(`.${p}-link-title-active`);
        if (n && w.current) {
          const { style: u } = w.current,
            m = x === 'horizontal';
          ((u.top = m ? '' : `${n.offsetTop + n.clientHeight / 2}px`),
            (u.height = m ? '' : `${n.clientHeight}px`),
            (u.left = m ? `${n.offsetLeft}px` : ''),
            (u.width = m ? `${n.clientWidth}px` : ''),
            m && qe(n, { scrollMode: 'if-needed', block: 'nearest' }));
        }
      },
      M = (n, u = 0, m = 5) => {
        const U = [],
          oe = z();
        return (
          n.forEach((Y) => {
            const _ = Ee.exec(Y?.toString());
            if (!_) return;
            const A = document.getElementById(_[1]);
            if (A) {
              const he = we(A, oe);
              he <= u + m && U.push({ link: Y, top: he });
            }
          }),
          U.length ? U.reduce((_, A) => (A.top > _.top ? A : _)).link : ''
        );
      },
      E = le((n) => {
        if (v.current === n) return;
        const u = typeof y == 'function' ? y(n) : n;
        (b(u), (v.current = u), j?.(n));
      }),
      V = r.useCallback(() => {
        if (S.current) return;
        const n = M(d, C !== void 0 ? C : f || 0, G);
        E(n);
      }, [d, C, f, G]),
      fe = r.useCallback(
        (n) => {
          const u = v.current;
          E(n);
          const m = Ee.exec(n);
          if (!m) return;
          const U = document.getElementById(m[1]);
          if (!U) return;
          if (S.current) {
            if (u === n) return;
            J.current?.();
          }
          const oe = z(),
            Y = We(oe),
            _ = we(U, oe);
          let A = Y + _;
          ((A -= C !== void 0 ? C : f || 0),
            (S.current = !0),
            (J.current = Xe(A, {
              getContainer: z,
              callback() {
                S.current = !1;
              },
            })));
        },
        [C, f],
      ),
      Ae = { ...t, direction: x },
      [te, ne] = Fe([Z, H], [I, R], { props: Ae }),
      Ne = N(
        se,
        ce,
        K,
        e,
        `${p}-wrapper`,
        { [`${p}-wrapper-horizontal`]: x === 'horizontal', [`${p}-rtl`]: W === 'rtl' },
        c,
        Q,
        te.root,
      ),
      Be = N(p, { [`${p}-fixed`]: !g && !$ }),
      Pe = N(`${p}-ink`, te.indicator, { [`${p}-ink-visible`]: k }),
      Ie = { maxHeight: f ? `calc(100vh - ${f}px)` : '100vh', ...ne.root, ...ie, ...i },
      de = (n) =>
        Array.isArray(n)
          ? n.map((u) =>
              r.createElement(
                Le,
                { replace: F, ...u, key: u.key },
                x === 'vertical' && de(u.children),
              ),
            )
          : null,
      pe = r.createElement(
        'div',
        { ref: T, className: Ne, style: Ie },
        r.createElement(
          'div',
          { className: Be },
          r.createElement('span', { className: Pe, ref: w, style: ne.indicator }),
          'items' in t ? de(P) : B,
        ),
      );
    (r.useEffect(() => {
      const n = z();
      return (
        V(),
        n?.addEventListener('scroll', V),
        () => {
          n?.removeEventListener('scroll', V);
        }
      );
    }, [ee]),
      r.useEffect(() => {
        typeof y == 'function' && E(y(v.current || ''));
      }, [y]),
      r.useEffect(() => {
        a();
      }, [x, y, ee, k]));
    const ze = r.useMemo(
        () => ({
          registerLink: h,
          unregisterLink: s,
          scrollTo: fe,
          activeLink: k,
          onClick: O,
          direction: x,
          classNames: te,
          styles: ne,
        }),
        [k, O, fe, x, ne, te],
      ),
      Me = g && typeof g == 'object' ? g : void 0;
    return r.createElement(
      Te.Provider,
      { value: ze },
      g ? r.createElement(Je, { offsetTop: f, target: z, ...Me }, pe) : pe,
    );
  },
  nt = tt;
nt.Link = Le;
export { nt as A, Je as a, xe as t };
