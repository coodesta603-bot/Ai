import { r as p, R as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as O, h as j, a as J, b as xe, u as I } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  h7 as Re,
  h8 as we,
  h9 as He,
  ha as oe,
  hb as $t,
  hc as Ie,
  hd as vt,
  f5 as z,
  he as de,
  hf as ee,
  hg as ce,
  aD as yt,
  hh as Ne,
  ct as K,
  hi as T,
  gM as Et,
  hj as te,
  hk as Pt,
  bS as Me,
  cV as Rt,
  b8 as wt,
  b9 as Ht,
  bV as It,
  bb as Nt,
  bO as Mt,
  d8 as Dt,
  bc as Ot,
  be as At,
  d4 as zt,
  d9 as Ft,
  eF as Lt,
  cK as Vt,
  am as Wt,
} from './index-C8UyLGsD.js';
import { a as Bt } from './index-bx4f06U_.js';
import { u as Tt } from './index-BSuyBMRZ.js';
import { D as kt } from './index-BfwjtmVb.js';
import { S as Xt } from './index-BgCNGb7v.js';
import { T as qt } from './index-GXVeGAZV.js';
import { I as Gt } from './Input-BIU8BRU1.js';
import { a as jt, U as _t, S as Yt } from './index-BvIL68ic.js';
function Ut(e) {
  const t = 'touches' in e ? e.touches[0] : e,
    o = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset,
    n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return { pageX: t.pageX - o, pageY: t.pageY - n };
}
function De(e) {
  const {
      targetRef: t,
      containerRef: o,
      direction: n,
      onDragChange: l,
      onDragChangeComplete: c,
      calculate: r,
      color: i,
      disabledDrag: a,
    } = e,
    [m, d] = p.useState({ x: 0, y: 0 }),
    u = p.useRef(null),
    h = p.useRef(null);
  (p.useEffect(() => {
    d(r());
  }, [i]),
    p.useEffect(
      () => () => {
        (document.removeEventListener('mousemove', u.current),
          document.removeEventListener('mouseup', h.current),
          document.removeEventListener('touchmove', u.current),
          document.removeEventListener('touchend', h.current),
          (u.current = null),
          (h.current = null));
      },
      [],
    ));
  const f = (g) => {
      const { pageX: S, pageY: x } = Ut(g),
        { x: $, y: E, width: P, height: R } = o.current.getBoundingClientRect(),
        { width: N, height: D } = t.current.getBoundingClientRect(),
        F = N / 2,
        y = D / 2,
        M = Math.max(0, Math.min(S - $, P)) - F,
        q = Math.max(0, Math.min(x - E, R)) - y,
        w = { x: M, y: n === 'x' ? m.y : q };
      if ((N === 0 && D === 0) || N !== D) return !1;
      l?.(w);
    },
    C = (g) => {
      (g.preventDefault(), f(g));
    },
    b = (g) => {
      (g.preventDefault(),
        document.removeEventListener('mousemove', u.current),
        document.removeEventListener('mouseup', h.current),
        document.removeEventListener('touchmove', u.current),
        document.removeEventListener('touchend', h.current),
        (u.current = null),
        (h.current = null),
        c?.());
    };
  return [
    m,
    (g) => {
      (document.removeEventListener('mousemove', u.current),
        document.removeEventListener('mouseup', h.current),
        !a &&
          (f(g),
          document.addEventListener('mousemove', C),
          document.addEventListener('mouseup', b),
          document.addEventListener('touchmove', C),
          document.addEventListener('touchend', b),
          (u.current = C),
          (h.current = b)));
    },
  ];
}
const Oe = ({ size: e = 'default', color: t, prefixCls: o }) =>
    s.createElement('div', {
      className: O(`${o}-handler`, { [`${o}-handler-sm`]: e === 'small' }),
      style: { backgroundColor: t },
    }),
  Ae = ({ children: e, style: t, prefixCls: o }) =>
    s.createElement('div', { className: `${o}-palette`, style: { position: 'relative', ...t } }, e),
  ze = p.forwardRef((e, t) => {
    const { children: o, x: n, y: l } = e;
    return s.createElement(
      'div',
      {
        ref: t,
        style: {
          position: 'absolute',
          left: `${n}%`,
          top: `${l}%`,
          zIndex: 1,
          transform: 'translate(-50%, -50%)',
        },
      },
      o,
    );
  }),
  Kt = ({ color: e, onChange: t, prefixCls: o, onChangeComplete: n, disabled: l }) => {
    const c = p.useRef(),
      r = p.useRef(),
      i = p.useRef(e),
      a = j((u) => {
        const h = Re({ offset: u, targetRef: r, containerRef: c, color: e });
        ((i.current = h), t(h));
      }),
      [m, d] = De({
        color: e,
        containerRef: c,
        targetRef: r,
        calculate: () => we(e),
        onDragChange: a,
        onDragChangeComplete: () => n?.(i.current),
        disabledDrag: l,
      });
    return s.createElement(
      'div',
      { ref: c, className: `${o}-select`, onMouseDown: d, onTouchStart: d },
      s.createElement(
        Ae,
        { prefixCls: o },
        s.createElement(
          ze,
          { x: m.x, y: m.y, ref: r },
          s.createElement(Oe, { color: e.toRgbString(), prefixCls: o }),
        ),
        s.createElement('div', {
          className: `${o}-saturation`,
          style: {
            backgroundColor: `hsl(${e.toHsb().h},100%, 50%)`,
            backgroundImage:
              'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
          },
        }),
      ),
    );
  },
  Qt = (e, t) => {
    const [o, n] = J(e, t);
    return [p.useMemo(() => He(o), [o]), n];
  },
  Jt = ({ colors: e, children: t, direction: o = 'to right', type: n, prefixCls: l }) => {
    const c = p.useMemo(
      () =>
        e
          .map((r, i) => {
            let a = He(r);
            return (
              n === 'alpha' && i === e.length - 1 && (a = new oe(a.setA(1))),
              a.toRgbString()
            );
          })
          .join(','),
      [e, n],
    );
    return s.createElement(
      'div',
      {
        className: `${l}-gradient`,
        style: { position: 'absolute', inset: 0, background: `linear-gradient(${o}, ${c})` },
      },
      t,
    );
  },
  Zt = (e) => {
    const {
        prefixCls: t,
        colors: o,
        disabled: n,
        onChange: l,
        onChangeComplete: c,
        color: r,
        type: i,
      } = e,
      a = p.useRef(null),
      m = p.useRef(null),
      d = p.useRef(r),
      u = (g) => (i === 'hue' ? g.getHue() : g.a * 100),
      h = j((g) => {
        const S = Re({ offset: g, targetRef: m, containerRef: a, color: r, type: i });
        ((d.current = S), l(u(S)));
      }),
      [f, C] = De({
        color: r,
        targetRef: m,
        containerRef: a,
        calculate: () => we(r, i),
        onDragChange: h,
        onDragChangeComplete() {
          c(u(d.current));
        },
        direction: 'x',
        disabledDrag: n,
      }),
      b = s.useMemo(() => {
        if (i === 'hue') {
          const g = r.toHsb();
          return ((g.s = 1), (g.b = 1), (g.a = 1), new oe(g));
        }
        return r;
      }, [r, i]),
      v = s.useMemo(() => o.map((g) => `${g.color} ${g.percent}%`), [o]);
    return s.createElement(
      'div',
      { ref: a, className: O(`${t}-slider`, `${t}-slider-${i}`), onMouseDown: C, onTouchStart: C },
      s.createElement(
        Ae,
        { prefixCls: t },
        s.createElement(
          ze,
          { x: f.x, y: f.y, ref: m },
          s.createElement(Oe, { size: 'small', color: b.toHexString(), prefixCls: t }),
        ),
        s.createElement(Jt, { colors: v, type: i, prefixCls: t }),
      ),
    );
  };
function eo(e) {
  return p.useMemo(() => {
    const { slider: t } = e || {};
    return [t || Zt];
  }, [e]);
}
function Q() {
  return (
    (Q = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          }
          return e;
        }),
    Q.apply(this, arguments)
  );
}
const to = [
    { color: 'rgb(255, 0, 0)', percent: 0 },
    { color: 'rgb(255, 255, 0)', percent: 17 },
    { color: 'rgb(0, 255, 0)', percent: 33 },
    { color: 'rgb(0, 255, 255)', percent: 50 },
    { color: 'rgb(0, 0, 255)', percent: 67 },
    { color: 'rgb(255, 0, 255)', percent: 83 },
    { color: 'rgb(255, 0, 0)', percent: 100 },
  ],
  oo = p.forwardRef((e, t) => {
    const {
        value: o,
        defaultValue: n,
        prefixCls: l = $t,
        onChange: c,
        onChangeComplete: r,
        className: i,
        style: a,
        panelRender: m,
        disabledAlpha: d = !1,
        disabled: u = !1,
        components: h,
      } = e,
      [f] = eo(h),
      [C, b] = Qt(n || vt, o),
      v = p.useMemo(() => C.setA(1).toRgbString(), [C]),
      g = (y, M) => {
        (o || b(y), c?.(y, M));
      },
      S = (y) => new oe(C.setHue(y)),
      x = (y) => new oe(C.setA(y / 100)),
      $ = (y) => {
        g(S(y), { type: 'hue', value: y });
      },
      E = (y) => {
        g(x(y), { type: 'alpha', value: y });
      },
      P = (y) => {
        r && r(S(y));
      },
      R = (y) => {
        r && r(x(y));
      },
      N = O(`${l}-panel`, i, { [`${l}-panel-disabled`]: u }),
      D = { prefixCls: l, disabled: u, color: C },
      F = s.createElement(
        s.Fragment,
        null,
        s.createElement(Kt, Q({ onChange: g }, D, { onChangeComplete: r })),
        s.createElement(
          'div',
          { className: `${l}-slider-container` },
          s.createElement(
            'div',
            { className: O(`${l}-slider-group`, { [`${l}-slider-group-disabled-alpha`]: d }) },
            s.createElement(
              f,
              Q({}, D, {
                type: 'hue',
                colors: to,
                min: 0,
                max: 359,
                value: C.getHue(),
                onChange: $,
                onChangeComplete: P,
              }),
            ),
            !d &&
              s.createElement(
                f,
                Q({}, D, {
                  type: 'alpha',
                  colors: [
                    { percent: 0, color: 'rgba(255, 0, 4, 0)' },
                    { percent: 100, color: v },
                  ],
                  min: 0,
                  max: 100,
                  value: C.a * 100,
                  onChange: E,
                  onChangeComplete: R,
                }),
              ),
          ),
          s.createElement(Ie, { color: C.toRgbString(), prefixCls: l }),
        ),
      );
    return s.createElement(
      'div',
      { className: N, style: a, ref: t },
      typeof m == 'function' ? m(F) : F,
    );
  }),
  Fe = s.createContext({}),
  Le = s.createContext({}),
  Ve = ({ prefixCls: e, value: t, onChange: o, className: n, style: l }) => {
    const c = () => {
      if (o && t && !t.cleared) {
        const r = t.toHsb();
        r.a = 0;
        const i = z(r);
        ((i.cleared = !0), o(i));
      }
    };
    return s.createElement('div', { className: O(`${e}-clear`, n), style: l, onClick: c });
  },
  We = 'hex',
  Be = 'rgb',
  Te = 'hsb',
  X = ({
    prefixCls: e,
    min: t = 0,
    max: o = 100,
    value: n,
    onChange: l,
    className: c,
    formatter: r,
  }) => {
    const i = `${e}-steppers`,
      [a, m] = p.useState(0),
      d = Number.isNaN(n) ? a : n;
    return s.createElement(qt, {
      className: O(i, c),
      min: t,
      max: o,
      value: d,
      formatter: r,
      size: 'small',
      onChange: (u) => {
        (m(u || 0), l?.(u));
      },
    });
  },
  ro = ({ prefixCls: e, value: t, onChange: o }) => {
    const n = `${e}-alpha-input`,
      [l, c] = p.useState(() => z(t || '#000')),
      r = t || l,
      i = (a) => {
        const m = r.toHsb();
        m.a = (a || 0) / 100;
        const d = z(m);
        (c(d), o?.(d));
      };
    return s.createElement(X, {
      value: de(r),
      prefixCls: e,
      formatter: (a) => `${a}%`,
      className: n,
      onChange: i,
    });
  },
  no = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i,
  ao = (e) => no.test(`#${e}`),
  lo = ({ prefixCls: e, value: t, onChange: o }) => {
    const n = `${e}-hex-input`,
      [l, c] = p.useState(() => (t ? ee(t.toHexString()) : void 0));
    p.useEffect(() => {
      t && c(ee(t.toHexString()));
    }, [t]);
    const r = (i) => {
      const a = i.target.value;
      (c(ee(a)), ao(ee(a, !0)) && o?.(z(a)));
    };
    return s.createElement(Gt, { className: n, value: l, prefix: '#', onChange: r, size: 'small' });
  },
  so = ({ prefixCls: e, value: t, onChange: o }) => {
    const n = `${e}-hsb-input`,
      [l, c] = p.useState(() => z(t || '#000')),
      r = t || l,
      i = (a, m) => {
        const d = r.toHsb();
        d[m] = m === 'h' ? a : (a || 0) / 100;
        const u = z(d);
        (c(u), o?.(u));
      };
    return s.createElement(
      'div',
      { className: n },
      s.createElement(X, {
        max: 360,
        min: 0,
        value: Number(r.toHsb().h),
        prefixCls: e,
        className: n,
        formatter: (a) => ce(a || 0).toString(),
        onChange: (a) => i(Number(a), 'h'),
      }),
      s.createElement(X, {
        max: 100,
        min: 0,
        value: Number(r.toHsb().s) * 100,
        prefixCls: e,
        className: n,
        formatter: (a) => `${ce(a || 0)}%`,
        onChange: (a) => i(Number(a), 's'),
      }),
      s.createElement(X, {
        max: 100,
        min: 0,
        value: Number(r.toHsb().b) * 100,
        prefixCls: e,
        className: n,
        formatter: (a) => `${ce(a || 0)}%`,
        onChange: (a) => i(Number(a), 'b'),
      }),
    );
  },
  co = ({ prefixCls: e, value: t, onChange: o }) => {
    const n = `${e}-rgb-input`,
      [l, c] = p.useState(() => z(t || '#000')),
      r = t || l,
      i = (a, m) => {
        const d = r.toRgb();
        d[m] = a || 0;
        const u = z(d);
        (c(u), o?.(u));
      };
    return s.createElement(
      'div',
      { className: n },
      s.createElement(X, {
        max: 255,
        min: 0,
        value: Number(r.toRgb().r),
        prefixCls: e,
        className: n,
        onChange: (a) => i(Number(a), 'r'),
      }),
      s.createElement(X, {
        max: 255,
        min: 0,
        value: Number(r.toRgb().g),
        prefixCls: e,
        className: n,
        onChange: (a) => i(Number(a), 'g'),
      }),
      s.createElement(X, {
        max: 255,
        min: 0,
        value: Number(r.toRgb().b),
        prefixCls: e,
        className: n,
        onChange: (a) => i(Number(a), 'b'),
      }),
    );
  },
  io = [We, Te, Be].map((e) => ({ value: e, label: e.toUpperCase() })),
  uo = (e) => {
    const {
        prefixCls: t,
        format: o,
        value: n,
        disabledAlpha: l,
        onFormatChange: c,
        onChange: r,
        disabledFormat: i,
      } = e,
      [a, m] = J(We, o),
      d = `${t}-input`,
      u = (f) => {
        (m(f), c?.(f));
      },
      h = p.useMemo(() => {
        const f = { value: n, prefixCls: t, onChange: r };
        switch (a) {
          case Te:
            return s.createElement(so, { ...f });
          case Be:
            return s.createElement(co, { ...f });
          default:
            return s.createElement(lo, { ...f });
        }
      }, [a, t, n, r]);
    return s.createElement(
      'div',
      { className: `${d}-container` },
      !i &&
        s.createElement(yt, {
          value: a,
          variant: 'borderless',
          getPopupContainer: (f) => f,
          popupMatchSelectWidth: 68,
          placement: 'bottomRight',
          onChange: u,
          className: `${t}-format-select`,
          size: 'small',
          options: io,
        }),
      s.createElement('div', { className: d }, h),
      !l && s.createElement(ro, { prefixCls: t, value: n, onChange: r }),
    );
  },
  ke = (e) => {
    const {
        prefixCls: t,
        colors: o,
        type: n,
        color: l,
        range: c = !1,
        className: r,
        activeIndex: i,
        onActive: a,
        onDragStart: m,
        onDragChange: d,
        onKeyDelete: u,
        ...h
      } = e,
      f = { ...h, track: !1 },
      C = p.useMemo(
        () => `linear-gradient(90deg, ${o.map((P) => `${P.color} ${P.percent}%`).join(', ')})`,
        [o],
      ),
      b = p.useMemo(
        () =>
          !l || !n ? null : n === 'alpha' ? l.toRgbString() : `hsl(${l.toHsb().h}, 100%, 50%)`,
        [l, n],
      ),
      v = j(m),
      g = j(d),
      S = p.useMemo(() => ({ onDragStart: v, onDragChange: g }), []),
      x = j((E, P) => {
        const { onFocus: R, style: N, className: D, onKeyDown: F } = E.props,
          y = { ...N };
        return (
          n === 'gradient' && (y.background = Ne(o, P.value)),
          p.cloneElement(E, {
            onFocus: (M) => {
              (a?.(P.index), R?.(M));
            },
            style: y,
            className: O(D, { [`${t}-slider-handle-active`]: i === P.index }),
            onKeyDown: (M) => {
              ((M.key === 'Delete' || M.key === 'Backspace') && u && u(P.index), F?.(M));
            },
          })
        );
      }),
      $ = p.useMemo(() => ({ direction: 'ltr', handleRender: x }), []);
    return p.createElement(
      jt.Provider,
      { value: $ },
      p.createElement(
        _t.Provider,
        { value: S },
        p.createElement(Yt, {
          ...f,
          className: O(r, `${t}-slider`),
          tooltip: { open: !1 },
          range: { editable: c, minCount: 2 },
          styles: { rail: { background: C }, handle: b ? { background: b } : {} },
          classNames: { rail: `${t}-slider-rail`, handle: `${t}-slider-handle` },
        }),
      ),
    );
  },
  mo = (e) => {
    const { value: t, onChange: o, onChangeComplete: n } = e,
      l = (r) => o(r[0]),
      c = (r) => n(r[0]);
    return p.createElement(ke, { ...e, value: [t], onChange: l, onChangeComplete: c });
  };
function $e(e) {
  return K(e).sort((t, o) => t.percent - o.percent);
}
const go = (e) => {
    const {
        prefixCls: t,
        mode: o,
        onChange: n,
        onChangeComplete: l,
        onActive: c,
        activeIndex: r,
        onGradientDragging: i,
        colors: a,
      } = e,
      m = o === 'gradient',
      d = p.useMemo(
        () => a.map((g) => ({ percent: g.percent, color: g.color.toRgbString() })),
        [a],
      ),
      u = p.useMemo(() => d.map((g) => g.percent), [d]),
      h = p.useRef(d),
      f = ({ rawValues: g, draggingIndex: S, draggingValue: x }) => {
        if (g.length > d.length) {
          const $ = Ne(d, x),
            E = K(d);
          (E.splice(S, 0, { percent: x, color: $ }), (h.current = E));
        } else h.current = d;
        (i(!0), n(new T($e(h.current)), !0));
      },
      C = ({ deleteIndex: g, draggingIndex: S, draggingValue: x }) => {
        let $ = K(h.current);
        (g !== -1 ? $.splice(g, 1) : (($[S] = { ...$[S], percent: x }), ($ = $e($))),
          n(new T($), !0));
      },
      b = (g) => {
        const S = K(d);
        S.splice(g, 1);
        const x = new T(S);
        (n(x), l(x));
      },
      v = (g) => {
        (l(new T(d)), r >= g.length && c(g.length - 1), i(!1));
      };
    return m
      ? p.createElement(ke, {
          min: 0,
          max: 100,
          prefixCls: t,
          className: `${t}-gradient-slider`,
          colors: d,
          color: null,
          value: u,
          range: !0,
          onChangeComplete: v,
          disabled: !1,
          type: 'gradient',
          activeIndex: r,
          onActive: c,
          onDragStart: f,
          onDragChange: C,
          onKeyDelete: b,
        })
      : null;
  },
  po = p.memo(go),
  ho = { slider: mo },
  ve = () => {
    const e = p.useContext(Fe),
      {
        mode: t,
        onModeChange: o,
        modeOptions: n,
        prefixCls: l,
        allowClear: c,
        value: r,
        disabledAlpha: i,
        onChange: a,
        onClear: m,
        onChangeComplete: d,
        activeIndex: u,
        gradientDragging: h,
        ...f
      } = e,
      C = s.useMemo(
        () =>
          r.cleared
            ? [
                { percent: 0, color: new T('') },
                { percent: 100, color: new T('') },
              ]
            : r.getColors(),
        [r],
      ),
      b = !r.isGradient(),
      [v, g] = s.useState(r);
    xe(() => {
      b || g(C[u]?.color);
    }, [b, C, h, u]);
    const S = s.useMemo(() => (b ? r : h ? v : C[u]?.color), [C, r, u, b, v, h]),
      [x, $] = s.useState(S),
      [E, P] = Et(),
      R = x?.equals(S) ? S : x;
    xe(() => {
      $(S);
    }, [E, S?.toHexString()]);
    const N = (w, A) => {
        let L = z(w);
        if (r.cleared) {
          const _ = L.toRgb();
          if (!_.r && !_.g && !_.b && A) {
            const { type: Z, value: Y = 0 } = A;
            L = new T({ h: Z === 'hue' ? Y : 0, s: 1, b: 1, a: Z === 'alpha' ? Y / 100 : 1 });
          } else L = te(L);
        }
        if (t === 'single') return L;
        const V = K(C);
        return ((V[u] = { ...V[u], color: L }), new T(V));
      },
      D = (w, A, L) => {
        const V = N(w, L);
        ($(V.isGradient() ? V.getColors()[u].color : V), a(V, A));
      },
      F = (w, A) => {
        (d(N(w, A)), P());
      },
      y = (w) => {
        a(N(w));
      };
    let M = null;
    const q = n.length > 1;
    return (
      (c || q) &&
        (M = s.createElement(
          'div',
          { className: `${l}-operation` },
          q && s.createElement(Xt, { size: 'small', options: n, value: t, onChange: o }),
          s.createElement(Ve, {
            prefixCls: l,
            value: r,
            onChange: (w) => {
              (a(w), m?.());
            },
            ...f,
          }),
        )),
      s.createElement(
        s.Fragment,
        null,
        M,
        s.createElement(po, { ...e, colors: C }),
        s.createElement(oo, {
          prefixCls: l,
          value: R?.toHsb(),
          disabledAlpha: i,
          onChange: (w, A) => {
            D(w, !0, A);
          },
          onChangeComplete: (w, A) => {
            F(w, A);
          },
          components: ho,
        }),
        s.createElement(uo, { value: S, onChange: y, prefixCls: l, disabledAlpha: i, ...f }),
      )
    );
  },
  ye = () => {
    const { prefixCls: e, value: t, presets: o, onChange: n } = p.useContext(Le);
    return Array.isArray(o)
      ? s.createElement(Pt, { value: t, presets: o, prefixCls: e, onChange: n })
      : null;
  },
  Co = (e) => {
    const {
        prefixCls: t,
        presets: o,
        panelRender: n,
        value: l,
        onChange: c,
        onClear: r,
        allowClear: i,
        disabledAlpha: a,
        mode: m,
        onModeChange: d,
        modeOptions: u,
        onChangeComplete: h,
        activeIndex: f,
        onActive: C,
        format: b,
        onFormatChange: v,
        gradientDragging: g,
        onGradientDragging: S,
        disabledFormat: x,
      } = e,
      $ = `${t}-inner`,
      E = s.useMemo(
        () => ({
          prefixCls: t,
          value: l,
          onChange: c,
          onClear: r,
          allowClear: i,
          disabledAlpha: a,
          mode: m,
          onModeChange: d,
          modeOptions: u,
          onChangeComplete: h,
          activeIndex: f,
          onActive: C,
          format: b,
          onFormatChange: v,
          gradientDragging: g,
          onGradientDragging: S,
          disabledFormat: x,
        }),
        [t, l, c, r, i, a, m, d, u, h, f, C, b, v, g, S, x],
      ),
      P = s.useMemo(() => ({ prefixCls: t, value: l, presets: o, onChange: c }), [t, l, o, c]),
      R = s.createElement(
        'div',
        { className: `${$}-content` },
        s.createElement(ve, null),
        Array.isArray(o) && s.createElement(kt, null),
        s.createElement(ye, null),
      );
    return s.createElement(
      Fe.Provider,
      { value: E },
      s.createElement(
        Le.Provider,
        { value: P },
        s.createElement(
          'div',
          { className: $ },
          typeof n == 'function' ? n(R, { components: { Picker: ve, Presets: ye } }) : R,
        ),
      ),
    );
  },
  fo = p.forwardRef((e, t) => {
    const {
        color: o,
        prefixCls: n,
        open: l,
        disabled: c,
        format: r,
        className: i,
        style: a,
        classNames: m,
        styles: d,
        showText: u,
        activeIndex: h,
        ...f
      } = e,
      C = `${n}-trigger`,
      b = `${C}-text`,
      v = `${b}-cell`,
      [g] = Me('ColorPicker'),
      S = s.useMemo(() => {
        if (!u) return '';
        if (typeof u == 'function') return u(o);
        if (o.cleared) return g.transparent;
        if (o.isGradient())
          return o.getColors().map((P, R) => {
            const N = h !== -1 && h !== R;
            return s.createElement(
              'span',
              { key: R, className: O(v, N && `${v}-inactive`) },
              P.color.toRgbString(),
              ' ',
              P.percent,
              '%',
            );
          });
        const $ = o.toHexString().toUpperCase(),
          E = de(o);
        switch (r) {
          case 'rgb':
            return o.toRgbString();
          case 'hsb':
            return o.toHsbString();
          default:
            return E < 100 ? `${$.slice(0, 7)},${E}%` : $;
        }
      }, [o, r, u, h, g.transparent, v]),
      x = p.useMemo(
        () =>
          o.cleared
            ? s.createElement(Ve, { prefixCls: n, className: m.body, style: d.body })
            : s.createElement(Ie, {
                prefixCls: n,
                color: o.toCssString(),
                className: m.body,
                innerClassName: m.content,
                style: d.body,
                innerStyle: d.content,
              }),
        [o, n, m.body, m.content, d.body, d.content],
      );
    return s.createElement(
      'div',
      {
        ref: t,
        className: O(C, i, m.root, { [`${C}-active`]: l, [`${C}-disabled`]: c }),
        style: { ...d.root, ...a },
        ...Rt(f),
      },
      x,
      u && s.createElement('div', { className: O(b, m.description), style: d.description }, S),
    );
  });
function bo(e, t, o) {
  const [n] = Me('ColorPicker'),
    [l, c] = J(e, t),
    [r, i] = p.useState('single'),
    [a, m] = p.useMemo(() => {
      const b = (Array.isArray(o) ? o : [o]).filter((x) => x);
      b.length || b.push('single');
      const v = new Set(b),
        g = [],
        S = (x, $) => {
          v.has(x) && g.push({ label: $, value: x });
        };
      return (S('single', n.singleColor), S('gradient', n.gradientColor), [g, v]);
    }, [o, n.singleColor, n.gradientColor]),
    [d, u] = p.useState(null),
    h = j((b) => {
      (u(b), c(b));
    }),
    f = p.useMemo(() => {
      const b = z(l || '');
      return b.equals(d) ? d : b;
    }, [l, d]),
    C = p.useMemo(() => (m.has(r) ? r : a[0]?.value), [m, r, a]);
  return (
    p.useEffect(() => {
      i(f.isGradient() ? 'gradient' : 'single');
    }, [f]),
    [f, h, C, i, a]
  );
}
const Xe = (e, t) => ({
    backgroundImage: `conic-gradient(${t} 25%, transparent 25% 50%, ${t} 50% 75%, transparent 75% 100%)`,
    backgroundSize: `${e} ${e}`,
  }),
  Ee = (e, t) => {
    const {
      componentCls: o,
      borderRadiusSM: n,
      colorPickerInsetShadow: l,
      lineWidth: c,
      colorFillSecondary: r,
    } = e;
    return {
      [`${o}-color-block`]: {
        position: 'relative',
        borderRadius: n,
        width: t,
        height: t,
        boxShadow: l,
        flex: 'none',
        ...Xe('50%', e.colorFillSecondary),
        [`${o}-color-block-inner`]: {
          width: '100%',
          height: '100%',
          boxShadow: `inset 0 0 0 ${I(c)} ${r}`,
          borderRadius: 'inherit',
        },
      },
    };
  },
  So = (e) => {
    const {
      componentCls: t,
      antCls: o,
      fontSizeSM: n,
      lineHeightSM: l,
      colorPickerAlphaInputWidth: c,
      marginXXS: r,
      paddingXXS: i,
      controlHeightSM: a,
      marginXS: m,
      fontSizeIcon: d,
      paddingXS: u,
      colorTextPlaceholder: h,
      colorPickerInputNumberHandleWidth: f,
      lineWidth: C,
    } = e;
    return {
      [`${t}-input-container`]: {
        display: 'flex',
        [`${t}-steppers${o}-input-number`]: {
          fontSize: n,
          lineHeight: l,
          padding: 0,
          [`${o}-input-number-input`]: { paddingInlineStart: i, paddingInlineEnd: 0 },
          [`${o}-input-number-handler-wrap`]: { width: f },
        },
        [`${t}-steppers${t}-alpha-input`]: { flex: `0 0 ${I(c)}`, marginInlineStart: r },
        [`${t}-format-select${o}-select`]: {
          'marginInlineEnd': m,
          'width': 'auto',
          '&-single': {
            [`${o}-select-selector`]: { padding: 0, border: 0 },
            [`${o}-select-arrow`]: { insetInlineEnd: 0 },
            [`${o}-select-selection-item`]: {
              paddingInlineEnd: e.calc(d).add(r).equal(),
              fontSize: n,
              lineHeight: I(a),
            },
            [`${o}-select-item-option-content`]: { fontSize: n, lineHeight: l },
            [`${o}-select-dropdown`]: { [`${o}-select-item`]: { minHeight: 'auto' } },
          },
        },
        [`${t}-input`]: {
          gap: r,
          alignItems: 'center',
          flex: 1,
          width: 0,
          [`${t}-hsb-input,${t}-rgb-input`]: {
            height: a,
            display: 'flex',
            gap: r,
            alignItems: 'center',
          },
          [`${t}-steppers`]: { flex: 1 },
          [`${t}-hex-input${o}-input-affix-wrapper`]: {
            flex: 1,
            padding: `0 ${I(u)}`,
            [`${o}-input`]: {
              fontSize: n,
              textTransform: 'uppercase',
              lineHeight: I(e.calc(a).sub(e.calc(C).mul(2)).equal()),
            },
            [`${o}-input-prefix`]: { color: h },
          },
        },
      },
    };
  },
  xo = (e) => {
    const {
      componentCls: t,
      controlHeightLG: o,
      borderRadiusSM: n,
      colorPickerInsetShadow: l,
      marginSM: c,
      colorBgElevated: r,
      colorFillSecondary: i,
      lineWidthBold: a,
      colorPickerHandlerSize: m,
    } = e;
    return {
      userSelect: 'none',
      [`${t}-select`]: {
        [`${t}-palette`]: {
          minHeight: e.calc(o).mul(4).equal(),
          overflow: 'hidden',
          borderRadius: n,
        },
        [`${t}-saturation`]: {
          position: 'absolute',
          borderRadius: 'inherit',
          boxShadow: l,
          inset: 0,
        },
        marginBottom: c,
      },
      [`${t}-handler`]: {
        width: m,
        height: m,
        border: `${I(a)} solid ${r}`,
        position: 'relative',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: `${l}, 0 0 0 1px ${i}`,
      },
    };
  },
  $o = (e) => {
    const {
      componentCls: t,
      antCls: o,
      colorTextQuaternary: n,
      paddingXXS: l,
      colorPickerPresetColorSize: c,
      fontSizeSM: r,
      colorText: i,
      lineHeightSM: a,
      lineWidth: m,
      borderRadius: d,
      colorFill: u,
      colorWhite: h,
      marginXXS: f,
      paddingXS: C,
      fontHeightSM: b,
    } = e;
    return {
      [`${t}-presets`]: {
        [`${o}-collapse-item > ${o}-collapse-header`]: {
          padding: 0,
          [`${o}-collapse-expand-icon`]: { height: b, color: n, paddingInlineEnd: l },
        },
        [`${o}-collapse`]: { display: 'flex', flexDirection: 'column', gap: f },
        [`${o}-collapse-item > ${o}-collapse-panel > ${o}-collapse-body`]: { padding: `${I(C)} 0` },
        '&-label': { fontSize: r, color: i, lineHeight: a },
        '&-items': {
          display: 'flex',
          flexWrap: 'wrap',
          gap: e.calc(f).mul(1.5).equal(),
          [`${t}-presets-color`]: {
            'position': 'relative',
            'cursor': 'pointer',
            'width': c,
            'height': c,
            '&::before': {
              content: '""',
              pointerEvents: 'none',
              width: e.calc(c).add(e.calc(m).mul(4)).equal(),
              height: e.calc(c).add(e.calc(m).mul(4)).equal(),
              position: 'absolute',
              top: e.calc(m).mul(-2).equal(),
              insetInlineStart: e.calc(m).mul(-2).equal(),
              borderRadius: d,
              border: `${I(m)} solid transparent`,
              transition: `border-color ${e.motionDurationMid} ${e.motionEaseInBack}`,
            },
            '&:hover::before': { borderColor: u },
            '&::after': {
              boxSizing: 'border-box',
              position: 'absolute',
              top: '50%',
              insetInlineStart: '21.5%',
              display: 'table',
              width: e.calc(c).div(13).mul(5).equal(),
              height: e.calc(c).div(13).mul(8).equal(),
              border: `${I(e.lineWidthBold)} solid ${e.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
              opacity: 0,
              content: '""',
              transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
            },
            [`&${t}-presets-color-checked`]: {
              '&::after': {
                opacity: 1,
                borderColor: h,
                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                transition: `transform ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
              },
              [`&${t}-presets-color-bright`]: {
                '&::after': { borderColor: 'rgba(0, 0, 0, 0.45)' },
              },
            },
          },
        },
        '&-empty': { fontSize: r, color: n },
      },
    };
  },
  vo = (e) => {
    const {
        componentCls: t,
        colorPickerInsetShadow: o,
        colorBgElevated: n,
        colorFillSecondary: l,
        lineWidthBold: c,
        colorPickerHandlerSizeSM: r,
        colorPickerSliderHeight: i,
        marginSM: a,
        marginXS: m,
      } = e,
      d = e.calc(r).sub(e.calc(c).mul(2).equal()).equal(),
      u = e.calc(r).add(e.calc(c).mul(2).equal()).equal(),
      h = {
        '&:after': { transform: 'scale(1)', boxShadow: `${o}, 0 0 0 1px ${e.colorPrimaryActive}` },
      };
    return {
      [`${t}-slider`]: [
        Xe(I(i), e.colorFillSecondary),
        {
          'margin': 0,
          'padding': 0,
          'height': i,
          'borderRadius': e.calc(i).div(2).equal(),
          '&-rail': { height: i, borderRadius: e.calc(i).div(2).equal(), boxShadow: o },
          [`& ${t}-slider-handle`]: {
            'width': d,
            'height': d,
            'top': 0,
            'borderRadius': '100%',
            '&:before': {
              display: 'block',
              position: 'absolute',
              background: 'transparent',
              left: { _skip_check_: !0, value: '50%' },
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: u,
              height: u,
              borderRadius: '100%',
            },
            '&:after': {
              width: r,
              height: r,
              border: `${I(c)} solid ${n}`,
              boxShadow: `${o}, 0 0 0 1px ${l}`,
              outline: 'none',
              insetInlineStart: e.calc(c).mul(-1).equal(),
              top: e.calc(c).mul(-1).equal(),
              background: 'transparent',
              transition: 'none',
            },
            '&:focus': h,
          },
        },
      ],
      [`${t}-slider-container`]: {
        display: 'flex',
        gap: a,
        marginBottom: a,
        [`${t}-slider-group`]: {
          'flex': 1,
          'flexDirection': 'column',
          'justifyContent': 'space-between',
          'display': 'flex',
          '&-disabled-alpha': { justifyContent: 'center' },
        },
      },
      [`${t}-gradient-slider`]: {
        marginBottom: m,
        [`& ${t}-slider-handle`]: {
          '&:after': { transform: 'scale(0.8)' },
          '&-active, &:focus': h,
        },
      },
    };
  },
  ie = (e, t, o) => ({
    borderInlineEndWidth: e.lineWidth,
    borderColor: t,
    boxShadow: `0 0 0 ${I(e.controlOutlineWidth)} ${o}`,
    outline: 0,
  }),
  yo = (e) => {
    const { componentCls: t } = e;
    return {
      '&-rtl': {
        [`${t}-presets-color`]: { '&::after': { direction: 'ltr' } },
        [`${t}-clear`]: { '&::after': { direction: 'ltr' } },
      },
    };
  },
  Pe = (e, t, o) => {
    const {
      componentCls: n,
      borderRadiusSM: l,
      lineWidth: c,
      colorSplit: r,
      colorBorder: i,
      red6: a,
    } = e;
    return {
      [`${n}-clear`]: {
        'width': t,
        'height': t,
        'borderRadius': l,
        'border': `${I(c)} solid ${r}`,
        'position': 'relative',
        'overflow': 'hidden',
        'cursor': 'inherit',
        'transition': `all ${e.motionDurationFast}`,
        ...o,
        '&::after': {
          content: '""',
          position: 'absolute',
          insetInlineEnd: e.calc(c).mul(-1).equal(),
          top: e.calc(c).mul(-1).equal(),
          display: 'block',
          width: 40,
          height: 2,
          transformOrigin: 'calc(100% - 1px) 1px',
          transform: 'rotate(-45deg)',
          backgroundColor: a,
        },
        '&:hover': { borderColor: i },
      },
    };
  },
  Eo = (e) => {
    const {
      componentCls: t,
      colorError: o,
      colorWarning: n,
      colorErrorHover: l,
      colorWarningHover: c,
      colorErrorOutline: r,
      colorWarningOutline: i,
    } = e;
    return {
      [`&${t}-status-error`]: {
        'borderColor': o,
        '&:hover': { borderColor: l },
        [`&${t}-trigger-active`]: { ...ie(e, o, r) },
      },
      [`&${t}-status-warning`]: {
        'borderColor': n,
        '&:hover': { borderColor: c },
        [`&${t}-trigger-active`]: { ...ie(e, n, i) },
      },
    };
  },
  Po = (e) => {
    const {
      componentCls: t,
      controlHeightLG: o,
      controlHeightSM: n,
      controlHeight: l,
      controlHeightXS: c,
      borderRadius: r,
      borderRadiusSM: i,
      borderRadiusXS: a,
      borderRadiusLG: m,
      fontSizeLG: d,
    } = e;
    return {
      [`&${t}-lg`]: {
        minWidth: o,
        minHeight: o,
        borderRadius: m,
        [`${t}-color-block, ${t}-clear`]: { width: l, height: l, borderRadius: r },
        [`${t}-trigger-text`]: { fontSize: d },
      },
      [`&${t}-sm`]: {
        minWidth: n,
        minHeight: n,
        borderRadius: i,
        [`${t}-color-block, ${t}-clear`]: { width: c, height: c, borderRadius: a },
        [`${t}-trigger-text`]: { lineHeight: I(c) },
      },
    };
  },
  Ro = (e) => {
    const {
      antCls: t,
      componentCls: o,
      colorPickerWidth: n,
      colorPrimary: l,
      motionDurationMid: c,
      colorBgElevated: r,
      colorTextDisabled: i,
      colorText: a,
      colorBgContainerDisabled: m,
      borderRadius: d,
      marginXS: u,
      marginSM: h,
      controlHeight: f,
      controlHeightSM: C,
      colorBgTextActive: b,
      colorPickerPresetColorSize: v,
      colorPickerPreviewSize: g,
      lineWidth: S,
      colorBorder: x,
      paddingXXS: $,
      fontSize: E,
      colorPrimaryHover: P,
      controlOutline: R,
    } = e;
    return [
      {
        [o]: {
          [`${o}-inner`]: {
            '&-content': {
              display: 'flex',
              flexDirection: 'column',
              width: n,
              [`& > ${t}-divider`]: { margin: `${I(h)} 0 ${I(u)}` },
            },
            [`${o}-panel`]: { ...xo(e) },
            ...vo(e),
            ...Ee(e, g),
            ...So(e),
            ...$o(e),
            ...Pe(e, v, { marginInlineStart: 'auto' }),
            [`${o}-operation`]: {
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: u,
            },
          },
          '&-trigger': {
            'minWidth': f,
            'minHeight': f,
            'borderRadius': d,
            'border': `${I(S)} solid ${x}`,
            'cursor': 'pointer',
            'display': 'inline-flex',
            'alignItems': 'flex-start',
            'justifyContent': 'center',
            'transition': `all ${c}`,
            'background': r,
            'padding': e.calc($).sub(S).equal(),
            [`${o}-trigger-text`]: {
              'marginInlineStart': u,
              'marginInlineEnd': e.calc(u).sub(e.calc($).sub(S)).equal(),
              'fontSize': E,
              'color': a,
              'alignSelf': 'center',
              '&-cell': {
                '&:not(:last-child):after': { content: '", "' },
                '&-inactive': { color: i },
              },
            },
            '&:hover': { borderColor: P },
            [`&${o}-trigger-active`]: { ...ie(e, l, R) },
            '&-disabled': {
              'color': i,
              'background': m,
              'cursor': 'not-allowed',
              '&:hover': { borderColor: b },
              [`${o}-trigger-text`]: { color: i },
            },
            ...Pe(e, C),
            ...Ee(e, C),
            ...Eo(e),
            ...Po(e),
          },
          ...yo(e),
        },
      },
      It(e, { focusElCls: `${o}-trigger-active` }),
    ];
  },
  wo = wt('ColorPicker', (e) => {
    const { colorTextQuaternary: t, marginSM: o } = e,
      n = 8,
      l = Ht(e, {
        colorPickerWidth: 234,
        colorPickerHandlerSize: 16,
        colorPickerHandlerSizeSM: 12,
        colorPickerAlphaInputWidth: 44,
        colorPickerInputNumberHandleWidth: 16,
        colorPickerPresetColorSize: 24,
        colorPickerInsetShadow: `inset 0 0 1px 0 ${t}`,
        colorPickerSliderHeight: n,
        colorPickerPreviewSize: e.calc(n).mul(2).add(o).equal(),
      });
    return Ro(l);
  }),
  qe = (e) => {
    const {
        mode: t,
        value: o,
        defaultValue: n,
        format: l,
        defaultFormat: c,
        allowClear: r = !1,
        presets: i,
        children: a,
        trigger: m = 'click',
        open: d,
        disabled: u,
        placement: h = 'bottomLeft',
        arrow: f,
        panelRender: C,
        showText: b,
        style: v,
        className: g,
        size: S,
        rootClassName: x,
        prefixCls: $,
        styles: E,
        classNames: P,
        disabledAlpha: R = !1,
        onFormatChange: N,
        onChange: D,
        onClear: F,
        onOpenChange: y,
        onChangeComplete: M,
        getPopupContainer: q,
        autoAdjustOverflow: w = !0,
        destroyTooltipOnHide: A,
        destroyOnHidden: L,
        disabledFormat: V,
        ..._
      } = e,
      {
        getPrefixCls: Z,
        direction: Y,
        className: Ge,
        style: je,
        classNames: _e,
        styles: Ye,
        arrow: Ue,
      } = Nt('colorPicker'),
      Ke = p.useContext(Mt),
      U = u ?? Ke,
      W = Z('color-picker', $),
      ue = Tt(f, Ue),
      { compactSize: Qe, compactItemClassnames: Je } = Dt(W, Y),
      re = Ot((H) => S ?? Qe ?? H),
      Ze = {
        ...e,
        trigger: m,
        allowClear: r,
        autoAdjustOverflow: w,
        disabledAlpha: R,
        arrow: ue,
        placement: h,
        disabled: U,
        size: re,
      },
      [me, ge] = At([_e, P], [Ye, E], { props: Ze }, { popup: { _default: 'root' } }),
      [et, tt] = J(!1, d),
      ne = !U && et,
      [ae, ot] = J(c, l),
      rt = (H) => {
        (ot(H), ae !== H && N?.(H));
      },
      nt = (H) => {
        (!H || !U) && (tt(H), y?.(H));
      },
      [B, at, lt, st, ct] = bo(n, o, t),
      le = p.useMemo(() => de(B) < 100, [B]),
      [it, pe] = s.useState(null),
      he = (H) => {
        if (M) {
          let k = z(H);
          (R && le && (k = te(H)), M(k));
        }
      },
      se = (H, k) => {
        let G = z(H);
        (R && le && (G = te(G)), at(G), pe(null), D && D(G, G.toCssString()), k || he(G));
      },
      [Ce, fe] = s.useState(0),
      [dt, ut] = s.useState(!1),
      mt = (H) => {
        if ((st(H), H === 'single' && B.isGradient()))
          (fe(0), se(new T(B.getColors()[0].color)), pe(B));
        else if (H === 'gradient' && !B.isGradient()) {
          const k = le ? te(B) : B;
          se(
            new T(
              it || [
                { percent: 0, color: k },
                { percent: 100, color: k },
              ],
            ),
          );
        }
      },
      { status: gt } = s.useContext(zt),
      be = Vt(W),
      [pt, ht] = wo(W, be),
      Ct = { [`${W}-rtl`]: Y },
      Se = O(x, ht, be, Ct),
      ft = O(
        Ft(W, gt),
        { [`${W}-sm`]: re === 'small', [`${W}-lg`]: re === 'large' },
        Je,
        Ge,
        Se,
        g,
        pt,
      ),
      bt = O(W, Se, me.popup?.root),
      St = {
        open: ne,
        trigger: m,
        placement: h,
        arrow: ue,
        rootClassName: x,
        getPopupContainer: q,
        autoAdjustOverflow: w,
        destroyOnHidden: L ?? !!A,
      },
      xt = { ...je, ...v };
    return s.createElement(
      Bt,
      {
        classNames: { root: bt },
        styles: { root: ge.popup?.root, container: E?.popupOverlayInner },
        onOpenChange: nt,
        content: s.createElement(
          Lt,
          { form: !0 },
          s.createElement(Co, {
            mode: lt,
            onModeChange: mt,
            modeOptions: ct,
            prefixCls: W,
            value: B,
            allowClear: r,
            disabled: U,
            disabledAlpha: R,
            presets: i,
            panelRender: C,
            format: ae,
            onFormatChange: rt,
            onChange: se,
            onChangeComplete: he,
            onClear: F,
            activeIndex: Ce,
            onActive: fe,
            gradientDragging: dt,
            onGradientDragging: ut,
            disabledFormat: V,
          }),
        ),
        ...St,
      },
      a ||
        s.createElement(fo, {
          activeIndex: ne ? Ce : -1,
          open: ne,
          className: ft,
          style: xt,
          classNames: me,
          styles: ge,
          prefixCls: W,
          disabled: U,
          showText: b,
          format: ae,
          ..._,
          color: B,
        }),
    );
  },
  Ho = Wt(
    qe,
    void 0,
    (e) => ({ ...e, placement: 'bottom', autoAdjustOverflow: !1 }),
    'color-picker',
    (e) => e,
  );
qe._InternalPanelDoNotUseOrYouWillBeFired = Ho;
export { qe as C };
