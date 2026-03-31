import { j as p } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { T as f } from './TextArea-CHeYteyg.js';
import './index-C8UyLGsD.js';
import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from './useIMECompositionEvent-CkD1Q2jQ.js';
const x = t.memo(({ onChange: r, value: o, ...s }) => {
  const a = t.useRef(null),
    { compositionProps: m, isComposingRef: n } = l(),
    [e, u] = t.useState(o);
  return p.jsx(f, {
    ref: a,
    onBlur: () => {
      r?.(e);
    },
    onChange: (i) => {
      u(i.target.value);
    },
    ...m,
    onPressEnter: () => {
      n.current || r?.(e);
    },
    ...s,
    value: e,
  });
});
x.displayName = 'TextArea';
export { x as T };
