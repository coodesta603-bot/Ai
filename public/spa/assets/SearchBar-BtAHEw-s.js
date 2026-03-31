import { f as E, j as c, ae as D, ai as F, I as P, bj as z } from './index-C8UyLGsD.js';
import { I as H } from './Input-C_EgL0SG.js';
import { S as J } from './Spotlight-D7beHiMz.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as L } from './index-BJ9KbyB2.js';
import { aI as M, aJ as O } from '../vendor/vendor-icons-BHMUH78i.js';
const i = E(({ css: t, cssVar: r }) => ({
    icon: t`
    color: ${r.colorTextPlaceholder};
  `,
    search: t`
    position: relative;
    max-width: 100%;
  `,
    tag: c(
      D.blur,
      t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: ${r.colorTextDescription};

      kbd {
        color: inherit;
      }
    `,
    ),
  })),
  h = o.memo(
    ({
      defaultValue: t = '',
      spotlight: r,
      className: x,
      value: g,
      onInputChange: S,
      placeholder: j,
      enableShortKey: l,
      shortKey: a = 'mod+k',
      onSearch: y,
      loading: u,
      style: k,
      onChange: v,
      onBlur: I,
      onPressEnter: N,
      onFocus: T,
      styles: { input: b, shortKey: w } = {},
      classNames: { input: C, shortKey: _ } = {},
      ...B
    }) => {
      const [n, m] = F(t, { defaultValue: t, onChange: S, value: g }),
        [R, p] = o.useState(!0),
        f = o.useRef(null),
        d = o.useMemo(() => (a.includes('+') ? a : `mod+${a}`), [a]);
      return (
        L(
          d,
          () => {
            l && f.current?.focus();
          },
          { enableOnFormTags: !0, enabled: !!l && !!a, preventDefault: !0 },
        ),
        s.jsxs('div', {
          className: c(i.search, x),
          style: k,
          children: [
            r && s.jsx(J, {}),
            s.jsx(H, {
              allowClear: !0,
              className: C,
              placeholder: j ?? 'Type keywords...',
              ref: f,
              style: b,
              value: n,
              prefix: s.jsx(P, {
                className: i.icon,
                icon: u ? M : O,
                size: 'small',
                spin: u,
                style: { marginRight: 4 },
              }),
              onBlur: (e) => {
                (I?.(e), m(e.target.value), p(!0));
              },
              onChange: (e) => {
                (m(e.target.value), v?.(e));
              },
              onFocus: (e) => {
                (T?.(e), p(!1));
              },
              onPressEnter: (e) => {
                (N?.(e), y?.(n));
              },
              ...B,
            }),
            l && R && !n && s.jsx(z, { compact: !0, className: c(i.tag, _), keys: d, style: w }),
          ],
        })
      );
    },
  );
h.displayName = 'SearchBar';
var W = h;
export { W as S };
