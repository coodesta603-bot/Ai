import '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { b9 as c, b8 as v, bV as V, ba as w, bW as J } from './index-C8UyLGsD.js';
function y(r) {
  return c(r, { inputAffixPadding: r.paddingXXS });
}
const E = (r) => {
    const {
        controlHeight: o,
        fontSize: d,
        lineHeight: a,
        lineWidth: e,
        controlHeightSM: i,
        controlHeightLG: n,
        fontSizeLG: t,
        lineHeightLG: s,
        paddingSM: p,
        controlPaddingHorizontalSM: F,
        controlPaddingHorizontal: G,
        colorFillAlter: M,
        colorPrimaryHover: L,
        colorPrimary: A,
        controlOutlineWidth: u,
        controlOutline: O,
        colorErrorOutline: D,
        colorWarningOutline: P,
        colorBgContainer: h,
        inputFontSize: q,
        inputFontSizeLG: X,
        inputFontSizeSM: _,
      } = r,
      g = q || d,
      b = _ || g,
      S = X || t,
      U = Math.round(((o - g * a) / 2) * 10) / 10 - e,
      j = Math.round(((i - b * a) / 2) * 10) / 10 - e,
      Q = Math.ceil(((n - S * s) / 2) * 10) / 10 - e;
    return {
      paddingBlock: Math.max(U, 0),
      paddingBlockSM: Math.max(j, 0),
      paddingBlockLG: Math.max(Q, 0),
      paddingInline: p - e,
      paddingInlineSM: F - e,
      paddingInlineLG: G - e,
      addonBg: M,
      activeBorderColor: A,
      hoverBorderColor: L,
      activeShadow: `0 0 0 ${u}px ${O}`,
      errorActiveShadow: `0 0 0 ${u}px ${D}`,
      warningActiveShadow: `0 0 0 ${u}px ${P}`,
      hoverBg: h,
      activeBg: h,
      inputFontSize: g,
      inputFontSizeLG: S,
      inputFontSizeSM: b,
    };
  },
  K = (r) => ({ borderColor: r.hoverBorderColor, backgroundColor: r.hoverBg }),
  $ = (r) => ({
    'color': r.colorTextDisabled,
    'backgroundColor': r.colorBgContainerDisabled,
    'borderColor': r.colorBorder,
    'boxShadow': 'none',
    'cursor': 'not-allowed',
    'opacity': 1,
    'input[disabled], textarea[disabled]': { cursor: 'not-allowed' },
    '&:hover:not([disabled])': {
      ...K(c(r, { hoverBorderColor: r.colorBorder, hoverBg: r.colorBgContainerDisabled })),
    },
  }),
  R = (r, o) => ({
    'background': r.colorBgContainer,
    'borderWidth': r.lineWidth,
    'borderStyle': r.lineType,
    'borderColor': o.borderColor,
    '&:hover': { borderColor: o.hoverBorderColor, backgroundColor: r.hoverBg },
    '&:focus, &:focus-within': {
      borderColor: o.activeBorderColor,
      boxShadow: o.activeShadow,
      outline: 0,
      backgroundColor: r.activeBg,
    },
  }),
  f = (r, o) => ({
    [`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]: {
      ...R(r, o),
      [`${r.componentCls}-prefix, ${r.componentCls}-suffix`]: { color: o.affixColor },
    },
    [`&${r.componentCls}-status-${o.status}${r.componentCls}-disabled`]: {
      borderColor: o.borderColor,
    },
  }),
  N = (r, o) => ({
    '&-outlined': {
      ...R(r, {
        borderColor: r.colorBorder,
        hoverBorderColor: r.hoverBorderColor,
        activeBorderColor: r.activeBorderColor,
        activeShadow: r.activeShadow,
      }),
      [`&${r.componentCls}-disabled, &[disabled]`]: { ...$(r) },
      ...f(r, {
        status: 'error',
        borderColor: r.colorError,
        hoverBorderColor: r.colorErrorBorderHover,
        activeBorderColor: r.colorError,
        activeShadow: r.errorActiveShadow,
        affixColor: r.colorError,
      }),
      ...f(r, {
        status: 'warning',
        borderColor: r.colorWarning,
        hoverBorderColor: r.colorWarningBorderHover,
        activeBorderColor: r.colorWarning,
        activeShadow: r.warningActiveShadow,
        affixColor: r.colorWarning,
      }),
      ...o,
    },
  }),
  C = (r, o) => ({
    [`&${r.componentCls}-group-wrapper-status-${o.status}`]: {
      [`${r.componentCls}-group-addon`]: { borderColor: o.addonBorderColor, color: o.addonColor },
    },
  }),
  Y = (r) => ({
    '&-outlined': {
      [`${r.componentCls}-group`]: {
        '&-addon': {
          background: r.addonBg,
          border: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
        },
        '&-addon:first-child': { borderInlineEnd: 0 },
        '&-addon:last-child': { borderInlineStart: 0 },
      },
      ...C(r, { status: 'error', addonBorderColor: r.colorError, addonColor: r.colorErrorText }),
      ...C(r, {
        status: 'warning',
        addonBorderColor: r.colorWarning,
        addonColor: r.colorWarningText,
      }),
      [`&${r.componentCls}-group-wrapper-disabled`]: {
        [`${r.componentCls}-group-addon`]: { ...$(r) },
      },
    },
  }),
  Z = (r, o) => {
    const { componentCls: d } = r;
    return {
      '&-borderless': {
        'background': 'transparent',
        'border': 'none',
        'paddingBlock': r.calc(r.paddingBlock).add(r.lineWidth).equal(),
        [`&${d}-sm, &${d}-affix-wrapper-sm`]: {
          paddingBlock: r.calc(r.paddingBlockSM).add(r.lineWidth).equal(),
        },
        [`&${d}-lg, &${d}-affix-wrapper-lg`]: {
          paddingBlock: r.calc(r.paddingBlockLG).add(r.lineWidth).equal(),
        },
        '&:focus, &:focus-within': { outline: 'none' },
        [`&${d}-disabled, &[disabled]`]: { color: r.colorTextDisabled, cursor: 'not-allowed' },
        [`&${d}-status-error`]: { '&, & input, & textarea': { color: r.colorError } },
        [`&${d}-status-warning`]: { '&, & input, & textarea': { color: r.colorWarning } },
        ...o,
      },
    };
  },
  W = (r, o) => ({
    'background': o.bg,
    'borderWidth': r.lineWidth,
    'borderStyle': r.lineType,
    'borderColor': 'transparent',
    'input&, & input, textarea&, & textarea': { color: o?.inputColor ?? 'unset' },
    '&:hover': { background: o.hoverBg },
    '&:focus, &:focus-within': {
      outline: 0,
      borderColor: o.activeBorderColor,
      backgroundColor: r.activeBg,
    },
  }),
  m = (r, o) => ({
    [`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]: {
      ...W(r, o),
      [`${r.componentCls}-prefix, ${r.componentCls}-suffix`]: { color: o.affixColor },
    },
  }),
  k = (r, o) => ({
    '&-filled': {
      ...W(r, {
        bg: r.colorFillTertiary,
        hoverBg: r.colorFillSecondary,
        activeBorderColor: r.activeBorderColor,
        inputColor: r.colorText,
      }),
      [`&${r.componentCls}-disabled, &[disabled]`]: { ...$(r) },
      ...m(r, {
        status: 'error',
        bg: r.colorErrorBg,
        hoverBg: r.colorErrorBgHover,
        activeBorderColor: r.colorError,
        inputColor: r.colorErrorText,
        affixColor: r.colorError,
      }),
      ...m(r, {
        status: 'warning',
        bg: r.colorWarningBg,
        hoverBg: r.colorWarningBgHover,
        activeBorderColor: r.colorWarning,
        inputColor: r.colorWarningText,
        affixColor: r.colorWarning,
      }),
      ...o,
    },
  }),
  B = (r, o) => ({
    [`&${r.componentCls}-group-wrapper-status-${o.status}`]: {
      [`${r.componentCls}-group-addon`]: { background: o.addonBg, color: o.addonColor },
    },
  }),
  rr = (r) => ({
    '&-filled': {
      [`${r.componentCls}-group-addon`]: {
        'background': r.colorFillTertiary,
        '&:last-child': { position: 'static' },
      },
      ...B(r, { status: 'error', addonBg: r.colorErrorBg, addonColor: r.colorErrorText }),
      ...B(r, { status: 'warning', addonBg: r.colorWarningBg, addonColor: r.colorWarningText }),
      [`&${r.componentCls}-group-wrapper-disabled`]: {
        [`${r.componentCls}-group`]: {
          '&-addon': { background: r.colorFillTertiary, color: r.colorTextDisabled },
          '&-addon:first-child': {
            borderInlineStart: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
            borderTop: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
            borderBottom: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
          },
          '&-addon:last-child': {
            borderInlineEnd: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
            borderTop: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
            borderBottom: `${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
          },
        },
      },
    },
  }),
  I = (r, o) => ({
    'background': r.colorBgContainer,
    'borderWidth': `${l(r.lineWidth)} 0`,
    'borderStyle': `${r.lineType} none`,
    'borderColor': `transparent transparent ${o.borderColor} transparent`,
    'borderRadius': 0,
    '&:hover': {
      borderColor: `transparent transparent ${o.hoverBorderColor} transparent`,
      backgroundColor: r.hoverBg,
    },
    '&:focus, &:focus-within': {
      borderColor: `transparent transparent ${o.activeBorderColor} transparent`,
      outline: 0,
      backgroundColor: r.activeBg,
    },
  }),
  x = (r, o) => ({
    [`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]: {
      ...I(r, o),
      [`${r.componentCls}-prefix, ${r.componentCls}-suffix`]: { color: o.affixColor },
    },
    [`&${r.componentCls}-status-${o.status}${r.componentCls}-disabled`]: {
      borderColor: `transparent transparent ${o.borderColor} transparent`,
    },
  }),
  or = (r, o) => ({
    '&-underlined': {
      ...I(r, {
        borderColor: r.colorBorder,
        hoverBorderColor: r.hoverBorderColor,
        activeBorderColor: r.activeBorderColor,
        activeShadow: r.activeShadow,
      }),
      [`&${r.componentCls}-disabled, &[disabled]`]: {
        'color': r.colorTextDisabled,
        'boxShadow': 'none',
        'cursor': 'not-allowed',
        '&:hover': { borderColor: `transparent transparent ${r.colorBorder} transparent` },
      },
      'input[disabled], textarea[disabled]': { cursor: 'not-allowed' },
      ...x(r, {
        status: 'error',
        borderColor: r.colorError,
        hoverBorderColor: r.colorErrorBorderHover,
        activeBorderColor: r.colorError,
        activeShadow: r.errorActiveShadow,
        affixColor: r.colorError,
      }),
      ...x(r, {
        status: 'warning',
        borderColor: r.colorWarning,
        hoverBorderColor: r.colorWarningBorderHover,
        activeBorderColor: r.colorWarning,
        activeShadow: r.warningActiveShadow,
        affixColor: r.colorWarning,
      }),
      ...o,
    },
  }),
  dr = (r) => ({
    '&::-moz-placeholder': { opacity: 1 },
    '&::placeholder': { color: r, userSelect: 'none' },
    '&:placeholder-shown': { textOverflow: 'ellipsis' },
  }),
  T = (r) => {
    const { paddingBlockLG: o, lineHeightLG: d, borderRadiusLG: a, paddingInlineLG: e } = r;
    return {
      padding: `${l(o)} ${l(e)}`,
      fontSize: r.inputFontSizeLG,
      lineHeight: d,
      borderRadius: a,
    };
  },
  z = (r) => ({
    padding: `${l(r.paddingBlockSM)} ${l(r.paddingInlineSM)}`,
    fontSize: r.inputFontSizeSM,
    borderRadius: r.borderRadiusSM,
  }),
  H = (r, o = {}) => ({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%',
    'minWidth': 0,
    'padding': `${l(r.paddingBlock)} ${l(r.paddingInline)}`,
    'color': r.colorText,
    'fontSize': r.inputFontSize,
    'lineHeight': r.lineHeight,
    'borderRadius': r.borderRadius,
    'transition': `all ${r.motionDurationMid}`,
    ...dr(r.colorTextPlaceholder),
    '&-lg': { ...T(r), ...o.largeStyle },
    '&-sm': { ...z(r), ...o.smallStyle },
    '&-rtl, &-textarea-rtl': { direction: 'rtl' },
  }),
  lr = (r) => {
    const { componentCls: o, antCls: d } = r;
    return {
      'position': 'relative',
      'display': 'table',
      'width': '100%',
      'borderCollapse': 'separate',
      'borderSpacing': 0,
      "&[class*='col-']": {
        'paddingInlineEnd': r.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 },
      },
      [`&-lg ${o}, &-lg > ${o}-group-addon`]: { ...T(r) },
      [`&-sm ${o}, &-sm > ${o}-group-addon`]: { ...z(r) },
      [`&-lg ${d}-select-single`]: { height: r.controlHeightLG },
      [`&-sm ${d}-select-single`]: { height: r.controlHeightSM },
      [`> ${o}`]: {
        'display': 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
      },
      [`${o}-group`]: {
        '&-addon, &-wrap': {
          'display': 'table-cell',
          'width': 1,
          'whiteSpace': 'nowrap',
          'verticalAlign': 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${l(r.paddingInline)}`,
          color: r.colorText,
          fontWeight: 'normal',
          fontSize: r.inputFontSize,
          textAlign: 'center',
          borderRadius: r.borderRadius,
          transition: `all ${r.motionDurationSlow}`,
          lineHeight: 1,
          [`${d}-select`]: {
            margin: `${l(r.calc(r.paddingBlock).add(1).mul(-1).equal())} ${l(r.calc(r.paddingInline).mul(-1).equal())}`,
            [`&${d}-select-single:not(${d}-select-customize-input):not(${d}-pagination-size-changer)`]:
              {
                backgroundColor: 'inherit',
                border: `${l(r.lineWidth)} ${r.lineType} transparent`,
                boxShadow: 'none',
              },
          },
          [`${d}-cascader-picker`]: {
            margin: `-9px ${l(r.calc(r.paddingInline).mul(-1).equal())}`,
            backgroundColor: 'transparent',
            [`${d}-cascader-input`]: { textAlign: 'start', border: 0, boxShadow: 'none' },
          },
        },
      },
      [o]: {
        'width': '100%',
        'marginBottom': 0,
        'textAlign': 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': { zIndex: 1, borderInlineEndWidth: 1 },
      },
      [`> ${o}:first-child, ${o}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${d}-select`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`> ${o}-affix-wrapper`]: {
        [`&:not(:first-child) ${o}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
        [`&:not(:last-child) ${o}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`> ${o}:last-child, ${o}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${d}-select`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
      },
      [`${o}-affix-wrapper`]: {
        '&:not(:last-child)': { borderStartEndRadius: 0, borderEndEndRadius: 0 },
        '&:not(:first-child)': { borderStartStartRadius: 0, borderEndStartRadius: 0 },
      },
      [`&${o}-group-compact`]: {
        'display': 'block',
        ...J(),
        [`${o}-group-addon, ${o}-group-wrap, > ${o}`]: {
          '&:not(:first-child):not(:last-child)': {
            'borderInlineEndWidth': r.lineWidth,
            '&:hover, &:focus': { zIndex: 1 },
          },
        },
        '& > *': { display: 'inline-flex', float: 'none', verticalAlign: 'top', borderRadius: 0 },
        [`
        & > ${o}-affix-wrapper,
        & > ${o}-number-affix-wrapper,
        & > ${d}-picker-range
      `]: { display: 'inline-flex' },
        '& > *:not(:last-child)': {
          marginInlineEnd: r.calc(r.lineWidth).mul(-1).equal(),
          borderInlineEndWidth: r.lineWidth,
        },
        [o]: { float: 'none' },
        [`& > ${d}-select,
      & > ${d}-select-auto-complete ${o},
      & > ${d}-cascader-picker ${o},
      & > ${o}-group-wrapper ${o}`]: {
          'borderInlineEndWidth': r.lineWidth,
          'borderRadius': 0,
          '&:hover, &:focus': { zIndex: 1 },
        },
        [`& > ${d}-select-focused`]: { zIndex: 1 },
        [`& > ${d}-select > ${d}-select-arrow`]: { zIndex: 1 },
        [`& > *:first-child,
      & > ${d}-select:first-child,
      & > ${d}-select-auto-complete:first-child ${o},
      & > ${d}-cascader-picker:first-child ${o}`]: {
          borderStartStartRadius: r.borderRadius,
          borderEndStartRadius: r.borderRadius,
        },
        [`& > *:last-child,
      & > ${d}-select:last-child,
      & > ${d}-cascader-picker:last-child ${o},
      & > ${d}-cascader-picker-focused:last-child ${o}`]: {
          borderInlineEndWidth: r.lineWidth,
          borderStartEndRadius: r.borderRadius,
          borderEndEndRadius: r.borderRadius,
        },
        [`& > ${d}-select-auto-complete ${o}`]: { verticalAlign: 'top' },
        [`${o}-group-wrapper + ${o}-group-wrapper`]: {
          marginInlineStart: r.calc(r.lineWidth).mul(-1).equal(),
          [`${o}-affix-wrapper`]: {},
        },
      },
    };
  },
  er = (r) => {
    const { componentCls: o, controlHeightSM: d, lineWidth: a, calc: e } = r,
      n = e(d).sub(e(a).mul(2)).sub(16).div(2).equal();
    return {
      [o]: {
        ...w(r),
        ...H(r),
        ...N(r),
        ...k(r),
        ...Z(r),
        ...or(r),
        '&[type="color"]': {
          height: r.controlHeight,
          [`&${o}-lg`]: { height: r.controlHeightLG },
          [`&${o}-sm`]: { height: d, paddingTop: n, paddingBottom: n },
        },
        '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
          { appearance: 'none' },
      },
    };
  },
  ar = (r) => {
    const { componentCls: o } = r;
    return {
      [`${o}-clear-icon`]: {
        'margin': 0,
        'padding': 0,
        'lineHeight': 0,
        'color': r.colorTextQuaternary,
        'fontSize': r.fontSizeIcon,
        'verticalAlign': -1,
        'cursor': 'pointer',
        'transition': `color ${r.motionDurationSlow}`,
        'border': 'none',
        'outline': 'none',
        'backgroundColor': 'transparent',
        '&:hover': { color: r.colorIcon },
        '&:active': { color: r.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${l(r.inputAffixPadding)}` },
      },
    };
  },
  ir = (r) => {
    const {
        componentCls: o,
        inputAffixPadding: d,
        colorTextDescription: a,
        motionDurationSlow: e,
        colorIcon: i,
        colorIconHover: n,
        iconCls: t,
      } = r,
      s = `${o}-affix-wrapper`,
      p = `${o}-affix-wrapper-disabled`;
    return {
      [s]: {
        ...H(r),
        'display': 'inline-flex',
        '&-focused, &:focus': { zIndex: 1 },
        [`> input${o}`]: { padding: 0 },
        [`> input${o}, > textarea${o}`]: {
          'fontSize': 'inherit',
          'border': 'none',
          'borderRadius': 0,
          'outline': 'none',
          'background': 'transparent',
          'color': 'inherit',
          '&::-ms-reveal': { display: 'none' },
          '&:focus': { boxShadow: 'none !important' },
        },
        '&::before': { display: 'inline-block', width: 0, visibility: 'hidden', content: '"\\a0"' },
        [o]: {
          '&-prefix, &-suffix': {
            'display': 'flex',
            'flex': 'none',
            'alignItems': 'center',
            '> *:not(:last-child)': { marginInlineEnd: r.paddingXS },
          },
          '&-show-count-suffix': { color: a, direction: 'ltr' },
          '&-show-count-has-suffix': { marginInlineEnd: r.paddingXXS },
          '&-prefix': { marginInlineEnd: d },
          '&-suffix': { marginInlineStart: d },
        },
        ...ar(r),
        [`${t}${o}-password-icon`]: {
          'color': i,
          'cursor': 'pointer',
          'transition': `all ${e}`,
          '&:hover': { color: n },
        },
      },
      [`${o}-underlined`]: { borderRadius: 0 },
      [p]: {
        [`${t}${o}-password-icon`]: {
          'color': i,
          'cursor': 'not-allowed',
          '&:hover': { color: i },
        },
      },
    };
  },
  nr = (r) => {
    const { componentCls: o, borderRadiusLG: d, borderRadiusSM: a } = r;
    return {
      [`${o}-group`]: {
        ...w(r),
        ...lr(r),
        '&-rtl': { direction: 'rtl' },
        '&-wrapper': {
          'display': 'inline-block',
          'width': '100%',
          'textAlign': 'start',
          'verticalAlign': 'top',
          '&-rtl': { direction: 'rtl' },
          '&-lg': { [`${o}-group-addon`]: { borderRadius: d, fontSize: r.inputFontSizeLG } },
          '&-sm': { [`${o}-group-addon`]: { borderRadius: a } },
          ...Y(r),
          ...rr(r),
          [`&:not(${o}-compact-first-item):not(${o}-compact-last-item)${o}-compact-item`]: {
            [`${o}, ${o}-group-addon`]: { borderRadius: 0 },
          },
          [`&:not(${o}-compact-last-item)${o}-compact-first-item`]: {
            [`${o}, ${o}-group-addon`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
          },
          [`&:not(${o}-compact-first-item)${o}-compact-last-item`]: {
            [`${o}, ${o}-group-addon`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
          },
          [`&:not(${o}-compact-last-item)${o}-compact-item`]: {
            [`${o}-affix-wrapper`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
          },
          [`&:not(${o}-compact-first-item)${o}-compact-item`]: {
            [`${o}-affix-wrapper`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
          },
        },
      },
    };
  },
  tr = (r) => {
    const { componentCls: o } = r;
    return {
      [`${o}-out-of-range`]: {
        [`&, & input, & textarea, ${o}-show-count-suffix, ${o}-data-count`]: {
          color: r.colorError,
        },
      },
    };
  },
  ur = v(
    ['Input', 'Shared'],
    (r) => {
      const o = c(r, y(r));
      return [er(o), ir(o)];
    },
    E,
    { resetFont: !1 },
  ),
  gr = v(
    ['Input', 'Component'],
    (r) => {
      const o = c(r, y(r));
      return [
        nr(o),
        tr(o),
        V(o, { focus: !0, focusElCls: `${o.componentCls}-affix-wrapper-focused` }),
      ];
    },
    E,
    { resetFont: !1 },
  );
export {
  E as a,
  gr as b,
  z as c,
  $ as d,
  R as e,
  H as f,
  T as g,
  dr as h,
  y as i,
  Z as j,
  or as k,
  k as l,
  N as m,
  ur as u,
};
