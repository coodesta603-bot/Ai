const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-DC-xcYkC.js',
      'assets/index-CWWL_7At.js',
      'assets/index-C8UyLGsD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BU7DHEsw.js',
      'i18n/i18n-en-US-DgOT8d-N.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-qS2Xx-oI.js',
      'assets/index-yzzpVuwK.css',
      'assets/useForm-By-Y7CLc.js',
      'assets/scrollTo-DrqiKkdE.js',
      'assets/index-BaHZowoE.js',
      'assets/index-DLWAK85S.js',
      'assets/index-DiBbr-it.js',
      'assets/index-bx4f06U_.js',
      'assets/index-BSuyBMRZ.js',
      'assets/index-BcFcfPUO.js',
      'assets/Table-BlWKciej.js',
      'assets/index-BOZ0hr8D.js',
      'assets/useBubbleLock-D8efMGR_.js',
      'assets/index-BHffy9NV.js',
      'assets/LeftOutlined-Pp_b6_vA.js',
      'assets/Dropdown-CemyFDx1.js',
      'assets/index-DeBHMb7c.js',
      'assets/EllipsisOutlined-CBl0XyWx.js',
      'assets/index-CqaQ90GQ.js',
      'assets/Input-BIU8BRU1.js',
      'assets/index-RoMbEimC.js',
      'assets/index-B0kjmwCf.js',
      'assets/Pagination-Cg0T9GpR.js',
      'assets/index-Bc7JilPY.js',
      'assets/index-XXtOGkGY.js',
      'assets/index-NTuRqV6G.js',
      'assets/index-uNJ5HPPz.js',
      'assets/customParseFormat-CAbVLu8E.js',
      'assets/index-Cglhv3pZ.js',
      'assets/index-CXy3GcSN.js',
      'assets/PlusOutlined-Budj8ek_.js',
      'assets/ColorPicker-B5azT_mb.js',
      'assets/index-BfwjtmVb.js',
      'assets/index-BgCNGb7v.js',
      'assets/index-GXVeGAZV.js',
      'assets/index-BvIL68ic.js',
      'assets/index-CxR_dqGs.js',
      'assets/Drawer-Blxnywp3.js',
      'assets/index-5nC5GwBn.js',
      'assets/row-cnvQQvQf.js',
      'assets/index-YiLuNMTk.js',
      'assets/index-OkOG2AHU.js',
      'assets/EyeOutlined-BrqBWuO3.js',
      'assets/TextArea-BTdxpOlh.js',
      'assets/index-DYqiTmoN.js',
      'assets/index-DE9LlaC5.js',
      'assets/index-ChoXdYII.js',
      'assets/progress-CqsUaYIW.js',
      'assets/index-CEZs5FSq.js',
      'assets/ReloadOutlined-Cfln6sz3.js',
      'assets/index-CLKC7l7t.js',
      'assets/index-bF6NNdBM.js',
      'assets/index-DZlSK_Q-.js',
      'assets/index-CaOmqfDS.js',
      'assets/index-19I26HPU.js',
      'assets/index-C2-gySBL.js',
      'assets/DeleteOutlined-DFutYCzo.js',
    ]),
) => i.map((i) => d[i]);
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { I as U, a as H } from './index-BsHwsvJB.js';
import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { _ as D, dw as Z } from './index-C8UyLGsD.js';
import { a as L } from './store-8fdqmFXe.js';
var h = 'Notion',
  X = 0.7,
  Y = 0.3,
  V = '#fff',
  q = V,
  J = '#000',
  Q = 0.7;
function v(e) {
  '@babel/helpers - typeof';
  return (
    (v =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    v(e)
  );
}
var ee = ['size', 'style'];
function T(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T(Object(r), !0).forEach(function (n) {
          te(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : T(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function te(e, t, r) {
  return (
    (t = re(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function re(e) {
  var t = ne(e, 'string');
  return v(t) == 'symbol' ? t : String(t);
}
function ne(e, t) {
  if (v(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (v(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function oe(e, t) {
  if (e == null) return {};
  var r = ie(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (o = 0; o < c.length; o++)
      ((n = c[o]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function ie(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    c;
  for (c = 0; c < n.length; c++) ((o = n[c]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var $ = l.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = oe(e, ee);
  return p.jsxs(
    'svg',
    E(
      E(
        {
          fill: 'currentColor',
          fillRule: 'evenodd',
          height: r,
          style: E({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 24 24',
          width: r,
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          p.jsx('title', { children: h }),
          p.jsx('path', {
            clipRule: 'evenodd',
            d: 'M15.257.055l-13.31.98C.874 1.128.5 1.83.5 2.667v14.559c0 .654.233 1.213.794 1.96l3.129 4.06c.513.653.98.794 1.962.745l15.457-.932c1.307-.093 1.681-.7 1.681-1.727V4.954c0-.53-.21-.684-.829-1.135l-.106-.078L18.34.755c-1.027-.746-1.45-.84-3.083-.7zm-8.521 4.63c-1.263.086-1.549.105-2.266-.477L2.647 2.76c-.186-.187-.092-.42.375-.466l12.796-.933c1.074-.094 1.634.28 2.054.606l2.195 1.587c.093.047.326.326.047.326l-13.216.794-.162.01zM5.263 21.193V7.287c0-.606.187-.886.748-.933l15.176-.886c.515-.047.748.28.748.886v13.81c0 .609-.093 1.122-.934 1.168l-14.523.84c-.842.047-1.215-.232-1.215-.98zm14.338-13.16c.093.422 0 .842-.422.89l-.699.139v10.264c-.608.327-1.168.513-1.635.513-.747 0-.934-.232-1.495-.932l-4.576-7.185v6.952l1.448.327s0 .84-1.169.84l-3.221.186c-.094-.187 0-.654.327-.747l.84-.232V9.853L7.832 9.76c-.093-.42.14-1.026.794-1.073l3.456-.232 4.763 7.279v-6.44l-1.214-.14c-.094-.513.28-.887.747-.933l3.223-.187z',
          }),
        ],
      },
    ),
  );
});
function g(e) {
  '@babel/helpers - typeof';
  return (
    (g =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    g(e)
  );
}
function N(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? N(Object(r), !0).forEach(function (n) {
          ae(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : N(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ae(e, t, r) {
  return (
    (t = le(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function le(e) {
  var t = se(e, 'string');
  return g(t) == 'symbol' ? t : String(t);
}
function se(e, t) {
  if (g(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (g(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ue(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var fe = l.memo(function (e) {
  var t = Object.assign({}, (ue(e), e));
  return p.jsx(
    U,
    ce({ 'Icon': $, 'aria-label': h, 'background': q, 'color': J, 'iconMultiple': Q }, t),
  );
});
function O(e) {
  '@babel/helpers - typeof';
  return (
    (O =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    O(e)
  );
}
var pe = ['size', 'style'];
function M(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? M(Object(r), !0).forEach(function (n) {
          me(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : M(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function me(e, t, r) {
  return (
    (t = ye(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ye(e) {
  var t = be(e, 'string');
  return O(t) == 'symbol' ? t : String(t);
}
function be(e, t) {
  if (O(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (O(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ve(e, t) {
  if (e == null) return {};
  var r = ge(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (o = 0; o < c.length; o++)
      ((n = c[o]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function ge(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    c;
  for (c = 0; c < n.length; c++) ((o = n[c]), !(t.indexOf(o) >= 0) && (r[o] = e[o]));
  return r;
}
var F = l.memo(function (e) {
  var t = e.size,
    r = t === void 0 ? '1em' : t,
    n = e.style,
    o = ve(e, pe);
  return p.jsxs(
    'svg',
    x(
      x(
        {
          fill: 'currentColor',
          fillRule: 'nonzero',
          height: r,
          style: x({ flex: 'none', lineHeight: 1 }, n),
          viewBox: '0 0 87 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        o,
      ),
      {},
      {
        children: [
          p.jsx('title', { children: h }),
          p.jsx('path', {
            d: 'M18.995.99v20.708H15.69L5.893 7.531h-.171v14.167H2V.99h3.337l9.776 14.164h.191V.992h3.692l-.001-.001zM28.851 22c-1.516 0-2.831-.333-3.944-1.001a6.731 6.731 0 01-2.578-2.8c-.605-1.2-.91-2.602-.91-4.206 0-1.605.303-3.01.91-4.216.607-1.206 1.467-2.143 2.578-2.81 1.112-.667 2.428-1.002 3.944-1.002 1.51 0 2.82.335 3.932 1.002 1.111.667 1.972 1.604 2.578 2.81.613 1.206.92 2.611.92 4.216 0 1.604-.307 3.006-.92 4.205A6.731 6.731 0 0132.783 21c-1.111.667-2.422 1-3.932 1zm.01-2.912c.836 0 1.53-.225 2.082-.678.554-.457.968-1.07 1.243-1.84.278-.775.416-1.637.416-2.587 0-.95-.138-1.813-.416-2.589-.275-.775-.69-1.392-1.243-1.85-.553-.464-1.246-.697-2.082-.697-.843 0-1.544.233-2.103.698-.56.458-.977 1.074-1.254 1.85-.268.775-.404 1.637-.404 2.588 0 .95.134 1.814.404 2.588.277.769.695 1.382 1.254 1.84.56.452 1.26.677 2.103.677zM46.251 6.17v2.81h-8.897V6.17h8.896zm-6.695-3.723h3.63v14.589c0 .492.075.869.223 1.133.155.262.358.44.607.535.249.095.529.141.84.141.209.002.418-.015.625-.05a7.01 7.01 0 00.446-.09l.605 2.84a8.3 8.3 0 01-.827.223c-.358.08-.796.128-1.316.14-.91.028-1.731-.11-2.466-.414a3.883 3.883 0 01-1.739-1.425c-.425-.647-.633-1.46-.627-2.436V2.447h-.001zm8.92 19.251V6.169h3.642v15.529h-3.641zm1.831-17.744c-.58 0-1.075-.192-1.487-.575a1.859 1.859 0 01-.617-1.396c0-.546.206-1.01.617-1.395A2.101 2.101 0 0150.306 0c.58 0 1.076.196 1.487.588.418.383.626.848.626 1.394 0 .539-.208 1.004-.626 1.395a2.1 2.1 0 01-1.486.577v-.001zm11.485 18.047c-1.516 0-2.83-.333-3.943-1.002a6.73 6.73 0 01-2.578-2.8c-.606-1.2-.91-2.6-.91-4.205s.304-3.01.91-4.216c.607-1.206 1.466-2.144 2.578-2.81 1.113-.667 2.427-1.002 3.943-1.002 1.51 0 2.821.334 3.933 1.001 1.112.667 1.972 1.605 2.579 2.81.613 1.207.92 2.612.92 4.217 0 1.604-.307 3.006-.92 4.205a6.728 6.728 0 01-2.58 2.802c-1.11.667-2.422 1-3.932 1zm.01-2.913c.836 0 1.53-.225 2.083-.677.553-.457.967-1.07 1.244-1.84.276-.775.414-1.637.414-2.588 0-.95-.138-1.812-.414-2.588-.277-.775-.69-1.392-1.244-1.85-.553-.465-1.247-.697-2.082-.697-.843 0-1.544.232-2.103.697-.56.459-.977 1.075-1.255 1.85-.268.776-.403 1.638-.403 2.588 0 .95.134 1.814.403 2.589.278.769.695 1.382 1.255 1.84.56.451 1.26.676 2.103.676zm13.295-6.5v9.109h-3.639V6.17h3.478v2.628h.182a4.446 4.446 0 011.708-2.062c.788-.512 1.763-.77 2.923-.77 1.064 0 1.994.23 2.79.69a4.637 4.637 0 011.86 1.991c.445.869.667 1.924.667 3.164V21.7h-3.628v-9.332c0-1.039-.27-1.85-.81-2.436-.54-.593-1.285-.89-2.236-.89-.638 0-1.208.141-1.708.425-.498.276-.889.68-1.172 1.213-.276.524-.415 1.163-.415 1.91z',
          }),
        ],
      },
    ),
  );
});
function d(e) {
  '@babel/helpers - typeof';
  return (
    (d =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    d(e)
  );
}
function R(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? R(Object(r), !0).forEach(function (n) {
          de(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : R(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function de(e, t, r) {
  return (
    (t = he(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function he(e) {
  var t = we(e, 'string');
  return d(t) == 'symbol' ? t : String(t);
}
function we(e, t) {
  if (d(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (d(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Pe(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e);
}
var je = l.memo(function (e) {
    var t = Object.assign({}, (Pe(e), e));
    return p.jsx(
      H,
      Oe({ 'Icon': $, 'Text': F, 'aria-label': h, 'spaceMultiple': Y, 'textMultiple': X }, t),
    );
  }),
  w = $;
w.Text = F;
w.Combine = je;
w.Avatar = fe;
w.colorPrimary = V;
w.title = h;
const b = Z('resource:notion-import'),
  ze = ({ createDocument: e, currentFolderId: t, libraryId: r, refetchResources: n, t: o }) => {
    const c = l.useRef(null),
      [K, P] = l.useState(!1),
      W = l.useCallback(() => {
        P(!0);
      }, []),
      B = l.useCallback(() => {
        P(!1);
      }, []),
      k = l.useCallback(() => {
        (c.current?.click(), P(!1));
      }, []),
      G = l.useCallback(
        async (I) => {
          const z = I.target.files?.[0];
          if (z) {
            try {
              const { message: u } = await D(
                  async () => {
                    const { message: i } = await import('./index-DC-xcYkC.js');
                    return { message: i };
                  },
                  __vite__mapDeps([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
                    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
                    62, 63, 64, 65,
                  ]),
                ),
                m = 'notion-import';
              u.loading({ content: o('header.actions.notion.importing'), duration: 0, key: m });
              let s = await L(z);
              b(
                'Extracted files (level 1):',
                s.map((i) => ({ name: i.name, type: i.type })),
              );
              const j = s.filter((i) => i.name.toLowerCase().endsWith('.zip'));
              if (j.length > 0) {
                b(
                  'Found nested ZIPs, extracting...',
                  j.map((a) => a.name),
                );
                const i = [];
                for (const a of j)
                  try {
                    const f = await L(a);
                    (b(
                      `Extracted from ${a.name}:`,
                      f.map((y) => ({ name: y.name, type: y.type })),
                    ),
                      i.push(...f));
                  } catch (f) {
                    console.error(`Failed to extract nested ZIP ${a.name}:`, f);
                  }
                s = i;
              }
              b(
                'All extracted files:',
                s.map((i) => ({ name: i.name, type: i.type })),
              );
              const C = s.filter((i) => {
                const a = i.name.toLowerCase();
                return a.endsWith('.md') || a.endsWith('.markdown');
              });
              if (C.length === 0) {
                (u.destroy(m),
                  u.warning(
                    o('header.actions.notion.noMarkdownFiles') +
                      ` (${o('header.actions.notion.foundFiles', { count: s.length })})`,
                  ),
                  b(
                    'No markdown files found. All files:',
                    s.map((i) => i.name),
                  ));
                return;
              }
              let S = 0,
                _ = 0;
              for (const i of C)
                try {
                  let a = await i.text(),
                    f = '';
                  const y = a.split(`
`),
                    A = y[0]?.trim() || '';
                  (A.startsWith('#')
                    ? ((f = A.replace(/^#+\s*/, '').trim()),
                      (a = y
                        .slice(1)
                        .join(
                          `
`,
                        )
                        .trim()))
                    : (f = (i.name.split('/').pop() || 'Untitled').replace(/\.md$/, '')),
                    await e({
                      content: a,
                      knowledgeBaseId: r ?? void 0,
                      parentId: t ?? void 0,
                      title: f,
                    }),
                    S++);
                } catch (a) {
                  (console.error(`Failed to import ${i.name}:`, a), _++);
                }
              (u.destroy(m),
                _ === 0
                  ? u.success(o('header.actions.notion.success', { count: S }))
                  : u.warning(o('header.actions.notion.partial', { failed: _, success: S })),
                await n?.());
            } catch (u) {
              console.error('Failed to import Notion export:', u);
              const { message: m } = await D(
                async () => {
                  const { message: s } = await import('./index-DC-xcYkC.js');
                  return { message: s };
                },
                __vite__mapDeps([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                  43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
                  63, 64, 65,
                ]),
              );
              m.error(o('header.actions.notion.error'));
            }
            I.target.value = '';
          }
        },
        [e, t, r, n, o],
      );
    return {
      handleCloseNotionGuide: B,
      handleNotionImport: G,
      handleOpenNotionGuide: W,
      handleStartNotionImport: k,
      notionGuideOpen: K,
      notionInputRef: c,
    };
  };
export { w as I, ze as u };
