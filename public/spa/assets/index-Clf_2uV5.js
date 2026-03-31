import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as m,
  c as Z,
  L as j,
  bz as h,
  I as u,
  B,
  f as y,
  F as n,
  W as G,
  Z as g,
  m as J,
  $ as f,
  A as b,
  k as T,
  fB as X,
  T as V,
  j as Y,
  bi as ee,
  e as E,
  ao as te,
} from './index-C8UyLGsD.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as oe } from './store-DLK7hSbM.js';
import { N as re } from './NotFound-D5zLIqAX.js';
import { u as ie } from './useQueryParam-CeLVFIbd.js';
import { a as c } from './models-CeBX_1mO.js';
import { S as se } from './ScrollShadow-Dm9kdU7B.js';
import { u as ne } from './useQuery-C1-jdg1a.js';
import { S as ae } from './ShareButton-CRgemqa7.js';
import { D as le } from './DropdownMenu-CEFIlaZw.js';
import { P as C } from './index-DbyirWUA.js';
import { D as de } from './index-BHffy9NV.js';
import {
  b4 as me,
  u as ce,
  dy as pe,
  bj as ue,
  cQ as xe,
  ck as he,
  K as fe,
  R as ge,
  Z as je,
  dz as ye,
  cd as ve,
  dA as be,
  dB as ke,
  ax as we,
  dC as Te,
  av as M,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { M as R } from './index-Di19k3su.js';
import { q as H } from './base-AbuBx_QK.js';
import { T as v } from './Title-t_8XB7-h.js';
import { B as O } from './Block-DDntSWi2.js';
import { S as ze } from './providerConfig-qS2Xx-oI.js';
import { T as _e } from './Tabs-Bq_UMJa3.js';
import { I as Le } from './index-AEgLVfe0.js';
import { a as K } from './index-CATsCkTi.js';
import { f as w, h as U } from './format-DpcrcXfF.js';
import { g as _, a as L } from './pricing-CTrHA2DR.js';
import { D as Se } from './index-BfwjtmVb.js';
import { M as Ie, a as De } from './index-8owpmwUf.js';
import { P as Ce } from './PublishedTime-B_fy9H_1.js';
import { D as Re } from './ListLoading-Dv99wO_G.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './object-CksihGcT.js';
import './navigation-BPKNAvqq.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './Input-C_EgL0SG.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './Modal-Dd2pIxVd.js';
import './Drawer-Blxnywp3.js';
import './index-DLsdvBKx.js';
import './SiX-DO6VXJ8i.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-CaOmqfDS.js';
import './parseTrigger-BVMOpYJv.js';
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
import './LeftOutlined-Pp_b6_vA.js';
import './Dropdown-CemyFDx1.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './index-CXy3GcSN.js';
import './PlusOutlined-Budj8ek_.js';
import './Table-BlWKciej.js';
import './index-BOZ0hr8D.js';
import './useBubbleLock-D8efMGR_.js';
import './index-B0kjmwCf.js';
import './useForm-By-Y7CLc.js';
import './scrollTo-DrqiKkdE.js';
import './Pagination-Cg0T9GpR.js';
import './index-Bc7JilPY.js';
import './time-Co3YlGiT.js';
import './currency-iJxIWo9y.js';
import './Grid-CdN2I7qJ.js';
import './Empty-DHLc2EKW.js';
import './Popover-Cg4CTqoX.js';
const Q = l.createContext({}),
  Oe = l.memo(({ children: t, config: o = {} }) => e.jsx(Q, { value: o, children: t })),
  x = () => l.use(Q),
  S = y(({ css: t }) => ({
    button: t`
    button {
      width: 100%;
    }
  `,
  })),
  Pe = l.memo(() => {
    const { t } = m('discover'),
      { providers: o = [] } = x(),
      i = o.some((d) => d.id === 'lobehub'),
      r = Z(),
      a = o
        .filter((d) => d.id !== 'lobehub')
        .map((d) => ({
          icon: e.jsx(C, { provider: d.id, size: 20, type: 'avatar' }),
          key: d.id,
          label: e.jsx(j, {
            to: h('/community/provider', d.id),
            children: [d.name, t('models.guide')].join(' '),
          }),
        })),
      p = () => {
        r('/agent');
      };
    return i
      ? e.jsx(de.Button, {
          className: S.button,
          icon: e.jsx(u, { icon: me }),
          overlayStyle: { minWidth: 267 },
          size: 'large',
          style: { flex: 1, width: 'unset' },
          type: 'primary',
          menu: { items: a },
          onClick: p,
          children: t('models.chat'),
        })
      : a.length === 1
        ? e.jsx(j, {
            style: { flex: 1 },
            to: h('/community/provider', a[0].key),
            children: e.jsx(B, {
              block: !0,
              className: S.button,
              size: 'large',
              type: 'primary',
              children: t('models.guide'),
            }),
          })
        : e.jsx(le, {
            'data-no-highlight': !0,
            'items': a,
            'children': e.jsx(B, {
              className: S.button,
              size: 'large',
              style: { flex: 1, width: 'unset' },
              type: 'primary',
              children: t('models.guide'),
            }),
          });
  }),
  A = l.memo(() => {
    const { description: t, providers: o, displayName: i, identifier: r } = x();
    return e.jsxs(n, {
      horizontal: !0,
      align: 'center',
      gap: 8,
      children: [
        e.jsx(Pe, {}),
        e.jsx(ae, {
          meta: {
            avatar: e.jsx(R, { model: r, size: 64, type: 'avatar' }),
            desc: t,
            hashtags: o?.map((s) => s.name) || [],
            title: i || r,
            url: h(G, '/community/model', r),
          },
        }),
      ],
    });
  }),
  F = y(({ css: t, cssVar: o }) => ({
    desc: t`
      flex: 1;
      margin: 0 !important;
      font-size: 14px !important;
      color: ${o.colorTextSecondary};
    `,
    title: t`
      margin: 0 !important;
      font-size: 14px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${o.colorLink};
      }
    `,
  })),
  $e = l.memo(({ identifier: t, displayName: o }) => {
    const { t: i } = m('models');
    return e.jsxs(
      O,
      {
        horizontal: !0,
        gap: 12,
        padding: 12,
        variant: 'outlined',
        children: [
          e.jsx(R, { model: t, size: 40, style: { flex: 'none' }, type: 'avatar' }),
          e.jsxs(n, {
            flex: 1,
            gap: 6,
            style: { overflow: 'hidden' },
            children: [
              e.jsx(g, { ellipsis: !0, as: 'h2', className: F.title, children: o || t }),
              e.jsx(g, {
                as: 'p',
                className: F.desc,
                ellipsis: { rows: 2 },
                children: i(`${t}.description`),
              }),
            ],
          }),
        ],
      },
      t,
    );
  }),
  Ne = l.memo(() => {
    const { t } = m('discover'),
      { related: o, category: i } = x();
    return e.jsxs(n, {
      gap: 16,
      children: [
        e.jsx(v, {
          more: t('models.details.related.more'),
          moreLink: H.stringifyUrl({ query: { category: i }, url: '/community/model' }),
          children: t('models.details.related.listTitle'),
        }),
        e.jsx(n, {
          gap: 8,
          children: o?.map((r, s) => {
            const a = h('/community/model', r.identifier);
            return e.jsx(
              j,
              {
                style: { color: 'inherit', overflow: 'hidden' },
                to: a,
                children: e.jsx($e, { ...r }),
              },
              s,
            );
          }),
        }),
      ],
    });
  }),
  W = y(({ css: t, cssVar: o }) => ({
    desc: t`
      flex: 1;
      margin: 0 !important;
      font-size: 14px !important;
      color: ${o.colorTextSecondary};
    `,
    title: t`
      margin: 0 !important;
      font-size: 14px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${o.colorLink};
      }
    `,
  })),
  Be = l.memo(({ id: t, name: o }) => {
    const { t: i } = m('providers');
    return e.jsxs(
      O,
      {
        horizontal: !0,
        gap: 12,
        padding: 12,
        variant: 'outlined',
        children: [
          e.jsx(C, { provider: t, size: 40, style: { flex: 'none' }, type: 'avatar' }),
          e.jsxs(n, {
            flex: 1,
            gap: 6,
            style: { overflow: 'hidden' },
            children: [
              e.jsx(g, { ellipsis: !0, as: 'h2', className: W.title, children: o }),
              e.jsx(g, {
                as: 'p',
                className: W.desc,
                ellipsis: { rows: 2 },
                children: i(`${t}.description`),
              }),
            ],
          }),
        ],
      },
      t,
    );
  }),
  Me = l.memo(() => {
    const { t } = m('discover'),
      { providers: o = [] } = x();
    return e.jsxs(n, {
      gap: 16,
      children: [
        e.jsx(v, {
          more: t('providers.details.related.more'),
          moreLink: '/community/provider',
          children: t('providers.details.related.listTitle'),
        }),
        e.jsx(n, {
          gap: 8,
          children: o.slice(0, 6).map((i, r) => {
            const s = h('/community/provider', i.id);
            return e.jsx(
              j,
              {
                style: { color: 'inherit', overflow: 'hidden' },
                to: s,
                children: e.jsx(Be, { ...i }),
              },
              r,
            );
          }),
        }),
      ],
    });
  }),
  Ue = l.memo(({ mobile: t }) => {
    const { activeTab: o = c.Overview } = ne();
    return t
      ? e.jsx(n, { gap: 32, children: e.jsx(A, {}) })
      : e.jsxs(se, {
          hideScrollBar: !0,
          flex: 'none',
          gap: 32,
          size: 4,
          width: 360,
          style: {
            maxHeight: 'calc(100vh - 76px)',
            paddingBottom: 24,
            position: 'sticky',
            top: 16,
          },
          children: [
            e.jsx(A, {}),
            o !== c.Related && e.jsx(Ne, {}),
            o !== c.Overview && e.jsx(Me, {}),
          ],
        });
  }),
  k = y(({ css: t, cssVar: o }) => ({
    link: t`
      color: ${o.colorTextDescription};

      &:hover {
        color: ${o.colorInfo};
      }
    `,
    nav: t`
      border-block-end: 1px solid ${o.colorBorder};
    `,
  })),
  Ae = l.memo(({ mobile: t, setActiveTab: o, activeTab: i = c.Overview }) => {
    const { t: r } = m('discover'),
      s = e.jsx(_e, {
        activeKey: i,
        compact: t,
        items: [
          {
            icon: e.jsx(u, { icon: ce, size: 16 }),
            key: c.Overview,
            label: r('models.details.overview.title'),
          },
          {
            icon: e.jsx(u, { icon: pe, size: 16 }),
            key: c.Parameter,
            label: r('models.parameterList.title'),
          },
          {
            icon: e.jsx(u, { icon: ue, size: 16 }),
            key: c.Related,
            label: r('models.details.related.title'),
          },
        ],
        onChange: (a) => o?.(a),
      });
    return t
      ? s
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          className: k.nav,
          justify: 'space-between',
          children: [
            s,
            e.jsxs(n, {
              horizontal: !0,
              gap: 12,
              children: [
                e.jsx('a', {
                  className: k.link,
                  href: ze.discord,
                  rel: 'noreferrer',
                  target: '_blank',
                  children: r('mcp.details.nav.needHelp'),
                }),
                e.jsx('a', {
                  className: k.link,
                  href: 'https://github.com/lobehub/lobe-chat/tree/main/src/config/aiModels',
                  rel: 'noreferrer',
                  target: '_blank',
                  children: r('mcp.details.nav.viewSourceCode'),
                }),
                e.jsx('a', {
                  className: k.link,
                  href: 'https://github.com/lobehub/lobe-chat/issues/new/choose',
                  rel: 'noreferrer',
                  target: '_blank',
                  children: r('mcp.details.nav.reportIssue'),
                }),
              ],
            }),
          ],
        });
  }),
  Fe = l.memo(() => {
    const { providers: t = [] } = x(),
      { t: o } = m('discover');
    return e.jsx(J, {
      children: e.jsx(O, {
        variant: 'outlined',
        children: e.jsx(Le, {
          dataSource: t,
          rowKey: 'id',
          scroll: { x: 1e3 },
          columns: [
            {
              dataIndex: 'id',
              key: 'provider',
              render: (i, r) =>
                e.jsx(j, {
                  style: { color: 'inherit' },
                  to: h('/community/provider', r.id),
                  children: e.jsxs(n, {
                    horizontal: !0,
                    align: 'center',
                    gap: 8,
                    children: [
                      e.jsx(C, { provider: r.id, size: 24, type: 'avatar' }),
                      e.jsx('div', { style: { fontWeight: 500 }, children: r.name }),
                    ],
                  }),
                }),
              sorter: (i, r) => i.name.localeCompare(r.name),
              title: o('tab.provider'),
              width: 200,
            },
            {
              dataIndex: 'model.abilities',
              key: 'abilities',
              render: (i, r) => (r?.model?.abilities ? e.jsx(K, { ...r?.model?.abilities }) : '--'),
              title: o('models.abilities'),
              width: 120,
            },
            {
              dataIndex: 'model.contextLength',
              key: 'contextLength',
              render: (i, r) =>
                r.model?.contextWindowTokens ? w(r.model.contextWindowTokens) : '--',
              sorter: (i, r) =>
                (i.model?.contextWindowTokens || 0) - (r.model?.contextWindowTokens || 0),
              title: o('models.contentLength'),
              width: 120,
            },
            {
              dataIndex: 'model.maxOutput',
              key: 'maxOutput',
              render: (i, r) =>
                r.model?.maxOutput
                  ? w(r.model.maxOutput)
                  : r.model?.maxDimension
                    ? w(r.model.maxDimension)
                    : '--',
              showSorterTooltip: !1,
              sorter: (i, r) => {
                const s = i.model?.maxOutput || i.model?.maxDimension || 0,
                  a = r.model?.maxOutput || r.model?.maxDimension || 0;
                return s - a;
              },
              title: e.jsx(f, {
                title: o('models.providerInfo.maxOutputTooltip'),
                children: e.jsx('span', { children: o('models.providerInfo.maxOutput') }),
              }),
              width: 120,
            },
            {
              dataIndex: 'model.inputPrice',
              key: 'inputPrice',
              render: (i, r) => {
                const s = _(r.model?.pricing);
                return s ? '$' + U(s, r.model.pricing?.currency) : '--';
              },
              showSorterTooltip: !1,
              sorter: (i, r) => {
                const s = _(i.model?.pricing) || 0,
                  a = _(r.model?.pricing) || 0;
                return s - a;
              },
              title: e.jsx(f, {
                title: o('models.providerInfo.inputTooltip'),
                children: e.jsx('span', { children: o('models.providerInfo.input') }),
              }),
              width: 100,
            },
            {
              dataIndex: 'model.outputPrice',
              key: 'outputPrice',
              render: (i, r) => {
                const s = L(r.model?.pricing);
                return s ? '$' + U(s, r.model.pricing?.currency) : '--';
              },
              showSorterTooltip: !1,
              sorter: (i, r) => {
                const s = L(i.model?.pricing) || 0,
                  a = L(r.model?.pricing) || 0;
                return s - a;
              },
              title: e.jsx(f, {
                title: o('models.providerInfo.outputTooltip'),
                children: e.jsx('span', { children: o('models.providerInfo.output') }),
              }),
              width: 100,
            },
            {
              align: 'right',
              dataIndex: 'action',
              key: 'action',
              render: (i, r) => {
                const s = r.id === 'lobehub';
                return e.jsxs(n, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  justify: 'flex-end',
                  children: [
                    s &&
                      e.jsx(f, {
                        title: o('models.providerInfo.officialTooltip'),
                        children: e.jsx(b, {
                          color: T.colorSuccess,
                          icon: xe,
                          size: 'small',
                          variant: 'filled',
                        }),
                      }),
                    !s &&
                      e.jsx(f, {
                        title: o('models.providerInfo.apiTooltip'),
                        children: e.jsx(b, {
                          icon: e.jsx(u, { icon: he }),
                          size: 'small',
                          variant: 'filled',
                        }),
                      }),
                    e.jsx(f, {
                      title: o('models.guide'),
                      children: e.jsx('a', {
                        href: h(X, r.id),
                        rel: 'noreferrer',
                        target: '_blank',
                        children: e.jsx(b, { icon: fe, size: 'small', variant: 'filled' }),
                      }),
                    }),
                    e.jsx(j, {
                      style: { color: 'inherit' },
                      to: h('/community/provider', r.id),
                      children: e.jsx(b, {
                        color: T.colorTextDescription,
                        icon: ge,
                        size: 'small',
                        variant: 'filled',
                      }),
                    }),
                  ],
                });
              },
              title: '',
              width: 120,
            },
          ],
        }),
      }),
    });
  }),
  We = l.memo(() => {
    const { t } = m('discover'),
      { providers: o = [] } = x();
    return e.jsxs(n, {
      gap: 16,
      children: [
        e.jsx(v, {
          tag: e.jsx(V, { children: o.length }),
          children: t('models.supportedProviders'),
        }),
        e.jsx(Fe, {}),
      ],
    });
  }),
  I = y(({ css: t, cssVar: o }) => ({
    container: t`
    overflow: hidden;
    min-width: 64px;
  `,
    number: t`
    margin: 0 !important;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
  `,
    title: t`
    margin: 0 !important;

    font-size: 12px;
    line-height: 1.2;
    color: ${o.colorTextSecondary};
    text-align: center;
  `,
  })),
  D = l.memo(
    ({
      className: t,
      valueStyle: o,
      titleStyle: i,
      valuePlacement: r = 'top',
      tooltip: s,
      title: a,
      value: p,
      ...d
    }) => {
      const z = r === 'top',
        P = e.jsx(g, { className: I.number, ellipsis: { rows: 1 }, style: o, children: p }),
        $ = e.jsxs(g, {
          className: I.title,
          ellipsis: { rows: 1 },
          style: i,
          children: [a, s && e.jsx(u, { icon: je, style: { marginLeft: '0.4em' } })],
        }),
        N = e.jsx(n, {
          align: 'center',
          className: Y(I.container, t),
          flex: 1,
          justify: 'center',
          ...d,
          children: z
            ? e.jsxs(e.Fragment, { children: [P, $] })
            : e.jsxs(e.Fragment, { children: [$, P] }),
        });
      return s ? e.jsx(f, { title: s, children: N }) : N;
    },
  ),
  qe = 'https://lobehub.com/docs/usage/agents/model',
  q = (t) => (typeof t == 'number' ? t.toFixed(2) : t.toUpperCase()),
  Ve = l.memo(({ docUrl: t = qe, desc: o, type: i, defaultValue: r, range: s }) => {
    const { t: a } = m('discover');
    return e.jsxs(n, {
      align: 'flex-start',
      gap: 16,
      children: [
        e.jsxs('p', {
          style: { color: T.colorTextSecondary, margin: 0 },
          children: [
            o,
            ' ',
            e.jsx('a', {
              href: t,
              rel: 'noreferrer',
              target: '_blank',
              children: a('models.parameterList.docs'),
            }),
          ],
        }),
        e.jsx(Se, { dashed: !0, style: { margin: 0 } }),
        e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 16,
          style: { paddingBottom: 8 },
          wrap: 'wrap',
          children: [
            e.jsx(D, {
              gap: 4,
              title: a('models.parameterList.type'),
              value: e.jsx('code', { children: i.toUpperCase() }),
              valuePlacement: 'bottom',
              valueStyle: { fontSize: 14 },
              width: 100,
            }),
            e.jsx(D, {
              gap: 4,
              title: a('models.parameterList.defaultValue'),
              value: q(r),
              valuePlacement: 'bottom',
              valueStyle: { fontSize: 14 },
              width: 100,
            }),
            s &&
              e.jsx(D, {
                gap: 4,
                title: a('models.parameterList.range'),
                value: s.map((p) => (i === 'float' ? q(p) : p)).join(' ~ '),
                valuePlacement: 'bottom',
                valueStyle: { fontSize: 14 },
                width: 100,
              }),
          ],
        }),
      ],
    });
  }),
  Ee = l.memo(() => {
    const { t } = m('discover'),
      o = x(),
      i = [
        {
          defaultValue: 1,
          desc: t('models.parameterList.temperature.desc'),
          icon: ye,
          key: 'temperature',
          label: t('models.parameterList.temperature.title'),
          range: [0, 2],
          type: 'float',
        },
        {
          defaultValue: 1,
          desc: t('models.parameterList.top_p.desc'),
          icon: ve,
          key: 'top_p',
          label: t('models.parameterList.top_p.title'),
          range: [0, 1],
          type: 'float',
        },
        {
          defaultValue: 0,
          desc: t('models.parameterList.presence_penalty.desc'),
          icon: be,
          key: 'presence_penalty',
          label: t('models.parameterList.presence_penalty.title'),
          range: [-2, 2],
          type: 'float',
        },
        {
          defaultValue: 0,
          desc: t('models.parameterList.frequency_penalty.desc'),
          icon: ke,
          key: 'frequency_penalty',
          label: t('models.parameterList.frequency_penalty.title'),
          range: [-2, 2],
          type: 'float',
        },
        {
          defaultValue: '--',
          desc: t('models.parameterList.max_tokens.desc'),
          icon: we,
          key: 'max_tokens',
          label: t('models.parameterList.max_tokens.title'),
          range:
            o?.maxOutput || o?.maxDimension ? [0, w(o?.maxOutput || o?.maxDimension || 0)] : void 0,
          type: 'int',
        },
        {
          defaultValue: '--',
          desc: t('models.parameterList.reasoning_effort.desc'),
          icon: Te,
          key: 'reasoning_effort',
          label: t('models.parameterList.reasoning_effort.title'),
          range: ['low', 'high'],
          type: 'string',
        },
      ];
    return e.jsxs(n, {
      gap: 16,
      children: [
        e.jsx(v, { children: t('models.parameterList.title') }),
        e.jsx(ee, {
          defaultActiveKey: i.map((r) => r.key),
          expandIconPlacement: 'end',
          gap: 16,
          variant: 'outlined',
          items: i.map((r) => ({
            children: l.createElement(Ve, { ...r, key: r.key }),
            key: r.key,
            label: e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              gap: 8,
              children: [
                e.jsx(u, { icon: r.icon, size: 16 }),
                r.label,
                e.jsx(V, { children: r.key }),
              ],
            }),
          })),
        }),
      ],
    });
  }),
  He = l.memo(() => {
    const { t } = m('discover'),
      { related: o, category: i } = x();
    return e.jsxs(n, {
      gap: 16,
      children: [
        e.jsx(v, {
          more: t('assistants.details.related.more'),
          moreLink: H.stringifyUrl({ query: { category: i }, url: '/community/plugin' }),
          children: t('assistants.details.related.listTitle'),
        }),
        e.jsx(Ie, { data: o }),
      ],
    });
  }),
  Ke = l.memo(({ mobile: t }) => {
    const { mobile: o = t } = E(),
      [i, r] = ie('activeTab', { clearOnDefault: !0, defaultValue: c.Overview });
    return e.jsxs(n, {
      gap: 24,
      children: [
        e.jsx(Ae, { activeTab: i, mobile: o, setActiveTab: r }),
        e.jsxs(n, {
          gap: 48,
          horizontal: !o,
          style: o ? { flexDirection: 'column-reverse' } : void 0,
          children: [
            e.jsxs(n, {
              width: '100%',
              style: { overflow: 'hidden' },
              children: [
                i === c.Overview && e.jsx(We, {}),
                i === c.Parameter && e.jsx(Ee, {}),
                i === c.Related && e.jsx(He, {}),
              ],
            }),
            e.jsx(Ue, { mobile: o }),
          ],
        }),
      ],
    });
  }),
  Qe = y(({ css: t, cssVar: o }) => ({
    desc: t`
      color: ${o.colorTextSecondary};
    `,
    time: t`
      font-size: 12px;
      color: ${o.colorTextDescription};
    `,
    version: t`
      font-family: ${o.fontFamilyCode};
      font-size: 13px;
    `,
  })),
  Ze = l.memo(({ mobile: t }) => {
    const {
        identifier: o,
        releasedAt: i,
        displayName: r,
        type: s,
        abilities: a,
        contextWindowTokens: p,
      } = x(),
      { mobile: d = t } = E(),
      { t: z } = m('models');
    return e.jsxs(n, {
      gap: 12,
      children: [
        e.jsxs(n, {
          horizontal: !0,
          align: 'flex-start',
          gap: 16,
          width: '100%',
          children: [
            e.jsx(R, { model: o, size: d ? 48 : 64 }),
            e.jsxs(n, {
              flex: 1,
              gap: 4,
              style: { overflow: 'hidden' },
              children: [
                e.jsxs(n, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  justify: 'space-between',
                  style: { overflow: 'hidden', position: 'relative' },
                  children: [
                    e.jsx(n, {
                      horizontal: !0,
                      align: 'center',
                      flex: 1,
                      gap: 12,
                      style: { overflow: 'hidden', position: 'relative' },
                      children: e.jsx(g, {
                        as: 'h1',
                        ellipsis: { rows: 1 },
                        style: { fontSize: d ? 18 : 24, margin: 0 },
                        title: o,
                        children: r || o,
                      }),
                    }),
                    e.jsx(n, {
                      horizontal: !0,
                      align: 'center',
                      gap: 6,
                      children: s && e.jsx(De, { type: s }),
                    }),
                  ],
                }),
                e.jsxs(n, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  children: [
                    e.jsx('span', { children: o }),
                    e.jsx(u, { icon: M }),
                    e.jsx(K, { directionReverse: !0, contextWindowTokens: p, ...a }),
                    e.jsx(u, { icon: M }),
                    e.jsx(Ce, { className: Qe.time, date: i }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx('div', { style: { color: T.colorTextSecondary }, children: z(`${o}.description`) }),
      ],
    });
  }),
  Ge = l.memo(({ mobile: t }) => {
    const o = te(),
      i = decodeURIComponent(o.slug ?? ''),
      r = oe((p) => p.useModelDetail),
      { data: s, isLoading: a } = r({ identifier: i });
    return a
      ? e.jsx(Re, {})
      : s
        ? e.jsx(Oe, {
            config: s,
            children: e.jsxs(n, {
              gap: 16,
              children: [e.jsx(Ze, { mobile: t }), e.jsx(Ke, { mobile: t })],
            }),
          })
        : e.jsx(re, {});
  }),
  So = l.memo(() => e.jsx(Ge, { mobile: !0 }));
export { So as MobileModelPage, Ge as default };
