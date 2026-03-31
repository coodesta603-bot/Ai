import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as s, k as i, C as S, I as z, Z as B, j as D, f as I } from './index-C8UyLGsD.js';
import { S as f } from './index-DLsdvBKx.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { B as P } from './Block-DDntSWi2.js';
import { C as R } from './ContextMenuTrigger-B5O-u7Kh.js';
import { N as A } from './index-CAlKMb1V.js';
import './providerConfig-qS2Xx-oI.js';
const E = d.memo(({ padding: t = 6, height: n = 36, style: l, avatarSize: o = 28, ...a }) =>
    e.jsxs(s, {
      horizontal: !0,
      align: 'center',
      flex: 1,
      gap: 8,
      height: n,
      padding: t,
      style: l,
      ...a,
      children: [
        e.jsx(f.Button, {
          size: 'small',
          style: {
            borderRadius: i.borderRadius,
            height: o,
            maxHeight: o,
            maxWidth: o,
            minWidth: o,
          },
        }),
        e.jsx(s, {
          flex: 1,
          height: 16,
          children: e.jsx(f.Button, {
            active: !0,
            block: !0,
            size: 'small',
            style: {
              borderRadius: i.borderRadius,
              height: 16,
              margin: 0,
              maxHeight: 16,
              opacity: 0.5,
              padding: 0,
            },
          }),
        }),
      ],
    }),
  ),
  q = d.memo(({ rows: t = 3, ...n }) =>
    e.jsx(s, { gap: 2, ...n, children: Array.from({ length: t }).map((l, o) => e.jsx(E, {}, o)) }),
  ),
  L = (t) => t.metaKey || t.ctrlKey,
  c = 'nav-item-actions',
  O = I(({ css: t }) => ({
    container: t`
    user-select: none;
    overflow: hidden;
    min-width: 32px;

    .${c} {
      width: 0;
      margin-inline-end: 2px;
      opacity: 0;
      transition: opacity 0.2s ${i.motionEaseOut};

      &:has([data-popup-open]) {
        width: unset;
        opacity: 1;
      }
    }

    &:hover {
      .${c} {
        width: unset;
        opacity: 1;
      }
    }
  `,
  })),
  G = d.memo(
    ({
      className: t,
      actions: n,
      contextMenuItems: l,
      active: o,
      href: a,
      icon: p,
      iconSize: x = 18,
      title: g,
      onClick: j,
      disabled: m,
      loading: h,
      extra: y,
      slots: k,
      ...C
    }) => {
      const w = o ? i.colorText : i.colorTextDescription,
        N = o ? i.colorText : i.colorTextSecondary,
        _ = o ? 'filled' : 'borderless',
        { titlePrefix: T, iconPostfix: b } = k || {},
        v = a ? { as: 'a', href: a, style: { color: 'inherit', textDecoration: 'none' } } : {},
        u = e.jsxs(P, {
          horizontal: !0,
          align: 'center',
          className: D(O.container, t),
          clickable: !m,
          gap: 8,
          height: 36,
          paddingInline: 4,
          variant: _,
          onClick: (r) => {
            (a && !L(r) && r.preventDefault(), !(m || h) && j?.(r));
          },
          ...v,
          ...C,
          children: [
            p &&
              e.jsx(S, {
                flex: 'none',
                height: 28,
                width: 28,
                children: h ? e.jsx(A, { size: x }) : e.jsx(z, { color: w, icon: p, size: x }),
              }),
            b,
            e.jsxs(s, {
              horizontal: !0,
              align: 'center',
              flex: 1,
              gap: 8,
              style: { overflow: 'hidden' },
              children: [
                T,
                e.jsx(B, {
                  color: N,
                  style: { flex: 1 },
                  ellipsis: { tooltipWhenOverflow: !0 },
                  children: g,
                }),
                e.jsxs(s, {
                  horizontal: !0,
                  align: 'center',
                  gap: 2,
                  justify: 'flex-end',
                  onClick: (r) => {
                    (r.preventDefault(), r.stopPropagation());
                  },
                  children: [
                    y,
                    n &&
                      e.jsx(s, {
                        horizontal: !0,
                        align: 'center',
                        className: c,
                        gap: 2,
                        justify: 'flex-end',
                        onClick: (r) => {
                          (r.preventDefault(), r.stopPropagation());
                        },
                        children: n,
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      return l ? e.jsx(R, { items: l, children: u }) : u;
    },
  );
export { G as N, q as S, E as a, L as i };
