import {
  f as Wn,
  ae as Me,
  j as K,
  ad as kn,
  ii as Ye,
  ij as Bn,
  ik as Gn,
  _ as _e,
  il as _n,
  im as me,
  F as V,
  bg as Cn,
} from './index-C8UyLGsD.js';
import { r as H } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as A } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { createHighlighter as qn, createOnigurumaEngine as Vn } from './index-IvDGr8DK.js';
import { c as Kn } from './engine-compile-CWG9UysY.js';
const Ee = 'lobe-code-diff',
  z = Wn(({ css: e, cssVar: n }) => ({
    actions: e`
      position: absolute;
      z-index: 2;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;
      transition: opacity 0.2s ${n.motionEaseInOut};
    `,
    additions: e`
      color: ${n.colorSuccess};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,
    body: e`
      overflow: auto;

      width: 100%;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      line-height: 1.6;

      /* Override @pierre/diffs shadow DOM CSS variables */
      --pdiff-font-family: ${n.fontFamilyCode};
      --pdiff-font-size: 13px;
      --pdiff-line-height: 1.6;
      --pdiff-bg-color: transparent;
      --pdiff-border-color: ${n.colorBorderSecondary};
      --pdiff-gutter-bg: ${n.colorFillQuaternary};
      --pdiff-gutter-color: ${n.colorTextQuaternary};
      --pdiff-added-bg: ${n.colorSuccessBgHover};
      --pdiff-added-highlight-bg: ${n.colorSuccessBg};
      --pdiff-removed-bg: ${n.colorErrorBgHover};
      --pdiff-removed-highlight-bg: ${n.colorErrorBg};
      --pdiff-info-bg: ${n.colorInfoBg};
    `,
    borderless: Me.variantBorderlessWithoutHover,
    deletions: e`
      color: ${n.colorError};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,
    filled: K(
      Me.variantFilledWithoutHover,
      e`
        background: ${n.colorFillQuaternary};
      `,
    ),
    header: e`
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;

      padding: 8px 12px;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      color: ${n.colorTextSecondary};

      border-block-end: 1px solid ${n.colorBorderSecondary};
    `,
    headerBorderless: e`
      padding-inline: 0;
      border-block-end: none;
    `,
    headerFilled: e`
      background: transparent;
    `,
    headerOutlined: e`
      background: ${n.colorFillQuaternary};
    `,
    outlined: Me.variantOutlinedWithoutHover,
    root: K(
      Ee,
      e`
        position: relative;

        overflow: hidden;

        width: 100%;
        border-radius: ${n.borderRadius};

        transition: background-color 100ms ${n.motionEaseOut};

        &:hover {
          .${Ee}-actions {
            opacity: 1;
          }
        }
      `,
    ),
    stats: e`
      display: flex;
      gap: 8px;
      align-items: center;
    `,
  })),
  wn = kn(z.root, {
    defaultVariants: { variant: 'filled' },
    variants: { variant: { filled: z.filled, outlined: z.outlined, borderless: z.borderless } },
  }),
  Ln = kn(z.header, {
    defaultVariants: { variant: 'filled' },
    variants: {
      variant: {
        filled: z.headerFilled,
        outlined: z.headerOutlined,
        borderless: z.headerBorderless,
      },
    },
  }),
  Xn = { position: 'absolute', top: 0, bottom: 0, textAlign: 'center' },
  Yn = { display: 'contents' };
function Qe() {
  return null;
}
const ge = 'diffs-container',
  Qn = /(?=^From [a-f0-9]+ .+$)/m,
  Le = /(?=^diff --git)/gm,
  Je = /(?=^---\s+\S)/gm,
  Jn = /(?=^@@ )/gm,
  Zn = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(?: (.*))?/m,
  Re = new RegExp('(?<=\\n)'),
  et = /^(---|\+\+\+)\s+([^\t\r\n]+)/,
  nt = /^(---|\+\+\+)\s+[ab]\/([^\t\r\n]+)/,
  tt = /^diff --git (?:"a\/(.+?)"|a\/(.+?)) (?:"b\/(.+?)"|b\/(.+?))$/,
  it = /^index ([0-9a-f]+)\.\.([0-9a-f]+)(?: (\d+))?$/i,
  qe = 'header-prefix',
  Ve = 'header-metadata',
  Ke = 'header-custom',
  X = { dark: 'pierre-dark', light: 'pierre-light' },
  En = 'data-theme-css',
  An = 'data-unsafe-css',
  le = 1,
  rt = {
    hunkLineCount: 50,
    lineHeight: 20,
    diffHeaderHeight: 44,
    hunkSeparatorHeight: 32,
    fileGap: 8,
  },
  ot = Object.freeze({ fromStart: 0, fromEnd: 0 }),
  Ze = { startingLine: 0, totalLines: 1 / 0, bufferBefore: 0, bufferAfter: 0 },
  st = { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: 0 };
function be(e) {
  return `annotation-${'side' in e ? `${e.side}-` : ''}${e.lineNumber}`;
}
function In(e, n) {
  return typeof window > 'u' && n != null
    ? A.jsxs(A.Fragment, {
        children: [
          A.jsx('template', { shadowrootmode: 'open', dangerouslySetInnerHTML: { __html: n } }),
          e,
        ],
      })
    : A.jsx(A.Fragment, { children: e });
}
const at = H.createContext(void 0);
function lt() {
  return H.useContext(at);
}
const ie = new Map(),
  He = new Map(),
  We = new Map(),
  Be = new Set();
function en(e, n) {
  e = Array.isArray(e) ? e : [e];
  for (let t of e) {
    let i;
    if (typeof t == 'string') {
      if (((i = ie.get(t)), i == null))
        throw new Error(
          `loadResolvedThemes: ${t} is not resolved, you must resolve it before calling loadResolvedThemes`,
        );
    } else ((i = t), (t = t.name), ie.has(t) || ie.set(t, i));
    Be.has(t) || (Be.add(t), n.loadThemeSync(i));
  }
}
const ve = new Map(),
  Pe = new Map(),
  dt = new Map(),
  Ge = new Set();
function nn(e, n) {
  e = Array.isArray(e) ? e : [e];
  for (const t of e) {
    if (Ge.has(t.name)) continue;
    let i = ve.get(t.name);
    (i == null && ((i = t), ve.set(t.name, i)), Ge.add(i.name), n.loadLanguageSync(i.data));
  }
}
function Tn() {
  return typeof WorkerGlobalScope < 'u' && typeof self < 'u' && self instanceof WorkerGlobalScope;
}
async function ft(e) {
  if (Tn())
    throw new Error(
      `resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`,
    );
  const n = Pe.get(e);
  if (n != null) return n;
  try {
    let t = dt.get(e);
    if ((t == null && Object.prototype.hasOwnProperty.call(Ye, e) && (t = Ye[e]), t == null))
      throw new Error(`resolveLanguage: "${e}" not found in bundled or custom languages`);
    const i = t().then(({ default: r }) => {
      const o = { name: e, data: r };
      return (ve.has(e) || ve.set(e, o), o);
    });
    return (Pe.set(e, i), await i);
  } finally {
    Pe.delete(e);
  }
}
function ct(e) {
  return ve.get(e) ?? ft(e);
}
async function ut(e) {
  if (Tn())
    throw new Error(
      `resolveTheme("${e}") cannot be called from a worker context. Themes must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`,
    );
  const n = He.get(e);
  if (n != null) return n;
  try {
    const t = We.get(e) ?? Bn[e];
    if (t == null) throw new Error(`resolveTheme: No valid loader for ${e}`);
    const i = t().then((o) => ht(e, 'default' in o ? o.default : o));
    He.set(e, i);
    const r = await i;
    if (r.name !== e)
      throw new Error(`resolvedTheme: themeName: ${e} does not match theme.name: ${r.name}`);
    return (ie.set(r.name, r), r);
  } finally {
    He.delete(e);
  }
}
function ht(e, n) {
  const t = ie.get(e);
  return t ?? ((n = Gn(n)), ie.set(e, n), n);
}
function pt(e) {
  return ie.get(e) ?? ut(e);
}
function Mn(e, n) {
  if (We.has(e)) {
    console.error('SharedHighlight.registerCustomTheme: theme name already registered', e);
    return;
  }
  We.set(e, n);
}
let q;
async function mt({ themes: e, langs: n, preferredHighlighter: t = 'shiki-js' }) {
  q ??= qn({
    themes: [],
    langs: ['text'],
    engine: t === 'shiki-wasm' ? Vn(_e(() => import('./wasm-CG6Dc4jp.js'), [])) : Kn(),
  });
  const i = bt(q) ? await q : q;
  q = i;
  const r = [];
  for (const a of n) {
    if (a === 'text' || a === 'ansi') continue;
    const l = ct(a);
    'then' in l ? r.push(l) : nn(l, i);
  }
  const o = [];
  for (const a of e) {
    const l = pt(a);
    'then' in l ? o.push(l) : en(l, q);
  }
  return (
    (r.length > 0 || o.length > 0) &&
      (await Promise.all([
        Promise.all(r).then((a) => {
          nn(a, i);
        }),
        Promise.all(o).then((a) => {
          en(a, i);
        }),
      ])),
    i
  );
}
function gt() {
  if (q != null && !('then' in q)) return q;
}
function bt(e = q) {
  return e != null && 'then' in e;
}
Mn('pierre-dark', async () => {
  const e = await _e(() => import('./pierre-dark-ClCaJvdG.js'), []);
  return { ...(e.default ?? e), name: 'pierre-dark' };
});
Mn('pierre-light', async () => {
  const e = await _e(() => import('./pierre-light-zjGsWSiE.js'), []);
  return { ...(e.default ?? e), name: 'pierre-light' };
});
function Rn(e = X) {
  const n = [];
  return (typeof e == 'string' ? n.push(e) : (n.push(e.dark), n.push(e.light)), n);
}
function Hn(e, n) {
  return e == null || n == null || typeof e == 'string' || typeof n == 'string'
    ? e === n
    : e.dark === n.dark && e.light === n.light;
}
const se = new Map(),
  he = {
    '1c': '1c',
    'abap': 'abap',
    'as': 'actionscript-3',
    'ada': 'ada',
    'adb': 'ada',
    'ads': 'ada',
    'adoc': 'asciidoc',
    'asciidoc': 'asciidoc',
    'component.html': 'angular-html',
    'component.ts': 'angular-ts',
    'conf': 'nginx',
    'htaccess': 'apache',
    'cls': 'tex',
    'trigger': 'apex',
    'apl': 'apl',
    'applescript': 'applescript',
    'scpt': 'applescript',
    'ara': 'ara',
    'asm': 'asm',
    's': 'riscv',
    'astro': 'astro',
    'awk': 'awk',
    'bal': 'ballerina',
    'sh': 'zsh',
    'bash': 'zsh',
    'bat': 'cmd',
    'cmd': 'cmd',
    'be': 'berry',
    'beancount': 'beancount',
    'bib': 'bibtex',
    'bicep': 'bicep',
    'blade.php': 'blade',
    'bsl': 'bsl',
    'c': 'c',
    'h': 'objective-cpp',
    'cs': 'csharp',
    'cpp': 'cpp',
    'hpp': 'cpp',
    'cc': 'cpp',
    'cxx': 'cpp',
    'hh': 'cpp',
    'cdc': 'cdc',
    'cairo': 'cairo',
    'clar': 'clarity',
    'clj': 'clojure',
    'cljs': 'clojure',
    'cljc': 'clojure',
    'soy': 'soy',
    'cmake': 'cmake',
    'CMakeLists.txt': 'cmake',
    'cob': 'cobol',
    'cbl': 'cobol',
    'cobol': 'cobol',
    'CODEOWNERS': 'codeowners',
    'ql': 'ql',
    'coffee': 'coffeescript',
    'lisp': 'lisp',
    'cl': 'lisp',
    'lsp': 'lisp',
    'log': 'log',
    'v': 'verilog',
    'cql': 'cql',
    'cr': 'crystal',
    'css': 'css',
    'csv': 'csv',
    'cue': 'cue',
    'cypher': 'cypher',
    'cyp': 'cypher',
    'd': 'd',
    'dart': 'dart',
    'dax': 'dax',
    'desktop': 'desktop',
    'diff': 'diff',
    'patch': 'diff',
    'Dockerfile': 'dockerfile',
    'dockerfile': 'dockerfile',
    'env': 'dotenv',
    'dm': 'dream-maker',
    'edge': 'edge',
    'el': 'emacs-lisp',
    'ex': 'elixir',
    'exs': 'elixir',
    'elm': 'elm',
    'erb': 'erb',
    'erl': 'erlang',
    'hrl': 'erlang',
    'f': 'fortran-fixed-form',
    'for': 'fortran-fixed-form',
    'fs': 'fsharp',
    'fsi': 'fsharp',
    'fsx': 'fsharp',
    'f03': 'f03',
    'f08': 'f08',
    'f18': 'f18',
    'f77': 'f77',
    'f90': 'fortran-free-form',
    'f95': 'fortran-free-form',
    'fnl': 'fennel',
    'fish': 'fish',
    'ftl': 'ftl',
    'tres': 'gdresource',
    'res': 'gdresource',
    'gd': 'gdscript',
    'gdshader': 'gdshader',
    'gs': 'genie',
    'feature': 'gherkin',
    'COMMIT_EDITMSG': 'git-commit',
    'git-rebase-todo': 'git-rebase',
    'gjs': 'glimmer-js',
    'gleam': 'gleam',
    'gts': 'glimmer-ts',
    'glsl': 'glsl',
    'vert': 'glsl',
    'frag': 'glsl',
    'shader': 'shaderlab',
    'gp': 'gnuplot',
    'plt': 'gnuplot',
    'gnuplot': 'gnuplot',
    'go': 'go',
    'graphql': 'graphql',
    'gql': 'graphql',
    'groovy': 'groovy',
    'gvy': 'groovy',
    'hack': 'hack',
    'haml': 'haml',
    'hbs': 'handlebars',
    'handlebars': 'handlebars',
    'hs': 'haskell',
    'lhs': 'haskell',
    'hx': 'haxe',
    'hcl': 'hcl',
    'hjson': 'hjson',
    'hlsl': 'hlsl',
    'fx': 'hlsl',
    'html': 'html',
    'htm': 'html',
    'http': 'http',
    'rest': 'http',
    'hxml': 'hxml',
    'hy': 'hy',
    'imba': 'imba',
    'ini': 'ini',
    'cfg': 'ini',
    'jade': 'pug',
    'pug': 'pug',
    'java': 'java',
    'js': 'javascript',
    'mjs': 'javascript',
    'cjs': 'javascript',
    'jinja': 'jinja',
    'jinja2': 'jinja',
    'j2': 'jinja',
    'jison': 'jison',
    'jl': 'julia',
    'json': 'json',
    'json5': 'json5',
    'jsonc': 'jsonc',
    'jsonl': 'jsonl',
    'jsonnet': 'jsonnet',
    'libsonnet': 'jsonnet',
    'jssm': 'jssm',
    'jsx': 'jsx',
    'kt': 'kotlin',
    'kts': 'kts',
    'kql': 'kusto',
    'tex': 'tex',
    'ltx': 'tex',
    'lean': 'lean4',
    'less': 'less',
    'liquid': 'liquid',
    'lit': 'lit',
    'll': 'llvm',
    'logo': 'logo',
    'lua': 'lua',
    'luau': 'luau',
    'Makefile': 'makefile',
    'mk': 'makefile',
    'makefile': 'makefile',
    'md': 'markdown',
    'markdown': 'markdown',
    'marko': 'marko',
    'm': 'wolfram',
    'mat': 'matlab',
    'mdc': 'mdc',
    'mdx': 'mdx',
    'wiki': 'wikitext',
    'mediawiki': 'wikitext',
    'mmd': 'mermaid',
    'mermaid': 'mermaid',
    'mips': 'mipsasm',
    'mojo': 'mojo',
    '🔥': 'mojo',
    'move': 'move',
    'nar': 'narrat',
    'nf': 'nextflow',
    'nim': 'nim',
    'nims': 'nim',
    'nimble': 'nim',
    'nix': 'nix',
    'nu': 'nushell',
    'mm': 'objective-cpp',
    'ml': 'ocaml',
    'mli': 'ocaml',
    'mll': 'ocaml',
    'mly': 'ocaml',
    'pas': 'pascal',
    'p': 'pascal',
    'pl': 'prolog',
    'pm': 'perl',
    't': 'perl',
    'raku': 'raku',
    'p6': 'raku',
    'pl6': 'raku',
    'php': 'php',
    'phtml': 'php',
    'pls': 'plsql',
    'sql': 'sql',
    'po': 'po',
    'polar': 'polar',
    'pcss': 'postcss',
    'pot': 'pot',
    'potx': 'potx',
    'pq': 'powerquery',
    'pqm': 'powerquery',
    'ps1': 'powershell',
    'psm1': 'powershell',
    'psd1': 'powershell',
    'prisma': 'prisma',
    'pro': 'prolog',
    'P': 'prolog',
    'properties': 'properties',
    'proto': 'protobuf',
    'pp': 'puppet',
    'purs': 'purescript',
    'py': 'python',
    'pyw': 'python',
    'pyi': 'python',
    'qml': 'qml',
    'qmldir': 'qmldir',
    'qss': 'qss',
    'r': 'r',
    'R': 'r',
    'rkt': 'racket',
    'rktl': 'racket',
    'razor': 'razor',
    'cshtml': 'razor',
    'rb': 'ruby',
    'rbw': 'ruby',
    'reg': 'reg',
    'regex': 'regexp',
    'rel': 'rel',
    'rs': 'rust',
    'rst': 'rst',
    'rake': 'ruby',
    'gemspec': 'ruby',
    'sas': 'sas',
    'sass': 'sass',
    'scala': 'scala',
    'sc': 'scala',
    'scm': 'scheme',
    'ss': 'scheme',
    'sld': 'scheme',
    'scss': 'scss',
    'sdbl': 'sdbl',
    'shadergraph': 'shader',
    'st': 'smalltalk',
    'sol': 'solidity',
    'sparql': 'sparql',
    'rq': 'sparql',
    'spl': 'splunk',
    'config': 'ssh-config',
    'do': 'stata',
    'ado': 'stata',
    'dta': 'stata',
    'styl': 'stylus',
    'stylus': 'stylus',
    'svelte': 'svelte',
    'swift': 'swift',
    'sv': 'system-verilog',
    'svh': 'system-verilog',
    'service': 'systemd',
    'socket': 'systemd',
    'device': 'systemd',
    'timer': 'systemd',
    'talon': 'talonscript',
    'tasl': 'tasl',
    'tcl': 'tcl',
    'templ': 'templ',
    'tf': 'tf',
    'tfvars': 'tfvars',
    'toml': 'toml',
    'ts': 'typescript',
    'tsp': 'typespec',
    'tsv': 'tsv',
    'tsx': 'tsx',
    'ttl': 'turtle',
    'twig': 'twig',
    'typ': 'typst',
    'vv': 'v',
    'vala': 'vala',
    'vapi': 'vala',
    'vb': 'vb',
    'vbs': 'vb',
    'bas': 'vb',
    'vh': 'verilog',
    'vhd': 'vhdl',
    'vhdl': 'vhdl',
    'vim': 'vimscript',
    'vue': 'vue',
    'vine.ts': 'vue-vine',
    'vy': 'vyper',
    'wasm': 'wasm',
    'wat': 'wasm',
    'wy': '文言',
    'wgsl': 'wgsl',
    'wit': 'wit',
    'wl': 'wolfram',
    'nb': 'wolfram',
    'xml': 'xml',
    'xsl': 'xsl',
    'xslt': 'xsl',
    'yaml': 'yaml',
    'yml': 'yml',
    'zs': 'zenscript',
    'zig': 'zig',
    'zsh': 'zsh',
    'sty': 'tex',
  };
function de(e) {
  if (se.has(e)) return se.get(e) ?? 'text';
  if (he[e] != null) return he[e];
  const n = e.match(/\.([^/\\]+\.[^/\\]+)$/);
  if (n != null) {
    if (se.has(n[1])) return se.get(n[1]) ?? 'text';
    if (he[n[1]] != null) return he[n[1]] ?? 'text';
  }
  const t = e.match(/\.([^.]+)$/)?.[1] ?? '';
  return se.has(t) ? (se.get(t) ?? 'text') : (he[t] ?? 'text');
}
function fe(e) {
  return e.replace(/\n$|\r\n$/, '');
}
function Z(e) {
  return { type: 'text', value: e };
}
function I({ tagName: e, children: n = [], properties: t = {} }) {
  return { type: 'element', tagName: e, properties: t, children: n };
}
function Ae({ name: e, width: n = 16, height: t = 16, properties: i }) {
  return I({
    tagName: 'svg',
    properties: { width: n, height: t, viewBox: '0 0 16 16', ...i },
    children: [I({ tagName: 'use', properties: { href: `#${e.replace(/^#/, '')}` } })],
  });
}
function vt(e) {
  let n = e.children[0];
  for (; n != null; ) {
    if (n.type === 'element' && n.tagName === 'code') return n;
    'children' in n ? (n = n.children[0]) : (n = null);
  }
}
function ye(e) {
  return I({ tagName: 'div', properties: { 'data-gutter': '' }, children: e });
}
function xt(e, n, t, i = {}) {
  return I({
    tagName: 'div',
    properties: { 'data-line-type': e, 'data-column-number': n, 'data-line-index': t, ...i },
    children:
      n != null
        ? [
            I({
              tagName: 'span',
              properties: { 'data-line-number-content': '' },
              children: [Z(`${n}`)],
            }),
          ]
        : void 0,
  });
}
function B(e, n, t) {
  return I({
    tagName: 'div',
    properties: {
      'data-gutter-buffer': n,
      'data-buffer-size': t,
      'data-line-type': n === 'annotation' ? void 0 : e,
      'style':
        n === 'annotation'
          ? `grid-row: span ${t};`
          : `grid-row: span ${t};min-height:calc(${t} * 1lh);`,
    },
  });
}
function yt(e, n, t) {
  const i = typeof t.lineInfo == 'function' ? t.lineInfo(n) : t.lineInfo[n - 1];
  if (i == null) {
    const r = `processLine: line ${n}, contains no state.lineInfo`;
    throw (console.error(r, { node: e, line: n, state: t }), new Error(r));
  }
  return (
    (e.tagName = 'div'),
    (e.properties['data-line'] = i.lineNumber),
    (e.properties['data-alt-line'] = i.altLineNumber),
    (e.properties['data-line-type'] = i.type),
    (e.properties['data-line-index'] = i.lineIndex),
    e.children.length === 0 &&
      e.children.push(
        Z(`
`),
      ),
    e
  );
}
function St(e = !1) {
  const n = { lineInfo: [] },
    t = [
      {
        line(i) {
          return (delete i.properties.class, i);
        },
        pre(i) {
          const r = vt(i),
            o = [];
          if (r != null) {
            let a = 1;
            for (const l of r.children) l.type === 'element' && (o.push(yt(l, a, n)), a++);
            r.children = o;
          }
          return i;
        },
      },
    ];
  return (e && t.push(kt, tn), { state: n, transformers: t, toClass: tn });
}
const tn = _n({ classPrefix: 'hl-' }),
  kt = {
    name: 'token-style-normalizer',
    tokens(e) {
      for (const n of e)
        for (const t of n) {
          if (t.htmlStyle != null) continue;
          const i = {};
          (t.color != null && (i.color = t.color),
            t.bgColor != null && (i['background-color'] = t.bgColor),
            t.fontStyle != null &&
              t.fontStyle !== 0 &&
              ((t.fontStyle & 1) !== 0 && (i['font-style'] = 'italic'),
              (t.fontStyle & 2) !== 0 && (i['font-weight'] = 'bold'),
              (t.fontStyle & 4) !== 0 && (i['text-decoration'] = 'underline')),
            Object.keys(i).length > 0 && (t.htmlStyle = i));
        }
    },
  };
function G(e) {
  return `--${e === 'token' ? 'diffs-token' : 'diffs'}-`;
}
function Ct({ theme: e = X, highlighter: n, prefix: t }) {
  let i = '';
  if (typeof e == 'string') {
    const r = n.getTheme(e);
    ((i += `color:${r.fg};`),
      (i += `background-color:${r.bg};`),
      (i += `${G('global')}fg:${r.fg};`),
      (i += `${G('global')}bg:${r.bg};`),
      (i += De(r, t)));
  } else {
    let r = n.getTheme(e.dark);
    ((i += `${G('global')}dark:${r.fg};`),
      (i += `${G('global')}dark-bg:${r.bg};`),
      (i += De(r, 'dark')),
      (r = n.getTheme(e.light)),
      (i += `${G('global')}light:${r.fg};`),
      (i += `${G('global')}light-bg:${r.bg};`),
      (i += De(r, 'light')));
  }
  return i;
}
function De(e, n) {
  n = n != null ? `${n}-` : '';
  let t = '';
  const i = e.colors?.['gitDecoration.addedResourceForeground'] ?? e.colors?.['terminal.ansiGreen'];
  i != null && (t += `${G('global')}${n}addition-color:${i};`);
  const r = e.colors?.['gitDecoration.deletedResourceForeground'] ?? e.colors?.['terminal.ansiRed'];
  r != null && (t += `${G('global')}${n}deletion-color:${r};`);
  const o =
    e.colors?.['gitDecoration.modifiedResourceForeground'] ?? e.colors?.['terminal.ansiBlue'];
  return (o != null && (t += `${G('global')}${n}modified-color:${o};`), t);
}
function rn(e) {
  let n = e.children[0];
  for (; n != null; ) {
    if (n.type === 'element' && n.tagName === 'code') return n.children;
    'children' in n ? (n = n.children[0]) : (n = null);
  }
  throw (console.error(e), new Error('getLineNodes: Unable to find children'));
}
function on(e, n) {
  return (
    e?.cacheKey === n?.cacheKey &&
    e?.contents === n?.contents &&
    e?.name === n?.name &&
    e?.lang === n?.lang
  );
}
function wt(e) {
  const n = e.lang ?? de(e.name),
    t = e.lang ?? (e.prevName != null ? de(e.prevName) : 'text');
  return n === 'text' && t === 'text';
}
function Ie({
  diff: e,
  diffStyle: n,
  startingLine: t = 0,
  totalLines: i = 1 / 0,
  expandedHunks: r,
  collapsedContextThreshold: o = le,
  callback: a,
}) {
  const l = {
    finalHunk: e.hunks.at(-1),
    viewportStart: t,
    viewportEnd: t + i,
    isWindowedHighlight: t > 0 || i < 1 / 0,
    splitCount: 0,
    unifiedCount: 0,
    shouldBreak() {
      if (!l.isWindowedHighlight) return !1;
      const s = l.unifiedCount >= t + i,
        f = l.splitCount >= t + i;
      return n === 'unified' ? s : (n === 'split' || s) && f;
    },
    shouldSkip(s, f) {
      if (!l.isWindowedHighlight) return !1;
      const d = l.unifiedCount + s < t,
        u = l.splitCount + f < t;
      return n === 'unified' ? d : (n === 'split' || d) && u;
    },
    incrementCounts(s, f) {
      ((n === 'unified' || n === 'both') && (l.unifiedCount += s),
        (n === 'split' || n === 'both') && (l.splitCount += f));
    },
    isInWindow(s, f) {
      if (!l.isWindowedHighlight) return !0;
      const d = l.isInUnifiedWindow(s),
        u = l.isInSplitWindow(f);
      return n === 'unified' ? d : n === 'split' ? u : d || u;
    },
    isInUnifiedWindow(s) {
      return !l.isWindowedHighlight || (l.unifiedCount >= t - s && l.unifiedCount < t + i);
    },
    isInSplitWindow(s) {
      return !l.isWindowedHighlight || (l.splitCount >= t - s && l.splitCount < t + i);
    },
    emit(s, f = !1) {
      return (
        f ||
          (n === 'unified'
            ? l.incrementCounts(1, 0)
            : n === 'split'
              ? l.incrementCounts(0, 1)
              : l.incrementCounts(1, 1)),
        a(s) ?? !1
      );
    },
  };
  e: for (const [s, f] of e.hunks.entries()) {
    let h = function (m, y) {
        return u == null || u.collapsedLines <= 0 || u.fromStart + u.fromEnd > 0
          ? 0
          : n === 'unified'
            ? m === f.unifiedLineStart + f.unifiedLineCount - 1
              ? u.collapsedLines
              : 0
            : y === f.splitLineStart + f.splitLineCount - 1
              ? u.collapsedLines
              : 0;
      },
      g = function () {
        if (d.collapsedLines === 0) return 0;
        const m = d.collapsedLines;
        return ((d.collapsedLines = 0), m);
      };
    if (l.shouldBreak()) break;
    const d = sn(e.isPartial, f.collapsedBefore, r, s, o),
      u = (() => {
        if (f !== l.finalHunk || !Lt(e)) return;
        const m = e.additionLines.length - (f.additionLineIndex + f.additionCount),
          y = e.deletionLines.length - (f.deletionLineIndex + f.deletionCount);
        if (m !== y)
          throw new Error(
            `iterateOverDiff: trailing context mismatch (additions=${m}, deletions=${y}) for ${e.name}`,
          );
        const w = Math.min(m, y);
        return sn(e.isPartial, w, r, e.hunks.length, o);
      })(),
      c = d.fromStart + d.fromEnd;
    if (l.shouldSkip(c, c)) (l.incrementCounts(c, c), g());
    else {
      let m = f.unifiedLineStart - d.rangeSize,
        y = f.splitLineStart - d.rangeSize,
        w = f.deletionLineIndex - d.rangeSize,
        E = f.additionLineIndex - d.rangeSize,
        L = f.deletionStart - d.rangeSize,
        T = f.additionStart - d.rangeSize,
        M = 0;
      for (; M < d.fromStart; ) {
        if (l.isInWindow(0, 0)) {
          if (
            l.emit({
              hunkIndex: s,
              hunk: f,
              collapsedBefore: 0,
              collapsedAfter: 0,
              type: 'context-expanded',
              deletionLine: {
                lineNumber: L + M,
                lineIndex: w + M,
                noEOFCR: !1,
                unifiedLineIndex: m + M,
                splitLineIndex: y + M,
              },
              additionLine: {
                unifiedLineIndex: m + M,
                splitLineIndex: y + M,
                lineIndex: E + M,
                lineNumber: T + M,
                noEOFCR: !1,
              },
            })
          )
            break e;
        } else l.incrementCounts(1, 1);
        M++;
      }
      for (
        m = f.unifiedLineStart - d.fromEnd,
          y = f.splitLineStart - d.fromEnd,
          w = f.deletionLineIndex - d.fromEnd,
          E = f.additionLineIndex - d.fromEnd,
          L = f.deletionStart - d.fromEnd,
          T = f.additionStart - d.fromEnd,
          M = 0;
        M < d.fromEnd;
      ) {
        if (l.isInWindow(0, 0)) {
          if (
            l.emit({
              hunkIndex: s,
              hunk: f,
              collapsedBefore: g(),
              collapsedAfter: 0,
              type: 'context-expanded',
              deletionLine: {
                lineNumber: L + M,
                lineIndex: w + M,
                noEOFCR: !1,
                unifiedLineIndex: m + M,
                splitLineIndex: y + M,
              },
              additionLine: {
                unifiedLineIndex: m + M,
                splitLineIndex: y + M,
                lineIndex: E + M,
                lineNumber: T + M,
                noEOFCR: !1,
              },
            })
          )
            break e;
        } else l.incrementCounts(1, 1);
        M++;
      }
    }
    let b = f.unifiedLineStart,
      x = f.splitLineStart,
      C = f.deletionLineIndex,
      p = f.additionLineIndex,
      S = f.deletionStart,
      v = f.additionStart;
    const k = f.hunkContent.at(-1);
    for (const m of f.hunkContent) {
      if (l.shouldBreak()) break e;
      const y = m === k;
      if (m.type === 'context') {
        if (l.shouldSkip(m.lines, m.lines)) (l.incrementCounts(m.lines, m.lines), g());
        else {
          let w = 0;
          for (; w < m.lines; ) {
            if (l.isInWindow(0, 0)) {
              const E = y && w === m.lines - 1,
                L = b + w,
                T = x + w;
              if (
                l.emit({
                  hunkIndex: s,
                  hunk: f,
                  collapsedBefore: g(),
                  collapsedAfter: h(L, T),
                  type: 'context',
                  deletionLine: {
                    lineNumber: S + w,
                    lineIndex: C + w,
                    noEOFCR: E && f.noEOFCRDeletions,
                    unifiedLineIndex: L,
                    splitLineIndex: T,
                  },
                  additionLine: {
                    unifiedLineIndex: L,
                    splitLineIndex: T,
                    lineIndex: p + w,
                    lineNumber: v + w,
                    noEOFCR: E && f.noEOFCRAdditions,
                  },
                })
              )
                break e;
            } else l.incrementCounts(1, 1);
            w++;
          }
        }
        ((b += m.lines),
          (x += m.lines),
          (C += m.lines),
          (p += m.lines),
          (S += m.lines),
          (v += m.lines));
      } else {
        const w = Math.max(m.deletions, m.additions),
          E = m.deletions + m.additions;
        if (!l.shouldSkip(E, w)) {
          const L = Et(l, m, n);
          for (const [T, M] of L)
            for (let R = T; R < M; R++) {
              const O = h(
                b + R,
                n === 'unified' ? x + (R < m.deletions ? R : R - m.deletions) : x + R,
              );
              if (
                l.emit(
                  At({
                    hunkIndex: s,
                    hunk: f,
                    collapsedBefore: g(),
                    collapsedAfter: O,
                    diffStyle: n,
                    index: R,
                    unifiedLineIndex: b,
                    splitLineIndex: x,
                    additionLineIndex: p,
                    deletionLineIndex: C,
                    additionLineNumber: v,
                    deletionLineNumber: S,
                    content: m,
                    isLastContent: y,
                    unifiedCount: E,
                    splitCount: w,
                  }),
                  !0,
                )
              )
                break e;
            }
        }
        (g(),
          l.incrementCounts(E, w),
          (b += E),
          (x += w),
          (C += m.deletions),
          (p += m.additions),
          (S += m.deletions),
          (v += m.additions));
      }
    }
    if (u != null) {
      const { collapsedLines: m, fromStart: y, fromEnd: w } = u,
        E = y + w;
      let L = 0;
      for (; L < E; ) {
        if (l.shouldBreak()) break e;
        if (l.isInWindow(0, 0)) {
          const T = L === E - 1;
          if (
            l.emit({
              hunkIndex: e.hunks.length,
              hunk: void 0,
              collapsedBefore: 0,
              collapsedAfter: T ? m : 0,
              type: 'context-expanded',
              deletionLine: {
                lineNumber: S + L,
                lineIndex: C + L,
                noEOFCR: !1,
                unifiedLineIndex: b + L,
                splitLineIndex: x + L,
              },
              additionLine: {
                unifiedLineIndex: b + L,
                splitLineIndex: x + L,
                lineIndex: p + L,
                lineNumber: v + L,
                noEOFCR: !1,
              },
            })
          )
            break e;
        } else l.incrementCounts(1, 1);
        L++;
      }
    }
  }
}
function sn(e, n, t, i, r) {
  if (((n = Math.max(n, 0)), n === 0 || e))
    return { fromStart: 0, fromEnd: 0, rangeSize: n, collapsedLines: Math.max(n, 0) };
  if (t === !0 || n <= r) return { fromStart: n, fromEnd: 0, rangeSize: n, collapsedLines: 0 };
  const o = t?.get(i),
    a = Math.min(Math.max(o?.fromStart ?? 0, 0), n),
    l = Math.min(Math.max(o?.fromEnd ?? 0, 0), n),
    s = a + l,
    f = s >= n;
  return {
    fromStart: f ? n : a,
    fromEnd: f ? 0 : l,
    rangeSize: n,
    collapsedLines: Math.max(n - s, 0),
  };
}
function Lt(e) {
  const n = e.hunks.at(-1);
  return n == null || e.isPartial || e.additionLines.length === 0 || e.deletionLines.length === 0
    ? !1
    : n.additionLineIndex + n.additionCount < e.additionLines.length ||
        n.deletionLineIndex + n.deletionCount < e.deletionLines.length;
}
function Et(e, n, t) {
  if (!e.isWindowedHighlight)
    return [[0, t === 'unified' ? n.deletions + n.additions : Math.max(n.deletions, n.additions)]];
  const i = t !== 'split',
    r = t !== 'unified',
    o = t === 'unified' ? 'unified' : 'split',
    a = [];
  function l(u, c) {
    if (u + c <= e.viewportStart || u >= e.viewportEnd) return;
    const h = Math.max(0, e.viewportStart - u),
      g = Math.min(c, e.viewportEnd - u);
    return g > h ? [h, g] : void 0;
  }
  function s(u, c) {
    return o === 'split' ? u : c === 'additions' ? [u[0] + n.deletions, u[1] + n.deletions] : u;
  }
  function f(u, c) {
    if (u == null) return;
    const [h, g] = s(u, c);
    g > h && a.push([h, g]);
  }
  if (
    (i &&
      (f(l(e.unifiedCount, n.deletions), 'deletions'),
      f(l(e.unifiedCount + n.deletions, n.additions), 'additions')),
    r &&
      (f(l(e.splitCount, n.deletions), 'deletions'), f(l(e.splitCount, n.additions), 'additions')),
    a.length === 0)
  )
    return a;
  a.sort((u, c) => u[0] - c[0]);
  const d = [a[0]];
  for (const [u, c] of a.slice(1)) {
    const h = d[d.length - 1];
    u <= h[1] ? (h[1] = Math.max(h[1], c)) : d.push([u, c]);
  }
  return d;
}
function At({
  hunkIndex: e,
  hunk: n,
  collapsedAfter: t,
  collapsedBefore: i,
  diffStyle: r,
  index: o,
  unifiedLineIndex: a,
  splitLineIndex: l,
  additionLineIndex: s,
  deletionLineIndex: f,
  additionLineNumber: d,
  deletionLineNumber: u,
  content: c,
  isLastContent: h,
  unifiedCount: g,
  splitCount: b,
}) {
  const x = o < c.deletions ? a + o : void 0,
    C =
      r === 'unified'
        ? o >= c.deletions
          ? a + o
          : void 0
        : o < c.additions
          ? a + c.deletions + o
          : void 0,
    p = r === 'unified' ? l + (o < c.deletions ? o : o - c.deletions) : l + o,
    S = o < c.deletions ? f + o : void 0,
    v = o < c.deletions ? u + o : void 0,
    k =
      r === 'unified'
        ? o >= c.deletions
          ? s + (o - c.deletions)
          : void 0
        : o < c.additions
          ? s + o
          : void 0,
    m =
      r === 'unified'
        ? o >= c.deletions
          ? d + (o - c.deletions)
          : void 0
        : o < c.additions
          ? d + o
          : void 0,
    y =
      r === 'unified'
        ? h && o === c.deletions - 1 && n.noEOFCRDeletions
        : h && o === b - 1 && n.noEOFCRDeletions,
    w =
      r === 'unified'
        ? h && o === g - 1 && n.noEOFCRAdditions
        : h && o === b - 1 && n.noEOFCRAdditions,
    E =
      S != null && v != null && x != null
        ? { lineNumber: v, lineIndex: S, noEOFCR: y, unifiedLineIndex: x, splitLineIndex: p }
        : void 0,
    L =
      k != null && m != null && C != null
        ? { unifiedLineIndex: C, splitLineIndex: p, lineIndex: k, lineNumber: m, noEOFCR: w }
        : void 0;
  if (E == null && L != null)
    return {
      type: 'change',
      hunkIndex: e,
      hunk: n,
      collapsedAfter: t,
      collapsedBefore: i,
      deletionLine: void 0,
      additionLine: L,
    };
  if (E != null && L == null)
    return {
      type: 'change',
      hunkIndex: e,
      hunk: n,
      collapsedAfter: t,
      collapsedBefore: i,
      deletionLine: E,
      additionLine: void 0,
    };
  if (E == null || L == null) throw new Error('iterateOverDiff: missing change line data');
  return {
    type: 'change',
    hunkIndex: e,
    hunk: n,
    collapsedAfter: t,
    collapsedBefore: i,
    deletionLine: E,
    additionLine: L,
  };
}
class Xe {
  diff(n, t, i = {}) {
    let r;
    typeof i == 'function' ? ((r = i), (i = {})) : 'callback' in i && (r = i.callback);
    const o = this.castInput(n, i),
      a = this.castInput(t, i),
      l = this.removeEmpty(this.tokenize(o, i)),
      s = this.removeEmpty(this.tokenize(a, i));
    return this.diffWithOptionsObj(l, s, i, r);
  }
  diffWithOptionsObj(n, t, i, r) {
    var o;
    const a = (p) => {
        if (((p = this.postProcess(p, i)), r)) {
          setTimeout(function () {
            r(p);
          }, 0);
          return;
        } else return p;
      },
      l = t.length,
      s = n.length;
    let f = 1,
      d = l + s;
    i.maxEditLength != null && (d = Math.min(d, i.maxEditLength));
    const u = (o = i.timeout) !== null && o !== void 0 ? o : 1 / 0,
      c = Date.now() + u,
      h = [{ oldPos: -1, lastComponent: void 0 }];
    let g = this.extractCommon(h[0], t, n, 0, i);
    if (h[0].oldPos + 1 >= s && g + 1 >= l) return a(this.buildValues(h[0].lastComponent, t, n));
    let b = -1 / 0,
      x = 1 / 0;
    const C = () => {
      for (let p = Math.max(b, -f); p <= Math.min(x, f); p += 2) {
        let S;
        const v = h[p - 1],
          k = h[p + 1];
        v && (h[p - 1] = void 0);
        let m = !1;
        if (k) {
          const w = k.oldPos - p;
          m = k && 0 <= w && w < l;
        }
        const y = v && v.oldPos + 1 < s;
        if (!m && !y) {
          h[p] = void 0;
          continue;
        }
        if (
          (!y || (m && v.oldPos < k.oldPos)
            ? (S = this.addToPath(k, !0, !1, 0, i))
            : (S = this.addToPath(v, !1, !0, 1, i)),
          (g = this.extractCommon(S, t, n, p, i)),
          S.oldPos + 1 >= s && g + 1 >= l)
        )
          return a(this.buildValues(S.lastComponent, t, n)) || !0;
        ((h[p] = S),
          S.oldPos + 1 >= s && (x = Math.min(x, p - 1)),
          g + 1 >= l && (b = Math.max(b, p + 1)));
      }
      f++;
    };
    if (r)
      (function p() {
        setTimeout(function () {
          if (f > d || Date.now() > c) return r(void 0);
          C() || p();
        }, 0);
      })();
    else
      for (; f <= d && Date.now() <= c; ) {
        const p = C();
        if (p) return p;
      }
  }
  addToPath(n, t, i, r, o) {
    const a = n.lastComponent;
    return a && !o.oneChangePerToken && a.added === t && a.removed === i
      ? {
          oldPos: n.oldPos + r,
          lastComponent: {
            count: a.count + 1,
            added: t,
            removed: i,
            previousComponent: a.previousComponent,
          },
        }
      : {
          oldPos: n.oldPos + r,
          lastComponent: { count: 1, added: t, removed: i, previousComponent: a },
        };
  }
  extractCommon(n, t, i, r, o) {
    const a = t.length,
      l = i.length;
    let s = n.oldPos,
      f = s - r,
      d = 0;
    for (; f + 1 < a && s + 1 < l && this.equals(i[s + 1], t[f + 1], o); )
      (f++,
        s++,
        d++,
        o.oneChangePerToken &&
          (n.lastComponent = {
            count: 1,
            previousComponent: n.lastComponent,
            added: !1,
            removed: !1,
          }));
    return (
      d &&
        !o.oneChangePerToken &&
        (n.lastComponent = {
          count: d,
          previousComponent: n.lastComponent,
          added: !1,
          removed: !1,
        }),
      (n.oldPos = s),
      f
    );
  }
  equals(n, t, i) {
    return i.comparator
      ? i.comparator(n, t)
      : n === t || (!!i.ignoreCase && n.toLowerCase() === t.toLowerCase());
  }
  removeEmpty(n) {
    const t = [];
    for (let i = 0; i < n.length; i++) n[i] && t.push(n[i]);
    return t;
  }
  castInput(n, t) {
    return n;
  }
  tokenize(n, t) {
    return Array.from(n);
  }
  join(n) {
    return n.join('');
  }
  postProcess(n, t) {
    return n;
  }
  get useLongestToken() {
    return !1;
  }
  buildValues(n, t, i) {
    const r = [];
    let o;
    for (; n; ) (r.push(n), (o = n.previousComponent), delete n.previousComponent, (n = o));
    r.reverse();
    const a = r.length;
    let l = 0,
      s = 0,
      f = 0;
    for (; l < a; l++) {
      const d = r[l];
      if (d.removed) ((d.value = this.join(i.slice(f, f + d.count))), (f += d.count));
      else {
        if (!d.added && this.useLongestToken) {
          let u = t.slice(s, s + d.count);
          ((u = u.map(function (c, h) {
            const g = i[f + h];
            return g.length > c.length ? g : c;
          })),
            (d.value = this.join(u)));
        } else d.value = this.join(t.slice(s, s + d.count));
        ((s += d.count), d.added || (f += d.count));
      }
    }
    return r;
  }
}
class It extends Xe {}
const Tt = new It();
function Mt(e, n, t) {
  return Tt.diff(e, n, t);
}
const an =
  'a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}';
class Rt extends Xe {
  tokenize(n) {
    const t = new RegExp(`(\\r?\\n)|[${an}]+|[^\\S\\n\\r]+|[^${an}]`, 'ug');
    return n.match(t) || [];
  }
}
const Ht = new Rt();
function Pt(e, n, t) {
  return Ht.diff(e, n, t);
}
class Dt extends Xe {
  constructor() {
    (super(...arguments), (this.tokenize = Ut));
  }
  equals(n, t, i) {
    return (
      i.ignoreWhitespace
        ? ((!i.newlineIsToken ||
            !n.includes(`
`)) &&
            (n = n.trim()),
          (!i.newlineIsToken ||
            !t.includes(`
`)) &&
            (t = t.trim()))
        : i.ignoreNewlineAtEof &&
          !i.newlineIsToken &&
          (n.endsWith(`
`) && (n = n.slice(0, -1)),
          t.endsWith(`
`) && (t = t.slice(0, -1))),
      super.equals(n, t, i)
    );
  }
}
const Nt = new Dt();
function ln(e, n, t) {
  return Nt.diff(e, n, t);
}
function Ut(e, n) {
  n.stripTrailingCr &&
    (e = e.replace(
      /\r\n/g,
      `
`,
    ));
  const t = [],
    i = e.split(/(\n|\r\n)/);
  i[i.length - 1] || i.pop();
  for (let r = 0; r < i.length; r++) {
    const o = i[r];
    r % 2 && !n.newlineIsToken ? (t[t.length - 1] += o) : t.push(o);
  }
  return t;
}
const zt = { includeIndex: !0, includeUnderline: !0, includeFileHeaders: !0 };
function Ot(e, n, t, i, r, o, a) {
  let l;
  ((l = {}), typeof l.context > 'u' && (l.context = 4));
  const s = l.context;
  if (l.newlineIsToken)
    throw new Error(
      'newlineIsToken may not be used with patch-generation functions, only with diffing functions',
    );
  if (l.callback) {
    const { callback: d } = l;
    ln(
      t,
      i,
      Object.assign(Object.assign({}, l), {
        callback: (u) => {
          const c = f(u);
          d(c);
        },
      }),
    );
  } else return f(ln(t, i, l));
  function f(d) {
    if (!d) return;
    d.push({ value: '', lines: [] });
    function u(p) {
      return p.map(function (S) {
        return ' ' + S;
      });
    }
    const c = [];
    let h = 0,
      g = 0,
      b = [],
      x = 1,
      C = 1;
    for (let p = 0; p < d.length; p++) {
      const S = d[p],
        v = S.lines || $t(S.value);
      if (((S.lines = v), S.added || S.removed)) {
        if (!h) {
          const k = d[p - 1];
          ((h = x),
            (g = C),
            k && ((b = s > 0 ? u(k.lines.slice(-s)) : []), (h -= b.length), (g -= b.length)));
        }
        for (const k of v) b.push((S.added ? '+' : '-') + k);
        S.added ? (C += v.length) : (x += v.length);
      } else {
        if (h)
          if (v.length <= s * 2 && p < d.length - 2) for (const k of u(v)) b.push(k);
          else {
            const k = Math.min(v.length, s);
            for (const y of u(v.slice(0, k))) b.push(y);
            const m = {
              oldStart: h,
              oldLines: x - h + k,
              newStart: g,
              newLines: C - g + k,
              lines: b,
            };
            (c.push(m), (h = 0), (g = 0), (b = []));
          }
        ((x += v.length), (C += v.length));
      }
    }
    for (const p of c)
      for (let S = 0; S < p.lines.length; S++)
        p.lines[S].endsWith(`
`)
          ? (p.lines[S] = p.lines[S].slice(0, -1))
          : (p.lines.splice(S + 1, 0, '\\ No newline at end of file'), S++);
    return { oldFileName: e, newFileName: n, oldHeader: r, newHeader: o, hunks: c };
  }
}
function Pn(e, n) {
  if ((n || (n = zt), Array.isArray(e))) {
    if (e.length > 1 && !n.includeFileHeaders)
      throw new Error(
        'Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)',
      );
    return e.map((i) => Pn(i, n)).join(`
`);
  }
  const t = [];
  (n.includeIndex && e.oldFileName == e.newFileName && t.push('Index: ' + e.oldFileName),
    n.includeUnderline &&
      t.push('==================================================================='),
    n.includeFileHeaders &&
      (t.push('--- ' + e.oldFileName + (typeof e.oldHeader > 'u' ? '' : '	' + e.oldHeader)),
      t.push('+++ ' + e.newFileName + (typeof e.newHeader > 'u' ? '' : '	' + e.newHeader))));
  for (let i = 0; i < e.hunks.length; i++) {
    const r = e.hunks[i];
    (r.oldLines === 0 && (r.oldStart -= 1),
      r.newLines === 0 && (r.newStart -= 1),
      t.push(
        '@@ -' + r.oldStart + ',' + r.oldLines + ' +' + r.newStart + ',' + r.newLines + ' @@',
      ));
    for (const o of r.lines) t.push(o);
  }
  return (
    t.join(`
`) +
    `
`
  );
}
function Ft(e, n, t, i, r, o, a) {
  {
    const l = Ot(e, n, t, i, r, o);
    return l ? Pn(l, void 0) : void 0;
  }
}
function $t(e) {
  const n = e.endsWith(`
`),
    t = e
      .split(
        `
`,
      )
      .map(
        (i) =>
          i +
          `
`,
      );
  return (n ? t.pop() : t.push(t.pop().slice(0, -1)), t);
}
function dn({ line: e, spanStart: n, spanLength: t }) {
  return {
    start: { line: e, character: n },
    end: { line: e, character: n + t },
    properties: { 'data-diff-span': '' },
    alwaysWrap: !0,
  };
}
function Se({ item: e, arr: n, enableJoin: t, isNeutral: i = !1, isLastItem: r = !1 }) {
  const o = n[n.length - 1];
  if (o == null || r || !t) {
    n.push([i ? 0 : 1, e.value]);
    return;
  }
  const a = o[0] === 0;
  if (i === a || (i && e.value.length === 1 && !a)) {
    o[1] += e.value;
    return;
  }
  n.push([i ? 0 : 1, e.value]);
}
const jt = { forcePlainText: !1 };
function Wt(
  e,
  n,
  t,
  {
    forcePlainText: i,
    startingLine: r,
    totalLines: o,
    expandedHunks: a,
    collapsedContextThreshold: l = le,
  } = jt,
) {
  i ? ((r ??= 0), (o ??= 1 / 0)) : ((r = 0), (o = 1 / 0));
  const s = r > 0 || o < 1 / 0,
    f = typeof t.theme == 'string' ? n.getTheme(t.theme).type : void 0,
    d = Ct({ theme: t.theme, highlighter: n }),
    u = i && !s && (e.unifiedLineCount > 1e3 || e.splitLineCount > 1e3) ? 'none' : t.lineDiffType,
    c = { deletionLines: [], additionLines: [] },
    h = !i && !e.isPartial,
    g = i ? a : void 0,
    b = new Map();
  function x(p) {
    const S = h ? 0 : p,
      v = b.get(S) ?? Gt();
    return (b.set(S, v), v);
  }
  function C(p, S, v, k) {
    if (s) {
      let m = v.at(-1);
      ((m == null || m.targetIndex + m.count !== S) &&
        ((m = { targetIndex: S, originalOffset: k.length, count: 0 }), v.push(m)),
        m.count++);
    }
    k.push(p);
  }
  Ie({
    diff: e,
    diffStyle: 'both',
    startingLine: r,
    totalLines: o,
    expandedHunks: s ? g : !0,
    collapsedContextThreshold: l,
    callback: ({ hunkIndex: p, additionLine: S, deletionLine: v, type: k }) => {
      const m = x(p),
        y = S != null ? S.splitLineIndex : v.splitLineIndex;
      (k === 'change' &&
        S != null &&
        v != null &&
        Bt({
          additionLine: e.additionLines[S.lineIndex],
          deletionLine: e.deletionLines[v.lineIndex],
          deletionLineIndex: m.deletionContent.length,
          additionLineIndex: m.additionContent.length,
          deletionDecorations: m.deletionDecorations,
          additionDecorations: m.additionDecorations,
          lineDiffType: u,
        }),
        v != null &&
          (C(e.deletionLines[v.lineIndex], v.lineIndex, m.deletionSegments, m.deletionContent),
          m.deletionInfo.push({
            type: k === 'change' ? 'change-deletion' : k,
            lineNumber: v.lineNumber,
            altLineNumber: k === 'change' ? void 0 : (S.lineNumber ?? void 0),
            lineIndex: `${v.unifiedLineIndex},${y}`,
          })),
        S != null &&
          (C(e.additionLines[S.lineIndex], S.lineIndex, m.additionSegments, m.additionContent),
          m.additionInfo.push({
            type: k === 'change' ? 'change-addition' : k,
            lineNumber: S.lineNumber,
            altLineNumber: k === 'change' ? void 0 : (v.lineNumber ?? void 0),
            lineIndex: `${S.unifiedLineIndex},${y}`,
          })));
    },
  });
  for (const p of b.values()) {
    if (p.deletionContent.length === 0 && p.additionContent.length === 0) continue;
    const S = { name: e.prevName ?? e.name, contents: p.deletionContent.value },
      v = { name: e.name, contents: p.additionContent.value },
      { deletionLines: k, additionLines: m } = _t({
        deletionFile: S,
        deletionInfo: p.deletionInfo,
        deletionDecorations: p.deletionDecorations,
        additionFile: v,
        additionInfo: p.additionInfo,
        additionDecorations: p.additionDecorations,
        highlighter: n,
        options: t,
        languageOverride: i ? 'text' : e.lang,
      });
    if (h) {
      ((c.deletionLines = k), (c.additionLines = m));
      continue;
    }
    if (p.deletionSegments.length > 0)
      for (const y of p.deletionSegments)
        for (let w = 0; w < y.count; w++)
          c.deletionLines[y.targetIndex + w] = k[y.originalOffset + w];
    else c.deletionLines.push(...k);
    if (p.additionSegments.length > 0)
      for (const y of p.additionSegments)
        for (let w = 0; w < y.count; w++)
          c.additionLines[y.targetIndex + w] = m[y.originalOffset + w];
    else c.additionLines.push(...m);
  }
  return { code: c, themeStyles: d, baseThemeType: f };
}
function Bt({
  deletionLine: e,
  additionLine: n,
  deletionLineIndex: t,
  additionLineIndex: i,
  deletionDecorations: r,
  additionDecorations: o,
  lineDiffType: a,
}) {
  if (e == null || n == null || a === 'none') return;
  ((e = fe(e)), (n = fe(n)));
  const l = a === 'char' ? Mt(e, n) : Pt(e, n),
    s = [],
    f = [],
    d = a === 'word-alt',
    u = l.at(-1);
  for (const h of l) {
    const g = h === u;
    !h.added && !h.removed
      ? (Se({ item: h, arr: s, enableJoin: d, isNeutral: !0, isLastItem: g }),
        Se({ item: h, arr: f, enableJoin: d, isNeutral: !0, isLastItem: g }))
      : h.removed
        ? Se({ item: h, arr: s, enableJoin: d, isLastItem: g })
        : Se({ item: h, arr: f, enableJoin: d, isLastItem: g });
  }
  let c = 0;
  for (const h of s)
    (h[0] === 1 && r.push(dn({ line: t, spanStart: c, spanLength: h[1].length })),
      (c += h[1].length));
  c = 0;
  for (const h of f)
    (h[0] === 1 && o.push(dn({ line: i, spanStart: c, spanLength: h[1].length })),
      (c += h[1].length));
}
function Gt() {
  return {
    deletionContent: {
      push(e) {
        ((this.value += e), this.length++);
      },
      value: '',
      length: 0,
    },
    additionContent: {
      push(e) {
        ((this.value += e), this.length++);
      },
      value: '',
      length: 0,
    },
    deletionInfo: [],
    additionInfo: [],
    deletionDecorations: [],
    additionDecorations: [],
    deletionSegments: [],
    additionSegments: [],
  };
}
function _t({
  deletionFile: e,
  additionFile: n,
  deletionInfo: t,
  additionInfo: i,
  highlighter: r,
  deletionDecorations: o,
  additionDecorations: a,
  languageOverride: l,
  options: { theme: s = X, ...f },
}) {
  const d = l ?? de(e.name),
    u = l ?? de(n.name),
    { state: c, transformers: h } = St(),
    g =
      typeof s == 'string'
        ? {
            ...f,
            lang: 'text',
            theme: s,
            transformers: h,
            decorations: void 0,
            defaultColor: !1,
            cssVariablePrefix: G('token'),
          }
        : {
            ...f,
            lang: 'text',
            themes: s,
            transformers: h,
            decorations: void 0,
            defaultColor: !1,
            cssVariablePrefix: G('token'),
          };
  return {
    deletionLines:
      e.contents === ''
        ? []
        : ((g.lang = d),
          (c.lineInfo = t),
          (g.decorations = o),
          rn(r.codeToHast(fe(e.contents), g))),
    additionLines:
      n.contents === ''
        ? []
        : ((g.lang = u),
          (g.decorations = a),
          (c.lineInfo = i),
          rn(r.codeToHast(fe(n.contents), g))),
  };
}
const qt = H.createContext(void 0);
function Vt(e) {
  const n = H.useRef(e);
  return (
    H.useInsertionEffect(() => {
      n.current = e;
    }),
    H.useCallback((...t) => n.current(...t), [])
  );
}
function Kt(e, n) {
  return e.lineNumber === n.lineNumber && e.side === n.side;
}
function fn(e, n) {
  return (
    e?.start === n?.start && e?.end === n?.end && e?.side === n?.side && e?.endSide === n?.endSide
  );
}
function Xt() {
  return I({
    tagName: 'button',
    properties: { 'data-utility-button': '', 'type': 'button' },
    children: [Ae({ name: 'diffs-icon-plus', properties: { 'data-icon': '' } })],
  });
}
var Yt = class {
  hoveredLine;
  pre;
  gutterUtilityContainer;
  gutterUtilityButton;
  gutterUtilitySlot;
  interactiveLinesAttr = !1;
  interactiveLineNumbersAttr = !1;
  hasPointerListeners = !1;
  hasDocumentPointerListeners = !1;
  selectedRange = null;
  renderedSelectionRange;
  selectionAnchor;
  queuedSelectionRender;
  pointerSession = { mode: 'idle' };
  constructor(e, n) {
    ((this.mode = e), (this.options = n));
  }
  setOptions(e) {
    this.options = e;
  }
  cleanUp() {
    (this.pre?.removeEventListener('click', this.handlePointerClick),
      this.pre?.removeEventListener('pointerdown', this.handlePointerDown),
      this.pre?.removeEventListener('pointermove', this.handlePointerMove),
      this.pre?.removeEventListener('pointerleave', this.handlePointerLeave),
      this.pre?.removeAttribute('data-interactive-lines'),
      this.pre?.removeAttribute('data-interactive-line-numbers'),
      (this.pre = void 0),
      this.gutterUtilityContainer?.remove(),
      (this.gutterUtilityContainer = void 0),
      (this.gutterUtilityButton = void 0),
      (this.gutterUtilitySlot = void 0),
      this.clearHoveredLine(),
      this.detachDocumentPointerListeners(),
      this.clearPointerSession(),
      this.queuedSelectionRender != null &&
        (cancelAnimationFrame(this.queuedSelectionRender), (this.queuedSelectionRender = void 0)),
      (this.interactiveLinesAttr = !1),
      (this.interactiveLineNumbersAttr = !1),
      (this.hasPointerListeners = !1));
  }
  setup(e) {
    this.setSelectionDirty();
    const { usesCustomGutterUtility: n = !1, enableGutterUtility: t = !1 } = this.options;
    (this.pre !== e && (this.cleanUp(), (this.pre = e)),
      t
        ? this.ensureGutterUtilityNode(n)
        : this.gutterUtilityContainer != null &&
          (this.gutterUtilityContainer.remove(),
          (this.gutterUtilityContainer = void 0),
          (this.gutterUtilityButton = void 0),
          (this.gutterUtilitySlot = void 0),
          this.pointerSession.mode === 'gutterSelecting' &&
            (this.clearPointerSession(), this.detachDocumentPointerListeners())),
      this.syncPointerListeners(e),
      this.updateInteractiveLineAttributes(),
      this.renderSelection());
  }
  setSelectionDirty() {
    this.renderedSelectionRange = void 0;
  }
  isSelectionDirty() {
    return this.renderedSelectionRange === null;
  }
  setSelection(e) {
    const n = !(e === this.selectedRange || fn(e ?? void 0, this.selectedRange ?? void 0));
    (!this.isSelectionDirty() && !n) ||
      ((this.selectedRange = e), this.renderSelection(), n && this.notifySelectionCommitted());
  }
  getSelection() {
    return this.selectedRange;
  }
  getHoveredLine = () => {
    if (this.hoveredLine != null) {
      if (this.mode === 'diff' && this.hoveredLine.type === 'diff-line')
        return { lineNumber: this.hoveredLine.lineNumber, side: this.hoveredLine.annotationSide };
      if (this.mode === 'file' && this.hoveredLine.type === 'line')
        return { lineNumber: this.hoveredLine.lineNumber };
    }
  };
  handlePointerClick = (e) => {
    const {
      onHunkExpand: n,
      onLineClick: t,
      onLineNumberClick: i,
      onMergeConflictActionClick: r,
    } = this.options;
    (n == null && t == null && i == null && r == null) ||
      (this.options.onGutterUtilityClick != null && pn(e.composedPath())) ||
      (J(this.options.__debugPointerEvents, 'click', 'FileDiff.DEBUG.handlePointerClick:', e),
      this.handlePointerEvent({ eventType: 'click', event: e }));
  };
  handlePointerMove = (e) => {
    const {
      lineHoverHighlight: n = 'disabled',
      onLineEnter: t,
      onLineLeave: i,
      enableGutterUtility: r = !1,
    } = this.options;
    (n === 'disabled' && !r && t == null && i == null) ||
      (J(this.options.__debugPointerEvents, 'move', 'FileDiff.DEBUG.handlePointerMove:', e),
      this.handlePointerEvent({ eventType: 'move', event: e }));
  };
  handlePointerLeave = (e) => {
    const { __debugPointerEvents: n } = this.options;
    if ((J(n, 'move', 'FileDiff.DEBUG.handlePointerLeave: no event'), this.hoveredLine == null)) {
      J(n, 'move', 'FileDiff.DEBUG.handlePointerLeave: returned early, no .hoveredLine');
      return;
    }
    (this.gutterUtilityContainer?.remove(),
      this.options.onLineLeave?.({ ...this.hoveredLine, event: e }),
      this.clearHoveredLine());
  };
  handlePointerEvent({ eventType: e, event: n }) {
    const { __debugPointerEvents: t } = this.options,
      i = n.composedPath();
    J(t, e, 'FileDiff.DEBUG.handlePointerEvent:', { eventType: e, composedPath: i });
    const r = this.resolvePointerTarget(i);
    J(t, e, 'FileDiff.DEBUG.handlePointerEvent: resolvePointerTarget result:', r);
    const {
      onLineClick: o,
      onLineNumberClick: a,
      onLineEnter: l,
      onLineLeave: s,
      onHunkExpand: f,
      onMergeConflictActionClick: d,
    } = this.options;
    switch (e) {
      case 'move':
        if (pe(r) && this.hoveredLine?.lineElement === r.lineElement) break;
        (this.hoveredLine != null &&
          (this.gutterUtilityContainer?.remove(),
          s?.({ ...this.hoveredLine, event: n }),
          this.clearHoveredLine()),
          pe(r) &&
            (this.setHoveredLine(this.toEventBaseProps(r)),
            this.gutterUtilityContainer != null &&
              r.numberElement.appendChild(this.gutterUtilityContainer),
            l?.({ ...this.hoveredLine, event: n })));
        break;
      case 'click': {
        if (r == null) break;
        if (Zt(r) && d != null) {
          d(r);
          break;
        }
        if (Jt(r) && f != null) {
          f(
            r.hunkIndex,
            n.shiftKey ? 'both' : r.direction,
            n.shiftKey ? Number.POSITIVE_INFINITY : void 0,
          );
          break;
        }
        if (!pe(r)) break;
        const u = this.toEventBaseProps(r);
        a != null && r.numberColumn ? a({ ...u, event: n }) : o?.({ ...u, event: n });
        break;
      }
    }
  }
  syncPointerListeners(e) {
    const {
        __debugPointerEvents: n,
        lineHoverHighlight: t = 'disabled',
        onLineClick: i,
        onLineNumberClick: r,
        onLineEnter: o,
        onLineLeave: a,
        onHunkExpand: l,
        onMergeConflictActionClick: s,
        enableGutterUtility: f = !1,
        enableLineSelection: d = !1,
        onGutterUtilityClick: u,
      } = this.options,
      c = u != null,
      h =
        t !== 'disabled' ||
        i != null ||
        r != null ||
        l != null ||
        s != null ||
        o != null ||
        a != null ||
        f ||
        d ||
        c;
    h && !this.hasPointerListeners
      ? (e.addEventListener('click', this.handlePointerClick),
        e.addEventListener('pointerdown', this.handlePointerDown),
        e.addEventListener('pointermove', this.handlePointerMove),
        e.addEventListener('pointerleave', this.handlePointerLeave),
        (this.hasPointerListeners = !0),
        J(
          n,
          'click',
          'FileDiff.DEBUG.attachEventListeners: Attaching click events for:',
          (() => {
            const x = [];
            return (
              (n === 'both' || n === 'click') &&
                (i != null && x.push('onLineClick'),
                r != null && x.push('onLineNumberClick'),
                l != null && x.push('expandable hunk separators'),
                s != null && x.push('merge conflict actions')),
              x
            );
          })(),
        ),
        J(n, 'move', 'FileDiff.DEBUG.attachEventListeners: Attaching pointer move event'),
        J(n, 'move', 'FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event'))
      : !h &&
        this.hasPointerListeners &&
        (e.removeEventListener('click', this.handlePointerClick),
        e.removeEventListener('pointerdown', this.handlePointerDown),
        e.removeEventListener('pointermove', this.handlePointerMove),
        e.removeEventListener('pointerleave', this.handlePointerLeave),
        (this.hasPointerListeners = !1));
    const g =
        this.pointerSession.mode === 'selecting' ||
        this.pointerSession.mode === 'pendingSingleLineUnselect',
      b = this.pointerSession.mode === 'gutterSelecting';
    ((!d && g) || (!c && b)) &&
      (this.clearPointerSession(),
      this.detachDocumentPointerListeners(),
      (this.selectionAnchor = void 0),
      this.clearPendingSingleLineState());
  }
  updateInteractiveLineAttributes() {
    if (this.pre == null) return;
    const { onLineClick: e, onLineNumberClick: n, enableLineSelection: t = !1 } = this.options,
      i = e != null,
      r = n != null || t;
    (i && !this.interactiveLinesAttr
      ? (this.pre.setAttribute('data-interactive-lines', ''), (this.interactiveLinesAttr = !0))
      : !i &&
        this.interactiveLinesAttr &&
        (this.pre.removeAttribute('data-interactive-lines'), (this.interactiveLinesAttr = !1)),
      r && !this.interactiveLineNumbersAttr
        ? (this.pre.setAttribute('data-interactive-line-numbers', ''),
          (this.interactiveLineNumbersAttr = !0))
        : !r &&
          this.interactiveLineNumbersAttr &&
          (this.pre.removeAttribute('data-interactive-line-numbers'),
          (this.interactiveLineNumbersAttr = !1)));
  }
  handlePointerDown = (e) => {
    if (
      (e.pointerType === 'mouse' && e.button !== 0) ||
      this.pre == null ||
      this.pointerSession.mode !== 'idle'
    )
      return;
    const n = e.composedPath();
    pn(n) && this.options.onGutterUtilityClick != null
      ? this.startGutterSelectionFromPointerDown(e, n)
      : this.startLineSelectionFromPointerDown(e, n);
  };
  startLineSelectionFromPointerDown(e, n) {
    const { enableLineSelection: t = !1 } = this.options;
    if (!t) return;
    const i = this.getSelectionPointerInfo(n, !0);
    if (i == null) return;
    const { pre: r } = this;
    if (r == null) return;
    e.preventDefault();
    const { lineNumber: o, eventSide: a, lineIndex: l } = i;
    if (e.shiftKey && this.selectedRange != null) {
      const s = this.getIndexesFromSelection(
        this.selectedRange,
        r.getAttribute('data-diff-type') === 'split',
      );
      if (s == null) return;
      const f = s.start <= s.end ? l >= s.start : l <= s.end;
      ((this.selectionAnchor = {
        lineNumber: f ? this.selectedRange.start : this.selectedRange.end,
        side: f ? this.selectedRange.side : (this.selectedRange.endSide ?? this.selectedRange.side),
      }),
        this.updateSelection(o, a, !1),
        this.notifySelectionStart(this.selectedRange),
        (this.pointerSession = { mode: 'selecting', pointerId: e.pointerId }),
        this.attachDocumentPointerListeners());
      return;
    }
    if (this.selectedRange?.start === o && this.selectedRange?.end === o) {
      const s = { lineNumber: o, side: a };
      ((this.selectionAnchor = s),
        (this.pointerSession = {
          mode: 'pendingSingleLineUnselect',
          pointerId: e.pointerId,
          anchor: s,
          pending: s,
        }),
        this.attachDocumentPointerListeners());
      return;
    }
    ((this.selectedRange = null),
      (this.selectionAnchor = { lineNumber: o, side: a }),
      this.updateSelection(o, a, !1),
      this.notifySelectionStart(this.selectedRange),
      (this.pointerSession = { mode: 'selecting', pointerId: e.pointerId }),
      this.attachDocumentPointerListeners());
  }
  startGutterSelectionFromPointerDown(e, n) {
    const { enableLineSelection: t = !1, onGutterUtilityClick: i } = this.options;
    if (i == null) return;
    const r = this.getSelectionPointFromPath(n);
    r != null &&
      (e.preventDefault(),
      e.stopPropagation(),
      (this.pointerSession = {
        mode: 'gutterSelecting',
        pointerId: e.pointerId,
        anchor: r,
        current: r,
      }),
      t &&
        ((this.selectionAnchor = { lineNumber: r.lineNumber, side: r.side }),
        this.updateSelection(r.lineNumber, r.side, !1),
        this.notifySelectionStart(this.selectedRange)),
      this.attachDocumentPointerListeners());
  }
  handleDocumentPointerMove = (e) => {
    const { enableLineSelection: n = !1 } = this.options;
    switch (this.pointerSession.mode) {
      case 'idle':
        return;
      case 'gutterSelecting': {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        const t = this.getSelectionPointFromPath(e.composedPath());
        if (t == null) return;
        ((this.pointerSession.current = t), n === !0 && this.updateSelection(t.lineNumber, t.side));
        return;
      }
      case 'selecting': {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        const t = this.getSelectionPointerInfo(e.composedPath(), !1);
        if (t == null || this.selectionAnchor == null) return;
        this.updateSelection(t.lineNumber, t.eventSide);
        return;
      }
      case 'pendingSingleLineUnselect': {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        const t = this.getSelectionPointerInfo(e.composedPath(), !1);
        if (t == null || this.selectionAnchor == null) return;
        const i = { lineNumber: t.lineNumber, side: t.eventSide };
        if (Kt(this.pointerSession.pending, i)) return;
        (this.updateSelection(t.lineNumber, t.eventSide, !1),
          this.notifySelectionStart(this.selectedRange),
          this.notifySelectionChangeDelta(),
          (this.pointerSession = { mode: 'selecting', pointerId: e.pointerId }));
        return;
      }
    }
  };
  handleDocumentPointerUp = (e) => {
    const { enableLineSelection: n = !1, onGutterUtilityClick: t } = this.options;
    switch (this.pointerSession.mode) {
      case 'idle':
        return;
      case 'gutterSelecting': {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        const i = this.getSelectionPointFromPath(e.composedPath());
        (i != null &&
          ((this.pointerSession.current = i), n && this.updateSelection(i.lineNumber, i.side)),
          t?.(this.buildSelectedLineRange(this.pointerSession.anchor, this.pointerSession.current)),
          (this.selectionAnchor = void 0),
          n && (this.notifySelectionEnd(this.selectedRange), this.notifySelectionCommitted()),
          this.clearPointerSession(),
          this.detachDocumentPointerListeners());
        return;
      }
      case 'pendingSingleLineUnselect':
        if (e.pointerId !== this.pointerSession.pointerId) return;
        (this.updateSelection(null, void 0, !1),
          (this.selectionAnchor = void 0),
          this.clearPendingSingleLineState(),
          this.detachDocumentPointerListeners(),
          this.notifySelectionEnd(this.selectedRange),
          this.notifySelectionCommitted());
        return;
      case 'selecting':
        if (e.pointerId !== this.pointerSession.pointerId) return;
        ((this.selectionAnchor = void 0),
          this.detachDocumentPointerListeners(),
          this.clearPointerSession(),
          this.notifySelectionEnd(this.selectedRange),
          this.notifySelectionCommitted());
    }
  };
  handleDocumentPointerCancel = (e) => {
    switch (this.pointerSession.mode) {
      case 'idle':
        return;
      case 'gutterSelecting':
      case 'selecting':
      case 'pendingSingleLineUnselect':
        if ('pointerId' in this.pointerSession && e.pointerId !== this.pointerSession.pointerId)
          return;
        ((this.selectionAnchor = void 0),
          this.clearPendingSingleLineState(),
          this.clearPointerSession(),
          this.detachDocumentPointerListeners());
    }
  };
  clearHoveredLine() {
    this.hoveredLine != null &&
      (this.hoveredLine.lineElement.removeAttribute('data-hovered'),
      this.hoveredLine.numberElement.removeAttribute('data-hovered'),
      (this.hoveredLine = void 0));
  }
  setHoveredLine(e) {
    const { lineHoverHighlight: n = 'disabled' } = this.options;
    (this.hoveredLine != null && this.clearHoveredLine(),
      (this.hoveredLine = e),
      n !== 'disabled' &&
        ((n === 'both' || n === 'line') &&
          this.hoveredLine.lineElement.setAttribute('data-hovered', ''),
        (n === 'both' || n === 'number') &&
          this.hoveredLine.numberElement.setAttribute('data-hovered', '')));
  }
  ensureGutterUtilityNode(e) {
    if (
      (this.gutterUtilityContainer == null &&
        ((this.gutterUtilityContainer = document.createElement('div')),
        this.gutterUtilityContainer.setAttribute('data-gutter-utility-slot', '')),
      e)
    )
      (this.gutterUtilityButton != null &&
        (this.gutterUtilityButton.remove(), (this.gutterUtilityButton = void 0)),
        this.gutterUtilitySlot == null &&
          ((this.gutterUtilitySlot = document.createElement('slot')),
          (this.gutterUtilitySlot.name = 'gutter-utility-slot')),
        this.gutterUtilitySlot.parentNode !== this.gutterUtilityContainer &&
          this.gutterUtilityContainer.replaceChildren(this.gutterUtilitySlot));
    else {
      if (
        (this.gutterUtilitySlot?.remove(),
        (this.gutterUtilitySlot = void 0),
        this.gutterUtilityButton == null)
      ) {
        const n = document.createElement('div');
        n.innerHTML = me(Xt());
        const t = n.firstElementChild;
        if (!(t instanceof HTMLButtonElement))
          throw new Error(
            'InteractionManager.ensureGutterUtilityNode: Node element should be a button',
          );
        (t.remove(), (this.gutterUtilityButton = t));
      }
      this.gutterUtilityButton.parentNode !== this.gutterUtilityContainer &&
        this.gutterUtilityContainer.replaceChildren(this.gutterUtilityButton);
    }
  }
  attachDocumentPointerListeners() {
    this.hasDocumentPointerListeners ||
      (document.addEventListener('pointermove', this.handleDocumentPointerMove),
      document.addEventListener('pointerup', this.handleDocumentPointerUp),
      document.addEventListener('pointercancel', this.handleDocumentPointerCancel),
      (this.hasDocumentPointerListeners = !0));
  }
  detachDocumentPointerListeners() {
    this.hasDocumentPointerListeners &&
      (document.removeEventListener('pointermove', this.handleDocumentPointerMove),
      document.removeEventListener('pointerup', this.handleDocumentPointerUp),
      document.removeEventListener('pointercancel', this.handleDocumentPointerCancel),
      (this.hasDocumentPointerListeners = !1));
  }
  clearPointerSession() {
    this.pointerSession = { mode: 'idle' };
  }
  clearPendingSingleLineState() {
    this.pointerSession.mode === 'pendingSingleLineUnselect' &&
      (this.pointerSession = { mode: 'idle' });
  }
  getSelectionPointerInfo(e, n) {
    const t = this.resolvePointerTarget(e);
    if (pe(t) && !(n && !t.numberColumn) && t.splitLineIndex != null)
      return {
        lineIndex: t.splitLineIndex,
        lineNumber: t.lineNumber,
        eventSide: this.mode === 'diff' ? t.side : void 0,
      };
  }
  getSelectionPointFromPath(e) {
    const n = this.resolvePointerTarget(e);
    if (pe(n)) return { lineNumber: n.lineNumber, side: this.mode === 'diff' ? n.side : void 0 };
  }
  getLineIndex(e, n) {
    const { getLineIndex: t } = this.options;
    return t != null ? t(e, n) : [e - 1, e - 1];
  }
  updateSelection(e, n, t = !0) {
    const { selectedRange: i } = this;
    let r;
    if (e == null) r = null;
    else {
      const o = this.selectionAnchor?.side ?? n,
        a = this.selectionAnchor?.lineNumber ?? e;
      r = this.buildSelectionRange(a, e, o, n);
    }
    fn(i ?? void 0, r ?? void 0) ||
      ((this.selectedRange = r),
      t && this.notifySelectionChangeDelta(),
      (this.queuedSelectionRender ??= requestAnimationFrame(this.renderSelection)));
  }
  getIndexesFromSelection(e, n) {
    if (this.pre == null) return;
    const t = this.getLineIndex(e.start, e.side),
      i = this.getLineIndex(e.end, e.endSide ?? e.side);
    return t != null && i != null ? { start: n ? t[1] : t[0], end: n ? i[1] : i[0] } : void 0;
  }
  renderSelection = () => {
    if (
      (this.queuedSelectionRender != null &&
        (cancelAnimationFrame(this.queuedSelectionRender), (this.queuedSelectionRender = void 0)),
      this.pre == null || this.renderedSelectionRange === this.selectedRange)
    )
      return;
    const e = this.pre.querySelectorAll('[data-selected-line]');
    for (const l of e) l.removeAttribute('data-selected-line');
    if (((this.renderedSelectionRange = this.selectedRange), this.selectedRange == null)) return;
    const { children: n } = this.pre;
    if (n.length === 0) return;
    if (n.length > 2)
      throw (
        console.error(n),
        new Error(
          'InteractionManager.renderSelection: Somehow there are more than 2 code elements...',
        )
      );
    const t = this.pre.getAttribute('data-diff-type') === 'split',
      i = this.getIndexesFromSelection(this.selectedRange, t);
    if (i == null)
      throw (
        console.error({ rowRange: i, selectedRange: this.selectedRange }),
        new Error('InteractionManager.renderSelection: No valid rowRange')
      );
    const r = i.start === i.end,
      o = Math.min(i.start, i.end),
      a = Math.max(i.start, i.end);
    for (const l of n) {
      const [s, f] = l.children,
        d = f.children.length;
      if (d !== s.children.length)
        throw new Error(
          'InteractionManager.renderSelection: gutter and content children dont match, something is wrong',
        );
      for (let u = 0; u < d; u++) {
        const c = f.children[u],
          h = s.children[u];
        if (!(c instanceof HTMLElement) || !(h instanceof HTMLElement)) continue;
        const g = this.parseLineIndex(c, t);
        if ((g ?? 0) > a) break;
        if (g == null || g < o) continue;
        let b = r ? 'single' : g === o ? 'first' : g === a ? 'last' : '';
        (c.setAttribute('data-selected-line', b),
          h.setAttribute('data-selected-line', b),
          h.nextSibling instanceof HTMLElement &&
            c.nextSibling instanceof HTMLElement &&
            (c.nextSibling.hasAttribute('data-line-annotation') ||
              c.nextSibling.hasAttribute('data-merge-conflict-actions')) &&
            (r
              ? ((b = 'last'), c.setAttribute('data-selected-line', 'first'))
              : g === o
                ? (b = '')
                : g === a && c.setAttribute('data-selected-line', ''),
            c.nextSibling.setAttribute('data-selected-line', b),
            h.nextSibling.setAttribute('data-selected-line', b)));
      }
    }
  };
  notifySelectionCommitted() {
    this.options.onLineSelected?.(this.selectedRange ?? null);
  }
  notifySelectionChangeDelta() {
    this.options.onLineSelectionChange?.(this.selectedRange ?? null);
  }
  notifySelectionStart(e) {
    this.options.onLineSelectionStart?.(e);
  }
  notifySelectionEnd(e) {
    this.options.onLineSelectionEnd?.(e);
  }
  toEventBaseProps(e) {
    return this.mode === 'file'
      ? {
          type: 'line',
          lineElement: e.lineElement,
          lineNumber: e.lineNumber,
          numberColumn: e.numberColumn,
          numberElement: e.numberElement,
        }
      : {
          type: 'diff-line',
          annotationSide: e.side,
          lineType: e.lineType,
          lineElement: e.lineElement,
          numberElement: e.numberElement,
          lineNumber: e.lineNumber,
          numberColumn: e.numberColumn,
        };
  }
  buildSelectedLineRange(e, n) {
    return this.buildSelectionRange(e.lineNumber, n.lineNumber, e.side, n.side);
  }
  buildSelectionRange(e, n, t, i) {
    return {
      start: e,
      end: n,
      ...(t != null ? { side: t } : {}),
      ...(t !== i && i != null ? { endSide: i } : {}),
    };
  }
  resolvePointerTarget(e) {
    let n = !1,
      t,
      i,
      r,
      o,
      a,
      l,
      s,
      f;
    for (const c of e) {
      if (!(c instanceof HTMLElement)) continue;
      if (f == null && c.hasAttribute('data-merge-conflict-action')) {
        const x = c.getAttribute('data-merge-conflict-action') ?? void 0,
          C = c.getAttribute('data-merge-conflict-conflict-index') ?? void 0,
          p = C != null ? Number.parseInt(C, 10) : NaN;
        ei(x) &&
          Number.isFinite(p) &&
          (f = { kind: 'merge-conflict-action', resolution: x, conflictIndex: p });
      }
      const h = a == null ? (c.getAttribute('data-column-number') ?? void 0) : void 0;
      if (h != null) {
        ((a = c),
          (s = Number.parseInt(h, 10)),
          (n = !0),
          (t = hn(c)),
          (o = c.getAttribute('data-line-index') ?? void 0));
        continue;
      }
      const g = r == null ? (c.getAttribute('data-line') ?? void 0) : void 0;
      if (g != null) {
        ((r = c),
          (s = Number.parseInt(g, 10)),
          (t = hn(c)),
          (o = c.getAttribute('data-line-index') ?? void 0));
        continue;
      }
      if (l == null && c.hasAttribute('data-expand-button')) {
        l = {
          hunkIndex: void 0,
          direction: c.hasAttribute('data-expand-up')
            ? 'up'
            : c.hasAttribute('data-expand-down')
              ? 'down'
              : 'both',
        };
        continue;
      }
      const b = l != null ? (c.getAttribute('data-expand-index') ?? void 0) : void 0;
      if (l != null && b != null) {
        const x = Number.parseInt(b, 10);
        Number.isNaN(x) || (l.hunkIndex = x);
        continue;
      }
      if (i == null && c.hasAttribute('data-code')) {
        i = c;
        break;
      }
    }
    if (f != null) return f;
    if (l?.hunkIndex != null)
      return { type: 'line-info', hunkIndex: l.hunkIndex, direction: l.direction };
    if (
      ((r ??= o != null ? un(i, `[data-line][data-line-index="${o}"]`) : void 0),
      (a ??= o != null ? un(i, `[data-column-number][data-line-index="${o}"]`) : void 0),
      i == null || r == null || a == null || t == null || s == null || Number.isNaN(s))
    )
      return;
    const d = this.parseLineIndex(r, this.isSplitDiff());
    if (this.mode === 'file')
      return {
        kind: 'line',
        lineType: t,
        lineElement: r,
        lineNumber: s,
        numberColumn: n,
        numberElement: a,
        side: void 0,
        splitLineIndex: d,
      };
    const u = (() => {
      switch (t) {
        case 'change-deletion':
          return 'deletions';
        case 'change-addition':
          return 'additions';
        default:
          return i.hasAttribute('data-deletions') ? 'deletions' : 'additions';
      }
    })();
    return {
      kind: 'line',
      lineType: t,
      lineElement: r,
      lineNumber: s,
      numberColumn: n,
      numberElement: a,
      side: u,
      splitLineIndex: d,
    };
  }
  isSplitDiff() {
    return this.pre?.getAttribute('data-diff-type') === 'split';
  }
  parseLineIndex(e, n) {
    const t = (e.getAttribute('data-line-index') ?? '')
      .split(',')
      .map((i) => Number.parseInt(i, 10))
      .filter((i) => !Number.isNaN(i));
    if (n && t.length === 2) return t[1];
    if (!n) return t[0];
  }
};
function cn(
  {
    enableGutterUtility: e,
    enableHoverUtility: n,
    lineHoverHighlight: t,
    onGutterUtilityClick: i,
    onLineClick: r,
    onLineEnter: o,
    onLineLeave: a,
    onLineNumberClick: l,
    renderGutterUtility: s,
    renderHoverUtility: f,
    __debugPointerEvents: d,
    enableLineSelection: u,
    onLineSelected: c,
    onLineSelectionStart: h,
    onLineSelectionChange: g,
    onLineSelectionEnd: b,
  },
  x,
  C,
  p,
) {
  return {
    enableGutterUtility: Qt({
      enableGutterUtility: e,
      enableHoverUtility: n,
      renderGutterUtility: s,
      renderHoverUtility: f,
      onGutterUtilityClick: i,
    }),
    usesCustomGutterUtility: s != null || f != null,
    lineHoverHighlight: t,
    onGutterUtilityClick: i,
    onHunkExpand: x,
    onMergeConflictActionClick: p,
    onLineClick: r,
    onLineEnter: o,
    onLineLeave: a,
    onLineNumberClick: l,
    __debugPointerEvents: d,
    enableLineSelection: u,
    onLineSelected: c,
    onLineSelectionStart: h,
    onLineSelectionChange: g,
    onLineSelectionEnd: b,
    getLineIndex: C,
  };
}
function Qt({
  enableGutterUtility: e,
  enableHoverUtility: n,
  renderGutterUtility: t,
  renderHoverUtility: i,
  onGutterUtilityClick: r,
}) {
  if (e !== void 0 && n !== void 0)
    throw new Error(
      "Cannot use both 'enableGutterUtility' and deprecated 'enableHoverUtility'. Use only 'enableGutterUtility'.",
    );
  if (t != null && i != null)
    throw new Error(
      "Cannot use both 'renderGutterUtility' and deprecated 'renderHoverUtility'. Use only 'renderGutterUtility'.",
    );
  if (r != null && (t != null || i != null))
    throw new Error(
      "Cannot use both 'onGutterUtilityClick' and render utility callbacks ('renderGutterUtility'/'renderHoverUtility'). Use only one gutter utility API.",
    );
  return e ?? n ?? !1;
}
function pe(e) {
  return e != null && 'kind' in e && e.kind === 'line';
}
function Jt(e) {
  return 'type' in e && e.type === 'line-info';
}
function Zt(e) {
  return 'kind' in e && e.kind === 'merge-conflict-action';
}
function ei(e) {
  return e === 'current' || e === 'incoming' || e === 'both';
}
function un(e, n) {
  const t = e?.querySelector(n);
  return t instanceof HTMLElement ? t : void 0;
}
function hn(e) {
  const n = e.getAttribute('data-line-type');
  if (n != null)
    switch (n) {
      case 'change-deletion':
      case 'change-addition':
      case 'context':
      case 'context-expanded':
        return n;
      default:
        return;
    }
}
function pn(e) {
  for (const n of e)
    if (n instanceof HTMLElement && n.hasAttribute('data-utility-button')) return !0;
  return !1;
}
function J(e = 'none', n, ...t) {
  switch (e) {
    case 'none':
      return;
    case 'both':
      break;
    case 'click':
      if (n !== 'click') return;
      break;
    case 'move':
      if (n !== 'move') return;
      break;
  }
  console.log(...t);
}
var ni = class {
  observedNodes = new Map();
  queuedUpdates = new Map();
  cleanUp() {
    (this.resizeObserver?.disconnect(), this.observedNodes.clear(), this.queuedUpdates.clear());
  }
  resizeObserver;
  setup(e, n) {
    this.resizeObserver ??= new ResizeObserver(this.handleResizeObserver);
    const t = e.querySelectorAll('code'),
      i = new Map(this.observedNodes);
    this.observedNodes.clear();
    for (const r of t) {
      let o = i.get(r);
      if (o != null && o.type !== 'code')
        throw new Error(
          'ResizeManager.setup: somehow a code node is being used for an annotation, should be impossible',
        );
      let a = r.firstElementChild;
      (a instanceof HTMLElement || (a = null),
        o != null
          ? (this.observedNodes.set(r, o),
            i.delete(r),
            o.numberElement !== a
              ? (o.numberElement != null && this.resizeObserver.unobserve(o.numberElement),
                a != null &&
                  (this.resizeObserver.observe(a), i.delete(a), this.observedNodes.set(a, o)),
                (o.numberElement = a))
              : o.numberElement != null &&
                (i.delete(o.numberElement), this.observedNodes.set(o.numberElement, o)))
          : ((o = {
              type: 'code',
              codeElement: r,
              numberElement: a,
              codeWidth: 'auto',
              numberWidth: 0,
            }),
            this.observedNodes.set(r, o),
            this.resizeObserver.observe(r),
            a != null && (this.observedNodes.set(a, o), this.resizeObserver.observe(a))));
    }
    if (t.length > 1 && !n) {
      const r = e.querySelectorAll('[data-line-annotation*=","]'),
        o = new Map();
      for (const a of r) {
        if (!(a instanceof HTMLElement)) continue;
        const { lineAnnotation: l = '' } = a.dataset;
        if (!/^\d+,\d+$/.test(l)) {
          console.error('DiffFileRenderer.setupResizeObserver: Invalid element or annotation', {
            lineAnnotation: l,
            element: a,
          });
          continue;
        }
        let s = o.get(l);
        (s == null && ((s = []), o.set(l, s)), s.push(a));
      }
      for (const [a, l] of o) {
        if (l.length !== 2) {
          console.error('DiffFileRenderer.setupResizeObserver: Bad Pair', a, l);
          continue;
        }
        const [s, f] = l,
          d = s.firstElementChild,
          u = f.firstElementChild;
        if (
          !(s instanceof HTMLElement) ||
          !(f instanceof HTMLElement) ||
          !(d instanceof HTMLElement) ||
          !(u instanceof HTMLElement)
        )
          continue;
        let c = i.get(d);
        if (c != null) {
          (this.observedNodes.set(d, c), this.observedNodes.set(u, c), i.delete(d), i.delete(u));
          continue;
        }
        c = {
          type: 'annotations',
          column1: { container: s, child: d, childHeight: d.getBoundingClientRect().height },
          column2: { container: f, child: u, childHeight: u.getBoundingClientRect().height },
          currentHeight: 'auto',
        };
        const h = Math.max(c.column1.childHeight, c.column2.childHeight);
        (this.applyNewHeight(c, h),
          this.observedNodes.set(d, c),
          this.observedNodes.set(u, c),
          this.resizeObserver.observe(d),
          this.resizeObserver.observe(u));
      }
    }
    for (const r of i.keys())
      (r.isConnected &&
        (r.style.removeProperty('--diffs-column-content-width'),
        r.style.removeProperty('--diffs-column-number-width'),
        r.style.removeProperty('--diffs-column-width'),
        r.parentElement instanceof HTMLElement &&
          r.parentElement.style.removeProperty('--diffs-annotation-min-height')),
        this.resizeObserver.unobserve(r));
    i.clear();
  }
  handleResizeObserver = (e) => {
    for (const n of e) {
      const { target: t, borderBoxSize: i } = n;
      if (!(t instanceof HTMLElement)) {
        console.error('FileDiff.handleResizeObserver: Invalid element for ResizeObserver', n);
        continue;
      }
      const r = this.observedNodes.get(t);
      if (r == null) {
        console.error('FileDiff.handleResizeObserver: Not a valid observed node', n);
        continue;
      }
      const o = i[0];
      if (r.type === 'annotations') {
        const a = (() => {
          if (t === r.column1.child) return r.column1;
          if (t === r.column2.child) return r.column2;
        })();
        if (a == null) {
          console.error("FileDiff.handleResizeObserver: Couldn't find a column for", {
            item: r,
            target: t,
          });
          continue;
        }
        a.childHeight = o.blockSize;
        const l = Math.max(r.column1.childHeight, r.column2.childHeight);
        this.applyNewHeight(r, l);
      } else if (r.type === 'code') {
        const a = [t, o.inlineSize],
          l = this.queuedUpdates.get(r) ?? [];
        (l.push(a), this.queuedUpdates.set(r, l));
      }
    }
    this.handleColumnChange();
  };
  handleColumnChange = () => {
    for (const [e, n] of this.queuedUpdates)
      for (const [t, i] of n)
        if (t === e.codeElement) {
          const r = Math.max(Math.floor(i), 0);
          if (r !== e.codeWidth) {
            const o = Math.max(r - e.numberWidth, 0);
            ((e.codeWidth = r === 0 ? 'auto' : r),
              e.codeElement.style.setProperty(
                '--diffs-column-content-width',
                `${o > 0 ? `${o}px` : 'auto'}`,
              ),
              e.codeElement.style.setProperty(
                '--diffs-column-width',
                `${typeof e.codeWidth == 'number' ? `${e.codeWidth}px` : 'auto'}`,
              ));
          }
          e.numberElement != null &&
            typeof e.codeWidth == 'number' &&
            e.numberWidth === 0 &&
            n.push([e.numberElement, e.numberElement.getBoundingClientRect().width]);
        } else if (t === e.numberElement) {
          const r = Math.max(Math.ceil(i), 0);
          if (
            r !== e.numberWidth &&
            ((e.numberWidth = r),
            e.codeElement.style.setProperty(
              '--diffs-column-number-width',
              `${e.numberWidth === 0 ? 'auto' : `${e.numberWidth}px`}`,
            ),
            e.codeWidth !== 'auto')
          ) {
            const o = Math.max(e.codeWidth - e.numberWidth, 0);
            e.codeElement.style.setProperty(
              '--diffs-column-content-width',
              `${o === 0 ? 'auto' : `${o}px`}`,
            );
          }
        }
    this.queuedUpdates.clear();
  };
  applyNewHeight(e, n) {
    n !== e.currentHeight &&
      ((e.currentHeight = Math.max(n, 0)),
      e.column1.container.style.setProperty(
        '--diffs-annotation-min-height',
        `${e.currentHeight}px`,
      ),
      e.column2.container.style.setProperty(
        '--diffs-annotation-min-height',
        `${e.currentHeight}px`,
      ));
  }
};
function Dn(e, n) {
  return e == null || n == null
    ? e === n
    : e.startingLine === n.startingLine &&
        e.totalLines === n.totalLines &&
        e.bufferBefore === n.bufferBefore &&
        e.bufferAfter === n.bufferAfter;
}
function mn(e) {
  for (const n of Array.isArray(e) ? e : [e]) if (!Ge.has(n)) return !1;
  return !0;
}
function Ne(e) {
  for (const n of Rn(e)) if (!Be.has(n)) return !1;
  return !0;
}
function ti(e) {
  return I({
    tagName: 'div',
    children: [
      I({
        tagName: 'div',
        children: e.annotations?.map((n) => I({ tagName: 'slot', properties: { name: n } })),
        properties: { 'data-annotation-content': '' },
      }),
    ],
    properties: { 'data-line-annotation': `${e.hunkIndex},${e.lineIndex}` },
  });
}
function ii(e, n) {
  return I({
    tagName: 'div',
    children: e,
    properties: { 'data-content': '', 'style': `grid-row: span ${n}` },
  });
}
function ri(e) {
  switch (e) {
    case 'file':
      return 'diffs-icon-file-code';
    case 'change':
      return 'diffs-icon-symbol-modified';
    case 'new':
      return 'diffs-icon-symbol-added';
    case 'deleted':
      return 'diffs-icon-symbol-deleted';
    case 'rename-pure':
    case 'rename-changed':
      return 'diffs-icon-symbol-moved';
  }
}
function oi({ fileOrDiff: e, mode: n }) {
  const t = 'type' in e ? e : void 0,
    i = { 'data-diffs-header': n, 'data-change-type': t?.type };
  return I({
    tagName: 'div',
    children: [
      n === 'custom'
        ? I({ tagName: 'slot', properties: { name: Ke } })
        : si({
            name: e.name,
            prevName: 'prevName' in e ? e.prevName : void 0,
            iconType: t?.type ?? 'file',
          }),
      ...(n === 'custom' ? [] : [ai(t)]),
    ],
    properties: i,
  });
}
function si({ name: e, prevName: n, iconType: t }) {
  const i = [
    I({ tagName: 'slot', properties: { name: qe } }),
    Ae({ name: ri(t), properties: { 'data-change-icon': t } }),
  ];
  return (
    n != null &&
      (i.push(
        I({
          tagName: 'div',
          children: [I({ tagName: 'bdi', children: [Z(n)] })],
          properties: { 'data-prev-name': '' },
        }),
      ),
      i.push(Ae({ name: 'diffs-icon-arrow-right-short', properties: { 'data-rename-icon': '' } }))),
    i.push(
      I({
        tagName: 'div',
        children: [I({ tagName: 'bdi', children: [Z(e)] })],
        properties: { 'data-title': '' },
      }),
    ),
    I({ tagName: 'div', children: i, properties: { 'data-header-content': '' } })
  );
}
function ai(e) {
  const n = [];
  if (e != null) {
    let t = 0,
      i = 0;
    for (const r of e.hunks) ((t += r.additionLines), (i += r.deletionLines));
    ((i > 0 || t === 0) &&
      n.push(
        I({ tagName: 'span', children: [Z(`-${i}`)], properties: { 'data-deletions-count': '' } }),
      ),
      (t > 0 || i === 0) &&
        n.push(
          I({
            tagName: 'span',
            children: [Z(`+${t}`)],
            properties: { 'data-additions-count': '' },
          }),
        ));
  }
  return (
    n.push(I({ tagName: 'slot', properties: { name: Ve } })),
    I({ tagName: 'div', children: n, properties: { 'data-metadata': '' } })
  );
}
function li(e) {
  return I({ tagName: 'pre', properties: di(e) });
}
function di({
  diffIndicators: e,
  disableBackground: n,
  disableLineNumbers: t,
  overflow: i,
  split: r,
  totalLines: o,
  type: a,
  customProperties: l,
}) {
  return {
    ...l,
    'data-diff': a === 'diff' ? '' : void 0,
    'data-file': a === 'file' ? '' : void 0,
    'data-diff-type': a === 'diff' ? (r ? 'split' : 'single') : void 0,
    'data-overflow': i,
    'data-disable-line-numbers': t ? '' : void 0,
    'data-background': n ? void 0 : '',
    'data-indicators': e === 'bars' || e === 'classic' ? e : void 0,
    'tabIndex': 0,
    'style': `--diffs-min-number-column-width-default:${`${o}`.length}ch;`,
  };
}
function fi(e, { theme: n, preferredHighlighter: t = 'shiki-js' }) {
  return { langs: [e ?? 'text'], themes: Rn(n), preferredHighlighter: t };
}
const ci = `<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`;
function ui(e, n) {
  return e == null || n == null
    ? e === n
    : hi(e.customProperties, n.customProperties) &&
        e.type === n.type &&
        e.diffIndicators === n.diffIndicators &&
        e.disableBackground === n.disableBackground &&
        e.disableLineNumbers === n.disableLineNumbers &&
        e.overflow === n.overflow &&
        e.split === n.split &&
        e.totalLines === n.totalLines;
}
const gn = {};
function hi(e = gn, n = gn) {
  if (e === n) return !0;
  const t = Object.keys(e),
    i = Object.keys(n);
  if (t.length !== i.length) return !1;
  for (const r of t) if (e[r] !== n[r]) return !1;
  return !0;
}
function pi(e) {
  const n = document.createElement('div');
  return ((n.dataset.annotationSlot = ''), (n.slot = e), (n.style.whiteSpace = 'normal'), n);
}
function mi() {
  const e = document.createElement('div');
  return (
    (e.slot = 'gutter-utility-slot'),
    (e.style.position = 'absolute'),
    (e.style.top = '0'),
    (e.style.bottom = '0'),
    (e.style.textAlign = 'center'),
    (e.style.whiteSpace = 'normal'),
    e
  );
}
function gi() {
  const e = document.createElement('style');
  return (e.setAttribute(An, ''), e);
}
var bi = `@layer base, theme, rendered, unsafe;

@layer base {
  :host {
    --diffs-font-fallback:
      'SF Mono', Monaco, Consolas, 'Ubuntu Mono', 'Liberation Mono',
      'Courier New', monospace;
    --diffs-header-font-fallback:
      system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
      'Noto Sans', 'Liberation Sans', Arial, sans-serif;

    --diffs-mixer: light-dark(black, white);
    --diffs-gap-fallback: 8px;

    --diffs-added-light: #0dbe4e;
    --diffs-added-dark: #5ecc71;
    --diffs-modified-light: #009fff;
    --diffs-modified-dark: #69b1ff;
    --diffs-deleted-light: #ff2e3f;
    --diffs-deleted-dark: #ff6762;

    /*
    // Available CSS Color Overrides
    --diffs-bg-buffer-override
    --diffs-bg-hover-override
    --diffs-bg-context-override
    --diffs-bg-separator-override

    --diffs-fg-number-override
    --diffs-fg-number-addition-override
    --diffs-fg-number-deletion-override
    --diffs-fg-conflict-marker-override

    --diffs-deletion-color-override
    --diffs-addition-color-override
    --diffs-modified-color-override

    --diffs-bg-deletion-override
    --diffs-bg-deletion-number-override
    --diffs-bg-deletion-hover-override
    --diffs-bg-deletion-emphasis-override

    --diffs-bg-addition-override
    --diffs-bg-addition-number-override
    --diffs-bg-addition-hover-override
    --diffs-bg-addition-emphasis-override

    // Line Selection Color Overrides (for enableLineSelection)
    --diffs-selection-color-override
    --diffs-bg-selection-override
    --diffs-bg-selection-number-override
    --diffs-bg-selection-background-override
    --diffs-bg-selection-number-background-override

    // Available CSS Layout Overrides
    --diffs-gap-inline
    --diffs-gap-block
    --diffs-gap-style
    --diffs-tab-size
  */

    color-scheme: light dark;
    display: block;
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    font-feature-settings: var(--diffs-font-features);

    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
     * and vscode use an older build of chrome that appears to have a bug with
     * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg: light-dark(
      var(--diffs-light-bg, #fff),
      var(--diffs-dark-bg, #000)
    );
    --diffs-bg-buffer: var(
      --diffs-bg-buffer-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer))
      )
    );
    --diffs-bg-hover: var(
      --diffs-bg-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 97%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-mixer))
      )
    );

    --diffs-bg-context: var(
      --diffs-bg-context-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 98.5%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92.5%, var(--diffs-mixer))
      )
    );
    --diffs-bg-context-number: var(
      --diffs-bg-context-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-context) 80%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-context) 60%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-marker: var(
      --diffs-bg-conflict-marker-override,
      light-dark(
        color-mix(
          in lab,
          var(--diffs-bg-context) 88%,
          var(--diffs-modified-base)
        ),
        color-mix(
          in lab,
          var(--diffs-bg-context) 80%,
          var(--diffs-modified-base)
        )
      )
    );
    --diffs-bg-conflict-current: var(
      --diffs-bg-conflict-current-override,
      light-dark(#e5f8ea, #274432)
    );
    --diffs-bg-conflict-base: var(
      --diffs-bg-conflict-base-override,
      light-dark(
        color-mix(
          in lab,
          var(--diffs-bg-context) 90%,
          var(--diffs-modified-base)
        ),
        color-mix(
          in lab,
          var(--diffs-bg-context) 82%,
          var(--diffs-modified-base)
        )
      )
    );
    --diffs-bg-conflict-incoming: var(
      --diffs-bg-conflict-incoming-override,
      light-dark(#e6f1ff, #253b5a)
    );
    --diffs-bg-conflict-marker-number: var(
      --diffs-bg-conflict-marker-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-conflict-marker) 72%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-conflict-marker) 54%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-current-number: var(
      --diffs-bg-conflict-current-number-override,
      light-dark(#d7f1de, #30533d)
    );
    --diffs-bg-conflict-base-number: var(
      --diffs-bg-conflict-base-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-conflict-base) 72%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-conflict-base) 54%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-incoming-number: var(
      --diffs-bg-conflict-incoming-number-override,
      light-dark(#d8e8ff, #2f4b73)
    );
    --conflict-bg-current: var(
      --conflict-bg-current-override,
      var(--diffs-bg-addition)
    );
    --conflict-bg-incoming: var(
      --conflict-bg-incoming-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-number: var(
      --conflict-bg-current-number-override,
      var(--diffs-bg-addition-number)
    );
    --conflict-bg-incoming-number: var(
      --conflict-bg-incoming-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-header: var(
      --conflict-bg-current-header-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 78%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 68%, var(--diffs-addition-base))
      )
    );
    --conflict-bg-incoming-header: var(
      --conflict-bg-incoming-header-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 78%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 68%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-header-number: var(
      --conflict-bg-current-header-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 72%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 62%, var(--diffs-addition-base))
      )
    );
    --conflict-bg-incoming-header-number: var(
      --conflict-bg-incoming-header-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 72%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 62%, var(--diffs-modified-base))
      )
    );

    --diffs-bg-separator: var(
      --diffs-bg-separator-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 96%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-mixer))
      )
    );

    --diffs-fg: light-dark(var(--diffs-light, #000), var(--diffs-dark, #fff));
    --diffs-fg-number: var(
      --diffs-fg-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg))
      )
    );
    --diffs-fg-conflict-marker: var(
      --diffs-fg-conflict-marker-override,
      var(--diffs-fg-number)
    );

    --diffs-deletion-base: var(
      --diffs-deletion-color-override,
      light-dark(
        var(
          --diffs-light-deletion-color,
          var(--diffs-deletion-color, var(--diffs-deleted-light))
        ),
        var(
          --diffs-dark-deletion-color,
          var(--diffs-deletion-color, var(--diffs-deleted-dark))
        )
      )
    );
    --diffs-addition-base: var(
      --diffs-addition-color-override,
      light-dark(
        var(
          --diffs-light-addition-color,
          var(--diffs-addition-color, var(--diffs-added-light))
        ),
        var(
          --diffs-dark-addition-color,
          var(--diffs-addition-color, var(--diffs-added-dark))
        )
      )
    );
    --diffs-modified-base: var(
      --diffs-modified-color-override,
      light-dark(
        var(
          --diffs-light-modified-color,
          var(--diffs-modified-color, var(--diffs-modified-light))
        ),
        var(
          --diffs-dark-modified-color,
          var(--diffs-modified-color, var(--diffs-modified-dark))
        )
      )
    );

    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg-deletion: var(
      --diffs-bg-deletion-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-number: var(
      --diffs-bg-deletion-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-hover: var(
      --diffs-bg-deletion-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-emphasis: var(
      --diffs-bg-deletion-emphasis-override,
      light-dark(
        rgb(from var(--diffs-deletion-base) r g b / 0.15),
        rgb(from var(--diffs-deletion-base) r g b / 0.2)
      )
    );

    --diffs-bg-addition: var(
      --diffs-bg-addition-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-number: var(
      --diffs-bg-addition-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-hover: var(
      --diffs-bg-addition-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 70%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-emphasis: var(
      --diffs-bg-addition-emphasis-override,
      light-dark(
        rgb(from var(--diffs-addition-base) r g b / 0.15),
        rgb(from var(--diffs-addition-base) r g b / 0.2)
      )
    );

    --diffs-selection-base: var(--diffs-modified-base);
    --diffs-selection-number-fg: light-dark(
      color-mix(in lab, var(--diffs-selection-base) 65%, var(--diffs-mixer)),
      color-mix(in lab, var(--diffs-selection-base) 75%, var(--diffs-mixer))
    );
    --diffs-bg-selection: var(
      --diffs-bg-selection-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 82%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base))
      )
    );
    --diffs-bg-selection-number: var(
      --diffs-bg-selection-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 60%, var(--diffs-selection-base))
      )
    );

    background-color: var(--diffs-bg);
    color: var(--diffs-fg);
  }

  /* NOTE(mdo): Some semantic HTML elements (e.g. \`pre\`, \`code\`) have default
 * user-agent styles. These must be overridden to use our custom styles. */
  pre,
  code,
  [data-error-wrapper] {
    isolation: isolate;
    margin: 0;
    padding: 0;
    display: block;
    outline: none;
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
  }

  pre,
  code {
    background-color: var(--diffs-bg);
  }

  code {
    contain: content;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  [data-icon-sprite] {
    display: none;
  }

  /* NOTE(mdo): Headers and separators are within pre/code, so we need to reset
   * their font-family explicitly. */
  [data-diffs-header],
  [data-separator] {
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
  }

  [data-file-info] {
    padding: 10px;
    font-weight: 700;
    color: var(--fg);
    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    background-color: color-mix(in lab, var(--bg) 98%, var(--fg));
    border-block: 1px solid color-mix(in lab, var(--bg) 95%, var(--fg));
  }

  [data-diff],
  [data-file] {
    /* This feels a bit crazy to me... so I need to think about it a bit more... */
    --diffs-grid-number-column-width: minmax(min-content, max-content);
    --diffs-code-grid: var(--diffs-grid-number-column-width) 1fr;

    &[data-dehydrated] {
      --diffs-code-grid: var(--diffs-grid-number-column-width) minmax(0, 1fr);
    }

    &:hover [data-code]::-webkit-scrollbar-thumb {
      background-color: var(--diffs-bg-context);
    }
  }

  [data-line] span {
    color: light-dark(
      var(--diffs-token-light, var(--diffs-light)),
      var(--diffs-token-dark, var(--diffs-dark))
    );
    background-color: light-dark(
      var(--diffs-token-light-bg, inherit),
      var(--diffs-token-dark-bg, inherit)
    );
    font-weight: light-dark(
      var(--diffs-token-light-font-weight, inherit),
      var(--diffs-token-dark-font-weight, inherit)
    );
    font-style: light-dark(
      var(--diffs-token-light-font-style, inherit),
      var(--diffs-token-dark-font-style, inherit)
    );
    -webkit-text-decoration: light-dark(
      var(--diffs-token-light-text-decoration, inherit),
      var(--diffs-token-dark-text-decoration, inherit)
    );
            text-decoration: light-dark(
      var(--diffs-token-light-text-decoration, inherit),
      var(--diffs-token-dark-text-decoration, inherit)
    );
  }

  [data-line],
  [data-gutter-buffer],
  [data-line-annotation],
  [data-no-newline] {
    color: var(--diffs-fg);
    background-color: var(--diffs-line-bg, var(--diffs-bg));
  }

  [data-no-newline] {
    -webkit-user-select: none;
            user-select: none;

    span {
      opacity: 0.6;
    }
  }

  [data-diff-type='split'][data-overflow='scroll'] {
    display: grid;
    grid-template-columns: 1fr 1fr;

    [data-additions] {
      border-left: 1px solid var(--diffs-bg);
    }

    [data-deletions] {
      border-right: 1px solid var(--diffs-bg);
    }
  }

  [data-code] {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: var(--diffs-code-grid);
    overflow: scroll clip;
    overscroll-behavior-x: none;
    tab-size: var(--diffs-tab-size, 2);
    align-self: flex-start;
    padding-top: var(--diffs-gap-block, var(--diffs-gap-fallback));
    padding-bottom: max(
      0px,
      calc(var(--diffs-gap-block, var(--diffs-gap-fallback)) - 6px)
    );
  }

  [data-container-size] {
    container-type: inline-size;
  }

  [data-code]::-webkit-scrollbar {
    width: 0;
    height: 6px;
  }

  [data-code]::-webkit-scrollbar-track {
    background: transparent;
  }

  [data-code]::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 1px solid transparent;
    background-clip: content-box;
    border-radius: 3px;
  }

  [data-code]::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  /*
   * If we apply these rules globally it will mean that webkit will opt into the
   * standards compliant version of custom css scrollbars, which we do not want
   * because the custom stuff will look better
  */
  @supports (-moz-appearance: none) {
    [data-code] {
      scrollbar-width: thin;
      scrollbar-color: var(--diffs-bg-context) transparent;
      padding-bottom: var(--diffs-gap-block, var(--diffs-gap-fallback));
    }
  }

  [data-diffs-header] ~ [data-diff],
  [data-diffs-header] ~ [data-file] {
    [data-code],
    &[data-overflow='wrap'] {
      padding-top: 0;
    }
  }

  [data-gutter] {
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    grid-column: 1;
    z-index: 3;
    position: relative;
    background-color: var(--diffs-bg);

    [data-gutter-buffer],
    [data-column-number] {
      border-right: var(--diffs-gap-style, 2px solid var(--diffs-bg));
    }
  }

  [data-content] {
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    grid-column: 2;
    min-width: 0;
  }

  [data-diff-type='split'][data-overflow='wrap'] {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, var(--diffs-code-grid));
    padding-block: var(--diffs-gap-block, var(--diffs-gap-fallback));

    [data-deletions] {
      display: contents;

      [data-gutter] {
        grid-column: 1;
      }

      [data-content] {
        grid-column: 2;
        border-right: 1px solid var(--diffs-bg);
      }
    }

    [data-additions] {
      display: contents;

      [data-gutter] {
        grid-column: 3;
        border-left: 1px solid var(--diffs-bg);
      }

      [data-content] {
        grid-column: 4;
      }
    }
  }

  [data-overflow='scroll'] [data-gutter] {
    position: sticky;
    left: 0;
  }

  [data-line-annotation][data-selected-line] {
    background-color: unset;

    &::before {
      content: '';
      /* FIXME(amadeus): This needs to be audited ... */
      position: sticky;
      top: 0;
      left: 0;
      display: block;
      border-right: var(--diffs-gap-style, 1px solid var(--diffs-bg));
      background-color: var(--diffs-bg-selection-number);
    }

    [data-annotation-content] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-interactive-lines] [data-line] {
    cursor: pointer;
  }

  [data-content-buffer],
  [data-gutter-buffer] {
    position: relative;
    -webkit-user-select: none;
            user-select: none;
    min-height: 1lh;
  }

  [data-gutter-buffer='annotation'] {
    min-height: 0;
  }

  [data-gutter-buffer='buffer'] {
    background-size: 8px 8px;
    background-position: 0 0;
    background-origin: border-box;
    background-color: var(--diffs-bg);
    /* This is incredibley expensive... */
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent calc(3px * 1.414),
      rgb(from var(--diffs-bg-buffer) r g b / 0.8) calc(3px * 1.414),
      rgb(from var(--diffs-bg-buffer) r g b / 0.8) calc(4px * 1.414)
    );
  }

  [data-content-buffer] {
    grid-column: 1;
    /* We multiply by 1.414 (√2) to better approximate the diagonal repeat distance */
    background-size: 8px 8px;
    background-position: 5px 0;
    background-origin: border-box;
    background-color: var(--diffs-bg);
    /* This is incredibley expensive... */
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(4px * 1.414)
    );
  }

  [data-separator] {
    box-sizing: content-box;
    background-color: var(--diffs-bg);
  }

  [data-separator='simple'] {
    min-height: 4px;
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'],
  [data-separator='metadata'],
  [data-separator='simple'] {
    background-color: var(--diffs-bg-separator);
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'],
  [data-separator='metadata'] {
    height: 32px;
    position: relative;
  }

  [data-separator-wrapper] {
    -webkit-user-select: none;
            user-select: none;
    fill: currentColor;
    position: absolute;
    inset-inline: 0;
    display: flex;
    align-items: center;
    background-color: var(--diffs-bg);
    height: 100%;
  }

  [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-separator='metadata'] [data-separator-wrapper] {
    inset-inline: 100% auto;
    padding-inline: 1ch;
    height: 100%;
    background-color: var(--diffs-bg-separator);
    color: var(--diffs-fg-number);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: min-content;
  }

  [data-separator='line-info'] {
    margin-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
  }

  [data-separator='line-info-basic'],
  [data-separator='metadata'] {
    margin-block: 0;
  }

  [data-separator='line-info'][data-separator-first] {
    margin-top: 0;
  }

  [data-separator='line-info'][data-separator-last] {
    margin-bottom: 0;
  }

  [data-expand-index] [data-separator-wrapper] {
    display: grid;
    grid-template-columns: 32px auto;
  }

  [data-expand-index] [data-separator-wrapper][data-separator-multi-button] {
    grid-template-columns: 32px 32px auto;
  }

  [data-expand-button],
  [data-separator-content] {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    background-color: var(--diffs-bg-separator);
  }

  [data-expand-button] {
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    min-width: 32px;
    align-self: stretch;
    color: var(--diffs-fg-number);
    border-right: 2px solid var(--diffs-bg);

    &:hover {
      color: var(--diffs-fg);
    }
  }

  [data-expand-down] [data-icon] {
    transform: scaleY(-1);
  }

  [data-separator-content] {
    flex: 1 1 auto;
    padding: 0 1ch;
    height: 100%;
    color: var(--diffs-fg-number);

    overflow: hidden;
    justify-content: flex-start;
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'] {
    [data-separator-content] {
      height: 100%;
      -webkit-user-select: none;
              user-select: none;
      overflow: clip;
    }
  }

  @supports (width: 1cqi) {
    [data-unified] {
      [data-separator='line-info'] [data-separator-wrapper] {
        padding-inline: var(--diffs-gap-inline, var(--diffs-gap-fallback));
        width: 100cqi;

        [data-separator-content] {
          border-radius: 6px;
        }
      }

      [data-separator='line-info'][data-expand-index]
        [data-separator-wrapper]
        [data-separator-content] {
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
      }
    }

    [data-gutter] {
      [data-separator='line-info'] [data-separator-wrapper] {
        padding-left: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      }

      [data-separator='line-info'] [data-separator-content] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      [data-separator='line-info'][data-expand-index] [data-separator-content] {
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
      }
    }

    [data-additions] {
      [data-content] [data-separator='line-info'] {
        background-color: var(--diffs-bg);

        [data-separator-wrapper] {
          display: none;
        }
      }

      [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
        display: block;
        height: 100%;
        background-color: var(--diffs-bg-separator);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        [data-separator-content],
        [data-expand-button] {
          display: none;
        }
      }
    }

    [data-overflow='scroll']
      [data-additions]
      [data-gutter]
      [data-separator='line-info']
      [data-separator-wrapper] {
      width: calc(100cqi - var(--diffs-gap-inline, var(--diffs-gap-fallback)));
    }

    [data-overflow='wrap']
      [data-additions]
      [data-content]
      [data-separator='line-info']
      [data-separator-wrapper] {
      background-color: var(--diffs-bg-separator);
      display: block;
      height: 100%;
      margin-right: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      [data-separator-content],
      [data-expand-button] {
        display: none;
      }
    }

    [data-separator='line-info'] [data-separator-wrapper] {
      [data-expand-both],
      [data-expand-down],
      [data-expand-up] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
    }

    @media (pointer: fine) {
      [data-separator='line-info'] [data-separator-wrapper] {
        &[data-separator-multi-button] {
          [data-expand-up] {
            border-top-left-radius: 6px;
            border-bottom-left-radius: unset;
          }

          [data-expand-down] {
            border-bottom-left-radius: 6px;
            border-top-left-radius: unset;
          }
        }
      }
    }
  }

  @media (pointer: coarse) {
    [data-separator='line-info-basic']
      [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px 34px auto;

      [data-separator-content] {
        grid-column: unset;
        grid-row: unset;
      }
    }

    @supports (width: 1cqi) {
      [data-separator='line-info'] [data-separator-wrapper] {
        [data-expand-both],
        [data-expand-down],
        [data-expand-up] {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        &[data-separator-multi-button] {
          [data-expand-up] {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }

          [data-expand-down] {
            border-bottom-left-radius: unset;
            border-top-left-radius: unset;
          }
        }
      }
    }
  }

  @media (pointer: fine) {
    [data-separator-wrapper][data-separator-multi-button] {
      display: grid;
      grid-template-rows: 50% 50%;

      [data-separator-content] {
        grid-column: 2;
        grid-row: 1 / -1;
        min-width: min-content;
      }

      [data-expand-button] {
        grid-column: 1;
      }
    }

    [data-separator='line-info'] [data-separator-wrapper],
    [data-separator='line-info']
      [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px auto;
    }

    [data-separator='line-info-basic'][data-expand-index]
      [data-separator-wrapper] {
      grid-template-columns: 100% auto;
    }

    [data-separator='line-info'],
    [data-separator='line-info-basic'] {
      [data-separator-multi-button] {
        [data-expand-up] {
          border-bottom: 1px solid var(--diffs-bg);
          border-right: 2px solid var(--diffs-bg);
        }
        [data-expand-down] {
          border-top: 1px solid var(--diffs-bg);
          border-right: 2px solid var(--diffs-bg);
        }
      }
    }
  }

  [data-additions] [data-gutter] [data-separator-wrapper],
  [data-additions] [data-separator='line-info-basic'] [data-separator-wrapper],
  [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-line-annotation],
  [data-gutter-buffer='annotation'] {
    --diffs-line-bg: var(--diffs-bg-context);
  }

  [data-merge-conflict-actions],
  [data-gutter-buffer='merge-conflict-action'] {
    --diffs-line-bg: var(--diffs-bg-context);
  }

  [data-has-merge-conflict] [data-line-annotation],
  [data-has-merge-conflict] [data-gutter-buffer='annotation'] {
    --diffs-line-bg: var(--diffs-bg);
  }

  [data-has-merge-conflict] [data-gutter-buffer='merge-conflict-action'] {
    --diffs-line-bg: var(--diffs-bg);
  }

  [data-line-annotation] {
    min-height: var(--diffs-annotation-min-height, 0);
    z-index: 2;
  }

  [data-merge-conflict-actions] {
    z-index: 2;
  }

  [data-separator='custom'] {
    display: grid;
    grid-template-columns: subgrid;
  }

  [data-line],
  [data-column-number],
  [data-no-newline] {
    position: relative;
    padding-inline: 1ch;
  }

  [data-indicators='classic'] [data-line] {
    padding-inline-start: 2ch;
  }

  [data-indicators='classic'] {
    [data-line-type='change-addition'],
    [data-line-type='change-deletion'] {
      &[data-no-newline],
      &[data-line] {
        &::before {
          display: inline-block;
          width: 1ch;
          height: 1lh;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-user-select: none;
                  user-select: none;
        }
      }
    }

    [data-line-type='change-addition'] {
      &[data-line],
      &[data-no-newline] {
        &::before {
          content: '+';
          color: var(--diffs-addition-base);
        }
      }
    }

    [data-line-type='change-deletion'] {
      &[data-line],
      &[data-no-newline] {
        &::before {
          content: '-';
          color: var(--diffs-deletion-base);
        }
      }
    }
  }

  [data-indicators='bars'] {
    [data-line-type='change-deletion'],
    [data-line-type='change-addition'] {
      &[data-column-number] {
        &::before {
          content: '';
          display: block;
          width: 4px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-user-select: none;
                  user-select: none;
          contain: strict;
        }
      }
    }

    [data-line-type='change-deletion'] {
      &[data-column-number] {
        &::before {
          background-image: linear-gradient(
            0deg,
            var(--diffs-bg-deletion) 50%,
            var(--diffs-deletion-base) 50%
          );
          background-repeat: repeat;
          background-size: 2px 2px;
          background-size: calc(1lh / round(1lh / 2px))
            calc(1lh / round(1lh / 2px));
        }
      }
    }

    [data-line-type='change-addition'] {
      &[data-column-number] {
        &::before {
          background-color: var(--diffs-addition-base);
        }
      }
    }
  }

  [data-overflow='wrap'] {
    [data-line],
    [data-annotation-content] {
      white-space: pre-wrap;
      word-break: break-word;
    }
  }

  [data-overflow='scroll'] [data-line] {
    white-space: pre;
    min-height: 1lh;
  }

  [data-column-number] {
    box-sizing: content-box;
    text-align: right;
    -webkit-user-select: none;
            user-select: none;
    background-color: var(--diffs-bg);
    color: var(--diffs-fg-number);
    padding-left: 2ch;
  }

  [data-line-number-content] {
    display: inline-block;
    min-width: var(
      --diffs-min-number-column-width,
      var(--diffs-min-number-column-width-default, 3ch)
    );
  }

  [data-disable-line-numbers] {
    [data-column-number] {
      min-width: 4px;
      padding: 0;
    }

    [data-line-number-content] {
      display: none;
    }

    [data-gutter-utility-slot] {
      right: unset;
      left: 0;
      justify-content: flex-start;
    }

    &[data-indicators='bars'] [data-gutter-utility-slot] {
      /* Using 5px here because theres a 1px separator after the bar */
      left: 5px;
    }
  }

  [data-file][data-disable-line-numbers] {
    [data-gutter-buffer],
    [data-column-number] {
      min-width: 0;
      border-right: 0;
    }
  }

  [data-interactive-line-numbers] [data-column-number] {
    cursor: pointer;
  }

  [data-diff-span] {
    border-radius: 3px;
    -webkit-box-decoration-break: clone;
            box-decoration-break: clone;
  }

  [data-line-type='change-addition'] {
    &[data-column-number] {
      color: var(
        --diffs-fg-number-addition-override,
        var(--diffs-addition-base)
      );
    }

    > [data-diff-span] {
      background-color: var(--diffs-bg-addition-emphasis);
    }
  }

  [data-line-type='change-deletion'] {
    &[data-column-number] {
      color: var(
        --diffs-fg-number-deletion-override,
        var(--diffs-deletion-base)
      );
    }

    [data-diff-span] {
      background-color: var(--diffs-bg-deletion-emphasis);
    }
  }

  [data-background] [data-line-type='change-addition'] {
    --diffs-line-bg: var(--diffs-bg-addition);

    &[data-column-number] {
      background-color: var(--diffs-bg-addition-number);
    }
  }

  [data-background] [data-line-type='change-deletion'] {
    --diffs-line-bg: var(--diffs-bg-deletion);

    &[data-column-number] {
      background-color: var(--diffs-bg-deletion-number);
    }
  }

  [data-merge-conflict='marker-start'],
  [data-merge-conflict='marker-base'],
  [data-merge-conflict='marker-separator'],
  [data-merge-conflict='marker-end'] {
    padding-left: 1ch;
    color: var(--diffs-fg);
  }

  [data-merge-conflict='marker-start'],
  [data-merge-conflict='marker-end'] {
    display: flex;
    align-items: center;

    &::after {
      color: var(--diffs-fg-conflict-marker);
      font-style: normal;
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding-left: 1ch;
      font-family: var(
        --diffs-header-font-family,
        var(--diffs-header-font-fallback)
      );
    }
  }

  [data-merge-conflict='marker-start']::after {
    content: '(Current Change)';
  }

  [data-merge-conflict='marker-end']::after {
    content: '(Incoming Change)';
  }

  [data-merge-conflict='marker-base'],
  [data-merge-conflict='marker-end'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg-conflict-marker);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg-conflict-marker-number);
      color: var(--diffs-fg-conflict-marker);

      [data-line-number-content] {
        color: var(--diffs-fg-conflict-marker);
      }
    }
  }

  [data-merge-conflict='current'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--conflict-bg-current);
    }

    &[data-column-number] {
      background-color: var(--conflict-bg-current-number);
      color: var(--diffs-addition-base);
    }
  }

  [data-gutter-buffer='merge-conflict-marker-start'],
  [data-merge-conflict='marker-start'] {
    background-color: var(--conflict-bg-current-header);
  }

  [data-gutter-buffer='merge-conflict-marker-end'],
  [data-merge-conflict='marker-end'] {
    background-color: var(--conflict-bg-incoming-header);
  }

  [data-merge-conflict='marker-separator'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg);
    }
  }

  [data-merge-conflict='base'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg-conflict-base);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg-conflict-base-number);
      color: var(--diffs-modified-base);
    }
  }

  [data-merge-conflict='incoming'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--conflict-bg-incoming);
    }

    &[data-column-number] {
      background-color: var(--conflict-bg-incoming-number);
      color: var(--diffs-modified-base);
    }
  }

  @media (pointer: fine) {
    [data-column-number],
    [data-line] {
      &[data-hovered] {
        background-color: var(--diffs-bg-hover);
      }
    }

    [data-background] {
      [data-column-number],
      [data-line] {
        &[data-hovered] {
          &[data-line-type='change-deletion'] {
            background-color: var(--diffs-bg-deletion-hover);
          }

          &[data-line-type='change-addition'] {
            background-color: var(--diffs-bg-addition-hover);
          }
        }
      }
    }
  }

  [data-diffs-header='default'] {
    position: relative;
    background-color: var(--diffs-bg);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-height: calc(
      1lh + (var(--diffs-gap-block, var(--diffs-gap-fallback)) * 3)
    );
    padding-inline: 16px;
    top: 0;
    z-index: 2;
  }

  [data-header-content] {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-width: 0;
    white-space: nowrap;
  }

  [data-header-content] [data-prev-name],
  [data-header-content] [data-title] {
    direction: rtl;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    white-space: nowrap;
  }

  [data-prev-name] {
    opacity: 0.7;
  }

  [data-rename-icon] {
    fill: currentColor;
    flex-shrink: 0;
    flex-grow: 0;
  }

  [data-diffs-header='default'] [data-metadata] {
    display: flex;
    align-items: center;
    gap: 1ch;
    white-space: nowrap;
  }

  [data-diffs-header='default'] [data-additions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-addition-base);
  }

  [data-diffs-header='default'] [data-deletions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-deletion-base);
  }

  [data-annotation-content] {
    position: relative;
    display: flow-root;
    align-self: flex-start;
    z-index: 2;
    min-width: 0;
    isolation: isolate;
  }

  [data-merge-conflict-actions-content] {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding-inline: 0.5rem;
    min-height: 1.75rem;
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
    font-size: 0.75rem;
    line-height: 1.2;
    color: var(--diffs-fg);
  }

  [data-merge-conflict-action] {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--diffs-fg-number);
    font: inherit;
    font-style: normal;
    cursor: pointer;
    padding: 0;
  }

  [data-merge-conflict-action]:hover {
    color: var(--diffs-fg);
  }

  [data-merge-conflict-action='current']:hover {
    color: var(--diffs-addition-base);
  }

  [data-merge-conflict-action='incoming']:hover {
    color: var(--diffs-modified-base);
  }

  [data-merge-conflict-action-separator] {
    color: var(--diffs-fg-number);
    opacity: 0.6;
    -webkit-user-select: none;
            user-select: none;
  }

  /* Sticky positioning has a composite costs, so we should _only_ pay it if we
   * need to */
  [data-overflow='scroll'] [data-annotation-content] {
    position: sticky;
    width: var(--diffs-column-content-width, auto);
    left: var(--diffs-column-number-width, 0);
  }

  [data-overflow='scroll'] [data-merge-conflict-actions-content] {
    position: sticky;
    width: var(--diffs-column-content-width, auto);
    left: var(--diffs-column-number-width, 0);
  }

  /* Undo some of the stuff that the 'pre' tag does */
  [data-annotation-slot] {
    text-wrap-mode: wrap;
    word-break: normal;
    white-space-collapse: collapse;
  }

  [data-change-icon] {
    fill: currentColor;
    flex-shrink: 0;
  }

  [data-change-icon='change'],
  [data-change-icon='rename-pure'],
  [data-change-icon='rename-changed'] {
    color: var(--diffs-modified-base);
  }

  [data-change-icon='new'] {
    color: var(--diffs-addition-base);
  }

  [data-change-icon='deleted'] {
    color: var(--diffs-deletion-base);
  }

  [data-change-icon='file'] {
    opacity: 0.6;
  }

  /* Line selection highlighting */
  [data-selected-line] {
    &[data-gutter-buffer='annotation'],
    &[data-column-number] {
      color: var(--diffs-selection-number-fg);
      background-color: var(--diffs-bg-selection-number);
    }

    &[data-line] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-line-type='change-addition'],
  [data-line-type='change-deletion'] {
    &[data-selected-line] {
      &[data-line],
      &[data-line][data-hovered] {
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 82%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          )
        );
      }

      &[data-column-number],
      &[data-column-number][data-hovered] {
        color: var(--diffs-selection-number-fg);
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 60%,
            var(--diffs-selection-base)
          )
        );
      }
    }
  }

  [data-gutter-utility-slot] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  [data-unmodified-lines] {
    display: block;
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 1 auto;
  }

  [data-error-wrapper] {
    overflow: auto;
    padding: var(--diffs-gap-block, var(--diffs-gap-fallback))
      var(--diffs-gap-inline, var(--diffs-gap-fallback));
    max-height: 400px;
    scrollbar-width: none;

    [data-error-message] {
      font-weight: bold;
      font-size: 18px;
      color: var(--diffs-deletion-base);
    }

    [data-error-stack] {
      color: var(--diffs-fg-number);
    }
  }

  [data-placeholder] {
    contain: strict;
  }

  [data-utility-button] {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    appearance: none;
    width: 1lh;
    height: 1lh;
    margin-right: calc((1lh - 1ch) * -1);
    padding: 0;
    cursor: pointer;
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    border-radius: 4px;
    background-color: var(--diffs-modified-base);
    color: var(--diffs-bg);
    fill: currentColor;
    position: relative;
    z-index: 4;
  }
}
`;
const Nn = '@layer base, theme, rendered, unsafe;';
function vi(e) {
  return `${Nn}
@layer unsafe {
  ${e}
}`;
}
function xi(e, n = 'system') {
  return `${Nn}
@layer rendered {
  :host {${
    n === 'system'
      ? ''
      : `
  color-scheme: ${n};`
  }
  ${e}
  }
}`;
}
function Ue({ code: e, pre: n, columnType: t, rowSpan: i, containerSize: r = !1 } = {}) {
  return (
    e == null &&
      ((e = document.createElement('code')),
      e.setAttribute('data-code', ''),
      t != null && e.setAttribute(`data-${t}`, ''),
      n?.appendChild(e)),
    i != null ? e.style.setProperty('grid-row', `span ${i}`) : e.style.removeProperty('grid-row'),
    r ? e.setAttribute('data-container-size', '') : e.removeAttribute('data-container-size'),
    e
  );
}
function yi({ shadowRoot: e, currentNode: n, themeCSS: t }) {
  if (t.trim() === '') {
    n?.remove();
    return;
  }
  return ((n ??= Si()), (n.textContent = t), n.parentNode !== e && e.appendChild(n), n);
}
function Si() {
  const e = document.createElement('style');
  return (e.setAttribute(En, ''), e);
}
function ki(e, n) {
  if (n == null) return;
  const t = e.shadowRoot ?? e.attachShadow({ mode: 'open' });
  t.innerHTML === '' && (t.innerHTML = n);
}
function Ci(
  e,
  {
    type: n,
    diffIndicators: t,
    disableBackground: i,
    disableLineNumbers: r,
    overflow: o,
    split: a,
    totalLines: l,
    customProperties: s,
  },
) {
  if (s != null)
    for (const f in s) {
      const d = s[f];
      d != null && e.setAttribute(f, `${d}`);
    }
  switch (
    (n === 'diff'
      ? (e.setAttribute('data-diff', ''), e.removeAttribute('data-file'))
      : (e.setAttribute('data-file', ''), e.removeAttribute('data-diff')),
    t)
  ) {
    case 'bars':
    case 'classic':
      e.setAttribute('data-indicators', t);
      break;
    case 'none':
      e.removeAttribute('data-indicators');
      break;
  }
  return (
    r
      ? e.setAttribute('data-disable-line-numbers', '')
      : e.removeAttribute('data-disable-line-numbers'),
    i ? e.removeAttribute('data-background') : e.setAttribute('data-background', ''),
    n === 'diff'
      ? e.setAttribute('data-diff-type', a ? 'split' : 'single')
      : e.removeAttribute('data-diff-type'),
    e.setAttribute('data-overflow', o),
    (e.tabIndex = 0),
    e.style.setProperty('--diffs-min-number-column-width-default', `${`${l}`.length}ch`),
    e
  );
}
if (typeof HTMLElement < 'u' && customElements.get(ge) == null) {
  let e;
  class n extends HTMLElement {
    constructor() {
      if ((super(), this.shadowRoot != null)) return;
      const i = this.attachShadow({ mode: 'open' });
      (e == null && ((e = new CSSStyleSheet()), e.replaceSync(bi)), (i.adoptedStyleSheets = [e]));
    }
  }
  customElements.define(ge, n);
}
const wi = !0;
function Li(e, n, t) {
  if (e === n || e == null || n == null) return e === n;
  const i = new Set(t),
    r = Object.keys(e),
    o = new Set(Object.keys(n));
  for (const a of r) if ((o.delete(a), !i.has(a) && (!(a in n) || e[a] !== n[a]))) return !1;
  for (const a of Array.from(o)) if (!i.has(a)) return !1;
  return !0;
}
function Ei(e, n) {
  return Hn(e?.theme ?? X, n?.theme ?? X) && Li(e, n, ['theme']);
}
function Ai({ hunkIndex: e, lineIndex: n, conflictIndex: t }) {
  return `merge-conflict-action-${e}-${n}-${t}`;
}
function Ii(e, n) {
  const t = n.hunks[e.hunkIndex];
  if (t != null) return { hunkIndex: e.hunkIndex, lineIndex: Ti(t, e.startContentIndex) };
}
function Ti(e, n) {
  let t = e.unifiedLineStart;
  for (let i = 0; i < n; i++) {
    const r = e.hunkContent[i];
    t += r.type === 'context' ? r.lines : r.deletions + r.additions;
  }
  return t;
}
function Un({
  fileDiff: e,
  actions: n,
  renderCustomHeader: t,
  renderHeaderPrefix: i,
  renderHeaderMetadata: r,
  renderAnnotation: o,
  renderGutterUtility: a,
  renderHoverUtility: l,
  renderMergeConflictUtility: s,
  lineAnnotations: f,
  getHoveredLine: d,
  getInstance: u,
}) {
  const c = a ?? l,
    h = t?.(e),
    g = i?.(e),
    b = r?.(e);
  return A.jsxs(A.Fragment, {
    children: [
      h != null
        ? A.jsx('div', { slot: Ke, children: h })
        : A.jsxs(A.Fragment, {
            children: [
              g != null && A.jsx('div', { slot: qe, children: g }),
              b != null && A.jsx('div', { slot: Ve, children: b }),
            ],
          }),
      o != null && f?.map((x, C) => A.jsx('div', { slot: be(x), children: o(x) }, C)),
      n != null &&
        s != null &&
        u != null &&
        n.map((x) => {
          if (x == null) return;
          const C = Mi(x, e);
          return A.jsx('div', { slot: C, style: Yn, children: s(x, u) }, C);
        }),
      c != null && A.jsx('div', { slot: 'gutter-utility-slot', style: Xn, children: c(d) }),
    ],
  });
}
function Mi(e, n) {
  const t = Ii(e, n);
  return t != null
    ? Ai({ hunkIndex: t.hunkIndex, lineIndex: t.lineIndex, conflictIndex: e.conflictIndex })
    : void 0;
}
var Ri = class {
  isDeletionsScrolling = !1;
  isAdditionsScrolling = !1;
  timeoutId = -1;
  codeDeletions;
  codeAdditions;
  enabled = !1;
  cleanUp() {
    this.enabled &&
      (this.codeDeletions?.removeEventListener('scroll', this.handleDeletionsScroll),
      this.codeAdditions?.removeEventListener('scroll', this.handleAdditionsScroll),
      clearTimeout(this.timeoutId),
      (this.codeDeletions = void 0),
      (this.codeAdditions = void 0),
      (this.enabled = !1));
  }
  setup(e, n, t) {
    if (n == null || t == null)
      for (const i of e.children ?? [])
        i instanceof HTMLElement &&
          ('deletions' in i.dataset ? (n = i) : 'additions' in i.dataset && (t = i));
    if (t == null || n == null) {
      this.cleanUp();
      return;
    }
    (this.codeDeletions !== n &&
      (this.codeDeletions?.removeEventListener('scroll', this.handleDeletionsScroll),
      (this.codeDeletions = n),
      n.addEventListener('scroll', this.handleDeletionsScroll, { passive: !0 })),
      this.codeAdditions !== t &&
        (this.codeAdditions?.removeEventListener('scroll', this.handleAdditionsScroll),
        (this.codeAdditions = t),
        t.addEventListener('scroll', this.handleAdditionsScroll, { passive: !0 })),
      (this.enabled = !0));
  }
  handleDeletionsScroll = () => {
    this.isAdditionsScrolling ||
      ((this.isDeletionsScrolling = !0),
      clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        this.isDeletionsScrolling = !1;
      }, 300)),
      this.codeAdditions?.scrollTo({ left: this.codeDeletions?.scrollLeft }));
  };
  handleAdditionsScroll = () => {
    this.isDeletionsScrolling ||
      ((this.isAdditionsScrolling = !0),
      clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        this.isAdditionsScrolling = !1;
      }, 300)),
      this.codeDeletions?.scrollTo({ left: this.codeAdditions?.scrollLeft }));
  };
};
function ke(e) {
  return I({
    tagName: 'div',
    properties: {
      'data-content-buffer': '',
      'data-buffer-size': e,
      'style': `grid-row: span ${e};min-height:calc(${e} * 1lh)`,
    },
  });
}
function Ce(e) {
  return I({
    tagName: 'div',
    children: [I({ tagName: 'span', children: [Z('No newline at end of file')] })],
    properties: { 'data-no-newline': '', 'data-line-type': e, 'data-column-content': '' },
  });
}
function ze(e) {
  return I({
    tagName: 'div',
    children: [
      Ae({
        name: e === 'both' ? 'diffs-icon-expand-all' : 'diffs-icon-expand',
        properties: { 'data-icon': '' },
      }),
    ],
    properties: {
      'data-expand-button': '',
      'data-expand-both': e === 'both' ? '' : void 0,
      'data-expand-up': e === 'up' ? '' : void 0,
      'data-expand-down': e === 'down' ? '' : void 0,
    },
  });
}
function ae({
  type: e,
  content: n,
  expandIndex: t,
  chunked: i = !1,
  slotName: r,
  isFirstHunk: o,
  isLastHunk: a,
}) {
  const l = [];
  if (
    (e === 'metadata' &&
      n != null &&
      l.push(I({ tagName: 'div', children: [Z(n)], properties: { 'data-separator-wrapper': '' } })),
    (e === 'line-info' || e === 'line-info-basic') && n != null)
  ) {
    const s = [];
    (t != null &&
      (i
        ? (o || s.push(ze('up')), a || s.push(ze('down')))
        : s.push(ze(!o && !a ? 'both' : o ? 'down' : 'up'))),
      s.push(
        I({
          tagName: 'div',
          children: [
            I({ tagName: 'span', children: [Z(n)], properties: { 'data-unmodified-lines': '' } }),
          ],
          properties: { 'data-separator-content': '' },
        }),
      ),
      l.push(
        I({
          tagName: 'div',
          children: s,
          properties: {
            'data-separator-wrapper': '',
            'data-separator-multi-button': s.length > 2 ? '' : void 0,
          },
        }),
      ));
  }
  return (
    e === 'custom' && r != null && l.push(I({ tagName: 'slot', properties: { name: r } })),
    I({
      tagName: 'div',
      children: l,
      properties: {
        'data-separator': l.length === 0 ? 'simple' : e,
        'data-expand-index': t,
        'data-separator-first': o ? '' : void 0,
        'data-separator-last': a ? '' : void 0,
      },
    })
  );
}
function Hi(e, n) {
  return `hunk-separator-${e}-${n}`;
}
function Pi(e) {
  const n = e.at(-1);
  return n == null
    ? 0
    : Math.max(n.additionStart + n.additionCount, n.deletionStart + n.deletionCount);
}
function Di(e) {
  return (
    e.startingLine === 0 && e.totalLines === 1 / 0 && e.bufferBefore === 0 && e.bufferAfter === 0
  );
}
let Ni = -1;
var Ui = class {
  __id = `diff-hunks-renderer:${++Ni}`;
  highlighter;
  diff;
  expandedHunks = new Map();
  deletionAnnotations = {};
  additionAnnotations = {};
  computedLang = 'text';
  renderCache;
  constructor(e = { theme: X }, n, t) {
    ((this.options = e),
      (this.onRenderUpdate = n),
      (this.workerManager = t),
      t?.isWorkingPool() !== !0 && (this.highlighter = Ne(e.theme ?? X) ? gt() : void 0));
  }
  cleanUp() {
    ((this.highlighter = void 0),
      (this.diff = void 0),
      (this.renderCache = void 0),
      this.workerManager?.cleanUpPendingTasks(this),
      (this.workerManager = void 0),
      (this.onRenderUpdate = void 0));
  }
  recycle() {
    ((this.highlighter = void 0),
      (this.diff = void 0),
      (this.renderCache = void 0),
      this.workerManager?.cleanUpPendingTasks(this));
  }
  setOptions(e) {
    this.options = e;
  }
  mergeOptions(e) {
    this.options = { ...this.options, ...e };
  }
  expandHunk(e, n, t = this.getOptionsWithDefaults().expansionLineCount) {
    const i = { ...(this.expandedHunks.get(e) ?? { fromStart: 0, fromEnd: 0 }) };
    ((n === 'up' || n === 'both') && (i.fromStart += t),
      (n === 'down' || n === 'both') && (i.fromEnd += t),
      this.renderCache?.highlighted !== !0 && (this.renderCache = void 0),
      this.expandedHunks.set(e, i));
  }
  getExpandedHunk(e) {
    return this.expandedHunks.get(e) ?? ot;
  }
  getExpandedHunksMap() {
    return this.expandedHunks;
  }
  setLineAnnotations(e) {
    ((this.additionAnnotations = {}), (this.deletionAnnotations = {}));
    for (const n of e) {
      const t = (() => {
          switch (n.side) {
            case 'deletions':
              return this.deletionAnnotations;
            case 'additions':
              return this.additionAnnotations;
          }
        })(),
        i = t[n.lineNumber] ?? [];
      ((t[n.lineNumber] = i), i.push(n));
    }
  }
  getUnifiedLineDecoration({ lineType: e }) {
    return { gutterLineType: e };
  }
  getSplitLineDecoration({ side: e, type: n }) {
    return n !== 'change'
      ? { gutterLineType: n }
      : { gutterLineType: e === 'deletions' ? 'change-deletion' : 'change-addition' };
  }
  createAnnotationElement(e) {
    return ti(e);
  }
  getOptionsWithDefaults() {
    const {
      diffIndicators: e = 'bars',
      diffStyle: n = 'split',
      disableBackground: t = !1,
      disableFileHeader: i = !1,
      disableLineNumbers: r = !1,
      disableVirtualizationBuffers: o = !1,
      collapsed: a = !1,
      expandUnchanged: l = !1,
      collapsedContextThreshold: s = le,
      expansionLineCount: f = 100,
      hunkSeparators: d = 'line-info',
      lineDiffType: u = 'word-alt',
      maxLineDiffLength: c = 1e3,
      overflow: h = 'scroll',
      theme: g = X,
      headerRenderMode: b = 'default',
      tokenizeMaxLineLength: x = 1e3,
      useCSSClasses: C = !1,
    } = this.options;
    return {
      diffIndicators: e,
      diffStyle: n,
      disableBackground: t,
      disableFileHeader: i,
      disableLineNumbers: r,
      disableVirtualizationBuffers: o,
      collapsed: a,
      expandUnchanged: l,
      collapsedContextThreshold: s,
      expansionLineCount: f,
      hunkSeparators: d,
      lineDiffType: u,
      maxLineDiffLength: c,
      overflow: h,
      theme: this.workerManager?.getDiffRenderOptions().theme ?? g,
      headerRenderMode: b,
      tokenizeMaxLineLength: x,
      useCSSClasses: C,
    };
  }
  async initializeHighlighter() {
    return ((this.highlighter = await mt(fi(this.computedLang, this.options))), this.highlighter);
  }
  hydrate(e) {
    if (e == null) return;
    this.diff = e;
    const { options: n } = this.getRenderOptions(e);
    let t = this.workerManager?.getDiffResultCache(e);
    (t != null && !Oe(n, t.options) && (t = void 0),
      (this.renderCache ??= {
        diff: e,
        highlighted: !wt(e),
        options: n,
        result: t?.result,
        renderRange: void 0,
      }),
      this.workerManager?.isWorkingPool() === !0 &&
        this.renderCache.result == null &&
        this.workerManager.highlightDiffAST(this, this.diff));
  }
  getRenderOptions(e) {
    const n = (() => {
      if (this.workerManager?.isWorkingPool() === !0)
        return this.workerManager.getDiffRenderOptions();
      const { theme: i, tokenizeMaxLineLength: r, lineDiffType: o } = this.getOptionsWithDefaults();
      return { theme: i, tokenizeMaxLineLength: r, lineDiffType: o };
    })();
    this.getOptionsWithDefaults();
    const { renderCache: t } = this;
    return t?.result == null
      ? { options: n, forceRender: !0 }
      : e !== t.diff || !Oe(n, t.options)
        ? { options: n, forceRender: !0 }
        : { options: n, forceRender: !1 };
  }
  renderDiff(e = this.renderCache?.diff, n = Ze) {
    if (e == null) return;
    const { expandUnchanged: t = !1, collapsedContextThreshold: i } = this.getOptionsWithDefaults(),
      r = this.workerManager?.getDiffResultCache(e);
    r != null &&
      this.renderCache == null &&
      (this.renderCache = { diff: e, highlighted: !0, renderRange: void 0, ...r });
    const { options: o, forceRender: a } = this.getRenderOptions(e);
    if (
      ((this.renderCache ??= {
        diff: e,
        highlighted: !1,
        options: o,
        result: void 0,
        renderRange: void 0,
      }),
      this.workerManager?.isWorkingPool() === !0)
    )
      ((this.renderCache.result == null ||
        (!this.renderCache.highlighted &&
          (e !== this.renderCache.diff || !Dn(this.renderCache.renderRange, n)))) &&
        ((this.renderCache.diff = e),
        (this.renderCache.result = this.workerManager.getPlainDiffAST(
          e,
          n.startingLine,
          n.totalLines,
          Di(n) || t ? !0 : this.expandedHunks,
          i,
        )),
        (this.renderCache.renderRange = n)),
        n.totalLines > 0 &&
          (!this.renderCache.highlighted || a) &&
          this.workerManager.highlightDiffAST(this, e));
    else {
      this.computedLang = e.lang ?? de(e.name);
      const l = this.highlighter != null && Ne(o.theme),
        s = this.highlighter != null && mn(this.computedLang);
      if (
        this.highlighter != null &&
        l &&
        (a || (!this.renderCache.highlighted && s) || this.renderCache.result == null)
      ) {
        const { result: f, options: d } = this.renderDiffWithHighlighter(e, this.highlighter, !s);
        this.renderCache = { diff: e, options: d, highlighted: s, result: f, renderRange: void 0 };
      }
      (!l || !s) &&
        this.asyncHighlight(e).then(({ result: f, options: d }) => {
          this.onHighlightSuccess(e, f, d);
        });
    }
    return this.renderCache.result != null
      ? this.processDiffResult(this.renderCache.diff, n, this.renderCache.result)
      : void 0;
  }
  async asyncRender(e, n = Ze) {
    const { result: t } = await this.asyncHighlight(e);
    return this.processDiffResult(e, n, t);
  }
  createPreElement(e, n, t) {
    const {
      diffIndicators: i,
      disableBackground: r,
      disableLineNumbers: o,
      overflow: a,
    } = this.getOptionsWithDefaults();
    return li({
      type: 'diff',
      diffIndicators: i,
      disableBackground: r,
      disableLineNumbers: o,
      overflow: a,
      split: e,
      totalLines: n,
      customProperties: t,
    });
  }
  async asyncHighlight(e) {
    this.computedLang = e.lang ?? de(e.name);
    const n = this.highlighter != null && Ne(this.options.theme ?? X),
      t = this.highlighter != null && mn(this.computedLang);
    return (
      (this.highlighter == null || !n || !t) &&
        (this.highlighter = await this.initializeHighlighter()),
      this.renderDiffWithHighlighter(e, this.highlighter)
    );
  }
  renderDiffWithHighlighter(e, n, t = !1) {
    const { options: i } = this.getRenderOptions(e),
      { collapsedContextThreshold: r } = this.getOptionsWithDefaults();
    return {
      result: Wt(e, n, i, {
        forcePlainText: t,
        expandedHunks: t ? !0 : void 0,
        collapsedContextThreshold: r,
      }),
      options: i,
    };
  }
  onHighlightSuccess(e, n, t) {
    if (this.renderCache == null) return;
    const i =
      !this.renderCache.highlighted ||
      !Oe(this.renderCache.options, t) ||
      this.renderCache.diff !== e;
    ((this.renderCache = { diff: e, options: t, highlighted: !0, result: n, renderRange: void 0 }),
      i && this.onRenderUpdate?.());
  }
  onHighlightError(e) {
    console.error(e);
  }
  processDiffResult(e, n, { code: t, themeStyles: i, baseThemeType: r }) {
    const {
      diffStyle: o,
      disableFileHeader: a,
      expandUnchanged: l,
      expansionLineCount: s,
      collapsedContextThreshold: f,
      hunkSeparators: d,
    } = this.getOptionsWithDefaults();
    this.diff = e;
    const u = o === 'unified';
    let c = [],
      h = [],
      g = [];
    const b = [],
      { additionLines: x, deletionLines: C } = t,
      p = {
        rowCount: 0,
        hunkSeparators: d,
        additionsContentAST: c,
        deletionsContentAST: h,
        unifiedContentAST: g,
        unifiedGutterAST: ye(),
        deletionsGutterAST: ye(),
        additionsGutterAST: ye(),
        expansionLineCount: s,
        hunkData: b,
        incrementRowCount(R = 1) {
          p.rowCount += R;
        },
        pushToGutter(R, O) {
          switch (R) {
            case 'unified':
              p.unifiedGutterAST.children.push(O);
              break;
            case 'deletions':
              p.deletionsGutterAST.children.push(O);
              break;
            case 'additions':
              p.additionsGutterAST.children.push(O);
              break;
          }
        },
      },
      S = zi(e),
      v = {
        size: 0,
        side: void 0,
        increment() {
          this.size += 1;
        },
        flush() {
          if (o !== 'unified') {
            if (this.size <= 0 || this.side == null) {
              ((this.side = void 0), (this.size = 0));
              return;
            }
            (this.side === 'additions'
              ? (p.pushToGutter('additions', B(void 0, 'buffer', this.size)),
                c?.push(ke(this.size)))
              : (p.pushToGutter('deletions', B(void 0, 'buffer', this.size)),
                h?.push(ke(this.size))),
              (this.size = 0),
              (this.side = void 0));
          }
        },
      },
      k = (R, O, re, ee, P) => {
        p.pushToGutter(R, xt(O, re, ee, P));
      };
    function m(R) {
      (v.flush(),
        o === 'unified' ? Fe('unified', R, p) : (Fe('deletions', R, p), Fe('additions', R, p)));
    }
    (Ie({
      diff: e,
      diffStyle: o,
      startingLine: n.startingLine,
      totalLines: n.totalLines,
      expandedHunks: l ? !0 : this.expandedHunks,
      collapsedContextThreshold: f,
      callback: ({
        hunkIndex: R,
        hunk: O,
        collapsedBefore: re,
        collapsedAfter: ee,
        additionLine: P,
        deletionLine: N,
        type: U,
      }) => {
        const ne = N != null ? N.splitLineIndex : P.splitLineIndex,
          oe = P != null ? P.unifiedLineIndex : N.unifiedLineIndex;
        (o === 'split' && U !== 'change' && v.flush(),
          re > 0 &&
            m({
              hunkIndex: R,
              collapsedLines: re,
              rangeSize: Math.max(O?.collapsedBefore ?? 0, 0),
              hunkSpecs: O?.hunkSpecs,
              isFirstHunk: R === 0,
              isLastHunk: !1,
              isExpandable: !e.isPartial,
            }));
        const ce = o === 'unified' ? oe : ne,
          xe = {
            type: U,
            hunkIndex: R,
            lineIndex: ce,
            unifiedLineIndex: oe,
            splitLineIndex: ne,
            deletionLine: N,
            additionLine: P,
          };
        if (o === 'unified') {
          const D = this.getUnifiedInjectedRowsForLine?.(xe);
          D?.before != null && vn(D.before, p);
          let F = N != null ? C[N.lineIndex] : void 0,
            $ = P != null ? x[P.lineIndex] : void 0;
          if (F == null && $ == null) {
            const j =
              'DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong';
            throw (console.error(j, { file: e.name }), new Error(j));
          }
          const Q = U === 'change' ? (P != null ? 'change-addition' : 'change-deletion') : U,
            W = this.getUnifiedLineDecoration({
              type: U,
              lineType: Q,
              additionLineIndex: P?.lineIndex,
              deletionLineIndex: N?.lineIndex,
            });
          (k(
            'unified',
            W.gutterLineType,
            P != null ? P.lineNumber : N.lineNumber,
            `${oe},${ne}`,
            W.gutterProperties,
          ),
            $ != null
              ? ($ = we($, W.contentProperties))
              : F != null && (F = we(F, W.contentProperties)),
            yn({
              diffStyle: 'unified',
              type: U,
              deletionLine: F,
              additionLine: $,
              unifiedSpan: this.getAnnotations('unified', N?.lineNumber, P?.lineNumber, R, ce),
              createAnnotationElement: (j) => this.createAnnotationElement(j),
              context: p,
            }),
            D?.after != null && vn(D.after, p));
        } else {
          const D = this.getSplitInjectedRowsForLine?.(xe);
          D?.before != null && xn(D.before, p, v);
          let F = N != null ? C[N.lineIndex] : void 0,
            $ = P != null ? x[P.lineIndex] : void 0;
          const Q = this.getSplitLineDecoration({
              side: 'deletions',
              type: U,
              lineIndex: N?.lineIndex,
            }),
            W = this.getSplitLineDecoration({
              side: 'additions',
              type: U,
              lineIndex: P?.lineIndex,
            });
          if (F == null && $ == null) {
            const _ =
              'DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong';
            throw (console.error(_, { file: e.name }), new Error(_));
          }
          const j = (() => {
            if (U === 'change') {
              if ($ == null) return 'additions';
              if (F == null) return 'deletions';
            }
          })();
          if (j != null) {
            if (v.side != null && v.side !== j)
              throw new Error(
                'DiffHunksRenderer.processDiffResult: iterateOverDiff, invalid pending splits',
              );
            ((v.side = j), v.increment());
          }
          const ue = this.getAnnotations('split', N?.lineNumber, P?.lineNumber, R, ce);
          if ((ue != null && v.size > 0 && v.flush(), N != null)) {
            const _ = we(F, Q.contentProperties);
            (k(
              'deletions',
              Q.gutterLineType,
              N.lineNumber,
              `${N.unifiedLineIndex},${ne}`,
              Q.gutterProperties,
            ),
              _ != null && (F = _));
          }
          if (P != null) {
            const _ = we($, W.contentProperties);
            (k(
              'additions',
              W.gutterLineType,
              P.lineNumber,
              `${P.unifiedLineIndex},${ne}`,
              W.gutterProperties,
            ),
              _ != null && ($ = _));
          }
          (yn({
            diffStyle: 'split',
            type: U,
            additionLine: $,
            deletionLine: F,
            ...ue,
            createAnnotationElement: (_) => this.createAnnotationElement(_),
            context: p,
          }),
            D?.after != null && xn(D.after, p, v));
        }
        const te = N?.noEOFCR ?? !1,
          Y = P?.noEOFCR ?? !1;
        if (Y || te) {
          if (te) {
            const D = U === 'context' || U === 'context-expanded' ? U : 'change-deletion';
            o === 'unified'
              ? (p.unifiedContentAST.push(Ce(D)), p.pushToGutter('unified', B(D, 'metadata', 1)))
              : (p.deletionsContentAST.push(Ce(D)),
                p.pushToGutter('deletions', B(D, 'metadata', 1)),
                Y ||
                  (p.pushToGutter('additions', B(void 0, 'buffer', 1)),
                  p.additionsContentAST.push(ke(1))));
          }
          if (Y) {
            const D = U === 'context' || U === 'context-expanded' ? U : 'change-addition';
            o === 'unified'
              ? (p.unifiedContentAST.push(Ce(D)), p.pushToGutter('unified', B(D, 'metadata', 1)))
              : (p.additionsContentAST.push(Ce(D)),
                p.pushToGutter('additions', B(D, 'metadata', 1)),
                te ||
                  (p.pushToGutter('deletions', B(void 0, 'buffer', 1)),
                  p.deletionsContentAST.push(ke(1))));
          }
          p.incrementRowCount(1);
        }
        (ee > 0 &&
          d !== 'simple' &&
          m({
            hunkIndex: U === 'context-expanded' ? R : R + 1,
            collapsedLines: ee,
            rangeSize: S,
            hunkSpecs: void 0,
            isFirstHunk: !1,
            isLastHunk: !0,
            isExpandable: !e.isPartial,
          }),
          p.incrementRowCount(1));
      },
    }),
      o === 'split' && v.flush());
    const y = Math.max(Pi(e.hunks), e.additionLines.length ?? 0, e.deletionLines.length ?? 0),
      w = n.bufferBefore > 0 || n.bufferAfter > 0,
      E = !u && e.type !== 'deleted',
      L = !u && e.type !== 'new',
      T = p.rowCount > 0 || w;
    ((c = E && T ? c : void 0), (h = L && T ? h : void 0), (g = u && T ? g : void 0));
    const M = this.createPreElement(h != null && c != null, y);
    return {
      unifiedGutterAST: u && T ? p.unifiedGutterAST.children : void 0,
      unifiedContentAST: g,
      deletionsGutterAST: L && T ? p.deletionsGutterAST.children : void 0,
      deletionsContentAST: h,
      additionsGutterAST: E && T ? p.additionsGutterAST.children : void 0,
      additionsContentAST: c,
      hunkData: b,
      preNode: M,
      themeStyles: i,
      baseThemeType: r,
      headerElement: a ? void 0 : this.renderHeader(this.diff),
      totalLines: y,
      rowCount: p.rowCount,
      bufferBefore: n.bufferBefore,
      bufferAfter: n.bufferAfter,
      css: '',
    };
  }
  renderCodeAST(e, n) {
    const t =
        e === 'unified'
          ? n.unifiedGutterAST
          : e === 'deletions'
            ? n.deletionsGutterAST
            : n.additionsGutterAST,
      i =
        e === 'unified'
          ? n.unifiedContentAST
          : e === 'deletions'
            ? n.deletionsContentAST
            : n.additionsContentAST;
    if (t == null || i == null) return;
    const r = ye(t);
    return ((r.properties.style = `grid-row: span ${n.rowCount}`), [r, ii(i, n.rowCount)]);
  }
  renderFullAST(e, n = []) {
    const t = this.getOptionsWithDefaults().hunkSeparators === 'line-info',
      i = this.renderCodeAST('unified', e);
    if (i != null)
      return (
        n.push(
          I({
            tagName: 'code',
            children: i,
            properties: {
              'data-code': '',
              'data-container-size': t ? '' : void 0,
              'data-unified': '',
            },
          }),
        ),
        { ...e.preNode, children: n }
      );
    const r = this.renderCodeAST('deletions', e);
    r != null &&
      n.push(
        I({
          tagName: 'code',
          children: r,
          properties: {
            'data-code': '',
            'data-container-size': t ? '' : void 0,
            'data-deletions': '',
          },
        }),
      );
    const o = this.renderCodeAST('additions', e);
    return (
      o != null &&
        n.push(
          I({
            tagName: 'code',
            children: o,
            properties: {
              'data-code': '',
              'data-container-size': t ? '' : void 0,
              'data-additions': '',
            },
          }),
        ),
      { ...e.preNode, children: n }
    );
  }
  renderFullHTML(e, n = []) {
    return me(this.renderFullAST(e, n));
  }
  renderPartialHTML(e, n) {
    return n == null
      ? me(e)
      : me(
          I({
            tagName: 'code',
            children: e,
            properties: {
              'data-code': '',
              'data-container-size':
                this.getOptionsWithDefaults().hunkSeparators === 'line-info' ? '' : void 0,
              [`data-${n}`]: '',
            },
          }),
        );
  }
  getAnnotations(e, n, t, i, r) {
    const o = { type: 'annotation', hunkIndex: i, lineIndex: r, annotations: [] };
    if (n != null) for (const l of this.deletionAnnotations[n] ?? []) o.annotations.push(be(l));
    const a = { type: 'annotation', hunkIndex: i, lineIndex: r, annotations: [] };
    if (t != null)
      for (const l of this.additionAnnotations[t] ?? [])
        (e === 'unified' ? o : a).annotations.push(be(l));
    if (e === 'unified') return o.annotations.length > 0 ? o : void 0;
    if (!(a.annotations.length === 0 && o.annotations.length === 0))
      return { deletionSpan: o, additionSpan: a };
  }
  renderHeader(e) {
    const { headerRenderMode: n } = this.getOptionsWithDefaults();
    return oi({ fileOrDiff: e, mode: n });
  }
};
function Oe(e, n) {
  return (
    Hn(e.theme, n.theme) &&
    e.tokenizeMaxLineLength === n.tokenizeMaxLineLength &&
    e.lineDiffType === n.lineDiffType
  );
}
function bn(e) {
  return `${e} unmodified line${e > 1 ? 's' : ''}`;
}
function vn(e, n) {
  for (const t of e)
    (n.unifiedContentAST.push(t.content),
      n.pushToGutter('unified', t.gutter),
      n.incrementRowCount(1));
}
function xn(e, n, t) {
  for (const { deletion: i, addition: r } of e) {
    if (i == null && r == null) continue;
    const o = i != null && r != null ? void 0 : i == null ? 'deletions' : 'additions';
    ((o == null || t.side !== o) && t.flush(),
      i != null && (n.deletionsContentAST.push(i.content), n.pushToGutter('deletions', i.gutter)),
      r != null && (n.additionsContentAST.push(r.content), n.pushToGutter('additions', r.gutter)),
      o != null && ((t.side = o), t.increment()),
      n.incrementRowCount(1));
  }
}
function yn({
  diffStyle: e,
  type: n,
  deletionLine: t,
  additionLine: i,
  unifiedSpan: r,
  deletionSpan: o,
  additionSpan: a,
  createAnnotationElement: l,
  context: s,
}) {
  let f = !1;
  if (e === 'unified') {
    if (
      (i != null ? s.unifiedContentAST.push(i) : t != null && s.unifiedContentAST.push(t),
      r != null)
    ) {
      const d = n === 'change' ? (t != null ? 'change-deletion' : 'change-addition') : n;
      (s.unifiedContentAST.push(l(r)), s.pushToGutter('unified', B(d, 'annotation', 1)), (f = !0));
    }
  } else if (e === 'split') {
    if (
      (t != null && s.deletionsContentAST.push(t),
      i != null && s.additionsContentAST.push(i),
      o != null)
    ) {
      const d = n === 'change' ? (t != null ? 'change-deletion' : 'context') : n;
      (s.deletionsContentAST.push(l(o)),
        s.pushToGutter('deletions', B(d, 'annotation', 1)),
        (f = !0));
    }
    if (a != null) {
      const d = n === 'change' ? (i != null ? 'change-addition' : 'context') : n;
      (s.additionsContentAST.push(l(a)),
        s.pushToGutter('additions', B(d, 'annotation', 1)),
        (f = !0));
    }
  }
  f && s.incrementRowCount(1);
}
function Fe(
  e,
  {
    hunkIndex: n,
    collapsedLines: t,
    rangeSize: i,
    hunkSpecs: r,
    isFirstHunk: o,
    isLastHunk: a,
    isExpandable: l,
  },
  s,
) {
  if (t <= 0) return;
  const f =
    e === 'unified'
      ? s.unifiedContentAST
      : e === 'deletions'
        ? s.deletionsContentAST
        : s.additionsContentAST;
  if (s.hunkSeparators === 'metadata') {
    r != null &&
      (s.pushToGutter(e, ae({ type: 'metadata', content: r, isFirstHunk: o, isLastHunk: a })),
      f.push(ae({ type: 'metadata', content: r, isFirstHunk: o, isLastHunk: a })),
      e !== 'additions' && s.incrementRowCount(1));
    return;
  }
  if (s.hunkSeparators === 'simple') {
    n > 0 &&
      (s.pushToGutter(e, ae({ type: 'simple', isFirstHunk: o, isLastHunk: !1 })),
      f.push(ae({ type: 'simple', isFirstHunk: o, isLastHunk: !1 })),
      e !== 'additions' && s.incrementRowCount(1));
    return;
  }
  const d = Hi(e, n),
    u = i > s.expansionLineCount,
    c = l ? n : void 0;
  (s.pushToGutter(
    e,
    ae({
      type: s.hunkSeparators,
      content: bn(t),
      expandIndex: c,
      chunked: u,
      slotName: d,
      isFirstHunk: o,
      isLastHunk: a,
    }),
  ),
    f.push(
      ae({
        type: s.hunkSeparators,
        content: bn(t),
        expandIndex: c,
        chunked: u,
        slotName: d,
        isFirstHunk: o,
        isLastHunk: a,
      }),
    ),
    e !== 'additions' && s.incrementRowCount(1),
    s.hunkData.push({
      slotName: d,
      hunkIndex: n,
      lines: t,
      type: e,
      expandable: l ? { up: !o, down: !a, chunked: u } : void 0,
    }));
}
function we(e, n) {
  return e == null || e.type !== 'element' || n == null
    ? e
    : { ...e, properties: { ...e.properties, ...n } };
}
function zi(e) {
  const n = e.hunks.at(-1);
  if (n == null || e.isPartial || e.additionLines.length === 0 || e.deletionLines.length === 0)
    return 0;
  const t = e.additionLines.length - (n.additionLineIndex + n.additionCount),
    i = e.deletionLines.length - (n.deletionLineIndex + n.deletionCount);
  if (t !== i)
    throw new Error(
      `DiffHunksRenderer.processDiffResult: trailing context mismatch (additions=${t}, deletions=${i}) for ${e.name}`,
    );
  return Math.min(t, i);
}
function Oi(e, n) {
  return e.lineNumber === n.lineNumber && e.side === n.side && e.metadata === n.metadata;
}
function Fi(e, n) {
  return (
    e.slotName === n.slotName &&
    e.hunkIndex === n.hunkIndex &&
    e.lines === n.lines &&
    e.type === n.type &&
    e.expandable?.chunked === n.expandable?.chunked &&
    e.expandable?.up === n.expandable?.up &&
    e.expandable?.down === n.expandable?.down
  );
}
function $i(e) {
  const n = e[0];
  if (n !== '+' && n !== '-' && n !== ' ' && n !== '\\') {
    console.error(`parseLineType: Invalid firstChar: "${n}", full line: "${e}"`);
    return;
  }
  const t = e.substring(1);
  return {
    line:
      t === ''
        ? `
`
        : t,
    type: n === ' ' ? 'context' : n === '\\' ? 'metadata' : n === '+' ? 'addition' : 'deletion',
  };
}
function ji(e, n, t = !1) {
  const i = Le.test(e),
    r = e.split(i ? Le : Je);
  let o;
  const a = [];
  for (const l of r) {
    if (i && !Le.test(l)) {
      if (o == null) o = l;
      else {
        if (t) throw Error('parsePatchContent: unknown file blob');
        console.error('parsePatchContent: unknown file blob:', l);
      }
      continue;
    } else if (!i && !Je.test(l)) {
      if (o == null) o = l;
      else {
        if (t) throw Error('parsePatchContent: unknown file blob');
        console.error('parsePatchContent: unknown file blob:', l);
      }
      continue;
    }
    const s = zn(l, { cacheKey: void 0, isGitDiff: i, throwOnError: t });
    s != null && a.push(s);
  }
  return { patchMetadata: o, files: a };
}
function zn(
  e,
  { cacheKey: n, isGitDiff: t = Le.test(e), oldFile: i, newFile: r, throwOnError: o = !1 } = {},
) {
  let a = 0;
  const l = e.split(Jn);
  let s;
  const f = i == null || r == null;
  let d = 0,
    u = 0;
  for (const c of l) {
    const h = c.split(Re),
      g = h.shift();
    if (g == null) {
      if (o) throw Error('parsePatchContent: invalid hunk');
      console.error('parsePatchContent: invalid hunk', c);
      continue;
    }
    const b = g.match(Zn);
    let x = 0,
      C = 0;
    if (b == null || s == null) {
      if (s != null) {
        if (o) throw Error('parsePatchContent: Invalid hunk');
        console.error('parsePatchContent: Invalid hunk', c);
        continue;
      }
      ((s = {
        name: '',
        type: 'change',
        hunks: [],
        splitLineCount: 0,
        unifiedLineCount: 0,
        isPartial: f,
        additionLines: !f && i != null && r != null ? r.contents.split(Re) : [],
        deletionLines: !f && i != null && r != null ? i.contents.split(Re) : [],
        cacheKey: n,
      }),
        s.additionLines.length === 1 && r?.contents === '' && (s.additionLines.length = 0),
        s.deletionLines.length === 1 && i?.contents === '' && (s.deletionLines.length = 0),
        h.unshift(g));
      for (const y of h) {
        const w = y.match(t ? nt : et);
        if (y.startsWith('diff --git')) {
          const [, , E, , L] = y.trim().match(tt) ?? [];
          ((s.name = L.trim()), E !== L && (s.prevName = E.trim()));
        } else if (w != null) {
          const [, E, L] = w;
          E === '---' && L !== '/dev/null'
            ? ((s.prevName = L.trim()), (s.name = L.trim()))
            : E === '+++' && L !== '/dev/null' && (s.name = L.trim());
        } else if (t) {
          if (
            (y.startsWith('new mode ') && (s.mode = y.replace('new mode', '').trim()),
            y.startsWith('old mode ') && (s.prevMode = y.replace('old mode', '').trim()),
            y.startsWith('new file mode') &&
              ((s.type = 'new'), (s.mode = y.replace('new file mode', '').trim())),
            y.startsWith('deleted file mode') &&
              ((s.type = 'deleted'), (s.mode = y.replace('deleted file mode', '').trim())),
            y.startsWith('similarity index') &&
              (y.startsWith('similarity index 100%')
                ? (s.type = 'rename-pure')
                : (s.type = 'rename-changed')),
            y.startsWith('index '))
          ) {
            const [, E, L, T] = y.trim().match(it) ?? [];
            (E != null && (s.prevObjectId = E),
              L != null && (s.newObjectId = L),
              T != null && (s.mode = T));
          }
          (y.startsWith('rename from ') && (s.prevName = y.replace('rename from ', '').trim()),
            y.startsWith('rename to ') && (s.name = y.replace('rename to ', '').trim()));
        }
      }
      continue;
    }
    let p, S;
    for (
      ;
      h.length > 0 &&
      (h[h.length - 1] ===
        `
` ||
        h[h.length - 1] === '\r' ||
        h[h.length - 1] ===
          `\r
` ||
        h[h.length - 1] === '');
    )
      h.pop();
    const v = parseInt(b[3]),
      k = parseInt(b[1]);
    ((d = f ? d : k - 1), (u = f ? u : v - 1));
    const m = {
      collapsedBefore: 0,
      splitLineCount: 0,
      splitLineStart: 0,
      unifiedLineCount: 0,
      unifiedLineStart: 0,
      additionCount: parseInt(b[4] ?? '1'),
      additionStart: v,
      additionLines: x,
      deletionCount: parseInt(b[2] ?? '1'),
      deletionStart: k,
      deletionLines: C,
      deletionLineIndex: d,
      additionLineIndex: u,
      hunkContent: [],
      hunkContext: b[5],
      hunkSpecs: g,
      noEOFCRAdditions: !1,
      noEOFCRDeletions: !1,
    };
    if (
      isNaN(m.additionCount) ||
      isNaN(m.deletionCount) ||
      isNaN(m.additionStart) ||
      isNaN(m.deletionStart)
    ) {
      if (o) throw Error('parsePatchContent: invalid hunk metadata');
      console.error('parsePatchContent: invalid hunk metadata', m);
      continue;
    }
    for (const y of h) {
      const w = $i(y);
      if (w == null) {
        console.error('processFile: invalid rawLine:', y);
        continue;
      }
      const { type: E, line: L } = w;
      if (E === 'addition')
        ((p == null || p.type !== 'change') && ((p = $e('change', d, u)), m.hunkContent.push(p)),
          u++,
          f && s.additionLines.push(L),
          p.additions++,
          x++,
          (S = 'addition'));
      else if (E === 'deletion')
        ((p == null || p.type !== 'change') && ((p = $e('change', d, u)), m.hunkContent.push(p)),
          d++,
          f && s.deletionLines.push(L),
          p.deletions++,
          C++,
          (S = 'deletion'));
      else if (E === 'context')
        ((p == null || p.type !== 'context') && ((p = $e('context', d, u)), m.hunkContent.push(p)),
          u++,
          d++,
          f && (s.deletionLines.push(L), s.additionLines.push(L)),
          p.lines++,
          (S = 'context'));
      else if (E === 'metadata' && p != null) {
        if (
          (p.type === 'context'
            ? ((m.noEOFCRAdditions = !0), (m.noEOFCRDeletions = !0))
            : S === 'deletion'
              ? (m.noEOFCRDeletions = !0)
              : S === 'addition' && (m.noEOFCRAdditions = !0),
          f && (S === 'addition' || S === 'context'))
        ) {
          const T = s.additionLines.length - 1;
          T >= 0 && (s.additionLines[T] = fe(s.additionLines[T]));
        }
        if (f && (S === 'deletion' || S === 'context')) {
          const T = s.deletionLines.length - 1;
          T >= 0 && (s.deletionLines[T] = fe(s.deletionLines[T]));
        }
      }
    }
    ((m.additionLines = x),
      (m.deletionLines = C),
      (m.collapsedBefore = Math.max(m.additionStart - 1 - a, 0)),
      s.hunks.push(m),
      (a = m.additionStart + m.additionCount - 1));
    for (const y of m.hunkContent)
      y.type === 'context'
        ? ((m.splitLineCount += y.lines), (m.unifiedLineCount += y.lines))
        : ((m.splitLineCount += Math.max(y.additions, y.deletions)),
          (m.unifiedLineCount += y.deletions + y.additions));
    ((m.splitLineStart = s.splitLineCount + m.collapsedBefore),
      (m.unifiedLineStart = s.unifiedLineCount + m.collapsedBefore),
      (s.splitLineCount += m.collapsedBefore + m.splitLineCount),
      (s.unifiedLineCount += m.collapsedBefore + m.unifiedLineCount));
  }
  if (s != null) {
    if (s.hunks.length > 0 && !f && s.additionLines.length > 0 && s.deletionLines.length > 0) {
      const c = s.hunks[s.hunks.length - 1],
        h = c.additionStart + c.additionCount - 1,
        g = s.additionLines.length,
        b = Math.max(g - h, 0);
      ((s.splitLineCount += b), (s.unifiedLineCount += b));
    }
    return (
      t ||
        (s.prevName != null && s.name !== s.prevName
          ? s.hunks.length > 0
            ? (s.type = 'rename-changed')
            : (s.type = 'rename-pure')
          : r != null && r.contents === ''
            ? (s.type = 'deleted')
            : i != null && i.contents === '' && (s.type = 'new')),
      s.type !== 'rename-pure' && s.type !== 'rename-changed' && (s.prevName = void 0),
      s
    );
  }
}
function Wi(e, n, t = !1) {
  const i = [];
  for (const r of e.split(Qn))
    try {
      i.push(ji(r, n != null ? `${n}-${i.length}` : void 0, t));
    } catch (o) {
      if (t) throw o;
      console.error(o);
    }
  return i;
}
function $e(e, n, t) {
  return e === 'change'
    ? { type: 'change', additions: 0, deletions: 0, additionLineIndex: t, deletionLineIndex: n }
    : { type: 'context', lines: 0, additionLineIndex: t, deletionLineIndex: n };
}
function Te(e, n, t, i = !1) {
  const r = zn(Ft(e.name, n.name, e.contents, n.contents, e.header, n.header), {
    cacheKey: (() => {
      if (e.cacheKey != null && n.cacheKey != null) return `${e.cacheKey}:${n.cacheKey}`;
    })(),
    oldFile: e,
    newFile: n,
    throwOnError: i,
  });
  if (r == null)
    throw new Error(
      'parseDiffFrom: FileInvalid diff -- probably need to fix something -- if the files are the same maybe?',
    );
  return r;
}
let Bi = -1;
var On = class {
  static LoadedCustomComponent = wi;
  __id = `file-diff:${++Bi}`;
  fileContainer;
  spriteSVG;
  pre;
  codeUnified;
  codeDeletions;
  codeAdditions;
  bufferBefore;
  bufferAfter;
  themeCSSStyle;
  appliedThemeCSS;
  unsafeCSSStyle;
  appliedUnsafeCSS;
  gutterUtilityContent;
  headerElement;
  headerPrefix;
  headerMetadata;
  headerCustom;
  separatorCache = new Map();
  errorWrapper;
  placeHolder;
  hunksRenderer;
  resizeManager;
  scrollSyncManager;
  interactionManager;
  annotationCache = new Map();
  lineAnnotations = [];
  deletionFile;
  additionFile;
  fileDiff;
  renderRange;
  appliedPreAttributes;
  lastRenderedHeaderHTML;
  lastRowCount;
  enabled = !0;
  constructor(e = { theme: X }, n, t = !1) {
    ((this.options = e),
      (this.workerManager = n),
      (this.isContainerManaged = t),
      (this.hunksRenderer = this.createHunksRenderer(e)),
      (this.resizeManager = new ni()),
      (this.scrollSyncManager = new Ri()),
      (this.interactionManager = new Yt(
        'diff',
        cn(
          e,
          typeof e.hunkSeparators == 'function' ||
            (e.hunkSeparators ?? 'line-info') === 'line-info' ||
            e.hunkSeparators === 'line-info-basic'
            ? this.handleExpandHunk
            : void 0,
          this.getLineIndex,
        ),
      )),
      this.workerManager?.subscribeToThemeChanges(this),
      (this.enabled = !0));
  }
  handleHighlightRender = () => {
    this.rerender();
  };
  getHunksRendererOptions(e) {
    return {
      ...e,
      headerRenderMode: e.renderCustomHeader != null ? 'custom' : 'default',
      hunkSeparators: typeof e.hunkSeparators == 'function' ? 'custom' : e.hunkSeparators,
    };
  }
  createHunksRenderer(e) {
    return new Ui(this.getHunksRendererOptions(e), this.handleHighlightRender, this.workerManager);
  }
  getLineIndex = (e, n = 'additions') => {
    if (this.fileDiff == null) return;
    const t = this.fileDiff.hunks.at(-1);
    let i, r;
    e: for (const o of this.fileDiff.hunks) {
      let a = n === 'deletions' ? o.deletionStart : o.additionStart;
      const l = n === 'deletions' ? o.deletionCount : o.additionCount;
      let s = o.splitLineStart,
        f = o.unifiedLineStart;
      if (e < a) {
        const d = a - e;
        ((i = Math.max(f - d, 0)), (r = Math.max(s - d, 0)));
        break e;
      }
      if (e >= a + l) {
        if (o === t) {
          const d = e - (a + l);
          ((i = f + o.unifiedLineCount + d), (r = s + o.splitLineCount + d));
          break e;
        }
        continue;
      }
      for (const d of o.hunkContent)
        if (d.type === 'context')
          if (e < a + d.lines) {
            const u = e - a;
            ((r = s + u), (i = f + u));
            break e;
          } else ((a += d.lines), (s += d.lines), (f += d.lines));
        else {
          const u = n === 'deletions' ? d.deletions : d.additions;
          if (e < a + u) {
            const c = e - a;
            ((i = f + (n === 'additions' ? d.deletions : 0) + c), (r = s + c));
            break e;
          } else
            ((a += u), (s += Math.max(d.deletions, d.additions)), (f += d.deletions + d.additions));
        }
      break e;
    }
    if (!(i == null || r == null)) return [i, r];
  };
  setOptions(e) {
    e != null &&
      ((this.options = e),
      this.hunksRenderer.setOptions(this.getHunksRendererOptions(e)),
      this.interactionManager.setOptions(
        cn(
          e,
          typeof e.hunkSeparators == 'function' ||
            (e.hunkSeparators ?? 'line-info') === 'line-info' ||
            e.hunkSeparators === 'line-info-basic'
            ? this.handleExpandHunk
            : void 0,
          this.getLineIndex,
        ),
      ));
  }
  mergeOptions(e) {
    this.options = { ...this.options, ...e };
  }
  setThemeType(e) {
    (this.options.themeType ?? 'system') !== e &&
      (this.mergeOptions({ themeType: e }),
      !(
        typeof this.options.theme == 'string' ||
        this.fileContainer == null ||
        this.appliedThemeCSS == null
      ) &&
        this.applyThemeState(
          this.fileContainer,
          this.appliedThemeCSS.themeStyles,
          e,
          this.appliedThemeCSS.baseThemeType,
        ));
  }
  getHoveredLine = () => this.interactionManager.getHoveredLine();
  setLineAnnotations(e) {
    this.lineAnnotations = e;
  }
  canPartiallyRender(e, n, t) {
    return !(e || n || t || typeof this.options.hunkSeparators == 'function');
  }
  setSelectedLines(e) {
    this.interactionManager.setSelection(e);
  }
  cleanUp(e = !1) {
    (this.resizeManager.cleanUp(),
      this.interactionManager.cleanUp(),
      this.scrollSyncManager.cleanUp(),
      this.workerManager?.unsubscribeToThemeChanges(this),
      (this.renderRange = void 0),
      this.isContainerManaged || this.fileContainer?.remove(),
      this.fileContainer?.shadowRoot != null && (this.fileContainer.shadowRoot.innerHTML = ''),
      (this.fileContainer = void 0),
      this.pre != null && ((this.pre.innerHTML = ''), (this.pre = void 0)),
      (this.codeUnified = void 0),
      (this.codeDeletions = void 0),
      (this.codeAdditions = void 0),
      (this.bufferBefore = void 0),
      (this.bufferAfter = void 0),
      (this.appliedPreAttributes = void 0),
      (this.headerElement = void 0),
      (this.headerPrefix = void 0),
      (this.headerMetadata = void 0),
      (this.headerCustom = void 0),
      (this.lastRenderedHeaderHTML = void 0),
      (this.errorWrapper = void 0),
      (this.spriteSVG = void 0),
      (this.lastRowCount = void 0),
      (this.themeCSSStyle = void 0),
      (this.appliedThemeCSS = void 0),
      (this.unsafeCSSStyle = void 0),
      (this.appliedUnsafeCSS = void 0),
      e
        ? this.hunksRenderer.recycle()
        : (this.hunksRenderer.cleanUp(),
          (this.workerManager = void 0),
          (this.fileDiff = void 0),
          (this.deletionFile = void 0),
          (this.additionFile = void 0)),
      (this.enabled = !1));
  }
  virtualizedSetup() {
    ((this.enabled = !0), this.workerManager?.subscribeToThemeChanges(this));
  }
  hydrate(e) {
    const {
      fileContainer: n,
      prerenderedHTML: t,
      preventEmit: i = !1,
      lineAnnotations: r,
      oldFile: o,
      newFile: a,
      fileDiff: l,
    } = e;
    (this.hydrateElements(n, t),
      this.pre == null && this.headerElement == null
        ? this.render({ ...e, preventEmit: !0 })
        : this.hydrationSetup({ fileDiff: l, oldFile: o, newFile: a, lineAnnotations: r }),
      i || this.emitPostRender());
  }
  hydrateElements(e, n) {
    ki(e, n);
    for (const t of e.shadowRoot?.children ?? []) {
      if (t instanceof SVGElement) {
        this.spriteSVG = t;
        continue;
      }
      if (t instanceof HTMLElement) {
        if (t instanceof HTMLPreElement) {
          this.pre = t;
          for (const i of t.children)
            !(i instanceof HTMLElement) ||
              i.tagName.toLowerCase() !== 'code' ||
              ('deletions' in i.dataset && (this.codeDeletions = i),
              'additions' in i.dataset && (this.codeAdditions = i),
              'unified' in i.dataset && (this.codeUnified = i));
          continue;
        }
        if ('diffsHeader' in t.dataset) {
          this.headerElement = t;
          continue;
        }
        if (t instanceof HTMLStyleElement && t.hasAttribute(En)) {
          this.themeCSSStyle = t;
          continue;
        }
        if (t instanceof HTMLStyleElement && t.hasAttribute(An)) {
          ((this.unsafeCSSStyle = t), (this.appliedUnsafeCSS = t.textContent));
          continue;
        }
      }
    }
    (this.pre != null &&
      (this.syncCodeNodesFromPre(this.pre), this.pre.removeAttribute('data-dehydrated')),
      (this.fileContainer = e));
  }
  hydrationSetup({ fileDiff: e, oldFile: n, newFile: t, lineAnnotations: i }) {
    const { diffStyle: r = 'split', overflow: o = 'scroll' } = this.options;
    ((this.lineAnnotations = i ?? this.lineAnnotations),
      (this.additionFile = t),
      (this.deletionFile = n),
      (this.fileDiff = e ?? (n != null && t != null ? Te(n, t) : void 0)),
      this.pre != null &&
        (this.hunksRenderer.hydrate(this.fileDiff),
        this.renderAnnotations(),
        this.renderGutterUtility(),
        this.injectUnsafeCSS(),
        this.interactionManager.setup(this.pre),
        this.resizeManager.setup(this.pre, o === 'wrap'),
        o === 'scroll' &&
          r === 'split' &&
          this.scrollSyncManager.setup(this.pre, this.codeDeletions, this.codeAdditions)));
  }
  rerender() {
    !this.enabled ||
      (this.fileDiff == null && this.additionFile == null && this.deletionFile == null) ||
      this.render({ forceRender: !0, renderRange: this.renderRange });
  }
  handleExpandHunk = (e, n, t) => {
    this.expandHunk(e, n, t);
  };
  expandHunk = (e, n, t) => {
    (this.hunksRenderer.expandHunk(e, n, t), this.rerender());
  };
  render({
    oldFile: e,
    newFile: n,
    fileDiff: t,
    forceRender: i = !1,
    preventEmit: r = !1,
    lineAnnotations: o,
    fileContainer: a,
    containerWrapper: l,
    renderRange: s,
  }) {
    if (!this.enabled)
      throw new Error('FileDiff.render: attempting to call render after cleaned up');
    const { collapsed: f = !1 } = this.options,
      d = f ? void 0 : s,
      u = e != null && n != null && (!on(e, this.deletionFile) || !on(n, this.additionFile));
    let c = t != null && t !== this.fileDiff;
    const h =
      o != null && (o.length > 0 || this.lineAnnotations.length > 0)
        ? o !== this.lineAnnotations
        : !1;
    if (
      !f &&
      Dn(d, this.renderRange) &&
      !i &&
      !h &&
      ((t != null && t === this.fileDiff) || (t == null && !u))
    )
      return !1;
    const { renderRange: g } = this;
    if (
      ((this.renderRange = d),
      (this.deletionFile = e),
      (this.additionFile = n),
      t != null
        ? (this.fileDiff = t)
        : e != null && n != null && u && ((c = !0), (this.fileDiff = Te(e, n))),
      o != null && this.setLineAnnotations(o),
      this.fileDiff == null)
    )
      return !1;
    (this.hunksRenderer.setOptions(this.getHunksRendererOptions(this.options)),
      this.hunksRenderer.setLineAnnotations(this.lineAnnotations));
    const {
      diffStyle: b = 'split',
      disableErrorHandling: x = !1,
      disableFileHeader: C = !1,
      overflow: p = 'scroll',
      themeType: S = 'system',
    } = this.options;
    if (
      (C &&
        (this.headerElement != null &&
          (this.headerElement.remove(),
          (this.headerElement = void 0),
          (this.lastRenderedHeaderHTML = void 0)),
        this.clearHeaderSlots()),
      (a = this.getOrCreateFileContainer(a, l)),
      f)
    ) {
      (this.removeRenderedCode(), this.clearAuxiliaryNodes());
      try {
        const v = this.hunksRenderer.renderDiff(this.fileDiff, st);
        (v != null && this.applyThemeState(a, v.themeStyles, S, v.baseThemeType),
          v?.headerElement != null && this.applyHeaderToDOM(v.headerElement, a),
          this.renderSeparators([]),
          this.injectUnsafeCSS());
      } catch (v) {
        if (x) throw v;
        (console.error(v), v instanceof Error && this.applyErrorToDOM(v, a));
      }
      return (r || this.emitPostRender(), !0);
    }
    try {
      const v = this.getOrCreatePreNode(a);
      if (
        !(
          this.canPartiallyRender(i, h, u || c) &&
          this.applyPartialRender({ previousRenderRange: g, renderRange: d })
        )
      ) {
        const k = this.hunksRenderer.renderDiff(this.fileDiff, d);
        if (k == null)
          return (
            this.workerManager?.isInitialized() === !1 &&
              this.workerManager.initialize().then(() => this.rerender()),
            !1
          );
        (this.applyThemeState(a, k.themeStyles, S, k.baseThemeType),
          k.headerElement != null && this.applyHeaderToDOM(k.headerElement, a),
          k.additionsContentAST != null ||
          k.deletionsContentAST != null ||
          k.unifiedContentAST != null
            ? this.applyHunksToDOM(v, k)
            : this.pre != null && (this.pre.remove(), (this.pre = void 0)),
          this.renderSeparators(k.hunkData));
      }
      (this.applyBuffers(v, d),
        this.injectUnsafeCSS(),
        this.renderAnnotations(),
        this.renderGutterUtility(),
        this.interactionManager.setup(v),
        this.resizeManager.setup(v, p === 'wrap'),
        p === 'scroll' && b === 'split'
          ? this.scrollSyncManager.setup(v, this.codeDeletions, this.codeAdditions)
          : this.scrollSyncManager.cleanUp());
    } catch (v) {
      if (x) throw v;
      (console.error(v), v instanceof Error && this.applyErrorToDOM(v, a));
    }
    return (r || this.emitPostRender(), !0);
  }
  emitPostRender() {
    this.fileContainer != null && this.options.onPostRender?.(this.fileContainer, this);
  }
  removeRenderedCode() {
    (this.resizeManager.cleanUp(),
      this.scrollSyncManager.cleanUp(),
      this.interactionManager.cleanUp(),
      this.bufferBefore?.remove(),
      (this.bufferBefore = void 0),
      this.bufferAfter?.remove(),
      (this.bufferAfter = void 0),
      this.codeUnified?.remove(),
      (this.codeUnified = void 0),
      this.codeDeletions?.remove(),
      (this.codeDeletions = void 0),
      this.codeAdditions?.remove(),
      (this.codeAdditions = void 0),
      this.pre?.remove(),
      (this.pre = void 0),
      (this.appliedPreAttributes = void 0),
      (this.lastRowCount = void 0));
  }
  clearAuxiliaryNodes() {
    for (const { element: e } of this.separatorCache.values()) e.remove();
    this.separatorCache.clear();
    for (const { element: e } of this.annotationCache.values()) e.remove();
    (this.annotationCache.clear(),
      this.gutterUtilityContent?.remove(),
      (this.gutterUtilityContent = void 0));
  }
  renderPlaceholder(e) {
    if (this.fileContainer == null) return !1;
    if ((this.cleanChildNodes(), this.placeHolder == null)) {
      const n = this.fileContainer.shadowRoot ?? this.fileContainer.attachShadow({ mode: 'open' });
      ((this.placeHolder = document.createElement('div')),
        (this.placeHolder.dataset.placeholder = ''),
        n.appendChild(this.placeHolder));
    }
    return (this.placeHolder.style.setProperty('height', `${e}px`), !0);
  }
  cleanChildNodes() {
    (this.resizeManager.cleanUp(),
      this.scrollSyncManager.cleanUp(),
      this.interactionManager.cleanUp(),
      this.bufferAfter?.remove(),
      this.bufferBefore?.remove(),
      this.codeAdditions?.remove(),
      this.codeDeletions?.remove(),
      this.codeUnified?.remove(),
      this.errorWrapper?.remove(),
      this.headerElement?.remove(),
      this.gutterUtilityContent?.remove(),
      this.headerPrefix?.remove(),
      this.headerMetadata?.remove(),
      this.headerCustom?.remove(),
      this.pre?.remove(),
      this.spriteSVG?.remove(),
      this.themeCSSStyle?.remove(),
      this.unsafeCSSStyle?.remove(),
      (this.bufferAfter = void 0),
      (this.bufferBefore = void 0),
      (this.codeAdditions = void 0),
      (this.codeDeletions = void 0),
      (this.codeUnified = void 0),
      (this.errorWrapper = void 0),
      (this.headerElement = void 0),
      (this.gutterUtilityContent = void 0),
      (this.headerPrefix = void 0),
      (this.headerMetadata = void 0),
      (this.headerCustom = void 0),
      (this.pre = void 0),
      (this.spriteSVG = void 0),
      (this.themeCSSStyle = void 0),
      (this.appliedThemeCSS = void 0),
      (this.unsafeCSSStyle = void 0),
      (this.appliedUnsafeCSS = void 0),
      (this.lastRenderedHeaderHTML = void 0),
      (this.lastRowCount = void 0));
  }
  renderSeparators(e) {
    const { hunkSeparators: n } = this.options;
    if (this.isContainerManaged || this.fileContainer == null || typeof n != 'function') {
      for (const { element: i } of this.separatorCache.values()) i.remove();
      this.separatorCache.clear();
      return;
    }
    const t = new Map(this.separatorCache);
    for (const i of e) {
      const r = i.slotName;
      let o = this.separatorCache.get(r);
      if (o == null || !Fi(i, o.hunkData)) {
        o?.element.remove();
        const a = document.createElement('div');
        ((a.style.display = 'contents'), (a.slot = i.slotName));
        const l = n(i, this);
        (l != null && a.appendChild(l),
          this.fileContainer.appendChild(a),
          (o = { element: a, hunkData: i }),
          this.separatorCache.set(r, o));
      }
      t.delete(r);
    }
    for (const [i, { element: r }] of t.entries()) (this.separatorCache.delete(i), r.remove());
  }
  renderAnnotations() {
    if (this.isContainerManaged || this.fileContainer == null) {
      for (const { element: t } of this.annotationCache.values()) t.remove();
      this.annotationCache.clear();
      return;
    }
    const e = new Map(this.annotationCache),
      { renderAnnotation: n } = this.options;
    if (n != null && this.lineAnnotations.length > 0)
      for (const [t, i] of this.lineAnnotations.entries()) {
        const r = `${t}-${be(i)}`;
        let o = this.annotationCache.get(r);
        if (o == null || !Oi(i, o.annotation)) {
          o?.element.remove();
          const a = n(i);
          if (a == null) continue;
          ((o = { element: pi(be(i)), annotation: i }),
            o.element.appendChild(a),
            this.fileContainer.appendChild(o.element),
            this.annotationCache.set(r, o));
        }
        e.delete(r);
      }
    for (const [t, { element: i }] of e.entries()) (this.annotationCache.delete(t), i.remove());
  }
  renderGutterUtility() {
    const e = this.options.renderGutterUtility ?? this.options.renderHoverUtility;
    if (this.fileContainer == null || e == null) {
      (this.gutterUtilityContent?.remove(), (this.gutterUtilityContent = void 0));
      return;
    }
    const n = e(this.interactionManager.getHoveredLine);
    if (n != null && this.gutterUtilityContent != null) return;
    if (n == null) {
      (this.gutterUtilityContent?.remove(), (this.gutterUtilityContent = void 0));
      return;
    }
    const t = mi();
    (t.appendChild(n), this.fileContainer.appendChild(t), (this.gutterUtilityContent = t));
  }
  getOrCreateFileContainer(e, n) {
    const t = this.fileContainer;
    if (
      ((this.fileContainer = e ?? this.fileContainer ?? document.createElement(ge)),
      t != null &&
        t !== this.fileContainer &&
        ((this.lastRenderedHeaderHTML = void 0), (this.headerElement = void 0)),
      n != null && this.fileContainer.parentNode !== n && n.appendChild(this.fileContainer),
      this.spriteSVG == null)
    ) {
      const i = document.createElement('div');
      i.innerHTML = ci;
      const r = i.firstChild;
      r instanceof SVGElement &&
        ((this.spriteSVG = r), this.fileContainer.shadowRoot?.appendChild(this.spriteSVG));
    }
    return this.fileContainer;
  }
  getFileContainer() {
    return this.fileContainer;
  }
  getOrCreatePreNode(e) {
    const n = e.shadowRoot ?? e.attachShadow({ mode: 'open' });
    return (
      this.pre == null
        ? ((this.pre = document.createElement('pre')),
          (this.appliedPreAttributes = void 0),
          (this.codeUnified = void 0),
          (this.codeDeletions = void 0),
          (this.codeAdditions = void 0),
          n.appendChild(this.pre))
        : this.pre.parentNode !== n &&
          (n.appendChild(this.pre), (this.appliedPreAttributes = void 0)),
      this.placeHolder?.remove(),
      (this.placeHolder = void 0),
      this.pre
    );
  }
  syncCodeNodesFromPre(e) {
    ((this.codeUnified = void 0), (this.codeDeletions = void 0), (this.codeAdditions = void 0));
    for (const n of Array.from(e.children))
      n instanceof HTMLElement &&
        (n.hasAttribute('data-unified')
          ? (this.codeUnified = n)
          : n.hasAttribute('data-deletions')
            ? (this.codeDeletions = n)
            : n.hasAttribute('data-additions') && (this.codeAdditions = n));
  }
  applyHeaderToDOM(e, n) {
    (this.cleanupErrorWrapper(), this.placeHolder?.remove(), (this.placeHolder = void 0));
    const { fileDiff: t } = this,
      i = me(e);
    if (i !== this.lastRenderedHeaderHTML) {
      const f = document.createElement('div');
      f.innerHTML = i;
      const d = f.firstElementChild;
      if (!(d instanceof HTMLElement)) return;
      (this.headerElement != null
        ? n.shadowRoot?.replaceChild(d, this.headerElement)
        : n.shadowRoot?.prepend(d),
        (this.headerElement = d),
        (this.lastRenderedHeaderHTML = i));
    }
    if (this.isContainerManaged || t == null) return;
    const { renderCustomHeader: r, renderHeaderPrefix: o, renderHeaderMetadata: a } = this.options;
    if (r != null) {
      const f = r(t) ?? void 0;
      ((this.headerCustom = this.upsertHeaderSlotElement(n, this.headerCustom, Ke, f)),
        this.headerPrefix?.remove(),
        this.headerMetadata?.remove(),
        (this.headerPrefix = void 0),
        (this.headerMetadata = void 0));
      return;
    }
    const l = o?.(t) ?? void 0,
      s = a?.(t) ?? void 0;
    ((this.headerPrefix = this.upsertHeaderSlotElement(n, this.headerPrefix, qe, l)),
      (this.headerMetadata = this.upsertHeaderSlotElement(n, this.headerMetadata, Ve, s)),
      this.headerCustom?.remove(),
      (this.headerCustom = void 0));
  }
  clearHeaderSlots() {
    (this.headerPrefix?.remove(),
      this.headerMetadata?.remove(),
      this.headerCustom?.remove(),
      (this.headerPrefix = void 0),
      (this.headerMetadata = void 0),
      (this.headerCustom = void 0));
  }
  upsertHeaderSlotElement(e, n, t, i) {
    if (i == null) {
      n?.remove();
      return;
    }
    const r = n ?? this.createHeaderSlotElement(t);
    return (n == null && e.appendChild(r), this.replaceHeaderSlotContent(r, i), r);
  }
  replaceHeaderSlotContent(e, n) {
    (e.replaceChildren(), n instanceof Element ? e.appendChild(n) : (e.innerText = `${n}`));
  }
  createHeaderSlotElement(e) {
    const n = document.createElement('div');
    return ((n.slot = e), n);
  }
  injectUnsafeCSS() {
    const { unsafeCSS: e } = this.options,
      n = this.fileContainer?.shadowRoot;
    if (n != null) {
      if (e == null || e === '') {
        (this.unsafeCSSStyle != null &&
          (this.unsafeCSSStyle.remove(), (this.unsafeCSSStyle = void 0)),
          (this.appliedUnsafeCSS = void 0));
        return;
      }
      (this.unsafeCSSStyle?.parentNode === n && this.appliedUnsafeCSS === e) ||
        ((this.unsafeCSSStyle ??= gi()),
        this.unsafeCSSStyle.parentNode !== n && n.appendChild(this.unsafeCSSStyle),
        (this.unsafeCSSStyle.textContent = vi(e)),
        (this.appliedUnsafeCSS = e));
    }
  }
  applyThemeState(e, n, t, i) {
    const r = e.shadowRoot ?? e.attachShadow({ mode: 'open' }),
      o = i ?? t;
    (this.themeCSSStyle?.parentNode === r &&
      this.appliedThemeCSS?.themeStyles === n &&
      this.appliedThemeCSS.themeType === o) ||
      ((this.themeCSSStyle = yi({
        shadowRoot: r,
        currentNode: this.themeCSSStyle,
        themeCSS: xi(n, o),
      })),
      (this.appliedThemeCSS =
        this.themeCSSStyle != null ? { themeStyles: n, themeType: o, baseThemeType: i } : void 0));
  }
  applyHunksToDOM(e, n) {
    const { overflow: t = 'scroll' } = this.options,
      i = (this.options.hunkSeparators ?? 'line-info') === 'line-info',
      r = t === 'wrap' ? n.rowCount : void 0;
    (this.cleanupErrorWrapper(), this.applyPreNodeAttributes(e, n));
    let o = !1;
    const a = [],
      l = this.hunksRenderer.renderCodeAST('unified', n),
      s = this.hunksRenderer.renderCodeAST('deletions', n),
      f = this.hunksRenderer.renderCodeAST('additions', n);
    (l != null
      ? ((o = this.codeUnified == null || this.codeAdditions != null || this.codeDeletions != null),
        this.codeDeletions?.remove(),
        (this.codeDeletions = void 0),
        this.codeAdditions?.remove(),
        (this.codeAdditions = void 0),
        (this.codeUnified = Ue({
          code: this.codeUnified,
          columnType: 'unified',
          rowSpan: r,
          containerSize: i,
        })),
        (this.codeUnified.innerHTML = this.hunksRenderer.renderPartialHTML(l)),
        a.push(this.codeUnified))
      : s != null || f != null
        ? (s != null
            ? ((o = this.codeDeletions == null || this.codeUnified != null),
              this.codeUnified?.remove(),
              (this.codeUnified = void 0),
              (this.codeDeletions = Ue({
                code: this.codeDeletions,
                columnType: 'deletions',
                rowSpan: r,
                containerSize: i,
              })),
              (this.codeDeletions.innerHTML = this.hunksRenderer.renderPartialHTML(s)),
              a.push(this.codeDeletions))
            : (this.codeDeletions?.remove(), (this.codeDeletions = void 0)),
          f != null
            ? ((o = o || this.codeAdditions == null || this.codeUnified != null),
              this.codeUnified?.remove(),
              (this.codeUnified = void 0),
              (this.codeAdditions = Ue({
                code: this.codeAdditions,
                columnType: 'additions',
                rowSpan: r,
                containerSize: i,
              })),
              (this.codeAdditions.innerHTML = this.hunksRenderer.renderPartialHTML(f)),
              a.push(this.codeAdditions))
            : (this.codeAdditions?.remove(), (this.codeAdditions = void 0)))
        : (this.codeUnified?.remove(),
          (this.codeUnified = void 0),
          this.codeDeletions?.remove(),
          (this.codeDeletions = void 0),
          this.codeAdditions?.remove(),
          (this.codeAdditions = void 0)),
      a.length === 0 ? (e.textContent = '') : o && e.replaceChildren(...a),
      (this.lastRowCount = n.rowCount));
  }
  applyPartialRender({ previousRenderRange: e, renderRange: n }) {
    const {
      pre: t,
      codeUnified: i,
      codeAdditions: r,
      codeDeletions: o,
      options: { diffStyle: a = 'split' },
    } = this;
    if (
      t == null ||
      e == null ||
      n == null ||
      !Number.isFinite(e.totalLines) ||
      !Number.isFinite(n.totalLines) ||
      this.lastRowCount == null
    )
      return !1;
    const l = this.getCodeColumns(a, i, o, r);
    if (l == null) return !1;
    const s = e.startingLine,
      f = n.startingLine,
      d = s + e.totalLines,
      u = f + n.totalLines,
      c = Math.max(s, f),
      h = Math.min(d, u);
    if (h <= c) return !1;
    const g = Math.max(0, c - s),
      b = Math.max(0, d - h),
      x = this.trimColumns({
        columns: l,
        trimStart: g,
        trimEnd: b,
        previousStart: s,
        overlapStart: c,
        overlapEnd: h,
        diffStyle: a,
      });
    if (x < 0) throw new Error('applyPartialRender: failed to trim to overlap');
    if (this.lastRowCount < x) throw new Error('applyPartialRender: trimmed beyond DOM row count');
    let C = this.lastRowCount - x;
    const p = (m, y) => {
        if (!(y <= 0 || this.fileDiff == null))
          return this.hunksRenderer.renderDiff(this.fileDiff, {
            startingLine: m,
            totalLines: y,
            bufferBefore: 0,
            bufferAfter: 0,
          });
      },
      S = p(f, Math.max(c - f, 0));
    if (S == null && f < c) return !1;
    const v = p(h, Math.max(u - h, 0));
    if (v == null && u > h) return !1;
    const k = (m, y) => {
      if (m != null) {
        if (a === 'unified' && !Array.isArray(l)) this.insertPartialHTML(a, l, m, y);
        else if (a === 'split' && Array.isArray(l)) this.insertPartialHTML(a, l, m, y);
        else throw new Error('FileDiff.applyPartialRender.applyChunk: invalid chunk application');
        C += m.rowCount;
      }
    };
    return (
      this.cleanupErrorWrapper(),
      k(S, 'afterbegin'),
      k(v, 'beforeend'),
      this.lastRowCount !== C && (this.applyRowSpan(a, l, C), (this.lastRowCount = C)),
      !0
    );
  }
  insertPartialHTML(e, n, t, i) {
    if (e === 'unified' && !Array.isArray(n)) {
      const r = this.hunksRenderer.renderCodeAST('unified', t);
      this.renderPartialColumn(n, r, i);
    } else if (e === 'split' && Array.isArray(n)) {
      const r = this.hunksRenderer.renderCodeAST('deletions', t),
        o = this.hunksRenderer.renderCodeAST('additions', t);
      (this.renderPartialColumn(n[0], r, i), this.renderPartialColumn(n[1], o, i));
    } else throw new Error('FileDiff.insertPartialHTML: Invalid argument composition');
  }
  renderPartialColumn(e, n, t) {
    if (e == null || n == null) return;
    const i = Sn(n[0]),
      r = Sn(n[1]);
    if (i == null || r == null)
      throw new Error('FileDiff.insertPartialHTML: Unexpected AST structure');
    const o = r.at(0);
    t === 'beforeend' &&
      o?.type === 'element' &&
      typeof o.properties['data-buffer-size'] == 'number' &&
      this.mergeBuffersIfNecessary(
        o.properties['data-buffer-size'],
        e.content.children[e.content.children.length - 1],
        e.gutter.children[e.gutter.children.length - 1],
        i,
        r,
        !0,
      );
    const a = r.at(-1);
    (t === 'afterbegin' &&
      a?.type === 'element' &&
      typeof a.properties['data-buffer-size'] == 'number' &&
      this.mergeBuffersIfNecessary(
        a.properties['data-buffer-size'],
        e.content.children[0],
        e.gutter.children[0],
        i,
        r,
        !1,
      ),
      e.gutter.insertAdjacentHTML(t, this.hunksRenderer.renderPartialHTML(i)),
      e.content.insertAdjacentHTML(t, this.hunksRenderer.renderPartialHTML(r)));
  }
  mergeBuffersIfNecessary(e, n, t, i, r, o) {
    if (!(n instanceof HTMLElement) || !(t instanceof HTMLElement)) return;
    const a = this.getBufferSize(n.dataset);
    a != null &&
      (o ? (i.shift(), r.shift()) : (i.pop(), r.pop()),
      this.updateBufferSize(n, a + e),
      this.updateBufferSize(t, a + e));
  }
  applyRowSpan(e, n, t) {
    const i = (r) => {
      r != null &&
        (r.gutter.style.setProperty('grid-row', `span ${t}`),
        r.content.style.setProperty('grid-row', `span ${t}`));
    };
    if (e === 'unified' && !Array.isArray(n)) i(n);
    else if (e === 'split' && Array.isArray(n)) (i(n[0]), i(n[1]));
    else throw new Error('dun fuuuuked up');
  }
  trimColumnRows(e, n, t) {
    let i = 0,
      r = 0,
      o = 0,
      a = !1;
    const l = t >= 0;
    if (e == null) return 0;
    const s = Array.from(e.content.children),
      f = Array.from(e.gutter.children);
    if (s.length !== f.length) throw new Error('FileDiff.trimColumnRows: columns do not match');
    for (; o < s.length && !(n <= 0 && !l && !a); ) {
      const d = f[o],
        u = s[o];
      if ((o++, !(d instanceof HTMLElement) || !(u instanceof HTMLElement)))
        throw (
          console.error({ gutterElement: d, contentElement: u }),
          new Error('FileDiff.trimColumnRows: invalid row elements')
        );
      if (
        a &&
        ((a = !1),
        (d.dataset.gutterBuffer === 'annotation' && 'lineAnnotation' in u.dataset) ||
          (d.dataset.gutterBuffer === 'metadata' && 'noNewline' in u.dataset))
      ) {
        (d.remove(), u.remove(), r++);
        continue;
      }
      if ('lineIndex' in d.dataset && 'lineIndex' in u.dataset) {
        ((n > 0 || (l && i >= t)) &&
          (d.remove(), u.remove(), n > 0 && (n--, n === 0 && (a = !0)), r++),
          i++);
        continue;
      }
      if ('separator' in d.dataset && 'separator' in u.dataset) {
        (n > 0 || (l && i >= t)) && (d.remove(), u.remove(), r++);
        continue;
      }
      if (d.dataset.gutterBuffer === 'annotation' && 'lineAnnotation' in u.dataset) {
        (n > 0 || (l && i >= t)) && (d.remove(), u.remove(), r++);
        continue;
      }
      if (d.dataset.gutterBuffer === 'metadata' && 'noNewline' in u.dataset) {
        (n > 0 || (l && i >= t)) && (d.remove(), u.remove(), r++);
        continue;
      }
      if (d.dataset.gutterBuffer === 'buffer' && 'contentBuffer' in u.dataset) {
        const c = this.getBufferSize(u.dataset);
        if (c == null) throw new Error('FileDiff.trimColumnRows: invalid element');
        if (n > 0) {
          const h = Math.min(n, c),
            g = c - h;
          (g > 0
            ? (this.updateBufferSize(d, g), this.updateBufferSize(u, g), (r += h))
            : (d.remove(), u.remove(), (r += c)),
            (n -= h));
        } else if (l) {
          const h = i,
            g = i + c - 1;
          if (t <= h) (d.remove(), u.remove(), (r += c));
          else if (t <= g) {
            const b = g - t + 1,
              x = c - b;
            (this.updateBufferSize(d, x), this.updateBufferSize(u, x), (r += b));
          }
        }
        i += c;
        continue;
      }
      throw (
        console.error({ gutterElement: d, contentElement: u }),
        new Error('FileDiff.trimColumnRows: unknown row elements')
      );
    }
    return r;
  }
  trimColumns({
    columns: e,
    diffStyle: n,
    overlapEnd: t,
    overlapStart: i,
    previousStart: r,
    trimEnd: o,
    trimStart: a,
  }) {
    const l = Math.max(0, i - r),
      s = t - r;
    if (s < 0) throw new Error('FileDiff.trimColumns: overlap ends before previous');
    const f = a > 0,
      d = o > 0;
    if (!f && !d) return 0;
    const u = f ? l : 0,
      c = d ? s : -1;
    if (n === 'unified' && !Array.isArray(e)) return this.trimColumnRows(e, u, c);
    if (n === 'split' && Array.isArray(e)) {
      const h = this.trimColumnRows(e[0], u, c),
        g = this.trimColumnRows(e[1], u, c);
      if (e[0] != null && e[1] != null && h !== g)
        throw new Error('FileDiff.trimColumns: split columns out of sync');
      return e[0] != null ? h : g;
    } else
      throw (
        console.error({ diffStyle: n, columns: e }),
        new Error('FileDiff.trimColumns: Invalid columns for diffType')
      );
  }
  getBufferSize(e) {
    const n = Number.parseInt(e?.bufferSize ?? '', 10);
    return Number.isNaN(n) ? void 0 : n;
  }
  updateBufferSize(e, n) {
    ((e.dataset.bufferSize = `${n}`),
      e.style.setProperty('grid-row', `span ${n}`),
      e.style.setProperty('min-height', `calc(${n} * 1lh)`));
  }
  getCodeColumns(e, n, t, i) {
    function r(o) {
      if (o == null) return;
      const a = o.children[0],
        l = o.children[1];
      if (
        !(
          !(a instanceof HTMLElement) ||
          !(l instanceof HTMLElement) ||
          a.dataset.gutter == null ||
          l.dataset.content == null
        )
      )
        return { gutter: a, content: l };
    }
    if (e === 'unified') return r(n);
    {
      const o = r(t),
        a = r(i);
      return o != null || a != null ? [o, a] : void 0;
    }
  }
  applyBuffers(e, n) {
    const { disableVirtualizationBuffers: t = !1 } = this.options;
    if (t || n == null) {
      (this.bufferBefore != null && (this.bufferBefore.remove(), (this.bufferBefore = void 0)),
        this.bufferAfter != null && (this.bufferAfter.remove(), (this.bufferAfter = void 0)));
      return;
    }
    (n.bufferBefore > 0
      ? (this.bufferBefore == null &&
          ((this.bufferBefore = document.createElement('div')),
          (this.bufferBefore.dataset.virtualizerBuffer = 'before'),
          e.before(this.bufferBefore)),
        this.bufferBefore.style.setProperty('height', `${n.bufferBefore}px`),
        this.bufferBefore.style.setProperty('contain', 'strict'))
      : this.bufferBefore != null && (this.bufferBefore.remove(), (this.bufferBefore = void 0)),
      n.bufferAfter > 0
        ? (this.bufferAfter == null &&
            ((this.bufferAfter = document.createElement('div')),
            (this.bufferAfter.dataset.virtualizerBuffer = 'after'),
            e.after(this.bufferAfter)),
          this.bufferAfter.style.setProperty('height', `${n.bufferAfter}px`),
          this.bufferAfter.style.setProperty('contain', 'strict'))
        : this.bufferAfter != null && (this.bufferAfter.remove(), (this.bufferAfter = void 0)));
  }
  applyPreNodeAttributes(e, { additionsContentAST: n, deletionsContentAST: t, totalLines: i }, r) {
    const {
        diffIndicators: o = 'bars',
        disableBackground: a = !1,
        disableLineNumbers: l = !1,
        overflow: s = 'scroll',
        diffStyle: f = 'split',
      } = this.options,
      d = {
        type: 'diff',
        diffIndicators: o,
        disableBackground: a,
        disableLineNumbers: l,
        overflow: s,
        split: f === 'unified' ? !1 : n != null && t != null,
        totalLines: i,
        customProperties: r,
      };
    ui(d, this.appliedPreAttributes) || (Ci(e, d), (this.appliedPreAttributes = d));
  }
  applyErrorToDOM(e, n) {
    this.cleanupErrorWrapper();
    const t = this.getOrCreatePreNode(n);
    ((t.innerHTML = ''), t.remove(), (this.pre = void 0), (this.appliedPreAttributes = void 0));
    const i = n.shadowRoot ?? n.attachShadow({ mode: 'open' });
    ((this.errorWrapper ??= document.createElement('div')),
      (this.errorWrapper.dataset.errorWrapper = ''),
      (this.errorWrapper.innerHTML = ''),
      i.appendChild(this.errorWrapper));
    const r = document.createElement('div');
    ((r.dataset.errorMessage = ''), (r.innerText = e.message), this.errorWrapper.appendChild(r));
    const o = document.createElement('pre');
    ((o.dataset.errorStack = ''),
      (o.innerText = e.stack ?? 'No Error Stack'),
      this.errorWrapper.appendChild(o));
  }
  cleanupErrorWrapper() {
    (this.errorWrapper?.remove(), (this.errorWrapper = void 0));
  }
};
function Sn(e) {
  if (!(e == null || e.type !== 'element')) return e.children ?? [];
}
function Gi(e, n) {
  const t = { ...rt, ...n };
  return ((t.hunkSeparatorHeight = _i(e, n?.hunkSeparatorHeight)), t);
}
function _i(e, n) {
  if (n != null) return n;
  switch (e) {
    case 'simple':
      return 4;
    case 'metadata':
    case 'line-info':
    case 'line-info-basic':
    case 'custom':
      return 32;
  }
}
let qi = -1;
var Vi = class extends On {
  __id = `little-virtualized-file-diff:${++qi}`;
  top;
  height = 0;
  metrics;
  heightCache = new Map();
  isVisible = !1;
  virtualizer;
  constructor(e, n, t, i, r = !1) {
    super(e, i, r);
    const { hunkSeparators: o = 'line-info' } = this.options;
    ((this.virtualizer = n), (this.metrics = Gi(typeof o == 'function' ? 'custom' : o, t)));
  }
  getLineHeight(e, n = !1) {
    const t = this.heightCache.get(e);
    if (t != null) return t;
    const i = n ? 2 : 1;
    return this.metrics.lineHeight * i;
  }
  setOptions(e) {
    if (e == null) return;
    const n = this.options.diffStyle,
      t = this.options.overflow,
      i = this.options.collapsed;
    (super.setOptions(e),
      (n !== this.options.diffStyle ||
        t !== this.options.overflow ||
        i !== this.options.collapsed) &&
        (this.heightCache.clear(), this.computeApproximateSize(), (this.renderRange = void 0)),
      this.virtualizer.instanceChanged(this));
  }
  reconcileHeights() {
    const { overflow: e = 'scroll' } = this.options;
    if (
      (this.fileContainer != null &&
        (this.top = this.virtualizer.getOffsetInScrollContainer(this.fileContainer)),
      this.fileContainer == null || this.fileDiff == null)
    ) {
      this.height = 0;
      return;
    }
    if (
      e === 'scroll' &&
      this.lineAnnotations.length === 0 &&
      !this.virtualizer.config.resizeDebugging
    )
      return;
    const n = this.getDiffStyle();
    let t = !1;
    const i = n === 'split' ? [this.codeDeletions, this.codeAdditions] : [this.codeUnified];
    for (const r of i) {
      if (r == null) continue;
      const o = r.children[1];
      if (o instanceof HTMLElement)
        for (const a of o.children) {
          if (!(a instanceof HTMLElement)) continue;
          const l = a.dataset.lineIndex;
          if (l == null) continue;
          const s = Xi(l, n);
          let f = a.getBoundingClientRect().height,
            d = !1;
          a.nextElementSibling instanceof HTMLElement &&
            ('lineAnnotation' in a.nextElementSibling.dataset ||
              'noNewline' in a.nextElementSibling.dataset) &&
            ('noNewline' in a.nextElementSibling.dataset && (d = !0),
            (f += a.nextElementSibling.getBoundingClientRect().height));
          const u = this.getLineHeight(s, d);
          f !== u &&
            ((t = !0),
            f === this.metrics.lineHeight * (d ? 2 : 1)
              ? this.heightCache.delete(s)
              : this.heightCache.set(s, f));
        }
    }
    (t || this.virtualizer.config.resizeDebugging) && this.computeApproximateSize();
  }
  onRender = (e) =>
    this.fileContainer == null
      ? !1
      : (e && (this.top = this.virtualizer.getOffsetInScrollContainer(this.fileContainer)),
        this.render());
  cleanUp() {
    (this.fileContainer != null && this.virtualizer.disconnect(this.fileContainer),
      super.cleanUp());
  }
  expandHunk = (e, n, t) => {
    (this.hunksRenderer.expandHunk(e, n, t),
      this.computeApproximateSize(),
      (this.renderRange = void 0),
      this.virtualizer.instanceChanged(this));
  };
  setVisibility(e) {
    this.fileContainer != null &&
      ((this.renderRange = void 0),
      e && !this.isVisible
        ? ((this.top = this.virtualizer.getOffsetInScrollContainer(this.fileContainer)),
          (this.isVisible = !0))
        : !e && this.isVisible && ((this.isVisible = !1), this.rerender()));
  }
  computeApproximateSize() {
    const e = this.height === 0;
    if (((this.height = 0), this.fileDiff == null)) return;
    const {
        disableFileHeader: n = !1,
        expandUnchanged: t = !1,
        collapsed: i = !1,
        collapsedContextThreshold: r = le,
        hunkSeparators: o = 'line-info',
      } = this.options,
      { diffHeaderHeight: a, fileGap: l, hunkSeparatorHeight: s } = this.metrics,
      f = this.getDiffStyle(),
      d = o !== 'simple' && o !== 'metadata' && o !== 'line-info-basic' ? l : 0;
    if (
      (n ? o !== 'simple' && o !== 'metadata' && (this.height += l) : (this.height += a),
      !i &&
        (Ie({
          diff: this.fileDiff,
          diffStyle: f,
          expandedHunks: t ? !0 : this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: r,
          callback: ({
            hunkIndex: u,
            collapsedBefore: c,
            collapsedAfter: h,
            deletionLine: g,
            additionLine: b,
          }) => {
            const x = b != null ? b.splitLineIndex : g.splitLineIndex,
              C = b != null ? b.unifiedLineIndex : g.unifiedLineIndex,
              p = (b?.noEOFCR ?? !1) || (g?.noEOFCR ?? !1);
            (c > 0 && (u > 0 && (this.height += d), (this.height += s + d)),
              (this.height += this.getLineHeight(f === 'split' ? x : C, p)),
              h > 0 && o !== 'simple' && (this.height += d + s));
          },
        }),
        this.fileDiff.hunks.length > 0 && (this.height += l),
        this.fileContainer != null && this.virtualizer.config.resizeDebugging && !e))
    ) {
      const u = this.fileContainer.getBoundingClientRect();
      u.height !== this.height
        ? console.log('VirtualizedFileDiff.computeApproximateSize: computed height doesnt match', {
            name: this.fileDiff.name,
            elementHeight: u.height,
            computedHeight: this.height,
          })
        : console.log('VirtualizedFileDiff.computeApproximateSize: computed height IS CORRECT');
    }
  }
  render({ fileContainer: e, oldFile: n, newFile: t, fileDiff: i, ...r } = {}) {
    const o = this.fileContainer == null;
    if (
      ((this.fileDiff ??= i ?? (n != null && t != null ? Te(n, t) : void 0)),
      (e = this.getOrCreateFileContainer(e)),
      this.fileDiff == null)
    )
      return (
        console.error(
          'VirtualizedFileDiff.render: attempting to virtually render when we dont have the correct data',
        ),
        !1
      );
    if (
      (o
        ? (this.computeApproximateSize(),
          this.virtualizer.connect(e, this),
          (this.top ??= this.virtualizer.getOffsetInScrollContainer(e)),
          (this.isVisible = this.virtualizer.isInstanceVisible(this.top, this.height)))
        : (this.top ??= this.virtualizer.getOffsetInScrollContainer(e)),
      !this.isVisible)
    )
      return this.renderPlaceholder(this.height);
    const a = this.virtualizer.getWindowSpecs(),
      l = this.computeRenderRangeFromWindow(this.fileDiff, this.top, a);
    return super.render({
      fileDiff: this.fileDiff,
      fileContainer: e,
      renderRange: l,
      oldFile: n,
      newFile: t,
      ...r,
    });
  }
  getDiffStyle() {
    return this.options.diffStyle ?? 'split';
  }
  getExpandedRegion(e, n, t) {
    if (t <= 0 || e)
      return { fromStart: 0, fromEnd: 0, collapsedLines: Math.max(t, 0), renderAll: !1 };
    const { expandUnchanged: i = !1, collapsedContextThreshold: r = le } = this.options;
    if (i || t <= r) return { fromStart: t, fromEnd: 0, collapsedLines: 0, renderAll: !0 };
    const o = this.hunksRenderer.getExpandedHunk(n),
      a = Math.min(Math.max(o.fromStart, 0), t),
      l = Math.min(Math.max(o.fromEnd, 0), t),
      s = a + l,
      f = s >= t;
    return { fromStart: a, fromEnd: l, collapsedLines: Math.max(t - s, 0), renderAll: f };
  }
  getExpandedLineCount(e, n) {
    let t = 0;
    if (e.isPartial) {
      for (const r of e.hunks) t += n === 'split' ? r.splitLineCount : r.unifiedLineCount;
      return t;
    }
    for (const [r, o] of e.hunks.entries()) {
      const a = n === 'split' ? o.splitLineCount : o.unifiedLineCount;
      t += a;
      const l = Math.max(o.collapsedBefore, 0),
        { fromStart: s, fromEnd: f, renderAll: d } = this.getExpandedRegion(e.isPartial, r, l);
      l > 0 && (t += d ? l : s + f);
    }
    const i = e.hunks.at(-1);
    if (i != null && Ki(e)) {
      const r = e.additionLines.length - (i.additionLineIndex + i.additionCount),
        o = e.deletionLines.length - (i.deletionLineIndex + i.deletionCount);
      if (i != null && r !== o)
        throw new Error(
          `VirtualizedFileDiff: trailing context mismatch (additions=${r}, deletions=${o}) for ${e.name}`,
        );
      const a = Math.min(r, o);
      if (i != null && a > 0) {
        const { fromStart: l, renderAll: s } = this.getExpandedRegion(
          e.isPartial,
          e.hunks.length,
          a,
        );
        t += s ? a : l;
      }
    }
    return t;
  }
  computeRenderRangeFromWindow(e, n, { top: t, bottom: i }) {
    const {
        disableFileHeader: r = !1,
        expandUnchanged: o = !1,
        collapsedContextThreshold: a = le,
        hunkSeparators: l = 'line-info',
      } = this.options,
      {
        diffHeaderHeight: s,
        fileGap: f,
        hunkLineCount: d,
        hunkSeparatorHeight: u,
        lineHeight: c,
      } = this.metrics,
      h = this.getDiffStyle(),
      g = this.height,
      b = this.getExpandedLineCount(e, h),
      x = r ? f : s;
    if (n < t - g || n > i)
      return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: g - x - f };
    if (b <= d || e.hunks.length === 0)
      return { startingLine: 0, totalLines: d, bufferBefore: 0, bufferAfter: 0 };
    const C = Math.ceil(Math.max(i - t, 0) / c),
      p = Math.ceil(C / d) * d + d,
      S = p / d,
      v = S,
      k = [],
      m = (t + i) / 2,
      y = l === 'simple' || l === 'metadata' || l === 'line-info-basic' ? 0 : f;
    let w = n + x,
      E = 0,
      L,
      T,
      M;
    if (
      (Ie({
        diff: e,
        diffStyle: h,
        expandedHunks: o ? !0 : this.hunksRenderer.getExpandedHunksMap(),
        collapsedContextThreshold: a,
        callback: ({
          hunkIndex: oe,
          collapsedBefore: ce,
          collapsedAfter: xe,
          deletionLine: te,
          additionLine: Y,
        }) => {
          const D = Y != null ? Y.splitLineIndex : te.splitLineIndex,
            F = Y != null ? Y.unifiedLineIndex : te.unifiedLineIndex,
            $ = (Y?.noEOFCR ?? !1) || (te?.noEOFCR ?? !1);
          let Q = ce > 0 ? u + y + (oe > 0 ? y : 0) : 0;
          (oe === 0 && l === 'simple' && (Q = 0), (w += Q));
          const W = E % d === 0;
          if (W && (k.push(w - (n + x + Q)), M != null)) {
            if (M <= 0) return !0;
            M--;
          }
          const j = this.getLineHeight(h === 'split' ? D : F, $),
            ue = Math.floor(E / d);
          return (
            w > t - j && w < i && (L ??= ue),
            T == null && w + j > m && (T = ue),
            M == null && w >= i && W && (M = v),
            E++,
            (w += j),
            xe > 0 && l !== 'simple' && (w += u + y),
            !1
          );
        },
      }),
      L == null)
    )
      return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: g - x - f };
    const R = k.length;
    T ??= L;
    const O = Math.round(T - S / 2),
      re = Math.max(0, R - S),
      ee = Math.max(0, Math.min(O, re)),
      P = ee * d,
      N = O < 0 ? p + O * d : p,
      U = k[ee] ?? 0,
      ne = ee + N / d;
    return {
      startingLine: P,
      totalLines: N,
      bufferBefore: U,
      bufferAfter: ne < k.length ? g - x - k[ne] - f : g - (w - n) - f,
    };
  }
};
function Ki(e) {
  const n = e.hunks.at(-1);
  return n == null || e.isPartial || e.additionLines.length === 0 || e.deletionLines.length === 0
    ? !1
    : n.additionLineIndex + n.additionCount < e.additionLines.length ||
        n.deletionLineIndex + n.deletionCount < e.deletionLines.length;
}
function Xi(e, n) {
  const [t, i] = e.split(',').map(Number);
  return n === 'split' ? i : t;
}
const Yi = typeof window > 'u' ? H.useEffect : H.useLayoutEffect;
function Fn({
  fileDiff: e,
  options: n,
  lineAnnotations: t,
  selectedLines: i,
  prerenderedHTML: r,
  metrics: o,
  hasGutterRenderUtility: a,
  hasCustomHeader: l,
  disableWorkerPool: s,
}) {
  const f = lt(),
    d = H.useContext(qt),
    u = H.useRef(null),
    c = Vt((h) => {
      if (h != null) {
        if (u.current != null)
          throw new Error(
            'useFileDiffInstance: An instance should not already exist when a node is created',
          );
        (f != null
          ? (u.current = new Vi(
              je({ hasCustomHeader: l, hasGutterRenderUtility: a, options: n }),
              f,
              o,
              s ? void 0 : d,
              !0,
            ))
          : (u.current = new On(
              je({ hasCustomHeader: l, hasGutterRenderUtility: a, options: n }),
              s ? void 0 : d,
              !0,
            )),
          u.current.hydrate({
            fileDiff: e,
            fileContainer: h,
            lineAnnotations: t,
            prerenderedHTML: r,
          }));
      } else {
        if (u.current == null)
          throw new Error('useFileDiffInstance: A FileDiff instance should exist when unmounting');
        (u.current.cleanUp(), (u.current = null));
      }
    });
  return (
    Yi(() => {
      const { current: h } = u;
      if (h == null) return;
      const g = je({ hasCustomHeader: l, hasGutterRenderUtility: a, options: n }),
        b = !Ei(h.options, g);
      (h.setOptions(g),
        h.render({ forceRender: b, fileDiff: e, lineAnnotations: t }),
        i !== void 0 && h.setSelectedLines(i));
    }),
    { ref: c, getHoveredLine: H.useCallback(() => u.current?.getHoveredLine(), []) }
  );
}
function je({ options: e, hasCustomHeader: n, hasGutterRenderUtility: t }) {
  return t || n
    ? { ...e, renderCustomHeader: n ? Qe : void 0, renderGutterUtility: t ? Qe : void 0 }
    : e;
}
function Qi({
  oldFile: e,
  newFile: n,
  options: t,
  metrics: i,
  lineAnnotations: r,
  selectedLines: o,
  className: a,
  style: l,
  prerenderedHTML: s,
  renderAnnotation: f,
  renderCustomHeader: d,
  renderHeaderPrefix: u,
  renderHeaderMetadata: c,
  renderGutterUtility: h,
  renderHoverUtility: g,
  disableWorkerPool: b = !1,
}) {
  const x = H.useMemo(() => Te(e, n), [e, n]),
    { ref: C, getHoveredLine: p } = Fn({
      fileDiff: x,
      options: t,
      metrics: i,
      lineAnnotations: r,
      selectedLines: o,
      prerenderedHTML: s,
      hasGutterRenderUtility: h != null || g != null,
      hasCustomHeader: d != null,
      disableWorkerPool: b,
    });
  return A.jsx(ge, {
    ref: C,
    className: a,
    style: l,
    children: In(
      Un({
        fileDiff: x,
        renderCustomHeader: d,
        renderHeaderPrefix: u,
        renderHeaderMetadata: c,
        renderAnnotation: f,
        lineAnnotations: r,
        renderGutterUtility: h,
        renderHoverUtility: g,
        getHoveredLine: p,
      }),
      s,
    ),
  });
}
function Ji(e) {
  const n = Wi(e);
  if (n.length !== 1)
    throw (
      console.error(n),
      new Error('PatchDiff: Provided patch must include only 1 patch, with 1 diff')
    );
  const { files: t } = n[0];
  if (t.length !== 1)
    throw (
      console.error(t),
      new Error('FileDiff: Provided patch must contain exactly 1 file diff')
    );
  return t[0];
}
function Zi({
  patch: e,
  options: n,
  metrics: t,
  lineAnnotations: i,
  selectedLines: r,
  className: o,
  style: a,
  prerenderedHTML: l,
  renderAnnotation: s,
  renderCustomHeader: f,
  renderHeaderPrefix: d,
  renderHeaderMetadata: u,
  renderGutterUtility: c,
  renderHoverUtility: h,
  disableWorkerPool: g = !1,
}) {
  const b = er(e),
    { ref: x, getHoveredLine: C } = Fn({
      fileDiff: b,
      options: n,
      metrics: t,
      lineAnnotations: i,
      selectedLines: r,
      prerenderedHTML: l,
      hasGutterRenderUtility: c != null || h != null,
      hasCustomHeader: f != null,
      disableWorkerPool: g,
    });
  return A.jsx(ge, {
    ref: x,
    className: o,
    style: a,
    children: In(
      Un({
        fileDiff: b,
        renderCustomHeader: f,
        renderHeaderPrefix: d,
        renderHeaderMetadata: u,
        renderAnnotation: s,
        lineAnnotations: i,
        renderGutterUtility: c,
        renderHoverUtility: h,
        getHoveredLine: C,
      }),
      l,
    ),
  });
}
function er(e) {
  return H.useMemo(() => Ji(e), [e]);
}
const nr = (e, n) => {
    const t = e.split(`
`),
      i = n.split(`
`),
      r = new Set(t),
      o = new Set(i);
    let a = 0,
      l = 0;
    for (const s of t) o.has(s) || a++;
    for (const s of i) r.has(s) || l++;
    return { additions: l, deletions: a };
  },
  $n = H.memo(
    ({
      oldContent: e,
      newContent: n,
      language: t,
      fileName: i,
      viewMode: r = 'split',
      showHeader: o = !0,
      variant: a = 'filled',
      className: l,
      classNames: s,
      styles: f,
      actionsRender: d,
      diffOptions: u,
      ...c
    }) => {
      const h = H.useMemo(() => i || t || 'diff', [i, t]),
        { additions: g, deletions: b } = H.useMemo(() => nr(e, n), [e, n]),
        x = H.useMemo(
          () => (d ? d({ newContent: n, oldContent: e, originalNode: null }) : null),
          [d, e, n],
        ),
        C = H.useMemo(() => ({ contents: e, lang: t, name: i || 'file' }), [e, t, i]),
        p = H.useMemo(() => ({ contents: n, lang: t, name: i || 'file' }), [n, t, i]),
        S = H.useMemo(() => ({ diffStyle: r, disableFileHeader: !0, ...u }), [r, u]);
      return A.jsxs(V, {
        'className': K(wn({ variant: a }), l),
        'data-code-type': 'code-diff',
        ...c,
        'children': [
          o &&
            A.jsxs('div', {
              className: K(Ln({ variant: a }), s?.header),
              style: f?.header,
              children: [
                A.jsxs(V, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    A.jsx(Cn, { filename: i || h, size: 18, type: 'file' }),
                    A.jsx('span', { children: h }),
                  ],
                }),
                A.jsxs(V, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    (b > 0 || g > 0) &&
                      A.jsxs(V, {
                        horizontal: !0,
                        className: z.stats,
                        gap: 8,
                        children: [
                          b > 0 && A.jsxs('span', { className: z.deletions, children: ['-', b] }),
                          g > 0 && A.jsxs('span', { className: z.additions, children: ['+', g] }),
                        ],
                      }),
                    x &&
                      A.jsx(V, {
                        align: 'center',
                        className: K(`${Ee}-actions`, z.actions),
                        gap: 4,
                        children: x,
                      }),
                  ],
                }),
              ],
            }),
          A.jsx('div', {
            className: K(z.body, s?.body),
            style: f?.body,
            children: A.jsx(Qi, { newFile: p, oldFile: C, options: S }),
          }),
        ],
      });
    },
  );
$n.displayName = 'CodeDiff';
var lr = $n;
const tr = (e) => {
    const n = e.split(`
`);
    let t = 0,
      i = 0;
    for (const r of n)
      r.startsWith('+') && !r.startsWith('+++')
        ? t++
        : r.startsWith('-') && !r.startsWith('---') && i++;
    return { additions: t, deletions: i };
  },
  jn = H.memo(
    ({
      patch: e,
      language: n,
      fileName: t,
      viewMode: i = 'split',
      showHeader: r = !0,
      variant: o = 'filled',
      className: a,
      classNames: l,
      styles: s,
      actionsRender: f,
      diffOptions: d,
      ...u
    }) => {
      const c = H.useMemo(() => {
          if (t) return t;
          const C = e.match(/^(?:-{3}|\+{3})\s+(?:a\/|b\/)?(.+?)(?:\t|$)/m);
          return C?.[1] ? C[1] : n || 'patch';
        }, [t, e, n]),
        { additions: h, deletions: g } = H.useMemo(() => tr(e), [e]),
        b = H.useMemo(() => (f ? f({ originalNode: null, patch: e }) : null), [f, e]),
        x = H.useMemo(() => ({ diffStyle: i, disableFileHeader: !0, ...d }), [i, d]);
      return A.jsxs(V, {
        'className': K(wn({ variant: o }), a),
        'data-code-type': 'patch-diff',
        ...u,
        'children': [
          r &&
            A.jsxs('div', {
              className: K(Ln({ variant: o }), l?.header),
              style: s?.header,
              children: [
                A.jsxs(V, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    A.jsx(Cn, { filename: t || c, size: 18, type: 'file' }),
                    A.jsx('span', { children: c }),
                  ],
                }),
                A.jsxs(V, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    (g > 0 || h > 0) &&
                      A.jsxs(V, {
                        horizontal: !0,
                        className: z.stats,
                        gap: 8,
                        children: [
                          g > 0 && A.jsxs('span', { className: z.deletions, children: ['-', g] }),
                          h > 0 && A.jsxs('span', { className: z.additions, children: ['+', h] }),
                        ],
                      }),
                    b &&
                      A.jsx(V, {
                        align: 'center',
                        className: K(`${Ee}-actions`, z.actions),
                        gap: 4,
                        children: b,
                      }),
                  ],
                }),
              ],
            }),
          A.jsx('div', {
            className: K(z.body, l?.body),
            style: s?.body,
            children: A.jsx(Zi, { options: x, patch: e }),
          }),
        ],
      });
    },
  );
jn.displayName = 'PatchDiff';
var dr = jn;
export { lr as C, dr as P };
