import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { K as c, M as a, N as u, c as g, d as p } from './index-C8UyLGsD.js';
const M = (o = c.Meta) => {
  const t = a((i) => i.activeAgentId),
    e = u(),
    s = g(),
    n = p();
  return r.useMemo(
    () =>
      e
        ? () => s(`/chat/settings?session=${t}&showMobileWorkspace=true`)
        : () => {
            a.setState({ showAgentSetting: !0 });
          },
    [t, s, n.pathname, o, e],
  );
};
export { M as u };
