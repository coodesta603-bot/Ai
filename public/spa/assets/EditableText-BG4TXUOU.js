import { F as y, A as I, ai as T, j as R } from './index-C8UyLGsD.js';
import { I as k } from './Input-C_EgL0SG.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aX as z, aY as A, aZ as N } from '../vendor/vendor-icons-BHMUH78i.js';
import { f as P } from './index-BJ9KbyB2.js';
const F = r.memo(
  ({
    value: n,
    onChange: f,
    onValueChanging: d,
    onChangeEnd: m,
    onCompositionEnd: p,
    onCompositionStart: x,
    onPressEnter: h,
    onFocus: C,
    submitIcon: l,
    style: g,
    texts: u,
    ...j
  }) => {
    const i = r.useRef(null),
      [s, a] = r.useState(n || ''),
      o = r.useRef(!1);
    r.useEffect(() => {
      n !== void 0 && a(n);
    }, [n]);
    const c = () => {
      (f?.(s), i?.current?.blur(), m?.(s));
    };
    return e.jsx(k, {
      autoFocus: !0,
      ref: i,
      value: s,
      style: { width: '100%', ...g },
      suffix:
        n === s
          ? e.jsx('span', {})
          : e.jsxs(y, {
              horizontal: !0,
              gap: 2,
              style: { marginRight: -4, zIndex: 1 },
              children: [
                e.jsx(I, {
                  icon: z,
                  size: 'small',
                  title: u?.reset || 'Reset',
                  onClick: (t) => {
                    (t.preventDefault(), a(n || ''));
                  },
                }),
                e.jsx(I, {
                  icon: l || A,
                  size: 'small',
                  title: u?.submit || 'Submit',
                  variant: 'filled',
                  onClick: (t) => {
                    (t.preventDefault(), c());
                  },
                }),
              ],
            }),
      onFocus: C,
      onChange: (t) => {
        (a(t.target.value), d?.(t.target.value));
      },
      onCompositionEnd: (t) => {
        ((o.current = !1), p?.(t));
      },
      onCompositionStart: (t) => {
        ((o.current = !0), x?.(t));
      },
      onPressEnter: (t) => {
        !t.shiftKey && !o.current && (t.preventDefault(), c(), h?.(t));
      },
      ...j,
    });
  },
);
F.displayName = 'ControlInput';
var B = F;
const S = r.memo(
  ({
    value: n,
    showEditIcon: f = !0,
    onChange: d,
    editing: m,
    onEditingChange: p,
    onChangeEnd: x,
    onFocus: h,
    onBlur: C,
    className: l,
    inputProps: g,
    onValueChanging: u,
    gap: j = 8,
    style: i,
    size: s = 'small',
    styles: a,
    classNames: o,
    variant: c = 'borderless',
    ...t
  }) => {
    const [E, b] = T(!1, { onChange: p, value: m });
    P(
      'esc',
      () => {
        b(!1);
      },
      { enableOnFormTags: !0, enabled: E, preventDefault: !0 },
    );
    const v = r.useMemo(() => {
        if (!s) return 32;
        switch (s) {
          case 'large':
            return 40;
          case 'middle':
            return 32;
          case 'small':
            return 24;
        }
      }, [s]),
      _ = e.jsx(B, {
        className: R(l, o?.input),
        size: s,
        value: n,
        variant: c,
        style: { height: v, ...i, ...a?.input },
        onBlur: C,
        onChange: d,
        onFocus: h,
        onValueChanging: u,
        onChangeEnd: (D) => {
          (x?.(D), b(!1));
        },
        ...g,
      }),
      w = e.jsxs(e.Fragment, {
        children: [
          e.jsx('span', { children: n }),
          f &&
            e.jsx(I, {
              icon: N,
              size: 'small',
              title: 'Edit',
              onClick: () => {
                b(!E);
              },
            }),
        ],
      });
    return e.jsx(y, {
      horizontal: !0,
      align: 'center',
      className: R(l, o?.container),
      gap: j,
      style: { height: v, width: '100%', ...i, ...a?.container },
      ...t,
      children: E ? _ : w,
    });
  },
);
S.displayName = 'EditableText';
var Y = S;
export { Y as E };
