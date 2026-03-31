import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as b,
  ax as z,
  c as D,
  ao as q,
  ay as U,
  az as $,
  aA as P,
  aB as V,
  aC as X,
  A as k,
  aD as K,
  F as G,
  f as Q,
} from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { A as W, a as H } from './AccordionItem-BUupnbbL.js';
import { A as J } from './index-BAOF5XWg.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as C } from './store-1j_ZR_uL.js';
import { F as l } from './index-5nC5GwBn.js';
import { S as Y } from './index-CqaQ90GQ.js';
import { ag as w } from '../vendor/vendor-icons-BHMUH78i.js';
import { I as Z } from './index-OkOG2AHU.js';
import { T as p } from './index-GXVeGAZV.js';
const ee = 240,
  f = Q(({ css: o, cssVar: c }) => ({
    agentSelect: o`
    .ant-select-content-value {
      height: 22px !important;
    }
  `,
    hint: o`
    display: inline-block;
    margin-block-start: 4px;
    font-size: 12px;
    color: ${c.colorTextQuaternary};
  `,
  })),
  pe = i.memo(({ open: o, onClose: c, run: s }) => {
    const { t: a } = b('eval'),
      { t: g } = b('chat'),
      { message: x } = z.useApp(),
      _ = D(),
      { benchmarkId: h } = q(),
      E = C((e) => e.updateRun),
      v = C((e) => e.datasetList),
      [r] = l.useForm(),
      M = l.useWatch('k', r) ?? 1,
      [T, j] = i.useState(!1),
      [y, L] = i.useState([]),
      [O, I] = i.useState(!1),
      d = s?.status === 'idle',
      m = s?.status === 'completed',
      u = i.useMemo(() => v.find((e) => e.id === s?.datasetId), [v, s?.datasetId]);
    (i.useEffect(() => {
      !o ||
        !d ||
        (I(!0),
        U.queryAgents()
          .then((e) => L(e))
          .finally(() => I(!1)));
    }, [o, d]),
      i.useEffect(() => {
        o &&
          s &&
          r.setFieldsValue({
            k: s.config?.k,
            maxSteps: s.config?.maxSteps,
            name: s.name,
            targetAgentId: s.targetAgentId,
            timeoutMinutes: s.config?.timeout ? s.config.timeout / 6e4 : void 0,
          });
      }, [o, s]));
    const A = i.useMemo(() => ({ avatar: P, id: $, title: g('inbox.title') }), [g]),
      S = i.useMemo(() => [A, ...y], [A, y]),
      F = i.useMemo(
        () =>
          S.map((e) => ({
            label: t.jsxs('span', {
              style: { alignItems: 'center', display: 'inline-flex', gap: 8 },
              children: [
                t.jsx(J, {
                  avatar: e.avatar || void 0,
                  background: e.backgroundColor || void 0,
                  size: 20,
                  title: e.title || '',
                }),
                t.jsx('span', { children: e.title }),
              ],
            }),
            searchLabel: e.title || '',
            value: e.id,
          })),
        [S],
      ),
      N = i.useCallback((e, n) => {
        (n.stopPropagation(),
          n.preventDefault(),
          window.open(V(e), `agent_${e}`, 'noopener,noreferrer'));
      }, []),
      R = async () => {
        const e = await r.validateFields();
        j(!0);
        try {
          const n = {};
          (m ||
            (e.maxSteps != null && (n.maxSteps = e.maxSteps),
            e.timeoutMinutes != null && (n.timeout = e.timeoutMinutes * 6e4),
            e.k != null && (n.k = e.k)),
            await E({
              config: Object.keys(n).length > 0 ? n : void 0,
              id: s.id,
              name: e.name,
              targetAgentId: d ? e.targetAgentId : void 0,
            }),
            x.success(a('run.edit.success')),
            c());
        } catch {
          x.error(a('run.edit.error'));
        } finally {
          j(!1);
        }
      },
      B = () => {
        (r.resetFields(), c());
      };
    return t.jsx(X, {
      destroyOnClose: !0,
      confirmLoading: T,
      okText: a('benchmark.edit.confirm'),
      open: o,
      title: a('run.edit.title'),
      onCancel: B,
      onOk: R,
      children: t.jsxs(l, {
        form: r,
        layout: 'vertical',
        style: { marginTop: 16 },
        children: [
          t.jsx(l.Item, {
            label: a('run.create.dataset'),
            children: t.jsxs(Y, {
              children: [
                t.jsx('span', { children: u?.name || s.datasetId }),
                u?.testCaseCount !== void 0 &&
                  t.jsx('span', {
                    style: { color: 'var(--ant-color-text-quaternary)', fontSize: 12 },
                    children: a('run.create.caseCount', { count: u.testCaseCount }),
                  }),
                h &&
                  t.jsx(k, {
                    icon: w,
                    size: 'small',
                    title: a('dataset.detail.viewDetail'),
                    onClick: () => _(`/eval/bench/${h}/datasets/${s.datasetId}`),
                  }),
              ],
            }),
          }),
          t.jsx(l.Item, {
            label: a('run.create.name'),
            name: 'name',
            children: t.jsx(Z, {
              placeholder: a('run.create.name.placeholder'),
              variant: 'filled',
            }),
          }),
          d &&
            t.jsx(l.Item, {
              label: a('run.create.agent'),
              name: 'targetAgentId',
              rules: [{ message: a('run.create.agent.required'), required: !0 }],
              children: t.jsx(K, {
                allowClear: !0,
                showSearch: !0,
                className: f.agentSelect,
                loading: O,
                options: F,
                placeholder: a('run.create.agent.placeholder'),
                variant: 'filled',
                filterOption: (e, n) => n?.searchLabel?.toLowerCase().includes(e.toLowerCase()),
                optionRender: (e) =>
                  t.jsxs('span', {
                    style: {
                      alignItems: 'center',
                      display: 'flex',
                      gap: 8,
                      justifyContent: 'space-between',
                    },
                    children: [
                      e.label,
                      t.jsx(k, { icon: w, size: 'small', onClick: (n) => N(e.value, n) }),
                    ],
                  }),
              }),
            }),
          t.jsx(W, {
            defaultExpandedKeys: [],
            children: t.jsx(H, {
              itemKey: 'advanced',
              paddingBlock: 6,
              paddingInline: 4,
              title: a('run.create.advanced'),
              children: t.jsxs(G, {
                gap: 16,
                style: { paddingTop: 8 },
                children: [
                  t.jsx(l.Item, {
                    extra: t.jsx('span', {
                      className: f.hint,
                      children: a('run.config.k.hint', { k: M }),
                    }),
                    label: a('run.config.k'),
                    name: 'k',
                    style: { marginBottom: 0 },
                    children: t.jsx(p, {
                      disabled: m,
                      max: 10,
                      min: 1,
                      step: 1,
                      style: { width: '100%' },
                      variant: 'filled',
                    }),
                  }),
                  t.jsx(l.Item, {
                    extra: t.jsx('span', {
                      className: f.hint,
                      children: a('run.config.maxSteps.hint'),
                    }),
                    label: a('run.config.maxSteps'),
                    name: 'maxSteps',
                    style: { marginBottom: 0 },
                    children: t.jsx(p, {
                      disabled: m,
                      max: 1e3,
                      min: 1,
                      step: 10,
                      style: { width: '100%' },
                      variant: 'filled',
                    }),
                  }),
                  t.jsx(l.Item, {
                    label: a('run.config.timeout'),
                    name: 'timeoutMinutes',
                    style: { marginBottom: 0 },
                    children: t.jsx(p, {
                      disabled: m,
                      max: ee,
                      min: 1,
                      style: { width: '100%' },
                      suffix: a('run.config.timeout.unit'),
                      variant: 'filled',
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  });
export { pe as R };
