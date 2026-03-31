import { j as u } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as f } from './InputPassword-B5L4g8CK.js';
import './index-C8UyLGsD.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as c } from './useIMECompositionEvent-CkD1Q2jQ.js';
const E = o.memo(({ onChange: t, value: s, ...m }) => {
  const n = o.useRef(null),
    { compositionProps: a, isComposingRef: i } = c(),
    [r, e] = o.useState(s);
  return (
    o.useEffect(() => {
      e(s);
    }, [s]),
    u.jsx(f, {
      ref: n,
      onBlur: () => {
        t?.(r);
      },
      onChange: (p) => {
        e(p.target.value);
      },
      ...a,
      onPressEnter: () => {
        i.current || t?.(r);
      },
      ...m,
      value: r,
    })
  );
});
E.displayName = 'FormPassword';
export { E as F };
