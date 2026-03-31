import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { M as g, b2 as d, u as f, s as l } from './index-C8UyLGsD.js';
import { u as p } from './index-Br6hqyew.js';
var v = function (e, r) {
  return !Object.is(e, r);
};
function b(e, r) {
  r === void 0 && (r = v);
  var i = u.useRef(void 0),
    t = u.useRef(void 0);
  return (r(t.current, e) && ((i.current = t.current), (t.current = e)), i.current);
}
const m = (e) => {
  const r = g(d.isInboxAgent),
    [i, t, c] = p((s) => [s.activeAgentId, s.activeGroupId, s.useFetchTopics]),
    n = f(l.topicPageSize),
    { isValidating: o, data: a } = c(!0, {
      agentId: i,
      ...(e?.excludeTriggers && e.excludeTriggers.length > 0
        ? { excludeTriggers: e.excludeTriggers }
        : {}),
      groupId: t,
      isInbox: t ? !1 : r,
      pageSize: n,
    });
  return { isRevalidating: o && !!a };
};
export { m as a, b as u };
