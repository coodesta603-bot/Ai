import { ka as i, v as s } from './index-C8UyLGsD.js';
const x = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getUserStoreState: i, useUserStore: s },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  e = '__LOBE_GLOBAL_AGENT_CONTEXT__';
class a {
  get context() {
    return typeof window > 'u' ? {} : (window[e] || (window[e] = {}), window[e]);
  }
  set context(t) {
    typeof window > 'u' || (window[e] = t);
  }
  getContext() {
    return this.context;
  }
  updateContext(t) {
    this.context = { ...this.context, ...t };
  }
  setContext(t) {
    this.context = t;
  }
  fillTemplate(t) {
    const n = this.getContext();
    return t
      ? t.replaceAll(/\{\{([^}]+)\}\}/g, (d, r) => {
          const o = r.trim();
          return n[o] !== void 0 ? String(n[o]) : '[N/A]';
        })
      : '';
  }
}
const g = new a();
export { g, x as i };
