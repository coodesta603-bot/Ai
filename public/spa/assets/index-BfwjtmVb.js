import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as a, c as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { b8 as J, b9 as K, ba as Q, bb as R, bc as U, bd as Y, be as Z } from './index-C8UyLGsD.js';
const _ = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-horizontal': {
          [`&${t}`]: { '&-sm': { marginBlock: e.marginXS }, '&-md': { marginBlock: e.margin } },
        },
      },
    };
  },
  tt = (e) => {
    const {
        componentCls: t,
        sizePaddingEdgeHorizontal: s,
        colorSplit: o,
        lineWidth: i,
        textPaddingInline: x,
        orientationMargin: c,
        verticalMarginInline: f,
      } = e,
      r = `${t}-rail`;
    return {
      [t]: {
        ...Q(e),
        'borderBlockStart': `${a(i)} solid ${o}`,
        [r]: { borderBlockStart: `${a(i)} solid ${o}` },
        '&-vertical': {
          position: 'relative',
          top: '-0.06em',
          display: 'inline-block',
          height: '0.9em',
          marginInline: f,
          marginBlock: 0,
          verticalAlign: 'middle',
          borderTop: 0,
          borderInlineStart: `${a(i)} solid ${o}`,
        },
        '&-horizontal': {
          display: 'flex',
          clear: 'both',
          width: '100%',
          minWidth: '100%',
          margin: `${a(e.marginLG)} 0`,
        },
        [`&-horizontal${t}-with-text`]: {
          display: 'flex',
          alignItems: 'center',
          margin: `${a(e.dividerHorizontalWithTextGutterMargin)} 0`,
          color: e.colorTextHeading,
          fontWeight: 500,
          fontSize: e.fontSizeLG,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          borderBlockStart: `0 ${o}`,
          [`${r}-start, ${r}-end`]: {
            width: '50%',
            borderBlockStartColor: 'inherit',
            borderBlockEnd: 0,
            content: "''",
          },
        },
        [`&-horizontal${t}-with-text-start`]: {
          [`${r}-start`]: { width: `calc(${c} * 100%)` },
          [`${r}-end`]: { width: `calc(100% - ${c} * 100%)` },
        },
        [`&-horizontal${t}-with-text-end`]: {
          [`${r}-start`]: { width: `calc(100% - ${c} * 100%)` },
          [`${r}-end`]: { width: `calc(${c} * 100%)` },
        },
        [`${t}-inner-text`]: { display: 'inline-block', paddingBlock: 0, paddingInline: x },
        '&-dashed': {
          background: 'none',
          borderColor: o,
          borderStyle: 'dashed',
          borderWidth: `${a(i)} 0 0`,
          [r]: { borderBlockStart: `${a(i)} dashed ${o}` },
        },
        [`&-horizontal${t}-with-text${t}-dashed`]: {
          [`${r}-start, ${r}-end`]: { borderStyle: 'dashed none none' },
        },
        [`&-vertical${t}-dashed`]: {
          borderInlineStartWidth: i,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0,
        },
        '&-dotted': {
          background: 'none',
          borderColor: o,
          borderStyle: 'dotted',
          borderWidth: `${a(i)} 0 0`,
          [r]: { borderBlockStart: `${a(i)} dotted ${o}` },
        },
        [`&-horizontal${t}-with-text${t}-dotted`]: {
          '&::before, &::after': { borderStyle: 'dotted none none' },
        },
        [`&-vertical${t}-dotted`]: {
          borderInlineStartWidth: i,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0,
        },
        [`&-plain${t}-with-text`]: {
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
        },
        [`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]: {
          [`${r}-start`]: { width: 0 },
          [`${r}-end`]: { width: '100%' },
          [`${t}-inner-text`]: { paddingInlineStart: s },
        },
        [`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]: {
          [`${r}-start`]: { width: '100%' },
          [`${r}-end`]: { width: 0 },
          [`${t}-inner-text`]: { paddingInlineEnd: s },
        },
      },
    };
  },
  et = (e) => ({
    textPaddingInline: '1em',
    orientationMargin: 0.05,
    verticalMarginInline: e.marginXS,
  }),
  rt = J(
    'Divider',
    (e) => {
      const t = K(e, {
        dividerHorizontalWithTextGutterMargin: e.margin,
        sizePaddingEdgeHorizontal: 0,
      });
      return [tt(t), _(t)];
    },
    et,
    { unitless: { orientationMargin: !0 } },
  ),
  nt = ['left', 'right', 'center', 'start', 'end'],
  lt = (e) => {
    const {
        getPrefixCls: t,
        direction: s,
        className: o,
        style: i,
        classNames: x,
        styles: c,
      } = R('divider'),
      {
        prefixCls: f,
        type: r,
        orientation: b,
        vertical: N,
        titlePlacement: y,
        orientationMargin: l,
        className: P,
        rootClassName: k,
        children: m,
        dashed: W,
        variant: v = 'solid',
        plain: T,
        style: H,
        size: D,
        classNames: G,
        styles: L,
        ...A
      } = e,
      n = t('divider', f),
      g = `${n}-rail`,
      [F, O] = rt(n),
      S = U(D),
      w = !!m,
      C = nt.includes(b || ''),
      u = d.useMemo(() => {
        const z = y ?? (C ? b : 'center');
        return z === 'left'
          ? s === 'rtl'
            ? 'end'
            : 'start'
          : z === 'right'
            ? s === 'rtl'
              ? 'start'
              : 'end'
            : z;
      }, [s, b, y, C]),
      I = u === 'start' && l != null,
      E = u === 'end' && l != null,
      [B, V] = Y(b, N, r),
      X = { ...e, orientation: B, titlePlacement: u, size: S },
      [$, h] = Z([x, G], [c, L], { props: X }),
      j = p(
        n,
        o,
        F,
        O,
        `${n}-${B}`,
        {
          [`${n}-with-text`]: w,
          [`${n}-with-text-${u}`]: w,
          [`${n}-dashed`]: !!W,
          [`${n}-${v}`]: v !== 'solid',
          [`${n}-plain`]: !!T,
          [`${n}-rtl`]: s === 'rtl',
          [`${n}-no-default-orientation-margin-start`]: I,
          [`${n}-no-default-orientation-margin-end`]: E,
          [`${n}-md`]: S === 'medium' || S === 'middle',
          [`${n}-sm`]: S === 'small',
          [g]: !m,
          [$.rail]: $.rail && !m,
        },
        P,
        k,
        $.root,
      ),
      M = d.useMemo(() => (typeof l == 'number' ? l : /^\d+$/.test(l) ? Number(l) : l), [l]),
      q = { marginInlineStart: I ? M : void 0, marginInlineEnd: E ? M : void 0 };
    return d.createElement(
      'div',
      {
        className: j,
        style: { ...i, ...h.root, ...(m ? {} : h.rail), ...H },
        ...A,
        role: 'separator',
      },
      m &&
        !V &&
        d.createElement(
          d.Fragment,
          null,
          d.createElement('div', { className: p(g, `${g}-start`, $.rail), style: h.rail }),
          d.createElement(
            'span',
            { className: p(`${n}-inner-text`, $.content), style: { ...q, ...h.content } },
            m,
          ),
          d.createElement('div', { className: p(g, `${g}-end`, $.rail), style: h.rail }),
        ),
    );
  };
export { lt as D };
