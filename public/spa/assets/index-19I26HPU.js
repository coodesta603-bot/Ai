import { r as e } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { al as R, am as E } from './index-C8UyLGsD.js';
import { u as N, D as x } from './index-uNJ5HPPz.js';
const { TimePicker: F, RangePicker: y } = x,
  D = e.forwardRef((r, a) => e.createElement(y, { ...r, picker: 'time', mode: void 0, ref: a })),
  t = e.forwardRef((r, a) => {
    const {
        addon: n,
        renderExtraFooter: o,
        variant: c,
        bordered: m,
        classNames: l,
        styles: d,
        popupClassName: P,
        popupStyle: p,
        ...u
      } = r,
      [i] = R('timePicker', c, m),
      k = e.useMemo(() => {
        if (o) return o;
        if (n) return n;
      }, [n, o]),
      g = { ...r, variant: i },
      [f, v] = N('timePicker', l, d, P, p, g);
    return e.createElement(F, {
      ...u,
      mode: void 0,
      ref: a,
      renderExtraFooter: k,
      variant: i,
      classNames: f,
      styles: v,
    });
  }),
  s = E(t, 'popupAlign', void 0, 'picker');
t._InternalPanelDoNotUseOrYouWillBeFired = s;
t.RangePicker = D;
t._InternalPanelDoNotUseOrYouWillBeFired = s;
export { t as T };
