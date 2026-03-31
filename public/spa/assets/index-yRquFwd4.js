import { j as U } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as z } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { J as pe } from './index-C8UyLGsD.js';
const Z = null,
  { min: D, max: I, abs: re, floor: me } = Math,
  se = (e, t, r) => D(r, I(t, e)),
  le = (e) => [...e].sort((t, r) => t - r),
  ie =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : (e) => {
          Promise.resolve().then(e);
        },
  Q = () => {
    let e;
    return [
      new Promise((t) => {
        e = t;
      }),
      e,
    ];
  },
  ce = (e) => {
    let t;
    return () => (e && ((t = e()), (e = void 0)), t);
  },
  G = (e, t, r) => {
    const n = r ? 'unshift' : 'push';
    for (let l = 0; l < t; l++) e[n](-1);
    return e;
  },
  ae = (e, t) => {
    const r = e.t[t];
    return r === -1 ? e.o : r;
  },
  ye = (e, t, r) => {
    const n = e.t[t] === -1;
    return ((e.t[t] = r), (e.i = D(t, e.i)), n);
  },
  $ = (e, t) => {
    if (!e.l) return 0;
    if (e.i >= t) return e.u[t];
    e.i < 0 && ((e.u[0] = 0), (e.i = 0));
    let r = e.i,
      n = e.u[r];
    for (; r < t; ) ((n += ae(e, r)), (e.u[++r] = n));
    return ((e.i = t), n);
  },
  _ = (e, t, r = 0, n = e.l - 1) => {
    let l = r;
    for (; r <= n; ) {
      const c = me((r + n) / 2);
      $(e, c) <= t ? ((l = c), (r = c + 1)) : (n = c - 1);
    }
    return se(l, 0, e.l - 1);
  },
  ne = (e, t, r) => {
    const n = t - e.l;
    return (
      (e.i = r ? -1 : D(t - 1, e.i)),
      (e.l = t),
      n > 0
        ? (G(e.u, n), G(e.t, n, r), e.o * n)
        : (e.u.splice(n),
          (r ? e.t.splice(0, -n) : e.t.splice(n)).reduce((l, c) => l - (c === -1 ? e.o : c), 0))
    );
  },
  ge = typeof window < 'u',
  ke = (e) => e.documentElement,
  we = (e) => e.ownerDocument,
  be = (e) => e.defaultView,
  ue = ce(
    () =>
      !!/iP(hone|od|ad)/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0),
  ),
  Se = ce(() => 'scrollBehavior' in ke(document).style),
  Ee = (e) => I(e.h(), e.p()),
  Re = (e, t = 40, r = 0, n, l = !1) => {
    let c = !!r,
      u = 1,
      s = 0,
      f = 0,
      g = 0,
      o = 0,
      h = 0,
      S = 0,
      E = 0,
      k = 0,
      b = Z,
      C = [0, c ? I(r - 1, 0) : -1],
      R = 0,
      M = !1;
    const w = ((a, v, p) => ({
        o: v,
        t: p ? G(p.slice(0, D(a, p.length)), I(0, a - p.length)) : G([], a),
        l: a,
        i: -1,
        u: G([], a + 1),
      }))(e, n ? n[1] : t, n && n[0]),
      W = new Set(),
      J = () => g - f,
      y = () => J() + h + o,
      X = (a, v) =>
        ((p, B, i, d) => {
          if (((d = D(d, p.l - 1)), $(p, d) <= B)) {
            const m = _(p, i, d);
            return [_(p, B, d, m), m];
          }
          {
            const m = _(p, B, void 0, d);
            return [m, _(p, i, m)];
          }
        })(w, a, v, C[0]),
      T = () => $(w, w.l),
      H = (a, v) => {
        const p = $(w, a) - h;
        return v ? T() - p - P(a) : p;
      },
      P = (a) => ae(w, a),
      q = (a, v = -1) => w.t[a] === v,
      N = (a) => {
        a && ((ue() && E !== 0) || (b && k === 1) ? (h += a) : (o += a));
      };
    return {
      v: () => {
        W.clear();
      },
      m: () => u,
      _: () => ((a) => [a.t.slice(), a.o])(w),
      S: (a = 200) => {
        if (!M || c) return C;
        let v, p;
        if (S) [v, p] = C;
        else {
          let B = I(0, y()),
            i = B + s;
          (l || ((a = I(0, a)), E !== 1 && (B -= a), E !== 2 && (i += a)),
            ([v, p] = C = X(I(0, B), I(0, i))),
            b && ((v = D(v, b[0])), (p = I(p, b[1]))));
        }
        return [I(v, 0), D(p, w.l - 1)];
      },
      $: (a) => _(w, a - f),
      I: q,
      k: H,
      R: P,
      T: () => w.l,
      C: () => g,
      M: () => E !== 0,
      p: () => s,
      O: () => f,
      h: T,
      H: () => ((S = o), (o = 0), [S, k === 2]),
      W: (a, v) => {
        const p = [a, v];
        return (
          W.add(p),
          () => {
            W.delete(p);
          }
        );
      },
      B: (a, v) => {
        let p,
          B,
          i = 0;
        switch (a) {
          case 1: {
            if (v === g && k === 0) break;
            const d = S;
            S = 0;
            const m = v - g,
              x = re(m);
            ((d && x < re(d) + 1) || k !== 0 || (E = m < 0 ? 2 : 1),
              c && (c = !1),
              (g = v),
              (i = 4));
            const A = J();
            A >= -s && A <= T() && ((i += 1), (B = x > s));
            break;
          }
          case 2:
            ((i = 8), E !== 0 && ((p = !0), (i += 1)), (E = 0), (k = 0), (b = Z));
            break;
          case 3: {
            const d = v.filter(([m, x]) => !q(m, x));
            if (!d.length) break;
            N(
              d.reduce((m, [x, A]) => {
                let j;
                if (k === 2) j = !0;
                else if (b && k === 1) j = x < b[0];
                else {
                  const O = J(),
                    V = H(x),
                    Y = P(x);
                  j = E !== 1 && k === 0 ? V + Y < O : V < O && V + Y < O + s;
                }
                return (j && (m += A - P(x)), m);
              }, 0),
            );
            for (const [m, x] of d) {
              const A = P(m),
                j = ye(w, m, x);
              l && (R += j ? x : x - A);
            }
            (l &&
              s &&
              R > s &&
              (N(
                ((m, x) => {
                  let A = 0;
                  const j = [];
                  (m.t.forEach((te, ve) => {
                    te !== -1 && (j.push(te), ve < x && A++);
                  }),
                    (m.i = -1));
                  const O = le(j),
                    V = O.length,
                    Y = (V / 2) | 0,
                    de = V % 2 == 0 ? (O[Y - 1] + O[Y]) / 2 : O[Y],
                    he = m.o;
                  return ((m.o = de) - he) * I(x - A, 0);
                })(w, _(w, y())),
              ),
              (l = !1)),
              (i = 3),
              (B = !0));
            break;
          }
          case 4:
            s !== v && (s || (M = B = !0), (s = v), (i = 3));
            break;
          case 5:
            v[1] ? (N(ne(w, v[0], !0)), (k = 2), (i = 1)) : (ne(w, v[0]), (i = 1));
            break;
          case 6:
            f = v;
            break;
          case 7:
            k = 1;
            break;
          case 8:
            ((b = X(v, v + s)), (i = 1));
        }
        i &&
          ((u = 1 + (2147483647 & u)),
          p && h && ((o += h), (h = 0)),
          W.forEach(([d, m]) => {
            i & d && m(B);
          }));
      },
    };
  },
  ee = setTimeout,
  F = (e, t) => (t ? -e : e),
  xe = (e, t, r, n, l, c) => {
    const u = Date.now;
    let s = 0,
      f = !1,
      g = !1,
      o = !1,
      h = !1;
    const S = (() => {
        let R;
        const M = () => {
            R != Z && clearTimeout(R);
          },
          w = () => {
            (M(),
              (R = ee(() => {
                ((R = Z),
                  (() => {
                    if (f || g) return ((f = !1), void S());
                    ((o = !1), e.B(2));
                  })());
              }, 150)));
          };
        return ((w.J = M), w);
      })(),
      E = () => {
        ((s = u()), o && (h = !0), e.B(1, n()), S());
      },
      k = (R) => {
        if (f || !e.M() || R.ctrlKey) return;
        const M = u() - s;
        150 > M && 50 < M && (r ? R.deltaX : R.deltaY) && (f = !0);
      },
      b = () => {
        ((g = !0), (o = h = !1));
      },
      C = () => {
        ((g = !1), ue() && (o = !0));
      };
    return (
      t.addEventListener('scroll', E),
      t.addEventListener('wheel', k, { passive: !0 }),
      t.addEventListener('touchstart', b, { passive: !0 }),
      t.addEventListener('touchend', C, { passive: !0 }),
      {
        A: () => {
          (t.removeEventListener('scroll', E),
            t.removeEventListener('wheel', k),
            t.removeEventListener('touchstart', b),
            t.removeEventListener('touchend', C),
            S.J());
        },
        L: () => {
          const [R, M] = e.H();
          R && (l(R, M, h), (h = !1), M && e.p() > e.h() && e.B(1, n()));
        },
      }
    );
  },
  Be = (e, t, r) => {
    let n;
    return [
      async (l, c) => {
        if (!(await t())) return;
        n && n();
        const u = () => {
          const [s, f] = Q();
          return (
            (n = () => {
              f(!1);
            }),
            e.p() && ee(n, 150),
            [
              s,
              e.W(2, () => {
                f(!0);
              }),
            ]
          );
        };
        if (c && Se())
          (e.B(8, l()),
            ie(async () => {
              for (;;) {
                let s = !0;
                for (let [o, h] = e.S(); o <= h; o++)
                  if (e.I(o)) {
                    s = !1;
                    break;
                  }
                if (s) break;
                const [f, g] = u();
                try {
                  if (!(await f)) return;
                } finally {
                  g();
                }
              }
              (e.B(7), r(l(), c));
            }));
        else
          for (;;) {
            const [s, f] = u();
            try {
              if ((e.B(7), r(l()), !(await s))) return;
            } finally {
              f();
            }
          }
      },
      () => {
        n && n();
      },
    ];
  },
  Me = (e, t) => {
    let r,
      n,
      l = Q(),
      c = !1;
    const u = t ? 'scrollLeft' : 'scrollTop',
      s = t ? 'overflowX' : 'overflowY',
      [f, g] = Be(
        e,
        () => l[0],
        (o, h) => {
          ((o = F(o, c)),
            h ? r.scrollTo({ [t ? 'left' : 'top']: o, behavior: 'smooth' }) : (r[u] = o));
        },
      );
    return {
      N(o, h) {
        ((r = h),
          t && (c = getComputedStyle(h).direction === 'rtl'),
          (n = xe(
            e,
            h,
            t,
            () => F(h[u], c),
            (S, E, k) => {
              if (k) {
                const b = h.style,
                  C = b[s];
                ((b[s] = 'hidden'),
                  ee(() => {
                    b[s] = C;
                  }));
              }
              ((h[u] = F(e.C() + S, c)), E && g());
            },
          )),
          l[1](!0));
      },
      v() {
        (n && n.A(), l[1](!1), (l = Q()));
      },
      P: () => c,
      V(o) {
        f(() => o);
      },
      X(o) {
        ((o += e.C()), f(() => o));
      },
      Y(o, { align: h, smooth: S, offset: E = 0 } = {}) {
        if (((o = se(o, 0, e.T() - 1)), h === 'nearest')) {
          const k = e.k(o),
            b = e.C();
          if (k < b) h = 'start';
          else {
            if (!(k + e.R(o) > b + e.p())) return;
            h = 'end';
          }
        }
        f(
          () =>
            E +
            e.O() +
            e.k(o) +
            (h === 'end' ? e.R(o) - e.p() : h === 'center' ? (e.R(o) - e.p()) / 2 : 0),
          S,
        );
      },
      q: () => {
        n && n.L();
      },
    };
  },
  ze = (e) => {
    let t;
    return {
      D(r) {
        (t || (t = new (be(we(r)).ResizeObserver)(e))).observe(r);
      },
      j(r) {
        t.unobserve(r);
      },
      A() {
        t && t.disconnect();
      },
    };
  },
  Le = (e, t) => {
    let r;
    const n = t ? 'width' : 'height',
      l = new WeakMap(),
      c = ze((u) => {
        const s = [];
        for (const { target: f, contentRect: g } of u)
          if (f.offsetParent)
            if (f === r) e.B(4, g[n]);
            else {
              const o = l.get(f);
              o != Z && s.push([o, g[n]]);
            }
        s.length && e.B(3, s);
      });
    return {
      G(u) {
        c.D((r = u));
      },
      U: (u, s) => (
        l.set(u, s),
        c.D(u),
        () => {
          (l.delete(u), c.j(u));
        }
      ),
      v: c.A,
    };
  },
  K = ge ? z.useLayoutEffect : z.useEffect,
  L = 'current',
  fe = (e, t) => {
    if (Array.isArray(e)) for (const r of e) fe(r, t);
    else e == null || typeof e == 'boolean' || t.push(e);
  },
  Ce = (e, t) => {
    const r = e.key;
    return r ?? '_' + t;
  },
  Te = (e) => {
    const t = z.useRef(null);
    return t[L] || (t[L] = e());
  },
  oe = (e) => {
    const t = z.useRef(e);
    return (
      K(() => {
        t[L] = e;
      }, [e]),
      t
    );
  },
  Ie = z.memo(({ Z: e, ee: t, te: r, oe: n, ne: l, re: c, ie: u, se: s }) => {
    const f = z.useRef(null);
    K(() => t(f[L], r), [r]);
    const g = z.useMemo(() => {
      const o = {
        contain: 'layout style',
        position: l && s ? void 0 : 'absolute',
        [u ? 'height' : 'width']: '100%',
        [u ? 'top' : 'left']: 0,
        [u ? 'left' : 'top']: n,
        visibility: !l || s ? void 0 : 'hidden',
      };
      return (u && (o.display = 'inline-flex'), o);
    }, [n, l, s, u]);
    return U.jsx(
      c,
      typeof c == 'string'
        ? { ref: f, style: g, children: e }
        : { ref: f, style: g, index: r, children: e },
    );
  }),
  Ae = (e, t) =>
    z.useMemo(() => {
      if (typeof e == 'function') return [(n) => e(t[n], n), t.length];
      const r = ((n) => {
        const l = [];
        return (fe(n, l), l);
      })(e);
      return [(n) => r[n], r.length];
    }, [e, t]),
  je = z.forwardRef(
    (
      {
        children: e,
        data: t,
        bufferSize: r,
        itemSize: n,
        shift: l,
        horizontal: c,
        keepMounted: u,
        cache: s,
        startMargin: f = 0,
        ssrCount: g,
        as: o = 'div',
        item: h = 'div',
        scrollRef: S,
        onScroll: E,
        onScrollEnd: k,
      },
      b,
    ) => {
      const [C, R] = Ae(e, t),
        M = z.useRef(null),
        w = z.useRef(!!g),
        W = oe(E),
        J = oe(k),
        [y, X, T, H] = Te(() => {
          const i = !!c,
            d = Re(R, n, g, s, !n);
          return [d, Le(d, i), Me(d, i), i];
        });
      (R !== y.T() && y.B(5, [R, l]), f !== y.O() && y.B(6, f));
      const [P, q] = z.useReducer(y.m, void 0, y.m),
        N = y.M(),
        a = y.h(),
        v = T.P(),
        p = [],
        B = (i) => {
          const d = C(i);
          return U.jsx(
            Ie,
            { ee: X.U, te: i, oe: y.k(i, v), ne: y.I(i), re: h, Z: d, ie: H, se: w[L] },
            Ce(d, i),
          );
        };
      if (
        (K(() => {
          ((w[L] = !1),
            y.W(1, (m) => {
              m ? pe.flushSync(q) : q();
            }),
            y.W(4, () => {
              W[L] && W[L](y.C());
            }),
            y.W(8, () => {
              J[L] && J[L]();
            }));
          const i = M[L],
            d = (m) => {
              (X.G(m), T.N(i, m));
            };
          return (
            S
              ? ie(() => {
                  S[L] && d(S[L]);
                })
              : d(i.parentElement),
            () => {
              (y.v(), X.v(), T.v());
            }
          );
        }, []),
        K(() => {
          T.q();
        }, [P]),
        z.useImperativeHandle(
          b,
          () => ({
            get cache() {
              return y._();
            },
            get scrollOffset() {
              return y.C();
            },
            get scrollSize() {
              return Ee(y);
            },
            get viewportSize() {
              return y.p();
            },
            findItemIndex: y.$,
            getItemOffset: y.k,
            getItemSize: y.R,
            scrollToIndex: T.Y,
            scrollTo: T.V,
            scrollBy: T.X,
          }),
          [],
        ),
        u)
      ) {
        const i = new Set(u);
        for (let [d, m] = y.S(r); d <= m; d++) i.add(d);
        le([...i]).forEach((d) => {
          p.push(B(d));
        });
      } else for (let [i, d] = y.S(r); i <= d; i++) p.push(B(i));
      return U.jsx(o, {
        ref: M,
        style: {
          contain: 'size style',
          overflowAnchor: 'none',
          flex: 'none',
          position: 'relative',
          width: H ? a : '100%',
          height: H ? '100%' : a,
          pointerEvents: N ? 'none' : void 0,
        },
        children: p,
      });
    },
  ),
  De = z.forwardRef(
    (
      {
        children: e,
        data: t,
        bufferSize: r,
        itemSize: n,
        shift: l,
        horizontal: c,
        keepMounted: u,
        cache: s,
        ssrCount: f,
        item: g,
        onScroll: o,
        onScrollEnd: h,
        style: S,
        ...E
      },
      k,
    ) =>
      U.jsx('div', {
        ...E,
        style: {
          display: c ? 'inline-block' : 'block',
          [c ? 'overflowX' : 'overflowY']: 'auto',
          contain: 'strict',
          width: '100%',
          height: '100%',
          ...S,
        },
        children: U.jsx(je, {
          ref: k,
          data: t,
          bufferSize: r,
          itemSize: n,
          shift: l,
          horizontal: c,
          keepMounted: u,
          cache: s,
          ssrCount: f,
          item: g,
          onScroll: o,
          onScrollEnd: h,
          children: e,
        }),
      }),
  );
export { je as e, De as t };
