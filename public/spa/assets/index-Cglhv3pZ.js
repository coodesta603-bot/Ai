import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c, u as t, t as Se, o as ue } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bm as Ce,
  b8 as xe,
  b9 as fe,
  ba as ve,
  cl as V,
  bW as D,
  bb as X,
  al as ze,
  bc as Ne,
  be as j,
  aJ as Ee,
} from './index-C8UyLGsD.js';
import { T as Pe } from './index-CXy3GcSN.js';
const J = ({ prefixCls: e, className: a, hoverable: r = !0, ...s }) => {
    const { getPrefixCls: i } = o.useContext(Ce),
      n = i('card', e),
      l = c(`${n}-grid`, a, { [`${n}-grid-hoverable`]: r });
    return o.createElement('div', { ...s, className: l });
  },
  Te = (e) => {
    const {
      antCls: a,
      componentCls: r,
      headerHeight: s,
      headerPadding: i,
      tabsMarginBottom: n,
    } = e;
    return {
      'display': 'flex',
      'justifyContent': 'center',
      'flexDirection': 'column',
      'minHeight': s,
      'marginBottom': -1,
      'padding': `0 ${t(i)}`,
      'color': e.colorTextHeading,
      'fontWeight': e.fontWeightStrong,
      'fontSize': e.headerFontSize,
      'background': e.headerBg,
      'borderBottom': `${t(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
      'borderRadius': `${t(e.borderRadiusLG)} ${t(e.borderRadiusLG)} 0 0`,
      ...D(),
      '&-wrapper': { width: '100%', display: 'flex', alignItems: 'center' },
      '&-title': {
        display: 'inline-block',
        flex: 1,
        ...V,
        [`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]: { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
      },
      [`${a}-tabs-top`]: {
        'clear': 'both',
        'marginBottom': n,
        'color': e.colorText,
        'fontWeight': 'normal',
        'fontSize': e.fontSize,
        '&-bar': { borderBottom: `${t(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}` },
      },
    };
  },
  Re = (e) => {
    const { cardPaddingBase: a, colorBorderSecondary: r, cardShadow: s, lineWidth: i } = e;
    return {
      'width': '33.33%',
      'padding': a,
      'border': 0,
      'borderRadius': 0,
      'boxShadow': `
      ${t(i)} 0 0 0 ${r},
      0 ${t(i)} 0 0 ${r},
      ${t(i)} ${t(i)} 0 0 ${r},
      ${t(i)} 0 0 0 ${r} inset,
      0 ${t(i)} 0 0 ${r} inset;
    `,
      'transition': `all ${e.motionDurationMid}`,
      '&-hoverable:hover': { position: 'relative', zIndex: 1, boxShadow: s },
    };
  },
  Be = (e) => {
    const {
      componentCls: a,
      iconCls: r,
      actionsLiMargin: s,
      cardActionsIconSize: i,
      colorBorderSecondary: n,
      actionsBg: l,
    } = e;
    return {
      'margin': 0,
      'padding': 0,
      'listStyle': 'none',
      'background': l,
      'borderTop': `${t(e.lineWidth)} ${e.lineType} ${n}`,
      'display': 'flex',
      'borderRadius': `0 0 ${t(e.borderRadiusLG)} ${t(e.borderRadiusLG)}`,
      ...D(),
      '& > li': {
        'margin': s,
        'color': e.colorTextDescription,
        'textAlign': 'center',
        '> span': {
          'position': 'relative',
          'display': 'block',
          'minWidth': e.calc(e.cardActionsIconSize).mul(2).equal(),
          'fontSize': e.fontSize,
          'lineHeight': e.lineHeight,
          'cursor': 'pointer',
          '&:hover': { color: e.colorPrimary, transition: `color ${e.motionDurationMid}` },
          [`a:not(${a}-btn), > ${r}`]: {
            'display': 'inline-block',
            'width': '100%',
            'color': e.colorIcon,
            'lineHeight': t(e.fontHeight),
            'transition': `color ${e.motionDurationMid}`,
            '&:hover': { color: e.colorPrimary },
          },
          [`> ${r}`]: { fontSize: i, lineHeight: t(e.calc(i).mul(e.lineHeight).equal()) },
        },
        '&:not(:last-child)': { borderInlineEnd: `${t(e.lineWidth)} ${e.lineType} ${n}` },
      },
    };
  },
  Me = (e) => ({
    'margin': `${t(e.calc(e.marginXXS).mul(-1).equal())} 0`,
    'display': 'flex',
    ...D(),
    '&-avatar': { paddingInlineEnd: e.padding },
    '&-section': {
      'overflow': 'hidden',
      'flex': 1,
      '> div:not(:last-child)': { marginBottom: e.marginXS },
    },
    '&-title': {
      color: e.colorTextHeading,
      fontWeight: e.fontWeightStrong,
      fontSize: e.fontSizeLG,
      ...V,
    },
    '&-description': { color: e.colorTextDescription },
  }),
  Ge = (e) => {
    const { componentCls: a, colorFillAlter: r, headerPadding: s, bodyPadding: i } = e;
    return {
      [`${a}-head`]: {
        'padding': `0 ${t(s)}`,
        'background': r,
        '&-title': { fontSize: e.fontSize },
      },
      [`${a}-body`]: { padding: `${t(e.padding)} ${t(i)}` },
    };
  },
  Le = (e) => {
    const { componentCls: a } = e;
    return { overflow: 'hidden', [`${a}-body`]: { userSelect: 'none' } };
  },
  we = (e) => {
    const {
      componentCls: a,
      cardShadow: r,
      cardHeadPadding: s,
      colorBorderSecondary: i,
      boxShadowTertiary: n,
      bodyPadding: l,
      extraColor: u,
      motionDurationMid: C,
    } = e;
    return {
      [a]: {
        ...ve(e),
        position: 'relative',
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${a}-bordered)`]: { boxShadow: n },
        [`${a}-head`]: Te(e),
        [`${a}-extra`]: {
          marginInlineStart: 'auto',
          color: u,
          fontWeight: 'normal',
          fontSize: e.fontSize,
        },
        [`${a}-body`]: {
          'padding': l,
          'borderRadius': `0 0 ${t(e.borderRadiusLG)} ${t(e.borderRadiusLG)}`,
          '&:first-child': {
            borderStartStartRadius: e.borderRadiusLG,
            borderStartEndRadius: e.borderRadiusLG,
          },
          '&:not(:last-child)': { borderEndStartRadius: 0, borderEndEndRadius: 0 },
        },
        [`${a}-grid`]: Re(e),
        [`${a}-cover`]: {
          '> *': {
            display: 'block',
            width: '100%',
            borderRadius: `${t(e.borderRadiusLG)} ${t(e.borderRadiusLG)} 0 0`,
          },
        },
        [`${a}-actions`]: Be(e),
        [`${a}-meta`]: Me(e),
      },
      [`${a}-bordered`]: {
        border: `${t(e.lineWidth)} ${e.lineType} ${i}`,
        [`${a}-cover`]: { marginTop: -1, marginInlineStart: -1, marginInlineEnd: -1 },
      },
      [`${a}-hoverable`]: {
        'cursor': 'pointer',
        'transition': ['box-shadow', 'border-color'].map((h) => `${h} ${C}`).join(', '),
        '&:hover': { borderColor: 'transparent', boxShadow: r },
      },
      [`${a}-contain-grid`]: {
        borderRadius: `${t(e.borderRadiusLG)} ${t(e.borderRadiusLG)} 0 0 `,
        [`&:not(:has(> ${a}-head))`]: { borderRadius: 0 },
        [`${a}-body`]: { display: 'flex', flexWrap: 'wrap' },
        [`&:not(${a}-loading) ${a}-body`]: {
          marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
          marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
          padding: 0,
        },
      },
      [`${a}-contain-tabs`]: {
        [`> div${a}-head`]: { minHeight: 0, [`${a}-head-title, ${a}-extra`]: { paddingTop: s } },
      },
      [`${a}-type-inner`]: Ge(e),
      [`${a}-loading`]: Le(e),
      [`${a}-rtl`]: { direction: 'rtl' },
    };
  },
  He = (e) => {
    const {
      componentCls: a,
      bodyPaddingSM: r,
      headerPaddingSM: s,
      headerHeightSM: i,
      headerFontSizeSM: n,
    } = e;
    return {
      [`${a}-small`]: {
        [`> ${a}-head`]: {
          minHeight: i,
          padding: `0 ${t(s)}`,
          fontSize: n,
          [`> ${a}-head-wrapper`]: { [`> ${a}-extra`]: { fontSize: e.fontSize } },
        },
        [`> ${a}-body`]: { padding: r },
      },
      [`${a}-small${a}-contain-tabs`]: {
        [`> ${a}-head`]: {
          [`${a}-head-title, ${a}-extra`]: { paddingTop: 0, display: 'flex', alignItems: 'center' },
        },
      },
    };
  },
  We = (e) => ({
    headerBg: 'transparent',
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText,
    bodyPaddingSM: 12,
    headerPaddingSM: 12,
    bodyPadding: e.bodyPadding ?? e.paddingLG,
    headerPadding: e.headerPadding ?? e.paddingLG,
  }),
  Ie = xe(
    'Card',
    (e) => {
      const a = fe(e, {
        cardShadow: e.boxShadowCard,
        cardHeadPadding: e.padding,
        cardPaddingBase: e.paddingLG,
        cardActionsIconSize: e.fontSize,
      });
      return [we(a), He(a)];
    },
    We,
  ),
  De = (e) => {
    const { actionClasses: a, actions: r = [], actionStyle: s } = e;
    return o.createElement(
      'ul',
      { className: a, style: s },
      r.map((i, n) => {
        const l = `action-${n}`;
        return o.createElement(
          'li',
          { style: { width: `${100 / r.length}%` }, key: l },
          o.createElement('span', null, i),
        );
      }),
    );
  },
  Ae = o.forwardRef((e, a) => {
    const {
        prefixCls: r,
        className: s,
        rootClassName: i,
        style: n,
        extra: l,
        headStyle: u = {},
        bodyStyle: C = {},
        title: h,
        loading: x,
        bordered: P,
        variant: T,
        size: R,
        type: f,
        cover: B,
        actions: $,
        tabList: g,
        children: m,
        activeTabKey: v,
        defaultActiveTabKey: M,
        tabBarExtraContent: G,
        hoverable: L,
        tabProps: w = {},
        classNames: H,
        styles: W,
        ...z
      } = e,
      {
        getPrefixCls: N,
        direction: I,
        className: Q,
        style: U,
        classNames: Y,
        styles: Z,
      } = X('card'),
      [A] = ze('card', T, P),
      E = Ne(R),
      _ = { ...e, size: E, variant: A },
      [p, b] = j([Y, H], [Z, W], { props: _ }),
      k = (y) => {
        e.onTabChange?.(y);
      },
      ee = o.useMemo(() => Se(m).some((S) => o.isValidElement(S) && S.type === J), [m]),
      d = N('card', r),
      [ae, te] = Ie(d),
      re = o.createElement(Ee, { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 }, m),
      F = v !== void 0,
      ie = { ...w, [F ? 'activeKey' : 'defaultActiveKey']: F ? v : M, tabBarExtraContent: G };
    let q;
    const oe = E !== 'small' ? 'large' : E,
      K = g
        ? o.createElement(Pe, {
            size: oe,
            ...ie,
            className: `${d}-head-tabs`,
            onChange: k,
            items: g.map(({ tab: y, ...S }) => ({ label: y, ...S })),
          })
        : null;
    if (h || l || K) {
      const y = c(`${d}-head`, p.header),
        S = c(`${d}-head-title`, p.title),
        be = c(`${d}-extra`, p.extra),
        ye = { ...u, ...b.header };
      q = o.createElement(
        'div',
        { className: y, style: ye },
        o.createElement(
          'div',
          { className: `${d}-head-wrapper` },
          h && o.createElement('div', { className: S, style: b.title }, h),
          l && o.createElement('div', { className: be, style: b.extra }, l),
        ),
        K,
      );
    }
    const se = c(`${d}-cover`, p.cover),
      ne = B ? o.createElement('div', { className: se, style: b.cover }, B) : null,
      de = c(`${d}-body`, p.body),
      le = { ...C, ...b.body },
      ce = o.createElement('div', { className: de, style: le }, x ? re : m),
      me = c(`${d}-actions`, p.actions),
      ge = $?.length
        ? o.createElement(De, { actionClasses: me, actionStyle: b.actions, actions: $ })
        : null,
      $e = ue(z, ['onTabChange']),
      he = c(
        d,
        Q,
        {
          [`${d}-loading`]: x,
          [`${d}-bordered`]: A !== 'borderless',
          [`${d}-hoverable`]: L,
          [`${d}-contain-grid`]: ee,
          [`${d}-contain-tabs`]: g?.length,
          [`${d}-small`]: E === 'small',
          [`${d}-type-${f}`]: !!f,
          [`${d}-rtl`]: I === 'rtl',
        },
        s,
        i,
        ae,
        te,
        p.root,
      ),
      pe = { ...b.root, ...U, ...n };
    return o.createElement('div', { ref: a, ...$e, className: he, style: pe }, q, ne, ce, ge);
  }),
  Fe = (e) => {
    const {
        prefixCls: a,
        className: r,
        avatar: s,
        title: i,
        description: n,
        style: l,
        classNames: u,
        styles: C,
        ...h
      } = e,
      { getPrefixCls: x, className: P, style: T, classNames: R, styles: f } = X('cardMeta'),
      $ = `${x('card', a)}-meta`,
      [g, m] = j([R, u], [f, C], { props: e }),
      v = c($, r, P, g.root),
      M = { ...T, ...m.root, ...l },
      G = c(`${$}-avatar`, g.avatar),
      L = c(`${$}-title`, g.title),
      w = c(`${$}-description`, g.description),
      H = c(`${$}-section`, g.section),
      W = s ? o.createElement('div', { className: G, style: m.avatar }, s) : null,
      z = i ? o.createElement('div', { className: L, style: m.title }, i) : null,
      N = n ? o.createElement('div', { className: w, style: m.description }, n) : null,
      I = z || N ? o.createElement('div', { className: H, style: m.section }, z, N) : null;
    return o.createElement('div', { ...h, className: v, style: M }, W, I);
  },
  O = Ae;
O.Grid = J;
O.Meta = Fe;
export { O as C };
