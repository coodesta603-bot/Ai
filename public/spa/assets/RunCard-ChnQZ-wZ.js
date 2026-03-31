import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as $,
  ax as re,
  aD as H,
  F as y,
  Z as K,
  C as ee,
  k as T,
  I as N,
  T as Ee,
  f as Y,
  c as $e,
  ay as Le,
  az as Oe,
  aA as Ne,
  aB as Re,
  aC as Be,
  A as Pe,
  aG as le,
  B as te,
  L as He,
} from './index-C8UyLGsD.js';
import { I as je } from './Input-C_EgL0SG.js';
import { T as Q } from './TextArea-CHeYteyg.js';
import { M as ue } from './Modal-Dd2pIxVd.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a as ae, u as P } from './store-1j_ZR_uL.js';
import { F as v } from './index-5nC5GwBn.js';
import { u as We } from './upload-BTy9wwF3.js';
import {
  br as Ue,
  m as L,
  cH as Qe,
  cG as Ge,
  ag as Xe,
  b4 as Ke,
  cl as we,
  P as Ce,
  bs as Se,
  l as Ye,
  ct as Ze,
  a_ as ke,
  aa as Je,
  t as Ve,
  cI as et,
  ae as tt,
  ac as at,
  bD as ot,
  bE as rt,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { I as G } from './index-OkOG2AHU.js';
import { C as st } from './index-BOZ0hr8D.js';
import { F as Te } from './Table-BlWKciej.js';
import { D as nt } from './index-BfwjtmVb.js';
import { U as it } from './index-C2-gySBL.js';
import { P as ze } from './progress-CqsUaYIW.js';
import { A as Ie, a as Fe } from './AccordionItem-BUupnbbL.js';
import './providerConfig-qS2Xx-oI.js';
import { A as lt } from './index-BAOF5XWg.js';
import { r as ct } from './selectors-D8FoU16Z.js';
import { S as ce } from './index-CqaQ90GQ.js';
import { T as de } from './index-GXVeGAZV.js';
import { D as me } from './index-BHffy9NV.js';
import { P as dt } from './Pagination-Cg0T9GpR.js';
import { E as pt } from './Empty-DHLc2EKW.js';
import { C as De } from './index-Cglhv3pZ.js';
import { S as ut } from './StatusBadge-B5lCwc0D.js';
import { a as mt } from './utils-DdCRt2d3.js';
const oe = {
    'browsecomp': {
      id: 'browsecomp',
      category: 'research',
      name: 'BrowseComp',
      description: 'Measuring the ability for agents to browse the web, comprises 1,266 questions.',
      icon: L,
      formatDescription: 'format: Topic (category/tags), Question (input), Answer (expected)',
      requiredFields: ['question', 'answer', 'problem_topic', 'canary'],
      optionalFields: ['case_id'],
      fieldInference: {
        input: ['question'],
        expected: ['answer'],
        choices: [],
        category: ['problem_topic'],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'browsecomp-zh': {
      id: 'browsecomp-zh',
      category: 'research',
      name: 'BrowseComp-ZH',
      description: 'Chinese web browsing: 289 multi-step reasoning questions',
      icon: L,
      formatDescription: 'format: Topic (category/tags), Question (input), Answer (expected)',
      requiredFields: ['Question', 'Answer'],
      optionalFields: ['Topic', 'canary', 'case_id'],
      fieldInference: {
        input: ['Question', 'question', 'prompt'],
        expected: ['Answer', 'answer'],
        choices: [],
        category: ['Topic', 'topic', 'category'],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'widesearch': {
      id: 'widesearch',
      category: 'research',
      name: 'WideSearch',
      description:
        'Evaluating the capabilities of agents in broad information-seeking tasks, consisting of 200 questions.',
      icon: L,
      formatDescription: 'format: instance_id, query (input), evaluation (expected), language',
      requiredFields: ['instance_id', 'query', 'evaluation', 'language'],
      optionalFields: ['case_id'],
      fieldInference: {
        input: ['query'],
        expected: ['evaluation'],
        choices: [],
        category: ['language'],
        sortOrder: [],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'hle-text': {
      id: 'hle-text',
      category: 'research',
      name: "Humanity's Last Exam, HLE (Text Only)",
      description:
        "Humanity's Last Exam (HLE) is a multi-modal benchmark at the frontier of human knowledge, consisting of 2150 questions.",
      icon: L,
      formatDescription:
        'format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category',
      requiredFields: [
        'id',
        'question',
        'answer',
        'answer_type',
        'rationale',
        'raw_subject',
        'category',
      ],
      optionalFields: ['canary', 'case_id'],
      fieldInference: {
        input: ['question'],
        expected: ['answer'],
        choices: [],
        category: ['category'],
      },
    },
    'hle-verified': {
      id: 'hle-verified',
      category: 'research',
      name: "Humanity's Last Exam, HLE (Verified Answers)",
      description:
        "A subset of Humanity's Last Exam (HLE) with verified answers, designed to evaluate the ability to produce correct answers rather than just plausible ones.",
      icon: L,
      formatDescription:
        'format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category, Verified_Classes',
      requiredFields: [
        'id',
        'question',
        'answer',
        'answer_type',
        'rationale',
        'raw_subject',
        'category',
        'Verified_Classes',
      ],
      optionalFields: ['canary', 'case_id'],
      fieldInference: {
        input: ['question'],
        expected: ['answer'],
        choices: [],
        category: ['category'],
      },
    },
    'deepsearchqa': {
      id: 'deepsearchqa',
      category: 'research',
      name: 'DeepSearchQA',
      description:
        'A 900-prompt factuality benchmark from Google DeepMind, designed to evaluate agents on difficult multi-step information-seeking tasks across 17 different fields.',
      icon: L,
      formatDescription: 'problem, problem_category, answer, answer_type',
      requiredFields: ['problem', 'answer', 'problem_category', 'answer_type'],
      optionalFields: ['case_id'],
      fieldInference: {
        input: ['problem'],
        expected: ['answer'],
        choices: [],
        category: ['problem_category'],
        sortOrder: [],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'sealqa': {
      id: 'sealqa',
      category: 'research',
      name: 'SealQA',
      description:
        'SealQA is a new challenge benchmark for evaluating SEarch- Augmented Language models on fact-seeking questions where web search yields conflicting, noisy, or unhelpful results.',
      icon: L,
      formatDescription: 'format: question (input), answer (expected), topic (category)',
      requiredFields: ['question', 'answer', 'topic', 'canary'],
      optionalFields: ['case_id'],
      fieldInference: {
        input: ['question'],
        expected: ['answer'],
        choices: [],
        category: ['topic'],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'xbench': {
      id: 'xbench',
      category: 'research',
      name: 'xbench',
      description: 'Chinese search: ~200 factual query questions',
      icon: L,
      formatDescription:
        'format: id (item number), prompt (input), type (metadata), answer (expected)',
      requiredFields: ['prompt', 'answer'],
      optionalFields: ['type', 'id'],
      fieldInference: {
        input: ['prompt', 'question', 'input'],
        expected: ['answer', 'response'],
        choices: [],
        category: ['type', 'category'],
        sortOrder: ['id'],
      },
      validation: { requireExpected: !0, expectedFormat: 'string' },
    },
    'mmlu': {
      id: 'mmlu',
      category: 'reference',
      name: 'MMLU (Reference)',
      description: 'Multiple choice format (for reference only)',
      icon: L,
      formatDescription:
        'format: question, choices array (or A/B/C/D columns), answer (index/letter)',
      requiredFields: ['question', 'choices', 'answer'],
      optionalFields: ['subject', 'difficulty'],
      fieldInference: {
        input: ['question', 'prompt', 'query'],
        expected: ['answer', 'correct_answer', 'label'],
        choices: ['choices', 'options', 'A', 'B', 'C', 'D'],
        category: ['context', 'subject', 'category'],
      },
      validation: { requireExpected: !0, requireChoices: !0, expectedFormat: 'index' },
    },
    'custom': {
      id: 'custom',
      category: 'custom',
      name: 'Custom',
      description: 'Define your own field mapping',
      icon: Ue,
      formatDescription:
        'Custom format - you define the mapping. Only requirement: must have an "input" field.',
      requiredFields: ['input'],
      optionalFields: ['expected', 'choices', 'category', 'metadata'],
      fieldInference: {
        input: ['input', 'question', 'prompt', 'query'],
        expected: ['expected', 'answer', 'output', 'response'],
        choices: ['choices', 'options'],
        category: ['category', 'type', 'topic', 'subject'],
      },
    },
  },
  xt = (o) => oe[o || 'custom'] || oe.custom,
  ht = () => {
    const o = { 'research': [], 'tool-use': [], 'memory': [], 'reference': [], 'custom': [] };
    return (
      Object.values(oe).forEach((t) => {
        (o[t.category] || (o[t.category] = []), o[t.category].push(t));
      }),
      o
    );
  },
  gt = {
    'custom': 'Custom',
    'memory': 'Memory',
    'reference': 'Reference Formats',
    'research': 'Deep Research / QA',
    'tool-use': 'Tool Use',
  },
  ra = l.memo(({ open: o, onCancel: t, dataset: n, onSuccess: b }) => {
    const { t: a } = $('eval'),
      { message: r } = re.useApp(),
      [c] = v.useForm(),
      [u, j] = l.useState(!1),
      [F, f] = l.useState('custom'),
      C = v.useWatch('evalMode', c);
    l.useEffect(() => {
      o &&
        n &&
        (c.setFieldsValue({
          description: n.description || '',
          evalConfig: n.evalConfig,
          evalMode: n.evalMode || void 0,
          name: n.name,
        }),
        f(n.metadata?.preset || 'custom'));
    }, [o, n, c]);
    const h = ht(),
      z = Object.entries(h)
        .filter(([m, s]) => s.length > 0)
        .map(([m, s]) => ({
          label: gt[m] || m,
          options: s.map((g) => ({ label: g.name, value: g.id })),
        }));
    return e.jsx(ue, {
      allowFullscreen: !0,
      destroyOnHidden: !0,
      okButtonProps: { loading: u },
      okText: a('common.update'),
      open: o,
      title: a('dataset.edit.title'),
      width: 480,
      onCancel: (m) => {
        (c.resetFields(), t?.(m));
      },
      onOk: async (m) => {
        try {
          const s = await c.validateFields();
          (j(!0),
            await ae.updateDataset({
              id: n.id,
              name: s.name.trim(),
              description: s.description?.trim() || void 0,
              evalConfig: s.evalConfig?.judgePrompt ? s.evalConfig : null,
              evalMode: s.evalMode || null,
              metadata: { ...n.metadata, preset: F },
            }),
            r.success(a('dataset.edit.success')),
            c.resetFields(),
            t?.(m),
            b?.());
        } catch (s) {
          if (s?.errorFields) return;
          r.error(a('dataset.edit.error'));
        } finally {
          j(!1);
        }
      },
      children: e.jsxs(v, {
        form: c,
        layout: 'vertical',
        style: { paddingBlock: 16 },
        children: [
          e.jsx(v.Item, {
            label: a('dataset.create.name.label'),
            name: 'name',
            rules: [{ message: a('dataset.create.nameRequired'), required: !0 }],
            children: e.jsx(je, {
              autoFocus: !0,
              placeholder: a('dataset.create.name.placeholder'),
            }),
          }),
          e.jsx(v.Item, {
            label: a('dataset.create.description.label'),
            name: 'description',
            children: e.jsx(Q, {
              placeholder: a('dataset.create.description.placeholder'),
              rows: 3,
            }),
          }),
          e.jsx(v.Item, {
            extra: a('dataset.evalMode.hint'),
            label: a('evalMode.label'),
            name: 'evalMode',
            children: e.jsx(H, {
              allowClear: !0,
              placeholder: a('evalMode.placeholder'),
              optionRender: (m) =>
                e.jsxs(y, {
                  gap: 2,
                  style: { padding: '4px 0' },
                  children: [
                    e.jsx('div', { children: m.label }),
                    e.jsx(K, {
                      style: { fontSize: 12 },
                      type: 'secondary',
                      children: a(`evalMode.${m.value}.desc`),
                    }),
                  ],
                }),
              options: [
                { label: a('evalMode.equals'), value: 'equals' },
                { label: a('evalMode.contains'), value: 'contains' },
                { label: a('evalMode.llm-rubric'), value: 'llm-rubric' },
                { label: a('evalMode.answer-relevance'), value: 'answer-relevance' },
                { label: a('evalMode.external'), value: 'external' },
              ],
            }),
          }),
          (C === 'llm-rubric' || C === 'answer-relevance') &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx(v.Item, {
                  initialValue: 'aihubmix',
                  label: 'Provider',
                  name: ['evalConfig', 'provider'],
                  children: e.jsx(Q, { placeholder: 'LLM provider (e.g. openai, azure)', rows: 1 }),
                }),
                e.jsx(v.Item, {
                  initialValue: 'gpt-5-nano',
                  label: 'Model',
                  name: ['evalConfig', 'model'],
                  children: e.jsx(Q, {
                    placeholder: 'LLM model to use for evaluation (e.g. gpt-4)',
                    rows: 1,
                  }),
                }),
                e.jsx(v.Item, {
                  label: 'System Prompt',
                  name: ['evalConfig', 'systemRole'],
                  children: e.jsx(Q, {
                    placeholder: 'Optional system prompt for the LLM judge',
                    rows: 3,
                  }),
                }),
                e.jsx(v.Item, {
                  label: 'Eval Prompt',
                  name: ['evalConfig', 'criteria'],
                  children: e.jsx(Q, { placeholder: 'Prompt template for the LLM judge', rows: 3 }),
                }),
                e.jsx(v.Item, {
                  label: a('evalMode.prompt.label'),
                  name: ['evalConfig', 'judgePrompt'],
                  children: e.jsx(Q, { placeholder: a('evalMode.prompt.placeholder'), rows: 3 }),
                }),
              ],
            }),
          e.jsx(v.Item, {
            label: a('dataset.create.preset.label'),
            style: { marginBottom: 0 },
            children: e.jsx(H, {
              options: z,
              placeholder: 'Select a preset',
              value: F,
              optionRender: (m) => {
                const s = oe[m.value];
                return s
                  ? e.jsxs(y, {
                      horizontal: !0,
                      align: 'flex-start',
                      gap: 12,
                      style: { overflow: 'hidden', width: '100%' },
                      children: [
                        e.jsx(ee, {
                          flex: 'none',
                          height: 40,
                          width: 40,
                          style: {
                            background: T.colorBgElevated,
                            border: `1px solid ${T.colorFillTertiary}`,
                            borderRadius: T.borderRadius,
                          },
                          children: e.jsx(N, { icon: s.icon, size: 18 }),
                        }),
                        e.jsxs(y, {
                          flex: 1,
                          gap: 2,
                          style: { minWidth: 0, overflow: 'hidden' },
                          children: [
                            e.jsx(K, {
                              ellipsis: !0,
                              style: { fontSize: 14, fontWeight: 500 },
                              children: s.name,
                            }),
                            e.jsx(K, {
                              ellipsis: !0,
                              style: { fontSize: 12 },
                              type: 'secondary',
                              children: s.description,
                            }),
                          ],
                        }),
                      ],
                    })
                  : m.label;
              },
              onChange: (m) => f(m),
            }),
          }),
        ],
      }),
    });
  }),
  pe = { choices: T.colorWarning, expected: T.colorSuccess, input: T.colorInfo },
  ft = new Set(['input', 'question', 'prompt', 'query', 'text', 'instruction', 'problem']),
  yt = new Set([
    'expected',
    'answer',
    'ideal',
    'target',
    'output',
    'response',
    'label',
    'ground_truth',
    'groundtruth',
  ]),
  vt = new Set(['category', 'topic', 'type', 'subject', 'class', 'tag']),
  bt = new Set(['choices', 'options', 'alternatives', 'candidates']),
  jt = new Set(['id', 'number', 'index', 'no', 'order', 'sort_order']),
  wt = (o, t) => {
    const n = {};
    let b = !1,
      a = !1,
      r = !1,
      c = !1,
      u = !1;
    const j = t ? new Set(t.fieldInference.input.map((s) => s.toLowerCase())) : ft,
      F = t ? new Set(t.fieldInference.expected.map((s) => s.toLowerCase())) : yt,
      f = t ? new Set(t.fieldInference.choices.map((s) => s.toLowerCase())) : bt,
      C = t ? new Set(t.fieldInference.category.map((s) => s.toLowerCase())) : vt,
      h = t?.fieldInference.sortOrder
        ? new Set(t.fieldInference.sortOrder.map((s) => s.toLowerCase()))
        : jt,
      z = new Set(t ? t.requiredFields.map((s) => s.toLowerCase()) : []),
      m = new Set(t ? t.optionalFields.map((s) => s.toLowerCase()) : []);
    for (const s of o) {
      const g = s.toLowerCase().trim();
      !b && j.has(g)
        ? ((n[s] = 'input'), (b = !0))
        : !a && F.has(g)
          ? ((n[s] = 'expected'), (a = !0))
          : !c && f.has(g)
            ? ((n[s] = 'choices'), (c = !0))
            : !r && C.has(g)
              ? ((n[s] = 'category'), (r = !0))
              : !u && h.has(g)
                ? ((n[s] = 'sortOrder'), (u = !0))
                : z.has(g) || m.has(g)
                  ? (n[s] = 'metadata')
                  : (n[s] = 'ignore');
    }
    return (!b && o.length > 0 && (n[o[0]] = 'input'), n);
  },
  fe = {
    category: 160,
    choices: 200,
    expected: 300,
    ignore: 100,
    input: 800,
    metadata: 160,
    sortOrder: 120,
  },
  Ct = new Set(['input', 'expected']),
  St = l.memo(
    ({
      headers: o,
      mapping: t,
      onMappingChange: n,
      preview: b,
      delimiter: a,
      onDelimiterChange: r,
      totalCount: c,
    }) => {
      const { t: u } = $('eval'),
        [j, F] = l.useState(!0),
        f = Object.values(t).includes('choices'),
        C = Object.values(t).includes('ignore'),
        h = l.useMemo(() => (j ? o.filter((d) => t[d] !== 'ignore') : o), [o, t, j]),
        z = (d) => pe[d] || T.colorTextTertiary,
        m = [
          { desc: 'inputDesc', label: 'input', value: 'input' },
          { desc: 'expectedDesc', label: 'expected', value: 'expected' },
          { desc: 'choicesDesc', label: 'choices', value: 'choices' },
          { desc: 'categoryDesc', label: 'category', value: 'category' },
          { desc: 'sortOrderDesc', label: 'sortOrder', value: 'sortOrder' },
          { desc: 'metadataDesc', label: 'metadata', value: 'metadata' },
          { desc: 'ignoreDesc', label: 'ignore', value: 'ignore' },
        ].map(({ desc: d, label: x, value: w }) => ({
          label: e.jsxs(y, {
            gap: 2,
            children: [
              e.jsx('span', { style: { fontSize: 11 }, children: u(`dataset.import.${x}`) }),
              e.jsx('span', {
                style: { color: z(w), fontSize: 11 },
                children: u(`dataset.import.${d}`),
              }),
            ],
          }),
          value: w,
        })),
        s = (d, x) => {
          const w = { ...t };
          if (x !== 'metadata' && x !== 'ignore')
            for (const [I, E] of Object.entries(w)) E === x && (w[I] = 'ignore');
          ((w[d] = x), n(w));
        },
        g = l.useMemo(
          () =>
            h.map((d) => {
              const x = t[d],
                w = x === 'ignore',
                I = Ct.has(x),
                E = pe[x];
              return {
                dataIndex: d,
                ellipsis: !I,
                onCell: w
                  ? () => ({ style: { color: T.colorTextQuaternary } })
                  : I
                    ? () => ({
                        style: {
                          verticalAlign: 'top',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        },
                      })
                    : void 0,
                title: e.jsxs(y, {
                  gap: 2,
                  children: [
                    e.jsx('span', { style: { fontSize: 13, opacity: w ? 0.4 : 1 }, children: d }),
                    e.jsx(H, {
                      options: m,
                      popupMatchSelectWidth: 200,
                      size: 'small',
                      value: x,
                      variant: 'borderless',
                      style: {
                        color: E || (w ? T.colorTextQuaternary : T.colorTextTertiary),
                        fontSize: 11,
                        marginInlineStart: -7,
                      },
                      onChange: (O) => s(d, O),
                    }),
                  ],
                }),
                width: fe[x],
              };
            }),
          [h, t],
        ),
        _ = l.useMemo(() => h.reduce((d, x) => d + fe[t[x]], 0), [h, t]);
      return e.jsxs(y, {
        gap: 12,
        children: [
          e.jsxs(y, {
            horizontal: !0,
            align: 'center',
            justify: 'space-between',
            children: [
              e.jsxs(y, {
                horizontal: !0,
                align: 'center',
                gap: 16,
                children: [
                  e.jsx('span', {
                    style: { color: T.colorTextTertiary, fontSize: 13 },
                    children: u('dataset.import.fieldMapping.desc'),
                  }),
                  e.jsx('span', {
                    style: { color: T.colorTextQuaternary, fontSize: 12 },
                    children: u('dataset.import.preview.rows', { count: c }),
                  }),
                ],
              }),
              e.jsxs(y, {
                horizontal: !0,
                align: 'center',
                gap: 16,
                children: [
                  f &&
                    e.jsxs(y, {
                      horizontal: !0,
                      align: 'center',
                      gap: 8,
                      children: [
                        e.jsx('span', {
                          style: {
                            color: T.colorTextSecondary,
                            fontSize: 12,
                            whiteSpace: 'nowrap',
                          },
                          children: u('dataset.import.expectedDelimiter.desc'),
                        }),
                        e.jsx(G, {
                          placeholder: u('dataset.import.expectedDelimiter.placeholder'),
                          size: 'small',
                          style: { width: 120 },
                          value: a,
                          onChange: (d) => r(d.target.value),
                        }),
                      ],
                    }),
                  C &&
                    e.jsx(st, {
                      checked: j,
                      onChange: (d) => F(d.target.checked),
                      children: e.jsx('span', {
                        style: { color: T.colorTextSecondary, fontSize: 12 },
                        children: u('dataset.import.hideSkipped'),
                      }),
                    }),
                ],
              }),
            ],
          }),
          e.jsx(Te, {
            bordered: !0,
            columns: g,
            dataSource: b.map((d, x) => ({ ...d, _key: x })),
            pagination: !1,
            rowKey: '_key',
            scroll: { x: _, y: 'calc(95vh - 280px)' },
            size: 'small',
          }),
        ],
      });
    },
  ),
  { Dragger: kt } = it,
  D = Y(({ css: o, cssVar: t }) => ({
    container: o`
    overflow: hidden;
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadiusLG};
  `,
    divider: o`
    margin: 0;
  `,
    draggerContent: o`
    min-height: 140px;
  `,
    fieldsWrapper: o`
    flex-wrap: wrap;
  `,
    formatDescription: o`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,
    hintText: o`
    margin: 0;
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,
    icon: o`
    color: ${t.colorPrimary};
  `,
    iconCenter: o`
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadius};
    background: ${t.colorBgElevated};
  `,
    presetDescription: o`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,
    presetName: o`
    font-size: 14px;
    font-weight: 500;
  `,
    progressWrapper: o`
    width: 100%;
    max-width: 320px;
  `,
    roleLabel: o`
    font-size: 10px;
  `,
    uploadText: o`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `,
  })),
  Tt = ['input', 'expected', 'choices', 'category', 'sortOrder'],
  ye = (o, t) => {
    const n = o.toLowerCase();
    for (const b of Tt) if (t[b]?.some((r) => r.toLowerCase() === n)) return b;
  },
  zt = l.memo(({ onFileSelect: o, loading: t, preset: n, uploadProgress: b }) => {
    const { t: a } = $('eval'),
      r = l.useMemo(() => {
        if (!n) return [];
        const c = n.requiredFields.map((j) => ({
            name: j,
            required: !0,
            role: ye(j, n.fieldInference),
          })),
          u = n.optionalFields.map((j) => ({
            name: j,
            required: !1,
            role: ye(j, n.fieldInference),
          }));
        return [...c, ...u];
      }, [n]);
    return e.jsxs(y, {
      gap: 16,
      children: [
        n &&
          e.jsxs('div', {
            className: D.container,
            children: [
              e.jsxs(y, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                paddingBlock: 12,
                paddingInline: 16,
                children: [
                  e.jsx(ee, {
                    className: D.iconCenter,
                    flex: 'none',
                    height: 36,
                    width: 36,
                    children: e.jsx(N, { icon: n.icon }),
                  }),
                  e.jsxs(y, {
                    flex: 1,
                    children: [
                      e.jsx('div', { className: D.presetName, children: n.name }),
                      e.jsx('div', { className: D.presetDescription, children: n.description }),
                    ],
                  }),
                ],
              }),
              e.jsx(nt, { className: D.divider }),
              e.jsxs(y, {
                gap: 12,
                paddingBlock: 12,
                paddingInline: 16,
                children: [
                  n.formatDescription &&
                    e.jsx('div', { className: D.formatDescription, children: n.formatDescription }),
                  e.jsx(y, {
                    horizontal: !0,
                    className: D.fieldsWrapper,
                    gap: 8,
                    children: r.map((c) => {
                      const u = c.role ? pe[c.role] : void 0;
                      return e.jsxs(
                        y,
                        {
                          align: 'center',
                          gap: 2,
                          children: [
                            e.jsxs(Ee, {
                              style: u
                                ? {
                                    background: `color-mix(in srgb, ${u} 15%, transparent)`,
                                    borderColor: 'transparent',
                                    color: u,
                                  }
                                : void 0,
                              children: [c.name, c.required && ' *'],
                            }),
                            c.role &&
                              e.jsx('div', {
                                className: D.roleLabel,
                                style: { color: u || void 0 },
                                children: c.role,
                              }),
                          ],
                        },
                        c.name,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
        e.jsx(kt, {
          accept: '.csv,.xlsx,.xls,.json,.jsonl',
          disabled: t,
          maxCount: 1,
          showUploadList: !1,
          beforeUpload: (c) => (o(c), !1),
          children: t
            ? e.jsxs(ee, {
                className: D.draggerContent,
                gap: 12,
                children: [
                  e.jsx(N, { className: D.icon, icon: Qe, size: { size: 40, strokeWidth: 1.5 } }),
                  e.jsx('p', { className: D.uploadText, children: a('dataset.import.uploading') }),
                  b &&
                    e.jsx('div', {
                      className: D.progressWrapper,
                      children: e.jsx(ze, { percent: b.progress, size: 'small' }),
                    }),
                ],
              })
            : e.jsxs(ee, {
                className: D.draggerContent,
                gap: 12,
                children: [
                  e.jsx(N, { className: D.icon, icon: Ge, size: { size: 40, strokeWidth: 1.5 } }),
                  e.jsx('p', {
                    className: D.uploadText,
                    children: a('dataset.import.upload.text'),
                  }),
                  e.jsx('p', { className: D.hintText, children: a('dataset.import.upload.hint') }),
                ],
              }),
        }),
      ],
    });
  }),
  sa = l.memo(({ open: o, onClose: t, datasetId: n, onSuccess: b, presetId: a }) => {
    const { t: r } = $('eval'),
      { message: c } = re.useApp(),
      [u, j] = l.useState(0),
      [F, f] = l.useState(!1),
      [C, h] = l.useState(!1),
      [z, m] = l.useState(),
      [s, g] = l.useState(''),
      [_, d] = l.useState(''),
      [x, w] = l.useState([]),
      [I, E] = l.useState([]),
      [O, R] = l.useState(0),
      [p, S] = l.useState(),
      [i, A] = l.useState({}),
      [X, W] = l.useState(''),
      se = l.useMemo(() => (a ? xt(a) : void 0), [a]),
      xe = l.useCallback(() => {
        (j(0), f(!1), h(!1), m(void 0), g(''), d(''), w([]), E([]), R(0), S(void 0), A({}), W(''));
      }, []),
      ne = l.useCallback(() => {
        (xe(), t());
      }, [t, xe]),
      Me = l.useCallback(
        async (M) => {
          (f(!0), m(void 0));
          try {
            const U = await We.uploadToServerS3(M, {
              directory: 'eval-datasets',
              onProgress: (ge, Z) => {
                m(Z);
              },
            });
            (g(U.path), d(M.name));
            const B = await ae.parseDatasetFile({ pathname: U.path, filename: M.name });
            (w(B.headers), E(B.preview), R(B.totalCount), S(B.format));
            const ie = wt(B.headers, se);
            (A(ie), j(1));
          } catch {
            setTimeout(() => {
              c.error(r('dataset.import.parseError'));
            }, 0);
          } finally {
            (f(!1), m(void 0));
          }
        },
        [c, se, r],
      ),
      he = l.useCallback(() => {
        const M = Object.entries(i).find(([, q]) => q === 'input')?.[0];
        if (!M) return null;
        const U = Object.entries(i).find(([, q]) => q === 'expected')?.[0],
          B = Object.entries(i).find(([, q]) => q === 'choices')?.[0],
          ie = Object.entries(i).find(([, q]) => q === 'category')?.[0],
          ge = Object.entries(i).find(([, q]) => q === 'sortOrder')?.[0],
          Z = Object.entries(i).filter(([, q]) => q === 'metadata'),
          _e = Z.length > 0 ? Object.fromEntries(Z.map(([q]) => [q, q])) : void 0;
        return {
          category: ie,
          choices: B,
          expected: U,
          expectedDelimiter: X || void 0,
          input: M,
          metadata: _e,
          sortOrder: ge,
        };
      }, [i, X]),
      qe = l.useCallback(async () => {
        const M = he();
        if (M) {
          h(!0);
          try {
            const U = await ae.importDataset({
              datasetId: n,
              pathname: s,
              filename: _,
              format: p,
              fieldMapping: {
                input: M.input,
                expected: M.expected,
                expectedDelimiter: M.expectedDelimiter,
                choices: M.choices,
                category: M.category,
                sortOrder: M.sortOrder,
                metadata: M.metadata,
              },
            });
            (setTimeout(() => {
              c.success(r('dataset.import.success', { count: U.count }));
            }, 0),
              ne(),
              b?.(n));
          } catch {
            setTimeout(() => {
              c.error(r('dataset.import.error'));
            }, 0);
          } finally {
            h(!1);
          }
        }
      }, [he, n, _, p, ne, c, b, s, r]),
      Ae = Object.values(i).includes('input');
    return e.jsx(ue, {
      allowFullscreen: !0,
      destroyOnHidden: !0,
      cancelText: u === 1 ? r('dataset.import.prev') : void 0,
      centered: u === 1,
      footer: u === 0 ? null : void 0,
      maskClosable: !1,
      okText: u === 1 ? r('dataset.import.confirm') : void 0,
      open: o,
      title: r('dataset.import.title'),
      width: u === 0 ? 720 : '98vw',
      okButtonProps: { disabled: !Ae, loading: C },
      styles:
        u === 1
          ? {
              container: { height: '95vh', display: 'flex', flexDirection: 'column' },
              body: { overflow: 'auto', maxHeight: 'unset', flex: 1 },
            }
          : void 0,
      onCancel: u === 1 ? () => j(0) : ne,
      onOk: u === 1 ? qe : void 0,
      children: e.jsxs('div', {
        style: { paddingBlock: 16 },
        children: [
          u === 0 && e.jsx(zt, { loading: F, preset: se, uploadProgress: z, onFileSelect: Me }),
          u === 1 &&
            e.jsx(St, {
              delimiter: X,
              headers: x,
              mapping: i,
              preview: I,
              totalCount: O,
              onDelimiterChange: W,
              onMappingChange: A,
            }),
        ],
      }),
    });
  }),
  na = l.memo(({ open: o, onClose: t, datasetId: n, onSuccess: b }) => {
    const { t: a } = $('eval'),
      { message: r } = re.useApp(),
      [c] = v.useForm(),
      [u, j] = l.useState(!1),
      F = v.useWatch('evalMode', c),
      f = l.useCallback(() => {
        (c.resetFields(), t());
      }, [c, t]),
      C = l.useCallback(async () => {
        const h = await c.validateFields();
        j(!0);
        try {
          const z = h.tags
            ? h.tags
                .split(',')
                .map((m) => m.trim())
                .filter(Boolean)
            : void 0;
          (await ae.createTestCase({
            content: { expected: h.expected, input: h.input },
            datasetId: n,
            evalConfig: h.evalConfig?.judgePrompt ? h.evalConfig : void 0,
            evalMode: h.evalMode || void 0,
            metadata: {
              ...(h.difficulty ? { difficulty: h.difficulty } : {}),
              ...(z ? { tags: z } : {}),
            },
          }),
            setTimeout(() => {
              r.success(a('testCase.create.success'));
            }, 0),
            f(),
            b?.(n));
        } catch {
          setTimeout(() => {
            r.error(a('testCase.create.error'));
          }, 0);
        } finally {
          j(!1);
        }
      }, [n, c, f, r, b, a]);
    return e.jsx(ue, {
      destroyOnHidden: !0,
      okButtonProps: { loading: u },
      okText: a('common.create'),
      open: o,
      title: a('testCase.create.title'),
      width: 520,
      onCancel: f,
      onOk: C,
      children: e.jsxs(v, {
        form: c,
        layout: 'vertical',
        style: { paddingTop: 16 },
        children: [
          e.jsx(v.Item, {
            label: a('testCase.create.input.label'),
            name: 'input',
            rules: [{ required: !0 }],
            children: e.jsx(G.TextArea, {
              autoSize: { maxRows: 6, minRows: 3 },
              placeholder: a('testCase.create.input.placeholder'),
            }),
          }),
          e.jsx(v.Item, {
            label: a('testCase.create.expected.label'),
            name: 'expected',
            rules: [{ message: a('testCase.create.expected.required'), required: !0 }],
            children: e.jsx(G.TextArea, {
              autoSize: { maxRows: 6, minRows: 2 },
              placeholder: a('testCase.create.expected.placeholder'),
            }),
          }),
          e.jsx(v.Item, {
            label: a('evalMode.label'),
            name: 'evalMode',
            children: e.jsx(H, {
              allowClear: !0,
              placeholder: a('evalMode.placeholder'),
              optionRender: (h) =>
                e.jsxs(y, {
                  gap: 2,
                  style: { padding: '4px 0' },
                  children: [
                    e.jsx('div', { children: h.label }),
                    e.jsx(K, {
                      style: { fontSize: 12 },
                      type: 'secondary',
                      children: a(`evalMode.${h.value}.desc`),
                    }),
                  ],
                }),
              options: [
                { label: a('evalMode.equals'), value: 'equals' },
                { label: a('evalMode.contains'), value: 'contains' },
                { label: a('evalMode.llm-rubric'), value: 'llm-rubric' },
              ],
            }),
          }),
          F === 'llm-rubric' &&
            e.jsx(v.Item, {
              label: a('evalMode.prompt.label'),
              name: ['evalConfig', 'judgePrompt'],
              children: e.jsx(G.TextArea, {
                autoSize: { maxRows: 8, minRows: 3 },
                placeholder: a('evalMode.prompt.placeholder'),
              }),
            }),
          e.jsx(Ie, {
            children: e.jsx(Fe, {
              itemKey: 'advanced',
              paddingBlock: 6,
              paddingInline: 4,
              title: a('testCase.create.advanced'),
              children: e.jsxs(y, {
                gap: 16,
                style: { paddingTop: 8 },
                children: [
                  e.jsx(v.Item, {
                    label: a('testCase.create.difficulty.label'),
                    name: 'difficulty',
                    style: { marginBottom: 0 },
                    children: e.jsx(H, {
                      allowClear: !0,
                      placeholder: a('testCase.create.difficulty.label'),
                      options: [
                        { label: a('difficulty.easy'), value: 'easy' },
                        { label: a('difficulty.medium'), value: 'medium' },
                        { label: a('difficulty.hard'), value: 'hard' },
                      ],
                    }),
                  }),
                  e.jsx(v.Item, {
                    label: a('testCase.create.tags.label'),
                    name: 'tags',
                    style: { marginBottom: 0 },
                    children: e.jsx(G, { placeholder: a('testCase.create.tags.placeholder') }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  }),
  ve = 100,
  be = 30,
  It = 240,
  J = Y(({ css: o, cssVar: t }) => ({
    agentSelect: o`
    .ant-select-content-value {
      height: 22px !important;
    }
  `,
    hint: o`
    display: inline-block;
    margin-block-start: 4px;
    font-size: 12px;
    color: ${t.colorTextQuaternary};
  `,
    timestampLink: o`
    cursor: pointer;

    display: inline-block;

    margin-block-start: 4px;

    font-size: 12px;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,
  })),
  ia = l.memo(({ open: o, onClose: t, benchmarkId: n, datasetId: b, datasetName: a }) => {
    const { t: r } = $('eval'),
      { t: c } = $('chat'),
      u = $e(),
      j = P((p) => p.createRun),
      F = P((p) => p.startRun),
      f = P(ct.isCreatingRun),
      C = P((p) => p.datasetList),
      [h] = v.useForm(),
      z = v.useWatch('k', h) ?? 1,
      m = !!b && !!a,
      [s, g] = l.useState([]),
      [_, d] = l.useState(!1);
    (l.useEffect(() => {
      o &&
        (d(!0),
        Le.queryAgents()
          .then((p) => g(p))
          .finally(() => d(!1)));
    }, [o]),
      l.useEffect(() => {
        o && b && !m && h.setFieldsValue({ datasetId: b });
      }, [o, b, m]));
    const x = l.useMemo(() => ({ avatar: Ne, id: Oe, title: c('inbox.title') }), [c]),
      w = l.useMemo(() => [x, ...s], [x, s]),
      I = l.useMemo(
        () =>
          w.map((p) => ({
            label: e.jsxs('span', {
              style: { alignItems: 'center', display: 'inline-flex', gap: 8 },
              children: [
                e.jsx(lt, {
                  avatar: p.avatar || void 0,
                  background: p.backgroundColor || void 0,
                  size: 20,
                  title: p.title || '',
                }),
                e.jsx('span', { children: p.title }),
              ],
            }),
            searchLabel: p.title || '',
            value: p.id,
          })),
        [w],
      ),
      E = l.useCallback((p, S) => {
        (S.stopPropagation(),
          S.preventDefault(),
          window.open(Re(p), `agent_${p}`, 'noopener,noreferrer'));
      }, []),
      O = async (p) => {
        const S = await h.validateFields(),
          i = S.maxSteps ?? ve,
          A = S.timeoutMinutes ?? be,
          X = S.k ?? 1,
          W = await j({
            config: { k: X, maxSteps: i, timeout: A * 6e4 },
            datasetId: m ? b : S.datasetId,
            name: S.name,
            targetAgentId: S.targetAgentId,
          });
        (W?.id && (p && (await F(W.id)), u(`/eval/bench/${n}/runs/${W.id}`)), t());
      },
      R = () => {
        (h.resetFields(), t());
      };
    return e.jsx(Be, {
      destroyOnHidden: !0,
      open: o,
      footer: e.jsxs(ce, {
        children: [
          e.jsx(le, { onClick: R, children: r('common.cancel') }),
          e.jsxs(ce.Compact, {
            children: [
              e.jsx(le, {
                loading: f,
                type: 'primary',
                onClick: () => O(!1),
                children: r('run.create.createOnly'),
              }),
              e.jsx(me, {
                menu: {
                  items: [
                    { key: 'createAndStart', label: r('run.create.confirm'), onClick: () => O(!0) },
                  ],
                },
                children: e.jsx(le, { icon: e.jsx(Ke, { size: 14 }), loading: f, type: 'primary' }),
              }),
            ],
          }),
        ],
      }),
      title: m ? r('run.create.titleWithDataset', { dataset: a }) : r('run.create.title'),
      onCancel: R,
      children: e.jsxs(v, {
        form: h,
        layout: 'vertical',
        style: { marginTop: 16 },
        children: [
          e.jsx(v.Item, {
            label: r('run.create.name'),
            name: 'name',
            rules: [{ message: r('run.create.name.required'), required: !0 }],
            extra: e.jsx(K, {
              className: J.timestampLink,
              type: 'secondary',
              onClick: () => {
                const p = new Date(),
                  S = `${p.getFullYear()}-${String(p.getMonth() + 1).padStart(2, '0')}-${String(p.getDate()).padStart(2, '0')} ${String(p.getHours()).padStart(2, '0')}:${String(p.getMinutes()).padStart(2, '0')}`;
                h.setFieldsValue({ name: S });
              },
              children: r('run.create.name.useTimestamp'),
            }),
            children: e.jsx(G, {
              placeholder: r('run.create.name.placeholder'),
              variant: 'filled',
            }),
          }),
          e.jsx(v.Item, {
            label: r('run.create.agent'),
            name: 'targetAgentId',
            rules: [{ message: r('run.create.agent.required'), required: !0 }],
            children: e.jsx(H, {
              allowClear: !0,
              showSearch: !0,
              className: J.agentSelect,
              loading: _,
              options: I,
              placeholder: r('run.create.agent.placeholder'),
              variant: 'filled',
              filterOption: (p, S) => S?.searchLabel?.toLowerCase().includes(p.toLowerCase()),
              optionRender: (p) =>
                e.jsxs('span', {
                  style: {
                    alignItems: 'center',
                    display: 'flex',
                    gap: 8,
                    justifyContent: 'space-between',
                  },
                  children: [
                    p.label,
                    e.jsx(Pe, { icon: Xe, size: 'small', onClick: (S) => E(p.value, S) }),
                  ],
                }),
            }),
          }),
          !m &&
            e.jsx(v.Item, {
              label: r('run.create.dataset'),
              name: 'datasetId',
              rules: [{ message: r('run.create.dataset.required'), required: !0 }],
              children: e.jsx(H, {
                placeholder: r('run.create.dataset.placeholder'),
                variant: 'filled',
                options: C.map((p) => ({
                  label: e.jsxs(ce, {
                    children: [
                      e.jsx('span', { children: p.name }),
                      p.testCaseCount !== void 0 &&
                        e.jsx('span', {
                          style: { color: 'var(--ant-color-text-quaternary)', fontSize: 12 },
                          children: r('run.create.caseCount', { count: p.testCaseCount }),
                        }),
                    ],
                  }),
                  value: p.id,
                })),
              }),
            }),
          e.jsx(Ie, {
            defaultExpandedKeys: [],
            children: e.jsx(Fe, {
              itemKey: 'advanced',
              paddingBlock: 6,
              paddingInline: 4,
              title: r('run.create.advanced'),
              children: e.jsxs(y, {
                gap: 16,
                style: { paddingTop: 8 },
                children: [
                  e.jsx(v.Item, {
                    initialValue: 1,
                    label: r('run.config.k'),
                    name: 'k',
                    style: { marginBottom: 0 },
                    extra: e.jsx('span', {
                      className: J.hint,
                      children: r('run.config.k.hint', { k: z }),
                    }),
                    children: e.jsx(de, {
                      max: 10,
                      min: 1,
                      step: 1,
                      style: { width: '100%' },
                      variant: 'filled',
                    }),
                  }),
                  e.jsx(v.Item, {
                    extra: e.jsx('span', {
                      className: J.hint,
                      children: r('run.config.maxSteps.hint'),
                    }),
                    initialValue: ve,
                    label: r('run.config.maxSteps'),
                    name: 'maxSteps',
                    style: { marginBottom: 0 },
                    children: e.jsx(de, {
                      max: 1e3,
                      min: 1,
                      step: 10,
                      style: { width: '100%' },
                      variant: 'filled',
                    }),
                  }),
                  e.jsx(v.Item, {
                    initialValue: be,
                    label: r('run.config.timeout'),
                    name: 'timeoutMinutes',
                    style: { marginBottom: 0 },
                    children: e.jsx(de, {
                      max: It,
                      min: 1,
                      style: { width: '100%' },
                      suffix: r('run.config.timeout.unit'),
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
  }),
  V = Y(({ css: o, cssVar: t }) => ({
    filterButton: o`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 10px;
    border: none;

    font-size: 11px;
    font-weight: 500;
    text-transform: capitalize;

    background: transparent;

    transition: all 0.2s;

    &[data-active='true'] {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    &[data-active='false'] {
      color: ${t.colorTextTertiary};

      &:hover {
        color: ${t.colorText};
      }
    }

    &:not(:first-child) {
      border-inline-start: 1px solid ${t.colorBorderSecondary};
    }
  `,
    filterContainer: o`
    overflow: hidden;
    display: flex;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 6px;
  `,
    filtersRow: o`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,
    table: o`
    .ant-table {
      font-size: 14px;
    }

    .ant-table-thead > tr > th {
      font-size: 12px;
      font-weight: 500;
      color: ${t.colorTextTertiary};
      background: ${t.colorFillQuaternary};
    }

    .ant-table-tbody > tr {
      &.row-clickable {
        cursor: pointer;
      }

      &:hover {
        background: ${t.colorFillQuaternary};
      }

      &.row-selected {
        background: ${t.colorPrimaryBg};
      }
    }
  `,
  })),
  la = l.memo(
    ({
      testCases: o,
      total: t,
      search: n,
      diffFilter: b,
      datasetEvalMode: a,
      pagination: r,
      onSearchChange: c,
      onDiffFilterChange: u,
      onPageChange: j,
      onPreview: F,
      onEdit: f,
      onDelete: C,
      onAddCase: h,
      onImport: z,
      selectedId: m,
      readOnly: s,
    }) => {
      const { t: g } = $('eval'),
        _ = l.useMemo(() => {
          const d = [
            {
              dataIndex: 'id',
              key: 'index',
              render: (x, w, I) =>
                e.jsx('span', {
                  style: {
                    color: 'var(--ant-color-text-tertiary)',
                    fontFamily: 'monospace',
                    fontSize: 12,
                  },
                  children: (r.current - 1) * r.pageSize + I + 1,
                }),
              title: '#',
              width: 48,
            },
            {
              dataIndex: ['content', 'input'],
              key: 'input',
              render: (x) =>
                e.jsx('p', {
                  style: {
                    color: 'var(--ant-color-text)',
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  },
                  children: x,
                }),
              title: g('table.columns.input'),
            },
            {
              dataIndex: ['content', 'expected'],
              ellipsis: !0,
              key: 'expected',
              render: (x) =>
                e.jsx('span', {
                  style: { color: 'var(--ant-color-text-secondary)' },
                  children: x || '-',
                }),
              title: g('table.columns.expected'),
              width: 200,
            },
            {
              dataIndex: 'evalMode',
              key: 'evalMode',
              render: (x) => {
                const w = x ?? a;
                if (!w)
                  return e.jsx('span', { style: { color: T.colorTextQuaternary }, children: '-' });
                const I = !x && !!a;
                return e.jsx('span', {
                  style: {
                    color: I ? T.colorTextQuaternary : T.colorTextSecondary,
                    fontSize: 12,
                    fontStyle: I ? 'italic' : 'normal',
                  },
                  children: g(`evalMode.${w}`),
                });
              },
              title: g('table.columns.evalMode'),
              width: 120,
            },
            {
              dataIndex: ['content', 'category'],
              key: 'category',
              render: (x) =>
                e.jsx('span', {
                  style: { color: 'var(--ant-color-text-tertiary)', fontSize: 12 },
                  children: x || '-',
                }),
              title: g('table.columns.category'),
              width: 120,
            },
          ];
          return (
            s ||
              d.push({
                key: 'actions',
                render: (x, w) =>
                  e.jsx('div', {
                    onClick: (I) => I.stopPropagation(),
                    children: e.jsx(me, {
                      trigger: ['click'],
                      menu: {
                        items: [
                          {
                            icon: e.jsx(Ce, { size: 14 }),
                            key: 'edit',
                            label: g('common.edit'),
                            onClick: () => f?.(w),
                          },
                          { type: 'divider' },
                          {
                            danger: !0,
                            icon: e.jsx(Se, { size: 14 }),
                            key: 'delete',
                            label: g('common.delete'),
                            onClick: () => C?.(w),
                          },
                        ],
                      },
                      children: e.jsx(te, {
                        icon: we,
                        size: 'small',
                        variant: 'text',
                        style: { color: T.colorTextTertiary, height: 28, padding: 0, width: 28 },
                      }),
                    }),
                  }),
                width: 48,
              }),
            d
          );
        }, [r, s, f, C, g, a]);
      return e.jsxs(e.Fragment, {
        children: [
          e.jsxs('div', {
            className: V.filtersRow,
            children: [
              e.jsxs(y, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [
                  e.jsxs('div', {
                    style: { position: 'relative' },
                    children: [
                      e.jsx(Ye, {
                        size: 14,
                        style: {
                          color: 'var(--ant-color-text-tertiary)',
                          left: 10,
                          position: 'absolute',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        },
                      }),
                      e.jsx(je, {
                        placeholder: g('testCase.search.placeholder'),
                        size: 'small',
                        value: n,
                        style: { fontSize: 12, paddingLeft: 32, width: 192 },
                        onChange: (d) => {
                          c(d.target.value);
                        },
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: V.filterContainer,
                    children: ['all', 'easy', 'medium', 'hard'].map((d) =>
                      e.jsx(
                        'button',
                        {
                          'className': V.filterButton,
                          'data-active': b === d,
                          'onClick': () => {
                            u(d);
                          },
                          'children': d,
                        },
                        d,
                      ),
                    ),
                  }),
                ],
              }),
              !s &&
                e.jsxs(y, {
                  horizontal: !0,
                  gap: 8,
                  children: [
                    e.jsx(te, {
                      icon: Ze,
                      size: 'small',
                      onClick: z,
                      children: g('testCase.actions.import'),
                    }),
                    e.jsx(te, {
                      icon: ke,
                      size: 'small',
                      type: 'primary',
                      onClick: h,
                      children: g('testCase.actions.add'),
                    }),
                  ],
                }),
            ],
          }),
          e.jsx('div', {
            className: V.table,
            children: e.jsx(Te, {
              columns: _,
              dataSource: o,
              pagination: !1,
              rowKey: 'id',
              size: 'small',
              rowClassName: (d) => {
                const x = [];
                return (
                  s || x.push('row-clickable'),
                  d.id === m && x.push('row-selected'),
                  x.join(' ')
                );
              },
              onRow: s ? void 0 : (d) => ({ onClick: () => F?.(d) }),
            }),
          }),
          t > r.pageSize &&
            e.jsx(y, {
              horizontal: !0,
              align: 'center',
              justify: 'end',
              style: { paddingBlock: 12, paddingInline: 16 },
              children: e.jsx(dt, {
                simple: !0,
                current: r.current,
                pageSize: r.pageSize,
                size: 'small',
                total: t,
                onChange: j,
              }),
            }),
        ],
      });
    },
  ),
  Ft = Y(({ css: o }) => ({
    emptyCard: o`
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
  ca = l.memo(({ onCreate: o }) => {
    const { t } = $('eval');
    return e.jsx(De, {
      className: Ft.emptyCard,
      children: e.jsx(pt, {
        icon: Je,
        description: e.jsxs(y, {
          gap: 4,
          children: [
            e.jsx('p', {
              style: { color: 'var(--ant-color-text)', fontSize: 14, fontWeight: 500, margin: 0 },
              children: t('run.empty.title'),
            }),
            e.jsx('p', {
              style: { color: 'var(--ant-color-text-tertiary)', fontSize: 12, margin: 0 },
              children: t('run.empty.descriptionBenchmark'),
            }),
          ],
        }),
        children: e.jsx(te, {
          icon: ke,
          size: 'small',
          style: { marginTop: 16 },
          type: 'primary',
          onClick: o,
          children: t('run.actions.create'),
        }),
      }),
    });
  }),
  k = Y(({ css: o, cssVar: t }) => ({
    arrowIcon: o`
    flex-shrink: 0;
    color: ${t.colorTextTertiary};
  `,
    card: o`
    transition: all 0.2s;

    .ant-card-body {
      padding: 20px;
    }

    &:hover {
      border-color: ${t.colorBorder};
    }
  `,
    cardLink: o`
    text-decoration: none;
  `,
    dropdownTrigger: o`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 4px;

    color: ${t.colorTextTertiary};

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,
    meta: o`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,
    metaHighlight: o`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,
    monoText: o`
    font-family: monospace;
  `,
    name: o`
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
    passRate: o`
    font-family: monospace;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: ${t.colorText};
  `,
    passRateLabel: o`
    font-size: 10px;
    color: ${t.colorTextTertiary};
  `,
    separator: o`
    color: ${t.colorBorder};
  `,
    stat: o`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    font-size: 13px;
  `,
    statError: o`
    color: ${t.colorError};
  `,
    statSuccess: o`
    color: ${t.colorSuccess};
  `,
    statWarning: o`
    color: ${t.colorWarning};
  `,
  })),
  da = l.memo(({ benchmarkId: o, run: t, onRefresh: n, onEdit: b }) => {
    const { t: a } = $('eval'),
      { modal: r, message: c } = re.useApp(),
      u = P((i) => i.deleteRun),
      j = P((i) => i.startRun),
      F = P((i) => i.abortRun),
      f = t.metrics,
      C = f?.totalCases ?? 0,
      h = f?.passedCases ?? 0,
      z = f?.failedCases ?? 0,
      m = f?.errorCases ?? 0,
      s = h + z + m,
      g = C > 0 ? (s / C) * 100 : 0,
      _ = f?.passRate != null ? f.passRate * 100 : 0,
      d = (t.status === 'completed' || t.status === 'running') && s > 0,
      x = t.status === 'idle' || t.status === 'failed' || t.status === 'aborted',
      w = t.status === 'running' || t.status === 'pending',
      I = (i) =>
        i
          ? (i instanceof Date ? i : new Date(i)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })
          : '',
      E = (i) => {
        (i.preventDefault(),
          i.stopPropagation(),
          r.confirm({
            content: a('run.actions.start.confirm'),
            okText: a('run.actions.start'),
            onOk: async () => {
              try {
                (await j(t.id, t.status !== 'idle'), await n?.());
              } catch (A) {
                c.error(A?.message || 'Failed to start run');
              }
            },
            title: a('run.actions.start'),
          }));
      },
      O = (i) => {
        (i?.preventDefault(),
          i?.stopPropagation(),
          r.confirm({
            content: a('run.actions.abort.confirm'),
            okText: a('run.actions.abort'),
            okButtonProps: { danger: !0 },
            onOk: async () => {
              (await F(t.id), await n?.());
            },
            title: a('run.actions.abort'),
          }));
      },
      R = (i) => {
        (i?.preventDefault(),
          i?.stopPropagation(),
          r.confirm({
            content: a('run.actions.delete.confirm'),
            okButtonProps: { danger: !0 },
            okText: a('run.actions.delete'),
            onOk: async () => {
              (await u(t.id), await n?.());
            },
            title: a('run.actions.delete'),
          }));
      },
      p = (i) => {
        (i?.preventDefault(), i?.stopPropagation(), b?.(t));
      },
      S = [
        ...(x
          ? [
              {
                icon: e.jsx(Ve, { size: 14 }),
                key: 'start',
                label: a('run.actions.start'),
                onClick: ({ domEvent: i }) => E(i),
              },
              { type: 'divider' },
            ]
          : []),
        {
          icon: e.jsx(Ce, { size: 14 }),
          key: 'edit',
          label: a('run.actions.edit'),
          onClick: ({ domEvent: i }) => p(i),
        },
        ...(w
          ? [
              {
                danger: !0,
                icon: e.jsx(et, { size: 14 }),
                key: 'abort',
                label: a('run.actions.abort'),
                onClick: ({ domEvent: i }) => O(i),
              },
            ]
          : []),
        { type: 'divider' },
        {
          danger: !0,
          icon: e.jsx(Se, { size: 14 }),
          key: 'delete',
          label: a('run.actions.delete'),
          onClick: ({ domEvent: i }) => R(i),
        },
      ];
    return e.jsx(He, {
      className: k.cardLink,
      to: `/eval/bench/${o}/runs/${t.id}`,
      children: e.jsx(De, {
        className: k.card,
        children: e.jsxs(y, {
          horizontal: !0,
          align: 'center',
          gap: 16,
          children: [
            e.jsxs(y, {
              flex: 1,
              gap: 4,
              style: { minWidth: 0 },
              children: [
                e.jsxs(y, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    e.jsx('span', { className: k.name, children: t.name }),
                    e.jsx(ut, { status: t.status }),
                  ],
                }),
                e.jsx(y, {
                  horizontal: !0,
                  align: 'center',
                  className: k.meta,
                  gap: 4,
                  children: [
                    t.createdAt && { text: I(t.createdAt) },
                    t.datasetName && { text: t.datasetName },
                    t.targetAgent?.title && { text: t.targetAgent.title },
                    t.targetAgent?.model && { className: k.monoText, text: t.targetAgent.model },
                    f?.duration != null && { className: k.metaHighlight, text: mt(f.duration) },
                    f?.totalCost != null && {
                      className: k.metaHighlight,
                      text: `$${f.totalCost.toFixed(2)}`,
                    },
                  ]
                    .filter((i) => !!i)
                    .map((i, A) =>
                      e.jsxs(
                        l.Fragment,
                        {
                          children: [
                            A > 0 && e.jsx('span', { className: k.separator, children: '/' }),
                            e.jsx('span', { className: i.className, children: i.text }),
                          ],
                        },
                        A,
                      ),
                    ),
                }),
              ],
            }),
            C > 0 &&
              t.status !== 'completed' &&
              e.jsxs(y, {
                gap: 4,
                style: { width: 160 },
                children: [
                  e.jsxs(y, {
                    horizontal: !0,
                    align: 'center',
                    justify: 'space-between',
                    children: [
                      e.jsxs('span', { className: k.meta, children: [s, '/', C] }),
                      e.jsxs('span', { className: k.meta, children: [g.toFixed(0), '%'] }),
                    ],
                  }),
                  e.jsx(ze, { percent: g, showInfo: !1, size: 'small' }),
                ],
              }),
            d &&
              e.jsxs(y, {
                horizontal: !0,
                align: 'center',
                gap: 10,
                children: [
                  e.jsxs('span', {
                    className: `${k.stat} ${k.statSuccess}`,
                    children: [e.jsx(N, { icon: tt, size: 14 }), h],
                  }),
                  e.jsxs('span', {
                    className: `${k.stat} ${k.statError}`,
                    children: [e.jsx(N, { icon: at, size: 14 }), z],
                  }),
                  m > 0 &&
                    e.jsxs('span', {
                      className: `${k.stat} ${k.statWarning}`,
                      children: [e.jsx(N, { icon: ot, size: 14 }), m],
                    }),
                ],
              }),
            d &&
              e.jsxs(y, {
                align: 'flex-end',
                gap: 0,
                style: { minWidth: 56 },
                children: [
                  e.jsxs('span', { className: k.passRate, children: [_.toFixed(0), '%'] }),
                  e.jsx('span', { className: k.passRateLabel, children: 'pass rate' }),
                ],
              }),
            e.jsx(me, {
              menu: { items: S },
              placement: 'bottomRight',
              trigger: ['click'],
              children: e.jsx('span', {
                className: k.dropdownTrigger,
                onClick: (i) => {
                  (i.preventDefault(), i.stopPropagation());
                },
                children: e.jsx(we, { size: 16 }),
              }),
            }),
            e.jsx(N, { className: k.arrowIcon, icon: rt, size: 16 }),
          ],
        }),
      }),
    });
  });
export { ra as D, ca as E, da as R, la as T, sa as a, na as b, ia as c, oe as d, ht as g };
