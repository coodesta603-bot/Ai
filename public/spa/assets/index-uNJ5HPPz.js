import {
  a1 as He,
  cC as al,
  fP as ol,
  cL as Bo,
  cV as va,
  gK as il,
  fC as ll,
  b9 as Vn,
  bN as Qr,
  b8 as ul,
  bV as cl,
  cl as sl,
  ba as Pa,
  bh as pa,
  bb as Uo,
  be as fl,
  hI as dl,
  aG as ml,
  bm as Ko,
  d8 as zo,
  al as qo,
  bc as Xo,
  bO as Go,
  d4 as Qo,
  bS as Zo,
  dm as Jo,
  eF as ei,
  d9 as ti,
  da as ri,
  cK as ni,
  am as ai,
} from './index-C8UyLGsD.js';
import { g as rn, r as c, R as ot } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as vl, a as pl } from './customParseFormat-CAbVLu8E.js';
import {
  c as ve,
  h as Re,
  a as lt,
  w as ut,
  v as yl,
  B as bl,
  b as dt,
  o as oi,
  u as fe,
  m as gl,
  l as hl,
  p as Sl,
  n as Cl,
  q as Oa,
  r as Ia,
  R as ii,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { b as li } from '../i18n/i18n-en-US-DgOT8d-N.js';
import { a as wl, j as $l, l as Pl, k as Ol, m as Il, i as _l, h as xl } from './index-RoMbEimC.js';
import { b as Al, d as jl } from './index-BSuyBMRZ.js';
var zr = { exports: {} },
  Dl = zr.exports,
  _a;
function El() {
  return (
    _a ||
      ((_a = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(Dl, function () {
          return function (r, n) {
            n.prototype.weekday = function (a) {
              var o = this.$locale().weekStart || 0,
                l = this.$W,
                i = (l < o ? l + 7 : l) - o;
              return this.$utils().u(a) ? i : this.subtract(i, 'day').add(a, 'day');
            };
          };
        });
      })(zr)),
    zr.exports
  );
}
var Ml = El();
const Tl = rn(Ml);
var qr = { exports: {} },
  kl = qr.exports,
  xa;
function Rl() {
  return (
    xa ||
      ((xa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(kl, function () {
          return function (r, n, a) {
            var o = n.prototype,
              l = function (m) {
                return m && (m.indexOf ? m : m.s);
              },
              i = function (m, d, p, v, b) {
                var y = m.name ? m : m.$locale(),
                  g = l(y[d]),
                  w = l(y[p]),
                  h =
                    g ||
                    w.map(function ($) {
                      return $.slice(0, v);
                    });
                if (!b) return h;
                var C = y.weekStart;
                return h.map(function ($, S) {
                  return h[(S + (C || 0)) % 7];
                });
              },
              u = function () {
                return a.Ls[a.locale()];
              },
              f = function (m, d) {
                return (
                  m.formats[d] ||
                  (function (p) {
                    return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (v, b, y) {
                      return b || y.slice(1);
                    });
                  })(m.formats[d.toUpperCase()])
                );
              },
              s = function () {
                var m = this;
                return {
                  months: function (d) {
                    return d ? d.format('MMMM') : i(m, 'months');
                  },
                  monthsShort: function (d) {
                    return d ? d.format('MMM') : i(m, 'monthsShort', 'months', 3);
                  },
                  firstDayOfWeek: function () {
                    return m.$locale().weekStart || 0;
                  },
                  weekdays: function (d) {
                    return d ? d.format('dddd') : i(m, 'weekdays');
                  },
                  weekdaysMin: function (d) {
                    return d ? d.format('dd') : i(m, 'weekdaysMin', 'weekdays', 2);
                  },
                  weekdaysShort: function (d) {
                    return d ? d.format('ddd') : i(m, 'weekdaysShort', 'weekdays', 3);
                  },
                  longDateFormat: function (d) {
                    return f(m.$locale(), d);
                  },
                  meridiem: this.$locale().meridiem,
                  ordinal: this.$locale().ordinal,
                };
              };
            ((o.localeData = function () {
              return s.bind(this)();
            }),
              (a.localeData = function () {
                var m = u();
                return {
                  firstDayOfWeek: function () {
                    return m.weekStart || 0;
                  },
                  weekdays: function () {
                    return a.weekdays();
                  },
                  weekdaysShort: function () {
                    return a.weekdaysShort();
                  },
                  weekdaysMin: function () {
                    return a.weekdaysMin();
                  },
                  months: function () {
                    return a.months();
                  },
                  monthsShort: function () {
                    return a.monthsShort();
                  },
                  longDateFormat: function (d) {
                    return f(m, d);
                  },
                  meridiem: m.meridiem,
                  ordinal: m.ordinal,
                };
              }),
              (a.months = function () {
                return i(u(), 'months');
              }),
              (a.monthsShort = function () {
                return i(u(), 'monthsShort', 'months', 3);
              }),
              (a.weekdays = function (m) {
                return i(u(), 'weekdays', null, null, m);
              }),
              (a.weekdaysShort = function (m) {
                return i(u(), 'weekdaysShort', 'weekdays', 3, m);
              }),
              (a.weekdaysMin = function (m) {
                return i(u(), 'weekdaysMin', 'weekdays', 2, m);
              }));
          };
        });
      })(qr)),
    qr.exports
  );
}
var Nl = Rl();
const Hl = rn(Nl);
var Xr = { exports: {} },
  Vl = Xr.exports,
  Aa;
function Fl() {
  return (
    Aa ||
      ((Aa = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(Vl, function () {
          var r = 'week',
            n = 'year';
          return function (a, o, l) {
            var i = o.prototype;
            ((i.week = function (u) {
              if ((u === void 0 && (u = null), u !== null))
                return this.add(7 * (u - this.week()), 'day');
              var f = this.$locale().yearStart || 1;
              if (this.month() === 11 && this.date() > 25) {
                var s = l(this).startOf(n).add(1, n).date(f),
                  m = l(this).endOf(r);
                if (s.isBefore(m)) return 1;
              }
              var d = l(this).startOf(n).date(f).startOf(r).subtract(1, 'millisecond'),
                p = this.diff(d, r, !0);
              return p < 0 ? l(this).startOf('week').week() : Math.ceil(p);
            }),
              (i.weeks = function (u) {
                return (u === void 0 && (u = null), this.week(u));
              }));
          };
        });
      })(Xr)),
    Xr.exports
  );
}
var Wl = Fl();
const Yl = rn(Wl);
var Gr = { exports: {} },
  Ll = Gr.exports,
  ja;
function Bl() {
  return (
    ja ||
      ((ja = 1),
      (function (e, t) {
        (function (r, n) {
          e.exports = n();
        })(Ll, function () {
          return function (r, n) {
            n.prototype.weekYear = function () {
              var a = this.month(),
                o = this.week(),
                l = this.year();
              return o === 1 && a === 11 ? l + 1 : a === 0 && o >= 52 ? l - 1 : l;
            };
          };
        });
      })(Gr)),
    Gr.exports
  );
}
var Ul = Bl();
const Kl = rn(Ul);
He.extend(vl);
He.extend(pl);
He.extend(Tl);
He.extend(Hl);
He.extend(Yl);
He.extend(Kl);
He.extend(function (e, t) {
  var r = t.prototype,
    n = r.format;
  r.format = function (o) {
    var l = (o || '').replace('Wo', 'wo');
    return n.bind(this)(l);
  };
});
var zl = {
    bn_BD: 'bn-bd',
    by_BY: 'be',
    en_GB: 'en-gb',
    en_US: 'en',
    fr_BE: 'fr',
    fr_CA: 'fr-ca',
    hy_AM: 'hy-am',
    kmr_IQ: 'ku',
    nl_BE: 'nl-be',
    pt_BR: 'pt-br',
    zh_CN: 'zh-cn',
    zh_HK: 'zh-hk',
    zh_TW: 'zh-tw',
  },
  vt = function (t) {
    var r = zl[t];
    return r || t.split('_')[0];
  },
  Ie = function (t) {
    return !He.isDayjs(t) || t instanceof He ? t : He(t.valueOf());
  },
  ql = {
    getNow: function () {
      var t = He();
      return typeof t.tz == 'function' ? t.tz() : t;
    },
    getFixedDate: function (t) {
      return He(t, ['YYYY-M-DD', 'YYYY-MM-DD']);
    },
    getEndDate: function (t) {
      return Ie(t).endOf('month');
    },
    getWeekDay: function (t) {
      var r = Ie(t).locale('en');
      return r.weekday() + r.localeData().firstDayOfWeek();
    },
    getYear: function (t) {
      return Ie(t).year();
    },
    getMonth: function (t) {
      return Ie(t).month();
    },
    getDate: function (t) {
      return Ie(t).date();
    },
    getHour: function (t) {
      return Ie(t).hour();
    },
    getMinute: function (t) {
      return Ie(t).minute();
    },
    getSecond: function (t) {
      return Ie(t).second();
    },
    getMillisecond: function (t) {
      return Ie(t).millisecond();
    },
    addYear: function (t, r) {
      return Ie(t).add(r, 'year');
    },
    addMonth: function (t, r) {
      return Ie(t).add(r, 'month');
    },
    addDate: function (t, r) {
      return Ie(t).add(r, 'day');
    },
    setYear: function (t, r) {
      return Ie(t).year(r);
    },
    setMonth: function (t, r) {
      return Ie(t).month(r);
    },
    setDate: function (t, r) {
      return Ie(t).date(r);
    },
    setHour: function (t, r) {
      return Ie(t).hour(r);
    },
    setMinute: function (t, r) {
      return Ie(t).minute(r);
    },
    setSecond: function (t, r) {
      return Ie(t).second(r);
    },
    setMillisecond: function (t, r) {
      return Ie(t).millisecond(r);
    },
    isAfter: function (t, r) {
      return Ie(t).isAfter(Ie(r));
    },
    isValidate: function (t) {
      return Ie(t).isValid();
    },
    locale: {
      getWeekFirstDay: function (t) {
        return He().locale(vt(t)).localeData().firstDayOfWeek();
      },
      getWeekFirstDate: function (t, r) {
        return Ie(r).locale(vt(t)).weekday(0);
      },
      getWeek: function (t, r) {
        return Ie(r).locale(vt(t)).week();
      },
      getShortWeekDays: function (t) {
        return He().locale(vt(t)).localeData().weekdaysMin();
      },
      getShortMonths: function (t) {
        return He().locale(vt(t)).localeData().monthsShort();
      },
      format: function (t, r, n) {
        return Ie(r).locale(vt(t)).format(n);
      },
      parse: function (t, r, n) {
        for (var a = vt(t), o = 0; o < n.length; o += 1) {
          var l = n[o],
            i = r;
          if (l.includes('wo') || l.includes('Wo')) {
            for (
              var u = i.split('-')[0],
                f = i.split('-')[1],
                s = He(u, 'YYYY').startOf('year').locale(a),
                m = 0;
              m <= 52;
              m += 1
            ) {
              var d = s.add(m, 'week');
              if (d.format('Wo') === f) return d;
            }
            return null;
          }
          var p = He(i, l, !0).locale(a);
          if (p.isValid()) return p;
        }
        return null;
      },
    },
  };
function Xl(e, t) {
  return e !== void 0 ? e : t ? 'bottomRight' : 'bottomLeft';
}
var Ge = c.createContext(null);
function Xt(e) {
  '@babel/helpers - typeof';
  return (
    (Xt =
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
    Xt(e)
  );
}
function Da(e, t, r) {
  return (
    (t = Gl(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Gl(e) {
  var t = Ql(e, 'string');
  return Xt(t) == 'symbol' ? t : String(t);
}
function Ql(e, t) {
  if (Xt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Zl = {
  bottomLeft: { points: ['tl', 'bl'], offset: [0, 4], overflow: { adjustX: 1, adjustY: 1 } },
  bottomRight: { points: ['tr', 'br'], offset: [0, 4], overflow: { adjustX: 1, adjustY: 1 } },
  topLeft: { points: ['bl', 'tl'], offset: [0, -4], overflow: { adjustX: 0, adjustY: 1 } },
  topRight: { points: ['br', 'tr'], offset: [0, -4], overflow: { adjustX: 0, adjustY: 1 } },
};
function ui(e) {
  var t = e.popupElement,
    r = e.popupStyle,
    n = e.popupClassName,
    a = e.popupAlign,
    o = e.transitionName,
    l = e.getPopupContainer,
    i = e.children,
    u = e.range,
    f = e.placement,
    s = e.builtinPlacements,
    m = s === void 0 ? Zl : s,
    d = e.direction,
    p = e.visible,
    v = e.onClose,
    b = c.useContext(Ge),
    y = b.prefixCls,
    g = ''.concat(y, '-dropdown'),
    w = Xl(f, d === 'rtl');
  return c.createElement(
    al,
    {
      showAction: [],
      hideAction: ['click'],
      popupPlacement: w,
      builtinPlacements: m,
      prefixCls: g,
      popupMotion: { motionName: o },
      popup: t,
      popupAlign: a,
      popupVisible: p,
      popupClassName: ve(
        n,
        Da(Da({}, ''.concat(g, '-range'), u), ''.concat(g, '-rtl'), d === 'rtl'),
      ),
      popupStyle: r,
      stretch: 'minWidth',
      getPopupContainer: l,
      onPopupVisibleChange: function (C) {
        C || v();
      },
    },
    i,
  );
}
function Jl(e) {
  return nu(e) || ru(e) || tu(e) || eu();
}
function eu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tu(e, t) {
  if (e) {
    if (typeof e == 'string') return Fn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fn(e, t);
  }
}
function ru(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function nu(e) {
  if (Array.isArray(e)) return Fn(e);
}
function Fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ya(e, t) {
  for (
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0', n = String(e);
    n.length < t;
  )
    n = ''.concat(r).concat(n);
  return n;
}
function Ct(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ut(e, t, r) {
  var n = Jl(e);
  return ((n[t] = r), n);
}
function nn(e, t) {
  var r = {},
    n = t || Object.keys(e);
  return (
    n.forEach(function (a) {
      e[a] !== void 0 && (r[a] = e[a]);
    }),
    r
  );
}
function ci(e, t, r) {
  if (r) return r;
  switch (e) {
    case 'time':
      return t.fieldTimeFormat;
    case 'datetime':
      return t.fieldDateTimeFormat;
    case 'month':
      return t.fieldMonthFormat;
    case 'year':
      return t.fieldYearFormat;
    case 'quarter':
      return t.fieldQuarterFormat;
    case 'week':
      return t.fieldWeekFormat;
    default:
      return t.fieldDateFormat;
  }
}
function si(e, t, r) {
  var n = r !== void 0 ? r : t[t.length - 1],
    a = t.find(function (o) {
      return e[o];
    });
  return n !== a ? e[a] : void 0;
}
function fi(e) {
  return nn(e, [
    'placement',
    'builtinPlacements',
    'popupAlign',
    'getPopupContainer',
    'transitionName',
    'direction',
  ]);
}
function Gt(e) {
  '@babel/helpers - typeof';
  return (
    (Gt =
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
    Gt(e)
  );
}
function Ea(e, t) {
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
function Ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ea(Object(r), !0).forEach(function (n) {
          au(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ea(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function au(e, t, r) {
  return (
    (t = ou(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ou(e) {
  var t = iu(e, 'string');
  return Gt(t) == 'symbol' ? t : String(t);
}
function iu(e, t) {
  if (Gt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ba(e, t, r, n) {
  var a = c.useMemo(
      function () {
        return (
          e ||
          function (l, i) {
            var u = l;
            return t && i.type === 'date'
              ? t(u, i.today)
              : r && i.type === 'month'
                ? r(u, i.locale)
                : i.originNode;
          }
        );
      },
      [e, r, t],
    ),
    o = c.useCallback(
      function (l, i) {
        return a(l, Ma(Ma({}, i), {}, { range: n }));
      },
      [a, n],
    );
  return o;
}
function lu(e, t) {
  return fu(e) || su(e, t) || cu(e, t) || uu();
}
function uu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cu(e, t) {
  if (e) {
    if (typeof e == 'string') return Ta(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ta(e, t);
  }
}
function Ta(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function su(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function fu(e) {
  if (Array.isArray(e)) return e;
}
function di(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    n = c.useState([!1, !1]),
    a = lu(n, 2),
    o = a[0],
    l = a[1],
    i = function (s, m) {
      l(function (d) {
        return Ut(d, m, s);
      });
    },
    u = c.useMemo(
      function () {
        return o.map(function (f, s) {
          if (f) return !0;
          var m = e[s];
          return m ? !!((!r[s] && !m) || (m && t(m, { activeIndex: s }))) : !1;
        });
      },
      [e, o, t, r],
    );
  return [u, i];
}
function Qt(e) {
  '@babel/helpers - typeof';
  return (
    (Qt =
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
    Qt(e)
  );
}
function ka(e, t) {
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
function Ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ka(Object(r), !0).forEach(function (n) {
          du(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ka(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function du(e, t, r) {
  return (
    (t = mu(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function mu(e) {
  var t = vu(e, 'string');
  return Qt(t) == 'symbol' ? t : String(t);
}
function vu(e, t) {
  if (Qt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function mi(e, t, r, n, a) {
  var o = '',
    l = [];
  return (
    e && l.push(a ? 'hh' : 'HH'),
    t && l.push('mm'),
    r && l.push('ss'),
    (o = l.join(':')),
    n && (o += '.SSS'),
    a && (o += ' A'),
    o
  );
}
function pu(e, t, r, n, a, o) {
  var l = e.fieldDateTimeFormat,
    i = e.fieldDateFormat,
    u = e.fieldTimeFormat,
    f = e.fieldMonthFormat,
    s = e.fieldYearFormat,
    m = e.fieldWeekFormat,
    d = e.fieldQuarterFormat,
    p = e.yearFormat,
    v = e.cellYearFormat,
    b = e.cellQuarterFormat,
    y = e.dayFormat,
    g = e.cellDateFormat,
    w = mi(t, r, n, a, o);
  return Ra(
    Ra({}, e),
    {},
    {
      fieldDateTimeFormat: l || 'YYYY-MM-DD '.concat(w),
      fieldDateFormat: i || 'YYYY-MM-DD',
      fieldTimeFormat: u || w,
      fieldMonthFormat: f || 'YYYY-MM',
      fieldYearFormat: s || 'YYYY',
      fieldWeekFormat: m || 'gggg-wo',
      fieldQuarterFormat: d || 'YYYY-[Q]Q',
      yearFormat: p || 'YYYY',
      cellYearFormat: v || 'YYYY',
      cellQuarterFormat: b || '[Q]Q',
      cellDateFormat: g || y || 'D',
    },
  );
}
function vi(e, t) {
  var r = t.showHour,
    n = t.showMinute,
    a = t.showSecond,
    o = t.showMillisecond,
    l = t.use12Hours;
  return ot.useMemo(
    function () {
      return pu(e, r, n, a, o, l);
    },
    [e, r, n, a, o, l],
  );
}
function Na(e, t) {
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
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Na(Object(r), !0).forEach(function (n) {
          yu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Na(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function yu(e, t, r) {
  return (
    (t = bu(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function bu(e) {
  var t = gu(e, 'string');
  return ht(t) == 'symbol' ? t : String(t);
}
function gu(e, t) {
  if (ht(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ht(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Wn(e, t) {
  return wu(e) || Cu(e, t) || Su(e, t) || hu();
}
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Su(e, t) {
  if (e) {
    if (typeof e == 'string') return Ha(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ha(e, t);
  }
}
function Ha(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cu(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function wu(e) {
  if (Array.isArray(e)) return e;
}
function ht(e) {
  '@babel/helpers - typeof';
  return (
    (ht =
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
    ht(e)
  );
}
function Rt(e, t, r) {
  return (
    r ??
    t.some(function (n) {
      return e.includes(n);
    })
  );
}
var $u = [
  'showNow',
  'showHour',
  'showMinute',
  'showSecond',
  'showMillisecond',
  'use12Hours',
  'hourStep',
  'minuteStep',
  'secondStep',
  'millisecondStep',
  'hideDisabledOptions',
  'defaultValue',
  'disabledHours',
  'disabledMinutes',
  'disabledSeconds',
  'disabledMilliseconds',
  'disabledTime',
  'changeOnScroll',
  'defaultOpenValue',
];
function Pu(e) {
  var t = nn(e, $u),
    r = e.format,
    n = e.picker,
    a = null;
  return (
    r && ((a = r), Array.isArray(a) && (a = a[0]), (a = ht(a) === 'object' ? a.format : a)),
    n === 'time' && (t.format = a),
    [t, a]
  );
}
function Ou(e) {
  return e && typeof e == 'string';
}
function pi(e, t, r, n) {
  return [e, t, r, n].some(function (a) {
    return a !== void 0;
  });
}
function yi(e, t, r, n, a) {
  var o = t,
    l = r,
    i = n;
  if (!e && !o && !l && !i && !a) ((o = !0), (l = !0), (i = !0));
  else if (e) {
    var u,
      f,
      s,
      m = [o, l, i].some(function (v) {
        return v === !1;
      }),
      d = [o, l, i].some(function (v) {
        return v === !0;
      }),
      p = m ? !0 : !d;
    ((o = (u = o) !== null && u !== void 0 ? u : p),
      (l = (f = l) !== null && f !== void 0 ? f : p),
      (i = (s = i) !== null && s !== void 0 ? s : p));
  }
  return [o, l, i, a];
}
function bi(e) {
  var t = e.showTime,
    r = Pu(e),
    n = Wn(r, 2),
    a = n[0],
    o = n[1],
    l = t && ht(t) === 'object' ? t : {},
    i = _t(_t({ defaultOpenValue: l.defaultOpenValue || l.defaultValue }, a), l),
    u = i.showMillisecond,
    f = i.showHour,
    s = i.showMinute,
    m = i.showSecond,
    d = pi(f, s, m, u),
    p = yi(d, f, s, m, u),
    v = Wn(p, 3);
  return (
    (f = v[0]),
    (s = v[1]),
    (m = v[2]),
    [
      i,
      _t(_t({}, i), {}, { showHour: f, showMinute: s, showSecond: m, showMillisecond: u }),
      i.format,
      o,
    ]
  );
}
function gi(e, t, r, n, a) {
  var o = e === 'time';
  if (e === 'datetime' || o) {
    for (var l = n, i = ci(e, a, null), u = i, f = [t, r], s = 0; s < f.length; s += 1) {
      var m = Ct(f[s])[0];
      if (Ou(m)) {
        u = m;
        break;
      }
    }
    var d = l.showHour,
      p = l.showMinute,
      v = l.showSecond,
      b = l.showMillisecond,
      y = l.use12Hours,
      g = Rt(u, ['a', 'A', 'LT', 'LLL', 'LTS'], y),
      w = pi(d, p, v, b);
    w ||
      ((d = Rt(u, ['H', 'h', 'k', 'LT', 'LLL'])),
      (p = Rt(u, ['m', 'LT', 'LLL'])),
      (v = Rt(u, ['s', 'LTS'])),
      (b = Rt(u, ['SSS'])));
    var h = yi(w, d, p, v, b),
      C = Wn(h, 3);
    ((d = C[0]), (p = C[1]), (v = C[2]));
    var $ = t || mi(d, p, v, b, g);
    return _t(
      _t({}, l),
      {},
      { format: $, showHour: d, showMinute: p, showSecond: v, showMillisecond: b, use12Hours: g },
    );
  }
  return null;
}
function Yn(e) {
  '@babel/helpers - typeof';
  return (
    (Yn =
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
    Yn(e)
  );
}
function Iu(e, t, r) {
  if (t === !1) return null;
  var n = t && Yn(t) === 'object' ? t : {};
  return n.clearIcon || r || c.createElement('span', { className: ''.concat(e, '-clear-btn') });
}
var jn = 7;
function mt(e, t, r) {
  return (!e && !t) || e === t ? !0 : !e || !t ? !1 : r();
}
function Ln(e, t, r) {
  return mt(t, r, function () {
    var n = Math.floor(e.getYear(t) / 10),
      a = Math.floor(e.getYear(r) / 10);
    return n === a;
  });
}
function St(e, t, r) {
  return mt(t, r, function () {
    return e.getYear(t) === e.getYear(r);
  });
}
function Va(e, t) {
  var r = Math.floor(e.getMonth(t) / 3);
  return r + 1;
}
function _u(e, t, r) {
  return mt(t, r, function () {
    return St(e, t, r) && Va(e, t) === Va(e, r);
  });
}
function ga(e, t, r) {
  return mt(t, r, function () {
    return St(e, t, r) && e.getMonth(t) === e.getMonth(r);
  });
}
function ha(e, t, r) {
  return mt(t, r, function () {
    return St(e, t, r) && ga(e, t, r) && e.getDate(t) === e.getDate(r);
  });
}
function hi(e, t, r) {
  return mt(t, r, function () {
    return (
      e.getHour(t) === e.getHour(r) &&
      e.getMinute(t) === e.getMinute(r) &&
      e.getSecond(t) === e.getSecond(r)
    );
  });
}
function Si(e, t, r) {
  return mt(t, r, function () {
    return ha(e, t, r) && hi(e, t, r) && e.getMillisecond(t) === e.getMillisecond(r);
  });
}
function Yt(e, t, r, n) {
  return mt(r, n, function () {
    var a = e.locale.getWeekFirstDate(t, r),
      o = e.locale.getWeekFirstDate(t, n);
    return St(e, a, o) && e.locale.getWeek(t, r) === e.locale.getWeek(t, n);
  });
}
function Fe(e, t, r, n, a) {
  switch (a) {
    case 'date':
      return ha(e, r, n);
    case 'week':
      return Yt(e, t.locale, r, n);
    case 'month':
      return ga(e, r, n);
    case 'quarter':
      return _u(e, r, n);
    case 'year':
      return St(e, r, n);
    case 'decade':
      return Ln(e, r, n);
    case 'time':
      return hi(e, r, n);
    default:
      return Si(e, r, n);
  }
}
function an(e, t, r, n) {
  return !t || !r || !n ? !1 : e.isAfter(n, t) && e.isAfter(r, n);
}
function Rr(e, t, r, n, a) {
  return Fe(e, t, r, n, a) ? !0 : e.isAfter(r, n);
}
function xu(e, t, r) {
  var n = t.locale.getWeekFirstDay(e),
    a = t.setDate(r, 1),
    o = t.getWeekDay(a),
    l = t.addDate(a, n - o);
  return (t.getMonth(l) === t.getMonth(r) && t.getDate(l) > 1 && (l = t.addDate(l, -7)), l);
}
function Te(e, t) {
  var r = t.generateConfig,
    n = t.locale,
    a = t.format;
  return e ? (typeof a == 'function' ? a(e) : r.locale.format(n.locale, e, a)) : '';
}
function Zr(e, t, r) {
  var n = t,
    a = ['getHour', 'getMinute', 'getSecond', 'getMillisecond'],
    o = ['setHour', 'setMinute', 'setSecond', 'setMillisecond'];
  return (
    o.forEach(function (l, i) {
      r ? (n = e[l](n, e[a[i]](r))) : (n = e[l](n, 0));
    }),
    n
  );
}
function Au(e, t, r, n, a) {
  var o = Re(function (l, i) {
    return !!(
      (r && r(l, i)) ||
      (n && e.isAfter(n, l) && !Fe(e, t, n, l, i.type)) ||
      (a && e.isAfter(l, a) && !Fe(e, t, a, l, i.type))
    );
  });
  return o;
}
function Bn(e) {
  '@babel/helpers - typeof';
  return (
    (Bn =
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
    Bn(e)
  );
}
function ju(e, t, r) {
  return c.useMemo(
    function () {
      var n = ci(e, t, r),
        a = Ct(n),
        o = a[0],
        l = Bn(o) === 'object' && o.type === 'mask' ? o.format : null;
      return [
        a.map(function (i) {
          return typeof i == 'string' || typeof i == 'function' ? i : i.format;
        }),
        l,
      ];
    },
    [e, t, r],
  );
}
function Du(e, t, r) {
  return typeof e[0] == 'function' || r ? !0 : t;
}
function Zt(e) {
  '@babel/helpers - typeof';
  return (
    (Zt =
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
    Zt(e)
  );
}
function Fa(e, t) {
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
function Eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fa(Object(r), !0).forEach(function (n) {
          Mu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fa(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mu(e, t, r) {
  return (
    (t = Tu(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Tu(e) {
  var t = ku(e, 'string');
  return Zt(t) == 'symbol' ? t : String(t);
}
function ku(e, t) {
  if (Zt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ru(e, t, r, n) {
  var a = Re(function (o, l) {
    var i = Eu({ type: t }, l);
    if ((delete i.activeIndex, !e.isValidate(o) || (r && r(o, i)))) return !0;
    if ((t === 'date' || t === 'time') && n) {
      var u,
        f = l && l.activeIndex === 1 ? 'end' : 'start',
        s =
          ((u = n.disabledTime) === null || u === void 0
            ? void 0
            : u.call(n, o, f, { from: i.from })) || {},
        m = s.disabledHours,
        d = s.disabledMinutes,
        p = s.disabledSeconds,
        v = s.disabledMilliseconds,
        b = n.disabledHours,
        y = n.disabledMinutes,
        g = n.disabledSeconds,
        w = m || b,
        h = d || y,
        C = p || g,
        $ = e.getHour(o),
        S = e.getMinute(o),
        P = e.getSecond(o),
        x = e.getMillisecond(o);
      if (
        (w && w().includes($)) ||
        (h && h($).includes(S)) ||
        (C && C($, S).includes(P)) ||
        (v && v($, S, P).includes(x))
      )
        return !0;
    }
    return !1;
  });
  return a;
}
function Jt(e) {
  '@babel/helpers - typeof';
  return (
    (Jt =
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
    Jt(e)
  );
}
function Wa(e, t) {
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
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wa(Object(r), !0).forEach(function (n) {
          Nu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wa(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Nu(e, t, r) {
  return (
    (t = Hu(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Hu(e) {
  var t = Vu(e, 'string');
  return Jt(t) == 'symbol' ? t : String(t);
}
function Vu(e, t) {
  if (Jt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ya(e, t) {
  return Lu(e) || Yu(e, t) || Wu(e, t) || Fu();
}
function Fu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wu(e, t) {
  if (e) {
    if (typeof e == 'string') return La(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return La(e, t);
  }
}
function La(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yu(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Lu(e) {
  if (Array.isArray(e)) return e;
}
function Nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    r = c.useMemo(
      function () {
        var n = e && Ct(e);
        return (t && n && (n[1] = n[1] || n[0]), n);
      },
      [e, t],
    );
  return r;
}
function Ci(e, t) {
  var r = e.generateConfig,
    n = e.locale,
    a = e.picker,
    o = a === void 0 ? 'date' : a,
    l = e.prefixCls,
    i = l === void 0 ? 'rc-picker' : l,
    u = e.previewValue,
    f = u === void 0 ? 'hover' : u,
    s = e.styles,
    m = s === void 0 ? {} : s,
    d = e.classNames,
    p = d === void 0 ? {} : d,
    v = e.order,
    b = v === void 0 ? !0 : v,
    y = e.components,
    g = y === void 0 ? {} : y,
    w = e.inputRender,
    h = e.allowClear,
    C = e.clearIcon,
    $ = e.needConfirm,
    S = e.multiple,
    P = e.format,
    x = e.inputReadOnly,
    M = e.disabledDate,
    R = e.minDate,
    V = e.maxDate,
    F = e.showTime,
    k = e.value,
    D = e.defaultValue,
    O = e.pickerValue,
    T = e.defaultPickerValue,
    N = Nr(k),
    j = Nr(D),
    B = Nr(O),
    L = Nr(T),
    W = o === 'date' && F ? 'datetime' : o,
    A = W === 'time' || W === 'datetime',
    _ = A || S,
    E = $ ?? A,
    J = bi(e),
    Y = Ya(J, 4),
    U = Y[0],
    Q = Y[1],
    G = Y[2],
    te = Y[3],
    X = vi(n, Q),
    K = c.useMemo(
      function () {
        return gi(W, G, te, U, X);
      },
      [W, G, te, U, X],
    ),
    Z = c.useMemo(
      function () {
        return Nt(
          Nt({}, e),
          {},
          {
            previewValue: f,
            prefixCls: i,
            locale: X,
            picker: o,
            styles: m,
            classNames: p,
            order: b,
            components: Nt({ input: w }, g),
            clearIcon: Iu(i, h, C),
            showTime: K,
            value: N,
            defaultValue: j,
            pickerValue: B,
            defaultPickerValue: L,
          },
          t?.(),
        );
      },
      [e],
    ),
    oe = ju(W, X, P),
    de = Ya(oe, 2),
    ce = de[0],
    Se = de[1],
    ie = Du(ce, x, S),
    be = Au(r, n, M, R, V),
    we = Ru(r, o, be, K),
    me = c.useMemo(
      function () {
        return Nt(Nt({}, Z), {}, { needConfirm: E, inputReadOnly: ie, disabledDate: be });
      },
      [Z, E, ie, be],
    );
  return [me, W, _, ce, Se, we];
}
function Ba(e, t) {
  return zu(e) || Ku(e, t) || Uu(e, t) || Bu();
}
function Bu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uu(e, t) {
  if (e) {
    if (typeof e == 'string') return Ua(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ua(e, t);
  }
}
function Ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ku(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function zu(e) {
  if (Array.isArray(e)) return e;
}
function qu(e, t, r) {
  var n = lt(t, e),
    a = Ba(n, 2),
    o = a[0],
    l = a[1],
    i = ot.useState({}),
    u = Ba(i, 2),
    f = u[1],
    s = Re(function (y) {
      (l(y), f({}));
    }),
    m = ot.useRef(e),
    d = ot.useRef(),
    p = function () {
      ut.cancel(d.current);
    },
    v = Re(function () {
      (s(m.current), r && o !== m.current && r(m.current));
    }),
    b = Re(function (y, g) {
      (p(), (m.current = y), y || g ? v() : (d.current = ut(v)));
    });
  return (
    ot.useEffect(function () {
      return p;
    }, []),
    [o, b]
  );
}
function Xu(e, t) {
  return Ju(e) || Zu(e, t) || Qu(e, t) || Gu();
}
function Gu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qu(e, t) {
  if (e) {
    if (typeof e == 'string') return Ka(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ka(e, t);
  }
}
function Ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zu(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Ju(e) {
  if (Array.isArray(e)) return e;
}
function wi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    n = arguments.length > 3 ? arguments[3] : void 0,
    a = r.every(function (s) {
      return s;
    })
      ? !1
      : e,
    o = qu(a, t || !1, n),
    l = Xu(o, 2),
    i = l[0],
    u = l[1];
  function f(s) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (!m.inherit || i) && u(s, m.force);
  }
  return [i, f];
}
function $i(e) {
  var t = c.useRef();
  return (
    c.useImperativeHandle(e, function () {
      var r;
      return {
        nativeElement: (r = t.current) === null || r === void 0 ? void 0 : r.nativeElement,
        focus: function (a) {
          var o;
          (o = t.current) === null || o === void 0 || o.focus(a);
        },
        blur: function () {
          var a;
          (a = t.current) === null || a === void 0 || a.blur();
        },
      };
    }),
    t
  );
}
function ec(e, t) {
  return ac(e) || nc(e, t) || rc(e, t) || tc();
}
function tc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rc(e, t) {
  if (e) {
    if (typeof e == 'string') return za(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return za(e, t);
  }
}
function za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function ac(e) {
  if (Array.isArray(e)) return e;
}
function Pi(e, t) {
  return c.useMemo(
    function () {
      return (
        e ||
        (t
          ? (yl(!1, '`ranges` is deprecated. Please use `presets` instead.'),
            Object.entries(t).map(function (r) {
              var n = ec(r, 2),
                a = n[0],
                o = n[1];
              return { label: a, value: o };
            }))
          : [])
      );
    },
    [e, t],
  );
}
function Sa(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
    n = c.useRef(t);
  ((n.current = t),
    bl(
      function () {
        if (e) n.current(e);
        else {
          var a = ut(function () {
            n.current(e);
          }, r);
          return function () {
            ut.cancel(a);
          };
        }
      },
      [e],
    ));
}
function qa(e, t) {
  return uc(e) || lc(e, t) || ic(e, t) || oc();
}
function oc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ic(e, t) {
  if (e) {
    if (typeof e == 'string') return Xa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xa(e, t);
  }
}
function Xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function uc(e) {
  if (Array.isArray(e)) return e;
}
function Oi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    n = c.useState(0),
    a = qa(n, 2),
    o = a[0],
    l = a[1],
    i = c.useState(!1),
    u = qa(i, 2),
    f = u[0],
    s = u[1],
    m = c.useRef([]),
    d = c.useRef(null),
    p = c.useRef(null),
    v = function (C) {
      d.current = C;
    },
    b = function (C) {
      return d.current === C;
    },
    y = function (C) {
      s(C);
    },
    g = function (C) {
      return (C && (p.current = C), p.current);
    },
    w = function (C) {
      var $ = m.current,
        S = new Set(
          $.filter(function (x) {
            return C[x] || t[x];
          }),
        ),
        P = $[$.length - 1] === 0 ? 1 : 0;
      return S.size >= 2 || e[P] ? null : P;
    };
  return (
    Sa(f || r, function () {
      f || ((m.current = []), v(null));
    }),
    c.useEffect(
      function () {
        f && m.current.push(o);
      },
      [f, o],
    ),
    [f, y, g, o, l, w, m.current, v, b]
  );
}
function er(e) {
  '@babel/helpers - typeof';
  return (
    (er =
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
    er(e)
  );
}
function Ga(e, t) {
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
function Qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ga(Object(r), !0).forEach(function (n) {
          cc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ga(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cc(e, t, r) {
  return (
    (t = sc(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function sc(e) {
  var t = fc(e, 'string');
  return er(t) == 'symbol' ? t : String(t);
}
function fc(e, t) {
  if (er(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (er(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function dc(e, t) {
  return yc(e) || pc(e, t) || vc(e, t) || mc();
}
function mc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vc(e, t) {
  if (e) {
    if (typeof e == 'string') return Za(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Za(e, t);
  }
}
function Za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function yc(e) {
  if (Array.isArray(e)) return e;
}
function bc(e, t, r, n, a, o) {
  var l = r[r.length - 1],
    i = function (f, s) {
      var m = dc(e, 2),
        d = m[0],
        p = m[1],
        v = Qa(Qa({}, s), {}, { from: si(e, r) });
      return (l === 1 && t[0] && d && !Fe(n, a, d, f, v.type) && n.isAfter(d, f)) ||
        (l === 0 && t[1] && p && !Fe(n, a, p, f, v.type) && n.isAfter(f, p))
        ? !0
        : o?.(f, v);
    };
  return i;
}
function Dn(e, t) {
  return Cc(e) || Sc(e, t) || hc(e, t) || gc();
}
function gc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hc(e, t) {
  if (e) {
    if (typeof e == 'string') return Ja(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ja(e, t);
  }
}
function Ja(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Cc(e) {
  if (Array.isArray(e)) return e;
}
function Lt(e, t, r, n) {
  switch (t) {
    case 'date':
    case 'week':
      return e.addMonth(r, n);
    case 'month':
    case 'quarter':
      return e.addYear(r, n);
    case 'year':
      return e.addYear(r, n * 10);
    case 'decade':
      return e.addYear(r, n * 100);
    default:
      return r;
  }
}
var En = [];
function Ii(e, t, r, n, a, o, l, i) {
  var u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : En,
    f = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : En,
    s = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : En,
    m = arguments.length > 11 ? arguments[11] : void 0,
    d = arguments.length > 12 ? arguments[12] : void 0,
    p = arguments.length > 13 ? arguments[13] : void 0,
    v = l === 'time',
    b = o || 0,
    y = function (N) {
      var j = e.getNow();
      return (v && (j = Zr(e, j)), u[N] || r[N] || j);
    },
    g = Dn(f, 2),
    w = g[0],
    h = g[1],
    C = lt(function () {
      return y(0);
    }, w),
    $ = Dn(C, 2),
    S = $[0],
    P = $[1],
    x = lt(function () {
      return y(1);
    }, h),
    M = Dn(x, 2),
    R = M[0],
    V = M[1],
    F = c.useMemo(
      function () {
        var T = [S, R][b];
        return v ? T : Zr(e, T, s[b]);
      },
      [v, S, R, b, e, s],
    ),
    k = function (N) {
      var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'panel',
        B = [P, V][b];
      B(N);
      var L = [S, R];
      ((L[b] = N),
        m &&
          (!Fe(e, t, S, L[0], l) || !Fe(e, t, R, L[1], l)) &&
          m(L, { source: j, range: b === 1 ? 'end' : 'start', mode: n }));
    },
    D = function (N, j) {
      if (i) {
        var B = { date: 'month', week: 'month', month: 'year', quarter: 'year' },
          L = B[l];
        if (L && !Fe(e, t, N, j, L)) return Lt(e, l, j, -1);
        if (l === 'year' && N) {
          var W = Math.floor(e.getYear(N) / 10),
            A = Math.floor(e.getYear(j) / 10);
          if (W !== A) return Lt(e, l, j, -1);
        }
      }
      return j;
    },
    O = c.useRef(null);
  return (
    dt(
      function () {
        if (a && !u[b]) {
          var T = v ? null : e.getNow();
          if (
            (O.current !== null && O.current !== b
              ? (T = [S, R][b ^ 1])
              : r[b]
                ? (T = b === 0 ? r[0] : D(r[0], r[1]))
                : r[b ^ 1] && (T = r[b ^ 1]),
            T)
          ) {
            d && e.isAfter(d, T) && (T = d);
            var N = i ? Lt(e, l, T, 1) : T;
            (p && e.isAfter(N, p) && (T = i ? Lt(e, l, p, -1) : p), k(T, 'reset'));
          }
        }
      },
      [a, b, r[b]],
    ),
    c.useEffect(
      function () {
        a ? (O.current = b) : (O.current = null);
      },
      [a, b],
    ),
    dt(
      function () {
        a && u && u[b] && k(u[b], 'reset');
      },
      [a, b],
    ),
    [F, k]
  );
}
function wc(e, t) {
  return Ic(e) || Oc(e, t) || Pc(e, t) || $c();
}
function $c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pc(e, t) {
  if (e) {
    if (typeof e == 'string') return eo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eo(e, t);
  }
}
function eo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Ic(e) {
  if (Array.isArray(e)) return e;
}
function _i(e, t) {
  var r = c.useRef(e),
    n = c.useState({}),
    a = wc(n, 2),
    o = a[1],
    l = function (f) {
      return f && t !== void 0 ? t : r.current;
    },
    i = function (f) {
      ((r.current = f), o({}));
    };
  return [l, i, l(!0)];
}
function it(e, t) {
  return Ac(e) || xc(e, t) || xi(e, t) || _c();
}
function _c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Ac(e) {
  if (Array.isArray(e)) return e;
}
function Ca(e) {
  return Ec(e) || Dc(e) || xi(e) || jc();
}
function jc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xi(e, t) {
  if (e) {
    if (typeof e == 'string') return Un(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Un(e, t);
  }
}
function Dc(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Ec(e) {
  if (Array.isArray(e)) return Un(e);
}
function Un(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Mc = [];
function Ai(e, t, r) {
  var n = function (l) {
      return l.map(function (i) {
        return Te(i, { generateConfig: e, locale: t, format: r[0] });
      });
    },
    a = function (l, i) {
      for (var u = Math.max(l.length, i.length), f = -1, s = 0; s < u; s += 1) {
        var m = l[s] || null,
          d = i[s] || null;
        if (m !== d && !Si(e, m, d)) {
          f = s;
          break;
        }
      }
      return [f < 0, f !== 0];
    };
  return [n, a];
}
function ji(e, t) {
  return Ca(e).sort(function (r, n) {
    return t.isAfter(r, n) ? 1 : -1;
  });
}
function Tc(e) {
  var t = _i(e),
    r = it(t, 2),
    n = r[0],
    a = r[1],
    o = Re(function () {
      a(e);
    });
  return (
    c.useEffect(
      function () {
        o();
      },
      [e],
    ),
    [n, a]
  );
}
function Di(e, t, r, n, a, o, l, i, u) {
  var f = lt(o, l),
    s = it(f, 2),
    m = s[0],
    d = s[1],
    p = m || Mc,
    v = Tc(p),
    b = it(v, 2),
    y = b[0],
    g = b[1],
    w = Ai(e, t, r),
    h = it(w, 2),
    C = h[0],
    $ = h[1],
    S = Re(function (x) {
      var M = Ca(x);
      if (n) for (var R = 0; R < 2; R += 1) M[R] = M[R] || null;
      else
        a &&
          (M = ji(
            M.filter(function (T) {
              return T;
            }),
            e,
          ));
      var V = $(y(), M),
        F = it(V, 2),
        k = F[0],
        D = F[1];
      if (!k && (g(M), i)) {
        var O = C(M);
        i(M, O, { range: D ? 'end' : 'start' });
      }
    }),
    P = function () {
      u && u(y());
    };
  return [p, d, y, S, P];
}
function Ei(e, t, r, n, a, o, l, i, u, f) {
  var s = e.generateConfig,
    m = e.locale,
    d = e.picker,
    p = e.onChange,
    v = e.allowEmpty,
    b = e.order,
    y = o.some(function (k) {
      return k;
    })
      ? !1
      : b,
    g = Ai(s, m, l),
    w = it(g, 2),
    h = w[0],
    C = w[1],
    $ = _i(t),
    S = it($, 2),
    P = S[0],
    x = S[1],
    M = Re(function () {
      x(t);
    });
  c.useEffect(
    function () {
      M();
    },
    [t],
  );
  var R = Re(function (k) {
      var D = k === null,
        O = Ca(k || P());
      if (D) for (var T = Math.max(o.length, O.length), N = 0; N < T; N += 1) o[N] || (O[N] = null);
      (y && O[0] && O[1] && (O = ji(O, s)), a(O));
      var j = O,
        B = it(j, 2),
        L = B[0],
        W = B[1],
        A = !L,
        _ = !W,
        E = v ? (!A || v[0]) && (!_ || v[1]) : !0,
        J = !b || A || _ || Fe(s, m, L, W, d) || s.isAfter(W, L),
        Y =
          (o[0] || !L || !f(L, { activeIndex: 0 })) &&
          (o[1] || !W || !f(W, { from: L, activeIndex: 1 })),
        U = D || (E && J && Y);
      if (U) {
        r(O);
        var Q = C(O, t),
          G = it(Q, 1),
          te = G[0];
        if (p && !te) {
          var X = O.every(function (K) {
            return !K;
          });
          p(D && X ? null : O, X ? null : h(O));
        }
      }
      return U;
    }),
    V = Re(function (k, D) {
      var O = Ut(P(), k, n()[k]);
      (x(O), D && R());
    }),
    F = !i && !u;
  return (
    Sa(
      !F,
      function () {
        F && (R(), a(t), M());
      },
      2,
    ),
    [V, R]
  );
}
function Mi(e, t, r, n, a) {
  return t !== 'date' && t !== 'time'
    ? !1
    : r !== void 0
      ? r
      : n !== void 0
        ? n
        : !a && (e === 'date' || e === 'time');
}
function kc(e) {
  return Vc(e) || Hc(e) || Nc(e) || Rc();
}
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nc(e, t) {
  if (e) {
    if (typeof e == 'string') return Kn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kn(e, t);
  }
}
function Hc(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Vc(e) {
  if (Array.isArray(e)) return Kn(e);
}
function Kn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fc(e, t, r, n, a, o) {
  var l = e;
  function i(m, d, p) {
    var v = o[m](l),
      b = p.find(function (h) {
        return h.value === v;
      });
    if (!b || b.disabled) {
      var y = p.filter(function (h) {
          return !h.disabled;
        }),
        g = kc(y).reverse(),
        w =
          g.find(function (h) {
            return h.value <= v;
          }) || y[0];
      w && ((v = w.value), (l = o[d](l, v)));
    }
    return v;
  }
  var u = i('getHour', 'setHour', t()),
    f = i('getMinute', 'setMinute', r(u)),
    s = i('getSecond', 'setSecond', n(u, f));
  return (i('getMillisecond', 'setMillisecond', a(u, f, s)), l);
}
function tr(e) {
  '@babel/helpers - typeof';
  return (
    (tr =
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
    tr(e)
  );
}
function to(e, t) {
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
function ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? to(Object(r), !0).forEach(function (n) {
          Wc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : to(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Wc(e, t, r) {
  return (
    (t = Yc(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Yc(e) {
  var t = Lc(e, 'string');
  return tr(t) == 'symbol' ? t : String(t);
}
function Lc(e, t) {
  if (tr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Hr(e, t) {
  return zc(e) || Kc(e, t) || Uc(e, t) || Bc();
}
function Bc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uc(e, t) {
  if (e) {
    if (typeof e == 'string') return no(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return no(e, t);
  }
}
function no(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function zc(e) {
  if (Array.isArray(e)) return e;
}
function Vr() {
  return [];
}
function Fr(e, t) {
  for (
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
      o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2,
      l = [],
      i = r >= 1 ? r | 0 : 1,
      u = e;
    u <= t;
    u += i
  ) {
    var f = a.includes(u);
    (!f || !n) && l.push({ label: ya(u, o), value: u, disabled: f });
  }
  return l;
}
function wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = t || {},
    a = n.use12Hours,
    o = n.hourStep,
    l = o === void 0 ? 1 : o,
    i = n.minuteStep,
    u = i === void 0 ? 1 : i,
    f = n.secondStep,
    s = f === void 0 ? 1 : f,
    m = n.millisecondStep,
    d = m === void 0 ? 100 : m,
    p = n.hideDisabledOptions,
    v = n.disabledTime,
    b = n.disabledHours,
    y = n.disabledMinutes,
    g = n.disabledSeconds,
    w = c.useMemo(
      function () {
        return r || e.getNow();
      },
      [r, e],
    ),
    h = c.useCallback(
      function (j) {
        var B = v?.(j) || {};
        return [
          B.disabledHours || b || Vr,
          B.disabledMinutes || y || Vr,
          B.disabledSeconds || g || Vr,
          B.disabledMilliseconds || Vr,
        ];
      },
      [v, b, y, g],
    ),
    C = c.useMemo(
      function () {
        return h(w);
      },
      [w, h],
    ),
    $ = Hr(C, 4),
    S = $[0],
    P = $[1],
    x = $[2],
    M = $[3],
    R = c.useCallback(
      function (j, B, L, W) {
        var A = Fr(0, 23, l, p, j()),
          _ = a
            ? A.map(function (U) {
                return ro(ro({}, U), {}, { label: ya(U.value % 12 || 12, 2) });
              })
            : A,
          E = function (Q) {
            return Fr(0, 59, u, p, B(Q));
          },
          J = function (Q, G) {
            return Fr(0, 59, s, p, L(Q, G));
          },
          Y = function (Q, G, te) {
            return Fr(0, 999, d, p, W(Q, G, te), 3);
          };
        return [_, E, J, Y];
      },
      [p, l, a, d, u, s],
    ),
    V = c.useMemo(
      function () {
        return R(S, P, x, M);
      },
      [R, S, P, x, M],
    ),
    F = Hr(V, 4),
    k = F[0],
    D = F[1],
    O = F[2],
    T = F[3],
    N = function (B, L) {
      var W = function () {
          return k;
        },
        A = D,
        _ = O,
        E = T;
      if (L) {
        var J = h(L),
          Y = Hr(J, 4),
          U = Y[0],
          Q = Y[1],
          G = Y[2],
          te = Y[3],
          X = R(U, Q, G, te),
          K = Hr(X, 4),
          Z = K[0],
          oe = K[1],
          de = K[2],
          ce = K[3];
        ((W = function () {
          return Z;
        }),
          (A = oe),
          (_ = de),
          (E = ce));
      }
      var Se = Fc(B, W, A, _, E, e);
      return Se;
    };
  return [N, k, D, O, T];
}
function qc(e, t) {
  return Zc(e) || Qc(e, t) || Gc(e, t) || Xc();
}
function Xc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gc(e, t) {
  if (e) {
    if (typeof e == 'string') return ao(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ao(e, t);
  }
}
function ao(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qc(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Zc(e) {
  if (Array.isArray(e)) return e;
}
function Jc(e) {
  var t = e.mode,
    r = e.internalMode,
    n = e.renderExtraFooter,
    a = e.showNow,
    o = e.showTime,
    l = e.onSubmit,
    i = e.onNow,
    u = e.invalid,
    f = e.needConfirm,
    s = e.generateConfig,
    m = e.disabledDate,
    d = c.useContext(Ge),
    p = d.prefixCls,
    v = d.locale,
    b = d.button,
    y = b === void 0 ? 'button' : b,
    g = d.classNames,
    w = d.styles,
    h = s.getNow(),
    C = wa(s, o, h),
    $ = qc(C, 1),
    S = $[0],
    P = n?.(t),
    x = m(h, { type: t }),
    M = function () {
      if (!x) {
        var T = S(h);
        i(T);
      }
    },
    R = ''.concat(p, '-now'),
    V = ''.concat(R, '-btn'),
    F =
      a &&
      c.createElement(
        'li',
        { className: R },
        c.createElement(
          'a',
          { 'className': ve(V, x && ''.concat(V, '-disabled')), 'aria-disabled': x, 'onClick': M },
          r === 'date' ? v.today : v.now,
        ),
      ),
    k =
      f &&
      c.createElement(
        'li',
        { className: ''.concat(p, '-ok') },
        c.createElement(y, { disabled: u, onClick: l }, v.ok),
      ),
    D = (F || k) && c.createElement('ul', { className: ''.concat(p, '-ranges') }, F, k);
  return !P && !D
    ? null
    : c.createElement(
        'div',
        { className: ve(''.concat(p, '-footer'), g.popup.footer), style: w.popup.footer },
        P && c.createElement('div', { className: ''.concat(p, '-footer-extra') }, P),
        D,
      );
}
function oo(e) {
  return ns(e) || rs(e) || ts(e) || es();
}
function es() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ts(e, t) {
  if (e) {
    if (typeof e == 'string') return zn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zn(e, t);
  }
}
function rs(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function ns(e) {
  if (Array.isArray(e)) return zn(e);
}
function zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ti(e, t, r) {
  function n(a, o) {
    var l = a.findIndex(function (u) {
      return Fe(e, t, u, o, r);
    });
    if (l === -1) return [].concat(oo(a), [o]);
    var i = oo(a);
    return (i.splice(l, 1), i);
  }
  return n;
}
var ki = c.createContext(null),
  wt = c.createContext(null);
function on() {
  return c.useContext(wt);
}
function At(e, t) {
  var r = e.prefixCls,
    n = e.generateConfig,
    a = e.locale,
    o = e.disabledDate,
    l = e.minDate,
    i = e.maxDate,
    u = e.cellRender,
    f = e.hoverValue,
    s = e.hoverRangeValue,
    m = e.onHover,
    d = e.values,
    p = e.pickerValue,
    v = e.onSelect,
    b = e.prevIcon,
    y = e.nextIcon,
    g = e.superPrevIcon,
    w = e.superNextIcon,
    h = c.useContext(ki),
    C = h.classNames,
    $ = h.styles,
    S = n.getNow(),
    P = {
      now: S,
      values: d,
      pickerValue: p,
      prefixCls: r,
      classNames: C,
      styles: $,
      disabledDate: o,
      minDate: l,
      maxDate: i,
      cellRender: u,
      hoverValue: f,
      hoverRangeValue: s,
      onHover: m,
      locale: a,
      generateConfig: n,
      onSelect: v,
      panelType: t,
      prevIcon: b,
      nextIcon: y,
      superPrevIcon: g,
      superNextIcon: w,
    };
  return [P, S];
}
var ft = c.createContext({});
function rr(e) {
  '@babel/helpers - typeof';
  return (
    (rr =
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
    rr(e)
  );
}
function io(e, t) {
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
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? io(Object(r), !0).forEach(function (n) {
          bt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : io(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bt(e, t, r) {
  return (
    (t = os(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function os(e) {
  var t = is(e, 'string');
  return rr(t) == 'symbol' ? t : String(t);
}
function is(e, t) {
  if (rr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ls(e, t) {
  return fs(e) || ss(e, t) || cs(e, t) || us();
}
function us() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cs(e, t) {
  if (e) {
    if (typeof e == 'string') return lo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lo(e, t);
  }
}
function lo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ss(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function fs(e) {
  if (Array.isArray(e)) return e;
}
function Sr(e) {
  for (
    var t = e.rowNum,
      r = e.colNum,
      n = e.baseDate,
      a = e.getCellDate,
      o = e.prefixColumn,
      l = e.rowClassName,
      i = e.titleFormat,
      u = e.getCellText,
      f = e.getCellClassName,
      s = e.headerCells,
      m = e.cellSelection,
      d = m === void 0 ? !0 : m,
      p = e.disabledDate,
      v = on(),
      b = v.prefixCls,
      y = v.classNames,
      g = v.styles,
      w = v.panelType,
      h = v.now,
      C = v.disabledDate,
      $ = v.cellRender,
      S = v.onHover,
      P = v.hoverValue,
      x = v.hoverRangeValue,
      M = v.generateConfig,
      R = v.values,
      V = v.locale,
      F = v.onSelect,
      k = p || C,
      D = ''.concat(b, '-cell'),
      O = c.useContext(ft),
      T = O.onCellDblClick,
      N = function (J) {
        return R.some(function (Y) {
          return Y && Fe(M, V, J, Y, w);
        });
      },
      j = [],
      B = 0;
    B < t;
    B += 1
  ) {
    for (
      var L = [],
        W = void 0,
        A = function () {
          var J = B * r + _,
            Y = a(n, J),
            U = k?.(Y, { type: w });
          _ === 0 && ((W = Y), o && L.push(o(W)));
          var Q = !1,
            G = !1,
            te = !1;
          if (d && x) {
            var X = ls(x, 2),
              K = X[0],
              Z = X[1];
            ((Q = an(M, K, Z, Y)), (G = Fe(M, V, Y, K, w)), (te = Fe(M, V, Y, Z, w)));
          }
          var oe = i ? Te(Y, { locale: V, format: i, generateConfig: M }) : void 0,
            de = c.createElement('div', { className: ''.concat(D, '-inner') }, u(Y));
          L.push(
            c.createElement(
              'td',
              {
                key: _,
                title: oe,
                className: ve(
                  D,
                  y.item,
                  as(
                    bt(
                      bt(
                        bt(
                          bt(
                            bt(
                              bt({}, ''.concat(D, '-disabled'), U),
                              ''.concat(D, '-hover'),
                              (P || []).some(function (ce) {
                                return Fe(M, V, Y, ce, w);
                              }),
                            ),
                            ''.concat(D, '-in-range'),
                            Q && !G && !te,
                          ),
                          ''.concat(D, '-range-start'),
                          G,
                        ),
                        ''.concat(D, '-range-end'),
                        te,
                      ),
                      ''.concat(b, '-cell-selected'),
                      !x && w !== 'week' && N(Y),
                    ),
                    f(Y),
                  ),
                ),
                style: g.item,
                onClick: function () {
                  U || F(Y);
                },
                onDoubleClick: function () {
                  !U && T && T();
                },
                onMouseEnter: function () {
                  U || S?.(Y);
                },
                onMouseLeave: function () {
                  U || S?.(null);
                },
              },
              $ ? $(Y, { prefixCls: b, originNode: de, today: h, type: w, locale: V }) : de,
            ),
          );
        },
        _ = 0;
      _ < r;
      _ += 1
    )
      A();
    j.push(c.createElement('tr', { key: B, className: l?.(W) }, L));
  }
  return c.createElement(
    'div',
    { className: ve(''.concat(b, '-body'), y.body), style: g.body },
    c.createElement(
      'table',
      { className: ve(''.concat(b, '-content'), y.content), style: g.content },
      s && c.createElement('thead', null, c.createElement('tr', null, s)),
      c.createElement('tbody', null, j),
    ),
  );
}
var Wr = { visibility: 'hidden' };
function jt(e) {
  var t = e.offset,
    r = e.superOffset,
    n = e.onChange,
    a = e.getStart,
    o = e.getEnd,
    l = e.children,
    i = on(),
    u = i.prefixCls,
    f = i.classNames,
    s = i.styles,
    m = i.prevIcon,
    d = m === void 0 ? '‹' : m,
    p = i.nextIcon,
    v = p === void 0 ? '›' : p,
    b = i.superPrevIcon,
    y = b === void 0 ? '«' : b,
    g = i.superNextIcon,
    w = g === void 0 ? '»' : g,
    h = i.minDate,
    C = i.maxDate,
    $ = i.generateConfig,
    S = i.locale,
    P = i.pickerValue,
    x = i.panelType,
    M = ''.concat(u, '-header'),
    R = c.useContext(ft),
    V = R.hidePrev,
    F = R.hideNext,
    k = R.hideHeader,
    D = c.useMemo(
      function () {
        if (!h || !t || !o) return !1;
        var E = o(t(-1, P));
        return !Rr($, S, E, h, x);
      },
      [h, t, P, o, $, S, x],
    ),
    O = c.useMemo(
      function () {
        if (!h || !r || !o) return !1;
        var E = o(r(-1, P));
        return !Rr($, S, E, h, x);
      },
      [h, r, P, o, $, S, x],
    ),
    T = c.useMemo(
      function () {
        if (!C || !t || !a) return !1;
        var E = a(t(1, P));
        return !Rr($, S, C, E, x);
      },
      [C, t, P, a, $, S, x],
    ),
    N = c.useMemo(
      function () {
        if (!C || !r || !a) return !1;
        var E = a(r(1, P));
        return !Rr($, S, C, E, x);
      },
      [C, r, P, a, $, S, x],
    ),
    j = function (J) {
      t && n(t(J, P));
    },
    B = function (J) {
      r && n(r(J, P));
    };
  if (k) return null;
  var L = ''.concat(M, '-prev-btn'),
    W = ''.concat(M, '-next-btn'),
    A = ''.concat(M, '-super-prev-btn'),
    _ = ''.concat(M, '-super-next-btn');
  return c.createElement(
    'div',
    { className: ve(M, f.header), style: s.header },
    r &&
      c.createElement(
        'button',
        {
          'type': 'button',
          'aria-label': S.previousYear,
          'onClick': function () {
            return B(-1);
          },
          'tabIndex': -1,
          'className': ve(A, O && ''.concat(A, '-disabled')),
          'disabled': O,
          'style': V ? Wr : {},
        },
        y,
      ),
    t &&
      c.createElement(
        'button',
        {
          'type': 'button',
          'aria-label': S.previousMonth,
          'onClick': function () {
            return j(-1);
          },
          'tabIndex': -1,
          'className': ve(L, D && ''.concat(L, '-disabled')),
          'disabled': D,
          'style': V ? Wr : {},
        },
        d,
      ),
    c.createElement('div', { className: ''.concat(M, '-view') }, l),
    t &&
      c.createElement(
        'button',
        {
          'type': 'button',
          'aria-label': S.nextMonth,
          'onClick': function () {
            return j(1);
          },
          'tabIndex': -1,
          'className': ve(W, T && ''.concat(W, '-disabled')),
          'disabled': T,
          'style': F ? Wr : {},
        },
        v,
      ),
    r &&
      c.createElement(
        'button',
        {
          'type': 'button',
          'aria-label': S.nextYear,
          'onClick': function () {
            return B(1);
          },
          'tabIndex': -1,
          'className': ve(_, N && ''.concat(_, '-disabled')),
          'disabled': N,
          'style': F ? Wr : {},
        },
        w,
      ),
  );
}
function nr(e) {
  '@babel/helpers - typeof';
  return (
    (nr =
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
    nr(e)
  );
}
function qn() {
  return (
    (qn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qn.apply(this, arguments)
  );
}
function Mn(e, t, r) {
  return (
    (t = ds(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ds(e) {
  var t = ms(e, 'string');
  return nr(t) == 'symbol' ? t : String(t);
}
function ms(e, t) {
  if (nr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function vs(e, t) {
  return gs(e) || bs(e, t) || ys(e, t) || ps();
}
function ps() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ys(e, t) {
  if (e) {
    if (typeof e == 'string') return uo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uo(e, t);
  }
}
function uo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bs(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function gs(e) {
  if (Array.isArray(e)) return e;
}
function ln(e) {
  var t = e.prefixCls,
    r = e.panelName,
    n = r === void 0 ? 'date' : r,
    a = e.locale,
    o = e.generateConfig,
    l = e.pickerValue,
    i = e.onPickerValueChange,
    u = e.onModeChange,
    f = e.mode,
    s = f === void 0 ? 'date' : f,
    m = e.disabledDate,
    d = e.onSelect,
    p = e.onHover,
    v = e.showWeek,
    b = ''.concat(t, '-').concat(n, '-panel'),
    y = ''.concat(t, '-cell'),
    g = s === 'week',
    w = At(e, s),
    h = vs(w, 2),
    C = h[0],
    $ = h[1],
    S = o.locale.getWeekFirstDay(a.locale),
    P = o.setDate(l, 1),
    x = xu(a.locale, o, P),
    M = o.getMonth(l),
    R = v === void 0 ? g : v,
    V = R
      ? function (A) {
          var _ = m?.(A, { type: 'week' });
          return c.createElement(
            'td',
            {
              key: 'week',
              className: ve(y, ''.concat(y, '-week'), Mn({}, ''.concat(y, '-disabled'), _)),
              onClick: function () {
                _ || d(A);
              },
              onMouseEnter: function () {
                _ || p?.(A);
              },
              onMouseLeave: function () {
                _ || p?.(null);
              },
            },
            c.createElement(
              'div',
              { className: ''.concat(y, '-inner') },
              o.locale.getWeek(a.locale, A),
            ),
          );
        }
      : null,
    F = [],
    k = a.shortWeekDays || (o.locale.getShortWeekDays ? o.locale.getShortWeekDays(a.locale) : []);
  V &&
    F.push(
      c.createElement(
        'th',
        { key: 'empty' },
        c.createElement(
          'span',
          { style: { width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 } },
          a.week,
        ),
      ),
    );
  for (var D = 0; D < jn; D += 1) F.push(c.createElement('th', { key: D }, k[(D + S) % jn]));
  var O = function (_, E) {
      return o.addDate(_, E);
    },
    T = function (_) {
      return Te(_, { locale: a, format: a.cellDateFormat, generateConfig: o });
    },
    N = function (_) {
      var E = Mn(
        Mn({}, ''.concat(t, '-cell-in-view'), ga(o, _, l)),
        ''.concat(t, '-cell-today'),
        ha(o, _, $),
      );
      return E;
    },
    j = a.shortMonths || (o.locale.getShortMonths ? o.locale.getShortMonths(a.locale) : []),
    B = c.createElement(
      'button',
      {
        'type': 'button',
        'aria-label': a.yearSelect,
        'key': 'year',
        'onClick': function () {
          u('year', l);
        },
        'tabIndex': -1,
        'className': ''.concat(t, '-year-btn'),
      },
      Te(l, { locale: a, format: a.yearFormat, generateConfig: o }),
    ),
    L = c.createElement(
      'button',
      {
        'type': 'button',
        'aria-label': a.monthSelect,
        'key': 'month',
        'onClick': function () {
          u('month', l);
        },
        'tabIndex': -1,
        'className': ''.concat(t, '-month-btn'),
      },
      a.monthFormat ? Te(l, { locale: a, format: a.monthFormat, generateConfig: o }) : j[M],
    ),
    W = a.monthBeforeYear ? [L, B] : [B, L];
  return c.createElement(
    wt.Provider,
    { value: C },
    c.createElement(
      'div',
      { className: ve(b, v && ''.concat(b, '-show-week')) },
      c.createElement(
        jt,
        {
          offset: function (_) {
            return o.addMonth(l, _);
          },
          superOffset: function (_) {
            return o.addYear(l, _);
          },
          onChange: i,
          getStart: function (_) {
            return o.setDate(_, 1);
          },
          getEnd: function (_) {
            var E = o.setDate(_, 1);
            return ((E = o.addMonth(E, 1)), o.addDate(E, -1));
          },
        },
        W,
      ),
      c.createElement(
        Sr,
        qn({ titleFormat: a.fieldDateFormat }, e, {
          colNum: jn,
          rowNum: 6,
          baseDate: x,
          headerCells: F,
          getCellDate: O,
          getCellText: T,
          getCellClassName: N,
          prefixColumn: V,
          cellSelection: !g,
        }),
      ),
    ),
  );
}
var hs = 1 / 3;
function Ss(e, t) {
  var r = c.useRef(!1),
    n = c.useRef(null),
    a = c.useRef(null),
    o = function () {
      return r.current;
    },
    l = function () {
      (ut.cancel(n.current), (r.current = !1));
    },
    i = c.useRef(),
    u = function () {
      var m = e.current;
      if (((a.current = null), (i.current = 0), m)) {
        var d = m.querySelector('[data-value="'.concat(t, '"]')),
          p = m.querySelector('li'),
          v = function b() {
            (l(), (r.current = !0), (i.current += 1));
            var y = m.scrollTop,
              g = p.offsetTop,
              w = d.offsetTop,
              h = w - g;
            if ((w === 0 && d !== p) || !ol(m)) {
              i.current <= 5 && (n.current = ut(b));
              return;
            }
            var C = y + (h - y) * hs,
              $ = Math.abs(h - C);
            if (a.current !== null && a.current < $) {
              l();
              return;
            }
            if (((a.current = $), $ <= 1)) {
              ((m.scrollTop = h), l());
              return;
            }
            ((m.scrollTop = C), (n.current = ut(b)));
          };
        d && p && v();
      }
    },
    f = Re(u);
  return [f, l, o];
}
function ar(e) {
  '@babel/helpers - typeof';
  return (
    (ar =
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
    ar(e)
  );
}
function co(e, t, r) {
  return (
    (t = Cs(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Cs(e) {
  var t = ws(e, 'string');
  return ar(t) == 'symbol' ? t : String(t);
}
function ws(e, t) {
  if (ar(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ar(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function $s(e) {
  return Is(e) || Os(e) || Ri(e) || Ps();
}
function Ps() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Os(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Is(e) {
  if (Array.isArray(e)) return Xn(e);
}
function _s(e, t) {
  return js(e) || As(e, t) || Ri(e, t) || xs();
}
function xs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ri(e, t) {
  if (e) {
    if (typeof e == 'string') return Xn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xn(e, t);
  }
}
function Xn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function As(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function js(e) {
  if (Array.isArray(e)) return e;
}
var Ds = 300;
function Es(e) {
  return e
    .map(function (t) {
      var r = t.value,
        n = t.label,
        a = t.disabled;
      return [r, n, a].join(',');
    })
    .join(';');
}
function Ht(e) {
  var t = e.units,
    r = e.value,
    n = e.optionalValue,
    a = e.type,
    o = e.onChange,
    l = e.onHover,
    i = e.onDblClick,
    u = e.changeOnScroll,
    f = on(),
    s = f.prefixCls,
    m = f.cellRender,
    d = f.now,
    p = f.locale,
    v = f.classNames,
    b = f.styles,
    y = ''.concat(s, '-time-panel'),
    g = ''.concat(s, '-time-panel-cell'),
    w = c.useRef(null),
    h = c.useRef(),
    C = function () {
      clearTimeout(h.current);
    },
    $ = Ss(w, r ?? n),
    S = _s($, 3),
    P = S[0],
    x = S[1],
    M = S[2];
  dt(
    function () {
      return (
        P(),
        C(),
        function () {
          (x(), C());
        }
      );
    },
    [r, n, Es(t)],
  );
  var R = function (k) {
      C();
      var D = k.target;
      !M() &&
        u &&
        (h.current = setTimeout(function () {
          var O = w.current,
            T = O.querySelector('li').offsetTop,
            N = Array.from(O.querySelectorAll('li')),
            j = N.map(function (_) {
              return _.offsetTop - T;
            }),
            B = j.map(function (_, E) {
              return t[E].disabled ? Number.MAX_SAFE_INTEGER : Math.abs(_ - D.scrollTop);
            }),
            L = Math.min.apply(Math, $s(B)),
            W = B.findIndex(function (_) {
              return _ === L;
            }),
            A = t[W];
          A && !A.disabled && o(A.value);
        }, Ds));
    },
    V = ''.concat(y, '-column');
  return c.createElement(
    'ul',
    { 'className': V, 'ref': w, 'data-type': a, 'onScroll': R },
    t.map(function (F) {
      var k = F.label,
        D = F.value,
        O = F.disabled,
        T = c.createElement('div', { className: ''.concat(g, '-inner') }, k);
      return c.createElement(
        'li',
        {
          'key': D,
          'style': b.item,
          'className': ve(
            g,
            v.item,
            co(co({}, ''.concat(g, '-selected'), r === D), ''.concat(g, '-disabled'), O),
          ),
          'onClick': function () {
            O || o(D);
          },
          'onDoubleClick': function () {
            !O && i && i();
          },
          'onMouseEnter': function () {
            l(D);
          },
          'onMouseLeave': function () {
            l(null);
          },
          'data-value': D,
        },
        m
          ? m(D, { prefixCls: s, originNode: T, today: d, type: 'time', subType: a, locale: p })
          : T,
      );
    }),
  );
}
function gt() {
  return (
    (gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gt.apply(this, arguments)
  );
}
function Vt(e, t) {
  return Rs(e) || ks(e, t) || Ts(e, t) || Ms();
}
function Ms() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ts(e, t) {
  if (e) {
    if (typeof e == 'string') return so(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return so(e, t);
  }
}
function so(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ks(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Rs(e) {
  if (Array.isArray(e)) return e;
}
function st(e) {
  return e < 12;
}
function Ns(e) {
  var t = e.showHour,
    r = e.showMinute,
    n = e.showSecond,
    a = e.showMillisecond,
    o = e.use12Hours,
    l = e.changeOnScroll,
    i = on(),
    u = i.prefixCls,
    f = i.classNames,
    s = i.styles,
    m = i.values,
    d = i.generateConfig,
    p = i.locale,
    v = i.onSelect,
    b = i.onHover,
    y = b === void 0 ? function () {} : b,
    g = i.pickerValue,
    w = m?.[0] || null,
    h = c.useContext(ft),
    C = h.onCellDblClick,
    $ = wa(d, e, w),
    S = Vt($, 5),
    P = S[0],
    x = S[1],
    M = S[2],
    R = S[3],
    V = S[4],
    F = function (I) {
      var q = w && d[I](w),
        ue = g && d[I](g);
      return [q, ue];
    },
    k = F('getHour'),
    D = Vt(k, 2),
    O = D[0],
    T = D[1],
    N = F('getMinute'),
    j = Vt(N, 2),
    B = j[0],
    L = j[1],
    W = F('getSecond'),
    A = Vt(W, 2),
    _ = A[0],
    E = A[1],
    J = F('getMillisecond'),
    Y = Vt(J, 2),
    U = Y[0],
    Q = Y[1],
    G = O === null ? null : st(O) ? 'am' : 'pm',
    te = c.useMemo(
      function () {
        return o
          ? st(O)
            ? x.filter(function (H) {
                return st(H.value);
              })
            : x.filter(function (H) {
                return !st(H.value);
              })
          : x;
      },
      [O, x, o],
    ),
    X = function (I, q) {
      var ue,
        Ce = I.filter(function (Ye) {
          return !Ye.disabled;
        });
      return q ?? (Ce == null || (ue = Ce[0]) === null || ue === void 0 ? void 0 : ue.value);
    },
    K = X(x, O),
    Z = c.useMemo(
      function () {
        return M(K);
      },
      [M, K],
    ),
    oe = X(Z, B),
    de = c.useMemo(
      function () {
        return R(K, oe);
      },
      [R, K, oe],
    ),
    ce = X(de, _),
    Se = c.useMemo(
      function () {
        return V(K, oe, ce);
      },
      [V, K, oe, ce],
    ),
    ie = X(Se, U),
    be = c.useMemo(
      function () {
        if (!o) return [];
        var H = d.getNow(),
          I = d.setHour(H, 6),
          q = d.setHour(H, 18),
          ue = function (Ye, Ue) {
            var Le = p.cellMeridiemFormat;
            return Le ? Te(Ye, { generateConfig: d, locale: p, format: Le }) : Ue;
          };
        return [
          {
            label: ue(I, 'AM'),
            value: 'am',
            disabled: x.every(function (Ce) {
              return Ce.disabled || !st(Ce.value);
            }),
          },
          {
            label: ue(q, 'PM'),
            value: 'pm',
            disabled: x.every(function (Ce) {
              return Ce.disabled || st(Ce.value);
            }),
          },
        ];
      },
      [x, o, d, p],
    ),
    we = function (I) {
      var q = P(I);
      v(q);
    },
    me = c.useMemo(
      function () {
        var H = w || g || d.getNow(),
          I = function (ue) {
            return ue != null;
          };
        return (
          I(O)
            ? ((H = d.setHour(H, O)),
              (H = d.setMinute(H, B)),
              (H = d.setSecond(H, _)),
              (H = d.setMillisecond(H, U)))
            : I(T)
              ? ((H = d.setHour(H, T)),
                (H = d.setMinute(H, L)),
                (H = d.setSecond(H, E)),
                (H = d.setMillisecond(H, Q)))
              : I(K) &&
                ((H = d.setHour(H, K)),
                (H = d.setMinute(H, oe)),
                (H = d.setSecond(H, ce)),
                (H = d.setMillisecond(H, ie))),
          H
        );
      },
      [w, g, O, B, _, U, K, oe, ce, ie, T, L, E, Q, d],
    ),
    se = function (I, q) {
      return I === null ? null : d[q](me, I);
    },
    De = function (I) {
      return se(I, 'setHour');
    },
    ye = function (I) {
      return se(I, 'setMinute');
    },
    We = function (I) {
      return se(I, 'setSecond');
    },
    Ee = function (I) {
      return se(I, 'setMillisecond');
    },
    $e = function (I) {
      return I === null
        ? null
        : I === 'am' && !st(O)
          ? d.setHour(me, O - 12)
          : I === 'pm' && st(O)
            ? d.setHour(me, O + 12)
            : me;
    },
    Pe = function (I) {
      we(De(I));
    },
    _e = function (I) {
      we(ye(I));
    },
    Oe = function (I) {
      we(We(I));
    },
    ke = function (I) {
      we(Ee(I));
    },
    ge = function (I) {
      we($e(I));
    },
    Be = function (I) {
      y(De(I));
    },
    Ae = function (I) {
      y(ye(I));
    },
    Me = function (I) {
      y(We(I));
    },
    he = function (I) {
      y(Ee(I));
    },
    ae = function (I) {
      y($e(I));
    },
    z = { onDblClick: C, changeOnScroll: l };
  return c.createElement(
    'div',
    { className: ve(''.concat(u, '-content'), f.content), style: s.content },
    t &&
      c.createElement(
        Ht,
        gt({ units: te, value: O, optionalValue: T, type: 'hour', onChange: Pe, onHover: Be }, z),
      ),
    r &&
      c.createElement(
        Ht,
        gt({ units: Z, value: B, optionalValue: L, type: 'minute', onChange: _e, onHover: Ae }, z),
      ),
    n &&
      c.createElement(
        Ht,
        gt({ units: de, value: _, optionalValue: E, type: 'second', onChange: Oe, onHover: Me }, z),
      ),
    a &&
      c.createElement(
        Ht,
        gt(
          { units: Se, value: U, optionalValue: Q, type: 'millisecond', onChange: ke, onHover: he },
          z,
        ),
      ),
    o &&
      c.createElement(
        Ht,
        gt({ units: be, value: G, type: 'meridiem', onChange: ge, onHover: ae }, z),
      ),
  );
}
function Hs(e, t) {
  return Ys(e) || Ws(e, t) || Fs(e, t) || Vs();
}
function Vs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fs(e, t) {
  if (e) {
    if (typeof e == 'string') return fo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fo(e, t);
  }
}
function fo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ws(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Ys(e) {
  if (Array.isArray(e)) return e;
}
function Ni(e) {
  var t = e.prefixCls,
    r = e.value,
    n = e.locale,
    a = e.generateConfig,
    o = e.showTime,
    l = o || {},
    i = l.format,
    u = ''.concat(t, '-time-panel'),
    f = At(e, 'time'),
    s = Hs(f, 1),
    m = s[0];
  return c.createElement(
    wt.Provider,
    { value: m },
    c.createElement(
      'div',
      { className: ve(u) },
      c.createElement(jt, null, r ? Te(r, { locale: n, format: i, generateConfig: a }) : ' '),
      c.createElement(Ns, o),
    ),
  );
}
function Gn() {
  return (
    (Gn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gn.apply(this, arguments)
  );
}
function Ls(e, t) {
  return zs(e) || Ks(e, t) || Us(e, t) || Bs();
}
function Bs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Us(e, t) {
  if (e) {
    if (typeof e == 'string') return mo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mo(e, t);
  }
}
function mo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ks(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function zs(e) {
  if (Array.isArray(e)) return e;
}
function qs(e) {
  var t = e.prefixCls,
    r = e.generateConfig,
    n = e.showTime,
    a = e.onSelect,
    o = e.value,
    l = e.pickerValue,
    i = e.onHover,
    u = ''.concat(t, '-datetime-panel'),
    f = wa(r, n),
    s = Ls(f, 1),
    m = s[0],
    d = function (y) {
      return o ? Zr(r, y, o) : Zr(r, y, l);
    },
    p = function (y) {
      i?.(y && d(y));
    },
    v = function (y) {
      var g = d(y);
      a(m(g, g));
    };
  return c.createElement(
    'div',
    { className: u },
    c.createElement(ln, Gn({}, e, { onSelect: v, onHover: p })),
    c.createElement(Ni, e),
  );
}
function or(e) {
  '@babel/helpers - typeof';
  return (
    (or =
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
    or(e)
  );
}
function Qn() {
  return (
    (Qn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qn.apply(this, arguments)
  );
}
function Xs(e, t, r) {
  return (
    (t = Gs(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Gs(e) {
  var t = Qs(e, 'string');
  return or(t) == 'symbol' ? t : String(t);
}
function Qs(e, t) {
  if (or(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (or(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Zs(e, t) {
  return rf(e) || tf(e, t) || ef(e, t) || Js();
}
function Js() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ef(e, t) {
  if (e) {
    if (typeof e == 'string') return vo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vo(e, t);
  }
}
function vo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tf(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function rf(e) {
  if (Array.isArray(e)) return e;
}
function nf(e) {
  var t = e.prefixCls,
    r = e.locale,
    n = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    l = e.onPickerValueChange,
    i = ''.concat(t, '-decade-panel'),
    u = At(e, 'decade'),
    f = Zs(u, 1),
    s = f[0],
    m = function (S) {
      var P = Math.floor(n.getYear(S) / 100) * 100;
      return n.setYear(S, P);
    },
    d = function (S) {
      var P = m(S);
      return n.addYear(P, 99);
    },
    p = m(a),
    v = d(a),
    b = n.addYear(p, -10),
    y = function (S, P) {
      return n.addYear(S, P * 10);
    },
    g = function (S) {
      var P = r.cellYearFormat,
        x = Te(S, { locale: r, format: P, generateConfig: n }),
        M = Te(n.addYear(S, 9), { locale: r, format: P, generateConfig: n });
      return ''.concat(x, '-').concat(M);
    },
    w = function (S) {
      return Xs({}, ''.concat(t, '-cell-in-view'), Ln(n, S, p) || Ln(n, S, v) || an(n, p, v, S));
    },
    h = o
      ? function ($, S) {
          var P = n.setDate($, 1),
            x = n.setMonth(P, 0),
            M = n.setYear(x, Math.floor(n.getYear(x) / 10) * 10),
            R = n.addYear(M, 10),
            V = n.addDate(R, -1);
          return o(M, S) && o(V, S);
        }
      : null,
    C = ''
      .concat(Te(p, { locale: r, format: r.yearFormat, generateConfig: n }), '-')
      .concat(Te(v, { locale: r, format: r.yearFormat, generateConfig: n }));
  return c.createElement(
    wt.Provider,
    { value: s },
    c.createElement(
      'div',
      { className: i },
      c.createElement(
        jt,
        {
          superOffset: function (S) {
            return n.addYear(a, S * 100);
          },
          onChange: l,
          getStart: m,
          getEnd: d,
        },
        C,
      ),
      c.createElement(
        Sr,
        Qn({}, e, {
          disabledDate: h,
          colNum: 3,
          rowNum: 4,
          baseDate: b,
          getCellDate: y,
          getCellText: g,
          getCellClassName: w,
        }),
      ),
    ),
  );
}
function ir(e) {
  '@babel/helpers - typeof';
  return (
    (ir =
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
    ir(e)
  );
}
function Zn() {
  return (
    (Zn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zn.apply(this, arguments)
  );
}
function af(e, t, r) {
  return (
    (t = of(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function of(e) {
  var t = lf(e, 'string');
  return ir(t) == 'symbol' ? t : String(t);
}
function lf(e, t) {
  if (ir(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ir(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function uf(e, t) {
  return df(e) || ff(e, t) || sf(e, t) || cf();
}
function cf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sf(e, t) {
  if (e) {
    if (typeof e == 'string') return po(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return po(e, t);
  }
}
function po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ff(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function df(e) {
  if (Array.isArray(e)) return e;
}
function mf(e) {
  var t = e.prefixCls,
    r = e.locale,
    n = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    l = e.onPickerValueChange,
    i = e.onModeChange,
    u = ''.concat(t, '-month-panel'),
    f = At(e, 'month'),
    s = uf(f, 1),
    m = s[0],
    d = n.setMonth(a, 0),
    p = r.shortMonths || (n.locale.getShortMonths ? n.locale.getShortMonths(r.locale) : []),
    v = function (C, $) {
      return n.addMonth(C, $);
    },
    b = function (C) {
      var $ = n.getMonth(C);
      return r.monthFormat ? Te(C, { locale: r, format: r.monthFormat, generateConfig: n }) : p[$];
    },
    y = function () {
      return af({}, ''.concat(t, '-cell-in-view'), !0);
    },
    g = o
      ? function (h, C) {
          var $ = n.setDate(h, 1),
            S = n.setMonth($, n.getMonth($) + 1),
            P = n.addDate(S, -1);
          return o($, C) && o(P, C);
        }
      : null,
    w = c.createElement(
      'button',
      {
        'type': 'button',
        'key': 'year',
        'aria-label': r.yearSelect,
        'onClick': function () {
          i('year');
        },
        'tabIndex': -1,
        'className': ''.concat(t, '-year-btn'),
      },
      Te(a, { locale: r, format: r.yearFormat, generateConfig: n }),
    );
  return c.createElement(
    wt.Provider,
    { value: m },
    c.createElement(
      'div',
      { className: u },
      c.createElement(
        jt,
        {
          superOffset: function (C) {
            return n.addYear(a, C);
          },
          onChange: l,
          getStart: function (C) {
            return n.setMonth(C, 0);
          },
          getEnd: function (C) {
            return n.setMonth(C, 11);
          },
        },
        w,
      ),
      c.createElement(
        Sr,
        Zn({}, e, {
          disabledDate: g,
          titleFormat: r.fieldMonthFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: d,
          getCellDate: v,
          getCellText: b,
          getCellClassName: y,
        }),
      ),
    ),
  );
}
function lr(e) {
  '@babel/helpers - typeof';
  return (
    (lr =
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
    lr(e)
  );
}
function Jn() {
  return (
    (Jn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jn.apply(this, arguments)
  );
}
function vf(e, t, r) {
  return (
    (t = pf(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function pf(e) {
  var t = yf(e, 'string');
  return lr(t) == 'symbol' ? t : String(t);
}
function yf(e, t) {
  if (lr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function bf(e, t) {
  return Cf(e) || Sf(e, t) || hf(e, t) || gf();
}
function gf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hf(e, t) {
  if (e) {
    if (typeof e == 'string') return yo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yo(e, t);
  }
}
function yo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sf(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Cf(e) {
  if (Array.isArray(e)) return e;
}
function wf(e) {
  var t = e.prefixCls,
    r = e.locale,
    n = e.generateConfig,
    a = e.pickerValue,
    o = e.onPickerValueChange,
    l = e.onModeChange,
    i = ''.concat(t, '-quarter-panel'),
    u = At(e, 'quarter'),
    f = bf(u, 1),
    s = f[0],
    m = n.setMonth(a, 0),
    d = function (g, w) {
      return n.addMonth(g, w * 3);
    },
    p = function (g) {
      return Te(g, { locale: r, format: r.cellQuarterFormat, generateConfig: n });
    },
    v = function () {
      return vf({}, ''.concat(t, '-cell-in-view'), !0);
    },
    b = c.createElement(
      'button',
      {
        'type': 'button',
        'key': 'year',
        'aria-label': r.yearSelect,
        'onClick': function () {
          l('year');
        },
        'tabIndex': -1,
        'className': ''.concat(t, '-year-btn'),
      },
      Te(a, { locale: r, format: r.yearFormat, generateConfig: n }),
    );
  return c.createElement(
    wt.Provider,
    { value: s },
    c.createElement(
      'div',
      { className: i },
      c.createElement(
        jt,
        {
          superOffset: function (g) {
            return n.addYear(a, g);
          },
          onChange: o,
          getStart: function (g) {
            return n.setMonth(g, 0);
          },
          getEnd: function (g) {
            return n.setMonth(g, 11);
          },
        },
        b,
      ),
      c.createElement(
        Sr,
        Jn({}, e, {
          titleFormat: r.fieldQuarterFormat,
          colNum: 4,
          rowNum: 1,
          baseDate: m,
          getCellDate: d,
          getCellText: p,
          getCellClassName: v,
        }),
      ),
    ),
  );
}
function ur(e) {
  '@babel/helpers - typeof';
  return (
    (ur =
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
    ur(e)
  );
}
function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
function $f(e, t, r) {
  return (
    (t = Pf(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Pf(e) {
  var t = Of(e, 'string');
  return ur(t) == 'symbol' ? t : String(t);
}
function Of(e, t) {
  if (ur(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ur(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function If(e, t) {
  return jf(e) || Af(e, t) || xf(e, t) || _f();
}
function _f() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xf(e, t) {
  if (e) {
    if (typeof e == 'string') return bo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bo(e, t);
  }
}
function bo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Af(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function jf(e) {
  if (Array.isArray(e)) return e;
}
function Df(e) {
  var t = e.prefixCls,
    r = e.generateConfig,
    n = e.locale,
    a = e.value,
    o = e.hoverValue,
    l = e.hoverRangeValue,
    i = n.locale,
    u = ''.concat(t, '-week-panel-row'),
    f = function (m) {
      var d = {};
      if (l) {
        var p = If(l, 2),
          v = p[0],
          b = p[1],
          y = Yt(r, i, v, m),
          g = Yt(r, i, b, m);
        ((d[''.concat(u, '-range-start')] = y),
          (d[''.concat(u, '-range-end')] = g),
          (d[''.concat(u, '-range-hover')] = !y && !g && an(r, v, b, m)));
      }
      return (
        o &&
          (d[''.concat(u, '-hover')] = o.some(function (w) {
            return Yt(r, i, m, w);
          })),
        ve(u, $f({}, ''.concat(u, '-selected'), !l && Yt(r, i, a, m)), d)
      );
    };
  return c.createElement(ln, ea({}, e, { mode: 'week', panelName: 'week', rowClassName: f }));
}
function cr(e) {
  '@babel/helpers - typeof';
  return (
    (cr =
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
    cr(e)
  );
}
function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function Ef(e, t, r) {
  return (
    (t = Mf(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Mf(e) {
  var t = Tf(e, 'string');
  return cr(t) == 'symbol' ? t : String(t);
}
function Tf(e, t) {
  if (cr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function kf(e, t) {
  return Vf(e) || Hf(e, t) || Nf(e, t) || Rf();
}
function Rf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nf(e, t) {
  if (e) {
    if (typeof e == 'string') return go(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return go(e, t);
  }
}
function go(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Hf(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Vf(e) {
  if (Array.isArray(e)) return e;
}
function Ff(e) {
  var t = e.prefixCls,
    r = e.locale,
    n = e.generateConfig,
    a = e.pickerValue,
    o = e.disabledDate,
    l = e.onPickerValueChange,
    i = e.onModeChange,
    u = ''.concat(t, '-year-panel'),
    f = At(e, 'year'),
    s = kf(f, 1),
    m = s[0],
    d = function (P) {
      var x = Math.floor(n.getYear(P) / 10) * 10;
      return n.setYear(P, x);
    },
    p = function (P) {
      var x = d(P);
      return n.addYear(x, 9);
    },
    v = d(a),
    b = p(a),
    y = n.addYear(v, -1),
    g = function (P, x) {
      return n.addYear(P, x);
    },
    w = function (P) {
      return Te(P, { locale: r, format: r.cellYearFormat, generateConfig: n });
    },
    h = function (P) {
      return Ef({}, ''.concat(t, '-cell-in-view'), St(n, P, v) || St(n, P, b) || an(n, v, b, P));
    },
    C = o
      ? function (S, P) {
          var x = n.setMonth(S, 0),
            M = n.setDate(x, 1),
            R = n.addYear(M, 1),
            V = n.addDate(R, -1);
          return o(M, P) && o(V, P);
        }
      : null,
    $ = c.createElement(
      'button',
      {
        'type': 'button',
        'key': 'decade',
        'aria-label': r.decadeSelect,
        'onClick': function () {
          i('decade');
        },
        'tabIndex': -1,
        'className': ''.concat(t, '-decade-btn'),
      },
      Te(v, { locale: r, format: r.yearFormat, generateConfig: n }),
      '-',
      Te(b, { locale: r, format: r.yearFormat, generateConfig: n }),
    );
  return c.createElement(
    wt.Provider,
    { value: m },
    c.createElement(
      'div',
      { className: u },
      c.createElement(
        jt,
        {
          superOffset: function (P) {
            return n.addYear(a, P * 10);
          },
          onChange: l,
          getStart: d,
          getEnd: p,
        },
        $,
      ),
      c.createElement(
        Sr,
        ta({}, e, {
          disabledDate: C,
          titleFormat: r.fieldYearFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: y,
          getCellDate: g,
          getCellText: w,
          getCellClassName: h,
        }),
      ),
    ),
  );
}
function sr(e) {
  '@babel/helpers - typeof';
  return (
    (sr =
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
    sr(e)
  );
}
function ra() {
  return (
    (ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ra.apply(this, arguments)
  );
}
function ho(e, t) {
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
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ho(Object(r), !0).forEach(function (n) {
          Hi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ho(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Hi(e, t, r) {
  return (
    (t = Wf(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Wf(e) {
  var t = Yf(e, 'string');
  return sr(t) == 'symbol' ? t : String(t);
}
function Yf(e, t) {
  if (sr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Co(e) {
  return Uf(e) || Bf(e) || Vi(e) || Lf();
}
function Lf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bf(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Uf(e) {
  if (Array.isArray(e)) return na(e);
}
function Ft(e, t) {
  return qf(e) || zf(e, t) || Vi(e, t) || Kf();
}
function Kf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vi(e, t) {
  if (e) {
    if (typeof e == 'string') return na(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return na(e, t);
  }
}
function na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zf(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function qf(e) {
  if (Array.isArray(e)) return e;
}
var Xf = {
  date: ln,
  datetime: qs,
  week: Df,
  month: mf,
  quarter: wf,
  year: Ff,
  decade: nf,
  time: Ni,
};
function Gf(e, t) {
  var r = e.classNames,
    n = e.styles,
    a = e.locale,
    o = e.generateConfig,
    l = e.direction,
    i = e.prefixCls,
    u = e.tabIndex,
    f = u === void 0 ? 0 : u,
    s = e.multiple,
    m = e.defaultValue,
    d = e.value,
    p = e.onChange,
    v = e.onSelect,
    b = e.defaultPickerValue,
    y = e.pickerValue,
    g = e.onPickerValueChange,
    w = e.mode,
    h = e.onPanelChange,
    C = e.picker,
    $ = C === void 0 ? 'date' : C,
    S = e.showTime,
    P = e.hoverValue,
    x = e.hoverRangeValue,
    M = e.cellRender,
    R = e.dateRender,
    V = e.monthCellRender,
    F = e.components,
    k = F === void 0 ? {} : F,
    D = e.hideHeader,
    O = c.useContext(Ge) || {},
    T = O.prefixCls,
    N = O.classNames,
    j = O.styles,
    B = T || i || 'rc-picker',
    L = c.useRef();
  c.useImperativeHandle(t, function () {
    return { nativeElement: L.current };
  });
  var W = bi(e),
    A = Ft(W, 4),
    _ = A[0],
    E = A[1],
    J = A[2],
    Y = A[3],
    U = vi(a, E),
    Q = $ === 'date' && S ? 'datetime' : $,
    G = c.useMemo(
      function () {
        return gi(Q, J, Y, _, U);
      },
      [Q, J, Y, _, U],
    ),
    te = o.getNow(),
    X = lt($ || 'date', w),
    K = Ft(X, 2),
    Z = K[0],
    oe = K[1],
    de = Z === 'date' && G ? 'datetime' : Z,
    ce = Ti(o, a, Q),
    Se = lt(m, d),
    ie = Ft(Se, 2),
    be = ie[0],
    we = ie[1],
    me = c.useMemo(
      function () {
        var I = Ct(be).filter(function (q) {
          return q;
        });
        return s ? I : I.slice(0, 1);
      },
      [be, s],
    ),
    se = Re(function (I) {
      (we(I),
        p &&
          (I === null ||
            me.length !== I.length ||
            me.some(function (q, ue) {
              return !Fe(o, a, q, I[ue], Q);
            })) &&
          p?.(s ? I : I[0]));
    }),
    De = Re(function (I) {
      if ((v?.(I), Z === $)) {
        var q = s ? ce(me, I) : [I];
        se(q);
      }
    }),
    ye = lt(b || me[0] || te, y),
    We = Ft(ye, 2),
    Ee = We[0],
    $e = We[1];
  c.useEffect(
    function () {
      me[0] && !y && $e(me[0]);
    },
    [me[0]],
  );
  var Pe = function (q, ue) {
      h?.(q || y, ue || Z);
    },
    _e = function (q) {
      var ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      ($e(q), g?.(q), ue && Pe(q));
    },
    Oe = function (q, ue) {
      (oe(q), ue && _e(ue), Pe(ue, q));
    },
    ke = function (q) {
      if ((De(q), _e(q), Z !== $)) {
        var ue = ['decade', 'year'],
          Ce = [].concat(ue, ['month']),
          Ye = {
            quarter: [].concat(ue, ['quarter']),
            week: [].concat(Co(Ce), ['week']),
            date: [].concat(Co(Ce), ['date']),
          },
          Ue = Ye[$] || Ce,
          Le = Ue.indexOf(Z),
          ze = Ue[Le + 1];
        ze && Oe(ze, q);
      }
    },
    ge = c.useMemo(
      function () {
        var I, q;
        if (Array.isArray(x)) {
          var ue = Ft(x, 2);
          ((I = ue[0]), (q = ue[1]));
        } else I = x;
        return !I && !q ? null : ((I = I || q), (q = q || I), o.isAfter(I, q) ? [q, I] : [I, q]);
      },
      [x, o],
    ),
    Be = ba(M, R, V),
    Ae = k[de] || Xf[de] || ln,
    Me = c.useMemo(
      function () {
        var I, q, ue, Ce;
        return {
          classNames:
            (I = (q = N?.popup) !== null && q !== void 0 ? q : r) !== null && I !== void 0 ? I : {},
          styles:
            (ue = (Ce = j?.popup) !== null && Ce !== void 0 ? Ce : n) !== null && ue !== void 0
              ? ue
              : {},
        };
      },
      [N, r, j, n],
    ),
    he = c.useContext(ft),
    ae = c.useMemo(
      function () {
        return So(So({}, he), {}, { hideHeader: D });
      },
      [he, D],
    ),
    z = ''.concat(B, '-panel'),
    H = nn(e, [
      'showWeek',
      'prevIcon',
      'nextIcon',
      'superPrevIcon',
      'superNextIcon',
      'disabledDate',
      'minDate',
      'maxDate',
      'onHover',
    ]);
  return c.createElement(
    ki.Provider,
    { value: Me },
    c.createElement(
      ft.Provider,
      { value: ae },
      c.createElement(
        'div',
        { ref: L, tabIndex: f, className: ve(z, Hi({}, ''.concat(z, '-rtl'), l === 'rtl')) },
        c.createElement(
          Ae,
          ra({}, H, {
            showTime: G,
            prefixCls: B,
            locale: U,
            generateConfig: o,
            onModeChange: Oe,
            pickerValue: Ee,
            onPickerValueChange: function (q) {
              _e(q, !0);
            },
            value: me[0],
            onSelect: ke,
            values: me,
            cellRender: Be,
            hoverRangeValue: ge,
            hoverValue: P,
          }),
        ),
      ),
    ),
  );
}
var Tn = c.memo(c.forwardRef(Gf));
function fr(e) {
  '@babel/helpers - typeof';
  return (
    (fr =
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
    fr(e)
  );
}
function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    aa.apply(this, arguments)
  );
}
function wo(e, t) {
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
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wo(Object(r), !0).forEach(function (n) {
          Qf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wo(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Qf(e, t, r) {
  return (
    (t = Zf(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Zf(e) {
  var t = Jf(e, 'string');
  return fr(t) == 'symbol' ? t : String(t);
}
function Jf(e, t) {
  if (fr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ed(e) {
  var t = e.picker,
    r = e.multiplePanel,
    n = e.pickerValue,
    a = e.onPickerValueChange,
    o = e.needConfirm,
    l = e.onSubmit,
    i = e.range,
    u = e.hoverValue,
    f = c.useContext(Ge),
    s = f.prefixCls,
    m = f.generateConfig,
    d = c.useCallback(
      function (w, h) {
        return Lt(m, t, w, h);
      },
      [m, t],
    ),
    p = c.useMemo(
      function () {
        return d(n, 1);
      },
      [n, d],
    ),
    v = function (h) {
      a(d(h, -1));
    },
    b = {
      onCellDblClick: function () {
        o && l();
      },
    },
    y = t === 'time',
    g = pt(pt({}, e), {}, { hoverValue: null, hoverRangeValue: null, hideHeader: y });
  return (
    i ? (g.hoverRangeValue = u) : (g.hoverValue = u),
    r
      ? c.createElement(
          'div',
          { className: ''.concat(s, '-panels') },
          c.createElement(
            ft.Provider,
            { value: pt(pt({}, b), {}, { hideNext: !0 }) },
            c.createElement(Tn, g),
          ),
          c.createElement(
            ft.Provider,
            { value: pt(pt({}, b), {}, { hidePrev: !0 }) },
            c.createElement(Tn, aa({}, g, { pickerValue: p, onPickerValueChange: v })),
          ),
        )
      : c.createElement(ft.Provider, { value: pt({}, b) }, c.createElement(Tn, g))
  );
}
function $o(e) {
  return typeof e == 'function' ? e() : e;
}
function td(e) {
  var t = e.prefixCls,
    r = e.presets,
    n = e.onClick,
    a = e.onHover;
  return r.length
    ? c.createElement(
        'div',
        { className: ''.concat(t, '-presets') },
        c.createElement(
          'ul',
          null,
          r.map(function (o, l) {
            var i = o.label,
              u = o.value;
            return c.createElement(
              'li',
              {
                key: l,
                onClick: function () {
                  n($o(u));
                },
                onMouseEnter: function () {
                  a($o(u));
                },
                onMouseLeave: function () {
                  a(null);
                },
              },
              i,
            );
          }),
        ),
      )
    : null;
}
function dr(e) {
  '@babel/helpers - typeof';
  return (
    (dr =
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
    dr(e)
  );
}
function Po(e, t) {
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
function rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Po(Object(r), !0).forEach(function (n) {
          oa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Po(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function oa(e, t, r) {
  return (
    (t = nd(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function nd(e) {
  var t = ad(e, 'string');
  return dr(t) == 'symbol' ? t : String(t);
}
function ad(e, t) {
  if (dr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Jr() {
  return (
    (Jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jr.apply(this, arguments)
  );
}
function Wt(e, t) {
  return ud(e) || ld(e, t) || id(e, t) || od();
}
function od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function id(e, t) {
  if (e) {
    if (typeof e == 'string') return Oo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Oo(e, t);
  }
}
function Oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ld(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function ud(e) {
  if (Array.isArray(e)) return e;
}
function Fi(e) {
  var t,
    r,
    n = e.panelRender,
    a = e.internalMode,
    o = e.picker,
    l = e.showNow,
    i = e.range,
    u = e.multiple,
    f = e.activeInfo,
    s = f === void 0 ? [0, 0, 0] : f,
    m = e.presets,
    d = e.onPresetHover,
    p = e.onPresetSubmit,
    v = e.onFocus,
    b = e.onBlur,
    y = e.onPanelMouseDown,
    g = e.direction,
    w = e.value,
    h = e.onSelect,
    C = e.isInvalid,
    $ = e.defaultOpenValue,
    S = e.onOk,
    P = e.onSubmit,
    x = e.classNames,
    M = e.styles,
    R = c.useContext(Ge),
    V = R.prefixCls,
    F = ''.concat(V, '-panel'),
    k = g === 'rtl',
    D = c.useRef(null),
    O = c.useRef(null),
    T = c.useState(0),
    N = Wt(T, 2),
    j = N[0],
    B = N[1],
    L = c.useState(0),
    W = Wt(L, 2),
    A = W[0],
    _ = W[1],
    E = c.useState(0),
    J = Wt(E, 2),
    Y = J[0],
    U = J[1],
    Q = function (Oe) {
      Oe.width && B(Oe.width);
    },
    G = Wt(s, 3),
    te = G[0],
    X = G[1],
    K = G[2],
    Z = c.useState(0),
    oe = Wt(Z, 2),
    de = oe[0],
    ce = oe[1];
  (c.useEffect(
    function () {
      ce(10);
    },
    [te],
  ),
    c.useEffect(
      function () {
        if (i && O.current) {
          var _e,
            Oe = ((_e = D.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) || 0,
            ke = O.current.getBoundingClientRect();
          if (!ke.height || ke.right < 0) {
            ce(function (Me) {
              return Math.max(0, Me - 1);
            });
            return;
          }
          var ge = (k ? X - Oe : te) - ke.left;
          if ((U(ge), j && j < K)) {
            var Be = k ? ke.right - (X - Oe + j) : te + Oe - ke.left - j,
              Ae = Math.max(0, Be);
            _(Ae);
          } else _(0);
        }
      },
      [de, k, j, te, X, K, i],
    ));
  function Se(_e) {
    return _e.filter(function (Oe) {
      return Oe;
    });
  }
  var ie = c.useMemo(
      function () {
        return Se(Ct(w));
      },
      [w],
    ),
    be = o === 'time' && !ie.length,
    we = c.useMemo(
      function () {
        return be ? Se([$]) : ie;
      },
      [be, ie, $],
    ),
    me = be ? $ : ie,
    se = c.useMemo(
      function () {
        return we.length
          ? we.some(function (_e) {
              return C(_e);
            })
          : !0;
      },
      [we, C],
    ),
    De = function () {
      (be && h($), S(), P());
    },
    ye = c.createElement(
      'div',
      { className: ''.concat(V, '-panel-layout') },
      c.createElement(td, { prefixCls: V, presets: m, onClick: p, onHover: d }),
      c.createElement(
        'div',
        null,
        c.createElement(ed, Jr({}, e, { value: me })),
        c.createElement(Jc, Jr({}, e, { showNow: u ? !1 : l, invalid: se, onSubmit: De })),
      ),
    );
  n && (ye = n(ye));
  var We = ''.concat(F, '-container'),
    Ee = 'marginLeft',
    $e = 'marginRight',
    Pe = c.createElement(
      'div',
      {
        onMouseDown: y,
        tabIndex: -1,
        className: ve(
          We,
          ''.concat(V, '-').concat(a, '-panel-container'),
          x == null || (t = x.popup) === null || t === void 0 ? void 0 : t.container,
        ),
        style: rd(
          oa(oa({}, k ? $e : Ee, A), k ? Ee : $e, 'auto'),
          M == null || (r = M.popup) === null || r === void 0 ? void 0 : r.container,
        ),
        onFocus: v,
        onBlur: b,
      },
      ye,
    );
  return (
    i &&
      (Pe = c.createElement(
        'div',
        {
          onMouseDown: y,
          ref: O,
          className: ve(
            ''.concat(V, '-range-wrapper'),
            ''.concat(V, '-').concat(o, '-range-wrapper'),
          ),
        },
        c.createElement('div', {
          ref: D,
          className: ''.concat(V, '-range-arrow'),
          style: { left: Y },
        }),
        c.createElement(Bo, { onResize: Q }, Pe),
      )),
    Pe
  );
}
function mr(e) {
  '@babel/helpers - typeof';
  return (
    (mr =
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
    mr(e)
  );
}
function Io(e, t) {
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
function _o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Io(Object(r), !0).forEach(function (n) {
          cd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Io(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cd(e, t, r) {
  return (
    (t = sd(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function sd(e) {
  var t = fd(e, 'string');
  return mr(t) == 'symbol' ? t : String(t);
}
function fd(e, t) {
  if (mr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Wi(e, t) {
  var r = e.format,
    n = e.maskFormat,
    a = e.generateConfig,
    o = e.locale,
    l = e.preserveInvalidOnBlur,
    i = e.inputReadOnly,
    u = e.required,
    f = e['aria-required'],
    s = e.onSubmit,
    m = e.onFocus,
    d = e.onBlur,
    p = e.onInputChange,
    v = e.onInvalid,
    b = e.open,
    y = e.onOpenChange,
    g = e.onKeyDown,
    w = e.onChange,
    h = e.activeHelp,
    C = e.name,
    $ = e.autoComplete,
    S = e.id,
    P = e.value,
    x = e.invalid,
    M = e.placeholder,
    R = e.disabled,
    V = e.activeIndex,
    F = e.allHelp,
    k = e.picker,
    D = function (A, _) {
      var E = a.locale.parse(o.locale, A, [_]);
      return E && a.isValidate(E) ? E : null;
    },
    O = r[0],
    T = c.useCallback(
      function (W) {
        return Te(W, { locale: o, format: O, generateConfig: a });
      },
      [o, a, O],
    ),
    N = c.useMemo(
      function () {
        return P.map(T);
      },
      [P, T],
    ),
    j = c.useMemo(
      function () {
        var W = k === 'time' ? 8 : 10,
          A = typeof O == 'function' ? O(a.getNow()).length : O.length;
        return Math.max(W, A) + 2;
      },
      [O, k, a],
    ),
    B = function (A) {
      for (var _ = 0; _ < r.length; _ += 1) {
        var E = r[_];
        if (typeof E == 'string') {
          var J = D(A, E);
          if (J) return J;
        }
      }
      return !1;
    },
    L = function (A) {
      function _(Y) {
        return A !== void 0 ? Y[A] : Y;
      }
      var E = va(e, { aria: !0, data: !0 }),
        J = _o(
          _o({}, E),
          {},
          {
            'format': n,
            'validateFormat': function (U) {
              return !!B(U);
            },
            'preserveInvalidOnBlur': l,
            'readOnly': i,
            'required': u,
            'aria-required': f,
            'name': C,
            'autoComplete': $,
            'size': j,
            'id': _(S),
            'value': _(N) || '',
            'invalid': _(x),
            'placeholder': _(M),
            'active': V === A,
            'helped': F || (h && V === A),
            'disabled': _(R),
            'onFocus': function (U) {
              m(U, A);
            },
            'onBlur': function (U) {
              d(U, A);
            },
            'onSubmit': s,
            'onChange': function (U) {
              p();
              var Q = B(U);
              if (Q) {
                (v(!1, A), w(Q, A));
                return;
              }
              v(!!U, A);
            },
            'onHelp': function () {
              y(!0, { index: A });
            },
            'onKeyDown': function (U) {
              var Q = !1;
              if (
                (g?.(U, function () {
                  Q = !0;
                }),
                !U.defaultPrevented && !Q)
              )
                switch (U.key) {
                  case 'Escape':
                    y(!1, { index: A });
                    break;
                  case 'Enter':
                    b || y(!0);
                    break;
                }
            },
          },
          t?.({ valueTexts: N }),
        );
      return (
        Object.keys(J).forEach(function (Y) {
          J[Y] === void 0 && delete J[Y];
        }),
        J
      );
    };
  return [L, T];
}
var dd = ['onMouseEnter', 'onMouseLeave'];
function Yi(e) {
  return c.useMemo(
    function () {
      return nn(e, dd);
    },
    [e],
  );
}
var md = ['icon', 'type'],
  vd = ['onClear'];
function en() {
  return (
    (en = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    en.apply(this, arguments)
  );
}
function Li(e, t) {
  if (e == null) return {};
  var r = pd(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((n = o[a]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function pd(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++) ((a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]));
  return r;
}
function un(e) {
  var t = e.icon,
    r = e.type,
    n = Li(e, md),
    a = c.useContext(Ge),
    o = a.prefixCls,
    l = a.classNames,
    i = a.styles;
  return t
    ? c.createElement(
        'span',
        en({ className: ve(''.concat(o, '-').concat(r), l.suffix), style: i.suffix }, n),
        t,
      )
    : null;
}
function ia(e) {
  var t = e.onClear,
    r = Li(e, vd);
  return c.createElement(
    un,
    en({}, r, {
      type: 'clear',
      role: 'button',
      onMouseDown: function (a) {
        a.preventDefault();
      },
      onClick: function (a) {
        (a.stopPropagation(), t());
      },
    }),
  );
}
function vr(e) {
  '@babel/helpers - typeof';
  return (
    (vr =
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
    vr(e)
  );
}
function yd(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function bd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, Bi(n.key), n));
  }
}
function gd(e, t, r) {
  return (t && bd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Yr(e, t, r) {
  return (
    (t = Bi(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Bi(e) {
  var t = hd(e, 'string');
  return vr(t) == 'symbol' ? t : String(t);
}
function hd(e, t) {
  if (vr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var kn = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS'],
  xo = '顧',
  Sd = (function () {
    function e(t) {
      (yd(this, e),
        Yr(this, 'format', void 0),
        Yr(this, 'maskFormat', void 0),
        Yr(this, 'cells', void 0),
        Yr(this, 'maskCells', void 0),
        (this.format = t));
      var r = kn
          .map(function (i) {
            return '('.concat(i, ')');
          })
          .join('|'),
        n = new RegExp(r, 'g');
      this.maskFormat = t.replace(n, function (i) {
        return xo.repeat(i.length);
      });
      var a = new RegExp('('.concat(kn.join('|'), ')')),
        o = (t.split(a) || []).filter(function (i) {
          return i;
        }),
        l = 0;
      ((this.cells = o.map(function (i) {
        var u = kn.includes(i),
          f = l,
          s = l + i.length;
        return ((l = s), { text: i, mask: u, start: f, end: s });
      })),
        (this.maskCells = this.cells.filter(function (i) {
          return i.mask;
        })));
    }
    return (
      gd(e, [
        {
          key: 'getSelection',
          value: function (r) {
            var n = this.maskCells[r] || {},
              a = n.start,
              o = n.end;
            return [a || 0, o || 0];
          },
        },
        {
          key: 'match',
          value: function (r) {
            for (var n = 0; n < this.maskFormat.length; n += 1) {
              var a = this.maskFormat[n],
                o = r[n];
              if (!o || (a !== xo && a !== o)) return !1;
            }
            return !0;
          },
        },
        {
          key: 'size',
          value: function () {
            return this.maskCells.length;
          },
        },
        {
          key: 'getMaskCellIndex',
          value: function (r) {
            for (var n = Number.MAX_SAFE_INTEGER, a = 0, o = 0; o < this.maskCells.length; o += 1) {
              var l = this.maskCells[o],
                i = l.start,
                u = l.end;
              if (r >= i && r <= u) return o;
              var f = Math.min(Math.abs(r - i), Math.abs(r - u));
              f < n && ((n = f), (a = o));
            }
            return a;
          },
        },
      ]),
      e
    );
  })();
function Cd(e) {
  var t = {
    YYYY: [0, 9999, new Date().getFullYear()],
    MM: [1, 12],
    DD: [1, 31],
    HH: [0, 23],
    mm: [0, 59],
    ss: [0, 59],
    SSS: [0, 999],
  };
  return t[e];
}
function pr(e) {
  '@babel/helpers - typeof';
  return (
    (pr =
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
    pr(e)
  );
}
var wd = [
  'className',
  'active',
  'showActiveCls',
  'suffixIcon',
  'format',
  'validateFormat',
  'onChange',
  'onInput',
  'helped',
  'onHelp',
  'onSubmit',
  'onKeyDown',
  'preserveInvalidOnBlur',
  'invalid',
  'clearIcon',
];
function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
function Ao(e, t, r) {
  return (
    (t = $d(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function $d(e) {
  var t = Pd(e, 'string');
  return pr(t) == 'symbol' ? t : String(t);
}
function Pd(e, t) {
  if (pr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function yt(e, t) {
  return xd(e) || _d(e, t) || Id(e, t) || Od();
}
function Od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Id(e, t) {
  if (e) {
    if (typeof e == 'string') return jo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jo(e, t);
  }
}
function jo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _d(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function xd(e) {
  if (Array.isArray(e)) return e;
}
function Ad(e, t) {
  if (e == null) return {};
  var r = jd(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((n = o[a]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function jd(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++) ((a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]));
  return r;
}
var ua = c.forwardRef(function (e, t) {
    var r = e.className,
      n = e.active,
      a = e.showActiveCls,
      o = a === void 0 ? !0 : a,
      l = e.suffixIcon,
      i = e.format,
      u = e.validateFormat,
      f = e.onChange;
    e.onInput;
    var s = e.helped,
      m = e.onHelp,
      d = e.onSubmit,
      p = e.onKeyDown,
      v = e.preserveInvalidOnBlur,
      b = v === void 0 ? !1 : v,
      y = e.invalid,
      g = e.clearIcon,
      w = Ad(e, wd),
      h = e.value,
      C = e.onFocus,
      $ = e.onBlur,
      S = e.onMouseUp,
      P = c.useContext(Ge),
      x = P.prefixCls,
      M = P.input,
      R = M === void 0 ? 'input' : M,
      V = P.classNames,
      F = P.styles,
      k = ''.concat(x, '-input'),
      D = c.useState(!1),
      O = yt(D, 2),
      T = O[0],
      N = O[1],
      j = c.useState(h),
      B = yt(j, 2),
      L = B[0],
      W = B[1],
      A = c.useState(''),
      _ = yt(A, 2),
      E = _[0],
      J = _[1],
      Y = c.useState(null),
      U = yt(Y, 2),
      Q = U[0],
      G = U[1],
      te = c.useState(null),
      X = yt(te, 2),
      K = X[0],
      Z = X[1],
      oe = L || '';
    c.useEffect(
      function () {
        W(h);
      },
      [h],
    );
    var de = c.useRef(null),
      ce = c.useRef(null),
      Se = c.useRef(!1);
    c.useImperativeHandle(t, function () {
      return {
        nativeElement: de.current,
        inputElement: ce.current,
        focus: function (ae) {
          ce.current.focus(ae);
        },
        blur: function () {
          ce.current.blur();
        },
      };
    });
    var ie = c.useMemo(
        function () {
          return new Sd(i || '');
        },
        [i],
      ),
      be = c.useMemo(
        function () {
          return s ? [0, 0] : ie.getSelection(Q);
        },
        [ie, Q, s],
      ),
      we = yt(be, 2),
      me = we[0],
      se = we[1],
      De = function (ae) {
        ae && ae !== i && ae !== h && m();
      },
      ye = Re(function (he) {
        (u(he) && f(he), W(he), De(he));
      }),
      We = function (ae) {
        if (!i) {
          var z = ae.target.value;
          (De(z), W(z), f(z));
        }
      },
      Ee = function (ae) {
        if (Se.current) {
          ae.preventDefault();
          return;
        }
        var z = ae.clipboardData.getData('text');
        u(z) && ye(z);
      },
      $e = function () {
        Se.current = !0;
      },
      Pe = function (ae) {
        var z = ae.target,
          H = z.selectionStart,
          I = ie.getMaskCellIndex(H);
        (G(I), Z({}), S?.(ae), (Se.current = !1));
      },
      _e = function (ae) {
        (N(!0), G(0), J(''), C(ae));
      },
      Oe = function (ae) {
        $(ae);
      },
      ke = function (ae) {
        (N(!1), Oe(ae));
      };
    Sa(n, function () {
      !n && !b && W(h);
    });
    var ge = function (ae) {
        (ae.key === 'Enter' && u(oe) && d(), p?.(ae));
      },
      Be = function (ae) {
        if (Se.current) {
          ae.preventDefault();
          return;
        }
        ge(ae);
        var z = ae.key,
          H = null,
          I = null,
          q = se - me,
          ue = i.slice(me, se),
          Ce = function (ze) {
            G(function (Je) {
              var je = Je + ze;
              return ((je = Math.max(je, 0)), (je = Math.min(je, ie.size() - 1)), je);
            });
          },
          Ye = function (ze) {
            var Je = Cd(ue),
              je = yt(Je, 3),
              ct = je[0],
              qe = je[1],
              et = je[2],
              $t = oe.slice(me, se),
              Pt = Number($t);
            if (isNaN(Pt)) return String(et || (ze > 0 ? ct : qe));
            var Dt = Pt + ze,
              tt = qe - ct + 1;
            return String(ct + ((tt + Dt - ct) % tt));
          };
        switch (z) {
          case 'Backspace':
          case 'Delete':
            ((H = ''), (I = ue));
            break;
          case 'ArrowLeft':
            ((H = ''), Ce(-1));
            break;
          case 'ArrowRight':
            ((H = ''), Ce(1));
            break;
          case 'ArrowUp':
            ((H = ''), (I = Ye(1)));
            break;
          case 'ArrowDown':
            ((H = ''), (I = Ye(-1)));
            break;
          default:
            isNaN(Number(z)) || ((H = E + z), (I = H));
            break;
        }
        if ((H !== null && (J(H), H.length >= q && (Ce(1), J(''))), I !== null)) {
          var Ue = oe.slice(0, me) + ya(I, q) + oe.slice(se);
          ye(Ue.slice(0, i.length));
        }
        Z({});
      },
      Ae = c.useRef();
    dt(
      function () {
        if (!(!T || !i || Se.current)) {
          if (!ie.match(oe)) {
            ye(i);
            return;
          }
          return (
            ce.current.setSelectionRange(me, se),
            (Ae.current = ut(function () {
              ce.current.setSelectionRange(me, se);
            })),
            function () {
              ut.cancel(Ae.current);
            }
          );
        }
      },
      [ie, i, T, oe, Q, me, se, K, ye],
    );
    var Me = i
      ? { onFocus: _e, onBlur: ke, onKeyDown: Be, onMouseDown: $e, onMouseUp: Pe, onPaste: Ee }
      : {};
    return c.createElement(
      'div',
      {
        ref: de,
        className: ve(
          k,
          Ao(Ao({}, ''.concat(k, '-active'), n && o), ''.concat(k, '-placeholder'), s),
          r,
        ),
      },
      c.createElement(
        R,
        la(
          { 'ref': ce, 'aria-invalid': y, 'autoComplete': 'off' },
          w,
          { onKeyDown: ge, onBlur: Oe },
          Me,
          { value: oe, onChange: We, className: V.input, style: F.input },
        ),
      ),
      c.createElement(un, { type: 'suffix', icon: l }),
      g,
    );
  }),
  Dd = [
    'id',
    'prefix',
    'clearIcon',
    'suffixIcon',
    'separator',
    'activeIndex',
    'activeHelp',
    'allHelp',
    'focused',
    'onFocus',
    'onBlur',
    'onKeyDown',
    'locale',
    'generateConfig',
    'placeholder',
    'className',
    'style',
    'onClick',
    'onClear',
    'value',
    'onChange',
    'onSubmit',
    'onInputChange',
    'format',
    'maskFormat',
    'preserveInvalidOnBlur',
    'onInvalid',
    'disabled',
    'invalid',
    'inputReadOnly',
    'direction',
    'onOpenChange',
    'onActiveInfo',
    'placement',
    'onMouseDown',
    'required',
    'aria-required',
    'autoFocus',
    'tabIndex',
  ],
  Ed = ['index'];
function Kt() {
  return (
    (Kt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Kt.apply(this, arguments)
  );
}
function Do(e, t) {
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
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Do(Object(r), !0).forEach(function (n) {
          Bt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Do(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Bt(e, t, r) {
  return (
    (t = Md(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Md(e) {
  var t = Td(e, 'string');
  return xt(t) == 'symbol' ? t : String(t);
}
function Td(e, t) {
  if (xt(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xt(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Eo(e, t) {
  return Hd(e) || Nd(e, t) || Rd(e, t) || kd();
}
function kd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rd(e, t) {
  if (e) {
    if (typeof e == 'string') return Mo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mo(e, t);
  }
}
function Mo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Nd(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Hd(e) {
  if (Array.isArray(e)) return e;
}
function xt(e) {
  '@babel/helpers - typeof';
  return (
    (xt =
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
    xt(e)
  );
}
function To(e, t) {
  if (e == null) return {};
  var r = Vd(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((n = o[a]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function Vd(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++) ((a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]));
  return r;
}
function Fd(e, t) {
  var r = e.id,
    n = e.prefix,
    a = e.clearIcon,
    o = e.suffixIcon,
    l = e.separator,
    i = l === void 0 ? '~' : l,
    u = e.activeIndex;
  (e.activeHelp, e.allHelp);
  var f = e.focused;
  (e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig);
  var s = e.placeholder,
    m = e.className,
    d = e.style,
    p = e.onClick,
    v = e.onClear,
    b = e.value;
  (e.onChange,
    e.onSubmit,
    e.onInputChange,
    e.format,
    e.maskFormat,
    e.preserveInvalidOnBlur,
    e.onInvalid);
  var y = e.disabled,
    g = e.invalid;
  e.inputReadOnly;
  var w = e.direction;
  e.onOpenChange;
  var h = e.onActiveInfo;
  e.placement;
  var C = e.onMouseDown;
  (e.required, e['aria-required']);
  var $ = e.autoFocus,
    S = e.tabIndex,
    P = To(e, Dd),
    x = w === 'rtl',
    M = c.useContext(Ge),
    R = M.prefixCls,
    V = M.classNames,
    F = M.styles,
    k = c.useMemo(
      function () {
        if (typeof r == 'string') return [r];
        var X = r || {};
        return [X.start, X.end];
      },
      [r],
    ),
    D = c.useRef(),
    O = c.useRef(),
    T = c.useRef(),
    N = function (K) {
      var Z;
      return (Z = [O, T][K]) === null || Z === void 0 ? void 0 : Z.current;
    };
  c.useImperativeHandle(t, function () {
    return {
      nativeElement: D.current,
      focus: function (K) {
        if (xt(K) === 'object') {
          var Z,
            oe = K || {},
            de = oe.index,
            ce = de === void 0 ? 0 : de,
            Se = To(oe, Ed);
          (Z = N(ce)) === null || Z === void 0 || Z.focus(Se);
        } else {
          var ie;
          (ie = N(K ?? 0)) === null || ie === void 0 || ie.focus();
        }
      },
      blur: function () {
        var K, Z;
        ((K = N(0)) === null || K === void 0 || K.blur(),
          (Z = N(1)) === null || Z === void 0 || Z.blur());
      },
    };
  });
  var j = Yi(P),
    B = c.useMemo(
      function () {
        return Array.isArray(s) ? s : [s, s];
      },
      [s],
    ),
    L = Wi(Lr(Lr({}, e), {}, { id: k, placeholder: B })),
    W = Eo(L, 1),
    A = W[0],
    _ = c.useState({ position: 'absolute', width: 0 }),
    E = Eo(_, 2),
    J = E[0],
    Y = E[1],
    U = Re(function () {
      var X = N(u);
      if (X) {
        var K = X.nativeElement.getBoundingClientRect(),
          Z = D.current.getBoundingClientRect(),
          oe = K.left - Z.left;
        (Y(function (de) {
          return Lr(Lr({}, de), {}, { width: K.width, left: oe });
        }),
          h([K.left, K.right, Z.width]));
      }
    });
  c.useEffect(
    function () {
      U();
    },
    [u],
  );
  var Q = a && ((b[0] && !y[0]) || (b[1] && !y[1])),
    G = $ && !y[0],
    te = $ && !G && !y[1];
  return c.createElement(
    Bo,
    { onResize: U },
    c.createElement(
      'div',
      Kt({}, j, {
        className: ve(
          R,
          ''.concat(R, '-range'),
          Bt(
            Bt(
              Bt(
                Bt({}, ''.concat(R, '-focused'), f),
                ''.concat(R, '-disabled'),
                y.every(function (X) {
                  return X;
                }),
              ),
              ''.concat(R, '-invalid'),
              g.some(function (X) {
                return X;
              }),
            ),
            ''.concat(R, '-rtl'),
            x,
          ),
          m,
        ),
        style: d,
        ref: D,
        onClick: p,
        onMouseDown: function (K) {
          var Z = K.target;
          (Z !== O.current.inputElement && Z !== T.current.inputElement && K.preventDefault(),
            C?.(K));
        },
      }),
      n &&
        c.createElement(
          'div',
          { className: ve(''.concat(R, '-prefix'), V.prefix), style: F.prefix },
          n,
        ),
      c.createElement(
        ua,
        Kt({ ref: O }, A(0), {
          'className': ''.concat(R, '-input-start'),
          'autoFocus': G,
          'tabIndex': S,
          'date-range': 'start',
        }),
      ),
      c.createElement('div', { className: ''.concat(R, '-range-separator') }, i),
      c.createElement(
        ua,
        Kt({ ref: T }, A(1), {
          'className': ''.concat(R, '-input-end'),
          'autoFocus': te,
          'tabIndex': S,
          'date-range': 'end',
        }),
      ),
      c.createElement('div', { className: ''.concat(R, '-active-bar'), style: J }),
      c.createElement(un, { type: 'suffix', icon: o }),
      Q && c.createElement(ia, { icon: a, onClear: v }),
    ),
  );
}
var Wd = c.forwardRef(Fd);
function yr(e) {
  '@babel/helpers - typeof';
  return (
    (yr =
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
    yr(e)
  );
}
function ko(e, t) {
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
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ko(Object(r), !0).forEach(function (n) {
          Yd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ko(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Yd(e, t, r) {
  return (
    (t = Ld(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ld(e) {
  var t = Bd(e, 'string');
  return yr(t) == 'symbol' ? t : String(t);
}
function Bd(e, t) {
  if (yr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ui(e, t) {
  return c.useMemo(
    function () {
      var r = Br(Br({}, e), {}, { popup: e?.popup || {} }),
        n = Br(Br({}, t), {}, { popup: t?.popup || {} });
      return [r, n];
    },
    [e, t],
  );
}
function br(e) {
  '@babel/helpers - typeof';
  return (
    (br =
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
    br(e)
  );
}
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zt.apply(this, arguments)
  );
}
function Ro(e) {
  return zd(e) || Kd(e) || Ki(e) || Ud();
}
function Ud() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kd(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function zd(e) {
  if (Array.isArray(e)) return ca(e);
}
function No(e, t) {
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
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? No(Object(r), !0).forEach(function (n) {
          qd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : No(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function qd(e, t, r) {
  return (
    (t = Xd(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Xd(e) {
  var t = Gd(e, 'string');
  return br(t) == 'symbol' ? t : String(t);
}
function Gd(e, t) {
  if (br(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ke(e, t) {
  return Jd(e) || Zd(e, t) || Ki(e, t) || Qd();
}
function Qd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(e, t) {
  if (e) {
    if (typeof e == 'string') return ca(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ca(e, t);
  }
}
function ca(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zd(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function Jd(e) {
  if (Array.isArray(e)) return e;
}
function Ho(e, t) {
  var r = e ?? t;
  return Array.isArray(r) ? r : [r, r];
}
function Kr(e) {
  return e === 1 ? 'end' : 'start';
}
function em(e, t) {
  var r = Ci(e, function () {
      var pe = e.disabled,
        re = e.allowEmpty,
        le = Ho(pe, !1),
        xe = Ho(re, !1);
      return { disabled: le, allowEmpty: xe };
    }),
    n = Ke(r, 6),
    a = n[0],
    o = n[1],
    l = n[2],
    i = n[3],
    u = n[4],
    f = n[5],
    s = a.prefixCls,
    m = a.rootClassName,
    d = a.styles,
    p = a.classNames,
    v = a.previewValue,
    b = a.defaultValue,
    y = a.value,
    g = a.needConfirm,
    w = a.onKeyDown,
    h = a.disabled,
    C = a.allowEmpty,
    $ = a.disabledDate,
    S = a.minDate,
    P = a.maxDate,
    x = a.defaultOpen,
    M = a.open,
    R = a.onOpenChange,
    V = a.locale,
    F = a.generateConfig,
    k = a.picker,
    D = a.showNow,
    O = a.showToday,
    T = a.showTime,
    N = a.mode,
    j = a.onPanelChange,
    B = a.onCalendarChange,
    L = a.onOk,
    W = a.defaultPickerValue,
    A = a.pickerValue,
    _ = a.onPickerValueChange,
    E = a.inputReadOnly,
    J = a.suffixIcon,
    Y = a.onFocus,
    U = a.onBlur,
    Q = a.presets,
    G = a.ranges,
    te = a.components,
    X = a.cellRender,
    K = a.dateRender,
    Z = a.monthCellRender,
    oe = a.onClick,
    de = $i(t),
    ce = Ui(p, d),
    Se = Ke(ce, 2),
    ie = Se[0],
    be = Se[1],
    we = wi(M, x, h, R),
    me = Ke(we, 2),
    se = me[0],
    De = me[1],
    ye = function (re, le) {
      (h.some(function (xe) {
        return !xe;
      }) ||
        !re) &&
        De(re, le);
    },
    We = Di(F, V, i, !0, !1, b, y, B, L),
    Ee = Ke(We, 5),
    $e = Ee[0],
    Pe = Ee[1],
    _e = Ee[2],
    Oe = Ee[3],
    ke = Ee[4],
    ge = _e(),
    Be = Oi(h, C, se),
    Ae = Ke(Be, 9),
    Me = Ae[0],
    he = Ae[1],
    ae = Ae[2],
    z = Ae[3],
    H = Ae[4],
    I = Ae[5],
    q = Ae[6],
    ue = Ae[7],
    Ce = Ae[8],
    Ye = function (re, le) {
      (he(!0), Y?.(re, { range: Kr(le ?? z) }));
    },
    Ue = function (re, le) {
      (he(!1), U?.(re, { range: Kr(le ?? z) }));
    },
    Le = c.useMemo(
      function () {
        if (!T) return null;
        var pe = T.disabledTime,
          re = pe
            ? function (le) {
                var xe = Kr(z),
                  Ne = si(ge, q, z);
                return pe(le, xe, { from: Ne });
              }
            : void 0;
        return Ur(Ur({}, T), {}, { disabledTime: re });
      },
      [T, z, ge, q],
    ),
    ze = lt([k, k], N),
    Je = Ke(ze, 2),
    je = Je[0],
    ct = Je[1],
    qe = je[z] || k,
    et = qe === 'date' && Le ? 'datetime' : qe,
    $t = et === k && et !== 'time',
    Pt = Mi(k, qe, D, O, !0),
    Dt = Ei(a, $e, Pe, _e, Oe, h, i, Me, se, f),
    tt = Ke(Dt, 2),
    wr = tt[0],
    Et = tt[1],
    $r = bc(ge, h, q, F, V, $),
    cn = di(ge, f, C),
    Pr = Ke(cn, 2),
    sn = Pr[0],
    fn = Pr[1],
    Or = Ii(F, V, ge, je, se, z, o, $t, W, A, Le?.defaultOpenValue, _, S, P),
    Ir = Ke(Or, 2),
    dn = Ir[0],
    _r = Ir[1],
    rt = Re(function (pe, re, le) {
      var xe = Ut(je, z, re);
      if (((xe[0] !== je[0] || xe[1] !== je[1]) && ct(xe), j && le !== !1)) {
        var Ne = Ro(ge);
        (pe && (Ne[z] = pe), j(Ne, xe));
      }
    }),
    Mt = function (re, le) {
      return Ut(ge, le, re);
    },
    Qe = function (re, le) {
      var xe = ge;
      (re && (xe = Mt(re, z)), ue(z));
      var Ne = I(xe);
      (Oe(xe),
        wr(z, Ne === null),
        Ne === null ? ye(!1, { force: !0 }) : le || de.current.focus({ index: Ne }));
    },
    mn = function (re) {
      var le,
        xe = re.target.getRootNode();
      if (
        !de.current.nativeElement.contains(
          (le = xe.activeElement) !== null && le !== void 0 ? le : document.activeElement,
        )
      ) {
        var Ne = h.findIndex(function (nl) {
          return !nl;
        });
        Ne >= 0 && de.current.focus({ index: Ne });
      }
      (ye(!0), oe?.(re));
    },
    xr = function () {
      (Et(null), ye(!1, { force: !0 }));
    },
    vn = c.useState(null),
    Ar = Ke(vn, 2),
    pn = Ar[0],
    jr = Ar[1],
    nt = c.useState(null),
    Tt = Ke(nt, 2),
    Ot = Tt[0],
    Dr = Tt[1],
    kt = c.useMemo(
      function () {
        return Ot || ge;
      },
      [ge, Ot],
    );
  c.useEffect(
    function () {
      se || Dr(null);
    },
    [se],
  );
  var yn = c.useState([0, 0, 0]),
    Er = Ke(yn, 2),
    Mr = Er[0],
    bn = Er[1],
    Tr = function (re, le) {
      v === 'hover' && (Dr(re), jr(le));
    },
    gn = Pi(Q, G),
    hn = function (re) {
      Tr(re, 'preset');
    },
    Sn = function (re) {
      var le = Et(re);
      le && (ae('preset-click'), ye(!1, { force: !0 }));
    },
    Cn = function (re) {
      Qe(re);
    },
    wn = function (re) {
      Tr(re ? Mt(re, z) : null, 'cell');
    },
    $n = function (re) {
      (ye(!0), Ye(re));
    },
    Pn = function () {
      ae('panel');
    },
    On = function (re) {
      var le = Ut(ge, z, re);
      (Oe(le), !g && !l && o === et && Qe(re));
    },
    In = function () {
      ye(!1);
    },
    _n = ba(X, K, Z, Kr(z)),
    xn = ge[z] || null,
    An = Re(function (pe) {
      return f(pe, { activeIndex: z });
    }),
    ne = c.useMemo(
      function () {
        var pe = va(a, !1),
          re = oi(
            a,
            [].concat(Ro(Object.keys(pe)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
              'disabledTime',
              'classNames',
              'styles',
            ]),
          );
        return re;
      },
      [a],
    ),
    ee = c.createElement(
      Fi,
      zt({}, ne, {
        showNow: Pt,
        showTime: Le,
        range: !0,
        multiplePanel: $t,
        activeInfo: Mr,
        disabledDate: $r,
        onFocus: $n,
        onBlur: Ue,
        onPanelMouseDown: Pn,
        picker: k,
        mode: qe,
        internalMode: et,
        onPanelChange: rt,
        format: u,
        value: xn,
        isInvalid: An,
        onChange: null,
        onSelect: On,
        pickerValue: dn,
        defaultOpenValue: Ct(T?.defaultOpenValue)[z],
        onPickerValueChange: _r,
        hoverValue: kt,
        onHover: wn,
        needConfirm: g,
        onSubmit: Qe,
        onOk: ke,
        presets: gn,
        onPresetHover: hn,
        onPresetSubmit: Sn,
        onNow: Cn,
        cellRender: _n,
        classNames: ie,
        styles: be,
      }),
    ),
    Ve = function (re, le) {
      var xe = Mt(re, le);
      Oe(xe);
    },
    Ze = function () {
      ae('input');
    },
    kr = function (re, le) {
      var xe = q.length,
        Ne = q[xe - 1];
      if (xe && Ne !== le && g && !C[Ne] && !Ce(Ne) && ge[Ne]) {
        de.current.focus({ index: Ne });
        return;
      }
      (ae('input'),
        ye(!0, { inherit: !0 }),
        z !== le && se && !g && l && Qe(null, !0),
        H(le),
        Ye(re, le));
    },
    el = function (re, le) {
      if ((ye(!1), !g && ae() === 'input')) {
        var xe = I(ge);
        wr(z, xe === null);
      }
      Ue(re, le);
    },
    tl = function (re, le) {
      (re.key === 'Tab' && Qe(null, !0), w?.(re, le));
    },
    rl = c.useMemo(
      function () {
        return {
          prefixCls: s,
          locale: V,
          generateConfig: F,
          button: te.button,
          input: te.input,
          classNames: ie,
          styles: be,
        };
      },
      [s, V, F, te.button, te.input, ie, be],
    );
  return (
    dt(
      function () {
        se && z !== void 0 && rt(null, k, !1);
      },
      [se, z, k],
    ),
    dt(
      function () {
        var pe = ae();
        (!se && pe === 'input' && (ye(!1), Qe(null, !0)),
          !se && l && !g && pe === 'panel' && (ye(!0), Qe()));
      },
      [se],
    ),
    c.createElement(
      Ge.Provider,
      { value: rl },
      c.createElement(
        ui,
        zt({}, fi(a), {
          popupElement: ee,
          popupStyle: be.popup.root,
          popupClassName: ve(m, ie.popup.root),
          visible: se,
          onClose: In,
          range: !0,
        }),
        c.createElement(
          Wd,
          zt({}, a, {
            ref: de,
            className: ve(a.className, m, ie.root),
            style: Ur(Ur({}, be.root), a.style),
            suffixIcon: J,
            activeIndex: Me || se ? z : null,
            activeHelp: !!Ot,
            allHelp: !!Ot && pn === 'preset',
            focused: Me,
            onFocus: kr,
            onBlur: el,
            onKeyDown: tl,
            onSubmit: Qe,
            value: kt,
            maskFormat: u,
            onChange: Ve,
            onInputChange: Ze,
            format: i,
            inputReadOnly: E,
            disabled: h,
            open: se,
            onOpenChange: ye,
            onClick: mn,
            onClear: xr,
            invalid: sn,
            onInvalid: fn,
            onActiveInfo: bn,
          }),
        ),
      ),
    )
  );
}
var tm = c.forwardRef(em);
function rm(e) {
  var t = e.prefixCls,
    r = e.value,
    n = e.onRemove,
    a = e.removeIcon,
    o = a === void 0 ? '×' : a,
    l = e.formatDate,
    i = e.disabled,
    u = e.maxTagCount,
    f = e.placeholder,
    s = ''.concat(t, '-selector'),
    m = ''.concat(t, '-selection'),
    d = ''.concat(m, '-overflow');
  function p(y, g) {
    return c.createElement(
      'span',
      { className: ve(''.concat(m, '-item')), title: typeof y == 'string' ? y : null },
      c.createElement('span', { className: ''.concat(m, '-item-content') }, y),
      !i &&
        g &&
        c.createElement(
          'span',
          {
            onMouseDown: function (h) {
              h.preventDefault();
            },
            onClick: g,
            className: ''.concat(m, '-item-remove'),
          },
          o,
        ),
    );
  }
  function v(y) {
    var g = l(y),
      w = function (C) {
        (C && C.stopPropagation(), n(y));
      };
    return p(g, w);
  }
  function b(y) {
    var g = '+ '.concat(y.length, ' ...');
    return p(g);
  }
  return c.createElement(
    'div',
    { className: s },
    c.createElement(il, {
      prefixCls: d,
      data: r,
      renderItem: v,
      renderRest: b,
      itemKey: function (g) {
        return l(g);
      },
      maxCount: u,
    }),
    !r.length && c.createElement('span', { className: ''.concat(t, '-selection-placeholder') }, f),
  );
}
function gr(e) {
  '@babel/helpers - typeof';
  return (
    (gr =
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
    gr(e)
  );
}
var nm = [
  'id',
  'open',
  'prefix',
  'clearIcon',
  'suffixIcon',
  'activeHelp',
  'allHelp',
  'focused',
  'onFocus',
  'onBlur',
  'onKeyDown',
  'locale',
  'generateConfig',
  'placeholder',
  'className',
  'style',
  'onClick',
  'onClear',
  'internalPicker',
  'value',
  'onChange',
  'onSubmit',
  'onInputChange',
  'multiple',
  'maxTagCount',
  'format',
  'maskFormat',
  'preserveInvalidOnBlur',
  'onInvalid',
  'disabled',
  'invalid',
  'inputReadOnly',
  'direction',
  'onOpenChange',
  'onMouseDown',
  'required',
  'aria-required',
  'autoFocus',
  'tabIndex',
  'removeIcon',
];
function tn() {
  return (
    (tn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    tn.apply(this, arguments)
  );
}
function Vo(e, t) {
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
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vo(Object(r), !0).forEach(function (n) {
          It(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vo(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function It(e, t, r) {
  return (
    (t = am(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function am(e) {
  var t = om(e, 'string');
  return gr(t) == 'symbol' ? t : String(t);
}
function om(e, t) {
  if (gr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function im(e, t) {
  return sm(e) || cm(e, t) || um(e, t) || lm();
}
function lm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function um(e, t) {
  if (e) {
    if (typeof e == 'string') return Wo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wo(e, t);
  }
}
function Wo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cm(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function sm(e) {
  if (Array.isArray(e)) return e;
}
function fm(e, t) {
  if (e == null) return {};
  var r = dm(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((n = o[a]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function dm(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++) ((a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]));
  return r;
}
function mm(e, t) {
  e.id;
  var r = e.open,
    n = e.prefix,
    a = e.clearIcon,
    o = e.suffixIcon;
  (e.activeHelp, e.allHelp);
  var l = e.focused;
  (e.onFocus, e.onBlur, e.onKeyDown);
  var i = e.locale,
    u = e.generateConfig,
    f = e.placeholder,
    s = e.className,
    m = e.style,
    d = e.onClick,
    p = e.onClear,
    v = e.internalPicker,
    b = e.value,
    y = e.onChange,
    g = e.onSubmit;
  e.onInputChange;
  var w = e.multiple,
    h = e.maxTagCount;
  (e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid);
  var C = e.disabled,
    $ = e.invalid;
  e.inputReadOnly;
  var S = e.direction;
  e.onOpenChange;
  var P = e.onMouseDown;
  (e.required, e['aria-required']);
  var x = e.autoFocus,
    M = e.tabIndex,
    R = e.removeIcon,
    V = fm(e, nm),
    F = S === 'rtl',
    k = c.useContext(Ge),
    D = k.prefixCls,
    O = k.classNames,
    T = k.styles,
    N = c.useRef(),
    j = c.useRef();
  c.useImperativeHandle(t, function () {
    return {
      nativeElement: N.current,
      focus: function (G) {
        var te;
        (te = j.current) === null || te === void 0 || te.focus(G);
      },
      blur: function () {
        var G;
        (G = j.current) === null || G === void 0 || G.blur();
      },
    };
  });
  var B = Yi(V),
    L = function (G) {
      y([G]);
    },
    W = function (G) {
      var te = b.filter(function (X) {
        return X && !Fe(u, i, X, G, v);
      });
      (y(te), r || g());
    },
    A = Wi(Fo(Fo({}, e), {}, { onChange: L }), function (Q) {
      var G = Q.valueTexts;
      return { value: G[0] || '', active: l };
    }),
    _ = im(A, 2),
    E = _[0],
    J = _[1],
    Y = !!(a && b.length && !C),
    U = w
      ? c.createElement(
          c.Fragment,
          null,
          c.createElement(rm, {
            prefixCls: D,
            value: b,
            onRemove: W,
            formatDate: J,
            maxTagCount: h,
            disabled: C,
            removeIcon: R,
            placeholder: f,
          }),
          c.createElement('input', {
            className: ''.concat(D, '-multiple-input'),
            value: b.map(J).join(','),
            ref: j,
            readOnly: !0,
            autoFocus: x,
            tabIndex: M,
          }),
          c.createElement(un, { type: 'suffix', icon: o }),
          Y && c.createElement(ia, { icon: a, onClear: p }),
        )
      : c.createElement(
          ua,
          tn({ ref: j }, E(), {
            autoFocus: x,
            tabIndex: M,
            suffixIcon: o,
            clearIcon: Y && c.createElement(ia, { icon: a, onClear: p }),
            showActiveCls: !1,
          }),
        );
  return c.createElement(
    'div',
    tn({}, B, {
      className: ve(
        D,
        It(
          It(
            It(
              It(It({}, ''.concat(D, '-multiple'), w), ''.concat(D, '-focused'), l),
              ''.concat(D, '-disabled'),
              C,
            ),
            ''.concat(D, '-invalid'),
            $,
          ),
          ''.concat(D, '-rtl'),
          F,
        ),
        s,
      ),
      style: m,
      ref: N,
      onClick: d,
      onMouseDown: function (G) {
        var te,
          X = G.target;
        (X !== ((te = j.current) === null || te === void 0 ? void 0 : te.inputElement) &&
          G.preventDefault(),
          P?.(G));
      },
    }),
    n &&
      c.createElement(
        'div',
        { className: ve(''.concat(D, '-prefix'), O.prefix), style: T.prefix },
        n,
      ),
    U,
  );
}
var vm = c.forwardRef(mm);
function hr(e) {
  '@babel/helpers - typeof';
  return (
    (hr =
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
    hr(e)
  );
}
function qt() {
  return (
    (qt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qt.apply(this, arguments)
  );
}
function Yo(e) {
  return bm(e) || ym(e) || zi(e) || pm();
}
function pm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ym(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function bm(e) {
  if (Array.isArray(e)) return sa(e);
}
function Lo(e, t) {
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
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lo(Object(r), !0).forEach(function (n) {
          gm(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lo(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gm(e, t, r) {
  return (
    (t = hm(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function hm(e) {
  var t = Sm(e, 'string');
  return hr(t) == 'symbol' ? t : String(t);
}
function Sm(e, t) {
  if (hr(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Xe(e, t) {
  return $m(e) || wm(e, t) || zi(e, t) || Cm();
}
function Cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, t) {
  if (e) {
    if (typeof e == 'string') return sa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sa(e, t);
  }
}
function sa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wm(e, t) {
  var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n,
      a,
      o,
      l,
      i = [],
      u = !0,
      f = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); u = !0);
    } catch (s) {
      ((f = !0), (a = s));
    } finally {
      try {
        if (!u && r.return != null && ((l = r.return()), Object(l) !== l)) return;
      } finally {
        if (f) throw a;
      }
    }
    return i;
  }
}
function $m(e) {
  if (Array.isArray(e)) return e;
}
function Pm(e, t) {
  var r = Ci(e),
    n = Xe(r, 6),
    a = n[0],
    o = n[1],
    l = n[2],
    i = n[3],
    u = n[4],
    f = n[5],
    s = a,
    m = s.prefixCls,
    d = s.rootClassName,
    p = s.styles,
    v = s.classNames,
    b = s.previewValue,
    y = s.order,
    g = s.defaultValue,
    w = s.value,
    h = s.needConfirm,
    C = s.onChange,
    $ = s.onKeyDown,
    S = s.disabled,
    P = s.disabledDate,
    x = s.minDate,
    M = s.maxDate,
    R = s.defaultOpen,
    V = s.open,
    F = s.onOpenChange,
    k = s.locale,
    D = s.generateConfig,
    O = s.picker,
    T = s.showNow,
    N = s.showToday,
    j = s.showTime,
    B = s.mode,
    L = s.onPanelChange,
    W = s.onCalendarChange,
    A = s.onOk,
    _ = s.multiple,
    E = s.defaultPickerValue,
    J = s.pickerValue,
    Y = s.onPickerValueChange,
    U = s.inputReadOnly,
    Q = s.suffixIcon,
    G = s.removeIcon,
    te = s.onFocus,
    X = s.onBlur,
    K = s.presets,
    Z = s.components,
    oe = s.cellRender,
    de = s.dateRender,
    ce = s.monthCellRender,
    Se = s.onClick,
    ie = $i(t);
  function be(ne) {
    return ne === null ? null : _ ? ne : ne[0];
  }
  var we = Ti(D, k, o),
    me = Ui(v, p),
    se = Xe(me, 2),
    De = se[0],
    ye = se[1],
    We = wi(V, R, [S], F),
    Ee = Xe(We, 2),
    $e = Ee[0],
    Pe = Ee[1],
    _e = function (ee, Ve, Ze) {
      if (W) {
        var kr = at({}, Ze);
        (delete kr.range, W(be(ee), be(Ve), kr));
      }
    },
    Oe = function (ee) {
      A?.(be(ee));
    },
    ke = Di(D, k, i, !1, y, g, w, _e, Oe),
    ge = Xe(ke, 5),
    Be = ge[0],
    Ae = ge[1],
    Me = ge[2],
    he = ge[3],
    ae = ge[4],
    z = Me(),
    H = Oi([S]),
    I = Xe(H, 4),
    q = I[0],
    ue = I[1],
    Ce = I[2],
    Ye = I[3],
    Ue = function (ee) {
      (ue(!0), te?.(ee, {}));
    },
    Le = function (ee) {
      (ue(!1), X?.(ee, {}));
    },
    ze = lt(O, B),
    Je = Xe(ze, 2),
    je = Je[0],
    ct = Je[1],
    qe = je === 'date' && j ? 'datetime' : je,
    et = Mi(O, je, T, N),
    $t =
      C &&
      function (ne, ee) {
        C(be(ne), be(ee));
      },
    Pt = Ei(at(at({}, a), {}, { onChange: $t }), Be, Ae, Me, he, [], i, q, $e, f),
    Dt = Xe(Pt, 2),
    tt = Dt[1],
    wr = di(z, f),
    Et = Xe(wr, 2),
    $r = Et[0],
    cn = Et[1],
    Pr = c.useMemo(
      function () {
        return $r.some(function (ne) {
          return ne;
        });
      },
      [$r],
    ),
    sn = function (ee, Ve) {
      if (Y) {
        var Ze = at(at({}, Ve), {}, { mode: Ve.mode[0] });
        (delete Ze.range, Y(ee[0], Ze));
      }
    },
    fn = Ii(D, k, z, [je], $e, Ye, o, !1, E, J, Ct(j?.defaultOpenValue), sn, x, M),
    Or = Xe(fn, 2),
    Ir = Or[0],
    dn = Or[1],
    _r = Re(function (ne, ee, Ve) {
      if ((ct(ee), L && Ve !== !1)) {
        var Ze = ne || z[z.length - 1];
        L(Ze, ee);
      }
    }),
    rt = function () {
      (tt(Me()), Pe(!1, { force: !0 }));
    },
    Mt = function (ee) {
      (!S && !ie.current.nativeElement.contains(document.activeElement) && ie.current.focus(),
        Pe(!0),
        Se?.(ee));
    },
    Qe = function () {
      (tt(null), Pe(!1, { force: !0 }));
    },
    mn = c.useState(null),
    xr = Xe(mn, 2),
    vn = xr[0],
    Ar = xr[1],
    pn = c.useState(null),
    jr = Xe(pn, 2),
    nt = jr[0],
    Tt = jr[1],
    Ot = c.useMemo(
      function () {
        var ne = [nt].concat(Yo(z)).filter(function (ee) {
          return ee;
        });
        return _ ? ne : ne.slice(0, 1);
      },
      [z, nt, _],
    ),
    Dr = c.useMemo(
      function () {
        return !_ && nt
          ? [nt]
          : z.filter(function (ne) {
              return ne;
            });
      },
      [z, nt, _],
    );
  c.useEffect(
    function () {
      $e || Tt(null);
    },
    [$e],
  );
  var kt = function (ee, Ve) {
      b === 'hover' && (Tt(ee), Ar(Ve));
    },
    yn = Pi(K),
    Er = function (ee) {
      kt(ee, 'preset');
    },
    Mr = function (ee) {
      var Ve = _ ? we(Me(), ee) : [ee],
        Ze = tt(Ve);
      Ze && !_ && Pe(!1, { force: !0 });
    },
    bn = function (ee) {
      Mr(ee);
    },
    Tr = function (ee) {
      kt(ee, 'cell');
    },
    gn = function (ee) {
      (Pe(!0), Ue(ee));
    },
    hn = function (ee) {
      if ((Ce('panel'), !(_ && qe !== O))) {
        var Ve = _ ? we(Me(), ee) : [ee];
        (he(Ve), !h && !l && o === qe && rt());
      }
    },
    Sn = function () {
      Pe(!1);
    },
    Cn = ba(oe, de, ce),
    wn = c.useMemo(
      function () {
        var ne = va(a, !1),
          ee = oi(
            a,
            [].concat(Yo(Object.keys(ne)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
              'classNames',
              'styles',
            ]),
          );
        return at(at({}, ee), {}, { multiple: a.multiple });
      },
      [a],
    ),
    $n = c.createElement(
      Fi,
      qt({}, wn, {
        showNow: et,
        showTime: j,
        disabledDate: P,
        onFocus: gn,
        onBlur: Le,
        picker: O,
        mode: je,
        internalMode: qe,
        onPanelChange: _r,
        format: u,
        value: z,
        isInvalid: f,
        onChange: null,
        onSelect: hn,
        pickerValue: Ir,
        defaultOpenValue: j?.defaultOpenValue,
        onPickerValueChange: dn,
        hoverValue: Ot,
        onHover: Tr,
        needConfirm: h,
        onSubmit: rt,
        onOk: ae,
        presets: yn,
        onPresetHover: Er,
        onPresetSubmit: Mr,
        onNow: bn,
        cellRender: Cn,
        classNames: De,
        styles: ye,
      }),
    ),
    Pn = function (ee) {
      he(ee);
    },
    On = function () {
      Ce('input');
    },
    In = function (ee) {
      (Ce('input'), Pe(!0, { inherit: !0 }), Ue(ee));
    },
    _n = function (ee) {
      (Pe(!1), Le(ee));
    },
    xn = function (ee, Ve) {
      (ee.key === 'Tab' && rt(), $?.(ee, Ve));
    },
    An = c.useMemo(
      function () {
        return {
          prefixCls: m,
          locale: k,
          generateConfig: D,
          button: Z.button,
          input: Z.input,
          classNames: De,
          styles: ye,
        };
      },
      [m, k, D, Z.button, Z.input, De, ye],
    );
  return (
    dt(
      function () {
        $e && Ye !== void 0 && _r(null, O, !1);
      },
      [$e, Ye, O],
    ),
    dt(
      function () {
        var ne = Ce();
        (!$e && ne === 'input' && (Pe(!1), rt()), !$e && l && !h && ne === 'panel' && rt());
      },
      [$e],
    ),
    c.createElement(
      Ge.Provider,
      { value: An },
      c.createElement(
        ui,
        qt({}, fi(a), {
          popupElement: $n,
          popupStyle: ye.popup.root,
          popupClassName: ve(d, De.popup.root),
          visible: $e,
          onClose: Sn,
        }),
        c.createElement(
          vm,
          qt({}, a, {
            ref: ie,
            className: ve(a.className, d, De.root),
            style: at(at({}, ye.root), a.style),
            suffixIcon: Q,
            removeIcon: G,
            activeHelp: !!nt,
            allHelp: !!nt && vn === 'preset',
            focused: q,
            onFocus: In,
            onBlur: _n,
            onKeyDown: xn,
            onSubmit: rt,
            value: Dr,
            maskFormat: u,
            onChange: Pn,
            onInputChange: On,
            internalPicker: o,
            format: i,
            inputReadOnly: U,
            disabled: S,
            open: $e,
            onOpenChange: Pe,
            onClick: Mt,
            onClear: Qe,
            invalid: Pr,
            onInvalid: function (ee) {
              cn(ee, 0);
            },
          }),
        ),
      ),
    )
  );
}
var Om = c.forwardRef(Pm);
const Im = (e) => {
    const {
        multipleSelectItemHeight: t,
        paddingXXS: r,
        lineWidth: n,
        INTERNAL_FIXED_ITEM_MARGIN: a,
      } = e,
      o = e.max(e.calc(r).sub(n).equal(), 0),
      l = e.max(e.calc(o).sub(a).equal(), 0);
    return {
      basePadding: o,
      containerPadding: l,
      itemHeight: fe(t),
      itemLineHeight: fe(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()),
    };
  },
  _m = (e) => {
    const {
      componentCls: t,
      iconCls: r,
      borderRadiusSM: n,
      motionDurationSlow: a,
      paddingXS: o,
      multipleItemColorDisabled: l,
      multipleItemBorderColorDisabled: i,
      colorIcon: u,
      colorIconHover: f,
      INTERNAL_FIXED_ITEM_MARGIN: s,
    } = e;
    return {
      [`${t}-selection-overflow`]: {
        'position': 'relative',
        'display': 'flex',
        'flex': 'auto',
        'flexWrap': 'wrap',
        'maxWidth': '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: 'calc(100% - 4px)',
          display: 'inline-flex',
        },
        [`${t}-selection-item`]: {
          'display': 'flex',
          'alignSelf': 'center',
          'flex': 'none',
          'boxSizing': 'border-box',
          'maxWidth': '100%',
          'marginBlock': s,
          'borderRadius': n,
          'cursor': 'default',
          'transition': ['font-size', 'line-height', 'height'].map((d) => `${d} ${a}`).join(', '),
          'marginInlineEnd': e.calc(s).mul(2).equal(),
          'paddingInlineStart': o,
          'paddingInlineEnd': e.calc(o).div(2).equal(),
          [`${t}-disabled&`]: { color: l, borderColor: i, cursor: 'not-allowed' },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: e.calc(o).div(2).equal(),
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': {
            ...ll(),
            'display': 'inline-flex',
            'alignItems': 'center',
            'color': u,
            'fontWeight': 'bold',
            'fontSize': 10,
            'lineHeight': 'inherit',
            'cursor': 'pointer',
            [`> ${r}`]: { verticalAlign: '-0.2em' },
            '&:hover': { color: f },
          },
        },
      },
    };
  },
  Rn = (e, t) => {
    const { componentCls: r, controlHeight: n } = e,
      a = t ? `${r}-${t}` : '',
      o = Im(e);
    return [
      {
        [`${r}-multiple${a}`]: {
          paddingBlock: o.containerPadding,
          paddingInlineStart: o.basePadding,
          minHeight: n,
          [`${r}-selection-item`]: { height: o.itemHeight, lineHeight: fe(o.itemLineHeight) },
        },
      },
    ];
  },
  xm = (e) => {
    const { componentCls: t, calc: r, lineWidth: n } = e,
      a = Vn(e, {
        fontHeight: e.fontSize,
        selectHeight: e.controlHeightSM,
        multipleSelectItemHeight: e.multipleItemHeightSM,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
        controlHeight: e.controlHeightSM,
      }),
      o = Vn(e, {
        fontHeight: r(e.multipleItemHeightLG).sub(r(n).mul(2).equal()).equal(),
        fontSize: e.fontSizeLG,
        selectHeight: e.controlHeightLG,
        multipleSelectItemHeight: e.multipleItemHeightLG,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
        controlHeight: e.controlHeightLG,
      });
    return [
      Rn(a, 'small'),
      Rn(e),
      Rn(o, 'large'),
      {
        [`${t}${t}-multiple`]: {
          width: '100%',
          cursor: 'text',
          [`${t}-selector`]: {
            'flex': 'auto',
            'padding': 0,
            'position': 'relative',
            '&:after': { margin: 0 },
            [`${t}-selection-placeholder`]: {
              position: 'absolute',
              top: '50%',
              insetInlineStart: e.inputPaddingHorizontalBase,
              insetInlineEnd: 0,
              transform: 'translateY(-50%)',
              transition: `all ${e.motionDurationSlow}`,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              flex: 1,
              color: e.colorTextPlaceholder,
              pointerEvents: 'none',
            },
          },
          ..._m(e),
          [`${t}-multiple-input`]: {
            width: 0,
            height: 0,
            border: 0,
            visibility: 'hidden',
            position: 'absolute',
            zIndex: -1,
          },
        },
      },
    ];
  },
  Am = (e) => {
    const {
      pickerCellCls: t,
      pickerCellInnerCls: r,
      cellHeight: n,
      borderRadiusSM: a,
      motionDurationMid: o,
      cellHoverBg: l,
      lineWidth: i,
      lineType: u,
      colorPrimary: f,
      cellActiveWithRangeBg: s,
      colorTextLightSolid: m,
      colorTextDisabled: d,
      cellBgDisabled: p,
      colorFillSecondary: v,
    } = e;
    return {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: n,
        transform: 'translateY(-50%)',
        content: '""',
        pointerEvents: 'none',
      },
      [r]: {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: n,
        height: n,
        lineHeight: fe(n),
        borderRadius: a,
        transition: `background-color ${o}`,
      },
      [`&:hover:not(${t}-in-view):not(${t}-disabled),
    &:hover:not(${t}-selected):not(${t}-range-start):not(${t}-range-end):not(${t}-disabled)`]: {
        [r]: { background: l },
      },
      [`&-in-view${t}-today ${r}`]: {
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${fe(i)} ${u} ${f}`,
          borderRadius: a,
          content: '""',
        },
      },
      [`&-in-view${t}-in-range,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        position: 'relative',
        [`&:not(${t}-disabled):before`]: { background: s },
      },
      [`&-in-view${t}-selected,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        [`&:not(${t}-disabled) ${r}`]: { color: m, background: f },
        [`&${t}-disabled ${r}`]: { background: v },
      },
      [`&-in-view${t}-range-start:not(${t}-disabled):before`]: { insetInlineStart: '50%' },
      [`&-in-view${t}-range-end:not(${t}-disabled):before`]: { insetInlineEnd: '50%' },
      [`&-in-view${t}-range-start:not(${t}-range-end) ${r}`]: {
        borderStartStartRadius: a,
        borderEndStartRadius: a,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      [`&-in-view${t}-range-end:not(${t}-range-start) ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: a,
        borderEndEndRadius: a,
      },
      '&-disabled': {
        'color': d,
        'cursor': 'not-allowed',
        [r]: { background: 'transparent' },
        '&::before': { background: p },
      },
      [`&-disabled${t}-today ${r}::before`]: { borderColor: d },
    };
  },
  jm = (e) => {
    const {
        componentCls: t,
        pickerCellCls: r,
        pickerCellInnerCls: n,
        pickerYearMonthCellWidth: a,
        pickerControlIconSize: o,
        cellWidth: l,
        paddingSM: i,
        paddingXS: u,
        paddingXXS: f,
        colorBgContainer: s,
        lineWidth: m,
        lineType: d,
        borderRadiusLG: p,
        colorPrimary: v,
        colorTextHeading: b,
        colorSplit: y,
        pickerControlIconBorderWidth: g,
        colorIcon: w,
        textHeight: h,
        motionDurationMid: C,
        colorIconHover: $,
        fontWeightStrong: S,
        cellHeight: P,
        pickerCellPaddingVertical: x,
        colorTextDisabled: M,
        colorText: R,
        fontSize: V,
        motionDurationSlow: F,
        withoutTimeCellHeight: k,
        pickerQuarterPanelContentHeight: D,
        borderRadiusSM: O,
        colorTextLightSolid: T,
        cellHoverBg: N,
        timeColumnHeight: j,
        timeColumnWidth: B,
        timeCellHeight: L,
        controlItemBgActive: W,
        marginXXS: A,
        pickerDatePanelPaddingHorizontal: _,
        pickerControlIconMargin: E,
      } = e,
      J = e.calc(l).mul(7).add(e.calc(_).mul(2)).equal();
    return {
      [t]: {
        '&-panel': {
          'display': 'inline-flex',
          'flexDirection': 'column',
          'textAlign': 'center',
          'background': s,
          'borderRadius': p,
          'outline': 'none',
          '&-focused': { borderColor: v },
          '&-rtl': {
            [`${t}-prev-icon,
              ${t}-super-prev-icon`]: { transform: 'rotate(45deg)' },
            [`${t}-next-icon,
              ${t}-super-next-icon`]: { transform: 'rotate(-135deg)' },
            [`${t}-time-panel`]: {
              [`${t}-content`]: { 'direction': 'ltr', '> *': { direction: 'rtl' } },
            },
          },
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel':
          { display: 'flex', flexDirection: 'column', width: J },
        '&-header': {
          'display': 'flex',
          'padding': `0 ${fe(u)}`,
          'color': b,
          'borderBottom': `${fe(m)} ${d} ${y}`,
          '> *': { flex: 'none' },
          'button': {
            'padding': 0,
            'color': w,
            'lineHeight': fe(h),
            'background': 'transparent',
            'border': 0,
            'cursor': 'pointer',
            'transition': `color ${C}`,
            'fontSize': 'inherit',
            'display': 'inline-flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            '&:empty': { display: 'none' },
          },
          '> button': {
            'minWidth': '1.6em',
            'fontSize': V,
            '&:hover': { color: $ },
            '&:disabled': { opacity: 0.25, pointerEvents: 'none' },
          },
          '&-view': {
            'flex': 'auto',
            'fontWeight': S,
            'lineHeight': fe(h),
            '> button': {
              'color': 'inherit',
              'fontWeight': 'inherit',
              'verticalAlign': 'top',
              '&:not(:first-child)': { marginInlineStart: u },
              '&:hover': { color: v },
            },
          },
        },
        '&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon':
          {
            'position': 'relative',
            'width': o,
            'height': o,
            '&::before': {
              position: 'absolute',
              top: 0,
              insetInlineStart: 0,
              width: o,
              height: o,
              border: '0 solid currentcolor',
              borderBlockStartWidth: g,
              borderInlineStartWidth: g,
              content: '""',
            },
          },
        '&-super-prev-icon,\n        &-super-next-icon': {
          '&::after': {
            position: 'absolute',
            top: E,
            insetInlineStart: E,
            display: 'inline-block',
            width: o,
            height: o,
            border: '0 solid currentcolor',
            borderBlockStartWidth: g,
            borderInlineStartWidth: g,
            content: '""',
          },
        },
        '&-prev-icon, &-super-prev-icon': { transform: 'rotate(-45deg)' },
        '&-next-icon, &-super-next-icon': { transform: 'rotate(135deg)' },
        '&-content': {
          'width': '100%',
          'tableLayout': 'fixed',
          'borderCollapse': 'collapse',
          'th, td': { position: 'relative', minWidth: P, fontWeight: 'normal' },
          'th': {
            height: e.calc(P).add(e.calc(x).mul(2)).equal(),
            color: R,
            verticalAlign: 'middle',
          },
        },
        '&-cell': {
          'padding': `${fe(x)} 0`,
          'color': M,
          'cursor': 'pointer',
          '&-in-view': { color: R },
          ...Am(e),
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-content`]: { height: e.calc(k).mul(4).equal() },
          [n]: { padding: `0 ${fe(u)}` },
        },
        '&-quarter-panel': { [`${t}-content`]: { height: D } },
        '&-decade-panel': {
          [n]: { padding: `0 ${fe(e.calc(u).div(2).equal())}` },
          [`${t}-cell::before`]: { display: 'none' },
        },
        '&-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-body`]: { padding: `0 ${fe(u)}` },
          [n]: { width: a },
        },
        '&-date-panel': {
          [`${t}-body`]: { padding: `${fe(u)} ${fe(_)}` },
          [`${t}-content th`]: { boxSizing: 'border-box', padding: 0 },
        },
        '&-week-panel-row': {
          'td': {
            '&:before': { transition: `background-color ${C}` },
            '&:first-child:before': { borderStartStartRadius: O, borderEndStartRadius: O },
            '&:last-child:before': { borderStartEndRadius: O, borderEndEndRadius: O },
          },
          '&:hover td:before': { background: N },
          '&-range-start td, &-range-end td, &-selected td, &-hover td': {
            [`&${r}`]: {
              '&:before': { background: v },
              [`&${t}-cell-week`]: { color: new Qr(T).setA(0.5).toHexString() },
              [n]: { color: T },
            },
          },
          '&-range-hover td:before': { background: W },
        },
        '&-week-panel, &-date-panel-show-week': {
          [`${t}-body`]: { padding: `${fe(u)} ${fe(i)}` },
          [`${t}-content th`]: { width: 'auto' },
        },
        '&-datetime-panel': {
          'display': 'flex',
          [`${t}-time-panel`]: { borderInlineStart: `${fe(m)} ${d} ${y}` },
          [`${t}-date-panel,
          ${t}-time-panel`]: { transition: `opacity ${F}` },
          '&-active': {
            [`${t}-date-panel,
            ${t}-time-panel`]: { 'opacity': 0.3, '&-active': { opacity: 1 } },
          },
        },
        '&-time-panel': {
          'width': 'auto',
          'minWidth': 'auto',
          [`${t}-content`]: { display: 'flex', flex: 'auto', height: j },
          '&-column': {
            'flex': '1 0 auto',
            'width': B,
            'margin': `${fe(f)} 0`,
            'padding': 0,
            'overflowY': 'auto',
            'textAlign': 'start',
            'listStyle': 'none',
            'transition': `background-color ${C}`,
            'overflowX': 'hidden',
            '&::-webkit-scrollbar': { width: 8, backgroundColor: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: e.colorTextTertiary,
              borderRadius: e.borderRadiusSM,
            },
            '&': { scrollbarWidth: 'thin', scrollbarColor: `${e.colorTextTertiary} transparent` },
            '&::after': { display: 'block', height: `calc(100% - ${fe(L)})`, content: '""' },
            '&:not(:first-child)': { borderInlineStart: `${fe(m)} ${d} ${y}` },
            '&-active': { background: new Qr(W).setA(0.2).toHexString() },
            '> li': {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                'marginInline': A,
                [`${t}-time-panel-cell-inner`]: {
                  'display': 'block',
                  'width': e.calc(B).sub(e.calc(A).mul(2)).equal(),
                  'height': L,
                  'margin': 0,
                  'paddingBlock': 0,
                  'paddingInlineEnd': 0,
                  'paddingInlineStart': e.calc(B).sub(L).div(2).equal(),
                  'color': R,
                  'lineHeight': fe(L),
                  'borderRadius': O,
                  'cursor': 'pointer',
                  'transition': `background-color ${C}`,
                  '&:hover': { background: N },
                },
                '&-selected': { [`${t}-time-panel-cell-inner`]: { background: W } },
                '&-disabled': {
                  [`${t}-time-panel-cell-inner`]: {
                    color: M,
                    background: 'transparent',
                    cursor: 'not-allowed',
                  },
                },
              },
            },
          },
        },
      },
    };
  },
  Dm = (e) => {
    const {
      componentCls: t,
      textHeight: r,
      lineWidth: n,
      paddingSM: a,
      antCls: o,
      colorPrimary: l,
      cellActiveWithRangeBg: i,
      colorPrimaryBorder: u,
      lineType: f,
      colorSplit: s,
    } = e;
    return {
      [`${t}-dropdown`]: {
        [`${t}-footer`]: {
          'borderTop': `${fe(n)} ${f} ${s}`,
          '&-extra': {
            'padding': `0 ${fe(a)}`,
            'lineHeight': fe(e.calc(r).sub(e.calc(n).mul(2)).equal()),
            'textAlign': 'start',
            '&:not(:last-child)': { borderBottom: `${fe(n)} ${f} ${s}` },
          },
        },
        [`${t}-panels + ${t}-footer ${t}-ranges`]: { justifyContent: 'space-between' },
        [`${t}-ranges`]: {
          'marginBlock': 0,
          'paddingInline': fe(a),
          'overflow': 'hidden',
          'textAlign': 'start',
          'listStyle': 'none',
          'display': 'flex',
          'justifyContent': 'center',
          'alignItems': 'center',
          '> li': {
            lineHeight: fe(e.calc(r).sub(e.calc(n).mul(2)).equal()),
            display: 'inline-block',
          },
          [`${t}-now-btn-disabled`]: { pointerEvents: 'none', color: e.colorTextDisabled },
          [`${t}-preset > ${o}-tag-blue`]: {
            color: l,
            background: i,
            borderColor: u,
            cursor: 'pointer',
          },
          [`${t}-ok`]: { paddingBlock: e.calc(n).mul(2).equal(), marginInlineStart: 'auto' },
        },
      },
    };
  },
  Em = (e) => {
    const { componentCls: t, controlHeightLG: r, paddingXXS: n, padding: a } = e;
    return {
      pickerCellCls: `${t}-cell`,
      pickerCellInnerCls: `${t}-cell-inner`,
      pickerYearMonthCellWidth: e.calc(r).mul(1.5).equal(),
      pickerQuarterPanelContentHeight: e.calc(r).mul(1.4).equal(),
      pickerCellPaddingVertical: e.calc(n).add(e.calc(n).div(2)).equal(),
      pickerCellBorderGap: 2,
      pickerControlIconSize: 7,
      pickerControlIconMargin: 4,
      pickerControlIconBorderWidth: 1.5,
      pickerDatePanelPaddingHorizontal: e.calc(a).add(e.calc(n).div(2)).equal(),
    };
  },
  Mm = (e) => {
    const {
        colorBgContainerDisabled: t,
        controlHeight: r,
        controlHeightSM: n,
        controlHeightLG: a,
        paddingXXS: o,
        lineWidth: l,
      } = e,
      i = o * 2,
      u = l * 2,
      f = Math.min(r - i, r - u),
      s = Math.min(n - i, n - u),
      m = Math.min(a - i, a - u);
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(o / 2),
      cellHoverBg: e.controlItemBgHover,
      cellActiveWithRangeBg: e.controlItemBgActive,
      cellHoverWithRangeBg: new Qr(e.colorPrimary).lighten(35).toHexString(),
      cellRangeBorderColor: new Qr(e.colorPrimary).lighten(20).toHexString(),
      cellBgDisabled: t,
      timeColumnWidth: a * 1.4,
      timeColumnHeight: 224,
      timeCellHeight: 28,
      cellWidth: n * 1.5,
      cellHeight: n,
      textHeight: a,
      withoutTimeCellHeight: a * 1.65,
      multipleItemBg: e.colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: f,
      multipleItemHeightSM: s,
      multipleItemHeightLG: m,
      multipleSelectorBgDisabled: t,
      multipleItemColorDisabled: e.colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent',
    };
  },
  Tm = (e) => ({
    ...wl(e),
    ...Mm(e),
    ...Al(e),
    presetsWidth: 120,
    presetsMaxWidth: 200,
    zIndexPopup: e.zIndexPopupBase + 50,
  }),
  km = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: [
        { ...Il(e), ...Ol(e), ...Pl(e), ...$l(e) },
        {
          '&-outlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-filled': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.colorBgContainer,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            },
          },
          '&-borderless': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-underlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
        },
      ],
    };
  },
  Nn = (e, t) => ({ padding: `${fe(e)} ${fe(t)}` }),
  Rm = (e) => {
    const { componentCls: t, colorError: r, colorWarning: n } = e;
    return {
      [`${t}:not(${t}-disabled):not([disabled])`]: {
        [`&${t}-status-error`]: { [`${t}-active-bar`]: { background: r } },
        [`&${t}-status-warning`]: { [`${t}-active-bar`]: { background: n } },
      },
    };
  },
  Nm = (e) => {
    const {
      componentCls: t,
      antCls: r,
      paddingInline: n,
      lineWidth: a,
      lineType: o,
      colorBorder: l,
      borderRadius: i,
      motionDurationMid: u,
      colorTextDisabled: f,
      colorTextPlaceholder: s,
      colorTextQuaternary: m,
      fontSizeLG: d,
      inputFontSizeLG: p,
      fontSizeSM: v,
      inputFontSizeSM: b,
      controlHeightSM: y,
      paddingInlineSM: g,
      paddingXS: w,
      marginXS: h,
      colorIcon: C,
      lineWidthBold: $,
      colorPrimary: S,
      motionDurationSlow: P,
      zIndexPopup: x,
      paddingXXS: M,
      sizePopupArrow: R,
      colorBgElevated: V,
      borderRadiusLG: F,
      boxShadowSecondary: k,
      borderRadiusSM: D,
      colorSplit: O,
      cellHoverBg: T,
      presetsWidth: N,
      presetsMaxWidth: j,
      boxShadowPopoverArrow: B,
      fontHeight: L,
      lineHeightLG: W,
    } = e;
    return [
      {
        [t]: {
          ...Pa(e),
          ...Nn(e.paddingBlock, e.paddingInline),
          'position': 'relative',
          'display': 'inline-flex',
          'alignItems': 'center',
          'lineHeight': 1,
          'borderRadius': i,
          'transition': ['border', 'box-shadow', 'background-color']
            .map((A) => `${A} ${u}`)
            .join(', '),
          [`${t}-prefix`]: { flex: '0 0 auto', marginInlineEnd: e.inputAffixPadding },
          [`${t}-input`]: {
            'position': 'relative',
            'display': 'inline-flex',
            'alignItems': 'center',
            'width': '100%',
            '> input': {
              'position': 'relative',
              'display': 'inline-block',
              'width': '100%',
              'color': 'inherit',
              'fontSize': e.inputFontSize ?? e.fontSize,
              'lineHeight': e.lineHeight,
              'transition': `all ${u}`,
              ...xl(s),
              'flex': 'auto',
              'minWidth': 1,
              'height': 'auto',
              'padding': 0,
              'background': 'transparent',
              'border': 0,
              'fontFamily': 'inherit',
              '&:focus': { boxShadow: 'none', outline: 0 },
              '&[disabled]': { background: 'transparent', color: f, cursor: 'not-allowed' },
            },
            '&-placeholder': { '> input': { color: s } },
          },
          '&-large': {
            ...Nn(e.paddingBlockLG, e.paddingInlineLG),
            borderRadius: e.borderRadiusLG,
            [`${t}-input > input`]: { fontSize: p ?? d, lineHeight: W },
          },
          '&-small': {
            ...Nn(e.paddingBlockSM, e.paddingInlineSM),
            borderRadius: e.borderRadiusSM,
            [`${t}-input > input`]: { fontSize: b ?? v },
          },
          [`${t}-suffix`]: {
            'display': 'flex',
            'flex': 'none',
            'alignSelf': 'center',
            'marginInlineStart': e.calc(w).div(2).equal(),
            'color': m,
            'lineHeight': 1,
            'pointerEvents': 'none',
            'transition': ['opacity', 'color'].map((A) => `${A} ${u}`).join(', '),
            '> *': { 'verticalAlign': 'top', '&:not(:last-child)': { marginInlineEnd: h } },
          },
          [`${t}-clear`]: {
            'position': 'absolute',
            'top': '50%',
            'insetInlineEnd': 0,
            'color': m,
            'lineHeight': 1,
            'transform': 'translateY(-50%)',
            'cursor': 'pointer',
            'opacity': 0,
            'transition': ['opacity', 'color'].map((A) => `${A} ${u}`).join(', '),
            '> *': { verticalAlign: 'top' },
            '&:hover': { color: C },
          },
          '&:hover': {
            [`${t}-clear`]: { opacity: 1 },
            [`${t}-suffix:not(:last-child)`]: { opacity: 0 },
          },
          [`${t}-separator`]: {
            position: 'relative',
            display: 'inline-block',
            width: '1em',
            height: d,
            color: m,
            fontSize: d,
            verticalAlign: 'top',
            cursor: 'default',
            [`${t}-focused &`]: { color: C },
            [`${t}-range-separator &`]: { [`${t}-disabled &`]: { cursor: 'not-allowed' } },
          },
          '&-range': {
            position: 'relative',
            display: 'inline-flex',
            [`${t}-active-bar`]: {
              bottom: e.calc(a).mul(-1).equal(),
              height: $,
              background: S,
              opacity: 0,
              transition: `all ${P} ease-out`,
              pointerEvents: 'none',
            },
            [`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
            [`${t}-range-separator`]: {
              alignItems: 'center',
              padding: `0 ${fe(w)}`,
              lineHeight: 1,
            },
          },
          '&-range, &-multiple': {
            [`${t}-clear`]: { insetInlineEnd: n },
            [`&${t}-small`]: { [`${t}-clear`]: { insetInlineEnd: g } },
          },
          '&-dropdown': {
            ...Pa(e),
            ...jm(e),
            'pointerEvents': 'none',
            'position': 'absolute',
            'top': -9999,
            'left': { _skip_check_: !0, value: -9999 },
            'zIndex': x,
            [`&${t}-dropdown-hidden`]: { display: 'none' },
            '&-rtl': { direction: 'rtl' },
            [`&${t}-dropdown-placement-bottomLeft,
            &${t}-dropdown-placement-bottomRight`]: {
              [`${t}-range-arrow`]: { top: 0, display: 'block', transform: 'translateY(-100%)' },
            },
            [`&${t}-dropdown-placement-topLeft,
            &${t}-dropdown-placement-topRight`]: {
              [`${t}-range-arrow`]: {
                bottom: 0,
                display: 'block',
                transform: 'translateY(100%) rotate(180deg)',
              },
            },
            [`&${r}-slide-up-appear, &${r}-slide-up-enter`]: {
              [`${t}-range-arrow${t}-range-arrow`]: { transition: 'none' },
            },
            [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-topRight`]: {
              animationName: Cl,
            },
            [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
              animationName: Sl,
            },
            [`&${r}-slide-up-leave ${t}-panel-container`]: { pointerEvents: 'none' },
            [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
              animationName: hl,
            },
            [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
              animationName: gl,
            },
            [`${t}-panel > ${t}-time-panel`]: { paddingTop: M },
            [`${t}-range-wrapper`]: { display: 'flex', position: 'relative' },
            [`${t}-range-arrow`]: {
              'position': 'absolute',
              'zIndex': 1,
              'display': 'none',
              'paddingInline': e.calc(n).mul(1.5).equal(),
              'boxSizing': 'content-box',
              'transition': `all ${P} ease-out`,
              ...jl(e, V, B),
              '&:before': { insetInlineStart: e.calc(n).mul(1.5).equal() },
            },
            [`${t}-panel-container`]: {
              overflow: 'hidden',
              verticalAlign: 'top',
              background: V,
              borderRadius: F,
              boxShadow: k,
              transition: `margin ${P}`,
              display: 'inline-block',
              pointerEvents: 'auto',
              [`${t}-panel-layout`]: { display: 'flex', flexWrap: 'nowrap', alignItems: 'stretch' },
              [`${t}-presets`]: {
                display: 'flex',
                flexDirection: 'column',
                minWidth: N,
                maxWidth: j,
                ul: {
                  height: 0,
                  flex: 'auto',
                  listStyle: 'none',
                  overflow: 'auto',
                  margin: 0,
                  padding: w,
                  borderInlineEnd: `${fe(a)} ${o} ${O}`,
                  li: {
                    ...sl,
                    'borderRadius': D,
                    'paddingInline': w,
                    'paddingBlock': e.calc(y).sub(L).div(2).equal(),
                    'cursor': 'pointer',
                    'transition': `all ${P}`,
                    '+ li': { marginTop: h },
                    '&:hover': { background: T },
                  },
                },
              },
              [`${t}-panels`]: {
                'display': 'inline-flex',
                'flexWrap': 'nowrap',
                '&:last-child': { [`${t}-panel`]: { borderWidth: 0 } },
              },
              [`${t}-panel`]: {
                'verticalAlign': 'top',
                'background': 'transparent',
                'borderRadius': 0,
                'borderWidth': 0,
                [`${t}-content, table`]: { textAlign: 'center' },
                '&-focused': { borderColor: l },
              },
            },
          },
          '&-dropdown-range': {
            'padding': `${fe(e.calc(R).mul(2).div(3).equal())} 0`,
            '&-hidden': { display: 'none' },
          },
          '&-rtl': {
            direction: 'rtl',
            [`${t}-separator`]: { transform: 'scale(-1, 1)' },
            [`${t}-footer`]: { '&-extra': { direction: 'rtl' } },
          },
        },
      },
      Oa(e, 'slide-up'),
      Oa(e, 'slide-down'),
      Ia(e, 'move-up'),
      Ia(e, 'move-down'),
    ];
  },
  qi = ul(
    'DatePicker',
    (e) => {
      const t = Vn(_l(e), Em(e), {
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      });
      return [
        Dm(t),
        Nm(t),
        km(t),
        Rm(t),
        xm(t),
        cl(e, { focusElCls: `${e.componentCls}-focused` }),
      ];
    },
    Tm,
  );
var Hm = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
        },
      },
    ],
  },
  name: 'swap-right',
  theme: 'outlined',
};
function fa() {
  return (
    (fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fa.apply(this, arguments)
  );
}
const Vm = (e, t) => c.createElement(pa, fa({}, e, { ref: t, icon: Hm })),
  Fm = c.forwardRef(Vm),
  Xi = (e, t, r, n, a, o) => {
    const { classNames: l, styles: i } = Uo(e),
      [u, f] = fl([l, t], [i, r], { props: o }, { popup: { _default: 'root' } });
    return c.useMemo(() => {
      const s = { ...u, popup: { ...u.popup, root: ve(u.popup?.root, n) } },
        m = { ...f, popup: { ...f.popup, root: { ...f.popup?.root, ...a } } };
      return [s, m];
    }, [u, f, n, a]);
  };
function Wm(e, t, r) {
  return r !== void 0
    ? r
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.yearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.quarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.monthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.weekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.placeholder
              : e.lang.placeholder;
}
function Ym(e, t, r) {
  return r !== void 0
    ? r
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.rangeYearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.rangeQuarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.rangeMonthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.rangeWeekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.rangePlaceholder
              : e.lang.rangePlaceholder;
}
function Gi(e, t) {
  const { allowClear: r = !0 } = e,
    { clearIcon: n, removeIcon: a } = dl({ ...e, componentName: 'DatePicker' });
  return [c.useMemo(() => (r === !1 ? !1 : { clearIcon: n, ...(r === !0 ? {} : r) }), [r, n]), a];
}
const [Lm, Bm] = ['week', 'WeekPicker'],
  [Um, Km] = ['month', 'MonthPicker'],
  [zm, qm] = ['year', 'YearPicker'],
  [Xm, Gm] = ['quarter', 'QuarterPicker'],
  [$a, Hn] = ['time', 'TimePicker'];
var Qm = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
        },
      },
    ],
  },
  name: 'calendar',
  theme: 'outlined',
};
function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
const Zm = (e, t) => c.createElement(pa, da({}, e, { ref: t, icon: Qm })),
  Jm = c.forwardRef(Zm);
var ev = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
        },
      },
    ],
  },
  name: 'clock-circle',
  theme: 'outlined',
};
function ma() {
  return (
    (ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ma.apply(this, arguments)
  );
}
const tv = (e, t) => c.createElement(pa, ma({}, e, { ref: t, icon: ev })),
  rv = c.forwardRef(tv),
  Qi = ({ picker: e, hasFeedback: t, feedbackIcon: r, suffixIcon: n }) =>
    n === null || n === !1
      ? null
      : n === !0 || n === void 0
        ? ot.createElement(
            ot.Fragment,
            null,
            e === $a ? ot.createElement(rv, null) : ot.createElement(Jm, null),
            t && r,
          )
        : n,
  nv = (e) => c.createElement(ml, { size: 'small', type: 'primary', ...e });
function Zi(e) {
  return c.useMemo(() => ({ button: nv, ...e }), [e]);
}
const av = (e) =>
    c.forwardRef((r, n) => {
      const {
          prefixCls: a,
          getPopupContainer: o,
          components: l,
          className: i,
          style: u,
          classNames: f,
          styles: s,
          placement: m,
          size: d,
          disabled: p,
          bordered: v = !0,
          placeholder: b,
          status: y,
          variant: g,
          picker: w,
          dropdownClassName: h,
          popupClassName: C,
          popupStyle: $,
          rootClassName: S,
          suffixIcon: P,
          separator: x,
          ...M
        } = r,
        R = w === $a ? 'timePicker' : 'datePicker',
        [V, F] = Xi(R, f, s, C || h, $),
        k = c.useRef(null),
        { getPrefixCls: D, direction: O, getPopupContainer: T, rangePicker: N } = c.useContext(Ko),
        j = D('picker', a),
        { compactSize: B, compactItemClassnames: L } = zo(j, O),
        W = D(),
        A = x ?? N?.separator,
        [_, E] = qo('rangePicker', g, v),
        J = ni(j),
        [Y, U] = qi(j, J),
        Q = ve(Y, U, J, S),
        [G] = Gi(r),
        te = Zi(l),
        X = Xo((se) => d ?? B ?? se),
        K = c.useContext(Go),
        Z = p ?? K,
        oe = c.useContext(Qo),
        { hasFeedback: de, status: ce, feedbackIcon: Se } = oe,
        ie = Qi({ picker: w, hasFeedback: de, feedbackIcon: Se, suffixIcon: P });
      c.useImperativeHandle(n, () => k.current);
      const [be] = Zo('Calendar', li),
        we = ii(be, r.locale || {}),
        [me] = Jo('DatePicker', F?.popup?.root?.zIndex);
      return c.createElement(
        ei,
        { space: !0 },
        c.createElement(tm, {
          separator: c.createElement(
            'span',
            { 'aria-label': 'to', 'className': `${j}-separator` },
            A ?? c.createElement(Fm, null),
          ),
          disabled: Z,
          ref: k,
          placement: m,
          placeholder: Ym(we, w, b),
          suffixIcon: ie,
          prevIcon: c.createElement('span', { className: `${j}-prev-icon` }),
          nextIcon: c.createElement('span', { className: `${j}-next-icon` }),
          superPrevIcon: c.createElement('span', { className: `${j}-super-prev-icon` }),
          superNextIcon: c.createElement('span', { className: `${j}-super-next-icon` }),
          transitionName: `${W}-slide-up`,
          picker: w,
          ...M,
          locale: we.lang,
          getPopupContainer: o || T,
          generateConfig: e,
          components: te,
          direction: O,
          prefixCls: j,
          rootClassName: Q,
          className: ve(
            { [`${j}-large`]: X === 'large', [`${j}-small`]: X === 'small', [`${j}-${_}`]: E },
            ti(j, ri(ce, y), de),
            L,
            i,
            N?.className,
          ),
          style: { ...N?.style, ...u },
          classNames: V,
          styles: { ...F, popup: { ...F.popup, root: { ...F.popup.root, zIndex: me } } },
          allowClear: G,
        }),
      );
    }),
  ov = (e) => {
    const t = (u, f) => {
        const s = f === Hn ? 'timePicker' : 'datePicker';
        return c.forwardRef((d, p) => {
          const {
              prefixCls: v,
              getPopupContainer: b,
              components: y,
              style: g,
              className: w,
              size: h,
              bordered: C,
              placement: $,
              placeholder: S,
              disabled: P,
              status: x,
              variant: M,
              onCalendarChange: R,
              classNames: V,
              styles: F,
              dropdownClassName: k,
              popupClassName: D,
              popupStyle: O,
              rootClassName: T,
              suffixIcon: N,
              ...j
            } = d,
            { suffixIcon: B } = Uo(f === Hn ? 'timePicker' : 'datePicker'),
            { getPrefixCls: L, direction: W, getPopupContainer: A, [s]: _ } = c.useContext(Ko),
            E = L('picker', v),
            { compactSize: J, compactItemClassnames: Y } = zo(E, W),
            U = Xo((z) => h ?? J ?? z),
            Q = c.useContext(Go),
            G = P ?? Q,
            te = { ...d, size: U, disabled: G, status: x, variant: M },
            [X, K] = Xi(s, V, F, D || k, O, te),
            Z = c.useRef(null),
            [oe, de] = qo('datePicker', M, C),
            ce = ni(E),
            [Se, ie] = qi(E, ce),
            be = ve(Se, ie, ce, T);
          c.useImperativeHandle(p, () => Z.current);
          const we = { showToday: !0 },
            me = u || d.picker,
            se = L(),
            { onSelect: De, multiple: ye } = j,
            We = De && u === 'time' && !ye,
            Ee = (z, H, I) => {
              (R?.(z, H, I), We && De(z));
            },
            [$e, Pe] = Gi(d),
            _e = Zi(y),
            Oe = c.useContext(Qo),
            { hasFeedback: ke, status: ge, feedbackIcon: Be } = Oe,
            Ae = Qi({
              picker: me,
              hasFeedback: ke,
              feedbackIcon: Be,
              suffixIcon: N === void 0 ? B : N,
            }),
            [Me] = Zo('DatePicker', li),
            he = ii(Me, d.locale || {}),
            [ae] = Jo('DatePicker', K?.popup?.root?.zIndex);
          return c.createElement(
            ei,
            { space: !0 },
            c.createElement(Om, {
              ref: Z,
              placeholder: Wm(he, me, S),
              suffixIcon: Ae,
              placement: $,
              prevIcon: c.createElement('span', { className: `${E}-prev-icon` }),
              nextIcon: c.createElement('span', { className: `${E}-next-icon` }),
              superPrevIcon: c.createElement('span', { className: `${E}-super-prev-icon` }),
              superNextIcon: c.createElement('span', { className: `${E}-super-next-icon` }),
              transitionName: `${se}-slide-up`,
              picker: u,
              onCalendarChange: Ee,
              ...we,
              ...j,
              locale: he.lang,
              getPopupContainer: b || A,
              generateConfig: e,
              components: _e,
              direction: W,
              disabled: G,
              prefixCls: E,
              rootClassName: be,
              className: ve(
                {
                  [`${E}-large`]: U === 'large',
                  [`${E}-small`]: U === 'small',
                  [`${E}-${oe}`]: de,
                },
                ti(E, ri(ge, x), ke),
                Y,
                _?.className,
                w,
              ),
              style: { ..._?.style, ...g },
              classNames: X,
              styles: { ...K, popup: { ...K.popup, root: { ...K.popup.root, zIndex: ae } } },
              allowClear: $e,
              removeIcon: Pe,
            }),
          );
        });
      },
      r = t(),
      n = t(Lm, Bm),
      a = t(Um, Km),
      o = t(zm, qm),
      l = t(Xm, Gm),
      i = t($a, Hn);
    return {
      DatePicker: r,
      WeekPicker: n,
      MonthPicker: a,
      YearPicker: o,
      TimePicker: i,
      QuarterPicker: l,
    };
  },
  Ji = (e) => {
    const {
        DatePicker: t,
        WeekPicker: r,
        MonthPicker: n,
        YearPicker: a,
        TimePicker: o,
        QuarterPicker: l,
      } = ov(e),
      i = av(e),
      u = t;
    return (
      (u.WeekPicker = r),
      (u.MonthPicker = n),
      (u.YearPicker = a),
      (u.RangePicker = i),
      (u.TimePicker = o),
      (u.QuarterPicker = l),
      u
    );
  },
  Cr = Ji(ql),
  iv = ai(Cr, 'popupAlign', void 0, 'picker');
Cr._InternalPanelDoNotUseOrYouWillBeFired = iv;
const lv = ai(Cr.RangePicker, 'popupAlign', void 0, 'picker');
Cr._InternalRangePanelDoNotUseOrYouWillBeFired = lv;
Cr.generatePicker = Ji;
export { Cr as D, Tn as R, Mm as a, ql as b, Tl as c, jm as g, Em as i, Hl as l, Xi as u, Yl as w };
