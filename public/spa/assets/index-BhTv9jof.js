import { r as f } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  l as Pe,
  q as Be,
  s as ir,
  t as or,
  T as Te,
  v as Ne,
  H as zr,
  w as Kr,
  x as De,
  y as Ur,
  z as Z,
  A as He,
  B as Wr,
  I as lr,
  h as J,
  i as Oe,
  K as ur,
  j as rt,
  D as xe,
  F as nt,
  m as Re,
  G as Br,
  J as Fr,
  p as Xr,
  P as cr,
  N as me,
  O as te,
  Q as qr,
  Z as sr,
  S as Vr,
  V as G,
  W as be,
  X as ce,
  Y as Gr,
  _ as Qr,
  a0 as Yr,
  a1 as Jr,
  a2 as re,
  a3 as fr,
  a4 as Q,
  a5 as ge,
  a6 as Fe,
  a7 as dr,
  a8 as vr,
  a9 as Zr,
  aa as en,
  ab as at,
  ac as Xe,
  ad as Ce,
  ae as br,
  af as tn,
  ag as rn,
  ah as yr,
  ai as lt,
  aj as nn,
  ak as an,
  al as on,
  am as ln,
} from './index-CMcqKxKW.js';
import {
  J as _e,
  U as ae,
  M as it,
  aq as qe,
  V as se,
  S as un,
  aE as cn,
  O as X,
  Q as q,
  a7 as sn,
  ap as fn,
  ar as Ee,
  aF as dn,
  aG as vn,
  N as pe,
  aH as bn,
  aA as je,
  aI as yn,
  aJ as pr,
  aK as pn,
  aL as ee,
  aM as mr,
  x as mn,
  aN as gn,
  a8 as hn,
  a9 as Sn,
  _ as wn,
  aO as gr,
  Y as _n,
  aP as ut,
  aQ as ct,
} from './index-Br6hqyew.js';
import {
  f as ke,
  j as ne,
  F as st,
  Z as ft,
  I as dt,
  k as Ve,
  B as kn,
  bj as Cn,
  A as Ge,
  J as Tn,
} from './index-C8UyLGsD.js';
import { B as On } from './Block-DDntSWi2.js';
import { I as vt } from './Input-C_EgL0SG.js';
import { j as E } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  dR as An,
  b2 as xn,
  cq as En,
  aw as jn,
  dc as Ln,
  dS as $n,
  dT as In,
  V as Pn,
  aT as Rn,
  dU as Mn,
  dV as Nn,
  dW as Dn,
  b4 as Hn,
  a_ as bt,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { A as zn } from './ActionIconGroup-DGEsztGU.js';
import { D as Kn } from './Dropdown-DdDP6pcJ.js';
import { d as Un } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
function yt(e, t) {
  return Xn(e) || Fn(e, t) || Bn(e, t) || Wn();
}
function Wn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bn(e, t) {
  if (e) {
    if (typeof e == 'string') return pt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pt(e, t);
  }
}
function pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fn(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function Xn(e) {
  if (Array.isArray(e)) return e;
}
var hr = function () {
    var t = Pe(),
      r = yt(t, 1),
      n = r[0],
      a = f.useState(n.isEditable()),
      u = yt(a, 2),
      l = u[0],
      o = u[1];
    return (
      f.useEffect(
        function () {
          var i = function (b) {
              o(b);
            },
            c = function () {
              o(n.isEditable());
            };
          return (
            n.on('editableChange', i),
            n.on('initialized', c),
            function () {
              (n.off('editableChange', i), n.off('initialized', c));
            }
          );
        },
        [n],
      ),
      { editable: l }
    );
  },
  Sr = _e('INSERT_LINK_COMMAND'),
  Qe = _e('UPDATE_LINK_TEXT_COMMAND');
function qn(e) {
  return ae(
    e.registerCommand(
      Sr,
      function (t) {
        var r = t.url,
          n = t.title,
          a = n === void 0 ? r : n;
        return (
          e.update(function () {
            var u = Be(r, { title: a }),
              l = qe(a);
            (u.append(l), un([u]));
          }),
          !1
        );
      },
      se,
    ),
    e.registerCommand(
      Qe,
      function (t) {
        var r = t.key,
          n = t.text;
        return (
          e.update(function () {
            var a = it(r);
            if (a) {
              var u = Be(a.getURL(), { title: n }),
                l = qe(n);
              (u.append(l), a?.replace(u), u.select(1));
            }
          }),
          !1
        );
      },
      se,
    ),
  );
}
function fe(e) {
  '@babel/helpers - typeof';
  return (
    (fe =
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
    fe(e)
  );
}
function Vn(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Gn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, _r(n.key), n));
  }
}
function Qn(e, t, r) {
  return (t && Gn(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Yn(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Ye(e, t));
}
function Ye(e, t) {
  return (
    (Ye = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return ((n.__proto__ = a), n);
        }),
    Ye(e, t)
  );
}
function Jn(e) {
  var t = ea();
  return function () {
    var n = Le(e),
      a;
    if (t) {
      var u = Le(this).constructor;
      a = Reflect.construct(n, arguments, u);
    } else a = n.apply(this, arguments);
    return Zn(this, a);
  };
}
function Zn(e, t) {
  if (t && (fe(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return wr(e);
}
function wr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ea() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function Le(e) {
  return (
    (Le = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Le(e)
  );
}
function ta(e, t, r) {
  return (
    (t = _r(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function _r(e) {
  var t = ra(e, 'string');
  return fe(t) == 'symbol' ? t : String(t);
}
function ra(e, t) {
  if (fe(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fe(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var kr = cn('LinkService'),
  na = (function (e) {
    Yn(r, e);
    var t = Jn(r);
    function r() {
      var n;
      Vn(this, r);
      for (var a = arguments.length, u = new Array(a), l = 0; l < a; l++) u[l] = arguments[l];
      return ((n = t.call.apply(t, [this].concat(u))), ta(wr(n), '_enableLinkToolbar', !0), n);
    }
    return (
      Qn(r, [
        {
          key: 'enableLinkToolbar',
          get: function () {
            return this._enableLinkToolbar;
          },
        },
        {
          key: 'setLinkToolbar',
          value: function (a) {
            ((this._enableLinkToolbar = a), this.emit('linkToolbarChange', a));
          },
        },
      ]),
      r
    );
  })(ir);
function he(e) {
  '@babel/helpers - typeof';
  return (
    (he =
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
    he(e)
  );
}
function mt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mt(Object(r), !0).forEach(function (n) {
          aa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aa(e, t, r) {
  return (
    (t = ia(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ia(e) {
  var t = oa(e, 'string');
  return he(t) == 'symbol' ? t : String(t);
}
function oa(e, t) {
  if (he(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (he(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function la(e, t, r) {
  var n = r || {},
    a = n.validateUrl,
    u = n.attributes,
    l = n.enableHotkey,
    o = l === void 0 ? !0 : l,
    i = { isLink: !1 },
    c = [
      e.registerUpdateListener(function () {
        var s = e.getEditorState().read(function () {
          return X();
        });
        s &&
          (q(s)
            ? e.getEditorState().read(function () {
                var b = or(s),
                  y = b.getParent(),
                  d = Z(y) || Z(b);
                i.isLink = d;
              })
            : (i.isLink = !1));
      }),
      e.registerCommand(
        Te,
        function (s) {
          if (s === null) return (Ne(s), !0);
          if (typeof s == 'string') return a === void 0 || a(s) ? (Ne(s, u), !0) : !1;
          var b = s.url,
            y = s.target,
            d = s.rel,
            p = s.title;
          return (Ne(b, gt(gt({}, u), {}, { rel: d, target: y, title: p })), !0);
        },
        sn,
      ),
    ];
  return (
    c.push(
      t.registerHotkey(
        zr.Link,
        function () {
          var s = i.isLink;
          if (s) {
            e.dispatchCommand(Te, null);
            return;
          }
          var b = Kr('https://'),
            y = null;
          (e.getEditorState().read(function () {
            var d = X();
            if (q(d))
              if (d.isCollapsed()) {
                var j = d.anchor.getNode().getTextContent(),
                  g = Ur(j);
                g &&
                  a !== null &&
                  a !== void 0 &&
                  a(De(g.url)) &&
                  ((b = De(g.url)), (y = { index: g.index, length: g.length }));
              } else {
                var p = d.getTextContent().trim(),
                  _ = De(p);
                a != null && a(_) && (b = _);
              }
          }),
            e.update(function () {
              if (y) {
                var d = X();
                if (q(d)) {
                  var p = d.anchor.getNode();
                  (d.anchor.set(p.getKey(), y.index, 'text'),
                    d.focus.set(p.getKey(), y.index + y.length, 'text'));
                }
              }
              e.dispatchCommand(Te, b);
            }));
        },
        { enabled: o, preventDefault: !0, stopPropagation: !0 },
      ),
    ),
    ae.apply(void 0, c)
  );
}
var ze;
function de(e) {
  '@babel/helpers - typeof';
  return (
    (de =
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
    de(e)
  );
}
function ua(e, t) {
  return da(e) || fa(e, t) || sa(e, t) || ca();
}
function ca() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sa(e, t) {
  if (e) {
    if (typeof e == 'string') return ht(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ht(e, t);
  }
}
function ht(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fa(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function da(e) {
  if (Array.isArray(e)) return e;
}
function va(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function ba(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Cr(n.key), n));
  }
}
function ya(e, t, r) {
  return (t && ba(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function pa(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Je(e, t));
}
function Je(e, t) {
  return (
    (Je = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return ((n.__proto__ = a), n);
        }),
    Je(e, t)
  );
}
function ma(e) {
  var t = ha();
  return function () {
    var n = $e(e),
      a;
    if (t) {
      var u = $e(this).constructor;
      a = Reflect.construct(n, arguments, u);
    } else a = n.apply(this, arguments);
    return ga(this, a);
  };
}
function ga(e, t) {
  if (t && (de(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Ze(e);
}
function Ze(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ha() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function $e(e) {
  return (
    ($e = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $e(e)
  );
}
function Ke(e, t, r) {
  return (
    (t = Cr(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Cr(e) {
  var t = Sa(e, 'string');
  return de(t) == 'symbol' ? t : String(t);
}
function Sa(e, t) {
  if (de(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (de(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var wa =
    ((ze = (function (e) {
      pa(r, e);
      var t = ma(r);
      function r(n, a) {
        var u;
        return (
          va(this, r),
          (u = t.call(this)),
          Ke(Ze(u), 'linkRegex', /^https?:\/\/\S+$/),
          Ke(Ze(u), 'service', new na()),
          (u.kernel = n),
          (u.config = a),
          n.registerNodes([He, Wr]),
          n.registerService(kr, u.service),
          a != null && a.theme && n.registerThemes(a.theme),
          a != null && a.linkRegex && (u.linkRegex = a.linkRegex),
          u
        );
      }
      return (
        ya(r, [
          {
            key: 'onInit',
            value: function (a) {
              var u,
                l,
                o,
                i = this;
              (this.register(qn(a)),
                this.register(
                  la(a, this.kernel, {
                    attributes: (u = this.config) === null || u === void 0 ? void 0 : u.attributes,
                    enableHotkey:
                      (l = this.config) === null || l === void 0 ? void 0 : l.enableHotkey,
                    validateUrl:
                      (o = this.config) === null || o === void 0 ? void 0 : o.validateUrl,
                  }),
                ),
                this.register(
                  a.registerCommand(
                    fn,
                    function (c) {
                      var s = c.clipboardData;
                      if (s && s.types && s.types.length === 1 && s.types[0] === 'text/plain') {
                        var b = s.getData('text/plain').trim();
                        if (i.linkRegex.test(b))
                          return (
                            c.stopImmediatePropagation(),
                            c.preventDefault(),
                            a.dispatchCommand(Sr, { url: b }),
                            !0
                          );
                      }
                      return !1;
                    },
                    Ee,
                  ),
                ),
                this.registerMarkdown(),
                this.registerLiteXml());
            },
          },
          {
            key: 'registerLiteXml',
            value: function () {
              var a = this.kernel.requireService(lr);
              a &&
                (a.registerXMLWriter(He.getType(), function (u, l) {
                  if (Z(u)) {
                    var o = { href: u.getURL() };
                    return l.createXmlNode('a', o);
                  }
                  return !1;
                }),
                a.registerXMLReader('a', function (u, l) {
                  var o = J.createElementNode('link', {
                    children: l,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'link',
                    url: u.getAttribute('href') || '',
                    version: 1,
                  });
                  return [o];
                }));
            },
          },
          {
            key: 'registerMarkdown',
            value: function () {
              var a, u, l;
              ((a = this.kernel.requireService(Oe)) === null ||
                a === void 0 ||
                a.registerMarkdownShortCut({
                  regExp: /\[([^[]+)]\(([^\s()]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?\)\s?$/,
                  replace: function (i, c) {
                    var s = ua(c, 4),
                      b = s[1],
                      y = s[2],
                      d = s[3],
                      p = Be(y, { title: d }),
                      _ = qe(b);
                    return (_.setFormat(i.getFormat()), p.append(_), i.replace(p), _);
                  },
                  trigger: ')',
                  type: 'text-match',
                }),
                (u = this.kernel.requireService(Oe)) === null ||
                  u === void 0 ||
                  u.registerMarkdownWriter(He.getType(), function (o, i) {
                    Z(i) && o.wrap('[', ']('.concat(i.getURL(), ')'));
                  }),
                (l = this.kernel.requireService(Oe)) === null ||
                  l === void 0 ||
                  l.registerMarkdownReader('link', function (o, i) {
                    var c = J.createElementNode('link', {
                      children: i,
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      title: o.title || void 0,
                      type: 'link',
                      url: o.url || '',
                      version: 1,
                    });
                    return [c];
                  }));
            },
          },
        ]),
        r
      );
    })(ur)),
    Ke(ze, 'pluginName', 'LinkPlugin'),
    ze),
  St,
  wt,
  _t,
  kt,
  Ct;
function ye(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Se = ke(function (e) {
  var t = e.css,
    r = e.cssVar,
    n = t(
      St ||
        (St = ye([
          `
    position: absolute;
    z-index: 999;
    inset-block-start: -9999px;
    inset-inline-start: -9999px;
  `,
        ])),
    );
  return {
    link: t(
      wt ||
        (wt = ye([
          `
      cursor: pointer;

      margin-block: 1em;
      margin-inline: 0;
      padding: 2px;
      border: none;
    `,
        ])),
    ),
    linkEdit: ne(
      n,
      t(
        _t ||
          (_t = ye([
            `
        min-width: 320px;
        max-width: 100%;
        background: `,
            `;
      `,
          ])),
        r.colorBgElevated,
      ),
    ),
    linkEditFooter: t(
      kt ||
        (kt = ye([
          `
      border-block-start: 1px solid `,
          `;
      background: `,
          `;
    `,
        ])),
      r.colorBorderSecondary,
      r.colorFillQuaternary,
    ),
    linkToolbar: ne(
      n,
      t(
        Ct ||
          (Ct = ye([
            `
        background: `,
            `;
      `,
          ])),
        r.colorBgElevated,
      ),
    ),
  };
});
function Ue(e, t) {
  return Ta(e) || Ca(e, t) || ka(e, t) || _a();
}
function _a() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ka(e, t) {
  if (e) {
    if (typeof e == 'string') return Tt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tt(e, t);
  }
}
function Tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ca(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function Ta(e) {
  if (Array.isArray(e)) return e;
}
var Ae = _e(),
  Tr = function (t) {
    var r = t.editor,
      n = f.useRef(null),
      a = f.useRef(null),
      u = f.useRef(null),
      l = f.useRef(null),
      o = f.useState(''),
      i = Ue(o, 2),
      c = i[0],
      s = i[1],
      b = f.useState(''),
      y = Ue(b, 2),
      d = y[0],
      p = y[1],
      _ = f.useState(null),
      j = Ue(_, 2),
      g = j[0],
      w = j[1],
      x = hr(),
      D = x.editable,
      T = rt(),
      R = f.useCallback(
        function () {
          r && (r.focus(), xe(n.current), (a.current = null), s(''), p(''), w(null));
        },
        [r],
      ),
      M = f.useCallback(
        function () {
          if (!(!a.current || !u.current || !l.current || !r)) {
            var h = a.current,
              O = u.current,
              W = O.input,
              N = l.current,
              K = N.input,
              U = r.getEditorState().read(function () {
                return h.getURL();
              });
            U !== W.value &&
              r.update(function () {
                h.setURL(W.value);
              });
            var k = r.getEditorState().read(function () {
              return h.getTextContent();
            });
            (k !== K.value && r.dispatchCommand(Qe, { key: h.getKey(), text: K.value }),
              r.focus(),
              R());
          }
        },
        [r, a, u, l, R],
      ),
      H = f.useCallback(
        function (h) {
          if (!(!a.current || !u.current || !l.current || !r)) {
            var O = a.current,
              W = u.current,
              N = W.input,
              K = l.current,
              U = K.input;
            switch (h.key) {
              case 'Enter': {
                if ((h.preventDefault(), h.currentTarget === U)) {
                  var k = r.getEditorState().read(function () {
                    return O.getTextContent();
                  });
                  (k !== U.value && r.dispatchCommand(Qe, { key: O.getKey(), text: U.value }),
                    N.focus());
                } else h.currentTarget === N && M();
                return;
              }
              case 'Tab': {
                (h.preventDefault(), h.currentTarget === U ? N.focus() : r.focus());
                return;
              }
              case 'Escape': {
                (h.preventDefault(), R());
                return;
              }
            }
          }
        },
        [a, u, M, R],
      );
    return (
      f.useEffect(
        function () {
          g ? nt({ floating: n.current, reference: g }) : xe(n.current);
        },
        [g],
      ),
      f.useEffect(
        function () {
          var h = function (W) {
            if (n.current) {
              var N = W.target;
              N && (n.current.contains(N) || (g && R()));
            }
          };
          return (
            document.addEventListener('mousedown', h),
            document.addEventListener('touchstart', h),
            function () {
              (document.removeEventListener('mousedown', h),
                document.removeEventListener('touchstart', h));
            }
          );
        },
        [g],
      ),
      Re(
        function (h) {
          return ae(
            h.registerCommand(
              Ae,
              function (O) {
                return !O.linkNode || !O.linkNodeDOM
                  ? (R(), !1)
                  : ((a.current = O.linkNode),
                    s(O.linkNode.getURL()),
                    p(O.linkNode.getTextContent()),
                    w(O.linkNodeDOM),
                    !0);
              },
              se,
            ),
            h.registerCommand(
              vn,
              function () {
                return (R(), !0);
              },
              se,
            ),
            h.registerCommand(
              dn,
              function (O) {
                return a.current && l.current
                  ? (O.stopImmediatePropagation(), O.preventDefault(), l.current.focus(), !0)
                  : !1;
              },
              Ee,
            ),
          );
        },
        [r],
      ),
      !a.current || !D
        ? null
        : E.jsxs(On, {
            className: Se.linkEdit,
            ref: n,
            shadow: !0,
            variant: 'outlined',
            children: [
              E.jsxs(st, {
                gap: 8,
                padding: 12,
                children: [
                  E.jsx(ft, { weight: 500, children: T('link.editTextTitle') }),
                  E.jsx(vt, {
                    onChange: function (O) {
                      p(O.target.value);
                    },
                    onKeyDown: H,
                    prefix: E.jsx(dt, { color: Ve.colorTextDescription, icon: An }),
                    ref: l,
                    value: d,
                  }),
                  E.jsx(ft, { weight: 500, children: T('link.editLinkTitle') }),
                  E.jsx(vt, {
                    onChange: function (O) {
                      s(O.target.value);
                    },
                    onKeyDown: H,
                    placeholder: 'https://enter-link-url',
                    prefix: E.jsx(dt, { color: Ve.colorTextDescription, icon: xn }),
                    ref: u,
                    value: c,
                  }),
                ],
              }),
              E.jsx(st, {
                className: Se.linkEditFooter,
                horizontal: !0,
                justify: 'flex-end',
                padding: 4,
                width: '100%',
                children: E.jsxs(kn, {
                  onClick: function (O) {
                    (O.preventDefault(), M());
                  },
                  size: 'small',
                  type: 'text',
                  variant: 'filled',
                  children: [
                    T('confirm'),
                    E.jsx(Cn, { compact: !0, keys: 'enter', variant: 'borderless' }),
                  ],
                }),
              }),
            ],
          })
    );
  };
Tr.displayName = 'LinkEdit';
function Oa(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Or(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Aa(e, t) {
  return ja(e) || Ea(e, t) || Or(e, t) || xa();
}
function xa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Or(e, t) {
  if (e) {
    if (typeof e == 'string') return Ot(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ot(e, t);
  }
}
function Ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ea(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function ja(e) {
  if (Array.isArray(e)) return e;
}
var Ar = f.memo(function (e) {
  var t = e.editor,
    r = e.enable,
    n = f.useRef(null),
    a = f.useRef(null),
    u = f.useState(null),
    l = Aa(u, 2),
    o = l[0],
    i = l[1],
    c = f.useRef({ isLink: !1 }),
    s = rt(),
    b = f.useRef(-1),
    y = hr(),
    d = y.editable,
    p = f.useCallback(
      function () {
        o && t.dispatchCommand(Ae, { linkNode: o, linkNodeDOM: t.getElementByKey(o.getKey()) });
      },
      [t, o],
    ),
    _ = f.useCallback(function () {
      (clearTimeout(b.current), xe(n.current));
    }, []),
    j = f.useCallback(
      function () {
        o &&
          t.update(function () {
            var w = it(o.getKey());
            if (Z(w)) {
              var x = X();
              (!x || !q(x)) && (pe(bn()), (x = X()));
              var D = w.getFirstDescendant(),
                T = w.getLastDescendant();
              if (x && q(x) && je(D) && je(T)) {
                (x.anchor.set(D.getKey(), 0, 'text'),
                  x.focus.set(T.getKey(), T.getTextContentSize(), 'text'),
                  t.dispatchCommand(Te, null));
                return;
              }
              var R = w.getChildren(),
                M = Oa(R),
                H;
              try {
                for (M.s(); !(H = M.n()).done; ) {
                  var h = H.value;
                  w.insertBefore(h);
                }
              } catch (O) {
                M.e(O);
              } finally {
                M.f();
              }
              w.remove();
            }
          });
      },
      [t, o],
    ),
    g = f.useCallback(
      function () {
        if (o) {
          var w = t.getEditorState().read(function () {
            return o.getURL();
          });
          window.open(w, '_blank');
        }
      },
      [t, o],
    );
  return (
    Re(
      function (w) {
        if (d)
          return ae(
            w.registerUpdateListener(function () {
              var x = w.getEditorState().read(function () {
                return X();
              });
              x &&
                (q(x)
                  ? w.getEditorState().read(function () {
                      var D = or(x),
                        T = D.getParent(),
                        R = Z(T) || Z(D);
                      if (R !== c.current.isLink)
                        if (((c.current.isLink = R), R)) {
                          var M = Z(T) ? T : D;
                          w.dispatchCommand(Ae, {
                            linkNode: M,
                            linkNodeDOM: w.getElementByKey(M.getKey()),
                          });
                        } else w.dispatchCommand(Ae, { linkNode: null, linkNodeDOM: null });
                    })
                  : (c.current.isLink = !1));
            }),
            w.registerCommand(
              Fr,
              function (x) {
                return (
                  !r ||
                    !x.event.target ||
                    n.current === null ||
                    (clearTimeout(b.current),
                    i(x.linkNode),
                    nt({
                      callback: function () {
                        a.current = x.event.target;
                      },
                      floating: n.current,
                      offset: 4,
                      placement: 'top-start',
                      reference: x.event.target,
                    })),
                  !1
                );
              },
              Ee,
            ),
            w.registerCommand(
              Br,
              function () {
                return ((b.current = setTimeout(_, 300)), !0);
              },
              Ee,
            ),
          );
      },
      [r, d],
    ),
    E.jsx(zn, {
      className: Se.linkToolbar,
      items: [
        { icon: En, key: 'edit', label: s('link.edit'), onClick: p },
        { icon: jn, key: 'openLink', label: s('link.open'), onClick: g },
        {
          icon: Ln,
          key: 'unlink',
          label: s('link.unlink'),
          onClick: function () {
            (j(), _());
          },
        },
      ],
      onMouseEnter: function () {
        clearTimeout(b.current);
      },
      onMouseLeave: function () {
        _();
      },
      ref: n,
      shadow: !0,
      size: { blockSize: 32, size: 16 },
      variant: 'outlined',
    })
  );
});
Ar.displayName = 'LinkToolbar';
function At(e, t) {
  return Pa(e) || Ia(e, t) || $a(e, t) || La();
}
function La() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $a(e, t) {
  if (e) {
    if (typeof e == 'string') return xt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xt(e, t);
  }
}
function xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ia(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function Pa(e) {
  if (Array.isArray(e)) return e;
}
var Ra = function (t) {
  var r = t.theme,
    n = t.enableHotkey,
    a = n === void 0 ? !0 : n,
    u = t.validateUrl,
    l = t.attributes,
    o = f.useState(!1),
    i = At(o, 2),
    c = i[0],
    s = i[1],
    b = Pe(),
    y = At(b, 1),
    d = y[0];
  return (
    f.useLayoutEffect(
      function () {
        (d.registerPlugin(Xr),
          d.registerPlugin(wa, { attributes: l, enableHotkey: a, theme: r || Se, validateUrl: u }));
      },
      [l, a, Se, r, u],
    ),
    Re(function () {
      var p = d.requireService(kr);
      s(p.enableLinkToolbar);
      var _ = function () {
        s(p.enableLinkToolbar);
      };
      return (
        p.on('linkToolbarChange', _),
        function () {
          p.off('linkToolbarChange', _);
        }
      );
    }, []),
    E.jsxs(cr, {
      children: [
        E.jsx(Ar, { editor: d.getLexicalEditor(), enable: c }),
        E.jsx(Tr, { editor: d.getLexicalEditor() }),
      ],
    })
  );
};
Ra.displayName = 'ReactLinkPlugin';
var Ma = _e(),
  Na = _e();
function Da(e) {
  return ae(
    e.registerCommand(
      Ma,
      function (t) {
        var r = t.rows,
          n = t.columns,
          a = t.includeHeaders,
          u = X() || yn();
        if (!u || !q(u) || sr(u.anchor.getNode())) return !1;
        var l = u.anchor.getNode(),
          o = Vr(Number(r), Number(n), a);
        pr(l) && l.isEmpty() ? l.replace(o) : pn(o);
        var i = o.getFirstDescendant();
        return (je(i) && i.select(), !0);
      },
      se,
    ),
    e.registerCommand(
      Na,
      function (t) {
        var r = t.table,
          n = t.columnIndex,
          a = t.rowIndex;
        return (
          e.update(function () {
            var u = X(),
              l = it(r);
            if (!(!l || !me(l))) {
              var o = te(u) ? u : qr();
              if (a !== void 0) {
                var i = l.getChildren()[a];
                if (!i) return;
                var c = i.getFirstChild(),
                  s = i.getLastChild();
                if (!c || !s) return;
                (o.set(r, c.getKey(), s.getKey()), pe(o));
              } else if (n !== void 0) {
                var b = l.getFirstChild(),
                  y = l.getLastChild();
                if (!b || !y) return;
                var d = b.getChildren()[n],
                  p = y.getChildren()[n];
                if (!d || !p) return;
                (o.set(r, d.getKey(), p.getKey()), pe(o));
              } else {
                var _ = l.getFirstChild(),
                  j = l.getLastChild();
                if (!_ || !j) return;
                var g = _.getFirstChild(),
                  w = j.getLastChild();
                if (!g || !w) return;
                (o.set(r, g.getKey(), w.getKey()), pe(o));
              }
            }
          }),
          !1
        );
      },
      se,
    ),
  );
}
var Ha = G.prototype.createDOM;
function za() {
  Object.defineProperty(G.prototype, 'createDOM', {
    configurable: !0,
    enumerable: !1,
    value: function (t, r) {
      var n = Ha.call(this, t, r),
        a = document.createElement('div');
      return (n.append(a), n);
    },
    writable: !0,
  });
}
var We;
function ve(e) {
  '@babel/helpers - typeof';
  return (
    (ve =
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
    ve(e)
  );
}
function Ka(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Ua(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Ua(e, t) {
  if (e) {
    if (typeof e == 'string') return Et(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Et(e, t);
  }
}
function Et(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wa(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ba(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, xr(n.key), n));
  }
}
function Fa(e, t, r) {
  return (t && Ba(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Xa(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && et(e, t));
}
function et(e, t) {
  return (
    (et = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return ((n.__proto__ = a), n);
        }),
    et(e, t)
  );
}
function qa(e) {
  var t = Qa();
  return function () {
    var n = Ie(e),
      a;
    if (t) {
      var u = Ie(this).constructor;
      a = Reflect.construct(n, arguments, u);
    } else a = n.apply(this, arguments);
    return Va(this, a);
  };
}
function Va(e, t) {
  if (t && (ve(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Ga(e);
}
function Ga(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qa() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function Ie(e) {
  return (
    (Ie = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ie(e)
  );
}
function Ya(e, t, r) {
  return (
    (t = xr(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xr(e) {
  var t = Ja(e, 'string');
  return ve(t) == 'symbol' ? t : String(t);
}
function Ja(e, t) {
  if (ve(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ve(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Za = function (t, r, n) {
    return t + r.replace(/\n+$/, '').replaceAll(/\n+/g, '<br />') + n;
  },
  ei =
    ((We = (function (e) {
      Xa(r, e);
      var t = qa(r);
      function r(n, a) {
        var u;
        return (
          Wa(this, r),
          (u = t.call(this)),
          (u.kernel = n),
          za(),
          n.registerNodes([G, be, ce]),
          n.registerThemes({
            table: 'editor_table',
            tableCell: 'editor_table_cell',
            tableCellHeader: 'editor_table_cell_header',
            tableCellSelected: 'editor_table_cell_selected',
            tableScrollableWrapper: ne('editor_table_scrollable_wrapper', a?.theme),
          }),
          u
        );
      }
      return (
        Fa(r, [
          {
            key: 'onInit',
            value: function (a) {
              (Gr(a),
                this.register(Qr(a)),
                this.register(Yr(a)),
                this.register(Jr(a)),
                this.register(Da(a)),
                this.registerMarkdown(),
                this.registerLiteXml());
            },
          },
          {
            key: 'registerLiteXml',
            value: function () {
              var a = this.kernel.requireService(lr);
              if (a) {
                (a.registerXMLWriter(G.getType(), function (l, o) {
                  if (me(l)) {
                    var i = {},
                      c = l.getColWidths();
                    return (
                      c && c.length > 0 && (i.colWidths = c.join(',')),
                      o.createXmlNode('table', i)
                    );
                  }
                  return !1;
                }),
                  a.registerXMLWriter(be.getType(), function (l, o) {
                    return l instanceof be ? o.createXmlNode('tr', {}) : !1;
                  }),
                  a.registerXMLWriter(ce.getType(), function (l, o) {
                    if (l instanceof ce) {
                      var i = {};
                      return (
                        l.getColSpan() > 1 && (i.colSpan = l.getColSpan().toString()),
                        l.getRowSpan() > 1 && (i.rowSpan = l.getRowSpan().toString()),
                        l.getBackgroundColor() && (i.backgroundColor = l.getBackgroundColor()),
                        o.createXmlNode('td', i)
                      );
                    }
                    return !1;
                  }),
                  a.registerXMLReader('table', function (l, o) {
                    var i = l.getAttribute('colWidths'),
                      c = i
                        ? i.split(',').map(function (_) {
                            return parseInt(_, 10);
                          })
                        : [],
                      s = 1,
                      b = Ka(o),
                      y;
                    try {
                      for (b.s(); !(y = b.n()).done; ) {
                        var d,
                          p = y.value;
                        (((d = p.children) === null || d === void 0 ? void 0 : d.length) || -1) >
                          s && (s = p.children.length);
                      }
                    } catch (_) {
                      b.e(_);
                    } finally {
                      b.f();
                    }
                    return J.createElementNode(G.getType(), {
                      children: o,
                      colWidths: c.length > 0 ? c : new Array(s).fill(750 / s),
                      direction: null,
                      format: '',
                      indent: 0,
                      version: 1,
                    });
                  }),
                  a.registerXMLReader('tr', function (l, o) {
                    return J.createElementNode(be.getType(), {
                      children: o,
                      direction: 'ltr',
                      format: '',
                      height: 33,
                      indent: 0,
                      version: 1,
                    });
                  }));
                var u = function (o, i) {
                  return J.createElementNode(ce.getType(), {
                    backgroundColor: o.getAttribute('backgroundColor') || null,
                    children: i,
                    colSpan: o.getAttribute('colSpan')
                      ? parseInt(o.getAttribute('colSpan'), 10)
                      : 1,
                    direction: 'ltr',
                    format: '',
                    headerState: 0,
                    indent: 0,
                    rowSpan: o.getAttribute('rowSpan')
                      ? parseInt(o.getAttribute('rowSpan'), 10)
                      : 1,
                    version: 1,
                  });
                };
                (a.registerXMLReader('th', u), a.registerXMLReader('td', u));
              }
            },
          },
          {
            key: 'registerMarkdown',
            value: function () {
              var a = this.kernel.requireService(Oe);
              a &&
                (a.registerMarkdownWriter(G.getType(), function (u) {
                  u.wrap(
                    '',
                    `
`,
                  );
                }),
                a.registerMarkdownWriter(be.getType(), function (u, l) {
                  var o = l.getParent();
                  if (me(o))
                    if (l.getPreviousSibling())
                      u.wrap(
                        '',
                        `
`,
                      );
                    else {
                      var i;
                      u.wrap(
                        '',
                        `
`.concat(
                          (i = o.getColWidths()) === null || i === void 0
                            ? void 0
                            : i
                                .map(function () {
                                  return '|:--';
                                })
                                .join(''),
                          `|
`,
                        ),
                      );
                    }
                }),
                a.registerMarkdownWriter(ce.getType(), function (u, l) {
                  (u.addProcessor(Za), l.getNextSibling() ? u.wrap('|', '') : u.wrap('|', '|'));
                }),
                a.registerMarkdownReader('table', function (u, l) {
                  var o,
                    i =
                      ((o = u.children[0]) === null || o === void 0 ? void 0 : o.children.length) ||
                      1;
                  return J.createElementNode('table', {
                    children: l,
                    colWidths: new Array(i).fill(750 / i),
                    direction: null,
                    format: '',
                    indent: 0,
                    version: 1,
                  });
                }),
                a.registerMarkdownReader('tableRow', function (u, l) {
                  return J.createElementNode('tablerow', {
                    children: l,
                    direction: 'ltr',
                    format: '',
                    height: 33,
                    indent: 0,
                    version: 1,
                  });
                }),
                a.registerMarkdownReader('tableCell', function (u, l) {
                  return J.createElementNode('tablecell', {
                    backgroundColor: null,
                    children: l,
                    colSpan: 1,
                    direction: 'ltr',
                    format: '',
                    headerState: 0,
                    indent: 0,
                    rowSpan: 1,
                    version: 1,
                  });
                }));
            },
          },
        ]),
        r
      );
    })(ur)),
    Ya(We, 'pluginName', 'TablePlugin'),
    We);
function jt(e, t) {
  return ni(e) || ri(e, t) || Er(e, t) || ti();
}
function ti() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ri(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function ni(e) {
  if (Array.isArray(e)) return e;
}
function Lt(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Er(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Er(e, t) {
  if (e) {
    if (typeof e == 'string') return $t(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $t(e, t);
  }
}
function $t(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ai(e, t) {
  var r = e.domRows,
    n = Lt(r.entries()),
    a;
  try {
    for (n.s(); !(a = n.n()).done; ) {
      var u = jt(a.value, 2),
        l = u[0],
        o = u[1];
      if (o) {
        var i = Lt(o.entries()),
          c;
        try {
          for (i.s(); !(c = i.n()).done; ) {
            var s = jt(c.value, 2),
              b = s[0],
              y = s[1];
            if (y) {
              var d = ee(y.elem);
              d !== null && t(y, d, { x: b, y: l });
            }
          }
        } catch (p) {
          i.e(p);
        } finally {
          i.f();
        }
      }
    }
  } catch (p) {
    n.e(p);
  } finally {
    n.f();
  }
}
function ii(e, t) {
  var r = t.elem,
    n = e._config.theme,
    a = ee(r);
  (mr(re(a), 'Expected to find LexicalNode from Table Cell DOMNode'), mn(r, n.tableCellSelected));
}
function oi(e, t) {
  var r = t.elem,
    n = ee(r);
  mr(re(n), 'Expected to find LexicalNode from Table Cell DOMNode');
  var a = e._config.theme;
  gn(r, a.tableCellSelected);
}
function li(e, t, r) {
  var n = new Set(r ? r.getNodes() : []);
  ai(t, function (a, u) {
    var l = a.elem;
    n.has(u)
      ? ((a.highlighted = !0), ii(e, a))
      : ((a.highlighted = !1), oi(e, a), l.getAttribute('style') || l.removeAttribute('style'));
  });
}
function jr(e, t) {
  return fi(e) || si(e, t) || ci(e, t) || ui();
}
function ui() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ci(e, t) {
  if (e) {
    if (typeof e == 'string') return It(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return It(e, t);
  }
}
function It(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function si(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function fi(e) {
  if (Array.isArray(e)) return e;
}
function Pt(e) {
  var t = e.getShape();
  return { columns: t.toX - t.fromX + 1, rows: t.toY - t.fromY + 1 };
}
function di() {
  var e = X();
  if ((q(e) && !e.isCollapsed()) || (te(e) && !e.anchor.is(e.focus)) || (!q(e) && !te(e)))
    return !1;
  var t = fr(e.anchor),
    r = jr(t, 1),
    n = r[0];
  return n.__colSpan > 1 || n.__rowSpan > 1;
}
function vi(e) {
  var t = e.getLastDescendant();
  je(t) ? t.select() : pr(t) ? t.selectEnd() : t !== null && t.selectNext();
}
function Rt(e) {
  return e.getEditorState().read(function () {
    var t = X();
    if (q(t) || te(t)) {
      var r = fr(t.anchor),
        n = jr(r, 1),
        a = n[0];
      if (re(a)) return a.getBackgroundColor();
    }
    return null;
  });
}
function bi(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Lr(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function oe(e, t) {
  return mi(e) || pi(e, t) || Lr(e, t) || yi();
}
function yi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lr(e, t) {
  if (e) {
    if (typeof e == 'string') return Mt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mt(e, t);
  }
}
function Mt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function mi(e) {
  if (Array.isArray(e)) return e;
}
var $r = f.memo(function (e) {
  var t = e.editor,
    r = e.tableCellNode,
    n = e.cellMerge,
    a = e.children,
    u = f.useState(r),
    l = oe(u, 2),
    o = l[0],
    i = l[1],
    c = f.useState({ columns: 1, rows: 1 }),
    s = oe(c, 2),
    b = s[0],
    y = s[1],
    d = f.useState(!1),
    p = oe(d, 2),
    _ = p[0],
    j = p[1],
    g = f.useState(!1),
    w = oe(g, 2),
    x = w[0],
    D = w[1],
    T = f.useState(function () {
      return Rt(t) || '';
    }),
    R = oe(T, 2),
    M = R[1],
    H = rt();
  (f.useEffect(
    function () {
      return t.registerMutationListener(
        ce,
        function (v) {
          var m = v.get(o.getKey()) === 'updated';
          m &&
            (t.getEditorState().read(function () {
              i(o.getLatest());
            }),
            M(Rt(t) || ''));
        },
        { skipInitialization: !0 },
      );
    },
    [t, o],
  ),
    f.useEffect(
      function () {
        t.getEditorState().read(function () {
          var v = X();
          if (te(v)) {
            var m = Pt(v);
            (y(Pt(v)), j(m.columns > 1 || m.rows > 1));
          }
          D(di());
        });
      },
      [t],
    ));
  var h = f.useCallback(
      function () {
        t.update(function () {
          if (o.isAttached()) {
            var v = Q(o),
              m = ge(v, t.getElementByKey(v.getKey()));
            if (m === null)
              throw new Error('TableActionMenu: Expected to find tableElement in DOM');
            var C = Fe(m);
            (C !== null && C.$clearHighlight(), v.markDirty(), i(o.getLatest()));
          }
          pe(null);
        });
      },
      [t, o],
    ),
    O = function () {
      t.update(function () {
        var m = X();
        if (te(m)) {
          var C = m.getNodes(),
            L = C.filter(re),
            $ = tn(L);
          $ && vi($);
        }
      });
    },
    W = function () {
      t.update(function () {
        rn();
      });
    },
    N = f.useCallback(
      function (v) {
        t.update(function () {
          for (var m = 0; m < b.rows; m++) dr(v);
        });
      },
      [t, b.rows],
    ),
    K = f.useCallback(
      function (v) {
        t.update(function () {
          for (var m = 0; m < b.columns; m++) vr(v);
        });
      },
      [t, b.columns],
    ),
    U = f.useCallback(
      function () {
        t.update(function () {
          Zr();
        });
      },
      [t],
    ),
    k = f.useCallback(
      function () {
        t.update(function () {
          var v = Q(o);
          (v.remove(), h());
        });
      },
      [t, o, h],
    ),
    S = f.useCallback(
      function () {
        t.update(function () {
          en();
        });
      },
      [t],
    ),
    A = f.useCallback(
      function () {
        t.update(function () {
          for (
            var v = Q(o),
              m = at(o),
              C = Xe(v, null, null),
              L = oe(C, 1),
              $ = L[0],
              z = new Set(),
              Y = o.getHeaderStyles() ^ Ce.ROW,
              F = 0;
            F < $[m].length;
            F++
          ) {
            var B = $[m][F];
            B != null &&
              B.cell &&
              (z.has(B.cell) || (z.add(B.cell), B.cell.setHeaderStyles(Y, Ce.ROW)));
          }
          h();
        });
      },
      [t, o, h],
    ),
    I = f.useCallback(
      function () {
        t.update(function () {
          var v = Q(o),
            m = br(o),
            C = Xe(v, null, null),
            L = oe(C, 1),
            $ = L[0],
            z = new Set(),
            Y = o.getHeaderStyles() ^ Ce.COLUMN,
            F = bi($),
            B;
          try {
            for (F.s(); !(B = F.n()).done; ) {
              var ie = B.value,
                V = ie[m];
              V != null &&
                V.cell &&
                (z.has(V.cell) || (z.add(V.cell), V.cell.setHeaderStyles(Y, Ce.COLUMN)));
            }
          } catch (Me) {
            F.e(Me);
          } finally {
            F.f();
          }
          h();
        });
      },
      [t, o, h],
    ),
    P = f.useMemo(
      function () {
        return [
          {
            icon: $n,
            key: 'table-insert-row-above',
            label: H('table.insertRowAbove', { count: b.rows }),
            onClick: function () {
              return N(!1);
            },
          },
          {
            icon: In,
            key: 'table-insert-row-below',
            label: H('table.insertRowBelow', { count: b.rows }),
            onClick: function () {
              return N(!0);
            },
          },
          { type: 'divider' },
          {
            icon: Pn,
            key: 'table-insert-column-before',
            label: H('table.insertColumnLeft', { count: b.columns }),
            onClick: function () {
              return K(!1);
            },
          },
          {
            icon: Rn,
            key: 'table-insert-column-after',
            label: H('table.insertColumnRight', { count: b.columns }),
            onClick: function () {
              return K(!0);
            },
          },
          { type: 'divider' },
          {
            icon: Mn,
            key: 'table-delete-columns',
            label: H('table.deleteColumn'),
            onClick: function () {
              return S();
            },
          },
          {
            icon: Nn,
            key: 'table-delete-rows',
            label: H('table.deleteRow'),
            onClick: function () {
              return U();
            },
          },
          { type: 'divider' },
          {
            icon: Dn,
            key: 'table-delete',
            label: H('table.delete'),
            onClick: function () {
              return k();
            },
          },
        ];
      },
      [n, _, x, b.rows, b.columns, o.__headerState, O, W, N, K, S, U, k, A, I],
    );
  return E.jsx(Kn, { menu: { items: P }, children: a });
});
$r.displayName = 'TableActionMenu';
var Nt, Dt;
function Ht(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var zt = ke(function (e) {
  var t = e.css;
  return {
    actionIcon: t(
      Nt ||
        (Nt = Ht([
          `
    transform: translateX(2px);
  `,
        ])),
    ),
    root: t(
      Dt ||
        (Dt = Ht([
          `
    will-change: transform;

    position: absolute;
    z-index: 3;
    inset-block-start: 0;
    inset-inline-start: 0;
    transform: translateY(100%);

    padding: 2px;
  `,
        ])),
    ),
  };
});
function gi(e, t) {
  return _i(e) || wi(e, t) || Si(e, t) || hi();
}
function hi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Si(e, t) {
  if (e) {
    if (typeof e == 'string') return Kt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kt(e, t);
  }
}
function Kt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function _i(e) {
  if (Array.isArray(e)) return e;
}
var ki = f.memo(function (e) {
    var t = e.cellMerge,
      r = e.editor,
      n = yr(),
      a = f.useRef(null),
      u = f.useState(null),
      l = gi(u, 2),
      o = l[0],
      i = l[1],
      c = f.useCallback(function (y) {
        var d = y.closest('.PlaygroundEditorTheme__tableScrollableWrapper');
        if (d) {
          var p = d.getBoundingClientRect(),
            _ = y.getBoundingClientRect(),
            j = _.right - 5,
            g = j - 28;
          if (j > p.right || g < p.left) return !0;
        }
        return !1;
      }, []),
      s = f.useCallback(
        function () {
          var y = a.current,
            d = X(),
            p = hn(r._window),
            _ = typeof document < 'u' ? document.activeElement : null;
          function j() {
            (y &&
              (y.classList.remove('table-cell-action-button-container--active'),
              y.classList.add('table-cell-action-button-container--inactive')),
              i(null));
          }
          if (!d || !y) return j();
          var g = r.getRootElement(),
            w = null,
            x = null;
          if (q(d) && g !== null && p !== null && g.contains(p.anchorNode)) {
            var D = lt(d.anchor.getNode());
            if (!D || ((x = r.getElementByKey(D.getKey())), !x || !D.isAttached()) || c(x))
              return j();
            var T = Q(D),
              R = ge(T, r.getElementByKey(T.getKey()));
            if (R === null)
              throw new Error('TableActionMenu: Expected to find tableElement in DOM');
            ((w = Fe(R)), i(D));
          } else if (te(d)) {
            var M = lt(d.anchor.getNode());
            if (!re(M)) throw new Error('TableSelection anchorNode must be a TableCellNode');
            var H = Q(M),
              h = ge(H, r.getElementByKey(H.getKey()));
            if (h === null)
              throw new Error('TableActionMenu: Expected to find tableElement in DOM');
            if (((w = Fe(h)), (x = r.getElementByKey(M.getKey())), x === null || c(x))) return j();
          } else if (!_) return j();
          if (w === null || x === null) return j();
          var O = !w || !w.isSelecting;
          (y.classList.toggle('table-cell-action-button-container--active', O),
            y.classList.toggle('table-cell-action-button-container--inactive', !O),
            O ? nt({ floating: y, offset: 0, placement: 'top-end', reference: x }) : xe(y));
        },
        [r, n, c],
      );
    f.useEffect(function () {
      var y = void 0,
        d = function () {
          ((y = void 0), r.getEditorState().read(s));
        },
        p = function () {
          return (y === void 0 && (y = setTimeout(d, 0)), !1);
        };
      return ae(
        r.registerUpdateListener(p),
        r.registerCommand(Sn, p, wn),
        r.registerRootListener(function (_, j) {
          (j && j.removeEventListener('pointerup', p),
            _ && (_.addEventListener('pointerup', p), p()));
        }),
        function () {
          return clearTimeout(y);
        },
      );
    });
    var b = f.useRef(o);
    return (
      f.useEffect(
        function () {
          b.current = o;
        },
        [b, o],
      ),
      E.jsx('div', {
        className: zt.root,
        ref: a,
        children:
          o &&
          E.jsx($r, {
            cellMerge: t,
            editor: r,
            tableCellNode: o,
            children: E.jsx(Ge, {
              className: zt.actionIcon,
              glass: !0,
              icon: Hn,
              size: 12,
              variant: 'filled',
            }),
          }),
      })
    );
  }),
  Ut,
  Wt;
function Bt(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Ft = ke(function (e) {
  var t = e.css;
  return {
    tableAddColumns: t(
      Ut ||
        (Ut = Bt([
          `
      position: absolute;
    `,
        ])),
    ),
    tableAddRows: t(
      Wt ||
        (Wt = Bt([
          `
      position: absolute;
    `,
        ])),
    ),
  };
});
function Ci(e, t) {
  var r,
    n = (r = e.getTheme()) === null || r === void 0 ? void 0 : r[t];
  if (typeof n != 'string')
    throw new Error('getThemeClass: required theme property '.concat(t, ' not defined'));
  return n
    .split(/\s+/g)
    .map(function (a) {
      return '.'.concat(a);
    })
    .join(',');
}
function Ti(e, t) {
  var r = e.target,
    n = Ci(t, 'tableCell');
  if (gr(r)) {
    var a = r.closest('td'.concat(n, ', th').concat(n)),
      u = !(
        a ||
        r.closest('div.tableAddRows') ||
        r.closest('div.tableAddColumns') ||
        r.closest('div.TableCellResizer__resizer')
      );
    return { isOutside: u, tableDOMNode: a };
  } else return { isOutside: !0, tableDOMNode: null };
}
function Oi(e, t, r) {
  var n = f.useRef(null);
  return (
    (n.current = e),
    f.useMemo(
      function () {
        return Un(
          function () {
            n.current && n.current.apply(n, arguments);
          },
          t,
          { maxWait: r },
        );
      },
      [t, r],
    )
  );
}
function we(e) {
  '@babel/helpers - typeof';
  return (
    (we =
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
    we(e)
  );
}
function Xt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xt(Object(r), !0).forEach(function (n) {
          Ai(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xt(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ai(e, t, r) {
  return (
    (t = xi(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xi(e) {
  var t = Ei(e, 'string');
  return we(t) == 'symbol' ? t : String(t);
}
function Ei(e, t) {
  if (we(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (we(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Vt(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Ir(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function le(e, t) {
  return $i(e) || Li(e, t) || Ir(e, t) || ji();
}
function ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ir(e, t) {
  if (e) {
    if (typeof e == 'string') return Gt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gt(e, t);
  }
}
function Gt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Li(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function $i(e) {
  if (Array.isArray(e)) return e;
}
var Pr = f.memo(function (e) {
  var t = e.editor,
    r = yr(),
    n = Pe(),
    a = le(n, 1),
    u = a[0],
    l = f.useState(!1),
    o = le(l, 2),
    i = o[0],
    c = o[1],
    s = f.useState(!1),
    b = le(s, 2),
    y = b[0],
    d = b[1],
    p = f.useState(!1),
    _ = le(p, 2),
    j = _[0],
    g = _[1],
    w = f.useState({}),
    x = le(w, 2),
    D = x[0],
    T = x[1],
    R = f.useRef(new Set()),
    M = f.useRef(null),
    H = Oi(
      function (W) {
        var N = Ti(W, u),
          K = N.isOutside,
          U = N.tableDOMNode;
        if (K) {
          (c(!1), d(!1));
          return;
        }
        if (U) {
          M.current = U;
          var k = null,
            S = null,
            A = null;
          if (
            (t.getEditorState().read(
              function () {
                var B = ee(U);
                if (re(B)) {
                  var ie = _n(B, function (Hr) {
                    return me(Hr);
                  });
                  if (!me(ie)) return;
                  if (((A = ge(ie, t.getElementByKey(ie.getKey()))), A)) {
                    var V,
                      Me = ie.getChildrenSize(),
                      Mr =
                        (V = ie.getChildAtIndex(0)) === null || V === void 0
                          ? void 0
                          : V.getChildrenSize(),
                      Nr = at(B),
                      Dr = br(B);
                    Nr === Me - 1 ? (k = B) : Dr === Mr - 1 && (S = B);
                  }
                }
              },
              { editor: t },
            ),
            A && r)
          ) {
            var I = A.getBoundingClientRect(),
              P = I.y,
              v = I.right,
              m = I.left,
              C = I.bottom,
              L = A.parentElement,
              $ = !1;
            L &&
              L.classList.contains('PlaygroundEditorTheme__tableScrollableWrapper') &&
              ($ = L.scrollWidth > L.clientWidth);
            var z = r.getBoundingClientRect(),
              Y = z.y,
              F = z.left;
            k
              ? (d(!1), c(!0), T({ left: $ && L ? L.offsetLeft : m - F, top: C - Y + 5 }))
              : S && (d(!0), c(!1), T({ left: v - F + 5, top: P - Y }));
          }
        }
      },
      50,
      250,
    ),
    h = f.useMemo(function () {
      return new ResizeObserver(function () {
        (c(!1), d(!1));
      });
    }, []);
  (f.useEffect(
    function () {
      if (j)
        return (
          typeof document < 'u' && document.addEventListener('mousemove', H),
          function () {
            (c(!1), d(!1), typeof document < 'u' && document.removeEventListener('mousemove', H));
          }
        );
    },
    [j, H],
  ),
    f.useEffect(
      function () {
        return ae(
          t.registerMutationListener(
            G,
            function (W) {
              t.getEditorState().read(
                function () {
                  var N = !1,
                    K = Vt(W),
                    U;
                  try {
                    for (K.s(); !(U = K.n()).done; ) {
                      var k = le(U.value, 2),
                        S = k[0],
                        A = k[1];
                      switch (A) {
                        case 'created': {
                          (R.current.add(S), (N = !0));
                          break;
                        }
                        case 'destroyed': {
                          (R.current.delete(S), (N = !0));
                          break;
                        }
                        default:
                          break;
                      }
                    }
                  } catch (L) {
                    K.e(L);
                  } finally {
                    K.f();
                  }
                  if (N) {
                    h.disconnect();
                    var I = Vt(R.current),
                      P;
                    try {
                      for (I.s(); !(P = I.n()).done; ) {
                        var v = P.value,
                          m = nn(v),
                          C = m.tableElement;
                        h.observe(C);
                      }
                    } catch (L) {
                      I.e(L);
                    } finally {
                      I.f();
                    }
                    g(R.current.size > 0);
                  }
                },
                { editor: t },
              );
            },
            { skipInitialization: !1 },
          ),
        );
      },
      [t, h],
    ));
  var O = function (N) {
    t.update(function () {
      if (M.current) {
        var K = ee(M.current);
        (K?.selectEnd(), N ? (dr(), c(!1)) : (vr(), d(!1)));
      }
    });
  };
  return E.jsxs('div', {
    children: [
      i &&
        E.jsx(Ge, {
          className: ne('tableAddRows', Ft.tableAddRows),
          icon: bt,
          onClick: function () {
            return O(i);
          },
          size: 'small',
          style: qt({}, D),
          variant: 'filled',
        }),
      y &&
        E.jsx(Ge, {
          className: ne('tableAddColumns', Ft.tableAddColumns),
          icon: bt,
          onClick: function () {
            return O(!1);
          },
          size: 'small',
          style: qt({}, D),
          variant: 'filled',
        }),
    ],
  });
});
Pr.displayName = 'TableHoverActions';
var Qt;
function Ii(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Pi = 33,
  Yt = 92,
  Jt = ke(function (e) {
    var t = e.css,
      r = e.cssVar;
    return t(
      Qt ||
        (Qt = Ii([
          `
    touch-action: none;
    position: absolute;
    z-index: 1;

    @media (pointer: coarse) {
      background-color: `,
          `;
      mix-blend-mode: color;
    }
  `,
        ])),
      r.colorPrimary,
    );
  });
function Ri(e, t) {
  return Di(e) || Ni(e, t) || Rr(e, t) || Mi();
}
function Mi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ni(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function Di(e) {
  if (Array.isArray(e)) return e;
}
function Zt(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = Rr(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function Rr(e, t) {
  if (e) {
    if (typeof e == 'string') return er(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return er(e, t);
  }
}
function er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Hi = function (t, r) {
    var n = Zt(r),
      a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var u = a.value,
          l = Zt(u.entries()),
          o;
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var i = Ri(o.value, 2),
              c = i[0],
              s = i[1];
            if (s.cell === t) return c;
          }
        } catch (b) {
          l.e(b);
        } finally {
          l.f();
        }
      }
    } catch (b) {
      n.e(b);
    } finally {
      n.f();
    }
  },
  zi = function (t, r) {
    var n = r.getElementByKey(t.getKey());
    return n?.clientHeight;
  };
function tr(e) {
  return Wi(e) || Ui(e) || ot(e) || Ki();
}
function Ki() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ui(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Wi(e) {
  if (Array.isArray(e)) return tt(e);
}
function Bi(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = ot(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0,
    l = !1,
    o;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((u = c.done), c);
    },
    e: function (c) {
      ((l = !0), (o = c));
    },
    f: function () {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function ue(e, t) {
  return qi(e) || Xi(e, t) || ot(e, t) || Fi();
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ot(e, t) {
  if (e) {
    if (typeof e == 'string') return tt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tt(e, t);
  }
}
function tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xi(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function qi(e) {
  if (Array.isArray(e)) return e;
}
var Vi = f.memo(function (e) {
  var t = e.editor,
    r = e.eventEmitter,
    n = f.useRef(null),
    a = f.useRef(null),
    u = f.useRef(null),
    l = f.useState(!1),
    o = ue(l, 2),
    i = o[0],
    c = o[1],
    s = f.useRef(null),
    b = f.useState(null),
    y = ue(b, 2),
    d = y[0],
    p = y[1],
    _ = f.useState(null),
    j = ue(_, 2),
    g = j[0],
    w = j[1],
    x = f.useState(null),
    D = ue(x, 2),
    T = D[0],
    R = D[1],
    M = f.useCallback(function () {
      (w(null), (n.current = null), R(null), (s.current = null), (u.current = null));
    }, []);
  (f.useEffect(
    function () {
      var k = new Set();
      return ae(
        t.registerMutationListener(G, function (S) {
          var A = Bi(S),
            I;
          try {
            for (A.s(); !(I = A.n()).done; ) {
              var P = ue(I.value, 2),
                v = P[0],
                m = P[1];
              m === 'destroyed' ? k.delete(v) : k.add(v);
            }
          } catch (C) {
            A.e(C);
          } finally {
            A.f();
          }
          c(k.size > 0);
        }),
        t.registerNodeTransform(G, function (S) {
          if (S.getColWidths()) return S;
          var A = S.getColumnCount(),
            I = Yt;
          return (S.setColWidths(new Array(A).fill(I)), S);
        }),
      );
    },
    [t],
  ),
    f.useEffect(
      function () {
        if (i) {
          var k = function (v) {
              var m = v.target;
              if (gr(m)) {
                if (T) {
                  (v.preventDefault(), v.stopPropagation(), p({ x: v.clientX, y: v.clientY }));
                  return;
                }
                if (!(a.current && a.current.contains(m)) && n.current !== m) {
                  n.current = m;
                  var C = on(m);
                  C && g !== C
                    ? t.getEditorState().read(
                        function () {
                          var L = ee(C.elem);
                          if (!L) throw new Error('TableCellResizer: Table cell node not found.');
                          var $ = Q(L),
                            z = ge($, t.getElementByKey($.getKey()));
                          if (!z) throw new Error('TableCellResizer: Table element not found.');
                          ((n.current = m), (u.current = z.getBoundingClientRect()), w(C));
                        },
                        { editor: t },
                      )
                    : C || M();
                }
              }
            },
            S = function (v) {
              var m = v.pointerType === 'touch';
              m && k(v);
            },
            A = a.current;
          A?.addEventListener('pointermove', k, { capture: !0 });
          var I = t.registerRootListener(function (P, v) {
            (v?.removeEventListener('pointermove', k),
              v?.removeEventListener('pointerdown', S),
              P?.addEventListener('pointermove', k),
              P?.addEventListener('pointerdown', S));
          });
          return function () {
            (I(), A?.removeEventListener('pointermove', k));
          };
        }
      },
      [g, T, t, M, i],
    ));
  var H = function (S) {
      return S === 'bottom';
    },
    h = f.useCallback(
      function (k) {
        if (!g) throw new Error('TableCellResizer: Expected active cell.');
        t.update(
          function () {
            var S = ee(g.elem);
            if (!re(S)) throw new Error('TableCellResizer: Table cell node not found.');
            var A = Q(S),
              I = at(S),
              P = A.getChildren(),
              v = S.getColSpan() === A.getColumnCount(),
              m = v ? I : I + S.getRowSpan() - 1;
            if (m >= P.length || m < 0)
              throw new Error('Expected table cell to be inside of table row.');
            var C = P[m];
            if (!an(C)) throw new Error('Expected table row');
            var L = C.getHeight();
            if (L === void 0) {
              var $ = C.getChildren();
              L = Math.min.apply(
                Math,
                tr(
                  $.map(function (Y) {
                    var F;
                    return (F = zi(Y, t)) !== null && F !== void 0 ? F : 1 / 0;
                  }),
                ),
              );
            }
            var z = Math.max(L + k, Pi);
            (C.setHeight(z), r.emit('table:resize', { heightChange: k, newHeight: z }));
          },
          { tag: ut },
        );
      },
      [g, t],
    ),
    O = f.useCallback(
      function (k) {
        if (!g) throw new Error('TableCellResizer: Expected active cell.');
        t.update(
          function () {
            var S = ee(g.elem);
            if (!re(S)) throw new Error('TableCellResizer: Table cell node not found.');
            var A = Q(S),
              I = Xe(A, null, null),
              P = ue(I, 1),
              v = P[0],
              m = Hi(S, v);
            if (m === void 0) throw new Error('TableCellResizer: Table column not found.');
            var C = A.getColWidths();
            if (C) {
              var L = C[m];
              if (L !== void 0) {
                var $ = tr(C),
                  z = Math.max(L + k, Yt);
                (($[m] = z),
                  A.setColWidths($),
                  requestAnimationFrame(function () {
                    r.emit('table:resize', { newColWidths: $ });
                  }));
              }
            }
          },
          { tag: ut },
        );
      },
      [g, t],
    ),
    W = f.useCallback(
      function (k) {
        var S = function A(I) {
          if ((I.preventDefault(), I.stopPropagation(), !g))
            throw new Error('TableCellResizer: Expected active cell.');
          if (s.current) {
            var P = s.current,
              v = P.x,
              m = P.y;
            if (g === null) return;
            var C = ct(I.target);
            if (H(k)) {
              var L = (I.clientY - m) / C;
              h(L);
            } else {
              var $ = (I.clientX - v) / C;
              O($);
            }
            (M(), typeof document < 'u' && document.removeEventListener('pointerup', A));
          }
        };
        return S;
      },
      [g, M, O, h],
    ),
    N = f.useCallback(
      function (k) {
        return function (S) {
          if ((S.preventDefault(), S.stopPropagation(), !g))
            throw new Error('TableCellResizer: Expected active cell.');
          ((s.current = { x: S.clientX, y: S.clientY }),
            p(s.current),
            R(k),
            typeof document < 'u' && document.addEventListener('pointerup', W(k)));
        };
      },
      [g, W],
    ),
    K = f.useCallback(
      function () {
        if (g) {
          var k = g.elem.getBoundingClientRect(),
            S = k.height,
            A = k.width,
            I = k.top,
            P = k.left,
            v = ct(g.elem),
            m = 16,
            C = typeof window < 'u' ? window.scrollX : 0,
            L = typeof window < 'u' ? window.scrollY : 0,
            $ = {
              bottom: {
                backgroundColor: 'none',
                cursor: 'row-resize',
                height: ''.concat(m, 'px'),
                left: ''.concat(C + P, 'px'),
                top: ''.concat(L + I + S - m / 2, 'px'),
                width: ''.concat(A, 'px'),
              },
              right: {
                backgroundColor: 'none',
                cursor: 'col-resize',
                height: ''.concat(S, 'px'),
                left: ''.concat(C + P + A - m / 2, 'px'),
                top: ''.concat(L + I, 'px'),
                width: ''.concat(m, 'px'),
              },
            },
            z = u.current;
          return (
            T &&
              d &&
              z &&
              (H(T)
                ? (($[T].left = ''.concat(C + z.left, 'px')),
                  ($[T].top = ''.concat(L + d.y / v, 'px')),
                  ($[T].height = '3px'),
                  ($[T].width = ''.concat(z.width, 'px')))
                : (($[T].top = ''.concat(L + z.top, 'px')),
                  ($[T].left = ''.concat(C + d.x / v, 'px')),
                  ($[T].width = '3px'),
                  ($[T].height = ''.concat(z.height, 'px'))),
              ($[T].backgroundColor = Ve.colorPrimary),
              ($[T].mixBlendMode = 'unset')),
            $
          );
        }
        return { bottom: null, left: null, right: null, top: null };
      },
      [g, T, d],
    ),
    U = K();
  return E.jsx('div', {
    ref: a,
    children:
      g &&
      E.jsxs(E.Fragment, {
        children: [
          E.jsx('div', {
            className: ne(Jt, 'TableCellResizer__resizer', 'TableCellResizer__ui'),
            onPointerDown: N('right'),
            style: U.right || void 0,
          }),
          E.jsx('div', {
            className: ne(Jt, 'TableCellResizer__resizer', 'TableCellResizer__ui'),
            onPointerDown: N('bottom'),
            style: U.bottom || void 0,
          }),
        ],
      }),
  });
});
const Gi = f.memo(function (e) {
  var t = e.editor,
    r = e.eventEmitter;
  if (typeof document > 'u') return null;
  var n = document.querySelector('.ant-app') || document.body;
  return Tn.createPortal(E.jsx(Vi, { editor: t, eventEmitter: r }), n);
});
var rr;
function Qi(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var Yi = ke(function (e) {
  var t = e.css,
    r = e.cssVar;
  return t(
    rr ||
      (rr = Qi([
        `
    overflow-x: auto;
    margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em)
      calc(var(--lobe-markdown-margin-multiple) * 0.5em + 16px);

    .editor_table {
      table-layout: fixed;
      border-spacing: 0;
      border-collapse: collapse;

      width: fit-content;

      text-align: start;
      text-indent: initial;
      text-wrap: pretty;
      word-break: auto-phrase;
      overflow-wrap: break-word;

      background: `,
        `;

      > tr:first-of-type {
        background: `,
        `;

        .editor_table_cell_header {
          font-weight: bold;
        }
      }
    }

    code {
      word-break: break-word;
    }

    .editor_table_cell_header {
      font-weight: normal;
    }

    .editor_table_cell {
      position: relative;

      overflow: auto;

      width: 75px;
      padding-block: 6px;
      padding-inline: 8px;
      border: 1px solid `,
        `;

      text-align: start;
      vertical-align: top;

      outline: none;
    }

    .editor_table_cell_selected {
      color: #000;
      background-color: `,
        `;
      caret-color: transparent;
    }
  `,
      ])),
    r.colorFillQuaternary,
    r.colorFillQuaternary,
    r.colorFillSecondary,
    r.yellow,
  );
});
function nr(e, t) {
  return to(e) || eo(e, t) || Zi(e, t) || Ji();
}
function Ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == 'string') return ar(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ar(e, t);
  }
}
function ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eo(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      u,
      l,
      o = [],
      i = !0,
      c = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        i = !1;
      } else for (; !(i = (n = u.call(r)).done) && (o.push(n.value), o.length !== t); i = !0);
    } catch (s) {
      ((c = !0), (a = s));
    } finally {
      try {
        if (!i && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function to(e) {
  if (Array.isArray(e)) return e;
}
var bo = function (t) {
  var r = t.className,
    n = t.locale,
    a = Pe(),
    u = nr(a, 1),
    l = u[0],
    o = f.useState(null),
    i = nr(o, 2),
    c = i[0],
    s = i[1],
    b = f.useMemo(function () {
      return new ir();
    }, []);
  return (
    f.useLayoutEffect(function () {
      (n && l.registerLocale(n), l.registerPlugin(ei, { theme: ne(Yi, r) }));
    }, []),
    Re(function (y) {
      return (
        s(y),
        y.registerUpdateListener(function () {
          y.read(function () {
            var d = X();
            if (!te(d) && !q(d)) return null;
            var p = sr(d.anchor.getNode());
            if (!p) return null;
            li(y, ln(y, p), d);
          });
        }),
        function () {
          s(null);
        }
      );
    }, []),
    c &&
      E.jsxs(E.Fragment, {
        children: [
          E.jsx(Gi, { editor: c, eventEmitter: b }),
          E.jsxs(cr, { children: [E.jsx(ki, { editor: c }), E.jsx(Pr, { editor: c })] }),
        ],
      })
  );
};
export { kr as I, Ra as R, bo as a, Ma as b, Yi as s, hr as u };
