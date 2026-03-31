import { f as m } from './index-BJ9KbyB2.js';
import { v as A, w as c, X as l, Y as S } from './index-C8UyLGsD.js';
import { u as b } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const T = (s, a, e, o) => {
  const i = A(c.getHotkeyById(s)),
    u = l((r) => r.isMobile),
    t = Array.isArray(e) ? (Array.isArray(o) ? void 0 : o) : e,
    n = Array.isArray(e) ? e : Array.isArray(o) ? o : void 0,
    y = S.find((r) => r.id === s),
    f = m(
      i,
      (...r) => a(...r),
      {
        enableOnFormTags: !0,
        preventDefault: !0,
        ...t,
        enabled: !u && t?.enabled,
        scopes: b([s, ...(y?.scopes || []), ...(t?.scopes || [])]),
      },
      n,
    );
  return { id: s, ref: f };
};
export { T as u };
