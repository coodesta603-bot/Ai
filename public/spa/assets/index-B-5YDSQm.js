const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
    ]),
) => i.map((i) => d[i]);
import { j as e, y as Z, A as G } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as C,
  F as n,
  I as U,
  aI as re,
  cH as T,
  cI as se,
  a4 as ne,
  Z as x,
  v,
  an as b,
  k as I,
  bP as H,
  f as oe,
  R as A,
  fs as ie,
  fr as ae,
  B as R,
  ft as Q,
  T as le,
  _ as O,
  X as V,
  bD as K,
  A as ce,
  ci as de,
} from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { F as ue } from './FormGroup-DGnHhsIY.js';
import { S as F } from './index-DLsdvBKx.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as pe } from './SettingHeader-CfIsrQr0.js';
import { g as ee, H as fe, K as me } from './index-Br6hqyew.js';
import {
  d8 as he,
  b4 as ge,
  P as xe,
  B as je,
  U as ye,
  dc as ve,
  a_ as Se,
  bE as we,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { U as W } from './UserAvatar-CWlTXKlc.js';
import { aI as ke } from './index-ClRvEh9W.js';
import { U as ze } from './index-C2-gySBL.js';
import { S as q } from './index-Bc7JilPY.js';
import { I as N } from './Input-C_EgL0SG.js';
import { B } from './Block-DDntSWi2.js';
import { I as Ie } from './config-DPXdmHoQ.js';
import { A as Ce } from './index-BAOF5XWg.js';
import { D as Ee } from './DropdownMenu-CEFIlaZw.js';
import { Z as Pe, M as be, L as Ae, C as _e, A as Re, a as Fe, b as Le } from './index-C5BaNDGi.js';
import { I as Ue } from './index-DTt8RGNw.js';
import { I as Te, a as De, b as Ne } from './index-BtctqgmI.js';
import { I as Be } from './index-DqcYNTWN.js';
import { I as Me } from './index-ePfB_e6x.js';
import { D as E } from './index-BfwjtmVb.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-8fdqmFXe.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './clientModelRuntime-ByjgYOys.js';
import './index-F5T1V14Z.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-sIxU1rKL.js';
import './purify.es-r8glNMJW.js';
import './store-CTAK9tZ0.js';
import './selectors-BgvhR9tA.js';
import './tools-grZ3gd_F.js';
import './ipc-wTHpVC92.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './object-CksihGcT.js';
import './index-BrpHwoCT.js';
import './store-Cj3bQrT7.js';
import './browser-Cc4eeHpk.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './store-CMvu1t2Y.js';
import './sync-Dxmxhr-a.js';
import './currency-iJxIWo9y.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-BrqBWuO3.js';
import './progress-CqsUaYIW.js';
import './index-BSuyBMRZ.js';
import './style-Bc_3l5BM.js';
import './index-OkOG2AHU.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './TextArea-BTdxpOlh.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './getPseudoElementBounds-D4ZSmtDt.js';
import './useOpenInteractionType-BsDcqr8f.js';
import './index-CaOmqfDS.js';
import './parseTrigger-BVMOpYJv.js';
import './index-BsHwsvJB.js';
import './useFillId-Dc6zFnxP.js';
const Oe = u.memo(({ message: r, status: t }) => {
    const { t: s } = C('error'),
      [a, m] = u.useState(!1);
    return e.jsxs(n, {
      gap: 8,
      children: [
        s(`response.${t}`),
        e.jsxs(n, {
          horizontal: !0,
          gap: 4,
          style: { cursor: 'pointer', fontSize: 12 },
          onClick: () => {
            m(!a);
          },
          children: [s('fetchError.detail'), ' ', e.jsx(U, { icon: a ? he : ge })],
        }),
        e.jsx(re, {
          language: 'text',
          style: { display: a ? void 0 : 'none', maxHeight: 80 },
          children: r,
        }),
      ],
    });
  }),
  D = {
    error: ({ status: r, errorMessage: t }) => {
      T.error({
        description: e.jsx(Oe, { message: t, status: r }),
        icon: e.jsx(ne, { emoji: '🤧', size: 24 }),
        message: se('fetchError.title', { ns: 'error' }),
        type: 'error',
      });
    },
  },
  Ve = (r) => (t) => {
    const s = new FileReader();
    (s.readAsDataURL(t),
      s.addEventListener('load', () => {
        r(String(s.result));
      }));
  },
  S = { minHeight: 48, padding: '16px 0' },
  P = { flexShrink: 0, width: 160 },
  te = 240,
  X = ({ label: r, children: t, action: s, mobile: a }) =>
    a
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [
            e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              justify: 'space-between',
              children: [e.jsx(x, { strong: !0, children: r }), s],
            }),
            e.jsx(n, { children: t }),
          ],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: r }),
            e.jsx(n, { align: 'flex-end', style: { flex: 1 }, children: t }),
            s && e.jsx(n, { children: s }),
          ],
        }),
  Y = oe(({ css: r }) => ({
    overlay: r`
    cursor: pointer;

    position: absolute;
    z-index: 1;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    opacity: 0;
    background: ${I.colorBgMask};

    transition: opacity ${I.motionDurationMid} ease;
  `,
    wrapper: r`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 8px;

    &:hover .avatar-edit-overlay {
      opacity: 1;
    }
  `,
  })),
  Ke = ({ mobile: r }) => {
    const { t } = C('auth'),
      s = v(b.isLogin),
      a = v((f) => f.updateAvatar),
      [m, c] = u.useState(!1),
      h = u.useMemo(
        () =>
          Ve(async (f) => {
            try {
              c(!0);
              const l = new Image();
              ((l.src = f),
                await new Promise((k, o) => {
                  (l.addEventListener('load', k), l.addEventListener('error', o));
                }));
              const w = ke({ img: l, size: 256 });
              (await a(w), c(!1));
            } catch (l) {
              (console.error('Failed to upload avatar:', l),
                c(!1),
                D.error({ errorMessage: l instanceof Error ? l.message : String(l), status: 500 }));
            }
          }),
        [a],
      ),
      g = s
        ? e.jsx(ze, {
            beforeUpload: h,
            itemRender: () => {},
            maxCount: 1,
            children: e.jsx(q, {
              indicator: e.jsx(H, { spin: !0 }),
              spinning: m,
              children: e.jsxs('div', {
                className: Y.wrapper,
                children: [
                  e.jsx(W, { size: 40 }),
                  e.jsx('div', {
                    className: `${Y.overlay} avatar-edit-overlay`,
                    children: e.jsx(U, { color: I.colorTextLightSolid, icon: xe, size: 16 }),
                  }),
                ],
              }),
            }),
          })
        : e.jsx(W, { size: 40 });
    return r
      ? e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 12,
          justify: 'space-between',
          style: S,
          children: [e.jsx(x, { strong: !0, children: t('profile.avatar') }), g],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.avatar') }),
            e.jsx(n, { align: 'flex-end', style: { flex: 1 }, children: g }),
          ],
        });
  },
  $e = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/,
  He = ({ mobile: r }) => {
    const { t } = C('auth'),
      s = v(A.email),
      [a, m] = u.useState(!1),
      [c, h] = u.useState(''),
      [p, g] = u.useState(!1),
      [f, l] = u.useState(''),
      w = () => {
        (h(''), l(''), m(!0));
      },
      k = () => {
        (m(!1), h(''), l(''));
      },
      o = u.useCallback(async () => {
        const y = c.trim();
        if (y) {
          if (!$e.test(y)) {
            l(t('profile.emailInvalid'));
            return;
          }
          try {
            (g(!0), l(''));
            const i = await ie({ callbackURL: '/settings/profile', newEmail: y });
            if (i.error) {
              l(i.error.message ?? i.error.statusText ?? 'Failed to change email');
              return;
            }
            (m(!1), ae.success(t('profile.emailChangeSuccess')));
          } catch (i) {
            (console.error('Failed to change email:', i),
              l(i instanceof Error ? i.message : String(i)));
          } finally {
            g(!1);
          }
        }
      }, [c, t]),
      j = e.jsx(
        Z.div,
        {
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          initial: { opacity: 0, y: -10 },
          transition: { duration: 0.2 },
          children: e.jsxs(n, {
            gap: 12,
            children: [
              !r && e.jsx(x, { strong: !0, children: t('profile.emailInputHint') }),
              e.jsx(N, {
                autoFocus: !0,
                placeholder: t('profile.emailPlaceholder'),
                status: f ? 'error' : void 0,
                value: c,
                onPressEnter: o,
                onChange: (y) => {
                  (h(y.target.value), f && l(''));
                },
              }),
              f && e.jsx(x, { style: { fontSize: 12 }, type: 'danger', children: f }),
              e.jsxs(n, {
                horizontal: !0,
                gap: 8,
                justify: 'flex-end',
                children: [
                  e.jsx(R, {
                    disabled: p,
                    size: 'small',
                    onClick: k,
                    children: t('profile.cancel'),
                  }),
                  e.jsx(R, {
                    loading: p,
                    size: 'small',
                    type: 'primary',
                    onClick: o,
                    children: t('profile.save'),
                  }),
                ],
              }),
            ],
          }),
        },
        'editing',
      ),
      d = e.jsx(
        Z.div,
        {
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          initial: { opacity: 0 },
          transition: { duration: 0.2 },
          children: r
            ? e.jsx(x, { children: s || '--' })
            : e.jsxs(n, {
                horizontal: !0,
                align: 'center',
                justify: 'space-between',
                children: [
                  e.jsx(x, { children: s || '--' }),
                  e.jsx(x, {
                    style: { cursor: 'pointer', fontSize: 13 },
                    onClick: w,
                    children: t('profile.updateEmail'),
                  }),
                ],
              }),
        },
        'display',
      );
    return r
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [
            e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              justify: 'space-between',
              children: [
                e.jsx(x, { strong: !0, children: t('profile.email') }),
                !a &&
                  e.jsx(x, {
                    style: { cursor: 'pointer', fontSize: 13 },
                    onClick: w,
                    children: t('profile.updateEmail'),
                  }),
              ],
            }),
            e.jsx(G, { mode: 'wait', children: a ? j : d }),
          ],
        })
      : e.jsxs(n, {
          horizontal: !0,
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.email') }),
            e.jsx(n, {
              style: { flex: 1 },
              children: e.jsx(G, { mode: 'wait', children: a ? j : d }),
            }),
          ],
        });
  },
  qe = ({ mobile: r }) => {
    const { t } = C('auth'),
      s = v(A.fullName),
      a = v((f) => f.updateFullName),
      [m, c] = u.useState(!1),
      h = u.useRef(null),
      p = u.useCallback(async () => {
        const f = h.current?.input?.value?.trim();
        if (!(!f || f === s))
          try {
            (c(!0), await a(f));
          } catch (l) {
            (console.error('Failed to update fullName:', l),
              D.error({ errorMessage: l instanceof Error ? l.message : String(l), status: 500 }));
          } finally {
            c(!1);
          }
      }, [s, a]),
      g = e.jsxs(n, {
        horizontal: !0,
        align: 'center',
        gap: 8,
        children: [
          m && e.jsx(q, { indicator: e.jsx(H, { spin: !0 }), size: 'small' }),
          e.jsx(
            N,
            {
              defaultValue: s || '',
              disabled: m,
              placeholder: t('profile.fullName'),
              ref: h,
              style: r ? void 0 : { textAlign: 'right', width: te },
              variant: 'filled',
              onBlur: p,
              onPressEnter: p,
            },
            s,
          ),
        ],
      });
    return r
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [e.jsx(x, { strong: !0, children: t('profile.fullName') }), g],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.fullName') }),
            e.jsx(n, { align: 'flex-end', style: { flex: 1 }, children: g }),
          ],
        });
  },
  Ze = ({ mobile: r }) => {
    const { t } = C('auth'),
      { t: s } = C('onboarding'),
      a = v(A.interests),
      m = v((d) => d.updateInterests),
      [c, h] = u.useState(''),
      [p, g] = u.useState(!1),
      [f, l] = u.useState(!1),
      w = u.useMemo(() => Ie.map((d) => ({ ...d, label: s(`interests.area.${d.key}`) })), [s]),
      k = u.useCallback(
        async (d) => {
          const y = a.includes(d) ? a.filter((i) => i !== d) : [...a, d];
          try {
            (l(!0), await m(y));
          } catch (i) {
            (console.error('Failed to update interests:', i),
              D.error({ errorMessage: i instanceof Error ? i.message : String(i), status: 500 }));
          } finally {
            l(!1);
          }
        },
        [a, m],
      ),
      o = u.useCallback(async () => {
        const d = c.trim();
        if (!d || a.includes(d)) return;
        const y = [...a, d];
        h('');
        try {
          (l(!0), await m(y));
        } catch (i) {
          (console.error('Failed to update interests:', i),
            D.error({ errorMessage: i instanceof Error ? i.message : String(i), status: 500 }));
        } finally {
          l(!1);
        }
      }, [c, a, m]),
      j = e.jsxs(n, {
        gap: 12,
        children: [
          e.jsxs(n, {
            horizontal: !0,
            align: 'center',
            gap: 8,
            justify: 'flex-end',
            wrap: 'wrap',
            children: [
              w.map((d) => {
                const y = a.includes(d.label);
                return e.jsxs(
                  B,
                  {
                    clickable: !0,
                    horizontal: !0,
                    gap: 8,
                    padding: 8,
                    variant: 'outlined',
                    style: y
                      ? {
                          background: I.colorFillSecondary,
                          borderColor: I.colorFillSecondary,
                          opacity: f ? 0.6 : 1,
                        }
                      : { opacity: f ? 0.6 : 1 },
                    onClick: () => !f && k(d.label),
                    children: [
                      e.jsx(U, { color: I.colorTextSecondary, icon: d.icon, size: 14 }),
                      e.jsx(x, { fontSize: 13, weight: 500, children: d.label }),
                    ],
                  },
                  d.key,
                );
              }),
              a
                .filter((d) => !w.some((y) => y.label === d))
                .map((d) =>
                  e.jsx(
                    B,
                    {
                      clickable: !0,
                      padding: 8,
                      variant: 'outlined',
                      style: {
                        background: I.colorFillSecondary,
                        borderColor: I.colorFillSecondary,
                        opacity: f ? 0.6 : 1,
                      },
                      onClick: () => !f && k(d),
                      children: e.jsx(x, { fontSize: 13, weight: 500, children: d }),
                    },
                    d,
                  ),
                ),
              e.jsxs(B, {
                clickable: !0,
                horizontal: !0,
                gap: 8,
                padding: 8,
                variant: 'outlined',
                style: p
                  ? { background: I.colorFillSecondary, borderColor: I.colorFillSecondary }
                  : {},
                onClick: () => g(!p),
                children: [
                  e.jsx(U, { color: I.colorTextSecondary, icon: je, size: 14 }),
                  e.jsx(x, { fontSize: 13, weight: 500, children: s('interests.area.other') }),
                ],
              }),
            ],
          }),
          p &&
            e.jsx(N, {
              placeholder: s('interests.placeholder'),
              size: 'small',
              style: { width: 200 },
              value: c,
              onChange: (d) => h(d.target.value),
              onPressEnter: o,
            }),
        ],
      });
    return r
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [e.jsx(x, { strong: !0, children: t('profile.interests') }), j],
        })
      : e.jsxs(n, {
          horizontal: !0,
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.interests') }),
            e.jsx(n, { align: 'flex-end', style: { flex: 1 }, children: j }),
          ],
        });
  },
  Ge = u.memo(({ server: r }) => {
    const { t } = C('auth'),
      [s, a] = u.useState(!1),
      m = ee((g) => g.removeKlavisServer),
      c = fe.find((g) => g.identifier === r.identifier),
      h = u.useCallback(() => {
        Q.confirm({
          content: t('profile.authorizations.revoke.description'),
          okButtonProps: { danger: !0 },
          onOk: async () => {
            a(!0);
            try {
              await m(r.identifier);
            } finally {
              a(!1);
            }
          },
          title: t('profile.authorizations.revoke.title', { name: c?.label || r.serverName }),
        });
      }, [m, r.identifier, r.serverName, c?.label, t]),
      p = () => {
        if (!c) return null;
        if (typeof c.icon == 'string') return e.jsx(Ce, { avatar: c.icon, size: 16 });
        const g = c.icon;
        return e.jsx(g, { size: 14 });
      };
    return e.jsx(le, {
      closable: !0,
      onClose: h,
      children: e.jsxs(n, {
        horizontal: !0,
        align: 'center',
        gap: 4,
        style: { opacity: s ? 0.5 : 1 },
        children: [p(), c?.label || r.serverName],
      }),
    });
  }),
  We = u.memo(({ servers: r }) =>
    e.jsx(n, {
      horizontal: !0,
      gap: 8,
      wrap: 'wrap',
      children: r.map((t) => e.jsx(Ge, { server: t }, t.identifier)),
    }),
  ),
  Xe = ({ mobile: r }) => {
    const { t } = C('auth'),
      s = v(A.userProfile),
      a = v(b.hasPasswordAccount),
      [m, c] = u.useState(!1),
      h = u.useCallback(async () => {
        if (s?.email)
          try {
            c(!0);
            const { requestPasswordReset: p } = await O(
              async () => {
                const { requestPasswordReset: g } = await import('./index-C8UyLGsD.js').then(
                  (f) => f.kF,
                );
                return { requestPasswordReset: g };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            );
            (await p({
              email: s.email,
              redirectTo: `/reset-password?email=${encodeURIComponent(s.email)}`,
            }),
              T.success({ message: t('profile.resetPasswordSent') }));
          } catch (p) {
            (console.error('Failed to send reset password email:', p),
              T.error({ message: t('profile.resetPasswordError') }));
          } finally {
            c(!1);
          }
      }, [s?.email, t]);
    return r
      ? e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 12,
          justify: 'space-between',
          style: S,
          children: [
            e.jsx(x, { strong: !0, children: t('profile.password') }),
            e.jsx(R, {
              loading: m,
              size: 'small',
              onClick: h,
              children: t(a ? 'profile.changePassword' : 'profile.setPassword'),
            }),
          ],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.password') }),
            e.jsx(n, {
              align: 'flex-end',
              style: { flex: 1 },
              children: e.jsx(R, {
                loading: m,
                size: 'small',
                onClick: h,
                children: t(a ? 'profile.changePassword' : 'profile.setPassword'),
              }),
            }),
          ],
        });
  },
  Ye = {
    'apple': Ne,
    'auth0': Le,
    'authelia': Fe.Color,
    'authentik': Re.Color,
    'casdoor': _e.Color,
    'cloudflare': Me.Color,
    'cognito': De.Color,
    'github': Be,
    'google': Te.Color,
    'logto': Ae.Color,
    'microsoft': Ue.Color,
    'microsoft-entra-id': be.Color,
    'zitadel': Pe.Color,
  },
  J = (r, t = 36) => {
    const s = Ye[r];
    return s ? e.jsx(s, { size: t }) : e.jsx(ye, { size: t });
  },
  Je = ['apple', 'google', 'github', 'cognito', 'microsoft'],
  Qe = { 'microsoft-entra-id': 'microsoft' },
  $ = (r) => Qe[r] || r,
  et = (r) => {
    const t = $(r);
    return Je.includes(t);
  },
  M = { textTransform: 'capitalize' },
  tt = u.memo(() => {
    const r = v(b.isLogin),
      t = v(b.authProviders),
      s = v(b.hasPasswordAccount),
      a = v((o) => o.refreshAuthProviders),
      m = V(K.oAuthSSOProviders),
      { t: c } = C('auth'),
      h = t.length > 1 || s,
      p = r,
      g = u.useMemo(() => new Set(t.map((o) => o.provider)), [t]),
      f = u.useMemo(() => (m || []).filter((o) => !g.has($(o))), [m, g]),
      l = async (o) => {
        if (!h) {
          T.error({ message: c('profile.sso.unlink.forbidden') });
          return;
        }
        Q.confirm({
          content: c('profile.sso.unlink.description', { provider: o }),
          okButtonProps: { danger: !0 },
          onOk: async () => {
            const { unlinkAccount: j } = await O(
              async () => {
                const { unlinkAccount: d } = await import('./index-C8UyLGsD.js').then((y) => y.kF);
                return { unlinkAccount: d };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            );
            (await j({ providerId: o }), a());
          },
          title: e.jsx('span', {
            style: M,
            children: c('profile.sso.unlink.title', { provider: o }),
          }),
        });
      },
      w = async (o) => {
        if (!p) return;
        const j = $(o),
          { linkSocial: d, oauth2: y } = await O(
            async () => {
              const { linkSocial: i, oauth2: z } = await import('./index-C8UyLGsD.js').then(
                (_) => _.kF,
              );
              return { linkSocial: i, oauth2: z };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
          );
        if (et(j)) {
          await d({ callbackURL: '/profile', provider: j });
          return;
        }
        await y.link({ callbackURL: '/profile', providerId: j });
      },
      k = f.map((o) => ({
        icon: J(o, 16),
        key: o,
        label: e.jsx('span', { style: M, children: o }),
        onClick: () => w(o),
      }));
    return e.jsxs(n, {
      gap: 8,
      children: [
        t.map((o) =>
          e.jsxs(
            n,
            {
              horizontal: !0,
              align: 'center',
              gap: 8,
              justify: 'space-between',
              children: [
                e.jsxs(n, {
                  horizontal: !0,
                  align: 'center',
                  gap: 6,
                  style: { fontSize: 12 },
                  children: [
                    J(o.provider, 16),
                    e.jsx('span', { style: M, children: o.provider }),
                    o.email &&
                      e.jsxs(x, { fontSize: 11, type: 'secondary', children: ['· ', o.email] }),
                  ],
                }),
                e.jsx(ce, { disabled: !h, icon: ve, size: 'small', onClick: () => l(o.provider) }),
              ],
            },
            [o.provider, o.providerAccountId].join('-'),
          ),
        ),
        p &&
          f.length > 0 &&
          e.jsx(Ee, {
            items: k,
            popupProps: { style: { maxWidth: '200px' } },
            children: e.jsxs(n, {
              horizontal: !0,
              align: 'center',
              gap: 6,
              style: { cursor: 'pointer', fontSize: 12 },
              children: [
                e.jsx(Se, { size: 14 }),
                e.jsx('span', { children: c('profile.sso.link.button') }),
                e.jsx(we, { size: 14 }),
              ],
            }),
          }),
      ],
    });
  }),
  rt = ({ mobile: r }) => {
    const { t } = C('auth'),
      s = v(A.username),
      a = v((i) => i.updateUsername),
      [m, c] = u.useState(!1),
      [h, p] = u.useState(''),
      [g, f] = u.useState(!1),
      l = u.useRef(null),
      w = /^\w+$/,
      k = (i) => {
        const z = i.trim();
        return z
          ? z.length > 64
            ? t('profile.usernameTooLong')
            : w.test(z)
              ? ''
              : t('profile.usernameRule')
          : t('profile.usernameRequired');
      },
      o = u.useCallback(async () => {
        const i = l.current?.input?.value?.trim();
        if (!i || i === s) {
          p('');
          return;
        }
        const z = k(i);
        if (z) {
          p(z);
          return;
        }
        try {
          (c(!0), p(''), await a(i), f(!1));
        } catch (_) {
          (console.error('Failed to update username:', _),
            _?.data?.code === 'CONFLICT' || _?.message === 'USERNAME_TAKEN'
              ? p(t('profile.usernameDuplicate'))
              : p(t('profile.usernameUpdateFailed')));
        } finally {
          c(!1);
        }
      }, [s, a, t]),
      j = (i) => {
        const z = i.target.value;
        if ((f(z.trim() !== (s || '')), !z.trim())) {
          p('');
          return;
        }
        if (!w.test(z)) {
          p(t('profile.usernameRule'));
          return;
        }
        p('');
      },
      d = u.useCallback(() => {
        (l.current?.input &&
          (Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(
            l.current.input,
            s || '',
          ),
          l.current.input.dispatchEvent(new Event('input', { bubbles: !0 }))),
          p(''),
          f(!1),
          l.current?.blur());
      }, [s]),
      y = e.jsx(n, {
        gap: 4,
        children: e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 8,
          children: [
            m && e.jsx(q, { indicator: e.jsx(H, { spin: !0 }), size: 'small' }),
            h &&
              e.jsx(x, {
                style: { fontSize: 12, whiteSpace: 'nowrap' },
                type: 'danger',
                children: h,
              }),
            g &&
              !m &&
              e.jsx(R, {
                size: 'small',
                variant: 'outlined',
                onMouseDown: (i) => {
                  (i.preventDefault(), d());
                },
                children: t('profile.cancel'),
              }),
            e.jsx(
              N,
              {
                defaultValue: s || '',
                disabled: m,
                placeholder: t('profile.usernamePlaceholder'),
                ref: l,
                status: h ? 'error' : void 0,
                style: r ? void 0 : { textAlign: 'right', width: te },
                variant: 'filled',
                onBlur: o,
                onChange: j,
                onPressEnter: o,
                onKeyDown: (i) => {
                  i.key === 'Escape' && (i.preventDefault(), d());
                },
              },
              s,
            ),
          ],
        }),
      });
    return r
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [e.jsx(x, { strong: !0, children: t('profile.username') }), y],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(x, { style: P, children: t('profile.username') }),
            e.jsx(n, { align: 'flex-end', style: { flex: 1 }, children: y }),
          ],
        });
  },
  L = ({ mobile: r }) =>
    r
      ? e.jsxs(n, {
          gap: 12,
          style: S,
          children: [
            e.jsx(F.Button, { active: !0, size: 'small', style: { height: 22, width: 60 } }),
            e.jsx(F.Button, { active: !0, size: 'small', style: { height: 22, width: 120 } }),
          ],
        })
      : e.jsxs(n, {
          horizontal: !0,
          align: 'center',
          gap: 24,
          style: S,
          children: [
            e.jsx(F.Button, { active: !0, size: 'small', style: { ...P, height: 22 } }),
            e.jsx(F.Button, {
              active: !0,
              size: 'small',
              style: { height: 22, marginInlineStart: 'auto', width: 120 },
            }),
          ],
        }),
  wr = ({ mobile: r }) => {
    const t = v(b.isLogin),
      [s, a] = v((j) => [A.userProfile(j), j.isLoaded]),
      m = v(b.isLoadedAuthProviders),
      c = v((j) => j.fetchAuthProviders),
      h = V(K.enableKlavis),
      p = V(K.disableEmailPassword),
      [g, f, l] = ee((j) => [j.servers, j.isServersInit, j.useFetchUserKlavisServers]),
      w = g.filter((j) => j.status === me.CONNECTED);
    l(h);
    const k = !a || (t && !m) || (h && !f);
    u.useEffect(() => {
      t && c();
    }, [t, c]);
    const { t: o } = C('auth');
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(pe, { title: o('profile.title') }),
        e.jsxs(ue, {
          collapsible: !1,
          gap: 16,
          title: o('profile.account'),
          variant: 'filled',
          children: [
            e.jsxs(n, {
              style: { display: k ? 'flex' : 'none' },
              children: [
                e.jsx(L, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(L, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(L, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(L, { mobile: r }),
              ],
            }),
            e.jsxs(n, {
              style: { display: k ? 'none' : 'flex' },
              children: [
                e.jsx(Ke, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(qe, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(rt, { mobile: r }),
                e.jsx(E, { style: { margin: 0 } }),
                e.jsx(Ze, { mobile: r }),
                t &&
                  !p &&
                  e.jsxs(e.Fragment, {
                    children: [e.jsx(E, { style: { margin: 0 } }), e.jsx(Xe, { mobile: r })],
                  }),
                t &&
                  s?.email &&
                  e.jsxs(e.Fragment, {
                    children: [e.jsx(E, { style: { margin: 0 } }), e.jsx(He, { mobile: r })],
                  }),
                t &&
                  !de &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(E, { style: { margin: 0 } }),
                      e.jsx(X, {
                        label: o('profile.sso.providers'),
                        mobile: r,
                        children: e.jsx(tt, {}),
                      }),
                    ],
                  }),
                h &&
                  w.length > 0 &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(E, { style: { margin: 0 } }),
                      e.jsx(X, {
                        label: o('profile.authorizations.title'),
                        mobile: r,
                        children: e.jsx(We, { servers: w }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { wr as default };
