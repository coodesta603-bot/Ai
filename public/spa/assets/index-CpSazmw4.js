import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as c } from './store-DLK7hSbM.js';
import { A as j } from './assistants-Bnb1hBSy.js';
import { M as k } from './mcp-bmlNDBWs.js';
import { T as s } from './Title-CNSRjGIb.js';
import { A as L } from './index-D7-UoUwP.js';
import { M as _ } from './index-6E78qpe_.js';
import { g as p, by as w, F as g, j as n, B as y, f as v, r as i } from './index-C8UyLGsD.js';
import { L as h } from './ListLoading-Dv99wO_G.js';
import './discover-H7COHXvN.js';
import './general-Bhxy39g6.js';
import './object-CksihGcT.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './const-lbjNOSiN.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './Grid-CdN2I7qJ.js';
import './AssistantEmpty-YPRCCezD.js';
import './Empty-DHLc2EKW.js';
import './Block-DDntSWi2.js';
import './index-BAOF5XWg.js';
import './index-DiBbr-it.js';
import './index-bx4f06U_.js';
import './index-BSuyBMRZ.js';
import './base-AbuBx_QK.js';
import './PublishedTime-B_fy9H_1.js';
import './useQuery-C1-jdg1a.js';
import './navigation-BPKNAvqq.js';
import './format-DpcrcXfF.js';
import './currency-iJxIWo9y.js';
import './providerConfig-qS2Xx-oI.js';
import './index-DAR6aCpQ.js';
import './index-BsHwsvJB.js';
import './Spotlight-D7beHiMz.js';
import './Link-NDczSa-V.js';
import './index-DqcYNTWN.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import './index-DLsdvBKx.js';
const r = v(({ css: e }) => ({
    banner: e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${i.sm} {
      padding-block: 16px;
      padding-inline: 20px;
    }
  `,
    banner_dark: e`
    background: linear-gradient(135deg, #5c3d0e 0%, #7a4f10 50%, #6b3a08 100%);
  `,
    banner_light: e`
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);
  `,
    subtitle: e`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    ${i.sm} {
      font-size: 12px;
    }
  `,
    subtitle_dark: e`
    color: rgb(255 255 255 / 65%);
  `,
    subtitle_light: e`
    color: rgb(0 0 0 / 65%);
  `,
    symbols: e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;

    overflow: hidden;

    width: 50%;
    border-radius: 0 12px 12px 0;

    background: url('/images/banner_creator.png') right center / auto 100% no-repeat;

    ${i.sm} {
      display: none;
    }
  `,
    title: e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${i.sm} {
      font-size: 18px;
    }
  `,
    title_dark: e`
    color: rgb(255 255 255 / 88%);
  `,
    title_light: e`
    color: rgb(0 0 0 / 88%);
  `,
  })),
  u = m.memo(() => {
    const { t: e } = p('discover'),
      o = w();
    return t.jsxs(g, {
      className: n(r.banner, o ? r.banner_dark : r.banner_light),
      width: '100%',
      children: [
        t.jsxs(g, {
          gap: 8,
          style: { position: 'relative', zIndex: 1 },
          children: [
            t.jsx('h2', {
              className: n(r.title, o ? r.title_dark : r.title_light),
              children: e('home.creatorReward.title'),
            }),
            t.jsx('p', {
              className: n(r.subtitle, o ? r.subtitle_dark : r.subtitle_light),
              children: e('home.creatorReward.subtitle'),
            }),
            t.jsx('div', {
              style: { marginBlockStart: 4 },
              children: t.jsx('a', {
                href: 'https://lobehub.com/creator?utm_source=lobehub',
                rel: 'noopener noreferrer',
                target: '_blank',
                children: t.jsx(y, { type: 'primary', children: e('home.creatorReward.action') }),
              }),
            }),
          ],
        }),
        t.jsx('div', { className: r.symbols }),
      ],
    });
  }),
  A = m.memo(() => {
    const { t: e } = p('discover');
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(u, {}),
        t.jsx(s, {
          more: e('home.more'),
          moreLink: '/community/agent',
          children: e('home.featuredAssistants'),
        }),
        t.jsx(h, { length: 8, rows: 4 }),
        t.jsx('div', {}),
        t.jsx(s, {
          more: e('home.more'),
          moreLink: '/community/mcp',
          children: e('home.featuredTools'),
        }),
        t.jsx(h, { length: 8, rows: 4 }),
      ],
    });
  }),
  ct = m.memo(() => {
    const { t: e } = p('discover'),
      o = c((a) => a.useAssistantList),
      x = c((a) => a.useFetchMcpList),
      { data: d, isLoading: b } = o({ page: 1, pageSize: 12, sort: j.Recommended }),
      { data: l, isLoading: f } = x({ page: 1, pageSize: 12, sort: k.Recommended });
    return b || f || !d || !l
      ? t.jsx(A, {})
      : t.jsxs(t.Fragment, {
          children: [
            t.jsx(u, {}),
            t.jsx(s, {
              more: e('home.more'),
              moreLink: '/community/agent',
              children: e('home.featuredAssistants'),
            }),
            t.jsx(L, { data: d.items, rows: 4 }),
            t.jsx('div', {}),
            t.jsx(s, {
              more: e('home.more'),
              moreLink: '/community/mcp',
              children: e('home.featuredTools'),
            }),
            t.jsx(_, { data: l.items, rows: 4 }),
          ],
        });
  });
export { ct as default };
