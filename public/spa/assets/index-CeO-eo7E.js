import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as M } from './SettingHeader-CfIsrQr0.js';
import { g as z, F as l, aG as j, aY as N, I as x } from './index-C8UyLGsD.js';
import { A as T } from './Alert-lszDImnb.js';
import { F } from './index-IVfJW6S-.js';
import { S as O } from './index-DLsdvBKx.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as Y, d as K } from './store-CMvu1t2Y.js';
import { F as k } from './index-5nC5GwBn.js';
import { S as R } from './index-CaOmqfDS.js';
import { R as m } from './index-B0kjmwCf.js';
import { I as c } from './index-OkOG2AHU.js';
import { S as J } from './index-CqaQ90GQ.js';
import { _ as h } from '../vendor/vendor-icons-BHMUH78i.js';
import './index-BfwjtmVb.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './AccordionItem-BUupnbbL.js';
import './Block-DDntSWi2.js';
import './index-BaHZowoE.js';
import './FormGroup-DGnHhsIY.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './ipc-wTHpVC92.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './useBubbleLock-D8efMGR_.js';
import './index-RoMbEimC.js';
import './Input-BIU8BRU1.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
const Q = () => {
    const { t } = z('electron'),
      [s] = F.useForm(),
      [y, _] = o.useState('https://www.google.com'),
      [G, S] = o.useState(!1),
      [v, b] = o.useState(!1),
      [p, i] = o.useState(null),
      [g, d] = o.useState(!1),
      [u, P] = o.useState(!1),
      n = k.useWatch('enableProxy', s),
      U = k.useWatch('proxyRequireAuth', s),
      [w, E] = Y((r) => [r.setProxySettings, r.useGetProxySettings]),
      { data: a, isLoading: W } = E();
    o.useEffect(() => {
      a && (s.setFieldsValue(a), d(!1));
    }, [s, a]);
    const B = o.useCallback(() => {
        (P(!0), d(!0), i(null), P(!1));
      }, []),
      I = o.useCallback(async () => {
        try {
          b(!0);
          const r = await s.validateFields();
          (await w(r), d(!1));
        } catch {
        } finally {
          b(!1);
        }
      }, [s, w]),
      q = o.useCallback(() => {
        a && (s.setFieldsValue(a), d(!1), i(null));
      }, [s, a]),
      A = o.useCallback(async () => {
        try {
          (S(!0), i(null));
          const r = await s.validateFields(),
            C = { ...a, ...r },
            f = await K.testProxyConfig(C, y);
          i(f);
        } catch (r) {
          const f = { message: r instanceof Error ? r.message : 'Unknown error', success: !1 };
          i(f);
        } finally {
          S(!1);
        }
      }, [a, y, s]);
    if (W) return e.jsx(O, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const V = {
        children: [
          {
            children: e.jsx(R, {}),
            desc: t('proxy.enableDesc'),
            label: t('proxy.enable'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'enableProxy',
            valuePropName: 'checked',
          },
        ],
        extra: u && e.jsx(x, { spin: !0, icon: h, size: 16, style: { opacity: 0.5 } }),
        title: t('proxy.enable'),
      },
      H = {
        children: [
          {
            children: e.jsxs(m.Group, {
              disabled: !n,
              children: [
                e.jsx(m, { value: 'http', children: 'HTTP' }),
                e.jsx(m, { value: 'https', children: 'HTTPS' }),
                e.jsx(m, { value: 'socks5', children: 'SOCKS5' }),
              ],
            }),
            label: t('proxy.type'),
            minWidth: void 0,
            name: 'proxyType',
          },
          {
            children: e.jsx(c, { disabled: !n, placeholder: '127.0.0.1' }),
            desc: t('proxy.validation.serverRequired'),
            label: t('proxy.server'),
            name: 'proxyServer',
          },
          {
            children: e.jsx(c, { disabled: !n, placeholder: '7890', style: { width: 120 } }),
            desc: t('proxy.validation.portRequired'),
            label: t('proxy.port'),
            name: 'proxyPort',
          },
        ],
        extra: u && e.jsx(x, { spin: !0, icon: h, size: 16, style: { opacity: 0.5 } }),
        title: t('proxy.basicSettings'),
      },
      L = {
        children: [
          {
            children: e.jsx(R, { disabled: !n }),
            desc: t('proxy.authDesc'),
            label: t('proxy.auth'),
            layout: 'horizontal',
            minWidth: void 0,
            name: 'proxyRequireAuth',
            valuePropName: 'checked',
          },
          ...(U && n
            ? [
                {
                  children: e.jsx(c, { placeholder: t('proxy.username_placeholder') }),
                  label: t('proxy.username'),
                  name: 'proxyUsername',
                },
                {
                  children: e.jsx(c.Password, { placeholder: t('proxy.password_placeholder') }),
                  label: t('proxy.password'),
                  name: 'proxyPassword',
                },
              ]
            : []),
        ],
        extra: u && e.jsx(x, { spin: !0, icon: h, size: 16, style: { opacity: 0.5 } }),
        title: t('proxy.authSettings'),
      },
      D = {
        children: [
          {
            children: e.jsxs(l, {
              gap: 8,
              children: [
                e.jsxs(J.Compact, {
                  style: { width: '100%' },
                  children: [
                    e.jsx(c, {
                      placeholder: t('proxy.testUrlPlaceholder'),
                      style: { flex: 1 },
                      value: y,
                      onChange: (r) => _(r.target.value),
                    }),
                    e.jsx(j, {
                      loading: G,
                      type: 'default',
                      onClick: A,
                      children: t('proxy.testButton'),
                    }),
                  ],
                }),
                p
                  ? p.success
                    ? e.jsx(T, {
                        closable: !0,
                        type: 'success',
                        title: e.jsx(l, {
                          horizontal: !0,
                          align: 'center',
                          gap: 8,
                          children: t('proxy.testSuccessWithTime', { time: p.responseTime }),
                        }),
                      })
                    : e.jsx(T, {
                        closable: !0,
                        type: 'error',
                        variant: 'outlined',
                        title: e.jsxs(l, {
                          horizontal: !0,
                          align: 'center',
                          gap: 8,
                          children: [t('proxy.testFailed'), ': ', p.message],
                        }),
                      })
                  : null,
              ],
            }),
            desc: t('proxy.testDescription'),
            label: t('proxy.testUrl'),
            minWidth: void 0,
          },
        ],
        extra: u && e.jsx(x, { spin: !0, icon: h, size: 16, style: { opacity: 0.5 } }),
        title: t('proxy.connectionTest'),
      };
    return e.jsxs(l, {
      gap: 24,
      children: [
        e.jsx(F, {
          collapsible: !1,
          form: s,
          initialValues: a,
          items: [V, H, L, D],
          itemsType: 'group',
          variant: 'filled',
          onValuesChange: B,
          ...N,
        }),
        e.jsxs(l, {
          align: 'end',
          justify: 'flex-end',
          children: [
            g &&
              e.jsx('span', {
                style: { color: 'var(--ant-color-warning)', marginBottom: 8 },
                children: t('proxy.unsavedChanges'),
              }),
            e.jsxs(l, {
              horizontal: !0,
              gap: 8,
              children: [
                e.jsx(j, {
                  disabled: !g,
                  loading: v,
                  type: 'primary',
                  onClick: I,
                  children: t('proxy.saveButton'),
                }),
                e.jsx(j, { disabled: !g || v, onClick: q, children: t('proxy.resetButton') }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ge = () => {
    const { t } = z('setting');
    return e.jsxs(e.Fragment, { children: [e.jsx(M, { title: t('tab.proxy') }), e.jsx(Q, {})] });
  };
export { Ge as default };
