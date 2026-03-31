import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { G as P } from './Grid-CdN2I7qJ.js';
import {
  g as b,
  F as s,
  $ as u,
  T as d,
  I as p,
  k as C,
  f as T,
  c as q,
  bz as G,
  L,
  Z as j,
} from './index-C8UyLGsD.js';
import { r as h } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as Y } from './AssistantEmpty-YPRCCezD.js';
import { B as M } from './Block-DDntSWi2.js';
import { A as R } from './index-BAOF5XWg.js';
import { q as U } from './base-AbuBx_QK.js';
import { P as J } from './PublishedTime-B_fy9H_1.js';
import { u as K } from './useQuery-C1-jdg1a.js';
import { d as Q } from './discover-H7COHXvN.js';
import { a as v } from './format-DpcrcXfF.js';
import { b9 as Z, ba as H, bb as O, ab as W } from '../vendor/vendor-icons-BHMUH78i.js';
import { I as X } from './index-DAR6aCpQ.js';
const k = T(({ css: e, cssVar: o }) => ({
    token: e`
      border-radius: 4px;

      font-family: ${o.fontFamilyCode};
      font-size: 11px;
      color: ${o.colorTextSecondary};

      background: ${o.colorFillTertiary};
    `,
  })),
  V = h.memo(
    ({
      tokenUsage: e,
      pluginCount: o,
      knowledgeCount: r,
      forkCount: i,
      placement: n = 'right',
    }) => {
      const { t: a } = b('discover');
      return t.jsxs(s, {
        horizontal: !0,
        align: 'center',
        gap: 4,
        children: [
          t.jsx(u, {
            placement: n,
            styles: { root: { pointerEvents: 'none' } },
            title: a('assistants.tokenUsage'),
            children: t.jsx(d, { className: k.token, icon: t.jsx(p, { icon: Z }), children: v(e) }),
          }),
          !!(i && i > 0) &&
            t.jsx(u, {
              placement: n,
              styles: { root: { pointerEvents: 'none' } },
              title: a('fork.forksCount', { count: i }),
              children: t.jsx(d, {
                className: k.token,
                icon: t.jsx(p, { icon: H }),
                children: v(i),
              }),
            }),
          !!(o && o > 0) &&
            t.jsx(u, {
              placement: n,
              styles: { root: { pointerEvents: 'none' } },
              title: a('assistants.withPlugin'),
              children: t.jsx(d, {
                icon: t.jsx(p, { fill: C.colorTextSecondary, icon: X }),
                children: o,
              }),
            }),
          !!(r && r > 0) &&
            t.jsx(u, {
              placement: n,
              styles: { root: { pointerEvents: 'none' } },
              title: a('assistants.withKnowledge'),
              children: t.jsx(d, { icon: t.jsx(p, { icon: O }), children: r }),
            }),
        ],
      });
    },
  ),
  c = T(({ css: e, cssVar: o }) => ({
    author: e`
      cursor: pointer;
      color: ${o.colorTextDescription};

      &:hover {
        color: ${o.colorPrimary};
      }
    `,
    code: e`
      font-family: ${o.fontFamilyCode};
    `,
    desc: e`
      flex: 1;
      margin: 0 !important;
      color: ${o.colorTextSecondary};
    `,
    footer: e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${o.colorBorder};
      background: ${o.colorBgContainer};
    `,
    secondaryDesc: e`
      font-size: 12px;
      color: ${o.colorTextDescription};
    `,
    title: e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${o.colorLink};
      }
    `,
  })),
  tt = h.memo(
    ({
      createdAt: e,
      updatedAt: o,
      author: r,
      avatar: i,
      title: n,
      description: a,
      category: $,
      identifier: m,
      tokenUsage: w,
      pluginCount: z,
      knowledgeCount: A,
      forkCount: B,
      backgroundColor: _,
      userName: l,
      type: E,
    }) => {
      const x = q(),
        { source: I } = K(),
        f = E === 'agent-group',
        D = f ? '/community/group_agent' : '/community/agent',
        g = U.stringifyUrl({ query: { source: I }, url: G(D, m) }, { skipNull: !0 }),
        { t: y } = b('discover'),
        S = h.useCallback(
          (N) => {
            (N.stopPropagation(), l && x(`/community/user/${l}`));
          },
          [l, x],
        ),
        F = h.useCallback(() => {
          (Q.reportAgentEvent({ event: 'click', identifier: m, source: location.pathname }).catch(
            () => {},
          ),
            x(g));
        }, [m, g, x]);
      return t.jsxs(M, {
        'clickable': !0,
        'data-testid': 'assistant-item',
        'height': '100%',
        'variant': 'outlined',
        'width': '100%',
        'style': { overflow: 'hidden', position: 'relative' },
        'onClick': F,
        'children': [
          f &&
            t.jsx(d, {
              color: 'info',
              style: { position: 'absolute', right: 12, top: 12, zIndex: 1 },
              children: y('groupAgents.tag', { defaultValue: '群组' }),
            }),
          t.jsx(s, {
            horizontal: !0,
            align: 'flex-start',
            gap: 16,
            justify: 'space-between',
            padding: 16,
            style: { paddingRight: f ? 80 : 16 },
            width: '100%',
            children: t.jsxs(s, {
              horizontal: !0,
              gap: 12,
              title: m,
              style: { overflow: 'hidden' },
              children: [
                t.jsx(R, {
                  avatar: i,
                  background: _ || 'transparent',
                  shape: 'square',
                  size: 40,
                  style: { flex: 'none' },
                }),
                t.jsxs(s, {
                  flex: 1,
                  gap: 2,
                  style: { overflow: 'hidden' },
                  children: [
                    t.jsx(s, {
                      horizontal: !0,
                      align: 'center',
                      flex: 1,
                      gap: 8,
                      style: { overflow: 'hidden' },
                      children: t.jsx(L, {
                        style: { color: 'inherit', overflow: 'hidden' },
                        to: g,
                        children: t.jsx(j, {
                          ellipsis: !0,
                          as: 'h2',
                          className: c.title,
                          children: n,
                        }),
                      }),
                    }),
                    r &&
                      t.jsx('div', {
                        className: l ? c.author : void 0,
                        style: l ? void 0 : { color: 'inherit' },
                        onClick: l ? S : void 0,
                        children: r,
                      }),
                  ],
                }),
              ],
            }),
          }),
          t.jsxs(s, {
            flex: 1,
            gap: 12,
            paddingInline: 16,
            children: [
              t.jsx(j, { as: 'p', className: c.desc, ellipsis: { rows: 3 }, children: a }),
              t.jsx(V, { forkCount: B, knowledgeCount: A, pluginCount: z, tokenUsage: w }),
            ],
          }),
          t.jsx(s, {
            horizontal: !0,
            align: 'center',
            className: c.footer,
            justify: 'space-between',
            padding: 16,
            children: t.jsxs(s, {
              horizontal: !0,
              align: 'center',
              className: c.secondaryDesc,
              justify: 'space-between',
              children: [
                t.jsxs(s, {
                  horizontal: !0,
                  align: 'center',
                  gap: 4,
                  children: [
                    t.jsx(p, { icon: W, size: 14 }),
                    t.jsx(J, {
                      className: c.secondaryDesc,
                      date: o || e,
                      template: 'MMM DD, YYYY',
                    }),
                  ],
                }),
                y(`category.assistant.${$}`),
              ],
            }),
          }),
        ],
      });
    },
  ),
  ut = h.memo(({ data: e = [], rows: o = 3 }) =>
    e.length === 0
      ? t.jsx(Y, {})
      : t.jsx(P, { rows: o, width: '100%', children: e.map((r, i) => t.jsx(tt, { ...r }, i)) }),
  );
export { ut as A, V as T };
