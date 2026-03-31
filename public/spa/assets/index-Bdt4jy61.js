import { a as c, _ as l } from './tslib.es6-BWnLUwbd.js';
import { aF as r } from './index-C8UyLGsD.js';
import { d } from './debounce-DTbPRiJl.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as i, a as b } from './index-CVZJoh5n.js';
function v() {
  var n = (typeof r > 'u' ? 'undefined' : typeof r) == 'object' && r && r.Object === Object && r,
    e = typeof self == 'object' && self && self.Object === Object && self;
  return n || e;
}
v() || (r.Date = Date);
function h(n, e) {
  var f,
    u = i(n),
    s = (f = e?.wait) !== null && f !== void 0 ? f : 1e3,
    a = m.useMemo(function () {
      return d(
        function () {
          for (var o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
          return u.current.apply(u, c([], l(o), !1));
        },
        s,
        e,
      );
    }, []);
  return (
    b(function () {
      a.cancel();
    }),
    { run: a, cancel: a.cancel, flush: a.flush }
  );
}
export { h as u };
