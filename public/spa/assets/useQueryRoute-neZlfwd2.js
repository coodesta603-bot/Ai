import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { c as u, h as c } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { q as i } from './base-AbuBx_QK.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
const a = ({ hash: r, replace: e, url: t, prevQuery: o = {}, query: n = {} }) => {
    let s = i.stringifyUrl({ query: e ? n : { ...o, ...n }, url: t }, { skipNull: !0 });
    return (!c && r && (s = [s, r || location?.hash?.slice(1)].filter(Boolean).join('#')), s);
  },
  v = () => {
    const r = u();
    return p.useMemo(
      () => ({
        push: (e, t = {}) => {
          const o = i.parse(window.location.search);
          return r(a({ prevQuery: o, url: e, ...t }));
        },
        replace: (e, t = {}) => {
          const o = i.parse(window.location.search);
          return r(a({ prevQuery: o, url: e, ...t }), { replace: !0 });
        },
      }),
      [r],
    );
  };
export { v as u };
