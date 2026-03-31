import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a6 as a, a7 as t, a8 as i, a9 as n, aa as c } from './index-C8UyLGsD.js';
const f = () => {
  const o = s.useRef(a()),
    e = s.useRef(t()),
    r = {
      isAndroid: o.current?.toLowerCase() === 'android',
      isApple: o.current && ['mac os', 'ios'].includes(o.current?.toLowerCase()),
      isArc: c(),
      isChrome: e.current?.toLowerCase() === 'chrome',
      isChromium:
        e.current && ['chrome', 'edge', 'opera', 'brave'].includes(e.current?.toLowerCase()),
      isEdge: e.current?.toLowerCase() === 'edge',
      isFirefox: e.current?.toLowerCase() === 'firefox',
      isIOS: o.current?.toLowerCase() === 'ios',
      isMacOS: o.current?.toLowerCase() === 'mac os',
      isPWA: n(),
      isSafari: e.current?.toLowerCase() === 'safari',
      isSonomaOrLaterSafari: i(),
    };
  return s.useMemo(
    () => ({
      ...r,
      isSupportInstallPWA:
        !r.isArc &&
        !r.isFirefox &&
        ((r.isChromium && !r.isIOS) || (r.isMacOS && r.isSonomaOrLaterSafari)),
    }),
    [],
  );
};
export { f as u };
