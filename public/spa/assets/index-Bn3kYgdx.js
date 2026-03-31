import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  L as z,
  F as o,
  I as v,
  f as F,
  g as B,
  T as L,
  B as $,
  ax as M,
  c as q,
} from './index-C8UyLGsD.js';
import { E as P } from './Empty-DHLc2EKW.js';
import { r as b } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { N as U } from './index-CAlKMb1V.js';
import { u as N } from './store-1j_ZR_uL.js';
import { S as H } from './StatusBadge-B5lCwc0D.js';
import {
  ae as W,
  ac as Q,
  bD as G,
  bE as _,
  U as J,
  br as K,
  bF as X,
  bG as O,
  t as Y,
  bH as Z,
  bI as V,
  E as ee,
  am as te,
  bJ as re,
  bK as ae,
  aa as ne,
  bL as oe,
  bM as se,
  bN as ie,
  bO as le,
  a_ as A,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { I as E } from './Input-C_EgL0SG.js';
import { T as ce } from './TextArea-CHeYteyg.js';
import { M as de } from './Modal-Dd2pIxVd.js';
import { S as pe } from './Select-Bh2jXi9V.js';
import { F as k } from './index-5nC5GwBn.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './Block-DDntSWi2.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './Drawer-Blxnywp3.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
const h = F(({ css: t, cssVar: r }) => ({
    meta: t`
    font-size: 11px;
    color: ${r.colorTextTertiary};
  `,
    name: t`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${r.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
    passRate: t`
    font-family: monospace;
    font-size: 14px;
    font-weight: 700;
    color: ${r.colorText};
  `,
    row: t`
    cursor: pointer;

    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${r.colorBorderSecondary};
    border-radius: 8px;

    transition: all 200ms ${r.motionEaseOut};

    &:hover {
      border-color: ${r.colorPrimary};
      background: ${r.colorFillQuaternary};
    }
  `,
    separator: t`
    color: ${r.colorBorderSecondary};
  `,
    stat: t`
    display: inline-flex;
    gap: 2px;
    align-items: center;
    font-size: 12px;
  `,
  })),
  me = b.memo(
    ({
      id: t,
      name: r,
      status: a,
      benchmarkId: d,
      model: u,
      agentName: i,
      createdAt: n,
      passCount: y = 0,
      failCount: x = 0,
      errorCount: g = 0,
      passRate: s,
      cost: p,
      completedCases: m = 0,
      totalCases: l = 0,
    }) => {
      const w = (S) =>
          S ? new Date(S).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : '',
        c = l > 0 ? Math.round((m / l) * 100) : 0,
        f = (a === 'completed' || a === 'running') && y + x + g > 0;
      return e.jsx(z, {
        style: { color: 'inherit', textDecoration: 'none' },
        to: `/eval/bench/${d}/runs/${t}`,
        children: e.jsxs(o, {
          horizontal: !0,
          align: 'center',
          className: h.row,
          gap: 12,
          children: [
            e.jsxs(o, {
              flex: 1,
              gap: 2,
              style: { minWidth: 0 },
              children: [
                e.jsxs(o, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    e.jsx('span', { className: h.name, children: r || t.slice(0, 8) }),
                    e.jsx(H, { status: a }),
                  ],
                }),
                e.jsxs(o, {
                  horizontal: !0,
                  align: 'center',
                  className: h.meta,
                  gap: 4,
                  children: [
                    n && e.jsx('span', { children: w(n) }),
                    n && i && e.jsx('span', { className: h.separator, children: '/' }),
                    i && e.jsx('span', { children: i }),
                    (n || i) && u && e.jsx('span', { className: h.separator, children: '/' }),
                    u && e.jsx('span', { style: { fontFamily: 'monospace' }, children: u }),
                    p != null &&
                      p > 0 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx('span', { className: h.separator, children: '/' }),
                          e.jsxs('span', { children: ['$', p.toFixed(2)] }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            a === 'running'
              ? e.jsxs(o, {
                  align: 'flex-end',
                  gap: 2,
                  style: { width: 100 },
                  children: [
                    e.jsxs(o, {
                      horizontal: !0,
                      align: 'center',
                      justify: 'space-between',
                      style: {
                        fontSize: 10,
                        color: 'var(--ant-color-text-tertiary)',
                        width: '100%',
                      },
                      children: [
                        e.jsxs('span', { children: [m, '/', l] }),
                        e.jsxs('span', { children: [c, '%'] }),
                      ],
                    }),
                    e.jsx('div', {
                      style: {
                        background: 'var(--ant-color-fill-tertiary)',
                        borderRadius: 2,
                        height: 4,
                        overflow: 'hidden',
                        width: '100%',
                      },
                      children: e.jsx('div', {
                        style: {
                          background: 'var(--ant-color-primary)',
                          borderRadius: 2,
                          height: '100%',
                          transition: 'width 300ms ease',
                          width: `${c}%`,
                        },
                      }),
                    }),
                  ],
                })
              : f
                ? e.jsxs(o, {
                    horizontal: !0,
                    align: 'center',
                    gap: 10,
                    children: [
                      e.jsxs('span', {
                        className: h.stat,
                        style: { color: 'var(--ant-color-success)' },
                        children: [e.jsx(v, { icon: W, size: 12 }), y],
                      }),
                      e.jsxs('span', {
                        className: h.stat,
                        style: { color: 'var(--ant-color-error)' },
                        children: [e.jsx(v, { icon: Q, size: 12 }), x],
                      }),
                      g > 0 &&
                        e.jsxs('span', {
                          className: h.stat,
                          style: { color: 'var(--ant-color-warning)' },
                          children: [e.jsx(v, { icon: G, size: 12 }), g],
                        }),
                      s != null &&
                        e.jsxs('span', {
                          className: h.passRate,
                          children: [(s * 100).toFixed(0), '%'],
                        }),
                    ],
                  })
                : a === 'failed'
                  ? e.jsxs('span', { className: h.meta, children: [m, '/', l, ' before failure'] })
                  : e.jsx('span', { className: h.meta, children: 'Queued' }),
            e.jsx(v, {
              icon: _,
              size: 14,
              style: { color: 'var(--ant-color-text-tertiary)', flexShrink: 0 },
            }),
          ],
        }),
      });
    },
  ),
  D = [Z, V, ee, te, re, ae, ne, oe, se, ie, le],
  he = (t) => {
    const r = t.split('').reduce((a, d) => a + d.charCodeAt(0), 0);
    return D[r % D.length];
  },
  j = F(({ css: t, cssVar: r }) => ({
    card: t`
    height: 100%;
    padding: 20px;
    border: 1px solid ${r.colorBorderSecondary};
    border-radius: 12px;
  `,
    description: t`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    line-height: 1.6;
    color: ${r.colorTextTertiary};
  `,
    detailLink: t`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 6px;

    color: ${r.colorTextTertiary};

    transition: all 200ms ${r.motionEaseOut};

    &:hover {
      color: ${r.colorText};
      background: ${r.colorFillTertiary};
    }
  `,
    emptyBox: t`
    padding-block: 24px;
    padding-inline: 16px;
    border: 1px dashed ${r.colorBorderSecondary};
    border-radius: 8px;

    text-align: center;

    background: ${r.colorFillQuaternary};
  `,
    iconBox: t`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,
    meta: t`
    font-size: 12px;
    color: ${r.colorTextTertiary};
  `,
    name: t`
    font-size: 14px;
    font-weight: 500;
    color: ${r.colorText};
    text-decoration: none;

    transition: color 200ms ${r.motionEaseOut};

    &:hover {
      color: ${r.colorPrimary};
    }
  `,
    recentLabel: t`
    font-size: 12px;
    font-weight: 500;
    color: ${r.colorTextTertiary};
  `,
    viewAll: t`
    font-size: 11px;
    color: ${r.colorPrimary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
  })),
  xe = b.memo(
    ({
      id: t,
      name: r,
      description: a,
      testCaseCount: d,
      recentRuns: u,
      runCount: i = 0,
      bestScore: n,
      source: y,
      tags: x,
      datasetCount: g = 0,
    }) => {
      const { t: s } = B('eval'),
        p = i || u?.length || 0,
        m = u?.slice(0, 3) || [],
        l = g > 0,
        w = b.useMemo(() => he(t), [t]);
      return e.jsxs(o, {
        className: j.card,
        gap: 12,
        justify: 'space-between',
        children: [
          e.jsxs(o, {
            gap: 16,
            children: [
              e.jsxs(o, {
                horizontal: !0,
                justify: 'space-between',
                children: [
                  e.jsxs(o, {
                    horizontal: !0,
                    align: 'start',
                    gap: 12,
                    children: [
                      e.jsx('div', {
                        className: j.iconBox,
                        style: {
                          background:
                            y === 'user'
                              ? 'var(--ant-color-success-bg)'
                              : 'var(--ant-color-primary-bg)',
                        },
                        children: e.jsx(v, {
                          icon: y === 'user' ? J : w,
                          size: 24,
                          style: {
                            color:
                              y === 'user'
                                ? 'var(--ant-color-success)'
                                : 'var(--ant-color-primary)',
                          },
                        }),
                      }),
                      e.jsxs(o, {
                        gap: 4,
                        children: [
                          e.jsx(z, { className: j.name, to: `/eval/bench/${t}`, children: r }),
                          e.jsxs(o, {
                            horizontal: !0,
                            align: 'center',
                            className: j.meta,
                            gap: 4,
                            children: [
                              e.jsx('span', {
                                children: s('benchmark.card.datasetCount', { count: g }),
                              }),
                              e.jsx('span', { children: '·' }),
                              e.jsx('span', {
                                children: s('benchmark.card.caseCount', { count: d || 0 }),
                              }),
                              e.jsx('span', { children: '·' }),
                              e.jsx('span', {
                                children: s('benchmark.card.runCount', { count: p }),
                              }),
                              n !== void 0 &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx('span', { children: '·' }),
                                    e.jsxs('span', {
                                      children: [
                                        s('benchmark.card.bestScore'),
                                        ' ',
                                        e.jsx('span', {
                                          style: {
                                            color: 'var(--ant-color-text)',
                                            fontFamily: 'monospace',
                                            fontWeight: 600,
                                          },
                                          children: n.toFixed(1),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(z, {
                    className: j.detailLink,
                    to: `/eval/bench/${t}`,
                    children: e.jsx(v, { icon: _, size: 16 }),
                  }),
                ],
              }),
              a && e.jsx('p', { className: j.description, children: a }),
              x &&
                x.length > 0 &&
                e.jsxs(o, {
                  horizontal: !0,
                  gap: 4,
                  style: { flexWrap: 'wrap' },
                  children: [
                    x.slice(0, 4).map((c) => e.jsx(L, { style: { fontSize: 10 }, children: c }, c)),
                    x.length > 4 &&
                      e.jsxs(L, { style: { fontSize: 10 }, children: ['+', x.length - 4] }),
                  ],
                }),
            ],
          }),
          l
            ? e.jsxs(o, {
                gap: 8,
                children: [
                  e.jsxs(o, {
                    horizontal: !0,
                    align: 'center',
                    justify: 'space-between',
                    children: [
                      e.jsx('span', {
                        className: j.recentLabel,
                        children: s('benchmark.card.recentRuns'),
                      }),
                      p > 3 &&
                        e.jsx(z, {
                          className: j.viewAll,
                          to: `/eval/bench/${t}`,
                          children: s('benchmark.card.viewAll', { count: p }),
                        }),
                    ],
                  }),
                  p > 0
                    ? e.jsx(o, {
                        gap: 6,
                        children:
                          m.length > 0
                            ? m.map((c) => {
                                const f = c.metrics,
                                  S = c.config?.agentSnapshot,
                                  C = f?.passedCases ?? 0,
                                  R = f?.failedCases ?? 0,
                                  I = f?.errorCases ?? 0;
                                return e.jsx(
                                  me,
                                  {
                                    agentName: S?.title,
                                    benchmarkId: t,
                                    cost: f?.totalCost,
                                    createdAt: c.createdAt,
                                    errorCount: I,
                                    failCount: R,
                                    id: c.id,
                                    model: S?.model,
                                    name: c.name,
                                    passCount: C,
                                    passRate: f?.passRate,
                                    score: f?.averageScore,
                                    status: c.status,
                                    totalCases: f?.totalCases ?? 0,
                                    completedCases: f?.completedCases ?? C + R + I,
                                  },
                                  c.id,
                                );
                              })
                            : e.jsx('p', {
                                style: {
                                  color: 'var(--ant-color-text-tertiary)',
                                  fontSize: 12,
                                  textAlign: 'center',
                                  padding: '12px 0',
                                },
                                children: s('benchmark.card.noRecentRuns'),
                              }),
                      })
                    : e.jsxs('div', {
                        className: j.emptyBox,
                        children: [
                          e.jsx(v, {
                            icon: O,
                            size: 24,
                            style: { color: 'var(--ant-color-text-quaternary)', marginBottom: 8 },
                          }),
                          e.jsx('p', {
                            style: {
                              color: 'var(--ant-color-text-tertiary)',
                              fontSize: 13,
                              margin: '0 0 4px',
                            },
                            children: s('benchmark.card.empty'),
                          }),
                          e.jsx('p', {
                            style: {
                              color: 'var(--ant-color-text-quaternary)',
                              fontSize: 12,
                              margin: '0 0 12px',
                            },
                            children: s('benchmark.card.emptyHint'),
                          }),
                          e.jsx(z, {
                            style: { textDecoration: 'none' },
                            to: `/eval/bench/${t}?tab=runs`,
                            children: e.jsx($, {
                              icon: Y,
                              size: 'small',
                              variant: 'filled',
                              children: s('benchmark.card.startFirst'),
                            }),
                          }),
                        ],
                      }),
                ],
              })
            : e.jsxs('div', {
                className: j.emptyBox,
                children: [
                  e.jsx(v, {
                    icon: K,
                    size: 24,
                    style: { color: 'var(--ant-color-text-quaternary)', marginBottom: 8 },
                  }),
                  e.jsx('p', {
                    style: {
                      color: 'var(--ant-color-text-tertiary)',
                      fontSize: 13,
                      margin: '0 0 4px',
                    },
                    children: s('benchmark.card.noDataset'),
                  }),
                  e.jsx('p', {
                    style: {
                      color: 'var(--ant-color-text-quaternary)',
                      fontSize: 12,
                      margin: '0 0 12px',
                    },
                    children: s('benchmark.card.noDatasetHint'),
                  }),
                  e.jsx(z, {
                    style: { textDecoration: 'none' },
                    to: `/eval/bench/${t}`,
                    children: e.jsx($, {
                      icon: X,
                      size: 'small',
                      variant: 'filled',
                      children: s('benchmark.card.importDataset'),
                    }),
                  }),
                ],
              }),
        ],
      });
    },
  ),
  ue = (t) =>
    t
      .trim()
      .toLowerCase()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/[^\da-z-]/g, ''),
  ge = b.memo(({ open: t, onCancel: r }) => {
    const { t: a } = B('eval'),
      { message: d } = M.useApp(),
      u = q(),
      [i] = k.useForm(),
      [n, y] = b.useState(!1),
      [x, g] = b.useState(!1),
      s = N((m) => m.createBenchmark),
      p = k.useWatch('name', i);
    return (
      b.useEffect(() => {
        !x && p && i.setFieldValue('identifier', ue(p));
      }, [p, x, i]),
      e.jsx(de, {
        allowFullscreen: !0,
        destroyOnHidden: !0,
        okButtonProps: { loading: n },
        okText: a('benchmark.create.confirm'),
        open: t,
        title: a('benchmark.create.title'),
        width: 480,
        onCancel: (m) => {
          (i.resetFields(), g(!1), r?.(m));
        },
        onOk: async (m) => {
          try {
            const l = await i.validateFields();
            y(!0);
            const w = await s({
              identifier: l.identifier.trim(),
              name: l.name.trim(),
              description: l.description?.trim() || void 0,
              tags: l.tags?.length > 0 ? l.tags : void 0,
            });
            (d.success(a('benchmark.create.success')),
              i.resetFields(),
              g(!1),
              r?.(m),
              w?.id && u(`/eval/bench/${w.id}`));
          } catch (l) {
            if (l?.errorFields) return;
            d.error(a('benchmark.create.error'));
          } finally {
            y(!1);
          }
        },
        children: e.jsxs(k, {
          form: i,
          layout: 'vertical',
          style: { paddingBlock: 16 },
          children: [
            e.jsx(k.Item, {
              label: a('benchmark.create.name.label'),
              name: 'name',
              rules: [{ message: a('benchmark.create.nameRequired'), required: !0 }],
              children: e.jsx(E, {
                autoFocus: !0,
                placeholder: a('benchmark.create.name.placeholder'),
              }),
            }),
            e.jsx(k.Item, {
              label: a('benchmark.create.identifier.label'),
              name: 'identifier',
              rules: [{ message: a('benchmark.create.identifierRequired'), required: !0 }],
              children: e.jsx(E, {
                placeholder: a('benchmark.create.identifier.placeholder'),
                onChange: () => g(!0),
              }),
            }),
            e.jsx(k.Item, {
              label: a('benchmark.create.description.label'),
              name: 'description',
              children: e.jsx(ce, {
                placeholder: a('benchmark.create.description.placeholder'),
                rows: 3,
              }),
            }),
            e.jsx(k.Item, {
              label: a('benchmark.create.tags.label'),
              name: 'tags',
              style: { marginBottom: 0 },
              children: e.jsx(pe, {
                mode: 'tags',
                open: !1,
                placeholder: a('benchmark.create.tags.placeholder'),
                style: { width: '100%' },
                tokenSeparators: [',', '，', ' '],
              }),
            }),
          ],
        }),
      })
    );
  }),
  T = F(({ css: t, cssVar: r }) => ({
    container: t`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,
    subtitle: t`
    margin: 0;
    font-size: 13px;
    color: ${r.colorTextTertiary};
  `,
    title: t`
    margin: 0;

    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    color: ${r.colorText};
    letter-spacing: -0.02em;
  `,
  })),
  Qe = b.memo(() => {
    const { t } = B('eval'),
      [r, a] = b.useState(!1),
      d = N((n) => n.benchmarkList),
      u = N((n) => n.useFetchBenchmarks),
      { isLoading: i } = u();
    return e.jsxs(o, {
      className: T.container,
      gap: 32,
      height: '100%',
      width: '100%',
      children: [
        e.jsxs(o, {
          horizontal: !0,
          align: 'center',
          justify: 'space-between',
          children: [
            e.jsxs(o, {
              gap: 4,
              children: [
                e.jsx('h1', { className: T.title, children: t('overview.title') }),
                e.jsx('p', { className: T.subtitle, children: t('overview.subtitle') }),
              ],
            }),
            d.length > 0 &&
              e.jsx($, {
                icon: A,
                type: 'primary',
                onClick: () => a(!0),
                children: t('overview.createBenchmark'),
              }),
          ],
        }),
        i
          ? e.jsx(o, {
              align: 'center',
              flex: 1,
              justify: 'center',
              children: e.jsx(U, { size: 64 }),
            })
          : d.length === 0
            ? e.jsx(o, {
                align: 'center',
                flex: 1,
                justify: 'center',
                children: e.jsx(P, {
                  description: t('benchmark.empty'),
                  icon: O,
                  children: e.jsx($, {
                    icon: A,
                    style: { marginTop: 16 },
                    type: 'primary',
                    onClick: () => a(!0),
                    children: t('overview.createBenchmark'),
                  }),
                }),
              })
            : e.jsx('div', {
                style: {
                  display: 'grid',
                  gap: 20,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
                },
                children: d.map((n) =>
                  e.jsx(
                    xe,
                    {
                      bestScore: n.bestScore,
                      datasetCount: n.datasetCount,
                      description: n.description,
                      id: n.id,
                      name: n.name,
                      recentRuns: n.recentRuns,
                      runCount: n.runCount,
                      source: n.source,
                      tags: n.tags,
                      testCaseCount: n.testCaseCount,
                    },
                    n.id,
                  ),
                ),
              }),
        e.jsx(ge, { open: r, onCancel: () => a(!1) }),
      ],
    });
  });
export { Qe as default };
