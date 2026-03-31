import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  bh as qe,
  e5 as Oe,
  d2 as Ge,
  d3 as Ue,
  e3 as k,
  d7 as dt,
  bN as ft,
  b8 as mt,
  b9 as gt,
  bV as pt,
  co as ht,
  ba as Te,
  fC as vt,
  bb as je,
  d4 as Xe,
  d6 as bt,
  cK as St,
  bO as Nt,
  d8 as yt,
  bc as It,
  al as Et,
  be as $t,
  d9 as xt,
  da as wt,
  eF as Ct,
  dH as Mt,
  aj as Dt,
} from './index-C8UyLGsD.js';
import { R as Rt } from './PlusOutlined-Budj8ek_.js';
import {
  v as Bt,
  w as oe,
  c as O,
  h as _t,
  B as Ee,
  u as A,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as At } from './Input-BIU8BRU1.js';
import {
  a as kt,
  i as Ft,
  h as Vt,
  j as Pt,
  k as Ot,
  l as Tt,
  m as Lt,
  f as Ht,
} from './index-RoMbEimC.js';
var Wt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'minus',
  theme: 'outlined',
};
function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    $e.apply(this, arguments)
  );
}
const zt = (t, e) => a.createElement(qe, $e({}, t, { ref: e, icon: Wt })),
  qt = a.forwardRef(zt);
var Gt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
        },
      },
    ],
  },
  name: 'up',
  theme: 'outlined',
};
function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    xe.apply(this, arguments)
  );
}
const Ut = (t, e) => a.createElement(qe, xe({}, t, { ref: e, icon: Gt })),
  jt = a.forwardRef(Ut);
function we() {
  return typeof BigInt == 'function';
}
function Ke(t) {
  return (!t && t !== 0 && !Number.isNaN(t)) || !String(t).trim();
}
function G(t) {
  var e = t.trim(),
    n = e.startsWith('-');
  (n && (e = e.slice(1)),
    (e = e
      .replace(/(\.\d*[^0])0*$/, '$1')
      .replace(/\.0*$/, '')
      .replace(/^0+/, '')),
    e.startsWith('.') && (e = '0'.concat(e)));
  var r = e || '0',
    s = r.split('.'),
    o = s[0] || '0',
    u = s[1] || '0';
  o === '0' && u === '0' && (n = !1);
  var m = n ? '-' : '';
  return {
    negative: n,
    negativeStr: m,
    trimStr: r,
    integerStr: o,
    decimalStr: u,
    fullStr: ''.concat(m).concat(r),
  };
}
function le(t) {
  var e = String(t);
  return !Number.isNaN(Number(e)) && e.includes('e');
}
function Ye(t) {
  var e = t.toLowerCase().split('e'),
    n = Oe(e, 2),
    r = n[0],
    s = n[1],
    o = s === void 0 ? '0' : s,
    u = r.startsWith('-'),
    m = u ? r.slice(1) : r,
    g = m.split('.'),
    c = Oe(g, 2),
    d = c[0],
    b = d === void 0 ? '0' : d,
    p = c[1],
    v = p === void 0 ? '' : p,
    S = ''.concat(b).concat(v).replace(/^0+/, '') || '0';
  return { decimal: v, digits: S, exponent: Number(o), integer: b, negative: u };
}
function Xt(t) {
  var e = t.decimal,
    n = t.digits,
    r = t.exponent,
    s = t.integer,
    o = t.negative;
  if (n === '0') return '0';
  var u = s.replace(/^0+/, '').length,
    m = (e.match(/^0*/) || [''])[0].length,
    g = u || -m,
    c = g + r,
    d = '';
  return (
    c <= 0
      ? (d = '0.'.concat('0'.repeat(-c)).concat(n))
      : c >= n.length
        ? (d = ''.concat(n).concat('0'.repeat(c - n.length)))
        : (d = ''.concat(n.slice(0, c), '.').concat(n.slice(c))),
    ''.concat(o ? '-' : '').concat(d)
  );
}
function Ze(t) {
  return t.exponent >= 0
    ? Math.max(0, t.decimal.length - t.exponent)
    : Math.abs(t.exponent) + t.decimal.length;
}
function q(t) {
  var e = String(t);
  return le(t) ? Ze(Ye(e)) : e.includes('.') && Ce(e) ? e.length - e.indexOf('.') - 1 : 0;
}
function ue(t) {
  var e = String(t);
  if (le(t)) {
    if (t > Number.MAX_SAFE_INTEGER)
      return String(we() ? BigInt(t).toString() : Number.MAX_SAFE_INTEGER);
    if (t < Number.MIN_SAFE_INTEGER)
      return String(we() ? BigInt(t).toString() : Number.MIN_SAFE_INTEGER);
    var n = Ye(e),
      r = Ze(n);
    e = r > 100 ? Xt(n) : t.toFixed(r);
  }
  return G(e).fullStr;
}
function Ce(t) {
  return typeof t == 'number'
    ? !Number.isNaN(t)
    : t
      ? /^\s*-?\d+(\.\d+)?\s*$/.test(t) || /^\s*-?\d+\.\s*$/.test(t) || /^\s*-?\.\d+\s*$/.test(t)
      : !1;
}
var Kt = (function () {
    function t(e) {
      if (
        (Ue(this, t),
        k(this, 'origin', ''),
        k(this, 'negative', void 0),
        k(this, 'integer', void 0),
        k(this, 'decimal', void 0),
        k(this, 'decimalLen', void 0),
        k(this, 'empty', void 0),
        k(this, 'nan', void 0),
        Ke(e))
      ) {
        this.empty = !0;
        return;
      }
      if (((this.origin = String(e)), e === '-' || Number.isNaN(e))) {
        this.nan = !0;
        return;
      }
      var n = e;
      if ((le(n) && (n = Number(n)), (n = typeof n == 'string' ? n : ue(n)), Ce(n))) {
        var r = G(n);
        this.negative = r.negative;
        var s = r.trimStr.split('.');
        this.integer = BigInt(s[0]);
        var o = s[1] || '0';
        ((this.decimal = BigInt(o)), (this.decimalLen = o.length));
      } else this.nan = !0;
    }
    return (
      Ge(t, [
        {
          key: 'getMark',
          value: function () {
            return this.negative ? '-' : '';
          },
        },
        {
          key: 'getIntegerStr',
          value: function () {
            return this.integer.toString();
          },
        },
        {
          key: 'getDecimalStr',
          value: function () {
            return this.decimal.toString().padStart(this.decimalLen, '0');
          },
        },
        {
          key: 'alignDecimal',
          value: function (n) {
            var r = ''
              .concat(this.getMark())
              .concat(this.getIntegerStr())
              .concat(this.getDecimalStr().padEnd(n, '0'));
            return BigInt(r);
          },
        },
        {
          key: 'negate',
          value: function () {
            var n = new t(this.toString());
            return ((n.negative = !n.negative), n);
          },
        },
        {
          key: 'cal',
          value: function (n, r, s) {
            var o = Math.max(this.getDecimalStr().length, n.getDecimalStr().length),
              u = this.alignDecimal(o),
              m = n.alignDecimal(o),
              g = r(u, m).toString(),
              c = s(o),
              d = G(g),
              b = d.negativeStr,
              p = d.trimStr,
              v = ''.concat(b).concat(p.padStart(c + 1, '0'));
            return new t(''.concat(v.slice(0, -c), '.').concat(v.slice(-c)));
          },
        },
        {
          key: 'add',
          value: function (n) {
            if (this.isInvalidate()) return new t(n);
            var r = new t(n);
            return r.isInvalidate()
              ? this
              : this.cal(
                  r,
                  function (s, o) {
                    return s + o;
                  },
                  function (s) {
                    return s;
                  },
                );
          },
        },
        {
          key: 'multi',
          value: function (n) {
            var r = new t(n);
            return this.isInvalidate() || r.isInvalidate()
              ? new t(NaN)
              : this.cal(
                  r,
                  function (s, o) {
                    return s * o;
                  },
                  function (s) {
                    return s * 2;
                  },
                );
          },
        },
        {
          key: 'isEmpty',
          value: function () {
            return this.empty;
          },
        },
        {
          key: 'isNaN',
          value: function () {
            return this.nan;
          },
        },
        {
          key: 'isInvalidate',
          value: function () {
            return this.isEmpty() || this.isNaN();
          },
        },
        {
          key: 'equals',
          value: function (n) {
            return this.toString() === n?.toString();
          },
        },
        {
          key: 'lessEquals',
          value: function (n) {
            return this.add(n.negate().toString()).toNumber() <= 0;
          },
        },
        {
          key: 'toNumber',
          value: function () {
            return this.isNaN() ? NaN : Number(this.toString());
          },
        },
        {
          key: 'toString',
          value: function () {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return n
              ? this.isInvalidate()
                ? ''
                : G(
                    ''
                      .concat(this.getMark())
                      .concat(this.getIntegerStr(), '.')
                      .concat(this.getDecimalStr()),
                  ).fullStr
              : this.origin;
          },
        },
      ]),
      t
    );
  })(),
  Yt = (function () {
    function t(e) {
      if (
        (Ue(this, t),
        k(this, 'origin', ''),
        k(this, 'number', void 0),
        k(this, 'empty', void 0),
        Ke(e))
      ) {
        this.empty = !0;
        return;
      }
      ((this.origin = String(e)), (this.number = Number(e)));
    }
    return (
      Ge(t, [
        {
          key: 'negate',
          value: function () {
            return new t(-this.toNumber());
          },
        },
        {
          key: 'add',
          value: function (n) {
            if (this.isInvalidate()) return new t(n);
            var r = Number(n);
            if (Number.isNaN(r)) return this;
            var s = this.number + r;
            if (s > Number.MAX_SAFE_INTEGER) return new t(Number.MAX_SAFE_INTEGER);
            if (s < Number.MIN_SAFE_INTEGER) return new t(Number.MIN_SAFE_INTEGER);
            var o = Math.max(q(this.number), q(r));
            return new t(s.toFixed(o));
          },
        },
        {
          key: 'multi',
          value: function (n) {
            var r = Number(n);
            if (this.isInvalidate() || Number.isNaN(r)) return new t(NaN);
            var s = this.number * r;
            if (s > Number.MAX_SAFE_INTEGER) return new t(Number.MAX_SAFE_INTEGER);
            if (s < Number.MIN_SAFE_INTEGER) return new t(Number.MIN_SAFE_INTEGER);
            var o = Math.max(q(this.number), q(r));
            return new t(s.toFixed(o));
          },
        },
        {
          key: 'isEmpty',
          value: function () {
            return this.empty;
          },
        },
        {
          key: 'isNaN',
          value: function () {
            return Number.isNaN(this.number);
          },
        },
        {
          key: 'isInvalidate',
          value: function () {
            return this.isEmpty() || this.isNaN();
          },
        },
        {
          key: 'equals',
          value: function (n) {
            return this.toNumber() === n?.toNumber();
          },
        },
        {
          key: 'lessEquals',
          value: function (n) {
            return this.add(n.negate().toString()).toNumber() <= 0;
          },
        },
        {
          key: 'toNumber',
          value: function () {
            return this.number;
          },
        },
        {
          key: 'toString',
          value: function () {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return n
              ? this.isInvalidate()
                ? ''
                : le(this.number) && q(this.number) > 100
                  ? String(this.number)
                  : ue(this.number)
              : this.origin;
          },
        },
      ]),
      t
    );
  })();
function w(t) {
  return we() ? new Kt(t) : new Yt(t);
}
function se(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (t === '') return '';
  var s = G(t),
    o = s.negativeStr,
    u = s.integerStr,
    m = s.decimalStr,
    g = ''.concat(e).concat(m),
    c = ''.concat(o).concat(u);
  if (n >= 0) {
    var d = Number(m[n]);
    if (d >= 5 && !r) {
      var b = w(t).add(
        ''
          .concat(o, '0.')
          .concat('0'.repeat(n))
          .concat(10 - d),
      );
      return se(b.toString(), e, n, r);
    }
    return n === 0 ? c : ''.concat(c).concat(e).concat(m.padEnd(n, '0').slice(0, n));
  }
  return g === '.0' ? c : ''.concat(c).concat(g);
}
function Zt(t, e) {
  return typeof Proxy < 'u' && t
    ? new Proxy(t, {
        get(n, r) {
          if (e[r]) return e[r];
          const s = n[r];
          return typeof s == 'function' ? s.bind(n) : s;
        },
      })
    : t;
}
function Jt(t, e) {
  const n = a.useRef(null);
  function r() {
    try {
      const { selectionStart: o, selectionEnd: u, value: m } = t,
        g = m.substring(0, o),
        c = m.substring(u);
      n.current = { start: o, end: u, value: m, beforeTxt: g, afterTxt: c };
    } catch {}
  }
  function s() {
    if (t && n.current && e)
      try {
        const { value: o } = t,
          { beforeTxt: u, afterTxt: m, start: g } = n.current;
        let c = o.length;
        if (o.startsWith(u)) c = u.length;
        else if (o.endsWith(m)) c = o.length - n.current.afterTxt.length;
        else {
          const d = u[g - 1],
            b = o.indexOf(d, g - 1);
          b !== -1 && (c = b + 1);
        }
        t.setSelectionRange(c, c);
      } catch (o) {
        Bt(!1, `Something warning of cursor restore. Please fire issue about this: ${o.message}`);
      }
  }
  return [r, s];
}
const Qt = 200,
  en = 600;
function Le({
  prefixCls: t,
  action: e,
  children: n,
  disabled: r,
  className: s,
  style: o,
  onStep: u,
}) {
  const m = e === 'up',
    g = a.useRef(),
    c = a.useRef([]),
    d = () => {
      clearTimeout(g.current);
    },
    b = (y) => {
      (y.preventDefault(), d(), u(m, 'handler'));
      function E() {
        (u(m, 'handler'), (g.current = setTimeout(E, Qt)));
      }
      g.current = setTimeout(E, en);
    };
  a.useEffect(
    () => () => {
      (d(),
        c.current.forEach((y) => {
          oe.cancel(y);
        }));
    },
    [],
  );
  const p = `${t}-action`,
    v = O(p, `${p}-${e}`, { [`${p}-${e}-disabled`]: r }, s),
    S = () => c.current.push(oe(d));
  return a.createElement(
    'span',
    {
      'unselectable': 'on',
      'role': 'button',
      'onMouseUp': S,
      'onMouseLeave': S,
      'onMouseDown': (y) => {
        b(y);
      },
      'aria-label': m ? 'Increase Value' : 'Decrease Value',
      'aria-disabled': r,
      'className': v,
      'style': o,
    },
    n || a.createElement('span', { unselectable: 'on', className: `${t}-action-${e}-inner` }),
  );
}
function He(t) {
  const e = typeof t == 'number' ? ue(t) : G(t).fullStr;
  return e.includes('.') ? G(e.replace(/(\d)\.(\d)/g, '$1$2.')).fullStr : t + '0';
}
const tn = () => {
  const t = a.useRef(0),
    e = () => {
      oe.cancel(t.current);
    };
  return (
    a.useEffect(() => e, []),
    (n) => {
      (e(),
        (t.current = oe(() => {
          n();
        })));
    }
  );
};
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    te.apply(this, arguments)
  );
}
const We = (t, e) => (t || e.isEmpty() ? e.toString() : e.toNumber()),
  ze = (t) => {
    const e = w(t);
    return e.isInvalidate() ? null : e;
  },
  nn = a.forwardRef((t, e) => {
    const {
        mode: n = 'input',
        prefixCls: r = 'rc-input-number',
        className: s,
        style: o,
        classNames: u,
        styles: m,
        min: g,
        max: c,
        step: d = 1,
        defaultValue: b,
        value: p,
        disabled: v,
        readOnly: S,
        upHandler: y,
        downHandler: E,
        keyboard: F,
        changeOnWheel: C = !1,
        controls: V = !0,
        prefix: $,
        suffix: P,
        stringMode: H,
        parser: T,
        formatter: M,
        precision: D,
        decimalSeparator: R,
        onChange: B,
        onInput: N,
        onPressEnter: I,
        onStep: ce,
        onMouseDown: de,
        onClick: K,
        onMouseUp: Y,
        onMouseLeave: fe,
        onMouseMove: ne,
        onMouseEnter: me,
        onMouseOut: ge,
        changeOnBlur: Z = !0,
        ...pe
      } = t,
      [J, re] = a.useState(!1),
      _ = a.useRef(!1),
      L = a.useRef(!1),
      W = a.useRef(!1),
      ie = a.useRef(null),
      x = a.useRef(null);
    a.useImperativeHandle(e, () =>
      Zt(x.current, {
        focus: (i) => {
          dt(x.current, i);
        },
        blur: () => {
          x.current?.blur();
        },
        nativeElement: ie.current,
      }),
    );
    const [h, Me] = a.useState(() => w(p ?? b));
    function Qe(i) {
      p === void 0 && Me(i);
    }
    const he = a.useCallback(
        (i, f) => {
          if (!f) return D >= 0 ? D : Math.max(q(i), q(d));
        },
        [D, d],
      ),
      ve = a.useCallback(
        (i) => {
          const f = String(i);
          if (T) return T(f);
          let l = f;
          return (R && (l = l.replace(R, '.')), l.replace(/[^\w.-]+/g, ''));
        },
        [T, R],
      ),
      be = a.useRef(''),
      De = a.useCallback(
        (i, f) => {
          if (M) return M(i, { userTyping: f, input: String(be.current) });
          let l = typeof i == 'number' ? ue(i) : i;
          if (!f) {
            const z = he(l, f);
            Ce(l) && (R || z >= 0) && (l = se(l, R || '.', z));
          }
          return l;
        },
        [M, he, R],
      ),
      [Q, Re] = a.useState(() => {
        const i = b ?? p;
        return h.isInvalidate() && ['string', 'number'].includes(typeof i)
          ? Number.isNaN(i)
            ? ''
            : i
          : De(h.toString(), !1);
      });
    be.current = Q;
    function ee(i, f) {
      Re(De(i.isInvalidate() ? i.toString(!1) : i.toString(!f), f));
    }
    const U = a.useMemo(() => ze(c), [c, D]),
      j = a.useMemo(() => ze(g), [g, D]),
      Be = a.useMemo(() => (!U || !h || h.isInvalidate() ? !1 : U.lessEquals(h)), [U, h]),
      _e = a.useMemo(() => (!j || !h || h.isInvalidate() ? !1 : h.lessEquals(j)), [j, h]),
      [et, tt] = Jt(x.current, J),
      Ae = (i) => (U && !i.lessEquals(U) ? U : j && !j.lessEquals(i) ? j : null),
      Se = (i) => !Ae(i),
      ae = (i, f) => {
        let l = i,
          z = Se(l) || l.isEmpty();
        if ((!l.isEmpty() && !f && ((l = Ae(l) || l), (z = !0)), !S && !v && z)) {
          const X = l.toString(),
            Ie = he(X, f);
          return (
            Ie >= 0 && ((l = w(se(X, '.', Ie))), Se(l) || (l = w(se(X, '.', Ie, !0)))),
            l.equals(h) || (Qe(l), B?.(l.isEmpty() ? null : We(H, l)), p === void 0 && ee(l, f)),
            l
          );
        }
        return h;
      },
      nt = tn(),
      Ne = (i) => {
        if ((et(), (be.current = i), Re(i), !L.current)) {
          const f = ve(i),
            l = w(f);
          l.isNaN() || ae(l, !0);
        }
        (N?.(i),
          nt(() => {
            let f = i;
            (T || (f = i.replace(/。/g, '.')), f !== i && Ne(f));
          }));
      },
      rt = () => {
        L.current = !0;
      },
      it = () => {
        ((L.current = !1), Ne(x.current.value));
      },
      at = (i) => {
        Ne(i.target.value);
      },
      ye = _t((i, f) => {
        if ((i && Be) || (!i && _e)) return;
        _.current = !1;
        let l = w(W.current ? He(d) : d);
        i || (l = l.negate());
        const z = (h || w(0)).add(l.toString()),
          X = ae(z, !1);
        (ce?.(We(H, X), { offset: W.current ? He(d) : d, type: i ? 'up' : 'down', emitter: f }),
          x.current?.focus());
      }),
      ke = (i) => {
        const f = w(ve(Q));
        let l;
        (f.isNaN() ? (l = ae(h, i)) : (l = ae(f, i)),
          p !== void 0 ? ee(h, !1) : l.isNaN() || ee(l, !1));
      },
      st = () => {
        _.current = !0;
      },
      ot = (i) => {
        const { key: f, shiftKey: l } = i;
        ((_.current = !0),
          (W.current = l),
          f === 'Enter' && (L.current || (_.current = !1), ke(!1), I?.(i)),
          F !== !1 &&
            !L.current &&
            ['Up', 'ArrowUp', 'Down', 'ArrowDown'].includes(f) &&
            (ye(f === 'Up' || f === 'ArrowUp', 'keyboard'), i.preventDefault()));
      },
      lt = () => {
        ((_.current = !1), (W.current = !1));
      };
    a.useEffect(() => {
      if (C && J) {
        const i = (l) => {
            (ye(l.deltaY < 0, 'wheel'), l.preventDefault());
          },
          f = x.current;
        if (f)
          return (
            f.addEventListener('wheel', i, { passive: !1 }),
            () => f.removeEventListener('wheel', i)
          );
      }
    });
    const ut = () => {
        (Z && ke(!1), re(!1), (_.current = !1));
      },
      ct = (i) => {
        (x.current && i.target !== x.current && (x.current.focus(), i.preventDefault()), de?.(i));
      };
    (Ee(() => {
      h.isInvalidate() || ee(h, !1);
    }, [D, M]),
      Ee(() => {
        const i = w(p);
        Me(i);
        const f = w(ve(Q));
        (!i.equals(f) || !_.current || M) && ee(i, _.current);
      }, [p]),
      Ee(() => {
        M && tt();
      }, [Q]));
    const Fe = { prefixCls: r, onStep: ye, className: u?.action, style: m?.action },
      Ve = a.createElement(Le, te({}, Fe, { action: 'up', disabled: Be }), y),
      Pe = a.createElement(Le, te({}, Fe, { action: 'down', disabled: _e }), E);
    return a.createElement(
      'div',
      {
        ref: ie,
        className: O(r, `${r}-mode-${n}`, s, u?.root, {
          [`${r}-focused`]: J,
          [`${r}-disabled`]: v,
          [`${r}-readonly`]: S,
          [`${r}-not-a-number`]: h.isNaN(),
          [`${r}-out-of-range`]: !h.isInvalidate() && !Se(h),
        }),
        style: { ...m?.root, ...o },
        onMouseDown: ct,
        onMouseUp: Y,
        onMouseLeave: fe,
        onMouseMove: ne,
        onMouseEnter: me,
        onMouseOut: ge,
        onClick: K,
        onFocus: () => {
          re(!0);
        },
        onBlur: ut,
        onKeyDown: ot,
        onKeyUp: lt,
        onCompositionStart: rt,
        onCompositionEnd: it,
        onBeforeInput: st,
      },
      n === 'spinner' && V && Pe,
      $ !== void 0 &&
        a.createElement('div', { className: O(`${r}-prefix`, u?.prefix), style: m?.prefix }, $),
      a.createElement(
        'input',
        te(
          {
            'autoComplete': 'off',
            'role': 'spinbutton',
            'aria-valuemin': g,
            'aria-valuemax': c,
            'aria-valuenow': h.isInvalidate() ? null : h.toString(),
            'step': d,
            'ref': x,
            'className': O(`${r}-input`, u?.input),
            'style': m?.input,
            'value': Q,
            'onChange': at,
            'disabled': v,
            'readOnly': S,
          },
          pe,
        ),
      ),
      P !== void 0 &&
        a.createElement('div', { className: O(`${r}-suffix`, u?.suffix), style: m?.suffix }, P),
      n === 'spinner' && V && Ve,
      n === 'input' &&
        V &&
        a.createElement(
          'div',
          { className: O(`${r}-actions`, u?.actions), style: m?.actions },
          Ve,
          Pe,
        ),
    );
  }),
  rn = (t) => {
    const e = t.handleVisible ?? 'auto',
      n = t.controlHeightSM - t.lineWidth * 2;
    return {
      ...kt(t),
      controlWidth: 90,
      handleWidth: n,
      handleFontSize: t.fontSize / 2,
      handleVisible: e,
      handleActiveBg: t.colorFillAlter,
      handleBg: t.colorBgContainer,
      filledHandleBg: new ft(t.colorFillSecondary).onBackground(t.colorBgContainer).toHexString(),
      handleHoverColor: t.colorPrimary,
      handleBorderColor: t.colorBorder,
      handleOpacity: e === !0 ? 1 : 0,
      handleVisibleWidth: e === !0 ? n : 0,
    };
  },
  an = (t) => {
    const {
        componentCls: e,
        lineWidth: n,
        lineType: r,
        borderRadius: s,
        inputFontSizeSM: o,
        inputFontSizeLG: u,
        colorError: m,
        paddingInlineSM: g,
        paddingBlockSM: c,
        paddingBlockLG: d,
        paddingInlineLG: b,
        colorIcon: p,
        motionDurationMid: v,
        handleHoverColor: S,
        handleOpacity: y,
        paddingInline: E,
        paddingBlock: F,
        handleBg: C,
        handleActiveBg: V,
        inputAffixPadding: $,
        borderRadiusSM: P,
        controlWidth: H,
        handleBorderColor: T,
        filledHandleBg: M,
        lineHeightLG: D,
        antCls: R,
      } = t,
      B = `${A(n)} ${r} ${T}`,
      [N, I] = ht(R, 'input-number');
    return [
      {
        [e]: {
          ...Te(t),
          ...Ht(t),
          [N('input-padding-block')]: A(F),
          [N('input-padding-inline')]: A(E),
          'display': 'inline-flex',
          'width': H,
          'margin': 0,
          'paddingBlock': 0,
          'borderRadius': s,
          ...Lt(t, {
            [`${e}-actions`]: { background: C, [`${e}-action-down`]: { borderBlockStart: B } },
          }),
          ...Tt(t, {
            [`${e}-actions`]: { background: M, [`${e}-action-down`]: { borderBlockStart: B } },
            '&:focus-within': { [`${e}-actions`]: { background: C } },
          }),
          ...Ot(t, {
            [`${e}-actions`]: { background: C, [`${e}-action-down`]: { borderBlockStart: B } },
          }),
          ...Pt(t),
          [`&${e}-borderless`]: {
            paddingBlock: 0,
            [N('input-padding-block')]: A(t.calc(F).add(n).equal()),
          },
          [`&${e}-borderless${e}-sm`]: {
            paddingBlock: 0,
            [N('input-padding-block')]: A(t.calc(c).add(n).equal()),
          },
          [`&${e}-borderless${e}-lg`]: {
            paddingBlock: 0,
            [N('input-padding-block')]: A(t.calc(d).add(n).equal()),
          },
          '&-rtl': { direction: 'rtl', [`${e}-input`]: { direction: 'rtl' } },
          [`&${e}-out-of-range`]: { [`${e}-input`]: { color: m } },
          [`${e}-input`]: {
            ...Te(t),
            'width': '100%',
            'paddingBlock': I('input-padding-block'),
            'textAlign': 'start',
            'backgroundColor': 'transparent',
            'border': 0,
            'borderRadius': s,
            'outline': 0,
            'transition': `all ${v} linear`,
            'appearance': 'textfield',
            'fontSize': 'inherit',
            'lineHeight': 'inherit',
            ...Vt(t.colorTextPlaceholder),
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
              { margin: 0, appearance: 'none' },
          },
          [`&:hover ${e}-handler-wrap, &-focused ${e}-handler-wrap`]: {
            width: t.handleWidth,
            opacity: 1,
          },
          [`&-disabled ${e}-input`]: { cursor: 'not-allowed', color: t.colorTextDisabled },
        },
      },
      {
        [e]: {
          [`
          ${e}-action-up-disabled,
          ${e}-action-down-disabled
        `]: { cursor: 'not-allowed' },
          [`${e}-action`]: {
            ...vt(),
            'userSelect': 'none',
            'overflow': 'hidden',
            'fontWeight': 'bold',
            'lineHeight': 0,
            'textAlign': 'center',
            'cursor': 'pointer',
            'transition': `all ${v} linear`,
            '&:active': { background: V },
            '&:hover': { color: S },
          },
          '&-mode-input': {
            overflow: 'hidden',
            [`${e}-actions`]: {
              position: 'absolute',
              insetBlockStart: 0,
              insetInlineEnd: 0,
              width: t.handleVisibleWidth,
              opacity: y,
              height: '100%',
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              transition: `all ${v}`,
              overflow: 'hidden',
              [`${e}-action`]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 'auto',
                height: '40%',
                marginInlineEnd: 0,
                fontSize: t.handleFontSize,
              },
            },
            [`&:hover ${e}-actions, &-focused ${e}-actions`]: { width: t.handleWidth, opacity: 1 },
            [`${e}-action`]: {
              'color': p,
              'height': '50%',
              'borderInlineStart': B,
              '&:hover': { height: '60%' },
            },
            [`&${e}-disabled, &${e}-readonly`]: { [`${e}-actions`]: { display: 'none' } },
          },
          [`&${e}-mode-spinner`]: {
            padding: 0,
            width: 'auto',
            [`${e}-action`]: {
              'flex': 'none',
              'paddingInline': I('input-padding-inline'),
              '&-up': { borderInlineStart: B },
              '&-down': { borderInlineEnd: B },
            },
            [`${e}-input`]: { textAlign: 'center', paddingInline: I('input-padding-inline') },
          },
        },
      },
      {
        [e]: {
          '&-lg': {
            [N('input-padding-block')]: A(d),
            [N('input-padding-inline')]: A(b),
            paddingBlock: 0,
            fontSize: u,
            lineHeight: D,
          },
          '&-sm': {
            [N('input-padding-block')]: A(c),
            [N('input-padding-inline')]: A(g),
            paddingBlock: 0,
            fontSize: o,
            borderRadius: P,
          },
        },
      },
      {
        [e]: {
          [`${e}-prefix, ${e}-suffix`]: {
            display: 'flex',
            flex: 'none',
            alignItems: 'center',
            alignSelf: 'center',
            pointerEvents: 'none',
          },
          [`${e}-prefix`]: { marginInlineEnd: $ },
          [`${e}-suffix`]: { height: '100%', marginInlineStart: $, transition: `margin ${v}` },
          [`&:hover:not(${e}-without-controls)`]: {
            [`${e}-suffix`]: { marginInlineEnd: t.handleWidth },
          },
        },
      },
    ];
  },
  sn = (t) => {
    const { componentCls: e, antCls: n } = t;
    return { [`${e}-addon`]: { [`&:has(${n}-select)`]: { border: 0, padding: 0 } } };
  },
  on = mt(
    'InputNumber',
    (t) => {
      const e = gt(t, Ft(t));
      return [an(e), sn(e), pt(e)];
    },
    rn,
    { unitless: { handleOpacity: !0 }, resetFont: !1 },
  ),
  ln = a.forwardRef((t, e) => {
    const n = a.useRef(null);
    a.useImperativeHandle(e, () => n.current);
    const {
        rootClassName: r,
        size: s,
        disabled: o,
        prefixCls: u,
        addonBefore: m,
        addonAfter: g,
        prefix: c,
        suffix: d,
        bordered: b,
        readOnly: p,
        status: v,
        controls: S = !0,
        variant: y,
        className: E,
        style: F,
        classNames: C,
        styles: V,
        mode: $,
        ...P
      } = t,
      { direction: H, className: T, style: M, styles: D, classNames: R } = je('inputNumber'),
      B = a.useContext(Nt),
      N = o ?? B,
      I = a.useMemo(() => (!S || N || p ? !1 : S), [S, N, p]),
      { compactSize: ce, compactItemClassnames: de } = yt(u, H);
    let K = $ === 'spinner' ? a.createElement(Rt, null) : a.createElement(jt, null),
      Y = $ === 'spinner' ? a.createElement(qt, null) : a.createElement(Mt, null);
    const fe = typeof I == 'boolean' ? I : void 0;
    typeof I == 'object' && ((K = I.upIcon || K), (Y = I.downIcon || Y));
    const { hasFeedback: ne, isFormItemInput: me, feedbackIcon: ge } = a.useContext(Xe),
      Z = It((ie) => s ?? ce ?? ie),
      [pe, J] = Et('inputNumber', y, b),
      re = ne && a.createElement(a.Fragment, null, ge),
      _ = { ...t, size: Z, disabled: N, controls: I },
      [L, W] = $t([R, C], [D, V], { props: _ });
    return a.createElement(nn, {
      ref: n,
      mode: $,
      disabled: N,
      className: O(E, r, L.root, T, de, xt(u, v, ne), {
        [`${u}-${pe}`]: J,
        [`${u}-lg`]: Z === 'large',
        [`${u}-sm`]: Z === 'small',
        [`${u}-rtl`]: H === 'rtl',
        [`${u}-in-form-item`]: me,
        [`${u}-without-controls`]: !I,
      }),
      style: { ...W.root, ...M, ...F },
      upHandler: K,
      downHandler: Y,
      prefixCls: u,
      readOnly: p,
      controls: fe,
      prefix: c,
      suffix: re || d,
      classNames: L,
      styles: W,
      ...P,
    });
  }),
  Je = a.forwardRef((t, e) => {
    const {
        addonBefore: n,
        addonAfter: r,
        prefixCls: s,
        className: o,
        status: u,
        rootClassName: m,
        ...g
      } = t,
      { getPrefixCls: c } = je('inputNumber'),
      d = c('input-number', s),
      { status: b } = a.useContext(Xe),
      p = wt(b, u),
      v = St(d),
      [S, y] = on(d, v),
      E = n || r,
      F = a.createElement(ln, {
        ref: e,
        ...g,
        prefixCls: d,
        status: p,
        className: O(y, v, S, o),
        rootClassName: E ? void 0 : m,
      });
    if (E) {
      const C = (P) =>
          P
            ? a.createElement(
                At,
                {
                  className: O(`${d}-addon`, y, S),
                  variant: t.variant,
                  disabled: t.disabled,
                  status: p,
                },
                a.createElement(Ct, { form: !0 }, P),
              )
            : null,
        V = C(n),
        $ = C(r);
      return a.createElement(bt, { rootClassName: m }, V, F, $);
    }
    return F;
  }),
  un = Je,
  cn = (t) =>
    a.createElement(
      Dt,
      { theme: { components: { InputNumber: { handleVisible: !0 } } } },
      a.createElement(Je, { ...t }),
    );
un._InternalPanelDoNotUseOrYouWillBeFired = cn;
export { jt as R, un as T };
