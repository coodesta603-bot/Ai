import {
  f as _e,
  a3 as Wt,
  ai as Lt,
  j as $,
  F as T,
  hu as lt,
  J as $t,
  u as be,
  s as dt,
  M as Se,
  eV as Ee,
  g as oe,
  i as Ft,
  hv as Gt,
  I as U,
  T as ct,
  $ as ze,
  k as ue,
  c as ut,
  A as pt,
  bz as ht,
  v as ft,
  b3 as gt,
  bA as mt,
  m as Ut,
} from './index-C8UyLGsD.js';
import { R as yt } from './index-DiBRq82H.js';
import { r as M, b as vt, g as Xt } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a as Yt } from './ChatInputActionBar-D4T5Vfpz.js';
import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  f as re,
  g as ie,
  c as Q,
  d as ee,
  e as te,
  h as qt,
  i as Vt,
  j as Kt,
  k as Jt,
  l as Zt,
  a as Qt,
  b as en,
} from './DropdownMenu-CEFIlaZw.js';
import { r as xt } from './index-Chjiymov.js';
import { u as Ne } from './useEnabledChatModels-Dc-yaT5f.js';
import { s as se } from './getPseudoElementBounds-D4ZSmtDt.js';
import { P as je, M as we } from './index-CATsCkTi.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { h as G, f as tn } from './format-DpcrcXfF.js';
import './providerConfig-qS2Xx-oI.js';
import { c as bt, g as nn, a as on } from './pricing-CTrHA2DR.js';
import { A as rn, a as he } from './AccordionItem-BUupnbbL.js';
import { u as St } from './store-CTAK9tZ0.js';
import { F as Ae } from './index-IVfJW6S-.js';
import {
  u as sn,
  r as an,
  j as ln,
  i as dn,
  h as cn,
  R as un,
  E as pn,
  q as hn,
  p as fn,
  n as gn,
  o as mn,
  G as yn,
  C as vn,
  g as xn,
  e as bn,
  f as Sn,
  d as wn,
  c as Pn,
  b as jn,
  a as Dn,
  T as kn,
  m as zn,
  l as Mn,
  k as Rn,
  I as Tn,
} from './ThinkingSlider-CIsWhNtc.js';
import { o as Be, q as Cn } from './index-Br6hqyew.js';
import { S as ye } from './index-CaOmqfDS.js';
import { F as _n } from './index-5nC5GwBn.js';
import { T as He } from './Trans-B9Jc6Abr.js';
import { a as wt } from './_auth-sIxU1rKL.js';
import {
  aM as Nn,
  aL as In,
  I as Pt,
  aN as On,
  W as En,
  eq as An,
  m as Bn,
  er as ve,
  es as ce,
  et as xe,
  cw as jt,
  bE as Pe,
  by as Dt,
  o as Hn,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { B as Wn } from './Block-DDntSWi2.js';
import { S as Ln } from './SearchBar-BtAHEw-s.js';
import { S as $n } from './Segmented-9Z1phQkA.js';
import { P as Fn } from './ProviderIcon-Dg9rvCHb.js';
var We, Le, $e, Fe, Ge, Ue, Xe, Ye, qe;
function q(n, o) {
  return (
    o || (o = n.slice(0)),
    Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(o) } }))
  );
}
var V = _e(function (n) {
  var o = n.css,
    e = n.cssVar;
  return {
    bodyEditor: o(
      We ||
        (We = q([
          `
    z-index: 0;
    flex: 1;
  `,
        ])),
    ),
    containerDark: o(
      Le ||
        (Le = q([
          `
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    border: 1px solid `,
          `;
    border-radius: `,
          `;

    background-color: `,
          `;
    box-shadow: 0 4px 4px color-mix(in srgb, #000 40%, transparent);
  `,
        ])),
      e.colorFillSecondary,
      e.borderRadiusLG,
      e.colorBgElevated,
    ),
    containerLight: o(
      $e ||
        ($e = q([
          `
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    border: 1px solid `,
          `;
    border-radius: `,
          `;

    background-color: `,
          `;
    box-shadow: 0 4px 4px color-mix(in srgb, #000 4%, transparent);
  `,
        ])),
      e.colorFill,
      e.borderRadiusLG,
      e.colorBgElevated,
    ),
    editor: o(
      Fe ||
        (Fe = q([
          `
    cursor: text;

    overflow: hidden auto;
    flex: 1;

    width: 100%;
    padding-block: 8px 0;
    padding-inline: 12px;
  `,
        ])),
    ),
    footer: o(
      Ge ||
        (Ge = q([
          `
    z-index: 1;
    width: 100%;
  `,
        ])),
    ),
    header: o(
      Ue ||
        (Ue = q([
          `
    z-index: 1;
    width: 100%;
  `,
        ])),
    ),
    resizableContainer: o(
      Xe ||
        (Xe = q([
          `
    position: relative;

    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: flex-end;

    width: 100%;

    &:hover .resize-handle {
      opacity: 1;
    }
  `,
        ])),
    ),
    resizeHandle: o(
      Ye ||
        (Ye = q([
          `
    position: absolute;
    inset-block-start: -4px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    width: 100%;
    height: 8px;

    opacity: 0;

    transition: opacity 0.2s ease-in-out;

    &::before {
      content: '';

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 50%;
      transform: translateX(-50%);

      width: 32px;
      height: 4px;
      border-radius: 4px;

      background-color: `,
          `;
      box-shadow: 0 1px 2px color-mix(in srgb, `,
          ` 12.5%, transparent);
    }

    &:hover {
      opacity: 1 !important;

      &::before {
        background-color: `,
          `;
        box-shadow: 0 2px 4px color-mix(in srgb, `,
          ` 25%, transparent);
      }
    }

    &:active {
      &::before {
        background-color: `,
          `;
      }
    }
  `,
        ])),
      e.colorPrimary,
      e.colorTextSecondary,
      e.colorPrimaryHover,
      e.colorTextSecondary,
      e.colorPrimaryActive,
    ),
    root: o(
      qe ||
        (qe = q([
          `
    position: relative;
  `,
        ])),
    ),
  };
});
function pe(n) {
  '@babel/helpers - typeof';
  return (
    (pe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              typeof Symbol == 'function' &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    pe(n)
  );
}
var Gn = [
  'defaultHeight',
  'height',
  'maxHeight',
  'minHeight',
  'resizeMaxHeightOffset',
  'resize',
  'onSizeChange',
  'onSizeDragging',
  'className',
  'children',
  'footer',
  'header',
  'style',
  'slashMenuRef',
  'classNames',
  'fullscreen',
  'showResizeHandle',
  'onBodyClick',
  'styles',
];
function Ve(n, o) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    (o &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable;
      })),
      e.push.apply(e, t));
  }
  return e;
}
function fe(n) {
  for (var o = 1; o < arguments.length; o++) {
    var e = arguments[o] != null ? arguments[o] : {};
    o % 2
      ? Ve(Object(e), !0).forEach(function (t) {
          Un(n, t, e[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
        : Ve(Object(e)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
          });
  }
  return n;
}
function Un(n, o, e) {
  return (
    (o = Xn(o)),
    o in n
      ? Object.defineProperty(n, o, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (n[o] = e),
    n
  );
}
function Xn(n) {
  var o = Yn(n, 'string');
  return pe(o) == 'symbol' ? o : String(o);
}
function Yn(n, o) {
  if (pe(n) != 'object' || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(n, o);
    if (pe(t) != 'object') return t;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (o === 'string' ? String : Number)(n);
}
function qn(n, o) {
  return Zn(n) || Jn(n, o) || Kn(n, o) || Vn();
}
function Vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kn(n, o) {
  if (n) {
    if (typeof n == 'string') return Ke(n, o);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if ((e === 'Object' && n.constructor && (e = n.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(n);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ke(n, o);
  }
}
function Ke(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var e = 0, t = new Array(o); e < o; e++) t[e] = n[e];
  return t;
}
function Jn(n, o) {
  var e = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
  if (e != null) {
    var t,
      a,
      i,
      s,
      l = [],
      b = !0,
      v = !1;
    try {
      if (((i = (e = e.call(n)).next), o !== 0))
        for (; !(b = (t = i.call(e)).done) && (l.push(t.value), l.length !== o); b = !0);
    } catch (k) {
      ((v = !0), (a = k));
    } finally {
      try {
        if (!b && e.return != null && ((s = e.return()), Object(s) !== s)) return;
      } finally {
        if (v) throw a;
      }
    }
    return l;
  }
}
function Zn(n) {
  if (Array.isArray(n)) return n;
}
function Qn(n, o) {
  if (n == null) return {};
  var e = eo(n, o),
    t,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (a = 0; a < i.length; a++)
      ((t = i[a]),
        !(o.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(n, t) && (e[t] = n[t]));
  }
  return e;
}
function eo(n, o) {
  if (n == null) return {};
  var e = {},
    t = Object.keys(n),
    a,
    i;
  for (i = 0; i < t.length; i++) ((a = t[i]), !(o.indexOf(a) >= 0) && (e[a] = n[a]));
  return e;
}
var to = function (o) {
  var e = o.defaultHeight,
    t = e === void 0 ? o.defaultHeight || o.minHeight || 64 : e,
    a = o.height,
    i = o.maxHeight,
    s = i === void 0 ? 320 : i,
    l = o.minHeight,
    b = l === void 0 ? 64 : l,
    v = o.resizeMaxHeightOffset,
    k = v === void 0 ? 120 : v,
    h = o.resize,
    u = h === void 0 ? !0 : h,
    y = o.onSizeChange,
    g = o.onSizeDragging,
    f = o.className,
    m = o.children,
    x = o.footer,
    c = o.header,
    S = o.style,
    w = o.slashMenuRef,
    P = o.classNames,
    D = o.fullscreen,
    d = o.showResizeHandle,
    p = o.onBodyClick,
    j = o.styles,
    R = Qn(o, Gn),
    C = Wt(),
    _ = C.isDarkMode,
    I = Yt(),
    B = I.ref,
    z = I.height,
    E = z === void 0 ? 0 : z,
    F = Lt(t, { defaultValue: t, onChange: y, value: a }),
    Y = qn(F, 2),
    K = Y[0],
    H = Y[1],
    Et = M.useCallback(
      function (Bt, Ht, ae) {
        var ke = ae.style.height ? parseInt(ae.style.height) : t;
        H(ke);
      },
      [H, t],
    ),
    At = M.useCallback(
      function (Bt, Ht, ae) {
        var ke = ae.style.height ? parseInt(ae.style.height) : t;
        g?.(ke);
      },
      [g, t],
    ),
    Oe = r.jsx('div', {
      className: $(V.editor, V.bodyEditor, P?.body),
      draggable: !1,
      onClick: p,
      style: fe(fe({}, j?.body), {}, { maxHeight: D ? '100%' : s, minHeight: u ? K : b }),
      children: m,
    });
  return r.jsxs(
    T,
    fe(
      fe(
        {
          className: $(_ ? V.containerDark : V.containerLight, V.root, f),
          height: D ? '100%' : void 0,
          style: S,
          width: '100%',
        },
        R,
      ),
      {},
      {
        children: [
          w && r.jsx('div', { ref: w }),
          r.jsx('div', {
            className: $(V.header, P?.header),
            ref: B,
            style: j?.header,
            children: c,
          }),
          u
            ? r.jsx(yt, {
                className: V.resizableContainer,
                enable: D ? !1 : { top: !0 },
                handleClasses: { top: d ? V.resizeHandle : void 0 },
                handleStyles: {
                  top: {
                    backgroundColor: 'transparent',
                    borderRadius: '4px',
                    cursor: 'ns-resize',
                    height: '8px',
                    left: '50%',
                    top: c ? -3 - E : -3,
                    transform: 'translateX(-50%)',
                    width: '100%',
                  },
                },
                maxHeight: D ? void 0 : s + k,
                minHeight: D ? void 0 : b,
                onResize: At,
                onResizeStop: Et,
                size: { height: D ? void 0 : 'auto', width: '100%' },
                style: D ? { flex: 1, overflow: 'hidden', position: 'relative' } : void 0,
                children: Oe,
              })
            : Oe,
          r.jsx('div', { className: $(V.footer, P?.footer), style: j?.footer, children: x }),
        ],
      },
    ),
  );
};
to.displayName = 'ChatInput';
var le = { exports: {} },
  Me = {},
  ge = { exports: {} },
  Je;
function no() {
  if (Je) return ge.exports;
  Je = 1;
  function n(e) {
    var t,
      a,
      i = '';
    if (typeof e == 'string' || typeof e == 'number') i += e;
    else if (typeof e == 'object')
      if (Array.isArray(e)) {
        var s = e.length;
        for (t = 0; t < s; t++) e[t] && (a = n(e[t])) && (i && (i += ' '), (i += a));
      } else for (a in e) e[a] && (i && (i += ' '), (i += a));
    return i;
  }
  function o() {
    for (var e, t, a = 0, i = '', s = arguments.length; a < s; a++)
      (e = arguments[a]) && (t = n(e)) && (i && (i += ' '), (i += t));
    return i;
  }
  return ((ge.exports = o), (ge.exports.clsx = o), ge.exports);
}
var O = {},
  J = {},
  Ze;
function De() {
  if (Ze) return J;
  ((Ze = 1),
    Object.defineProperty(J, '__esModule', { value: !0 }),
    (J.dontSetMe = a),
    (J.findInArray = n),
    (J.int = t),
    (J.isFunction = o),
    (J.isNum = e));
  function n(i, s) {
    for (let l = 0, b = i.length; l < b; l++) if (s.apply(s, [i[l], l, i])) return i[l];
  }
  function o(i) {
    return typeof i == 'function' || Object.prototype.toString.call(i) === '[object Function]';
  }
  function e(i) {
    return typeof i == 'number' && !isNaN(i);
  }
  function t(i) {
    return parseInt(i, 10);
  }
  function a(i, s, l) {
    if (i[s])
      return new Error(`Invalid prop ${s} passed to ${l} - do not set this, set it on the child.`);
  }
  return J;
}
var Z = {},
  Qe;
function oo() {
  if (Qe) return Z;
  ((Qe = 1),
    Object.defineProperty(Z, '__esModule', { value: !0 }),
    (Z.browserPrefixToKey = e),
    (Z.browserPrefixToStyle = t),
    (Z.default = void 0),
    (Z.getPrefix = o));
  const n = ['Moz', 'Webkit', 'O', 'ms'];
  function o() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'transform';
    if (typeof window > 'u') return '';
    const s = window.document?.documentElement?.style;
    if (!s || i in s) return '';
    for (let l = 0; l < n.length; l++) if (e(i, n[l]) in s) return n[l];
    return '';
  }
  function e(i, s) {
    return s ? `${s}${a(i)}` : i;
  }
  function t(i, s) {
    return s ? `-${s.toLowerCase()}-${i}` : i;
  }
  function a(i) {
    let s = '',
      l = !0;
    for (let b = 0; b < i.length; b++)
      l ? ((s += i[b].toUpperCase()), (l = !1)) : i[b] === '-' ? (l = !0) : (s += i[b]);
    return s;
  }
  return ((Z.default = o()), Z);
}
var et;
function Ie() {
  if (et) return O;
  ((et = 1),
    Object.defineProperty(O, '__esModule', { value: !0 }),
    (O.addClassName = P),
    (O.addEvent = s),
    (O.addUserSelectStyles = c),
    (O.createCSSTransform = y),
    (O.createSVGTransform = g),
    (O.getTouch = m),
    (O.getTouchIdentifier = x),
    (O.getTranslation = f),
    (O.innerHeight = k),
    (O.innerWidth = h),
    (O.matchesSelector = a),
    (O.matchesSelectorAndParentsTo = i),
    (O.offsetXYFromParent = u),
    (O.outerHeight = b),
    (O.outerWidth = v),
    (O.removeClassName = D),
    (O.removeEvent = l),
    (O.scheduleRemoveUserSelectStyles = S));
  var n = De(),
    o = e(oo());
  function e(d, p) {
    if (typeof WeakMap == 'function')
      var j = new WeakMap(),
        R = new WeakMap();
    return (e = function (C, _) {
      if (!_ && C && C.__esModule) return C;
      var I,
        B,
        z = { __proto__: null, default: C };
      if (C === null || (typeof C != 'object' && typeof C != 'function')) return z;
      if ((I = _ ? R : j)) {
        if (I.has(C)) return I.get(C);
        I.set(C, z);
      }
      for (const E in C)
        E !== 'default' &&
          {}.hasOwnProperty.call(C, E) &&
          ((B = (I = Object.defineProperty) && Object.getOwnPropertyDescriptor(C, E)) &&
          (B.get || B.set)
            ? I(z, E, B)
            : (z[E] = C[E]));
      return z;
    })(d, p);
  }
  let t = '';
  function a(d, p) {
    return (
      t ||
        (t = (0, n.findInArray)(
          [
            'matches',
            'webkitMatchesSelector',
            'mozMatchesSelector',
            'msMatchesSelector',
            'oMatchesSelector',
          ],
          function (j) {
            return (0, n.isFunction)(d[j]);
          },
        )),
      (0, n.isFunction)(d[t]) ? d[t](p) : !1
    );
  }
  function i(d, p, j) {
    let R = d;
    do {
      if (a(R, p)) return !0;
      if (R === j) return !1;
      R = R.parentNode;
    } while (R);
    return !1;
  }
  function s(d, p, j, R) {
    if (!d) return;
    const C = { capture: !0, ...R };
    d.addEventListener
      ? d.addEventListener(p, j, C)
      : d.attachEvent
        ? d.attachEvent('on' + p, j)
        : (d['on' + p] = j);
  }
  function l(d, p, j, R) {
    if (!d) return;
    const C = { capture: !0, ...R };
    d.removeEventListener
      ? d.removeEventListener(p, j, C)
      : d.detachEvent
        ? d.detachEvent('on' + p, j)
        : (d['on' + p] = null);
  }
  function b(d) {
    let p = d.clientHeight;
    const j = d.ownerDocument.defaultView.getComputedStyle(d);
    return ((p += (0, n.int)(j.borderTopWidth)), (p += (0, n.int)(j.borderBottomWidth)), p);
  }
  function v(d) {
    let p = d.clientWidth;
    const j = d.ownerDocument.defaultView.getComputedStyle(d);
    return ((p += (0, n.int)(j.borderLeftWidth)), (p += (0, n.int)(j.borderRightWidth)), p);
  }
  function k(d) {
    let p = d.clientHeight;
    const j = d.ownerDocument.defaultView.getComputedStyle(d);
    return ((p -= (0, n.int)(j.paddingTop)), (p -= (0, n.int)(j.paddingBottom)), p);
  }
  function h(d) {
    let p = d.clientWidth;
    const j = d.ownerDocument.defaultView.getComputedStyle(d);
    return ((p -= (0, n.int)(j.paddingLeft)), (p -= (0, n.int)(j.paddingRight)), p);
  }
  function u(d, p, j) {
    const C = p === p.ownerDocument.body ? { left: 0, top: 0 } : p.getBoundingClientRect(),
      _ = (d.clientX + p.scrollLeft - C.left) / j,
      I = (d.clientY + p.scrollTop - C.top) / j;
    return { x: _, y: I };
  }
  function y(d, p) {
    const j = f(d, p, 'px');
    return { [(0, o.browserPrefixToKey)('transform', o.default)]: j };
  }
  function g(d, p) {
    return f(d, p, '');
  }
  function f(d, p, j) {
    let { x: R, y: C } = d,
      _ = `translate(${R}${j},${C}${j})`;
    if (p) {
      const I = `${typeof p.x == 'string' ? p.x : p.x + j}`,
        B = `${typeof p.y == 'string' ? p.y : p.y + j}`;
      _ = `translate(${I}, ${B})` + _;
    }
    return _;
  }
  function m(d, p) {
    return (
      (d.targetTouches && (0, n.findInArray)(d.targetTouches, (j) => p === j.identifier)) ||
      (d.changedTouches && (0, n.findInArray)(d.changedTouches, (j) => p === j.identifier))
    );
  }
  function x(d) {
    if (d.targetTouches && d.targetTouches[0]) return d.targetTouches[0].identifier;
    if (d.changedTouches && d.changedTouches[0]) return d.changedTouches[0].identifier;
  }
  function c(d) {
    if (!d) return;
    let p = d.getElementById('react-draggable-style-el');
    (p ||
      ((p = d.createElement('style')),
      (p.type = 'text/css'),
      (p.id = 'react-draggable-style-el'),
      (p.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
      (p.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
      d.getElementsByTagName('head')[0].appendChild(p)),
      d.body && P(d.body, 'react-draggable-transparent-selection'));
  }
  function S(d) {
    window.requestAnimationFrame
      ? window.requestAnimationFrame(() => {
          w(d);
        })
      : w(d);
  }
  function w(d) {
    if (d)
      try {
        if ((d.body && D(d.body, 'react-draggable-transparent-selection'), d.selection))
          d.selection.empty();
        else {
          const p = (d.defaultView || window).getSelection();
          p && p.type !== 'Caret' && p.removeAllRanges();
        }
      } catch {}
  }
  function P(d, p) {
    d.classList
      ? d.classList.add(p)
      : d.className.match(new RegExp(`(?:^|\\s)${p}(?!\\S)`)) || (d.className += ` ${p}`);
  }
  function D(d, p) {
    d.classList
      ? d.classList.remove(p)
      : (d.className = d.className.replace(new RegExp(`(?:^|\\s)${p}(?!\\S)`, 'g'), ''));
  }
  return O;
}
var X = {},
  tt;
function kt() {
  if (tt) return X;
  ((tt = 1),
    Object.defineProperty(X, '__esModule', { value: !0 }),
    (X.canDragX = a),
    (X.canDragY = i),
    (X.createCoreData = l),
    (X.createDraggableData = b),
    (X.getBoundPosition = e),
    (X.getControlPosition = s),
    (X.snapToGrid = t));
  var n = De(),
    o = Ie();
  function e(h, u, y) {
    if (!h.props.bounds) return [u, y];
    let { bounds: g } = h.props;
    g = typeof g == 'string' ? g : v(g);
    const f = k(h);
    if (typeof g == 'string') {
      const { ownerDocument: m } = f,
        x = m.defaultView;
      let c;
      if (
        (g === 'parent' ? (c = f.parentNode) : (c = f.getRootNode().querySelector(g)),
        !(c instanceof x.HTMLElement))
      )
        throw new Error('Bounds selector "' + g + '" could not find an element.');
      const S = c,
        w = x.getComputedStyle(f),
        P = x.getComputedStyle(S);
      g = {
        left: -f.offsetLeft + (0, n.int)(P.paddingLeft) + (0, n.int)(w.marginLeft),
        top: -f.offsetTop + (0, n.int)(P.paddingTop) + (0, n.int)(w.marginTop),
        right:
          (0, o.innerWidth)(S) -
          (0, o.outerWidth)(f) -
          f.offsetLeft +
          (0, n.int)(P.paddingRight) -
          (0, n.int)(w.marginRight),
        bottom:
          (0, o.innerHeight)(S) -
          (0, o.outerHeight)(f) -
          f.offsetTop +
          (0, n.int)(P.paddingBottom) -
          (0, n.int)(w.marginBottom),
      };
    }
    return (
      (0, n.isNum)(g.right) && (u = Math.min(u, g.right)),
      (0, n.isNum)(g.bottom) && (y = Math.min(y, g.bottom)),
      (0, n.isNum)(g.left) && (u = Math.max(u, g.left)),
      (0, n.isNum)(g.top) && (y = Math.max(y, g.top)),
      [u, y]
    );
  }
  function t(h, u, y) {
    const g = Math.round(u / h[0]) * h[0],
      f = Math.round(y / h[1]) * h[1];
    return [g, f];
  }
  function a(h) {
    return h.props.axis === 'both' || h.props.axis === 'x';
  }
  function i(h) {
    return h.props.axis === 'both' || h.props.axis === 'y';
  }
  function s(h, u, y) {
    const g = typeof u == 'number' ? (0, o.getTouch)(h, u) : null;
    if (typeof u == 'number' && !g) return null;
    const f = k(y),
      m = y.props.offsetParent || f.offsetParent || f.ownerDocument.body;
    return (0, o.offsetXYFromParent)(g || h, m, y.props.scale);
  }
  function l(h, u, y) {
    const g = !(0, n.isNum)(h.lastX),
      f = k(h);
    return g
      ? { node: f, deltaX: 0, deltaY: 0, lastX: u, lastY: y, x: u, y }
      : {
          node: f,
          deltaX: u - h.lastX,
          deltaY: y - h.lastY,
          lastX: h.lastX,
          lastY: h.lastY,
          x: u,
          y,
        };
  }
  function b(h, u) {
    const y = h.props.scale;
    return {
      node: u.node,
      x: h.state.x + u.deltaX / y,
      y: h.state.y + u.deltaY / y,
      deltaX: u.deltaX / y,
      deltaY: u.deltaY / y,
      lastX: h.state.x,
      lastY: h.state.y,
    };
  }
  function v(h) {
    return { left: h.left, top: h.top, right: h.right, bottom: h.bottom };
  }
  function k(h) {
    const u = h.findDOMNode();
    if (!u) throw new Error('<DraggableCore>: Unmounted during event!');
    return u;
  }
  return X;
}
var de = {},
  me = {},
  nt;
function zt() {
  if (nt) return me;
  ((nt = 1), Object.defineProperty(me, '__esModule', { value: !0 }), (me.default = n));
  function n() {}
  return me;
}
var ot;
function ro() {
  if (ot) return de;
  ((ot = 1), Object.defineProperty(de, '__esModule', { value: !0 }), (de.default = void 0));
  var n = b(vt()),
    o = l(xt()),
    e = l(lt()),
    t = Ie(),
    a = kt(),
    i = De(),
    s = l(zt());
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function b(f, m) {
    if (typeof WeakMap == 'function')
      var x = new WeakMap(),
        c = new WeakMap();
    return (b = function (S, w) {
      if (!w && S && S.__esModule) return S;
      var P,
        D,
        d = { __proto__: null, default: S };
      if (S === null || (typeof S != 'object' && typeof S != 'function')) return d;
      if ((P = w ? c : x)) {
        if (P.has(S)) return P.get(S);
        P.set(S, d);
      }
      for (const p in S)
        p !== 'default' &&
          {}.hasOwnProperty.call(S, p) &&
          ((D = (P = Object.defineProperty) && Object.getOwnPropertyDescriptor(S, p)) &&
          (D.get || D.set)
            ? P(d, p, D)
            : (d[p] = S[p]));
      return d;
    })(f, m);
  }
  function v(f, m, x) {
    return (
      (m = k(m)) in f
        ? Object.defineProperty(f, m, { value: x, enumerable: !0, configurable: !0, writable: !0 })
        : (f[m] = x),
      f
    );
  }
  function k(f) {
    var m = h(f, 'string');
    return typeof m == 'symbol' ? m : m + '';
  }
  function h(f, m) {
    if (typeof f != 'object' || !f) return f;
    var x = f[Symbol.toPrimitive];
    if (x !== void 0) {
      var c = x.call(f, m);
      if (typeof c != 'object') return c;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (m === 'string' ? String : Number)(f);
  }
  const u = {
    touch: { start: 'touchstart', move: 'touchmove', stop: 'touchend' },
    mouse: { start: 'mousedown', move: 'mousemove', stop: 'mouseup' },
  };
  let y = u.mouse,
    g = class extends n.Component {
      constructor() {
        (super(...arguments),
          v(this, 'dragging', !1),
          v(this, 'lastX', NaN),
          v(this, 'lastY', NaN),
          v(this, 'touchIdentifier', null),
          v(this, 'mounted', !1),
          v(this, 'handleDragStart', (m) => {
            if (
              (this.props.onMouseDown(m),
              !this.props.allowAnyClick && typeof m.button == 'number' && m.button !== 0)
            )
              return !1;
            const x = this.findDOMNode();
            if (!x || !x.ownerDocument || !x.ownerDocument.body)
              throw new Error('<DraggableCore> not mounted on DragStart!');
            const { ownerDocument: c } = x;
            if (
              this.props.disabled ||
              !(m.target instanceof c.defaultView.Node) ||
              (this.props.handle &&
                !(0, t.matchesSelectorAndParentsTo)(m.target, this.props.handle, x)) ||
              (this.props.cancel &&
                (0, t.matchesSelectorAndParentsTo)(m.target, this.props.cancel, x))
            )
              return;
            m.type === 'touchstart' && !this.props.allowMobileScroll && m.preventDefault();
            const S = (0, t.getTouchIdentifier)(m);
            this.touchIdentifier = S;
            const w = (0, a.getControlPosition)(m, S, this);
            if (w == null) return;
            const { x: P, y: D } = w,
              d = (0, a.createCoreData)(this, P, D);
            ((0, s.default)('DraggableCore: handleDragStart: %j', d),
              (0, s.default)('calling', this.props.onStart),
              !(this.props.onStart(m, d) === !1 || this.mounted === !1) &&
                (this.props.enableUserSelectHack && (0, t.addUserSelectStyles)(c),
                (this.dragging = !0),
                (this.lastX = P),
                (this.lastY = D),
                (0, t.addEvent)(c, y.move, this.handleDrag),
                (0, t.addEvent)(c, y.stop, this.handleDragStop)));
          }),
          v(this, 'handleDrag', (m) => {
            const x = (0, a.getControlPosition)(m, this.touchIdentifier, this);
            if (x == null) return;
            let { x: c, y: S } = x;
            if (Array.isArray(this.props.grid)) {
              let D = c - this.lastX,
                d = S - this.lastY;
              if ((([D, d] = (0, a.snapToGrid)(this.props.grid, D, d)), !D && !d)) return;
              ((c = this.lastX + D), (S = this.lastY + d));
            }
            const w = (0, a.createCoreData)(this, c, S);
            if (
              ((0, s.default)('DraggableCore: handleDrag: %j', w),
              this.props.onDrag(m, w) === !1 || this.mounted === !1)
            ) {
              try {
                this.handleDragStop(new MouseEvent('mouseup'));
              } catch {
                const d = document.createEvent('MouseEvents');
                (d.initMouseEvent(
                  'mouseup',
                  !0,
                  !0,
                  window,
                  0,
                  0,
                  0,
                  0,
                  0,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null,
                ),
                  this.handleDragStop(d));
              }
              return;
            }
            ((this.lastX = c), (this.lastY = S));
          }),
          v(this, 'handleDragStop', (m) => {
            if (!this.dragging) return;
            const x = (0, a.getControlPosition)(m, this.touchIdentifier, this);
            if (x == null) return;
            let { x: c, y: S } = x;
            if (Array.isArray(this.props.grid)) {
              let d = c - this.lastX || 0,
                p = S - this.lastY || 0;
              (([d, p] = (0, a.snapToGrid)(this.props.grid, d, p)),
                (c = this.lastX + d),
                (S = this.lastY + p));
            }
            const w = (0, a.createCoreData)(this, c, S);
            if (this.props.onStop(m, w) === !1 || this.mounted === !1) return !1;
            const D = this.findDOMNode();
            (D &&
              this.props.enableUserSelectHack &&
              (0, t.scheduleRemoveUserSelectStyles)(D.ownerDocument),
              (0, s.default)('DraggableCore: handleDragStop: %j', w),
              (this.dragging = !1),
              (this.lastX = NaN),
              (this.lastY = NaN),
              D &&
                ((0, s.default)('DraggableCore: Removing handlers'),
                (0, t.removeEvent)(D.ownerDocument, y.move, this.handleDrag),
                (0, t.removeEvent)(D.ownerDocument, y.stop, this.handleDragStop)));
          }),
          v(this, 'onMouseDown', (m) => ((y = u.mouse), this.handleDragStart(m))),
          v(this, 'onMouseUp', (m) => ((y = u.mouse), this.handleDragStop(m))),
          v(this, 'onTouchStart', (m) => ((y = u.touch), this.handleDragStart(m))),
          v(this, 'onTouchEnd', (m) => ((y = u.touch), this.handleDragStop(m))));
      }
      componentDidMount() {
        this.mounted = !0;
        const m = this.findDOMNode();
        m && (0, t.addEvent)(m, u.touch.start, this.onTouchStart, { passive: !1 });
      }
      componentWillUnmount() {
        this.mounted = !1;
        const m = this.findDOMNode();
        if (m) {
          const { ownerDocument: x } = m;
          ((0, t.removeEvent)(x, u.mouse.move, this.handleDrag),
            (0, t.removeEvent)(x, u.touch.move, this.handleDrag),
            (0, t.removeEvent)(x, u.mouse.stop, this.handleDragStop),
            (0, t.removeEvent)(x, u.touch.stop, this.handleDragStop),
            (0, t.removeEvent)(m, u.touch.start, this.onTouchStart, { passive: !1 }),
            this.props.enableUserSelectHack && (0, t.scheduleRemoveUserSelectStyles)(x));
        }
      }
      findDOMNode() {
        return this.props?.nodeRef ? this.props?.nodeRef?.current : e.default.findDOMNode(this);
      }
      render() {
        return n.cloneElement(n.Children.only(this.props.children), {
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onTouchEnd: this.onTouchEnd,
        });
      }
    };
  return (
    (de.default = g),
    v(g, 'displayName', 'DraggableCore'),
    v(g, 'propTypes', {
      allowAnyClick: o.default.bool,
      allowMobileScroll: o.default.bool,
      children: o.default.node.isRequired,
      disabled: o.default.bool,
      enableUserSelectHack: o.default.bool,
      offsetParent: function (f, m) {
        if (f[m] && f[m].nodeType !== 1)
          throw new Error("Draggable's offsetParent must be a DOM Node.");
      },
      grid: o.default.arrayOf(o.default.number),
      handle: o.default.string,
      cancel: o.default.string,
      nodeRef: o.default.object,
      onStart: o.default.func,
      onDrag: o.default.func,
      onStop: o.default.func,
      onMouseDown: o.default.func,
      scale: o.default.number,
      className: i.dontSetMe,
      style: i.dontSetMe,
      transform: i.dontSetMe,
    }),
    v(g, 'defaultProps', {
      allowAnyClick: !1,
      allowMobileScroll: !1,
      disabled: !1,
      enableUserSelectHack: !0,
      onStart: function () {},
      onDrag: function () {},
      onStop: function () {},
      onMouseDown: function () {},
      scale: 1,
    }),
    de
  );
}
var rt;
function io() {
  return (
    rt ||
      ((rt = 1),
      (function (n) {
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          Object.defineProperty(n, 'DraggableCore', {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          (n.default = void 0));
        var o = h(vt()),
          e = k(xt()),
          t = k(lt()),
          a = no(),
          i = Ie(),
          s = kt(),
          l = De(),
          b = k(ro()),
          v = k(zt());
        function k(x) {
          return x && x.__esModule ? x : { default: x };
        }
        function h(x, c) {
          if (typeof WeakMap == 'function')
            var S = new WeakMap(),
              w = new WeakMap();
          return (h = function (P, D) {
            if (!D && P && P.__esModule) return P;
            var d,
              p,
              j = { __proto__: null, default: P };
            if (P === null || (typeof P != 'object' && typeof P != 'function')) return j;
            if ((d = D ? w : S)) {
              if (d.has(P)) return d.get(P);
              d.set(P, j);
            }
            for (const R in P)
              R !== 'default' &&
                {}.hasOwnProperty.call(P, R) &&
                ((p = (d = Object.defineProperty) && Object.getOwnPropertyDescriptor(P, R)) &&
                (p.get || p.set)
                  ? d(j, R, p)
                  : (j[R] = P[R]));
            return j;
          })(x, c);
        }
        function u() {
          return (
            (u = Object.assign
              ? Object.assign.bind()
              : function (x) {
                  for (var c = 1; c < arguments.length; c++) {
                    var S = arguments[c];
                    for (var w in S) ({}).hasOwnProperty.call(S, w) && (x[w] = S[w]);
                  }
                  return x;
                }),
            u.apply(null, arguments)
          );
        }
        function y(x, c, S) {
          return (
            (c = g(c)) in x
              ? Object.defineProperty(x, c, {
                  value: S,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (x[c] = S),
            x
          );
        }
        function g(x) {
          var c = f(x, 'string');
          return typeof c == 'symbol' ? c : c + '';
        }
        function f(x, c) {
          if (typeof x != 'object' || !x) return x;
          var S = x[Symbol.toPrimitive];
          if (S !== void 0) {
            var w = S.call(x, c);
            if (typeof w != 'object') return w;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (c === 'string' ? String : Number)(x);
        }
        class m extends o.Component {
          static getDerivedStateFromProps(c, S) {
            let { position: w } = c,
              { prevPropsPosition: P } = S;
            return w && (!P || w.x !== P.x || w.y !== P.y)
              ? ((0, v.default)('Draggable: getDerivedStateFromProps %j', {
                  position: w,
                  prevPropsPosition: P,
                }),
                { x: w.x, y: w.y, prevPropsPosition: { ...w } })
              : null;
          }
          constructor(c) {
            (super(c),
              y(this, 'onDragStart', (S, w) => {
                if (
                  ((0, v.default)('Draggable: onDragStart: %j', w),
                  this.props.onStart(S, (0, s.createDraggableData)(this, w)) === !1)
                )
                  return !1;
                this.setState({ dragging: !0, dragged: !0 });
              }),
              y(this, 'onDrag', (S, w) => {
                if (!this.state.dragging) return !1;
                (0, v.default)('Draggable: onDrag: %j', w);
                const P = (0, s.createDraggableData)(this, w),
                  D = { x: P.x, y: P.y, slackX: 0, slackY: 0 };
                if (this.props.bounds) {
                  const { x: p, y: j } = D;
                  ((D.x += this.state.slackX), (D.y += this.state.slackY));
                  const [R, C] = (0, s.getBoundPosition)(this, D.x, D.y);
                  ((D.x = R),
                    (D.y = C),
                    (D.slackX = this.state.slackX + (p - D.x)),
                    (D.slackY = this.state.slackY + (j - D.y)),
                    (P.x = D.x),
                    (P.y = D.y),
                    (P.deltaX = D.x - this.state.x),
                    (P.deltaY = D.y - this.state.y));
                }
                if (this.props.onDrag(S, P) === !1) return !1;
                this.setState(D);
              }),
              y(this, 'onDragStop', (S, w) => {
                if (
                  !this.state.dragging ||
                  this.props.onStop(S, (0, s.createDraggableData)(this, w)) === !1
                )
                  return !1;
                (0, v.default)('Draggable: onDragStop: %j', w);
                const D = { dragging: !1, slackX: 0, slackY: 0 };
                if (!!this.props.position) {
                  const { x: p, y: j } = this.props.position;
                  ((D.x = p), (D.y = j));
                }
                this.setState(D);
              }),
              (this.state = {
                dragging: !1,
                dragged: !1,
                x: c.position ? c.position.x : c.defaultPosition.x,
                y: c.position ? c.position.y : c.defaultPosition.y,
                prevPropsPosition: { ...c.position },
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              c.position &&
                !(c.onDrag || c.onStop) &&
                console.warn(
                  'A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.',
                ));
          }
          componentDidMount() {
            typeof window.SVGElement < 'u' &&
              this.findDOMNode() instanceof window.SVGElement &&
              this.setState({ isElementSVG: !0 });
          }
          componentWillUnmount() {
            this.state.dragging && this.setState({ dragging: !1 });
          }
          findDOMNode() {
            return this.props?.nodeRef?.current ?? t.default.findDOMNode(this);
          }
          render() {
            const {
              axis: c,
              bounds: S,
              children: w,
              defaultPosition: P,
              defaultClassName: D,
              defaultClassNameDragging: d,
              defaultClassNameDragged: p,
              position: j,
              positionOffset: R,
              scale: C,
              ..._
            } = this.props;
            let I = {},
              B = null;
            const E = !!!j || this.state.dragging,
              F = j || P,
              Y = {
                x: (0, s.canDragX)(this) && E ? this.state.x : F.x,
                y: (0, s.canDragY)(this) && E ? this.state.y : F.y,
              };
            this.state.isElementSVG
              ? (B = (0, i.createSVGTransform)(Y, R))
              : (I = (0, i.createCSSTransform)(Y, R));
            const K = (0, a.clsx)(w.props.className || '', D, {
              [d]: this.state.dragging,
              [p]: this.state.dragged,
            });
            return o.createElement(
              b.default,
              u({}, _, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
              o.cloneElement(o.Children.only(w), {
                className: K,
                style: { ...w.props.style, ...I },
                transform: B,
              }),
            );
          }
        }
        ((n.default = m),
          y(m, 'displayName', 'Draggable'),
          y(m, 'propTypes', {
            ...b.default.propTypes,
            axis: e.default.oneOf(['both', 'x', 'y', 'none']),
            bounds: e.default.oneOfType([
              e.default.shape({
                left: e.default.number,
                right: e.default.number,
                top: e.default.number,
                bottom: e.default.number,
              }),
              e.default.string,
              e.default.oneOf([!1]),
            ]),
            defaultClassName: e.default.string,
            defaultClassNameDragging: e.default.string,
            defaultClassNameDragged: e.default.string,
            defaultPosition: e.default.shape({ x: e.default.number, y: e.default.number }),
            positionOffset: e.default.shape({
              x: e.default.oneOfType([e.default.number, e.default.string]),
              y: e.default.oneOfType([e.default.number, e.default.string]),
            }),
            position: e.default.shape({ x: e.default.number, y: e.default.number }),
            className: l.dontSetMe,
            style: l.dontSetMe,
            transform: l.dontSetMe,
          }),
          y(m, 'defaultProps', {
            ...b.default.defaultProps,
            axis: 'both',
            bounds: !1,
            defaultClassName: 'react-draggable',
            defaultClassNameDragging: 'react-draggable-dragging',
            defaultClassNameDragged: 'react-draggable-dragged',
            defaultPosition: { x: 0, y: 0 },
            scale: 1,
          }));
      })(Me)),
    Me
  );
}
var it;
function so() {
  if (it) return le.exports;
  it = 1;
  const { default: n, DraggableCore: o } = io();
  return ((le.exports = n), (le.exports.default = n), (le.exports.DraggableCore = o), le.exports);
}
var ao = so();
const lo = Xt(ao);
var Re = function (n, o) {
  return (
    (Re =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
      }),
    Re(n, o)
  );
};
function co(n, o) {
  Re(n, o);
  function e() {
    this.constructor = n;
  }
  n.prototype = o === null ? Object.create(o) : ((e.prototype = o.prototype), new e());
}
var A = function () {
  return (
    (A =
      Object.assign ||
      function (o) {
        for (var e, t = 1, a = arguments.length; t < a; t++) {
          e = arguments[t];
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
        }
        return o;
      }),
    A.apply(this, arguments)
  );
};
function uo(n, o) {
  var e = {};
  for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && o.indexOf(t) < 0 && (e[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, t = Object.getOwnPropertySymbols(n); a < t.length; a++)
      o.indexOf(t[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, t[a]) &&
        (e[t[a]] = n[t[a]]);
  return e;
}
var po = {
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ho = function (n) {
    return {
      bottom: n,
      bottomLeft: n,
      bottomRight: n,
      left: n,
      right: n,
      top: n,
      topLeft: n,
      topRight: n,
    };
  },
  fo = (function (n) {
    co(o, n);
    function o(e) {
      var t = n.call(this, e) || this;
      return (
        (t.resizingPosition = { x: 0, y: 0 }),
        (t.offsetFromParent = { left: 0, top: 0 }),
        (t.resizableElement = { current: null }),
        (t.originalPosition = { x: 0, y: 0 }),
        (t.state = {
          resizing: !1,
          bounds: { top: 0, right: 0, bottom: 0, left: 0 },
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
        }),
        (t.onResizeStart = t.onResizeStart.bind(t)),
        (t.onResize = t.onResize.bind(t)),
        (t.onResizeStop = t.onResizeStop.bind(t)),
        (t.onDragStart = t.onDragStart.bind(t)),
        (t.onDrag = t.onDrag.bind(t)),
        (t.onDragStop = t.onDragStop.bind(t)),
        (t.getMaxSizesFromProps = t.getMaxSizesFromProps.bind(t)),
        t
      );
    }
    return (
      (o.prototype.componentDidMount = function () {
        this.updateOffsetFromParent();
        var e = this.offsetFromParent,
          t = e.left,
          a = e.top,
          i = this.getDraggablePosition(),
          s = i.x,
          l = i.y;
        (this.draggable.setState({ x: s - t, y: l - a }), this.forceUpdate());
      }),
      (o.prototype.getDraggablePosition = function () {
        var e = this.draggable.state,
          t = e.x,
          a = e.y;
        return { x: t, y: a };
      }),
      (o.prototype.getParent = function () {
        return this.resizable && this.resizable.parentNode;
      }),
      (o.prototype.getParentSize = function () {
        return this.resizable.getParentSize();
      }),
      (o.prototype.getMaxSizesFromProps = function () {
        var e = typeof this.props.maxWidth > 'u' ? Number.MAX_SAFE_INTEGER : this.props.maxWidth,
          t = typeof this.props.maxHeight > 'u' ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
        return { maxWidth: e, maxHeight: t };
      }),
      (o.prototype.getSelfElement = function () {
        return this.resizable && this.resizable.resizable;
      }),
      (o.prototype.getOffsetHeight = function (e) {
        var t = this.props.scale;
        switch (this.props.bounds) {
          case 'window':
            return window.innerHeight / t;
          case 'body':
            return document.body.offsetHeight / t;
          default:
            return e.offsetHeight;
        }
      }),
      (o.prototype.getOffsetWidth = function (e) {
        var t = this.props.scale;
        switch (this.props.bounds) {
          case 'window':
            return window.innerWidth / t;
          case 'body':
            return document.body.offsetWidth / t;
          default:
            return e.offsetWidth;
        }
      }),
      (o.prototype.onDragStart = function (e, t) {
        if (this.props.onDragStart && this.props.onDragStart(e, t) === !1) return !1;
        var a = this.getDraggablePosition();
        if (((this.originalPosition = a), !!this.props.bounds)) {
          var i = this.getParent(),
            s = this.props.scale,
            l;
          if (this.props.bounds === 'parent') l = i;
          else if (this.props.bounds === 'body') {
            var b = i.getBoundingClientRect(),
              v = b.left,
              k = b.top,
              h = document.body.getBoundingClientRect(),
              u = -(v - i.offsetLeft * s - h.left) / s,
              y = -(k - i.offsetTop * s - h.top) / s,
              g = (document.body.offsetWidth - this.resizable.size.width * s) / s + u,
              f = (document.body.offsetHeight - this.resizable.size.height * s) / s + y;
            return this.setState({ bounds: { top: y, right: g, bottom: f, left: u } });
          } else if (this.props.bounds === 'window') {
            if (!this.resizable) return;
            var m = i.getBoundingClientRect(),
              x = m.left,
              c = m.top,
              S = -(x - i.offsetLeft * s) / s,
              w = -(c - i.offsetTop * s) / s,
              g = (window.innerWidth - this.resizable.size.width * s) / s + S,
              f = (window.innerHeight - this.resizable.size.height * s) / s + w;
            return this.setState({ bounds: { top: w, right: g, bottom: f, left: S } });
          } else
            typeof this.props.bounds == 'string'
              ? (l = document.querySelector(this.props.bounds))
              : this.props.bounds instanceof HTMLElement && (l = this.props.bounds);
          if (!(!(l instanceof HTMLElement) || !(i instanceof HTMLElement))) {
            var P = l.getBoundingClientRect(),
              D = P.left,
              d = P.top,
              p = i.getBoundingClientRect(),
              j = p.left,
              R = p.top,
              C = (D - j) / s,
              _ = d - R;
            if (this.resizable) {
              this.updateOffsetFromParent();
              var I = this.offsetFromParent;
              this.setState({
                bounds: {
                  top: _ - I.top,
                  right: C + (l.offsetWidth - this.resizable.size.width) - I.left / s,
                  bottom: _ + (l.offsetHeight - this.resizable.size.height) - I.top,
                  left: C - I.left / s,
                },
              });
            }
          }
        }
      }),
      (o.prototype.onDrag = function (e, t) {
        if (this.props.onDrag) {
          var a = this.offsetFromParent,
            i = a.left,
            s = a.top;
          if (!this.props.dragAxis || this.props.dragAxis === 'both')
            return this.props.onDrag(e, A(A({}, t), { x: t.x + i, y: t.y + s }));
          if (this.props.dragAxis === 'x')
            return this.props.onDrag(
              e,
              A(A({}, t), { x: t.x + i, y: this.originalPosition.y + s, deltaY: 0 }),
            );
          if (this.props.dragAxis === 'y')
            return this.props.onDrag(
              e,
              A(A({}, t), { x: this.originalPosition.x + i, y: t.y + s, deltaX: 0 }),
            );
        }
      }),
      (o.prototype.onDragStop = function (e, t) {
        if (this.props.onDragStop) {
          var a = this.offsetFromParent,
            i = a.left,
            s = a.top;
          if (!this.props.dragAxis || this.props.dragAxis === 'both')
            return this.props.onDragStop(e, A(A({}, t), { x: t.x + i, y: t.y + s }));
          if (this.props.dragAxis === 'x')
            return this.props.onDragStop(
              e,
              A(A({}, t), { x: t.x + i, y: this.originalPosition.y + s, deltaY: 0 }),
            );
          if (this.props.dragAxis === 'y')
            return this.props.onDragStop(
              e,
              A(A({}, t), { x: this.originalPosition.x + i, y: t.y + s, deltaX: 0 }),
            );
        }
      }),
      (o.prototype.onResizeStart = function (e, t, a) {
        if (this.props.onResizeStart && this.props.onResizeStart(e, t, a) === !1) return !1;
        (e.stopPropagation(), this.setState({ resizing: !0 }));
        var i = this.props.scale,
          s = this.offsetFromParent,
          l = this.getDraggablePosition();
        if (
          ((this.resizingPosition = { x: l.x + s.left, y: l.y + s.top }),
          (this.originalPosition = l),
          this.props.bounds)
        ) {
          var b = this.getParent(),
            v = void 0;
          this.props.bounds === 'parent'
            ? (v = b)
            : this.props.bounds === 'body'
              ? (v = document.body)
              : this.props.bounds === 'window'
                ? (v = window)
                : typeof this.props.bounds == 'string'
                  ? (v = document.querySelector(this.props.bounds))
                  : this.props.bounds instanceof HTMLElement && (v = this.props.bounds);
          var k = this.getSelfElement();
          if (
            k instanceof Element &&
            (v instanceof HTMLElement || v === window) &&
            b instanceof HTMLElement
          ) {
            var h = this.getMaxSizesFromProps(),
              u = h.maxWidth,
              y = h.maxHeight,
              g = this.getParentSize();
            if (u && typeof u == 'string')
              if (u.endsWith('%')) {
                var f = Number(u.replace('%', '')) / 100;
                u = g.width * f;
              } else u.endsWith('px') && (u = Number(u.replace('px', '')));
            if (y && typeof y == 'string')
              if (y.endsWith('%')) {
                var f = Number(y.replace('%', '')) / 100;
                y = g.height * f;
              } else y.endsWith('px') && (y = Number(y.replace('px', '')));
            var m = k.getBoundingClientRect(),
              x = m.left,
              c = m.top,
              S = this.props.bounds === 'window' ? { left: 0, top: 0 } : v.getBoundingClientRect(),
              w = S.left,
              P = S.top,
              D = this.getOffsetWidth(v),
              d = this.getOffsetHeight(v),
              p = t.toLowerCase().endsWith('left'),
              j = t.toLowerCase().endsWith('right'),
              R = t.startsWith('top'),
              C = t.startsWith('bottom');
            if ((p || R) && this.resizable) {
              var _ = (x - w) / i + this.resizable.size.width;
              this.setState({ maxWidth: _ > Number(u) ? u : _ });
            }
            if (j || (this.props.lockAspectRatio && !p && !R)) {
              var _ = D + (w - x) / i;
              this.setState({ maxWidth: _ > Number(u) ? u : _ });
            }
            if ((R || p) && this.resizable) {
              var _ = (c - P) / i + this.resizable.size.height;
              this.setState({ maxHeight: _ > Number(y) ? y : _ });
            }
            if (C || (this.props.lockAspectRatio && !R && !p)) {
              var _ = d + (P - c) / i;
              this.setState({ maxHeight: _ > Number(y) ? y : _ });
            }
          }
        } else this.setState({ maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight });
      }),
      (o.prototype.onResize = function (e, t, a, i) {
        var s = this,
          l = { x: this.originalPosition.x, y: this.originalPosition.y },
          b = -i.width,
          v = -i.height,
          k = ['top', 'left', 'topLeft', 'bottomLeft', 'topRight'];
        k.includes(t) &&
          (t === 'bottomLeft' ? (l.x += b) : (t === 'topRight' || (l.x += b), (l.y += v)));
        var h = this.draggable.state;
        ((l.x !== h.x || l.y !== h.y) &&
          $t.flushSync(function () {
            s.draggable.setState(l);
          }),
          this.updateOffsetFromParent());
        var u = this.offsetFromParent,
          y = this.getDraggablePosition().x + u.left,
          g = this.getDraggablePosition().y + u.top;
        ((this.resizingPosition = { x: y, y: g }),
          this.props.onResize && this.props.onResize(e, t, a, i, { x: y, y: g }));
      }),
      (o.prototype.onResizeStop = function (e, t, a, i) {
        this.setState({ resizing: !1 });
        var s = this.getMaxSizesFromProps(),
          l = s.maxWidth,
          b = s.maxHeight;
        (this.setState({ maxWidth: l, maxHeight: b }),
          this.props.onResizeStop && this.props.onResizeStop(e, t, a, i, this.resizingPosition));
      }),
      (o.prototype.updateSize = function (e) {
        this.resizable && this.resizable.updateSize({ width: e.width, height: e.height });
      }),
      (o.prototype.updatePosition = function (e) {
        this.draggable.setState(e);
      }),
      (o.prototype.updateOffsetFromParent = function () {
        var e = this.props.scale,
          t = this.getParent(),
          a = this.getSelfElement();
        if (!t || a === null) return { top: 0, left: 0 };
        var i = t.getBoundingClientRect(),
          s = i.left,
          l = i.top,
          b = a.getBoundingClientRect(),
          v = this.getDraggablePosition(),
          k = t.scrollLeft,
          h = t.scrollTop;
        this.offsetFromParent = { left: b.left - s + k - v.x * e, top: b.top - l + h - v.y * e };
      }),
      (o.prototype.render = function () {
        var e = this,
          t = this.props,
          a = t.disableDragging,
          i = t.style,
          s = t.dragHandleClassName,
          l = t.position,
          b = t.onMouseDown,
          v = t.onMouseUp,
          k = t.dragAxis,
          h = t.dragGrid,
          u = t.bounds,
          y = t.enableUserSelectHack,
          g = t.cancel,
          f = t.children;
        (t.onResizeStart, t.onResize, t.onResizeStop, t.onDragStart, t.onDrag, t.onDragStop);
        var m = t.resizeHandleStyles,
          x = t.resizeHandleClasses,
          c = t.resizeHandleComponent,
          S = t.enableResizing,
          w = t.resizeGrid,
          P = t.resizeHandleWrapperClass,
          D = t.resizeHandleWrapperStyle,
          d = t.scale,
          p = t.allowAnyClick,
          j = t.dragPositionOffset,
          R = uo(t, [
            'disableDragging',
            'style',
            'dragHandleClassName',
            'position',
            'onMouseDown',
            'onMouseUp',
            'dragAxis',
            'dragGrid',
            'bounds',
            'enableUserSelectHack',
            'cancel',
            'children',
            'onResizeStart',
            'onResize',
            'onResizeStop',
            'onDragStart',
            'onDrag',
            'onDragStop',
            'resizeHandleStyles',
            'resizeHandleClasses',
            'resizeHandleComponent',
            'enableResizing',
            'resizeGrid',
            'resizeHandleWrapperClass',
            'resizeHandleWrapperStyle',
            'scale',
            'allowAnyClick',
            'dragPositionOffset',
          ]),
          C = this.props.default ? A({}, this.props.default) : void 0;
        delete R.default;
        var _ = a || s ? { cursor: 'auto' } : { cursor: 'move' },
          I = A(A(A({}, po), _), i),
          B = this.offsetFromParent,
          z = B.left,
          E = B.top,
          F;
        l && (F = { x: l.x - z, y: l.y - E });
        var Y = this.state.resizing ? void 0 : F,
          K = this.state.resizing ? 'both' : k;
        return M.createElement(
          lo,
          {
            ref: function (H) {
              H && (e.draggable = H);
            },
            handle: s ? '.'.concat(s) : void 0,
            defaultPosition: C,
            onMouseDown: b,
            onMouseUp: v,
            onStart: this.onDragStart,
            onDrag: this.onDrag,
            onStop: this.onDragStop,
            axis: K,
            disabled: a,
            grid: h,
            bounds: u ? this.state.bounds : void 0,
            position: Y,
            enableUserSelectHack: y,
            cancel: g,
            scale: d,
            allowAnyClick: p,
            nodeRef: this.resizableElement,
            positionOffset: j,
          },
          M.createElement(
            yt,
            A({}, R, {
              ref: function (H) {
                H && ((e.resizable = H), (e.resizableElement.current = H.resizable));
              },
              defaultSize: C,
              size: this.props.size,
              enable: typeof S == 'boolean' ? ho(S) : S,
              onResizeStart: this.onResizeStart,
              onResize: this.onResize,
              onResizeStop: this.onResizeStop,
              style: I,
              minWidth: this.props.minWidth,
              minHeight: this.props.minHeight,
              maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
              maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
              grid: w,
              handleWrapperClass: P,
              handleWrapperStyle: D,
              lockAspectRatio: this.props.lockAspectRatio,
              lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
              lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
              handleStyles: m,
              handleClasses: x,
              handleComponent: c,
              scale: this.props.scale,
            }),
            f,
          ),
        );
      }),
      (o.defaultProps = {
        maxWidth: Number.MAX_SAFE_INTEGER,
        maxHeight: Number.MAX_SAFE_INTEGER,
        scale: 1,
        onResizeStart: function () {},
        onResize: function () {},
        onResizeStop: function () {},
        onDragStart: function () {},
        onDrag: function () {},
        onDragStop: function () {},
      }),
      o
    );
  })(M.PureComponent);
const go = 320,
  mo = 280,
  yo = 600,
  Mt = 460,
  Te = 40,
  Ce = 48,
  Rt = { 'no-provider': 32 },
  vo = {
    bottom: !1,
    bottomLeft: !1,
    bottomRight: !1,
    left: !1,
    right: !0,
    top: !1,
    topLeft: !1,
    topRight: !1,
  },
  xo = (n) => {
    const o = be(dt.modelSwitchPanelWidth),
      e = be((i) => i.updateSystemStatus),
      t = M.useMemo(() => (n === 0 ? Te + Rt['no-provider'] + Ce : Mt), [n]);
    return {
      handlePanelWidthChange: M.useCallback(
        (i) => {
          e({ modelSwitchPanelWidth: i });
        },
        [e],
      ),
      panelHeight: t,
      panelWidth: o,
    };
  },
  bo = () => {
    const n = be(dt.modelSwitchPanelGroupMode),
      o = be((t) => t.updateSystemStatus),
      e = M.useCallback(
        (t) => {
          o({ modelSwitchPanelGroupMode: t });
        },
        [o],
      );
    return { groupMode: n, handleGroupModeChange: e };
  },
  So = () => ({}),
  wo = (n, o, e = '') =>
    M.useMemo(() => {
      if (n.length === 0) return [{ type: 'no-provider' }];
      const t = (i) => {
          if (!e.trim()) return !0;
          const s = e.toLowerCase().trim();
          return i.toLowerCase().includes(s);
        },
        a = [...n].sort((i, s) => {
          const l = i.id === 'lobehub',
            b = s.id === 'lobehub';
          return l && !b ? -1 : !l && b ? 1 : 0;
        });
      if (o === 'byModel') {
        const i = new Map();
        for (const l of a)
          for (const b of l.children) {
            const v = b.displayName || b.id;
            if (!t(v) && !t(l.name)) continue;
            (i.has(v) || i.set(v, { displayName: v, model: b, providers: [] }),
              i.get(v).providers.push({ id: l.id, logo: l.logo, name: l.name, source: l.source }));
          }
        const s = Array.from(i.values());
        for (const l of s)
          l.providers.sort((b, v) => {
            const k = b.id === 'lobehub',
              h = v.id === 'lobehub';
            return k && !h ? -1 : !k && h ? 1 : 0;
          });
        return s.map((l) => ({
          data: l,
          type: l.providers.length === 1 ? 'model-item-single' : 'model-item-multiple',
        }));
      } else {
        const i = [];
        for (const s of a) {
          const l = s.children.filter((b) => t(b.displayName || b.id) || t(s.name));
          if (l.length > 0 || !e.trim())
            if ((i.push({ provider: s, type: 'group-header' }), l.length === 0))
              i.push({ provider: s, type: 'empty-model' });
            else for (const b of l) i.push({ model: b, provider: s, type: 'provider-model-item' });
        }
        return i;
      }
    }, [n, o, e]),
  Po = (n, o) => {
    const [e, t] = Se((s) => [Ee.currentAgentModel(s), Ee.currentAgentModelProvider(s)]);
    return { model: n ?? e, provider: o ?? t };
  },
  jo = ({ onModelChange: n, onOpenChange: o }) => {
    const e = Se((i) => i.updateAgentConfig),
      t = M.useCallback(
        (i, s) => {
          setTimeout(() => {
            const l = { model: i, provider: s };
            n ? n(l) : e(l);
          }, 150);
        },
        [n, e],
      );
    return {
      handleClose: M.useCallback(() => {
        o?.(!1);
      }, [o]),
      handleModelChange: t,
    };
  },
  N = _e(({ css: n, cssVar: o }) => ({
    container: n`
    pointer-events: auto;
    user-select: none;
    overflow: hidden;
    padding: 0 !important;
  `,
    detailPopup: n`
    user-select: none;
    overscroll-behavior: contain;
    width: 400px;
  `,
    dropdownMenu: n`
    user-select: none;

    [role='menuitem'] {
      margin-block: 1px;
      margin-inline: 4px;
      padding-block: 8px;
      padding-inline: 8px;
      border-radius: ${o.borderRadiusSM};
    }
  `,
    groupHeader: n`
    width: 100%;
    color: ${o.colorTextSecondary};
  `,
    list: n`
    position: relative;
    overflow: hidden auto;
    overscroll-behavior: contain;
    width: 100%;
  `,
    menuItem: n`
    cursor: pointer;

    position: relative;

    gap: 8px;
    align-items: center;

    margin-block: 1px;
    margin-inline: 4px;
    padding-block: 8px;
    padding-inline: 8px;
    border-radius: ${o.borderRadiusSM};
  `,
    menuItemActive: n`
    background: ${o.colorFillTertiary};
  `,
    footer: n`
    border-block-start: 1px solid ${o.colorBorderSecondary};
  `,
    toolbar: n`
    border-block-end: 1px solid ${o.colorBorderSecondary};
  `,
    trigger: n`
    display: inline-flex;
    outline: none;

    /* SVG icons (from @lobehub/icons IconAvatar) can receive focus when dropdown closes,
       causing an unwanted blue outline ring */
    svg:focus {
      outline: none;
    }
  `,
  })),
  L = (n, o) => `${n}-${o}`,
  Do = M.memo(({ value: n, onChange: o }) =>
    r.jsx(ye, {
      value: !n,
      onChange: (e) => {
        o?.(!e);
      },
    }),
  ),
  ko = M.memo(({ model: n, provider: o }) => {
    const { t: e } = oe('chat'),
      t = sn(),
      { updateAgentChatConfig: a } = an(),
      [i, s] = Se((c) => [Be.getAgentModelById(t)(c), Be.getAgentModelProviderById(t)(c)]),
      l = n ?? i,
      b = o ?? s,
      [v] = Ae.useForm(),
      k = _n.useWatch(['enableReasoning'], v),
      h = Se((c) => Cn.getChatConfigById(t)(c), Ft),
      u = St(wt.modelExtendParams(l, b)),
      g = !Gt.useBreakpoint().sm,
      f = { display: 'inline-block', width: 300 },
      m = { display: 'block', maxWidth: '100%', whiteSpace: 'normal' },
      x = [
        {
          children: r.jsx(Do, {}),
          desc: r.jsx('span', {
            style: g ? m : f,
            children: r.jsxs(He, {
              i18nKey: 'extendParams.disableContextCaching.desc',
              ns: 'chat',
              children: [
                '单条对话生成成本最高可降低 90%，响应速度提升 4 倍（',
                r.jsx('a', {
                  href: 'https://www.anthropic.com/news/prompt-caching?utm_source=lobechat',
                  rel: 'noreferrer nofollow',
                  target: '_blank',
                  children: '了解更多',
                }),
                '）。开启后将自动禁用历史记录限制',
              ],
            }),
          }),
          label: e('extendParams.disableContextCaching.title'),
          layout: g ? 'vertical' : 'horizontal',
          minWidth: void 0,
          name: 'disableContextCaching',
        },
        {
          children: r.jsx(ye, {}),
          desc: r.jsx('span', {
            style: g ? m : f,
            children: r.jsxs(He, {
              i18nKey: 'extendParams.enableReasoning.desc',
              ns: 'chat',
              children: [
                '基于 Claude Thinking 机制限制（',
                r.jsx('a', {
                  rel: 'noreferrer nofollow',
                  target: '_blank',
                  href: 'https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking?utm_source=lobechat#why-thinking-blocks-must-be-preserved',
                  children: '了解更多',
                }),
                '），开启后将自动禁用历史消息数限制',
              ],
            }),
          }),
          label: e('extendParams.enableReasoning.title'),
          layout: g ? 'vertical' : 'horizontal',
          minWidth: void 0,
          name: 'enableReasoning',
        },
        {
          children: r.jsx(ye, {}),
          desc: g
            ? r.jsx('span', { style: m, children: e('extendParams.enableAdaptiveThinking.desc') })
            : e('extendParams.enableAdaptiveThinking.desc'),
          label: e('extendParams.enableAdaptiveThinking.title'),
          layout: g ? 'vertical' : 'horizontal',
          minWidth: void 0,
          name: 'enableAdaptiveThinking',
        },
        (k || u?.includes('reasoningBudgetToken')) && {
          children: r.jsx(ln, {}),
          label: e('extendParams.reasoningBudgetToken.title'),
          layout: 'vertical',
          minWidth: void 0,
          name: 'reasoningBudgetToken',
          style: { paddingBottom: 0 },
        },
        u?.includes('reasoningBudgetToken32k') && {
          children: r.jsx(dn, {}),
          label: e('extendParams.reasoningBudgetToken.title'),
          layout: 'vertical',
          minWidth: void 0,
          name: 'reasoningBudgetToken32k',
          style: { paddingBottom: 0 },
        },
        u?.includes('reasoningBudgetToken80k') && {
          children: r.jsx(cn, {}),
          label: e('extendParams.reasoningBudgetToken.title'),
          layout: 'vertical',
          minWidth: void 0,
          name: 'reasoningBudgetToken80k',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(un, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'reasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(pn, {}),
          desc: g
            ? r.jsx('span', { style: m, children: e('extendParams.effort.desc') })
            : e('extendParams.effort.desc'),
          label: e('extendParams.effort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'effort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(hn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'gpt5ReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(fn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'gpt5_1ReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(gn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'gpt5_2ReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(mn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'gpt5_2ProReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(yn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'grok4_20ReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(vn, {}),
          desc: 'reasoning_effort',
          label: e('extendParams.reasoningEffort.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'codexMaxReasoningEffort',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(xn, {}),
          desc: 'text_verbosity',
          label: e('extendParams.textVerbosity.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'textVerbosity',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(bn, {}),
          label: e('extendParams.thinkingBudget.title'),
          layout: 'vertical',
          minWidth: void 0,
          name: 'thinkingBudget',
          style: { paddingBottom: 0 },
          tag: 'thinkingBudget',
        },
        {
          children: r.jsx(ye, {}),
          desc: g
            ? r.jsx('span', { style: m, children: e('extendParams.urlContext.desc') })
            : e('extendParams.urlContext.desc'),
          label: e('extendParams.urlContext.title'),
          layout: g ? 'vertical' : 'horizontal',
          minWidth: void 0,
          name: 'urlContext',
          style: void 0,
          tag: 'urlContext',
        },
        {
          children: r.jsx(Sn, {}),
          label: e('extendParams.thinking.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinking',
          style: { paddingBottom: 0 },
        },
        {
          children: r.jsx(wn, {}),
          label: e('extendParams.thinkingLevel.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinkingLevel',
          style: { paddingBottom: 0 },
          desc: 'thinkingLevel',
        },
        {
          children: r.jsx(Pn, {}),
          label: e('extendParams.thinkingLevel.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinkingLevel2',
          style: { paddingBottom: 0 },
          desc: 'thinkingLevel',
        },
        {
          children: r.jsx(jn, {}),
          label: e('extendParams.thinkingLevel.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinkingLevel3',
          style: { paddingBottom: 0 },
          desc: 'thinkingLevel',
        },
        {
          children: r.jsx(Dn, {}),
          label: e('extendParams.thinkingLevel.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinkingLevel4',
          style: { paddingBottom: 0 },
          desc: 'thinkingLevel',
        },
        {
          children: r.jsx(kn, {}),
          label: e('extendParams.thinkingLevel.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'thinkingLevel5',
          style: { paddingBottom: 0 },
          desc: 'thinkingLevel',
        },
        {
          children: r.jsx(zn, {}),
          label: e('extendParams.imageAspectRatio.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'imageAspectRatio',
          style: { paddingBottom: 0 },
          desc: 'aspectRatio',
        },
        {
          children: r.jsx(Mn, {}),
          label: e('extendParams.imageAspectRatio.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'imageAspectRatio2',
          style: { paddingBottom: 0 },
          desc: 'aspectRatio',
        },
        {
          children: r.jsx(Rn, {}),
          label: e('extendParams.imageResolution.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'imageResolution',
          style: { paddingBottom: 0 },
          desc: 'imageSize',
        },
        {
          children: r.jsx(Tn, {}),
          label: e('extendParams.imageResolution.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'imageResolution2',
          style: { paddingBottom: 0 },
          desc: 'imageSize',
        },
      ].filter(Boolean);
    return r.jsx(Ae, {
      form: v,
      initialValues: h,
      itemsType: 'flat',
      size: 'small',
      style: { fontSize: 12 },
      variant: 'borderless',
      items: (u || []).map((c) => x.find((S) => S.name === c)).filter(Boolean),
      onValuesChange: async (c, S) => {
        await a(S);
      },
    });
  }),
  W = _e(({ css: n, cssVar: o }) => ({
    actionText: n`
    font-size: 14px;
    font-weight: 500;
    color: ${o.colorText};
  `,
    container: n`
    padding-block-end: 8px;
  `,
    extraControls: n`
    padding: 8px;

    .ant-form-item:first-child {
      padding-block: 0 4px;
    }

    .ant-form-item:last-child {
      padding-block: 4px 0;
    }

    .ant-divider {
      display: none;
    }
  `,
    row: n`
    padding-block: 4px;
    padding-inline: 8px;
    font-size: 12px;
    color: ${o.colorTextSecondary};
  `,
    titleText: n`
    font-size: 14px;
    font-weight: 400;
    color: ${o.colorTextSecondary};
  `,
  })),
  zo = (n) => {
    const o = nn(n),
      e = on(n),
      t = bt(n);
    return {
      cachedInput: t ? G(t, n?.currency) : '0',
      input: o ? G(o, n?.currency) : '0',
      output: e ? G(e, n?.currency) : '0',
    };
  },
  Mo = {
    audioInput: 'audio',
    audioInput_cacheRead: 'audio',
    audioOutput: 'audio',
    imageGeneration: 'image',
    imageInput: 'image',
    imageInput_cacheRead: 'image',
    imageOutput: 'image',
    textInput: 'text',
    textInput_cacheRead: 'text',
    textInput_cacheWrite: 'text',
    textOutput: 'text',
    videoGeneration: 'video',
  },
  Ro = ['text', 'image', 'audio', 'video'],
  st = {
    audioInput: xe,
    audioInput_cacheRead: ce,
    audioOutput: ve,
    imageGeneration: Pt,
    imageInput: xe,
    imageInput_cacheRead: ce,
    imageOutput: ve,
    textInput: xe,
    textInput_cacheRead: ce,
    textInput_cacheWrite: ce,
    textOutput: ve,
  },
  at = {
    textInput: 0,
    textOutput: 1,
    textInput_cacheRead: 2,
    textInput_cacheWrite: 3,
    imageInput: 0,
    imageOutput: 1,
    imageInput_cacheRead: 2,
    imageGeneration: 3,
    audioInput: 0,
    audioOutput: 1,
    audioInput_cacheRead: 2,
    videoGeneration: 0,
  },
  To = {
    image: '/img',
    megapixel: '/MP',
    millionCharacters: '/M chars',
    millionTokens: '/M tokens',
    second: '/s',
  },
  Co = (n, o) => {
    const e = To[n.unit] || '';
    if (n.strategy === 'fixed') return `$${G(n.rate, o)}${e}`;
    if (n.strategy === 'tiered') {
      const t = n.tiers;
      if (t.length === 1) return `$${G(t[0].rate, o)}${e}`;
      const a = G(t[0].rate, o),
        i = G(t.at(-1).rate, o);
      return `$${a} ~ $${i}${e}`;
    }
    if (n.strategy === 'lookup') {
      const t = Object.values(n.lookup.prices);
      if (t.length === 1) return `$${G(t[0], o)}${e}`;
      const a = [...t].sort((l, b) => l - b),
        i = G(a[0], o),
        s = G(a.at(-1), o);
      return `$${i} ~ $${s}${e}`;
    }
    return '-';
  },
  _o = (n) => {
    const o = new Map();
    for (const e of n) {
      const t = Mo[e.name] || 'text',
        a = o.get(t) || [];
      (a.push(e), o.set(t, a));
    }
    for (const [, e] of o) e.sort((t, a) => (at[t.name] ?? 99) - (at[a.name] ?? 99));
    return Ro.filter((e) => o.has(e)).map((e) => ({ group: e, units: o.get(e) }));
  },
  No = [
    { color: 'success', icon: Nn, key: 'vision' },
    { color: 'success', icon: In, key: 'files' },
    { color: 'success', icon: Pt, key: 'imageOutput' },
    { color: 'magenta', icon: On, key: 'video' },
    { color: 'info', icon: En, key: 'functionCall' },
    { color: 'purple', icon: An, key: 'reasoning' },
    { color: 'cyan', icon: Bn, key: 'search' },
  ],
  ne = M.memo(({ model: n, provider: o, enabledList: e, pricingMode: t }) => {
    const { t: a } = oe('components'),
      i = Ne(),
      s = e ?? i,
      l = M.useMemo(
        () => (!n || !o ? void 0 : s.find((S) => S.id === o)?.children.find((S) => S.id === n)),
        [s, n, o],
      ),
      b = St(wt.isModelHasExtendParams(n ?? '', o ?? '')),
      [v, k] = M.useState(() => {
        const c = ['pricing'];
        return (b && !t && c.push('config'), c);
      }),
      h = !!l?.pricing,
      u = h ? zo(l.pricing) : null,
      y = M.useMemo(() => (h ? _o(l.pricing.units) : []), [h, l?.pricing]),
      g = M.useMemo(() => {
        if (!h || !l?.pricing || !t) return null;
        const c = l.pricing,
          S = c.currency;
        if (t === 'image' && typeof c.approximatePricePerImage == 'number') {
          const w = G(c.approximatePricePerImage, S);
          return a('ModelSwitchPanel.detail.pricing.perImage', {
            amount: w,
            defaultValue: '~ ${{amount}} / image',
          });
        }
        if (t === 'video' && typeof c.approximatePricePerVideo == 'number') {
          const w = G(c.approximatePricePerVideo, S);
          return a('ModelSwitchPanel.detail.pricing.perVideo', {
            amount: w,
            defaultValue: '~ ${{amount}} / video',
          });
        }
        return null;
      }, [h, l?.pricing, t, a]);
    if (!l) return null;
    const f = typeof l.contextWindowTokens == 'number',
      m = No.filter((c) => l.abilities[c.key]),
      x = m.length > 0;
    return r.jsx(T, {
      className: W.container,
      children:
        (h || f || x || (b && !t)) &&
        r.jsxs(rn, {
          expandedKeys: v,
          gap: 8,
          onExpandedChange: (c) => k(c),
          children: [
            f &&
              r.jsx(he, {
                alwaysShowAction: !0,
                hideIndicator: !0,
                allowExpand: !1,
                itemKey: 'context',
                paddingBlock: 6,
                paddingInline: 8,
                action: r.jsx('span', {
                  className: W.actionText,
                  children:
                    l.contextWindowTokens === 0 ? '∞' : `${tn(l.contextWindowTokens)} tokens`,
                }),
                title: r.jsxs(T, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    r.jsx('div', {
                      style: {
                        background: '#1677ff',
                        borderRadius: 2,
                        flexShrink: 0,
                        height: 14,
                        width: 3,
                      },
                    }),
                    r.jsx('span', {
                      className: W.titleText,
                      children: a('ModelSwitchPanel.detail.context'),
                    }),
                  ],
                }),
              }),
            x &&
              r.jsx(he, {
                alwaysShowAction: !0,
                itemKey: 'abilities',
                paddingBlock: 6,
                paddingInline: 8,
                action:
                  !v.includes('abilities') &&
                  r.jsx(T, {
                    horizontal: !0,
                    gap: 2,
                    children: m.map((c) =>
                      r.jsx(
                        ct,
                        {
                          color: c.color,
                          style: { borderRadius: 4, minWidth: 0, padding: '0 4px' },
                          children: r.jsx(U, { icon: c.icon, style: { fontSize: 12 } }),
                        },
                        c.key,
                      ),
                    ),
                  }),
                title: r.jsxs(T, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    r.jsx('div', {
                      style: {
                        background: '#722ed1',
                        borderRadius: 2,
                        flexShrink: 0,
                        height: 14,
                        width: 3,
                      },
                    }),
                    r.jsx('span', {
                      className: W.titleText,
                      children: a('ModelSwitchPanel.detail.abilities'),
                    }),
                  ],
                }),
                children: r.jsx(T, {
                  gap: 4,
                  children: m.map((c) =>
                    r.jsxs(
                      T,
                      {
                        horizontal: !0,
                        align: 'center',
                        className: W.row,
                        justify: 'space-between',
                        children: [
                          r.jsxs(T, {
                            horizontal: !0,
                            align: 'center',
                            gap: 6,
                            children: [
                              r.jsx(U, { icon: c.icon, style: { fontSize: 12 } }),
                              r.jsx('span', {
                                children: a(`ModelSwitchPanel.detail.abilities.${c.key}`),
                              }),
                            ],
                          }),
                          r.jsx('span', {
                            style: { color: 'var(--ant-color-text-tertiary)', fontSize: 11 },
                            children: a(
                              `ModelSelect.featureTag.${c.key === 'files' ? 'file' : c.key}`,
                            ),
                          }),
                        ],
                      },
                      c.key,
                    ),
                  ),
                }),
              }),
            h &&
              (u || g) &&
              r.jsx(he, {
                alwaysShowAction: !0,
                itemKey: 'pricing',
                paddingBlock: 6,
                paddingInline: 8,
                action:
                  !v.includes('pricing') &&
                  (g
                    ? r.jsx('span', { className: W.actionText, children: g })
                    : r.jsxs(T, {
                        horizontal: !0,
                        align: 'center',
                        className: W.actionText,
                        gap: 8,
                        children: [
                          bt(l.pricing) &&
                            r.jsx(ze, {
                              title: a('ModelSwitchPanel.detail.pricing.cachedInput', {
                                amount: u.cachedInput,
                              }),
                              children: r.jsxs(T, {
                                horizontal: !0,
                                align: 'center',
                                gap: 2,
                                children: [r.jsx(U, { icon: ce, size: 'small' }), u.cachedInput],
                              }),
                            }),
                          r.jsx(ze, {
                            title: a('ModelSwitchPanel.detail.pricing.input', { amount: u.input }),
                            children: r.jsxs(T, {
                              horizontal: !0,
                              align: 'center',
                              gap: 2,
                              children: [r.jsx(U, { icon: xe, size: 'small' }), u.input],
                            }),
                          }),
                          r.jsx(ze, {
                            title: a('ModelSwitchPanel.detail.pricing.output', {
                              amount: u.output,
                            }),
                            children: r.jsxs(T, {
                              horizontal: !0,
                              align: 'center',
                              gap: 2,
                              children: [r.jsx(U, { icon: ve, size: 'small' }), u.output],
                            }),
                          }),
                        ],
                      })),
                title: r.jsxs(T, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    r.jsx('div', {
                      style: {
                        background: '#fa8c16',
                        borderRadius: 2,
                        flexShrink: 0,
                        height: 14,
                        width: 3,
                      },
                    }),
                    r.jsx('span', {
                      className: W.titleText,
                      children: a('ModelSwitchPanel.detail.pricing'),
                    }),
                  ],
                }),
                children: r.jsxs(T, {
                  gap: 8,
                  children: [
                    g && r.jsx(T, { className: W.row, style: { fontWeight: 500 }, children: g }),
                    y.map(({ group: c, units: S }) =>
                      r.jsxs(
                        T,
                        {
                          gap: 4,
                          children: [
                            y.length > 1 &&
                              r.jsx(T, {
                                className: W.row,
                                style: { fontWeight: 500 },
                                children: a(`ModelSwitchPanel.detail.pricing.group.${c}`),
                              }),
                            S.map((w) =>
                              r.jsxs(
                                T,
                                {
                                  horizontal: !0,
                                  align: 'center',
                                  className: W.row,
                                  justify: 'space-between',
                                  children: [
                                    r.jsxs(T, {
                                      horizontal: !0,
                                      align: 'center',
                                      gap: 6,
                                      children: [
                                        st[w.name] && r.jsx(U, { icon: st[w.name], size: 'small' }),
                                        r.jsx('span', {
                                          children: a(
                                            `ModelSwitchPanel.detail.pricing.unit.${w.name}`,
                                          ),
                                        }),
                                      ],
                                    }),
                                    r.jsx('span', { children: Co(w, l.pricing?.currency) }),
                                  ],
                                },
                                w.name,
                              ),
                            ),
                          ],
                        },
                        c,
                      ),
                    ),
                  ],
                }),
              }),
            b &&
              o &&
              !t &&
              r.jsx(he, {
                itemKey: 'config',
                paddingBlock: 6,
                paddingInline: 8,
                title: r.jsxs(T, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [
                    r.jsx('div', {
                      style: {
                        background: '#52c41a',
                        borderRadius: 2,
                        flexShrink: 0,
                        height: 14,
                        width: 3,
                      },
                    }),
                    r.jsx('span', {
                      className: W.titleText,
                      children: a('ModelSwitchPanel.detail.config'),
                    }),
                  ],
                }),
                children: r.jsx('div', {
                  className: W.extraControls,
                  children: r.jsx(ko, { model: l.id, provider: o }),
                }),
              }),
          ],
        }),
    });
  });
ne.displayName = 'ModelDetailPanel';
const Tt = M.memo(
  ({
    item: n,
    activeKey: o,
    onClose: e,
    onModelChange: t,
    enabledList: a,
    ModelItemComponent: i,
    pricingMode: s,
  }) => {
    const { t: l } = oe('components'),
      [b, v] = M.useState(!1),
      k = n.data.providers.find((u) => L(u.id, n.data.model.id) === o),
      h = !!k;
    return r.jsx(T, {
      style: { marginBlock: 1, marginInline: 4 },
      children: r.jsxs(re, {
        open: b,
        onOpenChange: v,
        children: [
          r.jsx(ie, {
            className: $(se.item, h && N.menuItemActive),
            style: { paddingBlock: 8, paddingInline: 8 },
            onClick: () => {
              (v(!1), t(n.data.model.id, (k ?? n.data.providers[0]).id), e());
            },
            children: r.jsx(i, {
              ...n.data.model,
              providerId: (k ?? n.data.providers[0]).id,
              showBadge: !1,
              showPopover: !1,
            }),
          }),
          r.jsx(Q, {
            children: r.jsx(ee, {
              anchor: null,
              placement: 'right',
              sideOffset: 12,
              children: r.jsxs(te, {
                className: $(N.detailPopup, N.dropdownMenu),
                children: [
                  r.jsx(ne, {
                    enabledList: a,
                    model: n.data.model.id,
                    pricingMode: s,
                    provider: (k ?? n.data.providers[0]).id,
                  }),
                  r.jsxs(T, {
                    gap: 4,
                    paddingBlock: 8,
                    paddingInline: 8,
                    children: [
                      r.jsx(T, {
                        style: { color: ue.colorTextSecondary, fontSize: 12 },
                        children: l('ModelSwitchPanel.useModelFrom'),
                      }),
                      n.data.providers.map((u) => {
                        const y = L(u.id, n.data.model.id),
                          g = h ? o === y : u.id === 'lobehub';
                        return r.jsxs(
                          T,
                          {
                            horizontal: !0,
                            className: N.menuItem,
                            onClick: () => {
                              (t(n.data.model.id, u.id), e());
                            },
                            children: [
                              r.jsx(je, {
                                logo: u.logo,
                                name: u.name,
                                provider: u.id,
                                source: u.source,
                              }),
                              g ? r.jsx(jt, { size: 16 }) : null,
                            ],
                          },
                          y,
                        );
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
);
Tt.displayName = 'GenerationMultipleProvidersItem';
const Ct = M.memo(
  ({
    item: n,
    activeKey: o,
    onClose: e,
    onModelChange: t,
    enabledList: a,
    ModelItemComponent: i,
    pricingMode: s,
  }) => {
    const { t: l } = oe('components'),
      b = ut(),
      [v, k] = M.useState(!1);
    switch (n.type) {
      case 'no-provider':
        return r.jsxs(T, {
          horizontal: !0,
          className: N.menuItem,
          gap: 8,
          style: { color: ue.colorTextTertiary },
          onClick: () => {
            (b('/settings/provider/all'), e());
          },
          children: [l('ModelSwitchPanel.emptyProvider'), r.jsx(U, { icon: Pe })],
        });
      case 'group-header':
        return r.jsxs(T, {
          horizontal: !0,
          className: N.groupHeader,
          justify: 'space-between',
          paddingBlock: '12px 4px',
          paddingInline: '12px 8px',
          children: [
            r.jsx(je, {
              logo: n.provider.logo,
              name: n.provider.name,
              provider: n.provider.id,
              source: n.provider.source,
            }),
            r.jsx(pt, {
              className: 'settings-icon',
              icon: Dt,
              size: 'small',
              title: l('ModelSwitchPanel.goToSettings'),
              onClick: (h) => {
                (h.preventDefault(), h.stopPropagation());
                const u = ht('/settings/provider', n.provider.id || 'all');
                (h.ctrlKey || h.metaKey ? window.open(u, '_blank') : b(u), e());
              },
            }),
          ],
        });
      case 'empty-model':
        return r.jsxs(T, {
          horizontal: !0,
          className: N.menuItem,
          gap: 8,
          style: { color: ue.colorTextTertiary },
          onClick: () => {
            (b(`/settings/provider/${n.provider.id}`), e());
          },
          children: [l('ModelSwitchPanel.emptyModel'), r.jsx(U, { icon: Pe })],
        });
      case 'provider-model-item': {
        const u = L(n.provider.id, n.model.id) === o;
        return r.jsx(T, {
          style: { marginBlock: 1, marginInline: 4 },
          children: r.jsxs(re, {
            open: v,
            onOpenChange: k,
            children: [
              r.jsx(ie, {
                style: { paddingBlock: 8, paddingInline: 8 },
                className: $(se.item, u && N.menuItemActive),
                onClick: () => {
                  (k(!1), t(n.model.id, n.provider.id), e());
                },
                children: r.jsx(i, {
                  ...n.model,
                  providerId: n.provider.id,
                  showBadge: !1,
                  showPopover: !1,
                }),
              }),
              r.jsx(Q, {
                children: r.jsx(ee, {
                  anchor: null,
                  placement: 'right',
                  sideOffset: 12,
                  children: r.jsx(te, {
                    className: N.detailPopup,
                    children: r.jsx(ne, {
                      enabledList: a,
                      model: n.model.id,
                      pricingMode: s,
                      provider: n.provider.id,
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      case 'model-item-single': {
        const h = n.data.providers[0],
          y = L(h.id, n.data.model.id) === o;
        return r.jsx(T, {
          style: { marginBlock: 1, marginInline: 4 },
          children: r.jsxs(re, {
            open: v,
            onOpenChange: k,
            children: [
              r.jsx(ie, {
                style: { paddingBlock: 8, paddingInline: 8 },
                className: $(se.item, y && N.menuItemActive),
                onClick: () => {
                  (k(!1), t(n.data.model.id, h.id), e());
                },
                children: r.jsx(i, {
                  ...n.data.model,
                  providerId: h.id,
                  showBadge: !1,
                  showPopover: !1,
                }),
              }),
              r.jsx(Q, {
                children: r.jsx(ee, {
                  anchor: null,
                  placement: 'right',
                  sideOffset: 12,
                  children: r.jsx(te, {
                    className: N.detailPopup,
                    children: r.jsx(ne, {
                      enabledList: a,
                      model: n.data.model.id,
                      pricingMode: s,
                      provider: h.id,
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      case 'model-item-multiple':
        return r.jsx(Tt, {
          ModelItemComponent: i,
          activeKey: o,
          enabledList: a,
          item: n,
          pricingMode: s,
          onClose: e,
          onModelChange: t,
        });
      default:
        return null;
    }
  },
);
Ct.displayName = 'GenerationListItemRenderer';
const _t = M.memo(
  ({
    activeKey: n,
    data: o,
    isModelRestricted: e,
    newLabel: t,
    onModelChange: a,
    onClose: i,
    onRestrictedModelClick: s,
    proLabel: l,
    showInfoTag: b,
  }) => {
    const { t: v } = oe('components'),
      [k, h] = M.useState(!1),
      u = o.providers.find((f) => L(f.id, o.model.id) === n),
      y = !!u,
      g = e && o.providers.length > 0 && o.providers.every((f) => e(o.model.id, f.id));
    return r.jsxs(re, {
      open: k,
      onOpenChange: (f) => {
        (g && f) || h(f);
      },
      children: [
        r.jsx(ie, {
          className: $(se.item, y && N.menuItemActive),
          style: { paddingBlock: 8, paddingInline: 8 },
          onClick: () => {
            if (g) {
              (s?.(), i());
              return;
            }
            (h(!1), a(o.model.id, o.providers[0].id), i());
          },
          children: r.jsx(we, {
            ...o.model,
            ...o.model.abilities,
            newBadgeLabel: t,
            proBadgeLabel: g ? l : void 0,
            showInfoTag: b,
          }),
        }),
        r.jsx(Q, {
          children: r.jsx(ee, {
            anchor: null,
            placement: 'right',
            sideOffset: 12,
            children: r.jsxs(te, {
              className: $(N.detailPopup, N.dropdownMenu),
              children: [
                b && r.jsx(ne, { model: o.model.id, provider: (u ?? o.providers[0]).id }),
                r.jsxs(qt, {
                  children: [
                    r.jsx(Vt, { children: v('ModelSwitchPanel.useModelFrom') }),
                    o.providers.map((f) => {
                      const m = L(f.id, o.model.id),
                        x = y ? n === m : f.id === 'lobehub',
                        c = e?.(o.model.id, f.id);
                      return r.jsxs(
                        Kt,
                        {
                          onClick: () => {
                            if (c) {
                              (s?.(), i());
                              return;
                            }
                            (h(!1), i(), a(o.model.id, f.id));
                          },
                          children: [
                            r.jsx(Jt, { children: x ? r.jsx(jt, { size: 16 }) : null }),
                            r.jsx(Zt, {
                              children: r.jsxs(T, {
                                horizontal: !0,
                                align: 'center',
                                gap: 8,
                                children: [
                                  r.jsx(T, {
                                    horizontal: !0,
                                    align: 'center',
                                    style: { flex: 'none' },
                                    children: r.jsx(je, {
                                      logo: f.logo,
                                      name: f.name,
                                      provider: f.id,
                                      size: 20,
                                      source: f.source,
                                      type: 'avatar',
                                    }),
                                  }),
                                  c &&
                                    l &&
                                    r.jsx(ct, { color: 'gold', size: 'small', children: l }),
                                ],
                              }),
                            }),
                          ],
                        },
                        m,
                      );
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
);
_t.displayName = 'MultipleProvidersModelItem';
const Nt = M.memo(({ data: n, newLabel: o, proBadgeLabel: e, showInfoTag: t }) =>
  r.jsx(we, {
    ...n.model,
    ...n.model.abilities,
    newBadgeLabel: o,
    proBadgeLabel: e,
    showInfoTag: t,
  }),
);
Nt.displayName = 'SingleProviderModelItem';
const It = M.memo(
  ({
    activeKey: n,
    isModelRestricted: o,
    item: e,
    newLabel: t,
    onModelChange: a,
    onClose: i,
    onRestrictedModelClick: s,
    proLabel: l,
    subscribeScroll: b,
  }) => {
    const { t: v } = oe('components'),
      k = ut(),
      h = ft((g) => gt.config(g).isDevMode),
      [u, y] = M.useState(!1);
    switch ((M.useEffect(() => b?.(() => y(!1)), [b]), e.type)) {
      case 'no-provider':
        return r.jsxs(
          Wn,
          {
            clickable: !0,
            horizontal: !0,
            className: N.menuItem,
            gap: 8,
            style: { color: ue.colorTextTertiary },
            variant: 'borderless',
            onClick: () => k('/settings/provider/all'),
            children: [v('ModelSwitchPanel.emptyProvider'), r.jsx(U, { icon: Pe })],
          },
          'no-provider',
        );
      case 'group-header':
        return r.jsxs(
          T,
          {
            horizontal: !0,
            className: N.groupHeader,
            justify: 'space-between',
            paddingBlock: '12px 4px',
            paddingInline: '12px 8px',
            children: [
              r.jsx(je, {
                logo: e.provider.logo,
                name: e.provider.name,
                provider: e.provider.id,
                source: e.provider.source,
              }),
              r.jsx(pt, {
                className: 'settings-icon',
                icon: Dt,
                size: 'small',
                title: v('ModelSwitchPanel.goToSettings'),
                onClick: (g) => {
                  (g.preventDefault(), g.stopPropagation());
                  const f = ht('/settings/provider', e.provider.id || 'all');
                  (g.ctrlKey || g.metaKey ? window.open(f, '_blank') : k(f), i());
                },
              }),
            ],
          },
          `header-${e.provider.id}`,
        );
      case 'empty-model':
        return r.jsxs(
          T,
          {
            horizontal: !0,
            className: N.menuItem,
            gap: 8,
            style: { color: ue.colorTextTertiary },
            onClick: () => k(`/settings/provider/${e.provider.id}`),
            children: [v('ModelSwitchPanel.emptyModel'), r.jsx(U, { icon: Pe })],
          },
          `empty-${e.provider.id}`,
        );
      case 'provider-model-item': {
        const f = L(e.provider.id, e.model.id) === n,
          m = o?.(e.model.id, e.provider.id);
        return h
          ? r.jsx(T, {
              style: { marginBlock: 1, marginInline: 4 },
              children: r.jsxs(re, {
                open: u,
                onOpenChange: y,
                children: [
                  r.jsx(ie, {
                    className: $(se.item, f && N.menuItemActive),
                    style: { paddingBlock: 8, paddingInline: 8 },
                    onClick: (x) => {
                      (x.preventDefault(), y(!1), i(), a(e.model.id, e.provider.id));
                    },
                    children: r.jsx(we, {
                      ...e.model,
                      ...e.model.abilities,
                      showInfoTag: !0,
                      newBadgeLabel: t,
                    }),
                  }),
                  r.jsx(Q, {
                    children: r.jsx(ee, {
                      anchor: null,
                      placement: 'right',
                      sideOffset: 12,
                      children: r.jsx(te, {
                        className: N.detailPopup,
                        children: r.jsx(ne, { model: e.model.id, provider: e.provider.id }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          : r.jsx(T, {
              style: { marginBlock: 1, marginInline: 4 },
              children: r.jsxs(re, {
                open: u,
                onOpenChange: y,
                children: [
                  r.jsx(ie, {
                    className: $(se.item, f && N.menuItemActive),
                    style: { paddingBlock: 8, paddingInline: 8 },
                    onClick: (x) => {
                      if ((x.preventDefault(), y(!1), m)) {
                        (s?.(), i());
                        return;
                      }
                      (i(), a(e.model.id, e.provider.id));
                    },
                    children: r.jsx(we, {
                      ...e.model,
                      ...e.model.abilities,
                      newBadgeLabel: t,
                      proBadgeLabel: m ? l : void 0,
                    }),
                  }),
                  r.jsx(Q, {
                    children: r.jsx(ee, {
                      anchor: null,
                      placement: 'right',
                      sideOffset: 12,
                      children: r.jsx(te, {
                        className: N.detailPopup,
                        children: r.jsx(ne, { model: e.model.id, provider: e.provider.id }),
                      }),
                    }),
                  }),
                ],
              }),
            });
      }
      case 'model-item-single': {
        const g = e.data.providers[0],
          m = L(g.id, e.data.model.id) === n,
          x = o?.(e.data.model.id, g.id);
        return r.jsx(T, {
          style: { marginBlock: 1, marginInline: 4 },
          children: r.jsxs(re, {
            open: u,
            onOpenChange: y,
            children: [
              r.jsx(ie, {
                className: $(se.item, m && N.menuItemActive),
                style: { paddingBlock: 8, paddingInline: 8 },
                onClick: (c) => {
                  if ((c.preventDefault(), y(!1), x)) {
                    (s?.(), i());
                    return;
                  }
                  (i(), a(e.data.model.id, g.id));
                },
                children: r.jsx(Nt, {
                  data: e.data,
                  newLabel: t,
                  proBadgeLabel: x ? l : void 0,
                  showInfoTag: h,
                }),
              }),
              r.jsx(Q, {
                children: r.jsx(ee, {
                  anchor: null,
                  placement: 'right',
                  sideOffset: 16,
                  children: r.jsx(te, {
                    className: N.detailPopup,
                    children: r.jsx(ne, { model: e.data.model.id, provider: g.id }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      case 'model-item-multiple':
        return r.jsx(
          T,
          {
            style: { marginBlock: 1, marginInline: 4 },
            children: r.jsx(_t, {
              activeKey: n,
              data: e.data,
              isModelRestricted: o,
              newLabel: t,
              proLabel: l,
              showInfoTag: h,
              onClose: i,
              onModelChange: a,
              onRestrictedModelClick: s,
            }),
          },
          e.data.displayName,
        );
      default:
        return null;
    }
  },
);
It.displayName = 'ListItemRenderer';
const Io = ({
    ModelItemComponent: n,
    enabledList: o,
    groupMode: e,
    model: t,
    onModelChange: a,
    onOpenChange: i,
    pricingMode: s,
    provider: l,
    searchKeyword: b = '',
  }) => {
    const { t: v } = oe('common'),
      k = v('new'),
      { isModelRestricted: h, onRestrictedModelClick: u } = So(),
      y = h ? v('pro') : void 0,
      g = Ne(),
      f = o ?? g,
      { model: m, provider: x } = Po(t, l),
      { handleModelChange: c, handleClose: S } = jo({ onModelChange: a, onOpenChange: i }),
      w = wo(f, e, b),
      P = M.useMemo(() => (f.length === 0 ? Te + Rt['no-provider'] + Ce : Mt), [f.length]),
      D = L(x, m),
      d = M.useRef(null),
      p = M.useRef(null),
      j = M.useRef(!1),
      R = M.useCallback((z) => {
        p.current = z;
      }, []),
      C = P - Te - Ce,
      _ = M.useRef(new Set()),
      I = M.useCallback(
        (z) => (
          _.current.add(z),
          () => {
            _.current.delete(z);
          }
        ),
        [],
      ),
      B = M.useCallback(() => {
        _.current.forEach((z) => z());
      }, []);
    return (
      M.useLayoutEffect(() => {
        if (j.current) return;
        const z = d.current,
          E = p.current;
        if (!z || !E) return;
        const F = E.offsetTop - (z.clientHeight - E.offsetHeight) / 2;
        ((z.scrollTop = Math.max(0, F)), (j.current = !0));
      }, [C, D]),
      r.jsx(T, {
        className: N.list,
        flex: 1,
        ref: d,
        style: { height: C },
        onScroll: B,
        children: w.map((z, E) => {
          const F = L(
              'provider' in z && z.provider ? z.provider.id : '',
              'model' in z && z.model
                ? z.model.id
                : 'data' in z && z.data
                  ? z.data.displayName
                  : `${z.type}-${E}`,
            ),
            Y =
              (z.type === 'provider-model-item' && L(z.provider.id, z.model.id) === D) ||
              (z.type === 'model-item-single' &&
                L(z.data.providers[0].id, z.data.model.id) === D) ||
              (z.type === 'model-item-multiple' &&
                z.data.providers.some((H) => L(H.id, z.data.model.id) === D)),
            K = (H) =>
              n
                ? r.jsx(
                    Ct,
                    {
                      ModelItemComponent: n,
                      activeKey: D,
                      enabledList: f,
                      item: z,
                      pricingMode: s,
                      onClose: S,
                      onModelChange: c,
                    },
                    H,
                  )
                : r.jsx(
                    It,
                    {
                      activeKey: D,
                      isModelRestricted: h,
                      item: z,
                      newLabel: k,
                      proLabel: y,
                      subscribeScroll: I,
                      onClose: S,
                      onModelChange: c,
                      onRestrictedModelClick: u,
                    },
                    H,
                  );
          return Y ? r.jsx('div', { ref: R, children: K() }, F) : K(F);
        }),
      })
    );
  },
  Ot = M.memo(
    ({
      groupMode: n,
      onGroupModeChange: o,
      searchKeyword: e,
      onSearchKeywordChange: t,
      showGroupModeSwitch: a,
    }) => {
      const { t: i } = oe('components');
      return r.jsxs(T, {
        horizontal: !0,
        align: 'center',
        className: N.toolbar,
        gap: 4,
        paddingBlock: 8,
        paddingInline: 8,
        children: [
          r.jsx(Ln, {
            allowClear: !0,
            placeholder: i('ModelSwitchPanel.searchPlaceholder'),
            size: 'small',
            style: { flex: 1 },
            value: e,
            variant: 'borderless',
            onChange: (s) => t(s.target.value),
            onKeyDown: mt,
          }),
          a &&
            r.jsx($n, {
              size: 'small',
              value: n,
              options: [
                {
                  icon: r.jsx(U, { icon: Hn }),
                  title: i('ModelSwitchPanel.byModel'),
                  value: 'byModel',
                },
                {
                  icon: r.jsx(U, { icon: Fn }),
                  title: i('ModelSwitchPanel.byProvider'),
                  value: 'byProvider',
                },
              ],
              onChange: (s) => o?.(s),
            }),
        ],
      });
    },
  );
Ot.displayName = 'Toolbar';
const Oo = ({
    ModelItemComponent: n,
    enabledList: o,
    model: e,
    onModelChange: t,
    onOpenChange: a,
    pricingMode: i,
    provider: s,
  }) => {
    const l = Ne(),
      b = o ?? l,
      [v, k] = M.useState(''),
      h = ft((c) => gt.config(c).isDevMode),
      { groupMode: u, handleGroupModeChange: y } = bo(),
      { panelHeight: g, panelWidth: f, handlePanelWidthChange: m } = xo(b.length),
      x = r.jsxs(r.Fragment, {
        children: [
          r.jsx(Ot, {
            groupMode: u,
            searchKeyword: v,
            showGroupModeSwitch: h,
            onGroupModeChange: y,
            onSearchKeywordChange: k,
          }),
          r.jsx(Io, {
            ModelItemComponent: n,
            enabledList: b,
            groupMode: h ? u : 'byModel',
            model: e,
            pricingMode: i,
            provider: s,
            searchKeyword: v,
            onModelChange: t,
            onOpenChange: a,
          }),
        ],
      });
    return h
      ? r.jsx(fo, {
          disableDragging: !0,
          enableResizing: vo,
          maxWidth: yo,
          minWidth: mo,
          position: { x: 0, y: 0 },
          size: { height: g, width: f },
          style: { display: 'flex', flexDirection: 'column', position: 'relative' },
          onResizeStop: (c, S, w) => {
            m(w.offsetWidth);
          },
          children: x,
        })
      : r.jsx(T, {
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: g,
            position: 'relative',
            width: go,
          },
          children: x,
        });
  },
  Eo = M.memo(
    ({
      ModelItemComponent: n,
      children: o,
      enabledList: e,
      model: t,
      onModelChange: a,
      onOpenChange: i,
      open: s,
      placement: l = 'topLeft',
      pricingMode: b,
      provider: v,
      openOnHover: k = !0,
    }) => {
      const [h, u] = M.useState(!1),
        y = s ?? h,
        g = M.useCallback(
          (f) => {
            (u(f), i?.(f));
          },
          [i],
        );
      return r.jsx(Ut, {
        children: r.jsxs(Qt, {
          open: y,
          onOpenChange: g,
          children: [
            r.jsx(en, { className: N.trigger, openOnHover: k, children: o }),
            r.jsx(Q, {
              children: r.jsx(ee, {
                hoverTrigger: k,
                placement: l,
                children: r.jsx(te, {
                  className: N.container,
                  onKeyDown: mt,
                  children: r.jsx(Oo, {
                    ModelItemComponent: n,
                    enabledList: e,
                    model: t,
                    pricingMode: b,
                    provider: v,
                    onModelChange: a,
                    onOpenChange: g,
                  }),
                }),
              }),
            }),
          ],
        }),
      });
    },
  );
Eo.displayName = 'ModelSwitchPanel';
export { ko as C, Eo as M, to as a, ne as b };
