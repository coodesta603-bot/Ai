import {
  t as A,
  i as ee,
  s as re,
  f as te,
  a as se,
  F as P,
  v as oe,
} from './FormGroup-DGnHhsIY.js';
import {
  F as C,
  T as ae,
  j as y,
  f as ne,
  bs as ie,
  i as le,
  I as me,
  k as B,
  B as O,
  e as R,
} from './index-C8UyLGsD.js';
import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as ce } from './index-BfwjtmVb.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as z } from './index-5nC5GwBn.js';
import { u as de } from './useTranslation-BcQ_3h0b.js';
import { f as ue } from './form-CzkHLuiW.js';
import { q as fe, p as pe, r as Fe, h as xe } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { aF as ye } from '../vendor/vendor-icons-BHMUH78i.js';
const U = ({ tag: o, title: t, desc: e, avatar: n, classNames: i, styles: u, ...x }) =>
  r.jsxs(C, {
    horizontal: !0,
    align: 'center',
    gap: 8,
    ...x,
    children: [
      n,
      r.jsxs(C, {
        className: y(A.content, i?.content),
        gap: 8,
        style: u?.content,
        children: [
          r.jsxs(C, {
            align: 'center',
            className: y(A.title, i?.title),
            direction: 'horizontal',
            gap: 8,
            style: u?.title,
            children: [t, o && r.jsx(ae, { className: i?.tag, style: u?.tag, children: o })],
          }),
          e && r.jsx('small', { className: y(A.desc, i?.desc), style: u?.desc, children: e }),
        ],
      }),
    ],
  });
U.displayName = 'FormTitle';
var q = U;
const ve = ne(({ css: o }) => ({
    root: o`
      margin: 0;
      opacity: 0.66;
    `,
  })),
  H = ({ visible: o = !0, style: t, className: e, ...n }) =>
    r.jsx(ce, { className: y(ve.root, e), style: { opacity: o ? 1 : 0, ...t }, ...n });
H.displayName = 'FormDivider';
var he = H;
const { Item: be } = z,
  J = a.memo(
    ({
      desc: o,
      tag: t,
      minWidth: e,
      avatar: n,
      className: i,
      label: u,
      children: x,
      divider: g,
      layout: l,
      variant: m,
      ...c
    }) => {
      const N = a.useMemo(
          () => ({
            '--form-item-min-width':
              e != null && e !== '' ? (typeof e == 'number' ? `${e}px` : e) : '',
          }),
          [e],
        ),
        T = e != null && e !== '',
        { style: v, ...f } = c;
      return r.jsxs(r.Fragment, {
        children: [
          g && r.jsx(he, { visible: m !== 'borderless' }),
          r.jsx(be, {
            className: y(ee({ divider: g, itemMinWidth: T, layout: l }), i),
            label: r.jsx(q, { avatar: n, desc: o, tag: t, title: u }),
            layout: l,
            style: { ...N, ...v },
            ...f,
            children: x,
          }),
        ],
      });
    },
  );
J.displayName = 'FormItem';
var Q = J;
const X = a.createContext({}),
  je = a.memo(({ children: o, config: t }) => r.jsx(X, { value: t, children: o })),
  ge = () => a.use(X),
  L = (o) =>
    fe(o)
      ? Array.isArray(o)
        ? o.map((t) => L(t)).filter((t) => t !== void 0)
        : pe(
            Object.entries(o).reduce((t, [e, n]) => ((t[e] = L(n)), t), {}),
            (t) => t !== void 0,
          )
      : o,
  Te = (o, t) =>
    Fe({}, o, t, (e, n) => {
      if (Array.isArray(e)) return n;
    }),
  Y = a.memo(
    ({
      enableReset: o = !0,
      buttonProps: t,
      float: e,
      onReset: n,
      saveButtonProps: i,
      resetButtonProps: u,
      enableUnsavedWarning: x,
      children: g,
      texts: l,
      className: m,
      ...c
    }) => {
      const N = ie(),
        { form: T, initialValues: v, submitLoading: f } = ge(),
        [p, _] = a.useState(!1),
        V = z.useWatch([], T) || {},
        { t: h } = de(ue),
        D = re,
        w = a.useMemo(() => L(V), [V]),
        b = a.useMemo(() => L(v), [v]),
        E = a.useMemo(() => Te(b, w), [w, b]);
      a.useEffect(() => {
        _(!le(E, b));
      }, [E, b, f]);
      const G = l?.unSavedWarning ?? h('form.unsavedWarning'),
        I = l?.unSaved ?? h('form.unsavedChanges'),
        M = l?.reset ?? h('form.reset'),
        $ = l?.submit ?? h('form.submit'),
        s = (F) => {
          p ? (F.returnValue = G) : delete F.returnValue;
        };
      a.useEffect(() => {
        if (x && !(typeof window > 'u' || !p))
          return (
            window.addEventListener('beforeunload', s),
            () => window.removeEventListener('beforeunload', s)
          );
      }, [x, p, G]);
      const d = r.jsxs(r.Fragment, {
        children: [
          (e || p) &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx(me, {
                  color: B.colorTextDescription,
                  icon: ye,
                  size: 12,
                  style: { marginLeft: 8 },
                }),
                r.jsx('span', {
                  style: {
                    color: B.colorTextDescription,
                    flex: 'none',
                    fontSize: 12,
                    marginRight: e ? 16 : 4,
                  },
                  children: I,
                }),
              ],
            }),
          g,
          o &&
            (e || p) &&
            r.jsx(O, {
              htmlType: 'button',
              shape: e ? 'round' : void 0,
              variant: 'filled',
              onClick: () => {
                (n?.(w, b), T?.resetFields());
              },
              ...t,
              ...u,
              children: M,
            }),
          r.jsx(O, {
            htmlType: 'submit',
            loading: f,
            shape: e ? 'round' : void 0,
            type: 'primary',
            ...t,
            ...i,
            children: $,
          }),
        ],
      });
      return e
        ? r.jsx(N.div, {
            animate: p ? 'visible' : 'hidden',
            className: D.floatFooter,
            initial: 'hidden',
            transition: { duration: 0.1, ease: 'easeOut' },
            variants: {
              hidden: { opacity: 0, x: '-50%', y: 20 },
              visible: { opacity: 1, x: '-50%', y: 0 },
            },
            children: r.jsx(C, {
              horizontal: !0,
              align: 'center',
              className: m,
              gap: 8,
              justify: 'center',
              ...c,
              children: d,
            }),
          })
        : r.jsx(C, {
            horizontal: !0,
            align: 'center',
            className: y(D.footer, m),
            gap: 8,
            justify: 'flex-end',
            ...c,
            children: d,
          });
    },
  );
Y.displayName = 'FormSubmitFooter';
var _e = Y;
const Z = a.memo(({ className: o, children: t, variant: e = 'borderless', ...n }) => {
  const { mobile: i } = R();
  return r.jsx(C, { className: y(i ? te.mobile : se({ variant: e }), o), ...n, children: t });
});
Z.displayName = 'FormFlatGroup';
var ke = Z;
const W = a.memo(
  ({
    className: o,
    itemMinWidth: t,
    footer: e,
    form: n,
    items: i = [],
    children: u,
    itemsType: x = 'group',
    itemVariant: g,
    variant: l = 'borderless',
    classNames: m,
    styles: c,
    gap: N,
    style: T,
    collapsible: v,
    defaultActiveKey: f,
    initialValues: p,
    activeKey: _,
    onCollapse: V,
    onFinish: h,
    ref: D,
    layout: w,
    ...b
  }) => {
    const { mobile: E } = R(),
      [G, I] = a.useState(!1),
      M = a.useCallback(
        (s, d) =>
          r.jsx(
            Q,
            { className: m?.item, divider: d !== 0, minWidth: t, style: c?.item, variant: l, ...s },
            d,
          ),
        [t, l, m, c],
      ),
      $ = a.useCallback(
        (s, d) => {
          const F = s?.key || d;
          return r.jsx(
            P,
            {
              active: _ && s?.key ? _.includes(F) : void 0,
              className: m?.group,
              classNames: m,
              collapsible: xe(s.collapsible) ? v : s.collapsible,
              extra: s?.extra,
              icon: s?.icon,
              keyValue: F,
              style: c?.group,
              styles: c,
              title: s.title,
              variant: s?.variant || l,
              defaultActive: f && s?.key ? f.includes(F) : s?.defaultActive,
              onCollapse: (S) => {
                let k = _ || f || [];
                ((k = k.filter((K) => K !== F)), V?.(S ? [...k, F] : k));
              },
              children: Array.isArray(s.children)
                ? s.children.filter((S) => !S.hidden).map((S, k) => M(S, k))
                : s.children,
            },
            F,
          );
        },
        [_, v, f, V, l, m, c],
      );
    return r.jsx(je, {
      config: { form: n, initialValues: p, submitLoading: G },
      children: r.jsxs(z, {
        className: y(oe({ variant: l }), o),
        colon: !1,
        form: n,
        initialValues: p,
        layout: w || (E ? 'vertical' : 'horizontal'),
        ref: D,
        variant: g,
        style: { gap: N, ...T },
        onFinish: async (...s) => {
          h && (I(!0), await h(...s), I(!1));
        },
        ...b,
        children: [
          i && i?.length > 0
            ? x === 'group'
              ? i?.map((s, d) => $(s, d))
              : r.jsx(ke, {
                  className: m?.group,
                  style: c?.group,
                  variant: l,
                  children: i?.filter((s) => !s.hidden).map((s, d) => M(s, d)),
                })
            : void 0,
          u,
          e,
        ],
      }),
    });
  },
);
W.displayName = 'Form';
var Ce = W;
const j = Ce;
j.Item = Q;
j.Group = P;
j.Title = q;
j.useForm = z.useForm;
j.Provider = z.Provider;
j.SubmitFooter = _e;
var Le = j;
export { Le as F, Q as a, _e as b, q as c };
