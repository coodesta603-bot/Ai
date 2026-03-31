import { ad as l, f as m, F as h, j as w } from './index-C8UyLGsD.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
const t = m(({ css: a }) => ({
    bottomShadow: a`
      mask-image: linear-gradient(
        180deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,
    leftShadow: a`
      mask-image: linear-gradient(
        270deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,
    rightShadow: a`
      mask-image: linear-gradient(
        90deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,
    root: a`
      scrollbar-width: none;
      position: relative;
      overflow: hidden;

      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `,
    topShadow: a`
      mask-image: linear-gradient(
        0deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,
  })),
  p = l(t.root, {
    defaultVariants: { position: 'bottom' },
    variants: {
      position: {
        top: t.topShadow,
        bottom: t.bottomShadow,
        left: t.leftShadow,
        right: t.rightShadow,
      },
    },
  }),
  r = s.memo(({ className: a, children: i, position: n = 'bottom', size: o = 40, ...e }) => {
    const d = s.useMemo(() => ({ '--mask-shadow-size': `${o}%` }), [o]);
    return c.jsx(h, {
      className: w(p({ position: n }), a),
      style: { ...d, ...e.style },
      ...e,
      children: i,
    });
  });
r.displayName = 'MaskShadow';
var f = r;
export { f as M };
