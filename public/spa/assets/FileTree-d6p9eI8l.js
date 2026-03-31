import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { aI as g, bl as S, f as w, I as f } from './index-C8UyLGsD.js';
import { M as j } from './Markdown-Mtmmwid1.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { b3 as v, b4 as k, R as N, b5 as C, $ as L } from '../vendor/vendor-icons-BHMUH78i.js';
const x = w(({ css: e, cssVar: a }) => ({
    codeWrapper: e`
    position: relative;
    overflow-x: auto;
    margin-block-start: 16px;
    padding-block-end: calc(100cqb - 1lh);

    pre {
      margin: 0;
    }

    code {
      counter-reset: line;
    }

    .line {
      width: 100% !important;
      margin-inline: 0 !important;
      padding-inline: 0 !important;
    }

    .line::before {
      content: counter(line);
      counter-increment: line;
      user-select: none;

      display: inline-block;

      width: 4ch;
      margin-inline-end: 2ch;

      color: ${a.colorTextQuaternary};
      text-align: end;
    }
  `,
    docWrapper: e`
    max-width: 798px;
    margin-inline: auto;
    padding-block: 8px;
    padding-inline: 24px;
  `,
  })),
  $ = (e) => {
    switch (e.toLowerCase().split('.').pop()) {
      case 'js':
      case 'mjs':
      case 'cjs':
        return 'javascript';
      case 'ts':
        return 'typescript';
      case 'tsx':
        return 'tsx';
      case 'jsx':
        return 'jsx';
      case 'py':
      case 'pyw':
        return 'python';
      case 'java':
        return 'java';
      case 'go':
        return 'go';
      case 'rs':
        return 'rust';
      case 'rb':
        return 'ruby';
      case 'sh':
      case 'bash':
      case 'zsh':
        return 'bash';
      case 'html':
      case 'htm':
        return 'html';
      case 'css':
        return 'css';
      case 'scss':
        return 'scss';
      case 'json':
        return 'json';
      case 'xml':
        return 'xml';
      case 'yaml':
      case 'yml':
        return 'yaml';
      case 'toml':
        return 'toml';
      case 'md':
      case 'mdx':
        return 'markdown';
      case 'sql':
        return 'sql';
      case 'c':
      case 'h':
        return 'c';
      case 'cpp':
      case 'cxx':
      case 'cc':
      case 'hpp':
        return 'cpp';
      case 'cs':
        return 'csharp';
      case 'swift':
        return 'swift';
      case 'kt':
      case 'kts':
        return 'kotlin';
      case 'lua':
        return 'lua';
      case 'dart':
        return 'dart';
      case 'graphql':
      case 'gql':
        return 'graphql';
      default:
        return 'txt';
    }
  },
  I = (e) => {
    const a = e.toLowerCase().split('.').pop();
    return a === 'md' || a === 'mdx';
  },
  b = (e) => {
    if (!e) return { body: '' };
    const a = e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    return a ? { body: a[2], frontmatter: a[1] } : { body: e };
  },
  F = d.memo(({ skillDetail: e, selectedFile: a, contentMap: l, liveContent: p }) => {
    if (a === 'SKILL.md') {
      const n = p ?? e?.content;
      if (!n)
        return t.jsx('div', {
          className: x.docWrapper,
          children: t.jsx('p', { style: { opacity: 0.45 }, children: 'No content' }),
        });
      const { frontmatter: r, body: o } = b(n);
      return t.jsxs('div', {
        className: x.docWrapper,
        children: [
          r && t.jsx(g, { fullFeatured: !0, language: 'yaml', variant: 'outlined', children: r }),
          t.jsx(j, { variant: 'chat', children: o }),
        ],
      });
    }
    const i = l[a];
    if (I(a)) {
      const { frontmatter: n, body: r } = b(i);
      return t.jsxs('div', {
        className: x.docWrapper,
        children: [
          n && t.jsx(g, { fullFeatured: !0, language: 'yaml', variant: 'outlined', children: n }),
          t.jsx(j, { variant: 'chat', children: r }),
        ],
      });
    }
    return t.jsxs('div', {
      className: x.codeWrapper,
      children: [
        t.jsx(S, { content: i, style: { position: 'absolute', right: 8, top: 0, zIndex: 1 } }),
        t.jsx(g, {
          copyable: !1,
          language: $(a),
          showLanguage: !1,
          variant: 'borderless',
          children: i,
        }),
      ],
    });
  });
F.displayName = 'ContentViewer';
const u = w(({ css: e, cssVar: a }) => ({
    item: e`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 6px;
    padding-inline-end: 8px;
    border-radius: 6px;

    font-size: 13px;
    line-height: 1.4;

    &:hover {
      background: ${a.colorFillTertiary};
    }
  `,
    itemSelected: e`
    color: ${a.colorPrimary};
    background: ${a.colorFillSecondary};
  `,
    label: e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  })),
  y = d.memo(
    ({
      node: e,
      depth: a,
      selectedFile: l,
      onSelectFile: p,
      expandedFolders: i,
      onToggleFolder: n,
    }) => {
      const r = e.type === 'directory',
        o = i.has(e.path),
        s = !r && l === e.path,
        m = () => {
          r ? n(e.path) : p(e.path);
        };
      return t.jsxs(t.Fragment, {
        children: [
          t.jsxs('div', {
            className: `${u.item} ${s ? u.itemSelected : ''}`,
            style: { paddingInlineStart: 8 + a * 16 },
            title: e.path,
            onClick: m,
            children: [
              r && t.jsx(f, { icon: o ? k : N, size: 14 }),
              !r && t.jsx('span', { style: { flexShrink: 0, width: 14 } }),
              t.jsx(f, { icon: r ? (o ? C : L) : v, size: 16 }),
              t.jsx('span', { className: u.label, children: e.name }),
            ],
          }),
          r &&
            o &&
            e.children?.map((c) =>
              t.jsx(
                y,
                {
                  depth: a + 1,
                  expandedFolders: i,
                  node: c,
                  selectedFile: l,
                  onSelectFile: p,
                  onToggleFolder: n,
                },
                c.path,
              ),
            ),
        ],
      });
    },
  );
y.displayName = 'TreeNode';
const q = d.memo(({ resourceTree: e, selectedFile: a, onSelectFile: l }) => {
  const [p, i] = d.useState(new Set());
  d.useEffect(() => {
    const s = new Set(),
      m = (c) => {
        for (const h of c) h.type === 'directory' && (s.add(h.path), h.children && m(h.children));
      };
    (m(e), i(s));
  }, [e]);
  const n = d.useCallback((s) => {
      i((m) => {
        const c = new Set(m);
        return (c.has(s) ? c.delete(s) : c.add(s), c);
      });
    }, []),
    r = a === 'SKILL.md',
    o = d.useMemo(() => e.length > 0, [e]);
  return t.jsxs('div', {
    style: { display: 'flex', flexDirection: 'column', gap: 2 },
    children: [
      t.jsxs('div', {
        className: `${u.item} ${r ? u.itemSelected : ''}`,
        style: { paddingInlineStart: 8 },
        onClick: () => l('SKILL.md'),
        children: [
          t.jsx('span', { style: { flexShrink: 0, width: 14 } }),
          t.jsx(f, { icon: v, size: 16 }),
          t.jsx('span', { className: u.label, children: 'SKILL.md' }),
        ],
      }),
      o &&
        e.map((s) =>
          t.jsx(
            y,
            {
              depth: 0,
              expandedFolders: p,
              node: s,
              selectedFile: a,
              onSelectFile: l,
              onToggleFolder: n,
            },
            s.path,
          ),
        ),
    ],
  });
});
q.displayName = 'FileTree';
export { F as C, q as F };
