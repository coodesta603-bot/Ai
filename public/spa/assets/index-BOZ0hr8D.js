import { R as le, r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as ne, C as ce } from './useBubbleLock-D8efMGR_.js';
import {
  g as W,
  u as K,
  a as ie,
  h as de,
  k as ue,
  c as y,
  o as be,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  b8 as me,
  b9 as Ce,
  cm as pe,
  ba as X,
  bb as ge,
  d4 as fe,
  bO as he,
  be as xe,
  d5 as $e,
  bQ as ye,
  bX as ve,
  cK as j,
  bm as Se,
  ct as Q,
} from './index-C8UyLGsD.js';
const Ie = (e) => {
  const { checkboxCls: o, checkboxSize: l, lineWidth: d } = e,
    t = `${o}-wrapper`;
  return [
    {
      [`${o}-group`]: {
        ...X(e),
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 },
      },
      [t]: {
        ...X(e),
        'display': 'inline-flex',
        'alignItems': 'baseline',
        'cursor': 'pointer',
        '&:after': { display: 'inline-block', width: 0, overflow: 'hidden', content: "'\\a0'" },
        [`& + ${t}`]: { marginInlineStart: 0 },
        [`&${t}-in-form-item`]: { 'input[type="checkbox"]': { width: 14, height: 14 } },
      },
      [o]: {
        ...X(e),
        'position': 'relative',
        'whiteSpace': 'nowrap',
        'lineHeight': 1,
        'cursor': 'pointer',
        'alignSelf': 'center',
        'boxSizing': 'border-box',
        'display': 'block',
        'width': l,
        'height': l,
        'direction': 'ltr',
        'backgroundColor': e.colorBgContainer,
        'border': `${K(d)} ${e.lineType} ${e.colorBorder}`,
        'borderRadius': e.borderRadiusSM,
        'borderCollapse': 'separate',
        'transition': `all ${e.motionDurationSlow}`,
        'flex': 'none',
        ...W(),
        '&:after': {
          boxSizing: 'border-box',
          position: 'absolute',
          top: `calc(${l} / 2 - ${d})`,
          insetInlineStart: `calc(${l} / 4 - ${d})`,
          display: 'table',
          width: e.calc(l).div(14).mul(5).equal(),
          height: e.calc(l).div(14).mul(8).equal(),
          border: `${K(e.lineWidthBold)} solid ${e.colorWhite}`,
          borderTop: 0,
          borderInlineStart: 0,
          transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
          opacity: 0,
          content: '""',
          transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
          ...W(),
        },
        [`${o}-input`]: {
          position: 'absolute',
          inset: `calc(-1 * (${d}))`,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
          margin: 0,
        },
        [`&:has(${o}-input:focus-visible)`]: pe(e),
        '& + span': { paddingInlineStart: e.paddingXS, paddingInlineEnd: e.paddingXS },
      },
    },
    {
      [`
        ${t}:not(${t}-disabled),
        ${o}:not(${o}-disabled)
      `]: { [`&:hover ${o}`]: { borderColor: e.colorPrimary } },
      [`${t}:not(${t}-disabled)`]: {
        [`&:hover ${o}-checked:not(${o}-disabled)`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent',
        },
      },
    },
    {
      [`${o}-checked`]: {
        'backgroundColor': e.colorPrimary,
        'borderColor': e.colorPrimary,
        '&:after': {
          opacity: 1,
          transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
          transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
          ...W(),
        },
        [`&:not(${o}-disabled):hover`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent',
        },
      },
    },
    {
      [o]: {
        '&-indeterminate': {
          'backgroundColor': e.colorBgContainer,
          'borderColor': e.colorBorder,
          '&:after': {
            top: '50%',
            insetInlineStart: '50%',
            width: e.calc(e.fontSizeLG).div(2).equal(),
            height: e.calc(e.fontSizeLG).div(2).equal(),
            backgroundColor: e.colorPrimary,
            border: 0,
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1,
            content: '""',
          },
          '&:hover': { backgroundColor: e.colorBgContainer, borderColor: e.colorPrimary },
        },
      },
    },
    {
      [`${t}-disabled`]: { cursor: 'not-allowed' },
      [`${o}-disabled`]: {
        [`&, ${o}-input`]: { cursor: 'not-allowed', pointerEvents: 'none' },
        'background': e.colorBgContainerDisabled,
        'borderColor': e.colorBorder,
        '&:after': { borderColor: e.colorTextDisabled },
        '& + span': { color: e.colorTextDisabled },
        [`&${o}-indeterminate::after`]: { background: e.colorTextDisabled },
      },
    },
  ];
};
function we(e, o) {
  const l = Ce(o, { checkboxCls: `.${e}`, checkboxSize: o.controlInteractiveSize });
  return Ie(l);
}
const J = me('Checkbox', (e, { prefixCls: o }) => [we(o, e)]),
  U = le.createContext(null),
  Ne = (e, o) => {
    const {
        prefixCls: l,
        children: d,
        indeterminate: t = !1,
        onMouseEnter: P,
        onMouseLeave: k,
        skipGroup: m = !1,
        disabled: B,
        rootClassName: z,
        className: D,
        style: s,
        classNames: R,
        styles: V,
        name: C,
        value: u,
        checked: G,
        defaultChecked: v,
        onChange: x,
        ...S
      } = e,
      {
        getPrefixCls: I,
        direction: w,
        className: g,
        style: $,
        classNames: N,
        styles: O,
      } = ge('checkbox'),
      n = a.useContext(U),
      { isFormItemInput: T } = a.useContext(fe),
      M = a.useContext(he),
      f = (n?.disabled || B) ?? M,
      [q, r] = ie(v, G);
    let i = q;
    const b = de((A) => {
      (r(A.target.checked),
        x?.(A),
        !m && n?.toggleOption && n.toggleOption({ label: d, value: u }));
    });
    n && !m && (i = n.value.includes(u));
    const p = a.useRef(null),
      F = ue(o, p);
    (a.useEffect(() => {
      if (!(m || !n))
        return (
          n.registerValue(u),
          () => {
            n.cancelValue(u);
          }
        );
    }, [u, m]),
      a.useEffect(() => {
        p.current?.input && (p.current.input.indeterminate = t);
      }, [t]));
    const c = I('checkbox', l),
      E = j(c),
      [h, ee] = J(c, E),
      _ = { ...S },
      re = { ...e, indeterminate: t, disabled: f, checked: i },
      [L, H] = xe([N, R], [O, V], { props: re }),
      oe = y(
        `${c}-wrapper`,
        {
          [`${c}-rtl`]: w === 'rtl',
          [`${c}-wrapper-checked`]: i,
          [`${c}-wrapper-disabled`]: f,
          [`${c}-wrapper-in-form-item`]: T,
        },
        g,
        D,
        L.root,
        z,
        ee,
        E,
        h,
      ),
      ae = y(L.icon, { [`${c}-indeterminate`]: t }, $e, h),
      [te, se] = ne(_.onClick);
    return a.createElement(
      ye,
      { component: 'Checkbox', disabled: f },
      a.createElement(
        'label',
        {
          className: oe,
          style: { ...H.root, ...$, ...s },
          onMouseEnter: P,
          onMouseLeave: k,
          onClick: te,
        },
        a.createElement(ce, {
          ..._,
          name: !m && n ? n.name : C,
          checked: i,
          onClick: se,
          onChange: b,
          prefixCls: c,
          className: ae,
          style: H.icon,
          disabled: f,
          ref: F,
          value: u,
        }),
        ve(d) &&
          a.createElement('span', { className: y(`${c}-label`, L.label), style: H.label }, d),
      ),
    );
  },
  Y = a.forwardRef(Ne),
  Ee = a.forwardRef((e, o) => {
    const {
        defaultValue: l,
        children: d,
        options: t = [],
        prefixCls: P,
        className: k,
        rootClassName: m,
        style: B,
        onChange: z,
        role: D = 'group',
        ...s
      } = e,
      { getPrefixCls: R, direction: V } = a.useContext(Se),
      [C, u] = a.useState(s.value || l || []),
      [G, v] = a.useState([]);
    a.useEffect(() => {
      'value' in s && u(s.value || []);
    }, [s.value]);
    const x = a.useMemo(
        () =>
          t.map((r) => (typeof r == 'string' || typeof r == 'number' ? { label: r, value: r } : r)),
        [t],
      ),
      S = (r) => {
        v((i) => i.filter((b) => b !== r));
      },
      I = (r) => {
        v((i) => [].concat(Q(i), [r]));
      },
      w = (r) => {
        const i = C.indexOf(r.value),
          b = Q(C);
        (i === -1 ? b.push(r.value) : b.splice(i, 1),
          'value' in s || u(b),
          z?.(
            b
              .filter((p) => G.includes(p))
              .sort((p, F) => {
                const c = x.findIndex((h) => h.value === p),
                  E = x.findIndex((h) => h.value === F);
                return c - E;
              }),
          ));
      },
      g = R('checkbox', P),
      $ = `${g}-group`,
      N = j(g),
      [O, n] = J(g, N),
      T = be(s, ['value', 'disabled']),
      M = t.length
        ? x.map((r) =>
            a.createElement(
              Y,
              {
                prefixCls: g,
                key: r.value.toString(),
                disabled: 'disabled' in r ? r.disabled : s.disabled,
                value: r.value,
                checked: C.includes(r.value),
                onChange: r.onChange,
                className: y(`${$}-item`, r.className),
                style: r.style,
                title: r.title,
                id: r.id,
                required: r.required,
              },
              r.label,
            ),
          )
        : d,
      f = a.useMemo(
        () => ({
          toggleOption: w,
          value: C,
          disabled: s.disabled,
          name: s.name,
          registerValue: I,
          cancelValue: S,
        }),
        [w, C, s.disabled, s.name, I, S],
      ),
      q = y($, { [`${$}-rtl`]: V === 'rtl' }, k, m, n, N, O);
    return a.createElement(
      'div',
      { className: q, style: B, role: D, ...T, ref: o },
      a.createElement(U.Provider, { value: f }, M),
    );
  }),
  Z = Y;
Z.Group = Ee;
Z.__ANT_CHECKBOX = !0;
export { Z as C, we as g };
