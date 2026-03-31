import {
  f as Kt,
  ae as it,
  j as ne,
  ad as Zt,
  dx as st,
  fW as N,
  fX as At,
  e1 as $t,
  fY as v,
  dP as xt,
  dB as Pe,
  dy as De,
  fZ as bt,
  f_ as Jt,
  f$ as Qt,
  g0 as en,
  aq as Pt,
  dz as Ot,
  dD as tn,
  dE as Ue,
  dF as kt,
  e0 as yt,
  g1 as nn,
  d$ as et,
  dC as jt,
  b5 as on,
  dG as Oe,
  g2 as rn,
  ey as ft,
  dY as ln,
  dU as St,
  g3 as sn,
  g4 as an,
  g5 as cn,
  g6 as un,
  g7 as dn,
  g8 as pn,
  g9 as Vt,
  eb as fn,
  ep as wt,
  eC as gn,
  J as mn,
  ga as hn,
  gb as Bt,
  gc as xn,
  gd as dt,
  dA as bn,
  a3 as vn,
  I as Je,
  di as yn,
} from './index-C8UyLGsD.js';
import {
  u as Rt,
  a as Sn,
  b as wn,
  g as Rn,
  C as Tn,
  c as In,
  I as Mn,
  s as qe,
} from './getPseudoElementBounds-D4ZSmtDt.js';
import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { e as En } from './index-yRquFwd4.js';
import { aI as Cn, aK as An, a0 as Pn, be as Tt } from '../vendor/vendor-icons-BHMUH78i.js';
import {
  s as Qe,
  g as gt,
  h as On,
  u as kn,
  a as Ft,
  b as Lt,
  c as jn,
  d as Vn,
  i as mt,
  e as Bn,
  j as Fn,
  f as Ln,
  r as Hn,
  k as Dn,
  l as pt,
  m as ht,
  n as Un,
} from './styles-D1jYbijK.js';
import {
  u as Nn,
  a as zn,
  b as Wn,
  I as qn,
  c as Yn,
  F as Gn,
  C as Xn,
} from './useOpenInteractionType-BsDcqr8f.js';
const E = Kt(({ css: e, cssVar: n }) => ({
    arrow: e`
    display: flex;
    width: 12px;
    height: 6px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  `,
    borderless: ne(
      it.variantBorderless,
      e`
      --lobe-select-open-bg: ${n.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorFillTertiary} 55%, transparent);
    `,
    ),
    clear: e`
    display: inline-flex;
    align-items: center;

    color: ${n.colorTextTertiary};

    opacity: 0;

    transition: opacity 150ms ${n.motionEaseOut};

    &:hover {
      color: ${n.colorTextSecondary};
    }
  `,
    empty: e``,
    filled: ne(
      it.variantFilled,
      e`
      --lobe-select-open-bg: ${n.colorFillSecondary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorFillTertiary} 55%, transparent);
    `,
    ),
    group: e``,
    groupLabel: e``,
    icon: e`
    display: inline-flex;
    align-items: center;
    transition: transform 150ms ${n.motionEaseOut};

    &[data-popup-open] {
      transform: rotate(180deg);
    }
  `,
    item: e``,
    itemBoldSelected: e`
    &[data-selected] {
      font-weight: 600;
    }
  `,
    itemIndicator: e`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    color: ${n.colorPrimary};
  `,
    itemText: e``,
    list: e`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    max-height: var(--lobe-select-available-height, var(--available-height));
    padding-block: 0;
  `,
    outlined: ne(
      it.variantOutlined,
      e`
      --lobe-select-open-bg: ${n.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorBgContainer} 75%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorBgContainer} 60%, transparent);
    `,
    ),
    popup: e`
    --lobe-select-available-height: min(
      var(--available-height),
      var(--lobe-select-popup-max-height, var(--available-height))
    );

    transform-origin: var(--transform-origin);

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    transition:
      opacity 150ms ${n.motionEaseOut},
      transform 150ms ${n.motionEaseOut};

    &[data-starting-style],
    &[data-ending-style] {
      transform: scaleY(0.92);
      opacity: 0;
    }
  `,
    positioner: e`
    z-index: 1100;
    outline: none;
  `,
    prefix: e`
    display: inline-flex;
    align-items: center;
    color: ${n.colorTextSecondary};
  `,
    scrollArrow: e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 16px;

    color: ${n.colorTextSecondary};

    background: ${n.colorBgElevated};
  `,
    search: e`
    cursor: text;

    display: flex;
    align-items: center;

    min-height: 36px;
    margin-inline: -4px;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${n.colorFillSecondary};
  `,
    searchInput: e`
    flex: 1;

    min-width: 0;
    padding-block: 0;
    padding-inline: 4px;
    border: 0;

    font-size: 14px;
    line-height: 20px;
    color: ${n.colorText};

    background: transparent;
    outline: none;

    &::placeholder {
      color: ${n.colorTextPlaceholder};
    }
  `,
    shadow: it.shadow,
    suffix: e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${n.colorTextSecondary};
  `,
    tag: e`
    display: inline-flex;
    align-items: center;

    max-width: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border-radius: ${n.borderRadiusSM};

    font-size: 12px;
    line-height: 20px;
    color: ${n.colorText};

    background: ${n.colorFillTertiary};
  `,
    tags: e`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  `,
    trigger: e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    border: 1px solid transparent;
    border-radius: ${n.borderRadius};

    font-family: inherit;
    color: ${n.colorText};

    background: transparent;
    outline: none;

    transition: all 150ms ${n.motionEaseOut};

    &:not([data-disabled], [data-readonly])[data-popup-open],
    &:not([data-disabled], [data-readonly])[data-open],
    &:not([data-disabled], [data-readonly])[data-state='open'],
    &:not([data-disabled], [data-readonly])[aria-expanded='true'] {
      background: var(--lobe-select-open-bg, ${n.colorFillTertiary});
    }

    &:focus-visible {
      outline: 2px solid ${n.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover [data-role='lobe-select-clear'] {
      opacity: 1;
    }

    &[data-placeholder] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${n.colorTextDisabled};
      background: var(--lobe-select-disabled-bg, transparent);

      &:hover {
        background: var(--lobe-select-disabled-bg, transparent);
      }
    }

    &[data-readonly] {
      cursor: default;
      color: ${n.colorTextSecondary};
      background: var(--lobe-select-readonly-bg, transparent);

      &:hover {
        background: var(--lobe-select-readonly-bg, transparent);
      }
    }

    &[data-disabled] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }
  `,
    triggerLarge: e`
    min-height: 40px;
    padding-block: 6px;
    padding-inline: 12px;

    font-size: 16px;
    line-height: 24px;
  `,
    triggerMiddle: e`
    min-height: 32px;
    padding-block: 4px;
    padding-inline: 11px;

    font-size: 14px;
    line-height: 20px;
  `,
    triggerSmall: e`
    min-height: 24px;
    padding-block: 0;
    padding-inline: 8px;

    font-size: 12px;
    line-height: 18px;
  `,
    value: e`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &[data-placeholder] {
      color: ${n.colorTextPlaceholder};
    }
  `,
    valueText: e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  })),
  _n = Zt(E.trigger, {
    defaultVariants: { shadow: !1, size: 'middle', variant: 'outlined' },
    variants: {
      shadow: { false: null, true: E.shadow },
      size: { large: E.triggerLarge, middle: E.triggerMiddle, small: E.triggerSmall },
      variant: { borderless: E.borderless, filled: E.filled, outlined: E.outlined },
    },
  }),
  Ht = t.createContext(null),
  Dt = t.createContext(null);
function Ne() {
  const e = t.useContext(Ht);
  if (e === null) throw new Error(st(60));
  return e;
}
function Ut() {
  const e = t.useContext(Dt);
  if (e === null) throw new Error(st(61));
  return e;
}
const m = {
  id: N((e) => e.id),
  modal: N((e) => e.modal),
  multiple: N((e) => e.multiple),
  items: N((e) => e.items),
  itemToStringLabel: N((e) => e.itemToStringLabel),
  itemToStringValue: N((e) => e.itemToStringValue),
  isItemEqualToValue: N((e) => e.isItemEqualToValue),
  value: N((e) => e.value),
  open: N((e) => e.open),
  mounted: N((e) => e.mounted),
  forceMount: N((e) => e.forceMount),
  transitionStatus: N((e) => e.transitionStatus),
  openMethod: N((e) => e.openMethod),
  activeIndex: N((e) => e.activeIndex),
  selectedIndex: N((e) => e.selectedIndex),
  isActive: N((e, n) => e.activeIndex === n),
  isSelected: N((e, n, h) => {
    const l = e.isItemEqualToValue,
      G = e.value;
    return e.multiple
      ? Array.isArray(G) && G.some((y) => gt(y, h, l))
      : e.selectedIndex === n && e.selectedIndex !== null
        ? !0
        : gt(G, h, l);
  }),
  isSelectedByFocus: N((e, n) => e.selectedIndex === n),
  popupProps: N((e) => e.popupProps),
  triggerProps: N((e) => e.triggerProps),
  triggerElement: N((e) => e.triggerElement),
  positionerElement: N((e) => e.positionerElement),
  listElement: N((e) => e.listElement),
  scrollUpArrowVisible: N((e) => e.scrollUpArrowVisible),
  scrollDownArrowVisible: N((e) => e.scrollDownArrowVisible),
  hasScrollArrows: N((e) => e.hasScrollArrows),
  serializedValue: N((e) => {
    const { multiple: n, value: h, itemToStringValue: l } = e;
    return n && Array.isArray(h) && h.length === 0 ? '' : Qe(h, l);
  }),
};
function Kn(e) {
  const {
      id: n,
      value: h,
      defaultValue: l = null,
      onValueChange: G,
      open: y,
      defaultOpen: c = !1,
      onOpenChange: u,
      name: C,
      disabled: k = !1,
      readOnly: A = !1,
      required: B = !1,
      modal: b = !0,
      actionsRef: le,
      inputRef: j,
      onOpenChangeComplete: $,
      items: _,
      multiple: R = !1,
      itemToStringLabel: V,
      itemToStringValue: f,
      isItemEqualToValue: J = On,
      highlightItemOnHover: be = !0,
      children: se,
    } = e,
    { clearErrors: P } = kn(),
    {
      setDirty: z,
      shouldValidateOnChange: ye,
      validityData: ie,
      setFilled: O,
      name: fe,
      disabled: ae,
      validation: S,
    } = Ft(),
    { controlId: i } = Lt(),
    I = jn({ id: n }),
    W = ae || k,
    H = fe ?? C,
    [a, ce] = Rt({ controlled: h, default: R ? (l ?? yt) : l, name: 'Select', state: 'value' }),
    [g, me] = Rt({ controlled: y, default: c, name: 'Select', state: 'open' }),
    he = t.useRef([]),
    D = t.useRef([]),
    K = t.useRef(null),
    d = t.useRef(null),
    x = t.useRef(0),
    F = t.useRef(null),
    q = t.useRef([]),
    X = t.useRef(!1),
    Q = t.useRef(!1),
    ue = t.useRef(null),
    ge = t.useRef({ allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }),
    Ie = t.useRef(!1),
    { mounted: de, setMounted: Y, transitionStatus: ve } = At(g),
    { openMethod: Se, triggerProps: Z, reset: U } = Nn(g),
    p = $t(
      () =>
        new nn({
          id: I,
          modal: b,
          multiple: R,
          itemToStringLabel: V,
          itemToStringValue: f,
          isItemEqualToValue: J,
          value: a,
          open: g,
          mounted: de,
          transitionStatus: ve,
          items: _,
          forceMount: !1,
          openMethod: null,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          triggerProps: {},
          triggerElement: null,
          positionerElement: null,
          listElement: null,
          scrollUpArrowVisible: !1,
          scrollDownArrowVisible: !1,
          hasScrollArrows: !1,
        }),
    ).current,
    xe = v(p, m.activeIndex),
    pe = v(p, m.selectedIndex),
    we = v(p, m.triggerElement),
    ee = v(p, m.positionerElement),
    Ae = t.useMemo(() => (R && Array.isArray(a) && a.length === 0 ? '' : Qe(a, f)), [R, a, f]),
    tt = t.useMemo(() => (R && Array.isArray(a) ? a.map((w) => Qe(w, f)) : Qe(a, f)), [R, a, f]),
    Xe = xt(p.state.triggerElement);
  Vn({ id: I, commit: S.commit, value: a, controlRef: Xe, name: H, getValue: () => tt });
  const Re = t.useRef(a);
  (Pe(() => {
    a !== Re.current && p.set('forceMount', !0);
  }, [p, a]),
    Pe(() => {
      O(a !== null);
    }, [a, O]),
    Pe(
      function () {
        if (g) return;
        const oe = q.current;
        if (R) {
          const Be = Array.isArray(a) ? a : [];
          if (Be.length === 0) {
            p.set('selectedIndex', null);
            return;
          }
          const o = Be[Be.length - 1],
            r = mt(oe, o, J);
          p.set('selectedIndex', r === -1 ? null : r);
          return;
        }
        const Ve = mt(oe, a, J);
        p.set('selectedIndex', Ve === -1 ? null : Ve);
      },
      [R, g, a, q, J, p],
    ),
    Bn(a, () => {
      (P(H), z(a !== ie.initialValue), ye() ? S.commit(a) : S.commit(a, !0));
    }));
  const ze = De((w, oe) => {
      if ((u?.(w, oe), !oe.isCanceled && (me(w), !w && p.state.activeIndex !== null))) {
        const Ve = he.current[p.state.activeIndex];
        queueMicrotask(() => {
          Ve?.setAttribute('tabindex', '-1');
        });
      }
    }),
    We = De(() => {
      (Y(!1), p.set('activeIndex', null), U(), $?.(!1));
    });
  (bt({
    enabled: !le,
    open: g,
    ref: K,
    onComplete() {
      g || We();
    },
  }),
    t.useImperativeHandle(le, () => ({ unmount: We }), [We]));
  const ke = De((w, oe) => {
      (G?.(w, oe), !oe.isCanceled && ce(w));
    }),
    Me = De(() => {
      const w = p.state.listElement || K.current;
      if (!w) return;
      const oe = w.scrollTop,
        Ve = w.scrollTop + w.clientHeight,
        Be = oe > 1,
        o = Ve < w.scrollHeight - 1;
      (p.state.scrollUpArrowVisible !== Be && p.set('scrollUpArrowVisible', Be),
        p.state.scrollDownArrowVisible !== o && p.set('scrollDownArrowVisible', o));
    }),
    Te = Jt({ open: g, onOpenChange: ze, elements: { reference: we, floating: ee } }),
    Fe = zn(Te, { enabled: !A && !W, event: 'mousedown' }),
    _e = Qt(Te, { bubbles: !1 }),
    nt = Sn(Te, {
      enabled: !A && !W,
      listRef: he,
      activeIndex: xe,
      selectedIndex: pe,
      disabledIndices: yt,
      onNavigate(w) {
        (w === null && !g) || p.set('activeIndex', w);
      },
      focusItemOnHover: !1,
    }),
    Ke = wn(Te, {
      enabled: !A && !W && (g || !R),
      listRef: D,
      activeIndex: xe,
      selectedIndex: pe,
      onMatch(w) {
        g ? p.set('activeIndex', w) : ke(q.current[w], Ue('none'));
      },
      onTypingChange(w) {
        X.current = w;
      },
    }),
    { getReferenceProps: je, getFloatingProps: Ee, getItemProps: Ye } = en([Fe, _e, nt, Ke]),
    Le = t.useMemo(() => Pt(je(), Z), [je, Z]);
  (Fn(() => {
    p.update({ popupProps: Ee(), triggerProps: Le });
  }),
    Pe(() => {
      p.update({
        id: I,
        modal: b,
        multiple: R,
        value: a,
        open: g,
        mounted: de,
        transitionStatus: ve,
        popupProps: Ee(),
        triggerProps: Le,
        items: _,
        itemToStringLabel: V,
        itemToStringValue: f,
        isItemEqualToValue: J,
        openMethod: Se,
      });
    }, [p, I, b, R, a, g, de, ve, Ee, Le, _, V, f, J, Se]));
  const He = t.useMemo(
      () => ({
        store: p,
        name: H,
        required: B,
        disabled: W,
        readOnly: A,
        multiple: R,
        itemToStringLabel: V,
        itemToStringValue: f,
        highlightItemOnHover: be,
        setValue: ke,
        setOpen: ze,
        listRef: he,
        popupRef: K,
        scrollHandlerRef: d,
        handleScrollArrowVisibility: Me,
        scrollArrowsMountedCountRef: x,
        getItemProps: Ye,
        events: Te.context.events,
        valueRef: F,
        valuesRef: q,
        labelsRef: D,
        typingRef: X,
        selectionRef: ge,
        selectedItemTextRef: ue,
        validation: S,
        onOpenChangeComplete: $,
        keyboardActiveRef: Q,
        alignItemWithTriggerActiveRef: Ie,
        initialValueRef: Re,
      }),
      [p, H, B, W, A, R, V, f, be, ke, ze, Ye, Te.context.events, S, $, Me],
    ),
    Ge = Ot(j, S.inputRef),
    ot = R && Array.isArray(a) && a.length > 0,
    Ze = t.useMemo(
      () =>
        !R || !Array.isArray(a) || !H
          ? null
          : a.map((w) => {
              const oe = Qe(w, f);
              return s.jsx('input', { type: 'hidden', name: H, value: oe }, oe);
            }),
      [R, a, H, f],
    );
  return s.jsx(Ht.Provider, {
    value: He,
    children: s.jsxs(Dt.Provider, {
      value: Te,
      children: [
        se,
        s.jsx('input', {
          ...S.getInputValidationProps({
            onFocus() {
              p.state.triggerElement?.focus();
            },
            onChange(w) {
              if (w.nativeEvent.defaultPrevented) return;
              const oe = w.target.value,
                Ve = Ue(kt, w.nativeEvent);
              function Be() {
                if (R) return;
                const o = q.current.find((r) => Qe(r, f).toLowerCase() === oe.toLowerCase());
                o != null && (z(o !== ie.initialValue), ke(o, Ve), ye() && S.commit(o));
              }
              (p.set('forceMount', !0), queueMicrotask(Be));
            },
          }),
          'id': n || i || void 0,
          'name': R ? void 0 : H,
          'value': Ae,
          'disabled': W,
          'required': B && !ot,
          'readOnly': A,
          'ref': Ge,
          'style': tn,
          'tabIndex': -1,
          'aria-hidden': !0,
        }),
        Ze,
      ],
    }),
  });
}
const at = 2,
  Zn = { ...rn, ...Ln, value: () => null },
  $n = t.forwardRef(function (n, h) {
    const { render: l, className: G, disabled: y = !1, nativeButton: c = !0, ...u } = n,
      { setTouched: C, setFocused: k, validationMode: A, state: B, disabled: b } = Ft(),
      { labelId: le } = Lt(),
      {
        store: j,
        setOpen: $,
        selectionRef: _,
        validation: R,
        readOnly: V,
        alignItemWithTriggerActiveRef: f,
        disabled: J,
        keyboardActiveRef: be,
      } = Ne(),
      se = b || J || y,
      P = v(j, m.open),
      z = v(j, m.value),
      ye = v(j, m.triggerProps),
      ie = v(j, m.positionerElement),
      O = v(j, m.listElement),
      fe = v(j, m.serializedValue),
      ae = xt(ie),
      S = t.useRef(null),
      i = et(),
      I = et(),
      { getButtonProps: W, buttonRef: H } = jt({ disabled: se, native: c }),
      a = De((d) => {
        j.set('triggerElement', d);
      }),
      ce = Ot(h, S, H, a),
      g = et(),
      me = et();
    t.useEffect(() => {
      if (P)
        return (
          me.start(200, () => {
            ((_.current.allowUnselectedMouseUp = !0),
              g.start(200, () => {
                _.current.allowSelectedMouseUp = !0;
              }));
          }),
          () => {
            (g.clear(), me.clear());
          }
        );
      ((_.current = { allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }), I.clear());
    }, [P, _, I, g, me]);
    const he = t.useMemo(() => O?.id ?? on(ie)?.id, [O, ie]),
      D = Pt(
        ye,
        {
          'role': 'combobox',
          'aria-expanded': P ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-controls': P ? he : void 0,
          'aria-labelledby': le,
          'aria-readonly': V || void 0,
          'tabIndex': se ? -1 : 0,
          'ref': ce,
          'onFocus'(d) {
            (k(!0),
              P && f.current && $(!1, Ue(ln, d.nativeEvent)),
              i.start(0, () => {
                j.set('forceMount', !0);
              }));
          },
          'onBlur'() {
            (C(!0), k(!1), A === 'onBlur' && R.commit(z));
          },
          'onPointerMove'() {
            be.current = !1;
          },
          'onKeyDown'() {
            be.current = !0;
          },
          'onMouseDown'(d) {
            if (P) return;
            const x = ft(d.currentTarget);
            function F(q) {
              if (!S.current) return;
              const X = q.target;
              if (St(S.current, X) || St(ae.current, X) || X === S.current) return;
              const Q = Rn(S.current);
              (q.clientX >= Q.left - at &&
                q.clientX <= Q.right + at &&
                q.clientY >= Q.top - at &&
                q.clientY <= Q.bottom + at) ||
                $(!1, Ue(sn, q));
            }
            I.start(0, () => {
              x.addEventListener('mouseup', F, { once: !0 });
            });
          },
        },
        R.getValidationProps,
        u,
        W,
      );
    D.role = 'combobox';
    const K = t.useMemo(
      () => ({ ...B, open: P, disabled: se, value: z, readOnly: V, placeholder: !fe }),
      [B, P, se, z, V, fe],
    );
    return Oe('button', n, { ref: [h, S], state: K, stateAttributesMapping: Zn, props: D });
  }),
  Jn = { value: () => null },
  Qn = t.forwardRef(function (n, h) {
    const { className: l, render: G, children: y, ...c } = n,
      { store: u, valueRef: C } = Ne(),
      k = v(u, m.value),
      A = v(u, m.items),
      B = v(u, m.itemToStringLabel),
      b = v(u, m.serializedValue),
      le = t.useMemo(() => ({ value: k, placeholder: !b }), [k, b]),
      j = typeof y == 'function' ? y(k) : (y ?? (Array.isArray(k) ? Hn(k, B) : Dn(k, A, B)));
    return Oe('span', n, {
      state: le,
      ref: [h, C],
      props: [{ children: j }, c],
      stateAttributesMapping: Jn,
    });
  }),
  eo = t.forwardRef(function (n, h) {
    const { className: l, render: G, ...y } = n,
      { store: c } = Ne(),
      u = v(c, m.open),
      C = t.useMemo(() => ({ open: u }), [u]);
    return Oe('span', n, {
      state: C,
      ref: h,
      props: [{ 'aria-hidden': !0, 'children': '▼' }, y],
      stateAttributesMapping: an,
    });
  }),
  to = t.createContext(void 0),
  no = t.forwardRef(function (n, h) {
    const { store: l } = Ne(),
      G = v(l, m.mounted),
      y = v(l, m.forceMount);
    return G || y ? s.jsx(to.Provider, { value: !0, children: s.jsx(cn, { ref: h, ...n }) }) : null;
  }),
  Nt = t.createContext(void 0);
function zt() {
  const e = t.useContext(Nt);
  if (!e) throw new Error(st(59));
  return e;
}
function ut(e, n) {
  e && Object.assign(e.style, n);
}
const Wt = { position: 'relative', maxHeight: '100%', overflowX: 'hidden', overflowY: 'auto' },
  oo = { position: 'fixed' },
  ro = t.forwardRef(function (n, h) {
    const {
        anchor: l,
        positionMethod: G = 'absolute',
        className: y,
        render: c,
        side: u = 'bottom',
        align: C = 'center',
        sideOffset: k = 0,
        alignOffset: A = 0,
        collisionBoundary: B = 'clipping-ancestors',
        collisionPadding: b,
        arrowPadding: le = 5,
        sticky: j = !1,
        disableAnchorTracking: $,
        alignItemWithTrigger: _ = !0,
        collisionAvoidance: R = un,
        ...V
      } = n,
      {
        store: f,
        listRef: J,
        labelsRef: be,
        alignItemWithTriggerActiveRef: se,
        selectedItemTextRef: P,
        valuesRef: z,
        initialValueRef: ye,
        popupRef: ie,
        setValue: O,
      } = Ne(),
      fe = Ut(),
      ae = v(f, m.open),
      S = v(f, m.mounted),
      i = v(f, m.modal),
      I = v(f, m.value),
      W = v(f, m.openMethod),
      H = v(f, m.positionerElement),
      a = v(f, m.triggerElement),
      ce = v(f, m.isItemEqualToValue),
      g = t.useRef(null),
      me = t.useRef(null),
      [he, D] = t.useState(_),
      K = S && he && W !== 'touch';
    (!S && he !== _ && D(_),
      Pe(() => {
        S ||
          (m.scrollUpArrowVisible(f.state) && f.set('scrollUpArrowVisible', !1),
          m.scrollDownArrowVisible(f.state) && f.set('scrollDownArrowVisible', !1));
      }, [f, S]),
      t.useImperativeHandle(se, () => K),
      Wn((K || i) && ae && W !== 'touch', a));
    const d = dn({
        anchor: l,
        floatingRootContext: fe,
        positionMethod: G,
        mounted: S,
        side: u,
        sideOffset: k,
        align: C,
        alignOffset: A,
        arrowPadding: le,
        collisionBoundary: B,
        collisionPadding: b,
        sticky: j,
        disableAnchorTracking: $ ?? K,
        collisionAvoidance: R,
        keepMounted: !0,
      }),
      x = K ? 'none' : d.side,
      F = K ? oo : d.positionerStyles,
      q = t.useMemo(() => {
        const Y = {};
        return (
          ae || (Y.pointerEvents = 'none'),
          { role: 'presentation', hidden: !S, style: { ...F, ...Y } }
        );
      }, [ae, S, F]),
      X = t.useMemo(
        () => ({ open: ae, side: x, align: d.align, anchorHidden: d.anchorHidden }),
        [ae, x, d.align, d.anchorHidden],
      ),
      Q = De((Y) => {
        f.set('positionerElement', Y);
      }),
      ue = Oe('div', n, { ref: [h, Q], state: X, stateAttributesMapping: Vt, props: [q, V] }),
      ge = t.useRef(0),
      Ie = De((Y) => {
        if ((Y.size === 0 && ge.current === 0) || z.current.length === 0) return;
        const ve = ge.current;
        if (((ge.current = Y.size), Y.size === ve)) return;
        const Se = Ue(kt);
        if (ve !== 0 && !f.state.multiple && I !== null && mt(z.current, I, ce) === -1) {
          const U = ye.current,
            xe = U != null && pt(z.current, U, ce) ? U : null;
          (O(xe, Se), xe === null && (f.set('selectedIndex', null), (P.current = null)));
        }
        if (ve !== 0 && f.state.multiple && Array.isArray(I)) {
          const Z = I.filter((U) => pt(z.current, U, ce));
          (Z.length !== I.length || Z.some((U) => !pt(I, U, ce))) &&
            (O(Z, Se), Z.length === 0 && (f.set('selectedIndex', null), (P.current = null)));
        }
        if (ae && K) {
          f.update({ scrollUpArrowVisible: !1, scrollDownArrowVisible: !1 });
          const Z = { height: '' };
          (ut(H, Z), ut(ie.current, Z));
        }
      }),
      de = t.useMemo(
        () => ({
          ...d,
          side: x,
          alignItemWithTriggerActive: K,
          setControlledAlignItemWithTrigger: D,
          scrollUpArrowRef: g,
          scrollDownArrowRef: me,
        }),
        [d, x, K, D],
      );
    return s.jsx(Tn, {
      elementsRef: J,
      labelsRef: be,
      onMapChange: Ie,
      children: s.jsxs(Nt.Provider, {
        value: de,
        children: [S && i && s.jsx(qn, { inert: pn(!ae), cutout: a }), ue],
      }),
    });
  });
function qt(e) {
  const n = e.currentTarget.getBoundingClientRect();
  return (
    n.top + 1 <= e.clientY &&
    e.clientY <= n.bottom - 1 &&
    n.left + 1 <= e.clientX &&
    e.clientX <= n.right - 1
  );
}
const lo = { ...Vt, ...Bt },
  so = t.forwardRef(function (n, h) {
    const { render: l, className: G, ...y } = n,
      {
        store: c,
        popupRef: u,
        onOpenChangeComplete: C,
        setOpen: k,
        valueRef: A,
        selectedItemTextRef: B,
        keyboardActiveRef: b,
        multiple: le,
        handleScrollArrowVisibility: j,
        scrollHandlerRef: $,
      } = Ne(),
      {
        side: _,
        align: R,
        alignItemWithTriggerActive: V,
        setControlledAlignItemWithTrigger: f,
        scrollDownArrowRef: J,
        scrollUpArrowRef: be,
      } = zt(),
      se = Yn() != null,
      P = Ut(),
      z = et(),
      ye = v(c, m.id),
      ie = v(c, m.open),
      O = v(c, m.mounted),
      fe = v(c, m.popupProps),
      ae = v(c, m.transitionStatus),
      S = v(c, m.triggerElement),
      i = v(c, m.positionerElement),
      I = v(c, m.listElement),
      W = t.useRef(0),
      H = t.useRef(!1),
      a = t.useRef(0),
      ce = t.useRef(!1),
      g = t.useRef({}),
      me = fn(),
      he = De((x) => {
        if (!i || !u.current || !ce.current) return;
        if (H.current || !V) {
          j();
          return;
        }
        const F = i.style.top === '0px',
          q = i.style.bottom === '0px',
          X = i.getBoundingClientRect().height,
          Q = ft(i),
          ue = getComputedStyle(i),
          ge = parseFloat(ue.marginTop),
          Ie = parseFloat(ue.marginBottom),
          de = Q.documentElement.clientHeight - ge - Ie,
          Y = x.scrollTop,
          ve = x.scrollHeight,
          Se = x.clientHeight,
          Z = ve - Se;
        let U = null,
          p = null,
          xe = !1;
        if (F) {
          const pe = Z - Y,
            we = X + pe,
            ee = Math.min(we, de);
          ((U = ee), ee !== de ? (p = Z) : (xe = !0));
        } else if (q) {
          const pe = Y - 0,
            we = X + pe,
            ee = Math.min(we, de),
            Ae = we - de;
          ((U = ee), ee !== de ? (p = 0) : ((xe = !0), Y < Z && (p = Y - (pe - Ae))));
        }
        (U != null && (i.style.height = `${U}px`),
          p != null && (x.scrollTop = p),
          xe && (H.current = !0),
          j());
      });
    (t.useImperativeHandle($, () => he, [he]),
      bt({
        open: ie,
        ref: u,
        onComplete() {
          ie && C?.(!0);
        },
      }));
    const D = t.useMemo(
      () => ({ open: ie, transitionStatus: ae, side: _, align: R }),
      [ie, ae, _, R],
    );
    (Pe(() => {
      !i ||
        !u.current ||
        Object.keys(g.current).length ||
        (g.current = {
          top: i.style.top || '0',
          left: i.style.left || '0',
          right: i.style.right,
          height: i.style.height,
          bottom: i.style.bottom,
          minHeight: i.style.minHeight,
          maxHeight: i.style.maxHeight,
          marginTop: i.style.marginTop,
          marginBottom: i.style.marginBottom,
        });
    }, [u, i]),
      Pe(() => {
        O ||
          V ||
          ((ce.current = !1), (H.current = !1), (W.current = 0), (a.current = 0), ut(i, g.current));
      }, [O, V, i, u]),
      Pe(() => {
        const x = u.current;
        if (!(!O || !S || !i || !x)) {
          if (!V) {
            ((ce.current = !0), me.request(j));
            return;
          }
          queueMicrotask(() => {
            const F = getComputedStyle(i),
              q = getComputedStyle(x),
              X = ft(S),
              Q = wt(i),
              ue = S.getBoundingClientRect(),
              ge = i.getBoundingClientRect(),
              Ie = ue.left,
              de = ue.height,
              Y = I || x,
              ve = Y.scrollHeight,
              Se = parseFloat(q.borderBottomWidth),
              Z = parseFloat(F.marginTop) || 10,
              U = parseFloat(F.marginBottom) || 10,
              p = parseFloat(F.minHeight) || 100,
              xe = 5,
              pe = 5,
              we = 20,
              ee = X.documentElement.clientHeight - Z - U,
              Ae = X.documentElement.clientWidth,
              tt = ee - ue.bottom + de,
              Xe = B.current,
              Re = A.current;
            let ze = 0,
              We = 0;
            if (Xe && Re) {
              const He = Re.getBoundingClientRect(),
                Ge = Xe.getBoundingClientRect(),
                ot = He.left - Ie,
                Ze = Ge.left - ge.left,
                w = He.top - ue.top + He.height / 2,
                oe = Ge.top - ge.top + Ge.height / 2;
              ((ze = ot - Ze), (We = oe - w));
            }
            const ke = tt + We + U + Se;
            let Me = Math.min(ee, ke);
            const Te = ee - Z - U,
              Fe = ke - Me,
              _e = Math.max(xe, Ie + ze),
              nt = Ae - pe,
              Ke = Math.max(0, _e + ge.width - nt);
            ((i.style.left = `${_e - Ke}px`),
              (i.style.height = `${Me}px`),
              (i.style.maxHeight = 'auto'),
              (i.style.marginTop = `${Z}px`),
              (i.style.marginBottom = `${U}px`),
              (x.style.height = '100%'));
            const je = Y.scrollHeight - Y.clientHeight,
              Ee = Fe >= je;
            Ee && (Me = Math.min(ee, ge.height) - (Fe - je));
            const Ye = ue.top < we || ue.bottom > ee - we || Me < Math.min(ve, p),
              Le = (Q.visualViewport?.scale ?? 1) !== 1 && gn;
            if (Ye || Le) {
              ((ce.current = !0), ut(i, g.current), mn.flushSync(() => f(!1)));
              return;
            }
            if (Ee) {
              const He = Math.max(0, ee - ke);
              ((i.style.top = ge.height >= Te ? '0' : `${He}px`),
                (i.style.height = `${Me}px`),
                (Y.scrollTop = Y.scrollHeight - Y.clientHeight),
                (W.current = Math.max(p, Me)));
            } else ((i.style.bottom = '0'), (W.current = Math.max(p, Me)), (Y.scrollTop = Fe));
            (W.current === ee && (H.current = !0),
              j(),
              setTimeout(() => {
                ce.current = !0;
              }));
          });
        }
      }, [c, O, i, S, A, B, u, j, V, f, me, J, be, I]),
      t.useEffect(() => {
        if (!V || !i || !O) return;
        const x = wt(i);
        function F(q) {
          k(!1, Ue(hn, q));
        }
        return (
          x.addEventListener('resize', F),
          () => {
            x.removeEventListener('resize', F);
          }
        );
      }, [k, V, i, O]));
    const K = {
        ...(I
          ? { 'role': 'presentation', 'aria-orientation': void 0 }
          : { 'role': 'listbox', 'aria-multiselectable': le || void 0, 'id': `${ye}-list` }),
        onKeyDown(x) {
          ((b.current = !0), se && Xn.has(x.key) && x.stopPropagation());
        },
        onMouseMove() {
          b.current = !1;
        },
        onPointerLeave(x) {
          if (qt(x) || x.pointerType === 'touch') return;
          const F = x.currentTarget;
          z.start(0, () => {
            (c.set('activeIndex', null), F.focus({ preventScroll: !0 }));
          });
        },
        onScroll(x) {
          I || $.current?.(x.currentTarget);
        },
        ...(V && { style: I ? { height: '100%' } : Wt }),
      },
      d = Oe('div', n, {
        ref: [h, u],
        state: D,
        stateAttributesMapping: lo,
        props: [fe, K, xn(ae), { className: !I && V ? ht.className : void 0 }, y],
      });
    return s.jsxs(t.Fragment, {
      children: [
        ht.element,
        s.jsx(Gn, { context: P, modal: !1, disabled: !O, restoreFocus: !0, children: d }),
      ],
    });
  }),
  It = t.forwardRef(function (n, h) {
    const { className: l, render: G, ...y } = n,
      { store: c, scrollHandlerRef: u } = Ne(),
      { alignItemWithTriggerActive: C } = zt(),
      k = v(c, m.hasScrollArrows),
      A = v(c, m.openMethod),
      B = v(c, m.multiple),
      le = {
        'id': `${v(c, m.id)}-list`,
        'role': 'listbox',
        'aria-multiselectable': B || void 0,
        'onScroll'($) {
          u.current?.($.currentTarget);
        },
        ...(C && { style: Wt }),
        'className': k && A !== 'touch' ? ht.className : void 0,
      },
      j = De(($) => {
        c.set('listElement', $);
      });
    return Oe('div', n, { ref: [h, j], props: [le, y] });
  }),
  Yt = t.createContext(void 0);
function vt() {
  const e = t.useContext(Yt);
  if (!e) throw new Error(st(57));
  return e;
}
const Mt = t.memo(
    t.forwardRef(function (n, h) {
      const {
          render: l,
          className: G,
          value: y = null,
          label: c,
          disabled: u = !1,
          nativeButton: C = !1,
          ...k
        } = n,
        A = t.useRef(null),
        B = In({ label: c, textRef: A, indexGuessBehavior: Mn.GuessFromOrder }),
        {
          store: b,
          getItemProps: le,
          setOpen: j,
          setValue: $,
          selectionRef: _,
          typingRef: R,
          valuesRef: V,
          keyboardActiveRef: f,
          multiple: J,
          highlightItemOnHover: be,
        } = Ne(),
        se = et(),
        P = v(b, m.isActive, B.index),
        z = v(b, m.isSelected, B.index, y),
        ye = v(b, m.isSelectedByFocus, B.index),
        ie = v(b, m.isItemEqualToValue),
        O = B.index,
        fe = O !== -1,
        ae = t.useRef(null),
        S = xt(O);
      (Pe(() => {
        if (!fe) return;
        const d = V.current;
        return (
          (d[O] = y),
          () => {
            delete d[O];
          }
        );
      }, [fe, O, y, V]),
        Pe(() => {
          if (!fe) return;
          const d = b.state.value;
          let x = d;
          (J && Array.isArray(d) && d.length > 0 && (x = d[d.length - 1]),
            x !== void 0 && gt(x, y, ie) && b.set('selectedIndex', O));
        }, [fe, O, J, ie, b, y]));
      const i = t.useMemo(() => ({ disabled: u, selected: z, highlighted: P }), [u, z, P]),
        I = le({ active: P, selected: z });
      ((I.onFocus = void 0), (I.id = void 0));
      const W = t.useRef(null),
        H = t.useRef('mouse'),
        a = t.useRef(!1),
        { getButtonProps: ce, buttonRef: g } = jt({
          disabled: u,
          focusableWhenDisabled: !0,
          native: C,
        });
      function me(d) {
        const x = b.state.value;
        if (J) {
          const F = Array.isArray(x) ? x : [],
            q = z ? Un(F, y, ie) : [...F, y];
          $(q, Ue(dt, d));
        } else ($(y, Ue(dt, d)), j(!1, Ue(dt, d)));
      }
      const he = {
          'role': 'option',
          'aria-selected': z,
          'aria-disabled': u || void 0,
          'tabIndex': P ? 0 : -1,
          'onFocus'() {
            b.set('activeIndex', O);
          },
          'onMouseEnter'() {
            !f.current && b.state.selectedIndex === null && b.set('activeIndex', O);
          },
          'onMouseMove'() {
            be && b.set('activeIndex', O);
          },
          'onMouseLeave'(d) {
            !be ||
              f.current ||
              qt(d) ||
              se.start(0, () => {
                b.state.activeIndex === O && b.set('activeIndex', null);
              });
          },
          'onTouchStart'() {
            _.current = { allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 };
          },
          'onKeyDown'(d) {
            ((W.current = d.key), b.set('activeIndex', O));
          },
          'onClick'(d) {
            ((a.current = !1),
              !(d.type === 'keydown' && W.current === null) &&
                (u ||
                  (W.current === ' ' && R.current) ||
                  (H.current !== 'touch' && !P) ||
                  ((W.current = null), me(d.nativeEvent))));
          },
          'onPointerEnter'(d) {
            H.current = d.pointerType;
          },
          'onPointerDown'(d) {
            ((H.current = d.pointerType), (a.current = !0));
          },
          'onMouseUp'(d) {
            if (u) return;
            if (a.current) {
              a.current = !1;
              return;
            }
            const x = !_.current.allowSelectedMouseUp && z,
              F = !_.current.allowUnselectedMouseUp && !z;
            x || F || (H.current !== 'touch' && !P) || me(d.nativeEvent);
          },
        },
        D = Oe('div', n, { ref: [g, h, B.ref, ae], state: i, props: [I, he, k, ce] }),
        K = t.useMemo(
          () => ({ selected: z, indexRef: S, textRef: A, selectedByFocus: ye, hasRegistered: fe }),
          [z, S, A, ye, fe],
        );
      return s.jsx(Yt.Provider, { value: K, children: D });
    }),
  ),
  Et = t.forwardRef(function (n, h) {
    const l = n.keepMounted ?? !1,
      { selected: G } = vt();
    return l || G ? s.jsx(io, { ...n, ref: h }) : null;
  }),
  io = t.memo(
    t.forwardRef((e, n) => {
      const { render: h, className: l, keepMounted: G, ...y } = e,
        { selected: c } = vt(),
        u = t.useRef(null),
        { transitionStatus: C, setMounted: k } = At(c),
        A = t.useMemo(() => ({ selected: c, transitionStatus: C }), [c, C]),
        B = Oe('span', e, {
          ref: [n, u],
          state: A,
          props: [{ 'aria-hidden': !0, 'children': '✔️' }, y],
          stateAttributesMapping: Bt,
        });
      return (
        bt({
          open: c,
          ref: u,
          onComplete() {
            c || k(!1);
          },
        }),
        B
      );
    }),
  ),
  Ct = t.memo(
    t.forwardRef(function (n, h) {
      const { indexRef: l, textRef: G, selectedByFocus: y, hasRegistered: c } = vt(),
        { selectedItemTextRef: u } = Ne(),
        { className: C, render: k, ...A } = n,
        B = t.useCallback(
          (le) => {
            if (!le || !c) return;
            const j = u.current === null || !u.current.isConnected;
            (y || (j && l.current === 0)) && (u.current = le);
          },
          [u, l, y, c],
        );
      return Oe('div', n, { ref: [B, h, G], props: A });
    }),
  ),
  Gt = t.createContext(void 0);
function ao() {
  const e = t.useContext(Gt);
  if (e === void 0) throw new Error(st(56));
  return e;
}
const co = t.forwardRef(function (n, h) {
    const { className: l, render: G, ...y } = n,
      [c, u] = t.useState(),
      C = t.useMemo(() => ({ labelId: c, setLabelId: u }), [c, u]),
      k = Oe('div', n, { ref: h, props: [{ 'role': 'group', 'aria-labelledby': c }, y] });
    return s.jsx(Gt.Provider, { value: C, children: k });
  }),
  uo = t.forwardRef(function (n, h) {
    const { className: l, render: G, id: y, ...c } = n,
      { setLabelId: u } = ao(),
      C = bn(y);
    return (
      Pe(() => {
        u(C);
      }, [C, u]),
      Oe('div', n, { ref: h, props: [{ id: C }, c] })
    );
  }),
  lt = (e) => !!e.options,
  ct = (e) =>
    typeof e.label == 'string' || typeof e.label == 'number'
      ? String(e.label)
      : typeof e.value == 'string' || typeof e.value == 'number'
        ? String(e.value)
        : e.title
          ? e.title
          : '',
  po = (e) => e.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&'),
  fo = (e, n) => {
    if (!n || n.length === 0) return [e];
    const h = n.map(po).join('|');
    return e.split(new RegExp(h, 'g'));
  },
  go = (e) => e.reduce((n, h) => (lt(h) ? n + h.options.length + 1 : n + 1), 0),
  rt = (e) => e == null || e === '',
  Xt = t.memo(
    ({
      allowClear: e,
      autoFocus: n,
      className: h,
      classNames: l,
      defaultOpen: G,
      defaultValue: y,
      disabled: c,
      id: u,
      labelRender: C,
      listHeight: k = 512,
      listItemHeight: A,
      loading: B,
      mode: b,
      name: le,
      onChange: j,
      onOpenChange: $,
      onSelect: _,
      open: R,
      optionRender: V,
      options: f,
      placeholder: J,
      popupClassName: be,
      popupMatchSelectWidth: se,
      prefix: P,
      readOnly: z,
      required: ye,
      behaviorVariant: ie = 'default',
      selectedIndicatorVariant: O = 'check',
      shadow: fe,
      showSearch: ae,
      size: S = 'middle',
      style: i,
      suffixIcon: I,
      suffixIconProps: W,
      tokenSeparators: H,
      value: a,
      variant: ce,
      virtual: g,
    }) => {
      const { isDarkMode: me } = vn(),
        he = ce ?? (me ? 'filled' : 'outlined'),
        D = b === 'multiple' || b === 'tags',
        K = ie === 'item-aligned',
        [d, x] = t.useState(() => (y !== void 0 ? y : D ? [] : null)),
        F = t.useCallback(
          (o) =>
            D
              ? Array.isArray(o)
                ? o
                : o == null
                  ? []
                  : [o]
              : Array.isArray(o)
                ? (o[0] ?? null)
                : o === void 0
                  ? null
                  : o,
          [D],
        ),
        q = a !== void 0 ? a : d,
        X = t.useMemo(() => F(q), [q, F]),
        Q = t.useMemo(() => (D ? X : rt(X) ? [] : [X]), [D, X]),
        [ue, ge] = t.useState([]);
      t.useEffect(() => {
        b !== 'tags' && ue.length > 0 && ge([]);
      }, [b, ue.length]);
      const { resolvedOptions: Ie, optionMap: de } = t.useMemo(() => {
          const o = f ?? [],
            r = new Map(),
            M = (re) => {
              r.has(re.value) || r.set(re.value, re);
            };
          ((re) => {
            re.forEach(($e) => {
              lt($e) ? $e.options.forEach(M) : M($e);
            });
          })(o);
          const T = ue.filter((re) => !r.has(re.value));
          T.forEach(M);
          const te = [...o, ...T],
            Ce = Q.filter((re) => !r.has(re)).map((re) => ({ label: String(re), value: re }));
          return (
            Ce.forEach(M),
            { optionMap: r, resolvedOptions: Ce.length ? [...te, ...Ce] : te }
          );
        }, [ue, f, Q]),
        [Y, ve] = t.useState(!!G);
      t.useEffect(() => {
        R !== void 0 && ve(R);
      }, [R]);
      const Se = R ?? Y,
        Z = t.useCallback(
          (o) => {
            ($?.(o), R === void 0 && ve(o));
          },
          [$, R],
        ),
        [U, p] = t.useState(''),
        xe = !!(ae || b === 'tags');
      t.useEffect(() => {
        Se || p('');
      }, [Se]);
      const pe = t.useCallback(
          (o) => {
            const r = de.get(o);
            return (
              r ||
              (o && typeof o == 'object' && 'label' in o
                ? { label: o.label, value: o }
                : { label: String(o), value: o })
            );
          },
          [de],
        ),
        we = t.useRef(X);
      t.useEffect(() => {
        we.current = X;
      }, [X]);
      const ee = t.useCallback(
          (o) => {
            const r = F(o),
              M = we.current;
            if (D) {
              const L = Array.isArray(M) ? M : [],
                T = Array.isArray(r) ? r : [];
              (T.filter((te) => !L.some((Ce) => Object.is(Ce, te))).forEach((te) => {
                _?.(te, pe(te));
              }),
                a === void 0 && x(T),
                j?.(
                  T,
                  T.map((te) => pe(te)),
                ));
            } else
              (!rt(r) && !Object.is(M, r) && _?.(r, pe(r)),
                a === void 0 && x(r),
                j?.(r, rt(r) ? void 0 : pe(r)));
            we.current = r;
          },
          [pe, D, F, j, _, a],
        ),
        Ae = t.useCallback(
          (o) => {
            const r = o.map((T) => T.trim()).filter(Boolean);
            if (!r.length) return;
            const M = [...Q],
              L = r.filter((T) => !de.has(T));
            (L.length > 0 &&
              ge((T) => {
                const te = new Set(T.map((re) => re.value)),
                  Ce = [...T];
                return (
                  L.forEach((re) => {
                    te.has(re) || Ce.push({ label: re, value: re });
                  }),
                  Ce
                );
              }),
              r.forEach((T) => {
                M.some((te) => Object.is(te, T)) || M.push(T);
              }),
              M.length !== Q.length && ee(M));
          },
          [ee, de, Q],
        ),
        tt = t.useCallback(
          (o) => {
            const r = o.target.value;
            if (b === 'tags') {
              const M = fo(r, H);
              if (M.length > 1) {
                const L = M.pop() ?? '';
                (Ae(M.filter(Boolean)), p(L));
                return;
              }
            }
            p(r);
          },
          [Ae, b, H],
        ),
        Xe = t.useCallback(
          (o) => {
            if ((o.stopPropagation(), o.key === 'Escape')) {
              Z(!1);
              return;
            }
            if (b === 'tags') {
              if (o.key === 'Enter') {
                (o.preventDefault(), o.stopPropagation(), Ae([U]), p(''));
                return;
              }
              H?.includes(o.key) && (o.preventDefault(), o.stopPropagation(), Ae([U]), p(''));
            }
          },
          [Ae, Z, b, U, H],
        ),
        Re = t.useMemo(() => {
          if (!xe || !U.trim()) return Ie;
          const o = U.trim().toLowerCase();
          return ((M) =>
            M.map((L) => {
              if (lt(L)) {
                const T = L.options.filter((te) => ct(te).toLowerCase().includes(o));
                return T.length ? { ...L, options: T } : null;
              }
              return ct(L).toLowerCase().includes(o) ? L : null;
            }).filter(Boolean))(Ie);
        }, [Ie, U, xe]),
        ze = t.useCallback(
          (o) => {
            const r = F(o),
              M = J === void 0 ? null : s.jsx('span', { className: E.valueText, children: J });
            if (D) {
              const te = Array.isArray(r) ? r : [];
              return te.length === 0
                ? M
                : s.jsx('span', {
                    className: E.tags,
                    children: te.map((Ce, re) => {
                      const $e = pe(Ce),
                        _t = C ? C($e) : ($e.label ?? String(Ce));
                      return s.jsx(
                        'span',
                        { className: E.tag, children: _t },
                        `${String(Ce)}-${re}`,
                      );
                    }),
                  });
            }
            if (rt(r)) return M;
            const L = pe(r),
              T = C ? C(L) : (L.label ?? String(r));
            return s.jsx('span', { className: E.valueText, children: T });
          },
          [pe, D, C, F, J],
        ),
        We = D ? Q.length > 0 : !rt(X),
        ke = !!(e && We && !c && !z),
        Me = t.useCallback(
          (o) => {
            (o.preventDefault(), o.stopPropagation(), ee(D ? [] : null));
          },
          [ee, D],
        ),
        Te = t.useMemo(
          () =>
            P == null
              ? null
              : t.isValidElement(P) || typeof P == 'string' || typeof P == 'number'
                ? P
                : s.jsx(Je, { icon: P, size: 'small' }),
          [P],
        ),
        Fe = t.useMemo(
          () =>
            B
              ? s.jsx(Je, { spin: !0, icon: Cn, size: 'small' })
              : I === null
                ? null
                : t.isValidElement(I) || typeof I == 'string' || typeof I == 'number'
                  ? I
                  : s.jsx(Je, {
                      icon: I || An,
                      size: 'small',
                      ...W,
                      style: { pointerEvents: 'none', ...W?.style },
                    }),
          [B, I, W],
        ),
        _e = t.useMemo(() => {
          const o = K ? '80vh' : `${k}px`,
            r = {
              'maxHeight': o,
              'maxWidth': 'var(--available-width)',
              'minWidth': 'var(--anchor-width)',
              '--lobe-select-popup-max-height': o,
            };
          return se === void 0 || se === !0
            ? r
            : typeof se == 'number'
              ? { ...r, minWidth: se, width: se }
              : { ...r, minWidth: 'max-content' };
        }, [K, k, se]),
        nt = ne(_n({ shadow: fe, size: S, variant: he }), h, l?.root, l?.trigger),
        Ke = t.useRef(null),
        je = t.useRef(!1),
        Ee = t.useRef(null),
        Ye = t.useCallback((o) => {
          const { ref: r, ...M } = o;
          return s.jsx('div', {
            ...M,
            ref: (L) => {
              (L &&
                (L.scrollIntoView = (...T) => {
                  je.current || HTMLElement.prototype.scrollIntoView.call(L, ...T);
                }),
                typeof r == 'function' ? r(L) : r && 'current' in r && (r.current = L));
            },
          });
        }, []),
        Le = t.useCallback(() => {
          ((je.current = !0),
            Ee.current && clearTimeout(Ee.current),
            (Ee.current = setTimeout(() => {
              je.current = !1;
            }, 120)));
        }, []),
        He = t.useCallback(() => {
          if (!g || !je.current) return;
          const o = Ke.current,
            r = document.activeElement;
          o && r && o.contains(r) && o.focus({ preventScroll: !0 });
        }, [g]);
      t.useEffect(
        () => () => {
          Ee.current && clearTimeout(Ee.current);
        },
        [],
      );
      const Ge = t.useMemo(() => {
          if (!g) return;
          const o = go(Re),
            r = 6,
            M = A ?? (S === 'large' ? 40 : S === 'small' ? 28 : 32);
          return {
            height: `min(${Math.min(Math.max(o, 1), r) * M + 8}px, var(--lobe-select-available-height, var(--available-height)))`,
          };
        }, [Re, A, S, g]),
        ot = t.useMemo(() => {
          if (!g || Q.length === 0) return;
          const o = new Set(Q),
            r = [];
          let M = 0;
          return (
            Re.forEach((L) => {
              if (lt(L)) {
                (L.options.some((T) => o.has(T.value)) && r.push(M), (M += 1));
                return;
              }
              (o.has(L.value) && r.push(M), (M += 1));
            }),
            r.length ? r : void 0
          );
        }, [Re, Q, g]),
        Ze = ne(V ? qe.itemContent : qe.label, E.itemText, l?.itemText),
        w = O === 'bold';
      let oe = 0;
      const Ve = (o) =>
          o.map((r, M) => {
            if (lt(r))
              return s.jsxs(
                co,
                {
                  className: ne(E.group, l?.group),
                  children: [
                    s.jsx(uo, {
                      className: ne(qe.groupLabel, E.groupLabel, l?.groupLabel),
                      children: r.label,
                    }),
                    r.options.map((T) => {
                      const te = oe++;
                      return s.jsxs(
                        Mt,
                        {
                          disabled: T.disabled,
                          label: ct(T),
                          render: g ? Ye : void 0,
                          value: T.value,
                          className: ne(
                            qe.item,
                            E.item,
                            w && E.itemBoldSelected,
                            l?.item,
                            l?.option,
                            T.className,
                          ),
                          style: { minHeight: A, ...T.style },
                          children: [
                            s.jsx(Ct, {
                              className: Ze,
                              children: V ? V(T, { index: te }) : T.label,
                            }),
                            !w &&
                              s.jsx(Et, {
                                className: ne(E.itemIndicator, l?.itemIndicator),
                                children: s.jsx(Je, { icon: Tt, size: 'small' }),
                              }),
                          ],
                        },
                        `${String(T.value)}-${te}`,
                      );
                    }),
                  ],
                },
                `group-${M}`,
              );
            const L = oe++;
            return s.jsxs(
              Mt,
              {
                disabled: r.disabled,
                label: ct(r),
                render: g ? Ye : void 0,
                value: r.value,
                className: ne(
                  qe.item,
                  E.item,
                  w && E.itemBoldSelected,
                  l?.item,
                  l?.option,
                  r.className,
                ),
                style: { minHeight: A, ...r.style },
                children: [
                  s.jsx(Ct, { className: Ze, children: V ? V(r, { index: L }) : r.label }),
                  !w &&
                    s.jsx(Et, {
                      className: ne(E.itemIndicator, l?.itemIndicator),
                      children: s.jsx(Je, { icon: Tt, size: 'small' }),
                    }),
                ],
              },
              `${String(r.value)}-${L}`,
            );
          }),
        Be = yn();
      return s.jsxs(Kn, {
        disabled: c,
        id: u,
        modal: K,
        multiple: D,
        name: le,
        open: Se,
        readOnly: z,
        required: ye,
        value: X,
        onOpenChange: Z,
        onValueChange: ee,
        children: [
          s.jsxs($n, {
            autoFocus: n,
            className: nt,
            disabled: c,
            style: i,
            children: [
              Te != null && s.jsx('span', { className: ne(E.prefix, l?.prefix), children: Te }),
              s.jsx(Qn, { className: ne(E.value, l?.value), children: ze }),
              s.jsxs('span', {
                className: ne(E.suffix, l?.suffix),
                children: [
                  ke &&
                    s.jsx('span', {
                      'className': ne(E.clear, l?.clear),
                      'data-role': 'lobe-select-clear',
                      'onClick': Me,
                      'children': s.jsx(Je, { icon: Pn, size: 'small' }),
                    }),
                  Fe != null && s.jsx(eo, { className: ne(E.icon, l?.icon), children: Fe }),
                ],
              }),
            ],
          }),
          s.jsx(no, {
            container: Be,
            children: s.jsx(ro, {
              align: 'start',
              alignItemWithTrigger: K,
              className: E.positioner,
              side: 'bottom',
              sideOffset: 6,
              children: s.jsxs(so, {
                style: _e,
                className: ne(qe.popup, E.popup, be, l?.popup, l?.dropdown),
                children: [
                  xe &&
                    s.jsx('div', {
                      className: ne(E.search, l?.search),
                      children: s.jsx('input', {
                        className: E.searchInput,
                        placeholder: typeof J == 'string' ? J : void 0,
                        value: U,
                        onChange: tt,
                        onKeyDown: Xe,
                      }),
                    }),
                  (() => {
                    const o =
                      Re.length > 0
                        ? Ve(Re)
                        : s.jsx('div', {
                            className: ne(qe.item, qe.empty, E.empty, l?.empty),
                            children: 'No data',
                          });
                    return !g || Re.length === 0
                      ? s.jsx(It, {
                          'className': ne(E.list, l?.list),
                          'data-virtual': g || void 0,
                          'children': o,
                        })
                      : s.jsx(It, {
                          'className': ne(E.list, l?.list),
                          'data-virtual': g || void 0,
                          'ref': Ke,
                          'style': Ge,
                          'tabIndex': g ? -1 : void 0,
                          'onPointerDown': g ? Le : void 0,
                          'onScroll': g ? He : void 0,
                          'onTouchMove': g ? Le : void 0,
                          'onWheel': g ? Le : void 0,
                          'children': s.jsx(En, { itemSize: A, keepMounted: ot, children: o }),
                        });
                  })(),
                ],
              }),
            }),
          }),
        ],
      });
    },
  );
Xt.displayName = 'Select';
var Ro = Xt;
export { Ro as S };
