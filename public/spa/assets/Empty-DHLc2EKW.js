import { a3 as M, I as D, k as s, a4 as F, F as c, a5 as S, Z as u } from './index-C8UyLGsD.js';
import { B as b } from './Block-DDntSWi2.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
const y = ({
  title: d,
  description: i,
  icon: n,
  image: r,
  emoji: o,
  imageSize: a = 48,
  iconColor: E,
  action: x,
  children: h,
  imageProps: f,
  align: g,
  actionProps: j,
  type: m = 'default',
  titleProps: _,
  descriptionProps: T,
  ...v
}) => {
  const { isDarkMode: I } = M(),
    t = m === 'page',
    l = g || (t ? 'flex-start' : 'center'),
    p = l === 'center',
    k = S.PRESENTED_IMAGE_SIMPLE,
    B =
      r || o || n
        ? r ||
          e.jsxs(b, {
            align: 'center',
            flex: 'none',
            height: a,
            justify: 'center',
            variant: 'outlined',
            width: a,
            ...f,
            style: { marginBottom: 4, ...f?.style },
            children: [
              n &&
                e.jsx(D, {
                  icon: n,
                  size: a * 0.66,
                  color: E || (I ? s.colorTextQuaternary : s.colorTextSecondary),
                }),
              o && e.jsx(F, { emoji: o, size: a * 0.75, type: 'anim' }),
            ],
          })
        : k;
  return e.jsxs(c, {
    align: l,
    gap: 8,
    padding: 16,
    ...v,
    children: [
      B,
      e.jsxs(c, {
        align: l,
        gap: t ? 4 : 1,
        children: [
          d &&
            e.jsx(u, {
              align: p ? 'center' : void 0,
              fontSize: t ? 24 : 16,
              weight: 'bold',
              ..._,
              children: d,
            }),
          i &&
            e.jsx(u, {
              align: p ? 'center' : void 0,
              color: t ? s.colorTextSecondary : s.colorTextDescription,
              fontSize: t ? 16 : 14,
              ...T,
              children: i,
            }),
        ],
      }),
      h,
      x && e.jsx(c, { gap: 4, ...j, children: x }),
    ],
  });
};
y.displayName = 'Empty';
var R = y;
export { R as E };
