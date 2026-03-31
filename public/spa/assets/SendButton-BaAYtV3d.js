import { j as u, f as w, k as T, B as h, I as V } from './index-C8UyLGsD.js';
import { r as W } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as M } from './index-CqaQ90GQ.js';
import { D as K } from './index-BHffy9NV.js';
import { b4 as q } from '../vendor/vendor-icons-BHMUH78i.js';
var B;
function A(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var F = w(function (t) {
    var e = t.css;
    return {
      icon: e(
        B ||
          (B = A([
            `
    flex: none;
    line-height: 1;
  `,
          ])),
      ),
    };
  }),
  C = function (e) {
    var n = e.size,
      r = n === void 0 ? '1em' : n,
      i = e.style;
    return a.jsx('svg', {
      className: u('anticon', F.icon),
      fill: 'currentColor',
      fillRule: 'evenodd',
      height: r,
      style: i,
      viewBox: '0 0 14 14',
      width: r,
      xmlns: 'http://www.w3.org/2000/svg',
      children: a.jsx('path', {
        d: 'M.743 3.773c-.818-.555-.422-1.834.567-1.828l11.496.074a1 1 0 01.837 1.538l-6.189 9.689c-.532.833-1.822.47-1.842-.518L5.525 8.51a1 1 0 01.522-.9l1.263-.686a.808.808 0 00-.772-1.42l-1.263.686a1 1 0 01-1.039-.051L.743 3.773z',
      }),
    });
  },
  N;
function G(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var H = w(function (t) {
    var e = t.css;
    return {
      icon: e(
        N ||
          (N = G([
            `
    flex: none;
    line-height: 1;
  `,
          ])),
      ),
    };
  }),
  J = function (e) {
    var n = e.size,
      r = n === void 0 ? '1.5em' : n,
      i = e.style;
    return a.jsx('svg', {
      className: u('anticon', H.icon),
      color: 'currentColor',
      height: r,
      style: i,
      viewBox: '0 0 1024 1024',
      width: r,
      xmlns: 'http://www.w3.org/2000/svg',
      children: a.jsxs('g', {
        fill: 'none',
        children: [
          a.jsx('circle', {
            cx: '512',
            cy: '512',
            fill: 'none',
            r: '426',
            stroke: T.colorBorder,
            strokeWidth: '72',
          }),
          a.jsx('rect', {
            fill: 'currentColor',
            height: '252',
            rx: '24',
            ry: '24',
            width: '252',
            x: '386',
            y: '386',
          }),
          a.jsx('path', {
            d: 'M938.667 512C938.667 276.359 747.64 85.333 512 85.333',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeWidth: '73',
            children: a.jsx('animateTransform', {
              attributeName: 'transform',
              dur: '1s',
              from: '0 512 512',
              repeatCount: 'indefinite',
              to: '360 512 512',
              type: 'rotate',
            }),
          }),
        ],
      }),
    });
  },
  D,
  _,
  $,
  L,
  I;
function j(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
  );
}
var d = 'ant',
  l = w(function (t) {
    var e = t.css,
      n = t.cssVar;
    return {
      button: e(
        D ||
          (D = j([
            `
    &.`,
            `-btn {
      flex: none;
      width: var(--send-button-size, 32px) !important;
      height: var(--send-button-size, 32px);
      padding-inline: 0 !important;
    }
  `,
          ])),
        d,
      ),
      disabled: e(
        _ ||
          (_ = j([
            `
    &.`,
            `-btn {
      cursor: default;
      border-color: `,
            `;
      background: transparent;
    }

    .`,
            `-btn-compact-first-item {
      cursor: default;
      border-color: `,
            `;
      background: transparent;
    }
    .`,
            `-dropdown-trigger {
      cursor: default;
      border-color: `,
            `;
      border-inline-start-color: transparent;
      background: transparent;
    }
  `,
          ])),
        d,
        n.colorBorderSecondary,
        d,
        n.colorBorderSecondary,
        d,
        n.colorBorderSecondary,
      ),
      dropdownButton: e(
        $ ||
          ($ = j([
            `
    flex: none;
    width: fit-content;
    .`,
            `-btn {
      width: calc(var(--send-button-size, 32px) * 1.2);
      height: var(--send-button-size, 32px);
    }
    .`,
            `-dropdown-trigger {
      width: calc(var(--send-button-size, 32px) * 0.8);
      &.`,
            `-btn-primary {
        &::before {
          background-color: color-mix(in srgb, `,
            ` 10%, transparent) !important;
        }
      }
    }
  `,
          ])),
        d,
        d,
        d,
        n.colorBgLayout,
      ),
      dropdownButtonRound: e(
        L ||
          (L = j([
            `
    .`,
            `-btn-compact-first-item {
      border-start-start-radius: calc(var(--send-button-size, 32px) / 2);
      border-end-start-radius: calc(var(--send-button-size, 32px) / 2);
    }
    .`,
            `-dropdown-trigger {
      width: var(--send-button-size, 32px);
      border-start-end-radius: calc(var(--send-button-size, 32px) / 2);
      border-end-end-radius: calc(var(--send-button-size, 32px) / 2);
    }
  `,
          ])),
        d,
        d,
      ),
      loadingButton: e(
        I ||
          (I = j([
            `
    &.`,
            `-btn {
      flex: none;
      height: var(--send-button-size, 32px);
      padding-inline: 0 !important;
    }
  `,
          ])),
        d,
      ),
    };
  });
function x(t) {
  '@babel/helpers - typeof';
  return (
    (x =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    x(t)
  );
}
var Q = [
  'type',
  'menu',
  'className',
  'style',
  'loading',
  'generating',
  'size',
  'shape',
  'onSend',
  'onStop',
  'disabled',
  'onClick',
];
function E(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    (e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? E(Object(n), !0).forEach(function (r) {
          U(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : E(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function U(t, e, n) {
  return (
    (e = X(e)),
    e in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function X(t) {
  var e = Y(t, 'string');
  return x(e) == 'symbol' ? e : String(e);
}
function Y(t, e) {
  if (x(t) != 'object' || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (x(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Z(t, e) {
  if (t == null) return {};
  var n = ee(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((r = s[i]),
        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
  }
  return n;
}
function ee(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++) ((i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]));
  return n;
}
var te = function (e) {
  var n = e.type,
    r = n === void 0 ? 'primary' : n,
    i = e.menu,
    s = e.className,
    v = e.style,
    S = e.loading,
    R = e.generating,
    z = e.size,
    p = z === void 0 ? 32 : z,
    f = e.shape,
    O = e.onSend,
    P = e.onStop,
    b = e.disabled,
    m = e.onClick,
    y = Z(e, Q),
    g = W.useMemo(
      function () {
        return { '--send-button-size': ''.concat(p, 'px') };
      },
      [p],
    );
  return R
    ? a.jsx(
        h,
        o(
          o(
            {
              className: u(l.loadingButton, s),
              onClick: function (c) {
                (c.stopPropagation(), c.preventDefault(), P && P(c), m && m(c));
              },
              shape: f,
              style: o(o(o({}, g), v), {}, { width: i ? p * 2 : p }),
            },
            y,
          ),
          {},
          { children: a.jsx(J, { size: p * 0.75 }) },
        ),
      )
    : S
      ? a.jsx(
          h,
          o(
            {
              className: u(l.loadingButton, s),
              disabled: !0,
              loading: S,
              shape: f,
              style: o(o(o({}, g), v), {}, { width: i ? p * 2 : p }),
              type: r,
            },
            y,
          ),
        )
      : i
        ? a.jsxs(
            M.Compact,
            o(
              o(
                {
                  className: u(
                    l.dropdownButton,
                    b && l.disabled,
                    f === 'round' && l.dropdownButtonRound,
                    s,
                  ),
                  style: o(o({}, g), v),
                },
                y,
              ),
              {},
              {
                children: [
                  a.jsx(
                    h,
                    o(
                      {
                        className: u(l.button, b && l.disabled, s),
                        disabled: b,
                        icon: a.jsx(C, {}),
                        onClick: function (c) {
                          (c.stopPropagation(), c.preventDefault(), O && O(c), m && m(c));
                        },
                        shape: f,
                        style: o(o({}, g), v),
                        type: r,
                      },
                      y,
                    ),
                  ),
                  a.jsx(
                    K,
                    o(
                      o({ menu: i, placement: 'topRight' }, y),
                      {},
                      {
                        children: a.jsx(h, {
                          className: u(l.button, b && l.disabled, s),
                          disabled: b,
                          icon: a.jsx(V, { icon: q }),
                          shape: f,
                          style: o(o({}, g), {}, { cursor: 'pointer' }),
                          type: r,
                        }),
                      },
                    ),
                  ),
                ],
              },
            ),
          )
        : a.jsx(
            h,
            o(
              {
                className: u(l.button, b && l.disabled, s),
                disabled: b,
                icon: a.jsx(C, {}),
                onClick: function (c) {
                  (c.stopPropagation(), c.preventDefault(), O && O(c), m && m(c));
                },
                shape: f,
                style: o(o({}, g), v),
                type: r,
              },
              y,
            ),
          );
};
te.displayName = 'SendButton';
export { te as S };
