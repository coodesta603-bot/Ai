import {
  P as Ar,
  b as vr,
  c as Mr,
  L as Ir,
  a as _r,
  V as Er,
  p as le,
  d as Tt,
  e as nt,
  f as Nr,
  T as zr,
} from './index-D986vWty.js';
import {
  u as ve,
  w as ue,
  P as st,
  f as Lr,
  T as re,
  a as ke,
  g as At,
  r as Pr,
  b as Or,
  c as vt,
  M as Dr,
  v as Br,
} from './index-Divuvd5l.js';
import { r as f } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  f as Mt,
  Z as $e,
  F as It,
  bw as jr,
  hn as Fr,
  bj as qr,
  bF as _t,
  bG as Kr,
  ho as Et,
  bI as Gr,
  bJ as Hr,
  bK as Wr,
  hp as Ur,
  hq as Zr,
  j as Xr,
} from './index-C8UyLGsD.js';
import { j as x } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { A as Nt } from './index-B2Jw6NRR.js';
import { B as Le } from './Block-DDntSWi2.js';
import { S as Qr } from './ScrollShadow-Dm9kdU7B.js';
import { o as lt, v as Jr, e as Vr, g as Yr } from './index-BGyEEg7z.js';
import { r as en } from './index-DWJ36R-D.js';
import { r as tn } from './index-D5iTNnJN.js';
import { M as zt } from './index-BBDwVZNV.js';
const it = Mt(({ css: e }) => ({
    container: e`
    min-width: 160px;
    max-width: 160px;
    height: 100%;

    font-size: 12px;
    color: initial;
  `,
    url: e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    text-overflow: ellipsis;
  `,
  })),
  Lt = f.memo(({ ref: e, url: t, title: r, alt: n, ...s }) => {
    const [l, i, o] = f.useMemo(() => {
      try {
        const a = new URL(t),
          u = a.hostname.replace('www.', ''),
          c = a.host;
        let h = r;
        return (r === t && (h = c + a.pathname), [h, u, c]);
      } catch {
        return [r, t, t];
      }
    }, [t, r]);
    return x.jsx(Nt, {
      href: t,
      ref: e,
      rel: 'noreferrer',
      target: '_blank',
      ...s,
      children: x.jsxs(
        Le,
        {
          clickable: !0,
          className: it.container,
          gap: 2,
          justify: 'space-between',
          paddingBlock: 6,
          paddingInline: 8,
          variant: 'outlined',
          children: [
            x.jsx($e, { ellipsis: { rows: 2 }, children: l }),
            x.jsxs(It, {
              horizontal: !0,
              align: 'center',
              gap: 4,
              children: [
                x.jsx(jr, {
                  alt: n || r || t,
                  height: 14,
                  src: `https://icons.duckduckgo.com/ip3/${o}.ico`,
                  width: 14,
                }),
                x.jsx($e, { ellipsis: !0, className: it.url, type: 'secondary', children: i }),
              ],
            }),
          ],
        },
        t,
      ),
    });
  });
Lt.displayName = 'SearchResultCard';
var at = Lt;
const Pt = f.memo(({ ref: e, dataSource: t, style: r, ...n }) =>
  x.jsx(Qr, {
    hideScrollBar: !0,
    horizontal: !0,
    gap: 12,
    orientation: 'horizontal',
    ref: e,
    size: 10,
    style: { minHeight: 80, overflowX: 'scroll', paddingInlineEnd: 24, width: '100%', ...r },
    ...n,
    children: t.map((s) =>
      typeof s == 'string' ? x.jsx(at, { url: s }, s) : x.jsx(at, { ...s }, s.url),
    ),
  }),
);
Pt.displayName = 'SearchResultCards';
var rn = Pt;
const Ot = function (e) {
  if (e == null) return an;
  if (typeof e == 'function') return Me(e);
  if (typeof e == 'object') return Array.isArray(e) ? nn(e) : sn(e);
  if (typeof e == 'string') return ln(e);
  throw new Error('Expected function, string, or object as test');
};
function nn(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; ) t[r] = Ot(e[r]);
  return Me(n);
  function n(...s) {
    let l = -1;
    for (; ++l < t.length; ) if (t[l].apply(this, s)) return !0;
    return !1;
  }
}
function sn(e) {
  const t = e;
  return Me(r);
  function r(n) {
    const s = n;
    let l;
    for (l in e) if (s[l] !== t[l]) return !1;
    return !0;
  }
}
function ln(e) {
  return Me(t);
  function t(r) {
    return r && r.type === e;
  }
}
function Me(e) {
  return t;
  function t(r, n, s) {
    return !!(on(r) && e.call(this, r, typeof n == 'number' ? n : void 0, s || void 0));
  }
}
function an() {
  return !0;
}
function on(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
function cn(e) {
  return '\x1B[33m' + e + '\x1B[39m';
}
const Dt = [],
  un = !0,
  ot = !1,
  Pe = 'skip';
function hn(e, t, r, n) {
  let s;
  typeof t == 'function' && typeof r != 'function' ? ((n = r), (r = t)) : (s = t);
  const l = Ot(s),
    i = n ? -1 : 1;
  o(e, void 0, [])();
  function o(a, u, c) {
    const h = a && typeof a == 'object' ? a : {};
    if (typeof h.type == 'string') {
      const p =
        typeof h.tagName == 'string' ? h.tagName : typeof h.name == 'string' ? h.name : void 0;
      Object.defineProperty(d, 'name', {
        value: 'node (' + cn(a.type + (p ? '<' + p + '>' : '')) + ')',
      });
    }
    return d;
    function d() {
      let p = Dt,
        m,
        g,
        b;
      if ((!t || l(a, u, c[c.length - 1] || void 0)) && ((p = pn(r(a, c))), p[0] === ot)) return p;
      if ('children' in a && a.children) {
        const k = a;
        if (k.children && p[0] !== Pe)
          for (
            g = (n ? k.children.length : -1) + i, b = c.concat(k);
            g > -1 && g < k.children.length;
          ) {
            const v = k.children[g];
            if (((m = o(v, g, b)()), m[0] === ot)) return m;
            g = typeof m[1] == 'number' ? m[1] : g + i;
          }
      }
      return p;
    }
  }
}
function pn(e) {
  return Array.isArray(e) ? e : typeof e == 'number' ? [un, e] : e == null ? Dt : [e];
}
function K(e, t, r, n) {
  let s, l, i;
  (typeof t == 'function' && typeof r != 'function'
    ? ((l = void 0), (i = t), (s = r))
    : ((l = t), (i = r), (s = n)),
    hn(e, l, o, s));
  function o(a, u) {
    const c = u[u.length - 1],
      h = c ? c.children.indexOf(a) : void 0;
    return i(a, h, c);
  }
}
const fn = () => (e, t) => {
    const r = t.data.footnoteLinks || {};
    K(e, 'element', (n) => {
      if (n.tagName === 'section' && n.properties.className?.includes('footnotes')) {
        const s = Object.entries(r)
          .sort(([l], [i]) => l.localeCompare(i))
          .map(([l, i]) => ({ id: l, ...i }));
        n.properties['data-footnote-links'] = JSON.stringify(s);
      }
      if (n.tagName === 'sup') {
        const s = n.children.find((l) => l.tagName === 'a');
        if (s) {
          const l = s.properties?.id?.replace(/^user-content-fnref-/, '')[0];
          l !== void 0 && (s.properties['data-link'] = JSON.stringify(r[l]));
        }
      }
    });
  },
  dn = () => (e) => {
    K(e, 'element', (t) => {
      t.properties?.className?.includes('katex') && (t.properties.dir = 'ltr');
    });
  },
  gn = () => (e) => {
    (K(e, 'html', (t, r, n) => {
      if (!(!t.value || typeof t.value != 'string') && /^\s*<\s*br\s*\/?>\s*$/gi.test(t.value))
        return (n.children.splice(r, 1, { type: 'break' }), r);
    }),
      K(e, 'text', (t, r = 0, n) => {
        if (!t.value || typeof t.value != 'string') return;
        const s = /<\s*br\s*\/?>/gi;
        if (!s.test(t.value)) return;
        s.lastIndex = 0;
        const l = [],
          i = [];
        let o = 0,
          a;
        for (; (a = s.exec(t.value)) !== null; )
          (a.index > o && l.push(t.value.slice(o, a.index)),
            i.push(a[0]),
            (o = a.index + a[0].length));
        o < t.value.length && l.push(t.value.slice(o));
        const u = [];
        for (const [c, h] of l.entries())
          (h && u.push({ type: 'text', value: h }), c < i.length && u.push({ type: 'break' }));
        if (u.length > 0) return (n.children.splice(r, 1, ...u), r + u.length - 1);
      }));
  },
  mn = () => (e, t) => {
    const r = new Map();
    (K(e, 'footnoteDefinition', (n) => {
      let s = null;
      (K(n, 'link', (l) => {
        if (s) return Pe;
        const i = l.children.find((o) => o.type === 'text');
        return ((s = { alt: i?.value || '', title: i?.value || '', url: l.url }), Pe);
      }),
        s && r.set(n.identifier, s));
    }),
      (t.data.footnoteLinks = Object.fromEntries(r)));
  },
  kn = ['sub', 'sup', 'ins', 'kbd', 'b', 'strong', 'i', 'em', 'mark', 'del', 'u'],
  xn = (e = {}) => {
    const { allowHtmlTags: t = kn } = e;
    return (r) => {
      (K(r, (n) => {
        if (!n.children || !Array.isArray(n.children)) return;
        const s = n.children;
        let l = 0;
        for (; l < s.length; ) {
          const i = s[l];
          if (i.type === 'html' && i.value) {
            const o = `^<(${t.join('|')})>$`,
              a = i.value.match(new RegExp(o));
            if (a) {
              const u = a[1];
              let c = -1;
              const h = [];
              for (let d = l + 1; d < s.length; d++) {
                const p = s[d];
                if (p.type === 'html' && p.value === `</${u}>`) {
                  c = d;
                  break;
                } else if (p.type === 'text') h.push(p);
                else break;
              }
              if (c !== -1) {
                const d = {
                    children: [{ type: 'text', value: h.map((m) => m.value).join('') }],
                    data: { hName: u, hProperties: {} },
                    type: u,
                  },
                  p = c - l + 1;
                (s.splice(l, p, d), l++);
                continue;
              }
            }
          }
          l++;
        }
      }),
        K(r, 'text', (n, s = 0, l) => {
          if (!n.value || typeof n.value != 'string') return;
          const i = `&lt;(${t.join('|')})&gt;(.*?)&lt;\\/\\1&gt;`,
            o = new RegExp(i, 'gi'),
            a = n.value;
          if (!o.test(a)) return;
          o.lastIndex = 0;
          const u = [];
          let c = 0,
            h;
          for (; (h = o.exec(a)) !== null; ) {
            const [d, p, m] = h,
              g = h.index;
            (g > c && u.push({ type: 'text', value: a.slice(c, g) }),
              u.push({
                children: [{ type: 'text', value: m }],
                data: { hName: p, hProperties: {} },
                type: p,
              }),
              (c = g + d.length));
          }
          if ((c < a.length && u.push({ type: 'text', value: a.slice(c) }), u.length > 0 && l))
            return (l.children.splice(s, 1, ...u), s + u.length - 1);
        }));
    };
  },
  bn = (e = {}) => {
    const { videoTags: t = ['video'] } = e;
    return (r) => {
      (K(r, 'html', (n, s = 0, l) => {
        if (!(!n.value || typeof n.value != 'string'))
          for (const i of t) {
            const o = `^<${i}([^>]*?)\\s*\\/?\\s*>$`,
              a = n.value.trim().match(new RegExp(o, 'i'));
            if (a) {
              const h = a[1]?.trim() || '',
                d = {},
                p = /(\w+)=["']([^"']*)["']/g;
              let m;
              for (; (m = p.exec(h)) !== null; ) d[m[1]] = m[2];
              const g = { children: [], data: { hName: i, hProperties: d }, type: i };
              return (l.children.splice(s, 1, g), s);
            }
            const u = `^<${i}([^>]*?)>(.*?)<\\/${i}>$`,
              c = n.value.trim().match(new RegExp(u, 'is'));
            if (c) {
              const h = c[1]?.trim() || '',
                d = c[2] || '',
                p = {},
                m = /(\w+)=["']([^"']*)["']/g;
              let g;
              for (; (g = m.exec(h)) !== null; ) p[g[1]] = g[2];
              const b = {
                children: d ? [{ type: 'text', value: d }] : [],
                data: { hName: i, hProperties: p },
                type: i,
              };
              return (l.children.splice(s, 1, b), s);
            }
          }
      }),
        K(r, 'text', (n, s = 0, l) => {
          if (!(!n.value || typeof n.value != 'string'))
            for (const i of t) {
              const o = `&lt;${i}([^&]*?)\\s*\\/?\\s*&gt;`,
                a = new RegExp(o, 'gi');
              if (!a.test(n.value)) continue;
              a.lastIndex = 0;
              const u = n.value,
                c = [];
              let h = 0,
                d;
              for (; (d = a.exec(u)) !== null; ) {
                const [p, m] = d,
                  g = d.index;
                g > h && c.push({ type: 'text', value: u.slice(h, g) });
                const b = m
                    .replaceAll('&quot;', '"')
                    .replaceAll('&#39;', "'")
                    .replaceAll('&amp;', '&')
                    .replaceAll('&lt;', '<')
                    .replaceAll('&gt;', '>'),
                  k = {},
                  v = /(\w+)=["']([^"']*)["']/g;
                let S;
                for (; (S = v.exec(b)) !== null; ) k[S[1]] = S[2];
                (c.push({ children: [], data: { hName: i, hProperties: k }, type: i }),
                  (h = g + p.length));
              }
              if ((h < u.length && c.push({ type: 'text', value: u.slice(h) }), c.length > 0 && l))
                return (l.children.splice(s, 1, ...c), s + c.length - 1);
            }
        }));
    };
  },
  yn = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']),
  wn = new Set(['pre', 'code', 'table', 'svg']);
function Cn(e, t) {
  const r = e.properties?.className;
  return Array.isArray(r)
    ? r.some((n) => String(n).includes(t))
    : typeof r == 'string'
      ? r.includes(t)
      : !1;
}
const Bt = (e = {}) => {
    const {
        charDelay: t = 20,
        fadeDuration: r = 150,
        baseCharCount: n = 0,
        revealed: s = !1,
        timelineElapsedMs: l,
      } = e,
      i = typeof l == 'number' && Number.isFinite(l);
    return (o) => {
      let a = 0;
      const u = (h) => wn.has(h.tagName) || Cn(h, 'katex'),
        c = (h) => {
          const d = [];
          for (const p of h.children)
            if (p.type === 'text')
              for (const m of p.value) {
                const g = a - n;
                let b = 'stream-char',
                  k;
                if (s) b = 'stream-char stream-char-revealed';
                else if (i) {
                  const S = l - a * t;
                  S >= r ? (b = 'stream-char stream-char-revealed') : (k = -S);
                } else if (g >= 0) k = g * t;
                else {
                  const S = -g * t;
                  S >= r ? (b = 'stream-char stream-char-revealed') : (k = -S);
                }
                const v = { className: b };
                (k !== void 0 && k !== 0 && (v.style = `animation-delay:${k}ms`),
                  d.push({
                    children: [{ type: 'text', value: m }],
                    properties: v,
                    tagName: 'span',
                    type: 'element',
                  }),
                  a++);
              }
            else (p.type === 'element' && (u(p) || c(p)), d.push(p));
          h.children = d;
        };
      K(o, 'element', (h) => {
        if (u(h)) return 'skip';
        if (yn.has(h.tagName)) return (c(h), 'skip');
      });
    };
  },
  Rn = (e) => {
    const [t, r] = f.useState(e);
    return (
      f.useEffect(() => {
        if (e !== void 0)
          if (e === !1 && t === !0) {
            const n = setTimeout(() => {
              r(!1);
            }, 1e3);
            return () => clearTimeout(n);
          } else r(e);
      }, [e, t]),
      t
    );
  },
  $n = (e) => {
    const t = e.match(/\n/g);
    return t ? t.length : 1;
  },
  Sn = (e) => {
    if (!e) return;
    const { children: t = '', className: r } = e?.props || { children: '' };
    if (!t) return;
    const n = Array.isArray(t) ? t[0] : t,
      s = r?.replace('language-', '') || Fr;
    return { content: n, isSingleLine: $n(n) <= 1 && n.length <= 32, lang: s };
  },
  Tn = f.memo(
    ({
      fullFeatured: e,
      enableMermaid: t,
      highlight: r,
      mermaid: n,
      children: s,
      animated: l,
      ...i
    }) => {
      const o = Sn(s);
      if (o)
        return t && o.lang === 'mermaid'
          ? x.jsx(Ar, { animated: l, fullFeatured: e, ...n, ...i, children: o.content })
          : !r && o.isSingleLine
            ? x.jsx(vr, { language: o.lang, children: o.content })
            : x.jsx(Mr, {
                animated: l,
                fullFeatured: e,
                language: o.lang,
                ...r,
                ...i,
                children: o.content,
              });
    },
    (e, t) => e.children === t.children,
  ),
  An = f.memo(({ dataSource: e }) => {
    const t = f.useMemo(
      () =>
        e
          .find((r) => r?.type === 'ol')
          ?.props?.children?.map((r) => {
            if (typeof r == 'string' || r?.type !== 'li') return !1;
            const n = r?.props?.children?.find((s) => s?.props?.children)?.props?.children;
            return !n || !Array.isArray(n) ? !1 : { children: n[0], props: n[1]?.props || {} };
          })
          .filter(Boolean),
      [e],
    );
    return Array.isArray(t)
      ? x.jsx(It, {
          'horizontal': !0,
          'align': 'flex-start',
          'as': 'section',
          'className': 'footnotes',
          'data-footnotes': 'true',
          'gap': '0.5em',
          'justify': 'flex-start',
          'wrap': 'wrap',
          'children': t.map(({ children: r, props: n }, s) => {
            const { node: l, href: i, ...o } = n;
            return f.createElement(
              i ? Nt : 'div',
              { ...(i ? { href: i, ...o } : o), key: s },
              x.jsxs(Le, {
                horizontal: !0,
                align: 'stretch',
                style: { overflow: 'hidden', position: 'relative' },
                variant: 'outlined',
                children: [
                  x.jsx(Le, {
                    paddingInline: '0.66em',
                    style: { borderRadius: 0 },
                    variant: 'filled',
                    children: x.jsx($e, {
                      code: !0,
                      as: 'span',
                      type: 'secondary',
                      children: s + 1,
                    }),
                  }),
                  x.jsx($e, {
                    as: 'span',
                    style: { paddingInline: '0.66em' },
                    type: 'secondary',
                    children: r,
                  }),
                ],
              }),
            );
          }),
        })
      : null;
  }),
  jt = f.memo(({ children: e, ...t }) => {
    const r = f.useMemo(() => {
        try {
          return JSON.parse(t['data-footnote-links'] || '[]');
        } catch (s) {
          return (console.error('Failed to parse footnote links:', s), []);
        }
      }, [t['data-footnote-links']]),
      n = r.length === 0;
    if (e)
      return n
        ? Array.isArray(e)
          ? x.jsx(An, { dataSource: e })
          : e
        : x.jsx('section', {
            'className': 'footnotes',
            'data-footnotes': 'true',
            'children': x.jsx(rn, { dataSource: r }),
          });
  });
jt.displayName = 'Footnotes';
var vn = jt;
const Ft = ({ children: e, showFootnotes: t, ...r }) =>
  r['data-footnotes']
    ? t
      ? x.jsx(vn, { ...r, children: e })
      : null
    : x.jsx('section', { ...r, children: e });
Ft.displayName = 'MdxSection';
var Mn = Ft;
const qt = () => {
    const {
        components: e,
        animated: t,
        citations: r,
        componentProps: n,
        enableMermaid: s,
        fullFeaturedCodeBlock: l,
        showFootnotes: i,
      } = ve(),
      o = f.useCallback(
        ({ node: _, ...C }) => x.jsx(Ir, { citations: r, ...C, ...n?.a }),
        [r, n?.a],
      ),
      a = f.useCallback(({ node: _, ...C }) => x.jsx(_r, { ...C, ...n?.img }), [n?.img]),
      u = f.useCallback(({ node: _, ...C }) => x.jsx(Er, { ...C, ...n?.video }), [n?.video]),
      c = f.useCallback(({ node: _, ...C }) => x.jsx(Mn, { showFootnotes: i, ...C }), [i]),
      h = f.useCallback(
        ({ children: _ }) => x.jsx(qr, { keys: _, style: { display: 'inline-flex' } }),
        [],
      ),
      d = f.useCallback(() => x.jsx('br', {}), []),
      p = f.useCallback(
        ({ style: _, children: C, className: P }) =>
          typeof C == 'object' && ['img', 'video'].includes(C?.props?.node?.tagName)
            ? C
            : x.jsx('p', { className: P, style: _, children: C }),
        [],
      ),
      m = f.useMemo(() => n?.highlight?.theme, [JSON.stringify(n?.highlight?.theme)]),
      g = f.useMemo(() => n?.mermaid?.theme, [JSON.stringify(n?.mermaid?.theme)]),
      b = f.useMemo(() => {
        if (n)
          return {
            highlight: n.highlight ? { ...n.highlight, theme: m } : void 0,
            mermaid: n.mermaid ? { ...n.mermaid, theme: g } : void 0,
          };
      }, [m, g]),
      k = f.useCallback(
        ({ node: _, ...C }) =>
          x.jsx(Tn, { animated: t, enableMermaid: s, fullFeatured: l, ...b, ...n?.pre, ...C }),
        [t, s, l, b, n?.pre],
      ),
      v = f.useCallback(({ node: _, ...C }) => x.jsx('code', { ...C }), []),
      S = f.useMemo(
        () => ({ a: o, br: d, colorPreview: v, img: a, kbd: h, p, pre: k, section: c, video: u }),
        [o, d, a, u, k, c, p, v, h],
      );
    return f.useMemo(() => ({ ...S, ...e }), [S, e]);
  },
  In = {},
  _n = {}.hasOwnProperty,
  Kt = Et('type', { handlers: { root: Nn, element: Dn, text: Pn, comment: On, doctype: Ln } });
function En(e, t) {
  const n = (t || In).space;
  return Kt(e, n === 'svg' ? _t : Kr);
}
function Nn(e, t) {
  const r = {
    nodeName: '#document',
    mode: (e.data || {}).quirksMode ? 'quirks' : 'no-quirks',
    childNodes: [],
  };
  return ((r.childNodes = Ge(e.children, r, t)), he(e, r), r);
}
function zn(e, t) {
  const r = { nodeName: '#document-fragment', childNodes: [] };
  return ((r.childNodes = Ge(e.children, r, t)), he(e, r), r);
}
function Ln(e) {
  const t = {
    nodeName: '#documentType',
    name: 'html',
    publicId: '',
    systemId: '',
    parentNode: null,
  };
  return (he(e, t), t);
}
function Pn(e) {
  const t = { nodeName: '#text', value: e.value, parentNode: null };
  return (he(e, t), t);
}
function On(e) {
  const t = { nodeName: '#comment', data: e.value, parentNode: null };
  return (he(e, t), t);
}
function Dn(e, t) {
  const r = t;
  let n = r;
  e.type === 'element' && e.tagName.toLowerCase() === 'svg' && r.space === 'html' && (n = _t);
  const s = [];
  let l;
  if (e.properties) {
    for (l in e.properties)
      if (l !== 'children' && _n.call(e.properties, l)) {
        const a = Bn(n, l, e.properties[l]);
        a && s.push(a);
      }
  }
  const i = n.space,
    o = {
      nodeName: e.tagName,
      tagName: e.tagName,
      attrs: s,
      namespaceURI: ue[i],
      childNodes: [],
      parentNode: null,
    };
  return (
    (o.childNodes = Ge(e.children, o, n)),
    he(e, o),
    e.tagName === 'template' && e.content && (o.content = zn(e.content, n)),
    o
  );
}
function Bn(e, t, r) {
  const n = Gr(e, t);
  if (
    r === !1 ||
    r === null ||
    r === void 0 ||
    (typeof r == 'number' && Number.isNaN(r)) ||
    (!r && n.boolean)
  )
    return;
  Array.isArray(r) && (r = n.commaSeparated ? Hr(r) : Wr(r));
  const s = { name: n.attribute, value: r === !0 ? '' : String(r) };
  if (n.space && n.space !== 'html' && n.space !== 'svg') {
    const l = s.name.indexOf(':');
    (l < 0
      ? (s.prefix = '')
      : ((s.name = s.name.slice(l + 1)), (s.prefix = n.attribute.slice(0, l))),
      (s.namespace = ue[n.space]));
  }
  return s;
}
function Ge(e, t, r) {
  let n = -1;
  const s = [];
  if (e)
    for (; ++n < e.length; ) {
      const l = Kt(e[n], r);
      ((l.parentNode = t), s.push(l));
    }
  return s;
}
function he(e, t) {
  const r = e.position;
  r &&
    r.start &&
    r.end &&
    (lt(typeof r.start.offset == 'number'),
    lt(typeof r.end.offset == 'number'),
    (t.sourceCodeLocation = {
      startLine: r.start.line,
      startCol: r.start.column,
      startOffset: r.start.offset,
      endLine: r.end.line,
      endCol: r.end.column,
      endOffset: r.end.offset,
    }));
}
const jn =
    /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,
  Fn = new Set([
    'mdxFlowExpression',
    'mdxJsxFlowElement',
    'mdxJsxTextElement',
    'mdxTextExpression',
    'mdxjsEsm',
  ]),
  ct = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 };
function Gt(e, t) {
  const r = Jn(e),
    n = Et('type', {
      handlers: { root: qn, element: Kn, text: Gn, comment: Wt, doctype: Hn, raw: Un },
      unknown: Zn,
    }),
    s = {
      parser: r ? new st(ct) : st.getFragmentParser(void 0, ct),
      handle(o) {
        n(o, s);
      },
      stitches: !1,
      options: t || {},
    };
  (n(e, s), pe(s, le()));
  const l = r ? s.parser.document : s.parser.getFragment(),
    i = Lr(l, { file: s.options.file });
  return (
    s.stitches &&
      Jr(i, 'comment', function (o, a, u) {
        const c = o;
        if (c.value.stitch && u && a !== void 0) {
          const h = u.children;
          return ((h[a] = c.value.stitch), a);
        }
      }),
    i.type === 'root' && i.children.length === 1 && i.children[0].type === e.type
      ? i.children[0]
      : i
  );
}
function Ht(e, t) {
  let r = -1;
  if (e) for (; ++r < e.length; ) t.handle(e[r]);
}
function qn(e, t) {
  Ht(e.children, t);
}
function Kn(e, t) {
  (Xn(e, t), Ht(e.children, t), Qn(e, t));
}
function Gn(e, t) {
  t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
  const r = { type: ke.CHARACTER, chars: e.value, location: xe(e) };
  (pe(t, le(e)), (t.parser.currentToken = r), t.parser._processToken(t.parser.currentToken));
}
function Hn(e, t) {
  const r = {
    type: ke.DOCTYPE,
    name: 'html',
    forceQuirks: !1,
    publicId: '',
    systemId: '',
    location: xe(e),
  };
  (pe(t, le(e)), (t.parser.currentToken = r), t.parser._processToken(t.parser.currentToken));
}
function Wn(e, t) {
  t.stitches = !0;
  const r = Vn(e);
  if ('children' in e && 'children' in r) {
    const n = Gt({ type: 'root', children: e.children }, t.options);
    r.children = n.children;
  }
  Wt({ type: 'comment', value: { stitch: r } }, t);
}
function Wt(e, t) {
  const r = e.value,
    n = { type: ke.COMMENT, data: r, location: xe(e) };
  (pe(t, le(e)), (t.parser.currentToken = n), t.parser._processToken(t.parser.currentToken));
}
function Un(e, t) {
  if (
    ((t.parser.tokenizer.preprocessor.html = ''),
    (t.parser.tokenizer.preprocessor.pos = -1),
    (t.parser.tokenizer.preprocessor.lastGapPos = -2),
    (t.parser.tokenizer.preprocessor.gapStack = []),
    (t.parser.tokenizer.preprocessor.skipNextNewLine = !1),
    (t.parser.tokenizer.preprocessor.lastChunkWritten = !1),
    (t.parser.tokenizer.preprocessor.endOfChunkHit = !1),
    (t.parser.tokenizer.preprocessor.isEol = !1),
    Ut(t, le(e)),
    t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(jn, '&lt;$1$2') : e.value, !1),
    t.parser.tokenizer._runParsingLoop(),
    t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78)
  ) {
    t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
    const r = t.parser.tokenizer._consume();
    t.parser.tokenizer._callState(r);
  }
}
function Zn(e, t) {
  const r = e;
  if (t.options.passThrough && t.options.passThrough.includes(r.type)) Wn(r, t);
  else {
    let n = '';
    throw (
      Fn.has(r.type) &&
        (n =
          ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),
      new Error('Cannot compile `' + r.type + '` node' + n)
    );
  }
}
function pe(e, t) {
  Ut(e, t);
  const r = e.parser.tokenizer.currentCharacterToken;
  (r &&
    r.location &&
    ((r.location.endLine = e.parser.tokenizer.preprocessor.line),
    (r.location.endCol = e.parser.tokenizer.preprocessor.col + 1),
    (r.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1),
    (e.parser.currentToken = r),
    e.parser._processToken(e.parser.currentToken)),
    (e.parser.tokenizer.paused = !1),
    (e.parser.tokenizer.inLoop = !1),
    (e.parser.tokenizer.active = !1),
    (e.parser.tokenizer.returnState = re.DATA),
    (e.parser.tokenizer.charRefCode = -1),
    (e.parser.tokenizer.consumedAfterSnapshot = -1),
    (e.parser.tokenizer.currentLocation = null),
    (e.parser.tokenizer.currentCharacterToken = null),
    (e.parser.tokenizer.currentToken = null),
    (e.parser.tokenizer.currentAttr = { name: '', value: '' }));
}
function Ut(e, t) {
  if (t && t.offset !== void 0) {
    const r = {
      startLine: t.line,
      startCol: t.column,
      startOffset: t.offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    };
    ((e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1),
      (e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset),
      (e.parser.tokenizer.preprocessor.line = t.line),
      (e.parser.tokenizer.currentLocation = r));
  }
}
function Xn(e, t) {
  const r = e.tagName.toLowerCase();
  if (t.parser.tokenizer.state === re.PLAINTEXT) return;
  pe(t, le(e));
  const n = t.parser.openElements.current;
  let s = 'namespaceURI' in n ? n.namespaceURI : ue.html;
  s === ue.html && r === 'svg' && (s = ue.svg);
  const l = En({ ...e, children: [] }, { space: s === ue.svg ? 'svg' : 'html' }),
    i = {
      type: ke.START_TAG,
      tagName: r,
      tagID: At(r),
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: 'attrs' in l ? l.attrs : [],
      location: xe(e),
    };
  ((t.parser.currentToken = i),
    t.parser._processToken(t.parser.currentToken),
    (t.parser.tokenizer.lastStartTagName = r));
}
function Qn(e, t) {
  const r = e.tagName.toLowerCase();
  if (
    (!t.parser.tokenizer.inForeignNode && Ur.includes(r)) ||
    t.parser.tokenizer.state === re.PLAINTEXT
  )
    return;
  pe(t, Tt(e));
  const n = {
    type: ke.END_TAG,
    tagName: r,
    tagID: At(r),
    selfClosing: !1,
    ackSelfClosing: !1,
    attrs: [],
    location: xe(e),
  };
  ((t.parser.currentToken = n),
    t.parser._processToken(t.parser.currentToken),
    r === t.parser.tokenizer.lastStartTagName &&
      (t.parser.tokenizer.state === re.RCDATA ||
        t.parser.tokenizer.state === re.RAWTEXT ||
        t.parser.tokenizer.state === re.SCRIPT_DATA) &&
      (t.parser.tokenizer.state = re.DATA));
}
function Jn(e) {
  const t = e.type === 'root' ? e.children[0] : e;
  return !!(
    t &&
    (t.type === 'doctype' || (t.type === 'element' && t.tagName.toLowerCase() === 'html'))
  );
}
function xe(e) {
  const t = le(e) || { line: void 0, column: void 0, offset: void 0 },
    r = Tt(e) || { line: void 0, column: void 0, offset: void 0 };
  return {
    startLine: t.line,
    startCol: t.column,
    startOffset: t.offset,
    endLine: r.line,
    endCol: r.column,
    endOffset: r.offset,
  };
}
function Vn(e) {
  return 'children' in e ? nt({ ...e, children: [] }) : nt(e);
}
function Yn(e) {
  return function (t, r) {
    return Gt(t, { ...e, file: r });
  };
}
const Zt = () => {
  const {
      enableLatex: e,
      enableCustomFootnotes: t,
      enableGithubAlert: r,
      allowHtml: n,
      rehypePlugins: s = [],
      rehypePluginsAhead: l = [],
    } = ve(),
    i = f.useMemo(
      () => [n && Yn, r && Pr, e && Or, e && dn, t && fn].filter(Boolean),
      [e, r, t, n],
    );
  return f.useMemo(() => [...l, ...i, ...s], [s, i, l]);
};
function es(e) {
  Vr(e, [/\r?\n|\r/g, ts]);
}
function ts() {
  return { type: 'break' };
}
function rs() {
  return function (e) {
    es(e);
  };
}
const Xt = () => {
    const {
        enableLatex: e,
        enableCustomFootnotes: t,
        remarkPlugins: r = [],
        remarkPluginsAhead: n = [],
        variant: s,
        allowHtml: l,
      } = ve(),
      i = s === 'chat',
      o = f.useMemo(
        () =>
          [
            en,
            e && tn,
            [Yr, { singleTilde: !1 }],
            !l && gn,
            !l && xn,
            !l && bn,
            t && mn,
            i && rs,
          ].filter(Boolean),
        [l, i, e, t],
      );
    return f.useMemo(() => [...n, ...o, ...r], [r, o, n]);
  },
  ns = f.memo(
    ({ children: e, ...t }) => {
      const r = vt(e || ''),
        n = qt(),
        s = Zt(),
        l = Xt();
      return x.jsx(zt, { ...t, components: n, rehypePlugins: s, remarkPlugins: l, children: r });
    },
    (e, t) => e.children === t.children,
  );
var ss = ns;
const Qt = f.createContext(null),
  ls = f.memo(({ children: e, profiler: t = null }) => x.jsx(Qt, { value: t, children: e }));
ls.displayName = 'StreamdownProfilerProvider';
const Jt = () => f.use(Qt),
  is = (e) => e === 'animating' || e === 'streaming',
  as = ({
    blockCharCount: e,
    currentCharDelay: t,
    fadeDuration: r,
    previousCharDelay: n,
    state: s,
    timelineElapsedMs: l,
  }) => {
    const i = is(s) ? t : (n ?? t),
      o = Math.max(0, (e - 1) * i),
      a = s === 'revealed' && l >= o + r;
    return { charDelay: i, settled: a, timelineElapsedMs: a ? o + r : l };
  },
  os = Mt(({ css: e }) => ({
    animated: e`
      .stream-char {
        opacity: 0;

        animation-name: ${Zr};
        animation-duration: 280ms;
        animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);
        animation-fill-mode: forwards;
      }

      .stream-char-revealed {
        opacity: 1;
        animation: none;
      }

      .katex-display .katex-html span {
        mask: none !important;
        animation: none !important;
      }
    `,
  })),
  cs = {
    balanced: {
      activeInputWindowMs: 220,
      defaultCps: 38,
      emaAlpha: 0.2,
      flushCps: 120,
      largeAppendChars: 120,
      maxActiveCps: 132,
      maxCps: 72,
      maxFlushCps: 280,
      minCps: 18,
      settleAfterMs: 360,
      settleDrainMaxMs: 520,
      settleDrainMinMs: 180,
      targetBufferMs: 120,
    },
    realtime: {
      activeInputWindowMs: 140,
      defaultCps: 50,
      emaAlpha: 0.3,
      flushCps: 170,
      largeAppendChars: 180,
      maxActiveCps: 180,
      maxCps: 96,
      maxFlushCps: 360,
      minCps: 24,
      settleAfterMs: 260,
      settleDrainMaxMs: 360,
      settleDrainMinMs: 140,
      targetBufferMs: 40,
    },
    silky: {
      activeInputWindowMs: 320,
      defaultCps: 28,
      emaAlpha: 0.14,
      flushCps: 96,
      largeAppendChars: 100,
      maxActiveCps: 102,
      maxCps: 56,
      maxFlushCps: 220,
      minCps: 14,
      settleAfterMs: 460,
      settleDrainMaxMs: 680,
      settleDrainMinMs: 240,
      targetBufferMs: 170,
    },
  },
  G = (e, t, r) => Math.min(r, Math.max(t, e)),
  ce = () => (typeof performance > 'u' ? Date.now() : performance.now()),
  ut = (e) => [...e].length,
  us = (e, { enabled: t = !0, preset: r = 'balanced' } = {}) => {
    const n = cs[r],
      s = Jt(),
      [l, i] = f.useState(e),
      o = f.useRef(e),
      a = f.useRef(ut(e)),
      u = f.useRef(e),
      c = f.useRef([...e]),
      h = f.useRef(c.current.length),
      d = f.useRef(n.defaultCps),
      p = f.useRef(0),
      m = f.useRef(h.current),
      g = f.useRef(1),
      b = f.useRef(n.defaultCps),
      k = f.useRef(null),
      v = f.useRef(null),
      S = f.useRef(null),
      _ = f.useCallback(() => {
        S.current !== null && (clearTimeout(S.current), (S.current = null));
      }, []),
      C = f.useCallback(() => {
        (k.current !== null && (cancelAnimationFrame(k.current), (k.current = null)),
          (v.current = null));
      }, []),
      P = f.useCallback(() => {
        (C(), _());
      }, [_, C]),
      O = f.useRef(() => {}),
      Z = f.useCallback(
        (N) => {
          (_(),
            (S.current = setTimeout(
              () => {
                ((S.current = null), O.current());
              },
              Math.max(1, Math.ceil(N)),
            )));
        },
        [_],
      ),
      X = f.useCallback(
        (N) => {
          P();
          const y = [...N],
            R = ce();
          ((u.current = N),
            (c.current = y),
            (h.current = y.length),
            (o.current = N),
            (a.current = y.length),
            i(N),
            (d.current = n.defaultCps),
            (g.current = 1),
            (b.current = n.defaultCps),
            (p.current = R),
            (m.current = y.length));
        },
        [n.defaultCps, P],
      ),
      ee = f.useCallback(() => {
        if ((_(), k.current !== null)) return;
        const N = (y) => {
          const R = ce();
          if (v.current === null) {
            ((v.current = y), (k.current = requestAnimationFrame(N)));
            return;
          }
          const T = Math.max(0, y - v.current),
            M = Math.max(0.001, Math.min(T / 1e3, 0.05));
          v.current = y;
          const I = h.current,
            E = a.current,
            A = I - E;
          if (A <= 0) {
            C();
            return;
          }
          const z = ce() - p.current,
            L = z <= n.activeInputWindowMs,
            te = !L && z >= n.settleAfterMs,
            W = G(d.current, n.minCps, n.maxCps),
            ye = Math.max(1, Math.round((W * n.targetBufferMs) / 1e3)),
            br = Math.max(ye + 2, ye * 3),
            Q = L ? Math.round(G(ye + g.current * 0.35, ye, br)) : 0,
            yr = Math.max(0, I - Q);
          let we;
          if (L) {
            const U = Q > 0 ? A / Q : 1,
              Rr = Q > 0 ? g.current / Q : 1,
              $r = b.current / Math.max(W, 1),
              Sr = G(U * 0.6 + Rr * 0.25 + $r * 0.15, 1, 4.5),
              Tr = G(n.maxActiveCps + g.current * 6, n.maxActiveCps, n.maxFlushCps);
            we = G(W * Sr, n.minCps, Tr);
          } else if (te) {
            const U = G(A * 8, n.settleDrainMinMs, n.settleDrainMaxMs);
            we = G((A * 1e3) / U, n.flushCps, n.maxFlushCps);
          } else we = G(Math.max(n.flushCps, W * 1.8, b.current * 0.8), n.flushCps, n.maxFlushCps);
          const wr = L && Q > 0 && A > Q * 2.2,
            Cr = L && g.current >= Q * 0.9;
          let oe = Math.max(L ? (wr || Cr ? 2 : 1) : 2, Math.round(we * M));
          if (L) {
            const U = yr - E;
            if (U <= 0) {
              (C(),
                Z(n.activeInputWindowMs - z),
                s?.recordAnimationFrame({
                  backlog: A,
                  durationMs: ce() - R,
                  frameIntervalMs: T,
                  inputActive: L,
                  revealChars: 0,
                  settling: te,
                }));
              return;
            }
            oe = Math.min(oe, U, A);
          } else oe = Math.min(oe, A);
          const rt = E + oe,
            Ne = c.current.slice(E, rt).join('');
          if (Ne) {
            const U = o.current + Ne;
            ((o.current = U), (a.current = rt), i(U));
          } else ((o.current = u.current), (a.current = I), i(u.current));
          (s?.recordAnimationFrame({
            backlog: A,
            durationMs: ce() - R,
            frameIntervalMs: T,
            inputActive: L,
            revealChars: Ne ? oe : A,
            settling: te,
          }),
            (k.current = requestAnimationFrame(N)));
        };
        k.current = requestAnimationFrame(N);
      }, [
        _,
        n.activeInputWindowMs,
        n.flushCps,
        n.maxActiveCps,
        n.maxCps,
        n.maxFlushCps,
        n.minCps,
        n.settleAfterMs,
        n.settleDrainMaxMs,
        n.settleDrainMinMs,
        n.targetBufferMs,
        Z,
        C,
      ]);
    return (
      (O.current = ee),
      f.useEffect(() => {
        if (!t) {
          X(e);
          return;
        }
        const N = u.current;
        if (e === N) return;
        const y = ce();
        if (!e.startsWith(N)) {
          X(e);
          return;
        }
        const R = [...e.slice(N.length)],
          T = R.length;
        if (
          (s?.recordInputAppend({ appendedChars: T, contentLength: ut(e) }), T > n.largeAppendChars)
        ) {
          X(e);
          return;
        }
        ((u.current = e), (c.current = [...c.current, ...R]), (h.current += T));
        const M = h.current - m.current,
          I = Math.max(1, y - p.current);
        if (M > 0) {
          const E = (M * 1e3) / I,
            A = G(E, n.minCps, n.maxFlushCps * 2),
            z = 0.35;
          ((g.current = g.current * (1 - z) + T * z), (b.current = b.current * (1 - z) + A * z));
          const L = G(E, n.minCps, n.maxActiveCps);
          d.current = d.current * (1 - n.emaAlpha) + L * n.emaAlpha;
        }
        ((p.current = y), (m.current = h.current), ee());
      }, [
        n.emaAlpha,
        n.largeAppendChars,
        n.maxActiveCps,
        n.maxCps,
        n.maxFlushCps,
        n.minCps,
        e,
        t,
        ee,
        X,
        s,
      ]),
      f.useEffect(
        () => () => {
          P();
        },
        [P],
      ),
      l
    );
  },
  Oe = 18,
  hs = 0.3,
  ps = 3e3,
  fs = 280;
function ht(e) {
  return [...e].length;
}
function ds(e, t) {
  let r = Oe / (1 + e * hs);
  return ((r = Math.min(r, ps / Math.max(t, 1))), r);
}
function gs(e) {
  const [t, r] = f.useState(0),
    n = f.useRef(null),
    s = f.useRef(0),
    l = f.useRef(0);
  if (
    (e.length === 0 && s.current !== 0 && (l.current = 0), e.length > s.current && s.current > 0)
  ) {
    const k = s.current - 1;
    l.current = Math.max(l.current, k + 1);
  }
  ((s.current = e.length),
    f.useEffect(() => {
      e.length === 0 &&
        (r(0), (l.current = 0), n.current && (clearTimeout(n.current), (n.current = null)));
    }, [e.length]));
  const i = Math.max(t, l.current),
    o = e.length - 1,
    a = f.useCallback(
      (k) =>
        k < i
          ? 'revealed'
          : k === i && k < o
            ? 'animating'
            : k === i && k === o
              ? 'streaming'
              : 'queued',
      [i, o],
    ),
    u = Math.max(0, o - i - 1),
    c = i < o ? i : -1,
    h = c >= 0 ? ht(e[c]?.content ?? '') : 0,
    d = c >= 0 ? c : c < 0 && o >= i ? o : -1,
    p = d >= 0 ? ht(e[d]?.content ?? '') : 0,
    m = f.useRef({ delay: Oe, index: -1 });
  d >= 0 && d !== m.current.index && (m.current = { delay: ds(u, p), index: d });
  const g = d >= 0 ? m.current.delay : Oe,
    b = f.useCallback(() => {
      r(i + 1);
    }, [i]);
  return (
    f.useEffect(() => {
      if ((n.current && (clearTimeout(n.current), (n.current = null)), c < 0)) return;
      const k = Math.max(0, (h - 1) * g) + fs;
      return (
        (n.current = setTimeout(b, k)),
        () => {
          n.current && (clearTimeout(n.current), (n.current = null));
        }
      );
    }, [c, h, g, b]),
    { charDelay: g, getBlockState: a, queueLength: u }
  );
}
function He() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
var ie = He();
function Vt(e) {
  ie = e;
}
var ne = { exec: () => null };
function w(e, t = '') {
  let r = typeof e == 'string' ? e : e.source,
    n = {
      replace: (s, l) => {
        let i = typeof l == 'string' ? l : l.source;
        return ((i = i.replace(B.caret, '$1')), (r = r.replace(s, i)), n);
      },
      getRegex: () => new RegExp(r, t),
    };
  return n;
}
var ms = (() => {
    try {
      return !!new RegExp('(?<=1)(?<!1)');
    } catch {
      return !1;
    }
  })(),
  B = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (e) =>
      new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (e) =>
      new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, 'i'),
    blockquoteBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}>`),
  },
  ks = /^(?:[ \t]*(?:\n|$))+/,
  xs = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  bs =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  be = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  ys = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  We = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  Yt =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  er = w(Yt)
    .replace(/bull/g, We)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, '')
    .getRegex(),
  ws = w(Yt)
    .replace(/bull/g, We)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
    .getRegex(),
  Ue = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  Cs = /^[^\n]+/,
  Ze = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  Rs = w(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
  )
    .replace('label', Ze)
    .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
    .getRegex(),
  $s = w(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, We)
    .getRegex(),
  Ie =
    'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
  Xe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  Ss = w(
    '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
    'i',
  )
    .replace('comment', Xe)
    .replace('tag', Ie)
    .replace(
      'attribute',
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  tr = w(Ue)
    .replace('hr', be)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '')
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', Ie)
    .getRegex(),
  Ts = w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', tr)
    .getRegex(),
  Qe = {
    blockquote: Ts,
    code: xs,
    def: Rs,
    fences: bs,
    heading: ys,
    hr: be,
    html: Ss,
    lheading: er,
    list: $s,
    newline: ks,
    paragraph: tr,
    table: ne,
    text: Cs,
  },
  pt = w(
    '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
  )
    .replace('hr', be)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', '(?: {4}| {0,3}	)[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', Ie)
    .getRegex(),
  As = {
    ...Qe,
    lheading: ws,
    table: pt,
    paragraph: w(Ue)
      .replace('hr', be)
      .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
      .replace('|lheading', '')
      .replace('table', pt)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
      .replace('tag', Ie)
      .getRegex(),
  },
  vs = {
    ...Qe,
    html: w(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
    )
      .replace('comment', Xe)
      .replace(
        /tag/g,
        '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: ne,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: w(Ue)
      .replace('hr', be)
      .replace(
        'heading',
        ` *#{1,6} *[^
]`,
      )
      .replace('lheading', er)
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .replace('|tag', '')
      .getRegex(),
  },
  Ms = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  Is = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  rr = /^( {2,}|\\)\n(?!\s*$)/,
  _s = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  fe = /[\p{P}\p{S}]/u,
  _e = /[\s\p{P}\p{S}]/u,
  Je = /[^\s\p{P}\p{S}]/u,
  Es = w(/^((?![*_])punctSpace)/, 'u')
    .replace(/punctSpace/g, _e)
    .getRegex(),
  nr = /(?!~)[\p{P}\p{S}]/u,
  Ns = /(?!~)[\s\p{P}\p{S}]/u,
  zs = /(?:[^\s\p{P}\p{S}]|~)/u,
  Ls = w(/link|precode-code|html/, 'g')
    .replace(
      'link',
      /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
    )
    .replace('precode-', ms ? '(?<!`)()' : '(^^|[^`])')
    .replace('code', /(?<b>`+)[^`]+\k<b>(?!`)/)
    .replace('html', /<(?! )[^<>]*?>/)
    .getRegex(),
  sr = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  Ps = w(sr, 'u').replace(/punct/g, fe).getRegex(),
  Os = w(sr, 'u').replace(/punct/g, nr).getRegex(),
  lr =
    '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
  Ds = w(lr, 'gu')
    .replace(/notPunctSpace/g, Je)
    .replace(/punctSpace/g, _e)
    .replace(/punct/g, fe)
    .getRegex(),
  Bs = w(lr, 'gu')
    .replace(/notPunctSpace/g, zs)
    .replace(/punctSpace/g, Ns)
    .replace(/punct/g, nr)
    .getRegex(),
  js = w(
    '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
    'gu',
  )
    .replace(/notPunctSpace/g, Je)
    .replace(/punctSpace/g, _e)
    .replace(/punct/g, fe)
    .getRegex(),
  Fs = w(/^~~?(?:((?!~)punct)|[^\s~])/, 'u')
    .replace(/punct/g, fe)
    .getRegex(),
  qs =
    '^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)',
  Ks = w(qs, 'gu')
    .replace(/notPunctSpace/g, Je)
    .replace(/punctSpace/g, _e)
    .replace(/punct/g, fe)
    .getRegex(),
  Gs = w(/\\(punct)/, 'gu')
    .replace(/punct/g, fe)
    .getRegex(),
  Hs = w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      'email',
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  Ws = w(Xe).replace('(?:-->|$)', '-->').getRegex(),
  Us = w(
    '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  )
    .replace('comment', Ws)
    .replace(
      'attribute',
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  Se = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
  Zs = w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/)
    .replace('label', Se)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
    .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
    .getRegex(),
  ir = w(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', Se)
    .replace('ref', Ze)
    .getRegex(),
  ar = w(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', Ze)
    .getRegex(),
  Xs = w('reflink|nolink(?!\\()', 'g').replace('reflink', ir).replace('nolink', ar).getRegex(),
  ft = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  Ve = {
    _backpedal: ne,
    anyPunctuation: Gs,
    autolink: Hs,
    blockSkip: Ls,
    br: rr,
    code: Is,
    del: ne,
    delLDelim: ne,
    delRDelim: ne,
    emStrongLDelim: Ps,
    emStrongRDelimAst: Ds,
    emStrongRDelimUnd: js,
    escape: Ms,
    link: Zs,
    nolink: ar,
    punctuation: Es,
    reflink: ir,
    reflinkSearch: Xs,
    tag: Us,
    text: _s,
    url: ne,
  },
  Qs = {
    ...Ve,
    link: w(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', Se)
      .getRegex(),
    reflink: w(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', Se)
      .getRegex(),
  },
  De = {
    ...Ve,
    emStrongRDelimAst: Bs,
    emStrongLDelim: Os,
    delLDelim: Fs,
    delRDelim: Ks,
    url: w(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
      .replace('protocol', ft)
      .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
      .getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: w(
      /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    )
      .replace('protocol', ft)
      .getRegex(),
  },
  Js = {
    ...De,
    br: w(rr).replace('{2,}', '*').getRegex(),
    text: w(De.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex(),
  },
  Ce = { normal: Qe, gfm: As, pedantic: vs },
  de = { normal: Ve, gfm: De, breaks: Js, pedantic: Qs },
  Vs = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  dt = (e) => Vs[e];
function H(e, t) {
  if (t) {
    if (B.escapeTest.test(e)) return e.replace(B.escapeReplace, dt);
  } else if (B.escapeTestNoEncode.test(e)) return e.replace(B.escapeReplaceNoEncode, dt);
  return e;
}
function gt(e) {
  try {
    e = encodeURI(e).replace(B.percentDecode, '%');
  } catch {
    return null;
  }
  return e;
}
function mt(e, t) {
  let r = e.replace(B.findPipe, (l, i, o) => {
      let a = !1,
        u = i;
      for (; --u >= 0 && o[u] === '\\'; ) a = !a;
      return a ? '|' : ' |';
    }),
    n = r.split(B.splitPipe),
    s = 0;
  if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t))
    if (n.length > t) n.splice(t);
    else for (; n.length < t; ) n.push('');
  for (; s < n.length; s++) n[s] = n[s].trim().replace(B.slashPipe, '|');
  return n;
}
function ge(e, t, r) {
  let n = e.length;
  if (n === 0) return '';
  let s = 0;
  for (; s < n && e.charAt(n - s - 1) === t; ) s++;
  return e.slice(0, n - s);
}
function Ys(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < e.length; n++)
    if (e[n] === '\\') n++;
    else if (e[n] === t[0]) r++;
    else if (e[n] === t[1] && (r--, r < 0)) return n;
  return r > 0 ? -2 : -1;
}
function el(e, t = 0) {
  let r = t,
    n = '';
  for (let s of e)
    if (s === '	') {
      let l = 4 - (r % 4);
      ((n += ' '.repeat(l)), (r += l));
    } else ((n += s), r++);
  return n;
}
function kt(e, t, r, n, s) {
  let l = t.href,
    i = t.title || null,
    o = e[1].replace(s.other.outputLinkReplace, '$1');
  n.state.inLink = !0;
  let a = {
    type: e[0].charAt(0) === '!' ? 'image' : 'link',
    raw: r,
    href: l,
    title: i,
    text: o,
    tokens: n.inlineTokens(o),
  };
  return ((n.state.inLink = !1), a);
}
function tl(e, t, r) {
  let n = e.match(r.other.indentCodeCompensation);
  if (n === null) return t;
  let s = n[1];
  return t
    .split(
      `
`,
    )
    .map((l) => {
      let i = l.match(r.other.beginningSpace);
      if (i === null) return l;
      let [o] = i;
      return o.length >= s.length ? l.slice(s.length) : l;
    }).join(`
`);
}
var Te = class {
    options;
    rules;
    lexer;
    constructor(t) {
      this.options = t || ie;
    }
    space(t) {
      let r = this.rules.block.newline.exec(t);
      if (r && r[0].length > 0) return { type: 'space', raw: r[0] };
    }
    code(t) {
      let r = this.rules.block.code.exec(t);
      if (r) {
        let n = r[0].replace(this.rules.other.codeRemoveIndent, '');
        return {
          type: 'code',
          raw: r[0],
          codeBlockStyle: 'indented',
          text: this.options.pedantic
            ? n
            : ge(
                n,
                `
`,
              ),
        };
      }
    }
    fences(t) {
      let r = this.rules.block.fences.exec(t);
      if (r) {
        let n = r[0],
          s = tl(n, r[3] || '', this.rules);
        return {
          type: 'code',
          raw: n,
          lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : r[2],
          text: s,
        };
      }
    }
    heading(t) {
      let r = this.rules.block.heading.exec(t);
      if (r) {
        let n = r[2].trim();
        if (this.rules.other.endingHash.test(n)) {
          let s = ge(n, '#');
          (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) &&
            (n = s.trim());
        }
        return {
          type: 'heading',
          raw: r[0],
          depth: r[1].length,
          text: n,
          tokens: this.lexer.inline(n),
        };
      }
    }
    hr(t) {
      let r = this.rules.block.hr.exec(t);
      if (r)
        return {
          type: 'hr',
          raw: ge(
            r[0],
            `
`,
          ),
        };
    }
    blockquote(t) {
      let r = this.rules.block.blockquote.exec(t);
      if (r) {
        let n = ge(
            r[0],
            `
`,
          ).split(`
`),
          s = '',
          l = '',
          i = [];
        for (; n.length > 0; ) {
          let o = !1,
            a = [],
            u;
          for (u = 0; u < n.length; u++)
            if (this.rules.other.blockquoteStart.test(n[u])) (a.push(n[u]), (o = !0));
            else if (!o) a.push(n[u]);
            else break;
          n = n.slice(u);
          let c = a.join(`
`),
            h = c
              .replace(
                this.rules.other.blockquoteSetextReplace,
                `
    $1`,
              )
              .replace(this.rules.other.blockquoteSetextReplace2, '');
          ((s = s
            ? `${s}
${c}`
            : c),
            (l = l
              ? `${l}
${h}`
              : h));
          let d = this.lexer.state.top;
          if (
            ((this.lexer.state.top = !0),
            this.lexer.blockTokens(h, i, !0),
            (this.lexer.state.top = d),
            n.length === 0)
          )
            break;
          let p = i.at(-1);
          if (p?.type === 'code') break;
          if (p?.type === 'blockquote') {
            let m = p,
              g =
                m.raw +
                `
` +
                n.join(`
`),
              b = this.blockquote(g);
            ((i[i.length - 1] = b),
              (s = s.substring(0, s.length - m.raw.length) + b.raw),
              (l = l.substring(0, l.length - m.text.length) + b.text));
            break;
          } else if (p?.type === 'list') {
            let m = p,
              g =
                m.raw +
                `
` +
                n.join(`
`),
              b = this.list(g);
            ((i[i.length - 1] = b),
              (s = s.substring(0, s.length - p.raw.length) + b.raw),
              (l = l.substring(0, l.length - m.raw.length) + b.raw),
              (n = g.substring(i.at(-1).raw.length).split(`
`)));
            continue;
          }
        }
        return { type: 'blockquote', raw: s, tokens: i, text: l };
      }
    }
    list(t) {
      let r = this.rules.block.list.exec(t);
      if (r) {
        let n = r[1].trim(),
          s = n.length > 1,
          l = {
            type: 'list',
            raw: '',
            ordered: s,
            start: s ? +n.slice(0, -1) : '',
            loose: !1,
            items: [],
          };
        ((n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
          this.options.pedantic && (n = s ? n : '[*+-]'));
        let i = this.rules.other.listItemRegex(n),
          o = !1;
        for (; t; ) {
          let u = !1,
            c = '',
            h = '';
          if (!(r = i.exec(t)) || this.rules.block.hr.test(t)) break;
          ((c = r[0]), (t = t.substring(c.length)));
          let d = el(
              r[2].split(
                `
`,
                1,
              )[0],
              r[1].length,
            ),
            p = t.split(
              `
`,
              1,
            )[0],
            m = !d.trim(),
            g = 0;
          if (
            (this.options.pedantic
              ? ((g = 2), (h = d.trimStart()))
              : m
                ? (g = r[1].length + 1)
                : ((g = d.search(this.rules.other.nonSpaceChar)),
                  (g = g > 4 ? 1 : g),
                  (h = d.slice(g)),
                  (g += r[1].length)),
            m &&
              this.rules.other.blankLine.test(p) &&
              ((c +=
                p +
                `
`),
              (t = t.substring(p.length + 1)),
              (u = !0)),
            !u)
          ) {
            let b = this.rules.other.nextBulletRegex(g),
              k = this.rules.other.hrRegex(g),
              v = this.rules.other.fencesBeginRegex(g),
              S = this.rules.other.headingBeginRegex(g),
              _ = this.rules.other.htmlBeginRegex(g),
              C = this.rules.other.blockquoteBeginRegex(g);
            for (; t; ) {
              let P = t.split(
                  `
`,
                  1,
                )[0],
                O;
              if (
                ((p = P),
                this.options.pedantic
                  ? ((p = p.replace(this.rules.other.listReplaceNesting, '  ')), (O = p))
                  : (O = p.replace(this.rules.other.tabCharGlobal, '    ')),
                v.test(p) || S.test(p) || _.test(p) || C.test(p) || b.test(p) || k.test(p))
              )
                break;
              if (O.search(this.rules.other.nonSpaceChar) >= g || !p.trim())
                h +=
                  `
` + O.slice(g);
              else {
                if (
                  m ||
                  d
                    .replace(this.rules.other.tabCharGlobal, '    ')
                    .search(this.rules.other.nonSpaceChar) >= 4 ||
                  v.test(d) ||
                  S.test(d) ||
                  k.test(d)
                )
                  break;
                h +=
                  `
` + p;
              }
              ((m = !p.trim()),
                (c +=
                  P +
                  `
`),
                (t = t.substring(P.length + 1)),
                (d = O.slice(g)));
            }
          }
          (l.loose || (o ? (l.loose = !0) : this.rules.other.doubleBlankLine.test(c) && (o = !0)),
            l.items.push({
              type: 'list_item',
              raw: c,
              task: !!this.options.gfm && this.rules.other.listIsTask.test(h),
              loose: !1,
              text: h,
              tokens: [],
            }),
            (l.raw += c));
        }
        let a = l.items.at(-1);
        if (a) ((a.raw = a.raw.trimEnd()), (a.text = a.text.trimEnd()));
        else return;
        l.raw = l.raw.trimEnd();
        for (let u of l.items) {
          if (
            ((this.lexer.state.top = !1), (u.tokens = this.lexer.blockTokens(u.text, [])), u.task)
          ) {
            if (
              ((u.text = u.text.replace(this.rules.other.listReplaceTask, '')),
              u.tokens[0]?.type === 'text' || u.tokens[0]?.type === 'paragraph')
            ) {
              ((u.tokens[0].raw = u.tokens[0].raw.replace(this.rules.other.listReplaceTask, '')),
                (u.tokens[0].text = u.tokens[0].text.replace(
                  this.rules.other.listReplaceTask,
                  '',
                )));
              for (let h = this.lexer.inlineQueue.length - 1; h >= 0; h--)
                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
                  this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(
                    this.rules.other.listReplaceTask,
                    '',
                  );
                  break;
                }
            }
            let c = this.rules.other.listTaskCheckbox.exec(u.raw);
            if (c) {
              let h = { type: 'checkbox', raw: c[0] + ' ', checked: c[0] !== '[ ]' };
              ((u.checked = h.checked),
                l.loose
                  ? u.tokens[0] &&
                    ['paragraph', 'text'].includes(u.tokens[0].type) &&
                    'tokens' in u.tokens[0] &&
                    u.tokens[0].tokens
                    ? ((u.tokens[0].raw = h.raw + u.tokens[0].raw),
                      (u.tokens[0].text = h.raw + u.tokens[0].text),
                      u.tokens[0].tokens.unshift(h))
                    : u.tokens.unshift({ type: 'paragraph', raw: h.raw, text: h.raw, tokens: [h] })
                  : u.tokens.unshift(h));
            }
          }
          if (!l.loose) {
            let c = u.tokens.filter((d) => d.type === 'space'),
              h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
            l.loose = h;
          }
        }
        if (l.loose)
          for (let u of l.items) {
            u.loose = !0;
            for (let c of u.tokens) c.type === 'text' && (c.type = 'paragraph');
          }
        return l;
      }
    }
    html(t) {
      let r = this.rules.block.html.exec(t);
      if (r)
        return {
          type: 'html',
          block: !0,
          raw: r[0],
          pre: r[1] === 'pre' || r[1] === 'script' || r[1] === 'style',
          text: r[0],
        };
    }
    def(t) {
      let r = this.rules.block.def.exec(t);
      if (r) {
        let n = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' '),
          s = r[2]
            ? r[2]
                .replace(this.rules.other.hrefBrackets, '$1')
                .replace(this.rules.inline.anyPunctuation, '$1')
            : '',
          l = r[3]
            ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1')
            : r[3];
        return { type: 'def', tag: n, raw: r[0], href: s, title: l };
      }
    }
    table(t) {
      let r = this.rules.block.table.exec(t);
      if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
      let n = mt(r[1]),
        s = r[2].replace(this.rules.other.tableAlignChars, '').split('|'),
        l = r[3]?.trim()
          ? r[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
          : [],
        i = { type: 'table', raw: r[0], header: [], align: [], rows: [] };
      if (n.length === s.length) {
        for (let o of s)
          this.rules.other.tableAlignRight.test(o)
            ? i.align.push('right')
            : this.rules.other.tableAlignCenter.test(o)
              ? i.align.push('center')
              : this.rules.other.tableAlignLeft.test(o)
                ? i.align.push('left')
                : i.align.push(null);
        for (let o = 0; o < n.length; o++)
          i.header.push({
            text: n[o],
            tokens: this.lexer.inline(n[o]),
            header: !0,
            align: i.align[o],
          });
        for (let o of l)
          i.rows.push(
            mt(o, i.header.length).map((a, u) => ({
              text: a,
              tokens: this.lexer.inline(a),
              header: !1,
              align: i.align[u],
            })),
          );
        return i;
      }
    }
    lheading(t) {
      let r = this.rules.block.lheading.exec(t);
      if (r) {
        let n = r[1].trim();
        return {
          type: 'heading',
          raw: r[0],
          depth: r[2].charAt(0) === '=' ? 1 : 2,
          text: n,
          tokens: this.lexer.inline(n),
        };
      }
    }
    paragraph(t) {
      let r = this.rules.block.paragraph.exec(t);
      if (r) {
        let n =
          r[1].charAt(r[1].length - 1) ===
          `
`
            ? r[1].slice(0, -1)
            : r[1];
        return { type: 'paragraph', raw: r[0], text: n, tokens: this.lexer.inline(n) };
      }
    }
    text(t) {
      let r = this.rules.block.text.exec(t);
      if (r) return { type: 'text', raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
    }
    escape(t) {
      let r = this.rules.inline.escape.exec(t);
      if (r) return { type: 'escape', raw: r[0], text: r[1] };
    }
    tag(t) {
      let r = this.rules.inline.tag.exec(t);
      if (r)
        return (
          !this.lexer.state.inLink && this.rules.other.startATag.test(r[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              this.rules.other.endATag.test(r[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              this.rules.other.endPreScriptTag.test(r[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: 'html',
            raw: r[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: r[0],
          }
        );
    }
    link(t) {
      let r = this.rules.inline.link.exec(t);
      if (r) {
        let n = r[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
          if (!this.rules.other.endAngleBracket.test(n)) return;
          let i = ge(n.slice(0, -1), '\\');
          if ((n.length - i.length) % 2 === 0) return;
        } else {
          let i = Ys(r[2], '()');
          if (i === -2) return;
          if (i > -1) {
            let o = (r[0].indexOf('!') === 0 ? 5 : 4) + r[1].length + i;
            ((r[2] = r[2].substring(0, i)), (r[0] = r[0].substring(0, o).trim()), (r[3] = ''));
          }
        }
        let s = r[2],
          l = '';
        if (this.options.pedantic) {
          let i = this.rules.other.pedanticHrefTitle.exec(s);
          i && ((s = i[1]), (l = i[3]));
        } else l = r[3] ? r[3].slice(1, -1) : '';
        return (
          (s = s.trim()),
          this.rules.other.startAngleBracket.test(s) &&
            (this.options.pedantic && !this.rules.other.endAngleBracket.test(n)
              ? (s = s.slice(1))
              : (s = s.slice(1, -1))),
          kt(
            r,
            {
              href: s && s.replace(this.rules.inline.anyPunctuation, '$1'),
              title: l && l.replace(this.rules.inline.anyPunctuation, '$1'),
            },
            r[0],
            this.lexer,
            this.rules,
          )
        );
      }
    }
    reflink(t, r) {
      let n;
      if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
        let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, ' '),
          l = r[s.toLowerCase()];
        if (!l) {
          let i = n[0].charAt(0);
          return { type: 'text', raw: i, text: i };
        }
        return kt(n, l, n[0], this.lexer, this.rules);
      }
    }
    emStrong(t, r, n = '') {
      let s = this.rules.inline.emStrongLDelim.exec(t);
      if (
        !(
          !s ||
          (!s[1] && !s[2] && !s[3] && !s[4]) ||
          (s[4] && n.match(this.rules.other.unicodeAlphaNumeric))
        ) &&
        (!(s[1] || s[3]) || !n || this.rules.inline.punctuation.exec(n))
      ) {
        let l = [...s[0]].length - 1,
          i,
          o,
          a = l,
          u = 0,
          c =
            s[0][0] === '*'
              ? this.rules.inline.emStrongRDelimAst
              : this.rules.inline.emStrongRDelimUnd;
        for (c.lastIndex = 0, r = r.slice(-1 * t.length + l); (s = c.exec(r)) != null; ) {
          if (((i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !i)) continue;
          if (((o = [...i].length), s[3] || s[4])) {
            a += o;
            continue;
          } else if ((s[5] || s[6]) && l % 3 && !((l + o) % 3)) {
            u += o;
            continue;
          }
          if (((a -= o), a > 0)) continue;
          o = Math.min(o, o + a + u);
          let h = [...s[0]][0].length,
            d = t.slice(0, l + s.index + h + o);
          if (Math.min(l, o) % 2) {
            let m = d.slice(1, -1);
            return { type: 'em', raw: d, text: m, tokens: this.lexer.inlineTokens(m) };
          }
          let p = d.slice(2, -2);
          return { type: 'strong', raw: d, text: p, tokens: this.lexer.inlineTokens(p) };
        }
      }
    }
    codespan(t) {
      let r = this.rules.inline.code.exec(t);
      if (r) {
        let n = r[2].replace(this.rules.other.newLineCharGlobal, ' '),
          s = this.rules.other.nonSpaceChar.test(n),
          l =
            this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
        return (
          s && l && (n = n.substring(1, n.length - 1)),
          { type: 'codespan', raw: r[0], text: n }
        );
      }
    }
    br(t) {
      let r = this.rules.inline.br.exec(t);
      if (r) return { type: 'br', raw: r[0] };
    }
    del(t, r, n = '') {
      let s = this.rules.inline.delLDelim.exec(t);
      if (s && (!s[1] || !n || this.rules.inline.punctuation.exec(n))) {
        let l = [...s[0]].length - 1,
          i,
          o,
          a = l,
          u = this.rules.inline.delRDelim;
        for (u.lastIndex = 0, r = r.slice(-1 * t.length + l); (s = u.exec(r)) != null; ) {
          if (
            ((i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]),
            !i || ((o = [...i].length), o !== l))
          )
            continue;
          if (s[3] || s[4]) {
            a += o;
            continue;
          }
          if (((a -= o), a > 0)) continue;
          o = Math.min(o, o + a);
          let c = [...s[0]][0].length,
            h = t.slice(0, l + s.index + c + o),
            d = h.slice(l, -l);
          return { type: 'del', raw: h, text: d, tokens: this.lexer.inlineTokens(d) };
        }
      }
    }
    autolink(t) {
      let r = this.rules.inline.autolink.exec(t);
      if (r) {
        let n, s;
        return (
          r[2] === '@' ? ((n = r[1]), (s = 'mailto:' + n)) : ((n = r[1]), (s = n)),
          { type: 'link', raw: r[0], text: n, href: s, tokens: [{ type: 'text', raw: n, text: n }] }
        );
      }
    }
    url(t) {
      let r;
      if ((r = this.rules.inline.url.exec(t))) {
        let n, s;
        if (r[2] === '@') ((n = r[0]), (s = 'mailto:' + n));
        else {
          let l;
          do ((l = r[0]), (r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? ''));
          while (l !== r[0]);
          ((n = r[0]), r[1] === 'www.' ? (s = 'http://' + r[0]) : (s = r[0]));
        }
        return {
          type: 'link',
          raw: r[0],
          text: n,
          href: s,
          tokens: [{ type: 'text', raw: n, text: n }],
        };
      }
    }
    inlineText(t) {
      let r = this.rules.inline.text.exec(t);
      if (r) {
        let n = this.lexer.state.inRawBlock;
        return { type: 'text', raw: r[0], text: r[0], escaped: n };
      }
    }
  },
  F = class Be {
    tokens;
    options;
    state;
    inlineQueue;
    tokenizer;
    constructor(t) {
      ((this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = t || ie),
        (this.options.tokenizer = this.options.tokenizer || new Te()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
      let r = { other: B, block: Ce.normal, inline: de.normal };
      (this.options.pedantic
        ? ((r.block = Ce.pedantic), (r.inline = de.pedantic))
        : this.options.gfm &&
          ((r.block = Ce.gfm), this.options.breaks ? (r.inline = de.breaks) : (r.inline = de.gfm)),
        (this.tokenizer.rules = r));
    }
    static get rules() {
      return { block: Ce, inline: de };
    }
    static lex(t, r) {
      return new Be(r).lex(t);
    }
    static lexInline(t, r) {
      return new Be(r).inlineTokens(t);
    }
    lex(t) {
      ((t = t.replace(
        B.carriageReturn,
        `
`,
      )),
        this.blockTokens(t, this.tokens));
      for (let r = 0; r < this.inlineQueue.length; r++) {
        let n = this.inlineQueue[r];
        this.inlineTokens(n.src, n.tokens);
      }
      return ((this.inlineQueue = []), this.tokens);
    }
    blockTokens(t, r = [], n = !1) {
      for (
        this.tokenizer.lexer = this,
          this.options.pedantic &&
            (t = t.replace(B.tabCharGlobal, '    ').replace(B.spaceLine, ''));
        t;
      ) {
        let s;
        if (
          this.options.extensions?.block?.some((i) =>
            (s = i.call({ lexer: this }, t, r))
              ? ((t = t.substring(s.raw.length)), r.push(s), !0)
              : !1,
          )
        )
          continue;
        if ((s = this.tokenizer.space(t))) {
          t = t.substring(s.raw.length);
          let i = r.at(-1);
          s.raw.length === 1 && i !== void 0
            ? (i.raw += `
`)
            : r.push(s);
          continue;
        }
        if ((s = this.tokenizer.code(t))) {
          t = t.substring(s.raw.length);
          let i = r.at(-1);
          i?.type === 'paragraph' || i?.type === 'text'
            ? ((i.raw +=
                (i.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (i.text +=
                `
` + s.text),
              (this.inlineQueue.at(-1).src = i.text))
            : r.push(s);
          continue;
        }
        if ((s = this.tokenizer.fences(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.heading(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.hr(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.blockquote(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.list(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.html(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.def(t))) {
          t = t.substring(s.raw.length);
          let i = r.at(-1);
          i?.type === 'paragraph' || i?.type === 'text'
            ? ((i.raw +=
                (i.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (i.text +=
                `
` + s.raw),
              (this.inlineQueue.at(-1).src = i.text))
            : this.tokens.links[s.tag] ||
              ((this.tokens.links[s.tag] = { href: s.href, title: s.title }), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.table(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        if ((s = this.tokenizer.lheading(t))) {
          ((t = t.substring(s.raw.length)), r.push(s));
          continue;
        }
        let l = t;
        if (this.options.extensions?.startBlock) {
          let i = 1 / 0,
            o = t.slice(1),
            a;
          (this.options.extensions.startBlock.forEach((u) => {
            ((a = u.call({ lexer: this }, o)),
              typeof a == 'number' && a >= 0 && (i = Math.min(i, a)));
          }),
            i < 1 / 0 && i >= 0 && (l = t.substring(0, i + 1)));
        }
        if (this.state.top && (s = this.tokenizer.paragraph(l))) {
          let i = r.at(-1);
          (n && i?.type === 'paragraph'
            ? ((i.raw +=
                (i.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (i.text +=
                `
` + s.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = i.text))
            : r.push(s),
            (n = l.length !== t.length),
            (t = t.substring(s.raw.length)));
          continue;
        }
        if ((s = this.tokenizer.text(t))) {
          t = t.substring(s.raw.length);
          let i = r.at(-1);
          i?.type === 'text'
            ? ((i.raw +=
                (i.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (i.text +=
                `
` + s.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = i.text))
            : r.push(s);
          continue;
        }
        if (t) {
          let i = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(i);
            break;
          } else throw new Error(i);
        }
      }
      return ((this.state.top = !0), r);
    }
    inline(t, r = []) {
      return (this.inlineQueue.push({ src: t, tokens: r }), r);
    }
    inlineTokens(t, r = []) {
      this.tokenizer.lexer = this;
      let n = t,
        s = null;
      if (this.tokens.links) {
        let a = Object.keys(this.tokens.links);
        if (a.length > 0)
          for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
            a.includes(s[0].slice(s[0].lastIndexOf('[') + 1, -1)) &&
              (n =
                n.slice(0, s.index) +
                '[' +
                'a'.repeat(s[0].length - 2) +
                ']' +
                n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
        n =
          n.slice(0, s.index) +
          '++' +
          n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let l;
      for (; (s = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
        ((l = s[2] ? s[2].length : 0),
          (n =
            n.slice(0, s.index + l) +
            '[' +
            'a'.repeat(s[0].length - l - 2) +
            ']' +
            n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)));
      n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
      let i = !1,
        o = '';
      for (; t; ) {
        (i || (o = ''), (i = !1));
        let a;
        if (
          this.options.extensions?.inline?.some((c) =>
            (a = c.call({ lexer: this }, t, r))
              ? ((t = t.substring(a.raw.length)), r.push(a), !0)
              : !1,
          )
        )
          continue;
        if ((a = this.tokenizer.escape(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.tag(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.link(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.reflink(t, this.tokens.links))) {
          t = t.substring(a.raw.length);
          let c = r.at(-1);
          a.type === 'text' && c?.type === 'text'
            ? ((c.raw += a.raw), (c.text += a.text))
            : r.push(a);
          continue;
        }
        if ((a = this.tokenizer.emStrong(t, n, o))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.codespan(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.br(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.del(t, n, o))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if ((a = this.tokenizer.autolink(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        if (!this.state.inLink && (a = this.tokenizer.url(t))) {
          ((t = t.substring(a.raw.length)), r.push(a));
          continue;
        }
        let u = t;
        if (this.options.extensions?.startInline) {
          let c = 1 / 0,
            h = t.slice(1),
            d;
          (this.options.extensions.startInline.forEach((p) => {
            ((d = p.call({ lexer: this }, h)),
              typeof d == 'number' && d >= 0 && (c = Math.min(c, d)));
          }),
            c < 1 / 0 && c >= 0 && (u = t.substring(0, c + 1)));
        }
        if ((a = this.tokenizer.inlineText(u))) {
          ((t = t.substring(a.raw.length)),
            a.raw.slice(-1) !== '_' && (o = a.raw.slice(-1)),
            (i = !0));
          let c = r.at(-1);
          c?.type === 'text' ? ((c.raw += a.raw), (c.text += a.text)) : r.push(a);
          continue;
        }
        if (t) {
          let c = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else throw new Error(c);
        }
      }
      return r;
    }
  },
  Ae = class {
    options;
    parser;
    constructor(t) {
      this.options = t || ie;
    }
    space(t) {
      return '';
    }
    code({ text: t, lang: r, escaped: n }) {
      let s = (r || '').match(B.notSpaceStart)?.[0],
        l =
          t.replace(B.endingNewline, '') +
          `
`;
      return s
        ? '<pre><code class="language-' +
            H(s) +
            '">' +
            (n ? l : H(l, !0)) +
            `</code></pre>
`
        : '<pre><code>' +
            (n ? l : H(l, !0)) +
            `</code></pre>
`;
    }
    blockquote({ tokens: t }) {
      return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
    }
    html({ text: t }) {
      return t;
    }
    def(t) {
      return '';
    }
    heading({ tokens: t, depth: r }) {
      return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
    }
    hr(t) {
      return `<hr>
`;
    }
    list(t) {
      let r = t.ordered,
        n = t.start,
        s = '';
      for (let o = 0; o < t.items.length; o++) {
        let a = t.items[o];
        s += this.listitem(a);
      }
      let l = r ? 'ol' : 'ul',
        i = r && n !== 1 ? ' start="' + n + '"' : '';
      return (
        '<' +
        l +
        i +
        `>
` +
        s +
        '</' +
        l +
        `>
`
      );
    }
    listitem(t) {
      return `<li>${this.parser.parse(t.tokens)}</li>
`;
    }
    checkbox({ checked: t }) {
      return '<input ' + (t ? 'checked="" ' : '') + 'disabled="" type="checkbox"> ';
    }
    paragraph({ tokens: t }) {
      return `<p>${this.parser.parseInline(t)}</p>
`;
    }
    table(t) {
      let r = '',
        n = '';
      for (let l = 0; l < t.header.length; l++) n += this.tablecell(t.header[l]);
      r += this.tablerow({ text: n });
      let s = '';
      for (let l = 0; l < t.rows.length; l++) {
        let i = t.rows[l];
        n = '';
        for (let o = 0; o < i.length; o++) n += this.tablecell(i[o]);
        s += this.tablerow({ text: n });
      }
      return (
        s && (s = `<tbody>${s}</tbody>`),
        `<table>
<thead>
` +
          r +
          `</thead>
` +
          s +
          `</table>
`
      );
    }
    tablerow({ text: t }) {
      return `<tr>
${t}</tr>
`;
    }
    tablecell(t) {
      let r = this.parser.parseInline(t.tokens),
        n = t.header ? 'th' : 'td';
      return (
        (t.align ? `<${n} align="${t.align}">` : `<${n}>`) +
        r +
        `</${n}>
`
      );
    }
    strong({ tokens: t }) {
      return `<strong>${this.parser.parseInline(t)}</strong>`;
    }
    em({ tokens: t }) {
      return `<em>${this.parser.parseInline(t)}</em>`;
    }
    codespan({ text: t }) {
      return `<code>${H(t, !0)}</code>`;
    }
    br(t) {
      return '<br>';
    }
    del({ tokens: t }) {
      return `<del>${this.parser.parseInline(t)}</del>`;
    }
    link({ href: t, title: r, tokens: n }) {
      let s = this.parser.parseInline(n),
        l = gt(t);
      if (l === null) return s;
      t = l;
      let i = '<a href="' + t + '"';
      return (r && (i += ' title="' + H(r) + '"'), (i += '>' + s + '</a>'), i);
    }
    image({ href: t, title: r, text: n, tokens: s }) {
      s && (n = this.parser.parseInline(s, this.parser.textRenderer));
      let l = gt(t);
      if (l === null) return H(n);
      t = l;
      let i = `<img src="${t}" alt="${H(n)}"`;
      return (r && (i += ` title="${H(r)}"`), (i += '>'), i);
    }
    text(t) {
      return 'tokens' in t && t.tokens
        ? this.parser.parseInline(t.tokens)
        : 'escaped' in t && t.escaped
          ? t.text
          : H(t.text);
    }
  },
  Ye = class {
    strong({ text: t }) {
      return t;
    }
    em({ text: t }) {
      return t;
    }
    codespan({ text: t }) {
      return t;
    }
    del({ text: t }) {
      return t;
    }
    html({ text: t }) {
      return t;
    }
    text({ text: t }) {
      return t;
    }
    link({ text: t }) {
      return '' + t;
    }
    image({ text: t }) {
      return '' + t;
    }
    br() {
      return '';
    }
    checkbox({ raw: t }) {
      return t;
    }
  },
  q = class je {
    options;
    renderer;
    textRenderer;
    constructor(t) {
      ((this.options = t || ie),
        (this.options.renderer = this.options.renderer || new Ae()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new Ye()));
    }
    static parse(t, r) {
      return new je(r).parse(t);
    }
    static parseInline(t, r) {
      return new je(r).parseInline(t);
    }
    parse(t) {
      this.renderer.parser = this;
      let r = '';
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        if (this.options.extensions?.renderers?.[s.type]) {
          let i = s,
            o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
          if (
            o !== !1 ||
            ![
              'space',
              'hr',
              'heading',
              'code',
              'table',
              'blockquote',
              'list',
              'html',
              'def',
              'paragraph',
              'text',
            ].includes(i.type)
          ) {
            r += o || '';
            continue;
          }
        }
        let l = s;
        switch (l.type) {
          case 'space': {
            r += this.renderer.space(l);
            break;
          }
          case 'hr': {
            r += this.renderer.hr(l);
            break;
          }
          case 'heading': {
            r += this.renderer.heading(l);
            break;
          }
          case 'code': {
            r += this.renderer.code(l);
            break;
          }
          case 'table': {
            r += this.renderer.table(l);
            break;
          }
          case 'blockquote': {
            r += this.renderer.blockquote(l);
            break;
          }
          case 'list': {
            r += this.renderer.list(l);
            break;
          }
          case 'checkbox': {
            r += this.renderer.checkbox(l);
            break;
          }
          case 'html': {
            r += this.renderer.html(l);
            break;
          }
          case 'def': {
            r += this.renderer.def(l);
            break;
          }
          case 'paragraph': {
            r += this.renderer.paragraph(l);
            break;
          }
          case 'text': {
            r += this.renderer.text(l);
            break;
          }
          default: {
            let i = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent) return (console.error(i), '');
            throw new Error(i);
          }
        }
      }
      return r;
    }
    parseInline(t, r = this.renderer) {
      this.renderer.parser = this;
      let n = '';
      for (let s = 0; s < t.length; s++) {
        let l = t[s];
        if (this.options.extensions?.renderers?.[l.type]) {
          let o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
          if (
            o !== !1 ||
            ![
              'escape',
              'html',
              'link',
              'image',
              'strong',
              'em',
              'codespan',
              'br',
              'del',
              'text',
            ].includes(l.type)
          ) {
            n += o || '';
            continue;
          }
        }
        let i = l;
        switch (i.type) {
          case 'escape': {
            n += r.text(i);
            break;
          }
          case 'html': {
            n += r.html(i);
            break;
          }
          case 'link': {
            n += r.link(i);
            break;
          }
          case 'image': {
            n += r.image(i);
            break;
          }
          case 'checkbox': {
            n += r.checkbox(i);
            break;
          }
          case 'strong': {
            n += r.strong(i);
            break;
          }
          case 'em': {
            n += r.em(i);
            break;
          }
          case 'codespan': {
            n += r.codespan(i);
            break;
          }
          case 'br': {
            n += r.br(i);
            break;
          }
          case 'del': {
            n += r.del(i);
            break;
          }
          case 'text': {
            n += r.text(i);
            break;
          }
          default: {
            let o = 'Token with "' + i.type + '" type was not found.';
            if (this.options.silent) return (console.error(o), '');
            throw new Error(o);
          }
        }
      }
      return n;
    }
  },
  me = class {
    options;
    block;
    constructor(e) {
      this.options = e || ie;
    }
    static passThroughHooks = new Set([
      'preprocess',
      'postprocess',
      'processAllTokens',
      'emStrongMask',
    ]);
    static passThroughHooksRespectAsync = new Set([
      'preprocess',
      'postprocess',
      'processAllTokens',
    ]);
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    emStrongMask(e) {
      return e;
    }
    provideLexer() {
      return this.block ? F.lex : F.lexInline;
    }
    provideParser() {
      return this.block ? q.parse : q.parseInline;
    }
  },
  rl = class {
    defaults = He();
    options = this.setOptions;
    parse = this.parseMarkdown(!0);
    parseInline = this.parseMarkdown(!1);
    Parser = q;
    Renderer = Ae;
    TextRenderer = Ye;
    Lexer = F;
    Tokenizer = Te;
    Hooks = me;
    constructor(...t) {
      this.use(...t);
    }
    walkTokens(t, r) {
      let n = [];
      for (let s of t)
        switch (((n = n.concat(r.call(this, s))), s.type)) {
          case 'table': {
            let l = s;
            for (let i of l.header) n = n.concat(this.walkTokens(i.tokens, r));
            for (let i of l.rows) for (let o of i) n = n.concat(this.walkTokens(o.tokens, r));
            break;
          }
          case 'list': {
            let l = s;
            n = n.concat(this.walkTokens(l.items, r));
            break;
          }
          default: {
            let l = s;
            this.defaults.extensions?.childTokens?.[l.type]
              ? this.defaults.extensions.childTokens[l.type].forEach((i) => {
                  let o = l[i].flat(1 / 0);
                  n = n.concat(this.walkTokens(o, r));
                })
              : l.tokens && (n = n.concat(this.walkTokens(l.tokens, r)));
          }
        }
      return n;
    }
    use(...t) {
      let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
      return (
        t.forEach((n) => {
          let s = { ...n };
          if (
            ((s.async = this.defaults.async || s.async || !1),
            n.extensions &&
              (n.extensions.forEach((l) => {
                if (!l.name) throw new Error('extension name required');
                if ('renderer' in l) {
                  let i = r.renderers[l.name];
                  i
                    ? (r.renderers[l.name] = function (...o) {
                        let a = l.renderer.apply(this, o);
                        return (a === !1 && (a = i.apply(this, o)), a);
                      })
                    : (r.renderers[l.name] = l.renderer);
                }
                if ('tokenizer' in l) {
                  if (!l.level || (l.level !== 'block' && l.level !== 'inline'))
                    throw new Error("extension level must be 'block' or 'inline'");
                  let i = r[l.level];
                  (i ? i.unshift(l.tokenizer) : (r[l.level] = [l.tokenizer]),
                    l.start &&
                      (l.level === 'block'
                        ? r.startBlock
                          ? r.startBlock.push(l.start)
                          : (r.startBlock = [l.start])
                        : l.level === 'inline' &&
                          (r.startInline
                            ? r.startInline.push(l.start)
                            : (r.startInline = [l.start]))));
                }
                'childTokens' in l && l.childTokens && (r.childTokens[l.name] = l.childTokens);
              }),
              (s.extensions = r)),
            n.renderer)
          ) {
            let l = this.defaults.renderer || new Ae(this.defaults);
            for (let i in n.renderer) {
              if (!(i in l)) throw new Error(`renderer '${i}' does not exist`);
              if (['options', 'parser'].includes(i)) continue;
              let o = i,
                a = n.renderer[o],
                u = l[o];
              l[o] = (...c) => {
                let h = a.apply(l, c);
                return (h === !1 && (h = u.apply(l, c)), h || '');
              };
            }
            s.renderer = l;
          }
          if (n.tokenizer) {
            let l = this.defaults.tokenizer || new Te(this.defaults);
            for (let i in n.tokenizer) {
              if (!(i in l)) throw new Error(`tokenizer '${i}' does not exist`);
              if (['options', 'rules', 'lexer'].includes(i)) continue;
              let o = i,
                a = n.tokenizer[o],
                u = l[o];
              l[o] = (...c) => {
                let h = a.apply(l, c);
                return (h === !1 && (h = u.apply(l, c)), h);
              };
            }
            s.tokenizer = l;
          }
          if (n.hooks) {
            let l = this.defaults.hooks || new me();
            for (let i in n.hooks) {
              if (!(i in l)) throw new Error(`hook '${i}' does not exist`);
              if (['options', 'block'].includes(i)) continue;
              let o = i,
                a = n.hooks[o],
                u = l[o];
              me.passThroughHooks.has(i)
                ? (l[o] = (c) => {
                    if (this.defaults.async && me.passThroughHooksRespectAsync.has(i))
                      return (async () => {
                        let d = await a.call(l, c);
                        return u.call(l, d);
                      })();
                    let h = a.call(l, c);
                    return u.call(l, h);
                  })
                : (l[o] = (...c) => {
                    if (this.defaults.async)
                      return (async () => {
                        let d = await a.apply(l, c);
                        return (d === !1 && (d = await u.apply(l, c)), d);
                      })();
                    let h = a.apply(l, c);
                    return (h === !1 && (h = u.apply(l, c)), h);
                  });
            }
            s.hooks = l;
          }
          if (n.walkTokens) {
            let l = this.defaults.walkTokens,
              i = n.walkTokens;
            s.walkTokens = function (o) {
              let a = [];
              return (a.push(i.call(this, o)), l && (a = a.concat(l.call(this, o))), a);
            };
          }
          this.defaults = { ...this.defaults, ...s };
        }),
        this
      );
    }
    setOptions(t) {
      return ((this.defaults = { ...this.defaults, ...t }), this);
    }
    lexer(t, r) {
      return F.lex(t, r ?? this.defaults);
    }
    parser(t, r) {
      return q.parse(t, r ?? this.defaults);
    }
    parseMarkdown(t) {
      return (r, n) => {
        let s = { ...n },
          l = { ...this.defaults, ...s },
          i = this.onError(!!l.silent, !!l.async);
        if (this.defaults.async === !0 && s.async === !1)
          return i(
            new Error(
              'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.',
            ),
          );
        if (typeof r > 'u' || r === null)
          return i(new Error('marked(): input parameter is undefined or null'));
        if (typeof r != 'string')
          return i(
            new Error(
              'marked(): input parameter is of type ' +
                Object.prototype.toString.call(r) +
                ', string expected',
            ),
          );
        if ((l.hooks && ((l.hooks.options = l), (l.hooks.block = t)), l.async))
          return (async () => {
            let o = l.hooks ? await l.hooks.preprocess(r) : r,
              a = await (l.hooks ? await l.hooks.provideLexer() : t ? F.lex : F.lexInline)(o, l),
              u = l.hooks ? await l.hooks.processAllTokens(a) : a;
            l.walkTokens && (await Promise.all(this.walkTokens(u, l.walkTokens)));
            let c = await (l.hooks ? await l.hooks.provideParser() : t ? q.parse : q.parseInline)(
              u,
              l,
            );
            return l.hooks ? await l.hooks.postprocess(c) : c;
          })().catch(i);
        try {
          l.hooks && (r = l.hooks.preprocess(r));
          let o = (l.hooks ? l.hooks.provideLexer() : t ? F.lex : F.lexInline)(r, l);
          (l.hooks && (o = l.hooks.processAllTokens(o)),
            l.walkTokens && this.walkTokens(o, l.walkTokens));
          let a = (l.hooks ? l.hooks.provideParser() : t ? q.parse : q.parseInline)(o, l);
          return (l.hooks && (a = l.hooks.postprocess(a)), a);
        } catch (o) {
          return i(o);
        }
      };
    }
    onError(t, r) {
      return (n) => {
        if (
          ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
          t)
        ) {
          let s = '<p>An error occurred:</p><pre>' + H(n.message + '', !0) + '</pre>';
          return r ? Promise.resolve(s) : s;
        }
        if (r) return Promise.reject(n);
        throw n;
      };
    }
  },
  se = new rl();
function $(e, t) {
  return se.parse(e, t);
}
$.options = $.setOptions = function (e) {
  return (se.setOptions(e), ($.defaults = se.defaults), Vt($.defaults), $);
};
$.getDefaults = He;
$.defaults = ie;
$.use = function (...e) {
  return (se.use(...e), ($.defaults = se.defaults), Vt($.defaults), $);
};
$.walkTokens = function (e, t) {
  return se.walkTokens(e, t);
};
$.parseInline = se.parseInline;
$.Parser = q;
$.parser = q.parse;
$.Renderer = Ae;
$.TextRenderer = Ye;
$.Lexer = F;
$.lexer = F.lex;
$.Tokenizer = Te;
$.Hooks = me;
$.parse = $;
$.options;
$.setOptions;
$.use;
$.walkTokens;
$.parseInline;
q.parse;
F.lex;
var nl = Object.defineProperty,
  sl = Object.defineProperties,
  ll = Object.getOwnPropertyDescriptors,
  xt = Object.getOwnPropertySymbols,
  il = Object.prototype.hasOwnProperty,
  al = Object.prototype.propertyIsEnumerable,
  bt = (e, t, r) =>
    t in e ? nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  or = (e, t) => {
    for (var r in t || (t = {})) il.call(t, r) && bt(e, r, t[r]);
    if (xt) for (var r of xt(t)) al.call(t, r) && bt(e, r, t[r]);
    return e;
  },
  cr = (e, t) => sl(e, ll(t)),
  j = (e, t) => {
    let r = !1,
      n = !1;
    for (let s = 0; s < t; s += 1) {
      if (e[s] === '\\' && s + 1 < e.length && e[s + 1] === '`') {
        s += 1;
        continue;
      }
      if (e.substring(s, s + 3) === '```') {
        ((n = !n), (s += 2));
        continue;
      }
      !n && e[s] === '`' && (r = !r);
    }
    return r || n;
  },
  ol = (e, t) => {
    let r = e.substring(t, t + 3) === '```',
      n = t > 0 && e.substring(t - 1, t + 2) === '```',
      s = t > 1 && e.substring(t - 2, t + 1) === '```';
    return r || n || s;
  },
  cl = (e) => {
    let t = 0;
    for (let r = 0; r < e.length; r += 1) {
      if (e[r] === '\\' && r + 1 < e.length && e[r + 1] === '`') {
        r += 1;
        continue;
      }
      e[r] === '`' && !ol(e, r) && (t += 1);
    }
    return t;
  },
  V = (e, t) => {
    let r = !1,
      n = !1,
      s = -1;
    for (let l = 0; l < e.length; l += 1) {
      if (e[l] === '\\' && l + 1 < e.length && e[l + 1] === '`') {
        l += 1;
        continue;
      }
      if (e.substring(l, l + 3) === '```') {
        ((n = !n), (l += 2));
        continue;
      }
      if (!n && e[l] === '`')
        if (r) {
          if (s < t && t < l) return !0;
          ((r = !1), (s = -1));
        } else ((r = !0), (s = l));
    }
    return !1;
  },
  ul = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm,
  hl = (e) =>
    !e || typeof e != 'string' || !e.includes('>')
      ? e
      : e.replace(ul, (t, r, n, s) => (j(e, s) ? t : `${r}\\>${n}`)),
  pl = /(\*\*)([^*]*\*?)$/,
  fl = /(__)([^_]*?)$/,
  dl = /(\*\*\*)([^*]*?)$/,
  gl = /(\*)([^*]*?)$/,
  ml = /(_)([^_]*?)$/,
  kl = /(`)([^`]*?)$/,
  xl = /(~~)([^~]*?)$/,
  ae = /^[\s_~*`]*$/,
  ur = /^[\s]*[-*+][\s]+$/,
  bl = /[\p{L}\p{N}_]/u,
  yl = /^```[^`\n]*```?$/,
  wl = /^\*{4,}$/,
  Cl = /(__)([^_]+)_$/,
  Rl = /(~~)([^~]+)~$/,
  yt = /~~/g,
  Y = (e) => {
    if (!e) return !1;
    let t = e.charCodeAt(0);
    return (t >= 48 && t <= 57) || (t >= 65 && t <= 90) || (t >= 97 && t <= 122) || t === 95
      ? !0
      : bl.test(e);
  },
  $l = (e, t) => {
    let r = 1;
    for (let n = t - 1; n >= 0; n -= 1)
      if (e[n] === ']') r += 1;
      else if (e[n] === '[' && ((r -= 1), r === 0)) return n;
    return -1;
  },
  hr = (e, t) => {
    let r = 1;
    for (let n = t + 1; n < e.length; n += 1)
      if (e[n] === '[') r += 1;
      else if (e[n] === ']' && ((r -= 1), r === 0)) return n;
    return -1;
  },
  Ee = (e, t) => {
    let r = !1,
      n = !1;
    for (let s = 0; s < e.length && s < t; s += 1) {
      if (e[s] === '\\' && e[s + 1] === '$') {
        s += 1;
        continue;
      }
      e[s] === '$' && (e[s + 1] === '$' ? ((n = !n), (s += 1), (r = !1)) : n || (r = !r));
    }
    return r || n;
  },
  Sl = (e, t) => {
    for (let r = t; r < e.length; r += 1) {
      if (e[r] === ')') return !0;
      if (
        e[r] ===
        `
`
      )
        return !1;
    }
    return !1;
  },
  pr = (e, t) => {
    for (let r = t - 1; r >= 0; r -= 1) {
      if (e[r] === ')') return !1;
      if (e[r] === '(') return r > 0 && e[r - 1] === ']' ? Sl(e, t) : !1;
      if (
        e[r] ===
        `
`
      )
        return !1;
    }
    return !1;
  },
  Tl = (e, t) => {
    for (let r = t - 1; r >= 0; r -= 1) {
      if (e[r] === '>') return !1;
      if (e[r] === '<') {
        let n = r + 1 < e.length ? e[r + 1] : '';
        return (n >= 'a' && n <= 'z') || (n >= 'A' && n <= 'Z') || n === '/';
      }
      if (
        e[r] ===
        `
`
      )
        return !1;
    }
    return !1;
  },
  et = (e, t, r) => {
    let n = 0;
    for (let a = t - 1; a >= 0; a -= 1)
      if (
        e[a] ===
        `
`
      ) {
        n = a + 1;
        break;
      }
    let s = e.length;
    for (let a = t; a < e.length; a += 1)
      if (
        e[a] ===
        `
`
      ) {
        s = a;
        break;
      }
    let l = e.substring(n, s),
      i = 0,
      o = !1;
    for (let a of l)
      if (a === r) i += 1;
      else if (a !== ' ' && a !== '	') {
        o = !0;
        break;
      }
    return i >= 3 && !o;
  },
  Al = (e, t, r, n) =>
    r === '\\' || (e.includes('$') && Ee(e, t))
      ? !0
      : r !== '*' && n === '*'
        ? (t < e.length - 2 ? e[t + 2] : '') !== '*'
        : !!(
            r === '*' ||
            (r && n && Y(r) && Y(n)) ||
            ((!r ||
              r === ' ' ||
              r === '	' ||
              r ===
                `
`) &&
              (!n ||
                n === ' ' ||
                n === '	' ||
                n ===
                  `
`))
          ),
  fr = (e) => {
    let t = 0,
      r = !1,
      n = e.length;
    for (let s = 0; s < n; s += 1) {
      if (e[s] === '`' && s + 2 < n && e[s + 1] === '`' && e[s + 2] === '`') {
        ((r = !r), (s += 2));
        continue;
      }
      if (r || e[s] !== '*') continue;
      let l = s > 0 ? e[s - 1] : '',
        i = s < n - 1 ? e[s + 1] : '';
      Al(e, s, l, i) || (t += 1);
    }
    return t;
  },
  vl = (e, t, r, n) =>
    !!(
      r === '\\' ||
      (e.includes('$') && Ee(e, t)) ||
      pr(e, t) ||
      Tl(e, t) ||
      r === '_' ||
      n === '_' ||
      (r && n && Y(r) && Y(n))
    ),
  Ml = (e) => {
    let t = 0,
      r = !1,
      n = e.length;
    for (let s = 0; s < n; s += 1) {
      if (e[s] === '`' && s + 2 < n && e[s + 1] === '`' && e[s + 2] === '`') {
        ((r = !r), (s += 2));
        continue;
      }
      if (r || e[s] !== '_') continue;
      let l = s > 0 ? e[s - 1] : '',
        i = s < n - 1 ? e[s + 1] : '';
      vl(e, s, l, i) || (t += 1);
    }
    return t;
  },
  Il = (e) => {
    let t = 0,
      r = 0,
      n = !1;
    for (let s = 0; s < e.length; s += 1) {
      if (e[s] === '`' && s + 2 < e.length && e[s + 1] === '`' && e[s + 2] === '`') {
        (r >= 3 && (t += Math.floor(r / 3)), (r = 0), (n = !n), (s += 2));
        continue;
      }
      n || (e[s] === '*' ? (r += 1) : (r >= 3 && (t += Math.floor(r / 3)), (r = 0)));
    }
    return (r >= 3 && (t += Math.floor(r / 3)), t);
  },
  tt = (e) => {
    let t = 0,
      r = !1;
    for (let n = 0; n < e.length; n += 1) {
      if (e[n] === '`' && n + 2 < e.length && e[n + 1] === '`' && e[n + 2] === '`') {
        ((r = !r), (n += 2));
        continue;
      }
      r || (e[n] === '*' && n + 1 < e.length && e[n + 1] === '*' && ((t += 1), (n += 1)));
    }
    return t;
  },
  wt = (e) => {
    let t = 0,
      r = !1;
    for (let n = 0; n < e.length; n += 1) {
      if (e[n] === '`' && n + 2 < e.length && e[n + 1] === '`' && e[n + 2] === '`') {
        ((r = !r), (n += 2));
        continue;
      }
      r || (e[n] === '_' && n + 1 < e.length && e[n + 1] === '_' && ((t += 1), (n += 1)));
    }
    return t;
  },
  _l = (e, t, r) => {
    if (!t || ae.test(t)) return !0;
    let n = e.substring(0, r).lastIndexOf(`
`),
      s = n === -1 ? 0 : n + 1,
      l = e.substring(s, r);
    return ur.test(l) &&
      t.includes(`
`)
      ? !0
      : et(e, r, '*');
  },
  El = (e) => {
    let t = e.match(pl);
    if (!t) return e;
    let r = t[2],
      n = e.lastIndexOf(t[1]);
    return j(e, n) || V(e, n) || _l(e, r, n)
      ? e
      : tt(e) % 2 === 1
        ? r.endsWith('*')
          ? `${e}*`
          : `${e}**`
        : e;
  },
  Nl = (e, t, r) => {
    if (!t || ae.test(t)) return !0;
    let n = e.substring(0, r).lastIndexOf(`
`),
      s = n === -1 ? 0 : n + 1,
      l = e.substring(s, r);
    return ur.test(l) &&
      t.includes(`
`)
      ? !0
      : et(e, r, '_');
  },
  zl = (e) => {
    let t = e.match(fl);
    if (!t) {
      let s = e.match(Cl);
      if (s) {
        let l = e.lastIndexOf(s[1]);
        if (!(j(e, l) || V(e, l)) && wt(e) % 2 === 1) return `${e}_`;
      }
      return e;
    }
    let r = t[2],
      n = e.lastIndexOf(t[1]);
    return j(e, n) || V(e, n) || Nl(e, r, n) ? e : wt(e) % 2 === 1 ? `${e}__` : e;
  },
  Ll = (e) => {
    let t = !1;
    for (let r = 0; r < e.length; r += 1) {
      if (e[r] === '`' && r + 2 < e.length && e[r + 1] === '`' && e[r + 2] === '`') {
        ((t = !t), (r += 2));
        continue;
      }
      if (
        !t &&
        e[r] === '*' &&
        e[r - 1] !== '*' &&
        e[r + 1] !== '*' &&
        e[r - 1] !== '\\' &&
        !Ee(e, r)
      ) {
        let n = r > 0 ? e[r - 1] : '',
          s = r < e.length - 1 ? e[r + 1] : '';
        if (
          ((!n ||
            n === ' ' ||
            n === '	' ||
            n ===
              `
`) &&
            (!s ||
              s === ' ' ||
              s === '	' ||
              s ===
                `
`)) ||
          (n && s && Y(n) && Y(s))
        )
          continue;
        return r;
      }
    }
    return -1;
  },
  Pl = (e) => {
    if (!e.match(gl)) return e;
    let t = Ll(e);
    if (t === -1 || j(e, t) || V(e, t)) return e;
    let r = e.substring(t + 1);
    return !r || ae.test(r) ? e : fr(e) % 2 === 1 ? `${e}*` : e;
  },
  dr = (e) => {
    let t = !1;
    for (let r = 0; r < e.length; r += 1) {
      if (e[r] === '`' && r + 2 < e.length && e[r + 1] === '`' && e[r + 2] === '`') {
        ((t = !t), (r += 2));
        continue;
      }
      if (
        !t &&
        e[r] === '_' &&
        e[r - 1] !== '_' &&
        e[r + 1] !== '_' &&
        e[r - 1] !== '\\' &&
        !Ee(e, r) &&
        !pr(e, r)
      ) {
        let n = r > 0 ? e[r - 1] : '',
          s = r < e.length - 1 ? e[r + 1] : '';
        if (n && s && Y(n) && Y(s)) continue;
        return r;
      }
    }
    return -1;
  },
  Ol = (e) => {
    let t = e.length;
    for (
      ;
      t > 0 &&
      e[t - 1] ===
        `
`;
    )
      t -= 1;
    if (t < e.length) {
      let r = e.slice(0, t),
        n = e.slice(t);
      return `${r}_${n}`;
    }
    return `${e}_`;
  },
  Dl = (e) => {
    if (!e.endsWith('**')) return null;
    let t = e.slice(0, -2);
    if (tt(t) % 2 !== 1) return null;
    let r = t.indexOf('**'),
      n = dr(t);
    return r !== -1 && n !== -1 && r < n ? `${t}_**` : null;
  },
  Bl = (e) => {
    if (!e.match(ml)) return e;
    let t = dr(e);
    if (t === -1) return e;
    let r = e.substring(t + 1);
    if (!r || ae.test(r) || j(e, t) || V(e, t)) return e;
    if (Ml(e) % 2 === 1) {
      let n = Dl(e);
      return n !== null ? n : Ol(e);
    }
    return e;
  },
  jl = (e) => {
    let t = tt(e),
      r = fr(e);
    return t % 2 === 0 && r % 2 === 0;
  },
  Fl = (e, t, r) => (!t || ae.test(t) || j(e, r) || V(e, r) ? !0 : et(e, r, '*')),
  ql = (e) => {
    if (wl.test(e)) return e;
    let t = e.match(dl);
    if (!t) return e;
    let r = t[2],
      n = e.lastIndexOf(t[1]);
    return Fl(e, r, n) ? e : Il(e) % 2 === 1 ? (jl(e) ? e : `${e}***`) : e;
  },
  Kl = /<[a-zA-Z/][^>]*$/,
  Gl = (e) => {
    let t = e.match(Kl);
    return !t || t.index === void 0 || j(e, t.index) ? e : e.substring(0, t.index).trimEnd();
  },
  Hl = (e) =>
    !e.match(yl) ||
    e.includes(`
`)
      ? null
      : e.endsWith('``') && !e.endsWith('```')
        ? `${e}\``
        : e,
  Wl = (e) => (e.match(/```/g) || []).length % 2 === 1,
  Ul = (e) => {
    let t = Hl(e);
    if (t !== null) return t;
    let r = e.match(kl);
    if (r && !Wl(e)) {
      let n = r[2];
      if (!n || ae.test(n)) return e;
      if (cl(e) % 2 === 1) return `${e}\``;
    }
    return e;
  },
  gr = (e, t) =>
    (t >= 2 && e.substring(t - 2, t + 1) === '```') ||
    (t >= 1 && e.substring(t - 1, t + 2) === '```') ||
    (t <= e.length - 3 && e.substring(t, t + 3) === '```'),
  Zl = (e) => {
    let t = 0,
      r = !1;
    for (let n = 0; n < e.length - 1; n += 1)
      (e[n] === '`' && !gr(e, n) && (r = !r),
        !r && e[n] === '$' && e[n + 1] === '$' && ((t += 1), (n += 1)));
    return t;
  },
  Xl = (e) => {
    let t = 0,
      r = !1;
    for (let n = 0; n < e.length; n += 1) {
      if (e[n] === '\\') {
        n += 1;
        continue;
      }
      if (e[n] === '`' && !gr(e, n)) {
        r = !r;
        continue;
      }
      !r && e[n] === '$' && (n + 1 < e.length && e[n + 1] === '$' ? (n += 1) : (t += 1));
    }
    return t;
  },
  Ql = (e) => {
    if (e.endsWith('$') && !e.endsWith('$$')) return `${e}$`;
    let t = e.indexOf('$$');
    return t !== -1 &&
      e.indexOf(
        `
`,
        t,
      ) !== -1 &&
      !e.endsWith(`
`)
      ? `${e}
$$`
      : `${e}$$`;
  },
  Jl = (e) => (Zl(e) % 2 === 0 ? e : Ql(e)),
  Vl = (e) => (Xl(e) % 2 === 1 ? `${e}$` : e),
  Yl = (e, t, r) => {
    if (e.substring(t + 2).includes(')')) return null;
    let n = $l(e, t);
    if (n === -1 || j(e, n)) return null;
    let s = n > 0 && e[n - 1] === '!',
      l = s ? n - 1 : n,
      i = e.substring(0, l);
    if (s) return i;
    let o = e.substring(n + 1, t);
    return r === 'text-only' ? `${i}${o}` : `${i}[${o}](streamdown:incomplete-link)`;
  },
  Ct = (e, t) => {
    for (let r = 0; r < t; r++)
      if (e[r] === '[' && !j(e, r)) {
        if (r > 0 && e[r - 1] === '!') continue;
        let n = hr(e, r);
        if (n === -1) return r;
        if (n + 1 < e.length && e[n + 1] === '(') {
          let s = e.indexOf(')', n + 2);
          s !== -1 && (r = s);
        }
      }
    return t;
  },
  ei = (e, t, r) => {
    let n = t > 0 && e[t - 1] === '!',
      s = n ? t - 1 : t;
    if (!e.substring(t + 1).includes(']')) {
      let l = e.substring(0, s);
      if (n) return l;
      if (r === 'text-only') {
        let i = Ct(e, t);
        return e.substring(0, i) + e.substring(i + 1);
      }
      return `${e}](streamdown:incomplete-link)`;
    }
    if (hr(e, t) === -1) {
      let l = e.substring(0, s);
      if (n) return l;
      if (r === 'text-only') {
        let i = Ct(e, t);
        return e.substring(0, i) + e.substring(i + 1);
      }
      return `${e}](streamdown:incomplete-link)`;
    }
    return null;
  },
  mr = (e, t = 'protocol') => {
    let r = e.lastIndexOf('](');
    if (r !== -1 && !j(e, r)) {
      let n = Yl(e, r, t);
      if (n !== null) return n;
    }
    for (let n = e.length - 1; n >= 0; n -= 1)
      if (e[n] === '[' && !j(e, n)) {
        let s = ei(e, n, t);
        if (s !== null) return s;
      }
    return e;
  },
  ti = /^-{1,2}$/,
  ri = /^[\s]*-{1,2}[\s]+$/,
  ni = /^={1,2}$/,
  si = /^[\s]*={1,2}[\s]+$/,
  li = (e) => {
    if (!e || typeof e != 'string') return e;
    let t = e.lastIndexOf(`
`);
    if (t === -1) return e;
    let r = e.substring(t + 1),
      n = e.substring(0, t),
      s = r.trim();
    if (ti.test(s) && !r.match(ri)) {
      let l = n
        .split(
          `
`,
        )
        .at(-1);
      if (l && l.trim().length > 0) return `${e}​`;
    }
    if (ni.test(s) && !r.match(si)) {
      let l = n
        .split(
          `
`,
        )
        .at(-1);
      if (l && l.trim().length > 0) return `${e}​`;
    }
    return e;
  },
  ii = new RegExp('(?<=[\\p{L}\\p{N}_])~(?!~)(?=[\\p{L}\\p{N}_])', 'gu'),
  ai = (e) =>
    !e || typeof e != 'string' || !e.includes('~')
      ? e
      : e.replace(ii, (t, r) => (j(e, r) ? t : '\\~')),
  oi = (e) => {
    var t, r;
    let n = e.match(xl);
    if (n) {
      let s = n[2];
      if (!s || ae.test(s)) return e;
      let l = e.lastIndexOf(n[1]);
      if (j(e, l) || V(e, l)) return e;
      if (((t = e.match(yt)) == null ? void 0 : t.length) % 2 === 1) return `${e}~~`;
    } else {
      let s = e.match(Rl);
      if (s) {
        let l = e.lastIndexOf(s[0].slice(0, 2));
        if (j(e, l) || V(e, l)) return e;
        if (((r = e.match(yt)) == null ? void 0 : r.length) % 2 === 1) return `${e}~`;
      }
    }
    return e;
  },
  ze = (e) => e !== !1,
  ci = (e) => e === !0,
  D = {
    SINGLE_TILDE: 0,
    COMPARISON_OPERATORS: 5,
    HTML_TAGS: 10,
    SETEXT_HEADINGS: 15,
    LINKS: 20,
    BOLD_ITALIC: 30,
    BOLD: 35,
    ITALIC_DOUBLE_UNDERSCORE: 40,
    ITALIC_SINGLE_ASTERISK: 41,
    ITALIC_SINGLE_UNDERSCORE: 42,
    INLINE_CODE: 50,
    STRIKETHROUGH: 60,
    KATEX: 70,
    INLINE_KATEX: 75,
    DEFAULT: 100,
  },
  ui = [
    {
      handler: { name: 'singleTilde', handle: ai, priority: D.SINGLE_TILDE },
      optionKey: 'singleTilde',
    },
    {
      handler: { name: 'comparisonOperators', handle: hl, priority: D.COMPARISON_OPERATORS },
      optionKey: 'comparisonOperators',
    },
    { handler: { name: 'htmlTags', handle: Gl, priority: D.HTML_TAGS }, optionKey: 'htmlTags' },
    {
      handler: { name: 'setextHeadings', handle: li, priority: D.SETEXT_HEADINGS },
      optionKey: 'setextHeadings',
    },
    {
      handler: { name: 'links', handle: mr, priority: D.LINKS },
      optionKey: 'links',
      earlyReturn: (e) => e.endsWith('](streamdown:incomplete-link)'),
    },
    {
      handler: { name: 'boldItalic', handle: ql, priority: D.BOLD_ITALIC },
      optionKey: 'boldItalic',
    },
    { handler: { name: 'bold', handle: El, priority: D.BOLD }, optionKey: 'bold' },
    {
      handler: { name: 'italicDoubleUnderscore', handle: zl, priority: D.ITALIC_DOUBLE_UNDERSCORE },
      optionKey: 'italic',
    },
    {
      handler: { name: 'italicSingleAsterisk', handle: Pl, priority: D.ITALIC_SINGLE_ASTERISK },
      optionKey: 'italic',
    },
    {
      handler: { name: 'italicSingleUnderscore', handle: Bl, priority: D.ITALIC_SINGLE_UNDERSCORE },
      optionKey: 'italic',
    },
    {
      handler: { name: 'inlineCode', handle: Ul, priority: D.INLINE_CODE },
      optionKey: 'inlineCode',
    },
    {
      handler: { name: 'strikethrough', handle: oi, priority: D.STRIKETHROUGH },
      optionKey: 'strikethrough',
    },
    { handler: { name: 'katex', handle: Jl, priority: D.KATEX }, optionKey: 'katex' },
    {
      handler: { name: 'inlineKatex', handle: Vl, priority: D.INLINE_KATEX },
      optionKey: 'inlineKatex',
    },
  ],
  hi = (e) => {
    var t;
    let r = (t = e?.linkMode) != null ? t : 'protocol';
    return ui
      .filter(({ handler: n, optionKey: s }) =>
        n.name === 'links'
          ? ze(e?.links) || ze(e?.images)
          : n.name === 'inlineKatex'
            ? ci(e?.inlineKatex)
            : ze(e?.[s]),
      )
      .map(({ handler: n, earlyReturn: s }) =>
        n.name === 'links'
          ? {
              handler: cr(or({}, n), { handle: (l) => mr(l, r) }),
              earlyReturn: r === 'protocol' ? s : void 0,
            }
          : { handler: n, earlyReturn: s },
      );
  },
  pi = (e, t) => {
    var r;
    if (!e || typeof e != 'string') return e;
    let n = e.endsWith(' ') && !e.endsWith('  ') ? e.slice(0, -1) : e,
      s = hi(t),
      l = ((r = t?.handlers) != null ? r : []).map((o) => {
        var a;
        return {
          handler: cr(or({}, o), { priority: (a = o.priority) != null ? a : D.DEFAULT }),
          earlyReturn: void 0,
        };
      }),
      i = [...s, ...l].sort((o, a) => {
        var u, c;
        return (
          ((u = o.handler.priority) != null ? u : 0) - ((c = a.handler.priority) != null ? c : 0)
        );
      });
    for (let { handler: o, earlyReturn: a } of i)
      if (((n = o.handle(n)), a != null && a(n))) return n;
    return n;
  },
  fi = pi;
const Rt = 280,
  di = [Bt, { revealed: !0 }];
function Re(e) {
  return [...e].length;
}
function J() {
  return typeof performance > 'u' ? Date.now() : performance.now();
}
const $t = (e) => typeof e == 'object' && e !== null,
  Fe = (e, t) => {
    if (e === t) return !0;
    if (Array.isArray(e) || Array.isArray(t)) {
      if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
      for (let s = 0; s < e.length; s++) if (!Fe(e[s], t[s])) return !1;
      return !0;
    }
    if (!$t(e) || !$t(t)) return !1;
    const r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (const s of r) if (!Fe(e[s], t[s])) return !1;
    return !0;
  },
  gi = (e, t) => {
    const r = Array.isArray(e) ? e : [e],
      n = Array.isArray(t) ? t : [t];
    return r.length !== n.length || r[0] !== n[0] ? !1 : Fe(r.slice(1), n.slice(1));
  },
  qe = (e, t) => {
    if (e === t) return !0;
    if (!e || !t) return !e && !t;
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++) if (!gi(e[r], t[r])) return !1;
    return !0;
  },
  St = (e) => {
    const t = f.useRef(e);
    return (qe(t.current, e) || (t.current = e), t.current);
  },
  Ke = f.memo(
    ({ children: e, ...t }) => x.jsx(zt, { ...t, children: e }),
    (e, t) =>
      e.children === t.children &&
      e.components === t.components &&
      qe(e.rehypePlugins, t.rehypePlugins) &&
      qe(e.remarkPlugins, t.remarkPlugins),
  );
Ke.displayName = 'StreamdownBlock';
const kr = f.memo(({ children: e, ...t }) => {
  const { streamSmoothingPreset: r = 'balanced' } = ve(),
    n = Jt(),
    s = vt(e || ''),
    l = qt(),
    i = St(Zt()),
    o = St(Xt()),
    a = f.useId(),
    u = us(typeof s == 'string' ? s : '', { preset: r }),
    c = f.useMemo(() => {
      const y = n ? J() : 0,
        R = fi(u);
      return { durationMs: n ? J() - y : 0, value: R };
    }, [n, u]),
    h = c.value,
    d = f.useMemo(() => {
      const y = n ? J() : 0,
        R = $.lexer(h);
      let T = 0;
      const M = R.map((I) => {
        const E = { content: I.raw, startOffset: T };
        return ((T += I.raw.length), E);
      });
      return { durationMs: n ? J() - y : 0, value: M };
    }, [h, n]),
    p = d.value,
    { getBlockState: m, charDelay: g } = gs(p),
    b = f.useRef(new Map()),
    k = f.useRef(new Map()),
    v = f.useRef(new Map()),
    S = f.useRef(null),
    _ = J(),
    C = S.current === null ? 0 : Math.max(0, Math.min(_ - S.current, 120)),
    P = f.useMemo(() => {
      const y = n ? J() : 0,
        R = new Map(),
        T = v.current,
        M = b.current;
      for (const I of p) {
        const E = Re(I.content),
          A = M.get(I.startOffset) ?? 0,
          z = T.get(I.startOffset),
          L = Math.max(0, (E - 1) * g);
        if (z === void 0 || E < A) {
          R.set(I.startOffset, L);
          continue;
        }
        const te = z + C,
          W = Math.max(0, L - g * 2);
        R.set(I.startOffset, Math.max(te, W));
      }
      return { durationMs: n ? J() - y : 0, value: R };
    }, [p, g, C, n]),
    O = P.value;
  (f.useEffect(() => {
    n &&
      n.recordCalculation({
        durationMs: c.durationMs,
        name: 'content-normalize',
        textLength: h.length,
      });
  }, [h.length, c.durationMs, n]),
    f.useEffect(() => {
      n &&
        n.recordCalculation({
          durationMs: d.durationMs,
          itemCount: p.length,
          name: 'block-lex',
          textLength: h.length,
        });
    }, [p.length, d.durationMs, h.length, n]),
    f.useEffect(() => {
      n &&
        n.recordCalculation({
          durationMs: P.durationMs,
          itemCount: p.length,
          name: 'block-timeline',
          textLength: h.length,
        });
    }, [p.length, h.length, n, P.durationMs]));
  const Z = f.useMemo(() => {
    const y = new Map(),
      R = new Map();
    for (const [T, M] of p.entries()) {
      const I = m(T),
        E = O.get(M.startOffset) ?? 0,
        A = as({
          blockCharCount: Re(M.content),
          currentCharDelay: g,
          fadeDuration: Rt,
          previousCharDelay: k.current.get(M.startOffset),
          state: I,
          timelineElapsedMs: E,
        });
      (y.set(M.startOffset, A.charDelay), R.set(M.startOffset, A));
    }
    return { blockAnimationMeta: R, blockCharDelay: y };
  }, [p, g, m, O]);
  f.useEffect(() => {
    const y = new Map();
    for (const R of p) y.set(R.startOffset, Re(R.content));
    ((k.current = Z.blockCharDelay), (b.current = y), (v.current = O), (S.current = J()));
  }, [Z.blockCharDelay, p, O]);
  const X = f.useCallback(
      (y, R, T, M) => {
        n?.recordRootCommit({
          actualDuration: T,
          baseDuration: M,
          blockCount: p.length,
          phase: R,
          textLength: h.length,
        });
      },
      [p.length, h.length, n],
    ),
    ee = f.useCallback(
      (y, R, T, M) => {
        if (!n) return;
        const [, I, E] = y.split(':'),
          A = Number(I);
        if (!Number.isFinite(A)) return;
        const z = p[A];
        z &&
          n.recordBlockCommit({
            actualDuration: T,
            baseDuration: M,
            blockChars: Re(z.content),
            blockIndex: A,
            blockKey: E ?? String(z.startOffset),
            phase: R,
            state: m(A),
          });
      },
      [p, m, n],
    ),
    N = x.jsx('div', {
      className: os.animated,
      children: p.map((y, R) => {
        if (m(R) === 'queued') return null;
        const T = Z.blockAnimationMeta.get(y.startOffset);
        if (!T) return null;
        const M = T.settled
            ? [...i, di]
            : [
                ...i,
                [
                  Bt,
                  {
                    charDelay: T.charDelay,
                    fadeDuration: Rt,
                    timelineElapsedMs: T.timelineElapsedMs,
                  },
                ],
              ],
          I = `${a}-${y.startOffset}`,
          E = x.jsx(Ke, {
            ...t,
            components: l,
            rehypePlugins: M,
            remarkPlugins: o,
            children: y.content,
          });
        return n
          ? x.jsx(
              f.Profiler,
              { id: `streamdown-block:${R}:${y.startOffset}`, onRender: ee, children: E },
              I,
            )
          : f.createElement(
              Ke,
              { ...t, components: l, key: I, rehypePlugins: M, remarkPlugins: o },
              y.content,
            );
      }),
    });
  return n ? x.jsx(f.Profiler, { id: 'streamdown-root', onRender: X, children: N }) : N;
});
kr.displayName = 'StreamdownRender';
var mi = kr;
const xr = f.memo((e) => {
  const {
      ref: t,
      children: r = '',
      className: n,
      style: s,
      fullFeaturedCodeBlock: l,
      onDoubleClick: i,
      animated: o,
      enableLatex: a = !0,
      enableMermaid: u = !0,
      enableImageGallery: c,
      enableCustomFootnotes: h,
      enableGithubAlert: d,
      enableStream: p = !0,
      componentProps: m,
      rehypePluginsAhead: g,
      allowHtml: b,
      borderRadius: k,
      fontSize: v = e.variant === 'chat' ? 14 : void 0,
      headerMultiple: S = e.variant === 'chat' ? 0.25 : void 0,
      marginMultiple: _ = e.variant === 'chat' ? 1 : void 0,
      variant: C = 'default',
      reactMarkdownProps: P,
      lineHeight: O = e.variant === 'chat' ? 1.6 : void 0,
      rehypePlugins: Z,
      remarkPlugins: X,
      remarkPluginsAhead: ee,
      components: N = {},
      customRender: y,
      showFootnotes: R = !0,
      streamSmoothingPreset: T,
      citations: M,
      ...I
    } = e,
    E = Rn(o),
    A = f.useCallback(
      ({ enableStream: z, children: L, reactMarkdownProps: te }) => {
        const W = x.jsx(z ? mi : ss, { ...te, children: L });
        return y ? y(W, { text: L }) : W;
      },
      [y],
    );
  return x.jsx(Nr, {
    enable: c,
    children: x.jsx(zr, {
      'borderRadius': k,
      'className': Xr(Br({ enableLatex: a, variant: C }), n),
      'data-code-type': 'markdown',
      'fontSize': v,
      'headerMultiple': S,
      'lineHeight': O,
      'marginMultiple': _,
      'ref': t,
      'style': s,
      'onDoubleClick': i,
      ...I,
      'children': x.jsx(Dr, {
        allowHtml: b,
        animated: E,
        citations: M,
        componentProps: m,
        components: N,
        enableCustomFootnotes: h,
        enableGithubAlert: d,
        enableLatex: a,
        enableMermaid: u,
        fullFeaturedCodeBlock: l,
        rehypePlugins: Z,
        rehypePluginsAhead: g,
        remarkPlugins: X,
        remarkPluginsAhead: ee,
        showFootnotes: R,
        streamSmoothingPreset: T,
        variant: C,
        children: x.jsx(A, { enableStream: p && E, reactMarkdownProps: P, children: r }),
      }),
    }),
  });
});
xr.displayName = 'Markdown';
var zi = xr;
export { zi as M, rn as S, dn as a, Bt as b, gn as c, mn as d, xn as e, bn as f, fn as r, K as v };
