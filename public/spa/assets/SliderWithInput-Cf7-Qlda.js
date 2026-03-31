import { F } from './index-C8UyLGsD.js';
import { I as v } from './InputNumber-DGocrXJO.js';
import { r as B } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as l } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as O } from './index-BvIL68ic.js';
import { b as p } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const d = B.memo(
  ({
    step: t,
    value: r,
    onChange: u,
    max: a,
    min: o,
    defaultValue: i,
    size: e,
    controls: N,
    gap: f = 16,
    style: c,
    className: x,
    classNames: h,
    styles: y,
    disabled: m,
    unlimitedInput: S = !1,
    changeOnWheel: b,
    ...g
  }) => {
    const n = (s) => {
        Number.isNaN(s) || p(s) || u?.(s);
      },
      { slider: j, input: C, ...I } = h || {},
      { slider: W, input: _, ...E } = y || {};
    return l.jsxs(F, {
      align: 'center',
      className: x,
      direction: 'horizontal',
      gap: f,
      style: c,
      children: [
        l.jsx(O, {
          className: j,
          classNames: I,
          defaultValue: i,
          disabled: m,
          max: a,
          min: o,
          step: t,
          style: { flex: 1, margin: e === 'small' ? 0 : void 0, ...W },
          styles: E,
          tooltip: { open: !1 },
          value: typeof r == 'number' ? r : 0,
          onChange: n,
          ...g,
        }),
        l.jsx(v, {
          changeOnWheel: b,
          className: C,
          controls: e !== 'small' || N,
          defaultValue: i,
          disabled: m,
          max: S ? void 0 : a,
          min: o,
          size: e,
          step: Number.isNaN(t) || p(t) ? void 0 : t,
          style: { flex: 1, maxWidth: e === 'small' ? 40 : 64, ..._ },
          value: typeof r == 'number' ? r : 0,
          onChange: (s) => n(Number(s)),
        }),
      ],
    });
  },
);
d.displayName = 'SliderWithInput';
var G = d;
export { G as S };
