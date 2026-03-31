import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as H, a as k } from './index-BsHwsvJB.js';
import { u as X } from './useFillId-Dc6zFnxP.js';
import { j as n } from '../vendor/vendor-motion-Dbb9VQJo.js';
var f = 'LobeHub',
  Y = 0.6,
  q = 0.2,
  V = '#fff',
  J = V,
  Q = '#fff',
  Z = 0.8;
function b(t) {
  '@babel/helpers - typeof';
  return (
    (b =
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
    b(t)
  );
}
var tt = ['size', 'style'];
function B(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function v(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? B(Object(r), !0).forEach(function (o) {
          et(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : B(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function et(t, e, r) {
  return (
    (e = rt(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function rt(t) {
  var e = ot(t, 'string');
  return b(e) == 'symbol' ? e : String(e);
}
function ot(t, e) {
  if (b(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (b(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function nt(t, e) {
  return ft(t) || lt(t, e) || st(t, e) || it();
}
function it() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function st(t, e) {
  if (t) {
    if (typeof t == 'string') return U(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(t);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return U(t, e);
  }
}
function U(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
  return o;
}
function lt(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var o,
      i,
      s,
      l,
      a = [],
      p = !0,
      y = !1;
    try {
      if (((s = (r = r.call(t)).next), e !== 0))
        for (; !(p = (o = s.call(r)).done) && (a.push(o.value), a.length !== e); p = !0);
    } catch (x) {
      ((y = !0), (i = x));
    } finally {
      try {
        if (!p && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (y) throw i;
      }
    }
    return a;
  }
}
function ft(t) {
  if (Array.isArray(t)) return t;
}
function ct(t, e) {
  if (t == null) return {};
  var r = at(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((o = s[i]),
        !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]));
  }
  return r;
}
function at(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    i,
    s;
  for (s = 0; s < o.length; s++) ((i = o[s]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var S = u.memo(function (t) {
  var e = t.size,
    r = e === void 0 ? '1em' : e,
    o = t.style,
    i = ct(t, tt),
    s = X(f, 14),
    l = nt(s, 14),
    a = l[0],
    p = l[1],
    y = l[2],
    x = l[3],
    C = l[4],
    _ = l[5],
    z = l[6],
    E = l[7],
    A = l[8],
    $ = l[9],
    M = l[10],
    D = l[11],
    F = l[12],
    I = l[13];
  return n.jsxs(
    'svg',
    v(
      v(
        {
          height: r,
          style: v({ flex: 'none', lineHeight: 1 }, o),
          viewBox: '0 0 320 320',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        i,
      ),
      {},
      {
        children: [
          n.jsx('title', { children: f }),
          n.jsx('path', {
            d: 'M294 172.519c0 75.655-59.442 128.5-134 128.5-74.558 0-134-53.845-134-129.5 0-22.5 5-32.141 31.5-35.671 47.5-6.329 72.542-3.829 102.5-3.829 29.959 0 72.556-1.27 102.5 3.829 24.5 4.171 30 8.671 31.5 36.671z',
            fill: a.fill,
          }),
          n.jsx('path', {
            d: 'M159.75 242.51c-28.25 0-35.75 3.5-35.75 3.5s3.5 27 35.75 27 35.75-27 35.75-27-7.5-3.5-35.75-3.5z',
            fill: '#972021',
          }),
          n.jsx('path', {
            d: 'M271.999 148.517c0 6.351-49.92 11.5-111.5 11.5s-111.5-5.149-111.5-11.5c0-6.352 49.92-11.5 111.5-11.5s111.5 5.148 111.5 11.5z',
            fill: p.fill,
          }),
          n.jsx('path', {
            d: 'M135.503 160.013c.633-14.972-.483-22.788-5.5-36.443 0 0 9.5-12.056 27-12.056s30 3.064 30 3.064c-3.028 16.793-3.182 26.921-2.5 45.435h-49z',
            fill: y.fill,
          }),
          n.jsx('path', {
            d: 'M119.191 234.294c14.742-7.076 24.811-21.51 24.811-39.273 0-25.406-20.595-48-46-48s-47 19.594-47 45c0 13.983 6.542 26.812 16.662 35.521 5.893-2.245 12.652-3.521 19.838-3.521 12.705 0 24.077 3.989 31.689 10.273zM200.813 234.294c-14.742-7.076-24.811-21.51-24.811-39.273 0-25.406 20.595-48 46-48s47 19.594 47 45c0 13.983-6.543 26.812-16.662 35.521-5.893-2.245-12.652-3.521-19.838-3.521-12.705 0-24.077 3.989-31.689 10.273z',
            fill: '#fff',
          }),
          n.jsx('path', {
            d: 'M101 221.012c15.464 0 28-12.536 28-28s-12.536-28-28-28-28 12.536-28 28 12.536 28 28 28z',
            fill: x.fill,
          }),
          n.jsx('path', {
            d: 'M219 221.012c-15.464 0-28-12.536-28-28s12.536-28 28-28 28 12.536 28 28-12.536 28-28 28z',
            fill: C.fill,
          }),
          n.jsx('g', {
            filter: _.fill,
            children: n.jsx('path', {
              d: 'M172.997 19.016c-14.027 0-19.5-11.5-41-11-23.394 0-34 13-45.5 23-1.958 1.702-11.5 7-16 9-19.683 8.748-34.5 21.5-34.5 40.5 0 20.711 17.461 37.5 39 37.5 3.536 0 6.963-.453 10.22-1.301 8.7 10.539 22.179 16.658 37.28 17.301 23.5 1 31-15.25 44.5-8.5 9.259 4.629 13.83 8.5 28.5 8.5 17.108 0 25.057-5.233 30-11 9-10.5 22.879-4 31.5-4 18.778 0 34-14.551 34-32.5 0-17.95-15.222-32.5-34-32.5-5.15 0-14.856 1.27-17-7-3.5-13.5-20.148-29-44-29-9.318 0-17.691 1-23 1z',
              fill: z.fill,
            }),
          }),
          n.jsx('path', { d: 'M82.998 20.517a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z', fill: E.fill }),
          n.jsx('path', {
            d: 'M71.002 108.021c0 8.836-7.163 16-16 16s-16-7.164-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z',
            fill: A.fill,
          }),
          n.jsx('path', {
            d: 'M282.002 49.516c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z',
            fill: $.fill,
          }),
          n.jsx('path', {
            d: 'M132.232 244.111c5.483-.823 14.191-1.601 27.515-1.601 12.212 0 20.546.654 26.073 1.396-1.542 5.861-12.963 8.104-26.823 8.104-13.698 0-25.013-2.191-26.765-7.899z',
            fill: '#fff',
          }),
          n.jsx('path', {
            d: 'M160.006 290.016c20.099 0 23.305-20.488 23.927-25.61.478-4.146-1.675-6.244-4.02-7.659-2.345-1.414-9.379-2.731-19.907-2.731-10.527 0-17.514 1.317-19.906 2.731-2.393 1.415-4.546 3.513-4.02 7.659.622 5.122 3.828 25.61 23.926 25.61z',
            fill: M.fill,
          }),
          n.jsx('g', {
            filter: D.fill,
            children: n.jsx('path', {
              d: 'M171.694 129.744c-5.721-3.89-13.954-4.248-19.786-.526-7.724 4.929-16.971 7.798-26.91 7.798-27.062 0-49-21.267-49-47.5 0-26.234 21.938-47.5 49-47.5 13.628 0 25.956 5.392 34.838 14.097 4.948 4.85 13.088 6.24 19.498 3.609a42.502 42.502 0 0116.164-3.166c22.92 0 41.5 18.012 41.5 40.23 0 22.218-18.58 40.23-41.5 40.23-8.856 0-17.065-2.69-23.804-7.272z',
              fill: F.fill,
            }),
          }),
          n.jsx('path', {
            d: 'M219.002 106.51c0 7.456-6.044 13.5-13.5 13.5s-13.5-6.044-13.5-13.5 6.044-13.5 13.5-13.5 13.5 6.044 13.5 13.5z',
            fill: I.fill,
          }),
          n.jsxs('defs', {
            children: [
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'rotate(-57.041 328.447 55.73) scale(238.957 377.848)',
                gradientUnits: 'userSpaceOnUse',
                id: a.id,
                r: '1',
                children: [
                  n.jsx('stop', { stopColor: '#FCBD72' }),
                  n.jsx('stop', { offset: '.255', stopColor: '#FAC371' }),
                  n.jsx('stop', { offset: '.465', stopColor: '#FFA14C' }),
                  n.jsx('stop', { offset: '.64', stopColor: '#EB7A34' }),
                  n.jsx('stop', { offset: '.845', stopColor: '#F0866D' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'rotate(90 26.49 47.007) scale(9.5)',
                gradientUnits: 'userSpaceOnUse',
                id: E.id,
                r: '1',
                children: [
                  n.jsx('stop', { offset: '.62', stopColor: '#58239F' }),
                  n.jsx('stop', { offset: '.822', stopColor: '#8E3FE9' }),
                  n.jsx('stop', { offset: '1', stopColor: '#AF6FEC' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'matrix(0 16 -16 0 55.002 108.021)',
                gradientUnits: 'userSpaceOnUse',
                id: A.id,
                r: '1',
                children: [
                  n.jsx('stop', { offset: '.62', stopColor: '#C32F45' }),
                  n.jsx('stop', { offset: '.822', stopColor: '#F44341' }),
                  n.jsx('stop', { offset: '1', stopColor: '#FC9D9B' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'matrix(0 15.5 -15.5 0 266.502 49.516)',
                gradientUnits: 'userSpaceOnUse',
                id: $.id,
                r: '1',
                children: [
                  n.jsx('stop', { offset: '.385', stopColor: '#4DA33C' }),
                  n.jsx('stop', { offset: '.822', stopColor: '#63ED47' }),
                  n.jsx('stop', { offset: '1', stopColor: '#70D775' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'matrix(0 -44 58.6667 0 160 290)',
                gradientUnits: 'userSpaceOnUse',
                id: M.id,
                r: '1',
                children: [
                  n.jsx('stop', { stopColor: '#FD9B8B' }),
                  n.jsx('stop', { offset: '.5', stopColor: '#F24F3A' }),
                  n.jsx('stop', { offset: '1', stopColor: '#D93318' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'matrix(15.5 -61.50002 82.33886 20.75208 156 110)',
                gradientUnits: 'userSpaceOnUse',
                id: F.id,
                r: '1',
                children: [
                  n.jsx('stop', { offset: '.26', stopColor: '#FFC1A3' }),
                  n.jsx('stop', { offset: '.764', stopColor: '#FD82AB' }),
                  n.jsx('stop', { offset: '.952', stopColor: '#DF4FAA' }),
                ],
              }),
              n.jsxs('radialGradient', {
                cx: '0',
                cy: '0',
                gradientTransform: 'rotate(90 49.496 156.006) scale(13.5)',
                gradientUnits: 'userSpaceOnUse',
                id: I.id,
                r: '1',
                children: [
                  n.jsx('stop', { offset: '.572', stopColor: '#4C86D3' }),
                  n.jsx('stop', { offset: '.822', stopColor: '#72ADE2' }),
                  n.jsx('stop', { offset: '1', stopColor: '#90BBE3' }),
                ],
              }),
              n.jsxs('linearGradient', {
                gradientUnits: 'userSpaceOnUse',
                id: p.id,
                x1: '48.999',
                x2: '271.999',
                y1: '148.517',
                y2: '148.517',
                children: [
                  n.jsx('stop', { stopColor: '#EB791E' }),
                  n.jsx('stop', { offset: '1', stopColor: '#DB694E' }),
                ],
              }),
              n.jsxs('linearGradient', {
                gradientUnits: 'userSpaceOnUse',
                id: y.id,
                x1: '135.5',
                x2: '187',
                y1: '147.5',
                y2: '147.5',
                children: [
                  n.jsx('stop', { stopColor: '#FCC659' }),
                  n.jsx('stop', { offset: '.183', stopColor: '#FFE366' }),
                  n.jsx('stop', { offset: '.404', stopColor: '#FECA50' }),
                  n.jsx('stop', { offset: '.702', stopColor: '#FFE76C' }),
                  n.jsx('stop', { offset: '1', stopColor: '#FCC553' }),
                ],
              }),
              n.jsxs('linearGradient', {
                gradientUnits: 'userSpaceOnUse',
                id: x.id,
                x1: '73',
                x2: '247',
                y1: '193.012',
                y2: '193.012',
                children: [
                  n.jsx('stop', { stopColor: '#2A0B39' }),
                  n.jsx('stop', { offset: '.322', stopColor: '#42180E' }),
                  n.jsx('stop', { offset: '.678', stopColor: '#483A00' }),
                  n.jsx('stop', { offset: '1', stopColor: '#310D1D' }),
                ],
              }),
              n.jsxs('linearGradient', {
                gradientUnits: 'userSpaceOnUse',
                id: C.id,
                x1: '73',
                x2: '247',
                y1: '193.012',
                y2: '193.012',
                children: [
                  n.jsx('stop', { stopColor: '#2A0B39' }),
                  n.jsx('stop', { offset: '.322', stopColor: '#42180E' }),
                  n.jsx('stop', { offset: '.678', stopColor: '#483A00' }),
                  n.jsx('stop', { offset: '1', stopColor: '#310D1D' }),
                ],
              }),
              n.jsxs('linearGradient', {
                gradientUnits: 'userSpaceOnUse',
                id: z.id,
                x1: '44.5',
                x2: '291',
                y1: '84',
                y2: '82',
                children: [
                  n.jsx('stop', { stopColor: '#342FBD' }),
                  n.jsx('stop', { offset: '.188', stopColor: '#733CC0' }),
                  n.jsx('stop', { offset: '.375', stopColor: '#8748C2' }),
                  n.jsx('stop', { offset: '.654', stopColor: '#7C80DE' }),
                  n.jsx('stop', { offset: '1', stopColor: '#4A306D' }),
                ],
              }),
              n.jsxs('filter', {
                colorInterpolationFilters: 'sRGB',
                filterUnits: 'userSpaceOnUse',
                height: '126.061',
                id: _.id,
                width: '255',
                x: '35.997',
                y: '8',
                children: [
                  n.jsx('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                  n.jsx('feBlend', {
                    in: 'SourceGraphic',
                    in2: 'BackgroundImageFix',
                    result: 'shape',
                  }),
                  n.jsx('feColorMatrix', {
                    in: 'SourceAlpha',
                    result: 'hardAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                  }),
                  n.jsx('feOffset', {}),
                  n.jsx('feGaussianBlur', { stdDeviation: '12' }),
                  n.jsx('feComposite', {
                    in2: 'hardAlpha',
                    k2: '-1',
                    k3: '1',
                    operator: 'arithmetic',
                  }),
                  n.jsx('feColorMatrix', {
                    values: '0 0 0 0 1 0 0 0 0 0.764536 0 0 0 0 0.896726 0 0 0 1 0',
                  }),
                  n.jsx('feBlend', { in2: 'shape', result: 'effect1_innerShadow_1562_736' }),
                ],
              }),
              n.jsxs('filter', {
                colorInterpolationFilters: 'sRGB',
                filterUnits: 'userSpaceOnUse',
                height: '95',
                id: D.id,
                width: '161',
                x: '75.998',
                y: '42.016',
                children: [
                  n.jsx('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                  n.jsx('feBlend', {
                    in: 'SourceGraphic',
                    in2: 'BackgroundImageFix',
                    result: 'shape',
                  }),
                  n.jsx('feColorMatrix', {
                    in: 'SourceAlpha',
                    result: 'hardAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                  }),
                  n.jsx('feOffset', {}),
                  n.jsx('feGaussianBlur', { stdDeviation: '12' }),
                  n.jsx('feComposite', {
                    in2: 'hardAlpha',
                    k2: '-1',
                    k3: '1',
                    operator: 'arithmetic',
                  }),
                  n.jsx('feColorMatrix', {
                    values: '0 0 0 0 1 0 0 0 0 0.824669 0 0 0 0 0.923101 0 0 0 1 0',
                  }),
                  n.jsx('feBlend', { in2: 'shape', result: 'effect1_innerShadow_1562_736' }),
                ],
              }),
            ],
          }),
        ],
      },
    ),
  );
});
function j(t) {
  '@babel/helpers - typeof';
  return (
    (j =
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
    j(t)
  );
}
function T(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function pt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? T(Object(r), !0).forEach(function (o) {
          ut(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : T(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function ut(t, e, r) {
  return (
    (e = yt(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function yt(t) {
  var e = bt(t, 'string');
  return j(e) == 'symbol' ? e : String(e);
}
function bt(t, e) {
  if (j(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (j(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function jt(t) {
  if (t == null) throw new TypeError('Cannot destructure ' + t);
}
var mt = u.memo(function (t) {
  var e = Object.assign({}, (jt(t), t));
  return n.jsx(
    H,
    pt({ 'Icon': S, 'aria-label': f, 'background': J, 'color': Q, 'iconMultiple': Z }, e),
  );
});
function m(t) {
  '@babel/helpers - typeof';
  return (
    (m =
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
    m(t)
  );
}
var dt = ['size', 'style'];
function G(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function O(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? G(Object(r), !0).forEach(function (o) {
          ht(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : G(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function ht(t, e, r) {
  return (
    (e = gt(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function gt(t) {
  var e = xt(t, 'string');
  return m(e) == 'symbol' ? e : String(e);
}
function xt(t, e) {
  if (m(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (m(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function vt(t, e) {
  if (t == null) return {};
  var r = Ot(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((o = s[i]),
        !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]));
  }
  return r;
}
function Ot(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    i,
    s;
  for (s = 0; s < o.length; s++) ((i = o[s]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var W = u.memo(function (t) {
  var e = t.size,
    r = e === void 0 ? '1em' : e,
    o = t.style,
    i = vt(t, dt);
  return n.jsxs(
    'svg',
    O(
      O(
        {
          height: r,
          style: O({ flex: 'none', lineHeight: 1 }, o),
          viewBox: '0 0 320 320',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        i,
      ),
      {},
      {
        children: [
          n.jsx('title', { children: f }),
          n.jsx('path', {
            d: 'M294 172.52c0 75.654-59.442 128.5-134 128.5-74.558 0-134-53.846-134-129.5 0-22.501 5-32.142 31.5-35.672 47.5-6.329 72.542-3.828 102.5-3.828 29.959-.001 72.556-1.271 102.5 3.828 24.5 4.171 30 8.671 31.5 36.672z',
            fill: '#BFBFBF',
          }),
          n.jsx('path', {
            d: 'M159.75 242.51c-28.25 0-35.75 3.5-35.75 3.5s3.5 27 35.75 27 35.75-27 35.75-27-7.5-3.5-35.75-3.5z',
            fill: '#4F4F4F',
          }),
          n.jsx('ellipse', {
            cx: '160.499',
            cy: '148.517',
            fill: '#838383',
            rx: '111.5',
            ry: '11.5',
          }),
          n.jsx('path', {
            d: 'M135.503 160.013c.633-14.972-.483-22.788-5.5-36.443 0 0 9.5-12.056 27-12.056s30 3.064 30 3.064c-3.028 16.793-3.182 26.921-2.5 45.435h-49z',
            fill: '#E1E1E1',
          }),
          n.jsx('path', {
            d: 'M119.191 234.294c14.742-7.076 24.811-21.51 24.811-39.273 0-25.406-20.595-48-46-48s-47 19.594-47 45c0 13.983 6.542 26.812 16.662 35.521 5.893-2.245 12.652-3.521 19.838-3.521 12.705 0 24.077 3.989 31.689 10.273zM200.813 234.294c-14.742-7.076-24.811-21.51-24.811-39.273 0-25.406 20.595-48 46-48s47 19.594 47 45c0 13.983-6.543 26.812-16.662 35.521-5.893-2.245-12.652-3.521-19.838-3.521-12.705 0-24.077 3.989-31.689 10.273z',
            fill: '#fff',
          }),
          n.jsx('path', {
            d: 'M219 221.012c-15.464 0-28-12.536-28-28s12.536-28 28-28 28 12.536 28 28-12.536 28-28 28zM101 221.012c15.464 0 28-12.536 28-28s-12.536-28-28-28-28 12.536-28 28 12.536 28 28 28z',
            fill: '#1A1A1A',
          }),
          n.jsx('path', {
            d: 'M172.997 19.016c-14.027 0-19.5-11.5-41-11-23.394 0-34 13-45.5 23-1.958 1.702-11.5 7-16 9-19.683 8.748-34.5 21.5-34.5 40.5 0 20.711 17.461 37.5 39 37.5 3.537 0 6.963-.453 10.22-1.301 8.7 10.539 22.179 16.658 37.28 17.301 23.5 1 31-15.25 44.5-8.5 9.259 4.629 13.83 8.5 28.5 8.5 17.108 0 25.057-5.233 30-11 9-10.5 22.879-4 31.5-4 18.778 0 34-14.551 34-32.5 0-17.95-15.222-32.5-34-32.5-5.15 0-14.856 1.27-17-7-3.5-13.5-20.148-29-44-29-9.318 0-17.691 1-23 1z',
            fill: '#838383',
          }),
          n.jsx('circle', { cx: '73.498', cy: '20.517', fill: '#838383', r: '9.5' }),
          n.jsx('circle', { cx: '266.502', cy: '49.516', fill: '#C8C8C8', r: '15.5' }),
          n.jsx('path', {
            d: 'M132.232 244.111c5.483-.823 14.191-1.601 27.515-1.601 12.212 0 20.546.654 26.073 1.396-1.542 5.861-12.963 8.104-26.823 8.104-13.698 0-25.013-2.191-26.765-7.899z',
            fill: '#fff',
          }),
          n.jsx('path', {
            d: 'M160.006 290.016c20.099 0 23.305-20.488 23.927-25.61.478-4.146-1.675-6.244-4.02-7.659-2.345-1.414-9.379-2.731-19.907-2.731-10.527 0-17.514 1.317-19.906 2.731-2.393 1.415-4.546 3.513-4.02 7.659.622 5.122 3.828 25.61 23.926 25.61z',
            fill: '#838383',
          }),
          n.jsx('path', {
            d: 'M171.694 129.744c-5.721-3.89-13.954-4.248-19.786-.526-7.724 4.929-16.971 7.798-26.91 7.798-27.062 0-49-21.267-49-47.5 0-26.234 21.938-47.5 49-47.5 13.628 0 25.956 5.392 34.838 14.097 4.948 4.85 13.088 6.24 19.498 3.609a42.502 42.502 0 0116.164-3.166c22.92 0 41.5 18.012 41.5 40.23 0 22.218-18.58 40.23-41.5 40.23-8.856 0-17.065-2.69-23.804-7.272z',
            fill: '#C8C8C8',
          }),
          n.jsx('path', {
            d: 'M55.002 124.021c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16 7.163-16 16c0 8.836 7.163 16 16 16zM205.502 120.021c7.456 0 13.5-6.045 13.5-13.5 0-7.456-6.044-13.5-13.5-13.5s-13.5 6.044-13.5 13.5c0 7.455 6.044 13.5 13.5 13.5z',
            fill: '#4F4F4F',
          }),
        ],
      },
    ),
  );
});
function d(t) {
  '@babel/helpers - typeof';
  return (
    (d =
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
    d(t)
  );
}
var Pt = ['size', 'style'];
function L(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? L(Object(r), !0).forEach(function (o) {
          wt(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : L(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function wt(t, e, r) {
  return (
    (e = St(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function St(t) {
  var e = Ct(t, 'string');
  return d(e) == 'symbol' ? e : String(e);
}
function Ct(t, e) {
  if (d(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (d(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function _t(t, e) {
  if (t == null) return {};
  var r = zt(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((o = s[i]),
        !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]));
  }
  return r;
}
function zt(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    i,
    s;
  for (s = 0; s < o.length; s++) ((i = o[s]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var N = u.memo(function (t) {
  var e = t.size,
    r = e === void 0 ? '1em' : e,
    o = t.style,
    i = _t(t, Pt);
  return n.jsxs(
    'svg',
    P(
      P(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: P({ flex: 'none', lineHeight: 1 }, o),
          viewBox: '0 0 126 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        i,
      ),
      {},
      {
        children: [
          n.jsx('title', { children: f }),
          n.jsx('path', {
            d: 'M2 21.736V1.23h5.264v15.907h8.88v4.6H2zM24.635 22c-1.578 0-2.978-.352-4.2-1.055a7.746 7.746 0 01-2.899-2.9c-.69-1.25-1.036-2.675-1.036-4.277 0-1.601.345-3.017 1.036-4.247a7.531 7.531 0 012.815-2.824l.083-.047c1.223-.703 2.623-1.055 4.2-1.055 1.578 0 2.978.352 4.201 1.055a7.3 7.3 0 012.898 2.87c.691 1.231 1.037 2.647 1.037 4.248 0 1.602-.346 3.027-1.037 4.277a7.5 7.5 0 01-2.898 2.9c-1.223.703-2.623 1.055-4.2 1.055zm0-4.424c.584 0 1.098-.146 1.541-.439.462-.293.825-.723 1.09-1.289.267-.586.4-1.279.4-2.08 0-.8-.134-1.474-.4-2.021-.255-.545-.6-.963-1.037-1.255l-.052-.034c-.444-.293-.957-.44-1.542-.44-.568 0-1.081.147-1.542.44-.444.293-.807.723-1.09 1.289-.266.547-.4 1.22-.4 2.021 0 .801.134 1.494.4 2.08.283.566.646.996 1.09 1.29.46.292.974.438 1.542.438zM39.629 0v7.25a4.57 4.57 0 01.877-.776c.869-.586 1.915-.879 3.138-.879 1.311 0 2.498.332 3.562.996 1.056.649 1.892 1.567 2.508 2.756l.044.086c.638 1.21.957 2.656.957 4.335 0 1.7-.319 3.164-.957 4.395-.62 1.21-1.47 2.157-2.552 2.841-1.064.664-2.251.996-3.563.996-1.293 0-2.374-.293-3.243-.879a4.445 4.445 0 01-1.01-.97v1.585h-4.812V0h5.051zm2.951 10.019c-.567 0-1.081.146-1.542.44-.443.292-.806.722-1.09 1.288-.266.547-.399 1.22-.399 2.021 0 .801.133 1.494.4 2.08.283.566.646.996 1.09 1.29.46.292.974.438 1.541.438s1.072-.146 1.516-.439c.46-.293.824-.723 1.09-1.289.283-.586.425-1.279.425-2.08 0-.8-.142-1.474-.425-2.021-.256-.545-.602-.963-1.038-1.255l-.053-.034a2.685 2.685 0 00-1.515-.44zm14.13 5.185l.012.045c.068.266.16.515.276.746a3.228 3.228 0 001.276 1.318c.55.293 1.205.44 1.967.44.709 0 1.312-.108 1.808-.323a5.53 5.53 0 001.417-.963l.098-.091 2.659 3.046a6.877 6.877 0 01-2.552 1.934c-1.01.43-2.207.644-3.59.644-1.7 0-3.19-.352-4.466-1.055a7.849 7.849 0 01-2.95-2.929c-.692-1.25-1.038-2.666-1.038-4.248 0-1.582.337-2.988 1.01-4.218.676-1.222 1.597-2.173 2.764-2.853l.081-.047c1.205-.703 2.561-1.055 4.068-1.055 1.383 0 2.648.307 3.795.92l.086.047c1.17.625 2.1 1.553 2.792 2.783.691 1.23 1.037 2.724 1.037 4.482 0 .174-.008.37-.022.59l-.005.084-.023.315-.03.388H56.71zm2.866-5.654c-.602 0-1.134.146-1.595.44-.443.292-.788.712-1.037 1.259-.056.12-.106.244-.15.374-.063.19-.113.392-.15.604l-.008.047h5.897l-.002-.014a3.482 3.482 0 00-.29-.973l-.033-.067a2.872 2.872 0 00-1.008-1.195l-.055-.036c-.443-.293-.966-.44-1.569-.44zM74.56 1.23v7.705h7.178V1.23h5.264v20.506h-5.264V13.74H74.56v7.997h-5.264V1.23h5.264zM96.005 22c-1.17 0-2.224-.254-3.163-.762-.922-.507-1.649-1.298-2.18-2.372-.514-1.094-.771-2.471-.771-4.131V5.859h5.05v7.968c0 1.23.205 2.109.612 2.636.426.528 1.02.791 1.782.791.496 0 .948-.127 1.355-.38.408-.254.736-.655.984-1.201.248-.567.372-1.29.372-2.168V5.859h5.051v15.877h-4.812l.001-1.66a5.04 5.04 0 01-1.224 1.075c-.939.566-1.958.849-3.057.849zM112.87 0v7.25c.265-.302.558-.56.878-.776.868-.586 1.914-.879 3.137-.879 1.311 0 2.499.332 3.562.996 1.056.649 1.892 1.567 2.509 2.756l.043.086c.638 1.21.957 2.656.957 4.335 0 1.7-.319 3.164-.957 4.395-.62 1.21-1.471 2.157-2.552 2.841-1.063.664-2.251.996-3.562.996-1.294 0-2.375-.293-3.244-.879a4.45 4.45 0 01-1.01-.969v1.584h-4.812V0h5.051zm2.951 10.019c-.567 0-1.081.146-1.542.44-.443.292-.806.722-1.09 1.288-.265.547-.398 1.22-.398 2.021 0 .801.133 1.494.398 2.08.284.566.647.996 1.09 1.29.461.292.975.438 1.542.438.568 0 1.073-.146 1.516-.439.461-.293.824-.723 1.09-1.289.283-.586.425-1.279.425-2.08 0-.8-.142-1.474-.425-2.021-.256-.545-.602-.963-1.038-1.255l-.052-.034a2.685 2.685 0 00-1.516-.44z',
          }),
        ],
      },
    ),
  );
});
function h(t) {
  '@babel/helpers - typeof';
  return (
    (h =
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
    h(t)
  );
}
var Et = ['type'];
function K(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function At(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? K(Object(r), !0).forEach(function (o) {
          $t(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : K(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function $t(t, e, r) {
  return (
    (e = Mt(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Mt(t) {
  var e = Dt(t, 'string');
  return h(e) == 'symbol' ? e : String(e);
}
function Dt(t, e) {
  if (h(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (h(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Ft(t, e) {
  if (t == null) return {};
  var r = It(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((o = s[i]),
        !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]));
  }
  return r;
}
function It(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    i,
    s;
  for (s = 0; s < o.length; s++) ((i = o[s]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var Bt = u.memo(function (t) {
  var e = t.type,
    r = e === void 0 ? 'mono' : e,
    o = Ft(t, Et),
    i = r === 'color' ? S : W;
  return n.jsx(
    k,
    At({ 'Icon': i, 'Text': N, 'aria-label': f, 'spaceMultiple': q, 'textMultiple': Y }, o),
  );
});
function g(t) {
  '@babel/helpers - typeof';
  return (
    (g =
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
    g(t)
  );
}
var Ut = ['size', 'style'];
function R(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    (e &&
      (o = o.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      r.push.apply(r, o));
  }
  return r;
}
function w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? R(Object(r), !0).forEach(function (o) {
          Tt(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : R(Object(r)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return t;
}
function Tt(t, e, r) {
  return (
    (e = Gt(e)),
    e in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Gt(t) {
  var e = Lt(t, 'string');
  return g(e) == 'symbol' ? e : String(e);
}
function Lt(t, e) {
  if (g(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (g(o) != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function Kt(t, e) {
  if (t == null) return {};
  var r = Rt(t, e),
    o,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      ((o = s[i]),
        !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (r[o] = t[o]));
  }
  return r;
}
function Rt(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    i,
    s;
  for (s = 0; s < o.length; s++) ((i = o[s]), !(e.indexOf(i) >= 0) && (r[i] = t[i]));
  return r;
}
var Vt = u.memo(function (t) {
    var e = t.size,
      r = e === void 0 ? '1em' : e,
      o = t.style,
      i = Kt(t, Ut);
    return n.jsxs(
      'svg',
      w(
        w(
          {
            height: r,
            style: w({ flex: 'none', lineHeight: 1 }, o),
            viewBox: '0 0 24 24',
            width: r,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          i,
        ),
        {},
        {
          children: [
            n.jsx('title', { children: f }),
            n.jsx('image', {
              height: '24',
              href: 'https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp',
              width: '24',
            }),
          ],
        },
      ),
    );
  }),
  c = W;
c.Morden = Vt;
c.Color = S;
c.Text = N;
c.Combine = Bt;
c.Avatar = mt;
c.colorPrimary = V;
c.title = f;
export { c as I };
