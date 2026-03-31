import { h as r, E as n, G as o } from './index-C8UyLGsD.js';
const t = (a) => o(a).language || 'auto',
  s = (a) => {
    const e = t(a);
    return e === 'auto' ? (r ? n : navigator.language) : e;
  },
  u = { currentLanguage: s, language: t };
export { u as g };
