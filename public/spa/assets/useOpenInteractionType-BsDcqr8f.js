import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  dT as G,
  e9 as Ue,
  dy as Z,
  dR as Me,
  dP as ne,
  dQ as pt,
  ea as bt,
  d$ as ve,
  eb as Ze,
  b5 as Pe,
  ec as Je,
  ed as ye,
  dW as z,
  dz as De,
  ee as We,
  ef as Ne,
  eg as _,
  dB as J,
  dS as U,
  dU as L,
  dD as mt,
  eh as Be,
  ei as ht,
  ej as gt,
  dZ as vt,
  d_ as yt,
  ek as Ye,
  el as Ge,
  em as Et,
  en as Rt,
  dK as wt,
  dX as oe,
  dE as ce,
  dY as Tt,
  eo as Qe,
  ep as ue,
  eq as kt,
  er as xt,
  es as St,
  et as Ve,
  eu as Ct,
  ev as be,
  ew as Ot,
  b7 as Ft,
  ex as He,
  ey as le,
  ez as Lt,
  eA as It,
  eB as et,
  eC as At,
  eD as Mt,
} from './index-C8UyLGsD.js';
import { j as ie } from '../vendor/vendor-motion-Dbb9VQJo.js';
let $e = 0;
function me(e, o = {}) {
  const { preventScroll: t = !1, cancelPrevious: n = !0, sync: r = !1 } = o;
  n && cancelAnimationFrame($e);
  const i = () => e?.focus({ preventScroll: t });
  r ? i() : ($e = requestAnimationFrame(i));
}
const j = { 'inert': new WeakMap(), 'aria-hidden': new WeakMap(), 'none': new WeakMap() };
function qe(e) {
  return e === 'inert' ? j.inert : e === 'aria-hidden' ? j['aria-hidden'] : j.none;
}
let re = new WeakSet(),
  se = {},
  he = 0;
const tt = (e) => e && (e.host || tt(e.parentNode)),
  Pt = (e, o) =>
    o
      .map((t) => {
        if (e.contains(t)) return t;
        const n = tt(t);
        return e.contains(n) ? n : null;
      })
      .filter((t) => t != null);
function Dt(e, o, t, n) {
  const r = 'data-base-ui-inert',
    i = n ? 'inert' : t ? 'aria-hidden' : null,
    d = Pt(o, e),
    x = new Set(),
    E = new Set(d),
    k = [];
  se[r] || (se[r] = new WeakMap());
  const S = se[r];
  (d.forEach(D), C(o), x.clear());
  function D(u) {
    !u || x.has(u) || (x.add(u), u.parentNode && D(u.parentNode));
  }
  function C(u) {
    !u ||
      E.has(u) ||
      [].forEach.call(u.children, (b) => {
        if (Ue(b) !== 'script')
          if (x.has(b)) C(b);
          else {
            const F = i ? b.getAttribute(i) : null,
              g = F !== null && F !== 'false',
              y = qe(i),
              f = (y.get(b) || 0) + 1,
              l = (S.get(b) || 0) + 1;
            (y.set(b, f),
              S.set(b, l),
              k.push(b),
              f === 1 && g && re.add(b),
              l === 1 && b.setAttribute(r, ''),
              !g && i && b.setAttribute(i, i === 'inert' ? '' : 'true'));
          }
      });
  }
  return (
    (he += 1),
    () => {
      (k.forEach((u) => {
        const b = qe(i),
          g = (b.get(u) || 0) - 1,
          y = (S.get(u) || 0) - 1;
        (b.set(u, g),
          S.set(u, y),
          g || (!re.has(u) && i && u.removeAttribute(i), re.delete(u)),
          y || u.removeAttribute(r));
      }),
        (he -= 1),
        he ||
          ((j.inert = new WeakMap()),
          (j['aria-hidden'] = new WeakMap()),
          (j.none = new WeakMap()),
          (re = new WeakSet()),
          (se = {})));
    }
  );
}
function Wt(e, o = !1, t = !1) {
  const n = G(e[0]).body;
  return Dt(e.concat(Array.from(n.querySelectorAll('[aria-live]'))), n, o, t);
}
function Nt(e, o) {
  const t = ue(e.target);
  return e instanceof t.KeyboardEvent
    ? 'keyboard'
    : e instanceof t.FocusEvent
      ? o || 'keyboard'
      : 'pointerType' in e
        ? e.pointerType || 'keyboard'
        : 'touches' in e
          ? 'touch'
          : e instanceof t.MouseEvent
            ? o || (e.detail === 0 ? 'keyboard' : 'mouse')
            : '';
}
const _e = 20;
let V = [];
function Ee() {
  V = V.filter((e) => e.isConnected);
}
function Bt(e) {
  (Ee(), e && Ue(e) !== 'body' && (V.push(e), V.length > _e && (V = V.slice(-_e))));
}
function ge() {
  return (Ee(), V[V.length - 1]);
}
function Yt(e) {
  if (!e) return null;
  const o = ye();
  return Qe(e, o) ? e : Je(e, o)[0] || e;
}
function Gt(e) {
  return !e || !e.isConnected
    ? !1
    : typeof e.checkVisibility == 'function'
      ? e.checkVisibility()
      : St(e).display !== 'none';
}
function je(e, o) {
  if (!o.current.includes('floating') && !e.getAttribute('role')?.includes('dialog')) return;
  const t = ye(),
    r = xt(e, t).filter((d) => {
      const x = d.getAttribute('data-tabindex') || '';
      return Qe(d, t) || (d.hasAttribute('data-tabindex') && !x.startsWith('-'));
    }),
    i = e.getAttribute('tabindex');
  o.current.includes('floating') || r.length === 0
    ? i !== '0' && e.setAttribute('tabindex', '0')
    : (i !== '-1' ||
        (e.hasAttribute('data-tabindex') && e.getAttribute('data-tabindex') !== '-1')) &&
      (e.setAttribute('tabindex', '-1'), e.setAttribute('data-tabindex', '-1'));
}
function en(e) {
  const {
      context: o,
      children: t,
      disabled: n = !1,
      order: r = ['content'],
      initialFocus: i = !0,
      returnFocus: d = !0,
      restoreFocus: x = !1,
      modal: E = !0,
      closeOnFocusOut: k = !0,
      openInteractionType: S = '',
      getInsideElements: D = () => [],
      nextFocusableElement: C,
      previousFocusableElement: u,
      beforeContentFocusGuardRef: b,
      externalTree: F,
    } = e,
    g = 'rootStore' in o ? o.rootStore : o,
    y = g.useState('open'),
    f = g.useState('domReferenceElement'),
    l = g.useState('floatingElement'),
    { events: W, dataRef: O } = g.context,
    A = Z(() => O.current.floatingContext?.nodeId),
    M = Z(D),
    K = i === !1,
    I = Me(f) && K,
    H = ne(r),
    Re = ne(i),
    Q = ne(d),
    we = ne(S),
    N = pt(F),
    R = bt(),
    ut = p.useRef(null),
    lt = p.useRef(null),
    B = p.useRef(!1),
    ee = p.useRef(!1),
    ae = p.useRef(!1),
    Te = p.useRef(-1),
    ke = p.useRef(''),
    fe = p.useRef(''),
    xe = ve(),
    Se = ve(),
    Ce = Ze(),
    de = R != null,
    a = Pe(l),
    $ = Z((c = a) => (c ? Je(c, ye()) : [])),
    X = Z((c) => {
      const m = $(c);
      return H.current
        .map(() => m)
        .filter(Boolean)
        .flat();
    });
  (p.useEffect(() => {
    if (n || !E) return;
    function c(w) {
      w.key === 'Tab' && L(a, U(G(a))) && $().length === 0 && !I && wt(w);
    }
    const m = G(a);
    return (
      m.addEventListener('keydown', c),
      () => {
        m.removeEventListener('keydown', c);
      }
    );
  }, [n, f, a, E, H, I, $, X]),
    p.useEffect(() => {
      if (n || !l) return;
      function c(m) {
        const w = oe(m),
          T = $().indexOf(w);
        T !== -1 && (Te.current = T);
      }
      return (
        l.addEventListener('focusin', c),
        () => {
          l.removeEventListener('focusin', c);
        }
      );
    }, [n, l, $]),
    p.useEffect(() => {
      if (n || !y) return;
      const c = G(a);
      function m() {
        ae.current = !1;
      }
      function w(T) {
        const s = oe(T),
          h = L(l, s) || L(f, s) || L(R?.portalNode, s);
        ((ae.current = !h), (fe.current = T.pointerType || 'keyboard'));
      }
      function v() {
        fe.current = 'keyboard';
      }
      return (
        c.addEventListener('pointerdown', w, !0),
        c.addEventListener('pointerup', m, !0),
        c.addEventListener('pointercancel', m, !0),
        c.addEventListener('keydown', v, !0),
        () => {
          (c.removeEventListener('pointerdown', w, !0),
            c.removeEventListener('pointerup', m, !0),
            c.removeEventListener('pointercancel', m, !0),
            c.removeEventListener('keydown', v, !0));
        }
      );
    }, [n, l, f, a, y, R]),
    p.useEffect(() => {
      if (n || !k) return;
      function c() {
        ((ee.current = !0),
          Se.start(0, () => {
            ee.current = !1;
          }));
      }
      function m(s) {
        const h = s.relatedTarget,
          q = s.currentTarget,
          P = oe(s);
        queueMicrotask(() => {
          const te = A(),
            Ie = g.context.triggerElements,
            dt = !(
              L(f, h) ||
              L(l, h) ||
              L(h, l) ||
              L(R?.portalNode, h) ||
              (h != null && Ie.hasElement(h)) ||
              Ie.hasMatchingElement((Y) => L(Y, h)) ||
              h?.hasAttribute(We('focus-guard')) ||
              (N &&
                (Be(N.nodesRef.current, te).find(
                  (Y) =>
                    L(Y.context?.elements.floating, h) || L(Y.context?.elements.domReference, h),
                ) ||
                  Ne(N.nodesRef.current, te).find(
                    (Y) =>
                      [Y.context?.elements.floating, Pe(Y.context?.elements.floating)].includes(
                        h,
                      ) || Y.context?.elements.domReference === h,
                  )))
            );
          if ((q === f && a && je(a, H), x && q !== f && !Gt(P) && U(G(a)) === G(a).body)) {
            if (z(a) && (a.focus(), x === 'popup')) {
              Ce.request(() => {
                a.focus();
              });
              return;
            }
            const Y = Te.current,
              pe = $(),
              Ae = pe[Y] || pe[pe.length - 1] || a;
            z(Ae) && Ae.focus();
          }
          if (O.current.insideReactTree) {
            O.current.insideReactTree = !1;
            return;
          }
          (I || !E) &&
            h &&
            dt &&
            !ee.current &&
            (I || h !== ge()) &&
            ((B.current = !0), g.setOpen(!1, ce(Tt, s)));
        });
      }
      function w() {
        ae.current ||
          ((O.current.insideReactTree = !0),
          xe.start(0, () => {
            O.current.insideReactTree = !1;
          }));
      }
      const v = z(f) ? f : null,
        T = [];
      if (!(!l && !v))
        return (
          v &&
            (v.addEventListener('focusout', m),
            v.addEventListener('pointerdown', c),
            T.push(() => {
              (v.removeEventListener('focusout', m), v.removeEventListener('pointerdown', c));
            })),
          l &&
            (l.addEventListener('focusout', m),
            R &&
              (l.addEventListener('focusout', w, !0),
              T.push(() => {
                l.removeEventListener('focusout', w, !0);
              })),
            T.push(() => {
              l.removeEventListener('focusout', m);
            })),
          () => {
            T.forEach((s) => {
              s();
            });
          }
        );
    }, [n, f, l, a, E, N, R, g, k, x, $, I, A, H, O, xe, Se, Ce]));
  const Oe = p.useRef(null),
    Fe = p.useRef(null),
    at = De(Oe, b, R?.beforeInsideRef),
    ft = De(Fe, R?.afterInsideRef);
  (p.useEffect(() => {
    if (n || !l || !y) return;
    const c = Array.from(R?.portalNode?.querySelectorAll(`[${We('portal')}]`) || []),
      w = (N ? Ne(N.nodesRef.current, A()) : []).find((s) =>
        Me(s.context?.elements.domReference || null),
      )?.context?.elements.domReference,
      v = [
        l,
        w,
        ...c,
        ...M(),
        ut.current,
        lt.current,
        Oe.current,
        Fe.current,
        R?.beforeOutsideRef.current,
        R?.afterOutsideRef.current,
        _(u),
        _(C),
        I ? f : null,
      ].filter((s) => s != null),
      T = Wt(v, E || I);
    return () => {
      T();
    };
  }, [y, n, f, l, E, H, R, I, N, A, M, C, u]),
    J(() => {
      if (!y || n || !z(a)) return;
      const c = G(a),
        m = U(c);
      queueMicrotask(() => {
        const w = X(a),
          v = Re.current,
          T = typeof v == 'function' ? v(we.current || '') : v;
        if (T === void 0 || T === !1) return;
        let s;
        (T === !0 || T === null ? (s = w[0] || a) : (s = _(T)),
          (s = s || w[0] || a),
          !L(a, m) && me(s, { preventScroll: s === a }));
      });
    }, [n, y, a, K, X, Re, we]),
    J(() => {
      if (n || !a) return;
      const c = G(a),
        m = U(c);
      Bt(m);
      function w(s) {
        if (
          (s.open || (ke.current = Nt(s.nativeEvent, fe.current)),
          s.reason === ht && s.nativeEvent.type === 'mouseleave' && (B.current = !0),
          s.reason === gt)
        )
          if (s.nested) B.current = !1;
          else if (vt(s.nativeEvent) || yt(s.nativeEvent)) B.current = !1;
          else {
            let h = !1;
            (document.createElement('div').focus({
              get preventScroll() {
                return ((h = !0), !1);
              },
            }),
              h ? (B.current = !1) : (B.current = !0));
          }
      }
      W.on('openchange', w);
      const v = c.createElement('span');
      (v.setAttribute('tabindex', '-1'),
        v.setAttribute('aria-hidden', 'true'),
        Object.assign(v.style, mt),
        de && f && f.insertAdjacentElement('afterend', v));
      function T() {
        const s = Q.current;
        let h = typeof s == 'function' ? s(ke.current) : s;
        if (h === void 0 || h === !1) return null;
        if ((h === null && (h = !0), typeof h == 'boolean')) {
          const P = f || ge();
          return P && P.isConnected ? P : v;
        }
        const q = f || ge() || v;
        return _(h) || q;
      }
      return () => {
        W.off('openchange', w);
        const s = U(c),
          h =
            L(l, s) ||
            (N && Be(N.nodesRef.current, A(), !1).some((P) => L(P.context?.elements.floating, s))),
          q = T();
        queueMicrotask(() => {
          const P = Yt(q),
            te = typeof Q.current != 'boolean';
          (Q.current &&
            !B.current &&
            z(P) &&
            (!(!te && P !== s && s !== c.body) || h) &&
            P.focus({ preventScroll: !0 }),
            v.remove());
        });
      };
    }, [n, l, a, Q, O, W, N, de, f, A]),
    p.useEffect(() => {
      queueMicrotask(() => {
        B.current = !1;
      });
    }, [n]),
    p.useEffect(() => {
      if (n || !y) return;
      function c(w) {
        oe(w)?.closest(`[${kt}]`) && (ee.current = !0);
      }
      const m = G(a);
      return (
        m.addEventListener('pointerdown', c, !0),
        () => {
          m.removeEventListener('pointerdown', c, !0);
        }
      );
    }, [n, y, a]),
    J(() => {
      if (!n && R)
        return (
          R.setFocusManagerState({
            modal: E,
            closeOnFocusOut: k,
            open: y,
            onOpenChange: g.setOpen,
            domReference: f,
          }),
          () => {
            R.setFocusManagerState(null);
          }
        );
    }, [n, R, E, y, g, k, f]),
    J(() => {
      if (!(n || !a))
        return (
          je(a, H),
          () => {
            queueMicrotask(Ee);
          }
        );
    }, [n, a, H]));
  const Le = !n && (E ? !I : !0) && (de || E);
  return ie.jsxs(p.Fragment, {
    children: [
      Le &&
        ie.jsx(Ye, {
          'data-type': 'inside',
          'ref': at,
          'onFocus': (c) => {
            if (E) {
              const m = X();
              me(m[m.length - 1]);
            } else
              R?.portalNode &&
                ((B.current = !1),
                Ge(c, R.portalNode) ? Et(f)?.focus() : _(u ?? R.beforeOutsideRef)?.focus());
          },
        }),
      t,
      Le &&
        ie.jsx(Ye, {
          'data-type': 'inside',
          'ref': ft,
          'onFocus': (c) => {
            E
              ? me(X()[0])
              : R?.portalNode &&
                (k && (B.current = !0),
                Ge(c, R.portalNode) ? Rt(f)?.focus() : _(C ?? R.afterOutsideRef)?.focus());
          },
        }),
    ],
  });
}
function tn(e, o = {}) {
  const t = 'rootStore' in e ? e.rootStore : e,
    n = t.context.dataRef,
    {
      enabled: r = !0,
      event: i = 'click',
      toggle: d = !0,
      ignoreMouse: x = !1,
      stickIfOpen: E = !0,
      touchOpenDelay: k = 0,
    } = o,
    S = p.useRef(void 0),
    D = Ze(),
    C = ve(),
    u = p.useMemo(
      () => ({
        onPointerDown(b) {
          S.current = b.pointerType;
        },
        onMouseDown(b) {
          const F = S.current,
            g = b.nativeEvent,
            y = t.select('open');
          if (b.button !== 0 || i === 'click' || (Ve(F, !0) && x)) return;
          const f = n.current.openEvent,
            l = f?.type,
            W = t.select('domReferenceElement') !== b.currentTarget,
            O = (y && W) || !(y && d && (!(f && E) || l === 'click' || l === 'mousedown'));
          if (Ot(g.target)) {
            const M = ce(be, g, g.target);
            O && F === 'touch' && k > 0
              ? C.start(k, () => {
                  t.setOpen(!0, M);
                })
              : t.setOpen(O, M);
            return;
          }
          const A = b.currentTarget;
          D.request(() => {
            const M = ce(be, g, A);
            O && F === 'touch' && k > 0
              ? C.start(k, () => {
                  t.setOpen(!0, M);
                })
              : t.setOpen(O, M);
          });
        },
        onClick(b) {
          if (i === 'mousedown-only') return;
          const F = S.current;
          if (i === 'mousedown' && F) {
            S.current = void 0;
            return;
          }
          if (Ve(F, !0) && x) return;
          const g = t.select('open'),
            y = n.current.openEvent,
            f = t.select('domReferenceElement') !== b.currentTarget,
            l = (g && f) || !(g && d && (!(y && E) || Ct(y))),
            W = ce(be, b.nativeEvent, b.currentTarget);
          l && F === 'touch' && k > 0
            ? C.start(k, () => {
                t.setOpen(!0, W);
              })
            : t.setOpen(l, W);
        },
        onKeyDown() {
          S.current = void 0;
        },
      }),
      [n, i, x, t, E, d, D, C, k],
    );
  return p.useMemo(() => (r ? { reference: u } : Ft), [r, u]);
}
const Vt = p.createContext(void 0);
function nn(e) {
  return p.useContext(Vt);
}
const nt = 'ArrowUp',
  ot = 'ArrowDown',
  rt = 'ArrowLeft',
  st = 'ArrowRight',
  ct = 'Home',
  it = 'End',
  Ht = new Set([rt, st]),
  $t = new Set([nt, ot]),
  qt = new Set([...Ht, ...$t]);
[...qt];
const on = new Set([nt, ot, rt, st, ct, it]),
  rn = p.forwardRef(function (o, t) {
    const { cutout: n, ...r } = o;
    let i;
    if (n) {
      const d = n?.getBoundingClientRect();
      i = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${d.left}px ${d.top}px,
      ${d.left}px ${d.bottom}px,
      ${d.right}px ${d.bottom}px,
      ${d.right}px ${d.top}px,
      ${d.left}px ${d.top}px
    )`;
    }
    return ie.jsx('div', {
      'ref': t,
      'role': 'presentation',
      'data-base-ui-inert': '',
      ...r,
      'style': {
        position: 'fixed',
        inset: 0,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        clipPath: i,
      },
    });
  });
let Ke = {},
  Xe = {},
  ze = '';
function _t(e) {
  if (typeof document > 'u') return !1;
  const o = le(e);
  return ue(o).innerWidth - o.documentElement.clientWidth > 0;
}
function jt(e) {
  const o = le(e),
    t = o.documentElement,
    n = o.body,
    r = et(t) ? t : n,
    i = r.style.overflow;
  return (
    (r.style.overflow = 'hidden'),
    () => {
      r.style.overflow = i;
    }
  );
}
function Kt(e) {
  const o = le(e),
    t = o.documentElement,
    n = o.body,
    r = ue(t);
  let i = 0,
    d = 0;
  const x = Mt.create(),
    E = typeof CSS < 'u' && CSS.supports?.('scrollbar-gutter', 'stable');
  if (At && (r.visualViewport?.scale ?? 1) !== 1) return () => {};
  function k() {
    const C = r.getComputedStyle(t),
      u = r.getComputedStyle(n),
      g = (C.scrollbarGutter || '').includes('both-edges') ? 'stable both-edges' : 'stable';
    ((i = t.scrollTop),
      (d = t.scrollLeft),
      (Ke = {
        scrollbarGutter: t.style.scrollbarGutter,
        overflowY: t.style.overflowY,
        overflowX: t.style.overflowX,
      }),
      (ze = t.style.scrollBehavior),
      (Xe = {
        position: n.style.position,
        height: n.style.height,
        width: n.style.width,
        boxSizing: n.style.boxSizing,
        overflowY: n.style.overflowY,
        overflowX: n.style.overflowX,
        scrollBehavior: n.style.scrollBehavior,
      }));
    const y = t.scrollHeight > t.clientHeight,
      f = t.scrollWidth > t.clientWidth,
      l = C.overflowY === 'scroll' || u.overflowY === 'scroll',
      W = C.overflowX === 'scroll' || u.overflowX === 'scroll',
      O = Math.max(0, r.innerWidth - t.clientWidth),
      A = Math.max(0, r.innerHeight - t.clientHeight),
      M = parseFloat(u.marginTop) + parseFloat(u.marginBottom),
      K = parseFloat(u.marginLeft) + parseFloat(u.marginRight),
      I = et(t) ? t : n;
    if (E) {
      ((t.style.scrollbarGutter = g),
        (I.style.overflowY = 'hidden'),
        (I.style.overflowX = 'hidden'));
      return;
    }
    (Object.assign(t.style, { scrollbarGutter: g, overflowY: 'hidden', overflowX: 'hidden' }),
      (y || l) && (t.style.overflowY = 'scroll'),
      (f || W) && (t.style.overflowX = 'scroll'),
      Object.assign(n.style, {
        position: 'relative',
        height: M || A ? `calc(100dvh - ${M + A}px)` : '100dvh',
        width: K || O ? `calc(100vw - ${K + O}px)` : '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        scrollBehavior: 'unset',
      }),
      (n.scrollTop = i),
      (n.scrollLeft = d),
      t.setAttribute('data-base-ui-scroll-locked', ''),
      (t.style.scrollBehavior = 'unset'));
  }
  function S() {
    (Object.assign(t.style, Ke),
      Object.assign(n.style, Xe),
      E ||
        ((t.scrollTop = i),
        (t.scrollLeft = d),
        t.removeAttribute('data-base-ui-scroll-locked'),
        (t.style.scrollBehavior = ze)));
  }
  function D() {
    (S(), x.request(k));
  }
  return (
    k(),
    r.addEventListener('resize', D),
    () => {
      (x.cancel(),
        S(),
        typeof r.removeEventListener == 'function' && r.removeEventListener('resize', D));
    }
  );
}
class Xt {
  lockCount = 0;
  restore = null;
  timeoutLock = He.create();
  timeoutUnlock = He.create();
  acquire(o) {
    return (
      (this.lockCount += 1),
      this.lockCount === 1 &&
        this.restore === null &&
        this.timeoutLock.start(0, () => this.lock(o)),
      this.release
    );
  }
  release = () => {
    ((this.lockCount -= 1),
      this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock));
  };
  unlock = () => {
    this.lockCount === 0 && this.restore && (this.restore?.(), (this.restore = null));
  };
  lock(o) {
    if (this.lockCount === 0 || this.restore !== null) return;
    const n = le(o).documentElement,
      r = ue(n).getComputedStyle(n).overflowY;
    if (r === 'hidden' || r === 'clip') {
      this.restore = Lt;
      return;
    }
    const i = It || !_t(o);
    this.restore = i ? jt(o) : Kt(o);
  }
}
const zt = new Xt();
function sn(e = !0, o = null) {
  J(() => {
    if (e) return zt.acquire(o);
  }, [e, o]);
}
function Ut(e) {
  const o = p.useRef(''),
    t = p.useCallback(
      (r) => {
        r.defaultPrevented || ((o.current = r.pointerType), e(r, r.pointerType));
      },
      [e],
    );
  return {
    onClick: p.useCallback(
      (r) => {
        if (r.detail === 0) {
          e(r, 'keyboard');
          return;
        }
        ('pointerType' in r && e(r, r.pointerType), e(r, o.current), (o.current = ''));
      },
      [e],
    ),
    onPointerDown: t,
  };
}
function cn(e) {
  const [o, t] = p.useState(null),
    n = Z((x, E) => {
      e || t(E);
    }),
    r = p.useCallback(() => {
      t(null);
    }, []),
    { onClick: i, onPointerDown: d } = Ut(n);
  return p.useMemo(
    () => ({ openMethod: o, reset: r, triggerProps: { onClick: i, onPointerDown: d } }),
    [o, r, i, d],
  );
}
export { on as C, en as F, rn as I, tn as a, sn as b, nn as c, me as e, cn as u };
