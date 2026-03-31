import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as D } from './SettingHeader-CfIsrQr0.js';
import {
  g as S,
  v as c,
  w as h,
  aY as j,
  I as y,
  i as F,
  F as B,
  B as N,
  e7 as z,
  e8 as R,
  X as O,
  as as V,
} from './index-C8UyLGsD.js';
import { F as d } from './index-IVfJW6S-.js';
import { S as b } from './index-DLsdvBKx.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as U } from './index-CebVGYjj.js';
import { F as C } from './index-5nC5GwBn.js';
import { _ as A, P as q } from '../vendor/vendor-icons-BHMUH78i.js';
import { T as W } from './index-B_YhPabI.js';
import { S as _ } from './index-CaOmqfDS.js';
import { S as k } from './SliderWithInput-Cf7-Qlda.js';
import './providerConfig-qS2Xx-oI.js';
import { S as w } from './Select-Bh2jXi9V.js';
import { L as v } from './index-CATsCkTi.js';
import { I } from './index-Bn9og1vQ.js';
import './index-BfwjtmVb.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './FormGroup-DGnHhsIY.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './Block-DDntSWi2.js';
import './Select-DX7LXAK9.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-yRquFwd4.js';
import './styles-D1jYbijK.js';
import './useEnabledChatModels-Dc-yaT5f.js';
import './store-CTAK9tZ0.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './TextArea-CHeYteyg.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './useIMECompositionEvent-CkD1Q2jQ.js';
import './InputNumber-DGocrXJO.js';
import './index-GXVeGAZV.js';
import './PlusOutlined-Budj8ek_.js';
import './index-BvIL68ic.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './format-DpcrcXfF.js';
import './time-Co3YlGiT.js';
import './index-BsUJTjY1.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './index-DbyirWUA.js';
import './providerConfig-C5BYp5FR.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-BtctqgmI.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './index-DTt8RGNw.js';
import './index-Di19k3su.js';
const G =
    'Given the following conversation and a follow-up question, rephrase the follow up question to be a standalone question, in its original language. Keep as much details as possible from previous messages. Keep entity names and all.',
  P = r.memo(({ onChange: e, value: o, ...n }) => {
    const [a, i] = r.useState(o ?? 0);
    return (
      r.useEffect(() => {
        i(o ?? 0);
      }, [o]),
      t.jsx(k, {
        onBlur: () => {
          e?.(a);
        },
        onChange: (l) => {
          typeof l == 'number' && i(l);
        },
        ...n,
        value: a,
      })
    );
  });
P.displayName = 'FormSliderWithInput';
const M = r.memo(() => {
  const { t: e } = S('setting'),
    [o] = C.useForm(),
    [n, a] = r.useState(!1),
    [i, l] = c((s) => [s.updateDefaultAgent, s.isUserStateInit]),
    m = c((s) => h.currentSettings(s).defaultAgent?.config);
  if (!l) return t.jsx(b, { active: !0, paragraph: { rows: 3 }, title: !1 });
  const p = {
    children: [
      {
        children: t.jsx(U, {
          showAbility: !1,
          onChange: async ({ model: s, provider: T }) => {
            (a(!0), await i({ config: { model: s, provider: T } }), a(!1));
          },
        }),
        desc: e('defaultAgent.model.desc'),
        label: e('defaultAgent.model.title'),
        name: 'defaultAgentConfig',
      },
    ],
    extra: n && t.jsx(y, { spin: !0, icon: A, size: 16, style: { opacity: 0.5 } }),
    title: e('defaultAgent.title'),
  };
  return t.jsx(d, {
    collapsible: !1,
    form: o,
    initialValues: { defaultAgentConfig: m },
    items: [p],
    itemsType: 'group',
    variant: 'filled',
    ...j,
  });
});
M.displayName = 'DefaultAgentForm';
const f = r.memo(
    ({ systemAgentKey: e, allowDisable: o, allowCustomPrompt: n, defaultPrompt: a }) => {
      const { t: i } = S('setting'),
        [l] = C.useForm(),
        m = c(h.currentSystemAgent, F),
        [p, s] = c((g) => [g.updateSystemAgent, g.isUserStateInit]),
        [T, u] = r.useState(!1);
      if (!s) return t.jsx(b, { active: !0, paragraph: { rows: 5 }, title: !1 });
      const x = m[e],
        L = {
          children: [
            {
              children: t.jsx(U, {
                showAbility: !1,
                onChange: async (g) => {
                  (u(!0), await p(e, g), u(!1));
                },
              }),
              desc: i(`systemAgent.${e}.modelDesc`),
              label: i(`systemAgent.${e}.label`),
              name: e,
            },
            !!n && {
              children: x.customPrompt
                ? t.jsx(W, {
                    placeholder: i('systemAgent.customPrompt.placeholder'),
                    style: { minHeight: 160 },
                    value: x.customPrompt,
                    onBlur: async (g) => {
                      (u(!0), await p(e, { customPrompt: g.target.value }), u(!1));
                    },
                  })
                : t.jsx(N, {
                    block: !0,
                    icon: q,
                    onClick: async () => {
                      (u(!0), await p(e, { customPrompt: a }), u(!1));
                    },
                    children: i('systemAgent.customPrompt.addPrompt'),
                  }),
              desc: i('systemAgent.customPrompt.desc'),
              label: i('systemAgent.customPrompt.title'),
              name: [e, 'customPrompt'],
            },
          ].filter(Boolean),
          extra: t.jsxs(B, {
            direction: 'horizontal',
            gap: 8,
            children: [
              T && t.jsx(y, { spin: !0, icon: A, size: 16, style: { opacity: 0.5 } }),
              o &&
                t.jsx(_, {
                  value: x.enabled,
                  onChange: async (g) => {
                    (u(!0), await p(e, { enabled: g }), u(!1));
                  },
                }),
            ],
          }),
          title: t.jsx('span', {
            style: { opacity: typeof x.enabled == 'boolean' && !x.enabled ? 0.45 : 1 },
            children: i(`systemAgent.${e}.title`),
          }),
        };
      return t.jsx(d, {
        collapsible: !1,
        form: l,
        initialValues: m,
        items: [L],
        itemsType: 'group',
        variant: 'filled',
        ...j,
      });
    },
  ),
  E = r.memo(() => {
    const { t: e } = S('setting'),
      [o] = d.useForm(),
      [n, a] = r.useState(!1),
      i = c(h.currentImageSettings),
      [l, m] = c((s) => [s.setSettings, s.isUserStateInit]);
    if (!m) return t.jsx(b, { active: !0, paragraph: { rows: 1 }, title: !1 });
    const p = [
      {
        children: [
          {
            children: t.jsx(P, { disabled: n, max: R, min: z, step: 1 }),
            desc: e('settingImage.defaultCount.desc'),
            label: e('settingImage.defaultCount.label'),
            name: 'defaultImageNum',
          },
        ],
        extra: n ? t.jsx(y, { spin: !0, icon: A, size: 16, style: { opacity: 0.6 } }) : void 0,
        title: e('settingImage.defaultCount.title'),
      },
    ];
    return t.jsx(d, {
      collapsible: !1,
      form: o,
      initialValues: i,
      items: p,
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (s) => {
        a(!0);
        try {
          await l({ image: s });
        } finally {
          a(!1);
        }
      },
      ...j,
    });
  });
E.displayName = 'ImageSettings';
const Y = [
    { label: t.jsx(v, { Icon: I.Avatar, label: 'gpt-4o-mini-tts' }), value: 'gpt-4o-mini-tts' },
    { label: t.jsx(v, { Icon: I.Avatar, label: 'tts-1' }), value: 'tts-1' },
    { label: t.jsx(v, { Icon: I.Avatar, label: 'tts-1-hd' }), value: 'tts-1-hd' },
  ],
  $ = [{ label: t.jsx(v, { Icon: I.Avatar, label: 'whisper-1' }), value: 'whisper-1' }],
  H = [
    { label: 'OpenAI', value: 'openai' },
    { label: 'Browser', value: 'browser' },
  ],
  X = r.memo(() => {
    const { t: e } = S('setting'),
      [o] = d.useForm(),
      { tts: n } = c(h.currentSettings, F),
      [a, i] = c((s) => [s.setSettings, s.isUserStateInit]),
      [l, m] = r.useState(!1);
    if (!i) return t.jsx(b, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const p = {
      children: [
        {
          children: t.jsx(w, { options: Y }),
          label: e('settingTTS.openai.ttsModel'),
          name: ['openAI', 'ttsModel'],
        },
        {
          children: t.jsx(w, { options: $ }),
          label: e('settingTTS.openai.sttModel'),
          name: ['openAI', 'sttModel'],
        },
      ],
      extra: l && t.jsx(y, { spin: !0, icon: A, size: 16, style: { opacity: 0.5 } }),
      title: e('settingTTS.openai.title'),
    };
    return t.jsx(d, {
      collapsible: !1,
      form: o,
      initialValues: n,
      items: [p],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (s) => {
        (m(!0), await a({ tts: s }), m(!1));
      },
      ...j,
    });
  }),
  Q = r.memo(() => {
    const { t: e } = S('setting'),
      [o] = d.useForm(),
      { tts: n } = c(h.currentSettings, F),
      [a, i] = c((s) => [s.setSettings, s.isUserStateInit]),
      [l, m] = r.useState(!1);
    if (!i) return t.jsx(b, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const p = {
      children: [
        {
          children: t.jsx(w, { options: H }),
          desc: e('settingTTS.sttService.desc'),
          label: e('settingTTS.sttService.title'),
          name: 'sttServer',
        },
        {
          children: t.jsx(_, {}),
          desc: e('settingTTS.sttAutoStop.desc'),
          label: e('settingTTS.sttAutoStop.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'sttAutoStop',
          valuePropName: 'checked',
        },
      ],
      extra: l && t.jsx(y, { spin: !0, icon: A, size: 16, style: { opacity: 0.5 } }),
      title: e('settingTTS.stt'),
    };
    return t.jsx(d, {
      collapsible: !1,
      form: o,
      initialValues: n,
      items: [p],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (s) => {
        (m(!0), await a({ tts: s }), m(!1));
      },
      ...j,
    });
  }),
  me = () => {
    const { t: e } = S('setting'),
      { enableKnowledgeBase: o, enableSTT: n, showAiImage: a } = O(V);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(D, { title: e('tab.serviceModel') }),
        t.jsx(M, {}),
        t.jsx(f, { systemAgentKey: 'topic' }),
        t.jsx(f, { systemAgentKey: 'generationTopic' }),
        t.jsx(f, { systemAgentKey: 'translation' }),
        t.jsx(f, { systemAgentKey: 'historyCompress' }),
        t.jsx(f, { systemAgentKey: 'agentMeta' }),
        o &&
          t.jsx(f, {
            allowCustomPrompt: !0,
            allowDisable: !0,
            defaultPrompt: G,
            systemAgentKey: 'queryRewrite',
          }),
        n && t.jsxs(t.Fragment, { children: [t.jsx(Q, {}), t.jsx(X, {})] }),
        a && t.jsx(E, {}),
      ],
    });
  };
export { me as default };
