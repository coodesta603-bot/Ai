import { B as U } from './Block-DDntSWi2.js';
import { f as W, a2 as I, j as k, k as p, F as j } from './index-C8UyLGsD.js';
import { j as u } from '../vendor/vendor-motion-Dbb9VQJo.js';
const G = I`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`,
  T = W(({ css: t, cssVar: e }) => ({
    active: t`
      background: ${e.colorFillSecondary};
      animation: ${G} 2s linear infinite;
    `,
    avatar: t`
      flex-shrink: 0;
    `,
    base: t`
      user-select: none;

      position: relative;

      overflow: hidden;

      border-radius: ${e.borderRadius};

      background: ${e.colorFillTertiary};
    `,
    text: t`
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: ${e.paddingXS};

      width: 100%;
    `,
  })),
  R = ({ width: t = '100%', height: e = '1em', active: o, style: a, className: l }) =>
    u.jsx(U, {
      className: k(T.base, o && T.active, l),
      height: e,
      style: a,
      variant: 'filled',
      width: t,
    });
R.displayName = 'SkeletonBlock';
var x = R;
const z = 40,
  B = ({
    active: t,
    shape: e = 'square',
    size: o,
    width: a,
    height: l,
    style: r,
    className: s,
    ...n
  }) => {
    const i = o ?? z,
      c = a ?? i,
      d = l ?? i,
      f = e === 'circle' ? '50%' : p.borderRadius;
    return u.jsx(x, {
      active: t,
      className: k(T.avatar, s),
      height: d,
      style: { borderRadius: f, ...r },
      width: c,
      ...n,
    });
  };
B.displayName = 'SkeletonAvatar';
var N = B;
const C = 3,
  P = ({
    active: t,
    rows: e = C,
    gap: o,
    width: a,
    height: l,
    fontSize: r,
    lineHeight: s,
    style: n,
    className: i,
    ...c
  }) => {
    const d = o,
      f = Math.max(e, 1),
      v = r ?? 14,
      y = (l || Math.round(v * (s ?? 1.6))) - v,
      h = Array.isArray(a) ? a : null,
      m = (b) =>
        h ? (h[b] ?? h.at(-1) ?? '100%') : a !== void 0 ? a : b === f - 1 ? '66%' : '100%',
      g = { gap: d, ...n };
    return u.jsx(j, {
      className: i,
      gap: o || y,
      style: g,
      width: '100%',
      ...c,
      children: Array.from({ length: f }).map((b, _) =>
        u.jsx(x, { active: t, height: v, width: m(_) }, _),
      ),
    });
  };
P.displayName = 'SkeletonParagraph';
var M = P;
const H = ({
  active: t,
  fontSize: e,
  lineHeight: o,
  height: a,
  width: l = '60%',
  style: r,
  className: s,
  ...n
}) => {
  const i = o ?? 1.6,
    c = e !== void 0 ? `${e}px` : p.fontSize,
    d = 1 + (i - 1) * 0.5,
    f = (i - 1) * 0.25;
  return u.jsx(x, {
    active: t,
    className: s,
    height: a ?? `round(calc(${c} * ${d}), 1px)`,
    width: l,
    style: { marginBlock: `round(calc(${c} * ${f}), 1px)`, ...r },
    ...n,
  });
};
H.displayName = 'SkeletonTitle';
var w = H;
const X = { default: 36, large: 46, small: 28 },
  F = ({
    active: t,
    block: e = !1,
    shape: o = 'default',
    size: a = 'default',
    width: l,
    height: r,
    style: s,
    className: n,
    ...i
  }) => {
    const c = a ?? 'default',
      d = r ?? X[c],
      f = l ?? (e ? '100%' : o === 'circle' ? d : 80),
      v = { default: p.borderRadius, large: p.borderRadiusLG, small: p.borderRadiusSM };
    return u.jsx(x, {
      active: t,
      className: n,
      height: d,
      style: {
        borderRadius: o === 'circle' ? '50%' : o === 'round' ? `calc(${p.borderRadius} * 2)` : v[c],
        ...s,
      },
      width: f,
      ...i,
    });
  };
F.displayName = 'SkeletonButton';
var O = F;
const q = 1,
  Z = { large: 28, middle: 22, small: 20 },
  J = { large: 64, middle: 48, small: 36 },
  L = ({
    active: t,
    className: e,
    count: o = q,
    gap: a,
    height: l,
    size: r = 'middle',
    style: s,
    width: n,
    ...i
  }) => {
    const c = a !== void 0 ? `${a}px` : p.paddingXS,
      d = Math.max(o, 1),
      f = l ?? Z[r],
      v = Array.isArray(n) ? n : null,
      A = J[r],
      y = { large: p.borderRadius, middle: p.borderRadiusSM, small: p.borderRadiusXS },
      h = (m) => (v ? (v[m] ?? v.at(-1) ?? A) : n !== void 0 ? n : A);
    return u.jsx(j, {
      horizontal: !0,
      className: e,
      style: { gap: c, ...s },
      ...i,
      children: Array.from({ length: d }).map((m, g) =>
        u.jsx(x, { active: t, height: f, width: h(g), style: { borderRadius: y[r] } }, g),
      ),
    });
  };
L.displayName = 'SkeletonTags';
var K = L;
const $ = ({
  active: t,
  avatar: e = !1,
  title: o = !0,
  paragraph: a = !0,
  className: l,
  classNames: r,
  styles: s,
  style: n,
  width: i,
  height: c,
  gap: d = 16,
  ...f
}) => {
  const v = !!e,
    A = !!o,
    y = !!a,
    h = typeof e == 'object' ? e : void 0,
    m = typeof o == 'object' ? o : void 0,
    g = typeof a == 'object' ? a : void 0,
    b = {
      ...n,
      ...s?.root,
      ...(i !== void 0 ? { width: i } : {}),
      ...(c !== void 0 ? { height: c } : {}),
    },
    _ = h?.active ?? t,
    E = m?.active ?? t,
    D = g?.active ?? t;
  return u.jsxs(j, {
    horizontal: !0,
    align: y ? 'flex-start' : 'center',
    className: k(l, r?.root),
    gap: d,
    style: b,
    width: '100%',
    ...f,
    children: [
      v &&
        u.jsx(N, {
          ...h,
          active: _,
          className: k(T.avatar, r?.avatar, h?.className),
          style: { ...h?.style, ...s?.avatar },
        }),
      u.jsxs(j, {
        gap: d,
        width: '100%',
        children: [
          A &&
            u.jsx(w, {
              ...m,
              active: E,
              className: k(r?.title, m?.className),
              style: { ...m?.style, ...s?.title },
            }),
          y &&
            u.jsx(M, {
              ...g,
              active: D,
              className: k(r?.paragraph, g?.className),
              style: { ...g?.style, ...s?.paragraph },
            }),
        ],
      }),
    ],
  });
};
$.displayName = 'Skeleton';
var Q = $;
const S = Q;
S.Block = x;
S.Avatar = N;
S.Title = w;
S.Paragraph = M;
S.Button = O;
S.Tags = K;
var te = S;
export { te as S, N as a, x as b, O as c, M as d, K as e, w as f };
