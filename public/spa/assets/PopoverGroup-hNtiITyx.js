import { o as I, p as R, q as P } from './index-C8UyLGsD.js';
import { p as S } from './parseTrigger-BVMOpYJv.js';
import {
  c as h,
  u as E,
  P as T,
  a as z,
  b as A,
  d as M,
  e as V,
  f as q,
  g as D,
  h as W,
  i as _,
  j as B,
} from './Popover-Cg4CTqoX.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
const f = ({
  children: x,
  contentLayoutAnimation: l = !1,
  disableDestroyOnInvalidTrigger: w = !1,
  disableZeroOriginGuard: g = !1,
  ...y
}) => {
  const [{ handle: s, key: j }, C] = r.useState(() => ({ handle: h(), key: 0 })),
    p = r.useRef(null),
    N = r.useCallback(() => {
      ((p.current = null), C(({ key: t }) => ({ handle: h(), key: t + 1 })));
    }, []),
    i = r.useCallback(() => {
      s.close();
    }, [s]),
    O = r.useMemo(() => ({ close: i }), [i]),
    k = r.useCallback((t) => {
      p.current?.onOpenChange?.(t);
    }, []);
  (I(s.store, N, { enabled: !w }), R(s.store, { enabled: !g }));
  const c = E();
  return o.jsx(T, {
    value: s,
    children: o.jsxs(z, {
      value: y,
      children: [
        x,
        o.jsx(
          A,
          {
            handle: s,
            onOpenChange: k,
            children: ({ payload: t }) => {
              const e = t ?? null;
              if (((p.current = e), !e?.content)) return null;
              const d = e.arrow ?? !1,
                u = e.placement ?? 'top',
                { openOnHover: b } = S(e.trigger ?? 'hover'),
                v = P[u] ?? P.top,
                G = d ? 10 : 6,
                a = {
                  arrow: e.classNames?.arrow,
                  popup: e.className,
                  positioner: e.classNames?.root,
                  viewport: e.classNames?.content,
                },
                n = {
                  arrow: e.styles?.arrow,
                  positioner: { ...e.styles?.root, zIndex: e.zIndex ?? 1100 },
                  viewport: e.styles?.content,
                },
                m = o.jsx(M, { value: O, children: e.content }),
                H = o.jsx(V, {
                  'align': v.align,
                  'className': a.positioner,
                  'data-layout-animation': l || void 0,
                  'hoverTrigger': b,
                  'placement': u,
                  'side': v.side,
                  'sideOffset': G,
                  'style': n.positioner,
                  ...e.positionerProps,
                  'children': o.jsxs(q, {
                    'className': a.popup,
                    'data-layout-animation': l || void 0,
                    ...e.popupProps,
                    'children': [
                      d && o.jsx(D, { className: a.arrow, style: n.arrow, children: W }),
                      l
                        ? o.jsx(_, { className: a.viewport, style: n.viewport, children: m })
                        : o.jsx('div', { className: a.viewport, style: n.viewport, children: m }),
                    ],
                  }),
                });
              return c ? o.jsx(B, { container: c, children: H }) : null;
            },
          },
          j,
        ),
      ],
    }),
  });
};
f.displayName = 'PopoverGroup';
var X = f;
export { X as P };
