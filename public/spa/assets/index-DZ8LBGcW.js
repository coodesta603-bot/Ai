import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  a_ as B,
  a1 as E,
  g,
  ax as T,
  X as f,
  bD as I,
  v as l,
  w as N,
  i as M,
  dc as P,
  B as n,
  I as c,
  aY as Y,
  an as G,
  F as p,
} from './index-C8UyLGsD.js';
import { F as L } from './FormGroup-DGnHhsIY.js';
import { S as W } from './index-DLsdvBKx.js';
import { S as z } from './SettingHeader-CfIsrQr0.js';
import { B as h } from './providerConfig-qS2Xx-oI.js';
import { F as d } from './index-IVfJW6S-.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as H } from './index-BxOnjIdc.js';
import { d as O } from './downloadFile-DYbfnmZ_.js';
import { e as R } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import { u as U, g as V } from './index-Br6hqyew.js';
import { u as $ } from './store-8fdqmFXe.js';
import { u as q } from './index-7WkVJNSh.js';
import { S as J } from './index-CaOmqfDS.js';
import { b_ as X, b$ as K } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Block-DDntSWi2.js';
import './index-BfwjtmVb.js';
import './index-5nC5GwBn.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './Modal-Dd2pIxVd.js';
import './Drawer-Blxnywp3.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './Alert-lszDImnb.js';
import './AccordionItem-BUupnbbL.js';
import './index-BaHZowoE.js';
import './index-B4Zarq8E.js';
import './base-AbuBx_QK.js';
import './index-CLKC7l7t.js';
import './Trans-B9Jc6Abr.js';
import './format-DpcrcXfF.js';
import './progress-CqsUaYIW.js';
import './Table-BlWKciej.js';
import './index-BOZ0hr8D.js';
import './useBubbleLock-D8efMGR_.js';
import './index-BHffy9NV.js';
import './LeftOutlined-Pp_b6_vA.js';
import './Dropdown-CemyFDx1.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './index-B0kjmwCf.js';
import './scrollTo-DrqiKkdE.js';
import './Pagination-Cg0T9GpR.js';
import './index-Bc7JilPY.js';
import './index-C2-gySBL.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-BrqBWuO3.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './clientModelRuntime-ByjgYOys.js';
import './index-F5T1V14Z.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-sIxU1rKL.js';
import './store-CTAK9tZ0.js';
import './selectors-BgvhR9tA.js';
import './tools-grZ3gd_F.js';
import './ipc-wTHpVC92.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './index-BrpHwoCT.js';
import './abortableRequest-CqTkNl3n.js';
import './store-Cj3bQrT7.js';
import './browser-Cc4eeHpk.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DltpMSoH.js';
function Q() {
  return null;
}
class Z {
  exportData = async () => await B.exporter.exportData.mutate();
}
const tt = new Z();
class et {
  exportAll = async () => {
    const { data: a, url: o, schemaHash: i } = await tt.exportData(),
      s = `${E().format('YYYY-MM-DD-hh-mm')}_${h}-data.json`;
    if (o) {
      await O(o, s);
      return;
    }
    R({ data: a, mode: 'postgres', schemaHash: i }, s);
  };
}
const rt = new et(),
  ot = () => {
    const { t } = g('setting'),
      [a] = d.useForm(),
      { message: o, modal: i } = T.useApp(),
      s = f(I.enableBusinessFeatures),
      [m, x] = q((r) => [r.clearSessions, r.clearSessionGroups]),
      [S, v] = U((r) => [r.removeAllTopics, r.clearAllMessages]),
      [y] = $((r) => [r.removeAllFiles]),
      j = V((r) => r.removeAllPlugins),
      F = l(N.currentSettings, M),
      [b, A] = l((r) => [r.setSettings, r.resetSettings]),
      w = u.useCallback(() => {
        i.confirm({
          centered: !0,
          okButtonProps: { danger: !0 },
          onOk: async () => {
            (await m(),
              await j(),
              await S(),
              await y(),
              await v(),
              await x(),
              o.success(t('danger.clear.success')));
          },
          title: t('danger.clear.confirm'),
        });
      }, []),
      C = u.useCallback(() => {
        i.confirm({
          centered: !0,
          okButtonProps: { danger: !0 },
          onOk: () => {
            (A(), a.setFieldsValue(P), o.success(t('danger.reset.success')));
          },
          title: t('danger.reset.confirm'),
        });
      }, []),
      D = {
        children: [
          {
            children: e.jsx(J, {}),
            desc: t('analytics.telemetry.desc', { appName: h }),
            label: t('analytics.telemetry.title'),
            minWidth: void 0,
            name: ['general', 'telemetry'],
            valuePropName: 'checked',
          },
        ],
        title: t('analytics.title'),
      },
      _ = () => ({
        children: e.jsx(n, {
          icon: e.jsx(c, { icon: K }),
          onClick: () => {
            rt.exportAll();
          },
          children: t('storage.actions.export.button'),
        }),
        label: t('storage.actions.export.title'),
        layout: 'horizontal',
        minWidth: void 0,
      }),
      k = {
        children: [
          {
            children: e.jsx(H, {
              children: e.jsx(n, {
                icon: e.jsx(c, { icon: X }),
                children: t('storage.actions.import.button'),
              }),
            }),
            label: t('storage.actions.import.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
          ...(s ? [_()] : []),
          {
            children: e.jsx(n, {
              danger: !0,
              type: 'primary',
              onClick: w,
              children: t('danger.clear.action'),
            }),
            desc: t('danger.clear.desc'),
            label: t('danger.clear.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
          {
            children: e.jsx(n, {
              danger: !0,
              type: 'primary',
              onClick: C,
              children: t('danger.reset.action'),
            }),
            desc: t('danger.reset.desc'),
            label: t('danger.reset.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
        ],
        title: t('storage.actions.title'),
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(d, {
          collapsible: !1,
          form: a,
          initialValues: F,
          items: [D, k],
          itemsType: 'group',
          variant: 'filled',
          onValuesChange: b,
          ...Y,
        }),
        s && e.jsx(Q, {}),
      ],
    });
  },
  Te = () => {
    const { t } = g('setting'),
      a = f((s) => s.serverConfigInit),
      o = l(G.isLoaded),
      i = !a || !o;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(z, { title: t('tab.storage') }),
        e.jsx(p, {
          style: { display: i ? 'flex' : 'none' },
          children: e.jsx(L, {
            collapsible: !1,
            title: t('storage.actions.title'),
            variant: 'filled',
            children: e.jsx(W, { active: !0, paragraph: { rows: 4 } }),
          }),
        }),
        e.jsx(p, { style: { display: i ? 'none' : 'flex' }, children: e.jsx(ot, {}) }),
      ],
    });
  };
export { Te as default };
