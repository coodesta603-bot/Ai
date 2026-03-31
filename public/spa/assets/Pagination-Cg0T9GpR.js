import { r as s, R as r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  bh as Ge,
  bL as L,
  cV as rt,
  b8 as ot,
  b9 as lt,
  co as ye,
  ba as st,
  cm as Ae,
  bM as ct,
  eR as ut,
  cv as mt,
  dl as dt,
  bb as pt,
  bc as gt,
  be as bt,
  bS as ht,
  dp as He,
  aD as ft,
} from './index-C8UyLGsD.js';
import { R as Le } from './LeftOutlined-Pp_b6_vA.js';
import { c as z, a as _e, u as f } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { l as Ct } from '../i18n/i18n-zh-CN-BU7DHEsw.js';
import { a as $t } from '../i18n/i18n-en-US-DgOT8d-N.js';
import { i as vt, a as St, g as yt, c as xt, d as Nt, e as Pt, f as zt } from './index-RoMbEimC.js';
var Et = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
        },
      },
    ],
  },
  name: 'double-left',
  theme: 'outlined',
};
function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
const It = (e, t) => s.createElement(Ge, Te({}, e, { ref: t, icon: Et })),
  Ke = s.forwardRef(It);
var Bt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
        },
      },
    ],
  },
  name: 'double-right',
  theme: 'outlined',
};
function De() {
  return (
    (De = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    De.apply(this, arguments)
  );
}
const wt = (e, t) => s.createElement(Ge, De({}, e, { ref: t, icon: Bt })),
  We = s.forwardRef(wt),
  jt = [10, 20, 50, 100],
  Tt = (e) => {
    const {
        pageSizeOptions: t = jt,
        locale: a,
        changeSize: i,
        pageSize: b,
        goButton: S,
        quickGo: E,
        rootPrefixCls: I,
        disabled: u,
        buildOptionText: j,
        showSizeChanger: N,
        sizeChangerRender: T,
      } = e,
      [C, P] = r.useState(''),
      D = r.useMemo(() => (!C || Number.isNaN(C) ? void 0 : Number(C)), [C]),
      B = typeof j == 'function' ? j : (c) => `${c} ${a.items_per_page}`,
      O = (c) => {
        const R = c.target.value;
        /^\d*$/.test(R) && P(R);
      },
      y = (c) => {
        S ||
          C === '' ||
          (P(''),
          !(
            c.relatedTarget &&
            (c.relatedTarget.className.includes(`${I}-item-link`) ||
              c.relatedTarget.className.includes(`${I}-item`))
          ) && E?.(D));
      },
      w = (c) => {
        C !== '' && (c.keyCode === L.ENTER || c.type === 'click') && (P(''), E?.(D));
      },
      p = () =>
        t.some((c) => c.toString() === b.toString())
          ? t
          : t.concat([b]).sort((c, R) => {
              const m = Number.isNaN(Number(c)) ? 0 : Number(c),
                te = Number.isNaN(Number(R)) ? 0 : Number(R);
              return m - te;
            }),
      _ = `${I}-options`;
    if (!N && !E) return null;
    let Y = null,
      M = null,
      x = null;
    return (
      N &&
        T &&
        (Y = T({
          'disabled': u,
          'size': b,
          'onSizeChange': (c) => {
            i?.(Number(c));
          },
          'aria-label': a.page_size,
          'className': `${_}-size-changer`,
          'options': p().map((c) => ({ label: B(c), value: c })),
        })),
      E &&
        (S &&
          (x =
            typeof S == 'boolean'
              ? r.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: w,
                    onKeyUp: w,
                    disabled: u,
                    className: `${_}-quick-jumper-button`,
                  },
                  a.jump_to_confirm,
                )
              : r.createElement('span', { onClick: w, onKeyUp: w }, S)),
        (M = r.createElement(
          'div',
          { className: `${_}-quick-jumper` },
          a.jump_to,
          r.createElement('input', {
            'disabled': u,
            'type': 'text',
            'value': C,
            'onChange': O,
            'onKeyUp': w,
            'onBlur': y,
            'aria-label': a.page,
          }),
          a.page,
          x,
        ))),
      r.createElement('li', { className: _ }, Y, M)
    );
  },
  le = (e) => {
    const {
        rootPrefixCls: t,
        page: a,
        active: i,
        className: b,
        style: S,
        showTitle: E,
        onClick: I,
        onKeyPress: u,
        itemRender: j,
      } = e,
      N = `${t}-item`,
      T = z(N, `${N}-${a}`, { [`${N}-active`]: i, [`${N}-disabled`]: !a }, b),
      C = () => {
        I(a);
      },
      P = (B) => {
        u(B, I, a);
      },
      D = j(a, 'page', r.createElement('a', { rel: 'nofollow' }, a));
    return D
      ? r.createElement(
          'li',
          {
            title: E ? String(a) : null,
            className: T,
            style: S,
            onClick: C,
            onKeyDown: P,
            tabIndex: 0,
          },
          D,
        )
      : null;
  };
function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    X.apply(this, arguments)
  );
}
const Dt = (e, t, a) => a;
function qe() {}
function Ve(e) {
  const t = Number(e);
  return typeof t == 'number' && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t;
}
function Q(e, t, a) {
  const i = typeof e > 'u' ? t : e;
  return Math.floor((a - 1) / i) + 1;
}
const Ot = (e) => {
    const {
        prefixCls: t = 'rc-pagination',
        selectPrefixCls: a = 'rc-select',
        className: i,
        classNames: b,
        styles: S,
        current: E,
        defaultCurrent: I = 1,
        total: u = 0,
        pageSize: j,
        defaultPageSize: N = 10,
        onChange: T = qe,
        hideOnSinglePage: C,
        align: P,
        showPrevNextJumpers: D = !0,
        showQuickJumper: B,
        showLessItems: O,
        showTitle: y = !0,
        onShowSizeChange: w = qe,
        locale: p = Ct,
        style: _,
        totalBoundaryShowSizeChanger: Y = 50,
        disabled: M,
        simple: x,
        showTotal: c,
        showSizeChanger: R = u > Y,
        sizeChangerRender: m,
        pageSizeOptions: te,
        itemRender: F = Dt,
        jumpPrevIcon: A,
        jumpNextIcon: se,
        prevIcon: xe,
        nextIcon: ce,
      } = e,
      ue = r.useRef(null),
      [h, Ne] = _e(N, j),
      [Pe, me] = _e(I, E),
      l = Math.max(1, Math.min(Pe, Q(void 0, h, u))),
      [K, Z] = r.useState(l);
    s.useEffect(() => {
      Z(l);
    }, [l]);
    const ne = Math.max(1, l - (O ? 3 : 5)),
      de = Math.min(Q(void 0, h, u), l + (O ? 3 : 5));
    function k(n, o) {
      let d =
        n ||
        r.createElement('button', {
          'type': 'button',
          'aria-label': o,
          'className': `${t}-item-link`,
        });
      return (typeof n == 'function' && (d = r.createElement(n, e)), d);
    }
    function pe(n) {
      const o = n.target.value,
        d = Q(void 0, h, u);
      let J;
      return (
        o === '' ? (J = o) : Number.isNaN(Number(o)) ? (J = K) : o >= d ? (J = d) : (J = Number(o)),
        J
      );
    }
    function ze(n) {
      return Ve(n) && n !== l && Ve(u) && u > 0;
    }
    const Ee = u > h ? B : !1;
    function Ie(n) {
      (n.keyCode === L.UP || n.keyCode === L.DOWN) && n.preventDefault();
    }
    function ge(n) {
      const o = pe(n);
      switch ((o !== K && Z(o), n.keyCode)) {
        case L.ENTER:
          $(o);
          break;
        case L.UP:
          $(o - 1);
          break;
        case L.DOWN:
          $(o + 1);
          break;
      }
    }
    function ee(n) {
      $(pe(n));
    }
    function ie(n) {
      const o = Q(n, h, u),
        d = l > o && o !== 0 ? o : l;
      (Ne(n), Z(d), w?.(l, n), me(d), T?.(d, n));
    }
    function $(n) {
      if (ze(n) && !M) {
        const o = Q(void 0, h, u);
        let d = n;
        return (n > o ? (d = o) : n < 1 && (d = 1), d !== K && Z(d), me(d), T?.(d, h), d);
      }
      return l;
    }
    const W = l > 1,
      q = l < Q(void 0, h, u);
    function be() {
      W && $(l - 1);
    }
    function ae() {
      q && $(l + 1);
    }
    function he() {
      $(ne);
    }
    function fe() {
      $(de);
    }
    function U(n, o, ...d) {
      (n.key === 'Enter' || n.charCode === L.ENTER || n.keyCode === L.ENTER) && o(...d);
    }
    function V(n) {
      U(n, be);
    }
    function Be(n) {
      U(n, ae);
    }
    function Ue(n) {
      U(n, he);
    }
    function Qe(n) {
      U(n, fe);
    }
    function Ye(n) {
      const o = F(n, 'prev', k(xe, 'prev page'));
      return r.isValidElement(o) ? r.cloneElement(o, { disabled: !W }) : o;
    }
    function Ze(n) {
      const o = F(n, 'next', k(ce, 'next page'));
      return r.isValidElement(o) ? r.cloneElement(o, { disabled: !q }) : o;
    }
    function Ce(n) {
      (n.type === 'click' || n.keyCode === L.ENTER) && $(K);
    }
    let Oe = null;
    const ke = rt(e, { aria: !0, data: !0 }),
      et =
        c &&
        r.createElement(
          'li',
          { className: `${t}-total-text` },
          c(u, [u === 0 ? 0 : (l - 1) * h + 1, l * h > u ? u : l * h]),
        );
    let Me = null;
    const g = Q(void 0, h, u);
    if (C && u <= h) return null;
    const v = [],
      re = {
        rootPrefixCls: t,
        onClick: $,
        onKeyPress: U,
        showTitle: y,
        itemRender: F,
        page: -1,
        className: b?.item,
        style: S?.item,
      },
      tt = l - 1 > 0 ? l - 1 : 0,
      nt = l + 1 < g ? l + 1 : g,
      $e = B && B.goButton,
      it = typeof x == 'object' ? x.readOnly : !x;
    let oe = $e,
      Re = null;
    x &&
      ($e &&
        (typeof $e == 'boolean'
          ? (oe = r.createElement(
              'button',
              { type: 'button', onClick: Ce, onKeyUp: Ce },
              p.jump_to_confirm,
            ))
          : (oe = r.createElement('span', { onClick: Ce, onKeyUp: Ce }, $e)),
        (oe = r.createElement(
          'li',
          { title: y ? `${p.jump_to}${l}/${g}` : null, className: `${t}-simple-pager` },
          oe,
        ))),
      (Re = r.createElement(
        'li',
        {
          title: y ? `${l}/${g}` : null,
          className: z(`${t}-simple-pager`, b?.item),
          style: S?.item,
        },
        it
          ? K
          : r.createElement('input', {
              'type': 'text',
              'aria-label': p.jump_to,
              'value': K,
              'disabled': M,
              'onKeyDown': Ie,
              'onKeyUp': ge,
              'onChange': ge,
              'onBlur': ee,
              'size': 3,
            }),
        r.createElement('span', { className: `${t}-slash` }, '/'),
        g,
      )));
    const H = O ? 1 : 2;
    if (g <= 3 + H * 2) {
      g ||
        v.push(
          r.createElement(
            le,
            X({}, re, { key: 'noPager', page: 1, className: `${t}-item-disabled` }),
          ),
        );
      for (let n = 1; n <= g; n += 1)
        v.push(r.createElement(le, X({}, re, { key: n, page: n, active: l === n })));
    } else {
      const n = O ? p.prev_3 : p.prev_5,
        o = O ? p.next_3 : p.next_5,
        d = F(ne, 'jump-prev', k(A, 'prev page')),
        J = F(de, 'jump-next', k(se, 'next page'));
      D &&
        ((Oe = d
          ? r.createElement(
              'li',
              {
                title: y ? n : null,
                key: 'prev',
                onClick: he,
                tabIndex: 0,
                onKeyDown: Ue,
                className: z(`${t}-jump-prev`, { [`${t}-jump-prev-custom-icon`]: !!A }),
              },
              d,
            )
          : null),
        (Me = J
          ? r.createElement(
              'li',
              {
                title: y ? o : null,
                key: 'next',
                onClick: fe,
                tabIndex: 0,
                onKeyDown: Qe,
                className: z(`${t}-jump-next`, { [`${t}-jump-next-custom-icon`]: !!se }),
              },
              J,
            )
          : null));
      let we = Math.max(1, l - H),
        je = Math.min(l + H, g);
      (l - 1 <= H && (je = 1 + H * 2), g - l <= H && (we = g - H * 2));
      for (let G = we; G <= je; G += 1)
        v.push(r.createElement(le, X({}, re, { key: G, page: G, active: l === G })));
      if (
        (l - 1 >= H * 2 &&
          l !== 3 &&
          ((v[0] = r.cloneElement(v[0], {
            className: z(`${t}-item-after-jump-prev`, v[0].props.className),
          })),
          v.unshift(Oe)),
        g - l >= H * 2 && l !== g - 2)
      ) {
        const G = v[v.length - 1];
        ((v[v.length - 1] = r.cloneElement(G, {
          className: z(`${t}-item-before-jump-next`, G.props.className),
        })),
          v.push(Me));
      }
      (we !== 1 && v.unshift(r.createElement(le, X({}, re, { key: 1, page: 1 }))),
        je !== g && v.push(r.createElement(le, X({}, re, { key: g, page: g }))));
    }
    let ve = Ye(tt);
    if (ve) {
      const n = !W || !g;
      ve = r.createElement(
        'li',
        {
          'title': y ? p.prev_page : null,
          'onClick': be,
          'tabIndex': n ? null : 0,
          'onKeyDown': V,
          'className': z(`${t}-prev`, b?.item, { [`${t}-disabled`]: n }),
          'style': S?.item,
          'aria-disabled': n,
        },
        ve,
      );
    }
    let Se = Ze(nt);
    if (Se) {
      let n, o;
      (x ? ((n = !q), (o = W ? 0 : null)) : ((n = !q || !g), (o = n ? null : 0)),
        (Se = r.createElement(
          'li',
          {
            'title': y ? p.next_page : null,
            'onClick': ae,
            'tabIndex': o,
            'onKeyDown': Be,
            'className': z(`${t}-next`, b?.item, { [`${t}-disabled`]: n }),
            'style': S?.item,
            'aria-disabled': n,
          },
          Se,
        )));
    }
    const at = z(t, i, {
      [`${t}-start`]: P === 'start',
      [`${t}-center`]: P === 'center',
      [`${t}-end`]: P === 'end',
      [`${t}-simple`]: x,
      [`${t}-disabled`]: M,
    });
    return r.createElement(
      'ul',
      X({ className: at, style: _, ref: ue }, ke),
      et,
      ve,
      x ? Re : v,
      Se,
      r.createElement(Tt, {
        locale: p,
        rootPrefixCls: t,
        disabled: M,
        selectPrefixCls: a,
        changeSize: ie,
        pageSize: h,
        pageSizeOptions: te,
        quickGo: Ee ? $ : null,
        goButton: oe,
        showSizeChanger: R,
        sizeChangerRender: m,
      }),
    );
  },
  Mt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
        },
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`${t}-item`]: {
          'cursor': 'not-allowed',
          'backgroundColor': 'transparent',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          'a': {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed',
          },
          '&-active': {
            'borderColor': e.colorBorder,
            'backgroundColor': e.itemActiveBgDisabled,
            '&:hover, &:active': { backgroundColor: e.itemActiveBgDisabled },
            'a': { color: e.itemActiveColorDisabled },
          },
        },
        [`${t}-item-link`]: {
          'color': e.colorTextDisabled,
          'cursor': 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: {
            'backgroundColor': 'transparent',
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
    };
  },
  Rt = (e) => {
    const { componentCls: t } = e;
    return {
      [`&${t}-small ${t}-options`]: {
        'marginInlineStart': e.paginationMiniOptionsMarginInlineStart,
        '&-quick-jumper': { input: { ...xt(e), width: e.paginationMiniQuickJumperInputWidth } },
      },
    };
  },
  At = (e) => {
    const { componentCls: t } = e;
    return { [`&${t}-large ${t}-options`]: { '&-quick-jumper': { input: { ...yt(e) } } } };
  },
  Ht = (e) => {
    const { componentCls: t, antCls: a } = e,
      [, i] = ye(a, 'pagination');
    return {
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          height: i('item-size-actual'),
          lineHeight: i('item-size-actual'),
          verticalAlign: 'top',
          [`${t}-item-link`]: {
            'height': i('item-size-actual'),
            'backgroundColor': 'transparent',
            'border': 0,
            '&:hover': { backgroundColor: e.colorBgTextHover },
            '&:active': { backgroundColor: e.colorBgTextActive },
            '&::after': { height: i('item-size-actual'), lineHeight: i('item-size-actual') },
          },
        },
        [`${t}-simple-pager`]: {
          display: 'inline-flex',
          alignItems: 'center',
          height: i('item-size-actual'),
          marginInlineEnd: i('item-spacing-actual'),
          input: {
            'boxSizing': 'border-box',
            'height': '100%',
            'width': e.quickJumperInputWidth,
            'padding': `0 ${f(e.paginationItemPaddingInline)}`,
            'textAlign': 'center',
            'backgroundColor': e.itemInputBg,
            'border': `${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            'borderRadius': e.borderRadius,
            'outline': 'none',
            'transition': `border-color ${e.motionDurationMid}`,
            'color': 'inherit',
            '&:hover': { borderColor: e.colorPrimary },
            '&:focus': {
              borderColor: e.colorPrimaryHover,
              boxShadow: `${f(e.inputOutlineOffset)} 0 ${f(e.controlOutlineWidth)} ${e.controlOutline}`,
            },
            '&[disabled]': {
              color: e.colorTextDisabled,
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              cursor: 'not-allowed',
            },
          },
        },
        [`&${t}-disabled`]: {
          [`${t}-prev, ${t}-next`]: {
            [`${t}-item-link`]: { '&:hover, &:active': { backgroundColor: 'transparent' } },
          },
        },
        [`&${t}-small`]: {
          [`${t}-simple-pager`]: { input: { width: e.paginationMiniQuickJumperInputWidth } },
        },
      },
    };
  },
  Lt = (e) => {
    const { componentCls: t, antCls: a } = e,
      [, i] = ye(a, 'pagination');
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        'outline': 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            'color': e.colorPrimary,
            'fontSize': e.fontSizeSM,
            'opacity': 0,
            'transition': `all ${e.motionDurationMid}`,
            '&-svg': { top: 0, insetInlineEnd: 0, bottom: 0, insetInlineStart: 0, margin: 'auto' },
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: i('item-spacing-actual') },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: 'inline-block',
        minWidth: i('item-size-actual'),
        height: i('item-size-actual'),
        color: e.colorText,
        fontFamily: e.fontFamily,
        lineHeight: i('item-size-actual'),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: e.borderRadius,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid}`,
      },
      [`${t}-prev, ${t}-next`]: {
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${f(e.lineWidth)} ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `all ${e.motionDurationMid}`,
        },
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: { [`${t}-item-link`]: { backgroundColor: 'transparent' } },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        'display': 'inline-block',
        'marginInlineStart': e.margin,
        'verticalAlign': 'middle',
        '&-size-changer': { width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: i('item-size-actual'),
          marginInlineStart: e.marginXS,
          lineHeight: i('item-size-actual'),
          verticalAlign: 'baseline',
          input: {
            ...zt(e),
            ...Pt(e, {
              borderColor: e.colorBorder,
              hoverBorderColor: e.colorPrimaryHover,
              activeBorderColor: e.colorPrimary,
              activeShadow: e.activeShadow,
            }),
            '&[disabled]': { ...Nt(e) },
            'width': e.quickJumperInputWidth,
            'height': i('item-size-actual'),
            'boxSizing': 'border-box',
            'margin': 0,
            'marginInlineStart': i('item-spacing-actual'),
            'marginInlineEnd': i('item-spacing-actual'),
          },
        },
      },
    };
  },
  _t = (e) => {
    const { componentCls: t, antCls: a } = e,
      [, i] = ye(a, 'pagination');
    return {
      [`${t}-item`]: {
        'display': 'inline-block',
        'minWidth': i('item-size-actual'),
        'height': i('item-size-actual'),
        'marginInlineEnd': i('item-spacing-actual'),
        'fontFamily': e.fontFamily,
        'lineHeight': f(e.calc(i('item-size-actual')).sub(2).equal()),
        'textAlign': 'center',
        'verticalAlign': 'middle',
        'listStyle': 'none',
        'backgroundColor': e.itemBg,
        'border': `${f(e.lineWidth)} ${e.lineType} transparent`,
        'borderRadius': e.borderRadius,
        'outline': 0,
        'cursor': 'pointer',
        'userSelect': 'none',
        'a': {
          'display': 'block',
          'padding': `0 ${f(e.paginationItemPaddingInline)}`,
          'color': e.colorText,
          '&:hover': { textDecoration: 'none' },
        },
        [`&:not(${t}-item-active)`]: {
          '&:hover': {
            transition: `all ${e.motionDurationMid}`,
            backgroundColor: e.colorBgTextHover,
          },
          '&:active': { backgroundColor: e.colorBgTextActive },
        },
        '&-active': {
          'fontWeight': e.fontWeightStrong,
          'backgroundColor': e.itemActiveBg,
          'borderColor': e.colorPrimary,
          'a': { color: e.itemActiveColor },
          '&:hover': { borderColor: e.colorPrimaryHover },
          '&:hover a': { color: e.itemActiveColorHover },
        },
      },
    };
  },
  Kt = (e) => {
    const { componentCls: t, antCls: a } = e,
      [i, b] = ye(a, 'pagination');
    return {
      [t]: {
        [i('item-size-actual')]: f(e.itemSize),
        [i('item-spacing-actual')]: f(e.marginXS),
        '&-small': {
          [i('item-size-actual')]: f(e.itemSizeSM),
          [i('item-spacing-actual')]: f(e.marginXXS),
        },
        '&-large': {
          [i('item-size-actual')]: f(e.itemSizeLG),
          [i('item-spacing-actual')]: f(e.marginSM),
        },
        ...st(e),
        'display': 'flex',
        'alignItems': 'center',
        '&-start': { justifyContent: 'start' },
        '&-center': { justifyContent: 'center' },
        '&-end': { justifyContent: 'end' },
        'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
        '&::after': {
          display: 'block',
          clear: 'both',
          height: 0,
          overflow: 'hidden',
          visibility: 'hidden',
          content: '""',
        },
        [`${t}-total-text`]: {
          display: 'inline-block',
          height: b('item-size-actual'),
          marginInlineEnd: b('item-spacing-actual'),
          lineHeight: f(e.calc(b('item-size-actual')).sub(2).equal()),
          verticalAlign: 'middle',
        },
        ..._t(e),
        ...Lt(e),
        ...Ht(e),
        ...Rt(e),
        ...At(e),
        ...Mt(e),
        [`@media only screen and (max-width: ${e.screenLG}px)`]: {
          [`${t}-item`]: { '&-after-jump-prev, &-before-jump-next': { display: 'none' } },
        },
        [`@media only screen and (max-width: ${e.screenSM}px)`]: {
          [`${t}-options`]: { display: 'none' },
        },
      },
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
    };
  },
  Wt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}:not(${t}-disabled)`]: {
        [`${t}-item`]: { ...ct(e) },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          '&:focus-visible': {
            [`${t}-item-link-icon`]: { opacity: 1 },
            [`${t}-item-ellipsis`]: { opacity: 0 },
            ...Ae(e),
          },
        },
        [`${t}-prev, ${t}-next`]: { [`&:focus-visible ${t}-item-link`]: Ae(e) },
      },
    };
  },
  Xe = (e) => ({
    itemBg: e.colorBgContainer,
    itemSize: e.controlHeight,
    itemSizeSM: e.controlHeightSM,
    itemSizeLG: e.controlHeightLG,
    itemActiveBg: e.colorBgContainer,
    itemActiveColor: e.colorPrimary,
    itemActiveColorHover: e.colorPrimaryHover,
    itemLinkBg: e.colorBgContainer,
    itemActiveColorDisabled: e.colorTextDisabled,
    itemActiveBgDisabled: e.controlItemBgActiveDisabled,
    itemInputBg: e.colorBgContainer,
    miniOptionsSizeChangerTop: 0,
    ...St(e),
  }),
  Fe = (e) =>
    lt(
      e,
      {
        inputOutlineOffset: 0,
        quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
        paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
        paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em',
      },
      vt(e),
    ),
  qt = ot(
    'Pagination',
    (e) => {
      const t = Fe(e);
      return [Kt(t), Wt(t)];
    },
    Xe,
  ),
  Vt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}${t}-bordered${t}-disabled`]: {
        '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        '&:focus-visible': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled },
          },
          [`&${t}-item-active`]: { backgroundColor: e.itemActiveBgDisabled },
        },
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
          },
        },
      },
      [`${t}${t}-bordered`]: {
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': { borderColor: e.colorPrimaryHover, backgroundColor: e.itemBg },
          [`${t}-item-link`]: { backgroundColor: e.itemLinkBg, borderColor: e.colorBorder },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            color: e.colorPrimary,
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: { borderColor: e.colorBorder, color: e.colorTextDisabled },
          },
        },
        [`${t}-item`]: {
          'backgroundColor': e.itemBg,
          'border': `${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            a: { color: e.colorPrimary },
          },
          '&-active': { borderColor: e.colorPrimary },
        },
      },
    };
  },
  Jt = ut(
    ['Pagination', 'bordered'],
    (e) => {
      const t = Fe(e);
      return Vt(t);
    },
    Xe,
  );
function Je(e) {
  return s.useMemo(
    () =>
      typeof e == 'boolean' ? [e, {}] : e && typeof e == 'object' ? [!0, e] : [void 0, void 0],
    [e],
  );
}
const kt = (e) => {
  const {
      align: t,
      prefixCls: a,
      selectPrefixCls: i,
      className: b,
      rootClassName: S,
      style: E,
      size: I,
      locale: u,
      responsive: j,
      showSizeChanger: N,
      selectComponentClass: T,
      pageSizeOptions: C,
      styles: P,
      classNames: D,
      ...B
    } = e,
    { xs: O } = mt(j),
    [, y] = dt(),
    {
      getPrefixCls: w,
      direction: p,
      showSizeChanger: _,
      className: Y,
      style: M,
      classNames: x,
      styles: c,
      totalBoundaryShowSizeChanger: R,
    } = pt('pagination'),
    m = w('pagination', a),
    [te, F] = qt(m),
    A = gt(I),
    se = A === 'small' || !!(O && !A && j),
    xe = { ...e, size: A },
    [ce, ue] = bt([x, D], [c, P], { props: xe }),
    [h] = ht('Pagination', $t),
    Ne = { ...h, ...u },
    [Pe, me] = Je(N),
    [l, K] = Je(_),
    Z = Pe ?? l,
    ne = me ?? K,
    de = T || ft,
    k = s.useMemo(() => (C ? C.map(Number) : void 0), [C]),
    pe = (ee) => {
      const {
          'disabled': ie,
          'size': $,
          'onSizeChange': W,
          'aria-label': q,
          'className': be,
          'options': ae,
        } = ee,
        { className: he, onChange: fe } = ne || {},
        U = ae.find((V) => String(V.value) === String($))?.value;
      return s.createElement(de, {
        'disabled': ie,
        'showSearch': !0,
        'popupMatchSelectWidth': !1,
        'getPopupContainer': (V) => V.parentNode,
        'aria-label': q,
        'options': ae,
        ...ne,
        'value': U,
        'onChange': (V, Be) => {
          (W?.(V), fe?.(V, Be));
        },
        'size': A,
        'className': z(be, he),
      });
    },
    ze = s.useMemo(() => {
      const ee = s.createElement('span', { className: `${m}-item-ellipsis` }, '•••'),
        ie = s.createElement(
          'button',
          { className: `${m}-item-link`, type: 'button', tabIndex: -1 },
          p === 'rtl' ? s.createElement(He, null) : s.createElement(Le, null),
        ),
        $ = s.createElement(
          'button',
          { className: `${m}-item-link`, type: 'button', tabIndex: -1 },
          p === 'rtl' ? s.createElement(Le, null) : s.createElement(He, null),
        ),
        W = s.createElement(
          'a',
          { className: `${m}-item-link` },
          s.createElement(
            'div',
            { className: `${m}-item-container` },
            p === 'rtl'
              ? s.createElement(We, { className: `${m}-item-link-icon` })
              : s.createElement(Ke, { className: `${m}-item-link-icon` }),
            ee,
          ),
        ),
        q = s.createElement(
          'a',
          { className: `${m}-item-link` },
          s.createElement(
            'div',
            { className: `${m}-item-container` },
            p === 'rtl'
              ? s.createElement(Ke, { className: `${m}-item-link-icon` })
              : s.createElement(We, { className: `${m}-item-link-icon` }),
            ee,
          ),
        );
      return { prevIcon: ie, nextIcon: $, jumpPrevIcon: W, jumpNextIcon: q };
    }, [p, m]),
    Ee = w('select', i),
    Ie = z(
      {
        [`${m}-${t}`]: !!t,
        [`${m}-${A}`]: A,
        [`${m}-mini`]: se,
        [`${m}-rtl`]: p === 'rtl',
        [`${m}-bordered`]: y.wireframe,
      },
      Y,
      b,
      S,
      ce.root,
      te,
      F,
    ),
    ge = { ...ue.root, ...M, ...E };
  return s.createElement(
    s.Fragment,
    null,
    y.wireframe && s.createElement(Jt, { prefixCls: m }),
    s.createElement(Ot, {
      ...ze,
      ...B,
      styles: ue,
      classNames: ce,
      style: ge,
      prefixCls: m,
      selectPrefixCls: Ee,
      className: Ie,
      locale: Ne,
      pageSizeOptions: k,
      showSizeChanger: Z,
      totalBoundaryShowSizeChanger: B.totalBoundaryShowSizeChanger ?? R,
      sizeChangerRender: pe,
    }),
  );
};
export { kt as P };
