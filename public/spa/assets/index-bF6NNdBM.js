import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as y, h as q } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  b8 as G,
  b9 as K,
  ba as O,
  bb as Q,
  be as W,
  cV as Z,
  aJ as ee,
  cr as te,
} from './index-C8UyLGsD.js';
const ne = (t) => {
    const {
      value: e,
      formatter: a,
      precision: r,
      decimalSeparator: u,
      groupSeparator: f = '',
      prefixCls: i,
    } = t;
    let o;
    if (typeof a == 'function') o = a(e);
    else {
      const s = String(e),
        m = s.match(/^(-?)(\d*)(\.(\d+))?$/);
      if (!m || s === '-') o = s;
      else {
        const S = m[1];
        let p = m[2] || '0',
          l = m[4] || '';
        ((p = p.replace(/\B(?=(\d{3})+(?!\d))/g, f)),
          typeof r == 'number' && (l = l.padEnd(r, '0').slice(0, r > 0 ? r : 0)),
          l && (l = `${u}${l}`),
          (o = [
            n.createElement('span', { key: 'int', className: `${i}-content-value-int` }, S, p),
            l &&
              n.createElement(
                'span',
                { key: 'decimal', className: `${i}-content-value-decimal` },
                l,
              ),
          ]));
      }
    }
    return n.createElement('span', { className: `${i}-content-value` }, o);
  },
  se = (t) => {
    const {
      componentCls: e,
      marginXXS: a,
      padding: r,
      colorTextDescription: u,
      titleFontSize: f,
      colorTextHeading: i,
      contentFontSize: o,
      fontFamily: s,
    } = t;
    return {
      [e]: {
        ...O(t),
        [`${e}-header`]: { paddingBottom: a, [`${e}-title`]: { color: u, fontSize: f } },
        [`${e}-skeleton`]: { paddingTop: r },
        [`${e}-content`]: {
          color: i,
          fontSize: o,
          fontFamily: s,
          [`${e}-content-value`]: { display: 'inline-block', direction: 'ltr' },
          [`${e}-content-prefix, ${e}-content-suffix`]: { display: 'inline-block' },
          [`${e}-content-prefix`]: { marginInlineEnd: a },
          [`${e}-content-suffix`]: { marginInlineStart: a },
        },
      },
    };
  },
  ae = (t) => {
    const { fontSizeHeading3: e, fontSize: a } = t;
    return { titleFontSize: a, contentFontSize: e };
  },
  oe = G(
    'Statistic',
    (t) => {
      const e = K(t, {});
      return se(e);
    },
    ae,
  ),
  E = n.forwardRef((t, e) => {
    const {
        prefixCls: a,
        className: r,
        rootClassName: u,
        style: f,
        valueStyle: i,
        value: o = 0,
        title: s,
        valueRender: m,
        prefix: S,
        suffix: p,
        loading: l = !1,
        formatter: c,
        precision: g,
        decimalSeparator: x = '.',
        groupSeparator: C = ',',
        onMouseEnter: T,
        onMouseLeave: k,
        styles: b,
        classNames: z,
        ...D
      } = t,
      {
        getPrefixCls: I,
        direction: R,
        className: H,
        style: M,
        classNames: F,
        styles: P,
      } = Q('statistic'),
      d = I('statistic', a),
      [A, L] = oe(d),
      V = { ...t, decimalSeparator: x, groupSeparator: C, loading: l, value: o },
      [v, N] = W([F, z], [P, b], { props: V }),
      $ = n.createElement(ne, {
        decimalSeparator: x,
        groupSeparator: C,
        prefixCls: d,
        formatter: c,
        precision: g,
        value: o,
      }),
      B = y(d, { [`${d}-rtl`]: R === 'rtl' }, H, r, u, v.root, A, L),
      U = y(`${d}-header`, v.header),
      X = y(`${d}-title`, v.title),
      J = y(`${d}-content`, v.content),
      Y = y(`${d}-content-prefix`, v.prefix),
      _ = y(`${d}-content-suffix`, v.suffix),
      w = n.useRef(null);
    n.useImperativeHandle(e, () => ({ nativeElement: w.current }));
    const j = Z(D, { aria: !0, data: !0 });
    return n.createElement(
      'div',
      {
        ...j,
        className: B,
        style: { ...N.root, ...M, ...f },
        ref: w,
        onMouseEnter: T,
        onMouseLeave: k,
      },
      s &&
        n.createElement(
          'div',
          { className: U, style: N.header },
          n.createElement('div', { className: X, style: N.title }, s),
        ),
      n.createElement(
        ee,
        { paragraph: !1, loading: l, className: `${d}-skeleton`, active: !0 },
        n.createElement(
          'div',
          { className: J, style: { ...i, ...N.content } },
          S && n.createElement('span', { className: Y, style: N.prefix }, S),
          m ? m($) : $,
          p && n.createElement('span', { className: _, style: N.suffix }, p),
        ),
      ),
    );
  }),
  re = [
    ['Y', 1e3 * 60 * 60 * 24 * 365],
    ['M', 1e3 * 60 * 60 * 24 * 30],
    ['D', 1e3 * 60 * 60 * 24],
    ['H', 1e3 * 60 * 60],
    ['m', 1e3 * 60],
    ['s', 1e3],
    ['S', 1],
  ];
function ce(t, e) {
  let a = t;
  const r = /\[[^\]]*]/g,
    u = (e.match(r) || []).map((s) => s.slice(1, -1)),
    f = e.replace(r, '[]'),
    i = re.reduce((s, [m, S]) => {
      if (s.includes(m)) {
        const p = Math.floor(a / S);
        return (
          (a -= p * S),
          s.replace(new RegExp(`${m}+`, 'g'), (l) => {
            const c = l.length;
            return p.toString().padStart(c, '0');
          })
        );
      }
      return s;
    }, f);
  let o = 0;
  return i.replace(r, () => {
    const s = u[o];
    return ((o += 1), s);
  });
}
function le(t, e, a) {
  const { format: r = '' } = e,
    u = new Date(t).getTime(),
    f = Date.now(),
    i = Math.max(a ? u - f : f - u, 0);
  return ce(i, r);
}
const ie = 1e3 / 60;
function me(t) {
  return new Date(t).getTime();
}
const h = (t) => {
    const { value: e, format: a = 'HH:mm:ss', onChange: r, onFinish: u, type: f, ...i } = t,
      o = f === 'countdown',
      [s, m] = n.useState(null),
      S = q(() => {
        const c = Date.now(),
          g = me(e);
        m({});
        const x = o ? g - c : c - g;
        return (r?.(x), o && g < c ? (u?.(), !1) : !0);
      });
    (n.useEffect(() => {
      let c;
      const g = () => {
          S() || window.clearInterval(c);
        },
        x = () => {
          c = window.setInterval(g, ie);
        },
        C = () => {
          window.clearInterval(c);
        };
      return (
        x(),
        () => {
          C();
        }
      );
    }, [e, o]),
      n.useEffect(() => {
        m({});
      }, []));
    const p = (c, g) => (s ? le(c, { ...g, format: a }, o) : '-'),
      l = (c) => te(c, { title: void 0 });
    return n.createElement(E, { ...i, value: e, valueRender: l, formatter: p });
  },
  ue = (t) => n.createElement(h, { ...t, type: 'countdown' }),
  fe = n.memo(ue);
E.Timer = h;
E.Countdown = fe;
export { E as S };
