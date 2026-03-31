import { j as n } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { k as h, I as H, j as g, f as j, g as y, C as b } from './index-C8UyLGsD.js';
import { E as k } from './Empty-DHLc2EKW.js';
import { M as E } from './Markdown-Mtmmwid1.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as C } from './useToc-DTdMmFZe.js';
import { j as M } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { aP as _, aQ as w, aR as I, aS as S, F } from '../vendor/vendor-icons-BHMUH78i.js';
const u = (e) => {
    let r = '';
    return (
      a.Children.forEach(e, (t) => {
        typeof t == 'string' || typeof t == 'number'
          ? (r += t)
          : a.isValidElement(t) && t.props.children && (r += u(t.props.children));
      }),
      r
    );
  },
  P = { h2: S, h3: I, h4: w, h5: _ },
  p = j(({ cx: e, css: r, cssVar: t }) => ({
    anchor: e(
      'toc-anchor',
      r`
      display: none;
      margin-inline-start: 0.5rem;
      color: ${t.colorTextDescription} !important;
    `,
    ),
    container: r`
    &:hover {
      .toc-anchor {
        display: inline;
      }
    }
  `,
  })),
  i =
    (e) =>
    ({ children: t, className: o, style: l, ...c }) => {
      const { setToc: m, setFinished: d } = C(),
        f = a.useMemo(() => u(t), [t]),
        s = M(f);
      return (
        a.useEffect(() => {
          m &&
            ((e === 'h2' || e === 'h3') &&
              m?.((x = []) => [...x, { href: `#${s}`, level: e === 'h2' ? 2 : 3, title: f }]),
            d());
        }, [s]),
        e === 'h1'
          ? n.jsx(e, { style: { color: h.colorText, ...l }, ...c, id: s, children: t })
          : n.jsxs(e, {
              className: g(p.container, o),
              style: { color: h.colorText, ...l },
              ...c,
              id: s,
              children: [
                t,
                n.jsx('a', {
                  'aria-label': 'Permalink for this section',
                  'className': p.anchor,
                  'href': `#${s}`,
                  'style': { scrollMarginTop: 96 },
                  'children': n.jsx(H, { icon: P[e] }),
                }),
              ],
            })
      );
    },
  R = i('h1'),
  T = i('h2'),
  V = i('h3'),
  W = i('h4'),
  $ = i('h5'),
  q = a.memo(({ children: e }) => {
    const { t: r } = y('common');
    return e
      ? n.jsx(E, {
          allowHtml: !0,
          enableImageGallery: !1,
          enableLatex: !1,
          components: {
            a: ({ href: t, ...o }) =>
              t && t.startsWith('http')
                ? n.jsx('a', { ...o, href: t, rel: 'noreferrer', target: '_blank' })
                : o?.children,
            h1: R,
            h2: T,
            h3: V,
            h4: W,
            h5: $,
            img: ({ src: t, ...o }) =>
              typeof t != 'string' || t.includes('glama.ai')
                ? null
                : t.startsWith('http')
                  ? n.jsx('img', { src: t, ...o })
                  : null,
          },
          children: e,
        })
      : n.jsx(b, {
          paddingBlock: 32,
          width: '100%',
          children: n.jsx(k, {
            description: r('noContent'),
            descriptionProps: { fontSize: 14 },
            icon: F,
            style: { maxWidth: 400 },
          }),
        });
  });
export { q as M };
