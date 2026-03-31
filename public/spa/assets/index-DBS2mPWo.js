const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-C3b-u_kS.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/tools-grZ3gd_F.js',
    ]),
) => i.map((i) => d[i]);
import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  g as U,
  C as O,
  F as u,
  Z as I,
  k as m,
  bf as x,
  I as C,
  f as R,
  _ as $,
  bn as z,
} from './index-C8UyLGsD.js';
import { F as W } from './providerConfig-qS2Xx-oI.js';
import { G as J, a as Z } from './index-D0ZMbsXU.js';
import { N as B } from './index-0kThxxSh.js';
import { u as H, I as M } from './useNotionImport-i-455VJo.js';
import { u as k, D as q } from './store-8fdqmFXe.js';
import { u as y } from './store-B8XKtjEP.js';
import { s as K } from './identifier-DNYzSWMy.js';
import { a_ as Q, a$ as V } from '../vendor/vendor-icons-BHMUH78i.js';
import { U as X } from './index-C2-gySBL.js';
import { T as Y } from './PageTitle-L-Sg_uQP.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './ToggleLeftPanelButton-MPNqlyqh.js';
import './index-BsHwsvJB.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-BrqBWuO3.js';
import './progress-CqsUaYIW.js';
import './index-BSuyBMRZ.js';
import './index-DDvtsgDb.js';
import './store-CMvu1t2Y.js';
import './GlobalAgentContextManager-DltpMSoH.js';
import './ipc-wTHpVC92.js';
const w = 80,
  r = R(({ css: d, cssVar: s }) => ({
    actionTitle: d`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${s.colorTextSecondary};
  `,
    card: d`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${s.borderRadiusLG};

    font-weight: 500;
    text-align: center;

    background: ${s.colorFillTertiary};
    box-shadow: 0 0 0 1px ${s.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${s.colorFillSecondary};
    }
  `,
    glow: d`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,
    icon: d`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `,
  })),
  ee = g.memo(({ hasPages: d = !1, knowledgeBaseId: s }) => {
    const { t: n } = U(['file', 'common']),
      [h, j] = g.useState(!1),
      [F, N, D, f, S] = y((a) => [
        a.createNewPage,
        a.createOptimisticPage,
        a.replaceTempPageWithReal,
        a.setSelectedPageId,
        a.fetchDocuments,
      ]),
      [P] = k((a) => [a.createDocument]),
      p = H({
        createDocument: P,
        currentFolderId: null,
        libraryId: s ?? null,
        refetchResources: S,
        t: n,
      }),
      _ = async (a) => {
        await p.handleNotionImport(a);
      },
      T = async (a, i) => {
        if (!a) {
          await F(i);
          return;
        }
        const l = N(i);
        f(l, !1);
        try {
          const t = await P({ content: a, knowledgeBaseId: s, title: i }),
            c = {
              content: t.content || '',
              createdAt: t.createdAt ? new Date(t.createdAt) : new Date(),
              editorData:
                typeof t.editorData == 'string' ? JSON.parse(t.editorData) : t.editorData || null,
              fileType: 'custom/document',
              filename: t.title || i,
              id: t.id,
              metadata: t.metadata || {},
              source: 'document',
              sourceType: q.EDITOR,
              title: t.title || i,
              totalCharCount: t.content?.length || 0,
              totalLineCount: 0,
              updatedAt: t.updatedAt ? new Date(t.updatedAt) : new Date(),
            };
          (D(l, c), f(t.id));
        } catch (t) {
          throw (
            console.error('Failed to create page:', t),
            y.getState().removeTempPage(l),
            f(null),
            t
          );
        }
      },
      A = async (a) => {
        try {
          j(!0);
          const i = a.name.split('.').pop()?.toLowerCase();
          if (i === 'md' || i === 'markdown') {
            const l = await a.text();
            await T(l, a.name.replace(/\.md$|\.markdown$/i, ''));
          } else if (i === 'pdf' || i === 'docx') {
            const l = a.name.replace(/\.(pdf|docx)$/i, ''),
              t = N(l);
            try {
              const c = await k.getState().uploadWithProgress({ file: a, knowledgeBaseId: s });
              if (!c) throw new Error('Failed to upload file');
              const { lambdaClient: E } = await $(
                  async () => {
                    const { lambdaClient: L } = await import('./index-C3b-u_kS.js');
                    return { lambdaClient: L };
                  },
                  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                ),
                o = await E.document.parseDocument.mutate({ id: c.id }),
                v = {
                  content: o.content || '',
                  createdAt: o.createdAt ? new Date(o.createdAt) : new Date(),
                  editorData:
                    typeof o.editorData == 'string'
                      ? JSON.parse(o.editorData)
                      : o.editorData || null,
                  fileType: o.fileType || 'custom/document',
                  filename: o.filename || l,
                  id: o.id,
                  metadata: o.metadata || {},
                  source: o.source || 'document',
                  sourceType: o.sourceType || 'file',
                  title: o.title || l,
                  totalCharCount: o.totalCharCount || 0,
                  totalLineCount: o.totalLineCount || 0,
                  updatedAt: o.updatedAt ? new Date(o.updatedAt) : new Date(),
                };
              (D(t, v), f(o.id, !1));
              const b = K(o.id),
                G = b ? `/page/${b}` : '/page';
              window.history.replaceState({}, '', G);
            } catch (c) {
              throw (
                console.error('Failed to upload and parse file:', c),
                y.getState().removeTempPage(t),
                c
              );
            }
          }
        } catch (i) {
          console.error('Failed to upload file:', i);
        } finally {
          j(!1);
        }
        return !1;
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(B, {}),
        e.jsxs(O, {
          gap: 24,
          height: '100%',
          style: { paddingBottom: 100 },
          width: '100%',
          children: [
            d &&
              e.jsxs(u, {
                justify: 'center',
                style: { textAlign: 'center' },
                children: [
                  e.jsx(I, { as: 'h4', children: n('pageEditor.empty.title') }),
                  e.jsx(I, { type: 'secondary', children: n('or', { ns: 'common' }) }),
                ],
              }),
            e.jsxs(u, {
              horizontal: !0,
              gap: 12,
              children: [
                e.jsxs(u, {
                  className: r.card,
                  padding: 16,
                  onClick: () => T('', n('pageList.untitled')),
                  children: [
                    e.jsx('span', {
                      className: r.actionTitle,
                      children: n('pageEditor.empty.createNewDocument'),
                    }),
                    e.jsx('div', { className: r.glow, style: { background: m.purple } }),
                    e.jsx(x, {
                      className: r.icon,
                      color: m.purple,
                      icon: e.jsx(C, { color: '#fff', icon: Q }),
                      size: w,
                      type: 'file',
                    }),
                  ],
                }),
                e.jsx(X, {
                  accept: '.md,.markdown,.pdf,.docx',
                  beforeUpload: A,
                  disabled: h,
                  multiple: !1,
                  showUploadList: !1,
                  children: e.jsxs(u, {
                    className: r.card,
                    padding: 16,
                    style: { opacity: h ? 0.5 : 1 },
                    children: [
                      e.jsx('span', {
                        className: r.actionTitle,
                        children: h ? 'Uploading...' : n('pageEditor.empty.uploadFiles'),
                      }),
                      e.jsx('div', { className: r.glow, style: { background: m.gold } }),
                      e.jsx(x, {
                        className: r.icon,
                        color: m.gold,
                        icon: e.jsx(C, { color: '#fff', icon: V }),
                        size: w,
                        type: 'file',
                      }),
                    ],
                  }),
                }),
                e.jsxs(u, {
                  className: r.card,
                  padding: 16,
                  onClick: p.handleOpenNotionGuide,
                  children: [
                    e.jsx('span', {
                      className: r.actionTitle,
                      children: n('pageEditor.empty.importNotion'),
                    }),
                    e.jsx('div', { className: r.glow, style: { background: m.geekblue } }),
                    e.jsx(x, {
                      className: r.icon,
                      color: m.geekblue,
                      icon: e.jsx(M, { color: '#fff' }),
                      size: w,
                      type: 'file',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(J, {
          cancelText: n('header.actions.notionGuide.cancel'),
          cover: e.jsx(Z, { height: 269, src: W.importFromNotionGuide, width: 358 }),
          desc: n('header.actions.notionGuide.desc'),
          okText: n('header.actions.notionGuide.ok'),
          open: p.notionGuideOpen,
          title: n('header.actions.notionGuide.title'),
          onCancel: p.handleCloseNotionGuide,
          onOk: p.handleStartNotionImport,
        }),
        e.jsx('input', {
          accept: '.zip',
          ref: p.notionInputRef,
          style: { display: 'none' },
          type: 'file',
          onChange: _,
        }),
      ],
    });
  }),
  te = g.memo(() =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(Y, {}),
        e.jsx(g.Suspense, {
          fallback: e.jsx(z, { debugId: 'PagesPage' }),
          children: e.jsx(ee, {}),
        }),
      ],
    }),
  );
te.displayName = 'PagesPage';
export { te as default };
