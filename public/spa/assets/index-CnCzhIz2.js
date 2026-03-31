import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as L,
  ai as Fe,
  N as ve,
  F as m,
  aD as Je,
  fg as et,
  gP as Pt,
  i as ue,
  B as D,
  ax as ye,
  Z,
  k as G,
  T as Tt,
  A as se,
  f as J,
  bx as Rt,
  u as Et,
  s as zt,
  I as R,
  m as Me,
  C as fe,
  j as Re,
  fm as Lt,
  cY as tt,
  aI as It,
  a$ as ce,
  aG as oe,
  bl as Nt,
  c as Bt,
  $ as ot,
  bA as _t,
  bz as Ft,
  fB as Kt,
  aY as Dt,
  z as Ke,
  r as $t,
  gQ as Wt,
  X as Ot,
} from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as P, b as Ut } from './store-CTAK9tZ0.js';
import { T as Gt } from './Tabs-Bq_UMJa3.js';
import { D as it } from './DropdownMenu-CEFIlaZw.js';
import { u as Vt } from './index-DXEQUIB7.js';
import { h as Ht, s as qt } from './providerConfig-qS2Xx-oI.js';
import { a as De, N as Qt } from './index-CATsCkTi.js';
import { h as pe } from './format-DpcrcXfF.js';
import { b as $e, g as We, a as Yt } from './pricing-CTrHA2DR.js';
import { M as Ee } from './Modal-Dd2pIxVd.js';
import { I as ge } from './Input-C_EgL0SG.js';
import { I as Xt } from './InputNumber-DGocrXJO.js';
import { S as Zt } from './index-BvIL68ic.js';
import {
  T as Jt,
  a as eo,
  b as to,
  c as oo,
  d as io,
  e as no,
  f as ro,
  g as so,
  R as ao,
  h as lo,
  i as co,
  j as uo,
  I as po,
  k as ho,
  l as mo,
  m as go,
  G as fo,
  n as xo,
  o as vo,
  p as yo,
  q as jo,
  E as bo,
  C as ko,
} from './ThinkingSlider-CIsWhNtc.js';
import { S as ne } from './index-CaOmqfDS.js';
import { T as Ce } from './Trans-B9Jc6Abr.js';
import { a as Oe } from './index-bx4f06U_.js';
import { T as re } from './index-DE9LlaC5.js';
import { S as nt } from './index-CqaQ90GQ.js';
import { F as z } from './index-5nC5GwBn.js';
import { C as le } from './index-BOZ0hr8D.js';
import { a as Q } from './_auth-sIxU1rKL.js';
import { M as we } from './index-Di19k3su.js';
import {
  P as Mo,
  aH as Co,
  dl as rt,
  cw as he,
  o as st,
  a_ as at,
  dZ as lt,
  d_ as wo,
  ac as So,
  cr as Ao,
  d$ as Po,
  e0 as To,
  ax as Ro,
  I as Eo,
  aN as zo,
  by as Lo,
  y as Io,
  bv as No,
  _ as xe,
  e1 as Bo,
  cR as Ue,
  aw as _o,
  e2 as Fo,
  b1 as Ko,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { S as Te } from './SortableList-Cl2V_SXC.js';
import { S as U } from './index-DLsdvBKx.js';
import { S as Do } from './SearchBar-BtAHEw-s.js';
import { A as $o } from './index-BAOF5XWg.js';
import { F as Ge } from './index-IVfJW6S-.js';
import { u as Wo } from './index-Bdt4jy61.js';
import { F as Oo } from './FormInput-Rmn91oHG.js';
import { F as Uo } from './FormPassword-DXUZnBof.js';
import { C as Go, K as Ve, L as Vo, a as Ho } from './index-B19ntTSq.js';
import { a5 as qo, aT as Qo } from './index-Br6hqyew.js';
import { A as Yo } from './Alert-lszDImnb.js';
import { S as Xo } from './Select-DX7LXAK9.js';
import { u as Zo } from './useProviderName-vIkJtqRT.js';
import { a as X } from './selectors-BgvhR9tA.js';
import { I as Jo } from './index-B5hU39Hp.js';
import { P as dt } from './index-DbyirWUA.js';
import { A as ei } from './index-DiBbr-it.js';
import { T as ti } from './TextArea-CHeYteyg.js';
import { F as oi } from './FormModal-CHolmKCi.js';
import { S as ii } from './Select-Bh2jXi9V.js';
import { P as He } from './index-Ch5xOhA1.js';
const O = 1024,
  B = (o) => Math.log2(o),
  qe = (o) => Math.round(Math.pow(2, o)),
  ni = (o) => Math.round(Math.pow(2, o) * O),
  ri = n.memo(({ value: o, onChange: t, defaultValue: d }) => {
    const { t: r } = L('components'),
      [i, s] = Fe(0, { defaultValue: d, onChange: t, value: o }),
      [g, c] = Fe(0, {
        defaultValue: B(typeof d > 'u' ? 0 : d / 1024),
        value: B(typeof o > 'u' ? 0 : o / O),
      }),
      p = (a) => {
        (c(a), s(qe(a) <= 2 ? 0 : ni(a)));
      },
      u = (a) => {
        (s(Math.round(a)), c(B(a / O)));
      },
      f = ve(),
      h = n.useMemo(
        () => ({
          [B(2)]: '0',
          [B(4)]: f ? '4' : '4K',
          [B(8)]: f ? '8' : '8K',
          [B(16)]: f ? '16' : '16K',
          [B(32)]: f ? '32' : '32K',
          [B(64)]: f ? '64' : '64K',
          [B((128 / O) * 1e3)]: ' ',
          [B((200 / O) * 1e3)]: f ? '200' : '200k',
          [B(O)]: '1M',
          [B(2 * O)]: '2M',
        }),
        [f],
      );
    return e.jsxs(m, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      children: [
        e.jsx(m, {
          flex: 1,
          children: e.jsx(Zt, {
            marks: h,
            max: B(2 * O),
            min: B(2),
            step: null,
            value: g,
            tooltip: {
              formatter: (a) => {
                if (typeof a > 'u') return;
                if (a <= B(2)) return r('MaxTokenSlider.unlimited');
                const l = qe(a);
                return l < 125
                  ? l.toFixed(0) + 'K'
                  : l < O
                    ? ((l * O) / 1e3).toFixed(0) + 'k'
                    : (l / O).toFixed(0) + 'M';
              },
            },
            onChange: p,
          }),
        }),
        e.jsx('div', {
          children: e.jsx(Xt, {
            changeOnWheel: !0,
            min: 0,
            step: 4 * O,
            value: i,
            onChange: (a) => {
              (!a && a !== 0) || u(a);
            },
          }),
        }),
      ],
    });
  }),
  si = [
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.disableContextCaching.hint',
      key: 'disableContextCaching',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.enableReasoning.hint',
      key: 'enableReasoning',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.enableAdaptiveThinking.hint',
      key: 'enableAdaptiveThinking',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.reasoningBudgetToken.hint',
      key: 'reasoningBudgetToken',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.reasoningBudgetToken32k.hint',
      key: 'reasoningBudgetToken32k',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.reasoningBudgetToken80k.hint',
      key: 'reasoningBudgetToken80k',
    },
    { hintKey: 'providerModels.item.modelConfig.extendParams.options.effort.hint', key: 'effort' },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.reasoningEffort.hint',
      key: 'reasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.gpt5ReasoningEffort.hint',
      key: 'gpt5ReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.gpt5_1ReasoningEffort.hint',
      key: 'gpt5_1ReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.gpt5_2ReasoningEffort.hint',
      key: 'gpt5_2ReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.gpt5_2ProReasoningEffort.hint',
      key: 'gpt5_2ProReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.grok4_20ReasoningEffort.hint',
      key: 'grok4_20ReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.codexMaxReasoningEffort.hint',
      key: 'codexMaxReasoningEffort',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.textVerbosity.hint',
      key: 'textVerbosity',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinking.hint',
      key: 'thinking',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingBudget.hint',
      key: 'thinkingBudget',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingLevel.hint',
      key: 'thinkingLevel',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingLevel2.hint',
      key: 'thinkingLevel2',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingLevel3.hint',
      key: 'thinkingLevel3',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingLevel4.hint',
      key: 'thinkingLevel4',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.thinkingLevel5.hint',
      key: 'thinkingLevel5',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.urlContext.hint',
      key: 'urlContext',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.imageAspectRatio.hint',
      key: 'imageAspectRatio',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.imageAspectRatio2.hint',
      key: 'imageAspectRatio2',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.imageResolution.hint',
      key: 'imageResolution',
    },
    {
      hintKey: 'providerModels.item.modelConfig.extendParams.options.imageResolution2.hint',
      key: 'imageResolution2',
    },
  ],
  ai = {
    codexMaxReasoningEffort: 'reasoningEffort',
    gpt5ReasoningEffort: 'reasoningEffort',
    gpt5_1ReasoningEffort: 'reasoningEffort',
    gpt5_2ProReasoningEffort: 'reasoningEffort',
    gpt5_2ReasoningEffort: 'reasoningEffort',
    grok4_20ReasoningEffort: 'reasoningEffort',
    imageAspectRatio2: 'imageAspectRatio',
    reasoningBudgetToken32k: 'reasoningBudgetToken',
    reasoningBudgetToken80k: 'reasoningBudgetToken',
    thinkingLevel2: 'thinkingLevel',
    thinkingLevel3: 'thinkingLevel',
    thinkingLevel4: 'thinkingLevel',
    thinkingLevel5: 'thinkingLevel',
  },
  li = {
    codexMaxReasoningEffort: {
      labelSuffix: ' (Codex)',
      previewWidth: 300,
      tag: 'reasoning_effort',
    },
    disableContextCaching: { labelSuffix: ' (Claude)', previewWidth: 400 },
    effort: { labelSuffix: ' (Opus 4.6)', previewWidth: 280, tag: 'output_config.effort' },
    enableAdaptiveThinking: { labelSuffix: ' (Opus 4.6)', previewWidth: 300, tag: 'thinking.type' },
    enableReasoning: { previewWidth: 300, tag: 'thinking.type' },
    gpt5ReasoningEffort: { previewWidth: 300, tag: 'reasoning_effort' },
    gpt5_1ReasoningEffort: {
      labelSuffix: ' (GPT-5.1)',
      previewWidth: 300,
      tag: 'reasoning_effort',
    },
    gpt5_2ProReasoningEffort: {
      labelSuffix: ' (GPT-5.2 Pro)',
      previewWidth: 300,
      tag: 'reasoning_effort',
    },
    gpt5_2ReasoningEffort: {
      labelSuffix: ' (GPT-5.2)',
      previewWidth: 300,
      tag: 'reasoning_effort',
    },
    grok4_20ReasoningEffort: {
      labelSuffix: ' (Grok 4.20)',
      previewWidth: 300,
      tag: 'reasoning_effort',
    },
    imageAspectRatio: { labelSuffix: '', previewWidth: 350, tag: 'aspect_ratio' },
    imageAspectRatio2: { labelSuffix: ' (Nano Banana 2)', previewWidth: 350, tag: 'aspect_ratio' },
    imageResolution: { labelSuffix: '', previewWidth: 250, tag: 'resolution' },
    imageResolution2: { labelSuffix: ' (512px+)', previewWidth: 280, tag: 'resolution' },
    reasoningBudgetToken: { previewWidth: 350, tag: 'thinking.budget_tokens' },
    reasoningBudgetToken32k: {
      labelSuffix: ' (32k)',
      previewWidth: 350,
      tag: 'thinking.budget_tokens',
    },
    reasoningBudgetToken80k: {
      labelSuffix: ' (80k)',
      previewWidth: 350,
      tag: 'thinking.budget_tokens',
    },
    reasoningEffort: { previewWidth: 250, tag: 'reasoning_effort' },
    textVerbosity: { labelSuffix: '', previewWidth: 250, tag: 'text_verbosity' },
    thinking: { labelSuffix: ' (Doubao)', previewWidth: 300, tag: 'thinking.type' },
    thinkingBudget: { labelSuffix: ' (Gemini)', previewWidth: 500, tag: 'thinkingBudget' },
    thinkingLevel: { labelSuffix: ' (3 Flash)', previewWidth: 280, tag: 'thinkingLevel' },
    thinkingLevel2: { labelSuffix: ' (3 Pro)', previewWidth: 200, tag: 'thinkingLevel' },
    thinkingLevel3: { labelSuffix: ' (Gemini 3.1)', previewWidth: 200, tag: 'thinkingLevel' },
    thinkingLevel4: { labelSuffix: ' (Nano Banana 2)', previewWidth: 200, tag: 'thinkingLevel' },
    thinkingLevel5: { labelSuffix: ' (3.1 Flash-Lite)', previewWidth: 280, tag: 'thinkingLevel' },
    urlContext: { labelSuffix: ' (Gemini)', previewWidth: 400, tag: 'urlContext' },
  },
  Qe = ({
    desc: o,
    hint: t,
    label: d,
    preview: r,
    previewFallback: i,
    parameterTag: s,
    previewWidth: g,
  }) => {
    const { token: c } = Pt.useToken(),
      p = g ? { minWidth: g, width: g } : { minWidth: 240 };
    return e.jsxs(m, {
      gap: 12,
      style: p,
      children: [
        e.jsx(re.Text, { style: { whiteSpace: 'normal' }, type: 'secondary', children: t }),
        e.jsx(m, {
          gap: 12,
          children: e.jsxs(m, {
            gap: 8,
            style: {
              background: c.colorBgElevated,
              border: `1px solid ${c.colorBorderSecondary}`,
              borderRadius: 10,
              padding: 12,
              width: g,
            },
            children: [
              e.jsxs(m, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [
                  e.jsx(re.Text, { strong: !0, children: d }),
                  s ? e.jsx(et, { color: 'cyan', children: s }) : null,
                ],
              }),
              o
                ? e.jsx(re.Text, {
                    style: { fontSize: 12, whiteSpace: 'normal' },
                    type: 'secondary',
                    children: o,
                  })
                : null,
              r
                ? e.jsx('div', { style: { pointerEvents: 'none', width: '100%' }, children: r })
                : e.jsx(re.Text, { type: 'secondary', children: i }),
            ],
          }),
        }),
      ],
    });
  },
  di = n.memo(({ value: o, onChange: t }) => {
    const { t: d } = L('modelProvider'),
      { t: r } = L('chat'),
      i = n.useMemo(
        () => ({
          codexMaxReasoningEffort: e.jsx(ko, { value: 'medium' }),
          disableContextCaching: e.jsx(ne, { checked: !0, disabled: !0 }),
          effort: e.jsx(bo, { value: 'high' }),
          enableAdaptiveThinking: e.jsx(ne, { checked: !0, disabled: !0 }),
          enableReasoning: e.jsx(ne, { checked: !0, disabled: !0 }),
          gpt5ReasoningEffort: e.jsx(jo, { value: 'medium' }),
          gpt5_1ReasoningEffort: e.jsx(yo, { value: 'none' }),
          gpt5_2ProReasoningEffort: e.jsx(vo, { value: 'medium' }),
          gpt5_2ReasoningEffort: e.jsx(xo, { value: 'none' }),
          grok4_20ReasoningEffort: e.jsx(fo, { value: 'medium' }),
          imageAspectRatio: e.jsx(go, { value: '1:1' }),
          imageAspectRatio2: e.jsx(mo, { value: '1:1' }),
          imageResolution: e.jsx(ho, { value: '1K' }),
          imageResolution2: e.jsx(po, { value: '1K' }),
          reasoningBudgetToken: e.jsx(uo, { defaultValue: 1 * 1024 }),
          reasoningBudgetToken32k: e.jsx(co, { defaultValue: 1 * 1024 }),
          reasoningBudgetToken80k: e.jsx(lo, { defaultValue: 1 * 1024 }),
          reasoningEffort: e.jsx(ao, { value: 'medium' }),
          textVerbosity: e.jsx(so, { value: 'medium' }),
          thinking: e.jsx(ro, { value: 'auto' }),
          thinkingBudget: e.jsx(no, { defaultValue: 2 * 1024 }),
          thinkingLevel: e.jsx(io, { value: 'high' }),
          thinkingLevel2: e.jsx(oo, { value: 'high' }),
          thinkingLevel3: e.jsx(to, { value: 'high' }),
          thinkingLevel4: e.jsx(eo, { value: 'minimal' }),
          thinkingLevel5: e.jsx(Jt, { value: 'minimal' }),
          urlContext: e.jsx(ne, { checked: !0, disabled: !0 }),
        }),
        [],
      ),
      s = String(
        d('providerModels.item.modelConfig.extendParams.previewFallback', {
          defaultValue: 'Preview unavailable',
        }),
      ),
      g = n.useMemo(() => {
        const h = {
          disableContextCaching:
            r('extendParams.disableContextCaching.desc', { defaultValue: '' }).replace(
              /（<\d>.*?<\/\d>）/u,
              '',
            ) ||
            e.jsx(Ce, {
              i18nKey: 'extendParams.disableContextCaching.desc',
              ns: 'chat',
              children:
                '单条对话生成成本最高可降低 90%，响应速度提升 4 倍。开启后将自动禁用历史消息数限制',
            }),
          enableReasoning:
            r('extendParams.enableReasoning.desc', { defaultValue: '' }).replace(
              /（<\d>.*?<\/\d>）/u,
              '',
            ) ||
            e.jsx(Ce, {
              i18nKey: 'extendParams.enableReasoning.desc',
              ns: 'chat',
              children: '基于 Claude Thinking 机制限制，开启后将自动禁用历史消息数限制',
            }),
        };
        return si.map((a) => {
          const l = `extendParams.${a.key}.desc`,
            j = r(l, { defaultValue: '' }),
            v = typeof j == 'string' && j !== '' && j !== l ? j : void 0,
            C = h[a.key] ?? v,
            k = li[a.key],
            M = ai[a.key] ?? a.key,
            E = String(r(`extendParams.${M}.title`, { defaultValue: a.key })),
            N = k?.labelOverride || (k?.labelSuffix && `${E}${k.labelSuffix}`) || E;
          return {
            desc: C,
            hint: String(d(a.hintKey)),
            key: a.key,
            label: N,
            parameterTag: k?.tag,
            preview: i[a.key],
            previewWidth: k?.previewWidth,
          };
        });
      }, [i, d, r]),
      c = n.useMemo(() => new Map(g.map((h) => [h.key, h])), [g]),
      p = n.useMemo(() => g.map((h) => ({ label: h.label, value: h.key })), [g]),
      u = String(d('providerModels.item.modelConfig.extendParams.placeholder')),
      f = (h) => {
        if (!Array.isArray(h) || h.length === 0) {
          t?.(void 0);
          return;
        }
        const a = h.filter((l) => c.has(l));
        t?.(a.length ? a : void 0);
      };
    return e.jsxs(m, {
      gap: 8,
      children: [
        e.jsx(Je, {
          allowClear: !0,
          mode: 'multiple',
          options: p,
          placeholder: u,
          popupMatchSelectWidth: !1,
          style: { width: '100%' },
          value: o,
          optionRender: (h) => {
            const a = c.get(h.value);
            return a
              ? e.jsx(Oe, {
                  placement: 'right',
                  content: e.jsx(Qe, {
                    desc: a.desc,
                    hint: a.hint,
                    label: a.label,
                    parameterTag: a.parameterTag,
                    preview: a.preview,
                    previewFallback: s,
                    previewWidth: a.previewWidth,
                  }),
                  children: e.jsxs(m, {
                    gap: 4,
                    children: [
                      e.jsx(re.Text, { children: a.label }),
                      e.jsx(re.Text, {
                        style: { fontSize: 12 },
                        type: 'secondary',
                        children: a.hint,
                      }),
                    ],
                  }),
                })
              : h.label;
          },
          onChange: (h) => f(h),
        }),
        o &&
          o.length > 0 &&
          e.jsx(nt, {
            wrap: !0,
            size: [8, 8],
            children: o.map((h) => {
              const a = c.get(h);
              return a
                ? e.jsx(
                    Oe,
                    {
                      placement: 'top',
                      content: e.jsx(Qe, {
                        desc: a.desc,
                        hint: a.hint,
                        label: a.label,
                        parameterTag: a.parameterTag,
                        preview: a.preview,
                        previewFallback: s,
                        previewWidth: a.previewWidth,
                      }),
                      children: e.jsx(et, { bordered: !1, color: 'processing', children: a.label }),
                    },
                    h,
                  )
                : null;
            }),
          }),
      ],
    });
  }),
  ct = n.memo(
    ({ showDeployName: o, idEditable: t = !0, onFormInstanceReady: d, initialValues: r }) => {
      const { t: i } = L('modelProvider'),
        [s] = z.useForm(),
        g = ve(),
        c = n.useMemo(
          () =>
            ['chat', 'embedding', 'tts', 'stt', 'realtime'].map((p) => {
              const u = i(`providerModels.item.modelConfig.type.options.${p}`);
              return { label: u !== p ? `${u} (${p})` : u, value: p };
            }),
          [i],
        );
      return (
        n.useEffect(() => {
          d(s);
        }, []),
        e.jsx('div', {
          onClick: (p) => {
            p.stopPropagation();
          },
          onKeyDown: (p) => {
            p.stopPropagation();
          },
          children: e.jsxs(z, {
            colon: !1,
            form: s,
            initialValues: r,
            labelCol: { span: 4 },
            style: { marginTop: 16 },
            wrapperCol: g ? { span: 18 } : { offset: 1, span: 18 },
            children: [
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.id.extra'),
                label: i('providerModels.item.modelConfig.id.title'),
                name: 'id',
                rules: [{ required: !0 }],
                children: e.jsx(ge, {
                  disabled: !t,
                  placeholder: i('providerModels.item.modelConfig.id.placeholder'),
                }),
              }),
              o &&
                e.jsx(z.Item, {
                  extra: i('providerModels.item.modelConfig.deployName.extra'),
                  label: i('providerModels.item.modelConfig.deployName.title'),
                  name: ['config', 'deploymentName'],
                  children: e.jsx(ge, {
                    placeholder: i('providerModels.item.modelConfig.deployName.placeholder'),
                  }),
                }),
              e.jsx(z.Item, {
                label: i('providerModels.item.modelConfig.displayName.title'),
                name: 'displayName',
                children: e.jsx(ge, {
                  placeholder: i('providerModels.item.modelConfig.displayName.placeholder'),
                }),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.tokens.extra'),
                label: i('providerModels.item.modelConfig.tokens.title'),
                name: 'contextWindowTokens',
                children: e.jsx(ri, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.extendParams.extra'),
                label: i('providerModels.item.modelConfig.extendParams.title'),
                name: ['settings', 'extendParams'],
                children: e.jsx(di, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.functionCall.extra'),
                label: i('providerModels.item.modelConfig.functionCall.title'),
                name: ['abilities', 'functionCall'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.vision.extra'),
                label: i('providerModels.item.modelConfig.vision.title'),
                name: ['abilities', 'vision'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.reasoning.extra'),
                label: i('providerModels.item.modelConfig.reasoning.title'),
                name: ['abilities', 'reasoning'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.search.extra'),
                label: i('providerModels.item.modelConfig.search.title'),
                name: ['abilities', 'search'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.imageOutput.extra'),
                label: i('providerModels.item.modelConfig.imageOutput.title'),
                name: ['abilities', 'imageOutput'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.video.extra'),
                label: i('providerModels.item.modelConfig.video.title'),
                name: ['abilities', 'video'],
                valuePropName: 'checked',
                children: e.jsx(le, {}),
              }),
              e.jsx(z.Item, {
                extra: i('providerModels.item.modelConfig.type.extra'),
                label: i('providerModels.item.modelConfig.type.title'),
                name: 'type',
                children: e.jsx(Je, {
                  options: c,
                  placeholder: i('providerModels.item.modelConfig.type.placeholder'),
                }),
              }),
            ],
          }),
        })
      );
    },
  ),
  je = n.createContext({}),
  ci = n.memo(({ id: o, open: t, setOpen: d }) => {
    const { t: r } = L(['common', 'setting']),
      [i, s] = n.useState(),
      [g, c] = n.useState(!1),
      [p, u] = P((l) => [l.activeAiProvider, l.updateAiModelsConfig]),
      f = P(Q.getAiModelById(o), ue),
      h = () => {
        d(!1);
      },
      { showDeployName: a } = n.use(je);
    return e.jsx(Ee, {
      destroyOnHidden: !0,
      maskClosable: !0,
      open: t,
      title: r('llm.customModelCards.modelConfig.modalTitle', { ns: 'setting' }),
      zIndex: 1251,
      footer: [
        e.jsx(D, { onClick: h, children: r('cancel') }, 'cancel'),
        e.jsx(
          D,
          {
            loading: g,
            style: { marginInlineStart: '16px' },
            type: 'primary',
            onClick: async () => {
              if (!p || !o || !i) return;
              const l = i.getFieldsValue();
              (c(!0), await u(o, p, l), c(!1), h());
            },
            children: r('ok'),
          },
          'ok',
        ),
      ],
      styles: {
        body: { display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 150px)' },
      },
      onCancel: h,
      children: e.jsx(ct, {
        idEditable: !1,
        initialValues: f,
        showDeployName: a,
        type: f?.type,
        onFormInstanceReady: s,
      }),
    });
  }),
  Ye = J(({ css: o, cx: t }) => ({
    config: t(
      'model-item-config',
      o`
        opacity: 0;
        transition: all 100ms ease-in-out;
      `,
    ),
    container: o`
      position: relative;
      border-radius: ${G.borderRadiusLG}px;
      transition: all 200ms ease-in-out;

      &:hover {
        background-color: ${G.colorFillTertiary};

        .model-item-config {
          opacity: 1;
        }
      }
    `,
    desc: o`
      flex: 1;
      min-width: 0;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,
  })),
  ze = n.memo(
    ({
      displayName: o,
      id: t,
      enabled: d,
      releasedAt: r,
      pricing: i,
      source: s,
      contextWindowTokens: g,
      abilities: c,
      type: p,
    }) => {
      const { t: u } = L(['modelProvider', 'components', 'models', 'common']),
        { modelEditable: f } = n.use(je),
        [h, a, l, j] = P((S) => [
          S.activeAiProvider,
          Q.isModelLoading(t)(S),
          S.toggleModelEnabled,
          S.removeAiModel,
        ]),
        [v, C] = n.useState(d),
        [k, M] = n.useState(!1),
        E = () => {
          if (!i) return [];
          switch (p) {
            case 'chat': {
              const S = We(i),
                y = Yt(i);
              return [
                typeof S == 'number' &&
                  u('providerModels.item.pricing.inputTokens', { amount: pe(S, i?.currency) }),
                typeof y == 'number' &&
                  u('providerModels.item.pricing.outputTokens', { amount: pe(y, i?.currency) }),
              ].filter(Boolean);
            }
            case 'embedding': {
              const S = We(i);
              return [
                typeof S == 'number' &&
                  u('providerModels.item.pricing.inputTokens', { amount: pe(S, i?.currency) }),
              ].filter(Boolean);
            }
            case 'tts': {
              const S = $e(i);
              return [
                typeof S == 'number' &&
                  u('providerModels.item.pricing.inputCharts', { amount: pe(S, i?.currency) }),
              ].filter(Boolean);
            }
            case 'stt': {
              const S = $e(i);
              return [
                typeof S == 'number' &&
                  u('providerModels.item.pricing.inputMinutes', { amount: pe(S, i?.currency) }),
              ].filter(Boolean);
            }
            case 'image':
              return [];
            default:
              return [];
          }
        },
        N = [r && u('providerModels.item.releasedAt', { releasedAt: r }), ...E()].filter(Boolean),
        { message: x, modal: b } = ye.useApp(),
        w = async () => {
          (await Rt(t), x.success({ content: u('copySuccess', { ns: 'common' }) }));
        },
        _ = ve(),
        H = e.jsx(Qt, { releasedAt: r }),
        $ = e.jsx(Tt, { style: { cursor: 'pointer', marginRight: 0 }, onClick: w, children: t }),
        q =
          f || p !== 'embedding'
            ? e.jsx(ne, {
                checked: v,
                loading: a,
                size: 'small',
                onChange: async (S) => {
                  (C(S), await l({ enabled: S, id: t, source: s, type: p }));
                },
              })
            : null,
        F =
          f &&
          ((S) =>
            e.jsxs(m, {
              horizontal: !0,
              className: Ye.config,
              style: S,
              children: [
                e.jsx(se, {
                  icon: Mo,
                  size: 'small',
                  title: u('providerModels.item.config'),
                  onClick: (y) => {
                    (y.stopPropagation(), M(!0));
                  },
                }),
                s !== Ht.Builtin &&
                  e.jsx(se, {
                    icon: Co,
                    size: 'small',
                    title: u('providerModels.item.delete.title'),
                    onClick: () => {
                      b.confirm({
                        centered: !0,
                        okButtonProps: { danger: !0, type: 'primary' },
                        onOk: async () => {
                          (await j(t, h), x.success(u('providerModels.item.delete.success')));
                        },
                        title: u('providerModels.item.delete.confirm', { displayName: o || t }),
                      });
                    },
                  }),
              ],
            })),
        ee = _
          ? e.jsxs(m, {
              horizontal: !0,
              align: 'center',
              gap: 12,
              justify: 'space-between',
              padding: '12px 6px',
              width: '100%',
              children: [
                e.jsxs(m, {
                  horizontal: !0,
                  align: 'center',
                  flex: 1,
                  gap: 16,
                  style: { minWidth: 0 },
                  children: [
                    e.jsx(we, { model: t, size: 32 }),
                    e.jsxs(m, {
                      flex: 1,
                      gap: 4,
                      style: { minWidth: 0 },
                      children: [
                        e.jsxs(m, {
                          horizontal: !0,
                          align: 'center',
                          gap: 8,
                          children: [
                            o || t,
                            e.jsx(m, {
                              horizontal: !0,
                              align: 'center',
                              gap: 8,
                              children: e.jsx(De, {
                                placement: 'top',
                                ...c,
                                contextWindowTokens: g,
                              }),
                            }),
                          ],
                        }),
                        e.jsxs('div', { children: [$, H] }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(m, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  children: [F && F({ opacity: 1 }), q],
                }),
              ],
            })
          : e.jsxs(m, {
              horizontal: !0,
              align: 'center',
              className: Ye.container,
              gap: 24,
              justify: 'space-between',
              padding: 12,
              width: '100%',
              children: [
                e.jsxs(m, {
                  horizontal: !0,
                  align: 'center',
                  flex: 1,
                  gap: 8,
                  style: { minWidth: 0 },
                  children: [
                    e.jsx(we, { model: t, size: 32 }),
                    e.jsxs(m, {
                      flex: 1,
                      gap: 2,
                      style: { minWidth: 0 },
                      children: [
                        e.jsxs(m, {
                          horizontal: !0,
                          align: 'center',
                          gap: 8,
                          children: [o || t, $, H, F && F()],
                        }),
                        e.jsx(m, {
                          horizontal: !0,
                          align: 'baseline',
                          gap: 8,
                          children:
                            N.length > 0 &&
                            e.jsx(Z, {
                              style: { color: G.colorTextSecondary, fontSize: 12, marginBottom: 0 },
                              children: N.join(' · '),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(m, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [e.jsx(De, { placement: 'top', ...c, contextWindowTokens: g }), q],
                }),
              ],
            });
      return e.jsxs(e.Fragment, { children: [ee, k && e.jsx(ci, { id: t, open: k, setOpen: M })] });
    },
  ),
  ie = 30,
  ui = 'FETCH_DISABLED_MODELS_PAGE',
  pi = n.memo(({ activeTab: o, providerId: t }) => {
    const { t: d } = L(['modelProvider', 'common']),
      [r, i] = Et((y) => [zt.disabledModelsSortType(y), y.updateSystemStatus]),
      [s, g] = n.useState(ie),
      c = n.useCallback(
        (y) => {
          i({ disabledModelsSortType: y });
        },
        [i],
      ),
      p = P(Q.disabledAiProviderModelList, ue),
      u = n.useMemo(() => new Set(p.map((y) => y.id)), [p]);
    n.useEffect(() => {
      g(ie);
    }, [t]);
    const f = n.useMemo(() => p.slice(0, s), [p, s]),
      h = s < p.length,
      a = !!t && !h,
      l = n.useCallback(
        (y, T) => {
          if (!a || (T && T.length < ie)) return null;
          const A = p.length + y * ie;
          return [ui, t, A];
        },
        [p.length, t, a],
      ),
      {
        data: j,
        error: v,
        isValidating: C,
        setSize: k,
        size: M,
      } = Vt(l, async ([, y, T]) =>
        Ut.getAiProviderModelList(y, { enabled: !1, limit: ie, offset: T }),
      ),
      E = n.useMemo(() => (j ? j.flat() : []), [j]),
      N = n.useMemo(() => (E.length ? E.filter((y) => !u.has(y.id)) : []), [u, E]),
      x = n.useMemo(() => {
        const y = new Set(),
          T = [];
        return (
          f.forEach((A) => {
            y.has(A.id) || (y.add(A.id), T.push(A));
          }),
          N.forEach((A) => {
            y.has(A.id) || (y.add(A.id), T.push(A));
          }),
          T
        );
      }, [N, f]),
      b = a && !j && !v,
      w = n.useMemo(() => {
        if (!j || j.length === 0) return !1;
        const y = j.at(-1);
        return y ? y.length < ie : !1;
      }, [j]),
      _ = C && M > 0 && !!j && j.length < M,
      H = n.useRef(null),
      $ = n.useCallback(() => {
        if (h) {
          g((y) => Math.min(y + ie, p.length));
          return;
        }
        w || C || k(M + 1);
      }, [p.length, h, w, C, k, M]);
    n.useEffect(() => {
      if ((!h && w) || !H.current) return;
      const y = new IntersectionObserver(
        (T) => {
          T.forEach((A) => {
            A.isIntersecting && $();
          });
        },
        { rootMargin: '200px', threshold: 0.01 },
      );
      return (
        y.observe(H.current),
        () => {
          y.disconnect();
        }
      );
    }, [h, w, $]);
    const W = x,
      q = p.length > 0 || b || W.length > 0,
      F = n.useMemo(() => (o === 'all' ? W : W.filter((y) => y.type === o)), [o, W]),
      S = n.useMemo(() => {
        const y = [...F];
        switch (r) {
          case 'alphabetical':
            return y.sort((T, A) => {
              const K = (T.displayName || T.id).localeCompare(A.displayName || A.id);
              return K !== 0 ? K : T.id.localeCompare(A.id);
            });
          case 'alphabeticalDesc':
            return y.sort((T, A) => {
              const K = (A.displayName || A.id).localeCompare(T.displayName || T.id);
              return K !== 0 ? K : A.id.localeCompare(T.id);
            });
          case 'releasedAt':
            return y.sort((T, A) => {
              const K = !!T.releasedAt,
                Y = !!A.releasedAt;
              return K && !Y
                ? -1
                : !K && Y
                  ? 1
                  : !K && !Y
                    ? 0
                    : T.releasedAt.localeCompare(A.releasedAt);
            });
          case 'releasedAtDesc':
            return y.sort((T, A) => {
              const K = !!T.releasedAt,
                Y = !!A.releasedAt;
              return K && !Y
                ? -1
                : !K && Y
                  ? 1
                  : !K && !Y
                    ? 0
                    : A.releasedAt.localeCompare(T.releasedAt);
            });
          case 'default':
            return y;
          default:
            return y;
        }
      }, [F, r]);
    return (
      q &&
      e.jsxs(m, {
        children: [
          e.jsxs(m, {
            horizontal: !0,
            align: 'center',
            justify: 'space-between',
            children: [
              e.jsx(Z, {
                style: { fontSize: 12, marginTop: 8 },
                type: 'secondary',
                children: d('providerModels.list.disabled'),
              }),
              W.length > 1 &&
                e.jsx(it, {
                  items: [
                    {
                      icon: r === 'default' ? e.jsx(R, { icon: he }) : e.jsx('div', {}),
                      key: 'default',
                      label: d('providerModels.list.disabledActions.sortDefault'),
                      onClick: () => c('default'),
                    },
                    { type: 'divider' },
                    {
                      icon: r === 'alphabetical' ? e.jsx(R, { icon: he }) : e.jsx('div', {}),
                      key: 'alphabetical',
                      label: d('providerModels.list.disabledActions.sortAlphabetical'),
                      onClick: () => c('alphabetical'),
                    },
                    {
                      icon: r === 'alphabeticalDesc' ? e.jsx(R, { icon: he }) : e.jsx('div', {}),
                      key: 'alphabeticalDesc',
                      label: d('providerModels.list.disabledActions.sortAlphabeticalDesc'),
                      onClick: () => c('alphabeticalDesc'),
                    },
                    { type: 'divider' },
                    {
                      icon: r === 'releasedAt' ? e.jsx(R, { icon: he }) : e.jsx('div', {}),
                      key: 'releasedAt',
                      label: d('providerModels.list.disabledActions.sortReleasedAt'),
                      onClick: () => c('releasedAt'),
                    },
                    {
                      icon: r === 'releasedAtDesc' ? e.jsx(R, { icon: he }) : e.jsx('div', {}),
                      key: 'releasedAtDesc',
                      label: d('providerModels.list.disabledActions.sortReleasedAtDesc'),
                      onClick: () => c('releasedAtDesc'),
                    },
                  ],
                  children: e.jsx(se, {
                    icon: rt,
                    size: 'small',
                    title: d('providerModels.list.disabledActions.sort'),
                  }),
                }),
            ],
          }),
          e.jsx(Me, { children: S.map((y) => n.createElement(ze, { ...y, key: y.id })) }),
          e.jsxs(m, {
            horizontal: !0,
            align: 'center',
            justify: 'center',
            paddingBlock: 8,
            children: [
              e.jsx('div', { ref: H, style: { height: 1, width: '0' } }),
              (b || _) &&
                e.jsx(Z, {
                  style: { fontSize: 12, marginTop: 4 },
                  type: 'secondary',
                  children: d('common:loading'),
                }),
            ],
          }),
        ],
      })
    );
  }),
  ut = n.memo(({ open: o, setOpen: t }) => {
    const { t: d } = L(['modelProvider', 'common']),
      [r, i] = n.useState(),
      [s, g] = n.useState(!1),
      [c, p] = P((h) => [h.activeAiProvider, h.createNewAiModel]),
      u = () => {
        t(!1);
      },
      { showDeployName: f } = n.use(je);
    return e.jsx(Ee, {
      destroyOnHidden: !0,
      maskClosable: !0,
      open: o,
      title: d('providerModels.createNew.title'),
      zIndex: 1251,
      footer: [
        e.jsx(D, { onClick: u, children: d('cancel', { ns: 'common' }) }, 'cancel'),
        e.jsx(
          D,
          {
            loading: s,
            style: { marginInlineStart: '16px' },
            type: 'primary',
            onClick: async () => {
              if (!c || !r) return;
              const h = r.getFieldsValue();
              g(!0);
              try {
                (await r.validateFields(), await p({ ...h, providerId: c }), g(!1), u());
              } catch {
                g(!1);
              }
            },
            children: d('ok', { ns: 'common' }),
          },
          'ok',
        ),
      ],
      styles: {
        body: { display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 150px)' },
      },
      onCancel: u,
      children: e.jsx(ct, { showDeployName: f, onFormInstanceReady: i }),
    });
  }),
  me = J(({ css: o, cssVar: t }) => ({
    circle: o`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${t.colorFillSecondary};
  `,
    container: o`
    width: 100%;
    border: 1px dashed ${t.colorBorder};
    border-radius: 12px;
    background: ${t.colorBgContainer};
  `,
    description: o`
    max-width: 280px;

    font-size: ${t.fontSize};
    color: ${t.colorTextDescription};
    text-align: center;
    text-wrap: balance;
  `,
    iconWrapper: o`
    position: relative;
    width: 64px;
    height: 64px;
  `,
    sparklesIcon: o`
    font-size: 40px;
    color: ${t.colorText};
  `,
    title: o`
    font-size: ${t.fontSizeLG};
    font-weight: 500;
  `,
  })),
  hi = n.memo(({ provider: o }) => {
    const { t } = L('modelProvider'),
      [d] = P((c) => [c.fetchRemoteModelList]),
      [r, i] = n.useState(!1),
      [s, g] = n.useState(!1);
    return e.jsxs(fe, {
      className: me.container,
      gap: 24,
      paddingBlock: 40,
      children: [
        e.jsx(fe, {
          className: me.circle,
          children: e.jsx(R, { className: me.sparklesIcon, icon: st }),
        }),
        e.jsxs(m, {
          align: 'center',
          gap: 8,
          children: [
            e.jsx('div', { className: me.title, children: t('providerModels.list.empty.title') }),
            e.jsx('div', {
              className: me.description,
              children: t('providerModels.list.empty.desc'),
            }),
          ],
        }),
        e.jsxs(m, {
          horizontal: !0,
          gap: 8,
          children: [
            e.jsx(D, {
              icon: at,
              onClick: () => {
                g(!0);
              },
              children: t('providerModels.list.addNew'),
            }),
            e.jsx(ut, { open: s, setOpen: g }),
            e.jsx(D, {
              icon: e.jsx(R, { icon: lt }),
              loading: r,
              type: 'primary',
              onClick: async () => {
                i(!0);
                try {
                  await d(o);
                } catch (c) {
                  console.error(c);
                }
                i(!1);
              },
              children: t(
                r ? 'providerModels.list.fetcher.fetching' : 'providerModels.list.fetcher.fetch',
              ),
            }),
          ],
        }),
      ],
    });
  }),
  mi = n.memo(({ id: o, displayName: t }) =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs(m, {
          horizontal: !0,
          gap: 8,
          children: [e.jsx(we, { model: o, size: 24, type: 'avatar' }), t || o],
        }),
        e.jsx(Te.DragHandle, {}),
      ],
    }),
  ),
  gi = J(({ css: o, cssVar: t }) => ({
    container: o`
    height: 36px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius};
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,
  })),
  fi = n.memo(({ open: o, onCancel: t, defaultItems: d }) => {
    const { t: r } = L('modelProvider'),
      [i, s] = P((h) => [h.activeAiProvider, h.updateAiModelsSort]),
      [g, c] = n.useState(!1),
      { message: p } = ye.useApp(),
      [u, f] = n.useState(d);
    return e.jsx(Ee, {
      allowFullscreen: !0,
      footer: null,
      open: o,
      title: r('sortModal.title'),
      width: 400,
      onCancel: t,
      children: e.jsxs(m, {
        gap: 16,
        children: [
          e.jsx(Te, {
            items: u,
            renderItem: (h) =>
              e.jsx(Te.Item, {
                horizontal: !0,
                align: 'center',
                className: gi.container,
                gap: 4,
                id: h.id,
                justify: 'space-between',
                children: e.jsx(mi, { ...h }),
              }),
            onChange: async (h) => {
              f(h);
            },
          }),
          e.jsx(D, {
            block: !0,
            loading: g,
            style: { bottom: 0, position: 'sticky' },
            type: 'primary',
            onClick: async () => {
              if (!i) return;
              const h = u.map((a, l) => ({ id: a.id, sort: l, type: a.type }));
              (c(!0), await s(i, h), c(!1), p.success(r('sortModal.success')), t());
            },
            children: r('sortModal.update'),
          }),
        ],
      }),
    });
  }),
  xi = ({ activeTab: o }) => {
    const { t } = L('modelProvider'),
      { modelEditable: d } = n.use(je),
      r = P(Q.enabledAiProviderModelList, ue),
      i = P((l) => l.batchToggleAiModels),
      [s, g] = n.useState(!1),
      [c, p] = n.useState(!1),
      u = r.length === 0,
      f = n.useMemo(() => (o === 'all' ? r : r.filter((l) => l.type === o)), [r, o]),
      h = n.useMemo(() => (d ? f : f.filter((l) => l.type !== 'embedding')), [f, d]),
      a = f.length === 0;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(m, {
          horizontal: !0,
          justify: 'space-between',
          children: [
            e.jsx(Z, {
              style: { fontSize: 12, marginTop: 8 },
              type: 'secondary',
              children: t('providerModels.list.enabled'),
            }),
            !u &&
              e.jsx(Me, {
                children: e.jsxs(m, {
                  horizontal: !0,
                  children: [
                    h.length > 0 &&
                      e.jsx(se, {
                        icon: wo,
                        loading: c,
                        size: 'small',
                        title: t('providerModels.list.enabledActions.disableAll'),
                        onClick: async () => {
                          (p(!0),
                            await i(
                              h.map((l) => l.id),
                              !1,
                            ),
                            p(!1));
                        },
                      }),
                    e.jsx(se, {
                      icon: rt,
                      size: 'small',
                      title: t('providerModels.list.enabledActions.sort'),
                      onClick: () => {
                        g(!0);
                      },
                    }),
                  ],
                }),
              }),
            s &&
              e.jsx(fi, {
                defaultItems: r,
                open: s,
                onCancel: () => {
                  g(!1);
                },
              }),
          ],
        }),
        u
          ? e.jsx(fe, {
              padding: 12,
              children: e.jsx(Z, {
                style: { fontSize: 12 },
                type: 'secondary',
                children: t('providerModels.list.enabledEmpty'),
              }),
            })
          : a
            ? e.jsx(fe, {
                padding: 12,
                children: e.jsx(Z, {
                  style: { fontSize: 12 },
                  type: 'secondary',
                  children: t('providerModels.list.noModelsInCategory'),
                }),
              })
            : e.jsx(Me, {
                children: e.jsx(m, {
                  gap: 2,
                  children: f.map(({ displayName: l, id: j, ...v }) => {
                    const C = l || j;
                    return e.jsx(ze, { displayName: C, id: j, ...v }, j);
                  }),
                }),
              }),
      ],
    });
  },
  Xe = n.memo(({ value: o, onChange: t, variant: d }) => {
    const { t: r } = L('modelProvider');
    return e.jsx(Do, {
      allowClear: !0,
      defaultValue: o,
      placeholder: r('providerModels.list.search'),
      size: 'small',
      variant: d,
      onSearch: (i) => t(i),
    });
  }),
  vi = n.memo(({ provider: o, showAddNewModel: t = !0, showModelFetcher: d = !0 }) => {
    const { t: r } = L('modelProvider'),
      { modal: i, message: s } = ye.useApp(),
      [g, c, p, u, f, h, a, l] = P((b) => [
        b.modelSearchKeyword,
        Q.totalAiProviderModelList(b),
        Q.isEmptyAiProviderModelList(b),
        Q.hasRemoteModels(b),
        b.fetchRemoteModelList,
        b.clearRemoteModels,
        b.clearModelsByProvider,
        b.useFetchAiProviderModels,
      ]),
      { isLoading: j } = l(o),
      [v, C] = n.useState(!1),
      [k, M] = n.useState(!1),
      [E, N] = n.useState(!1),
      x = ve();
    return e.jsxs(m, {
      gap: 12,
      paddingBlock: 8,
      style: {
        background: G.colorBgContainer,
        marginTop: x ? 0 : -12,
        paddingTop: x ? 0 : 20,
        position: 'sticky',
        top: x ? -2 : -32,
        zIndex: 15,
      },
      children: [
        e.jsxs(m, {
          horizontal: !0,
          align: 'center',
          gap: 0,
          justify: 'space-between',
          children: [
            e.jsxs(m, {
              horizontal: !0,
              align: 'center',
              gap: 8,
              children: [
                e.jsx(Z, {
                  strong: !0,
                  style: { fontSize: 16 },
                  children: r('providerModels.list.title'),
                }),
                j
                  ? e.jsx(U.Button, { active: !0, style: { height: 22 } })
                  : e.jsx(Z, {
                      style: { fontSize: 12 },
                      type: 'secondary',
                      children: e.jsxs('div', {
                        style: { display: 'flex', lineHeight: '24px' },
                        children: [
                          r('providerModels.list.total', { count: c }),
                          u &&
                            e.jsx(se, {
                              icon: So,
                              loading: k,
                              size: 'small',
                              title: r('providerModels.list.fetcher.clear'),
                              onClick: async () => {
                                (M(!0), await h(o), M(!1));
                              },
                            }),
                        ],
                      }),
                    }),
              ],
            }),
            j
              ? e.jsx(U.Button, { active: !0, size: 'small', style: { width: 120 } })
              : p
                ? null
                : e.jsxs(m, {
                    horizontal: !0,
                    gap: 8,
                    children: [
                      !x &&
                        e.jsx(Xe, {
                          value: g,
                          onChange: (b) => {
                            P.setState({ modelSearchKeyword: b });
                          },
                        }),
                      e.jsxs(nt.Compact, {
                        children: [
                          d &&
                            e.jsx(D, {
                              icon: lt,
                              loading: v,
                              size: 'small',
                              onClick: async () => {
                                C(!0);
                                try {
                                  await f(o);
                                } catch (b) {
                                  console.error(b);
                                }
                                C(!1);
                              },
                              children: r(
                                v
                                  ? 'providerModels.list.fetcher.fetching'
                                  : 'providerModels.list.fetcher.fetch',
                              ),
                            }),
                          t &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(D, {
                                  icon: at,
                                  size: 'small',
                                  onClick: () => {
                                    N(!0);
                                  },
                                }),
                                e.jsx(ut, { open: E, setOpen: N }),
                              ],
                            }),
                          e.jsx(it, {
                            items: [
                              {
                                key: 'reset',
                                label: r('providerModels.list.resetAll.title'),
                                onClick: async () => {
                                  i.confirm({
                                    content: r('providerModels.list.resetAll.conform'),
                                    onOk: async () => {
                                      (await a(o),
                                        s.success(r('providerModels.list.resetAll.success')));
                                    },
                                    title: r('providerModels.list.resetAll.title'),
                                  });
                                },
                              },
                            ],
                            children: e.jsx(D, { icon: Ao, size: 'small' }),
                          }),
                        ],
                      }),
                    ],
                  }),
          ],
        }),
        x &&
          e.jsx(Xe, {
            value: g,
            variant: 'filled',
            onChange: (b) => {
              P.setState({ modelSearchKeyword: b });
            },
          }),
      ],
    });
  }),
  yi = n.memo(() => {
    const { t: o } = L('modelProvider'),
      t = P((c) => c.modelSearchKeyword),
      d = P((c) => c.batchToggleAiModels),
      r = P(Q.filteredAiProviderModelList, ue),
      [i, s] = n.useState(!1),
      g = r.length === 0;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(m, {
          horizontal: !0,
          justify: 'space-between',
          children: [
            e.jsx(Z, {
              style: { fontSize: 12, marginTop: 8 },
              type: 'secondary',
              children: o('providerModels.list.searchResult', { count: r.length }),
            }),
            !g &&
              e.jsx(m, {
                horizontal: !0,
                children: e.jsx(se, {
                  icon: Po,
                  loading: i,
                  size: 'small',
                  title: o('providerModels.list.enabledActions.enableAll'),
                  onClick: async () => {
                    (s(!0),
                      await d(
                        r.map((c) => c.id),
                        !0,
                      ),
                      s(!1));
                  },
                }),
              }),
          ],
        }),
        t && g
          ? e.jsx(m, {
              align: 'center',
              justify: 'center',
              padding: 16,
              children: o('providerModels.searchNotFound'),
            })
          : e.jsx(Me, {
              children: e.jsx(m, {
                gap: 4,
                children: r.map((c) => n.createElement(ze, { ...c, key: `${c.id}-${c.enabled}` })),
              }),
            }),
      ],
    });
  }),
  be = J(({ css: o, cssVar: t }) => ({
    container: o`
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;

    padding: 12px;
    border-radius: ${t.borderRadiusLG};
  `,
    leftContent: o`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;

    min-width: 0;
  `,
    rightContent: o`
    display: flex;
    gap: 4px;
    align-items: center;
  `,
    textContent: o`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    min-width: 0;
  `,
  })),
  ji = n.memo(() =>
    e.jsxs(m, {
      horizontal: !0,
      className: be.container,
      children: [
        e.jsxs(m, {
          horizontal: !0,
          className: be.leftContent,
          children: [
            e.jsx(U.Avatar, { active: !0, shape: 'square', size: 32, style: { flex: 'none' } }),
            e.jsxs(m, {
              className: be.textContent,
              children: [
                e.jsx(U.Button, { active: !0, size: 'small', style: { height: 18, width: 160 } }),
                e.jsxs(m, {
                  horizontal: !0,
                  gap: 4,
                  children: [
                    e.jsx(U.Button, {
                      active: !0,
                      size: 'small',
                      style: { height: 16, width: 60 },
                    }),
                    e.jsx(U.Button, {
                      active: !0,
                      size: 'small',
                      style: { height: 16, width: 40 },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(m, {
          horizontal: !0,
          className: be.rightContent,
          children: e.jsx(U.Button, {
            active: !0,
            size: 'small',
            style: { borderRadius: 12, height: 22, width: 44 },
          }),
        }),
      ],
    }),
  ),
  pt = n.memo(() =>
    e.jsx(m, {
      gap: 4,
      paddingBlock: 12,
      children: Array.from({ length: 6 }).map((o, t) => e.jsx(ji, {}, t)),
    }),
  ),
  bi = n.memo(({ id: o }) => {
    const { t } = L(['modelProvider', 'common']),
      [d, r] = n.useState('all'),
      [i, s, g] = P((l) => [
        !!l.modelSearchKeyword,
        Q.isEmptyAiProviderModelList(l),
        l.useFetchAiProviderModels,
      ]),
      c = P(Q.filteredAiProviderModelList, ue),
      { isLoading: p } = g(o),
      u = n.useMemo(() => {
        const l = { all: c.length, chat: 0, embedding: 0, image: 0, stt: 0, tts: 0, video: 0 };
        return (
          c.forEach((j) => {
            const v = j.type;
            v && Object.prototype.hasOwnProperty.call(l, v) && l[v]++;
          }),
          l
        );
      }, [c]),
      f = n.useMemo(() => {
        const l = (v, C) => (C > 0 ? `${v} (${C})` : v);
        return [
          {
            count: u.all,
            icon: e.jsx(R, { icon: To, size: 16 }),
            key: 'all',
            label: l(t('providerModels.tabs.all'), u.all),
          },
          {
            count: u.chat,
            icon: e.jsx(R, { icon: Ro, size: 16 }),
            key: 'chat',
            label: l(t('providerModels.tabs.chat'), u.chat),
          },
          {
            count: u.image,
            icon: e.jsx(R, { icon: Eo, size: 16 }),
            key: 'image',
            label: l(t('providerModels.tabs.image'), u.image),
          },
          {
            count: u.video,
            icon: e.jsx(R, { icon: zo, size: 16 }),
            key: 'video',
            label: l(t('providerModels.tabs.video'), u.video),
          },
          {
            count: u.embedding,
            icon: e.jsx(R, { icon: Lo, size: 16 }),
            key: 'embedding',
            label: l(t('providerModels.tabs.embedding'), u.embedding),
          },
          {
            count: u.stt,
            icon: e.jsx(R, { icon: Io, size: 16 }),
            key: 'stt',
            label: l(t('providerModels.tabs.stt'), u.stt),
          },
          {
            count: u.tts,
            icon: e.jsx(R, { icon: No, size: 16 }),
            key: 'tts',
            label: l(t('providerModels.tabs.tts'), u.tts),
          },
        ].filter((v) => v.key === 'all' || v.count > 0);
      }, [u]),
      a = f.map((l) => l.key).includes(d) ? d : 'all';
    return p
      ? e.jsx(pt, {})
      : i
        ? e.jsx(yi, {})
        : s
          ? e.jsx(hi, { provider: o })
          : e.jsxs(m, {
              children: [
                e.jsx(Gt, {
                  activeKey: a,
                  items: f,
                  size: 'small',
                  style: { marginBottom: 12, marginLeft: -6 },
                  onChange: r,
                }),
                e.jsx(xi, { activeTab: a }),
                e.jsx(pi, { activeTab: a, providerId: o }),
              ],
            });
  }),
  ki = n.memo(
    ({
      id: o,
      showModelFetcher: t,
      sdkType: d,
      showAddNewModel: r,
      showDeployName: i,
      modelEditable: s = !0,
    }) => {
      const g = ve();
      return e.jsx(je, {
        value: {
          modelEditable: s,
          sdkType: d,
          showAddNewModel: r,
          showDeployName: i,
          showModelFetcher: t,
        },
        children: e.jsxs(m, {
          gap: 16,
          paddingInline: g ? 12 : 0,
          style: { background: g ? G.colorBgContainer : void 0, paddingBottom: 16, paddingTop: 8 },
          children: [
            e.jsx(vi, { provider: o, showAddNewModel: r, showModelFetcher: t }),
            e.jsx(n.Suspense, { fallback: e.jsx(pt, {}), children: e.jsx(bi, { id: o }) }),
          ],
        }),
      });
    },
  ),
  Ze = () => e.jsx(U.Button, { active: !0, block: !0 }),
  Mi = Re(Lt`
  width: 44px !important;
  min-width: 44px !important;
  height: 22px !important;
  border-radius: 12px !important;
`),
  Ci = () => e.jsx(U.Button, { active: !0, className: Mi }),
  wi = J(({ css: o }) => ({
    popup: o`
    width: 380px;
  `,
  })),
  Si = n.memo(({ error: o }) => {
    const { t } = L('error'),
      d = Zo(o.body?.provider);
    return e.jsx(m, {
      gap: 8,
      style: { maxWidth: 600, width: '100%' },
      children: e.jsx(Yo, {
        showIcon: !0,
        title: t(`response.${o.type}`, { provider: d }),
        type: 'error',
        extra: e.jsx(m, {
          paddingBlock: 8,
          paddingInline: 16,
          children: e.jsx(It, {
            actionIconSize: 'small',
            language: 'json',
            variant: 'borderless',
            wrap: !0,
            children: JSON.stringify(o.body || o, null, 2),
          }),
        }),
      }),
    });
  }),
  Ai = n.memo(
    ({ model: o, provider: t, checkErrorRender: d, onBeforeCheck: r, onAfterCheck: i }) => {
      const { t: s } = L('setting'),
        [g, c] = P((x) => [X.isProviderConfigUpdating(t)(x), x.updateAiProviderConfig]),
        p = P((x) => x.aiProviderModelList),
        u = n.useMemo(
          () =>
            [...p.filter((w) => w.type === 'chat')]
              .sort((w, _) =>
                w.id === o
                  ? -1
                  : _.id === o
                    ? 1
                    : w.enabled !== _.enabled
                      ? w.enabled
                        ? -1
                        : 1
                      : w.releasedAt && _.releasedAt
                        ? new Date(_.releasedAt).getTime() - new Date(w.releasedAt).getTime()
                        : w.releasedAt && !_.releasedAt
                          ? -1
                          : !w.releasedAt && _.releasedAt
                            ? 1
                            : 0,
              )
              .map((w) => w.id),
          [p, o],
        ),
        [f, h] = n.useState(!1),
        [a, l] = n.useState(!1),
        [j, v] = n.useState(o),
        [C, k] = n.useState();
      n.useEffect(() => {
        v(o);
      }, [o]);
      const M = async () => {
          (l(!1), k(void 0));
          let x = !1;
          await qo.fetchPresetTaskResult({
            onError: (b, w) => {
              (k(w), l(!1), (x = !0));
            },
            onFinish: async (b) => {
              !x && b
                ? (k(void 0), l(!0))
                : (l(!1),
                  k({
                    body: b,
                    message: s('response.ConnectionCheckFailed', { ns: 'error' }),
                    type: 'ConnectionCheckFailed',
                  }));
            },
            onLoadingChange: (b) => {
              h(b);
            },
            params: { messages: [{ content: 'hello', role: 'user' }], model: j, provider: t },
            trace: { sessionId: `connection:${t}`, topicId: j, traceName: Qo.ConnectivityChecker },
          });
        },
        E = C ? e.jsx(Si, { error: C }) : null,
        N = d ? e.jsx(d, { defaultError: E, error: C, setError: k }) : E;
      return e.jsxs(m, {
        gap: 8,
        children: [
          e.jsxs(m, {
            horizontal: !0,
            gap: 8,
            children: [
              e.jsx(Xo, {
                virtual: !0,
                listItemHeight: 36,
                options: u.map((x) => ({ label: x, value: x })),
                popupClassName: Re(wi.popup),
                suffixIcon: g && e.jsx(R, { spin: !0, icon: xe }),
                value: j,
                optionRender: ({ value: x }) =>
                  e.jsxs(m, {
                    horizontal: !0,
                    align: 'center',
                    gap: 6,
                    children: [e.jsx(we, { model: x, size: 20 }), x],
                  }),
                style: { flex: 1, overflow: 'hidden' },
                onSelect: async (x) => {
                  (v(x), l(!1), k(void 0), await c(t, { checkModel: x }));
                },
              }),
              e.jsx(D, {
                disabled: g,
                loading: f,
                icon: a ? e.jsx(tt, { style: { color: G.colorSuccess } }) : void 0,
                style: a ? { borderColor: G.colorSuccess, color: G.colorSuccess } : void 0,
                onClick: async () => {
                  await r();
                  try {
                    await M();
                  } finally {
                    await i();
                  }
                },
                children: s(a ? 'llm.checker.pass' : 'llm.checker.button'),
              }),
            ],
          }),
          C && N,
        ],
      });
    },
  ),
  Pi = J(({ css: o }) => ({
    switchLoading: o`
    width: 44px !important;
    min-width: 44px !important;
    height: 22px !important;
    border-radius: 12px !important;
  `,
  })),
  Ti = ({ id: o, Component: t }) => {
    const [d, r, i] = P((s) => [
      s.toggleProviderEnabled,
      X.isProviderEnabled(o)(s),
      X.isAiProviderConfigLoading(o)(s),
    ]);
    return i
      ? e.jsx(U.Button, { active: !0, className: Pi.switchLoading })
      : t
        ? e.jsx(t, { id: o })
        : e.jsx(Jo, {
            enabled: r,
            onChange: async (s) => {
              await d(o, s);
            },
          });
  };
function Ri({ providerId: o, onSuccess: t }) {
  const [d, r] = n.useState('idle'),
    [i, s] = n.useState(),
    [g, c] = n.useState(),
    p = n.useRef(null),
    u = n.useRef(null),
    f = n.useRef(null),
    h = ce.oauthDeviceFlow.initiateDeviceCode.useMutation(),
    a = ce.oauthDeviceFlow.pollAuthStatus.useMutation(),
    l = n.useCallback(() => {
      (p.current && (clearInterval(p.current), (p.current = null)),
        u.current && (clearTimeout(u.current), (u.current = null)));
    }, []),
    j = n.useCallback(() => {
      (l(), r('idle'), s(void 0), c(void 0), (f.current = null));
    }, [l]),
    v = n.useCallback(
      (k, M) => {
        r('polling');
        const E = async () => {
          try {
            switch ((await a.mutateAsync({ deviceCode: k, providerId: o })).status) {
              case 'success': {
                (l(), r('success'), t?.());
                break;
              }
              case 'expired': {
                (l(), r('error'), c('codeExpired'));
                break;
              }
              case 'denied': {
                (l(), r('error'), c('denied'));
                break;
              }
              case 'slow_down': {
                p.current &&
                  (clearInterval(p.current), (p.current = setInterval(E, (M + 5) * 1e3)));
                break;
              }
            }
          } catch {
            (l(), r('error'), c('authError'));
          }
        };
        ((p.current = setInterval(E, M * 1e3)), E());
      },
      [l, t, a, o],
    ),
    C = n.useCallback(async () => {
      (c(void 0), r('requesting'));
      try {
        const k = await h.mutateAsync({ providerId: o }),
          M = {
            deviceCode: k.deviceCode,
            expiresIn: k.expiresIn,
            interval: k.interval,
            userCode: k.userCode,
            verificationUri: k.verificationUri,
          };
        (s(M),
          (f.current = M.deviceCode),
          r('pending_user_auth'),
          (u.current = setTimeout(() => {
            (l(), r('error'), c('codeExpired'));
          }, M.expiresIn * 1e3)),
          setTimeout(() => {
            f.current === M.deviceCode && v(M.deviceCode, M.interval);
          }, 2e3));
      } catch {
        (r('error'), c('authError'));
      }
    }, [l, h, o, v]);
  return (
    n.useEffect(
      () => () => {
        l();
      },
      [l],
    ),
    { cancelAuth: j, deviceCodeInfo: i, error: g, startAuth: C, state: d }
  );
}
const { Text: ke, Link: Ei } = re,
  I = J(({ css: o, cssVar: t }) => ({
    card: o`
    overflow: hidden;

    width: 100%;
    margin-block-end: 24px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 12px;
  `,
    codeBox: o`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    padding-block: 16px;
    padding-inline: 24px;
    border-radius: 12px;

    font-family: monospace;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 6px;

    background: ${t.colorFillTertiary};
  `,
    content: o`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    margin-block: 0 40px;
    padding-inline: 48px;
  `,
    errorText: o`
    color: ${t.colorError};
  `,
    header: o`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 16px;
    padding-inline: 24px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,
    hero: o`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    padding-block: 48px 32px;
    padding-inline: 24px;
    border-radius: 16px 16px 0 0;
  `,
    pollingHint: o`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    padding-block: 12px;
    padding-inline: 16px;
    border-radius: 8px;

    font-size: 13px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillQuaternary};
  `,
    serviceNote: o`
    font-size: 13px;
    color: ${t.colorTextDescription};
    text-align: center;
  `,
    successBadge: o`
    display: flex;
    gap: 6px;
    align-items: center;

    font-size: 13px;
    color: ${t.colorSuccess};
  `,
    userAvatar: o`
    border: 2px solid ${t.colorBorderSecondary};
    box-shadow: 0 4px 12px ${t.colorFillSecondary};
  `,
    userInfo: o`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
  `,
    username: o`
    font-size: 16px;
    font-weight: 600;
    color: ${t.colorText};
  `,
  })),
  ht = n.memo(({ providerId: o, name: t, onAuthChange: d, title: r, extra: i }) => {
    const { t: s } = L('modelProvider'),
      { modal: g } = ye.useApp(),
      [c, p] = n.useState(!1),
      u = n.useRef(!1),
      f = ce.useUtils(),
      { data: h } = ce.oauthDeviceFlow.getAuthStatus.useQuery(
        { providerId: o },
        { refetchOnWindowFocus: !0 },
      ),
      a = h?.isAuthenticated ?? !1,
      l = h?.username,
      j = h?.avatarUrl,
      v = ce.oauthDeviceFlow.revokeAuth.useMutation({
        onSuccess: () => {
          (f.oauthDeviceFlow.getAuthStatus.invalidate({ providerId: o }), d?.());
        },
      }),
      C = n.useCallback(async () => {
        (await f.oauthDeviceFlow.getAuthStatus.invalidate({ providerId: o }), d?.(), p(!1));
      }, [d, o, f.oauthDeviceFlow.getAuthStatus]),
      {
        state: k,
        deviceCodeInfo: M,
        error: E,
        startAuth: N,
        cancelAuth: x,
      } = Ri({ onSuccess: C, providerId: o }),
      b = n.useCallback(() => {
        g.confirm({
          centered: !0,
          content: s('providerModels.config.oauth.disconnectConfirm'),
          okButtonProps: { danger: !0 },
          okText: s('providerModels.config.oauth.disconnect'),
          onOk: async () => {
            await v.mutateAsync({ providerId: o });
          },
          title: s('providerModels.config.oauth.disconnect'),
        });
      }, [g, o, v, s]),
      w = n.useCallback(async () => {
        ((u.current = !1), p(!0), await N());
      }, [N]),
      _ = n.useCallback(() => {
        (p(!1), x());
      }, [x]),
      H = n.useCallback(() => {
        M?.verificationUri && window.open(M.verificationUri, '_blank');
      }, [M?.verificationUri]);
    n.useEffect(() => {
      k === 'success' && !u.current && (u.current = !0);
    }, [k]);
    const $ = () =>
        e.jsx('div', {
          className: I.hero,
          children: e.jsx(dt, { provider: o, size: 72, type: 'avatar' }),
        }),
      W = () => {
        if (a && !c)
          return e.jsxs('div', {
            className: I.content,
            children: [
              e.jsxs(m, {
                align: 'center',
                gap: 16,
                children: [
                  j && e.jsx(ei, { className: I.userAvatar, size: 56, src: j }),
                  e.jsxs('div', {
                    className: I.userInfo,
                    children: [
                      l && e.jsx('span', { className: I.username, children: l }),
                      e.jsxs('div', {
                        className: I.successBadge,
                        children: [
                          e.jsx(tt, {}),
                          e.jsx('span', { children: s('providerModels.config.oauth.connected') }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(oe, {
                icon: e.jsx(R, { icon: Bo }),
                loading: v.isPending,
                onClick: b,
                children: s('providerModels.config.oauth.disconnect'),
              }),
              e.jsx('div', {
                className: I.serviceNote,
                children: s('providerModels.config.oauth.serviceNote', { name: t }),
              }),
            ],
          });
        if (c) {
          if (k === 'requesting' || !M)
            return e.jsxs('div', {
              className: I.content,
              children: [
                e.jsx(R, { spin: !0, icon: xe, size: 24 }),
                e.jsx(ke, {
                  type: 'secondary',
                  children: s('providerModels.config.oauth.connecting'),
                }),
              ],
            });
          if (k === 'error' && E) {
            const q = `providerModels.config.oauth.${E}`;
            return e.jsxs('div', {
              className: I.content,
              children: [
                e.jsxs(m, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    e.jsx(R, { color: G.colorError, icon: Ue, size: 20 }),
                    e.jsx(ke, { className: I.errorText, children: s(q) }),
                  ],
                }),
                e.jsxs(m, {
                  gap: 12,
                  style: { width: '100%' },
                  width: 280,
                  children: [
                    e.jsx(oe, {
                      block: !0,
                      type: 'primary',
                      onClick: w,
                      children: s('providerModels.config.oauth.retry'),
                    }),
                    e.jsx(oe, {
                      block: !0,
                      type: 'text',
                      onClick: _,
                      children: s('providerModels.config.oauth.cancel'),
                    }),
                  ],
                }),
              ],
            });
          }
          return e.jsxs('div', {
            className: I.content,
            children: [
              e.jsxs(m, {
                align: 'center',
                gap: 12,
                style: { width: '100%' },
                width: 320,
                children: [
                  e.jsx(ke, {
                    type: 'secondary',
                    children: s('providerModels.config.oauth.enterCode'),
                  }),
                  e.jsxs(m, {
                    horizontal: !0,
                    align: 'center',
                    gap: 12,
                    style: { width: '100%' },
                    children: [
                      e.jsx('div', { className: I.codeBox, children: M.userCode }),
                      e.jsx(Nt, { content: M.userCode }),
                    ],
                  }),
                ],
              }),
              e.jsx(m, {
                gap: 12,
                style: { width: '100%' },
                width: 280,
                children: e.jsx(oe, {
                  block: !0,
                  icon: e.jsx(R, { icon: _o }),
                  size: 'large',
                  type: 'primary',
                  onClick: H,
                  children: s('providerModels.config.oauth.openBrowser'),
                }),
              }),
              e.jsx(Ei, {
                href: M.verificationUri,
                style: { fontSize: 13 },
                target: '_blank',
                type: 'secondary',
                children: M.verificationUri,
              }),
              e.jsxs('div', {
                className: I.pollingHint,
                children: [
                  e.jsx(R, { spin: !0, icon: xe }),
                  e.jsx('span', { children: s('providerModels.config.oauth.polling') }),
                ],
              }),
              e.jsx(oe, {
                type: 'text',
                onClick: _,
                children: s('providerModels.config.oauth.cancel'),
              }),
            ],
          });
        }
        if (k === 'error' && E) {
          const q = `providerModels.config.oauth.${E}`;
          return e.jsxs('div', {
            className: I.content,
            children: [
              e.jsxs(m, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [
                  e.jsx(R, { color: G.colorError, icon: Ue, size: 18 }),
                  e.jsx(ke, { className: I.errorText, children: s(q) }),
                ],
              }),
              e.jsx(oe, {
                size: 'large',
                type: 'primary',
                onClick: w,
                children: s('providerModels.config.oauth.connect', { name: t }),
              }),
              e.jsx('div', {
                className: I.serviceNote,
                children: s('providerModels.config.oauth.serviceNote', { name: t }),
              }),
            ],
          });
        }
        return e.jsxs('div', {
          className: I.content,
          children: [
            e.jsx(oe, {
              size: 'large',
              type: 'primary',
              onClick: w,
              children: s('providerModels.config.oauth.connect', { name: t }),
            }),
            e.jsx('div', {
              className: I.serviceNote,
              children: s('providerModels.config.oauth.serviceNote', { name: t }),
            }),
          ],
        });
      };
    return e.jsxs('div', {
      className: I.card,
      children: [
        (r || i) &&
          e.jsxs('div', {
            className: I.header,
            children: [e.jsx('div', { children: r }), e.jsx('div', { children: i })],
          }),
        $(),
        W(),
      ],
    });
  });
ht.displayName = 'OAuthDeviceFlowAuth';
const zi = n.memo(({ onClose: o, open: t, initialValues: d, id: r }) => {
    const { t: i } = L(['modelProvider', 'common']),
      [s, g] = n.useState(!1),
      [c, p] = P((v) => [v.updateAiProvider, v.deleteAiProvider]),
      { message: u, modal: f } = ye.useApp(),
      h = Bt(),
      a = async (v) => {
        g(!0);
        try {
          (await c(r, v), g(!1), u.success(i('updateAiProvider.updateSuccess')), o?.());
        } catch (C) {
          (console.error(C), g(!1));
        }
      },
      l = [
        {
          children: d.id,
          label: i('createNewAiProvider.id.title'),
          minWidth: 400,
          rules: [{ message: i('createNewAiProvider.id.required'), required: !0 }],
        },
        {
          children: e.jsx(ge, {
            placeholder: i('createNewAiProvider.name.placeholder'),
            variant: 'filled',
          }),
          label: i('createNewAiProvider.name.title'),
          minWidth: 400,
          name: 'name',
          rules: [{ message: i('createNewAiProvider.name.required'), required: !0 }],
        },
        {
          children: e.jsx(ti, {
            placeholder: i('createNewAiProvider.description.placeholder'),
            style: { minHeight: 80 },
            variant: 'filled',
          }),
          label: i('createNewAiProvider.description.title'),
          minWidth: 400,
          name: 'description',
        },
        {
          children: e.jsx(ge, {
            allowClear: !0,
            placeholder: 'https://logo-url',
            variant: 'filled',
          }),
          label: i('createNewAiProvider.logo.title'),
          minWidth: 400,
          name: 'logo',
        },
      ],
      j = [
        {
          children: e.jsx(ii, {
            options: Go,
            placeholder: i('createNewAiProvider.sdkType.placeholder'),
            variant: 'filled',
            optionRender: ({ label: v, value: C }) => {
              const k = C === 'router' ? 'newapi' : C;
              return e.jsxs(m, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [e.jsx(dt, { provider: k, size: 18 }), v],
              });
            },
          }),
          label: i('createNewAiProvider.sdkType.title'),
          minWidth: 400,
          name: ['settings', 'sdkType'],
          rules: [{ message: i('createNewAiProvider.sdkType.required'), required: !0 }],
        },
      ];
    return e.jsx(oi, {
      initialValues: d,
      open: t,
      scrollToFirstError: { behavior: 'instant', block: 'end', focus: !0 },
      submitText: i('createNewAiProvider.confirm'),
      footer: e.jsxs(m, {
        horizontal: !0,
        justify: 'space-between',
        children: [
          e.jsx(D, {
            danger: !0,
            disabled: s,
            type: 'primary',
            onClick: () => {
              f.confirm({
                okButtonProps: { danger: !0 },
                okText: i('delete', { ns: 'common' }),
                onOk: async () => {
                  (await p(r),
                    h('/settings/provider/all'),
                    o?.(),
                    u.success(i('updateAiProvider.deleteSuccess')));
                },
                title: i('updateAiProvider.confirmDelete'),
              });
            },
            children: i('delete', { ns: 'common' }),
          }),
          e.jsx(m, {
            horizontal: !0,
            gap: 8,
            children: e.jsx(D, {
              htmlType: 'submit',
              loading: s,
              type: 'primary',
              children: i('update', { ns: 'common' }),
            }),
          }),
        ],
      }),
      items: [
        { children: l, title: i('createNewAiProvider.basicTitle') },
        { children: j, title: i('createNewAiProvider.configTitle') },
      ],
      title: e.jsxs(m, {
        horizontal: !0,
        gap: 8,
        children: [e.jsx(R, { icon: st }), i('updateCustomAiProvider.title')],
      }),
      onCancel: o,
      onFinish: a,
    });
  }),
  Li = n.memo(() => {
    const { t: o } = L('modelProvider'),
      [t, d] = n.useState(!1),
      r = P(X.activeProviderConfig, ue);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ot, {
          title: o('updateAiProvider.tooltip'),
          children: e.jsx(D, {
            icon: Fo,
            size: 'small',
            type: 'text',
            onClick: (i) => {
              (i.preventDefault(), i.stopPropagation(), d(!0));
            },
          }),
        }),
        t &&
          r &&
          e.jsx(zi, {
            id: r.id,
            initialValues: r,
            open: t,
            onClose: () => {
              d(!1);
            },
          }),
      ],
    });
  }),
  de = 'ant',
  Pe = J(({ css: o, cssVar: t }) => ({
    aceGcm: o`
    padding-block: 0 !important;
    .${de}-form-item-label {
      display: none;
    }
    .${de}-form-item-control {
      width: 100%;

      font-size: 12px;
      color: ${t.colorTextSecondary};
      text-align: center;

      opacity: 0.66;

      transition: opacity 0.2s ${t.motionEaseInOut};

      &:hover {
        opacity: 1;
      }
    }
  `,
    form: o`
    .${de}-form-item-control:has(.${de}-input,.${de}-select) {
      flex: none;
    }
    ${$t.sm} {
      width: 100%;
      min-width: unset !important;
    }
    .${de}-select-selection-overflow-item {
      font-size: 12px;
    }
  `,
    help: o`
    border-radius: 50%;

    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextDescription};

    background: ${t.colorFillTertiary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }
  `,
    switchLoading: o`
    width: 44px !important;
    min-width: 44px !important;
    height: 22px !important;
    border-radius: 12px !important;
  `,
  })),
  Ii = n.memo(
    ({
      apiKeyItems: o,
      id: t,
      settings: d,
      checkModel: r,
      logo: i,
      className: s,
      checkErrorRender: g,
      canDeactivate: c = !0,
      name: p,
      showAceGcm: u = !0,
      extra: f,
      source: h = Ke.Builtin,
      apiKeyUrl: a,
      title: l,
    }) => {
      const {
          authType: j,
          proxyUrl: v,
          showApiKey: C = !0,
          defaultShowBrowserRequest: k,
          disableBrowserRequest: M,
          showChecker: E = !0,
          supportResponsesApi: N,
        } = d || {},
        { t: x } = L('modelProvider'),
        [b] = Ge.useForm(),
        w = j === 'oauthDeviceFlow',
        { data: _ } = ce.oauthDeviceFlow.getAuthStatus.useQuery(
          { providerId: t },
          { enabled: w, refetchOnWindowFocus: !0 },
        ),
        H = _?.isAuthenticated ?? !1,
        [$, W, q, F, ee, S] = P((V) => [
          X.providerDetailById(t)(V),
          V.updateAiProviderConfig,
          X.isProviderEnabled(t)(V),
          X.isAiProviderConfigLoading(t)(V),
          X.isProviderConfigUpdating(t)(V),
          X.providerConfigById(t)(V),
        ]),
        y = z.useWatch(['keyVaults', 'baseURL'], b),
        T = z.useWatch(['keyVaults', 'endpoint'], b),
        A = z.useWatch(['keyVaults', 'apiKey'], b),
        K = z.useWatch(['keyVaults', 'accessKeyId'], b),
        Y = z.useWatch(['keyVaults', 'secretAccessKey'], b),
        mt = z.useWatch(['keyVaults', 'username'], b),
        gt = z.useWatch(['keyVaults', 'password'], b),
        te = S?.keyVaults || $?.keyVaults,
        ft = !!y || !!T || !!te?.baseURL || !!te?.endpoint,
        xt = !!(
          A ||
          te?.apiKey ||
          K ||
          te?.accessKeyId ||
          Y ||
          te?.secretAccessKey ||
          (mt && gt) ||
          (te?.username && te?.password)
        ),
        Le = n.useRef(null);
      n.useLayoutEffect(() => {
        if (F || !(Le.current !== t)) return;
        const ae = { ...$, ...(S?.config && { config: S.config }) };
        (b.setFieldsValue(ae), (Le.current = t));
      }, [F, t, $, S, b]);
      const Se = n.useRef(!1),
        vt = n.useCallback(
          (...V) => {
            Se.current || W(...V);
          },
          [W],
        ),
        { run: yt } = Wo(vt, { wait: 500 }),
        Ae = h === Ke.Custom,
        jt = n.useCallback(async () => {
          (await P.getState().refreshAiProviderDetail(),
            await P.getState().refreshAiProviderRuntimeState());
        }, []),
        bt =
          !C || w
            ? []
            : (o ?? [
                {
                  children: F
                    ? e.jsx(Ze, {})
                    : e.jsx(Uo, {
                        autoComplete: 'new-password',
                        placeholder: x('providerModels.config.apiKey.placeholder', { name: p }),
                        suffix:
                          ee &&
                          e.jsx(R, { spin: !0, icon: xe, style: { color: G.colorTextTertiary } }),
                      }),
                  desc: a
                    ? e.jsx(Ce, {
                        i18nKey: 'providerModels.config.apiKey.descWithUrl',
                        ns: 'modelProvider',
                        values: { name: p },
                        components: [
                          e.jsx('span', {}, '0'),
                          e.jsx('span', {}, '1'),
                          e.jsx('span', {}, '2'),
                          e.jsx('a', { href: a, rel: 'noreferrer', target: '_blank' }, '3'),
                        ],
                      })
                    : x('providerModels.config.apiKey.desc', { name: p }),
                  label: x('providerModels.config.apiKey.title'),
                  name: [Ve, Vo],
                },
              ]),
        kt = {
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx(R, { icon: Ko, style: { marginRight: 4 } }),
              e.jsx(Ce, {
                i18nKey: 'providerModels.config.aesGcm',
                ns: 'modelProvider',
                components: [
                  e.jsx('span', {}, '0'),
                  e.jsx(
                    'a',
                    { href: Wt, rel: 'noreferrer', style: { marginInline: 4 }, target: '_blank' },
                    '1',
                  ),
                ],
              }),
            ],
          }),
          className: Pe.aceGcm,
          minWidth: void 0,
        },
        Ie = !!v || Ae,
        Mt = Ie
          ? {
              children: F
                ? e.jsx(Ze, {})
                : e.jsx(Oo, {
                    allowClear: !0,
                    placeholder:
                      (!!v && v?.placeholder) || x('providerModels.config.baseURL.placeholder'),
                    suffix:
                      ee && e.jsx(R, { spin: !0, icon: xe, style: { color: G.colorTextTertiary } }),
                  }),
              desc: (!!v && v?.desc) || x('providerModels.config.baseURL.desc'),
              label: (!!v && v?.title) || x('providerModels.config.baseURL.title'),
              name: [Ve, Ho],
              rules: [
                {
                  validator: (V, ae) => {
                    if (ae)
                      return qt().url().safeParse(ae).error
                        ? Promise.reject(x('providerModels.config.baseURL.invalid'))
                        : Promise.resolve();
                  },
                },
              ],
            }
          : void 0,
        Ct =
          !M && (k || (Ie && ft) || (C && xt))
            ? {
                children: F ? e.jsx(Ci, {}) : e.jsx(ne, { loading: ee }),
                desc: x('providerModels.config.fetchOnClient.desc'),
                label: x('providerModels.config.fetchOnClient.title'),
                minWidth: void 0,
                name: 'fetchOnClient',
              }
            : void 0,
        wt = [
          ...bt,
          Mt,
          N
            ? {
                children: F ? e.jsx(U.Button, { active: !0 }) : e.jsx(ne, { loading: ee }),
                desc: x('providerModels.config.responsesApi.desc'),
                label: x('providerModels.config.responsesApi.title'),
                minWidth: void 0,
                name: ['config', 'enableResponseApi'],
              }
            : void 0,
          Ct,
          E
            ? {
                children: F
                  ? e.jsx(U.Button, { active: !0 })
                  : e.jsx(Ai, {
                      checkErrorRender: g,
                      model: $?.checkModel || r,
                      provider: t,
                      onAfterCheck: async () => {
                        Se.current = !1;
                      },
                      onBeforeCheck: async () => {
                        ((Se.current = !0), await W(t, b.getFieldsValue()));
                      },
                    }),
                desc: x('providerModels.config.checker.desc'),
                label: x('providerModels.config.checker.title'),
              }
            : void 0,
          u && kt,
        ].filter(Boolean),
        Ne = $?.logo ?? i,
        Be = e.jsx(m, {
          horizontal: !0,
          align: 'center',
          gap: 4,
          style: {
            height: 24,
            maxHeight: 24,
            ...(q ? {} : { filter: 'grayscale(100%)', maxHeight: 24, opacity: 0.66 }),
          },
          children: Ae
            ? e.jsxs(m, {
                horizontal: !0,
                align: 'center',
                gap: 8,
                children: [
                  Ne
                    ? e.jsx($o, { avatar: Ne, shape: 'circle', size: 32, title: p || t })
                    : e.jsx(He, { provider: 'not-exist-provider', size: 24 }),
                  p,
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  l ?? e.jsx(He, { provider: t, size: 24 }),
                  e.jsx(ot, {
                    title: x('providerModels.config.helpDoc'),
                    children: e.jsx('a', {
                      href: Ft(Kt, t),
                      rel: 'noreferrer',
                      target: '_blank',
                      onClick: _t,
                      children: e.jsx(fe, {
                        className: Pe.help,
                        height: 20,
                        width: 20,
                        children: '?',
                      }),
                    }),
                  }),
                ],
              }),
        }),
        _e = e.jsxs(m, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          children: [f, Ae && e.jsx(Li, {}), c && !0 && e.jsx(Ti, { id: t }, t)],
        }),
        St = { children: wt, defaultActive: !0, extra: w ? void 0 : _e, title: w ? '' : Be },
        At = !w || H;
      return e.jsxs(e.Fragment, {
        children: [
          w && e.jsx(ht, { extra: _e, name: p || t, providerId: t, title: Be, onAuthChange: jt }),
          At &&
            e.jsx(Ge, {
              className: Re(Pe.form, s),
              form: b,
              items: [St],
              variant: 'borderless',
              onValuesChange: (V, ae) => {
                yt(t, ae);
              },
              ...Dt,
            }),
        ],
      });
    },
  ),
  Rn = n.memo(({ showConfig: o = !0, ...t }) => {
    const d = P((s) => s.useFetchAiProviderItem),
      r = P((s) => s.useFetchAiProviderList),
      i = Ot((s) => s.isMobile);
    return (
      r({ enabled: i }),
      d(t.id),
      e.jsxs(m, {
        gap: 24,
        paddingBlock: 8,
        children: [o && e.jsx(Ii, { ...t }), e.jsx(ki, { id: t.id, ...t.settings })],
      })
    );
  });
export { ki as M, Rn as P, Ze as S, Ii as a };
