import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as c, j as f, a1 as o, f as u, k as d } from './index-C8UyLGsD.js';
const i = new Date().toISOString(),
  y = (t) => {
    try {
      return t ? o(t).toISOString() : i;
    } catch {
      return i;
    }
  },
  l = (t, e, s) => {
    if (s) return o(t).format(s);
    const r = o(t),
      a = o();
    return r.isSame(a, 'day')
      ? e('time.today')
      : r.isSame(a.subtract(1, 'day'), 'day')
        ? e('time.yesterday')
        : r.isSame(a, 'year')
          ? r.format(e('time.formatThisYear'))
          : r.format(e('time.formatOtherYear'));
  },
  S = u(({ css: t }) => ({
    time: t`
      font-size: 12px;
      color: ${d.colorTextSecondary};
      letter-spacing: 0.02em;
    `,
  })),
  h = ({ date: t, style: e, className: s, template: r }) => {
    const { t: a } = c('discover'),
      n = l(t, a, r);
    return m.jsx('time', {
      'aria-label': 'published-date',
      'className': f(S.time, s),
      'dateTime': y(t),
      'style': e,
      'children': n,
    });
  };
export { h as P };
