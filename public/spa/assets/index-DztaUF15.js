import { j as l } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  F as t,
  Z as c,
  bl as f,
  I as v,
  k as h,
  j as n,
  f as g,
  r as j,
} from './index-C8UyLGsD.js';
import { G as b } from './Grid-CdN2I7qJ.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
const m = p.memo(({ className: a, style: o, value: r = '--' }) =>
    l.jsxs(t, {
      horizontal: !0,
      align: 'center',
      className: a,
      gap: 4,
      style: { overflow: 'hidden', position: 'relative', ...o },
      children: [
        l.jsx(c, {
          ellipsis: !0,
          style: {
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            margin: 0,
            overflow: 'hidden',
            width: '100%',
          },
          children: r || '--',
        }),
        l.jsx(f, { content: r || '--', size: 'small' }),
      ],
    }),
  ),
  d = g(({ css: a, cssVar: o }) => ({
    bordered: a`
      overflow: hidden;
      border: 1px solid ${o.colorBorderSecondary};
      border-radius: ${o.borderRadiusLG};
      ${j.sm} {
        background: ${o.colorBgContainer};
      }
    `,
    cell: a`
      overflow: hidden;
      box-shadow: 0 0 0 0.5px ${o.colorBorderSecondary};
    `,
    label: a`
      overflow: hidden;
      border-inline-end: 1px solid ${o.colorBorderSecondary};
      background: ${o.colorFillQuaternary};
    `,
  })),
  k = p.memo(
    ({
      labelWidth: a = 150,
      title: o,
      bordered: r,
      className: u,
      items: x,
      classNames: s,
      styles: i,
      ...y
    }) =>
      l.jsxs(l.Fragment, {
        children: [
          o && l.jsx('h3', { style: { marginTop: 12 }, children: o }),
          l.jsx(b, {
            className: n(r && d.bordered, u),
            gap: 0,
            maxItemWidth: 450,
            ...y,
            children: x.map((e) =>
              l.jsxs(
                t,
                {
                  horizontal: !0,
                  align: 'center',
                  className: n(r && d.cell, e.className, s?.item),
                  flex: 1,
                  style: { overflow: 'hidden', position: 'relative', ...i?.item, ...e.style },
                  children: [
                    l.jsxs(t, {
                      horizontal: !0,
                      align: 'center',
                      className: n(r && d.label),
                      flex: 'none',
                      gap: 6,
                      paddingBlock: r ? 12 : 4,
                      paddingInline: r ? 16 : 0,
                      style: { height: '100%', position: 'relative' },
                      width: a,
                      children: [
                        e.icon && l.jsx(v, { color: h.colorTextSecondary, icon: e.icon }),
                        l.jsx(c, {
                          ellipsis: !0,
                          className: n(s?.label, e.classNames?.label),
                          style: { color: h.colorTextSecondary, ...i?.label, ...e.styles?.label },
                          children: e.label,
                        }),
                      ],
                    }),
                    l.jsx(t, {
                      horizontal: !0,
                      align: 'center',
                      flex: 1,
                      justify: 'flex-start',
                      paddingBlock: r ? 12 : 4,
                      paddingInline: 16,
                      style: { height: '100%', overflow: 'hidden', position: 'relative' },
                      children: e.copyable
                        ? l.jsx(m, {
                            className: n(s?.value, e.classNames?.value),
                            style: { ...i?.value, ...e.styles?.value },
                            value: e.value ? String(e.value) : '--',
                          })
                        : l.jsx(c, {
                            ellipsis: !0,
                            className: n(s?.value, e.classNames?.value),
                            style: { ...i?.value, ...e.styles?.value },
                            children: e.value,
                          }),
                    }),
                  ],
                },
                e.key,
              ),
            ),
          }),
        ],
      }),
  );
export { k as D };
