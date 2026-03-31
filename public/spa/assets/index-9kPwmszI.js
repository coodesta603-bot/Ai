import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  f as w,
  g as y,
  by as P,
  F as i,
  j as v,
  k as z,
  T as h,
  Z as d,
  i as j,
} from './index-C8UyLGsD.js';
import { G as g } from './Grid-CdN2I7qJ.js';
import { u as m } from './store-CTAK9tZ0.js';
import { f as $ } from './providerConfig-qS2Xx-oI.js';
import { A as S } from './index-BAOF5XWg.js';
import { S as L } from './index-DLsdvBKx.js';
import { I as D } from './index-B5hU39Hp.js';
import { P as A } from './index-Ch5xOhA1.js';
import { P as C } from './index-DbyirWUA.js';
import { D as E } from './index-BfwjtmVb.js';
import { a as f } from './selectors-BgvhR9tA.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './Block-DDntSWi2.js';
import './index-CaOmqfDS.js';
import './providerConfig-C5BYp5FR.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './index-BtctqgmI.js';
import './index-Bn9og1vQ.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './index-BsUJTjY1.js';
import './index-DTt8RGNw.js';
function I() {
  return null;
}
const F = ({ id: r, Component: t, enabled: n }) => {
    const [l] = m((a) => [a.toggleProviderEnabled]);
    return t
      ? e.jsx(t, { enabled: n, id: r })
      : e.jsx(D, {
          enabled: n,
          size: 'small',
          onChange: async (a) => {
            await l(r, a);
          },
        });
  },
  p = w(({ css: r, cssVar: t }) => ({
    bannerDark: r`
    opacity: 0.9;
  `,
    bannerLight: r`
    opacity: 0.4;
  `,
    containerDark: r`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillQuaternary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;
    }
  `,
    containerLight: r`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFill} inset;
    }
  `,
    desc: r`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${t.colorTextDescription};
  `,
    tagBlue: r`
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,
    tagGreen: r`
    color: ${t.green};
    background: ${t.green1};
  `,
    time: r`
    color: ${t.colorTextDescription};
  `,
    title: r`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,
    token: r`
    font-family: ${t.fontFamilyCode};
  `,
  })),
  B = (r) => r.endsWith('codingplan'),
  x = c.memo(
    ({
      id: r,
      description: t,
      name: n,
      enabled: l,
      source: a,
      logo: s,
      loading: u,
      onProviderSelect: o,
    }) => {
      const { t: k } = y('providers'),
        b = P();
      return u
        ? e.jsx(i, {
            className: v(b ? p.containerDark : p.containerLight),
            gap: 24,
            padding: 16,
            children: e.jsx(L, { active: !0 }),
          })
        : r === $
          ? e.jsx(I, {})
          : e.jsx(i, {
              className: v(b ? p.containerDark : p.containerLight),
              gap: 24,
              children: e.jsxs(i, {
                gap: 12,
                padding: 16,
                width: '100%',
                children: [
                  e.jsx('div', {
                    style: { cursor: 'pointer' },
                    onClick: () => {
                      o(r);
                    },
                    children: e.jsxs(i, {
                      gap: 12,
                      width: '100%',
                      children: [
                        e.jsx(i, {
                          horizontal: !0,
                          align: 'center',
                          justify: 'space-between',
                          children:
                            a === 'builtin'
                              ? e.jsxs(i, {
                                  horizontal: !0,
                                  align: 'center',
                                  gap: 8,
                                  children: [
                                    e.jsx(A, {
                                      provider: r,
                                      size: 24,
                                      style: { color: z.colorText },
                                      title: n,
                                    }),
                                    B(r) &&
                                      e.jsx(h, { color: 'geekblue', children: 'Coding Plan' }),
                                  ],
                                })
                              : e.jsxs(i, {
                                  horizontal: !0,
                                  align: 'center',
                                  gap: 12,
                                  children: [
                                    s
                                      ? e.jsx(S, { alt: n || r, avatar: s, size: 28 })
                                      : e.jsx(C, {
                                          provider: r,
                                          size: 24,
                                          style: { borderRadius: 6 },
                                          type: 'avatar',
                                        }),
                                    e.jsx(d, {
                                      style: { fontSize: 16, fontWeight: 'bold' },
                                      children: n || r,
                                    }),
                                  ],
                                }),
                        }),
                        e.jsx(d, {
                          className: p.desc,
                          ellipsis: { rows: 2 },
                          children: a === 'custom' ? t : k(`${r}.description`),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(E, { style: { margin: '4px 0' } }),
                  e.jsxs(i, {
                    horizontal: !0,
                    justify: 'space-between',
                    children: [e.jsx('div', {}), e.jsx(F, { enabled: l, id: r })],
                  }),
                ],
              }),
            });
    },
  ),
  T = Array.from({ length: 12 })
    .fill('-')
    .map((r, t) => `${t}x${r}`),
  fe = c.memo((r) => {
    const { onProviderSelect: t } = r,
      { t: n } = y('modelProvider'),
      l = m(f.enabledAiProviderList, j),
      a = m(f.disabledAiProviderList, j),
      s = m(f.disabledCustomAiProviderList, j),
      [u] = m((o) => [o.initAiProviderList]);
    return u
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsxs(i, {
              gap: 24,
              children: [
                e.jsxs(i, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    e.jsx(d, {
                      strong: !0,
                      style: { fontSize: 18 },
                      children: n('list.title.enabled'),
                    }),
                    e.jsx(h, { children: l.length }),
                  ],
                }),
                e.jsx(g, {
                  gap: 16,
                  rows: 3,
                  children: l.map((o) =>
                    c.createElement(x, { ...o, key: o.id, onProviderSelect: t }),
                  ),
                }),
              ],
            }),
            s.length > 0 &&
              e.jsxs(i, {
                gap: 24,
                children: [
                  e.jsxs(i, {
                    horizontal: !0,
                    align: 'center',
                    gap: 8,
                    children: [
                      e.jsx(d, {
                        strong: !0,
                        style: { fontSize: 18 },
                        children: n('list.title.custom'),
                      }),
                      e.jsx(h, { children: s.length }),
                    ],
                  }),
                  e.jsx(g, {
                    gap: 16,
                    rows: 3,
                    children: s.map((o) =>
                      c.createElement(x, { ...o, key: o.id, onProviderSelect: t }),
                    ),
                  }),
                ],
              }),
            e.jsxs(i, {
              gap: 24,
              children: [
                e.jsxs(i, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    e.jsx(d, {
                      strong: !0,
                      style: { fontSize: 18 },
                      children: n('list.title.disabled'),
                    }),
                    e.jsx(h, { children: a.length }),
                  ],
                }),
                e.jsx(g, {
                  gap: 16,
                  rows: 3,
                  children: a.map((o) =>
                    c.createElement(x, { ...o, key: o.id, onProviderSelect: t }),
                  ),
                }),
              ],
            }),
          ],
        })
      : e.jsxs(i, {
          gap: 24,
          paddingBlock: '0 16px',
          children: [
            e.jsx(i, {
              horizontal: !0,
              align: 'center',
              gap: 4,
              children: e.jsx(d, {
                strong: !0,
                style: { fontSize: 16 },
                children: n('list.title.enabled'),
              }),
            }),
            e.jsx(g, {
              gap: 16,
              rows: 3,
              children: T.map((o) =>
                e.jsx(
                  x,
                  { loading: !0, enabled: !1, id: o, source: 'builtin', onProviderSelect: t },
                  o,
                ),
              ),
            }),
          ],
        });
  });
export { fe as default };
