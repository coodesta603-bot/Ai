import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { b4 as R, b5 as S, b6 as P, b7 as y } from './index-C8UyLGsD.js';
const T = new Map([
  ['select', 'listbox'],
  ['combobox', 'listbox'],
  ['label', !1],
]);
function w(t, u = {}) {
  const n = 'rootStore' in t ? t.rootStore : t,
    r = n.useState('open'),
    d = n.useState('floatingId'),
    I = n.useState('domReferenceElement'),
    p = n.useState('floatingElement'),
    { enabled: m = !0, role: o = 'dialog' } = u,
    M = R(),
    i = I?.id || M,
    a = s.useMemo(() => S(p)?.id || d, [p, d]),
    e = T.get(o) ?? o,
    b = P() != null,
    c = s.useMemo(
      () =>
        e === 'tooltip' || o === 'label'
          ? y
          : {
              'aria-haspopup': e === 'alertdialog' ? 'dialog' : e,
              'aria-expanded': 'false',
              ...(e === 'listbox' && { role: 'combobox' }),
              ...(e === 'menu' && b && { role: 'menuitem' }),
              ...(o === 'select' && { 'aria-autocomplete': 'none' }),
              ...(o === 'combobox' && { 'aria-autocomplete': 'list' }),
            },
      [e, b, o],
    ),
    f = s.useMemo(
      () =>
        e === 'tooltip' || o === 'label'
          ? { [`aria-${o === 'label' ? 'labelledby' : 'describedby'}`]: r ? a : void 0 }
          : {
              ...c,
              'aria-expanded': r ? 'true' : 'false',
              'aria-controls': r ? a : void 0,
              ...(e === 'menu' && { id: i }),
            },
      [e, a, r, i, o, c],
    ),
    g = s.useMemo(() => {
      const l = { id: a, ...(e && { role: e }) };
      return e === 'tooltip' || o === 'label'
        ? l
        : { ...l, ...(e === 'menu' && { 'aria-labelledby': i }) };
    }, [e, a, i, o]),
    x = s.useCallback(
      ({ active: l, selected: h }) => {
        const E = { role: 'option', ...(l && { id: `${a}-fui-option` }) };
        switch (o) {
          case 'select':
          case 'combobox':
            return { ...E, 'aria-selected': h };
        }
        return {};
      },
      [a, o],
    );
  return s.useMemo(
    () => (m ? { reference: f, floating: g, item: x, trigger: c } : {}),
    [m, f, g, c, x],
  );
}
function A(t) {
  const u = Array.isArray(t) ? t : [t],
    n = new Set(u.flatMap((r) => (r === 'both' ? ['hover', 'click'] : [r])));
  return { openOnClick: n.has('click'), openOnHover: n.has('hover') };
}
export { A as p, w as u };
