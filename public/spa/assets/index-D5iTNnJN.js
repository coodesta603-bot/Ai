import { renderToString as A } from './katex-BzTkCl_B.js';
import { o as F, l as b, f as M, m as w } from './index-BGyEEg7z.js';
var q = class {
  constructor(e = 'PROTECTED') {
    ((this.placeholders = []), (this.prefix = e));
  }
  add(e) {
    const n = this.placeholders.length;
    return (this.placeholders.push(e), `<<${this.prefix}_${n}>>`);
  }
  restore(e) {
    return e.replaceAll(
      new RegExp(`<<${this.prefix}_(\\d+)>>`, 'g'),
      (n, t) => this.placeholders[Number.parseInt(t)] || '',
    );
  }
  clear() {
    this.placeholders = [];
  }
};
const T = (e) => e.replaceAll(new RegExp('(?<!\\\\)\\|', 'g'), '\\vert{}');
function L(e) {
  return e.replaceAll(
    /(```[\s\S]*?```|`.*?`)|\\\[([\s\S]*?[^\\])\\\]|\\\((.*?)\\\)/g,
    (n, t, a, r) => (t !== void 0 ? t : a !== void 0 ? `$$${a}$$` : r !== void 0 ? `$${r}$` : n),
  );
}
function _(e) {
  return e.replaceAll('$\\ce{', '$\\\\ce{').replaceAll('$\\pu{', '$\\\\pu{');
}
function O(e) {
  const n = [];
  let t = e.replaceAll(
    /(```[\s\S]*?```|`[^\n`]*`)/g,
    (a) => (n.push(a), `<<CODE_${n.length - 1}>>`),
  );
  return (
    (t = t.replaceAll(/\$\$([\s\S]*?)\$\$/g, (a, r) => `$$${T(r)}$$`)),
    (t = t.replaceAll(
      new RegExp('(?<!\\\\)\\$(?!\\$)([^\\n$]*)(?<!\\\\)\\$(?!\\$)', 'g'),
      (a, r) => `$${T(r)}$`,
    )),
    (t = t.replaceAll(/<<CODE_(\d+)>>/g, (a, r) => n[Number.parseInt(r)])),
    t
  );
}
function I(e) {
  return e.replaceAll(
    /\\text\{([^}]*)\}/g,
    (n, t) => `\\text{${t.replaceAll(new RegExp('(?<!\\\\)_', 'g'), '\\_')}}`,
  );
}
function R(e) {
  const n = new q('PROTECTED');
  let t = e.replaceAll(
    new RegExp(
      '(```[\\s\\S]*?```|`[^\\n`]*`|\\$\\$[\\s\\S]*?\\$\\$|(?<!\\\\)\\$(?!\\$)(?=[\\s\\S]*?\\\\)[\\s\\S]*?(?<!\\\\)\\$(?!\\$)|\\$\\d+\\$|\\$-?\\d+(?:,-?\\d+)+\\$|\\\\\\[[\\s\\S]*?\\\\\\]|\\\\\\(.*?\\\\\\))',
      'g',
    ),
    (a) => n.add(a),
  );
  return (
    (t = t.replaceAll(
      new RegExp(
        '(?<!\\$)\\$(\\d{1,3}(?:,\\d{3})*(?:\\.\\d+)?(?:-\\d{1,3}(?:,\\d{3})*(?:\\.\\d+)?)?\\+?)(?!\\$)',
        'g',
      ),
      '\\$$$1',
    )),
    (t = n.restore(t)),
    t
  );
}
const N = (e) => {
    if ((e.match(/\$\$/g) || []).length % 2 === 1) {
      const n = e.match(/\$\$([\s\S]*)$/);
      return n ? n[1] : '';
    }
    return '';
  },
  le = (e) => {
    const n = N(e);
    if (!n) return !0;
    try {
      return (A(n, { displayMode: !0, throwOnError: !0 }), !0);
    } catch (t) {
      return (console.error(`LaTeX formula rendering error: ${t}`), !1);
    }
  };
function B(e) {
  return e.replaceAll(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g, (n) => {
    let t = n;
    const a = (t.match(new RegExp('(?<!\\\\)\\{', 'g')) || []).length,
      r = (t.match(new RegExp('(?<!\\\\)\\}', 'g')) || []).length;
    if (a > r) {
      const h = a - r,
        s = '}'.repeat(h);
      t = t.replace(/(\$\$?)$/, s + '$1');
    }
    const i = (t.match(/\\left[(.<[{|]/g) || []).length,
      c = (t.match(/\\right[).>\]|}]/g) || []).length;
    if (i > c) {
      const h = i - c,
        s = '\\right.'.repeat(h);
      t = t.replace(/(\$\$?)$/, s + '$1');
    }
    return t;
  });
}
function K(e) {
  let n = e;
  return (
    (n = n.replaceAll(/\$\s+/g, '$')),
    (n = n.replaceAll(/\s+\$/g, '$')),
    (n = n.replaceAll(/\$\$\s+/g, '$$')),
    (n = n.replaceAll(/\s+\$\$/g, '$$')),
    (n = n.replaceAll(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g, (t) => t.replaceAll(/\s{2,}/g, ' '))),
    n
  );
}
function V(e) {
  const n = [];
  let t = 0;
  const a = new RegExp(
    '\\$\\$([\\s\\S]*?)\\$\\$|(?<!\\\\)\\$(?!\\$)([\\s\\S]*?)(?<!\\\\)\\$(?!\\$)',
    'g',
  );
  let r;
  for (; (r = a.exec(e)) !== null; ) {
    t++;
    const i = r[1] || r[2],
      c = r[0].startsWith('$$');
    try {
      A(i, { displayMode: c, strict: 'warn', throwOnError: !0, trust: !1 });
    } catch (h) {
      n.push({
        formula: i.slice(0, 50) + (i.length > 50 ? '...' : ''),
        message: h instanceof Error ? h.message : String(h),
        position: r.index,
        type: c ? 'display' : 'inline',
      });
    }
  }
  return { errors: n, totalExpressions: t, valid: n.length === 0 };
}
function X(e, n = !1) {
  if (!n) return e;
  let t = e;
  return (
    (t = t.replaceAll(/([\u3040-\u30FF\u4E00-\u9FA5])(\$)/g, '$1 $2')),
    (t = t.replaceAll(/(\$)([\u3040-\u30FF\u4E00-\u9FA5])/g, '$1 $2')),
    t
  );
}
function J(e, n = {}) {
  const {
    addCJKSpaces: t = !1,
    convertBrackets: a = !0,
    escapeCurrency: r = !0,
    escapeMhchem: i = !0,
    escapePipes: c = !0,
    escapeUnderscores: h = !0,
    fixErrors: s = !1,
    handleCJK: m = !1,
    normalizeSpacing: $ = !1,
    throwOnValidationError: x = !1,
    validate: d = !1,
  } = n;
  let o = e;
  if (
    (r && (o = R(o)),
    a && (o = L(o)),
    i && (o = _(o)),
    c && (o = O(o)),
    h && (o = I(o)),
    s && (o = B(o)),
    $ && (o = K(o)),
    m && (o = X(o, t)),
    d)
  ) {
    const p = V(o);
    if (!p.valid) {
      const u = `LaTeX validation failed (${p.errors.length}/${p.totalExpressions} expressions have errors):
${p.errors.map(
  (g) => `  - [${g.type}] at position ${g.position}: ${g.message}
    Formula: ${g.formula}`,
).join(`
`)}`;
      if (x) throw new Error(u);
      console.warn(u);
    }
  }
  return o;
}
const U = 50,
  E = new Map(),
  se = (e, n) => {
    if (E.size >= U) {
      const t = E.keys().next().value;
      t && E.delete(t);
    }
    E.set(e, n);
  },
  j = (e, n = 0) => {
    if (n === 0) return e;
    const t = Array.from({ length: n })
        .fill('')
        .map((o, p) => p + 1),
      a = new RegExp(`\\[(${t.join('|')})\\]`, 'g'),
      r = [];
    let i;
    for (; (i = a.exec(e)) !== null; ) r.push({ id: i[1], index: i.index, length: i[0].length });
    const c = [],
      h = /\$\$([\s\S]*?)\$\$/g;
    for (; (i = h.exec(e)) !== null; ) c.push({ end: i.index + i[0].length - 1, start: i.index });
    const s = /\$([^$]*)\$/g;
    for (; (i = s.exec(e)) !== null; ) c.push({ end: i.index + i[0].length - 1, start: i.index });
    const m = /```([\s\S]*?)```/g;
    for (; (i = m.exec(e)) !== null; ) c.push({ end: i.index + i[0].length - 1, start: i.index });
    const $ = /`([^`]*)`/g;
    for (; (i = $.exec(e)) !== null; ) c.push({ end: i.index + i[0].length - 1, start: i.index });
    const x = r.filter((o) => !c.some((p) => o.index >= p.start && o.index <= p.end));
    let d = e;
    for (let o = x.length - 1; o >= 0; o--) {
      const p = x[o],
        u = d.slice(0, Math.max(0, p.index)),
        g = d.slice(Math.max(0, p.index + p.length));
      d = u + `[#citation-${p.id}](citation-${p.id})` + g;
    }
    return d.replaceAll('][', '] [');
  },
  oe = (e, { enableCustomFootnotes: n, enableLatex: t, citationsLength: a } = {}) => {
    let r = e;
    return (t && (r = J(r)), n && (r = j(r, a)), r);
  };
function W() {
  return {
    enter: { mathFlow: e, mathFlowFenceMeta: n, mathText: i },
    exit: {
      mathFlow: r,
      mathFlowFence: a,
      mathFlowFenceMeta: t,
      mathFlowValue: h,
      mathText: c,
      mathTextData: h,
    },
  };
  function e(s) {
    const m = {
      type: 'element',
      tagName: 'code',
      properties: { className: ['language-math', 'math-display'] },
      children: [],
    };
    this.enter({ type: 'math', meta: null, value: '', data: { hName: 'pre', hChildren: [m] } }, s);
  }
  function n() {
    this.buffer();
  }
  function t() {
    const s = this.resume(),
      m = this.stack[this.stack.length - 1];
    (F(m.type === 'math'), (m.meta = s));
  }
  function a() {
    this.data.mathFlowInside || (this.buffer(), (this.data.mathFlowInside = !0));
  }
  function r(s) {
    const m = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ''),
      $ = this.stack[this.stack.length - 1];
    (F($.type === 'math'), this.exit(s), ($.value = m));
    const x = $.data.hChildren[0];
    (F(x.type === 'element'),
      F(x.tagName === 'code'),
      x.children.push({ type: 'text', value: m }),
      (this.data.mathFlowInside = void 0));
  }
  function i(s) {
    (this.enter(
      {
        type: 'inlineMath',
        value: '',
        data: {
          hName: 'code',
          hProperties: { className: ['language-math', 'math-inline'] },
          hChildren: [],
        },
      },
      s,
    ),
      this.buffer());
  }
  function c(s) {
    const m = this.resume(),
      $ = this.stack[this.stack.length - 1];
    (F($.type === 'inlineMath'),
      this.exit(s),
      ($.value = m),
      $.data.hChildren.push({ type: 'text', value: m }));
  }
  function h(s) {
    (this.config.enter.data.call(this, s), this.config.exit.data.call(this, s));
  }
}
function H(e) {
  let n = (e || {}).singleDollarTextMath;
  return (
    n == null && (n = !0),
    (a.peek = r),
    {
      unsafe: [
        { character: '\r', inConstruct: 'mathFlowMeta' },
        {
          character: `
`,
          inConstruct: 'mathFlowMeta',
        },
        { character: '$', after: n ? void 0 : '\\$', inConstruct: 'phrasing' },
        { character: '$', inConstruct: 'mathFlowMeta' },
        { atBreak: !0, character: '$', after: '\\$' },
      ],
      handlers: { math: t, inlineMath: a },
    }
  );
  function t(i, c, h, s) {
    const m = i.value || '',
      $ = h.createTracker(s),
      x = '$'.repeat(Math.max(b(m, '$') + 1, 2)),
      d = h.enter('mathFlow');
    let o = $.move(x);
    if (i.meta) {
      const p = h.enter('mathFlowMeta');
      ((o += $.move(
        h.safe(i.meta, {
          after: `
`,
          before: o,
          encode: ['$'],
          ...$.current(),
        }),
      )),
        p());
    }
    return (
      (o += $.move(`
`)),
      m &&
        (o += $.move(
          m +
            `
`,
        )),
      (o += $.move(x)),
      d(),
      o
    );
  }
  function a(i, c, h) {
    let s = i.value || '',
      m = 1;
    for (n || m++; new RegExp('(^|[^$])' + '\\$'.repeat(m) + '([^$]|$)').test(s); ) m++;
    const $ = '$'.repeat(m);
    /[^ \r\n]/.test(s) &&
      ((/^[ \r\n]/.test(s) && /[ \r\n]$/.test(s)) || /^\$|\$$/.test(s)) &&
      (s = ' ' + s + ' ');
    let x = -1;
    for (; ++x < h.unsafe.length; ) {
      const d = h.unsafe[x];
      if (!d.atBreak) continue;
      const o = h.compilePattern(d);
      let p;
      for (; (p = o.exec(s)); ) {
        let u = p.index;
        (s.codePointAt(u) === 10 && s.codePointAt(u - 1) === 13 && u--,
          (s = s.slice(0, u) + ' ' + s.slice(p.index + 1)));
      }
    }
    return $ + s + $;
  }
  function r() {
    return '$';
  }
}
const Z = { tokenize: G, concrete: !0, name: 'mathFlow' },
  C = { tokenize: Q, partial: !0 };
function G(e, n, t) {
  const a = this,
    r = a.events[a.events.length - 1],
    i = r && r[1].type === 'linePrefix' ? r[2].sliceSerialize(r[1], !0).length : 0;
  let c = 0;
  return h;
  function h(l) {
    return (e.enter('mathFlow'), e.enter('mathFlowFence'), e.enter('mathFlowFenceSequence'), s(l));
  }
  function s(l) {
    return l === 36
      ? (e.consume(l), c++, s)
      : c < 2
        ? t(l)
        : (e.exit('mathFlowFenceSequence'), M(e, m, 'whitespace')(l));
  }
  function m(l) {
    return l === null || w(l)
      ? x(l)
      : (e.enter('mathFlowFenceMeta'), e.enter('chunkString', { contentType: 'string' }), $(l));
  }
  function $(l) {
    return l === null || w(l)
      ? (e.exit('chunkString'), e.exit('mathFlowFenceMeta'), x(l))
      : l === 36
        ? t(l)
        : (e.consume(l), $);
  }
  function x(l) {
    return (e.exit('mathFlowFence'), a.interrupt ? n(l) : e.attempt(C, d, g)(l));
  }
  function d(l) {
    return e.attempt({ tokenize: v, partial: !0 }, g, o)(l);
  }
  function o(l) {
    return (i ? M(e, p, 'linePrefix', i + 1) : p)(l);
  }
  function p(l) {
    return l === null ? g(l) : w(l) ? e.attempt(C, d, g)(l) : (e.enter('mathFlowValue'), u(l));
  }
  function u(l) {
    return l === null || w(l) ? (e.exit('mathFlowValue'), p(l)) : (e.consume(l), u);
  }
  function g(l) {
    return (e.exit('mathFlow'), n(l));
  }
  function v(l, z, y) {
    let S = 0;
    return M(
      l,
      D,
      'linePrefix',
      a.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
    );
    function D(f) {
      return (l.enter('mathFlowFence'), l.enter('mathFlowFenceSequence'), k(f));
    }
    function k(f) {
      return f === 36
        ? (S++, l.consume(f), k)
        : S < c
          ? y(f)
          : (l.exit('mathFlowFenceSequence'), M(l, P, 'whitespace')(f));
    }
    function P(f) {
      return f === null || w(f) ? (l.exit('mathFlowFence'), z(f)) : y(f);
    }
  }
}
function Q(e, n, t) {
  const a = this;
  return r;
  function r(c) {
    return c === null ? n(c) : (e.enter('lineEnding'), e.consume(c), e.exit('lineEnding'), i);
  }
  function i(c) {
    return a.parser.lazy[a.now().line] ? t(c) : n(c);
  }
}
function Y(e) {
  let t = (e || {}).singleDollarTextMath;
  return (t == null && (t = !0), { tokenize: a, resolve: ee, previous: te, name: 'mathText' });
  function a(r, i, c) {
    let h = 0,
      s,
      m;
    return $;
    function $(u) {
      return (r.enter('mathText'), r.enter('mathTextSequence'), x(u));
    }
    function x(u) {
      return u === 36
        ? (r.consume(u), h++, x)
        : h < 2 && !t
          ? c(u)
          : (r.exit('mathTextSequence'), d(u));
    }
    function d(u) {
      return u === null
        ? c(u)
        : u === 36
          ? ((m = r.enter('mathTextSequence')), (s = 0), p(u))
          : u === 32
            ? (r.enter('space'), r.consume(u), r.exit('space'), d)
            : w(u)
              ? (r.enter('lineEnding'), r.consume(u), r.exit('lineEnding'), d)
              : (r.enter('mathTextData'), o(u));
    }
    function o(u) {
      return u === null || u === 32 || u === 36 || w(u)
        ? (r.exit('mathTextData'), d(u))
        : (r.consume(u), o);
    }
    function p(u) {
      return u === 36
        ? (r.consume(u), s++, p)
        : s === h
          ? (r.exit('mathTextSequence'), r.exit('mathText'), i(u))
          : ((m.type = 'mathTextData'), o(u));
    }
  }
}
function ee(e) {
  let n = e.length - 4,
    t = 3,
    a,
    r;
  if (
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space') &&
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space')
  ) {
    for (a = t; ++a < n; )
      if (e[a][1].type === 'mathTextData') {
        ((e[n][1].type = 'mathTextPadding'),
          (e[t][1].type = 'mathTextPadding'),
          (t += 2),
          (n -= 2));
        break;
      }
  }
  for (a = t - 1, n++; ++a <= n; )
    r === void 0
      ? a !== n && e[a][1].type !== 'lineEnding' && (r = a)
      : (a === n || e[a][1].type === 'lineEnding') &&
        ((e[r][1].type = 'mathTextData'),
        a !== r + 2 &&
          ((e[r][1].end = e[a - 1][1].end),
          e.splice(r + 2, a - r - 2),
          (n -= a - r - 2),
          (a = r + 2)),
        (r = void 0));
  return e;
}
function te(e) {
  return e !== 36 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function ne(e) {
  return { flow: { 36: Z }, text: { 36: Y(e) } };
}
const re = {};
function ue(e) {
  const n = this,
    t = e || re,
    a = n.data(),
    r = a.micromarkExtensions || (a.micromarkExtensions = []),
    i = a.fromMarkdownExtensions || (a.fromMarkdownExtensions = []),
    c = a.toMarkdownExtensions || (a.toMarkdownExtensions = []);
  (r.push(ne(t)), i.push(W()), c.push(H(t)));
}
export { se as a, E as c, le as i, oe as p, ue as r };
