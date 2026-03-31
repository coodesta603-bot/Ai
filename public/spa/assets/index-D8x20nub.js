import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as $,
  ax as _,
  c as Se,
  F as r,
  k as o,
  I as ne,
  B as E,
  f as O,
  aD as Y,
  Z as J,
  C as ke,
  T as ze,
  L as Te,
  aJ as F,
  ao as we,
} from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as I, a as Z } from './store-1j_ZR_uL.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { e as De } from './format-DpcrcXfF.js';
import './providerConfig-qS2Xx-oI.js';
import { I as ae } from './Input-C_EgL0SG.js';
import { T as Ie } from './TextArea-CHeYteyg.js';
import { M as oe } from './Modal-Dd2pIxVd.js';
import { S as Fe } from './Select-Bh2jXi9V.js';
import { F as w } from './index-5nC5GwBn.js';
import { f as Re, a as Be } from './utils-DdCRt2d3.js';
import {
  bs as le,
  U as Ne,
  E as V,
  cq as Me,
  cr as Pe,
  bK as ie,
  d as Ae,
  ab as Ee,
  cs as We,
  br as X,
  a_ as H,
  ct as Le,
  t as $e,
  cl as Oe,
  P as _e,
  R as qe,
  bE as Qe,
  bH as Ue,
  bI as He,
  am as Ge,
  bJ as Je,
  aa as Ke,
  bL as Ye,
  bM as Ze,
  bN as Ve,
  bO as Xe,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { D as ce } from './index-BHffy9NV.js';
import { B as de } from './index-XXtOGkGY.js';
import {
  g as et,
  d as U,
  T as tt,
  D as at,
  a as st,
  b as rt,
  c as ue,
  E as nt,
  R as ot,
} from './RunCard-ChnQZ-wZ.js';
import { I as q } from './index-OkOG2AHU.js';
import { N as lt } from './index-CAlKMb1V.js';
import { C as G } from './index-Cglhv3pZ.js';
import { E as it } from './Empty-DHLc2EKW.js';
import { R as ct } from './index-BAoDYYyZ.js';
import { r as pe } from './selectors-D8FoU16Z.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import './currency-iJxIWo9y.js';
import './style-Bc_3l5BM.js';
import './Drawer-Blxnywp3.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './LeftOutlined-Pp_b6_vA.js';
import './Dropdown-CemyFDx1.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './index-BOZ0hr8D.js';
import './useBubbleLock-D8efMGR_.js';
import './Table-BlWKciej.js';
import './index-B0kjmwCf.js';
import './scrollTo-DrqiKkdE.js';
import './Pagination-Cg0T9GpR.js';
import './index-Bc7JilPY.js';
import './index-BfwjtmVb.js';
import './index-C2-gySBL.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-BrqBWuO3.js';
import './progress-CqsUaYIW.js';
import './AccordionItem-BUupnbbL.js';
import './Block-DDntSWi2.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-GXVeGAZV.js';
import './PlusOutlined-Budj8ek_.js';
import './StatusBadge-B5lCwc0D.js';
import './TextArea-BTdxpOlh.js';
import './index-CXy3GcSN.js';
const dt = (a) =>
    a
      .trim()
      .toLowerCase()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/[^\da-z-]/g, ''),
  ut = n.memo(({ open: a, onCancel: t, benchmark: m, onSuccess: D }) => {
    const { t: s } = $('eval'),
      { message: g } = _.useApp(),
      [l] = w.useForm(),
      [h, f] = n.useState(!1),
      [T, b] = n.useState(!1),
      v = I((S) => S.updateBenchmark),
      C = w.useWatch('name', l);
    return (
      n.useEffect(() => {
        a &&
          m &&
          (l.setFieldsValue({
            name: m.name,
            identifier: m.identifier,
            description: m.description || '',
            tags: m.tags || [],
          }),
          b(!1));
      }, [a, m, l]),
      n.useEffect(() => {
        !T && C && l.setFieldValue('identifier', dt(C));
      }, [C, T, l]),
      e.jsx(oe, {
        allowFullscreen: !0,
        destroyOnHidden: !0,
        okButtonProps: { loading: h },
        okText: s('benchmark.edit.confirm'),
        open: a,
        title: s('benchmark.edit.title'),
        width: 480,
        onCancel: (S) => {
          (l.resetFields(), b(!1), t?.(S));
        },
        onOk: async (S) => {
          try {
            const d = await l.validateFields();
            (f(!0),
              await v({
                id: m.id,
                identifier: d.identifier.trim(),
                name: d.name.trim(),
                description: d.description?.trim() || void 0,
                tags: d.tags?.length > 0 ? d.tags : void 0,
              }),
              g.success(s('benchmark.edit.success')),
              l.resetFields(),
              b(!1),
              t?.(S),
              D?.());
          } catch (d) {
            if (d?.errorFields) return;
            g.error(s('benchmark.edit.error'));
          } finally {
            f(!1);
          }
        },
        children: e.jsxs(w, {
          form: l,
          layout: 'vertical',
          style: { paddingBlock: 16 },
          children: [
            e.jsx(w.Item, {
              label: s('benchmark.create.name.label'),
              name: 'name',
              rules: [{ message: s('benchmark.create.nameRequired'), required: !0 }],
              children: e.jsx(ae, {
                autoFocus: !0,
                placeholder: s('benchmark.create.name.placeholder'),
              }),
            }),
            e.jsx(w.Item, {
              label: s('benchmark.create.identifier.label'),
              name: 'identifier',
              rules: [{ message: s('benchmark.create.identifierRequired'), required: !0 }],
              children: e.jsx(ae, {
                placeholder: s('benchmark.create.identifier.placeholder'),
                onChange: () => b(!0),
              }),
            }),
            e.jsx(w.Item, {
              label: s('benchmark.create.description.label'),
              name: 'description',
              children: e.jsx(Ie, {
                placeholder: s('benchmark.create.description.placeholder'),
                rows: 3,
              }),
            }),
            e.jsx(w.Item, {
              label: s('benchmark.create.tags.label'),
              name: 'tags',
              style: { marginBottom: 0 },
              children: e.jsx(Fe, {
                mode: 'tags',
                open: !1,
                placeholder: s('benchmark.create.tags.placeholder'),
                style: { width: '100%' },
                tokenSeparators: [',', '，', ' '],
              }),
            }),
          ],
        }),
      })
    );
  }),
  se = [o.colorPrimary, o.colorSuccess, o.colorTextQuaternary],
  B = O(({ css: a, cssVar: t }) => ({
    bestPerformance: a`
    margin: 0;
    margin-block-start: 4px;
    font-size: 13px;
    color: ${t.colorTextSecondary};
  `,
    description: a`
    margin: 0;
    margin-block-start: 2px;
    font-size: 14px;
    color: ${t.colorTextTertiary};
  `,
    iconBox: a`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 10px;
  `,
    statCard: a`
    flex: 1;

    min-width: 0;
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;
  `,
    statIcon: a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,
    title: a`
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${t.colorText};
  `,
  })),
  pt = n.memo(
    ({
      benchmark: a,
      completedRuns: t,
      datasets: m,
      onBenchmarkUpdate: D,
      runCount: s,
      systemIcon: g = V,
      totalCases: l,
    }) => {
      const { t: h } = $('eval'),
        { modal: f } = _.useApp(),
        T = Se(),
        b = I((x) => x.deleteBenchmark),
        v = I((x) => x.refreshBenchmarkDetail),
        [C, S] = n.useState(!1),
        d = async () => {
          (await v(a.id), D?.(a));
        },
        c = () => {
          f.confirm({
            content: h('benchmark.actions.delete.confirm'),
            okButtonProps: { danger: !0 },
            okText: h('benchmark.actions.delete'),
            onOk: async () => {
              (await b(a.id), T('/eval'));
            },
            title: h('benchmark.actions.delete'),
          });
        },
        W = [
          {
            danger: !0,
            icon: e.jsx(le, { size: 16 }),
            key: 'delete',
            label: h('common.delete'),
            onClick: c,
          },
        ],
        N = m.length > 0,
        j = t.length > 0,
        k = n.useMemo(() => {
          if (!j) return [];
          const x = new Map();
          for (const i of t) {
            const z = i.targetAgent?.title || i.targetAgent?.id || 'Unknown',
              R = i.targetAgentId || i.targetAgent?.id || z;
            (x.has(R) || x.set(R, { name: z, passRates: [] }),
              x.get(R).passRates.push(i.passRate ?? i.metrics?.passRate ?? 0));
          }
          return [...x.entries()]
            .map(([, i]) => ({
              avgPassRate: i.passRates.reduce((z, R) => z + R, 0) / i.passRates.length,
              name: i.name,
            }))
            .sort((i, z) => z.avgPassRate - i.avgPassRate)
            .slice(0, 3);
        }, [t, j]),
        p = k.length > 0 ? k[0] : null,
        y = n.useMemo(() => {
          if (!j) return null;
          const x = t
            .map((i) => i.metrics?.duration ?? i.totalDuration)
            .filter((i) => i != null && i > 0);
          return x.length === 0 ? null : x.reduce((i, z) => i + z, 0) / x.length;
        }, [t, j]),
        M = n.useMemo(() => {
          if (!j) return null;
          const x = t
            .map((z) => z.metrics?.duration ?? z.totalDuration)
            .filter((z) => z != null && z > 0)
            .sort((z, R) => z - R);
          if (x.length === 0) return null;
          const i = Math.ceil(x.length * 0.99) - 1;
          return x[i];
        }, [t, j]),
        L = n.useMemo(() => {
          if (!j) return null;
          const x = t
            .map((i) => i.metrics?.totalCost ?? i.totalCost)
            .filter((i) => i != null && i > 0);
          return x.length === 0 ? null : x.reduce((i, z) => i + z, 0) / x.length;
        }, [t, j]);
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx(r, {
            gap: 16,
            children: e.jsxs(r, {
              horizontal: !0,
              align: 'start',
              justify: 'space-between',
              children: [
                e.jsxs(r, {
                  horizontal: !0,
                  align: 'start',
                  gap: 12,
                  children: [
                    e.jsx('div', {
                      className: B.iconBox,
                      style: {
                        background: a.source === 'user' ? o.colorSuccessBg : o.colorPrimaryBg,
                      },
                      children: e.jsx(ne, {
                        icon: a.source === 'user' ? Ne : g,
                        size: 20,
                        style: { color: a.source === 'user' ? o.colorSuccess : o.colorPrimary },
                      }),
                    }),
                    e.jsxs(r, {
                      gap: 4,
                      children: [
                        e.jsx('h1', { className: B.title, children: a.name }),
                        a.description &&
                          e.jsx('p', { className: B.description, children: a.description }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(r, {
                  horizontal: !0,
                  gap: 8,
                  children: [
                    e.jsx(E, {
                      icon: Me,
                      size: 'small',
                      variant: 'outlined',
                      onClick: () => S(!0),
                      children: h('common.edit'),
                    }),
                    e.jsx(ce, {
                      menu: { items: W },
                      placement: 'bottomRight',
                      trigger: ['click'],
                      children: e.jsx(E, { icon: Pe, size: 'small', variant: 'outlined' }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          p &&
            e.jsx('p', {
              className: B.bestPerformance,
              children: h('benchmark.detail.stats.bestPerformance', {
                agent: p.name,
                passRate: (p.avgPassRate * 100).toFixed(1),
              }),
            }),
          e.jsxs(r, {
            horizontal: !0,
            gap: 12,
            children: [
              e.jsx('div', {
                className: B.statCard,
                children: e.jsxs(r, {
                  gap: 12,
                  children: [
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        e.jsx('div', {
                          className: B.statIcon,
                          style: { background: o.colorWarningBg },
                          children: e.jsx(ie, { size: 16, style: { color: o.colorWarning } }),
                        }),
                        e.jsx('span', {
                          style: {
                            color: o.colorTextSecondary,
                            fontSize: 13,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                          },
                          children: h('benchmark.detail.stats.topAgents'),
                        }),
                      ],
                    }),
                    !N &&
                      !j &&
                      e.jsx('span', {
                        style: { color: o.colorTextQuaternary, fontSize: 20, fontWeight: 'bold' },
                        children: '--',
                      }),
                    N &&
                      !j &&
                      e.jsxs(r, {
                        gap: 2,
                        children: [
                          e.jsx('span', {
                            style: {
                              color: o.colorTextQuaternary,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                            children: h('benchmark.detail.stats.waiting'),
                          }),
                          e.jsx('span', {
                            style: { color: o.colorTextQuaternary, fontSize: 12 },
                            children: h('benchmark.detail.stats.noEvalRecord'),
                          }),
                        ],
                      }),
                    j &&
                      k.length > 0 &&
                      e.jsx(r, {
                        gap: 6,
                        children: k.map((x, i) =>
                          e.jsxs(
                            r,
                            {
                              horizontal: !0,
                              align: 'center',
                              justify: 'space-between',
                              children: [
                                e.jsxs(r, {
                                  horizontal: !0,
                                  align: 'center',
                                  gap: 8,
                                  children: [
                                    e.jsx('span', {
                                      style: {
                                        color: se[i] || se[2],
                                        fontSize: 12,
                                        fontWeight: 600,
                                        minWidth: 14,
                                        textAlign: 'center',
                                      },
                                      children: i + 1,
                                    }),
                                    e.jsx('span', {
                                      style: { color: o.colorText, fontSize: 13, fontWeight: 500 },
                                      children: x.name,
                                    }),
                                  ],
                                }),
                                e.jsxs('span', {
                                  style: { color: o.colorTextSecondary, fontSize: 13 },
                                  children: [(x.avgPassRate * 100).toFixed(1), '%'],
                                }),
                              ],
                            },
                            x.name,
                          ),
                        ),
                      }),
                  ],
                }),
              }),
              e.jsx('div', {
                className: B.statCard,
                children: e.jsxs(r, {
                  gap: 12,
                  children: [
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        e.jsx('div', {
                          className: B.statIcon,
                          style: { background: o.colorPrimaryBg },
                          children: e.jsx(Ae, { size: 16, style: { color: o.colorPrimary } }),
                        }),
                        e.jsx('span', {
                          style: { color: o.colorTextSecondary, fontSize: 13, fontWeight: 600 },
                          children: h('benchmark.detail.stats.dataScale'),
                        }),
                        l === 0 &&
                          e.jsx(de, {
                            count: h('benchmark.detail.stats.needSetup'),
                            style: {
                              backgroundColor: o.colorWarningBg,
                              color: o.colorWarning,
                              fontSize: 11,
                            },
                          }),
                      ],
                    }),
                    e.jsxs(r, {
                      gap: 2,
                      children: [
                        e.jsxs(r, {
                          horizontal: !0,
                          align: 'baseline',
                          gap: 4,
                          children: [
                            e.jsx('span', {
                              style: { color: o.colorText, fontSize: 24, fontWeight: 'bold' },
                              children: l,
                            }),
                            l > 0 &&
                              e.jsx('span', {
                                style: { color: o.colorTextTertiary, fontSize: 13 },
                                children: 'Cases',
                              }),
                          ],
                        }),
                        l === 0
                          ? e.jsx('span', {
                              style: { color: o.colorPrimary, fontSize: 12 },
                              children: h('benchmark.detail.stats.addFirstDataset'),
                            })
                          : e.jsxs('span', {
                              style: { color: o.colorTextQuaternary, fontSize: 12 },
                              children: [m.length, ' Datasets'],
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx('div', {
                className: B.statCard,
                children: e.jsxs(r, {
                  gap: 12,
                  children: [
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        e.jsx('div', {
                          className: B.statIcon,
                          style: { background: o.colorInfoBg },
                          children: e.jsx(Ee, { size: 16, style: { color: o.colorInfo } }),
                        }),
                        e.jsx('span', {
                          style: { color: o.colorTextSecondary, fontSize: 13, fontWeight: 600 },
                          children: h('benchmark.detail.stats.avgDuration'),
                        }),
                      ],
                    }),
                    y == null
                      ? e.jsx('span', {
                          style: { color: o.colorTextQuaternary, fontSize: 20, fontWeight: 'bold' },
                          children: '--',
                        })
                      : e.jsxs(r, {
                          gap: 2,
                          children: [
                            e.jsxs(r, {
                              horizontal: !0,
                              align: 'baseline',
                              gap: 4,
                              children: [
                                e.jsx('span', {
                                  style: { color: o.colorText, fontSize: 24, fontWeight: 'bold' },
                                  children: Re(y),
                                }),
                                e.jsx('span', {
                                  style: { color: o.colorTextTertiary, fontSize: 13 },
                                  children: 'min',
                                }),
                              ],
                            }),
                            M != null &&
                              e.jsxs('span', {
                                style: { color: o.colorTextQuaternary, fontSize: 12 },
                                children: ['P99: ', Be(M)],
                              }),
                          ],
                        }),
                  ],
                }),
              }),
              e.jsx('div', {
                className: B.statCard,
                children: e.jsxs(r, {
                  gap: 12,
                  children: [
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        e.jsx('div', {
                          className: B.statIcon,
                          style: { background: o.colorSuccessBg },
                          children: e.jsx(We, { size: 16, style: { color: o.colorSuccess } }),
                        }),
                        e.jsx('span', {
                          style: { color: o.colorTextSecondary, fontSize: 13, fontWeight: 600 },
                          children: h('benchmark.detail.stats.avgCost'),
                        }),
                      ],
                    }),
                    L == null
                      ? e.jsx('span', {
                          style: { color: o.colorTextQuaternary, fontSize: 20, fontWeight: 'bold' },
                          children: '--',
                        })
                      : e.jsxs(r, {
                          gap: 2,
                          children: [
                            e.jsxs(r, {
                              horizontal: !0,
                              align: 'baseline',
                              gap: 4,
                              children: [
                                e.jsxs('span', {
                                  style: { color: o.colorText, fontSize: 24, fontWeight: 'bold' },
                                  children: ['$', De(L)],
                                }),
                                e.jsx('span', {
                                  style: { color: o.colorTextTertiary, fontSize: 13 },
                                  children: h('benchmark.detail.stats.perRun'),
                                }),
                              ],
                            }),
                            e.jsx('span', {
                              style: { color: o.colorTextQuaternary, fontSize: 12 },
                              children: h('benchmark.detail.stats.basedOnLastNRuns', {
                                count: t.length,
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(ut, { benchmark: a, open: C, onCancel: () => S(!1), onSuccess: d }),
        ],
      });
    },
  ),
  ht = (a) =>
    a
      .trim()
      .toLowerCase()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/[^\da-z-]/g, ''),
  mt = {
    'research': 'Deep Research / QA',
    'tool-use': 'Tool Use',
    'memory': 'Memory',
    'reference': 'Reference Formats',
    'custom': 'Custom',
  },
  xt = n.memo(({ open: a, onClose: t, benchmarkId: m, onSuccess: D }) => {
    const { t: s } = $('eval'),
      { message: g } = _.useApp(),
      [l] = w.useForm(),
      [h, f] = n.useState(!1),
      [T, b] = n.useState('custom'),
      [v, C] = n.useState(!1),
      S = w.useWatch('name', l),
      d = w.useWatch('evalMode', l);
    n.useEffect(() => {
      !v && S && l.setFieldValue('identifier', ht(S));
    }, [S, v, l]);
    const c = () => {
        (l.resetFields(), b('custom'), C(!1), t());
      },
      W = async () => {
        try {
          const p = await l.validateFields();
          f(!0);
          const y = await Z.createDataset({
            benchmarkId: m,
            identifier: p.identifier.trim(),
            name: p.name,
            description: p.description,
            evalConfig: p.evalConfig?.judgePrompt ? p.evalConfig : void 0,
            evalMode: p.evalMode || void 0,
            metadata: { preset: T },
          });
          (c(), D?.({ id: y.id, name: y.name, preset: T }));
        } catch (p) {
          if (p.errorFields) return;
          g.error(p.message || s('dataset.create.error'));
        } finally {
          f(!1);
        }
      },
      N = et(),
      j = U[T],
      k = Object.entries(N)
        .filter(([p, y]) => y.length > 0)
        .map(([p, y]) => ({
          label: mt[p] || p,
          options: y.map((M) => ({ label: M.name, value: M.id })),
        }));
    return e.jsx(oe, {
      destroyOnHidden: !0,
      okButtonProps: { loading: h },
      okText: s('common.create'),
      open: a,
      title: s('dataset.create.title'),
      width: 600,
      onCancel: c,
      onOk: W,
      children: e.jsxs(w, {
        form: l,
        layout: 'vertical',
        style: { paddingBlock: 16 },
        children: [
          e.jsx(w.Item, {
            label: s('dataset.create.name.label'),
            name: 'name',
            rules: [{ required: !0, message: s('dataset.create.nameRequired') }],
            children: e.jsx(q, { placeholder: s('dataset.create.name.placeholder') }),
          }),
          e.jsx(w.Item, {
            label: s('dataset.create.identifier.label'),
            name: 'identifier',
            rules: [{ required: !0, message: s('dataset.create.identifierRequired') }],
            children: e.jsx(q, {
              placeholder: s('dataset.create.identifier.placeholder'),
              onChange: () => C(!0),
            }),
          }),
          e.jsx(w.Item, {
            label: s('dataset.create.description.label'),
            name: 'description',
            children: e.jsx(q.TextArea, {
              placeholder: s('dataset.create.description.placeholder'),
              rows: 3,
            }),
          }),
          e.jsx(w.Item, {
            extra: s('dataset.evalMode.hint'),
            label: s('evalMode.label'),
            name: 'evalMode',
            children: e.jsx(Y, {
              allowClear: !0,
              placeholder: s('evalMode.placeholder'),
              optionRender: (p) =>
                e.jsxs(r, {
                  gap: 2,
                  style: { padding: '4px 0' },
                  children: [
                    e.jsx('div', { children: p.label }),
                    e.jsx(J, {
                      style: { fontSize: 12 },
                      type: 'secondary',
                      children: s(`evalMode.${p.value}.desc`),
                    }),
                  ],
                }),
              options: [
                { label: s('evalMode.equals'), value: 'equals' },
                { label: s('evalMode.contains'), value: 'contains' },
                { label: s('evalMode.llm-rubric'), value: 'llm-rubric' },
                { label: s('evalMode.external'), value: 'external' },
              ],
            }),
          }),
          d === 'llm-rubric' &&
            e.jsx(w.Item, {
              label: s('evalMode.prompt.label'),
              name: ['evalConfig', 'judgePrompt'],
              children: e.jsx(q.TextArea, {
                placeholder: s('evalMode.prompt.placeholder'),
                rows: 3,
              }),
            }),
          e.jsx(w.Item, {
            label: s('dataset.create.preset.label'),
            extra: j
              ? e.jsxs(r, {
                  gap: 4,
                  style: { marginTop: 8 },
                  children: [
                    e.jsx('p', {
                      style: { color: 'var(--ant-color-text-secondary)', fontSize: 12, margin: 0 },
                      children: j.formatDescription,
                    }),
                    e.jsxs('div', {
                      style: { color: 'var(--ant-color-text-tertiary)', fontSize: 12 },
                      children: [
                        e.jsx('strong', { children: 'Required:' }),
                        ' ',
                        j.requiredFields.join(', '),
                        j.optionalFields.length > 0 &&
                          e.jsxs(e.Fragment, {
                            children: [
                              ' · ',
                              e.jsx('strong', { children: 'Optional:' }),
                              ' ',
                              j.optionalFields.join(', '),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : null,
            children: e.jsx(Y, {
              options: k,
              placeholder: 'Select a preset',
              value: T,
              optionRender: (p) => {
                const y = U[p.value];
                return y
                  ? e.jsxs(r, {
                      horizontal: !0,
                      align: 'flex-start',
                      gap: 12,
                      style: { overflow: 'hidden', width: '100%' },
                      children: [
                        e.jsx(ke, {
                          flex: 'none',
                          height: 40,
                          width: 40,
                          style: {
                            border: `1px solid ${o.colorFillTertiary}`,
                            borderRadius: o.borderRadius,
                            background: o.colorBgElevated,
                          },
                          children: e.jsx(ne, { icon: y.icon, size: 18 }),
                        }),
                        e.jsxs(r, {
                          flex: 1,
                          gap: 2,
                          style: { minWidth: 0, overflow: 'hidden' },
                          children: [
                            e.jsx(J, {
                              ellipsis: !0,
                              style: { fontSize: 14, fontWeight: 500 },
                              children: y.name,
                            }),
                            e.jsx(J, {
                              ellipsis: !0,
                              style: { fontSize: 12 },
                              type: 'secondary',
                              children: y.description,
                            }),
                          ],
                        }),
                      ],
                    })
                  : p.label;
              },
              onChange: (p) => b(p),
            }),
          }),
        ],
      }),
    });
  }),
  gt = O(({ css: a, cssVar: t }) => ({
    emptyIcon: a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 50%;

    background: ${t.colorFillSecondary};
  `,
  })),
  ft = n.memo(({ onAddCase: a, onImport: t }) => {
    const { t: m } = $('eval');
    return e.jsxs(r, {
      align: 'center',
      gap: 8,
      justify: 'center',
      style: { padding: '48px 24px' },
      children: [
        e.jsx('div', {
          className: gt.emptyIcon,
          children: e.jsx(X, { size: 20, style: { color: 'var(--ant-color-text-tertiary)' } }),
        }),
        e.jsx('p', {
          style: { color: 'var(--ant-color-text)', fontSize: 14, fontWeight: 500, margin: 0 },
          children: m('testCase.empty.title'),
        }),
        e.jsx('p', {
          style: { color: 'var(--ant-color-text-tertiary)', fontSize: 12, margin: 0 },
          children: m('testCase.empty.description'),
        }),
        e.jsxs(r, {
          horizontal: !0,
          gap: 8,
          style: { marginTop: 8 },
          children: [
            e.jsx(E, { icon: H, size: 'small', onClick: a, children: m('testCase.actions.add') }),
            e.jsx(E, {
              icon: Le,
              size: 'small',
              type: 'primary',
              onClick: t,
              children: m('testCase.actions.import'),
            }),
          ],
        }),
      ],
    });
  }),
  A = O(({ css: a, cssVar: t }) => ({
    card: a`
    .ant-card-body {
      padding: 0;
    }
  `,
    caseCount: a`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,
    datasetDescription: a`
    overflow: hidden;

    margin: 0;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
    datasetHeader: a`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding: 16px;
    border: none;

    text-align: start;

    background: transparent;

    transition: background 0.2s;

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,
    datasetIcon: a`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: 8px;

    background: ${t.colorPrimaryBg};
  `,
    datasetName: a`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `,
    dropdownButton: a`
    width: 28px;
    height: 28px;
    padding: 0;
    color: ${t.colorTextTertiary};
  `,
    expandedSection: a`
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,
    footer: a`
    padding: 12px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,
    footerLink: a`
    text-decoration: none;
  `,
  })),
  jt = n.memo(
    ({
      benchmarkId: a,
      dataset: t,
      isExpanded: m,
      loading: D,
      total: s,
      filteredCases: g,
      search: l,
      diffFilter: h,
      pagination: f,
      onExpand: T,
      onEdit: b,
      onDeleteCase: v,
      onRefresh: C,
      onSearchChange: S,
      onDiffFilterChange: d,
      onPageChange: c,
      onAddCase: W,
      onImport: N,
      onRun: j,
    }) => {
      const { t: k } = $('eval'),
        { modal: p, message: y } = _.useApp(),
        M = n.useCallback(() => {
          p.confirm({
            content: k('dataset.delete.confirm'),
            okButtonProps: { danger: !0 },
            okText: k('common.delete'),
            onOk: async () => {
              try {
                (await Z.deleteDataset(t.id), y.success(k('dataset.delete.success')), C());
              } catch {
                y.error(k('dataset.delete.error'));
              }
            },
            title: k('common.delete'),
          });
        }, [t.id, y, p, C, k]);
      return e.jsxs(G, {
        className: A.card,
        children: [
          e.jsxs('div', {
            className: A.datasetHeader,
            onClick: T,
            children: [
              e.jsx('div', {
                className: A.datasetIcon,
                children: e.jsx(X, { size: 16, style: { color: 'var(--ant-color-primary)' } }),
              }),
              e.jsxs(r, {
                flex: 1,
                gap: 2,
                style: { minWidth: 0 },
                children: [
                  e.jsxs(r, {
                    horizontal: !0,
                    align: 'center',
                    gap: 8,
                    children: [
                      e.jsx('p', { className: A.datasetName, children: t.name }),
                      t.metadata?.preset &&
                        U[t.metadata.preset] &&
                        e.jsx(ze, { style: { fontSize: 10 }, children: U[t.metadata.preset].name }),
                    ],
                  }),
                  t.description &&
                    e.jsx('p', { className: A.datasetDescription, children: t.description }),
                ],
              }),
              e.jsxs('span', {
                className: A.caseCount,
                children: [
                  t.testCaseCount || 0,
                  ' ',
                  k('benchmark.detail.stats.cases').toLowerCase(),
                ],
              }),
              e.jsx(E, {
                icon: $e,
                size: 'small',
                style: { height: 28 },
                onClick: (L) => {
                  (L.stopPropagation(), j());
                },
                children: k('run.actions.run'),
              }),
              e.jsx(ce, {
                trigger: ['click'],
                menu: {
                  items: [
                    {
                      icon: e.jsx(_e, { size: 14 }),
                      key: 'edit',
                      label: k('common.edit'),
                      onClick: () => b(t),
                    },
                    { type: 'divider' },
                    {
                      danger: !0,
                      icon: e.jsx(le, { size: 14 }),
                      key: 'delete',
                      label: k('common.delete'),
                      onClick: M,
                    },
                  ],
                },
                children: e.jsx(E, {
                  className: A.dropdownButton,
                  icon: Oe,
                  size: 'small',
                  variant: 'text',
                  onClick: (L) => L.stopPropagation(),
                }),
              }),
              e.jsx(qe, {
                size: 16,
                style: {
                  color: 'var(--ant-color-text-tertiary)',
                  transform: m ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                },
              }),
            ],
          }),
          m &&
            e.jsxs('div', {
              className: A.expandedSection,
              children: [
                D
                  ? e.jsx(r, {
                      align: 'center',
                      justify: 'center',
                      style: { padding: '48px 24px' },
                      children: e.jsx(lt, { size: 48 }),
                    })
                  : s === 0
                    ? e.jsx(ft, { onAddCase: W, onImport: N })
                    : e.jsx(tt, {
                        readOnly: !0,
                        datasetEvalMode: t.evalMode,
                        diffFilter: h,
                        pagination: f,
                        search: l,
                        testCases: g,
                        total: s,
                        onDiffFilterChange: d,
                        onPageChange: c,
                        onSearchChange: S,
                      }),
                e.jsx(r, {
                  horizontal: !0,
                  align: 'center',
                  className: A.footer,
                  justify: 'center',
                  children: e.jsx(Te, {
                    className: A.footerLink,
                    to: `/eval/bench/${a}/datasets/${t.id}`,
                    children: e.jsx(E, {
                      icon: Qe,
                      iconPosition: 'end',
                      size: 'small',
                      variant: 'text',
                      children: k('dataset.detail.viewDetail'),
                    }),
                  }),
                }),
              ],
            }),
        ],
      });
    },
  ),
  yt = O(({ css: a, cssVar: t }) => ({
    emptyCard: a`
    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-block: 64px;
      padding-inline: 24px;
    }
  `,
  })),
  bt = n.memo(({ onAddDataset: a }) => {
    const { t } = $('eval');
    return e.jsx(G, {
      className: yt.emptyCard,
      children: e.jsx(it, {
        icon: X,
        description: e.jsxs(r, {
          gap: 4,
          children: [
            e.jsx('p', {
              style: { color: 'var(--ant-color-text)', fontSize: 14, fontWeight: 500, margin: 0 },
              children: t('dataset.empty.title'),
            }),
            e.jsx('p', {
              style: { color: 'var(--ant-color-text-tertiary)', fontSize: 12, margin: 0 },
              children: t('dataset.empty.description'),
            }),
          ],
        }),
        children: e.jsx(E, {
          icon: H,
          size: 'small',
          style: { marginTop: 16 },
          type: 'primary',
          onClick: a,
          children: t('dataset.actions.addDataset'),
        }),
      }),
    });
  }),
  K = O(({ css: a, cssVar: t }) => ({
    card: a`
    .ant-card-body {
      padding: 0;
    }
  `,
    header: a`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
  `,
    icon: a`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: 8px;

    background: ${t.colorFillQuaternary};
  `,
  })),
  vt = n.memo(({ benchmarkId: a, datasets: t, loading: m, onImport: D, onRefresh: s }) => {
    const { t: g } = $('eval'),
      { modal: l, message: h } = _.useApp(),
      [f, T] = n.useState(null),
      [b, v] = n.useState({ current: 1, pageSize: 5 }),
      [C, S] = n.useState(''),
      [d, c] = n.useState('all'),
      [W, N] = n.useState(!1),
      [j, k] = n.useState(null),
      [p, y] = n.useState(null),
      [M, L] = n.useState(null),
      [x, i] = n.useState(null),
      z = I((u) => u.useFetchTestCases),
      R = I((u) => u.refreshTestCases),
      { data: ee, isLoading: he } = z(
        f
          ? { datasetId: f, limit: b.pageSize, offset: (b.current - 1) * b.pageSize }
          : { datasetId: '', limit: 0, offset: 0 },
      ),
      me = ee?.data || [],
      xe = ee?.total || 0,
      te = n.useCallback(
        async (u) => {
          (await R(u), s());
        },
        [R, s],
      ),
      ge = me.filter(
        (u) =>
          !(
            (d !== 'all' && u.metadata?.difficulty !== d) ||
            (C && !u.content?.input?.toLowerCase().includes(C.toLowerCase()))
          ),
      ),
      fe = n.useCallback((u) => {
        (T((P) => (P === u ? null : u)), v({ current: 1, pageSize: 5 }), S(''), c('all'));
      }, []),
      je = n.useCallback((u) => {
        (S(u), v((P) => ({ ...P, current: 1 })));
      }, []),
      ye = n.useCallback((u) => {
        (c(u), v((P) => ({ ...P, current: 1 })));
      }, []),
      be = n.useCallback(
        (u) => {
          l.confirm({
            content: g('testCase.delete.confirm'),
            okButtonProps: { danger: !0 },
            okText: g('common.delete'),
            onOk: async () => {
              try {
                (await Z.deleteTestCase(u.id),
                  h.success(g('testCase.delete.success')),
                  f && (await R(f)),
                  s());
              } catch {
                h.error(g('testCase.delete.error'));
              }
            },
            title: g('common.delete'),
          });
        },
        [f, h, l, s, R, g],
      );
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(r, {
          gap: 16,
          children: [
            t.length > 0 &&
              e.jsxs(r, {
                horizontal: !0,
                align: 'center',
                justify: 'space-between',
                children: [
                  e.jsx('p', {
                    style: { color: 'var(--ant-color-text-tertiary)', fontSize: 14, margin: 0 },
                    children: g('benchmark.detail.datasetCount', { count: t.length }),
                  }),
                  e.jsx(E, {
                    icon: H,
                    size: 'small',
                    type: 'primary',
                    onClick: () => N(!0),
                    children: g('dataset.actions.addDataset'),
                  }),
                ],
              }),
            m && t.length === 0
              ? e.jsx(r, {
                  gap: 12,
                  children: [1, 2, 3].map((u) =>
                    e.jsx(
                      G,
                      {
                        className: K.card,
                        children: e.jsxs('div', {
                          className: K.header,
                          children: [
                            e.jsx('div', { className: K.icon }),
                            e.jsxs(r, {
                              flex: 1,
                              gap: 6,
                              children: [
                                e.jsx(F.Input, {
                                  active: !0,
                                  size: 'small',
                                  style: { height: 16, width: 120 },
                                }),
                                e.jsx(F.Input, {
                                  active: !0,
                                  size: 'small',
                                  style: { height: 12, width: 200 },
                                }),
                              ],
                            }),
                            e.jsx(F.Input, {
                              active: !0,
                              size: 'small',
                              style: { height: 14, width: 50 },
                            }),
                            e.jsx(F.Button, {
                              active: !0,
                              size: 'small',
                              style: { height: 28, width: 64 },
                            }),
                          ],
                        }),
                      },
                      u,
                    ),
                  ),
                })
              : t.length === 0
                ? e.jsx(bt, { onAddDataset: () => N(!0) })
                : e.jsx(r, {
                    gap: 12,
                    children: t.map((u) => {
                      const P = f === u.id;
                      return e.jsx(
                        jt,
                        {
                          benchmarkId: a,
                          dataset: u,
                          diffFilter: d,
                          filteredCases: P ? ge : [],
                          isExpanded: P,
                          loading: P ? he : !1,
                          pagination: b,
                          search: C,
                          total: P ? xe : 0,
                          onAddCase: () => L(u.id),
                          onDeleteCase: be,
                          onDiffFilterChange: ye,
                          onEdit: k,
                          onExpand: () => fe(u.id),
                          onImport: () => y(u.id),
                          onPageChange: (ve, Ce) => v({ current: ve, pageSize: Ce }),
                          onRefresh: s,
                          onRun: () => i(u.id),
                          onSearchChange: je,
                        },
                        u.id,
                      );
                    }),
                  }),
          ],
        }),
        j && e.jsx(at, { dataset: j, open: !!j, onCancel: () => k(null), onSuccess: s }),
        e.jsx(xt, {
          benchmarkId: a,
          open: W,
          onClose: () => N(!1),
          onSuccess: (u) => {
            (s(),
              l.success({
                cancelText: g('common.later'),
                content: g('dataset.create.importNow'),
                okCancel: !0,
                okText: g('dataset.actions.import'),
                onOk: () => {
                  y(u.id);
                },
                title: g('dataset.create.successTitle'),
              }));
          },
        }),
        e.jsx(st, {
          datasetId: p,
          open: !!p,
          presetId: t.find((u) => u.id === p)?.metadata?.preset,
          onClose: () => y(null),
          onSuccess: te,
        }),
        e.jsx(rt, { datasetId: M, open: !!M, onClose: () => L(null), onSuccess: te }),
        e.jsx(ue, {
          benchmarkId: a,
          datasetId: x,
          datasetName: t.find((u) => u.id === x)?.name || '',
          open: !!x,
          onClose: () => i(null),
        }),
      ],
    });
  }),
  Ct = n.memo(({ benchmarkId: a }) => {
    const { t } = $('eval'),
      [m, D] = n.useState(!1),
      [s, g] = n.useState(null),
      [l, h] = n.useState('all'),
      f = I((d) => d.useFetchRuns),
      T = I(pe.runList),
      b = I((d) => d.refreshRuns);
    f(a);
    const v = n.useMemo(
        () =>
          [...T].sort((d, c) => new Date(c.createdAt).getTime() - new Date(d.createdAt).getTime()),
        [T],
      ),
      C = n.useMemo(
        () =>
          l === 'all'
            ? v
            : l === 'active'
              ? v.filter((d) => d.status === 'running' || d.status === 'pending')
              : v.filter((d) => d.status === l),
        [v, l],
      ),
      S = [
        { label: t('table.filter.all'), value: 'all' },
        { label: t('run.status.completed'), value: 'completed' },
        { label: t('run.filter.active'), value: 'active' },
        { label: t('run.status.idle'), value: 'idle' },
        { label: t('run.status.failed'), value: 'failed' },
        { label: t('run.status.aborted'), value: 'aborted' },
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(r, {
          gap: 16,
          children: [
            v.length > 0 &&
              e.jsxs(r, {
                horizontal: !0,
                align: 'center',
                justify: 'space-between',
                children: [
                  e.jsxs(r, {
                    horizontal: !0,
                    align: 'center',
                    gap: 8,
                    children: [
                      e.jsx('p', {
                        style: { color: 'var(--ant-color-text-tertiary)', fontSize: 14, margin: 0 },
                        children: t('benchmark.detail.runCount', { count: C.length }),
                      }),
                      e.jsx(Y, {
                        options: S,
                        size: 'small',
                        style: { width: 128 },
                        value: l,
                        onChange: h,
                      }),
                    ],
                  }),
                  e.jsx(E, {
                    icon: H,
                    size: 'small',
                    type: 'primary',
                    onClick: () => D(!0),
                    children: t('run.actions.create'),
                  }),
                ],
              }),
            v.length === 0
              ? e.jsx(nt, { onCreate: () => D(!0) })
              : C.length === 0
                ? e.jsx('p', {
                    style: {
                      color: 'var(--ant-color-text-tertiary)',
                      fontSize: 14,
                      textAlign: 'center',
                    },
                    children: t('run.filter.empty'),
                  })
                : e.jsx(r, {
                    gap: 12,
                    children: C.map((d) =>
                      e.jsx(ot, { benchmarkId: a, run: d, onEdit: g, onRefresh: b }, d.id),
                    ),
                  }),
          ],
        }),
        e.jsx(ue, { benchmarkId: a, open: m, onClose: () => D(!1) }),
        s && e.jsx(ct, { open: !!s, run: s, onClose: () => g(null) }),
      ],
    });
  }),
  re = [Ue, He, V, Ge, Je, ie, Ke, Ye, Ze, Ve, Xe],
  St = (a) => {
    const t = a.split('').reduce((m, D) => m + D.charCodeAt(0), 0);
    return re[t % re.length];
  },
  Q = O(({ css: a }) => ({
    container: a`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,
    sectionTitle: a`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `,
  })),
  Pa = n.memo(() => {
    const { t: a } = $('eval'),
      { benchmarkId: t } = we(),
      m = n.useMemo(() => (t ? St(t) : V), [t]),
      D = I((c) => c.useFetchBenchmarkDetail),
      s = I((c) => (t ? c.benchmarkDetailMap[t] : void 0)),
      g = I((c) => c.useFetchDatasets),
      l = I((c) => c.datasetList),
      h = I((c) => c.isLoadingDatasets),
      f = I((c) => c.refreshDatasets),
      T = I((c) => c.useFetchRuns),
      b = I(pe.runList);
    (D(t), g(t));
    const v = n.useCallback(async () => {
        t && (await f(t));
      }, [t, f]),
      C = n.useCallback(async () => {
        t && (await f(t));
      }, [t, f]);
    T(t);
    const S = b.filter((c) => c.status === 'completed'),
      d = l.reduce((c, W) => c + (W.testCaseCount || 0), 0);
    return s
      ? e.jsxs(r, {
          className: Q.container,
          gap: 24,
          height: '100%',
          width: '100%',
          children: [
            e.jsx(pt, {
              benchmark: s,
              completedRuns: S,
              datasets: l,
              runCount: b.length,
              systemIcon: m,
              totalCases: d,
              onBenchmarkUpdate: C,
            }),
            s.tags &&
              s.tags.length > 0 &&
              e.jsx(r, {
                horizontal: !0,
                gap: 6,
                style: { flexWrap: 'wrap' },
                children: s.tags.map((c) =>
                  e.jsx(
                    de,
                    {
                      style: {
                        backgroundColor: 'transparent',
                        borderColor: 'var(--ant-color-border)',
                        color: 'var(--ant-color-text-tertiary)',
                        fontSize: 12,
                      },
                      children: c,
                    },
                    c,
                  ),
                ),
              }),
            e.jsx('h3', {
              className: Q.sectionTitle,
              children: a('benchmark.detail.tabs.datasets'),
            }),
            e.jsx(vt, {
              benchmarkId: t,
              datasets: l,
              loading: h,
              onImport: () => {},
              onRefresh: v,
            }),
            e.jsx('h3', { className: Q.sectionTitle, children: a('benchmark.detail.tabs.runs') }),
            e.jsx(Ct, { benchmarkId: t }),
          ],
        })
      : e.jsxs(r, {
          className: Q.container,
          gap: 24,
          height: '100%',
          width: '100%',
          children: [
            e.jsx(r, {
              gap: 16,
              children: e.jsxs(r, {
                horizontal: !0,
                align: 'start',
                gap: 12,
                children: [
                  e.jsx(F.Avatar, {
                    active: !0,
                    shape: 'square',
                    size: 40,
                    style: { borderRadius: 10 },
                  }),
                  e.jsxs(r, {
                    flex: 1,
                    gap: 8,
                    children: [
                      e.jsx(F.Input, { active: !0, style: { height: 24, width: 200 } }),
                      e.jsx(F.Input, {
                        active: !0,
                        size: 'small',
                        style: { height: 14, width: 320 },
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(r, {
              horizontal: !0,
              gap: 12,
              children: [1, 2, 3, 4].map((c) =>
                e.jsx(
                  G,
                  {
                    styles: { body: { padding: 16 } },
                    style: {
                      border: `1px solid ${o.colorBorder}`,
                      borderRadius: 8,
                      flex: 1,
                      minWidth: 0,
                    },
                    children: e.jsxs(r, {
                      gap: 12,
                      children: [
                        e.jsxs(r, {
                          horizontal: !0,
                          align: 'center',
                          gap: 8,
                          children: [
                            e.jsx(F.Avatar, {
                              active: !0,
                              shape: 'square',
                              size: 36,
                              style: { borderRadius: 8 },
                            }),
                            e.jsx(F.Input, {
                              active: !0,
                              size: 'small',
                              style: { height: 13, width: 80 },
                            }),
                          ],
                        }),
                        e.jsxs(r, {
                          gap: 4,
                          children: [
                            e.jsx(F.Input, { active: !0, style: { height: 24, width: 60 } }),
                            e.jsx(F.Input, {
                              active: !0,
                              size: 'small',
                              style: { height: 12, width: 100 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  c,
                ),
              ),
            }),
            e.jsx(F.Input, { active: !0, style: { height: 16, width: 80 } }),
            e.jsx(F.Input, { active: !0, style: { height: 64, width: '100%' } }),
            e.jsx(F.Input, { active: !0, style: { height: 16, width: 80 } }),
            e.jsx(F.Input, { active: !0, style: { height: 64, width: '100%' } }),
          ],
        });
  });
export { Pa as default };
