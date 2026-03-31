import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  b8 as ne,
  b9 as se,
  ba as ae,
  bb as ie,
  bc as ce,
  cu as V,
  cv as le,
  cK as q,
  cL as me,
  bm as pe,
  cr as ue,
} from './index-C8UyLGsD.js';
import { u as ge, d as de, c as M, t as fe } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { a as Se } from './index-bx4f06U_.js';
const w = e.createContext({}),
  he = (t) => {
    const {
        antCls: o,
        componentCls: r,
        iconCls: n,
        avatarBg: a,
        avatarColor: i,
        containerSize: h,
        containerSizeLG: c,
        containerSizeSM: $,
        textFontSize: v,
        textFontSizeLG: C,
        textFontSizeSM: k,
        iconFontSize: L,
        iconFontSizeLG: z,
        iconFontSizeSM: p,
        borderRadius: u,
        borderRadiusLG: E,
        borderRadiusSM: P,
        lineWidth: R,
        lineType: F,
      } = t,
      x = (S, g, y, d) => ({
        width: S,
        height: S,
        borderRadius: '50%',
        fontSize: g,
        [`&${r}-square`]: { borderRadius: d },
        [`&${r}-icon`]: { fontSize: y, [`> ${n}`]: { margin: 0 } },
      });
    return {
      [r]: {
        ...ae(t),
        'position': 'relative',
        'display': 'inline-flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden',
        'color': i,
        'whiteSpace': 'nowrap',
        'textAlign': 'center',
        'verticalAlign': 'middle',
        'background': a,
        'border': `${ge(R)} ${F} transparent`,
        '&-image': { background: 'transparent' },
        [`${o}-image-img`]: { display: 'block' },
        ...x(h, v, L, u),
        '&-lg': { ...x(c, C, z, E) },
        '&-sm': { ...x($, k, p, P) },
        '> img': { display: 'block', width: '100%', height: '100%', objectFit: 'cover' },
      },
    };
  },
  ve = (t) => {
    const { componentCls: o, groupBorderColor: r, groupOverlapping: n, groupSpace: a } = t;
    return {
      [`${o}-group`]: {
        'display': 'inline-flex',
        [o]: { borderColor: r },
        '> *:not(:first-child)': { marginInlineStart: n },
      },
      [`${o}-group-popover`]: { [`${o} + ${o}`]: { marginInlineStart: a } },
    };
  },
  Ce = (t) => {
    const {
      controlHeight: o,
      controlHeightLG: r,
      controlHeightSM: n,
      fontSize: a,
      fontSizeLG: i,
      fontSizeXL: h,
      fontSizeHeading3: c,
      marginXS: $,
      marginXXS: v,
      colorBorderBg: C,
    } = t;
    return {
      containerSize: o,
      containerSizeLG: r,
      containerSizeSM: n,
      textFontSize: a,
      textFontSizeLG: a,
      textFontSizeSM: a,
      iconFontSize: Math.round((i + h) / 2),
      iconFontSizeLG: c,
      iconFontSizeSM: a,
      groupSpace: v,
      groupOverlapping: -$,
      groupBorderColor: C,
    };
  },
  K = ne(
    'Avatar',
    (t) => {
      const { colorTextLightSolid: o, colorTextPlaceholder: r } = t,
        n = se(t, { avatarBg: r, avatarColor: o });
      return [he(n), ve(n)];
    },
    Ce,
  ),
  D = e.forwardRef((t, o) => {
    const {
        prefixCls: r,
        shape: n,
        size: a,
        src: i,
        srcSet: h,
        icon: c,
        className: $,
        rootClassName: v,
        style: C,
        alt: k,
        draggable: L,
        children: z,
        crossOrigin: p,
        gap: u = 4,
        onError: E,
        ...P
      } = t,
      [R, F] = e.useState(1),
      [x, S] = e.useState(!1),
      [g, y] = e.useState(!0),
      d = e.useRef(null),
      b = e.useRef(null),
      G = de(o, d),
      { getPrefixCls: A, className: I, style: T } = ie('avatar'),
      B = e.useContext(w),
      H = () => {
        if (!b.current || !d.current) return;
        const s = b.current.offsetWidth,
          l = d.current.offsetWidth;
        s !== 0 && l !== 0 && u * 2 < l && F(l - u * 2 < s ? (l - u * 2) / s : 1);
      };
    (e.useEffect(() => {
      S(!0);
    }, []),
      e.useEffect(() => {
        (y(!0), F(1));
      }, [i]),
      e.useEffect(H, [u]));
    const J = () => {
        E?.() !== !1 && y(!1);
      },
      m = ce((s) => a ?? B?.size ?? s ?? 'medium'),
      Q = Object.keys(typeof m == 'object' ? m || {} : {}).some((s) => V.includes(s)),
      O = le(Q),
      U = e.useMemo(() => {
        if (typeof m != 'object') return {};
        const s = V.find((re) => O[re]),
          l = m[s];
        return l ? { width: l, height: l, fontSize: l && (c || z) ? l / 2 : 18 } : {};
      }, [O, m, c, z]),
      f = A('avatar', r),
      W = q(f),
      [Y, Z] = K(f, W),
      _ = M({ [`${f}-lg`]: m === 'large', [`${f}-sm`]: m === 'small' }),
      j = e.isValidElement(i),
      ee = n || B?.shape || 'circle',
      te = M(
        f,
        _,
        I,
        `${f}-${ee}`,
        { [`${f}-image`]: j || (i && g), [`${f}-icon`]: !!c },
        Z,
        W,
        $,
        v,
        Y,
      ),
      oe = typeof m == 'number' ? { width: m, height: m, fontSize: c ? m / 2 : 18 } : {};
    let N;
    if (typeof i == 'string' && g)
      N = e.createElement('img', {
        src: i,
        draggable: L,
        srcSet: h,
        onError: J,
        alt: k,
        crossOrigin: p,
      });
    else if (j) N = i;
    else if (c) N = c;
    else if (x || R !== 1) {
      const s = `scale(${R})`,
        l = { msTransform: s, WebkitTransform: s, transform: s };
      N = e.createElement(
        me,
        { onResize: H },
        e.createElement('span', { className: `${f}-string`, ref: b, style: l }, z),
      );
    } else
      N = e.createElement('span', { className: `${f}-string`, style: { opacity: 0 }, ref: b }, z);
    return e.createElement(
      'span',
      { ...P, style: { ...oe, ...U, ...T, ...C }, className: te, ref: G },
      N,
    );
  }),
  X = (t) => {
    const { size: o, shape: r } = e.useContext(w),
      n = e.useMemo(() => ({ size: t.size || o, shape: t.shape || r }), [t.size, t.shape, o, r]);
    return e.createElement(w.Provider, { value: n }, t.children);
  },
  ze = (t) => {
    const { getPrefixCls: o, direction: r } = e.useContext(pe),
      {
        prefixCls: n,
        className: a,
        rootClassName: i,
        style: h,
        maxCount: c,
        maxStyle: $,
        size: v,
        shape: C,
        maxPopoverPlacement: k,
        maxPopoverTrigger: L,
        children: z,
        max: p,
      } = t,
      u = o('avatar', n),
      E = `${u}-group`,
      P = q(u),
      [R, F] = K(u, P),
      x = M(E, { [`${E}-rtl`]: r === 'rtl' }, F, P, a, i, R),
      S = fe(z).map((d, b) => ue(d, { key: `avatar-key-${b}` })),
      g = p?.count || c,
      y = S.length;
    if (g && g < y) {
      const d = S.slice(0, g),
        b = S.slice(g, y),
        G = p?.style || $,
        A = p?.popover?.trigger || L || 'hover',
        I = p?.popover?.placement || k || 'top',
        T = {
          content: b,
          ...p?.popover,
          placement: I,
          trigger: A,
          rootClassName: M(`${E}-popover`, p?.popover?.rootClassName),
        };
      return (
        d.push(
          e.createElement(
            Se,
            { key: 'avatar-popover-key', destroyOnHidden: !0, ...T },
            e.createElement(D, { style: G }, `+${y - g}`),
          ),
        ),
        e.createElement(
          X,
          { shape: C, size: v },
          e.createElement('div', { className: x, style: h }, d),
        )
      );
    }
    return e.createElement(
      X,
      { shape: C, size: v },
      e.createElement('div', { className: x, style: h }, S),
    );
  },
  xe = D;
xe.Group = ze;
export { xe as A };
