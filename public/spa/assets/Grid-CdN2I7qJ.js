import { f as c, F as x, j as n } from './index-C8UyLGsD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as f } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as i } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const u = c(
    ({ css: s }) => s`
    --rows: var(--grid-rows, 3);
    --max-item-width: var(--grid-max-item-width, 240px);
    --gap: var(--grid-gap, 1em);

    display: grid !important;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
        1fr
      )
    );
  `,
  ),
  e = ({
    className: s,
    gap: r = '1em',
    rows: t = 3,
    children: m,
    maxItemWidth: a = 240,
    ref: o,
    style: d,
    ...l
  }) => {
    const p = g.useMemo(
      () => ({
        '--grid-gap': i(r) ? r : `${r}px`,
        '--grid-max-item-width': i(a) ? a : `${a}px`,
        '--grid-rows': `${t}`,
      }),
      [r, a, t],
    );
    return f.jsx(x, {
      className: n(u, s),
      gap: r,
      ref: o,
      style: { ...p, ...d },
      ...l,
      children: m,
    });
  };
e.displayName = 'Grid';
var G = e;
export { G };
