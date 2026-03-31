import { R as l, r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as f, a as fe, o as pe, d as me } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  b8 as ge,
  bV as be,
  co as xe,
  bm as Ce,
  d8 as de,
  d9 as ae,
  d7 as he,
  cW as Se,
  bb as ye,
  bc as Ee,
  bO as ve,
  be as we,
  d4 as $e,
  al as Re,
  eF as ce,
  cK as Ne,
  da as Ie,
} from './index-C8UyLGsD.js';
import { u as We, b as Ae } from './index-RoMbEimC.js';
const Fe = (e) => {
    const {
        componentCls: t,
        borderRadius: s,
        paddingSM: n,
        colorBorder: o,
        paddingXS: g,
        fontSizeLG: C,
        fontSizeSM: W,
        borderRadiusLG: A,
        borderRadiusSM: m,
        colorBgContainerDisabled: b,
        lineWidth: h,
        antCls: p,
      } = e,
      [i, x] = xe(p, 'space');
    return {
      [t]: [
        {
          'display': 'inline-flex',
          'alignItems': 'center',
          'gap': 0,
          'paddingInline': n,
          'margin': 0,
          'borderWidth': h,
          'borderStyle': 'solid',
          'borderRadius': s,
          '&:hover': { zIndex: 0 },
          [`&${t}-disabled`]: { color: e.colorTextDisabled },
          '&-large': { fontSize: C, borderRadius: A },
          '&-small': { paddingInline: g, borderRadius: m, fontSize: W },
          '&-compact-last-item': { borderEndStartRadius: 0, borderStartStartRadius: 0 },
          '&-compact-first-item': { borderEndEndRadius: 0, borderStartEndRadius: 0 },
          '&-compact-item:not(:first-child):not(:last-child)': { borderRadius: 0 },
          '&-compact-item:not(:last-child)': { borderInlineEndWidth: 0 },
          '&-compact-item:not(:first-child)': { borderInlineStartWidth: 0 },
        },
        {
          [i('addon-border-color')]: o,
          [i('addon-background')]: b,
          [i('addon-border-color-outlined')]: o,
          [i('addon-background-filled')]: b,
          'borderColor': x('addon-border-color'),
          'background': x('addon-background'),
          '&-variant-outlined': { [i('addon-border-color')]: x('addon-border-color-outlined') },
          '&-variant-filled': {
            [i('addon-border-color')]: 'transparent',
            [i('addon-background')]: x('addon-background-filled'),
            [`&${t}-disabled`]: { [i('addon-border-color')]: o, [i('addon-background')]: b },
          },
          '&-variant-borderless': { border: 'none', background: 'transparent' },
          '&-variant-underlined': { border: 'none', background: 'transparent' },
        },
        {
          '&-status-error': {
            [i('addon-border-color-outlined')]: e.colorError,
            [i('addon-background-filled')]: e.colorErrorBg,
            color: e.colorError,
          },
          '&-status-warning': {
            [i('addon-border-color-outlined')]: e.colorWarning,
            [i('addon-background-filled')]: e.colorWarningBg,
            color: e.colorWarning,
          },
        },
      ],
    };
  },
  Pe = ge(['Space', 'Addon'], (e) => [Fe(e), be(e, { focus: !1 })]),
  He = l.forwardRef((e, t) => {
    const {
        className: s,
        children: n,
        style: o,
        prefixCls: g,
        variant: C = 'outlined',
        disabled: W,
        status: A,
        ...m
      } = e,
      { getPrefixCls: b, direction: h } = l.useContext(Ce),
      p = b('space-addon', g),
      [i, x] = Pe(p),
      { compactItemClassnames: E, compactSize: R } = de(p, h),
      M = ae(p, A),
      V = f(p, i, E, x, `${p}-variant-${C}`, M, { [`${p}-${R}`]: R, [`${p}-disabled`]: W }, s);
    return l.createElement('div', { ref: t, className: V, style: o, ...m }, n);
  });
function ze(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Be(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function ie(e, t, s) {
  const n = t.cloneNode(!0),
    o = Object.create(e, { target: { value: n }, currentTarget: { value: n } });
  return (
    (n.value = s),
    typeof t.selectionStart == 'number' &&
      typeof t.selectionEnd == 'number' &&
      ((n.selectionStart = t.selectionStart), (n.selectionEnd = t.selectionEnd)),
    (n.setSelectionRange = (...g) => {
      t.setSelectionRange(...g);
    }),
    o
  );
}
function ue(e, t, s, n) {
  if (!s) return;
  let o = t;
  if (t.type === 'click') {
    ((o = ie(t, e, '')), s(o));
    return;
  }
  if (e.type !== 'file' && n !== void 0) {
    ((o = ie(t, e, n)), s(o));
    return;
  }
  s(o);
}
function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
          }
          return e;
        }),
    le.apply(this, arguments)
  );
}
const Oe = l.forwardRef((e, t) => {
  const {
      inputElement: s,
      children: n,
      prefixCls: o,
      prefix: g,
      suffix: C,
      addonBefore: W,
      addonAfter: A,
      className: m,
      style: b,
      disabled: h,
      readOnly: p,
      focused: i,
      triggerFocus: x,
      allowClear: E,
      value: R,
      handleReset: M,
      hidden: V,
      classes: O,
      classNames: S,
      dataAttrs: J,
      styles: N,
      components: j,
      onClear: Q,
    } = e,
    k = n ?? s,
    K = j?.affixWrapper || 'span',
    I = j?.groupWrapper || 'span',
    d = j?.wrapper || 'span',
    c = j?.groupAddon || 'span',
    F = u.useRef(null),
    D = (v) => {
      F.current?.contains(v.target) && x?.();
    },
    P = Be(e);
  let y = u.cloneElement(k, {
    value: R,
    className: f(k.props?.className, !P && S?.variant) || null,
  });
  const T = u.useRef(null);
  if ((l.useImperativeHandle(t, () => ({ nativeElement: T.current || F.current })), P)) {
    let v = null;
    if (E) {
      const L = !h && !p && R,
        B = `${o}-clear-icon`,
        _ = typeof E == 'object' && E?.clearIcon ? E.clearIcon : '✖';
      v = l.createElement(
        'button',
        {
          type: 'button',
          tabIndex: -1,
          onClick: (G) => {
            (M?.(G), Q?.());
          },
          onMouseDown: (G) => G.preventDefault(),
          className: f(B, { [`${B}-hidden`]: !L, [`${B}-has-suffix`]: !!C }),
        },
        _,
      );
    }
    const a = `${o}-affix-wrapper`,
      w = f(
        a,
        {
          [`${o}-disabled`]: h,
          [`${a}-disabled`]: h,
          [`${a}-focused`]: i,
          [`${a}-readonly`]: p,
          [`${a}-input-with-clear-btn`]: C && E && R,
        },
        O?.affixWrapper,
        S?.affixWrapper,
        S?.variant,
      ),
      z =
        (C || E) &&
        l.createElement('span', { className: f(`${o}-suffix`, S?.suffix), style: N?.suffix }, v, C);
    y = l.createElement(
      K,
      le({ className: w, style: N?.affixWrapper, onClick: D }, J?.affixWrapper, { ref: F }),
      g && l.createElement('span', { className: f(`${o}-prefix`, S?.prefix), style: N?.prefix }, g),
      y,
      z,
    );
  }
  if (ze(e)) {
    const v = `${o}-group`,
      a = `${v}-addon`,
      w = `${v}-wrapper`,
      z = f(`${o}-wrapper`, v, O?.wrapper, S?.wrapper),
      L = f(w, { [`${w}-disabled`]: h }, O?.group, S?.groupWrapper);
    y = l.createElement(
      I,
      { className: L, ref: T },
      l.createElement(
        d,
        { className: z },
        W && l.createElement(c, { className: a }, W),
        y,
        A && l.createElement(c, { className: a }, A),
      ),
    );
  }
  return l.cloneElement(y, {
    className: f(y.props?.className, m) || null,
    style: { ...y.props?.style, ...b },
    hidden: V,
  });
});
function je(e, t) {
  return u.useMemo(() => {
    let s = {};
    (t && (s.show = typeof t == 'object' && t.formatter ? t.formatter : !!t), (s = { ...s, ...e }));
    const { show: n, ...o } = s;
    return {
      ...o,
      show: !!n,
      showFormatter: typeof n == 'function' ? n : void 0,
      strategy: o.strategy || ((g) => g.length),
    };
  }, [e, t]);
}
function ee() {
  return (
    (ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
          }
          return e;
        }),
    ee.apply(this, arguments)
  );
}
const ke = u.forwardRef((e, t) => {
    const {
        autoComplete: s,
        onChange: n,
        onFocus: o,
        onBlur: g,
        onPressEnter: C,
        onKeyDown: W,
        onKeyUp: A,
        prefixCls: m = 'rc-input',
        disabled: b,
        htmlSize: h,
        className: p,
        maxLength: i,
        suffix: x,
        showCount: E,
        count: R,
        type: M = 'text',
        classes: V,
        classNames: O,
        styles: S,
        onCompositionStart: J,
        onCompositionEnd: N,
        ...j
      } = e,
      [Q, k] = u.useState(!1),
      K = u.useRef(!1),
      I = u.useRef(!1),
      d = u.useRef(null),
      c = u.useRef(null),
      F = (r) => {
        d.current && he(d.current, r);
      },
      [D, P] = fe(e.defaultValue, e.value),
      y = D == null ? '' : String(D),
      [T, v] = u.useState(null),
      a = je(R, E),
      w = a.max || i,
      z = a.strategy(y),
      L = !!w && z > w;
    (u.useImperativeHandle(t, () => ({
      focus: F,
      blur: () => {
        d.current?.blur();
      },
      setSelectionRange: (r, $, q) => {
        d.current?.setSelectionRange(r, $, q);
      },
      select: () => {
        d.current?.select();
      },
      input: d.current,
      nativeElement: c.current?.nativeElement || d.current,
    })),
      u.useEffect(() => {
        (I.current && (I.current = !1), k((r) => (r && b ? !1 : r)));
      }, [b]));
    const B = (r, $, q) => {
      let H = $;
      if (!K.current && a.exceedFormatter && a.max && a.strategy($) > a.max)
        ((H = a.exceedFormatter($, { max: a.max })),
          $ !== H && v([d.current?.selectionStart || 0, d.current?.selectionEnd || 0]));
      else if (q.source === 'compositionEnd') return;
      (P(H), d.current && ue(d.current, r, n, H));
    };
    u.useEffect(() => {
      T && d.current?.setSelectionRange(...T);
    }, [T]);
    const _ = (r) => {
        B(r, r.target.value, { source: 'change' });
      },
      G = (r) => {
        ((K.current = !1), B(r, r.currentTarget.value, { source: 'compositionEnd' }), N?.(r));
      },
      X = (r) => {
        (C &&
          r.key === 'Enter' &&
          !I.current &&
          !r.nativeEvent.isComposing &&
          ((I.current = !0), C(r)),
          W?.(r));
      },
      te = (r) => {
        (r.key === 'Enter' && (I.current = !1), A?.(r));
      },
      Z = (r) => {
        (k(!0), o?.(r));
      },
      ne = (r) => {
        (I.current && (I.current = !1), k(!1), g?.(r));
      },
      Y = (r) => {
        (P(''), F(), d.current && ue(d.current, r, n));
      },
      re = L && `${m}-out-of-range`,
      se = () => {
        const r = pe(e, [
          'prefixCls',
          'onPressEnter',
          'addonBefore',
          'addonAfter',
          'prefix',
          'suffix',
          'allowClear',
          'defaultValue',
          'showCount',
          'count',
          'classes',
          'htmlSize',
          'styles',
          'classNames',
          'onClear',
        ]);
        return l.createElement(
          'input',
          ee({ autoComplete: s }, r, {
            onChange: _,
            onFocus: Z,
            onBlur: ne,
            onKeyDown: X,
            onKeyUp: te,
            className: f(m, { [`${m}-disabled`]: b }, O?.input),
            style: S?.input,
            ref: d,
            size: h,
            type: M,
            onCompositionStart: ($) => {
              ((K.current = !0), J?.($));
            },
            onCompositionEnd: G,
          }),
        );
      },
      oe = () => {
        const r = Number(w) > 0;
        if (x || a.show) {
          const $ = a.showFormatter
            ? a.showFormatter({ value: y, count: z, maxLength: w })
            : `${z}${r ? ` / ${w}` : ''}`;
          return l.createElement(
            l.Fragment,
            null,
            a.show &&
              l.createElement(
                'span',
                {
                  className: f(
                    `${m}-show-count-suffix`,
                    { [`${m}-show-count-has-suffix`]: !!x },
                    O?.count,
                  ),
                  style: { ...S?.count },
                },
                $,
              ),
            x,
          );
        }
        return null;
      };
    return l.createElement(
      Oe,
      ee({}, j, {
        prefixCls: m,
        className: f(p, re),
        handleReset: Y,
        value: y,
        focused: Q,
        triggerFocus: F,
        suffix: oe(),
        disabled: b,
        classes: V,
        classNames: O,
        styles: S,
        ref: c,
      }),
      se(),
    );
  }),
  De = (e) => {
    let t;
    return (
      typeof e == 'object' && e?.clearIcon
        ? (t = e)
        : e && (t = { clearIcon: l.createElement(Se, null) }),
      t
    );
  };
function Te(e, t) {
  const s = u.useRef([]),
    n = () => {
      s.current.push(
        setTimeout(() => {
          e.current?.input &&
            e.current?.input.getAttribute('type') === 'password' &&
            e.current?.input.hasAttribute('value') &&
            e.current?.input.removeAttribute('value');
        }),
      );
    };
  return (
    u.useEffect(
      () => (
        t && n(),
        () =>
          s.current.forEach((o) => {
            o && clearTimeout(o);
          })
      ),
      [],
    ),
    n
  );
}
function Me(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
const Ue = u.forwardRef((e, t) => {
  const {
      prefixCls: s,
      bordered: n = !0,
      status: o,
      size: g,
      disabled: C,
      onBlur: W,
      onFocus: A,
      suffix: m,
      allowClear: b,
      addonAfter: h,
      addonBefore: p,
      className: i,
      style: x,
      styles: E,
      rootClassName: R,
      onChange: M,
      classNames: V,
      variant: O,
      ...S
    } = e,
    {
      getPrefixCls: J,
      direction: N,
      allowClear: j,
      autoComplete: Q,
      className: k,
      style: K,
      classNames: I,
      styles: d,
    } = ye('input'),
    c = J('input', s),
    F = u.useRef(null),
    D = Ne(c),
    [P, y] = We(c, R);
  Ae(c, D);
  const { compactSize: T, compactItemClassnames: v } = de(c, N),
    a = Ee((U) => g ?? T ?? U),
    w = l.useContext(ve),
    z = C ?? w,
    L = { ...e, size: a, disabled: z },
    [B, _] = we([I, V], [d, E], { props: L }),
    { status: G, hasFeedback: X, feedbackIcon: te } = u.useContext($e),
    Z = Ie(G, o),
    ne = Me(e) || !!X;
  u.useRef(ne);
  const Y = Te(F, !0),
    re = (U) => {
      (Y(), W?.(U));
    },
    se = (U) => {
      (Y(), A?.(U));
    },
    oe = (U) => {
      (Y(), M?.(U));
    },
    r = (X || m) && l.createElement(l.Fragment, null, m, X && te),
    $ = De(b ?? j),
    [q, H] = Re('input', O, n);
  return l.createElement(ke, {
    ref: me(t, F),
    prefixCls: c,
    autoComplete: Q,
    ...S,
    disabled: z,
    onBlur: re,
    onFocus: se,
    style: { ..._.root, ...K, ...x },
    styles: _,
    suffix: r,
    allowClear: $,
    className: f(i, R, y, D, v, k, B.root),
    onChange: oe,
    addonBefore: p && l.createElement(ce, { form: !0, space: !0 }, p),
    addonAfter: h && l.createElement(ce, { form: !0, space: !0 }, h),
    classNames: {
      ...B,
      input: f(
        { [`${c}-sm`]: a === 'small', [`${c}-lg`]: a === 'large', [`${c}-rtl`]: N === 'rtl' },
        B.input,
        P,
      ),
      variant: f({ [`${c}-${q}`]: H }, ae(c, Z)),
      affixWrapper: f(
        {
          [`${c}-affix-wrapper-sm`]: a === 'small',
          [`${c}-affix-wrapper-lg`]: a === 'large',
          [`${c}-affix-wrapper-rtl`]: N === 'rtl',
        },
        P,
      ),
      wrapper: f({ [`${c}-group-rtl`]: N === 'rtl' }, P),
      groupWrapper: f(
        {
          [`${c}-group-wrapper-sm`]: a === 'small',
          [`${c}-group-wrapper-lg`]: a === 'large',
          [`${c}-group-wrapper-rtl`]: N === 'rtl',
          [`${c}-group-wrapper-${q}`]: H,
        },
        ae(`${c}-group-wrapper`, Z, X),
        P,
      ),
    },
  });
});
export { Oe as B, Ue as I, He as S, Te as a, De as g, ue as r, je as u };
