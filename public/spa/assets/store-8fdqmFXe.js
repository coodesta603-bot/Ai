const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/hooks-DTEJ_BvV.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/abortableRequest-CqTkNl3n.js',
      'assets/upload-BTy9wwF3.js',
      'assets/index-ClRvEh9W.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
      'assets/_url-C5lJURGN.js',
      'assets/v4-BKrj-4V8.js',
      'assets/useClientDataSWRWithSync-BKXDfgeT.js',
      'assets/core-BDFGQ_Ev.js',
      'assets/browser-Cc4eeHpk.js',
    ]),
) => i.map((i) => d[i]);
import {
  a_ as m,
  du as q,
  cH as Ge,
  cI as j,
  dt as Xe,
  u as Oe,
  at as re,
  _ as Ze,
  fr as ce,
  n as le,
  hl as ue,
  hm as Mt,
  dw as Et,
  cF as Tt,
  au as Ct,
  dv as Rt,
  cE as xt,
} from './index-C8UyLGsD.js';
import { a as kt } from './abortableRequest-CqTkNl3n.js';
import { B as At, e as bt } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { o as Pt } from './providerConfig-qS2Xx-oI.js';
import { U as Ut, u as _e, s as Bt } from './upload-BTy9wwF3.js';
import { aH as Ot } from './index-ClRvEh9W.js';
import { u as _t } from './useClientDataSWRWithSync-BKXDfgeT.js';
var ee = ((r) => ((r.API = 'api'), (r.EDITOR = 'editor'), (r.FILE = 'file'), (r.WEB = 'web'), r))(
  ee || {},
);
const qt = [
    '.DS_Store',
    'Thumbs.db',
    'desktop.ini',
    '.localized',
    'ehthumbs.db',
    'ehthumbs_vista.db',
    '$RECYCLE.BIN',
    'System Volume Information',
    '.Spotlight-V100',
    '.fseventsd',
    '.Trashes',
  ],
  Fe = qt,
  qe = 10,
  Kt = (r) => {
    const e = {},
      t = {};
    for (const s of r) {
      const a = (s.webkitRelativePath || s.name).split('/');
      if (a.length === 1) {
        (t[''] || (t[''] = []), t[''].push(s));
        continue;
      }
      const o = a.slice(0, -1);
      let i = '';
      for (let u = 0; u < o.length; u++) {
        const d = o[u],
          l = u > 0 ? o.slice(0, u).join('/') : null;
        ((i = u === 0 ? d : `${i}/${d}`), e[i] || (e[i] = { name: d, parent: l }));
      }
      const c = o.join('/');
      (t[c] || (t[c] = []), t[c].push(s));
    }
    return { filesByFolder: t, folders: e };
  },
  $t = (r) =>
    Object.keys(r).sort((t, s) => {
      const n = (t.match(/\//g) || []).length,
        a = (s.match(/\//g) || []).length;
      return n - a;
    }),
  zt = (r) => r.replaceAll(/[\u0000-\u001F"*/:<>?\\|]/g, '_').trim(),
  Nt = async (r) =>
    await new Promise((e) => {
      setTimeout(e, r);
    }),
  te = (r = 8) => Ot('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', r),
  fn = te();
class jt {
  async createDocument(e) {
    return m.document.createDocument.mutate(e);
  }
  async createDocuments(e) {
    return m.document.createDocuments.mutate({ documents: e });
  }
  async queryDocuments(e) {
    return m.document.queryDocuments.query(e);
  }
  async getDocumentById(e, t) {
    return t
      ? kt.execute(t, async (s) => m.document.getDocumentById.query({ id: e }, { signal: s }))
      : m.document.getDocumentById.query({ id: e });
  }
  async deleteDocument(e) {
    await m.document.deleteDocument.mutate({ id: e });
  }
  async deleteDocuments(e) {
    await m.document.deleteDocuments.mutate({ ids: e });
  }
  async updateDocument(e) {
    await m.document.updateDocument.mutate(e);
  }
}
const R = new jt();
class et {
  createFile = async (e, t) => m.file.createFile.mutate({ ...e, knowledgeBaseId: t });
  getFile = async (e) => {
    const t = await m.file.findById.query({ id: e });
    if (!t) throw new Error('file not found');
    return {
      createdAt: t.createdAt,
      id: t.id,
      name: t.name,
      size: t.size,
      source: t.source,
      type: t.fileType,
      updatedAt: t.updatedAt,
      url: t.url,
    };
  };
  removeFile = async (e) => {
    await m.file.removeFile.mutate({ id: e });
  };
  removeFiles = async (e) => {
    await m.file.removeFiles.mutate({ ids: e });
  };
  removeAllFiles = async () => {
    await m.file.removeAllFiles.mutate();
  };
  getKnowledgeItems = async (e) => m.file.getKnowledgeItems.query(e);
  getKnowledgeItemStatusesByIds = async (e) =>
    m.file.getKnowledgeItemStatusesByIds.query({ ids: e });
  resolveKnowledgeItemIds = async (e) => m.file.resolveKnowledgeItemIds.query(e);
  deleteKnowledgeItemsByQuery = async (e) => m.file.deleteKnowledgeItemsByQuery.mutate(e);
  getKnowledgeItem = async (e) => {
    if (e.startsWith('docs_')) {
      const t = await m.document.getDocumentById.query({ id: e });
      return t
        ? {
            chunkCount: null,
            chunkingError: null,
            chunkingStatus: null,
            content: t.content,
            createdAt: t.createdAt ? new Date(t.createdAt) : new Date(),
            editorData: t.editorData,
            embeddingError: null,
            embeddingStatus: null,
            fileType: t.fileType || 'custom/document',
            finishEmbedding: !1,
            id: t.id,
            metadata: t.metadata,
            name: t.title || t.filename || 'Untitled',
            parentId: t.parentId,
            size: t.totalCharCount || 0,
            slug: t.slug,
            sourceType: 'document',
            updatedAt: t.updatedAt ? new Date(t.updatedAt) : new Date(),
            url: t.source || '',
          }
        : null;
    } else return m.file.getFileItemById.query({ id: e });
  };
  getFolderBreadcrumb = async (e) => m.document.getFolderBreadcrumb.query({ slug: e });
  checkFileHash = async (e) => m.file.checkFileHash.mutate({ hash: e });
  removeFileAsyncTask = async (e, t) => m.file.removeFileAsyncTask.mutate({ id: e, type: t });
  updateFile = async (e, t) => m.file.updateFile.mutate({ id: e, ...t });
  getRecentFiles = async (e) => m.file.recentFiles.query({ limit: e });
  getRecentPages = async (e) => m.file.recentPages.query({ limit: e });
}
const I = new et();
class Wt {
  parseFileContent = async (e, t) => m.document.parseFileContent.mutate({ id: e, skipExist: t });
  createParseFileTask = async (e, t) => m.chunk.createParseFileTask.mutate({ id: e, skipExist: t });
  retryParseFile = async (e) => m.chunk.retryParseFileTask.mutate({ id: e });
  createEmbeddingChunksTask = async (e) => m.chunk.createEmbeddingChunksTask.mutate({ id: e });
  semanticSearch = async (e, t) => m.chunk.semanticSearch.mutate({ fileIds: t, query: e });
  semanticSearchForChat = async (e, t) => m.chunk.semanticSearchForChat.mutate(e, { signal: t });
  getFileContents = async (e, t) => m.chunk.getFileContents.mutate({ fileIds: e }, { signal: t });
  deleteMessageRagQuery = async (e) => m.message.removeMessageQuery.mutate({ id: e });
}
const Q = new Wt();
async function Ke(
  r,
  e,
  { concurrency: t = Number.POSITIVE_INFINITY, stopOnError: s = !0, signal: n } = {},
) {
  return new Promise((a, o) => {
    if (r[Symbol.iterator] === void 0 && r[Symbol.asyncIterator] === void 0)
      throw new TypeError(
        `Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof r})`,
      );
    if (typeof e != 'function') throw new TypeError('Mapper function is required');
    if (!((Number.isSafeInteger(t) && t >= 1) || t === Number.POSITIVE_INFINITY))
      throw new TypeError(
        `Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`,
      );
    const i = [],
      c = [],
      u = new Map();
    let d = !1,
      l = !1,
      f = !1,
      y = 0,
      F = 0;
    const k = r[Symbol.iterator] === void 0 ? r[Symbol.asyncIterator]() : r[Symbol.iterator](),
      S = () => {
        h(n.reason);
      },
      D = () => {
        n?.removeEventListener('abort', S);
      },
      C = (g) => {
        (a(g), D());
      },
      h = (g) => {
        ((d = !0), (l = !0), o(g), D());
      };
    n && (n.aborted && h(n.reason), n.addEventListener('abort', S, { once: !0 }));
    const p = async () => {
      if (l) return;
      const g = await k.next(),
        M = F;
      if ((F++, g.done)) {
        if (((f = !0), y === 0 && !l)) {
          if (!s && c.length > 0) {
            h(new AggregateError(c));
            return;
          }
          if (((l = !0), u.size === 0)) {
            C(i);
            return;
          }
          const E = [];
          for (const [w, x] of i.entries()) u.get(w) !== $e && E.push(x);
          C(E);
        }
        return;
      }
      (y++,
        (async () => {
          try {
            const E = await g.value;
            if (l) return;
            const w = await e(E, M);
            (w === $e && u.set(M, w), (i[M] = w), y--, await p());
          } catch (E) {
            if (s) h(E);
            else {
              (c.push(E), y--);
              try {
                await p();
              } catch (w) {
                h(w);
              }
            }
          }
        })());
    };
    (async () => {
      for (let g = 0; g < t; g++) {
        try {
          await p();
        } catch (M) {
          h(M);
          break;
        }
        if (f || d) break;
      }
    })();
  });
}
const $e = Symbol('skip'),
  de = 1920,
  ze = 5 * 1024 * 1024,
  Ht = new Set(['image/jpeg', 'image/png', 'image/webp']),
  Qt = ({ img: r, type: e, maxSize: t = de }) => {
    let s = r.width,
      n = r.height;
    (s > t || n > t) &&
      (s >= n
        ? ((n = Math.round((t / s) * n)), (s = t))
        : ((s = Math.round((t / n) * s)), (n = t)));
    const a = document.createElement('canvas'),
      o = a.getContext('2d');
    return (
      (a.width = s),
      (a.height = n),
      o.drawImage(r, 0, 0, r.width, r.height, 0, 0, s, n),
      a.toDataURL(e)
    );
  },
  Vt = (r, e) => {
    const t = atob(r.split(',')[1]),
      s = new Uint8Array(t.length);
    for (let n = 0; n < t.length; n++) s[n] = t.charCodeAt(n);
    return new File([s], e, { type: 'image/png' });
  },
  Jt = (r) =>
    new Promise((e) => {
      const t = new Image(),
        s = URL.createObjectURL(r);
      (t.addEventListener('load', () => {
        if ((URL.revokeObjectURL(s), t.width <= de && t.height <= de && r.size <= ze)) {
          e(r);
          return;
        }
        let n = de,
          a;
        do {
          const o = Qt({ img: t, maxSize: n });
          ((a = Vt(o, r.name)), (n = Math.round(n * 0.8)));
        } while (a.size > ze && n > 100);
        e(a);
      }),
        t.addEventListener('error', () => {
          (URL.revokeObjectURL(s), e(r));
        }),
        (t.src = s));
    }),
  tt = (r, e) => {
    switch (e.type) {
      case 'addFile':
        return q(r, (t) => {
          const { atStart: s, file: n } = e;
          s ? t.unshift(n) : t.push(n);
        });
      case 'addFiles':
        return q(r, (t) => {
          const { atStart: s, files: n } = e;
          for (const a of n) s ? t.unshift(a) : t.push(a);
        });
      case 'updateFile':
        return q(r, (t) => {
          const s = t.find((n) => n.id === e.id);
          s && Object.assign(s, e.value);
        });
      case 'updateFileStatus':
        return q(r, (t) => {
          const s = t.find((n) => n.id === e.id);
          s && (s.status = e.status);
        });
      case 'updateFileStatuses':
        return q(r, (t) => {
          const s = new Set(e.ids);
          for (const n of t) s.has(n.id) && (n.status = e.status);
        });
      case 'updateFileUploadState':
        return q(r, (t) => {
          const s = t.find((n) => n.id === e.id);
          s && (s.uploadState = e.uploadState);
        });
      case 'removeFile':
        return q(r, (t) => {
          const s = t.findIndex((n) => n.id === e.id);
          s !== -1 && t.splice(s, 1);
        });
      case 'removeFiles':
        return q(r, (t) => {
          for (const s of e.ids) {
            const n = t.findIndex((a) => a.id === s);
            n !== -1 && t.splice(n, 1);
          }
        });
      default:
        throw new Error('Unhandled action type');
    }
  },
  pe = (r) => !!(r.startsWith('image') || r.startsWith('video') || r.startsWith('audio')),
  hn = Object.freeze(
    Object.defineProperty({ __proto__: null, isChunkingUnsupported: pe }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  ae = Xe('chat'),
  Yt = (r, e, t) => new Gt(r, e, t);
class Gt {
  #e;
  #t;
  constructor(e, t, s) {
    ((this.#t = e), (this.#e = t));
  }
  addChatContextSelection = (e) => {
    const t = this.#e().chatContextSelections,
      s = [e, ...t.filter((n) => n.id !== e.id)];
    this.#t({ chatContextSelections: s }, !1, ae('addChatContextSelection'));
  };
  clearChatContextSelections = () => {
    this.#t({ chatContextSelections: [] }, !1, ae('clearChatContextSelections'));
  };
  clearChatUploadFileList = () => {
    this.#t({ chatUploadFileList: [] }, !1, ae('clearChatUploadFileList'));
  };
  dispatchChatUploadFileList = (e) => {
    const t = tt(this.#e().chatUploadFileList, e);
    t !== this.#e().chatUploadFileList &&
      this.#t({ chatUploadFileList: t }, !1, `dispatchChatFileList/${e.type}`);
  };
  removeChatContextSelection = (e) => {
    const t = this.#e().chatContextSelections.filter((s) => s.id !== e);
    this.#t({ chatContextSelections: t }, !1, ae('removeChatContextSelection'));
  };
  removeChatUploadFile = async (e) => {
    const { dispatchChatUploadFileList: t } = this.#e();
    (t({ id: e, type: 'removeFile' }), await I.removeFile(e));
  };
  startAsyncTask = async (e, t, s) => {
    await t(e);
    let n = !1;
    for (; !n; ) {
      await Nt(2e3);
      let a;
      try {
        a = (await I.getKnowledgeItem(e)) ?? void 0;
      } catch (o) {
        console.error('getFileItem Error:', o);
        continue;
      }
      if (!a) return;
      (s(a),
        (a.finishEmbedding || a.chunkingStatus === 'error' || a.embeddingStatus === 'error') &&
          (n = !0));
    }
  };
  uploadChatFiles = async (e) => {
    const { dispatchChatUploadFileList: t } = this.#e(),
      s = e.filter((i) => !Fe.includes(i.name)),
      n = await Promise.all(s.map((i) => (Ht.has(i.type) ? Jt(i) : i))),
      a = await Promise.all(
        n.map(async (i) => {
          let c, u;
          if (i.type.startsWith('image') || i.type.startsWith('video')) {
            const d = await i.arrayBuffer();
            c = URL.createObjectURL(new Blob([d], { type: i.type }));
            const l = At.from(d).toString('base64');
            u = `data:${i.type};base64,${l}`;
          }
          return { base64Url: u, file: i, id: i.name, previewUrl: c, status: 'pending' };
        }),
      );
    t({ files: a, type: 'addFiles' });
    const o = n.map(async (i) => {
      let c;
      try {
        c = await this.#e().uploadWithProgress({ file: i, onStatusUpdate: t });
      } catch (u) {
        (u?.message !== 'UNAUTHORIZED' &&
          Ge.error({
            description:
              u === Ut
                ? j('upload.networkError', { ns: 'error' })
                : typeof u == 'string'
                  ? u
                  : j('upload.unknownError', { ns: 'error', reason: u.message }),
            message: j('upload.uploadFailed', { ns: 'error' }),
          }),
          t({ id: i.name, type: 'removeFile' }));
      }
      c && (pe(i.type) || (await Q.parseFileContent(c.id)));
    });
    await Promise.all(o);
  };
}
const Xt = { chatContextSelections: [], chatUploadFileList: [], uploadingIds: [] },
  Zt = (r, e, t) => new es(r, e, t);
class es {
  #e;
  constructor(e, t, s) {
    this.#e = e;
  }
  closeChunkDrawer = () => {
    this.#e({ chunkDetailId: null, isSimilaritySearch: !1, similaritySearchChunks: [] });
  };
  highlightChunks = (e) => {
    this.#e({ highlightChunkIds: e });
  };
  openChunkDrawer = (e) => {
    this.#e({ chunkDetailId: e });
  };
  semanticSearch = async (e, t) => {
    this.#e({ isSimilaritySearching: !0 });
    const s = await Q.semanticSearch(e, [t]);
    this.#e({ isSimilaritySearching: !1, similaritySearchChunks: s });
  };
}
const ts = { chunkDetailId: null, highlightChunkIds: [], similaritySearchChunks: [] },
  z = (r) =>
    r
      ? JSON.stringify({
          category: r.category ?? null,
          libraryId: r.libraryId ?? null,
          parentId: r.parentId ?? null,
          q: r.q ?? null,
          showFilesInKnowledgeBase: r.showFilesInKnowledgeBase ?? null,
          sorter: r.sorter ?? null,
          sortType: r.sortType ?? null,
        })
      : 'resource-query:default',
  pn = (r, e, t) => {
    const s = z(t),
      n = new Map(r.map((d) => [d.id, d])),
      a = Array.from(e.values()).filter((d) => d._optimistic?.queryKey === s),
      o = new Map(),
      i = [];
    for (const d of a) {
      if (n.has(d.id)) {
        o.set(d.id, d);
        continue;
      }
      i.push(d);
    }
    const c = [...i, ...r.map((d) => o.get(d.id) ?? d)],
      u = new Map(e);
    for (const d of c) u.set(d.id, d);
    return { changed: !bt(c, r) || i.length > 0 || o.size > 0, resourceList: c, resourceMap: u };
  },
  T = Xe('document'),
  st = new Set(['editor', 'file', 'api']),
  nt = new Set(['custom/document', 'application/pdf']),
  Se = 'custom/document',
  Ne = (r) => st.has(r.sourceType) && nt.has(r.fileType),
  ss = (r, e, t) => new ns(r, e, t);
class ns {
  #e;
  #t;
  constructor(e, t, s) {
    ((this.#t = e), (this.#e = t));
  }
  #s = (e) => {
    const { documents: t, localDocumentMap: s } = this.#e();
    return s.get(e) ?? t.find((n) => n.id === e);
  };
  #a = (e, t) => (e ? new Date(e) : t);
  #o = (e, t) => (e === void 0 ? t : e === null ? null : typeof e == 'string' ? JSON.parse(e) : e);
  #l = (e, t) => {
    const s = t.metadata !== void 0 ? { ...e.metadata, ...t.metadata } : e.metadata,
      n = s ? Object.fromEntries(Object.entries(s).filter(([, a]) => a !== void 0)) : {};
    return { ...e, ...t, metadata: n, title: t.title || e.title, updatedAt: new Date() };
  };
  #c = (e, t, s) => {
    const { localDocumentMap: n } = this.#e(),
      a = new Map(n);
    (a.set(e, t), this.#t({ localDocumentMap: a }, !1, s));
  };
  #n = (e) => {
    const { queryParams: t, resourceMap: s } = this.#e();
    if (!t || (t.libraryId !== void 0 && (e.knowledgeBaseId ?? void 0) !== t.libraryId)) return !1;
    const n = t.q?.trim().toLowerCase();
    return n && !`${e.name} ${e.title ?? ''}`.trim().toLowerCase().includes(n)
      ? !1
      : t.parentId == null
        ? (e.parentId ?? null) === null
        : e.parentId
          ? e.parentId === t.parentId
            ? !0
            : s.get(e.parentId)?.slug === t.parentId
          : !1;
  };
  #r = (e, t, s) => {
    const n = s?.optimistic ?? !1,
      a = new Date();
    return {
      ...t,
      _optimistic: n
        ? {
            error: t?._optimistic?.error,
            isPending: !0,
            lastSyncAttempt: t?._optimistic?.lastSyncAttempt,
            queryKey: z(this.#e().queryParams),
            retryCount: t?._optimistic?.retryCount ?? 0,
          }
        : void 0,
      content: e.content !== void 0 ? e.content : (t?.content ?? null),
      createdAt: this.#a(e.createdAt, t?.createdAt ?? a),
      editorData: this.#o(e.editorData, t?.editorData),
      fileType: e.fileType ?? t?.fileType ?? Se,
      id: e.id,
      knowledgeBaseId: e.knowledgeBaseId ?? t?.knowledgeBaseId,
      metadata: e.metadata ?? t?.metadata,
      name: e.title !== void 0 ? (e.title ?? 'Untitled') : (t?.name ?? t?.title ?? 'Untitled'),
      parentId: e.parentId !== void 0 ? e.parentId : (t?.parentId ?? null),
      size: e.totalCharCount ?? t?.size ?? e.content?.length ?? 0,
      slug: e.slug !== void 0 ? e.slug : t?.slug,
      sourceType: 'document',
      title: e.title !== void 0 ? (e.title ?? void 0) : (t?.title ?? void 0),
      updatedAt: this.#a(e.updatedAt, t?.updatedAt ?? a),
      url: e.source !== void 0 ? (e.source ?? '') : (t?.url ?? ''),
    };
  };
  #i = (e, t) => {
    const {
      queryParams: s,
      removeLocalResource: n,
      replaceLocalResource: a,
      resourceList: o,
      resourceMap: i,
    } = this.#e();
    if (i.has(e.id) || o.some((u) => u.id === e.id)) {
      !s || this.#n(e) ? a(e.id, e) : n(e.id);
      return;
    }
    t?.allowInsert === !1 || !s || (this.#n(e) && a(e.id, e));
  };
  createDocument = async ({ title: e, content: t, knowledgeBaseId: s, parentId: n }) => {
    const a = Date.now(),
      o = await R.createDocument({
        content: t,
        editorData: '{}',
        fileType: Se,
        knowledgeBaseId: s,
        metadata: { createdAt: a },
        parentId: n,
        title: e,
      });
    return (
      this.#i(
        this.#r(
          {
            content: o.content,
            createdAt: o.createdAt,
            editorData: o.editorData,
            fileType: o.fileType,
            id: o.id,
            knowledgeBaseId: s,
            metadata: o.metadata,
            parentId: o.parentId,
            source: o.source,
            title: o.title,
            totalCharCount: o.totalCharCount,
            updatedAt: o.updatedAt,
          },
          void 0,
        ),
      ),
      o
    );
  };
  createFolder = async (e, t, s) => {
    const n = Date.now(),
      o = te(8)(),
      i = await R.createDocument({
        content: '',
        editorData: '{}',
        fileType: 'custom/folder',
        knowledgeBaseId: s,
        metadata: { createdAt: n },
        parentId: t,
        slug: o,
        title: e,
      });
    return (
      this.#i(
        this.#r(
          {
            content: i.content,
            createdAt: i.createdAt,
            editorData: i.editorData,
            fileType: i.fileType,
            id: i.id,
            knowledgeBaseId: s,
            metadata: i.metadata,
            parentId: i.parentId,
            slug: i.slug,
            source: i.source,
            title: i.title,
            totalCharCount: i.totalCharCount,
            updatedAt: i.updatedAt,
          },
          void 0,
        ),
      ),
      i.id
    );
  };
  createOptimisticDocument = (e = 'Untitled') => {
    const { localDocumentMap: t } = this.#e(),
      s = `temp-document-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      n = new Date(),
      a = {
        content: null,
        createdAt: n,
        editorData: null,
        fileType: Se,
        filename: e,
        id: s,
        metadata: {},
        source: 'document',
        sourceType: ee.EDITOR,
        title: e,
        totalCharCount: 0,
        totalLineCount: 0,
        updatedAt: n,
      },
      o = new Map(t);
    return (o.set(s, a), this.#t({ localDocumentMap: o }, !1, T('createOptimisticDocument')), s);
  };
  duplicateDocument = async (e) => {
    const t = await R.getDocumentById(e);
    if (!t) throw new Error(`Page with ID ${e} not found`);
    const s = await R.createDocument({
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
      { localDocumentMap: n } = this.#e(),
      a = new Map(n),
      o = {
        content: s.content || null,
        createdAt: s.createdAt ? new Date(s.createdAt) : new Date(),
        editorData:
          typeof s.editorData == 'string' ? JSON.parse(s.editorData) : s.editorData || null,
        fileType: s.fileType,
        filename: s.title || s.filename || '',
        id: s.id,
        metadata: s.metadata || {},
        source: 'document',
        sourceType: ee.EDITOR,
        title: s.title || '',
        totalCharCount: s.content?.length || 0,
        totalLineCount: 0,
        updatedAt: s.updatedAt ? new Date(s.updatedAt) : new Date(),
      };
    return (a.set(s.id, o), this.#t({ localDocumentMap: a }, !1, T('duplicateDocument')), s);
  };
  fetchDocumentDetail = async (e) => {
    try {
      const t = await R.getDocumentById(e);
      if (!t) {
        console.warn(`[fetchDocumentDetail] Document not found: ${e}`);
        return;
      }
      const { localDocumentMap: s } = this.#e(),
        n = new Map(s),
        a = {
          content: t.content || null,
          createdAt: t.createdAt ? new Date(t.createdAt) : new Date(),
          editorData:
            typeof t.editorData == 'string' ? JSON.parse(t.editorData) : t.editorData || null,
          fileType: t.fileType,
          filename: t.title || t.filename || 'Untitled',
          id: t.id,
          metadata: t.metadata || {},
          source: 'document',
          sourceType: ee.EDITOR,
          title: t.title || '',
          totalCharCount: t.content?.length || 0,
          totalLineCount: 0,
          updatedAt: t.updatedAt ? new Date(t.updatedAt) : new Date(),
        };
      (n.set(e, a), this.#t({ localDocumentMap: n }, !1, T('fetchDocumentDetail')));
    } catch (t) {
      console.error('[fetchDocumentDetail] Failed to fetch document:', t);
    }
  };
  fetchDocuments = async ({ pageOnly: e = !1 }) => {
    this.#t({ isDocumentListLoading: !0 }, !1, T('fetchDocuments/start'));
    try {
      const t = Oe.getState().status.pagePageSize || 20,
        s = e ? { fileTypes: Array.from(nt), sourceTypes: Array.from(st) } : void 0,
        n = s ? { current: 0, pageSize: t, ...s } : { current: 0, pageSize: t },
        a = await R.queryDocuments(n),
        o = a.items
          .filter(Ne)
          .map((d) => ({ ...d, filename: d.filename ?? d.title ?? 'Untitled' })),
        i = a.items.length >= t;
      this.#t(
        {
          currentPage: 0,
          documentQueryFilter: s,
          documents: o,
          documentsTotal: a.total,
          hasMoreDocuments: i,
          isDocumentListLoading: !1,
        },
        !1,
        T('fetchDocuments/success'),
      );
      const { localDocumentMap: c } = this.#e(),
        u = new Map(c);
      for (const [d] of c.entries()) d.startsWith('temp-document-') && u.delete(d);
      this.#t({ localDocumentMap: u }, !1, T('fetchDocuments/syncLocalMap'));
    } catch (t) {
      throw (
        console.error('Failed to fetch pages:', t),
        this.#t({ isDocumentListLoading: !1 }, !1, T('fetchDocuments/error')),
        t
      );
    }
  };
  getOptimisticDocuments = () => {
    const { localDocumentMap: e, documents: t } = this.#e(),
      s = new Set(),
      n = t.map((a) => {
        s.add(a.id);
        const o = e.get(a.id);
        return o && new Date(o.updatedAt) >= new Date(a.updatedAt) ? o : a;
      });
    for (const [a, o] of e.entries()) s.has(a) || n.unshift(o);
    return n;
  };
  loadMoreDocuments = async () => {
    const {
      currentPage: e,
      isLoadingMoreDocuments: t,
      hasMoreDocuments: s,
      documentQueryFilter: n,
    } = this.#e();
    if (t || !s) return;
    const a = e + 1;
    this.#t({ isLoadingMoreDocuments: !0 }, !1, T('loadMoreDocuments/start'));
    try {
      const o = Oe.getState().status.pagePageSize || 20,
        i = n ? { current: a, pageSize: o, ...n } : { current: a, pageSize: o },
        c = await R.queryDocuments(i),
        u = c.items
          .filter(Ne)
          .map((l) => ({ ...l, filename: l.filename ?? l.title ?? 'Untitled' })),
        d = c.items.length >= o;
      this.#t(
        {
          currentPage: a,
          documents: [...this.#e().documents, ...u],
          documentsTotal: c.total,
          hasMoreDocuments: d,
          isLoadingMoreDocuments: !1,
        },
        !1,
        T('loadMoreDocuments/success'),
      );
    } catch (o) {
      (console.error('Failed to load more pages:', o),
        this.#t({ isLoadingMoreDocuments: !1 }, !1, T('loadMoreDocuments/error')));
    }
  };
  removeDocument = async (e) => {
    const { localDocumentMap: t, documents: s } = this.#e(),
      n = new Map(t);
    n.delete(e);
    const a = s.filter((o) => o.id !== e);
    this.#t({ documents: a, localDocumentMap: n }, !1, T('removeDocument/optimistic'));
    try {
      await R.deleteDocument(e);
    } catch (o) {
      console.error('Failed to delete document:', o);
      const i = new Map(t);
      throw (this.#t({ documents: s, localDocumentMap: i }, !1, T('removeDocument/restore')), o);
    }
  };
  removeTempDocument = (e) => {
    const { localDocumentMap: t } = this.#e(),
      s = new Map(t);
    (s.delete(e), this.#t({ localDocumentMap: s }, !1, T('removeTempDocument')));
  };
  replaceTempDocumentWithReal = (e, t) => {
    const { localDocumentMap: s } = this.#e(),
      n = new Map(s);
    (n.delete(e),
      n.set(t.id, t),
      this.#t({ localDocumentMap: n }, !1, T('replaceTempDocumentWithReal')));
  };
  updateDocument = async (e, t) => {
    await R.updateDocument({
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
    });
    const s = this.#s(e);
    if (s) {
      const a = this.#l(s, t);
      (this.#c(e, a, T('updateDocument')), this.#i(this.#r(a, this.#e().resourceMap.get(e))));
      return;
    }
    const n = this.#e().resourceMap.get(e);
    n &&
      this.#i(
        this.#r(
          {
            content: t.content,
            editorData: t.editorData,
            fileType: n.fileType,
            id: e,
            metadata: t.metadata,
            parentId: t.parentId,
            title: t.title,
            updatedAt: new Date(),
          },
          n,
        ),
      );
  };
  updateDocumentOptimistically = async (e, t) => {
    const { localDocumentMap: s, documents: n } = this.#e();
    let a = s.get(e);
    if ((a || (a = n.find((c) => c.id === e)), !a)) {
      console.warn('[updateDocumentOptimistically] Page not found:', e);
      return;
    }
    const o = this.#e().resourceMap.get(e),
      i = this.#l(a, t);
    (this.#c(e, i, T('updateDocumentOptimistically')),
      o && this.#i(this.#r(i, o, { optimistic: !0 })));
    try {
      (await R.updateDocument({
        content: i.content || '',
        editorData:
          typeof i.editorData == 'string' ? i.editorData : JSON.stringify(i.editorData || {}),
        id: e,
        metadata: i.metadata || {},
        parentId: i.parentId !== void 0 ? i.parentId : void 0,
        title: i.title || i.filename,
      }),
        o && this.#i(this.#r(i, o)));
    } catch (c) {
      console.error('[updateDocumentOptimistically] Failed to sync to DB:', c);
      const u = new Map(s);
      (a ? u.set(e, a) : u.delete(e),
        this.#t({ localDocumentMap: u }, !1, T('revertOptimisticUpdate')),
        o && this.#i(o));
    }
  };
  useFetchDocumentDetail = (e) =>
    _t(
      e ? ['documentDetail', e] : null,
      async () => {
        if (!e) return null;
        const s = await R.getDocumentById(e);
        return s
          ? {
              content: s.content || null,
              createdAt: s.createdAt ? new Date(s.createdAt) : new Date(),
              editorData:
                typeof s.editorData == 'string' ? JSON.parse(s.editorData) : s.editorData || null,
              fileType: s.fileType,
              filename: s.title || s.filename || 'Untitled',
              id: s.id,
              metadata: s.metadata || {},
              source: 'document',
              sourceType: ee.EDITOR,
              title: s.title || '',
              totalCharCount: s.content?.length || 0,
              totalLineCount: 0,
              updatedAt: s.updatedAt ? new Date(s.updatedAt) : new Date(),
            }
          : (console.warn(`[useFetchDocumentDetail] Document not found: ${e}`), null);
      },
      {
        focusThrottleInterval: 5e3,
        onData: (s) => {
          if (!s) return;
          const { localDocumentMap: n } = this.#e(),
            a = new Map(n);
          (a.set(e, s), this.#t({ localDocumentMap: a }, !1, T('useFetchDocumentDetail/onData')));
        },
        revalidateOnFocus: !0,
      },
    );
}
const rs = {
  currentPage: 0,
  documentQueryFilter: void 0,
  documents: [],
  documentsTotal: 0,
  hasMoreDocuments: !1,
  isDocumentListLoading: !1,
  isLoadingMoreDocuments: !1,
  localDocumentMap: new Map(),
};
var je = {},
  as = function (r, e, t, s, n) {
    var a = new Worker(
      je[e] ||
        (je[e] = URL.createObjectURL(
          new Blob(
            [
              r +
                ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})',
            ],
            { type: 'text/javascript' },
          ),
        )),
    );
    return (
      (a.onmessage = function (o) {
        var i = o.data,
          c = i.$e$;
        if (c) {
          var u = new Error(c[0]);
          ((u.code = c[1]), (u.stack = c[2]), n(u, null));
        } else n(null, i);
      }),
      a.postMessage(t, s),
      a
    );
  },
  b = Uint8Array,
  N = Uint16Array,
  rt = Int32Array,
  Me = new b([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
  ]),
  Ee = new b([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
    13, 0, 0,
  ]),
  at = new b([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  it = function (r, e) {
    for (var t = new N(31), s = 0; s < 31; ++s) t[s] = e += 1 << r[s - 1];
    for (var n = new rt(t[30]), s = 1; s < 30; ++s)
      for (var a = t[s]; a < t[s + 1]; ++a) n[a] = ((a - t[s]) << 5) | s;
    return { b: t, r: n };
  },
  ot = it(Me, 2),
  Te = ot.b,
  is = ot.r;
((Te[28] = 258), (is[258] = 28));
var os = it(Ee, 0),
  ct = os.b,
  me = new N(32768);
for (var v = 0; v < 32768; ++v) {
  var K = ((v & 43690) >> 1) | ((v & 21845) << 1);
  ((K = ((K & 52428) >> 2) | ((K & 13107) << 2)),
    (K = ((K & 61680) >> 4) | ((K & 3855) << 4)),
    (me[v] = (((K & 65280) >> 8) | ((K & 255) << 8)) >> 1));
}
var V = function (r, e, t) {
    for (var s = r.length, n = 0, a = new N(e); n < s; ++n) r[n] && ++a[r[n] - 1];
    var o = new N(e);
    for (n = 1; n < e; ++n) o[n] = (o[n - 1] + a[n - 1]) << 1;
    var i;
    if (t) {
      i = new N(1 << e);
      var c = 15 - e;
      for (n = 0; n < s; ++n)
        if (r[n])
          for (
            var u = (n << 4) | r[n], d = e - r[n], l = o[r[n] - 1]++ << d, f = l | ((1 << d) - 1);
            l <= f;
            ++l
          )
            i[me[l] >> c] = u;
    } else for (i = new N(s), n = 0; n < s; ++n) r[n] && (i[n] = me[o[r[n] - 1]++] >> (15 - r[n]));
    return i;
  },
  se = new b(288);
for (var v = 0; v < 144; ++v) se[v] = 8;
for (var v = 144; v < 256; ++v) se[v] = 9;
for (var v = 256; v < 280; ++v) se[v] = 7;
for (var v = 280; v < 288; ++v) se[v] = 8;
var lt = new b(32);
for (var v = 0; v < 32; ++v) lt[v] = 5;
var ut = V(se, 9, 1),
  dt = V(lt, 5, 1),
  fe = function (r) {
    for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
    return e;
  },
  P = function (r, e, t) {
    var s = (e / 8) | 0;
    return ((r[s] | (r[s + 1] << 8)) >> (e & 7)) & t;
  },
  he = function (r, e) {
    var t = (e / 8) | 0;
    return (r[t] | (r[t + 1] << 8) | (r[t + 2] << 16)) >> (e & 7);
  },
  ft = function (r) {
    return ((r + 7) / 8) | 0;
  },
  ge = function (r, e, t) {
    return (
      (e == null || e < 0) && (e = 0),
      (t == null || t > r.length) && (t = r.length),
      new b(r.subarray(e, t))
    );
  },
  ht = [
    'unexpected EOF',
    'invalid block type',
    'invalid length/literal',
    'invalid distance',
    'stream finished',
    'no stream handler',
    ,
    'no callback',
    'invalid UTF-8 data',
    'extra field too long',
    'date not in range 1980-2099',
    'filename too long',
    'stream finishing',
    'invalid zip data',
  ],
  A = function (r, e, t) {
    var s = new Error(e || ht[r]);
    if (((s.code = r), Error.captureStackTrace && Error.captureStackTrace(s, A), !t)) throw s;
    return s;
  },
  pt = function (r, e, t, s) {
    var n = r.length,
      a = s ? s.length : 0;
    if (!n || (e.f && !e.l)) return t || new b(0);
    var o = !t,
      i = o || e.i != 2,
      c = e.i;
    o && (t = new b(n * 3));
    var u = function (Pe) {
        var Ue = t.length;
        if (Pe > Ue) {
          var Be = new b(Math.max(Ue * 2, Pe));
          (Be.set(t), (t = Be));
        }
      },
      d = e.f || 0,
      l = e.p || 0,
      f = e.b || 0,
      y = e.l,
      F = e.d,
      k = e.m,
      S = e.n,
      D = n * 8;
    do {
      if (!y) {
        d = P(r, l, 1);
        var C = P(r, l + 1, 3);
        if (((l += 3), C))
          if (C == 1) ((y = ut), (F = dt), (k = 9), (S = 5));
          else if (C == 2) {
            var M = P(r, l, 31) + 257,
              E = P(r, l + 10, 15) + 4,
              w = M + P(r, l + 5, 31) + 1;
            l += 14;
            for (var x = new b(w), O = new b(19), L = 0; L < E; ++L) O[at[L]] = P(r, l + L * 3, 7);
            l += E * 3;
            for (var J = fe(O), St = (1 << J) - 1, It = V(O, J, 1), L = 0; L < w; ) {
              var Re = It[P(r, l, St)];
              l += Re & 15;
              var h = Re >> 4;
              if (h < 16) x[L++] = h;
              else {
                var W = 0,
                  ne = 0;
                for (
                  h == 16
                    ? ((ne = 3 + P(r, l, 3)), (l += 2), (W = x[L - 1]))
                    : h == 17
                      ? ((ne = 3 + P(r, l, 7)), (l += 3))
                      : h == 18 && ((ne = 11 + P(r, l, 127)), (l += 7));
                  ne--;
                )
                  x[L++] = W;
              }
            }
            var xe = x.subarray(0, M),
              _ = x.subarray(M);
            ((k = fe(xe)), (S = fe(_)), (y = V(xe, k, 1)), (F = V(_, S, 1)));
          } else A(1);
        else {
          var h = ft(l) + 4,
            p = r[h - 4] | (r[h - 3] << 8),
            g = h + p;
          if (g > n) {
            c && A(0);
            break;
          }
          (i && u(f + p), t.set(r.subarray(h, g), f), (e.b = f += p), (e.p = l = g * 8), (e.f = d));
          continue;
        }
        if (l > D) {
          c && A(0);
          break;
        }
      }
      i && u(f + 131072);
      for (var Dt = (1 << k) - 1, Ft = (1 << S) - 1, ye = l; ; ye = l) {
        var W = y[he(r, l) & Dt],
          H = W >> 4;
        if (((l += W & 15), l > D)) {
          c && A(0);
          break;
        }
        if ((W || A(2), H < 256)) t[f++] = H;
        else if (H == 256) {
          ((ye = l), (y = null));
          break;
        } else {
          var ke = H - 254;
          if (H > 264) {
            var L = H - 257,
              Y = Me[L];
            ((ke = P(r, l, (1 << Y) - 1) + Te[L]), (l += Y));
          }
          var we = F[he(r, l) & Ft],
            ve = we >> 4;
          (we || A(3), (l += we & 15));
          var _ = ct[ve];
          if (ve > 3) {
            var Y = Ee[ve];
            ((_ += he(r, l) & ((1 << Y) - 1)), (l += Y));
          }
          if (l > D) {
            c && A(0);
            break;
          }
          i && u(f + 131072);
          var Ae = f + ke;
          if (f < _) {
            var be = a - _,
              Lt = Math.min(_, Ae);
            for (be + f < 0 && A(3); f < Lt; ++f) t[f] = s[be + f];
          }
          for (; f < Ae; ++f) t[f] = t[f - _];
        }
      }
      ((e.l = y),
        (e.p = ye),
        (e.b = f),
        (e.f = d),
        y && ((d = 1), (e.m = k), (e.d = F), (e.n = S)));
    } while (!d);
    return f != t.length && o ? ge(t, 0, f) : t.subarray(0, f);
  },
  cs = new b(0),
  ls = function (r, e) {
    var t = {};
    for (var s in r) t[s] = r[s];
    for (var s in e) t[s] = e[s];
    return t;
  },
  We = function (r, e, t) {
    for (
      var s = r(),
        n = r.toString(),
        a = n
          .slice(n.indexOf('[') + 1, n.lastIndexOf(']'))
          .replace(/\s+/g, '')
          .split(','),
        o = 0;
      o < s.length;
      ++o
    ) {
      var i = s[o],
        c = a[o];
      if (typeof i == 'function') {
        e += ';' + c + '=';
        var u = i.toString();
        if (i.prototype)
          if (u.indexOf('[native code]') != -1) {
            var d = u.indexOf(' ', 8) + 1;
            e += u.slice(d, u.indexOf('(', d));
          } else {
            e += u;
            for (var l in i.prototype)
              e += ';' + c + '.prototype.' + l + '=' + i.prototype[l].toString();
          }
        else e += u;
      } else t[c] = i;
    }
    return e;
  },
  ie = [],
  us = function (r) {
    var e = [];
    for (var t in r) r[t].buffer && e.push((r[t] = new r[t].constructor(r[t])).buffer);
    return e;
  },
  ds = function (r, e, t, s) {
    if (!ie[t]) {
      for (var n = '', a = {}, o = r.length - 1, i = 0; i < o; ++i) n = We(r[i], n, a);
      ie[t] = { c: We(r[o], n, a), e: a };
    }
    var c = ls({}, ie[t].e);
    return as(
      ie[t].c +
        ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' +
        e.toString() +
        '}',
      t,
      c,
      us(c),
      s,
    );
  },
  fs = function () {
    return [b, N, rt, Me, Ee, at, Te, ct, ut, dt, me, ht, V, fe, P, he, ft, ge, A, pt, Ce, mt, gt];
  },
  mt = function (r) {
    return postMessage(r, [r.buffer]);
  },
  gt = function (r) {
    return r && { out: r.size && new b(r.size), dictionary: r.dictionary };
  },
  hs = function (r, e, t, s, n, a) {
    var o = ds(t, s, n, function (i, c) {
      (o.terminate(), a(i, c));
    });
    return (
      o.postMessage([r, e], e.consume ? [r.buffer] : []),
      function () {
        o.terminate();
      }
    );
  },
  B = function (r, e) {
    return r[e] | (r[e + 1] << 8);
  },
  U = function (r, e) {
    return (r[e] | (r[e + 1] << 8) | (r[e + 2] << 16) | (r[e + 3] << 24)) >>> 0;
  },
  Ie = function (r, e) {
    return U(r, e) + U(r, e + 4) * 4294967296;
  };
function ps(r, e, t) {
  return (
    t || ((t = e), (e = {})),
    typeof t != 'function' && A(7),
    hs(
      r,
      e,
      [fs],
      function (s) {
        return mt(Ce(s.data[0], gt(s.data[1])));
      },
      1,
      t,
    )
  );
}
function Ce(r, e) {
  return pt(r, { i: 2 }, e && e.out, e && e.dictionary);
}
var Le = typeof TextDecoder < 'u' && new TextDecoder(),
  ms = 0;
try {
  (Le.decode(cs, { stream: !0 }), (ms = 1));
} catch {}
var gs = function (r) {
  for (var e = '', t = 0; ; ) {
    var s = r[t++],
      n = (s > 127) + (s > 223) + (s > 239);
    if (t + n > r.length) return { s: e, r: ge(r, t - 1) };
    n
      ? n == 3
        ? ((s =
            (((s & 15) << 18) | ((r[t++] & 63) << 12) | ((r[t++] & 63) << 6) | (r[t++] & 63)) -
            65536),
          (e += String.fromCharCode(55296 | (s >> 10), 56320 | (s & 1023))))
        : n & 1
          ? (e += String.fromCharCode(((s & 31) << 6) | (r[t++] & 63)))
          : (e += String.fromCharCode(((s & 15) << 12) | ((r[t++] & 63) << 6) | (r[t++] & 63)))
      : (e += String.fromCharCode(s));
  }
};
function ys(r, e) {
  if (e) {
    for (var t = '', s = 0; s < r.length; s += 16384)
      t += String.fromCharCode.apply(null, r.subarray(s, s + 16384));
    return t;
  } else {
    if (Le) return Le.decode(r);
    var n = gs(r),
      a = n.s,
      t = n.r;
    return (t.length && A(8), a);
  }
}
var ws = function (r, e) {
    return e + 30 + B(r, e + 26) + B(r, e + 28);
  },
  vs = function (r, e, t) {
    var s = B(r, e + 28),
      n = ys(r.subarray(e + 46, e + 46 + s), !(B(r, e + 8) & 2048)),
      a = e + 46 + s,
      o = U(r, e + 20),
      i = t && o == 4294967295 ? Ss(r, a) : [o, U(r, e + 24), U(r, e + 42)],
      c = i[0],
      u = i[1],
      d = i[2];
    return [B(r, e + 10), c, u, n, a + B(r, e + 30) + B(r, e + 32), d];
  },
  Ss = function (r, e) {
    for (; B(r, e) != 1; e += 4 + B(r, e + 2));
    return [Ie(r, e + 12), Ie(r, e + 4), Ie(r, e + 20)];
  },
  He =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof setTimeout == 'function'
        ? setTimeout
        : function (r) {
            r();
          };
function Is(r, e, t) {
  (t || ((t = e), (e = {})), typeof t != 'function' && A(7));
  var s = [],
    n = function () {
      for (var S = 0; S < s.length; ++S) s[S]();
    },
    a = {},
    o = function (S, D) {
      He(function () {
        t(S, D);
      });
    };
  He(function () {
    o = t;
  });
  for (var i = r.length - 22; U(r, i) != 101010256; --i)
    if (!i || r.length - i > 65558) return (o(A(13, 0, 1), null), n);
  var c = B(r, i + 8);
  if (c) {
    var u = c,
      d = U(r, i + 16),
      l = d == 4294967295 || u == 65535;
    if (l) {
      var f = U(r, i - 12);
      ((l = U(r, f) == 101075792), l && ((u = c = U(r, f + 32)), (d = U(r, f + 48))));
    }
    for (
      var y = e && e.filter,
        F = function (S) {
          var D = vs(r, d, l),
            C = D[0],
            h = D[1],
            p = D[2],
            g = D[3],
            M = D[4],
            E = D[5],
            w = ws(r, E);
          d = M;
          var x = function (L, J) {
            L ? (n(), o(L, null)) : (J && (a[g] = J), --c || o(null, a));
          };
          if (!y || y({ name: g, size: h, originalSize: p, compression: C }))
            if (!C) x(null, ge(r, w, w + h));
            else if (C == 8) {
              var O = r.subarray(w, w + h);
              if (p < 524288 || h > 0.8 * p)
                try {
                  x(null, Ce(O, { out: new b(p) }));
                } catch (L) {
                  x(L, null);
                }
              else s.push(ps(O, { size: p }, x));
            } else x(A(14, 'unknown compression type ' + C, 1), null);
          else x(null, null);
        },
        k = 0;
      k < u;
      ++k
    )
      F(k);
  } else o(null, {});
  return n;
}
const Qe = (r) => {
    const e = r.split('.').pop()?.toLowerCase() || '';
    return (
      {
        bmp: 'image/bmp',
        c: 'text/x-c',
        cpp: 'text/x-c++',
        cs: 'text/x-csharp',
        css: 'text/css',
        csv: 'text/csv',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        gif: 'image/gif',
        go: 'text/x-go',
        html: 'text/html',
        java: 'text/x-java',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        js: 'text/javascript',
        json: 'application/json',
        jsx: 'text/javascript',
        md: 'text/markdown',
        pdf: 'application/pdf',
        php: 'application/x-httpd-php',
        png: 'image/png',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        py: 'text/x-python',
        rb: 'text/x-ruby',
        rs: 'text/x-rust',
        rtf: 'application/rtf',
        sh: 'application/x-sh',
        svg: 'image/svg+xml',
        ts: 'text/typescript',
        tsx: 'text/typescript',
        txt: 'text/plain',
        webp: 'image/webp',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        xml: 'application/xml',
      }[e] || 'application/octet-stream'
    );
  },
  Ds = async (r) =>
    new Promise((e, t) => {
      r.arrayBuffer()
        .then((s) => {
          const n = new Uint8Array(s);
          Is(n, (a, o) => {
            if (a) {
              t(a);
              return;
            }
            const i = [];
            for (const [c, u] of Object.entries(o)) {
              if (c.endsWith('/') || c.includes('__MACOSX') || c.startsWith('.')) continue;
              const d = c.split('/').pop() || c,
                l = new Blob([new Uint8Array(u)], { type: Qe(d) }),
                f = new File([l], d, { type: Qe(d) });
              i.push(f);
            }
            e(i);
          });
        })
        .catch(() => {
          t(new Error('Failed to read ZIP file'));
        });
    }),
  yt = new Set(['uploading', 'pending', 'processing']),
  Fs = (r) => r.dockUploadFileList,
  Ls = (r) => r.dockUploadFileList.map((e) => e.file),
  Ms = (r) => (e) => {
    if (r) return e.fileList.find((t) => t.id === r);
  },
  Es = (r) => r.dockUploadFileList.some((e) => yt.has(e.status)),
  Ts = (r) =>
    r.dockUploadFileList.length === 0
      ? 'pending'
      : r.dockUploadFileList.some((e) => yt.has(e.status))
        ? 'uploading'
        : 'success',
  Cs = (r) => {
    const e = r.dockUploadFileList.filter(
      (n) => n.status === 'uploading' || n.status === 'pending',
    );
    if (e.length === 0) return 100;
    const t = e.length * 100;
    return (e.reduce((n, a) => n + (a.uploadState?.progress || 0), 0) / t) * 100;
  },
  Rs = (r) => (e) => e.creatingChunkingTaskIds.includes(r),
  xs = (r) => (e) => e.creatingEmbeddingTaskIds.includes(r),
  ks = (r) => r.fileListHasMore,
  As = {
    dockFileList: Fs,
    dockRawFileList: Ls,
    fileListHasMore: ks,
    getFileById: Ms,
    isCreatingChunkEmbeddingTask: xs,
    isCreatingFileParseTask: Rs,
    isUploadingFiles: Es,
    overviewUploadingProgress: Cs,
    overviewUploadingStatus: Ts,
  },
  G = new et(),
  X = 'useFetchKnowledgeItems',
  bs = (r, e, t) => new Ps(r, e, t);
class Ps {
  #e;
  #t;
  constructor(e, t, s) {
    ((this.#t = e), (this.#e = t));
  }
  #s = (e, t, s, n) => ({
    ...(this.#e().resourceMap.get(t.id) || {
      createdAt: new Date(),
      fileType: e.type || 'application/octet-stream',
      name: e.name,
      size: e.size,
      sourceType: 'file',
    }),
    _optimistic: void 0,
    id: t.id,
    knowledgeBaseId: s,
    name: e.name,
    parentId: n,
    size: e.size,
    updatedAt: new Date(),
    url: t.url,
  });
  #a = (e, t, s, n) => {
    this.#e().insertLocalResource(
      {
        fileType: t.type || 'application/octet-stream',
        knowledgeBaseId: s,
        name: t.name,
        parentId: n,
        size: t.size,
        sourceType: 'file',
        url: '',
      },
      e,
    );
  };
  cancelUpload = (e) => {
    const { dockUploadFileList: t, dispatchDockFileList: s } = this.#e(),
      n = t.find((a) => a.id === e);
    (n?.abortController && n.abortController.abort(),
      s({ id: e, status: 'cancelled', type: 'updateFileStatus' }));
  };
  cancelUploads = (e) => {
    if (e.length === 0) return;
    const { dockUploadFileList: t, dispatchDockFileList: s } = this.#e(),
      n = new Set(e),
      a = [];
    for (const o of t) n.has(o.id) && (o.abortController?.abort(), a.push(o.id));
    a.length !== 0 && s({ ids: a, status: 'cancelled', type: 'updateFileStatuses' });
  };
  dispatchDockFileList = (e) => {
    const t = tt(this.#e().dockUploadFileList, e);
    t !== this.#e().dockUploadFileList &&
      this.#t({ dockUploadFileList: t }, !1, `dispatchDockFileList/${e.type}`);
  };
  embeddingChunks = async (e) => {
    this.#e().toggleEmbeddingIds(e);
    const t = e.map(async (s) => {
      try {
        await Q.createEmbeddingChunksTask(s);
      } catch (n) {
        console.error(n);
      }
    });
    (await Promise.all(t), await this.#e().refreshFileList(), this.#e().toggleEmbeddingIds(e, !1));
  };
  loadMoreKnowledgeItems = async () => {
    const { queryListParams: e, fileList: t, fileListOffset: s, fileListHasMore: n } = this.#e();
    if (!(!n || !e))
      try {
        const a = await G.getKnowledgeItems({ ...e, limit: e.limit ?? 50, offset: s }),
          o = new Set(t.map((u) => u.id)),
          i = a.items.filter((u) => !o.has(u.id)),
          c = [...t, ...i];
        (this.#t({ fileList: c, fileListHasMore: a.hasMore, fileListOffset: s + i.length }),
          await re([X, e], c, { revalidate: !1 }));
      } catch (a) {
        console.error('Failed to load more knowledge items:', a);
      }
  };
  moveFileToFolder = async (e, t) => {
    (await re(
      (s) => Array.isArray(s) && s[0] === X,
      async (s) => s && s.map((n) => (n.id === e ? { ...n, parentId: t } : n)),
      { revalidate: !1 },
    ),
      await I.updateFile(e, { parentId: t }),
      await this.#e().refreshFileList());
  };
  parseFilesToChunks = async (e, t) => {
    this.#e().toggleParsingIds(e);
    const s = e.map(async (n) => {
      try {
        await Q.createParseFileTask(n, t?.skipExist);
      } catch (a) {
        console.error(a);
      }
    });
    (await Promise.all(s), await this.#e().refreshFileList(), this.#e().toggleParsingIds(e, !1));
  };
  pushDockFileList = async (e, t, s) => {
    const { dispatchDockFileList: n } = this.#e(),
      a = te(12),
      o = [];
    for (const l of e)
      if (l.type === 'application/zip' || l.name.endsWith('.zip'))
        try {
          const f = await Ds(l);
          o.push(...f);
        } catch (f) {
          (console.error('Failed to extract ZIP file:', f), o.push(l));
        }
      else o.push(l);
    const c = o
      .filter((l) => !Fe.includes(l.name))
      .map((l) => ({
        abortController: new AbortController(),
        file: l,
        id: `upload_${a()}`,
        status: 'pending',
      }));
    for (const l of c) this.#a(l.id, l.file, t, s);
    n({ atStart: !0, files: c, type: 'addFiles' });
    const d = (
      await Ke(
        c,
        async (l) => {
          const f = await this.#e().uploadWithProgress({
            abortController: l.abortController,
            file: l.file,
            knowledgeBaseId: t,
            onStatusUpdate: n,
            parentId: s,
            uploadId: l.id,
          });
          return (
            f
              ? this.#e().replaceLocalResource(l.id, this.#s(l.file, f, t, s))
              : this.#e().removeLocalResource(l.id),
            { file: l.file, fileId: f?.id, fileType: l.file.type }
          );
        },
        { concurrency: qe },
      ).catch((l) => {
        for (const f of c) this.#e().removeLocalResource(f.id);
        throw l;
      })
    )
      .filter(({ fileType: l, fileId: f }) => f && !pe(l))
      .map(({ fileId: l }) => l);
    d.length > 0 && (await this.#e().parseFilesToChunks(d, { skipExist: !1 }));
  };
  reEmbeddingChunks = async (e) => {
    As.isCreatingChunkEmbeddingTask(e)(this.#e()) ||
      (this.#e().toggleEmbeddingIds([e]),
      await G.removeFileAsyncTask(e, 'embedding'),
      await this.#e().refreshFileList(),
      await Q.createEmbeddingChunksTask(e),
      await this.#e().refreshFileList(),
      this.#e().toggleEmbeddingIds([e], !1));
  };
  reParseFile = async (e) => {
    (this.#e().toggleParsingIds([e]),
      await Q.retryParseFile(e),
      await this.#e().refreshFileList(),
      this.#e().toggleParsingIds([e], !1));
  };
  #o = async () => {
    await re(
      (e) => Array.isArray(e) && e[0] === X,
      async (e) => e,
      { revalidate: !0 },
    );
  };
  refreshFileList = async (e) => {
    if ((await this.#o(), e?.revalidateResources === !1)) return;
    const { revalidateResources: t } = await Ze(
      async () => {
        const { revalidateResources: s } = await import('./hooks-DTEJ_BvV.js');
        return { revalidateResources: s };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
    );
    await t();
  };
  removeAllFiles = async () => {
    await I.removeAllFiles();
  };
  removeFileItem = async (e) => {
    (await I.removeFile(e), await this.#e().refreshFileList());
  };
  removeFiles = async (e) => {
    (await I.removeFiles(e), await this.#e().refreshFileList());
  };
  renameFolder = async (e, t) => {
    (await re(
      (s) => Array.isArray(s) && s[0] === X,
      async (s) => s && s.map((n) => (n.id === e ? { ...n, name: t } : n)),
      { revalidate: !1 },
    ),
      await R.updateDocument({ id: e, title: t }),
      await this.#e().refreshFileList());
  };
  setCurrentFolderId = (e) => {
    this.#t({ currentFolderId: e }, !1, 'setCurrentFolderId');
  };
  setPendingRenameItemId = (e) => {
    this.#t({ pendingRenameItemId: e }, !1, 'setPendingRenameItemId');
  };
  setUploadDockExpanded = (e) => {
    this.#t({ uploadDockExpanded: e }, !1, 'setUploadDockExpanded');
  };
  toggleEmbeddingIds = (e, t) => {
    this.#t((s) => {
      const n = new Set(s.creatingEmbeddingTaskIds);
      return (
        e.forEach((a) => {
          typeof t > 'u' ? (n.has(a) ? n.delete(a) : n.add(a)) : t ? n.add(a) : n.delete(a);
        }),
        { creatingEmbeddingTaskIds: Array.from(n.values()) }
      );
    });
  };
  toggleParsingIds = (e, t) => {
    this.#t((s) => {
      const n = new Set(s.creatingChunkingTaskIds);
      return (
        e.forEach((a) => {
          typeof t > 'u' ? (n.has(a) ? n.delete(a) : n.add(a)) : t ? n.add(a) : n.delete(a);
        }),
        { creatingChunkingTaskIds: Array.from(n.values()) }
      );
    });
  };
  uploadFolderWithStructure = async (e, t, s) => {
    const { dispatchDockFileList: n } = this.#e(),
      a = te(12),
      { filesByFolder: o, folders: i } = Kt(e),
      c = $t(i),
      u = 'uploadFolder.creatingFolders';
    c.length > 0 &&
      ce.loading({
        content: j('header.actions.uploadFolder.creatingFolders', { ns: 'file' }),
        duration: 0,
        key: u,
      });
    try {
      const d = new Map(),
        l = new Map();
      for (const h of c) {
        const p = (h.match(/\//g) || []).length;
        (l.has(p) || l.set(p, []), l.get(p).push(h));
      }
      const f = te(8),
        y = Array.from(l.keys()).sort((h, p) => h - p);
      for (const h of y) {
        const p = l.get(h),
          g = p.map((E) => {
            const w = i[E],
              x = w.parent ? d.get(w.parent) : s,
              O = zt(w.name),
              L = f();
            return {
              content: '',
              editorData: '{}',
              fileType: 'custom/folder',
              knowledgeBaseId: t,
              metadata: { createdAt: Date.now() },
              parentId: x,
              slug: L,
              title: O,
            };
          }),
          M = await R.createDocuments(g);
        for (const [E, w] of p.entries()) d.set(w, M[E].id);
      }
      (c.length > 0 && ce.destroy(u), await this.#e().refreshFileList());
      const F = [];
      for (const [h, p] of Object.entries(o)) {
        const g = h ? d.get(h) : s;
        F.push(...p.map((M) => ({ file: M, parentId: g })));
      }
      const S = F.filter(({ file: h }) => !Fe.includes(h.name)).map(({ file: h, parentId: p }) => ({
        abortController: new AbortController(),
        file: h,
        id: `upload_${a()}`,
        parentId: p,
        shouldShowInCurrentList: (p ?? void 0) === s,
      }));
      n({
        atStart: !0,
        files: S.map(({ abortController: h, file: p, id: g }) => ({
          abortController: h,
          file: p,
          id: g,
          status: 'pending',
        })),
        type: 'addFiles',
      });
      for (const h of S) h.shouldShowInCurrentList && this.#a(h.id, h.file, t, h.parentId);
      const C = (
        await Ke(
          S,
          async ({
            abortController: h,
            file: p,
            id: g,
            parentId: M,
            shouldShowInCurrentList: E,
          }) => {
            const w = await this.#e().uploadWithProgress({
              abortController: h,
              file: p,
              knowledgeBaseId: t,
              onStatusUpdate: n,
              parentId: M,
              uploadId: g,
            });
            return (
              E &&
                (w
                  ? this.#e().replaceLocalResource(g, this.#s(p, w, t, M))
                  : this.#e().removeLocalResource(g)),
              { file: p, fileId: w?.id, fileType: p.type }
            );
          },
          { concurrency: qe },
        ).catch((h) => {
          for (const p of S) p.shouldShowInCurrentList && this.#e().removeLocalResource(p.id);
          throw h;
        })
      )
        .filter(({ fileType: h, fileId: p }) => p && !pe(h))
        .map(({ fileId: h }) => h);
      C.length > 0 && (await this.#e().parseFilesToChunks(C, { skipExist: !1 }));
    } catch (d) {
      throw (c.length > 0 && ce.destroy(u), d);
    }
  };
  useFetchFolderBreadcrumb = (e) =>
    le(e ? ['useFetchFolderBreadcrumb', e] : null, async () => await G.getFolderBreadcrumb(e));
  useFetchKnowledgeItem = (e) =>
    le(
      e ? ['useFetchKnowledgeItem', e] : null,
      async () => (await G.getKnowledgeItem(e)) ?? void 0,
    );
  useFetchKnowledgeItems = (e) =>
    le([X, e], async () => {
      const t = await G.getKnowledgeItems({ ...e, limit: e.limit ?? 50, offset: 0 });
      return (
        this.#t({
          fileList: t.items,
          fileListHasMore: t.hasMore,
          fileListOffset: t.items.length,
          queryListParams: e,
        }),
        t.items
      );
    });
}
const Us = {
    creatingChunkingTaskIds: [],
    creatingEmbeddingTaskIds: [],
    currentFolderId: void 0,
    dockUploadFileList: [],
    fileList: [],
    fileListHasMore: !1,
    fileListOffset: 0,
    pendingRenameItemId: null,
    uploadDockExpanded: !0,
  },
  wt = {
    hasMore: !1,
    isLoadingMore: !1,
    isSyncing: !1,
    offset: 0,
    resourceList: [],
    resourceMap: new Map(),
    syncQueue: [],
    syncingIds: new Set(),
    total: 0,
  },
  Bs = { ...Xt, ...rs, ...Us, ...ts, ...wt };
class Os {
  createKnowledgeBase = async (e) => m.knowledgeBase.createKnowledgeBase.mutate(e);
  getKnowledgeBaseList = async () => m.knowledgeBase.getKnowledgeBases.query();
  getKnowledgeBaseById = async (e) => m.knowledgeBase.getKnowledgeBaseById.query({ id: e });
  updateKnowledgeBaseList = async (e, t) =>
    m.knowledgeBase.updateKnowledgeBase.mutate({ id: e, value: t });
  deleteKnowledgeBase = async (e) => m.knowledgeBase.removeKnowledgeBase.mutate({ id: e });
  addFilesToKnowledgeBase = async (e, t) =>
    m.knowledgeBase.addFilesToKnowledgeBase.mutate({ ids: t, knowledgeBaseId: e });
  removeFilesFromKnowledgeBase = async (e, t) =>
    m.knowledgeBase.removeFilesFromKnowledgeBase.mutate({ ids: t, knowledgeBaseId: e });
}
const Ve = new Os(),
  Z = (r) => ({
    chunkCount: r.chunkCount,
    chunkTaskId: r.chunkingStatus ? 'placeholder' : null,
    chunkingError: r.chunkingError,
    chunkingStatus: r.chunkingStatus,
    content: r.content,
    createdAt: r.createdAt,
    editorData: r.editorData,
    embeddingError: r.embeddingError,
    embeddingStatus: r.embeddingStatus,
    embeddingTaskId: r.embeddingStatus ? 'placeholder' : null,
    fileType: r.fileType,
    finishEmbedding: r.finishEmbedding,
    id: r.id,
    metadata: r.metadata || void 0,
    name: r.name,
    parentId: r.parentId,
    size: r.size,
    slug: r.slug,
    sourceType: r.sourceType,
    updatedAt: r.updatedAt,
    url: r.url,
  }),
  _s = (r) => ({
    chunkCount: r.chunkCount,
    chunkingError: r.chunkingError,
    chunkingStatus: r.chunkingStatus,
    embeddingError: r.embeddingError,
    embeddingStatus: r.embeddingStatus,
    finishEmbedding: r.finishEmbedding,
    id: r.id,
  });
class vt {
  async queryResources(e) {
    const t = { ...e, knowledgeBaseId: e.libraryId, libraryId: void 0 },
      s = await I.getKnowledgeItems(t);
    return { hasMore: s.hasMore, items: s.items.map(Z), total: 'total' in s ? s.total : void 0 };
  }
  async resolveSelectionIds(e) {
    const t = { ...e, knowledgeBaseId: e.libraryId, libraryId: void 0 };
    return I.resolveKnowledgeItemIds(t);
  }
  async deleteResourcesByQuery(e) {
    const t = { ...e, knowledgeBaseId: e.libraryId, libraryId: void 0 };
    return I.deleteKnowledgeItemsByQuery(t);
  }
  async getResource(e) {
    const t = await I.getKnowledgeItem(e);
    return t ? Z(t) : void 0;
  }
  async getKnowledgeItemStatusesByIds(e) {
    return (await I.getKnowledgeItemStatusesByIds(e)).map(_s);
  }
  async getResourceStatusesByIds(e) {
    return this.getKnowledgeItemStatusesByIds(e);
  }
  async createResource(e) {
    if (e.sourceType === 'file') {
      const t = await I.createFile(
          { fileType: e.fileType, name: e.name, parentId: e.parentId, size: e.size, url: e.url },
          e.knowledgeBaseId,
        ),
        s = await I.getKnowledgeItem(t.id);
      if (!s) throw new Error('Failed to fetch created file');
      return Z(s);
    } else {
      const t = {
          content: e.content || '',
          editorData: JSON.stringify(e.editorData || {}),
          fileType: e.fileType,
          knowledgeBaseId: e.knowledgeBaseId,
          metadata: e.metadata,
          parentId: e.parentId,
          slug: e.slug,
          title: e.title,
        },
        s = await R.createDocument(t);
      return {
        content: s.content,
        createdAt: s.createdAt ? new Date(s.createdAt) : new Date(),
        editorData: typeof s.editorData == 'string' ? JSON.parse(s.editorData) : s.editorData,
        fileType: s.fileType || 'custom/document',
        id: s.id,
        metadata: s.metadata || void 0,
        name: s.title || 'Untitled',
        parentId: s.parentId,
        size: s.totalCharCount || 0,
        slug: s.slug || void 0,
        sourceType: 'document',
        title: s.title || void 0,
        updatedAt: s.updatedAt ? new Date(s.updatedAt) : new Date(),
        url: s.source || '',
      };
    }
  }
  async updateResource(e, t) {
    const s = await this.getResource(e);
    if (!s) throw new Error('Resource not found');
    if (s.sourceType === 'file') {
      t.parentId !== void 0 && (await I.updateFile(e, { parentId: t.parentId }));
      const n = await I.getKnowledgeItem(e);
      if (!n) throw new Error('Failed to fetch updated file');
      return Z(n);
    } else {
      await R.updateDocument({
        content: t.content,
        editorData: t.editorData ? JSON.stringify(t.editorData) : void 0,
        id: e,
        metadata: t.metadata,
        parentId: t.parentId !== void 0 ? t.parentId : void 0,
        title: t.title || t.name,
      });
      const n = await I.getKnowledgeItem(e);
      if (!n) throw new Error('Failed to fetch updated document');
      return Z(n);
    }
  }
  async deleteResource(e) {
    const t = await this.getResource(e);
    t && (t.sourceType === 'file' ? await I.removeFile(e) : await R.deleteDocument(e));
  }
  async deleteResources(e) {
    const t = [],
      s = [];
    (await Promise.all(
      e.map(async (n) => {
        const a = await this.getResource(n);
        a && (a.sourceType === 'file' ? t.push(n) : s.push(n));
      }),
    ),
      await Promise.all([
        t.length > 0 ? I.removeFiles(t) : Promise.resolve(),
        s.length > 0 ? R.deleteDocuments(s) : Promise.resolve(),
      ]));
  }
  async moveResource(e, t) {
    return this.updateResource(e, { parentId: t });
  }
}
const $ = new vt(),
  mn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, ResourceService: vt, resourceService: $ },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
const Je = new WeakMap();
let qs = 0,
  Ks = 0;
function $s(r) {
  let e = Je.get(r);
  return (e || ((e = `optimistic-store-${++qs}`), Je.set(r, e)), e);
}
function zs(r) {
  const e = new Set();
  for (const t of r) {
    const s = t.path.slice(0, Math.min(t.path.length, 2)).join('.');
    e.add(s);
  }
  return Array.from(e);
}
function Ns(r, e) {
  const t = $s(r);
  return zs(e).map((s) => `${t}:${s}`);
}
function js(r, e) {
  for (const t of r)
    for (const s of e) if (t === s || t.startsWith(`${s}.`) || s.startsWith(`${t}.`)) return !0;
  return !1;
}
function oe(r) {
  return {
    actionName: r.actionName,
    affectedPaths: r.affectedPaths,
    id: r.id,
    maxRetries: r.maxRetries,
    retryCount: r.retryCount,
    status: r.status,
    timestamp: new Date(r.timestamp),
  };
}
class Ws {
  history = [];
  idleResolvers = new Set();
  inflightIds = new Set();
  maxHistory;
  options;
  queue = [];
  constructor(e = {}) {
    ((this.maxHistory = e.maxHistory ?? 20),
      (this.options = {
        maxHistory: this.maxHistory,
        maxRetries: e.maxRetries ?? 0,
        onMutationError: e.onMutationError ?? (() => {}),
        onMutationSuccess: e.onMutationSuccess ?? (() => {}),
        onQueueChange: e.onQueueChange ?? (() => {}),
      }));
  }
  addToHistory(e) {
    (this.history.unshift(e),
      this.history.length > this.maxHistory &&
        (this.history = this.history.slice(0, this.maxHistory)));
  }
  getInflightMutations() {
    return this.queue.filter((e) => this.inflightIds.has(e.id));
  }
  hasPendingMutations() {
    return this.queue.some((e) => e.status === 'pending' || e.status === 'inflight');
  }
  hasInflightConflict(e) {
    for (const t of this.getInflightMutations())
      if (js(e.affectedPaths, t.affectedPaths)) return !0;
    return !1;
  }
  notify() {
    if (
      (this.options.onQueueChange([...this.queue.map(oe), ...this.history]),
      !this.hasPendingMutations())
    ) {
      for (const e of this.idleResolvers) e();
      this.idleResolvers.clear();
    }
  }
  processNext() {
    const e = this.queue
      .filter((t) => t.status === 'pending' && !this.inflightIds.has(t.id))
      .sort((t, s) => t.timestamp - s.timestamp);
    for (const t of e) this.hasInflightConflict(t) || this.executeMutation(t);
  }
  async settleFailure(e, t) {
    ((e.status = 'failed'), this.inflightIds.delete(e.id), this.rollback(e), await e.onError?.(t));
    const s = { ...oe(e), status: 'rolled-back' };
    (this.addToHistory(s),
      (this.queue = this.queue.filter((n) => n.id !== e.id)),
      this.notify(),
      this.options.onMutationError(s, t),
      e.reject?.(t),
      this.processNext());
  }
  enqueue(e) {
    const { onSuccess: t, remoteFn: s, resolve: n, ...a } = e,
      o = {
        ...a,
        onSuccess: t
          ? async (i) => {
              await t(i);
            }
          : void 0,
        remoteFn: async () => s(),
      };
    return new Promise((i, c) => {
      ((o.resolve = (u) => i(u)),
        (o.reject = c),
        this.queue.push(o),
        this.notify(),
        this.processNext());
    });
  }
  async flush() {
    (this.processNext(),
      this.hasPendingMutations() &&
        (await new Promise((e) => {
          this.idleResolvers.add(e);
        })));
  }
  async executeMutation(e) {
    (this.inflightIds.add(e.id), (e.status = 'inflight'), this.notify());
    try {
      const t = await e.remoteFn();
      (await e.onSuccess?.(t),
        (e.status = 'success'),
        this.inflightIds.delete(e.id),
        this.addToHistory(oe(e)),
        (this.queue = this.queue.filter((s) => s.id !== e.id)),
        this.notify(),
        this.options.onMutationSuccess(oe(e)),
        e.resolve?.(t),
        this.processNext());
    } catch (t) {
      if (((e.retryCount += 1), e.retryCount <= e.maxRetries)) {
        ((e.status = 'pending'), this.inflightIds.delete(e.id), this.notify(), this.processNext());
        return;
      }
      await this.settleFailure(e, t);
    }
  }
  rollback(e) {
    const t = new Set();
    for (const n of e.storePatches.keys()) t.add(n);
    const s = this.queue
      .filter((n) => n.id !== e.id && n.status !== 'failed')
      .sort((n, a) => a.timestamp - n.timestamp);
    for (const n of s) for (const a of n.storePatches.keys()) t.add(a);
    for (const n of t) {
      let a = n.getState();
      for (const i of s) {
        const c = i.storePatches.get(n);
        c && (a = ue(a, c.inversePatches));
      }
      const o = e.storePatches.get(n);
      o && (a = ue(a, o.inversePatches));
      for (const i of [...s].reverse()) {
        const c = i.storePatches.get(n);
        c && (a = ue(a, c.patches));
      }
      n.setState(a);
    }
  }
}
class Hs {
  committed = !1;
  defaultStore;
  mutationFn = null;
  mutationErrorHandler;
  mutationSuccessHandler;
  name;
  enqueueFn;
  maxRetries;
  records = [];
  workingStates = new Map();
  constructor(e, t, s, n) {
    ((this.defaultStore = n ? n : null),
      (this.enqueueFn = t),
      (this.maxRetries = s),
      (this.name = e));
  }
  set(e, t, s) {
    let n, a, o;
    if (typeof e == 'function') {
      if (!this.defaultStore)
        throw new Error(`[OptimisticEngine] "${this.name}": no default store set`);
      ((n = this.defaultStore), (a = e), (o = {}));
    } else ((n = e), (a = t), (o = s ?? {}));
    if (this.committed)
      throw new Error(`[OptimisticEngine] "${this.name}": cannot call set() after commit()`);
    const i = o.flush ?? !0,
      c = this.workingStates.get(n) ?? n.getState(),
      [u, d, l] = Mt(c, a);
    d.length !== 0 &&
      (i ? (n.setState(u), this.workingStates.delete(n)) : this.workingStates.set(n, u),
      this.records.push({ flushed: i, inversePatches: l, patches: d, store: n }));
  }
  set mutation(e) {
    this.mutationFn = e;
  }
  set onError(e) {
    this.mutationErrorHandler = e;
  }
  set onSuccess(e) {
    this.mutationSuccessHandler = e;
  }
  commit() {
    if (this.committed)
      throw new Error(`[OptimisticEngine] "${this.name}": transaction already committed`);
    if (!this.mutationFn)
      throw new Error(`[OptimisticEngine] "${this.name}": missing remote mutation`);
    this.committed = !0;
    for (const s of this.records) {
      if (s.flushed) continue;
      const n = ue(s.store.getState(), s.patches);
      (s.store.setState(n), (s.flushed = !0));
    }
    this.workingStates.clear();
    const e = new Map();
    for (const s of this.records) {
      const n = e.get(s.store);
      n
        ? (n.patches.push(...s.patches),
          (n.inversePatches = [...s.inversePatches, ...n.inversePatches]))
        : e.set(s.store, { inversePatches: [...s.inversePatches], patches: [...s.patches] });
    }
    const t = Array.from(e.entries()).flatMap(([s, n]) => Ns(s, n.patches));
    return this.enqueueFn({
      actionName: this.name,
      affectedPaths: t,
      id: `optimistic-mutation-${++Ks}-${Date.now()}`,
      maxRetries: this.maxRetries,
      onError: this.mutationErrorHandler,
      onSuccess: this.mutationSuccessHandler,
      remoteFn: this.mutationFn,
      retryCount: 0,
      status: 'pending',
      storePatches: e,
      timestamp: Date.now(),
    });
  }
}
class Qs {
  defaultStore;
  maxRetries;
  queue;
  constructor(e, t) {
    ((this.defaultStore = e), (this.maxRetries = t?.maxRetries ?? 0), (this.queue = new Ws(t)));
  }
  createTransaction(e) {
    return new Hs(e, (t) => this.queue.enqueue(t), this.maxRetries, this.defaultStore);
  }
  async flush() {
    await this.queue.flush();
  }
}
const Vs = Et('resource-manager:action'),
  De = (r) => (r instanceof Error ? r : new Error(String(r)));
class Js {
  #e;
  #t;
  #s;
  #a;
  constructor(e, t, s) {
    ((this.#e = t),
      (this.#s = e),
      (this.#t = {
        getState: () => {
          const n = this.#e();
          return {
            hasMore: n.hasMore,
            isLoadingMore: n.isLoadingMore,
            isSyncing: n.isSyncing,
            lastSyncTime: n.lastSyncTime,
            offset: n.offset,
            queryParams: n.queryParams,
            resourceList: n.resourceList,
            resourceMap: n.resourceMap,
            syncError: n.syncError,
            syncQueue: n.syncQueue,
            syncingIds: n.syncingIds,
            total: n.total,
          };
        },
        setState: (n) => {
          this.#s(n, !1, 'resourceSyncEngine/setState');
        },
      }));
  }
  #o = (e) => {
    this.#s(
      (t) => {
        if (!t.syncingIds.has(e)) return {};
        const s = new Set(t.syncingIds);
        return (s.delete(e), { syncingIds: s });
      },
      !1,
      'resource/clearSyncingId',
    );
  };
  #l = (e) => {
    const { _optimistic: t, ...s } = e;
    return s;
  };
  #c = (e, t) => ({
    _optimistic: { isPending: !0, queryKey: z(this.#e().queryParams), retryCount: 0 },
    createdAt: new Date(),
    fileType: e.fileType,
    id: t || `temp-resource-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    knowledgeBaseId: e.knowledgeBaseId,
    metadata: e.metadata,
    name: 'title' in e ? e.title : e.name,
    parentId: e.parentId,
    size: 'size' in e ? e.size : 0,
    sourceType: e.sourceType,
    updatedAt: new Date(),
    ...(e.sourceType === 'file'
      ? { url: e.url }
      : { content: e.content, editorData: e.editorData ?? {}, slug: e.slug, title: e.title }),
  });
  #n = () =>
    this.#a
      ? this.#a
      : ((this.#a = new Qs(this.#t, {
          maxRetries: 1,
          onMutationError: (e, t) => {
            this.#s({ syncError: De(t) }, !1, 'resourceSyncEngine/error');
          },
          onMutationSuccess: () => {
            this.#s(
              { lastSyncTime: new Date(), syncError: void 0 },
              !1,
              'resourceSyncEngine/success',
            );
          },
          onQueueChange: (e) => {
            this.#s(
              {
                isSyncing: e.some((t) => t.status === 'pending' || t.status === 'inflight'),
                syncQueue: e,
              },
              !1,
              'resourceSyncEngine/queueChange',
            );
          },
        })),
        this.#a);
  #r = (e, t) => {
    const { resourceList: s, resourceMap: n } = this.#e(),
      a = new Map(n);
    (a.delete(e), a.set(t.id, t));
    const o = s.findIndex((u) => u.id === e),
      i = s.filter((u) => u.id !== e && u.id !== t.id);
    if (o !== -1 || this.#i(t)) {
      const u = o === -1 ? 0 : Math.min(o, i.length);
      i.splice(u, 0, t);
    }
    this.#s({ resourceList: i, resourceMap: a }, !1, 'resource/replaceLocalResource');
  };
  #i = (e) => {
    const { queryParams: t, resourceMap: s } = this.#e();
    if (!t || (t.libraryId !== void 0 && (e.knowledgeBaseId ?? void 0) !== t.libraryId)) return !1;
    const n = t.q?.trim().toLowerCase();
    return n && !`${e.name} ${e.title ?? ''}`.trim().toLowerCase().includes(n)
      ? !1
      : t.parentId == null
        ? (e.parentId ?? null) === null
        : e.parentId
          ? e.parentId === t.parentId
            ? !0
            : s.get(e.parentId)?.slug === t.parentId
          : !1;
  };
  #u = (e, t, s, n) => {
    this.#s(
      (a) => {
        if (e.size === 0) return {};
        const o = new Map(a.resourceMap);
        let i = !1,
          c = 0;
        const u = a.resourceList.flatMap((l) => {
          if (!e.has(l.id)) return [l];
          const f = t(o.get(l.id) ?? l);
          return ((c += 1), (i = !0), f ? (o.set(f.id, f), [f]) : (o.delete(l.id), []));
        });
        for (const l of e) {
          if (a.resourceList.some((F) => F.id === l)) continue;
          const f = o.get(l);
          if (!f) continue;
          const y = t(f);
          if (((i = !0), !y)) {
            o.delete(l);
            continue;
          }
          o.set(y.id, y);
        }
        if (!i) return {};
        const d = { ...a, resourceList: u, resourceMap: o };
        return (n?.(d, { visibleChangedCount: c }), d);
      },
      !1,
      s,
    );
  };
  #d = (e, t) => ({
    ...e,
    ...t,
    _optimistic: {
      ...(e._optimistic || { queryKey: z(this.#e().queryParams), retryCount: 0 }),
      isPending: !0,
    },
    updatedAt: t?.updatedAt ?? new Date(),
  });
  clearResources = () => {
    this.#s({ ...wt }, !1, 'resource/clearResources');
  };
  clearCurrentQueryResources = () => {
    this.#s(
      (e) => {
        const t = new Set(e.resourceList.map((a) => a.id)),
          s = new Set(Array.from(e.syncingIds).filter((a) => !t.has(a))),
          n = new Map();
        for (const [a, o] of e.resourceMap) !t.has(a) && o._optimistic && n.set(a, o);
        return {
          hasMore: !1,
          offset: 0,
          resourceList: [],
          resourceMap: n,
          syncingIds: s,
          total: 0,
        };
      },
      !1,
      'resource/clearCurrentQueryResources',
    );
  };
  createResource = async (e) => {
    const t = this.#c(e),
      n = this.#n().createTransaction(`createResource(${t.id})`);
    return (
      n.set((a) => {
        (a.resourceList.unshift(t), a.resourceMap.set(t.id, t), a.syncingIds.add(t.id));
      }),
      (n.mutation = () => $.createResource(e)),
      (n.onSuccess = async (a) => {
        (this.#r(t.id, a), this.#o(t.id));
      }),
      (n.onError = async (a) => {
        (this.#o(t.id), this.markLocalResourceError(t.id, De(a)));
      }),
      n.commit().catch((a) => {
        console.error('Failed to create resource:', a);
      }),
      t.id
    );
  };
  createResourceAndSync = async (e) => {
    const t = this.#c(e),
      n = this.#n().createTransaction(`createResourceAndSync(${t.id})`);
    return (
      n.set((o) => {
        (o.resourceList.unshift(t), o.resourceMap.set(t.id, t), o.syncingIds.add(t.id));
      }),
      (n.mutation = () => $.createResource(e)),
      (n.onSuccess = async (o) => {
        (this.#r(t.id, o), this.#o(t.id));
      }),
      (n.onError = async (o) => {
        (this.#o(t.id), this.markLocalResourceError(t.id, De(o)));
      }),
      (await n.commit()).id
    );
  };
  deleteResource = async (e) => {
    const s = this.#n().createTransaction(`deleteResource(${e})`);
    (s.set((n) => {
      ((n.resourceList = n.resourceList.filter((a) => a.id !== e)), n.resourceMap.delete(e));
    }),
      (s.mutation = () => $.deleteResource(e)),
      await s.commit());
  };
  deleteResources = async (e) => {
    if (e.length === 0) return;
    const t = new Set(e),
      n = this.#n().createTransaction(`deleteResources(${e.join(',')})`);
    (n.set((a) => {
      a.resourceList = a.resourceList.filter((o) => !t.has(o.id));
      for (const o of t) a.resourceMap.delete(o);
    }),
      (n.mutation = () => $.deleteResources(e)),
      await n.commit());
  };
  flushSync = async () => {
    await this.#n().flush();
  };
  insertLocalResource = (e, t) => {
    const s = this.#c(e, t);
    return (
      this.#s(
        (n) => {
          const a = new Map(n.resourceMap);
          return (a.set(s.id, s), { resourceList: [s, ...n.resourceList], resourceMap: a });
        },
        !1,
        'resource/insertLocalResource',
      ),
      s.id
    );
  };
  patchLocalResource = (e, t, s = 'resource/patchLocalResource') => {
    this.#u(new Set([e]), (n) => ({ ...n, ...t }), s);
  };
  patchLocalResourceStatuses = (e) => {
    if (e.length === 0) return;
    const t = new Map(e.map((s) => [s.id, s]));
    this.#u(
      new Set(t.keys()),
      (s) => {
        const n = t.get(s.id);
        return n
          ? {
              ...s,
              chunkCount: n.chunkCount !== void 0 ? n.chunkCount : s.chunkCount,
              chunkingError: n.chunkingError !== void 0 ? n.chunkingError : s.chunkingError,
              chunkingStatus: n.chunkingStatus !== void 0 ? n.chunkingStatus : s.chunkingStatus,
              embeddingError: n.embeddingError !== void 0 ? n.embeddingError : s.embeddingError,
              embeddingStatus: n.embeddingStatus !== void 0 ? n.embeddingStatus : s.embeddingStatus,
              finishEmbedding: n.finishEmbedding !== void 0 ? n.finishEmbedding : s.finishEmbedding,
            }
          : s;
      },
      'resource/patchLocalResourceStatuses',
    );
  };
  loadMoreResources = async () => {
    const { hasMore: e, offset: t, queryParams: s } = this.#e();
    if (!(!e || !s)) {
      this.#s({ isLoadingMore: !0 }, !1, 'resource/loadMoreResources/start');
      try {
        const { items: n } = await $.queryResources({ ...s, limit: 50, offset: t });
        this.#s(
          (a) => {
            const o = new Set(a.resourceList.map((c) => c.id)),
              i = new Map(a.resourceMap);
            for (const c of n) i.set(c.id, c);
            return {
              hasMore: n.length === 50,
              isLoadingMore: !1,
              offset: t + n.length,
              resourceList: [...a.resourceList, ...n.filter((c) => !o.has(c.id))],
              resourceMap: i,
            };
          },
          !1,
          'resource/loadMoreResources/success',
        );
      } catch (n) {
        throw (this.#s({ isLoadingMore: !1 }, !1, 'resource/loadMoreResources/error'), n);
      }
    }
  };
  markLocalResourceError = (e, t) => {
    const { resourceMap: s } = this.#e(),
      n = s.get(e);
    if (!n) return;
    const a = {
      ...n,
      _optimistic: {
        ...(n._optimistic || { isPending: !1, queryKey: z(this.#e().queryParams), retryCount: 0 }),
        error: t,
        isPending: !1,
        lastSyncAttempt: new Date(),
      },
    };
    this.#s(
      (o) => {
        const i = new Map(o.resourceMap);
        return (
          i.set(e, a),
          { resourceList: o.resourceList.map((c) => (c.id === e ? a : c)), resourceMap: i }
        );
      },
      !1,
      'resource/markLocalResourceError',
    );
  };
  moveResource = async (e, t) => {
    const { queryParams: s, resourceMap: n } = this.#e(),
      a = n.get(e);
    if (!a) {
      console.warn(`Resource ${e} not found for move`);
      return;
    }
    if ((a.parentId ?? null) === t) return;
    const i = this.#n().createTransaction(`moveResource(${e})`),
      c = {
        ...a,
        _optimistic: {
          ...(a._optimistic || { queryKey: z(this.#e().queryParams), retryCount: 0 }),
          isPending: !0,
        },
        parentId: t,
        updatedAt: new Date(),
      },
      u = !s || this.#i(c);
    (i.set((d) => {
      if (u) {
        (d.resourceMap.set(e, c),
          (d.resourceList = d.resourceList.map((l) => (l.id === e ? c : l))));
        return;
      }
      ((d.resourceList = d.resourceList.filter((l) => l.id !== e)), d.resourceMap.delete(e));
    }),
      (i.mutation = () => $.moveResource(e, t)),
      (i.onSuccess = async (d) => {
        u && this.#r(e, d);
      }),
      await i.commit());
  };
  removeLocalResource = (e) => {
    this.#s(
      (t) => {
        const s = new Map(t.resourceMap);
        return (
          s.delete(e),
          { resourceList: t.resourceList.filter((n) => n.id !== e), resourceMap: s }
        );
      },
      !1,
      'resource/removeLocalResource',
    );
  };
  replaceLocalResource = (e, t) => {
    this.#r(e, t);
  };
  retrySync = async () => {
    await this.flushSync();
  };
  addResourcesToKnowledgeBase = async (e, t) => {
    if (t.length === 0) return;
    const s = new Set(t),
      a = this.#n().createTransaction(`addResourcesToKnowledgeBase(${e})`);
    (a.set((o) => {
      for (const i of o.resourceList) {
        if (!s.has(i.id)) continue;
        const c = this.#d(i, { knowledgeBaseId: e });
        o.resourceMap.set(i.id, c);
      }
      o.resourceList = o.resourceList.map((i) =>
        s.has(i.id) ? (o.resourceMap.get(i.id) ?? i) : i,
      );
    }),
      (a.mutation = () => Ve.addFilesToKnowledgeBase(e, t)),
      (a.onSuccess = async () => {
        this.#u(
          s,
          (o) => this.#l({ ...o, knowledgeBaseId: e }),
          'resource/addResourcesToKnowledgeBase/success',
        );
      }),
      await a.commit());
  };
  removeResourcesFromKnowledgeBase = async (e, t) => {
    if (t.length === 0) return;
    const s = new Set(t),
      n = this.#e().queryParams?.libraryId === e,
      o = this.#n().createTransaction(`removeResourcesFromKnowledgeBase(${e})`);
    (o.set((i) => {
      if (n) {
        let c = 0;
        ((i.resourceList = i.resourceList.filter((u) =>
          s.has(u.id) ? (i.resourceMap.delete(u.id), (c += 1), !1) : !0,
        )),
          typeof i.total == 'number' &&
            ((i.total = Math.max(0, i.total - t.length)),
            (i.hasMore = i.total > i.resourceList.length)),
          (i.offset = Math.max(0, i.offset - c)));
        return;
      }
      for (const c of i.resourceList) {
        if (!s.has(c.id)) continue;
        const u = this.#d(c, { knowledgeBaseId: void 0 });
        i.resourceMap.set(c.id, u);
      }
      i.resourceList = i.resourceList.map((c) =>
        s.has(c.id) ? (i.resourceMap.get(c.id) ?? c) : c,
      );
    }),
      (o.mutation = () => Ve.removeFilesFromKnowledgeBase(e, t)),
      (o.onSuccess = async () => {
        n ||
          this.#u(
            s,
            (i) => this.#l({ ...i, knowledgeBaseId: void 0 }),
            'resource/removeResourcesFromKnowledgeBase/success',
          );
      }),
      await o.commit());
  };
  updateResource = async (e, t) => {
    const { resourceMap: s } = this.#e(),
      n = s.get(e);
    if (!n) {
      console.warn(`Resource ${e} not found for update`);
      return;
    }
    const a = {
      ...n,
      ...t,
      _optimistic: {
        ...(n._optimistic || { queryKey: z(this.#e().queryParams), retryCount: 0 }),
        isPending: !0,
      },
      name: t.name || t.title || n.name,
      updatedAt: new Date(),
    };
    Vs('updateResource', e, n, t);
    const i = this.#n().createTransaction(`updateResource(${e})`);
    (i.set((c) => {
      (c.resourceMap.set(e, a), (c.resourceList = c.resourceList.map((u) => (u.id === e ? a : u))));
    }),
      (i.mutation = () => $.updateResource(e, t)),
      (i.onSuccess = async (c) => {
        this.#r(e, c);
      }),
      await i.commit());
  };
}
const Ys = 'fetchTTSFile',
  Gs = (r, e, t) => new Xs(r, e, t);
class Xs {
  #e;
  constructor(e, t, s) {
    this.#e = t;
  }
  removeTTSFile = async (e) => {
    await I.removeFile(e);
  };
  uploadTTSByArrayBuffers = async (e, t) => {
    const s = 'audio/mp3',
      n = new Blob(t, { type: s }),
      a = `${e}.mp3`,
      o = { lastModified: Date.now(), type: s },
      i = new File([n], a, o);
    return (await this.#e().uploadWithProgress({ file: i, skipCheckFileType: !0 }))?.id;
  };
  useFetchTTSFile = (e) => le(e ? [Ys, e] : null, () => I.getFile(e));
}
const Ye = async (r) => {
    if (typeof r == 'string') {
      if (!r.startsWith('data:image/')) return;
    } else if (!r.type.startsWith('image/')) return;
    return new Promise((e) => {
      const t = new Image();
      let s = null;
      const n = () => {
          (e({ height: t.naturalHeight, width: t.naturalWidth }), s && URL.revokeObjectURL(s));
        },
        a = () => {
          (s && URL.revokeObjectURL(s), e(void 0));
        };
      (t.addEventListener('load', n),
        t.addEventListener('error', a),
        typeof r == 'string' ? (t.src = r) : ((s = URL.createObjectURL(r)), (t.src = s)));
    });
  },
  Zs = (r, e, t) => new en(r, e, t);
class en {
  constructor(e, t, s) {}
  uploadBase64FileWithProgress = async (e) => {
    const t = await Ye(e),
      { metadata: s, fileType: n, size: a, hash: o } = await _e.uploadBase64ToS3(e);
    return {
      ...(await I.createFile({
        fileType: n,
        hash: o,
        metadata: s,
        name: s.filename,
        size: a,
        url: s.path,
      })),
      dimensions: t,
      filename: s.filename,
    };
  };
  uploadWithProgress = async ({
    file: e,
    onStatusUpdate: t,
    knowledgeBaseId: s,
    skipCheckFileType: n,
    parentId: a,
    source: o,
    uploadId: i,
    abortController: c,
  }) => {
    const u = i ?? e.name;
    try {
      const d = await e.arrayBuffer(),
        l = await Ye(e),
        f = Bt.sha256(d),
        y = await I.checkFileHash(f);
      let F;
      if (y.isExist)
        ((F = y.metadata),
          t?.({
            id: u,
            type: 'updateFile',
            value: { status: 'processing', uploadState: { progress: 100, restTime: 0, speed: 0 } },
          }));
      else {
        const { data: D, success: C } = await _e.uploadFileToS3(e, {
          abortController: c,
          onNotSupported: () => {
            (t?.({ id: u, type: 'removeFile' }),
              ce.info({
                content: j('upload.fileOnlySupportInServerMode', {
                  cloud: Pt,
                  ext: e.name.split('.').pop(),
                  ns: 'error',
                }),
                duration: 5,
              }));
          },
          onProgress: (h, p) => {
            t?.({
              id: u,
              type: 'updateFile',
              value: { status: h === 'success' ? 'processing' : h, uploadState: p },
            });
          },
          skipCheckFileType: n,
        });
        if (!C) return;
        F = D;
      }
      let k = e.type;
      if (!e.type) {
        const { fileTypeFromBuffer: D } = await Ze(
          async () => {
            const { fileTypeFromBuffer: h } = await import('./core-BDFGQ_Ev.js');
            return { fileTypeFromBuffer: h };
          },
          __vite__mapDeps([18, 19, 3, 1, 2, 4, 5, 6, 7, 8, 9]),
        );
        k = (await D(d))?.mime || 'text/plain';
      }
      const S = await I.createFile(
        {
          fileType: k,
          hash: f,
          metadata: F,
          name: e.name,
          parentId: a,
          size: e.size,
          source: o,
          url: F.path || y.url,
        },
        s,
      );
      return (
        t?.({
          id: u,
          type: 'updateFile',
          value: {
            fileUrl: S.url,
            id: S.id,
            status: 'success',
            uploadState: { progress: 100, restTime: 0, speed: 0 },
          },
        }),
        { ...S, dimensions: l, filename: e.name }
      );
    } catch (d) {
      if (d?.message?.includes('beyond the plan limit')) {
        (t?.({ id: u, type: 'removeFile' }),
          Ge.error({
            description: j('upload.storageLimitExceeded', { ns: 'error' }),
            message: j('upload.uploadFailed', { ns: 'error' }),
          }));
        return;
      }
      throw d;
    }
  };
}
const tn = (...r) => ({
    ...Bs,
    ...xt([Yt(...r), ss(...r), bs(...r), Gs(...r), Zt(...r), Zs(...r), new Js(...r)]),
  }),
  sn = Rt('file'),
  nn = Tt()(sn(tn), Ct),
  gn = () => nn.getState();
export {
  ee as D,
  Ds as a,
  I as b,
  Q as c,
  R as d,
  hn as e,
  As as f,
  gn as g,
  mn as h,
  pe as i,
  Ve as k,
  pn as m,
  fn as n,
  Ke as p,
  $ as r,
  Nt as s,
  nn as u,
};
