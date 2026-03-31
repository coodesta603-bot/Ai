import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as w, w as Ie, h as fe, o as se, d as Ce } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bm as me,
  d4 as ne,
  b8 as ge,
  b9 as Ee,
  bb as be,
  be as ye,
  cV as he,
  bc as ve,
  da as Se,
  ct as Pe,
  bh as $e,
  bO as Ne,
  d8 as we,
  cr as de,
  aG as ze,
  d6 as Re,
  eE as ke,
} from './index-C8UyLGsD.js';
import { S as Te } from './index-CqaQ90GQ.js';
import { b as Fe, i as Oe, a as Me } from './index-RoMbEimC.js';
import { I as oe, a as Ae } from './Input-BIU8BRU1.js';
import { R as De } from './EyeOutlined-BrqBWuO3.js';
import { T as Be } from './TextArea-BTdxpOlh.js';
const Ve = (t) => {
    const { getPrefixCls: s, direction: i } = e.useContext(me),
      { prefixCls: o, className: u } = t,
      p = s('input-group', o),
      m = s('input'),
      [l, E] = Fe(m),
      I = w(
        p,
        E,
        {
          [`${p}-lg`]: t.size === 'large',
          [`${p}-sm`]: t.size === 'small',
          [`${p}-compact`]: t.compact,
          [`${p}-rtl`]: i === 'rtl',
        },
        l,
        u,
      ),
      b = e.useContext(ne),
      C = e.useMemo(() => ({ ...b, isFormItemInput: !1 }), [b]);
    return e.createElement(
      ne.Provider,
      { value: C },
      e.createElement(
        Te.Compact,
        {
          className: I,
          style: t.style,
          onMouseEnter: t.onMouseEnter,
          onMouseLeave: t.onMouseLeave,
          onFocus: t.onFocus,
          onBlur: t.onBlur,
        },
        t.children,
      ),
    );
  },
  Le = (t) => {
    const { componentCls: s, paddingXS: i } = t;
    return {
      [s]: {
        'display': 'inline-flex',
        'alignItems': 'center',
        'flexWrap': 'nowrap',
        'columnGap': i,
        [`${s}-input-wrapper`]: {
          position: 'relative',
          [`${s}-mask-icon`]: {
            position: 'absolute',
            zIndex: '1',
            top: '50%',
            right: '50%',
            transform: 'translate(50%, -50%)',
            pointerEvents: 'none',
          },
          [`${s}-mask-input`]: { color: 'transparent', caretColor: t.colorText },
          [`${s}-mask-input[type=number]::-webkit-inner-spin-button`]: {
            '-webkit-appearance': 'none',
            'margin': 0,
          },
          [`${s}-mask-input[type=number]`]: { '-moz-appearance': 'textfield' },
        },
        '&-rtl': { direction: 'rtl' },
        [`${s}-input`]: { textAlign: 'center', paddingInline: t.paddingXXS },
        [`&${s}-sm ${s}-input`]: { paddingInline: t.calc(t.paddingXXS).div(2).equal() },
        [`&${s}-lg ${s}-input`]: { paddingInline: t.paddingXS },
      },
    };
  },
  je = ge(
    ['Input', 'OTP'],
    (t) => {
      const s = Ee(t, Oe(t));
      return Le(s);
    },
    Me,
  ),
  _e = e.forwardRef((t, s) => {
    const {
        className: i,
        value: o,
        onChange: u,
        onActiveChange: p,
        index: m,
        mask: l,
        onFocus: E,
        ...I
      } = t,
      { getPrefixCls: b } = e.useContext(me),
      C = b('otp'),
      z = typeof l == 'string' ? l : o,
      P = e.useRef(null);
    e.useImperativeHandle(s, () => P.current);
    const O = (d) => {
        u(m, d.target.value);
      },
      g = () => {
        Ie(() => {
          const d = P.current?.input;
          document.activeElement === d && d && d.select();
        });
      },
      M = (d) => {
        (E?.(d), g());
      },
      R = (d) => {
        const { key: y, ctrlKey: k, metaKey: $ } = d;
        (y === 'ArrowLeft'
          ? p(m - 1)
          : y === 'ArrowRight'
            ? p(m + 1)
            : y === 'z' && (k || $)
              ? d.preventDefault()
              : y === 'Backspace' && !o && p(m - 1),
          g());
      };
    return e.createElement(
      'span',
      { className: `${C}-input-wrapper`, role: 'presentation' },
      l &&
        o !== '' &&
        o !== void 0 &&
        e.createElement('span', { 'className': `${C}-mask-icon`, 'aria-hidden': 'true' }, z),
      e.createElement(oe, {
        'aria-label': `OTP Input ${m + 1}`,
        'type': l === !0 ? 'password' : 'text',
        ...I,
        'ref': P,
        'value': o,
        'onInput': O,
        'onFocus': M,
        'onKeyDown': R,
        'onMouseDown': g,
        'onMouseUp': g,
        'className': w(i, { [`${C}-mask-input`]: l }),
      }),
    );
  });
function te(t) {
  return (t || '').split('');
}
const Xe = (t) => {
    const { index: s, prefixCls: i, separator: o, className: u, style: p } = t,
      m = typeof o == 'function' ? o(s) : o;
    return m ? e.createElement('span', { className: w(`${i}-separator`, u), style: p }, m) : null;
  },
  qe = e.forwardRef((t, s) => {
    const {
        prefixCls: i,
        length: o = 6,
        size: u,
        defaultValue: p,
        value: m,
        onChange: l,
        formatter: E,
        separator: I,
        variant: b,
        disabled: C,
        status: z,
        autoFocus: P,
        mask: O,
        type: g,
        autoComplete: M,
        onInput: R,
        onFocus: d,
        inputMode: y,
        classNames: k,
        styles: $,
        className: V,
        style: A,
        ..._
      } = t,
      {
        classNames: X,
        styles: T,
        getPrefixCls: S,
        direction: D,
        style: h,
        className: q,
      } = be('otp'),
      v = S('otp', i),
      ae = { ...t, length: o },
      [G, N] = ye([X, k], [T, $], { props: ae }),
      K = he(_, { aria: !0, data: !0, attr: !0 }),
      [re, J] = je(v),
      B = ve((n) => u ?? n),
      H = e.useContext(ne),
      Q = Se(H.status, z),
      Y = e.useMemo(() => ({ ...H, status: Q, hasFeedback: !1, feedbackIcon: null }), [H, Q]),
      U = e.useRef(null),
      x = e.useRef({});
    e.useImperativeHandle(s, () => ({
      focus: () => {
        x.current[0]?.focus();
      },
      blur: () => {
        for (let n = 0; n < o; n += 1) x.current[n]?.blur();
      },
      nativeElement: U.current,
    }));
    const F = (n) => (E ? E(n) : n),
      [L, Z] = e.useState(() => te(F(p || '')));
    e.useEffect(() => {
      m !== void 0 && Z(te(m));
    }, [m]);
    const ce = fe((n) => {
        (Z(n),
          R && R(n),
          l &&
            n.length === o &&
            n.every((c) => c) &&
            n.some((c, a) => L[a] !== c) &&
            l(n.join('')));
      }),
      le = fe((n, c) => {
        let a = Pe(L);
        for (let f = 0; f < n; f += 1) a[f] || (a[f] = '');
        (c.length <= 1 ? (a[n] = c) : (a = a.slice(0, n).concat(te(c))), (a = a.slice(0, o)));
        for (let f = a.length - 1; f >= 0 && !a[f]; f -= 1) a.pop();
        const j = F(a.map((f) => f || ' ').join(''));
        return ((a = te(j).map((f, pe) => (f === ' ' && !a[pe] ? a[pe] : f))), a);
      }),
      ee = (n, c) => {
        const a = le(n, c),
          j = Math.min(n + c.length, o - 1);
        (j !== n && a[n] !== void 0 && x.current[j]?.focus(), ce(a));
      },
      ie = (n) => {
        x.current[n]?.focus();
      },
      r = (n, c) => {
        for (let a = 0; a < c; a += 1)
          if (!x.current[a]?.input?.value) {
            x.current[a]?.focus();
            break;
          }
        d?.(n);
      },
      xe = { variant: b, disabled: C, status: Q, mask: O, type: g, inputMode: y, autoComplete: M };
    return e.createElement(
      'div',
      {
        ...K,
        ref: U,
        className: w(
          V,
          v,
          { [`${v}-sm`]: B === 'small', [`${v}-lg`]: B === 'large', [`${v}-rtl`]: D === 'rtl' },
          J,
          re,
          q,
          G.root,
        ),
        style: { ...N.root, ...h, ...A },
        role: 'group',
      },
      e.createElement(
        ne.Provider,
        { value: Y },
        Array.from({ length: o }).map((n, c) => {
          const a = `otp-${c}`,
            j = L[c] || '';
          return e.createElement(
            e.Fragment,
            { key: a },
            e.createElement(_e, {
              ref: (f) => {
                x.current[c] = f;
              },
              index: c,
              size: B,
              htmlSize: 1,
              className: w(G.input, `${v}-input`),
              style: N.input,
              onChange: ee,
              value: j,
              onActiveChange: ie,
              autoFocus: c === 0 && P,
              onFocus: (f) => r(f, c),
              ...xe,
            }),
            c < o - 1 &&
              e.createElement(Xe, {
                separator: I,
                index: c,
                prefixCls: v,
                className: w(G.separator),
                style: N.separator,
              }),
          );
        }),
      ),
    );
  });
var Ge = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z',
        },
      },
    ],
  },
  name: 'eye-invisible',
  theme: 'outlined',
};
function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var s = 1; s < arguments.length; s++) {
            var i = arguments[s];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
          }
          return t;
        }),
    ue.apply(this, arguments)
  );
}
const Ke = (t, s) => e.createElement($e, ue({}, t, { ref: s, icon: Ge })),
  He = e.forwardRef(Ke),
  Qe = (t) => (t ? e.createElement(De, null) : e.createElement(He, null)),
  Ue = { click: 'onClick', hover: 'onMouseOver' },
  We = e.forwardRef((t, s) => {
    const {
        disabled: i,
        action: o = 'click',
        visibilityToggle: u = !0,
        iconRender: p = Qe,
        suffix: m,
      } = t,
      l = e.useContext(Ne),
      E = i ?? l,
      I = typeof u == 'object' && u.visible !== void 0,
      [b, C] = e.useState(() => (I ? u.visible : !1)),
      z = e.useRef(null);
    e.useEffect(() => {
      I && C(u.visible);
    }, [I, u]);
    const P = Ae(z),
      O = () => {
        if (E) return;
        b && P();
        const S = !b;
        (C(S), typeof u == 'object' && u.onVisibleChange?.(S));
      },
      g = (S) => {
        const D = Ue[o] || '',
          h = p(b),
          q = {
            [D]: O,
            className: `${S}-icon`,
            key: 'passwordIcon',
            onMouseDown: (v) => {
              v.preventDefault();
            },
            onMouseUp: (v) => {
              v.preventDefault();
            },
          };
        return e.cloneElement(e.isValidElement(h) ? h : e.createElement('span', null, h), q);
      },
      { className: M, prefixCls: R, inputPrefixCls: d, size: y, ...k } = t,
      { getPrefixCls: $ } = e.useContext(me),
      V = $('input', d),
      A = $('input-password', R),
      _ = u && g(A),
      X = w(A, M, { [`${A}-${y}`]: !!y }),
      T = {
        ...se(k, ['suffix', 'iconRender', 'visibilityToggle']),
        type: b ? 'text' : 'password',
        className: X,
        prefixCls: V,
        suffix: e.createElement(e.Fragment, null, _, m),
      };
    return (y && (T.size = y), e.createElement(oe, { ref: Ce(s, z), ...T }));
  }),
  Je = (t) => {
    const { componentCls: s } = t,
      i = `${s}-btn`;
    return {
      [s]: {
        width: '100%',
        [i]: {
          '&-filled': {
            'background': t.colorFillTertiary,
            '&:not(:disabled)': {
              '&:hover': { background: t.colorFillSecondary },
              '&:active': { background: t.colorFill },
            },
          },
        },
      },
    };
  },
  Ye = ge(['Input', 'Search'], Je),
  Ze = e.forwardRef((t, s) => {
    const {
        prefixCls: i,
        inputPrefixCls: o,
        className: u,
        size: p,
        style: m,
        enterButton: l = !1,
        addonAfter: E,
        loading: I,
        disabled: b,
        onSearch: C,
        onChange: z,
        onCompositionStart: P,
        onCompositionEnd: O,
        variant: g,
        onPressEnter: M,
        classNames: R,
        styles: d,
        hidden: y,
        ...k
      } = t,
      { direction: $, getPrefixCls: V, classNames: A, styles: _ } = be('inputSearch'),
      X = { ...t, enterButton: l },
      [T, S] = ye([A, R], [_, d], { props: X }, { button: { _default: 'root' } }),
      D = e.useRef(!1),
      h = V('input-search', i),
      q = V('input', o),
      [v, ae] = Ye(h),
      { compactSize: G } = we(h, $),
      N = ve((r) => p ?? G ?? r),
      K = e.useRef(null),
      re = (r) => {
        (r?.target && r.type === 'click' && C && C(r.target.value, r, { source: 'clear' }), z?.(r));
      },
      J = (r) => {
        document.activeElement === K.current?.input && r.preventDefault();
      },
      B = (r) => {
        C && C(K.current?.input?.value, r, { source: 'input' });
      },
      H = (r) => {
        D.current || I || (M?.(r), B(r));
      },
      Q = typeof l == 'boolean' ? e.createElement(ke, null) : null,
      Y = `${h}-btn`,
      U = w(Y, { [`${Y}-${g}`]: g });
    let x;
    const F = l || {},
      L = F.type && F.type.__ANT_BUTTON === !0;
    (L || F.type === 'button'
      ? (x = de(F, {
          onMouseDown: J,
          onClick: (r) => {
            (F?.props?.onClick?.(r), B(r));
          },
          key: 'enterButton',
          ...(L ? { className: U, size: N } : {}),
        }))
      : (x = e.createElement(
          ze,
          {
            classNames: T.button,
            styles: S.button,
            className: U,
            color: l ? 'primary' : 'default',
            size: N,
            disabled: b,
            key: 'enterButton',
            onMouseDown: J,
            onClick: B,
            loading: I,
            icon: Q,
            variant:
              g === 'borderless' || g === 'filled' || g === 'underlined'
                ? 'text'
                : l
                  ? 'solid'
                  : void 0,
          },
          l,
        )),
      E && (x = [x, de(E, { key: 'addonAfter' })]));
    const Z = w(
        h,
        ae,
        { [`${h}-rtl`]: $ === 'rtl', [`${h}-${N}`]: !!N, [`${h}-with-button`]: !!l },
        u,
        v,
        T.root,
      ),
      ce = (r) => {
        ((D.current = !0), P?.(r));
      },
      le = (r) => {
        ((D.current = !1), O?.(r));
      },
      ee = he(k, { data: !0 }),
      ie = se(
        {
          ...k,
          classNames: se(T, ['button', 'root']),
          styles: se(S, ['button', 'root']),
          prefixCls: q,
          type: 'search',
          size: N,
          variant: g,
          onPressEnter: H,
          onCompositionStart: ce,
          onCompositionEnd: le,
          onChange: re,
          disabled: b,
        },
        Object.keys(ee),
      );
    return e.createElement(
      Re,
      { className: Z, style: { ...m, ...S.root }, ...ee, hidden: y },
      e.createElement(oe, { ref: Ce(K, s), ...ie }),
      x,
    );
  }),
  W = oe;
W.Group = Ve;
W.Search = Ze;
W.TextArea = Be;
W.Password = We;
W.OTP = qe;
export { Ge as E, W as I, He as R };
