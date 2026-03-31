import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { B as N } from './providerConfig-qS2Xx-oI.js';
import {
  g as d,
  X as k,
  F as U,
  C as F,
  I as _,
  bB as h,
  bC as b,
  h as S,
  f as v,
  bz as A,
  c as B,
  bD as I,
  B as T,
} from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { G as x, a as g } from './index-D0ZMbsXU.js';
import { bc as G, bd as M } from '../vendor/vendor-icons-BHMUH78i.js';
import { S as q } from './SearchBar-BtAHEw-s.js';
import { w as E } from './withSuspense-twnyXsUR.js';
import { u as H } from './useQueryRoute-neZlfwd2.js';
import { a as $, b as z } from './navigation-BPKNAvqq.js';
import { A as O } from './index-BAOF5XWg.js';
import { S as D } from './index-DLsdvBKx.js';
import { u as P, a as R } from './MarketAuthProvider-B-hpwwGW.js';
const L = v(
    ({ css: e, cssVar: a }) => e`
    font-size: 12px;
    color: ${a.colorTextSecondary};
  `,
  ),
  Q = 'settings-layout-footer',
  V = r.memo(() => {
    const { t: e } = d('common'),
      [a, o] = r.useState(!1),
      [i, l] = r.useState(!1);
    return k((s) => !!(s.featureFlags.hideGitHub || s.serverConfig.enableBusinessFeatures))
      ? null
      : t.jsxs(t.Fragment, {
          children: [
            t.jsx(U, {
              className: Q,
              justify: 'flex-end',
              children: t.jsx(F, {
                horizontal: !0,
                as: 'footer',
                className: L,
                flex: 'none',
                padding: 16,
                width: '100%',
                children: t.jsxs('div', {
                  style: { textAlign: 'center' },
                  children: [
                    t.jsx(_, { icon: G }),
                    ' ',
                    `${e('footer.title')} `,
                    t.jsx('a', {
                      'aria-label': 'star',
                      'href': h,
                      'onClick': (s) => {
                        (s.preventDefault(), o(!0));
                      },
                      'children': e('footer.action.star'),
                    }),
                    ` ${e('footer.and')} `,
                    t.jsx('a', {
                      'aria-label': 'feedback',
                      'href': b,
                      'onClick': (s) => {
                        (s.preventDefault(), l(!0));
                      },
                      'children': e('footer.action.feedback'),
                    }),
                    ' !',
                  ],
                }),
              }),
            }),
            t.jsx(x, {
              cancelText: e('footer.later'),
              desc: e('footer.star.desc'),
              okText: e('footer.star.action'),
              open: a,
              title: e('footer.star.title'),
              cover: t.jsx(g, {
                height: 269,
                src: 'https://hub-apac-1.lobeobjects.space/assets/star.mp4',
                width: 358,
              }),
              onCancel: () => o(!1),
              onOk: () => {
                S || window.open(h, '__blank');
              },
            }),
            t.jsx(x, {
              cancelText: e('footer.later'),
              desc: e('footer.feedback.desc', { appName: N }),
              okText: e('footer.feedback.action'),
              open: i,
              title: e('footer.feedback.title'),
              cover: t.jsx(g, {
                height: 269,
                src: '<@985522149420855317> https://hub-apac-1.lobeobjects.space/assets/feedback.mp4',
                width: 358,
              }),
              onCancel: () => l(!1),
              onOk: () => {
                S || window.open(b, '__blank');
              },
            }),
          ],
        });
  });
V.displayName = 'SettingFooter';
const J = 'ant';
v(({ css: e, cssVar: a }) => ({
  active: e`
    box-shadow: ${a.boxShadow};
  `,
  bar: e`
    .${J}-input-group-wrapper {
      padding: 0;
    }
  `,
}));
const W = r.memo(() => {
    const { t: e } = d('discover'),
      a = $(),
      { q: o } = z(),
      i = H(),
      [l, f] = r.useState(o || ''),
      s = a.split('/')[2] || 'agent',
      u = (n) => {
        i.push(A('/community', s), { query: n ? { q: n } : {}, replace: !0 });
      };
    return t.jsx(q, {
      'data-testid': 'search-bar',
      'defaultValue': o,
      'placeholder': e('search.placeholder'),
      'value': l,
      'variant': 'borderless',
      'style': { width: '100%' },
      'onSearch': u,
      'onInputChange': (n) => {
        (f(n), n || u(''));
      },
    });
  }),
  fe = E(W),
  X = (e, a) => (e ? (a ? !!!a.avatarUrl : !0) : !1),
  de = r.memo(() => {
    const { t: e } = d('discover'),
      a = B(),
      [o, i] = r.useState(!1),
      { isAuthenticated: l, isLoading: f, getCurrentUserInfo: s, signIn: u } = P(),
      n = k(I.enableMarketTrustedClient),
      p = s()?.sub,
      { data: c } = R(p),
      C = X(n, c),
      j = r.useCallback(async () => {
        i(!0);
        try {
          await u();
        } catch {}
        i(!1);
      }, [u]),
      y = r.useCallback(() => {
        const m = c?.userName || c?.namespace;
        m && a(`/community/user/${m}`);
      }, [a, c?.userName, c?.namespace]);
    if (f)
      return t.jsx(D.Avatar, { active: !0, shape: 'square', size: 28, style: { borderRadius: 6 } });
    if (!n && (!l || C))
      return t.jsx(T, {
        icon: M,
        loading: o,
        type: 'text',
        style: { height: 30 },
        onClick: j,
        children: e('user.login'),
      });
    const w = c?.avatarUrl;
    return t.jsx(O, { avatar: w || c?.userName || p, shape: 'square', size: 28, onClick: y });
  });
export { V as F, fe as S, de as U };
