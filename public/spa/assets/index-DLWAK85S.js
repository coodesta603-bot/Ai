import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { t as j, c as N, o as M } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aD as a, bm as F, be as X, am as Y } from './index-C8UyLGsD.js';
const { Option: E } = a;
function P(e) {
  return e?.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
}
const q = (e, R) => {
    const {
        prefixCls: _,
        className: i,
        style: u,
        popupClassName: d,
        dropdownClassName: m,
        children: f,
        dataSource: C,
        rootClassName: h,
        dropdownStyle: g,
        dropdownRender: b,
        popupRender: v,
        onDropdownVisibleChange: A,
        onOpenChange: W,
        styles: D,
        classNames: V,
        popupMatchSelectWidth: $,
        dropdownMatchSelectWidth: z,
      } = e,
      s = j(f),
      O = v || b,
      S = W || A,
      x = $ ?? z;
    let l;
    s.length === 1 && p.isValidElement(s[0]) && !P(s[0]) && ([l] = s);
    const B = l ? () => l : void 0;
    let c;
    s.length && P(s[0])
      ? (c = f)
      : (c = C
          ? C.map((n) => {
              if (p.isValidElement(n)) return n;
              switch (typeof n) {
                case 'string':
                  return p.createElement(E, { key: n, value: n }, n);
                case 'object': {
                  const { value: y } = n;
                  return p.createElement(E, { key: y, value: y }, n.text);
                }
                default:
                  return;
              }
            })
          : []);
    const { getPrefixCls: k } = p.useContext(F),
      r = k('select', _),
      G = { ...e, popupRender: O, onOpenChange: S, popupMatchSelectWidth: x },
      [t, o] = X([V], [D], { props: G }, { popup: { _default: 'root' } }),
      T = p.useMemo(
        () => ({
          root: N(`${r}-auto-complete`, i, h, t.root, { [`${r}-customize`]: l }),
          prefix: t.prefix,
          input: t.input,
          placeholder: t.placeholder,
          content: t.content,
          popup: { root: N(d, m, t.popup?.root), list: t.popup?.list, listItem: t.popup?.listItem },
        }),
        [r, i, h, t, d, m],
      ),
      U = p.useMemo(
        () => ({
          root: { ...o.root, ...u },
          input: o.input,
          prefix: o.prefix,
          placeholder: o.placeholder,
          content: o.content,
          popup: {
            root: { ...g, ...o.popup?.root },
            list: o.popup?.list,
            listItem: o.popup?.listItem,
          },
        }),
        [o, u, g],
      );
    return p.createElement(
      a,
      {
        ref: R,
        suffixIcon: null,
        ...M(e, ['dataSource', 'dropdownClassName', 'popupClassName']),
        prefixCls: r,
        classNames: T,
        styles: U,
        mode: a.SECRET_COMBOBOX_MODE_DO_NOT_USE,
        popupRender: O,
        onPopupVisibleChange: S,
        popupMatchSelectWidth: x,
        getInputElement: B,
      },
      c,
    );
  },
  w = p.forwardRef(q),
  { Option: H } = a,
  J = Y(w, 'popupAlign', (e) => M(e, ['visible'])),
  I = w;
I.Option = H;
I._InternalPanelDoNotUseOrYouWillBeFired = J;
export { I as A };
