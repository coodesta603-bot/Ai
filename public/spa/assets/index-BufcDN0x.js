import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as x } from './SettingHeader-CfIsrQr0.js';
import {
  g as u,
  F as n,
  Z as a,
  T as j,
  aY as K,
  B as D,
  I as d,
  $ as v,
  bl as C,
} from './index-C8UyLGsD.js';
import { F as b } from './index-IVfJW6S-.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { e as r } from './ipc-wTHpVC92.js';
import { bt as z, _, ac as T, ae as E } from '../vendor/vendor-icons-BHMUH78i.js';
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
class w {
  detectTool = async (t, s = !1) => r().toolDetector.detectTool(t, s);
  detectAllTools = async (t = !1) => r().toolDetector.detectAllTools(t);
  detectCategory = async (t, s = !1) => r().toolDetector.detectCategory(t, s);
  getBestTool = async (t) => r().toolDetector.getBestTool(t);
  getToolStatus = (t) => r().toolDetector.getToolStatus(t);
  getAllToolStatus = () => r().toolDetector.getAllToolStatus();
  clearToolCache = (t) => {
    r().toolDetector.clearToolCache(t);
  };
  getRegisteredTools = () => r().toolDetector.getRegisteredTools();
  getCategories = () => r().toolDetector.getCategories();
  getToolsInCategory = (t) => r().toolDetector.getToolsInCategory(t);
}
const A = new w(),
  B = {
    'runtime-environment': {
      descKey: 'settingSystemTools.category.runtimeEnvironment.desc',
      titleKey: 'settingSystemTools.category.runtimeEnvironment',
      tools: [
        { descKey: 'settingSystemTools.tools.node.desc', name: 'node' },
        { descKey: 'settingSystemTools.tools.python.desc', name: 'python' },
        { descKey: 'settingSystemTools.tools.npm.desc', name: 'npm' },
      ],
    },
    'content-search': {
      descKey: 'settingSystemTools.category.contentSearch.desc',
      titleKey: 'settingSystemTools.category.contentSearch',
      tools: [
        { descKey: 'settingSystemTools.tools.rg.desc', name: 'rg' },
        { descKey: 'settingSystemTools.tools.ag.desc', name: 'ag' },
        { descKey: 'settingSystemTools.tools.grep.desc', name: 'grep' },
      ],
    },
    'file-search': {
      descKey: 'settingSystemTools.category.fileSearch.desc',
      titleKey: 'settingSystemTools.category.fileSearch',
      tools: [
        { descKey: 'settingSystemTools.tools.mdfind.desc', name: 'mdfind' },
        { descKey: 'settingSystemTools.tools.fd.desc', name: 'fd' },
        { descKey: 'settingSystemTools.tools.find.desc', name: 'find' },
      ],
    },
    'browser-automation': {
      descKey: 'settingSystemTools.category.browserAutomation.desc',
      titleKey: 'settingSystemTools.category.browserAutomation',
      tools: [{ descKey: 'settingSystemTools.tools.agentBrowser.desc', name: 'agent-browser' }],
    },
  },
  I = c.memo(({ status: o, isDetecting: t }) => {
    const { t: s } = u('setting');
    return t
      ? e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          children: [
            e.jsx(d, { spin: !0, icon: _, size: 16, style: { opacity: 0.5 } }),
            e.jsx(a, { type: 'secondary', children: s('settingSystemTools.detecting') }),
          ],
        })
      : o
        ? o.available
          ? e.jsxs(n, {
              align: 'flex-end',
              gap: 4,
              children: [
                e.jsxs(n, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  justify: 'flex-end',
                  children: [
                    e.jsx(d, { color: 'var(--ant-color-success)', icon: E, size: 16 }),
                    e.jsx(a, {
                      type: 'success',
                      children: s('settingSystemTools.status.available'),
                    }),
                  ],
                }),
                o.path &&
                  e.jsx(v, {
                    title: o.path,
                    children: e.jsxs(n, {
                      horizontal: !0,
                      align: 'center',
                      gap: 4,
                      justify: 'flex-end',
                      style: { maxWidth: 280 },
                      children: [
                        e.jsx(a, {
                          ellipsis: !0,
                          style: { fontSize: 12 },
                          type: 'secondary',
                          children: o.path,
                        }),
                        e.jsx(C, { content: o.path, size: 'small' }),
                      ],
                    }),
                  }),
              ],
            })
          : e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              gap: 8,
              justify: 'center',
              children: [
                e.jsx(d, { color: 'var(--ant-color-error)', icon: T, size: 16 }),
                e.jsx(a, {
                  type: 'secondary',
                  children: s('settingSystemTools.status.unavailable'),
                }),
              ],
            })
        : e.jsxs(n, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              e.jsx(d, { color: 'var(--ant-color-text-quaternary)', icon: T, size: 16 }),
              e.jsx(a, { type: 'secondary', children: s('settingSystemTools.status.notDetected') }),
            ],
          });
  }),
  F = c.memo(() => {
    const { t: o } = u('setting'),
      [t, s] = c.useState({}),
      [y, p] = c.useState(!0),
      m = c.useCallback(async (i = !1) => {
        try {
          p(!0);
          const l = await A.detectAllTools(i);
          s(l);
        } catch (l) {
          console.error('Failed to detect tools:', l);
        } finally {
          p(!1);
        }
      }, []);
    c.useEffect(() => {
      m(!0);
    }, [m]);
    const f = c.useCallback(() => {
        m(!0);
      }, [m]),
      h = Object.entries(B).map(([, i]) => ({
        children: i.tools.map((l) => {
          const g = t[l.name],
            S = e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              gap: 8,
              children: [
                e.jsx(a, { children: l.name }),
                g?.version &&
                  e.jsx(j, {
                    color: 'processing',
                    style: { marginInlineStart: 0 },
                    children: g.version,
                  }),
              ],
            });
          return {
            children: e.jsx(I, { isDetecting: y, status: g }),
            desc: o(l.descKey),
            label: S,
            minWidth: void 0,
          };
        }),
        desc: o(i.descKey),
        title: o(i.titleKey),
      }));
    return e.jsx(b, {
      collapsible: !1,
      items: h,
      itemsType: 'group',
      variant: 'filled',
      footer: e.jsxs(n, {
        horizontal: !0,
        align: 'center',
        gap: 16,
        justify: 'flex-end',
        style: { marginBlockStart: 8 },
        children: [
          e.jsx(a, { type: 'secondary', children: o('settingSystemTools.autoSelectDesc') }),
          e.jsx(D, {
            icon: e.jsx(d, { icon: z, spin: y }),
            loading: y,
            onClick: f,
            children: o('settingSystemTools.redetect'),
          }),
        ],
      }),
      ...K,
    });
  }),
  ee = () => {
    const { t: o } = u('setting');
    return e.jsxs(e.Fragment, {
      children: [e.jsx(x, { title: o('tab.systemTools') }), e.jsx(F, {})],
    });
  };
export { ee as default };
