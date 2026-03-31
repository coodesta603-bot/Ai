import { ad as z, f as k, F as x, bE as E, j as B } from './index-C8UyLGsD.js';
import { r as d } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as L } from '../vendor/vendor-motion-Dbb9VQJo.js';
const a = k(({ css: r }) => ({
    bottomShadow: r`
      mask-image: linear-gradient(
        180deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    hideScrollBar: r`
      scrollbar-width: none;

      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `,
    horizontal: r`
      overflow-x: auto;
    `,
    leftRightShadow: r`
      mask-image: linear-gradient(
        to right,
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    leftShadow: r`
      mask-image: linear-gradient(
        270deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    rightShadow: r`
      mask-image: linear-gradient(
        90deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    root: r`
      position: relative;
      overflow: hidden;
    `,
    topBottomShadow: r`
      mask-image: linear-gradient(
        #000,
        #000,
        transparent 0,
        #000 var(--scroll-shadow-size, 40%),
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    topShadow: r`
      mask-image: linear-gradient(
        0deg,
        #000 calc(100% - var(--scroll-shadow-size, 40%)),
        transparent
      );
    `,
    vertical: r`
      overflow-y: auto;
    `,
  })),
  R = z(a.root, {
    defaultVariants: { hideScrollBar: !1, orientation: 'vertical', scrollPosition: 'none' },
    variants: {
      orientation: { horizontal: a.horizontal, vertical: a.vertical },
      hideScrollBar: { true: a.hideScrollBar, false: null },
      scrollPosition: {
        'none': null,
        'top': a.topShadow,
        'bottom': a.bottomShadow,
        'top-bottom': a.topBottomShadow,
        'left': a.leftShadow,
        'right': a.rightShadow,
        'left-right': a.leftRightShadow,
      },
    },
  }),
  j = ({
    domRef: r,
    offset: s = 0,
    orientation: l = 'vertical',
    isEnabled: h = !0,
    onVisibilityChange: f,
    updateDeps: m = [],
  }) => {
    const [n, g] = d.useState({ bottom: !1, left: !1, right: !1, top: !1 });
    return (
      d.useEffect(() => {
        const t = r.current;
        if (!t || !h) return;
        const i = () => {
          const o = { ...n };
          (l === 'vertical'
            ? t.scrollHeight > t.clientHeight
              ? ((o.top = t.scrollTop > s),
                (o.bottom = t.scrollTop + t.clientHeight < t.scrollHeight - s))
              : ((o.top = !1), (o.bottom = !1))
            : t.scrollWidth > t.clientWidth
              ? ((o.left = t.scrollLeft > s),
                (o.right = t.scrollLeft + t.clientWidth < t.scrollWidth - s))
              : ((o.left = !1), (o.right = !1)),
            g(o),
            f?.(o));
        };
        (i(), t.addEventListener('scroll', i), window.addEventListener('resize', i));
        const u = new ResizeObserver(i);
        return (
          u.observe(t),
          () => {
            (t.removeEventListener('scroll', i),
              window.removeEventListener('resize', i),
              u.disconnect());
          }
        );
      }, [r, s, l, h, f, ...m]),
      n
    );
  },
  S = ({
    className: r,
    children: s,
    orientation: l = 'vertical',
    hideScrollBar: h = !1,
    size: f = 16,
    offset: m = 8,
    visibility: n = 'auto',
    isEnabled: g = !0,
    onVisibilityChange: t,
    style: i,
    ref: u,
    ...o
  }) => {
    const v = d.useMemo(() => ({ '--scroll-shadow-size': `${f}%` }), [f]),
      p = d.useRef(null),
      w = j({
        domRef: p,
        isEnabled: g && n === 'auto',
        offset: m,
        onVisibilityChange: t,
        orientation: l,
        updateDeps: [s],
      }),
      e = d.useMemo(
        () =>
          n === 'always'
            ? { bottom: !0, left: !0, right: !0, top: !0 }
            : n === 'never'
              ? { bottom: !1, left: !1, right: !1, top: !1 }
              : w,
        [n, w],
      ),
      b = d.useMemo(() => {
        const c = { 'data-orientation': l };
        return (
          l === 'vertical'
            ? e.top && e.bottom
              ? (c['data-top-bottom-scroll'] = !0)
              : e.top
                ? (c['data-top-scroll'] = !0)
                : e.bottom && (c['data-bottom-scroll'] = !0)
            : e.left && e.right
              ? (c['data-left-right-scroll'] = !0)
              : e.left
                ? (c['data-left-scroll'] = !0)
                : e.right && (c['data-right-scroll'] = !0),
          c
        );
      }, [l, e]);
    return L.jsx(x, {
      className: B(
        R({
          hideScrollBar: h,
          orientation: l,
          scrollPosition: d.useMemo(() => {
            if (l === 'vertical') {
              if (e.top && e.bottom) return 'top-bottom';
              if (e.top) return 'top';
              if (e.bottom) return 'bottom';
            } else {
              if (e.left && e.right) return 'left-right';
              if (e.left) return 'left';
              if (e.right) return 'right';
            }
            return 'none';
          }, [l, e]),
        }),
        r,
      ),
      ref: E([p, u]),
      style: { ...v, ...i },
      ...b,
      ...o,
      children: s,
    });
  };
S.displayName = 'ScrollShadow';
var W = S;
export { W as S };
