import { j as n } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as P } from './index-BSyA7UzD.js';
import {
  u as p,
  s as u,
  k as R,
  bn as x,
  v as f,
  w as _,
  b,
  g as S,
  A as T,
  x as k,
} from './index-C8UyLGsD.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { aT as E, aU as w } from '../vendor/vendor-icons-BHMUH78i.js';
const O = s.memo(
    ({
      maxWidth: l = 600,
      minWidth: g = 300,
      children: i,
      defaultWidth: r = 360,
      onSizeChange: h,
      ...t
    }) => {
      const [c, m] = p((e) => [u.showRightPanel(e), e.toggleRightPanel]),
        [d, o] = s.useState(r);
      return n.jsx(P, {
        backgroundColor: R.colorBgContainer,
        expand: c,
        expandable: !1,
        maxWidth: l,
        minWidth: g,
        placement: 'right',
        size: { height: '100%', width: d },
        onExpandChange: (e) => m(e),
        onSizeChange: (e, a) => {
          (a?.width && o(a.width), a && h?.(a));
        },
        ...t,
        children: n.jsx(s.Suspense, { fallback: n.jsx(x, { debugId: 'RightPanel' }), children: i }),
      });
    },
  ),
  y = 'toggle_right_panel_button',
  v = s.memo(({ title: l, showActive: g, icon: i, hideWhenExpanded: r, size: h }) => {
    const [t, c] = p((o) => [u.showRightPanel(o), o.toggleRightPanel]),
      m = f(_.getHotkeyById(b.ToggleRightPanel)),
      { t: d } = S(['chat', 'hotkey']);
    return r && t
      ? null
      : n.jsx(T, {
          active: g ? t : void 0,
          icon: i || (t ? E : w),
          id: y,
          size: h || k,
          title: l || d('toggleRightPanel.title', { ns: 'hotkey' }),
          tooltipProps: { hotkey: m, placement: 'bottom' },
          onClick: () => c(),
        });
  });
export { O as R, v as T };
