import { f as le, bs as ue, j as me } from './index-C8UyLGsD.js';
import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as f } from '../vendor/vendor-motion-Dbb9VQJo.js';
const a = le(({ css: r, cssVar: o }) => ({
    container: r`
    display: inline-block;
    white-space: pre-wrap;
  `,
    cursor: r`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 3px;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,
    cursorBlock: r`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 0.5em;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,
    cursorCustom: r`
    display: inline-block;
    align-items: center;
    margin-inline-start: 0.25rem;
    opacity: 1;
  `,
    cursorDot: r`
    display: inline-block;
    align-items: center;

    width: 0.75em;
    height: 0.75em;
    margin-inline-start: 0.25rem;
    border-radius: 50%;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,
    cursorHidden: r`
    display: none;
  `,
    cursorUnderscore: r`
    transform: translateY(0.3em);

    display: inline-block;
    align-items: center;

    width: 0.6em;
    height: 0.15em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,
    text: r`
    color: ${o.colorText};
  `,
  })),
  Q = t.memo(
    ({
      sentences: r,
      as: o = 'div',
      typingSpeed: d = 100,
      initialDelay: P = 0,
      pauseDuration: S = 2e3,
      deletingSpeed: R = 50,
      deletePauseDuration: h = 0,
      loop: T = !0,
      className: X = '',
      color: Y,
      showCursor: Z = !0,
      hideCursorWhileTyping: b = !1,
      cursorCharacter: I,
      cursorClassName: B = '',
      cursorColor: V,
      cursorBlinkDuration: W = 0.8,
      cursorFade: $ = !0,
      cursorStyle: ee = 'pipe',
      textColors: k = [],
      variableSpeed: g,
      onSentenceComplete: w,
      startOnVisible: C = !1,
      reverseMode: D = !1,
      segmentMode: j = 'grapheme',
      ...te
    }) => {
      const F = ue(),
        E = me,
        [y, H] = t.useState(''),
        [c, O] = t.useState(0),
        [l, U] = t.useState(!1),
        [s, re] = t.useState(0),
        [_, ne] = t.useState(!C),
        [L, M] = t.useState(!1),
        A = t.useRef(null),
        i = t.useMemo(() => (Array.isArray(r) ? r : [r]), [r]),
        u = t.useCallback(
          (e) => {
            if (typeof Intl < 'u' && 'Segmenter' in Intl) {
              const n = new Intl.Segmenter(void 0, { granularity: j });
              return Array.from(n.segment(e), (p) => p.segment);
            }
            return j === 'word' ? e.split(/(\s+)/).filter(Boolean) : Array.from(e);
          },
          [j],
        ),
        q = t.useCallback(() => {
          if (!g) return d;
          const { min: e, max: n } = g;
          return Math.random() * (n - e) + e;
        }, [g, d]),
        se = () => (k.length > 0 ? k[s % k.length] : Y),
        ie = () => V || Y;
      (t.useEffect(() => {
        if (!C || !A.current) return;
        const e = new IntersectionObserver(
          (n) => {
            n.forEach((p) => {
              p.isIntersecting && ne(!0);
            });
          },
          { threshold: 0.1 },
        );
        return (e.observe(A.current), () => e.disconnect());
      }, [C]),
        t.useEffect(() => {
          if (!_) return;
          let e;
          const n = i[s],
            p = u(n),
            ce = D ? p.reverse().join('') : n;
          if (L)
            return (
              (e = setTimeout(() => {
                M(!1);
              }, h)),
              () => clearTimeout(e)
            );
          const K = () => {
            if (l)
              if (y === '') {
                if ((U(!1), s === i.length - 1 && !T)) return;
                if ((w && w(i[s], s), re((m) => (m + 1) % i.length), O(0), h > 0)) {
                  M(!0);
                  return;
                }
              } else
                e = setTimeout(() => {
                  H((m) => u(m).slice(0, -1).join(''));
                }, R);
            else {
              const m = u(ce);
              if (c < m.length)
                e = setTimeout(
                  () => {
                    (H((v) => v + m[c]), O((v) => v + 1));
                  },
                  g ? q() : d,
                );
              else if (i.length >= 1) {
                if (!T && s === i.length - 1) return;
                e = setTimeout(() => {
                  U(!0);
                }, S);
              }
            }
          };
          return (c === 0 && !l && y === '' ? (e = setTimeout(K, P)) : K(), () => clearTimeout(e));
        }, [c, y, l, L, d, R, h, S, i, s, T, P, _, D, g, w, q, u]));
      const z = () => {
          if (I) return a.cursorCustom;
          switch (ee) {
            case 'block':
              return a.cursorBlock;
            case 'dot':
              return a.cursorDot;
            case 'underscore':
              return a.cursorUnderscore;
            case 'pipe':
              return a.cursor;
          }
        },
        G = u(i[s]).length,
        oe = c < G && !l,
        x = b === !0 ? !0 : b === 'typing' ? oe || l : b === 'afterTyping' ? c === G && !l : !1,
        J = se(),
        N = ie(),
        ae = u(y);
      return t.createElement(
        o,
        { className: E(a.container, X), ref: A, ...te },
        f.jsxs(f.Fragment, {
          children: [
            f.jsx('span', {
              className: a.text,
              style: J ? { color: J } : void 0,
              children: ae.map((e, n) =>
                f.jsx(
                  F.span,
                  {
                    animate: { opacity: 1 },
                    initial: { opacity: 0 },
                    style: { display: 'inline-block' },
                    transition: { duration: d / 500, ease: 'easeInOut' },
                    children: e === ' ' ? ' ' : e,
                  },
                  `${s}-${n}`,
                ),
              ),
            }),
            Z &&
              ($
                ? f.jsx(F.span, {
                    animate: { opacity: x ? 0 : 1 },
                    className: E(z(), B),
                    initial: { opacity: 0 },
                    style: N ? { backgroundColor: N } : void 0,
                    transition: {
                      duration: x ? 0.2 : W,
                      ease: 'easeInOut',
                      repeat: x ? 0 : Number.POSITIVE_INFINITY,
                      repeatType: 'reverse',
                    },
                    children: I,
                  })
                : f.jsx('span', {
                    className: E(z(), B),
                    style: { backgroundColor: N, opacity: x ? 0 : 1 },
                    children: I,
                  })),
          ],
        }),
      );
    },
  );
Q.displayName = 'TypewriterEffect';
var ye = Q;
export { ye as T };
