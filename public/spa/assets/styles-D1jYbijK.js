import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  ez as s,
  dx as M,
  b7 as C,
  dy as R,
  dB as d,
  J as v,
  dA as j,
  f8 as A,
} from './index-C8UyLGsD.js';
import { j as O } from '../vendor/vendor-motion-Dbb9VQJo.js';
function q(e) {
  const n = u.useRef(!0);
  n.current && ((n.current = !1), e());
}
const z = (e, n) => Object.is(e, n);
function h(e, n, t) {
  return e == null || n == null ? Object.is(e, n) : t(e, n);
}
function Y(e, n, t) {
  return !e || e.length === 0 ? !1 : e.some((r) => (r === void 0 ? !1 : h(r, n, t)));
}
function $(e, n, t) {
  return !e || e.length === 0 ? -1 : e.findIndex((r) => (r === void 0 ? !1 : h(r, n, t)));
}
function G(e, n, t) {
  return e.filter((r) => !h(r, n, t));
}
let E = (function (e) {
  return (
    (e.disabled = 'data-disabled'),
    (e.valid = 'data-valid'),
    (e.invalid = 'data-invalid'),
    (e.touched = 'data-touched'),
    (e.dirty = 'data-dirty'),
    (e.filled = 'data-filled'),
    (e.focused = 'data-focused'),
    e
  );
})({});
const D = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  T = {
    valid(e) {
      return e === null ? null : e ? { [E.valid]: '' } : { [E.invalid]: '' };
    },
  },
  L = u.createContext({
    invalid: void 0,
    name: void 0,
    validityData: { state: D, errors: [], error: '', value: '', initialValue: null },
    setValidityData: s,
    disabled: void 0,
    touched: !1,
    setTouched: s,
    dirty: !1,
    setDirty: s,
    filled: !1,
    setFilled: s,
    focused: !1,
    setFocused: s,
    validate: () => null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: () => !1,
    state: { disabled: !1, valid: null, touched: !1, dirty: !1, filled: !1, focused: !1 },
    markedDirtyRef: { current: !1 },
    validation: {
      getValidationProps: (e = C) => e,
      getInputValidationProps: (e = C) => e,
      inputRef: { current: null },
      commit: async () => {},
    },
  });
function S(e = !0) {
  const n = u.useContext(L);
  if (n.setValidityData === s && !e) throw new Error(M(28));
  return n;
}
function w(e, n) {
  return { ...e, state: { ...e.state, valid: !n && e.state.valid } };
}
const k = u.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: s,
  validationMode: 'onSubmit',
  submitAttemptedRef: { current: !1 },
});
function _() {
  return u.useContext(k);
}
function H(e) {
  const { enabled: n = !0, value: t, id: r, name: l, controlRef: a, commit: o } = e,
    { formRef: f } = _(),
    { invalid: x, markedDirtyRef: g, validityData: y, setValidityData: V } = S(),
    c = R(e.getValue);
  (d(() => {
    if (!n) return;
    let i = t;
    (i === void 0 && (i = c()),
      y.initialValue === null && i !== null && V((m) => ({ ...m, initialValue: i })));
  }, [n, V, t, y.initialValue, c]),
    d(() => {
      !n ||
        !r ||
        f.current.fields.set(r, {
          getValue: c,
          name: l,
          controlRef: a,
          validityData: w(y, x),
          validate() {
            let i = t;
            (i === void 0 && (i = c()), (g.current = !0), v.flushSync(() => o(i)));
          },
        });
    }, [o, a, n, f, c, r, x, g, l, y, t]),
    d(() => {
      const i = f.current.fields;
      return () => {
        r && i.delete(r);
      };
    }, [f, r]));
}
const B = u.createContext({
  controlId: void 0,
  setControlId: s,
  labelId: void 0,
  setLabelId: s,
  messageIds: [],
  setMessageIds: s,
  getDescriptionProps: (e) => e,
});
function P() {
  return u.useContext(B);
}
function K(e = {}) {
  const { id: n, implicit: t = !1, controlRef: r } = e,
    { controlId: l, setControlId: a } = P(),
    o = j(n);
  return (
    d(() => {
      if (!((!t && !n) || a === s)) {
        if (t) {
          const f = r?.current;
          A(f) && f.closest('label') != null ? a(n ?? null) : a(l ?? o);
        } else n && a(n);
        return () => {
          n && a(void 0);
        };
      }
    }, [n, r, l, a, t, o]),
    l ?? o
  );
}
function I(e) {
  if (e == null) return '';
  if (typeof e == 'string') return e;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
function F(e) {
  return e != null && e.length > 0 && typeof e[0] == 'object' && e[0] != null && 'items' in e[0];
}
function b(e, n) {
  if (n && e != null) return n(e) ?? '';
  if (e && typeof e == 'object') {
    if ('label' in e && e.label != null) return String(e.label);
    if ('value' in e) return String(e.value);
  }
  return I(e);
}
function Q(e, n) {
  return n && e != null
    ? (n(e) ?? '')
    : e && typeof e == 'object' && 'value' in e && 'label' in e
      ? I(e.value)
      : I(e);
}
function W(e, n, t) {
  if (t && e != null) return t(e);
  if (e && typeof e == 'object' && 'label' in e && e.label != null) return e.label;
  if (n && !Array.isArray(n)) return n[e] ?? b(e, t);
  if (Array.isArray(n)) {
    const r = F(n) ? n.flatMap((l) => l.items) : n;
    if (e == null) {
      const l = r.find((a) => a.value == null);
      return l && l.label != null ? l.label : b(e, t);
    }
    if (typeof e != 'object') {
      const l = r.find((a) => a && a.value === e);
      return l && l.label != null ? l.label : b(e, t);
    }
    if ('value' in e) {
      const l = r.find((a) => a && a.value === e.value);
      if (l && l.label != null) return l.label;
    }
  }
  return b(e, t);
}
function X(e, n) {
  return !Array.isArray(e) || e.length === 0 ? '' : e.map((t) => b(t, n)).join(', ');
}
function Z(e, n) {
  const t = u.useRef(e),
    r = R(n);
  (d(() => {
    t.current !== e && r(t.current);
  }, [e, r]),
    d(() => {
      t.current = e;
    }, [e]));
}
const p = 'base-ui-disable-scrollbar',
  ee = {
    className: p,
    element: O.jsx('style', {
      href: p,
      precedence: 'base-ui:low',
      children: `.${p}{scrollbar-width:none}.${p}::-webkit-scrollbar{display:none}`,
    }),
  };
export {
  S as a,
  P as b,
  K as c,
  H as d,
  Z as e,
  T as f,
  h as g,
  z as h,
  $ as i,
  q as j,
  W as k,
  Y as l,
  ee as m,
  G as n,
  b as o,
  F as p,
  X as r,
  Q as s,
  _ as u,
};
