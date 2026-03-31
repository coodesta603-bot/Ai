import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as e, L as se, A as le } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as de, ai as Q, j as h, Z as ue, F as N, bA as fe, bs as xe } from './index-C8UyLGsD.js';
import { D as me } from './index-BfwjtmVb.js';
import { B as he } from './Block-DDntSWi2.js';
const U = t.createContext(null),
  pe = () => t.use(U),
  s = de(({ css: n, cssVar: o }) => ({
    action: n`
      opacity: 0;
      transition: opacity 150ms ${o.motionEaseOut};
    `,
    actionVisible: n`
      opacity: 1;
    `,
    base: n`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: n`
      overflow: hidden;
    `,
    contentInner: n`
      /* Content wrapper for animation */
    `,
    divider: n`
      margin-block: 0;
    `,
    header: n`
      &:hover .accordion-action {
        opacity: 1;
      }

      &:focus-visible {
        border-radius: ${o.borderRadiusLG};
        outline: 2px solid ${o.colorPrimary};
        outline-offset: 2px;
      }
    `,
    icon: n`
      transition: transform 200ms ${o.motionEaseOut};
    `,
    iconRotate: n`
      transform: rotate(90deg);
    `,
    indicator: n`
      display: flex;
      flex-shrink: 0;
      align-items: center;

      font-size: 18px;
      color: ${o.colorTextDescription};

      transition: transform 200ms ${o.motionEaseOut};
    `,
    item: n`
      position: relative;
      display: flex;
      flex-direction: column;
    `,
    titleWrapper: n`
      user-select: none;
    `,
  })),
  V = t.memo(
    ({
      children: n,
      className: o,
      style: f,
      accordion: l = !1,
      defaultExpandedKeys: x,
      expandedKeys: i,
      onExpandedChange: r,
      variant: g = 'borderless',
      gap: j,
      showDivider: p = !1,
      disableAnimation: a = !1,
      hideIndicator: K = !1,
      indicatorPlacement: P = 'start',
      keepContentMounted: F = !0,
      classNames: R,
      styles: b,
      motionProps: d,
      ref: M,
      ...T
    }) => {
      const C = t.Children.toArray(n).filter(t.isValidElement),
        _ = C.map((c, m) => c.props.itemKey || m),
        [u, A] = Q(x ?? _, { onChange: r, value: i }),
        k = t.useCallback(
          (c) => {
            const m = u;
            let y;
            (l
              ? (y = m.includes(c) ? [] : [c])
              : (y = m.includes(c) ? m.filter((B) => B !== c) : [...m, c]),
              A(y));
          },
          [l, u, A],
        ),
        z = {
          disableAnimation: a,
          expandedKeys: u,
          hideIndicator: K,
          indicatorPlacement: P,
          isExpanded: t.useCallback((c) => u.includes(c), [u]),
          keepContentMounted: F,
          motionProps: d,
          onToggle: k,
          showDivider: p,
          variant: g,
        },
        w = e.jsx(e.Fragment, {
          children: C.map((c, m) => {
            const y = c.props.itemKey || m;
            return e.jsxs(
              t.Fragment,
              { children: [c, p && m < C.length - 1 && e.jsx(me, { className: s.divider })] },
              y,
            );
          }),
        });
      return e.jsx(U, {
        value: z,
        children: e.jsx('div', {
          className: h(s.base, R?.base, o),
          ref: M,
          style: { gap: j, ...b?.base, ...f },
          ...T,
          children: a ? w : e.jsx(se, { children: w }),
        }),
      });
    },
  );
V.displayName = 'Accordion';
var ke = V;
const ve = t.memo(({ size: n = '1em', style: o, ...f }) =>
  e.jsx('svg', {
    fill: 'currentColor',
    fillRule: 'evenodd',
    height: n,
    style: { flex: 'none', lineHeight: 1, ...o },
    viewBox: '0 0 16 16',
    width: n,
    xmlns: 'http://www.w3.org/2000/svg',
    ...f,
    children: e.jsx('path', {
      d: 'M7.002 10.624a.5.5 0 01-.752-.432V5.808a.5.5 0 01.752-.432l3.758 2.192a.5.5 0 010 .864l-3.758 2.192z',
    }),
  }),
);
var ge = ve;
const je = { overflow: 'hidden' },
  X = t.memo(
    ({
      className: n,
      style: o,
      children: f,
      contentInnerClassName: l,
      isOpen: x,
      keepContentMounted: i,
    }) =>
      i
        ? e.jsx('div', {
            className: n,
            role: 'region',
            style: { display: x ? 'block' : 'none', ...o },
            children: e.jsx('div', { className: l, children: f }),
          })
        : x
          ? e.jsx('div', {
              className: n,
              role: 'region',
              style: o,
              children: e.jsx('div', { className: l, children: f }),
            })
          : null,
  );
X.displayName = 'AccordionStaticContent';
const Y = t.memo(
  ({
    contextMotionProps: n,
    className: o,
    style: f,
    children: l,
    contentInnerClassName: x,
    isOpen: i,
    skipInitialAnimation: r,
  }) => {
    const g = xe(),
      j = t.useMemo(
        () => ({
          animate: 'enter',
          exit: 'exit',
          initial: r ? !1 : 'exit',
          variants: {
            enter: {
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
            },
            exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
          },
          ...n,
        }),
        [n, r],
      );
    return e.jsx(le, {
      initial: !1,
      children: i
        ? e.jsx(g.div, {
            ...j,
            style: je,
            children: e.jsx('div', {
              className: o,
              role: 'region',
              style: f,
              children: e.jsx('div', { className: x, children: l }),
            }),
          })
        : null,
    });
  },
);
Y.displayName = 'AccordionMotionContent';
const S = t.memo(
  ({
    disableAnimation: n,
    isOpen: o,
    keepContentMounted: f,
    className: l,
    style: x,
    children: i,
    contentInnerClassName: r,
    contextMotionProps: g,
    skipInitialAnimation: j,
  }) =>
    n || !f
      ? e.jsx(X, {
          className: l,
          contentInnerClassName: r,
          isOpen: o,
          keepContentMounted: f,
          style: x,
          children: i,
        })
      : e.jsx(Y, {
          className: l,
          contentInnerClassName: r,
          contextMotionProps: g,
          isOpen: o,
          skipInitialAnimation: j,
          style: x,
          children: i,
        }),
);
S.displayName = 'AccordionItemContent';
const $ = t.memo(
  ({
    itemKey: n,
    title: o,
    children: f,
    action: l,
    alwaysShowAction: x = !1,
    disabled: i = !1,
    allowExpand: r = !0,
    hideIndicator: g,
    indicatorPlacement: j,
    indicator: p,
    classNames: a,
    paddingInline: K = 16,
    paddingBlock: P = 8,
    padding: F,
    ref: R,
    variant: b,
    styles: d,
    headerWrapper: M,
    defaultExpand: T,
    expand: C,
    onExpandChange: _,
  }) => {
    const u = pe(),
      A = C !== void 0 || T !== void 0,
      [k, z] = Q(T ?? !1, { onChange: _, value: C }),
      w = u?.isExpanded,
      c = u?.onToggle,
      m = u?.hideIndicator,
      y = u?.indicatorPlacement,
      B = u?.keepContentMounted,
      ee = u?.disableAnimation,
      ne = u?.motionProps,
      te = u?.variant ?? 'borderless',
      H = t.useRef(!0);
    t.useEffect(() => {
      H.current = !1;
    }, []);
    const I = A ? k : w ? w(n) : !1,
      W = g ?? m ?? !1,
      Z = j ?? y ?? 'start',
      oe = B ?? !0,
      ie = ee ?? !1,
      q = b || te,
      E = t.useCallback(() => {
        r && (i || (A ? z(!k) : c && c(n)));
      }, [r, i, A, z, k, c, n]),
      J = t.useCallback(
        (v) => {
          if (!(!r || i))
            switch (v.key) {
              case 'Enter':
              case ' ':
                (v.preventDefault(), E());
                break;
            }
        },
        [r, i, E],
      ),
      D = t.useCallback((v) => {
        v?.detail > 1 && v.preventDefault();
      }, []),
      L = t.useMemo(
        () =>
          !r || W
            ? null
            : p
              ? typeof p == 'function'
                ? e.jsx('span', {
                    'aria-hidden': 'true',
                    'className': h(s.indicator, a?.indicator),
                    'style': d?.indicator,
                    'children': p({ isDisabled: i, isOpen: I }),
                  })
                : e.jsx('span', {
                    'aria-hidden': 'true',
                    'className': h(s.indicator, a?.indicator),
                    'style': d?.indicator,
                    'children': p,
                  })
              : e.jsx('span', {
                  'aria-hidden': 'true',
                  'className': h(s.indicator, a?.indicator),
                  'style': d?.indicator,
                  'children': e.jsx(ge, { className: h(s.icon, I && s.iconRotate) }),
                }),
        [r, W, p, i, I, a, d],
      ),
      re = H.current && I,
      ae = t.useMemo(() => h('accordion-content', s.content, a?.content), [a?.content]),
      O = t.useMemo(
        () =>
          typeof o == 'string'
            ? e.jsx(ue, { ellipsis: !0, className: a?.title, style: d?.title, children: o })
            : o,
        [o, a?.title, d?.title],
      ),
      G = t.useMemo(
        () =>
          l &&
          e.jsx(N, {
            horizontal: !0,
            align: 'center',
            flex: 'none',
            gap: 4,
            style: d?.action,
            className: h('accordion-action', s.action, x && s.actionVisible, a?.action),
            onClick: fe,
            children: l,
          }),
        [l, x, h, s, a?.action, d?.action],
      ),
      ce = t.useMemo(() => {
        const v = e.jsx(he, {
          horizontal: !0,
          className: h('accordion-header', s.header, a?.header),
          clickable: !i && r,
          gap: 4,
          justify: 'space-between',
          padding: F,
          paddingBlock: P,
          paddingInline: K,
          ref: R,
          variant: b || q,
          style: {
            alignItems: 'center',
            cursor: i ? 'not-allowed' : r ? 'pointer' : 'default',
            opacity: i ? 0.5 : void 0,
            overflow: 'hidden',
            width: '100%',
            ...d?.header,
          },
          onClick: E,
          onKeyDown: J,
          children:
            Z === 'start'
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs(N, {
                      horizontal: !0,
                      align: 'center',
                      className: s.titleWrapper,
                      flex: 1,
                      gap: 2,
                      style: { overflow: 'hidden' },
                      onDoubleClick: D,
                      onMouseDown: D,
                      children: [O, L],
                    }),
                    e.jsx(N, {
                      horizontal: !0,
                      align: 'center',
                      flex: 'none',
                      gap: 4,
                      children: G,
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(N, {
                      horizontal: !0,
                      align: 'center',
                      className: s.titleWrapper,
                      flex: 1,
                      gap: 2,
                      style: { overflow: 'hidden' },
                      onDoubleClick: D,
                      onMouseDown: D,
                      children: O,
                    }),
                    e.jsxs(N, {
                      horizontal: !0,
                      align: 'center',
                      flex: 'none',
                      gap: 4,
                      children: [G, L],
                    }),
                  ],
                }),
        });
        return M ? M(v) : v;
      }, [a?.header, i, r, F, P, K, R, b, q, d?.header, E, J, Z, D, O, L, G, M]);
    return e.jsxs('div', {
      className: h('accordion-item', s.item, a?.base),
      style: d?.base,
      children: [
        ce,
        e.jsx(S, {
          className: ae,
          contentInnerClassName: s.contentInner,
          contextMotionProps: ne,
          disableAnimation: !!ie,
          isOpen: I,
          keepContentMounted: !!oe,
          skipInitialAnimation: re,
          style: d?.content,
          children: f,
        }),
      ],
    });
  },
);
$.displayName = 'AccordionItem';
var we = $;
export { ke as A, we as a };
