import { dh as v, di as $, J as N } from './index-C8UyLGsD.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as U } from './Modal-Dd2pIxVd.js';
import { j as l } from '../vendor/vendor-motion-Dbb9VQJo.js';
const V = (e, t) => () => {},
  R = n.createContext({ close: () => {}, setCanDismissByClickOutside: () => {} }),
  T = n.memo(({ children: e, value: t }) => l.jsx(R, { value: t, children: e })),
  W = () => n.use(R);
function c(e) {
  const t = n.useRef(e);
  return (
    n.useLayoutEffect(() => {
      t.current = e;
    }),
    n.useCallback((...s) => t.current(...s), [])
  );
}
const j = () => {},
  B = n.memo(({ id: e, props: t, onClose: s, onUpdate: o, onDestroy: r }) => {
    const { afterClose: u, afterOpenChange: h, children: S, onCancel: i, open: C, ...w } = t,
      m = c(u ?? j),
      k = c(h ?? j),
      M = c(i ?? j),
      y = c(() => s(e)),
      D = c((d) => o(e, { maskClosable: d })),
      A = n.useMemo(() => ({ close: y, setCanDismissByClickOutside: D }), [y, D]);
    return l.jsx(U, {
      ...w,
      open: C ?? !0,
      afterClose: n.useCallback(() => {
        (m?.(), r(e));
      }, [m, r, e]),
      afterOpenChange: n.useCallback(
        (d) => {
          (k?.(d), d || r(e));
        },
        [k, r, e],
      ),
      onCancel: n.useCallback(
        (d) => {
          (M?.(d), y());
        },
        [M, y],
      ),
      children: l.jsx(T, { value: A, children: S }),
    });
  });
B.displayName = 'ModalStackItem';
const I = n.memo(
  ({ component: e, id: t, onClose: s, onUpdate: o, open: r, options: u, props: h }) => {
    const S = c(s),
      i = c(() => S(t)),
      C = c((M) => {
        o(t, { maskClosable: M });
      }),
      w = n.useMemo(() => ({ close: i, setCanDismissByClickOutside: C }), [i, C]),
      m = u?.openKey ?? 'open',
      k = u?.onCloseKey ?? 'onClose';
    return l.jsx(T, { value: w, children: l.jsx(e, { ...h, [k]: i, [m]: r }) });
  },
);
I.displayName = 'RawModalStackItem';
let a = [],
  K = 0;
const E = new Set(),
  f = new Map(),
  p = () => {
    E.forEach((e) => e());
  },
  _ = (e) => (E.add(e), () => E.delete(e)),
  H = [],
  J = () => a,
  L = () => H,
  Y = ({ children: e, root: t }) => {
    const s = $();
    return N.createPortal(e, t ?? s ?? document.body);
  },
  x = (e, t) => {
    let s = !1;
    ((a = a.map((o) =>
      o.id !== e || o.kind !== 'modal' ? o : ((s = !0), { ...o, props: { ...o.props, ...t } }),
    )),
      s && p());
  },
  O = (e, t) => {
    let s = !1;
    ((a = a.map((o) =>
      o.id !== e || o.kind !== 'raw' ? o : ((s = !0), { ...o, props: { ...o.props, ...t } }),
    )),
      s && p());
  },
  q = (e, t) => {
    let s = !1;
    ((a = a.map((o) =>
      o.id !== e || o.kind !== 'raw' || o.open === t ? o : ((s = !0), { ...o, open: t }),
    )),
      s && p());
  },
  b = (e) => {
    const t = a.find((u) => u.id === e);
    if (!t) return;
    if (t.kind === 'modal') {
      x(e, { open: !1 });
      return;
    }
    if ((q(e, !1), !(t.options?.destroyOnClose ?? !0))) return;
    const s = t.options?.destroyDelay ?? 200,
      o = f.get(e);
    o && clearTimeout(o);
    const r = window.setTimeout(() => {
      (f.delete(e), g(e));
    }, s);
    f.set(e, r);
  },
  g = (e) => {
    const t = f.get(e);
    t && (clearTimeout(t), f.delete(e));
    const s = a.filter((o) => o.id !== e);
    s.length !== a.length && ((a = s), p());
  },
  P = n.memo(({ stack: e }) =>
    v()
      ? e.map((t) =>
          t.kind === 'modal'
            ? l.jsx(B, { id: t.id, props: t.props, onClose: b, onDestroy: g, onUpdate: x }, t.id)
            : l.jsx(
                I,
                {
                  component: t.component,
                  id: t.id,
                  open: t.open,
                  options: t.options,
                  props: t.props,
                  onClose: b,
                  onUpdate: O,
                },
                t.id,
              ),
        )
      : null,
  );
P.displayName = 'ModalStack';
const X = ({ root: e }) => {
    const t = n.useSyncExternalStore(_, J, L),
      s = v();
    return (
      n.useEffect(() => {
        if (s) return V();
      }, [s, e]),
      !s || t.length === 0 ? null : l.jsx(Y, { root: e, children: l.jsx(P, { stack: t }) })
    );
  },
  Z = (e) => {
    const t = `modal-${Date.now()}-${K++}`;
    return (
      (a = [...a, { id: t, kind: 'modal', props: { ...e, open: e.open ?? !0 } }]),
      p(),
      {
        close: () => b(t),
        destroy: () => g(t),
        setCanDismissByClickOutside: (s) => x(t, { maskClosable: s }),
        update: (s) => x(t, s),
      }
    );
  };
function ee(e, t, s) {
  const o = `modal-${Date.now()}-${K++}`;
  return (
    (a = [...a, { component: e, id: o, kind: 'raw', open: !0, options: s, props: t }]),
    p(),
    {
      close: () => b(o),
      destroy: () => g(o),
      setCanDismissByClickOutside: (r) => O(o, { maskClosable: r }),
      update: (r) => O(o, r),
    }
  );
}
export { X as M, ee as a, T as b, Z as c, W as u };
