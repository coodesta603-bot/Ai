import { f as m, j as y } from './index-C8UyLGsD.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
const i = m(({ css: e, cssVar: n }) => {
    const a = 'var(--loading-dots-size, 8px)',
      s = 'var(--loading-dots-color, var(--ant-color-primary))';
    return {
      container: e`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      justify-content: center;

      padding: ${n.paddingXS};
    `,
      defaultDot: e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${s};

      animation: fade-animation 1.2s ease-in-out infinite;

      @keyframes fade-animation {
        0%,
        100% {
          opacity: 0.3;
        }

        50% {
          opacity: 1;
        }
      }
    `,
      orbitContainer: e`
      position: relative;
      width: calc(${a} * 4);
      height: calc(${a} * 4);
    `,
      orbitDot: e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform-origin: calc(${a} * 2) 0;

      width: ${a};
      height: ${a};
      margin-block-start: calc(${a} / -2);
      margin-inline-start: calc(${a} / -2);
      border-radius: 50%;

      background-color: ${s};

      animation: orbit-animation 1.2s linear infinite;

      @keyframes orbit-animation {
        0% {
          transform: rotate(0deg) translateX(calc(${a} * 2));
        }

        100% {
          transform: rotate(360deg) translateX(calc(${a} * 2));
        }
      }
    `,
      orbitWrapper: e`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      width: calc(${a} * 5);
      height: calc(${a} * 5);
      padding: ${n.paddingXS};
    `,
      pulseDot: e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${s};

      animation: pulse-animation 1.2s ease-in-out infinite;

      @keyframes pulse-animation {
        0%,
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }

        50% {
          transform: scale(1.3);
          opacity: 1;
        }
      }
    `,
      typingDot: e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${s};

      animation: typing-animation 1.2s ease-in-out infinite;

      @keyframes typing-animation {
        0%,
        100% {
          transform: scale(0.6);
          opacity: 0.2;
        }

        25% {
          transform: scale(1);
          opacity: 1;
        }

        50%,
        75% {
          transform: scale(0.6);
          opacity: 0.2;
        }
      }
    `,
      waveDot: e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${s};

      animation: wave-animation 1.24s ease-in-out infinite;

      @keyframes wave-animation {
        0%,
        100% {
          transform: translateY(0);
        }

        25% {
          transform: translateY(calc(${a} * -1.5));
        }

        50% {
          transform: translateY(0);
        }
      }
    `,
    };
  }),
  r = ({ size: e = 8, color: n, variant: a = 'dots', className: s, style: l }) => {
    const c = p.useMemo(() => {
        const o = { '--loading-dots-size': `${e}px` };
        return (n && (o['--loading-dots-color'] = n), o);
      }, [n, e]),
      d = () => {
        switch (a) {
          case 'pulse':
            return t.jsx('div', { className: i.pulseDot, style: { animationDelay: '0s' } });
          case 'wave':
            return t.jsxs(t.Fragment, {
              children: [
                t.jsx('div', { className: i.waveDot, style: { animationDelay: '0s' } }),
                t.jsx('div', { className: i.waveDot, style: { animationDelay: '0.12s' } }),
                t.jsx('div', { className: i.waveDot, style: { animationDelay: '0.24s' } }),
              ],
            });
          case 'orbit':
            return t.jsxs('div', {
              className: i.orbitContainer,
              children: [
                t.jsx('div', { className: i.orbitDot, style: { animationDelay: '0s' } }),
                t.jsx('div', { className: i.orbitDot, style: { animationDelay: '-0.4s' } }),
                t.jsx('div', { className: i.orbitDot, style: { animationDelay: '-0.8s' } }),
              ],
            });
          case 'typing':
            return t.jsxs(t.Fragment, {
              children: [
                t.jsx('div', { className: i.typingDot, style: { animationDelay: '0s' } }),
                t.jsx('div', { className: i.typingDot, style: { animationDelay: '0.15s' } }),
                t.jsx('div', { className: i.typingDot, style: { animationDelay: '0.3s' } }),
              ],
            });
          default:
            return t.jsxs(t.Fragment, {
              children: [
                t.jsx('div', { className: i.defaultDot, style: { animationDelay: '0s' } }),
                t.jsx('div', { className: i.defaultDot, style: { animationDelay: '0.15s' } }),
                t.jsx('div', { className: i.defaultDot, style: { animationDelay: '0.3s' } }),
              ],
            });
        }
      };
    return t.jsx('div', {
      className: y(a === 'orbit' ? i.orbitWrapper : i.container, s),
      style: { ...c, ...l },
      children: d(),
    });
  };
r.displayName = 'LoadingDots';
var D = r;
export { D as L };
