import { f as d, a3 as h, j as v } from './index-C8UyLGsD.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as x } from '../vendor/vendor-motion-Dbb9VQJo.js';
const l = d(({ css: o, cssVar: t }) => ({
    spotlightDark: o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      ${t.colorText},
      transparent
    );

    transition: all 0.2s;
  `,
    spotlightDarkOutside: o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      ${t.colorText},
      transparent
    );

    transition: all 0.2s;
  `,
    spotlightLight: o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      ${t.colorTextQuaternary}
    );

    transition: all 0.2s;
  `,
    spotlightLightOutside: o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      ${t.colorTextQuaternary}
    );

    transition: all 0.2s;
  `,
  })),
  f = () => {
    const [o, t] = r.useState(),
      [p, s] = r.useState(!0),
      e = r.useRef(null);
    return (
      r.useEffect(() => {
        if (e.current && e.current.parentElement) {
          const i = e.current.parentElement,
            n = (u) => {
              const c = i.getBoundingClientRect();
              (t({ x: u.clientX - c.x, y: u.clientY - c.y }), s(!1));
            },
            a = () => {
              s(!0);
            };
          return (
            i.addEventListener('mousemove', n),
            i.addEventListener('mouseleave', a),
            () => {
              (i.removeEventListener('mousemove', n), i.removeEventListener('mouseleave', a));
            }
          );
        }
      }, []),
      [o, p, e]
    );
  },
  g = r.memo(({ className: o, size: t = 64, ...p }) => {
    const [s, e, i] = f(),
      { isDarkMode: n } = h(),
      a = r.useMemo(
        () => ({
          '--spotlight-opacity': e ? '0' : '0.1',
          '--spotlight-size': `${t}px`,
          '--spotlight-x': `${s?.x ?? 0}px`,
          '--spotlight-y': `${s?.y ?? 0}px`,
        }),
        [s, t, e],
      );
    return x.jsx('div', {
      className: v(
        n
          ? e
            ? l.spotlightDarkOutside
            : l.spotlightDark
          : e
            ? l.spotlightLightOutside
            : l.spotlightLight,
        o,
      ),
      ref: i,
      style: a,
      ...p,
    });
  });
g.displayName = 'Spotlight';
var k = g;
export { k as S };
