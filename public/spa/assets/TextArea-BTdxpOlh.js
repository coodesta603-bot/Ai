import { r as s, R as S } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as ye, B as ze, r as pe, g as ve } from './Input-BIU8BRU1.js';
import { a as he, b as ge, c as v, w as xe } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  cL as Ce,
  b8 as Re,
  b9 as $e,
  bb as Ae,
  bO as Ee,
  d4 as Ie,
  be as Te,
  d7 as He,
  d8 as De,
  bc as Ne,
  al as Ve,
  d9 as Fe,
  cK as Me,
  da as Oe,
} from './index-C8UyLGsD.js';
import { i as Pe, a as Le, u as je } from './index-RoMbEimC.js';
const _e = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  Be = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space',
  ],
  le = {};
let g;
function We(e, t = !1) {
  const r = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name');
  if (t && le[r]) return le[r];
  const a = window.getComputedStyle(e),
    f =
      a.getPropertyValue('box-sizing') ||
      a.getPropertyValue('-moz-box-sizing') ||
      a.getPropertyValue('-webkit-box-sizing'),
    o =
      parseFloat(a.getPropertyValue('padding-bottom')) +
      parseFloat(a.getPropertyValue('padding-top')),
    m =
      parseFloat(a.getPropertyValue('border-bottom-width')) +
      parseFloat(a.getPropertyValue('border-top-width')),
    u = {
      sizingStyle: Be.map((l) => `${l}:${a.getPropertyValue(l)}`).join(';'),
      paddingSize: o,
      borderSize: m,
      boxSizing: f,
    };
  return (t && r && (le[r] = u), u);
}
function Ye(e, t = !1, r = null, a = null) {
  (g ||
    ((g = document.createElement('textarea')),
    g.setAttribute('tab-index', '-1'),
    g.setAttribute('aria-hidden', 'true'),
    g.setAttribute('name', 'hiddenTextarea'),
    document.body.appendChild(g)),
    e.getAttribute('wrap')
      ? g.setAttribute('wrap', e.getAttribute('wrap'))
      : g.removeAttribute('wrap'));
  const { paddingSize: f, borderSize: o, boxSizing: m, sizingStyle: C } = We(e, t);
  (g.setAttribute('style', `${C};${_e}`), (g.value = e.value || e.placeholder || ''));
  let u,
    l,
    p,
    d = g.scrollHeight;
  if ((m === 'border-box' ? (d += o) : m === 'content-box' && (d -= f), r !== null || a !== null)) {
    g.value = ' ';
    const R = g.scrollHeight - f;
    (r !== null && ((u = R * r), m === 'border-box' && (u = u + f + o), (d = Math.max(u, d))),
      a !== null &&
        ((l = R * a),
        m === 'border-box' && (l = l + f + o),
        (p = d > l ? '' : 'hidden'),
        (d = Math.min(l, d))));
  }
  const y = { height: d, overflowY: p, resize: 'none' };
  return (u && (y.minHeight = u), l && (y.maxHeight = l), y);
}
function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
const ce = 0,
  ue = 1,
  de = 2,
  Ze = s.forwardRef((e, t) => {
    const {
        prefixCls: r,
        defaultValue: a,
        value: f,
        autoSize: o,
        onResize: m,
        className: C,
        style: u,
        disabled: l,
        onChange: p,
        onInternalAutoSize: d,
        ...y
      } = e,
      [R, T] = he(a, f),
      $ = R ?? '',
      Y = (x) => {
        (T(x.target.value), p?.(x));
      },
      w = s.useRef();
    s.useImperativeHandle(t, () => ({ textArea: w.current }));
    const [H, D] = s.useMemo(() => (o && typeof o == 'object' ? [o.minRows, o.maxRows] : []), [o]),
      N = !!o,
      [h, A] = s.useState(de),
      [P, Z] = s.useState(),
      L = () => {
        A(ce);
      };
    (ge(() => {
      N && L();
    }, [f, H, D, N]),
      ge(() => {
        if (h === ce) A(ue);
        else if (h === ue) {
          const x = Ye(w.current, !1, H, D);
          (A(de), Z(x));
        }
      }, [h]));
    const j = s.useRef(),
      E = () => {
        xe.cancel(j.current);
      },
      _ = (x) => {
        h === de &&
          (m?.(x),
          o &&
            (E(),
            (j.current = xe(() => {
              L();
            }))));
      };
    s.useEffect(() => E, []);
    const V = { ...u, ...(N ? P : null) };
    return (
      (h === ce || h === ue) && ((V.overflowY = 'hidden'), (V.overflowX = 'hidden')),
      s.createElement(
        Ce,
        { onResize: _, disabled: !(o || m) },
        s.createElement(
          'textarea',
          fe({}, y, {
            ref: w,
            style: V,
            className: v(r, C, { [`${r}-disabled`]: l }),
            disabled: l,
            value: $,
            onChange: Y,
          }),
        ),
      )
    );
  });
function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
const qe = S.forwardRef(
    (
      {
        defaultValue: e,
        value: t,
        onFocus: r,
        onBlur: a,
        onChange: f,
        allowClear: o,
        maxLength: m,
        onCompositionStart: C,
        onCompositionEnd: u,
        suffix: l,
        prefixCls: p = 'rc-textarea',
        showCount: d,
        count: y,
        className: R,
        style: T,
        disabled: $,
        hidden: Y,
        classNames: w,
        styles: H,
        onResize: D,
        onClear: N,
        onPressEnter: h,
        readOnly: A,
        autoSize: P,
        onKeyDown: Z,
        ...L
      },
      j,
    ) => {
      const [E, _] = he(e, t),
        B = E == null ? '' : String(E),
        [V, x] = S.useState(!1),
        F = S.useRef(!1),
        [U, I] = S.useState(null),
        i = s.useRef(null),
        W = s.useRef(null),
        b = () => W.current?.textArea,
        J = () => {
          b().focus();
        };
      (s.useImperativeHandle(j, () => ({
        resizableTextArea: W.current,
        focus: J,
        blur: () => {
          b().blur();
        },
        nativeElement: i.current?.nativeElement || b(),
      })),
        s.useEffect(() => {
          x((n) => !$ && n);
        }, [$]));
      const [q, te] = S.useState(null);
      S.useEffect(() => {
        q && b().setSelectionRange(...q);
      }, [q]);
      const c = ye(y, d),
        M = c.max ?? m,
        ae = Number(M) > 0,
        G = c.strategy(B),
        Q = !!M && G > M,
        K = (n, k) => {
          let ee = k;
          (!F.current &&
            c.exceedFormatter &&
            c.max &&
            c.strategy(k) > c.max &&
            ((ee = c.exceedFormatter(k, { max: c.max })),
            k !== ee && te([b().selectionStart || 0, b().selectionEnd || 0])),
            _(ee),
            pe(n.currentTarget, n, f, ee));
        },
        ne = (n) => {
          ((F.current = !0), C?.(n));
        },
        re = (n) => {
          ((F.current = !1), K(n, n.currentTarget.value), u?.(n));
        },
        se = (n) => {
          K(n, n.target.value);
        },
        oe = (n) => {
          (n.key === 'Enter' && h && !n.nativeEvent.isComposing && h(n), Z?.(n));
        },
        z = (n) => {
          (x(!0), r?.(n));
        },
        O = (n) => {
          (x(!1), a?.(n));
        },
        be = (n) => {
          (_(''), J(), pe(b(), n, f));
        };
      let ie = l,
        X;
      c.show &&
        (c.showFormatter
          ? (X = c.showFormatter({ value: B, count: G, maxLength: M }))
          : (X = `${G}${ae ? ` / ${M}` : ''}`),
        (ie = S.createElement(
          S.Fragment,
          null,
          ie,
          S.createElement(
            'span',
            { className: v(`${p}-data-count`, w?.count), style: H?.count },
            X,
          ),
        )));
      const Se = (n) => {
          (D?.(n), b()?.style.height && I(!0));
        },
        we = !P && !d && !o;
      return S.createElement(
        ze,
        {
          ref: i,
          value: B,
          allowClear: o,
          handleReset: be,
          suffix: ie,
          prefixCls: p,
          classNames: {
            ...w,
            affixWrapper: v(w?.affixWrapper, {
              [`${p}-show-count`]: d,
              [`${p}-textarea-allow-clear`]: o,
            }),
          },
          disabled: $,
          focused: V,
          className: v(R, Q && `${p}-out-of-range`),
          style: { ...T, ...(U && !we ? { height: 'auto' } : {}) },
          dataAttrs: { affixWrapper: { 'data-count': typeof X == 'string' ? X : void 0 } },
          hidden: Y,
          readOnly: A,
          onClear: N,
        },
        S.createElement(
          Ze,
          me({}, L, {
            autoSize: P,
            maxLength: m,
            onKeyDown: oe,
            onChange: se,
            onFocus: z,
            onBlur: O,
            onCompositionStart: ne,
            onCompositionEnd: re,
            className: v(w?.textarea),
            style: { resize: T?.resize, ...H?.textarea },
            disabled: $,
            prefixCls: p,
            onResize: Se,
            ref: W,
            readOnly: A,
          }),
        ),
      );
    },
  ),
  Ge = (e) => {
    const { componentCls: t, paddingLG: r } = e,
      a = `${t}-textarea`;
    return {
      [`textarea${t}`]: {
        maxWidth: '100%',
        height: 'auto',
        minHeight: e.controlHeight,
        lineHeight: e.lineHeight,
        verticalAlign: 'bottom',
        transition: `all ${e.motionDurationSlow}`,
        resize: 'vertical',
        [`&${t}-mouse-active`]: { transition: `all ${e.motionDurationSlow}, height 0s, width 0s` },
      },
      [`${t}-textarea-affix-wrapper-resize-dirty`]: { width: 'auto' },
      [a]: {
        'position': 'relative',
        '&-show-count': {
          [`${t}-data-count`]: {
            position: 'absolute',
            bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          },
        },
        [`
        &-allow-clear > ${t},
        &-affix-wrapper${a}-has-feedback ${t}
      `]: { paddingInlineEnd: r },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            'fontSize': 'inherit',
            'border': 'none',
            'outline': 'none',
            'background': 'transparent',
            'minHeight': e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
            '&:focus': { boxShadow: 'none !important' },
          },
          [`${t}-suffix`]: {
            'margin': 0,
            '> *:not(:last-child)': { marginInline: 0 },
            [`${t}-clear-icon`]: {
              position: 'absolute',
              insetInlineEnd: e.paddingInline,
              insetBlockStart: e.paddingXS,
            },
            [`${a}-suffix`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              margin: 'auto',
              pointerEvents: 'none',
            },
          },
        },
        [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
          [`${t}-suffix`]: { [`${t}-data-count`]: { direction: 'ltr', insetInlineStart: 0 } },
        },
        [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
          [`${t}-suffix`]: { [`${t}-clear-icon`]: { insetInlineEnd: e.paddingInlineSM } },
        },
      },
    };
  },
  Ke = Re(
    ['Input', 'TextArea'],
    (e) => {
      const t = $e(e, Pe(e));
      return Ge(t);
    },
    Le,
    { resetFont: !1 },
  ),
  et = s.forwardRef((e, t) => {
    const {
        prefixCls: r,
        bordered: a = !0,
        size: f,
        disabled: o,
        status: m,
        allowClear: C,
        classNames: u,
        rootClassName: l,
        className: p,
        style: d,
        styles: y,
        variant: R,
        showCount: T,
        onMouseDown: $,
        onResize: Y,
        ...w
      } = e,
      {
        getPrefixCls: H,
        direction: D,
        allowClear: N,
        autoComplete: h,
        className: A,
        style: P,
        classNames: Z,
        styles: L,
      } = Ae('textArea'),
      j = s.useContext(Ee),
      E = o ?? j,
      { status: _, hasFeedback: B, feedbackIcon: V } = s.useContext(Ie),
      x = Oe(_, m),
      [F, U] = Te([Z, u], [L, y], { props: e }),
      I = s.useRef(null);
    s.useImperativeHandle(t, () => ({
      resizableTextArea: I.current?.resizableTextArea,
      focus: (z) => {
        He(I.current?.resizableTextArea?.textArea, z);
      },
      blur: () => I.current?.blur(),
      nativeElement: I.current?.nativeElement || null,
    }));
    const i = H('input', r),
      W = Me(i),
      [b, J] = je(i, l);
    Ke(i, W);
    const { compactSize: q, compactItemClassnames: te } = De(i, D),
      c = Ne((z) => f ?? q ?? z),
      [M, ae] = Ve('textArea', R, a),
      G = ve(C ?? N),
      [Q, K] = s.useState(!1),
      [ne, re] = s.useState(!1),
      se = (z) => {
        (K(!0), $?.(z));
        const O = () => {
          (K(!1), document.removeEventListener('mouseup', O));
        };
        document.addEventListener('mouseup', O);
      },
      oe = (z) => {
        if ((Y?.(z), Q && typeof getComputedStyle == 'function')) {
          const O = I.current?.nativeElement?.querySelector('textarea');
          O && getComputedStyle(O).resize === 'both' && re(!0);
        }
      };
    return s.createElement(qe, {
      autoComplete: h,
      ...w,
      style: { ...U.root, ...P, ...d },
      styles: U,
      disabled: E,
      allowClear: G,
      className: v(J, W, p, l, te, A, F.root, { [`${i}-textarea-affix-wrapper-resize-dirty`]: ne }),
      classNames: {
        ...F,
        textarea: v(
          { [`${i}-sm`]: c === 'small', [`${i}-lg`]: c === 'large' },
          b,
          F.textarea,
          Q && `${i}-mouse-active`,
        ),
        variant: v({ [`${i}-${M}`]: ae }, Fe(i, x)),
        affixWrapper: v(
          `${i}-textarea-affix-wrapper`,
          {
            [`${i}-affix-wrapper-rtl`]: D === 'rtl',
            [`${i}-affix-wrapper-sm`]: c === 'small',
            [`${i}-affix-wrapper-lg`]: c === 'large',
            [`${i}-textarea-show-count`]: T || e.count?.show,
          },
          b,
        ),
      },
      prefixCls: i,
      suffix: B && s.createElement('span', { className: `${i}-textarea-suffix` }, V),
      showCount: T,
      ref: I,
      onResize: oe,
      onMouseDown: se,
    });
  });
export { et as T, qe as a };
