import { L as F, V as z, a as B } from './index-D986vWty.js';
import {
  f as m,
  aw as M,
  k as p,
  F as g,
  I as y,
  j as t,
  bw as A,
  T as E,
} from './index-C8UyLGsD.js';
import { r as v } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aD as L, cT as W, aF as O, cU as R, cV as D } from '../vendor/vendor-icons-BHMUH78i.js';
import { G } from './Grid-CdN2I7qJ.js';
import { A as $ } from './index-B2Jw6NRR.js';
import { B as q } from './Block-DDntSWi2.js';
import { T as H } from './Tabs-Bq_UMJa3.js';
const f = m(({ css: e }) => ({
    container: e`
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      gap: 0.75em;

      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    `,
    content: e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * -1em);

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }

      p {
        color: inherit !important;
      }
    `,
    underlineAnchor: e`
      a {
        text-decoration: underline;
      }
    `,
  })),
  w = ({ children: e, type: a = 'info', className: o, style: i, ...l }) => {
    const n = M(),
      d = v.useMemo(
        () => ({
          error: { background: n.colorErrorFillTertiary, color: p.colorError, icon: D },
          important: { background: n.purpleFillTertiary, color: p.purple, icon: R },
          info: { background: n.colorInfoFillTertiary, color: p.colorInfo, icon: O },
          tip: { background: n.colorSuccessFillTertiary, color: p.colorSuccess, icon: W },
          warning: { background: n.colorWarningFillTertiary, color: p.colorWarning, icon: L },
        }),
        [n],
      ),
      { icon: u, color: c, background: s } = d?.[a] || d.info;
    return r.jsxs(g, {
      horizontal: !0,
      align: 'flex-start',
      className: t(f.container, o),
      style: { background: s, boxShadow: `0 0 0 1px ${s} inset`, color: c, ...i },
      ...l,
      children: [
        r.jsx(y, { icon: u, size: { size: '1.2em' }, style: { marginBlock: '0.25em' } }),
        r.jsx('div', {
          className: t(f.content, a === 'info' && f.underlineAnchor),
          children: r.jsx('div', { children: e }),
        }),
      ],
    });
  };
w.displayName = 'MdxCallout';
var K = w;
const U = m(({ css: e }) => ({
    container: e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

      > div {
        margin: 0 !important;
      }
    `,
  })),
  T = ({ children: e, className: a, maxItemWidth: o = 250, rows: i = 3, ...l }) =>
    r.jsx(G, { className: t(U.container, a), maxItemWidth: o, rows: i, ...l, children: e });
T.displayName = 'MdxCards';
var J = T;
const x = m(({ css: e, cssVar: a }) => ({
    card: e`
      --lobe-markdown-header-multiple: 0.2;
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      height: 100%;
      color: ${a.colorText};

      h3,
      p {
        margin-block: 0 !important;
      }

      p {
        color: ${a.colorTextDescription};
        transition: color 0.2s ${a.motionEaseInOut};
      }

      &:hover {
        p {
          color: ${a.colorTextSecondary};
        }

        .mdx-card-icon {
          opacity: 1;
        }
      }
    `,
    content: e`
      width: 100%;
      padding: 1.4em;
    `,
    icon: e`
      margin-block: 0.1em;
      opacity: 0.5;
      transition: opacity 0.2s ${a.motionEaseInOut};
    `,
  })),
  j = ({
    tag: e,
    tagColor: a = 'blue',
    icon: o,
    title: i,
    desc: l,
    href: n,
    iconProps: d,
    className: u,
    image: c,
    variant: s = 'filled',
    ...h
  }) =>
    r.jsx($, {
      href: n,
      children: r.jsxs(q, {
        clickable: !0,
        align: 'flex-start',
        className: t(x.card, u),
        variant: s,
        ...h,
        children: [
          c &&
            r.jsx(A, {
              alt: i,
              height: 100,
              src: c,
              style: { height: 'auto', width: '100%' },
              width: 250,
            }),
          e &&
            r.jsx(g, {
              align: 'flex-start',
              className: x.content,
              style: { paddingBottom: '0.2em', paddingTop: '1.8em' },
              children: r.jsx(E, {
                color: a,
                style: {
                  borderRadius: '1em',
                  fontSize: '0.8em',
                  fontWeight: 500,
                  paddingBlock: '0.1em',
                  paddingInline: '0.6em',
                },
                children: e,
              }),
            }),
          r.jsxs(g, {
            horizontal: !0,
            align: l ? 'flex-start' : 'center',
            className: x.content,
            gap: '0.75em',
            children: [
              !c &&
                o &&
                r.jsx(y, {
                  className: t(x.icon, 'mdx-card-icon'),
                  icon: o,
                  size: { size: '1.5em' },
                  ...d,
                }),
              r.jsxs(g, {
                gap: '0.2em',
                children: [r.jsx('h3', { children: i }), l && r.jsx('p', { children: l })],
              }),
            ],
          }),
        ],
      }),
    });
j.displayName = 'MdxCard';
var P = j;
const Q = m(({ css: e, cssVar: a }) => ({
    container: e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      color: ${a.colorTextSecondary};

      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    `,
    folder: e`
      cursor: pointer;

      &:hover {
        color: ${a.colorText};
      }
    `,
    folderChildren: e`
      padding-inline-start: 1em;
    `,
  })),
  N = ({ children: e, className: a, ...o }) =>
    r.jsx('div', { className: t(Q.container, a), ...o, children: e });
N.displayName = 'MdxFileTree';
var V = N;
const X = m(({ css: e, cssVar: a }) => ({
    container: e`
      --lobe-markdown-header-multiple: 0.5;
      --lobe-markdown-margin-multiple: 1;

      position: relative;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline-start: 2.5em;

      &::before {
        content: '';

        position: absolute;
        inset-block-start: 0.25em;
        inset-inline-start: 0.9em;

        display: block;

        width: 1px;
        height: calc(100% - 0.5em);

        background: ${a.colorBorderSecondary};
      }

      h3 {
        counter-increment: step;

        &::before {
          content: counter(step);

          position: absolute;
          z-index: 1;
          inset-inline-start: 0;

          display: inline-block;

          width: 1.8em;
          height: 1.8em;
          margin-block-start: -0.05em;
          border-radius: 9999px;

          font-size: 0.8em;
          font-weight: 500;
          line-height: 1.8em;
          color: ${a.colorTextSecondary};
          text-align: center;

          background: ${a.colorBgElevated};
          box-shadow: 0 0 0 2px ${a.colorBgLayout};
        }

        &:not(:first-child) {
          margin-block-start: 2em;
        }
      }
    `,
  })),
  C = ({ children: e, className: a, ...o }) =>
    r.jsx('div', { className: t(X.container, a), ...o, children: e });
C.displayName = 'MdxSteps';
var Y = C;
const k = m(({ css: e }) => ({
    body: e`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }
    `,
    container: e`
      /* Container styles */
    `,
    header: e`
      /* Header styles */
    `,
  })),
  Z = ({
    defaultIndex: e = '0',
    items: a,
    children: o,
    className: i,
    tabNavProps: l = {},
    ...n
  }) => {
    const { className: d, onChange: u, ...c } = l,
      [s, h] = v.useState(String(e)),
      S = Number(s);
    return r.jsxs(g, {
      className: t(k.container, i),
      ...n,
      children: [
        r.jsx(H, {
          compact: !0,
          activeKey: s,
          className: t(k.header, d),
          items: a.map((b, I) => ({ key: String(I), label: b })),
          onChange: (b) => {
            (h(b), u?.(b));
          },
          ...c,
        }),
        o?.[S] || '',
      ],
    });
  };
var ee = Z;
const _ = ({ children: e, className: a, ...o }) =>
  r.jsx('div', { className: t(k.body, a), ...o, children: r.jsx('div', { children: e }) });
_.displayName = 'MdxTab';
var ae = _;
const re = {
  Callout: K,
  Card: P,
  Cards: J,
  FileTree: V,
  Image: B,
  Steps: Y,
  Tab: ae,
  Tabs: ee,
  Video: z,
  a: F,
};
var ue = re;
export { ue as m };
