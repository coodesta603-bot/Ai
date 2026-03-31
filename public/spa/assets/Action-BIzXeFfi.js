import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  N as T,
  j as R,
  f as U,
  I as ne,
  F as oe,
  k as te,
  ai as se,
  X as re,
  A as ce,
} from './index-C8UyLGsD.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { r as le, a as ae, b as ie, c as de, d as ue, e as fe } from './DropdownMenu-CEFIlaZw.js';
import { k as pe } from './Popover-Cg4CTqoX.js';
import { _ as ve } from '../vendor/vendor-icons-BHMUH78i.js';
import { h as he } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const me = o.createContext({}),
  Ce = () => o.useContext(me),
  V = ({ children: r, trace: f }) => null,
  P = U(({ css: r }) => ({
    dropdownMenu: r`
    .ant-avatar {
      margin-inline-end: var(--ant-margin-xs);
    }
  `,
    trigger: r`
    outline: none;
  `,
  })),
  ye = o.memo(
    ({
      children: r,
      defaultOpen: f,
      menu: s,
      trigger: i,
      maxHeight: p,
      maxWidth: d,
      minHeight: C,
      minWidth: j,
      onOpenChange: y,
      onOpenChangeComplete: x,
      open: a,
      placement: M = 'top',
      popupProps: c,
      popupRender: l,
      portalProps: v,
      positionerProps: h,
      prefetch: b,
      triggerProps: u,
      ...w
    }) => {
      const S = T(),
        [X, W] = o.useState(!!f),
        A = o.useRef(null);
      o.useEffect(() => {
        a !== void 0 && W(a);
      }, [a]);
      const K = o.useCallback(
          (n, e) => {
            (y?.(n, e), a === void 0 && W(n));
          },
          [y, a],
        ),
        Y = o.useCallback(
          (n) => {
            (x?.(n), n || (A.current = null));
          },
          [x],
        ),
        z = a ?? X,
        D = o.useMemo(() => {
          if (i) return i === 'both' ? !0 : Array.isArray(i) ? i.includes('hover') : i === 'hover';
        }, [i]),
        _ = o.useMemo(
          () =>
            D === void 0 ? { nativeButton: !1, ...u } : { nativeButton: !1, ...u, openOnHover: D },
          [D, u],
        ),
        N = o.useCallback(
          (n) =>
            n &&
            n.map((e) => {
              if (!e || ('type' in e && e.type === 'divider')) return e;
              if ('type' in e && e.type === 'group')
                return { ...e, children: e.children ? N(e.children) : e.children };
              if ('children' in e && e.children) return { ...e, children: N(e.children) };
              const O = 'onClick' in e ? e.onClick : void 0,
                $ = 'closeOnClick' in e ? e.closeOnClick : void 0,
                Q = $ === !1,
                Z = 'label' in e ? e.label : void 0,
                ee = o.isValidElement(Z),
                F = $ ?? (ee ? !1 : void 0);
              return {
                ...e,
                ...(F !== void 0 ? { closeOnClick: F } : null),
                onClick: (k) => {
                  if (Q) {
                    (k.domEvent.stopPropagation(), s.onClick?.(k), O?.(k));
                    return;
                  }
                  (k.domEvent.preventDefault(), s.onClick?.(k), O?.(k));
                },
              };
            }),
          [s],
        ),
        I = o.useMemo(() => {
          if (!b && !z) return A.current;
          const n = typeof s.items == 'function' ? s.items() : s.items,
            e = le(N(n ?? []));
          return ((A.current = e), e);
        }, [N, z, s.items, b]),
        q = o.useMemo(() => (l ? l(I ?? null) : I), [l, I]),
        g = o.useMemo(() => {
          const n = c?.className;
          return typeof n == 'function'
            ? (e) => R(P.dropdownMenu, s.className, n(e))
            : R(P.dropdownMenu, s.className, n);
        }, [s.className, c?.className]),
        B = o.useMemo(() => {
          const n = {
              maxHeight: p,
              maxWidth: S ? void 0 : d,
              minHeight: C,
              minWidth: S ? void 0 : j,
              overflowX: 'hidden',
              overflowY: 'scroll',
              width: S ? '100vw' : void 0,
            },
            e = c?.style;
          return typeof e == 'function'
            ? (O) => ({ ...n, ...s.style, ...e(O) })
            : { ...n, ...s.style, ...e };
        }, [S, p, d, s.style, C, j, c?.style]),
        G = o.useMemo(
          () => (c ? { ...c, className: g, style: B } : { className: g, style: B }),
          [c, g, B],
        ),
        { container: m, ...H } = v ?? {},
        J = o.useMemo(() => {
          if (!m) return m ?? void 0;
          if (typeof m == 'object' && 'current' in m) {
            const n = m.current;
            return n ? (typeof ShadowRoot < 'u' && n instanceof ShadowRoot ? n.host : n) : null;
          }
          return typeof ShadowRoot < 'u' && m instanceof ShadowRoot ? m.host : m;
        }, [m]);
      return t.jsxs(ae, {
        ...w,
        defaultOpen: f,
        open: a,
        onOpenChange: K,
        onOpenChangeComplete: Y,
        children: [
          t.jsx(ie, { className: P.trigger, ..._, children: r }),
          t.jsx(de, {
            container: J,
            ...H,
            children: t.jsx(ue, {
              ...h,
              hoverTrigger: !!_?.openOnHover,
              placement: S ? 'top' : M,
              children: t.jsx(fe, {
                ...G,
                children: t.jsx(o.Suspense, {
                  fallback: t.jsx(V, { trace: 'ActionDropdown > popup' }),
                  children: q,
                }),
              }),
            }),
          }),
        ],
      });
    },
  ),
  xe = o.memo(({ size: r, style: f }) =>
    t.jsx('div', { style: f, children: t.jsx(ne, { spin: !0, icon: ve, size: r }) }),
  ),
  E = 'ant',
  L = U(({ css: r }) => ({
    popoverContent: r`
    .${E}-form {
      .${E}-form-item:first-child {
        padding-block: 0 4px;
      }
      .${E}-form-item:last-child {
        padding-block: 4px 0;
      }
    }
  `,
  })),
  be = o.memo(
    ({
      styles: r,
      maxHeight: f,
      maxWidth: s,
      minWidth: i,
      children: p,
      classNames: d,
      title: C,
      placement: j,
      loading: y,
      extra: x,
      content: a,
      ...M
    }) => {
      const c = T(),
        l = d,
        v = typeof l == 'object' && l?.content ? R(L.popoverContent, l.content) : L.popoverContent,
        h = r,
        b = typeof h == 'object' && h?.content ? h.content : {},
        u = t.jsx(o.Suspense, {
          fallback: t.jsx(V, { trace: 'ActionPopover > content' }),
          children: t.jsxs(t.Fragment, {
            children: [
              C &&
                t.jsxs(oe, {
                  horizontal: !0,
                  gap: 8,
                  justify: 'space-between',
                  style: { marginBottom: 16 },
                  children: [C, x, y && t.jsx(xe, { style: { color: te.colorTextSecondary } })],
                }),
              a,
            ],
          }),
        });
      return t.jsx(pe, {
        content: u,
        nativeButton: !1,
        placement: c ? 'top' : j,
        classNames: { ...(typeof l == 'object' ? l : {}), content: v },
        styles: {
          ...(typeof h == 'object' ? h : {}),
          content: {
            maxHeight: f,
            maxWidth: c ? void 0 : s,
            minWidth: c ? void 0 : i,
            width: c ? '100vw' : void 0,
            ...b,
          },
        },
        ...M,
        children: p,
      });
    },
  ),
  Ae = o.memo(
    ({
      showTooltip: r,
      loading: f,
      icon: s,
      title: i,
      dropdown: p,
      popover: d,
      open: C,
      onOpenChange: j,
      trigger: y,
      disabled: x,
      onClick: a,
      ...M
    }) => {
      const [c, l] = se(!1, { onChange: j, value: C }),
        v = re((w) => w.isMobile),
        { actionSize: h, dropdownPlacement: b } = Ce(),
        u = t.jsx(ce, {
          disabled: x,
          icon: s,
          loading: f,
          title: he(r) ? (v ? void 0 : i) : r ? i : void 0,
          tooltipProps: { placement: 'bottom' },
          onClick: (w) => {
            if (a) return a(w);
            l(!0);
          },
          ...M,
          size: h ?? { blockSize: 36, size: 20 },
        });
      return x
        ? u
        : p
          ? t.jsx(ye, {
              open: c,
              trigger: y,
              onOpenChange: l,
              ...p,
              minWidth: v ? '100%' : p.minWidth,
              placement: v ? 'top' : (b ?? p.placement),
              children: u,
            })
          : d
            ? t.jsx(be, {
                open: c,
                trigger: y,
                onOpenChange: l,
                ...d,
                minWidth: v ? '100%' : d.minWidth,
                placement: v ? 'top' : (b ?? d.placement),
                children: u,
              })
            : u;
    },
  );
export { Ae as A, V as D, be as a, me as b, ye as c, Ce as u };
