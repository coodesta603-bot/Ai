import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  F as l,
  f as H,
  b1 as Y,
  M as D,
  eV as j,
  b2 as q,
  Z,
  f3 as K,
  j as N,
  g as _,
  N as A,
  B as M,
  aY as I,
  f4 as E,
  aI as Q,
  ax as O,
  bx as W,
  cI as X,
} from './index-C8UyLGsD.js';
import { c as ee } from './imperative-Cstfu8oK.js';
import { S as F } from './Segmented-9Z1phQkA.js';
import { S as oe } from './index-DLsdvBKx.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  C as te,
  u as ae,
  M as se,
  P as re,
  s as w,
  a as T,
  b as ne,
  c as x,
  g as le,
  S as ie,
  d as de,
} from './index-bsLCy3LH.js';
import { F as C } from './index-IVfJW6S-.js';
import { I as ce, u as he, i as pe } from './useScreenshot-BaKTLRpe.js';
import { A as me } from './index-BAOF5XWg.js';
import { M as B } from './Markdown-Mtmmwid1.js';
import { P as ue } from './index-rtGHY7ZI.js';
import { M as ge } from './index-BBHpQOoQ.js';
import { S as f } from './index-CaOmqfDS.js';
import { cO as z } from '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import { a as U } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { c as L } from './object-CksihGcT.js';
import { S as xe } from './index-BgCNGb7v.js';
const V = i.memo(({ ids: t }) => {
  const s = ae((r) => r.displayMessages.map((n) => n.id)),
    a = t.length > 0 ? t : s;
  return e.jsx(l, {
    height: '100%',
    style: { padding: 24, pointerEvents: 'none', position: 'relative' },
    width: '100%',
    children: a.map((r, n) => e.jsx(se, { id: r, index: n }, r)),
  });
});
V.displayName = 'ShareImageChatListContent';
const be = i.memo(({ context: t, ids: s, messages: a }) => {
    const r = a.length > 0;
    return e.jsx(te, {
      context: t,
      hasInitMessages: r,
      messages: a,
      skipFetch: !0,
      children: e.jsx(V, { ids: s }),
    });
  }),
  y = H(({ css: t, cssVar: s }) => ({
    background: t`
    padding: 24px;

    background-color: ${s.colorBgLayout};
    background-image: url(${Y('screenshot_background.webp')});
    background-position: center;
    background-size: 120% 120%;
  `,
    container: t`
    background: ${s.colorBgContainer};
  `,
    container_withBackground_true: t`
    overflow: hidden;
    border: 2px solid ${s.colorBorder};
    border-radius: ${s.borderRadiusLG};
  `,
    footer: t`
    padding: 16px;
    border-block-start: 1px solid ${s.colorBorder};
  `,
    header: t`
    margin-block-end: -24px;
    padding-block: 16px;
    padding-inline: 24px;
    border-block-end: 1px solid ${s.colorBorder};

    background: ${s.colorBgContainer};
  `,
    role: t`
    margin-block-start: 12px;
    padding-block-start: 12px;
    border-block-start: 1px dashed ${s.colorBorderSecondary};
    opacity: 0.75;

    * {
      font-size: 12px !important;
    }
  `,
    url: t`
    color: ${s.colorTextDescription};
  `,
  }));
var S = ((t) => ((t.Narrow = 'narrow'), (t.Wide = 'wide'), t))(S || {});
const ve = i.memo(
    ({
      context: t,
      messages: s,
      title: a,
      withSystemRole: r,
      withBackground: n,
      withFooter: o,
      widthMode: m,
    }) => {
      const [h, u, c, b, v, p] = D((d) => [
          j.currentAgentModel(d),
          j.displayableAgentPlugins(d),
          j.currentAgentSystemRole(d),
          q.isInboxAgent(d),
          j.currentAgentDescription(d),
          j.currentAgentAvatar(d),
          j.currentAgentBackgroundColor(d),
        ]),
        g = b ? 'Lobe AI' : a;
      return e.jsx('div', {
        className: N(w.preview, m === S.Narrow ? w.previewNarrow : w.previewWide),
        children: e.jsx('div', {
          className: n ? y.background : void 0,
          id: 'preview',
          children: e.jsxs(l, {
            className: N(y.container, n && y.container_withBackground_true),
            gap: 16,
            children: [
              e.jsxs('div', {
                className: y.header,
                children: [
                  e.jsxs(l, {
                    horizontal: !0,
                    align: 'center',
                    gap: 12,
                    children: [
                      e.jsx(me, { avatar: v, background: p, shape: 'square', size: 28, title: a }),
                      e.jsx(Z, { strong: !0, fontSize: 16, children: g }),
                      e.jsxs(l, {
                        horizontal: !0,
                        gap: 4,
                        children: [
                          e.jsx(ge, { model: h }),
                          u?.length > 0 && e.jsx(re, { plugins: u }),
                        ],
                      }),
                    ],
                  }),
                  r &&
                    c &&
                    e.jsx('div', {
                      className: y.role,
                      children: e.jsx(B, { variant: 'chat', children: c }),
                    }),
                ],
              }),
              e.jsx(be, { context: t, ids: [], messages: s }),
              o
                ? e.jsxs(l, {
                    align: 'center',
                    className: y.footer,
                    gap: 4,
                    children: [
                      e.jsx(ue, { type: 'combine' }),
                      e.jsx('div', { className: y.url, children: K.homepage }),
                    ],
                  })
                : e.jsx('div', {}),
            ],
          }),
        }),
      });
    },
  ),
  P = {
    imageType: ce.JPG,
    widthMode: S.Wide,
    withBackground: !1,
    withFooter: !0,
    withPluginInfo: !1,
    withSystemRole: !1,
  },
  ye = i.memo(() => {
    const t = D(j.currentAgentTitle),
      [s, a] = i.useState(P),
      { t: r } = _(['chat', 'common']),
      { context: n, dbMessages: o } = T(),
      { loading: m, onDownload: h, title: u } = he({ imageType: s.imageType, title: t ?? void 0 }),
      { loading: c, onCopy: b } = ne(),
      v = [
        { label: r('shareModal.widthMode.wide'), value: S.Wide },
        { label: r('shareModal.widthMode.narrow'), value: S.Narrow },
      ],
      p = [
        {
          children: e.jsx(F, { options: v }),
          label: r('shareModal.widthMode.label'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'widthMode',
        },
        {
          children: e.jsx(f, {}),
          label: r('shareModal.withSystemRole'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'withSystemRole',
          valuePropName: 'checked',
        },
        {
          children: e.jsx(f, {}),
          label: r('shareModal.withFooter'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'withFooter',
          valuePropName: 'checked',
        },
        {
          children: e.jsx(F, { options: pe }),
          label: r('shareModal.imageType'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'imageType',
        },
      ],
      g = A(),
      d = e.jsxs(e.Fragment, {
        children: [
          e.jsx(M, {
            block: !0,
            icon: z,
            loading: c,
            size: g ? void 0 : 'large',
            type: 'primary',
            onClick: () => b(),
            children: r('copy', { ns: 'common' }),
          }),
          e.jsx(M, {
            block: !0,
            loading: m,
            size: g ? void 0 : 'large',
            onClick: h,
            children: r('shareModal.download'),
          }),
        ],
      });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(l, {
          className: x.body,
          gap: 16,
          horizontal: !g,
          children: [
            e.jsx(ve, { context: n, messages: o, title: u, ...s }),
            e.jsxs(l, {
              className: x.sidebar,
              gap: 12,
              children: [
                e.jsx(C, {
                  initialValues: P,
                  items: p,
                  itemsType: 'flat',
                  onValuesChange: (k, G) => a(G),
                  ...I,
                }),
                !g && d,
              ],
            }),
          ],
        }),
        g && e.jsx(l, { horizontal: !0, className: x.footer, gap: 8, children: d }),
      ],
    });
  }),
  je = ({ topic: t, messages: s, systemRole: a, withSystemRole: r }) => {
    const n = s
      .filter((o) => o.content !== E)
      .map((o) =>
        L({
          content: o.content,
          createdAt: new Date(o.createdAt).toISOString(),
          error: o.error,
          id: o.id,
          model: o.model,
          parentId: o.parentId,
          provider: o.provider,
          role: o.role,
          updatedAt: new Date(o.updatedAt).toISOString(),
          plugin: o.plugin,
          pluginError: o.pluginError,
          pluginIntervention: o.pluginIntervention,
          pluginState: o.pluginState,
          tool_call_id: o.tool_call_id,
          tools: o.tools,
          metadata: o.metadata,
          reasoning: o.reasoning,
          search: o.search,
          traceId: o.traceId,
        }),
      );
    if (r && a) {
      const o = new Date().toISOString();
      n.unshift({ content: a, createdAt: o, id: 'system-role', role: 'system', updatedAt: o });
    }
    return L({
      version: '2.0',
      title: t?.title,
      messages: n,
      exportedAt: new Date().toISOString(),
    });
  },
  fe = ({ messages: t, withSystemRole: s, includeTool: a, systemRole: r }) => {
    const n = t
      .filter((o) => o.content !== E)
      .filter((o) => !0)
      .map((o) => ({
        content: o.content.trim(),
        role: o.role,
        tool_call_id: o.tool_call_id ? o.tool_call_id : void 0,
        tools: o.tools ? o.tools : void 0,
      }));
    return s && r ? [{ content: r, role: 'system' }, ...n] : n;
  },
  we = i.memo(({ content: t }) =>
    e.jsx('div', {
      className: N(w.preview, w.previewWide),
      style: { padding: 16 },
      children: e.jsx(Q, {
        wrap: !0,
        language: 'json',
        variant: 'borderless',
        style: { fontSize: 12 },
        children: t,
      }),
    }),
  ),
  R = { exportMode: 'full', includeTool: !0, withSystemRole: !0 },
  Me = i.memo(() => {
    const [t, s] = i.useState(R),
      { t: a } = _(['chat', 'common']),
      { message: r } = O.useApp(),
      n = i.useMemo(
        () => [
          { label: a('shareModal.exportMode.full'), value: 'full' },
          { label: a('shareModal.exportMode.simple'), value: 'simple' },
        ],
        [a],
      ),
      o = [
        {
          children: e.jsx(xe, {
            block: !0,
            options: n,
            value: t.exportMode,
            onChange: (d) => s((k) => ({ ...k, exportMode: d })),
          }),
          label: a('shareModal.exportMode.label'),
          layout: 'vertical',
          minWidth: void 0,
          name: 'exportMode',
        },
        {
          children: e.jsx(f, {}),
          label: a('shareModal.withSystemRole'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'withSystemRole',
          valuePropName: 'checked',
        },
      ],
      { dbMessages: m, systemRole: h, title: u, topic: c } = T(),
      b =
        t.exportMode === 'simple'
          ? fe({ ...t, includeTool: !0, messages: m, systemRole: h ?? '' })
          : je({ ...t, messages: m, systemRole: h ?? '', topic: c ?? void 0 }),
      v = JSON.stringify(b, null, 2),
      p = A(),
      g = e.jsxs(e.Fragment, {
        children: [
          e.jsx(M, {
            block: !0,
            icon: z,
            size: p ? void 0 : 'large',
            type: 'primary',
            onClick: async () => {
              (await W(v), r.success(a('copySuccess', { ns: 'common' })));
            },
            children: a('copy', { ns: 'common' }),
          }),
          e.jsx(M, {
            block: !0,
            size: p ? void 0 : 'large',
            onClick: () => {
              U(v, `${u}.json`);
            },
            children: a('shareModal.downloadFile'),
          }),
        ],
      });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(l, {
          className: x.body,
          gap: 16,
          horizontal: !p,
          children: [
            e.jsx(we, { content: v }),
            e.jsxs(l, {
              className: x.sidebar,
              gap: 12,
              children: [
                e.jsx(C, {
                  initialValues: R,
                  items: o,
                  itemsType: 'flat',
                  onValuesChange: (d, k) => s(k),
                  ...I,
                }),
                !p && g,
              ],
            }),
          ],
        }),
        p && e.jsx(l, { horizontal: !0, className: x.footer, gap: 8, children: g }),
      ],
    });
  }),
  Se = i.memo(({ content: t }) =>
    e.jsx('div', {
      className: N(w.preview, w.previewWide),
      style: { padding: 12 },
      children: e.jsx(B, { variant: 'chat', children: t }),
    }),
  ),
  $ = { includeTool: !0, includeUser: !0, withRole: !0, withSystemRole: !1 },
  ke = i.memo(() => {
    const [t, s] = i.useState($),
      { t: a } = _(['chat', 'common']),
      { message: r } = O.useApp(),
      n = [
        {
          children: e.jsx(f, {}),
          label: a('shareModal.withSystemRole'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'withSystemRole',
          valuePropName: 'checked',
        },
        {
          children: e.jsx(f, {}),
          label: a('shareModal.withRole'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'withRole',
          valuePropName: 'checked',
        },
        {
          children: e.jsx(f, {}),
          label: a('shareModal.includeUser'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'includeUser',
          valuePropName: 'checked',
        },
        {
          children: e.jsx(f, {}),
          label: a('shareModal.includeTool'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'includeTool',
          valuePropName: 'checked',
        },
      ],
      { displayMessages: o, systemRole: m, title: h } = T(),
      u = le({ ...t, messages: o, systemRole: m ?? '', title: h }).replaceAll(
        `


`,
        `
`,
      ),
      c = A(),
      b = e.jsxs(e.Fragment, {
        children: [
          e.jsx(M, {
            block: !0,
            icon: z,
            size: c ? void 0 : 'large',
            type: 'primary',
            onClick: async () => {
              (await W(u), r.success(a('copySuccess', { ns: 'common' })));
            },
            children: a('copy', { ns: 'common' }),
          }),
          e.jsx(M, {
            block: !0,
            size: c ? void 0 : 'large',
            onClick: () => {
              U(u, `${h}.md`);
            },
            children: a('shareModal.downloadFile'),
          }),
        ],
      });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(l, {
          className: x.body,
          gap: 16,
          horizontal: !c,
          children: [
            e.jsx(Se, { content: u }),
            e.jsxs(l, {
              className: x.sidebar,
              gap: 12,
              children: [
                e.jsx(C, {
                  initialValues: $,
                  items: n,
                  itemsType: 'flat',
                  onValuesChange: (v, p) => s(p),
                  ...I,
                }),
                !c && b,
              ],
            }),
          ],
        }),
        c && e.jsx(l, { horizontal: !0, className: x.footer, gap: 8, children: b }),
      ],
    });
  }),
  J = i.memo(() => {
    const [t, s] = i.useState('screenshot'),
      { t: a } = _('chat'),
      r = A(),
      { dbMessages: n, isLoading: o } = T(),
      m = i.useMemo(
        () => [
          { label: a('shareModal.screenshot'), value: 'screenshot' },
          { label: a('shareModal.text'), value: 'text' },
          { label: a('shareModal.pdf'), value: 'pdf' },
          { label: 'JSON', value: 'json' },
        ],
        [a],
      );
    return e.jsxs(l, {
      gap: r ? 8 : 24,
      height: '100%',
      style: { overflow: 'hidden', position: 'relative' },
      children: [
        e.jsx(F, {
          block: !0,
          options: m,
          style: { width: '100%' },
          value: t,
          variant: 'filled',
          onChange: (h) => s(h),
        }),
        o && n.length === 0
          ? e.jsx(l, {
              gap: 12,
              paddingBlock: 8,
              children: e.jsx(oe, { active: !0, paragraph: { rows: 8 } }),
            })
          : e.jsxs(e.Fragment, {
              children: [
                t === 'screenshot' && e.jsx(ye, { mobile: r }),
                t === 'text' && e.jsx(ke, {}),
                t === 'pdf' && e.jsx(de, {}),
                t === 'json' && e.jsx(Me, {}),
              ],
            }),
      ],
    });
  });
J.displayName = 'ShareModalContent';
const He = ({ afterClose: t, context: s } = {}) =>
  ee({
    afterClose: t,
    allowFullscreen: !0,
    centered: !0,
    children: e.jsx(ie, { context: s, children: e.jsx(J, {}) }),
    destroyOnHidden: !0,
    footer: null,
    height: '80vh',
    styles: { body: { height: '80vh' } },
    title: X('share', { ns: 'common' }),
    width: 'min(90vw, 1024px)',
  });
export { He as o };
