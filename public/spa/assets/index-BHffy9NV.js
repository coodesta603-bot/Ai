import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { R as fe } from './LeftOutlined-Pp_b6_vA.js';
import {
  b8 as Ce,
  b9 as ve,
  bM as re,
  ba as we,
  bb as ye,
  be as Se,
  dl as he,
  cr as xe,
  dm as Pe,
  dn as Ie,
  cK as Ne,
  dp as Re,
  am as Ee,
  dq as ze,
  bm as De,
  d8 as Oe,
  aG as ae,
} from './index-C8UyLGsD.js';
import { D as Me } from './Dropdown-CemyFDx1.js';
import {
  l as Te,
  m as Be,
  n as He,
  p as Ae,
  u as y,
  q as ie,
  r as se,
  i as Le,
  c as H,
  a as Xe,
  h as le,
  o as k,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as _e, b as We, a as qe, c as Ue } from './index-BSuyBMRZ.js';
import { M as Ve, O as Ze } from './index-DeBHMb7c.js';
import { R as je } from './EllipsisOutlined-CBl0XyWx.js';
import { S as Fe } from './index-CqaQ90GQ.js';
const Ge = (e) => (typeof e != 'object' && typeof e != 'function') || e === null,
  Ye = (e) => {
    const { componentCls: t, menuCls: n, colorError: s, colorTextLightSolid: l } = e,
      i = `${n}-item`;
    return {
      [`${t}, ${t}-menu-submenu`]: {
        [`${n} ${i}`]: {
          [`&${i}-danger:not(${i}-disabled)`]: {
            'color': s,
            '&:hover': { color: l, backgroundColor: s },
          },
        },
      },
    };
  },
  Ke = (e) => {
    const {
      componentCls: t,
      menuCls: n,
      zIndexPopup: s,
      dropdownArrowDistance: l,
      sizePopupArrow: i,
      antCls: o,
      iconCls: d,
      motionDurationMid: m,
      paddingBlock: v,
      fontSize: w,
      dropdownEdgeChildPadding: S,
      colorTextDisabled: b,
      fontSizeIcon: f,
      controlPaddingHorizontal: u,
      colorBgElevated: p,
    } = e;
    return [
      {
        [t]: {
          'position': 'absolute',
          'top': -9999,
          'left': { _skip_check_: !0, value: -9999 },
          'zIndex': s,
          'display': 'block',
          '&::before': {
            position: 'absolute',
            insetBlock: e.calc(i).div(2).sub(l).equal(),
            zIndex: -9999,
            opacity: 1e-4,
            content: '""',
          },
          '&-menu-vertical': { maxHeight: '100vh', overflowY: 'auto' },
          [`&-trigger${o}-btn`]: {
            [`& > ${d}-down, & > ${o}-btn-icon > ${d}-down`]: { fontSize: f },
          },
          [`${t}-wrap`]: {
            position: 'relative',
            [`${o}-btn > ${d}-down`]: { fontSize: f },
            [`${d}-down::before`]: { transition: `transform ${m}` },
          },
          [`${t}-wrap-open`]: { [`${d}-down::before`]: { transform: 'rotate(180deg)' } },
          '\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ': {
            display: 'none',
          },
          [`&${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottomLeft,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottomLeft,
          &${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottom,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottom,
          &${o}-slide-down-enter${o}-slide-down-enter-active${t}-placement-bottomRight,
          &${o}-slide-down-appear${o}-slide-down-appear-active${t}-placement-bottomRight`]: {
            animationName: Ae,
          },
          [`&${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-topLeft,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-topLeft,
          &${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-top,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-top,
          &${o}-slide-up-enter${o}-slide-up-enter-active${t}-placement-topRight,
          &${o}-slide-up-appear${o}-slide-up-appear-active${t}-placement-topRight`]: {
            animationName: He,
          },
          [`&${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottomLeft,
          &${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottom,
          &${o}-slide-down-leave${o}-slide-down-leave-active${t}-placement-bottomRight`]: {
            animationName: Be,
          },
          [`&${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-topLeft,
          &${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-top,
          &${o}-slide-up-leave${o}-slide-up-leave-active${t}-placement-topRight`]: {
            animationName: Te,
          },
        },
      },
      _e(e, p, { arrowPlacement: { top: !0, bottom: !0 } }),
      {
        [`${t} ${n}`]: { position: 'relative', margin: 0 },
        [`${n}-submenu-popup`]: {
          'position': 'absolute',
          'zIndex': s,
          'background': 'transparent',
          'boxShadow': 'none',
          'transformOrigin': '0 0',
          'ul, li': { listStyle: 'none', margin: 0 },
        },
        [`${t}, ${t}-menu-submenu`]: {
          ...we(e),
          [n]: {
            'padding': S,
            'listStyleType': 'none',
            'backgroundColor': p,
            'backgroundClip': 'padding-box',
            'borderRadius': e.borderRadiusLG,
            'outline': 'none',
            'boxShadow': e.boxShadowSecondary,
            ...re(e),
            '&:empty': { padding: 0, boxShadow: 'none' },
            [`${n}-item-group-title`]: {
              padding: `${y(v)} ${y(u)}`,
              color: e.colorTextDescription,
              transition: `all ${m}`,
            },
            [`${n}-item`]: { position: 'relative', display: 'flex', alignItems: 'center' },
            [`${n}-item-icon`]: {
              minWidth: w,
              marginInlineEnd: e.marginXS,
              fontSize: e.fontSizeSM,
            },
            [`${n}-title-content`]: {
              'flex': 'auto',
              '&-with-extra': { display: 'inline-flex', alignItems: 'center', width: '100%' },
              '> a': {
                'color': 'inherit',
                'transition': `all ${m}`,
                '&:hover': { color: 'inherit' },
                '&::after': { position: 'absolute', inset: 0, content: '""' },
              },
              [`${n}-item-extra`]: {
                paddingInlineStart: e.padding,
                marginInlineStart: 'auto',
                fontSize: e.fontSizeSM,
                color: e.colorTextDescription,
              },
            },
            [`${n}-item, ${n}-submenu-title`]: {
              'display': 'flex',
              'margin': 0,
              'padding': `${y(v)} ${y(u)}`,
              'color': e.colorText,
              'fontWeight': 'normal',
              'fontSize': w,
              'lineHeight': e.lineHeight,
              'cursor': 'pointer',
              'transition': `all ${m}`,
              'borderRadius': e.borderRadiusSM,
              '&:hover, &-active': { backgroundColor: e.controlItemBgHover },
              ...re(e),
              '&-selected': {
                'color': e.colorPrimary,
                'backgroundColor': e.controlItemBgActive,
                '&:hover, &-active': { backgroundColor: e.controlItemBgActiveHover },
              },
              '&-disabled': {
                'color': b,
                'cursor': 'not-allowed',
                '&:hover': { color: b, backgroundColor: p, cursor: 'not-allowed' },
                'a': { pointerEvents: 'none' },
              },
              '&-divider': {
                height: 1,
                margin: `${y(e.marginXXS)} 0`,
                overflow: 'hidden',
                lineHeight: 0,
                backgroundColor: e.colorSplit,
              },
              [`${t}-menu-submenu-expand-icon`]: {
                position: 'absolute',
                insetInlineEnd: e.paddingXS,
                [`${t}-menu-submenu-arrow-icon`]: {
                  marginInlineEnd: '0 !important',
                  color: e.colorIcon,
                  fontSize: f,
                  fontStyle: 'normal',
                },
              },
            },
            [`${n}-item-group-list`]: {
              margin: `0 ${y(e.marginXS)}`,
              padding: 0,
              listStyle: 'none',
            },
            [`${n}-submenu-title`]: { paddingInlineEnd: e.calc(u).add(e.fontSizeSM).equal() },
            [`${n}-submenu-vertical`]: { position: 'relative' },
            [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
              [`&, ${t}-menu-submenu-arrow-icon`]: {
                color: b,
                backgroundColor: p,
                cursor: 'not-allowed',
              },
            },
            [`${n}-submenu-selected ${t}-menu-submenu-title`]: { color: e.colorPrimary },
          },
        },
      },
      [
        ie(e, 'slide-up'),
        ie(e, 'slide-down'),
        se(e, 'move-up'),
        se(e, 'move-down'),
        Le(e, 'zoom-big'),
      ],
    ];
  },
  Je = (e) => ({
    zIndexPopup: e.zIndexPopupBase + 50,
    paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2,
    ...qe({ contentRadius: e.borderRadiusLG, limitVerticalRadius: !0 }),
    ...We(e),
  }),
  Qe = Ce(
    'Dropdown',
    (e) => {
      const { marginXXS: t, sizePopupArrow: n, paddingXXS: s, componentCls: l } = e,
        i = ve(e, {
          menuCls: `${l}-menu`,
          dropdownArrowDistance: e.calc(n).div(2).add(t).equal(),
          dropdownEdgeChildPadding: s,
        });
      return [Ke(i), Ye(i)];
    },
    Je,
    { resetStyle: !1 },
  ),
  A = (e) => {
    const {
        menu: t,
        arrow: n,
        prefixCls: s,
        children: l,
        trigger: i,
        disabled: o,
        dropdownRender: d,
        popupRender: m,
        getPopupContainer: v,
        overlayClassName: w,
        rootClassName: S,
        overlayStyle: b,
        open: f,
        onOpenChange: u,
        mouseEnterDelay: p = 0.15,
        mouseLeaveDelay: E = 0.1,
        autoAdjustOverflow: z = !0,
        placement: c = '',
        transitionName: h,
        classNames: L,
        styles: X,
        destroyPopupOnHide: _,
        destroyOnHidden: W,
      } = e,
      {
        getPrefixCls: x,
        direction: C,
        getPopupContainer: q,
        className: U,
        style: V,
        classNames: Z,
        styles: j,
      } = ye('dropdown'),
      F = { ...e, mouseEnterDelay: p, mouseLeaveDelay: E, autoAdjustOverflow: z },
      [D, O] = Se([Z, L], [j, X], { props: F }),
      M = { ...V, ...b, ...O.root },
      P = m || d;
    ze();
    const G = r.useMemo(() => {
        const g = x();
        return h !== void 0 ? h : c.includes('top') ? `${g}-slide-down` : `${g}-slide-up`;
      }, [x, c, h]),
      ee = r.useMemo(
        () =>
          c
            ? c.includes('Center')
              ? c.slice(0, c.indexOf('Center'))
              : c
            : C === 'rtl'
              ? 'bottomRight'
              : 'bottomLeft',
        [c, C],
      ),
      a = x('dropdown', s),
      I = Ne(a),
      [Y, T] = Qe(a, I),
      [, N] = he(),
      R = r.Children.only(Ge(l) ? r.createElement('span', null, l) : l),
      K = xe(R, {
        className: H(`${a}-trigger`, { [`${a}-rtl`]: C === 'rtl' }, R.props.className),
        disabled: R.props.disabled ?? o,
      }),
      B = o ? [] : i,
      J = !!B?.includes('contextMenu'),
      [ce, oe] = Xe(!1, f),
      pe = le((g) => {
        (u?.(g, { source: 'trigger' }), oe(g));
      }),
      me = H(w, S, Y, T, I, U, D.root, { [`${a}-rtl`]: C === 'rtl' }),
      ue = Ue({
        arrowPointAtCenter: typeof n == 'object' && n.pointAtCenter,
        autoAdjustOverflow: z,
        offset: N.marginXXS,
        arrowWidth: n ? N.sizePopupArrow : 0,
        borderRadius: N.borderRadius,
      }),
      ge = le(() => {
        (t?.selectable && t?.multiple) || (u?.(!1, { source: 'menu' }), oe(!1));
      }),
      $e = () => {
        const g = k(D, ['root']),
          ne = k(O, ['root']);
        let $;
        return (
          t?.items &&
            ($ = r.createElement(Ve, {
              ...t,
              classNames: { ...g, subMenu: { ...g } },
              styles: { ...ne, subMenu: { ...ne } },
            })),
          P && ($ = P($)),
          ($ = r.Children.only(typeof $ == 'string' ? r.createElement('span', null, $) : $)),
          r.createElement(
            Ze,
            {
              prefixCls: `${a}-menu`,
              rootClassName: H(T, I),
              expandIcon: r.createElement(
                'span',
                { className: `${a}-menu-submenu-arrow` },
                C === 'rtl'
                  ? r.createElement(fe, { className: `${a}-menu-submenu-arrow-icon` })
                  : r.createElement(Re, { className: `${a}-menu-submenu-arrow-icon` }),
              ),
              mode: 'vertical',
              selectable: !1,
              onClick: ge,
              validator: ({ mode: to }) => {},
            },
            $,
          )
        );
      },
      [te, be] = Pe('Dropdown', M.zIndex);
    let Q = r.createElement(
      Me,
      {
        alignPoint: J,
        ...k(e, ['rootClassName', 'onOpenChange']),
        mouseEnterDelay: p,
        mouseLeaveDelay: E,
        visible: ce,
        builtinPlacements: ue,
        arrow: !!n,
        overlayClassName: me,
        prefixCls: a,
        getPopupContainer: v || q,
        transitionName: G,
        trigger: B,
        overlay: $e,
        placement: ee,
        onVisibleChange: pe,
        overlayStyle: { ...M, zIndex: te },
        autoDestroy: W ?? _,
      },
      K,
    );
    return (te && (Q = r.createElement(Ie.Provider, { value: be }, Q)), Q);
  },
  ke = Ee(A, 'align', void 0, 'dropdown', (e) => e),
  eo = (e) => r.createElement(ke, { ...e }, r.createElement('span', null));
A._InternalPanelDoNotUseOrYouWillBeFired = eo;
const de = (e) => {
  const { getPopupContainer: t, getPrefixCls: n, direction: s } = r.useContext(De),
    {
      prefixCls: l,
      type: i = 'default',
      danger: o,
      disabled: d,
      loading: m,
      onClick: v,
      htmlType: w,
      children: S,
      className: b,
      menu: f,
      arrow: u,
      autoFocus: p,
      trigger: E,
      align: z,
      open: c,
      onOpenChange: h,
      placement: L,
      getPopupContainer: X,
      href: _,
      icon: W = r.createElement(je, null),
      title: x,
      buttonsRender: C = (J) => J,
      mouseEnterDelay: q,
      mouseLeaveDelay: U,
      overlayClassName: V,
      overlayStyle: Z,
      destroyOnHidden: j,
      destroyPopupOnHide: F,
      dropdownRender: D,
      popupRender: O,
      ...M
    } = e,
    P = n('dropdown', l),
    G = `${P}-button`,
    a = {
      menu: f,
      arrow: u,
      autoFocus: p,
      align: z,
      disabled: d,
      trigger: d ? [] : E,
      onOpenChange: h,
      getPopupContainer: X || t,
      mouseEnterDelay: q,
      mouseLeaveDelay: U,
      classNames: { root: V },
      styles: { root: Z },
      destroyOnHidden: j,
      popupRender: O || D,
    },
    { compactSize: I, compactItemClassnames: Y } = Oe(P, s),
    T = H(G, Y, b);
  ('destroyPopupOnHide' in e && (a.destroyPopupOnHide = F),
    'open' in e && (a.open = c),
    'placement' in e
      ? (a.placement = L)
      : (a.placement = s === 'rtl' ? 'bottomLeft' : 'bottomRight'));
  const N = r.createElement(
      ae,
      { type: i, danger: o, disabled: d, loading: m, onClick: v, htmlType: w, href: _, title: x },
      S,
    ),
    R = r.createElement(ae, { type: i, danger: o, icon: W }),
    [K, B] = C([N, R]);
  return r.createElement(
    Fe.Compact,
    { className: T, size: I, block: !0, ...M },
    K,
    r.createElement(A, { ...a }, B),
  );
};
de.__ANT_BUTTON = !0;
const oo = A;
oo.Button = de;
export { oo as D, A as a };
