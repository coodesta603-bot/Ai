import {
  bm as O,
  cr as ue,
  b8 as he,
  b9 as Se,
  ba as xe,
  bb as Ce,
  bc as ye,
  cs as be,
  ct as Q,
  cu as j,
  cv as Ee,
  cw as ve,
} from './index-C8UyLGsD.js';
import { R as p, r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as E, t as ze, u as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { C as Pe, R as Ne } from './row-cnvQQvQf.js';
import { P as Be } from './Pagination-Cg0T9GpR.js';
import { S as Le } from './index-Bc7JilPY.js';
const q = p.createContext({});
q.Consumer;
const Ie = ({ prefixCls: t, className: e, avatar: i, title: c, description: o, ...d }) => {
    const { getPrefixCls: f } = n.useContext(O),
      m = f('list', t),
      x = E(`${m}-item-meta`, e),
      $ = p.createElement(
        'div',
        { className: `${m}-item-meta-content` },
        c && p.createElement('h4', { className: `${m}-item-meta-title` }, c),
        o && p.createElement('div', { className: `${m}-item-meta-description` }, o),
      );
    return p.createElement(
      'div',
      { ...d, className: x },
      i && p.createElement('div', { className: `${m}-item-meta-avatar` }, i),
      (c || o) && $,
    );
  },
  Me = p.forwardRef((t, e) => {
    const {
        prefixCls: i,
        children: c,
        actions: o,
        extra: d,
        styles: f,
        className: m,
        classNames: x,
        colStyle: $,
        ...B
      } = t,
      { grid: v, itemLayout: s } = n.useContext(q),
      { getPrefixCls: z, list: C } = n.useContext(O),
      y = (g) => E(C?.item?.classNames?.[g], x?.[g]),
      P = (g) => ({ ...C?.item?.styles?.[g], ...f?.[g] }),
      w = () => {
        const g = ze(c);
        return g.some((A) => typeof A == 'string') && g.length > 1;
      },
      N = () => (s === 'vertical' ? !!d : !w()),
      u = z('list', i),
      M =
        o &&
        o.length > 0 &&
        p.createElement(
          'ul',
          { className: E(`${u}-item-action`, y('actions')), key: 'actions', style: P('actions') },
          o.map((g, I) =>
            p.createElement(
              'li',
              { key: `${u}-item-action-${I}` },
              g,
              I !== o.length - 1 && p.createElement('em', { className: `${u}-item-action-split` }),
            ),
          ),
        ),
      H = v ? 'div' : 'li',
      L = p.createElement(
        H,
        {
          ...B,
          ...(v ? {} : { ref: e }),
          className: E(`${u}-item`, { [`${u}-item-no-flex`]: !N() }, m),
        },
        s === 'vertical' && d
          ? [
              p.createElement('div', { className: `${u}-item-main`, key: 'content' }, c, M),
              p.createElement(
                'div',
                { className: E(`${u}-item-extra`, y('extra')), key: 'extra', style: P('extra') },
                d,
              ),
            ]
          : [c, M, ue(d, { key: 'extra' })],
      );
    return v ? p.createElement(Pe, { ref: e, flex: 1, style: $ }, L) : L;
  }),
  U = Me;
U.Meta = Ie;
const we = (t) => {
    const {
        listBorderedCls: e,
        componentCls: i,
        paddingLG: c,
        margin: o,
        itemPaddingSM: d,
        itemPaddingLG: f,
        marginLG: m,
        borderRadiusLG: x,
      } = t,
      $ = r(t.calc(x).sub(t.lineWidth).equal());
    return {
      [e]: {
        border: `${r(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
        borderRadius: x,
        [`${i}-header`]: { borderRadius: `${$} ${$} 0 0` },
        [`${i}-footer`]: { borderRadius: `0 0 ${$} ${$}` },
        [`${i}-header,${i}-footer,${i}-item`]: { paddingInline: c },
        [`${i}-pagination`]: { margin: `${r(o)} ${r(m)}` },
      },
      [`${e}${i}-sm`]: { [`${i}-item,${i}-header,${i}-footer`]: { padding: d } },
      [`${e}${i}-lg`]: { [`${i}-item,${i}-header,${i}-footer`]: { padding: f } },
    };
  },
  He = (t) => {
    const { componentCls: e, screenSM: i, screenMD: c, marginLG: o, marginSM: d, margin: f } = t;
    return {
      [`@media screen and (max-width:${c}px)`]: {
        [e]: { [`${e}-item`]: { [`${e}-item-action`]: { marginInlineStart: o } } },
        [`${e}-vertical`]: { [`${e}-item`]: { [`${e}-item-extra`]: { marginInlineStart: o } } },
      },
      [`@media screen and (max-width: ${i}px)`]: {
        [e]: { [`${e}-item`]: { flexWrap: 'wrap', [`${e}-action`]: { marginInlineStart: d } } },
        [`${e}-vertical`]: {
          [`${e}-item`]: {
            flexWrap: 'wrap-reverse',
            [`${e}-item-main`]: { minWidth: t.contentWidth },
            [`${e}-item-extra`]: { margin: `auto auto ${r(f)}` },
          },
        },
      },
    };
  },
  Re = (t) => {
    const {
      componentCls: e,
      antCls: i,
      controlHeight: c,
      minHeight: o,
      paddingSM: d,
      marginLG: f,
      padding: m,
      itemPadding: x,
      colorPrimary: $,
      itemPaddingSM: B,
      itemPaddingLG: v,
      paddingXS: s,
      margin: z,
      colorText: C,
      colorTextDescription: y,
      motionDurationSlow: P,
      lineWidth: w,
      headerBg: N,
      footerBg: u,
      emptyTextPadding: M,
      metaMarginBottom: H,
      avatarMarginRight: L,
      titleMarginBottom: g,
      descriptionFontSize: I,
    } = t;
    return {
      [e]: {
        ...xe(t),
        'position': 'relative',
        '--rc-virtual-list-scrollbar-bg': t.colorSplit,
        '*': { outline: 'none' },
        [`${e}-header`]: { background: N },
        [`${e}-footer`]: { background: u },
        [`${e}-header, ${e}-footer`]: { paddingBlock: d },
        [`${e}-pagination`]: {
          marginBlockStart: f,
          [`${i}-pagination-options`]: { textAlign: 'start' },
        },
        [`${e}-spin`]: { minHeight: o, textAlign: 'center' },
        [`${e}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
        [`${e}-item`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: x,
          color: C,
          [`${e}-item-meta`]: {
            display: 'flex',
            flex: 1,
            alignItems: 'flex-start',
            maxWidth: '100%',
            [`${e}-item-meta-avatar`]: { marginInlineEnd: L },
            [`${e}-item-meta-content`]: { flex: '1 0', width: 0, color: C },
            [`${e}-item-meta-title`]: {
              'margin': `0 0 ${r(t.marginXXS)} 0`,
              'color': C,
              'fontSize': t.fontSize,
              'lineHeight': t.lineHeight,
              '> a': { 'color': C, 'transition': `all ${P}`, '&:hover': { color: $ } },
            },
            [`${e}-item-meta-description`]: { color: y, fontSize: I, lineHeight: t.lineHeight },
          },
          [`${e}-item-action`]: {
            'flex': '0 0 auto',
            'marginInlineStart': t.marginXXL,
            'padding': 0,
            'fontSize': 0,
            'listStyle': 'none',
            '& > li': {
              'position': 'relative',
              'display': 'inline-block',
              'padding': `0 ${r(s)}`,
              'color': y,
              'fontSize': t.fontSize,
              'lineHeight': t.lineHeight,
              'textAlign': 'center',
              '&:first-child': { paddingInlineStart: 0 },
            },
            [`${e}-item-action-split`]: {
              position: 'absolute',
              insetBlockStart: '50%',
              insetInlineEnd: 0,
              width: w,
              height: t.calc(t.fontHeight).sub(t.calc(t.marginXXS).mul(2)).equal(),
              transform: 'translateY(-50%)',
              backgroundColor: t.colorSplit,
            },
          },
        },
        [`${e}-empty`]: {
          padding: `${r(m)} 0`,
          color: y,
          fontSize: t.fontSizeSM,
          textAlign: 'center',
        },
        [`${e}-empty-text`]: {
          padding: M,
          color: t.colorTextDisabled,
          fontSize: t.fontSize,
          textAlign: 'center',
        },
        [`${e}-item-no-flex`]: { display: 'block' },
      },
      [`${e}-grid ${i}-col > ${e}-item`]: {
        display: 'block',
        maxWidth: '100%',
        marginBlockEnd: z,
        paddingBlock: 0,
        borderBlockEnd: 'none',
      },
      [`${e}-vertical ${e}-item`]: {
        alignItems: 'initial',
        [`${e}-item-main`]: { display: 'block', flex: 1 },
        [`${e}-item-extra`]: { marginInlineStart: f },
        [`${e}-item-meta`]: {
          marginBlockEnd: H,
          [`${e}-item-meta-title`]: {
            marginBlockStart: 0,
            marginBlockEnd: g,
            color: C,
            fontSize: t.fontSizeLG,
            lineHeight: t.lineHeightLG,
          },
        },
        [`${e}-item-action`]: {
          'marginBlockStart': m,
          'marginInlineStart': 'auto',
          '> li': { 'padding': `0 ${r(m)}`, '&:first-child': { paddingInlineStart: 0 } },
        },
      },
      [`${e}-split ${e}-item`]: {
        'borderBlockEnd': `${r(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,
        '&:last-child': { borderBlockEnd: 'none' },
      },
      [`${e}-split ${e}-header`]: {
        borderBlockEnd: `${r(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,
      },
      [`${e}-split${e}-empty ${e}-footer`]: {
        borderTop: `${r(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,
      },
      [`${e}-loading ${e}-spin-nested-loading`]: { minHeight: c },
      [`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:
        { borderBlockEnd: `${r(t.lineWidth)} ${t.lineType} ${t.colorSplit}` },
      [`${e}-lg ${e}-item`]: { padding: v },
      [`${e}-sm ${e}-item`]: { padding: B },
      [`${e}:not(${e}-vertical)`]: {
        [`${e}-item-no-flex`]: { [`${e}-item-action`]: { float: 'right' } },
      },
    };
  },
  Te = (t) => ({
    contentWidth: 220,
    itemPadding: `${r(t.paddingContentVertical)} 0`,
    itemPaddingSM: `${r(t.paddingContentVerticalSM)} ${r(t.paddingContentHorizontal)}`,
    itemPaddingLG: `${r(t.paddingContentVerticalLG)} ${r(t.paddingContentHorizontalLG)}`,
    headerBg: 'transparent',
    footerBg: 'transparent',
    emptyTextPadding: t.padding,
    metaMarginBottom: t.padding,
    avatarMarginRight: t.padding,
    titleMarginBottom: t.paddingSM,
    descriptionFontSize: t.fontSize,
  }),
  We = he(
    'List',
    (t) => {
      const e = Se(t, {
        listBorderedCls: `${t.componentCls}-bordered`,
        minHeight: t.controlHeightLG,
      });
      return [Re(e), we(e), He(e)];
    },
    Te,
    { extraCssVarPrefixCls: ({ prefixCls: t }) => [`${t}-container`] },
  ),
  Ge = (t, e) => {
    const {
        pagination: i = !1,
        prefixCls: c,
        bordered: o = !1,
        split: d = !0,
        className: f,
        rootClassName: m,
        style: x,
        children: $,
        itemLayout: B,
        loadMore: v,
        grid: s,
        dataSource: z = [],
        size: C,
        header: y,
        footer: P,
        loading: w = !1,
        rowKey: N,
        renderItem: u,
        locale: M,
        ...H
      } = t,
      L = i && typeof i == 'object' ? i : {},
      [g, I] = n.useState(L.defaultCurrent || 1),
      [A, Z] = n.useState(L.defaultPageSize || 10),
      { getPrefixCls: k, direction: ee, className: te, style: ie } = Ce('list'),
      { renderEmpty: ne } = n.useContext(O),
      ae = { current: 1, total: 0, position: 'bottom' },
      J = (a) => (S, b) => {
        (I(S), Z(b), i && i?.[a]?.(S, b));
      },
      re = J('onChange'),
      oe = J('onShowSizeChange'),
      se = (a, S) => {
        if (!u) return null;
        let b;
        return (
          typeof N == 'function' ? (b = N(a)) : N ? (b = a[N]) : (b = a.key),
          b || (b = `list-item-${S}`),
          n.createElement(n.Fragment, { key: b }, u(a, S))
        );
      },
      le = !!(v || i || P),
      l = k('list', c),
      [ce, X] = We(l);
    let R = w;
    typeof R == 'boolean' && (R = { spinning: R });
    const D = !!R?.spinning,
      me = ye(C);
    let T = '';
    switch (me) {
      case 'large':
        T = 'lg';
        break;
      case 'small':
        T = 'sm';
        break;
    }
    const de = E(
        l,
        {
          [`${l}-vertical`]: B === 'vertical',
          [`${l}-${T}`]: T,
          [`${l}-split`]: d,
          [`${l}-bordered`]: o,
          [`${l}-loading`]: D,
          [`${l}-grid`]: !!s,
          [`${l}-something-after-last-item`]: le,
          [`${l}-rtl`]: ee === 'rtl',
        },
        te,
        f,
        m,
        ce,
        X,
      ),
      K = `${l}-container`,
      h = be(ae, { total: z.length, current: g, pageSize: A }, i || {}),
      ge = Math.ceil(h.total / h.pageSize);
    h.current = Math.min(h.current, ge);
    const Y =
      i &&
      n.createElement(
        'div',
        { className: E(`${l}-pagination`) },
        n.createElement(Be, { align: 'end', ...h, onChange: re, onShowSizeChange: oe }),
      );
    let V = Q(z);
    i &&
      z.length > (h.current - 1) * h.pageSize &&
      (V = Q(z).splice((h.current - 1) * h.pageSize, h.pageSize));
    const pe = Object.keys(s || {}).some((a) => j.includes(a)),
      _ = Ee(pe),
      W = n.useMemo(() => {
        for (let a = 0; a < j.length; a += 1) {
          const S = j[a];
          if (_[S]) return S;
        }
      }, [_]),
      $e = n.useMemo(() => {
        if (!s) return;
        const a = W && s[W] ? s[W] : s.column;
        if (a) return { width: `${100 / a}%`, maxWidth: `${100 / a}%` };
      }, [JSON.stringify(s), W]);
    let F = D && n.createElement('div', { style: { minHeight: 53 } });
    if (V.length > 0) {
      const a = V.map(se);
      F = s
        ? n.createElement(
            Ne,
            { className: E(K, X), gutter: s.gutter },
            n.Children.map(a, (S) => n.createElement('div', { key: S?.key, style: $e }, S)),
          )
        : n.createElement('ul', { className: E(`${l}-items`, K, X) }, a);
    } else
      !$ &&
        !D &&
        (F = n.createElement(
          'div',
          { className: `${l}-empty-text` },
          M?.emptyText || ne?.('List') || n.createElement(ve, { componentName: 'List' }),
        ));
    const G = h.position,
      fe = n.useMemo(() => ({ grid: s, itemLayout: B }), [JSON.stringify(s), B]);
    return n.createElement(
      q.Provider,
      { value: fe },
      n.createElement(
        'div',
        { ref: e, style: { ...ie, ...x }, className: de, ...H },
        (G === 'top' || G === 'both') && Y,
        y && n.createElement('div', { className: `${l}-header` }, y),
        n.createElement(Le, { ...R }, F, $),
        P && n.createElement('div', { className: `${l}-footer` }, P),
        v || ((G === 'bottom' || G === 'both') && Y),
      ),
    );
  },
  Ae = n.forwardRef(Ge),
  Xe = Ae;
Xe.Item = U;
export { Xe as L };
