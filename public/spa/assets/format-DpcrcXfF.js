import { U as s } from './currency-iJxIWo9y.js';
import { a0 as f, a1 as n } from './index-C8UyLGsD.js';
import './providerConfig-qS2Xx-oI.js';
import { a as i } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
const F = (r, e = 1) => {
    if (!r && r !== 0) return '--';
    const t = r / 1024;
    return t < 1024
      ? `${t.toFixed(e)} KB`
      : t < 1048576
        ? `${(t / 1024).toFixed(e)} MB`
        : `${(t / 1048576).toFixed(e)} GB`;
  },
  $ = (r, e = 2) => {
    if (!r && r !== 0) return '--';
    let t = '';
    return (
      r <= 1e3
        ? (t = r.toFixed(e) + ' Byte/s')
        : r / 1024 <= 1e3
          ? (t = (r / 1024).toFixed(e) + ' KB/s')
          : r / 1024 / 1024 <= 1e3
            ? (t = (r / 1024 / 1024).toFixed(e) + ' MB/s')
            : (t = (r / 1024 / 1024 / 1024).toFixed(e) + ' GB/s'),
      t
    );
  },
  d = (r) =>
    !r && r !== 0
      ? '--'
      : i(r)
        ? r < 60
          ? `${r.toFixed(1)} s`
          : r < 3600
            ? `${(r / 60).toFixed(1)} min`
            : `${(r / 3600).toFixed(2)} h`
        : r,
  M = (r) => {
    if (!r && r !== 0) return '--';
    if (!i(r)) return r;
    const e = new Intl.NumberFormat('en-US').format(r);
    return r >= 1e6
      ? (r / 1e6).toFixed(1) + 'M'
      : r >= 1e4
        ? (r / 1e3).toFixed(1) + 'K'
        : r === 0
          ? 0
          : e;
  },
  N = (r, e) => {
    if (!r && r !== 0) return '--';
    if (!e) return new Intl.NumberFormat('en-US').format(r);
    const [t, o] = r.toFixed(e).split('.');
    return `${f(t).format('0,0')}.${o}`;
  },
  B = (r) => (!r && r !== 0 ? '--' : f(r).format('0,0')),
  h = (r) => {
    if (!r && r !== 0) return '--';
    if (r > 0 && r < 1024) return '1K';
    let e = Math.floor(r / 1024);
    return (
      ((r >= 1024 && r < 1024 * 41) || r >= 128e3) && (e = Math.floor(r / 1e3)),
      r === 131072 ? '128K' : e < 1e3 ? `${e}K` : `${Math.floor(e / 1e3)}M`
    );
  },
  S = (r) =>
    r.toLocaleString('en-US', { maximumSignificantDigits: 4, minimumSignificantDigits: 2 }),
  a = (r, e = 2) => {
    if (!r && r !== 0) return '--';
    if (e === 0) return f(r).format('0,0');
    const [t, o] = r.toFixed(e).split('.');
    return `${f(t).format('0,0')}.${o}`;
  },
  z = (r, e) => (!r && r !== 0 ? '-' : a(e === 'CNY' ? r / s : r)),
  K = (r) => (r ? n(r).format('YYYY-MM-DD') : '--');
export { B as a, $ as b, d as c, F as d, S as e, h as f, M as g, z as h, a as i, N as j, K as k };
