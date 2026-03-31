import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { p as e, C as g } from './ColorSwatches-u52Ih7q1.js';
import { g as u, ak as p } from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
const k = r.memo(({ defaultValue: t = p, value: a, onChange: c, onValuesChange: i, ...n }) => {
  const { t: o } = u('color'),
    s = r.useMemo(
      () => [
        { color: 'rgba(0, 0, 0, 0)', title: o('default') },
        { color: e.red, title: o('red') },
        { color: e.orange, title: o('orange') },
        { color: e.gold, title: o('gold') },
        { color: e.yellow, title: o('yellow') },
        { color: e.lime, title: o('lime') },
        { color: e.green, title: o('green') },
        { color: e.cyan, title: o('cyan') },
        { color: e.blue, title: o('blue') },
        { color: e.geekblue, title: o('geekblue') },
        { color: e.purple, title: o('purple') },
        { color: e.magenta, title: o('magenta') },
        { color: e.volcano, title: o('volcano') },
      ],
      [o],
    );
  return m.jsx(g, {
    enableColorPicker: !0,
    colors: s,
    defaultValue: t,
    value: a,
    onChange: (l) => {
      (c?.(l), i?.(l));
    },
    ...n,
  });
});
export { k as B };
