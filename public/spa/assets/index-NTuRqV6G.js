import { R as ge, r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  bm as K,
  bX as A,
  cV as U,
  b8 as fe,
  b9 as Ce,
  bM as be,
  ba as ye,
  bb as Se,
  be as xe,
  cr as Ne,
  dH as Ie,
} from './index-C8UyLGsD.js';
import { c as f, u as V, t as q } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { a as he } from './index-BHffy9NV.js';
const _ = ge.createContext({}),
  h = ({ children: e }) => {
    const { getPrefixCls: r } = s.useContext(K),
      t = r('breadcrumb'),
      o = s.useContext(_),
      { classNames: n, styles: a } = o;
    return s.createElement(
      'li',
      {
        'className': f(`${t}-separator`, n?.separator),
        'style': a?.separator,
        'aria-hidden': 'true',
      },
      e === '' ? e : e || '/',
    );
  };
h.__ANT_BREADCRUMB_SEPARATOR = !0;
function Ee(e, r) {
  if (!A(e.title)) return null;
  const t = Object.keys(r).join('|');
  return typeof e.title == 'object'
    ? e.title
    : String(e.title).replace(new RegExp(`:(${t})`, 'g'), (o, n) => r[n] || o);
}
function W(e, r, t, o) {
  if (!A(t)) return null;
  const { className: n, onClick: a, ...l } = r,
    c = { ...U(l, { data: !0, aria: !0 }), onClick: a };
  return o !== void 0
    ? s.createElement('a', { ...c, className: f(`${e}-link`, n), href: o }, t)
    : s.createElement('span', { ...c, className: f(`${e}-link`, n) }, t);
}
function $e(e, r) {
  return (o, n, a, l, c) => {
    if (r) return r(o, n, a, l);
    const m = Ee(o, n);
    return W(e, o, m, c);
  };
}
const G = (e) => {
    const {
        prefixCls: r,
        separator: t = '/',
        children: o,
        menu: n,
        dropdownProps: a,
        href: l,
        dropdownIcon: c,
      } = e,
      m = s.useContext(_),
      { classNames: E, styles: C } = m,
      b = ((y) => {
        if (n) {
          const S = { ...a };
          if (n) {
            const { items: $, ...R } = n || {};
            S.menu = {
              ...R,
              items: $?.map(({ key: P, title: B, label: v, path: x, ...X }, M) => {
                let i = v ?? B;
                return (
                  x && (i = s.createElement('a', { href: `${l}${x}` }, i)),
                  { ...X, key: P ?? M, label: i }
                );
              }),
            };
          }
          return s.createElement(
            he,
            { placement: 'bottom', ...S },
            s.createElement('span', { className: `${r}-overlay-link` }, y, c),
          );
        }
        return y;
      })(o);
    return A(b)
      ? s.createElement(
          s.Fragment,
          null,
          s.createElement('li', { className: f(`${r}-item`, E?.item), style: C?.item }, b),
          t && s.createElement(h, null, t),
        )
      : null;
  },
  J = (e) => {
    const { prefixCls: r, children: t, href: o, ...n } = e,
      { getPrefixCls: a } = s.useContext(K),
      l = a('breadcrumb', r);
    return s.createElement(G, { ...n, prefixCls: l }, W(l, n, t, o));
  };
J.__ANT_BREADCRUMB_ITEM = !0;
const Re = (e) => {
    const { componentCls: r, iconCls: t, calc: o } = e;
    return {
      [r]: {
        ...ye(e),
        color: e.itemColor,
        fontSize: e.fontSize,
        [t]: { fontSize: e.iconFontSize },
        ol: { display: 'flex', flexWrap: 'wrap', margin: 0, padding: 0, listStyle: 'none' },
        [`${r}-item a`]: {
          'color': e.linkColor,
          'transition': `color ${e.motionDurationMid}`,
          'padding': `0 ${V(e.paddingXXS)}`,
          'borderRadius': e.borderRadiusSM,
          'height': e.fontHeight,
          'display': 'inline-block',
          'marginInline': o(e.marginXXS).mul(-1).equal(),
          '&:hover': { color: e.linkHoverColor, backgroundColor: e.colorBgTextHover },
          ...be(e),
        },
        [`${r}-item:last-child`]: { color: e.lastItemColor },
        [`${r}-separator`]: { marginInline: e.separatorMargin, color: e.separatorColor },
        [`${r}-link`]: {
          [`
          > ${t} + span,
          > ${t} + a
        `]: { marginInlineStart: e.marginXXS },
        },
        [`${r}-overlay-link`]: {
          'borderRadius': e.borderRadiusSM,
          'height': e.fontHeight,
          'display': 'inline-block',
          'padding': `0 ${V(e.paddingXXS)}`,
          'marginInline': o(e.marginXXS).mul(-1).equal(),
          [`> ${t}`]: { marginInlineStart: e.marginXXS, fontSize: e.fontSizeIcon },
          '&:hover': {
            color: e.linkHoverColor,
            backgroundColor: e.colorBgTextHover,
            a: { color: e.linkHoverColor },
          },
          'a': { '&:hover': { backgroundColor: 'transparent' } },
        },
        [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
      },
    };
  },
  Pe = (e) => ({
    itemColor: e.colorTextDescription,
    lastItemColor: e.colorText,
    iconFontSize: e.fontSize,
    linkColor: e.colorTextDescription,
    linkHoverColor: e.colorText,
    separatorColor: e.colorTextDescription,
    separatorMargin: e.marginXS,
  }),
  Be = fe(
    'Breadcrumb',
    (e) => {
      const r = Ce(e, {});
      return Re(r);
    },
    Pe,
  );
function ve(e) {
  const { breadcrumbName: r, children: t, ...o } = e,
    n = { title: r, ...o };
  return (
    t && (n.menu = { items: t.map(({ breadcrumbName: a, ...l }) => ({ ...l, title: a })) }),
    n
  );
}
function Xe(e, r) {
  return s.useMemo(() => e || (r ? r.map(ve) : null), [e, r]);
}
const Me = (e, r) => {
    if (r === void 0) return r;
    let t = (r || '').replace(/^\//, '');
    return (
      Object.keys(e).forEach((o) => {
        t = t.replace(`:${o}`, e[o]);
      }),
      t
    );
  },
  Te = (e) => {
    const {
        prefixCls: r,
        separator: t,
        style: o,
        className: n,
        rootClassName: a,
        routes: l,
        items: c,
        children: m,
        itemRender: E,
        params: C = {},
        classNames: j,
        styles: b,
        dropdownIcon: y,
        ...S
      } = e,
      {
        getPrefixCls: $,
        direction: R,
        className: P,
        style: B,
        classNames: v,
        styles: x,
        separator: X,
        dropdownIcon: M,
      } = Se('breadcrumb'),
      i = t ?? X ?? '/',
      Y = y ?? M ?? s.createElement(Ie, null);
    let T;
    const p = $('breadcrumb', r),
      [Z, k] = Be(p),
      N = Xe(c, l),
      ee = s.useMemo(() => ({ ...e, separator: i }), [e, i]),
      [w, z] = xe([v, j], [x, b], { props: ee }),
      re = $e(p, E);
    if (N && N.length > 0) {
      const d = [],
        g = c || l;
      T = N.map((u, I) => {
        const {
            path: ne,
            key: ae,
            type: le,
            menu: F,
            onClick: ce,
            className: ie,
            style: me,
            separator: ue,
            dropdownProps: de,
          } = u,
          D = Me(C, ne);
        D !== void 0 && d.push(D);
        const L = ae ?? I;
        if (le === 'separator') return s.createElement(h, { key: L }, ue);
        const O = {},
          pe = I === N.length - 1;
        F && (O.menu = F);
        let { href: H } = u;
        return (
          d.length && D !== void 0 && (H = `#/${d.join('/')}`),
          s.createElement(
            G,
            {
              key: L,
              ...O,
              ...U(u, { data: !0, aria: !0 }),
              className: ie,
              style: me,
              dropdownProps: de,
              dropdownIcon: Y,
              href: H,
              separator: pe ? '' : i,
              onClick: ce,
              prefixCls: p,
            },
            re(u, C, g, d, H),
          )
        );
      });
    } else if (m) {
      const d = q(m).length;
      T = q(m).map((g, u) => {
        if (!g) return g;
        const I = u === d - 1;
        return Ne(g, { separator: I ? '' : i, key: u });
      });
    }
    const te = f(p, P, { [`${p}-rtl`]: R === 'rtl' }, n, a, w.root, Z, k),
      oe = { ...z.root, ...B, ...o },
      se = s.useMemo(() => ({ classNames: w, styles: z }), [w, z]);
    return s.createElement(
      _.Provider,
      { value: se },
      s.createElement('nav', { className: te, style: oe, ...S }, s.createElement('ol', null, T)),
    );
  },
  Q = Te;
Q.Item = J;
Q.Separator = h;
export { Q as B };
