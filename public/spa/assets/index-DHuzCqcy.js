import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as k,
  v as n,
  w as S,
  i as x,
  Y as j,
  ch as b,
  aY as v,
  I as E,
  ci as F,
} from './index-C8UyLGsD.js';
import { S as V } from './SettingHeader-CfIsrQr0.js';
import { F as l } from './index-IVfJW6S-.js';
import { H } from './HotkeyInput-ktORxXu8.js';
import { S as I } from './index-DLsdvBKx.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { h as C } from '../i18n/i18n-default-DIp7iNMG.js';
import { _ as w } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './index-BfwjtmVb.js';
import './FormGroup-DGnHhsIY.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './hotkey-ii61g0AV.js';
import './index-BJ9KbyB2.js';
import './Block-DDntSWi2.js';
const T = c.memo(() => {
    const { t: e } = k(['setting', 'hotkey']),
      [a] = l.useForm(),
      { hotkey: r } = n(S.currentSettings, x),
      [i, p] = n((t) => [t.setSettings, t.isUserStateInit]),
      [d, o] = c.useState(!1);
    if (!p) return s.jsx(I, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const u = async (t) => {
        if (r[t]) {
          (o(!0), a.setFieldValue(t, ''));
          try {
            await i({ hotkey: { [t]: '' } });
          } finally {
            o(!1);
          }
        }
      },
      y = (t) => {
        const m = Object.entries(r)
          .map(([h, g]) => (h === t.id ? !1 : g))
          .filter(Boolean);
        return {
          children: s.jsx(H, {
            allowClear: !t.nonEditable,
            disabled: t.nonEditable,
            hotkeyConflicts: m,
            placeholder: e('hotkey.record'),
            resetValue: t.keys,
            texts: { clear: e('hotkey.clearBinding') },
            onClear: () => {
              u(t.id);
            },
          }),
          desc: C[`${t.id}.desc`] ? e(`${t.id}.desc`, { ns: 'hotkey' }) : void 0,
          label: e(`${t.id}.title`, { ns: 'hotkey' }),
          name: t.id,
        };
      },
      f = {
        children: j.filter((t) => t.group === b.Conversation).map((t) => y(t)),
        extra: d && s.jsx(E, { spin: !0, icon: w, size: 16, style: { opacity: 0.5 } }),
        title: e('hotkey.group.conversation'),
      };
    return s.jsx(l, {
      collapsible: !1,
      form: a,
      initialValues: r,
      items: [f],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (t) => {
        o(!0);
        try {
          await i({ hotkey: t });
        } finally {
          o(!1);
        }
      },
      ...v,
    });
  }),
  _ = c.memo(() => {
    const { t: e } = k(['setting', 'hotkey']),
      [a] = l.useForm(),
      { hotkey: r } = n(S.currentSettings, x),
      [i, p] = n((t) => [t.setSettings, t.isUserStateInit]),
      [d, o] = c.useState(!1);
    if (!p) return s.jsx(I, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const u = async (t) => {
        if (r[t]) {
          (o(!0), a.setFieldValue(t, ''));
          try {
            await i({ hotkey: { [t]: '' } });
          } finally {
            o(!1);
          }
        }
      },
      y = (t) => {
        const m = Object.entries(r)
          .map(([h, g]) => (h === t.id ? !1 : g))
          .filter(Boolean);
        return {
          children: s.jsx(H, {
            allowClear: !t.nonEditable,
            disabled: t.nonEditable,
            hotkeyConflicts: m,
            placeholder: e('hotkey.record'),
            resetValue: t.keys,
            texts: { clear: e('hotkey.clearBinding') },
            onClear: () => {
              u(t.id);
            },
          }),
          desc: C[`${t.id}.desc`] ? e(`${t.id}.desc`, { ns: 'hotkey' }) : void 0,
          label: e(`${t.id}.title`, { ns: 'hotkey' }),
          name: t.id,
        };
      },
      f = {
        children: j.filter((t) => t.group === b.Essential).map((t) => y(t)),
        extra: d && s.jsx(E, { spin: !0, icon: w, size: 16, style: { opacity: 0.5 } }),
        title: e('hotkey.group.essential'),
      };
    return s.jsx(l, {
      collapsible: !1,
      form: a,
      initialValues: r,
      items: [f],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (t) => {
        o(!0);
        try {
          await i({ hotkey: t });
        } finally {
          o(!1);
        }
      },
      ...v,
    });
  }),
  ot = () => {
    const { t: e } = k('setting');
    return s.jsxs(s.Fragment, {
      children: [s.jsx(V, { title: e('tab.hotkey') }), F, s.jsx(_, {}), s.jsx(T, {})],
    });
  };
export { ot as default };
