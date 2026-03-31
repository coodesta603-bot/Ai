import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as f } from './Input-C_EgL0SG.js';
import './index-C8UyLGsD.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as c } from './useIMECompositionEvent-CkD1Q2jQ.js';
const E = o.memo(({ onChange: s, value: t, ...n }) => {
  const m = o.useRef(null),
    { compositionProps: p, isComposingRef: u } = c(),
    [r, e] = o.useState(t);
  return (
    o.useEffect(() => {
      e(t);
    }, [t]),
    a.jsx(f, {
      ref: m,
      onBlur: () => {
        s?.(r);
      },
      onChange: (i) => {
        e(i.target.value);
      },
      ...p,
      onPressEnter: () => {
        u.current || s?.(r);
      },
      ...n,
      value: r,
    })
  );
});
E.displayName = 'FormInput';
export { E as F };
