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
import { j as t, M as ne } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  ao as We,
  d as Oe,
  c as xe,
  l as ze,
  F as A,
  A as se,
  I as $,
  j as ae,
  f as ce,
  g as de,
  ax as ee,
  B as Q,
  au as Ne,
  bx as He,
  _ as ve,
  bP as Ue,
  bA as fe,
  di as Ye,
  J as Ve,
  k as N,
} from './index-C8UyLGsD.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as Ce } from './index-8VUivPam.js';
import { t as Ge } from './index-yRquFwd4.js';
import { u as V } from './index-BneFsgq9.js';
import { u as U, b as Y, d as Xe } from './store-8fdqmFXe.js';
import { u as Te } from './store-B9jA_OfS.js';
import { B as ge } from './Block-DDntSWi2.js';
import { b as pe } from './SortableList-Cl2V_SXC.js';
import {
  b5 as be,
  $ as re,
  cW as me,
  cX as qe,
  cY as Qe,
  P as Je,
  b2 as Ze,
  bz as er,
  aH as rr,
  F as Se,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { a as tr } from './imperative-Cstfu8oK.js';
import { L as he } from './index-MCldJNYW.js';
import { u as or } from './useAppOrigin-DDAfPwvo.js';
import { d as ye } from './downloadFile-DYbfnmZ_.js';
import { M as nr } from './Modal-Dd2pIxVd.js';
import { R as Ie } from './Table-BlWKciej.js';
import { I as sr } from './index-OkOG2AHU.js';
import { S as Fe } from './index-DLsdvBKx.js';
const ar = () => {
    const e = We(),
      n = Oe(),
      h = e.id || null,
      s = n.pathname.includes('/resource/library/');
    return { currentFolderSlug: e.slug || null, isInKnowledgeBase: s, knowledgeBaseId: h };
  },
  je = o.createContext(null),
  ke = o.memo(({ children: e }) => {
    const n = Te((p) => p.useFetchKnowledgeBaseList),
      { data: h } = n(),
      s = o.useMemo(() => h ?? [], [h]);
    return t.jsx(je, { value: s, children: e });
  });
ke.displayName = 'KnowledgeBaseListProvider';
const lr = () => {
    const e = o.use(je);
    if (!e)
      throw new Error('useKnowledgeBaseListContext must be used within KnowledgeBaseListProvider');
    return e;
  },
  Ee = 'custom/document',
  ir = ({ id: e, slug: n, libraryId: h, isFolder: s, isPage: p, onOpen: F }) => {
    const c = xe(),
      [a, l] = ze(),
      f = V((g) => g.setMode),
      i = V((g) => g.setCurrentViewItemId);
    return o.useCallback(() => {
      if (s) {
        const g = n || e;
        if (h) {
          const x = new URLSearchParams(a);
          x.delete('file');
          const S = x.toString(),
            j = `/resource/library/${h}/${g}`;
          c(S ? `${j}?${S}` : j);
        }
      } else
        p
          ? (i(e),
            f('page'),
            l(
              (g) => {
                const x = new URLSearchParams(g);
                return (x.set('file', e), x);
              },
              { replace: !0 },
            ))
          : (i(e),
            f('editor'),
            l(
              (g) => {
                const x = new URLSearchParams(g);
                return (x.set('file', e), x);
              },
              { replace: !0 },
            ),
            F?.(e));
    }, [s, n, e, h, p, c, a, l, f, i, F]);
  },
  we = ce(({ css: e, cssVar: n }) => ({
    folderHeader: e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;

    color: ${n.colorTextSecondary};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${n.colorFillTertiary};
    }
  `,
    folderHeaderActive: e`
    color: ${n.colorText};
    background-color: ${n.colorFillSecondary};
  `,
  })),
  ue = o.memo(
    ({
      item: e,
      level: n = 0,
      expandedFolders: h,
      loadedFolders: s,
      onToggleFolder: p,
      onLoadFolder: F,
      selectedKey: c,
      onFolderClick: a,
    }) => {
      const l = e.slug || e.id,
        f = h.has(l),
        i = c === e.id,
        w = o.useCallback(async () => {
          (p(l), !f && !s.has(l) && (await F(l)));
        }, [l, f, s, p, F]),
        g = o.useCallback(() => {
          a && a(e.id, e.slug);
        }, [e.id, e.slug, a]);
      return t.jsxs(A, {
        gap: 2,
        children: [
          t.jsxs(A, {
            horizontal: !0,
            align: 'center',
            className: ae(we.folderHeader, i && we.folderHeaderActive),
            style: { paddingInlineStart: n * 16 + 8 },
            onClick: g,
            children: [
              t.jsx(ne, {
                animate: { rotate: f ? 0 : -90 },
                transition: { duration: 0.2, ease: 'easeInOut' },
                children: t.jsx(se, {
                  icon: Ie,
                  size: 'small',
                  onClick: (x) => {
                    (x.stopPropagation(), w());
                  },
                }),
              }),
              t.jsxs(A, {
                horizontal: !0,
                align: 'center',
                flex: 1,
                gap: 8,
                style: { minHeight: 28, minWidth: 0 },
                children: [
                  t.jsx($, { icon: f ? be : re, size: 16 }),
                  t.jsx('span', {
                    style: {
                      flex: 1,
                      fontSize: 14,
                      lineHeight: '20px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    },
                    children: e.name,
                  }),
                ],
              }),
            ],
          }),
          f &&
            e.children &&
            e.children.length > 0 &&
            t.jsx(ne, {
              animate: { height: 'auto', opacity: 1 },
              initial: { height: 0, opacity: 0 },
              style: { overflow: 'hidden' },
              transition: { duration: 0.2, ease: 'easeInOut' },
              children: t.jsx(A, {
                gap: 2,
                children: e.children.map((x) =>
                  t.jsx(
                    ue,
                    {
                      expandedFolders: h,
                      item: x,
                      level: n + 1,
                      loadedFolders: s,
                      selectedKey: c,
                      onFolderClick: a,
                      onLoadFolder: F,
                      onToggleFolder: p,
                    },
                    x.id,
                  ),
                ),
              }),
            }),
        ],
      });
    },
  );
ue.displayName = 'FolderTreeItemComponent';
const Le = o.memo(
  ({
    items: e,
    expandedFolders: n,
    loadedFolders: h,
    onToggleFolder: s,
    onLoadFolder: p,
    selectedKey: F,
    onFolderClick: c,
  }) =>
    t.jsx(A, {
      gap: 2,
      children: e.map((a) =>
        t.jsx(
          ue,
          {
            expandedFolders: n,
            item: a,
            loadedFolders: h,
            selectedKey: F,
            onFolderClick: c,
            onLoadFolder: p,
            onToggleFolder: s,
          },
          a.id,
        ),
      ),
    }),
);
Le.displayName = 'FolderTree';
const De = o.memo(({ open: e, onClose: n, fileId: h, knowledgeBaseId: s }) => {
  const { t: p } = de('components'),
    { message: F } = ee.useApp(),
    [c, a] = o.useState([]),
    [l, f] = o.useState(!1),
    [i, w] = o.useState(null),
    [g, x] = o.useState(new Set()),
    [S, j] = o.useState(new Set()),
    [B, v] = o.useState(!1),
    [I, C] = U((r) => [r.moveResource, r.createFolder]),
    T = o.useCallback((r) => [...r].sort((u, m) => u.name.localeCompare(m.name)), []),
    k = o.useCallback(async () => {
      f(!0);
      try {
        const u = (
          await Y.getKnowledgeItems({
            knowledgeBaseId: s,
            parentId: null,
            showFilesInKnowledgeBase: !1,
          })
        ).items
          .filter((m) => m.fileType === 'custom/folder')
          .map((m) => ({ children: void 0, id: m.id, name: m.name, slug: m.slug }));
        a(T(u));
      } catch (r) {
        (console.error('Failed to load folders:', r), a([]));
      } finally {
        f(!1);
      }
    }, [s, T]);
  o.useEffect(() => {
    e && k();
  }, [e, k]);
  const P = o.useCallback(
      async (r) => {
        if (!S.has(r))
          try {
            const m = (
                await Y.getKnowledgeItems({
                  knowledgeBaseId: s,
                  parentId: r,
                  showFilesInKnowledgeBase: !1,
                })
              ).items
                .filter((y) => y.fileType === 'custom/folder')
                .map((y) => ({ children: void 0, id: y.id, name: y.name, slug: y.slug })),
              M = T(m);
            (a((y) => {
              const L = (H) =>
                H.map((D) =>
                  (D.slug || D.id) === r
                    ? { ...D, children: M }
                    : D.children
                      ? { ...D, children: L(D.children) }
                      : D,
                );
              return L(y);
            }),
              j((y) => new Set([...y, r])));
          } catch (u) {
            console.error('Failed to load folder contents:', u);
          }
      },
      [s, S, T],
    ),
    O = o.useCallback(
      async (r) => {
        try {
          const m = (
              await Y.getKnowledgeItems({
                knowledgeBaseId: s,
                parentId: r,
                showFilesInKnowledgeBase: !1,
              })
            ).items
              .filter((y) => y.fileType === 'custom/folder')
              .map((y) => ({ children: void 0, id: y.id, name: y.name, slug: y.slug })),
            M = T(m);
          a((y) => {
            const L = (H) =>
              H.map((D) =>
                (D.slug || D.id) === r
                  ? { ...D, children: M }
                  : D.children
                    ? { ...D, children: L(D.children) }
                    : D,
              );
            return L(y);
          });
        } catch (u) {
          console.error('Failed to reload folder contents:', u);
        }
      },
      [s, T],
    ),
    E = o.useCallback((r) => {
      x((u) => {
        const m = new Set(u);
        return (m.has(r) ? m.delete(r) : m.add(r), m);
      });
    }, []),
    K = o.useCallback((r, u) => {
      w(r);
    }, []),
    R = o.useCallback(async () => {
      try {
        v(!0);
        const r = await C(p('pageList.untitled', { ns: 'file' }), i ?? void 0, s);
        (i ? (x((u) => new Set([...u, i])), await O(i)) : await k(), w(r));
      } catch (r) {
        (console.error('Failed to create folder:', r),
          F.error(p('FileManager.actions.renameError')));
      } finally {
        v(!1);
      }
    }, [i, s, C, O, k, p, F]),
    z = async () => {
      try {
        (await I(h, i), s && (await X(s)), F.success(p('FileManager.actions.moveSuccess')), n());
      } catch (r) {
        (console.error('Failed to move file:', r), F.error(p('FileManager.actions.moveError')));
      }
    },
    d = async () => {
      try {
        (await I(h, null), s && (await X(s)), F.success(p('FileManager.actions.moveSuccess')), n());
      } catch (r) {
        (console.error('Failed to move file:', r), F.error(p('FileManager.actions.moveError')));
      }
    };
  return t.jsxs(nr, {
    open: e,
    title: p('FileManager.actions.moveToFolder'),
    footer: t.jsxs(A, {
      horizontal: !0,
      gap: 8,
      justify: 'flex-end',
      children: [
        t.jsx(Q, { onClick: n, children: p('cancel', { ns: 'common' }) }),
        t.jsx(Q, { type: 'default', onClick: d, children: p('FileManager.actions.moveToRoot') }),
        t.jsx(Q, {
          disabled: !i,
          type: 'primary',
          onClick: z,
          children: p('FileManager.actions.moveHere'),
        }),
      ],
    }),
    onCancel: n,
    children: [
      t.jsx(A, {
        horizontal: !0,
        justify: 'flex-end',
        style: { marginBottom: 12 },
        children: t.jsx(Q, {
          icon: t.jsx($, { icon: re }),
          loading: B,
          size: 'small',
          type: 'default',
          onClick: R,
          children: p('header.actions.newFolder', { ns: 'file' }),
        }),
      }),
      t.jsx(A, {
        style: { maxHeight: 400, minHeight: 200, overflowY: 'auto' },
        children: l
          ? t.jsx('div', { children: p('loading', { ns: 'common' }) })
          : c.length === 0
            ? t.jsx(A, {
                align: 'center',
                justify: 'center',
                style: { minHeight: 200 },
                children: t.jsx('div', {
                  style: { color: 'var(--lobe-color-text-secondary)' },
                  children: p('FileManager.noFolders'),
                }),
              })
            : t.jsx(Le, {
                expandedFolders: g,
                items: c,
                loadedFolders: S,
                selectedKey: i,
                onFolderClick: K,
                onLoadFolder: P,
                onToggleFolder: E,
              }),
      }),
    ],
  });
});
De.displayName = 'MoveToFolderModal';
const cr = ({
    id: e,
    libraryId: n,
    url: h,
    filename: s,
    fileType: p,
    sourceType: F,
    onRenameStart: c,
  }) => {
    const { t: a } = de(['components', 'common', 'knowledgeBase']),
      { message: l, modal: f } = ee.useApp(),
      i = or(),
      {
        deleteResource: w,
        moveResource: g,
        refreshFileList: x,
      } = U(
        (E) => ({
          deleteResource: E.deleteResource,
          moveResource: E.moveResource,
          refreshFileList: E.refreshFileList,
        }),
        Ne,
      ),
      [S, j] = Te((E) => [E.removeFilesFromKnowledgeBase, E.addFilesToKnowledgeBase]),
      B = lr(),
      v = !!n,
      I = p === 'custom/folder',
      C = s?.toLowerCase(),
      T = p?.toLowerCase() === 'pdf' || C?.endsWith('.pdf'),
      k =
        C?.endsWith('.xls') ||
        C?.endsWith('.xlsx') ||
        C?.endsWith('.doc') ||
        C?.endsWith('.docx') ||
        C?.endsWith('.ppt') ||
        C?.endsWith('.pptx') ||
        C?.endsWith('.odt'),
      P = !T && !k && (F === 'document' || p === Ee);
    return {
      menuItems: o.useCallback(() => {
        const E = B.filter((r) => r.id !== n),
          K = E.map((r) => ({
            icon: t.jsx(he, {}),
            key: `add-to-library-${r.id}`,
            label: t.jsx('span', { style: { marginLeft: 8 }, children: r.name }),
            onClick: async ({ domEvent: u }) => {
              u.stopPropagation();
              try {
                (await j(r.id, [e]),
                  l.success(a('addToKnowledgeBase.addSuccess', { count: 1, ns: 'knowledgeBase' })));
              } catch (m) {
                (console.error(m),
                  m?.data?.code === 'CONFLICT' || m?.message === 'FILE_ALREADY_IN_KNOWLEDGE_BASE'
                    ? l.warning(a('addToKnowledgeBase.alreadyExists', { ns: 'knowledgeBase' }))
                    : l.error(a('addToKnowledgeBase.error', { ns: 'knowledgeBase' })));
              }
            },
          })),
          R = E.map((r) => ({
            icon: t.jsx(he, {}),
            key: `move-to-library-${r.id}`,
            label: t.jsx('span', { style: { marginLeft: 8 }, children: r.name }),
            onClick: async ({ domEvent: u }) => {
              u.stopPropagation();
              try {
                (n && (await S(n, [e])),
                  await g(e, null),
                  await j(r.id, [e]),
                  l.success(a('moveToKnowledgeBase.success', { ns: 'knowledgeBase' })));
              } catch (m) {
                (console.error(m),
                  m?.data?.code === 'CONFLICT' || m?.message === 'FILE_ALREADY_IN_KNOWLEDGE_BASE'
                    ? l.warning(a('addToKnowledgeBase.alreadyExists', { ns: 'knowledgeBase' }))
                    : l.error(a('moveToKnowledgeBase.error', { ns: 'knowledgeBase' })));
              }
            },
          })),
          z = v
            ? [
                E.length > 0 && {
                  children: R,
                  icon: t.jsx($, { icon: me }),
                  key: 'moveToOtherLibrary',
                  label: a('FileManager.actions.moveToOtherLibrary'),
                },
                {
                  icon: t.jsx($, { icon: qe }),
                  key: 'removeFromLibrary',
                  label: a('FileManager.actions.removeFromLibrary'),
                  onClick: async ({ domEvent: r }) => {
                    (r.stopPropagation(),
                      f.confirm({
                        okButtonProps: { danger: !0 },
                        onOk: async () => {
                          (await S(n, [e]),
                            l.success(a('FileManager.actions.removeFromLibrarySuccess')));
                        },
                        title: a('FileManager.actions.confirmRemoveFromLibrary', { count: 1 }),
                      }));
                  },
                },
              ]
            : [
                E.length > 0 && {
                  children: K,
                  icon: t.jsx($, { icon: me }),
                  key: 'addToLibrary',
                  label: a('FileManager.actions.addToLibrary'),
                },
              ],
          d = z.some(Boolean);
        return [
          ...z,
          d && { type: 'divider' },
          v && {
            icon: t.jsx($, { icon: Qe }),
            key: 'moveToFolder',
            label: a('FileManager.actions.moveToFolder'),
            onClick: async ({ domEvent: r }) => {
              (r.stopPropagation(), tr(De, { fileId: e, knowledgeBaseId: n }));
            },
          },
          I && {
            icon: t.jsx($, { icon: Je }),
            key: 'rename',
            label: a('FileManager.actions.rename'),
            onClick: async ({ domEvent: r }) => {
              (r.stopPropagation(), c?.());
            },
          },
          {
            icon: t.jsx($, { icon: Ze }),
            key: 'copyUrl',
            label: a('FileManager.actions.copyUrl'),
            onClick: async ({ domEvent: r }) => {
              r.stopPropagation();
              let u = h;
              (P &&
                (n
                  ? (u = `${i}/resource/library/${n}?file=${e}`)
                  : (u = `${i}/resource?file=${e}`)),
                await He(u),
                l.success(a('FileManager.actions.copyUrlSuccess')));
            },
          },
          !I && {
            icon: t.jsx($, { icon: er }),
            key: 'download',
            label: a('download', { ns: 'common' }),
            onClick: async ({ domEvent: r }) => {
              r.stopPropagation();
              const u = 'file-downloading';
              if (
                (l.loading({ content: a('FileManager.actions.downloading'), duration: 0, key: u }),
                P)
              )
                try {
                  const m = await Xe.getDocumentById(e);
                  if (m?.content) {
                    const y = `# ${m.title || s}

${m.content}`,
                      L = new Blob([y], { type: 'text/markdown' }),
                      H = URL.createObjectURL(L),
                      D = s.endsWith('.md') ? s : `${s}.md`;
                    (await ye(H, D), URL.revokeObjectURL(H));
                  } else l.error('Failed to download page: no content available');
                } catch (m) {
                  (console.error('Failed to download page:', m),
                    l.error('Failed to download page'));
                }
              else await ye(h, s);
              l.destroy(u);
            },
          },
          { type: 'divider' },
          {
            danger: !0,
            icon: t.jsx($, { icon: rr }),
            key: 'delete',
            label: a('delete', { ns: 'common' }),
            onClick: async ({ domEvent: r }) => {
              (r.stopPropagation(),
                f.confirm({
                  content: a(
                    I
                      ? 'FileManager.actions.confirmDeleteFolder'
                      : 'FileManager.actions.confirmDelete',
                  ),
                  okButtonProps: { danger: !0 },
                  onOk: async () => {
                    (await w(e),
                      n && (await X(n)),
                      await x({ revalidateResources: !1 }),
                      l.success(a('FileManager.actions.deleteSuccess')));
                  },
                }));
            },
          },
        ].filter(Boolean);
      }, [j, i, w, s, e, I, v, P, B, n, l, f, g, c, x, S, a, h]),
    };
  },
  G = ce(({ css: e, cssVar: n }) => ({
    dragging: e`
    will-change: transform;
    opacity: 0.5;
  `,
    fileItemDragOver: e`
    outline: 1px dashed ${n.colorPrimaryBorder};
    outline-offset: -2px;

    &,
    &:hover {
      background: ${n.colorPrimaryBg};
    }
  `,
    treeItem: e`
    cursor: pointer;
  `,
  })),
  J = (e) =>
    [...e].sort((n, h) =>
      n.isFolder && !h.isFolder ? -1 : !n.isFolder && h.isFolder ? 1 : n.name.localeCompare(h.name),
    ),
  Be = (e) => ({
    fileType: e.fileType,
    id: e.id,
    isFolder: e.fileType === 'custom/folder',
    metadata: e.metadata,
    name: e.name,
    slug: e.slug,
    sourceType: e.sourceType,
    url: e.url || '',
  }),
  Z = new Map(),
  le = 'resource-tree-refresh',
  dr = (e) => {
    typeof window > 'u' ||
      window.dispatchEvent(new CustomEvent(le, { detail: { knowledgeBaseId: e } }));
  },
  ur = (e) => (
    Z.has(e) ||
      Z.set(e, {
        expandedFolders: new Set(),
        folderChildrenCache: new Map(),
        loadedFolders: new Set(),
        loadingFolders: new Set(),
      }),
    Z.get(e)
  ),
  X = async (e) => {
    const n = Z.get(e);
    if (!n) return;
    const { resourceList: h } = U.getState(),
      s = (c) => {
        if (!c) return null;
        const a = h.find((f) => f.knowledgeBaseId === e && f.id === c);
        return a ? a.id : (h.find((f) => f.knowledgeBaseId === e && f.slug === c)?.id ?? c);
      },
      p = (c) => {
        const a = s(c),
          l = h
            .filter((f) => f.knowledgeBaseId === e && (f.parentId ?? null) === (a ?? null))
            .map(Be);
        return J(l);
      },
      F = Array.from(n.expandedFolders);
    (n.folderChildrenCache.clear(), n.loadedFolders.clear());
    for (const c of F) {
      const a = p(c);
      if (a.length > 0) {
        (n.folderChildrenCache.set(c, a), n.loadedFolders.add(c));
        continue;
      }
      try {
        const l = await Y.getKnowledgeItems({
          knowledgeBaseId: e,
          parentId: c,
          showFilesInKnowledgeBase: !1,
        });
        if (l?.items) {
          const i = l.items
            .map((w) => ({
              fileType: w.fileType,
              id: w.id,
              isFolder: w.fileType === 'custom/folder',
              metadata: w.metadata,
              name: w.name,
              slug: w.slug,
              sourceType: w.sourceType,
              url: w.url,
            }))
            .sort((w, g) =>
              w.isFolder && !g.isFolder
                ? -1
                : !w.isFolder && g.isFolder
                  ? 1
                  : w.name.localeCompare(g.name),
            );
          (n.folderChildrenCache.set(c, i), n.loadedFolders.add(c));
        }
      } catch (l) {
        console.error(`Failed to reload folder ${c}:`, l);
      }
    }
    try {
      const { mutate: c } = await ve(
          async () => {
            const { mutate: l } = await import('./index-C8UyLGsD.js').then((f) => f.kE);
            return { mutate: l };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        ),
        a = (l) =>
          c(
            [
              'useFetchKnowledgeItems',
              { knowledgeBaseId: e, parentId: l, showFilesInKnowledgeBase: !1 },
            ],
            void 0,
            { revalidate: !0 },
          );
      await Promise.all([a(null), ...F.map((l) => a(l))]);
    } catch (c) {
      console.error('Failed to revalidate tree SWR cache:', c);
    }
    dr(e);
  },
  Me = o.memo(
    ({
      item: e,
      level: n = 0,
      expandedFolders: h,
      loadingFolders: s,
      onToggleFolder: p,
      onLoadFolder: F,
      selectedKey: c,
      folderChildrenCache: a,
    }) => {
      const l = xe(),
        { message: f } = ee.useApp(),
        [i, w] = V((b) => [b.setMode, b.libraryId]),
        g = U((b) => b.renameFolder),
        [x, S] = o.useState(!1),
        [j, B] = o.useState(e.name),
        v = o.useRef(null),
        {
          itemKey: I,
          isPage: C,
          emoji: T,
        } = o.useMemo(() => {
          const b = e.fileType?.toLowerCase(),
            _ = e.name?.toLowerCase(),
            q = b === 'pdf' || _?.endsWith('.pdf'),
            oe =
              _?.endsWith('.xls') ||
              _?.endsWith('.xlsx') ||
              _?.endsWith('.doc') ||
              _?.endsWith('.docx') ||
              _?.endsWith('.ppt') ||
              _?.endsWith('.pptx') ||
              _?.endsWith('.odt'),
            W = !q && !oe && (e.sourceType === 'document' || e.fileType === Ee);
          return { emoji: W ? e.metadata?.emoji : null, isPage: W, itemKey: e.slug || e.id };
        }, [e.slug, e.id, e.fileType, e.sourceType, e.name, e.metadata?.emoji]),
        k = o.useCallback(() => {
          (S(!0),
            B(e.name),
            setTimeout(() => {
              (v.current?.focus(), v.current?.select());
            }, 0));
        }, [e.name]),
        P = o.useCallback(async () => {
          if (!j.trim()) {
            f.error('Folder name cannot be empty');
            return;
          }
          if (j.trim() === e.name) {
            S(!1);
            return;
          }
          try {
            (await g(e.id, j.trim()), w && (await X(w)), f.success('Renamed successfully'), S(!1));
          } catch (b) {
            (console.error('Rename error:', b), f.error('Rename failed'));
          }
        }, [e.id, e.name, w, j, g, f]),
        O = o.useCallback(() => {
          (S(!1), B(e.name));
        }, [e.name]),
        { menuItems: E } = cr({
          fileType: e.fileType,
          filename: e.name,
          id: e.id,
          libraryId: w,
          onRenameStart: e.isFolder ? k : void 0,
          sourceType: e.sourceType,
          url: e.url,
        }),
        K = mr(),
        R = yr(),
        [z, d] = o.useState(!1),
        [r, u] = o.useState(!1),
        m = o.useMemo(
          () => ({
            fileType: e.fileType,
            isFolder: e.isFolder,
            name: e.name,
            sourceType: e.sourceType,
          }),
          [e.fileType, e.isFolder, e.name, e.sourceType],
        ),
        M = o.useCallback(
          (b) => {
            (d(!0), R({ data: m, id: e.id, type: e.isFolder ? 'folder' : 'file' }));
            const _ = pr();
            (_ && b.dataTransfer && b.dataTransfer.setDragImage(_, 0, 0),
              b.dataTransfer && (b.dataTransfer.effectAllowed = 'move'));
          },
          [m, e.id, e.isFolder, R],
        ),
        y = o.useCallback(() => {
          d(!1);
        }, []),
        L = o.useCallback(
          (b) => {
            !e.isFolder || !K || (b.preventDefault(), b.stopPropagation(), u(!0));
          },
          [e.isFolder, K],
        ),
        H = o.useCallback(() => {
          u(!1);
        }, []),
        D = o.useCallback(() => {
          u(!1);
        }, []),
        te = ir({ id: e.id, isFolder: e.isFolder, isPage: C, libraryId: w, slug: e.slug }),
        _e = o.useCallback(
          (b, _) => {
            (l(`/resource/library/${w}/${_ || b}`), i('explorer'));
          },
          [w, l],
        );
      if (e.isFolder) {
        const b = h.has(I),
          _ = c === I,
          q = s.has(I),
          oe = async () => {
            (p(I), !b && !a.has(I) && (await F(I)));
          };
        return t.jsx(A, {
          gap: 2,
          children: t.jsxs(ge, {
            'clickable': !0,
            'draggable': !0,
            'horizontal': !0,
            'align': 'center',
            'data-drop-target-id': e.id,
            'data-is-folder': String(e.isFolder),
            'gap': 8,
            'height': 36,
            'paddingInline': 4,
            'variant': _ ? 'filled' : 'borderless',
            'className': ae(G.treeItem, r && G.fileItemDragOver, z && G.dragging),
            'style': { paddingInlineStart: n * 12 + 4 },
            'onClick': () => _e(e.id, e.slug),
            'onDragEnd': y,
            'onDragLeave': H,
            'onDragOver': L,
            'onDragStart': M,
            'onDrop': D,
            'onContextMenu': (W) => {
              (W.preventDefault(), pe(E()));
            },
            'children': [
              q
                ? t.jsx(se, { spin: !0, icon: Ue, size: 'small', style: { width: 20 } })
                : t.jsx(ne, {
                    animate: { rotate: b ? 0 : -90 },
                    initial: !1,
                    transition: { duration: 0.2, ease: 'easeInOut' },
                    children: t.jsx(se, {
                      icon: Ie,
                      size: 'small',
                      style: { width: 20 },
                      onClick: (W) => {
                        (W.stopPropagation(), oe());
                      },
                    }),
                  }),
              t.jsxs(A, {
                horizontal: !0,
                align: 'center',
                flex: 1,
                gap: 8,
                style: { minHeight: 28, minWidth: 0, overflow: 'hidden' },
                children: [
                  t.jsx($, { icon: b ? be : re, size: 18 }),
                  x
                    ? t.jsx(sr, {
                        ref: v,
                        size: 'small',
                        style: { flex: 1 },
                        value: j,
                        onBlur: P,
                        onChange: (W) => B(W.target.value),
                        onClick: fe,
                        onPointerDown: fe,
                        onKeyDown: (W) => {
                          W.key === 'Enter'
                            ? (W.preventDefault(), P())
                            : W.key === 'Escape' && (W.preventDefault(), O());
                        },
                      })
                    : t.jsx('span', {
                        style: {
                          flex: 1,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        },
                        children: e.name,
                      }),
                ],
              }),
            ],
          }),
        });
      }
      const $e = c === I;
      return t.jsx(A, {
        gap: 2,
        children: t.jsxs(ge, {
          'clickable': !0,
          'draggable': !0,
          'horizontal': !0,
          'align': 'center',
          'className': ae(G.treeItem, z && G.dragging),
          'data-drop-target-id': e.id,
          'data-is-folder': !1,
          'gap': 8,
          'height': 36,
          'paddingInline': 4,
          'variant': $e ? 'filled' : 'borderless',
          'style': { paddingInlineStart: n * 12 + 4 },
          'onClick': te,
          'onDragEnd': y,
          'onDragStart': M,
          'onContextMenu': (b) => {
            (b.preventDefault(), pe(E()));
          },
          'children': [
            t.jsx('div', { style: { width: 20 } }),
            t.jsxs(A, {
              horizontal: !0,
              align: 'center',
              flex: 1,
              gap: 8,
              style: { minHeight: 28, minWidth: 0, overflow: 'hidden' },
              children: [
                C
                  ? T
                    ? t.jsx('span', { style: { fontSize: 18 }, children: T })
                    : t.jsx($, { icon: Se, size: 18 })
                  : t.jsx(Ce, { fileName: e.name, fileType: e.fileType, size: 18 }),
                t.jsx('span', {
                  style: {
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                  children: e.name,
                }),
              ],
            }),
          ],
        }),
      });
    },
  );
Me.displayName = 'HierarchyNode';
const fr = ce(({ css: e, cssVar: n }) => ({
    container: e`
    display: flex;
    gap: 6px;
    align-items: center;

    height: 32px;
    padding-block: 4px;
    padding-inline: 8px;
    border-radius: ${n.borderRadiusSM};
  `,
  })),
  Re = o.memo(({ opacity: e = 1 }) =>
    t.jsxs(A, {
      horizontal: !0,
      className: fr.container,
      style: { opacity: e },
      children: [
        t.jsx(Fe.Button, {
          active: !0,
          size: 'small',
          style: { flex: 'none', height: 16, width: 16 },
        }),
        t.jsx(Fe.Button, {
          active: !0,
          size: 'small',
          style: { height: 16, width: `${Math.floor(Math.random() * 30 + 40)}%` },
        }),
      ],
    }),
  );
Re.displayName = 'TreeSkeletonItem';
const Ae = o.memo(() => {
  const n = (h) => 1 - (h / 5) * 0.8;
  return t.jsx(A, {
    gap: 2,
    children: Array.from({ length: 6 }).map((h, s) => t.jsx(Re, { opacity: n(s) }, s)),
  });
});
Ae.displayName = 'TreeSkeleton';
const gr = o.memo(() => {
  const { currentFolderSlug: e } = ar(),
    [n, h, s] = U((d) => [
      d.useFetchKnowledgeItems,
      d.useFetchFolderBreadcrumb,
      d.useFetchKnowledgeItem,
    ]),
    [p, F] = U((d) => [d.resourceList, d.queryParams]),
    [c, a] = V((d) => [d.libraryId, d.currentViewItemId]),
    [l, f] = o.useReducer((d) => d + 1, 0),
    i = o.useMemo(() => ur(c || ''), [c]),
    { expandedFolders: w, folderChildrenCache: g, loadingFolders: x } = i,
    { data: S } = h(e),
    { data: j } = s(a),
    B = o.useRef(null),
    { data: v, isLoading: I } = n({
      knowledgeBaseId: c,
      parentId: null,
      showFilesInKnowledgeBase: !1,
    }),
    C = o.useMemo(() => (!c || !F || F.q ? !1 : F.libraryId === c), [c, F]),
    T = o.useMemo(() => (C ? (F.parentId ?? null) : null), [C, F]),
    k = o.useMemo(() => (C ? J(p.map(Be)) : []), [C, p]),
    P = o.useCallback((d, r) => {
      if (!d || d.length !== r.length) return !1;
      let u = 0;
      for (const m of d) {
        if (m.id !== r[u]?.id) return !1;
        u += 1;
      }
      return !0;
    }, []),
    O = o.useMemo(() => {
      if (C && T === null) return k;
      if (!v) return [];
      const d = v.map((r) => ({
        fileType: r.fileType,
        id: r.id,
        isFolder: r.fileType === 'custom/folder',
        metadata: r.metadata ?? void 0,
        name: r.name,
        slug: r.slug,
        sourceType: r.sourceType,
        url: r.url,
      }));
      return J(d);
    }, [k, T, v, l]);
  o.useEffect(() => {
    if (!C || !T) return;
    const d = i.folderChildrenCache.get(T);
    P(d, k) || (i.folderChildrenCache.set(T, k), i.loadedFolders.add(T), f());
  }, [k, T, C, P, i, f]);
  const E = o.useMemo(() => {
      const d = [],
        r = (u, m) => {
          for (const M of u) {
            const y = M.slug || M.id;
            if ((d.push({ item: M, key: y, level: m }), !M.isFolder || !w.has(y))) continue;
            const L = g.get(y);
            !L || L.length === 0 || r(L, m + 1);
          }
        };
      return (r(O, 0), d);
    }, [O, w, g, l]),
    K = o.useCallback(
      async (d) => {
        (i.loadingFolders.add(d), f());
        try {
          if (C && T === d) {
            (i.folderChildrenCache.set(d, k), i.loadedFolders.add(d));
            return;
          }
          const { mutate: r } = await ve(
              async () => {
                const { mutate: y } = await import('./index-C8UyLGsD.js').then((L) => L.kE);
                return { mutate: y };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            ),
            u = await r(
              [
                'useFetchKnowledgeItems',
                { knowledgeBaseId: c, parentId: d, showFilesInKnowledgeBase: !1 },
              ],
              () =>
                Y.getKnowledgeItems({
                  knowledgeBaseId: c,
                  parentId: d,
                  showFilesInKnowledgeBase: !1,
                }),
              { revalidate: !1 },
            );
          if (!u || !u.items) {
            console.error('Failed to load folder contents: no data returned');
            return;
          }
          const m = u.items.map((y) => ({
              fileType: y.fileType,
              id: y.id,
              isFolder: y.fileType === 'custom/folder',
              metadata: y.metadata ?? void 0,
              name: y.name,
              slug: y.slug,
              sourceType: y.sourceType,
              url: y.url,
            })),
            M = J(m);
          (i.folderChildrenCache.set(d, M), i.loadedFolders.add(d));
        } catch (r) {
          console.error('Failed to load folder contents:', r);
        } finally {
          (i.loadingFolders.delete(d), f());
        }
      },
      [k, T, f, C, c, i],
    ),
    R = o.useCallback(
      (d) => {
        (i.expandedFolders.has(d) ? i.expandedFolders.delete(d) : i.expandedFolders.add(d), f());
      },
      [i, f],
    );
  if (
    (o.useEffect(() => {
      B.current = null;
    }, [c]),
    o.useEffect(() => {
      if (typeof window > 'u') return;
      const d = (r) => {
        const u = r.detail;
        (u?.knowledgeBaseId && c && u.knowledgeBaseId !== c) || f();
      };
      return (
        window.addEventListener(le, d),
        () => {
          window.removeEventListener(le, d);
        }
      );
    }, [c, f]),
    o.useEffect(() => {
      if (!S || S.length === 0) return;
      let d = !1;
      for (const r of S) {
        const u = r.slug || r.id;
        (i.expandedFolders.has(u) || (i.expandedFolders.add(u), (d = !0)),
          !i.loadedFolders.has(u) && !i.loadingFolders.has(u) && K(u));
      }
      d && f();
    }, [S, i, f, K]),
    o.useEffect(() => {
      if (!j || !a) {
        B.current = null;
        return;
      }
      j.parentId
        ? (async () => {
            try {
              const r = await Y.getFolderBreadcrumb(j.parentId);
              if (!r || r.length === 0) return;
              let u = !1;
              const m = r.at(-1),
                M = m.slug || m.id;
              B.current = M;
              for (const y of r) {
                const L = y.slug || y.id;
                (i.expandedFolders.has(L) || (i.expandedFolders.add(L), (u = !0)),
                  !i.loadedFolders.has(L) && !i.loadingFolders.has(L) && K(L));
              }
              u && f();
            } catch (r) {
              console.error('Failed to fetch parent folder breadcrumb:', r);
            }
          })()
        : (B.current = null);
    }, [j, a, i, f, K]),
    I)
  )
    return t.jsx(Ae, {});
  const z = a && B.current ? B.current : e;
  return t.jsx(ke, {
    children: t.jsx(A, {
      paddingInline: 4,
      style: { height: '100%' },
      children: t.jsx(Ge, {
        bufferSize: typeof window < 'u' ? window.innerHeight : 0,
        style: { height: '100%' },
        children: E.map(({ item: d, key: r, level: u }) =>
          t.jsx(
            'div',
            {
              style: { paddingBottom: 2 },
              children: t.jsx(Me, {
                expandedFolders: w,
                folderChildrenCache: g,
                item: d,
                level: u,
                loadingFolders: x,
                selectedKey: z,
                updateKey: l,
                onLoadFolder: K,
                onToggleFolder: R,
              }),
            },
            r,
          ),
        ),
      }),
    }),
  });
});
gr.displayName = 'FileTree';
let ie = null;
typeof globalThis.window < 'u' &&
  ((ie = new Image()),
  (ie.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'));
const pr = () => ie,
  Pe = o.createContext(!1),
  mr = () => o.use(Pe),
  hr = o.createContext(null),
  Ke = o.createContext(null),
  yr = () => {
    const e = o.use(Ke);
    if (!e) throw new Error('useSetCurrentDrag must be used within DndContextWrapper');
    return e;
  },
  Fr = o.memo(({ children: e }) => {
    const { t: n } = de('components'),
      { message: h } = ee.useApp(),
      [s, p] = o.useState(null),
      F = o.useRef(null),
      [c, a] = U((g) => [g.moveResource, g.resourceList]),
      [l, f] = V((g) => [g.selectedFileIds, g.setSelectedFileIds]),
      i = V((g) => g.libraryId);
    o.useEffect(() => {
      const g = (v) => {
          F.current &&
            ((F.current.style.left = `${v.clientX + 12}px`),
            (F.current.style.top = `${v.clientY + 12}px`));
        },
        x = (v) => {
          F.current &&
            (v.clientX !== 0 || v.clientY !== 0) &&
            ((F.current.style.left = `${v.clientX + 12}px`),
            (F.current.style.top = `${v.clientY + 12}px`));
        },
        S = async (v) => {
          if ((v.preventDefault(), !s)) return;
          let I = v.target,
            C,
            T = !1,
            k = !1;
          for (; I && I !== document.body; ) {
            const R = I.dataset;
            if (R.dropTargetId) {
              ((C = R.dropTargetId), (T = R.isFolder === 'true'), (k = R.rootDrop === 'true'));
              break;
            }
            I = I.parentElement;
          }
          if (!T && !k) {
            p(null);
            return;
          }
          const P = k ? null : (C ?? null),
            O = l.includes(s.id),
            E = O ? l : [s.id];
          if (!k && P && E.includes(P)) {
            p(null);
            return;
          }
          p(null);
          const K = h.loading(n('FileManager.actions.moving'), 0);
          try {
            const R = E.map((z) => c(z, P));
            (await Promise.all(R),
              i && (await X(i)),
              K(),
              h.success(n('FileManager.actions.moveSuccess')),
              O && f([]));
          } catch (R) {
            (console.error('Failed to move file:', R),
              K(),
              h.error(n('FileManager.actions.moveError')));
          }
        },
        j = (v) => {
          v.preventDefault();
        },
        B = () => {
          p(null);
        };
      return (
        document.addEventListener('dragstart', g),
        document.addEventListener('drag', x),
        document.addEventListener('drop', S, !0),
        document.addEventListener('dragover', j),
        document.addEventListener('dragend', B),
        () => {
          (document.removeEventListener('dragstart', g),
            document.removeEventListener('drag', x),
            document.removeEventListener('drop', S, !0),
            document.removeEventListener('dragover', j),
            document.removeEventListener('dragend', B));
        }
      );
    }, [s, l, a, c, f, h, n, i]);
    const w = Ye();
    return (
      o.useEffect(() => {
        let g = null;
        return (
          s &&
            ((g = document.createElement('style')),
            (g.id = 'drag-cursor-override'),
            (g.textContent = `
        * {
          cursor: grabbing !important;
          user-select: none !important;
        }
      `),
            document.head.append(g)),
          () => {
            g && g.parentNode && g.remove();
            const x = document.getElementById('drag-cursor-override');
            x && x.parentNode && x.remove();
          }
        );
      }, [s]),
      t.jsx(Pe, {
        value: s !== null,
        children: t.jsx(hr, {
          value: s,
          children: t.jsxs(Ke, {
            value: p,
            children: [
              e,
              typeof document < 'u' &&
                Ve.createPortal(
                  s
                    ? t.jsxs('div', {
                        ref: F,
                        style: {
                          alignItems: 'center',
                          background: N.colorBgElevated,
                          border: `1px solid ${N.colorPrimaryBorder}`,
                          borderRadius: N.borderRadiusLG,
                          boxShadow: N.boxShadow,
                          display: 'flex',
                          gap: 12,
                          height: 44,
                          left: '-999px',
                          maxWidth: 320,
                          minWidth: 200,
                          padding: '0 12px',
                          pointerEvents: 'none',
                          position: 'fixed',
                          top: '-999px',
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform',
                          zIndex: 9999,
                        },
                        children: [
                          t.jsx('div', {
                            style: {
                              alignItems: 'center',
                              color: N.colorPrimary,
                              display: 'flex',
                              flexShrink: 0,
                              justifyContent: 'center',
                            },
                            children:
                              s.data.fileType === 'custom/folder'
                                ? t.jsx($, { icon: re, size: 20 })
                                : s.data.fileType === 'custom/document'
                                  ? t.jsx($, { icon: Se, size: 20 })
                                  : t.jsx(Ce, {
                                      fileName: s.data.name,
                                      fileType: s.data.fileType,
                                      size: 20,
                                    }),
                          }),
                          t.jsx('span', {
                            style: {
                              color: N.colorText,
                              flex: 1,
                              fontSize: N.fontSize,
                              fontWeight: 500,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            },
                            children: s.data.name,
                          }),
                          l.includes(s.id) &&
                            l.length > 1 &&
                            t.jsx('div', {
                              style: {
                                alignItems: 'center',
                                background: N.colorPrimary,
                                borderRadius: N.borderRadiusSM,
                                color: N.colorTextLightSolid,
                                display: 'flex',
                                flexShrink: 0,
                                fontSize: 12,
                                fontWeight: 600,
                                height: 22,
                                justifyContent: 'center',
                                minWidth: 22,
                                padding: '0 6px',
                              },
                              children: l.length,
                            }),
                        ],
                      })
                    : null,
                  w ?? document.body,
                ),
            ],
          }),
        }),
      })
    );
  });
Fr.displayName = 'DndContextWrapper';
export {
  Fr as D,
  ke as K,
  gr as L,
  Ee as P,
  ar as a,
  lr as b,
  yr as c,
  X as d,
  ir as e,
  cr as f,
  pr as g,
  mr as u,
};
