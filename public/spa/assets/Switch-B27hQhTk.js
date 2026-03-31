import {
  f as fe,
  ad as J,
  dx as he,
  dy as me,
  dz as pe,
  dA as xe,
  dB as be,
  dC as ge,
  aq as ye,
  dD as ke,
  dE as Ce,
  dF as ve,
  dG as W,
  bs as D,
  ai as we,
  j as F,
  I as Se,
} from './index-C8UyLGsD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { u as Pe } from './getPseudoElementBounds-D4ZSmtDt.js';
import { f as je, u as Re, a as X, b as Ie, c as Ee, d as Te, e as Ne } from './styles-D1jYbijK.js';
import { aI as Me } from '../vendor/vendor-icons-BHMUH78i.js';
const d = fe(({ css: e, cssVar: t }) => ({
    icon: e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${t.colorTextLightSolid};
  `,
    iconLeft: e`
    inset-inline-start: 5px;
  `,
    iconLeftSmall: e`
    inset-inline-start: 4px;
  `,
    iconRight: e`
    inset-inline-end: 5px;
  `,
    iconRightSmall: e`
    inset-inline-end: 4px;
  `,
    iconThumb: e`
    position: relative;
    inset: unset;
    transform: none;
    color: ${t.colorPrimary};
  `,
    loading: e`
    @keyframes lobe-switch-loading {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: lobe-switch-loading 1s linear infinite;
  `,
    root: e`
    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    padding: 2px;
    border: 0;
    border-radius: 100px;

    background: ${t.colorTextQuaternary};
    outline: none;

    transition: background 150ms ${t.motionEaseOut};

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover:not([data-disabled]) {
      background: ${t.colorTextTertiary};
    }

    &[data-checked] {
      justify-content: flex-end;
      background: ${t.colorPrimary};

      &:hover:not([data-disabled]) {
        background: ${t.colorPrimaryHover};
      }
    }

    &[data-disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,
    rootDefault: e`
    width: 44px;
    min-width: 44px;
    height: 22px;
  `,
    rootSmall: e`
    width: 28px;
    min-width: 28px;
    height: 16px;
  `,
    thumb: e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${t.colorBgContainer};
    box-shadow:
      0 2px 4px 0 rgb(0 35 11 / 20%),
      0 1px 2px 0 rgb(0 0 0 / 8%);

    [data-disabled] > & {
      box-shadow: none;
    }
  `,
    thumbDefault: e`
    width: 18px;
    height: 18px;
  `,
    thumbSmall: e`
    width: 12px;
    height: 12px;
  `,
  })),
  Be = J(d.root, {
    defaultVariants: { size: 'default' },
    variants: { size: { default: d.rootDefault, small: d.rootSmall } },
  }),
  Le = J(d.thumb, {
    defaultVariants: { size: 'default' },
    variants: { size: { default: d.thumbDefault, small: d.thumbSmall } },
  }),
  Y = a.createContext(void 0);
function Fe() {
  const e = a.useContext(Y);
  if (e === void 0) throw new Error(he(63));
  return e;
}
let U = (function (e) {
  return (
    (e.checked = 'data-checked'),
    (e.unchecked = 'data-unchecked'),
    (e.disabled = 'data-disabled'),
    (e.readonly = 'data-readonly'),
    (e.required = 'data-required'),
    (e.valid = 'data-valid'),
    (e.invalid = 'data-invalid'),
    (e.touched = 'data-touched'),
    (e.dirty = 'data-dirty'),
    (e.filled = 'data-filled'),
    (e.focused = 'data-focused'),
    e
  );
})({});
const Z = {
    ...je,
    checked(e) {
      return e ? { [U.checked]: '' } : { [U.unchecked]: '' };
    },
  },
  Ve = a.forwardRef(function (t, n) {
    const {
        checked: p,
        className: i,
        defaultChecked: c,
        id: r,
        inputRef: u,
        name: f,
        nativeButton: x = !1,
        onCheckedChange: N,
        readOnly: g = !1,
        required: y = !1,
        disabled: j = !1,
        render: B,
        uncheckedValue: h,
        ...k
      } = t,
      { clearErrors: m } = Re(),
      {
        state: b,
        setTouched: S,
        setDirty: R,
        validityData: M,
        setFilled: P,
        setFocused: I,
        shouldValidateOnChange: o,
        validationMode: oe,
        disabled: ae,
        name: se,
        validation: C,
      } = X(),
      { labelId: ie } = Ie(),
      v = ae || j,
      E = se ?? f,
      q = me(N),
      T = a.useRef(null),
      z = pe(T, u, C.inputRef),
      L = a.useRef(null),
      K = xe(),
      O = Ee({ id: r, implicit: !1, controlRef: L }),
      [l, H] = Pe({ controlled: p, default: !!c, name: 'Switch', state: 'checked' });
    (Te({ id: K, commit: C.commit, value: l, controlRef: L, name: E, getValue: () => l }),
      be(() => {
        T.current && P(T.current.checked);
      }, [T, P]),
      Ne(l, () => {
        (m(E), R(l !== M.initialValue), P(l), o() ? C.commit(l) : C.commit(l, !0));
      }));
    const { getButtonProps: re, buttonRef: le } = ge({ disabled: v, native: x }),
      de = {
        'id': K,
        'role': 'switch',
        'aria-checked': l,
        'aria-readonly': g || void 0,
        'aria-labelledby': ie,
        'onFocus'() {
          v || I(!0);
        },
        'onBlur'() {
          const w = T.current;
          !w || v || (S(!0), I(!1), oe === 'onBlur' && C.commit(w.checked));
        },
        'onClick'(w) {
          g || v || (w.preventDefault(), T?.current?.click());
        },
      },
      ce = a.useMemo(
        () =>
          ye(
            {
              'checked': l,
              'disabled': v,
              'id': O,
              'name': E,
              'required': y,
              'style': ke,
              'tabIndex': -1,
              'type': 'checkbox',
              'aria-hidden': !0,
              'ref': z,
              'onChange'(w) {
                if (w.nativeEvent.defaultPrevented) return;
                const G = w.target.checked,
                  Q = Ce(ve, w.nativeEvent);
                (q?.(G, Q), !Q.isCanceled && H(G));
              },
              'onFocus'() {
                L.current?.focus();
              },
            },
            C.getInputValidationProps,
          ),
        [l, v, z, O, E, q, y, H, C],
      ),
      _ = a.useMemo(
        () => ({ ...b, checked: l, disabled: v, readOnly: g, required: y }),
        [b, l, v, g, y],
      ),
      ue = W('span', t, {
        state: _,
        ref: [n, L, le],
        props: [de, C.getValidationProps, k, re],
        stateAttributesMapping: Z,
      });
    return s.jsxs(Y.Provider, {
      value: _,
      children: [
        ue,
        !l && E && h !== void 0 && s.jsx('input', { type: 'hidden', name: E, value: h }),
        s.jsx('input', { ...ce }),
      ],
    });
  }),
  De = a.forwardRef(function (t, n) {
    const { render: p, className: i, ...c } = t,
      { state: r } = X(),
      u = Fe(),
      f = { ...r, ...u };
    return W('span', t, { state: f, ref: n, stateAttributesMapping: Z, props: c });
  }),
  A = a.createContext(null),
  $ = () => {
    const e = a.use(A);
    if (!e) throw new Error('useSwitchContext must be used within a SwitchRoot');
    return e;
  },
  ee = ({
    checked: e,
    className: t,
    defaultChecked: n,
    onCheckedChange: p,
    onClick: i,
    size: c = 'default',
    children: r,
    disabled: u,
    readOnly: f,
    required: x,
    inputRef: N,
    id: g,
    name: y,
    ...j
  }) => {
    const B = D(),
      [h, k] = a.useState(!1),
      m = a.useRef(null),
      [b, S] = we(n ?? !1, {
        defaultValue: n,
        onChange: (o) => {
          m.current && p?.(o, m.current);
        },
        value: e,
      }),
      R = Be({ size: c }),
      M = a.useMemo(
        () => ({ isChecked: !!b, isPressed: h, setIsChecked: (o) => S(o), setIsPressed: k }),
        [b, h, S],
      ),
      P = (o) => {
        ((m.current = o), i?.(!b, o));
      },
      I = (o) => {
        ((o.key === 'Enter' || o.key === ' ') && (m.current = o), j.onKeyDown?.(o));
      };
    return s.jsx(A, {
      value: M,
      children: s.jsx(Ve, {
        checked: b,
        defaultChecked: n,
        disabled: u,
        id: g,
        inputRef: N,
        name: y,
        readOnly: f,
        required: x,
        render: s.jsx(B.button, {
          ...j,
          className: F(R, t),
          initial: !1,
          whileTap: 'tap',
          onClick: P,
          onKeyDown: I,
          onTap: () => k(!1),
          onTapCancel: () => k(!1),
          onTapStart: () => k(!0),
        }),
        onCheckedChange: S,
        children: r,
      }),
    });
  };
ee.displayName = 'SwitchRoot';
const te = ({
  className: e,
  pressedAnimation: t,
  size: n = 'default',
  transition: p = { damping: 25, stiffness: 300, type: 'spring' },
  children: i,
  ...c
}) => {
  const r = D(),
    { isPressed: u } = $(),
    f = Le({ size: n }),
    x = { width: n === 'small' ? 16 : 22 };
  return s.jsx(De, {
    render: s.jsx(r.span, {
      layout: !0,
      animate: u ? t || x : void 0,
      className: F(f, e),
      transition: p,
      ...c,
      children: i,
    }),
  });
};
te.displayName = 'SwitchThumb';
const qe = (e, t) =>
    e === 'thumb'
      ? d.iconThumb
      : e === 'left'
        ? t === 'small'
          ? d.iconLeftSmall
          : d.iconLeft
        : t === 'small'
          ? d.iconRightSmall
          : d.iconRight,
  V = ({
    children: e,
    className: t,
    position: n,
    transition: p = { bounce: 0, type: 'spring' },
    ...i
  }) => {
    const c = D(),
      { isChecked: r } = $(),
      u = i.size || 'default',
      f = a.useMemo(() => (n === 'right' ? !r : n === 'left' ? r : n === 'thumb'), [n, r]),
      x = qe(n, u);
    return s.jsx(c.span, {
      animate: f ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 },
      className: F(d.icon, x, t),
      transition: p,
      ...i,
      children: e,
    });
  };
V.displayName = 'SwitchIcon';
const ne = a.memo(
  ({
    autoFocus: e,
    checked: t,
    checkedChildren: n,
    className: p,
    classNames: i,
    defaultChecked: c,
    defaultValue: r,
    disabled: u,
    id: f,
    loading: x,
    name: N,
    onChange: g,
    onClick: y,
    ref: j,
    rootClassName: B,
    size: h = 'default',
    style: k,
    styles: m,
    tabIndex: b,
    title: S,
    unCheckedChildren: R,
    value: M,
  }) => {
    const P = u || x,
      I = M ?? t,
      o = r ?? c;
    return s.jsxs(ee, {
      autoFocus: e,
      checked: I,
      className: F(p, B, i?.root),
      defaultChecked: o,
      disabled: P,
      id: f,
      name: N,
      ref: j,
      size: h,
      style: { ...k, ...m?.root },
      tabIndex: b,
      title: S,
      onCheckedChange: g,
      onClick: y,
      children: [
        n &&
          s.jsx(V, {
            className: i?.content,
            position: 'left',
            size: h,
            style: m?.content,
            children: n,
          }),
        R &&
          s.jsx(V, {
            className: i?.content,
            position: 'right',
            size: h,
            style: m?.content,
            children: R,
          }),
        s.jsx(te, {
          className: i?.thumb,
          size: h,
          style: m?.thumb,
          children:
            x &&
            s.jsx(Se, {
              className: d.loading,
              icon: Me,
              size: h === 'small' ? 8 : 12,
              style: { color: 'var(--lobe-color-primary)' },
            }),
        }),
      ],
    });
  },
);
ne.displayName = 'Switch';
var Qe = ne;
export { Qe as S };
