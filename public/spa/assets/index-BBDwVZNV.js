import { o as d, V as C, u as A, r as I, a as J, b as D, v as M } from './index-BGyEEg7z.js';
import { j as h } from '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import { n as j, h as R, s as L, p as V, r as H } from './index-D986vWty.js';
import { bF as x, bG as K, bH as U, bI as q, bJ as _, bK as B } from './index-C8UyLGsD.js';
const w = {}.hasOwnProperty,
  z = new Map(),
  G = /[A-Z]/g,
  X = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  Z = new Set(['td', 'th']),
  k = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function Q(t, e) {
  if (!e || e.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const r = e.filePath || void 0;
  let n;
  if (e.development) {
    if (typeof e.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    n = se(r, e.jsxDEV);
  } else {
    if (typeof e.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof e.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    n = ne(r, e.jsx, e.jsxs);
  }
  const s = {
      Fragment: e.Fragment,
      ancestors: [],
      components: e.components || {},
      create: n,
      elementAttributeNameCase: e.elementAttributeNameCase || 'react',
      evaluater: e.createEvaluater ? e.createEvaluater() : void 0,
      filePath: r,
      ignoreInvalidStyle: e.ignoreInvalidStyle || !1,
      passKeys: e.passKeys !== !1,
      passNode: e.passNode || !1,
      schema: e.space === 'svg' ? x : K,
      stylePropertyNameCase: e.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: e.tableCellAlignToStyle !== !1,
    },
    o = P(s, t, void 0);
  return o && typeof o != 'string' ? o : s.create(t, s.Fragment, { children: o || void 0 }, void 0);
}
function P(t, e, r) {
  if (e.type === 'element') return W(t, e, r);
  if (e.type === 'mdxFlowExpression' || e.type === 'mdxTextExpression') return Y(t, e);
  if (e.type === 'mdxJsxFlowElement' || e.type === 'mdxJsxTextElement') return ee(t, e, r);
  if (e.type === 'mdxjsEsm') return $(t, e);
  if (e.type === 'root') return te(t, e, r);
  if (e.type === 'text') return re(t, e);
}
function W(t, e, r) {
  const n = t.schema;
  let s = n;
  (e.tagName.toLowerCase() === 'svg' && n.space === 'html' && ((s = x), (t.schema = s)),
    t.ancestors.push(e));
  const o = F(t, e.tagName, !1),
    a = oe(t, e);
  let i = E(t, e);
  return (
    X.has(e.tagName) &&
      (i = i.filter(function (c) {
        return typeof c == 'string' ? !U(c) : !0;
      })),
    T(t, a, o, e),
    b(a, i),
    t.ancestors.pop(),
    (t.schema = n),
    t.create(e, o, a, r)
  );
}
function Y(t, e) {
  if (e.data && e.data.estree && t.evaluater) {
    const n = e.data.estree.body[0];
    return (d(n.type === 'ExpressionStatement'), t.evaluater.evaluateExpression(n.expression));
  }
  y(t, e.position);
}
function $(t, e) {
  if (e.data && e.data.estree && t.evaluater) return t.evaluater.evaluateProgram(e.data.estree);
  y(t, e.position);
}
function ee(t, e, r) {
  const n = t.schema;
  let s = n;
  (e.name === 'svg' && n.space === 'html' && ((s = x), (t.schema = s)), t.ancestors.push(e));
  const o = e.name === null ? t.Fragment : F(t, e.name, !0),
    a = ae(t, e),
    i = E(t, e);
  return (T(t, a, o, e), b(a, i), t.ancestors.pop(), (t.schema = n), t.create(e, o, a, r));
}
function te(t, e, r) {
  const n = {};
  return (b(n, E(t, e)), t.create(e, t.Fragment, n, r));
}
function re(t, e) {
  return e.value;
}
function T(t, e, r, n) {
  typeof r != 'string' && r !== t.Fragment && t.passNode && (e.node = n);
}
function b(t, e) {
  if (e.length > 0) {
    const r = e.length > 1 ? e : e[0];
    r && (t.children = r);
  }
}
function ne(t, e, r) {
  return n;
  function n(s, o, a, i) {
    const p = Array.isArray(a.children) ? r : e;
    return i ? p(o, a, i) : p(o, a);
  }
}
function se(t, e) {
  return r;
  function r(n, s, o, a) {
    const i = Array.isArray(o.children),
      c = V(n);
    return e(
      s,
      o,
      a,
      i,
      { columnNumber: c ? c.column - 1 : void 0, fileName: t, lineNumber: c ? c.line : void 0 },
      void 0,
    );
  }
}
function oe(t, e) {
  const r = {};
  let n, s;
  for (s in e.properties)
    if (s !== 'children' && w.call(e.properties, s)) {
      const o = ie(t, s, e.properties[s]);
      if (o) {
        const [a, i] = o;
        t.tableCellAlignToStyle && a === 'align' && typeof i == 'string' && Z.has(e.tagName)
          ? (n = i)
          : (r[a] = i);
      }
    }
  if (n) {
    const o = r.style || (r.style = {});
    o[t.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = n;
  }
  return r;
}
function ae(t, e) {
  const r = {};
  for (const n of e.attributes)
    if (n.type === 'mdxJsxExpressionAttribute')
      if (n.data && n.data.estree && t.evaluater) {
        const o = n.data.estree.body[0];
        d(o.type === 'ExpressionStatement');
        const a = o.expression;
        d(a.type === 'ObjectExpression');
        const i = a.properties[0];
        (d(i.type === 'SpreadElement'),
          Object.assign(r, t.evaluater.evaluateExpression(i.argument)));
      } else y(t, e.position);
    else {
      const s = n.name;
      let o;
      if (n.value && typeof n.value == 'object')
        if (n.value.data && n.value.data.estree && t.evaluater) {
          const i = n.value.data.estree.body[0];
          (d(i.type === 'ExpressionStatement'), (o = t.evaluater.evaluateExpression(i.expression)));
        } else y(t, e.position);
      else o = n.value === null ? !0 : n.value;
      r[s] = o;
    }
  return r;
}
function E(t, e) {
  const r = [];
  let n = -1;
  const s = t.passKeys ? new Map() : z;
  for (; ++n < e.children.length; ) {
    const o = e.children[n];
    let a;
    if (t.passKeys) {
      const c =
        o.type === 'element'
          ? o.tagName
          : o.type === 'mdxJsxFlowElement' || o.type === 'mdxJsxTextElement'
            ? o.name
            : void 0;
      if (c) {
        const p = s.get(c) || 0;
        ((a = c + '-' + p), s.set(c, p + 1));
      }
    }
    const i = P(t, o, a);
    i !== void 0 && r.push(i);
  }
  return r;
}
function ie(t, e, r) {
  const n = q(t.schema, e);
  if (!(r == null || (typeof r == 'number' && Number.isNaN(r)))) {
    if ((Array.isArray(r) && (r = n.commaSeparated ? _(r) : B(r)), n.property === 'style')) {
      let s = typeof r == 'object' ? r : le(t, String(r));
      return (t.stylePropertyNameCase === 'css' && (s = ce(s)), ['style', s]);
    }
    return [
      t.elementAttributeNameCase === 'react' && n.space ? R[n.property] || n.property : n.attribute,
      r,
    ];
  }
}
function le(t, e) {
  try {
    return L(e, { reactCompat: !0 });
  } catch (r) {
    if (t.ignoreInvalidStyle) return {};
    const n = r,
      s = new C('Cannot parse `style` attribute', {
        ancestors: t.ancestors,
        cause: n,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((s.file = t.filePath || void 0), (s.url = k + '#cannot-parse-style-attribute'), s);
  }
}
function F(t, e, r) {
  let n;
  if (!r) n = { type: 'Literal', value: e };
  else if (e.includes('.')) {
    const s = e.split('.');
    let o = -1,
      a;
    for (; ++o < s.length; ) {
      const i = j(s[o]) ? { type: 'Identifier', name: s[o] } : { type: 'Literal', value: s[o] };
      a = a
        ? {
            type: 'MemberExpression',
            object: a,
            property: i,
            computed: !!(o && i.type === 'Literal'),
            optional: !1,
          }
        : i;
    }
    n = a;
  } else
    n = j(e) && !/^[a-z]/.test(e) ? { type: 'Identifier', name: e } : { type: 'Literal', value: e };
  if (n.type === 'Literal') {
    const s = n.value;
    return w.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater) return t.evaluater.evaluateExpression(n);
  y(t);
}
function y(t, e) {
  const r = new C('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: t.ancestors,
    place: e,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (r.file = t.filePath || void 0),
    (r.url = k + '#cannot-handle-mdx-estrees-without-createevaluater'),
    r
  );
}
function ce(t) {
  const e = {};
  let r;
  for (r in t) w.call(t, r) && (e[me(r)] = t[r]);
  return e;
}
function me(t) {
  let e = t.replace(G, ue);
  return (e.slice(0, 3) === 'ms-' && (e = '-' + e), e);
}
function ue(t) {
  return '-' + t.toLowerCase();
}
const g = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  pe = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  N = [],
  S = { allowDangerousHtml: !0 },
  fe = /^(https?|ircs?|mailto|xmpp)$/i,
  de = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    { from: 'className', id: 'remove-classname' },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
    { from: 'linkTarget', id: 'remove-linktarget' },
    { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function Ne(t) {
  const e = ye(t),
    r = he(t);
  return ge(e.runSync(e.parse(r), r), t);
}
function ye(t) {
  const e = t.rehypePlugins || N,
    r = t.remarkPlugins || N,
    n = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...S } : S;
  return A().use(I).use(r).use(H, n).use(e);
}
function he(t) {
  const e = t.children || '',
    r = new J();
  return (typeof e == 'string' && (r.value = e), r);
}
function ge(t, e) {
  const r = e.allowedElements,
    n = e.allowElement,
    s = e.components,
    o = e.disallowedElements,
    a = e.skipHtml,
    i = e.unwrapDisallowed,
    c = e.urlTransform || xe;
  for (const l of de)
    Object.hasOwn(e, l.from) &&
      D(
        'Unexpected `' +
          l.from +
          '` prop, ' +
          (l.to ? 'use `' + l.to + '` instead' : 'remove it') +
          ' (see <' +
          pe +
          '#' +
          l.id +
          '> for more info)',
      );
  return (
    M(t, p),
    Q(t, {
      Fragment: h.Fragment,
      components: s,
      ignoreInvalidStyle: !0,
      jsx: h.jsx,
      jsxs: h.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function p(l, u, f) {
    if (l.type === 'raw' && f && typeof u == 'number')
      return (a ? f.children.splice(u, 1) : (f.children[u] = { type: 'text', value: l.value }), u);
    if (l.type === 'element') {
      let m;
      for (m in g)
        if (Object.hasOwn(g, m) && Object.hasOwn(l.properties, m)) {
          const O = l.properties[m],
            v = g[m];
          (v === null || v.includes(l.tagName)) && (l.properties[m] = c(String(O || ''), m, l));
        }
    }
    if (l.type === 'element') {
      let m = r ? !r.includes(l.tagName) : o ? o.includes(l.tagName) : !1;
      if ((!m && n && typeof u == 'number' && (m = !n(l, u, f)), m && f && typeof u == 'number'))
        return (
          i && l.children ? f.children.splice(u, 1, ...l.children) : f.children.splice(u, 1),
          u
        );
    }
  }
}
function xe(t) {
  const e = t.indexOf(':'),
    r = t.indexOf('?'),
    n = t.indexOf('#'),
    s = t.indexOf('/');
  return e === -1 ||
    (s !== -1 && e > s) ||
    (r !== -1 && e > r) ||
    (n !== -1 && e > n) ||
    fe.test(t.slice(0, e))
    ? t
    : '';
}
export { Ne as M };
