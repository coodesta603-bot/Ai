import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as H } from './SettingHeader-CfIsrQr0.js';
import {
  g as f,
  C as F,
  F as a,
  aI as J,
  v as S,
  w as N,
  i as T,
  I as u,
  eW as q,
  k as m,
  f as D,
  j as K,
  aY as P,
  bp as Y,
  u as I,
  s as X,
  ci as Z,
  b1 as A,
  bq as _,
} from './index-C8UyLGsD.js';
import { F as w } from './FormGroup-DGnHhsIY.js';
import { M as V, m as ee } from './index-D986vWty.js';
import { S as te } from './Segmented-9Z1phQkA.js';
import { S as z } from './index-DLsdvBKx.js';
import { S as ae } from './SliderWithInput-Cf7-Qlda.js';
import { S as M } from './Select-DX7LXAK9.js';
import { S as ie } from './Switch-B27hQhTk.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { B as ne } from './providerConfig-qS2Xx-oI.js';
import { M as R } from './Markdown-Mtmmwid1.js';
import {
  _ as j,
  aV as oe,
  aW as re,
  j as se,
  cJ as L,
  bN as le,
  cK as ce,
  cL as de,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { F as W } from './index-IVfJW6S-.js';
import { B as he } from './Block-DDntSWi2.js';
import { C as G, n as y, f as Q, p } from './ColorSwatches-u52Ih7q1.js';
import { I as ge } from './ImageSelect-pUWv4YI-.js';
import { S as B } from './index-BgCNGb7v.js';
import './index-BfwjtmVb.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Snippet-B4YU4vnL.js';
import './Spotlight-D7beHiMz.js';
import './useTranslation-BcQ_3h0b.js';
import './image-nnCaCTxV.js';
import './index-YiLuNMTk.js';
import './LeftOutlined-Pp_b6_vA.js';
import './index-B2Jw6NRR.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './index-BGyEEg7z.js';
import './InputNumber-DGocrXJO.js';
import './style-Bc_3l5BM.js';
import './index-GXVeGAZV.js';
import './PlusOutlined-Budj8ek_.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './index-BvIL68ic.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-yRquFwd4.js';
import './styles-D1jYbijK.js';
import './index-Divuvd5l.js';
import './index-D5iTNnJN.js';
import './katex-BzTkCl_B.js';
import './ScrollShadow-Dm9kdU7B.js';
import './index-DWJ36R-D.js';
import './index-BBDwVZNV.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './form-CzkHLuiW.js';
import './index-Ciqn2WuZ.js';
import './ColorPicker-B5azT_mb.js';
const me = ({ fontSize: t }) => {
    const { t: i } = f('welcome');
    return e.jsx(F, {
      children: e.jsx(R, {
        fontSize: t,
        variant: 'chat',
        children: i('guide.defaultMessageWithoutCreate', { appName: ne }),
      }),
    });
  },
  v = `
### Features

**Key Highlights**
- 🌐 Multi-model: GPT-4/Gemini/Ollama
- 🖼️ Vision: \`gpt-4-vision\` integration
- 🛠️ Plugins: Function Calling & real-time data
`,
  pe = 25,
  $ = (t = 0, i = t + 10) => Math.floor(Math.random() * (i - t + 1)) + t,
  ue = d.memo(({ mode: t }) => {
    const [i, r] = d.useState(() => (t === 'none' ? v.slice(0, Math.max(0, $(10, 100))) : '')),
      h = d.useMemo(() => (t === 'none' ? Math.ceil(v.length / $(3, 5)) : 3), [t]),
      [s, g] = d.useState(!0);
    return (
      d.useEffect(() => {
        if (!s) return;
        let c = 0;
        i.length > 0 && (c = i.length);
        const o = setInterval(() => {
          if (c < v.length) {
            const b = Math.min(h, v.length - c),
              x = v.slice(0, Math.max(0, c + b));
            (r(x), (c += b));
          } else (clearInterval(o), g(!1));
        }, pe);
        return () => clearInterval(o);
      }, [s, i.length, h]),
      e.jsx(a, {
        height: 180,
        children: e.jsx(R, {
          enableStream: !0,
          animated: t === 'fadeIn',
          variant: 'chat',
          children: i,
        }),
      })
    );
  }),
  xe = `
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;
`,
  je = ({ theme: t }) =>
    e.jsx(J, { copyable: !1, language: 'ts', showLanguage: !1, theme: t, children: xe }),
  fe = `sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
`,
  be = ({ theme: t }) =>
    e.jsx(F, {
      height: 280,
      children: e.jsx(a, { width: 480, children: e.jsx(V, { theme: t, children: fe }) }),
    }),
  ye = d.memo(() => {
    const { t } = f('setting'),
      { general: i } = S(N.currentSettings, T),
      [r, h] = S((o) => [o.setSettings, o.isUserStateInit]),
      [s, g] = d.useState({});
    if (!h) return e.jsx(z, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const c = async (o, b) => {
      (g((x) => ({ ...x, [o]: !0 })),
        await r({ general: { [o]: b } }),
        g((x) => ({ ...x, [o]: !1 })));
    };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(w, {
          collapsible: !1,
          desc: t('settingChatAppearance.transitionMode.desc'),
          gap: 16,
          title: t('settingChatAppearance.transitionMode.title'),
          variant: 'filled',
          extra: e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              s.transitionMode &&
                e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
              e.jsx(te, {
                value: i.transitionMode,
                variant: 'outlined',
                options: [
                  {
                    label: t('settingChatAppearance.transitionMode.options.none.value'),
                    value: 'none',
                  },
                  {
                    label: t('settingChatAppearance.transitionMode.options.fadeIn'),
                    value: 'fadeIn',
                  },
                  {
                    label: t('settingChatAppearance.transitionMode.options.smooth'),
                    value: 'smooth',
                  },
                ],
                onChange: (o) => c('transitionMode', o),
              }),
            ],
          }),
          children: e.jsx(ue, { mode: i.transitionMode }, i.transitionMode),
        }),
        e.jsx(w, {
          active: !1,
          collapsible: !1,
          desc: t('settingChatAppearance.autoScrollOnStreaming.desc'),
          title: t('settingChatAppearance.autoScrollOnStreaming.title'),
          variant: 'filled',
          extra: e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              s.enableAutoScrollOnStreaming &&
                e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
              e.jsx(ie, {
                checked: i.enableAutoScrollOnStreaming ?? !0,
                onChange: (o) => c('enableAutoScrollOnStreaming', o),
              }),
            ],
          }),
          children: null,
        }),
        e.jsx(w, {
          collapsible: !1,
          desc: t('settingChatAppearance.fontSize.desc'),
          gap: 16,
          title: t('settingChatAppearance.fontSize.title'),
          variant: 'filled',
          extra: e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              s.fontSize && e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
              e.jsx(ae, {
                max: 18,
                min: 12,
                step: 1,
                value: i.fontSize,
                marks: {
                  12: { label: 'A', style: { fontSize: 12, marginTop: 4 } },
                  14: {
                    label: t('settingChatAppearance.fontSize.marks.normal'),
                    style: { fontSize: 14, marginTop: 4 },
                  },
                  18: { label: 'A', style: { fontSize: 18, marginTop: 4 } },
                },
                style: { width: 240 },
                onChange: (o) => c('fontSize', o),
              }),
            ],
          }),
          children: e.jsx(me, { fontSize: i.fontSize }),
        }),
        e.jsx(w, {
          collapsible: !1,
          gap: 16,
          title: t('settingChatAppearance.highlighterTheme.title'),
          variant: 'filled',
          extra: e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              s.highlighterTheme &&
                e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
              e.jsx(M, {
                value: i.highlighterTheme,
                options: q.map((o) => ({ label: o.displayName, value: o.id })),
                style: { width: 240 },
                onChange: (o) => c('highlighterTheme', o),
              }),
            ],
          }),
          children: e.jsx(je, { theme: i.highlighterTheme }, i.highlighterTheme),
        }),
        e.jsx(w, {
          gap: 16,
          title: t('settingChatAppearance.mermaidTheme.title'),
          variant: 'filled',
          extra: e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              s.mermaidTheme && e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
              e.jsx(M, {
                value: i.mermaidTheme,
                options: ee.map((o) => ({ label: o.displayName, value: o.id })),
                style: { width: 240 },
                onChange: (o) => c('mermaidTheme', o),
              }),
            ],
          }),
          children: e.jsx(be, { theme: i.mermaidTheme }, i.mermaidTheme),
        }),
      ],
    });
  }),
  n = D(({ css: t, cssVar: i }) => ({
    agent: t`
      padding: 4px;
      border-radius: 2px;
    `,
    agentActive: t`
      background: ${i.colorFillSecondary};
    `,
    bubble: t`
      padding: 6px;
      border: 1px solid color-mix(in srgb, ${i.colorBorderSecondary} 66%, transparent);
      border-radius: 3px;
      background-color: ${i.colorBgContainer};
    `,
    container: t`
      overflow: hidden;
      justify-self: flex-end;

      width: 332px;
      height: 200px;
      border: 1px solid ${i.colorBorder};
      border-radius: ${i.borderRadiusLG};

      background: ${i.colorBgLayout};
    `,
    conversation: t`
      background: ${i.colorBgContainer};
    `,
    header: t`
      border-block-end: 1px solid ${i.colorBorderSecondary};
    `,
    icon: t`
      flex: none;
      border-radius: 2px;
      background: ${i.colorFillSecondary};
    `,
    input: t`
      border-block-start: 1px solid ${i.colorBorderSecondary};
    `,
    nav: t`
      padding: 4px;
      border-inline-end: 1px solid ${i.colorBorderSecondary};
      background: ${i.colorBgLayout};
    `,
    sidebar: t`
      padding: 4px;
      border-inline-end: 1px solid ${i.colorBorderSecondary};
      background: ${i.colorBgLayout};
    `,
  })),
  C = d.memo(({ active: t, color: i }) =>
    e.jsxs(a, {
      horizontal: !0,
      align: 'center',
      className: K(n.agent, t && n.agentActive),
      gap: 4,
      width: '100%',
      children: [
        e.jsx(a, {
          className: n.icon,
          height: 12,
          style: { background: i, borderRadius: '50%' },
          width: 12,
        }),
        e.jsxs(a, {
          flex: 1,
          gap: 4,
          children: [
            e.jsx(a, {
              className: n.icon,
              height: 2,
              width: '66%',
              style: { background: m.colorTextTertiary },
            }),
            e.jsx(a, {
              className: n.icon,
              height: 2,
              width: '100%',
              style: { background: m.colorTextQuaternary },
            }),
          ],
        }),
      ],
    }),
  ),
  Se = d.memo(() => {
    const t = e.jsxs(a, {
        align: 'center',
        className: n.nav,
        gap: 8,
        width: 24,
        children: [
          e.jsx(a, {
            className: n.icon,
            height: 14,
            style: { border: `2px solid ${m.colorPrimary}`, borderRadius: '50%' },
            width: 14,
          }),
          e.jsx(a, { className: n.icon, height: 12, width: 12 }),
          e.jsx(a, { className: n.icon, height: 12, width: 12 }),
          e.jsx(a, { className: n.icon, height: 12, width: 12 }),
        ],
      }),
      i = e.jsxs(a, {
        className: n.sidebar,
        gap: 4,
        width: 72,
        children: [
          e.jsxs(a, {
            gap: 4,
            paddingInline: 2,
            style: { paddingTop: 4 },
            children: [
              e.jsx(a, { className: n.icon, height: 8, width: '50%' }),
              e.jsx(a, {
                className: n.icon,
                height: 8,
                width: '100%',
                style: { background: m.colorFillTertiary },
              }),
            ],
          }),
          e.jsx(C, {}),
          e.jsx(C, { active: !0 }),
          e.jsx(C, {}),
          e.jsx(C, {}),
        ],
      }),
      r = e.jsxs(a, {
        horizontal: !0,
        align: 'center',
        className: n.header,
        justify: 'space-between',
        padding: 4,
        children: [
          e.jsxs(a, {
            horizontal: !0,
            align: 'center',
            gap: 4,
            children: [
              e.jsx(a, {
                className: n.icon,
                height: 12,
                style: { borderRadius: '50%' },
                width: 12,
              }),
              e.jsx(a, { className: n.icon, height: 8, width: 32 }),
            ],
          }),
          e.jsxs(a, {
            horizontal: !0,
            gap: 2,
            children: [
              e.jsx(a, { className: n.icon, height: 10, width: 10 }),
              e.jsx(a, { className: n.icon, height: 10, width: 10 }),
            ],
          }),
        ],
      }),
      h = e.jsx(a, {
        align: 'flex-end',
        className: n.input,
        height: 48,
        justify: 'flex-end',
        padding: 8,
        children: e.jsx(a, {
          className: n.icon,
          height: 12,
          width: 32,
          style: { background: m.colorPrimary },
        }),
      });
    return e.jsxs(he, {
      horizontal: !0,
      shadow: !0,
      className: n.container,
      variant: 'outlined',
      children: [
        t,
        i,
        e.jsxs(a, {
          className: n.conversation,
          flex: 1,
          children: [
            r,
            e.jsxs(a, {
              align: 'flex-start',
              flex: 1,
              gap: 8,
              padding: 6,
              children: [
                e.jsxs(a, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  justify: 'flex-end',
                  width: '100%',
                  children: [
                    e.jsxs(a, {
                      className: n.bubble,
                      gap: 4,
                      width: 64,
                      children: [
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '100%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '66%',
                          style: { background: m.colorTextQuaternary },
                        }),
                      ],
                    }),
                    e.jsx(a, {
                      className: n.icon,
                      height: 14,
                      style: { borderRadius: '50%' },
                      width: 14,
                    }),
                  ],
                }),
                e.jsxs(a, {
                  horizontal: !0,
                  gap: 4,
                  children: [
                    e.jsx(a, {
                      className: n.icon,
                      height: 14,
                      style: { borderRadius: '50%' },
                      width: 14,
                    }),
                    e.jsxs(a, {
                      className: n.bubble,
                      gap: 4,
                      width: 160,
                      children: [
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '100%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '66%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '100%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '100%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '33%',
                          style: { background: m.colorTextQuaternary },
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(a, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  justify: 'flex-end',
                  width: '100%',
                  children: [
                    e.jsxs(a, {
                      className: n.bubble,
                      gap: 4,
                      width: 100,
                      children: [
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '100%',
                          style: { background: m.colorTextQuaternary },
                        }),
                        e.jsx(a, {
                          className: n.icon,
                          height: 2,
                          width: '66%',
                          style: { background: m.colorTextQuaternary },
                        }),
                      ],
                    }),
                    e.jsx(a, {
                      className: n.icon,
                      height: 14,
                      style: { borderRadius: '50%' },
                      width: 14,
                    }),
                  ],
                }),
              ],
            }),
            h,
          ],
        }),
      ],
    });
  }),
  we = d.memo(({ value: t, onChange: i }) => {
    const { t: r } = f('color'),
      h = (s) => {
        const g = Q('neutral', s);
        i?.(g || '');
      };
    return e.jsx(G, {
      value: t ? y[t] : void 0,
      colors: [
        { color: 'rgba(0, 0, 0, 0)', title: r('default') },
        { color: y.mauve, title: r('mauve') },
        { color: y.olive, title: r('olive') },
        { color: y.sage, title: r('sage') },
        { color: y.sand, title: r('sand') },
        { color: y.slate, title: r('slate') },
      ],
      onChange: h,
    });
  }),
  ve = d.memo(({ onChange: t, value: i }) => {
    const { t: r } = f('color'),
      h = (s) => {
        const g = Q('primary', s);
        t?.(g || '');
      };
    return e.jsx(G, {
      value: i ? p[i] : void 0,
      colors: [
        { color: 'rgba(0, 0, 0, 0)', title: r('default') },
        { color: p.red, title: r('red') },
        { color: p.orange, title: r('orange') },
        { color: p.gold, title: r('gold') },
        { color: p.yellow, title: r('yellow') },
        { color: p.lime, title: r('lime') },
        { color: p.green, title: r('green') },
        { color: p.cyan, title: r('cyan') },
        { color: p.blue, title: r('blue') },
        { color: p.geekblue, title: r('geekblue') },
        { color: p.purple, title: r('purple') },
        { color: p.magenta, title: r('magenta') },
        { color: p.volcano, title: r('volcano') },
      ],
      onChange: h,
    });
  }),
  Ce = d.memo(() => {
    const { t } = f('setting'),
      { general: i } = S(N.currentSettings, T),
      [r, h] = S((o) => [o.setSettings, o.isUserStateInit]),
      [s, g] = d.useState(!1);
    if (!h) return e.jsx(z, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const c = {
      children: [
        { children: e.jsx(Se, {}), label: t('settingAppearance.preview.title'), minWidth: void 0 },
        {
          children: e.jsx(ve, {}),
          desc: t('settingAppearance.primaryColor.desc'),
          label: t('settingAppearance.primaryColor.title'),
          minWidth: void 0,
          name: 'primaryColor',
        },
        {
          children: e.jsx(we, {}),
          desc: t('settingAppearance.neutralColor.desc'),
          label: t('settingAppearance.neutralColor.title'),
          minWidth: void 0,
          name: 'neutralColor',
        },
      ],
      extra: s && e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
      title: t('settingAppearance.title'),
    };
    return e.jsx(W, {
      collapsible: !1,
      initialValues: i,
      items: [c],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (o) => {
        (g(!0), await r({ general: o }), g(!1));
      },
      ...P,
    });
  }),
  Me = d.memo(() => {
    const { t } = f('setting'),
      i = S((l) => N.currentSettings(l).general, T),
      { theme: r, setTheme: h } = Y(),
      s = I(X.language),
      [g, c] = S((l) => [l.setSettings, l.isUserStateInit]),
      [o, b] = I((l) => [l.switchLocale, l.isStatusInit]),
      [x, k] = d.useState(!1),
      O = r || 'system',
      U = (l) => {
        o(l);
      };
    if (!(b && c)) return e.jsx(z, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const E = {
      children: [
        {
          children: e.jsx(ge, {
            height: 60,
            unoptimized: Z,
            value: O,
            width: 100,
            options: [
              {
                icon: oe,
                img: A('theme_light.webp'),
                label: t('settingCommon.themeMode.light'),
                value: 'light',
              },
              {
                icon: re,
                img: A('theme_dark.webp'),
                label: t('settingCommon.themeMode.dark'),
                value: 'dark',
              },
              {
                icon: se,
                img: A('theme_auto.webp'),
                label: t('settingCommon.themeMode.auto'),
                value: 'system',
              },
            ],
            onChange: (l) => h(l === 'auto' ? 'system' : l),
          }),
          label: t('settingCommon.themeMode.title'),
          minWidth: void 0,
        },
        {
          children: e.jsx(a, {
            horizontal: !0,
            justify: 'flex-end',
            children: e.jsx(M, {
              defaultValue: s,
              options: [{ label: t('settingCommon.lang.autoMode'), value: 'auto' }, ..._],
              style: { width: '50%' },
              onChange: U,
            }),
          }),
          label: t('settingCommon.lang.title'),
        },
        {
          children: e.jsx(B, {
            options: [
              {
                icon: e.jsx(u, { icon: L, size: 16 }),
                label: t('settingAppearance.animationMode.disabled'),
                value: 'disabled',
              },
              {
                icon: e.jsx(u, { icon: le, size: 16 }),
                label: t('settingAppearance.animationMode.agile'),
                value: 'agile',
              },
              {
                icon: e.jsx(u, { icon: ce, size: 16 }),
                label: t('settingAppearance.animationMode.elegant'),
                value: 'elegant',
              },
            ],
          }),
          desc: t('settingAppearance.animationMode.desc'),
          label: t('settingAppearance.animationMode.title'),
          minWidth: void 0,
          name: 'animationMode',
        },
        {
          children: e.jsx(B, {
            options: [
              {
                icon: e.jsx(u, { icon: L, size: 16 }),
                label: t('settingAppearance.contextMenuMode.disabled'),
                value: 'disabled',
              },
              {
                icon: e.jsx(u, { icon: de, size: 16 }),
                label: t('settingAppearance.contextMenuMode.default'),
                value: 'default',
              },
            ],
          }),
          desc: t('settingAppearance.contextMenuMode.desc'),
          label: t('settingAppearance.contextMenuMode.title'),
          minWidth: void 0,
          name: 'contextMenuMode',
        },
        {
          children: e.jsx(a, {
            horizontal: !0,
            justify: 'flex-end',
            children: e.jsx(M, {
              allowClear: !0,
              options: _,
              placeholder: t('settingCommon.responseLanguage.placeholder'),
              value: i?.responseLanguage || void 0,
              style: { width: '50%' },
              onChange: (l) => {
                g({ general: { responseLanguage: l ?? '' } });
              },
            }),
          }),
          desc: t('settingCommon.responseLanguage.desc'),
          label: t('settingCommon.responseLanguage.title'),
        },
      ],
      extra: x && e.jsx(u, { spin: !0, icon: j, size: 16, style: { opacity: 0.5 } }),
      title: t('settingCommon.title'),
    };
    return e.jsx(W, {
      collapsible: !1,
      initialValues: i,
      items: [E],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (l) => {
        (k(!0), await g({ general: l }), k(!1));
      },
      ...P,
    });
  }),
  Tt = () => {
    const { t } = f('setting');
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(H, { title: t('tab.appearance') }),
        e.jsx(Me, {}),
        e.jsx(Ce, {}),
        e.jsx(ye, {}),
      ],
    });
  };
export { Tt as default };
