import { ap as u, aq as l } from './index-C8UyLGsD.js';
import { s as m, g as x, a as d, b as f } from './SortableList-Cl2V_SXC.js';
import { r as t, R as C } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { c as S, j as y } from '../vendor/vendor-motion-Dbb9VQJo.js';
const E = { trigger: { display: 'contents' } },
  M = t.memo(({ children: e, items: o, onContextMenu: a, ...r }) => {
    const n = t.useId(),
      p = t.useSyncExternalStore(m, x, d),
      s = p.open && p.triggerId === n,
      c = t.useCallback(
        (i) => {
          (o && (i.preventDefault(), f(typeof o == 'function' ? o() : o)), a?.(i));
        },
        [o, a],
      ),
      g = {
        ...r,
        'aria-expanded': s || void 0,
        'className': S(u.ContextTrigger, r.className),
        'data-contextmenu-trigger': n,
        'data-popup-open': s ? '' : void 0,
        'data-state': s ? 'open' : void 0,
        'onContextMenu': c,
      };
    return t.isValidElement(e) && C.Children.only(e)
      ? t.cloneElement(e, l(e.props, g))
      : y.jsx('span', { style: E.trigger, ...g, children: e });
  });
M.displayName = 'ContextMenuTrigger';
export { M as C };
