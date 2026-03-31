import { f as N, ai as w, j as v, F as _, Z as P } from './index-C8UyLGsD.js';
import { B as $ } from './Block-DDntSWi2.js';
import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { bC as I, be as L } from '../vendor/vendor-icons-BHMUH78i.js';
const b = N(({ css: o, cssVar: r }) => ({
    checked: o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,
    disabled: o`
      cursor: not-allowed;

      border-color: ${r.colorFill};

      color: ${r.colorText};

      opacity: 0.25;
      background-color: ${r.colorFill};
    `,
    indeterminate: o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,
    root: o`
      cursor: pointer;
      display: inline-flex;
    `,
  })),
  B = ({
    checked: o,
    defaultChecked: r,
    onChange: k,
    size: l = 16,
    className: m,
    style: p,
    children: d,
    textProps: x,
    backgroundColor: n,
    classNames: t,
    styles: s,
    shape: i = 'square',
    disabled: c,
    indeterminate: e,
    ...u
  }) => {
    const [h, G] = w(r || !1, { defaultValue: r, onChange: k, value: o }),
      C = {
        borderRadius: i === 'square' ? `max(4px, ${Math.round(l / 4)}px)` : '50%',
        ...p,
        ...s?.checkbox,
      },
      g = (M) => {
        c || (M?.preventDefault(), G(!h));
      },
      f = e,
      y = !f && h,
      j = a.jsx($, {
        align: 'center',
        flex: 'none',
        height: l,
        justify: 'center',
        variant: 'outlined',
        width: l,
        className: v(b.root, y && b.checked, f && b.indeterminate, c && b.disabled, m, t?.checkbox),
        style: n && (y || f) ? { backgroundColor: n, borderColor: n, ...C } : { ...C },
        onClick: g,
        ...u,
        children: f
          ? a.jsx(I, {
              size: l,
              strokeWidth: 3,
              style: { transform: `scale(${i === 'square' ? 0.75 : 0.66})` },
            })
          : y
            ? a.jsx(L, {
                size: l,
                strokeWidth: 3,
                style: { transform: `scale(${i === 'square' ? 0.75 : 0.66})` },
              })
            : null,
      });
    return d
      ? a.jsxs(_, {
          horizontal: !0,
          align: 'center',
          className: t?.wrapper,
          gap: Math.floor(l / 2),
          style: { cursor: c ? 'not-allowed' : 'pointer', userSelect: 'none', ...s?.wrapper },
          onClick: g,
          children: [
            j,
            a.jsx(P, {
              as: 'span',
              className: v(t?.text),
              style: s?.text,
              ...x,
              type: c ? 'secondary' : x?.type,
              children: d,
            }),
          ],
        })
      : j;
  };
B.displayName = 'Checkbox';
var S = B;
const q = ({
  defaultValue: o,
  disabled: r,
  onChange: k,
  options: l,
  textProps: m,
  value: p,
  shape: d,
  size: x,
  ...n
}) => {
  const [t, s] = w(o || [], { defaultValue: o, onChange: k, value: p }),
    i = (e, u) => {
      s(u ? [...t, e] : t.filter((h) => h !== e));
    },
    c = l.map((e) => (typeof e == 'string' ? { disabled: !1, label: e, value: e } : e));
  return a.jsx(_, {
    horizontal: !0,
    align: 'center',
    gap: 16,
    wrap: 'wrap',
    ...n,
    children: c.map((e) =>
      a.jsx(
        S,
        {
          checked: t.includes(e.value),
          disabled: r || e.disabled,
          shape: d,
          size: x,
          textProps: m,
          onChange: (u) => i(e.value, u),
          children: e.label,
        },
        String(e.value),
      ),
    ),
  });
};
q.displayName = 'CheckboxGroup';
var R = q;
const F = S;
F.Group = R;
var O = F;
export { O as C, R as a };
