import {
  u as D,
  dt as P,
  du as m,
  i as O,
  cF as _,
  au as C,
  dv as F,
  cE as E,
} from './index-C8UyLGsD.js';
import { u as A } from './useClientDataSWRWithSync-BKXDfgeT.js';
import { d as c, D as h } from './store-8fdqmFXe.js';
import { s as L } from './identifier-DNYzSWMy.js';
const u = P('page/list'),
  f = new Set(['editor', 'file', 'api']),
  p = new Set(['custom/document', 'application/pdf']),
  S = (s) => f.has(s.sourceType) && p.has(s.fileType),
  N = (s, e, t) => new M(s, e, t);
class M {
  #e;
  #t;
  constructor(e, t, a) {
    ((this.#t = e), (this.#e = t));
  }
  fetchDocuments = async () => {
    try {
      const e = D.getState().status.pagePageSize || 20,
        t = { fileTypes: Array.from(p), sourceTypes: Array.from(f) },
        a = await c.queryDocuments({ current: 0, pageSize: e, ...t }),
        n = a.items.filter(S).map((o) => ({ ...o, filename: o.filename ?? o.title ?? 'Untitled' })),
        i = a.items.length >= e;
      (this.#e().internal_dispatchDocuments({ documents: n, type: 'setDocuments' }),
        this.#t(
          { currentPage: 0, documentsTotal: a.total, hasMoreDocuments: i, queryFilter: t },
          !1,
          u('fetchDocuments/success'),
        ));
    } catch (e) {
      throw (console.error('Failed to fetch documents:', e), e);
    }
  };
  loadMoreDocuments = async () => {
    const {
      currentPage: e,
      isLoadingMoreDocuments: t,
      hasMoreDocuments: a,
      queryFilter: n,
      documents: i,
    } = this.#e();
    if (t || !a || !i) return;
    const o = e + 1;
    this.#t({ isLoadingMoreDocuments: !0 }, !1, u('loadMoreDocuments/start'));
    try {
      const r = D.getState().status.pagePageSize || 20,
        l = n ? { current: o, pageSize: r, ...n } : { current: o, pageSize: r },
        y = await c.queryDocuments(l),
        v = y.items.filter(S).map((w) => ({ ...w, filename: w.filename ?? w.title ?? 'Untitled' })),
        I = y.items.length >= r;
      (this.#e().internal_dispatchDocuments({ documents: v, type: 'appendDocuments' }),
        this.#t(
          {
            currentPage: o,
            documentsTotal: y.total,
            hasMoreDocuments: I,
            isLoadingMoreDocuments: !1,
          },
          !1,
          u('loadMoreDocuments/success'),
        ));
    } catch (r) {
      (console.error('Failed to load more documents:', r),
        this.#t({ isLoadingMoreDocuments: !1 }, !1, u('loadMoreDocuments/error')));
    }
  };
  refreshDocuments = async () => {
    await this.#e().fetchDocuments();
  };
  setSearchKeywords = (e) => {
    this.#t({ searchKeywords: e }, !1, u('setSearchKeywords'));
  };
  setShowOnlyPagesNotInLibrary = (e) => {
    this.#t({ showOnlyPagesNotInLibrary: e }, !1, u('setShowOnlyPagesNotInLibrary'));
  };
  useFetchDocuments = () =>
    A(
      ['pageDocuments'],
      async () => {
        const e = D.getState().status.pagePageSize || 20,
          t = { fileTypes: Array.from(p), sourceTypes: Array.from(f) };
        return (await c.queryDocuments({ current: 0, pageSize: e, ...t })).items
          .filter(S)
          .map((i) => ({ ...i, filename: i.filename ?? i.title ?? 'Untitled' }));
      },
      {
        onData: (e) => {
          if (!e) return;
          const t = D.getState().status.pagePageSize || 20,
            a = e.length >= t;
          (this.#e().internal_dispatchDocuments({ documents: e, type: 'setDocuments' }),
            this.#t(
              {
                currentPage: 0,
                documentsTotal: e.length,
                hasMoreDocuments: a,
                queryFilter: { fileTypes: Array.from(p), sourceTypes: Array.from(f) },
              },
              !1,
              u('useFetchDocuments/onData'),
            ));
        },
        revalidateOnFocus: !0,
      },
    );
}
const q = {
    allPagesDrawerOpen: !1,
    currentPage: 0,
    documents: void 0,
    documentsTotal: 0,
    hasMoreDocuments: !1,
    isCreatingNew: !1,
    isLoadingMoreDocuments: !1,
    queryFilter: void 0,
    renamingPageId: null,
    searchKeywords: '',
    selectedPageId: null,
    showOnlyPagesNotInLibrary: !1,
  },
  d = P('page/crud'),
  T = 'custom/document',
  R = (s, e, t) => new x(s, e, t);
class x {
  #e;
  #t;
  constructor(e, t, a) {
    ((this.#t = e), (this.#e = t));
  }
  createNewPage = async (e) => {
    const { createOptimisticPage: t, createPage: a, replaceTempPageWithReal: n } = this.#e(),
      i = t(e);
    this.#t({ isCreatingNew: !0, selectedPageId: i }, !1, d('createNewPage/start'));
    try {
      const o = await a({ content: '', title: e }),
        r = {
          content: o.content || '',
          createdAt: o.createdAt ? new Date(o.createdAt) : new Date(),
          editorData:
            typeof o.editorData == 'string' ? JSON.parse(o.editorData) : o.editorData || null,
          fileType: 'custom/document',
          filename: o.title || e,
          id: o.id,
          metadata: o.metadata || {},
          source: 'document',
          sourceType: h.EDITOR,
          title: o.title || e,
          totalCharCount: o.content?.length || 0,
          totalLineCount: 0,
          updatedAt: o.updatedAt ? new Date(o.updatedAt) : new Date(),
        };
      return (
        n(i, r),
        this.#t({ isCreatingNew: !1, selectedPageId: o.id }, !1, d('createNewPage/success')),
        this.#e().navigateToPage(o.id),
        o.id
      );
    } catch (o) {
      throw (
        console.error('Failed to create page:', o),
        this.#e().removeTempPage(i),
        this.#t({ isCreatingNew: !1, selectedPageId: null }, !1, d('createNewPage/error')),
        this.#e().navigate?.('/page'),
        o
      );
    }
  };
  createOptimisticPage = (e = 'Untitled') => {
    const t = `temp-page-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      a = new Date(),
      n = {
        content: null,
        createdAt: a,
        editorData: null,
        fileType: T,
        filename: e,
        id: t,
        metadata: {},
        source: 'document',
        sourceType: h.EDITOR,
        title: e,
        totalCharCount: 0,
        totalLineCount: 0,
        updatedAt: a,
      };
    return (this.#e().internal_dispatchDocuments({ document: n, type: 'addDocument' }), t);
  };
  createPage = async ({ title: e, content: t = '', knowledgeBaseId: a, parentId: n }) => {
    const i = Date.now();
    return await c.createDocument({
      content: t,
      editorData: '{}',
      fileType: T,
      knowledgeBaseId: a,
      metadata: { createdAt: i },
      parentId: n,
      title: e,
    });
  };
  deletePage = async (e) => {
    const { selectedPageId: t } = this.#e();
    t === e &&
      (this.#t({ isCreatingNew: !1, selectedPageId: null }, !1, d('deletePage')),
      this.#e().navigateToPage(null));
  };
  duplicatePage = async (e) => {
    const t = await c.getDocumentById(e);
    if (!t) throw new Error(`Page with ID ${e} not found`);
    const a = await c.createDocument({
        content: t.content || '',
        editorData: t.editorData
          ? typeof t.editorData == 'string'
            ? t.editorData
            : JSON.stringify(t.editorData)
          : '{}',
        fileType: t.fileType,
        metadata: { ...t.metadata, createdAt: Date.now(), duplicatedFrom: e },
        title: `${t.title} (Copy)`,
      }),
      n = {
        content: a.content || null,
        createdAt: a.createdAt ? new Date(a.createdAt) : new Date(),
        editorData:
          typeof a.editorData == 'string' ? JSON.parse(a.editorData) : a.editorData || null,
        fileType: a.fileType,
        filename: a.title || a.filename || '',
        id: a.id,
        metadata: a.metadata || {},
        source: 'document',
        sourceType: h.EDITOR,
        title: a.title || '',
        totalCharCount: a.content?.length || 0,
        totalLineCount: 0,
        updatedAt: a.updatedAt ? new Date(a.updatedAt) : new Date(),
      };
    return (this.#e().internal_dispatchDocuments({ document: n, type: 'addDocument' }), a);
  };
  navigateToPage = (e) => {
    e ? this.#e().navigate?.(`/page/${L(e)}`) : this.#e().navigate?.('/page');
  };
  removePage = async (e) => {
    const { documents: t, selectedPageId: a } = this.#e(),
      n = t;
    (this.#e().internal_dispatchDocuments({ id: e, type: 'removeDocument' }),
      a === e &&
        (this.#t({ selectedPageId: null }, !1, d('removePage/clearSelection')),
        this.#e().navigateToPage(null)));
    try {
      await c.deleteDocument(e);
    } catch (i) {
      throw (
        console.error('Failed to delete page:', i),
        n && this.#e().internal_dispatchDocuments({ documents: n, type: 'setDocuments' }),
        a === e &&
          (this.#t({ selectedPageId: e }, !1, d('removePage/restoreSelection')),
          this.#e().navigateToPage(e)),
        i
      );
    }
  };
  removeTempPage = (e) => {
    this.#e().internal_dispatchDocuments({ id: e, type: 'removeDocument' });
  };
  renamePage = async (e, t, a) => {
    const { updatePageOptimistically: n } = this.#e();
    try {
      await n(e, { emoji: a, title: t });
    } catch (i) {
      console.error('Failed to rename page:', i);
    } finally {
      this.#t({ renamingPageId: null }, !1, d('renamePage'));
    }
  };
  replaceTempPageWithReal = (e, t) => {
    this.#e().internal_dispatchDocuments({ document: t, oldId: e, type: 'replaceDocument' });
  };
  updatePage = async (e, t) => {
    (await c.updateDocument({
      content: t.content ?? void 0,
      editorData: t.editorData
        ? typeof t.editorData == 'string'
          ? t.editorData
          : JSON.stringify(t.editorData)
        : void 0,
      id: e,
      metadata: t.metadata,
      parentId: t.parentId !== void 0 ? t.parentId : void 0,
      title: t.title,
    }),
      await this.#e().refreshDocuments());
  };
  updatePageOptimistically = async (e, t) => {
    const { documents: a } = this.#e(),
      n = a?.find((l) => l.id === e);
    if (!n) {
      console.warn('[updatePageOptimistically] Page not found:', e);
      return;
    }
    const i = { ...n.metadata, ...(t.emoji !== void 0 ? { emoji: t.emoji } : {}) },
      o = Object.fromEntries(Object.entries(i).filter(([, l]) => l !== void 0)),
      r = { ...n, metadata: o, title: t.title ?? n.title, updatedAt: new Date() };
    this.#e().internal_dispatchDocuments({ document: r, id: e, type: 'updateDocument' });
    try {
      (await c.updateDocument({
        content: r.content || '',
        editorData:
          typeof r.editorData == 'string' ? r.editorData : JSON.stringify(r.editorData || {}),
        id: e,
        metadata: r.metadata || {},
        parentId: r.parentId || void 0,
        title: r.title || r.filename,
      }),
        await this.#e().refreshDocuments());
    } catch (l) {
      (console.error('[updatePageOptimistically] Failed to sync to DB:', l),
        this.#e().internal_dispatchDocuments({ document: n, id: e, type: 'updateDocument' }));
    }
  };
  useFetchPageDetail = (e) =>
    A(
      e ? ['pageDetail', e] : null,
      async () => {
        if (!e) return null;
        const a = await c.getDocumentById(e);
        return a
          ? {
              content: a.content || null,
              createdAt: a.createdAt ? new Date(a.createdAt) : new Date(),
              editorData:
                typeof a.editorData == 'string' ? JSON.parse(a.editorData) : a.editorData || null,
              fileType: a.fileType,
              filename: a.title || a.filename || 'Untitled',
              id: a.id,
              metadata: a.metadata || {},
              source: 'document',
              sourceType: h.EDITOR,
              title: a.title || '',
              totalCharCount: a.content?.length || 0,
              totalLineCount: 0,
              updatedAt: a.updatedAt ? new Date(a.updatedAt) : new Date(),
            }
          : (console.warn(`[useFetchPageDetail] Page not found: ${e}`), null);
      },
      {
        focusThrottleInterval: 5e3,
        onData: (a) => {
          if (!a || !e) return;
          const { documents: n } = this.#e();
          n?.some((i) => i.id === e) &&
            this.#e().internal_dispatchDocuments({ document: a, id: e, type: 'updateDocument' });
        },
        revalidateOnFocus: !0,
      },
    );
}
const $ = (s, e) => {
    switch (e.type) {
      case 'addDocument':
        return m(s ?? [], (t) => {
          t.unshift(e.document);
        });
      case 'removeDocument':
        return (
          s &&
          m(s, (t) => {
            const a = t.findIndex((n) => n.id === e.id);
            a !== -1 && t.splice(a, 1);
          })
        );
      case 'updateDocument':
        return (
          s &&
          m(s, (t) => {
            const a = t.findIndex((n) => n.id === e.id);
            a !== -1 && (t[a] = e.document);
          })
        );
      case 'replaceDocument':
        return s
          ? m(s, (t) => {
              const a = t.findIndex((n) => n.id === e.oldId);
              a !== -1 && (t[a] = e.document);
            })
          : [e.document];
      case 'setDocuments':
        return e.documents;
      case 'appendDocuments':
        return m(s ?? [], (t) => {
          t.push(...e.documents);
        });
      default:
        return s;
    }
  },
  z = P('page/internal'),
  b = (s, e, t) => new W(s, e, t);
class W {
  #e;
  #t;
  constructor(e, t, a) {
    ((this.#t = e), (this.#e = t));
  }
  internal_dispatchDocuments = (e, t) => {
    const { documents: a } = this.#e(),
      n = $(a, e);
    O(a, n) || this.#t({ documents: n }, !1, t ?? z(`dispatchDocuments/${e.type}`));
  };
}
const g = P('page/selection'),
  J = (s, e, t) => new K(s, e, t);
class K {
  #e;
  #t;
  constructor(e, t, a) {
    ((this.#t = e), (this.#e = t));
  }
  closeAllPagesDrawer = () => {
    this.#t({ allPagesDrawerOpen: !1 }, !1, g('closeAllPagesDrawer'));
  };
  openAllPagesDrawer = () => {
    this.#t({ allPagesDrawerOpen: !0 }, !1, g('openAllPagesDrawer'));
  };
  selectPage = (e) => {
    const { selectedPageId: t } = this.#e();
    t !== e &&
      (this.#t({ isCreatingNew: !1, selectedPageId: e }, !1, g('selectPage')),
      this.#e().navigateToPage(e));
  };
  setRenamingPageId = (e) => {
    this.#t({ renamingPageId: e }, !1, g('setRenamingPageId'));
  };
  setSelectedPageId = (e, t = !0) => {
    (this.#t({ selectedPageId: e }, !1, g('setSelectedPageId')), t && this.#e().navigateToPage(e));
  };
}
const U = (...s) => ({ ...q, ...E([b(...s), N(...s), J(...s), R(...s)]) }),
  j = F('page'),
  H = _()(j(U), C);
export { H as u };
