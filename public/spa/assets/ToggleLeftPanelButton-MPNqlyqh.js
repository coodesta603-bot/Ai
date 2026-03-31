import { j as c } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  u as g,
  s as m,
  v as f,
  w as p,
  b as u,
  g as P,
  A as _,
  x as E,
} from './index-C8UyLGsD.js';
import { r as L } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { V as T, X as x } from '../vendor/vendor-icons-BHMUH78i.js';
const y = 'toggle_left_panel_button',
  I = L.memo(({ title: o, showActive: s, icon: a, size: n }) => {
    const [t, l] = g((e) => [m.showLeftPanel(e), e.toggleLeftPanel]),
      r = f(p.getHotkeyById(u.ToggleLeftPanel)),
      { t: i } = P(['chat', 'hotkey']);
    return c.jsx(_, {
      active: s ? t : void 0,
      icon: a || (t ? T : x),
      id: y,
      size: n || E,
      title: o || i('toggleLeftPanel.title', { ns: 'hotkey' }),
      tooltipProps: { hotkey: r, placement: 'bottom' },
      onClick: () => l(),
    });
  });
export { I as T, y as a };
