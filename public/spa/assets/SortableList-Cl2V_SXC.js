import {
  f as Vn,
  ae as vt,
  ad as Kn,
  J as ke,
  F as rn,
  j as Un,
  A as Gn,
} from './index-C8UyLGsD.js';
import { r as l, R as O } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as oe } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { cB as qn } from '../vendor/vendor-icons-BHMUH78i.js';
const on = { anchor: null, iconSpaceMode: 'global', items: [], open: !1, triggerId: null };
let wt = on;
const xt = new Set(),
  ie = { ready: !1, triggerId: null, x: 0, y: 0 },
  Jn = () => {
    xt.forEach((e) => e());
  },
  si = (e) => (xt.add(e), () => xt.delete(e)),
  ai = () => wt,
  li = () => on,
  ci = (e) => {
    ((ie.x = e.clientX),
      (ie.y = e.clientY),
      (ie.ready = !0),
      e.target instanceof Element
        ? (ie.triggerId =
            e.target.closest('[data-contextmenu-trigger]')?.dataset.contextmenuTrigger ?? null)
        : (ie.triggerId = null));
  },
  _n = (e) => ({
    contextElement: typeof document > 'u' ? void 0 : document.body,
    getBoundingClientRect: () => ({
      bottom: e.y,
      height: 0,
      left: e.x,
      right: e.x,
      toJSON: () => {},
      top: e.y,
      width: 0,
      x: e.x,
      y: e.y,
    }),
  }),
  Rt = (e) => {
    ((wt = { ...wt, ...e }), Jn());
  },
  ui = (e, t) => {
    if (typeof window > 'u') return;
    const n = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    Rt({
      anchor: _n(ie.ready ? { x: ie.x, y: ie.y } : n),
      iconAlign: t?.iconAlign,
      iconSpaceMode: t?.iconSpaceMode ?? 'global',
      items: e,
      open: !0,
      triggerId: ie.triggerId ?? null,
    });
  },
  di = (e) => {
    typeof window > 'u' || Rt({ items: e });
  },
  fi = () => {
    Rt({ anchor: null, iconSpaceMode: 'global', items: [], open: !1, triggerId: null });
  },
  ve = Vn(({ css: e, cssVar: t }) => ({
    borderless: vt.variantBorderlessWithoutHover,
    container: e`
      padding: 0;
      list-style: none;
    `,
    filled: vt.variantFilledWithoutHover,
    item: e`
      overflow: hidden;
      box-sizing: border-box;
      border-radius: ${t.borderRadius};
      list-style: none;
    `,
    itemVariant: e`
      padding-block: 4px;
      padding-inline: 4px 16px;
    `,
    outlined: vt.variantOutlinedWithoutHover,
  })),
  Qn = Kn(ve.item, {
    compoundVariants: [
      { className: ve.itemVariant, variant: 'outlined' },
      { className: ve.itemVariant, variant: 'filled' },
    ],
    defaultVariants: { variant: 'borderless' },
    variants: { variant: { filled: ve.filled, outlined: ve.outlined, borderless: ve.borderless } },
  });
function Zn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return l.useMemo(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    t,
  );
}
const st =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function De(e) {
  const t = Object.prototype.toString.call(e);
  return t === '[object Window]' || t === '[object global]';
}
function Et(e) {
  return 'nodeType' in e;
}
function z(e) {
  var t, n;
  return e
    ? De(e)
      ? e
      : Et(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
        ? t
        : window
    : window;
}
function At(e) {
  const { Document: t } = z(e);
  return e instanceof t;
}
function $e(e) {
  return De(e) ? !1 : e instanceof z(e).HTMLElement;
}
function sn(e) {
  return e instanceof z(e).SVGElement;
}
function Ce(e) {
  return e
    ? De(e)
      ? e.document
      : Et(e)
        ? At(e)
          ? e
          : $e(e) || sn(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
const U = st ? l.useLayoutEffect : l.useEffect;
function at(e) {
  const t = l.useRef(e);
  return (
    U(() => {
      t.current = e;
    }),
    l.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function er() {
  const e = l.useRef(null),
    t = l.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = l.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function je(e, t) {
  t === void 0 && (t = [e]);
  const n = l.useRef(e);
  return (
    U(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function Ye(e, t) {
  const n = l.useRef();
  return l.useMemo(() => {
    const r = e(n.current);
    return ((n.current = r), r);
  }, [...t]);
}
function et(e) {
  const t = at(e),
    n = l.useRef(null),
    r = l.useCallback((o) => {
      (o !== n.current && t?.(o, n.current), (n.current = o));
    }, []);
  return [n, r];
}
function tt(e) {
  const t = l.useRef();
  return (
    l.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let pt = {};
function He(e, t) {
  return l.useMemo(() => {
    if (t) return t;
    const n = pt[e] == null ? 0 : pt[e] + 1;
    return ((pt[e] = n), e + '-' + n);
  }, [e, t]);
}
function an(e) {
  return function (t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce(
      (i, s) => {
        const a = Object.entries(s);
        for (const [c, u] of a) {
          const d = i[c];
          d != null && (i[c] = d + e * u);
        }
        return i;
      },
      { ...t },
    );
  };
}
const Se = an(1),
  Fe = an(-1);
function tr(e) {
  return 'clientX' in e && 'clientY' in e;
}
function lt(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = z(e.target);
  return t && e instanceof t;
}
function nr(e) {
  if (!e) return !1;
  const { TouchEvent: t } = z(e.target);
  return t && e instanceof t;
}
function nt(e) {
  if (nr(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return tr(e) ? { x: e.clientX, y: e.clientY } : null;
}
const ge = Object.freeze({
    Translate: {
      toString(e) {
        if (!e) return;
        const { x: t, y: n } = e;
        return (
          'translate3d(' + (t ? Math.round(t) : 0) + 'px, ' + (n ? Math.round(n) : 0) + 'px, 0)'
        );
      },
    },
    Scale: {
      toString(e) {
        if (!e) return;
        const { scaleX: t, scaleY: n } = e;
        return 'scaleX(' + t + ') scaleY(' + n + ')';
      },
    },
    Transform: {
      toString(e) {
        if (e) return [ge.Translate.toString(e), ge.Scale.toString(e)].join(' ');
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = e;
        return t + ' ' + n + 'ms ' + r;
      },
    },
  }),
  Ht =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function rr(e) {
  return e.matches(Ht) ? e : e.querySelector(Ht);
}
const or = { display: 'none' };
function ir(e) {
  let { id: t, value: n } = e;
  return O.createElement('div', { id: t, style: or }, n);
}
function sr(e) {
  let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e;
  const o = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap',
  };
  return O.createElement(
    'div',
    { 'id': t, 'style': o, 'role': 'status', 'aria-live': r, 'aria-atomic': !0 },
    n,
  );
}
function ar() {
  const [e, t] = l.useState('');
  return {
    announce: l.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const ln = l.createContext(null);
function lr(e) {
  const t = l.useContext(ln);
  l.useEffect(() => {
    if (!t) throw new Error('useDndMonitor must be used within a children of <DndContext>');
    return t(e);
  }, [e, t]);
}
function cr() {
  const [e] = l.useState(() => new Set()),
    t = l.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    l.useCallback(
      (r) => {
        let { type: o, event: i } = r;
        e.forEach((s) => {
          var a;
          return (a = s[o]) == null ? void 0 : a.call(s, i);
        });
      },
      [e],
    ),
    t,
  ];
}
const ur = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  dr = {
    onDragStart(e) {
      let { active: t } = e;
      return 'Picked up draggable item ' + t.id + '.';
    },
    onDragOver(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' + t.id + ' was moved over droppable area ' + n.id + '.'
        : 'Draggable item ' + t.id + ' is no longer over a droppable area.';
    },
    onDragEnd(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
        : 'Draggable item ' + t.id + ' was dropped.';
    },
    onDragCancel(e) {
      let { active: t } = e;
      return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.';
    },
  };
function fr(e) {
  let {
    announcements: t = dr,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = ur,
  } = e;
  const { announce: i, announcement: s } = ar(),
    a = He('DndLiveRegion'),
    [c, u] = l.useState(!1);
  if (
    (l.useEffect(() => {
      u(!0);
    }, []),
    lr(
      l.useMemo(
        () => ({
          onDragStart(f) {
            let { active: g } = f;
            i(t.onDragStart({ active: g }));
          },
          onDragMove(f) {
            let { active: g, over: h } = f;
            t.onDragMove && i(t.onDragMove({ active: g, over: h }));
          },
          onDragOver(f) {
            let { active: g, over: h } = f;
            i(t.onDragOver({ active: g, over: h }));
          },
          onDragEnd(f) {
            let { active: g, over: h } = f;
            i(t.onDragEnd({ active: g, over: h }));
          },
          onDragCancel(f) {
            let { active: g, over: h } = f;
            i(t.onDragCancel({ active: g, over: h }));
          },
        }),
        [i, t],
      ),
    ),
    !c)
  )
    return null;
  const d = O.createElement(
    O.Fragment,
    null,
    O.createElement(ir, { id: r, value: o.draggable }),
    O.createElement(sr, { id: a, announcement: s }),
  );
  return n ? ke.createPortal(d, n) : d;
}
var T;
(function (e) {
  ((e.DragStart = 'dragStart'),
    (e.DragMove = 'dragMove'),
    (e.DragEnd = 'dragEnd'),
    (e.DragCancel = 'dragCancel'),
    (e.DragOver = 'dragOver'),
    (e.RegisterDroppable = 'registerDroppable'),
    (e.SetDroppableDisabled = 'setDroppableDisabled'),
    (e.UnregisterDroppable = 'unregisterDroppable'));
})(T || (T = {}));
function rt() {}
function Wt(e, t) {
  return l.useMemo(() => ({ sensor: e, options: t ?? {} }), [e, t]);
}
function gr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return l.useMemo(() => [...t].filter((r) => r != null), [...t]);
}
const G = Object.freeze({ x: 0, y: 0 });
function hr(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function vr(e, t) {
  const n = nt(e);
  if (!n) return '0 0';
  const r = { x: ((n.x - t.left) / t.width) * 100, y: ((n.y - t.top) / t.height) * 100 };
  return r.x + '% ' + r.y + '%';
}
function pr(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return n - r;
}
function br(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Vt(e) {
  let { left: t, top: n, height: r, width: o } = e;
  return [
    { x: t, y: n },
    { x: t + o, y: n },
    { x: t, y: n + r },
    { x: t + o, y: n + r },
  ];
}
function cn(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
const mr = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = Vt(t),
    i = [];
  for (const s of r) {
    const { id: a } = s,
      c = n.get(a);
    if (c) {
      const u = Vt(c),
        d = o.reduce((g, h, x) => g + hr(u[x], h), 0),
        f = Number((d / 4).toFixed(4));
      i.push({ id: a, data: { droppableContainer: s, value: f } });
    }
  }
  return i.sort(pr);
};
function yr(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    s = o - r,
    a = i - n;
  if (r < o && n < i) {
    const c = t.width * t.height,
      u = e.width * e.height,
      d = s * a,
      f = d / (c + u - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const wr = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: s } = i,
      a = n.get(s);
    if (a) {
      const c = yr(a, t);
      c > 0 && o.push({ id: s, data: { droppableContainer: i, value: c } });
    }
  }
  return o.sort(br);
};
function xr(e, t, n) {
  return { ...e, scaleX: t && n ? t.width / n.width : 1, scaleY: t && n ? t.height / n.height : 1 };
}
function un(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : G;
}
function Sr(e) {
  return function (n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return o.reduce(
      (s, a) => ({
        ...s,
        top: s.top + e * a.y,
        bottom: s.bottom + e * a.y,
        left: s.left + e * a.x,
        right: s.right + e * a.x,
      }),
      { ...n },
    );
  };
}
const Dr = Sr(1);
function dn(e) {
  if (e.startsWith('matrix3d(')) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith('matrix(')) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function Cr(e, t, n) {
  const r = dn(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: s, y: a } = r,
    c = e.left - s - (1 - o) * parseFloat(n),
    u = e.top - a - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
    d = o ? e.width / o : e.width,
    f = i ? e.height / i : e.height;
  return { width: d, height: f, top: u, right: c + d, bottom: u + f, left: c };
}
const Rr = { ignoreTransform: !1 };
function Re(e, t) {
  t === void 0 && (t = Rr);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: u, transformOrigin: d } = z(e).getComputedStyle(e);
    u && (n = Cr(n, u, d));
  }
  const { top: r, left: o, width: i, height: s, bottom: a, right: c } = n;
  return { top: r, left: o, width: i, height: s, bottom: a, right: c };
}
function Kt(e) {
  return Re(e, { ignoreTransform: !0 });
}
function Er(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function Ar(e, t) {
  return (t === void 0 && (t = z(e).getComputedStyle(e)), t.position === 'fixed');
}
function Ir(e, t) {
  t === void 0 && (t = z(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ['overflow', 'overflowX', 'overflowY'].some((o) => {
    const i = t[o];
    return typeof i == 'string' ? n.test(i) : !1;
  });
}
function ct(e, t) {
  const n = [];
  function r(o) {
    if ((t != null && n.length >= t) || !o) return n;
    if (At(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return (n.push(o.scrollingElement), n);
    if (!$e(o) || sn(o) || n.includes(o)) return n;
    const i = z(e).getComputedStyle(o);
    return (o !== e && Ir(o, i) && n.push(o), Ar(o, i) ? n : r(o.parentNode));
  }
  return e ? r(e) : n;
}
function fn(e) {
  const [t] = ct(e, 1);
  return t ?? null;
}
function bt(e) {
  return !st || !e
    ? null
    : De(e)
      ? e
      : Et(e)
        ? At(e) || e === Ce(e).scrollingElement
          ? window
          : $e(e)
            ? e
            : null
        : null;
}
function gn(e) {
  return De(e) ? e.scrollX : e.scrollLeft;
}
function hn(e) {
  return De(e) ? e.scrollY : e.scrollTop;
}
function St(e) {
  return { x: gn(e), y: hn(e) };
}
var L;
(function (e) {
  ((e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward'));
})(L || (L = {}));
function vn(e) {
  return !st || !e ? !1 : e === document.scrollingElement;
}
function pn(e) {
  const t = { x: 0, y: 0 },
    n = vn(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    o = e.scrollTop <= t.y,
    i = e.scrollLeft <= t.x,
    s = e.scrollTop >= r.y,
    a = e.scrollLeft >= r.x;
  return { isTop: o, isLeft: i, isBottom: s, isRight: a, maxScroll: r, minScroll: t };
}
const Mr = { x: 0.2, y: 0.2 };
function Or(e, t, n, r, o) {
  let { top: i, left: s, right: a, bottom: c } = n;
  (r === void 0 && (r = 10), o === void 0 && (o = Mr));
  const { isTop: u, isBottom: d, isLeft: f, isRight: g } = pn(e),
    h = { x: 0, y: 0 },
    x = { x: 0, y: 0 },
    v = { height: t.height * o.y, width: t.width * o.x };
  return (
    !u && i <= t.top + v.height
      ? ((h.y = L.Backward), (x.y = r * Math.abs((t.top + v.height - i) / v.height)))
      : !d &&
        c >= t.bottom - v.height &&
        ((h.y = L.Forward), (x.y = r * Math.abs((t.bottom - v.height - c) / v.height))),
    !g && a >= t.right - v.width
      ? ((h.x = L.Forward), (x.x = r * Math.abs((t.right - v.width - a) / v.width)))
      : !f &&
        s <= t.left + v.width &&
        ((h.x = L.Backward), (x.x = r * Math.abs((t.left + v.width - s) / v.width))),
    { direction: h, speed: x }
  );
}
function Nr(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: i, innerHeight: s } = window;
    return { top: 0, left: 0, right: i, bottom: s, width: i, height: s };
  }
  const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
  return { top: t, left: n, right: r, bottom: o, width: e.clientWidth, height: e.clientHeight };
}
function bn(e) {
  return e.reduce((t, n) => Se(t, St(n)), G);
}
function Tr(e) {
  return e.reduce((t, n) => t + gn(n), 0);
}
function Lr(e) {
  return e.reduce((t, n) => t + hn(n), 0);
}
function mn(e, t) {
  if ((t === void 0 && (t = Re), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  fn(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: 'center', inline: 'center' });
}
const kr = [
  ['x', ['left', 'right'], Tr],
  ['y', ['top', 'bottom'], Lr],
];
class It {
  constructor(t, n) {
    ((this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0));
    const r = ct(n),
      o = bn(r);
    ((this.rect = { ...t }), (this.width = t.width), (this.height = t.height));
    for (const [i, s, a] of kr)
      for (const c of s)
        Object.defineProperty(this, c, {
          get: () => {
            const u = a(r),
              d = o[i] - u;
            return this.rect[c] + d;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, 'rect', { enumerable: !1 });
  }
}
class Pe {
  constructor(t) {
    ((this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((n) => {
          var r;
          return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
        });
      }),
      (this.target = t));
  }
  add(t, n, r) {
    var o;
    ((o = this.target) == null || o.addEventListener(t, n, r), this.listeners.push([t, n, r]));
  }
}
function Pr(e) {
  const { EventTarget: t } = z(e);
  return e instanceof t ? e : Ce(e);
}
function mt(e, t) {
  const n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == 'number'
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : 'x' in t && 'y' in t
      ? n > t.x && r > t.y
      : 'x' in t
        ? n > t.x
        : 'y' in t
          ? r > t.y
          : !1;
}
var W;
(function (e) {
  ((e.Click = 'click'),
    (e.DragStart = 'dragstart'),
    (e.Keydown = 'keydown'),
    (e.ContextMenu = 'contextmenu'),
    (e.Resize = 'resize'),
    (e.SelectionChange = 'selectionchange'),
    (e.VisibilityChange = 'visibilitychange'));
})(W || (W = {}));
function Ut(e) {
  e.preventDefault();
}
function zr(e) {
  e.stopPropagation();
}
var D;
(function (e) {
  ((e.Space = 'Space'),
    (e.Down = 'ArrowDown'),
    (e.Right = 'ArrowRight'),
    (e.Left = 'ArrowLeft'),
    (e.Up = 'ArrowUp'),
    (e.Esc = 'Escape'),
    (e.Enter = 'Enter'),
    (e.Tab = 'Tab'));
})(D || (D = {}));
const yn = { start: [D.Space, D.Enter], cancel: [D.Esc], end: [D.Space, D.Enter, D.Tab] },
  Br = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case D.Right:
        return { ...n, x: n.x + 25 };
      case D.Left:
        return { ...n, x: n.x - 25 };
      case D.Down:
        return { ...n, y: n.y + 25 };
      case D.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class Mt {
  constructor(t) {
    ((this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t));
    const {
      event: { target: n },
    } = t;
    ((this.props = t),
      (this.listeners = new Pe(Ce(n))),
      (this.windowListeners = new Pe(z(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach());
  }
  attach() {
    (this.handleStart(),
      this.windowListeners.add(W.Resize, this.handleCancel),
      this.windowListeners.add(W.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(W.Keydown, this.handleKeyDown)));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    (r && mn(r), n(G));
  }
  handleKeyDown(t) {
    if (lt(t)) {
      const { active: n, context: r, options: o } = this.props,
        { keyboardCodes: i = yn, coordinateGetter: s = Br, scrollBehavior: a = 'smooth' } = o,
        { code: c } = t;
      if (i.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: u } = r.current,
        d = u ? { x: u.left, y: u.top } : G;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = s(t, { active: n, context: r.current, currentCoordinates: d });
      if (f) {
        const g = Fe(f, d),
          h = { x: 0, y: 0 },
          { scrollableAncestors: x } = r.current;
        for (const v of x) {
          const p = t.code,
            { isTop: m, isRight: y, isLeft: b, isBottom: C, maxScroll: R, minScroll: E } = pn(v),
            w = Nr(v),
            S = {
              x: Math.min(
                p === D.Right ? w.right - w.width / 2 : w.right,
                Math.max(p === D.Right ? w.left : w.left + w.width / 2, f.x),
              ),
              y: Math.min(
                p === D.Down ? w.bottom - w.height / 2 : w.bottom,
                Math.max(p === D.Down ? w.top : w.top + w.height / 2, f.y),
              ),
            },
            M = (p === D.Right && !y) || (p === D.Left && !b),
            N = (p === D.Down && !C) || (p === D.Up && !m);
          if (M && S.x !== f.x) {
            const I = v.scrollLeft + g.x,
              V = (p === D.Right && I <= R.x) || (p === D.Left && I >= E.x);
            if (V && !g.y) {
              v.scrollTo({ left: I, behavior: a });
              return;
            }
            (V
              ? (h.x = v.scrollLeft - I)
              : (h.x = p === D.Right ? v.scrollLeft - R.x : v.scrollLeft - E.x),
              h.x && v.scrollBy({ left: -h.x, behavior: a }));
            break;
          } else if (N && S.y !== f.y) {
            const I = v.scrollTop + g.y,
              V = (p === D.Down && I <= R.y) || (p === D.Up && I >= E.y);
            if (V && !g.x) {
              v.scrollTo({ top: I, behavior: a });
              return;
            }
            (V
              ? (h.y = v.scrollTop - I)
              : (h.y = p === D.Down ? v.scrollTop - R.y : v.scrollTop - E.y),
              h.y && v.scrollBy({ top: -h.y, behavior: a }));
            break;
          }
        }
        this.handleMove(t, Se(Fe(f, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const { onMove: r } = this.props;
    (t.preventDefault(), r(n));
  }
  handleEnd(t) {
    const { onEnd: n } = this.props;
    (t.preventDefault(), this.detach(), n());
  }
  handleCancel(t) {
    const { onCancel: n } = this.props;
    (t.preventDefault(), this.detach(), n());
  }
  detach() {
    (this.listeners.removeAll(), this.windowListeners.removeAll());
  }
}
Mt.activators = [
  {
    eventName: 'onKeyDown',
    handler: (e, t, n) => {
      let { keyboardCodes: r = yn, onActivation: o } = t,
        { active: i } = n;
      const { code: s } = e.nativeEvent;
      if (r.start.includes(s)) {
        const a = i.activatorNode.current;
        return a && e.target !== a ? !1 : (e.preventDefault(), o?.({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function Gt(e) {
  return !!(e && 'distance' in e);
}
function qt(e) {
  return !!(e && 'delay' in e);
}
class Ot {
  constructor(t, n, r) {
    var o;
    (r === void 0 && (r = Pr(t.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t),
      (this.events = n));
    const { event: i } = t,
      { target: s } = i;
    ((this.props = t),
      (this.events = n),
      (this.document = Ce(s)),
      (this.documentListeners = new Pe(this.document)),
      (this.listeners = new Pe(r)),
      (this.windowListeners = new Pe(z(s))),
      (this.initialCoordinates = (o = nt(i)) != null ? o : G),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach());
  }
  attach() {
    const {
      events: t,
      props: {
        options: { activationConstraint: n, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(t.end.name, this.handleEnd),
      t.cancel && this.listeners.add(t.cancel.name, this.handleCancel),
      this.windowListeners.add(W.Resize, this.handleCancel),
      this.windowListeners.add(W.DragStart, Ut),
      this.windowListeners.add(W.VisibilityChange, this.handleCancel),
      this.windowListeners.add(W.ContextMenu, Ut),
      this.documentListeners.add(W.Keydown, this.handleKeydown),
      n)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (qt(n)) {
        ((this.timeoutId = setTimeout(this.handleStart, n.delay)), this.handlePending(n));
        return;
      }
      if (Gt(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    (this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null && (clearTimeout(this.timeoutId), (this.timeoutId = null)));
  }
  handlePending(t, n) {
    const { active: r, onPending: o } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const { initialCoordinates: t } = this,
      { onStart: n } = this.props;
    t &&
      ((this.activated = !0),
      this.documentListeners.add(W.Click, zr, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(W.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: o, props: i } = this,
      {
        onMove: s,
        options: { activationConstraint: a },
      } = i;
    if (!o) return;
    const c = (n = nt(t)) != null ? n : G,
      u = Fe(o, c);
    if (!r && a) {
      if (Gt(a)) {
        if (a.tolerance != null && mt(u, a.tolerance)) return this.handleCancel();
        if (mt(u, a.distance)) return this.handleStart();
      }
      if (qt(a) && mt(u, a.tolerance)) return this.handleCancel();
      this.handlePending(a, u);
      return;
    }
    (t.cancelable && t.preventDefault(), s(c));
  }
  handleEnd() {
    const { onAbort: t, onEnd: n } = this.props;
    (this.detach(), this.activated || t(this.props.active), n());
  }
  handleCancel() {
    const { onAbort: t, onCancel: n } = this.props;
    (this.detach(), this.activated || t(this.props.active), n());
  }
  handleKeydown(t) {
    t.code === D.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const jr = {
  cancel: { name: 'pointercancel' },
  move: { name: 'pointermove' },
  end: { name: 'pointerup' },
};
class Nt extends Ot {
  constructor(t) {
    const { event: n } = t,
      r = Ce(n.target);
    super(t, jr, r);
  }
}
Nt.activators = [
  {
    eventName: 'onPointerDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
    },
  },
];
const Fr = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
var Dt;
(function (e) {
  e[(e.RightClick = 2)] = 'RightClick';
})(Dt || (Dt = {}));
class Xr extends Ot {
  constructor(t) {
    super(t, Fr, Ce(t.event.target));
  }
}
Xr.activators = [
  {
    eventName: 'onMouseDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === Dt.RightClick ? !1 : (r?.({ event: n }), !0);
    },
  },
];
const yt = {
  cancel: { name: 'touchcancel' },
  move: { name: 'touchmove' },
  end: { name: 'touchend' },
};
class $r extends Ot {
  constructor(t) {
    super(t, yt);
  }
  static setup() {
    return (
      window.addEventListener(yt.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(yt.move.name, t);
      }
    );
    function t() {}
  }
}
$r.activators = [
  {
    eventName: 'onTouchStart',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: o } = n;
      return o.length > 1 ? !1 : (r?.({ event: n }), !0);
    },
  },
];
var ze;
(function (e) {
  ((e[(e.Pointer = 0)] = 'Pointer'), (e[(e.DraggableRect = 1)] = 'DraggableRect'));
})(ze || (ze = {}));
var ot;
(function (e) {
  ((e[(e.TreeOrder = 0)] = 'TreeOrder'), (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder'));
})(ot || (ot = {}));
function Yr(e) {
  let {
    acceleration: t,
    activator: n = ze.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = ot.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: u,
    scrollableAncestorRects: d,
    delta: f,
    threshold: g,
  } = e;
  const h = Wr({ delta: f, disabled: !i }),
    [x, v] = er(),
    p = l.useRef({ x: 0, y: 0 }),
    m = l.useRef({ x: 0, y: 0 }),
    y = l.useMemo(() => {
      switch (n) {
        case ze.Pointer:
          return c ? { top: c.y, bottom: c.y, left: c.x, right: c.x } : null;
        case ze.DraggableRect:
          return o;
      }
    }, [n, o, c]),
    b = l.useRef(null),
    C = l.useCallback(() => {
      const E = b.current;
      if (!E) return;
      const w = p.current.x * m.current.x,
        S = p.current.y * m.current.y;
      E.scrollBy(w, S);
    }, []),
    R = l.useMemo(() => (a === ot.TreeOrder ? [...u].reverse() : u), [a, u]);
  l.useEffect(() => {
    if (!i || !u.length || !y) {
      v();
      return;
    }
    for (const E of R) {
      if (r?.(E) === !1) continue;
      const w = u.indexOf(E),
        S = d[w];
      if (!S) continue;
      const { direction: M, speed: N } = Or(E, S, y, t, g);
      for (const I of ['x', 'y']) h[I][M[I]] || ((N[I] = 0), (M[I] = 0));
      if (N.x > 0 || N.y > 0) {
        (v(), (b.current = E), x(C, s), (p.current = N), (m.current = M));
        return;
      }
    }
    ((p.current = { x: 0, y: 0 }), (m.current = { x: 0, y: 0 }), v());
  }, [t, C, r, v, i, s, JSON.stringify(y), JSON.stringify(h), x, u, R, d, JSON.stringify(g)]);
}
const Hr = { x: { [L.Backward]: !1, [L.Forward]: !1 }, y: { [L.Backward]: !1, [L.Forward]: !1 } };
function Wr(e) {
  let { delta: t, disabled: n } = e;
  const r = tt(t);
  return Ye(
    (o) => {
      if (n || !r || !o) return Hr;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [L.Backward]: o.x[L.Backward] || i.x === -1,
          [L.Forward]: o.x[L.Forward] || i.x === 1,
        },
        y: {
          [L.Backward]: o.y[L.Backward] || i.y === -1,
          [L.Forward]: o.y[L.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function Vr(e, t) {
  const n = t != null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return Ye(
    (o) => {
      var i;
      return t == null ? null : (i = r ?? o) != null ? i : null;
    },
    [r, t],
  );
}
function Kr(e, t) {
  return l.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: o } = r,
          i = o.activators.map((s) => ({ eventName: s.eventName, handler: t(s.handler, r) }));
        return [...n, ...i];
      }, []),
    [e, t],
  );
}
var Xe;
(function (e) {
  ((e[(e.Always = 0)] = 'Always'),
    (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
    (e[(e.WhileDragging = 2)] = 'WhileDragging'));
})(Xe || (Xe = {}));
var Ct;
(function (e) {
  e.Optimized = 'optimized';
})(Ct || (Ct = {}));
const Jt = new Map();
function Ur(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, s] = l.useState(null),
    { frequency: a, measure: c, strategy: u } = o,
    d = l.useRef(e),
    f = p(),
    g = je(f),
    h = l.useCallback(
      function (m) {
        (m === void 0 && (m = []),
          !g.current && s((y) => (y === null ? m : y.concat(m.filter((b) => !y.includes(b))))));
      },
      [g],
    ),
    x = l.useRef(null),
    v = Ye(
      (m) => {
        if (f && !n) return Jt;
        if (!m || m === Jt || d.current !== e || i != null) {
          const y = new Map();
          for (let b of e) {
            if (!b) continue;
            if (i && i.length > 0 && !i.includes(b.id) && b.rect.current) {
              y.set(b.id, b.rect.current);
              continue;
            }
            const C = b.node.current,
              R = C ? new It(c(C), C) : null;
            ((b.rect.current = R), R && y.set(b.id, R));
          }
          return y;
        }
        return m;
      },
      [e, i, n, f, c],
    );
  return (
    l.useEffect(() => {
      d.current = e;
    }, [e]),
    l.useEffect(() => {
      f || h();
    }, [n, f]),
    l.useEffect(() => {
      i && i.length > 0 && s(null);
    }, [JSON.stringify(i)]),
    l.useEffect(() => {
      f ||
        typeof a != 'number' ||
        x.current !== null ||
        (x.current = setTimeout(() => {
          (h(), (x.current = null));
        }, a));
    }, [a, f, h, ...r]),
    { droppableRects: v, measureDroppableContainers: h, measuringScheduled: i != null }
  );
  function p() {
    switch (u) {
      case Xe.Always:
        return !1;
      case Xe.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Tt(e, t) {
  return Ye((n) => (e ? n || (typeof t == 'function' ? t(e) : e) : null), [t, e]);
}
function Gr(e, t) {
  return Tt(e, t);
}
function qr(e) {
  let { callback: t, disabled: n } = e;
  const r = at(t),
    o = l.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.MutationObserver > 'u') return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return (l.useEffect(() => () => o?.disconnect(), [o]), o);
}
function ut(e) {
  let { callback: t, disabled: n } = e;
  const r = at(t),
    o = l.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.ResizeObserver > 'u') return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return (l.useEffect(() => () => o?.disconnect(), [o]), o);
}
function Jr(e) {
  return new It(Re(e), e);
}
function _t(e, t, n) {
  t === void 0 && (t = Jr);
  const [r, o] = l.useState(null);
  function i() {
    o((c) => {
      if (!e) return null;
      if (e.isConnected === !1) {
        var u;
        return (u = c ?? n) != null ? u : null;
      }
      const d = t(e);
      return JSON.stringify(c) === JSON.stringify(d) ? c : d;
    });
  }
  const s = qr({
      callback(c) {
        if (e)
          for (const u of c) {
            const { type: d, target: f } = u;
            if (d === 'childList' && f instanceof HTMLElement && f.contains(e)) {
              i();
              break;
            }
          }
      },
    }),
    a = ut({ callback: i });
  return (
    U(() => {
      (i(),
        e
          ? (a?.observe(e), s?.observe(document.body, { childList: !0, subtree: !0 }))
          : (a?.disconnect(), s?.disconnect()));
    }, [e]),
    r
  );
}
function _r(e) {
  const t = Tt(e);
  return un(e, t);
}
const Qt = [];
function Qr(e) {
  const t = l.useRef(e),
    n = Ye(
      (r) =>
        e
          ? r && r !== Qt && e && t.current && e.parentNode === t.current.parentNode
            ? r
            : ct(e)
          : Qt,
      [e],
    );
  return (
    l.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function Zr(e) {
  const [t, n] = l.useState(null),
    r = l.useRef(e),
    o = l.useCallback((i) => {
      const s = bt(i.target);
      s && n((a) => (a ? (a.set(s, St(s)), new Map(a)) : null));
    }, []);
  return (
    l.useEffect(() => {
      const i = r.current;
      if (e !== i) {
        s(i);
        const a = e
          .map((c) => {
            const u = bt(c);
            return u ? (u.addEventListener('scroll', o, { passive: !0 }), [u, St(u)]) : null;
          })
          .filter((c) => c != null);
        (n(a.length ? new Map(a) : null), (r.current = e));
      }
      return () => {
        (s(e), s(i));
      };
      function s(a) {
        a.forEach((c) => {
          const u = bt(c);
          u?.removeEventListener('scroll', o);
        });
      }
    }, [o, e]),
    l.useMemo(
      () => (e.length ? (t ? Array.from(t.values()).reduce((i, s) => Se(i, s), G) : bn(e)) : G),
      [e, t],
    )
  );
}
function Zt(e, t) {
  t === void 0 && (t = []);
  const n = l.useRef(null);
  return (
    l.useEffect(() => {
      n.current = null;
    }, t),
    l.useEffect(() => {
      const r = e !== G;
      (r && !n.current && (n.current = e), !r && n.current && (n.current = null));
    }, [e]),
    n.current ? Fe(e, n.current) : G
  );
}
function eo(e) {
  l.useEffect(
    () => {
      if (!st) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n?.();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    }),
  );
}
function to(e, t) {
  return l.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: o, handler: i } = r;
        return (
          (n[o] = (s) => {
            i(s, t);
          }),
          n
        );
      }, {}),
    [e, t],
  );
}
function wn(e) {
  return l.useMemo(() => (e ? Er(e) : null), [e]);
}
const en = [];
function no(e, t) {
  t === void 0 && (t = Re);
  const [n] = e,
    r = wn(n ? z(n) : null),
    [o, i] = l.useState(en);
  function s() {
    i(() => (e.length ? e.map((c) => (vn(c) ? r : new It(t(c), c))) : en));
  }
  const a = ut({ callback: s });
  return (
    U(() => {
      (a?.disconnect(), s(), e.forEach((c) => a?.observe(c)));
    }, [e]),
    o
  );
}
function xn(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return $e(t) ? t : e;
}
function ro(e) {
  let { measure: t } = e;
  const [n, r] = l.useState(null),
    o = l.useCallback(
      (u) => {
        for (const { target: d } of u)
          if ($e(d)) {
            r((f) => {
              const g = t(d);
              return f ? { ...f, width: g.width, height: g.height } : g;
            });
            break;
          }
      },
      [t],
    ),
    i = ut({ callback: o }),
    s = l.useCallback(
      (u) => {
        const d = xn(u);
        (i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null));
      },
      [t, i],
    ),
    [a, c] = et(s);
  return l.useMemo(() => ({ nodeRef: a, rect: n, setRef: c }), [n, a, c]);
}
const oo = [
    { sensor: Nt, options: {} },
    { sensor: Mt, options: {} },
  ],
  io = { current: {} },
  Ze = {
    draggable: { measure: Kt },
    droppable: { measure: Kt, strategy: Xe.WhileDragging, frequency: Ct.Optimized },
    dragOverlay: { measure: Re },
  };
class Be extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let { disabled: n } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const so = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Be(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: rt },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: Ze,
    measureDroppableContainers: rt,
    windowRect: null,
    measuringScheduled: !1,
  },
  Sn = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: '' },
    dispatch: rt,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: rt,
  },
  We = l.createContext(Sn),
  Dn = l.createContext(so);
function ao() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Be() },
  };
}
function lo(e, t) {
  switch (t.type) {
    case T.DragStart:
      return {
        ...e,
        draggable: { ...e.draggable, initialCoordinates: t.initialCoordinates, active: t.active },
      };
    case T.DragMove:
      return e.draggable.active == null
        ? e
        : {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          };
    case T.DragEnd:
    case T.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case T.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Be(e.droppable.containers);
      return (o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } });
    }
    case T.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const s = new Be(e.droppable.containers);
      return (
        s.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: s } }
      );
    }
    case T.UnregisterDroppable: {
      const { id: n, key: r } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Be(e.droppable.containers);
      return (i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } });
    }
    default:
      return e;
  }
}
function co(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = l.useContext(We),
    i = tt(r),
    s = tt(n?.id);
  return (
    l.useEffect(() => {
      if (!t && !r && i && s != null) {
        if (!lt(i) || document.activeElement === i.target) return;
        const a = o.get(s);
        if (!a) return;
        const { activatorNode: c, node: u } = a;
        if (!c.current && !u.current) return;
        requestAnimationFrame(() => {
          for (const d of [c.current, u.current]) {
            if (!d) continue;
            const f = rr(d);
            if (f) {
              f.focus();
              break;
            }
          }
        });
      }
    }, [r, t, o, s, i]),
    null
  );
}
function Cn(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length ? e.reduce((o, i) => i({ transform: o, ...r }), n) : n;
}
function uo(e) {
  return l.useMemo(
    () => ({
      draggable: { ...Ze.draggable, ...e?.draggable },
      droppable: { ...Ze.droppable, ...e?.droppable },
      dragOverlay: { ...Ze.dragOverlay, ...e?.dragOverlay },
    }),
    [e?.draggable, e?.droppable, e?.dragOverlay],
  );
}
function fo(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = l.useRef(!1),
    { x: s, y: a } = typeof o == 'boolean' ? { x: o, y: o } : o;
  U(() => {
    if ((!s && !a) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const u = t?.node.current;
    if (!u || u.isConnected === !1) return;
    const d = n(u),
      f = un(d, r);
    if (
      (s || (f.x = 0), a || (f.y = 0), (i.current = !0), Math.abs(f.x) > 0 || Math.abs(f.y) > 0)
    ) {
      const g = fn(u);
      g && g.scrollBy({ top: f.y, left: f.x });
    }
  }, [t, s, a, r, n]);
}
const dt = l.createContext({ ...G, scaleX: 1, scaleY: 1 });
var fe;
(function (e) {
  ((e[(e.Uninitialized = 0)] = 'Uninitialized'),
    (e[(e.Initializing = 1)] = 'Initializing'),
    (e[(e.Initialized = 2)] = 'Initialized'));
})(fe || (fe = {}));
const go = l.memo(function (t) {
    var n, r, o, i;
    let {
      id: s,
      accessibility: a,
      autoScroll: c = !0,
      children: u,
      sensors: d = oo,
      collisionDetection: f = wr,
      measuring: g,
      modifiers: h,
      ...x
    } = t;
    const v = l.useReducer(lo, void 0, ao),
      [p, m] = v,
      [y, b] = cr(),
      [C, R] = l.useState(fe.Uninitialized),
      E = C === fe.Initialized,
      {
        draggable: { active: w, nodes: S, translate: M },
        droppable: { containers: N },
      } = p,
      I = w != null ? S.get(w) : null,
      V = l.useRef({ initial: null, translated: null }),
      K = l.useMemo(() => {
        var P;
        return w != null ? { id: w, data: (P = I?.data) != null ? P : io, rect: V } : null;
      }, [w, I]),
      q = l.useRef(null),
      [Ee, Ve] = l.useState(null),
      [j, Ke] = l.useState(null),
      Z = je(x, Object.values(x)),
      Ae = He('DndDescribedBy', s),
      Ue = l.useMemo(() => N.getEnabled(), [N]),
      B = uo(g),
      {
        droppableRects: ee,
        measureDroppableContainers: he,
        measuringScheduled: Ie,
      } = Ur(Ue, { dragging: E, dependencies: [M.x, M.y], config: B.droppable }),
      Y = Vr(S, w),
      Ge = l.useMemo(() => (j ? nt(j) : null), [j]),
      se = Wn(),
      te = Gr(Y, B.draggable.measure);
    fo({
      activeNode: w != null ? S.get(w) : null,
      config: se.layoutShiftCompensation,
      initialRect: te,
      measure: B.draggable.measure,
    });
    const A = _t(Y, B.draggable.measure, te),
      Me = _t(Y ? Y.parentElement : null),
      J = l.useRef({
        activatorEvent: null,
        active: null,
        activeNode: Y,
        collisionRect: null,
        collisions: null,
        droppableRects: ee,
        draggableNodes: S,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: N,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      pe = N.getNodeFor((n = J.current.over) == null ? void 0 : n.id),
      ne = ro({ measure: B.dragOverlay.measure }),
      be = (r = ne.nodeRef.current) != null ? r : Y,
      me = E ? ((o = ne.rect) != null ? o : A) : null,
      Pt = !!(ne.nodeRef.current && ne.rect),
      zt = _r(Pt ? null : A),
      ft = wn(be ? z(be) : null),
      ae = Qr(E ? (pe ?? Y) : null),
      qe = no(ae),
      Je = Cn(h, {
        transform: { x: M.x - zt.x, y: M.y - zt.y, scaleX: 1, scaleY: 1 },
        activatorEvent: j,
        active: K,
        activeNodeRect: A,
        containerNodeRect: Me,
        draggingNodeRect: me,
        over: J.current.over,
        overlayNodeRect: ne.rect,
        scrollableAncestors: ae,
        scrollableAncestorRects: qe,
        windowRect: ft,
      }),
      Bt = Ge ? Se(Ge, M) : null,
      jt = Zr(ae),
      Bn = Zt(jt),
      jn = Zt(jt, [A]),
      ye = Se(Je, Bn),
      we = me ? Dr(me, Je) : null,
      Oe =
        K && we
          ? f({
              active: K,
              collisionRect: we,
              droppableRects: ee,
              droppableContainers: Ue,
              pointerCoordinates: Bt,
            })
          : null,
      Ft = cn(Oe, 'id'),
      [le, Xt] = l.useState(null),
      Fn = Pt ? Je : Se(Je, jn),
      Xn = xr(Fn, (i = le?.rect) != null ? i : null, A),
      gt = l.useRef(null),
      $t = l.useCallback(
        (P, F) => {
          let { sensor: X, options: ce } = F;
          if (q.current == null) return;
          const H = S.get(q.current);
          if (!H) return;
          const $ = P.nativeEvent,
            _ = new X({
              active: q.current,
              activeNode: H,
              event: $,
              options: ce,
              context: J,
              onAbort(k) {
                if (!S.get(k)) return;
                const { onDragAbort: Q } = Z.current,
                  re = { id: k };
                (Q?.(re), y({ type: 'onDragAbort', event: re }));
              },
              onPending(k, ue, Q, re) {
                if (!S.get(k)) return;
                const { onDragPending: Te } = Z.current,
                  de = { id: k, constraint: ue, initialCoordinates: Q, offset: re };
                (Te?.(de), y({ type: 'onDragPending', event: de }));
              },
              onStart(k) {
                const ue = q.current;
                if (ue == null) return;
                const Q = S.get(ue);
                if (!Q) return;
                const { onDragStart: re } = Z.current,
                  Ne = { activatorEvent: $, active: { id: ue, data: Q.data, rect: V } };
                ke.unstable_batchedUpdates(() => {
                  (re?.(Ne),
                    R(fe.Initializing),
                    m({ type: T.DragStart, initialCoordinates: k, active: ue }),
                    y({ type: 'onDragStart', event: Ne }),
                    Ve(gt.current),
                    Ke($));
                });
              },
              onMove(k) {
                m({ type: T.DragMove, coordinates: k });
              },
              onEnd: xe(T.DragEnd),
              onCancel: xe(T.DragCancel),
            });
          gt.current = _;
          function xe(k) {
            return async function () {
              const {
                active: Q,
                collisions: re,
                over: Ne,
                scrollAdjustedTranslate: Te,
              } = J.current;
              let de = null;
              if (Q && Te) {
                const { cancelDrop: Le } = Z.current;
                ((de = { activatorEvent: $, active: Q, collisions: re, delta: Te, over: Ne }),
                  k === T.DragEnd &&
                    typeof Le == 'function' &&
                    (await Promise.resolve(Le(de))) &&
                    (k = T.DragCancel));
              }
              ((q.current = null),
                ke.unstable_batchedUpdates(() => {
                  (m({ type: k }),
                    R(fe.Uninitialized),
                    Xt(null),
                    Ve(null),
                    Ke(null),
                    (gt.current = null));
                  const Le = k === T.DragEnd ? 'onDragEnd' : 'onDragCancel';
                  if (de) {
                    const ht = Z.current[Le];
                    (ht?.(de), y({ type: Le, event: de }));
                  }
                }));
            };
          }
        },
        [S],
      ),
      $n = l.useCallback(
        (P, F) => (X, ce) => {
          const H = X.nativeEvent,
            $ = S.get(ce);
          if (q.current !== null || !$ || H.dndKit || H.defaultPrevented) return;
          const _ = { active: $ };
          P(X, F.options, _) === !0 &&
            ((H.dndKit = { capturedBy: F.sensor }), (q.current = ce), $t(X, F));
        },
        [S, $t],
      ),
      Yt = Kr(d, $n);
    (eo(d),
      U(() => {
        A && C === fe.Initializing && R(fe.Initialized);
      }, [A, C]),
      l.useEffect(() => {
        const { onDragMove: P } = Z.current,
          { active: F, activatorEvent: X, collisions: ce, over: H } = J.current;
        if (!F || !X) return;
        const $ = {
          active: F,
          activatorEvent: X,
          collisions: ce,
          delta: { x: ye.x, y: ye.y },
          over: H,
        };
        ke.unstable_batchedUpdates(() => {
          (P?.($), y({ type: 'onDragMove', event: $ }));
        });
      }, [ye.x, ye.y]),
      l.useEffect(() => {
        const {
          active: P,
          activatorEvent: F,
          collisions: X,
          droppableContainers: ce,
          scrollAdjustedTranslate: H,
        } = J.current;
        if (!P || q.current == null || !F || !H) return;
        const { onDragOver: $ } = Z.current,
          _ = ce.get(Ft),
          xe =
            _ && _.rect.current
              ? { id: _.id, rect: _.rect.current, data: _.data, disabled: _.disabled }
              : null,
          k = { active: P, activatorEvent: F, collisions: X, delta: { x: H.x, y: H.y }, over: xe };
        ke.unstable_batchedUpdates(() => {
          (Xt(xe), $?.(k), y({ type: 'onDragOver', event: k }));
        });
      }, [Ft]),
      U(() => {
        ((J.current = {
          activatorEvent: j,
          active: K,
          activeNode: Y,
          collisionRect: we,
          collisions: Oe,
          droppableRects: ee,
          draggableNodes: S,
          draggingNode: be,
          draggingNodeRect: me,
          droppableContainers: N,
          over: le,
          scrollableAncestors: ae,
          scrollAdjustedTranslate: ye,
        }),
          (V.current = { initial: me, translated: we }));
      }, [K, Y, Oe, we, S, be, me, ee, N, le, ae, ye]),
      Yr({
        ...se,
        delta: M,
        draggingRect: we,
        pointerCoordinates: Bt,
        scrollableAncestors: ae,
        scrollableAncestorRects: qe,
      }));
    const Yn = l.useMemo(
        () => ({
          active: K,
          activeNode: Y,
          activeNodeRect: A,
          activatorEvent: j,
          collisions: Oe,
          containerNodeRect: Me,
          dragOverlay: ne,
          draggableNodes: S,
          droppableContainers: N,
          droppableRects: ee,
          over: le,
          measureDroppableContainers: he,
          scrollableAncestors: ae,
          scrollableAncestorRects: qe,
          measuringConfiguration: B,
          measuringScheduled: Ie,
          windowRect: ft,
        }),
        [K, Y, A, j, Oe, Me, ne, S, N, ee, le, he, ae, qe, B, Ie, ft],
      ),
      Hn = l.useMemo(
        () => ({
          activatorEvent: j,
          activators: Yt,
          active: K,
          activeNodeRect: A,
          ariaDescribedById: { draggable: Ae },
          dispatch: m,
          draggableNodes: S,
          over: le,
          measureDroppableContainers: he,
        }),
        [j, Yt, K, A, m, Ae, S, le, he],
      );
    return O.createElement(
      ln.Provider,
      { value: b },
      O.createElement(
        We.Provider,
        { value: Hn },
        O.createElement(Dn.Provider, { value: Yn }, O.createElement(dt.Provider, { value: Xn }, u)),
        O.createElement(co, { disabled: a?.restoreFocus === !1 }),
      ),
      O.createElement(fr, { ...a, hiddenTextDescribedById: Ae }),
    );
    function Wn() {
      const P = Ee?.autoScrollEnabled === !1,
        F = typeof c == 'object' ? c.enabled === !1 : c === !1,
        X = E && !P && !F;
      return typeof c == 'object' ? { ...c, enabled: X } : { enabled: X };
    }
  }),
  ho = l.createContext(null),
  tn = 'button',
  vo = 'Draggable';
function po(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = He(vo),
    {
      activators: s,
      activatorEvent: a,
      active: c,
      activeNodeRect: u,
      ariaDescribedById: d,
      draggableNodes: f,
      over: g,
    } = l.useContext(We),
    { role: h = tn, roleDescription: x = 'draggable', tabIndex: v = 0 } = o ?? {},
    p = c?.id === t,
    m = l.useContext(p ? dt : ho),
    [y, b] = et(),
    [C, R] = et(),
    E = to(s, t),
    w = je(n);
  U(
    () => (
      f.set(t, { id: t, key: i, node: y, activatorNode: C, data: w }),
      () => {
        const M = f.get(t);
        M && M.key === i && f.delete(t);
      }
    ),
    [f, t],
  );
  const S = l.useMemo(
    () => ({
      'role': h,
      'tabIndex': v,
      'aria-disabled': r,
      'aria-pressed': p && h === tn ? !0 : void 0,
      'aria-roledescription': x,
      'aria-describedby': d.draggable,
    }),
    [r, h, v, p, x, d.draggable],
  );
  return {
    active: c,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: S,
    isDragging: p,
    listeners: r ? void 0 : E,
    node: y,
    over: g,
    setNodeRef: b,
    setActivatorNodeRef: R,
    transform: m,
  };
}
function Rn() {
  return l.useContext(Dn);
}
const bo = 'Droppable',
  mo = { timeout: 25 };
function yo(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = He(bo),
    { active: s, dispatch: a, over: c, measureDroppableContainers: u } = l.useContext(We),
    d = l.useRef({ disabled: n }),
    f = l.useRef(!1),
    g = l.useRef(null),
    h = l.useRef(null),
    { disabled: x, updateMeasurementsFor: v, timeout: p } = { ...mo, ...o },
    m = je(v ?? r),
    y = l.useCallback(() => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      (h.current != null && clearTimeout(h.current),
        (h.current = setTimeout(() => {
          (u(Array.isArray(m.current) ? m.current : [m.current]), (h.current = null));
        }, p)));
    }, [p]),
    b = ut({ callback: y, disabled: x || !s }),
    C = l.useCallback(
      (S, M) => {
        b && (M && (b.unobserve(M), (f.current = !1)), S && b.observe(S));
      },
      [b],
    ),
    [R, E] = et(C),
    w = je(t);
  return (
    l.useEffect(() => {
      !b || !R.current || (b.disconnect(), (f.current = !1), b.observe(R.current));
    }, [R, b]),
    l.useEffect(
      () => (
        a({
          type: T.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: R, rect: g, data: w },
        }),
        () => a({ type: T.UnregisterDroppable, key: i, id: r })
      ),
      [r],
    ),
    l.useEffect(() => {
      n !== d.current.disabled &&
        (a({ type: T.SetDroppableDisabled, id: r, key: i, disabled: n }), (d.current.disabled = n));
    }, [r, i, n, a]),
    { active: s, rect: g, isOver: c?.id === r, node: R, over: c, setNodeRef: E }
  );
}
function wo(e) {
  let { animation: t, children: n } = e;
  const [r, o] = l.useState(null),
    [i, s] = l.useState(null),
    a = tt(n);
  return (
    !n && !r && a && o(a),
    U(() => {
      if (!i) return;
      const c = r?.key,
        u = r?.props.id;
      if (c == null || u == null) {
        o(null);
        return;
      }
      Promise.resolve(t(u, i)).then(() => {
        o(null);
      });
    }, [t, r, i]),
    O.createElement(O.Fragment, null, n, r ? l.cloneElement(r, { ref: s }) : null)
  );
}
const xo = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
function So(e) {
  let { children: t } = e;
  return O.createElement(
    We.Provider,
    { value: Sn },
    O.createElement(dt.Provider, { value: xo }, t),
  );
}
const Do = { position: 'fixed', touchAction: 'none' },
  Co = (e) => (lt(e) ? 'transform 250ms ease' : void 0),
  Ro = l.forwardRef((e, t) => {
    let {
      as: n,
      activatorEvent: r,
      adjustScale: o,
      children: i,
      className: s,
      rect: a,
      style: c,
      transform: u,
      transition: d = Co,
    } = e;
    if (!a) return null;
    const f = o ? u : { ...u, scaleX: 1, scaleY: 1 },
      g = {
        ...Do,
        width: a.width,
        height: a.height,
        top: a.top,
        left: a.left,
        transform: ge.Transform.toString(f),
        transformOrigin: o && r ? vr(r, a) : void 0,
        transition: typeof d == 'function' ? d(r) : d,
        ...c,
      };
    return O.createElement(n, { className: s, style: g, ref: t }, i);
  }),
  En = (e) => (t) => {
    let { active: n, dragOverlay: r } = t;
    const o = {},
      { styles: i, className: s } = e;
    if (i != null && i.active)
      for (const [a, c] of Object.entries(i.active))
        c !== void 0 && ((o[a] = n.node.style.getPropertyValue(a)), n.node.style.setProperty(a, c));
    if (i != null && i.dragOverlay)
      for (const [a, c] of Object.entries(i.dragOverlay))
        c !== void 0 && r.node.style.setProperty(a, c);
    return (
      s != null && s.active && n.node.classList.add(s.active),
      s != null && s.dragOverlay && r.node.classList.add(s.dragOverlay),
      function () {
        for (const [c, u] of Object.entries(o)) n.node.style.setProperty(c, u);
        s != null && s.active && n.node.classList.remove(s.active);
      }
    );
  },
  Eo = (e) => {
    let {
      transform: { initial: t, final: n },
    } = e;
    return [{ transform: ge.Transform.toString(t) }, { transform: ge.Transform.toString(n) }];
  },
  Ao = {
    duration: 250,
    easing: 'ease',
    keyframes: Eo,
    sideEffects: En({ styles: { active: { opacity: '0' } } }),
  };
function Io(e) {
  let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: o } = e;
  return at((i, s) => {
    if (t === null) return;
    const a = n.get(i);
    if (!a) return;
    const c = a.node.current;
    if (!c) return;
    const u = xn(s);
    if (!u) return;
    const { transform: d } = z(s).getComputedStyle(s),
      f = dn(d);
    if (!f) return;
    const g = typeof t == 'function' ? t : Mo(t);
    return (
      mn(c, o.draggable.measure),
      g({
        active: { id: i, data: a.data, node: c, rect: o.draggable.measure(c) },
        draggableNodes: n,
        dragOverlay: { node: s, rect: o.dragOverlay.measure(u) },
        droppableContainers: r,
        measuringConfiguration: o,
        transform: f,
      })
    );
  });
}
function Mo(e) {
  const { duration: t, easing: n, sideEffects: r, keyframes: o } = { ...Ao, ...e };
  return (i) => {
    let { active: s, dragOverlay: a, transform: c, ...u } = i;
    if (!t) return;
    const d = { x: a.rect.left - s.rect.left, y: a.rect.top - s.rect.top },
      f = {
        scaleX: c.scaleX !== 1 ? (s.rect.width * c.scaleX) / a.rect.width : 1,
        scaleY: c.scaleY !== 1 ? (s.rect.height * c.scaleY) / a.rect.height : 1,
      },
      g = { x: c.x - d.x, y: c.y - d.y, ...f },
      h = o({ ...u, active: s, dragOverlay: a, transform: { initial: c, final: g } }),
      [x] = h,
      v = h[h.length - 1];
    if (JSON.stringify(x) === JSON.stringify(v)) return;
    const p = r?.({ active: s, dragOverlay: a, ...u }),
      m = a.node.animate(h, { duration: t, easing: n, fill: 'forwards' });
    return new Promise((y) => {
      m.onfinish = () => {
        (p?.(), y());
      };
    });
  };
}
let nn = 0;
function Oo(e) {
  return l.useMemo(() => {
    if (e != null) return (nn++, nn);
  }, [e]);
}
const No = O.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: s,
    wrapperElement: a = 'div',
    className: c,
    zIndex: u = 999,
  } = e;
  const {
      activatorEvent: d,
      active: f,
      activeNodeRect: g,
      containerNodeRect: h,
      draggableNodes: x,
      droppableContainers: v,
      dragOverlay: p,
      over: m,
      measuringConfiguration: y,
      scrollableAncestors: b,
      scrollableAncestorRects: C,
      windowRect: R,
    } = Rn(),
    E = l.useContext(dt),
    w = Oo(f?.id),
    S = Cn(s, {
      activatorEvent: d,
      active: f,
      activeNodeRect: g,
      containerNodeRect: h,
      draggingNodeRect: p.rect,
      over: m,
      overlayNodeRect: p.rect,
      scrollableAncestors: b,
      scrollableAncestorRects: C,
      transform: E,
      windowRect: R,
    }),
    M = Tt(g),
    N = Io({ config: r, draggableNodes: x, droppableContainers: v, measuringConfiguration: y }),
    I = M ? p.setRef : void 0;
  return O.createElement(
    So,
    null,
    O.createElement(
      wo,
      { animation: N },
      f && w
        ? O.createElement(
            Ro,
            {
              key: w,
              id: f.id,
              ref: I,
              as: a,
              activatorEvent: d,
              adjustScale: t,
              className: c,
              transition: i,
              rect: M,
              style: { zIndex: u, ...o },
              transform: S,
            },
            n,
          )
        : null,
    ),
  );
});
function Lt(e, t, n) {
  const r = e.slice();
  return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r);
}
function To(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return (i && (n[o] = i), n);
  }, Array(e.length));
}
function _e(e) {
  return e !== null && e >= 0;
}
function Lo(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ko(e) {
  return typeof e == 'boolean' ? { draggable: e, droppable: e } : e;
}
const An = (e) => {
    let { rects: t, activeIndex: n, overIndex: r, index: o } = e;
    const i = Lt(t, r, n),
      s = t[o],
      a = i[o];
    return !a || !s
      ? null
      : {
          x: a.left - s.left,
          y: a.top - s.top,
          scaleX: a.width / s.width,
          scaleY: a.height / s.height,
        };
  },
  Qe = { scaleX: 1, scaleY: 1 },
  Po = (e) => {
    var t;
    let { activeIndex: n, activeNodeRect: r, index: o, rects: i, overIndex: s } = e;
    const a = (t = i[n]) != null ? t : r;
    if (!a) return null;
    if (o === n) {
      const u = i[s];
      return u
        ? { x: 0, y: n < s ? u.top + u.height - (a.top + a.height) : u.top - a.top, ...Qe }
        : null;
    }
    const c = zo(i, o, n);
    return o > n && o <= s
      ? { x: 0, y: -a.height - c, ...Qe }
      : o < n && o >= s
        ? { x: 0, y: a.height + c, ...Qe }
        : { x: 0, y: 0, ...Qe };
  };
function zo(e, t, n) {
  const r = e[t],
    o = e[t - 1],
    i = e[t + 1];
  return r
    ? n < t
      ? o
        ? r.top - (o.top + o.height)
        : i
          ? i.top - (r.top + r.height)
          : 0
      : i
        ? i.top - (r.top + r.height)
        : o
          ? r.top - (o.top + o.height)
          : 0
    : 0;
}
const In = 'Sortable',
  Mn = O.createContext({
    activeIndex: -1,
    containerId: In,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: An,
    disabled: { draggable: !1, droppable: !1 },
  });
function Bo(e) {
  let { children: t, id: n, items: r, strategy: o = An, disabled: i = !1 } = e;
  const {
      active: s,
      dragOverlay: a,
      droppableRects: c,
      over: u,
      measureDroppableContainers: d,
    } = Rn(),
    f = He(In, n),
    g = a.rect !== null,
    h = l.useMemo(() => r.map((E) => (typeof E == 'object' && 'id' in E ? E.id : E)), [r]),
    x = s != null,
    v = s ? h.indexOf(s.id) : -1,
    p = u ? h.indexOf(u.id) : -1,
    m = l.useRef(h),
    y = !Lo(h, m.current),
    b = (p !== -1 && v === -1) || y,
    C = ko(i);
  (U(() => {
    y && x && d(h);
  }, [y, h, x, d]),
    l.useEffect(() => {
      m.current = h;
    }, [h]));
  const R = l.useMemo(
    () => ({
      activeIndex: v,
      containerId: f,
      disabled: C,
      disableTransforms: b,
      items: h,
      overIndex: p,
      useDragOverlay: g,
      sortedRects: To(h, c),
      strategy: o,
    }),
    [v, f, C.draggable, C.droppable, b, h, p, c, g, o],
  );
  return O.createElement(Mn.Provider, { value: R }, t);
}
const jo = (e) => {
    let { id: t, items: n, activeIndex: r, overIndex: o } = e;
    return Lt(n, r, o).indexOf(t);
  },
  Fo = (e) => {
    let {
      containerId: t,
      isSorting: n,
      wasDragging: r,
      index: o,
      items: i,
      newIndex: s,
      previousItems: a,
      previousContainerId: c,
      transition: u,
    } = e;
    return !u || !r || (a !== i && o === s) ? !1 : n ? !0 : s !== o && t === c;
  },
  Xo = { duration: 200, easing: 'ease' },
  On = 'transform',
  $o = ge.Transition.toString({ property: On, duration: 0, easing: 'linear' }),
  Yo = { roleDescription: 'sortable' };
function Ho(e) {
  let { disabled: t, index: n, node: r, rect: o } = e;
  const [i, s] = l.useState(null),
    a = l.useRef(n);
  return (
    U(() => {
      if (!t && n !== a.current && r.current) {
        const c = o.current;
        if (c) {
          const u = Re(r.current, { ignoreTransform: !0 }),
            d = {
              x: c.left - u.left,
              y: c.top - u.top,
              scaleX: c.width / u.width,
              scaleY: c.height / u.height,
            };
          (d.x || d.y) && s(d);
        }
      }
      n !== a.current && (a.current = n);
    }, [t, n, r, o]),
    l.useEffect(() => {
      i && s(null);
    }, [i]),
    i
  );
}
function Wo(e) {
  let {
    animateLayoutChanges: t = Fo,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = jo,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: u = Xo,
  } = e;
  const {
      items: d,
      containerId: f,
      activeIndex: g,
      disabled: h,
      disableTransforms: x,
      sortedRects: v,
      overIndex: p,
      useDragOverlay: m,
      strategy: y,
    } = l.useContext(Mn),
    b = Vo(r, h),
    C = d.indexOf(s),
    R = l.useMemo(() => ({ sortable: { containerId: f, index: C, items: d }, ...o }), [f, o, C, d]),
    E = l.useMemo(() => d.slice(d.indexOf(s)), [d, s]),
    {
      rect: w,
      node: S,
      isOver: M,
      setNodeRef: N,
    } = yo({
      id: s,
      data: R,
      disabled: b.droppable,
      resizeObserverConfig: { updateMeasurementsFor: E, ...c },
    }),
    {
      active: I,
      activatorEvent: V,
      activeNodeRect: K,
      attributes: q,
      setNodeRef: Ee,
      listeners: Ve,
      isDragging: j,
      over: Ke,
      setActivatorNodeRef: Z,
      transform: Ae,
    } = po({ id: s, data: R, attributes: { ...Yo, ...n }, disabled: b.draggable }),
    Ue = Zn(N, Ee),
    B = !!I,
    ee = B && !x && _e(g) && _e(p),
    he = !m && j,
    Ie = he && ee ? Ae : null,
    Ge = ee
      ? (Ie ?? (a ?? y)({ rects: v, activeNodeRect: K, activeIndex: g, overIndex: p, index: C }))
      : null,
    se = _e(g) && _e(p) ? i({ id: s, items: d, activeIndex: g, overIndex: p }) : C,
    te = I?.id,
    A = l.useRef({ activeId: te, items: d, newIndex: se, containerId: f }),
    Me = d !== A.current.items,
    J = t({
      active: I,
      containerId: f,
      isDragging: j,
      isSorting: B,
      id: s,
      index: C,
      items: d,
      newIndex: A.current.newIndex,
      previousItems: A.current.items,
      previousContainerId: A.current.containerId,
      transition: u,
      wasDragging: A.current.activeId != null,
    }),
    pe = Ho({ disabled: !J, index: C, node: S, rect: w });
  return (
    l.useEffect(() => {
      (B && A.current.newIndex !== se && (A.current.newIndex = se),
        f !== A.current.containerId && (A.current.containerId = f),
        d !== A.current.items && (A.current.items = d));
    }, [B, se, f, d]),
    l.useEffect(() => {
      if (te === A.current.activeId) return;
      if (te != null && A.current.activeId == null) {
        A.current.activeId = te;
        return;
      }
      const be = setTimeout(() => {
        A.current.activeId = te;
      }, 50);
      return () => clearTimeout(be);
    }, [te]),
    {
      active: I,
      activeIndex: g,
      attributes: q,
      data: R,
      rect: w,
      index: C,
      newIndex: se,
      items: d,
      isOver: M,
      isSorting: B,
      isDragging: j,
      listeners: Ve,
      node: S,
      overIndex: p,
      over: Ke,
      setNodeRef: Ue,
      setActivatorNodeRef: Z,
      setDroppableNodeRef: N,
      setDraggableNodeRef: Ee,
      transform: pe ?? Ge,
      transition: ne(),
    }
  );
  function ne() {
    if (pe || (Me && A.current.newIndex === C)) return $o;
    if (!((he && !lt(V)) || !u) && (B || J)) return ge.Transition.toString({ ...u, property: On });
  }
}
function Vo(e, t) {
  var n, r;
  return typeof e == 'boolean'
    ? { draggable: e, droppable: !1 }
    : {
        draggable: (n = e?.draggable) != null ? n : t.draggable,
        droppable: (r = e?.droppable) != null ? r : t.droppable,
      };
}
function it(e) {
  if (!e) return !1;
  const t = e.data.current;
  return !!(
    t &&
    'sortable' in t &&
    typeof t.sortable == 'object' &&
    'containerId' in t.sortable &&
    'items' in t.sortable &&
    'index' in t.sortable
  );
}
const Ko = [D.Down, D.Right, D.Up, D.Left],
  Uo = (e, t) => {
    let {
      context: {
        active: n,
        collisionRect: r,
        droppableRects: o,
        droppableContainers: i,
        over: s,
        scrollableAncestors: a,
      },
    } = t;
    if (Ko.includes(e.code)) {
      if ((e.preventDefault(), !n || !r)) return;
      const c = [];
      i.getEnabled().forEach((f) => {
        if (!f || (f != null && f.disabled)) return;
        const g = o.get(f.id);
        if (g)
          switch (e.code) {
            case D.Down:
              r.top < g.top && c.push(f);
              break;
            case D.Up:
              r.top > g.top && c.push(f);
              break;
            case D.Left:
              r.left > g.left && c.push(f);
              break;
            case D.Right:
              r.left < g.left && c.push(f);
              break;
          }
      });
      const u = mr({ collisionRect: r, droppableRects: o, droppableContainers: c });
      let d = cn(u, 'id');
      if ((d === s?.id && u.length > 1 && (d = u[1].id), d != null)) {
        const f = i.get(n.id),
          g = i.get(d),
          h = g ? o.get(g.id) : null,
          x = g?.node.current;
        if (x && h && f && g) {
          const p = ct(x).some((E, w) => a[w] !== E),
            m = Nn(f, g),
            y = Go(f, g),
            b =
              p || !m
                ? { x: 0, y: 0 }
                : { x: y ? r.width - h.width : 0, y: y ? r.height - h.height : 0 },
            C = { x: h.left, y: h.top };
          return b.x && b.y ? C : Fe(C, b);
        }
      }
    }
  };
function Nn(e, t) {
  return !it(e) || !it(t)
    ? !1
    : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Go(e, t) {
  return !it(e) || !it(t) || !Nn(e, t)
    ? !1
    : e.data.current.sortable.index < t.data.current.sortable.index;
}
const Tn = l.createContext({ attributes: {}, listeners: void 0, ref() {} }),
  Ln = l.memo(({ variant: e = 'borderless', className: t, children: n, id: r, style: o, ...i }) => {
    const {
      attributes: s,
      isDragging: a,
      listeners: c,
      setNodeRef: u,
      setActivatorNodeRef: d,
      transform: f,
      transition: g,
    } = Wo({ id: r });
    return oe.jsx(Tn, {
      value: l.useMemo(() => ({ attributes: s, listeners: c, ref: d }), [s, c, d]),
      children: oe.jsx(rn, {
        horizontal: !0,
        align: 'center',
        as: 'li',
        className: Un(Qn({ variant: e }), t),
        gap: 4,
        ref: u,
        style: {
          opacity: a ? 0.4 : void 0,
          transform: ge.Translate.toString(f),
          transition: g,
          ...o,
        },
        ...i,
        children: n,
      }),
    });
  });
Ln.displayName = 'SortableItem';
var qo = Ln;
const kn = l.memo(({ style: e, ...t }) => {
  const [n, r] = l.useState(!1),
    { attributes: o, listeners: i, ref: s } = l.use(Tn);
  return oe.jsx(Gn, {
    'glass': !0,
    'data-cypress': 'draggable-handle',
    'icon': qn,
    'size': 'small',
    'style': { cursor: n ? 'grab' : 'grabbing', ...e },
    'onMouseDown': () => r(!0),
    'onMouseUp': () => r(!1),
    ...t,
    ...o,
    ...i,
    'ref': s,
  });
});
kn.displayName = 'DragHandle';
var Jo = kn;
const _o = { sideEffects: En({ styles: { active: { opacity: '0.4' } } }) },
  Pn = l.memo(({ children: e }) => oe.jsx(No, { dropAnimation: _o, children: e }));
Pn.displayName = 'SortableOverlay';
var Qo = Pn;
function Zo(e, t, n) {
  const r = { ...e };
  return (
    t.top + e.y <= n.top
      ? (r.y = n.top - t.top)
      : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom),
    t.left + e.x <= n.left
      ? (r.x = n.left - t.left)
      : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right),
    r
  );
}
const ei = (e) => {
    let { transform: t } = e;
    return { ...t, x: 0 };
  },
  ti = (e) => {
    let { transform: t, draggingNodeRect: n, windowRect: r } = e;
    return !n || !r ? t : Zo(t, n, r);
  },
  zn = l.memo(({ ref: e, items: t, onChange: n, renderItem: r, gap: o = 8, ...i }) => {
    const [s, a] = l.useState(null),
      c = l.useMemo(() => t.find((d) => d.id === s?.id), [s, t]),
      u = gr(Wt(Nt), Wt(Mt, { coordinateGetter: Uo }));
    return oe.jsxs(go, {
      modifiers: [ei, ti],
      sensors: u,
      onDragCancel: () => {
        a(null);
      },
      onDragEnd: ({ active: d, over: f }) => {
        (f &&
          d.id !== f?.id &&
          n(
            Lt(
              t,
              t.findIndex(({ id: g }) => g === d.id),
              t.findIndex(({ id: g }) => g === f.id),
            ),
          ),
          a(null));
      },
      onDragStart: ({ active: d }) => {
        a(d);
      },
      children: [
        oe.jsx(Bo, {
          items: t,
          strategy: Po,
          children: oe.jsx(rn, {
            as: 'ul',
            className: ve.container,
            gap: o,
            ref: e,
            ...i,
            children: t.map((d) => oe.jsx(l.Fragment, { children: r(d) }, d.id)),
          }),
        }),
        oe.jsx(Qo, { children: c ? r(c) : null }),
      ],
    });
  });
zn.displayName = 'SortableList';
const kt = zn;
kt.Item = qo;
kt.DragHandle = Jo;
var gi = kt;
export { gi as S, li as a, ui as b, Rt as c, fi as d, di as e, ai as g, si as s, ci as u };
