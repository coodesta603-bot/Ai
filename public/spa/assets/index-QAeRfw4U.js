import { f as F, ae as b, j as n, a1 as L, F as c, db as P, I, Z as k } from './index-C8UyLGsD.js';
import { r as T } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { bT as R, aI as S } from '../vendor/vendor-icons-BHMUH78i.js';
const s = F(({ css: t, cssVar: i }) => ({
    actions: t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 16px;
      transform: translateY(-50%);
    `,
    active: b.active,
    content: t`
      position: relative;
      overflow: hidden;
      flex: 1;
      align-self: center;
    `,
    date: t`
      font-size: 12px;
      color: ${i.colorTextPlaceholder};
    `,
    desc: t`
      width: 100%;
      margin: 0;

      font-size: 12px;
      line-height: 1.2;
      color: ${i.colorTextDescription};
    `,
    pin: t`
      position: absolute;
      inset-block-start: 6px;
      inset-inline-end: 6px;
    `,
    root: n(
      b.variantBorderless,
      t`
        cursor: pointer;
        position: relative;
        border-radius: ${i.borderRadius};
        color: ${i.colorTextTertiary};
      `,
    ),
    title: t`
      width: 100%;
      margin: 0;

      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      color: ${i.colorText};
    `,
    triangle: t`
      width: 10px;
      height: 10px;
      border-radius: 2px;

      opacity: 0.5;
      background: ${i.colorPrimaryBorder};
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    `,
  })),
  q = (t) => {
    const i = L(t);
    return i.isSame(L(), 'day') ? i.format('HH:mm') : i.format('MM-DD');
  },
  C = T.memo(
    ({
      ref: t,
      active: i,
      avatar: x,
      loading: f,
      description: d,
      date: p,
      title: h,
      onHoverChange: r,
      actions: l,
      className: u,
      style: g,
      showAction: m,
      children: y,
      classNames: a,
      addon: j,
      pin: v,
      styles: o,
      ...N
    }) => {
      const M = e.jsx(I, { spin: !0, icon: S }),
        D =
          v &&
          e.jsx('div', {
            className: n(s.pin, a?.pin),
            style: o?.pin,
            children: e.jsx('div', { className: s.triangle }),
          }),
        B =
          l &&
          e.jsx(c, {
            horizontal: !0,
            className: n(s.actions, a?.actions),
            gap: 4,
            style: { display: m ? void 0 : 'none', ...o?.actions },
            onClick: P,
            children: l,
          }),
        E =
          p &&
          e.jsx('div', {
            className: n(s.date, a?.date),
            style: { opacity: m ? 0 : void 0, ...o?.date },
            children: q(p),
          });
      return e.jsxs(c, {
        horizontal: !0,
        align: 'flex-start',
        className: n(s.root, i && s.active, u),
        distribution: 'space-between',
        gap: 8,
        padding: 12,
        ref: t,
        style: g,
        onMouseEnter: () => {
          r?.(!0);
        },
        onMouseLeave: () => {
          r?.(!1);
        },
        ...N,
        children: [
          D,
          e.jsxs(c, {
            horizontal: !0,
            align: 'flex-start',
            className: a?.container,
            flex: 1,
            gap: 8,
            style: { overflow: 'hidden', ...o?.container },
            children: [
              x ?? e.jsx(I, { icon: R, style: { marginTop: 4 } }),
              e.jsxs(c, {
                className: n(s.content, a?.content),
                gap: 4,
                style: o?.content,
                children: [
                  e.jsx(k, {
                    ellipsis: !0,
                    as: 'h3',
                    className: n(s.title, a?.title),
                    style: o?.title,
                    children: h,
                  }),
                  d &&
                    e.jsx(k, {
                      ellipsis: !0,
                      className: n(s.desc, a?.desc),
                      style: o?.desc,
                      children: d,
                    }),
                  j,
                ],
              }),
            ],
          }),
          f ? M : e.jsxs(e.Fragment, { children: [B, E] }),
          y,
        ],
      });
    },
  );
C.displayName = 'ListItem';
var w = C;
const z = T.memo(({ ref: t, activeKey: i, classNames: x, styles: f, onClick: d, items: p, ...h }) =>
  e.jsx(c, {
    gap: 4,
    padding: 4,
    ...h,
    children: p.map((r) => {
      const { key: l, onClick: u, className: g, style: m, ...y } = r,
        { item: a, ...j } = x || {},
        { item: v, ...o } = f || {};
      return e.jsx(
        w,
        {
          active: r.key === i,
          className: n(a, g),
          classNames: j,
          ref: t,
          style: { ...v, ...m },
          styles: o,
          onClick: (N) => {
            (d?.({ item: r, key: l }), u?.(N));
          },
          ...y,
        },
        l,
      );
    }),
  }),
);
z.displayName = 'List';
var H = z;
const _ = H;
_.Item = w;
var G = _;
export { G as L, w as a };
