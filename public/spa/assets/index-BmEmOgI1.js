import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as o, v as s, w, i as y, aY as I, f as k, I as M } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { F as _ } from './index-IVfJW6S-.js';
import { S as L } from './index-DLsdvBKx.js';
import { S as E } from './Select-DX7LXAK9.js';
import { S as l } from './Switch-B27hQhTk.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as F } from './SettingHeader-CfIsrQr0.js';
import { a as P } from './autoUpdate-BG2otmas.js';
import { p as U } from './preference-wHTmoINM.js';
import { l as R } from './labPrefer-CDVnX5o7.js';
import { _ as T } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './FormGroup-DGnHhsIY.js';
import './index-BfwjtmVb.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './Block-DDntSWi2.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-yRquFwd4.js';
import './styles-D1jYbijK.js';
import './ipc-wTHpVC92.js';
const G = k(({ css: t }) => ({
    labItem: t`
    .ant-form-item-row {
      align-items: center !important;
    }
  `,
  })),
  ue = n.memo(() => {
    const { t } = o('setting'),
      { t: r } = o('labs'),
      c = s((e) => w.currentSettings(e).general, y),
      [d, m] = s((e) => [e.setSettings, e.isUserStateInit]),
      [p, i] = n.useState(!1),
      [u, f, h] = s((e) => [U.isPreferenceInit(e), R.enableInputMarkdown(e), e.updateLab]),
      [b, g] = n.useState('stable');
    n.useEffect(() => {}, []);
    const v = n.useCallback((e) => {
      (g(e), P.setUpdateChannel(e));
    }, []);
    if (!m) return a.jsx(L, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const S = {
        children: [
          {
            children: a.jsx(l, {}),
            desc: t('settingCommon.devMode.desc'),
            label: t('settingCommon.devMode.title'),
            minWidth: void 0,
            name: 'isDevMode',
            valuePropName: 'checked',
          },
        ],
        extra: p && a.jsx(M, { spin: !0, icon: T, size: 16, style: { opacity: 0.5 } }),
        title: t('tab.advanced'),
      },
      C = [
        { label: t('tab.advanced.updateChannel.stable'), value: 'stable' },
        { label: t('tab.advanced.updateChannel.nightly'), value: 'nightly' },
        { label: t('tab.advanced.updateChannel.canary'), value: 'canary' },
      ];
    (E,
      t('tab.advanced.updateChannel.desc'),
      t('tab.advanced.updateChannel.title'),
      t('tab.advanced.updateChannel.title'));
    const x = {
        children: [
          {
            avatar: a.jsx('img', {
              alt: r('features.inputMarkdown.title'),
              src: 'https://github.com/user-attachments/assets/0527a966-3d95-46b4-b880-c0f3fca18f02',
              style: {
                borderRadius: 8,
                height: 72,
                marginRight: 12,
                objectFit: 'cover',
                width: 120,
              },
            }),
            children: a.jsx(l, {
              checked: f,
              loading: !u,
              onChange: (e) => h({ enableInputMarkdown: e }),
            }),
            className: G.labItem,
            desc: r('features.inputMarkdown.desc'),
            label: r('features.inputMarkdown.title'),
            minWidth: void 0,
          },
        ],
        title: r('title'),
      },
      j = [S, x];
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(F, { title: t('tab.advanced') }),
        a.jsx(_, {
          collapsible: !1,
          initialValues: c,
          items: j,
          itemsType: 'group',
          variant: 'filled',
          onValuesChange: async (e) => {
            (i(!0), await d({ general: e }), i(!1));
          },
          ...I,
        }),
      ],
    });
  });
export { ue as default };
