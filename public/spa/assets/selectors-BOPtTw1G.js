import { u as l } from './index-C8UyLGsD.js';
const d = (e) => e.documents === void 0,
  c = (e) => {
    const o = e.documents ?? [],
      { searchKeywords: n, showOnlyPagesNotInLibrary: u } = e;
    let s = o;
    if (
      ((s = s.filter((t) => t.sourceType !== 'file')),
      u && (s = s.filter((t) => !t.metadata?.knowledgeBaseId)),
      n.trim())
    ) {
      const t = n.toLowerCase();
      s = s.filter((r) => {
        const a = r.content?.toLowerCase() || '',
          i = r.title?.toLowerCase() || '';
        return a.includes(t) || i.includes(t);
      });
    }
    return s.sort((t, r) => {
      const a = t.createdAt ? new Date(t.createdAt).getTime() : 0;
      return (r.createdAt ? new Date(r.createdAt).getTime() : 0) - a;
    });
  },
  m = (e) => {
    const o = l.getState().status.pagePageSize || 20;
    return c(e).slice(0, o);
  },
  g = (e) => (o) => {
    if (e) return o.documents?.find((n) => n.id === e);
  },
  D = (e) => e.hasMoreDocuments,
  f = (e) => e.isLoadingMoreDocuments,
  w = (e) => e.documentsTotal,
  L = (e) => {
    const o = l.getState().status.pagePageSize || 20;
    return c(e).length > o;
  },
  S = (e) => c(e).length,
  p = {
    documentsTotal: w,
    filteredDocumentsCount: S,
    getDocumentById: g,
    getFilteredDocuments: c,
    getFilteredDocumentsLimited: m,
    hasMoreDocuments: D,
    hasMoreFilteredDocuments: L,
    isDocumentsLoading: d,
    isLoadingMoreDocuments: f,
  };
export { p as l };
