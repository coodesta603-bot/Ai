import {
  bX as se,
  b8 as Ae,
  b9 as De,
  ba as we,
  co as Oe,
  fG as be,
  fD as $e,
  ct as B,
  cK as Ce,
  bO as Be,
  bb as je,
  bc as Xe,
  fH as Ge,
  be as Ke,
  fI as ke,
  fJ as Ye,
  fK as Qe,
  fL as Fe,
  fM as Z,
  fN as Ue,
  fO as Je,
  d4 as ue,
  eR as Ze,
  cy as et,
  bh as tt,
  bS as nt,
  bP as rt,
  cW as ot,
  bR as at,
  cY as lt,
  fP as st,
  fQ as Ne,
  bm as Me,
  fR as it,
  fS as ct,
  fT as mt,
  cr as ut,
  dq as dt,
  fU as ft,
  fV as pt,
} from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  G as Re,
  E as gt,
  u as re,
  C as ht,
  c as Y,
  H as bt,
  t as Ct,
  w as xe,
  f as yt,
  d as $t,
  I as Se,
  J as xt,
  b as Pe,
  o as St,
  N as vt,
  s as Et,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { u as Le, g as Ve, a as pe, b as It } from './useForm-By-Y7CLc.js';
import { C as Te, R as wt } from './row-cnvQQvQf.js';
import { l as Ft } from '../i18n/i18n-en-US-DgOT8d-N.js';
import { T as Nt } from './index-BSuyBMRZ.js';
const Mt = (e, t) =>
  se(e)
    ? typeof e == 'object' && !r.isValidElement(e)
      ? { ...t, ...e }
      : { ...t, title: e }
    : null;
function de(e) {
  const [t, n] = r.useState(e);
  return (
    r.useEffect(() => {
      const o = setTimeout(
        () => {
          n(e);
        },
        e.length ? 0 : 10,
      );
      return () => {
        clearTimeout(o);
      };
    }, [e]),
    t
  );
}
const Rt = (e) => {
    const { componentCls: t, motionDurationFast: n, motionEaseInOut: o } = e,
      l = `${t}-show-help`,
      s = `${t}-show-help-item`;
    return {
      [l]: {
        'transition': `opacity ${n} ${o}`,
        '&-appear, &-enter': { 'opacity': 0, '&-active': { opacity: 1 } },
        '&-leave': { 'opacity': 1, '&-active': { opacity: 0 } },
        [s]: {
          overflow: 'hidden',
          transition: `${['height', 'opacity', 'transform'].map((m) => `${m} ${n} ${o}`).join(', ')} !important`,
          [`&${s}-appear, &${s}-enter`]: {
            'transform': 'translateY(-5px)',
            'opacity': 0,
            '&-active': { transform: 'translateY(0)', opacity: 1 },
          },
          [`&${s}-leave-active`]: { transform: 'translateY(-5px)' },
        },
      },
    };
  },
  Pt = (e) => ({
    'legend': {
      display: 'block',
      width: '100%',
      marginBottom: e.marginLG,
      padding: 0,
      color: e.colorTextDescription,
      fontSize: e.fontSizeLG,
      lineHeight: 'inherit',
      border: 0,
      borderBottom: `${re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
    },
    'input[type="search"]': { boxSizing: 'border-box' },
    'input[type="radio"], input[type="checkbox"]': { lineHeight: 'normal' },
    'input[type="file"]': { display: 'block' },
    'input[type="range"]': { display: 'block', width: '100%' },
    'select[multiple], select[size]': { height: 'auto' },
    "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
      outline: 0,
      boxShadow: `0 0 0 ${re(e.controlOutlineWidth)} ${e.controlOutline}`,
    },
    'output': {
      display: 'block',
      paddingTop: 15,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
    },
  }),
  ve = (e, t) => {
    const { formItemCls: n } = e;
    return {
      [n]: { [`${n}-label > label`]: { height: t }, [`${n}-control-input`]: { minHeight: t } },
    };
  },
  Lt = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        ...we(e),
        ...Pt(e),
        [`${t}-text`]: { display: 'inline-block', paddingInlineEnd: e.paddingSM },
        '&-small': { ...ve(e, e.controlHeightSM) },
        '&-large': { ...ve(e, e.controlHeightLG) },
      },
    };
  },
  Vt = (e) => {
    const {
        formItemCls: t,
        iconCls: n,
        rootPrefixCls: o,
        antCls: l,
        labelRequiredMarkColor: s,
        labelColor: m,
        labelFontSize: c,
        labelHeight: f,
        labelColonMarginInlineStart: i,
        labelColonMarginInlineEnd: x,
        itemMarginBottom: d,
      } = e,
      [S] = Oe(l, 'grid');
    return {
      [t]: {
        ...we(e),
        'marginBottom': d,
        'verticalAlign': 'top',
        '&-with-help': { transition: 'none' },
        [`&-hidden,
        &-hidden${l}-row`]: { display: 'none' },
        '&-has-warning': { [`${t}-split`]: { color: e.colorError } },
        '&-has-error': { [`${t}-split`]: { color: e.colorWarning } },
        [`${t}-label`]: {
          'flexGrow': 0,
          'overflow': 'hidden',
          'whiteSpace': 'nowrap',
          'textAlign': 'end',
          'verticalAlign': 'middle',
          '&-left': { textAlign: 'start' },
          '&-wrap': {
            'overflow': 'unset',
            'lineHeight': e.lineHeight,
            'whiteSpace': 'unset',
            '> label': { verticalAlign: 'middle', textWrap: 'balance' },
          },
          '> label': {
            'position': 'relative',
            'display': 'inline-flex',
            'alignItems': 'center',
            'maxWidth': '100%',
            'height': f,
            'color': m,
            'fontSize': c,
            [`> ${n}`]: { fontSize: e.fontSize, verticalAlign: 'top' },
            [`&${t}-required`]: {
              '&::before': {
                display: 'inline-block',
                marginInlineEnd: e.marginXXS,
                color: s,
                fontSize: e.fontSize,
                fontFamily: 'sans-serif',
                lineHeight: 1,
                content: '"*"',
              },
              [`&${t}-required-mark-hidden, &${t}-required-mark-optional`]: {
                '&::before': { display: 'none' },
              },
            },
            [`${t}-optional`]: {
              display: 'inline-block',
              marginInlineStart: e.marginXXS,
              color: e.colorTextDescription,
              [`&${t}-required-mark-hidden`]: { display: 'none' },
            },
            [`${t}-tooltip`]: {
              color: e.colorTextDescription,
              cursor: 'help',
              writingMode: 'horizontal-tb',
              marginInlineStart: e.marginXXS,
            },
            '&::after': {
              content: '":"',
              position: 'relative',
              marginBlock: 0,
              marginInlineStart: i,
              marginInlineEnd: x,
            },
            [`&${t}-no-colon::after`]: { content: '"\\a0"' },
          },
        },
        [`${t}-control`]: {
          [S('display')]: 'flex',
          'flexDirection': 'column',
          'flexGrow': 1,
          [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: {
            width: '100%',
          },
          '&-input': {
            'position': 'relative',
            'display': 'flex',
            'alignItems': 'center',
            'minHeight': e.controlHeight,
            '&-content': {
              flex: 'auto',
              maxWidth: '100%',
              [`&:has(> ${l}-switch:only-child, > ${l}-rate:only-child)`]: {
                display: 'flex',
                alignItems: 'center',
              },
            },
          },
        },
        [t]: {
          '&-additional': { display: 'flex', flexDirection: 'column' },
          '&-explain, &-extra': {
            clear: 'both',
            color: e.colorTextDescription,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
          },
          '&-explain-connected': { width: '100%' },
          '&-extra': {
            minHeight: e.controlHeightSM,
            transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`,
          },
          '&-explain': {
            '&-error': { color: e.colorError },
            '&-warning': { color: e.colorWarning },
          },
        },
        [`&-with-help ${t}-explain`]: { height: 'auto', opacity: 1 },
        [`${t}-feedback-icon`]: {
          'fontSize': e.fontSize,
          'textAlign': 'center',
          'visibility': 'visible',
          'animationName': Re,
          'animationDuration': e.motionDurationMid,
          'animationTimingFunction': e.motionEaseOutBack,
          'pointerEvents': 'none',
          '&-success': { color: e.colorSuccess },
          '&-error': { color: e.colorError },
          '&-warning': { color: e.colorWarning },
          '&-validating': { color: e.colorPrimary },
        },
      },
    };
  },
  te = (e) => ({
    'padding': e.verticalLabelPadding,
    'margin': e.verticalLabelMargin,
    'whiteSpace': 'initial',
    'textAlign': 'start',
    '> label': { 'margin': 0, '&::after': { visibility: 'hidden' } },
  }),
  Tt = (e) => {
    const { antCls: t, formItemCls: n } = e;
    return {
      [`${n}-horizontal`]: {
        [`${n}-label`]: { flexGrow: 0 },
        [`${n}-control`]: { flex: '1 1 0', minWidth: 0 },
        [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: {
          [`& + ${n}-control`]: { minWidth: 'unset' },
        },
        [`${t}-col-24${n}-label,
        ${t}-col-xl-24${n}-label`]: te(e),
      },
    };
  },
  zt = (e) => {
    const { componentCls: t, formItemCls: n, inlineItemMarginBottom: o } = e;
    return {
      [`${t}-inline`]: {
        display: 'flex',
        flexWrap: 'wrap',
        [`${n}-inline`]: {
          'flex': 'none',
          'marginInlineEnd': e.margin,
          'marginBottom': o,
          '&-row': { flexWrap: 'nowrap' },
          [`> ${n}-label,
        > ${n}-control`]: { display: 'inline-block', verticalAlign: 'top' },
          [`> ${n}-label`]: { flex: 'none' },
          [`${t}-text`]: { display: 'inline-block' },
          [`${n}-has-feedback`]: { display: 'inline-block' },
        },
      },
    };
  },
  Ht = (e) => {
    const { componentCls: t, formItemCls: n, rootPrefixCls: o } = e;
    return {
      [`${n} ${n}-label`]: te(e),
      [`${t}:not(${t}-inline)`]: {
        [n]: {
          flexWrap: 'wrap',
          [`${n}-label, ${n}-control`]: {
            [`&:not([class*=" ${o}-col-xs"])`]: { flex: '0 0 100%', maxWidth: '100%' },
          },
        },
      },
    };
  },
  Wt = (e) => {
    const { componentCls: t, formItemCls: n, antCls: o } = e;
    return {
      [`${n}-vertical`]: {
        [`${n}-row`]: { flexDirection: 'column' },
        [`${n}-label > label`]: { height: 'auto' },
        [`${n}-control`]: { width: '100%' },
        [`${n}-label,
        ${o}-col-24${n}-label,
        ${o}-col-xl-24${n}-label`]: te(e),
      },
      [`@media (max-width: ${re(e.screenXSMax)})`]: [
        Ht(e),
        { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${o}-col-xs-24${n}-label`]: te(e) } } },
      ],
      [`@media (max-width: ${re(e.screenSMMax)})`]: {
        [t]: { [`${n}:not(${n}-horizontal)`]: { [`${o}-col-sm-24${n}-label`]: te(e) } },
      },
      [`@media (max-width: ${re(e.screenMDMax)})`]: {
        [t]: { [`${n}:not(${n}-horizontal)`]: { [`${o}-col-md-24${n}-label`]: te(e) } },
      },
      [`@media (max-width: ${re(e.screenLGMax)})`]: {
        [t]: { [`${n}:not(${n}-horizontal)`]: { [`${o}-col-lg-24${n}-label`]: te(e) } },
      },
    };
  },
  _t = (e) => ({
    labelRequiredMarkColor: e.colorError,
    labelColor: e.colorTextHeading,
    labelFontSize: e.fontSize,
    labelHeight: e.controlHeight,
    labelColonMarginInlineStart: e.marginXXS / 2,
    labelColonMarginInlineEnd: e.marginXS,
    itemMarginBottom: e.marginLG,
    verticalLabelPadding: `0 0 ${e.paddingXS}px`,
    verticalLabelMargin: 0,
    inlineItemMarginBottom: 0,
  }),
  ze = (e, t) => De(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: t }),
  ye = Ae(
    'Form',
    (e, { rootPrefixCls: t }) => {
      const n = ze(e, t);
      return [Lt(n), Vt(n), Rt(n), Tt(n), zt(n), Wt(n), gt(n), Re];
    },
    _t,
    { order: -1e3 },
  ),
  Ee = [];
function ge(e, t, n, o = 0) {
  return { key: typeof e == 'string' ? e : `${t}-${o}`, error: e, errorStatus: n };
}
const He = ({
    help: e,
    helpStatus: t,
    errors: n = Ee,
    warnings: o = Ee,
    className: l,
    fieldId: s,
    onVisibleChanged: m,
  }) => {
    const { prefixCls: c } = r.useContext(be),
      f = `${c}-item-explain`,
      i = Ce(c),
      [x, d] = ye(c, i),
      S = r.useMemo(() => $e(c), [c]),
      F = de(n),
      M = de(o),
      b = r.useMemo(
        () =>
          se(e)
            ? [ge(e, 'help', t)]
            : [].concat(
                B(F.map((g, a) => ge(g, 'error', 'error', a))),
                B(M.map((g, a) => ge(g, 'warning', 'warning', a))),
              ),
        [e, t, F, M],
      ),
      y = r.useMemo(() => {
        const g = {};
        return (
          b.forEach(({ key: a }) => {
            g[a] = (g[a] || 0) + 1;
          }),
          b.map((a, u) => ({ ...a, key: g[a.key] > 1 ? `${a.key}-fallback-${u}` : a.key }))
        );
      }, [b]),
      R = {};
    return (
      s && (R.id = `${s}_help`),
      r.createElement(
        ht,
        {
          motionDeadline: S.motionDeadline,
          motionName: `${c}-show-help`,
          visible: !!y.length,
          onVisibleChanged: m,
        },
        (g) => {
          const { className: a, style: u } = g;
          return r.createElement(
            'div',
            { ...R, className: Y(f, a, d, i, l, x), style: u },
            r.createElement(
              bt,
              { keys: y, ...$e(c), motionName: `${c}-show-help-item`, component: !1 },
              (P) => {
                const { key: p, error: N, errorStatus: v, className: h, style: I } = P;
                return r.createElement(
                  'div',
                  { key: p, className: Y(h, { [`${f}-${v}`]: v }), style: I },
                  N,
                );
              },
            ),
          );
        },
      )
    );
  },
  qt = (e, t) => {
    const n = r.useContext(Be),
      {
        getPrefixCls: o,
        direction: l,
        requiredMark: s,
        colon: m,
        scrollToFirstError: c,
        className: f,
        style: i,
        styles: x,
        classNames: d,
        tooltip: S,
      } = je('form'),
      {
        prefixCls: F,
        className: M,
        rootClassName: b,
        size: y,
        disabled: R = n,
        form: g,
        colon: a,
        labelAlign: u,
        labelWrap: P,
        labelCol: p,
        wrapperCol: N,
        layout: v = 'horizontal',
        scrollToFirstError: h,
        requiredMark: I,
        onFinishFailed: H,
        name: L,
        style: V,
        feedbackIcons: j,
        variant: A,
        classNames: W,
        styles: D,
        tooltip: Q,
        ...T
      } = e,
      X = Xe(y),
      E = r.useContext(Ge),
      q = r.useMemo(() => (I !== void 0 ? I : s !== void 0 ? s : !0), [I, s]),
      U = a ?? m,
      oe = { ...S, ...Q },
      _ = o('form', F),
      C = Ce(_),
      [z, w] = ye(_, C),
      K = { ...e, size: X, disabled: R, layout: v, colon: U, requiredMark: q },
      [G, J] = Ke([d, W], [x, D], { props: K }),
      ae = Y(
        _,
        `${_}-${v}`,
        {
          [`${_}-hide-required-mark`]: q === !1,
          [`${_}-rtl`]: l === 'rtl',
          [`${_}-large`]: X === 'large',
          [`${_}-small`]: X === 'small',
        },
        w,
        C,
        z,
        f,
        M,
        b,
        G.root,
      ),
      [O] = Le(g),
      { __INTERNAL__: $ } = O;
    $.name = L;
    const le = r.useMemo(
        () => ({
          name: L,
          labelAlign: u,
          labelCol: p,
          labelWrap: P,
          wrapperCol: N,
          layout: v,
          colon: U,
          requiredMark: q,
          itemRef: $.itemRef,
          form: O,
          feedbackIcons: j,
          tooltip: oe,
          classNames: G,
          styles: J,
        }),
        [L, u, p, N, v, U, q, O, j, G, J, oe],
      ),
      ie = r.useRef(null);
    r.useImperativeHandle(t, () => ({ ...O, nativeElement: ie.current?.nativeElement }));
    const k = (ee, me) => {
        if (ee) {
          let fe = { block: 'nearest' };
          (typeof ee == 'object' && (fe = { ...fe, ...ee }), O.scrollToField(me, fe));
        }
      },
      ce = (ee) => {
        if ((H?.(ee), ee.errorFields.length)) {
          const me = ee.errorFields[0].name;
          if (h !== void 0) {
            k(h, me);
            return;
          }
          c !== void 0 && k(c, me);
        }
      };
    return r.createElement(
      ke.Provider,
      { value: A },
      r.createElement(
        Ye,
        { disabled: R },
        r.createElement(
          Qe.Provider,
          { value: X },
          r.createElement(
            Fe,
            { validateMessages: E },
            r.createElement(
              Z.Provider,
              { value: le },
              r.createElement(
                Ue,
                { status: !0 },
                r.createElement(Je, {
                  id: L,
                  ...T,
                  name: L,
                  onFinishFailed: ce,
                  form: O,
                  ref: ie,
                  style: { ...J?.root, ...i, ...V },
                  className: ae,
                }),
              ),
            ),
          ),
        ),
      ),
    );
  },
  At = r.forwardRef(qt);
function Dt(e) {
  if (typeof e == 'function') return e;
  const t = Ct(e);
  return t.length <= 1 ? t[0] : t;
}
const We = () => {
  const { status: e, errors: t = [], warnings: n = [] } = r.useContext(ue);
  return { status: e, errors: t, warnings: n };
};
We.Context = ue;
function Ot(e) {
  const [t, n] = r.useState(e),
    o = r.useRef(null),
    l = r.useRef([]),
    s = r.useRef(!1);
  r.useEffect(
    () => (
      (s.current = !1),
      () => {
        ((s.current = !0), xe.cancel(o.current), (o.current = null));
      }
    ),
    [],
  );
  function m(c) {
    s.current ||
      (o.current === null &&
        ((l.current = []),
        (o.current = xe(() => {
          ((o.current = null),
            n((f) => {
              let i = f;
              return (
                l.current.forEach((x) => {
                  i = x(i);
                }),
                i
              );
            }));
        }))),
      l.current.push(c));
  }
  return [t, m];
}
function Bt() {
  const { itemRef: e } = r.useContext(Z),
    t = r.useRef({});
  function n(o, l) {
    const s = l && typeof l == 'object' && yt(l),
      m = o.join('_');
    return (
      (t.current.name !== m || t.current.originRef !== s) &&
        ((t.current.name = m), (t.current.originRef = s), (t.current.ref = $t(e(o), s))),
      t.current.ref
    );
  }
  return n;
}
const jt = (e) => {
    const { formItemCls: t } = e;
    return {
      '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
        [`${t}-control`]: { display: 'flex' },
      },
    };
  },
  Xt = Ze(['Form', 'item-item'], (e, { rootPrefixCls: t }) => {
    const n = ze(e, t);
    return jt(n);
  }),
  Gt = 24,
  Kt = (e) => {
    const {
        prefixCls: t,
        status: n,
        labelCol: o,
        wrapperCol: l,
        children: s,
        errors: m,
        warnings: c,
        _internalItemRender: f,
        extra: i,
        help: x,
        fieldId: d,
        marginBottom: S,
        onErrorVisibleChanged: F,
        label: M,
      } = e,
      b = `${t}-item`,
      y = r.useContext(Z),
      { classNames: R, styles: g } = y,
      a = r.useMemo(() => {
        let W = { ...(l || y.wrapperCol || {}) };
        return (
          M === null &&
            !o &&
            !l &&
            y.labelCol &&
            [void 0].concat(B(et)).forEach((Q) => {
              const T = Q ? [Q] : [],
                X = Se(y.labelCol, T),
                E = typeof X == 'object' ? X : {},
                q = Se(W, T),
                U = typeof q == 'object' ? q : {};
              'span' in E &&
                !('offset' in U) &&
                E.span < Gt &&
                (W = xt(W, [].concat(T, ['offset']), E.span));
            }),
          W
        );
      }, [l, y.wrapperCol, y.labelCol, M, o]),
      u = Y(`${b}-control`, a.className),
      P = r.useMemo(() => {
        const { labelCol: W, wrapperCol: D, ...Q } = y;
        return Q;
      }, [y]),
      p = r.useRef(null),
      [N, v] = r.useState(0);
    Pe(() => {
      i && p.current ? v(p.current.clientHeight) : v(0);
    }, [i]);
    const h = r.createElement(
        'div',
        { className: `${b}-control-input` },
        r.createElement(
          'div',
          { className: Y(`${b}-control-input-content`, R?.content), style: g?.content },
          s,
        ),
      ),
      I = r.useMemo(() => ({ prefixCls: t, status: n }), [t, n]),
      H =
        S !== null || m.length || c.length
          ? r.createElement(
              be.Provider,
              { value: I },
              r.createElement(He, {
                fieldId: d,
                errors: m,
                warnings: c,
                help: x,
                helpStatus: n,
                className: `${b}-explain-connected`,
                onVisibleChanged: F,
              }),
            )
          : null,
      L = {};
    d && (L.id = `${d}_extra`);
    const V = i ? r.createElement('div', { ...L, className: `${b}-extra`, ref: p }, i) : null,
      j =
        H || V
          ? r.createElement(
              'div',
              { className: `${b}-additional`, style: S ? { minHeight: S + N } : {} },
              H,
              V,
            )
          : null,
      A =
        f && f.mark === 'pro_table_render' && f.render
          ? f.render(e, { input: h, errorList: H, extra: V })
          : r.createElement(r.Fragment, null, h, j);
    return r.createElement(
      Z.Provider,
      { value: P },
      r.createElement(Te, { ...a, className: u }, A),
      r.createElement(Xt, { prefixCls: t }),
    );
  };
var kt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
        },
      },
    ],
  },
  name: 'question-circle',
  theme: 'outlined',
};
function he() {
  return (
    (he = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    he.apply(this, arguments)
  );
}
const Yt = (e, t) => r.createElement(tt, he({}, e, { ref: t, icon: kt })),
  Qt = r.forwardRef(Yt),
  Ut = ({
    prefixCls: e,
    label: t,
    htmlFor: n,
    labelCol: o,
    labelAlign: l,
    colon: s,
    required: m,
    requiredMark: c,
    tooltip: f,
    vertical: i,
  }) => {
    const [x] = nt('Form'),
      {
        labelAlign: d,
        labelCol: S,
        labelWrap: F,
        colon: M,
        classNames: b,
        styles: y,
        tooltip: R,
      } = r.useContext(Z);
    if (!t) return null;
    const g = o || S || {},
      a = l || d,
      u = `${e}-item-label`,
      P = Y(u, a === 'left' && `${u}-left`, g.className, { [`${u}-wrap`]: !!F });
    let p = t;
    const N = s === !0 || (M !== !1 && s !== !1);
    N && !i && typeof t == 'string' && t.trim() && (p = t.replace(/[:|：]\s*$/, ''));
    const h = Mt(f, R);
    if (h) {
      const A = r.createElement(
        Nt,
        { ...h },
        r.createElement(
          'span',
          {
            className: `${e}-item-tooltip`,
            onClick: (W) => {
              W.preventDefault();
            },
            tabIndex: -1,
          },
          h.icon || h.children || r.createElement(Qt, null),
        ),
      );
      p = r.createElement(r.Fragment, null, p, A);
    }
    const I = c === 'optional',
      H = typeof c == 'function',
      L = c === !1;
    H
      ? (p = c(p, { required: !!m }))
      : I &&
        !m &&
        (p = r.createElement(
          r.Fragment,
          null,
          p,
          r.createElement(
            'span',
            { className: `${e}-item-optional`, title: '' },
            x?.optional || Ft.Form?.optional,
          ),
        ));
    let V;
    L ? (V = 'hidden') : (I || H) && (V = 'optional');
    const j = Y(b?.label, {
      [`${e}-item-required`]: m,
      [`${e}-item-required-mark-${V}`]: V,
      [`${e}-item-no-colon`]: !N,
    });
    return r.createElement(
      Te,
      { ...g, className: P },
      r.createElement(
        'label',
        { htmlFor: n, className: j, style: y?.label, title: typeof t == 'string' ? t : '' },
        p,
      ),
    );
  },
  Jt = { success: lt, warning: at, error: ot, validating: rt };
function _e({
  children: e,
  errors: t,
  warnings: n,
  hasFeedback: o,
  validateStatus: l,
  prefixCls: s,
  meta: m,
  noStyle: c,
  name: f,
}) {
  const i = `${s}-item`,
    { feedbackIcons: x } = r.useContext(Z),
    d = Ve(t, n, m, null, !!o, l),
    { isFormItemInput: S, status: F, hasFeedback: M, feedbackIcon: b, name: y } = r.useContext(ue),
    R = r.useMemo(() => {
      let g;
      if (o) {
        const u = (o !== !0 && o.icons) || x,
          P = d && u?.({ status: d, errors: t, warnings: n })?.[d],
          p = d ? Jt[d] : null;
        g =
          P !== !1 && p
            ? r.createElement(
                'span',
                { className: Y(`${i}-feedback-icon`, `${i}-feedback-icon-${d}`) },
                P || r.createElement(p, null),
              )
            : null;
      }
      const a = {
        status: d || '',
        errors: t,
        warnings: n,
        hasFeedback: !!o,
        feedbackIcon: g,
        isFormItemInput: !0,
        name: f,
      };
      return (
        c &&
          ((a.status = (d ?? F) || ''),
          (a.isFormItemInput = S),
          (a.hasFeedback = !!(o ?? M)),
          (a.feedbackIcon = o !== void 0 ? a.feedbackIcon : b),
          (a.name = f ?? y)),
        a
      );
    }, [d, o, c, S, F]);
  return r.createElement(ue.Provider, { value: R }, e);
}
function Zt(e) {
  const {
      prefixCls: t,
      className: n,
      rootClassName: o,
      style: l,
      help: s,
      errors: m,
      warnings: c,
      validateStatus: f,
      meta: i,
      hasFeedback: x,
      hidden: d,
      children: S,
      fieldId: F,
      required: M,
      isRequired: b,
      onSubItemMetaChange: y,
      layout: R,
      name: g,
      ...a
    } = e,
    u = `${t}-item`,
    { requiredMark: P, layout: p } = r.useContext(Z),
    N = R || p,
    v = N === 'vertical',
    h = r.useRef(null),
    I = de(m),
    H = de(c),
    L = se(s),
    V = !!(L || m.length || c.length),
    j = !!h.current && st(h.current),
    [A, W] = r.useState(null);
  Pe(() => {
    if (V && h.current) {
      const E = getComputedStyle(h.current);
      W(Number.parseInt(E.marginBottom, 10));
    }
  }, [V, j]);
  const D = (E) => {
      E || W(null);
    },
    T = ((E = !1) => {
      const q = E ? I : i.errors,
        U = E ? H : i.warnings;
      return Ve(q, U, i, '', !!x, f);
    })(),
    X = Y(u, n, o, {
      [`${u}-with-help`]: L || I.length || H.length,
      [`${u}-has-feedback`]: T && x,
      [`${u}-has-success`]: T === 'success',
      [`${u}-has-warning`]: T === 'warning',
      [`${u}-has-error`]: T === 'error',
      [`${u}-is-validating`]: T === 'validating',
      [`${u}-hidden`]: d,
      [`${u}-${N}`]: N,
    });
  return r.createElement(
    'div',
    { className: X, style: l, ref: h },
    r.createElement(
      wt,
      {
        className: `${u}-row`,
        ...St(a, [
          '_internalItemRender',
          'colon',
          'dependencies',
          'extra',
          'fieldKey',
          'getValueFromEvent',
          'getValueProps',
          'htmlFor',
          'id',
          'initialValue',
          'isListField',
          'label',
          'labelAlign',
          'labelCol',
          'labelWrap',
          'messageVariables',
          'name',
          'normalize',
          'noStyle',
          'preserve',
          'requiredMark',
          'rules',
          'shouldUpdate',
          'trigger',
          'tooltip',
          'validateFirst',
          'validateTrigger',
          'valuePropName',
          'wrapperCol',
          'validateDebounce',
        ]),
      },
      r.createElement(Ut, {
        htmlFor: F,
        ...e,
        requiredMark: P,
        required: M ?? b,
        prefixCls: t,
        vertical: v,
      }),
      r.createElement(
        Kt,
        {
          ...e,
          ...i,
          errors: I,
          warnings: H,
          prefixCls: t,
          status: T,
          help: s,
          marginBottom: A,
          onErrorVisibleChanged: D,
        },
        r.createElement(
          Ne.Provider,
          { value: y },
          r.createElement(
            _e,
            {
              prefixCls: t,
              meta: i,
              errors: i.errors,
              warnings: i.warnings,
              hasFeedback: x,
              validateStatus: T,
              name: g,
            },
            S,
          ),
        ),
      ),
    ),
    !!A && r.createElement('div', { className: `${u}-margin-offset`, style: { marginBottom: -A } }),
  );
}
const en = '__SPLIT__';
function tn(e, t) {
  const n = Object.keys(e),
    o = Object.keys(t);
  return (
    n.length === o.length &&
    n.every((l) => {
      const s = e[l],
        m = t[l];
      return s === m || typeof s == 'function' || typeof m == 'function';
    })
  );
}
const nn = r.memo(
  (e) => e.children,
  (e, t) =>
    tn(e.control, t.control) &&
    e.update === t.update &&
    e.childProps.length === t.childProps.length &&
    e.childProps.every((n, o) => n === t.childProps[o]),
);
function Ie() {
  return { errors: [], warnings: [], touched: !1, validating: !1, name: [], validated: !1 };
}
function rn(e) {
  const {
      name: t,
      noStyle: n,
      className: o,
      dependencies: l,
      prefixCls: s,
      shouldUpdate: m,
      rules: c,
      children: f,
      required: i,
      label: x,
      messageVariables: d,
      trigger: S = 'onChange',
      validateTrigger: F,
      hidden: M,
      help: b,
      layout: y,
    } = e,
    { getPrefixCls: R } = r.useContext(Me),
    { name: g } = r.useContext(Z),
    a = Dt(f),
    u = typeof a == 'function',
    P = r.useContext(Ne),
    { validateTrigger: p } = r.useContext(it),
    N = se(F) ? F : p,
    v = se(t),
    h = R('form', s),
    I = Ce(h),
    [H, L] = ye(h, I);
  dt();
  const V = r.useContext(ct),
    j = r.useRef(null),
    [A, W] = Ot({}),
    [D, Q] = vt(() => Ie()),
    T = (C) => {
      const z = V?.getKey(C.name);
      if ((Q(C.destroy ? Ie() : C, !0), n && b !== !1 && P)) {
        let w = C.name;
        if (C.destroy) w = j.current || w;
        else if (z !== void 0) {
          const [K, G] = z;
          ((w = [K].concat(B(G))), (j.current = w));
        }
        P(C, w);
      }
    },
    X = (C, z) => {
      W((w) => {
        const K = { ...w },
          J = [].concat(B(C.name.slice(0, -1)), B(z)).join(en);
        return (C.destroy ? delete K[J] : (K[J] = C), K);
      });
    },
    [E, q] = r.useMemo(() => {
      const C = B(D.errors),
        z = B(D.warnings);
      return (
        Object.values(A).forEach((w) => {
          (C.push.apply(C, B(w.errors || [])), z.push.apply(z, B(w.warnings || [])));
        }),
        [C, z]
      );
    }, [A, D.errors, D.warnings]),
    U = Bt();
  function oe(C, z, w) {
    return n && !M
      ? r.createElement(
          _e,
          {
            prefixCls: h,
            hasFeedback: e.hasFeedback,
            validateStatus: e.validateStatus,
            meta: D,
            errors: E,
            warnings: q,
            noStyle: !0,
            name: t,
          },
          C,
        )
      : r.createElement(
          Zt,
          {
            key: 'row',
            ...e,
            className: Y(o, L, I, H),
            prefixCls: h,
            fieldId: z,
            isRequired: w,
            errors: E,
            warnings: q,
            meta: D,
            onSubItemMetaChange: X,
            layout: y,
            name: t,
          },
          C,
        );
  }
  if (!v && !u && !l) return oe(a);
  let _ = {};
  return (
    typeof x == 'string' ? (_.label = x) : t && (_.label = String(t)),
    d && (_ = { ..._, ...d }),
    r.createElement(
      mt,
      { ...e, messageVariables: _, trigger: S, validateTrigger: N, onMetaChange: T },
      (C, z, w) => {
        const K = pe(t).length && z ? z.name : [],
          G = It(K, g),
          J =
            i !== void 0
              ? i
              : !!c?.some(($) => {
                  if ($ && typeof $ == 'object' && $.required && !$.warningOnly) return !0;
                  if (typeof $ == 'function') {
                    const le = $(w);
                    return le?.required && !le?.warningOnly;
                  }
                  return !1;
                }),
          ae = { ...C };
        let O = null;
        if (Array.isArray(a) && v) O = a;
        else if (!(u && (!(m || l) || v))) {
          if (!(l && !u && !v))
            if (r.isValidElement(a)) {
              const $ = { ...a.props, ...ae };
              if (($.id || ($.id = G), b || E.length > 0 || q.length > 0 || e.extra)) {
                const k = [];
                ((b || E.length > 0) && k.push(`${G}_help`),
                  e.extra && k.push(`${G}_extra`),
                  ($['aria-describedby'] = k.join(' ')));
              }
              (E.length > 0 && ($['aria-invalid'] = 'true'),
                J && ($['aria-required'] = 'true'),
                Et(a) && ($.ref = U(K, a)),
                new Set([].concat(B(pe(S)), B(pe(N)))).forEach((k) => {
                  $[k] = (...ce) => {
                    (ae[k]?.(...ce), a.props[k]?.(...ce));
                  };
                }));
              const ie = [$['aria-required'], $['aria-invalid'], $['aria-describedby']];
              O = r.createElement(nn, { control: ae, update: a, childProps: ie }, ut(a, $));
            } else u && (m || l) && !v ? (O = a(w)) : (O = a);
        }
        return oe(O, G, J);
      },
    )
  );
}
const qe = rn;
qe.useStatus = We;
const on = ({ prefixCls: e, children: t, ...n }) => {
  const { getPrefixCls: o } = r.useContext(Me),
    l = o('form', e),
    s = r.useMemo(() => ({ prefixCls: l, status: 'error' }), [l]);
  return r.createElement(ft, { ...n }, (m, c, f) =>
    r.createElement(
      be.Provider,
      { value: s },
      t(
        m.map((i) => ({ ...i, fieldKey: i.key })),
        c,
        { errors: f.errors, warnings: f.warnings },
      ),
    ),
  );
};
function an() {
  const { form: e } = r.useContext(Z);
  return e;
}
const ne = At;
ne.Item = qe;
ne.List = on;
ne.ErrorList = He;
ne.useForm = Le;
ne.useFormInstance = an;
ne.useWatch = pt;
ne.Provider = Fe;
export { ne as F, kt as Q, Mt as c };
