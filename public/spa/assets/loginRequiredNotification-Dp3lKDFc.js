import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { v as u, g as a, cH as c, cI as f, a4 as m } from './index-C8UyLGsD.js';
import { r as i } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { i as l } from './index-Dq_SzPY7.js';
var g = function (e) {
    var r = i.useRef(e);
    r.current = i.useMemo(
      function () {
        return e;
      },
      [e],
    );
    var n = i.useRef(void 0);
    return (
      n.current ||
        (n.current = function () {
          for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
          return r.current.apply(this, t);
        }),
      n.current
    );
  },
  d = function (e, r) {
    var n = g(e),
      t = i.useRef(null),
      o = i.useCallback(function () {
        t.current && clearTimeout(t.current);
      }, []);
    return (
      i.useEffect(
        function () {
          if (!(!l(r) || r < 0)) return ((t.current = setTimeout(n, r)), o);
        },
        [r],
      ),
      o
    );
  };
const p = i.memo(({ timeout: e = 2e3 }) => {
    const r = u((t) => t.openLogin),
      { t: n } = a('error');
    return (
      d(() => {
        r();
      }, e),
      s.jsx('div', {
        style: { cursor: 'pointer', fontSize: 12 },
        children: n('loginRequired.desc'),
      })
    );
  }),
  v = {
    redirect: ({ timeout: e = 2e3 } = {}) => {
      c.error({
        description: s.jsx(p, { timeout: e }),
        duration: e / 1e3,
        icon: s.jsx(m, { emoji: '🫡', size: 24 }),
        message: f('loginRequired.title', { ns: 'error' }),
        showProgress: !0,
        type: 'warning',
      });
    },
  },
  z = Object.freeze(
    Object.defineProperty({ __proto__: null, loginRequired: v }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { z as a, v as l, g as u };
