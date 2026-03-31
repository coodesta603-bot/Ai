import { r as n, _ as G } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  b as k,
  C as ee,
  c as E,
  d as Z,
  a as te,
  o as oe,
  u as T,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  b8 as ne,
  b9 as ae,
  cl as ie,
  cm as re,
  bM as se,
  ba as le,
  cn as ce,
  bb as de,
  be as ue,
  bc as me,
  bd as he,
} from './index-C8UyLGsD.js';
import { T as ge } from './index-BSuyBMRZ.js';
const U = (e, t) => {
    if (!e) return null;
    const o = {
      left: e.offsetLeft,
      right: e.parentElement.clientWidth - e.clientWidth - e.offsetLeft,
      width: e.clientWidth,
      top: e.offsetTop,
      bottom: e.parentElement.clientHeight - e.clientHeight - e.offsetTop,
      height: e.clientHeight,
    };
    return t
      ? { left: 0, right: 0, width: 0, top: o.top, bottom: o.bottom, height: o.height }
      : { left: o.left, right: o.right, width: o.width, top: 0, bottom: 0, height: 0 };
  },
  w = (e) => (e !== void 0 ? `${e}px` : void 0);
function be(e) {
  const {
      prefixCls: t,
      containerRef: o,
      value: a,
      getValueIndex: r,
      motionName: g,
      onMotionStart: i,
      onMotionEnd: s,
      direction: l,
      vertical: u = !1,
    } = e,
    H = n.useRef(null),
    [M, C] = n.useState(a),
    N = (x) => {
      const h = r(x),
        f = o.current?.querySelectorAll(`.${t}-item`)[h];
      return f?.offsetParent && f;
    },
    [m, P] = n.useState(null),
    [b, I] = n.useState(null);
  k(() => {
    if (M !== a) {
      const x = N(M),
        h = N(a),
        f = U(x, u),
        c = U(h, u);
      (C(a), P(f), I(c), x && h ? i() : s());
    }
  }, [a]);
  const $ = n.useMemo(() => w(u ? (m?.top ?? 0) : l === 'rtl' ? -m?.right : m?.left), [u, l, m]),
    y = n.useMemo(() => w(u ? (b?.top ?? 0) : l === 'rtl' ? -b?.right : b?.left), [u, l, b]),
    p = () =>
      u
        ? { transform: 'translateY(var(--thumb-start-top))', height: 'var(--thumb-start-height)' }
        : { transform: 'translateX(var(--thumb-start-left))', width: 'var(--thumb-start-width)' },
    S = () =>
      u
        ? { transform: 'translateY(var(--thumb-active-top))', height: 'var(--thumb-active-height)' }
        : { transform: 'translateX(var(--thumb-active-left))', width: 'var(--thumb-active-width)' },
    B = () => {
      (P(null), I(null), s());
    };
  return !m || !b
    ? null
    : n.createElement(
        ee,
        {
          visible: !0,
          motionName: g,
          motionAppear: !0,
          onAppearStart: p,
          onAppearActive: S,
          onVisibleChanged: B,
        },
        ({ className: x, style: h }, f) => {
          const c = {
              ...h,
              '--thumb-start-left': $,
              '--thumb-start-width': w(m?.width),
              '--thumb-active-left': y,
              '--thumb-active-width': w(b?.width),
              '--thumb-start-top': $,
              '--thumb-start-height': w(m?.height),
              '--thumb-active-top': y,
              '--thumb-active-height': w(b?.height),
            },
            V = { ref: Z(H, f), style: c, className: E(`${t}-thumb`, x) };
          return n.createElement('div', V);
        },
      );
}
function fe(e) {
  if (typeof e.title < 'u') return e.title;
  if (typeof e.label != 'object') return e.label?.toString();
}
function pe(e) {
  return e.map((t) => {
    if (typeof t == 'object' && t !== null) {
      const o = fe(t);
      return { ...t, title: o };
    }
    return { label: t?.toString(), title: t?.toString(), value: t };
  });
}
const Se = ({
    prefixCls: e,
    className: t,
    style: o,
    styles: a,
    classNames: r,
    data: g,
    disabled: i,
    checked: s,
    label: l,
    title: u,
    value: H,
    name: M,
    onChange: C,
    onFocus: N,
    onBlur: m,
    onKeyDown: P,
    onKeyUp: b,
    onMouseDown: I,
    itemRender: $ = (y) => y,
  }) => {
    const y = (S) => {
        i || C(S, H);
      },
      p = n.createElement(
        'label',
        { className: E(t, { [`${e}-item-disabled`]: i }), style: o, onMouseDown: I },
        n.createElement('input', {
          name: M,
          className: `${e}-item-input`,
          type: 'radio',
          disabled: i,
          checked: s,
          onChange: y,
          onFocus: N,
          onBlur: m,
          onKeyDown: P,
          onKeyUp: b,
        }),
        n.createElement(
          'div',
          { className: E(`${e}-item-label`, r?.label), title: u, style: a?.label },
          l,
        ),
      );
    return $(p, { item: g });
  },
  ve = n.forwardRef((e, t) => {
    const {
        prefixCls: o = 'rc-segmented',
        direction: a,
        vertical: r,
        options: g = [],
        disabled: i,
        defaultValue: s,
        value: l,
        name: u,
        onChange: H,
        className: M = '',
        style: C,
        styles: N,
        classNames: m,
        motionName: P = 'thumb-motion',
        itemRender: b,
        ...I
      } = e,
      $ = n.useRef(null),
      y = n.useMemo(() => Z($, t), [$, t]),
      p = n.useMemo(() => pe(g), [g]),
      [S, B] = te(s ?? p[0]?.value, l),
      [x, h] = n.useState(!1),
      f = (d, v) => {
        (B(v), H?.(v));
      },
      c = oe(I, ['children']),
      [V, D] = n.useState(!1),
      [L, F] = n.useState(!1),
      O = () => {
        F(!0);
      },
      j = () => {
        F(!1);
      },
      q = () => {
        D(!1);
      },
      W = (d) => {
        d.key === 'Tab' && D(!0);
      },
      R = (d) => {
        const v = p.findIndex((Q) => Q.value === S),
          X = p.length,
          J = (v + d + X) % X,
          K = p[J];
        K && (B(K.value), H?.(K.value));
      },
      z = (d) => {
        switch (d.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            R(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            R(1);
            break;
        }
      },
      A = (d) => {
        const { value: v, disabled: X } = d;
        return n.createElement(
          Se,
          G({}, d, {
            name: u,
            data: d,
            itemRender: b,
            key: v,
            prefixCls: o,
            className: E(d.className, `${o}-item`, m?.item, {
              [`${o}-item-selected`]: v === S && !x,
              [`${o}-item-focused`]: L && V && v === S,
            }),
            style: N?.item,
            classNames: m,
            styles: N,
            checked: v === S,
            onChange: f,
            onFocus: O,
            onBlur: j,
            onKeyDown: z,
            onKeyUp: W,
            onMouseDown: q,
            disabled: !!i || !!X,
          }),
        );
      };
    return n.createElement(
      'div',
      G(
        {
          'role': 'radiogroup',
          'aria-label': 'segmented control',
          'tabIndex': i ? void 0 : 0,
          'aria-orientation': r ? 'vertical' : 'horizontal',
          'style': C,
        },
        c,
        {
          className: E(
            o,
            { [`${o}-rtl`]: a === 'rtl', [`${o}-disabled`]: i, [`${o}-vertical`]: r },
            M,
          ),
          ref: y,
        },
      ),
      n.createElement(
        'div',
        { className: `${o}-group` },
        n.createElement(be, {
          vertical: r,
          prefixCls: o,
          value: S,
          containerRef: $,
          motionName: `${o}-${P}`,
          direction: a,
          getValueIndex: (d) => p.findIndex((v) => v.value === d),
          onMotionStart: () => {
            h(!0);
          },
          onMotionEnd: () => {
            h(!1);
          },
        }),
        p.map(A),
      ),
    );
  }),
  $e = ve;
function Y(e, t) {
  return {
    [`${e}, ${e}:hover, ${e}:focus`]: { color: t.colorTextDisabled, cursor: 'not-allowed' },
  };
}
const _ = (e) => ({ background: e.itemSelectedBg, boxShadow: e.boxShadowTertiary }),
  ye = { overflow: 'hidden', ...ie },
  xe = (e) => {
    const { componentCls: t, motionDurationSlow: o, motionEaseInOut: a, motionDurationMid: r } = e,
      g = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),
      i = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),
      s = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
    return {
      [t]: {
        ...le(e),
        display: 'inline-block',
        padding: e.trackPadding,
        color: e.itemColor,
        background: e.trackBg,
        borderRadius: e.borderRadius,
        transition: `all ${r}`,
        ...se(e),
        [`${t}-group`]: {
          position: 'relative',
          display: 'flex',
          alignItems: 'stretch',
          justifyItems: 'flex-start',
          flexDirection: 'row',
          width: '100%',
        },
        [`&${t}-rtl`]: { direction: 'rtl' },
        [`&${t}-vertical`]: {
          [`${t}-group`]: { flexDirection: 'column' },
          [`${t}-thumb`]: { width: '100%', height: 0, padding: `0 ${T(e.paddingXXS)}` },
        },
        [`&${t}-block`]: { display: 'flex' },
        [`&${t}-block ${t}-item`]: { flex: 1, minWidth: 0 },
        [`${t}-item`]: {
          'position': 'relative',
          'textAlign': 'center',
          'cursor': 'pointer',
          'transition': `color ${r}`,
          'borderRadius': e.borderRadiusSM,
          'transform': 'translateZ(0)',
          '&-selected': { ..._(e), color: e.itemSelectedColor },
          '&-focused': re(e),
          '&::after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '100%',
            top: 0,
            insetInlineStart: 0,
            borderRadius: 'inherit',
            opacity: 0,
            pointerEvents: 'none',
            transition: ['opacity', 'background-color'].map((l) => `${l} ${r}`).join(', '),
          },
          [`&:not(${t}-item-selected):not(${t}-item-disabled)`]: {
            '&:hover, &:active': { color: e.itemHoverColor },
            '&:hover::after': { opacity: 1, backgroundColor: e.itemHoverBg },
            '&:active::after': { opacity: 1, backgroundColor: e.itemActiveBg },
          },
          '&-label': {
            minHeight: g,
            lineHeight: T(g),
            padding: `0 ${T(e.segmentedPaddingHorizontal)}`,
            ...ye,
          },
          '&-icon + *': { marginInlineStart: e.calc(e.marginSM).div(2).equal() },
          '&-input': {
            position: 'absolute',
            insetBlockStart: 0,
            insetInlineStart: 0,
            width: 0,
            height: 0,
            opacity: 0,
            pointerEvents: 'none',
          },
        },
        [`${t}-thumb`]: {
          ..._(e),
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: 0,
          height: '100%',
          padding: `${T(e.paddingXXS)} 0`,
          borderRadius: e.borderRadiusSM,
          [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: {
            backgroundColor: 'transparent',
          },
        },
        [`&${t}-lg`]: {
          borderRadius: e.borderRadiusLG,
          [`${t}-item-label`]: {
            minHeight: i,
            lineHeight: T(i),
            padding: `0 ${T(e.segmentedPaddingHorizontal)}`,
            fontSize: e.fontSizeLG,
          },
          [`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadius },
        },
        [`&${t}-sm`]: {
          borderRadius: e.borderRadiusSM,
          [`${t}-item-label`]: {
            minHeight: s,
            lineHeight: T(s),
            padding: `0 ${T(e.segmentedPaddingHorizontalSM)}`,
          },
          [`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadiusXS },
        },
        ...Y(`&-disabled ${t}-item`, e),
        ...Y(`${t}-item-disabled`, e),
        [`${t}-thumb-motion-appear-active`]: {
          willChange: 'transform, width',
          transition: ['transform', 'width'].map((l) => `${l} ${o} ${a}`).join(', '),
        },
        [`&${t}-shape-round`]: {
          borderRadius: 9999,
          [`${t}-item, ${t}-thumb`]: { borderRadius: 9999 },
        },
      },
    };
  },
  we = (e) => {
    const {
      colorTextLabel: t,
      colorText: o,
      colorFillSecondary: a,
      colorBgElevated: r,
      colorFill: g,
      lineWidthBold: i,
      colorBgLayout: s,
    } = e;
    return {
      trackPadding: i,
      trackBg: s,
      itemColor: t,
      itemHoverColor: o,
      itemHoverBg: a,
      itemSelectedBg: r,
      itemActiveBg: g,
      itemSelectedColor: o,
    };
  },
  Ce = ne(
    'Segmented',
    (e) => {
      const { lineWidth: t, calc: o } = e,
        a = ae(e, {
          segmentedPaddingHorizontal: o(e.controlPaddingHorizontal).sub(t).equal(),
          segmentedPaddingHorizontalSM: o(e.controlPaddingHorizontalSM).sub(t).equal(),
        });
      return xe(a);
    },
    we,
  );
function Ne(e) {
  return typeof e == 'object' && !!e?.icon;
}
const Re = n.forwardRef((e, t) => {
    const o = ce(),
      {
        prefixCls: a,
        className: r,
        rootClassName: g,
        block: i,
        options: s = [],
        size: l,
        style: u,
        vertical: H,
        orientation: M,
        shape: C = 'default',
        name: N = o,
        styles: m,
        classNames: P,
        ...b
      } = e,
      {
        getPrefixCls: I,
        direction: $,
        className: y,
        style: p,
        classNames: S,
        styles: B,
      } = de('segmented'),
      x = { ...e, options: s, size: l, shape: C },
      [h, f] = ue([S, P], [B, m], { props: x }),
      c = I('segmented', a),
      [V, D] = Ce(c),
      L = me(l),
      F = n.useMemo(
        () =>
          s.map((R) => {
            if (Ne(R)) {
              const { icon: z, label: A, ...d } = R;
              return {
                ...d,
                label: n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    'span',
                    { className: E(`${c}-item-icon`, h.icon), style: f.icon },
                    z,
                  ),
                  A && n.createElement('span', null, A),
                ),
              };
            }
            return R;
          }),
        [s, c, h.icon, f.icon],
      ),
      [, O] = he(M, H),
      j = E(
        r,
        g,
        y,
        h.root,
        {
          [`${c}-block`]: i,
          [`${c}-sm`]: L === 'small',
          [`${c}-lg`]: L === 'large',
          [`${c}-vertical`]: O,
          [`${c}-shape-${C}`]: C === 'round',
        },
        V,
        D,
      ),
      q = { ...f.root, ...p, ...u },
      W = (R, { item: z }) => {
        if (!z.tooltip) return R;
        const A = typeof z.tooltip == 'object' ? z.tooltip : { title: z.tooltip };
        return n.createElement(ge, { ...A }, R);
      };
    return n.createElement($e, {
      ...b,
      name: N,
      className: j,
      style: q,
      classNames: h,
      styles: f,
      itemRender: W,
      options: F,
      ref: t,
      prefixCls: c,
      direction: $,
      vertical: O,
    });
  }),
  ze = Re;
export { ze as S };
