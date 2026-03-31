import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  bh as ke,
  g as $,
  f1 as ee,
  aG as R,
  aC as Se,
  F as B,
  f as L,
  T as de,
  aD as Ie,
  ax as pe,
  M as O,
  f2 as f,
  aw as Te,
  I as H,
  j as Ce,
  ao as Fe,
  bn as Be,
} from './index-C8UyLGsD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { N as Pe } from './index-0kThxxSh.js';
import { F as $e } from './FormGroup-DGnHhsIY.js';
import { a as ne, F as Ae } from './index-IVfJW6S-.js';
import { F as X } from './FormInput-Rmn91oHG.js';
import { F as ue } from './FormPassword-DXUZnBof.js';
import {
  cM as ze,
  bt as me,
  cN as Re,
  bs as he,
  c0 as _e,
  aw as Ee,
  bz as Oe,
  bF as Ne,
  cl as Qe,
  cm as Le,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { T as re } from './index-DE9LlaC5.js';
import { I as We } from './InfoCircleOutlined-BWYuV3b3.js';
import { S as Me } from './index-Bc7JilPY.js';
import { Q as Ue } from './index-CEZs5FSq.js';
import { A as qe } from './index-BaHZowoE.js';
import { P as Ge } from './index-ChoXdYII.js';
import { F as oe } from './index-5nC5GwBn.js';
import { T as He } from './index-GXVeGAZV.js';
import { S as xe } from './index-CaOmqfDS.js';
import { A as K } from './Alert-lszDImnb.js';
import { u as De } from './useAppOrigin-DDAfPwvo.js';
import { T as Je } from './Trans-B9Jc6Abr.js';
import { I as Ke } from './index-CiEczFY0.js';
import { g as ge } from './const-ZzMW1ken.js';
import { e as Ye } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import './providerConfig-qS2Xx-oI.js';
import { D as Xe } from './index-BHffy9NV.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './ToggleLeftPanelButton-MPNqlyqh.js';
import './index-BfwjtmVb.js';
import './useTranslation-BcQ_3h0b.js';
import './form-CzkHLuiW.js';
import './Input-C_EgL0SG.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './useIMECompositionEvent-CkD1Q2jQ.js';
import './InputPassword-B5L4g8CK.js';
import './index-BSuyBMRZ.js';
import './ReloadOutlined-Cfln6sz3.js';
import './index-bx4f06U_.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './PlusOutlined-Budj8ek_.js';
import './AccordionItem-BUupnbbL.js';
import './Block-DDntSWi2.js';
import './store-CMvu1t2Y.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './ipc-wTHpVC92.js';
import './sync-Dxmxhr-a.js';
import './index-C5BaNDGi.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
import './TreeDownRightIcon-DyFfHOgF.js';
import './GlobeOffIcon-BUmEgpxe.js';
import './GroupBotSquareIcon-CiIKzQrp.js';
import './McpIcon-Cnqa4sOi.js';
import './ProviderIcon-Dg9rvCHb.js';
import './ShapesUploadIcon-fZxHkYIW.js';
import './SkillsIcon-DjXX_Ijx.js';
import './index-ePfB_e6x.js';
import './index-DqcYNTWN.js';
import './LeftOutlined-Pp_b6_vA.js';
import './Dropdown-CemyFDx1.js';
import './index-DeBHMb7c.js';
import './EllipsisOutlined-CBl0XyWx.js';
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var n = arguments[o];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          }
          return e;
        }),
    te.apply(this, arguments)
  );
}
const Ze = (e, o) => a.createElement(ke, te({}, e, { ref: o, icon: We })),
  Ve = a.forwardRef(Ze),
  Z = 2e3,
  be = a.memo(
    ({ buttonLabel: e, buttonType: o = 'primary', onAuthenticated: n, showTips: s = !0 }) => {
      const { t: r } = $('agent'),
        [d, i] = a.useState(!1),
        [c, h] = a.useState(),
        [p, y] = a.useState(''),
        [j, T] = a.useState(),
        [l, g] = a.useState(!1),
        x = a.useRef(!1),
        S = a.useRef(null),
        w = a.useCallback(() => {
          ((x.current = !1), S.current && (clearTimeout(S.current), (S.current = null)));
        }, []),
        z = a.useCallback(async () => {
          (g(!0), T(void 0), y(''), h(void 0), w());
          try {
            const m = await ee.wechatGetQrCode();
            (h(m.qrcode_img_content), y('wait'), g(!1), (x.current = !0));
            const v = async () => {
              if (x.current)
                try {
                  const k = await ee.wechatPollQrStatus(m.qrcode);
                  if (!x.current) return;
                  if ((y(k.status), k.status === 'confirmed' && k.bot_token)) {
                    (w(),
                      n({
                        botId: k.ilink_bot_id || '',
                        botToken: k.bot_token,
                        userId: k.ilink_user_id || '',
                      }),
                      i(!1));
                    return;
                  }
                  if (k.status === 'expired') {
                    (w(), T(r('channel.wechatQrExpired')));
                    return;
                  }
                  S.current = setTimeout(v, Z);
                } catch {
                  x.current && (S.current = setTimeout(v, Z));
                }
            };
            S.current = setTimeout(v, Z);
          } catch (m) {
            (T(m?.message || 'Failed to get QR code'), g(!1));
          }
        }, [n, w, r]),
        F = a.useCallback(() => {
          (i(!0), z());
        }, [z]),
        W = a.useCallback(() => {
          (w(), i(!1));
        }, [w]),
        C =
          p === 'wait'
            ? r('channel.wechatQrWait')
            : p === 'scaned'
              ? r('channel.wechatQrScaned')
              : '';
      return t.jsxs(t.Fragment, {
        children: [
          t.jsxs('div', {
            style: { alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 12 },
            children: [
              t.jsx(R, {
                icon: t.jsx(ze, { size: 16 }),
                type: o,
                onClick: F,
                children: e || r('channel.wechatScanToConnect'),
              }),
              s &&
                t.jsxs(re.Text, {
                  style: { maxWidth: 480, textAlign: 'center' },
                  type: 'secondary',
                  children: [t.jsx(Ve, { style: { marginInlineEnd: 4 } }), r('channel.wechatTips')],
                }),
            ],
          }),
          t.jsx(Se, {
            centered: !0,
            footer: null,
            open: d,
            title: r('channel.wechatScanTitle'),
            width: 460,
            onCancel: W,
            children: t.jsxs('div', {
              style: {
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                padding: '16px 0',
              },
              children: [
                l && t.jsx(Me, { size: 'large' }),
                c && !j && t.jsx(Ue, { size: 240, value: c }),
                C && !j && t.jsx(re.Text, { type: 'secondary', children: C }),
                j &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx(qe, { showIcon: !0, message: j, type: 'warning' }),
                      t.jsx(R, {
                        icon: t.jsx(me, { size: 14 }),
                        onClick: z,
                        children: r('channel.wechatQrRefresh'),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      });
    },
  ),
  et = L(({ css: e }) => ({
    header: e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 16px;
  `,
  })),
  tt = a.memo(({ description: e, divider: o, label: n, password: s, tag: r, value: d }) => {
    const i = s ? ue : X;
    return t.jsx(ne, {
      desc: e,
      divider: o,
      label: n,
      minWidth: 'max(50%, 400px)',
      tag: r,
      variant: 'borderless',
      children: t.jsx(i, { readOnly: !0, value: d || '' }),
    });
  }),
  nt = a.memo(({ currentConfig: e, onQrAuthenticated: o }) => {
    const { t: n } = $('agent'),
      s = n,
      r = !!e.applicationId && e.applicationId !== e.credentials.botId;
    return t.jsxs(t.Fragment, {
      children: [
        t.jsxs('div', {
          className: et.header,
          children: [
            t.jsxs(B, {
              gap: 4,
              children: [
                t.jsx('div', {
                  style: { fontSize: 16, fontWeight: 600 },
                  children: s('channel.wechatConnectedInfo'),
                }),
                t.jsx('div', {
                  style: { color: 'var(--ant-color-text-secondary)', fontSize: 13 },
                  children: s('channel.wechatManagedCredentials'),
                }),
              ],
            }),
            o &&
              t.jsx(be, {
                buttonLabel: s('channel.wechatRebind'),
                buttonType: 'default',
                showTips: !1,
                onAuthenticated: o,
              }),
          ],
        }),
        r &&
          t.jsx(tt, {
            description: s('channel.applicationIdHint'),
            label: s('channel.applicationId'),
            tag: 'applicationId',
            value: e.applicationId,
          }),
        !1,
      ],
    });
  }),
  ot = a.memo(({ currentConfig: e, hasConfig: o, onAuthenticated: n }) => {
    const s = a.useCallback(
      (r) => {
        const d = r.botToken?.trim();
        if (!r.botId && !d) return;
        const i = r.botId || d?.slice(0, 16) || '';
        n?.({
          applicationId: i,
          credentials: { botId: r.botId, botToken: r.botToken, userId: r.userId },
        });
      },
      [n],
    );
    return o && e
      ? t.jsx(nt, { currentConfig: e, onQrAuthenticated: s })
      : n
        ? t.jsx('div', {
            style: { display: 'flex', justifyContent: 'center', padding: '16px 0' },
            children: t.jsx(be, { onAuthenticated: s }),
          })
        : null;
  }),
  st = { wechat: ot },
  Y = 'ant',
  at = L(({ css: e }) => ({
    form: e`
    .${Y}-form-item-control:has(.${Y}-input, .${Y}-select, .${Y}-input-number) {
      flex: none;
    }
  `,
  }));
function rt(e, o) {
  const n = [];
  return (
    e.required && n.push({ message: o(e.label), required: !0 }),
    (e.type === 'number' || e.type === 'integer') &&
      (typeof e.minimum == 'number' &&
        n.push({ message: `${o(e.label)} ≥ ${e.minimum}`, min: e.minimum, type: 'number' }),
      typeof e.maximum == 'number' &&
        n.push({ message: `${o(e.label)} ≤ ${e.maximum}`, max: e.maximum, type: 'number' })),
    n.length > 0 ? n : void 0
  );
}
const ie = a.memo(({ field: e, parentKey: o, divider: n }) => {
    const { t: s } = $('agent'),
      r = s,
      d = oe.useWatch(e.visibleWhen ? [o, e.visibleWhen.field] : []);
    if (e.visibleWhen && d !== e.visibleWhen.value) return null;
    const i = e.devOnly
      ? t.jsxs(B, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          children: [r(e.label), t.jsx(de, { color: 'gold', children: 'Dev Only' })],
        })
      : r(e.label);
    let c;
    switch (e.type) {
      case 'password': {
        c = t.jsx(ue, { autoComplete: 'new-password', placeholder: e.placeholder });
        break;
      }
      case 'boolean': {
        c = t.jsx(xe, {});
        break;
      }
      case 'number':
      case 'integer': {
        c = t.jsx(He, {
          max: e.maximum,
          min: e.minimum,
          placeholder: e.placeholder,
          style: { width: '100%' },
        });
        break;
      }
      case 'string': {
        e.enum
          ? (c = t.jsx(Ie, {
              placeholder: e.placeholder,
              options: e.enum.map((h, p) => ({
                label: e.enumLabels?.[p] ? r(e.enumLabels[p]) : h,
                value: h,
              })),
            }))
          : (c = t.jsx(X, { placeholder: e.placeholder || r(e.label) }));
        break;
      }
      default:
        c = t.jsx(X, { placeholder: e.placeholder || r(e.label) });
    }
    return t.jsx(ne, {
      desc: e.description ? r(e.description) : void 0,
      divider: n,
      initialValue: e.default,
      label: i,
      minWidth: 'max(50%, 400px)',
      name: [o, e.key],
      rules: rt(e, r),
      tag: e.key,
      valuePropName: e.type === 'boolean' ? 'checked' : void 0,
      variant: 'borderless',
      children: c,
    });
  }),
  it = a.memo(({ field: e }) => {
    const { t: o } = $('agent'),
      n = o;
    return t.jsx(ne, {
      desc: e.description ? n(e.description) : void 0,
      initialValue: e.default,
      label: n(e.label),
      minWidth: 'max(50%, 400px)',
      name: 'applicationId',
      rules: e.required ? [{ message: n(e.label), required: !0 }] : void 0,
      tag: 'applicationId',
      variant: 'borderless',
      children: t.jsx(X, { placeholder: e.placeholder || n(e.label) }),
    });
  });
function le(e, o) {
  const n = e.find((s) => s.key === o);
  return n?.properties
    ? n.properties
        .filter((s) => !s.devOnly || !1)
        .flatMap((s) =>
          s.type === 'object' && s.properties ? s.properties.filter((r) => !r.devOnly || !1) : s,
        )
    : [];
}
const lt = a.memo(({ schema: e }) => {
    const { t: o } = $('agent'),
      n = o,
      s = e.find((r) => r.key === 'settings');
    return t.jsx(t.Fragment, { children: s ? n(s.label) : null });
  }),
  ct = a.memo(({ platformDef: e, form: o, hasConfig: n, currentConfig: s, onAuthenticated: r }) => {
    const { t: d } = $('agent'),
      i = d,
      c = st[e.id],
      h = a.useMemo(() => e.schema.find((g) => g.key === 'applicationId'), [e.schema]),
      p = a.useMemo(() => le(e.schema, 'credentials'), [e.schema]),
      y = a.useMemo(() => le(e.schema, 'settings'), [e.schema]),
      [j, T] = a.useState(!1),
      l = a.useCallback(() => {
        const g = {};
        for (const x of y) x.default !== void 0 && (g[x.key] = x.default);
        o.setFieldsValue({ settings: g });
      }, [o, y]);
    return t.jsxs(Ae, {
      className: at.form,
      form: o,
      gap: 0,
      itemMinWidth: 'max(50%, 400px)',
      requiredMark: !1,
      style: { maxWidth: 1024, padding: '16px 0', width: '100%' },
      variant: 'borderless',
      children: [
        c
          ? t.jsx(c, { currentConfig: s, hasConfig: n, onAuthenticated: r })
          : t.jsxs(t.Fragment, {
              children: [
                h && t.jsx(it, { field: h }),
                p.map((g, x) =>
                  t.jsx(
                    ie,
                    { divider: h ? !0 : x !== 0, field: g, parentKey: 'credentials' },
                    g.key,
                  ),
                ),
              ],
            }),
        y.length > 0 &&
          t.jsx($e, {
            collapsible: !0,
            defaultActive: !1,
            keyValue: `settings-${e.id}`,
            style: { marginBlockStart: 16 },
            title: t.jsx(lt, { schema: e.schema }),
            variant: 'borderless',
            extra: j
              ? t.jsx(Ge, {
                  title: i('channel.settingsResetConfirm'),
                  onConfirm: l,
                  children: t.jsx(R, {
                    icon: t.jsx(Re, { size: 14 }),
                    size: 'small',
                    type: 'default',
                    children: i('channel.settingsResetDefault'),
                  }),
                })
              : void 0,
            onCollapse: T,
            children: y.map((g, x) =>
              t.jsx(ie, { divider: x !== 0, field: g, parentKey: 'settings' }, g.key),
            ),
          }),
      ],
    });
  }),
  V = L(({ css: e, cssVar: o }) => ({
    actionBar: e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 16px;
  `,
    bottom: e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 1024px;
  `,
    webhookBox: e`
    overflow: hidden;
    flex: 1;

    height: ${o.controlHeight};
    padding-inline: 12px;
    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius};

    font-family: monospace;
    font-size: 13px;
    line-height: ${o.controlHeight};
    color: ${o.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;

    background: ${o.colorFillQuaternary};
  `,
  })),
  dt = a.memo(
    ({
      platformDef: e,
      form: o,
      hasConfig: n,
      connectResult: s,
      connecting: r,
      saveResult: d,
      saving: i,
      testing: c,
      testResult: h,
      onSave: p,
      onDelete: y,
      onTestConnection: j,
      onCopied: T,
    }) => {
      const { t: l } = $('agent'),
        g = De(),
        x = e.id,
        S = oe.useWatch('applicationId', o),
        w = S ? `${g}/api/agent/webhooks/${x}/${S}` : `${g}/api/agent/webhooks/${x}`;
      return t.jsxs('div', {
        className: V.bottom,
        children: [
          t.jsxs('div', {
            className: V.actionBar,
            children: [
              n
                ? t.jsx(R, {
                    danger: !0,
                    disabled: i || r,
                    icon: t.jsx(he, { size: 16 }),
                    type: 'primary',
                    onClick: y,
                    children: l('channel.removeChannel'),
                  })
                : t.jsx('div', {}),
              t.jsxs(B, {
                horizontal: !0,
                gap: 12,
                children: [
                  n &&
                    t.jsx(R, {
                      disabled: i || r,
                      icon: t.jsx(me, { size: 16 }),
                      loading: c,
                      onClick: j,
                      children: l('channel.testConnection'),
                    }),
                  t.jsx(R, {
                    icon: t.jsx(_e, { size: 16 }),
                    loading: i || r,
                    type: 'primary',
                    onClick: p,
                    children: l(r ? 'channel.connecting' : 'channel.save'),
                  }),
                ],
              }),
            ],
          }),
          d &&
            t.jsx(K, {
              closable: !0,
              showIcon: !0,
              description: d.type === 'error' ? d.errorDetail : void 0,
              title: d.type === 'success' ? l('channel.saved') : l('channel.saveFailed'),
              type: d.type,
            }),
          s &&
            t.jsx(K, {
              closable: !0,
              showIcon: !0,
              description: s.type === 'error' ? s.errorDetail : void 0,
              type: s.type,
              title:
                s.title ||
                (s.type === 'success' ? l('channel.connectSuccess') : l('channel.connectFailed')),
            }),
          h &&
            t.jsx(K, {
              closable: !0,
              showIcon: !0,
              description: h.type === 'error' ? h.errorDetail : void 0,
              type: h.type,
              title: h.type === 'success' ? l('channel.testSuccess') : l('channel.testFailed'),
            }),
          n &&
            e.showWebhookUrl &&
            t.jsxs(B, {
              gap: 8,
              children: [
                t.jsxs(B, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    t.jsx('span', {
                      style: { fontWeight: 600 },
                      children: l('channel.endpointUrl'),
                    }),
                    t.jsx(de, { children: 'Event Subscription URL' }),
                  ],
                }),
                t.jsxs(B, {
                  horizontal: !0,
                  gap: 8,
                  children: [
                    t.jsx('div', { className: V.webhookBox, children: w }),
                    t.jsx(R, {
                      onClick: () => {
                        (navigator.clipboard.writeText(w), T());
                      },
                      children: l('channel.copy'),
                    }),
                  ],
                }),
                t.jsx(K, {
                  showIcon: !0,
                  type: 'info',
                  message: t.jsx(Je, {
                    components: { bold: t.jsx('strong', {}) },
                    i18nKey: 'channel.endpointUrlHint',
                    ns: 'agent',
                    values: { fieldName: 'Event Subscription URL', name: e.name },
                  }),
                }),
              ],
            }),
        ],
      });
    },
  ),
  pt = (e) => Object.fromEntries(Object.entries(e || {}).map(([o, n]) => [o, n ?? void 0])),
  ut = (e) => ({
    applicationId: e.applicationId || '',
    credentials: e.credentials || {},
    settings: pt(e.settings),
  }),
  mt = a.memo(
    ({
      platformDef: e,
      currentConfig: o,
      enabledValue: n,
      onToggleEnable: s,
      toggleLoading: r,
    }) => {
      const { t: d } = $('agent'),
        i = ge(e.name),
        c = i && 'Color' in i ? i.Color : i,
        h = n ?? o?.enabled;
      return t.jsxs(B, {
        horizontal: !0,
        align: 'center',
        justify: 'space-between',
        style: {
          borderBottom: '1px solid var(--ant-color-border)',
          maxWidth: 1024,
          padding: '16px 0',
          width: '100%',
        },
        children: [
          t.jsxs(B, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children: [
              c && t.jsx(c, { size: 32 }),
              e.name,
              e.documentation?.setupGuideUrl &&
                t.jsx('a', {
                  href: e.documentation.setupGuideUrl,
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  children: t.jsx(Ke, { title: d('channel.setupGuide') }),
                }),
              e.documentation?.portalUrl &&
                t.jsx('a', {
                  href: e.documentation.portalUrl,
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  children: t.jsx(R, {
                    icon: t.jsx(Ee, { size: 14 }),
                    size: 'small',
                    type: 'link',
                    children: d('channel.openPlatform'),
                  }),
                }),
            ],
          }),
          t.jsx(B, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            children:
              o &&
              t.jsxs(t.Fragment, {
                children: [
                  t.jsx('span', {
                    style: { color: 'var(--ant-color-text-secondary)', fontSize: 14 },
                    children: d(h ? 'channel.enabled' : 'channel.disabled'),
                  }),
                  t.jsx(xe, { checked: h, loading: r, onChange: s }),
                ],
              }),
          }),
        ],
      });
    },
  ),
  ht = L(({ css: e, cssVar: o }) => ({
    main: e`
    position: relative;

    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    padding: 24px;

    background: ${o.colorBgContainer};
  `,
  })),
  ce = (e) => Object.fromEntries(Object.entries(e).filter(([, o]) => o !== void 0)),
  xt = a.memo(({ platformDef: e, agentId: o, currentConfig: n }) => {
    const { t: s } = $('agent'),
      { message: r, modal: d } = pe.useApp(),
      [i] = oe.useForm(),
      [c, h, p, y, j] = O((u) => [
        u.createBotProvider,
        u.deleteBotProvider,
        u.updateBotProvider,
        u.connectBot,
        u.testConnection,
      ]),
      [T, l] = a.useState(!1),
      [g, x] = a.useState(!1),
      [S, w] = a.useState(),
      [z, F] = a.useState(),
      [W, C] = a.useState(),
      [m, v] = a.useState(!1),
      [k, P] = a.useState(!1),
      [I, N] = a.useState(),
      J = a.useRef(null),
      _ = a.useCallback(() => {
        J.current && (clearTimeout(J.current), (J.current = null));
      }, []),
      se = a.useCallback(
        (u, b) => {
          switch (u.status) {
            case f.connected:
              return b?.showConnected
                ? { title: s('channel.connectSuccess'), type: 'success' }
                : void 0;
            case f.failed:
              return {
                errorDetail: u.errorMessage,
                title: s('channel.connectFailed'),
                type: 'error',
              };
            case f.queued:
              return { title: s('channel.connectQueued'), type: 'info' };
            case f.starting:
              return { title: s('channel.connectStarting'), type: 'info' };
            default:
              return;
          }
        },
        [s],
      ),
      M = a.useCallback(
        async (u, b) => {
          _();
          const A = await ee.getRuntimeStatus(u),
            E = se(A, { showConnected: b?.showConnected });
          (E ? C(E) : A.status === f.disconnected && C(void 0),
            b?.poll &&
              (A.status === f.queued || A.status === f.starting) &&
              (J.current = setTimeout(() => {
                M(u, b);
              }, 2e3)));
        },
        [se, _],
      ),
      Q = a.useCallback(
        async (u) => {
          x(!0);
          try {
            const { status: b } = await y({ agentId: o, applicationId: u, platform: e.id });
            (C({
              title: s(b === 'queued' ? 'channel.connectQueued' : 'channel.connectStarting'),
              type: 'info',
            }),
              await M({ applicationId: u, platform: e.id }, { poll: !0, showConnected: !0 }));
          } catch (b) {
            C({ errorDetail: b?.message || String(b), type: 'error' });
          } finally {
            x(!1);
          }
        },
        [o, y, e.id, M, s],
      );
    (a.useEffect(() => {
      (i.resetFields(), F(void 0), C(void 0), N(void 0), _());
    }, [e.id, i, _]),
      a.useEffect(() => {
        n && i.setFieldsValue(ut(n));
      }, [n, i]),
      a.useEffect(() => {
        if (!n) {
          (w(void 0), v(!1));
          return;
        }
        S === n.enabled && w(void 0);
      }, [n, S]),
      a.useEffect(() => {
        if (!n?.enabled) {
          (_(), C(void 0));
          return;
        }
        return (
          M(
            { applicationId: n.applicationId, platform: n.platform },
            { poll: !0, showConnected: !1 },
          ),
          () => {
            _();
          }
        );
      }, [n, _, M]));
    const ye = a.useCallback(async () => {
        try {
          await i.validateFields();
          const u = i.getFieldsValue(!0);
          (l(!0), F(void 0), C(void 0));
          const { applicationId: b, credentials: A = {}, settings: E = {} } = u,
            U = Object.fromEntries(Object.entries(A).filter(([, G]) => G !== void 0 && G !== '')),
            ae = ce(E);
          let q = b || '';
          if (!q && U.botToken) {
            const G = U.botToken.indexOf(':');
            G !== -1 && (q = U.botToken.slice(0, G));
          }
          (n
            ? await p(n.id, o, { applicationId: q, credentials: U, settings: ae })
            : await c({
                agentId: o,
                applicationId: q,
                credentials: U,
                platform: e.id,
                settings: ae,
              }),
            F({ type: 'success' }),
            setTimeout(() => F(void 0), 3e3),
            l(!1),
            await Q(q));
        } catch (u) {
          if (u?.errorFields) return;
          (console.error(u), F({ errorDetail: u?.message || String(u), type: 'error' }), l(!1));
        }
      }, [o, e, i, n, c, p, Q]),
      fe = a.useCallback(
        async (u) => {
          (l(!0), F(void 0), C(void 0));
          try {
            const { applicationId: b, credentials: A } = u,
              E = ce(i.getFieldValue('settings') || {});
            (n
              ? await p(n.id, o, { applicationId: b, credentials: A, settings: E })
              : await c({
                  agentId: o,
                  applicationId: b,
                  credentials: A,
                  platform: e.id,
                  settings: E,
                }),
              F({ type: 'success' }),
              r.success(s('channel.saved')),
              await Q(b));
          } catch (b) {
            F({ errorDetail: b?.message || String(b), type: 'error' });
          } finally {
            l(!1);
          }
        },
        [o, e, i, n, c, p, Q, r, s],
      ),
      je = a.useCallback(async () => {
        n &&
          d.confirm({
            content: s('channel.deleteConfirmDesc'),
            okButtonProps: { danger: !0 },
            onOk: async () => {
              try {
                (await h(n.id, o), r.success(s('channel.removed')), i.resetFields());
              } catch {
                r.error(s('channel.removeFailed'));
              }
            },
            title: s('channel.deleteConfirm'),
          });
      }, [n, o, h, r, s, d, i]),
      ve = a.useCallback(
        async (u) => {
          if (n)
            try {
              (w(u),
                v(!0),
                await p(n.id, o, { enabled: u }),
                v(!1),
                u && (await Q(n.applicationId)));
            } catch {
              (w(void 0), v(!1), r.error(s('channel.updateFailed')));
            }
        },
        [n, o, p, Q, r, s],
      ),
      we = a.useCallback(async () => {
        if (!n) {
          r.warning(s('channel.saveFirstWarning'));
          return;
        }
        (P(!0), N(void 0));
        try {
          (await j({ applicationId: n.applicationId, platform: e.id }), N({ type: 'success' }));
        } catch (u) {
          N({ errorDetail: u?.message || String(u), type: 'error' });
        } finally {
          P(!1);
        }
      }, [n, e.id, j, r, s]);
    return t.jsxs('main', {
      className: ht.main,
      children: [
        t.jsx(mt, {
          currentConfig: n,
          enabledValue: S,
          platformDef: e,
          toggleLoading: m,
          onToggleEnable: ve,
        }),
        t.jsx(ct, {
          currentConfig: n,
          form: i,
          hasConfig: !!n,
          platformDef: e,
          onAuthenticated: fe,
        }),
        t.jsx(dt, {
          connectResult: W,
          connecting: g,
          form: i,
          hasConfig: !!n,
          platformDef: e,
          saveResult: z,
          saving: T,
          testResult: I,
          testing: k,
          onCopied: () => r.success(s('channel.copied')),
          onDelete: je,
          onSave: ye,
          onTestConnection: we,
        }),
      ],
    });
  }),
  D = L(({ css: e, cssVar: o }) => ({
    item: e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border: none;
    border-radius: ${o.borderRadius};

    color: ${o.colorTextSecondary};
    text-align: start;

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${o.colorText};
      background: ${o.colorFillTertiary};
    }

    &.active {
      font-weight: 500;
      color: ${o.colorText};
      background: ${o.colorFillSecondary};
    }
  `,
    list: e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    padding: 12px;
    padding-block-start: 16px;
  `,
    root: e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: 260px;
    border-inline-end: 1px solid ${o.colorBorder};
  `,
    statusDot: e`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${o.colorSuccess};
    box-shadow: 0 0 0 1px ${o.colorBgContainer};
  `,
    title: e`
    padding-inline: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${o.colorTextQuaternary};
  `,
  })),
  gt = a.memo(
    ({ platforms: e, activeId: o, agentId: n, onSelect: s, providers: r, runtimeStatuses: d }) => {
      const { t: i } = $('agent'),
        c = Te(),
        { modal: h, message: p } = pe.useApp(),
        y = a.useRef(null),
        j = O((m) => m.deleteAllBotProviders),
        T = O((m) => m.createBotProvider),
        l = O((m) => m.connectBot),
        g = a.useCallback(() => {
          if (!r?.length) return;
          const m = r.map(({ id: v, ...k }) => k);
          Ye(m, `lobehub-channels-${n}.json`);
        }, [r, n]),
        x = a.useCallback(() => {
          y.current?.click();
        }, []),
        S = a.useCallback(
          async (m) => {
            const v = m.target.files?.[0];
            if (v)
              try {
                const k = await v.text(),
                  P = JSON.parse(k);
                if (!Array.isArray(P)) {
                  p.error(i('channel.importInvalidFormat'));
                  return;
                }
                for (const I of P)
                  if (!I.platform || !I.applicationId || !I.credentials) {
                    p.error(i('channel.importInvalidFormat'));
                    return;
                  }
                for (const I of P)
                  (await T({
                    agentId: n,
                    applicationId: I.applicationId,
                    credentials: I.credentials,
                    platform: I.platform,
                    settings: I.settings ?? void 0,
                  }),
                    I.enabled &&
                      (await l({
                        agentId: n,
                        applicationId: I.applicationId,
                        platform: I.platform,
                      })));
                p.success(i('channel.importSuccess'));
              } catch {
                p.error(i('channel.importFailed'));
              } finally {
                m.target.value = '';
              }
          },
          [n, l, T, p, i],
        ),
        w = a.useCallback(() => {
          r?.length &&
            h.confirm({
              content: i('channel.deleteAllConfirmDesc'),
              okButtonProps: { danger: !0 },
              okText: i('channel.deleteAllChannels'),
              onOk: async () => {
                try {
                  (await j(n), p.success(i('channel.deleteAllSuccess')));
                } catch {
                  p.error(i('channel.deleteAllFailed'));
                }
              },
              title: i('channel.deleteAllConfirm'),
              type: 'warning',
            });
        }, [n, j, p, h, r, i]),
        z = !!r?.length,
        F = [
          {
            icon: t.jsx(H, { icon: Oe, size: 'small' }),
            key: 'export',
            disabled: !z,
            label: i('channel.exportConfig'),
            onClick: g,
          },
          {
            icon: t.jsx(H, { icon: Ne, size: 'small' }),
            key: 'import',
            label: i('channel.importConfig'),
            onClick: x,
          },
          { type: 'divider' },
          {
            danger: !0,
            disabled: !z,
            icon: t.jsx(H, { icon: he, size: 'small' }),
            key: 'deleteAll',
            label: i('channel.deleteAllChannels'),
            onClick: w,
          },
        ],
        W = (m) => {
          switch (m) {
            case f.connected:
              return c.colorSuccess;
            case f.failed:
              return c.colorError;
            case f.queued:
            case f.starting:
              return c.colorInfo;
            case f.disconnected:
              return c.colorTextQuaternary;
            default:
              return;
          }
        },
        C = (m) => {
          switch (m) {
            case f.connected:
              return i('channel.connectSuccess');
            case f.failed:
              return i('channel.connectFailed');
            case f.queued:
              return i('channel.connectQueued');
            case f.starting:
              return i('channel.connectStarting');
            case f.disconnected:
              return i('channel.runtimeDisconnected');
            default:
              return;
          }
        };
      return t.jsxs('aside', {
        className: D.root,
        children: [
          t.jsxs('div', {
            className: D.list,
            children: [
              t.jsxs('div', {
                style: { alignItems: 'center', display: 'flex', justifyContent: 'space-between' },
                children: [
                  t.jsx('div', { className: D.title, children: i('channel.platforms') }),
                  t.jsx(Xe, {
                    menu: { items: F },
                    trigger: ['click'],
                    children: t.jsx('button', {
                      style: {
                        background: 'transparent',
                        border: 'none',
                        borderRadius: 4,
                        color: c.colorTextQuaternary,
                        cursor: 'pointer',
                        display: 'flex',
                        padding: 4,
                      },
                      children: t.jsx(H, { icon: Qe, size: 'small' }),
                    }),
                  }),
                ],
              }),
              t.jsx('input', {
                accept: '.json',
                ref: y,
                style: { display: 'none' },
                type: 'file',
                onChange: S,
              }),
              e.map((m) => {
                const v = ge(m.name),
                  k = v && 'Color' in v ? v.Color : v,
                  P = d.get(m.id),
                  I = W(P),
                  N = C(P);
                return t.jsxs(
                  'button',
                  {
                    className: Ce(D.item, o === m.id && 'active'),
                    onClick: () => s(m.id),
                    children: [
                      k && t.jsx(k, { size: 20 }),
                      t.jsx('span', { style: { flex: 1 }, children: m.name }),
                      P &&
                        t.jsx('div', {
                          className: D.statusDot,
                          style: { background: I },
                          title: N,
                        }),
                    ],
                  },
                  m.id,
                );
              }),
            ],
          }),
          t.jsx('div', {
            style: { borderTop: `1px solid ${c.colorBorder}`, padding: 12 },
            children: t.jsxs('a', {
              href: 'https://lobehub.com/docs/usage/channels/overview',
              rel: 'noopener noreferrer',
              target: '_blank',
              style: {
                alignItems: 'center',
                color: c.colorTextSecondary,
                display: 'flex',
                fontSize: 12,
                gap: 4,
              },
              children: [t.jsx(H, { icon: Le, size: 'small' }), ' ', i('channel.documentation')],
            }),
          }),
        ],
      });
    },
  ),
  bt = L(({ css: e }) => ({
    container: e`
    overflow: hidden;
    display: flex;
    flex: 1;

    width: 100%;
    height: 100%;
  `,
  })),
  On = a.memo(() => {
    const { aid: e } = Fe(),
      [o, n] = a.useState(''),
      { data: s, isLoading: r } = O((l) => l.useFetchPlatformDefinitions()),
      { data: d, isLoading: i } = O((l) => l.useFetchBotProviders(e)),
      { data: c } = O((l) => l.useFetchBotRuntimeStatuses(e)),
      h = r || i,
      p = o || s?.[0]?.id || '',
      y = a.useMemo(
        () =>
          new Map(
            (d ?? [])
              .filter((l) => l.enabled)
              .map((l) => {
                const g = c?.find(
                  (x) => x.platform === l.platform && x.applicationId === l.applicationId,
                );
                return [l.platform, g?.status ?? f.disconnected];
              }),
          ),
        [d, c],
      ),
      j = a.useMemo(() => s?.find((l) => l.id === p) || s?.[0], [s, p]),
      T = a.useMemo(() => d?.find((l) => l.platform === p), [d, p]);
    return e
      ? t.jsxs(B, {
          flex: 1,
          height: '100%',
          children: [
            t.jsx(Pe, {}),
            t.jsxs(B, {
              flex: 1,
              style: { overflowY: 'auto' },
              children: [
                h && t.jsx(Be, { debugId: 'ChannelPage' }),
                !h &&
                  s &&
                  s.length > 0 &&
                  j &&
                  t.jsxs('div', {
                    className: bt.container,
                    children: [
                      t.jsx(gt, {
                        activeId: p,
                        agentId: e,
                        platforms: s,
                        providers: d,
                        runtimeStatuses: y,
                        onSelect: n,
                      }),
                      t.jsx(xt, { agentId: e, currentConfig: T, platformDef: j }),
                    ],
                  }),
              ],
            }),
          ],
        })
      : null;
  });
export { On as default };
