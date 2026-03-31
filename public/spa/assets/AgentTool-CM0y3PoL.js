import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as E,
  M as Q,
  F as B,
  aA as Dt,
  Z as Rt,
  gU as mt,
  gV as pt,
  du as Re,
  f9 as Y,
  gW as Bt,
  v as et,
  dt as Ot,
  gR as Ut,
  cF as Wt,
  au as Vt,
  cG as Kt,
  gX as pe,
  i as _,
  aY as We,
  ax as qt,
  n as tt,
  fg as $t,
  aG as nt,
  aD as Gt,
  u as Ht,
  k as V,
  A as Ie,
  X as ie,
  as as Qt,
  az as Yt,
  $ as Xt,
  B as Ae,
  f as ge,
  ai as Jt,
  eV as gt,
  K as ae,
  br as Zt,
  by as en,
  bD as ke,
  T as tn,
  I as w,
  c as nn,
  bA as an,
} from './index-C8UyLGsD.js';
import { A as q } from './index-BAOF5XWg.js';
import { M as sn } from './Markdown-Mtmmwid1.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import './providerConfig-qS2Xx-oI.js';
import { u as on } from './index-bsLCy3LH.js';
import { S as ln } from './index-DyzLj6nP.js';
import {
  o as rn,
  aZ as cn,
  a4 as dn,
  a5 as ve,
  aT as Ce,
  a_ as je,
  g as R,
  b as me,
  p as Be,
  k as ft,
  l as ht,
  H as Oe,
  G as yt,
  q as un,
  a as at,
} from './index-Br6hqyew.js';
import { c as mn } from './constants-DVzeerl1.js';
import { S as pn } from './index-DLsdvBKx.js';
import { F as K } from './index-IVfJW6S-.js';
import { S as Ue } from './SliderWithInput-Cf7-Qlda.js';
import { g as ze } from './discover-H7COHXvN.js';
import { S as X } from './index-CaOmqfDS.js';
import { S as se } from './index-CqaQ90GQ.js';
import { T as H } from './index-DE9LlaC5.js';
import { P as gn } from './index-ChoXdYII.js';
import { F as fn } from './Table-BlWKciej.js';
import { E as hn } from './index-CopzJgBK.js';
import { g as yn } from './general-Bhxy39g6.js';
import {
  ei as Te,
  cy as bn,
  a_ as bt,
  aH as xn,
  q as Sn,
  bp as vn,
  _ as Cn,
  au as jn,
  dX as kn,
  cS as In,
  R as An,
  e2 as Tn,
  aw as Mn,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { I as xt } from './Input-C_EgL0SG.js';
import { u as wn } from './useIMECompositionEvent-CkD1Q2jQ.js';
import { S as St } from './Select-Bh2jXi9V.js';
import { g as st } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { B as _n } from './BackgroundSwatches-DKc0P1cG.js';
import { I as Fe } from './index-CiEczFY0.js';
import { F as Z } from './index-5nC5GwBn.js';
import { E as En } from './EditableMessage-DuPpxAb3.js';
import { E as vt } from './Empty-DHLc2EKW.js';
import { S as Ne } from './SortableList-Cl2V_SXC.js';
import { M as Le } from './McpIcon-Cnqa4sOi.js';
import { S as ee } from './SkillsIcon-DjXX_Ijx.js';
import { c as Pn } from './Action-BIzXeFfi.js';
import {
  T as zn,
  t as te,
  d as Fn,
  K as Nn,
  e as Ln,
  S as T,
  L as Dn,
  f as Rn,
  g as U,
} from './index-jMJizVYM.js';
import { h as Bn } from './index-B3t4c43k.js';
import { c as On } from './useFetchInstalledPlugins-BVJR4xhT.js';
import { P as Un } from './PluginAvatar-CHsZ58C_.js';
import { u as Wn } from './store-DLK7hSbM.js';
import { S as Vn } from './Segmented-9Z1phQkA.js';
var Kn = function (t) {
  return function (n, a) {
    var s = l.useRef(!1);
    (t(function () {
      return function () {
        s.current = !1;
      };
    }, []),
      t(function () {
        if (!s.current) s.current = !0;
        else return n();
      }, a));
  };
};
const qn = Kn(l.useEffect),
  $n = (t) => ({
    messages: [
      {
        content: `You are an emoji expert who selects the most appropriate emoji to represent concepts, emotions, or topics.

Rules:
- Output ONLY a single emoji (1-2 characters maximum)
- Focus on the CONTENT meaning, not the language it's written in
- Choose an emoji that best represents the core topic, activity, or subject matter
- Prioritize topic-specific emojis over generic emotion emojis (e.g., for sports, use 🏃 instead of 😅)
- For work/projects, use work-related emojis (💼, 🚀, 💪) not cultural symbols
- For pure emotions without specific topics, use face emojis (happy: 🎉, sad: 😢, thinking: 🤔)
- For activities or subjects, use object or symbol emojis that represent the main topic
- No explanations or additional text`,
        role: 'system',
      },
      {
        content:
          'I am a copywriting master who helps name design and art works with literary depth',
        role: 'user',
      },
      { content: '✒️', role: 'assistant' },
      { content: 'I am a code wizard who converts JavaScript code to TypeScript', role: 'user' },
      { content: '🧙‍♂️', role: 'assistant' },
      { content: 'I just got a promotion at work', role: 'user' },
      { content: '🎉', role: 'assistant' },
      {
        content: 'I am a business plan expert who helps with startup strategies and marketing',
        role: 'user',
      },
      { content: '🚀', role: 'assistant' },
      { content: t, role: 'user' },
    ],
  }),
  Gn = (t, n) => ({
    messages: [
      {
        content: `你是一名擅长起名的起名大师，名字需要有文学内涵，注重精炼和赋子意境，你需要将用户的描述总结为 10 个字以内的角色，并翻译为目标语言。格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {角色名}`,
        role: 'system',
      },
      {
        content:
          '输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]',
        role: 'user',
      },
      {
        content:
          '输入: {你是一名 UX Writer，擅长将平平无奇的描述转换为精妙的表达。接下来用户会输入一段文本，你需要转成更加棒的表述方式，长度不超过40个字。} [ru-RU]',
        role: 'user',
      },
      { content: 'Творческий редактор UX', role: 'assistant' },
      {
        content:
          '输入: {你是一名前端代码专家，请将下面的代码转成 ts，不要修改实现。如果原本 js 中没有定义的全局变量，需要补充 declare 的类型声明。} [en-US]',
        role: 'user',
      },
      { content: 'TS Transformer', role: 'assistant' },
      {
        content:
          "输入: {Improve my English language use by replacing basic A0-level expressions with more sophisticated, advanced-level phrases while maintaining the conversation's essence. Your responses should focus solely on corrections and enhancements, avoiding additional explanations.} [zh-CN]",
        role: 'user',
      },
      { content: '邮件优化助理', role: 'assistant' },
      { content: `输入: {${t}} [${n}]`, role: 'user' },
    ],
  }),
  Hn = (t, n) => ({
    messages: [
      {
        content: `你是一名擅长技能总结的助理，你需要将用户的输入的内容总结为一个角色技能简介，不超过 20 个字。内容需要确保信息清晰、逻辑清晰，并有效地传达角色的技能和经验，需要并翻译为目标语言:${n}。格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {简介}`,
        role: 'system',
      },
      {
        content:
          '输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]',
        role: 'user',
      },
      { content: '擅长文创艺术作品起名', role: 'assistant' },
      {
        content:
          '输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]',
        role: 'user',
      },
      { content: 'Good at business plan writing and consulting', role: 'assistant' },
      {
        content:
          '输入: {You are a frontend expert. Please convert the code below to TS without modifying the implementation. If there are global variables not defined in the original JS, you need to add type declarations using declare.} [zh-CN]',
        role: 'user',
      },
      { content: '擅长 ts 转换和补充类型声明', role: 'assistant' },
      {
        content: `输入: {
用户正常书写面向开发者的 API 用户使用文档。你需要从用户的视角来提供比较易用易读的文档内容。

一个标准的 API 文档示例如下：

\`\`\`markdown
---
title: useWatchPluginMessage
description: 监听获取 LobeChat 发过来的插件消息
nav: API
---

\`useWatchPluginMessage\` 是 Chat Plugin SDK 封装一个的 React Hook，用于监听从 LobeChat 发过来的插件消息。
} [ru-RU]`,
        role: 'user',
      },
      {
        content:
          'Специализируется на создании хорошо структурированной и профессиональной документации README для GitHub с точными техническими терминами',
        role: 'assistant',
      },
      {
        content:
          '输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [zh-CN]',
        role: 'user',
      },
      { content: '擅长创业计划撰写与咨询', role: 'assistant' },
      { content: `输入: {${t}} [${n}]`, role: 'user' },
    ],
    temperature: 0,
  }),
  Qn = (t, n) => ({
    messages: [
      {
        content:
          '你是一名擅长会话标签总结的助理，你需要将用户的输入的内容提炼出分类标签，使用`,`分隔，不超过 5 个标签，并翻译为目标语言。 格式要求如下：\n输入: {文本作为JSON引用字符串} [locale]\n输出: {标签}',
        role: 'system',
      },
      {
        content:
          '输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]',
        role: 'user',
      },
      { content: '起名,写作,创意', role: 'assistant' },
      {
        content:
          '输入: {You are a professional translator proficient in Simplified Chinese, and have participated in the translation work of the Chinese versions of The New York Times and The Economist. Therefore, you have a deep understanding of translating news and current affairs articles. I hope you can help me translate the following English news paragraphs into Chinese, with a style similar to the Chinese versions of the aforementioned magazines.} [zh-CN]',
        role: 'user',
      },
      { content: '翻译,写作,文案', role: 'assistant' },
      {
        content:
          '输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]',
        role: 'user',
      },
      { content: 'entrepreneurship,planning,consulting', role: 'assistant' },
      { content: `输入: {${t}} [${n}]`, role: 'user' },
    ],
  }),
  us = l.memo(({ mode: t = 'agent' }) => {
    const { t: n } = E('chat'),
      a = on(mn.agentId),
      s = Q(rn.getAgentConfigById(a));
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(B, { flex: 1 }),
        e.jsxs(B, {
          gap: 12,
          width: '100%',
          style: { paddingBottom: 16 },
          children: [
            e.jsx(q, { avatar: s.avatar || Dt, shape: 'square', size: 78 }),
            e.jsx(Rt, { fontSize: 24, weight: 'bold', children: n('agentBuilder.title') }),
            e.jsx(sn, { fontSize: 14, variant: 'chat', children: n('agentBuilder.welcome') }),
            e.jsx(ln, { count: 3, mode: t }),
          ],
        }),
      ],
    });
  }),
  Yn = {
    config: pt,
    lastUpdatedTime: null,
    loading: !0,
    loadingState: { avatar: !1, backgroundColor: !1, description: !1, tags: !1, title: !1 },
    meta: mt,
    saveStatus: 'idle',
  },
  Xn = (t, n) => {
    switch (n.type) {
      case 'update':
        return Re(t, (a) => Y(a, n.config));
      case 'togglePlugin':
        return Re(t, (a) => {
          const { pluginId: s, state: o } = n;
          if ((a.plugins === void 0 && (a.plugins = []), typeof o > 'u')) {
            if (a.plugins.includes(s)) {
              a.plugins.splice(a.plugins.indexOf(s), 1);
              return;
            }
            a.plugins.push(s);
            return;
          }
          o
            ? a?.plugins?.includes?.(s) || a?.plugins?.push(s)
            : (a.plugins = a?.plugins?.filter?.((u) => u !== s));
        });
      case 'reset':
        return pt;
      default:
        return t;
    }
  },
  Jn = (t, n) => {
    switch (n.type) {
      case 'update':
        return Re(t, (a) => Y(a, n.value));
      case 'reset':
        return mt;
    }
  },
  it = Ot('AgentSettings'),
  Zn = (t, n) => ({
    ...Yn,
    autoPickEmoji: async () => {
      const { config: a, meta: s, dispatchMeta: o } = n(),
        u = a.systemRole;
      ve.fetchPresetTaskResult({
        onFinish: async (r) => {
          o({ type: 'update', value: { avatar: r } });
        },
        onLoadingChange: (r) => {
          n().updateLoadingState('avatar', r);
        },
        params: Y(
          n().internal_getSystemAgentForMeta(),
          $n([s.title, s.description, u].filter(Boolean).join(',')),
        ),
        trace: n().getCurrentTracePayload({ traceName: Ce.EmojiPicker }),
      });
    },
    autocompleteAgentDescription: async () => {
      const {
          dispatchMeta: a,
          config: s,
          meta: o,
          updateLoadingState: u,
          streamUpdateMetaString: r,
        } = n(),
        p = s.systemRole;
      if (!p) return;
      const c = o.description;
      (a({ type: 'update', value: { description: '...' } }),
        ve.fetchPresetTaskResult({
          onError: () => {
            a({ type: 'update', value: { description: c } });
          },
          onLoadingChange: (g) => {
            u('description', g);
          },
          onMessageHandle: r('description'),
          params: Y(n().internal_getSystemAgentForMeta(), Hn(p, ze.getCurrentLanguage())),
          trace: n().getCurrentTracePayload({ traceName: Ce.SummaryAgentDescription }),
        }));
    },
    autocompleteAgentTags: async () => {
      const {
          dispatchMeta: a,
          config: s,
          meta: o,
          updateLoadingState: u,
          streamUpdateMetaArray: r,
        } = n(),
        p = s.systemRole;
      if (!p) return;
      const c = o.tags;
      (a({ type: 'update', value: { tags: ['...'] } }),
        ve.fetchPresetTaskResult({
          onError: () => {
            a({ type: 'update', value: { tags: c } });
          },
          onLoadingChange: (g) => {
            u('tags', g);
          },
          onMessageHandle: r('tags'),
          params: Y(
            n().internal_getSystemAgentForMeta(),
            Qn([o.title, o.description, p].filter(Boolean).join(','), ze.getCurrentLanguage()),
          ),
          trace: n().getCurrentTracePayload({ traceName: Ce.SummaryAgentTags }),
        }));
    },
    autocompleteAgentTitle: async () => {
      const {
          dispatchMeta: a,
          config: s,
          meta: o,
          updateLoadingState: u,
          streamUpdateMetaString: r,
        } = n(),
        p = s.systemRole;
      if (!p) return;
      const c = o.title;
      (a({ type: 'update', value: { title: '...' } }),
        ve.fetchPresetTaskResult({
          onError: () => {
            a({ type: 'update', value: { title: c } });
          },
          onLoadingChange: (g) => {
            u('title', g);
          },
          onMessageHandle: r('title'),
          params: Y(
            n().internal_getSystemAgentForMeta(),
            Gn([o.description, p].filter(Boolean).join(','), ze.getCurrentLanguage()),
          ),
          trace: n().getCurrentTracePayload({ traceName: Ce.SummaryAgentTitle }),
        }));
    },
    autocompleteAllMeta: (a) => {
      const { meta: s } = n();
      ((!s.title || a) && n().autocompleteAgentTitle(),
        (!s.description || a) && n().autocompleteAgentDescription(),
        (!s.avatar || a) && n().autoPickEmoji(),
        (!s.tags || a) && n().autocompleteAgentTags());
    },
    autocompleteMeta: (a) => {
      const {
        autoPickEmoji: s,
        autocompleteAgentTitle: o,
        autocompleteAgentDescription: u,
        autocompleteAgentTags: r,
      } = n();
      switch (a) {
        case 'avatar': {
          s();
          return;
        }
        case 'description': {
          u();
          return;
        }
        case 'title': {
          o();
          return;
        }
        case 'tags': {
          r();
          return;
        }
      }
    },
    dispatchConfig: async (a) => {
      const s = Xn(n().config, a);
      if ((t({ config: s }, !1, a), n().onConfigChange)) {
        n().updateSaveStatus('saving');
        try {
          (await n().onConfigChange?.(s), n().updateSaveStatus('saved'));
        } catch (o) {
          (o?.name === 'AbortError' ||
            o?.message?.includes('aborted') ||
            console.error('[AgentSettings] Failed to save config:', o),
            n().updateSaveStatus('idle'));
        }
      }
    },
    dispatchMeta: async (a) => {
      const s = Jn(n().meta, a);
      if ((t({ meta: s }, !1, a), n().onMetaChange)) {
        n().updateSaveStatus('saving');
        try {
          (await n().onMetaChange?.(s), n().updateSaveStatus('saved'));
        } catch (o) {
          (o?.name === 'AbortError' ||
            o?.message?.includes('aborted') ||
            console.error('[AgentSettings] Failed to save meta:', o),
            n().updateSaveStatus('idle'));
        }
      }
    },
    getCurrentTracePayload: (a) => ({ sessionId: n().id, topicId: cn.AgentSettings, ...a }),
    internal_getSystemAgentForMeta: () => dn.agentMeta(et.getState()),
    resetAgentConfig: async () => {
      await n().dispatchConfig({ type: 'reset' });
    },
    resetAgentMeta: async () => {
      await n().dispatchMeta({ type: 'reset' });
    },
    setAgentConfig: async (a) => {
      await n().dispatchConfig({ config: a, type: 'update' });
    },
    setAgentMeta: async (a) => {
      const { dispatchMeta: s, id: o, meta: u } = n(),
        r = Y(u, a);
      try {
        const p = Bt();
        p &&
          p.track({
            name: 'agent_meta_updated',
            properties: {
              assistant_avatar: r.avatar,
              assistant_background_color: r.backgroundColor,
              assistant_description: r.description,
              assistant_name: r.title,
              assistant_tags: r.tags,
              is_inbox: o === 'inbox',
              session_id: o || 'unknown',
              timestamp: Date.now(),
              user_id: et.getState().user?.id || 'anonymous',
            },
          });
      } catch (p) {
        console.warn('Failed to track agent meta update:', p);
      }
      await s({ type: 'update', value: a });
    },
    setChatConfig: async (a) => {
      await n().setAgentConfig({ chatConfig: a });
    },
    streamUpdateMetaArray: (a) => {
      let s = '';
      return (o) => {
        o.type === 'text' &&
          ((s += o.text), n().dispatchMeta({ type: 'update', value: { [a]: s.split(',') } }));
      };
    },
    streamUpdateMetaString: (a) => {
      let s = '';
      return (o) => {
        o.type === 'text' &&
          ((s += o.text), n().dispatchMeta({ type: 'update', value: { [a]: s } }));
      };
    },
    toggleAgentPlugin: (a, s) => {
      n().dispatchConfig({ pluginId: a, state: s, type: 'togglePlugin' });
    },
    updateLoadingState: (a, s) => {
      t(
        { loadingState: { ...n().loadingState, [a]: s } },
        !1,
        it('updateLoadingState', { key: a, value: s }),
      );
    },
    updateSaveStatus: (a) => {
      t(
        { lastUpdatedTime: a === 'saved' ? new Date() : n().lastUpdatedTime, saveStatus: a },
        !1,
        it('updateSaveStatus', { status: a }),
      );
    },
  }),
  ea = () => Wt(Kt(Zn), Vt),
  { useStore: W, useStoreApi: Ct, Provider: ta } = Ut(),
  na = l.memo(() => {
    const { t } = E('setting'),
      [n] = K.useForm(),
      a = W((u) => u.setChatConfig),
      s = W(pe.currentChatConfig, _),
      o = {
        children: [
          {
            children: e.jsx(X, {}),
            desc: t('settingChat.enableAutoCreateTopic.desc'),
            label: t('settingChat.enableAutoCreateTopic.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'enableAutoCreateTopic',
            valuePropName: 'checked',
          },
          {
            children: e.jsx(Ue, { max: 8, min: 0, unlimitedInput: !0 }),
            desc: t('settingChat.autoCreateTopicThreshold.desc'),
            divider: !1,
            hidden: !s.enableAutoCreateTopic,
            label: t('settingChat.autoCreateTopicThreshold.title'),
            name: 'autoCreateTopicThreshold',
          },
          {
            children: e.jsx(X, {}),
            label: t('settingChat.enableHistoryCount.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'enableHistoryCount',
            valuePropName: 'checked',
          },
          {
            children: e.jsx(Ue, { max: 20, min: 0, unlimitedInput: !0 }),
            desc: t('settingChat.historyCount.desc'),
            divider: !1,
            hidden: !s.enableHistoryCount,
            label: t('settingChat.historyCount.title'),
            name: 'historyCount',
          },
          {
            children: e.jsx(X, {}),
            hidden: !s.enableHistoryCount,
            label: t('settingChat.enableCompressHistory.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'enableCompressHistory',
            valuePropName: 'checked',
          },
          {
            children: e.jsx(X, {}),
            desc: t('settingChat.enableAutoScrollOnStreaming.desc'),
            label: t('settingChat.enableAutoScrollOnStreaming.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'enableAutoScrollOnStreaming',
            valuePropName: 'checked',
          },
        ],
        title: t('settingChat.title'),
      };
    return e.jsx(K, {
      footer: e.jsx(K.SubmitFooter, {}),
      form: n,
      initialValues: s,
      items: [o],
      itemsType: 'group',
      variant: 'borderless',
      onFinish: a,
      ...We,
    });
  }),
  aa = 'claw',
  sa = 5,
  ia = l.memo(() => {
    const { t } = E(['setting', 'common']),
      { message: n, modal: a } = qt.useApp(),
      s = Q((d) => d.activeAgentId),
      [o, u] = l.useState(aa),
      [r, p] = l.useState(!1),
      [c, g] = l.useState(null),
      {
        data: j = [],
        isLoading: I,
        mutate: f,
      } = tt(s ? ['agent-documents', s] : null, async ([, d]) => je.getDocuments({ agentId: d })),
      { data: b = [], isLoading: z } = tt('agent-document-templates', () => je.getTemplates()),
      h = l.useMemo(
        () =>
          b
            .filter((d) => d.filenames.length > 0)
            .map((d) => ({ label: d.name, title: d.description, value: d.id })),
        [b],
      ),
      P = l.useMemo(() => b.find((d) => d.id === o), [o, b]),
      O = l.useMemo(() => {
        const d = P?.filenames ?? [],
          S = new Set(j.map((F) => F.filename)),
          C = d.filter((F) => S.has(F));
        return {
          createdCount: d.length - C.length,
          overwrittenCount: C.length,
          overwrittenFilenames: C,
          templateFilenames: d,
        };
      }, [j, P]),
      y = async (d) => {
        if (s)
          try {
            (g(d),
              await je.removeDocument({ agentId: s, id: d }),
              await f(),
              n.success(t('agentDocuments.deleteSuccess')));
          } catch (S) {
            n.error(S instanceof Error ? S.message : 'Failed to delete document');
          } finally {
            g((S) => (S === d ? null : S));
          }
      },
      x = [
        {
          dataIndex: 'title',
          key: 'title',
          render: (d, S) =>
            e.jsxs(se, {
              direction: 'vertical',
              size: 0,
              children: [
                e.jsx(H.Text, { strong: !0, children: S.title || S.filename }),
                e.jsx(H.Text, { type: 'secondary', children: S.filename }),
              ],
            }),
          title: t('agentDocuments.columns.document'),
        },
        {
          dataIndex: 'templateId',
          key: 'templateId',
          render: (d) => (typeof d == 'string' && d ? e.jsx($t, { children: d }) : null),
          title: t('agentDocuments.columns.template'),
          width: 160,
        },
        {
          key: 'actions',
          render: (d, S) =>
            e.jsx(
              gn,
              {
                okButtonProps: { loading: c === S.id },
                title: t('agentDocuments.deleteConfirm'),
                onConfirm: () => y(S.id),
                children: e.jsx(nt, {
                  danger: !0,
                  loading: c === S.id,
                  type: 'link',
                  children: t('delete', { ns: 'common' }),
                }),
              },
              `delete-${S.id}`,
            ),
          title: t('agentDocuments.columns.actions'),
          width: 120,
        },
      ],
      v = async () => {
        if (s)
          try {
            (p(!0),
              await je.initializeFromTemplate({ agentId: s, templateSet: o }),
              await f(),
              n.success(t('agentDocuments.createSuccess')));
          } catch (d) {
            n.error(d instanceof Error ? d.message : 'Failed to apply template');
          } finally {
            p(!1);
          }
      },
      M = () => {
        if (!P) return;
        const { createdCount: d, overwrittenCount: S, overwrittenFilenames: C } = O;
        if (S === 0) {
          v();
          return;
        }
        const F = C.slice(0, sa),
          A = S - F.length;
        a.confirm({
          content: e.jsxs(se, {
            direction: 'vertical',
            size: 8,
            children: [
              e.jsx(H.Text, {
                children: t('agentDocuments.overwriteConfirm.summary', {
                  createCount: d,
                  overwriteCount: S,
                  templateName: P.name,
                }),
              }),
              e.jsx(H.Text, {
                type: 'secondary',
                children: t('agentDocuments.overwriteConfirm.warning'),
              }),
              F.length > 0
                ? e.jsxs(se, {
                    direction: 'vertical',
                    size: 4,
                    children: [
                      F.map((N) => e.jsx(H.Text, { code: !0, children: N }, N)),
                      A > 0
                        ? e.jsx(H.Text, {
                            type: 'secondary',
                            children: t('agentDocuments.overwriteConfirm.more', { count: A }),
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
          okButtonProps: { danger: !0 },
          okText: t('agentDocuments.overwriteConfirm.confirm'),
          onOk: async () => v(),
          title: t('agentDocuments.overwriteConfirm.title'),
        });
      };
    return e.jsxs(se, {
      direction: 'vertical',
      size: 16,
      style: { width: '100%' },
      children: [
        e.jsx(H.Title, {
          level: 4,
          style: { marginBottom: 0, marginTop: 0 },
          children: t('agentDocuments.title'),
        }),
        e.jsx(H.Text, { type: 'secondary', children: t('agentDocuments.desc') }),
        e.jsxs(se, {
          wrap: !0,
          align: 'center',
          children: [
            e.jsx(Gt, { loading: z, options: h, style: { minWidth: 240 }, value: o, onChange: u }),
            e.jsx(nt, {
              disabled: !s,
              loading: r,
              type: 'primary',
              onClick: M,
              children: t('agentDocuments.createWithTemplate'),
            }),
          ],
        }),
        e.jsx(fn, {
          columns: x,
          dataSource: j,
          loading: I,
          locale: { emptyText: t('agentDocuments.empty') },
          pagination: !1,
          rowKey: 'id',
        }),
      ],
    });
  }),
  oa = l.memo(
    ({ loading: t, background: n, value: a, onChange: s, onGenerate: o, canAutoGenerate: u }) => {
      const { t: r } = E('common'),
        p = Ht(yn.currentLanguage);
      return e.jsxs(B, {
        horizontal: !0,
        align: 'center',
        flex: 'none',
        gap: 2,
        padding: 2,
        style: {
          background: V.colorBgContainer,
          border: `1px solid ${V.colorBorderSecondary}`,
          borderRadius: 32,
          paddingRight: 8,
          width: 'fit-content',
        },
        children: [
          e.jsx(hn, {
            background: n || V.colorFillTertiary,
            loading: t,
            locale: p,
            size: 48,
            value: a,
            style: { background: V.colorFillTertiary },
            onChange: s,
          }),
          e.jsx(Ie, {
            disabled: !u,
            icon: Te,
            loading: t,
            size: 'small',
            title: r(u ? 'autoGenerate' : 'autoGenerateTooltipDisabled'),
            onClick: o,
          }),
        ],
      });
    },
  ),
  ot = l.memo(({ loading: t, value: n, onChange: a, onGenerate: s, canAutoGenerate: o, ...u }) => {
    const { t: r } = E('common'),
      [p, c] = l.useState(n || ''),
      { compositionProps: g, isComposingRef: j } = wn(),
      I = l.useRef(!1),
      f = l.useCallback(() => {
        a?.(p);
      }, [p]);
    return (
      l.useEffect(() => {
        n !== void 0 && c(n);
      }, [n]),
      e.jsx(xt, {
        suffix:
          s &&
          e.jsx(Ie, {
            disabled: !o,
            icon: Te,
            loading: t,
            size: 'small',
            title: r(o ? 'autoGenerate' : 'autoGenerateTooltipDisabled'),
            style: { marginRight: -4 },
            onClick: s,
          }),
        ...u,
        value: p,
        onBlur: () => {
          (f(), (I.current = !1));
        },
        onChange: (b) => {
          c(b.target.value);
        },
        ...g,
        onFocus: () => {
          I.current = !0;
        },
        onPressEnter: (b) => {
          !b.shiftKey && !j.current && (b.preventDefault(), f(), (I.current = !1));
        },
      })
    );
  }),
  la = l.memo(({ loading: t, onGenerate: n, value: a, canAutoGenerate: s, onChange: o, ...u }) => {
    const { t: r } = E('common');
    return e.jsx(St, {
      mode: 'tags',
      open: !1,
      style: { width: '100%' },
      tokenSeparators: [',', '，', ' '],
      value: st(a) ? a.split(',') : a,
      suffixIcon:
        n &&
        e.jsx(Ie, {
          disabled: !s,
          icon: Te,
          loading: t,
          size: 'small',
          title: r(s ? 'autoGenerate' : 'autoGenerateTooltipDisabled'),
          style: { marginRight: -4 },
          onClick: n,
        }),
      onChange: (p) => {
        o?.(st(p) ? p.split(',') : p);
      },
      ...u,
    });
  }),
  ra = l.memo(() => {
    const { t } = E('setting'),
      [n] = K.useForm(),
      { isAgentEditable: a } = ie(Qt),
      [s, o, u, r] = W((h) => [
        !!h.config.systemRole,
        h.setAgentMeta,
        h.autocompleteMeta,
        h.autocompleteAllMeta,
      ]),
      [p, c] = W((h) => [h.id === Yt, h.loadingState]),
      g = W(pe.currentMetaConfig, _),
      [j, I] = l.useState(g.backgroundColor);
    if (
      (qn(() => {
        n.setFieldsValue(g);
      }, [g]),
      p)
    )
      return;
    const b = [
        {
          Render: ot,
          key: 'title',
          label: t('settingAgent.name.title'),
          placeholder: t('settingAgent.name.placeholder'),
        },
        {
          Render: ot,
          desc: t('settingAgent.description.desc'),
          key: 'description',
          label: t('settingAgent.description.title'),
          placeholder: t('settingAgent.description.placeholder'),
        },
        {
          Render: la,
          desc: t('settingAgent.tag.desc'),
          key: 'tags',
          label: t('settingAgent.tag.title'),
          placeholder: t('settingAgent.tag.placeholder'),
        },
      ].map((h) => {
        const P = h.Render;
        return {
          children: e.jsx(P, {
            canAutoGenerate: s,
            loading: c?.[h.key],
            placeholder: h.placeholder,
            onGenerate: () => {
              u(h.key);
            },
          }),
          label: h.label,
          name: h.key,
        };
      }),
      z = {
        children: [
          {
            children: e.jsx(oa, {
              background: j,
              canAutoGenerate: s,
              loading: c?.avatar,
              onGenerate: () => u('avatar'),
            }),
            label: t('settingAgent.avatar.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'avatar',
          },
          {
            children: e.jsx(_n, { onValuesChange: (h) => I(h) }),
            label: t('settingAgent.backgroundColor.title'),
            minWidth: void 0,
            name: 'backgroundColor',
          },
          ...b,
        ],
        extra: e.jsx(Xt, {
          title: s
            ? t('autoGenerateTooltip', { ns: 'common' })
            : t('autoGenerateTooltipDisabled', { ns: 'common' }),
          children: e.jsx(Ae, {
            disabled: !s,
            icon: Te,
            iconPlacement: 'end',
            loading: Object.values(c).some((h) => !!h),
            size: 'small',
            iconProps: { size: 12 },
            onClick: (h) => {
              (h.stopPropagation(), r(!0));
            },
            children: t('autoGenerate', { ns: 'common' }),
          }),
        }),
        title: t('settingAgent.title'),
      };
    return e.jsx(K, {
      disabled: !a,
      footer: e.jsx(K.SubmitFooter, {}),
      form: n,
      initialValues: g,
      items: [z],
      itemsType: 'group',
      variant: 'borderless',
      onFinish: o,
      ...We,
    });
  }),
  re = ge(({ css: t }) => ({
    label: t`
    user-select: none;
  `,
  })),
  lt = l.memo(
    ({
      value: t,
      onChange: n,
      disabled: a,
      checked: s,
      onToggle: o,
      min: u,
      max: r,
      step: p,
      unlimitedInput: c,
    }) =>
      e.jsxs(B, {
        horizontal: !0,
        align: 'center',
        gap: 12,
        justify: 'flex-end',
        width: 300,
        children: [
          !a &&
            e.jsx('div', {
              style: { flex: 1 },
              children: e.jsx(Ue, {
                disabled: a,
                max: r,
                min: u,
                step: p,
                unlimitedInput: c,
                value: t,
                onChange: n,
              }),
            }),
          e.jsx(X, {
            checked: s,
            size: s ? 'small' : 'default',
            onChange: (g) => {
              o(g);
            },
          }),
        ],
      }),
  ),
  ca = l.memo(({ value: t, onChange: n, checked: a, onToggle: s, options: o }) =>
    e.jsxs(B, {
      horizontal: !0,
      align: 'center',
      gap: 12,
      justify: 'flex-end',
      width: 300,
      children: [
        a &&
          e.jsx('div', {
            style: { flex: 1 },
            children: e.jsx(St, { options: o, value: t, onChange: n }),
          }),
        e.jsx(X, {
          checked: a,
          size: a ? 'small' : 'default',
          onChange: (u) => {
            s(u);
          },
        }),
      ],
    }),
  ),
  ne = {
    frequency_penalty: ['params', 'frequency_penalty'],
    presence_penalty: ['params', 'presence_penalty'],
    temperature: ['params', 'temperature'],
    top_p: ['params', 'top_p'],
  },
  da = { frequency_penalty: 0, presence_penalty: 0, temperature: 0.7, top_p: 1 },
  rt = {
    frequency_penalty: {
      descKey: 'settingModel.frequencyPenalty.desc',
      labelKey: 'settingModel.frequencyPenalty.title',
      slider: { max: 2, min: -2, step: 0.1 },
      tag: 'frequency_penalty',
    },
    presence_penalty: {
      descKey: 'settingModel.presencePenalty.desc',
      labelKey: 'settingModel.presencePenalty.title',
      slider: { max: 2, min: -2, step: 0.1 },
      tag: 'presence_penalty',
    },
    temperature: {
      descKey: 'settingModel.temperature.desc',
      labelKey: 'settingModel.temperature.title',
      slider: { max: 2, min: 0, step: 0.1 },
      tag: 'temperature',
    },
    top_p: {
      descKey: 'settingModel.topP.desc',
      labelKey: 'settingModel.topP.title',
      slider: { max: 1, min: 0, step: 0.1 },
      tag: 'top_p',
    },
  },
  ua = l.memo(() => {
    const { t } = E('setting'),
      [n] = K.useForm(),
      a = W(pe.currentAgentConfig, _),
      s = W((x) => x.setAgentConfig),
      { temperature: o, top_p: u, presence_penalty: r, frequency_penalty: p } = a.params ?? {},
      c = l.useRef({ frequency_penalty: p, presence_penalty: r, temperature: o, top_p: u });
    l.useEffect(() => {
      (n.setFieldsValue(a),
        typeof o == 'number' && (c.current.temperature = o),
        typeof u == 'number' && (c.current.top_p = u),
        typeof r == 'number' && (c.current.presence_penalty = r),
        typeof p == 'number' && (c.current.frequency_penalty = p));
    }, [a, n, o, u, r, p]);
    const g = Z.useWatch(ne.temperature, n),
      j = Z.useWatch(ne.top_p, n),
      I = Z.useWatch(ne.presence_penalty, n),
      f = Z.useWatch(ne.frequency_penalty, n);
    (l.useEffect(() => {
      typeof g == 'number' && (c.current.temperature = g);
    }, [g]),
      l.useEffect(() => {
        typeof j == 'number' && (c.current.top_p = j);
      }, [j]),
      l.useEffect(() => {
        typeof I == 'number' && (c.current.presence_penalty = I);
      }, [I]),
      l.useEffect(() => {
        typeof f == 'number' && (c.current.frequency_penalty = f);
      }, [f]));
    const b = {
        frequency_penalty: typeof f == 'number',
        presence_penalty: typeof I == 'number',
        temperature: typeof g == 'number',
        top_p: typeof j == 'number',
      },
      z = l.useCallback(
        (x, v) => {
          const M = ne[x];
          if (!v) {
            const C = n.getFieldValue(M);
            (typeof C == 'number' && (c.current[x] = C), n.setFieldValue(M, void 0));
            return;
          }
          const d = c.current[x],
            S = typeof d == 'number' ? d : da[x];
          ((c.current[x] = S), n.setFieldValue(M, S));
        },
        [n],
      ),
      h = Object.keys(rt).map((x) => {
        const v = rt[x],
          M = b[x];
        return {
          children: e.jsx(lt, {
            checked: M,
            disabled: !M,
            max: v.slider.max,
            min: v.slider.min,
            step: v.slider.step,
            styles: re,
            onToggle: (d) => z(x, d),
          }),
          desc: t(v.descKey),
          label: e.jsxs(B, {
            horizontal: !0,
            align: 'center',
            className: re.label,
            gap: 8,
            children: [t(v.labelKey), e.jsx(Fe, { title: t(v.descKey) })],
          }),
          minWidth: void 0,
          name: ne[x],
          tag: v.tag,
        };
      }),
      P = Z.useWatch(['params', 'max_tokens'], n),
      O = Z.useWatch(['params', 'reasoning_effort'], n),
      y = {
        children: [
          {
            children: e.jsx(X, {}),
            desc: t('settingChat.enableStreaming.desc'),
            label: t('settingChat.enableStreaming.title'),
            layout: 'horizontal',
            minWidth: void 0,
            name: ['chatConfig', 'enableStreaming'],
            valuePropName: 'checked',
          },
          ...h,
          {
            children: e.jsx(lt, {
              unlimitedInput: !0,
              checked: typeof P == 'number',
              disabled: typeof P != 'number',
              max: 32e3,
              min: 0,
              step: 100,
              styles: re,
              onToggle: (x) => {
                x
                  ? n.setFieldValue(['params', 'max_tokens'], 4096)
                  : n.setFieldValue(['params', 'max_tokens'], void 0);
              },
            }),
            desc: t('settingModel.maxTokens.desc'),
            label: e.jsxs(B, {
              horizontal: !0,
              align: 'center',
              className: re.label,
              gap: 8,
              children: [
                t('settingModel.maxTokens.title'),
                e.jsx(Fe, { title: t('settingModel.maxTokens.desc') }),
              ],
            }),
            minWidth: void 0,
            name: ['params', 'max_tokens'],
            tag: 'max_tokens',
          },
          {
            children: e.jsx(ca, {
              checked: typeof O == 'string',
              options: [
                { label: t('settingModel.reasoningEffort.options.low'), value: 'low' },
                { label: t('settingModel.reasoningEffort.options.medium'), value: 'medium' },
                { label: t('settingModel.reasoningEffort.options.high'), value: 'high' },
              ],
              onToggle: (x) => {
                x
                  ? n.setFieldValue(['params', 'reasoning_effort'], 'medium')
                  : n.setFieldValue(['params', 'reasoning_effort'], void 0);
              },
            }),
            desc: t('settingModel.reasoningEffort.desc'),
            label: e.jsxs(B, {
              horizontal: !0,
              align: 'center',
              className: re.label,
              gap: 8,
              children: [
                t('settingModel.reasoningEffort.title'),
                e.jsx(Fe, { title: t('settingModel.reasoningEffort.desc') }),
              ],
            }),
            minWidth: void 0,
            name: ['params', 'reasoning_effort'],
            tag: 'reasoning_effort',
          },
        ],
        title: t('settingModel.title'),
      };
    return e.jsx(K, {
      footer: e.jsx(K.SubmitFooter, {}),
      form: n,
      initialValues: a,
      items: [y],
      itemsType: 'group',
      variant: 'borderless',
      onFinish: (x) => {
        const v = { ...x };
        if (v.params) {
          const M = { ...v.params };
          (Object.keys(M).forEach((d) => {
            M[d] === void 0 && (M[d] = null);
          }),
            (v.params = M));
        }
        s(v);
      },
      ...We,
    });
  }),
  ct = ge(({ css: t, cssVar: n }) => ({
    markdown: t`
    border: unset;
  `,
    wrapper: t`
    width: 100%;
    padding: 8px;
    border: 1px solid ${n.colorBorder};
    border-radius: calc(${n.borderRadiusLG} - 1px);

    background: ${n.colorBgContainer};
  `,
  })),
  ma = l.memo(() => {
    const { t } = E('setting'),
      n = W(pe.openingMessage),
      a = W((c) => c.setAgentConfig),
      s = l.useCallback(
        (c) => {
          a({ openingMessage: c });
        },
        [a],
      ),
      [o, u] = l.useState(!1),
      r = l.useCallback(() => {
        u(!0);
      }, []),
      p = !o && n && e.jsx(Ae, { size: 'small', onClick: r, children: e.jsx(bn, { size: 16 }) });
    return e.jsx('div', {
      className: ct.wrapper,
      children: e.jsxs(B, {
        direction: 'horizontal',
        children: [
          e.jsx(En, {
            showEditWhenEmpty: !0,
            editButtonSize: 'small',
            editing: o,
            height: 'auto',
            placeholder: t('settingOpening.openingMessage.placeholder'),
            value: n ?? '',
            variant: 'borderless',
            classNames: { markdown: ct.markdown },
            text: { cancel: t('cancel', { ns: 'common' }), confirm: t('ok', { ns: 'common' }) },
            onChange: s,
            onEditingChange: u,
          }),
          p,
        ],
      }),
    });
  }),
  ce = ge(({ css: t, cssVar: n }) => ({
    empty: t`
    margin-block: 24px;
    margin-inline: auto;
  `,
    questionItemContainer: t`
    padding-block: 8px;
    padding-inline-end: 8px;
  `,
    questionItemContent: t`
    flex: 1;
  `,
    questionsList: t`
    width: 100%;
    margin-block-start: 16px;
  `,
    repeatError: t`
    margin: 0;
    color: ${n.colorErrorText};
  `,
  })),
  pa = l.memo(() => {
    const { t } = E('setting'),
      [n, a] = l.useState(''),
      s = W(pe.openingQuestions),
      o = W((f) => f.setAgentConfig),
      [u, r] = Jt(s, { onChange: (f) => o({ openingQuestions: f }), value: s }),
      p = l.useMemo(() => u.map((f, b) => ({ content: f, id: f || b })), [u]),
      c = l.useCallback(() => {
        n.trim() && (r([...s, n.trim()]), a(''));
      }, [s, n, r]),
      g = l.useCallback(
        (f) => {
          const b = [...s],
            z = b.indexOf(f);
          (b.splice(z, 1), r(b));
        },
        [s, r],
      ),
      j = l.useCallback(
        (f) => {
          r(f.map((b) => b.content));
        },
        [r],
      ),
      I = s.includes(n.trim());
    return e.jsxs(B, {
      gap: 8,
      width: '100%',
      children: [
        e.jsxs(B, {
          gap: 4,
          width: '100%',
          children: [
            e.jsxs(se.Compact, {
              style: { width: '100%' },
              children: [
                e.jsx(xt, {
                  placeholder: t('settingOpening.openingQuestions.placeholder'),
                  style: { flex: 1 },
                  value: n,
                  onChange: (f) => a(f.target.value),
                  onPressEnter: c,
                }),
                e.jsx(Ae, { disabled: s.includes(n.trim()), icon: bt, onClick: c }),
              ],
            }),
            I &&
              e.jsx('p', {
                className: ce.repeatError,
                children: t('settingOpening.openingQuestions.repeat'),
              }),
          ],
        }),
        e.jsx('div', {
          className: ce.questionsList,
          children:
            s.length > 0
              ? e.jsx(Ne, {
                  items: p,
                  renderItem: (f) =>
                    e.jsxs(Ne.Item, {
                      className: ce.questionItemContainer,
                      id: f.id,
                      variant: 'filled',
                      children: [
                        e.jsx(Ne.DragHandle, {}),
                        e.jsx('div', { className: ce.questionItemContent, children: f.content }),
                        e.jsx(Ie, { icon: xn, size: 'small', onClick: () => g(f.content) }),
                      ],
                    }),
                  onChange: j,
                })
              : e.jsx(vt, {
                  className: ce.empty,
                  description: t('settingOpening.openingQuestions.empty'),
                  descriptionProps: { fontSize: 14 },
                  icon: Sn,
                  style: { maxWidth: 400 },
                }),
        }),
      ],
    });
  }),
  dt = { style: { maxWidth: '100%', width: '100%' } },
  ga = l.memo(() => {
    const { t } = E('setting');
    return e.jsx(K, {
      itemsType: 'group',
      variant: 'borderless',
      items: [
        {
          children: [
            {
              children: e.jsx(ma, {}),
              desc: t('settingOpening.openingMessage.desc'),
              label: t('settingOpening.openingMessage.title'),
              layout: 'vertical',
              wrapperCol: dt,
            },
            {
              children: e.jsx(pa, {}),
              desc: t('settingOpening.openingQuestions.desc'),
              label: t('settingOpening.openingQuestions.title'),
              layout: 'vertical',
              wrapperCol: dt,
            },
          ],
          title: t('settingOpening.title'),
        },
      ],
    });
  }),
  fa = l.memo(({ tab: t, loadingSkeleton: n }) =>
    Q(gt.isAgentConfigLoading)
      ? n
      : e.jsxs(e.Fragment, {
          children: [
            t === ae.Meta && e.jsx(ra, {}),
            t === ae.Documents && e.jsx(ia, {}),
            t === ae.Opening && e.jsx(ga, {}),
            t === ae.Chat && e.jsx(na, {}),
            t === ae.Modal && e.jsx(ua, {}),
          ],
        }),
  ),
  ha = () => {
    const t = Ct(),
      {
        autocompleteMeta: n,
        autocompleteAllMeta: a,
        autocompleteAgentTitle: s,
        autocompleteAgentDescription: o,
        autocompleteAgentTags: u,
        autoPickEmoji: r,
      } = t.getState();
    return l.useMemo(
      () => ({
        autoPickEmoji: r,
        autocompleteAgentDescription: o,
        autocompleteAgentTags: u,
        autocompleteAgentTitle: s,
        autocompleteAllMeta: a,
        autocompleteMeta: n,
      }),
      [],
    );
  },
  ya = l.memo(
    ({
      onConfigChange: t,
      instanceRef: n,
      id: a,
      onMetaChange: s,
      meta: o,
      config: u,
      loading: r,
    }) => {
      const p = Ct(),
        c = Zt(p);
      (c('meta', o),
        c('config', u),
        c('onConfigChange', t),
        c('onMetaChange', s),
        c('loading', r),
        c('id', a));
      const g = ha();
      return (l.useImperativeHandle(n, () => g), null);
    },
  ),
  ba = l.memo(({ children: t, ...n }) =>
    e.jsxs(ta, { createStore: ea, children: [e.jsx(ya, { ...n }), t] }),
  ),
  ms = l.memo(({ tab: t = ae.Meta, ...n }) => {
    const a = ie((o) => o.isMobile),
      s = e.jsx(pn, {
        active: !0,
        paragraph: { rows: 6 },
        style: { padding: a ? 16 : 0 },
        title: !1,
      });
    return e.jsx(ba, {
      ...n,
      children: e.jsx(l.Suspense, {
        fallback: s,
        children: e.jsx(fa, { loadingSkeleton: s, tab: t }),
      }),
    });
  }),
  xa = l.memo(({ icon: t, label: n }) =>
    typeof t == 'string'
      ? e.jsx('img', { alt: n, height: 16, src: t, style: { flexShrink: 0 }, width: 16 })
      : e.jsx(w, { fill: V.colorText, icon: t, size: 16 }),
  ),
  Sa = l.memo(({ icon: t, label: n }) =>
    typeof t == 'string'
      ? e.jsx('img', { alt: n, height: 16, src: t, style: { flexShrink: 0 }, width: 16 })
      : e.jsx(w, { fill: V.colorText, icon: t, size: 16 }),
  ),
  De = ge(({ css: t, cssVar: n }) => ({
    loadingIcon: t`
    flex-shrink: 0;
    color: ${n.colorTextSecondary};
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  `,
    notInstalledTag: t`
    border-color: ${n.colorWarningBorder};
    background: ${n.colorWarningBg};
  `,
    tag: t`
    height: 28px !important;
    border-radius: ${n.borderRadiusSM} !important;
  `,
    warningIcon: t`
    flex-shrink: 0;
    color: ${n.colorWarning};
  `,
  })),
  jt = l.memo(
    ({ pluginId: t, onRemove: n, showDesktopOnlyLabel: a = !1, useAllMetaList: s = !1 }) => {
      const o = en(),
        { t: u } = E('setting'),
        r = typeof t == 'string' ? t : t?.identifier,
        p = R(s ? me.allMetaList : me.metaList, _),
        c = R(Be.installedPluginMetaList, _),
        g = R(ft.getServers, _),
        j = ie(ke.enableKlavis),
        I = R(ht.getServers, _),
        f = ie(ke.enableLobehubSkill),
        b = R(Be.isPluginInstalled(r)),
        z = l.useMemo(() => {
          if (j) {
            const A = Oe.find((N) => N.identifier === r);
            if (A) {
              const N = g.find((oe) => oe.identifier === r);
              return {
                availableInWeb: !0,
                icon: A.icon,
                isInstalled: !!N,
                label: A.label,
                title: A.label,
                type: 'klavis',
              };
            }
          }
          if (f) {
            const A = yt.find((N) => N.id === r);
            if (A) {
              const N = I.find((oe) => oe.identifier === r);
              return {
                availableInWeb: !0,
                icon: A.icon,
                isInstalled: !!N,
                label: A.label,
                title: A.label,
                type: 'lobehub-skill',
              };
            }
          }
          const C = p.find((A) => A.identifier === r);
          if (C)
            return {
              availableInWeb: s && 'availableInWeb' in C ? C.availableInWeb : !0,
              avatar: C.meta.avatar,
              isInstalled: !0,
              title: C.meta.title,
              type: 'builtin',
            };
          const F = c.find((A) => A.identifier === r);
          return F
            ? {
                availableInWeb: !0,
                avatar: F.avatar,
                isInstalled: !0,
                title: F.title,
                type: 'plugin',
              }
            : null;
        }, [r, p, c, j, g, f, I]),
        h = Wn((C) => C.usePluginDetail),
        { data: P, isLoading: O } = h({ identifier: !z && !b ? r : void 0, withManifest: !1 }),
        y = z || {
          availableInWeb: !0,
          avatar: P?.avatar,
          isInstalled: !1,
          title: P?.title || r,
          type: 'plugin',
        },
        x = y.title,
        v = a && !y.availableInWeb,
        M = () =>
          O
            ? e.jsx(Cn, { className: De.loadingIcon, size: 14 })
            : y.isInstalled
              ? y.type === 'klavis' && 'icon' in y && 'label' in y
                ? e.jsx(xa, { icon: y.icon, label: y.label })
                : y.type === 'lobehub-skill' && 'icon' in y && 'label' in y
                  ? e.jsx(Sa, { icon: y.icon, label: y.label })
                  : y.type === 'builtin' && 'avatar' in y && y.avatar
                    ? e.jsx(q, {
                        avatar: y.avatar,
                        shape: 'square',
                        size: 16,
                        style: { flexShrink: 0 },
                      })
                    : 'avatar' in y
                      ? e.jsx(Un, { avatar: y.avatar, size: 16 })
                      : null
              : e.jsx(jn, { className: De.warningIcon, size: 14 }),
        d = () => {
          let C = x;
          return (
            v && (C += ` (${u('tools.desktopOnly', { defaultValue: 'Desktop Only' })})`),
            !y.isInstalled &&
              !O &&
              (C += ` (${u('tools.notInstalled', { defaultValue: 'Not Installed' })})`),
            C
          );
        },
        S = !y.isInstalled && !O;
      return e.jsx(tn, {
        closable: !0,
        className: De.tag,
        closeIcon: e.jsx(vn, { size: 12 }),
        color: S ? 'error' : void 0,
        icon: M(),
        variant: o ? 'filled' : 'outlined',
        title: S
          ? u('tools.notInstalledWarning', { defaultValue: 'This tool is not installed' })
          : void 0,
        onClose: n,
        children: d(),
      });
    },
  );
jt.displayName = 'PluginTag';
const kt = l.memo(() => {
  const { t } = E('setting');
  return e.jsx(vt, {
    icon: kn,
    style: { paddingBlock: 40 },
    description: t('tools.installed.empty', { defaultValue: 'No skills enabled' }),
  });
});
kt.displayName = 'ToolEmpty';
const ut = 20,
  de = ge(({ css: t }) => ({
    footer: t`
    padding: 4px;
    border-block-start: 1px solid ${V.colorBorderSecondary};
  `,
    header: t`
    padding: ${V.paddingXS};
    border-block-end: 1px solid ${V.colorBorderSecondary};
    background: transparent;
  `,
    scroller: t`
    overflow: hidden auto;
  `,
    trailingIcon: t`
    opacity: 0.5;
  `,
  })),
  It = l.memo(
    ({
      activeTab: t,
      onTabChange: n,
      allTabItems: a,
      installedTabItems: s,
      onOpenStore: o,
      onClose: u,
    }) => {
      const { t: r } = E('setting'),
        p = nn(),
        c = t === 'all' ? a : s;
      return e.jsxs(B, {
        style: { maxHeight: 500, width: '100%' },
        children: [
          e.jsx('div', {
            className: de.header,
            onClick: an,
            children: e.jsx(Vn, {
              block: !0,
              size: 'small',
              value: t,
              options: [
                { label: r('tools.tabs.all', { defaultValue: 'All' }), value: 'all' },
                {
                  label: r('tools.tabs.installed', { defaultValue: 'Installed' }),
                  value: 'installed',
                },
              ],
              onChange: (g) => n(g),
            }),
          }),
          e.jsx('div', {
            className: de.scroller,
            style: { flex: 1 },
            children: t === 'installed' && s.length === 0 ? e.jsx(kt, {}) : e.jsx(zn, { items: c }),
          }),
          e.jsxs('div', {
            className: de.footer,
            children: [
              e.jsxs('div', {
                className: te.item,
                role: 'button',
                tabIndex: 0,
                onClick: o,
                children: [
                  e.jsx('div', {
                    className: te.itemIcon,
                    children: e.jsx(w, { icon: In, size: ut }),
                  }),
                  e.jsx('div', { className: te.itemContent, children: r('skillStore.title') }),
                  e.jsx(w, { className: de.trailingIcon, icon: An, size: 16 }),
                ],
              }),
              e.jsxs('div', {
                className: te.item,
                role: 'button',
                tabIndex: 0,
                onClick: () => {
                  (u?.(), p('/settings/skill'));
                },
                children: [
                  e.jsx('div', {
                    className: te.itemIcon,
                    children: e.jsx(w, { icon: Tn, size: ut }),
                  }),
                  e.jsx('div', {
                    className: te.itemContent,
                    children: r('tools.plugins.management'),
                  }),
                  e.jsx(w, { className: de.trailingIcon, icon: Mn, size: 16 }),
                ],
              }),
            ],
          }),
        ],
      });
    },
  );
It.displayName = 'PopoverContent';
const ue = 'lobe-web-browsing',
  va = l.memo(
    ({
      agentId: t,
      showWebBrowsing: n = !1,
      filterAvailableInWeb: a = !1,
      useAllMetaList: s = !1,
    }) => {
      const { t: o } = E('setting'),
        u = Q((i) => i.activeAgentId),
        r = t || u || '',
        c = Q(gt.getAgentConfigById(r), _)?.plugins || [],
        g = Q((i) => i.updateAgentConfigById),
        j = Q((i) => i.updateAgentChatConfigById),
        I = R(Be.installedPluginMetaList, _),
        f = R(s ? me.installedAllMetaList : me.metaList, _),
        b = Q(un.isEnableSearchById(r)),
        z = R(ft.getServers, _),
        h = ie(ke.enableKlavis),
        P = R(ht.getServers, _),
        O = ie(ke.enableLobehubSkill),
        y = R(me.installedBuiltinSkills, _),
        x = R(at.getMarketAgentSkills, _),
        v = R(at.getUserAgentSkills, _),
        [M, d] = l.useState(!1),
        [S, C] = l.useState(!1),
        [F, A] = l.useState(null),
        N = l.useRef(!1),
        [oe, At, Tt, Mt, wt] = R((i) => [
          i.useFetchPluginStore,
          i.useFetchUserKlavisServers,
          i.useFetchLobehubSkillConnections,
          i.useFetchUninstalledBuiltinTools,
          i.useFetchAgentSkills,
        ]);
      (oe(), On(), Mt(!0), wt(!0), Fn(c), At(h), Tt(O));
      const Ve = l.useCallback(async () => {
          if (!r) return;
          await j(r, { searchMode: b ? 'off' : 'auto' });
        }, [b, j, r]),
        $ = l.useCallback(
          async (i, k) => {
            if (!r) return;
            const G = c,
              le = G.includes(i),
              Ee = k !== void 0 ? k : !le;
            let J;
            if (Ee && !le) J = [...G, i];
            else if (!Ee && le) J = G.filter((Pe) => Pe !== i);
            else return;
            await g(r, { plugins: J });
          },
          [r, c, g],
        ),
        L = l.useCallback((i) => (n && i === ue ? b : c.includes(i)), [c, b, n]),
        D = l.useCallback(
          async (i) => {
            n && i === ue ? await Ve() : await $(i);
          },
          [Ve, $, n],
        );
      l.useEffect(() => {
        !N.current && c.length >= 0 && ((N.current = !0), A(c.length > 5 ? 'installed' : 'all'));
      }, [c.length]);
      const _t = (i) => z.find((k) => k.identifier === i),
        Ke = l.useMemo(() => new Set(Oe.map((i) => i.identifier)), []),
        qe = l.useMemo(() => {
          const i = new Set();
          for (const k of y) i.add(k.identifier);
          for (const k of x) i.add(k.identifier);
          for (const k of v) i.add(k.identifier);
          return i;
        }, [y, x, v]),
        fe = l.useMemo(() => {
          let i = f;
          return (
            a && s && (i = i.filter((k) => k.availableInWeb)),
            h && (i = i.filter((k) => !Ke.has(k.identifier))),
            (i = i.filter((k) => !qe.has(k.identifier))),
            i
          );
        }, [f, Ke, h, a, s, qe]),
        he = l.useMemo(
          () =>
            h
              ? Oe.map((i) => ({
                  icon: e.jsx(Ln, { icon: i.icon, label: i.label, size: T }),
                  key: i.identifier,
                  label: e.jsx(Nn, {
                    agentId: r,
                    identifier: i.identifier,
                    label: i.label,
                    server: _t(i.identifier),
                    serverName: i.serverName,
                  }),
                }))
              : [],
          [h, z, r],
        ),
        ye = l.useMemo(
          () =>
            O
              ? yt.map((i) => ({
                  icon: e.jsx(Rn, { icon: i.icon, label: i.label, size: T }),
                  key: i.id,
                  label: e.jsx(Dn, { agentId: r, label: i.label, provider: i.id }),
                }))
              : [],
          [O, P, r],
        ),
        Et = (i) => async (k) => {
          (k.preventDefault(), k.stopPropagation());
          const G = typeof i == 'string' ? i : i?.identifier;
          if (n && G === ue) {
            if (!r) return;
            await j(r, { searchMode: 'off' });
          } else await $(G, !1);
        },
        $e = l.useMemo(
          () =>
            y.map((i) => ({
              icon: i.avatar
                ? e.jsx(q, { avatar: i.avatar, size: T, style: { marginInlineEnd: 0 } })
                : e.jsx(w, { icon: ee, size: T }),
              key: i.identifier,
              label: e.jsx(U, {
                checked: L(i.identifier),
                id: i.identifier,
                label: i.name,
                onUpdate: async () => {
                  (d(!0), await D(i.identifier), d(!1));
                },
              }),
            })),
          [y, L, D],
        ),
        Ge = l.useMemo(
          () =>
            x.map((i) => ({
              icon: e.jsx(w, { icon: ee, size: T }),
              key: i.identifier,
              label: e.jsx(U, {
                checked: L(i.identifier),
                id: i.identifier,
                label: i.name,
                onUpdate: async () => {
                  (d(!0), await D(i.identifier), d(!1));
                },
              }),
            })),
          [x, L, D],
        ),
        He = l.useMemo(
          () =>
            v.map((i) => ({
              icon: e.jsx(w, { icon: ee, size: T }),
              key: i.identifier,
              label: e.jsx(U, {
                checked: L(i.identifier),
                id: i.identifier,
                label: i.name,
                onUpdate: async () => {
                  (d(!0), await D(i.identifier), d(!1));
                },
              }),
            })),
          [v, L, D],
        ),
        Me = l.useMemo(
          () => [
            ...$e,
            ...fe.map((i) => ({
              icon: e.jsx(q, { avatar: i.meta.avatar, size: T, style: { marginInlineEnd: 0 } }),
              key: i.identifier,
              label: e.jsx(U, {
                checked: L(i.identifier),
                id: i.identifier,
                label: i.meta?.title,
                onUpdate: async () => {
                  (d(!0), await D(i.identifier), d(!1));
                },
              }),
            })),
            ...ye,
            ...he,
          ],
          [$e, fe, he, ye, L, D],
        ),
        be = I.filter((i) => i.type !== 'customPlugin'),
        xe = I.filter((i) => i.type === 'customPlugin'),
        Se = l.useCallback(
          (i) => ({
            icon:
              i?.avatar === 'MCP_AVATAR' || !i?.avatar
                ? e.jsx(w, { icon: Le, size: T })
                : e.jsx(q, { avatar: i.avatar, shape: 'square', size: T }),
            key: i.identifier,
            label: e.jsx(U, {
              checked: c.includes(i.identifier),
              id: i.identifier,
              label: i.title,
              onUpdate: async () => {
                (d(!0), await $(i.identifier), d(!1));
              },
            }),
          }),
          [c, $],
        ),
        Qe = l.useMemo(() => be.map(Se), [be, Se]),
        Ye = l.useMemo(() => xe.map(Se), [xe, Se]),
        we = l.useMemo(() => [...Ge, ...Qe], [Ge, Qe]),
        _e = l.useMemo(() => [...He, ...Ye], [He, Ye]),
        Pt = l.useMemo(
          () => [
            ...(Me.length > 0
              ? [
                  {
                    children: Me,
                    key: 'lobehub',
                    label: o('skillStore.tabs.lobehub'),
                    type: 'group',
                  },
                ]
              : []),
            ...(we.length > 0
              ? [
                  {
                    children: we,
                    key: 'community',
                    label: o('skillStore.tabs.community'),
                    type: 'group',
                  },
                ]
              : []),
            ...(_e.length > 0
              ? [{ children: _e, key: 'custom', label: o('skillStore.tabs.custom'), type: 'group' }]
              : []),
          ],
          [Me, we, _e, o],
        ),
        zt = l.useMemo(() => {
          const i = [],
            k = fe
              .filter((m) => L(m.identifier))
              .map((m) => ({
                icon: e.jsx(q, { avatar: m.meta.avatar, size: T, style: { marginInlineEnd: 0 } }),
                key: m.identifier,
                label: e.jsx(U, {
                  checked: !0,
                  id: m.identifier,
                  label: m.meta?.title,
                  onUpdate: async () => {
                    (d(!0), await D(m.identifier), d(!1));
                  },
                }),
              })),
            G = he.filter((m) => c.includes(m.key)),
            le = ye.filter((m) => c.includes(m.key)),
            J = [
              ...y
                .filter((m) => L(m.identifier))
                .map((m) => ({
                  icon: m.avatar
                    ? e.jsx(q, { avatar: m.avatar, size: T, style: { marginInlineEnd: 0 } })
                    : e.jsx(w, { icon: ee, size: T }),
                  key: m.identifier,
                  label: e.jsx(U, {
                    checked: !0,
                    id: m.identifier,
                    label: m.name,
                    onUpdate: async () => {
                      (d(!0), await D(m.identifier), d(!1));
                    },
                  }),
                })),
              ...k,
              ...le,
              ...G,
            ];
          J.length > 0 &&
            i.push({
              children: J,
              key: 'installed-lobehub',
              label: o('skillStore.tabs.lobehub'),
              type: 'group',
            });
          const Pe = be
              .filter((m) => c.includes(m.identifier))
              .map((m) => ({
                icon:
                  m?.avatar === 'MCP_AVATAR' || !m?.avatar
                    ? e.jsx(w, { icon: Le, size: T })
                    : e.jsx(q, { avatar: m.avatar, shape: 'square', size: T }),
                key: m.identifier,
                label: e.jsx(U, {
                  checked: !0,
                  id: m.identifier,
                  label: m.title,
                  onUpdate: async () => {
                    (d(!0), await $(m.identifier), d(!1));
                  },
                }),
              })),
            Je = [
              ...x
                .filter((m) => L(m.identifier))
                .map((m) => ({
                  icon: e.jsx(w, { icon: ee, size: T }),
                  key: m.identifier,
                  label: e.jsx(U, {
                    checked: !0,
                    id: m.identifier,
                    label: m.name,
                    onUpdate: async () => {
                      (d(!0), await D(m.identifier), d(!1));
                    },
                  }),
                })),
              ...Pe,
            ];
          Je.length > 0 &&
            i.push({
              children: Je,
              key: 'installed-community',
              label: o('skillStore.tabs.community'),
              type: 'group',
            });
          const Lt = xe
              .filter((m) => c.includes(m.identifier))
              .map((m) => ({
                icon:
                  m?.avatar === 'MCP_AVATAR' || !m?.avatar
                    ? e.jsx(w, { icon: Le, size: T })
                    : e.jsx(q, { avatar: m.avatar, shape: 'square', size: T }),
                key: m.identifier,
                label: e.jsx(U, {
                  checked: !0,
                  id: m.identifier,
                  label: m.title,
                  onUpdate: async () => {
                    (d(!0), await $(m.identifier), d(!1));
                  },
                }),
              })),
            Ze = [
              ...v
                .filter((m) => L(m.identifier))
                .map((m) => ({
                  icon: e.jsx(w, { icon: ee, size: T }),
                  key: m.identifier,
                  label: e.jsx(U, {
                    checked: !0,
                    id: m.identifier,
                    label: m.name,
                    onUpdate: async () => {
                      (d(!0), await D(m.identifier), d(!1));
                    },
                  }),
                })),
              ...Lt,
            ];
          return (
            Ze.length > 0 &&
              i.push({
                children: Ze,
                key: 'installed-custom',
                label: o('skillStore.tabs.custom'),
                type: 'group',
              }),
            i
          );
        }, [fe, y, x, v, he, ye, be, xe, c, L, D, $, o]),
        Ft = F ?? 'all',
        Xe = e.jsx(Ae, {
          icon: bt,
          loading: M,
          size: 'small',
          style: { color: V.colorTextSecondary },
          type: 'text',
          children: o('tools.add', { defaultValue: 'Add' }),
        }),
        Nt = l.useMemo(() => {
          const i = [...c];
          return (n && b && !i.includes(ue) && i.unshift(ue), i);
        }, [c, b, n]);
      return e.jsx(e.Fragment, {
        children: e.jsxs(B, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          wrap: 'wrap',
          children: [
            e.jsx(l.Suspense, {
              fallback: Xe,
              children: e.jsx(Pn, {
                maxWidth: 400,
                minWidth: 400,
                open: S,
                placement: 'bottomLeft',
                trigger: 'click',
                menu: { items: [], style: { maxHeight: 'unset', overflowY: 'visible' } },
                popupProps: { style: { padding: 0 } },
                popupRender: () =>
                  e.jsx(It, {
                    activeTab: Ft,
                    allTabItems: Pt,
                    installedTabItems: zt,
                    onClose: () => C(!1),
                    onTabChange: A,
                    onOpenStore: () => {
                      (C(!1), Bn());
                    },
                  }),
                positionerProps: {
                  collisionAvoidance: { align: 'flip', fallbackAxisSide: 'end', side: 'flip' },
                  collisionBoundary: typeof document > 'u' ? void 0 : document.documentElement,
                  positionMethod: 'fixed',
                },
                onOpenChange: C,
                children: Xe,
              }),
            }),
            Nt.map((i) =>
              e.jsx(
                jt,
                { pluginId: i, showDesktopOnlyLabel: a, useAllMetaList: s, onRemove: Et(i) },
                i,
              ),
            ),
          ],
        }),
      });
    },
  );
va.displayName = 'AgentTool';
export { us as A, ms as a, va as b };
