import { r as h } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  aK as k,
  aL as ee,
  aM as te,
  aN as ae,
  aO as se,
  aP as m,
  aQ as S,
  aR as ne,
  aS as ie,
  aT as M,
  aU as q,
  aV as re,
} from './index-C8UyLGsD.js';
const oe = () => {},
  ce = oe(),
  W = Object,
  J = (e) => e === ce,
  le = (e) => typeof e == 'function',
  O = new WeakMap(),
  ue = (e) => W.prototype.toString.call(e),
  x = (e, o) => e === `[object ${o}]`;
let fe = 0;
const $ = (e) => {
    const o = typeof e,
      d = ue(e),
      g = x(d, 'Date'),
      P = x(d, 'RegExp'),
      r = x(d, 'Object');
    let a, c;
    if (W(e) === e && !g && !P) {
      if (((a = O.get(e)), a)) return a;
      if (((a = ++fe + '~'), O.set(e, a), Array.isArray(e))) {
        for (a = '@', c = 0; c < e.length; c++) a += $(e[c]) + ',';
        O.set(e, a);
      }
      if (r) {
        a = '#';
        const I = W.keys(e).sort();
        for (; !J((c = I.pop())); ) J(e[c]) || (a += c + ':' + $(e[c]) + ',');
        O.set(e, a);
      }
    } else
      a = g
        ? e.toJSON()
        : o == 'symbol'
          ? e.toString()
          : o == 'string'
            ? JSON.stringify(e)
            : '' + e;
    return a;
  },
  de = (e) => {
    if (le(e))
      try {
        e = e();
      } catch {
        e = '';
      }
    const o = e;
    return ((e = typeof e == 'string' ? e : (Array.isArray(e) ? e.length : e) ? $(e) : ''), [e, o]);
  },
  pe = (e) => de(e ? e(0, null) : null)[0],
  T = Promise.resolve(),
  he = (e) => (o, d, g) => {
    const P = h.useRef(!1),
      {
        cache: r,
        initialSize: a = 1,
        revalidateAll: c = !1,
        persistSize: I = !1,
        revalidateFirstPage: V = !0,
        revalidateOnMount: H = !1,
        parallel: z = !1,
      } = g,
      [, , , w] = te.get(ae);
    let t;
    try {
      ((t = pe(o)), t && (t = se + t));
    } catch {}
    const [v, _, K] = m(r, t),
      j = h.useCallback(() => (S(v()._l) ? a : v()._l), [r, t, a]);
    ne.useSyncExternalStore(
      h.useCallback(
        (s) =>
          t
            ? K(t, () => {
                s();
              })
            : () => {},
        [r, t],
      ),
      j,
      j,
    );
    const R = h.useCallback(() => {
        const s = v()._l;
        return S(s) ? a : s;
      }, [t, a]),
      L = h.useRef(R());
    ie(() => {
      if (!P.current) {
        P.current = !0;
        return;
      }
      t && _({ _l: I ? L.current : R() });
    }, [t, r]);
    const B = H && !P.current,
      b = e(
        t,
        async (s) => {
          const p = v()._i,
            n = v()._r;
          _({ _r: M });
          const l = [],
            F = R(),
            [D] = m(r, s),
            f = D().data,
            y = [];
          let N = null;
          for (let i = 0; i < F; ++i) {
            const [E, A] = q(o(i, z ? null : N));
            if (!E) break;
            const [Q, X] = m(r, E);
            let u = Q().data;
            const Y =
              c || p || S(u) || (V && !i && !S(f)) || B || (f && !S(f[i]) && !g.compare(f[i], u));
            if (d && (typeof n == 'function' ? n(u, A) : Y)) {
              const U = async () => {
                if (!(E in w)) u = await d(A);
                else {
                  const Z = w[E];
                  (delete w[E], (u = await Z));
                }
                (X({ data: u, _k: A }), (l[i] = u));
              };
              z ? y.push(U) : await U();
            } else l[i] = u;
            z || (N = u);
          }
          return (z && (await Promise.all(y.map((i) => i()))), _({ _i: M }), l);
        },
        g,
      ),
      C = h.useCallback(
        function (s, p) {
          const n = typeof p == 'boolean' ? { revalidate: p } : p || {},
            l = n.revalidate !== !1;
          return t
            ? (l && (S(s) ? _({ _i: !0, _r: n.revalidate }) : _({ _i: !1, _r: n.revalidate })),
              arguments.length ? b.mutate(s, { ...n, revalidate: l }) : b.mutate())
            : T;
        },
        [t, r],
      ),
      G = h.useCallback(
        (s) => {
          if (!t) return T;
          const [, p] = m(r, t);
          let n;
          if ((re(s) ? (n = s(R())) : typeof s == 'number' && (n = s), typeof n != 'number'))
            return T;
          (p({ _l: n }), (L.current = n));
          const l = [],
            [F] = m(r, t);
          let D = null;
          for (let f = 0; f < n; ++f) {
            const [y] = q(o(f, D)),
              [N] = m(r, y),
              i = y ? N().data : M;
            if (S(i)) return C(F().data);
            (l.push(i), (D = i));
          }
          return C(l);
        },
        [t, r, C, R],
      );
    return {
      size: R(),
      setSize: G,
      mutate: C,
      get data() {
        return b.data;
      },
      get error() {
        return b.error;
      },
      get isValidating() {
        return b.isValidating;
      },
      get isLoading() {
        return b.isLoading;
      },
    };
  },
  be = k(ee, he);
export { be as u };
