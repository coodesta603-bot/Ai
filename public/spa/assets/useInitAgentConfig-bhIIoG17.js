import { M as c, v as r, an as u, ao as d } from './index-C8UyLGsD.js';
const f = (n) => {
  const [o, a] = c((e) => [e.useFetchAgentConfig, e.activeAgentId]),
    t = r(u.isLogin),
    i = d(),
    g = n || a || i.aid || '',
    s = o(t, g);
  return { ...s, isLoading: s.isLoading && t };
};
export { f as u };
