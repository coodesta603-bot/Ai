import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  u as d,
  s as x,
  F as a,
  t as f,
  j as u,
  i as S,
  f as p,
  k as w,
} from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
const E = p(({ css: s }) => ({
    container: s`
    flex-grow: 1;
    align-self: center;
    transition: width 0.25s ${w.motionEaseInOut};
  `,
  })),
  y = r.memo(
    ({
      children: s,
      className: i,
      onChange: n,
      wrapperStyle: o,
      onClick: c,
      minWidth: l,
      ...m
    }) => {
      const e = d(x.wideScreen);
      return (
        r.useEffect(() => {
          n?.();
        }, [e]),
        t.jsx(a, {
          style: o,
          width: '100%',
          onClick: c,
          children: t.jsx(a, {
            className: u(E.container, i),
            paddingInline: 16,
            width: e ? '100%' : `min(${l || f}px, 100%)`,
            ...m,
            children: s,
          }),
        })
      );
    },
    S,
  );
export { y as W };
