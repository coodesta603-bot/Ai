import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { l as L } from './index-C8UyLGsD.js';
function Q(e, r, n = {}) {
  const [t, c] = L(),
    {
      clearOnDefault: D = !1,
      defaultValue: f = r?.defaultValue,
      history: P = 'push',
      throttleMs: i = 0,
    } = n,
    u = s.useRef(null),
    m = s.useRef(0),
    g = s.useRef(t),
    z = s.useRef(r),
    N = s.useRef(f),
    b = s.useRef(D),
    d = s.useRef(P);
  s.useEffect(() => {
    ((g.current = t), (z.current = r), (N.current = f), (b.current = D), (d.current = P));
  });
  const T = r.parse(t.get(e)) ?? f,
    E = s.useCallback(
      (p) => {
        const x = g.current,
          h = z.current,
          R = N.current,
          A = b.current,
          I = d.current,
          y = h.parse(x.get(e)) ?? R,
          C = typeof p == 'function' ? p(y) : p,
          S = () => {
            c(
              (o) => {
                const a = new URLSearchParams(o),
                  l = h.serialize(C);
                return (
                  (A && R !== void 0 && l === h.serialize(R)) || l == null
                    ? a.delete(e)
                    : a.set(e, l),
                  a
                );
              },
              { replace: I === 'replace' },
            );
          };
        if (i > 0) {
          const o = Date.now(),
            a = o - m.current;
          if (a >= i)
            ((m.current = o), S(), u.current && (clearTimeout(u.current), (u.current = null)));
          else {
            u.current && clearTimeout(u.current);
            const l = i - a;
            u.current = setTimeout(() => {
              ((m.current = Date.now()), S(), (u.current = null));
            }, l);
          }
        } else S();
      },
      [e, c, i],
    );
  return (
    s.useEffect(
      () => () => {
        u.current && clearTimeout(u.current);
      },
      [],
    ),
    [T, E]
  );
}
const w = {
    parse: (e) => e,
    serialize: (e) => e,
    withDefault: (e) => ({ defaultValue: e, parse: (r) => r ?? e, serialize: (r) => r }),
  },
  U = {
    parse: (e) => {
      if (e === null) return null;
      const r = Number.parseInt(e, 10);
      return Number.isNaN(r) ? null : r;
    },
    serialize: (e) => (e === null ? null : e.toString()),
    withDefault: (e) => ({
      defaultValue: e,
      parse: (r) => {
        if (r === null) return e;
        const n = Number.parseInt(r, 10);
        return Number.isNaN(n) ? e : n;
      },
      serialize: (r) => r.toString(),
    }),
  };
function V(e) {
  return Object.assign(
    { parse: (t) => (t === null ? null : e.includes(t) ? t : null), serialize: (t) => t },
    {
      withDefault: (t) => ({
        defaultValue: t,
        parse: (c) => (c === null ? t : e.includes(c) ? c : t),
        serialize: (c) => c,
      }),
    },
  );
}
function q(e, r) {
  let n,
    t = {};
  return (
    r ? (typeof r.parse == 'function' ? ((n = r), (t = r)) : ((n = w), (t = r))) : (n = w),
    Q(e, n, t)
  );
}
export { V as a, Q as b, U as c, w as p, q as u };
