import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as u } from './SettingHeader-CfIsrQr0.js';
import { g as n, v as s, w as y, i as g, aY as S, I as h } from './index-C8UyLGsD.js';
import { F as a } from './index-IVfJW6S-.js';
import { S as x } from './index-DLsdvBKx.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { L as v } from './LevelSlider-Chbv3HA0.js';
import { S as j } from './index-CaOmqfDS.js';
import { _ as E } from '../vendor/vendor-icons-BHMUH78i.js';
import './index-BfwjtmVb.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './FormGroup-DGnHhsIY.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './Block-DDntSWi2.js';
import './index-BvIL68ic.js';
const b = ['low', 'medium', 'high'],
  w = l.memo(() => {
    const { t: e } = n('setting'),
      [f] = a.useForm(),
      { memory: i } = s(y.currentSettings, g),
      [m, p] = s((r) => [r.setSettings, r.isUserStateInit]),
      [c, o] = l.useState(!1);
    if (!p) return t.jsx(x, { active: !0, paragraph: { rows: 3 }, title: !1 });
    const d = {
      children: [
        {
          children: t.jsx(j, {}),
          desc: e('memory.enabled.desc'),
          label: e('memory.enabled.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'enabled',
          valuePropName: 'checked',
        },
        {
          children: t.jsx(v, {
            defaultValue: 'medium',
            levels: b,
            style: { minWidth: 160 },
            value: i?.effort ?? 'medium',
            marks: {
              0: e('memory.effort.level.low'),
              1: e('memory.effort.level.medium'),
              2: e('memory.effort.level.high'),
            },
            onChange: async (r) => {
              (o(!0), await m({ memory: { effort: r } }), o(!1));
            },
          }),
          desc: e('memory.effort.desc'),
          label: e('memory.effort.title'),
          layout: 'horizontal',
          minWidth: void 0,
        },
      ],
      extra: c && t.jsx(h, { spin: !0, icon: E, size: 16, style: { opacity: 0.5 } }),
      title: e('memory.title'),
    };
    return t.jsx(a, {
      collapsible: !1,
      form: f,
      initialValues: i,
      items: [d],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (r) => {
        (o(!0), await m({ memory: r }), o(!1));
      },
      ...S,
    });
  }),
  J = () => {
    const { t: e } = n('setting');
    return t.jsxs(t.Fragment, { children: [t.jsx(u, { title: e('tab.memory') }), t.jsx(w, {})] });
  };
export { J as default };
