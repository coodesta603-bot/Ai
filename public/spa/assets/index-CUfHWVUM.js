import { _ as c } from './tslib.es6-BWnLUwbd.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as a } from './index-Bdt4jy61.js';
function p(e, n) {
  var r = c(o.useState(e), 2),
    t = r[0],
    u = r[1],
    s = a(function () {
      u(e);
    }, n).run;
  return (
    o.useEffect(
      function () {
        s();
      },
      [e],
    ),
    t
  );
}
export { p as u };
